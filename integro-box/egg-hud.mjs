// On narrow portrait screens, keep social controls inside a reserved HUD row.
// Reparent existing controls so their handlers, unread badges and state survive.
export function mountEggHud({doc=document,win=window}={}){
 const stage=doc.getElementById('eggStage'),app=doc.getElementById('eggApp');if(!stage||!app)return {stop(){}};
 const row=doc.createElement('div');row.className='egg-mobile-tools';row.setAttribute('aria-label','Carteira, sala e chat');stage.append(row);
 const media=win.matchMedia('(max-width:600px) and (orientation:portrait)'),moved=new Map();
 function active(){return media.matches&&!app.hidden;}
 function move(node,parent){if(!node||!parent)return;if(!moved.has(node))moved.set(node,{parent:node.parentNode,next:node.nextSibling});if(node.parentNode!==parent)parent.append(node);}
 function restore(){for(const[node,old]of moved){if(!node.isConnected)continue;if(old.parent?.isConnected)old.parent.insertBefore(node,old.next?.parentNode===old.parent?old.next:null);}moved.clear();}
 function sync(){
  doc.body.classList.toggle('egg-mobile-layout',active());row.hidden=!active();stage.classList.toggle('egg-mobile-hud',active());
  if(!active()){restore();return;}
  move(app.querySelector('.ig-dock'),row);move(doc.getElementById('boxOnline'),row);move(doc.getElementById('boxChat'),row);
  move(doc.getElementById('eggTrapOpen'),stage.querySelector('.egg-ability-dock'));
 }
 const timer=win.setInterval(sync,300);media.addEventListener('change',sync);doc.addEventListener('fullscreenchange',sync);sync();
 return {host:()=>active()?row:null,stop(){win.clearInterval(timer);media.removeEventListener('change',sync);doc.removeEventListener('fullscreenchange',sync);restore();row.remove();stage.classList.remove('egg-mobile-hud');doc.body.classList.remove('egg-mobile-layout');}};
}
