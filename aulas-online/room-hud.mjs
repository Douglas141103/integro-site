const paths={mic:'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z M5 10v2a7 7 0 0 0 14 0v-2 M12 19v3 M8 22h8',camera:'M15 8l6-3v14l-6-3 M3 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',screen:'M3 3h18v13H3z M8 21h8 M12 16v5 M8 10l4-4 4 4 M12 6v7',call:'M3 4h5l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v5C10 23 1 14 3 4Z',board:'M3 3h18v14H3z M12 17v5 M6 22l6-5 6 5 M7 12l4-4 3 3 4-5',chat:'M3 3h18v14H8l-5 4z M7 7h10 M7 11h7',people:'M9 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z M3 21v-4a6 6 0 0 1 12 0v4 M17 3a3 3 0 0 1 0 6 M18 12a5 5 0 0 1 4 5v4',leave:'M9 3H3v18h6 M9 12h13 M17 7l5 5-5 5',expand:'M8 3H3v5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5',file:'M5 2h9l5 5v15H5z M14 2v6h5 M8 13h8 M8 17h8',settings:'M4 7h16 M4 17h16 M8 4v6 M16 14v6'};
export function icon(name){return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.settings}"/></svg>`;}
export function decorateRoom(root){root.querySelectorAll('[data-icon]').forEach(button=>{const badge=button.querySelector('b');badge?.remove();const label=button.textContent.trim();button.innerHTML=icon(button.dataset.icon)+`<span></span>`;button.querySelector('span').textContent=label;if(badge)button.append(badge);});}
export function mediaControls(root,participant,blocked=false){
 for(const [id,enabled,on,off] of [['mic',participant.isMicrophoneEnabled,'Microfone ligado','Ligar microfone'],['camera',participant.isCameraEnabled,'Câmera ligada','Ligar câmera'],['screen',participant.isScreenShareEnabled,'Parar tela','Compartilhar tela']]){
  const button=root.querySelector('#'+id);if(!button)continue;
  const label=id==='mic'&&blocked?'Mic. silenciado':enabled?on:off;
  button.innerHTML=icon(button.dataset.icon||id)+`<span></span>`;button.querySelector('span').textContent=label;
  button.setAttribute('aria-pressed',String(!!enabled));button.setAttribute('aria-label',id==='mic'&&blocked?'Microfone silenciado pelo professor':enabled?'Desligar '+(id==='mic'?'microfone':id==='camera'?'câmera':'compartilhamento de tela'):label);
  button.title=button.getAttribute('aria-label');button.dataset.active=String(!!enabled);button.classList.toggle('media-off',!enabled);
  if(id==='mic')button.disabled=blocked;
 }
}
export function mountParticipants(root,{getRoom,feedback,confirm=message=>window.confirm(message)}){
 const list=root.querySelector('#participants-list'),count=root.querySelector('#participant-count');
 let people=[],selfId='',disposed=false,lastRender='';
 const pending=new Set();
 function render(){
  if(disposed)return;
  const room=getRoom(),signature=JSON.stringify({people,selfId,teacher:room?.self.isTeacher,pending:[...pending]});
  if(signature===lastRender)return;lastRender=signature;
  count.textContent=String(people.length);list.replaceChildren();
  for(const person of [...people].sort((a,b)=>Number(b.isTeacher)-Number(a.isTeacher)||a.name.localeCompare(b.name))){
   const row=document.createElement('article');row.className='participant-row';row.dataset.member=person.id;
   const avatar=document.createElement('div');avatar.className='participant-avatar';avatar.textContent=person.name.trim().split(/\s+/).slice(0,2).map(p=>p[0]).join('').toUpperCase();
   const info=document.createElement('div');info.className='participant-info';const name=document.createElement('strong');name.textContent=person.name+(person.id===selfId?' (você)':'');
   const detail=document.createElement('small');detail.textContent=person.isTeacher?'Professor':person.micBlocked?'Silenciado pelo professor':'Aluno';info.append(name,detail);row.append(avatar,info);
   if(room?.self.isTeacher&&!person.isTeacher){
    const actions=document.createElement('div');actions.className='participant-actions';
    for(const [operation,label] of [[person.micBlocked?'release':'mute',person.micBlocked?'Liberar mic.':'Silenciar'],['remove','Retirar']]){
     const button=document.createElement('button');button.type='button';button.className=operation==='remove'?'remove-person':'secondary';button.dataset.operation=operation;button.textContent=label;button.disabled=pending.has(person.id);button.setAttribute('aria-label',`${label} ${person.name}`);actions.append(button);
    }
    row.append(actions);
   }
   list.append(row);
  }
 }
 async function onClick(event){
  const button=event.target.closest('[data-operation]');if(!button||button.disabled)return;
  const id=button.closest('[data-member]').dataset.member,person=people.find(p=>p.id===id),operation=button.dataset.operation,room=getRoom();
  if(!person||pending.has(id)||!room?.self.isTeacher)return;
  if(operation==='remove'&&!confirm(`Retirar ${person.name} da sala? O aluno poderá clicar em Entrar novamente. A matrícula será mantida.`))return;
  pending.add(id);render();
  try{await room.moderate(id,operation);if(!disposed)feedback(operation==='remove'?`${person.name} foi retirado da sala e pode entrar novamente.`:operation==='mute'?`${person.name}: microfone silenciado.`:`${person.name} já pode ligar o próprio microfone.`);}
  catch(error){if(!disposed)feedback(error.message||'Não foi possível aplicar o controle.',true);}
  finally{pending.delete(id);render();}
 }
 list.addEventListener('click',onClick);
 return {roster(next,id){people=next;selfId=id;render();},dispose(){disposed=true;list.removeEventListener('click',onClick);list.replaceChildren();count.textContent='0';}};
}
