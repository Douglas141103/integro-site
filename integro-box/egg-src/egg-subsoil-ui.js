import {SUBSOIL,SUBSOIL_ESCAPE,subsoilEscapeView} from './egg-subsoil.js';
export function subsoilCinematic(game){
 const e=game.subsoilEscape;if(!e)return null;
 let focus;
 if(e.phase==='sink')focus={x:0,z:(SUBSOIL.nest.z+SUBSOIL.finish.z)/2};
 else if(e.phase==='reveal')focus=e.elapsed<.8?e.door:e.spawn;
 else return null;
 return{position:{x:focus.x+(e.phase==='reveal'?7:10),y:9,z:focus.z+14},target:{x:focus.x,y:1,z:focus.z}};
}
export function createSubsoilCue(host){
 const node=host.ownerDocument.createElement('div');node.className='egg-subsoil-cue';node.hidden=true;node.setAttribute('role','status');node.setAttribute('aria-live','polite');node.setAttribute('aria-atomic','true');
 const title=host.ownerDocument.createElement('strong'),caption=host.ownerDocument.createElement('small');node.append(title,caption);host.append(node);
 return{node,update(game){const e=game.subsoilEscape,v=subsoilEscapeView(e);node.hidden=!v||!game.inSubsoil()||e.phase==='return'||e.phase==='chase'&&e.elapsed>1;node.classList.toggle('countdown',!!v?.countdown);if(node.hidden)return;
  const text=v.countdown?String(v.countdown):e.phase==='sink'?'A porta desapareceu!':e.phase==='reveal'?(e.elapsed<.8?'A saída mudou de lugar!':'O guardião voltou!'):'CORRA!';
  const detail=v.countdown?'Prepare-se para fugir até a porta':e.phase==='sink'?'O guardião está afundando no chão':e.phase==='reveal'?'A porta está na lateral '+(e.door.x<0?'esquerda':'direita'):'Leve o ovo até a saída lateral';
  if(title.textContent!==text)title.textContent=text;if(caption.textContent!==detail)caption.textContent=detail;
 }};
}
