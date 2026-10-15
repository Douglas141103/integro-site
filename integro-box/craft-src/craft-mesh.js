import * as THREE from 'three';
import {SIZE,HEIGHT,BLOCKS} from './craft-rules.js';
import {isCube} from './craft-items.js';
// Fine, low-contrast 32 px tiles keep the voxel grid readable without coarse noise.
const TILE=32,ATLAS_TILES=128;
export function makeMaterials(){
 const cv=document.createElement('canvas');cv.width=TILE*ATLAS_TILES;cv.height=TILE;
 const c=cv.getContext('2d');
 for(let id=1;id<BLOCKS.length;id++){
  const base=new THREE.Color(id>=39&&id<=42?0x85959b:BLOCKS[id].color),ox=id*TILE;
  c.fillStyle='#'+base.getHexString();c.fillRect(ox,0,TILE,TILE);
  for(let n=0;n<190;n++){const x=(n*7+id*3)%TILE,y=(n*11+Math.floor(n/TILE)*3)%TILE;c.fillStyle=n%2?'#ffffff10':'#00000010';c.fillRect(ox+x,y,1+n%2,1+n%3)}
  if(id>=39&&id<=42){c.fillStyle='#'+BLOCKS[id].color.toString(16).padStart(6,'0');for(let j=0;j<7;j++)c.fillRect(ox+3+(j*11)%25,3+(j*7)%25,3,3)}
  if(id===33){c.fillStyle='#49372b';for(let y=3;y<TILE;y+=7)c.fillRect(ox,y,TILE,2)}
  if(id===4||id===9){c.fillStyle='#45351f30';for(let y=4;y<TILE;y+=8)c.fillRect(ox,y,TILE,1);if(id===4)for(let x=4;x<TILE;x+=7)c.fillRect(ox+x,0,1,TILE)}
  if(id===7){c.fillStyle='#efc5a480';for(let y=7;y<TILE;y+=8){c.fillRect(ox,y,TILE,1);for(let x=(y%3)*4;x<TILE;x+=16)c.fillRect(ox+x,y-7,1,7)}}
  if(id===8){c.fillStyle='#d8ffffa0';c.fillRect(ox,0,TILE,1);c.fillRect(ox,0,1,TILE);c.fillRect(ox+31,0,1,TILE);c.fillRect(ox,31,TILE,1);c.fillStyle='#ffffff55';c.fillRect(ox+5,6,2,12)}
 }
 const texture=new THREE.CanvasTexture(cv);texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.anisotropy=4;texture.colorSpace=THREE.SRGBColorSpace;
 return{solid:new THREE.MeshLambertMaterial({map:texture,vertexColors:true}),glass:new THREE.MeshLambertMaterial({map:texture,vertexColors:true,transparent:true,opacity:.38,depthWrite:false,side:THREE.DoubleSide})};
}
const faces=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.80},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.68},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.88},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.74}];
export function chunkGeometry(world,cx,cz,glass=false){const pos=[],norm=[],uv=[],color=[],indices=[];for(let x=cx*8;x<Math.min(SIZE,cx*8+8);x++)for(let z=cz*8;z<Math.min(SIZE,cz*8+8);z++)for(let y=0;y<HEIGHT;y++){const id=world.get(x,y,z);if(!isCube(id)||(id===8)!==glass)continue;for(const f of faces){const near=world.get(x+f.n[0],y+f.n[1],z+f.n[2]);if(isCube(near)&&!(near===8&&id!==8))continue;const off=pos.length/3,tile=(id===1||id===10)&&f.n[1]!==1?2:id,u0=(tile*TILE+1)/(TILE*ATLAS_TILES),u1=(tile*TILE+TILE-1)/(TILE*ATLAS_TILES);for(let i=0;i<4;i++){const p=f.p[i];pos.push(x+p[0],y+p[1],z+p[2]);norm.push(...f.n);uv.push(i===0||i===3?u0:u1,i<2?.01:.99);color.push(f.shade,f.shade,f.shade)}indices.push(off,off+1,off+2,off,off+2,off+3)}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(norm,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('color',new THREE.Float32BufferAttribute(color,3));g.setIndex(indices);g.computeBoundingSphere();return g}
export function makeAnimal(scene,x,y,z){const g=new THREE.Group(),white=new THREE.MeshLambertMaterial({color:0xfff0d6}),brown=new THREE.MeshLambertMaterial({color:0x7f6551}),black=new THREE.MeshLambertMaterial({color:0x253841});const box=(w,h,d,m,x,y,z)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);g.add(b);return b};box(.85,.6,1.2,white,0,.72,0);box(.42,.5,.45,brown,0,.83,-.65);for(const xx of[-.23,.23])box(.055,.09,.06,black,xx,.95,-.86);for(const xx of[-.28,.28])for(const zz of[-.38,.38])box(.13,.5,.13,brown,xx,.25,zz);g.position.set(x,y,z);scene.add(g);return g}
