(function () {
  if (window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_FIX__) return;
  window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_FIX__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  if (!cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  let saving = false;

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
    setTimeout(() => { box.hidden = true; }, 8000);
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
    const moduleId = $("courseUxFormModule")?.value || "";
    const title = $("courseUxFormTitleInput")?.value?.trim() || "";
    const assessmentType = $("courseUxFormType")?.value || "atividade";
    const maxScore = Number($("courseUxFormMaxScore")?.value || 10);
    const weight = Number($("courseUxFormWeight")?.value || 1);
    const assessmentDate = $("courseUxFormDate")?.value || null;

    if (!courseId) throw new Error("Selecione o curso da atividade.");
    if (!classId) throw new Error("Selecione a turma da atividade.");
    if (!moduleId) throw new Error("Selecione o módulo ou matéria da atividade.");
    if (!title) throw new Error("Informe o título da atividade.");
    if (!Number.isFinite(maxScore) || maxScore <= 0) throw new Error("Informe uma nota máxima maior que zero.");
    if (!Number.isFinite(weight) || weight <= 0) throw new Error("Informe um peso maior que zero.");

    return {
      id,
      payload: {
        course_id: courseId,
        class_id: classId,
        module_id: moduleId,
        title,
        assessment_type: assessmentType,
        max_score: maxScore,
        weight,
        assessment_date: assessmentDate,
        updated_at: new Date().toISOString(),
      }
    };
  }

  function setButtonState(isSaving, isEditing) {
    const button = $("courseUxSaveAssessment");
    if (!button) return;
    button.disabled = isSaving;
    button.textContent = isSaving
      ? "Salvando..."
      : isEditing
        ? "Salvar alterações"
        : "Salvar atividade";
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
          .select("id, title, course_id, class_id, module_id, assessment_type, max_score, weight, assessment_date, updated_at")
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          throw new Error("A atividade não foi alterada. O banco não autorizou a atualização ou o registro não pertence à unidade ativa.");
        }
        saved = data;
      } else {
        const { data, error } = await db
          .from("course_assessments")
          .insert({
            school_id: profile.school_id,
            ...formData.payload,
            created_by: user.id,
          })
          .select("id, title")
          .single();

        if (error) throw error;
        saved = data;
      }

      showMessage(formData.id ? `Atividade “${saved.title}” atualizada com sucesso.` : `Atividade “${saved.title}” cadastrada com sucesso.`, "ok");

      const hiddenId = $("courseUxAssessmentId");
      if (hiddenId) hiddenId.value = "";

      setTimeout(() => {
        const activitiesButton = document.querySelector('[data-course-view="activities"].course-subnav-button');
        activitiesButton?.click();
      }, 250);

      setTimeout(() => window.location.reload(), 850);
    } catch (error) {
      console.error("INTEGRO: erro ao salvar atividade", error);
      const message = String(error?.message || "Erro ao salvar atividade.");

      if (/row-level security|permission denied|não autorizou|not authorized/i.test(message)) {
        showMessage("Não foi possível salvar porque o Supabase bloqueou a alteração. É necessário liberar a política de atualização da tabela course_assessments.", "error");
      } else if (/module_id|column/i.test(message)) {
        showMessage("Não foi possível salvar o módulo da atividade. Verifique se a coluna module_id existe na tabela course_assessments.", "error");
      } else {
        showMessage(message, "error");
      }
    } finally {
      saving = false;
      setButtonState(false, !!formData.id);
    }
  }

  function bind() {
    if (window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_EVENTS__) return;
    window.__INTEGRO_CURSOS_SALVAR_ATIVIDADE_EVENTS__ = true;

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
    bind();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
