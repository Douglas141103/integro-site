import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// Shared geometry keeps the drifting edible plants light on mobile GPUs.
export function createAlgaeField(scene,count=36){
 const leaf=new T.SphereGeometry(1,7,5),stem=new T.CylinderGeometry(.09,.14,1,5),seed=new T.IcosahedronGeometry(.18,0);
 const green=new T.MeshToonMaterial({color:0x8be568,emissive:0x183b0d,emissiveIntensity:.4}),dark=new T.MeshToonMaterial({color:0x2fa66a}),gold=new T.MeshToonMaterial({color:0xf4ffa9,emissive:0x668e22,emissiveIntensity:.3});
 const model=new T.Group();const group=model;
  for(let j=0;j<3;j++){const branch=new T.Group();branch.rotation.z=(j-1)*.35;branch.rotation.y=j*2.1;const stalk=new T.Mesh(stem,dark);stalk.scale.y=2.4;stalk.position.y=0;branch.add(stalk);
   for(let k=0;k<4;k++){const blade=new T.Mesh(leaf,green);blade.scale.set(.7,.19,.28);blade.position.set((k%2?1:-1)*.43,-.65+k*.48,0);blade.rotation.z=(k%2?1:-1)*.4;branch.add(blade);}const tip=new T.Mesh(seed,gold);tip.position.y=1.25;branch.add(tip);group.add(branch);
  }
 model.updateMatrixWorld(true);
 const batches=[green,dark,gold].map(material=>{const pieces=[];model.traverse(m=>{if(m.isMesh&&m.material===material)pieces.push(m.geometry.clone().applyMatrix4(m.matrixWorld));});const geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());const mesh=new T.InstancedMesh(geometry,material,count);mesh.name='EdibleAlgae';mesh.frustumCulled=false;mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);scene.add(mesh);return mesh;});
 for(const g of [leaf,stem,seed])g.dispose();
 const plants=Array.from({length:count},(_,index)=>({group:new T.Object3D(),index,phase:index*2.4,baseY:24,cooldown:0}));
 function sync(){for(const p of plants){p.group.scale.setScalar(p.group.visible?1:0);p.group.updateMatrix();for(const mesh of batches)mesh.setMatrixAt(p.index,p.group.matrix);}for(const mesh of batches)mesh.instanceMatrix.needsUpdate=true;}

 function place(plant,position,near=false){const a=near?plant.index*2.399:Math.random()*Math.PI*2,r=near?9+(plant.index%5)*5:28+Math.random()*85;
  plant.group.position.set(T.MathUtils.clamp(position.x+Math.cos(a)*r,-870,870),T.MathUtils.clamp(position.y+(near?Math.sin(plant.index)*2:(Math.random()-.5)*22),7,91),T.MathUtils.clamp(position.z+Math.sin(a)*r,-570,570));plant.baseY=plant.group.position.y;plant.group.visible=true;plant.cooldown=0;
 }
 function update(dt,time,position,playing,radius,onEat){for(const plant of plants){if(plant.cooldown>0){if(playing)plant.cooldown-=dt;if(plant.cooldown<=0)place(plant,position);else continue;}
   if(plant.group.position.distanceTo(position)>165)place(plant,position);
   plant.group.position.y=plant.baseY+Math.sin(time*1.2+plant.phase)*.45;plant.group.rotation.z=Math.sin(time*1.6+plant.phase)*.13;plant.group.rotation.y=plant.phase+Math.sin(time*.5)*.2;
   if(playing&&plant.group.position.distanceTo(position)<radius){plant.cooldown=18;plant.group.visible=false;onEat(plant.group.position);}
  }sync();}
 return{plants,seed(position){plants.forEach(p=>place(p,position,p.index<12));sync();},update,dispose(){for(const mesh of batches){scene.remove(mesh);mesh.geometry.dispose();}for(const m of [green,dark,gold])m.dispose();}};
}
