import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createWinterTotem} from '../integro-box/egg-src/egg-winter-totem.js';
const inscriptions=[];
globalThis.document={createElement:()=>({getContext:()=>new Proxy({fillText:text=>inscriptions.push(text)},{get:(o,k)=>o[k]||(()=>{})})})};
test('winter plaque has an extruded waist, red relief rings and readable inscriptions on both sides',()=>{
 const totem=createWinterTotem();
 assert.deepEqual(inscriptions,['INVERNO']);
 assert(totem.getObjectByName('SculptedIcePlaque').geometry.type==='ExtrudeGeometry');
 for(const name of ['TotemTrackFace','TotemCorralFace']){
  const face=totem.getObjectByName(name),rings=face.children.filter(o=>o.name.startsWith('RedCircle'));
  assert.equal(rings.length,10);assert(rings.every(r=>r.material.color.getHex()===0xe52c42));
  assert.equal(face.getObjectByName('TotemInscription').userData.text,'2026 INVERNO');
  const year=face.getObjectByName('WinterYear2026');assert.equal(year.userData.text,'2026');
  const front=year.getObjectByName('YearFace'),outline=year.getObjectByName('YearOutline');
  assert.equal(front.material.fog,false);assert.equal(outline.material.fog,false);
  assert.equal(outline.geometry.parameters.shapes.length,4);assert.equal(outline.geometry.parameters.shapes[1].holes.length,1);assert.equal(outline.geometry.parameters.shapes[3].holes.length,1);
  front.geometry.computeBoundingBox();assert(front.geometry.boundingBox.getSize(new T.Vector3()).y>=.85);
  assert(rings.every(r=>r.position.y>1.3),'emblem does not overlap the year');
 }
 totem.traverse(o=>{if(o.geometry)assert(Array.from(o.geometry.attributes.position.array).every(Number.isFinite));});
 const size=new T.Box3().setFromObject(totem).getSize(new T.Vector3());assert(size.x<3.2&&size.y<5.1&&size.z<1);
});
