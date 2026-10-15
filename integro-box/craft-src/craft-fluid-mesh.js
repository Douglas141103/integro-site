import * as THREE from 'three';
import {fluidPosition} from './craft-fluids.js';
export function makeFlowMaterials(){
 const create=id=>{const canvas=document.createElement('canvas');canvas.width=32;canvas.height=128;const c=canvas.getContext('2d');c.fillStyle=id===22?'#46b9dc':'#ff8b26';c.fillRect(0,0,32,128);
 for(let i=0;i<24;i++){c.fillStyle=id===22?'#d9ffff28':i%2?'#ffe06c99':'#ad330e55';c.fillRect((i*11)%31,(i*37)%125,1+i%3,6+i%12)}
 const map=new THREE.CanvasTexture(canvas);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.colorSpace=THREE.SRGBColorSpace;
 return new THREE.MeshPhongMaterial({map,transparent:id===22,opacity:id===22?.76:1,shininess:id===22?100:20,emissive:id===23?0xb53a0d:0x000000,emissiveIntensity:.65,side:THREE.DoubleSide});};
 return {22:create(22),23:create(23)};
}
const faces=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];
export function flowGeometry(world,cx,cz,id){const positions=[],normals=[],uv=[],indices=[];
 for(const [k,e] of world.fineFlow||[]){if(e.id!==id)continue;const p=fluidPosition(k);if(Math.floor(p.x/16)!==cx||Math.floor(p.z/16)!==cz)continue;
  const above=world.fineFluidAt({...p,y:p.y+1})===id,height=above?.5:.48;
  for(const f of faces){const next={x:p.x+f.n[0],y:p.y+f.n[1],z:p.z+f.n[2]};if(world.fineFluidAt(next)===id||world.smallAt(next)&&![22,23].includes(world.smallAt(next)))continue;
   const off=positions.length/3;for(const q of f.p){const x=p.x*.5+q[0]*.5,y=p.y*.5+q[1]*height,z=p.z*.5+q[2]*.5;positions.push(x,y,z);normals.push(...f.n);uv.push(f.n[0]?z*2:x*2,f.n[1]?z*2:y*2)}indices.push(off,off+1,off+2,off,off+2,off+3);
  }
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeBoundingSphere();return g;
}
