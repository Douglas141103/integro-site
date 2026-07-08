(function () {
  if (window.__INTEGRO_PDV_V3__) return;
  window.__INTEGRO_PDV_V3__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  const db = typeof client !== "undefined" ? client : supabaseGlobal?.createClient?.(cfg.url, cfg.anonKey);

  const sale = { customer: null, items: [] };
  const dataStore = { user: null, profile: null, school: null, students: [], packages: [], discounts: [] };
  const $ = (id) => document.getElementById(id);

  function n(value) {
    return Number(String(value || "0").replace(",", ".")) || 0;
  }

  function money(value) {
    return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[m]));
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function showMsg(text, type = "ok") {
    if (typeof showStatus === "function") return showStatus(text, type === "error" ? "error" : "ok");
    alert(text);
  }

  function typeLabel(type) {
    const labels = {
      mensalidade: "Mensalidade",
      matricula: "Matrícula",
      avaliacao: "Avaliação / diagnóstico",
      material: "Material",
      servico: "Serviço / atendimento avulso",
      taxa: "Taxa",
      outro: "Outra entrada"
    };
    return labels[type] || "Entrada";
  }

  function companyName() {
    try {
      if (typeof getCompanyName === "function") return getCompanyName();
    } catch {}
    return dataStore.school?.name || "INSTITUTO INTEGRO";
  }

  function companyLine(fn) {
    try {
      return typeof window[fn] === "function" ? window[fn]() : "";
    } catch {
      return "";
    }
  }

  function isEnrolled(student) {
    const status = student?.enrollment_status || (student?.active === false ? "inativo" : "matriculado");
    return status === "matriculado" && student?.active !== false;
  }

  async function loadContextAndOptions() {
    const { data: authData, error: authError } = await db.auth.getUser();
    if (authError || !authData?.user) throw new Error("Usuário não autenticado.");

    dataStore.user = authData.user;

    const { data: profile, error: profileError } = await db
      .from("profiles")
      .select("id, full_name, role, school_id")
      .eq("id", authData.user.id)
      .maybeSingle();

    if (profileError || !profile?.school_id) throw new Error("Perfil do usuário não encontrado.");
    dataStore.profile = profile;

    const [schoolRes, studentsRes, packagesRes, discountsRes] = await Promise.all([
      db.from("schools").select("id, name, slug").eq("id", profile.school_id).maybeSingle(),
      db.from("students").select("id, full_name, active, enrollment_status, guardian_1_name, guardian_1_cpf, guardian_1_phone, guardian_1_email").eq("school_id", profile.school_id).order("full_name", { ascending: true }),
      db.from("finance_packages").select("id, name, default_amount, active").eq("school_id", profile.school_id).order("name", { ascending: true }),
      db.from("finance_discounts").select("id, name, discount_type, value, active").eq("school_id", profile.school_id).order("name", { ascending: true })
    ]);

    if (schoolRes.error) throw schoolRes.error;
    if (studentsRes.error) throw studentsRes.error;
    if (packagesRes.error) throw packagesRes.error;
    if (discountsRes.error) throw discountsRes.error;

    dataStore.school = schoolRes.data;
    dataStore.students = (studentsRes.data || []).filter(isEnrolled);
    dataStore.packages = (packagesRes.data || []).filter((item) => item.active !== false);
    dataStore.discounts = (discountsRes.data || []).filter((item) => item.active !== false);
  }

  function css() {
    if ($("pdv3Css")) return;
    const style = document.createElement("style");
    style.id = "pdv3Css";
    style.textContent = `.pdv2{display:grid;grid-template-columns:minmax(360px,1.05fr) minmax(340px,.95fr);gap:22px;align-items:start}.pdv2-card{background:#fff;border:1px solid rgba(15,61,46,.10);border-radius:24px;padding:24px;box-shadow:0 14px 34px rgba(7,49,35,.08)}.pdv2-card h2{color:#003f31;margin:0 0 8px}.pdv2-card h3{color:#003f31;margin:18px 0 10px}.pdv2-muted{color:#61746d;line-height:1.45}.pdv2-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.pdv2-grid label,.pdv2-card label{display:flex;flex-direction:column;gap:7px;font-weight:800;color:#003f31}.pdv2-grid .full{grid-column:1/-1}.pdv2 input,.pdv2 select,.pdv2 textarea{border:1px solid #c9ded5;border-radius:16px;padding:13px 14px;font:inherit;font-weight:700;background:#fff;color:#073b31;min-width:0}.pdv2-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.pdv2-btn{border:0;border-radius:999px;padding:13px 18px;font-weight:900;cursor:pointer}.pdv2-btn.primary{background:#155640;color:#fff}.pdv2-btn.ghost{background:#f4fbf7;color:#0f3d2e;border:1px solid #cfe4d9}.pdv2-btn.danger{background:#fff1f0;color:#b42318;border:1px solid #ffd3ce}.pdv2-line{height:1px;background:#e2eee8;margin:20px 0}.pdv2-lock{background:#fff8e6;border:1px solid rgba(216,169,75,.38);color:#624000;border-radius:16px;padding:12px 14px;font-weight:800;margin:12px 0}.pdv2-chips{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 16px}.pdv2-chip{border:1px solid #cfe4d9;background:#fff;border-radius:999px;padding:9px 12px;color:#0f3d2e;font-weight:900;cursor:pointer}.pdv2-chip:hover{background:#e8f5ee}.pdv2-cart{display:grid;gap:12px;max-height:360px;overflow:auto}.pdv2-empty{border:1px dashed #c9ded5;border-radius:18px;padding:18px;text-align:center;color:#61746d;background:#f8fcfa}.pdv2-item{border:1px solid #d7e9df;border-radius:18px;padding:14px;background:#fbfefc}.pdv2-head{display:flex;justify-content:space-between;gap:12px}.pdv2-head strong{color:#003f31}.pdv2-head .amount{font-weight:900;color:#0f3d2e;white-space:nowrap}.pdv2-small{color:#61746d;font-size:.87rem}.pdv2-remove{margin-top:8px;border:0;background:transparent;color:#b42318;font-weight:900;cursor:pointer}.pdv2-total-row{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid #e3eee8;padding:9px 0;color:#30443c}.pdv2-total-row.grand{font-size:1.35rem;color:#003f31;border:0;font-weight:900;background:#f4fbf7;border-radius:18px;padding:14px;margin-top:8px}.pdv2-customer{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;background:#f4fbf7;border:1px solid #d7e9df;border-radius:18px;padding:14px;margin:14px 0}.pdv2-customer span{display:block;color:#61746d;font-size:.82rem;font-weight:800}.pdv2-customer strong{color:#073b31}.pdv2-final{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}@media(max-width:980px){.pdv2{grid-template-columns:1fr}.pdv2-grid,.pdv2-final,.pdv2-customer{grid-template-columns:1fr}}`;
    document.head.appendChild(style);
  }

  function typeOptions() {
    return [["mensalidade", "Mensalidade"], ["matricula", "Matrícula"], ["avaliacao", "Avaliação / diagnóstico"], ["material", "Material"], ["servico", "Serviço / atendimento avulso"], ["taxa", "Taxa"], ["outro", "Outra entrada"]]
      .map(([value, text]) => `<option value="${value}">${text}</option>`).join("");
  }

  function render() {
    const panel = $("caixa");
    if (!panel || $("pdv2")) return;
    css();
    panel.innerHTML = `<div class="pdv2" id="pdv2">
      <section class="pdv2-card">
        <h2>Frente de caixa</h2>
        <p class="pdv2-muted">Faça uma venda com vários produtos, mensalidades, taxas ou serviços no mesmo nome. A lista de alunos não atualiza sozinha enquanto você toca no celular.</p>
        <div id="pdv2Lock" class="pdv2-lock" hidden></div>
        <div id="pdv2CustomerBox" class="pdv2-customer" hidden></div>
        <h3>1. Cliente / pagador</h3>
        <div class="pdv2-grid">
          <label>Aluno da base<select id="pdv2Student"><option value="">Selecione um aluno</option></select></label>
          <label>Ou digite o aluno / beneficiário<input id="pdv2ManualStudent" placeholder="Nome do aluno ou beneficiário"></label>
          <label>Responsável / pagador *<input id="pdv2Payer" placeholder="Nome completo"></label>
          <label>CPF/CNPJ do pagador *<input id="pdv2Doc" placeholder="000.000.000-00"></label>
        </div>
        <div class="pdv2-actions"><button id="pdv2ReloadOptions" class="pdv2-btn ghost" type="button">Atualizar alunos/pacotes</button></div>
        <div class="pdv2-line"></div>
        <h3>2. Produto, mensalidade ou serviço</h3>
        <div class="pdv2-chips"><button class="pdv2-chip" type="button" data-type="mensalidade">Mensalidade</button><button class="pdv2-chip" type="button" data-type="matricula">Matrícula</button><button class="pdv2-chip" type="button" data-type="avaliacao">Avaliação</button><button class="pdv2-chip" type="button" data-type="material">Material</button><button class="pdv2-chip" type="button" data-type="servico">Serviço</button></div>
        <div class="pdv2-grid">
          <label>Tipo de item *<select id="pdv2Type">${typeOptions()}</select></label>
          <label>Pacote / produto cadastrado<select id="pdv2Package"><option value="">Selecione um pacote</option></select></label>
          <label>Desconto<select id="pdv2Discount"><option value="">Sem desconto</option></select></label>
          <label>Quantidade<input id="pdv2Qty" type="number" min="1" step="1" value="1"></label>
          <label>Valor bruto unitário *<input id="pdv2Gross" type="number" min="0" step="0.01" placeholder="0,00"></label>
          <label>Desconto unitário<input id="pdv2DiscValue" type="number" min="0" step="0.01" placeholder="0,00"></label>
          <label>Valor unitário final<input id="pdv2Final" type="number" min="0" step="0.01" placeholder="0,00"></label>
          <label>Referência<input id="pdv2Ref" placeholder="Ex.: Julho/2026 ou Avulso"></label>
          <label class="full">Descrição do item *<textarea id="pdv2Desc" rows="2" placeholder="Ex.: Mensalidade de julho, matrícula, apostila, avaliação diagnóstica."></textarea></label>
        </div>
        <div class="pdv2-actions"><button id="pdv2Add" class="pdv2-btn primary" type="button">Adicionar ao carrinho</button><button id="pdv2ClearItem" class="pdv2-btn ghost" type="button">Limpar item</button></div>
      </section>
      <aside class="pdv2-card">
        <h2>Carrinho da venda</h2><p class="pdv2-muted">Depois do primeiro item, os próximos lançamentos ficam no mesmo nome até finalizar ou limpar a venda.</p>
        <div id="pdv2Cart" class="pdv2-cart"></div>
        <div class="pdv2-total-row"><span>Subtotal bruto</span><strong id="pdv2Subtotal">R$ 0,00</strong></div>
        <div class="pdv2-total-row"><span>Descontos</span><strong id="pdv2DiscountTotal">R$ 0,00</strong></div>
        <div class="pdv2-total-row grand"><span>Total</span><strong id="pdv2Total">R$ 0,00</strong></div>
        <div class="pdv2-line"></div>
        <h3>3. Finalizar venda</h3>
        <div class="pdv2-final">
          <label>Forma de pagamento<select id="pdv2Pay"><option>Dinheiro</option><option>Pix</option><option>Cartão de crédito</option><option>Cartão de débito</option><option>Transferência</option><option>Misto</option><option>Outro</option></select></label>
          <label>Valor recebido / entregue<input id="pdv2Received" type="number" min="0" step="0.01" placeholder="0,00"></label>
          <label>Troco<input id="pdv2Change" readonly value="R$ 0,00"></label>
          <label>Observação<input id="pdv2Note" placeholder="Ex.: parte Pix, parte dinheiro"></label>
        </div>
        <div class="pdv2-actions"><button id="pdv2Finish" class="pdv2-btn primary" type="button">Finalizar venda e imprimir recibo</button><button id="pdv2ClearSale" class="pdv2-btn danger" type="button">Limpar venda</button></div>
      </aside>
      <div style="display:none" aria-hidden="true"><select id="entryStudentId"></select><select id="entryPackageId"></select><select id="entryDiscountId"></select></div>
    </div>`;
    bind();
    refreshOptions();
    drawCart();
  }

  function bind() {
    $("pdv2Student").onchange = fillCustomer;
    $("pdv2Package").onchange = applyPackage;
    $("pdv2Discount").onchange = applyDiscount;
    ["pdv2Gross", "pdv2DiscValue"].forEach((id) => $(id).oninput = calcFinal);
    ["pdv2Final", "pdv2Qty", "pdv2Received"].forEach((id) => $(id).oninput = calcChange);
    $("pdv2Pay").onchange = () => { if ($("pdv2Pay").value !== "Dinheiro") $("pdv2Received").value = totals().total.toFixed(2); calcChange(); };
    $("pdv2Add").onclick = addItem;
    $("pdv2ClearItem").onclick = clearItem;
    $("pdv2ClearSale").onclick = clearSale;
    $("pdv2Finish").onclick = finish;
    $("pdv2ReloadOptions").onclick = async () => { await loadContextAndOptions(); refreshOptions(); showMsg("Lista atualizada."); };
    document.querySelectorAll("[data-type]").forEach((button) => button.onclick = () => {
      $("pdv2Type").value = button.dataset.type;
      if (!$("pdv2Desc").value.trim()) $("pdv2Desc").value = `Recebimento referente a ${typeLabel(button.dataset.type).toLowerCase()}.`;
    });
  }

  function refreshOptions() {
    if (!$("pdv2")) return;
    const selectedStudentId = $("pdv2Student").value;
    const studentSelect = $("pdv2Student");
    studentSelect.innerHTML = '<option value="">Selecione um aluno</option>' + dataStore.students.map((student) => `<option value="${student.id}">${safe(student.full_name)}</option>`).join("");
    studentSelect.value = selectedStudentId;

    const selectedPackageId = $("pdv2Package").value;
    $("pdv2Package").innerHTML = '<option value="">Selecione um pacote</option>' + dataStore.packages.map((pkg) => `<option value="${pkg.id}">${safe(pkg.name)} — ${money(pkg.default_amount)}</option>`).join("");
    $("pdv2Package").value = selectedPackageId;

    const selectedDiscountId = $("pdv2Discount").value;
    $("pdv2Discount").innerHTML = '<option value="">Sem desconto</option>' + dataStore.discounts.map((discount) => `<option value="${discount.id}">${safe(discount.name)} — ${discount.discount_type === "percentual" ? `${Number(discount.value || 0)}%` : money(discount.value)}</option>`).join("");
    $("pdv2Discount").value = selectedDiscountId;
  }

  function selectedStudent() {
    return dataStore.students.find((student) => student.id === $("pdv2Student").value) || null;
  }

  function fillCustomer() {
    const student = selectedStudent();
    if (!student) return;
    $("pdv2ManualStudent").value = "";
    $("pdv2Payer").value = student.guardian_1_name || "";
    $("pdv2Doc").value = student.guardian_1_cpf || "";
  }

  function getCustomer() {
    if (sale.customer) return sale.customer;
    const student = selectedStudent();
    const studentName = student?.full_name || $("pdv2ManualStudent").value.trim();
    const payerName = $("pdv2Payer").value.trim() || student?.guardian_1_name || "";
    const payerDocument = $("pdv2Doc").value.trim() || student?.guardian_1_cpf || "";
    if (!studentName) throw new Error("Informe o aluno/beneficiário ou selecione um aluno da base.");
    if (!payerName || !payerDocument) throw new Error("Informe nome e CPF/CNPJ do responsável/pagador.");
    return { studentId: student?.id || null, studentName, payerName, payerDocument, phone: student?.guardian_1_phone || "", email: student?.guardian_1_email || "" };
  }

  function lockCustomer() {
    const locked = !!sale.customer;
    ["pdv2Student", "pdv2ManualStudent", "pdv2Payer", "pdv2Doc"].forEach((id) => { if ($(id)) $(id).disabled = locked; });
    $("pdv2Lock").hidden = !locked;
    $("pdv2CustomerBox").hidden = !locked;
    if (!locked) return;
    $("pdv2Lock").textContent = `Venda em andamento para ${sale.customer.payerName}. Os próximos itens serão lançados no mesmo nome.`;
    $("pdv2CustomerBox").innerHTML = `<div><span>Aluno/beneficiário</span><strong>${safe(sale.customer.studentName)}</strong></div><div><span>Pagador</span><strong>${safe(sale.customer.payerName)}</strong></div><div><span>CPF/CNPJ</span><strong>${safe(sale.customer.payerDocument)}</strong></div><div><span>Contato</span><strong>${safe(sale.customer.phone || sale.customer.email || "Não informado")}</strong></div>`;
  }

  function applyPackage() {
    const pkg = dataStore.packages.find((item) => item.id === $("pdv2Package").value);
    if (pkg) {
      $("pdv2Gross").value = Number(pkg.default_amount || 0).toFixed(2);
      if (!$("pdv2Desc").value.trim()) $("pdv2Desc").value = `Pagamento referente ao pacote ${pkg.name}.`;
    }
    applyDiscount();
  }

  function applyDiscount() {
    const gross = n($("pdv2Gross").value);
    const discount = dataStore.discounts.find((item) => item.id === $("pdv2Discount").value);
    let discountValue = 0;
    if (discount) discountValue = discount.discount_type === "percentual" ? gross * (Number(discount.value || 0) / 100) : Number(discount.value || 0);
    $("pdv2DiscValue").value = Math.min(discountValue, gross).toFixed(2);
    calcFinal();
  }

  function calcFinal() {
    const gross = n($("pdv2Gross").value);
    const discount = Math.min(n($("pdv2DiscValue").value), gross);
    $("pdv2Final").value = Math.max(gross - discount, 0).toFixed(2);
    calcChange();
  }

  function clearItem() {
    $("pdv2Type").value = "mensalidade";
    $("pdv2Package").value = "";
    $("pdv2Discount").value = "";
    $("pdv2Qty").value = "1";
    ["pdv2Gross", "pdv2DiscValue", "pdv2Final", "pdv2Ref", "pdv2Desc"].forEach((id) => $(id).value = "");
  }

  function addItem() {
    try {
      if (!sale.customer) sale.customer = getCustomer();
      const qty = Math.max(1, Math.floor(n($("pdv2Qty").value) || 1));
      const gross = n($("pdv2Gross").value);
      const discount = Math.min(n($("pdv2DiscValue").value), gross);
      const finalUnit = n($("pdv2Final").value) || Math.max(gross - discount, 0);
      const description = $("pdv2Desc").value.trim();
      if (gross <= 0) throw new Error("Informe o valor bruto do item.");
      if (!description) throw new Error("Informe a descrição do item.");
      const pkg = dataStore.packages.find((item) => item.id === $("pdv2Package").value);
      const discountData = dataStore.discounts.find((item) => item.id === $("pdv2Discount").value);
      sale.items.push({ id: Date.now() + "-" + Math.random().toString(16).slice(2), type: $("pdv2Type").value, typeLabel: typeLabel($("pdv2Type").value), packageId: pkg?.id || null, packageName: pkg?.name || null, discountId: discountData?.id || null, discountName: discountData?.name || null, qty, grossUnit: gross, discountUnit: discount, finalUnit, grossTotal: gross * qty, discountTotal: discount * qty, total: finalUnit * qty, ref: $("pdv2Ref").value.trim() || null, desc: description });
      lockCustomer();
      clearItem();
      drawCart();
      showMsg("Item adicionado. Você já pode lançar outro produto no mesmo nome.");
    } catch (error) {
      showMsg(error.message, "error");
    }
  }

  function totals() {
    return sale.items.reduce((acc, item) => ({ gross: acc.gross + item.grossTotal, discount: acc.discount + item.discountTotal, total: acc.total + item.total }), { gross: 0, discount: 0, total: 0 });
  }

  function drawCart() {
    const cart = $("pdv2Cart");
    const total = totals();
    if (!sale.items.length) cart.innerHTML = '<div class="pdv2-empty">Nenhum item no carrinho.</div>';
    else cart.innerHTML = sale.items.map((item) => `<article class="pdv2-item"><div class="pdv2-head"><div><strong>${safe(item.desc)}</strong><br><span class="pdv2-small">${safe(item.typeLabel)} • Qtd. ${item.qty}${item.packageName ? ` • ${safe(item.packageName)}` : ""}</span></div><span class="amount">${money(item.total)}</span></div><span class="pdv2-small">Bruto: ${money(item.grossTotal)} • Desconto: ${money(item.discountTotal)}</span><br><button class="pdv2-remove" data-rm="${item.id}" type="button">Remover</button></article>`).join("");
    cart.querySelectorAll("[data-rm]").forEach((button) => button.onclick = () => { sale.items = sale.items.filter((item) => item.id !== button.dataset.rm); if (!sale.items.length) sale.customer = null; lockCustomer(); drawCart(); });
    $("pdv2Subtotal").textContent = money(total.gross);
    $("pdv2DiscountTotal").textContent = money(total.discount);
    $("pdv2Total").textContent = money(total.total);
    if ($("pdv2Pay").value !== "Dinheiro" && total.total) $("pdv2Received").value = total.total.toFixed(2);
    calcChange();
  }

  function calcChange() {
    const total = totals();
    const received = n($("pdv2Received")?.value);
    if ($("pdv2Change")) $("pdv2Change").value = money(Math.max(received - total.total, 0));
  }

  function clearSale() {
    if (sale.items.length && !confirm("Limpar a venda atual?")) return;
    clearSaleNow();
  }

  function clearSaleNow() {
    sale.customer = null;
    sale.items = [];
    ["pdv2Student", "pdv2ManualStudent", "pdv2Payer", "pdv2Doc", "pdv2Received", "pdv2Note"].forEach((id) => { if ($(id)) $(id).value = ""; });
    clearItem();
    lockCustomer();
    drawCart();
  }

  async function finish() {
    try {
      if (!db || !dataStore.school?.id || !dataStore.user?.id) throw new Error("Sistema ainda carregando. Aguarde e tente novamente.");
      if (!sale.customer || !sale.items.length) throw new Error("Adicione pelo menos um item ao carrinho.");
      const total = totals();
      let received = n($("pdv2Received").value);
      if (!received && $("pdv2Pay").value !== "Dinheiro") { received = total.total; $("pdv2Received").value = received.toFixed(2); }
      if (received < total.total) throw new Error("O valor recebido não pode ser menor que o total da venda.");
      const change = Math.max(received - total.total, 0);
      const saleCode = "VENDA-" + new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
      const note = $("pdv2Note").value.trim();
      const rows = sale.items.map((item, index) => ({
        school_id: dataStore.school.id,
        entry_type: item.type,
        entry_date: today(),
        student_id: sale.customer.studentId,
        student_name_snapshot: sale.customer.studentName,
        payer_name: sale.customer.payerName,
        payer_document: sale.customer.payerDocument,
        package_id: item.packageId,
        package_name_snapshot: item.packageName,
        discount_id: item.discountId,
        discount_name_snapshot: item.discountName,
        gross_amount: item.grossTotal,
        discount_amount: item.discountTotal,
        amount_paid: item.total,
        payment_method: $("pdv2Pay").value,
        competence_month: item.ref,
        description: `${saleCode} • Item ${index + 1}/${sale.items.length}: ${item.desc}${note ? ` • Obs.: ${note}` : ""}${change ? ` • Valor recebido: ${money(received)} • Troco: ${money(change)}` : ""}`,
        created_by: dataStore.user.id
      }));
      const { data, error } = await db.from("finance_entries").insert(rows).select("*");
      if (error) throw error;
      printReceipt({ saleCode, rows: data || [], customer: sale.customer, items: sale.items.slice(), totals: total, received, change, payment: $("pdv2Pay").value, note });
      if (typeof loadEntries === "function") await loadEntries();
      if (typeof renderEntries === "function") renderEntries();
      if (typeof renderKpis === "function") renderKpis();
      clearSaleNow();
      showMsg("Venda finalizada. Recibo aberto para impressão.");
    } catch (error) {
      showMsg(error.message || "Erro ao finalizar venda.", "error");
    }
  }

  function printReceipt(data) {
    const receipts = data.rows.map((row) => String(row.receipt_number || "").padStart(5, "0")).filter(Boolean).join(", ");
    const itemRows = data.items.map((item, index) => `<tr><td>${index + 1}</td><td>${safe(item.desc)}<br><small>${safe(item.typeLabel)}${item.packageName ? ` • ${safe(item.packageName)}` : ""}</small></td><td>${item.qty}</td><td style="text-align:right">${money(item.grossUnit)}</td><td style="text-align:right">${money(item.discountTotal)}</td><td style="text-align:right"><strong>${money(item.total)}</strong></td></tr>`).join("");
    const documentLine = companyLine("getCompanyDocumentLine");
    const addressLine = companyLine("getCompanyAddressLine");
    const contactLine = companyLine("getCompanyContactLine");
    const via = (name, second) => `<section class="receipt ${second ? "second" : ""}"><div class="company"><h2>${safe(companyName())}</h2>${documentLine ? `<p>${safe(documentLine)}</p>` : ""}${addressLine ? `<p>${safe(addressLine)}</p>` : ""}${contactLine ? `<p>${safe(contactLine)}</p>` : ""}</div><div class="receipt-head"><div><h1>RECIBO DE VENDA</h1><p>${safe(name)} • ${safe(data.saleCode)}</p></div><strong>${receipts ? `Recibos: ${safe(receipts)}` : ""}</strong></div><p><strong>Recebemos de:</strong> ${safe(data.customer.payerName)}</p><p><strong>CPF/CNPJ:</strong> ${safe(data.customer.payerDocument)}</p><p><strong>Aluno/beneficiário:</strong> ${safe(data.customer.studentName)}</p><table><thead><tr><th>#</th><th>Item</th><th>Qtd.</th><th>Unit.</th><th>Desc.</th><th>Total</th></tr></thead><tbody>${itemRows}</tbody></table><div class="totals"><p><span>Subtotal</span><b>${money(data.totals.gross)}</b></p><p><span>Descontos</span><b>${money(data.totals.discount)}</b></p><p><span>Total pago</span><b>${money(data.totals.total)}</b></p><p><span>Pagamento</span><b>${safe(data.payment)}</b></p><p><span>Recebido</span><b>${money(data.received)}</b></p><p><span>Troco</span><b>${money(data.change)}</b></p></div>${data.note ? `<p><strong>Observação:</strong> ${safe(data.note)}</p>` : ""}<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR")}</p><div class="signature"><span></span><p>Assinatura / ${safe(companyName())}</p></div></section>`;
    const output = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><title>${safe(data.saleCode)}</title><style>@page{size:A4;margin:10mm}body{font-family:Arial,Helvetica,sans-serif;color:#073b31;margin:0;background:#fff}.receipt{border:1.5px solid #0b6b4e;border-radius:14px;padding:18px;margin:0 0 18px;page-break-inside:avoid}.receipt.second{page-break-before:always}.company{text-align:center;border-bottom:1px solid #cfe4d9;padding-bottom:8px;margin-bottom:10px}.company h2{margin:0 0 4px;color:#004b38;text-transform:uppercase}.company p{margin:2px 0;font-size:11px;color:#415b51}.receipt-head{display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid #cfe4d9;padding-bottom:10px;margin-bottom:10px}.receipt-head h1{font-size:20px;margin:0;color:#004b38}p{font-size:13px;line-height:1.35;margin:6px 0}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border-bottom:1px solid #dfeae4;padding:7px;text-align:left;vertical-align:top;font-size:12px}th{background:#eef7f2}.totals{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#f4fbf7;border:1px solid #d8e7df;border-radius:12px;padding:10px;margin:12px 0}.totals p{margin:0}.totals span{display:block;color:#415b51;font-size:11px}.totals b{font-size:14px}.signature{margin-top:34px;text-align:center}.signature span{display:block;border-top:1px solid #073b31;width:260px;margin:0 auto}</style></head><body>${via("Via do responsável", false)}${via("Via do INTEGRO", true)}<script>window.onload=function(){window.focus();window.print()};<\/script></body></html>`;
    const win = window.open("", "_blank");
    if (!win) return showMsg("O navegador bloqueou a janela do recibo. Libere pop-ups.", "error");
    win.document.open();
    win.document.write(output);
    win.document.close();
  }

  async function start() {
    try {
      await loadContextAndOptions();
      render();
    } catch (error) {
      console.error(error);
      showMsg(error.message || "Erro ao carregar a frente de caixa.", "error");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
