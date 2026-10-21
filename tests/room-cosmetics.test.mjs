import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import vm from 'node:vm';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createRoomCosmetics,roomEquipment} from '../integro-box/room-cosmetics.mjs';
import {createEggWorld} from '../integro-box/egg-src/egg-world.js';import {installEggPeerVisuals} from '../integro-box/egg-src/egg-peers.js';
globalThis.document={createElement:()=>({getContext:()=>new Proxy({},{get:(o,k)=>o[k]||(()=>{})})})};
test('Egg peers show equipped native and premium gear, companions and vehicles, then remove them cleanly',()=>{
 const scene=new T.Scene(),world=createEggWorld(scene),adapter={scene:()=>scene,state:()=>({zone:'world'})};installEggPeerVisuals(adapter,()=>world);
 const state={x:2,y:0,z:10,yaw:0,zone:'world',vehicle:'carRoyal',appearance:{accessories:{head:'crown',back:'wings'},premium:{head:'egg_station_head',aura:'egg_coral_aura',companion:'egg_station_companion'},companion:{world:1,rarity:'rare',mutation:'gold'}}};
 adapter.setPeers([{slot:2,state}]);adapter.tick(.1);let actor;scene.traverse(n=>{if(n.name==='EggExplorer'&&n.userData.actor!==world.player)actor=n.userData.actor;});assert(actor);assert.equal(actor.vehicleId,'carRoyal');assert(actor.wear.children.some(n=>n.name==='ig_station_head'));assert(actor.wear.children.some(n=>n.name==='wings'));assert(!actor.wear.children.some(n=>n.name==='crown'));
 const gem=actor.g.getObjectByName('IntGem');assert(gem.visible);assert.equal(gem.children[0].userData.model,'robot');assert.equal(gem.children[1].userData.model,'bubbles');
 const originalWear=actor.wear.children[0];adapter.setPeers([{slot:2,state}]);assert.equal(actor.wear.children[0],originalWear,'same equipment does not rebuild geometry');
 adapter.setPeers([{slot:2,state:{...state,vehicle:'',appearance:{}}}]);adapter.tick(.1);assert.equal(actor.wear.children.length,0);assert.equal(gem.visible,false);assert.equal(actor.vehicleId,null);
 adapter.clearPeers();assert.equal(actor.g.parent,null);assert.equal(gem.parent,null);
});
test('shared room cosmetics reject wrong-game/slot IDs and work in Bairro and Craft adapters',()=>{
 assert.deepEqual(roomEquipment({premium:{head:'egg_station_head',aura:'craft_jade',companion:'egg_coral_aura'}},'egg'),{head:roomEquipment({premium:{head:'egg_station_head'}},'egg').head});
 const source=readFileSync(new URL('../integro-box/worlds.js',import.meta.url),'utf8'),start=source.indexOf('  function registerBoxAdapter(id, api)'),end=source.indexOf('\n  function xi(',start);
 const win={BoxRoomCosmetics:{create:(parent,game)=>createRoomCosmetics(T,parent,game)}},ctx=vm.createContext({window:win,document:globalThis.document,performance:{now:()=>1000},Sg:T.Group,VA:T.Mesh,Tg:T.BoxGeometry,HB:T.MeshBasicMaterial,nB:T.CanvasTexture,Eg:T.SRGBColorSpace,oC:T.Sprite,CC:T.SpriteMaterial,$:T.Vector3});
 vm.runInContext(source.slice(start,end),ctx);
 for(const game of ['bairro','craft']){
 const scene=new T.Scene(),adapter=ctx.registerBoxAdapter(game,{scene:()=>scene,state:()=>({zone:'world'})}),state={x:1,y:0,z:1,yaw:0,zone:'world',appearance:{premium:{aura:game+'_jade',companion:game+'_guardian'}}};
 adapter.setPeers([{slot:2,state}]);adapter.tick(.1);const gem=scene.getObjectByName('IntGem');assert(gem?.visible);assert.equal(gem.children[0].visible,true);adapter.setPeers([{slot:2,state:{...state,appearance:{}}}]);assert.equal(gem.visible,false);adapter.clearPeers();assert.equal(scene.children.length,0);
 }
});
