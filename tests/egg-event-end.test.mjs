import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,CORRAL} from '../integro-box/egg-src/egg-rules.js';
import {WINTER_END_MS,winterCountdown} from '../integro-box/egg-src/egg-winter-rules.js';
test('fixed deadline closes an active game, resets special nests, and survives reload',()=>{
 let now=WINTER_END_MS-21600000;const g=new EggAdventure(null,{now:()=>now});
 assert.equal(winterCountdown(now),'06:00:00');assert.equal(winterCountdown(WINTER_END_MS-1),'00:00:01');assert.equal(winterCountdown(WINTER_END_MS+1000),'00:00:00');
 assert.equal(g.nestEggs[20].length,5);Object.assign(g.player,NESTS[20]);assert(g.steal(4));
 now=WINTER_END_MS;assert(g.syncEvent());assert.equal(g.syncEvent(),false);assert.equal(g.nestEggs[20].length,3);assert.equal(g.carriedEgg.winterReward,false);assert.equal(g.carriedEgg.slot,1);
 Object.assign(g.player,CORRAL);assert.equal(g.interact(),'deposit');assert.equal(g.save.eggs[0].winterReward,false);assert.equal(g.saleValue(20),75000);
 const again=new EggAdventure(g.save,{now:()=>now+2000});assert.equal(again.nestEggs.length,21);assert.equal(WORLDS[20].creature,'Fênix Gelada');assert.equal(again.nestEggs[20].length,3);assert.equal(again.eventActive,false);
 const rarities=new Set(),mutations=new Set();for(let i=0;i<3000;i++){const e=again.rollEgg(20,0);rarities.add(e.rarity);mutations.add(e.mutation);}
 assert.equal(rarities.size,5);assert.equal(mutations.size,4);
});
test('already deposited event rewards retain value after deadline, hatching, save and sale',()=>{
 let now=WINTER_END_MS-1000;let g=new EggAdventure(null,{now:()=>now});Object.assign(g.player,NESTS[20]);g.steal(4);Object.assign(g.player,CORRAL);g.interact();
 assert.equal(g.save.eggs[0].winterReward,true);now=WINTER_END_MS+1;g.syncEvent();g=new EggAdventure(g.save,{now:()=>now});g.save.eggs[0].remaining=.01;g.update(.05);
 const pet=g.save.creatures[0];assert.equal(pet.winterReward,true);assert.equal(g.saleValue(20,pet.rarity,pet.mutation,pet.winterReward),3000000);
 const legacy={...g.save};delete legacy.eventVersion;delete legacy.creatures[0].winterReward;g=new EggAdventure(legacy,{now:()=>now});assert.equal(g.save.creatures[0].winterReward,true);
 assert(g.sell(g.save.creatures[0].id));assert(g.save.coins>=3000000);
});
test('a dropped event egg becomes ordinary at the deadline without stale slot references',()=>{
 let now=WINTER_END_MS-10;const g=new EggAdventure(null,{now:()=>now});Object.assign(g.player,NESTS[20]);g.steal(4);g.dropCarriedEgg();now=WINTER_END_MS;g.syncEvent();assert.equal(g.droppedEgg.winterReward,false);g.clearDroppedEgg();assert.equal(g.droppedEgg,null);
});
