import {ITEMS} from './intgem-catalog.mjs';
import {createIntGem3D} from './intgem-3d.mjs';
const byId=new Map(ITEMS.map(item=>[item.id,item]));
// Use local models only. Network data can select IDs, never URLs, colors or geometry.
export function roomEquipment(appearance,game){
 const equipped={};
 for(const slot of ['head','face','back','aura','companion']){
  const item=byId.get(appearance?.premium?.[slot]);
  if(item?.game===game&&item.kind===slot)equipped[slot]=item;
 }
 return equipped;
}
export function createRoomCosmetics(T,parent,game){
 const visuals=createIntGem3D(T,parent);
 return {root:visuals.root,update(appearance,time=0,reducedMotion=false){visuals.update(roomEquipment(appearance,game),time,reducedMotion);},dispose:()=>visuals.dispose()};
}
