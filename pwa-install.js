(function () {
  let deferredPrompt = null;

  function createInstallButton() {
    if (document.getElementById("installAppBtn")) return;

    const btn = document.createElement("button");
    btn.id = "installAppBtn";
    btn.type = "button";
    btn.textContent = "Instalar app";
    btn.style.position = "fixed";
    btn.style.right = "16px";
    btn.style.bottom = "16px";
    btn.style.zIndex = "9999";
    btn.style.border = "0";
    btn.style.borderRadius = "999px";
    btn.style.padding = "12px 18px";
    btn.style.fontWeight = "800";
    btn.style.color = "#ffffff";
    btn.style.background = "#117a5a";
    btn.style.boxShadow = "0 10px 30px rgba(0, 60, 35, 0.20)";
    btn.style.cursor = "pointer";
    btn.style.display = "none";

    btn.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      btn.style.display = "none";
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    });

    document.body.appendChild(btn);
  }

  function loadScript(id, src) {
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  }

  function loadHomeScript(id, src) {
    const isHome = location.pathname === "/" || location.pathname.endsWith("/index.html");
    if (!isHome) return;
    loadScript(id, src);
  }

  function loadPageAssets() {
    loadHomeScript("homeInstagramPanelScript", "/assets/home-instagram-panel.js?v=20260627-real-files-v1");
    loadHomeScript("homeSiteImprovementsScript", "/assets/site-improvements.js?v=20260627-layout-portais-v1");
    loadHomeScript("buttonScheduleFixScript", "/assets/button-schedule-fix.js?v=20260627-fix-v1");

    const isFinancePage = location.pathname.endsWith("/portal/financeiro.html") || location.pathname.includes("/portal/financeiro");
    if (isFinancePage) {
      loadScript("cashExtractsScript", "/portal/financeiro-recolho-extratos.js?v=20260627-extratos-recolho-v1");
      loadScript("cashAcionistaScript", "/portal/financeiro-recolho-acionista.js?v=20260702-acionista-v1");
      loadScript("financeMonthlyCalculatorScript", "/portal/financeiro-calculadora-mensalidades.js?v=20260704-calculadora-financeiro-v1");
    }

    const isSchoolManagementPage = location.pathname.endsWith("/portal/gestao-escolar.html") || location.pathname.includes("/portal/gestao-escolar");
    if (isSchoolManagementPage) {
      loadScript("schoolShiftStudentsScript", "/portal/gestao-escolar-turnos.js?v=20260704-turnos-v1");
      loadScript("schoolStatusSeparatedScript", "/portal/gestao-escolar-status-separado.js?v=20260704-status-separado-v1");
    }

    const isCoursesPage = location.pathname.endsWith("/portal/cursos.html") || location.pathname.includes("/portal/cursos");
    if (isCoursesPage) {
      loadScript("coursesAssessmentsWorkspaceScript", "/portal/cursos-avaliacoes-organizadas.js?v=20260711-atividades-notas-v1");
    }

    const isFamilyPortal = location.pathname.includes("/portal-familia/");
    if (isFamilyPortal) {
      loadScript("familyCoursesNoticeScript", "/portal-familia/cursos-familia-aviso.js?v=20260701-cursos-responsivo-v4");
    }
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.warn("Service Worker não registrado:", error);
      });
    });
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", loadPageAssets);
  } else {
    loadPageAssets();
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    createInstallButton();

    const btn = document.getElementById("installAppBtn");
    if (btn) btn.style.display = "block";
  });

  window.addEventListener("appinstalled", () => {
    const btn = document.getElementById("installAppBtn");
    if (btn) btn.style.display = "none";
    deferredPrompt = null;
  });
})();