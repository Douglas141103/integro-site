(() => {
  "use strict";

  const cfg = window.INTEGRO_SUPABASE || {};
  const client = window.supabase?.createClient?.(cfg.url, cfg.anonKey);
  const $ = (id) => document.getElementById(id);

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function formatDateBR(value) {
    if (!value) return "—";
    const [y, m, d] = String(value).slice(0, 10).split("-");
    return y && m && d ? `${d}/${m}/${y}` : value;
  }

  function show(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    setTimeout(() => { box.hidden = true; }, 6500);
  }

  async function context() {
    const { data: userData } = await client.auth.getUser();
    if (!userData?.user) throw new Error("Usuário não autenticado.");

    const { data: profile } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (!profile) throw new Error("Perfil não encontrado.");

    const { data: school } = await client
      .from("schools")
      .select("id, name")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (!school) throw new Error("Unidade ativa não encontrada.");
    return { user: userData.user, profile, school };
  }

  async function loadData() {
    const enrollmentId = $("documentEnrollment")?.value || "";
    if (!enrollmentId) throw new Error("Selecione uma matrícula.");

    const ctx = await context();

    const { data: enrollment } = await client
      .from("course_enrollments")
      .select("*")
      .eq("id", enrollmentId)
      .eq("school_id", ctx.school.id)
      .maybeSingle();

    if (!enrollment) throw new Error("Matrícula não encontrada.");

    const [courseRes, classRes, modulesRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes] = await Promise.all([
      client.from("courses").select("*").eq("id", enrollment.course_id).maybeSingle(),
      client.from("course_classes").select("*").eq("id", enrollment.class_id).maybeSingle(),
      client.from("course_modules").select("*").eq("school_id", ctx.school.id).eq("course_id", enrollment.course_id).order("order_index", { ascending: true }),
      client.from("course_assessments").select("*").eq("school_id", ctx.school.id).eq("class_id", enrollment.class_id).order("assessment_date", { ascending: true }),
      client.from("course_grades").select("*").eq("school_id", ctx.school.id).eq("enrollment_id", enrollment.id),
      client.from("course_lessons").select("*").eq("school_id", ctx.school.id).eq("class_id", enrollment.class_id),
      client.from("course_attendance").select("*").eq("school_id", ctx.school.id).eq("enrollment_id", enrollment.id)
    ]);

    const error = [courseRes, classRes, modulesRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes].find((res) => res.error)?.error;
    if (error) throw error;

    const data = {
      ctx,
      enrollment,
      course: courseRes.data || {},
      klass: classRes.data || {},
      modules: modulesRes.data || [],
      assessments: assessmentsRes.data || [],
      grades: gradesRes.data || [],
      lessons: lessonsRes.data || [],
      attendance: attendanceRes.data || []
    };

    const overall = calculateAverage(data.assessments, data.grades);
    const present = data.attendance.filter((a) => a.status === "presente" || a.status === "justificada").length;

    data.average = overall;
    data.frequency = data.lessons.length ? Number(((present / data.lessons.length) * 100).toFixed(1)) : null;
    data.result = data.average === null
      ? "Em andamento"
      : data.average >= 7 && (data.frequency === null || data.frequency >= 75)
        ? "Aprovado"
        : "Em recuperação / pendente";

    return data;
  }

  function calculateAverage(assessments, grades) {
    let weighted = 0;
    let weights = 0;

    assessments.forEach((assessment) => {
      const grade = grades.find((item) => item.assessment_id === assessment.id);
      if (grade?.score === null || grade?.score === undefined || grade?.score === "") return;

      const max = Number(assessment.max_score || 10) || 10;
      const weight = Number(assessment.weight || 1) || 1;
      const normalized = (Number(grade.score || 0) / max) * 10;

      weighted += normalized * weight;
      weights += weight;
    });

    return weights ? Number((weighted / weights).toFixed(1)) : null;
  }

  function moduleName(data, id) {
    if (!id) return "Sem módulo/matéria";
    return data.modules.find((module) => module.id === id)?.name || "Módulo não localizado";
  }

  function moduleGroups(data) {
    const groups = data.modules.map((module) => {
      const assessments = data.assessments.filter((assessment) => assessment.course_module_id === module.id);
      return {
        id: module.id,
        order: module.order_index || "—",
        name: module.name,
        workload: module.workload_hours || "—",
        description: module.description || "—",
        assessments,
        average: calculateAverage(assessments, data.grades)
      };
    });

    const withoutModule = data.assessments.filter((assessment) => !assessment.course_module_id);
    if (withoutModule.length) {
      groups.push({
        id: "sem_modulo",
        order: "—",
        name: "Sem módulo/matéria",
        workload: "—",
        description: "Avaliações ainda não vinculadas a um módulo/matéria.",
        assessments: withoutModule,
        average: calculateAverage(withoutModule, data.grades)
      });
    }

    return groups;
  }

  function rowsModuleAverages(data) {
    const groups = moduleGroups(data);
    if (!groups.length) return `<tr><td colspan="5">Nenhum módulo/matéria cadastrado ou avaliado.</td></tr>`;

    return groups.map((group) => `
      <tr>
        <td>${safe(group.order)}</td>
        <td>${safe(group.name)}</td>
        <td>${safe(group.workload)}</td>
        <td>${safe(group.assessments.length)}</td>
        <td><b>${group.average === null ? "—" : safe(group.average)}</b></td>
      </tr>
    `).join("");
  }

  function rowsGradesByModule(data) {
    const groups = moduleGroups(data);
    if (!groups.length) return `<tr><td colspan="6">Nenhuma avaliação registrada.</td></tr>`;

    return groups.map((group) => {
      const header = `
        <tr class="module-row">
          <td colspan="6">
            <b>Módulo/matéria:</b> ${safe(group.name)}
            &nbsp; | &nbsp; <b>C.H.:</b> ${safe(group.workload)}
            &nbsp; | &nbsp; <b>Média do módulo:</b> ${group.average === null ? "—" : safe(group.average)}
          </td>
        </tr>
      `;

      const rows = group.assessments.length
        ? group.assessments.map((assessment) => {
            const grade = data.grades.find((item) => item.assessment_id === assessment.id);
            return `
              <tr>
                <td>${safe(formatDateBR(assessment.assessment_date))}</td>
                <td>${safe(assessment.title)}</td>
                <td>${safe(assessment.assessment_type)}</td>
                <td>${safe(assessment.weight || 1)}</td>
                <td>${safe(grade?.score ?? "—")}</td>
                <td>${safe(assessment.max_score || 10)}</td>
              </tr>
            `;
          }).join("")
        : `<tr><td colspan="6">Nenhuma avaliação registrada neste módulo/matéria.</td></tr>`;

      return header + rows;
    }).join("");
  }

  function openPrint(html) {
    const win = window.open("", "_blank");
    if (!win) return alert("Permita pop-ups para imprimir.");
    win.document.open();
    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 350);
  }

  async function updateSummary(data) {
    await client
      .from("course_enrollments")
      .update({
        final_average: data.average,
        attendance_percentage: data.frequency,
        final_result: data.result,
        updated_at: new Date().toISOString()
      })
      .eq("id", data.enrollment.id)
      .eq("school_id", data.ctx.school.id);
  }

  async function printReport(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    try {
      const data = await loadData();
      await updateSummary(data);

      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Boletim do Curso</title><style>@page{size:A4;margin:14mm}body{font-family:Arial,sans-serif;color:#12322a}.sheet{border:2px solid #0f3d2e;border-radius:18px;padding:22px}.head{border-bottom:2px solid #0f3d2e;margin-bottom:15px;padding-bottom:10px}h1{margin:0;color:#0f3d2e}.box{border:1px solid #cfe2d9;border-radius:12px;padding:12px;margin:10px 0;background:#fbfefc}.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{border:1px solid #cfe2d9;padding:7px;text-align:left;font-size:12px}th{background:#e8f5ee}.module-row td{background:#fff4d6;color:#3f2f0f;font-size:13px}.sig{display:grid;grid-template-columns:1fr 1fr;gap:45px;margin-top:45px}.line{border-top:1px solid #12322a;text-align:center;padding-top:8px}</style></head><body><main class="sheet"><div class="head"><h1>INSTITUTO INTEGRO CURSOS</h1><h2>Boletim de Desempenho por Módulo</h2><p>Data: ${formatDateBR(todayISO())}</p></div><section class="box grid"><div><b>Aluno:</b><br>${safe(data.enrollment.student_name_snapshot)}</div><div><b>Curso:</b><br>${safe(data.course.name || "—")}</div><div><b>Turma:</b><br>${safe(data.klass.class_name || "—")}</div><div><b>Carga horária:</b><br>${safe(data.course.workload_hours || "—")} horas</div><div><b>Média geral:</b><br>${data.average === null ? "—" : safe(data.average)}</div><div><b>Frequência:</b><br>${data.frequency === null ? "—" : `${safe(data.frequency)}%`}</div><div><b>Resultado:</b><br>${safe(data.result)}</div><div><b>Aulas:</b><br>${safe(data.lessons.length)}</div></section><h3>Resumo por módulo/matéria</h3><table><thead><tr><th>Ordem</th><th>Módulo/matéria</th><th>C.H.</th><th>Avaliações</th><th>Média do módulo</th></tr></thead><tbody>${rowsModuleAverages(data)}</tbody></table><h3>Notas por módulo/matéria</h3><table><thead><tr><th>Data</th><th>Avaliação</th><th>Tipo</th><th>Peso</th><th>Nota</th><th>Máx.</th></tr></thead><tbody>${rowsGradesByModule(data)}</tbody></table><div class="sig"><div class="line">Coordenação Pedagógica</div><div class="line">Direção / Administração</div></div></main></body></html>`;
      openPrint(html);
      show("Boletim gerado com médias por módulo.", "ok");
    } catch (error) {
      console.error(error);
      show(error.message || "Erro ao gerar boletim.", "error");
    }
  }

  async function printCertificate(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    try {
      const data = await loadData();
      await updateSummary(data);
      const number = `CERT-${new Date().getFullYear()}-${String(data.enrollment.id).slice(0, 8).toUpperCase()}`;

      await client.from("course_certificates").upsert({
        school_id: data.ctx.school.id,
        enrollment_id: data.enrollment.id,
        certificate_number: number,
        issued_at: todayISO(),
        workload_hours: data.course.workload_hours || null,
        final_average: data.average,
        attendance_percentage: data.frequency,
        status: "emitido",
        created_by: data.ctx.user.id
      }, { onConflict: "enrollment_id" });

      const moduleText = data.modules.length ? `organizado em ${data.modules.length} módulo(s)/matéria(s)` : "com matriz curricular registrada";
      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Certificado</title><style>@page{size:A4 landscape;margin:13mm}body{font-family:Georgia,serif;color:#0f3d2e}.cert{height:177mm;border:8px double #0f3d2e;border-radius:22px;padding:30px;text-align:center;display:flex;flex-direction:column;justify-content:center}h1{font-size:48px;letter-spacing:.06em;color:#09291f}.small{font-family:Arial,sans-serif;font-weight:800;letter-spacing:.14em}.name{font-size:36px;font-weight:900;color:#09291f;margin:16px 0;border-bottom:2px solid #d8a94b;display:inline-block;padding:0 30px 8px}p{font-size:20px;line-height:1.7}.sig{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:44px;font-family:Arial,sans-serif}.line{border-top:1px solid #0f3d2e;padding-top:8px}</style></head><body><main class="cert"><div class="small">INSTITUTO INTEGRO CURSOS</div><h1>CERTIFICADO</h1><p>Certificamos que</p><div class="name">${safe(data.enrollment.student_name_snapshot)}</div><p>concluiu o curso de <b>${safe(data.course.name || "Curso")}</b>, ${safe(moduleText)}, com carga horária de <b>${safe(data.course.workload_hours || "—")} horas</b>, média final <b>${data.average === null ? "—" : safe(data.average)}</b> e frequência de <b>${data.frequency === null ? "—" : `${safe(data.frequency)}%`}</b>.</p><p>Certificado nº ${safe(number)} — Manaus, ${formatDateBR(todayISO())}.</p><div class="sig"><div class="line">Coordenação Pedagógica</div><div class="line">Direção / Administração</div></div></main></body></html>`;
      openPrint(html);
      show("Certificado emitido com módulos/matérias.", "ok");
    } catch (error) {
      console.error(error);
      show(error.message || "Erro ao emitir certificado.", "error");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    $("printReportBtn")?.addEventListener("click", printReport, true);
    $("printCertificateBtn")?.addEventListener("click", printCertificate, true);
  });
})();
