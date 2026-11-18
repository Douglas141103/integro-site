import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import {buildSync} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
import * as THREE from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createEggWorld} from '../integro-box/egg-src/egg-world.js';
import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
import {EGYPT,EGYPT_LENGTH} from '../integro-box/egg-src/egg-egypt.js';
import {HEAVEN} from '../integro-box/egg-src/egg-heaven.js';
import {SUBSOIL} from '../integro-box/egg-src/egg-subsoil.js';

const directions = [[0,-1,0,false],[1,-1,1,false],[1,0,2,false],[1,1,3,false],
 [0,1,4,false],[-1,1,3,true],[-1,0,2,true],[-1,-1,1,true]];
const near = (a,b) => assert.ok(Math.abs(a-b)<1e-5, `${a} != ${b}`);

test('portal guardians use their own directional frames, gravity and gait, then release the art',t=>{
 const dom = new JSDOM();
 t.after(()=>dom.window.close());
 t.mock.method(dom.window.HTMLCanvasElement.prototype,'getContext',()=>new Proxy({}, {get:()=>()=>{}}));
 const previous = globalThis.document;
 globalThis.document = dom.window.document;
 t.after(()=>{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;});

 const scene = new THREE.Scene(), world = createEggWorld(scene), camera = new THREE.PerspectiveCamera();
 const texture = new THREE.DataTexture(new Uint8Array(5*3*4).fill(255),5,3);
 texture.needsUpdate = true;
 t.after(()=>texture.dispose());
 assert.equal(world.presentGuardianArtwork(camera,new EggAdventure(),false,{texture}),false);
 for(const [level,entry] of [[HEAVEN,'heavenEnter'],[SUBSOIL,'subsoilEnter'],[EGYPT,'egyptEnter']]){
  const game = new EggAdventure();
  Object.assign(game.player,level.gate);
  assert.equal(game.interact(),entry);
  const guardian = world.guardians[level.world], model = game.guardians[level.world];
  world.zoneGroups[level.world].visible=true;
  Object.assign(game.player,level.nest);
  if(level===EGYPT)game.egyptS=EGYPT_LENGTH;
  const present = (reduced=false)=>world.presentGuardianArtwork(camera,game,reduced,{texture});
  guardian.g.position.set(model.x,model.y||0,model.z);
  for(const [x,z,column,mirror] of directions){
   camera.position.copy(guardian.g.localToWorld(new THREE.Vector3(x*10,1,z*10)));
   assert(present());
   const {frame,billboard,mesh} = guardian.artwork;
   assert.equal(frame.column,column);
   assert.equal(frame.mirror,mirror);
   assert.equal(frame.row,0);
   assert.equal(mesh.material.map,texture);
   assert.equal(guardian.animator.rig.visible,false);
   assert.equal(billboard.parent,guardian.g);
   near(mesh.geometry.attributes.uv.getX(0),(column+(mirror?1:0))/5);
  }

  const {billboard,mesh} = guardian.artwork;
  const feet = ()=>billboard.getWorldPosition(new THREE.Vector3()).y;
  if(level===HEAVEN){
   near(feet(),HEAVEN.ceiling);
   assert(new THREE.Vector3(0,1,0).transformDirection(billboard.matrixWorld).y<-.7);
  } else if(level===EGYPT){
   near(feet(),EGYPT.nest.y);
  }
  assert(game.steal(0));
  if(level===SUBSOIL){
   game.updateSubsoilEscape(1.41);
   assert.equal(model.state,'submerged');
   guardian.g.position.y=model.y;present();
   near(feet(),-7);
   Object.assign(game.player,{x:-7,z:-1802});
   game.updateSubsoilEscape(.01);game.updateSubsoilEscape(1.1);
   assert.equal(model.state,'emerging');
   guardian.g.position.y=model.y;present();
   assert(feet()>-7 && feet()<0);
   assert.equal(guardian.artwork.frame.row,0);
   game.updateSubsoilEscape(1.6);game.updateSubsoilEscape(3.1);
  }
  assert.equal(model.state,'chase');
  world.animateCreature(guardian,game.time,1,.05,0);
  present();assert.equal(guardian.artwork.frame.row,0,'an immobile chase stays still');
  world.animateCreature(guardian,game.time,1,.05,12);
  for(const [phase,reduced,row] of [[.1,false,1],[.8,false,2],[.8,true,1]]){
   guardian.animator.phase=phase;
   present(reduced);
   assert.equal(guardian.artwork.frame.row,row);
   near(mesh.geometry.attributes.uv.getY(0),1-row/3);
  }
  assert.equal(world.presentGuardianArtwork(camera,game,false,{texture,enabled:false}),false);
  assert.equal(guardian.animator.rig.visible,true);
  present();
  const ordinary = new EggAdventure();
  assert.equal(world.presentGuardianArtwork(camera,ordinary,false,{texture}),false);
  assert.equal(billboard.visible,false);
  assert.equal(guardian.animator.rig.visible,true);
  const disposed={geometry:0,material:0};
  for(const key of Object.keys(disposed))mesh[key].addEventListener('dispose',()=>disposed[key]++);
  guardian.dispose();
  assert.equal(guardian.artwork,null);
  assert.equal(billboard.parent,null);
  assert.deepEqual(disposed,{geometry:1,material:1});
 }
});

// Exercise the actual show → portal click → frame → render path. The image loader
// and GPU are replaced; URLs are resolved against the shipped assets on disk.
test('the mounted game lazily binds the shipped atlas for each entered door',t=>{
 const repo = new URL('../',import.meta.url);
 const dom = new JSDOM(readFileSync(new URL('integro-box/jogar.html',repo),'utf8'),{
  url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true
 });
 const w=dom.window, loads=new Map();
 t.after(()=>w.close());
 t.mock.method(w.HTMLCanvasElement.prototype,'getContext',()=>new Proxy({}, {get:()=>()=>{}}));
 t.mock.method(w.HTMLCanvasElement.prototype,'toDataURL',()=> 'data:image/png;base64,AA');
 w.scrollTo=()=>{};
 const require=createRequire(new URL('integro-box/egg-src/entry.js',repo)), native=require('three');
 class Loader {
  load(url,ready){
   if(!url.includes('/egg-guardians-v1/'))return new native.Texture();
   const texture=new native.Texture();
   loads.set(url,texture);ready(texture);return texture;
  }
 }
 class Renderer {
  constructor({canvas}={}){this.domElement=canvas||w.document.createElement('canvas');this.shadowMap={};}
  setPixelRatio(){} setSize(){} dispose(){} forceContextLoss(){}
  render(scene,camera){scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);}
 }
 let nextFrame, clock=0, game, adapter;
 const context=vm.createContext({module:{exports:{}},window:w,document:w.document,
  require:id=>id==='three'?{...native,WebGLRenderer:Renderer,TextureLoader:Loader}:require(id),
  localStorage:w.localStorage,console,setTimeout,clearTimeout,devicePixelRatio:1,innerWidth:390,
  performance:{now:()=>clock},ResizeObserver:class{observe(){}},requestAnimationFrame:fn=>(nextFrame=fn,1)});
 const src=buildSync({stdin:{contents:"export {mountEggGame} from './egg-game.js'; export {EggAdventure} from './egg-rules.js';",
  resolveDir:new URL('integro-box/egg-src/',repo).pathname},bundle:true,format:'cjs',platform:'node',external:['three'],write:false});
 vm.runInContext(src.outputFiles[0].text,context);
 const api=context.module.exports, snap=api.EggAdventure.prototype.snapshot;
 t.mock.method(api.EggAdventure.prototype,'snapshot',function(){game=this;return snap.call(this);});
 const mounted=api.mountEggGame({onExit(){},registerAdapter:(_,a)=>{adapter=a;}});
 const tick=(count=1)=>{for(let n=0;n<count;n++){clock+=1000/60;nextFrame(clock);}};
 mounted.show();tick();w.IntegroOvo.getState();
 assert.equal(loads.size,0);
 for(const [level,id,node] of [[HEAVEN,'sky','CelestialGuardian'],[SUBSOIL,'magma','MagmaGuardian'],[EGYPT,'mummy','MummyGuardian']]){
  Object.assign(game.player,level.gate,{y:0,vy:0});tick(10);
  assert.equal(game.interaction().type,id==='sky'?'heavenEnter':id==='magma'?'subsoilEnter':'egyptEnter');
  w.document.querySelector('#eggInteract').click();tick(10);
  const url='/integro-box/assets/egg-guardians-v1/'+id+'.webp';
  const texture=loads.get(url),file=readFileSync(new URL(url.slice(1),repo));
  assert.equal(file.toString('ascii',0,4),'RIFF');
  assert.equal(file.toString('ascii',8,16),'WEBPVP8X');
  assert(file[20]&0x10,'the directional atlas needs transparency');
  assert.deepEqual([file.readUIntLE(24,3)+1,file.readUIntLE(27,3)+1],[1600,960]);
  assert.equal(game.zone(),level.world);
  const mesh=adapter.scene().getObjectByName(node).getObjectByName('EggDoorGuardianAtlas');
  assert(texture && mesh?.parent.visible,id+' artwork appears on portal entry');
  assert.equal(mesh.material.map,texture);
 }
 assert.equal(loads.size,3);mounted.hide();
});
