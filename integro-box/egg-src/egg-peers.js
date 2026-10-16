import * as T from 'three';
import {constrainToCorridor} from './egg-rules.js';

// Keep the existing room protocol; only Egg's peer presentation changes.
export function installEggPeerVisuals(adapter,getWorld,{reducedMotion=false}={}){
 if(!adapter)return;
 const peers=new Map(),colors=[0x80d9ac,0xffce78,0xbba5ff,0x79dbea],target=new T.Vector3();
 function dispose(entry){entry.label.material.map.dispose();entry.label.material.dispose();entry.actor.dispose();}
 adapter.setPeers=(players=[])=>{
  const world=getWorld(),scene=adapter.scene();if(!world||!scene)return;const ids=new Set();
  for(const peer of players.slice(0,4)){
   const s=peer.state;if(!Number.isInteger(peer.slot)||peer.slot<1||peer.slot>4||!s||!['x','y','z','yaw'].every(k=>Number.isFinite(s[k])))continue;
   const state=constrainToCorridor({...s});state.y=T.MathUtils.clamp(state.y,0,8);ids.add(peer.slot);
   let entry=peers.get(peer.slot);if(!entry){const actor=world.hero(scene,colors[peer.slot-1]),label=world.label(actor.g,'Explorador '+peer.slot,0,2.3,0,2.2);actor.g.position.set(state.x,state.y,state.z);actor.g.rotation.y=state.yaw;entry={actor,label,state};peers.set(peer.slot,entry);}entry.state=state;
  }
  for(const[slot,entry]of peers)if(!ids.has(slot)){dispose(entry);peers.delete(slot);}
 };
 adapter.clearPeers=()=>{for(const entry of peers.values())dispose(entry);peers.clear();};
 adapter.tick=dt=>{
  const local=adapter.state();if(!local||!dt)return;
  for(const entry of peers.values()){
   const {actor,state:s}=entry,g=actor.g,beforeY=g.position.y;g.visible=s.zone===local.zone;
   const beforeX=g.position.x,beforeZ=g.position.z;g.position.lerp(target.set(s.x,s.y,s.z),1-Math.exp(-dt*8));constrainToCorridor(g.position);
   g.rotation.y+=Math.atan2(Math.sin(s.yaw-g.rotation.y),Math.cos(s.yaw-g.rotation.y))*(1-Math.exp(-dt*10));
   const speed=Math.hypot(g.position.x-beforeX,g.position.z-beforeZ)/dt;
   actor.update(dt,{player:{...g.position,vy:(g.position.y-beforeY)/dt},moving:speed>.12?1:0,speed,vehicle:s.vehicle,reducedMotion});
   if(s.gesture==='wave'||s.gesture==='cheer'){const b=actor.model.bones;b.shoulderR.rotation.z=-2.2+Math.sin(actor.elapsed*9)*.2;b.elbowR.rotation.x=.3;}
  }
 };
}
