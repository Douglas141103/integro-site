(function () {
  if (window.__INTEGRO_FINANCEIRO_CALC_MENSALIDADES__) return;
  window.__INTEGRO_FINANCEIRO_CALC_MENSALIDADES__ = true;

  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;
  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  let profile = null;
  let schoolId = null;
  let students = [];
  let packages = [];
  let entries = [];
  let loading = false;

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

  function toNumber(value) {
    const parsed = Number(String(value ?? "0").replace(/\./g, "").replace(",", ".").replace(/[^0-9.-]/g, ""));
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function currentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  function monthRange(month) {
    const [year, monthIndex] = String(month || currentMonth()).split("-").map(Number);
    const start = new Date(year, monthIndex - 1, 1);
    const end = new Date(year, monthIndex, 0);
    const iso = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    return { start: iso(start), end: iso(end) };
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

  function storageKey(month) {
    return `integro:financeiro:calc-mensalidades:${schoolId || "sem-escola"}:${month}`;
  }

  function readDiscounts(month) {
    try {
      return JSON.parse(localStorage.getItem(storageKey(month)) || "{}");
    } catch {
      return {};
    }
  }

  function saveDiscounts(month, map) {
    localStorage.setItem(storageKey(month), JSON.stringify(map || {}));
  }

  function packageById(id) {
    return packages.find((pkg) => pkg.id === id) || null;
  }

  function addStyles() {
    if ($("financeMonthlyCalcStyle")) return;

    const style = document.createElement("style");
    style.id = "financeMonthlyCalcStyle";
    style.textContent = `
      .monthly-calc-card {
        background: #ffffff;
        border: 1px solid rgba(15, 61, 46, .10);
        border-radius: 24px;
        padding: 24px;
        box-shadow: 0 14px 34px rgba(7, 49, 35, .08);
      }

      .monthly-calc-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        flex-wrap: wrap;
      }

      .monthly-calc-head h2 {
        margin: 0 0 8px;
        color: #003f31;
      }

      .monthly-calc-head p,
      .monthly-calc-muted {
        color: #607084;
        line-height: 1.5;
        margin: 0;
      }

      .monthly-calc-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .monthly-calc-btn {
        border: 0;
        border-radius: 999px;
        padding: 12px 18px;
        font-weight: 900;
        cursor: pointer;
      }

      .monthly-calc-btn.primary {
        background: #155640;
        color: #fff;
      }

      .monthly-calc-btn.ghost {
        background: #f4fbf7;
        color: #0f3d2e;
        border: 1px solid #cfe4d9;
      }

      .monthly-calc-controls {
        margin-top: 18px;
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
        align-items: end;
      }

      .monthly-calc-controls label {
        display: flex;
        flex-direction: column;
        gap: 7px;
        font-weight: 900;
        color: #003f31;
      }

      .monthly-calc-controls input,
      .monthly-calc-controls select,
      .monthly-calc-table input {
        width: 100%;
        min-width: 0;
        border: 1px solid #c9ded5;
        border-radius: 14px;
        padding: 11px 12px;
        font: inherit;
        color: #073b31;
        background: #fff;
      }

      .monthly-calc-summary {
        margin-top: 18px;
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
      }

      .monthly-calc-total {
        background: #f4fbf7;
        border: 1px solid #d7e9df;
        border-radius: 18px;
        padding: 14px;
      }

      .monthly-calc-total span {
        display: block;
        color: #61746d;
        font-size: .82rem;
        font-weight: 800;
      }

      .monthly-calc-total strong {
        display: block;
        color: #0f3d2e;
        font-size: 1.2rem;
        margin-top: 4px;
      }

      .monthly-calc-package-grid {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }

      .monthly-calc-package {
        border: 1px solid #d7e9df;
        background: #fbfefc;
        border-radius: 16px;
        padding: 12px;
      }

      .monthly-calc-package strong {
        display: block;
        color: #0f3d2e;
      }

      .monthly-calc-package span {
        display: block;
        margin-top: 4px;
        color: #61746d;
        font-size: .88rem;
        line-height: 1.4;
      }

      .monthly-calc-table-wrap {
        margin-top: 18px;
        border: 1px solid #d7e9df;
        border-radius: 18px;
        overflow-x: auto;
      }

      .monthly-calc-table {
        width: 100%;
        min-width: 1080px;
        border-collapse: collapse;
      }

      .monthly-calc-table th,
      .monthly-calc-table td {
        border-bottom: 1px solid #e3eee8;
        padding: 10px;
        text-align: left;
        vertical-align: middle;
      }

      .monthly-calc-table th {
        background: #eef7f2;
        color: #0f3d2e;
        font-weight: 900;
      }

      .monthly-calc-table strong {
        color: #003f31;
      }

      .monthly-calc-table small {
        display: block;
        color: #61746d;
        line-height: 1.35;
      }

      .monthly-calc-net {
        font-weight: 900;
        color: #0f3d2e;
      }

      .monthly-calc-open {
        font-weight: 900;
        color: #b42318;
      }

      .monthly-calc-paid {
        font-weight: 900;
        color: #166534;
      }

      .monthly-calc-note {
        margin-top: 14px;
        border-radius: 16px;
        background: #fff8e6;
        border: 1px solid rgba(216, 169, 75, .35);
        color: #624000;
        padding: 12px;
        font-weight: 800;
        line-height: 1.4;
      }

      @media (max-width: 980px) {
        .monthly-calc-controls,
        .monthly-calc-summary,
        .monthly-calc-package-grid {
          grid-template-columns: 1fr;
        }
      }

      @media print {
        body * { visibility: hidden !important; }
        #calculadoraMensalidades,
        #calculadoraMensalidades * { visibility: visible !important; }
        #calculadoraMensalidades {
          position: absolute;
          inset: 0;
          box-shadow: none;
          border: 0;
        }
        .monthly-calc-actions,
        .monthly-calc-controls,
        .monthly-calc-note { display: none !important; }
      }
    `;

    document.head.appendChild(style);
  }

  function ensurePanel() {
    addStyles();

    const tabs = document.querySelector(".tabs");
    if (tabs && !document.querySelector('[data-tab="calculadora-mensalidades"]')) {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.dataset.tab = "calculadora-mensalidades";
      btn.type = "button";
      btn.textContent = "Calculadora de mensalidades";
      tabs.appendChild(btn);
    }

    const page = document.querySelector("main.page") || document.querySelector("main") || document.body;
    if (!$("calculadora-mensalidades")) {
      const panel = document.createElement("section");
      panel.id = "calculadora-mensalidades";
      panel.className = "panel";
      panel.innerHTML = `
        <div id="calculadoraMensalidades" class="monthly-calc-card">
          <div class="monthly-calc-head">
            <div>
              <h2>Calculadora de mensalidades reais</h2>
              <p>Calcule o total mensal dos alunos ativos/matriculados usando o pacote de cada aluno, com descontos por porcentagem ou valor. Também mostra o recebido e o saldo previsto do mês.</p>
            </div>
            <div class="monthly-calc-actions">
              <button id="monthlyCalcReload" class="monthly-calc-btn ghost" type="button">Recarregar</button>
              <button id="monthlyCalcPrint" class="monthly-calc-btn primary" type="button">Imprimir cálculo</button>
            </div>
          </div>

          <div class="monthly-calc-controls">
            <label>
              Mês de referência
              <input id="monthlyCalcMonth" type="month" />
            </label>
            <label>
              Turno
              <select id="monthlyCalcShift">
                <option value="todos">Todos os turnos</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
                <option value="sem_turno">Sem turno</option>
              </select>
            </label>
            <label>
              Desconto geral em %
              <input id="monthlyCalcGlobalPercent" type="number" min="0" max="100" step="0.01" placeholder="Ex.: 10" />
            </label>
            <label>
              Desconto geral em R$
              <input id="monthlyCalcGlobalValue" type="number" min="0" step="0.01" placeholder="Ex.: 50" />
            </label>
            <button id="monthlyCalcApplyGlobal" class="monthly-calc-btn ghost" type="button">Aplicar geral</button>
          </div>

          <div class="monthly-calc-summary">
            <div class="monthly-calc-total"><span>Alunos ativos</span><strong id="monthlyCalcStudents">0</strong></div>
            <div class="monthly-calc-total"><span>Total bruto</span><strong id="monthlyCalcGross">R$ 0,00</strong></div>
            <div class="monthly-calc-total"><span>Descontos</span><strong id="monthlyCalcDiscounts">R$ 0,00</strong></div>
            <div class="monthly-calc-total"><span>Total real previsto</span><strong id="monthlyCalcNet">R$ 0,00</strong></div>
            <div class="monthly-calc-total"><span>Recebido no mês</span><strong id="monthlyCalcReceived">R$ 0,00</strong></div>
          </div>

          <div class="monthly-calc-summary">
            <div class="monthly-calc-total"><span>Saldo previsto a receber</span><strong id="monthlyCalcOpen">R$ 0,00</strong></div>
            <div class="monthly-calc-total"><span>Alunos sem pacote</span><strong id="monthlyCalcNoPackage">0</strong></div>
            <div class="monthly-calc-total"><span>Com desconto</span><strong id="monthlyCalcWithDiscount">0</strong></div>
            <div class="monthly-calc-total"><span>Pagos/abatidos</span><strong id="monthlyCalcPaidStudents">0</strong></div>
            <div class="monthly-calc-total"><span>Mês</span><strong id="monthlyCalcMonthLabel">--</strong></div>
          </div>

          <div id="monthlyCalcPackages" class="monthly-calc-package-grid"></div>

          <div class="monthly-calc-table-wrap">
            <table class="monthly-calc-table">
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Turno</th>
                  <th>Pacote</th>
                  <th>Valor pacote</th>
                  <th>Desc. %</th>
                  <th>Desc. R$</th>
                  <th>Total desconto</th>
                  <th>Valor real</th>
                  <th>Recebido no mês</th>
                  <th>Saldo previsto</th>
                </tr>
              </thead>
              <tbody id="monthlyCalcRows">
                <tr><td colspan="10">Carregando...</td></tr>
              </tbody>
            </table>
          </div>

          <div class="monthly-calc-note">A calculadora considera apenas alunos ativos/matriculados. Pré-matrículas e inativos ficam fora do cálculo. Os descontos são salvos neste navegador por mês de referência para simulação e conferência.</div>
        </div>
      `;
      page.appendChild(panel);
    }
  }

  function showPanel() {
    document.querySelectorAll(".tab").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
    document.querySelector('[data-tab="calculadora-mensalidades"]')?.classList.add("active");
    $("calculadora-mensalidades")?.classList.add("active");
    refresh();
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
    schoolId = data.school_id;
    return profile;
  }

  async function loadMonthData() {
    const currentProfile = await getProfile();
    const month = $("monthlyCalcMonth")?.value || currentMonth();
    const range = monthRange(month);

    const [studentsRes, packagesRes, entriesRes] = await Promise.all([
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
      db
        .from("finance_entries")
        .select("id, student_id, student_name_snapshot, entry_type, entry_date, amount_paid, payer_name, description")
        .eq("school_id", currentProfile.school_id)
        .gte("entry_date", range.start)
        .lte("entry_date", range.end),
    ]);

    if (studentsRes.error) throw studentsRes.error;
    if (packagesRes.error) throw packagesRes.error;
    if (entriesRes.error) throw entriesRes.error;

    packages = packagesRes.data || [];
    entries = entriesRes.data || [];
    students = (studentsRes.data || [])
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

  function getFilteredStudents() {
    const shift = $("monthlyCalcShift")?.value || "todos";
    return students.filter((student) => {
      const studentShift = student.shift || "sem_turno";
      return shift === "todos" || studentShift === shift;
    });
  }

  function getDiscount(studentId, month) {
    const map = readDiscounts(month);
    return map[studentId] || { percent: 0, value: 0 };
  }

  function setDiscount(studentId, month, patch) {
    const map = readDiscounts(month);
    map[studentId] = {
      percent: Number(patch.percent ?? map[studentId]?.percent ?? 0),
      value: Number(patch.value ?? map[studentId]?.value ?? 0),
    };
    saveDiscounts(month, map);
  }

  function calcStudent(student, month) {
    const discount = getDiscount(student.id, month);
    const base = Number(student.package_amount || 0);
    const percentDiscount = Math.max(0, base * (Number(discount.percent || 0) / 100));
    const valueDiscount = Math.max(0, Number(discount.value || 0));
    const totalDiscount = Math.min(base, percentDiscount + valueDiscount);
    const net = Math.max(0, base - totalDiscount);
    const received = entries
      .filter((entry) => {
        if (entry.student_id && entry.student_id === student.id) return true;
        if (!entry.student_id && entry.student_name_snapshot && entry.student_name_snapshot === student.full_name) return true;
        return false;
      })
      .filter((entry) => String(entry.entry_type || "").toLowerCase() === "mensalidade" || String(entry.description || "").toLowerCase().includes("mensalidade"))
      .reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    const open = Math.max(0, net - received);

    return {
      base,
      percent: Number(discount.percent || 0),
      value: Number(discount.value || 0),
      totalDiscount,
      net,
      received,
      open,
    };
  }

  function render() {
    ensurePanel();

    const month = $("monthlyCalcMonth")?.value || currentMonth();
    const rows = getFilteredStudents();
    let gross = 0;
    let discounts = 0;
    let net = 0;
    let received = 0;
    let open = 0;
    let noPackage = 0;
    let withDiscount = 0;
    let paidStudents = 0;

    const rowHtml = rows.map((student) => {
      const calc = calcStudent(student, month);
      gross += calc.base;
      discounts += calc.totalDiscount;
      net += calc.net;
      received += calc.received;
      open += calc.open;
      if (!student.package_id || calc.base <= 0) noPackage += 1;
      if (calc.totalDiscount > 0) withDiscount += 1;
      if (calc.received >= calc.net && calc.net > 0) paidStudents += 1;

      return `
        <tr data-student-id="${safe(student.id)}">
          <td><strong>${safe(student.full_name)}</strong><small>Resp.: ${safe(student.guardian_1_name || "-")} • Venc.: ${student.monthly_due_day ? "dia " + safe(student.monthly_due_day) : "-"}</small></td>
          <td>${safe(shiftLabel(student.shift))}</td>
          <td>${safe(student.package_name)}</td>
          <td>${money(calc.base)}</td>
          <td><input type="number" min="0" max="100" step="0.01" value="${safe(calc.percent)}" data-monthly-percent="${safe(student.id)}" /></td>
          <td><input type="number" min="0" step="0.01" value="${safe(calc.value)}" data-monthly-value="${safe(student.id)}" /></td>
          <td>${money(calc.totalDiscount)}</td>
          <td><span class="monthly-calc-net">${money(calc.net)}</span></td>
          <td><span class="monthly-calc-paid">${money(calc.received)}</span></td>
          <td><span class="monthly-calc-open">${money(calc.open)}</span></td>
        </tr>
      `;
    }).join("");

    $("monthlyCalcRows").innerHTML = rowHtml || '<tr><td colspan="10">Nenhum aluno ativo/matriculado encontrado para este filtro.</td></tr>';
    $("monthlyCalcStudents").textContent = String(rows.length);
    $("monthlyCalcGross").textContent = money(gross);
    $("monthlyCalcDiscounts").textContent = money(discounts);
    $("monthlyCalcNet").textContent = money(net);
    $("monthlyCalcReceived").textContent = money(received);
    $("monthlyCalcOpen").textContent = money(open);
    $("monthlyCalcNoPackage").textContent = String(noPackage);
    $("monthlyCalcWithDiscount").textContent = String(withDiscount);
    $("monthlyCalcPaidStudents").textContent = String(paidStudents);
    $("monthlyCalcMonthLabel").textContent = month.split("-").reverse().join("/");

    renderPackageSummary(rows, month);
  }

  function renderPackageSummary(rows, month) {
    const box = $("monthlyCalcPackages");
    if (!box) return;

    const groups = new Map();
    rows.forEach((student) => {
      const key = student.package_id || "sem-pacote";
      const calc = calcStudent(student, month);
      if (!groups.has(key)) {
        groups.set(key, {
          name: student.package_name,
          count: 0,
          gross: 0,
          discounts: 0,
          net: 0,
          received: 0,
          open: 0,
        });
      }
      const group = groups.get(key);
      group.count += 1;
      group.gross += calc.base;
      group.discounts += calc.totalDiscount;
      group.net += calc.net;
      group.received += calc.received;
      group.open += calc.open;
    });

    box.innerHTML = Array.from(groups.values()).map((group) => `
      <div class="monthly-calc-package">
        <strong>${safe(group.name)}</strong>
        <span>${group.count} aluno(s) • Bruto: ${money(group.gross)} • Descontos: ${money(group.discounts)} • Real: ${money(group.net)} • Recebido: ${money(group.received)} • Saldo: ${money(group.open)}</span>
      </div>
    `).join("") || '<div class="monthly-calc-package"><strong>Nenhum pacote</strong><span>Sem alunos ativos no filtro.</span></div>';
  }

  async function refresh() {
    if (loading) return;
    loading = true;

    ensurePanel();
    const rows = $("monthlyCalcRows");
    if (rows) rows.innerHTML = '<tr><td colspan="10">Carregando alunos, pacotes e recebimentos do mês...</td></tr>';

    try {
      await loadMonthData();
      render();
    } catch (error) {
      console.error(error);
      if (rows) rows.innerHTML = `<tr><td colspan="10">Erro ao carregar calculadora: ${safe(error.message || "erro desconhecido")}</td></tr>`;
    } finally {
      loading = false;
    }
  }

  function bindEvents() {
    if (window.__INTEGRO_FINANCEIRO_CALC_MENSALIDADES_EVENTS__) return;
    window.__INTEGRO_FINANCEIRO_CALC_MENSALIDADES_EVENTS__ = true;

    document.addEventListener("click", async (event) => {
      if (event.target.closest('[data-tab="calculadora-mensalidades"]')) {
        event.preventDefault();
        showPanel();
        return;
      }

      if (event.target.closest("#monthlyCalcReload")) {
        await refresh();
        return;
      }

      if (event.target.closest("#monthlyCalcApplyGlobal")) {
        const month = $("monthlyCalcMonth")?.value || currentMonth();
        const percent = toNumber($("monthlyCalcGlobalPercent")?.value);
        const value = toNumber($("monthlyCalcGlobalValue")?.value);
        const map = readDiscounts(month);
        getFilteredStudents().forEach((student) => {
          map[student.id] = { percent, value };
        });
        saveDiscounts(month, map);
        render();
        return;
      }

      if (event.target.closest("#monthlyCalcPrint")) {
        window.print();
      }
    }, true);

    document.addEventListener("input", (event) => {
      const month = $("monthlyCalcMonth")?.value || currentMonth();

      const percent = event.target.closest("[data-monthly-percent]");
      if (percent) {
        setDiscount(percent.dataset.monthlyPercent, month, { percent: toNumber(percent.value) });
        render();
        return;
      }

      const value = event.target.closest("[data-monthly-value]");
      if (value) {
        setDiscount(value.dataset.monthlyValue, month, { value: toNumber(value.value) });
        render();
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target?.id === "monthlyCalcMonth") {
        refresh();
      }
      if (event.target?.id === "monthlyCalcShift") {
        render();
      }
    });
  }

  function start() {
    ensurePanel();
    bindEvents();
    const monthInput = $("monthlyCalcMonth");
    if (monthInput && !monthInput.value) monthInput.value = currentMonth();
    setTimeout(refresh, 1200);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
