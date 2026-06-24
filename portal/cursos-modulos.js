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
    modules: []
  };

  const $ = (id) => document.getElementById(id);

  document.addEventListener("DOMContentLoaded", initModules);

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

  function showStatus(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    setTimeout(() => { box.hidden = true; }, 7000);
  }

  function formatDateBR(value) {
    if (!value) return "—";
    const [y, m, d] = String(value).slice(0, 10).split("-");
    if (!y || !m || !d) return value;
    return `${d}/${m}/${y}`;
  }

  function courseName(id) {
    return state.courses.find((item) => item.id === id)?.name || "Curso não informado";
  }

  function moduleName(id) {
    if (!id) return "Sem módulo/matéria";
    return state.modules.find((item) => item.id === id)?.name || "Módulo não localizado";
  }

  function fillSelect(select, items, options = {}) {
    if (!select) return;

    const placeholder = options.placeholder || "Selecione";
    const allowEmpty = options.allowEmpty !== false;
    const getValue = options.getValue || ((item) => item.id);
    const getLabel = options.getLabel || ((item) => item.name || item.class_name || item.id);

    select.innerHTML = `${allowEmpty ? `<option value="">${safe(placeholder)}</option>` : ""}${items.map((item) => `
      <option value="${safe(getValue(item))}">${safe(getLabel(item))}</option>
    `).join("")}`;
  }

  async function initModules() {
    if (!client) return;

    bindModuleEvents();

    try {
      await loadContext();
      await loadModulesData();
      renderModulesArea();
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao carregar módulos/matérias.", "error");
    }
  }

  async function loadContext() {
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData?.user) throw new Error("Usuário não autenticado.");

    state.user = userData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile) throw new Error("Perfil do usuário não encontrado.");
    state.profile = profile;

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug, unit_type")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");
    state.school = school;
  }

  async function loadModulesData() {
    const schoolId = state.school.id;

    const [coursesRes, classesRes, modulesRes] = await Promise.all([
      client.from("courses").select("id, name, active").eq("school_id", schoolId).order("name", { ascending: true }),
      client.from("course_classes").select("id, course_id, class_name, active").eq("school_id", schoolId).order("class_name", { ascending: true }),
      client.from("course_modules").select("*").eq("school_id", schoolId).order("order_index", { ascending: true }).order("created_at", { ascending: true })
    ]);

    if (coursesRes.error) throw coursesRes.error;
    if (classesRes.error) throw classesRes.error;
    if (modulesRes.error) throw modulesRes.error;

    state.courses = coursesRes.data || [];
    state.classes = classesRes.data || [];
    state.modules = modulesRes.data || [];
  }

  function renderModulesArea() {
    const activeCourses = state.courses.filter((item) => item.active !== false);

    fillSelect($("moduleCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("lessonModule"), getModulesForCurrentLessonClass(), { placeholder: "Sem módulo/matéria" });
    fillSelect($("assessmentModule"), getModulesForCurrentAssessment(), { placeholder: "Sem módulo/matéria" });

    renderModulesList();
  }

  function getModulesForCourse(courseId) {
    if (!courseId) return [];
    return state.modules.filter((item) => item.course_id === courseId && item.active !== false);
  }

  function getModulesForCurrentLessonClass() {
    const classId = $("lessonClass")?.value || "";
    const klass = state.classes.find((item) => item.id === classId);
    return getModulesForCourse(klass?.course_id);
  }

  function getModulesForCurrentAssessment() {
    const classId = $("assessmentClass")?.value || "";
    const classCourseId = state.classes.find((item) => item.id === classId)?.course_id;
    const courseId = classCourseId || $("assessmentCourse")?.value || "";
    return getModulesForCourse(courseId);
  }

  function renderModulesList() {
    const list = $("modulesList");
    if (!list) return;

    if (!state.modules.length) {
      list.innerHTML = `<div class="empty">Nenhum módulo ou matéria cadastrado ainda.</div>`;
      return;
    }

    const grouped = state.courses.map((course) => {
      const modules = state.modules.filter((item) => item.course_id === course.id);
      if (!modules.length) return "";

      return `
        <div class="record">
          <strong>${safe(course.name)}</strong>
          <small>${safe(modules.length)} módulo(s)/matéria(s) cadastrado(s)</small>
          <div class="records">
            ${modules.map((item) => `
              <article class="record">
                <strong>${item.order_index ? `${safe(item.order_index)}. ` : ""}${safe(item.name)}</strong>
                <small>
                  ${item.workload_hours ? `<b>Carga horária:</b> ${safe(item.workload_hours)}h<br>` : ""}
                  ${safe(item.description || "Sem descrição.")}
                </small>
                <span class="badge ${item.active === false ? "danger" : ""}">${item.active === false ? "inativo" : "ativo"}</span>
              </article>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");

    list.innerHTML = grouped || `<div class="empty">Nenhum módulo ou matéria cadastrado ainda.</div>`;
  }

  function bindModuleEvents() {
    $("moduleForm")?.addEventListener("submit", saveModule);
    $("clearModuleBtn")?.addEventListener("click", () => $("moduleForm")?.reset());

    $("lessonClass")?.addEventListener("change", () => {
      fillSelect($("lessonModule"), getModulesForCurrentLessonClass(), { placeholder: "Sem módulo/matéria" });
    });

    $("assessmentCourse")?.addEventListener("change", () => {
      fillSelect($("assessmentModule"), getModulesForCurrentAssessment(), { placeholder: "Sem módulo/matéria" });
    });

    $("assessmentClass")?.addEventListener("change", () => {
      fillSelect($("assessmentModule"), getModulesForCurrentAssessment(), { placeholder: "Sem módulo/matéria" });
    });

    $("lessonForm")?.addEventListener("submit", saveLessonWithModule, true);
    $("assessmentForm")?.addEventListener("submit", saveAssessmentWithModule, true);
  }

  async function saveModule(event) {
    event.preventDefault();

    try {
      const courseId = $("moduleCourse")?.value || "";
      const name = $("moduleName")?.value.trim() || "";

      if (!courseId) throw new Error("Selecione o curso do módulo/matéria.");
      if (!name) throw new Error("Informe o nome do módulo/matéria.");

      const payload = {
        school_id: state.school.id,
        course_id: courseId,
        name,
        description: $("moduleDescription")?.value.trim() || null,
        workload_hours: $("moduleWorkload")?.value ? Number($("moduleWorkload").value) : null,
        order_index: $("moduleOrder")?.value ? Number($("moduleOrder").value) : null,
        active: true,
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client.from("course_modules").insert(payload);
      if (error) throw error;

      $("moduleForm")?.reset();
      await loadModulesData();
      renderModulesArea();
      showStatus("Módulo/matéria cadastrado com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar módulo/matéria.", "error");
    }
  }

  async function saveLessonWithModule(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    try {
      const classId = $("lessonClass")?.value || "";
      const selectedClass = state.classes.find((item) => item.id === classId);

      if (!selectedClass) throw new Error("Selecione uma turma.");
      if (!$("lessonTitle")?.value.trim()) throw new Error("Informe o título da aula.");

      const payload = {
        school_id: state.school.id,
        course_id: selectedClass.course_id,
        class_id: selectedClass.id,
        course_module_id: $("lessonModule")?.value || null,
        lesson_date: $("lessonDate")?.value || todayISO(),
        title: $("lessonTitle")?.value.trim(),
        content_summary: $("lessonSummary")?.value.trim() || null,
        teacher_profile_id: selectedClass.teacher_profile_id || null,
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client.from("course_lessons").insert(payload);
      if (error) throw error;

      showStatus(`Aula lançada com sucesso${payload.course_module_id ? ` no módulo ${moduleName(payload.course_module_id)}` : ""}.`, "ok");

      setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar aula com módulo/matéria.", "error");
    }
  }

  async function saveAssessmentWithModule(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    try {
      const classId = $("assessmentClass")?.value || "";
      const selectedClass = state.classes.find((item) => item.id === classId);

      if (!selectedClass) throw new Error("Selecione a turma da avaliação para lançar notas depois.");
      if (!$("assessmentTitle")?.value.trim()) throw new Error("Informe o título da avaliação.");

      const payload = {
        school_id: state.school.id,
        course_id: selectedClass.course_id,
        class_id: selectedClass.id,
        course_module_id: $("assessmentModule")?.value || null,
        title: $("assessmentTitle")?.value.trim(),
        assessment_type: $("assessmentType")?.value || "atividade",
        max_score: Number($("assessmentMaxScore")?.value || 10),
        weight: Number($("assessmentWeight")?.value || 1),
        assessment_date: $("assessmentDate")?.value || null,
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client.from("course_assessments").insert(payload);
      if (error) throw error;

      showStatus(`Avaliação cadastrada com sucesso${payload.course_module_id ? ` no módulo ${moduleName(payload.course_module_id)}` : ""}.`, "ok");

      setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao salvar avaliação com módulo/matéria.", "error");
    }
  }
})();
