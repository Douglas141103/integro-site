import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {EggAdventure,WORLDS,NESTS,CORRAL,VEHICLES,ACCESSORIES,cleanSave} from '../integro-box/egg-src/egg-rules.js';
import {boxDatabase,uid} from './box-db-fixture.mjs';
const advance=(g,seconds,input={})=>{for(let i=0;i<Math.round(seconds/.02);i++)g.update(.02,input);};
test('all six added tracks have unique guardians, eggs, progression and permanent collection',()=>{
 assert.equal(WORLDS.length,20);assert.equal(WORLDS[19].name,'Estação Integro');assert.equal(new Set(WORLDS.map(w=>w.kind)).size,20);assert.equal(Object.keys(ACCESSORIES).length,64);
 for(let i=14;i<20;i++){
  const g=new EggAdventure();assert.equal(g.nestEggs[i].length,3);assert(g.recommendedTraining(i)>g.recommendedTraining(i-1));assert(g.recommendedTraining(i)<=600);
  Object.assign(g.player,NESTS[i]);assert.equal(g.zone(),i);assert(g.steal(0));Object.assign(g.player,CORRAL);assert.equal(g.interact(),'deposit');advance(g,8.1);
  const restored=new EggAdventure(g.save);assert.equal(restored.save.creatures[0].world,i);assert(restored.save.seen[i]);assert(restored.save.album.some(k=>k.startsWith(i+':')));
 }
 const end=new EggAdventure();end.player.z=-958;advance(end,1,{z:-1});assert.equal(end.zone(),19);assert(end.player.z>=-959.2);
});
test('eight modest speed upgrades are bought once, equipped at base and persist without unlocking unowned items',()=>{
 assert.equal(Object.keys(VEHICLES).length,8);
 for(const [id,v]of Object.entries(VEHICLES)){
  const g=new EggAdventure(),base=g.speed();g.save.coins=v.price;assert(g.buy(id));assert.equal(g.save.coins,0);assert.equal(g.save.vehicle,id);assert.equal(g.buy(id),false);assert.equal(g.speed(),base*(1+v.bonus));assert(v.bonus>=.05&&v.bonus<=.12);
  const restored=new EggAdventure(g.save);assert.equal(restored.save.vehicle,id);assert(restored.equipVehicle(id));assert.equal(restored.speed(),base);assert(restored.equipVehicle(id));restored.player.z=-100;assert.equal(restored.equipVehicle(id),false);restored.raceMode=true;assert.equal(restored.speed(),22);
 }
 assert.equal(cleanSave({version:4,vehicles:['unknown'],vehicle:'skateIntegro'}).vehicle,null);assert.deepEqual(cleanSave({version:4,coins:740,vehicles:['skateBreeze','skateBreeze']}).vehicles,['skateBreeze']);assert.equal(cleanSave({version:4,coins:740}).coins,740);
});
test('jump works while running or sprinting on foot and with both vehicles without double takeoff',()=>{
 for(const vehicle of [null,'skateBreeze','scooterIntegro'])for(const sprint of[false,true]){
  const g=new EggAdventure();if(vehicle){g.save.vehicles=[vehicle];g.save.vehicle=vehicle;}advance(g,.12,{z:-1,sprint});const z=g.player.z;assert(g.requestJump());const vy=g.player.vy;assert.equal(g.jump(),false);assert.equal(g.player.vy,vy);advance(g,.2,{z:-1,sprint});assert(g.player.z<z-1);assert(g.player.y>.5);advance(g,1.5,{z:-1,sprint});assert.equal(g.player.y,0);
  g.player.y=.03;g.player.vy=-2;assert.equal(g.requestJump(),false);advance(g,.06,{z:-1,sprint});assert(g.player.vy>0,'landing buffer preserves a slightly early tap');
 }
});
test('migration accepts all 20 worlds and vehicles, sanitizes room state, retains auth and completes a station race',async()=>{
 const{db,call}=await boxDatabase();try{
  for(const file of ['20261013210000_box_egg_expansion.sql','20261014220000_box_egg_storm.sql','20261014230000_box_egg_time.sql','20261016170000_box_egg_twenty.sql','20261016170000_box_egg_twenty.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  const egg=(n,action,args={})=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);return(await tx.query('select public.box_egg($1,$2,$3,$4,$5,$6,$7,$8,$9) r',[action,args.rev??-1,args.save??null,args.room??null,null,null,null,null,args.world??0])).rows[0].r;});
  assert.deepEqual(await egg(1,'capabilities'),{worlds:20,accessories:64,abilities:8,vehicles:8});await assert.rejects(egg(0,'capabilities'));await assert.rejects(egg(8,'save'));
  const save=new EggAdventure().save;save.upgrades.pen=10;save.vehicles=Object.keys(VEHICLES);save.vehicle='scooterIntegro';save.creatures=WORLDS.map((_,i)=>({id:i+1,uid:'expanded-'+i,world:i,rarity:'common',mutation:'normal'}));save.eggs=[{id:30,world:19,rarity:'secret',mutation:'cosmic',remaining:5}];
  assert.equal((await egg(1,'save',{rev:0,save})).revision,1);assert.deepEqual((await egg(1,'load')).save,save);
  for(const invalid of[{...save,vehicle:'hacked'},{...save,vehicles:[],vehicle:'skateBreeze'},{...save,vehicles:'skateBreeze'},{...save,eggs:[{world:20,rarity:'common',mutation:'normal'}]},{...save,creatures:[{uid:'bad',world:20,rarity:'common',mutation:'normal'}]}])assert.equal((await egg(1,'save',{rev:1,save:invalid})).error,'invalid_save');
  const room=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:room.code});for(const n of[1,2])await call(n,'sync',{p_room:room.id,p_state:{x:0,y:0,z:15,yaw:0,zone:'world',vehicle:n===1?'scooterIntegro':'hacked'}});
  const members=(await db.query('select slot,state from private.box_members order by slot')).rows;assert.equal(members[0].state.vehicle,'scooterIntegro');assert.equal(members[1].state.vehicle,'');
  assert.equal((await egg(1,'race_start',{room:room.id,world:20})).error,'invalid_world');assert.equal((await egg(1,'race_start',{room:room.id,world:19})).race.world,19);
  await db.exec("update private.box_limits set last_sync='-infinity';update private.box_egg_races set starts_at=now()-interval '48 seconds'");
  assert.equal((await call(1,'sync',{p_room:room.id,p_state:{x:0,y:0,z:NESTS[19].z,yaw:0,zone:'world',vehicle:'scooterIntegro'}})).error,undefined);assert.equal((await egg(1,'race_tick',{room:room.id})).race.results['1'].checkpoint,true);
  assert.equal((await call(3,'sync',{p_room:room.id,p_state:{x:0,y:0,z:-940,yaw:0,zone:'world'}})).error,'not_member');
  await db.exec("update private.box_limits set last_sync='-infinity';update private.box_egg_races set starts_at=now()-interval '95 seconds'");await call(1,'sync',{p_room:room.id,p_state:{x:0,y:0,z:15,yaw:0,zone:'world'}});assert((await egg(1,'race_tick',{room:room.id})).race.results['1'].finished>=95);
 }finally{await db.close();}
});
test('the standalone migration also upgrades the original 12-track server directly',async()=>{
 const {db}=await boxDatabase();try{for(const file of['20261013210000_box_egg_expansion.sql','20261016170000_box_egg_twenty.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));const body=(await db.query("select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) definition")).rows[0].definition;assert(body.includes("'worlds',20"));assert(body.includes('not between 0 and 19'));assert(!body.includes('not between 0 and 11'));}finally{await db.close();}
});
