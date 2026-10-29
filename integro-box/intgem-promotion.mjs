import {gemArt, money} from './intgem-catalog.mjs?v=20261016-eggshop1';

export function activePromotion(p, now=Date.now()) {
 return !!p && p.id==='intgem-surpresa-20261028' && p.pack==='gem20' && p.base===20 && p.bonus===80 && p.total===100 && p.cents===1099 && p.active===true && now>=Date.parse(p.starts_at) && now<Date.parse(p.ends_at);
}
export function remainingPromotion(end, now=Date.now()) {
 const seconds=Math.max(0,Math.floor((Date.parse(end)-now)/1000));
 return `${Math.floor(seconds/86400)}d ${String(Math.floor(seconds/3600)%24).padStart(2,'0')}h ${String(Math.floor(seconds/60)%60).padStart(2,'0')}m ${String(seconds%60).padStart(2,'0')}s`;
}
export function surpriseArt() {
 return `<div class="ig-surprise-art" aria-hidden="true"><div class="ig-surprise-glow"></div><span class="ig-surprise-star star-one">✦</span><span class="ig-surprise-star star-two">✧</span><span class="ig-surprise-star star-three">✦</span><div class="ig-surprise-gem">${gemArt()}</div><svg class="ig-surprise-box" viewBox="0 0 300 190" fill="none"><path d="m60 68 90-34 90 34-90 42Z" fill="#143b46" stroke="#e4b46c" stroke-width="4"/><path d="m60 68 90 40v74l-90-39Z" fill="#7652b1" stroke="#272647" stroke-width="4" stroke-linejoin="round"/><path d="m150 108 90-40v75l-90 39Z" fill="#4c3687" stroke="#272647" stroke-width="4" stroke-linejoin="round"/><path d="m89 81 25 11v73l-25-11Zm73 21 25-11v75l-25 11Z" fill="#ffcf76"/><path d="m60 68 90 40-25 26-98-43Z" fill="#a280e6" stroke="#332d58" stroke-width="4" stroke-linejoin="round"/><path d="m150 108 90-40 34 24-98 42Z" fill="#8c66cc" stroke="#332d58" stroke-width="4" stroke-linejoin="round"/><path d="m89 81 25 11-27 26-27-12Zm73 21 25-11 27 24-26 12Z" fill="#ffe1a0"/><path d="m60 68 90-34-31-19-91 31Zm90-34 90 34 31-21-91-32Z" fill="#b395eb" stroke="#332d58" stroke-width="4" stroke-linejoin="round"/></svg></div>`;
}
export function promotionCard(p) {
 const end=new Date(p.ends_at).toLocaleString('pt-BR',{timeZone:'America/Manaus',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
 return `<div class="ig-promo-layout">${surpriseArt()}<div class="ig-promo-copy"><span class="ig-promo-kicker">CAIXA SURPRESA · POR 5 DIAS</span><h2>Uma caixa.<br><em>Muito mais brilho.</em></h2><p class="ig-promo-offer">Compre <b>20 IntGem</b><br>e ganhe <b>+80 de bônus!</b></p><div class="ig-promo-total"><strong>100</strong><span>IntGem<br><small>no total</small></span></div><p class="ig-promo-price">Tudo por <b>${money(p.cents)}</b></p><p class="ig-promo-deadline">Termina em <strong data-promo-countdown></strong><small>Até ${end} · horário de Manaus</small></p><button type="button" class="ig-promo-buy">Quero meus 100 IntGem ↗</button><p class="ig-promo-terms">Bônus garantido, sem sorteio. Para pedidos criados durante a promoção. Crédito após a confirmação do pagamento.</p></div></div>`;
}

export function mountIntGemPromotion({openWallet,standalone=false,onExpire=()=>{},doc=document,win=window}) {
 let offer=null,offset=0,prompted=false,stopped=false,wasActive=false;
 const banner=doc.createElement('button');banner.type='button';banner.className='ig-promo-banner';banner.hidden=true;
 banner.innerHTML=surpriseArt()+'<span><small>POR 5 DIAS · BÔNUS GARANTIDO</small><b>Compre 20, ganhe +80 IntGem</b><strong>100 IntGem por R$ 10,99 <i>Ver promoção ↗</i></strong></span>';
 const launcher=doc.createElement('button');launcher.type='button';launcher.className='ig-promo-launcher';launcher.hidden=true;launcher.setAttribute('aria-label','Promoção: compre 20 IntGem e receba 100 por R$ 10,99');launcher.innerHTML=gemArt()+'<span>20 + 80<small>VER OFERTA</small></span>';
 const modal=doc.createElement('dialog');modal.className='ig-promo-dialog';modal.setAttribute('aria-label','Promoção IntGem: compre 20 e ganhe 80');
 modal.innerHTML='<button type="button" class="ig-promo-close" aria-label="Fechar promoção">×</button><div class="ig-promo-body"></div>';
 doc.body.append(modal);
 if(!standalone){const header=doc.querySelector('body > header');if(header)header.after(banner);else doc.body.append(banner);doc.body.append(launcher);}
 const serverNow=()=>Date.now()+offset;
 const getActive=()=>activePromotion(offer,serverNow())?offer:null;
 function show(){if(!getActive()||stopped)return;const full=doc.fullscreenElement;if(full&&!full.contains(modal))full.append(modal);else if(!full&&modal.parentElement!==doc.body)doc.body.append(modal);if(!modal.open){win.BoxEggRuntime?.playing()&&win.BoxEggRuntime.pause();win.BoxFruitRuntime?.playing()&&win.BoxFruitRuntime.pause();win.BoxRush?.pause?.();win.BoxBounce?.pause?.();win.BoxInterDance?.pause?.();modal.showModal();}tick();}
 function tick(){
  if(stopped)return;const active=!!getActive();
  banner.hidden=!active;launcher.hidden=!active||!!standalone;
  if(active)modal.querySelectorAll('[data-promo-countdown]').forEach(el=>el.textContent=remainingPromotion(offer.ends_at,serverNow()));
  else if(modal.open)modal.close();
  if(wasActive&&!active)onExpire();wasActive=active;
 }
 modal.querySelector('.ig-promo-close').onclick=()=>modal.close();banner.onclick=show;launcher.onclick=show;
 for(const type of ['keydown','keyup','pointerdown','pointerup'])modal.addEventListener(type,e=>e.stopPropagation());
 function update(p){
  if(stopped)return;
  if(p?.server_now&&Number.isFinite(Date.parse(p.server_now)))offset=Date.parse(p.server_now)-Date.now();
  const changed=offer?.id!==p?.id||offer?.ends_at!==p?.ends_at;offer=p||null;
  if(getActive()&&(changed||!modal.querySelector('.ig-promo-buy'))){modal.querySelector('.ig-promo-body').innerHTML=promotionCard(offer);modal.querySelector('.ig-promo-buy').onclick=()=>{modal.close();void openWallet();};}
  tick();
  if(getActive()&&!prompted&&!standalone){prompted=true;show();}
 }
 const timer=win.setInterval(tick,1000);
 return {update,getActive,show,stop(){stopped=true;win.clearInterval(timer);if(modal.open)modal.close();modal.remove();banner.remove();launcher.remove();}};
}
