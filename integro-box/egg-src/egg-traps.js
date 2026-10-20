// The database owns price, stock, placement and hit/return transitions.
const names={bear:'Boca de urso',mine:'Mina terrestre'};
const icons={bear:'◉',mine:'✹'};
const errors={insufficient_intgem:'Você precisa de 1 IntGem para comprar.',invalid_trap:'Escolha uma armadilha válida.',request_changed:'Esta solicitação já foi usada. Atualize e tente novamente.',not_member:'Entre em uma sala do Pegue o Ovo.',ground_required:'Pare no chão para colocar a armadilha.',position_pending:'Aguarde a posição sincronizar e tente novamente.',trap_empty:'Você não tem essa armadilha na mochila.',trap_limit:'Você pode deixar até 12 armadilhas na sala. Aguarde uma disparar.'};
export function createEggTraps({rpc,getRoom,getRuntime,storage,onPlaced=()=>{},onChange=()=>{}}){
 let data={stock:{},traps:[],balance:0},loaded=false,busy=false,polling=false,host=null,status='',roomId=null,epoch=0,signature='';
 const seen=new Set(),acks=new Set(),requests=new Map();
 const panelOpen=()=>host?.isConnected&&!host.closest('[hidden]');
 try{for(const [k,v] of JSON.parse(storage?.getItem('egg-trap-requests')||'[]').slice(-16))if(typeof k==='string'&&typeof v==='string')requests.set(k,v);}catch{}
 const remember=()=>{try{storage?.setItem('egg-trap-requests',JSON.stringify([...requests].slice(-16)));}catch{}};
 try{for(const id of JSON.parse(storage?.getItem('egg-trap-hits')||'[]').slice(-100))seen.add(id);}catch{}
 const node=(tag,value,cls)=>{const el=document.createElement(tag);el.textContent=value;if(cls)el.className=cls;return el;};
 function button(label,fn,disabled=false){const b=node('button',label,'egg-secondary');b.type='button';b.disabled=busy||disabled;b.onclick=fn;return b;}
 async function call(action,payload={},request=null){try{return await rpc(action,{p_data:payload,p_id:request,p_room:getRoom()?.game==='egg'?getRoom().id:null});}catch(e){e.message=errors[e.code]||e.message;throw e;}}
 function apply(result,forRoom){data=result;loaded=true;
  if(forRoom!==roomId)return;
  getRuntime()?.traps(result.traps||[]);
  for(const hit of result.hits||[]){acks.add(hit.id);if(seen.has(hit.id))continue;seen.add(hit.id);while(seen.size>100)seen.delete(seen.values().next().value);try{storage?.setItem('egg-trap-hits',JSON.stringify([...seen]));}catch{}getRuntime()?.trapHit(hit);}
  onChange(data);const next=JSON.stringify([data.stock,data.balance,status,!!roomId]);if(next!==signature){signature=next;if(panelOpen())render(host);}
 }
 function syncRoom(){const next=getRoom()?.game==='egg'?getRoom().id:null;if(next===roomId)return;roomId=next;epoch++;acks.clear();data.traps=[];getRuntime()?.traps([]);onChange(data);}
 async function poll(){syncRoom();if(polling||busy||!getRuntime()?.active()||document.hidden||(!roomId&&!panelOpen()))return;polling=true;const generation=epoch,selected=roomId,sent=[...acks].slice(0,32);try{const result=await call('trap_state',{ack:sent});if(generation!==epoch)return;for(const id of sent)acks.delete(id);status='';apply(result,selected);}catch(e){status=e.message;if(panelOpen())render(host);}finally{polling=false;}}
 async function act(action,kind){if(busy)return false;syncRoom();const selected=roomId,generation=++epoch,key=action+':'+kind+(action==='trap_place'?':'+selected:'');let request=requests.get(key);
  if(!request){request=window.crypto.randomUUID();requests.set(key,request);remember();}busy=true;status='Aguarde…';if(panelOpen())render(host);
  try{const result=await call(action,{kind,...(action==='trap_place'?{position:getRuntime()?.trapPosition()}: {})},request);requests.delete(key);remember();if(generation===epoch){status=action==='trap_buy'?'Armadilha comprada!':'Armadilha colocada. Ela arma em 1 segundo.';apply(result,selected);if(action==='trap_place')onPlaced();}
   if(action==='trap_buy')void window.BoxIntGem?.refresh()?.catch(()=>{});return true;
  }catch(e){status=e.message;if(e.code){requests.delete(key);remember();}return false;}finally{busy=false;if(panelOpen())render(host);}
 }
 function render(element){host=element;host.replaceChildren();host.classList.add('egg-trap-shop');
  host.append(node('p','Cada armadilha custa 1 IntGem. Um adversário que pisar nela deixa cair o ovo que está carregando. O dono é imune.'),node('p','As armadilhas usadas são consumidas. Ao sair, as que não dispararam voltam à mochila. Se a conexão cair, a devolução acontece após a sala detectar a saída.'),node('strong',loaded?'◆ '+data.balance+' IntGem':'Conectando sua mochila…','egg-trap-balance'));
  const grid=node('div','','egg-sheet-grid');host.append(grid);
  for(const kind of ['bear','mine']){const count=data.stock?.[kind]||0,card=node('article','','egg-upgrade');card.append(node('div',icons[kind],'egg-trap-icon'),node('h3',names[kind]),node('p','Na mochila: '+count),button('Comprar · 1 IntGem',()=>void act('trap_buy',kind),!loaded||data.balance<1),button('Colocar aqui',()=>void act('trap_place',kind),!count||!roomId||!getRuntime()?.canPlaceTrap()));grid.append(card);}
  host.append(node('p','Pare no chão, abra Armadilhas e toque em Colocar aqui. Você pode deixar até 12 na sala. A armadilha arma em 1 segundo; pule para evitá-la.','egg-muted'));
  if(!roomId)host.append(node('p','Entre em uma sala para colocar suas armadilhas.'));
  const feedback=node('p',status);feedback.setAttribute('role','status');host.append(feedback);
 }
 const timer=window.setInterval(()=>void poll(),500);
 window.addEventListener('box-room-change',()=>{syncRoom();void poll();});
 return{render(element){syncRoom();render(element);void poll();},poll,act,get state(){return data;},stop(){window.clearInterval(timer);getRuntime()?.traps([]);}};
}
