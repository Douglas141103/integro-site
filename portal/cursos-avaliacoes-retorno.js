(function () {
  if (window.__INTEGRO_CURSOS_AVALIACOES_RETORNO__) return;
  window.__INTEGRO_CURSOS_AVALIACOES_RETORNO__ = true;

  const STORAGE_KEY = "integro:cursos:retorno-avaliacoes";

  function rememberReturn() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        tab: "avaliacoes",
        view: "activities",
        savedAt: Date.now()
      }));
    } catch {}
  }

  function restoreReturn() {
    let saved = null;

    try {
      saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    } catch {}

    if (!saved || saved.tab !== "avaliacoes") return;

    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}

    const openAssessments = () => {
      const mainTab = document.querySelector('.tab[data-tab="avaliacoes"]');
      const panel = document.getElementById("avaliacoes");
      const workspace = document.getElementById("courseAssessmentWorkspace");

      if (!mainTab || !panel || !workspace) return false;

      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));

      mainTab.classList.add("active");
      panel.classList.add("active");

      const activitiesButton = document.querySelector('[data-course-view="activities"].course-subnav-button');
      activitiesButton?.click();

      if (history.replaceState) {
        history.replaceState(null, "", location.pathname + location.search + "#avaliacoes");
      }

      setTimeout(() => {
        workspace.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);

      return true;
    };

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (openAssessments() || tries >= 30) clearInterval(timer);
    }, 200);
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("#courseUxSaveAssessment")) rememberReturn();
  }, true);

  document.addEventListener("submit", (event) => {
    if (event.target?.id === "courseUxAssessmentForm") rememberReturn();
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreReturn);
  } else {
    restoreReturn();
  }
})();
