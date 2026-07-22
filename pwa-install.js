(function () {
  let deferredPrompt = null;
  let installButton = null;
  let installGuide = null;

  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)")?.matches
      || window.navigator.standalone === true;
  }

  function platformInfo() {
    const userAgent = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
      || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(userAgent);
    const isSafari = /Safari/i.test(userAgent) && !/Chrome|CriOS|Edg|OPR|Android/i.test(userAgent);
    const isInAppBrowser = /Instagram|FBAN|FBAV|WhatsApp/i.test(userAgent);

    return { isIOS, isAndroid, isSafari, isInAppBrowser };
  }

  function addInstallStyles() {
    if (document.getElementById("integroInstallStyles")) return;

    const style = document.createElement("style");
    style.id = "integroInstallStyles";
    style.textContent = `
      #installAppBtn {
        position: fixed;
        right: 16px;
        bottom: calc(16px + env(safe-area-inset-bottom, 0px));
        z-index: 9998;
        min-height: 48px;
        padding: 11px 17px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        border: 1px solid rgba(255, 255, 255, 0.28);
        border-radius: 999px;
        color: #ffffff;
        background: linear-gradient(135deg, #0d7353, #159667);
        box-shadow: 0 12px 34px rgba(0, 60, 35, 0.28);
        font: 800 0.92rem/1 Arial, Helvetica, sans-serif;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      #installAppBtn:hover { transform: translateY(-1px); }
      #installAppBtn:focus-visible { outline: 3px solid #f0ca45; outline-offset: 3px; }
      #installAppBtn[hidden] { display: none !important; }
      #installAppBtn svg { width: 21px; height: 21px; flex: 0 0 auto; }

      #installAppGuide[hidden] { display: none !important; }
      #installAppGuide {
        position: fixed;
        inset: 0;
        z-index: 10000;
        padding: 18px;
        display: grid;
        place-items: center;
        background: rgba(2, 24, 17, 0.68);
        backdrop-filter: blur(6px);
      }

      .integro-install-panel {
        width: min(100%, 480px);
        max-height: min(720px, calc(100vh - 36px));
        overflow: auto;
        position: relative;
        padding: 28px;
        color: #173f32;
        border: 1px solid #cce4d7;
        border-radius: 24px;
        background: #ffffff;
        box-shadow: 0 24px 80px rgba(0, 35, 24, 0.32);
        font-family: Arial, Helvetica, sans-serif;
      }

      .integro-install-close {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 14px;
        right: 14px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 50%;
        color: #174c3b;
        background: #e8f5ee;
        font-size: 1.45rem;
        cursor: pointer;
      }

      .integro-install-mark {
        width: 58px;
        height: 58px;
        margin-bottom: 16px;
        display: grid;
        place-items: center;
        color: #ffffff;
        border-radius: 18px;
        background: linear-gradient(135deg, #0d7353, #bed63a);
      }

      .integro-install-mark svg { width: 30px; height: 30px; }
      .integro-install-panel h2 { margin: 0 48px 8px 0; color: #0c5b42; font-size: 1.45rem; }
      .integro-install-panel p { margin: 0 0 14px; color: #47675c; line-height: 1.55; }
      .integro-install-panel ol { margin: 16px 0 20px; padding-left: 24px; }
      .integro-install-panel li { margin: 0 0 11px; padding-left: 4px; line-height: 1.45; }

      .integro-install-alert {
        margin: 14px 0;
        padding: 12px 14px;
        color: #614600;
        border: 1px solid #ead58b;
        border-radius: 13px;
        background: #fff8df;
        line-height: 1.45;
      }

      .integro-install-actions { display: flex; flex-wrap: wrap; gap: 10px; }
      .integro-install-action {
        min-height: 44px;
        padding: 11px 16px;
        border: 0;
        border-radius: 12px;
        font-weight: 800;
        cursor: pointer;
      }
      .integro-install-action.primary { color: #ffffff; background: #0d7353; }
      .integro-install-action.secondary { color: #174c3b; background: #e8f5ee; }
      .integro-install-action[hidden] { display: none !important; }

      @media (max-width: 560px) {
        #installAppBtn { right: 12px; bottom: calc(12px + env(safe-area-inset-bottom, 0px)); }
        .integro-install-panel { padding: 23px 20px; border-radius: 20px; }
        .integro-install-actions { display: grid; grid-template-columns: 1fr; }
        .integro-install-action { width: 100%; }
      }

      @media print {
        #installAppBtn, #installAppGuide { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function installationSteps() {
    const platform = platformInfo();
    const steps = [];
    let note = "";

    if (platform.isInAppBrowser) {
      note = "Você abriu o site dentro de outro aplicativo. Use o menu desta tela e escolha “Abrir no navegador” antes de instalar.";
    }

    if (platform.isIOS) {
      if (!platform.isSafari) steps.push("Abra esta página no Safari.");
      steps.push("No Safari, toque no botão Compartilhar.");
      steps.push("Role as opções e toque em “Adicionar à Tela de Início”.");
      steps.push("Ative “Abrir como App Web”, quando essa opção aparecer.");
      steps.push("Toque em “Adicionar”.");
      return { note, steps, device: "iPhone ou iPad" };
    }

    if (platform.isAndroid) {
      steps.push("Abra esta página no Google Chrome.");
      steps.push("Toque no menu de três pontos no canto superior.");
      steps.push("Escolha “Instalar app” ou “Adicionar à tela inicial”.");
      steps.push("Confirme em “Instalar”.");
      return { note, steps, device: "tablet ou celular Android" };
    }

    steps.push("Abra esta página no Chrome ou Microsoft Edge.");
    steps.push("Procure o ícone de instalação no lado direito da barra de endereço.");
    steps.push("Se o ícone não aparecer, abra o menu do navegador e escolha “Instalar INTEGRO”.");
    steps.push("Confirme a instalação.");
    return { note, steps, device: "computador" };
  }

  function updateInstallButton() {
    if (!installButton) return;
    installButton.hidden = isStandalone();
    const label = installButton.querySelector("span");
    if (label) label.textContent = deferredPrompt ? "Instalar aplicativo" : "Instalar aplicativo";
  }

  function closeInstallGuide() {
    if (!installGuide) return;
    installGuide.hidden = true;
    document.body.style.removeProperty("overflow");
    installButton?.focus?.();
  }

  async function runNativeInstall() {
    if (!deferredPrompt) {
      openInstallGuide();
      return;
    }

    const prompt = deferredPrompt;
    deferredPrompt = null;
    await prompt.prompt();
    const choice = await prompt.userChoice;

    if (choice?.outcome === "accepted") {
      closeInstallGuide();
      if (installButton) installButton.hidden = true;
    } else {
      updateInstallButton();
      openInstallGuide("A instalação automática foi fechada. Você ainda pode instalar pelo menu do navegador.");
    }
  }

  function openInstallGuide(customNote = "") {
    createInstallUI();
    if (!installGuide) return;

    const information = installationSteps();
    const note = installGuide.querySelector("[data-install-note]");
    const list = installGuide.querySelector("[data-install-steps]");
    const device = installGuide.querySelector("[data-install-device]");
    const nativeAction = installGuide.querySelector("[data-install-native]");

    device.textContent = information.device;
    list.replaceChildren(...information.steps.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }));

    const message = customNote || information.note;
    note.textContent = message;
    note.hidden = !message;
    nativeAction.hidden = !deferredPrompt;
    installGuide.hidden = false;
    document.body.style.overflow = "hidden";
    (deferredPrompt ? nativeAction : installGuide.querySelector(".integro-install-close"))?.focus?.();
  }

  function createInstallUI() {
    if (!document.body) return;

    addInstallStyles();
    installButton = document.getElementById("installAppBtn");
    if (!installButton) {
      installButton = document.createElement("button");
      installButton.id = "installAppBtn";
      installButton.type = "button";
      installButton.setAttribute("aria-haspopup", "dialog");
      installButton.setAttribute("aria-controls", "installAppGuide");
      installButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path>
        </svg>
        <span>Instalar aplicativo</span>
      `;
      installButton.addEventListener("click", () => {
        if (deferredPrompt) runNativeInstall().catch(() => openInstallGuide());
        else openInstallGuide();
      });
      document.body.appendChild(installButton);
    }

    installGuide = document.getElementById("installAppGuide");
    if (!installGuide) {
      installGuide = document.createElement("div");
      installGuide.id = "installAppGuide";
      installGuide.hidden = true;
      installGuide.setAttribute("role", "dialog");
      installGuide.setAttribute("aria-modal", "true");
      installGuide.setAttribute("aria-labelledby", "installGuideTitle");
      installGuide.innerHTML = `
        <section class="integro-install-panel">
          <button class="integro-install-close" type="button" aria-label="Fechar instalador">×</button>
          <div class="integro-install-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path>
            </svg>
          </div>
          <h2 id="installGuideTitle">Instalar o aplicativo INTEGRO</h2>
          <p>Instale o site como aplicativo neste <strong data-install-device>dispositivo</strong> para abrir mais rápido e usar em tela cheia.</p>
          <div class="integro-install-alert" data-install-note hidden></div>
          <ol data-install-steps></ol>
          <div class="integro-install-actions">
            <button class="integro-install-action primary" type="button" data-install-native hidden>Instalar agora</button>
            <button class="integro-install-action secondary" type="button" data-install-close>Fechar</button>
          </div>
        </section>
      `;

      installGuide.querySelector(".integro-install-close").addEventListener("click", closeInstallGuide);
      installGuide.querySelector("[data-install-close]").addEventListener("click", closeInstallGuide);
      installGuide.querySelector("[data-install-native]").addEventListener("click", () => {
        runNativeInstall().catch(() => openInstallGuide("Não foi possível abrir a instalação automática. Use as instruções abaixo."));
      });
      installGuide.addEventListener("click", (event) => {
        if (event.target === installGuide) closeInstallGuide();
      });
      document.body.appendChild(installGuide);
    }

    updateInstallButton();
  }

  function loadScript(id, src) {
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;
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
      loadScript("financeBalanceReconciliationScript", "/portal/financeiro-saldo-reconciliacao.js?v=20260712-saldo-1055-83-v1");
    }

    const isSchoolManagementPage = location.pathname.endsWith("/portal/gestao-escolar.html") || location.pathname.includes("/portal/gestao-escolar");
    if (isSchoolManagementPage) {
      loadScript("schoolShiftStudentsScript", "/portal/gestao-escolar-turnos.js?v=20260704-turnos-v1");
      loadScript("schoolStatusSeparatedScript", "/portal/gestao-escolar-status-separado.js?v=20260704-status-separado-v1");
    }

    const isCoursesPage = location.pathname.endsWith("/portal/cursos.html") || location.pathname.includes("/portal/cursos");
    if (isCoursesPage) {
      loadScript("coursesAssessmentsWorkspaceScript", "/portal/cursos-avaliacoes-organizadas.js?v=20260711-atividades-notas-v3");
      loadScript("coursesAssessmentReturnScript", "/portal/cursos-avaliacoes-retorno.js?v=20260712-retorno-avaliacoes-v2");
      loadScript("coursesAssessmentSaveFixScript", "/portal/cursos-avaliacoes-salvar-fix.js?v=20260711-vinculo-modulo-v2");
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

  function initializePage() {
    createInstallUI();
    loadPageAssets();
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initializePage, { once: true });
  } else {
    initializePage();
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    createInstallUI();
    updateInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    closeInstallGuide();
    if (installButton) installButton.hidden = true;
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && installGuide && !installGuide.hidden) closeInstallGuide();
  });

  window.matchMedia?.("(display-mode: standalone)")?.addEventListener?.("change", updateInstallButton);
})();
