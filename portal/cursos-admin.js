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

  document.addEventListener("DOMContentLoaded", initAdminCourses);

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showStatus(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);

    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;

    setTimeout(() => {
      box.hidden = true;
    }, 7000);
  }

  function formatDateBR(value) {
    if (!value) return "—";
    const [y, m, d] = String(value).slice(0, 10).split("-");
    if (!y || !m || !d) return value;
    return `${d}/${m}/${y}`;
  }

  function courseName(id) {
    return state.courses.find((course) => course.id === id)?.name || "Curso não informado";
  }

  function fillSelect(select, items, options = {}) {
    if (!select) return;

    const currentValue = select.value;
    const placeholder = options.placeholder || "Selecione";
    const allowEmpty = options.allowEmpty !== false;
    const getValue = options.getValue || ((item) => item.id);
    const getLabel = options.getLabel || ((item) => item.name || item.class_name || item.id);

    select.innerHTML = `${allowEmpty ? `<option value="">${safe(placeholder)}</option>` : ""}${items.map((item) => `
      <option value="${safe(getValue(item))}">${safe(getLabel(item))}</option>
    `).join("")}`;

    if (currentValue && items.some((item) => String(getValue(item)) === String(currentValue))) {
      select.value = currentValue;
    }
  }

  async function initAdminCourses() {
    if (!client) return;

    bindEvents();

    try {
      await loadContext();
      await reloadAdminData();
      renderAdminLists();
      hydrateSelects();
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao carregar ações administrativas de cursos.", "error");
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

  async function reloadAdminData() {
    const schoolId = state.school.id;

    const [coursesRes, classesRes, modulesRes] = await Promise.all([
      client
        .from("courses")
        .select("*")
        .eq("school_id", schoolId)
        .order("created_at", { ascending: false }),

      client
        .from("course_classes")
        .select("*")
        .eq("school_id", schoolId)
        .order("created_at", { ascending: false }),

      client
        .from("course_modules")
        .select("*")
        .eq("school_id", schoolId)
        .order("order_index", { ascending: true })
        .order("created_at", { ascending: true })
    ]);

    if (coursesRes.error) throw coursesRes.error;
    if (classesRes.error) throw classesRes.error;

    state.courses = coursesRes.data || [];
    state.classes = classesRes.data || [];

    if (modulesRes.error) {
      state.modules = [];
      showStatus(
        "A tabela de módulos/matérias ainda não está disponível. Rode o SQL de criação da tabela course_modules no Supabase.",
        "warn"
      );
    } else {
      state.modules = modulesRes.data || [];
    }
  }

  function hydrateSelects() {
    const activeCourses = state.courses.filter((course) => course.active !== false);
    const activeClasses = state.classes.filter((klass) => klass.active !== false);

    fillSelect($("moduleCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("classCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("enrollmentCourse"), activeCourses, { placeholder: "Selecione o curso" });
    fillSelect($("assessmentCourse"), activeCourses, { placeholder: "Selecione o curso" });

    fillSelect($("enrollmentClass"), activeClasses, {
      placeholder: "Sem turma definida",
      getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}`
    });

    fillSelect($("lessonClass"), activeClasses, {
      placeholder: "Selecione a turma",
      getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}`
    });

    fillSelect($("assessmentClass"), activeClasses, {
      placeholder: "Sem turma específica",
      getLabel: (item) => `${item.class_name} — ${courseName(item.course_id)}`
    });

    hydrateModuleSelects();
  }

  function getModulesForCourse(courseId) {
    if (!courseId) return [];
    return state.modules.filter((module) => module.course_id === courseId && module.active !== false);
  }

  function hydrateModuleSelects() {
    const lessonClassId = $("lessonClass")?.value || "";
    const lessonClass = state.classes.find((item) => item.id === lessonClassId);
    const lessonCourseId = lessonClass?.course_id || "";

    fillSelect($("lessonModule"), getModulesForCourse(lessonCourseId), {
      placeholder: "Sem módulo/matéria"
    });

    const assessmentClassId = $("assessmentClass")?.value || "";
    const assessmentClass = state.classes.find((item) => item.id === assessmentClassId);
    const assessmentCourseId = assessmentClass?.course_id || $("assessmentCourse")?.value || "";

    fillSelect($("assessmentModule"), getModulesForCourse(assessmentCourseId), {
      placeholder: "Sem módulo/matéria"
    });
  }

  function renderAdminLists() {
    renderCoursesList();
    renderClassesList();
    renderModulesList();
  }

  function renderCoursesList() {
    const list = $("coursesList");
    if (!list) return;

    if (!state.courses.length) {
      list.innerHTML = `<div class="empty">Nenhum curso cadastrado ainda.</div>`;
      return;
    }

    list.innerHTML = state.courses.map((course) => `
      <article class="record" data-admin-course-id="${safe(course.id)}">
        <strong>${safe(course.name)}</strong>
        <small>
          ${course.workload_hours ? `<b>Carga horária:</b> ${safe(course.workload_hours)}h<br>` : ""}
          ${course.duration_text ? `<b>Duração:</b> ${safe(course.duration_text)}<br>` : ""}
          ${safe(course.description || "Sem descrição.")}
        </small>
        <div class="record-actions">
          <span class="badge ${course.active === false ? "danger" : ""}">${course.active === false ? "inativo" : "ativo"}</span>
          <button class="btn danger" type="button" data-delete-course="${safe(course.id)}">Excluir curso</button>
        </div>
      </article>
    `).join("");
  }

  function renderClassesList() {
    const list = $("classesList");
    if (!list) return;

    if (!state.classes.length) {
      list.innerHTML = `<div class="empty">Nenhuma turma cadastrada ainda.</div>`;
      return;
    }

    list.innerHTML = state.classes.map((klass) => `
      <article class="record" data-admin-class-id="${safe(klass.id)}">
        <strong>${safe(klass.class_name)}</strong>
        <small>
          <b>Curso:</b> ${safe(courseName(klass.course_id))}<br>
          <b>Período:</b> ${safe(formatDateBR(klass.start_date))} a ${safe(formatDateBR(klass.end_date))}<br>
          ${safe(klass.schedule_text || "Sem horário informado.")}
        </small>
        <div class="record-actions">
          <span class="badge">${safe(klass.status || "aberta")}</span>
          <button class="btn danger" type="button" data-delete-class="${safe(klass.id)}">Excluir turma</button>
        </div>
      </article>
    `).join("");
  }

  function renderModulesList() {
    const list = $("modulesList");
    if (!list) return;

    if (!state.modules.length) {
      list.innerHTML = `<div class="empty">Nenhum módulo ou matéria cadastrado ainda.</div>`;
      return;
    }

    const grouped = state.courses.map((course) => {
      const modules = state.modules.filter((module) => module.course_id === course.id);
      if (!modules.length) return "";

      return `
        <div class="record">
          <strong>${safe(course.name)}</strong>
          <small>${safe(modules.length)} módulo(s)/matéria(s) cadastrado(s)</small>
          <div class="records">
            ${modules.map((module) => `
              <article class="record" data-admin-module-id="${safe(module.id)}">
                <strong>${module.order_index ? `${safe(module.order_index)}. ` : ""}${safe(module.name)}</strong>
                <small>
                  ${module.workload_hours ? `<b>Carga horária:</b> ${safe(module.workload_hours)}h<br>` : ""}
                  ${safe(module.description || "Sem descrição.")}
                </small>
                <div class="record-actions">
                  <span class="badge ${module.active === false ? "danger" : ""}">${module.active === false ? "inativo" : "ativo"}</span>
                  <button class="btn danger" type="button" data-delete-module="${safe(module.id)}">Excluir módulo/matéria</button>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");

    list.innerHTML = grouped || `<div class="empty">Nenhum módulo ou matéria cadastrado ainda.</div>`;
  }

  function bindEvents() {
    document.addEventListener("click", async (event) => {
      const courseBtn = event.target.closest("[data-delete-course]");
      const classBtn = event.target.closest("[data-delete-class]");
      const moduleBtn = event.target.closest("[data-delete-module]");

      if (courseBtn) {
        await deleteCourse(courseBtn.dataset.deleteCourse);
        return;
      }

      if (classBtn) {
        await deleteClass(classBtn.dataset.deleteClass);
        return;
      }

      if (moduleBtn) {
        await deleteModule(moduleBtn.dataset.deleteModule);
      }
    });

    $("lessonClass")?.addEventListener("change", hydrateModuleSelects);
    $("assessmentClass")?.addEventListener("change", hydrateModuleSelects);
    $("assessmentCourse")?.addEventListener("change", hydrateModuleSelects);

    $("moduleForm")?.addEventListener("submit", () => {
      setTimeout(async () => {
        await reloadAdminData();
        renderAdminLists();
        hydrateSelects();
      }, 900);
    });

    $("courseForm")?.addEventListener("submit", () => {
      setTimeout(async () => {
        await reloadAdminData();
        renderAdminLists();
        hydrateSelects();
      }, 900);
    });

    $("classForm")?.addEventListener("submit", () => {
      setTimeout(async () => {
        await reloadAdminData();
        renderAdminLists();
        hydrateSelects();
      }, 900);
    });
  }

  async function countRows(table, column, value) {
    const { count, error } = await client
      .from(table)
      .select("id", { count: "exact", head: true })
      .eq(column, value)
      .eq("school_id", state.school.id);

    if (error) return null;
    return count || 0;
  }

  async function deleteCourse(courseId) {
    const course = state.courses.find((item) => item.id === courseId);
    if (!course) return;

    const [classes, modules, enrollments] = await Promise.all([
      countRows("course_classes", "course_id", courseId),
      countRows("course_modules", "course_id", courseId),
      countRows("course_enrollments", "course_id", courseId)
    ]);

    const message =
      `Deseja realmente excluir o curso "${course.name}"?\n\n` +
      `Turmas vinculadas: ${classes ?? "não verificado"}\n` +
      `Módulos/matérias vinculados: ${modules ?? "não verificado"}\n` +
      `Matrículas vinculadas: ${enrollments ?? "não verificado"}\n\n` +
      `A exclusão pode remover ou desvincular registros relacionados, conforme as regras do banco. Essa ação não poderá ser desfeita.`;

    if (!confirm(message)) return;

    const secondConfirm = prompt("Para confirmar, digite EXCLUIR");
    if (secondConfirm !== "EXCLUIR") return;

    await deleteRecord("courses", courseId, "Curso excluído com sucesso.");
  }

  async function deleteClass(classId) {
    const klass = state.classes.find((item) => item.id === classId);
    if (!klass) return;

    const [lessons, assessments, enrollments] = await Promise.all([
      countRows("course_lessons", "class_id", classId),
      countRows("course_assessments", "class_id", classId),
      countRows("course_enrollments", "class_id", classId)
    ]);

    const message =
      `Deseja realmente excluir a turma "${klass.class_name}"?\n\n` +
      `Aulas vinculadas: ${lessons ?? "não verificado"}\n` +
      `Avaliações vinculadas: ${assessments ?? "não verificado"}\n` +
      `Matrículas vinculadas: ${enrollments ?? "não verificado"}\n\n` +
      `As matrículas poderão ficar sem turma definida e alguns registros relacionados podem ser removidos pelo banco.`;

    if (!confirm(message)) return;

    await deleteRecord("course_classes", classId, "Turma excluída com sucesso.");
  }

  async function deleteModule(moduleId) {
    const module = state.modules.find((item) => item.id === moduleId);
    if (!module) return;

    const [lessons, assessments] = await Promise.all([
      countRows("course_lessons", "course_module_id", moduleId),
      countRows("course_assessments", "course_module_id", moduleId)
    ]);

    const message =
      `Deseja realmente excluir o módulo/matéria "${module.name}"?\n\n` +
      `Aulas vinculadas: ${lessons ?? "não verificado"}\n` +
      `Avaliações vinculadas: ${assessments ?? "não verificado"}\n\n` +
      `As aulas e avaliações vinculadas ficarão sem módulo/matéria, conforme a regra do banco.`;

    if (!confirm(message)) return;

    await deleteRecord("course_modules", moduleId, "Módulo/matéria excluído com sucesso.");
  }

  async function deleteRecord(table, id, successMessage) {
    try {
      const { error } = await client
        .from(table)
        .delete()
        .eq("id", id)
        .eq("school_id", state.school.id);

      if (error) throw error;

      await reloadAdminData();
      renderAdminLists();
      hydrateSelects();

      showStatus(successMessage, "ok");
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao excluir registro.", "error");
    }
  }
})();
