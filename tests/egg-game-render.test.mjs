// Real DOM, rules, Three geometry and animation. Only GPU drawing is replaced;
// this checks integration and is not a WebGL/browser visual test.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import {NEW_EGG_ITEMS} from '../integro-box/egg-intgem-catalog.mjs';
import {JSDOM} from 'jsdom';
import {buildSync} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
const require=createRequire(new URL('../integro-box/egg-src/entry.js',import.meta.url)),T=require('three');
test('mounted Egg runs, jumps, carries eggs, pauses, trains and reloads equipped pets with the real actors',async()=>{
 const dom=new JSDOM(readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8'),{url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true}),w=dom.window;
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:(o,k)=>o[k]||(()=>{})});w.HTMLCanvasElement.prototype.toDataURL=()=> 'data:image/png;base64,AA';w.scrollTo=()=>{};
 let frame,clock=0,adapter;const errors=[];
 class Renderer{constructor({canvas}={}){this.domElement=canvas||w.document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setSize(){}dispose(){}forceContextLoss(){}render(s,c){s.updateMatrixWorld(true);c.updateMatrixWorld(true);}}
 const exports={},context=vm.createContext({exports,require:id=>id==='three'?{...T,WebGLRenderer:Renderer}:require(id),window:w,document:w.document,localStorage:w.localStorage,performance:{now:()=>clock},devicePixelRatio:1,innerWidth:390,ResizeObserver:class{observe(){}},requestAnimationFrame:cb=>{frame=cb;return 1;},console:{...console,error:(...args)=>errors.push(args)},setTimeout,clearTimeout});
 const code=buildSync({entryPoints:[new URL('../integro-box/egg-src/egg-game.js',import.meta.url).pathname],bundle:true,format:'cjs',platform:'node',external:['three'],write:false}).outputFiles[0].text;
 context.module={exports};vm.runInContext(code,context);const api=context.module.exports.mountEggGame({onExit(){},registerAdapter:(_,a)=>(adapter={...a})});
 const key=(k,up=false)=>w.document.getElementById('eggCanvas').dispatchEvent(new w.KeyboardEvent(up?'keyup':'keydown',{key:k,bubbles:true,cancelable:true})),tick=(n=1)=>{for(let i=0;i<n;i++){clock+=1000/60;frame(clock);}},state=()=>w.IntegroOvo.getState();
 try{
  api.show();tick();assert.deepEqual(errors,[]);assert(state().thumbnailCount>80);assert.equal(w.document.getElementById('eggWebglError').hidden,true);
  key('w');tick(270);key('w',true);key('d');tick(20);key('d',true);assert.equal(state().interaction.type,'nest');
  key('e');assert.equal(state().sheet,'nest');w.document.querySelector('[data-steal="0"]').click();tick(15);assert.equal(state().carrying,0);
  let actor;adapter.scene().traverse(n=>{if(n.name==='EggExplorer'&&n.userData.actor?.carry.children.length)actor=n.userData.actor;});assert(actor);assert(actor.carryBlend>.8);assert.equal(actor.carry.parent,actor.model.bones.chest);
  key(' ');tick(8);key(' ',true);assert(state().player.y>0);assert.equal(actor.model.current,'jump');
  key('Escape');const frozen=JSON.stringify(state().player);tick(30);assert.equal(JSON.stringify(state().player),frozen);key('Escape');
  w.BoxEggRuntime.raceStart();w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),accessories:['crown'],equipped:{head:'crown'},creatures:[{id:1,uid:'pet-one',world:0,rarity:'common',mutation:'normal'}],companionId:'pet-one'});tick(20);assert.equal(state().equippedModels,2);assert.equal(state().creatures.length,1);
  key('d');tick(34);key('d',true);key('e');assert.equal(state().mode,'train');tick(40);assert(state().trainXP>0);assert.equal(actor.model.current,'run');
  w.BoxEggCloud={frozen:true};const pose=actor.model.bones.kneeL.quaternion.toArray();tick(20);assert.deepEqual(actor.model.bones.kneeL.quaternion.toArray(),pose);w.BoxEggCloud.frozen=false;
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),vehicles:['skateBreeze','scooterPort'],vehicle:'skateBreeze'});tick(3);
  const joy=w.document.getElementById('eggJoystick'),jump=w.document.getElementById('eggJump'),sprint=w.document.getElementById('eggSprint');
  joy.getBoundingClientRect=()=>({left:0,top:0,width:100,height:100});for(const el of [joy,jump,sprint])el.setPointerCapture=()=>{};
  const pointer=(el,type,id,x=50,y=50)=>{const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{pointerId:id,pointerType:'touch',button:0,isPrimary:id===1,clientX:x,clientY:y});el.dispatchEvent(e);};
  pointer(joy,'pointerdown',1,50,10);pointer(sprint,'pointerdown',2);tick(3);const beforeJump=state().player.z;pointer(jump,'pointerdown',3);tick(5);assert(state().player.y>.3);assert(state().player.z<beforeJump-.8);assert.equal(actor.vehicleId,'skateBreeze');
  pointer(jump,'pointercancel',3);pointer(sprint,'pointerup',2);const stillRunning=state().player.z;tick(5);assert(state().player.z<stillRunning,'releasing action fingers preserves joystick');pointer(joy,'pointerup',1);tick(60);const stoppedZ=state().player.z;tick(5);assert.equal(state().player.z,stoppedZ);
  pointer(jump,'pointerdown',4);key('Escape');const pausedY=state().player.y;tick(10);pointer(jump,'pointerdown',5);assert.equal(state().player.y,pausedY);key('Escape');tick(70);
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),coins:1000000});w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();assert.equal(w.document.querySelectorAll('.egg-gem-card').length,41);assert(w.document.querySelector('[data-gem-item="egg_station_head"]').disabled);w.document.querySelector('[data-shop-tab="vehicles"]').click();assert.equal(w.document.querySelectorAll('[data-vehicle]').length,2);assert.match(w.document.getElementById('eggSheetTag').textContent,/129 ITENS/);w.document.querySelector('[data-vehicle="scooterPort"]').click();w.document.getElementById('eggCloseSheet').click();tick(2);assert.equal(actor.vehicleId,'scooterPort');
  const premium=NEW_EGG_ITEMS.find(i=>i.id==='egg_station_head');let gemEquipment={head:premium};
  w.BoxIntGem={balance:0,getCatalog:()=>[],getEquipped:()=>gemEquipment,refresh:async()=>{},toggleEquipment:async()=>{gemEquipment={};}};
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),accessories:['crown'],equipped:{head:'crown'}});tick(2);
  w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();w.document.querySelector('[data-shop-tab="accessories"]').click();
  assert.equal(w.document.querySelectorAll('[data-equip="clockworkCrown"]').length,0);
  assert.equal(w.document.querySelector('[data-equip="crown"]').textContent,'Equipar');
  w.document.querySelector('[data-equip="crown"]').click();await Promise.resolve();await Promise.resolve();
  assert.equal(w.BoxEggRuntime.save().equipped.head,'crown');assert.equal(gemEquipment.head,undefined);
  assert.equal(w.document.querySelector('[data-equip="crown"]').textContent,'Guardar');w.document.getElementById('eggCloseSheet').click();tick(2);
  adapter.setPeers([{slot:2,state:{x:2,y:0,z:10,yaw:0,zone:'world'}}]);tick(3);adapter.clearPeers();api.hide();assert.equal(state().active,false);assert(w.localStorage.getItem('integro-box-eggs-v1'));assert.deepEqual(errors,[]);
 }finally{dom.window.close();}
});
