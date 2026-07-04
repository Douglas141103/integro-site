(function () {
  if (window.__INTEGRO_GESTAO_STATUS_SEPARADO__) return;
  window.__INTEGRO_GESTAO_STATUS_SEPARADO__ = true;

  function $(id) {
    return document.getElementById(id);
  }

  function setValue(id, value) {
    const el = $(id);
    if (el) el.value = value;
  }

  function fireChange(el) {
    if (!el) return;
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function applyStatusLock(statusValue) {
    const status = $("studentStatusFilter");
    if (!status) return;

    status.value = statusValue;
    fireChange(status);
  }

  function ensureStatusSeparatedUI() {
    const status = $("studentStatusFilter");
    const filters = document.querySelector(".turno-filter-card");
    const panel = $("painel-alunos");

    if (!status || !filters || !panel) return;

    const allOption = status.querySelector('option[value="todos"]');
    if (allOption) allOption.remove();

    if (!status.value || status.value === "todos") {
      status.value = "matriculado";
    }

    const statusLabel = status.closest("label");
    if (statusLabel && !statusLabel.dataset.statusSeparadoLabel) {
      statusLabel.dataset.statusSeparadoLabel = "true";
      const textNode = Array.from(statusLabel.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (textNode) textNode.textContent = "Lista exibida ";
    }

    if (!$("studentStatusQuickFilters")) {
      const quick = document.createElement("div");
      quick.id = "studentStatusQuickFilters";
      quick.className = "student-status-quick-filters";
      quick.innerHTML = `
        <button type="button" class="student-status-chip active" data-status-view="matriculado">Matriculados</button>
        <button type="button" class="student-status-chip" data-status-view="pre_matricula">Pré-matrículas</button>
        <button type="button" class="student-status-chip" data-status-view="inativo">Inativos</button>
      `;
      filters.insertAdjacentElement("afterend", quick);
    }

    document.querySelectorAll("[data-status-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.statusView === status.value);
    });

    const mini = panel.querySelector(".mini");
    if (mini && !mini.dataset.statusSeparadoText) {
      mini.dataset.statusSeparadoText = "true";
      mini.textContent = "Esta lista separa os alunos por situação. Matriculados, pré-matrículas e inativos não aparecem misturados na mesma visualização.";
    }
  }

  function addStyles() {
    if ($("gestaoStatusSeparadoStyle")) return;

    const style = document.createElement("style");
    style.id = "gestaoStatusSeparadoStyle";
    style.textContent = `
      .student-status-quick-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
        margin-bottom: 6px;
      }

      .student-status-chip {
        border: 1px solid #cfe5d8;
        border-radius: 999px;
        padding: 10px 16px;
        background: #ffffff;
        color: #0d5c46;
        font-weight: 900;
        cursor: pointer;
      }

      .student-status-chip.active {
        background: #0d5c46;
        color: #ffffff;
        border-color: #0d5c46;
      }
    `;
    document.head.appendChild(style);
  }

  function bindEvents() {
    if (window.__INTEGRO_STATUS_SEPARADO_EVENTS__) return;
    window.__INTEGRO_STATUS_SEPARADO_EVENTS__ = true;

    document.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-status-view]");
      if (chip) {
        event.preventDefault();
        applyStatusLock(chip.dataset.statusView);
        setTimeout(ensureStatusSeparatedUI, 250);
        return;
      }

      if (event.target.closest("#clearStudentFilters")) {
        setTimeout(() => {
          setValue("studentSearchFilter", "");
          setValue("studentShiftFilter", "todos");
          applyStatusLock("matriculado");
          ensureStatusSeparatedUI();
        }, 80);
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target?.id === "studentStatusFilter") {
        if (!event.target.value || event.target.value === "todos") {
          event.target.value = "matriculado";
        }

        setTimeout(ensureStatusSeparatedUI, 250);
      }
    });
  }

  function start() {
    addStyles();
    bindEvents();

    const run = () => {
      ensureStatusSeparatedUI();

      const status = $("studentStatusFilter");
      if (status && (!status.value || status.value === "todos")) {
        status.value = "matriculado";
        fireChange(status);
      }
    };

    setTimeout(run, 600);
    setTimeout(run, 1400);
    setTimeout(run, 3000);

    new MutationObserver(run).observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
