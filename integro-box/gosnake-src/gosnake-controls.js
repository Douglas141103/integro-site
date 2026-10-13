// Pointer motion becomes a world heading, never a stream of repeated quarter turns.
export function joystickVector(dx,dy,radius){const length=Math.hypot(dx,dy),scale=length>radius?radius/length:1;return{x:dx*scale/radius,y:dy*scale/radius,px:dx*scale,py:dy*scale}}
export function screenDirection(x,y,forwardX,forwardZ,previous=null){
 if(Math.hypot(x,y)<.2)return null;
 const length=Math.hypot(forwardX,forwardZ)||1,fx=forwardX/length,fz=forwardZ/length;
 const wx=-fz*x-fx*y,wz=fx*x-fz*y,scores=[-wz,wx,wz,-wx];
 let best=scores.indexOf(Math.max(...scores));
 if(previous!==null&&scores[previous]>0&&scores[best]-scores[previous]<.12)best=previous;
 return best;
}
export function bindSnakeJoystick(element,knob,{enabled,onDirection,onStart=()=>{},onEnd=()=>{}}){
 let pointerId=null;
 const move=e=>{const r=element.getBoundingClientRect(),v=joystickVector(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2,r.width*.3);knob.style.transform=`translate(${v.px}px,${v.py}px)`;onDirection(v.x,v.y)};
 function reset(){const id=pointerId;pointerId=null;knob.style.transform='translate(0px,0px)';element.classList.remove('active');if(id!==null){if(element.hasPointerCapture?.(id))element.releasePointerCapture(id);onEnd()}}
 element.addEventListener('pointerdown',e=>{if(!enabled()||pointerId!==null||e.button>0)return;e.preventDefault();pointerId=e.pointerId;element.setPointerCapture(pointerId);element.classList.add('active');onStart();move(e)});
 element.addEventListener('pointermove',e=>{if(e.pointerId!==pointerId)return;e.preventDefault();if(!enabled()){reset();return}move(e)});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(event,e=>{if(e.pointerId===pointerId)reset()});
 return{reset,get active(){return pointerId!==null}};
}
