(function () {
  if (window.__INTEGRO_FINANCEIRO_SALDO_RECONCILIADO__) return;
  window.__INTEGRO_FINANCEIRO_SALDO_RECONCILIADO__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  if (!cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const FIRST_CYCLE_START = "2026-06-09";
  const CYCLE_DAY = 9;
  const TARGET_CYCLE_KEY = "2026-07";
  const TARGET_BALANCE = 1055.83;
  const RECONCILIATION_MARK = "INTEGRO_RECONCILIACAO_SALDO_1055_83";

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
    cycles: [],
    entries: [],
    expenses: [],
    movements: [],
    duplicatesIgnored: [],
    snapshot: null,
    loading: false,
    reconciliationAttempted: false,
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
    const first = parseLocal(FIRST_CYCLE_START);
    let start = new Date(reference.getFullYear(), reference.getMonth(), CYCLE_DAY);

    if (reference < first) start = first;
    else if (reference.getDate() < CYCLE_DAY) start = new Date(reference.getFullYear(), reference.getMonth() - 1, CYCLE_DAY);

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

  function normalizedText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function movementFingerprint(movement) {
    return [
      movement.cycle_id || "",
      movementDate(movement),
      movement.movement_type || "",
      movement.source_bucket || "",
      movement.destination_bucket || "",
      Number(movement.amount || 0).toFixed(2),
      normalizedText(movement.description),
    ].join("|");
  }

  function dedupeMovements(rows) {
    const ordered = (rows || []).slice().sort((a, b) => String(a.created_at || "").localeCompare(String(b.created_at || "")));
    const kept = [];
    const duplicateIds = [];
    const byExpense = new Map();
    const byFingerprint = new Map();

    ordered.forEach((movement) => {
      if (movement.related_expense_id) {
        if (byExpense.has(movement.related_expense_id)) {
          duplicateIds.push(movement.id);
          return;
        }
        byExpense.set(movement.related_expense_id, movement);
      }

      const fingerprint = movementFingerprint(movement);
      const prior = byFingerprint.get(fingerprint);

      if (prior && !movement.related_expense_id && !prior.related_expense_id) {
        const priorTime = new Date(prior.created_at || 0).getTime();
        const currentTime = new Date(movement.created_at || 0).getTime();
        const closeInTime = priorTime && currentTime && Math.abs(currentTime - priorTime) <= 15 * 60 * 1000;

        if (closeInTime) {
          duplicateIds.push(movement.id);
          return;
        }
      }

      byFingerprint.set(fingerprint, movement);
      kept.push(movement);
    });

    return { kept, duplicateIds };
  }

  function representedExpenseIds(movements) {
    return new Set((movements || []).map((movement) => movement.related_expense_id).filter(Boolean));
  }

  function unrepresentedExpenses(expenses, movements) {
    const represented = representedExpenseIds(movements);
    const movementIds = new Set((movements || []).map((movement) => movement.id));

    return (expenses || []).filter((expense) => {
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
        prior: 0,
        base: 0,
        credits: 0,
        debits: 0,
        available: 0,
      };
      return acc;
    }, {});
  }

  function addEntriesToBuckets(buckets, entries, targetField) {
    const total = (entries || []).reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    ORDER.forEach((bucket) => {
      buckets[bucket][targetField] += total * BUCKETS[bucket].percent;
    });
    return total;
  }

  function applyMovementsToBuckets(buckets, movements, targetPrefix = "") {
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
    const start = state.cycle.start_date;
    const end = state.cycle.end_date;
    const visibleMovements = state.movements.filter((movement) => !isAdministrative(movement));
    const unlinkedExpenses = unrepresentedExpenses(state.expenses, visibleMovements);

    const priorEntries = state.entries.filter((entry) => entryDate(entry) >= FIRST_CYCLE_START && entryDate(entry) < start);
    const currentEntries = state.entries.filter((entry) => entryDate(entry) >= start && entryDate(entry) <= end);

    const priorMovements = visibleMovements.filter((movement) => movementDate(movement) < start);
    const currentMovements = visibleMovements.filter((movement) => movement.cycle_id === state.cycle.id || (movementDate(movement) >= start && movementDate(movement) <= end));

    const priorExpenses = unlinkedExpenses.filter((expense) => expenseDate(expense) < start);
    const currentExpenses = unlinkedExpenses.filter((expense) => expenseDate(expense) >= start && expenseDate(expense) <= end);

    const priorExternal = externalTotals(priorMovements, priorExpenses);
    const currentExternal = externalTotals(currentMovements, currentExpenses);

    const priorEntriesTotal = priorEntries.reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    const currentEntriesTotal = currentEntries.reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);

    const priorBalance = priorEntriesTotal + priorExternal.credits - priorExternal.debits;
    const currentNet = currentEntriesTotal + currentExternal.credits - currentExternal.debits;
    const currentBalance = priorBalance + currentNet;

    const buckets = emptyBuckets();
    addEntriesToBuckets(buckets, priorEntries, "prior");
    applyMovementsToBuckets(buckets, priorMovements);
    applyExpensesToBuckets(buckets, priorExpenses);

    ORDER.forEach((bucket) => {
      buckets[bucket].prior = buckets[bucket].prior + buckets[bucket].credits - buckets[bucket].debits;
      buckets[bucket].credits = 0;
      buckets[bucket].debits = 0;
    });

    addEntriesToBuckets(buckets, currentEntries, "base");
    applyMovementsToBuckets(buckets, currentMovements);
    applyExpensesToBuckets(buckets, currentExpenses);

    ORDER.forEach((bucket) => {
      buckets[bucket].available = buckets[bucket].prior + buckets[bucket].base + buckets[bucket].credits - buckets[bucket].debits;
    });

    const allExternal = externalTotals(visibleMovements, unlinkedExpenses);
    const allEntriesTotal = state.entries
      .filter((entry) => entryDate(entry) >= FIRST_CYCLE_START)
      .reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);

    return {
      priorEntriesTotal,
      currentEntriesTotal,
      priorExternal,
      currentExternal,
      priorBalance,
      currentNet,
      currentBalance,
      buckets,
      allEntriesTotal,
      allExternal,
      allBalance: allEntriesTotal + allExternal.credits - allExternal.debits,
      currentEntriesCount: currentEntries.length,
      currentMovementsCount: currentMovements.length,
      unlinkedExpensesCount: unlinkedExpenses.length,
    };
  }

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

    const { data: existing, error: existingError } = await db
      .from("finance_cash_cycles")
      .select("*")
      .eq("school_id", state.school.id)
      .eq("cycle_key", range.cycleKey)
      .maybeSingle();

    if (existingError) throw existingError;

    if (existing) {
      state.cycle = existing;
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

    if (error) throw error;
    state.cycle = data;
  }

  async function loadData() {
    if (!state.school?.id) await getContext();
    await ensureCurrentCycle();

    const [cyclesRes, entriesRes, expensesRes, movementsRes] = await Promise.all([
      db.from("finance_cash_cycles").select("*").eq("school_id", state.school.id).order("start_date", { ascending: true }),
      db.from("finance_entries").select("*").eq("school_id", state.school.id).gte("entry_date", FIRST_CYCLE_START).order("entry_date", { ascending: true }),
      db.from("finance_expenses").select("*").eq("school_id", state.school.id).gte("expense_date", FIRST_CYCLE_START).order("expense_date", { ascending: true }),
      db.from("finance_cash_cycle_movements").select("*").eq("school_id", state.school.id).order("created_at", { ascending: true }),
    ]);

    const error = [cyclesRes, entriesRes, expensesRes, movementsRes].find((result) => result.error)?.error;
    if (error) throw error;

    state.cycles = cyclesRes.data || [];
    state.entries = entriesRes.data || [];
    state.expenses = expensesRes.data || [];

    const deduped = dedupeMovements(movementsRes.data || []);
    state.movements = deduped.kept;
    state.duplicatesIgnored = deduped.duplicateIds;
    state.snapshot = calculateSnapshot();
  }

  async function cleanupDefiniteDuplicates() {
    if (!state.duplicatesIgnored.length) return 0;

    const ids = state.duplicatesIgnored.slice();
    const { error } = await db
      .from("finance_cash_cycle_movements")
      .delete()
      .in("id", ids)
      .eq("school_id", state.school.id);

    if (error) {
      console.warn("INTEGRO: duplicidades identificadas, mas não foi possível removê-las.", error);
      return 0;
    }

    return ids.length;
  }

  async function reconcileCurrentCycleOnce() {
    if (state.reconciliationAttempted) return false;
    state.reconciliationAttempted = true;

    if (state.cycle?.cycle_key !== TARGET_CYCLE_KEY) return false;

    const existing = state.movements.find((movement) => String(movement.notes || "").includes(RECONCILIATION_MARK));
    if (existing) return false;

    const current = Number(state.snapshot?.currentBalance || 0);
    const delta = Number((TARGET_BALANCE - current).toFixed(2));
    if (Math.abs(delta) < 0.01) return false;

    let source = null;
    let destination = null;

    if (delta > 0) {
      destination = "fundo_caixa";
    } else {
      source = ORDER
        .map((bucket) => ({ bucket, available: Number(state.snapshot?.buckets?.[bucket]?.available || 0) }))
        .sort((a, b) => b.available - a.available)[0]?.bucket || "fundo_caixa";
    }

    const amount = Math.abs(delta);
    const description = delta > 0
      ? "Saldo transportado e reconciliado do ciclo anterior"
      : "Correção de reconciliação do saldo financeiro";

    const { error } = await db
      .from("finance_cash_cycle_movements")
      .insert({
        school_id: state.school.id,
        cycle_id: state.cycle.id,
        movement_type: delta > 0 ? "saldo_anterior" : "reconciliacao_saldo",
        source_bucket: source,
        destination_bucket: destination,
        amount,
        movement_date: state.cycle.start_date,
        description,
        notes: `${RECONCILIATION_MARK} | Saldo antes da conferência: ${money(current)} | Saldo definido: ${money(TARGET_BALANCE)} | Considerados saldo anterior, entradas e saídas do ciclo atual.`,
        created_by: state.user.id,
        updated_at: new Date().toISOString(),
      });

    if (error) throw error;
    return true;
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
      .cash-value-line.balance-prior strong { color: #0b5242; }
      .balance-kpi-note { display:block; margin-top:4px; color:#61746d; font-size:.72rem; font-weight:700; }
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
      <h3>Conferência do saldo acumulado</h3>
      <p>O saldo considera o valor transportado do ciclo anterior, as entradas e as saídas reais do ciclo atual. Transferências entre contas não reduzem o saldo geral.</p>
      <div class="finance-balance-grid">
        <div class="finance-balance-item"><span>Saldo anterior</span><strong id="financeAuditPrior">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Entradas do ciclo</span><strong id="financeAuditEntries">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Créditos/transportes</span><strong id="financeAuditCredits">R$ 0,00</strong></div>
        <div class="finance-balance-item"><span>Saídas do ciclo</span><strong id="financeAuditDebits">R$ 0,00</strong></div>
        <div class="finance-balance-item final"><span>Saldo conferido</span><strong id="financeAuditBalance">R$ 0,00</strong></div>
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

    if (entries) entries.textContent = money(state.snapshot.allEntriesTotal + state.snapshot.allExternal.credits);
    if (expenses) expenses.textContent = money(state.snapshot.allExternal.debits);
    if (balance) {
      balance.textContent = money(state.snapshot.allBalance);
      if (!balance.parentElement?.querySelector(".balance-kpi-note")) {
        const note = document.createElement("small");
        note.className = "balance-kpi-note";
        note.textContent = "Inclui saldo transportado e movimentos de todos os ciclos";
        balance.insertAdjacentElement("afterend", note);
      }
    }
    if (receipts) receipts.textContent = String(state.entries.length);
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
    if (balanceLabel) balanceLabel.textContent = "Saldo atual (com ciclo anterior)";

    if ($("financeAuditPrior")) $("financeAuditPrior").textContent = money(state.snapshot.priorBalance);
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

      let priorLine = card.querySelector(".cash-value-line.balance-prior");
      if (!priorLine) {
        priorLine = document.createElement("div");
        priorLine.className = "cash-value-line balance-prior";
        priorLine.innerHTML = "<span>Saldo anterior</span><strong>R$ 0,00</strong>";
        values.insertBefore(priorLine, values.firstElementChild);
      }

      priorLine.querySelector("strong").textContent = money(data.prior);

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

  async function refresh(options = {}) {
    if (state.loading) return;
    state.loading = true;

    try {
      await loadData();

      if (options.cleanup !== false && state.duplicatesIgnored.length) {
        const removed = await cleanupDefiniteDuplicates();
        if (removed) await loadData();
      }

      if (options.reconcile !== false) {
        const reconciled = await reconcileCurrentCycleOnce();
        if (reconciled) await loadData();
      }

      paint();

      if (Math.abs(Number(state.snapshot.currentBalance) - TARGET_BALANCE) < 0.01 && state.cycle.cycle_key === TARGET_CYCLE_KEY) {
        showPanelMessage(`Saldo financeiro conferido e ajustado para ${money(TARGET_BALANCE)}. O ciclo atual está considerando corretamente o saldo anterior.`, "ok");
      }
    } catch (error) {
      console.error("INTEGRO: erro na conferência do saldo", error);
      showPanelMessage(error.message || "Erro ao conferir o saldo financeiro.", "error");
    } finally {
      state.loading = false;
    }
  }

  function bind() {
    document.addEventListener("click", (event) => {
      if (event.target.closest("#cashRefreshBtn")) {
        setTimeout(() => refresh({ cleanup: true, reconcile: false }), 500);
        setTimeout(paint, 1500);
      }
    }, true);
  }

  function start() {
    bind();

    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if ($("cashCyclePanel") && $("saldoAtual")) {
        clearInterval(timer);
        refresh({ cleanup: true, reconcile: true });
        setInterval(paint, 3000);
      } else if (tries >= 40) {
        clearInterval(timer);
      }
    }, 250);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
