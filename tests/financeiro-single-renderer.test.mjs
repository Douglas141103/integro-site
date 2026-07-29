import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  reconciliation: new URL("../portal/financeiro-saldo-reconciliacao.js", import.meta.url),
  shareholder: new URL("../portal/financeiro-recolho-acionista.js", import.meta.url),
  cashCycle: new URL("../portal/financeiro-recolho.js", import.meta.url),
  finance: new URL("../portal/financeiro.js", import.meta.url),
  installer: new URL("../pwa-install.js", import.meta.url),
};

async function source(name) {
  return readFile(files[name], "utf8");
}

test("reconciliation uses movement types accepted by the current database", async () => {
  const code = await source("reconciliation");

  assert.match(
    code,
    /movement_type:\s*delta > 0 \? "ajuste_credito" : "ajuste_debito"/
  );
  assert.doesNotMatch(code, /movement_type:\s*delta > 0 \? "saldo_anterior"/);
  assert.match(code, /text\.includes\(RECONCILIATION_MARK\.toLowerCase\(\)\)/);
});

test("reconciliation never deletes financial rows automatically", async () => {
  const code = await source("reconciliation");

  assert.doesNotMatch(
    code,
    /\.from\("finance_cash_cycle_movements"\)\s*\.delete\(\)/
  );
  assert.match(code, /Nenhum registro foi excluído automaticamente/);
});

test("financial values are rendered by events instead of repaint timers", async () => {
  const reconciliation = await source("reconciliation");
  const shareholder = await source("shareholder");

  assert.doesNotMatch(reconciliation, /setInterval\(paint/);
  assert.doesNotMatch(shareholder, /MutationObserver/);
  assert.doesNotMatch(shareholder, /setInterval\(paint/);
  assert.match(reconciliation, /integro:cash-cycle-base-rendered/);
  assert.match(reconciliation, /integro:finance-data-changed/);
});

test("base modules delegate shared totals to the unified snapshot", async () => {
  const cashCycle = await source("cashCycle");
  const finance = await source("finance");

  assert.match(cashCycle, /window\.INTEGRO_FINANCE_SNAPSHOT/);
  assert.match(cashCycle, /window\.__INTEGRO_FINANCE_SINGLE_RENDERER__/);
  assert.match(cashCycle, /integro:cash-cycle-base-rendered/);
  assert.doesNotMatch(cashCycle, /window\.location\.reload\(\)/);

  assert.match(finance, /if \(!window\.__INTEGRO_FINANCE_SINGLE_RENDERER__\)/);
  assert.match(finance, /integro:finance-data-changed/);
});

test("finance page loader activates the single renderer before add-on scripts", async () => {
  const installer = await source("installer");

  const flagPosition = installer.indexOf(
    "window.__INTEGRO_FINANCE_SINGLE_RENDERER__ = true"
  );
  const reconciliationPosition = installer.indexOf(
    'loadScript("financeBalanceReconciliationScript"'
  );

  assert.ok(flagPosition >= 0);
  assert.ok(reconciliationPosition > flagPosition);
  assert.match(installer, /20260729-single-renderer-v1/);
});
