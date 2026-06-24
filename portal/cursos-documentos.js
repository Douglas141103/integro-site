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
    if (!y || !m || !d) return value;
    return `${d}/${m}/${y}`;
  }

  function showStatus(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    setTimeout(() => { box.hidden = true; }, 7000);
  }

  async function getContext() {
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData?.user) throw new Error("Usuário não autenticado.");

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (profileError || !profile) throw new Error("Perfil do usuário não encontrado.");

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug, unit_type")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");

    return { user: userData.user, profile, school };
  }

  async function loadCertificateData(enrollmentId) {
    const ctx = await getContext();

    const { data: enrollment, error: enrollmentError } = await client
      .from("course_enrollments")
      .select("*")
      .eq("id", enrollmentId)
      .eq("school_id", ctx.school.id)
      .maybeSingle();

    if (enrollmentError || !enrollment) throw new Error("Matrícula não encontrada.");

    const [courseRes, classRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes] = await Promise.all([
      client.from("courses").select("*").eq("id", enrollment.course_id).maybeSingle(),
      enrollment.class_id
        ? client.from("course_classes").select("*").eq("id", enrollment.class_id).maybeSingle()
        : Promise.resolve({ data: null, error: null }),
      client.from("course_assessments").select("*").eq("school_id", ctx.school.id).eq("class_id", enrollment.class_id).order("assessment_date", { ascending: true }),
      client.from("course_grades").select("*").eq("school_id", ctx.school.id).eq("enrollment_id", enrollment.id),
      client.from("course_lessons").select("*").eq("school_id", ctx.school.id).eq("class_id", enrollment.class_id).order("lesson_date", { ascending: true }),
      client.from("course_attendance").select("*").eq("school_id", ctx.school.id).eq("enrollment_id", enrollment.id)
    ]);

    const error = [courseRes, classRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes].find((res) => res.error)?.error;
    if (error) throw error;

    const course = courseRes.data || {};
    const courseClass = classRes.data || {};
    const assessments = assessmentsRes.data || [];
    const grades = gradesRes.data || [];
    const lessons = lessonsRes.data || [];
    const attendance = attendanceRes.data || [];

    let totalWeighted = 0;
    let totalWeight = 0;

    assessments.forEach((assessment) => {
      const grade = grades.find((item) => item.assessment_id === assessment.id);
      if (grade?.score === null || grade?.score === undefined || grade?.score === "") return;

      const maxScore = Number(assessment.max_score || 10) || 10;
      const weight = Number(assessment.weight || 1) || 1;
      const normalized = (Number(grade.score || 0) / maxScore) * 10;

      totalWeighted += normalized * weight;
      totalWeight += weight;
    });

    const average = totalWeight ? Number((totalWeighted / totalWeight).toFixed(1)) : null;

    const presentCount = attendance.filter((item) => {
      return item.status === "presente" || item.status === "justificada";
    }).length;

    const attendancePercentage = lessons.length
      ? Number(((presentCount / lessons.length) * 100).toFixed(1))
      : null;

    const result = average === null
      ? "Em andamento"
      : average >= 7 && (attendancePercentage === null || attendancePercentage >= 75)
        ? "Aprovado"
        : "Em recuperação / pendente";

    return {
      ctx,
      enrollment,
      course,
      courseClass,
      assessments,
      grades,
      lessons,
      attendance,
      average,
      attendancePercentage,
      result
    };
  }

  async function updateEnrollmentSummary(data) {
    await client
      .from("course_enrollments")
      .update({
        final_average: data.average,
        attendance_percentage: data.attendancePercentage,
        final_result: data.result,
        updated_at: new Date().toISOString()
      })
      .eq("id", data.enrollment.id)
      .eq("school_id", data.ctx.school.id);
  }

  function buildGradeRows(data) {
    if (!data.assessments.length) {
      return `<tr><td colspan="5">Nenhuma avaliação registrada.</td></tr>`;
    }

    return data.assessments.map((assessment) => {
      const grade = data.grades.find((item) => item.assessment_id === assessment.id);
      return `
        <tr>
          <td>${safe(formatDateBR(assessment.assessment_date))}</td>
          <td>${safe(assessment.title)}</td>
          <td>${safe(assessment.assessment_type)}</td>
          <td>${safe(grade?.score ?? "—")}</td>
          <td>${safe(assessment.max_score || 10)}</td>
        </tr>
      `;
    }).join("");
  }

  function openPrintable(html) {
    const win = window.open("", "_blank");
    if (!win) {
      alert("Permita pop-ups para imprimir o documento.");
      return;
    }

    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 450);
  }

  async function printReport(event) {
    event?.preventDefault?.();
    event?.stopImmediatePropagation?.();

    try {
      const enrollmentId = $("documentEnrollment")?.value || "";
      if (!enrollmentId) throw new Error("Selecione uma matrícula para imprimir o boletim.");

      const data = await loadCertificateData(enrollmentId);
      await updateEnrollmentSummary(data);

      const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Boletim do Curso</title>
  <style>
    @page { size: A4; margin: 14mm; }
    body { font-family: Arial, Helvetica, sans-serif; color: #12322a; margin: 0; background: #f4f8f6; }
    .sheet { background: #fff; border: 2px solid #0f3d2e; border-radius: 18px; padding: 24px; min-height: 260mm; }
    .head { display: flex; justify-content: space-between; gap: 20px; border-bottom: 2px solid #0f3d2e; padding-bottom: 14px; margin-bottom: 18px; }
    .head h1 { margin: 0; color: #0f3d2e; font-size: 24px; }
    .head h2 { margin: 4px 0 0; color: #09291f; font-size: 16px; }
    .box { border: 1px solid #cfe2d9; border-radius: 12px; padding: 12px; margin: 12px 0; background: #fbfefc; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; }
    th, td { border: 1px solid #cfe2d9; padding: 8px; text-align: left; font-size: 12px; }
    th { background: #e8f5ee; color: #0f3d2e; }
    .result { font-size: 18px; font-weight: 800; color: #0f3d2e; }
    .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; margin-top: 55px; }
    .line { border-top: 1px solid #12322a; text-align: center; padding-top: 8px; font-size: 12px; }
    .footer { margin-top: 28px; font-size: 10px; color: #567; text-align: center; }
  </style>
</head>
<body>
  <main class="sheet">
    <div class="head">
      <div>
        <h1>INSTITUTO INTEGRO CURSOS</h1>
        <h2>Boletim de Desempenho do Curso</h2>
      </div>
      <div><strong>Data:</strong> ${formatDateBR(todayISO())}</div>
    </div>

    <section class="box grid">
      <div><strong>Aluno:</strong><br>${safe(data.enrollment.student_name_snapshot)}</div>
      <div><strong>Curso:</strong><br>${safe(data.course.name || "Curso não informado")}</div>
      <div><strong>Turma:</strong><br>${safe(data.courseClass.class_name || "Turma não informada")}</div>
      <div><strong>Carga horária:</strong><br>${safe(data.course.workload_hours || "—")} horas</div>
    </section>

    <section class="box grid">
      <div><strong>Média final:</strong><br><span class="result">${data.average === null ? "—" : safe(data.average)}</span></div>
      <div><strong>Frequência:</strong><br><span class="result">${data.attendancePercentage === null ? "—" : `${safe(data.attendancePercentage)}%`}</span></div>
      <div><strong>Resultado:</strong><br><span class="result">${safe(data.result)}</span></div>
      <div><strong>Aulas registradas:</strong><br>${safe(data.lessons.length)}</div>
    </section>

    <h3>Notas registradas</h3>
    <table>
      <thead><tr><th>Data</th><th>Avaliação</th><th>Tipo</th><th>Nota</th><th>Máxima</th></tr></thead>
      <tbody>${buildGradeRows(data)}</tbody>
    </table>

    <div class="signatures">
      <div class="line">Coordenação Pedagógica</div>
      <div class="line">Direção / Administração</div>
    </div>

    <div class="footer">Documento emitido pelo Portal INTEGRO Cursos.</div>
  </main>
</body>
</html>`;

      openPrintable(html);
      showStatus("Boletim gerado com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao gerar boletim.", "error");
    }
  }

  async function printCertificate(event) {
    event?.preventDefault?.();
    event?.stopImmediatePropagation?.();

    try {
      const enrollmentId = $("documentEnrollment")?.value || "";
      if (!enrollmentId) throw new Error("Selecione uma matrícula para emitir o certificado.");

      const data = await loadCertificateData(enrollmentId);
      await updateEnrollmentSummary(data);

      const year = new Date().getFullYear();
      const number = `CERT-${year}-${String(enrollmentId).slice(0, 8).toUpperCase()}`;

      const { error } = await client
        .from("course_certificates")
        .upsert({
          school_id: data.ctx.school.id,
          enrollment_id: enrollmentId,
          certificate_number: number,
          issued_at: todayISO(),
          workload_hours: data.course.workload_hours || null,
          final_average: data.average,
          attendance_percentage: data.attendancePercentage,
          status: "emitido",
          created_by: data.ctx.user.id
        }, { onConflict: "enrollment_id" });

      if (error) throw error;

      const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Certificado</title>
  <style>
    @page { size: A4 landscape; margin: 13mm; }
    body { margin: 0; font-family: Georgia, 'Times New Roman', serif; color: #0f3d2e; background: #f8fbf9; }
    .cert { height: 177mm; border: 8px double #0f3d2e; border-radius: 22px; padding: 30px; text-align: center; background: #fff; display: flex; flex-direction: column; justify-content: center; }
    .small { font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.14em; font-size: 13px; font-weight: 800; color: #1f6e50; }
    h1 { margin: 10px 0 20px; font-size: 48px; color: #09291f; letter-spacing: 0.06em; }
    p { font-size: 20px; line-height: 1.7; margin: 6px auto; max-width: 900px; }
    .name { font-size: 36px; font-weight: 900; color: #09291f; margin: 16px 0; border-bottom: 2px solid #d8a94b; display: inline-block; padding: 0 30px 8px; }
    .meta { font-family: Arial, Helvetica, sans-serif; font-size: 14px; margin-top: 18px; color: #24423a; }
    .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-top: 44px; font-family: Arial, Helvetica, sans-serif; }
    .line { border-top: 1px solid #0f3d2e; padding-top: 8px; font-size: 13px; }
  </style>
</head>
<body>
  <main class="cert">
    <div class="small">INSTITUTO INTEGRO CURSOS</div>
    <h1>CERTIFICADO</h1>
    <p>Certificamos que</p>
    <div class="name">${safe(data.enrollment.student_name_snapshot)}</div>
    <p>concluiu o curso de <strong>${safe(data.course.name || "Curso")}</strong>, com carga horária de <strong>${safe(data.course.workload_hours || "—")} horas</strong>, média final <strong>${data.average === null ? "—" : safe(data.average)}</strong> e frequência de <strong>${data.attendancePercentage === null ? "—" : `${safe(data.attendancePercentage)}%`}</strong>.</p>
    <p class="meta">Certificado nº ${safe(number)} — Manaus, ${formatDateBR(todayISO())}.</p>
    <div class="signatures">
      <div class="line">Coordenação Pedagógica</div>
      <div class="line">Direção / Administração</div>
    </div>
  </main>
</body>
</html>`;

      openPrintable(html);
      showStatus("Certificado emitido com sucesso. Atualize a lista para visualizar o registro.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao emitir certificado.", "error");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    $("printReportBtn")?.addEventListener("click", printReport, true);
    $("printCertificateBtn")?.addEventListener("click", printCertificate, true);
  });
})();
