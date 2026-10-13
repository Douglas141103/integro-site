import {SIZE,HEIGHT,WATER_LEVEL,index} from './craft-config.js';
export {SIZE,HEIGHT,WATER_LEVEL,index} from './craft-config.js';
import {upgradeSave,generateExpansion,adventureMethods} from './craft-adventure.js';
import {BLOCKS,RECIPES,itemHeight} from './craft-items.js';
import {lifeMethods} from './craft-life.js';
export {BLOCKS,RECIPES} from './craft-items.js';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));const hash=(x,z)=>{const n=Math.sin(x*127.1+z*311.7+42)*43758.5453;return n-Math.floor(n)};

export const groundLevel=(x,z)=>Math.floor(6+Math.sin(x*.16)*1.8+Math.cos(z*.17)*1.7+(x>29?Math.max(0,1-Math.hypot(x-38,z-33)/18)*10:0));
export class CraftWorld{
 constructor(raw){raw=upgradeSave(raw);this.cells=new Uint8Array(SIZE*SIZE*HEIGHT);this.edits=new Map();this.inventory={1:24,2:24,3:24,4:12,5:12,6:16,7:12,8:12,9:24,10:8};this.stats={mined:0,placed:0,crafted:0};this.selected=1;this.creative=false;this.time=0;this.dirty=new Set();this.generate();generateExpansion(this);this.base=this.cells.slice();if(raw?.version===2){for(const e of Array.isArray(raw.edits)?raw.edits:[]){if(Array.isArray(e)&&Number.isInteger(e[0])&&e[0]>=SIZE*SIZE&&e[0]<this.cells.length&&Number.isInteger(e[1])&&e[1]>=0&&(!!BLOCKS[e[1]]||e[1]===0)&&e[1]!==11){this.cells[e[0]]=e[1];this.edits.set(e[0],e[1])}}for(const k in this.inventory)this.inventory[k]=Number.isFinite(raw.inventory?.[k])?Math.floor(clamp(raw.inventory[k],0,9999)):this.inventory[k];for(const k in this.stats)this.stats[k]=Math.floor(clamp(Number(raw.stats?.[k])||0,0,1e6));if(BLOCKS[raw.selected]&&raw.selected!==11)this.selected=raw.selected;this.creative=raw.creative===true;this.time=Number.isFinite(raw.time)?Math.max(0,raw.time):0;}
 this.initLife(raw);this.initAdventure(raw);this.lastSafe=this.findDrySpawn();this.jumpBuffer=0;this.player={...this.lastSafe,vy:0,yaw:Math.PI,pitch:-.05,grounded:false};if(raw?.player){const p=raw.player;if(['x','y','z','yaw','pitch'].every(k=>Number.isFinite(p[k]))&&p.x>1&&p.x<SIZE-1&&p.z>1&&p.z<SIZE-1&&p.y>1&&p.y<HEIGHT+12&&!this.collides(p.x,p.y,p.z))Object.assign(this.player,{x:p.x,y:p.y,z:p.z,yaw:p.yaw,pitch:clamp(p.pitch,-1.4,1.4)})}}
 get(x,y,z){if(y<0)return 11;if(x<0||z<0||x>=SIZE||z>=SIZE||y>=HEIGHT)return 0;return this.cells[index(x,y,z)]}
 generate(){for(let x=0;x<48;x++)for(let z=0;z<48;z++){const h=groundLevel(x,z);for(let y=0;y<=h;y++)this.cells[index(x,y,z)]=y===0?11:y<h-2?3:y<h?2:h<6?6:h>12?10:1;}for(let x=3;x<48-3;x++)for(let z=3;z<48-3;z++){const h=groundLevel(x,z);if(h<6||h>11||Math.hypot(x-23,z-10)<5||hash(x,z)>.025)continue;for(let y=h+1;y<h+5;y++)this.cells[index(x,y,z)]=4;for(let dx=-2;dx<=2;dx++)for(let dz=-2;dz<=2;dz++)for(let dy=3;dy<=5;dy++){if(Math.abs(dx)+Math.abs(dz)+(dy===5?1:0)>3)continue;const n=index(x+dx,h+dy,z+dz);if(!this.cells[n])this.cells[n]=5;}}}
 surface(x,z){for(let y=HEIGHT-1;y>=0;y--)if(this.get(x,y,z)&&!BLOCKS[this.get(x,y,z)]?.fluid)return y;return 0}
 set(x,y,z,id){if(!Number.isInteger(x)||!Number.isInteger(y)||!Number.isInteger(z)||x<0||z<0||x>=SIZE||z>=SIZE||y<=0||y>=HEIGHT||!Number.isInteger(id)||id<0||!BLOCKS[id]&&id!==0||id===11)return false;const n=index(x,y,z);this.props?.delete(n);this.lifeDirty=true;this.cells[n]=id;this.trackFeature?.(n,id);if(this.base[n]===id)this.edits.delete(n);else this.edits.set(n,id);for(const[dx,dz]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]]){const cx=Math.floor((x+dx)/8),cz=Math.floor((z+dz)/8);if(cx>=0&&cz>=0&&cx<Math.ceil(SIZE/8)&&cz<Math.ceil(SIZE/8))this.dirty.add(cx+','+cz)}return true}
 collides(x,y,z){return this.collisionAt(x,y,z)}
 overlaps(x,y,z){const p=this.player;return x+1>p.x-.3&&x<p.x+.3&&y+1>p.y&&y<p.y+1.76&&z+1>p.z-.3&&z<p.z+.3}
 mine(p){const id=this.get(p.x,p.y,p.z),m=this.meta(p);if(!id||id===11||BLOCKS[id]?.fluid||!this.nearby(p)||m.job||Object.values(m.stored||{}).some(n=>n>0))return false;if(!this.set(p.x,p.y,p.z,0))return false;if(!this.creative)this.inventory[id]=Math.min(9999,(this.inventory[id]||0)+1);this.stats.mined++;return id}
 place(p){const id=this.selected;if(BLOCKS[id]?.animal)return this.spawnAnimal(p,id);if(!p||BLOCKS[id]?.tool||BLOCKS[id]?.fluid||this.occupied(p.x,p.y,p.z)||this.overlaps(p.x,p.y,p.z)||!this.creative&&!this.inventory[id]||!this.nearby(p))return false;
 if(itemHeight(id)>1&&(p.y+2>=HEIGHT||this.occupied(p.x,p.y+1,p.z)||this.overlaps(p.x,p.y+1,p.z)))return false;
 if(id>=12&&!this.get(p.x,p.y-1,p.z))return false;
 if(!this.set(p.x,p.y,p.z,id))return false;if(id>=12)this.setMeta(p,{rot:((Math.round(this.player.yaw/(Math.PI/2))+2)%4+4)%4,open:false,lit:true});if(!this.creative)this.inventory[id]--;this.stats.placed++;return true}
 craft(id){const r=RECIPES.find(r=>r.id===id);if(!r||Object.entries(r.cost).some(([k,v])=>(this.inventory[k]||0)<v)||this.inventory[r.out]+r.count>9999)return false;for(const[k,v]of Object.entries(r.cost))this.inventory[k]-=v;this.inventory[r.out]+=r.count;this.stats.crafted+=r.count;return true}
 // Keep the spawn and rescue point above the lake, including edited worlds.
 findDrySpawn(){let best=null,distance=Infinity;for(let x=2;x<SIZE-2;x++)for(let z=2;z<SIZE-2;z++){const h=this.surface(x,z),id=this.get(x,h,z),y=h+1.05;if(y<WATER_LEVEL+.2||id===4||id===5||this.collides(x+.5,y,z+.5))continue;const d=(x-23)**2+(z-10)**2;if(d<distance){distance=d;best={x:x+.5,y,z:z+.5}}}return best||{x:23.5,y:this.surface(23,10)+1.05,z:10.5}}
 waterSurface(){const p=this.player;for(let y=Math.floor(p.y+.1);y<=Math.floor(p.y+1);y++)if(this.get(Math.floor(p.x),y,Math.floor(p.z))===22)return y+.8;return WATER_LEVEL}
 inWater(){return this.player.y<this.waterSurface()+.05}
 jump(){this.jumpBuffer=.16;if(!this.creative&&(this.player.grounded||this.inWater())){this.player.vy=Math.max(this.player.vy,9);this.player.grounded=false;this.jumpBuffer=0}}
 home(){this.riding=null;this.seated=false;this.lastSafe=this.findDrySpawn();this.jumpBuffer=0;Object.assign(this.player,{...this.lastSafe,vy:0,grounded:false});}
 update(dt,input={}){dt=clamp(dt,0,.05);this.time+=dt;if(this.riding!==null&&this.riding!==undefined){this.drive(dt,input);return}const p=this.player;let x=input.x||0,z=input.z||0;if(x||z||input.up)this.seated=false;const len=Math.hypot(x,z);if(len>1){x/=len;z/=len}const speed=input.sprint?7.2:4.7,dx=(x*Math.cos(p.yaw)+z*Math.sin(p.yaw))*speed*dt,dz=(-x*Math.sin(p.yaw)+z*Math.cos(p.yaw))*speed*dt;const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.18));for(let i=0;i<steps;i++){this.stepMove(p.x+dx/steps,p.z);this.stepMove(p.x,p.z+dz/steps)}if(this.creative){p.vy=0;const dy=(input.up||0)*speed*dt;if(p.y+dy>1&&p.y+dy<HEIGHT+10&&!this.collides(p.x,p.y+dy,p.z))p.y+=dy;p.grounded=false}else{const water=this.inWater(),wantJump=input.up>0||this.jumpBuffer>0;
 // A held swim stroke must never cancel a jump impulse at the shoreline.
 if(wantJump&&(water||p.grounded)){p.vy=Math.max(p.vy,9);this.jumpBuffer=0}
 if(water){if(wantJump||p.vy>3)p.vy-=5*dt;else{const buoyancy=(this.waterSurface()-.65-p.y)*14-p.vy*5;p.vy=clamp(p.vy+buoyancy*dt,-2,3)}}else p.vy=Math.max(-24,p.vy-24*dt);
 this.jumpBuffer=Math.max(0,this.jumpBuffer-dt);const dy=p.vy*dt,n=Math.max(1,Math.ceil(Math.abs(dy)/.15));p.grounded=false;for(let i=0;i<n;i++){if(!this.collides(p.x,p.y+dy/n,p.z))p.y+=dy/n;else{if(p.vy<0)p.grounded=true;p.vy=0;break}}}if(p.y<-3)this.home()}
 serialize(){return{version:2,...this.lifeSave(),...this.adventureSave(),edits:[...this.edits],inventory:{...this.inventory},selected:this.selected,creative:this.creative,stats:{...this.stats},time:this.time,player:{...this.player}}}
}

Object.assign(CraftWorld.prototype,lifeMethods);
Object.assign(CraftWorld.prototype,adventureMethods(CraftWorld.prototype));
