// Keep expansion controls inside the fullscreen element, including on phones.
export function mountScreenExpansion(tile,button){
 const doc=tile.ownerDocument;let placeholder=null,busy=false,disposed=false;
 const expanded=()=>doc.fullscreenElement===tile||Boolean(placeholder);
 const update=()=>{const active=expanded();button.textContent=active?'Reduzir tela':'Ampliar tela';button.setAttribute('aria-label',button.textContent);button.setAttribute('aria-expanded',String(active));};
 function restore(){if(!placeholder)return;placeholder.replaceWith(tile);placeholder=null;tile.classList.remove('screen-expanded');}
 async function toggle(){
  if(busy)return;busy=true;
  try{
   if(doc.fullscreenElement===tile)await doc.exitFullscreen();
   else if(placeholder)restore();
   else{
    try{if(!tile.requestFullscreen)throw Error('unsupported');await tile.requestFullscreen();}
    catch{if(disposed)return;placeholder=doc.createComment('shared screen');tile.replaceWith(placeholder);(doc.fullscreenElement||doc.body).append(tile);tile.classList.add('screen-expanded');}
   }
  }finally{busy=false;update();}
 }
 const key=event=>{if(event.key==='Escape'&&placeholder){restore();update();button.focus();}};
 button.type='button';button.addEventListener('click',toggle);doc.addEventListener('fullscreenchange',update);doc.addEventListener('keydown',key);update();
 const dispose=()=>{disposed=true;restore();button.removeEventListener('click',toggle);doc.removeEventListener('fullscreenchange',update);doc.removeEventListener('keydown',key);};
 dispose.collapse=()=>{restore();if(doc.fullscreenElement===tile)doc.exitFullscreen?.().catch(()=>{});update();};
 return dispose;
}

// visualViewport follows the visible area above mobile keyboards, unlike 100vh.
export function mountRoomViewport(room){
 const doc=room.ownerDocument,win=doc.defaultView,viewport=win.visualViewport;
 const form=room.querySelector('#chat-form'),input=room.querySelector('#chat-message'),done=room.querySelector('#chat-done');let timer;
 function update(){
  const height=viewport?.height||win.innerHeight,top=viewport?.offsetTop||0;
  room.style.setProperty('--room-visible-height',`${Math.round(height)}px`);
  room.style.setProperty('--room-visible-top',`${Math.round(top)}px`);
  const editing=win.innerWidth<=640&&form.contains(doc.activeElement)&&room.querySelector('#room-stage').dataset.panel==='chat';
  room.classList.toggle('chat-composing',editing);done.hidden=!editing;
 }
 const focus=()=>{win.clearTimeout(timer);update();timer=win.setTimeout(update,0);};
 const finish=()=>{input.blur();done.blur();room.classList.remove('chat-composing');done.hidden=true;};
 form.addEventListener('focusin',focus);form.addEventListener('focusout',focus);done.addEventListener('click',finish);
 viewport?.addEventListener('resize',update);viewport?.addEventListener('scroll',update);win.addEventListener('resize',update);update();
 return ()=>{win.clearTimeout(timer);form.removeEventListener('focusin',focus);form.removeEventListener('focusout',focus);done.removeEventListener('click',finish);viewport?.removeEventListener('resize',update);viewport?.removeEventListener('scroll',update);win.removeEventListener('resize',update);room.classList.remove('chat-composing');done.hidden=true;room.style.removeProperty('--room-visible-height');room.style.removeProperty('--room-visible-top');};
}
