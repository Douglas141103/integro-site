import test from 'node:test';import assert from 'node:assert/strict';
import {EggAdventure,cleanSave,corralCapacity,corralFloors,corralSlot,CORRAL,DECORATIONS,FLOOR_HEIGHT,CORRAL_FLOOR_PRICES,CORRAL_ELEVATOR} from '../integro-box/egg-src/egg-rules.js';
const wait=(g,seconds=1)=>{for(let i=0;i<seconds*50;i++)g.update(.02);};
function walk(g,x,z){for(let i=0;i<300;i++){const dx=x-g.player.x,dz=z-g.player.z,len=Math.hypot(dx,dz);if(len<.045)return;const speed=Math.min(g.speed(),7);g.update(Math.min(.02,len/speed),{x:dx/len,z:dz/len});}assert.fail('walk did not reach target');}
test('all five floors buy in sequence once, respect spendable balance and preserve 119 residents on reload',()=>{
 const g=new EggAdventure({version:4,coins:4000000,upgrades:{pen:10}});let paid=0;assert(!g.buyCorralFloor(3));
 for(let n=2;n<=5;n++){assert(g.buyCorralFloor(n));paid+=CORRAL_FLOOR_PRICES[n];assert(!g.buyCorralFloor(n));assert.equal(g.save.coins,4000000-paid);assert.equal(corralFloors(g.save),n);}
 assert(!g.buyCorralFloor(6));assert.equal(g.capacity(),119);
 g.save.creatures=Array.from({length:100},(_,i)=>({uid:'pet-'+i,world:0,rarity:'common',mutation:'normal'}));g.save.eggs=Array.from({length:19},()=>({world:1,rarity:'rare',mutation:'normal',remaining:200}));
 const restored=cleanSave(g.save);assert.equal(restored.creatures.length,100);assert.equal(restored.eggs.length,19);assert.equal(corralCapacity(restored),119);
 const slots=Array.from({length:119},(_,i)=>corralSlot(i,restored));assert.equal(new Set(slots.map(p=>[p.x,p.y,p.z].join(','))).size,119);assert.equal(slots.at(-1).floor,5);
 const legacy=cleanSave({version:4,secondFloor:true});assert.equal(legacy.corralFloors,2);assert.equal(corralFloors({corralFloors:Infinity}),1);
 const poor=new EggAdventure({version:4,coins:249999});assert(!poor.buyCorralFloor());poor.save.coins=250000;poor.raceMode=true;assert(!poor.buyCorralFloor());
});
test('elevator reaches all owned floors, releases onto a supported platform and preserves residents and coins',()=>{
 const g=new EggAdventure({version:4,coins:123,secondFloor:true,corralFloors:5});
 for(const floor of [2,3,4,5,3,1]){
  Object.assign(g.player,{x:CORRAL.x+CORRAL_ELEVATOR.x,z:CORRAL.z,vy:0});assert(g.elevatorFloor());assert(g.rideElevator(floor));
  assert(!g.rideElevator(1));assert(!g.jump());assert(!g.requestJump());assert(!g.startJetFlight('during-ride'));assert(!g.push({x:1,z:0}));
  const oldY=g.player.y;g.update(.05,{x:1,z:1,sprint:true});assert(Math.abs(g.player.y-oldY)<=CORRAL_ELEVATOR.speed*.05+.001);assert.equal(g.player.x,CORRAL.x+CORRAL_ELEVATOR.x);
  wait(g,4);assert.equal(g.elevatorRide,null);assert.equal(g.player.y,(floor-1)*FLOOR_HEIGHT);assert.equal(g.player.y,g.floorSupport());assert.equal(g.elevatorFloor(),0);assert.equal(g.save.coins,123);
  walk(g,CORRAL.x,CORRAL.z);wait(g);assert.equal(g.player.y,(floor-1)*FLOOR_HEIGHT);assert(g.jump());wait(g,2);assert.equal(g.player.y,(floor-1)*FLOOR_HEIGHT);
 }
});
test('elevator rejects distant, airborne, unbuilt and race destinations and follows the visited corral',()=>{
 const g=new EggAdventure({version:4,corralFloors:5});assert(!g.rideElevator(2));Object.assign(g.player,{x:CORRAL.x+CORRAL_ELEVATOR.x,z:CORRAL.z});
 for(const invalid of [0,6,1,1.5,'2',Infinity,NaN])assert(!g.rideElevator(invalid));
 g.player.y=.5;assert(!g.rideElevator(2));g.player.y=0;g.raceMode=true;assert(!g.rideElevator(2));g.raceMode=false;
 g.corralView={corralFloors:2};assert(!g.rideElevator(3));assert(g.rideElevator(2));wait(g,2);assert.equal(g.player.y,FLOOR_HEIGHT);
 Object.assign(g.player,{x:CORRAL.x+CORRAL_ELEVATOR.x,z:CORRAL.z});assert(g.rideElevator(1));wait(g,2);assert.equal(g.player.y,0);
 g.corralView={corralFloors:1};assert(!g.rideElevator(2));assert.equal(g.elevatorFloor(),0);
});
test('does not teleport through upper slabs; falling and jetpack landing use the actual platform height',()=>{
 const g=new EggAdventure({version:4,corralFloors:5});Object.assign(g.player,{x:CORRAL.x,z:CORRAL.z});wait(g);assert.equal(g.player.y,0);
 Object.assign(g.player,{x:CORRAL.x,z:CORRAL.z,y:FLOOR_HEIGHT*4,vy:0});assert(g.startJetFlight('flight'));g.update(.05,{});assert(g.player.y>FLOOR_HEIGHT*4);g.landJet();wait(g,2);assert.equal(g.jetFlight,null);assert.equal(g.player.y,FLOOR_HEIGHT*4);
 Object.assign(g.player,{x:CORRAL.x-3.4,z:CORRAL.z,y:FLOOR_HEIGHT*4,vy:0});walk(g,-9,CORRAL.z);wait(g,3);assert.equal(g.player.y,0);
 g.corralView={corralFloors:2};assert.equal(g.floorSupport({x:CORRAL.x,z:CORRAL.z,y:20}),FLOOR_HEIGHT);
});
test('all seven architectural designs can be bought once and re-equipped free with nests and floors unchanged',()=>{
 const g=new EggAdventure({version:4,coins:1000000,corralFloors:5,secondFloor:true});assert.equal(Object.keys(DECORATIONS).length,7);
 for(const [id,d] of Object.entries(DECORATIONS)){const before=g.save.coins,owned=g.save.decorations.includes(id);assert(g.buy(id));assert.equal(g.save.coins,before-(owned?0:d.price));assert(g.buy(id));assert.equal(g.save.coins,before-(owned?0:d.price));const reload=cleanSave(g.save);assert(reload.decorations.includes(id));assert.equal(reload.decoration,id);assert.equal(reload.corralFloors,5);}
});
