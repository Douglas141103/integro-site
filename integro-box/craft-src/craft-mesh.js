import * as THREE from 'three';
import {SIZE,HEIGHT,BLOCKS,index} from './craft-rules.js';
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
 return{details:new THREE.MeshLambertMaterial({vertexColors:true,side:THREE.DoubleSide}),solid:new THREE.MeshLambertMaterial({map:texture,vertexColors:true}),glass:new THREE.MeshLambertMaterial({map:texture,vertexColors:true,transparent:true,opacity:.38,depthWrite:false,side:THREE.DoubleSide})};
}
const faces=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.80},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.68},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.88},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.74}];
// Exposed faces are half-block tiles. Existing terrain remains intact until mined.
const leafShape=new THREE.IcosahedronGeometry(.49,1);
const trunkShape=new THREE.CylinderGeometry(.19,.26,1,9,1,false);
const natural=(world,x,y,z,id)=>[4,5].includes(id)&&world.base?.[index(x,y,z)]===id&&!world.edits.has(index(x,y,z));
export function chunkGeometry(world,cx,cz,glass=false){
 const pos=[],norm=[],uv=[],color=[],indices=[];
 function shape(geometry,x,y,z,tile,shade=1){
  const ps=geometry.getAttribute('position'),ns=geometry.getAttribute('normal'),offset=pos.length/3;
  for(let i=0;i<ps.count;i++){pos.push(x+ps.getX(i),y+ps.getY(i),z+ps.getZ(i));norm.push(ns.getX(i),ns.getY(i),ns.getZ(i));uv.push((tile*TILE+8+(i%3)*7)/(TILE*ATLAS_TILES),.2+(i%3)*.3);color.push(shade,shade,shade)}
  if(geometry.index)for(const i of geometry.index.array)indices.push(offset+i);else for(let i=0;i<ps.count;i++)indices.push(offset+i);
 }
 function face(x,y,z,size,f,id){
  const off=pos.length/3,tile=(id===1||id===10)&&f.n[1]!==1?2:id,u0=(tile*TILE+1)/(TILE*ATLAS_TILES),u1=(tile*TILE+TILE-1)/(TILE*ATLAS_TILES);
  const variation=.96+.04*Math.sin(x*31+y*17+z*13);
  for(let i=0;i<4;i++){const p=f.p[i];pos.push(x+p[0]*size,y+p[1]*size,z+p[2]*size);norm.push(...f.n);uv.push(i===0||i===3?u0:u1,i<2?.03:.97);const sh=f.shade*variation;color.push(sh,sh,sh)}indices.push(off,off+1,off+2,off,off+2,off+3);
 }
 for(let x=cx*8;x<Math.min(SIZE,cx*8+8);x++)for(let z=cz*8;z<Math.min(SIZE,cz*8+8);z++)for(let y=0;y<HEIGHT;y++){
  const id=world.get(x,y,z),small=world.smallCells?.get(index(x,y,z));
  if(!glass&&natural(world,x,y,z,id)){
   if(id===4)shape(trunkShape,x+.5,y+.5,z+.5,4);
   else if(faces.some(f=>world.get(x+f.n[0],y+f.n[1],z+f.n[2])!==5))shape(leafShape,x+.5,y+.5,z+.5,5,.92+.08*Math.sin(x+z));
   continue;
  }
  if(small){for(let i=0;i<8;i++){
   const block=small[i];if(!block||(block===8)!==glass)continue;
   const mx=x*2+i%2,my=y*2+Math.floor(i/4),mz=z*2+Math.floor(i/2)%2;
   for(const f of faces){const near=world.smallAt({x:mx+f.n[0],y:my+f.n[1],z:mz+f.n[2]});if(isCube(near)&&!(near===8&&block!==8))continue;face(mx*.5,my*.5,mz*.5,.5,f,block)}
  }continue}
  if(!isCube(id)||(id===8)!==glass)continue;
  for(const f of faces){const nx=x+f.n[0],ny=y+f.n[1],nz=z+f.n[2],near=world.get(nx,ny,nz);
   if(isCube(near)&&!(near===8&&id!==8)&&!natural(world,nx,ny,nz,near))continue;
   // Four independently textured half-size quads per exposed unit face.
   for(let u=0;u<2;u++)for(let v=0;v<2;v++){
    const offset=f.n[0]?[f.n[0]>0?.5:0,u*.5,v*.5]:f.n[1]?[u*.5,f.n[1]>0?.5:0,v*.5]:[u*.5,v*.5,f.n[2]>0?.5:0];
    face(x+offset[0],y+offset[1],z+offset[2],.5,f,id);
   }
  }
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(norm,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('color',new THREE.Float32BufferAttribute(color,3));g.setIndex(indices);g.computeBoundingSphere();return g;
}
export function groundDetails(world,cx,cz){
 const p=[],c=[];
 const tri=(points,col)=>{p.push(...points.flat());for(let i=0;i<3;i++)c.push(...col)};
 for(let x=cx*8;x<Math.min(SIZE,cx*8+8);x++)for(let z=cz*8;z<Math.min(SIZE,cz*8+8);z++){
  const h=world.surface(x,z);if(world.get(x,h,z)!==1||world.get(x,h+1,z)||((x*17+z*31)%9)>1)continue;
  const y=h+1.008;
  for(let n=0;n<3;n++){const a=x+.2+n*.22,b=z+.25+(n%2)*.3,height=.13+((x+z+n)%4)*.04;
   tri([[a-.04,y,b],[a+.04,y,b],[a+.06,y+height,b-.025]],[.30,.53,.19]);tri([[a,y,b-.04],[a,y,b+.04],[a-.025,y+height,b+.05]],[.43,.65,.26]);
  }
  if((x+z)%7===0){const a=x+.6,b=z+.5,yy=y+.25,col=(x%2)?[.98,.78,.38]:[.88,.60,.76];tri([[a-.07,yy,b],[a+.07,yy,b],[a,yy+.1,b+.03]],col);tri([[a,yy,b-.07],[a,yy,b+.07],[a+.03,yy+.1,b]],col)}
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('color',new THREE.Float32BufferAttribute(c,3));g.computeVertexNormals();g.computeBoundingSphere();return g;
}
export function makeAnimal(scene,x,y,z){const g=new THREE.Group(),white=new THREE.MeshLambertMaterial({color:0xfff0d6}),brown=new THREE.MeshLambertMaterial({color:0x7f6551}),black=new THREE.MeshLambertMaterial({color:0x253841});const box=(w,h,d,m,x,y,z)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);g.add(b);return b};box(.85,.6,1.2,white,0,.72,0);box(.42,.5,.45,brown,0,.83,-.65);for(const xx of[-.23,.23])box(.055,.09,.06,black,xx,.95,-.86);for(const xx of[-.28,.28])for(const zz of[-.38,.38])box(.13,.5,.13,brown,xx,.25,zz);g.position.set(x,y,z);scene.add(g);return g}
