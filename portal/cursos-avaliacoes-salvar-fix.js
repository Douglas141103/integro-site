(function () {
  if (window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_FIX_V2__) return;
  window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_FIX_V2__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  if (!cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  let saving = false;
  let repairing = false;

  function $(id) {
    return document.getElementById(id);
  }

  function showMessage(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => { box.hidden = true; }, 9000);
  }

  function installFieldCompatibility() {
    if (Object.getOwnPropertyDescriptor(Object.prototype, "module_id")) return;

    Object.defineProperty(Object.prototype, "module_id", {
      configurable: true,
      enumerable: false,
      get() {
        return this?.course_module_id;
      },
      set(value) {
        this.course_module_id = value;
      }
    });
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  async function getContext() {
    const { data: authData, error: authError } = await db.auth.getUser();
    if (authError || !authData?.user) throw new Error("Usuário não autenticado. Entre novamente no portal.");

    const { data: profile, error: profileError } = await db
      .from("profiles")
      .select("id, school_id, role")
      .eq("id", authData.user.id)
      .maybeSingle();

    if (profileError || !profile?.school_id) throw new Error("Perfil ou unidade ativa não encontrado.");
    return { user: authData.user, profile };
  }

  function readForm() {
    const form = $("courseUxAssessmentForm");
    if (!form) throw new Error("Formulário de atividade não encontrado. Atualize a página.");

    const id = $("courseUxAssessmentId")?.value || "";
    const courseId = $("courseUxFormCourse")?.value || "";
    const classId = $("courseUxFormClass")?.value || "";
    const courseModuleId = $("courseUxFormModule")?.value || "";
    const title = $("courseUxFormTitleInput")?.value?.trim() || "";
    const assessmentType = $("courseUxFormType")?.value || "atividade";
    const maxScore = Number($("courseUxFormMaxScore")?.value || 10);
    const weight = Number($("courseUxFormWeight")?.value || 1);
    const assessmentDate = $("courseUxFormDate")?.value || null;

    if (!courseId) throw new Error("Selecione o curso da atividade.");
    if (!classId) throw new Error("Selecione a turma da atividade.");
    if (!courseModuleId) throw new Error("Selecione o módulo ou matéria da atividade.");
    if (!title) throw new Error("Informe o título da atividade.");
    if (!Number.isFinite(maxScore) || maxScore <= 0) throw new Error("Informe uma nota máxima maior que zero.");
    if (!Number.isFinite(weight) || weight <= 0) throw new Error("Informe um peso maior que zero.");

    return {
      id,
      payload: {
        course_id: courseId,
        class_id: classId,
        course_module_id: courseModuleId,
        title,
        assessment_type: assessmentType,
        max_score: maxScore,
        weight,
        assessment_date: assessmentDate,
        updated_at: new Date().toISOString()
      }
    };
  }

  function setButtonState(isSaving, isEditing) {
    const button = $("courseUxSaveAssessment");
    if (!button) return;
    button.disabled = isSaving;
    button.textContent = isSaving ? "Salvando..." : isEditing ? "Salvar alterações" : "Salvar atividade";
  }

  function forceWorkspaceRefresh() {
    const listCourse = $("courseUxListCourse");
    const gradeCourse = $("courseUxGradeCourse");

    if (listCourse) listCourse.dispatchEvent(new Event("change", { bubbles: true }));
    if (gradeCourse) gradeCourse.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      document.querySelector('[data-course-view="activities"].course-subnav-button')?.click();
    }, 250);
  }

  async function saveActivity() {
    if (saving) return;

    let formData;
    try {
      formData = readForm();
    } catch (error) {
      showMessage(error.message || "Revise os dados da atividade.", "error");
      return;
    }

    saving = true;
    setButtonState(true, !!formData.id);

    try {
      const { user, profile } = await getContext();
      let saved;

      if (formData.id) {
        const { data, error } = await db
          .from("course_assessments")
          .update(formData.payload)
          .eq("id", formData.id)
          .eq("school_id", profile.school_id)
          .select("id, title, course_id, class_id, course_module_id, assessment_type, max_score, weight, assessment_date, updated_at")
          .maybeSingle();

        if (error) throw error;
        if (!data) throw new Error("A atividade não foi encontrada ou não pertence à unidade ativa.");
        if (String(data.course_module_id || "") !== String(formData.payload.course_module_id)) {
          throw new Error("O módulo escolhido não foi gravado no banco. Atualize a página e tente novamente.");
        }
        saved = data;
      } else {
        const { data, error } = await db
          .from("course_assessments")
          .insert({
            school_id: profile.school_id,
            ...formData.payload,
            created_by: user.id
          })
          .select("id, title, course_module_id")
          .single();

        if (error) throw error;
        saved = data;
      }

      showMessage(formData.id ? `Atividade “${saved.title}” vinculada ao módulo e atualizada com sucesso.` : `Atividade “${saved.title}” cadastrada com sucesso.`, "ok");

      const hiddenId = $("courseUxAssessmentId");
      if (hiddenId) hiddenId.value = "";

      forceWorkspaceRefresh();
      setTimeout(() => window.location.reload(), 1100);
    } catch (error) {
      console.error("INTEGRO: erro ao salvar atividade", error);
      const message = String(error?.message || "Erro ao salvar atividade.");

      if (/row-level security|permission denied|not authorized/i.test(message)) {
        showMessage("O Supabase bloqueou a alteração. É necessário liberar atualização na tabela course_assessments para o seu perfil.", "error");
      } else if (/course_module_id|column/i.test(message)) {
        showMessage("O vínculo correto usa o campo course_module_id. Verifique se essa coluna existe na tabela course_assessments.", "error");
      } else {
        showMessage(message, "error");
      }
    } finally {
      saving = false;
      setButtonState(false, !!formData?.id);
    }
  }

  function inferModule(assessment, modules) {
    if (!modules.length) return null;

    const ownLegacy = Object.prototype.hasOwnProperty.call(assessment, "module_id")
      ? assessment.module_id
      : null;

    if (ownLegacy && modules.some((module) => module.id === ownLegacy)) return ownLegacy;
    if (modules.length === 1) return modules[0].id;

    const title = normalizeText(assessment.title);
    const byName = modules.find((module) => {
      const moduleText = normalizeText(module.name);
      return moduleText.length >= 4 && title.includes(moduleText);
    });
    if (byName) return byName.id;

    const numberMatch = title.match(/(?:modulo|materia)\s*(\d+)/i) || title.match(/^\s*(\d+)\b/);
    if (numberMatch) {
      const order = Number(numberMatch[1]);
      const byOrder = modules.find((module) => Number(module.order_index || 0) === order);
      if (byOrder) return byOrder.id;
    }

    return null;
  }

  async function repairExistingLinks() {
    if (repairing) return;
    repairing = true;

    try {
      const { profile } = await getContext();
      const schoolId = profile.school_id;

      const [modulesRes, assessmentsRes] = await Promise.all([
        db.from("course_modules").select("id, course_id, name, order_index, active").eq("school_id", schoolId).order("order_index", { ascending: true }),
        db.from("course_assessments").select("*").eq("school_id", schoolId).order("assessment_date", { ascending: true }).order("created_at", { ascending: true })
      ]);

      if (modulesRes.error) throw modulesRes.error;
      if (assessmentsRes.error) throw assessmentsRes.error;

      const modules = (modulesRes.data || []).filter((module) => module.active !== false);
      const assessments = assessmentsRes.data || [];
      const pending = assessments.filter((assessment) => !assessment.course_module_id);
      const assignments = new Map();

      pending.forEach((assessment) => {
        const candidates = modules.filter((module) => module.course_id === assessment.course_id);
        const inferred = inferModule(assessment, candidates);
        if (inferred) assignments.set(assessment.id, inferred);
      });

      const unresolvedGroups = new Map();
      pending.filter((assessment) => !assignments.has(assessment.id)).forEach((assessment) => {
        const key = `${assessment.course_id || ""}|${assessment.class_id || ""}`;
        if (!unresolvedGroups.has(key)) unresolvedGroups.set(key, []);
        unresolvedGroups.get(key).push(assessment);
      });

      unresolvedGroups.forEach((group) => {
        const courseId = group[0]?.course_id;
        const candidates = modules
          .filter((module) => module.course_id === courseId)
          .sort((a, b) => Number(a.order_index || 9999) - Number(b.order_index || 9999));

        if (candidates.length && group.length === candidates.length) {
          group.forEach((assessment, index) => assignments.set(assessment.id, candidates[index].id));
        }
      });

      let repaired = 0;
      for (const [assessmentId, courseModuleId] of assignments.entries()) {
        const { data, error } = await db
          .from("course_assessments")
          .update({ course_module_id: courseModuleId, updated_at: new Date().toISOString() })
          .eq("id", assessmentId)
          .eq("school_id", schoolId)
          .select("id, course_module_id")
          .maybeSingle();

        if (error) throw error;
        if (data?.course_module_id === courseModuleId) repaired += 1;
      }

      installFieldCompatibility();
      forceWorkspaceRefresh();

      if (repaired > 0) {
        showMessage(`${repaired} atividade(s) antiga(s) foram vinculadas automaticamente aos módulos correspondentes.`, "ok");
        setTimeout(() => window.location.reload(), 1300);
      }
    } catch (error) {
      console.warn("INTEGRO: não foi possível reparar todos os vínculos antigos", error);
    } finally {
      repairing = false;
    }
  }

  function bind() {
    if (window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_EVENTS_V2__) return;
    window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_EVENTS_V2__ = true;

    document.addEventListener("click", (event) => {
      const button = event.target.closest("#courseUxSaveAssessment");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      saveActivity();
    }, true);

    document.addEventListener("submit", (event) => {
      if (event.target?.id !== "courseUxAssessmentForm") return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      saveActivity();
    }, true);
  }

  function start() {
    installFieldCompatibility();
    bind();
    setTimeout(repairExistingLinks, 1600);
    setTimeout(forceWorkspaceRefresh, 2400);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
