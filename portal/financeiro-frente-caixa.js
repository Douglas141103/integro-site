(function () {
  if (window.__INTEGRO_FRENTE_CAIXA_PDV__) return;
  window.__INTEGRO_FRENTE_CAIXA_PDV__ = true;

  const cfg = window.INTEGRO_SUPABASE || {};
  const supabaseGlobal = window.supabase;
  const localClient = typeof client !== 'undefined'
    ? client
    : (supabaseGlobal?.createClient ? supabaseGlobal.createClient(cfg.url, cfg.anonKey) : null);

  const sale = {
    customer: null,
    items: [],
  };

  const $id = (id) => document.getElementById(id);

  function appState() {
    try {
      return typeof state !== 'undefined' ? state : null;
    } catch (error) {
      return null;
    }
  }

  function brMoney(value) {
    return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function num(value) {
    return Number(String(value || '0').replace(',', '.')) || 0;
  }

  function safe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function getEntryTypeLabel(type) {
    if (typeof entryTypeLabel === 'function') return entryTypeLabel(type);
    const labels = {
      mensalidade: 'Mensalidade',
      matricula: 'Matrícula',
      avaliacao: 'Avaliação / diagnóstico',
      material: 'Material',
      servico: 'Serviço / atendimento avulso',
      taxa: 'Taxa',
      outro: 'Outra entrada'
    };
    return labels[type] || 'Entrada';
  }

  function companyName() {
    try {
      if (typeof getCompanyName === 'function') return getCompanyName();
    } catch (error) {}
    return appState()?.school?.name || 'INSTITUTO INTEGRO';
  }

  function companyLine(fnName) {
    try {
      const fn = window[fnName];
      if (typeof fn === 'function') return fn();
    } catch (error) {}
    return '';
  }

  function students() {
    return (appState()?.students || []).slice().sort((a, b) => String(a.full_name || '').localeCompare(String(b.full_name || '')));
  }

  function packages() {
    return (appState()?.packages || []).filter((p) => p.active !== false);
  }

  function discounts() {
    return (appState()?.discounts || []).filter((d) => d.active !== false);
  }

  function showLocalStatus(message, type = 'ok') {
    if (typeof showStatus === 'function') {
      showStatus(message, type === 'error' ? 'error' : 'ok');
      return;
    }

    const box = $id('statusBox');
    if (!box) return alert(message);
    box.hidden = false;
    box.className = `status ${type}`;
    box.textContent = message;
    setTimeout(() => { box.hidden = true; }, 6500);
  }

  function addStyles() {
    if ($id('pdvFrenteCaixaStyle')) return;
    const style = document.createElement('style');
    style.id = 'pdvFrenteCaixaStyle';
    style.textContent = `
      .pdv-shell{display:grid;grid-template-columns:minmax(360px,1.05fr) minmax(330px,.95fr);gap:22px;align-items:start}.pdv-card{background:#fff;border:1px solid rgba(15,61,46,.10);border-radius:24px;padding:24px;box-shadow:0 14px 34px rgba(7,49,35,.08)}.pdv-card h2{color:#003f31;margin:0 0 8px}.pdv-card h3{color:#003f31;margin:18px 0 10px}.pdv-muted{color:#61746d;line-height:1.45}.pdv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.pdv-grid label,.pdv-card label{display:flex;flex-direction:column;gap:7px;font-weight:800;color:#003f31}.pdv-grid .full,.pdv-card .full{grid-column:1/-1}.pdv-grid input,.pdv-grid select,.pdv-grid textarea,.pdv-card input,.pdv-card select,.pdv-card textarea{border:1px solid #c9ded5;border-radius:16px;padding:13px 14px;font:inherit;font-weight:700;background:#fff;color:#073b31;min-width:0}.pdv-line{height:1px;background:#e2eee8;margin:20px 0}.pdv-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.pdv-btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;padding:13px 18px;font-weight:900;cursor:pointer;transition:.2s ease}.pdv-btn.primary{background:#155640;color:#fff}.pdv-btn.primary:hover{background:#0f3d2e;transform:translateY(-1px)}.pdv-btn.ghost{background:#f4fbf7;color:#0f3d2e;border:1px solid #cfe4d9}.pdv-btn.danger{background:#fff1f0;color:#b42318;border:1px solid #ffd3ce}.pdv-customer-box{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;background:#f4fbf7;border:1px solid #d7e9df;border-radius:18px;padding:14px;margin:14px 0}.pdv-customer-box div{min-width:0}.pdv-customer-box span{display:block;color:#61746d;font-size:.82rem;font-weight:800}.pdv-customer-box strong{display:block;color:#073b31;overflow:hidden;text-overflow:ellipsis}.pdv-cart{display:grid;gap:12px;max-height:360px;overflow:auto;padding-right:4px}.pdv-empty{border:1px dashed #c9ded5;border-radius:18px;padding:18px;text-align:center;color:#61746d;background:#f8fcfa}.pdv-item{border:1px solid #d7e9df;border-radius:18px;padding:14px;background:#fbfefc}.pdv-item-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.pdv-item strong{color:#003f31}.pdv-item small{color:#61746d}.pdv-item .amount{font-weight:900;color:#0f3d2e;white-space:nowrap}.pdv-remove{margin-top:9px;border:0;background:transparent;color:#b42318;font-weight:900;cursor:pointer}.pdv-summary{display:grid;gap:10px;margin-top:18px}.pdv-total-row{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid #e3eee8;padding-bottom:8px;color:#30443c}.pdv-total-row.grand{font-size:1.35rem;color:#003f31;border:0;font-weight:900;background:#f4fbf7;border-radius:18px;padding:14px}.pdv-change{font-size:1.3rem;color:#0f3d2e;font-weight:900}.pdv-lock{background:#fff8e6;border:1px solid rgba(216,169,75,.38);color:#624000;border-radius:16px;padding:12px 14px;font-weight:800;margin:12px 0}.pdv-quick-types{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 16px}.pdv-chip{border:1px solid #cfe4d9;background:#fff;border-radius:999px;padding:9px 12px;color:#0f3d2e;font-weight:900;cursor:pointer}.pdv-chip:hover{background:#e8f5ee}.pdv-final-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.pdv-final-grid .full{grid-column:1/-1}@media(max-width:980px){.pdv-shell{grid-template-columns:1fr}.pdv-grid,.pdv-final-grid,.pdv-customer-box{grid-template-columns:1fr}}`;
    document.head.appendChild(style);
  }

  function entryTypeOptions() {
    return [
      ['mensalidade', 'Mensalidade'],
      ['matricula', 'Matrícula'],
      ['avaliacao', 'Avaliação / diagnóstico'],
      ['material', 'Material'],
      ['servico', 'Serviço / atendimento avulso'],
      ['taxa', 'Taxa'],
      ['outro', 'Outra entrada']
    ].map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
  }

  function renderShell() {
    const panel = $id('caixa');
    if (!panel || $id('pdvShell')) return;

    addStyles();

    panel.innerHTML = `
      <div class="pdv-shell" id="pdvShell">
        <section class="pdv-card">
          <h2>Frente de caixa</h2>
          <p class="pdv-muted">Monte uma venda com vários produtos, taxas ou mensalidades para o mesmo pagador. Primeiro escolha a pessoa, depois adicione quantos itens forem necessários e finalize com forma de pagamento, valor recebido e troco.</p>

          <div id="pdvLockBox" class="pdv-lock" hidden></div>

          <h3>1. Cliente / pagador</h3>
          <div class="pdv-grid" id="pdvCustomerFields">
            <label>
              Aluno da base
              <select id="pdvStudentId"><option value="">Selecione um aluno</option></select>
            </label>
            <label>
              Ou digite o aluno / beneficiário
              <input id="pdvStudentManual" type="text" placeholder="Nome do aluno ou beneficiário" />
            </label>
            <label>
              Responsável / pagador *
              <input id="pdvPayerName" type="text" placeholder="Nome completo" />
            </label>
            <label>
              CPF/CNPJ do pagador *
              <input id="pdvPayerDocument" type="text" placeholder="000.000.000-00" />
            </label>
          </div>

          <div id="pdvCustomerSummary" class="pdv-customer-box" hidden></div>

          <div class="pdv-line"></div>

          <h3>2. Produto, mensalidade ou serviço</h3>
          <div class="pdv-quick-types">
            <button class="pdv-chip" type="button" data-pdv-type="mensalidade">Mensalidade</button>
            <button class="pdv-chip" type="button" data-pdv-type="matricula">Matrícula</button>
            <button class="pdv-chip" type="button" data-pdv-type="avaliacao">Avaliação</button>
            <button class="pdv-chip" type="button" data-pdv-type="material">Material</button>
            <button class="pdv-chip" type="button" data-pdv-type="servico">Serviço</button>
          </div>

          <div class="pdv-grid">
            <label>
              Tipo de item *
              <select id="pdvEntryType">${entryTypeOptions()}</select>
            </label>
            <label>
              Pacote / produto cadastrado
              <select id="pdvPackageId"><option value="">Selecione um pacote</option></select>
            </label>
            <label>
              Desconto
              <select id="pdvDiscountId"><option value="">Sem desconto</option></select>
            </label>
            <label>
              Quantidade
              <input id="pdvQty" type="number" min="1" step="1" value="1" />
            </label>
            <label>
              Valor bruto unitário *
              <input id="pdvGrossAmount" type="number" min="0" step="0.01" placeholder="0,00" />
            </label>
            <label>
              Desconto unitário
              <input id="pdvDiscountAmount" type="number" min="0" step="0.01" placeholder="0,00" />
            </label>
            <label>
              Valor unitário final
              <input id="pdvUnitFinal" type="number" min="0" step="0.01" placeholder="0,00" />
            </label>
            <label>
              Referência
              <input id="pdvCompetence" type="text" placeholder="Ex.: Julho/2026, Semana 1 ou Avulso" />
            </label>
            <label class="full">
              Descrição do item *
              <textarea id="pdvDescription" rows="2" placeholder="Ex.: Mensalidade de julho, matrícula, venda de apostila, avaliação diagnóstica."></textarea>
            </label>
          </div>

          <div class="pdv-actions">
            <button class="pdv-btn primary" type="button" id="pdvAddItemBtn">Adicionar ao carrinho</button>
            <button class="pdv-btn ghost" type="button" id="pdvClearItemBtn">Limpar item</button>
          </div>
        </section>

        <aside class="pdv-card">
          <h2>Carrinho da venda</h2>
          <p class="pdv-muted">Os próximos lançamentos ficam no mesmo nome do primeiro cliente até finalizar ou limpar a venda.</p>
          <div id="pdvCart" class="pdv-cart"></div>

          <div class="pdv-summary">
            <div class="pdv-total-row"><span>Subtotal bruto</span><strong id="pdvSubtotal">R$ 0,00</strong></div>
            <div class="pdv-total-row"><span>Descontos</span><strong id="pdvDiscountTotal">R$ 0,00</strong></div>
            <div class="pdv-total-row grand"><span>Total da venda</span><strong id="pdvTotal">R$ 0,00</strong></div>
          </div>

          <div class="pdv-line"></div>

          <h3>3. Finalizar venda</h3>
          <div class="pdv-final-grid">
            <label>
              Forma de pagamento
              <select id="pdvPaymentMethod">
                <option>Dinheiro</option>
                <option>Pix</option>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
                <option>Transferência</option>
                <option>Misto</option>
                <option>Outro</option>
              </select>
            </label>
            <label>
              Valor recebido / entregue
              <input id="pdvAmountReceived" type="number" min="0" step="0.01" placeholder="0,00" />
            </label>
            <label>
              Troco
              <input id="pdvChange" type="text" readonly value="R$ 0,00" />
            </label>
            <label>
              Observação do pagamento
              <input id="pdvPaymentNote" type="text" placeholder="Ex.: parte Pix, parte dinheiro" />
            </label>
          </div>

          <div class="pdv-actions">
            <button class="pdv-btn primary" type="button" id="pdvFinalizeBtn">Finalizar venda e imprimir recibo</button>
            <button class="pdv-btn danger" type="button" id="pdvClearSaleBtn">Limpar venda</button>
          </div>
        </aside>
      </div>
    `;

    bindPdvEvents();
    refreshOptions();
    renderCart();
  }

  function bindPdvEvents() {
    $id('pdvStudentId')?.addEventListener('change', fillCustomerFromStudent);
    $id('pdvPackageId')?.addEventListener('change', applyPdvPackage);
    $id('pdvDiscountId')?.addEventListener('change', applyPdvDiscount);
    $id('pdvGrossAmount')?.addEventListener('input', recalcPdvUnit);
    $id('pdvDiscountAmount')?.addEventListener('input', recalcPdvUnit);
    $id('pdvUnitFinal')?.addEventListener('input', recalcPayment);
    $id('pdvQty')?.addEventListener('input', recalcPayment);
    $id('pdvAmountReceived')?.addEventListener('input', recalcPayment);
    $id('pdvPaymentMethod')?.addEventListener('change', () => {
      if ($id('pdvPaymentMethod').value !== 'Dinheiro' && !$id('pdvAmountReceived').value) {
        $id('pdvAmountReceived').value = totals().total.toFixed(2);
      }
      recalcPayment();
    });
    $id('pdvAddItemBtn')?.addEventListener('click', addItem);
    $id('pdvClearItemBtn')?.addEventListener('click', clearItemFields);
    $id('pdvClearSaleBtn')?.addEventListener('click', clearSale);
    $id('pdvFinalizeBtn')?.addEventListener('click', finalizeSale);
    document.querySelectorAll('[data-pdv-type]').forEach((btn) => {
      btn.addEventListener('click', () => {
        $id('pdvEntryType').value = btn.dataset.pdvType;
        if (!$id('pdvDescription').value.trim()) $id('pdvDescription').value = `Recebimento referente a ${getEntryTypeLabel(btn.dataset.pdvType).toLowerCase()}.`;
      });
    });
  }

  function refreshOptions() {
    const studentSelect = $id('pdvStudentId');
    const packageSelect = $id('pdvPackageId');
    const discountSelect = $id('pdvDiscountId');

    if (studentSelect) {
      const current = studentSelect.value;
      studentSelect.innerHTML = '<option value="">Selecione um aluno</option>' + students().map((s) => `<option value="${s.id}">${safe(s.full_name)}</option>`).join('');
      studentSelect.value = current;
    }

    if (packageSelect) {
      const current = packageSelect.value;
      packageSelect.innerHTML = '<option value="">Selecione um pacote</option>' + packages().map((p) => `<option value="${p.id}">${safe(p.name)} — ${brMoney(p.default_amount)}</option>`).join('');
      packageSelect.value = current;
    }

    if (discountSelect) {
      const current = discountSelect.value;
      discountSelect.innerHTML = '<option value="">Sem desconto</option>' + discounts().map((d) => {
        const label = d.discount_type === 'percentual' ? `${Number(d.value || 0)}%` : brMoney(d.value);
        return `<option value="${d.id}">${safe(d.name)} — ${label}</option>`;
      }).join('');
      discountSelect.value = current;
    }
  }

  function selectedStudent() {
    return students().find((s) => s.id === $id('pdvStudentId')?.value) || null;
  }

  function fillCustomerFromStudent() {
    const s = selectedStudent();
    if (!s) return;
    $id('pdvStudentManual').value = '';
    if (!$id('pdvPayerName').value.trim()) $id('pdvPayerName').value = s.guardian_1_name || '';
    if (!$id('pdvPayerDocument').value.trim()) $id('pdvPayerDocument').value = s.guardian_1_cpf || '';
  }

  function currentCustomer() {
    if (sale.customer) return sale.customer;

    const s = selectedStudent();
    const manual = $id('pdvStudentManual')?.value.trim() || '';
    const studentName = s?.full_name || manual;
    const payerName = $id('pdvPayerName')?.value.trim() || s?.guardian_1_name || '';
    const payerDocument = $id('pdvPayerDocument')?.value.trim() || s?.guardian_1_cpf || '';

    if (!studentName) throw new Error('Informe o aluno/beneficiário ou selecione um aluno da base.');
    if (!payerName || !payerDocument) throw new Error('Informe nome e CPF/CNPJ do responsável/pagador.');

    return {
      studentId: s?.id || null,
      studentName,
      payerName,
      payerDocument,
      phone: s?.guardian_1_phone || '',
      email: s?.guardian_1_email || ''
    };
  }

  function setCustomerLocked(locked) {
    ['pdvStudentId', 'pdvStudentManual', 'pdvPayerName', 'pdvPayerDocument'].forEach((id) => {
      const el = $id(id);
      if (el) el.disabled = locked;
    });

    const lock = $id('pdvLockBox');
    const summary = $id('pdvCustomerSummary');

    if (!lock || !summary) return;

    if (!locked || !sale.customer) {
      lock.hidden = true;
      summary.hidden = true;
      summary.innerHTML = '';
      return;
    }

    lock.hidden = false;
    lock.textContent = `Venda em andamento para ${sale.customer.payerName}. Os próximos itens serão lançados no mesmo nome.`;
    summary.hidden = false;
    summary.innerHTML = `
      <div><span>Aluno/beneficiário</span><strong>${safe(sale.customer.studentName)}</strong></div>
      <div><span>Pagador</span><strong>${safe(sale.customer.payerName)}</strong></div>
      <div><span>CPF/CNPJ</span><strong>${safe(sale.customer.payerDocument)}</strong></div>
      <div><span>Contato</span><strong>${safe(sale.customer.phone || sale.customer.email || 'Não informado')}</strong></div>
    `;
  }

  function applyPdvPackage() {
    const p = packages().find((x) => x.id === $id('pdvPackageId')?.value);
    if (p) {
      $id('pdvGrossAmount').value = Number(p.default_amount || 0).toFixed(2);
      if (!$id('pdvDescription').value.trim()) $id('pdvDescription').value = `Pagamento referente ao pacote ${p.name}.`;
    }
    applyPdvDiscount();
  }

  function applyPdvDiscount() {
    const gross = num($id('pdvGrossAmount')?.value);
    const d = discounts().find((x) => x.id === $id('pdvDiscountId')?.value);
    let discount = 0;
    if (d) discount = d.discount_type === 'percentual' ? gross * (Number(d.value || 0) / 100) : Number(d.value || 0);
    discount = Math.min(discount, gross);
    $id('pdvDiscountAmount').value = discount.toFixed(2);
    recalcPdvUnit();
  }

  function recalcPdvUnit() {
    const gross = num($id('pdvGrossAmount')?.value);
    const discount = Math.min(num($id('pdvDiscountAmount')?.value), gross);
    $id('pdvUnitFinal').value = Math.max(gross - discount, 0).toFixed(2);
    recalcPayment();
  }

  function clearItemFields() {
    $id('pdvEntryType').value = 'mensalidade';
    $id('pdvPackageId').value = '';
    $id('pdvDiscountId').value = '';
    $id('pdvQty').value = '1';
    $id('pdvGrossAmount').value = '';
    $id('pdvDiscountAmount').value = '';
    $id('pdvUnitFinal').value = '';
    $id('pdvDescription').value = '';
  }

  function addItem() {
    try {
      const customer = currentCustomer();
      if (!sale.customer) sale.customer = customer;

      const qty = Math.max(1, Math.floor(num($id('pdvQty')?.value) || 1));
      const grossUnit = num($id('pdvGrossAmount')?.value);
      const discountUnit = Math.min(num($id('pdvDiscountAmount')?.value), grossUnit);
      const finalUnit = num($id('pdvUnitFinal')?.value) || Math.max(grossUnit - discountUnit, 0);
      const description = $id('pdvDescription')?.value.trim();

      if (grossUnit <= 0) throw new Error('Informe o valor bruto do item.');
      if (finalUnit < 0) throw new Error('O valor final do item não pode ser negativo.');
      if (!description) throw new Error('Informe a descrição do item.');

      const p = packages().find((x) => x.id === $id('pdvPackageId')?.value);
      const d = discounts().find((x) => x.id === $id('pdvDiscountId')?.value);

      sale.items.push({
        id: String(Date.now()) + Math.random().toString(16).slice(2),
        entryType: $id('pdvEntryType').value,
        entryTypeLabel: getEntryTypeLabel($id('pdvEntryType').value),
        packageId: p?.id || null,
        packageName: p?.name || null,
        discountId: d?.id || null,
        discountName: d?.name || null,
        qty,
        grossUnit,
        discountUnit,
        finalUnit,
        grossTotal: grossUnit * qty,
        discountTotal: discountUnit * qty,
        total: finalUnit * qty,
        competence: $id('pdvCompetence')?.value.trim() || null,
        description
      });

      setCustomerLocked(true);
      clearItemFields();
      renderCart();
      showLocalStatus('Item adicionado ao carrinho. Você pode lançar outro produto para o mesmo pagador.');
    } catch (error) {
      showLocalStatus(error.message, 'error');
    }
  }

  function removeItem(id) {
    sale.items = sale.items.filter((item) => item.id !== id);
    if (!sale.items.length) {
      sale.customer = null;
      setCustomerLocked(false);
    }
    renderCart();
  }

  function totals() {
    return sale.items.reduce((acc, item) => {
      acc.gross += item.grossTotal;
      acc.discount += item.discountTotal;
      acc.total += item.total;
      return acc;
    }, { gross: 0, discount: 0, total: 0 });
  }

  function renderCart() {
    const cart = $id('pdvCart');
    if (!cart) return;

    if (!sale.items.length) {
      cart.innerHTML = '<div class="pdv-empty">Nenhum item no carrinho. Adicione mensalidades, materiais, taxas ou serviços para finalizar a venda.</div>';
    } else {
      cart.innerHTML = sale.items.map((item) => `
        <article class="pdv-item">
          <div class="pdv-item-head">
            <div>
              <strong>${safe(item.description)}</strong><br>
              <small>${safe(item.entryTypeLabel)} • Qtd. ${item.qty}${item.packageName ? ` • ${safe(item.packageName)}` : ''}</small>
            </div>
            <span class="amount">${brMoney(item.total)}</span>
          </div>
          <small>Bruto: ${brMoney(item.grossTotal)} • Desconto: ${brMoney(item.discountTotal)}</small><br>
          <button class="pdv-remove" type="button" data-remove-item="${item.id}">Remover</button>
        </article>
      `).join('');
      cart.querySelectorAll('[data-remove-item]').forEach((btn) => btn.addEventListener('click', () => removeItem(btn.dataset.removeItem)));
    }

    const t = totals();
    $id('pdvSubtotal').textContent = brMoney(t.gross);
    $id('pdvDiscountTotal').textContent = brMoney(t.discount);
    $id('pdvTotal').textContent = brMoney(t.total);

    if ($id('pdvPaymentMethod')?.value !== 'Dinheiro' && sale.items.length) {
      $id('pdvAmountReceived').value = t.total.toFixed(2);
    }

    recalcPayment();
  }

  function recalcPayment() {
    const t = totals();
    const received = num($id('pdvAmountReceived')?.value);
    const change = Math.max(received - t.total, 0);
    if ($id('pdvChange')) $id('pdvChange').value = brMoney(change);
  }

  function clearSale() {
    if (sale.items.length && !confirm('Limpar a venda atual?')) return;
    sale.customer = null;
    sale.items = [];
    ['pdvStudentId', 'pdvStudentManual', 'pdvPayerName', 'pdvPayerDocument', 'pdvAmountReceived', 'pdvPaymentNote', 'pdvCompetence'].forEach((id) => {
      const el = $id(id);
      if (el) el.value = '';
    });
    clearItemFields();
    setCustomerLocked(false);
    renderCart();
  }

  async function finalizeSale() {
    try {
      const s = appState();
      if (!localClient || !s?.school?.id || !s?.user?.id) throw new Error('Sistema financeiro ainda está carregando. Aguarde alguns segundos e tente novamente.');
      if (!sale.customer) throw new Error('Adicione pelo menos um item ao carrinho.');
      if (!sale.items.length) throw new Error('Adicione pelo menos um item ao carrinho.');

      const t = totals();
      const paymentMethod = $id('pdvPaymentMethod').value;
      let received = num($id('pdvAmountReceived').value);
      if (!received && paymentMethod !== 'Dinheiro') {
        received = t.total;
        $id('pdvAmountReceived').value = received.toFixed(2);
      }
      if (received < t.total) throw new Error('O valor recebido não pode ser menor que o total da venda.');

      const change = Math.max(received - t.total, 0);
      const saleCode = `VENDA-${new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)}`;
      const note = $id('pdvPaymentNote')?.value.trim() || null;

      const rows = sale.items.map((item, index) => ({
        school_id: s.school.id,
        entry_type: item.entryType,
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
        payment_method: paymentMethod,
        competence_month: item.competence,
        description: `${saleCode} • Item ${index + 1}/${sale.items.length}: ${item.description}${note ? ` • Obs. pagamento: ${note}` : ''}${change ? ` • Valor recebido: ${brMoney(received)} • Troco: ${brMoney(change)}` : ''}`,
        created_by: s.user.id,
      }));

      const { data, error } = await localClient
        .from('finance_entries')
        .insert(rows)
        .select('*');

      if (error) throw error;

      printSaleReceipt({ saleCode, customer: sale.customer, items: sale.items, inserted: data || [], paymentMethod, received, change, note, totals: t });

      if (typeof loadEntries === 'function') await loadEntries();
      if (typeof renderEntries === 'function') renderEntries();
      if (typeof renderKpis === 'function') renderKpis();

      sale.customer = null;
      sale.items = [];
      clearSaleNoConfirm();
      showLocalStatus('Venda finalizada com sucesso. Recibo aberto para impressão.');
    } catch (error) {
      showLocalStatus(error.message || 'Erro ao finalizar venda.', 'error');
    }
  }

  function clearSaleNoConfirm() {
    sale.customer = null;
    sale.items = [];
    ['pdvStudentId', 'pdvStudentManual', 'pdvPayerName', 'pdvPayerDocument', 'pdvAmountReceived', 'pdvPaymentNote', 'pdvCompetence'].forEach((id) => {
      const el = $id(id);
      if (el) el.value = '';
    });
    clearItemFields();
    setCustomerLocked(false);
    renderCart();
  }

  function printSaleReceipt(data) {
    const issuedAt = new Date().toLocaleString('pt-BR');
    const receiptNumbers = (data.inserted || []).map((entry) => String(entry.receipt_number || '').padStart(5, '0')).filter(Boolean).join(', ');
    const documentLine = companyLine('getCompanyDocumentLine');
    const addressLine = companyLine('getCompanyAddressLine');
    const contactLine = companyLine('getCompanyContactLine');

    const rows = data.items.map((item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${safe(item.description)}<br><small>${safe(item.entryTypeLabel)}${item.packageName ? ` • ${safe(item.packageName)}` : ''}</small></td>
        <td style="text-align:center">${item.qty}</td>
        <td style="text-align:right">${brMoney(item.grossUnit)}</td>
        <td style="text-align:right">${brMoney(item.discountTotal)}</td>
        <td style="text-align:right"><strong>${brMoney(item.total)}</strong></td>
      </tr>
    `).join('');

    const via = (label) => `
      <section class="receipt">
        <div class="company">
          <h2>${safe(companyName())}</h2>
          ${documentLine ? `<p>${safe(documentLine)}</p>` : ''}
          ${addressLine ? `<p>${safe(addressLine)}</p>` : ''}
          ${contactLine ? `<p>${safe(contactLine)}</p>` : ''}
        </div>
        <div class="head">
          <div><h1>RECIBO DE VENDA</h1><p>${safe(label)} • ${safe(data.saleCode)}</p></div>
          <strong>${receiptNumbers ? `Recibos: ${safe(receiptNumbers)}` : ''}</strong>
        </div>
        <p><strong>Recebemos de:</strong> ${safe(data.customer.payerName)}</p>
        <p><strong>CPF/CNPJ:</strong> ${safe(data.customer.payerDocument)}</p>
        <p><strong>Aluno/beneficiário:</strong> ${safe(data.customer.studentName)}</p>
        <table><thead><tr><th>#</th><th>Item</th><th>Qtd.</th><th>Unitário</th><th>Desconto</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="totals">
          <p><span>Subtotal bruto</span><strong>${brMoney(data.totals.gross)}</strong></p>
          <p><span>Descontos</span><strong>${brMoney(data.totals.discount)}</strong></p>
          <p class="grand"><span>Total pago</span><strong>${brMoney(data.totals.total)}</strong></p>
          <p><span>Forma de pagamento</span><strong>${safe(data.paymentMethod)}</strong></p>
          <p><span>Valor recebido</span><strong>${brMoney(data.received)}</strong></p>
          <p><span>Troco</span><strong>${brMoney(data.change)}</strong></p>
        </div>
        ${data.note ? `<p><strong>Observação:</strong> ${safe(data.note)}</p>` : ''}
        <p><strong>Data de emissão:</strong> ${issuedAt}</p>
        <div class="signature"><span></span><p>Assinatura / ${safe(companyName())}</p></div>
      </section>
    `;

    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>${safe(data.saleCode)}</title><style>@page{size:A4;margin:9mm}body{font-family:Arial,Helvetica,sans-serif;color:#073b31;margin:18px;background:#fff}.receipt{border:1.5px solid #0b6b4e;border-radius:14px;padding:18px;margin-bottom:18px;page-break-inside:avoid}.company{text-align:center;border-bottom:1px solid #cfe4d9;padding-bottom:8px;margin-bottom:10px}.company h2{margin:0 0 4px;color:#004b38;text-transform:uppercase}.company p{margin:2px 0;font-size:11px;color:#415b51}.head{display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid #cfe4d9;padding-bottom:10px;margin-bottom:10px}.head h1{font-size:20px;margin:0;color:#004b38}.head p{margin:3px 0;color:#415b51}p{font-size:13px;line-height:1.35;margin:6px 0}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border-bottom:1px solid #dfeae4;padding:7px;text-align:left;vertical-align:top;font-size:12px}th{background:#eef7f2;color:#0b5242}.totals{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:#f4fbf7;border:1px solid #d8e7df;border-radius:12px;padding:10px;margin:12px 0}.totals p{margin:0}.totals span{display:block;color:#415b51;font-size:11px}.totals strong{font-size:13px}.totals .grand strong{font-size:16px;color:#004b38}.signature{margin-top:34px;text-align:center}.signature span{display:block;border-top:1px solid #073b31;width:260px;margin:0 auto}.signature p{font-size:11px;margin-top:6px}@media print{body{margin:8mm}.receipt{border:1.5px solid #0b6b4e}}</style></head><body>${via('Via do responsável')}${via('Via do INTEGRO')}<script>window.onload=function(){window.print();};<\/script></body></html>`;

    const w = window.open('', '_blank');
    if (!w) {
      showLocalStatus('O navegador bloqueou a janela do recibo. Libere pop-ups para imprimir.', 'error');
      return;
    }
    w.document.open();
    w.document.write(html);
    w.document.close();
  }

  function waitAndStart() {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      const s = appState();
      if ((s?.school?.id && s?.user?.id) || tries > 40) {
        clearInterval(timer);
        renderShell();
        const optionsTimer = setInterval(() => {
          if (!$id('pdvShell')) return clearInterval(optionsTimer);
          refreshOptions();
        }, 1500);
      }
    }, 350);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitAndStart);
  } else {
    waitAndStart();
  }
})();
