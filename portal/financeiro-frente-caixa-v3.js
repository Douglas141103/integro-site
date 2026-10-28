(function () {
  if (window.__INTEGRO_PDV_V3__) return;
  window.__INTEGRO_PDV_V3__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  const db = typeof client !== "undefined" ? client : supabaseGlobal?.createClient?.(cfg.url, cfg.anonKey);
  const cyclePolicy = window.INTEGRO_FINANCE_CYCLE_POLICY;

  const sale = { customer: null, items: [] };
  let step = 1, method = null, busy = false, activeOrder = null, receipt = null, manualRequest = null, receiptLoading = false;
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

  function today(referenceDate = new Date()) {
    if (!cyclePolicy?.referenceISO) throw new Error("Política do ciclo financeiro indisponível. Atualize a página e tente novamente.");
    return cyclePolicy.referenceISO(referenceDate);
  }

  function showMsg(text, type = "ok") {
    if ($("pdvMessage")) { $("pdvMessage").textContent = text; $("pdvMessage").className = "pdv-message " + type; return; }
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
    const link = document.createElement("link");
    link.id = "pdv3Css"; link.rel = "stylesheet";
    link.href = "./financeiro-caixa.css?v=20261028-pdv1";
    document.head.appendChild(link);
  }

  function typeOptions() {
    return [["mensalidade", "Mensalidade"], ["matricula", "Matrícula"], ["avaliacao", "Avaliação / diagnóstico"], ["material", "Material"], ["servico", "Serviço / atendimento avulso"], ["taxa", "Taxa"], ["outro", "Outra entrada"]]
      .map(([value, text]) => `<option value="${value}">${text}</option>`).join("");
  }

  function render() {
    const panel = $("caixa");
    if (!panel || $("pdv2")) return;
    css();
    panel.innerHTML = `<section class="card"><p class="eyebrow">ATENDIMENTO</p><h2>Frente de caixa</h2><p class="muted">Escolha o cliente, monte a venda e receba em uma tela dedicada.</p><button id="pdvOpen" type="button" class="btn primary">Abrir frente de caixa →</button></section>
    <div style="display:none" aria-hidden="true"><select id="entryStudentId"></select><select id="entryPackageId"></select><select id="entryDiscountId"></select></div>`;
    const screen = document.createElement('div'); screen.id = 'pdv2'; screen.className = 'pdv2'; screen.hidden = true;
    screen.setAttribute('role','dialog'); screen.setAttribute('aria-modal','true'); screen.setAttribute('aria-labelledby','pdvTitle');
    screen.innerHTML = `<header class="pdv-top"><div class="pdv-brand"><img src="../logo-whatsapp.png" alt="Instituto Integro"><div><small>INSTITUTO INTEGRO</small><h1 id="pdvTitle">Frente de caixa</h1></div></div><button type="button" id="pdvClose" class="pdv2-btn ghost">Voltar ao financeiro</button></header>
    <div class="pdv-workspace"><nav class="pdv-steps" aria-label="Etapas da venda"><span data-step-label="1">1 <b>Cliente / pagador</b></span><span data-step-label="2">2 <b>Itens da venda</b></span><span data-step-label="3">3 <b>Pagamento</b></span></nav>
    <p id="pdvMessage" class="pdv-message" role="status" aria-live="polite"></p>
    <section id="pdvStep1" class="pdv-step pdv-customer-step"><div class="pdv2-card"><p class="pdv-eyebrow">NOVA VENDA</p><h2>Quem está comprando?</h2><p class="pdv2-muted">Selecione um aluno ou informe o beneficiário e o pagador.</p>
      <div class="pdv2-grid"><label>Aluno da base<select id="pdv2Student"><option value="">Selecione um aluno</option></select></label><label>Ou digite o aluno / beneficiário<input id="pdv2ManualStudent" placeholder="Nome do aluno ou beneficiário"></label><label>Responsável / pagador *<input id="pdv2Payer" placeholder="Nome completo" autocomplete="name"></label><label>CPF/CNPJ do pagador *<input id="pdv2Doc" placeholder="CPF ou CNPJ" inputmode="numeric"></label></div>
      <div class="pdv2-actions pdv-spread"><button id="pdv2ReloadOptions" class="pdv2-btn ghost" type="button">Atualizar alunos e pacotes</button><button id="pdvNextCustomer" class="pdv2-btn primary" type="button">Avançar para itens →</button></div></div>
      <button type="button" id="pdvOpenHistory" class="pdv2-btn ghost">Consultar cobranças e recibos</button></section>
    <section id="pdvStep2" class="pdv-step" hidden><div class="pdv-sale-heading"><div><p class="pdv-eyebrow">ITENS DA VENDA</p><h2>Monte o carrinho</h2></div><button id="pdvBackCustomer" class="pdv2-btn ghost" type="button">← Cliente / pagador</button></div>
      <div id="pdv2CustomerBox" class="pdv2-customer" hidden></div><div id="pdv2Lock" hidden></div>
      <div class="pdv-market"><section class="pdv2-card pdv-item-editor"><h3>Adicionar item</h3><div class="pdv2-chips"><button class="pdv2-chip" type="button" data-type="mensalidade">Mensalidade</button><button class="pdv2-chip" type="button" data-type="matricula">Matrícula</button><button class="pdv2-chip" type="button" data-type="avaliacao">Avaliação</button><button class="pdv2-chip" type="button" data-type="material">Material</button><button class="pdv2-chip" type="button" data-type="servico">Serviço</button></div>
      <div class="pdv2-grid"><label>Tipo<select id="pdv2Type">${typeOptions()}</select></label><label>Pacote / produto<select id="pdv2Package"><option value="">Selecione um pacote</option></select></label><label class="full">Descrição *<input id="pdv2Desc" placeholder="Mensalidade, apostila, atendimento…"></label><label>Quantidade<input id="pdv2Qty" type="number" min="1" max="1000" step="1" value="1"></label><label>Valor unitário *<input id="pdv2Gross" type="number" min="0.01" step="0.01" placeholder="0,00"></label><label>Desconto cadastrado<select id="pdv2Discount"><option value="">Sem desconto</option></select></label><label>Desconto unitário<input id="pdv2DiscValue" type="number" min="0" step="0.01" placeholder="0,00"></label><label>Valor final unitário<input id="pdv2Final" readonly placeholder="0,00"></label><label>Referência<input id="pdv2Ref" placeholder="Ex.: Outubro/2026"></label></div>
      <div class="pdv2-actions"><button id="pdv2Add" class="pdv2-btn primary" type="button">+ Adicionar item</button><button id="pdv2ClearItem" class="pdv2-btn ghost" type="button">Limpar item</button></div></section>
      <aside class="pdv2-card pdv-basket"><div class="pdv-sale-heading"><h3>Itens incluídos</h3><span id="pdvItemCount" class="pdv-count">0 itens</span></div><div id="pdv2Cart" class="pdv2-cart"></div><div class="pdv-totals"><div class="pdv2-total-row"><span>Subtotal</span><strong id="pdv2Subtotal">R$ 0,00</strong></div><div class="pdv2-total-row"><span>Descontos</span><strong id="pdv2DiscountTotal">R$ 0,00</strong></div><div class="pdv2-total-row grand"><span>Total da venda</span><strong id="pdv2Total" aria-live="polite">R$ 0,00</strong></div><button id="pdvNextPayment" class="pdv2-btn primary pdv-wide" type="button">Ir para pagamento →</button></div></aside></div></section>
    <section id="pdvStep3" class="pdv-step" hidden><div class="pdv-sale-heading"><div><p class="pdv-eyebrow">PAGAMENTO</p><h2 id="pdvPaymentTitle">Como deseja receber?</h2></div><button id="pdvBackItems" class="pdv2-btn ghost" type="button">← Voltar aos itens</button></div>
      <div id="pdvPaymentSummary" class="pdv-payment-summary"><div><span id="pdvPaymentCustomer"></span><small id="pdvPaymentItems"></small></div><strong id="pdvPaymentTotal">R$ 0,00</strong></div>
      <div id="pdvPaymentMethods" class="pdv-methods"><button type="button" class="pdv-method" data-method="infinitepay"><span class="pdv-method-symbol">↗</span><strong>InfinitePay</strong><small>Com verificação no checkout</small></button><button type="button" class="pdv-method" data-method="asaas"><span class="pdv-method-symbol">▦</span><strong>Asaas</strong><small>Pix com QR Code no caixa</small></button><button type="button" class="pdv-method" data-method="cash"><span class="pdv-method-symbol">R$</span><strong>Dinheiro</strong><small>Recebimento no caixa</small></button><button type="button" class="pdv-method" data-method="other"><span class="pdv-method-symbol">▰</span><strong>Outros</strong><small>Cartão ou Pix na maquininha</small></button></div>
      <p id="pdvPending" class="pdv-pending" role="status" hidden></p>
      <section id="pdvManualPayment" class="pdv2-card" hidden><h3 id="pdvManualTitle">Receber em dinheiro</h3><div id="pdvOtherOptions" class="pdv2-grid" hidden><label>Pagamento recebido<select id="pdvOtherType"><option value="card">Cartão</option><option value="pix">Pix</option></select></label><label id="pdvCardKindLabel">Tipo de cartão<select id="pdvCardKind"><option value="Cartão de crédito">Crédito</option><option value="Cartão de débito">Débito</option></select></label></div>
      <div class="pdv2-final"><label id="pdvReceivedLabel">Valor recebido<input id="pdv2Received" type="number" min="0" step="0.01" placeholder="0,00"></label><label id="pdvChangeLabel">Troco<input id="pdv2Change" readonly value="R$ 0,00"></label><label class="full">Observação<input id="pdv2Note" placeholder="Informação adicional do recebimento"></label></div><select id="pdv2Pay" hidden><option>Dinheiro</option><option>Pix</option><option>Cartão de crédito</option><option>Cartão de débito</option></select>
      <label class="pdv-confirm"><input id="pdvReceivedConfirmed" type="checkbox">Confirmo que recebi o pagamento.</label><button id="pdv2Finish" class="pdv2-btn primary" type="button">Confirmar recebimento e dar baixa</button></section>
      <div id="pdvProviders"></div><div id="pdvPaid" class="pdv-paid" hidden><span class="pdv-paid-mark">✓</span><h2>Pagamento confirmado</h2><p id="pdvPaidDescription"></p><div class="pdv2-actions"><button type="button" id="pdvPrintReceipt" class="pdv2-btn primary">Imprimir recibo</button><button type="button" id="pdvNewSale" class="pdv2-btn ghost">Nova venda</button></div></div>
      <div class="pdv2-actions"><button id="pdv2ClearSale" class="pdv2-btn danger" type="button">Limpar venda</button><button id="pdvLeavePending" class="pdv2-btn ghost" type="button" hidden>Deixar cobrança pendente e iniciar outra venda</button></div></section></div>`;
    document.body.append(screen);
    bind(); refreshOptions(); drawCart();
    const hooks = {
      target: 'pdvProviders',
      snapshot: () => { if (!sale.customer || !sale.items.length) throw Error('Adicione itens ao carrinho primeiro.'); return JSON.parse(JSON.stringify({customer:sale.customer,items:sale.items,note:$("pdv2Note").value.trim()})); },
      canCreate: provider => !busy && !receipt && sale.items.length > 0 && (!activeOrder || (!activeOrder.id && activeOrder.provider === provider)),
      isLocked: provider => busy || (!!activeOrder && !(provider === activeOrder.provider && !activeOrder.id)) || !!receipt,
      lock: value => { busy = value; updateControls(); },
      started: (provider,requestId) => { activeOrder ||= {provider,requestId,id:null,status:'creating'}; updateControls(); },
      prepared: (provider,order) => { activeOrder = {...activeOrder,provider,id:order.id,status:order.status,amount:order.amount}; updateControls(); },
      failed: (provider,error,order) => { if (order?.status === 'rejected' || (error.status >= 400 && error.status < 500 && !error.orderId)) activeOrder=null; else activeOrder={...activeOrder,provider,id:error.orderId||activeOrder?.id||null,status:'uncertain'}; updateControls(); },
      orders: async (provider,orders) => {
        if (activeOrder?.provider !== provider || !activeOrder.id) return;
        const order = orders.find(o=>o.id===activeOrder.id); if (!order) return;
        if (['rejected','canceled'].includes(order.status) && !order.posted_at) { activeOrder=null; updateControls(); return; }
        activeOrder={...activeOrder,...order}; if(order.status!=='paid'||!order.posted_at||order.needs_reconciliation)receipt=null; updateControls();
        if (order.status==='paid' && order.posted_at && !order.needs_reconciliation && !receipt && !receiptLoading) {
          receiptLoading=true; try { receipt=await providerReceipt(provider,order); updateControls(); } catch(e) { showMsg(e.message,'error'); } finally { receiptLoading=false; }
        }
      },
      receipt: async (provider,order) => { try { const data=await providerReceipt(provider,order); printReceipt(data); } catch(e) { showMsg(e.message,'error'); } },
      refresh: async () => { if(typeof reloadAll === 'function') await reloadAll(); }
    };
    window.INTEGRO_ASAAS?.mount(hooks); window.INTEGRO_INFINITEPAY?.mount(hooks); updateControls();
    $("pdvOpen").onclick=openCash; $("pdvClose").onclick=closeCash;
    document.querySelector('[data-tab="caixa"]')?.addEventListener('click',openCash);
    document.addEventListener('keydown',event=>{if(!$('pdv2').hidden&&event.key==='Escape')closeCash();if(!$('pdv2').hidden&&event.key==='Tab'){const nodes=[...$('pdv2').querySelectorAll('button,input,select,textarea,a[href]')].filter(el=>!el.disabled&&el.getClientRects().length);const first=nodes[0],last=nodes.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}});
  }

  function openCash() { $('pdv2').hidden=false; document.body.classList.add('pdv-open'); updateControls(); $('pdv2Student').focus(); }
  function closeCash() { if(busy){showMsg('Aguarde a conclusão da operação.');return;} $('pdv2').hidden=true; document.body.classList.remove('pdv-open'); $('pdvOpen')?.focus(); }
  function setStep(value) { step=value; showMsg(''); updateControls(); $('pdv2').scrollTop=0; }
  function setMethod(value) {
    if(busy||activeOrder||receipt)return;
    method=value; $('pdvReceivedConfirmed').checked=false;
    $('pdv2Pay').value=value==='cash'?'Dinheiro':$('pdvOtherType').value==='pix'?'Pix':$('pdvCardKind').value;
    if(value!=='cash')$('pdv2Received').value=totals().total.toFixed(2); else $('pdv2Received').value='';
    calcChange();updateControls();
  }
  function updateControls() {
    if(!$('pdv2'))return;
    const locked=busy||!!activeOrder||!!manualRequest||!!receipt;
    [1,2,3].forEach(value=>{ $('pdvStep'+value).hidden=step!==value; const label=document.querySelector('[data-step-label="'+value+'"]'); label.classList.toggle('current',step===value); label.classList.toggle('done',step>value); if(step===value)label.setAttribute('aria-current','step');else label.removeAttribute('aria-current'); });
    document.querySelectorAll('#pdvStep1 input,#pdvStep1 select,#pdvStep1 button,#pdvStep2 input,#pdvStep2 select,#pdvStep2 button,#pdvStep2 textarea').forEach(el=>el.disabled=locked);
    $('pdvNextPayment').disabled=locked||!sale.items.length;
    $('pdvBackItems').disabled=locked; $('pdvBackItems').hidden=!sale.items.length;
    $('pdvPaymentMethods').hidden=!!receipt;
    document.querySelectorAll('[data-method]').forEach(el=>{el.disabled=locked;el.setAttribute('aria-pressed',String(el.dataset.method===method));});
    $('pdvManualPayment').hidden=!!receipt||!['cash','other'].includes(method);
    $('pdvOtherOptions').hidden=method!=='other'; $('pdvCardKindLabel').hidden=$('pdvOtherType').value!=='card';
    $('pdvReceivedLabel').hidden=method!=='cash';$('pdvChangeLabel').hidden=method!=='cash';
    $('pdvManualTitle').textContent=method==='cash'?'Receber em dinheiro':'Pagamento recebido na maquininha / por fora';
    document.querySelectorAll('#pdvManualPayment input,#pdvManualPayment select').forEach(el=>el.disabled=busy||!!activeOrder||!!manualRequest||!!receipt);
    $('pdv2Finish').disabled=busy||!!activeOrder||!!receipt;
    $('pdv2Finish').textContent=manualRequest?'Conferir / concluir o recebimento':'Confirmar recebimento e dar baixa';
    const pa=$('asaasPanel'),pi=$('infinitepayPanel'); if(pa)pa.hidden=method!=='asaas'||!!receipt; if(pi)pi.hidden=method!=='infinitepay'||!!receipt;
    $('pdvPending').hidden=!activeOrder||!!receipt;
    $('pdvPending').textContent=activeOrder?.needs_reconciliation||activeOrder?.status==='refunded'?'Esta cobrança precisa de conciliação. Confira o pagamento e os lançamentos antes de continuar.':activeOrder?.status==='paid'?'Pagamento recebido. Aguardando o lançamento no caixa para liberar o recibo.':activeOrder?.status==='uncertain'?'A tentativa precisa de conferência. Verifique a cobrança antes de tentar outro pagamento.':'Aguardando a confirmação do pagamento. O recibo será liberado após a baixa.';
    $('pdvPaid').hidden=!receipt; $('pdvPrintReceipt').hidden=!receipt;
    $('pdvPaymentTitle').textContent=receipt?'Venda concluída':sale.items.length?'Como deseja receber?':'Cobranças e recibos';
    $('pdvPaymentCustomer').textContent=sale.customer?`${sale.customer.studentName} · ${sale.customer.payerName}`:'Consulte os recebimentos de cada integração.';
    $('pdvPaymentItems').textContent=`${sale.items.reduce((a,i)=>a+i.qty,0)} item(ns) na venda`;
    $('pdvPaymentTotal').textContent=money(totals().total);
    $('pdv2ClearSale').hidden=!!receipt||!!activeOrder||!!manualRequest; $('pdv2ClearSale').disabled=busy;
    $('pdvLeavePending').hidden=!activeOrder?.id||activeOrder.status==='paid'||!!receipt; $('pdvLeavePending').disabled=busy;
    if(receipt)$('pdvPaidDescription').textContent=`${money(receipt.totals.total)} recebidos por ${receipt.payment}. O recibo já está disponível.`;
    window.dispatchEvent(new Event('integro:checkout-lock'));
  }

  async function providerReceipt(provider,order) {
    if(order.status!=='paid'||!order.posted_at||order.needs_reconciliation)throw Error('O recibo fica disponível somente após a baixa do pagamento.');
    const column=provider==='asaas'?'asaas_order_id':'infinitepay_order_id';
    const {data:rows,error}=await db.from('finance_entries').select('*').eq('school_id',dataStore.school.id).eq(column,order.id).order(provider==='asaas'?'asaas_item_index':'infinitepay_item_index');
    if(error)throw error;
    if(!rows?.length||Math.round(rows.reduce((sum,r)=>sum+Number(r.amount_paid),0)*100)!==Number(order.amount))throw Error('A baixa ainda está sendo conciliada. Atualize a cobrança para liberar o recibo.');
    const first=rows[0],items=rows.map(row=>({desc:row.description,typeLabel:typeLabel(row.entry_type),qty:1,grossUnit:Number(row.gross_amount),discountTotal:Number(row.discount_amount),total:Number(row.amount_paid)}));
    return {saleCode:'VENDA-'+order.id.slice(0,8).toUpperCase(),rows,items,customer:{studentName:first.student_name_snapshot,payerName:first.payer_name,payerDocument:first.payer_document},totals:{gross:rows.reduce((s,r)=>s+Number(r.gross_amount),0),discount:rows.reduce((s,r)=>s+Number(r.discount_amount),0),total:Number(order.amount)/100},received:Number(order.amount)/100,change:0,payment:provider==='asaas'?'Pix · Asaas':first.payment_method+' · InfinitePay',note:'',date:first.created_at};
  }

  function bind() {
    $("pdv2Student").onchange = fillCustomer;
    $("pdv2Package").onchange = applyPackage;
    $("pdv2Discount").onchange = applyDiscount;
    ["pdv2Gross", "pdv2DiscValue"].forEach((id) => $(id).oninput = calcFinal);
    ["pdv2Final", "pdv2Qty", "pdv2Received"].forEach((id) => $(id).oninput = calcChange);
    $('pdvNextCustomer').onclick=()=>{try{sale.customer=null;sale.customer=getCustomer();lockCustomer();setStep(2);}catch(e){showMsg(e.message,'error');}};
    $('pdvBackCustomer').onclick=()=>{if(!busy&&!activeOrder)setStep(1);};
    $('pdvNextPayment').onclick=()=>{if(sale.items.length)setStep(3);};
    $('pdvBackItems').onclick=()=>{if(!busy&&!activeOrder&&!manualRequest)setStep(sale.items.length?2:1);};
    document.querySelectorAll('[data-method]').forEach(el=>el.onclick=()=>setMethod(el.dataset.method));
    ['pdvOtherType','pdvCardKind'].forEach(id=>$(id).onchange=()=>setMethod('other'));
    $('pdvPrintReceipt').onclick=()=>{if(receipt)printReceipt(receipt);};
    $('pdvNewSale').onclick=clearSaleNow;
    $('pdvOpenHistory').onclick=()=>{step=3;method='asaas';updateControls();document.querySelectorAll('[data-method]').forEach(el=>el.disabled=false);};
    $('pdvLeavePending').onclick=()=>{if(confirm('Esta cobrança continua válida e poderá ser paga. Iniciar uma nova venda sem lançar este pagamento manualmente?'))clearSaleNow();};
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
    const locked = busy || !!activeOrder || !!receipt;
    ["pdv2Student", "pdv2ManualStudent", "pdv2Payer", "pdv2Doc"].forEach((id) => { if ($(id)) $(id).disabled = locked; });
    $("pdv2Lock").hidden = !locked;
    $("pdv2CustomerBox").hidden = !sale.customer;
    if (!sale.customer) return;
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
      if (busy || activeOrder || receipt) return;
      if (!sale.customer) sale.customer = getCustomer();
      const qty = n($("pdv2Qty").value);
      if(!Number.isInteger(qty)||qty<1||qty>1000)throw Error("Informe uma quantidade inteira entre 1 e 1.000.");
      if(n($("pdv2DiscValue").value)<0)throw Error("O desconto não pode ser negativo.");
      const gross = Math.round(n($("pdv2Gross").value)*100)/100;
      const discount = Math.round(Math.min(n($("pdv2DiscValue").value), gross)*100)/100;
      const finalUnit = (Math.round(gross*100)-Math.round(discount*100))/100;
      if (finalUnit <= 0 || qty > 1000) throw Error("Confira a quantidade e o valor final do item.");
      const description = $("pdv2Desc").value.trim();
      if (gross <= 0) throw new Error("Informe o valor bruto do item.");
      if (!description) throw new Error("Informe a descrição do item.");
      const pkg = dataStore.packages.find((item) => item.id === $("pdv2Package").value);
      const discountData = dataStore.discounts.find((item) => item.id === $("pdv2Discount").value);
      sale.items.push({ id: Date.now() + "-" + Math.random().toString(16).slice(2), type: $("pdv2Type").value, typeLabel: typeLabel($("pdv2Type").value), packageId: pkg?.id || null, packageName: pkg?.name || null, discountId: discountData?.id || null, discountName: discountData?.name || null, qty, grossUnit: gross, discountUnit: discount, finalUnit, grossTotal: Math.round(gross*100) * qty/100, discountTotal: Math.round(discount*100) * qty/100, total: Math.round(finalUnit*100) * qty/100, ref: $("pdv2Ref").value.trim() || null, desc: description });
      lockCustomer();
      clearItem();
      drawCart();
      showMsg("Item adicionado. Você já pode lançar outro produto no mesmo nome.");
    } catch (error) {
      showMsg(error.message, "error");
    }
  }

  function totals() {
    const cents=sale.items.reduce((acc,item)=>({gross:acc.gross+Math.round(item.grossTotal*100),discount:acc.discount+Math.round(item.discountTotal*100),total:acc.total+Math.round(item.total*100)}),{gross:0,discount:0,total:0});
    return {gross:cents.gross/100,discount:cents.discount/100,total:cents.total/100};
  }

  function drawCart() {
    const cart = $("pdv2Cart");
    const total = totals();
    if (!sale.items.length) cart.innerHTML = '<div class="pdv2-empty">Nenhum item no carrinho.</div>';
    else cart.innerHTML = sale.items.map((item) => `<article class="pdv2-item"><div class="pdv2-head"><div><strong>${safe(item.desc)}</strong><br><span class="pdv2-small">${safe(item.typeLabel)} • Qtd. ${item.qty}${item.packageName ? ` • ${safe(item.packageName)}` : ""}</span></div><span class="amount">${money(item.total)}</span></div><span class="pdv2-small">Bruto: ${money(item.grossTotal)} • Desconto: ${money(item.discountTotal)}</span><br><button class="pdv2-remove" data-rm="${item.id}" type="button">Remover</button></article>`).join("");
    cart.querySelectorAll("[data-rm]").forEach((button) => button.onclick = () => { if(busy||activeOrder||receipt)return; sale.items = sale.items.filter((item) => item.id !== button.dataset.rm); lockCustomer(); drawCart(); });
    $("pdv2Subtotal").textContent = money(total.gross);
    $("pdv2DiscountTotal").textContent = money(total.discount);
    $("pdv2Total").textContent = money(total.total);
    if ($("pdv2Pay").value !== "Dinheiro" && total.total) $("pdv2Received").value = total.total.toFixed(2);
    calcChange();
    $("pdvItemCount").textContent = sale.items.reduce((sum,item)=>sum+item.qty,0)+" itens";
    updateControls();
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
    if(busy)return;
    activeOrder=null;receipt=null;manualRequest=null;method=null;step=1;
    $("pdvReceivedConfirmed").checked=false;showMsg("");
    sale.customer = null;
    sale.items = [];
    ["pdv2Student", "pdv2ManualStudent", "pdv2Payer", "pdv2Doc", "pdv2Received", "pdv2Note"].forEach((id) => { if ($(id)) $(id).value = ""; });
    clearItem();
    lockCustomer();
    drawCart();
    window.dispatchEvent(new Event('integro:pos-new-sale'));
  }

  async function finish() {
    if(busy||activeOrder||receipt)return;
    try {
      if(!["cash","other"].includes(method))throw Error("Escolha uma forma de pagamento.");
      if(!$("pdvReceivedConfirmed").checked)throw Error("Confirme o recebimento antes de dar baixa.");
      if (!db || !dataStore.school?.id || !dataStore.user?.id) throw new Error("Sistema ainda carregando. Aguarde e tente novamente.");
      if (!cyclePolicy?.getCurrentCycleRange) throw new Error("Política do ciclo financeiro indisponível. Atualize a página e tente novamente.");
      const transactionMoment = new Date();
      const range = cyclePolicy.getCurrentCycleRange(transactionMoment);
      const liveCycle = window.INTEGRO_FINANCE_CURRENT_CYCLE;
      if (range.isClosingWindow) throw new Error("O caixa está em fechamento nos dias 9 e 10. O novo ciclo será aberto no dia 11.");
      if (!liveCycle?.id) throw new Error("O ciclo financeiro ainda está carregando. Aguarde e tente novamente.");
      if (String(liveCycle.status || "").trim().toLowerCase() === "fechado") {
        throw new Error("Este ciclo financeiro está fechado. Não é possível registrar novas entradas.");
      }
      if (
        liveCycle.cycle_key !== range.cycleKey ||
        liveCycle.start_date !== range.startISO ||
        liveCycle.end_date !== range.endISO
      ) {
        throw new Error("O ciclo exibido não corresponde ao período atual. Atualize a página antes de finalizar a venda.");
      }
      if (!sale.customer || !sale.items.length) throw new Error("Adicione pelo menos um item ao carrinho.");
      const total = totals();
      let received = n($("pdv2Received").value);
      if (!received && $("pdv2Pay").value !== "Dinheiro") { received = total.total; $("pdv2Received").value = received.toFixed(2); }
      if (received < total.total) throw new Error("O valor recebido não pode ser menor que o total da venda.");
      const change = Math.max(received - total.total, 0);
      manualRequest ||= crypto.randomUUID();
      const saleCode = "VENDA-" + manualRequest.slice(0,8).toUpperCase();
      busy=true;updateControls();
      const note = $("pdv2Note").value.trim();
      const rows = sale.items.map((item, index) => ({
        school_id: dataStore.school.id,
        cash_cycle_id: liveCycle.id,
        pos_sale_id: manualRequest,
        pos_item_index: index+1,
        entry_type: item.type,
        entry_date: today(transactionMoment),
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
      let result=await db.from('finance_entries').select('*').eq('school_id',dataStore.school.id).eq('pos_sale_id',manualRequest).order('pos_item_index');
      if(result.error)throw result.error;
      if(!result.data?.length){
        result=await db.from("finance_entries").insert(rows).select('*');
        if(result.error?.code==='23505')result=await db.from('finance_entries').select('*').eq('school_id',dataStore.school.id).eq('pos_sale_id',manualRequest).order('pos_item_index');
      }
      if(result.error)throw result.error;
      const saved=result.data||[];
      if(saved.length!==rows.length||Math.round(saved.reduce((sum,row)=>sum+Number(row.amount_paid),0)*100)!==Math.round(total.total*100))throw Error('A confirmação do lançamento está pendente. Confira antes de repetir.');
      receipt={saleCode,rows:saved,customer:{...sale.customer},items:sale.items.slice(),totals:total,received,change,payment:$("pdv2Pay").value,note,date:saved[0].created_at};
      showMsg('Pagamento registrado. O recibo está disponível para impressão.');
      if(typeof reloadAll==='function')await reloadAll();
    } catch(error) {
      showMsg((error.message||'Erro ao registrar recebimento.')+(manualRequest&&!receipt?' Use “Conferir / concluir o recebimento” para retomar a mesma venda.':''),'error');
    } finally { busy=false;updateControls(); }
  }

  function printReceipt(data) {
    const receipts = data.rows.map((row) => String(row.receipt_number || "").padStart(5, "0")).filter(Boolean).join(", ");
    const itemRows = data.items.map((item, index) => `<tr><td>${index + 1}</td><td>${safe(item.desc)}<br><small>${safe(item.typeLabel)}${item.packageName ? ` • ${safe(item.packageName)}` : ""}</small></td><td>${item.qty}</td><td style="text-align:right">${money(item.grossUnit)}</td><td style="text-align:right">${money(item.discountTotal)}</td><td style="text-align:right"><strong>${money(item.total)}</strong></td></tr>`).join("");
    const documentLine = companyLine("getCompanyDocumentLine");
    const addressLine = companyLine("getCompanyAddressLine");
    const contactLine = companyLine("getCompanyContactLine");
    const via = (name, second) => `<section class="receipt ${second ? "second" : ""}"><div class="company"><h2>${safe(companyName())}</h2>${documentLine ? `<p>${safe(documentLine)}</p>` : ""}${addressLine ? `<p>${safe(addressLine)}</p>` : ""}${contactLine ? `<p>${safe(contactLine)}</p>` : ""}</div><div class="receipt-head"><div><h1>RECIBO DE VENDA</h1><p>${safe(name)} • ${safe(data.saleCode)}</p></div><strong>${receipts ? `Recibos: ${safe(receipts)}` : ""}</strong></div><p><strong>Recebemos de:</strong> ${safe(data.customer.payerName)}</p><p><strong>CPF/CNPJ:</strong> ${safe(data.customer.payerDocument)}</p><p><strong>Aluno/beneficiário:</strong> ${safe(data.customer.studentName)}</p><table><thead><tr><th>#</th><th>Item</th><th>Qtd.</th><th>Unit.</th><th>Desc.</th><th>Total</th></tr></thead><tbody>${itemRows}</tbody></table><div class="totals"><p><span>Subtotal</span><b>${money(data.totals.gross)}</b></p><p><span>Descontos</span><b>${money(data.totals.discount)}</b></p><p><span>Total pago</span><b>${money(data.totals.total)}</b></p><p><span>Pagamento</span><b>${safe(data.payment)}</b></p><p><span>Recebido</span><b>${money(data.received)}</b></p><p><span>Troco</span><b>${money(data.change)}</b></p></div>${data.note ? `<p><strong>Observação:</strong> ${safe(data.note)}</p>` : ""}<p><strong>Data:</strong> ${new Date(data.date||Date.now()).toLocaleString("pt-BR")}</p><div class="signature"><span></span><p>Assinatura / ${safe(companyName())}</p></div></section>`;
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
