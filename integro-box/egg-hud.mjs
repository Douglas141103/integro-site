// Keep existing handlers: compact screens use a collapsible tray; desktop retains drag positions.
export function mountEggHud({doc=document,win=window}={}){
 const stage=doc.getElementById('eggStage'),app=doc.getElementById('eggApp');if(!stage||!app)return {stop(){}};
 const row=doc.createElement('div');row.className='egg-mobile-tools';row.setAttribute('aria-label','Carteira, sala e chat');stage.append(row);
 const media=win.matchMedia('(max-width:900px), (max-height:540px)'),moved=new Map(),positions=new Map();
 const storageKey='integro-egg-hud-positions-v1';let drag=null,suppressed=null;
 try{const saved=JSON.parse(win.localStorage.getItem(storageKey));for(const key of ['gems','rooms','chat'])if(Number.isFinite(saved?.[key]?.x)&&Number.isFinite(saved?.[key]?.y))positions.set(key,saved[key]);}catch{}
 const specs=[['gems','.ig-dock','.ig-wallet-button'],['rooms','#boxOnline','#boxOnlineToggle'],['chat','#boxChat','#boxChatToggle']];
 const tray=doc.createElement('section');tray.id='eggQuickTray';tray.className='egg-quick-tray';tray.hidden=true;tray.setAttribute('aria-label','Poderes e atalhos');
 const heading=doc.createElement('div');heading.className='egg-quick-heading';heading.textContent='Poderes e atalhos';tray.append(heading);stage.append(tray);
 const toggle=doc.createElement('button');toggle.type='button';toggle.id='eggQuickToggle';toggle.className='egg-icon-button egg-quick-toggle';toggle.innerHTML='<span aria-hidden="true">•••</span><small>Mais</small><i hidden aria-hidden="true"></i>';toggle.setAttribute('aria-label','Mais: poderes, carteira, chat, salas e ranking');toggle.setAttribute('aria-controls',tray.id);toggle.setAttribute('aria-expanded','false');stage.append(toggle);
 let opened=false,wasCompact=false;
 function setOpen(value,focus=false){opened=!!value;tray.hidden=!opened;toggle.setAttribute('aria-expanded',String(opened));if(!opened){for(const [panelId,buttonId] of [['boxChatPanel','boxChatToggle'],['boxOnlinePanel','boxOnlineToggle']]){const panel=tray.querySelector('#'+panelId);if(panel)panel.hidden=true;tray.querySelector('#'+buttonId)?.setAttribute('aria-expanded','false');}if(focus)toggle.focus();}}
 toggle.onclick=()=>setOpen(!opened);
 function dismiss(e){if(!opened)return;if(e.type==='keydown'){if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();setOpen(false,true);}return;}if(!tray.contains(e.target)&&!toggle.contains(e.target))setOpen(false);}
 stage.addEventListener('pointerdown',dismiss,true);doc.addEventListener('keydown',dismiss,true);
 const active=()=>!app.hidden;
 const compact=()=>active()&&media.matches;
 const clamp=(n,max)=>Math.max(8,Math.min(n,Math.max(8,max)));
 function move(node,parent){if(!node||!parent)return;if(!moved.has(node))moved.set(node,{parent:node.parentNode,next:node.nextSibling});if(node.parentNode!==parent)parent.append(node);}
 function restore(){endDrag();for(const[node,old]of moved){if(!node.isConnected)continue;if(old.parent?.isConnected)old.parent.insertBefore(node,old.next?.parentNode===old.parent?old.next:null);}moved.clear();}
 function controls(){return specs.flatMap(([key,selector,handleSelector])=>{const root=row.querySelector(selector),handle=root?.querySelector(handleSelector);return handle?[{key,root,handle}]:[];});}
 function bounds(tool){const r=stage.getBoundingClientRect(),b=tool.handle.getBoundingClientRect();return {width:r.width,height:r.height,w:b.width,h:b.height};}
 function place(tool,x,y){const b=bounds(tool);x=clamp(x,b.width-b.w-8);y=clamp(y,b.height-b.h-8);tool.root.style.setProperty('--egg-tool-x',x+'px');tool.root.style.setProperty('--egg-tool-y',y+'px');return {x,y};}
 function layout(){
  if(!active()||compact())return;
  const list=controls(),width=stage.getBoundingClientRect().width;row.style.setProperty('--egg-panel-max-height',Math.max(100,stage.getBoundingClientRect().height-16)+'px');
  for(const tool of list){const b=bounds(tool),saved=positions.get(tool.key);const fallbackX=tool.key==='gems'?10:tool.key==='chat'?width-b.w-10:width-b.w-(list.find(t=>t.key==='chat')?.handle.getBoundingClientRect().width||66)-16;
   const p=place(tool,saved?saved.x*b.width:fallbackX,saved?saved.y*b.height:102);
   const panel=tool.root.querySelector('#boxOnlinePanel,#boxChatPanel');if(!panel||panel.hidden)continue;
   const size=panel.getBoundingClientRect(),left=clamp(p.x+b.w-size.width,b.width-size.width-8),below=p.y+b.h+6;
   const top=clamp(below+size.height<=b.height-8?below:p.y-size.height-6,b.height-size.height-8);
   tool.root.style.setProperty('--egg-panel-x',(left-p.x)+'px');tool.root.style.setProperty('--egg-panel-y',(top-p.y)+'px');
  }
 }
 function remember(tool,p){const b=bounds(tool);positions.set(tool.key,{x:p.x/Math.max(1,b.width),y:p.y/Math.max(1,b.height)});try{win.localStorage.setItem(storageKey,JSON.stringify(Object.fromEntries(positions)));}catch{}}
 function startDrag(e){
  if(!active()||drag||e.button!==0)return;
  const tool=controls().find(t=>t.handle.contains(e.target));if(!tool)return;
  if(compact()){e.stopImmediatePropagation();return;}
  e.stopImmediatePropagation();suppressed=null;
  const r=tool.root.getBoundingClientRect(),s=stage.getBoundingClientRect();drag={tool,id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left-s.left,top:r.top-s.top,moved:false};
  try{tool.handle.setPointerCapture(e.pointerId);}catch{}
 }
 function dragMove(e){
  if(!drag||drag.id!==e.pointerId)return;e.stopImmediatePropagation();
  const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved&&Math.hypot(dx,dy)<6)return;
  drag.moved=true;e.preventDefault();drag.tool.root.dataset.eggDragging='true';
  remember(drag.tool,place(drag.tool,drag.left+dx,drag.top+dy));layout();
 }
 function endDrag(e){
  if(!drag||(e&&e.pointerId!==drag.id))return;
  if(e){if(e.type==='pointerup')dragMove(e);e.stopImmediatePropagation();}
  if(drag.moved)suppressed={handle:drag.tool.handle,until:Date.now()+600};
  try{drag.tool.handle.releasePointerCapture(drag.id);}catch{}delete drag.tool.root.dataset.eggDragging;drag=null;
 }
 function click(e){if(suppressed&&Date.now()<suppressed.until&&suppressed.handle.contains(e.target)){suppressed=null;e.preventDefault();e.stopImmediatePropagation();return;}win.requestAnimationFrame?.(layout);}
 function keydown(e){if(compact())return;if(!e.altKey||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;const tool=controls().find(t=>t.handle.contains(e.target));if(!tool)return;e.preventDefault();e.stopImmediatePropagation();const r=tool.root.getBoundingClientRect(),s=stage.getBoundingClientRect();remember(tool,place(tool,r.left-s.left+(e.key==='ArrowRight'?20:e.key==='ArrowLeft'?-20:0),r.top-s.top+(e.key==='ArrowDown'?20:e.key==='ArrowUp'?-20:0)));layout();}
 function sync(){
  const small=compact();if(small!==wasCompact){setOpen(false);restore();wasCompact=small;}
  doc.body.classList.toggle('egg-mobile-layout',small);row.hidden=!active();stage.classList.toggle('egg-mobile-hud',small);stage.classList.toggle('egg-compact-hud',small);stage.classList.toggle('egg-draggable-hud',active()&&!small);toggle.hidden=!small;
  if(!active()){setOpen(false);restore();return;}
  if(small){move(row,tray);move(stage.querySelector('.egg-ability-dock'),tray);move(doc.getElementById('eggRanking'),tray);if(!doc.getElementById('eggSheet')?.hidden&&doc.getElementById('eggSheet'))setOpen(false);}
  const unread=doc.getElementById('boxChatUnread');toggle.querySelector('i').hidden=!unread||unread.hidden;toggle.setAttribute('aria-label','Mais: poderes, carteira, chat, salas e ranking'+(unread&&!unread.hidden?' · novas mensagens':''));
  move(app.querySelector('.ig-dock'),row);move(doc.getElementById('boxOnline'),row);move(doc.getElementById('boxChat'),row);
  const trap=doc.getElementById('eggTrapOpen');if(compact())move(trap,stage.querySelector('.egg-ability-dock'));else if(moved.has(trap)){const old=moved.get(trap);old.parent?.insertBefore(trap,old.next?.parentNode===old.parent?old.next:null);moved.delete(trap);}
  layout();
 }
 row.addEventListener('pointerdown',startDrag,true);row.addEventListener('click',click,true);row.addEventListener('keydown',keydown,true);
 win.addEventListener('pointermove',dragMove,{capture:true,passive:false});win.addEventListener('pointerup',endDrag,true);win.addEventListener('pointercancel',endDrag,true);win.addEventListener('resize',sync);
 const timer=win.setInterval(sync,300);media.addEventListener('change',sync);doc.addEventListener('fullscreenchange',sync);sync();
 return {host:()=>active()?row:null,stop(){stage.removeEventListener('pointerdown',dismiss,true);doc.removeEventListener('keydown',dismiss,true);setOpen(false);win.clearInterval(timer);media.removeEventListener('change',sync);doc.removeEventListener('fullscreenchange',sync);win.removeEventListener('resize',sync);win.removeEventListener('pointermove',dragMove,true);win.removeEventListener('pointerup',endDrag,true);win.removeEventListener('pointercancel',endDrag,true);restore();row.remove();tray.remove();toggle.remove();stage.classList.remove('egg-mobile-hud','egg-draggable-hud','egg-compact-hud');doc.body.classList.remove('egg-mobile-layout');}};
}
