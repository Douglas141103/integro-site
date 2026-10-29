import {mountIntGemPromotion} from './intgem-promotion.mjs?v=20261028-pix1';
import {supabase} from './access.js?v=20261016-intgem1';
import {GAMES,ITEMS,PACKS,activeGame,gemArt,money} from './intgem-catalog.mjs?v=20261028-pix1';
import {eggItemArt} from './egg-intgem-catalog.mjs?v=20261028-pix1';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const errors={insufficient_balance:'Você ainda não tem IntGem suficiente para este item.',not_owned:'Compre este item antes de equipá-lo.',price_changed:'O preço mudou. Confira a nova oferta antes de comprar.',daily_exchange_used:'Você já fez a conversão de hoje. Volte amanhã.',exchange_time_required:'Complete 20 minutos de uso ativo no Pegue o Ovo hoje para converter.',exchange_pool_empty:'A reserva de conversão de hoje terminou. Uma nova reserva abre amanhã.',quote_changed:'A cotação mudou. Confira o valor atualizado antes de confirmar.',save_conflict:'Seu progresso mudou. Sincronize o Pegue o Ovo e tente novamente.',trade_pending:'Conclua ou cancele a troca de criaturas antes de converter.',insufficient_coins:'Você não tem Integros suficientes no progresso sincronizado.',checkout_in_progress:'O pagamento está sendo preparado. Aguarde alguns segundos e tente novamente.',checkout_below_minimum:'Escolha um dos pacotes disponíveis.',pix_unavailable:'Não foi possível recuperar este Pix. Escolha seu pacote novamente.',pix_not_enabled:'O Pix está temporariamente indisponível. Tente novamente mais tarde.',checkout_not_enabled:'As compras estão temporariamente indisponíveis. Você pode continuar jogando e ganhar IntGem pelo bônus diário.',checkout_unavailable:'Não foi possível gerar o Pix agora. Tente novamente mais tarde.',checkout_expired:'Este pagamento foi encerrado. Escolha um pacote para gerar um novo Pix.',payment_mismatch:'O pagamento precisa ser conferido. Procure o suporte e não pague novamente.',rate_limit:'Muitas tentativas. Aguarde alguns minutos.',payment_verification_unavailable:'A confirmação ainda não chegou. Você pode verificar novamente sem pagar outra vez.',order_not_found:'Este pedido pertence a outra conta. Entre na conta usada na compra.',checking:'Pagamento em verificação. Aguarde alguns segundos.',payment_not_confirmed:'Ainda não foi possível confirmar este pagamento.'};
const symbols={runner:'M28 21 38 12 46 23 36 31 49 42M36 31 23 43M34 24 21 27',ball:'M24 25a12 12 0 1 0 24 0 12 12 0 1 0-24 0M25 20l22 10',egg:'M36 12c-8 0-14 17-14 22a14 14 0 0 0 28 0c0-5-6-22-14-22Z',home:'m20 29 16-15 16 15M24 27v20h24V27M33 47V35h7v12',fruit:'M35 20c-17-10-23 9-14 21 6 9 10 4 14 4s9 5 15-4c9-12 3-31-15-21Zm1-2 6-8',cube:'m36 13 16 9v19l-16 9-16-9V22Zm0 18v19M20 22l16 9 16-9',snake:'M25 18h17c15 0 15 13 0 13H29c-13 0-13 13 0 13h16',blade:'m21 46 11-12m-4-5 20-17 3 3-17 20Zm-8 14 8-8',music:'M31 37V16l17-3v21M31 37c0 8-13 8-13 2s13-8 13-2Zm17-3c0 8-13 8-13 2s13-8 13-2',compass:'M36 12a19 19 0 1 0 0 38 19 19 0 1 0 0-38Zm8 11-5 14-12 5 5-14Z',tower:'M20 48h32M25 48V23h22v25M23 23v-9h6v5h6v-5h6v5h6v-5h4v9',letters:'m20 46 10-30 10 30M24 35h13m8-18v29h9',robot:'M22 23h28v23H22Zm14 0v-9m-5 21h1m9 0h1M30 41h13',cards:'M24 15h23v30H24Zm-6 9h-3v27h22v-3'};
export function companionArt(game,color='#ffd57a',secondary='#78e4d1'){
 const path=symbols[GAMES.find(g=>g.id===game)?.symbol]||symbols.compass;
 return `<svg viewBox="0 0 100 116" fill="none" aria-hidden="true"><ellipse cx="50" cy="109" rx="23" ry="5" fill="#143e4d" opacity=".15"/><path d="m15 38 13-24 22 10 22-10 13 24-3 42-32 19-32-19Z" fill="${color}" stroke="#173b50" stroke-width="4" stroke-linejoin="round"/><path d="m50 26 30 15-30 15-30-15Z" fill="${secondary}"/><path d="M28 69c3-5 7-5 10 0m24 0c3-5 7-5 10 0M43 81q7 7 14 0" stroke="#21444c" stroke-width="4" stroke-linecap="round"/><g transform="translate(14 13) scale(.7)" stroke="#245256" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">${'<path d="'+path+'"/>'}</g><path d="m14 64-9 7 9 5m72-12 9 7-9 5" stroke="#173b50" stroke-width="4" fill="${secondary}" stroke-linejoin="round"/></svg>`;
}
export async function startIntGem({user,standalone=null,client=supabase}={}){
 if(window.BoxIntGem)return window.BoxIntGem;
 let state=null,quote=null,tab='packs',filter=null,busy=false,stopped=false,sequence=0,applied=0,lastInput=Date.now(),pulseBusy=false,current='',visualKey='',returnPayment=null;
 let authSubscription=null,pixPayment=null,pixClockOffset=0;
 let compact=false;try{compact=localStorage.getItem('box:'+user.id+':intgem-compact')==='1';}catch{}
 const root=standalone||document.createElement('dialog');if(!standalone){root.className='ig-dialog';root.setAttribute('aria-label','Carteira IntGem');document.body.append(root);}
 root.innerHTML='<div class="ig-shell"><header class="ig-topline"><div class="ig-brand">'+gemArt()+'<div><strong>IntGem</strong><small>SEU BRILHO EM CADA MUNDO</small></div></div>'+(standalone?'<a href="./jogar.html" class="ig-secondary">Jogar ↗</a>':'<button class="ig-close" aria-label="Fechar carteira">×</button>')+'</header><section class="ig-hero"><div class="ig-balance"><span>SUA CARTEIRA</span><strong data-balance>…</strong><span>IntGem disponíveis</span></div><div class="ig-daily"><b data-daily-label>1 IntGem por dia</b><p>Fique 5 minutos ativo na plataforma.</p><progress max="300" value="0"></progress><small data-daily-time>Conectando…</small></div></section><nav class="ig-tabs" aria-label="Sua carteira">'+[['collection','Coleção'],['packs','Comprar IntGem'],['exchange','Converter'],['history','Extrato']].map(([id,name])=>`<button type="button" data-tab="${id}" aria-pressed="${id===tab}">${name}</button>`).join('')+'</nav><p class="ig-status" role="status" aria-live="polite"></p><div class="ig-content"></div><footer class="ig-footer"><span>Cadastro gratuito · compras opcionais · sem mensalidade<br>IntGem é uma moeda virtual para uso nos jogos, sem saque em dinheiro.</span><a href="./jogar.html">Explorar os jogos ↗</a></footer></div>';
 const content=root.querySelector('.ig-content'),status=root.querySelector('.ig-status');
 const promotion=mountIntGemPromotion({doc:document,win:window,openWallet:()=>open('packs'),standalone:!!standalone,onExpire:()=>{if(shown())render();}});
 const walletButton=document.createElement('button');walletButton.className='ig-wallet-button';walletButton.type='button';walletButton.setAttribute('aria-label','Abrir carteira IntGem');walletButton.innerHTML=gemArt()+'<span>…</span>';
 if(!standalone)(document.querySelector('body > header .head')||document.body).append(walletButton);
 const dock=document.createElement('aside');dock.className='ig-dock';dock.hidden=true;dock.setAttribute('aria-label','Sua coleção IntGem');dock.innerHTML='<button class="ig-wallet-button" type="button" aria-label="Abrir loja IntGem">'+gemArt()+'<span>…</span></button><div class="ig-companion" aria-hidden="true"></div><button type="button" class="ig-hide-companion" hidden>Recolher</button>';
 const aura=document.createElement('div');aura.className='ig-aura';aura.setAttribute('aria-hidden','true');
 const setStatus=(message,error=false)=>{status.textContent=message;status.dataset.error=String(error);};
 const shown=()=>!!standalone||root.open;
 const equipped=(game,kind)=>{const id=state?.equipped?.find(x=>x.game===game&&x.kind===kind)?.item;return ITEMS.find(x=>x.id===id)||null;};
 function apply(data,stamp){if(stopped||stamp<applied)return;applied=stamp;const prior=state?.daily?.rewarded;state=data;promotion.update(data.promotion);if(data.quote)quote=data.quote;paintWallet();paintVisuals(true);if(pixPayment&&state.orders?.some(o=>o.id===pixPayment.id&&o.status==='paid'))completePix();window.dispatchEvent(new CustomEvent('box-intgem-change'));if(prior===false&&data.daily?.rewarded)setStatus('Você ganhou 1 IntGem pelo uso de hoje!');}
 async function rpc(action,payload={}){const stamp=++sequence;const r=await client.rpc('box_intgem',{p_action:action,p_payload:payload});if(r.error)throw Error('Não foi possível conectar à carteira. Confira sua conexão.');if(r.data?.error){if(r.data.quote)quote=r.data.quote;const e=Error(errors[r.data.error]||'Não foi possível concluir. Atualize e tente novamente.');e.code=r.data.error;throw e;}apply(r.data,stamp);return r.data;}
 function paintWallet(){root.querySelector('[data-balance]').textContent=state?String(state.balance):'…';walletButton.querySelector('span').textContent=state?String(state.balance):'…';dock.querySelector('.ig-wallet-button span').textContent=state?String(state.balance):'…';const daily=state?.daily,seconds=Math.min(300,daily?.seconds||0);root.querySelector('progress').value=seconds;root.querySelector('[data-daily-label]').textContent=daily?.rewarded?'Sua gema de hoje já chegou!':'1 IntGem por dia';root.querySelector('[data-daily-time]').textContent=daily?.rewarded?'Volte amanhã para ganhar mais.':`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')} de 5:00 · tempo ativo confirmado`;}
 const button=(label,attrs,disabled=false,primary=true)=>`<button type="button" class="${primary?'ig-primary':'ig-secondary'}" ${attrs} ${disabled||busy?'disabled':''}>${label}</button>`;
 function render(){
  const playing=standalone?'lobby':activeGame();filter=GAMES.some(g=>g.id===playing)?playing:null;
  if((tab==='collection'&&!filter)||(tab==='exchange'&&filter!=='egg'))tab='packs';
  paintWallet();root.querySelectorAll('[data-tab]').forEach(b=>{b.hidden=b.dataset.tab==='collection'&&!filter||b.dataset.tab==='exchange'&&filter!=='egg';b.setAttribute('aria-pressed',String(b.dataset.tab===tab));});
  if(!state){content.innerHTML='<p>Conectando sua carteira…</p>'+button('Tentar novamente','data-refresh');bind();return;}
  if(tab==='packs'&&pixPayment){renderPix();bind();return;}
  if(tab==='collection'){
   const catalog=state.items.filter(i=>ITEMS.some(known=>known.id===i.id)&&i.game===filter);
   content.innerHTML='<div class="ig-filter-row"><div><small class="ig-eyebrow">LOJA DO JOGO</small><h2>'+escape(GAMES.find(g=>g.id===filter).name)+'</h2></div></div><div class="ig-grid">'+catalog.map(i=>{
    const owned=state.owned.includes(i.id),on=state.equipped.some(e=>e.item===i.id),game=GAMES.find(g=>g.id===i.game);
    return `<article class="ig-item"><div class="ig-art" data-kind="${i.kind}" style="--ig-color:${escape(i.color)}33">${['head','face','back'].includes(i.kind)?eggItemArt(i):i.kind==='companion'?companionArt(i.game,i.color,i.secondary):gemArt(i.color,i.secondary)}<small class="ig-rarity">${escape(i.rarity)}</small></div><h3>${escape(i.name)}</h3><small>${escape(game.name)}</small><p>${escape(i.description)}</p>${button(on?'Equipado · guardar':owned?'Equipar':`${i.price} ◆ IntGem`,`${owned?'data-equip':'data-buy'}="${i.id}"`,false,!on)}</article>`;
   }).join('')+'</div>';
  }else if(tab==='packs'){
   content.innerHTML='<div class="ig-filter-row"><h2>Comprar IntGem</h2></div><p class="ig-collection-hint">As coleções ficam na loja de cada jogo. Abra uma aventura para escolher seus itens.</p><p>Escolha seu pacote para gerar o QR Code e o Pix copia e cola aqui mesmo.</p><div class="ig-packs">'+PACKS.map(p=>{const promo=p.id==='gem20'?promotion.getActive():null,total=promo?100:p.gems;return `<article class="ig-pack ${promo?'ig-pack-promo':''}">${promo?'<small class="ig-pack-bonus">20 + 80 GRÁTIS</small>':''}${gemArt()}<strong>${total}</strong><span>IntGem · ${money(p.cents/total)} por gema</span>${button(p.available===false?money(p.cents)+' · Indisponível':money(p.cents),`data-pack="${p.id}"`,p.available===false)}${promo?'<button class="ig-promo-details" type="button">Ver promoção de 5 dias</button>':''}${p.available===false?'<small class="ig-muted">O Asaas exige no mínimo R$ 5,00 por compra.</small>':''}</article>`;}).join('')+'</div><p class="ig-muted">Pagamento por Pix. Escaneie o QR Code ou copie o código para pagar no seu banco. As gemas entram automaticamente após a confirmação.</p>'+(returnPayment?button('Verificar meu pagamento','data-verify',false,false):'');
  }else if(tab==='exchange'){
   content.innerHTML='<section class="ig-exchange"><span class="ig-eyebrow">PEGUE O OVO → INTGEM</span><h2>Faça seus Integros brilharem.</h2>'+(quote?`<div class="ig-rate"><span>${Number(quote.rate).toLocaleString('pt-BR')} Integros</span><span>→</span><b>1 ◆</b></div><dl><dt>Reserva para conversões hoje</dt><dd>${quote.remaining} de ${quote.capacity} IntGem</dd><dt>Seus Integros sincronizados</dt><dd>${Number(quote.coins).toLocaleString('pt-BR')}</dd><dt>Tempo ativo no Pegue o Ovo hoje</dt><dd>${Math.min(20,Math.floor(quote.egg_seconds/60))}/20 min</dd><dt>Limite por conta</dt><dd>${quote.converted?'Já convertido hoje':'1 IntGem por dia'}</dd></dl><p class="ig-muted">A cotação usa a procura real por itens e a entrada de gemas nos últimos 7 dias. Ela sobe conforme a reserva diária é usada. Confira o valor antes de confirmar. Não há conversão de IntGem em dinheiro.</p>${!window.BoxEggCloud?'<a class="ig-primary" href="./jogar.html?intgem=exchange#egg">Converter dentro do jogo ↗</a>':button(quote.converted?'Conversão de hoje concluída':'Converter por '+Number(quote.rate).toLocaleString('pt-BR')+' Integros','data-convert',quote.converted||quote.remaining<1||quote.egg_seconds<1200||Number(quote.coins)<quote.rate)}`:'<p>Consultando a cotação…</p>')+'<p>'+button('Atualizar cotação','data-quote',false,false)+'</p><p class="ig-muted">Para converter, fique na base, sem ovo nas mãos e sem uma troca de criaturas em andamento. O saldo é descontado do progresso online.</p></section>';
  }else{
   const labels={grant:'Bônus gratuito',daily:'Bônus diário',payment:'Compra de pacote',purchase:'Item da coleção',exchange:'Conversão de Integros'};
   content.innerHTML='<div class="ig-filter-row"><h2>Cada gema tem uma história.</h2></div><ul class="ig-history">'+state.history.map(h=>`<li><span>${labels[h.kind]||'Movimentação'}${h.kind==='purchase'?'<small>'+escape(ITEMS.find(i=>i.id===h.reference)?.name||h.reference)+'</small>':''}<small>${new Date(h.created_at).toLocaleString('pt-BR',{timeZone:'America/Manaus'})}</small></span><b>${h.delta>0?'+':''}${h.delta} ◆</b></li>`).join('')+'</ul>'+(!state.history.length?'<p>Sua primeira gema está a caminho. Complete os 5 minutos de hoje.</p>':'')+'<h3>Seus pedidos recentes</h3><ul class="ig-history">'+state.orders.map(o=>`<li><span>${o.gems} IntGem · ${money(o.amount)}<small>${escape(o.id)}</small></span><span>${({creating:'Preparando',pending:'Aguardando pagamento',paid:'Gemas creditadas',error:'Checkout indisponível',expired:'Checkout expirado',canceled:'Checkout cancelado'})[o.status]}${o.provider==='asaas'&&o.status!=='paid'?button(o.payment_flow==='pix'?'Ver Pix':'Verificar',`${o.payment_flow==='pix'?'data-view-pix':'data-check-order'}="${escape(o.id)}"`,false,false):''}</span></li>`).join('')+'</ul>'+(returnPayment?button('Verificar pagamento','data-verify',false,false):'');
  }
  bind();
 }
 async function action(fn){if(busy||stopped)return;busy=true;render();setStatus('Aguarde…');try{await fn();}catch(e){setStatus(e.message,true);}finally{busy=false;render();}}
 async function refreshQuote(){if(window.BoxEggCloud&&window.BoxEggRuntime?.inBase())await window.BoxEggCloud.flush();await rpc('exchange_quote');}
 async function edge(body){const {data,error}=await client.functions.invoke('intgem-pay',{body});let issue=data?.error;if(error&&!issue)try{issue=(await error.context.json()).error;}catch{}if(error||issue){const e=Error(errors[issue]||'Não foi possível confirmar a operação. Tente novamente.');e.code=issue;throw e;}return data;}
 const pixExpired=()=>pixPayment&&Date.now()+pixClockOffset>=Date.parse(pixPayment.pix.expires_at);
 function renderPix(){
  const paid=pixPayment.status==='paid',expired=pixExpired();
  content.innerHTML=`<section class="ig-pix" aria-labelledby="igPixTitle"><div class="ig-pix-heading"><span class="ig-eyebrow">${paid?'COMPRA CONCLUÍDA':'PAGAMENTO PIX'}</span><h2 id="igPixTitle" tabindex="-1">${paid?'Suas IntGem chegaram!':expired?'Este Pix expirou':'Pague com Pix'}</h2><p><b>${pixPayment.gems} IntGem</b>${pixPayment.gems===100?' · 20 + 80 de bônus':''}</p><strong class="ig-pix-amount">${money(pixPayment.amount)}</strong></div>${paid?'<div class="ig-pix-done" aria-label="Pagamento confirmado">✓</div><p class="ig-pix-message">Pagamento confirmado. As gemas já estão na sua carteira.</p>':expired?'<p class="ig-pix-message">Gere outro código para continuar. Se você já pagou, confira o recebimento antes de tentar outra vez.</p>'+button('Gerar novo Pix','data-pix-new'):`<div class="ig-pix-body"><figure class="ig-pix-qr"><img src="data:image/png;base64,${pixPayment.pix.encodedImage}" alt="QR Code Pix de ${pixPayment.gems} IntGem por ${escape(money(pixPayment.amount))}" width="256" height="256"><figcaption>Escaneie com o aplicativo do seu banco</figcaption></figure><div class="ig-pix-copy"><label for="igPixCode">Pix copia e cola</label><textarea id="igPixCode" rows="4" readonly spellcheck="false">${escape(pixPayment.pix.payload)}</textarea>${button('Copiar Pix','data-copy-pix')}<p>1. Copie o código.<br>2. Abra o Pix no aplicativo do seu banco.<br>3. Cole o código e confirme o pagamento.</p><small class="ig-pix-expiry">Código válido por <b data-pix-time></b></small></div></div><p class="ig-pix-wait"><span aria-hidden="true"></span>Aguardando pagamento · confirmação automática</p>`}<div class="ig-pix-actions">${!paid?button('Já paguei · verificar','data-verify',false,false):''}${button(paid?'Voltar aos pacotes':'Escolher outro pacote','data-pix-back',false,false)}</div><small class="ig-pix-provider">Pagamento processado pelo Asaas para o Instituto Integro.</small></section>`;
  updatePixTime();
 }
 function updatePixTime(){
  if(!pixPayment||pixPayment.status==='paid')return;
  const seconds=Math.max(0,Math.ceil((Date.parse(pixPayment.pix.expires_at)-Date.now()-pixClockOffset)/1000));
  const label=content.querySelector('[data-pix-time]');if(label)label.textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
 }
 function showPix(result,requestKey=null){
  if(stopped)return;
  if(!result.pix?.payload?.startsWith('000201')||!/^iVBORw0KGgo[A-Za-z0-9+/=\r\n]+$/.test(result.pix.encodedImage)||!Number.isFinite(Date.parse(result.pix.expires_at))||!Number.isSafeInteger(result.amount)||!Number.isSafeInteger(result.gems))throw Error('Não foi possível carregar o Pix. Tente novamente.');
  pixPayment=result;pixClockOffset=Number.isFinite(Date.parse(result.server_now))?Date.parse(result.server_now)-Date.now():0;
  returnPayment={order:result.id,flow:'pix',requestKey:requestKey||(returnPayment?.order===result.id?returnPayment.requestKey:null)};
  try{sessionStorage.setItem('intgem-payment-return',JSON.stringify(returnPayment));}catch{}
  tab='packs';render();setStatus('Pix pronto. Você pode escanear o QR Code ou copiar o código.');
  content.querySelector('#igPixTitle')?.focus({preventScroll:true});content.querySelector('.ig-pix')?.scrollIntoView?.({block:'start',behavior:'auto'});
 }
 function completePix(){
  if(!pixPayment||pixPayment.status==='paid')return;
  pixPayment.status='paid';try{if(returnPayment?.requestKey)sessionStorage.removeItem(returnPayment.requestKey);sessionStorage.removeItem('intgem-payment-return');}catch{}
  returnPayment=null;if(tab==='packs'&&shown())render();setStatus('Pagamento confirmado! Suas IntGem já estão na carteira.');
 }
 async function loadPix(order){
  const result=await edge({action:'pix',order});if(result.paid){await rpc('wallet');try{if(returnPayment?.order===order&&returnPayment.requestKey)sessionStorage.removeItem(returnPayment.requestKey);sessionStorage.removeItem('intgem-payment-return');}catch{}returnPayment=null;setStatus('Pagamento confirmado! Suas IntGem já estão na carteira.');return;}
  showPix(result);
 }
 async function copyPix(){
  if(!pixPayment||pixExpired()||pixPayment.status==='paid')return;
  const code=pixPayment.pix.payload;
  try{await navigator.clipboard.writeText(code);setStatus('Pix copiado! Cole no aplicativo do seu banco.');}
  catch{const field=content.querySelector('#igPixCode');field?.focus();field?.select();if(document.execCommand?.('copy'))setStatus('Pix copiado! Cole no aplicativo do seu banco.');else setStatus('Código selecionado. Toque em Copiar para usar no aplicativo do banco.');}
 }
 async function checkout(pack,restart=false){
  const offered=pack==='gem20'?promotion.getActive():null;
  const key='intgem-order:'+user.id+':asaas-pix:'+pack+':'+PACKS.find(p=>p.id===pack).cents+':'+(offered?.id||'standard');
  let request;try{if(restart)sessionStorage.removeItem(key);request=sessionStorage.getItem(key);if(!request){request=crypto.randomUUID();sessionStorage.setItem(key,request);}}catch{request=crypto.randomUUID();}
  let result;try{result=await edge({action:'create',pack,request});}catch(e){if(e.code==='checkout_expired'){try{sessionStorage.removeItem(key);}catch{}if(!restart)return checkout(pack,true);}throw e;}
  if(result.status==='paid'){try{sessionStorage.removeItem(key);}catch{}await rpc('wallet');setStatus('Este pacote já foi creditado. Toque novamente para fazer uma nova compra.');return;}
  if(offered&&result.gems!==100){await rpc('wallet');throw Error('A promoção terminou antes da criação do pedido. Confira o pacote atualizado antes de continuar. Nenhum pagamento foi realizado.');}
  showPix(result,key);
 }
 async function verify(order=null){
  const payment=order?{order}:pixPayment?{order:pixPayment.id}:returnPayment;if(!payment)return;
  const result=await edge({action:'verify',...payment});
  if(result.paid){
   await rpc('wallet');completePix();try{sessionStorage.removeItem('intgem-payment-return');}catch{}
   returnPayment=null;setStatus('Pagamento confirmado! Suas IntGem já estão na carteira.');history.replaceState(null,'',location.pathname);
  }else if(['expired','canceled'].includes(result.status)){
   returnPayment=null;try{sessionStorage.removeItem('intgem-payment-return');}catch{}
   setStatus('Este pagamento foi encerrado. Escolha um pacote para começar novamente.');history.replaceState(null,'',location.pathname);
  }else setStatus('O pagamento ainda está aguardando confirmação. Não é necessário pagar novamente.');
 }
 function bind(){
  content.querySelector('[data-copy-pix]')?.addEventListener('click',()=>void copyPix());
  content.querySelector('[data-pix-back]')?.addEventListener('click',()=>{pixPayment=null;render();setStatus('');});
  content.querySelector('[data-pix-new]')?.addEventListener('click',()=>action(()=>checkout(pixPayment.pack,true)));
  content.querySelectorAll('[data-view-pix]').forEach(b=>b.onclick=()=>action(()=>loadPix(b.dataset.viewPix)));

  content.querySelector('.ig-promo-details')?.addEventListener('click',()=>promotion.show());
  content.querySelector('[data-refresh]')?.addEventListener('click',()=>action(async()=>{await rpc('wallet');setStatus('Carteira atualizada.');}));
  content.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>action(async()=>{const item=state.items.find(i=>i.id===b.dataset.buy);if(standalone||item?.game!==activeGame())throw Error('Abra este jogo para comprar os itens da coleção.');await rpc('buy',{item:item.id,price:item.price});setStatus(item.name+' agora faz parte da sua coleção e já está equipado!');}));
  content.querySelectorAll('[data-equip]').forEach(b=>b.onclick=()=>action(async()=>{const id=b.dataset.equip,on=state.equipped.some(e=>e.item===id);if(standalone||state.items.find(i=>i.id===id)?.game!==activeGame())throw Error('Abra este jogo para usar os itens da coleção.');await rpc(on?'unequip':'equip',{item:id});setStatus(on?'Item guardado.':'Item equipado!');}));
  content.querySelectorAll('[data-pack]').forEach(b=>b.onclick=()=>action(()=>checkout(b.dataset.pack)));
  content.querySelector('[data-quote]')?.addEventListener('click',()=>action(async()=>{await refreshQuote();setStatus('Cotação atualizada.');}));
  content.querySelector('[data-verify]')?.addEventListener('click',()=>action(()=>verify()));
  content.querySelectorAll('[data-check-order]').forEach(b=>b.onclick=()=>action(()=>verify(b.dataset.checkOrder)));
  content.querySelector('[data-convert]')?.addEventListener('click',()=>action(async()=>{const q={...quote};if(!window.BoxEggRuntime?.inBase())throw Error('Volte à base do Pegue o Ovo e deixe o ovo no curral antes de converter.');await window.BoxEggCloud.exchange(revision=>rpc('exchange',{rate:q.rate,day:q.day,revision}));await refreshQuote();setStatus('Conversão concluída! +1 IntGem na sua carteira.');}));
 }
 async function open(nextTab='packs',game){tab=nextTab;if(!standalone){const full=document.fullscreenElement;if(full&&!full.contains(root))full.append(root);else if(!full&&root.parentNode!==document.body)document.body.append(root);if(!root.open)root.showModal();window.BoxEggRuntime?.playing()&&window.BoxEggRuntime.pause();window.BoxFruitRuntime?.playing()&&window.BoxFruitRuntime.pause();window.BoxRush?.pause?.();window.BoxBounce?.pause?.();window.BoxInterDance?.pause?.();const snake=window.GoSnake?.getState?.();if(snake?.active&&!snake.modal&&snake.run?.status==='playing')document.getElementById('snakePause')?.click();}render();await action(async()=>{if(tab==='exchange')await refreshQuote();else await rpc('wallet');setStatus('');});}
 walletButton.onclick=()=>void open();dock.querySelector('.ig-wallet-button').onclick=()=>void open('collection',activeGame());
 root.querySelector('.ig-close')?.addEventListener('click',()=>root.close());
 root.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{if(!busy)void open(b.dataset.tab);});
 for(const type of ['keydown','keyup','pointerdown','pointerup'])root.addEventListener(type,e=>e.stopPropagation());
 dock.querySelector('.ig-hide-companion').onclick=()=>{compact=!compact;try{localStorage.setItem('box:'+user.id+':intgem-compact',compact?'1':'0');}catch{}paintVisuals(true);};
 function paintVisuals(force=false){
  if(standalone)return;const game=activeGame(),item=equipped(game,'aura'),companion=equipped(game,'companion'),signature=game+':'+item?.id+':'+companion?.id+':'+compact;
  if(!force&&signature===visualKey)return;visualKey=signature;current=game;
  document.querySelectorAll('.ig-game-themed').forEach(el=>{el.classList.remove('ig-game-themed');el.style.removeProperty('--ig-color');});aura.remove();
  const g=GAMES.find(g=>g.id===game),screen=g&&document.getElementById(g.screen);if(!screen){dock.hidden=true;dock.remove();return;}
  screen.append(dock);dock.hidden=false;
  if(item){screen.classList.add('ig-game-themed');screen.style.setProperty('--ig-color',item.color);aura.style.setProperty('--ig-color',item.color);screen.append(aura);}
  const figure=dock.querySelector('.ig-companion');figure.hidden=!companion;figure.classList.toggle('is-small',compact);figure.innerHTML=companion?companionArt(game,companion.color,companion.secondary):'';figure.title=companion?.name||'';
  const hide=dock.querySelector('.ig-hide-companion');hide.hidden=!companion;hide.textContent=compact?'Expandir':'Recolher';hide.setAttribute('aria-label',compact?'Expandir companheiro':'Recolher companheiro');
 }
 function activity(){lastInput=Date.now();}
 async function pulse(){if(stopped||pulseBusy)return;pulseBusy=true;try{const data=await rpc('pulse',{game:standalone?'lobby':activeGame(),active:!document.hidden&&Date.now()-lastInput<90000,visible:!document.hidden});if(shown()&&!content.childNodes.length)render();return data;}catch(e){if(shown())setStatus(e.message,true);}finally{pulseBusy=false;}}
 for(const type of ['pointerdown','keydown','touchstart'])document.addEventListener(type,activity,{passive:true,capture:true});
 const visibility=()=>void pulse();document.addEventListener('visibilitychange',visibility);window.addEventListener('online',visibility);
 const pixTimer=setInterval(()=>{if(pixPayment&&pixPayment.status!=='paid'&&pixExpired()&&content.querySelector('.ig-pix-qr'))render();else updatePixTime();},1000);
 const timer=setInterval(()=>void pulse(),15000),visualTimer=setInterval(()=>paintVisuals(),500);
 function stop(){if(stopped)return;stopped=true;state=null;authSubscription?.unsubscribe();delete window.BoxIntGem;clearInterval(timer);clearInterval(visualTimer);clearInterval(pixTimer);pixPayment=null;promotion.stop();for(const type of ['pointerdown','keydown','touchstart'])document.removeEventListener(type,activity,true);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('online',visibility);dock.remove();aura.remove();walletButton.remove();if(!standalone)root.remove();else root.replaceChildren();document.querySelectorAll('.ig-game-themed').forEach(el=>{el.classList.remove('ig-game-themed');el.style.removeProperty('--ig-color');});}
 async function transact(action,payload){
  if(stopped||!state)throw Error('Conecte sua carteira para continuar.');
  if(busy)throw Error('Aguarde a compra em andamento.');
  busy=true;try{return await rpc(action,payload);}finally{busy=false;if(shown())render();}
 }
 window.BoxIntGem={open,refresh:()=>rpc('wallet'),
  getCatalog:game=>(state?.items||[]).filter(i=>i.game===game&&ITEMS.some(k=>k.id===i.id)).map(i=>({...ITEMS.find(k=>k.id===i.id),...i,owned:state.owned.includes(i.id),equipped:state.equipped.some(e=>e.item===i.id)})),
  purchase:(id,price)=>transact('buy',{item:id,price}),
  toggleEquipment:id=>transact(state?.equipped.some(e=>e.item===id)?'unequip':'equip',{item:id}),
  getEquipped:game=>Object.fromEntries(['aura','companion','head','face','back'].map(kind=>[kind,equipped(game,kind)])),
  getAppearance:game=>equipped(game,'aura'),get balance(){return state?.balance??null;},stop};
 if(standalone)authSubscription=client.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'||(session&&session.user.id!==user.id)){stop();location.replace('./entrar.html');}}).data.subscription;
 try{returnPayment=JSON.parse(sessionStorage.getItem('intgem-payment-return')||'null');}catch{}
 render();await pulse();render();
 if(returnPayment){tab='packs';render();await action(()=>returnPayment.flow==='pix'?loadPix(returnPayment.order):verify());}
 if(new URLSearchParams(location.search).get('intgem')==='exchange'&&!standalone){document.getElementById('playEggGame')?.click();await open('exchange','egg');}
 return window.BoxIntGem;
}
