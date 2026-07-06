(function () {
  if (window.__INTEGRO_CALCULADORA_MENSALIDADES__) return;
  window.__INTEGRO_CALCULADORA_MENSALIDADES__ = true;

  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;
  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  let profile = null;
  let calculatorData = [];
  let packages = [];

  function $(id) {
    return document.getElementById(id);
  }

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function numberValue(value) {
    const cleaned = String(value ?? "")
      .replace(/\./g, "")
      .replace(",", ".")
      .replace(/[^0-9.-]/g, "");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function getCurrentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  function statusOf(student) {
    if (student?.enrollment_status) return student.enrollment_status;
    return student?.active === false ? "inativo" : "matriculado";
  }

  function shiftLabel(shift) {
    const labels = {
      manha: "Manhã",
      tarde: "Tarde",
      noite: "Noite",
    };
    return labels[shift] || "Sem turno";
  }

  function getStorageKey(month) {
    const schoolId = profile?.school_id || "sem-escola";
    return `integro:mensalidades:${schoolId}:${month}`;
  }

  function readDiscounts(month) {
    try {
      return JSON.parse(localStorage.getItem(getStorageKey(month)) || "{}");
    } catch {
      return {};
    }
  }

  function saveDiscounts(month, map) {
    localStorage.setItem(getStorageKey(month), JSON.stringify(map || {}));
  }

  function packageById(id) {
    return packages.find((pkg) => pkg.id === id) || null;
  }

  async function getProfile() {
    if (profile?.school_id) return profile;

    const { data: userData, error: userError } = await db.auth.getUser();
    if (userError || !userData?.user) throw new Error("Usuário não autenticado.");

    const { data, error } = await db
      .from("profiles")
      .select("id, school_id, full_name, role")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (error) throw error;
    if (!data?.school_id) throw new Error("Perfil sem unidade vinculada.");

    profile = data;
    return profile;
  }

  async function loadData() {
    const currentProfile = await getProfile();

    const [studentsRes, packagesRes] = await Promise.all([
      db
        .from("students")
        .select("id, full_name, active, enrollment_status, package_id, monthly_due_day, shift, guardian_1_name")
        .eq("school_id", currentProfile.school_id)
        .order("full_name", { ascending: true }),
      db
        .from("finance_packages")
        .select("id, name, default_amount, active")
        .eq("school_id", currentProfile.school_id)
        .order("name", { ascending: true }),
    ]);

    if (studentsRes.error) throw studentsRes.error;
    if (packagesRes.error) throw packagesRes.error;

    packages = packagesRes.data || [];
    const students = studentsRes.data || [];

    calculatorData = students
      .filter((student) => statusOf(student) === "matriculado" && student.active !== false)
      .map((student) => {
        const pkg = packageById(student.package_id);
        return {
          ...student,
          package_name: pkg?.name || "Sem pacote",
          package_amount: Number(pkg?.default_amount || 0),
        };
      });
  }

  function addStyles() {
    if ($("mensalidadesCalcStyle")) return;

    const style = document.createElement("style");
    style.id = "mensalidadesCalcStyle";
    style.textContent = `
      .mensalidades-card {
        margin-top: 18px;
        border: 1px solid #dbe9e1;
        border-radius: 24px;
        background: #ffffff;
        padding: 20px;
        box-shadow: 0 14px 36px rgba(7, 49, 35, .06);
      }

      .mensalidades-head {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: flex-start;
        flex-wrap: wrap;
      }

      .mensalidades-head h3 {
        color: #0d5c46;
        margin: 0 0 6px;
        font-size: 1.35rem;
      }

      .mensalidades-head p {
        margin: 0;
        color: #63756d;
        line-height: 1.5;
      }

      .mensalidades-controls {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
        margin-top: 16px;
        align-items: end;
      }

      .mensalidades-controls label {
        margin: 0;
        font-weight: 800;
        color: #0b4538;
      }

      .mensalidades-controls input,
      .mensalidades-controls select,
      .mensalidades-row input {
        width: 100%;
        min-width: 0;
        border: 1px solid #cfe1d8;
        border-radius: 14px;
        padding: 11px 12px;
        font: inherit;
        color: #0b2f27;
        background: #fff;
      }

      .mensalidades-summary {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-top: 16px;
      }

      .mensalidades-total-box {
        border-radius: 18px;
        border: 1px solid #dbe9e1;
        background: #f7fcf9;
        padding: 14px;
      }

      .mensalidades-total-box span {
        display: block;
        color: #61746d;
        font-size: .85rem;
        font-weight: 800;
      }

      .mensalidades-total-box strong {
        display: block;
        color: #0d5c46;
        font-size: 1.25rem;
        margin-top: 4px;
      }

      .mensalidades-table-wrap {
        margin-top: 18px;
        overflow-x: auto;
        border: 1px solid #dbe9e1;
        border-radius: 18px;
      }

      .mensalidades-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 920px;
      }

      .mensalidades-table th,
      .mensalidades-table td {
        padding: 11px;
        border-bottom: 1px solid #e2eee8;
        text-align: left;
        vertical-align: middle;
      }

      .mensalidades-table th {
        background: #e8f4ee;
        color: #0d5c46;
        font-weight: 900;
      }

      .mensalidades-row strong {
        color: #0b3f35;
      }

      .mensalidades-row small {
        display: block;
        color: #63756d;
        line-height: 1.35;
      }

      .mensalidades-final {
        font-size: 1rem;
        color: #0d5c46;
        font-weight: 900;
      }

      .mensalidades-packages {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }

      .mensalidade-package-card {
        border: 1px solid #dbe9e1;
        background: #fbfefc;
        border-radius: 16px;
        padding: 12px;
      }

      .mensalidade-package-card strong {
        color: #0d5c46;
        display: block;
      }

      .mensalidade-package-card span {
        color: #63756d;
        font-size: .88rem;
      }

      .mensalidades-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .mensalidades-note {
        margin-top: 12px;
        border-radius: 14px;
        padding: 12px;
        background: #fff8e6;
        color: #624000;
        font-size: .88rem;
        font-weight: 700;
        line-height: 1.4;
      }

      @media (max-width: 980px) {
        .mensalidades-controls,
        .mensalidades-summary,
        .mensalidades-packages {
          grid-template-columns: 1fr;
        }
      }

      @media print {
        body * {
          visibility: hidden !important;
        }
        #mensalidadesCalculator,
        #mensalidadesCalculator * {
          visibility: visible !important;
        }
        #mensalidadesCalculator {
          position: absolute;
          inset: 0;
          box-shadow: none;
        }
        .mensalidades-controls,
        .mensalidades-actions,
        .mensalidades-note {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function ensureCalculator() {
    const panel = $("painel-alunos") || document.querySelector("main") || document.body;
    if (!panel || $("mensalidadesCalculator")) return;

    const card = document.createElement("section");
    card.id = "mensalidadesCalculator";
    card.className = "mensalidades-card";
    card.innerHTML = `
      <div class="mensalidades-head">
        <div>
          <h3>Calculadora de mensalidades reais</h3>
          <p>Calcule o total mensal dos alunos ativos/matriculados, usando o pacote de cada aluno e aplicando descontos em porcentagem ou em valor.</p>
        </div>
        <div class="mensalidades-actions">
          <button class="btn-secondary" type="button" id="mensalidadesReload">Recarregar alunos</button>
          <button class="btn-primary" type="button" id="mensalidadesPrint">Imprimir cálculo</button>
        </div>
      </div>

      <div class="mensalidades-controls">
        <label>
          Mês de referência
          <input id="mensalidadesMonth" type="month" />
        </label>
        <label>
          Filtro por turno
          <select id="mensalidadesShiftFilter">
            <option value="todos">Todos os turnos</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="sem_turno">Sem turno</option>
          </select>
        </label>
        <label>
          Desconto geral em %
          <input id="mensalidadesGlobalPercent" type="number" min="0" max="100" step="0.01" placeholder="Ex.: 10" />
        </label>
        <label>
          Desconto geral em R$
          <input id="mensalidadesGlobalValue" type="number" min="0" step="0.01" placeholder="Ex.: 50" />
        </label>
        <button class="btn-secondary" type="button" id="mensalidadesApplyGlobal">Aplicar geral</button>
      </div>

      <div class="mensalidades-summary">
        <div class="mensalidades-total-box"><span>Alunos ativos calculados</span><strong id="mensalidadesStudentsCount">0</strong></div>
        <div class="mensalidades-total-box"><span>Total bruto dos pacotes</span><strong id="mensalidadesGrossTotal">R$ 0,00</strong></div>
        <div class="mensalidades-total-box"><span>Total de descontos</span><strong id="mensalidadesDiscountTotal">R$ 0,00</strong></div>
        <div class="mensalidades-total-box"><span>Total real do mês</span><strong id="mensalidadesNetTotal">R$ 0,00</strong></div>
      </div>

      <div id="mensalidadesPackageSummary" class="mensalidades-packages"></div>

      <div class="mensalidades-table-wrap">
        <table class="mensalidades-table">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Turno</th>
              <th>Pacote</th>
              <th>Valor do pacote</th>
              <th>Desc. %</th>
              <th>Desc. R$</th>
              <th>Total desconto</th>
              <th>Valor real do mês</th>
            </tr>
          </thead>
          <tbody id="mensalidadesRows">
            <tr><td colspan="8">Carregando...</td></tr>
          </tbody>
        </table>
      </div>

      <div class="mensalidades-note">
        Esta calculadora considera apenas alunos ativos/matriculados. Os descontos ficam salvos neste navegador por mês de referência para simulação e conferência interna.
      </div>
    `;

    const filters = document.querySelector(".turno-filter-card");
    if (filters) {
      filters.insertAdjacentElement("beforebegin", card);
    } else {
      const mini = panel.querySelector(".mini");
      mini ? mini.insertAdjacentElement("afterend", card) : panel.prepend(card);
    }

    $("mensalidadesMonth").value = getCurrentMonth();
  }

  function getFilteredRows() {
    const shiftFilter = $("mensalidadesShiftFilter")?.value || "todos";
    return calculatorData.filter((student) => {
      const shift = student.shift || "sem_turno";
      return shiftFilter === "todos" || shift === shiftFilter;
    });
  }

  function getDiscountForStudent(student, month) {
    const map = readDiscounts(month);
    return map[student.id] || { percent: 0, value: 0 };
  }

  function setDiscountForStudent(studentId, month, patch) {
    const map = readDiscounts(month);
    map[studentId] = {
      percent: Number(patch.percent ?? map[studentId]?.percent ?? 0),
      value: Number(patch.value ?? map[studentId]?.value ?? 0),
    };
    saveDiscounts(month, map);
  }

  function calculateStudent(student, month) {
    const discount = getDiscountForStudent(student, month);
    const base = Number(student.package_amount || 0);
    const percentDiscount = Math.max(0, base * (Number(discount.percent || 0) / 100));
    const valueDiscount = Math.max(0, Number(discount.value || 0));
    const totalDiscount = Math.min(base, percentDiscount + valueDiscount);
    const net = Math.max(0, base - totalDiscount);

    return {
      base,
      percent: Number(discount.percent || 0),
      value: Number(discount.value || 0),
      totalDiscount,
      net,
    };
  }

  function renderCalculator() {
    ensureCalculator();

    const month = $("mensalidadesMonth")?.value || getCurrentMonth();
    const rows = getFilteredRows();

    let gross = 0;
    let discounts = 0;
    let net = 0;

    const html = rows.map((student) => {
      const calc = calculateStudent(student, month);
      gross += calc.base;
      discounts += calc.totalDiscount;
      net += calc.net;

      return `
        <tr class="mensalidades-row" data-student-id="${safe(student.id)}">
          <td>
            <strong>${safe(student.full_name)}</strong>
            <small>Responsável: ${safe(student.guardian_1_name || "-")} • Vencimento: ${student.monthly_due_day ? "dia " + safe(student.monthly_due_day) : "-"}</small>
          </td>
          <td>${safe(shiftLabel(student.shift))}</td>
          <td>${safe(student.package_name)}</td>
          <td>${money(calc.base)}</td>
          <td><input type="number" min="0" max="100" step="0.01" value="${safe(calc.percent)}" data-discount-percent="${safe(student.id)}" /></td>
          <td><input type="number" min="0" step="0.01" value="${safe(calc.value)}" data-discount-value="${safe(student.id)}" /></td>
          <td>${money(calc.totalDiscount)}</td>
          <td><span class="mensalidades-final">${money(calc.net)}</span></td>
        </tr>
      `;
    }).join("");

    $("mensalidadesRows").innerHTML = html || '<tr><td colspan="8">Nenhum aluno ativo/matriculado encontrado para este filtro.</td></tr>';
    $("mensalidadesStudentsCount").textContent = String(rows.length);
    $("mensalidadesGrossTotal").textContent = money(gross);
    $("mensalidadesDiscountTotal").textContent = money(discounts);
    $("mensalidadesNetTotal").textContent = money(net);

    renderPackageSummary(rows, month);
  }

  function renderPackageSummary(rows, month) {
    const box = $("mensalidadesPackageSummary");
    if (!box) return;

    const groups = new Map();
    rows.forEach((student) => {
      const key = student.package_id || "sem-pacote";
      const calc = calculateStudent(student, month);
      if (!groups.has(key)) {
        groups.set(key, {
          name: student.package_name,
          count: 0,
          gross: 0,
          discounts: 0,
          net: 0,
        });
      }
      const group = groups.get(key);
      group.count += 1;
      group.gross += calc.base;
      group.discounts += calc.totalDiscount;
      group.net += calc.net;
    });

    box.innerHTML = Array.from(groups.values()).map((group) => `
      <div class="mensalidade-package-card">
        <strong>${safe(group.name)}</strong>
        <span>${group.count} aluno(s) • Bruto: ${money(group.gross)} • Descontos: ${money(group.discounts)} • Real: ${money(group.net)}</span>
      </div>
    `).join("") || '<div class="mensalidade-package-card"><strong>Nenhum pacote</strong><span>Sem alunos ativos no filtro.</span></div>';
  }

  function bindEvents() {
    if (window.__INTEGRO_CALCULADORA_MENSALIDADES_EVENTS__) return;
    window.__INTEGRO_CALCULADORA_MENSALIDADES_EVENTS__ = true;

    document.addEventListener("input", (event) => {
      const month = $("mensalidadesMonth")?.value || getCurrentMonth();

      const percentInput = event.target.closest("[data-discount-percent]");
      if (percentInput) {
        setDiscountForStudent(percentInput.dataset.discountPercent, month, { percent: numberValue(percentInput.value) });
        renderCalculator();
        return;
      }

      const valueInput = event.target.closest("[data-discount-value]");
      if (valueInput) {
        setDiscountForStudent(valueInput.dataset.discountValue, month, { value: numberValue(valueInput.value) });
        renderCalculator();
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target?.id === "mensalidadesMonth" || event.target?.id === "mensalidadesShiftFilter") {
        renderCalculator();
      }
    });

    document.addEventListener("click", async (event) => {
      if (event.target.closest("#mensalidadesReload")) {
        await refreshCalculator();
      }

      if (event.target.closest("#mensalidadesApplyGlobal")) {
        const month = $("mensalidadesMonth")?.value || getCurrentMonth();
        const percent = numberValue($("mensalidadesGlobalPercent")?.value);
        const value = numberValue($("mensalidadesGlobalValue")?.value);
        const map = readDiscounts(month);
        getFilteredRows().forEach((student) => {
          map[student.id] = { percent, value };
        });
        saveDiscounts(month, map);
        renderCalculator();
      }

      if (event.target.closest("#mensalidadesPrint")) {
        window.print();
      }
    });
  }

  async function refreshCalculator() {
    ensureCalculator();
    $("mensalidadesRows").innerHTML = '<tr><td colspan="8">Carregando alunos ativos...</td></tr>';

    try {
      await loadData();
      renderCalculator();
    } catch (error) {
      console.error(error);
      $("mensalidadesRows").innerHTML = `<tr><td colspan="8">Erro ao carregar calculadora: ${safe(error.message || "erro desconhecido")}</td></tr>`;
    }
  }

  function start() {
    addStyles();
    ensureCalculator();
    bindEvents();
    refreshCalculator();

    setTimeout(refreshCalculator, 2000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
