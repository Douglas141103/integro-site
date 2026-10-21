import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import * as T from '../integro-box/shark-src/node_modules/three/build/three.module.js';
import {clean,eatAlgae,needXP,MAX_LEVEL,claimMissions} from '../integro-box/shark-src/rules.mjs';
import {createAlgaeField} from '../integro-box/shark-src/algae.mjs';
import {sharkCameraPose,bindSharkCamera,clampZoom} from '../integro-box/shark-src/camera.mjs';
test('algae lets beginners evolve, honors growth upgrades and preserves fish-only missions',()=>{
 const p=clean(null);for(let i=0;i<7;i++)eatAlgae(p);assert.equal(p.level,2);assert.equal(p.xp,3);assert.equal(p.algaeEaten,7);assert.equal(p.eaten,0);assert.equal(p.coins,0);assert.deepEqual(claimMissions(p),[]);
 p.upgrades.growth=3;assert.equal(eatAlgae(p).xp,6);p.level=59;p.xp=needXP(59)-1;assert.equal(eatAlgae(p).evolved,true);assert.equal(p.level,MAX_LEVEL);assert.equal(p.xp,0);eatAlgae(p);assert.equal(p.xp,0);assert.equal(clean(JSON.stringify(p)).algaeEaten,10);
 assert.equal(clean({cameraZoom:0}).cameraZoom,0);assert.equal(clean({cameraZoom:Infinity}).cameraZoom,1);assert.equal(clean({cameraZoom:999}).cameraZoom,3);
});
test('edible plants hide after one collision, pause their respawn timer, regrow and follow all regions with only three draw batches',()=>{
 const scene=new T.Scene(),field=createAlgaeField(scene,24),position=new T.Vector3(-600,24,-300);field.seed(position);let meals=0;assert.equal(scene.children.length,3);assert(scene.children.every(m=>m.isInstancedMesh));
 const plant=field.plants[0];plant.group.position.copy(position);plant.baseY=position.y;field.update(.04,1,position,false,2.2,()=>meals++);assert.equal(meals,0);
 field.update(.04,1,position,true,2.2,()=>meals++);assert.equal(meals,1);assert.equal(plant.group.visible,false);for(let i=0;i<100;i++)field.update(.04,2,position,false,2.2,()=>meals++);assert.equal(plant.cooldown,18);assert.equal(meals,1);
 for(let i=0;i<451;i++)field.update(.04,3,position,true,2.2,()=>meals++);assert.equal(plant.group.visible,true);assert(plant.group.position.distanceTo(position)>10);assert.equal(meals,1);
 position.set(600,70,300);field.update(.04,5,position,true,2.2,()=>meals++);assert(field.plants.every(p=>p.group.position.distanceTo(position)<130));field.dispose();assert.equal(scene.children.length,0);
});
test('zoom reaches a forward-looking eye camera and a wide external view without invalid poses',()=>{
 const pos=new T.Vector3(0,24,0),close=sharkCameraPose(pos,0,0,0,4),wide=sharkCameraPose(pos,0,.24,3,4),normal=sharkCameraPose(pos,0,.24,1,4);
 assert.equal(close.firstPerson,true);assert(close.eye.z<pos.z);assert(close.target.z<close.eye.z);assert.equal(wide.firstPerson,false);assert(wide.eye.distanceTo(pos)>normal.eye.distanceTo(pos)*2);assert.equal(clampZoom(-99),0);assert.equal(clampZoom(99),3);
 const turned=sharkCameraPose(pos,Math.PI/2,-.5,0,4);assert(turned.target.x<turned.eye.x);assert(turned.target.y>turned.eye.y);
});
test('pinch and wheel zoom, drag rotates, cancelled and paused fingers cannot move the camera',()=>{
 const dom=new JSDOM('<canvas></canvas>'),canvas=dom.window.document.querySelector('canvas');canvas.setPointerCapture=()=>{};let enabled=true,rotations=0,changes=0;const scene={zoom:1,setZoom(v){this.zoom=clampZoom(v);},moveCamera(){rotations++;}};
 const c=bindSharkCamera(canvas,{enabled:()=>enabled,getScene:()=>scene,onChange:()=>changes++});
 const pointer=(type,id,x,y=20)=>{const e=new dom.window.Event(type,{cancelable:true});Object.assign(e,{pointerId:id,pointerType:'touch',clientX:x,clientY:y});canvas.dispatchEvent(e);};
 try{pointer('pointerdown',1,30);pointer('pointermove',1,40);assert.equal(rotations,1);pointer('pointerdown',2,140);pointer('pointermove',2,200);assert(scene.zoom<1);assert.equal(rotations,1);pointer('pointercancel',2,200);pointer('pointermove',2,240);assert.equal(rotations,1);
  c.clear();pointer('pointermove',1,50);assert.equal(rotations,1);canvas.dispatchEvent(new dom.window.WheelEvent('wheel',{deltaY:1000,cancelable:true}));assert(scene.zoom>1);c.zoomBy(-99);assert.equal(scene.zoom,0);enabled=false;c.zoomBy(1);assert.equal(scene.zoom,0);assert(changes>=3);
 }finally{dom.window.close();}
});

import vm from 'node:vm';
import {createRequire} from 'node:module';
import {buildSync} from '../integro-box/shark-src/node_modules/esbuild/lib/main.js';
test('real game wires zoom buttons, first-person swimming and saved camera preference',()=>{
 const dom=new JSDOM('<section id="sharkApp"></section>',{url:'https://example.test',pretendToBeVisual:true}),w=dom.window,require=createRequire(new URL('../integro-box/shark-src/app.mjs',import.meta.url));
 let frame,clock=0,rendered;class Renderer{setPixelRatio(){}setSize(){}setClearColor(){}dispose(){}render(scene,camera){scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);rendered={scene,camera};}}
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:(o,k)=>o[k]||(()=>{})});w.BoxStorage=w.localStorage;w.localStorage.setItem('shark-ocean-v1',JSON.stringify({quality:'low',sound:false}));
 const context=vm.createContext({window:w,document:w.document,innerWidth:390,innerHeight:844,matchMedia:()=>({matches:true}),performance:{now:()=>clock},requestAnimationFrame:cb=>{frame=cb;return 1;},cancelAnimationFrame:()=>{},console,require:id=>id==='three'?{...require('three'),WebGLRenderer:Renderer}:require(id),module:{exports:{}}});
 const code=buildSync({entryPoints:[new URL('../integro-box/shark-src/app.mjs',import.meta.url).pathname],bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text;vm.runInContext(code,context);
 const app=w.document.getElementById('sharkApp'),game=context.module.exports.createSharkGame(app,()=>{});const tick=(n=1)=>{for(let i=0;i<n;i++){clock+=16;frame(clock);}};
 try{game.open();app.querySelector('[data-resume]').click();tick();assert.equal(game.state().mode,'');assert.equal(game.state().joints,40);assert.equal(rendered.scene.children.filter(x=>x.name==='EdibleAlgae').length,3);
  app.querySelector('#sharkEye').click();tick();assert.equal(game.state().firstPerson,true);assert.equal(app.querySelector('#sharkEye').getAttribute('aria-pressed'),'true');assert.equal(JSON.parse(w.localStorage.getItem('shark-ocean-v1')).cameraZoom,0);
  const before=game.state().progress.position;w.document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'w',bubbles:true}));tick(20);w.document.dispatchEvent(new w.KeyboardEvent('keyup',{key:'w',bubbles:true}));assert(game.state().progress.position.z<before.z);assert(rendered.camera.position.toArray().every(Number.isFinite));
  app.querySelector('#sharkZoomOut').click();tick();assert.equal(game.state().firstPerson,false);app.querySelector('#sharkZoomIn').click();tick();assert.equal(game.state().firstPerson,true);game.hide();game.open();app.querySelector('[data-resume]').click();tick();assert.equal(game.state().firstPerson,true);app.querySelector('#sharkEye').click();tick();assert.equal(game.state().zoom,1);
 }finally{game.stop();w.close();}
});
