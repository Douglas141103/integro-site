import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {EggAdventure,WORLDS,NESTS,cleanSave} from '../integro-box/egg-src/egg-rules.js';
import {FLAME,flameGapState,flameGaps} from '../integro-box/egg-src/egg-flame-rules.js';
import {intgemDatabase} from './intgem-db-fixture.mjs';

test('new dragon appends to existing saves and warns before opening every track',()=>{
 assert.equal(WORLDS.length,22);assert.equal(WORLDS[20].kind,'icePhoenix');
 assert.equal(WORLDS[21].name,'Pedras Flamejantes');
 const g=new EggAdventure();Object.assign(g.player,NESTS[21]);assert(g.steal(0));
 assert.equal(g.flame.castAt,0);assert(g.drainEvents().some(e=>e.text.includes('Dragão Quente')));
 for(let world=0;world<22;world++)for(let slot=0;slot<2;slot++){
  const delay=(21-world)*.16+slot*.4;
  assert(flameGapState(delay+2,0,world,slot).warning);
  assert(!flameGapState(delay+2,0,world,slot).open);
  assert(flameGapState(delay+4,0,world,slot).open);
  assert(flameGapState(delay+8,0,world,slot).amount<1e-10);
 }
 const saved=cleanSave({...g.save,creatures:[{id:1,uid:'old',world:20,rarity:'common',mutation:'normal'},{id:2,uid:'new',world:21,rarity:'rare',mutation:'gold'}]});
 assert.deepEqual(saved.creatures.map(c=>c.world),[20,21]);
});
test('open fissures catch even a fast runner, lose the carried egg and return to safety',()=>{
 const g=new EggAdventure();Object.assign(g.player,NESTS[21]);g.steal(0);g.time=4;
 Object.assign(g.player,{x:0,z:flameGaps(21)[0]+4,y:0});g.movePlayer(0,-8);
 assert(g.falling>0);assert.equal(g.carrying,null);assert.equal(g.carriedEgg,null);assert.equal(g.droppedEgg,null);
 assert(Number.isFinite(g.nestEggs[21][0].availableAt));assert.equal(g.save.caught,1);
 assert.equal(g.jump(),false);for(let i=0;i<14;i++)g.update(.05);
 assert.deepEqual(g.player,{x:0,z:15,y:0,vy:0});assert(g.inBase());
});
test('jumping clears a fissure; base, flight and races remain safe',()=>{
 for(const mode of ['jump','flight','race','base']){
  const g=new EggAdventure();g.flame={castAt:0,nextAt:16};g.time=4;Object.assign(g.player,{x:0,z:flameGaps(21)[0],y:mode==='jump'?1:0});
  if(mode==='flight')g.jetFlight={id:'test',remaining:20};if(mode==='race')g.raceMode=true;if(mode==='base')g.player.z=15;
  assert.equal(g.checkFlameFall(),false,mode);
 }
});
test('server accepts track 22 eggs and reports 22 worlds without changing earlier saves',async()=>{
 const {db,run}=await intgemDatabase();try{
  for(const file of ['20261020233803_egg_room_traps.sql','20261020235725_egg_jetpack.sql','20261021001638_egg_welcome_gift.sql','20261021014434_egg_income_tax_luxury.sql','20261023004052_egg_winter_2026.sql','20261103195438_egg_flaming_stones.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  assert.equal((await run(1,"select public.box_egg('capabilities') r")).worlds,22);
  const g=new EggAdventure();g.save.eggs=[{id:1,world:21,rarity:'rare',mutation:'normal',remaining:100}];
  const result=await run(1,"select public.box_egg('save',p_data=>$1,p_revision=>0) r",[g.save]);assert.equal(result.revision,1);
  const loaded=await run(1,"select public.box_egg('load') r");assert.equal(loaded.save.eggs[0].world,21);
 }finally{await db.close();}
});
