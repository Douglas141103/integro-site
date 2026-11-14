// A per-profile, per-device control preference; it never changes earned training.
export const PACE_STORAGE_KEY='integro-box-egg-pace-v1';
export function createPaceControl({host,getGame,storage,blocked=()=>false,onChange=()=>{},canvas}){
 const doc=host.ownerDocument,root=doc.createElement('div');root.className='egg-pace';root.hidden=true;
 root.innerHTML='<span class="egg-pace-label">Ritmo <small data-pace-status>Normal</small></span><div class="egg-pace-buttons" role="group" aria-label="Reduzir velocidade de movimento">'+[1,2,5,10].map(n=>`<button type="button" data-pace="${n}" aria-pressed="${n===1}" aria-label="${n===1?'Velocidade normal':'Velocidade dividida por '+n}" title="${n===1?'Restaurar velocidade conquistada':'Mover '+n+' vezes mais devagar'}">${n===1?'1×':'−'+n+'×'}</button>`).join('')+'</div>';
 const choices=root.querySelector('.egg-pace-buttons');choices.id='eggPaceOptions';choices.hidden=true;
 const toggle=doc.createElement('button');toggle.type='button';toggle.className='egg-pace-toggle';toggle.setAttribute('aria-controls',choices.id);toggle.setAttribute('aria-expanded','false');root.prepend(toggle);
 const setOpen=open=>{choices.hidden=!open;toggle.setAttribute('aria-expanded',String(open));};toggle.onclick=()=>setOpen(choices.hidden);
 root.addEventListener('focusout',e=>{if(!root.contains(e.relatedTarget))setOpen(false);});
 doc.addEventListener('pointerdown',e=>{if(!root.contains(e.target))setOpen(false);});
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();setOpen(false);toggle.focus();}});
 host.prepend(root);let selected=1;try{const n=Number(storage.getItem(PACE_STORAGE_KEY));if([1,2,5,10].includes(n))selected=n;}catch{}
 const buttons=[...root.querySelectorAll('[data-pace]')],status=root.querySelector('[data-pace-status]');
 function update(){const g=getGame();g.paceDivisor=selected;const paused=g.raceMode||!!g.jetFlight||g.mode!=='run';root.hidden=g.save.training<80||paused;if(root.hidden||blocked())setOpen(false);toggle.disabled=blocked();toggle.textContent='Ritmo '+(selected===1?'1×':'÷'+selected);toggle.setAttribute('aria-label','Ritmo '+(selected===1?'normal':'dividido por '+selected)+'. Abrir opções de velocidade');status.textContent=paused?'Pausado':selected===1?'Normal':'÷'+selected;root.title=paused?'Redução pausada durante treino, voo e corrida online.':'Controle de movimento liberado no nível 80. Seu treino é preservado.';for(const b of buttons){b.disabled=root.hidden||paused||blocked();b.setAttribute('aria-pressed',String(+b.dataset.pace===selected));}}
 root.addEventListener('pointerdown',e=>e.stopPropagation());
 root.addEventListener('keydown',e=>{if([' ','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.stopPropagation();});
 for(const b of buttons)b.onclick=()=>{if(blocked()||!getGame().setPace(+b.dataset.pace))return;selected=+b.dataset.pace;try{storage.setItem(PACE_STORAGE_KEY,String(selected));}catch{}setOpen(false);update();onChange();canvas?.focus({preventScroll:true});};
 update();return{root,update};
}
