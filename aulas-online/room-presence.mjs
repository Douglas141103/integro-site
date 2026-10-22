import {icon} from './room-hud.mjs?v=20261022-presence5';
export function renderMediaIndicators(tile,{microphone=false,camera=false,blocked=false}={}){
 let box=tile.querySelector('.participant-media');
 if(!box){box=tile.ownerDocument.createElement('div');box.className='participant-media';tile.append(box);}
 const key=[microphone,camera,blocked].join();if(box.dataset.state===key)return;box.dataset.state=key;box.replaceChildren();
 for(const [type,on,label] of [['mic',microphone&&!blocked,blocked?'Microfone silenciado pelo professor':microphone?'Microfone ligado':'Microfone desligado'],['camera',camera,camera?'Câmera ligada':'Câmera desligada']]){
  const badge=tile.ownerDocument.createElement('div');badge.className='media-indicator'+(on?' is-on':' is-off');badge.setAttribute('role','img');badge.setAttribute('aria-label',label);badge.title=label;badge.innerHTML=icon(type);box.append(badge);
 }
}
export function renderRoomMode(root,mode,isTeacher){
 const active=mode==='live',paused=mode==='paused';root.dataset.mode=mode;
 const slate=root.querySelector('#room-slate');slate.hidden=active;
 root.querySelector('#room-slate-title').textContent=paused?'Em pausa':'Iniciaremos em breve';
 root.querySelector('#room-slate-message').textContent=paused?'A aula está em intervalo. Aguarde o professor retomar.':'Aguarde o professor iniciar a aula. Você já está na sala.';
 root.querySelector('#room-mode-controls').hidden=!isTeacher;
 root.querySelectorAll('[data-lesson-mode]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.lessonMode===mode));});
 const resume=root.querySelector('[data-lesson-mode="live"]');resume.textContent=paused?'Retomar aula':active?'Em aula':'Iniciar aula';
 for(const id of ['mic','camera','screen']){const button=root.querySelector('#'+id);button.disabled=!active||(id==='screen'&&!globalThis.navigator?.mediaDevices?.getDisplayMedia);}
}
// No media is acquired in the lobby. Admission is rechecked when the teacher arrives.
export function mountWaiting({entry,check,enter,changed,failed,interval=4000}){
 let stopped=false,timer=null,failures=0;
 async function poll(){
  try{const result=await check(entry);if(stopped)return;changed(result);
   if(result.ready){stopped=true;await enter(entry);return;}failures=0;
  }catch(error){if(stopped){failed(error);return;}failures++;if(failures>=3){stopped=true;failed(error);return;}changed({error:'Reconectando à sala de espera…'});}
  if(!stopped)timer=setTimeout(poll,interval);
 }
 timer=setTimeout(poll,interval);
 return ()=>{stopped=true;clearTimeout(timer);};
}
