import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createHarborScenery,HARBOR_CYCLE} from '../integro-box/egg-src/egg-harbor-scenery.js';
const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
const mesh=(p,geometry,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geometry,new T.MeshBasicMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
const box=(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z);
const helpers={group,box,softBox:box,
 cyl:(p,rt,rb,h,c,x,y,z,s=16)=>mesh(p,new T.CylinderGeometry(rt,rb,h,s),c,x,y,z),
 torus:(p,r,t,c,x,y,z)=>mesh(p,new T.TorusGeometry(r,t,6,16),c,x,y,z),
 ball:(p,r,c,x,y,z,sx=1,sy=1,sz=1)=>{const m=mesh(p,new T.SphereGeometry(r,8,6),c,x,y,z);m.scale.set(sx,sy,sz);return m;}};
helpers.rod=(p,a,b,r,c)=>{const start=new T.Vector3(...a),direction=new T.Vector3(...b).sub(start),mid=start.clone().addScaledVector(direction,.5),m=helpers.cyl(p,r,r,direction.length(),c,mid.x,mid.y,mid.z);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),direction.normalize());return m;};
const fixture=(create,index)=>{const root=new T.Group(),world=create(helpers);world.add(root,10);assert.equal(root.children.length,0);world.add(root,index,-index*48-24);assert.equal(root.children.length,4);return{root,site:root.children[0],update:world.update};};
const identities=root=>{const ids=[];root.traverse(n=>ids.push(n.uuid));return ids;};


test('four sailboats approach, stop at their piers, depart and repeat without rebuilding meshes',()=>{
 const {root,site,update}=fixture(createHarborScenery,15),boat=site.getObjectByName('WindHarborSailboat'),moor=site.getObjectByName('SailboatMooringLines'),wake=site.getObjectByName('SailboatWake'),ids=identities(root);
 update(1);assert.equal(site.userData.phase,'arriving');const start=boat.position.z;assert(wake.visible&&!moor.visible);
 update(5);assert(boat.position.z<start&&boat.position.z>0);
 update(7);assert.equal(site.userData.phase,'docked');assert.equal(boat.position.z,0);assert.equal(Math.abs(boat.position.x),0);assert(moor.visible&&!wake.visible);
 update(14);assert.equal(boat.position.z,0);assert(moor.visible);
 update(18);assert.equal(site.userData.phase,'departing');assert(boat.position.z<0);assert(wake.visible&&!moor.visible);
 update(24);assert.equal(site.userData.phase,'waiting');assert(!boat.visible&&!wake.visible&&!moor.visible);
 update(HARBOR_CYCLE*100+7);assert.equal(site.userData.phase,'docked');assert.equal(boat.position.z,0);assert.deepEqual(identities(root),ids);
});
test('curved sails have sewn panels, stay anchored and billow without replacing geometry',()=>{
 const {site,update}=fixture(createHarborScenery,15),sails=[];site.traverse(n=>{if(n.name==='BillowingHarborSail')sails.push(n);});assert.equal(sails.length,2);
 update(2);const mesh=sails[0],p=mesh.geometry.attributes.position,first=Array.from(p.array);assert(mesh.material.isMeshToonMaterial);assert.equal(mesh.material.side,T.DoubleSide);assert(p.count>200);assert(mesh.geometry.attributes.color);assert(Math.max(...first.filter((_,i)=>i%3===0))>.2);
 update(3);assert.equal(mesh.geometry.attributes.position,p);assert.notDeepEqual(Array.from(p.array),first);
 for(let j=0;j<=16;j++){assert(Math.abs(p.getX(j*13))<1e-6);assert(Math.abs(p.getX(j*13+12))<1e-6);}
 for(let i=0;i<p.count;i++){assert(Number.isFinite(p.getX(i)));assert.equal(p.getY(i),first[i*3+1]);assert.equal(p.getZ(i),first[i*3+2]);}
 update(8,true);const still=Array.from(p.array),boat=site.getObjectByName('WindHarborSailboat');assert.equal(boat.rotation.x,0);assert.equal(boat.rotation.z,0);update(12,true);assert.deepEqual(Array.from(p.array),still);
});
test('ports and sailing routes keep all visible meshes outside the running path throughout the cycle',()=>{
 const {root,update}=fixture(createHarborScenery,15);
 for(const reduced of[false,true])for(let time=0;time<HARBOR_CYCLE;time+=.5){update(time,reduced);root.updateMatrixWorld(true);root.traverseVisible(n=>{if(!n.isMesh&&!n.isLine)return;const b=new T.Box3().setFromObject(n,true);assert(Number.isFinite(b.min.x)&&Number.isFinite(b.max.y));assert(b.max.x<-4.75||b.min.x>4.75,n.name);});}
});
