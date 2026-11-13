import {trackSideX} from './egg-track.js';
export const STATION_CYCLE=18;
const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>x*x*(3-2*x);

export function createStationScenery({group,box,softBox,cyl,ball,label}){
 const stations=[];
 function add(parent,index,z){if(index!==19)return;
  for(const side of[-1,1]){
   const root=group(parent,trackSideX(side*9.4),0,z);root.name='AnimatedIntegroStation';
   const platform=box(root,2.2,.35,16,0x8eaf9e,-side*2.65,.15,-1);
   platform.name='StationPlatform';
   box(root,.12,.035,15,0xf1ce72,-side*1.65,.345,-1);
   for(const x of[-.78,.78])box(root,.09,.07,30,0xa9b6ae,x,.05,0);
   for(let i=-14;i<=14;i+=1.3)box(root,2.1,.05,.18,0x596e61,0,.02,i);
   for(const end of[-1,1]){
    const tunnel=group(root,0,0,end*14);tunnel.name='StationGroundTunnel';
    box(tunnel,3.25,.035,7,0x152d2b,0,.065,0);
    for(const x of[-1.8,1.8])box(tunnel,.35,.35,7.3,0x748c7d,x,.18,0);
    for(let k=0;k<9;k++){
     const angle=k*Math.PI/8,arch=box(tunnel,.65,.56,.8,0x9aaf9c,Math.cos(angle)*1.8,.18+Math.sin(angle)*2.9,end*2.6);
     arch.rotation.z=angle-Math.PI/2;
    }
    for(const x of[-1.8,1.8])ball(tunnel,.12,0xffdf83,x,.43,-end*3.3);
   }
   // A small station doorway receives the passengers after they disembark.
   const hut=group(root,-side*2.65,.33,-6.8);hut.name='StationRobotEntrance';
   box(hut,1.8,1.8,.9,0x31725e,0,.9,-.3);
   box(hut,.92,1.4,.04,0x142f30,0,.7,.18);
   softBox(hut,2.1,.18,1.4,0xe2d7a3,0,1.85,-.15);
   label(hut,'INTEGRO',0,2.1,.1,1.7,'#f7f1d6','#245d48');

   const train=group(root);train.name='IntegroArrivingTrain';
   softBox(train,2.5,.4,6.8,0x378c72,0,.4,0);
   for(const dz of[-1.95,1.95]){
    softBox(train,2.45,1.65,2.85,0xe6edce,0,1.4,dz);
    for(const x of[-1.24,1.24])softBox(train,.04,.65,1.9,0x72c5ca,x,1.65,dz);
   }
   softBox(train,2.6,.25,6.9,0x378c72,0,2.35,0);
   box(train,.35,.16,1.05,0xc7d6b6,-side*1.4,.3,0);
   box(train,2.35,1.7,.95,0x294a43,0,1.35,0);
   box(train,1.7,.65,.05,0x72c5ca,0,1.65,-3.39);
   for(const x of[-.8,.8])ball(train,.15,0xffe4a2,x,.95,-3.43,1,1,.3);
   label(train,'INTEGRO',0,2.75,0,2.4,'#f8f3d3','#28644f');
   const doors=[-1,1].map(sign=>{
    const door=box(train,.09,1.6,.46,0x3b997e,-side*1.26,1.4,sign*.23);
    door.name='TrainSlidingDoor';box(door,.02,.6,.3,0x92d3d3,-side*.055,.25,0);return{door,sign};
   });
   const wheels=[];
   for(const x of[-1.2,1.2])for(const dz of[-2.4,2.4]){
    const wheel=cyl(train,.32,.32,.18,0x30473f,x,.25,dz,12);wheel.rotation.z=Math.PI/2;wheels.push(wheel);
   }
   const robots=Array.from({length:4},(_,k)=>{
    const robot=group(root);robot.name='StationRobotPassenger';robot.scale.setScalar(.67);
    softBox(robot,.65,.65,.42,k%2?0x4eac96:0xe0ca79,0,.72,0);
    softBox(robot,.62,.45,.46,0xd7e5c9,0,1.29,0);
    box(robot,.5,.22,.04,0x213f43,0,1.32,-.25);
    for(const x of[-.13,.13])box(robot,.07,.07,.02,0x90e3d0,x,1.33,-.28);
    const limbs=[];
    for(const sign of[-1,1]){
     const leg=group(robot,sign*.19,.4,0);box(leg,.18,.4,.22,0x31725e,0,-.16,0);limbs.push(leg);
     const arm=group(robot,sign*.42,.95,0);softBox(arm,.16,.43,.2,0x31725e,0,-.16,0);limbs.push(arm);
    }
    return{robot,limbs,k};
   });
   stations.push({root,train,doors,wheels,robots,side,phase:side===-1?0:9});
  }
  label(parent,'ESTAÇÃO INTEGRO',0,4.2,z+8,6.8,'#f7f1d6','#245d48');
  label(parent,'20 · DESTINO CONQUISTADO',0,5.2,z-15,5.8,'#244d3f','#e6dc93');
 }
 function update(time,reducedMotion=false){for(const s of stations){
  const {root,train,doors,wheels,robots,side,phase}=s,age=((time+phase)%STATION_CYCLE+STATION_CYCLE)%STATION_CYCLE;
  const arrival=smooth(clamp(age/5)),departure=smooth(clamp((age-12)/4));
  root.userData.phase=age<5?'arriving':age<6?'opening':age<11?'unloading':age<12?'closing':age<16?'departing':'waiting';
  train.visible=age<16;
  train.position.set(0,.15-4.2*(1-smooth(clamp(age/2.8)))-4.2*smooth(clamp((age-13.2)/2.8)),16*(1-arrival)-16*departure);
  train.rotation.x=reducedMotion?0:.13*Math.sin(clamp(age/5)*Math.PI)-.13*Math.sin(clamp((age-12)/4)*Math.PI);
  const opened=smooth(clamp(age-5))*(1-smooth(clamp(age-11)));
  for(const {door,sign}of doors)door.position.z=sign*(.23+.62*opened);
  for(const wheel of wheels)wheel.rotation.x=(train.position.z-16)*2;
  for(const {robot,limbs,k}of robots){
   const elapsed=age-6-k*.65,exit=clamp(elapsed/1.2),walk=clamp((elapsed-1.2)/3.2);
   robot.visible=elapsed>=0&&elapsed<4.4;
   robot.position.set(-side*(.9+1.75*smooth(exit)),.75-.4*smooth(exit),-7.1*smooth(walk));
   robot.rotation.y=walk>0?0:side*Math.PI/2;
   for(let i=0;i<limbs.length;i++)limbs[i].rotation.x=reducedMotion?0:Math.sin(elapsed*10+([0,Math.PI,Math.PI,0][i]))*.4;
  }
 }}
 return{add,update};
}
