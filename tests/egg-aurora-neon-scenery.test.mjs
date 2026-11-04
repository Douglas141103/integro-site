import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createAuroraScenery} from '../integro-box/egg-src/egg-aurora-scenery.js';
import {createNeonScenery,NEON_CYCLE,SPHINX_BACK_STEPS,SPHINX_STEP_SECONDS} from '../integro-box/egg-src/egg-neon-scenery.js';
const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
const mesh=(p,geometry,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geometry,new T.MeshBasicMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
const box=(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z);
const helpers={group,box,softBox:box,
 cyl:(p,rt,rb,h,c,x,y,z,s=16)=>mesh(p,new T.CylinderGeometry(rt,rb,h,s),c,x,y,z),
 torus:(p,r,t,c,x,y,z)=>mesh(p,new T.TorusGeometry(r,t,6,16),c,x,y,z),
 ball:(p,r,c,x,y,z,sx=1,sy=1,sz=1)=>{const m=mesh(p,new T.SphereGeometry(r,8,6),c,x,y,z);m.scale.set(sx,sy,sz);return m;}};
helpers.rod=(p,a,b,r,c)=>{const start=new T.Vector3(...a),direction=new T.Vector3(...b).sub(start),mid=start.clone().addScaledVector(direction,.5),m=helpers.cyl(p,r,r,direction.length(),c,mid.x,mid.y,mid.z);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),direction.normalize());return m;};
const fixture=(create,index)=>{const root=new T.Group(),world=create(helpers);world.add(root,10);assert.equal(root.children.length,0);world.add(root,index);assert.equal(root.children.length,4);return{root,site:root.children[0],update:world.update};};
const identities=root=>{const ids=[];root.traverse(n=>ids.push(n.uuid));return ids;};

test('aurora curtains wave above the kingdom, fade at their edges and stay still with reduced motion',()=>{
 const root=new T.Group(),aurora=createAuroraScenery();aurora.add(root,16);assert.equal(root.children.length,0);aurora.add(root,17);assert.equal(root.children.length,3);
 aurora.update(0);const mesh=root.children[0],position=mesh.geometry.attributes.position,first=Array.from(position.array),ids=identities(root);
 const alpha=mesh.material.map.image.data;assert.equal(alpha[3],0);assert.equal(alpha[alpha.length-1],0);assert(alpha[16*4+3]>240);
 aurora.update(8);assert.notDeepEqual(Array.from(position.array),first);assert.equal(mesh.geometry.attributes.position,position);
 for(let time=0;time<30;time+=2){aurora.update(time);for(const curtain of root.children){const p=curtain.geometry.attributes.position;assert(Array.from(p.array).every(Number.isFinite));for(let i=0;i<p.count;i++){assert(p.getY(i)>=7);assert(p.getY(i)<14);assert(p.getZ(i)<-17*48&&p.getZ(i)>-18*48);}}}
 aurora.update(3,true);const still=Array.from(position.array);aurora.update(300,true);assert.deepEqual(Array.from(position.array),still);assert.deepEqual(identities(root),ids);
});

test('neon draws a pyramid, transforms it into a sphinx, opens the ground and lets the sphinx enter before restarting',()=>{
 const {root,site,update}=fixture(createNeonScenery,16),outline=site.getObjectByName('DrawingNeonPyramid'),pyramid=site.getObjectByName('NeonPyramid'),sphinx=site.getObjectByName('NeonSphinx'),tunnel=site.getObjectByName('SphinxGroundTunnel');
 update(.2);assert(outline.visible);assert(!pyramid.visible&&!sphinx.visible&&!tunnel.visible);const first=outline.children[0];assert(first.visible);assert(!outline.children[2].visible);const partial=first.scale.y;
 update(1);assert(first.scale.y>partial);
 update(5);assert(pyramid.visible);assert.equal(pyramid.children[0].material.opacity,1);
 update(7);assert(pyramid.visible&&sphinx.visible);assert(pyramid.scale.y<1);assert(sphinx.scale.x>.1&&sphinx.scale.x<1);assert.equal(site.userData.phase,'transforming');
 update(8.5);assert(!pyramid.visible&&!outline.visible);assert(sphinx.visible);assert.equal(sphinx.scale.x,1);
 update(10);assert.equal(site.userData.phase,'standing');assert(!tunnel.visible);assert.equal(Math.abs(sphinx.position.z),0);
 update(13);assert(tunnel.visible);const shutters=tunnel.children.filter(n=>n.name==='NeonTunnelShutter');assert(shutters.every(n=>Math.abs(n.position.x)>.825));assert(sphinx.position.z>0);
 update(14);assert(shutters.every(n=>Math.abs(n.position.x)>2.4));assert.equal(sphinx.userData.backwardSteps,5);
 update(18);assert(sphinx.position.z<-5);assert(sphinx.position.y<-3);assert.equal(site.userData.phase,'running');
 update(19.7);assert(!sphinx.visible);assert(tunnel.visible);assert(shutters.every(n=>Math.abs(n.position.x)<2.4));
 update(20.6);assert(!tunnel.visible&&!sphinx.visible&&!pyramid.visible);
 const ids=identities(root);update(NEON_CYCLE*1000+5);assert(pyramid.visible);assert(!sphinx.visible&&!tunnel.visible);assert.deepEqual(identities(root),ids);
});

test('sphinx transformation and opening tunnel leave the running path clear in both motion modes',()=>{
 const {root,update}=fixture(createNeonScenery,16);
 for(const reduced of[false,true])for(let time=0;time<NEON_CYCLE;time+=.25){
  update(time,reduced);root.updateMatrixWorld(true);
  for(const site of root.children)site.traverseVisible(n=>{if(!n.isMesh)return;const bounds=new T.Box3().setFromObject(n,true);assert(bounds.max.x<-4.75||bounds.min.x>4.75);assert(Number.isFinite(bounds.min.y)&&Number.isFinite(bounds.max.y));});
 }
 update(12,true);for(const site of root.children)assert.equal(site.getObjectByName('SphinxBody').position.y,0);
});

test('cartoon sphinx has exactly 54 unique functional joints which articulate its rise, backward steps and run',()=>{
 const {site,update}=fixture(createNeonScenery,16),sphinx=site.getObjectByName('NeonSphinx'),body=site.getObjectByName('SphinxBody'),bones=[];
 sphinx.traverse(n=>{if(n.isBone)bones.push(n);});assert.equal(bones.length,54);assert.equal(body.userData.jointCount,54);assert.equal(new Set(bones.map(n=>n.name)).size,54);
 for(const bone of bones){let visibleParts=0;bone.traverse(n=>{if(n.isMesh)visibleParts++;});assert(visibleParts>0,'each joint moves visible geometry');}
 const pose=bone=>[...bone.position.toArray(),...bone.quaternion.toArray()];
 update(8.25);const initial=bones.map(pose),lying=site.getObjectByName('SphinxJoint_pelvis').position.y,animated=new Set();
 for(const time of[10.5,11,11.7,15.2]){update(time);bones.forEach((bone,i)=>{const p=pose(bone);assert(p.every(Number.isFinite));if(p.some((v,k)=>Math.abs(v-initial[i][k])>1e-5))animated.add(bone.name);});}
 assert.equal(animated.size,54);update(10.5);assert(site.getObjectByName('SphinxJoint_pelvis').position.y>lying+.6);
 let z=0;
 for(let step=1;step<=SPHINX_BACK_STEPS;step++){update(10.5+step*SPHINX_STEP_SECONDS);assert.equal(sphinx.userData.backwardSteps,step);assert(sphinx.position.z>z);z=sphinx.position.z;}
 assert.equal(z,2.1);update(15);const runStart=sphinx.position.z;assert.equal(body.userData.pose,'run');update(16);assert(runStart-sphinx.position.z>1.2,'running is faster than the backward walk');
});
