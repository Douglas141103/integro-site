import {LEVELS,platformAt} from './levels.mjs';
export const PHYSICS=Object.freeze({gravity:24,jump:10.2,speed:5.5,radius:.28,height:1.55,crouch:.88,coyote:.1,buffer:.12,pulseRadius:2.7,pulseCooldown:.7});
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const finite=(n,d=0)=>Number.isFinite(n)?n:d;
export function cleanProgress(value){
 let p;try{p=typeof value==='string'?JSON.parse(value):value;}catch{}p=p&&typeof p==='object'?p:{};
 const complete=Array.from({length:4},(_,i)=>p.complete?.[i]===true);
 // Only a completed prefix can unlock subsequent phases.
 let unlocked=1;for(let i=0;i<3&&complete[i];i++)unlocked=i+2;
 const validSeeds=new Set(LEVELS.flatMap(l=>l.seeds.map(s=>s.id)));
 return {version:1,complete,unlocked,seeds:[...new Set(Array.isArray(p.seeds)?p.seeds.filter(s=>validSeeds.has(s)):[])],
  selected:clamp(Math.trunc(finite(p.selected)),0,unlocked-1),sound:p.sound!==false,assist:p.assist===true,reduced:p.reduced===true,quality:p.quality==='low'?'low':'auto',
  checkpoint:Array.from({length:4},(_,i)=>clamp(Math.trunc(finite(p.checkpoint?.[i],-1)),-1,LEVELS[i].checkpoints.length-1))};
}
export class BlueRun{
 constructor(index=0,progress=cleanProgress(null),resume=false){
  this.level=LEVELS[clamp(Math.trunc(finite(index)),0,3)];this.assist=!!progress.assist;this.maxHealth=this.assist?5:3;
  this.time=0;this.status='playing';this.events=[];this.bridges={};this.previousInput={};this.pulseAge=99;this.pulseX=0;this.pulseY=0;this.cooldown=0;
  this.collected=new Set(progress.seeds||[]);this.checkpoint=resume?(progress.checkpoint?.[this.level.id]??-1):-1;
  this.checkpoint=clamp(this.checkpoint,-1,this.level.checkpoints.length-1);this.deaths=0;
  this.enemies=this.level.enemies.map((e,i)=>({...e,x:e.a+(e.b-e.a)/2,dir:i%2?-1:1,stun:0,freed:false}));
  this.boss=this.level.boss?{x:21,y:0,hits:0,phase:'watch',clock:2.5,dir:-1,hitThisCycle:false}:null;this.waves=[];this.respawn(false);
 }
 respawn(event=true){
  const point=this.level.checkpoints[this.checkpoint]||this.level.spawn;
  this.player={x:point.x,y:point.y,vx:0,vy:0,facing:1,grounded:true,platform:null,crouching:false,health:this.maxHealth,invulnerable:event?1.5:0,coyote:PHYSICS.coyote,jumpBuffer:0,landed:0};
  this.previousInput={};this.bridges={};this.cooldown=0;this.pulseAge=99;this.waves=[];
  for(const e of this.enemies){e.stun=0;e.x=(e.a+e.b)/2;}
  if(this.boss){this.boss.x=21;this.boss.phase='watch';this.boss.clock=2.5;this.boss.hitThisCycle=false;this.boss.hits=0;}
  if(event){this.deaths++;this.events.push({type:'respawn'});}
 }
 surfaces(t=this.time){return this.level.platforms.filter(p=>p.kind!=='bridge'||(this.bridges[p.group]||0)>0).map(p=>platformAt(p,t));}
 height(){return this.player.crouching?PHYSICS.crouch:PHYSICS.height;}
 pulse(){
  if(this.status!=='playing'||this.cooldown>0)return false;
  const p=this.player;this.cooldown=PHYSICS.pulseCooldown;this.pulseAge=0;this.pulseX=p.x;this.pulseY=p.y+.7;
  this.events.push({type:'pulse',x:p.x,y:p.y+.7});
  for(const s of this.level.switches)if(Math.hypot(s.x-p.x,s.y-p.y)<PHYSICS.pulseRadius){this.bridges[s.group]=this.assist?6:4;this.events.push({type:'bridge',group:s.group});}
  for(const e of this.enemies)if(!e.freed&&Math.hypot(e.x-p.x,e.y-p.y)<PHYSICS.pulseRadius){e.stun=3;this.events.push({type:'stun'});}
  const b=this.boss;
  if(b&&b.phase==='rest'&&!b.hitThisCycle&&Math.hypot(b.x-p.x,b.y+.2-p.y)<PHYSICS.pulseRadius){
   b.hitThisCycle=true;b.hits++;this.events.push({type:'boss-hit',hits:b.hits});
   if(b.hits===3){b.phase='freed';this.win();}else {b.phase='recover';b.clock=1.5;}
  }
  return true;
 }
 damage(fromX){
  const p=this.player;if(p.invulnerable>0||this.status!=='playing')return;
  p.health--;p.invulnerable=1.5;p.vx=(p.x<fromX?-1:1)*4;p.vy=5;p.grounded=false;this.events.push({type:'hurt'});
  if(p.health<=0)this.respawn();
 }
 win(){if(this.status!=='playing')return;this.status='won';this.events.push({type:'won'});}
 update(dt,input={}){
  if(this.status!=='playing')return;dt=clamp(finite(dt),0,1/30);if(!dt)return;
  const p=this.player,previousTime=this.time;this.time+=dt;this.cooldown=Math.max(0,this.cooldown-dt);this.pulseAge+=dt;
  p.invulnerable=Math.max(0,p.invulnerable-dt);p.landed=Math.max(0,p.landed-dt);
  for(const key of Object.keys(this.bridges))this.bridges[key]=Math.max(0,this.bridges[key]-dt);
  const surfaces=this.surfaces();
  if(p.platform){const current=surfaces.find(s=>s.id===p.platform),old=this.surfaces(previousTime).find(s=>s.id===p.platform);if(current&&old){p.x+=current.x-old.x;p.y+=current.y-old.y;}else p.grounded=false;}
  const overlaps=(s,height)=>p.x+PHYSICS.radius>s.x-s.w/2+.001&&p.x-PHYSICS.radius<s.x+s.w/2-.001&&p.y+height>s.y-s.h+.01&&p.y<s.y-.01;
  p.crouching=!!input.down||(p.crouching&&surfaces.some(s=>!s.oneWay&&overlaps(s,PHYSICS.height)));
  if(input.jump&&!this.previousInput.jump)p.jumpBuffer=PHYSICS.buffer;else p.jumpBuffer=Math.max(0,p.jumpBuffer-dt);
  p.coyote=p.grounded?PHYSICS.coyote:Math.max(0,p.coyote-dt);
  if(p.jumpBuffer>0&&p.coyote>0&&!p.crouching){p.vy=PHYSICS.jump;p.grounded=false;p.platform=null;p.coyote=0;p.jumpBuffer=0;this.events.push({type:'jump'});}
  if(!input.jump&&this.previousInput.jump&&p.vy>4)p.vy=4;
  const axis=(input.right?1:0)-(input.left?1:0),speed=PHYSICS.speed*(p.crouching?.48:1);
  // Keep a brief damage impulse; otherwise acceleration and braking are deterministic.
  if(p.invulnerable<1.3){const target=axis*speed,accel=(p.grounded?36:23)*dt;p.vx+=clamp(target-p.vx,-accel,accel);}
  if(axis)p.facing=axis;
  const oldX=p.x,oldY=p.y,height=this.height();p.x+=p.vx*dt;
  for(const s of surfaces)if(!s.oneWay&&overlaps(s,height)){
   if(oldX+PHYSICS.radius<=s.x-s.w/2+.05&&p.vx>0){p.x=s.x-s.w/2-PHYSICS.radius;p.vx=0;}
   else if(oldX-PHYSICS.radius>=s.x+s.w/2-.05&&p.vx<0){p.x=s.x+s.w/2+PHYSICS.radius;p.vx=0;}
  }
  p.x=clamp(p.x,.5,this.level.length+1);p.vy-=PHYSICS.gravity*dt;p.y+=p.vy*dt;p.grounded=false;p.platform=null;
  for(const s of surfaces){
   if(p.x+PHYSICS.radius<=s.x-s.w/2||p.x-PHYSICS.radius>=s.x+s.w/2)continue;
   const old=platformAt(this.level.platforms.find(q=>q.id===s.id),previousTime);
   if(p.vy<=0&&oldY>=old.y-.06&&p.y<=s.y){if(p.vy<-4){p.landed=.18;this.events.push({type:'land'});}p.y=s.y;p.vy=0;p.grounded=true;p.platform=s.id;}
   else if(!s.oneWay&&p.vy>0&&oldY+height<=old.y-old.h+.04&&p.y+height>=s.y-s.h){p.y=s.y-s.h-height;p.vy=0;}
  }
  if(p.y<-7){this.respawn();this.previousInput={...input};return;}
  if(input.pulse&&!this.previousInput.pulse)this.pulse();
  for(const s of this.level.seeds)if(!this.collected.has(s.id)&&Math.hypot(s.x-p.x,s.y-(p.y+.75))<.9){this.collected.add(s.id);this.events.push({type:'seed',id:s.id,x:s.x,y:s.y});}
  this.level.checkpoints.forEach((c,i)=>{if(i>this.checkpoint&&Math.abs(c.x-p.x)<1.1&&Math.abs(c.y-p.y)<.4&&p.grounded){this.checkpoint=i;p.health=this.maxHealth;this.events.push({type:'checkpoint'});}});
  for(const e of this.enemies){
   if(e.freed)continue;e.stun=Math.max(0,e.stun-dt);if(!e.stun){e.x+=e.dir*1.05*dt;if(e.x<=e.a||e.x>=e.b){e.dir*=-1;e.x=clamp(e.x,e.a,e.b);}}
   if(Math.abs(p.x-e.x)<.64&&p.y<e.y+.62&&p.y+height>e.y+.08){
    if(oldY>=e.y+.52&&p.vy<=0){e.freed=true;p.y=e.y+.66;p.vy=7.5;p.grounded=false;this.events.push({type:'freed'});}
    else if(!e.stun)this.damage(e.x);
   }
  }
  if(this.boss)this.updateBoss(dt);else if(Math.abs(p.x-this.level.end.x)<1.2&&Math.abs(p.y-this.level.end.y)<.6)this.win();
  this.previousInput={...input};
 }
 updateBoss(dt){
  const b=this.boss,p=this.player;b.clock-=dt;
  if(b.phase==='watch'&&b.clock<=0){b.phase='warn';b.clock=1.25;b.dir=b.x<=7?1:b.x>=23?-1:p.x<b.x?-1:1;this.events.push({type:'boss-warn'});}
  else if(b.phase==='warn'&&b.clock<=0){b.phase='roll';b.clock=2.4;}
  else if(b.phase==='roll'){
   b.x+=b.dir*(this.assist?6:8)*dt;
   if(b.x<6||b.x>24||b.clock<=0){b.x=clamp(b.x,6,24);b.phase='rest';b.clock=this.assist?5:3.8;b.hitThisCycle=false;this.events.push({type:'boss-rest'});if(b.hits>0)this.waves.push({x:b.x,dir:-b.dir,life:5});}
  }else if((b.phase==='rest'||b.phase==='recover')&&b.clock<=0){b.phase='watch';b.clock=1.5;}
  if(b.phase==='roll'&&Math.abs(p.x-b.x)<1.05&&p.y<1.12)this.damage(b.x);
  for(const w of this.waves){w.x+=w.dir*4*dt;w.life-=dt;if(Math.abs(w.x-p.x)<.5&&p.y<.36&&w.life>0)this.damage(w.x);}
  this.waves=this.waves.filter(w=>w.life>0&&w.x>0&&w.x<30);
 }
 sync(progress){
  progress.seeds=[...new Set([...progress.seeds,...this.collected])];progress.selected=this.level.id;
  progress.checkpoint[this.level.id]=this.checkpoint;
  if(this.status==='won'){progress.complete[this.level.id]=true;progress.unlocked=Math.max(progress.unlocked,Math.min(4,this.level.id+2));progress.checkpoint[this.level.id]=-1;}
  return progress;
 }
}
