import {SIZE,HEIGHT,index} from './craft-config.js';
import {BLOCKS,itemBoxes} from './craft-items.js';
export const SMALL_BLOCKS=new Set([1,2,3,4,5,6,7,8,9,10,61]);
const slot=(x,y,z)=>(x%2)+2*(z%2)+4*(y%2);
const cell=p=>({x:Math.floor(p.x/2),y:Math.floor(p.y/2),z:Math.floor(p.z/2)});
const valid=p=>p&&[p.x,p.y,p.z].every(Number.isInteger)&&p.x>=0&&p.z>=0&&p.x<SIZE*2&&p.z<SIZE*2&&p.y>=2&&p.y<HEIGHT*2;
export function detailMethods(){return {
 initDetail(raw){
  this.smallCells=new Map();
  for(const entry of (Array.isArray(raw?.smallCells)?raw.smallCells:[]).slice(0,4000)){
   if(!Array.isArray(entry))continue;const [n,ids]=entry;
   if(!Number.isInteger(n)||n<SIZE*SIZE||n>=this.cells.length||this.cells[n]||!Array.isArray(ids)||ids.length!==8)continue;
   if(ids.some(id=>!Number.isInteger(id)||id!==0&&!SMALL_BLOCKS.has(id)))continue;
   if(ids.some(Boolean))this.smallCells.set(n,ids.slice());
  }
 },
 surfaceId(x,y,z){const id=this.get(x,y,z);if(id)return id;const ids=this.smallCells.get(index(x,y,z));if(ids)for(let i=7;i>=0;i--)if(ids[i])return ids[i];return 2;},
 detailSave(){return {detail:1,smallCells:[...this.smallCells].map(([n,ids])=>[n,ids.slice()])};},
 smallAt(p){if(!valid(p))return 0;const c=cell(p),id=this.get(c.x,c.y,c.z);return id||this.smallCells.get(index(c.x,c.y,c.z))?.[slot(p.x,p.y,p.z)]||0;},
 detailBoxes(x,y,z){const id=this.get(x,y,z);if([4,5].includes(id)&&this.base[index(x,y,z)]===id&&!this.edits.has(index(x,y,z)))return id===5?[]:[[.24,0,.24,.76,1,.76]];if(id)return itemBoxes(id,this.meta({x,y,z}));const ids=this.smallCells.get(index(x,y,z));if(!ids)return [];return ids.flatMap((id,i)=>{if(!id)return [];const a=(i%2)*.5,b=Math.floor(i/4)*.5,c=(Math.floor(i/2)%2)*.5;return [[a,b,c,a+.5,b+.5,c+.5]]});},
 dirtyDetail(c){for(const [dx,dz] of [[0,0],[-1,0],[1,0],[0,-1],[0,1]]){const x=Math.floor((c.x+dx)/8),z=Math.floor((c.z+dz)/8);if(x>=0&&z>=0&&x<SIZE/8&&z<SIZE/8)this.dirty.add(x+','+z)}},
 placeSmall(p){
  if(!valid(p)||!SMALL_BLOCKS.has(this.selected)||this.smallAt(p)||!this.creative&&!this.inventory[this.selected])return false;
  const c=cell(p),n=index(c.x,c.y,c.z);if(this.occupied(c.x,c.y,c.z)&&!this.smallCells.has(n))return false;
  if(!this.smallCells.has(n)&&this.smallCells.size>=4000){this.notice='Limite de detalhes atingido. Reaproveite os blocos existentes.';return false}
  const x=p.x*.5,y=p.y*.5,z=p.z*.5,v=this.player;
  if(Math.hypot(x+.25-v.x,y+.25-(v.y+1.5),z+.25-v.z)>7)return false;
  if(x+.5>v.x-.3&&x<v.x+.3&&y+.5>v.y&&y<v.y+1.76&&z+.5>v.z-.3&&z<v.z+.3)return false;
  // One face must touch existing terrain or another small block.
  if(![[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([dx,dy,dz])=>this.smallAt({x:p.x+dx,y:p.y+dy,z:p.z+dz})))return false;
  const ids=this.smallCells.get(n)||Array(8).fill(0);ids[slot(p.x,p.y,p.z)]=this.selected;this.smallCells.set(n,ids);
  if(ids.every(id=>id===this.selected)){this.smallCells.delete(n);this.set(c.x,c.y,c.z,this.selected)}
  if(!this.creative)this.inventory[this.selected]--;this.stats.placed++;this.dirtyDetail(c);return true;
 },
 mineSmall(p){
  if(!valid(p))return false;const c=cell(p),n=index(c.x,c.y,c.z),id=this.smallAt(p);
  if(!SMALL_BLOCKS.has(id)||!this.nearby(c))return false;
  if(!this.smallCells.has(n)&&this.smallCells.size>=4000){this.notice='Reaproveite os blocos pequenos antes de detalhar mais terreno.';return false}
  if(!this.creative&&this.inventory[id]>=9999){this.notice='Sua mochila está cheia.';return false}
  const tool=this.selected,owned=this.inventory[tool]>0;
  let hits=[3,4].includes(id)?3:1;
  if(owned&&(id===3&&BLOCKS[tool]?.tier||id===4&&tool===50))hits=1;
  const key='small:'+p.x+','+p.y+','+p.z;
  const progress=this.mineProgress?.key===key&&this.mineProgress.tool===tool?this.mineProgress:{key,tool,hits:0};progress.hits++;
  if(!this.creative&&progress.hits<hits){this.mineProgress=progress;this.notice='Minerando: '+progress.hits+'/'+hits;return false}
  let ids=this.smallCells.get(n);
  if(!ids){ids=Array(8).fill(id);this.set(c.x,c.y,c.z,0)}
  ids[slot(p.x,p.y,p.z)]=0;
  if(ids.some(Boolean))this.smallCells.set(n,ids);else this.smallCells.delete(n);
  if(!this.creative){this.inventory[id]=(this.inventory[id]||0)+1;this.xp++;this.wear(tool)}
  this.stats.mined++;this.mineProgress=null;this.dirtyDetail(c);return id;
 }
};}
