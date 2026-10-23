import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createWinterTotem} from '../integro-box/egg-src/egg-winter-totem.js';
const inscriptions=[];
globalThis.document={createElement:()=>({getContext:()=>new Proxy({fillText:text=>inscriptions.push(text)},{get:(o,k)=>o[k]||(()=>{})})})};
test('winter plaque has an extruded waist, red relief rings and readable inscriptions on both sides',()=>{
 const totem=createWinterTotem();
 assert.deepEqual(inscriptions,['2026','INVERNO']);
 assert(totem.getObjectByName('SculptedIcePlaque').geometry.type==='ExtrudeGeometry');
 for(const name of ['TotemTrackFace','TotemCorralFace']){
  const face=totem.getObjectByName(name),rings=face.children.filter(o=>o.name.startsWith('RedCircle'));
  assert.equal(rings.length,10);assert(rings.every(r=>r.material.color.getHex()===0xe52c42));
  assert.equal(face.getObjectByName('TotemInscription').userData.text,'2026 INVERNO');
  assert(rings.every(r=>r.position.y>1.3),'emblem does not overlap the year');
 }
 totem.traverse(o=>{if(o.geometry)assert(Array.from(o.geometry.attributes.position.array).every(Number.isFinite));});
 const size=new T.Box3().setFromObject(totem).getSize(new T.Vector3());assert(size.x<2.6&&size.y<4.6&&size.z<1);
});
