/* Pix in the Integro cash register. API keys are submitted once and never persisted in the browser. */
(function(){
 const cfg=window.INTEGRO_SUPABASE,db=typeof client!=='undefined'?client:window.supabase.createClient(cfg.url,cfg.anonKey);
 const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
 const money=n=>(n/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
 const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Manaus',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 async function api(body){
  const {data}=await db.auth.getSession();if(!data.session)throw Error('Entre no portal novamente.');
  const response=await fetch(cfg.url+'/functions/v1/finance-asaas',{method:'POST',headers:{'Content-Type':'application/json',apikey:cfg.anonKey,Authorization:'Bearer '+data.session.access_token},body:JSON.stringify(body),signal:AbortSignal.timeout(65000)});
  const result=await response.json();if(!response.ok||result.error){const error=Error(result.error||'Asaas indisponível.');error.status=response.status;error.orderId=result.order_id;throw error;}return result;
 }
 window.INTEGRO_ASAAS={mount(hooks){
  if(document.getElementById('asaasPanel'))return;
  const el=document.createElement('section');el.id='asaasPanel';el.className='pdv2-card';el.style.gridColumn='1 / -1';
  el.innerHTML=`<style>#asaasPanel[hidden],#asaasPanel [hidden]{display:none!important}.asaas-summary{display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap}.asaas-badge{background:#eef5f0;border-radius:30px;padding:8px 12px;font-weight:800}.asaas-qr-layout{display:flex;gap:24px;flex-wrap:wrap;align-items:center}.asaas-qr{width:256px;max-width:100%;height:auto;background:white;padding:12px;border:1px solid #d7e9df;border-radius:12px;box-sizing:border-box;image-rendering:pixelated}.asaas-payload{width:100%;box-sizing:border-box;overflow-wrap:anywhere;font:12px monospace!important}.asaas-details{margin-top:18px;padding-top:14px;border-top:1px solid #d7e9df}.asaas-details summary{cursor:pointer;font-weight:800}.asaas-order{margin-top:12px}.asaas-date{max-width:230px;margin-top:14px}.asaas-guide{line-height:1.5}.asaas-pix-body{flex:1;min-width:220px}.asaas-orders{max-height:520px;overflow:auto}</style>
   <div class="asaas-summary"><h2>Pix no caixa · Asaas</h2><span class="asaas-badge" id="asaasStatus">Verificando conexão…</span></div>
   <p class="pdv2-muted">O QR Code e o Pix Copia e Cola aparecem aqui. Após a baixa do pagamento, o recibo fica disponível para impressão.</p>
   <p class="pdv2-small">Valor mínimo para emitir pelo Asaas: <strong>R$ 5,00 no total do carrinho, após os descontos.</strong></p>
   <p class="pdv2-small">Tarifa configurada no caixa: <strong>R$ 0,99 por cobrança paga</strong>, registrada automaticamente em Saídas.</p><p id="asaasAccount"></p>
   <label class="asaas-date">Vencimento da cobrança<input id="asaasDue" type="date" value="${today()}" min="${today()}"></label>
   <div class="pdv2-actions"><button type="button" class="pdv2-btn primary" id="asaasCreate" disabled>Gerar Pix do carrinho</button><button type="button" class="pdv2-btn ghost" id="asaasRefresh">Atualizar cobranças</button><button type="button" class="pdv2-btn ghost" id="asaasToggle" hidden></button></div>
   <p id="asaasMessage" role="status" aria-live="polite"></p>
   <div id="asaasPix" class="pdv2-item" hidden></div>
   <details id="asaasSetup" class="asaas-details" hidden><summary>Conectar ou atualizar a conta Asaas</summary>
    <p class="asaas-guide">No <a href="https://www.asaas.com" target="_blank" rel="noopener noreferrer">site do Asaas</a>, acesse Menu do usuário → Integrações → Chaves API e gere uma chave de <strong>Produção</strong>. A conta precisa estar aprovada. Cadastre também uma chave Pix no Asaas para receber as cobranças.</p>
    <form id="asaasConnectForm" autocomplete="off"><div class="pdv2-grid"><label>Chave de API de Produção<input id="asaasKey" type="password" autocomplete="new-password" maxlength="1000" required placeholder="Cole a chave aqui"></label><label>E-mail para avisos técnicos do Asaas<input id="asaasEmail" type="email" maxlength="254" required placeholder="Seu e-mail de administração"></label></div>
    <p class="pdv2-small">Ao conectar, a chave será guardada de forma protegida no servidor do Integro e será configurada a confirmação automática de pagamentos. Os recebimentos ficam na sua conta Asaas, sujeitos às tarifas dela.</p>
    <button type="submit" class="pdv2-btn primary" id="asaasConnect">Conectar conta com segurança</button></form>
   </details>
   <details class="asaas-details"><summary>Cobranças Pix geradas</summary><div id="asaasOrders" class="asaas-orders"></div></details>`;
  document.getElementById(hooks.target||'pdv2').append(el);
  const $=id=>document.getElementById(id),message=t=>{$('asaasMessage').textContent=t;};
  let settings={enabled:false,connected:false},orders=[],busy=false,refreshing=false,checking=false,initialized=false,request=null,lastPayload=null,selected=null,qr=null;
  const seenPaid=new Set();
  const status=o=>o.status==='paid'?(o.posted_at?'Pago · lançado no caixa':'Pago · baixa pendente de conciliação'):o.status==='rejected'?'Cobrança não gerada · confira o motivo':o.status==='pending'?'Aguardando pagamento':o.status==='canceled'?'Cancelada':o.status==='refunded'?'Estornada · confira a conciliação':o.status==='uncertain'?'Geração incerta · confira antes de repetir':'Gerando cobrança';
  function draw(){
   $('asaasCreate').disabled=!settings.enabled||busy||!!hooks.isLocked?.('asaas')||(hooks.canCreate&&!hooks.canCreate('asaas')); $('asaasConnect').disabled=busy; $('asaasDue').disabled=busy||!!hooks.isLocked?.();
   $('asaasToggle').hidden=!settings.can_configure||!settings.connected; $('asaasToggle').disabled=busy;
   $('asaasToggle').textContent=settings.enabled?'Desativar Pix Asaas':'Ativar Pix nesta conta';
   $('asaasSetup').hidden=!settings.can_configure;
   $('asaasStatus').textContent=settings.enabled?'Pix ativo':settings.connected?'Conta conectada · Pix desativado':'Aguardando conexão';
   $('asaasAccount').textContent=settings.connected?'Recebedor: '+settings.account_name+' · documento final '+settings.document_masked:'A direção precisa conectar a conta Asaas para gerar o Pix.';
   if(!settings.connected&&settings.can_configure)$('asaasSetup').open=true;
   $('asaasOrders').innerHTML=orders.map(o=>`<article class="pdv2-item asaas-order"><div class="pdv2-head"><strong>${safe(o.student_name)} · ${money(o.amount)}</strong><span>${safe(status(o))}</span></div><p>${safe(o.payer_name)} · ${new Date(o.created_at).toLocaleString('pt-BR')}</p>${o.creation_error?`<p>${safe(o.creation_error)}</p>`:''}${o.needs_reconciliation?'<p>Confira esta cobrança no Asaas e nos recibos antes de fazer qualquer lançamento manual.</p>':''}<div class="pdv2-actions">${hooks.receipt&&o.status==='paid'&&o.posted_at&&!o.needs_reconciliation?`<button class="pdv2-btn primary" type="button" data-asaas-receipt="${safe(o.id)}">Imprimir recibo</button>`:''}${o.payment_id&&o.status==='pending'&&!o.needs_reconciliation?`<button class="pdv2-btn primary" type="button" data-asaas-qr="${safe(o.id)}">Mostrar QR Code</button>`:''}${!['refunded','canceled'].includes(o.status)?`<button class="pdv2-btn ghost" type="button" data-asaas-check="${safe(o.id)}">Conferir pagamento</button>`:''}</div></article>`).join('')||'<p>Nenhuma cobrança Pix gerada pelo Asaas.</p>';
   el.querySelectorAll('[data-asaas-qr]').forEach(b=>{b.disabled=busy;b.onclick=()=>showQr(b.dataset.asaasQr);});
   el.querySelectorAll('[data-asaas-check]').forEach(b=>{b.disabled=busy;b.onclick=()=>check(b.dataset.asaasCheck);});
   el.querySelectorAll('[data-asaas-receipt]').forEach(b=>b.onclick=()=>hooks.receipt?.('asaas',orders.find(o=>o.id===b.dataset.asaasReceipt)));
   const active=orders.find(o=>o.id===selected);
   if(active&&active.status!=='pending'){qr=null;$('asaasPix').hidden=false;$('asaasPix').innerHTML=`<strong>${safe(status(active))}</strong><p>${money(active.amount)} · ${safe(active.student_name)}</p>`;}
  }
  async function refresh(silent=false){
   if(refreshing)return;refreshing=true;
   try{
    const result=await api({action:'list'});settings=result;orders=result.orders||[];
    await hooks.orders?.('asaas',orders);
    const newPaid=orders.filter(o=>o.posted_at&&!seenPaid.has(o.id));orders.filter(o=>o.posted_at).forEach(o=>seenPaid.add(o.id));
    if(initialized&&newPaid.length){await hooks.refresh();document.getElementById('tuitionRefreshBtn')?.click();message('Pix recebido e lançado no caixa. O recibo está em Entradas.');}
    else if(!silent)message(settings.enabled?'Monte o carrinho e clique em “Gerar Pix do carrinho”.':settings.connected?'Confira o recebedor acima e ative o Pix nesta conta.':'Conecte a conta Asaas na área abaixo.');
    initialized=true;draw();
   }catch(e){settings.enabled=false;draw();if(!silent)message(e.message);}finally{refreshing=false;}
  }
  async function check(id,silent=false){
   if(checking||busy)return;checking=true;
   try{const o=await api({action:'check',id});await refresh(true);if(!silent)message(o.not_found?'O Asaas não encontrou cobrança para esta tentativa. Nenhum pagamento foi lançado por ela. Confira o valor e os dados antes de uma nova emissão.':o.creation_error||status(o)+(o.status==='uncertain'?' — consulte o Asaas antes de gerar outra cobrança.':'.'));}
   catch(e){if(!silent)message(e.message);}finally{checking=false;}
  }
  function drawQr(o,data){
   selected=o.id;qr=data;const box=$('asaasPix');box.hidden=false;
   box.innerHTML=`<div class="asaas-qr-layout"><img class="asaas-qr" src="data:image/png;base64,${safe(data.encodedImage)}" alt="QR Code Pix da cobrança"><div class="asaas-pix-body"><h3>${money(o.amount)}</h3><p>${safe(o.student_name||'Cobrança do carrinho')}</p><p>Escaneie com o aplicativo do banco ou copie o código Pix.</p><label>Pix Copia e Cola<textarea id="asaasPayload" class="asaas-payload" readonly rows="4">${safe(data.payload)}</textarea></label><div class="pdv2-actions"><button type="button" class="pdv2-btn primary" id="asaasCopy">Copiar Pix</button><button type="button" class="pdv2-btn ghost" id="asaasPrint">Imprimir cobrança / PDF</button></div><p class="pdv2-small">${data.expirationDate?'Validade do QR Code informada pelo Asaas: '+safe(data.expirationDate)+'. ':''}A geração do código ainda não confirma o pagamento.</p></div></div>`;
   $('asaasCopy').onclick=async()=>{try{await navigator.clipboard.writeText(data.payload);message('Código Pix copiado. Você pode enviá-lo ao responsável.');}catch{$('asaasPayload').focus();$('asaasPayload').select();message('Selecione e copie o código no campo Pix Copia e Cola.');}};
   $('asaasPrint').onclick=()=>{
    const win=window.open('','_blank');if(!win){message('Permita abrir a janela de impressão.');return;}
    win.document.write(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Cobrança Pix · Integro</title><style>body{font:16px Arial;color:#174c39;max-width:700px;margin:30px auto;padding:28px;border:2px solid #174c39;border-radius:18px}.logo{width:135px}.qr{width:260px;max-width:100%}.code{overflow-wrap:anywhere;font:11px monospace;color:#222}small{color:#555}@media print{button{display:none}}</style><img class="logo" src="${location.origin}/logo-whatsapp.png" alt="Instituto Integro"><h1>Cobrança Pix</h1><p>Aluno/beneficiário: ${safe(o.student_name||'')}</p><p>Pagador: ${safe(o.payer_name||'')}</p><h2>${money(o.amount)}</h2><p>Vencimento: ${safe(o.due_date)}</p><img class="qr" src="data:image/png;base64,${safe(data.encodedImage)}" alt="QR Code Pix"><h3>Pix Copia e Cola</h3><p class="code">${safe(data.payload)}</p><p><small>Pedido ${safe(o.id)}. Documento de cobrança, não é recibo nem boleto bancário. O pagamento será confirmado pelo Asaas.</small></p><button onclick="window.print()">Imprimir / salvar em PDF</button></html>`);win.document.close();
   };
  }
  async function showQr(id){
   if(busy)return;
   try{message('Carregando QR Code…');const result=await api({action:'qr',id});await refresh(true);
    if(!result.qr){message(result.order?status(result.order):'QR Code ainda indisponível. Confira a cobrança.');return;}
    const o=orders.find(x=>x.id===id)||result.order;drawQr(o,result.qr);message('Pix pronto. Aguarde a confirmação automática do pagamento.');
   }catch(e){message(e.message);}
  }
  $('asaasCreate').onclick=async()=>{
   if(busy||!settings.enabled||hooks.isLocked?.('asaas')||(hooks.canCreate&&!hooks.canCreate('asaas')))return;
   let attempted=false;
   try{
    const payload={...hooks.snapshot(),due_date:$('asaasDue').value},serialized=JSON.stringify(payload);
    const amount=payload.items.reduce((sum,item)=>sum+Math.round(Number(item.finalUnit)*100)*Number(item.qty),0);
    if(Number.isFinite(amount)&&amount<500)throw Error('O Pix pelo Asaas exige um total mínimo de R$ 5,00 após os descontos. O valor do carrinho não foi alterado.');
    if(lastPayload!==serialized){request=crypto.randomUUID();lastPayload=serialized;}
    attempted=true;hooks.started?.('asaas',request);busy=true;hooks.lock(true);draw();message('Gerando Pix. Aguarde antes de fazer outro lançamento.');
    const result=await api({action:'create',request_id:request,...payload});
    if(hooks.prepared)hooks.prepared('asaas',result);
    if(!result.payment_id){message('Tentativa registrada. Use “Conferir pagamento” na cobrança antes de tentar outra venda.');await refresh(true);return;}
    if(!hooks.prepared)hooks.clear();request=null;lastPayload=null;selected=result.id;await refresh(true);
    busy=false;await showQr(result.id);
   }catch(e){await refresh(true);if(attempted)hooks.failed?.('asaas',e,orders.find(o=>o.id===e.orderId));message(e.message);}
   finally{busy=false;hooks.lock(false);draw();}
  };
  $('asaasConnectForm').onsubmit=async event=>{
   event.preventDefault();if(busy)return;
   let key=$('asaasKey').value.trim();const email=$('asaasEmail').value.trim();$('asaasKey').value='';
   busy=true;draw();message('Validando a conta e configurando a confirmação automática…');
   try{await api({action:'connect',api_key:key,email});key='';$('asaasSetup').open=false;await refresh(true);message('Conta conectada. Confira o recebedor e clique em “Ativar Pix nesta conta”.');}
   catch(e){message(e.message);}finally{key='';busy=false;draw();}
  };
  $('asaasToggle').onclick=async()=>{
   if(busy)return;
   const prompt=settings.enabled?'Desativar novas cobranças Asaas? As cobranças já emitidas continuam válidas e acompanhadas.':'Ativar cobranças Pix para receber na conta '+settings.account_name+' ('+settings.document_masked+')? Aplicam-se as tarifas da sua conta Asaas.';
   if(!confirm(prompt))return;
   try{await api({action:'settings',enabled:!settings.enabled});await refresh();}catch(e){message(e.message);}
  };
  $('asaasRefresh').onclick=()=>refresh();
  window.addEventListener('integro:pos-new-sale',()=>{selected=null;qr=null;request=null;lastPayload=null;$('asaasPix').hidden=true;$('asaasPix').innerHTML='';$('asaasDue').value=today();message('Monte a nova venda para gerar o Pix.');draw();});
  window.addEventListener('integro:checkout-lock',draw);
  refresh();const timer=setInterval(async()=>{if(document.visibilityState!=='visible'||busy)return;const active=orders.find(o=>o.id===selected);if(active&&['pending','uncertain','creating'].includes(active.status))await check(active.id,true);else await refresh(true);},15000);
  window.addEventListener('pagehide',()=>{clearInterval(timer);$('asaasKey').value='';qr=null;},{once:true});
 }};
})();
