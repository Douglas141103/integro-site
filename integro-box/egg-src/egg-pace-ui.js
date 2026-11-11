// A per-profile, per-device control preference; it never changes earned training.
export const PACE_STORAGE_KEY='integro-box-egg-pace-v1';
export function createPaceControl({host,getGame,storage,blocked=()=>false,onChange=()=>{},canvas}){
 const doc=host.ownerDocument,root=doc.createElement('div');root.className='egg-pace';root.hidden=true;
 root.innerHTML='<span class="egg-pace-label">Ritmo <small data-pace-status>Normal</small></span><div class="egg-pace-buttons" role="group" aria-label="Reduzir velocidade de movimento">'+[1,2,5,10].map(n=>`<button type="button" data-pace="${n}" aria-pressed="${n===1}" aria-label="${n===1?'Velocidade normal':'Velocidade dividida por '+n}" title="${n===1?'Restaurar velocidade conquistada':'Mover '+n+' vezes mais devagar'}">${n===1?'1×':'−'+n+'×'}</button>`).join('')+'</div>';
 host.prepend(root);let selected=1;try{const n=Number(storage.getItem(PACE_STORAGE_KEY));if([1,2,5,10].includes(n))selected=n;}catch{}
 const buttons=[...root.querySelectorAll('[data-pace]')],status=root.querySelector('[data-pace-status]');
 function update(){const g=getGame();g.paceDivisor=selected;root.hidden=g.save.training<80;const paused=g.raceMode||!!g.jetFlight||g.mode!=='run';status.textContent=paused?'Pausado':selected===1?'Normal':'÷'+selected;root.title=paused?'Redução pausada durante treino, voo e corrida online.':'Controle de movimento liberado no nível 80. Seu treino é preservado.';for(const b of buttons){b.disabled=root.hidden||paused||blocked();b.setAttribute('aria-pressed',String(+b.dataset.pace===selected));}}
 root.addEventListener('pointerdown',e=>e.stopPropagation());
 root.addEventListener('keydown',e=>{if([' ','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.stopPropagation();});
 for(const b of buttons)b.onclick=()=>{if(blocked()||!getGame().setPace(+b.dataset.pace))return;selected=+b.dataset.pace;try{storage.setItem(PACE_STORAGE_KEY,String(selected));}catch{}update();onChange();canvas?.focus({preventScroll:true});};
 update();return{root,update};
}
