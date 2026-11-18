import {inEgypt} from './egg-egypt.js';
import {SUBSOIL,inSubsoil,emergenceOffset} from './egg-subsoil.js';
import {inHeaven,heavenPosition,heavenFrame} from './egg-heaven.js';
import * as T from 'three';
import {createDepartureClock,createModelFade} from '../room-departure.mjs';
import {constrainToCorridor,WORLDS,ACCESSORIES,RARITIES,MUTATIONS} from './egg-rules.js';

import {roomEquipment,createRoomCosmetics} from '../room-cosmetics.mjs';
import {eggPremiumEquipment} from '../egg-intgem-catalog.mjs';

function carriedAppearance(state){
 const egg=state.carriedEgg;
 if(egg&&Number.isInteger(egg.world)&&WORLDS[egg.world]){
  return {world:egg.world,rarity:Object.hasOwn(RARITIES,egg.rarity)?egg.rarity:'common',mutation:Object.hasOwn(MUTATIONS,egg.mutation)?egg.mutation:'normal'};
 }
 // Older peers and virtual runners can report a return activity without
 // carrying metadata. They still get the correct two-handed running pose.
 if(state.activity==='return'||state.flameChase===true||state.rockChase===true)return {world:null,rarity:'common',mutation:'normal'};
 return null;
}

// Appearance comes from the authenticated room response, backed by saved ownership.
export function installEggPeerVisuals(adapter,getWorld,{reducedMotion=false}={}){
 if(!adapter)return;
 const peers=new Map(),colors=[0x80d9ac,0xffce78,0xbba5ff,0x79dbea],target=new T.Vector3();
 function dispose(entry){entry.fade.clear();entry.cosmetics.dispose();entry.buddy?.dispose();if(entry.drop)getWorld()?.root.remove(entry.drop);entry.label.material.map.dispose();entry.label.material.dispose();entry.actor.dispose();entry.frame.removeFromParent();}
 adapter.setPeers=(players=[])=>{
  const world=getWorld(),scene=adapter.scene();if(!world||!scene)return;const ids=new Set();
  for(const peer of players.slice(0,4)){
   const s=peer.state;if(!Number.isInteger(peer.slot)||peer.slot<1||peer.slot>4||!s||!['x','y','z','yaw'].every(k=>Number.isFinite(s[k])))continue;
   const state=constrainToCorridor({...s});state.y=T.MathUtils.clamp(state.y,0,inEgypt(state)?60:8);ids.add(peer.slot);
   let entry=peers.get(peer.slot);const identity=(peer.identity||'human')+':'+(peer.name||'');if(entry&&entry.identity!==identity){dispose(entry);peers.delete(peer.slot);entry=null;}if(!entry){const frame=world.group(scene);frame.name='PeerGravityFrame';heavenFrame(frame,inHeaven(state));const actor=world.hero(frame,colors[peer.slot-1]),label=world.label(actor.g,peer.automated?(peer.name+' · virtual'):'Explorador '+peer.slot,0,2.3,0,2.2);actor.g.position.set(state.x,state.y,state.z);actor.g.rotation.y=state.yaw;entry={frame,actor,label,state,identity,departure:createDepartureClock(),fade:createModelFade(),cosmetics:createRoomCosmetics(T,actor.g,'egg')};peers.set(peer.slot,entry);}if(inEgypt(entry.state)!==inEgypt(state)||inSubsoil(entry.state)!==inSubsoil(state)||inHeaven(entry.state)!==inHeaven(state)){entry.actor.g.position.set(state.x,state.y,state.z);if(inSubsoil(entry.state)&&!inSubsoil(state))entry.emerging=SUBSOIL.emergeSeconds;}entry.state=state;entry.departure.set(state.departure);
   const carried=carriedAppearance(state),carryKey=carried?JSON.stringify(carried):'';
   if(entry.carryKey!==carryKey){
    entry.actor.carry.clear();entry.carried=carried;entry.carryKey=carryKey;
    if(carried){
     const color=WORLDS[carried.world]?.color??0x35bebd;
     const egg=world.egg(entry.actor.carry,color,.65,carried.rarity);world.mutate(egg,carried.mutation);
    }
   }
   const appearance=state.appearance||{},native={};
   for(const slot of ['head','face','back']){const id=appearance.accessories?.[slot];if(ACCESSORIES[id]?.slot===slot)native[slot]=id;}
   const wear=eggPremiumEquipment(native,roomEquipment(appearance,'egg')),signature=JSON.stringify(wear);
   if(signature!==entry.wearKey){world.equipAccessories(entry.actor,wear);entry.wearKey=signature;}
   entry.cosmetics.update(appearance,entry.actor.elapsed,reducedMotion);
   const pet=appearance.companion,validPet=pet&&Number.isInteger(pet.world)&&WORLDS[pet.world]&&RARITIES[pet.rarity]&&MUTATIONS[pet.mutation],petKey=validPet?JSON.stringify([pet.world,pet.rarity,pet.mutation]):'';
   if(petKey!==entry.petKey){entry.buddy?.dispose();entry.buddy=null;entry.petKey=petKey;if(validPet){entry.buddy=world.creature(entry.frame,WORLDS[pet.world].kind,WORLDS[pet.world].color,.7,pet.rarity);world.mutate(entry.buddy.g,pet.mutation);entry.buddy.g.position.set(state.x+1,0,state.z+1.1);}}
   const d=state.droppedEgg,key=d?JSON.stringify(d):'';if(entry.dropKey!==key){if(entry.drop)world.root.remove(entry.drop);entry.drop=null;entry.dropKey=key;if(d&&WORLDS[d.world]){entry.drop=world.egg(world.root,WORLDS[d.world].color,.7,d.rarity);world.mutate(entry.drop,d.mutation);const pos=heavenPosition({...d,y:(d.y||0)+.12});entry.drop.position.set(pos.x,pos.y,pos.z);entry.drop.rotation.z=inHeaven(d)?Math.PI:0;}}
  }
  for(const[slot,entry]of peers)if(!ids.has(slot)){dispose(entry);peers.delete(slot);}
 };
 adapter.clearPeers=()=>{for(const entry of peers.values())dispose(entry);peers.clear();};
 adapter.presentArtwork=(camera,options={})=>{
  for(const entry of peers.values())if(entry.actor.g.visible){
   entry.actor.presentArtwork(camera,{...options,carrying:!!entry.carried,egg:entry.carried});
  }
 };
 adapter.tickFade=()=>{for(const entry of peers.values())entry.fade.apply([entry.actor.g,entry.buddy?.g],entry.departure.opacity());};
 adapter.tick=dt=>{
  const local=adapter.state();if(!local||!dt)return;
  for(const entry of peers.values()){
   const {actor,state:s}=entry,g=actor.g,beforeY=g.position.y;heavenFrame(entry.frame,inHeaven(s));g.visible=s.zone===local.zone&&inEgypt(s)===inEgypt(local)&&inHeaven(s)===inHeaven(local)&&inSubsoil(s)===inSubsoil(local);entry.emerging=Math.max(0,(entry.emerging||0)-dt);if(!inHeaven(s)&&!reducedMotion)entry.frame.position.y=emergenceOffset(entry.emerging);
   const beforeX=g.position.x,beforeZ=g.position.z;g.position.lerp(target.set(s.x,s.y,s.z),1-Math.exp(-dt*8));constrainToCorridor(g.position);
   g.rotation.y+=Math.atan2(Math.sin(s.yaw-g.rotation.y),Math.cos(s.yaw-g.rotation.y))*(1-Math.exp(-dt*10));
   const speed=Math.hypot(g.position.x-beforeX,g.position.z-beforeZ)/dt;
   const training=s.activity==='train'&&Math.hypot(s.x-5,s.z-14)<.6;
   actor.update(dt,{training,carrying:!!entry.carried,player:{...g.position,vy:(g.position.y-beforeY)/dt},moving:training||speed>.12?1:0,speed:training?10:speed,vehicle:training?'':s.vehicle,flying:s.jetpack===true,reducedMotion});
   entry.cosmetics.update(s.appearance,actor.elapsed,reducedMotion);
   if(entry.buddy){entry.buddy.g.visible=g.visible;entry.buddy.g.position.lerp(target.set(g.position.x+1,g.position.y,g.position.z+1.1),Math.min(1,dt*5));entry.buddy.g.rotation.y=g.rotation.y;getWorld().animateCreature(entry.buddy,actor.elapsed,speed>.12?1:0,dt,speed,reducedMotion);}
   if(s.gesture==='wave'||s.gesture==='cheer'){const b=actor.model.bones;b.shoulderR.rotation.z=-2.2+Math.sin(actor.elapsed*9)*.2;b.elbowR.rotation.x=.3;}
  }
 };
}
