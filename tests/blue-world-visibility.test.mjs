import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {BlueRun,PHYSICS} from '../integro-box/blue-src/engine.mjs';
import {createWorld} from '../integro-box/blue-src/scene.mjs';
import {cameraFrame,placeCamera,bossMarker} from '../integro-box/blue-src/camera.mjs';
const require=createRequire(new URL('../integro-box/blue-src/scene.mjs',import.meta.url));
const {Box3,OrthographicCamera,Vector3,Raycaster}=require('three');

test('boss spawn is free, visible and large enough in the submitted landscape aspect',()=>{
 const run=new BlueRun(3),p=run.player;
 for(const s of run.surfaces())assert(!(p.x+PHYSICS.radius>s.x-s.w/2&&p.x-PHYSICS.radius<s.x+s.w/2&&p.y+PHYSICS.height>s.y-s.h&&p.y<s.y),'spawn must not intersect a solid');
 const camera=new OrthographicCamera(-1,1,1,-1,.1,120),frame=cameraFrame(run,1536,710);placeCamera(camera,frame);
 const foot=new Vector3(p.x,0,0).project(camera),head=new Vector3(p.x,1.65,0).project(camera);
 assert((head.y-foot.y)/2*710>100,'Blue should be over 100px tall, not lost in scenery');
 const world=createWorld(run,{document:null});world.update(run,0);world.scene.updateMatrixWorld(true);
 const centre=new Vector3(p.x,1.2,0).project(camera),ray=new Raycaster();ray.setFromCamera(centre,camera);
 const first=ray.intersectObjects(world.scene.children,true).find(hit=>hit.object.visible&&!hit.object.material.userData.outline);
 assert(first?.object.name.startsWith('Blue'),`Blue's upper body is occluded by ${first?.object.name}`);
 world.dispose();
});

test('Blue and Bront remain inside the landscape arena framing, including during a jump',()=>{
 const run=new BlueRun(3),camera=new OrthographicCamera(-1,1,1,-1,.1,120);
 for(const [w,h] of [[1536,710],[844,390],[667,375],[1024,768]])for(const x of [1,10,19])for(const bx of [4,10,16]){
  run.player.x=x;run.boss.x=bx;placeCamera(camera,cameraFrame(run,w,h));
  for(const point of [[x-.35,0],[x+.35,3.85],[bx-1.2,0],[bx+1.2,1.7]]){const p=new Vector3(...point,0).project(camera);assert(Math.abs(p.x)<.98&&Math.abs(p.y)<.98,JSON.stringify({w,h,point,p}));}
  assert.equal(bossMarker(camera,run.boss).edge,'');
 }
 const p=new BlueRun(0);let ground=0,y=null;
 for(let i=0;i<60;i++){p.update(1/60,{jump:i<40});const f=cameraFrame(p,844,390,ground);ground=f.groundY;y??=f.y;assert(Math.abs(f.y-y)<.001,'normal jump should not bounce the camera');}
});

test('portrait keeps Blue legible and indicates the offscreen boss direction',()=>{
 const run=new BlueRun(3),camera=new OrthographicCamera(-1,1,1,-1,.1,120);
 placeCamera(camera,cameraFrame(run,390,844));assert.equal(bossMarker(camera,run.boss).edge,'right');
 const foot=new Vector3(3,0,0).project(camera),head=new Vector3(3,1.65,0).project(camera);assert((head.y-foot.y)*844/2>55);
 run.player.x=19;run.boss.x=4;placeCamera(camera,cameraFrame(run,390,844));assert.equal(bossMarker(camera,run.boss).edge,'left');
});

test('Bront rolls above the floor for a complete revolution and cues match combat phases',()=>{
 const run=new BlueRun(3),world=createWorld(run,{document:null}),rolling=world.scene.getObjectByName('Bront rolling'),standing=world.scene.getObjectByName('Bront standing');
 run.boss.phase='roll';
 for(let i=0;i<24;i++){run.time=i*Math.PI*2/240;world.update(run,run.time);world.scene.updateMatrixWorld(true);const box=new Box3().setFromObject(rolling,true);assert(rolling.visible);assert(!standing.visible);assert(box.min.y>=0,`Bront dipped below the floor at ${i}`);assert(box.max.y<1.5);}
 run.boss.phase='warn';world.update(run,1);assert(world.scene.getObjectByName('Bront attack warning').visible);assert(!rolling.visible);assert(standing.visible);
 run.boss.phase='rest';world.update(run,2);assert(!world.scene.getObjectByName('Bront attack warning').visible);assert(world.scene.getObjectByName('Bront pulse target').visible);
 world.dispose();
});
