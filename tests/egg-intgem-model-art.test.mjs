import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {ITEMS} from '../integro-box/intgem-catalog.mjs';
import {createIntGem3D} from '../integro-box/intgem-3d.mjs';
import {createEggWorld} from '../integro-box/egg-src/egg-world.js';

test('each of the 41 IntGem items uses a distinct 3D model in the game',()=>{
 globalThis.document={createElement:()=>({getContext:()=>new Proxy({},{get:()=>()=>{}})})};
 const world=createEggWorld(new THREE.Scene());
 const ids=new Set(),silhouettes=new Set();
 for(const item of ITEMS.filter(i=>i.game==='egg')){
  const parent=new THREE.Group();
  const effects=item.nativeId?null:createIntGem3D(THREE,parent);
  try{
   if(effects)effects.update({[item.kind]:item},0,true);
   else world.shopItem(parent,item.nativeId);
   const dimensions=new THREE.Box3().setFromObject(parent).getSize(new THREE.Vector3());
   assert(dimensions.toArray().every(d=>Number.isFinite(d)&&d>.016&&d<2.3),item.id);
   const parts=[];
   let triangles=0;
   parent.traverse(m=>{
    if(!m.isMesh)return;
    const position=m.geometry.getAttribute('position');
    triangles+=(m.geometry.index?.count??position.count)/3;
    parts.push([m.geometry.type,position.count,...m.position,...m.scale]);
   });
   assert(triangles>0&&triangles<5000,item.id+' should be bounded on mobile');
   silhouettes.add(JSON.stringify(parts));ids.add(item.id);
  }finally{effects?.dispose();}
 }
 assert.equal(ids.size,41);
 assert.equal(silhouettes.size,ids.size);
});
