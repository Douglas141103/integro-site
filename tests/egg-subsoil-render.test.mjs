// Real DOM, gameplay, transforms and geometry; GPU drawing is stubbed.
import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {createRequire} from 'node:module';import vm from 'node:vm';import {JSDOM} from 'jsdom';
import {createSubsoilWorld} from '../integro-box/egg-src/egg-subsoil-world.js';
import {subsoilLavaShape,SUBSOIL_LAVA} from '../integro-box/egg-src/egg-subsoil.js';
import {buildSync} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
const require=createRequire(new URL('../integro-box/egg-src/entry.js',import.meta.url)),T=require('three');
test('subsoil HUD, lava geometry, peer separation and emergence animate in the mounted mobile game',()=>{
 const dom=new JSDOM(readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8'),{url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true}),w=dom.window;
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:(o,k)=>o[k]||(()=>{})});w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,AA';w.scrollTo=()=>{};
 let frame,clock=0,adapter,renderCamera;
 class Renderer{constructor({canvas}={}){this.domElement=canvas||w.document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setSize(){}dispose(){}forceContextLoss(){}render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);renderCamera=c;}}
 const exports={},context=vm.createContext({exports,require:id=>id==='three'?{...T,WebGLRenderer:Renderer}:require(id),window:w,document:w.document,localStorage:w.localStorage,performance:{now:()=>clock},devicePixelRatio:1,innerWidth:390,ResizeObserver:class{observe(){}},requestAnimationFrame:cb=>{frame=cb;return 1;},console,setTimeout,clearTimeout});
 const code=buildSync({stdin:{contents:"export {mountEggGame} from './egg-game.js';export {EggAdventure} from './egg-rules.js';",resolveDir:new URL('../integro-box/egg-src/',import.meta.url).pathname},bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text;
 context.module={exports};vm.runInContext(code,context);let game;
 // Capture the instance through an existing read method, only inside this test bundle.
 const proto=context.module.exports.EggAdventure.prototype,original=proto.snapshot;proto.snapshot=function(){game=this;return original.call(this);};
 const api=context.module.exports.mountEggGame({onExit(){},registerAdapter:(_,a)=>(adapter={...a})});
 const key=(k,up=false)=>w.document.getElementById('eggCanvas').dispatchEvent(new w.KeyboardEvent(up?'keyup':'keydown',{key:k,bubbles:true,cancelable:true})),tick=(n=1)=>{for(let i=0;i<n;i++){clock+=1000/60;frame(clock);}},state=()=>w.IntegroOvo.getState();
 try{
  api.show();tick();state();Object.assign(game.player,{x:-9,y:0,z:-1098,vy:0});tick(10);
  const button=w.document.getElementById('eggInteract');assert.match(button.textContent,/Entrar na Porta do Subsolo/);button.click();tick(15);assert.equal(state().subsoil,true);assert.equal(state().heaven,false);
  const scene=adapter.scene(),track=scene.getObjectByName('SubsoilBonusTrack'),frameNode=scene.getObjectByName('ExplorerGravityFrame'),actor=frameNode.children.find(n=>n.userData.actor)?.userData.actor;
  assert(track.visible);assert.equal(frameNode.rotation.z,0);assert.equal(scene.getObjectByName('SubsoilGround').geometry.parameters.depth,240);
  const guard=scene.getObjectByName('MagmaGuardian');assert(guard);assert(guard.parent.visible);assert.equal(state().visibleNestEggs[24],3);
  const pools=[],volcanoes=[];track.traverse(n=>{if(n.userData.hazard)pools.push(n);if(n.name==='SubsoilVolcano')volcanoes.push(n);});assert.equal(pools.length,20);assert.equal(volcanoes.length,16);
  for(const p of pools){assert.equal(p.scale.x,p.userData.hazard.rx);assert.equal(p.scale.z,p.userData.hazard.rz);assert.equal(p.position.x,p.userData.hazard.x);assert.equal(p.position.z,p.userData.hazard.z);assert(p.material.emissiveIntensity>0);}
  const beforePulse=pools.map(p=>p.scale.x);tick(45);for(const [i,p] of pools.entries()){const shape=subsoilLavaShape(SUBSOIL_LAVA[i],game.time);assert(Math.abs(p.scale.x-shape.rx)<1e-10);assert(Math.abs(p.scale.z-shape.rz)<1e-10);assert.notEqual(p.scale.x,beforePulse[i]);}
  assert.match(w.document.getElementById('eggWorldName').textContent,/Porta do Subsolo/);assert.match(w.document.getElementById('eggTarget').textContent,/Ovos de Magma/);
  assert(renderCamera.position.y>0);const startX=state().player.x;key('d');tick(4);key('d',true);assert(state().player.x>startX,'normal gravity keeps screen-right orientation');
  adapter.setPeers([{slot:2,state:{x:3,y:0,z:-1609,yaw:0,zone:'world'}}]);tick(2);const remote=scene.getObjectByName('PeerGravityFrame');assert.equal(remote.rotation.z,0);assert(remote.children[0].visible);
  Object.assign(game.player,{x:-5,y:0,z:-1625,vy:0});tick(1);assert.equal(state().subsoil,false);assert(state().emerging>0);assert(actor.g.position.y<0);assert.equal(track.visible,false);const eruption=scene.getObjectByName('SubsoilSurfaceEruption');assert(eruption.visible);assert.equal(remote.children[0].visible,false);
  adapter.setPeers([{slot:2,state:{x:-9,y:0,z:-1090,yaw:0,zone:'world'}}]);tick(2);assert(remote.children[0].visible);assert(remote.position.y<0);assert.equal(remote.children[0].position.z,-1090,'teleport does not interpolate through bonus regions');
  const low=actor.g.position.y;tick(20);assert(actor.g.position.y>low);assert(actor.g.position.y<0);assert.match(button.textContent,/Surgindo do chão/);tick(65);assert.equal(state().emerging,0);assert.equal(actor.g.position.y,0);assert.equal(eruption.visible,false);assert.equal(remote.position.y,0);
  Object.assign(game.player,{x:-9,y:0,z:-1098,vy:0});tick(10);button.click();tick(10);Object.assign(game.player,{x:0,y:0,z:-1826,vy:0});tick(10);assert.match(button.textContent,/Escolher ovo/);button.click();assert.equal(state().sheet,'nest');assert.equal(w.document.querySelectorAll('[data-steal]').length,3);w.document.querySelector('[data-steal="0"]').click();tick(1);assert.equal(state().carrying,24);assert.equal(actor.carry.children.length,1);assert.equal(state().guardians[24].state,'sinking');
  const portal=scene.getObjectByName('SubsoilSurfaceDoor'),cue=w.document.querySelector('.egg-subsoil-cue');const startPortalY=portal.position.y;tick(40);assert(portal.position.y<startPortalY);assert(guard.position.y<0);assert(!cue.hidden);tick(50);assert.equal(state().subsoilEscape.phase,'return');assert(!portal.visible);assert(guard.position.y<=-7);
  Object.assign(game.player,{x:-7,y:0,z:-1802,vy:0});tick(1);assert.equal(state().subsoilEscape.phase,'reveal');assert(portal.visible);assert.equal(portal.position.x,game.subsoilEscape.door.x);assert.equal(portal.position.z,game.subsoilEscape.door.z);assert.equal(guard.position.z,-1814);tick(48);assert(portal.position.y> -1);tick(50);assert.equal(state().subsoilEscape.phase,'countdown');tick(8);assert.equal(cue.querySelector('strong').textContent,'3');
  const still={...game.player},guardianStill={...game.guardians[24]};key('w');tick(60);assert.equal(cue.querySelector('strong').textContent,'2');assert.equal(game.player.z,still.z);assert.equal(game.guardians[24].z,guardianStill.z);tick(60);assert.equal(cue.querySelector('strong').textContent,'1');key('w',true);tick(60);assert.equal(state().subsoilEscape.phase,'chase');assert.equal(guard.position.y,0);assert.match(w.document.getElementById('eggTarget').textContent,/Porta lateral/);
  Object.assign(game.player,{...game.subsoilEscape.door,y:0,vy:0});tick(1);assert.equal(state().subsoil,false);assert(state().emerging>0);assert.equal(state().carrying,24);assert.match(w.document.getElementById('eggToast').textContent,/ovo de Magma/);assert.equal(track.visible,false);tick(80);
  Object.assign(game.player,{x:-5,y:0,z:14,vy:0});tick(10);button.click();tick(1);assert.equal(state().carrying,null);assert.equal(state().eggs[0].world,24);assert.equal(actor.carry.children.length,0);
  w.BoxEggRuntime.raceStart();assert.equal(state().emerging,0);assert.equal(state().player.z,15);tick(5);assert.equal(actor.g.position.y,0);
  adapter.clearPeers();api.hide();
 }finally{dom.window.close();}
});

test('essential lava growth stays synchronized with collision when decorative motion is reduced',()=>{
 const group=(p,x=0,y=0,z=0)=>{const g=new T.Group();g.position.set(x,y,z);p.add(g);return g;};
 const mesh=(p,geo,c,x=0,y=0,z=0)=>{const m=new T.Mesh(geo,new T.MeshStandardMaterial({color:c}));m.position.set(x,y,z);p.add(m);return m;};
 const helpers={group,label:(p,text,x,y,z)=>group(p,x,y,z),box:(p,w,h,d,c,x,y,z)=>mesh(p,new T.BoxGeometry(w,h,d),c,x,y,z),cyl:(p,a,b,h,c,x,y,z,n)=>mesh(p,new T.CylinderGeometry(a,b,h,n),c,x,y,z),ball:(p,r,c,x,y,z)=>mesh(p,new T.SphereGeometry(r,8,6),c,x,y,z),torus:(p,r,t,c,x,y,z)=>mesh(p,new T.TorusGeometry(r,t,6,8),c,x,y,z)};
 const root=new T.Group(),world=createSubsoilWorld({root,entrance:group(root),content:group(root),helpers}),game={inSubsoil:()=>true,time:0,emerging:0};
 const pool=root.getObjectByName('SubsoilLavaLake'),rim=root.getObjectByName('SubsoilLavaRim');
 world.update(game,true);const small=pool.scale.x;game.time=3.6;world.update(game,true);assert(pool.scale.x>small);assert.equal(pool.scale.x,subsoilLavaShape(SUBSOIL_LAVA[0],game.time).rx);assert.equal(rim.scale.x,pool.scale.x+.3);
 const reducedSize=pool.scale.clone();world.update(game,false);assert(pool.scale.equals(reducedSize),'motion preference cannot hide an active collision area');
 root.traverse(n=>{n.geometry?.dispose();n.material?.dispose();});
});
