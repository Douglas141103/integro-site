(function () {
  if (window.__INTEGRO_CURSOS_AVALIACOES_ORGANIZADAS__) return;
  window.__INTEGRO_CURSOS_AVALIACOES_ORGANIZADAS__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  if (!cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  const $ = (id) => document.getElementById(id);

  const state = {
    user: null,
    profile: null,
    school: null,
    courses: [],
    classes: [],
    modules: [],
    assessments: [],
    enrollments: [],
    grades: [],
    selectedAssessmentId: "",
    editingAssessmentId: "",
    activeView: "grades",
    loading: false,
  };

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDateBR(value) {
    if (!value) return "Sem data";
    const [year, month, day] = String(value).slice(0, 10).split("-");
    return year && month && day ? `${day}/${month}/${year}` : String(value);
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function showMessage(message, type = "ok") {
    const box = $("statusBox");
    if (!box) return alert(message);
    box.hidden = false;
    box.textContent = message;
    box.className = `status ${type}`;
    setTimeout(() => { box.hidden = true; }, 7000);
  }

  function courseName(id) {
    return state.courses.find((item) => item.id === id)?.name || "Curso não informado";
  }

  function className(id) {
    return state.classes.find((item) => item.id === id)?.class_name || "Turma não informada";
  }

  function moduleName(id) {
    return state.modules.find((item) => item.id === id)?.name || "Sem módulo/matéria";
  }

  function assessmentTypeLabel(type) {
    const labels = {
      atividade: "Atividade",
      prova: "Prova",
      trabalho: "Trabalho",
      pratica: "Prática",
      final: "Avaliação final",
    };
    return labels[type] || "Atividade";
  }

  function fillSelect(select, items, options = {}) {
    if (!select) return;
    const current = select.value;
    const placeholder = options.placeholder || "Selecione";
    const getValue = options.getValue || ((item) => item.id);
    const getLabel = options.getLabel || ((item) => item.name || item.class_name || item.title || item.id);
    select.innerHTML = `<option value="">${safe(placeholder)}</option>` + items.map((item) => `<option value="${safe(getValue(item))}">${safe(getLabel(item))}</option>`).join("");
    if (current && items.some((item) => String(getValue(item)) === String(current))) select.value = current;
  }

  function addStyles() {
    if ($("courseUxStyle")) return;

    const style = document.createElement("style");
    style.id = "courseUxStyle";
    style.textContent = `
      .tabs {
        background: rgba(255,255,255,.92);
        border: 1px solid rgba(15,61,46,.10);
        border-radius: 20px;
        padding: 10px;
        box-shadow: 0 10px 26px rgba(15,61,46,.06);
        position: sticky;
        top: 88px;
        z-index: 12;
      }

      .course-workspace {
        display: grid;
        gap: 18px;
      }

      .course-workspace-head {
        background: linear-gradient(135deg,#0f3d2e,#1f6e50);
        color: #fff;
        border-radius: 24px;
        padding: 24px;
        display: grid;
        grid-template-columns: 1.2fr .8fr;
        gap: 18px;
        align-items: center;
        box-shadow: 0 14px 34px rgba(15,61,46,.14);
      }

      .course-workspace-head h2 {
        margin: 0 0 8px;
        font-size: 1.6rem;
      }

      .course-workspace-head p {
        margin: 0;
        line-height: 1.5;
        color: rgba(255,255,255,.88);
      }

      .course-workspace-kpis {
        display: grid;
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 10px;
      }

      .course-workspace-kpi {
        background: rgba(255,255,255,.12);
        border: 1px solid rgba(255,255,255,.18);
        border-radius: 16px;
        padding: 12px;
      }

      .course-workspace-kpi span {
        display: block;
        font-size: .78rem;
        color: rgba(255,255,255,.74);
        font-weight: 800;
      }

      .course-workspace-kpi strong {
        display: block;
        margin-top: 4px;
        font-size: 1.35rem;
      }

      .course-subnav {
        display: grid;
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 12px;
      }

      .course-subnav-button {
        border: 1px solid #d4e6dd;
        background: #fff;
        color: #0f3d2e;
        border-radius: 18px;
        padding: 16px;
        text-align: left;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(15,61,46,.06);
      }

      .course-subnav-button strong {
        display: block;
        font-size: 1rem;
      }

      .course-subnav-button small {
        display: block;
        margin-top: 5px;
        color: #6b7280;
        line-height: 1.35;
      }

      .course-subnav-button.active {
        background: #0f3d2e;
        color: #fff;
        border-color: #0f3d2e;
      }

      .course-subnav-button.active small {
        color: rgba(255,255,255,.78);
      }

      .course-view {
        display: none;
      }

      .course-view.active {
        display: block;
      }

      .course-toolbar {
        display: grid;
        grid-template-columns: repeat(4,minmax(0,1fr));
        gap: 12px;
        margin: 14px 0;
      }

      .course-toolbar.three {
        grid-template-columns: repeat(3,minmax(0,1fr));
      }

      .course-toolbar label {
        margin: 0;
      }

      .course-section-card {
        background: #fff;
        border: 1px solid rgba(15,61,46,.08);
        border-radius: 22px;
        padding: 22px;
        box-shadow: 0 12px 28px rgba(15,61,46,.07);
      }

      .course-section-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 14px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }

      .course-section-head h3 {
        margin: 0 0 5px;
        color: #0f3d2e;
      }

      .course-section-head p {
        margin: 0;
        color: #6b7280;
        line-height: 1.45;
      }

      .module-group {
        border: 1px solid #d7e9df;
        background: #fbfefc;
        border-radius: 18px;
        padding: 16px;
        margin-top: 14px;
      }

      .module-group-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 10px;
      }

      .module-group-head strong {
        color: #0f3d2e;
      }

      .module-group-head span {
        background: #e8f5ee;
        color: #0f3d2e;
        border-radius: 999px;
        padding: 5px 9px;
        font-size: .78rem;
        font-weight: 900;
      }

      .assessment-card-grid {
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 12px;
      }

      .assessment-card {
        border: 1px solid #d7e9df;
        border-radius: 16px;
        background: #fff;
        padding: 14px;
        display: grid;
        gap: 9px;
      }

      .assessment-card.selected {
        border-color: #1f6e50;
        box-shadow: 0 0 0 3px rgba(31,110,80,.10);
      }

      .assessment-card-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      .assessment-card-head strong {
        color: #0f3d2e;
      }

      .assessment-card small {
        color: #6b7280;
        line-height: 1.45;
      }

      .assessment-card-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .assessment-select-button {
        width: 100%;
        border: 0;
        border-radius: 14px;
        background: #e8f5ee;
        color: #0f3d2e;
        padding: 10px 12px;
        font-weight: 900;
        cursor: pointer;
      }

      .course-mini-button {
        border: 1px solid #d4e6dd;
        border-radius: 999px;
        background: #fff;
        color: #0f3d2e;
        padding: 8px 12px;
        font-weight: 900;
        cursor: pointer;
      }

      .course-mini-button.danger {
        background: #fff1f0;
        border-color: #ffd0cc;
        color: #b42318;
      }

      .grade-context {
        display: grid;
        grid-template-columns: repeat(4,minmax(0,1fr));
        gap: 10px;
        background: #f4fbf7;
        border: 1px solid #d7e9df;
        border-radius: 18px;
        padding: 14px;
        margin: 14px 0;
      }

      .grade-context div {
        min-width: 0;
      }

      .grade-context span {
        display: block;
        color: #6b7280;
        font-size: .78rem;
        font-weight: 800;
      }

      .grade-context strong {
        display: block;
        color: #0f3d2e;
        margin-top: 3px;
        overflow-wrap: anywhere;
      }

      .grade-entry-list {
        display: grid;
        gap: 10px;
      }

      .grade-entry-card {
        display: grid;
        grid-template-columns: minmax(180px,1.3fr) 130px minmax(180px,1fr);
        gap: 12px;
        align-items: center;
        border: 1px solid #d7e9df;
        background: #fff;
        border-radius: 16px;
        padding: 13px;
      }

      .grade-entry-card strong {
        color: #0f3d2e;
      }

      .grade-entry-card small {
        display: block;
        color: #6b7280;
        margin-top: 4px;
      }

      .grade-score-wrap {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 7px;
      }

      .grade-score-wrap span {
        color: #6b7280;
        font-weight: 800;
      }

      .course-empty {
        border: 1px dashed #bcd8cb;
        color: #6b7280;
        background: #f4fbf7;
        border-radius: 16px;
        padding: 18px;
        text-align: center;
      }

      .edit-banner {
        display: none;
        background: #fff8e6;
        border: 1px solid #f1d18a;
        color: #7a4a00;
        border-radius: 14px;
        padding: 12px;
        margin-bottom: 14px;
        font-weight: 800;
      }

      .edit-banner.show {
        display: block;
      }

      @media (max-width: 980px) {
        .tabs { position: static; overflow-x: auto; flex-wrap: nowrap; }
        .tab { white-space: nowrap; }
        .course-workspace-head,
        .course-subnav,
        .course-toolbar,
        .course-toolbar.three,
        .course-workspace-kpis,
        .assessment-card-grid,
        .grade-context,
        .grade-entry-card {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function buildLayout() {
    const panel = $("avaliacoes");
    if (!panel || $("courseAssessmentWorkspace")) return;

    panel.innerHTML = `
      <div id="courseAssessmentWorkspace" class="course-workspace">
        <section class="course-workspace-head">
          <div>
            <h2>Atividades e notas</h2>
            <p>Organize cada atividade pelo curso, turma e módulo. Escolha uma única tarefa por vez: cadastrar, administrar ou lançar notas.</p>
          </div>
          <div class="course-workspace-kpis">
            <div class="course-workspace-kpi"><span>Atividades</span><strong id="courseUxKpiAssessments">0</strong></div>
            <div class="course-workspace-kpi"><span>Módulos usados</span><strong id="courseUxKpiModules">0</strong></div>
            <div class="course-workspace-kpi"><span>Notas lançadas</span><strong id="courseUxKpiGrades">0</strong></div>
          </div>
        </section>

        <nav class="course-subnav" aria-label="Organização de atividades e notas">
          <button type="button" class="course-subnav-button" data-course-view="activities">
            <strong>Atividades cadastradas</strong>
            <small>Consulte, edite ou exclua atividades existentes.</small>
          </button>
          <button type="button" class="course-subnav-button" data-course-view="new">
            <strong>Nova atividade</strong>
            <small>Cadastre prova, trabalho, prática ou atividade.</small>
          </button>
          <button type="button" class="course-subnav-button active" data-course-view="grades">
            <strong>Lançar notas</strong>
            <small>Escolha módulo e atividade antes de preencher as notas.</small>
          </button>
        </nav>

        <section id="courseViewActivities" class="course-view">
          <div class="course-section-card">
            <div class="course-section-head">
              <div>
                <h3>Atividades cadastradas</h3>
                <p>Filtre por curso, turma e módulo. As atividades aparecem agrupadas por módulo/matéria.</p>
              </div>
              <button type="button" class="btn primary" data-course-view="new">Cadastrar atividade</button>
            </div>
            <div class="course-toolbar three">
              <label>Curso<select id="courseUxListCourse"></select></label>
              <label>Turma<select id="courseUxListClass"></select></label>
              <label>Módulo/matéria<select id="courseUxListModule"></select></label>
            </div>
            <div id="courseUxAssessmentList"></div>
          </div>
        </section>

        <section id="courseViewNew" class="course-view">
          <form id="courseUxAssessmentForm" class="course-section-card">
            <div class="course-section-head">
              <div>
                <h3 id="courseUxFormTitle">Cadastrar nova atividade</h3>
                <p>Vincule corretamente a atividade ao curso, turma e módulo para manter o boletim organizado.</p>
              </div>
              <button type="button" class="btn ghost" id="courseUxCancelEdit">Cancelar</button>
            </div>

            <div id="courseUxEditBanner" class="edit-banner">Você está editando uma atividade existente.</div>
            <input type="hidden" id="courseUxAssessmentId" />

            <div class="form-grid">
              <label>Curso *<select id="courseUxFormCourse" required></select></label>
              <label>Turma *<select id="courseUxFormClass" required></select></label>
              <label>Módulo/matéria *<select id="courseUxFormModule" required></select></label>
              <label>Tipo<select id="courseUxFormType"><option value="atividade">Atividade</option><option value="prova">Prova</option><option value="trabalho">Trabalho</option><option value="pratica">Prática</option><option value="final">Avaliação final</option></select></label>
              <label class="full">Título da atividade *<input id="courseUxFormTitleInput" required placeholder="Ex.: Atividade 1 — Conceitos iniciais" /></label>
              <label>Nota máxima<input id="courseUxFormMaxScore" type="number" min="0.1" step="0.1" value="10" /></label>
              <label>Peso<input id="courseUxFormWeight" type="number" min="0.1" step="0.1" value="1" /></label>
              <label>Data<input id="courseUxFormDate" type="date" /></label>
            </div>

            <div class="actions">
              <button type="submit" class="btn primary" id="courseUxSaveAssessment">Salvar atividade</button>
              <button type="button" class="btn ghost" id="courseUxClearAssessment">Limpar campos</button>
            </div>
          </form>
        </section>

        <section id="courseViewGrades" class="course-view active">
          <div class="course-section-card">
            <div class="course-section-head">
              <div>
                <h3>Lançamento de notas por módulo e atividade</h3>
                <p>Primeiro selecione curso, turma e módulo. Depois escolha a atividade em um cartão.</p>
              </div>
              <button type="button" class="btn ghost" id="courseUxRefreshGrades">Atualizar dados</button>
            </div>

            <div class="course-toolbar three">
              <label>1. Curso<select id="courseUxGradeCourse"></select></label>
              <label>2. Turma<select id="courseUxGradeClass"></select></label>
              <label>3. Módulo/matéria<select id="courseUxGradeModule"></select></label>
            </div>

            <div id="courseUxGradeActivities"></div>
            <div id="courseUxGradeContext"></div>
            <div id="courseUxGradeRows" class="grade-entry-list"></div>
            <div class="actions">
              <button type="button" class="btn primary" id="courseUxSaveGrades">Salvar notas</button>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  async function loadContext() {
    const { data: authData, error: authError } = await db.auth.getUser();
    if (authError || !authData?.user) throw new Error("Usuário não autenticado.");
    state.user = authData.user;

    const { data: profile, error: profileError } = await db
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile?.school_id) throw new Error("Perfil ou unidade ativa não encontrado.");
    state.profile = profile;

    const { data: school, error: schoolError } = await db
      .from("schools")
      .select("id, name, slug, unit_type")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");
    state.school = school;
  }

  async function reloadData() {
    if (!state.school?.id) await loadContext();
    const schoolId = state.school.id;

    const [coursesRes, classesRes, modulesRes, assessmentsRes, enrollmentsRes, gradesRes] = await Promise.all([
      db.from("courses").select("*").eq("school_id", schoolId).order("name", { ascending: true }),
      db.from("course_classes").select("*").eq("school_id", schoolId).order("class_name", { ascending: true }),
      db.from("course_modules").select("*").eq("school_id", schoolId).order("order_index", { ascending: true }).order("name", { ascending: true }),
      db.from("course_assessments").select("*").eq("school_id", schoolId).order("assessment_date", { ascending: false }).order("created_at", { ascending: false }),
      db.from("course_enrollments").select("*").eq("school_id", schoolId).order("student_name_snapshot", { ascending: true }),
      db.from("course_grades").select("*").eq("school_id", schoolId),
    ]);

    const error = [coursesRes, classesRes, modulesRes, assessmentsRes, enrollmentsRes, gradesRes].find((item) => item.error)?.error;
    if (error) throw error;

    state.courses = coursesRes.data || [];
    state.classes = classesRes.data || [];
    state.modules = modulesRes.data || [];
    state.assessments = assessmentsRes.data || [];
    state.enrollments = enrollmentsRes.data || [];
    state.grades = gradesRes.data || [];

    renderAll();
  }

  function activeCourses() {
    return state.courses.filter((item) => item.active !== false);
  }

  function classesForCourse(courseId) {
    return state.classes.filter((item) => item.active !== false && (!courseId || item.course_id === courseId));
  }

  function modulesForCourse(courseId) {
    return state.modules.filter((item) => item.active !== false && (!courseId || item.course_id === courseId));
  }

  function assessmentsForFilters(courseId, classId, moduleId) {
    return state.assessments.filter((item) => {
      if (courseId && item.course_id !== courseId) return false;
      if (classId && item.class_id !== classId) return false;
      if (moduleId === "sem_modulo" && item.module_id) return false;
      if (moduleId && moduleId !== "sem_modulo" && item.module_id !== moduleId) return false;
      return true;
    });
  }

  function renderKpis() {
    $("courseUxKpiAssessments").textContent = String(state.assessments.length);
    $("courseUxKpiModules").textContent = String(new Set(state.assessments.map((item) => item.module_id).filter(Boolean)).size);
    $("courseUxKpiGrades").textContent = String(state.grades.filter((item) => item.score !== null && item.score !== undefined && item.score !== "").length);
  }

  function renderSelects() {
    const courses = activeCourses();

    ["courseUxListCourse", "courseUxFormCourse", "courseUxGradeCourse"].forEach((id) => {
      fillSelect($(id), courses, { placeholder: "Selecione o curso" });
    });

    updateListDependentSelects();
    updateFormDependentSelects();
    updateGradeDependentSelects();
  }

  function updateListDependentSelects() {
    const courseId = $("courseUxListCourse")?.value || "";
    fillSelect($("courseUxListClass"), classesForCourse(courseId), { placeholder: "Todas as turmas" });
    const modules = modulesForCourse(courseId);
    const select = $("courseUxListModule");
    if (select) {
      const current = select.value;
      select.innerHTML = '<option value="">Todos os módulos</option><option value="sem_modulo">Sem módulo</option>' + modules.map((item) => `<option value="${safe(item.id)}">${safe(item.name)}</option>`).join("");
      if (current && [...select.options].some((option) => option.value === current)) select.value = current;
    }
  }

  function updateFormDependentSelects() {
    const courseId = $("courseUxFormCourse")?.value || "";
    fillSelect($("courseUxFormClass"), classesForCourse(courseId), { placeholder: "Selecione a turma" });
    fillSelect($("courseUxFormModule"), modulesForCourse(courseId), { placeholder: "Selecione o módulo/matéria" });
  }

  function updateGradeDependentSelects() {
    const courseId = $("courseUxGradeCourse")?.value || "";
    fillSelect($("courseUxGradeClass"), classesForCourse(courseId), { placeholder: "Selecione a turma" });
    fillSelect($("courseUxGradeModule"), modulesForCourse(courseId), { placeholder: "Selecione o módulo/matéria" });
  }

  function renderAssessmentList() {
    const container = $("courseUxAssessmentList");
    if (!container) return;

    const courseId = $("courseUxListCourse")?.value || "";
    const classId = $("courseUxListClass")?.value || "";
    const moduleId = $("courseUxListModule")?.value || "";
    const assessments = assessmentsForFilters(courseId, classId, moduleId);

    if (!assessments.length) {
      container.innerHTML = '<div class="course-empty">Nenhuma atividade encontrada para os filtros selecionados.</div>';
      return;
    }

    const moduleKeys = [...new Set(assessments.map((item) => item.module_id || "sem_modulo"))];
    moduleKeys.sort((a, b) => moduleName(a).localeCompare(moduleName(b)));

    container.innerHTML = moduleKeys.map((key) => {
      const items = assessments.filter((item) => (item.module_id || "sem_modulo") === key);
      return `
        <section class="module-group">
          <div class="module-group-head"><strong>${safe(key === "sem_modulo" ? "Sem módulo/matéria" : moduleName(key))}</strong><span>${items.length} atividade(s)</span></div>
          <div class="assessment-card-grid">
            ${items.map((item) => assessmentCard(item, false)).join("")}
          </div>
        </section>
      `;
    }).join("");
  }

  function assessmentCard(item, selectMode) {
    const gradeCount = state.grades.filter((grade) => grade.assessment_id === item.id && grade.score !== null && grade.score !== undefined && grade.score !== "").length;
    return `
      <article class="assessment-card ${state.selectedAssessmentId === item.id ? "selected" : ""}">
        <div class="assessment-card-head">
          <strong>${safe(item.title)}</strong>
          <span class="badge">${safe(assessmentTypeLabel(item.assessment_type))}</span>
        </div>
        <small>
          <b>Curso:</b> ${safe(courseName(item.course_id))}<br>
          <b>Turma:</b> ${safe(className(item.class_id))}<br>
          <b>Data:</b> ${safe(formatDateBR(item.assessment_date))}<br>
          <b>Nota máxima:</b> ${safe(item.max_score ?? 10)} • <b>Peso:</b> ${safe(item.weight ?? 1)}<br>
          <b>Notas lançadas:</b> ${safe(gradeCount)}
        </small>
        ${selectMode ? `<button type="button" class="assessment-select-button" data-select-assessment="${safe(item.id)}">Lançar notas nesta atividade</button>` : `
          <div class="assessment-card-actions">
            <button type="button" class="course-mini-button" data-edit-assessment="${safe(item.id)}">Editar</button>
            <button type="button" class="course-mini-button danger" data-delete-assessment="${safe(item.id)}">Excluir</button>
            <button type="button" class="course-mini-button" data-select-assessment="${safe(item.id)}">Lançar notas</button>
          </div>
        `}
      </article>
    `;
  }

  function renderGradeActivities() {
    const container = $("courseUxGradeActivities");
    if (!container) return;

    const courseId = $("courseUxGradeCourse")?.value || "";
    const classId = $("courseUxGradeClass")?.value || "";
    const moduleId = $("courseUxGradeModule")?.value || "";

    if (!courseId || !classId || !moduleId) {
      container.innerHTML = '<div class="course-empty">Selecione curso, turma e módulo para visualizar as atividades.</div>';
      state.selectedAssessmentId = "";
      renderGradeRows();
      return;
    }

    const assessments = assessmentsForFilters(courseId, classId, moduleId);
    if (!assessments.length) {
      container.innerHTML = '<div class="course-empty">Nenhuma atividade cadastrada neste módulo. Use o botão “Nova atividade” para cadastrar.</div>';
      state.selectedAssessmentId = "";
      renderGradeRows();
      return;
    }

    if (state.selectedAssessmentId && !assessments.some((item) => item.id === state.selectedAssessmentId)) state.selectedAssessmentId = "";

    container.innerHTML = `
      <section class="module-group">
        <div class="module-group-head"><strong>${safe(moduleName(moduleId))}</strong><span>${assessments.length} atividade(s)</span></div>
        <div class="assessment-card-grid">${assessments.map((item) => assessmentCard(item, true)).join("")}</div>
      </section>
    `;

    renderGradeRows();
  }

  function renderGradeRows() {
    const context = $("courseUxGradeContext");
    const rows = $("courseUxGradeRows");
    const saveButton = $("courseUxSaveGrades");
    if (!context || !rows || !saveButton) return;

    const assessment = state.assessments.find((item) => item.id === state.selectedAssessmentId);
    if (!assessment) {
      context.innerHTML = "";
      rows.innerHTML = '<div class="course-empty">Escolha uma atividade acima para lançar as notas.</div>';
      saveButton.disabled = true;
      return;
    }

    const enrollments = state.enrollments.filter((item) => item.class_id === assessment.class_id && item.status !== "cancelado");
    context.innerHTML = `
      <div class="grade-context">
        <div><span>Atividade</span><strong>${safe(assessment.title)}</strong></div>
        <div><span>Módulo</span><strong>${safe(moduleName(assessment.module_id))}</strong></div>
        <div><span>Turma</span><strong>${safe(className(assessment.class_id))}</strong></div>
        <div><span>Nota máxima / peso</span><strong>${safe(assessment.max_score ?? 10)} / ${safe(assessment.weight ?? 1)}</strong></div>
      </div>
    `;

    if (!enrollments.length) {
      rows.innerHTML = '<div class="course-empty">A turma desta atividade ainda não possui alunos matriculados.</div>';
      saveButton.disabled = true;
      return;
    }

    rows.innerHTML = enrollments.map((enrollment) => {
      const existing = state.grades.find((item) => item.assessment_id === assessment.id && item.enrollment_id === enrollment.id);
      return `
        <article class="grade-entry-card" data-course-grade-enrollment="${safe(enrollment.id)}">
          <div><strong>${safe(enrollment.student_name_snapshot)}</strong><small>${safe(enrollment.status || "matriculado")}</small></div>
          <label>Nota<div class="grade-score-wrap"><input class="course-grade-score" type="number" min="0" max="${safe(assessment.max_score || 10)}" step="0.1" value="${safe(existing?.score ?? "")}" /><span>/ ${safe(assessment.max_score || 10)}</span></div></label>
          <label>Observação<input class="course-grade-observation" value="${safe(existing?.observation || "")}" placeholder="Opcional" /></label>
        </article>
      `;
    }).join("");

    saveButton.disabled = false;
  }

  function renderAll() {
    renderKpis();
    renderSelects();
    renderAssessmentList();
    renderGradeActivities();
  }

  function switchView(view) {
    state.activeView = view;
    document.querySelectorAll("[data-course-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.courseView === view && button.classList.contains("course-subnav-button"));
    });
    ["activities", "new", "grades"].forEach((name) => {
      $("courseView" + name.charAt(0).toUpperCase() + name.slice(1))?.classList.toggle("active", name === view);
    });
    if (view === "activities") renderAssessmentList();
    if (view === "grades") renderGradeActivities();
  }

  function clearAssessmentForm() {
    state.editingAssessmentId = "";
    $("courseUxAssessmentId").value = "";
    $("courseUxAssessmentForm").reset();
    $("courseUxFormMaxScore").value = "10";
    $("courseUxFormWeight").value = "1";
    $("courseUxFormDate").value = todayISO();
    $("courseUxFormTitle").textContent = "Cadastrar nova atividade";
    $("courseUxSaveAssessment").textContent = "Salvar atividade";
    $("courseUxEditBanner").classList.remove("show");
    updateFormDependentSelects();
  }

  function editAssessment(id) {
    const item = state.assessments.find((assessment) => assessment.id === id);
    if (!item) return;

    state.editingAssessmentId = id;
    $("courseUxAssessmentId").value = id;
    $("courseUxFormCourse").value = item.course_id || "";
    updateFormDependentSelects();
    $("courseUxFormClass").value = item.class_id || "";
    $("courseUxFormModule").value = item.module_id || "";
    $("courseUxFormType").value = item.assessment_type || "atividade";
    $("courseUxFormTitleInput").value = item.title || "";
    $("courseUxFormMaxScore").value = item.max_score ?? 10;
    $("courseUxFormWeight").value = item.weight ?? 1;
    $("courseUxFormDate").value = item.assessment_date || "";
    $("courseUxFormTitle").textContent = "Editar atividade";
    $("courseUxSaveAssessment").textContent = "Salvar alterações";
    $("courseUxEditBanner").classList.add("show");
    switchView("new");
    $("courseUxAssessmentForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function saveAssessment(event) {
    event.preventDefault();

    const payload = {
      school_id: state.school.id,
      course_id: $("courseUxFormCourse").value,
      class_id: $("courseUxFormClass").value,
      module_id: $("courseUxFormModule").value,
      title: $("courseUxFormTitleInput").value.trim(),
      assessment_type: $("courseUxFormType").value || "atividade",
      max_score: Number($("courseUxFormMaxScore").value || 10),
      weight: Number($("courseUxFormWeight").value || 1),
      assessment_date: $("courseUxFormDate").value || null,
      updated_at: new Date().toISOString(),
    };

    if (!payload.course_id || !payload.class_id || !payload.module_id || !payload.title) {
      showMessage("Preencha curso, turma, módulo e título da atividade.", "error");
      return;
    }

    try {
      const editingId = state.editingAssessmentId;
      if (editingId) {
        const { error } = await db.from("course_assessments").update(payload).eq("id", editingId).eq("school_id", state.school.id);
        if (error) throw error;
        showMessage("Atividade atualizada com sucesso.", "ok");
      } else {
        const { error } = await db.from("course_assessments").insert({ ...payload, created_by: state.user.id });
        if (error) throw error;
        showMessage("Atividade cadastrada com sucesso.", "ok");
      }

      clearAssessmentForm();
      await reloadData();
      switchView("activities");
    } catch (error) {
      console.error(error);
      showMessage(error.message || "Erro ao salvar atividade.", "error");
    }
  }

  async function deleteAssessment(id) {
    const item = state.assessments.find((assessment) => assessment.id === id);
    if (!item) return;

    const gradeCount = state.grades.filter((grade) => grade.assessment_id === id).length;
    const message = gradeCount
      ? `Excluir a atividade “${item.title}” e também ${gradeCount} nota(s) vinculada(s)?`
      : `Excluir a atividade “${item.title}”?`;

    if (!confirm(message)) return;

    try {
      if (gradeCount) {
        const { error: gradeError } = await db.from("course_grades").delete().eq("assessment_id", id).eq("school_id", state.school.id);
        if (gradeError) throw gradeError;
      }

      const { error } = await db.from("course_assessments").delete().eq("id", id).eq("school_id", state.school.id);
      if (error) throw error;

      if (state.selectedAssessmentId === id) state.selectedAssessmentId = "";
      showMessage("Atividade excluída com sucesso.", "ok");
      await reloadData();
    } catch (error) {
      console.error(error);
      showMessage(error.message || "Erro ao excluir atividade.", "error");
    }
  }

  function selectAssessment(id) {
    const item = state.assessments.find((assessment) => assessment.id === id);
    if (!item) return;

    state.selectedAssessmentId = id;
    $("courseUxGradeCourse").value = item.course_id || "";
    updateGradeDependentSelects();
    $("courseUxGradeClass").value = item.class_id || "";
    $("courseUxGradeModule").value = item.module_id || "";
    switchView("grades");
    renderGradeActivities();
    setTimeout(() => $("courseUxGradeContext")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  async function saveGrades() {
    const assessment = state.assessments.find((item) => item.id === state.selectedAssessmentId);
    const rows = Array.from(document.querySelectorAll("[data-course-grade-enrollment]"));

    if (!assessment || !rows.length) {
      showMessage("Selecione uma atividade com alunos matriculados.", "error");
      return;
    }

    const payload = rows.map((row) => {
      const scoreInput = row.querySelector(".course-grade-score");
      const observationInput = row.querySelector(".course-grade-observation");
      return {
        school_id: state.school.id,
        assessment_id: assessment.id,
        enrollment_id: row.dataset.courseGradeEnrollment,
        score: scoreInput?.value === "" ? null : Number(scoreInput?.value || 0),
        observation: observationInput?.value?.trim() || null,
        created_by: state.user.id,
        updated_at: new Date().toISOString(),
      };
    });

    const invalid = payload.find((item) => item.score !== null && (item.score < 0 || item.score > Number(assessment.max_score || 10)));
    if (invalid) {
      showMessage(`A nota deve estar entre 0 e ${assessment.max_score || 10}.`, "error");
      return;
    }

    try {
      const { error } = await db.from("course_grades").upsert(payload, { onConflict: "assessment_id,enrollment_id" });
      if (error) throw error;
      showMessage("Notas salvas com sucesso.", "ok");
      await reloadData();
      renderGradeRows();
    } catch (error) {
      console.error(error);
      showMessage(error.message || "Erro ao salvar notas.", "error");
    }
  }

  function bindEvents() {
    if (window.__INTEGRO_CURSOS_AVALIACOES_EVENTS__) return;
    window.__INTEGRO_CURSOS_AVALIACOES_EVENTS__ = true;

    document.addEventListener("click", (event) => {
      const viewButton = event.target.closest("[data-course-view]");
      if (viewButton) {
        event.preventDefault();
        switchView(viewButton.dataset.courseView);
        return;
      }

      const editButton = event.target.closest("[data-edit-assessment]");
      if (editButton) {
        editAssessment(editButton.dataset.editAssessment);
        return;
      }

      const deleteButton = event.target.closest("[data-delete-assessment]");
      if (deleteButton) {
        deleteAssessment(deleteButton.dataset.deleteAssessment);
        return;
      }

      const selectButton = event.target.closest("[data-select-assessment]");
      if (selectButton) {
        selectAssessment(selectButton.dataset.selectAssessment);
      }
    });

    $("courseUxAssessmentForm")?.addEventListener("submit", saveAssessment);
    $("courseUxCancelEdit")?.addEventListener("click", () => { clearAssessmentForm(); switchView("activities"); });
    $("courseUxClearAssessment")?.addEventListener("click", clearAssessmentForm);
    $("courseUxSaveGrades")?.addEventListener("click", saveGrades);
    $("courseUxRefreshGrades")?.addEventListener("click", reloadData);

    $("courseUxListCourse")?.addEventListener("change", () => { updateListDependentSelects(); renderAssessmentList(); });
    $("courseUxListClass")?.addEventListener("change", renderAssessmentList);
    $("courseUxListModule")?.addEventListener("change", renderAssessmentList);

    $("courseUxFormCourse")?.addEventListener("change", updateFormDependentSelects);

    $("courseUxGradeCourse")?.addEventListener("change", () => {
      state.selectedAssessmentId = "";
      updateGradeDependentSelects();
      renderGradeActivities();
    });
    $("courseUxGradeClass")?.addEventListener("change", () => {
      state.selectedAssessmentId = "";
      renderGradeActivities();
    });
    $("courseUxGradeModule")?.addEventListener("change", () => {
      state.selectedAssessmentId = "";
      renderGradeActivities();
    });
  }

  async function start() {
    try {
      addStyles();
      buildLayout();
      bindEvents();
      clearAssessmentForm();
      await loadContext();
      await reloadData();
      switchView("grades");
    } catch (error) {
      console.error(error);
      showMessage(error.message || "Erro ao organizar atividades e notas.", "error");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
