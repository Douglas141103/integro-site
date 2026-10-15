import {SIZE,HEIGHT,WATER_LEVEL,index} from './craft-config.js';
import {BLOCKS,isProp,isCube} from './craft-items.js';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n)),finite=(n,d)=>Number.isFinite(n)?n:d;
const directions=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[0,-1,0]];
const pos=n=>({x:n%SIZE,z:Math.floor(n/SIZE)%SIZE,y:Math.floor(n/(SIZE*SIZE))});
const hash=(x,y,z)=>{const n=Math.sin(x*127.1+y*73.13+z*311.7)*43758.5453;return n-Math.floor(n)};
export function upgradeSave(raw){
 if(!raw||![1,2].includes(raw.version))return null;
 if(raw.version===2)return raw;
 const convert=n=>index(n%48,Math.floor(n/(48*48)),Math.floor(n/48)%48);
 const entries=a=>(Array.isArray(a)?a:[]).filter(e=>Array.isArray(e)&&Number.isInteger(e[0])&&e[0]>=0&&e[0]<48*48*30).map(([n,v])=>[convert(n),v]);
 return {...raw,version:2,edits:entries(raw.edits),props:entries(raw.props)};
}
export function terrainHeight(x,z){
 if(x>=58&&x<=78&&z>=13&&z<=29)return 9;
 const river=Math.abs(x-(62+Math.sin(z*.09)*5));
 if(z>45&&river<3||Math.hypot(x-77,z-73)<11)return 3;
 if(z>45&&river<5||Math.hypot(x-77,z-73)<13)return 5;
 return Math.floor(7+Math.sin(x*.13)*2+Math.cos(z*.17)*2+Math.max(0,1-Math.hypot(x-81,z-39)/16)*11+Math.max(0,1-Math.hypot(x-27,z-77)/17)*12);
}
export function generateExpansion(w){
 for(let x=0;x<SIZE;x++)for(let z=0;z<SIZE;z++){
  if(x<48&&z<48)continue;const h=terrainHeight(x,z);
  for(let y=0;y<=h;y++){
   let id=y===0?11:y<h-2?3:y<h?2:h<6?6:h>14?10:1;
   if(id===3){const r=hash(x,y,z);if(r<.017)id=39;else if(r<.03)id=40;else if(r<.035&&y<9)id=41;else if(r<.037&&y<6)id=42;
    const cave=y>1&&y<h-3&&Math.sin(x*.25)+Math.sin(z*.22)+Math.cos(y*.65)>2.25;if(cave)id=0;
   }w.cells[index(x,y,z)]=id;
  }
  if(h>5&&h<13&&!(x>=56&&x<=80&&z>=11&&z<=32)&&hash(x,0,z)<.018&&x>2&&z>2&&x<SIZE-3&&z<SIZE-3){for(let y=h+1;y<=h+4;y++)w.cells[index(x,y,z)]=4;for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++)for(let y=h+3;y<=h+5;y++)if(!w.get(x+a,y,z+b))w.cells[index(x+a,y,z+b)]=5;}
 }
 const put=(x,y,z,id)=>{w.cells[index(x,y,z)]=id};
 // Village on a stable plateau, with doors facing its central path.
 for(const bx of [60,72]){for(let x=bx;x<bx+5;x++)for(let z=16;z<22;z++){put(x,10,z,9);for(let y=11;y<=13;y++)put(x,y,z,x===bx||x===bx+4||z===16||z===21?9:0);put(x,14,z,7)}put(bx+2,11,21,13);put(bx+2,12,21,0);put(bx+1,12,16,8);put(bx+3,12,16,8);put(bx+1,11,18,15);put(bx+3,11,18,18);put(bx+2,10,22,12);}
 for(let x=58;x<=79;x++)for(let z=24;z<=26;z++)put(x,9,z,7);
 put(66,10,20,21);put(68,10,20,19);put(70,10,20,60);
 // An open stair-shaped quarry gives access to ores without trapping beginners.
 for(let x=79;x<=89;x++){const floor=Math.max(2,7-Math.floor((89-x)/2));for(let z=34;z<=36;z++){for(let y=floor+1;y<HEIGHT;y++)put(x,y,z,0);put(x,floor,z,3);if(x%2===0)put(x,floor+1,z,12);}put(x,floor+1,33,x%4===0?42:x%3===0?41:x%2===0?40:39);}
 for(let x=90;x<SIZE;x++)for(let z=34;z<=36;z++){for(let y=8;y<HEIGHT;y++)put(x,y,z,0);put(x,7,z,3)}
 // Short working railway through the plaza. Players may extend it.
 for(let x=60;x<=78;x++)put(x,10,28,55);
}
export function adventureMethods(proto){const original={};for(const k of ['mine','use','useAnimal','tickLife','bucket','place','set','home','update'])original[k]=proto[k];
 return {
 initAdventure(raw){
  this.features=new Map();for(let n=0;n<this.cells.length;n++)if(isProp(this.cells[n]))this.features.set(n,this.cells[n]);
  this.riding=null;this.flowTime=0;this.gardenTime=0;this.mineProgress=null;this.toolWear={};this.enchants={};
  this.vitals={health:clamp(finite(raw?.vitals?.health,100),1,100),hunger:clamp(finite(raw?.vitals?.hunger,100),0,100)};
  this.xp=clamp(finite(raw?.xp,0),0,999999);this.respawn=raw?.respawn&&['x','y','z'].every(k=>Number.isFinite(raw.respawn[k]))?{...raw.respawn}:null;
  for(const [id,b]of BLOCKS.entries())if(b?.durability){this.toolWear[id]=clamp(finite(raw?.toolWear?.[id],b.durability),1,b.durability);this.enchants[id]=clamp(Math.floor(finite(raw?.enchants?.[id],0)),0,3)}
  this.fluidSources=new Map();this.flowCells=new Set();
  for(const [n,id]of this.features)if(id===22||id===23)this.fluidSources.set(n,id);
  if(raw?.adventure){this.fluidSources.clear();for(const [n,id]of raw.fluidSources||[])if(Number.isInteger(n)&&this.cells[n]===id&&[22,23].includes(id))this.fluidSources.set(n,id);for(const n of raw.flowCells||[])if(Number.isInteger(n)&&[22,23].includes(this.cells[n])&&!this.fluidSources.has(n))this.flowCells.add(n);}
  for(const [n,m]of raw?.props||[])if(this.features.has(n)&&m&&typeof m==='object'){
   const id=this.cells[n],old=this.props.get(n)||{};
   if([37,38].includes(id))Object.assign(old,{planted:Math.max(0,finite(m.planted,this.lifeTime)),growth:clamp(finite(m.growth,0),0,180),stage:clamp(Math.floor(finite(m.stage,0)),0,3)});
   if([57,58,59].includes(id))Object.assign(old,{on:m.on===true,powered:m.powered===true,extended:m.extended===true,rot:clamp(Math.floor(finite(m.rot,0)),0,3)});
   this.props.set(n,old);
  }
  this.vehicles=(Array.isArray(raw?.vehicles)?raw.vehicles:[]).filter(v=>[54,56].includes(v.type)&&['x','y','z','yaw'].every(k=>Number.isFinite(v[k]))&&v.x>0&&v.x<SIZE&&v.z>0&&v.z<SIZE).slice(0,12).map(v=>({...v}));
  if(!raw?.adventure){Object.assign(this.inventory,{34:8,35:8,47:1,52:1,54:1,55:24,56:1,57:16,58:2});
   for(const [x,z]of [[73,61],[76,61],[86,65],[88,67]]){const y=this.surface(x,z)+1;if(this.animals.length<40)this.animals.push({type:'capybara',x:x+.5,z:z+.5,y:Math.max(y,WATER_LEVEL-.45),yaw:2,turn:0,feedAt:0,milkAt:0,bornAt:-300});}
   this.vehicles.push({type:56,x:65.5,y:10.1,z:28.5,yaw:Math.PI/2});
  }
  this.villagers=[{x:65.5,y:10,z:23.5,name:'Lia · agricultora',trade:'farmer'},{x:69.5,y:10,z:23.5,name:'Bento · minerador',trade:'miner'}];
  this.lifeDirty=true;
 },
 trackFeature(n,id){if(!this.features)return;if(isProp(id))this.features.set(n,id);else this.features.delete(n);if(![22,23].includes(id)){this.fluidSources?.delete(n);this.flowCells?.delete(n)}},
 adventureSave(){return {adventure:1,worldSize:SIZE,toolWear:{...this.toolWear},enchants:{...this.enchants},vitals:{...this.vitals},xp:this.xp,respawn:this.respawn,vehicles:this.vehicles.map(v=>({...v})),fluidSources:[...this.fluidSources],flowCells:[...this.flowCells]};},
 biome(){const p=this.player;return p.x>=58&&p.x<=80&&p.z>=12&&p.z<=31?'VILA INTEGRO':p.x>55&&p.z>48?'RIO DAS CAPIVARAS':p.y>14?'MONTANHAS NEVADAS':p.x>74&&p.z>30&&p.z<45?'MINAS DE CRISTAL':p.y<6?'PRAIA DAS CONCHAS':'VALE VERDE';},
 home(){original.home.call(this);if(this.respawn&&this.respawn.x>1&&this.respawn.x<SIZE-1&&this.respawn.z>1&&this.respawn.z<SIZE-1&&this.respawn.y>0&&this.respawn.y<HEIGHT+10&&!this.collides(this.respawn.x,this.respawn.y,this.respawn.z)){Object.assign(this.player,this.respawn,{vy:0});}},
 update(dt,input={}){const vy=this.player.vy;original.update.call(this,dt,input);if(!this.creative&&vy<-12&&this.player.grounded&&!this.inWater())this.vitals.health=Math.max(25,this.vitals.health-Math.round((Math.abs(vy)-12)*2));},
 wear(id){const b=BLOCKS[id];if(!b?.durability||this.creative||!this.inventory[id])return;this.toolWear[id]=(this.toolWear[id]||b.durability)-1;if(this.toolWear[id]<=0){this.inventory[id]=Math.max(0,this.inventory[id]-1);this.toolWear[id]=b.durability;if(!this.inventory[id])this.notice=b.name+' gastou. Fabrique outra na bancada.';}},
 mine(p){const id=this.get(p.x,p.y,p.z),tool=BLOCKS[this.selected];if([37,38].includes(id))return this.harvest(p)?id:false;
  if(id===63||id===59&&this.meta(p).extended){this.notice='Desligue o pistão antes de remover.';return false}
  if(!this.creative&&id>=39&&id<=42){const required=id===39?1:id===40?2:3;if(!tool?.tier||tool.tier<required||!this.inventory[this.selected]){this.notice='Use uma picareta '+(required===1?'de madeira ou melhor.':required===2?'de pedra ou ferro.':'de ferro.');return false}}
  if(!this.creative&&id&&id!==11&&this.nearby(p)&&!BLOCKS[id]?.fluid){const key=index(p.x,p.y,p.z),pick=!!tool?.tier&&this.inventory[this.selected]>0,axe=this.selected===50&&this.inventory[50]>0,shovel=this.selected===51&&this.inventory[51]>0;let hits=id>=39&&id<=42?3:id===3?3:id===4?3:1;if(pick&&(id===3||id>=39&&id<=42))hits=Math.max(1,hits-tool.tier+1-(this.enchants[this.selected]||0));if(axe&&[4,9].includes(id)||shovel&&[1,2,6,33].includes(id))hits=1;const m=this.mineProgress?.key===key&&this.mineProgress.tool===this.selected?this.mineProgress:{key,tool:this.selected,hits:0};m.hits++;this.mineProgress=m;if(m.hits<hits){this.notice='Minerando: '+m.hits+'/'+hits+' · toque em Quebrar novamente';return false}}
  const result=original.mine.call(this,p);if(result){this.mineProgress=null;if(!this.creative){this.xp+=id>=39&&id<=42?4:1;this.wear(this.selected);if(id===39||id===42){this.inventory[id]--;const out=id===39?43:46;this.inventory[out]=Math.min(9999,this.inventory[out]+1+(this.enchants[this.selected]>=2?1:0))}}this.solveCircuits();}return result;
 },
 place(p){const ok=original.place.call(this,p);if(ok)this.solveCircuits();return ok;},
 eat(){const id=this.selected;if(id===64&&this.inventory[id]){this.notice='Asse a carne na fornalha antes de comer.';return true}if(![32,36,30,65].includes(id)||!this.inventory[id])return false;if(this.vitals.hunger>=100&&this.vitals.health>=100){this.notice='Você já está alimentado e descansado.';return true}this.inventory[id]--;if(id===30)this.inventory[24]++;this.vitals.hunger=clamp(this.vitals.hunger+(id===65?55:id===32?35:id===36?20:25),0,100);this.vitals.health=clamp(this.vitals.health+(id===65?20:12),0,100);this.notice='Que delícia! Fome e energia recuperadas.';return true;},
 farm(target){if(!target||!this.nearby(target))return null;const id=this.selected,soil=this.get(target.x,target.y,target.z);
  if(id===52){if(!this.creative&&!this.inventory[52])return 'Pegue a enxada na mochila.';if(![1,2,33].includes(soil)||this.get(target.x,target.y+1,target.z))return 'Use a enxada em terra ou grama com espaço livre acima.';this.set(target.x,target.y,target.z,33);this.wear(52);return 'Terra preparada! Selecione sementes e toque em Usar.';}
  if(id===34||id===35){if(!this.creative&&!this.inventory[id])return 'Suas sementes acabaram. Compre ou colha mais.';const p={x:target.x,y:target.y+1,z:target.z};if(soil!==33||this.occupied(p.x,p.y,p.z)||this.overlaps(p.x,p.y,p.z))return 'Plante em terra preparada com a enxada.';if(!this.set(p.x,p.y,p.z,id===34?37:38))return 'Não há espaço para plantar.';this.setMeta(p,{growth:0,stage:0,planted:this.lifeTime});if(!this.creative)this.inventory[id]--;return 'Plantado! Cresce em 2 min perto da água ou 3 min sem irrigação.';}
  return null;
 },
 irrigated(p){for(let dx=-4;dx<=4;dx++)for(let dz=-4;dz<=4;dz++)if(Math.abs(dx)+Math.abs(dz)<=4){const x=p.x+dx,z=p.z+dz;if(x<0||z<0||x>=SIZE||z>=SIZE)continue;for(let y=p.y-2;y<=p.y;y++)if(this.get(x,y,z)===22)return true;if(p.y<=7&&this.surface(x,z)<WATER_LEVEL-1)return true}return false;},
 harvest(p){const id=this.get(p.x,p.y,p.z),m=this.meta(p);if(![37,38].includes(id)||!this.nearby(p))return false;if((m.growth||0)<180){this.notice='Crescendo: '+Math.floor((m.growth||0)/1.8)+'%. Aguarde a colheita.';return false}const food=id===37?31:36,seed=id===37?34:35;if(this.inventory[food]>9996||this.inventory[seed]>9997){this.notice='Guarde itens no baú antes de colher.';return false}this.inventory[food]+=3;this.inventory[seed]+=2;this.set(p.x,p.y,p.z,0);this.xp+=5;this.notice='Colheita pronta: +3 '+BLOCKS[food].name+' e +2 sementes!';return true;},
 use(p){if(!this.nearby(p))return 'Aproxime-se para usar.';const id=this.get(p.x,p.y,p.z);
  if([37,38].includes(id)){this.harvest(p);const n=this.notice;this.notice=null;return n}
  if(id===58){this.setMeta(p,{...this.meta(p),on:!this.meta(p).on});this.solveCircuits();return 'Circuito '+(this.meta(p).on?'ligado':'desligado')+'. Conecte fios à porta, luminária ou pistão.'}
  if(id===15){const s=original.use.call(this,p);this.vitals.health=100;this.respawn={x:this.player.x,y:this.player.y,z:this.player.z};return s+' Seu retorno foi marcado aqui.'}
  if(id===57)return 'Fio de energia. Ligue uma alavanca à porta, luminária ou pistão com fios encostados.';
  return original.use.call(this,p);
 },
 huntAnimal(i){
  const a=Number.isInteger(i)?this.animals[i]:null;
  if(!a||Math.hypot(a.x-this.player.x,a.y-this.player.y,a.z-this.player.z)>4)return 'Aproxime-se do animal para caçar.';
  if(this.baby(a))return 'Este animal ainda é filhote. Deixe crescer.';
  const amount={cow:3,ox:4,pig:3,sheep:2,capybara:2}[a.type];
  if(!amount)return 'Este animal não pode ser coletado.';
  if((this.inventory[64]||0)+amount>9999)return 'Sua mochila está cheia. Guarde a carne no baú.';
  // Remove and award together; subsequent actions must acquire a fresh ray target.
  this.animals.splice(i,1);this.inventory[64]=(this.inventory[64]||0)+amount;
  this.xp=Math.min(999999,this.xp+3);this.lifeDirty=true;
  return '+'+amount+' carne crua na mochila. Asse na fornalha para comer!';
 },
 baby(a){return this.lifeTime-(a.bornAt??-300)<240;},
 useAnimal(i){const a=this.animals[i];if(!a||Math.hypot(a.x-this.player.x,a.y-this.player.y,a.z-this.player.z)>7)return 'Aproxime-se do animal.';
  if(a.type==='sheep'&&this.selected===50&&this.inventory[50]){if(this.lifeTime<(a.shearAt||0))return 'A lã ainda está crescendo.';a.shearAt=this.lifeTime+120;this.inventory[61]+=3;this.wear(50);return 'Ovelha cuidada: +3 lã!'}
  if(this.baby(a)&&this.selected===24)return 'O filhote ainda está crescendo.';
  const food=this.selected;if([31,36].includes(food)&&this.inventory[food]){
   if(this.lifeTime<a.feedAt)return 'Já está alimentado! Aguarde '+Math.ceil(a.feedAt-this.lifeTime)+' s.';
   this.inventory[food]--;a.feedAt=this.lifeTime+30;if(!this.creative)this.coins=Math.min(999999,this.coins+5);a.loveUntil=this.lifeTime+45;
   if(!this.baby(a)&&this.lifeTime>=(a.breedAt||0)&&this.animals.length<40){const mate=this.animals.find(b=>b!==a&&b.type===a.type&&!this.baby(b)&&this.lifeTime<(b.loveUntil||0)&&this.lifeTime>=(b.breedAt||0)&&Math.hypot(a.x-b.x,a.z-b.z)<6);if(mate){a.babyDue=this.lifeTime+30;a.breedAt=mate.breedAt=this.lifeTime+240;a.loveUntil=mate.loveUntil=0;return 'Família crescendo! Um filhote chegará em 30 segundos.'}}
   return (this.baby(a)?'Filhote alimentado!':'Animal alimentado! Alimente outro adulto da mesma espécie por perto para ter um filhote.')+(this.creative?'':' +5 integros');
  }
  return a.type==='capybara'?'Capivara tranquila! Ofereça trigo ou cenoura. Duas adultas alimentadas podem ter filhotes.':original.useAnimal.call(this,i);
 },
 trade(who,offer){const v=this.villagers[who];if(!v||Math.hypot(v.x-this.player.x,v.z-this.player.z)>7||this.creative)return false;const r=TRADES[v.trade]?.[offer];if(!r||Object.entries(r.cost).some(([id,n])=>this.inventory[id]<n)||this.inventory[r.out]+r.count>9999)return false;for(const [id,n]of Object.entries(r.cost))this.inventory[id]-=n;this.inventory[r.out]+=r.count;this.xp+=2;return true;},
 enchant(p,id){if(this.get(p.x,p.y,p.z)!==60||!this.nearby(p)||!BLOCKS[id]?.tier||!this.inventory[id]||(this.enchants[id]||0)>=3||this.xp<20||this.inventory[46]<1)return false;this.xp-=20;this.inventory[46]--;this.enchants[id]=(this.enchants[id]||0)+1;this.toolWear[id]=BLOCKS[id].durability;return true;},
 bucket(target){const id=this.selected;
  const p=target?.place;if([25,26].includes(id)&&this.fluidSources.size>=64){this.notice='Recolha uma fonte de líquido antes de colocar outra.';return false}if([25,26].includes(id)&&p&&this.nearby(p)&&!this.overlaps(p.x,p.y,p.z)&&(this.creative||this.inventory[id]>0)){const existing=this.get(p.x,p.y,p.z),opposite=id===25?23:22;if(existing===opposite){this.set(p.x,p.y,p.z,3);for(const [dx,,dz]of directions.slice(0,4))if(this.get(p.x+dx,p.y,p.z+dz)===opposite)this.set(p.x+dx,p.y,p.z+dz,3);if(!this.creative){this.inventory[id]--;this.inventory[24]++}this.spreadFluids();return true}}
  const ok=original.bucket.call(this,target);if(ok){if(id===24&&!target.lake){this.fluidSources.delete(index(target.x,target.y,target.z));}else if(id!==24&&target.place){const p=target.place,n=index(p.x,p.y,p.z),v=this.get(p.x,p.y,p.z);if([22,23].includes(v))this.fluidSources.set(n,v)}this.spreadFluids();}return ok;},
 spreadFluids(){
  // Recalculate a bounded flow from sources; removing a source drains its stream.
  const desired=new Map(),queue=[];for(const [n,id]of this.fluidSources){if(this.cells[n]!==id){this.fluidSources.delete(n);continue}queue.push([n,id,0]);desired.set(n,id)}
  const pass=n=>!this.smallCells.has(n)&&!this.fineFluidCells?.has(n)&&(!this.cells[n]||this.flowCells.has(n)||[22,23].includes(this.cells[n]));
  let cursor=0;while(cursor<queue.length&&desired.size<400){const [n,id,depth]=queue[cursor++],p=pos(n);if(p.y<=1)continue;const down=index(p.x,p.y-1,p.z);const below=this.cells[down];
   if(below&&[22,23].includes(below)&&below!==id){this.set(p.x,p.y-1,p.z,3);this.fluidSources.delete(down);continue}
   if(pass(down)&&!desired.has(down)){desired.set(down,id);queue.push([down,id,depth]);continue}
   if(depth>=(id===22?4:2))continue;
   for(const [dx,,dz]of directions.slice(0,4)){const x=p.x+dx,z=p.z+dz;if(x<1||z<1||x>=SIZE-1||z>=SIZE-1)continue;const next=index(x,p.y,z),other=this.cells[next];if([22,23].includes(other)&&other!==id){this.set(x,p.y,z,3);this.fluidSources.delete(next);continue}if(pass(next)&&!desired.has(next)&&desired.size<400){desired.set(next,id);queue.push([next,id,depth+1]);}}
  }
  for(const n of [...this.flowCells])if(!desired.has(n)){const p=pos(n);if([22,23].includes(this.cells[n]))this.set(p.x,p.y,p.z,0)}this.flowCells.clear();
  for(const [n,id]of desired){if(this.fluidSources.has(n))continue;const p=pos(n);if(this.cells[n]!==id)this.set(p.x,p.y,p.z,id);this.flowCells.add(n)}
 },
 solveCircuits(){if(!this.features)return;const powered=new Set(),queue=[];
  for(const [n,id]of this.features)if(id===58&&this.props.get(n)?.on){powered.add(n);queue.push(n)}
  for(let i=0;i<queue.length&&i<256;i++){const p=pos(queue[i]);for(const [dx,dy,dz]of directions){const x=p.x+dx,y=p.y+dy,z=p.z+dz;if(x<0||z<0||x>=SIZE||z>=SIZE||y<1||y>=HEIGHT)continue;const n=index(x,y,z),id=this.cells[n];if([57,58,13,20,59].includes(id)&&!powered.has(n)){powered.add(n);if(id===57)queue.push(n)}}}
  for(const [n,id]of [...this.features])if([57,13,20,59].includes(id)){const p=pos(n),old=this.meta(p),on=powered.has(n);if(!on&&!old.powered)continue;const m={...old,powered:on};if(id===13){m.open=on;this.setMeta(p,m);if(this.player&&this.collides(this.player.x,this.player.y,this.player.z))m.open=true;}if(id===20)m.lit=on;
   if(id===59){const r=m.rot||0,dx=[0,1,0,-1][r],dz=[-1,0,1,0][r],front={x:p.x+dx,y:p.y,z:p.z+dz},end={x:p.x+dx*2,y:p.y,z:p.z+dz*2},b=this.get(front.x,front.y,front.z);
    if(on&&!m.extended&&!this.smallCells.has(index(front.x,front.y,front.z))&&(b===0||isCube(b)&&b!==11)&&!this.occupied(end.x,end.y,end.z)&&!this.overlaps(front.x,front.y,front.z)&&!this.overlaps(end.x,end.y,end.z)&&end.x>0&&end.z>0&&end.x<SIZE-1&&end.z<SIZE-1){if(b)this.set(end.x,end.y,end.z,b);this.set(front.x,front.y,front.z,63);m.extended=true}
    if(!on&&m.extended){if(b===63)this.set(front.x,front.y,front.z,0);m.extended=false}
   }this.setMeta(p,m);
  }
 },
 waterAt(x,z){const xx=Math.floor(x),zz=Math.floor(z);if(xx<1||zz<1||xx>=SIZE-1||zz>=SIZE-1)return null;for(let y=HEIGHT-2;y>0;y--)if(this.get(xx,y,zz)===22&&!this.get(xx,y+1,zz))return y+.65;return this.surface(xx,zz)<WATER_LEVEL-1?WATER_LEVEL-.15:null;},
 launchVehicle(target){const type=this.selected;if(![54,56].includes(type)||!target||!this.nearby(target)||!this.creative&&!this.inventory[type]||this.vehicles.length>=12)return false;const x=target.x+.5,z=target.z+.5,water=this.waterAt(x,z),y=type===54?water:target.y+.1;if(type===54&&water===null||type===56&&this.get(target.x,target.y,target.z)!==55||this.vehicles.some(v=>Math.hypot(v.x-x,v.z-z)<1))return false;if(!this.creative)this.inventory[type]--;this.vehicles.push({type,x,y,z,yaw:this.player.yaw});this.lifeDirty=true;return true;},
 board(i){const v=this.vehicles[i];if(!v||Math.hypot(v.x-this.player.x,v.z-this.player.z)>7)return false;this.riding=i;Object.assign(this.player,{x:v.x,y:v.y+.4,z:v.z,vy:0});return true;},
 dismount(){const v=this.vehicles[this.riding];if(!v)return false;for(let radius=1;radius<=3;radius++)for(const [dx,,dz]of directions.slice(0,4)){const x=v.x+dx*radius,z=v.z+dz*radius,y=this.surface(Math.floor(x),Math.floor(z))+1.04;if(y>=WATER_LEVEL&&!this.collides(x,y,z)){Object.assign(this.player,{x,y,z,vy:0});this.riding=null;return true}}this.notice='Aproxime-se da margem para desembarcar.';return false;},
 drive(dt,input){const v=this.vehicles[this.riding];if(!v){this.riding=null;return}const p=this.player,len=Math.max(1,Math.hypot(input.x||0,input.z||0)),speed=v.type===54?6:8,dx=((input.x||0)*Math.cos(p.yaw)+(input.z||0)*Math.sin(p.yaw))/len*dt*speed,dz=(-(input.x||0)*Math.sin(p.yaw)+(input.z||0)*Math.cos(p.yaw))/len*dt*speed;
  for(const axis of ['x','z']){const x=v.x+(axis==='x'?dx:0),z=v.z+(axis==='z'?dz:0);const y=v.type===54?this.waterAt(x,z):this.get(Math.floor(x),Math.round(v.y),Math.floor(z))===55?v.y:null;if(y!==null&&!this.collides(x,y+.35,z)){v.x=x;v.z=z;v.y=y;}}
  if(dx||dz)v.yaw=Math.atan2(-dx,-dz);Object.assign(p,{x:v.x,y:v.y+.4,z:v.z,vy:0});
 },
 tickLife(dt,move=true){original.tickLife.call(this,dt,move);this.gardenTime+=dt;this.flowTime+=dt;
  if(move&&!this.creative){this.vitals.hunger=Math.max(0,this.vitals.hunger-dt*.065);if(this.vitals.hunger>60)this.vitals.health=Math.min(100,this.vitals.health+dt*.5);if(this.vitals.hunger<=0)this.vitals.health=Math.max(25,this.vitals.health-dt*.2);}
  if(this.gardenTime>=1){const elapsed=this.gardenTime;this.gardenTime=0;for(const [n,id]of [...this.features])if([37,38].includes(id)){const p=pos(n),m={...this.meta(p)};if(this.get(p.x,p.y-1,p.z)!==33){this.set(p.x,p.y,p.z,0);continue}m.growth=Math.min(180,(m.growth||0)+elapsed*(this.irrigated(p)?1.5:1));const stage=Math.min(3,Math.floor(m.growth/60));if(stage!==m.stage){m.stage=stage;this.lifeDirty=true}this.props.set(n,m)}
   for(const a of [...this.animals]){if(a.babyDue&&a.babyDue<=this.lifeTime&&this.animals.length<40){a.babyDue=0;this.animals.push({...a,bornAt:this.lifeTime,breedAt:this.lifeTime+240,loveUntil:0,feedAt:this.lifeTime+5,milkAt:this.lifeTime+240,turn:0});this.lifeDirty=true;this.notice='Nasceu um filhote de '+({capybara:'capivara',cow:'vaca',pig:'porco',ox:'boi',sheep:'ovelha'}[a.type])+'!';}}
  }
  if(this.flowTime>=1){this.flowTime=0;this.spreadFluids();}
 },
 };
}
export const TRADES={farmer:[{name:'Trocar 6 trigos por 4 cenouras',cost:{31:6},out:36,count:4},{name:'Trocar 3 cenouras por 6 sementes',cost:{36:3},out:34,count:6},{name:'Trocar 4 trigos por 2 pães',cost:{31:4},out:32,count:2}],miner:[{name:'Trocar 8 carvões por 2 barras de ferro',cost:{43:8},out:44,count:2},{name:'Trocar 4 barras de ouro por 1 cristal',cost:{45:4},out:46,count:1}]};
