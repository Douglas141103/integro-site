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

  async function paid(action,data={}) {
    const result=await client.rpc('finance_paid_destination',{p_action:action,p_data:data});
    if(result.error) throw Error(result.error.message);
    return result.data;
  }

  const saleRows=(provider,sale)=>paid('sale',{provider,sale});
  async function choosePaid(row) {
    const rows=await forStudent(row.student_id);
    const pending=rows.filter(r=>!r.received && r.end>=policy.referenceISO(new Date()));
    const periods=pending.concat(futurePeriods(row.school_id).filter(p=>!rows.some(r=>r.start===p.start)));
    const dialog=modal('Pagamento recebido. Para onde vai a mensalidade?');
    dialog.append(element('p',row.student_name_snapshot+' · '+money(row.amount_paid)+' · '+row.payment_method));
    const select=document.createElement('select');
    select.setAttribute('aria-label','Destino da mensalidade');
    select.add(new Option('Selecione o destino',''));
    for(const p of periods.filter(p=>p.id))select.add(new Option('Adiantamentos · '+period(p)+' · Pedido em aberto',p.start));
    select.add(new Option('Lançar no ciclo atual','current'));
    for(const p of periods.filter(p=>!p.id))select.add(new Option('Adiantamentos · '+period(p),p.start));
    const label=element('label','Destino da mensalidade');label.append(select);
    const status=element('p','');status.setAttribute('role','status');
    const confirm=element('button','Confirmar destino'),later=element('button','Decidir depois');
    confirm.className='btn primary';later.className='btn';confirm.disabled=true;
    select.onchange=()=>{confirm.disabled=!select.value;};
    dialog.append(label,status,confirm,later);
    let saving=false,decision={};
    later.onclick=()=>dialog.close();
    dialog.oncancel=e=>{if(saving)e.preventDefault();};
    confirm.onclick=async()=>{
      if(saving||!select.value)return;
      saving=true;confirm.disabled=later.disabled=select.disabled=true;
      try {
        const cycle=periods.find(p=>p.start===select.value);
        decision=await paid(cycle?'advance':'current',cycle?{id:row.destination_id,start:cycle.start,end:cycle.end,key:cycle.key}:{id:row.destination_id});
        dialog.close();
      } catch(error){status.textContent=error.message;}
      finally {saving=false;confirm.disabled=later.disabled=select.disabled=false;}
    };
    return new Promise(resolve=>{
      dialog.onclose=()=>{dialog.remove();resolve(decision);};
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
      const [rows,undecided] = await Promise.all([rpc('list'),paid('pending')]);
      if(current!==revision) return;
      const held = rows.reduce((sum,r)=>sum+(r.received && !r.released ? Number(r.amount):0),0);
      status.textContent = rows.length || undecided.length ? 'Total recebido e aguardando liberação: '+money(held) : 'Nenhum pedido ou recebimento adiantado.';
      for(const row of undecided) {
        const article=element('article','');article.className='card';
        article.append(element('h3',row.student_name_snapshot),element('p',money(row.amount_paid)+' · '+row.payment_method+' · Recebido, aguardando destino'));
        const choose=element('button','Escolher destino');choose.className='btn primary';
        choose.onclick=async()=>{choose.disabled=true;try{const result=await choosePaid(row);await refresh();if(result.entry_id && typeof reloadAll==='function')await reloadAll();}catch(error){status.textContent=error.message;}finally{choose.disabled=false;}};
        article.append(choose);list.append(article);
      }
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
  window.financeAdvances = Object.freeze({saleRows,forStudent,choosePaid});
})();
