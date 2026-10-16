export const DURATION=240;
export const REGIONS=[
 {name:'Arquipélago do Caribe',type:'island',sky:0x90d9ed,fog:0xb9e7e7,road:0xdfc99e,accent:'#62edd1',water:0x078eab},
 {name:'Reino Esquecido',type:'ruins',sky:0x9fd1bc,fog:0xb4d7ba,road:0x7e9585,accent:'#b8ee84',water:0x237e70},
 {name:'Cordilheira da Avalanche',type:'snow',sky:0x8eb4d8,fog:0xd6e5ef,road:0xb5d4e6,accent:'#b3e7ff',water:0x7ea6cb},
 {name:'Cinturão de Fogo',type:'lava',sky:0x3a2840,fog:0x77505b,road:0x443f50,accent:'#ffad6c',water:0xe64b19},
 {name:'Ilhas do Céu',type:'sky',sky:0x6879c6,fog:0xc1b4e6,road:0xb5a7b8,accent:'#e4c1ff',water:0x9a9bd6}
];
const names=['Baía das Esmeraldas','Pontes de Coral','Tempestade no Caribe','Templo das Cascatas','Jardins Suspensos','Fuga das Ruínas','Passagem Polar','Desfiladeiro de Gelo','A Grande Avalanche','Pontes sobre a Lava','Cratera em Erupção','Coração do Vulcão','Arquipélago das Nuvens','Aurora Celestial','A Última Expedição'];
export const LEVELS=names.map((name,i)=>({name,index:i,region:Math.floor(i/3),duration:DURATION,speed:18+i*.45,seed:1703+i*7919,bonus:150+i*25,chapters:[['Costa dos coqueiros','Passarela de coral','Ilhas e cascatas','Reta das esmeraldas'],['Entrada do templo','Jardim das colunas','Pontes ancestrais','Santuário perdido'],['Encosta gelada','Túnel das agulhas','Zona de avalanche','Passagem do cume'],['Rio de magma','Pontes de basalto','Chuva de brasas','Fuga da cratera'],['Mar de nuvens','Portais celestes','Chuva de estrelas','Horizonte final']][Math.floor(i/3)]}));
// One continuous, bounded acceleration curve. Integrating it keeps the road,
// scenery and obstacles moving together, including across checkpoint reloads.
export function speedAt(level,time){return level.speed*(1+.75*(1-Math.exp(-Math.max(0,time)/90)));}
export function distanceAt(level,time){const t=Math.max(0,time);return level.speed*(1.75*t+67.5*Math.expm1(-t/90));}
export function rng(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
export const SHOP=[
 ['cap-coral','Boné Coral','head',180,0xff705d,'cap'],['cap-ocean','Boné Oceano','head',220,0x39c5dc,'cap'],['hat-explorer','Chapéu Explorador','head',450,0xdbb674,'hat'],['crown-ice','Coroa Glacial','head',1200,0x97e7ff,'crown'],['crown-solar','Coroa Solar','head',3200,0xffcd5d,'crown'],['halo-aurora','Halo Aurora','head',6500,0xe5a1ff,'halo'],
 ['pack-coral','Mochila Coral','back',250,0xff786b,'pack'],['pack-ocean','Mochila Oceano','back',300,0x59d6ed,'pack'],['pack-moss','Mochila Selva','back',500,0xaad46a,'pack'],['wings-ice','Asas de Gelo','back',1800,0xa2e9ff,'wings'],['wings-flame','Asas da Fênix','back',4500,0xff9b48,'wings'],['wings-celestial','Asas Celestiais','back',9000,0xe4c7ff,'wings'],
 ['suit-teal','Traje Turquesa','suit',200,0x29d0bd,'suit'],['suit-coral','Traje Coral','suit',250,0xff695f,'suit'],['suit-forest','Traje da Selva','suit',400,0x8cba65,'suit'],['suit-glacier','Traje Glacial','suit',850,0x99dcff,'suit'],['suit-magma','Traje Magma','suit',1700,0xff863f,'suit'],['suit-cosmos','Traje Cósmico','suit',4000,0xbb8df3,'suit'],
 ['trail-mint','Rastro Menta','trail',350,0x67f6c2,'trail'],['trail-gold','Rastro Dourado','trail',600,0xffcd56,'trail'],['trail-snow','Rastro Polar','trail',900,0xb8eeff,'trail'],['trail-fire','Rastro de Fogo','trail',1500,0xff8148,'trail'],['trail-orchid','Rastro Orquídea','trail',2800,0xe797ff,'trail'],['trail-starlight','Rastro Estelar','trail',7500,0xfff0bd,'trail']
].map(([id,name,slot,price,color,model])=>({id,name,slot,price,color,model}));
export function fresh(){return {version:1,coins:0,unlocked:1,stars:Array(15).fill(0),best:Array(15).fill(0),owned:[],equipped:{},sound:true,quality:'auto'};}
export function clean(value){let a;try{a=typeof value==='string'?JSON.parse(value):value;}catch{}const p=fresh();if(!a||typeof a!=='object')return p;const num=(v,max)=>Number.isFinite(v)?Math.max(0,Math.min(max,Math.floor(v))):0;p.coins=num(a.coins,99999999);p.unlocked=Math.max(1,num(a.unlocked,15));p.stars=p.stars.map((_,i)=>num(a.stars?.[i],3));p.best=p.best.map((_,i)=>num(a.best?.[i],100000));p.owned=SHOP.filter(s=>Array.isArray(a.owned)&&a.owned.includes(s.id)).map(s=>s.id);for(const s of SHOP)if(p.owned.includes(s.id)&&a.equipped?.[s.slot]===s.id)p.equipped[s.slot]=s.id;p.sound=a.sound!==false;p.quality=['auto','high','low'].includes(a.quality)?a.quality:'auto';return p;}
export function purchase(p,id){const item=SHOP.find(x=>x.id===id);if(!item)return false;if(!p.owned.includes(id)){if(p.coins<item.price)return false;p.coins-=item.price;p.owned.push(id);}p.equipped[item.slot]=p.equipped[item.slot]===id?null:id;return true;}
export function buildTrack(index){const level=LEVELS[index],random=rng(level.seed),items=[];let id=0;const add=(time,lane,type,y=0)=>items.push({id:id++,time,lane,type,y});
 for(let t=3;t<238;t+=.48){const band=Math.floor(t/6),lane=Math.floor(rng(level.seed+band*101)()*3)-1;add(t,lane,'coin',.9);}
 for(let t=11;t<235;t+=Math.max(1.9,3.25-index*.075)){
  if(t%60<5||t%60>56)continue;const blocked=Math.floor(random()*3)-1;const types=['rock','log','arch','gap'];const type=types[Math.floor(random()*types.length)];add(t,blocked,type);
  if(index>2&&random()<.4){const lane=blocked===1?0:blocked+1;add(t,lane,random()<.5?'rock':'log');}
 }
 for(let t=22;t<232;t+=33)add(t,Math.floor(random()*3)-1,random()<.5?'magnet':'shield',1.2);
 return items.sort((a,b)=>a.time-b.time);
}
export class Run {
 constructor(index){if(!LEVELS[index])throw Error('Fase inválida');this.level=LEVELS[index];this.track=buildTrack(index);this.time=0;this.lane=0;this.x=0;this.jump=0;this.slide=0;this.health=3;this.coins=0;this.hits=0;this.magnet=0;this.shield=0;this.invincible=0;this.status='playing';this.seen=new Set();this.claimed=new Set();this.events=[];this.checkpoint=0;this.rewarded=false;}
 get y(){return this.jump>0?Math.sin(Math.PI*(1-this.jump/1.05))*2.65:0;}
 get speed(){return speedAt(this.level,this.time);}
 get distance(){return distanceAt(this.level,this.time);}
 action(a){if(this.status!=='playing')return;if(a==='left')this.lane=Math.max(-1,this.lane-1);if(a==='right')this.lane=Math.min(1,this.lane+1);if(a==='jump'&&!this.jump){this.jump=1.05;this.slide=0;}if(a==='slide'&&!this.slide&&!this.jump)this.slide=.95;}
 update(dt){if(this.status!=='playing'||!Number.isFinite(dt))return;dt=Math.max(0,Math.min(.05,dt));const before=this.time;this.time=Math.min(DURATION,this.time+dt);this.x+=(this.lane*2.55-this.x)*Math.min(1,dt*15);for(const k of ['jump','slide','magnet','shield','invincible'])this[k]=Math.max(0,this[k]-dt);
  const cp=Math.min(3,Math.floor(this.time/60))*60;if(cp>this.checkpoint){this.checkpoint=cp;this.health=Math.min(3,this.health+1);this.events.push({type:'checkpoint'});}
  for(const o of this.track){if(o.time>this.time+.12)break;if(o.time<before-.2||this.seen.has(o.id))continue;if(o.time>this.time)continue;this.seen.add(o.id);const same=Math.abs(o.lane*2.55-this.x)<.95;
   if(o.type==='coin'){if((same||this.magnet>0)&&!this.claimed.has(o.id)){this.claimed.add(o.id);this.coins+=2;this.events.push({type:'coin',amount:2});}continue;}
   if(['magnet','shield'].includes(o.type)){if(same&&!this.claimed.has(o.id)){this.claimed.add(o.id);this[o.type]=o.type==='magnet'?12:15;this.events.push({type:o.type});}continue;}
   if(!same||this.invincible>0)continue;const safe=(o.type==='log'||o.type==='gap')&&this.y>1.15||o.type==='arch'&&this.slide>0;
   if(!safe){if(this.shield>0){this.shield=0;this.invincible=1.5;this.events.push({type:'shield-hit'});}else{this.health--;this.hits++;this.invincible=2;this.events.push({type:'hit'});if(!this.health){this.status='lost';break;}}}
  }
  if(this.status==='playing'&&this.time>=DURATION){this.status='won';this.events.push({type:'win'});}
 }
 retry(){if(this.status!=='lost')return;this.time=this.checkpoint;this.health=3;this.lane=0;this.x=0;this.jump=this.slide=0;this.invincible=3;this.status='playing';this.seen=new Set(this.track.filter(o=>o.time<this.time).map(o=>o.id));this.events=[];}
}
export function complete(p,run){if(run.status!=='won'||run.rewarded)return 0;run.rewarded=true;const i=run.level.index,rating=1+(run.coins>=300?1:0)+(run.hits<=2?1:0);p.unlocked=Math.min(15,Math.max(p.unlocked,i+2));p.stars[i]=Math.max(p.stars[i],rating);p.best[i]=Math.max(p.best[i],run.coins);p.coins+=run.level.bonus;return run.level.bonus;}

export function snapshot(run){if(!run)return null;return {level:run.level.index,time:run.time,lane:run.lane,x:run.x,jump:run.jump,slide:run.slide,health:run.health,coins:run.coins,hits:run.hits,magnet:run.magnet,shield:run.shield,invincible:run.invincible,status:run.status,checkpoint:run.checkpoint,seen:[...run.seen],claimed:[...run.claimed],rewarded:run.rewarded};}
export function restore(data,progress){
 if(!data||!Number.isInteger(data.level)||data.level<0||data.level>=progress.unlocked||!['playing','lost','won'].includes(data.status))return null;
 const run=new Run(data.level),limits={time:DURATION,x:2.55,jump:1.05,slide:.95,health:3,coins:2000,hits:1000,magnet:12,shield:15,invincible:3};
 for(const [k,max]of Object.entries(limits)){const v=data[k];if(!Number.isFinite(v))return null;run[k]=Math.max(k==='x'?-max:0,Math.min(max,v));}
 run.lane=[-1,0,1].includes(data.lane)?data.lane:0;run.health=Math.floor(run.health);run.status=data.status;
 if(run.status==='playing'&&(!run.health||run.time>=DURATION))return null;
 if(run.status==='won'&&run.time!==DURATION)return null;
 run.checkpoint=Math.min(180,Math.floor(run.time/60)*60);
 const ids=new Set(run.track.map(o=>o.id));run.seen=new Set(Array.isArray(data.seen)?data.seen.filter(id=>ids.has(id)):[]);run.claimed=new Set(Array.isArray(data.claimed)?data.claimed.filter(id=>ids.has(id)):[]);
 run.rewarded=data.rewarded===true;return run;
}
