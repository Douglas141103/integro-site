(function () {
  if (window.__FAMILIA_CURSOS_AVISO__) return;
  window.__FAMILIA_CURSOS_AVISO__ = true;

  let supabaseClient = null;
  let lastStudentId = "";
  let lastData = null;

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function brDate(value) {
    if (!value) return "—";
    const parts = String(value).slice(0, 10).split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : String(value);
  }

  function num(value) {
    if (value === null || value === undefined || value === "") return "—";
    const n = Number(value);
    return Number.isFinite(n) ? String(n.toFixed(1)).replace(".", ",") : "—";
  }

  function byId(items) {
    return new Map((items || []).map((item) => [item.id, item]));
  }

  async function getClient() {
    if (supabaseClient) return supabaseClient;

    const cfg = window.INTEGRO_SUPABASE || {};
    const mod = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");

    supabaseClient = mod.createClient(cfg.url, cfg.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });

    return supabaseClient;
  }

  function addCss() {
    if (document.getElementById("familiaCursosAvisoCss")) return;

    const style = document.createElement("style");
    style.id = "familiaCursosAvisoCss";
    style.textContent = `
      #courses-online,
      #courses-online *,
      .familia-cursos-aviso,
      .curso-real-card {
        box-sizing: border-box;
        max-width: 100%;
      }

      #courses-online {
        overflow: visible;
      }

      .familia-cursos-aviso {
        width: 100%;
        overflow: hidden;
        border: 1px solid rgba(15, 61, 46, .12);
        border-radius: 22px;
        padding: 20px;
        background: #fff;
        box-shadow: 0 10px 24px rgba(7, 49, 35, .06);
      }

      .familia-cursos-aviso h4,
      .familia-curso-panel h5 {
        margin: 0 0 8px;
        color: #0f3d2e;
      }

      .familia-cursos-aviso p {
        color: #607084;
        line-height: 1.55;
      }

      .familia-cursos-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-top: 14px;
      }

      .familia-curso-btn {
        min-width: 0;
        white-space: normal;
        background: #f4fbf7;
        border: 1px solid #d7e9df;
        border-radius: 16px;
        padding: 14px;
        color: #073b31;
        font-weight: 900;
        cursor: pointer;
        text-align: left;
        font: inherit;
        transition: .2s;
      }

      .familia-curso-btn:hover,
      .familia-curso-btn.active {
        background: #0f3d2e;
        color: #fff;
        transform: translateY(-1px);
      }

      .familia-curso-panel {
        display: none;
        margin-top: 16px;
        background: #fbfefc;
        border: 1px solid #dfeee6;
        border-radius: 18px;
        padding: 16px;
        overflow: hidden;
      }

      .familia-curso-panel.active {
        display: block;
      }

      .curso-real-card {
        overflow: hidden;
        border: 1px solid #d7e9df;
        border-radius: 18px;
        padding: 14px;
        background: #fff;
        color: #073b31;
        margin-bottom: 14px;
      }

      .curso-real-card > strong {
        display: block;
        color: #0f3d2e;
        font-size: 1.03rem;
        line-height: 1.25;
        overflow-wrap: anywhere;
      }

      .curso-real-card small {
        display: block;
        color: #607084;
        margin-top: 5px;
        line-height: 1.45;
        overflow-wrap: anywhere;
      }

      .curso-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
        margin: 12px 0;
      }

      .curso-stat {
        min-width: 0;
        background: #f4fbf7;
        border: 1px solid #d7e9df;
        border-radius: 14px;
        padding: 10px;
      }

      .curso-stat span,
      .curso-info-label {
        display: block;
        color: #607084;
        font-size: .78rem;
        font-weight: 800;
      }

      .curso-stat b,
      .curso-info-value {
        display: block;
        color: #0f3d2e;
        font-weight: 900;
        overflow-wrap: anywhere;
      }

      .curso-card-list {
        display: grid;
        gap: 10px;
        margin-top: 10px;
      }

      .curso-info-card {
        width: 100%;
        overflow: hidden;
        background: #fbfefc;
        border: 1px solid #d7e9df;
        border-left: 5px solid #d8a94b;
        border-radius: 16px;
        padding: 12px;
      }

      .curso-info-card-title {
        display: block;
        color: #0f3d2e;
        font-weight: 900;
        margin-bottom: 8px;
        overflow-wrap: anywhere;
      }

      .curso-info-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .curso-info-box {
        min-width: 0;
        background: #fff;
        border: 1px solid #e0eee7;
        border-radius: 12px;
        padding: 9px;
        overflow-wrap: anywhere;
      }

      .curso-empty {
        background: #fff8e6;
        border: 1px solid rgba(216, 169, 75, .35);
        border-radius: 14px;
        padding: 12px;
        color: #624000;
        font-weight: 700;
        margin-top: 10px;
      }

      @media (max-width: 800px) {
        .familia-cursos-aviso {
          padding: 14px;
          border-radius: 18px;
        }

        .familia-cursos-grid,
        .curso-stats,
        .curso-info-grid {
          grid-template-columns: 1fr;
        }

        .familia-curso-panel {
          padding: 12px;
        }

        .curso-real-card {
          padding: 12px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function atualizarLogin() {
    const copy = document.querySelector(".auth-card .muted");
    if (copy) copy.textContent = "Acompanhe o plano de estudos, materiais, evolução, frequência, notas, componentes curriculares dos cursos e atividades online do estudante.";

    const list = document.querySelector(".feature-list");
    if (list && !list.dataset.cursosAviso) {
      list.dataset.cursosAviso = "true";
      list.innerHTML = `
        <li>O que o estudante vai estudar na semana</li>
        <li>Arquivos e materiais individualizados</li>
        <li>Notas, médias e componentes curriculares dos cursos</li>
        <li>Atividades online, aulas e acompanhamento dos cursos</li>
        <li>Evolução, frequência e acompanhamento do aluno</li>
        <li>Comunicados e recados com a equipe</li>
      `;
    }
  }

  function abrirSecaoFamilia(sectionId) {
    document.querySelectorAll(".family-section-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === sectionId);
    });

    document.querySelectorAll("[data-family-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.familyTab === sectionId);
    });

    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth",
      });
    }

    if (history.replaceState) history.replaceState(null, "", "#" + sectionId);
  }

  function abrirSubAba(tipo) {
    document.querySelectorAll("[data-curso-subtab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.cursoSubtab === tipo);
    });

    document.querySelectorAll("[data-curso-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.cursoPanel === tipo);
    });

    renderPainel(tipo);
  }

  function baseBoxHtml() {
    return `
      <h4>Acompanhamento dos cursos</h4>
      <p>Esta área mostra os dados reais lançados na Gestão de Cursos: notas, médias, componentes curriculares/módulos e atividades online vinculadas ao estudante selecionado.</p>
      <div class="familia-cursos-grid">
        <button class="familia-curso-btn active" type="button" data-curso-subtab="notas">Notas e médias</button>
        <button class="familia-curso-btn" type="button" data-curso-subtab="componentes">Componentes curriculares</button>
        <button class="familia-curso-btn" type="button" data-curso-subtab="online">Atividades online</button>
      </div>
      <div class="familia-curso-panel active" data-curso-panel="notas">
        <div id="cursoNotasDados" class="curso-empty">Carregando notas e médias...</div>
      </div>
      <div class="familia-curso-panel" data-curso-panel="componentes">
        <div id="cursoComponentesDados" class="curso-empty">Carregando componentes curriculares...</div>
      </div>
      <div class="familia-curso-panel" data-curso-panel="online">
        <div id="cursoOnlineDados" class="curso-empty">Carregando atividades online...</div>
      </div>
    `;
  }

  function criarAreaDashboard() {
    addCss();

    const hero = document.querySelector(".hero-actions");
    if (hero && !hero.querySelector('[data-family-tab="courses-online"]')) {
      const btn = document.createElement("button");
      btn.className = "btn btn-light family-tab-button";
      btn.type = "button";
      btn.dataset.familyTab = "courses-online";
      btn.textContent = "Cursos e notas";
      hero.insertBefore(btn, hero.children[1] || null);
    }

    const menu = document.querySelector(".family-section-buttons");
    if (menu && !menu.querySelector('[data-family-tab="courses-online"]')) {
      const btn = document.createElement("button");
      btn.className = "family-nav-button";
      btn.type = "button";
      btn.dataset.familyTab = "courses-online";
      btn.innerHTML = '<span class="family-nav-icon">3</span><strong>Cursos, notas e online</strong><small>Acompanhe componentes curriculares, notas e atividades online.</small>';

      const ref = menu.querySelector('[data-family-tab="materials"]');
      ref ? ref.insertAdjacentElement("afterend", btn) : menu.appendChild(btn);
    }

    const grid = document.querySelector(".family-single-view");
    if (grid && !document.getElementById("courses-online")) {
      const section = document.createElement("section");
      section.id = "courses-online";
      section.className = "content-card family-section-panel";
      section.innerHTML = `
        <div class="section-head">
          <div>
            <p class="eyebrow">Cursos e atividades online</p>
            <h3>Notas e componentes curriculares</h3>
            <p class="muted">Acompanhe os cursos em que o aluno está matriculado, os módulos/matérias, notas, médias e atividades online lançadas pela equipe.</p>
          </div>
        </div>
        <div class="familia-cursos-aviso">${baseBoxHtml()}</div>
      `;

      const ref = document.getElementById("materials");
      ref ? ref.insertAdjacentElement("afterend", section) : grid.appendChild(section);
    } else if (document.getElementById("courses-online") && !document.querySelector("[data-curso-subtab]")) {
      const box = document.querySelector("#courses-online .familia-cursos-aviso");
      if (box) box.innerHTML = baseBoxHtml();
    }
  }

  function selectedStudent() {
    const select = document.getElementById("student-selector");
    return {
      id: select?.value || "",
      name: select?.options?.[select.selectedIndex]?.textContent?.trim() || "",
    };
  }

  function avgFor(enrollment, assessments, grades) {
    let total = 0;
    let weightTotal = 0;

    assessments.forEach((assessment) => {
      const grade = grades.find((item) => item.assessment_id === assessment.id && item.enrollment_id === enrollment.id);
      if (grade?.score === null || grade?.score === undefined || grade?.score === "") return;

      const max = Number(assessment.max_score || 10) || 10;
      const weight = Number(assessment.weight || 1) || 1;

      total += ((Number(grade.score || 0) / max) * 10) * weight;
      weightTotal += weight;
    });

    return weightTotal ? Number((total / weightTotal).toFixed(1)) : null;
  }

  async function loadData() {
    const student = selectedStudent();
    if (!student.id) return { student, enrollments: [] };

    const db = await getClient();

    let { data: enrollments, error } = await db
      .from("course_enrollments")
      .select("*")
      .eq("student_id", student.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    if ((!enrollments || !enrollments.length) && student.name) {
      const byName = await db
        .from("course_enrollments")
        .select("*")
        .ilike("student_name_snapshot", student.name)
        .order("created_at", { ascending: false });

      if (byName.error) throw byName.error;
      enrollments = byName.data || [];
    }

    enrollments = enrollments || [];
    if (!enrollments.length) return { student, enrollments: [] };

    const courseIds = [...new Set(enrollments.map((item) => item.course_id).filter(Boolean))];
    const classIds = [...new Set(enrollments.map((item) => item.class_id).filter(Boolean))];
    const enrollmentIds = enrollments.map((item) => item.id);

    const [coursesRes, classesRes, modulesRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes] = await Promise.all([
      courseIds.length ? db.from("courses").select("*").in("id", courseIds) : Promise.resolve({ data: [] }),
      classIds.length ? db.from("course_classes").select("*").in("id", classIds) : Promise.resolve({ data: [] }),
      courseIds.length ? db.from("course_modules").select("*").in("course_id", courseIds).order("order_index", { ascending: true }) : Promise.resolve({ data: [] }),
      classIds.length ? db.from("course_assessments").select("*").in("class_id", classIds).order("assessment_date", { ascending: true }) : Promise.resolve({ data: [] }),
      enrollmentIds.length ? db.from("course_grades").select("*").in("enrollment_id", enrollmentIds) : Promise.resolve({ data: [] }),
      classIds.length ? db.from("course_lessons").select("*").in("class_id", classIds).order("lesson_date", { ascending: false }) : Promise.resolve({ data: [] }),
      enrollmentIds.length ? db.from("course_attendance").select("*").in("enrollment_id", enrollmentIds) : Promise.resolve({ data: [] }),
    ]);

    const withError = [coursesRes, classesRes, modulesRes, assessmentsRes, gradesRes, lessonsRes, attendanceRes].find((res) => res.error);
    if (withError) throw withError.error;

    return {
      student,
      enrollments,
      courses: coursesRes.data || [],
      classes: classesRes.data || [],
      modules: modulesRes.data || [],
      assessments: assessmentsRes.data || [],
      grades: gradesRes.data || [],
      lessons: lessonsRes.data || [],
      attendance: attendanceRes.data || [],
    };
  }

  function renderPainel(tipo) {
    const data = lastData;
    const target = {
      notas: document.getElementById("cursoNotasDados"),
      componentes: document.getElementById("cursoComponentesDados"),
      online: document.getElementById("cursoOnlineDados"),
    }[tipo || "notas"];

    if (!target) return;

    if (!data) {
      target.className = "curso-empty";
      target.innerHTML = "Carregando dados dos cursos...";
      return;
    }

    if (!data.enrollments?.length) {
      target.className = "curso-empty";
      target.innerHTML = "Nenhuma matrícula em curso foi encontrada para este aluno. Verifique se a matrícula do curso foi feita usando o aluno da base, ou se o nome digitado na matrícula é igual ao nome do aluno no portal da família.";
      return;
    }

    target.className = "";

    if (tipo === "componentes") return renderComponentes(target, data);
    if (tipo === "online") return renderOnline(target, data);
    return renderNotas(target, data);
  }

  function moduleName(modules, id) {
    if (!id) return "Sem módulo/matéria";
    return modules.get(id)?.name || "Módulo não localizado";
  }

  function renderNotas(target, data) {
    const courses = byId(data.courses);
    const classes = byId(data.classes);
    const modules = byId(data.modules);

    target.innerHTML = data.enrollments.map((enrollment) => {
      const course = courses.get(enrollment.course_id) || {};
      const klass = classes.get(enrollment.class_id) || {};
      const assessments = data.assessments.filter((item) => item.class_id === enrollment.class_id);
      const grades = data.grades.filter((item) => item.enrollment_id === enrollment.id);
      const average = enrollment.final_average ?? avgFor(enrollment, assessments, grades);

      const assessmentCards = assessments.length ? assessments.map((assessment) => {
        const grade = grades.find((item) => item.assessment_id === assessment.id);
        const moduleId = assessment.course_module_id || assessment.module_id;

        return `
          <article class="curso-info-card">
            <strong class="curso-info-card-title">${safe(assessment.title || "Avaliação")}</strong>
            <div class="curso-info-grid">
              <div class="curso-info-box"><span class="curso-info-label">Data</span><span class="curso-info-value">${safe(brDate(assessment.assessment_date))}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Módulo/matéria</span><span class="curso-info-value">${safe(moduleName(modules, moduleId))}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Tipo</span><span class="curso-info-value">${safe(assessment.assessment_type || "Atividade")}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Nota</span><span class="curso-info-value">${safe(grade?.score ?? "—")} / ${safe(assessment.max_score || 10)}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Peso</span><span class="curso-info-value">${safe(assessment.weight || 1)}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Observação</span><span class="curso-info-value">${safe(grade?.observation || "—")}</span></div>
            </div>
          </article>
        `;
      }).join("") : '<div class="curso-empty">Nenhuma avaliação/nota lançada para esta turma.</div>';

      return `
        <article class="curso-real-card">
          <strong>${safe(course.name || "Curso")}</strong>
          <small>Turma: ${safe(klass.class_name || "—")} • Status: ${safe(enrollment.final_result || enrollment.status || "Matriculado")}</small>
          <div class="curso-stats">
            <div class="curso-stat"><span>Média geral</span><b>${num(average)}</b></div>
            <div class="curso-stat"><span>Frequência</span><b>${enrollment.attendance_percentage != null ? num(enrollment.attendance_percentage) + "%" : "—"}</b></div>
            <div class="curso-stat"><span>Avaliações</span><b>${assessments.length}</b></div>
            <div class="curso-stat"><span>Notas lançadas</span><b>${grades.length}</b></div>
          </div>
          <div class="curso-card-list">${assessmentCards}</div>
        </article>
      `;
    }).join("");
  }

  function renderComponentes(target, data) {
    const courses = byId(data.courses);
    const classes = byId(data.classes);

    target.innerHTML = data.enrollments.map((enrollment) => {
      const course = courses.get(enrollment.course_id) || {};
      const klass = classes.get(enrollment.class_id) || {};
      const modules = data.modules.filter((item) => item.course_id === enrollment.course_id);

      const moduleCards = modules.length ? modules.map((module) => {
        const moduleAssessments = data.assessments.filter((assessment) => {
          const moduleId = assessment.course_module_id || assessment.module_id;
          return assessment.class_id === enrollment.class_id && moduleId === module.id;
        });
        const moduleGrades = data.grades.filter((grade) => {
          return grade.enrollment_id === enrollment.id && moduleAssessments.some((assessment) => assessment.id === grade.assessment_id);
        });
        const moduleAverage = moduleAssessments.length ? avgFor(enrollment, moduleAssessments, moduleGrades) : null;

        return `
          <article class="curso-info-card">
            <strong class="curso-info-card-title">${module.order_index ? safe(module.order_index) + ". " : ""}${safe(module.name)}</strong>
            <div class="curso-info-grid">
              <div class="curso-info-box"><span class="curso-info-label">Carga horária</span><span class="curso-info-value">${module.workload_hours ? safe(module.workload_hours) + "h" : "—"}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Média do módulo</span><span class="curso-info-value">${num(moduleAverage)}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Avaliações</span><span class="curso-info-value">${moduleAssessments.length}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Descrição</span><span class="curso-info-value">${safe(module.description || "Componente curricular cadastrado.")}</span></div>
            </div>
          </article>
        `;
      }).join("") : '<div class="curso-empty">Nenhum módulo/matéria cadastrado para este curso.</div>';

      return `
        <article class="curso-real-card">
          <strong>${safe(course.name || "Curso")}</strong>
          <small>Turma: ${safe(klass.class_name || "—")}</small>
          <div class="curso-card-list">${moduleCards}</div>
        </article>
      `;
    }).join("");
  }

  function renderOnline(target, data) {
    const courses = byId(data.courses);
    const classes = byId(data.classes);
    const modules = byId(data.modules);

    target.innerHTML = data.enrollments.map((enrollment) => {
      const course = courses.get(enrollment.course_id) || {};
      const klass = classes.get(enrollment.class_id) || {};
      const lessons = data.lessons.filter((item) => item.class_id === enrollment.class_id);

      const lessonCards = lessons.length ? lessons.map((lesson) => {
        const moduleId = lesson.course_module_id || lesson.module_id;
        const mod = modules.get(moduleId);

        return `
          <article class="curso-info-card">
            <strong class="curso-info-card-title">${safe(lesson.title || "Aula / atividade")}</strong>
            <div class="curso-info-grid">
              <div class="curso-info-box"><span class="curso-info-label">Data</span><span class="curso-info-value">${safe(brDate(lesson.lesson_date))}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Módulo/matéria</span><span class="curso-info-value">${safe(mod?.name || "Sem módulo/matéria")}</span></div>
              <div class="curso-info-box"><span class="curso-info-label">Resumo/conteúdo</span><span class="curso-info-value">${safe(lesson.content_summary || "Atividade/aula registrada pela equipe.")}</span></div>
            </div>
          </article>
        `;
      }).join("") : '<div class="curso-empty">Nenhuma aula ou atividade online lançada para esta turma.</div>';

      return `
        <article class="curso-real-card">
          <strong>${safe(course.name || "Curso")}</strong>
          <small>Turma: ${safe(klass.class_name || "—")}</small>
          <div class="curso-card-list">${lessonCards}</div>
        </article>
      `;
    }).join("");
  }

  async function refreshDados() {
    const student = selectedStudent();
    if (!student.id) return;

    if (student.id === lastStudentId && lastData) {
      return renderPainel(document.querySelector("[data-curso-subtab].active")?.dataset.cursoSubtab || "notas");
    }

    lastStudentId = student.id;
    lastData = null;

    ["cursoNotasDados", "cursoComponentesDados", "cursoOnlineDados"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.className = "curso-empty";
        el.innerHTML = "Carregando dados lançados em cursos...";
      }
    });

    try {
      lastData = await loadData();
      renderPainel(document.querySelector("[data-curso-subtab].active")?.dataset.cursoSubtab || "notas");
    } catch (error) {
      console.error(error);
      ["cursoNotasDados", "cursoComponentesDados", "cursoOnlineDados"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.className = "curso-empty";
          el.innerHTML = "Não foi possível carregar os dados dos cursos. Verifique se as permissões/RLS das tabelas course_enrollments, course_modules, course_assessments, course_grades e course_lessons permitem leitura pelo responsável. Detalhe: " + safe(error.message || "erro desconhecido");
        }
      });
    }
  }

  function start() {
    atualizarLogin();

    document.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-family-tab]");
      if (tab && tab.dataset.familyTab === "courses-online") {
        event.preventDefault();
        criarAreaDashboard();
        abrirSecaoFamilia("courses-online");
        setTimeout(refreshDados, 250);
      }

      const sub = event.target.closest("[data-curso-subtab]");
      if (sub) {
        event.preventDefault();
        abrirSubAba(sub.dataset.cursoSubtab);
        setTimeout(refreshDados, 100);
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target && event.target.id === "student-selector") {
        lastStudentId = "";
        lastData = null;
        setTimeout(refreshDados, 700);
      }
    });

    if (location.pathname.includes("/portal-familia/dashboard.html")) {
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        criarAreaDashboard();
        if (document.getElementById("student-selector")?.value) {
          refreshDados();
          clearInterval(timer);
        } else if (tries > 40) {
          clearInterval(timer);
        }
      }, 300);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();