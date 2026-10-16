import {ITEMS} from '../intgem-catalog.mjs';
import {eggItemArt,EGG_SLOT_LABELS} from '../egg-intgem-catalog.mjs';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function createEggGemShop({getAPI=()=>window.BoxIntGem,canBuy=()=>true,thumbnail=()=>null,eventTarget=window}={}){
 let host=null,filter='all',pending=null,busy=false,status='',error=false,signature='';
 const catalog=()=>getAPI()?.getCatalog?.('egg')||[];
 function render(force=true){
  if(!host?.isConnected)return;
  const api=getAPI(),ready=api?.balance!=null,items=ready?catalog():ITEMS.filter(i=>i.game==='egg');
  const next=JSON.stringify([api?.balance,items.map(i=>[i.id,i.price,i.owned,i.equipped]),canBuy()]);
  if(!force&&signature===next)return;signature=next;
  const scroll=host.closest('.egg-sheet-card')?.scrollTop||0;
  const owned=items.filter(i=>i.owned).length,shown=items.filter(i=>filter==='all'||filter==='owned'&&i.owned||i.kind===filter);
  host.innerHTML=`<section class="egg-gem-store" aria-label="Loja IntGem do Pegue o Ovo"><header class="egg-gem-hero"><div><small>COLEÇÃO EXCLUSIVA · PEGUE O OVO</small><h3>Uma aventura.<br>Seu próprio estilo.</h3><p>30 novidades + 8 relíquias da aventura.<br>Itens permanentes, comprados só com IntGem.</p></div><div class="egg-gem-purse"><span>SUAS INTGEM</span><strong>◆ ${ready?api.balance:'…'}</strong><button type="button" data-gem-packs>Obter IntGem ↗</button></div></header><div class="egg-gem-toolbar"><span>${items.length} itens · ${owned} na coleção</span><button type="button" data-gem-refresh ${busy?'disabled':''}>Atualizar saldo</button></div><nav class="egg-gem-filters" aria-label="Categorias de itens">${[['all','Todos'],...Object.entries(EGG_SLOT_LABELS),['owned','Meus itens']].map(([k,n])=>`<button type="button" data-gem-filter="${k}" aria-pressed="${filter===k}">${n}</button>`).join('')}</nav><p class="egg-gem-status" role="status" aria-live="polite" data-error="${error}">${esc(status||(!ready?'Conectando sua carteira…':!canBuy()?'Volte à base para comprar. Você pode consultar sua coleção aqui.':'Use até um item de cada categoria ao mesmo tempo.'))}</p>${pending?confirmation(items,ready):''}<div class="egg-gem-grid">${shown.map(i=>{
   const pic=thumbnail(i.nativeId),can=ready&&!busy&&(i.owned||canBuy()&&api.balance>=i.price),missing=ready?Math.max(0,i.price-api.balance):0;
   return `<article class="egg-gem-card" style="--gem-tint:${esc(i.color)}"><div class="egg-gem-art">${pic?`<img src="${esc(pic)}" alt="" width="130" height="120">`:eggItemArt(i)}<span>${esc(i.rarity)}</span>${i.isNew?'<b>NOVO</b>':i.converted?'<b>RELÍQUIA</b>':''}</div><small>${esc(EGG_SLOT_LABELS[i.kind])} · ${esc(i.collection||'Clássicos do ninho')}</small><h4>${esc(i.name)}</h4><p>${esc(i.description)}</p><div class="egg-gem-price">${i.owned?'✓ Sua coleção':`◆ ${i.price} <small>IntGem</small>`}</div><button type="button" data-gem-item="${esc(i.id)}" ${can?'':'disabled'}>${i.equipped?'Guardar':i.owned?'Equipar':'Comprar por '+i.price+' IntGem'}</button>${!i.owned&&missing?`<small class="egg-gem-missing">Faltam ${missing} IntGem</small>`:''}</article>`;
  }).join('')}</div>${!shown.length?'<p class="egg-gem-empty">Nenhum item nesta seleção. Explore as outras categorias.</p>':''}<p class="egg-gem-note">Cosméticos: não aumentam velocidade nem produção. Relíquias já adquiridas no progresso online foram preservadas.</p></section>`;
  bind();const pane=host.closest('.egg-sheet-card');if(pane)pane.scrollTop=scroll;
 }
 function confirmation(items,ready){
  const i=items.find(x=>x.id===pending.id),priceChanged=!i||i.price!==pending.price,allowed=ready&&!busy&&!priceChanged&&canBuy()&&getAPI().balance>=pending.price;
  return `<section class="egg-gem-confirm" role="group" aria-label="Confirmar compra"><strong>${esc(i?.name||pending.id)}</strong><p>${priceChanged?'O preço mudou. Cancele e confira o valor atualizado.':`Comprar e equipar por ${pending.price} IntGem? Saldo após a compra: ${Math.max(0,(getAPI()?.balance||0)-pending.price)} IntGem.`}</p><div><button type="button" data-gem-confirm ${allowed?'':'disabled'}>${busy?'Comprando…':'Confirmar por '+pending.price+' IntGem'}</button><button type="button" data-gem-cancel ${busy?'disabled':''}>Cancelar</button></div></section>`;
 }
 async function act(fn){if(busy)return;busy=true;error=false;status='Aguarde…';render();try{await fn();}catch(e){error=true;status=e.message||'Não foi possível concluir. Confira sua conexão.';}finally{busy=false;render();}}
 function bind(){
  host.querySelectorAll('[data-gem-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.gemFilter;render();});
  host.querySelector('[data-gem-refresh]').onclick=()=>act(async()=>{if(!getAPI())throw Error('Carteira indisponível. Entre na sua conta e tente novamente.');await getAPI().refresh();status='Saldo atualizado.';});
  host.querySelector('[data-gem-packs]').onclick=()=>{if(getAPI())void getAPI().open('packs','egg');else{status='Entre na sua conta para obter IntGem.';error=true;render();}};
  host.querySelectorAll('[data-gem-item]').forEach(b=>b.onclick=()=>{
   if(busy)return;const i=catalog().find(x=>x.id===b.dataset.gemItem);if(!i)return;
   if(i.owned)void act(async()=>{await getAPI().toggleEquipment(i.id);status=i.equipped?'Item guardado.':i.name+' equipado!';});
   else if(canBuy()){pending={id:i.id,price:i.price};status='Confira o item e confirme sua compra.';error=false;render();host.querySelector('[data-gem-confirm]')?.focus();}
  });
  const confirm=host.querySelector('[data-gem-confirm]');if(confirm)confirm.onclick=()=>act(async()=>{
   if(!pending||!canBuy())throw Error('Volte à base para comprar.');
   const request={...pending};await getAPI().purchase(request.id,request.price);pending=null;status='Compra concluída! O item já está equipado e salvo na sua conta.';
  });
  const cancel=host.querySelector('[data-gem-cancel]');if(cancel)cancel.onclick=()=>{pending=null;status='';render();};
 }
 const changed=()=>render(false);eventTarget.addEventListener('box-intgem-change',changed);
 return {mount(element){host=element;render();},refresh:()=>render(false),dispose(){eventTarget.removeEventListener('box-intgem-change',changed);host=null;}};
}
