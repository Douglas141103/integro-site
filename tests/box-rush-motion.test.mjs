import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/rush-src/node_modules/three/build/three.module.js';
import {ArtResources} from '../integro-box/rush-src/art.js';
import {RunnerCharacter} from '../integro-box/rush-src/character.js';
import {MotionSpring} from '../integro-box/rush-src/motion.js';
import {Run,clean,snapshot} from '../integro-box/rush-src/rules.mjs';
function fixture(){const art=new ArtResources(),c=new RunnerCharacter(art,clean(null)),r=new Run(0);r.track=[];return {c,r,step(dt=1/60){r.update(dt);c.update(r,dt,{time:r.time});c.root.updateMatrixWorld(true);c.skeleton.update();},dispose(){c.dispose();art.dispose();}};}
const world=(bone)=>bone.getWorldPosition(new T.Vector3());

test('IK plants soles while hips move, and limbs remain above ground through jumps, lane changes and slides',()=>{
 const f=fixture();let contacts=0,hipLow=Infinity,hipHigh=-Infinity;try{
  for(let i=0;i<480;i++){if(i===60||i===220)f.r.action('jump');if(i===160)f.r.action('slide');if(i===300)f.r.action('right');if(i===340)f.r.action('left');f.step();
   hipLow=Math.min(hipLow,f.c.bones.hips.position.y);hipHigh=Math.max(hipHigh,f.c.bones.hips.position.y);
   for(const leg of Object.values(f.c.legs)){if(leg.contact){contacts++;assert(world(leg.foot).distanceTo(leg.target)<.012,'contact foot follows IK target without lifting the whole body');}
    for(const x of[-.18,.18])for(const z of[-.385,.205]){const sole=new T.Vector3(x,-.1,z).applyMatrix4(leg.foot.matrixWorld);assert(sole.y>-.012,`sole below floor: ${sole.y}`);}
    for(const joint of[leg.thigh,leg.knee,leg.foot])assert(Math.abs(joint.quaternion.length()-1)<1e-5);
   }
  }
  assert(contacts>300);assert(hipHigh-hipLow>.4);const before=snapshot(f.r);f.c.update(f.r,1/60,{time:f.r.time});assert.deepEqual(snapshot(f.r),before,'animation cannot change gameplay or save data');
 }finally{f.dispose();}
});

test('jump has distinct rising, apex and landing poses; slide recovery and pause are continuous',()=>{
 const f=fixture();try{
  for(let i=0;i<30;i++)f.step();f.r.action('jump');const poses=[];let last=world(f.c.bones.head),largestStep=0;
  for(let i=0;i<80;i++){f.step();const head=world(f.c.bones.head);largestStep=Math.max(largestStep,head.distanceTo(last));last=head;if([12,31,55].includes(i))poses.push(f.c.bones.thighL.quaternion.clone());}
  assert(poses[0].angleTo(poses[1])>.2);assert(poses[1].angleTo(poses[2])>.2);assert(largestStep<.4,'takeoff must not teleport');
  f.r.action('slide');last=world(f.c.bones.head);largestStep=0;
  for(let i=0;i<90;i++){f.step();const head=world(f.c.bones.head);largestStep=Math.max(largestStep,head.distanceTo(last));last=head;}
  assert(largestStep<.36,'outgoing slide pose must be held during the blend');
  const pose=()=>[...f.c.root.position.toArray(),...f.c.rig.scale.toArray(),...Object.values(f.c.bones).flatMap(b=>[...b.position.toArray(),...b.quaternion.toArray()])],frozen=pose();
  for(let i=0;i<30;i++)f.c.update(f.r,1/30,{paused:true,time:100+i});assert.deepEqual(pose(),frozen,'pause freezes both pose and secondary motion');
 }finally{f.dispose();}
});

test('accessories have delayed motion and spring integration is independent of refresh rate',()=>{
 const values=[];for(const fps of[30,60,120]){const spring=new MotionSpring();for(let i=0;i<fps;i++)spring.step(.15,1/fps);values.push([spring.value,spring.velocity]);}
 for(const [value,velocity]of values){assert(Math.abs(value-values[0][0])<1e-10);assert(Math.abs(velocity-values[0][1])<1e-10);}
 const f=fixture();try{for(let i=0;i<20;i++)f.step();f.r.action('jump');let cap=0,hood=0,difference=0;
  for(let i=0;i<70;i++){f.step();cap=Math.max(cap,Math.abs(f.c.bones.cap.rotation.x));hood=Math.max(hood,Math.abs(f.c.bones.hood.rotation.x));difference=Math.max(difference,Math.abs(f.c.bones.cap.rotation.x-f.c.bones.hood.rotation.x));}
  assert(cap>.02);assert(hood>.05);assert(difference>.02,'cap and cloth must not move in lockstep');
  for(let i=0;i<180;i++)f.step();assert(Math.abs(f.c.bones.cap.rotation.x)<.01);assert(Math.abs(f.c.bones.hood.rotation.x)<.02);
 }finally{f.dispose();}
});

test('gait pace is stable at 30, 60 and 120 Hz',()=>{
 const poses=[];for(const fps of[30,60,120]){const f=fixture();try{for(let i=0;i<fps*2;i++)f.step(1/fps);poses.push(['head','footL','footR'].map(name=>world(f.c.bones[name])));}finally{f.dispose();}}
 for(const pose of poses)for(let i=0;i<3;i++)assert(pose[i].distanceTo(poses[0][i])<.025);
});

test('running has visible heel recovery, flight and arm swing; jumping separates the legs',()=>{
 const f=fixture();try{
  let flight=0,footLift=0,armTravel=0,minArm=Infinity,maxArm=-Infinity,minZ=Infinity,maxZ=-Infinity;
  for(let i=0;i<180;i++){f.step();const left=world(f.c.bones.footL),right=world(f.c.bones.footR),hand=world(f.c.bones.handL);
   if(Object.values(f.c.legs).every(leg=>!leg.contact))flight++;
   footLift=Math.max(footLift,Math.abs(left.y-right.y));minArm=Math.min(minArm,hand.z);maxArm=Math.max(maxArm,hand.z);minZ=Math.min(minZ,left.z);maxZ=Math.max(maxZ,left.z);
  }
  armTravel=maxArm-minArm;assert(flight>15,'running needs a flight interval, not continuous walking support');assert(footLift>.40,'heel must visibly recover above the other shoe');assert(maxZ-minZ>.75,'stride cannot collapse into shuffling');assert(armTravel>.65,'arms visibly drive the run');
  f.r.action('jump');for(let i=0;i<30;i++)f.step();assert(Math.abs(world(f.c.bones.footL).y-world(f.c.bones.footR).y)>.30,'apex must have a clearly raised knee');
 }finally{f.dispose();}
});

test('step cadence increases with the actual running speed',()=>{
 const cycles=[];for(const time of[0,180]){const f=fixture();f.r.time=time;let total=0;try{for(let i=0;i<120;i++){const before=f.c.gaitPhase;f.step();total+=(f.c.gaitPhase-before+1)%1;}cycles.push(total);}finally{f.dispose();}}
 assert(cycles[1]>cycles[0]*1.2);assert(cycles[1]<cycles[0]*1.5);
});
