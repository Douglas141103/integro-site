(function () {
  const isFinancePage = location.pathname.endsWith("/portal/financeiro.html") || location.pathname.includes("/portal/financeiro");
  if (!isFinancePage || window.__INTEGRO_RECOLHO_EXTRATOS__) return;
  window.__INTEGRO_RECOLHO_EXTRATOS__ = true;

  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;
  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) return;

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  const FIRST_CYCLE_START = "2026-06-09";
  const CYCLE_DAY = 9;

  const BUCKETS = {
    operacoes: { label: "Contas e operações", percent: 0.30, percentLabel: "30%" },
    fundo_caixa: { label: "Fundo de caixa", percent: 0.10, percentLabel: "10%" },
    acionista_1: { label: "Acionista 1", percent: 0.20, percentLabel: "20%" },
    acionista_2: { label: "Acionista 2", percent: 0.20, percentLabel: "20%" },
    acionista_3: { label: "Acionista 3", percent: 0.20, percentLabel: "20%" }
  };

  const ORDER = ["operacoes", "fundo_caixa", "acionista_1", "acionista_2", "acionista_3"];

  const $ = (id) => document.getElementById(id);

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function dateISO(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
  }

  function parseDateLocal(iso) {
    const [year, month, day] = String(iso).slice(0, 10).split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function addMonths(date, amount) {
    return new Date(date.getFullYear(), date.getMonth() + amount, date.getDate());
  }

  function addDays(date, amount) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
  }

  function formatDateBR(value) {
    if (!value) return "—";
    const date = typeof value === "string" ? parseDateLocal(value.slice(0, 10)) : value;
    return date.toLocaleDateString("pt-BR");
  }

  function getCurrentCycleRange(referenceDate = new Date()) {
    const firstStart = parseDateLocal(FIRST_CYCLE_START);

    if (referenceDate < firstStart) {
      const start = firstStart;
      const end = addDays(addMonths(start, 1), -1);
      return { startISO: dateISO(start), endISO: dateISO(end), cycleKey: dateISO(start).slice(0, 7) };
    }

    let start = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), CYCLE_DAY);
    if (referenceDate.getDate() < CYCLE_DAY) start = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 1, CYCLE_DAY);
    const end = addDays(addMonths(start, 1), -1);
    return { startISO: dateISO(start), endISO: dateISO(end), cycleKey: dateISO(start).slice(0, 7) };
  }

  function movementTypeLabel(type) {
    const labels = {
      saida: "Saída",
      conta_paga: "Conta paga",
      pagamento_acionista: "Pagamento acionista",
      transferencia: "Transferência",
      ajuste_credito: "Ajuste de crédito",
      ajuste_debito: "Ajuste de débito"
    };
    return labels[type] || type || "Movimento";
  }

  function isAdministrativeAdjustment(movement) {
    const type = String(movement?.movement_type || "").toLowerCase();
    const source = String(movement?.source_bucket || "").toLowerCase();
    const destination = String(movement?.destination_bucket || "").toLowerCase();
    const description = String(movement?.description || "").toLowerCase();
    const notes = String(movement?.notes || "").toLowerCase();
    return source === "ajuste_administrativo" || destination === "ajuste_administrativo" || type === "ajuste_credito" || type === "ajuste_debito" || description.includes("ajuste administrativo") || description.includes("ajuste interno") || notes.includes("ajuste administrativo") || notes.includes("ajuste interno");
  }

  async function loadData() {
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData?.user) throw new Error("Usuário não autenticado.");

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (profileError || !profile) throw new Error("Perfil não encontrado.");

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) throw new Error("Unidade ativa não encontrada.");

    const range = getCurrentCycleRange(new Date());
    const { data: cycle, error: cycleError } = await client
      .from("finance_cash_cycles")
      .upsert({
        school_id: school.id,
        cycle_key: range.cycleKey,
        start_date: range.startISO,
        end_date: range.endISO,
        status: "aberto",
        created_by: userData.user.id,
        updated_at: new Date().toISOString()
      }, { onConflict: "school_id,cycle_key" })
      .select("*")
      .single();

    if (cycleError) throw cycleError;

    const [entriesRes, movementsRes] = await Promise.all([
      client
        .from("finance_entries")
        .select("id, entry_type, entry_date, created_at, amount_paid, payer_name, student_name_snapshot, description")
        .eq("school_id", school.id)
        .gte("entry_date", cycle.start_date)
        .lte("entry_date", cycle.end_date)
        .order("entry_date", { ascending: true }),
      client
        .from("finance_cash_cycle_movements")
        .select("*")
        .eq("school_id", school.id)
        .eq("cycle_id", cycle.id)
        .order("movement_date", { ascending: true })
    ]);

    if (entriesRes.error) throw entriesRes.error;
    if (movementsRes.error) throw movementsRes.error;

    const entries = entriesRes.data || [];
    const movements = (movementsRes.data || []).filter((item) => !isAdministrativeAdjustment(item));
    const totals = calculateTotals(entries, movements);

    return { user: userData.user, profile, school, cycle, entries, movements, totals };
  }

  function calculateTotals(entries, movements) {
    const totalEntries = entries.reduce((sum, entry) => sum + Number(entry.amount_paid || 0), 0);
    const buckets = {};

    ORDER.forEach((bucket) => {
      buckets[bucket] = {
        bucket,
        label: BUCKETS[bucket].label,
        percent: BUCKETS[bucket].percent,
        percentLabel: BUCKETS[bucket].percentLabel,
        base: totalEntries * BUCKETS[bucket].percent,
        credits: 0,
        debits: 0,
        available: totalEntries * BUCKETS[bucket].percent
      };
    });

    movements.forEach((movement) => {
      const amount = Number(movement.amount || 0);
      if (movement.source_bucket && buckets[movement.source_bucket]) buckets[movement.source_bucket].debits += amount;
      if (movement.destination_bucket && buckets[movement.destination_bucket]) buckets[movement.destination_bucket].credits += amount;
    });

    ORDER.forEach((bucket) => {
      const item = buckets[bucket];
      item.available = item.base + item.credits - item.debits;
    });

    return { totalEntries, buckets };
  }

  function ensureStyles() {
    if ($("cashExtractStyle")) return;
    const style = document.createElement("style");
    style.id = "cashExtractStyle";
    style.textContent = `
      .cash-extract-panel{border:1px solid #d7e4dd;border-radius:22px;background:#ffffff;padding:16px;margin:0 0 20px;box-shadow:0 10px 24px rgba(18,50,42,.06)}
      .cash-extract-panel .muted{color:#61746d;margin:4px 0 0;line-height:1.45}
      .cash-extract-controls{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
      .cash-extract-controls select{border:1px solid #d7e4dd;border-radius:999px;padding:11px 14px;font-weight:800;color:#0b5242;background:#f8fcfa;min-width:230px}
    `;
    document.head.appendChild(style);
  }

  function createExtractPanel() {
    const panel = $("cashCyclePanel");
    const grid = $("cashDistributionGrid");
    if (!panel || !grid) return false;

    ensureStyles();

    if (!$('cashExtractPanel')) {
      const section = document.createElement("section");
      section.id = "cashExtractPanel";
      section.className = "cash-extract-panel";
      section.innerHTML = `
        <div class="cash-movements-head">
          <div>
            <h3>Extratos individuais</h3>
            <p class="muted">Imprima o extrato de Contas e operações, Fundo de caixa ou de cada acionista separadamente.</p>
          </div>
          <div class="cash-extract-controls">
            <select id="cashExtractBucketSelect" aria-label="Selecionar extrato">
              ${ORDER.map((bucket) => `<option value="${bucket}">${BUCKETS[bucket].label}</option>`).join("")}
            </select>
            <button class="cash-btn primary" type="button" id="cashPrintBucketExtractBtn">Imprimir extrato</button>
            <button class="cash-btn ghost" type="button" id="cashPrintAllBucketExtractsBtn">Imprimir todos</button>
          </div>
        </div>
      `;
      grid.insertAdjacentElement("afterend", section);
      $("cashPrintBucketExtractBtn")?.addEventListener("click", () => printSelectedBucket());
      $("cashPrintAllBucketExtractsBtn")?.addEventListener("click", () => printAllBuckets());
    }

    addDirectButtons();
    return true;
  }

  function addDirectButtons() {
    const cards = Array.from(document.querySelectorAll(".cash-bucket-card"));
    cards.forEach((card, index) => {
      const bucket = ORDER[index];
      if (!bucket || card.querySelector("[data-cash-extract-bucket]")) return;
      const actions = card.querySelector(".cash-bucket-actions") || card;
      const btn = document.createElement("button");
      btn.className = "cash-btn ghost";
      btn.type = "button";
      btn.textContent = "Imprimir extrato";
      btn.dataset.cashExtractBucket = bucket;
      btn.addEventListener("click", () => printBucket(bucket));
      actions.appendChild(btn);
    });
  }

  async function printSelectedBucket() {
    const bucket = $("cashExtractBucketSelect")?.value || "operacoes";
    await printBucket(bucket);
  }

  async function printAllBuckets() {
    try {
      const data = await loadData();
      const html = buildPrintDocument(
        data,
        ORDER.map((bucket, index) => buildBucketStatement(data, bucket, index > 0)).join("")
      );
      openPrint(html);
    } catch (error) {
      console.error(error);
      alert(error.message || "Erro ao gerar extratos.");
    }
  }

  async function printBucket(bucket) {
    try {
      const data = await loadData();
      const html = buildPrintDocument(data, buildBucketStatement(data, bucket, false));
      openPrint(html);
    } catch (error) {
      console.error(error);
      alert(error.message || "Erro ao gerar extrato.");
    }
  }

  function buildBucketStatement(data, bucket, pageBreak) {
    const item = data.totals.buckets[bucket];
    if (!item) return "";

    const entryRows = data.entries.length
      ? data.entries.map((entry) => {
          const received = Number(entry.amount_paid || 0);
          const quota = received * BUCKETS[bucket].percent;
          return `<tr><td>${safe(formatDateBR(entry.entry_date))}</td><td>${safe(entry.payer_name || entry.student_name_snapshot || "—")}</td><td>${safe(entry.description || entry.entry_type || "Recebimento")}</td><td>${money(received)}</td><td>${money(quota)}</td></tr>`;
        }).join("")
      : `<tr><td colspan="5">Nenhuma entrada registrada no ciclo.</td></tr>`;

    const relatedMovements = data.movements
      .filter((movement) => movement.source_bucket === bucket || movement.destination_bucket === bucket)
      .sort((a, b) => String(a.movement_date || a.created_at || "").localeCompare(String(b.movement_date || b.created_at || "")));

    let balance = Number(item.base || 0);
    const movementRows = relatedMovements.length
      ? relatedMovements.map((movement) => {
          const amount = Number(movement.amount || 0);
          const credit = movement.destination_bucket === bucket ? amount : 0;
          const debit = movement.source_bucket === bucket ? amount : 0;
          balance += credit - debit;
          return `<tr><td>${safe(formatDateBR(movement.movement_date))}</td><td>${safe(movementTypeLabel(movement.movement_type))}</td><td>${credit ? money(credit) : "—"}</td><td>${debit ? money(debit) : "—"}</td><td>${money(balance)}</td><td>${safe(movement.description || "")}${movement.notes ? `<br><small>${safe(movement.notes)}</small>` : ""}</td></tr>`;
        }).join("")
      : `<tr><td colspan="6">Nenhuma movimentação registrada para este extrato.</td></tr>`;

    return `
      <section class="statement ${pageBreak ? "page-break" : ""}">
        <h1>INTEGRO — Extrato individual do Recolho</h1>
        <p><strong>Extrato:</strong> ${safe(item.label)} (${safe(item.percentLabel)})</p>
        <p><strong>Ciclo:</strong> ${safe(formatDateBR(data.cycle.start_date))} a ${safe(formatDateBR(data.cycle.end_date))}</p>

        <div class="summary">
          <div><small>Total recebido no ciclo</small><strong>${money(data.totals.totalEntries)}</strong></div>
          <div><small>Valor previsto</small><strong>${money(item.base)}</strong></div>
          <div><small>Entradas internas</small><strong>${money(item.credits)}</strong></div>
          <div><small>Usado / pago</small><strong>${money(item.debits)}</strong></div>
          <div><small>Disponível ajustado</small><strong>${money(item.available)}</strong></div>
        </div>

        <h2>Composição do valor previsto</h2>
        <table>
          <thead><tr><th>Data</th><th>Pagador / aluno</th><th>Descrição</th><th>Recebido</th><th>Parte deste extrato</th></tr></thead>
          <tbody>${entryRows}</tbody>
        </table>

        <h2>Movimentações do extrato</h2>
        <table>
          <thead><tr><th>Data</th><th>Tipo</th><th>Entrada</th><th>Saída</th><th>Saldo</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td>${safe(formatDateBR(data.cycle.start_date))}</td><td>Distribuição automática</td><td>${money(item.base)}</td><td>—</td><td>${money(item.base)}</td><td>Percentual aplicado sobre o total recebido no ciclo.</td></tr>
            ${movementRows}
          </tbody>
        </table>

        <p class="note">Ajustes administrativos internos não aparecem neste extrato.</p>
        <div class="signatures"><div>Responsável financeiro</div><div>Direção / Administração</div></div>
      </section>
    `;
  }

  function buildPrintDocument(data, content) {
    return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Extratos do Recolho</title><style>@page{size:A4;margin:12mm}body{font-family:Arial,Helvetica,sans-serif;color:#12322a;font-size:11.5px}h1{color:#0b5242;margin:0 0 5px;font-size:20px}h2{color:#0b5242;margin:18px 0 6px;font-size:15px}.statement{padding-bottom:14px}.page-break{page-break-before:always}.summary{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:12px 0}.summary div{border:1px solid #cfe5d8;border-radius:10px;padding:9px;background:#f8fcfa}.summary small{display:block;color:#567;font-weight:700;margin-bottom:4px}.summary strong{color:#0b5242;font-size:13px}table{width:100%;border-collapse:collapse;margin-top:8px}th,td{border-bottom:1px solid #dfeae4;text-align:left;padding:7px;vertical-align:top}th{background:#eef7f2;color:#0b5242}.note{font-size:11px;color:#567;margin-top:10px}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:45px;margin-top:36px}.signatures div{border-top:1px solid #12322a;text-align:center;padding-top:8px}</style></head><body>${content}<script>window.onload=function(){window.focus();window.print();};<\/script></body></html>`;
  }

  function openPrint(html) {
    const win = window.open("", "_blank");
    if (!win) {
      alert("Permita pop-ups para imprimir o extrato.");
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  function start() {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (createExtractPanel() || tries > 40) clearInterval(timer);
    }, 500);

    const observer = new MutationObserver(() => addDirectButtons());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
