import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const files = {
  cyclePolicy: new URL("../portal/financeiro-cycle-policy.js", import.meta.url),
  reconciliation: new URL("../portal/financeiro-saldo-reconciliacao.js", import.meta.url),
  shareholder: new URL("../portal/financeiro-recolho-acionista.js", import.meta.url),
  cashCycle: new URL("../portal/financeiro-recolho.js", import.meta.url),
  extracts: new URL("../portal/financeiro-recolho-extratos.js", import.meta.url),
  finance: new URL("../portal/financeiro.js", import.meta.url),
  page: new URL("../portal/financeiro.html", import.meta.url),
  installer: new URL("../pwa-install.js", import.meta.url),
  serviceWorker: new URL("../sw.js", import.meta.url),
};

async function source(name) {
  return readFile(files[name], "utf8");
}

async function loadFinanceCore() {
  const policyCode = await source("cyclePolicy");
  const code = await source("reconciliation");
  const browserWindow = {
    INTEGRO_SUPABASE: { url: "https://example.invalid", anonKey: "test" },
    supabase: { createClient: () => ({}) },
  };
  const context = vm.createContext({
    window: browserWindow,
    document: {
      readyState: "loading",
      addEventListener() {},
    },
    console,
    setInterval() {
      throw new Error("O carregamento de teste não deve iniciar temporizadores.");
    },
    clearInterval() {},
    setTimeout() {},
  });

  vm.runInContext(policyCode, context);
  vm.runInContext(code, context);
  return browserWindow.INTEGRO_FINANCE_CYCLE_CORE;
}

async function loadCyclePolicy() {
  const code = await source("cyclePolicy");
  const browserWindow = {};
  const context = vm.createContext({ window: browserWindow, Date, Intl, Object });
  vm.runInContext(code, context);
  return browserWindow.INTEGRO_FINANCE_CYCLE_POLICY;
}

test("cycle transition preserves the active 9-to-8 period and starts the 11-to-10 regime", async () => {
  const policy = await loadCyclePolicy();

  const current = policy.getCurrentCycleRange("2026-09-08");
  assert.equal(current.startISO, "2026-08-09");
  assert.equal(current.endISO, "2026-09-08");
  assert.equal(current.cycleKey, "2026-08");
  assert.equal(current.isClosingWindow, false);

  const closingDayOne = policy.getCurrentCycleRange("2026-09-09");
  const closingDayTwo = policy.getCurrentCycleRange("2026-09-10");
  assert.equal(closingDayOne.cycleKey, "2026-08");
  assert.equal(closingDayTwo.endISO, "2026-09-08");
  assert.equal(closingDayOne.isClosingWindow, true);
  assert.equal(closingDayTwo.isClosingWindow, true);

  const firstNewCycle = policy.getCurrentCycleRange("2026-09-11");
  assert.equal(firstNewCycle.startISO, "2026-09-11");
  assert.equal(firstNewCycle.endISO, "2026-10-10");
  assert.equal(firstNewCycle.cycleKey, "2026-09");
});

test("11-to-10 cycle policy handles month, year, and leap-year boundaries", async () => {
  const policy = await loadCyclePolicy();

  assert.deepEqual(
    { ...policy.getCurrentCycleRange("2026-10-10") },
    {
      startISO: "2026-09-11", endISO: "2026-10-10", cycleKey: "2026-09",
      start: "2026-09-11", end: "2026-10-10", key: "2026-09",
      isTransitionCycle: false, isClosingWindow: false,
    }
  );
  assert.equal(policy.getCurrentCycleRange("2026-10-11").startISO, "2026-10-11");
  assert.equal(policy.getCurrentCycleRange("2027-01-10").startISO, "2026-12-11");
  assert.equal(policy.getCurrentCycleRange("2028-03-10").startISO, "2028-02-11");
  assert.equal(policy.getCurrentCycleRange("2028-03-10").endISO, "2028-03-10");
});

test("numeric snapshot ignores prior cycles and old reconciliation", async () => {
  const core = await loadFinanceCore();
  assert.ok(core?.calculateCurrentCycleSnapshot);

  const snapshot = core.calculateCurrentCycleSnapshot({
    cycle: {
      id: "cycle-current",
      start_date: "2026-07-09",
      end_date: "2026-08-08",
    },
    entries: [
      { id: "entry-prior", entry_date: "2026-07-08", amount_paid: 900 },
      { id: "entry-current", entry_date: "2026-07-09", amount_paid: 500 },
      { id: "entry-future", entry_date: "2026-08-09", amount_paid: 200 },
    ],
    movements: [
      {
        id: "old-reconciliation",
        cycle_id: "cycle-current",
        movement_date: "2026-07-09",
        movement_type: "ajuste_credito",
        destination_bucket: "fundo_caixa",
        amount: 1055.83,
      },
      {
        id: "internal-transfer",
        cycle_id: "cycle-current",
        movement_date: "2026-07-10",
        movement_type: "transferencia",
        source_bucket: "operacoes",
        destination_bucket: "fundo_caixa",
        amount: 50,
      },
      {
        id: "linked-payment",
        cycle_id: "cycle-current",
        movement_date: "2026-07-11",
        movement_type: "saida",
        source_bucket: "fundo_caixa",
        destination_bucket: null,
        related_expense_id: "expense-linked",
        amount: 100,
      },
      {
        id: "movement-prior",
        cycle_id: "cycle-prior",
        movement_date: "2026-07-08",
        movement_type: "saida",
        source_bucket: "operacoes",
        amount: 300,
      },
    ],
    expenses: [
      {
        id: "expense-linked",
        expense_date: "2026-07-11",
        allocation_bucket: "fundo_caixa",
        amount: 100,
      },
      {
        id: "expense-orphan",
        expense_date: "2026-07-12",
        allocation_bucket: "operacoes",
        amount: 25,
      },
      {
        id: "expense-admin",
        expense_date: "2026-07-12",
        allocation_bucket: "ajuste_administrativo",
        amount: 700,
      },
      {
        id: "expense-prior",
        expense_date: "2026-07-08",
        allocation_bucket: "operacoes",
        amount: 800,
      },
    ],
  });

  assert.equal(snapshot.currentEntriesTotal, 500);
  assert.equal(snapshot.currentExternal.credits, 0);
  assert.equal(snapshot.currentExternal.debits, 125);
  assert.equal(snapshot.currentExternal.transfers, 50);
  assert.equal(snapshot.currentBalance, 375);
  assert.equal(snapshot.currentEntriesCount, 1);
  assert.equal(snapshot.currentMovementsCount, 2);
  assert.equal(snapshot.unlinkedExpensesCount, 1);
  assert.equal(snapshot.buckets.operacoes.available, 75);
  assert.equal(snapshot.buckets.fundo_caixa.available, 0);
  assert.equal(snapshot.buckets.acionista_1.available, 100);
});

test("current cycle starts at zero and has no automatic target reconciliation", async () => {
  const code = await source("reconciliation");

  assert.match(
    code,
    /const currentBalance = currentEntriesTotal \+ currentExternal\.credits - currentExternal\.debits/
  );
  assert.match(code, /Cada ciclo começa em R\$ 0,00/);
  assert.doesNotMatch(code, /TARGET_BALANCE|TARGET_CYCLE_KEY|RECONCILIATION_MARK/);
  assert.doesNotMatch(code, /reconcileCurrentCycleOnce|priorBalance|priorEntries|priorMovements|priorExpenses/);
  assert.doesNotMatch(
    code,
    /\.from\("finance_cash_cycle_movements"\)\s*\.insert\(/
  );
});

test("financial reads are restricted to the active cycle dates and id", async () => {
  const code = await source("reconciliation");

  assert.match(
    code,
    /finance_entries"\)\.select\("\*"\).*\.gte\("entry_date", start\)\.lte\("entry_date", end\)/
  );
  assert.match(
    code,
    /finance_expenses"\)\.select\("\*"\).*\.gte\("expense_date", start\)\.lte\("expense_date", end\)/
  );
  assert.match(
    code,
    /finance_cash_cycle_movements"\)\.select\("\*"\).*\.eq\("cycle_id", state\.cycle\.id\)\.gte\("movement_date", start\)\.lte\("movement_date", end\)/
  );
  assert.doesNotMatch(code, /allEntriesTotal|allExternal|allBalance|FIRST_CYCLE_START/);
});

test("historical rows are preserved while administrative adjustments stay out of totals", async () => {
  const code = await source("reconciliation");

  assert.doesNotMatch(
    code,
    /\.from\("finance_cash_cycle_movements"\)\s*\.delete\(\)/
  );
  assert.match(code, /Nenhum registro foi excluído automaticamente/);
  assert.match(code, /type === "ajuste_credito"/);
  assert.match(code, /type === "ajuste_debito"/);
  assert.match(code, /expense\?\.allocation_bucket[\s\S]*?ajuste_administrativo/);
  assert.doesNotMatch(code, /movementFingerprint|closeInTime|15 \* 60 \* 1000/);
});

test("shareholder limits use only the current cycle and never carry debt forward", async () => {
  const code = await source("shareholder");

  assert.match(code, /function currentCycleSnapshot\(\)/);
  assert.match(code, /\.gte\("entry_date", cycle\.start_date\)/);
  assert.match(code, /\.lte\("entry_date", cycle\.end_date\)/);
  assert.match(code, /\.from\("finance_expenses"\)/);
  assert.match(code, /\.gte\("expense_date", cycle\.start_date\)/);
  assert.match(code, /\.lte\("expense_date", cycle\.end_date\)/);
  assert.match(code, /unrepresentedExpenses/);
  assert.match(code, /dedupeMovementsByExpense/);
  assert.match(code, /\.eq\("cycle_id", cycle\.id\)/);
  assert.match(code, /o próximo ciclo começa em R\$ 0,00/);
  assert.doesNotMatch(code, /\bcarry\b|descontado do próximo ciclo|Descontar no próximo ciclo/);
  assert.doesNotMatch(code, /\.lt\("start_date", cycle\.start_date\)/);
  assert.doesNotMatch(code, /\.upsert\(/);
});

test("financial values are rendered by events instead of repaint timers", async () => {
  const reconciliation = await source("reconciliation");
  const shareholder = await source("shareholder");

  assert.doesNotMatch(reconciliation, /setInterval\(paint/);
  assert.doesNotMatch(shareholder, /MutationObserver/);
  assert.doesNotMatch(shareholder, /setInterval\(paint/);
  assert.match(reconciliation, /integro:cash-cycle-base-rendered/);
  assert.match(reconciliation, /integro:finance-data-changed/);
  assert.match(reconciliation, /const updateFromDatabase = \(\) => refresh\(\)/);
  assert.doesNotMatch(
    reconciliation,
    /const updateFromDatabase[\s\S]*?state\.snapshot[\s\S]*?paint\(\)[\s\S]*?refresh\(\)/
  );
});

test("base modules delegate shared totals to the unified snapshot", async () => {
  const cashCycle = await source("cashCycle");
  const extracts = await source("extracts");
  const finance = await source("finance");

  assert.match(cashCycle, /window\.INTEGRO_FINANCE_SNAPSHOT/);
  assert.match(cashCycle, /window\.__INTEGRO_FINANCE_SINGLE_RENDERER__/);
  assert.match(cashCycle, /integro:cash-cycle-base-rendered/);
  assert.match(cashCycle, /dedupeMovementsByExpense/);
  assert.doesNotMatch(cashCycle, /\.upsert\(/);
  assert.doesNotMatch(cashCycle, /window\.location\.reload\(\)/);
  assert.match(
    cashCycle,
    /\.eq\("cycle_id", state\.cycle\.id\)\s*\.gte\("movement_date", start\)\s*\.lte\("movement_date", end\)/
  );
  assert.match(
    extracts,
    /\.eq\("cycle_id", cycle\.id\)\s*\.gte\("movement_date", cycle\.start_date\)\s*\.lte\("movement_date", cycle\.end_date\)/
  );
  assert.match(extracts, /dedupeMovementsByExpense/);
  assert.doesNotMatch(extracts, /\.upsert\(/);

  assert.match(finance, /if \(!window\.__INTEGRO_FINANCE_SINGLE_RENDERER__\)/);
  assert.match(finance, /integro:finance-data-changed/);
});

test("finance page loader activates the single renderer before add-on scripts", async () => {
  const installer = await source("installer");
  const page = await source("page");
  const serviceWorker = await source("serviceWorker");

  const flagPosition = installer.indexOf(
    "window.__INTEGRO_FINANCE_SINGLE_RENDERER__ = true"
  );
  const reconciliationPosition = installer.indexOf(
    'loadScript("financeBalanceReconciliationScript"'
  );

  assert.ok(flagPosition >= 0);
  assert.ok(reconciliationPosition > flagPosition);
  assert.match(installer, /financeCyclePolicyScript/);
  assert.match(installer, /20260903-cycle-11-v1/);

  const inlineFlagPosition = page.indexOf(
    "window.__INTEGRO_FINANCE_SINGLE_RENDERER__ = true"
  );
  const financeScriptPosition = page.indexOf(
    "financeiro.js?v=20260903-cycle-11-v1"
  );
  assert.ok(inlineFlagPosition >= 0);
  assert.ok(financeScriptPosition > inlineFlagPosition);
  assert.match(serviceWorker, /integro-pwa-v20260903-cycle-11/);
});
