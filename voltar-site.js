(function () {
  const existing = document.getElementById("integroBackToSite");
  if (existing) return;

  const currentPath = window.location.pathname || "";
  const isMainSite = currentPath === "/" || (currentPath.endsWith("/index.html") && !currentPath.includes("/portal"));

  if (isMainSite) return;

  const wrapper = document.createElement("div");
  wrapper.id = "integroBackToSite";

  wrapper.innerHTML = `
    <a class="integro-back-home" href="/" aria-label="Voltar ao site principal">
      <span class="integro-back-arrow">←</span>
      <span>Site principal</span>
    </a>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #integroBackToSite {
      position: fixed;
      left: 16px;
      top: 16px;
      z-index: 99999;
      font-family: Arial, Helvetica, sans-serif;
    }

    #integroBackToSite .integro-back-home {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 999px;
      background: #ffffff;
      color: #004d3a;
      border: 1px solid rgba(0, 77, 58, 0.18);
      box-shadow: 0 10px 28px rgba(0, 60, 35, 0.16);
      font-weight: 800;
      font-size: 0.92rem;
      text-decoration: none;
      transition: 0.2s ease;
    }

    #integroBackToSite .integro-back-home:hover {
      background: #e8f5ee;
      transform: translateY(-1px);
    }

    #integroBackToSite .integro-back-arrow {
      font-size: 1.1rem;
      line-height: 1;
    }

    @media (max-width: 700px) {
      #integroBackToSite {
        left: 10px;
        top: 10px;
      }

      #integroBackToSite .integro-back-home {
        padding: 9px 12px;
        font-size: 0.84rem;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(wrapper);
})();
