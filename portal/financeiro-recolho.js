/*
  INTEGRO — Recolho do Caixa
  Ciclo empresarial mensal:
  - Início: todo dia 9
  - Primeiro ciclo do sistema: 09/06/2026

  Regra de distribuição:
  - 30% Contas e operações
  - 10% Fundo de caixa
  - 20% Acionista 1
  - 20% Acionista 2
  - 20% Acionista 3

  Ajuste importante:
  - Ajustes administrativos continuam existindo no banco.
  - Ajustes administrativos NÃO aparecem nas movimentações internas visíveis.
  - Ajustes administrativos NÃO aparecem no espelho/relatório de recolho.
*/

(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    console.warn("INTEGRO: configuração do Supabase não encontrada para o Recolho do Caixa.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const FIRST_CYCLE_START = "2026-06-09";
  const CYCLE_DAY = 9;

  const BUCKETS = {
    operacoes: {
      label: "Contas e operações",
      percent: 0.30,
      percentLabel: "30%",
      className: "operations"
    },
    fundo_caixa: {
      label: "Fundo de caixa",
      percent: 0.10,
      percentLabel: "10%",
      className: "fund"
    },
    acionista_1: {
      label: "Acionista 1",
      percent: 0.20,
      percentLabel: "20%",
      className: "shareholder"
    },
    acionista_2: {
      label: "Acionista 2",
      percent: 0.20,
      percentLabel: "20%",
      className: "shareholder"
    },
    acionista_3: {
      label: "Acionista 3",
      percent: 0.20,
      percentLabel: "20%",
      className: "shareholder"
    },
    ajuste_administrativo: {
      label: "Ajuste administrativo",
      percent: 0,
      percentLabel: "Ajuste",
      className: "administrative"
    }
  };

  const VISIBLE_BUCKET_ORDER = [
    "operacoes",
    "fundo_caixa",
    "acionista_1",
    "acionista_2",
    "acionista_3"
  ];

  const state = {
    user: null,
    profile: null,
    school: null,
    cycle: null,
    entries: [],
    expenses: [],
    movements: [],
    totals: null,
    modalAction: null
  };

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
      currency: "BRL"
    });
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function dateISO(date) {
    return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
  }

  function todayISO() {
    return dateISO(new Date());
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

      return {
        start,
        end,
        startISO: dateISO(start),
        endISO: dateISO(end),
        cycleKey: dateISO(start).slice(0, 7)
      };
    }

    let start = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), CYCLE_DAY);

    if (referenceDate.getDate() < CYCLE_DAY) {
      start = new Date(referenceDate.getFullYear(), referenceDate.getMonth() - 1, CYCLE_DAY);
    }

    const end = addDays(addMonths(start, 1), -1);

    return {
      start,
      end,
      startISO: dateISO(start),
      endISO: dateISO(end),
      cycleKey: dateISO(start).slice(0, 7)
    };
  }

  function setMessage(message, type) {
    const el = $("cashCycleMessage");

    if (!el) return;

    if (!message) {
      el.textContent = "";
      el.className = "cash-status";
      return;
    }

    el.textContent = message;
    el.className = `cash-status show ${type || "ok"}`;
  }

  function setModalMessage(message, type) {
    const el = $("cashModalMessage");

    if (!el) return;

    el.textContent = message || "";
    el.className = message ? `cash-status show ${type || "ok"}` : "cash-status";
  }

  function showModal() {
    $("cashMovementModal")?.classList.add("show");
  }

  function closeModal() {
    $("cashMovementModal")?.classList.remove("show");
    state.modalAction = null;
  }

  function bucketLabel(bucket) {
    return BUCKETS[bucket]?.label || "Não informado";
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

    return (
      source === "ajuste_administrativo" ||
      destination === "ajuste_administrativo" ||
      type === "ajuste_credito" ||
      type === "ajuste_debito" ||
      description.includes("ajuste administrativo") ||
      description.includes("ajuste interno") ||
      notes.includes("ajuste administrativo") ||
      notes.includes("ajuste interno")
    );
  }

  function getVisibleCycleMovements() {
    return (state.movements || []).filter((movement) => {
      return !isAdministrativeAdjustment(movement);
    });
  }

  async function loadContext() {
    const { data: userData, error: userError } = await client.auth.getUser();

    if (userError || !userData?.user) {
      throw new Error("Usuário não autenticado.");
    }

    state.user = userData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile) {
      throw new Error("Perfil do usuário não encontrado.");
    }

    state.profile = profile;

    if (!["integro_admin", "diretor", "coordenacao"].includes(profile.role)) {
      throw new Error("Seu perfil não tem permissão para acessar o Recolho do Caixa.");
    }

    const { data: school, error: schoolError } = await client
      .from("schools")
      .select("id, name, slug")
      .eq("id", profile.school_id)
      .maybeSingle();

    if (schoolError || !school) {
      throw new Error("Escola ativa não encontrada.");
    }

    state.school = school;
  }

  async function ensureCurrentCycle() {
    const range = getCurrentCycleRange(new Date());

    const payload = {
      school_id: state.school.id,
      cycle_key: range.cycleKey,
      start_date: range.startISO,
      end_date: range.endISO,
      status: "aberto",
      created_by: state.user.id,
      updated_at: new Date().toISOString()
    };

    const { data, error } = await client
      .from("finance_cash_cycles")
      .upsert(payload, {
        onConflict: "school_id,cycle_key"
      })
      .select("*")
      .single();

    if (error) {
      throw error;
    }

    state.cycle = data;
  }

  async function loadCycleData() {
    if (!state.school?.id) {
      await loadContext();
    }

    await ensureCurrentCycle();

    const start = state.cycle.start_date;
    const end = state.cycle.end_date;

    const [entriesRes, expensesRes, movementsRes] = await Promise.all([
      client
        .from("finance_entries")
        .select("id, entry_type, entry_date, created_at, amount_paid, gross_amount, discount_amount, student_name_snapshot, payer_name, description")
        .eq("school_id", state.school.id)
        .gte("entry_date", start)
        .lte("entry_date", end)
        .order("entry_date", { ascending: true }),

      client
        .from("finance_expenses")
        .select("id, description, amount, paid_to, paid_by_name, category, expense_date, notes, allocation_bucket, cash_cycle_id, created_at")
        .eq("school_id", state.school.id)
        .gte("expense_date", start)
        .lte("expense_date", end)
        .order("expense_date", { ascending: false }),

      client
        .from("finance_cash_cycle_movements")
        .select("*")
        .eq("school_id", state.school.id)
        .eq("cycle_id", state.cycle.id)
        .order("created_at", { ascending: false })
    ]);

    if (entriesRes.error) throw entriesRes.error;
    if (expensesRes.error) throw expensesRes.error;
    if (movementsRes.error) throw movementsRes.error;

    state.entries = entriesRes.data || [];
    state.expenses = expensesRes.data || [];
    state.movements = movementsRes.data || [];

    state.totals = calculateTotals();
  }

  function calculateTotals() {
    const totalEntries = state.entries.reduce((sum, entry) => {
      return sum + Number(entry.amount_paid || 0);
    }, 0);

    const buckets = {};

    Object.keys(BUCKETS).forEach((bucket) => {
      buckets[bucket] = {
        bucket,
        label: BUCKETS[bucket].label,
        percent: BUCKETS[bucket].percent,
        percentLabel: BUCKETS[bucket].percentLabel,
        base: totalEntries * BUCKETS[bucket].percent,
        debits: 0,
        credits: 0,
        visibleDebits: 0,
        visibleCredits: 0,
        available: totalEntries * BUCKETS[bucket].percent
      };
    });

    state.movements.forEach((movement) => {
      const amount = Number(movement.amount || 0);
      const hiddenAdmin = isAdministrativeAdjustment(movement);

      if (movement.source_bucket && buckets[movement.source_bucket]) {
        buckets[movement.source_bucket].debits += amount;

        if (!hiddenAdmin) {
          buckets[movement.source_bucket].visibleDebits += amount;
        }
      }

      if (movement.destination_bucket && buckets[movement.destination_bucket]) {
        buckets[movement.destination_bucket].credits += amount;

        if (!hiddenAdmin) {
          buckets[movement.destination_bucket].visibleCredits += amount;
        }
      }
    });

    Object.values(buckets).forEach((item) => {
      item.available = item.base + item.credits - item.debits;
    });

    const visibleMovements = getVisibleCycleMovements();

    const totalDebits = visibleMovements.reduce((sum, movement) => {
      if (!movement.source_bucket) return sum;
      return sum + Number(movement.amount || 0);
    }, 0);

    const totalCredits = visibleMovements.reduce((sum, movement) => {
      if (!movement.destination_bucket) return sum;
      return sum + Number(movement.amount || 0);
    }, 0);

    return {
      totalEntries,
      totalDebits,
      totalCredits,
      cycleBalance: totalEntries - totalDebits,
      buckets
    };
  }

  function createPanel() {
    if ($("cashCyclePanel")) {
      return;
    }

    const mount = $("cashCyclePanelMount");

    if (!mount) {
      return;
    }

    mount.innerHTML = `
      <section id="cashCyclePanel" class="cash-cycle-panel">
        <div class="cash-cycle-head">
          <div>
            <p class="eyebrow">CICLO EMPRESARIAL MENSAL</p>
            <h2>Recolho do caixa</h2>
            <p class="muted">
              O ciclo do INTEGRO começa todo dia 9. O painel distribui automaticamente o valor recebido:
              30% para contas e operações, 10% para fundo de caixa e 20% para cada acionista.
            </p>
          </div>

          <div class="cash-cycle-actions">
            <button class="cash-btn ghost" type="button" id="cashRefreshBtn">Atualizar</button>
            <button class="cash-btn ghost" type="button" id="cashPrintBtn">Imprimir relatório</button>
            <button class="cash-btn warning" type="button" id="cashCloseCycleBtn">Fechar ciclo</button>
          </div>
        </div>

        <div id="cashCycleMessage" class="cash-status"></div>

        <div class="cash-rule-box">
          <strong>Regra do ciclo:</strong>
          toda saída deve indicar a origem do dinheiro. Após pagar as contas, o restante de
          <strong>Contas e operações</strong> pode ser transferido para o <strong>Fundo de caixa</strong>.
          Ajustes administrativos são internos e não aparecem nas movimentações visíveis nem no espelho de recolho.
        </div>

        <section class="cash-cycle-info">
          <article class="cash-info-card main">
            <small>Ciclo atual</small>
            <strong id="cashCyclePeriod">—</strong>
          </article>

          <article class="cash-info-card positive">
            <small>Total recebido</small>
            <strong id="cashTotalEntries">R$ 0,00</strong>
          </article>

          <article class="cash-info-card negative">
            <small>Total utilizado/pago</small>
            <strong id="cashTotalDebits">R$ 0,00</strong>
          </article>

          <article class="cash-info-card">
            <small>Saldo do ciclo</small>
            <strong id="cashCycleBalance">R$ 0,00</strong>
          </article>

          <article class="cash-info-card warning">
            <small>Status</small>
            <strong id="cashCycleStatus">—</strong>
          </article>
        </section>

        <section id="cashDistributionGrid" class="cash-distribution-grid"></section>

        <section class="cash-movements-card">
          <div class="cash-movements-head">
            <h3>Movimentações internas do ciclo</h3>
            <button class="cash-btn ghost" type="button" id="cashManualAdjustBtn">Lançar ajuste</button>
          </div>

          <div id="cashMovementsList"></div>
        </section>
      </section>
    `;

    createModal();
  }

  function createModal() {
    if ($("cashMovementModal")) {
      return;
    }

    const modal = document.createElement("div");
    modal.id = "cashMovementModal";
    modal.className = "cash-modal";

    modal.innerHTML = `
      <div class="cash-modal-backdrop" data-close-cash-modal></div>

      <section class="cash-modal-card" role="dialog" aria-modal="true">
        <h2 id="cashModalTitle">Registrar movimentação</h2>
        <p id="cashModalDescription" class="muted">Informe os dados da movimentação do ciclo.</p>

        <div class="cash-modal-grid">
          <label>
            Origem
            <select id="cashModalSource">
              <option value="">Sem origem</option>
              <option value="operacoes">Contas e operações</option>
              <option value="fundo_caixa">Fundo de caixa</option>
              <option value="acionista_1">Acionista 1</option>
              <option value="acionista_2">Acionista 2</option>
              <option value="acionista_3">Acionista 3</option>
              <option value="ajuste_administrativo">Ajuste administrativo</option>
            </select>
          </label>

          <label>
            Destino
            <select id="cashModalDestination">
              <option value="">Sem destino</option>
              <option value="operacoes">Contas e operações</option>
              <option value="fundo_caixa">Fundo de caixa</option>
              <option value="acionista_1">Acionista 1</option>
              <option value="acionista_2">Acionista 2</option>
              <option value="acionista_3">Acionista 3</option>
              <option value="ajuste_administrativo">Ajuste administrativo</option>
            </select>
          </label>

          <label>
            Valor
            <input id="cashModalAmount" type="number" min="0" step="0.01" placeholder="0,00" />
          </label>

          <label>
            Data
            <input id="cashModalDate" type="date" />
          </label>

          <label class="full">
            Descrição
            <input id="cashModalDescriptionInput" placeholder="Ex.: Pagamento parcial do acionista 1" />
          </label>

          <label class="full">
            Observações
            <textarea id="cashModalNotes" rows="3" placeholder="Opcional"></textarea>
          </label>
        </div>

        <div id="cashModalMessage" class="cash-status"></div>

        <div class="cash-modal-actions">
          <button class="cash-btn ghost" type="button" data-close-cash-modal>Cancelar</button>
          <button class="cash-btn primary" type="button" id="cashModalSaveBtn">Salvar movimentação</button>
        </div>
      </section>
    `;

    document.body.appendChild(modal);
  }

  function renderPanel() {
    if (!state.cycle || !state.totals) {
      return;
    }

    $("cashCyclePeriod").textContent =
      `${formatDateBR(state.cycle.start_date)} a ${formatDateBR(state.cycle.end_date)}`;

    $("cashTotalEntries").textContent = money(state.totals.totalEntries);
    $("cashTotalDebits").textContent = money(state.totals.totalDebits);
    $("cashCycleBalance").textContent = money(state.totals.cycleBalance);
    $("cashCycleStatus").textContent = state.cycle.status === "fechado" ? "Fechado" : "Aberto";

    renderBuckets();
    renderMovements();
  }

  function renderBuckets() {
    const grid = $("cashDistributionGrid");

    if (!grid) return;

    grid.innerHTML = VISIBLE_BUCKET_ORDER.map((bucket) => {
      const item = state.totals.buckets[bucket];
      const config = BUCKETS[bucket];

      return `
        <article class="cash-bucket-card ${safe(config.className)}">
          <div class="cash-bucket-head">
            <h3>${safe(config.label)}</h3>
            <small>${safe(config.percentLabel)}</small>
          </div>

          <div class="cash-bucket-values">
            <div class="cash-value-line">
              <span>Valor previsto</span>
              <strong>${money(item.base)}</strong>
            </div>

            <div class="cash-value-line">
              <span>Entradas internas</span>
              <strong>${money(item.visibleCredits)}</strong>
            </div>

            <div class="cash-value-line">
              <span>Usado / pago</span>
              <strong>${money(item.visibleDebits)}</strong>
            </div>

            <div class="cash-value-line available ${item.available < 0 ? "warning" : ""}">
              <span>Disponível ajustado</span>
              <strong>${money(item.available)}</strong>
            </div>
          </div>

          <div class="cash-bucket-actions">
            ${bucket === "operacoes" ? `
              <button class="cash-btn primary" type="button" data-cash-action="pay-bill" data-bucket="${bucket}">
                Registrar conta paga
              </button>

              <button class="cash-btn ghost" type="button" data-cash-action="transfer-rest" data-bucket="${bucket}">
                Transferir restante
              </button>
            ` : ""}

            ${bucket === "fundo_caixa" ? `
              <button class="cash-btn primary" type="button" data-cash-action="fund-expense" data-bucket="${bucket}">
                Saída do fundo
              </button>
            ` : ""}

            ${bucket.startsWith("acionista") ? `
              <button class="cash-btn primary" type="button" data-cash-action="pay-shareholder-full" data-bucket="${bucket}">
                Pagar total
              </button>

              <button class="cash-btn ghost" type="button" data-cash-action="pay-shareholder-partial" data-bucket="${bucket}">
                Pagamento parcial
              </button>
            ` : ""}
          </div>
        </article>
      `;
    }).join("");
  }

  function renderMovements() {
    const container = $("cashMovementsList");

    if (!container) return;

    const visibleMovements = getVisibleCycleMovements();

    if (!visibleMovements.length) {
      container.innerHTML = `
        <div class="cash-empty">
          Nenhuma movimentação interna visível registrada neste ciclo.
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="cash-movements-table-wrap">
        <table class="cash-movements-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Valor</th>
              <th>Descrição</th>
            </tr>
          </thead>

          <tbody>
            ${visibleMovements.map((movement) => `
              <tr>
                <td>${safe(formatDateBR(movement.movement_date))}</td>

                <td>
                  <span class="cash-badge">
                    ${safe(movementTypeLabel(movement.movement_type))}
                  </span>
                </td>

                <td>
                  ${
                    movement.source_bucket
                      ? `<span class="cash-badge debit">${safe(bucketLabel(movement.source_bucket))}</span>`
                      : "—"
                  }
                </td>

                <td>
                  ${
                    movement.destination_bucket
                      ? `<span class="cash-badge credit">${safe(bucketLabel(movement.destination_bucket))}</span>`
                      : "—"
                  }
                </td>

                <td>
                  <strong>${money(movement.amount)}</strong>
                </td>

                <td>
                  ${safe(movement.description || "")}
                  ${movement.notes ? `<br><small>${safe(movement.notes)}</small>` : ""}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function openMovementModal(action, bucket) {
    const totals = state.totals?.buckets || {};
    const available = totals[bucket]?.available || 0;

    state.modalAction = {
      action,
      bucket
    };

    setModalMessage("");

    $("cashModalAmount").value = "";
    $("cashModalDate").value = todayISO();
    $("cashModalDescriptionInput").value = "";
    $("cashModalNotes").value = "";

    $("cashModalSource").disabled = false;
    $("cashModalDestination").disabled = false;

    if (action === "pay-bill") {
      $("cashModalTitle").textContent = "Registrar conta paga";
      $("cashModalDescription").textContent = "Essa conta será descontada de Contas e operações.";
      $("cashModalSource").value = "operacoes";
      $("cashModalDestination").value = "";
      $("cashModalSource").disabled = true;
      $("cashModalDescriptionInput").value = "Conta paga com recursos de Contas e operações";
    }

    if (action === "fund-expense") {
      $("cashModalTitle").textContent = "Registrar saída do fundo de caixa";
      $("cashModalDescription").textContent = "Essa saída será descontada do Fundo de caixa.";
      $("cashModalSource").value = "fundo_caixa";
      $("cashModalDestination").value = "";
      $("cashModalSource").disabled = true;
      $("cashModalDescriptionInput").value = "Saída registrada no Fundo de caixa";
    }

    if (action === "pay-shareholder-partial") {
      $("cashModalTitle").textContent = `Pagamento parcial — ${bucketLabel(bucket)}`;
      $("cashModalDescription").textContent = "Informe o valor parcial pago ao acionista.";
      $("cashModalSource").value = bucket;
      $("cashModalDestination").value = "";
      $("cashModalSource").disabled = true;
      $("cashModalDescriptionInput").value = `Pagamento parcial — ${bucketLabel(bucket)}`;
    }

    if (action === "pay-shareholder-full") {
      $("cashModalTitle").textContent = `Pagamento total — ${bucketLabel(bucket)}`;
      $("cashModalDescription").textContent = "O valor disponível será lançado como pago ao acionista.";
      $("cashModalSource").value = bucket;
      $("cashModalDestination").value = "";
      $("cashModalAmount").value = Math.max(0, available).toFixed(2);
      $("cashModalSource").disabled = true;
      $("cashModalDescriptionInput").value = `Pagamento total — ${bucketLabel(bucket)}`;
    }

    if (action === "manual-adjust") {
      $("cashModalTitle").textContent = "Lançar ajuste administrativo";
      $("cashModalDescription").textContent =
        "Use somente para correções internas. Esse ajuste não aparecerá nas movimentações visíveis nem no espelho de recolho.";
      $("cashModalSource").value = "";
      $("cashModalDestination").value = "";
      $("cashModalDescriptionInput").value = "Ajuste administrativo do ciclo";
    }

    showModal();
  }

  async function saveMovementFromModal() {
    if (!state.modalAction) {
      setModalMessage("Nenhuma ação selecionada.", "error");
      return;
    }

    const source = $("cashModalSource").value || null;
    const destination = $("cashModalDestination").value || null;
    const amount = Number($("cashModalAmount").value || 0);
    const movementDate = $("cashModalDate").value || todayISO();
    const description = $("cashModalDescriptionInput").value.trim();
    const notes = $("cashModalNotes").value.trim() || null;

    if (!amount || amount <= 0) {
      setModalMessage("Informe um valor maior que zero.", "error");
      return;
    }

    if (!description) {
      setModalMessage("Informe a descrição da movimentação.", "error");
      return;
    }

    if (!source && !destination) {
      setModalMessage("Informe uma origem ou um destino.", "error");
      return;
    }

    const available = source && state.totals?.buckets?.[source]
      ? Number(state.totals.buckets[source].available || 0)
      : null;

    if (source && source !== "ajuste_administrativo" && amount > available) {
      setModalMessage(`Valor maior que o disponível em ${bucketLabel(source)}. Disponível: ${money(available)}.`, "error");
      return;
    }

    let movementType = "saida";

    if (state.modalAction.action === "pay-bill") movementType = "conta_paga";
    if (state.modalAction.action === "fund-expense") movementType = "saida";
    if (state.modalAction.action === "pay-shareholder-full") movementType = "pagamento_acionista";
    if (state.modalAction.action === "pay-shareholder-partial") movementType = "pagamento_acionista";

    if (state.modalAction.action === "manual-adjust") {
      movementType = source && destination ? "transferencia" : destination ? "ajuste_credito" : "ajuste_debito";
    }

    try {
      const payload = {
        school_id: state.school.id,
        cycle_id: state.cycle.id,
        movement_type: movementType,
        source_bucket: source,
        destination_bucket: destination,
        amount,
        movement_date: movementDate,
        description,
        notes,
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client
        .from("finance_cash_cycle_movements")
        .insert(payload);

      if (error) {
        throw error;
      }

      closeModal();
      await reloadCashCycle();

      setMessage("Movimentação registrada com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      setModalMessage(error.message || "Erro ao salvar movimentação.", "error");
    }
  }

  async function transferOperationsRestToFund() {
    const available = Number(state.totals?.buckets?.operacoes?.available || 0);

    if (available <= 0) {
      alert("Não há restante disponível em Contas e operações para transferir.");
      return;
    }

    const confirmMessage =
      `Deseja transferir o restante de Contas e operações para o Fundo de caixa?\n\n` +
      `Valor disponível: ${money(available)}\n\n` +
      `Essa ação zera o saldo disponível de Contas e operações e aumenta o Fundo de caixa.`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      const payload = {
        school_id: state.school.id,
        cycle_id: state.cycle.id,
        movement_type: "transferencia",
        source_bucket: "operacoes",
        destination_bucket: "fundo_caixa",
        amount: available,
        movement_date: todayISO(),
        description: "Transferência do restante de Contas e operações para o Fundo de caixa",
        notes: "Transferência realizada após pagamento das contas do ciclo.",
        created_by: state.user.id,
        updated_at: new Date().toISOString()
      };

      const { error } = await client
        .from("finance_cash_cycle_movements")
        .insert(payload);

      if (error) {
        throw error;
      }

      await reloadCashCycle();

      setMessage("Restante de Contas e operações transferido para o Fundo de caixa.", "ok");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao transferir restante para o fundo.", "error");
    }
  }

  async function closeCycle() {
    if (!state.cycle) {
      alert("Ciclo não carregado.");
      return;
    }

    if (state.cycle.status === "fechado") {
      alert("Este ciclo já está fechado.");
      return;
    }

    const pendingShareholders = ["acionista_1", "acionista_2", "acionista_3"]
      .filter((bucket) => Number(state.totals?.buckets?.[bucket]?.available || 0) > 0.01);

    let message =
      `Deseja fechar o ciclo ${formatDateBR(state.cycle.start_date)} a ${formatDateBR(state.cycle.end_date)}?\n\n` +
      `Total recebido: ${money(state.totals.totalEntries)}\n` +
      `Total utilizado/pago: ${money(state.totals.totalDebits)}\n` +
      `Saldo do ciclo: ${money(state.totals.cycleBalance)}\n`;

    if (pendingShareholders.length) {
      message += `\nAtenção: ainda há saldo disponível para acionistas.\n`;
    }

    message += `\nApós fechar, evite alterar movimentações deste ciclo.`;

    if (!confirm(message)) {
      return;
    }

    try {
      const { error } = await client
        .from("finance_cash_cycles")
        .update({
          status: "fechado",
          closed_at: new Date().toISOString(),
          closed_by: state.user.id,
          updated_at: new Date().toISOString()
        })
        .eq("id", state.cycle.id)
        .eq("school_id", state.school.id);

      if (error) {
        throw error;
      }

      await reloadCashCycle();

      setMessage("Ciclo fechado com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao fechar ciclo.", "error");
    }
  }

  function printCycleReport() {
    if (!state.cycle || !state.totals) {
      alert("Carregue o ciclo antes de imprimir.");
      return;
    }

    const bucketRows = VISIBLE_BUCKET_ORDER
      .map((bucket) => {
        const item = state.totals.buckets[bucket];

        return `
          <tr>
            <td>${safe(item.label)}</td>
            <td>${safe(item.percentLabel)}</td>
            <td>${money(item.base)}</td>
            <td>${money(item.visibleCredits)}</td>
            <td>${money(item.visibleDebits)}</td>
            <td>${money(item.available)}</td>
          </tr>
        `;
      }).join("");

    const visibleMovements = getVisibleCycleMovements();

    const movementRows = visibleMovements.length
      ? visibleMovements.map((m) => `
        <tr>
          <td>${safe(formatDateBR(m.movement_date))}</td>
          <td>${safe(movementTypeLabel(m.movement_type))}</td>
          <td>${m.source_bucket ? safe(bucketLabel(m.source_bucket)) : "—"}</td>
          <td>${m.destination_bucket ? safe(bucketLabel(m.destination_bucket)) : "—"}</td>
          <td>${money(m.amount)}</td>
          <td>${safe(m.description || "")}</td>
        </tr>
      `).join("")
      : `<tr><td colspan="6">Nenhuma movimentação interna visível registrada.</td></tr>`;

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Relatório do Recolho do Caixa</title>
  <style>
    @page { size: A4; margin: 14mm; }
    body { font-family: Arial, Helvetica, sans-serif; color:#12322a; font-size:12px; }
    h1 { color:#0b5242; margin-bottom:4px; }
    h2 { color:#0b5242; margin-top:24px; }
    .box { border:1px solid #cfe5d8; border-radius:10px; padding:12px; margin:12px 0; background:#f8fcfa; }
    table { width:100%; border-collapse:collapse; margin-top:10px; }
    th, td { border-bottom:1px solid #dfeae4; text-align:left; padding:8px; vertical-align:top; }
    th { color:#0b5242; background:#eef7f2; }
    .footer { margin-top:40px; display:grid; grid-template-columns:1fr 1fr; gap:40px; }
    .sig { border-top:1px solid #12322a; text-align:center; padding-top:8px; }
    .note { font-size:11px; color:#567; margin-top:8px; }
  </style>
</head>
<body>
  <h1>INTEGRO — Relatório do Recolho do Caixa</h1>
  <p>Ciclo empresarial: ${safe(formatDateBR(state.cycle.start_date))} a ${safe(formatDateBR(state.cycle.end_date))}</p>

  <div class="box">
    <strong>Total recebido:</strong> ${money(state.totals.totalEntries)}<br>
    <strong>Total utilizado/pago:</strong> ${money(state.totals.totalDebits)}<br>
    <strong>Saldo do ciclo:</strong> ${money(state.totals.cycleBalance)}<br>
    <strong>Status:</strong> ${safe(state.cycle.status)}
  </div>

  <p class="note">
    Observação: ajustes administrativos são controles internos e não são exibidos neste espelho de recolho.
  </p>

  <h2>Distribuição do ciclo</h2>
  <table>
    <thead>
      <tr>
        <th>Destino</th>
        <th>%</th>
        <th>Previsto</th>
        <th>Entradas internas</th>
        <th>Usado/Pago</th>
        <th>Disponível</th>
      </tr>
    </thead>
    <tbody>${bucketRows}</tbody>
  </table>

  <h2>Movimentações internas</h2>
  <table>
    <thead>
      <tr>
        <th>Data</th>
        <th>Tipo</th>
        <th>Origem</th>
        <th>Destino</th>
        <th>Valor</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>${movementRows}</tbody>
  </table>

  <div class="footer">
    <div class="sig">Responsável financeiro</div>
    <div class="sig">Direção / Administração</div>
  </div>

  <script>
    window.onload = function () {
      window.focus();
      window.print();
    };
  <\/script>
</body>
</html>
`;

    const win = window.open("", "_blank");

    if (!win) {
      alert("Permita pop-ups para imprimir o relatório.");
      return;
    }

    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  function bindPanelEvents() {
    document.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-cash-action]");

      if (actionButton) {
        const action = actionButton.dataset.cashAction;
        const bucket = actionButton.dataset.bucket;

        if (action === "transfer-rest") {
          transferOperationsRestToFund();
          return;
        }

        openMovementModal(action, bucket);
        return;
      }

      if (event.target.closest("[data-close-cash-modal]")) {
        closeModal();
      }
    });

    $("cashRefreshBtn")?.addEventListener("click", reloadCashCycle);
    $("cashPrintBtn")?.addEventListener("click", printCycleReport);
    $("cashCloseCycleBtn")?.addEventListener("click", closeCycle);

    $("cashManualAdjustBtn")?.addEventListener("click", () => {
      openMovementModal("manual-adjust", "ajuste_administrativo");
    });

    $("cashModalSaveBtn")?.addEventListener("click", saveMovementFromModal);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }

  async function reloadCashCycle() {
    try {
      setMessage("Carregando ciclo empresarial...", "warn");

      await loadCycleData();
      renderPanel();

      setMessage("Ciclo empresarial atualizado com sucesso.", "ok");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao carregar Recolho do Caixa.", "error");
    }
  }

  function interceptExpenseForm() {
    const form = $("expenseForm");

    if (!form) {
      return;
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      try {
        if (!state.cycle) {
          await reloadCashCycle();
        }

        const bucket = $("expenseAllocationBucket")?.value || "";

        if (!bucket) {
          alert("Selecione de onde essa saída vai sair.");
          return;
        }

        const amount = Number($("expenseAmount")?.value || 0);

        if (!amount || amount <= 0) {
          alert("Informe um valor válido para a saída.");
          return;
        }

        const available = bucket !== "ajuste_administrativo"
          ? Number(state.totals?.buckets?.[bucket]?.available || 0)
          : amount;

        if (bucket !== "ajuste_administrativo" && amount > available) {
          alert(
            `O valor da saída é maior que o disponível em ${bucketLabel(bucket)}.\n\n` +
            `Disponível: ${money(available)}`
          );
          return;
        }

        const expenseDate = $("expenseDate")?.value || todayISO();
        const description = $("expenseDescription")?.value?.trim() || "";
        const paidTo = $("paidTo")?.value?.trim() || "";
        const paidByName = $("paidByName")?.value?.trim() || "";
        const category = $("expenseCategory")?.value?.trim() || null;
        const notes = $("expenseNotes")?.value?.trim() || null;

        if (!description || !paidTo || !paidByName) {
          alert("Preencha descrição, valor, destino e origem da saída.");
          return;
        }

        const expensePayload = {
          school_id: state.school.id,
          description,
          amount,
          paid_to: paidTo,
          paid_by_name: paidByName,
          category,
          expense_date: expenseDate,
          notes,
          allocation_bucket: bucket,
          cash_cycle_id: state.cycle.id,
          created_by: state.user.id
        };

        const { data: expense, error: expenseError } = await client
          .from("finance_expenses")
          .insert(expensePayload)
          .select("*")
          .single();

        if (expenseError) {
          throw expenseError;
        }

        const movementPayload = {
          school_id: state.school.id,
          cycle_id: state.cycle.id,
          movement_type: bucket === "operacoes" ? "conta_paga" : "saida",
          source_bucket: bucket,
          destination_bucket: null,
          amount,
          movement_date: expenseDate,
          description: `Saída registrada: ${description}`,
          notes: notes || `Destino: ${paidTo}. Lançado por: ${paidByName}.`,
          related_expense_id: expense?.id || null,
          created_by: state.user.id,
          updated_at: new Date().toISOString()
        };

        const { data: movement, error: movementError } = await client
          .from("finance_cash_cycle_movements")
          .insert(movementPayload)
          .select("*")
          .single();

        if (movementError) {
          throw movementError;
        }

        if (expense?.id && movement?.id) {
          await client
            .from("finance_expenses")
            .update({
              related_cash_movement_id: movement.id
            })
            .eq("id", expense.id);
        }

        alert("Saída registrada e vinculada ao Recolho do Caixa com sucesso.");

        form.reset();

        await reloadCashCycle();

        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        console.error(error);
        alert(error.message || "Erro ao registrar saída no Recolho do Caixa.");
      }
    }, true);
  }

  async function init() {
    createPanel();
    bindPanelEvents();

    try {
      await loadContext();
      await reloadCashCycle();
      interceptExpenseForm();
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao iniciar Recolho do Caixa.", "error");
    }
  }

  window.addEventListener("DOMContentLoaded", init);
})();
