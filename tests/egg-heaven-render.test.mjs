// Real DOM, gameplay, transforms and geometry; GPU drawing is stubbed.
import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {createRequire} from 'node:module';import vm from 'node:vm';import {JSDOM} from 'jsdom';
import {buildSync} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
const require=createRequire(new URL('../integro-box/egg-src/entry.js',import.meta.url)),T=require('three');
test('portal HUD, inverted player and guardian, ceiling jumps, screen-relative controls, remote peers and egg exit integrate in the mounted game',()=>{
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
  api.show();tick();state();game.save.training=100;Object.assign(game.player,{x:0,y:0,z:-1098,vy:0});tick(10);
  const button=w.document.getElementById('eggInteract');assert.match(button.textContent,/Entrar na Porta do Céu/);button.click();tick(50);assert.equal(state().heaven,true);
  const scene=adapter.scene(),frameNode=scene.getObjectByName('ExplorerGravityFrame'),track=scene.getObjectByName('HeavenInvertedTrack');assert.equal(frameNode.rotation.z,Math.PI);assert.equal(track.rotation.z,Math.PI);
  const floor=scene.getObjectByName('HeavenCeilingSurface');assert.equal(floor.geometry.parameters.depth,288);assert.equal(floor.geometry.parameters.width,28.5);
  const bounds=new T.Box3().setFromObject(floor);assert(Math.abs(bounds.min.y-12)<1e-5);assert(renderCamera.position.y<10,'camera remains below the ceiling');
  const actor=frameNode.children.find(n=>n.userData.actor)?.userData.actor;assert(actor);const head=actor.model.bones.head.getWorldPosition(new T.Vector3()),foot=actor.model.bones.footL.getWorldPosition(new T.Vector3());assert(head.y<foot.y,'head is physically below feet');
  const guardian=track.children.find(n=>n.userData.creatureRig); // The full guardian geometry remains below its ceiling too.
  const rig=[];track.traverse(n=>{if(n.isSkinnedMesh)rig.push(n)});assert(rig.length>0);assert(new T.Box3().setFromObject(track.children.find(n=>n.name==='CelestialGuardian')||rig[0]).min.y<12);
  const startX=state().player.x;key('d');tick(8);key('d',true);assert(state().player.x<startX,'screen right maps to negative local x under inverted gravity');
  key(' ');tick(8);key(' ',true);assert(state().player.y>0);assert(actor.g.getWorldPosition(new T.Vector3()).y<12,'jump moves down away from ceiling');tick(70);assert.equal(state().player.y,0);
  adapter.setPeers([{slot:2,state:{x:3,y:0,z:-1210,yaw:0,zone:'world'}}]);tick(10);const remote=scene.getObjectByName('PeerGravityFrame');assert.equal(remote.rotation.z,Math.PI);assert(remote.children[0].getWorldPosition(new T.Vector3()).y>11);
  Object.assign(game.player,{x:0,y:0,z:-1468,vy:0});tick(10);button.click();assert.equal(state().sheet,'nest');w.document.querySelector('[data-steal="0"]').click();tick(2);assert.equal(state().carrying,23);assert(actor.carry.children.length>0);
  Object.assign(game.player,{x:0,y:0,z:-1202,vy:0});tick(10);assert.equal(state().heaven,false);assert.equal(state().carrying,23);assert.equal(frameNode.rotation.z,0);assert.match(w.document.getElementById('eggTarget').textContent,/Curral/);assert.equal(remote.children[0].visible,false);
  Object.assign(game.player,{x:-5,y:0,z:14,vy:0});tick(10);button.click();tick(1);assert.equal(state().carrying,null);assert.equal(state().eggs[0].world,23);assert.equal(actor.carry.children.length,0);
  adapter.clearPeers();api.hide();
 }finally{dom.window.close();}
});
