import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,cleanSave,NESTS,CORRAL,TREADMILLS,FUSION_MACHINE,TRAIN_SPEED_GAIN,corralSlot} from '../integro-box/egg-src/egg-rules.js';
const tick=(g,seconds)=>{for(let i=0;i<Math.ceil(seconds/.05);i++)g.update(Math.min(.05,seconds-i*.05));};
const pet=(uid,world=0)=>({uid,world,rarity:'common',mutation:'normal',winterReward:false});
test('paid treadmills charge exact Integros once and preserve unused active time across exits and saves',()=>{
 for(const id of ['normal','gold','galaxy']){
  const t=TREADMILLS[id],g=new EggAdventure({version:4,coins:100000});Object.assign(g.player,t);assert(g.startTraining(id));assert.equal(g.save.coins,100000-t.price);
  tick(g,1);assert(Math.abs(g.save.trainXP-t.rate)<.001||g.save.training>0);g.stopTraining();const remaining=g.save.trainingPasses[id];tick(g,5);assert.equal(g.save.trainingPasses[id],remaining);
  const resumed=new EggAdventure(g.save);Object.assign(resumed.player,t);assert(resumed.startTraining(id));assert.equal(resumed.save.coins,g.save.coins);if(t.price)assert(Math.abs(resumed.save.trainingPasses[id]-299)<.001);
 }
});
test('training improves speed, ends paid passes without auto-charging, and protects races and carried eggs',()=>{
 const g=new EggAdventure({version:4,coins:10000});Object.assign(g.player,TREADMILLS.galaxy);const old=g.speed();assert(g.startTraining('galaxy'));tick(g,1.1);assert.equal(g.save.training,1);assert(Math.abs(g.speed()-old-TRAIN_SPEED_GAIN)<1e-8);
 g.save.trainingPasses.galaxy=.04;tick(g,.05);assert.equal(g.mode,'run');assert.equal(g.save.trainingPasses.galaxy,0);assert.equal(g.save.coins,0);
 Object.assign(g.player,TREADMILLS.galaxy);assert.equal(g.startTraining('galaxy'),false);g.save.coins=10000;g.raceMode=true;assert.equal(g.startTraining('galaxy'),false);g.raceMode=false;g.carrying=0;assert.equal(g.startTraining('galaxy'),false);assert.equal(g.save.coins,10000);
});
test('training retains overflow, honors coach and stops at the level cap',()=>{
 const g=new EggAdventure({version:4,coins:10000,training:599,upgrades:{coach:4}});Object.assign(g.player,TREADMILLS.galaxy);g.startTraining('galaxy');g.save.trainXP=g.trainTarget()-.01;tick(g,.05);assert.equal(g.save.training,600);assert.equal(g.save.trainXP,0);assert.equal(g.mode,'run');
 const old=new EggAdventure({version:4,training:100,trainXP:79});assert(Math.abs(old.save.trainXP-old.trainTarget()/2)<.001);
});
test('upper corral costs 250000 once, keeps every animal and egg on reload and lays out two separate floors',()=>{
 const g=new EggAdventure({version:4,coins:249999});assert(!g.buySecondFloor());g.save.coins=250000;assert(g.buySecondFloor());assert.equal(g.capacity(),27);assert.equal(g.save.coins,0);assert(!g.buySecondFloor());
 g.save.creatures=Array.from({length:26},(_,i)=>pet('upper-'+i));g.save.eggs=[{world:0,rarity:'common',mutation:'normal',remaining:10}];const reloaded=new EggAdventure(g.save);assert.equal(reloaded.save.creatures.length,26);assert.equal(reloaded.save.eggs.length,1);assert.equal(reloaded.capacity(),27);
 assert.equal(corralSlot(2,g.save).floor,1);assert.equal(corralSlot(3,g.save).floor,2);assert(corralSlot(26,g.save).y>2);
});
test('full corral opens with an egg in hand, sells a resident and then accepts the carried egg',()=>{
 const g=new EggAdventure({version:4,creatures:[pet('a'),pet('b'),pet('c')]});Object.assign(g.player,NESTS[0]);assert(g.steal(0));Object.assign(g.player,CORRAL);assert.equal(g.interact(),'corral');assert(g.sell(g.save.creatures[0].id));assert.equal(g.carrying,0);assert.equal(g.interact(),'deposit');assert.equal(g.carrying,null);assert.equal(g.save.eggs.length,1);
});
test('fusion adds both base incomes plus 25%, consumes one donor and charge, preserves accrued fractions and survives reload',()=>{
 const g=new EggAdventure({version:4,coins:999,fusion:{owned:true,charges:10},companionId:'b',creatures:[{...pet('a'),incomeProgress:.4},{...pet('b',2),incomeProgress:.6}]});Object.assign(g.player,FUSION_MACHINE);
 const expected=g.incomeRate()*1.25,preview=g.fusionPreview('a','b');assert.equal(preview.after,expected);g.save.activeAbilities.boost={id:'incomeBoost',remaining:60};assert.equal(g.fusionPreview('a','b').after,expected);
 assert(g.fuse('a','b'));assert.equal(g.save.fusion.charges,9);assert.equal(g.save.coins,999);assert.equal(g.save.creatures.length,1);assert.equal(g.save.companionId,'a');assert.equal(g.save.creatures[0].incomeProgress,1);assert(Math.abs(g.incomeRate()-expected*2)<1e-9);
 const reloaded=new EggAdventure(g.save);assert(Math.abs(reloaded.incomeRate()-expected*2)<1e-9);assert.equal(reloaded.save.fusion.charges,9);assert(!g.fuse('a','b'));assert(!g.fuse('a','a'));assert.equal(g.save.fusion.charges,9);
});
test('fusion requires an owned machine, charges and proximity; malformed progression cannot create invalid state',()=>{
 const g=new EggAdventure({version:4,creatures:[pet('a'),pet('b')]});Object.assign(g.player,FUSION_MACHINE);assert(!g.fuse('a','b'));g.save.fusion={owned:true,charges:1};g.player.x=0;assert(!g.fuse('a','b'));Object.assign(g.player,FUSION_MACHINE);g.raceMode=true;assert(!g.fuse('a','b'));
 const s=cleanSave({version:4,secondFloor:'true',fusion:{owned:false,charges:9000},trainingPasses:{gold:Infinity,galaxy:-1},creatures:[{...pet('invalid'),fusionBonus:Infinity,fusionLevel:-1}]});assert.equal(s.secondFloor,false);assert.equal(s.fusion.charges,0);assert.equal(s.trainingPasses.gold,0);assert.equal(s.creatures[0].fusionBonus,0);
});
