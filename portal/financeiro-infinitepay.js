/* Optional InfinitePay checkout. No Pix payload is fabricated from a checkout URL. */
(function(){
 const cfg=window.INTEGRO_SUPABASE;
 const db=typeof client!=='undefined'?client:window.supabase.createClient(cfg.url,cfg.anonKey);
 const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
 const money=n=>(n/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
 function checkout(value){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&['checkout.infinitepay.com.br','checkout.infinitepay.io','pay.infinitepay.io','buy.infinitepay.io'].includes(u.hostname)?u.href:null;}catch{return null;}}
 async function api(body){
  const {data}=await db.auth.getSession();if(!data.session)throw Error('Entre no portal novamente.');
  const r=await fetch(cfg.url+'/functions/v1/finance-infinitepay',{method:'POST',headers:{'Content-Type':'application/json','apikey':cfg.anonKey,'Authorization':'Bearer '+data.session.access_token},body:JSON.stringify(body),signal:AbortSignal.timeout(25000)});
  const result=await r.json();if(!r.ok||result.error)throw Error(result.error||'Cobrança indisponível.');return result;
 }
 window.INTEGRO_INFINITEPAY={mount(hooks){
  if(document.getElementById('infinitepayPanel'))return;
  const el=document.createElement('section');el.id='infinitepayPanel';el.className='pdv2-card';el.style.gridColumn='1 / -1';
  el.innerHTML='<h2>Cobranças InfinitePay</h2><p class="pdv2-muted">Gere uma cobrança do carrinho para pagar por Pix ou cartão. O QR Code e o Pix Copia e Cola ficam na página da InfinitePay. O caixa recebe a baixa após a confirmação.</p><div class="pdv2-actions"><button type="button" class="pdv2-btn primary" id="ipCreate" disabled>Gerar cobrança do carrinho</button><button type="button" class="pdv2-btn ghost" id="ipRefresh">Atualizar cobranças</button><button type="button" class="pdv2-btn ghost" id="ipToggle" hidden></button></div><p id="ipMessage" role="status" aria-live="polite"></p><div id="ipOrders"></div>';
  document.getElementById('pdv2').append(el);
  const $=id=>document.getElementById(id);let enabled=false,busy=false,request=null,lastPayload=null,orders=[],refreshing=false,paidSeen=new Set(),initialized=false;
  const message=t=>{$('ipMessage').textContent=t;};
  function draw(){
   $('ipCreate').disabled=!enabled||busy||!!hooks.isLocked?.();
   $('ipToggle').textContent=enabled?'Desativar integração e usar caixa manual':'Ativar integração InfinitePay';
   $('ipOrders').innerHTML=orders.map(o=>{
    const url=checkout(o.checkout_url),status=o.status==='paid'?(o.posted_at?'Pago — lançado no caixa':'Pago — conciliação pendente'):o.status==='pending'?'Aguardando pagamento':o.status==='uncertain'?'Geração não confirmada — conferir na InfinitePay':'Gerando / aguardando confirmação';
    return `<article class="pdv2-item" style="margin-top:12px"><div class="pdv2-head"><strong>${safe(o.student_name)} — ${money(o.amount)}</strong><span>${status}</span></div><p>${safe(o.payer_name)} · ${new Date(o.created_at).toLocaleString('pt-BR')}</p>${o.needs_reconciliation?'<p>Pagamento confirmado, mas a baixa precisa de conferência pela direção. Não lance novamente sem conferir os recibos.</p>':''}${url&&o.status!=='paid'?`<div class="pdv2-actions"><a class="pdv2-btn primary" href="${safe(url)}" target="_blank" rel="noopener noreferrer">Abrir Pix / cartão</a><button type="button" class="pdv2-btn ghost" data-ip-copy="${o.id}">Copiar link</button><button type="button" class="pdv2-btn ghost" data-ip-print="${o.id}">Imprimir cobrança / PDF</button></div>`:''}</article>`;
   }).join('')||'<p>Nenhuma cobrança gerada.</p>';
   el.querySelectorAll('[data-ip-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(checkout(orders.find(o=>o.id===b.dataset.ipCopy).checkout_url));message('Link copiado. Você pode enviá-lo ao responsável.');}catch{message('Não foi possível copiar automaticamente. Abra o pagamento e copie o endereço.');}});
   el.querySelectorAll('[data-ip-print]').forEach(b=>b.onclick=()=>{
    const o=orders.find(o=>o.id===b.dataset.ipPrint),url=checkout(o.checkout_url);if(!url)return;
    const w=window.open('','_blank');if(!w){message('Libere a janela de impressão no navegador.');return;}
    w.document.write(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Cobrança Integro</title><style>body{font:16px Arial;color:#164b3b;max-width:720px;margin:40px auto;padding:28px;border:2px solid #164b3b;border-radius:18px}img{width:140px}a{overflow-wrap:anywhere}small{color:#555}@media print{button{display:none}}</style><img src="${location.origin}/logo-whatsapp.png" alt="Instituto Integro"><h1>Cobrança de pagamento</h1><p>Aluno/beneficiário: ${safe(o.student_name)}</p><p>Responsável: ${safe(o.payer_name)}</p><h2>${money(o.amount)}</h2><p>Pague por Pix ou cartão no endereço:</p><p><a href="${safe(url)}">${safe(url)}</a></p><p>O QR Code e o Pix Copia e Cola estão na página de pagamento.</p><p><small>Pedido ${safe(o.id)} · Este documento é uma cobrança, não um comprovante de pagamento nem um boleto bancário.</small></p><button onclick="window.print()">Imprimir / salvar em PDF</button></html>`);w.document.close();
   });
  }
  async function refresh(silent=false){
   if(refreshing)return;refreshing=true;
   try{const r=await api({action:'list'});enabled=r.enabled;orders=r.orders||[];$('ipToggle').hidden=!r.can_configure;
    const newPaid=orders.filter(o=>o.posted_at&&!paidSeen.has(o.id));orders.filter(o=>o.posted_at).forEach(o=>paidSeen.add(o.id));
    if(initialized&&newPaid.length){await hooks.refresh();document.getElementById('tuitionRefreshBtn')?.click();message('Pagamento confirmado e lançado no caixa. O recibo está em Entradas.');}
    else if(!silent)message(enabled?'Integração ativa. Gere a cobrança após montar o carrinho.':'Integração desativada. O caixa manual continua disponível. Cobranças já emitidas continuam sendo acompanhadas.');
    initialized=true;draw();
   }catch(e){if(!silent)message(e.message);$('ipCreate').disabled=true;}finally{refreshing=false;}
  }
  $('ipCreate').onclick=async()=>{
   if(busy||!enabled||hooks.isLocked?.())return;
   try{
    const payload=hooks.snapshot(),serialized=JSON.stringify(payload);
    if(serialized!==lastPayload){request=crypto.randomUUID();lastPayload=serialized;}
    busy=true;hooks.lock(true);draw();message('Gerando cobrança. Aguarde a confirmação antes de lançar manualmente.');
    const r=await api({action:'create',request_id:request,...payload});
    if(!r.checkout_url){message('Tentativa registrada. Confira a InfinitePay antes de gerar novamente.');return;}
    hooks.clear();request=null;lastPayload=null;await refresh(true);message('Cobrança gerada. Abra o Pix/cartão ou copie o link. O valor ainda não entrou no caixa.');
   }catch(e){await refresh(true);message(e.message+' Se houve falha de conexão, atualize as cobranças antes de tentar outra venda.');}
   finally{busy=false;hooks.lock(false);draw();}
  };
  $('ipRefresh').onclick=()=>refresh();
  $('ipToggle').onclick=async()=>{
   if(busy)return;
   if(enabled&&!confirm('Desativar novas cobranças InfinitePay e continuar com o caixa manual? Cobranças já emitidas poderão ser pagas e terão baixa automática.'))return;
   try{await api({action:'settings',enabled:!enabled});await refresh();}catch(e){message(e.message);}
  };
  window.addEventListener('integro:checkout-lock',draw);
  refresh();const timer=setInterval(()=>{if(document.visibilityState==='visible')refresh(true);},15000);
  window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
 }};
})();
