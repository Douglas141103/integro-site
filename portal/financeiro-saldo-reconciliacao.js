(function () {
  if (window.__INTEGRO_FINANCEIRO_CICLO_ATUAL__) return;
  window.__INTEGRO_FINANCEIRO_CICLO_ATUAL__ = true;
  window.__INTEGRO_FINANCE_SINGLE_RENDERER__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  if (!cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const CYCLE_DAY = 9;

  const ORDER = ["operacoes", "fundo_caixa", "acionista_1", "acionista_2", "acionista_3"];
  const BUCKETS = {
    operacoes: { label: "Contas e operações", percent: 0.30 },
    fundo_caixa: { label: "Fundo de caixa", percent: 0.10 },
    acionista_1: { label: "Acionista 1", percent: 0.20 },
    acionista_2: { label: "Acionista 2", percent: 0.20 },
    acionista_3: { label: "Acionista 3", percent: 0.20 },
  };

  const state = {
    user: null,
    profile: null,
    school: null,
    cycle: null,
    entries: [],
    expenses: [],
    movements: [],
    duplicatesIgnored: [],
    snapshot: null,
    loading: false,
    refreshQueued: false,
  };

  const $ = (id) => document.getElementById(id);

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function dateISO(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
  }

  function parseLocal(iso) {
    const [year, month, day] = String(iso).slice(0, 10).split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function addMonths(date, amount) {
    return new Date(date.getFullYear(), date.getMonth() + amount, date.getDate());
  }

  function addDays(date, amount) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
  }

  function currentCycleRange(reference = new Date()) {
    let start = new Date(reference.getFullYear(), reference.getMonth(), CYCLE_DAY);

    if (reference.getDate() < CYCLE_DAY) {
      start = new Date(reference.getFullYear(), reference.getMonth() - 1, CYCLE_DAY);
    }

    const end = addDays(addMonths(start, 1), -1);
    return {
      startISO: dateISO(start),
      endISO: dateISO(end),
      cycleKey: dateISO(start).slice(0, 7),
    };
  }

  function formatDateBR(value) {
    if (!value) return "—";
    return parseLocal(String(value).slice(0, 10)).toLocaleDateString("pt-BR");
  }

  function isAdministrative(movement) {
    const type = String(movement?.movement_type || "").toLowerCase();
    const source = String(movement?.source_bucket || "").toLowerCase();
    const destination = String(movement?.destination_bucket || "").toLowerCase();
    const text = `${movement?.description || ""} ${movement?.notes || ""}`.toLowerCase();

    return (
      source === "ajuste_administrativo" ||
      destination === "ajuste_administrativo" ||
      type === "ajuste_credito" ||
      type === "ajuste_debito" ||
      text.includes("ajuste administrativo") ||
      text.includes("ajuste interno")
    );
  }

  function movementDate(movement) {
    return String(movement?.movement_date || movement?.created_at || "").slice(0, 10);
  }

  function entryDate(entry) {
    return String(entry?.entry_date || entry?.created_at || "").slice(0, 10);
  }

  function expenseDate(expense) {
    return String(expense?.expense_date || expense?.created_at || "").slice(0, 10);
  }

  function dedupeMovements(rows) {
    const ordered = (rows || []).slice().sort((a, b) => String(a.created_at || "").localeCompare(String(b.created_at || "")));
    const kept = [];
    const duplicateIds = [];
    const byExpense = new Map();

    ordered.forEach((movement) => {
      if (movement.related_expense_id) {
        if (byExpense.has(movement.related_expense_id)) {
          duplicateIds.push(movement.id);
          return;
        }
        byExpense.set(movement.related_expense_id, movement);
      }

      kept.push(movement);
    });

    return { kept, duplicateIds };
  }

  function representedExpenseIds(movements) {
    return new Set((movements || []).map((movement) => movement.related_expense_id).filter(Boolean));
  }

  function isAdministrativeExpense(expense) {
    const bucket = String(expense?.allocation_bucket || "").toLowerCase();
    const text = `${expense?.description || ""} ${expense?.notes || ""}`.toLowerCase();
    return (
      bucket === "ajuste_administrativo" ||
      text.includes("ajuste administrativo") ||
      text.includes("ajuste interno")
    );
  }

  function unrepresentedExpenses(expenses, movements) {
    const represented = representedExpenseIds(movements);
    const movementIds = new Set((movements || []).map((movement) => movement.id));

    return (expenses || []).filter((expense) => {
      if (isAdministrativeExpense(expense)) return false;
      if (represented.has(expense.id)) return false;
      if (expense.related_cash_movement_id && movementIds.has(expense.related_cash_movement_id)) return false;
      if (expense.cash_movement_id && movementIds.has(expense.cash_movement_id)) return false;
      return true;
    });
  }

  function emptyBuckets() {
    return ORDER.reduce((acc, bucket) => {
      acc[bucket] = {
        bucket,
        label: BUCKETS[bucket].label,
        base: 0,
        credits: 0,
        debits: 0,
        available: 0,
      };
      return acc;
    }, {});
  }

  function addEntriesToBuckets(buckets, entries) {
    const total = (entries || []).reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    ORDER.forEach((bucket) => {
      buckets[bucket].base += total * BUCKETS[bucket].percent;
    });
    return total;
  }

  function applyMovementsToBuckets(buckets, movements) {
    (movements || []).forEach((movement) => {
      const amount = Number(movement.amount || 0);
      if (movement.source_bucket && buckets[movement.source_bucket]) buckets[movement.source_bucket].debits += amount;
      if (movement.destination_bucket && buckets[movement.destination_bucket]) buckets[movement.destination_bucket].credits += amount;
    });
  }

  function applyExpensesToBuckets(buckets, expenses) {
    (expenses || []).forEach((expense) => {
      const bucket = ORDER.includes(expense.allocation_bucket) ? expense.allocation_bucket : "operacoes";
      buckets[bucket].debits += Number(expense.amount || 0);
    });
  }

  function externalTotals(movements, expenses) {
    let credits = 0;
    let debits = 0;
    let transfers = 0;

    (movements || []).forEach((movement) => {
      const amount = Number(movement.amount || 0);
      const hasSource = !!movement.source_bucket;
      const hasDestination = !!movement.destination_bucket;

      if (!hasSource && hasDestination) credits += amount;
      else if (hasSource && !hasDestination) debits += amount;
      else if (hasSource && hasDestination) transfers += amount;
    });

    debits += (expenses || []).reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    return { credits, debits, transfers };
  }

  function calculateSnapshot() {
    return calculateCurrentCycleSnapshot({
      cycle: state.cycle,
      entries: state.entries,
      expenses: state.expenses,
      movements: state.movements,
    });
  }

  function calculateCurrentCycleSnapshot({ cycle, entries = [], expenses = [], movements = [] }) {
    const start = cycle.start_date;
    const end = cycle.end_date;
    const visibleMovements = movements.filter((movement) => !isAdministrative(movement));
    const unlinkedExpenses = unrepresentedExpenses(expenses, visibleMovements);

    const currentEntries = entries.filter((entry) => entryDate(entry) >= start && entryDate(entry) <= end);
    const currentMovements = visibleMovements.filter((movement) => {
      const date = movementDate(movement);
      return movement.cycle_id === cycle.id && date >= start && date <= end;
    });
    const currentExpenses = unlinkedExpenses.filter((expense) => expenseDate(expense) >= start && expenseDate(expense) <= end);

    const currentExternal = externalTotals(currentMovements, currentExpenses);
    const currentEntriesTotal = currentEntries.reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    const currentBalance = currentEntriesTotal + currentExternal.credits - currentExternal.debits;

    const buckets = emptyBuckets();
    addEntriesToBuckets(buckets, currentEntries);
    applyMovementsToBuckets(buckets, currentMovements);
    applyExpensesToBuckets(buckets, currentExpenses);

    ORDER.forEach((bucket) => {
      buckets[bucket].available = buckets[bucket].base + buckets[bucket].credits - buckets[bucket].debits;
    });

    return {
      currentEntriesTotal,
      currentExternal,
      currentBalance,
      buckets,
      currentEntriesCount: currentEntries.length,
      currentMovementsCount: currentMovements.length,
      unlinkedExpensesCount: currentExpenses.length,
    };
  }

  window.INTEGRO_FINANCE_CYCLE_CORE = Object.freeze({
    calculateCurrentCycleSnapshot,
  });

  async function getContext() {
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
      .select("id, name, slug")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");
    state.school = school;
  }

  async function ensureCurrentCycle() {
    const range = currentCycleRange(new Date());
    const findCycle = () => db
      .from("finance_cash_cycles")
      .select("*")
      .eq("school_id", state.school.id)
      .eq("cycle_key", range.cycleKey)
      .maybeSingle();

    const existingResult = await findCycle();
    if (existingResult.error) throw existingResult.error;

    if (existingResult.data) {
      state.cycle = existingResult.data;
      return;
    }

    const { data, error } = await db
      .from("finance_cash_cycles")
      .insert({
        school_id: state.school.id,
        cycle_key: range.cycleKey,
        start_date: range.startISO,
        end_date: range.endISO,
        status: "aberto",
        created_by: state.user.id,
        updated_at: new Date().toISOString(),
      })
      .select("*")
      .single();

    if (error?.code === "23505") {
      const retryResult = await findCycle();
      if (retryResult.error || !retryResult.data) {
        throw retryResult.error || error;
      }
      state.cycle = retryResult.data;
      return;
    }

    if (error) throw error;
    state.cycle = data;
  }

  async function loadData() {
    if (!state.school?.id) await getContext();
    await ensureCurrentCycle();

    const start = state.cycle.start_date;
    const end = state.cycle.end_date;
    const [entriesRes, expensesRes, movementsRes] = await Promise.all([
      db.from("finance_entries").select("*").eq("school_id", state.school.id).gte("entry_date", start).lte("entry_date", end).order("entry_date", { ascending: true }),
      db.from("finance_expenses").select("*").eq("school_id", state.school.id).gte("expense_date", start).lte("expense_date", end).order("expense_date", { ascending: true }),
      db.from("finance_cash_cycle_movements").select("*").eq("school_id", state.school.id).eq("cycle_id", state.cycle.id).gte("movement_date", start).lte("movement_date", end).order("created_at", { ascending: true }),
    ]);

    const error = [entriesRes, expensesRes, movementsRes].find((result) => result.error)?.error;
    if (error) throw error;

    state.entries = entriesRes.data || [];
    state.expenses = expensesRes.data || [];

    const deduped = dedupeMovements(movementsRes.data || []);
    state.movements = deduped.kept;
    state.duplicatesIgnored = deduped.duplicateIds;
    state.snapshot = calculateSnapshot();
    window.INTEGRO_FINANCE_SNAPSHOT = state.snapshot;
  }

  function ensureStyles() {
    if ($("financeBalanceAuditStyle")) return;

    const style = document.createElement("style");
    style.id = "financeBalanceAuditStyle";
    style.textContent = `
      .finance-balance-audit {
        margin: 16px 0;
        padding: 18px;
        border: 1px solid #cfe2d9;
        border-radius: 20px;
        background: #f8fcfa;
      }
      .finance-balance-audit h3 { margin: 0 0 5px; color: #0b5242; }
      .finance-balance-audit p { margin: 0; color: #61746d; line-height: 1.45; }
      .finance-balance-grid {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 10px;
        margin-top: 14px;
      }
      .finance-balance-item {
        border: 1px solid #d7e9df;
        border-radius: 15px;
        padding: 12px;
        background: #fff;
      }
      .finance-balance-item span { display: block; color: #61746d; font-size: .8rem; font-weight: 800; }
      .finance-balance-item strong { display: block; color: #0b5242; font-size: 1.1rem; margin-top: 4px; }
      .finance-balance-item.final { background: #e8f5ee; border-color: #acd3bd; }
      .balance-kpi-note { display:block; margin-top:4px; color:#61746d; font-size:.72rem; font-weight:700; }
      .shareholder-negative-note {
        margin-top: 10px;
        padding: 10px 12px;
        border: 1px solid rgba(216, 169, 75, .38);
        border-radius: 14px;
        background: #fff8e6;
        color: #624000;
        font-size: .82rem;
        font-weight: 800;
        line-height: 1.35;
      }
      .shareholder-negative-limit {
        margin-top: 8px;
        color: #61746d;
        font-size: .8rem;
        line-height: 1.35;
      }
      @media (max-width: 980px) { .finance-balance-grid { grid-template-columns: 1fr; } }
    `;
    document.head.appendChild(style);
  }

  function ensureAuditPanel() {
    const info = document.querySelector(".cash-cycle-info");
    if (!info || $("financeBalanceAudit")) return;

    const panel = document.createElement("section");
    panel.id = "financeBalanceAudit";
    panel.className = "finance-balance-audit";
    panel.innerHTML = `
      <h3>Conferência do ciclo atual</h3>
      <p>Cada ciclo começa em R$ 0,00. Somente entradas, créditos e saídas registrados entre o dia 9 e o dia 8 entram neste saldo.</p>
      <div class="finance-balance-grid">
        <div class="finance-balance-item"><span>Início do ciclo</span><strong id="financeAuditStart">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Entradas do ciclo</span><strong id="financeAuditEntries">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Créditos externos</span><strong id="financeAuditCredits">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Saídas do ciclo</span><strong id="financeAuditDebits">R$ 0,00</strong></div>
        <div class="finance-balance-item final"><span>Saldo do ciclo</span><strong id="financeAuditBalance">R$ 0,00</strong></div>
      </div>
      <p id="financeAuditNote" style="margin-top:12px"></p>
    `;

    info.insertAdjacentElement("afterend", panel);
  }

  function paintTopKpis() {
    if (!state.snapshot) return;

    const entries = $("totalEntradas");
    const expenses = $("totalSaidas");
    const balance = $("saldoAtual");
    const receipts = $("recibosCount");

    if (entries) entries.textContent = money(state.snapshot.currentEntriesTotal + state.snapshot.currentExternal.credits);
    if (expenses) expenses.textContent = money(state.snapshot.currentExternal.debits);
    if (balance) {
      balance.textContent = money(state.snapshot.currentBalance);
      let note = balance.parentElement?.querySelector(".balance-kpi-note");
      if (!note) {
        note = document.createElement("small");
        note.className = "balance-kpi-note";
        balance.insertAdjacentElement("afterend", note);
      }
      note.textContent = "Somente o ciclo atual; cada ciclo começa em R$ 0,00";
    }
    if (receipts) receipts.textContent = String(state.snapshot.currentEntriesCount);
  }

  function paintCycleSummary() {
    if (!state.snapshot) return;
    ensureAuditPanel();

    const totalEntries = $("cashTotalEntries");
    const totalDebits = $("cashTotalDebits");
    const cycleBalance = $("cashCycleBalance");

    if (totalEntries) totalEntries.textContent = money(state.snapshot.currentEntriesTotal);
    if (totalDebits) totalDebits.textContent = money(state.snapshot.currentExternal.debits);
    if (cycleBalance) cycleBalance.textContent = money(state.snapshot.currentBalance);

    const balanceCard = cycleBalance?.closest("article");
    const balanceLabel = balanceCard?.querySelector("small");
    if (balanceLabel) balanceLabel.textContent = "Saldo do ciclo atual";

    if ($("financeAuditStart")) $("financeAuditStart").textContent = money(0);
    if ($("financeAuditEntries")) $("financeAuditEntries").textContent = money(state.snapshot.currentEntriesTotal);
    if ($("financeAuditCredits")) $("financeAuditCredits").textContent = money(state.snapshot.currentExternal.credits);
    if ($("financeAuditDebits")) $("financeAuditDebits").textContent = money(state.snapshot.currentExternal.debits);
    if ($("financeAuditBalance")) $("financeAuditBalance").textContent = money(state.snapshot.currentBalance);

    const note = $("financeAuditNote");
    if (note) {
      note.textContent = `Ciclo ${formatDateBR(state.cycle.start_date)} a ${formatDateBR(state.cycle.end_date)}: ${state.snapshot.currentEntriesCount} entrada(s) e ${state.snapshot.currentMovementsCount} movimentação(ões). Transferências internas do ciclo: ${money(state.snapshot.currentExternal.transfers)}.`;
    }
  }

  function paintBuckets() {
    if (!state.snapshot) return;
    const cards = Array.from(document.querySelectorAll(".cash-bucket-card"));

    ORDER.forEach((bucket, index) => {
      const card = cards[index];
      const data = state.snapshot.buckets[bucket];
      if (!card || !data) return;

      const values = card.querySelector(".cash-bucket-values");
      const availableLine = card.querySelector(".cash-value-line.available");
      if (!values || !availableLine) return;

      card.querySelector(".cash-value-line.balance-prior")?.remove();

      const lines = values.querySelectorAll(":scope > .cash-value-line");
      lines.forEach((line) => {
        const label = line.querySelector("span")?.textContent?.trim();
        const strong = line.querySelector("strong");
        if (!strong) return;
        if (label === "Valor previsto") strong.textContent = money(data.base);
        if (label === "Entradas internas") strong.textContent = money(data.credits);
        if (label === "Usado / pago") strong.textContent = money(data.debits);
      });

      const availableStrong = availableLine.querySelector("strong");
      if (availableStrong) availableStrong.textContent = money(data.available);
      availableLine.classList.toggle("warning", data.available < 0);

      card.querySelectorAll(".shareholder-negative-note, .shareholder-negative-limit").forEach((element) => {
        element.remove();
      });

      if (bucket.startsWith("acionista")) {
        if (data.available < 0) {
          const note = document.createElement("div");
          note.className = "shareholder-negative-note";
          note.textContent =
            `Saldo negativo de ${money(data.available)} somente neste ciclo. O próximo ciclo começará em R$ 0,00.`;
          card.querySelector(".cash-bucket-actions")?.insertAdjacentElement("beforebegin", note);
        }

        const limit = document.createElement("div");
        limit.className = "shareholder-negative-limit";
        limit.textContent = "Limite de segurança: não permitir saldo menor que R$ 1.000,00 negativo.";
        card.querySelector(".cash-bucket-actions")?.insertAdjacentElement("afterend", limit);
      }
    });
  }

  function paint() {
    ensureStyles();
    paintTopKpis();
    paintCycleSummary();
    paintBuckets();
  }

  function showPanelMessage(message, type = "ok") {
    const box = $("cashCycleMessage") || $("statusBox");
    if (!box) return;
    box.hidden = false;
    box.textContent = message;
    box.className = box.id === "cashCycleMessage" ? `cash-status show ${type}` : `status ${type}`;
  }

  async function refresh() {
    if (state.loading) {
      state.refreshQueued = true;
      return;
    }
    state.loading = true;

    try {
      await loadData();

      if (state.duplicatesIgnored.length) {
        console.warn(
          `INTEGRO: ${state.duplicatesIgnored.length} possível(is) duplicidade(s) ignorada(s) no cálculo. ` +
          "Nenhum registro foi excluído automaticamente."
        );
      }

      paint();
    } catch (error) {
      console.error("INTEGRO: erro ao atualizar o ciclo financeiro", error);
      showPanelMessage(error.message || "Erro ao atualizar o ciclo financeiro.", "error");
    } finally {
      state.loading = false;

      if (state.refreshQueued) {
        state.refreshQueued = false;
        setTimeout(refresh, 0);
      }
    }
  }

  function bind() {
    const updateFromDatabase = () => refresh();

    document.addEventListener("integro:cash-cycle-base-rendered", updateFromDatabase);
    document.addEventListener("integro:finance-data-changed", updateFromDatabase);
  }

  function start() {
    bind();

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if ($("cashCyclePanel") && $("saldoAtual")) {
        clearInterval(timer);
        refresh();
      } else if (tries >= 40) {
        clearInterval(timer);
      }
    }, 250);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
