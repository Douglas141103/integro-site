import test from 'node:test';
import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,CORRAL,cleanSave,constrainToCorridor} from '../integro-box/egg-src/egg-rules.js';
import {HEAVEN,inHeaven,heavenPosition,HEAVEN_OBSTACLES} from '../integro-box/egg-src/egg-heaven.js';
const at=(g,p)=>Object.assign(g.player,{x:0,y:0,vy:0,...p});
const walk=(g,target,done)=>{for(let i=0;i<5000&&!done();i++){const dx=target.x-g.player.x,dz=target.z-g.player.z,d=Math.hypot(dx,dz);g.update(Math.min(1/60,d/Math.max(1,g.speed())),{x:dx/d||0,z:dz/d||0});}assert(done(),'destination reached');};

test('heaven is a six-track-length bonus behind an explicit grounded gate, isolated from ordinary movement and races',()=>{
 const g=new EggAdventure();assert.equal(WORLDS.length,24);assert.equal(HEAVEN.length,6*48);assert.equal(HEAVEN.start-HEAVEN.end,HEAVEN.length);
 assert.equal(g.useHeavenDoor(),false);at(g,HEAVEN.gate);assert.equal(g.interaction().type,'heavenEnter');
 g.raceMode=true;assert.equal(g.useHeavenDoor(),false);g.raceMode=false;g.player.y=1;assert.equal(g.useHeavenDoor(),false);g.player.y=0;
 g.movePlayer(0,-100);assert(!g.inHeaven());at(g,HEAVEN.gate);assert.equal(g.interact(),'heavenEnter');assert(g.inHeaven());assert.equal(g.zone(),23);assert.equal(g.startJetFlight('flight'),false);
 g.movePlayer(0,100);assert(g.inHeaven());assert.equal(g.interaction().type,'heavenExit');assert.equal(g.interact(),'heavenExit');assert(!g.inHeaven());assert.equal(g.carrying,null);
});
test('complete bonus run retains the exact egg through the exit, stops its guardian at the gate and deposits once in the corral',()=>{
 const g=new EggAdventure();g.save.training=250;at(g,HEAVEN.gate);g.interact();
 walk(g,NESTS[23],()=>g.interaction().type==='nest');assert.equal(g.interaction().world,23);assert(g.steal(0));const egg={...g.carriedEgg};
 walk(g,HEAVEN.exit,()=>!g.inHeaven());assert.deepEqual(g.carriedEgg,egg);assert.equal(g.carrying,23);assert.equal(g.save.eggs.length,0);
 for(let i=0;i<80;i++)g.update(.05);assert.equal(g.carrying,23);assert(inHeaven(g.guardians[23]));
 // Return along the newly widened shoulder, then enter the corral normally.
 walk(g,{x:10,z:g.player.z},()=>Math.abs(g.player.x-10)<.2);
 walk(g,{x:10,z:10},()=>g.player.z>4);
 walk(g,CORRAL,()=>g.interaction().type==='deposit');assert.equal(g.interact(),'deposit');assert.equal(g.carrying,null);assert.equal(g.save.delivered,1);assert.equal(g.save.eggs.length,1);assert.equal(g.save.eggs[0].world,23);assert.equal(g.save.eggs[0].rarity,egg.rarity);assert.equal(g.save.eggs[0].mutation,egg.mutation);
 g.interact();assert.equal(g.save.eggs.length,1);const saved=cleanSave(JSON.parse(JSON.stringify(g.save)));assert.equal(saved.eggs[0].world,23);
 g.save.eggs[0].remaining=.01;g.update(.02);assert.equal(g.save.creatures[0].world,23);assert(g.sell(g.save.creatures[0].id));assert(g.save.coins>0);
});
test('ceiling jumps, barriers, capture, dropped eggs and portal escape follow the same collision space',()=>{
 const g=new EggAdventure();at(g,{x:0,z:HEAVEN.start-20});const before=heavenPosition(g.player);assert(g.jump());g.update(.05);assert(heavenPosition(g.player).y<before.y);
 const o=HEAVEN_OBSTACLES[0];at(g,{x:o.x,z:o.z+3});g.movePlayer(0,-6);assert(g.player.z>o.z);at(g,{x:o.x,z:o.z+3,y:1});g.movePlayer(0,-6);assert(g.player.z<o.z);
 at(g,NESTS[23]);assert(g.steal(1));assert(g.dropCarriedEgg());g.time+=2;assert.equal(g.interact(),'pickup');assert.equal(g.carrying,23);
 g.catchEgg(23);assert.equal(g.carrying,null);assert(!g.inHeaven());assert.equal(g.save.caught,1);
 at(g,NESTS[23]);g.steal(2);const guardian=g.guardians[23];at(g,HEAVEN.exit);Object.assign(guardian,g.player,{grace:0});g.update(.016);assert(!g.inHeaven());assert.equal(g.carrying,23,'reaching the exit wins before capture');
 for(const x of [-100,100]){const p=constrainToCorridor({x,y:0,z:HEAVEN.end-20});assert.equal(p.z,HEAVEN.end+.8);assert(Math.abs(p.x)<=13.85);}
});
