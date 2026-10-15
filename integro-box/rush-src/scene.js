import * as T from 'three';
import {REGIONS,SHOP,rng} from './rules.mjs';

// All scenery and characters are original, built from shared low-poly geometry.
export class RushScene {
 constructor(canvas,quality='auto'){
  this.canvas=canvas;this.quality=quality;this.geometries=new Map();this.materials=new Map();
  this.renderer=new T.WebGLRenderer({canvas,antialias:quality!=='low',alpha:false,powerPreference:'high-performance'});
  this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.25;
  this.scene=new T.Scene();this.camera=new T.PerspectiveCamera(59,1,.1,270);
  this.scene.add(new T.HemisphereLight(0xf2fcff,0x4e5d75,2.7));
  const sun=new T.DirectionalLight(0xfff1da,3);sun.position.set(-20,50,15);this.scene.add(sun);
  this.world=new T.Group();this.scene.add(this.world);this.objects=new Map();this.scenery=[];this.particles=[];this.resize();
 }
 mat(color,metal=0){const key=color+':'+metal;if(!this.materials.has(key))this.materials.set(key,new T.MeshStandardMaterial({color,roughness:metal?.28:.8,metalness:metal}));return this.materials.get(key);}
 geo(kind){if(!this.geometries.has(kind)){const g=kind==='ball'?new T.SphereGeometry(1,12,8):kind==='rock'?new T.IcosahedronGeometry(1,0):kind==='cyl'?new T.CylinderGeometry(1,1,1,12):kind==='cone'?new T.ConeGeometry(1,1,8):kind==='ring'?new T.TorusGeometry(1,.2,6,16):new T.BoxGeometry(1,1,1);this.geometries.set(kind,g);}return this.geometries.get(kind);}
 mesh(g,kind,color,x,y,z,sx=1,sy=sx,sz=sx,metal=0){const m=new T.Mesh(this.geo(kind),this.mat(color,metal));m.position.set(x,y,z);m.scale.set(sx,sy,sz);g.add(m);return m;}
 box(g,c,x,y,z,sx,sy,sz){return this.mesh(g,'box',c,x,y,z,sx,sy,sz);}
 ball(g,c,x,y,z,r){return this.mesh(g,'ball',c,x,y,z,r);}
 group(parent=this.world){const g=new T.Group();parent.add(g);return g;}
 resize(){const w=this.canvas.clientWidth||960,h=this.canvas.clientHeight||600;this.renderer.setPixelRatio(Math.min(this.quality==='low'?1:1.7,window.devicePixelRatio||1));this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.fov=w<h?72:59;this.camera.updateProjectionMatrix();}
 setLevel(run,progress){
  this.aura?.material.dispose();this.world.clear();this.objects.clear();this.scenery=[];this.particles=[];this.run=run;this.region=REGIONS[run.level.region];const r=this.region;
  this.scene.background=new T.Color(r.sky);this.scene.fog=new T.Fog(r.fog,65,215);
  this.mesh(this.world,'box',r.water,0,-5,-95,500,.2,500);
  // Separate lane slabs leave actual openings at the gap obstacles.
  this.roadParts=[];this.matrix=new T.Matrix4();this.rotation=new T.Quaternion();this.position=new T.Vector3();this.scale=new T.Vector3();
  for(let lane=-1;lane<=1;lane++){const slabs=new T.InstancedMesh(this.geo('box'),this.mat(r.road),120);slabs.instanceMatrix.setUsage(T.DynamicDrawUsage);slabs.frustumCulled=false;slabs.userData.lane=lane;this.world.add(slabs);this.roadParts.push(slabs);}
  this.lines=new T.InstancedMesh(this.geo('box'),this.mat(0xf7e6b7),100);this.lines.instanceMatrix.setUsage(T.DynamicDrawUsage);this.lines.frustumCulled=false;this.world.add(this.lines);
  const count=this.quality==='low'?12:this.quality==='high'?24:16;for(let i=0;i<count;i++){const g=this.makeScenery(i);g.userData.slot=i*288/count;this.scenery.push(g);}
  this.player=this.makePlayer(progress);this.player.position.z=0;
  this.shadow=this.mesh(this.world,'cyl',0x314554,0,.015,0,.55,.012,.4);
  this.aura=this.mesh(this.player,'ball',0x63e6ff,0,1.1,0,1.15,1.35,1.15);this.aura.material=new T.MeshBasicMaterial({color:0x72efff,transparent:true,opacity:.15,depthWrite:false});this.aura.visible=false;
  this.trailColor=SHOP.find(x=>x.id===progress.equipped.trail)?.color||0x6cffe0;
  this.trail=[];for(let i=0;i<10;i++){const p=this.ball(this.world,this.trailColor,0,.1,0,.07+i*.008);this.trail.push(p);}
 }
 makePlayer(p){
  const g=this.group(),suit=SHOP.find(x=>x.id===p.equipped.suit)?.color||0x14b5a5;
  this.body=this.group(g);this.mesh(this.body,'ball',suit,0,1.05,0,.36,.45,.24);
  this.box(this.body,0xffce6a,0,1.16,.23,.13,.21,.035);this.mesh(this.body,'cyl',0xf3b686,0,1.5,0,.12,.16,.12);
  this.ball(this.body,0xf3b686,0,1.83,0,.32);this.mesh(this.body,'ball',0x283244,0,2.03,-.04,.33,.18,.3);
  // A face is visible when the character turns slightly during lane changes.
  for(const x of[-.12,.12])this.ball(this.body,0x263542,x,1.85,-.294,.028);
  this.arms=[];this.legs=[];
  for(const side of[-1,1]){const a=this.group(this.body);a.position.set(side*.4,1.36,0);this.mesh(a,'ball',suit,0,-.17,0,.12,.23,.12);this.mesh(a,'ball',0xf3b686,0,-.4,0,.1,.2,.1);this.arms.push(a);
   const l=this.group(this.body);l.position.set(side*.18,.73,0);this.mesh(l,'ball',0x23364e,0,-.24,0,.14,.3,.14);this.mesh(l,'ball',0xf5f7f3,0,-.59,-.07,.16,.13,.25);this.legs.push(l);
  }
  const head=SHOP.find(x=>x.id===p.equipped.head);if(head){const c=head.color;if(head.model==='halo'){const m=this.mesh(this.body,'ring',c,0,2.39,0,.39);m.rotation.x=Math.PI/2;}else if(head.model==='crown'){this.mesh(this.body,'cyl',c,0,2.14,0,.34,.13,.34);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;this.mesh(this.body,'cone',c,Math.sin(a)*.29,2.29,Math.cos(a)*.29,.08,.25,.08);}}else{this.mesh(this.body,'ball',c,0,2.1,0,.35,.18,.34);this.box(this.body,c,0,2.08,-.25,head.model==='hat'?.95:.6,.06,head.model==='hat'?.8:.45);}}
  const back=SHOP.find(x=>x.id===p.equipped.back);if(back){if(back.model==='wings'){for(const side of[-1,1]){const w=this.mesh(this.body,'ball',back.color,side*.49,1.26,.23,.23,.65,.09);w.rotation.z=side*-.55;}}else{this.mesh(this.body,'ball',back.color,0,1.08,.3,.28,.35,.16);this.box(this.body,0xffe6a0,0,1.1,.46,.25,.1,.04);}}
  return g;
 }
 makeScenery(i){const g=this.group(),random=rng(this.run.level.seed+i*121),side=i%2?1:-1,x=side*(7+random()*13);g.position.x=x;
  const r=this.region,type=r.type;this.mesh(g,'rock',type==='snow'?0xd9edf4:type==='lava'?0x3e3544:0x9d9b74,0,-3.9,0,5+random()*4,3.7,6);
  this.mesh(g,'cyl',type==='island'?0xe6d2a5:type==='ruins'?0x689b6a:type==='sky'?0xa4a2cf:type==='snow'?0xe1f2f7:0x5c4c55,0,-1.1,0,5,.7,5);
  if(type==='island'){
   const trunk=this.mesh(g,'cyl',0xaa7f4c,0,2,0,.28,5,.34);trunk.rotation.z=side*.15;
   for(let j=0;j<7;j++){const a=j*Math.PI*2/7;const leaf=this.mesh(g,'ball',j%2?0x37a989:0x72c887,Math.cos(a)*1.15,4.3,Math.sin(a)*1.15,2,.13,.55);leaf.rotation.y=-a;leaf.rotation.z=Math.cos(a)*.2;}
   for(let j=0;j<3;j++)this.ball(g,0x7a573e,(j-1)*.3,4,0,.25);
   for(let j=0;j<3;j++)this.mesh(g,'rock',0xecbd91,random()*4-2,-.2,random()*3-1,1,.5,.7);
  }else if(type==='ruins'){
   for(const a of[-1.5,1.5]){this.mesh(g,'cyl',0xb9c6a0,a,1.7,0,.46,4.7,.46);this.box(g,0xd1d9b9,a,4,0,1.1,.4,1.1);this.box(g,0x699d68,a,.3,0,1.2,.3,1.2);}this.box(g,0xaab998,0,4.4,0,4.1,.6,1.1);
   for(let j=0;j<5;j++)this.ball(g,0x429b76,random()*4-2,random()*4,0,.35);
  }else if(type==='snow'){
   for(let j=0;j<3;j++){const h=5+random()*6,x=(j-1)*2.5;this.mesh(g,'cone',0x95b8ce,x,h*.32-1,0,2.6,h,2.6);this.mesh(g,'cone',0xf0f9ff,x,h*.65,0,1.35,h*.5,1.35);}
  }else if(type==='lava'){
   this.mesh(g,'cone',0x5e4354,0,3,0,4,9,4);this.mesh(g,'cone',0xfb7540,0,6.5,0,1.3,2,1.3);
   for(let j=0;j<4;j++)this.mesh(g,'rock',0xffae4e,(random()-.5)*3,7+random()*5,(random()-.5)*3,.2+random()*.3);
   const river=this.box(g,0xff7e2c,0,-.67,1,1.1,.12,7);river.rotation.y=.4;
  }else{
   for(let j=0;j<5;j++)this.mesh(g,'ball',0xeee6fc,random()*6-3,-1.4,random()*3,2.2,1,1.7);
   this.mesh(g,'ring',0xf8d89a,0,3.8,0,2);this.mesh(g,'cone',0xa4e2e7,0,1.8,0,.5,3,.5);
  }
  // Small waterfall ribbons flow from the island edges into the distance.
  if(type==='island'||type==='ruins'){this.box(g,0x74dce3,-side*3,-4.4,1,.65,7,.22);this.box(g,0xc5f8f2,-side*3-.1,-3.8,1.1,.12,6,.08);}
  return g;
 }
 makeObstacle(o){const g=this.group();g.userData=o;const type=o.type;
  if(type==='coin'){const m=this.mesh(g,'cyl',0xffd34f,0,1.05,0,.28,.08,.28,.55);m.rotation.x=Math.PI/2;this.mesh(g,'ring',0xffec9f,0,1.05,-.06,.19,.19,.19,.3);}
  if(type==='rock'){this.mesh(g,'rock',this.region.type==='snow'?0xb0deef:0x627d85,0,1,0,.95,1.1,.8);this.mesh(g,'rock',0x88a3a5,.4,.5,.2,.5);this.box(g,0xffc979,0,1,-.73,1.15,.18,.08);}
  if(type==='log'){const m=this.mesh(g,'cyl',0xa96c47,0,.52,0,.48,2,.48);m.rotation.z=Math.PI/2;for(const x of[-1.01,1.01]){const e=this.mesh(g,'cyl',0xe6c395,x,.52,0,.39,.035,.39);e.rotation.z=Math.PI/2;}}
  if(type==='arch'){for(const x of[-.98,.98])this.box(g,0x497681,x,1.65,0,.2,3.3,.4);this.box(g,0xf2b65d,0,2.2,0,2.3,1.65,.55);for(const x of[-.75,0,.75]){const stripe=this.box(g,0x355765,x,2.2,.29,.18,1.6,.025);stripe.rotation.z=-.3;}}
  if(type==='gap'){for(const z of[-1.05,1.05])this.box(g,0xffc75f,0,.05,z,2.45,.1,.2);for(const x of[-1.13,1.13])this.box(g,0xffc75f,x,.04,0,.14,.08,2.1);this.box(g,0x193c52,0,-2.3,0,2.4,.08,2.3);}
  if(type==='magnet'){const ring=this.mesh(g,'ring',0xfa687c,0,1.25,0,.46);ring.rotation.z=Math.PI;for(const x of[-.37,.37])this.box(g,0xe6f9ff,x,1.02,0,.2,.2,.2);}
  if(type==='shield'){this.mesh(g,'rock',0x63e2ff,0,1.2,0,.48,.62,.25,.4);this.box(g,0xf6ffed,0,1.2,.26,.12,.5,.04);}
  return g;
 }
 draw(run,time,paused=false){
  if(!this.player)return;const travel=run.time*run.level.speed;
  const gaps=run.track.filter(o=>o.type==='gap'&&Math.abs((o.time-run.time)*run.level.speed)<285);
  for(const slabs of this.roadParts){const lane=slabs.userData.lane;for(let i=0;i<120;i++){const z=18-((i*2.4-travel%288+288)%288),gap=gaps.some(o=>o.lane===lane&&Math.abs(z+(o.time-run.time)*run.level.speed)<1.25);this.position.set(lane*2.55,-.32,z);this.scale.set(gap?0:2.51,.58,2.42);this.matrix.compose(this.position,this.rotation,this.scale);slabs.setMatrixAt(i,this.matrix);}slabs.instanceMatrix.needsUpdate=true;}
  for(let i=0;i<100;i++){this.position.set(i%2?3.85:-3.85,.025,18-((Math.floor(i/2)*6-travel%300+300)%300));this.scale.set(.1,.08,3.5);this.matrix.compose(this.position,this.rotation,this.scale);this.lines.setMatrixAt(i,this.matrix);}this.lines.instanceMatrix.needsUpdate=true;
  for(const g of this.scenery)g.position.z=20-((g.userData.slot-travel%288+288)%288);
  const wanted=new Set();for(const o of run.track){const z=-(o.time-run.time)*run.level.speed;if(z < -185 || z>12||run.claimed.has(o.id))continue;wanted.add(o.id);let g=this.objects.get(o.id);if(!g){g=this.makeObstacle(o);this.objects.set(o.id,g);}g.position.set(o.lane*2.55,0,z);if(['coin','magnet','shield'].includes(o.type)){g.rotation.y=time*1.6+o.id;g.position.y=Math.sin(time*2+o.id)*.1;}}
  for(const [id,g]of this.objects)if(!wanted.has(id)){this.world.remove(g);this.objects.delete(id);}
  this.player.position.set(run.x,run.y,0);this.player.rotation.y=(run.lane*2.55-run.x)*-.13;this.player.rotation.z=(run.lane*2.55-run.x)*-.045;
  const stride=paused?0:Math.sin(run.time*16)*.7;this.body.rotation.x=run.slide>0?-1.15:0;this.body.position.y=run.slide>0?-.1:Math.abs(Math.sin(run.time*16))*.035;
  this.arms.forEach((a,i)=>a.rotation.x=run.jump?-.6:stride*(i?1:-1));this.legs.forEach((a,i)=>a.rotation.x=run.jump?.35:stride*(i?-1:1));
  this.player.visible=run.invincible<=0||Math.floor(time*12)%2===0;this.aura.visible=run.shield>0;this.shadow.position.x=run.x;this.shadow.scale.x=.55-run.y*.05;
  this.trail.forEach((p,i)=>{p.visible=!paused;p.position.set(run.x+Math.sin(time*3+i)*.14,.12+i*.015,1+i*.22);});
  this.camera.position.set(run.x*.18,5.3,this.camera.aspect<1?10.7:9.3);this.camera.lookAt(run.x*.12,1,-15);
  this.renderer.render(this.scene,this.camera);
 }
 dispose(){this.aura?.material.dispose();for(const g of this.geometries.values())g.dispose();for(const m of this.materials.values())m.dispose();this.world.clear();this.renderer.dispose();}
}
