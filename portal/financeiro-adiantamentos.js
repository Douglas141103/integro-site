(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const policy = window.INTEGRO_FINANCE_CYCLE_POLICY;
  const money = value => Number(value).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
  const date = iso => iso.split('-').reverse().join('/');
  const period = a => date(a.start) + ' a ' + date(a.end);
  const stateLabel = a => a.released ? 'Liberado no ciclo' : a.can_release ? 'Disponível para liberar' :
    a.received ? 'Recebido · aguardando liberação' : 'Pedido · aguardando pagamento';

  async function rpc(action, data = {}) {
    const response = await client.rpc('finance_tuition_advances', {p_action:action, p_data:data});
    if (response.error) throw Error(response.error.message);
    return response.data;
  }
  const forStudent = student => rpc('list', {student});

  function element(tag, content) {
    const node = document.createElement(tag);
    node.textContent = content;
    return node;
  }

  function modal(title) {
    const dialog = document.createElement('dialog');
    dialog.style.cssText = 'width:min(92vw,470px);box-sizing:border-box;max-height:85vh;overflow:auto;border:1px solid #bdd3c7;border-radius:16px;padding:24px;color:#193b31';
    dialog.setAttribute('aria-label',title);
    dialog.append(element('h2', title));
    document.body.append(dialog);
    return dialog;
  }

  function chooseRoute(rows) {
    const dialog = modal('Qual lançamento deseja fazer?');
    for (const row of rows) dialog.append(element('p',period(row) + ' · ' + stateLabel(row)));
    const actions = [['normal','Continuar venda no ciclo atual'],['cancel','Voltar']];
    if (rows.some(r=>!r.received)) actions.unshift(['advance','Registrar pagamento do adiantamento']);
    if (rows.some(r=>r.received)) actions.unshift(['list','Consultar adiantamento recebido']);
    for (const [value,label] of actions) {
      const button = element('button',label);
      button.className = 'btn'; button.style.margin = '4px';
      button.onclick = () => dialog.close(value);
      dialog.append(button);
    }
    return new Promise(resolve=>{
      dialog.onclose = ()=>{const result=dialog.returnValue; dialog.remove(); resolve(result);};
      dialog.showModal();
    });
  }

  function futurePeriods(schoolId) {
    let range = policy.getCurrentCycleRange(new Date(),schoolId);
    const periods = [];
    for (let i=0;i<12;i++) {
      const next = new Date(range.endISO+'T12:00:00Z');
      next.setUTCDate(next.getUTCDate()+1);
      range = policy.getCurrentCycleRange(next.toISOString().slice(0,10),schoolId);
      periods.push({start:range.startISO,end:range.endISO,key:range.cycleKey});
    }
    return periods;
  }

  async function receive(customer, school) {
    const [rows,quote] = await Promise.all([forStudent(customer.studentId),
      client.rpc('finance_reservation_credit',{p_student_id:customer.studentId})]);
    if(quote.error) throw Error(quote.error.message);
    const credit = Number(quote.data?.amount || 0);
    if(credit && (!quote.data.ready || quote.data.held)) throw Error('Confira a situação do crédito da reserva antes de receber a mensalidade.');
    const today = policy.referenceISO(new Date());
    const pending = rows.filter(row=>!row.received && row.end>=today);
    const periods = pending.concat(futurePeriods(school).filter(p=>!rows.some(row=>row.start===p.start)));
    if (!periods.length) throw Error('Todos os ciclos disponíveis já têm recebimento. Consulte Adiantamentos.');
    const dialog = modal('Receber mensalidade adiantada');
    dialog.append(element('p',customer.studentName + ' · Pagador(a) ' + customer.payerName));
    const form = document.createElement('form');
    form.className = 'form-card';
    form.innerHTML = '<label>Ciclo de destino<select name="cycle" required></select></label>' +
      '<label>Valor efetivamente recebido (R$)<input name="amount" type="number" min="0.01" step="0.01" max="9999999999.99" inputmode="decimal" required></label>' +
      '<label>Forma de pagamento<select name="method" required><option value="">Selecione</option><option>Dinheiro</option><option>Pix</option><option>Cartão de débito</option><option>Cartão de crédito</option></select></label>' +
      '<label><input type="checkbox" name="confirmed" required> Confirmo que já recebi esse valor.</label>' +
      '<p role="status"></p><div><button class="btn primary" type="submit">Guardar em Adiantamentos</button> <button class="btn" type="button">Voltar</button></div>';
    form.style.cssText='display:grid;gap:14px';
    if(credit) form.prepend(element('p','Crédito de reserva de '+money(credit)+'. Informe o valor recebido após o abatimento.'));
    for (const p of periods) form.elements.cycle.add(new Option(period(p)+(p.id?' · Pedido em aberto':''),p.start));
    dialog.append(form);
    const token = crypto.randomUUID();
    let sending = false;
    form.querySelector('[type=button]').onclick = ()=>dialog.close();
    dialog.oncancel = event=>{if(sending) event.preventDefault();};
    form.onsubmit = async event=>{
      event.preventDefault();
      if(sending || !form.reportValidity()) return;
      const p = periods.find(item=>item.start===form.elements.cycle.value);
      const payload = {student:customer.studentId,start:p.start,end:p.end,key:p.key,token,credit,
        payer:customer.payerName,document:customer.payerDocument,amount:form.elements.amount.value,method:form.elements.method.value};
      sending = true;
      const status = form.querySelector('[role=status]');
      status.textContent = 'Guardando o recebimento…';
      Array.from(form.elements).forEach(el=>el.disabled=true);
      try {await rpc('receive',payload); dialog.close('received');}
      catch(error){status.textContent=error.message;}
      finally {sending=false;Array.from(form.elements).forEach(el=>el.disabled=false);}
    };
    return new Promise(resolve=>{
      dialog.onclose=()=>{const paid=dialog.returnValue==='received';dialog.remove();resolve(paid);};
      dialog.showModal();
    });
  }

  let revision = 0;
  async function refresh() {
    const current = ++revision;
    const status = $('advanceStatus'), list = $('advanceList');
    status.textContent = 'Consultando adiantamentos…';
    list.replaceChildren();
    try {
      const rows = await rpc('list');
      if(current!==revision) return;
      const held = rows.reduce((sum,r)=>sum+(r.received && !r.released ? Number(r.amount):0),0);
      status.textContent = rows.length ? 'Total recebido e aguardando liberação: '+money(held) : 'Nenhum pedido ou recebimento adiantado.';
      for (const row of rows) {
        const article = document.createElement('article');
        article.className='card'; article.style.marginTop='12px';
        article.append(element('h3',row.student_name),element('p',period(row)+' · '+stateLabel(row)));
        if(row.payer) article.append(element('p',(row.received?'Pagador(a)':'Solicitante')+' · '+row.payer));
        if(row.received) article.append(element('p',money(row.amount)+' · '+row.method+' · Recebido em '+
          new Date(row.received).toLocaleDateString('pt-BR',{timeZone:policy.TIME_ZONE})));
        if(row.receipt) article.append(element('p','Recibo nº '+row.receipt));
        if(row.can_release){
          const button = element('button','Liberar para o ciclo'); button.type='button';button.className='btn primary';
          button.onclick = async ()=>{
            if(!confirm('Liberar '+money(row.amount)+' para a mensalidade de '+row.student_name+' no ciclo de '+period(row)+'?')) return;
            button.disabled=true;
            try {await rpc('release',{id:row.id});await refresh();if(typeof reloadAll==='function') await reloadAll();}
            catch(error){status.textContent=error.message;button.disabled=false;}
          };
          article.append(button);
        }
        list.append(article);
      }
    } catch(error){if(current===revision) status.textContent=error.message;}
  }
  $('advanceRefresh').addEventListener('click',refresh);
  document.querySelector('[data-tab="adiantamentos"]').addEventListener('click',refresh);
  window.financeAdvances = Object.freeze({receive,forStudent,chooseRoute});
})();
