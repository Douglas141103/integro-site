(() => {
  "use strict";

  const cfg = window.INTEGRO_SUPABASE || {};
  const client = window.supabase?.createClient?.(cfg.url, cfg.anonKey);
  const $ = (id) => document.getElementById(id);

  const state = {
    user: null,
    profile: null,
    school: null,
    courses: []
  };

  document.addEventListener("DOMContentLoaded", initModuleFix);

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
    if (!box) {
      alert(message);
      return;
    }

    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;

    setTimeout(() => {
      box.hidden = true;
    }, 7000);
  }

  function fillCourseSelect() {
    const select = $("moduleCourse");
    if (!select) return;

    const current = select.value;
    const activeCourses = state.courses.filter((course) => course.active !== false);

    select.innerHTML = `
      <option value="">Selecione o curso</option>
      ${activeCourses.map((course) => `<option value="${safe(course.id)}">${safe(course.name)}</option>`).join("")}
    `;

    if (current && activeCourses.some((course) => course.id === current)) {
      select.value = current;
    }
  }

  async function initModuleFix() {
    if (!client) return;

    const form = $("moduleForm");
    if (!form) return;

    form.addEventListener("submit", saveModuleFixed, true);

    try {
      await loadContext();
      await loadCourses();
      fillCourseSelect();
    } catch (error) {
      console.error(error);
      showStatus(error.message || "Erro ao preparar cadastro de módulos/matérias.", "error");
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

  async function loadCourses() {
    const { data, error } = await client
      .from("courses")
      .select("id, name, active, created_at")
      .eq("school_id", state.school.id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    state.courses = data || [];
  }

  async function saveModuleFixed(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    try {
      if (!state.school || !state.user) {
        await loadContext();
      }

      if (!state.courses.length) {
        await loadCourses();
        fillCourseSelect();
      }

      const courseId = $("moduleCourse")?.value || "";
      const name = $("moduleName")?.value.trim() || "";
      const workload = $("moduleWorkload")?.value || "";
      const order = $("moduleOrder")?.value || "";
      const description = $("moduleDescription")?.value.trim() || "";

      if (!courseId) throw new Error("Selecione o curso antes de salvar o módulo/matéria.");
      if (!name) throw new Error("Informe o nome do módulo/matéria.");

      const payload = {
        school_id: state.school.id,
        course_id: courseId,
        name,
        description: description || null,
        workload_hours: workload ? Number(workload) : null,
        order_index: order ? Number(order) : null,
        active: true,
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client
        .from("course_modules")
        .insert(payload);

      if (error) throw error;

      $("moduleForm")?.reset();
      fillCourseSelect();

      showStatus("Módulo/matéria salvo com sucesso.", "ok");

      setTimeout(() => {
        window.location.href = "./cursos.html#modulos";
        window.location.reload();
      }, 700);
    } catch (error) {
      console.error(error);

      if (String(error.message || "").includes("course_modules")) {
        showStatus("A tabela course_modules ainda não existe ou não está liberada. Rode o SQL de criação dos módulos no Supabase.", "error");
        return;
      }

      showStatus(error.message || "Erro ao salvar módulo/matéria.", "error");
    }
  }
})();
