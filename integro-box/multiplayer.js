import {supabase} from './access.js?v=20261016-intgem1';
const $=id=>document.getElementById(id);
const titles={egg:'Pegue o Ovo',bairro:'Meu Bairro',craft:'IntegroCraft'};
const buttons={egg:'playEggGame',bairro:'playDollGame',craft:'playCraft'};
const messages={room_unavailable:'Sala encerrada, expirada ou código incorreto.',not_member:'Você saiu desta sala. Peça um novo convite.',room_full:'Esta sala já tem quatro jogadores.',rate_limit:'Aguarde um pouco antes de tentar novamente.',not_owner:'Somente quem criou a sala pode fazer isso.',invalid_edit:'Este bloco está fora do alcance.',occupied:'Há um jogador neste espaço. Escolha outro bloco.',world_limit:'A sala atingiu o limite de alterações. Criem uma nova sala para continuar.'};
let room=null,timer=null,busy=false,version=0,gesture='',gestureUntil=0,listVersion=0,listBusy=false,editQueue=[],lastWorld={},started=false,failures=0,lastSyncAt=0;
const panel=document.createElement('aside');panel.id='boxOnline';panel.setAttribute('aria-label','Salas multiplayer');
panel.innerHTML=`<button id="boxOnlineToggle" title="Arraste para mover as salas" aria-label="Salas. Arraste para mover; Alt + setas para reposicionar." aria-expanded="false" aria-controls="boxOnlinePanel">Salas <span aria-hidden="true">↗</span></button>
<section id="boxOnlinePanel" hidden><header id="boxOnlineDrag" title="Arraste para mover as salas"><h2>Juntos na aventura</h2><button id="boxOnlineClose" aria-label="Fechar painel">×</button></header>
<p>Salas públicas ou por convite · até 4 jogadores · chat com revisão por IA</p>
<div id="boxRoomSetup"><label for="boxGame">Escolha o mundo</label><select id="boxGame"><option value="egg">Pegue o Ovo</option><option value="bairro">Meu Bairro</option><option value="craft">IntegroCraft</option></select><section class="boxPublic"><h3>Salas públicas</h3><p>Encontre outros jogadores com login da família. Pessoas que você não conhece podem entrar.</p><div class="boxRoomActions"><button id="boxBrowse">Atualizar salas</button><button id="boxCreatePublic">Criar sala pública</button></div><div id="boxPublicList" aria-live="polite"></div></section><details class="boxPrivate"><summary>Sala privada por convite</summary><button id="boxCreate">Criar sala privada</button>
<form id="boxJoinForm"><label for="boxCode">Código do convite</label><input id="boxCode" maxlength="14" autocomplete="off" autocapitalize="characters" placeholder="12 letras e números" required><button>Entrar com convite</button></form><small>O responsável compartilha o código apenas com famílias conhecidas. Cada jogador entra com uma conta de família diferente.</small></details></div>
<div id="boxRoomActive" hidden><strong id="boxRoomTitle"></strong><p>Seu apelido: <b id="boxAlias"></b></p><p id="boxRoomVisibility"></p><div id="boxInviteSection"><label>Código da sala <output id="boxInvite"></output></label><button id="boxCopy">Copiar código</button></div><ul id="boxPlayers"></ul><div class="boxGestures"><button id="boxWave">👋 Acenar</button><button id="boxCheer">🙌 Comemorar</button></div><button id="boxReturn">Voltar ao mundo da sala</button><button id="boxLeave">Sair da sala</button><small>Ao sair, quem criou a sala a encerra para todos. A sala dura até 4 horas. As construções do grupo ficam apenas nesta sala; conquistas e desafios individuais continuam separados.</small></div>
<p id="boxOnlineStatus" role="status" aria-live="polite"></p></section>`;
document.body.append(panel);
const status=text=>$('boxOnlineStatus').textContent=text;
function toggle(open){$('boxOnlinePanel').hidden=!open;$('boxOnlineToggle').setAttribute('aria-expanded',String(open));if(open&&!room)void browse();else if(!open)listVersion++;placeRooms();}
$('boxOnlineToggle').onclick=()=>toggle($('boxOnlinePanel').hidden);
$('boxOnlineClose').onclick=()=>toggle(false);
$('boxOnlinePanel').addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();toggle(false);$('boxOnlineToggle').focus();}});
// Game keyboard listeners must not capture typing in the room controls.
panel.addEventListener('keydown',e=>e.stopPropagation());panel.addEventListener('keyup',e=>e.stopPropagation());
document.addEventListener('fullscreenchange',()=>{(document.fullscreenElement||document.body).append(panel);placeRooms();});
// Keep the launcher small and movable without turning a drag into a click.
const roomPositionKey='integro-box-rooms-position-v1';
let roomDrag=null,suppressRoomClick=false;
const roomViewport=()=>({width:document.documentElement.clientWidth||window.innerWidth,height:window.innerHeight});
function placeRooms(right,bottom){
 const rect=panel.getBoundingClientRect(),view=roomViewport();
 if(rect.width&&rect.height){
  right=Number.isFinite(right)?right:view.width-rect.right;bottom=Number.isFinite(bottom)?bottom:view.height-rect.bottom;
  panel.style.right=Math.max(8,Math.min(right,Math.max(8,view.width-rect.width-8)))+'px';
  panel.style.bottom=Math.max(8,Math.min(bottom,Math.max(8,view.height-rect.height-8)))+'px';
 }
 const sheet=$('boxOnlinePanel');if(sheet.hidden)return;
 const anchor=panel.getBoundingClientRect(),size=sheet.getBoundingClientRect();
 const left=Math.max(8,Math.min((anchor.width?anchor.right:view.width-8)-size.width,view.width-size.width-8));
 const preferred=anchor.height?anchor.top-size.height-8:60;
 const top=Math.max(8,Math.min(preferred,view.height-size.height-8));
 Object.assign(sheet.style,{left:left+'px',top:top+'px',right:'auto',bottom:'auto',transform:'none'});
}
function saveRoomPosition(){try{window.localStorage.setItem(roomPositionKey,JSON.stringify({right:parseFloat(panel.style.right),bottom:parseFloat(panel.style.bottom)}));}catch{}}
function roomDragStart(e){
 if(roomDrag||e.button!==0||e.target.closest('#boxOnlineClose'))return;
 e.stopPropagation();suppressRoomClick=false;const rect=panel.getBoundingClientRect(),view=roomViewport();
 roomDrag={id:e.pointerId,x:e.clientX,y:e.clientY,right:view.width-rect.right,bottom:view.height-rect.bottom,moved:false,handle:e.currentTarget};
 try{e.currentTarget.setPointerCapture(e.pointerId);}catch{}
}
function roomDragMove(e){
 if(!roomDrag||roomDrag.id!==e.pointerId)return;
 const dx=e.clientX-roomDrag.x,dy=e.clientY-roomDrag.y;if(!roomDrag.moved&&Math.hypot(dx,dy)<6)return;
 roomDrag.moved=true;panel.dataset.dragging='true';e.preventDefault();placeRooms(roomDrag.right-dx,roomDrag.bottom-dy);
}
function roomDragEnd(e){
 if(!roomDrag||roomDrag.id!==e.pointerId)return;
 if(e.type==='pointerup'&&roomDrag.moved)placeRooms(roomDrag.right-(e.clientX-roomDrag.x),roomDrag.bottom-(e.clientY-roomDrag.y));
 suppressRoomClick=roomDrag.moved;if(roomDrag.moved)saveRoomPosition();
 try{roomDrag.handle.releasePointerCapture(e.pointerId);}catch{}roomDrag=null;delete panel.dataset.dragging;
}
for(const handle of [$('boxOnlineToggle'),$('boxOnlineDrag')])handle.addEventListener('pointerdown',roomDragStart);
window.addEventListener('pointermove',roomDragMove,{passive:false,capture:true});window.addEventListener('pointerup',roomDragEnd);window.addEventListener('pointercancel',roomDragEnd);
panel.addEventListener('dragstart',e=>e.preventDefault());panel.addEventListener('click',e=>{if(suppressRoomClick){suppressRoomClick=false;e.preventDefault();e.stopImmediatePropagation();}},true);
$('boxOnlineToggle').addEventListener('keydown',e=>{if(e.altKey&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const r=panel.getBoundingClientRect(),v=roomViewport();placeRooms(v.width-r.right+(e.key==='ArrowLeft'?20:e.key==='ArrowRight'?-20:0),v.height-r.bottom+(e.key==='ArrowUp'?20:e.key==='ArrowDown'?-20:0));saveRoomPosition();}});
try{const saved=JSON.parse(window.localStorage.getItem(roomPositionKey));if(saved&&Number.isFinite(saved.right)&&Number.isFinite(saved.bottom))placeRooms(saved.right,saved.bottom);}catch{}
window.addEventListener('resize',()=>placeRooms());
if(window.ResizeObserver)new window.ResizeObserver(()=>placeRooms()).observe($('boxOnlinePanel'));

function controls(disabled){for(const button of $('boxRoomSetup').querySelectorAll('button'))button.disabled=disabled||button.dataset.full==='true';}
async function rpc(action,extras={}){
 const {data,error}=await supabase.rpc('box_room',{p_action:action,...(room?{p_room:room.id}:{}),...extras});
 if(error){
  if(error.code==='PGRST202'||error.code==='42883')throw new Error('O modo com amigos está em preparação. Os jogos individuais já estão disponíveis.');
  if(error.code==='42501'||error.status===401)throw new Error('Entre novamente com o login da família.');
  throw new Error('A conexão com a sala falhou. Verifique a internet e tente novamente.');
 }
 if(data?.error){const err=new Error(messages[data.error]||'Não foi possível entrar na sala.');err.code=data.error;throw err;}
 return data;
}
async function openGame(game){
 window.BoxGoSnake?.hide();
 window.BoxInterDance?.hide();
 if(!window.BoxAdapters[game].active()){
  await $(buttons[game]).onclick();
  if(!window.BoxAdapters[game].active())throw new Error('Não foi possível abrir o mundo 3D neste aparelho.');
 }
}
function display(data){
 room=data;
 $('boxRoomSetup').hidden=true;$('boxRoomActive').hidden=false;
 $('boxRoomTitle').textContent=titles[data.game];$('boxAlias').textContent='Explorador '+data.slot;$('boxInvite').textContent=data.code||'';$('boxInviteSection').hidden=!!data.public;$('boxRoomVisibility').textContent=data.public?'Pública · outros usuários autenticados podem entrar.':'Privada · entrada somente por convite.';
 const peers=data.players.filter(p=>p.slot!==data.slot);
 const adapter=window.BoxAdapters[data.game];adapter.setPeers(data.game==='egg'?(window.BoxEggPush?.peers(peers)||peers):peers);
 if(data.world){lastWorld=data.world;adapter.applyWorld?.(data.world);}
 const signature=JSON.stringify(data.players.map(p=>p.slot));
 if($('boxPlayers').dataset.signature!==signature){
  $('boxPlayers').dataset.signature=signature;$('boxPlayers').replaceChildren();
  for(const p of data.players){const li=document.createElement('li');li.textContent='Explorador '+p.slot+(p.slot===data.slot?' (você)':'');
   if(data.owner&&p.slot!==data.slot){const kick=document.createElement('button');kick.textContent='Remover';kick.setAttribute('aria-label','Remover Explorador '+p.slot);kick.onclick=async()=>{try{display(await rpc('kick',{p_slot:p.slot}));}catch(e){status(e.message);}};li.append(kick);}
   $('boxPlayers').append(li);
  }
 }
 $('boxOnlineToggle').firstChild.textContent=`${data.players.length}/4 na sala `;
}
async function connect(action,extras){
 if(busy||room)return;busy=true;listVersion++;controls(true);status('Conectando…');const token=++version;
 try{
  const data=await rpc(action,extras);
  if(token!==version)return;
  room=data;await openGame(data.game);
  if(token!==version)return;
  window.BoxAdapters[data.game].enter?.(data.world||{});started=true;display(data);window.dispatchEvent(new Event('box-room-change'));failures=0;
  status(data.public?'Sala pública conectada. Outros jogadores podem encontrar sua sala.':'Sala conectada. Convide uma família para jogar junto.');
  schedule(20);
 }catch(e){status(e.message);if(room)await disconnect(false);}
 finally{busy=false;controls(false);}
}
function schedule(ms=500){clearTimeout(timer);if(room)timer=setTimeout(sync,ms);}
async function sync(){
 if(!room)return;
 const token=version,adapter=window.BoxAdapters[room.game];
 if(!adapter.active()||document.hidden){status('Sala pausada. Volte ao jogo em até 30 segundos para manter sua presença.');schedule(1500);return;}
 const raw=adapter.state();if(!raw){schedule();return;}
 const state={x:raw.x,y:raw.y||0,z:raw.z,yaw:raw.yaw||0,zone:raw.zone,gesture:Date.now()<gestureUntil?gesture:'',vehicle:room.game==='egg'&&window.BoxEgg?.vehicleIds?.includes(raw.vehicle)?raw.vehicle:''};
 const edit=editQueue[0]||null;
 try{
  const data=await rpc('sync',{p_state:state,p_revision:room.revision,p_edit:edit});
  if(token!==version)return;
  if(edit)editQueue.shift();failures=0;lastSyncAt=Date.now();display(data);
  status(data.edit_error?(messages[data.edit_error]||'Não foi possível alterar esse bloco.'):'Conectado · '+data.players.length+' de 4 jogadores');
 }catch(e){
  if(token!==version)return;status(e.message);
  if(['room_unavailable','not_member'].includes(e.code)){await disconnect(false);return;}
  if(++failures>=3){adapter.clearPeers();editQueue=[];status('Conexão interrompida. Reconectando à sala…');}
 }
 if(token===version)schedule(failures?2000:500);
}
async function disconnect(notify=true){
 const previous=room;++version;clearTimeout(timer);timer=null;room=null;editQueue=[];failures=0;window.dispatchEvent(new Event('box-room-change'));
 if(previous){const adapter=window.BoxAdapters[previous.game];adapter.clearPeers();if(started)adapter.leave?.();started=false;
  if(notify)try{await rpc('leave',{p_room:previous.id});}catch{}
 }
 $('boxRoomSetup').hidden=false;$('boxRoomActive').hidden=true;$('boxPlayers').dataset.signature='';$('boxOnlineToggle').firstChild.textContent='Salas ';
}
async function browse(){
 if(room||busy||listBusy||$('boxOnlinePanel').hidden)return;
 listBusy=true;const stamp=++listVersion,game=$('boxGame').value,list=$('boxPublicList');
 $('boxBrowse').disabled=true;
 try{
  const data=await rpc('list',{p_game:game});
  if(stamp!==listVersion||room||busy||game!==$('boxGame').value)return;
  list.replaceChildren();
  for(const item of data.rooms||[]){
   const card=document.createElement('article'),name=document.createElement('strong'),info=document.createElement('span'),join=document.createElement('button');
   card.className='boxPublicRoom';name.textContent=titles[item.game]+' · '+item.id.slice(0,6).toUpperCase();info.textContent=item.players+' de '+item.capacity+' jogadores';
   join.type='button';join.dataset.full=String(item.players>=item.capacity);join.disabled=item.players>=item.capacity;join.textContent=join.disabled?'Lotada':'Entrar';join.setAttribute('aria-label','Entrar em '+name.textContent);join.onclick=()=>connect('join_public',{p_room:item.id});
   card.append(name,info,join);list.append(card);
  }
  if(!list.children.length){const text=document.createElement('p');text.textContent='Nenhuma sala aberta neste mundo. Crie a primeira e aguarde outros jogadores.';list.append(text);}
 }catch(e){if(stamp===listVersion&&!room){list.textContent=e.message;}}
 finally{listBusy=false;$('boxBrowse').disabled=busy;}
}
$('boxBrowse').onclick=()=>void browse();
$('boxGame').onchange=()=>{listVersion++;$('boxPublicList').textContent='Buscando salas deste mundo…';void browse();};
$('boxCreatePublic').onclick=()=>connect('create_public',{p_game:$('boxGame').value});
setInterval(()=>{if(!document.hidden)void browse();},10000);
$('boxCreate').onclick=()=>connect('create',{p_game:$('boxGame').value});
$('boxJoinForm').onsubmit=e=>{e.preventDefault();const code=$('boxCode').value.replace(/[\s-]/g,'').toUpperCase();if(!/^[0-9A-F]{12}$/.test(code)){status('Confira o código de 12 letras e números.');return;}connect('join',{p_code:code});};
$('boxLeave').onclick=async()=>{await disconnect();status('Você saiu da sala.');void browse();};
$('boxReturn').onclick=async()=>{if(room)try{await openGame(room.game);toggle(false);schedule(20);}catch(e){status(e.message);}};
$('boxCopy').onclick=async()=>{try{await navigator.clipboard.writeText(room.code);status('Código copiado. Compartilhe apenas com famílias conhecidas.');}catch{status('Copie o código exibido acima.');}};
$('boxWave').onclick=()=>{gesture='wave';gestureUntil=Date.now()+2200;toggle(false);};
$('boxCheer').onclick=()=>{gesture='cheer';gestureUntil=Date.now()+2200;toggle(false);};
window.BoxMultiplayer={disconnect,get roomInfo(){return room;},edit(edit){if(!room||room.game!=='craft'||failures||editQueue.length>=8){status('Aguarde a conexão para construir.');return;}editQueue.push(edit);},get usageRoom(){return room?{id:room.id,game:room.game}:null;},get healthy(){return !!room&&!failures&&Date.now()-lastSyncAt<3000;},get connected(){return !!room;}};
