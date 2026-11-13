import test from 'node:test';import assert from 'node:assert/strict';
import {EggAdventure,WORLDS,NESTS,CORRAL,cleanSave} from '../integro-box/egg-src/egg-rules.js';
import {SUBSOIL,SUBSOIL_LAVA,inSubsoil} from '../integro-box/egg-src/egg-subsoil.js';
const at=(g,p)=>Object.assign(g.player,{x:0,y:0,vy:0,...p});
function walk(g,target,done=()=>Math.hypot(g.player.x-target.x,g.player.z-target.z)<.05){for(let i=0;i<10000&&!done();i++){const x=target.x-g.player.x,z=target.z-g.player.z,d=Math.hypot(x,z);g.update(Math.min(1/60,d/g.speed()),{x:x/d||0,z:z/d||0});}assert(done(),'destination reached');}
test('Magma guardian protects three collectible eggs; a complete walk escapes and delivers the same egg once',()=>{
 const g=new EggAdventure();g.save.training=600;assert.equal(WORLDS[24].creature,'Guardião de Magma');assert.deepEqual(NESTS[24],SUBSOIL.nest);assert.equal(g.nestEggs[24].length,3);
 at(g,SUBSOIL.gate);g.interact();
 for(const h of SUBSOIL_LAVA.filter(h=>h.lake)){const x=-Math.sign(h.x)*7;walk(g,{x,z:h.z+9});walk(g,{x,z:h.z-9});assert(g.inSubsoil());}
 walk(g,SUBSOIL.nest);assert.equal(g.interaction().type,'nest');assert.equal(g.interaction().world,24);assert(g.steal(1));const egg={...g.carriedEgg};assert.equal(g.guardians[24].state,'chase');
 walk(g,SUBSOIL.finish,()=>!g.inSubsoil());assert.equal(g.carrying,24);assert.deepEqual(g.carriedEgg,egg);assert(g.emerging);while(g.emerging)g.update(.05);
 assert(inSubsoil(g.guardians[24]));walk(g,{x:-9,z:5});walk(g,CORRAL,()=>g.interaction().type==='deposit');assert.equal(g.interact(),'deposit');g.interact();assert.equal(g.save.eggs.length,1);assert.equal(g.save.eggs[0].world,24);assert.equal(g.save.eggs[0].rarity,egg.rarity);assert.equal(g.save.eggs[0].mutation,egg.mutation);assert.equal(g.save.delivered,1);
 const reloaded=new EggAdventure(cleanSave(JSON.parse(JSON.stringify(g.save))));assert.equal(reloaded.save.eggs[0].world,24);reloaded.save.eggs[0].remaining=.01;reloaded.update(.02);assert.equal(reloaded.save.creatures[0].world,24);assert(reloaded.sell(reloaded.save.creatures[0].id));assert(reloaded.save.coins>0);
});
test('Magma pursues, captures and returns home; lava loses the egg while doors preserve it',()=>{
 const g=new EggAdventure();at(g,SUBSOIL.nest);g.steal(0);const guardian=g.guardians[24];guardian.grace=0;at(g,{x:-7,z:-1824});const before={...guardian};g.update(.02);assert(guardian.x!==before.x||guardian.z!==before.z);assert.equal(guardian.state,'chase');Object.assign(guardian,g.player,{grace:0});g.update(.02);assert.equal(g.carrying,null);assert.equal(g.save.caught,1);assert(!g.inSubsoil());
 at(g,SUBSOIL.nest);assert(g.steal(1));at(g,SUBSOIL_LAVA[0]);g.update(.02);assert.equal(g.carrying,null);assert.equal(g.carriedEgg,null);assert(g.emerging);assert(Number.isFinite(g.nestEggs[24][1].availableAt));assert.equal(g.save.eggs.length,0);
 while(g.emerging)g.update(.05);at(g,SUBSOIL.nest);g.steal(2);const egg={...g.carriedEgg};assert(g.dropCarriedEgg());g.time+=2;assert.equal(g.interact(),'pickup');assert.deepEqual(g.carriedEgg,egg);
 at(g,SUBSOIL.exit);Object.assign(guardian,g.player,{grace:0});g.update(.016);assert(!g.inSubsoil());assert.deepEqual(g.carriedEgg,egg,'door wins before capture');while(g.emerging)g.update(.05);g.update(.05);assert.equal(g.carrying,24);assert(inSubsoil(guardian));
});
