import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createGalaxyScenery,GALAXY_CYCLE} from '../integro-box/egg-src/egg-galaxy-scenery.js';
import {createPopcornScenery,POPCORN_CYCLE} from '../integro-box/egg-src/egg-popcorn-scenery.js';
const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
const mesh=(p,geometry,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geometry,new T.MeshBasicMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
const box=(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z);
const helpers={group,box,softBox:box,
 cyl:(p,rt,rb,h,c,x,y,z,s=16)=>mesh(p,new T.CylinderGeometry(rt,rb,h,s),c,x,y,z),
 torus:(p,r,t,c,x,y,z)=>mesh(p,new T.TorusGeometry(r,t,6,16),c,x,y,z),
 ball:(p,r,c,x,y,z,sx=1,sy=1,sz=1)=>{const m=mesh(p,new T.SphereGeometry(r,8,6),c,x,y,z);m.scale.set(sx,sy,sz);return m;}};
const fixture=(create,index)=>{const root=new T.Group(),world=create(helpers);world.add(root,10);assert.equal(root.children.length,0);world.add(root,index);assert.equal(root.children.length,4);return{root,site:root.children[0],update:world.update};};
const instance=(mesh,index=0)=>{const matrix=new T.Matrix4(),position=new T.Vector3(),scale=new T.Vector3();mesh.getMatrixAt(index,matrix);matrix.decompose(position,new T.Quaternion(),scale);return{position,scale};};
const identities=root=>{const ids=[];root.traverse(n=>ids.push(n.uuid));return ids;};

test('black hole appears, implodes and becomes a spreading galaxy that fades before restarting',()=>{
 const {root,site,update}=fixture(createGalaxyScenery,18),hole=site.getObjectByName('ImplodingBlackHole'),galaxy=site.getObjectByName('ExpandingSpiralGalaxy'),stars=site.getObjectByName('GalaxySpiralStars');
 update(1);assert(hole.visible);assert(hole.scale.x>0&&hole.scale.x<1);assert(!galaxy.visible);
 update(3);assert.equal(hole.scale.x,1);
 update(5);const collapsing=hole.scale.x;assert(collapsing<1);assert.equal(site.userData.phase,'imploding');
 update(5.6);assert(hole.scale.x<collapsing);assert(!galaxy.visible);
 update(7);assert(!hole.visible);assert(galaxy.visible);assert.equal(stars.count,120);const radius=instance(stars,39).position.length();
 update(11);assert(instance(stars,39).position.length()>radius);assert(stars.material.opacity<1);
 update(12.9);assert(stars.material.opacity<.01);
 update(13.1);assert(!hole.visible&&!galaxy.visible);
 const ids=identities(root);update(GALAXY_CYCLE*1000+3);assert(hole.visible);assert.equal(hole.scale.x,1);assert.deepEqual(identities(root),ids);
});

test('corn pours into an open pot, builds pressure under its lid, pops abundantly and settles before disappearing',()=>{
 const {root,site,update}=fixture(createPopcornScenery,0),lid=site.getObjectByName('PressureCookerLid'),pot=site.getObjectByName('PressureCooker'),corn=site.getObjectByName('PouringCornKernels'),pop=site.getObjectByName('FlyingPopcorn');
 update(.9);assert(corn.visible);assert(lid.rotation.x>1);assert(instance(corn,2).scale.x>0);assert(instance(corn,2).position.y<3.4);assert(!pop.visible);
 update(5.5);assert.equal(lid.rotation.x,0);assert(!corn.visible);assert.notEqual(pot.rotation.z,0);assert.equal(site.userData.phase,'pressure');
 update(6.7);assert(lid.rotation.x>0);assert(!pop.visible);
 update(8.6);assert(pop.visible);assert.equal(pop.count,64);assert(lid.rotation.x>1.4);assert(instance(pop,30).position.y>2);
 update(10.7);for(let k=0;k<pop.count;k++){const {position,scale}=instance(pop,k);assert(Math.abs(position.y-.28)<1e-6);assert(scale.x>.7);assert(Math.hypot(position.x,position.z)>1.5);}
 const full=instance(pop,0).scale.x;update(12);assert(instance(pop,0).scale.x<full);
 update(12.6);assert(!pop.visible&&!corn.visible);
 const ids=identities(root);update(POPCORN_CYCLE*1000+.9);assert(corn.visible);assert(!pop.visible);assert.deepEqual(identities(root),ids);
});

test('both animations remain outside the running path with finite particles throughout normal and reduced-motion cycles',()=>{
 for(const [create,index,cycle]of [[createGalaxyScenery,18,GALAXY_CYCLE],[createPopcornScenery,0,POPCORN_CYCLE]]){
  const {root,update}=fixture(create,index);
  for(const reduced of[false,true])for(let time=0;time<cycle;time+=.4){
   update(time,reduced);root.updateMatrixWorld(true);
   for(const site of root.children)site.traverseVisible(n=>{
    if(!n.isMesh)return;
    if(n.isInstancedMesh){assert(Array.from(n.instanceMatrix.array).every(Number.isFinite));n.computeBoundingBox();}
    const bounds=new T.Box3().setFromObject(n,true);
    assert(bounds.max.x<-4.75||bounds.min.x>4.75,'decoration stays beside the path');
   });
  }
 }
 const {site,update}=fixture(createPopcornScenery,0);update(5.5,true);assert.equal(site.getObjectByName('PressureCooker').rotation.z,0);update(8,true);assert(site.getObjectByName('FlyingPopcorn').visible);
});
