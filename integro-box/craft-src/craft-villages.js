import {SIZE,HEIGHT,index} from './craft-config.js';
import {BLOCKS,itemBoxes} from './craft-items.js';
export const CREATURE_NAMES={cow:'Vaca',pig:'Porco',ox:'Boi',sheep:'Ovelha',capybara:'Capivara'};
export const VILLAGE_INFO={palms:{name:'Vila das Palmeiras',description:'Horta, curral e moradores que ajudam a cuidar das criaturas.',color:'#f2ce74'},crystal:{name:'Vila dos Cristais',description:'Oficina, fornalha, biblioteca de encantamentos e trocas de minerais.',color:'#9edce9'}};
export const VILLAGE_TRADES={rancher:[{name:'8 trigos por 1 ovelha',cost:{31:8},out:62,count:1},{name:'6 cenouras por 1 capivara',cost:{36:6},out:53,count:1},{name:'4 lãs por 12 cercas',cost:{61:4},out:14,count:12}],builder:[{name:'8 pedras por 8 tijolos',cost:{3:8},out:7,count:8},{name:'6 barras de ferro por 1 picareta de ferro',cost:{44:6},out:49,count:1},{name:'3 cristais por 1 mesa de encantamentos',cost:{46:3},out:60,count:1}]};
export const VILLAGE_QUESTS={harvest:{name:'A primeira colheita',text:'Traga 8 trigos para abastecer a vila.',cost:{31:8},reward:{34:8,35:8},xp:15},shelter:{name:'Um lar para as criaturas',text:'Acolha uma criatura encontrada e traga 4 tábuas para o curral.',cost:{9:4},tamed:true,reward:{14:16,31:10},xp:20},workshop:{name:'Acenda a oficina',text:'Traga 6 carvões para o ferreiro.',cost:{43:6},reward:{44:3},xp:15},crystals:{name:'Segredos da montanha',text:'Traga 2 cristais para os estudos da aldeã.',cost:{46:2},reward:{49:1},xp:25}};
const footprint=(v,x,z)=>x>=v.x-2&&x<=v.x+25&&z>=v.z-2&&z<=v.z+25;
function validSite(v){return v&&VILLAGE_INFO[v.id]&&[v.x,v.z,v.h].every(Number.isInteger)&&v.x>=100&&v.z>=4&&v.x+25<SIZE&&v.z+25<SIZE&&v.h>=6&&v.h<=12;}
export function generateVillages(w,raw){
 const sites=[];
 if(raw?.settlementsVersion===1){for(const v of Array.isArray(raw.settlements)?raw.settlements:[])if(validSite(v)&&!sites.some(s=>s.id===v.id||footprint(s,v.x,v.z)))sites.push({id:v.id,x:v.x,z:v.z,h:v.h});}
 else {
  const occupied=[];
  for(const field of ['edits','props','smallCells','fluidSources'])for(const e of Array.isArray(raw?.[field])?raw[field]:[])if(Array.isArray(e)&&Number.isInteger(e[0])&&e[0]>=0&&e[0]<SIZE*SIZE*HEIGHT)occupied.push([e[0]%SIZE,Math.floor(e[0]/SIZE)%SIZE]);
  for(const e of Array.isArray(raw?.fineSources)?raw.fineSources:[])if(Array.isArray(e)&&Number.isInteger(e[0]))occupied.push([Math.floor(e[0]%(SIZE*2)/2),Math.floor(Math.floor(e[0]/(SIZE*2))%(SIZE*2)/2)]);
  for(const p of [...(Array.isArray(raw?.animals)?raw.animals:[]),...(Array.isArray(raw?.vehicles)?raw.vehicles:[]),raw?.player,raw?.respawn])if(p&&Number.isFinite(p.x)&&Number.isFinite(p.z))occupied.push([p.x,p.z]);
  const candidates=[[112,24],[144,120]];for(let x=104;x<=160;x+=28)for(let z=8;z<=148;z+=28)candidates.push([x,z]);
  for(const id of ['palms','crystal'])for(const [x,z]of candidates){const v={id,x,z,h:8};if(sites.some(s=>Math.abs(s.x-x)<28&&Math.abs(s.z-z)<28)||occupied.some(([a,b])=>footprint(v,a,b)))continue;sites.push(v);break;}
 }
 w.settlements=sites;
 for(const v of sites){const {x,z,h}=v,put=(a,y,b,id)=>{w.cells[index(x+a,y,z+b)]=id};
  for(let a=0;a<24;a++)for(let b=0;b<24;b++)for(let y=1;y<HEIGHT;y++)put(a,y,b,y>h?0:y===h?1:y<h-2?3:2);
  // Two accessible houses, a central plaza and an open southern entrance.
  for(const bx of [2,15]){for(let a=bx;a<bx+7;a++)for(let b=2;b<9;b++){put(a,h,b,9);for(let y=h+1;y<=h+3;y++)put(a,y,b,a===bx||a===bx+6||b===2||b===8?9:0);put(a,h+4,b,v.id==='palms'?5:7)}put(bx+3,h+1,8,13);put(bx+3,h+2,8,0);put(bx+1,h+2,2,8);put(bx+5,h+2,2,8);put(bx+1,h+1,4,15);put(bx+5,h+1,4,18);}
  for(let a=10;a<=13;a++)for(let b=0;b<24;b++)put(a,h,b,7);
  for(let a=2;a<=21;a++)for(let b=10;b<=12;b++)put(a,h,b,7);
  for(const [a,b]of [[9,9],[14,9],[9,20],[14,20]])put(a,h+1,b,20);
  put(11,h+1,5,21);put(3,h+1,6,16);put(5,h+1,6,17);
  if(v.id==='palms'){
   for(let a=2;a<=8;a++)for(let b=15;b<=20;b++){put(a,h,b,33);put(a,h+1,b,(a+b)%2?37:38);}
   // Enclosed animal shelter. The door can be opened by the player.
   for(let a=15;a<=21;a++)for(let b=15;b<=21;b++)if(a===15||a===21||b===15||b===21)put(a,h+1,b,14);
   put(18,h+1,21,13);
   put(6,h+1,6,19);
  }else{
   put(4,h+1,5,19);put(6,h+1,5,19);put(18,h+1,5,60);
   for(let a=3;a<=8;a++)for(let b=16;b<=19;b++){put(a,h,b,3);if((a+b)%3===0)put(a,h+1,b,39+(a+b)%4);}
   put(17,h+1,17,16);put(19,h+1,17,17);put(20,h+1,17,18);
  }
 }
}
export function villageMethods(proto){const useAnimal=proto.useAnimal,tickLife=proto.tickLife;
 return {
 initVillages(raw){
  this.companions=[];this.creatureSerial=Math.max(0,Math.min(1e9,Math.floor(Number(raw?.creatureSerial)||0)));this.completedQuests=new Set((Array.isArray(raw?.completedQuests)?raw.completedQuests:[]).filter(id=>VILLAGE_QUESTS[id]));
  this.discoveredCreatures=new Set((Array.isArray(raw?.discoveredCreatures)?raw.discoveredCreatures:[]).filter(t=>CREATURE_NAMES[t]));
  for(const a of (Array.isArray(raw?.companions)?raw.companions:[]).slice(0,12))if(CREATURE_NAMES[a?.type]){const clean={type:a.type,tamed:true,stay:true,follow:false};for(const k of ['creatureId','bornAt','feedAt','milkAt','breedAt','loveUntil','babyDue','shearAt'])clean[k]=Number.isFinite(a[k])?a[k]:k==='bornAt'?-300:0;this.companions.push(clean);}
  if(!raw?.villageLife){for(const v of this.settlements)if(v.id==='palms')for(const [i,type]of ['sheep','sheep','cow','cow'].entries()){if(this.animals.length+this.companions.length>=40)break;this.animals.push({type,x:v.x+17+i%2*2+.5,y:v.h+1,z:v.z+17+Math.floor(i/2)*2+.5,yaw:0,turn:0,feedAt:0,milkAt:0,bornAt:-300});}}
  this.ensureCreatureIds();
  for(const v of this.settlements){const people=v.id==='palms'?[['Mara · agricultora','farmer','harvest','As hortas são de todos! Plante, colha e traga trigo para a vila.'],['Nina · cuidadora','rancher','shelter','Alimente uma criatura para ganhar sua confiança. Depois você pode acolhê-la e soltá-la no seu curral.']]:[['Caio · ferreiro','builder','workshop','Use as fornalhas da oficina. Carvão, ferro e cristais viram ferramentas para explorar.'],['Iara · exploradora','miner','crystals','A mesa de encantamentos melhora suas picaretas. Explore as montanhas e encontre cristais!']];
   people.forEach(([name,trade,quest,dialogue],i)=>this.villagers.push({x:v.x+9+i*5+.5,y:v.h+1,z:v.z+11.5,name,trade,quest,dialogue}));
  }
 },
 ensureCreatureIds(){const seen=new Set();for(const a of [...this.animals,...this.companions]){if(!Number.isSafeInteger(a.creatureId)||a.creatureId<=0||seen.has(a.creatureId))a.creatureId=++this.creatureSerial;else this.creatureSerial=Math.max(this.creatureSerial,a.creatureId);seen.add(a.creatureId);}},
 villageSave(){return {settlementsVersion:1,settlements:this.settlements.map(v=>({...v})),villageLife:1,companions:this.companions.map(a=>({...a})),creatureSerial:this.creatureSerial,completedQuests:[...this.completedQuests],discoveredCreatures:[...this.discoveredCreatures]};},
 creature(id){return this.animals.find(a=>a.creatureId===id);},
 creatureNear(a,reach=7){return a&&Math.hypot(a.x-this.player.x,a.y-this.player.y,a.z-this.player.z)<=reach;},
 useAnimal(i){const a=this.animals[i],food=this.selected,before=this.inventory[food],message=useAnimal.call(this,i);if(a&&[31,36].includes(food)&&this.inventory[food]<before){a.tamed=true;a.stay=true;a.follow=false;this.discoveredCreatures.add(a.type);return message+' Ganhou confiança! Você pode acolher esta criatura.'}return message;},
 careCreature(id,action){const a=this.creature(id);if(!this.creatureNear(a))return 'Aproxime-se da criatura.';
  if(action==='feed'){const food=this.inventory[31]>0?31:this.inventory[36]>0?36:0;if(!food)return 'Pegue trigo ou cenoura na mochila para alimentar.';const selected=this.selected;this.selected=food;const message=this.useAnimal(this.animals.indexOf(a));this.selected=selected;return message;}
  if(action==='capture'){if(!a.tamed)return 'Alimente primeiro para ganhar a confiança da criatura.';if(this.companions.length>=12)return 'Seu abrigo de transporte está cheio. Solte uma criatura antes.';if(!this.creatureNear(a,4))return 'Chegue mais perto para acolher a criatura.';this.animals.splice(this.animals.indexOf(a),1);this.companions.push({...a,stay:true,follow:false,loveUntil:0});this.lifeDirty=true;return 'Criatura acolhida! Abra Minhas criaturas para soltá-la no curral.';}
  if(action==='follow'||action==='stay'){if(!a.tamed)return 'Alimente primeiro para ganhar confiança.';a.follow=action==='follow';a.stay=!a.follow;return a.follow?'Ela vai acompanhar você. Evite obstáculos e passagens estreitas.':'Ela vai esperar aqui. Alimente um casal para ter filhotes.';}
  if(action==='collect'){if(this.baby(a))return 'Deixe o filhote crescer primeiro.';if(a.type==='cow'&&!this.inventory[24])return 'Pegue um balde vazio na mochila.';if(a.type==='sheep'&&!this.inventory[50])return 'Pegue um machado na mochila para tosquiar.';const selected=this.selected;this.selected=a.type==='cow'?24:50;const message=this.useAnimal(this.animals.indexOf(a));this.selected=selected;return message;}
  return 'Escolha como cuidar desta criatura.';
 },
 releaseCreature(id){const i=this.companions.findIndex(a=>a.creatureId===id);if(i<0)return 'Essa criatura já saiu do abrigo.';if(this.animals.length>=40)return 'Não há espaço para mais criaturas neste mundo.';
  for(let r=2;r<=4;r++)for(const [dx,dz]of [[r,0],[-r,0],[0,r],[0,-r],[r,r],[-r,-r]]){const x=Math.floor(this.player.x)+dx+.5,z=Math.floor(this.player.z)+dz+.5;if(x<1||z<1||x>=SIZE-1||z>=SIZE-1)continue;const h=this.surface(Math.floor(x),Math.floor(z)),y=h+1;if(y<6||y>=HEIGHT-2||Math.abs(y-this.player.y)>2||!itemBoxes(this.get(Math.floor(x),h,Math.floor(z))).length||this.collides(x,y+.02,z)||this.animals.some(a=>Math.hypot(a.x-x,a.z-z)<1.5)||this.villagers.some(v=>Math.hypot(v.x-x,v.z-z)<1.5))continue;
   const [a]=this.companions.splice(i,1);this.animals.push({...a,x,y,z,yaw:0,turn:0,stay:true,follow:false,loveUntil:0});this.lifeDirty=true;return 'Criatura solta perto de você! Ela ficará esperando aqui.';
  }return 'Vá para um chão seco e livre, com espaço ao seu redor.';
 },
 completeQuest(who){const v=this.villagers[who],q=VILLAGE_QUESTS[v?.quest];if(!q||this.creative||!this.creatureNear(v)||this.completedQuests.has(v.quest)||q.tamed&&!this.discoveredCreatures.size||Object.entries(q.cost).some(([id,n])=>(this.inventory[id]||0)<n)||Object.entries(q.reward).some(([id,n])=>(this.inventory[id]||0)+n>9999))return false;
  for(const [id,n]of Object.entries(q.cost))this.inventory[id]-=n;for(const [id,n]of Object.entries(q.reward))this.inventory[id]=(this.inventory[id]||0)+n;this.xp=Math.min(999999,this.xp+q.xp);this.completedQuests.add(v.quest);return true;
 },
 tickLife(dt,move=true){tickLife.call(this,dt,move);this.ensureCreatureIds();},
 };
}
