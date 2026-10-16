// Each finger owns its control. Jump starts on contact, without waiting for click.
export function bindJumpControl(button,{blocked,jump,focus}){
 const pointers=new Set();
 button.addEventListener('pointerdown',e=>{
  if(blocked()||(e.pointerType==='mouse'&&e.button!==0)||pointers.size)return;
  e.preventDefault();e.stopPropagation();pointers.add(e.pointerId);
  button.setPointerCapture?.(e.pointerId);button.classList.add('held');jump();focus();
 });
 const release=e=>{pointers.delete(e.pointerId);if(!pointers.size)button.classList.remove('held');};
 for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);
 button.addEventListener('contextmenu',e=>e.preventDefault());
 button.addEventListener('click',e=>{if(e.detail===0&&!blocked()){jump();focus();}});
 return()=>{for(const id of pointers){if(button.hasPointerCapture?.(id))button.releasePointerCapture(id);}pointers.clear();button.classList.remove('held');};
}
