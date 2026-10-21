import * as T from 'three';
export const MAX_ZOOM=3, FIRST_PERSON_ZOOM=.08;
export const clampZoom=value=>Number.isFinite(value)?T.MathUtils.clamp(value,0,MAX_ZOOM):1;
export function sharkCameraPose(position,yaw,pitch,zoom,length){
 const firstPerson=zoom<=FIRST_PERSON_ZOOM;
 if(firstPerson){
  const eye=position.clone().add(new T.Vector3(-Math.sin(yaw)*length*.44,length*.10,-Math.cos(yaw)*length*.44));
  const direction=new T.Vector3(-Math.sin(yaw)*Math.cos(pitch),-Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch));
  return{eye,target:eye.clone().addScaledVector(direction,30),firstPerson};
 }
 const target=position.clone().add(new T.Vector3(0,length*.12,0));
 const distance=length*.65+(8+length*2)*zoom;
 const orbitPitch=T.MathUtils.clamp(pitch,.12,1.08);
 const eye=target.clone().add(new T.Vector3(Math.sin(yaw)*Math.cos(orbitPitch),Math.sin(orbitPitch),Math.cos(yaw)*Math.cos(orbitPitch)).multiplyScalar(distance));eye.y=Math.max(5,eye.y);
 return{eye,target,firstPerson};
}
// Pinch state is independent of joystick/action fingers; only canvas touches count.
export function bindSharkCamera(canvas,{enabled,getScene,onChange}){
 const points=new Map();let span=0;
 const distance=()=>{const [a,b]=[...points.values()];return Math.hypot(a.x-b.x,a.y-b.y);};
 const clear=()=>{points.clear();span=0;};
 const zoomBy=delta=>{if(!enabled())return;const s=getScene();if(!s)return;s.setZoom(s.zoom+delta);onChange();};
 canvas.addEventListener('pointerdown',e=>{if(!enabled()||!getScene()||(e.pointerType==='mouse'&&e.button!==0))return;e.preventDefault();points.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);if(points.size===2)span=distance();});
 canvas.addEventListener('pointermove',e=>{const old=points.get(e.pointerId);if(!old)return;if(!enabled()){clear();return;}points.set(e.pointerId,{x:e.clientX,y:e.clientY});if(points.size===2){const next=distance();if(span)zoomBy((span-next)*.008);span=next;}else if(points.size===1){getScene()?.moveCamera(e.clientX-old.x,e.clientY-old.y);}});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{points.delete(e.pointerId);span=points.size===2?distance():0;});
 canvas.addEventListener('wheel',e=>{if(!enabled()||!getScene())return;e.preventDefault();zoomBy(e.deltaY*(e.deltaMode===1?.025:e.deltaMode===2?.8:.0015));},{passive:false});
 return{clear,zoomBy};
}
