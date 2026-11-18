import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {EggExplorerSprite} from '../integro-box/egg-src/egg-explorer-sprite.js';

import {EggExplorer} from '../integro-box/egg-src/egg-actors.js';
import {ArtResources} from '../integro-box/rush-src/art.js';

const state={stepping:false,carrying:false,flying:false,gaitPhase:0};
const near=(x,y)=>assert.ok(Math.abs(x-y)<1e-5,x+' ≠ '+y);
const setup=()=>{const space=new THREE.Group(),sprite=new EggExplorerSprite(space),camera=new THREE.PerspectiveCamera();
return {space,sprite,camera};};

test('the front-to-back compass mirrors only the three oblique samples',()=>{
 const {sprite,camera}=setup(),texture=new THREE.Texture();
 for(const [x,z,col,mirrored] of [[0,-8,0,false],[4,-4,1,false],[8,0,2,false],[4,4,3,false],[0,8,4,false],[-4,4,3,true],[-8,0,2,true],[-4,-4,1,true]]){
  camera.position.set(x,3,z);
  assert.equal(sprite.present(camera,'full',state,{texture}),true);
  assert.equal(sprite.frame.column,col);assert.equal(sprite.frame.mirror,mirrored);
  near(sprite.geometry.attributes.uv.getX(0), (col+(mirrored?1:0))/5);
  near(sprite.geometry.attributes.uv.getX(1), (col+(mirrored?0:1))/5);
 }
 assert.equal(sprite.mesh.material.toneMapped,false);
 assert.equal(sprite.mesh.material.fog,false);
 assert(sprite.mesh.material instanceof THREE.MeshBasicMaterial);
 sprite.dispose();texture.dispose();
});

test('UVs and feet keep still/stride/carry poses registered across cameras, vehicles and inverted gravity',()=>{
 const {space,sprite,camera}=setup(),texture=new THREE.Texture();
 camera.position.set(1,3,-6);
 for(const [stepping,carrying,phase,reduce,row] of [[false,false,0,false,0],[true,false,.15,false,1],[true,false,.7,false,2],[false,true,.7,false,3],[true,true,.1,false,3],[true,true,.81,false,4],[true,true,.8,true,3]]){
  sprite.present(camera,'full',{...state,stepping,carrying,gaitPhase:phase,reducedMotion:reduce},{texture});
  assert.equal(sprite.frame.row,row);near(sprite.geometry.attributes.uv.getY(0),1-row/5);
  near(sprite.geometry.attributes.uv.getY(2),1-(row+1)/5);
 }
 const upper=sprite.geometry.attributes.position.getY(0),lower=sprite.geometry.attributes.position.getY(2);
 near(upper+(lower-upper)*307/320,0);
 space.position.set(1,2,3);space.scale.setScalar(.82);space.rotation.z=Math.PI;
 sprite.present(camera,'full',state,{texture});
 const actorUp=new THREE.Vector3(0,1,0).transformDirection(space.matrixWorld);
 const artUp=new THREE.Vector3(0,1,0).transformDirection(sprite.billboard.matrixWorld);assert(artUp.dot(actorUp)>.80);
 assert(new THREE.Vector3().setFromMatrixPosition(sprite.billboard.matrixWorld).distanceTo(space.position)<1e-8);
 const ortho=new THREE.OrthographicCamera(-1,1,1,-1,.1,100);
 ortho.position.set(20,9,-20);ortho.lookAt(20,0,0);sprite.present(ortho,'full',state,{texture});assert.equal(sprite.frame.column,0);
 sprite.dispose();texture.dispose();
});

test('shared lazy atlas survives partial loads, switches independently, is retried and released',()=>{
 const doc=globalThis.document;globalThis.document={};
 const proto=THREE.TextureLoader.prototype,orig=proto.load,requests=[],originalDate=Date.now;
 let now=100000;Date.now=()=>now;
 proto.load=function(url,ok,onProgress,fail){requests.push({url,ok,fail});return new THREE.Texture();};
 const a=setup(),b=setup();a.camera.position.z=-3;b.camera.position.x=-3;
 try{
  assert.equal(a.sprite.present(a.camera,'full',state,{}),false);
  assert.equal(b.sprite.present(b.camera,'full',state,{}),false);assert.equal(requests.length,1);
  assert.equal(requests[0].url,'/integro-box/assets/egg-explorer-v1/explorer.webp');
  requests[0].fail(new Error('transient'));assert.equal(b.sprite.present(b.camera,'full',state,{}),false);
  now+=16000;assert.equal(a.sprite.present(a.camera,'full',state,{}),false);assert.equal(requests.length,2);
  const shared=new THREE.Texture();let clean=0;shared.addEventListener('dispose',()=>clean++);requests[1].ok(shared);
  assert(a.sprite.present(a.camera,'full',state,{}));assert(b.sprite.present(b.camera,'full',state,{}));
  assert.equal(shared.colorSpace,THREE.SRGBColorSpace);assert.equal(a.sprite.material.map,b.sprite.material.map);
  assert.notDeepEqual([...a.sprite.geometry.attributes.uv.array],[...b.sprite.geometry.attributes.uv.array]);
  assert.equal(a.sprite.present(a.camera,'no-pack',state,{}),true);assert(a.sprite.showingPrevious);assert.equal(clean,0);
  assert.equal(requests[2].url,'/integro-box/assets/egg-explorer-v1/explorer-no-pack.webp');
  b.sprite.dispose();assert.equal(clean,0);a.sprite.dispose();assert.equal(clean,1);
  const pending=new THREE.Texture();let cleaned=false;pending.addEventListener('dispose',()=>cleaned=true);
  requests[2].ok(pending);assert(cleaned);
 }finally{Date.now=originalDate;proto.load=orig;if(doc===undefined)delete globalThis.document;else globalThis.document=doc;}
});

test('the native runner hands over to actual atlas pixels and keeps equipment, mount and restoration',()=>{
 const world=new THREE.Group(),art=new ArtResources(),actor=new EggExplorer(art,world),view=new THREE.PerspectiveCamera();
 const texture=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1);texture.colorSpace=THREE.SRGBColorSpace;texture.needsUpdate=true;
 view.position.set(2,3,-6);
 assert.equal(actor.presentArtwork(view),false);assert(actor.model.root.visible);
 actor.update(.05,{moving:1,carrying:true});
 assert.equal(actor.presentArtwork(view,{texture}),true);assert(!actor.model.root.visible);assert(actor.artwork.mesh.material.map===texture);
 assert([3,4].includes(actor.artwork.frame.row));
 actor.update(.05,{moving:1,carrying:true});actor.presentArtwork(view,{texture});assert(!actor.model.root.visible);
 actor.equip({head:'crown'},(p,id)=>{const group=new THREE.Group();p.add(group);group.add(new THREE.Mesh(new THREE.SphereGeometry(.11),new THREE.MeshBasicMaterial({color:0xffcc00})));return group;});
 actor.presentArtwork(view,{texture});
 assert(actor.artwork.billboard.getObjectByName('IllustratedEquipment-crown'));
 actor.update(.05,{moving:1,vehicle:'scooterPort'});actor.presentArtwork(view,{texture});
 assert.equal(actor.artwork.frame.row,0);assert.equal(actor.ride.parent,actor.g);
 const mount=actor.artwork.billboard.getWorldPosition(new THREE.Vector3());
 assert(mount.y>.4,'sprite feet rise onto deck with vehicle');
 actor.update(.05,{moving:1,flying:true});actor.presentArtwork(view,{texture});
 assert.equal(actor.artwork.frame.flying,true);assert(actor.jetVisual.root.parent.parent.parent===actor.artwork.billboard);
 actor.presentArtwork(view,{enabled:false,texture});assert(actor.model.root.visible);assert(!actor.artwork.billboard.visible);assert(actor.jetVisual.root.parent===actor.model.bones.chest);
 actor.dispose();assert.equal(world.children.length,0);art.dispose();texture.dispose();
});
