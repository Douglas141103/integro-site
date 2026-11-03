import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {EggAdventure,NESTS,CORRAL,WORLDS} from '../integro-box/egg-src/egg-rules.js';
import {flameGaps} from '../integro-box/egg-src/egg-flame-rules.js';
import {intgemDatabase} from './intgem-db-fixture.mjs';

const inactive=(g)=>{assert.equal(g.flame.castAt,-Infinity);assert.equal(g.rock.castAt,-Infinity);assert.equal(g.winter.startsAt,Infinity);};
test('walking to any nest without taking its egg does not activate powers or track traps',()=>{
 for(let world=0;world<WORLDS.length;world++){
  const g=new EggAdventure();Object.assign(g.player,NESTS[world]);
  for(let i=0;i<900;i++)g.update(.05);
  inactive(g);assert.equal(g.hazard().active,false);assert.equal(g.hazard().warning,false);
  assert.equal(g.flameRequest,undefined);assert.equal(g.rockRequest,null);
 }
});
test('pickup activates the matching power; reaching safety turns it off before deposit, including a full corral',()=>{
 for(const world of [0,20,21,22])for(const full of [false,true]){
  const g=new EggAdventure();g.updateGuardians=()=>{};Object.assign(g.player,NESTS[world]);assert(g.steal(0));assert.equal(g.activeEggPower,world);
  if(world===20)assert(Number.isFinite(g.winter.startsAt));if(world===21)assert.equal(g.flame.castAt,0);if(world===22)assert.equal(g.rock.castAt,0);
  if(full)g.save.creatures=Array.from({length:g.capacity()},(_,i)=>({id:i,world:0,rarity:'common',mutation:'normal'}));
  Object.assign(g.player,CORRAL);g.update(.05);inactive(g);assert.equal(g.activeEggPower,null);assert.equal(g.carrying,world);
  if(!full)assert.equal(g.interact(),'deposit');else assert.equal(g.interact(),false);
  Object.assign(g.player,NESTS[world]);g.update(.05);inactive(g);
 }
});
test('capture and dropping close the power; retrieving a dropped egg starts a fresh run',()=>{
 for(const world of [20,21,22]){
  const g=new EggAdventure();Object.assign(g.player,NESTS[world]);g.steal(0);g.save.supplies.shield=1;g.catchEgg(world);assert.equal(g.activeEggPower,world);
  g.catchEgg(world);inactive(g);assert.equal(g.activeEggPower,null);
  g.time+=6;Object.assign(g.player,NESTS[world]);assert(g.steal(0));g.dropCarriedEgg();inactive(g);g.time+=2;assert.equal(g.interact(),'pickup');assert.equal(g.activeEggPower,world);
 }
});
test('falling in lava ends the stolen egg power immediately',()=>{
 const g=new EggAdventure();Object.assign(g.player,NESTS[21]);g.steal(0);g.time=4;Object.assign(g.player,{x:0,z:flameGaps(21)[0],y:0});assert(g.checkFlameFall());inactive(g);assert.equal(g.activeEggPower,null);assert.equal(g.carrying,null);
});
test('return to corral closes shared mountains and lava locally and sends one matching close request',()=>{
 for(const [world,key,apply]of [[21,'flame','applyRoomFlame'],[22,'rock','applyRoomRock']]){
  let now=1000;const owner=new EggAdventure(null,{now:()=>now}),peer=new EggAdventure(null,{now:()=>now});owner.setFlameRoom(true);peer.setFlameRoom(true);owner.updateGuardians=()=>{};
  Object.assign(owner.player,NESTS[world]);owner.steal(0);const castId=owner[key+'Request'].id;
  const event={id:castId,owner:1,castAt:1000000,closed:false};owner[apply](event,1005000);peer[apply](event,1005000);
  // A spectator arriving at the base must not cancel somebody else's effect.
  peer.update(.05);assert.notEqual(peer[key+'Request']?.action,'close');
  Object.assign(owner.player,CORRAL);owner.update(.05);
  const close={...owner[key+'Request']};assert.equal(close.action,'close');assert.equal(close.castId,castId);
  assert.equal(owner.flameGap(21,0).open,false);assert.equal(owner.mountain(22,0).visible,false);
  for(let i=0;i<50;i++)owner.update(.05);assert.deepEqual(owner[key+'Request'],close);
  peer[apply]({...event,closed:true},1006000);assert.equal(peer.flameGap(21,0).open,false);assert.equal(peer.mountain(22,0).visible,false);
 }
});
test('server rejects entry-only casts and ends only the returning owner effect for all members without a close packet',async()=>{
 const {db,call}=await intgemDatabase();try{
  for(const file of ['20261020233803_egg_room_traps.sql','20261020235725_egg_jetpack.sql','20261021001638_egg_welcome_gift.sql','20261021014434_egg_income_tax_luxury.sql','20261023004052_egg_winter_2026.sql','20261103195438_egg_flaming_stones.sql','20261103201639_egg_shared_flame.sql','20261103204608_egg_grande_pedregulho.sql','20261103233842_egg_power_pickup_lifecycle.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});
  const sync=async(n,z,extra={})=>{await db.exec("update private.box_limits set last_sync='-infinity'");return call(n,'sync',{p_room:a.id,p_state:{x:0,y:0,z,yaw:0,zone:'world',...extra}});};
  for(const [key,z]of [['flame',-1033],['rock',-1081]]){
   assert.equal((await sync(1,z,{[key]:{id:key+'walk',action:'cast'}}))[key],null);
   const opened=await sync(1,z,{[key]:{id:key+'grab',action:'cast'},[key+'Chase']:true});assert.equal(opened[key].closed,false);
   const spectator=await sync(2,15);assert.deepEqual(spectator[key],opened[key]);
   const home=await sync(1,15,{[key+'Chase']:true});assert.equal(home[key].closed,true);assert.equal(home.revision,opened.revision+1);
   assert.equal((await sync(2,15))[key].closed,true);assert.equal((await sync(1,15)).revision,home.revision);
   const retry=await sync(1,z,{[key]:{id:key+'grab2',action:'cast'},[key+'Chase']:true});assert.equal(retry[key].closed,false);assert.equal(retry[key].id,key+'grab2');
   const closed=await sync(1,z,{[key]:{id:key+'caught',action:'close',castId:key+'grab2'}});assert.equal(closed[key].closed,true);
  }
 }finally{await db.close();}
});
