/*
  INTEGRO — Painel mensal de mensalidades compacto

  Funções:
  - Mostra atrasados, vencendo hoje, a vencer e pagos.
  - Mostra os cartões em rolagem lateral, sem empurrar a página para baixo.
  - Botão "Baixar sem caixa" registra pagamento direto.
  - Botão "Enviar ao caixa" mantém o fluxo com desconto.
*/

(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  if (!cfg || !cfg.url || !cfg.anonKey || !supabaseGlobal?.createClient) {
    console.warn("INTEGRO: configuração do Supabase não encontrada para o painel de mensalidades.");
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  const state = {
    user: null,
    profile: null,
    school: null,
    students: [],
    packages: [],
    entries: [],
    rows: [],
    selectedMonth: currentMonthValue(),
    activeFilter: "todos",
    selectedStudentForPayment: null
  };

  function $(id) {
    return document.getElementById(id);
  }

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
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

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function currentMonthValue() {
    const now = new Date();
    return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}`;
  }

  function todayISO() {
    const now = new Date();
    return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  }

  function monthParts(monthValue) {
    const [year, month] = String(monthValue || currentMonthValue()).split("-").map(Number);

    return {
      year,
      month,
      monthIndex: month - 1
    };
  }

  function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function buildDueDate(monthValue, dueDay) {
    const { year, monthIndex } = monthParts(monthValue);
    const lastDay = daysInMonth(year, monthIndex);
    const safeDay = Math.min(Number(dueDay || 1), lastDay);

    return new Date(year, monthIndex, safeDay);
  }

  function dateOnly(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function diffDays(dateA, dateB) {
    const ms = 1000 * 60 * 60 * 24;
    return Math.round((dateOnly(dateA) - dateOnly(dateB)) / ms);
  }

  function monthLabel(monthValue) {
    const { year, monthIndex } = monthParts(monthValue);

    return new Date(year, monthIndex, 1).toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric"
    });
  }

  function monthStartEndISO(monthValue) {
    const { year, monthIndex } = monthParts(monthValue);
    const start = new Date(year, monthIndex, 1);
    const end = new Date(year, monthIndex + 1, 1);

    return {
      start,
      end,
      startISO: start.toISOString(),
      endISO: end.toISOString()
    };
  }

  function formatDateBR(date) {
    if (!date) return "—";

    return date.toLocaleDateString("pt-BR");
  }

  function getPackageById(packageId) {
    return state.packages.find((item) => item.id === packageId) || null;
  }

  function setMessage(message, type) {
    const box = $("tuitionPanelMessage");

    if (!box) return;

    box.textContent = message || "";
    box.className = `tuition-message show ${type || "ok"}`;

    if (!message) {
      box.className = "tuition-message";
    }
  }

  function createPanel() {
    if ($("monthlyTuitionPanel")) {
      return;
    }

    const panel = document.createElement("section");
    panel.id = "monthlyTuitionPanel";
    panel.className = "tuition-panel";

    panel.innerHTML = `
      <div class="tuition-panel-head">
        <div>
          <p class="eyebrow">ACOMPANHAMENTO DE MENSALIDADES</p>
          <h2>Painel mensal compacto</h2>
          <p class="muted">
            Controle os pagamentos por mês. Os alunos aparecem em cartões laterais para não alongar a tela.
          </p>
        </div>

        <div class="tuition-month-controls">
          <button class="tuition-btn ghost" type="button" id="tuitionPrevMonthBtn">Mês anterior</button>
          <input id="tuitionMonthInput" type="month" />
          <button class="tuition-btn ghost" type="button" id="tuitionNextMonthBtn">Próximo mês</button>
          <button class="tuition-btn primary" type="button" id="tuitionRefreshBtn">Atualizar</button>
        </div>
      </div>

      <div id="tuitionPanelMessage" class="tuition-message"></div>

      <div class="tuition-warning">
        Use <strong>Baixar sem caixa</strong> para pagamento sem desconto. 
        Use <strong>Enviar ao caixa</strong> quando precisar aplicar desconto ou ajustar valores.
      </div>

      <section class="tuition-kpis">
        <article class="tuition-kpi danger">
          <small>Atrasados</small>
          <strong id="tuitionLateCount">0</strong>
        </article>

        <article class="tuition-kpi today">
          <small>Vencem hoje</small>
          <strong id="tuitionTodayCount">0</strong>
        </article>

        <article class="tuition-kpi soon">
          <small>Vão vencer</small>
          <strong id="tuitionSoonCount">0</strong>
        </article>

        <article class="tuition-kpi paid">
          <small>Pagos no mês</small>
          <strong id="tuitionPaidCount">0</strong>
        </article>
      </section>

      <div class="tuition-filter-row">
        <button class="tuition-filter active" type="button" data-tuition-filter="todos">Todos</button>
        <button class="tuition-filter" type="button" data-tuition-filter="atrasado">Atrasados</button>
        <button class="tuition-filter" type="button" data-tuition-filter="hoje">Vencem hoje</button>
        <button class="tuition-filter" type="button" data-tuition-filter="vencer">Vão vencer</button>
        <button class="tuition-filter" type="button" data-tuition-filter="pago">Pagos</button>
      </div>

      <section class="tuition-compact-area">
        <article class="tuition-lane" data-lane="atrasado">
          <div class="tuition-lane-head">
            <div class="tuition-lane-title">
              <h3>Atrasados</h3>
              <p>Vencimento anterior ao dia vigente e sem baixa no mês.</p>
            </div>

            <div class="tuition-scroll-actions">
              <span class="tuition-lane-counter danger" id="tuitionLateLaneCount">0</span>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionLateList" data-scroll-dir="-1">‹</button>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionLateList" data-scroll-dir="1">›</button>
            </div>
          </div>

          <div class="tuition-scroll-wrap">
            <div id="tuitionLateList" class="tuition-scroll"></div>
          </div>
        </article>

        <article class="tuition-lane" data-lane="hoje">
          <div class="tuition-lane-head">
            <div class="tuition-lane-title">
              <h3>Vencem hoje</h3>
              <p>Mensalidades que vencem exatamente no dia vigente.</p>
            </div>

            <div class="tuition-scroll-actions">
              <span class="tuition-lane-counter today" id="tuitionTodayLaneCount">0</span>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionTodayList" data-scroll-dir="-1">‹</button>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionTodayList" data-scroll-dir="1">›</button>
            </div>
          </div>

          <div class="tuition-scroll-wrap">
            <div id="tuitionTodayList" class="tuition-scroll"></div>
          </div>
        </article>

        <article class="tuition-lane" data-lane="vencer">
          <div class="tuition-lane-head">
            <div class="tuition-lane-title">
              <h3>Vão vencer</h3>
              <p>Mensalidades com vencimento posterior ao dia vigente.</p>
            </div>

            <div class="tuition-scroll-actions">
              <span class="tuition-lane-counter" id="tuitionSoonLaneCount">0</span>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionSoonList" data-scroll-dir="-1">‹</button>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionSoonList" data-scroll-dir="1">›</button>
            </div>
          </div>

          <div class="tuition-scroll-wrap">
            <div id="tuitionSoonList" class="tuition-scroll"></div>
          </div>
        </article>

        <article class="tuition-lane" data-lane="pago">
          <div class="tuition-lane-head">
            <div class="tuition-lane-title">
              <h3>Pagos</h3>
              <p>Alunos com mensalidade baixada no mês selecionado.</p>
            </div>

            <div class="tuition-scroll-actions">
              <span class="tuition-lane-counter paid" id="tuitionPaidLaneCount">0</span>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionPaidList" data-scroll-dir="-1">‹</button>
              <button class="tuition-arrow" type="button" data-scroll-target="tuitionPaidList" data-scroll-dir="1">›</button>
            </div>
          </div>

          <div class="tuition-scroll-wrap">
            <div id="tuitionPaidList" class="tuition-scroll"></div>
          </div>
        </article>
      </section>
    `;

    const mount = document.getElementById("monthlyTuitionPanelMount");

    if (mount) {
      mount.innerHTML = "";
      mount.appendChild(panel);
    } else {
      const main = document.querySelector("main.page") || document.body;
      main.prepend(panel);
    }

    createPaymentModal();
  }

  function createPaymentModal() {
    if ($("tuitionPaymentModal")) {
      return;
    }

    const modal = document.createElement("div");
    modal.id = "tuitionPaymentModal";
    modal.className = "tuition-modal";

    modal.innerHTML = `
      <div class="tuition-modal-backdrop" data-close-tuition-modal></div>

      <section class="tuition-modal-card" role="dialog" aria-modal="true" aria-labelledby="tuitionPaymentTitle">
        <h2 id="tuitionPaymentTitle">Baixar mensalidade sem caixa</h2>
        <p class="muted" id="tuitionPaymentDescription">
          Esta baixa registra o pagamento direto, sem desconto. Para desconto ou ajuste de valor, use "Enviar ao caixa".
        </p>

        <div class="tuition-modal-grid">
          <label>
            Aluno
            <input id="tuitionPayStudentName" disabled />
          </label>

          <label>
            Competência
            <input id="tuitionPayCompetence" disabled />
          </label>

          <label>
            Pacote
            <input id="tuitionPayPackage" disabled />
          </label>

          <label>
            Valor
            <input id="tuitionPayAmount" disabled />
          </label>

          <label>
            Forma de pagamento
            <select id="tuitionPayMethod">
              <option value="PIX">PIX</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Transferência">Transferência</option>
              <option value="Outro">Outro</option>
            </select>
          </label>

          <label>
            Recebido de
            <input id="tuitionPayPayer" disabled />
          </label>

          <label class="full">
            Observação
            <textarea id="tuitionPayNotes" rows="2" placeholder="Opcional. Ex.: pagamento confirmado por PIX."></textarea>
          </label>
        </div>

        <div id="tuitionModalMessage" class="tuition-message"></div>

        <div class="tuition-modal-actions">
          <button class="tuition-btn ghost" type="button" data-close-tuition-modal>Cancelar</button>
          <button class="tuition-btn primary" type="button" id="tuitionConfirmPaymentBtn">Confirmar baixa sem caixa</button>
        </div>
      </section>
    `;

    document.body.appendChild(modal);
  }

  async function loadContext() {
    const { data: authData, error: authError } = await client.auth.getUser();

    if (authError || !authData?.user) {
      throw new Error("Usuário não autenticado.");
    }

    state.user = authData.user;

    const { data: profile, error: profileError } = await client
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", state.user.id)
      .maybeSingle();

    if (profileError || !profile) {
      throw new Error("Perfil do usuário não encontrado.");
    }

    state.profile = profile;

    const allowed = ["integro_admin", "diretor", "coordenacao"];

    if (!allowed.includes(profile.role)) {
      throw new Error("Seu perfil não tem permissão para acessar o painel de mensalidades.");
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

  async function loadData() {
    if (!state.school?.id) {
      await loadContext();
    }

    const { startISO, endISO } = monthStartEndISO(state.selectedMonth);
    const selectedMonthText = monthLabel(state.selectedMonth);

    const [studentsRes, packagesRes, entriesRes] = await Promise.all([
      client
        .from("students")
        .select("id, full_name, active, enrollment_status, guardian_1_name, guardian_1_cpf, guardian_1_phone, guardian_1_email, monthly_due_day, package_id")
        .eq("school_id", state.school.id)
        .eq("active", true)
        .order("full_name", { ascending: true }),

      client
        .from("finance_packages")
        .select("id, name, default_amount, active")
        .eq("school_id", state.school.id)
        .order("name", { ascending: true }),

      client
        .from("finance_entries")
        .select("id, receipt_number, created_at, student_id, student_name_snapshot, payer_name, payer_document, package_id, package_name_snapshot, gross_amount, discount_amount, amount_paid, payment_method, competence_month, description, entry_type")
        .eq("school_id", state.school.id)
        .eq("entry_type", "mensalidade")
        .order("created_at", { ascending: false })
        .limit(1000)
    ]);

    if (studentsRes.error) throw studentsRes.error;
    if (packagesRes.error) throw packagesRes.error;
    if (entriesRes.error) throw entriesRes.error;

    state.students = studentsRes.data || [];
    state.packages = packagesRes.data || [];
    state.entries = entriesRes.data || [];

    state.rows = buildRows({
      students: state.students,
      packages: state.packages,
      entries: state.entries,
      selectedMonth: state.selectedMonth,
      selectedMonthText,
      startISO,
      endISO
    });
  }

  function isEntryForSelectedMonth(entry, selectedMonth, selectedMonthText) {
    const competence = normalize(entry.competence_month || "");
    const label = normalize(selectedMonthText || "");

    if (competence && label && competence.includes(label)) {
      return true;
    }

    if (!entry.created_at) {
      return false;
    }

    const { year, monthIndex } = monthParts(selectedMonth);
    const created = new Date(entry.created_at);

    return created.getFullYear() === year && created.getMonth() === monthIndex;
  }

  function buildRows({ students, entries, selectedMonth, selectedMonthText }) {
    const activeStudents = (students || []).filter((student) => {
      if (student.active === false) return false;
      if (student.enrollment_status && student.enrollment_status !== "matriculado") return false;
      return true;
    });

    const today = dateOnly(new Date());

    return activeStudents.map((student) => {
      const dueDay = Number(student.monthly_due_day || 0);
      const packageItem = getPackageById(student.package_id);
      const dueDate = dueDay ? buildDueDate(selectedMonth, dueDay) : null;

      const paidEntry = (entries || []).find((entry) => {
        return entry.student_id === student.id &&
          isEntryForSelectedMonth(entry, selectedMonth, selectedMonthText);
      });

      let status = "sem_configuracao";
      let statusLabel = "Sem configuração";
      let days = null;

      if (paidEntry) {
        status = "pago";
        statusLabel = "Pago";
      } else if (!dueDay || !packageItem) {
        status = "sem_configuracao";
        statusLabel = "Completar cadastro";
      } else {
        days = diffDays(dueDate, today);

        if (days < 0) {
          status = "atrasado";
          statusLabel = "Atrasado";
        } else if (days === 0) {
          status = "hoje";
          statusLabel = "Vence hoje";
        } else {
          status = "vencer";
          statusLabel = "Vai vencer";
        }
      }

      return {
        student,
        packageItem,
        dueDay,
        dueDate,
        paidEntry,
        status,
        statusLabel,
        days
      };
    }).sort((a, b) => {
      const order = {
        atrasado: 1,
        hoje: 2,
        vencer: 3,
        sem_configuracao: 4,
        pago: 5
      };

      const statusCompare = (order[a.status] || 99) - (order[b.status] || 99);

      if (statusCompare !== 0) return statusCompare;

      const dateA = a.dueDate ? a.dueDate.getTime() : 9999999999999;
      const dateB = b.dueDate ? b.dueDate.getTime() : 9999999999999;

      return dateA - dateB;
    });
  }

  function rowsByStatus(statusValue) {
    return state.rows.filter((row) => row.status === statusValue);
  }

  function render() {
    const lateRows = rowsByStatus("atrasado");
    const todayRows = rowsByStatus("hoje");
    const soonRows = rowsByStatus("vencer");
    const paidRows = rowsByStatus("pago");

    $("tuitionLateCount").textContent = String(lateRows.length);
    $("tuitionTodayCount").textContent = String(todayRows.length);
    $("tuitionSoonCount").textContent = String(soonRows.length);
    $("tuitionPaidCount").textContent = String(paidRows.length);

    $("tuitionLateLaneCount").textContent = String(lateRows.length);
    $("tuitionTodayLaneCount").textContent = String(todayRows.length);
    $("tuitionSoonLaneCount").textContent = String(soonRows.length);
    $("tuitionPaidLaneCount").textContent = String(paidRows.length);

    renderList("tuitionLateList", lateRows);
    renderList("tuitionTodayList", todayRows);
    renderList("tuitionSoonList", soonRows);
    renderList("tuitionPaidList", paidRows);

    applyFilter();
  }

  function renderList(containerId, rows) {
    const container = $(containerId);

    if (!container) return;

    if (!rows.length) {
      container.innerHTML = `<div class="tuition-empty">Nenhum aluno nesta categoria.</div>`;
      return;
    }

    container.innerHTML = rows.map((row) => cardHtml(row)).join("");
  }

  function cardHtml(row) {
    const student = row.student;
    const packageItem = row.packageItem;
    const packageName = packageItem?.name || "Pacote não vinculado";
    const packageValue = packageItem ? money(packageItem.default_amount) : "—";
    const dueDateText = row.dueDate ? formatDateBR(row.dueDate) : "Sem vencimento";
    const guardian = student.guardian_1_name || "Responsável não informado";
    const phone = student.guardian_1_phone || "Telefone não informado";

    const statusClass = row.status === "atrasado"
      ? "late"
      : row.status === "hoje"
        ? "today"
        : row.status === "pago"
          ? "paid"
          : "soon";

    let detailText = "";

    if (row.status === "atrasado" && row.days !== null) {
      detailText = `${Math.abs(row.days)} dia(s) de atraso`;
    } else if (row.status === "hoje") {
      detailText = "Vence hoje";
    } else if (row.status === "vencer" && row.days !== null) {
      detailText = `Vence em ${row.days} dia(s)`;
    } else if (row.status === "pago") {
      detailText = row.paidEntry?.created_at
        ? `Pago em ${new Date(row.paidEntry.created_at).toLocaleDateString("pt-BR")}`
        : "Pago no mês";
    } else {
      detailText = "Cadastre vencimento e pacote";
    }

    const canQuickPay = row.status !== "pago" && row.packageItem && row.dueDay;

    return `
      <article class="tuition-card ${statusClass}" data-student-id="${safe(student.id)}">
        <div class="tuition-card-head">
          <div>
            <strong>${safe(student.full_name)}</strong>
            <small>${safe(detailText)}</small>
          </div>

          <span class="tuition-status ${statusClass}">${safe(row.statusLabel)}</span>
        </div>

        <div class="tuition-card-info">
          <span><strong>Vencimento:</strong> ${safe(dueDateText)}</span>
          <span><strong>Pacote:</strong> ${safe(packageName)} — ${safe(packageValue)}</span>
          <span><strong>Responsável:</strong> ${safe(guardian)}</span>
          <span><strong>Contato:</strong> ${safe(phone)}</span>
        </div>

        <div class="tuition-card-actions">
          ${
            canQuickPay
              ? `<button class="tuition-btn primary compact" type="button" data-action="quick-pay" data-student-id="${safe(student.id)}">Baixar sem caixa</button>`
              : ""
          }

          ${
            row.status !== "pago"
              ? `<button class="tuition-btn ghost compact" type="button" data-action="send-cashier" data-student-id="${safe(student.id)}">Enviar ao caixa</button>`
              : ""
          }

          ${
            row.status === "pago" && row.paidEntry
              ? `<button class="tuition-btn ghost compact" type="button" data-action="print-receipt" data-entry-id="${safe(row.paidEntry.id)}">Imprimir recibo</button>`
              : ""
          }
        </div>
      </article>
    `;
  }

  function applyFilter() {
    const filter = state.activeFilter;

    document.querySelectorAll(".tuition-filter").forEach((button) => {
      button.classList.toggle("active", button.dataset.tuitionFilter === filter);
    });

    document.querySelectorAll(".tuition-lane").forEach((lane) => {
      const type = lane.dataset.lane;

      if (filter === "todos") {
        lane.style.display = "";
      } else {
        lane.style.display = type === filter ? "" : "none";
      }
    });
  }

  function openPaymentModal(studentId) {
    const row = state.rows.find((item) => item.student.id === studentId);

    if (!row) {
      alert("Aluno não encontrado no painel.");
      return;
    }

    if (!row.packageItem) {
      alert("Este aluno ainda não possui pacote vinculado. Vincule o pacote na Gestão Escolar.");
      return;
    }

    if (!row.dueDay) {
      alert("Este aluno ainda não possui dia de vencimento cadastrado. Cadastre o vencimento na Gestão Escolar.");
      return;
    }

    state.selectedStudentForPayment = row;

    $("tuitionPayStudentName").value = row.student.full_name || "";
    $("tuitionPayCompetence").value = `${monthLabel(state.selectedMonth)} — vencimento dia ${row.dueDay}`;
    $("tuitionPayPackage").value = row.packageItem.name || "";
    $("tuitionPayAmount").value = money(row.packageItem.default_amount);
    $("tuitionPayPayer").value = row.student.guardian_1_name || "";
    $("tuitionPayMethod").value = "PIX";
    $("tuitionPayNotes").value = "";

    const modalMessage = $("tuitionModalMessage");
    if (modalMessage) {
      modalMessage.className = "tuition-message";
      modalMessage.textContent = "";
    }

    $("tuitionPaymentModal").classList.add("show");
  }

  function closePaymentModal() {
    $("tuitionPaymentModal")?.classList.remove("show");
    state.selectedStudentForPayment = null;
  }

  function setModalMessage(message, type) {
    const box = $("tuitionModalMessage");

    if (!box) return;

    box.textContent = message || "";
    box.className = `tuition-message show ${type || "ok"}`;

    if (!message) {
      box.className = "tuition-message";
    }
  }

  async function confirmQuickPayment() {
    const row = state.selectedStudentForPayment;

    if (!row) {
      setModalMessage("Nenhum aluno selecionado para baixa.", "error");
      return;
    }

    if (!row.packageItem) {
      setModalMessage("O aluno não possui pacote financeiro vinculado.", "error");
      return;
    }

    if (row.paidEntry) {
      setModalMessage("Esta mensalidade já consta como paga neste mês.", "error");
      return;
    }

    const confirmBtn = $("tuitionConfirmPaymentBtn");

    try {
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = "Registrando...";
      }

      const amount = Number(row.packageItem.default_amount || 0);
      const competence = `${monthLabel(state.selectedMonth)} — vencimento dia ${row.dueDay}`;
      const notes = $("tuitionPayNotes")?.value?.trim() || "";

      const description = notes
        ? `Pagamento de mensalidade referente a ${monthLabel(state.selectedMonth)}. ${notes}`
        : `Pagamento de mensalidade referente a ${monthLabel(state.selectedMonth)}.`;

      const payload = {
        school_id: state.school.id,
        entry_type: "mensalidade",
        entry_date: todayISO(),
        student_id: row.student.id,
        student_name_snapshot: row.student.full_name || "Aluno não informado",
        payer_name: row.student.guardian_1_name || "Responsável não informado",
        payer_document: row.student.guardian_1_cpf || "Não informado",
        package_id: row.packageItem.id,
        package_name_snapshot: row.packageItem.name || null,
        discount_id: null,
        discount_name_snapshot: null,
        gross_amount: amount,
        discount_amount: 0,
        amount_paid: amount,
        payment_method: $("tuitionPayMethod")?.value || "PIX",
        competence_month: competence,
        description,
        created_by: state.user.id
      };

      const { data, error } = await client
        .from("finance_entries")
        .insert(payload)
        .select("*")
        .single();

      if (error) {
        throw error;
      }

      setModalMessage("Baixa registrada com sucesso.", "ok");

      closePaymentModal();

      await reloadPanel();

      if (typeof window.printExistingReceipt === "function" && data) {
        window.printExistingReceipt(data);
      } else {
        setMessage("Baixa registrada com sucesso. Recarregue a lista de entradas para imprimir o recibo.", "ok");
      }
    } catch (error) {
      console.error(error);
      setModalMessage(error.message || "Erro ao registrar baixa.", "error");
    } finally {
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = "Confirmar baixa sem caixa";
      }
    }
  }

  function sendToCashier(studentId) {
    const row = state.rows.find((item) => item.student.id === studentId);

    if (!row) {
      alert("Aluno não encontrado no painel.");
      return;
    }

    const caixaTab = document.querySelector('.tab[data-tab="caixa"]');
    if (caixaTab) {
      caixaTab.click();
    }

    const studentSelect = $("entryStudentId");
    const entryType = $("entryType");
    const payerName = $("payerName");
    const payerDocument = $("payerDocument");
    const packageSelect = $("entryPackageId");
    const competenceMonth = $("competenceMonth");
    const description = $("entryDescription");
    const grossAmount = $("grossAmount");
    const discountAmount = $("discountAmount");
    const amountPaid = $("amountPaid");

    if (entryType) {
      entryType.value = "mensalidade";
      entryType.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (studentSelect) {
      studentSelect.value = row.student.id;
      studentSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (payerName) {
      payerName.value = row.student.guardian_1_name || "";
    }

    if (payerDocument) {
      payerDocument.value = row.student.guardian_1_cpf || "";
    }

    if (packageSelect && row.packageItem) {
      packageSelect.value = row.packageItem.id;
      packageSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (competenceMonth) {
      competenceMonth.value = `${monthLabel(state.selectedMonth)} — vencimento dia ${row.dueDay || "não informado"}`;
    }

    if (description) {
      description.value = `Pagamento de mensalidade referente a ${monthLabel(state.selectedMonth)}.`;
    }

    if (grossAmount && row.packageItem) {
      grossAmount.value = Number(row.packageItem.default_amount || 0).toFixed(2);
      grossAmount.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (discountAmount) {
      discountAmount.value = discountAmount.value || "0.00";
      discountAmount.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (amountPaid && row.packageItem && !discountAmount?.value) {
      amountPaid.value = Number(row.packageItem.default_amount || 0).toFixed(2);
    }

    const caixaPanel = document.getElementById("caixa");
    if (caixaPanel) {
      caixaPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setMessage("Aluno enviado para a frente de caixa. Aplique o desconto, se houver, e finalize o lançamento por lá.", "ok");
  }

  function printReceipt(entryId) {
    const row = state.rows.find((item) => item.paidEntry?.id === entryId);

    if (!row?.paidEntry) {
      alert("Recibo não encontrado.");
      return;
    }

    if (typeof window.printExistingReceipt === "function") {
      window.printExistingReceipt(row.paidEntry);
      return;
    }

    alert("Função de impressão do recibo não encontrada. Verifique se o financeiro.js carregou corretamente.");
  }

  function scrollLane(targetId, direction) {
    const el = $(targetId);

    if (!el) return;

    const amount = Math.max(260, Math.floor(el.clientWidth * 0.85));

    el.scrollBy({
      left: Number(direction || 1) * amount,
      behavior: "smooth"
    });
  }

  function changeMonth(delta) {
    const { year, monthIndex } = monthParts(state.selectedMonth);
    const next = new Date(year, monthIndex + delta, 1);

    state.selectedMonth = `${next.getFullYear()}-${pad2(next.getMonth() + 1)}`;

    const monthInput = $("tuitionMonthInput");
    if (monthInput) {
      monthInput.value = state.selectedMonth;
    }

    reloadPanel();
  }

  async function reloadPanel() {
    try {
      setMessage("Carregando painel de mensalidades...", "ok");

      await loadData();
      render();

      setMessage(`Painel atualizado para ${monthLabel(state.selectedMonth)}.`, "ok");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao carregar painel de mensalidades.", "error");
    }
  }

  function bindEvents() {
    $("tuitionMonthInput").value = state.selectedMonth;

    $("tuitionPrevMonthBtn")?.addEventListener("click", () => changeMonth(-1));
    $("tuitionNextMonthBtn")?.addEventListener("click", () => changeMonth(1));
    $("tuitionRefreshBtn")?.addEventListener("click", reloadPanel);

    $("tuitionMonthInput")?.addEventListener("change", (event) => {
      state.selectedMonth = event.target.value || currentMonthValue();
      reloadPanel();
    });

    document.addEventListener("click", (event) => {
      const filterBtn = event.target.closest("[data-tuition-filter]");
      if (filterBtn) {
        state.activeFilter = filterBtn.dataset.tuitionFilter || "todos";
        applyFilter();
        return;
      }

      const scrollBtn = event.target.closest("[data-scroll-target]");
      if (scrollBtn) {
        scrollLane(scrollBtn.dataset.scrollTarget, scrollBtn.dataset.scrollDir);
        return;
      }

      const actionBtn = event.target.closest("[data-action]");
      if (actionBtn) {
        const action = actionBtn.dataset.action;

        if (action === "quick-pay") {
          openPaymentModal(actionBtn.dataset.studentId);
        }

        if (action === "send-cashier") {
          sendToCashier(actionBtn.dataset.studentId);
        }

        if (action === "print-receipt") {
          printReceipt(actionBtn.dataset.entryId);
        }

        return;
      }

      if (event.target.closest("[data-close-tuition-modal]")) {
        closePaymentModal();
      }
    });

    $("tuitionConfirmPaymentBtn")?.addEventListener("click", confirmQuickPayment);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePaymentModal();
      }
    });
  }

  async function init() {
    createPanel();
    bindEvents();

    try {
      await loadContext();
      await reloadPanel();
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Erro ao iniciar painel de mensalidades.", "error");
    }
  }

  window.addEventListener("DOMContentLoaded", init);
})();
