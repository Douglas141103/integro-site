import {supabase} from './access.js?v=20261015-chat1';
const root=document.createElement('aside');root.id='boxChat';root.setAttribute('aria-label','Chat da sala');
root.innerHTML=`<button id="boxChatToggle" aria-expanded="false" aria-controls="boxChatPanel">💬 <span>Chat</span></button><section id="boxChatPanel" hidden><header><strong>Chat da sala</strong><button id="boxChatClose" aria-label="Fechar chat">×</button></header><p id="boxChatIdentity">Entre em uma sala para conversar.</p><small>Cada mensagem passa pela IA antes de aparecer. Não compartilhe dados pessoais. A IA pode errar: denuncie algo inadequado. Histórico dos últimos 7 dias.</small><ol id="boxChatMessages" aria-label="Mensagens aprovadas" aria-live="polite"></ol><form id="boxChatForm"><label for="boxChatInput">Sua mensagem</label><input id="boxChatInput" maxlength="280" autocomplete="off" placeholder="Vamos jogar juntos?" required><button id="boxChatSend" disabled>Enviar</button></form><p id="boxChatStatus" role="status"></p></section>`;
document.body.append(root);
const style=document.createElement('style');style.textContent=`#boxChat{position:fixed;right:14px;bottom:82px;z-index:16000;font:14px/1.45 Arial;color:#ecf8ff}#boxChat button{cursor:pointer;border:0;border-radius:12px;padding:10px;background:#2e7864;color:white;font-weight:bold}#boxChat button:disabled{opacity:.5;cursor:default}#boxChatPanel{width:min(340px,calc(100vw - 28px));max-height:70dvh;overflow:auto;padding:16px;background:#14263bf5;border:1px solid #38516b;border-radius:20px;box-shadow:0 12px 40px #0008}#boxChatPanel[hidden]{display:none}#boxChatPanel header{display:flex;align-items:center;justify-content:space-between;background:none;padding:0}#boxChatPanel p{margin:8px 0}#boxChatPanel small{display:block;font-size:11px;color:#bed1dc}#boxChatMessages{list-style:none;margin:10px 0;padding:0;max-height:220px;overflow:auto}#boxChatMessages li{margin:7px 0;padding:8px;background:#263f55;border-radius:10px;overflow-wrap:anywhere}#boxChatMessages b{color:#8be6b2}#boxChatMessages button{font-size:10px;padding:4px;margin-left:8px;background:#314759}#boxChatForm{display:flex;flex-wrap:wrap;gap:6px}#boxChatForm label{width:100%;font-size:12px}#boxChatInput{min-width:0;flex:1;border:1px solid #65808f;border-radius:10px;padding:10px;background:white;color:#14263b}#boxChatToggle{float:right}#boxChatStatus{font-size:12px}@media(max-height:500px){#boxChat{bottom:12px}#boxChatPanel{max-height:86dvh}#boxChatMessages{max-height:100px}}`;document.head.append(style);
const $=id=>document.getElementById(id),panel=$('boxChatPanel'),input=$('boxChatInput'),send=$('boxChatSend');
let stopped=false,generation=0,pending=false,reading=false,timer=null,roomId=null,available=false;
const status=text=>$('boxChatStatus').textContent=text;
const room=()=>window.BoxMultiplayer?.roomInfo?.id||null;
const student=()=>window.BoxPlayer?.studentId||null;
function controls(){input.disabled=send.disabled=!available||pending||!roomId;}
function toggle(open){panel.hidden=!open;$('boxChatToggle').setAttribute('aria-expanded',String(open));if(open)void refresh();}
function reset(){generation++;roomId=room();available=false;pending=false;$('boxChatMessages').replaceChildren();$('boxChatMessages').dataset.signature='';input.value='';$('boxChatIdentity').textContent=roomId?'Conectando ao chat…':'Entre em uma sala para conversar.';status('');controls();if(!panel.hidden)void refresh();}
async function refresh(){
 if(stopped||reading||panel.hidden||document.hidden||!roomId)return;
 reading=true;const stamp=generation,current=roomId;
 try{
  const {data,error}=await supabase.rpc('box_chat',{p_room:current,p_student:student()});
  if(stamp!==generation||stopped)return;
  if(error)throw new Error();
  available=true;$('boxChatIdentity').textContent='Seu código: '+data.code;
  const list=$('boxChatMessages'),signature=JSON.stringify(data.messages);
  if(list.dataset.signature!==signature){list.dataset.signature=signature;list.replaceChildren();for(const message of data.messages){const li=document.createElement('li'),code=document.createElement('b'),text=document.createElement('span'),report=document.createElement('button');code.textContent=message.code+': ';text.textContent=message.body;report.type='button';report.textContent='Denunciar';report.onclick=async()=>{report.disabled=true;const r=await supabase.rpc('box_chat',{p_room:current,p_student:student(),p_report:message.id});if(stamp===generation)status(r.error?'Não foi possível denunciar. Tente novamente.':'Denúncia registrada para a gestão.');report.disabled=!!(!r.error);};li.append(code,text,report);list.append(li);}list.scrollTop=list.scrollHeight;}
 }catch{if(stamp===generation){available=false;status('Chat ainda indisponível. Selecione seu aluno; se já selecionou, aguarde a ativação.');}}
 finally{reading=false;controls();}
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
const fullscreen=()=>{(document.fullscreenElement||document.body).append(root);};
document.addEventListener('fullscreenchange',fullscreen);window.addEventListener('box-room-change',reset);window.addEventListener('box-player-change',reset);
timer=setInterval(()=>void refresh(),4000);reset();
window.BoxChat={stop(){stopped=true;generation++;clearInterval(timer);window.removeEventListener('box-room-change',reset);window.removeEventListener('box-player-change',reset);document.removeEventListener('fullscreenchange',fullscreen);root.remove();style.remove();}};
