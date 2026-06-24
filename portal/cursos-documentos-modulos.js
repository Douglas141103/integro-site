(() => {
  "use strict";

  const cfg = window.INTEGRO_SUPABASE || {};
  const client = window.supabase?.createClient?.(cfg.url, cfg.anonKey);
  const $ = (id) => document.getElementById(id);

  function safe(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
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
    const { data: profile } = await client.from("profiles").select("id, full_name, role, school_id").eq("id", userData.user.id).maybeSingle();
    if (!profile) throw new Error("Perfil não encontrado.");
    const { data: school } = await client.from("schools").select("id, name").eq("id", profile.school_id).maybeSingle();
    if (!school) throw new Error("Unidade ativa não encontrada.");
    return { user: userData.user, profile, school };
  }

  async function loadData() {
    const enrollmentId = $("documentEnrollment")?.value || "";
    if (!enrollmentId) throw new Error("Selecione uma matrícula.");
    const ctx = await context();

    const { data: enrollment } = await client.from("course_enrollments").select("*").eq("id", enrollmentId).eq("school_id", ctx.school.id).maybeSingle();
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

    const course = courseRes.data || {};
    const klass = classRes.data || {};
    const modules = modulesRes.data || [];
    const assessments = assessmentsRes.data || [];
    const grades = gradesRes.data || [];
    const lessons = lessonsRes.data || [];
    const attendance = attendanceRes.data || [];

    let weighted = 0;
    let weights = 0;
    assessments.forEach((a) => {
      const g = grades.find((x) => x.assessment_id === a.id);
      if (g?.score === null || g?.score === undefined || g?.score === "") return;
      const max = Number(a.max_score || 10) || 10;
      const weight = Number(a.weight || 1) || 1;
      weighted += ((Number(g.score || 0) / max) * 10) * weight;
      weights += weight;
    });

    const average = weights ? Number((weighted / weights).toFixed(1)) : null;
    const present = attendance.filter((a) => a.status === "presente" || a.status === "justificada").length;
    const frequency = lessons.length ? Number(((present / lessons.length) * 100).toFixed(1)) : null;
    const result = average === null ? "Em andamento" : average >= 7 && (frequency === null || frequency >= 75) ? "Aprovado" : "Em recuperação / pendente";

    return { ctx, enrollment, course, klass, modules, assessments, grades, lessons, average, frequency, result };
  }

  function moduleName(data, id) {
    return id ? data.modules.find((m) => m.id === id)?.name || "Módulo não localizado" : "Sem módulo/matéria";
  }

  function rowsModules(data) {
    return data.modules.length ? data.modules.map((m) => `<tr><td>${safe(m.order_index || "—")}</td><td>${safe(m.name)}</td><td>${safe(m.workload_hours || "—")}</td><td>${safe(m.description || "—")}</td></tr>`).join("") : `<tr><td colspan="4">Nenhum módulo/matéria cadastrado.</td></tr>`;
  }

  function rowsGrades(data) {
    return data.assessments.length ? data.assessments.map((a) => {
      const g = data.grades.find((x) => x.assessment_id === a.id);
      return `<tr><td>${safe(formatDateBR(a.assessment_date))}</td><td>${safe(moduleName(data, a.course_module_id))}</td><td>${safe(a.title)}</td><td>${safe(a.assessment_type)}</td><td>${safe(g?.score ?? "—")}</td><td>${safe(a.max_score || 10)}</td></tr>`;
    }).join("") : `<tr><td colspan="6">Nenhuma avaliação registrada.</td></tr>`;
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
    await client.from("course_enrollments").update({ final_average: data.average, attendance_percentage: data.frequency, final_result: data.result, updated_at: new Date().toISOString() }).eq("id", data.enrollment.id).eq("school_id", data.ctx.school.id);
  }

  async function printReport(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    try {
      const d = await loadData();
      await updateSummary(d);
      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Boletim do Curso</title><style>@page{size:A4;margin:14mm}body{font-family:Arial,sans-serif;color:#12322a}.sheet{border:2px solid #0f3d2e;border-radius:18px;padding:22px}.head{border-bottom:2px solid #0f3d2e;margin-bottom:15px;padding-bottom:10px}h1{margin:0;color:#0f3d2e}.box{border:1px solid #cfe2d9;border-radius:12px;padding:12px;margin:10px 0;background:#fbfefc}.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{border:1px solid #cfe2d9;padding:7px;text-align:left;font-size:12px}th{background:#e8f5ee}.sig{display:grid;grid-template-columns:1fr 1fr;gap:45px;margin-top:45px}.line{border-top:1px solid #12322a;text-align:center;padding-top:8px}</style></head><body><main class="sheet"><div class="head"><h1>INSTITUTO INTEGRO CURSOS</h1><h2>Boletim de Desempenho</h2><p>Data: ${formatDateBR(todayISO())}</p></div><section class="box grid"><div><b>Aluno:</b><br>${safe(d.enrollment.student_name_snapshot)}</div><div><b>Curso:</b><br>${safe(d.course.name || "—")}</div><div><b>Turma:</b><br>${safe(d.klass.class_name || "—")}</div><div><b>Carga horária:</b><br>${safe(d.course.workload_hours || "—")} horas</div><div><b>Média final:</b><br>${d.average === null ? "—" : safe(d.average)}</div><div><b>Frequência:</b><br>${d.frequency === null ? "—" : `${safe(d.frequency)}%`}</div><div><b>Resultado:</b><br>${safe(d.result)}</div><div><b>Aulas:</b><br>${safe(d.lessons.length)}</div></section><h3>Módulos/matérias</h3><table><thead><tr><th>Ordem</th><th>Módulo/matéria</th><th>C.H.</th><th>Descrição</th></tr></thead><tbody>${rowsModules(d)}</tbody></table><h3>Notas</h3><table><thead><tr><th>Data</th><th>Módulo/matéria</th><th>Avaliação</th><th>Tipo</th><th>Nota</th><th>Máx.</th></tr></thead><tbody>${rowsGrades(d)}</tbody></table><div class="sig"><div class="line">Coordenação Pedagógica</div><div class="line">Direção / Administração</div></div></main></body></html>`;
      openPrint(html);
      show("Boletim gerado com módulos/matérias.", "ok");
    } catch (error) {
      console.error(error);
      show(error.message || "Erro ao gerar boletim.", "error");
    }
  }

  async function printCertificate(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    try {
      const d = await loadData();
      await updateSummary(d);
      const number = `CERT-${new Date().getFullYear()}-${String(d.enrollment.id).slice(0, 8).toUpperCase()}`;
      await client.from("course_certificates").upsert({ school_id: d.ctx.school.id, enrollment_id: d.enrollment.id, certificate_number: number, issued_at: todayISO(), workload_hours: d.course.workload_hours || null, final_average: d.average, attendance_percentage: d.frequency, status: "emitido", created_by: d.ctx.user.id }, { onConflict: "enrollment_id" });
      const moduleText = d.modules.length ? `organizado em ${d.modules.length} módulo(s)/matéria(s)` : "com matriz curricular registrada";
      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Certificado</title><style>@page{size:A4 landscape;margin:13mm}body{font-family:Georgia,serif;color:#0f3d2e}.cert{height:177mm;border:8px double #0f3d2e;border-radius:22px;padding:30px;text-align:center;display:flex;flex-direction:column;justify-content:center}h1{font-size:48px;letter-spacing:.06em;color:#09291f}.small{font-family:Arial,sans-serif;font-weight:800;letter-spacing:.14em}.name{font-size:36px;font-weight:900;color:#09291f;margin:16px 0;border-bottom:2px solid #d8a94b;display:inline-block;padding:0 30px 8px}p{font-size:20px;line-height:1.7}.sig{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:44px;font-family:Arial,sans-serif}.line{border-top:1px solid #0f3d2e;padding-top:8px}</style></head><body><main class="cert"><div class="small">INSTITUTO INTEGRO CURSOS</div><h1>CERTIFICADO</h1><p>Certificamos que</p><div class="name">${safe(d.enrollment.student_name_snapshot)}</div><p>concluiu o curso de <b>${safe(d.course.name || "Curso")}</b>, ${safe(moduleText)}, com carga horária de <b>${safe(d.course.workload_hours || "—")} horas</b>, média final <b>${d.average === null ? "—" : safe(d.average)}</b> e frequência de <b>${d.frequency === null ? "—" : `${safe(d.frequency)}%`}</b>.</p><p>Certificado nº ${safe(number)} — Manaus, ${formatDateBR(todayISO())}.</p><div class="sig"><div class="line">Coordenação Pedagógica</div><div class="line">Direção / Administração</div></div></main></body></html>`;
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
