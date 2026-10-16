import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createEggWorld} from '../integro-box/egg-src/egg-world.js';
import {WORLDS,ACCESSORIES,VEHICLES} from '../integro-box/egg-src/egg-rules.js';
import {installEggPeerVisuals} from '../integro-box/egg-src/egg-peers.js';
globalThis.document={createElement:()=>({getContext:()=>new Proxy({},{get:(o,k)=>o[k]||(()=>{})})})};
const scene=new T.Scene(),world=createEggWorld(scene),position=b=>b.getWorldPosition(new T.Vector3());
function geometryBounds(g){g.updateMatrixWorld(true);const bounds=new T.Box3(),v=new T.Vector3();g.traverse(m=>{if(!m.isMesh||m.userData.contour)return;for(let i=0;i<m.geometry.attributes.position.count;i++){m.getVertexPosition(i,v);v.applyMatrix4(m.matrixWorld);assert(v.toArray().every(Number.isFinite));bounds.expandByPoint(v);}});return bounds;}

test('all species have normalized skinned joints, toon shading and bounded draw calls',()=>{
 let sharedMaterial;for(const w of WORLDS){const c=world.creature(scene,w.kind,w.color);try{
  c.g.position.set(2,0,-620);c.g.rotation.y=1.2;c.g.scale.setScalar(1.65);let draws=0,weighted=0;
  c.g.traverse(m=>{if(!m.isMesh)return;draws++;if(m.userData.contour)return;assert(m.material.isMeshToonMaterial);sharedMaterial||=m.material;assert.equal(m.material,sharedMaterial);if(m.isSkinnedMesh){weighted++;const a=m.geometry.attributes.skinWeight;for(let i=0;i<a.count;i++)assert(Math.abs(a.getX(i)+a.getY(i)+a.getZ(i)+a.getW(i)-1)<1e-5);}});
  assert(weighted>=3);assert(draws<=(w.kind==='scorpion'?34:24));assert(c.animator.skeleton.bones.length>=11);
  for(let i=0;i<90;i++)c.animator.update(1/60,1,30);
  const box=geometryBounds(c.g),size=box.getSize(new T.Vector3());assert(size.x<5&&size.y<4&&size.z<5,w.kind+' cannot explode when rotated/translated');assert(box.min.y>-.15,w.kind+' body cannot clip through the path');
 }finally{c.dispose();}}
});

test('species gait changes legs and loose parts; paused animation remains frozen',()=>{
 for(const w of WORLDS){const c=world.creature(scene,w.kind,w.color),a=c.animator;try{
  let maxMotion=0;for(let i=0;i<100;i++){const before=position(a.legs[0].foot);a.update(1/60,1,25);maxMotion=Math.max(maxMotion,position(a.legs[0].foot).distanceTo(before));for(const leg of a.legs){assert(Math.abs(leg.knee.quaternion.length()-1)<1e-6);assert(position(leg.foot).y>0);}}
  assert(maxMotion>.005,w.kind+' has an articulated gait');const pose=a.skeleton.bones.flatMap(b=>b.quaternion.toArray());a.update(0,1,25);assert.deepEqual(a.skeleton.bones.flatMap(b=>b.quaternion.toArray()),pose);
  if(['fox','cat','rabbit','dragon','axolotl','phoenix'].includes(w.kind))assert(a.loose.length>0);
 }finally{c.dispose();}}
});

test('explorer IK handles rotated parents; jump, carrying and all 82 accessories remain attached',()=>{
 const actor=world.hero(scene),p={x:3,y:0,z:-500,vy:0};actor.g.position.set(p.x,0,p.z);actor.g.rotation.y=2.3;
 try{
  assert.equal(actor.model.skeleton.bones.length,21);
  let contacts=0;for(let i=0;i<120;i++){actor.update(1/60,{player:p,moving:1,speed:18});for(const leg of Object.values(actor.model.legs))if(leg.contact){contacts++;assert(position(leg.foot).distanceTo(leg.target)<.015,'IK respects the parent transform');}}
  assert(contacts>50);const running=actor.model.bones.shoulderL.rotation.x;for(let i=0;i<45;i++)actor.update(1/60,{player:p,moving:1,carrying:true});assert(Math.abs(actor.model.bones.shoulderL.rotation.x-.87)<.02);assert(Math.abs(actor.model.bones.elbowL.rotation.x-1.18)<.02);assert.notEqual(running,actor.model.bones.shoulderL.rotation.x);
  const egg=world.egg(actor.carry,0xffcc66,.65);const before=position(egg);p.y=1;p.vy=4;actor.g.position.y=1;for(let i=0;i<12;i++)actor.update(1/60,{player:p,moving:1,carrying:true});assert(position(egg).y>before.y+.6);
  let disposed=0,last=null;for(const[id,def]of Object.entries(ACCESSORIES)){world.equipAccessories(actor,{[def.slot]:id});if(last)assert(disposed>0);const mesh=actor.wear.children.find(m=>!m.userData.contour);assert(mesh?.isSkinnedMesh,id);mesh.geometry.addEventListener('dispose',()=>disposed++);last=mesh;actor.update(1/60,{player:p,moving:1,carrying:true});const size=geometryBounds(mesh).getSize(new T.Vector3());assert(Math.max(...size.toArray())<4,id+' follows the bone without exploding');}
  world.equipAccessories(actor,{});assert.equal(disposed,82);assert(actor.hat.visible&&actor.pack.visible);
 }finally{actor.dispose();}
});

test('remote explorers validate slots, interpolate, obey boundaries and release only owned resources',()=>{
 const adapter={scene:()=>scene,state:()=>({zone:'world'})},base=scene.children.length;installEggPeerVisuals(adapter,()=>world);
 adapter.setPeers([{slot:1,state:{x:0,y:0,z:-10,yaw:0,zone:'world'}},{slot:5,state:{x:1,y:0,z:-10,yaw:0}},{slot:2,state:{x:NaN,y:0,z:0,yaw:0}}]);assert.equal(scene.children.length,base+1);
 const node=scene.children.at(-1),actor=node.userData.actor;assert.equal(actor.model.skeleton.bones.length,21);
 adapter.setPeers([{slot:1,state:{x:30,y:0,z:-20,yaw:1,zone:'world'}}]);for(let i=0;i<60;i++)adapter.tick(1/60);assert(node.position.x<=4.35);assert(node.position.z<-19);assert.equal(node.visible,true);
 let sharedDisposed=false;actor.art.toonRamp.addEventListener('dispose',()=>sharedDisposed=true);adapter.clearPeers();assert.equal(scene.children.length,base);assert.equal(sharedDisposed,false);
});

test('all eight vehicles support both feet through turns and jumps and dismount on the treadmill',()=>{
 const a=world.hero(scene),p={x:3,y:0,z:-940,vy:0};a.g.position.set(p.x,p.y,p.z);a.g.rotation.y=2.1;
 try{for(const [id,v]of Object.entries(VEHICLES)){
  for(const height of [0,1.5,0]){p.y=height;p.vy=height?2:0;a.g.position.y=height;for(let i=0;i<35;i++)a.update(1/60,{player:p,moving:1,speed:18,vehicle:id});a.g.updateMatrixWorld(true);
   assert.equal(a.vehicleId,id);assert(a.ride);for(const leg of Object.values(a.model.legs)){const local=a.g.worldToLocal(position(leg.foot));assert(Math.abs(local.x)<.3);assert(Math.abs(local.z)<.55);const ankleAboveDeck=local.y-(a.ride.position.y+.2225);assert(ankleAboveDeck>.05&&ankleAboveDeck<.13,'ankles keep soles on deck');}
   const size=geometryBounds(a.g).getSize(new T.Vector3());assert(size.y<3.2&&size.x<2.5&&size.z<3);if(v.type==='scooter'&&!height)for(const side of ['L','R']){const hand=a.g.worldToLocal(position(a.model.bones['hand'+side]));assert(Math.abs(hand.z+.46)<.12);assert(Math.abs(hand.y-a.ride.position.y-1.05)<.12);}
  }
  a.update(1/60,{player:p,moving:1,training:true,vehicle:id});assert.equal(a.ride,null);assert.equal(a.space.position.y,0);a.update(1/60,{player:p,vehicle:id});assert(a.ride);
 }a.update(1/60,{player:p,vehicle:'invalid'});assert.equal(a.ride,null);}finally{a.dispose();}
});
