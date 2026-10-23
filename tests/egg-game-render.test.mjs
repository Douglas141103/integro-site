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
  w.BoxEggCloud={ready:true,dirty(){},ranking:async()=>({mine:{position:5,integros:100,intgem:2},rows:[],total:0,updated_at:new Date().toISOString()})};tick(10);await new Promise(setImmediate);assert.equal(w.document.querySelector('#eggRanking [data-rank-position]').textContent,'5º');
  w.document.getElementById('eggRanking').click();assert.equal(state().sheet,'ranking');assert.match(w.document.getElementById('eggSheetTitle').textContent,/Ranking do Pegue o Ovo/);w.document.querySelector('[data-egg-action="settings"]').click();assert.equal(state().sheet,'settings');w.document.querySelector('[data-egg-action="resume"]').click();
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
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),coins:1000000});w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();assert.match(w.document.getElementById('eggWinterContent').textContent,/XXXXX/);assert.doesNotMatch(w.document.getElementById('eggWinterContent').textContent,/800.000|900.000|1.000.000|2.000.000|3.000.000/);w.document.querySelector('[data-shop-tab="intgem"]').click();assert.equal(w.document.querySelectorAll('.egg-gem-card').length,41);assert(w.document.querySelector('[data-gem-item="egg_station_head"]').disabled);w.document.querySelector('[data-shop-tab="vehicles"]').click();assert.equal(w.document.querySelectorAll('[data-vehicle]').length,2);assert.match(w.document.getElementById('eggSheetTag').textContent,/137 ITENS/);w.document.querySelector('[data-vehicle="scooterPort"]').click();w.document.getElementById('eggCloseSheet').click();tick(2);assert.equal(actor.vehicleId,'scooterPort');
  const premium=NEW_EGG_ITEMS.find(i=>i.id==='egg_station_head');let gemEquipment={head:premium};
  w.BoxIntGem={balance:0,getCatalog:()=>[],getEquipped:()=>gemEquipment,refresh:async()=>{},toggleEquipment:async()=>{gemEquipment={};}};
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),accessories:['crown'],equipped:{head:'crown'}});tick(2);
  w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();w.document.querySelector('[data-shop-tab="accessories"]').click();
  assert.equal(w.document.querySelectorAll('[data-equip="clockworkCrown"]').length,0);
  assert.equal(w.document.querySelector('[data-equip="crown"]').textContent,'Equipar');
  w.document.querySelector('[data-equip="crown"]').click();await Promise.resolve();await Promise.resolve();
  assert.equal(w.BoxEggRuntime.save().equipped.head,'crown');assert.equal(gemEquipment.head,undefined);
  assert.equal(w.document.querySelector('[data-equip="crown"]').textContent,'Guardar');w.document.getElementById('eggCloseSheet').click();tick(2);
  let flights=12,flight=null;const jetCalls=[];w.BoxEggCloud.jet=async(action,id)=>{jetCalls.push(action);if(action==='jet_launch'){flights--;flight={id,until:new Date(Date.now()+45000).toISOString()};}if(action==='jet_land')flight=null;return {charges:flights,balance:15,flight,now:new Date().toISOString()};};
  w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();w.document.querySelector('[data-shop-tab="jetpack"]').click();await new Promise(r=>setImmediate(r));
  assert.match(w.document.getElementById('eggJetContent').textContent,/15 IntGem/);w.document.querySelectorAll('#eggJetContent button')[1].click();await new Promise(r=>setImmediate(r));tick(90);
  assert.equal(state().jetFlight.id,flight.id);assert.equal(state().player.y,8);assert.equal(actor.vehicleId,null,'vehicle is stowed while flying');assert.equal(actor.jetVisual.root.visible,true);assert.equal(actor.pack.visible,false);assert.equal(flights,11);
  w.document.querySelector('.egg-jet-home').click();tick(240);await new Promise(r=>setImmediate(r));assert.equal(state().jetFlight,null);assert.equal(state().player.y,0);assert.equal(state().player.z,14);assert.equal(actor.jetVisual.root.visible,false);assert.equal(jetCalls.filter(a=>a==='jet_launch').length,1);assert.equal(jetCalls.filter(a=>a==='jet_land').length,1);
  adapter.setPeers([{slot:2,state:{x:2,y:8,z:10,yaw:0,zone:'world',jetpack:true}}]);tick(3);let airbornePeer;adapter.scene().traverse(n=>{if(n.userData.actor?.jetVisual?.root.visible)airbornePeer=n.userData.actor;});assert(airbornePeer,'peers see the flying jetpack');adapter.clearPeers();
  let giftClaimed=false;const giftCalls=[];w.BoxEggCloud.gift=async action=>{giftCalls.push(action);if(action==='gift_claim'){giftClaimed=true;flights+=5;}return{claimed:giftClaimed};};w.BoxEggCloud.traps=async()=>({stock:{mine:1,bear:1},traps:[],hits:[],balance:15});
  tick(10);await new Promise(r=>setImmediate(r));tick(10);assert.equal(state().sheet,'gift');assert.deepEqual(giftCalls,['gift_state']);assert.match(w.document.getElementById('eggGiftContent').textContent,/5 recargas de voo/);
  w.document.querySelector('[data-gift-open]').click();await new Promise(r=>setImmediate(r));assert.equal(flights,16);assert.equal(w.document.querySelector('.egg-jet-button span').textContent,'×16');assert(w.document.querySelector('.egg-gift.is-open'));w.document.querySelector('[data-gift-open]').click();assert.equal(state().sheet,null);
  flights=1;w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();w.document.querySelector('[data-shop-tab="jetpack"]').click();await new Promise(r=>setImmediate(r));w.document.querySelectorAll('#eggJetContent button')[1].click();await new Promise(r=>setImmediate(r));tick(90);assert.equal(state().sheet,null,'last charge does not interrupt flight');w.document.querySelector('.egg-jet-home').click();tick(240);await new Promise(r=>setImmediate(r));tick(10);assert.equal(state().sheet,'empty');assert.match(w.document.getElementById('eggEmptyContent').textContent,/Acabou o item/);w.document.querySelector('#eggEmptyContent button').click();assert.equal(state().sheet,'shop');w.document.getElementById('eggCloseSheet').click();
  // A touch on the level bar must purchase level five, charge once and persist it.
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),coins:50000});
  w.document.getElementById('eggSettings').click();w.document.querySelector('[data-egg-action="shop"]').click();w.document.querySelector('[data-shop-tab="gear"]').click();
  for(const [id,base] of [['boots',80],['energy',90],['pen',150]]){
   const before=w.BoxEggRuntime.save();w.BoxEggRuntime.apply({...before,upgrades:{...before.upgrades,[id]:4}});
   const bar=w.document.querySelector('.egg-level-buy[data-buy="'+id+'"]');assert.equal(bar.disabled,false);bar.click();
   const purchased=w.BoxEggRuntime.save();assert.equal(purchased.upgrades[id],5);assert.equal(purchased.coins,before.coins-Math.round(base*2*5**2.4));
   assert.equal(JSON.parse(w.localStorage.getItem('integro-box-eggs-v1')).upgrades[id],5);
  }
  assert(w.document.querySelector('.egg-level-buy[data-buy="energy"]').disabled,'maximum level is not purchased again');
  w.BoxEggRuntime.apply({...w.BoxEggRuntime.save(),coins:0});assert(w.document.querySelector('.egg-level-buy[data-buy="boots"]').disabled);assert.match(w.document.getElementById('eggSheetBody').textContent,/Integros disponíveis insuficientes/);
  w.document.getElementById('eggCloseSheet').click();
  const beforeCredit=state(),oldPosition=JSON.stringify(beforeCredit.player);w.BoxEggRuntime.solidarityCredit(500);assert.equal(state().coins,beforeCredit.coins+500);assert.equal(JSON.stringify(state().player),oldPosition);assert.equal(state().tax.earned,beforeCredit.tax.earned);
  adapter.setPeers([{slot:2,state:{x:2,y:0,z:10,yaw:0,zone:'world'}}]);tick(3);adapter.clearPeers();api.hide();assert.equal(state().active,false);assert(w.localStorage.getItem('integro-box-eggs-v1'));assert.deepEqual(errors,[]);
 }finally{dom.window.close();}
});
