import {mock} from 'node:test';
mock.timers.enable({apis:['Date'],now:new Date('2026-10-28T21:32:00Z')});
import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,CORRAL} from '../integro-box/egg-src/egg-rules.js';
const advance=(g,seconds,input={})=>{for(let t=0;t<seconds;t+=.05)g.update(.05,input);};
test('five promotional eggs preserve their hidden reward through delivery, reload, hatching and sale',()=>{
 assert.equal(WORLDS.length,21);
 for(const [slot,value]of [800000,900000,1000000,2000000,3000000].entries()){
  let g=new EggAdventure();assert.equal(g.nestEggs[20].length,5);Object.assign(g.player,NESTS[20]);assert(g.steal(slot));assert.equal(g.saleValue(20,g.carriedEgg.rarity),value);
  assert(!g.drainEvents().some(e=>e.text.includes(value.toLocaleString('pt-BR'))),'pickup does not reveal the reward');
  Object.assign(g.player,CORRAL);assert.equal(g.interact(),'deposit');assert(g.drainEvents().some(e=>e.type==='deposit'&&e.text.includes(value.toLocaleString('pt-BR'))));
  g=new EggAdventure(JSON.parse(JSON.stringify(g.save)));advance(g,g.hatchRemaining(g.save.eggs[0])+.1);assert.equal(g.save.creatures[0].world,20);assert.equal(g.saleValue(20,g.save.creatures[0].rarity),value);
  const pending=Math.floor(g.save.creatures[0].incomeProgress||0),before=g.save.coins;assert(g.sell(g.save.creatures[0].id));assert.equal(g.save.coins-before,value+pending);
 }
});
test('entire winter track freezes after warning, loses exactly 70% speed, skates retain 75%, and momentum slips',()=>{
 const g=new EggAdventure();Object.assign(g.player,{x:0,z:-970});g.update(.05);assert.equal(g.winterSpeedFactor(),1);advance(g,1.6);assert.equal(g.winterSpeedFactor(),.3);
 for(const z of [-961,-984,-1006]){g.player.z=z;assert(g.winterFrozen());}g.player.z=-975;
 g.iceVelocity.z=100;g.update(.05,{z:1});assert(g.motionSpeed<=g.speed()*.3+1e-6);advance(g,1,{z:1});let z=g.player.z;g.update(.05,{});assert(g.player.z>z,'sliding continues after releasing the control');
 assert(g.activateSkates());assert.equal(g.winterSpeedFactor(),.75);advance(g,1,{z:1});assert(Math.abs(g.motionSpeed-g.speed()*.75)<.01);
 g.player.z=-959;assert.equal(g.winterSpeedFactor(),1);Object.assign(g.player,CORRAL);g.update(.05);assert.equal(g.skatesActive,false);
 g.player.z=-980;g.raceMode=true;assert.equal(g.winterSpeedFactor(),1);assert.equal(g.activateSkates(),false);
});
test('ice phoenix catches a flying carrier, while base remains safe and ordinary guardians stay grounded',()=>{
 for(const i of [0,20]){
  const g=new EggAdventure();Object.assign(g.player,NESTS[i]);assert(g.steal(0));g.activateSkates();g.startJetFlight('test-flight');g.player.y=8;Object.assign(g.guardians[i],{x:g.player.x,z:g.player.z,y:8,grace:0});g.update(.05);
  assert.equal(g.carrying,i===20?null:0);assert.equal(g.skatesActive,i!==20);assert.equal(!!g.jetFlight,i!==20);
 }
 const g=new EggAdventure();Object.assign(g.player,NESTS[20]);g.steal(4);Object.assign(g.player,CORRAL);Object.assign(g.guardians[20],CORRAL,{grace:0});advance(g,.2);assert.equal(g.carrying,20);assert.equal(g.guardians[20].state,'waiting');
});
