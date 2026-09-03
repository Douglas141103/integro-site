import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const files = {
  cyclePolicy: new URL("../portal/financeiro-cycle-policy.js", import.meta.url),
  finance: new URL("../portal/financeiro.js", import.meta.url),
  cashCycle: new URL("../portal/financeiro-recolho.js", import.meta.url),
  shareholder: new URL("../portal/financeiro-recolho-acionista.js", import.meta.url),
  extracts: new URL("../portal/financeiro-recolho-extratos.js", import.meta.url),
  reconciliation: new URL("../portal/financeiro-saldo-reconciliacao.js", import.meta.url),
  director: new URL("../portal/financeiro-diretor.js", import.meta.url),
  pointOfSale: new URL("../portal/financeiro-frente-caixa-v3.js", import.meta.url),
  pointOfSaleLoader: new URL("../portal/financeiro-frente-caixa.js", import.meta.url),
  page: new URL("../portal/financeiro.html", import.meta.url),
};

async function source(name) {
  return readFile(files[name], "utf8");
}

function sliceBetween(code, startNeedle, endNeedle, fromIndex = 0) {
  const start = code.indexOf(startNeedle, fromIndex);
  assert.ok(start >= 0, `Trecho inicial não encontrado: ${startNeedle}`);
  const end = code.indexOf(endNeedle, start + startNeedle.length);
  assert.ok(end > start, `Trecho final não encontrado: ${endNeedle}`);
  return code.slice(start, end);
}

async function loadCyclePolicy() {
  const code = await source("cyclePolicy");
  const browserWindow = {};
  const context = vm.createContext({ window: browserWindow, Date, Intl, Object });
  vm.runInContext(code, context);
  return browserWindow.INTEGRO_FINANCE_CYCLE_POLICY;
}

function makeDirectorHarness({ randomUUID = () => "4eb65bb4-26e2-4717-9056-ab3cf2543048" } = {}) {
  const elements = new Map();
  const makeElement = (id) => ({
    id,
    hidden: true,
    className: "",
    textContent: "",
    innerHTML: "",
    placeholder: "",
    value: "",
    disabled: false,
    firstChild: { textContent: "" },
    reset() {},
    addEventListener() {},
  });
  const getElement = (id) => {
    if (!elements.has(id)) elements.set(id, makeElement(id));
    return elements.get(id);
  };

  const browserWindow = {
    INTEGRO_FINANCE_CURRENT_CYCLE: {
      id: "1a0867ce-7d42-454c-913c-8b96c4b20ec4",
      school_id: "19e809d0-2543-4dc3-bd76-92a201c4dc30",
    },
    crypto: { randomUUID },
  };
  const state = {
    directorAction: null,
    school: { id: "19e809d0-2543-4dc3-bd76-92a201c4dc30" },
    entries: [],
    expenses: [],
  };
  const client = {
    auth: {
      async getSession() {
        return { data: { session: { access_token: "portal-session-token" } } };
      },
    },
  };
  const context = vm.createContext({
    window: browserWindow,
    document: { querySelectorAll: () => [] },
    state,
    client,
    cfg: { url: "https://project.example" },
    $: getElement,
    escapeHtml: String,
    money: (value) => `R$ ${Number(value).toFixed(2)}`,
    normalizeNumber: Number,
    todayISO: () => "2026-09-03",
    reloadAll: async () => {},
    showStatus: () => {},
    isAdministrativeExpense: () => false,
    console,
    Uint8Array,
    Date,
    Array,
    JSON,
    fetch: async () => ({ ok: true, json: async () => ({ ok: true }) }),
    setTimeout() {},
  });

  return { browserWindow, context, elements, getElement, state };
}

test("current cycle stays exactly 09/08–08/09, with 09–10/09 only as the closing transition", async () => {
  const policy = await loadCyclePolicy();

  for (const reference of ["2026-08-09", "2026-09-03", "2026-09-08"]) {
    const range = policy.getCurrentCycleRange(reference);
    assert.equal(range.startISO, "2026-08-09");
    assert.equal(range.endISO, "2026-09-08");
    assert.equal(range.cycleKey, "2026-08");
    assert.equal(range.isTransitionCycle, true);
    assert.equal(range.isClosingWindow, false);
  }

  for (const reference of ["2026-09-09", "2026-09-10"]) {
    const range = policy.getCurrentCycleRange(reference);
    assert.equal(range.startISO, "2026-08-09");
    assert.equal(range.endISO, "2026-09-08");
    assert.equal(range.cycleKey, "2026-08");
    assert.equal(range.isTransitionCycle, true);
    assert.equal(range.isClosingWindow, true);
  }
});

test("all cycles after the transition run from day 11 through day 10", async () => {
  const policy = await loadCyclePolicy();
  const cases = [
    ["2026-09-11", "2026-09-11", "2026-10-10", "2026-09"],
    ["2026-10-10", "2026-09-11", "2026-10-10", "2026-09"],
    ["2026-10-11", "2026-10-11", "2026-11-10", "2026-10"],
    ["2027-01-01", "2026-12-11", "2027-01-10", "2026-12"],
    ["2028-03-10", "2028-02-11", "2028-03-10", "2028-02"],
  ];

  for (const [reference, startISO, endISO, cycleKey] of cases) {
    const range = policy.getCurrentCycleRange(reference);
    assert.deepEqual(
      { startISO: range.startISO, endISO: range.endISO, cycleKey: range.cycleKey },
      { startISO, endISO, cycleKey },
    );
    assert.equal(range.isTransitionCycle, false);
    assert.equal(range.isClosingWindow, false);
  }
});

test("administrative expense uses protected authorization before any finance_expenses insert", async () => {
  const finance = await source("finance");
  const cashCycle = await source("cashCycle");

  const basicHandler = sliceBetween(
    finance,
    "if (isAdministrativeAdjustment)",
    "if (!window.__INTEGRO_FINANCE_EXPENSE_HANDLER_READY__)",
  );
  assert.match(basicHandler, /window\.openFinanceAdminAdjustmentAuthorization\(/);
  assert.match(basicHandler, /source:\s*'expense-form'/);
  assert.match(basicHandler, /source_bucket:\s*'ajuste_administrativo'/);
  assert.match(basicHandler, /\n\s*return;\s*\n/);
  assert.doesNotMatch(basicHandler, /finance_expenses|\.insert\s*\(/);

  const interceptStart = cashCycle.indexOf("function interceptExpenseForm()");
  assert.ok(interceptStart >= 0);
  const protectedBranch = sliceBetween(
    cashCycle,
    'if (bucket === "ajuste_administrativo")',
    "const expensePayload =",
    interceptStart,
  );
  assert.match(protectedBranch, /window\.openFinanceAdminAdjustmentAuthorization\(/);
  assert.match(protectedBranch, /source:\s*"expense-form"/);
  assert.match(protectedBranch, /cycle_id:\s*state\.cycle\.id/);
  assert.match(protectedBranch, /source_bucket:\s*"ajuste_administrativo"/);
  assert.match(protectedBranch, /\n\s*return;\s*\n/);
  assert.doesNotMatch(protectedBranch, /finance_expenses|\.insert\s*\(/);
});

test("manual adjustment uses protected authorization and never follows the ordinary movement insert", async () => {
  const cashCycle = await source("cashCycle");
  const saveStart = cashCycle.indexOf("async function saveMovementFromModal()");
  assert.ok(saveStart >= 0);
  const protectedBranch = sliceBetween(
    cashCycle,
    'if (state.modalAction.action === "manual-adjust")',
    'let movementType = "saida"',
    saveStart,
  );

  assert.match(protectedBranch, /window\.openFinanceAdminAdjustmentAuthorization\(/);
  assert.match(protectedBranch, /source:\s*"cash-cycle-modal"/);
  assert.match(protectedBranch, /cycle_id:\s*state\.cycle\.id/);
  assert.match(protectedBranch, /\n\s*return;\s*\n/);
  assert.doesNotMatch(protectedBranch, /\.from\s*\(|\.insert\s*\(|finance_expenses/);
});

test("shareholder capture handlers yield administrative adjustments to the protected base handler", async () => {
  const shareholder = await source("shareholder");
  assert.match(
    shareholder,
    /const SHAREHOLDERS = \["acionista_1", "acionista_2", "acionista_3"\]/,
  );
  assert.doesNotMatch(
    sliceBetween(shareholder, "const SHAREHOLDERS =", "const BUCKET_ORDER ="),
    /ajuste_administrativo/,
  );

  const movementStart = shareholder.indexOf("async function saveShareholderMovement(event)");
  const movementPrevent = shareholder.indexOf("event.preventDefault()", movementStart);
  const exactManualGuard = shareholder.indexOf(
    'if ($("cashMovementModal")?.dataset.action === "manual-adjust") return;',
    movementStart,
  );
  assert.ok(exactManualGuard >= movementStart);
  assert.ok(exactManualGuard < movementPrevent);

  const expenseStart = shareholder.indexOf("async function saveShareholderExpense(event)");
  const expensePrevent = shareholder.indexOf("event.preventDefault()", expenseStart);
  const nonShareholderGuard = shareholder.indexOf(
    "if (!isShareholder(bucket)) return;",
    expenseStart,
  );
  assert.ok(nonShareholderGuard >= expenseStart);
  assert.ok(nonShareholderGuard < expensePrevent);
});

test("director authorization creates an idempotency UUID and keeps adjustment data out of direct tables", async () => {
  const directorCode = await source("director");
  const fixedId = "4eb65bb4-26e2-4717-9056-ab3cf2543048";
  const harness = makeDirectorHarness({ randomUUID: () => fixedId });
  vm.runInContext(directorCode, harness.context);

  harness.browserWindow.openFinanceAdminAdjustmentAuthorization({
    source: "cash-cycle-modal",
    adjustment: {
      amount: "125.90",
      movement_date: "2026-09-03",
      source_bucket: "fundo_caixa",
      destination_bucket: null,
      description: "Correção interna",
    },
  });

  assert.equal(harness.state.directorAction.mode, "admin-adjustment");
  assert.equal(harness.state.directorAction.requestId, fixedId);
  assert.equal(harness.state.directorAction.adjustment.amount, 125.9);
  assert.equal(harness.getElement("directorModal").hidden, false);

  const apiFunction = sliceBetween(
    directorCode,
    "async function callFinanceAdminAdjustment(payload)",
    "function createFinanceRequestId()",
  );
  assert.match(apiFunction, /\/functions\/v1\/finance-admin-adjustment/);
  assert.match(apiFunction, /Authorization:\s*`Bearer \$\{token\}`/);
  assert.match(apiFunction, /cache:\s*'no-store'/);
  assert.doesNotMatch(apiFunction, /\.from\s*\(|finance_expenses|finance_cash_cycle_movements/);

  const submitFunction = sliceBetween(
    directorCode,
    "async function handleDirectorActionSubmit(event)",
    "function renderEntries()",
  );
  for (const field of [
    "director_email",
    "director_password",
    "reason",
    "request_id",
    "cycle_id",
    "school_id",
  ]) {
    assert.match(submitFunction, new RegExp(`\\b${field}\\b`));
  }
  assert.match(submitFunction, /\$\('directorPassword'\)\.value = ''/);
});

test("authorization request parses structured API errors and generates a valid fallback UUID v4", async () => {
  const directorCode = await source("director");
  const harness = makeDirectorHarness();
  let capturedRequest;
  harness.context.fetch = async (url, options) => {
    capturedRequest = { url, options };
    return {
      ok: false,
      json: async () => ({ error: { message: "Credenciais de direção inválidas." } }),
    };
  };
  vm.runInContext(directorCode, harness.context);

  const payload = {
    request_id: "4eb65bb4-26e2-4717-9056-ab3cf2543048",
    director_email: "direcao@example.invalid",
    director_password: "test-only-password",
  };
  await assert.rejects(
    harness.context.callFinanceAdminAdjustment(payload),
    /Credenciais de direção inválidas\./,
  );
  assert.equal(capturedRequest.url, "https://project.example/functions/v1/finance-admin-adjustment");
  assert.equal(capturedRequest.options.cache, "no-store");
  assert.equal(capturedRequest.options.headers.Authorization, "Bearer portal-session-token");
  assert.deepEqual(JSON.parse(capturedRequest.options.body), payload);

  harness.browserWindow.crypto = {
    getRandomValues(bytes) {
      for (let index = 0; index < bytes.length; index += 1) bytes[index] = index;
      return bytes;
    },
  };
  const fallbackId = harness.context.createFinanceRequestId();
  assert.match(
    fallbackId,
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  );
});

test("ordinary entries and expenses are blocked in the closing window while protected adjustment remains available", async () => {
  const finance = await source("finance");
  const cashCycle = await source("cashCycle");
  const shareholder = await source("shareholder");

  const entryHandler = sliceBetween(
    finance,
    "async function saveEntryAndPrint(event)",
    "window.printExistingReceipt",
  );
  assert.match(entryHandler, /ordinaryFinanceActivityBlockReason\(\)/);
  assert.ok(
    entryHandler.indexOf("ordinaryFinanceActivityBlockReason()") <
      entryHandler.indexOf(".from('finance_entries')"),
  );

  const expenseHandler = sliceBetween(
    cashCycle,
    "function interceptExpenseForm()",
    "async function init()",
  );
  assert.match(
    expenseHandler,
    /if \(bucket !== "ajuste_administrativo"\)[\s\S]*?ordinaryActivityBlockReason\(\)/,
  );
  assert.match(
    expenseHandler,
    /if \(bucket === "ajuste_administrativo"\)[\s\S]*?openFinanceAdminAdjustmentAuthorization/,
  );

  const manualMovement = sliceBetween(
    cashCycle,
    "async function saveMovementFromModal()",
    "async function transferOperationsRestToFund()",
  );
  assert.match(
    manualMovement,
    /state\.modalAction\.action !== "manual-adjust"[\s\S]*?ordinaryActivityBlockReason\(\)/,
  );
  assert.match(manualMovement, /state\.modalAction\.action === "manual-adjust"[\s\S]*?openFinanceAdminAdjustmentAuthorization/);

  assert.match(shareholder, /function ordinaryActivityBlockReason\(/);
  assert.match(shareholder, /async function saveShareholderMovement[\s\S]*?ordinaryActivityBlockReason\(\)/);
  assert.match(shareholder, /async function saveShareholderExpense[\s\S]*?ordinaryActivityBlockReason\(\)/);
});

test("closed cycles reject every frontend insert and the transition closes only on 10/09", async () => {
  const finance = await source("finance");
  const cashCycle = await source("cashCycle");
  const shareholder = await source("shareholder");
  const pointOfSale = await source("pointOfSale");

  assert.match(finance, /ordinaryFinanceActivityBlockReason[\s\S]*?liveCycle\?\.status[\s\S]*?fechado/);
  assert.match(cashCycle, /function isCycleClosed\(\)/);
  assert.match(cashCycle, /async function saveMovementFromModal[\s\S]*?if \(isCycleClosed\(\)\)/);
  assert.match(cashCycle, /function interceptExpenseForm[\s\S]*?if \(isCycleClosed\(\)\)/);
  assert.match(shareholder, /ordinaryActivityBlockReason\(snapshot\.cycle\)/);
  assert.match(pointOfSale, /const liveCycle = window\.INTEGRO_FINANCE_CURRENT_CYCLE/);
  assert.match(pointOfSale, /String\(liveCycle\.status[\s\S]*?=== "fechado"/);

  const closeHandler = sliceBetween(
    cashCycle,
    "async function closeCycle()",
    "function printCycleReport()",
  );
  const dateGuard = closeHandler.indexOf("todayISO() < closeDate");
  const update = closeHandler.indexOf('.from("finance_cash_cycles")');
  assert.ok(dateGuard >= 0);
  assert.ok(update > dateGuard);
  assert.match(closeHandler, /fechamento definitivo deste ciclo estará disponível/);
});

test("all cycle readers validate key and exact dates and never create an expired transition cycle", async () => {
  const modules = [
    ["cashCycle", "range.cycleKey", "range.startISO", "range.endISO"],
    ["shareholder", "range.key", "range.start", "range.end"],
    ["extracts", "range.cycleKey", "range.startISO", "range.endISO"],
    ["reconciliation", "range.cycleKey", "range.startISO", "range.endISO"],
  ];

  for (const [name, key, start, end] of modules) {
    const code = await source(name);
    const findStart = code.indexOf("const findCycle = () =>");
    assert.ok(findStart >= 0, `${name}: consulta de ciclo ausente`);
    const lookup = code.slice(findStart, code.indexOf(".maybeSingle();", findStart) + 15);
    assert.match(lookup, new RegExp(`\\.eq\\(\\"cycle_key\\", ${key.replace(".", "\\.")}\\)`));
    assert.match(lookup, new RegExp(`\\.eq\\(\\"start_date\\", ${start.replace(".", "\\.")}\\)`));
    assert.match(lookup, new RegExp(`\\.eq\\(\\"end_date\\", ${end.replace(".", "\\.")}\\)`));

    const insertPosition = code.indexOf('.from("finance_cash_cycles")', lookup.length + findStart);
    const closingGuard = code.indexOf("if (range.isClosingWindow)", findStart);
    assert.ok(closingGuard > findStart, `${name}: guarda da janela ausente`);
    assert.ok(insertPosition > closingGuard, `${name}: ciclo pode ser criado antes da guarda`);
  }
});

test("expense resets keep a date inside the accounting cycle", async () => {
  const cashCycle = await source("cashCycle");
  const shareholder = await source("shareholder");

  assert.match(
    cashCycle,
    /form\.reset\(\);\s*\$\("expenseDate"\)\.value = currentCycleDefaultDate\(\);/,
  );
  assert.match(
    shareholder,
    /event\.target\.reset\(\);[\s\S]*?expenseDateInput\.value = currentCycleDefaultDate\(snapshot\.cycle\)/,
  );
});

test("closing window has an explicit UI status and disables ordinary cycle actions", async () => {
  const cashCycle = await source("cashCycle");
  const cyclePolicy = await source("cyclePolicy");

  assert.match(cashCycle, /range\.isClosingWindow[\s\S]*?"Em fechamento"/);
  assert.match(cashCycle, /const blockOrdinary = closed \|\| closing/);
  assert.match(cashCycle, /querySelectorAll\("\[data-cash-action\]"\)[\s\S]*?button\.disabled = blockOrdinary/);
  assert.match(cashCycle, /Janela de fechamento:[\s\S]*?somente ajustes administrativos protegidos/);
  assert.match(cashCycle, /cyclePolicy\.TRANSITION_LOOKUP_END/);
  assert.match(cashCycle, /const closeDate = earliestCycleCloseDate\(\)/);
  assert.match(cyclePolicy, /TRANSITION_LOOKUP_END,/);
});

test("active point of sale uses Manaus date and blocks the transition gap", async () => {
  const pointOfSale = await source("pointOfSale");
  const loader = await source("pointOfSaleLoader");
  const page = await source("page");

  const todayFunction = sliceBetween(pointOfSale, "function today(", "function showMsg(");
  assert.match(todayFunction, /cyclePolicy\.referenceISO\(referenceDate\)/);
  assert.doesNotMatch(todayFunction, /toISOString/);

  const finishFunction = sliceBetween(pointOfSale, "async function finish()", "function printReceipt(");
  const closingGuard = finishFunction.indexOf("range.isClosingWindow");
  const insert = finishFunction.indexOf('.from("finance_entries").insert');
  assert.ok(closingGuard >= 0);
  assert.ok(insert > closingGuard);
  assert.match(finishFunction, /entry_date:\s*today\(transactionMoment\)/);
  assert.match(loader, /financeiro-frente-caixa-v3\.js\?v=20260903-cycle-guard-v1/);
  assert.match(page, /financeiro-frente-caixa\.js\?v=20260903-cycle-guard-v1/);
});

test("historical entries and expenses are rendered as read-only", async () => {
  const director = await source("director");

  assert.match(director, /function canModifyFinanceRecord\(recordType, record\)/);
  assert.match(director, /recordDate >= cycle\.start_date/);
  assert.match(director, /recordDate <= cycle\.end_date/);
  assert.match(director, /!range\?\.isClosingWindow/);
  assert.match(director, /Histórico financeiro — somente leitura/);
  assert.match(director, /if \(!canModifyFinanceRecord\(recordType, record\)\)/);
  assert.match(director, /integro:cash-cycle-base-rendered/);
});
