(function () {
  if (window.__RECOLHO_ACIONISTA_LIMITE__) return;
  window.__RECOLHO_ACIONISTA_LIMITE__ = true;

  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;
  if (!cfg || !supabaseGlobal?.createClient) return;

  const db = supabaseGlobal.createClient(cfg.url, cfg.anonKey);
  const cyclePolicy = window.INTEGRO_FINANCE_CYCLE_POLICY;
  if (!cyclePolicy?.getCurrentCycleRange) return;
  const NEGATIVE_LIMIT = -1000;
  const SHAREHOLDERS = ["acionista_1", "acionista_2", "acionista_3"];
  const BUCKET_ORDER = ["operacoes", "fundo_caixa", ...SHAREHOLDERS];
  const PERCENTAGES = {
    operacoes: 0.30,
    fundo_caixa: 0.10,
    acionista_1: 0.20,
    acionista_2: 0.20,
    acionista_3: 0.20,
  };
  const LABELS = {
    operacoes: "Contas e operações",
    fundo_caixa: "Fundo de caixa",
    acionista_1: "Acionista 1",
    acionista_2: "Acionista 2",
    acionista_3: "Acionista 3",
  };

  const $ = (id) => document.getElementById(id);
  const isShareholder = (bucket) => SHAREHOLDERS.includes(bucket);

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function currentCycleRange(reference = new Date()) {
    return cyclePolicy.getCurrentCycleRange(reference);
  }

  function currentCycleDefaultDate(cycle) {
    const today = cyclePolicy.referenceISO(new Date());
    if (!cycle) return today;
    if (today < cycle.start_date) return cycle.start_date;
    if (today > cycle.end_date) return cycle.end_date;
    return today;
  }

  function ordinaryActivityBlockReason(cycle = window.INTEGRO_FINANCE_CURRENT_CYCLE) {
    if (String(cycle?.status || "").toLowerCase() === "fechado") {
      return "Este ciclo já foi fechado. Nenhuma movimentação comum pode ser registrada nele.";
    }
    if (currentCycleRange().isClosingWindow) {
      return "Dias 9 e 10/09 são reservados ao fechamento. Movimentações comuns voltam em 11/09.";
    }
    return "";
  }

  // Ajustes da RPC segura afetam o saldo; detalhes continuam ocultos.
  // Reconciliações legadas, já arquivadas, não voltam a compor o caixa.
  function affectsBalance(movement) {
    return !isAdministrative(movement)
      || movement?.description === "[AJUSTE ADMINISTRATIVO] Ajuste autorizado";
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

  function unrepresentedExpenses(expenses, movements) {
    const representedExpenseIds = new Set(
      movements.map((movement) => movement.related_expense_id).filter(Boolean)
    );
    const movementIds = new Set(movements.map((movement) => movement.id).filter(Boolean));

    return (expenses || []).filter((expense) => {
      const text = `${expense?.description || ""} ${expense?.notes || ""}`.toLowerCase();
      if (
        String(expense?.allocation_bucket || "").toLowerCase() === "ajuste_administrativo" ||
        text.includes("ajuste administrativo") ||
        text.includes("ajuste interno")
      ) {
        return false;
      }
      if (representedExpenseIds.has(expense.id)) return false;
      if (expense.related_cash_movement_id && movementIds.has(expense.related_cash_movement_id)) {
        return false;
      }
      if (expense.cash_movement_id && movementIds.has(expense.cash_movement_id)) {
        return false;
      }
      return true;
    });
  }

  function dedupeMovementsByExpense(movements) {
    const seenExpenseIds = new Set();
    return (movements || []).filter((movement) => {
      if (!movement.related_expense_id) return true;
      if (seenExpenseIds.has(movement.related_expense_id)) return false;
      seenExpenseIds.add(movement.related_expense_id);
      return true;
    });
  }

  function calculateBuckets(entries, movements, expenses) {
    const totalEntries = (entries || []).reduce(
      (sum, entry) => sum + Number(entry.amount_paid || 0),
      0
    );
    const balanceMovements = dedupeMovementsByExpense(movements).filter(affectsBalance);
    const unlinkedExpenses = unrepresentedExpenses(expenses || [], balanceMovements);
    const buckets = {};

    BUCKET_ORDER.forEach((bucket) => {
      buckets[bucket] = {
        base: totalEntries * PERCENTAGES[bucket],
        debits: 0,
        credits: 0,
        available: totalEntries * PERCENTAGES[bucket],
      };
    });

    balanceMovements.forEach((movement) => {
      const amount = Number(movement.amount || 0);
      if (movement.source_bucket && buckets[movement.source_bucket]) {
        buckets[movement.source_bucket].debits += amount;
      }
      if (movement.destination_bucket && buckets[movement.destination_bucket]) {
        buckets[movement.destination_bucket].credits += amount;
      }
    });

    unlinkedExpenses.forEach((expense) => {
      const bucket = BUCKET_ORDER.includes(expense.allocation_bucket)
        ? expense.allocation_bucket
        : "operacoes";
      buckets[bucket].debits += Number(expense.amount || 0);
    });

    BUCKET_ORDER.forEach((bucket) => {
      const item = buckets[bucket];
      item.available = item.base + item.credits - item.debits;
    });

    return buckets;
  }

  async function loadContext() {
    const userResult = await db.auth.getUser();
    if (userResult.error || !userResult.data?.user) {
      throw new Error("Usuário não autenticado.");
    }

    const user = userResult.data.user;
    const profileResult = await db
      .from("profiles")
      .select("id, school_id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileResult.error || !profileResult.data) {
      throw new Error("Perfil não encontrado.");
    }

    const schoolResult = await db
      .from("schools")
      .select("id, name")
      .eq("id", profileResult.data.school_id)
      .maybeSingle();

    if (schoolResult.error || !schoolResult.data) {
      throw new Error("Unidade não encontrada.");
    }

    const range = currentCycleRange();
    const findCycle = () => db
      .from("finance_cash_cycles")
      .select("*")
      .eq("school_id", schoolResult.data.id)
      .eq("cycle_key", range.key)
      .eq("start_date", range.start)
      .eq("end_date", range.end)
      .maybeSingle();

    const existingCycleResult = await findCycle();
    if (existingCycleResult.error) throw existingCycleResult.error;

    let cycle = existingCycleResult.data;
    if (!cycle) {
      if (range.isClosingWindow) {
        throw new Error("O ciclo de transição não foi encontrado e não pode ser criado durante a janela de fechamento.");
      }

      const insertCycleResult = await db
        .from("finance_cash_cycles")
        .insert({
          school_id: schoolResult.data.id,
          cycle_key: range.key,
          start_date: range.start,
          end_date: range.end,
          status: "aberto",
          created_by: user.id,
          updated_at: new Date().toISOString(),
        })
        .select("*")
        .single();

      if (insertCycleResult.error?.code === "23505") {
        const retryCycleResult = await findCycle();
        if (retryCycleResult.error || !retryCycleResult.data) {
          throw retryCycleResult.error || insertCycleResult.error;
        }
        cycle = retryCycleResult.data;
      } else {
        if (insertCycleResult.error) throw insertCycleResult.error;
        cycle = insertCycleResult.data;
      }
    }

    return {
      user,
      school: schoolResult.data,
      cycle,
    };
  }

  async function currentCycleSnapshot() {
    const context = await loadContext();
    const { cycle, school } = context;

    const [entriesResult, expensesResult, movementsResult] = await Promise.all([
      db
        .from("finance_entries")
        .select("id, entry_date, amount_paid")
        .eq("school_id", school.id)
        .gte("entry_date", cycle.start_date)
        .lte("entry_date", cycle.end_date),
      db
        .from("finance_expenses")
        .select("*")
        .eq("school_id", school.id)
        .gte("expense_date", cycle.start_date)
        .lte("expense_date", cycle.end_date),
      db
        .from("finance_cash_cycle_movements")
        .select("*")
        .eq("school_id", school.id)
        .eq("cycle_id", cycle.id)
        .gte("movement_date", cycle.start_date)
        .lte("movement_date", cycle.end_date),
    ]);

    if (entriesResult.error) throw entriesResult.error;
    if (expensesResult.error) throw expensesResult.error;
    if (movementsResult.error) throw movementsResult.error;

    return {
      ...context,
      buckets: calculateBuckets(
        entriesResult.data || [],
        movementsResult.data || [],
        expensesResult.data || []
      ),
    };
  }

  function ensureStyles() {
    if ($("negAcCss")) return;

    const style = document.createElement("style");
    style.id = "negAcCss";
    style.textContent = `
      .cash-value-line.available.warning strong { color: #b42318 !important; }
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
    `;
    document.head.appendChild(style);
  }

  function modalMessage(message, type = "ok") {
    const element = $("cashModalMessage");
    if (!element) return;
    element.textContent = message || "";
    element.className = message ? `cash-status show ${type}` : "cash-status";
  }

  function panelMessage(message, type = "ok") {
    const element = $("cashCycleMessage");
    if (!element) return;
    element.textContent = message || "";
    element.className = message ? `cash-status show ${type}` : "cash-status";
  }

  function checkLimit(snapshot, source, amount) {
    const available = Number(snapshot.buckets[source]?.available || 0);
    const projected = available - amount;
    return {
      ok: projected >= NEGATIVE_LIMIT - 0.009,
      available,
      projected,
    };
  }

  function isDateInCurrentCycle(date, cycle) {
    return date >= cycle.start_date && date <= cycle.end_date;
  }

  function negativeConfirmation(label, projected) {
    return (
      `${label} ficará com saldo negativo de ${money(projected)}.\n` +
      "Esse valor afeta somente o ciclo atual; o próximo ciclo começa em R$ 0,00.\n" +
      "Confirmar?"
    );
  }

  function negativeNote(projected) {
    return (
      `Saldo negativo autorizado: ${money(projected)}. ` +
      `Válido somente no ciclo atual; o próximo ciclo começa em R$ 0,00. ` +
      `Limite: ${money(NEGATIVE_LIMIT)}.`
    );
  }

  async function saveShareholderMovement(event) {
    if ($("cashMovementModal")?.dataset.action === "manual-adjust") return;

    const source = $("cashModalSource")?.value || null;
    const destination = $("cashModalDestination")?.value || null;
    // Any administrative endpoint must reach the base authorization handler,
    // even when this dialog was opened through a shareholder payment button.
    if (source === "ajuste_administrativo" || destination === "ajuste_administrativo") return;
    if (!isShareholder(source)) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const immediateBlockReason = ordinaryActivityBlockReason();
    if (immediateBlockReason) {
      modalMessage(immediateBlockReason, "error");
      return;
    }

    const button = $("cashModalSaveBtn");
    const amount = Number($("cashModalAmount")?.value || 0);
    const movementDate = $("cashModalDate")?.value || cyclePolicy.referenceISO(new Date());
    const description = $("cashModalDescriptionInput")?.value.trim() || "";
    const notes = $("cashModalNotes")?.value.trim() || null;

    if (!amount || amount <= 0) {
      modalMessage("Informe um valor maior que zero.", "error");
      return;
    }
    if (!description) {
      modalMessage("Informe a descrição da movimentação.", "error");
      return;
    }

    try {
      if (button) button.disabled = true;

      const snapshot = await currentCycleSnapshot();
      const blockReason = ordinaryActivityBlockReason(snapshot.cycle);
      if (blockReason) {
        modalMessage(blockReason, "error");
        return;
      }
      if (!isDateInCurrentCycle(movementDate, snapshot.cycle)) {
        modalMessage(
          `Use uma data entre ${snapshot.cycle.start_date} e ${snapshot.cycle.end_date}, que é o ciclo atual.`,
          "error"
        );
        return;
      }

      const limit = checkLimit(snapshot, source, amount);
      if (!limit.ok) {
        modalMessage(
          `Retirada bloqueada. ${LABELS[source]} ficaria com ${money(limit.projected)}. ` +
          `Limite permitido: ${money(NEGATIVE_LIMIT)}. ` +
          `Valor máximo para retirar agora: ${money(Math.max(0, limit.available - NEGATIVE_LIMIT))}.`,
          "error"
        );
        return;
      }

      if (
        limit.projected < 0 &&
        !confirm(negativeConfirmation(LABELS[source], limit.projected))
      ) {
        modalMessage("Retirada cancelada.", "error");
        return;
      }

      const result = await db.from("finance_cash_cycle_movements").insert({
        school_id: snapshot.school.id,
        cycle_id: snapshot.cycle.id,
        movement_type: destination ? "transferencia" : "pagamento_acionista",
        source_bucket: source,
        destination_bucket: destination,
        amount,
        movement_date: movementDate,
        description,
        notes: [notes, limit.projected < 0 ? negativeNote(limit.projected) : null]
          .filter(Boolean)
          .join(" | ") || null,
        created_by: snapshot.user.id,
      });

      if (result.error) throw result.error;

      $("cashMovementModal")?.classList.remove("show");
      panelMessage(
        limit.projected < 0
          ? `Retirada registrada. ${LABELS[source]} ficou com ${money(limit.projected)} somente neste ciclo.`
          : "Retirada registrada com sucesso.",
        "ok"
      );
      $("cashRefreshBtn")?.click();
    } catch (error) {
      console.error(error);
      modalMessage(error.message || "Erro ao registrar retirada.", "error");
    } finally {
      if (button) button.disabled = false;
    }
  }

  async function saveShareholderExpense(event) {
    const bucket = $("expenseAllocationBucket")?.value || "";
    if (!isShareholder(bucket)) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const immediateBlockReason = ordinaryActivityBlockReason();
    if (immediateBlockReason) {
      alert(immediateBlockReason);
      return;
    }

    const amount = Number($("expenseAmount")?.value || 0);
    const expenseDate = $("expenseDate")?.value || cyclePolicy.referenceISO(new Date());
    const description = $("expenseDescription")?.value?.trim() || "";
    const paidTo = $("paidTo")?.value?.trim() || "";
    const paidBy = $("paidByName")?.value?.trim() || "";
    const category = $("expenseCategory")?.value?.trim() || null;
    const notes = $("expenseNotes")?.value?.trim() || null;

    if (!amount || amount <= 0) {
      alert("Informe um valor válido para a saída.");
      return;
    }
    if (!description || !paidTo || !paidBy) {
      alert("Preencha descrição, valor, destino e origem da saída.");
      return;
    }

    try {
      const snapshot = await currentCycleSnapshot();
      const blockReason = ordinaryActivityBlockReason(snapshot.cycle);
      if (blockReason) {
        alert(blockReason);
        return;
      }
      if (!isDateInCurrentCycle(expenseDate, snapshot.cycle)) {
        alert(
          `Use uma data entre ${snapshot.cycle.start_date} e ${snapshot.cycle.end_date}, que é o ciclo atual.`
        );
        return;
      }

      const limit = checkLimit(snapshot, bucket, amount);
      if (!limit.ok) {
        alert(
          `Saída bloqueada. ${LABELS[bucket]} ficaria com ${money(limit.projected)}. ` +
          `Limite permitido: ${money(NEGATIVE_LIMIT)}. ` +
          `Valor máximo para retirar agora: ${money(Math.max(0, limit.available - NEGATIVE_LIMIT))}.`
        );
        return;
      }

      if (
        limit.projected < 0 &&
        !confirm(negativeConfirmation(LABELS[bucket], limit.projected))
      ) {
        return;
      }

      const expenseResult = await db
        .from("finance_expenses")
        .insert({
          school_id: snapshot.school.id,
          description,
          amount,
          paid_to: paidTo,
          paid_by_name: paidBy,
          category,
          expense_date: expenseDate,
          notes,
          allocation_bucket: bucket,
          cash_cycle_id: snapshot.cycle.id,
          created_by: snapshot.user.id,
        })
        .select("*")
        .single();

      if (expenseResult.error) throw expenseResult.error;

      const movementResult = await db
        .from("finance_cash_cycle_movements")
        .insert({
          school_id: snapshot.school.id,
          cycle_id: snapshot.cycle.id,
          movement_type: "saida",
          source_bucket: bucket,
          destination_bucket: null,
          amount,
          movement_date: expenseDate,
          description: `Saída registrada: ${description}`,
          notes: [
            notes || `Destino: ${paidTo}. Lançado por: ${paidBy}.`,
            limit.projected < 0 ? negativeNote(limit.projected) : null,
          ]
            .filter(Boolean)
            .join(" | "),
          related_expense_id: expenseResult.data?.id || null,
          created_by: snapshot.user.id,
        })
        .select("*")
        .single();

      if (movementResult.error) throw movementResult.error;

      if (expenseResult.data?.id && movementResult.data?.id) {
        await db
          .from("finance_expenses")
          .update({ related_cash_movement_id: movementResult.data.id })
          .eq("id", expenseResult.data.id);
      }

      event.target.reset();
      const expenseDateInput = $("expenseDate");
      if (expenseDateInput) expenseDateInput.value = currentCycleDefaultDate(snapshot.cycle);
      panelMessage(
        limit.projected < 0
          ? `Saída registrada. ${LABELS[bucket]} ficou com ${money(limit.projected)} somente neste ciclo.`
          : "Saída registrada com sucesso.",
        "ok"
      );
      $("cashRefreshBtn")?.click();
    } catch (error) {
      console.error(error);
      alert(error.message || "Erro ao registrar saída.");
    }
  }

  function start() {
    ensureStyles();
    document.addEventListener(
      "click",
      (event) => {
        if (event.target?.closest?.("#cashModalSaveBtn")) {
          saveShareholderMovement(event);
        }
      },
      true
    );
    document.addEventListener(
      "submit",
      (event) => {
        if (event.target?.id === "expenseForm") {
          saveShareholderExpense(event);
        }
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
