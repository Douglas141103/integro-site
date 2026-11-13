import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';
import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
const migration=async name=>readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8');
test('celestial eggs persist and appear in visited corrals with valid fusion income; bonus room positions and traps work while timed races exclude the bonus',async()=>{
 const {db,run,call}=await intgemDatabase();try{
  for(const file of ['20261020233803_egg_room_traps.sql','20261020235725_egg_jetpack.sql','20261021001638_egg_welcome_gift.sql','20261021014434_egg_income_tax_luxury.sql','20261023004052_egg_winter_2026.sql','20261103195438_egg_flaming_stones.sql','20261103201639_egg_shared_flame.sql','20261103204608_egg_grande_pedregulho.sql','20261104220216_egg_corral_progression_fusion.sql','20261111215656_egg_five_floor_corrals.sql','20261111223646_egg_modular_player_house.sql']){if(file==='20261111215656_egg_five_floor_corrals.sql')await db.exec(`do $$declare f text;begin f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);f:=replace(f,'''vehicles'',12)', '''vehicles'',12,''event'',null)');execute f;end $$;`);await db.exec(await migration(file));}
  const wealth=(await migration('20261023043009_egg_six_minute_redistribution.sql')).split('create or replace function private.egg_economic_wealth')[1].split('revoke all on function private.egg_economic_wealth')[0];
  await db.exec('create or replace function private.egg_economic_wealth'+wealth);
  await db.exec(await migration('20261113205038_egg_triple_track_width.sql'));
  await db.exec(await migration('20261113210051_egg_heaven_bonus.sql'));
  await db.exec(await migration('20261113212115_egg_subsoil_bonus.sql'));
  await db.exec(await migration('20261113213317_egg_subsoil_guardian.sql'));
  assert.equal((await run(1,"select public.box_egg('capabilities') r")).worlds,25);
  const g=new EggAdventure();g.save.eggs=[{id:1,world:23,rarity:'rare',mutation:'gold',remaining:100}];
  const save=(n,data,rev)=>run(n,"select public.box_egg('save',p_data=>$1,p_revision=>$2) r",[data,rev]);
  assert.equal((await save(1,g.save,0)).revision,1);const loaded=await run(1,"select public.box_egg('load') r");assert.equal(loaded.save.eggs[0].world,23);
  g.save.eggs=[];g.save.creatures=[{uid:'celestial-pet',world:23,rarity:'rare',mutation:'gold'}];assert.equal((await save(1,g.save,1)).revision,2);
  const rate=(await db.query('select private.egg_fusion_rate($1)::float8 rate',[g.save.creatures[0]])).rows[0].rate;assert(Math.abs(rate-g.baseCreatureIncomeRate(g.save.creatures[0]))<1e-8);
  const wealthValue=(await db.query('select private.egg_economic_wealth($1) value',[g.save])).rows[0].value;assert.equal(Number(wealthValue),Math.ceil(85000*3*1.5*4.2));
  const stale=structuredClone(g.save);stale.contentVersion=23;stale.creatures=[];assert.equal((await save(1,stale,2)).error,'progression_update_required');
  const bad=structuredClone(g.save);bad.creatures[0].world=25;assert.equal((await save(1,bad,2)).error,'invalid_save');
  const magma=new EggAdventure();magma.save.eggs=[{id:1,world:24,rarity:'rare',mutation:'gold',remaining:100}];
  assert.equal((await save(2,magma.save,0)).revision,1);assert.equal((await run(2,"select public.box_egg('load') r")).save.eggs[0].world,24);
  magma.save.eggs=[];magma.save.creatures=[{uid:'magma-pet',world:24,rarity:'rare',mutation:'gold'}];assert.equal((await save(2,magma.save,1)).revision,2);
  const magmaRate=(await db.query('select private.egg_fusion_rate($1)::float8 rate',[magma.save.creatures[0]])).rows[0].rate;assert(Math.abs(magmaRate-magma.baseCreatureIncomeRate(magma.save.creatures[0]))<1e-8);
  assert.equal(Number((await db.query('select private.egg_economic_wealth($1) value',[magma.save])).rows[0].value),Math.ceil(100000*3*1.5*4.2));
  const oldMagma=structuredClone(magma.save);oldMagma.contentVersion=24;oldMagma.creatures=[];assert.equal((await save(2,oldMagma,2)).error,'progression_update_required');
  const room=(await call(1,'create_public',{p_game:'egg'})).id;await call(2,'join_public',{p_room:room});
  const sync=async(n,x,z)=>{await db.exec("update private.box_limits set last_sync='-infinity'");return call(n,'sync',{p_room:room,p_state:{x,z,y:0,yaw:0,zone:'world'}});};
  assert.equal((await sync(1,12,-1468)).error,undefined);const peers=await sync(2,0,-1207);assert(peers.players.some(p=>p.state.z===-1468));
  await db.exec(`insert into private.egg_trap_stock(user_id,kind,quantity) values('${uid(1)}','mine',1)`);
  const trap=await run(1,"select public.box_egg('trap_place',p_room=>$1,p_id=>$2,p_data=>$3) r",[room,uid(500),{kind:'mine'}]);assert.equal(trap.error,undefined);assert.equal(trap.traps[0].z,-1468);
  await sync(1,7,-1815);const underground=await sync(2,0,-1607);assert(underground.players.some(p=>p.state.z===-1815));
  await db.exec(`insert into private.egg_trap_stock(user_id,kind,quantity) values('${uid(2)}','mine',1)`);
  const undergroundTrap=await run(2,"select public.box_egg('trap_place',p_room=>$1,p_id=>$2,p_data=>$3) r",[room,uid(501),{kind:'mine'}]);assert.equal(undergroundTrap.error,undefined);assert(undergroundTrap.traps.some(t=>t.z===-1607));
  await sync(1,0,15);await sync(2,0,15);
  assert.equal((await run(1,"select public.box_egg('race_start',p_room=>$1,p_world=>23) r",[room])).error,'invalid_world');
  assert.equal((await run(1,"select public.box_egg('race_start',p_room=>$1,p_world=>24) r",[room])).error,'invalid_world');
  assert.equal((await run(1,"select public.box_egg('race_start',p_room=>$1,p_world=>22) r",[room])).error,undefined);
  const visit=await run(2,"select public.box_egg('visit',p_room=>$1,p_slot=>1) r",[room]);assert.equal(visit.corral.creatures[0].world,23);
 }finally{await db.close();}
});
