(() => {
  "use strict";

  const cfg = window.INTEGRO_SUPABASE || {};
  const client = window.supabase?.createClient?.(cfg.url, cfg.anonKey);

  const state = {
    user: null,
    profile: null,
    school: null,
    courses: [],
    classes: [],
    enrollments: [],
    lessons: [],
    attendance: [],
    assessments: [],
    grades: [],
    certificates: [],
    students: [],
    teachers: []
  };

  const $ = (id) => document.getElementById(id);

  document.addEventListener("DOMContentLoaded", init);

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
    if (!box) return;
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    setTimeout(() => { box.hidden = true; }, 6500);
  }

  function courseName(id) {
    return state.courses.find((item) => item.id === id)?.name || "Curso não informado";
  }

  function className(id) {
    return state.classes.find((item) => item.id === id)?.class_name || "Turma não informada";
  }

  function teacherName(id) {
    if (!id) return "Sem professor vinculado";
    return state.teachers.find((item) => item.id === id)?.full_name || "Professor não localizado";
  }

  function enrollmentName(id) {
    return state.enrollments.find((item) => item.id === id)?.student_name_snapshot || "Aluno não informado";
  }

  function statusBadge(status) {
    const value = String(status || "").toLowerCase();
    const danger = ["cancelado", "reprovado", "ausente"].includes(value);
    const warn = ["aberta", "matriculado", "em_andamento", "cursando"].includes(value);
    return `<span class="badge ${danger ? "danger" : warn ? "warn" : ""}">${safe(status || "ativo")}</span>`;
  }

  function fillSelect(select, items, options = {}) {
    if (!select) return;
    const placeholder = options.placeholder || "Selecione";
    const allowEmpty = options.allowEmpty !== false;
    const getValue = options.getValue || ((item) => item.id);
    const getLabel = options.getLabel || ((item) => item.name || item.full_name || item.class_name || item.title || item.id);

    select.innerHTML = `${allowEmpty ? `<option value="">${safe(placeholder)}</option>` : ""}${items.map((item) => `
      <option value="${safe(getValue(item))}">${safe(getLabel(item))}</option>
    `).join("")}`;
  }

  async function init() {
    if (!client) {
      showStatus("Configuração do Supabase não encontrada.", "error");
      return;
    }

    bindEvents();

    try {
      await loadContext();
      await reloadAll();
      setInitialDates();
      showStatus("Módulo de cursos carregado com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao iniciar módulo de cursos.", "error");
    }
  }

  async function loadContext() {
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData?.user) {
      window.location.href = "./index.html";
      return;
    }

    state.user = userData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile) throw new Error("Perfil do usuário não encontrado.");

    const allowed = ["integro_admin", "diretor", "coordenacao", "professor"];
    if (!allowed.includes(profile.role)) throw new Error("Seu perfil não tem permissão para acessar a Gestão de Cursos.");

    state.profile = profile;
    $("userBadge").textContent = profile.full_name || state.user.email || "Usuário";

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug, unit_type")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");

    state.school = school;
    $("schoolName").textContent = school.name || "INSTITUTO INTEGRO CURSOS";
  }

  async function reloadAll() {
    const schoolId = state.school.id;

    const [coursesRes, classesRes, enrollmentsRes, lessonsRes, attendanceRes, assessmentsRes, gradesRes, certificatesRes, studentsRes, teachersRes] = await Promise.all([
      client.from("courses").select("*").eq("school_id", schoolId).order("created_at", { ascending: false }),
      client.from("course_classes").select("*").eq("school_id", schoolId).order("created_at", { ascending: false }),
      client.from("course_enrollments").select("*").eq("school_id", schoolId).order("created_at", { ascending: false }),
      client.from("course_lessons").select("*").eq("school_id", schoolId).order("lesson_date", { ascending: false }),
      client.from("course_attendance").select("*").eq("school_id", schoolId),
      client.from("course_assessments").select("*").eq("school_id", schoolId).order("created_at", { ascending: false }),
      client.from("course_grades").select("*").eq("school_id", schoolId),
      client.from("course_certificates").select("*").eq("school_id", schoolId).order("created_at", { ascending: false }),
      client.from("students").select("id, full_name, active").eq("school_id", schoolId).order("full_name", { ascending: true }),
      client.from("profiles").select("id, full_name, role").in("role", ["professor", "diretor", "coordenacao", "integro_admin"]).order("full_name", { ascending: true })
    ]);

    const responses = [coursesRes, classesRes, enrollmentsRes, lessonsRes, attendanceRes, assessmentsRes, gradesRes, certificatesRes, studentsRes, teachersRes];
    const error = responses.find((res) => res.error)?.error;
    if (error) throw error;

    state.courses = coursesRes.data || [];
    state.classes = classesRes.data || [];
    state.enrollments = enrollmentsRes.data || [];
    state.lessons = lessonsRes.data || [];
    state.attendance = attendanceRes.data || [];
    state.assessments = assessmentsRes.data || [];
    state.grades = gradesRes.data || [];
    state.certificates = certificatesRes.data || [];
    state.students = studentsRes.data || [];
    state.teachers = teachersRes.data || [];

    renderAll();
  }

  function setInitialDates() {
    if ($("enrollmentDate") && !$("enrollmentDate").value) $("enrollmentDate").value = todayISO();
    if ($("lessonDate") && !$("lessonDate").value) $("lessonDate").value = todayISO();
    if ($("assessmentDate") && !$("assessmentDate").value) $("assessmentDate").value = todayISO();
  }

  function renderAll() {
    renderKpis();
    renderSelects();
    renderCourses();
    renderClasses();
    renderEnrollments();
    renderAttendanceList();
    renderGradesList();
    renderDocumentPreview();
    renderCertificates();
  }

  function renderKpis() {
    $("kpiCourses").textContent = String(state.courses.filter((c) => c.active !== false).length);
    $("kpiClasses").textContent = String(state.classes.filter((c) => c.active !== false && c.status !== "concluida" && c.status !== "cancelada").length);
    $("kpiEnrollments").textContent = String(state.enrollments.length);
    $("kpiCertificates").textContent = String(state.certificates.length);
  }

  function renderSelects() {
    const activeCourses = state.courses.filter((item) => item.active !== false);
    const activeClasses = state.classes.filter((item) => item.active !== false);

    fillSelect($("classCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("enrollmentCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("assessmentCourse"), activeCourses, { placeholder: "Selecione o curso" });

    fillSelect($("enrollmentClass"), activeClasses, { placeholder: "Sem turma definida", getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}` });
    fillSelect($("lessonClass"), activeClasses, { placeholder: "Selecione a turma", getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}` });
    fillSelect($("assessmentClass"), activeClasses, { placeholder: "Sem turma específica", getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}` });
    fillSelect($("classTeacher"), state.teachers, { placeholder: "Sem professor vinculado", getLabel: (item) => `${item.full_name || "Sem nome"} — ${item.role}` });
    fillSelect($("enrollmentStudent"), state.students, { placeholder: "Não usar aluno da base", getLabel: (item) => item.full_name });
    fillSelect($("attendanceLesson"), state.lessons, { placeholder: "Selecione a aula", getLabel: (item) => `${formatDateBR(item.lesson_date)} — ${item.title} — ${className(item.class_id)}` });
    fillSelect($("gradeAssessment"), state.assessments, { placeholder: "Selecione a avaliação", getLabel: (item) => `${item.title} — ${className(item.class_id)} — ${courseName(item.course_id)}` });
    fillSelect($("documentEnrollment"), state.enrollments, { placeholder: "Selecione a matrícula", getLabel: (item) => `${item.student_name_snapshot} — ${courseName(item.course_id)} — ${className(item.class_id)}` });
  }

  function renderCourses() {
    const list = $("coursesList");
    if (!list) return;
    if (!state.courses.length) return list.innerHTML = `<div class="empty">Nenhum curso cadastrado ainda.</div>`;

    list.innerHTML = state.courses.map((course) => `
      <article class="record"><strong>${safe(course.name)}</strong><small>${course.workload_hours ? `<b>Carga horária:</b> ${safe(course.workload_hours)}h<br>` : ""}${course.duration_text ? `<b>Duração:</b> ${safe(course.duration_text)}<br>` : ""}${safe(course.description || "Sem descrição.")}</small><div>${statusBadge(course.active === false ? "inativo" : "ativo")}</div></article>
    `).join("");
  }

  function renderClasses() {
    const list = $("classesList");
    if (!list) return;
    if (!state.classes.length) return list.innerHTML = `<div class="empty">Nenhuma turma cadastrada ainda.</div>`;

    list.innerHTML = state.classes.map((item) => `
      <article class="record"><strong>${safe(item.class_name)}</strong><small><b>Curso:</b> ${safe(courseName(item.course_id))}<br><b>Período:</b> ${safe(formatDateBR(item.start_date))} a ${safe(formatDateBR(item.end_date))}<br><b>Professor:</b> ${safe(teacherName(item.teacher_profile_id))}<br>${safe(item.schedule_text || "Sem horário informado.")}</small><div>${statusBadge(item.status)}</div></article>
    `).join("");
  }

  function renderEnrollments() {
    const list = $("enrollmentsList");
    if (!list) return;
    if (!state.enrollments.length) return list.innerHTML = `<div class="empty">Nenhuma matrícula registrada ainda.</div>`;

    list.innerHTML = state.enrollments.map((item) => `
      <article class="record"><strong>${safe(item.student_name_snapshot)}</strong><small><b>Curso:</b> ${safe(courseName(item.course_id))}<br><b>Turma:</b> ${safe(className(item.class_id))}<br><b>Matrícula:</b> ${safe(formatDateBR(item.enrollment_date))}<br>${item.guardian_name ? `<b>Responsável:</b> ${safe(item.guardian_name)}<br>` : ""}${item.final_average !== null && item.final_average !== undefined ? `<b>Média final:</b> ${safe(item.final_average)}<br>` : ""}${item.attendance_percentage !== null && item.attendance_percentage !== undefined ? `<b>Frequência:</b> ${safe(item.attendance_percentage)}%<br>` : ""}</small><div>${statusBadge(item.final_result || item.status)}</div></article>
    `).join("");
  }

  function getEnrollmentsForClass(classId) {
    if (!classId) return [];
    return state.enrollments.filter((item) => item.class_id === classId && item.status !== "cancelado");
  }

  function renderAttendanceList() {
    const lessonId = $("attendanceLesson")?.value || "";
    const list = $("attendanceList");
    if (!list) return;
    const lesson = state.lessons.find((item) => item.id === lessonId);
    if (!lesson) return list.innerHTML = `<div class="empty">Selecione uma aula para lançar frequência.</div>`;
    const enrollments = getEnrollmentsForClass(lesson.class_id);
    if (!enrollments.length) return list.innerHTML = `<div class="empty">Esta turma ainda não possui alunos matriculados.</div>`;

    list.innerHTML = enrollments.map((enrollment) => {
      const existing = state.attendance.find((item) => item.lesson_id === lesson.id && item.enrollment_id === enrollment.id);
      const status = existing?.status || "presente";
      return `<div class="attendance-row" data-attendance-enrollment="${safe(enrollment.id)}"><strong>${safe(enrollment.student_name_snapshot)}</strong><select class="attendance-status"><option value="presente" ${status === "presente" ? "selected" : ""}>Presente</option><option value="ausente" ${status === "ausente" ? "selected" : ""}>Ausente</option><option value="justificada" ${status === "justificada" ? "selected" : ""}>Falta justificada</option></select></div>`;
    }).join("");
  }

  function renderGradesList() {
    const assessmentId = $("gradeAssessment")?.value || "";
    const list = $("gradesList");
    if (!list) return;
    const assessment = state.assessments.find((item) => item.id === assessmentId);
    if (!assessment) return list.innerHTML = `<div class="empty">Selecione uma avaliação para lançar notas.</div>`;
    const enrollments = getEnrollmentsForClass(assessment.class_id);
    if (!enrollments.length) return list.innerHTML = `<div class="empty">Esta turma ainda não possui alunos matriculados.</div>`;

    list.innerHTML = enrollments.map((enrollment) => {
      const existing = state.grades.find((item) => item.assessment_id === assessment.id && item.enrollment_id === enrollment.id);
      return `<div class="grade-row" data-grade-enrollment="${safe(enrollment.id)}"><strong>${safe(enrollment.student_name_snapshot)}</strong><input class="grade-score" type="number" min="0" max="${safe(assessment.max_score || 10)}" step="0.1" value="${safe(existing?.score ?? "")}" placeholder="Nota" /><input class="grade-observation" value="${safe(existing?.observation || "")}" placeholder="Observação" /></div>`;
    }).join("");
  }

  function getEnrollmentStats(enrollmentId) {
    const enrollment = state.enrollments.find((item) => item.id === enrollmentId);
    if (!enrollment) return null;
    const assessments = state.assessments.filter((item) => item.class_id === enrollment.class_id);
    const grades = state.grades.filter((item) => item.enrollment_id === enrollmentId);
    let totalWeighted = 0;
    let totalWeight = 0;
    assessments.forEach((assessment) => {
      const grade = grades.find((item) => item.assessment_id === assessment.id);
      if (grade?.score === null || grade?.score === undefined || grade?.score === "") return;
      const maxScore = Number(assessment.max_score || 10) || 10;
      const weight = Number(assessment.weight || 1) || 1;
      totalWeighted += ((Number(grade.score || 0) / maxScore) * 10) * weight;
      totalWeight += weight;
    });
    const average = totalWeight ? Number((totalWeighted / totalWeight).toFixed(1)) : null;
    const lessons = state.lessons.filter((item) => item.class_id === enrollment.class_id);
    const records = state.attendance.filter((item) => item.enrollment_id === enrollmentId && lessons.some((lesson) => lesson.id === item.lesson_id));
    const present = records.filter((item) => item.status === "presente" || item.status === "justificada").length;
    const attendancePercentage = lessons.length ? Number(((present / lessons.length) * 100).toFixed(1)) : null;
    const result = average === null ? "Em andamento" : average >= 7 && (attendancePercentage === null || attendancePercentage >= 75) ? "Aprovado" : "Em recuperação / pendente";
    return { enrollment, assessments, grades, average, attendancePercentage, result, lessons };
  }

  function renderDocumentPreview() {
    const box = $("documentPreview");
    if (!box) return;
    const stats = getEnrollmentStats($("documentEnrollment")?.value || "");
    if (!stats) return box.innerHTML = `<div class="empty">Selecione uma matrícula para visualizar boletim e certificado.</div>`;
    const rows = stats.assessments.map((assessment) => {
      const grade = stats.grades.find((item) => item.assessment_id === assessment.id);
      return `<tr><td>${safe(assessment.title)}</td><td>${safe(assessment.assessment_type)}</td><td>${safe(grade?.score ?? "—")}</td><td>${safe(assessment.max_score || 10)}</td></tr>`;
    }).join("");
    box.innerHTML = `<strong>${safe(stats.enrollment.student_name_snapshot)}</strong><br><small>Curso: ${safe(courseName(stats.enrollment.course_id))}<br>Turma: ${safe(className(stats.enrollment.class_id))}<br>Média final: ${stats.average === null ? "—" : safe(stats.average)}<br>Frequência: ${stats.attendancePercentage === null ? "—" : `${safe(stats.attendancePercentage)}%`}<br>Resultado: ${safe(stats.result)}</small><table><thead><tr><th>Avaliação</th><th>Tipo</th><th>Nota</th><th>Máx.</th></tr></thead><tbody>${rows || `<tr><td colspan="4">Nenhuma avaliação registrada.</td></tr>`}</tbody></table>`;
  }

  function renderCertificates() {
    const list = $("certificatesList");
    if (!list) return;
    if (!state.certificates.length) return list.innerHTML = `<div class="empty">Nenhum certificado emitido ainda.</div>`;
    list.innerHTML = state.certificates.map((item) => `<article class="record"><strong>${safe(item.certificate_number || "Certificado")}</strong><small><b>Aluno:</b> ${safe(enrollmentName(item.enrollment_id))}<br><b>Emissão:</b> ${safe(formatDateBR(item.issued_at))}<br><b>Média:</b> ${safe(item.final_average ?? "—")} | <b>Frequência:</b> ${safe(item.attendance_percentage ?? "—")}%</small><div>${statusBadge(item.status)}</div></article>`).join("");
  }

  function bindEvents() {
    document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab)?.classList.add("active");
    }));
    $("logoutBtn")?.addEventListener("click", async () => { await client.auth.signOut(); window.location.href = "./index.html"; });
    $("courseForm")?.addEventListener("submit", saveCourse);
    $("classForm")?.addEventListener("submit", saveClass);
    $("enrollmentForm")?.addEventListener("submit", saveEnrollment);
    $("lessonForm")?.addEventListener("submit", saveLesson);
    $("assessmentForm")?.addEventListener("submit", saveAssessment);
    $("clearCourseBtn")?.addEventListener("click", () => $("courseForm").reset());
    $("clearClassBtn")?.addEventListener("click", () => $("classForm").reset());
    $("clearEnrollmentBtn")?.addEventListener("click", () => { $("enrollmentForm").reset(); setInitialDates(); });
    $("attendanceLesson")?.addEventListener("change", renderAttendanceList);
    $("gradeAssessment")?.addEventListener("change", renderGradesList);
    $("documentEnrollment")?.addEventListener("change", renderDocumentPreview);
    $("refreshDocumentBtn")?.addEventListener("click", async () => { await updateEnrollmentResult(); renderDocumentPreview(); });
    $("saveAttendanceBtn")?.addEventListener("click", saveAttendance);
    $("saveGradesBtn")?.addEventListener("click", saveGrades);
    $("printReportBtn")?.addEventListener("click", () => showStatus("A impressão do boletim será ativada no próximo pacote do módulo.", "warn"));
    $("printCertificateBtn")?.addEventListener("click", () => showStatus("A emissão visual do certificado será ativada no próximo pacote do módulo.", "warn"));
    $("enrollmentStudent")?.addEventListener("change", () => {
      const student = state.students.find((item) => item.id === $("enrollmentStudent").value);
      if (student && !$("enrollmentStudentName").value.trim()) $("enrollmentStudentName").value = student.full_name;
    });
  }

  async function saveCourse(event) {
    event.preventDefault();
    await insertAndReload("courses", {
      school_id: state.school.id,
      name: $("courseName").value.trim(),
      description: $("courseDescription").value.trim() || null,
      workload_hours: $("courseWorkload").value ? Number($("courseWorkload").value) : null,
      duration_text: $("courseDuration").value.trim() || null,
      active: true,
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    }, "Curso cadastrado com sucesso.", "courseForm");
  }

  async function saveClass(event) {
    event.preventDefault();
    await insertAndReload("course_classes", {
      school_id: state.school.id,
      course_id: $("classCourse").value,
      class_name: $("className").value.trim(),
      start_date: $("classStart").value || null,
      end_date: $("classEnd").value || null,
      schedule_text: $("classSchedule").value.trim() || null,
      teacher_profile_id: $("classTeacher").value || null,
      status: $("classStatus").value || "aberta",
      active: true,
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    }, "Turma cadastrada com sucesso.", "classForm");
  }

  async function saveEnrollment(event) {
    event.preventDefault();
    const selectedStudent = state.students.find((item) => item.id === $("enrollmentStudent").value);
    const studentName = $("enrollmentStudentName").value.trim() || selectedStudent?.full_name || "";
    if (!studentName) return showStatus("Informe o nome do aluno.", "error");
    await insertAndReload("course_enrollments", {
      school_id: state.school.id,
      course_id: $("enrollmentCourse").value,
      class_id: $("enrollmentClass").value || null,
      student_id: selectedStudent?.id || null,
      student_name_snapshot: studentName,
      guardian_name: $("enrollmentGuardianName").value.trim() || null,
      guardian_phone: $("enrollmentGuardianPhone").value.trim() || null,
      guardian_document: $("enrollmentGuardianDocument").value.trim() || null,
      enrollment_date: $("enrollmentDate").value || todayISO(),
      status: $("enrollmentStatus").value || "matriculado",
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    }, "Matrícula registrada com sucesso.", "enrollmentForm");
    setInitialDates();
  }

  async function saveLesson(event) {
    event.preventDefault();
    const selectedClass = state.classes.find((item) => item.id === $("lessonClass").value);
    if (!selectedClass) return showStatus("Selecione uma turma.", "error");
    await insertAndReload("course_lessons", {
      school_id: state.school.id,
      course_id: selectedClass.course_id,
      class_id: selectedClass.id,
      lesson_date: $("lessonDate").value || todayISO(),
      title: $("lessonTitle").value.trim(),
      content_summary: $("lessonSummary").value.trim() || null,
      teacher_profile_id: selectedClass.teacher_profile_id || null,
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    }, "Aula lançada com sucesso.", "lessonForm");
    setInitialDates();
  }

  async function saveAssessment(event) {
    event.preventDefault();
    if (!$("assessmentClass").value) return showStatus("Selecione a turma da avaliação para lançar notas depois.", "error");
    await insertAndReload("course_assessments", {
      school_id: state.school.id,
      course_id: $("assessmentCourse").value,
      class_id: $("assessmentClass").value,
      title: $("assessmentTitle").value.trim(),
      assessment_type: $("assessmentType").value || "atividade",
      max_score: Number($("assessmentMaxScore").value || 10),
      weight: Number($("assessmentWeight").value || 1),
      assessment_date: $("assessmentDate").value || null,
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    }, "Avaliação cadastrada com sucesso.", "assessmentForm");
    $("assessmentMaxScore").value = "10";
    $("assessmentWeight").value = "1";
    setInitialDates();
  }

  async function insertAndReload(table, payload, message, formId) {
    try {
      const { error } = await client.from(table).insert(payload);
      if (error) throw error;
      if (formId && $(formId)) $(formId).reset();
      await reloadAll();
      showStatus(message, "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar registro.", "error");
    }
  }

  async function saveAttendance() {
    try {
      const lessonId = $("attendanceLesson").value;
      const rows = Array.from(document.querySelectorAll("[data-attendance-enrollment]"));
      if (!lessonId || !rows.length) throw new Error("Selecione uma aula com alunos matriculados.");
      const payload = rows.map((row) => ({ school_id: state.school.id, lesson_id: lessonId, enrollment_id: row.dataset.attendanceEnrollment, status: row.querySelector(".attendance-status")?.value || "presente", notes: null, created_by: state.user.id }));
      const { error } = await client.from("course_attendance").upsert(payload, { onConflict: "lesson_id,enrollment_id" });
      if (error) throw error;
      await reloadAll();
      showStatus("Frequência salva com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar frequência.", "error");
    }
  }

  async function saveGrades() {
    try {
      const assessmentId = $("gradeAssessment").value;
      const rows = Array.from(document.querySelectorAll("[data-grade-enrollment]"));
      if (!assessmentId || !rows.length) throw new Error("Selecione uma avaliação com alunos matriculados.");
      const payload = rows.map((row) => ({ school_id: state.school.id, assessment_id: assessmentId, enrollment_id: row.dataset.gradeEnrollment, score: row.querySelector(".grade-score")?.value === "" ? null : Number(row.querySelector(".grade-score")?.value || 0), observation: row.querySelector(".grade-observation")?.value?.trim() || null, created_by: state.user.id, updated_at: new Date().toISOString() }));
      const { error } = await client.from("course_grades").upsert(payload, { onConflict: "assessment_id,enrollment_id" });
      if (error) throw error;
      await reloadAll();
      await updateEnrollmentResult();
      showStatus("Notas salvas com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar notas.", "error");
    }
  }

  async function updateEnrollmentResult() {
    const enrollmentId = $("documentEnrollment")?.value || "";
    const stats = getEnrollmentStats(enrollmentId);
    if (!stats) return;
    const { error } = await client.from("course_enrollments").update({ final_average: stats.average, attendance_percentage: stats.attendancePercentage, final_result: stats.result, updated_at: new Date().toISOString() }).eq("id", enrollmentId).eq("school_id", state.school.id);
    if (error) throw error;
    await reloadAll();
  }
})();
