import {createCageEffect} from './cage-model.mjs';
import {createAlgaeField} from './algae.mjs';
import {clampZoom,sharkCameraPose,FIRST_PERSON_ZOOM} from './camera.mjs';
import * as T from 'three';
import {createFish} from './fish.mjs';
import {steerFish} from './motion.mjs';
import {makeOcean} from './ocean.mjs';
import {REGIONS,SHOP,regionAt,lengthFor,canEat,eat,eatAlgae,applyCageCatch,damage,respawn,discover,claimMissions} from './rules.mjs';
const clamp=T.MathUtils.clamp;
export class SharkScene{
 constructor(canvas,progress,notify){
  this.canvas=canvas;this.p=progress;this.notify=notify;this.time=0;this.health=3;this.invincible=5;this.stamina=100;this.bite=0;this.yaw=.65;this.pitch=progress.cameraZoom<=FIRST_PERSON_ZOOM?0:.24;this.zoom=clampZoom(progress.cameraZoom);this.region=regionAt(progress.position.x,progress.position.z);this.waypoint=null;this.fish=[];this.pearls=[];this.bursts=[];
  this.renderer=new T.WebGLRenderer({canvas,antialias:progress.quality!=='low',alpha:false,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,progress.quality==='low'?1:1.6));this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;this.renderer.setClearColor(REGIONS[this.region].water);
  this.scene=new T.Scene();this.scene.background=new T.Color(REGIONS[this.region].water);this.scene.fog=new T.Fog(REGIONS[this.region].water,75,330);this.camera=new T.PerspectiveCamera(57,1,.2,700);
  this.scene.add(new T.HemisphereLight(0xc1fff5,0x194263,1.45));const sun=new T.DirectionalLight(0xfff3d8,1.7);sun.position.set(30,100,40);this.scene.add(sun);const fill=new T.DirectionalLight(0x8ffaff,.45);fill.position.set(-60,20,-50);this.scene.add(fill);
  this.ocean=makeOcean(this.scene);this.player=createFish({shark:true});this.scene.add(this.player.group);this.position=new T.Vector3(progress.position.x,progress.position.y,progress.position.z);this.player.group.position.copy(this.position);this.heading=0;this.velocity=new T.Vector3();this.applyStyle();
  this.pearlGeo=new T.SphereGeometry(.75,10,7);this.pearlMaterial=new T.MeshToonMaterial({color:0xffe6a3,emissive:0xd99037,emissiveIntensity:.4});this.burstGeo=new T.IcosahedronGeometry(.17,0);this.burstMaterial=new T.MeshBasicMaterial({color:0xc4fff4,transparent:true,opacity:.85});
  const count=progress.quality==='low'?34:matchMedia('(pointer:coarse)').matches?46:64;
  for(let i=0;i<count;i++){const rig=createFish({shark:i>7&&i%13===0,variant:Math.floor(i/4)});this.scene.add(rig.group);const f={rig,index:i,phase:Math.random()*6,dir:Math.random()*Math.PI*2,level:0,school:Math.floor(i/4),depth:24,speed:2.6,bank:0};this.fish.push(f);this.spawn(f,true);}
  // An approachable starter school is always in view for the first meal.
  this.fish.slice(0,8).forEach((f,i)=>{f.level=Math.max(0,progress.level-1);f.rig.group.scale.setScalar(lengthFor(f.level)/4);f.rig.group.position.set(this.position.x+7+i*3,this.position.y+Math.sin(i)*2,this.position.z+Math.cos(i)*7);f.depth=f.rig.group.position.y;f.dir=.15;});
  for(let i=0;i<32;i++){const mesh=new T.Mesh(this.pearlGeo,this.pearlMaterial);this.scene.add(mesh);const pearl={mesh,phase:Math.random()*6};this.pearls.push(pearl);this.placePearl(pearl);}
  this.cageEffect=createCageEffect(this.scene);this.algae=createAlgaeField(this.scene,progress.quality==='low'?24:36);this.algae.seed(this.position);
  this.ring=new T.Mesh(new T.TorusGeometry(1,.025,6,48),new T.MeshBasicMaterial({color:0x90ffe4,transparent:true,opacity:.65}));this.ring.rotation.x=Math.PI/2;this.scene.add(this.ring);
  this.camera.position.copy(this.position).add(new T.Vector3(12,12,18));this.resize();this.update(0,{x:0,z:0,y:0},false);
 }
 fishForCage(capacity){return this.fish.filter(f=>canEat(this.p.level,f.level)&&f.rig.group.position.distanceTo(this.position)<=55).sort((a,b)=>a.rig.group.position.distanceTo(this.position)-b.rig.group.position.distanceTo(this.position)).slice(0,capacity).map(f=>f.level);}
 catchCage(cast){const result=applyCageCatch(this.p,cast);if(!result)return;for(const level of cast.levels){const fish=this.fish.find(f=>f.level===level&&f.rig.group.position.distanceTo(this.position)<=55);if(fish)this.spawn(fish);}
  this.bite=1;this.cageEffect.show(this.position,lengthFor(this.p.level),cast.capacity,this.heading);this.burst(this.position,0xffdc83);this.checkMissions();this.notify('cage',`Pesca: ${result.count} peixes · +${result.xp} XP`);
 }
 resize(){const w=this.canvas.clientWidth||innerWidth,h=this.canvas.clientHeight||innerHeight;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
 applyStyle(){const item=SHOP.find(i=>i.id===this.p.skin);this.player.tint(item?.color||0x65cfea);this.player.crown.visible=this.p.accessories.includes('crown');}
 spawn(f,first=false){const a=Math.random()*Math.PI*2,r=first?18+Math.random()*95:75+Math.random()*65;const reg=REGIONS[this.region];const roll=Math.random();
  f.level=roll<.70?Math.max(0,this.p.level-1-Math.floor(Math.random()*4)):Math.min(60,Math.max(this.p.level+1+Math.floor(Math.random()*5),reg.level+Math.floor(Math.random()*5)));
  f.rig.group.position.set(clamp(this.position.x+Math.cos(a)*r,-880,880),clamp(this.position.y+(Math.random()-.5)*30,8,88),clamp(this.position.z+Math.sin(a)*r,-580,580));f.rig.group.scale.setScalar(lengthFor(f.level)/4);f.rig.group.visible=true;f.cooldown=0;f.depth=f.rig.group.position.y;f.speed=2.6;f.bank=0;
 }
 placePearl(p){const a=Math.random()*Math.PI*2,r=12+Math.random()*110;p.mesh.position.set(clamp(this.position.x+Math.cos(a)*r,-875,875),clamp(this.position.y+(Math.random()-.5)*35,8,90),clamp(this.position.z+Math.sin(a)*r,-575,575));}
 burst(pos,color=0xc4fff4){for(let i=0;i<8;i++){const m=new T.Mesh(this.burstGeo,this.burstMaterial);m.position.copy(pos);m.scale.setScalar(1+this.p.level*.06);this.scene.add(m);this.bursts.push({mesh:m,v:new T.Vector3(Math.random()-.5,Math.random(),Math.random()-.5).multiplyScalar(5),life:.7});}if(color!==0xc4fff4)this.burstMaterial.color.set(color);else this.burstMaterial.color.set(0xc4fff4);}
 setZoom(value){const was=this.firstPerson;this.zoom=clampZoom(value);this.p.cameraZoom=this.zoom;if(was!==this.firstPerson)this.pitch=this.firstPerson?0:.24;}
 get firstPerson(){return this.zoom<=FIRST_PERSON_ZOOM;}
 moveCamera(dx,dy){this.yaw-=dx*.005;this.pitch=clamp(this.pitch+dy*.004,this.firstPerson?-.95:.12,1.08);}
 update(dt,input,playing=true){
  dt=clamp(dt,0,.04);this.time+=dt;const t=this.time,p=this.p,len=lengthFor(p.level);this.invincible=Math.max(0,this.invincible-dt);this.bite=Math.max(0,this.bite-dt*4);
  const mx=input.x||0,mz=input.z||0,my=input.y||0,amount=Math.min(1,Math.hypot(mx,mz)),boost=playing&&input.boost&&this.stamina>2&&(amount>0||my!==0);
  if(playing){
   this.stamina=clamp(this.stamina+(boost?-27:18)*dt,0,100);const speed=(18+p.level*.10)*(1+p.upgrades.speed*.12)*(boost?2.5:1);
   const vx=Math.cos(this.yaw)*mx-Math.sin(this.yaw)*mz,vz=-Math.sin(this.yaw)*mx-Math.cos(this.yaw)*mz,norm=Math.max(1,Math.hypot(vx,vz));
   this.velocity.lerp(new T.Vector3(vx/norm*speed,my*speed*.7,vz/norm*speed),1-Math.exp(-dt*5));this.position.addScaledVector(this.velocity,dt);this.position.x=clamp(this.position.x,-875,875);this.position.z=clamp(this.position.z,-575,575);this.position.y=clamp(this.position.y,Math.max(5,len*.35),95);
   if(amount>.06){const target=Math.atan2(-vz,vx);this.heading+=Math.atan2(Math.sin(target-this.heading),Math.cos(target-this.heading))*Math.min(1,dt*8);}
   this.player.group.rotation.z=T.MathUtils.lerp(this.player.group.rotation.z,my*.22,dt*5);
   Object.assign(p.position,{x:this.position.x,y:this.position.y,z:this.position.z});const reg=regionAt(this.position.x,this.position.z);
   if(reg!==this.region){this.region=reg;const fresh=discover(p,reg);this.notify('region',`${REGIONS[reg].name}${fresh?' · +100 moedas':''}`);this.checkMissions();}
  }
  const water=new T.Color(REGIONS[this.region].water);this.scene.background.lerp(water,Math.min(1,dt*1.5));this.scene.fog.color.copy(this.scene.background);
  this.player.group.position.copy(this.position);this.player.group.position.y+=Math.sin(t*1.9)*.10;this.player.group.rotation.y=this.heading;this.player.group.scale.lerp(new T.Vector3().setScalar(len/4),Math.min(1,dt*3));this.player.animate(t,boost?1.65:.8+amount*.4,this.bite);this.player.group.visible=this.invincible<=0||Math.sin(t*17)>-.5;
  const pose=sharkCameraPose(this.position,this.yaw,this.pitch,this.zoom,len);this.player.group.visible=!pose.firstPerson&&this.player.group.visible;
  // Eye view follows steering immediately; an external camera eases behind it.
  if(pose.firstPerson||this.wasFirstPerson!==pose.firstPerson)this.camera.position.copy(pose.eye);else this.camera.position.lerp(pose.eye,playing?Math.min(1,dt*6):1);this.camera.lookAt(pose.target);this.wasFirstPerson=pose.firstPerson;
  this.algae.update(dt,t,this.position,playing,Math.max(2.2,len*.46),pos=>{const reward=eatAlgae(p);this.bite=1;this.burst(pos,0xb6f97c);this.notify(reward.evolved?'evolve':'algae',reward.evolved?`Evolução ${p.level}! Você cresceu!`:`Alga nutritiva · +${reward.xp} XP`);this.checkMissions();});

  for(const f of this.fish){
   const pos=f.rig.group.position,d=pos.distanceTo(this.position),edible=canEat(p.level,f.level);if(d>190){this.spawn(f);continue;}
   let swim={speed:f.speed,turn:0};
   if(playing){swim=steerFish(f,this.fish,{x:this.position.x,y:this.position.y,z:this.position.z,level:p.level,length:len,protected:this.invincible>0},dt,t);
    const preyLength=lengthFor(f.level),collision=edible?len*.40+preyLength*.15:len*.20+preyLength*.35;
    if(d<collision){if(edible){const reward=eat(p,f.level);if(reward){this.bite=1;this.burst(pos);this.notify(reward.evolved?'evolve':'eat',reward.evolved?`Evolução ${p.level}! Você cresceu!`:`+${reward.xp} XP  ·  +${reward.coins} moedas`);this.checkMissions();this.spawn(f);}}
     else if(this.invincible<=0&&f.level>p.level){const result=damage(p,this.health);this.health=result.health;this.invincible=4;this.burst(this.position,0xffcc9e);this.notify('hurt',result.blocked?'Sua bolha bloqueou o ataque!':'Peixe maior! Fuja com o impulso.');const away=this.position.clone().sub(pos).normalize();this.position.addScaledVector(away,5);if(!this.health){respawn(p);this.position.set(p.position.x,p.position.y,p.position.z);this.health=3;this.invincible=7;this.fish.forEach(f=>this.spawn(f));this.notify('respawn','Fôlego recuperado! Você manteve sua evolução e perdeu 25% do XP atual.');}}
    }
   }
   f.rig.group.visible=d<170;f.rig.outline.visible=d<55;f.rig.animate(t+f.phase,.5+swim.speed*.09,0,swim.turn);
  }
  for(const q of this.pearls){q.mesh.position.y+=Math.sin(t*2+q.phase)*dt*.2;q.mesh.rotation.y=t;const d=q.mesh.position.distanceTo(this.position);if(d>180)this.placePearl(q);else if(playing){if(p.upgrades.magnet&&d<18)q.mesh.position.lerp(this.position,dt*4);if(d<Math.max(1.8,len*.34)){p.coins+=8;this.burst(q.mesh.position,0xffe6a3);this.notify('pearl','+8 moedas');this.placePearl(q);}}}
  for(let i=this.bursts.length-1;i>=0;i--){const b=this.bursts[i];b.life-=dt;b.mesh.position.addScaledVector(b.v,dt);b.mesh.scale.multiplyScalar(1-dt);if(b.life<=0){this.scene.remove(b.mesh);this.bursts.splice(i,1);}}
  if(playing&&p.accessories.includes('trail')&&amount>.2&&Math.floor(t*7)!==this.lastTrail){this.lastTrail=Math.floor(t*7);this.burst(this.position.clone().add(new T.Vector3(-Math.cos(this.heading),0,Math.sin(this.heading)).multiplyScalar(len*.45)),0xb8bcff);}
  this.ring.position.copy(this.position);this.ring.position.y-=len*.25+.3;this.ring.scale.setScalar(len*.65);this.ring.visible=playing&&!this.firstPerson;this.cageEffect.update(dt);this.ocean.update(t,this.position);this.renderer.render(this.scene,this.camera);
 }
 checkMissions(){for(const m of claimMissions(this.p))this.notify('mission',`${m.name} · +${m.reward} moedas!`);}
 labels(){const width=this.canvas.clientWidth,height=this.canvas.clientHeight;return this.fish.map(f=>{const pos=f.rig.group.position,d=pos.distanceTo(this.position);if(d>70+lengthFor(this.p.level))return null;const v=pos.clone().add(new T.Vector3(0,lengthFor(f.level)*.45+1,0)).project(this.camera);if(v.z< -1||v.z>1||Math.abs(v.x)>.95||(-.5*v.y+.5)*height<145||(-.5*v.y+.5)*height>height-120)return null;return {x:(v.x*.5+.5)*width,y:(-.5*v.y+.5)*height,level:f.level,edible:canEat(this.p.level,f.level),distance:d};}).filter(Boolean).sort((a,b)=>a.distance-b.distance).slice(0,12);}
 map(canvas){const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);for(const [i,r] of REGIONS.entries()){ctx.fillStyle=r.color+'55';ctx.fillRect((i%3)*w/3,Math.floor(i/3)*h/2,w/3-2,h/2-2);ctx.fillStyle='#dcfff3';ctx.font='bold 11px sans-serif';ctx.fillText(String(i+1),(i%3)*w/3+8,Math.floor(i/3)*h/2+16);}
  const xy=(x,z)=>[(x+900)/1800*w,(z+600)/1200*h];if(this.p.upgrades.radar)for(const f of this.fish){ctx.fillStyle=canEat(this.p.level,f.level)?'#b0ff9a':'#ff777e';const [x,y]=xy(f.rig.group.position.x,f.rig.group.position.z);ctx.fillRect(x-1,y-1,2.5,2.5);}
  if(this.waypoint!==null){const r=REGIONS[this.waypoint],[x,y]=xy(r.x,r.z);ctx.strokeStyle='#ffdf86';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.stroke();const [px,py]=xy(this.position.x,this.position.z);ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(x,y);ctx.stroke();ctx.setLineDash([]);}
  const [x,y]=xy(this.position.x,this.position.z);ctx.fillStyle='#fff';ctx.strokeStyle='#133f50';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();ctx.stroke();
 }
 dispose(){this.cageEffect.dispose();this.algae.dispose();this.ocean.dispose();this.player.dispose();this.fish.forEach(f=>f.rig.dispose());this.pearlGeo.dispose();this.pearlMaterial.dispose();this.burstGeo.dispose();this.burstMaterial.dispose();this.ring.geometry.dispose();this.ring.material.dispose();this.renderer.dispose();}
}
