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

  function loadHomeInstagramPanel() {
    const isHome = location.pathname === "/" || location.pathname.endsWith("/index.html");
    if (!isHome || document.getElementById("homeInstagramPanelScript")) return;

    const script = document.createElement("script");
    script.id = "homeInstagramPanelScript";
    script.src = "/assets/home-instagram-panel.js?v=20260627-stories-integro";
    script.defer = true;
    document.body.appendChild(script);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.warn("Service Worker não registrado:", error);
      });
    });
  }

  window.addEventListener("DOMContentLoaded", loadHomeInstagramPanel);

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
