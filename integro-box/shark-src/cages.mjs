export const CAGE_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16v14H4zM4 12h16M4 17h16M9 7v14M15 7v14M8 7V5a4 4 0 0 1 8 0v2"/></svg>';
export const CAGE_TIERS=[{tier:1,capacity:3,name:'Gaiola pequena'},{tier:2,capacity:6,name:'Gaiola média'},{tier:3,capacity:10,name:'Gaiola grande'}];
const errors={insufficient_balance:'Você não tem IntGem suficiente.',not_owned:'Esta gaiola não está na sua conta.',cage_empty:'Esta gaiola já completou as 5 pescas. Compre outra na loja.',cage_limit:'Use suas gaiolas antes de comprar mais.',request_changed:'Conclua a solicitação pendente antes de tentar outra.',invalid_catch:'Aproxime-se de peixes menores para pescar.'};
export function createSharkCages({rpc,storage,prepare,onCatch,onChange=()=>{},onDone=()=>{}}){
 let state={balance:0,cages:[]},loaded=false,busy=false,host=null,status='',pending=null,loading=null,epoch=0;
 try{pending=JSON.parse(storage.getItem('shark-cage-pending')||'null');}catch{}
 function remember(value){storage.setItem('shark-cage-pending',JSON.stringify(value));pending=value;}
 const visible=()=>host?.isConnected&&!host.closest('[hidden]');
 function paint(){if(visible())render(host);onChange(state);}
 async function call(action,payload){try{return await rpc(action,payload);}catch(e){e.message=errors[e.code]||e.message;throw e;}}
 function apply(data){state=data;loaded=true;}
 async function refresh(){if(busy)return;if(loading)return loading;const stamp=epoch;loading=(async()=>{try{const data=await call('shark_cages',{});if(stamp===epoch)apply(data);}catch{status='Não foi possível carregar suas gaiolas. Tente novamente.';}finally{loading=null;paint();}})();return loading;}
 async function transact(kind,value){if(busy)return false;busy=true;epoch++;status='Confirmando…';paint();
  try{
   if(!pending){const payload={request:window.crypto.randomUUID()};if(kind==='buy')payload.tier=value;else{const cage=state.cages.find(c=>c.id===value);if(!cage)throw Error(errors.not_owned);const levels=prepare(cage.capacity);if(!levels?.length)throw Error('Nenhum peixe menor por perto. Aproxime-se de um cardume; nenhum uso foi gasto.');payload.cage=value;payload.levels=levels;}remember({kind,payload});}
   const data=await call(pending.kind==='buy'?'shark_cage_buy':'shark_cage_cast',pending.payload);apply(data);
   if(pending.kind==='cast'){if(!data.cast)throw Error('Não foi possível confirmar a pesca. Tente novamente.');await onCatch(data.cast);status=data.cast.uses_left?'Pesca concluída!':'Esta gaiola já completou as 5 pescas. Compre outra na loja.';}else{status='Gaiola comprada! Você tem 5 pescas.';void window.BoxIntGem?.refresh()?.catch(()=>{});}
   const cast=data.cast;remember(null);onDone(cast);return true;
  }catch(e){status=errors[e.code]||e.message;if(e.code){try{remember(null);}catch{}}return false;}finally{busy=false;paint();}
 }
 const node=(tag,text,cls)=>{const el=document.createElement(tag);el.textContent=text;if(cls)el.className=cls;return el;};
 const button=(text,fn,disabled=false)=>{const b=node('button',text,'shark-button');b.type='button';b.disabled=busy||disabled;b.onclick=fn;return b;};
 function render(element){host=element;host.className='shark-cage-shop';host.replaceChildren();host.append(node('p','Cada gaiola dura 5 pescas. Captura apenas peixes menores próximos, até a capacidade por uso. Sem peixes por perto, nenhum uso é gasto.'));
  host.append(node('strong',loaded?'◆ '+state.balance+' IntGem':'Conectando sua carteira…','shark-cage-balance'));
  const feedback=node('p',status,'shark-cage-status');feedback.setAttribute('role','status');host.append(feedback);
  if(pending)host.append(button('Concluir solicitação pendente',()=>void transact(pending.kind,pending.payload.tier||pending.payload.cage)));
  const owned=node('div','','shark-cage-owned');host.append(node('h3','Suas gaiolas'),owned);
  if(loaded&&!state.cages.length)owned.append(node('p','Escolha sua primeira gaiola abaixo.'));
  for(const cage of state.cages){const row=node('article','','shark-cage-row'),art=node('div','','shark-cage-icon');art.innerHTML=CAGE_ICON;const info=node('div');info.append(node('strong','Até '+cage.capacity+' peixes por pesca'),node('span',cage.uses_left+'/5 usos restantes'));row.append(art,info,button('Pescar',()=>void transact('cast',cage.id),!!pending));owned.append(row);}
  host.append(node('h3','Comprar gaiolas'));const grid=node('div','','shark-cage-grid');host.append(grid);
  for(const item of CAGE_TIERS){const card=node('article','','shark-cage-card'),art=node('div','','shark-cage-icon');art.innerHTML=CAGE_ICON;card.append(art,node('h4',item.name),node('strong','Até '+item.capacity+' peixes por pesca'),node('span','5 usos por gaiola'),button('Comprar · '+item.tier+' IntGem',()=>void transact('buy',item.tier),!loaded||state.balance<item.tier||!!pending));grid.append(card);}
  host.append(button('Atualizar gaiolas',()=>void refresh()));
 }
 return{mount(element){render(element);void refresh();},refresh,buy:t=>transact('buy',t),cast:id=>transact('cast',id),get state(){return state;},get busy(){return busy;}};
}
