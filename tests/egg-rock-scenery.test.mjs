import {TRACK_HALF_WIDTH} from '../integro-box/egg-src/egg-track.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createRockWorld} from '../integro-box/egg-src/egg-rock-world.js';
import {PYRAMID_CYCLE} from '../integro-box/egg-src/egg-rock-scenery.js';
const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
const mesh=(p,geometry,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geometry,new T.MeshBasicMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
const helpers={group,
 box:(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z),
 cyl:(p,rt,rb,h,c,x,y,z,s=16)=>mesh(p,new T.CylinderGeometry(rt,rb,h,s),c,x,y,z),
 torus:(p,r,t,c,x,y,z)=>mesh(p,new T.TorusGeometry(r,t,6,16),c,x,y,z)};
const fixture=()=>{const root=new T.Group(),world=createRockWorld({helpers});world.scenery(root,21);assert.equal(root.children.length,0);world.scenery(root,22);return{root,world,update:(time,reduced=false)=>world.update({time},reduced)};};

test('track scenery grows, bursts into guardians, dives and starts again without accumulating objects',()=>{
 const {root,update}=fixture(),site=root.children[0],pyramid=site.getObjectByName('RisingRockPyramid');
 const guardians=site.children.filter(n=>n.name==='LittlePedregulho');
 assert.equal(root.children.length,12);assert.equal(guardians.length,4);
 update(1);const small=pyramid.scale.y;assert(pyramid.visible);assert(small<.1);assert(guardians.every(g=>!g.visible));
 update(7.5);assert.equal(pyramid.scale.y,1);assert.equal(site.userData.phase,'full');
 update(8.4);assert.equal(pyramid.visible,false);assert(guardians.every(g=>g.visible&&g.position.y>1));assert.equal(site.userData.phase,'burst');
 update(9.5);assert(guardians.every(g=>g.visible&&Math.abs(g.position.y)<1e-10));assert.equal(site.userData.phase,'guardians');
 update(11.6);assert(guardians.every(g=>g.position.y<-.5&&g.children[0].rotation.x<-2));assert.equal(site.userData.phase,'diving');
 update(12.5);assert(!pyramid.visible);assert(guardians.every(g=>!g.visible));
 const ids=[];root.traverse(n=>ids.push(n.uuid));
 update(1+PYRAMID_CYCLE*1000);assert(pyramid.visible);assert(Math.abs(pyramid.scale.y-small)<1e-10);
 const after=[];root.traverse(n=>after.push(n.uuid));assert.deepEqual(after,ids);
 assert(new Set(root.children.map(n=>n.userData.phase)).size>1,'cycles are staggered along the track');
});

test('decorative guardians stay outside the path and reduced motion preserves the cycle without flying debris',()=>{
 const {root,update}=fixture();
 for(let time=0;time<14;time+=.15){
  update(time,true);root.updateMatrixWorld(true);
  for(const site of root.children){
   for(const n of site.children){
    if(['PyramidDustRing','PyramidStoneChip'].includes(n.name))assert.equal(n.visible,false);
    if(n.visible&&['LittlePedregulho','RisingRockPyramid'].includes(n.name)){
     const bounds=new T.Box3().setFromObject(n,true);
     assert(bounds.max.x<-TRACK_HALF_WIDTH||bounds.min.x>TRACK_HALF_WIDTH,'animation leaves the running path clear');
     assert(Number.isFinite(bounds.min.y)&&Number.isFinite(bounds.max.y));
    }
   }
  }
 }
 update(8.4,true);assert(root.children[0].getObjectByName('LittlePedregulho').visible);
 update(11.6,true);assert.equal(root.children[0].userData.phase,'diving');
});
