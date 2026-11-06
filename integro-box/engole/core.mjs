export const WORLD=1600,DURATION=120;
export const COLORS=['#26ead2','#ffb638','#b895ff','#ff78b0','#75d66a','#66b7ff','#f5804b','#efe282'];
export function random(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
export function city(seed){
 const rng=random(seed),a=[];const put=(x,y,kind,r,value)=>a.push({id:a.length,x,y,kind,r,value,color:Math.floor(rng()*5)});
 for(let bx=0;bx<5;bx++)for(let by=0;by<5;by++){
  const x=bx*320,y=by*320;
  // Tiny objects along every road ensure that every spawn can grow.
  for(let i=0;i<12;i++)put(x+30+rng()*265,y+22+rng()*55,'cone',5,1);
  for(let i=0;i<6;i++)put(x+22+rng()*50,y+95+rng()*200,'bin',7,2);
  for(let i=0;i<5;i++)put(x+110+rng()*165,y+95+rng()*200,'tree',13,5);
  put(x+138,y+141,'house',25,15);put(x+237,y+141,'tower',42,35);
  put(x+195,y+247,'tower',58,60);
  for(let i=0;i<3;i++)put(x+100+i*70,y+48,'car',17,8);
 }
 return a;
}
export function spawn(slot){const t=slot*Math.PI/4;return{x:800+Math.cos(t)*520,y:800+Math.sin(t)*520};}
export class Match{
 constructor(seed,roster){this.seed=seed;this.objects=city(seed);this.time=0;this.done=false;this.events=[];this.rng=random(seed);this.players=roster.map((p,i)=>({...p,slot:p.slot??i,...spawn(p.slot??i),r:18,score:0,immune:3,respawn:0,input:{x:0,y:0},lastInput:0}));}
 input(id,v){const p=this.players.find(x=>x.id===id);if(!p||!Number.isFinite(v?.x)||!Number.isFinite(v?.y))return;const len=Math.max(1,Math.hypot(v.x,v.y));p.input={x:v.x/len,y:v.y/len};p.lastInput=this.time;}
 step(dt){
  if(this.done||!Number.isFinite(dt)||dt<=0)return;
  dt=Math.min(dt,.05);this.time=Math.min(DURATION,this.time+dt);this.events=[];
  for(const p of this.players){
   p.immune=Math.max(0,p.immune-dt);p.respawn=Math.max(0,p.respawn-dt);
   if(p.respawn>0)continue;
   let v=p.input;
   if(p.bot){
    const danger=this.players.find(q=>q!==p&&q.r>p.r*1.4&&Math.hypot(q.x-p.x,q.y-p.y)<q.r+130);
    if(danger){v={x:p.x-danger.x,y:p.y-danger.y};}
    else{let target,best=Infinity;for(const o of this.objects){if(o.gone||o.r>p.r*.82)continue;const d=(o.x-p.x)**2+(o.y-p.y)**2;if(d<best){best=d;target=o;}}v=target?{x:target.x-p.x,y:target.y-p.y}:{x:0,y:0};}
    const d=Math.hypot(v.x,v.y)||1;v={x:v.x/d,y:v.y/d};
   }else if(this.time-p.lastInput>.7)v={x:0,y:0};
   const speed=160-Math.min(50,p.r*.27);
   p.x=Math.max(p.r,Math.min(WORLD-p.r,p.x+v.x*speed*dt));p.y=Math.max(p.r,Math.min(WORLD-p.r,p.y+v.y*speed*dt));
  }
  for(const o of this.objects){
   if(o.gone)continue;
   const candidates=this.players.filter(p=>p.respawn<=0&&o.r<=p.r*.82&&Math.hypot(o.x-p.x,o.y-p.y)<p.r-o.r*.3);
   candidates.sort((a,b)=>Math.hypot(o.x-a.x,o.y-a.y)-Math.hypot(o.x-b.x,o.y-b.y)||a.slot-b.slot);
   const p=candidates[0];if(!p)continue;o.gone=true;o.eater=p.slot;o.at=this.time;p.score+=o.value;p.r=Math.min(150,Math.sqrt(p.r*p.r+o.value*14));this.events.push({slot:p.slot,value:o.value});
  }
  for(const p of this.players)for(const q of this.players){
   if(p===q||p.respawn>0||q.respawn>0||q.immune>0||p.r<q.r*1.4)continue;
   if(Math.hypot(p.x-q.x,p.y-q.y)>p.r-q.r*.45)continue;
   const bonus=Math.max(10,Math.floor(q.score*.2));p.score+=bonus;p.r=Math.min(150,Math.sqrt(p.r*p.r+bonus*8));q.score=Math.floor(q.score*.75);q.r=18;q.respawn=2;q.immune=5;Object.assign(q,spawn(q.slot));q.input={x:0,y:0};
  }
  this.done=this.time>=DURATION||this.objects.every(o=>o.gone);
 }
 snapshot(){return{time:this.time,done:this.done,players:this.players.map(({id,slot,x,y,r,score,immune,respawn,bot})=>({id,slot,x,y,r,score,immune,respawn,bot})),gone:this.objects.filter(o=>o.gone).map(o=>[o.id,o.eater,o.at])};}
}
export function applySnapshot(view,s){
 if(!s||!Number.isFinite(s.time)||s.time<view.time||s.time>DURATION||!Array.isArray(s.players)||s.players.length>8||!Array.isArray(s.gone)||s.gone.length>view.objects.length)return false;
 if(s.players.some(p=>!p||![p.x,p.y,p.r,p.score,p.slot,p.immune,p.respawn].every(Number.isFinite)||p.x<0||p.y<0||p.x>WORLD||p.y>WORLD||p.r<1||p.r>150))return false;
 if(s.gone.some(item=>!Array.isArray(item)||item.length!==3||!Number.isInteger(item[0])||item[0]<0||item[0]>=view.objects.length||!Number.isInteger(item[1])||item[1]<0||item[1]>7||!Number.isFinite(item[2])))return false;
 view.time=s.time;view.done=!!s.done;view.players=s.players;
 for(const item of s.gone){const [id,eater,at]=item;const o=view.objects[id];if(o&&Number.isFinite(at)){o.gone=true;o.eater=eater;o.at=at;}}
 return true;
}
