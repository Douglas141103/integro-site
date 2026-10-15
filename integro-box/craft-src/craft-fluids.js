import {SIZE,HEIGHT,index} from './craft-config.js';
const N=SIZE*2,LIMIT=2048,MAX_SOURCES=64;
export const fluidKey=p=>p.x+N*(p.z+N*p.y);
export const fluidPosition=n=>({x:n%N,y:Math.floor(n/(N*N)),z:Math.floor(n/N)%N});
const valid=p=>p&&[p.x,p.y,p.z].every(Number.isInteger)&&p.x>=0&&p.x<N&&p.z>=0&&p.z<N&&p.y>=2&&p.y<HEIGHT*2;
const cell=p=>({x:Math.floor(p.x/2),y:Math.floor(p.y/2),z:Math.floor(p.z/2)});
const fluid=id=>id===22||id===23;
const sides=[[1,0],[-1,0],[0,1],[0,-1]];
export function fineFluidMethods(proto){const original={bucket:proto.bucket,spreadFluids:proto.spreadFluids,waterSurface:proto.waterSurface,tickLife:proto.tickLife,irrigated:proto.irrigated};return {
 initFineFluids(raw){this.fineSources=new Map();this.fineFlow=new Map();this.fineFluidCells=new Set();for(const e of (Array.isArray(raw?.fineSources)?raw.fineSources:[]).slice(0,MAX_SOURCES)){
  if(!Array.isArray(e)||!Number.isInteger(e[0])||!fluid(e[1]))continue;const p=fluidPosition(e[0]);if(e[0]<0||!valid(p)||this.smallAt(p))continue;this.fineSources.set(e[0],e[1]);
 }this.spreadFineFluids();},
 fineFluidSave(){return {fineSources:[...this.fineSources]};},
 fineFluidAt(p){if(!valid(p))return 0;return this.fineFlow?.get(fluidKey(p))?.id||0;},
 fluidNear(p){return valid(p)&&Math.hypot(p.x*.5+.25-this.player.x,p.y*.5+.25-(this.player.y+1.5),p.z*.5+.25-this.player.z)<=7;},
 bucket(target){
  const selected=this.selected;
  if(!target||![24,25,26].includes(selected)||!this.creative&&!this.inventory[selected])return false;
  if(selected===24&&target.fluidSmall){
   const p=target.fluidSmall,entry=this.fineFlow.get(fluidKey(p));if(!entry||!this.fluidNear(p))return false;
   const out=entry.id===22?25:26;if(this.inventory[out]>=9999)return false;
   // A stream points back to its source. Collecting it drains that source's fall.
   if(!this.fineSources.has(entry.source))return false;this.fineSources.delete(entry.source);
   if(!this.creative)this.inventory[24]--;this.inventory[out]++;this.selected=out;this.spreadFineFluids();this.notice='Fonte recolhida. A corrente secou.';return true;
  }
  if(selected!==24&&(target.placeSmall||target.fluidSmall)){
   const p=target.fluidSmall||target.placeSmall;if(!this.fluidNear(p)){this.notice='Aproxime-se da borda ou do canal.';return false}
   if(this.fineSources.size+this.fluidSources.size>=MAX_SOURCES){this.notice='Recolha uma fonte antes de despejar outro balde.';return false}
   if(this.smallAt(p)){this.notice='Esse espaço está ocupado. Mire na face livre do canal ou da borda.';return false}
   const id=selected===25?22:23,k=fluidKey(p),current=this.fineFlow.get(k);
   if(current?.id===id){this.notice='Já existe uma corrente aqui. Mire em outra borda.';return false}
   if(current){if(!this.solidifyFine(p))return false}else this.fineSources.set(k,id);
   if(!this.creative){this.inventory[selected]--;this.inventory[24]=Math.min(9999,this.inventory[24]+1)}
   this.spreadFineFluids();this.notice=current?'Água e lava viraram pedra.':id===22?'Água despejada! Ela segue o canal e cai pelas bordas.':'Lava despejada! Ela escorre pelas bordas.';return true;
  }
  return original.bucket.call(this,target);
 },
 solidifyFine(p){
  const c=cell(p),n=index(c.x,c.y,c.z),solid=this.smallAt(p);if(solid&&!fluid(solid))return false;
  if(fluid(solid)){this.set(c.x,c.y,c.z,3);this.fluidSources.delete(n);return true}
  if(!this.smallCells.has(n)&&this.smallCells.size>=4000)return false;
  const ids=this.smallCells.get(n)||Array(8).fill(0),i=p.x%2+2*(p.z%2)+4*(p.y%2);ids[i]=3;this.smallCells.set(n,ids);this.fineSources.delete(fluidKey(p));this.dirtyDetail(c);return true;
 },
 spreadFineFluids(){
  if(!this.fineSources)return;const previous=this.fineFlow,next=new Map(),queue=[];
  for(const [k,id] of this.fineSources){const p=fluidPosition(k);if(this.smallAt(p)){this.fineSources.delete(k);continue}const entry={id,source:k};next.set(k,entry);queue.push([p,entry,0]);}
  const pass=p=>valid(p)&&(!this.smallAt(p)||fluid(this.smallAt(p)));
  const visit=(p,entry,depth)=>{
   if(!pass(p))return false;
   const k=fluidKey(p),existing=next.get(k)||previous.get(k),old=this.smallAt(p);
   const other=existing?.id||(fluid(old)?old:0);
   if(other&&other!==entry.id){if(this.solidifyFine(p)){next.delete(k);return false}return false;}
   if(fluid(old))return false;
   if(!next.has(k)&&next.size<LIMIT){next.set(k,entry);queue.push([p,entry,depth])}return true;
  };
  for(let cursor=0;cursor<queue.length&&cursor<LIMIT;cursor++){
   const [p,entry,depth]=queue[cursor],k=fluidKey(p);if(!next.has(k)||this.smallAt(p))continue;
   const down={x:p.x,y:p.y-1,z:p.z};
   if(pass(down)){visit(down,entry,0);continue;}
   if(depth>=(entry.id===22?8:4))continue;
   for(const [dx,dz] of sides)visit({x:p.x+dx,y:p.y,z:p.z+dz},entry,depth+1);
  }
  for(const [k,entry] of next)if(this.smallAt(fluidPosition(k))||!this.fineSources.has(entry.source))next.delete(k);
  for(const k of new Set([...previous.keys(),...next.keys()]))if(previous.get(k)?.id!==next.get(k)?.id)this.dirtyDetail(cell(fluidPosition(k)));
  this.fineFlow=next;this.fineFluidCells=new Set([...next.keys()].map(k=>{const p=cell(fluidPosition(k));return index(p.x,p.y,p.z)}));
 },
 spreadFluids(){original.spreadFluids.call(this);this.spreadFineFluids();},
 waterSurface(){const p=this.player;for(let y=Math.floor((p.y+1)*2);y>=Math.floor(p.y*2);y--){const at={x:Math.floor(p.x*2),y,z:Math.floor(p.z*2)};if(this.fineFluidAt(at)===22)return y*.5+.48}return original.waterSurface.call(this);},
 irrigated(p){if(original.irrigated.call(this,p))return true;for(const [k,e] of this.fineFlow||[]){if(e.id!==22)continue;const a=fluidPosition(k);if(Math.abs(a.x*.5-p.x)+Math.abs(a.z*.5-p.z)<=4&&a.y*.5>=p.y-2&&a.y*.5<=p.y+1)return true}return false;},
 tickLife(dt,move=true){original.tickLife.call(this,dt,move);if(move&&!this.creative&&this.fineFluidAt({x:Math.floor(this.player.x*2),y:Math.floor((this.player.y+.1)*2),z:Math.floor(this.player.z*2)})===23){this.home();this.notice='A lava estava quente! Você voltou ao início sem perder seus itens.';}}
};}
