// Real DOM, gameplay, transforms and geometry; GPU drawing is stubbed.
import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {createRequire} from 'node:module';import vm from 'node:vm';import {JSDOM} from 'jsdom';
import {EGYPT,EGYPT_LENGTH,egyptPoint} from '../integro-box/egg-src/egg-egypt.js';
import {createSubsoilWorld} from '../integro-box/egg-src/egg-subsoil-world.js';
import {subsoilLavaShape,SUBSOIL_LAVA} from '../integro-box/egg-src/egg-subsoil.js';
import {buildSync} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
const require=createRequire(new URL('../integro-box/egg-src/entry.js',import.meta.url)),T=require('three');
test('Egypt portal, elevated mummy, sand status, camera and remote players integrate in the mounted game',()=>{
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
 api.show();tick();state();Object.assign(game.player,{...EGYPT.gate,y:0,vy:0});tick(10);
 const button=w.document.getElementById('eggInteract');assert.match(button.textContent,/Entrar na Pirâmide/);button.click();tick(10);assert.equal(state().egypt,true);assert.equal(state().subsoil,false);
 const scene=adapter.scene(),pyramid=scene.getObjectByName('EgyptPyramidWorld');assert(pyramid.visible);assert(scene.getObjectByName('ContinuousSpiralRamp'));assert(scene.getObjectByName('EgyptDesertReturnPortal'));
 game.egyptS=120;Object.assign(game.player,egyptPoint(120),{vy:0});tick(15);assert(game.player.y>5);const actor=scene.getObjectByName('ExplorerGravityFrame').children.find(n=>n.userData.actor)?.userData.actor;assert.equal(actor.g.position.y,game.player.y);assert(renderCamera.position.y>game.player.y);assert.match(w.document.getElementById('eggWorldName').textContent,/Pirâmide do Egito/);
 adapter.setPeers([{slot:2,state:{...egyptPoint(230),yaw:0,zone:'world'}}]);tick(2);const peer=scene.getObjectByName('PeerGravityFrame').children[0];assert(peer.visible);assert(peer.position.y>8,'remote player is not clamped to the old flight height');
 game.egyptS=77;Object.assign(game.player,egyptPoint(77),{vy:0});game.time=2;tick(10);assert.match(w.document.getElementById('eggWinterStatus').textContent,/55%/);
 game.egyptS=EGYPT_LENGTH;Object.assign(game.player,EGYPT.nest,{vy:0});tick(10);const mummy=scene.getObjectByName('MummyGuardian');assert(mummy);assert.equal(mummy.position.y,54);assert.equal(state().visibleNestEggs[25],3);button.click();assert.equal(state().sheet,'nest');w.document.querySelector('[data-steal="0"]').click();tick(1);assert.equal(state().carrying,25);assert.equal(actor.carry.children.length,1);
 game.egyptS=1;Object.assign(game.player,egyptPoint(1),{vy:0});tick(1);assert.equal(state().egypt,false);assert.equal(state().carrying,25);assert(!pyramid.visible);assert(!peer.visible);tick(10);assert.match(w.document.getElementById('eggChase').textContent,/seguro/);
 adapter.clearPeers();api.hide();
 }finally{dom.window.close();}
});
