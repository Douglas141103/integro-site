import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {createBlue,toonRamp,outlineMaterial,PALETTE} from './actor.mjs';
import {platformAt} from './levels.mjs';
import {cameraFrame,placeCamera,bossMarker} from './camera.mjs';

const ball=(x,y,z)=>new T.SphereGeometry(1,12,8).scale(x,y,z);
const rand=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
export function createWorld(run,{document=globalThis.document}={}){
 const scene=new T.Scene();scene.background=new T.Color(0xb8e5ef);scene.fog=new T.Fog(scene.background,32,78);
 const world=new T.Group();scene.add(world);const ramp=toonRamp(),resources=new Set([ramp]),materials=new Map(),batches=new Map();
 const mat=(color,basic=false)=>{const key=color+':'+basic;if(!materials.has(key)){const m=basic?new T.MeshBasicMaterial({color}):new T.MeshToonMaterial({color,gradientMap:ramp});materials.set(key,m);resources.add(m);}return materials.get(key);};
 const hull=outlineMaterial(.013);resources.add(hull);
 function mesh(g,color,x=0,y=0,z=0,parent=world,outline=false){const m=new T.Mesh(g,mat(color));m.position.set(x,y,z);parent.add(m);resources.add(g);if(outline){const edge=new T.Mesh(g,hull);m.add(edge);}return m;}
 function batch(g,color,x,y,z){g.translate(x,y,z);const key=`${color}:${Math.floor(x/24)}`;if(!batches.has(key))batches.set(key,{color,parts:[]});batches.get(key).parts.push(g);}
 function tree(x,y,z,size=1,seed=1){
  batch(new T.CylinderGeometry(.1*size,.2*size,1.7*size,7),0x8c8870,x,y+.8*size,z);
  for(let i=0;i<5;i++){const a=i*2.3;batch(ball((.75+rand(seed+i)*.3)*size,.65*size,.65*size),i%2?0x75ae7b:0x91c287,x+Math.sin(a)*.5*size,y+(1.8+rand(seed+i)*.6)*size,z+Math.cos(a)*.4*size);}
  // Broad light brush shapes on the crown.
  batch(ball(.5*size,.09*size,.32*size),0xbcd79a,x-.3*size,y+2.52*size,z+.1);
 }
 function flower(x,y,z,k){
  batch(new T.CylinderGeometry(.015,.025,.24,4),0x6a9f70,x,y+.12,z);
  for(let i=0;i<4;i++)batch(ball(.055,.035,.055),k%2?0xffe1c0:0xf6f3ce,x+Math.sin(i*Math.PI/2)*.05,y+.26,z+Math.cos(i*Math.PI/2)*.05);
  batch(ball(.035,.03,.035),0xe5b66c,x,y+.28,z);
 }
 // Horizon: painted-colour bands with softly faceted volumes, kept behind play.
 for(let i=0;i<16;i++){
  const x=-15+i*12,y=-11+rand(i)*2;
  batch(ball(10,4+rand(i+10)*6,5),i%2?0x9ccbc0:0xa9d4c5,x,y,-28-rand(i+20)*10);
  batch(ball(6,3+rand(i+40)*4,4),i%2?0x85b9a7:0x93c6b4,x+4,-7,-15);
 }
 for(let i=0;i<18;i++)for(let j=0;j<3;j++)batch(ball(1.9+j*.3,.55+j*.08,.7),0xf4f6df,-10+i*11+j*1.1,10+rand(i+100)*5,-20-rand(i+50)*12);
 const water=mesh(new T.PlaneGeometry(run.level.length+120,90),0x82cdd3,run.level.length/2,-4.1,-20);water.rotation.x=-Math.PI/2;
 for(let i=0;i<45;i++)batch(new T.BoxGeometry(1+rand(i)*3,.01,.07),0xb4e4dc,-20+rand(i+2)*(run.level.length+50),-4.08,-25+rand(i+3)*45);
 const platforms=new Map();
 for(const p of run.level.platforms){
  const color=p.kind==='bridge'?0xb8edc9:p.kind==='root'?0x8c9270:p.kind==='lift'?0xb9ac7b:0x9ba994;
  if(p.kind==='land'){
   batch(new T.BoxGeometry(p.w,p.h,4.4),0x668977,p.x,p.y-p.h/2,-.65);
   batch(new T.BoxGeometry(p.w,p.h-1,4.42),0x4f7268,p.x,p.y-(p.h+1)/2,-.65);
   batch(new T.BoxGeometry(p.w+.04,.22,4.5),0x4a935f,p.x,p.y-.1,-.65);
   batch(new T.BoxGeometry(p.w,.12,4.42),0x99ce76,p.x,p.y-.02,-.65);
   for(let i=0;i<Math.floor(p.w/1.5);i++){
    const x=p.x-p.w/2+.5+i*1.5;
    batch(ball(.4,.16,.12),i%2?0x80a287:0x739781,x,p.y-.65-rand(i+p.x)*1.1,1.58);
    if(i%2===0)flower(x,p.y,1.05,i);
    if(i%4===1)tree(x,p.y,run.boss?-5:-3.5,run.boss?.85:.8+rand(i+p.x)*.6,i);
    for(let j=0;j<2;j++){const g=new T.ConeGeometry(.045,.22+rand(i+j)*.2,3);g.rotateZ((j-.5)*.4);batch(g,0x76a56d,x+j*.1,p.y+.14,1.3);}
   }
  }else if(p.kind==='root'){
   batch(new T.BoxGeometry(p.w,p.h,1.7),color,p.x,p.y-p.h/2,0);
   batch(new T.BoxGeometry(p.w+.3,.2,1.9),0x8abc7b,p.x,p.y+.05,0);
   for(let j=0;j<4;j++)batch(new T.CylinderGeometry(.06,.11,.4,5),0x859c69,p.x-p.w/2+j*1.5,p.y-p.h+.22,.88);
  }else{
   const g=new T.Group();world.add(g);g.position.set(p.x,p.y,0);platforms.set(p.id,g);
   mesh(new T.BoxGeometry(p.w,p.h,2.3),color,0,-p.h/2,0,g);
   mesh(new T.BoxGeometry(p.w+.05,.08,2.35),p.kind==='bridge'?0xe5ffd3:0xc6d8a6,0,.015,0,g);
   if(p.kind==='lift')for(const side of [-1,1])mesh(new T.CylinderGeometry(.025,.025,3.4,5),0x9b9274,side*(p.w/2-.2),1.5,-.8,g);
   if(p.kind==='bridge')for(let x=-p.w/2+.4;x<p.w/2;x+=.75)mesh(new T.BoxGeometry(.06,.02,2.4),0x77c9ad,x,.065,0,g);
  }
 }
 // Illustrated mill and ruined arches give each route its own landmark.
 const windmills=[];
 for(const x of run.boss?[]:run.level.theme==='mill'?[16,65,121]:[run.level.length-9]){
  const y=run.level.theme==='mill'&&x>60?2:0,z=-4.5;
  batch(new T.CylinderGeometry(.75,1.1,5,10),0xe3ddbb,x,y+2,z);
  batch(new T.ConeGeometry(1.2,1.5,10),0x84ac96,x,y+5.1,z);
  batch(new T.BoxGeometry(.4,.9,.07),0x558581,x,y+2.7,z+1);
  const wheel=new T.Group();wheel.position.set(x,y+3.8,z+1.3);world.add(wheel);windmills.push(wheel);
  mesh(ball(.22,.22,.15),0xb9aa85,0,0,0,wheel);
  for(let i=0;i<4;i++){const wing=new T.Group();wing.rotation.z=i*Math.PI/2;wheel.add(wing);mesh(new T.BoxGeometry(.1,2.6,.09),0x9c967b,0,1.1,0,wing);mesh(new T.BoxGeometry(.65,1.4,.07),0xf1e8c7,.28,1.55,.08,wing);}
 }
 const checkpointObjects=[];
 for(const [i,c] of run.level.checkpoints.entries()){
  const group=new T.Group();group.position.set(c.x,c.y,0);world.add(group);checkpointObjects.push(group);
  mesh(new T.CylinderGeometry(.18,.25,.28,8),0xb1b995,0,.14,0,group);
  mesh(new T.CylinderGeometry(.04,.05,1.7,7),0xd5d5b1,0,.95,0,group);
  const flag=mesh(new T.BoxGeometry(.6,.35,.035),0x6fbbc2,.3,1.65,0,group);group.userData.flag=flag;group.userData.index=i;
 }
 const switchObjects=[];
 for(const s of run.level.switches){
  const g=new T.Group();g.position.set(s.x,s.y,0);world.add(g);switchObjects.push(g);g.userData.group=s.group;
  mesh(new T.CylinderGeometry(.28,.38,.4,8),0x92a99a,0,.2,0,g);
  const ring=mesh(new T.TorusGeometry(.24,.05,6,24),0x85dce1,0,.75,.08,g);g.userData.ring=ring;
  const spiral=new T.BufferGeometry().setFromPoints(Array.from({length:40},(_,i)=>{const a=i*.3,r=.19*(1-i/40);return new T.Vector3(Math.cos(a)*r,.75+Math.sin(a)*r,.1);}));
  const lm=new T.LineBasicMaterial({color:0xeaffd4});resources.add(lm);resources.add(spiral);g.add(new T.Line(spiral,lm));
 }
 const seeds=run.level.seeds.map(s=>{const g=new T.Group();world.add(g);g.position.set(s.x,s.y,0);g.userData.id=s.id;g.userData.baseY=s.y;
  mesh(new T.IcosahedronGeometry(.22,0),0xffdb76,0,0,0,g,true);
  const a=mesh(ball(.15,.055,.08),0xb9d88d,-.11,.22,0,g);a.rotation.z=-.5;const b=mesh(ball(.15,.055,.08),0xd6e59d,.1,.24,0,g);b.rotation.z=.5;return g;});
 const enemies=run.enemies.map(e=>{const g=new T.Group();world.add(g);mesh(ball(.36,.32,.29),0x858eaa,0,.3,0,g,true);
  mesh(ball(.3,.08,.27),0xabb9b4,0,.5,0,g);for(const side of [-1,1]){mesh(ball(.07,.1,.04),0xfff3d4,side*.12,.35,.26,g);mesh(ball(.027,.047,.025),PALETTE.ink,side*.12,.34,.3,g);mesh(ball(.13,.06,.15),0x596c7e,side*.2,.06,.06,g);}return g;});
 let boss=null,bossRoot=null,bossModel=null,curled=null,attackLane=null,weakHalo=null;
 if(run.boss){
  boss=new T.Group();boss.name='Bront';world.add(boss);bossRoot=new T.Group();boss.add(bossRoot);
  bossModel=new T.Group();bossModel.name='Bront standing';bossModel.position.y=-.75;bossRoot.add(bossModel);
  mesh(ball(.95,.68,.7),0x426e65,0,.65,0,bossModel,true);
  for(let i=-2;i<=2;i++){const band=new T.TorusGeometry(.69-Math.abs(i)*.04,.06,6,20,Math.PI);band.rotateY(Math.PI/2);mesh(band,0xa1c66c,i*.25,.58,0,bossModel);}
  mesh(ball(.34,.28,.32),0xe3cf9b,-.82,.35,.13,bossModel,true);
  for(const side of [-1,1]){mesh(ball(.14,.28,.12),0x6a9e73,-.65,.86,side*.22,bossModel);mesh(ball(.08,.09,.035),0xfff4d8,-.97,.4,side*.26+.12,bossModel);mesh(ball(.03,.045,.025),PALETTE.ink,-.99,.4,side*.27+.14,bossModel);mesh(ball(.23,.1,.22),0x3e635c,side*.55,.1,.4,bossModel);}
  for(let i=0;i<7;i++)mesh(new T.ConeGeometry(.14,.3,5),i%2?0xc2d975:0x8bb757,(rand(i)-.5)*1.4,1.24,(rand(i+20)-.5)*.75,bossModel);
  const bud=mesh(new T.IcosahedronGeometry(.3,0),0x79f2f4,.6,.65,.62,bossModel,true);bud.material=mat(0x79f2f4,true);boss.userData.bud=bud;
  // A separate curled silhouette rotates around its centre, never around the feet.
  curled=new T.Group();curled.name='Bront rolling';bossRoot.add(curled);
  mesh(ball(.64,.64,.59),0x426e65,0,0,0,curled,true);
  for(const z of [-.4,0,.4])mesh(new T.TorusGeometry(Math.sqrt(.64**2-z**2),.055,6,24),0xa1c66c,0,0,z,curled);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;mesh(ball(.14,.09,.08),0xc2d975,Math.cos(a)*.48,Math.sin(a)*.48,.49,curled);}
  const laneMat=new T.MeshBasicMaterial({color:0xe89458,transparent:true,opacity:.45,depthWrite:false});resources.add(laneMat);
  attackLane=mesh(new T.BoxGeometry(1,.018,1.15),0xe89458);attackLane.name='Bront attack warning';attackLane.material=laneMat;
  weakHalo=mesh(new T.TorusGeometry(1.04,.04,6,40),0x8affec);weakHalo.material=mat(0x8affec,true);weakHalo.name='Bront pulse target';
  // A sanctuary rather than another mill: stepping stones and the dormant lighthouse.
  for(let i=0;i<13;i++)batch(new T.CylinderGeometry(.37,.42,.06,7),0xd7dec0,1+i*1.5,.035,-.65);
  for(const x of [-1,21]){tree(x,0,-2.8,1.7,x+10);for(let i=0;i<5;i++)flower(x+(i-2)*.3,0,.7,i);}
  batch(new T.CylinderGeometry(1.3,1.7,.5,9),0x9ab3a0,17,.25,-6);
  batch(new T.CylinderGeometry(.65,.92,4.6,9),0xe4e5c5,17,2.6,-6);
  batch(new T.CylinderGeometry(.98,.85,.25,9),0x56877a,17,4.75,-6);
  batch(new T.ConeGeometry(1.15,1.1,9),0x3c8076,17,6,-6);
  for(const x of [16.45,17.55])batch(new T.CylinderGeometry(.08,.08,1.1,6),0xe4e5c5,x,5.3,-5.6);
  const beacon=mesh(new T.IcosahedronGeometry(.48,1),0xffdf85,17,5.25,-5.85);beacon.name='Orvalho beacon';boss.userData.beacon=beacon;
 }
 const goal=new T.Group();goal.position.set(run.level.end.x,run.level.end.y,0);world.add(goal);
 mesh(new T.CylinderGeometry(.45,.7,.3,10),0xc2c5a4,0,.15,0,goal);
 mesh(new T.CylinderGeometry(.13,.23,1.5,9),0xa2c089,0,.9,0,goal);
 const lantern=mesh(new T.IcosahedronGeometry(.38,1),0xffe5a1,0,1.9,0,goal,true);
 for(const side of [-1,1]){const leaf=mesh(ball(.38,.12,.18),0x8bba7c,side*.3,1.3,0,goal);leaf.rotation.z=side*.5;}
 if(run.level.boss)goal.position.z=-2;
 const pip=mesh(new T.SphereGeometry(.08,8,6),0xffe8a2,0,2,0);
 const shadowMat=new T.MeshBasicMaterial({color:0x46786e,transparent:true,opacity:.2,depthWrite:false});resources.add(shadowMat);
 const shadow=new T.Mesh(new T.CircleGeometry(.42,24),shadowMat);resources.add(shadow.geometry);shadow.rotation.x=-Math.PI/2;world.add(shadow);
 const pulseMat=new T.MeshBasicMaterial({color:0xc5fff4,transparent:true,opacity:.8,depthWrite:false,side:T.DoubleSide});resources.add(pulseMat);
 const pulse=new T.Mesh(new T.TorusGeometry(1,.025,6,48),pulseMat);resources.add(pulse.geometry);world.add(pulse);pulse.visible=false;
 const particleGeo=new T.IcosahedronGeometry(.04),particleMat=new T.MeshBasicMaterial({color:0xffedac});resources.add(particleGeo);resources.add(particleMat);
 const particles=Array.from({length:20},()=>{const p=new T.Mesh(particleGeo,particleMat);p.visible=false;world.add(p);return p;});let burstTime=-99,burst={x:0,y:0};
 const waveObjects=Array.from({length:4},()=>{const w=mesh(new T.TorusGeometry(.3,.07,6,16,Math.PI),0xe4b27d);w.visible=false;return w;});
 for(const {color,parts} of batches.values()){const g=mergeGeometries(parts);parts.forEach(g=>g.dispose());mesh(g,color);}
 const blue=createBlue(ramp);scene.add(blue.root);
 scene.add(new T.HemisphereLight(0xf0faff,0x597d82,.8));const key=new T.DirectionalLight(0xfff9ed,1.15);key.position.set(-3,9,7);scene.add(key);
 // Tiny authored cloth strokes. The texture is generated locally, with no asset/CDN fetch.
 if(document){const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d');if(ctx){ctx.fillStyle='#ffffff';ctx.fillRect(0,0,128,128);ctx.fillStyle='#e9b9af';ctx.beginPath();ctx.moveTo(0,60);ctx.lineTo(128,74);ctx.lineTo(128,83);ctx.lineTo(0,68);ctx.fill();ctx.fillStyle='#ffe1cf';ctx.fillRect(0,108,128,8);const t=new T.CanvasTexture(c);t.colorSpace=T.SRGBColorSpace;resources.add(t);blue.root.traverse(o=>{if(o.isMesh&&o.name==='Blue coral'){o.material.map=t;o.material.needsUpdate=true;}});}}
 function update(run,time,reduced=false){
  blue.pose(run.player,run.time,{pulseAge:run.pulseAge,won:run.status==='won',reduced});
  for(const p of run.level.platforms){const g=platforms.get(p.id);if(!g)continue;const at=platformAt(p,run.time);g.position.set(at.x,at.y,0);g.visible=p.kind!=='bridge'||(run.bridges[p.group]||0)>0;if(p.kind==='bridge'&&run.bridges[p.group]<1)g.visible=run.bridges[p.group]>0&&(reduced||Math.floor(time*8)%2===0);}
  for(const s of seeds){s.visible=!run.collected.has(s.userData.id);s.rotation.y=time;s.position.y=s.userData.baseY+(reduced?0:Math.sin(time*2+s.position.x)*.07);}
  enemies.forEach((g,i)=>{const e=run.enemies[i];g.visible=!e.freed;g.position.set(e.x,e.y,0);g.rotation.z=e.stun?Math.sin(time*12)*.1:0;g.scale.y=e.stun?.8:1+Math.sin(time*7)*.04;});
  checkpointObjects.forEach(g=>{g.userData.flag.material=g.userData.index<=run.checkpoint?mat(0xffdb76):mat(0x6fbbc2);});
  switchObjects.forEach(g=>{g.userData.ring.rotation.z=time*.4;g.userData.ring.scale.setScalar((run.bridges[g.userData.group]||0)>0?1.2:1);});
  windmills.forEach(g=>g.rotation.z=-run.time*.24);lantern.rotation.y=time*.5;
  pip.position.set(run.player.x-1.15,run.player.y+1.9+Math.sin(time*2)*.15,.3);
  let ground=-4;for(const s of run.surfaces())if(Math.abs(s.x-run.player.x)<s.w/2&&s.y<=run.player.y+.05)ground=Math.max(ground,s.y);
  shadow.position.set(run.player.x,ground+.035,0);shadow.scale.setScalar(Math.max(.45,1-(run.player.y-ground)*.09));
  pulse.visible=run.pulseAge<.45;pulse.position.set(run.pulseX,run.pulseY,.6);pulse.scale.setScalar(.2+run.pulseAge*6);pulseMat.opacity=Math.max(0,.8-run.pulseAge*1.8);
  if(boss){const b=run.boss,rolling=b.phase==='roll',resting=b.phase==='rest';boss.position.set(b.x,.02,0);
   bossRoot.rotation.z=rolling?-run.time*10*b.dir:0;bossRoot.scale.y=resting?.8:1;bossRoot.position.y=rolling?.72:resting?.6:.75;
   bossModel.visible=!rolling;curled.visible=rolling;bossModel.scale.x=b.dir>0?-1:1;
   boss.userData.bud.visible=resting||b.phase==='freed';boss.userData.beacon.material=mat(b.phase==='freed'?0xffe6a0:0x699d9c,b.phase==='freed');
   const target=b.dir<0?run.level.arena.rollLeft:run.level.arena.rollRight;
   attackLane.visible=b.phase==='warn';attackLane.position.set((b.x+target)/2,.07,0);attackLane.scale.x=Math.max(.1,Math.abs(target-b.x));
   weakHalo.visible=resting;weakHalo.position.set(b.x,.8,.85);weakHalo.scale.setScalar(reduced?1:1+Math.sin(time*5)*.05);
  }
  waveObjects.forEach((w,i)=>{const data=run.waves[i];w.visible=!!data;if(data)w.position.set(data.x,.05,.1);});
  particles.forEach((p,i)=>{const age=run.time-burstTime;p.visible=age>=0&&age<.8;if(p.visible){const a=i*2.4;p.position.set(burst.x+Math.cos(a)*age*2,burst.y+Math.sin(a)*age*2+age-age*age*2,.3+Math.sin(i)*age);p.scale.setScalar(1-age/.8);}});
 }
 return {scene,blue,update,emit(e){if(['seed','boss-hit','checkpoint','won'].includes(e.type)){burstTime=run.time;burst={x:e.x??run.player.x,y:e.y??run.player.y+1};}},dispose(){blue.dispose();resources.forEach(r=>r.dispose());}};
}

export class BlueScene{
 constructor(canvas,quality='auto'){
  this.canvas=canvas;this.quality=quality;this.renderer=new T.WebGLRenderer({canvas,antialias:quality!=='low',alpha:false,powerPreference:'high-performance'});
  this.renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,quality==='low'?1:1.6));this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.NoToneMapping;
  this.camera=new T.OrthographicCamera(-11,11,6,-6,.1,120);this.frame=null;this.world=null;this.width=0;this.height=0;
 }
 setLevel(run){this.world?.dispose();this.world=createWorld(run);this.frame=null;this.width=0;}
 render(run,dt,time,reduced=false){
  const w=Math.max(1,this.canvas.clientWidth),h=Math.max(1,this.canvas.clientHeight),target=cameraFrame(run,w,h,this.frame?.groundY);
  if(this.width!==w||this.height!==h){this.width=w;this.height=h;this.renderer.setSize(w,h,false);this.frame=null;}
  const lerp=reduced?1:1-Math.exp(-dt*5),previous=this.frame||target;
  this.frame={...target,x:T.MathUtils.lerp(previous.x,target.x,lerp),y:T.MathUtils.lerp(previous.y,target.y,lerp)};
  placeCamera(this.camera,this.frame);this.world.update(run,time,reduced);
  this.renderer.render(this.world.scene,this.camera);
 }
 emit(e){this.world?.emit(e);}
 getBossMarker(run){return run.boss?bossMarker(this.camera,run.boss):null;}
 dispose(){this.world?.dispose();this.world=null;this.renderer.dispose();}
}
