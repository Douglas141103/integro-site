// Tools preserve all media connections and keep the call controls available.
export function mountRoomPanels(roomElement){
 const nav=roomElement.querySelector('#room-shortcuts'),tools=roomElement.querySelector('#collaboration');
 const videos=roomElement.querySelector('#videos'),stage=roomElement.querySelector('#room-stage'),people=roomElement.querySelector('#participants-panel');
 const board=tools.querySelector('.board-panel'),chat=tools.querySelector('.chat-panel');
 const buttons=[...nav.querySelectorAll('[data-room-panel]')];
 function show(panel,focus=false){
  if(!['call','board','chat','people'].includes(panel))return;
  tools.hidden=!['board','chat'].includes(panel);videos.hidden=false;people.hidden=panel!=='people';
  board.hidden=panel!=='board';chat.hidden=panel!=='chat';stage.dataset.panel=panel;
  tools.classList.add('single-tool');
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.roomPanel===panel)));
  if(focus){const target=roomElement.querySelector(panel==='call'?'#room-title':panel==='people'?'#participants-title':panel==='board'?'#board-title':'#chat-title');target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
 }
 const onClick=event=>{const button=event.target.closest('[data-room-panel]');if(button&&nav.contains(button))show(button.dataset.roomPanel,true);};
 nav.hidden=false;nav.addEventListener('click',onClick);show('call');
 return ()=>{nav.removeEventListener('click',onClick);nav.hidden=true;videos.hidden=false;board.hidden=false;chat.hidden=false;people.hidden=true;stage.dataset.panel='call';tools.classList.remove('single-tool');};
}
