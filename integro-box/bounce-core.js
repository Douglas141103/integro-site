/* Bounce Tegro — original, deterministic 2D platform adventure. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.BounceCore=api;})(typeof globalThis!=='undefined'?globalThis:this,()=>{
'use strict';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const themes=[
 {name:'Jardins do Sol',sky:['#52a6e8','#a1e6ff'],far:'#76bec7',near:'#398f8e',ground:'#124a32',edge:'#75e319',grass:'#b3ff38',flower:'#ff4382',mist:'#dbf8d9'},
 {name:'Bosque Encantado',sky:['#526dc4','#f3bca3'],far:'#716f9f',near:'#416d72',ground:'#183e3c',edge:'#5ec82b',grass:'#b1f451',flower:'#ffc549',mist:'#f4d5ad'},
 {name:'Grutas de Cristal',sky:['#151f54','#5365a2'],far:'#2b3565',near:'#36437d',ground:'#243252',edge:'#53d4d6',grass:'#a1ffff',flower:'#ca82fc',mist:'#a2bfff'},
 {name:'Vale de Neve',sky:['#538dc1','#dbf4ff'],far:'#a6d7df',near:'#73aaba',ground:'#426684',edge:'#dbf8ff',grass:'#ffffff',flower:'#96c5ff',mist:'#ffffff'},
 {name:'Vulcão das Estrelas',sky:['#602f64','#efa675'],far:'#994a63',near:'#6b3b53',ground:'#3b3246',edge:'#e9a343',grass:'#ffe48d',flower:'#ff776d',mist:'#ffcf8b'}
];
// Each level has an authored sequence of terrain challenges, rather than a random map.
const specs=[
 ['Primeiros saltos','meadow,hill,meadow,gap,meadow,steps,meadow'],
 ['Flores que voam','hill,spring,meadow,gap,steps,meadow,spring'],
 ['Sobre o riacho','gap,meadow,gap,lift,meadow,hill,gap,steps'],
 ['O jardim suspenso','steps,spring,gap,spikes,lift,hill,steps,gate'],
 ['Trilha do entardecer','hill,gap,patrol,meadow,steps,gate,hill'],
 ['Pontes de folhas','lift,gap,steps,lift,patrol,gap,spring,meadow'],
 ['Segredo dos troncos','hill,gate,steps,patrol,gap,tunnel,spring,gate'],
 ['Corrida das pétalas','spikes,gap,spring,lift,patrol,steps,gap,gate,meadow'],
 ['Luzes da caverna','steps,gate,crystal,gap,lift,tunnel,meadow,crystal'],
 ['Ecos e elevadores','lift,steps,gap,lift,gate,crystal,spring,patrol,steps'],
 ['Labirinto brilhante','tunnel,gate,gap,crystal,spikes,lift,steps,gate,crystal'],
 ['Coração de cristal','spring,steps,lift,gap,patrol,gate,tunnel,crystal,gap,spring'],
 ['Neve fofinha','hill,gap,steps,meadow,spikes,lift,hill,gate'],
 ['Lago dos reflexos','gap,lift,gap,steps,patrol,gate,spring,lift,gap'],
 ['Escalada gelada','steps,lift,steps,gap,spring,spikes,gate,steps,patrol'],
 ['Aurora saltitante','lift,gap,patrol,gate,spring,tunnel,steps,spikes,lift,gap'],
 ['Pedras quentinhas','spikes,hill,gap,steps,gate,lift,patrol,spring,gap'],
 ['Rios de luz','gap,spring,gap,lift,spikes,gate,steps,gap,patrol,lift'],
 ['Até as nuvens','steps,spring,lift,gate,gap,patrol,spikes,lift,steps,spring,gap'],
 ['O grande salto Tegro','hill,gap,spikes,gate,lift,spring,patrol,tunnel,steps,crystal,gap,lift']
];
function makeLevel(index){
 index=clamp(index|0,0,19);const [name,pattern]=specs[index];const theme=themes[Math.floor(index/4)],original=pattern.split(',');
 // Two distinct extensions add real terrain and challenges while preserving jump distances.
 const extensions=[
  ['meadow','spikes','hill','lift','gate','gap','steps','spikes','meadow','spring','hill','spikes'],
  ['hill','spikes','gate','meadow','steps','gap','spikes','lift','meadow','spring','patrol','spikes'],
  ['crystal','spikes','meadow','gate','lift','gap','hill','spikes','steps','crystal','meadow','spikes'],
  ['meadow','spikes','lift','gate','hill','gap','steps','spikes','meadow','spring','lift','spikes'],
  ['hill','spikes','gate','meadow','lift','gap','spikes','steps','meadow','spring','patrol','spikes']
 ];
 const route=extensions[Math.floor(index/4)],extraA=original.map((_,k)=>route[(k+index%4)%route.length]),extraB=original.map((_,k)=>route[(k+5+index%4)%route.length]);
 const seq=[...original,'meadow','gate',...extraA,'hill','meadow',...extraB,'gate'];
 seq.splice(4,0,'mountain');if(index>=8)seq.splice(Math.floor(seq.length*.7),0,'mountain');
 const level={index,name,theme,width:420+seq.length*400+520,height:950,top:-80,mountains:[],blocks:[],terrain:[],platforms:[],gaps:[],hazards:[],springs:[],gates:[],checks:[],drops:[],stars:[],signs:[],spawn:{x:95,y:390},goal:null};
 const base=430,addDrop=(x,y)=>level.drops.push({x,y,taken:false});
 // Smooth height fields give hills their curved silhouette and collision surface.
 level.terrain.push({x:0,w:420,y:base,amp:0,kind:'start'});
 let cursor=420;
 seq.forEach((kind,k)=>{
  const x=cursor;cursor+=kind==='mountain'?1200:400;
  if(kind==='mountain'){
   const id=level.mountains.length,steps=index<4?3:index<12?4:5,rise=index<4?180:190,height=steps*rise;
   const block={x:x+400,y:base-height,w:230,h:height+500,kind:'mountain'};
   const mountain={id,x,w:1200,steps,rise,block,leaves:[]};
   level.mountains.push(mountain);level.blocks.push(block);level.top=Math.min(level.top,block.y-160);
   level.terrain.push({x,w:1200,y:base,amp:0,kind:'mountain'});
   level.checks.push({x:x+35,y:base,active:false});
   for(let j=0;j<steps;j++){
    const sx=x+(j===steps-1?250:130+(j%2)*120),sy=base-j*rise;
    const leaf={x:sx,y:sy,surface:true,width:62,boost:940,mountainId:id,step:j,pulse:0};
    mountain.leaves.push(leaf);level.springs.push(leaf);
    if(j>0)level.platforms.push({x:sx-62,y:sy,w:124,h:14,kind:'spring-leaf',oneWay:true});
    addDrop(sx-20,sy-48);addDrop(sx+20,sy-68);
   }
   level.checks.push({x:block.x+100,y:block.y,active:false,spawn:{x:block.x+125,y:block.y-19}});
   level.signs.push({x:x+50,y:base,text:'↑ FOLHAS'},{x:block.x+155,y:block.y,text:'CUME →'});
   for(let j=0;j<4;j++)addDrop(block.x+25+j*49,block.y-52);
   return;
  }
  const amp=kind==='hill'?60:kind==='meadow'?26:kind==='steps'?15:9;
  level.terrain.push({x,w:400,y:base,amp,kind});
  if(kind==='gap'){level.gaps.push({x:x+150,w:110+(index%4)*9});}
  if(['spikes','meadow','hill'].includes(kind)&&!(index===0&&k<2)){
   const w=index<4?54:index<12?72:90;
   level.hazards.push({kind:'spike',x:x+185,y:0,w,h:26});
  }
  if(kind==='patrol')level.hazards.push({kind:'beetle',x:x+230,y:base-25,w:40,h:30,origin:x+230,range:56,speed:1.1});
  if(kind==='spring'){level.springs.push({x:x+130,y:base-7});level.platforms.push({x:x+220,y:base-155,w:130,h:20,kind:'leaf'});}
  if(kind==='steps'){for(let n=0;n<3;n++)level.platforms.push({x:x+80+n*83,y:base-65-n*49,w:95,h:22,kind:'leaf'});}
  if(kind==='lift'){
   level.platforms.push({x:x+110,y:base-80,w:128,h:24,kind:'moving',originX:x+110,originY:base-80,rangeX:28,rangeY:45,phase:k*.9});
   level.platforms.push({x:x+265,y:base-170,w:100,h:24,kind:'leaf'});
  }
  if(kind==='gate'){
   const switchX=x+110,switchY=base-amp*Math.sin(110/400*Math.PI)**2;
   level.gates.push({id:level.gates.length+1,x:x+302,y:base-156,w:46,h:180,open:false,lift:0,switchX,switchY,leverX:switchX-16,leverY:switchY-34});
  }
  if(kind==='tunnel'){level.platforms.push({x:x+115,y:base-84,w:210,h:28,kind:'stone'});}
  if(kind==='crystal'){level.platforms.push({x:x+100,y:base-84,w:100,h:24,kind:'crystal'},{x:x+220,y:base-152,w:100,h:24,kind:'crystal'});}
  if(k>0&&k%5===0)level.checks.push({x:x+30,y:base,active:false});
  for(let n=0;n<4;n++){let dx=x+45+n*90;const gap=level.gaps.find(g=>dx>g.x-20&&dx<g.x+g.w+20);addDrop(dx,base-55-(gap?40:Math.sin(n/3*Math.PI)*35)-amp);}
  if(['steps','lift','spring','crystal'].includes(kind)){const p=level.platforms.at(-1);addDrop(p.x+p.w*.5,p.y-38);}
 });
 const end=cursor;level.width=end+520;level.terrain.push({x:end,w:520,y:base,amp:0,kind:'end'});level.goal={x:end+320,y:base-55};
 // Anchor every spike tip above the curved surface; leave switches and landings clear.
 for(const a of level.hazards)if(a.kind==='spike')a.y=Math.min(terrainY(level,a.x),terrainY(level,a.x+a.w))-a.h;
 // Three optional crystals reward exploration on upper ledges.
 const platforms=level.platforms.filter(p=>p.kind!=='stone');
 for(let n=0;n<3;n++){const p=platforms[Math.floor((platforms.length-1)*n/2)];let x=p?p.x+p.w*.5:800+n*800,y=p?p.y-40:340;if(level.stars.some(s=>Math.abs(s.x-x)<10)){x+=70;y-=10;}level.stars.push({x,y,taken:false});}
 if(level.mountains.length){const m=level.mountains[0];level.stars[1]={x:m.block.x+65,y:m.block.y-45,taken:false};}
 level.signs.push({x:220,y:base,text:index===0?'→  SALTE E EXPLORE':'→'},{x:end+160,y:base,text:'CHEGADA'});
 return level;
}
function terrainY(level,x){const t=level.terrain.find(t=>x>=t.x&&x<=t.x+t.w);if(!t||level.gaps.some(g=>x>g.x&&x<g.x+g.w))return Infinity;return t.y-t.amp*Math.sin((x-t.x)/t.w*Math.PI)**2;}
const circleRect=(p,r)=>{const x=clamp(p.x,r.x,r.x+r.w),y=clamp(p.y,r.y,r.y+r.h);return (p.x-x)**2+(p.y-y)**2<p.r*p.r;};
function touchesSpikes(p,a){
 // Test the visible triangles, with a small inset for forgiving tip contacts.
 const radius=p.r-2;
 for(let x=a.x;x<a.x+a.w;x+=18){
  const v=[[x,a.y+a.h],[x+9,a.y],[x+18,a.y+a.h]];
  let positive=false,negative=false;
  for(let i=0;i<3;i++){const [ax,ay]=v[i],[bx,by]=v[(i+1)%3],dx=bx-ax,dy=by-ay;
   const cross=dx*(p.y-ay)-dy*(p.x-ax);positive ||= cross>0;negative ||= cross<0;
   const t=clamp(((p.x-ax)*dx+(p.y-ay)*dy)/(dx*dx+dy*dy),0,1);
   if((p.x-ax-t*dx)**2+(p.y-ay-t*dy)**2<radius*radius)return true;
  }
  if(!(positive&&negative))return true;
 }
 return false;
}
class Run{
 constructor(index){this.level=makeLevel(index);this.p={...this.level.spawn,vx:0,vy:0,r:17,grounded:false,angle:0,coyote:0};this.time=0;this.ticks=0;this.deaths=0;this.collected=0;this.crystals=0;this.status='playing';this.check={...this.level.spawn};this.invulnerable=0;this.jumpBuffer=0;this.jumpHeld=false;this.springCooldown=0;this.events=[];this.finished=false;this.pop=null;}
 event(type,x=this.p.x,y=this.p.y,detail={}){this.events.push({type,x,y,...detail});}
 popBall(){if(this.status!=='playing')return;this.status='popping';this.pop={x:this.p.x,y:this.p.y,elapsed:0,duration:.72};this.p.vx=0;this.p.vy=0;this.jumpBuffer=0;this.event('pop');}
 respawn(){this.deaths++;this.status='playing';this.pop=null;Object.assign(this.p,this.check,{vx:0,vy:0,grounded:false,coyote:0,platform:null});this.invulnerable=1.3;this.jumpBuffer=0;this.springCooldown=0;this.event('respawn');}
 update(dt,input={}){dt=clamp(dt,0,1/30);if(this.status==='popping'){this.pop.elapsed+=dt;if(this.pop.elapsed>=this.pop.duration)this.respawn();return;}if(this.status!=='playing')return;this.time+=dt;this.ticks++;this.invulnerable=Math.max(0,this.invulnerable-dt);this.springCooldown=Math.max(0,this.springCooldown-dt);const l=this.level,p=this.p;
  const jump=!!input.jump;if(jump&&!this.jumpHeld)this.jumpBuffer=.14;this.jumpHeld=jump;this.jumpBuffer=Math.max(0,this.jumpBuffer-dt);
  for(const a of l.platforms){const oldX=a.x,oldY=a.y;if(a.kind==='moving'){a.x=a.originX+Math.sin(this.time*1.3+a.phase)*a.rangeX;a.y=a.originY+Math.sin(this.time*1.3+a.phase)*a.rangeY;}a.dx=a.x-oldX;a.dy=a.y-oldY;}
  if(p.platform&&p.grounded){p.x+=p.platform.dx||0;p.y+=p.platform.dy||0;}
  const dir=clamp((input.right?1:0)-(input.left?1:0),-1,1),ice=l.index>=12&&l.index<16;
  p.vx+=dir*1500*dt;if(!dir)p.vx*=Math.exp(-(ice?2.5:10)*dt);p.vx=clamp(p.vx,-285,285);
  p.coyote=p.grounded?.11:Math.max(0,p.coyote-dt);
  if(this.jumpBuffer>0&&p.coyote>0){p.vy=-615;p.grounded=false;p.coyote=0;this.jumpBuffer=0;this.event('jump');}
  // Releasing the jump shortens the arc; holding gives the full leap.
  if(!jump&&this.springCooldown<=0&&p.vy< -280)p.vy+=1500*dt;
  const prevY=p.y,prevX=p.x;p.vy=Math.min(850,p.vy+1370*dt);p.x=clamp(p.x+p.vx*dt,p.r,l.width-p.r);p.y+=p.vy*dt;p.angle+=(p.x-prevX)/p.r;p.grounded=false;p.platform=null;
  // Solid cliff faces require the leaf route; there is no passage through the mountain.
  for(const b of l.blocks){
   if(p.x+p.r>b.x&&p.x-p.r<b.x+b.w&&p.y+p.r>b.y&&p.y-p.r<b.y+b.h){
    if(p.vy>=0&&prevY+p.r<=b.y+5){p.y=b.y-p.r;p.vy=0;p.grounded=true;}
    else if(prevX<=b.x){p.x=b.x-p.r;p.vx=0;}
    else if(prevX>=b.x+b.w){p.x=b.x+b.w+p.r;p.vx=0;}
    else if(p.vy<0&&prevY-p.r>=b.y+b.h){p.y=b.y+b.h+p.r;p.vy=0;}
   }
  }
  for(const gate of l.gates){
   // Only physical contact with the handle presses the lever, never proximity or a UI click.
   if(!gate.open&&Math.hypot(p.x-gate.leverX,p.y-gate.leverY)<p.r+10){gate.open=true;this.event('switch',gate.switchX,gate.switchY);}
   gate.lift=Math.min(1,gate.lift+(gate.open?dt*2.7:0));
   const barrier={x:gate.x,y:gate.y,w:gate.w,h:gate.h*(1-gate.lift)};
   if(barrier.h>0&&circleRect(p,barrier)){p.x=prevX<gate.x?gate.x-p.r:gate.x+gate.w+p.r;p.vx=0;}
  }
  for(const a of l.platforms){if(p.x+p.r>a.x&&p.x-p.r<a.x+a.w){if(p.vy>=0&&prevY+p.r<=a.y-(a.dy||0)+7&&p.y+p.r>=a.y){p.y=a.y-p.r;p.vy=0;p.grounded=true;p.platform=a;}else if(!a.oneWay&&p.vy<0&&prevY-p.r>=a.y+a.h-3&&p.y-p.r<a.y+a.h){p.y=a.y+a.h+p.r;p.vy=30;}}}
  const ground=terrainY(l,p.x);if(Number.isFinite(ground)&&p.y+p.r>=ground&&prevY-p.r<ground+24&&p.vy>=0){p.y=ground-p.r;p.vy=0;p.grounded=true;p.platform=null;}
  for(const a of l.springs){a.pulse=Math.max(0,(a.pulse||0)-dt);
   const contact=a.surface?prevY+p.r<=a.y+9&&p.y+p.r>=a.y-3&&p.y<a.y: p.y+p.r>=a.y-16&&p.y<a.y+25;
   if(this.springCooldown<=0&&Math.abs(p.x-a.x)<(a.width||37)&&contact&&p.vy>=0){p.y=a.surface?a.y-p.r:p.y;p.vy=-(a.boost||900);p.grounded=false;p.coyote=0;this.springCooldown=.55;a.pulse=.4;this.event('spring',a.x,a.y,{mountainId:a.mountainId,step:a.step});}
  }
  for(const a of l.hazards){if(a.kind==='beetle'){a.x=a.origin+Math.sin(this.time*a.speed)*a.range;a.y=terrainY(l,a.x)-a.h;}if(this.invulnerable<=0&&(a.kind==='spike'?touchesSpikes(p,a):circleRect(p,a))){this.popBall();return;}}
  if((p.y>620&&l.gaps.some(g=>p.x>g.x&&p.x<g.x+g.w))||p.y>l.height){this.popBall();return;}
  for(const c of l.checks)if(!c.active&&Math.abs(p.x-c.x)<40&&Math.abs(p.y-c.y)<100){c.active=true;this.check=c.spawn?{...c.spawn}:{x:c.x+25,y:terrainY(l,c.x+25)-p.r-2};this.event('checkpoint',c.x,c.y);}
  for(const d of l.drops)if(!d.taken&&Math.hypot(p.x-d.x,p.y-d.y)<p.r+15){d.taken=true;this.collected++;this.event('drop',d.x,d.y);}
  for(const s of l.stars)if(!s.taken&&Math.hypot(p.x-s.x,p.y-s.y)<p.r+19){s.taken=true;this.crystals++;this.event('star',s.x,s.y);}
  if(Math.hypot(p.x-l.goal.x,p.y-l.goal.y)<62){this.status='won';this.finished=true;this.event('win');}
 }
 get rating(){return 1+(this.collected>=Math.ceil(this.level.drops.length*.65)?1:0)+(this.crystals===3?1:0);}
 get score(){return this.collected*50+this.crystals*200+(this.finished?500:0);}
}
function freshProgress(){return {version:1,unlocked:1,best:Array(20).fill(0),stars:Array(20).fill(0),time:Array(20).fill(0),sound:true};}
function parseProgress(raw){const p=freshProgress();try{const d=JSON.parse(raw||'null');if(!d)return p;p.unlocked=clamp(Number(d.unlocked)||1,1,20);for(const key of ['best','stars','time'])if(Array.isArray(d[key]))p[key]=p[key].map((_,i)=>clamp(Number(d[key][i])||0,0,key==='stars'?3:10000000));p.sound=d.sound!==false;}catch{}return p;}
function complete(p,r){if(!r.finished)return;p.unlocked=Math.max(p.unlocked,Math.min(20,r.level.index+2));const i=r.level.index;p.best[i]=Math.max(p.best[i],r.score);p.stars[i]=Math.max(p.stars[i],r.rating);p.time[i]=p.time[i]?Math.min(p.time[i],r.time):r.time;}
return {themes,specs,makeLevel,terrainY,Run,freshProgress,parseProgress,complete,clamp};
});
