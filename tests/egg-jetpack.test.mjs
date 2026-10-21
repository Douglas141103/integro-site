import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,CORRAL,WORLDS} from '../integro-box/egg-src/egg-rules.js';
test('a paid launch flies over hazards carrying its egg, returns from the last track and lands safely',()=>{
 const g=new EggAdventure();g.player.z=-959;g.player.x=3;g.carrying=19;g.carriedEgg={world:19,slot:0,rarity:'secret',mutation:'cosmic'};g.nestEggs[19][0].availableAt=Infinity;
 assert.equal(g.startJetFlight('flight',45),true);assert.equal(g.startJetFlight('again'),false);assert.equal(g.interaction().type,'walk');assert.equal(g.push({x:1,z:0}),false);assert.equal(g.requestJump(),false);
 for(let i=0;i<40;i++)g.update(.05,{x:1,z:-1});assert.equal(g.player.y,8);assert.equal(g.carrying,19);assert(g.player.z>=-WORLDS.length*48+.8);
 g.returnJet();for(let i=0;i<650&&g.jetFlight;i++)g.update(.05,{});
 assert.equal(g.jetFlight,null);assert.equal(g.player.y,0);assert.equal(g.player.z,CORRAL.z);assert.equal(g.player.x,CORRAL.x);assert.equal(g.carrying,19);assert.equal(g.interact(),'deposit');assert.equal(g.save.eggs[0].rarity,'secret');assert.equal(g.save.eggs[0].mutation,'cosmic');
});
test('low fuel returns automatically, manual landing consumes no extra launch and races block flights',()=>{
 const g=new EggAdventure();g.player.z=-400;g.startJetFlight('low',1);g.update(.05,{});assert.equal(g.jetFlight.returning,true);for(let i=0;i<300&&g.jetFlight;i++)g.update(.05,{});assert.equal(g.player.z,14);assert.equal(g.jetFlight,null);
 g.startJetFlight('manual');for(let i=0;i<30;i++)g.update(.05,{});g.landJet();for(let i=0;i<50;i++)g.update(.05,{});assert.equal(g.jetFlight,null);assert.equal(g.drainEvents().filter(e=>e.type==='jetland').length,2);
 g.raceMode=true;assert.equal(g.startJetFlight('race'),false);g.raceMode=false;g.mode='train';assert.equal(g.startJetFlight('train'),false);
});
