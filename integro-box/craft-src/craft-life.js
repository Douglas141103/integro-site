import {BLOCKS,ITEM_IDS,SMELTS,sellPrice,itemBoxes,itemHeight} from './craft-items.js';
import {SIZE,HEIGHT,WATER_LEVEL,index as idx} from './craft-config.js';
const valid=n=>Number.isFinite(n),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const lifeMethods={
 initLife(raw){
  this.props=new Map();this.coins=Math.floor(clamp(valid(raw?.coins)?raw.coins:180,0,999999));this.lifeTime=valid(raw?.lifeTime)?raw.lifeTime:0;this.lifeDirty=true;
  for(const id of ITEM_IDS)if(this.inventory[id]===undefined)this.inventory[id]=0;
  if(!raw?.expansion){Object.assign(this.inventory,{12:12,13:2,14:20,15:1,16:1,17:2,18:1,19:1,20:2,21:1,24:1,25:1,26:1,31:10})}
  else for(const id of ITEM_IDS)if(id>11)this.inventory[id]=Math.floor(clamp(Number(raw.inventory?.[id])||0,0,9999));
  for(const entry of Array.isArray(raw?.props)?raw.props:[]){const [key,m]=Array.isArray(entry)?entry:[];if(!Number.isInteger(key)||!m||typeof m!=='object'||key<0||key>=this.cells.length||this.cells[key]<12||this.cells[key]>63)continue;
   const meta={rot:Math.floor(clamp(Number(m.rot)||0,0,3)),open:m.open===true,lit:m.lit!==false,stored:{}};
   if(this.cells[key]===18)for(const id of ITEM_IDS)meta.stored[id]=Math.floor(clamp(Number(m.stored?.[id])||0,0,9999));
   if(this.cells[key]===19&&SMELTS.some(s=>s.id===m.job?.id)){const r=SMELTS.find(s=>s.id===m.job.id);meta.job={id:r.id,remaining:clamp(Number(m.job.remaining)||0,0,r.seconds)}}
   this.props.set(key,meta);
  }
  this.animals=[];
  if(raw?.expansion&&Array.isArray(raw.animals))for(const a of raw.animals.slice(0,40)){if(!['cow','pig','ox','sheep','capybara'].includes(a.type)||!valid(a.x)||!valid(a.z)||a.x<1||a.z<1||a.x>SIZE-2||a.z>SIZE-2)continue;this.animals.push({type:a.type,x:a.x,z:a.z,y:this.surface(Math.floor(a.x),Math.floor(a.z))+1,yaw:valid(a.yaw)?a.yaw:0,turn:0,feedAt:valid(a.feedAt)?a.feedAt:0,milkAt:valid(a.milkAt)?a.milkAt:0,bornAt:valid(a.bornAt)?a.bornAt:-300,breedAt:valid(a.breedAt)?a.breedAt:0,loveUntil:valid(a.loveUntil)?a.loveUntil:0,babyDue:valid(a.babyDue)?a.babyDue:0,shearAt:valid(a.shearAt)?a.shearAt:0})}
  else for(const [i,type]of ['cow','pig','ox','sheep','cow','pig'].entries()){for(let n=0;n<200;n++){const x=12+(i*5+n*3)%22,z=7+(i*7+n*5)%27,h=this.surface(x,z);if(h>=5&&this.get(x,h,z)!==5&&this.get(x,h,z)!==4){this.animals.push({type,x:x+.5,z:z+.5,y:h+1,yaw:i,turn:0,feedAt:0,milkAt:0});break}}}
 },
 meta(p){return this.props.get(idx(p.x,p.y,p.z))||{rot:0}},
 setMeta(p,m){this.props.set(idx(p.x,p.y,p.z),m);this.lifeDirty=true},
 nearby(p){return p&&Math.hypot(p.x+.5-this.player.x,p.y+.5-(this.player.y+1.5),p.z+.5-this.player.z)<=7},
 occupied(x,y,z){if(this.get(x,y,z)||this.smallCells?.has(idx(x,y,z)))return true;const below=this.get(x,y-1,z);return below>=12&&below<=21&&itemHeight(below)>1},
 collisionAt(x,y,z){
  if(x<.32||z<.32||x>SIZE-.32||z>SIZE-.32)return true;
  for(let a=Math.floor(x-.29);a<=Math.floor(x+.29);a++)for(let b=Math.floor(y+.02)-1;b<=Math.floor(y+1.74);b++)for(let c=Math.floor(z-.29);c<=Math.floor(z+.29);c++)for(const q of this.detailBoxes(a,b,c)){if(x+.29>a+q[0]&&x-.29<a+q[3]&&y+1.74>b+q[1]&&y+.02<b+q[4]&&z+.29>c+q[2]&&z-.29<c+q[5])return true}
  return false;
 },
 stepMove(x,z){const p=this.player;if(!this.collides(x,p.y,z)){p.x=x;p.z=z;return}
  if(this.creative||p.vy>0||!this.collides(p.x,p.y-.12,p.z))return;
  let stair=false;for(let a=Math.floor(x-.3);a<=Math.floor(x+.3);a++)for(let c=Math.floor(z-.3);c<=Math.floor(z+.3);c++)for(let b=Math.floor(p.y)-1;b<=Math.floor(p.y+.3);b++)if(this.get(a,b,c)===12)stair=true;
  if(stair&&!this.collides(p.x,p.y+.27,p.z)&&!this.collides(x,p.y+.27,z)){p.x=x;p.z=z;p.y+=.27;p.vy=0}
 },
 buy(id){const b=BLOCKS[id],n=b?.pack||1;if(!b?.price||!ITEM_IDS.includes(id)||this.coins<b.price||this.inventory[id]+n>9999)return false;this.coins-=b.price;this.inventory[id]+=n;return true},
 sell(id,n=1){if(!ITEM_IDS.includes(id)||!Number.isInteger(n)||n<1||this.inventory[id]<n||this.creative)return false;this.inventory[id]-=n;this.coins=Math.min(999999,this.coins+sellPrice(id)*n);if(id===30)this.inventory[24]=Math.min(9999,this.inventory[24]+n);return true},
 use(p){const id=this.get(p.x,p.y,p.z);if(!this.nearby(p))return 'Aproxime-se para usar.';const m={...this.meta(p)};
  if(id===13){m.open=!m.open;const old=this.meta(p);this.setMeta(p,m);if(this.collides(this.player.x,this.player.y,this.player.z)){this.setMeta(p,old);return 'Afaste-se um pouco da porta.'}return m.open?'Porta aberta.':'Porta fechada.'}
  if(id===20){m.lit=m.lit===false;this.setMeta(p,m);return m.lit?'Luminária acesa.':'Luminária apagada.'}
  if(id===15){this.time=Math.ceil(this.time/(Math.PI*240))*Math.PI*240;return 'Você descansou. Um novo dia começou!'}
  if(id===17){let x=.5,z=.34;for(let i=0;i<(m.rot||0);i++)[x,z]=[z,1-x];const y=p.y+.55;if(this.collides(p.x+x,y,p.z+z))return 'Deixe espaço livre em volta da cadeira.';Object.assign(this.player,{x:p.x+x,y,z:p.z+z,vy:0});this.seated=true;return 'Você sentou! Mova o direcional para levantar.';}
  if(id===16)return 'Sua mesa está pronta. Selecione um pão na mochila e toque em Usar para comer.';
  return null;
 },
 chest(p,id,n,direction){if(!this.nearby(p)||this.get(p.x,p.y,p.z)!==18||!ITEM_IDS.includes(id)||!Number.isInteger(n)||n<1)return false;const m={...this.meta(p),stored:{...this.meta(p).stored}},source=direction==='put'?this.inventory:m.stored,dest=direction==='put'?m.stored:this.inventory;if((source[id]||0)<n||(dest[id]||0)+n>9999)return false;source[id]-=n;dest[id]=(dest[id]||0)+n;this.setMeta(p,m);return true},
 smelt(p,recipe){const r=SMELTS.find(s=>s.id===recipe),m={...this.meta(p)};if(!r||!this.nearby(p)||this.get(p.x,p.y,p.z)!==19||m.job||Object.entries(r.cost).some(([id,n])=>this.inventory[id]<n))return false;for(const[id,n]of Object.entries(r.cost))this.inventory[id]-=n;m.job={id:r.id,remaining:r.seconds};this.setMeta(p,m);return true},
 collectSmelt(p){const m={...this.meta(p)},r=SMELTS.find(s=>s.id===m.job?.id);if(!r||!this.nearby(p)||this.get(p.x,p.y,p.z)!==19||m.job.remaining>0||this.inventory[r.out]+r.count>9999)return false;this.inventory[r.out]+=r.count;delete m.job;this.stats.crafted+=r.count;this.setMeta(p,m);return true},
 bucket(target){const id=this.selected;if(![24,25,26].includes(id)||(!this.creative&&!this.inventory[id])||!target)return false;
  if(id===24){const source=this.get(target.x,target.y,target.z);if(![22,23].includes(source)&&!target.lake)return false;if(!this.nearby(target))return false;const out=source===23?26:25;if(this.inventory[out]>=9999)return false;if(!target.lake)this.set(target.x,target.y,target.z,0);if(!this.creative)this.inventory[24]--;this.inventory[out]++;this.selected=out;return true}
  const p=target.place,fluid=id===25?22:23;if(!p||!this.nearby(p)||this.occupied(p.x,p.y,p.z)||this.overlaps(p.x,p.y,p.z)||!this.get(p.x,p.y-1,p.z))return false;
  if(!this.set(p.x,p.y,p.z,fluid))return false;if(!this.creative){this.inventory[id]--;this.inventory[24]=Math.min(9999,this.inventory[24]+1)}
  for(const[dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]])if(this.get(p.x+dx,p.y,p.z+dz)===(fluid===22?23:22)){this.set(p.x,p.y,p.z,3);this.set(p.x+dx,p.y,p.z+dz,3)}return true;
 },
 spawnAnimal(p,id){const b=BLOCKS[id];if(!b?.animal||!this.nearby(p)||this.animals.length>=40||!this.creative&&!this.inventory[id]||this.occupied(p.x,p.y,p.z)||!this.get(p.x,p.y-1,p.z)||p.y<WATER_LEVEL||this.collides(p.x+.5,p.y+.03,p.z+.5))return false;if(!this.creative)this.inventory[id]--;this.animals.push({type:b.animal,x:p.x+.5,y:p.y,z:p.z+.5,yaw:this.player.yaw,turn:0,feedAt:0,milkAt:0});this.lifeDirty=true;return true},
 useAnimal(i){const a=this.animals[i];if(!a||Math.hypot(a.x-this.player.x,a.y-this.player.y,a.z-this.player.z)>7)return 'Aproxime-se do animal.';
  if(a.type==='cow'&&this.selected===24&&this.inventory[24]){if(this.lifeTime<a.milkAt)return 'A vaca precisa descansar: '+Math.ceil(a.milkAt-this.lifeTime)+' s.';if(this.inventory[30]>=9999)return 'Sua mochila está cheia.';this.inventory[24]--;this.inventory[30]++;a.milkAt=this.lifeTime+45;return 'Leite coletado! Venda no marketplace; o balde vazio volta para você.'}
  if(this.selected===31&&this.inventory[31]){if(this.lifeTime<a.feedAt)return 'Já está alimentado! Aguarde '+Math.ceil(a.feedAt-this.lifeTime)+' s.';this.inventory[31]--;a.feedAt=this.lifeTime+30;if(!this.creative)this.coins+=5;return 'Animal alimentado! '+(this.creative?'':' +5 integros')}
  return a.type==='cow'?'Selecione trigo para alimentar ou um balde vazio para tirar leite.':'Selecione trigo na mochila para alimentar.';
 },
 tickLife(dt,move=true){this.lifeTime+=dt;for(const [key,m]of this.props)if(m.job?.remaining>0){m.job.remaining=Math.max(0,m.job.remaining-dt);if(!m.job.remaining)this.lifeDirty=true}
  if(move)for(const a of this.animals){a.turn-=dt;if(a.turn<=0){a.yaw+=Math.sin(this.lifeTime*.7+a.x)*1.4;a.turn=2.4}const speed=a.type==='pig'?.42:.3,x=a.x-Math.sin(a.yaw)*speed*dt,z=a.z-Math.cos(a.yaw)*speed*dt,y=this.surface(Math.floor(x),Math.floor(z))+1,swims=a.type==='capybara'&&y<WATER_LEVEL;if((y>WATER_LEVEL||swims)&&Math.abs((swims?WATER_LEVEL-.45:y)-a.y)<(a.type==='capybara'?1.5:1.1)&&!this.collides(x,y+.02,z)){a.x=x;a.z=z;a.y=swims?WATER_LEVEL-.45:y}else{a.yaw+=1.7;a.turn=1}}
  const p=this.player;if(move&&!this.creative&&this.get(Math.floor(p.x),Math.floor(p.y+.1),Math.floor(p.z))===23){this.home();this.notice='A lava estava quente! Você voltou ao início sem perder seus itens.'}
 },
 lifeSave(){return{expansion:1,coins:this.coins,lifeTime:this.lifeTime,props:[...this.props],animals:this.animals.map(a=>({...a}))}}
};
