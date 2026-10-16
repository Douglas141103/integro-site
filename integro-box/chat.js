import {supabase} from './access.js?v=20261016-intgem1';
const root=document.createElement('aside');root.id='boxChat';root.setAttribute('aria-label','Chat da sala');
root.innerHTML=`<button id="boxChatToggle" title="Arraste para mover o chat" aria-expanded="false" aria-controls="boxChatPanel">💬 <span>Chat</span><span id="boxChatUnread" hidden aria-hidden="true"></span></button><section id="boxChatPanel" hidden><header id="boxChatDrag" title="Arraste para mover o chat"><strong>Chat da sala</strong><button id="boxChatClose" aria-label="Fechar chat">×</button></header><p id="boxChatIdentity">Entre em uma sala para conversar.</p><small>Cada mensagem passa pela IA antes de aparecer. Não compartilhe dados pessoais. A IA pode errar: denuncie algo inadequado. Histórico dos últimos 7 dias.</small><ol id="boxChatMessages" aria-label="Mensagens aprovadas" aria-live="polite"></ol><form id="boxChatForm"><label for="boxChatInput">Sua mensagem</label><input id="boxChatInput" maxlength="280" autocomplete="off" placeholder="Vamos jogar juntos?" required><button id="boxChatSend" disabled>Enviar</button></form><p id="boxChatStatus" role="status"></p></section>`;
document.body.append(root);
const style=document.createElement('style');style.textContent=`#boxChat{position:fixed;right:14px;bottom:82px;z-index:16000;font:14px/1.45 Arial;color:#ecf8ff}#boxChat button{cursor:pointer;border:0;border-radius:12px;padding:10px;background:#2e7864;color:white;font-weight:bold}#boxChat button:disabled{opacity:.5;cursor:default}#boxChatPanel{box-sizing:border-box;width:min(340px,calc(100vw - 28px));max-height:70dvh;overflow:auto;padding:16px;background:#14263bf5;border:1px solid #38516b;border-radius:20px;box-shadow:0 12px 40px #0008}#boxChatPanel[hidden]{display:none}#boxChatPanel header{display:flex;align-items:center;justify-content:space-between;background:none;padding:0}#boxChatPanel p{margin:8px 0}#boxChatPanel small{display:block;font-size:11px;color:#bed1dc}#boxChatMessages{list-style:none;margin:10px 0;padding:0;max-height:220px;overflow:auto}#boxChatMessages li{margin:7px 0;padding:8px;background:#263f55;border-radius:10px;overflow-wrap:anywhere}#boxChatMessages b{color:#8be6b2}#boxChatMessages button{font-size:10px;padding:4px;margin-left:8px;background:#314759}#boxChatForm{display:flex;flex-wrap:wrap;gap:6px}#boxChatForm label{width:100%;font-size:12px}#boxChatInput{min-width:0;flex:1;border:1px solid #65808f;border-radius:10px;padding:10px;background:white;color:#14263b}#boxChatToggle{float:right;position:relative}#boxChatUnread{position:absolute;right:-7px;top:-10px;min-width:22px;height:22px;box-sizing:border-box;padding:0 5px;border-radius:99px;background:#d71920;color:#fff;border:2px solid #14263b;font:700 12px/18px Arial;text-align:center}#boxChatUnread[hidden]{display:none}#boxChatMessages .boxChatReactions{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}#boxChatMessages .boxChatReaction{font-size:14px;min-width:48px;min-height:36px;margin:0;padding:6px 8px;border:1px solid #65808f}#boxChatMessages .boxChatReaction[aria-pressed="true"]{background:#23614d;border-color:#8be6b2;box-shadow:inset 0 0 0 1px #8be6b2}#boxChat #boxChatToggle,#boxChat #boxChatDrag{touch-action:none;cursor:grab;user-select:none}#boxChat[data-dragging] #boxChatToggle,#boxChat[data-dragging] #boxChatDrag{cursor:grabbing}#boxChatStatus{font-size:12px}@media(max-height:500px){#boxChat{bottom:12px}#boxChatPanel{max-height:86dvh}#boxChatMessages{max-height:100px}}`;document.head.append(style);
const $=id=>document.getElementById(id),panel=$('boxChatPanel'),input=$('boxChatInput'),send=$('boxChatSend');
let stopped=false,generation=0,pending=false,reading=false,timer=null,roomId=null,available=false;
const reactions=[['like','👍','Joinha'],['star','⭐','Estrelinha'],['fireworks','🎆','Fogos de artifício'],['happy','😊','Carinha feliz']];
let known=null;const unread=new Set(),reacting=new Set();
const status=text=>$('boxChatStatus').textContent=text;
const room=()=>window.BoxMultiplayer?.roomInfo?.id||null;
const student=()=>window.BoxPlayer?.studentId||null;
function controls(){input.disabled=send.disabled=!available||pending||!roomId;}
function badge(){const count=unread.size,el=$('boxChatUnread');el.hidden=!count;el.textContent=count>99?'99+':String(count);$('boxChatToggle').setAttribute('aria-label',count?`Chat, ${count} ${count===1?'mensagem não lida':'mensagens não lidas'}`:'Chat');}
function markRead(){if(!panel.hidden&&!document.hidden){unread.clear();badge();}}
function toggle(open){panel.hidden=!open;$('boxChatToggle').setAttribute('aria-expanded',String(open));markRead();clampPosition();if(open){const list=$('boxChatMessages');list.scrollTop=list.scrollHeight;void refresh();}}
function reset(){generation++;roomId=room();available=false;pending=false;known=null;unread.clear();reacting.clear();badge();$('boxChatMessages').replaceChildren();$('boxChatMessages').dataset.signature='';input.value='';$('boxChatIdentity').textContent=roomId?'Conectando ao chat…':'Entre em uma sala para conversar.';status('');controls();void refresh();}
async function refresh(){
 if(stopped||reading||document.hidden||!roomId)return;
 reading=true;const stamp=generation,current=roomId;
 try{
  const {data,error}=await supabase.rpc('box_chat',{p_room:current,p_student:student()});
  if(stamp!==generation||stopped)return;
  if(error)throw new Error();
  available=true;$('boxChatIdentity').textContent='Seu código: '+data.code;
  const messages=data.messages||[],ids=new Set(messages.map(m=>m.id));
  for(const id of unread)if(!ids.has(id))unread.delete(id);
  if(known)for(const message of messages)if(!known.has(message.id)&&message.code!==data.code)unread.add(message.id);
  known=ids;markRead();badge();
  render(messages,stamp,current);
 }catch{if(stamp===generation){available=false;status('Chat ainda indisponível. Selecione seu aluno; se já selecionou, aguarde a ativação.');}}
 finally{reading=false;controls();if(stamp!==generation&&!stopped)void refresh();}
}
function render(messages,stamp,current){
 const list=$('boxChatMessages'),signature=JSON.stringify(messages);
 if(list.dataset.signature===signature)return;
 const nearBottom=list.scrollHeight-list.scrollTop-list.clientHeight<40,previousScroll=list.scrollTop;
 list.dataset.signature=signature;list.replaceChildren();
 for(const message of messages){
  const li=document.createElement('li'),code=document.createElement('b'),text=document.createElement('span'),report=document.createElement('button'),actions=document.createElement('div');
  code.textContent=message.code+': ';text.textContent=message.body;report.type='button';report.textContent='Denunciar';
  report.onclick=async()=>{report.disabled=true;try{const r=await supabase.rpc('box_chat',{p_room:current,p_student:student(),p_report:message.id});if(stamp===generation)status(r.error?'Não foi possível denunciar. Tente novamente.':'Denúncia registrada para a gestão.');report.disabled=!!(!r.error);}catch{if(stamp===generation)status('Não foi possível denunciar. Tente novamente.');report.disabled=false;}};
  actions.className='boxChatReactions';actions.setAttribute('role','group');actions.setAttribute('aria-label','Reações à mensagem de '+message.code);
  for(const [key,emoji,label] of reactions){
   const button=document.createElement('button'),active=(message.my_reactions||[]).includes(key),total=Number(message.reactions?.[key])||0,requestKey=message.id+':'+key;
   button.type='button';button.className='boxChatReaction';button.dataset.reaction=key;button.textContent=emoji+' '+total;button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',`${label}: ${total}. ${active?'Retirar':'Adicionar'} reação`);button.disabled=reacting.has(requestKey);
   button.onclick=async()=>{
    if(reacting.has(requestKey)||stamp!==generation||stopped)return;
    reacting.add(requestKey);button.disabled=true;
    try{const result=await supabase.rpc('box_chat_react',{p_room:current,p_student:student(),p_message:message.id,p_reaction:key,p_active:!active});
     if(stamp!==generation||stopped)return;
     if(result.error||!result.data?.ok)throw new Error();
     status(active?'Reação retirada.':'Reação adicionada.');
    }catch{if(stamp===generation)status('Não foi possível atualizar a reação. Tente novamente.');}
    finally{if(stamp===generation){reacting.delete(requestKey);button.disabled=false;await refresh();}}
   };
   actions.append(button);
  }
  li.append(code,text,actions,report);list.append(li);
 }
 list.scrollTop=nearBottom?list.scrollHeight:previousScroll;
}
$('boxChatForm').onsubmit=async e=>{
 e.preventDefault();if(pending||!available||!roomId)return;
 const body=input.value.trim();if(!body)return;
 const stamp=generation,current=roomId,selected=student();pending=true;controls();status('Analisando a mensagem…');
 try{
  const {data,error}=await supabase.functions.invoke('box-chat',{body:{room:current,student:selected,request:crypto.randomUUID(),body}});
  if(stamp!==generation||stopped)return;
  if(error||data?.error)throw new Error();
  if(data.status==='approved'){input.value='';status('Mensagem aprovada.');await refresh();}
  else if(data.status==='blocked'){status('Mensagem não publicada. Evite ofensas, dados pessoais e contatos externos.');}
  else status('Não foi possível confirmar o envio. Confira as mensagens antes de tentar novamente.');
 }catch{if(stamp===generation)status('A revisão está indisponível. Não foi possível confirmar o envio. Confira o histórico antes de tentar novamente.');}
 finally{if(stamp===generation){pending=false;controls();}}
};
$('boxChatToggle').onclick=()=>toggle(panel.hidden);$('boxChatClose').onclick=()=>toggle(false);
root.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='Escape')toggle(false);});root.addEventListener('keyup',e=>e.stopPropagation());
const positionKey='integro-box-chat-position-v1';let drag=null,suppressClick=false;
const viewportWidth=()=>document.documentElement.clientWidth||window.innerWidth;
function clampPosition(right,bottom){
 const rect=root.getBoundingClientRect();if(!rect.width||!rect.height)return;
 const width=viewportWidth(),height=window.innerHeight;
 right=Number.isFinite(right)?right:width-rect.right;bottom=Number.isFinite(bottom)?bottom:height-rect.bottom;
 root.style.right=Math.max(8,Math.min(right,Math.max(8,width-rect.width-8)))+'px';
 root.style.bottom=Math.max(8,Math.min(bottom,Math.max(8,height-rect.height-8)))+'px';
}
function savePosition(){try{window.localStorage.setItem(positionKey,JSON.stringify({right:parseFloat(root.style.right),bottom:parseFloat(root.style.bottom)}));}catch{}}
function dragStart(e){
 if(drag||e.button!==0||e.target.closest('#boxChatClose'))return;
 e.stopPropagation();suppressClick=false;const rect=root.getBoundingClientRect();
 drag={id:e.pointerId,x:e.clientX,y:e.clientY,right:viewportWidth()-rect.right,bottom:window.innerHeight-rect.bottom,moved:false,handle:e.currentTarget};
 try{e.currentTarget.setPointerCapture(e.pointerId);}catch{}
}
function dragMove(e){
 if(!drag||e.pointerId!==drag.id)return;
 const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(!drag.moved&&Math.hypot(dx,dy)<6)return;
 drag.moved=true;root.dataset.dragging='true';e.preventDefault();clampPosition(drag.right-dx,drag.bottom-dy);
}
function dragEnd(e){
 if(!drag||e.pointerId!==drag.id)return;
 if(e.type==='pointerup'&&drag.moved)clampPosition(drag.right-(e.clientX-drag.x),drag.bottom-(e.clientY-drag.y));
 suppressClick=drag.moved;if(drag.moved)savePosition();
 try{drag.handle.releasePointerCapture(e.pointerId);}catch{}drag=null;delete root.dataset.dragging;
}
for(const handle of [$('boxChatToggle'),$('boxChatDrag')])handle.addEventListener('pointerdown',dragStart);
window.addEventListener('pointermove',dragMove,{passive:false,capture:true});window.addEventListener('pointerup',dragEnd);window.addEventListener('pointercancel',dragEnd);
root.addEventListener('dragstart',e=>e.preventDefault());
root.addEventListener('click',e=>{if(suppressClick){suppressClick=false;e.preventDefault();e.stopImmediatePropagation();}},true);
$('boxChatToggle').addEventListener('keydown',e=>{if(e.altKey&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const r=root.getBoundingClientRect();clampPosition(viewportWidth()-r.right+(e.key==='ArrowLeft'?20:e.key==='ArrowRight'?-20:0),window.innerHeight-r.bottom+(e.key==='ArrowUp'?20:e.key==='ArrowDown'?-20:0));savePosition();}});
try{const saved=JSON.parse(window.localStorage.getItem(positionKey));if(saved&&Number.isFinite(saved.right)&&Number.isFinite(saved.bottom))clampPosition(saved.right,saved.bottom);}catch{}
const resize=()=>clampPosition();window.addEventListener('resize',resize);
const fullscreen=()=>{(document.fullscreenElement||document.body).append(root);clampPosition();};
document.addEventListener('fullscreenchange',fullscreen);window.addEventListener('box-room-change',reset);window.addEventListener('box-player-change',reset);
const visibility=()=>{if(!document.hidden){markRead();void refresh();}};document.addEventListener('visibilitychange',visibility);
timer=setInterval(()=>void refresh(),4000);reset();
window.BoxChat={stop(){stopped=true;generation++;clearInterval(timer);window.removeEventListener('box-room-change',reset);window.removeEventListener('box-player-change',reset);document.removeEventListener('fullscreenchange',fullscreen);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('resize',resize);window.removeEventListener('pointermove',dragMove,true);window.removeEventListener('pointerup',dragEnd);window.removeEventListener('pointercancel',dragEnd);drag=null;unread.clear();reacting.clear();root.remove();style.remove();}};
