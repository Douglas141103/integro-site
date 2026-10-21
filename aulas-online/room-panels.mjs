// Opening a tool never disconnects the call or changes permission to draw.
export function mountRoomPanels(roomElement){
 const nav=roomElement.querySelector('#room-shortcuts');
 const tools=roomElement.querySelector('#collaboration');
 const videos=roomElement.querySelector('#videos');
 const board=tools.querySelector('.board-panel'),chat=tools.querySelector('.chat-panel');
 const buttons=[...nav.querySelectorAll('[data-room-panel]')];
 function show(panel,focus=false){
  tools.hidden=panel==='call';videos.hidden=panel!=='call';
  board.hidden=panel!=='board';chat.hidden=panel!=='chat';
  tools.classList.add('single-tool');
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.roomPanel===panel)));
  if(focus){
   const target=panel==='call'?roomElement.querySelector('#room-title'):tools.querySelector(panel==='board'?'#board-title':'#chat-title');
   target.setAttribute('tabindex','-1');target.focus({preventScroll:true});nav.scrollIntoView({behavior:'smooth',block:'start'});
  }
 }
 const onClick=event=>{const button=event.target.closest('[data-room-panel]');if(button&&nav.contains(button))show(button.dataset.roomPanel,true);};
 nav.hidden=false;nav.addEventListener('click',onClick);show('call');
 return ()=>{nav.removeEventListener('click',onClick);nav.hidden=true;videos.hidden=false;board.hidden=false;chat.hidden=false;tools.classList.remove('single-tool');};
}
