import {supabase} from './access.js?v=20261013-account1';
const screens={snakeApp:'gosnake',houseApp:'house',eggApp:'egg',dollApp:'bairro',fruitApp:'fruit',interballApp:'interball',fcApp:'fuitcort',craftApp:'craft'};
export function currentGame(doc=document){
 for(const [id,game] of Object.entries(screens)){const el=doc.getElementById(id);if(el&&!el.hidden&&!el.classList.contains('hidden'))return game;}
 const play=doc.getElementById('play');
 return play&&!play.hidden&&!play.classList.contains('hidden')?window.BoxUsageGame||'lobby':'lobby';
}
export function startUsage(){
 const id=crypto.randomUUID();
 const device=matchMedia('(pointer:coarse)').matches?(Math.min(screen.width,screen.height)<600?'mobile':'tablet'):'desktop';
 let lastInput=Date.now(),busy=false,stopped=false,lastState='',timer,queued=false;
 const notice=document.getElementById('boxUsageNotice');
 const normal='A gestão acompanha os jogos acessados, as salas e os tempos de uso desta conta. Não gravamos conversas, teclas digitadas ou imagens.';
 function activity(){lastInput=Date.now();}
 for(const type of ['pointerdown','keydown','touchstart'])document.addEventListener(type,activity,{passive:true,capture:true});
 function state(){
  const game=currentGame();const room=window.BoxMultiplayer?.usageRoom;
  const visible=!document.hidden;
  const paused=!!document.querySelector('#integroUpdate:not([hidden]):not([data-compact="true"])');
  return {p_game:game,p_active:visible&&!paused&&Date.now()-lastInput<120000,p_visible:visible,p_room:room?.game===game?room.id:null};
 }
 async function pulse(action='pulse'){
  if(stopped)return;if(busy){queued=true;return;}busy=true;const s=state();lastState=JSON.stringify(s);
  try{
   const {data,error}=await supabase.rpc('box_usage',{p_session:id,p_action:action,p_device:device,...s});
   if(notice)notice.textContent=error||data?.error?normal+' Registro temporariamente indisponível.':normal;
   if(data?.closed&&action!=='end'){stopped=true;clearInterval(timer);}
  }catch{if(notice)notice.textContent=normal+' Aguardando conexão para registrar o uso.';}
  finally{busy=false;if(queued&&!stopped){queued=false;queueMicrotask(()=>void pulse());}}
 }
 // Inspect game screens, never form values, chat, keys or gameplay contents.
 const observer=new MutationObserver(()=>{if(JSON.stringify(state())!==lastState)void pulse();});
 for(const id of [...Object.keys(screens),'play']){const el=document.getElementById(id);if(el)observer.observe(el,{attributes:true,attributeFilter:['hidden','class']});}
 const check=()=>void pulse();document.addEventListener('visibilitychange',check);window.addEventListener('online',check);
 window.addEventListener('box-room-change',check);
 timer=setInterval(check,30000);void pulse();
 async function stop(){await pulse('end');stopped=true;clearInterval(timer);observer.disconnect();}
 window.addEventListener('pagehide',()=>void pulse('end'));
 window.addEventListener('pageshow',e=>{if(e.persisted)location.reload();});
 window.BoxUsage={stop};
 return window.BoxUsage;
}
