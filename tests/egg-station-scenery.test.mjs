import {TRACK_HALF_WIDTH} from '../integro-box/egg-src/egg-track.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createStationScenery,STATION_CYCLE} from '../integro-box/egg-src/egg-station-scenery.js';
const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
const mesh=(p,geometry,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geometry,new T.MeshBasicMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
const box=(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z);
const helpers={group,box,softBox:box,label:group,
 cyl:(p,rt,rb,h,c,x,y,z,s=16)=>mesh(p,new T.CylinderGeometry(rt,rb,h,s),c,x,y,z),
 ball:(p,r,c,x,y,z,sx=1,sy=1,sz=1)=>{const m=mesh(p,new T.SphereGeometry(r,8,6),c,x,y,z);m.scale.set(sx,sy,sz);return m;}};
// Labels do not need canvas textures for geometry/animation checks.
helpers.label=(p,text,x,y,z)=>group(p,x,y,z);
const fixture=()=>{const root=new T.Group(),station=createStationScenery(helpers);station.add(root,18,-888);assert.equal(root.children.length,0);station.add(root,19,-936);return{root,station,site:root.children[0],update:station.update};};

test('station train emerges, stops, opens doors for robots, closes and returns underground before the next arrival',()=>{
 const {site,update}=fixture(),train=site.getObjectByName('IntegroArrivingTrain');
 const doors=[],robots=[];site.traverse(n=>{if(n.name==='TrainSlidingDoor')doors.push(n);if(n.name==='StationRobotPassenger')robots.push(n);});
 update(0);assert.equal(site.userData.phase,'arriving');assert(train.position.y<-3);assert.equal(train.position.z,16);assert(robots.every(r=>!r.visible));
 update(3);assert(train.position.y>0);assert(train.position.z>0&&train.position.z<16);
 update(5);assert.equal(train.position.z,0);assert.equal(train.position.y,.15);assert(doors.every(d=>Math.abs(d.position.z)===.23));
 update(6);assert(doors.every(d=>Math.abs(d.position.z)>.8));assert.equal(robots.filter(r=>r.visible).length,1);
 update(8);assert.equal(robots.filter(r=>r.visible).length,4);assert.equal(train.position.z,0);assert(robots[0].position.x>2.5);assert(robots[0].position.z<0);
 update(12);assert(doors.every(d=>Math.abs(d.position.z)===.23));
 update(15.9);assert(train.position.z<-15);assert(train.position.y<-3);assert(robots.every(r=>!r.visible));
 update(16.5);assert.equal(train.visible,false);assert.equal(site.userData.phase,'waiting');
 const ids=[];site.traverse(n=>ids.push(n.uuid));update(STATION_CYCLE*500+3);assert(train.visible);assert(train.position.y>0);assert(train.position.z>0);
 const after=[];site.traverse(n=>after.push(n.uuid));assert.deepEqual(after,ids);
});

test('station platforms, trains and passengers stay beside the path throughout both staggered cycles',()=>{
 const {root,update}=fixture(),sites=root.children.filter(n=>n.name==='AnimatedIntegroStation');
 assert.equal(sites.length,2);
 for(let time=0;time<STATION_CYCLE;time+=.1){
  update(time,true);root.updateMatrixWorld(true);
  for(const site of sites){
   const train=site.getObjectByName('IntegroArrivingTrain');assert.equal(train.rotation.x,0);
   for(const node of site.children){if(!node.visible)continue;
    const bounds=new T.Box3().setFromObject(node,true);if(bounds.isEmpty())continue;
    assert(bounds.max.x<-TRACK_HALF_WIDTH||bounds.min.x>TRACK_HALF_WIDTH,'scenery must not block the running path');
    assert(Number.isFinite(bounds.min.y)&&Number.isFinite(bounds.max.y));
   }
  }
 }
 update(0);assert.notEqual(sites[0].userData.phase,sites[1].userData.phase);
});
