export const CAGE_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16v14H4zM4 12h16M4 17h16M9 7v14M15 7v14M8 7V5a4 4 0 0 1 8 0v2"/></svg>';
export const CAGE_TIERS=[{tier:1,capacity:3,name:'Gaiola pequena'},{tier:2,capacity:6,name:'Gaiola média'},{tier:3,capacity:10,name:'Gaiola grande'}];
const errors={insufficient_balance:'Você não tem IntGem suficiente.',not_owned:'Esta gaiola não está na sua conta.',cage_empty:'Esta gaiola já completou as 5 pescas. Compre outra na loja.',cage_limit:'Use suas gaiolas antes de comprar mais.',request_changed:'Conclua a solicitação pendente antes de tentar outra.',invalid_catch:'Aproxime-se de peixes menores para pescar.',cage_active:'Resgate a comida da gaiola atual antes de colocar outra.',cage_not_full:'Aguarde a gaiola completar a capacidade.',cage_full:'Gaiola cheia! Resgate a comida.',already_collected:'Esta comida já foi resgatada.',cage_update_required:'Atualize a página para usar a nova pesca.'};
export function createSharkCages({rpc,storage,position,onCatch,onChange=()=>{},onDone=()=>{},onError=()=>{}}){
 let state={balance:0,cages:[],active:null},loaded=false,busy=false,host=null,status='',pending=null,loading=null,epoch=0;
 try{pending=JSON.parse(storage.getItem('shark-cage-pending')||'null');}catch{}
 function remember(value){storage.setItem('shark-cage-pending',JSON.stringify(value));pending=value;}
 const visible=()=>host?.isConnected&&!host.closest('[hidden]');
 function paint(){if(visible())render(host);onChange(state);}
 async function call(action,payload){try{return await rpc(action,payload);}catch(e){e.message=errors[e.code]||e.message;throw e;}}
 function apply(data){state=data;loaded=true;}
 async function refresh(){if(busy)return;if(loading)return loading;const stamp=epoch;loading=(async()=>{try{const data=await call('shark_cages',{});if(stamp===epoch)apply(data);}catch{status='Não foi possível carregar suas gaiolas. Tente novamente.';}finally{loading=null;paint();}})();return loading;}
 async function transact(kind,value){if(busy)return false;busy=true;epoch++;status='Confirmando…';paint();
  try{
   if(!pending){const payload={request:window.crypto.randomUUID()};
    if(kind==='buy')payload.tier=value;
    else if(kind==='place'){if(!state.cages.some(c=>c.id===value))throw Error(errors.not_owned);payload.cage=value;payload.position=position();if(!payload.position)throw Error('Entre no oceano para colocar sua gaiola.');}
    else{if(!state.active)throw Error(errors.not_owned);payload.run=state.active.id;if(kind==='catch')payload.level=value;}
    remember({kind,payload});
   }
   const operation=pending.kind,data=await call('shark_cage_'+operation,pending.payload);apply(data);
   if(operation==='collect'||operation==='cast'){if(!data.cast)throw Error('Não foi possível confirmar a pesca. Tente novamente.');await onCatch(data.cast);status='Comida resgatada!';}
   else if(operation==='buy'){status='Gaiola comprada! Você tem 5 pescas.';void window.BoxIntGem?.refresh()?.catch(()=>{});}
   else if(operation==='place')status='Gaiola colocada! Ela fica no local até encher.';
   else status=data.active?.levels.length===data.active?.capacity?'Gaiola cheia! Resgate a comida.':'Peixe capturado!';
   remember(null);onDone(data.cast,operation);return true;
  }catch(e){status=errors[e.code]||e.message;onError(status);if(e.code){try{remember(null);}catch{}}return false;}finally{busy=false;paint();}
 }
 const node=(tag,text,cls)=>{const el=document.createElement(tag);el.textContent=text;if(cls)el.className=cls;return el;};
 const button=(text,fn,disabled=false)=>{const b=node('button',text,'shark-button');b.type='button';b.disabled=busy||disabled;b.onclick=fn;return b;};
 function render(element){host=element;host.className='shark-cage-shop';host.replaceChildren();host.append(node('p','Coloque a gaiola no oceano. Ela fica no local capturando peixes menores até encher. Depois, toque em Resgatar comida. Cada colocação gasta 1 dos 5 usos.'));
  host.append(node('strong',loaded?'◆ '+state.balance+' IntGem':'Conectando sua carteira…','shark-cage-balance'));
  const feedback=node('p',status,'shark-cage-status');feedback.setAttribute('role','status');host.append(feedback);
  if(pending)host.append(button('Concluir solicitação pendente',()=>void transact(pending.kind,pending.payload.tier||pending.payload.cage)));
  if(state.active){const a=state.active,card=node('article','','shark-cage-active');card.append(node('h3','Gaiola no oceano'),node('strong',a.levels.length+'/'+a.capacity+' peixes'),button('Resgatar comida',()=>void transact('collect'),a.levels.length<a.capacity));host.append(card);}
  const owned=node('div','','shark-cage-owned');host.append(node('h3','Suas gaiolas'),owned);
  if(loaded&&!state.cages.length)owned.append(node('p','Escolha sua primeira gaiola abaixo.'));
  for(const cage of state.cages){const row=node('article','','shark-cage-row'),art=node('div','','shark-cage-icon');art.innerHTML=CAGE_ICON;const info=node('div');info.append(node('strong','Até '+cage.capacity+' peixes por pesca'),node('span',cage.uses_left+'/5 usos restantes'));row.append(art,info,button('Colocar gaiola',()=>void transact('place',cage.id),!!pending||!!state.active));owned.append(row);}
  host.append(node('h3','Comprar gaiolas'));const grid=node('div','','shark-cage-grid');host.append(grid);
  for(const item of CAGE_TIERS){const card=node('article','','shark-cage-card'),art=node('div','','shark-cage-icon');art.innerHTML=CAGE_ICON;card.append(art,node('h4',item.name),node('strong','Até '+item.capacity+' peixes por pesca'),node('span','5 usos por gaiola'),button('Comprar · '+item.tier+' IntGem',()=>void transact('buy',item.tier),!loaded||state.balance<item.tier||!!pending));grid.append(card);}
  host.append(button('Atualizar gaiolas',()=>void refresh()));
 }
 return{mount(element){render(element);void refresh();},refresh,buy:t=>transact('buy',t),place:id=>transact('place',id),capture:level=>transact('catch',level),collect:()=>transact('collect'),retry:()=>pending?transact(pending.kind):Promise.resolve(false),get pending(){return pending;},get state(){return state;},get busy(){return busy&&pending?.kind!=='catch';}};
}
