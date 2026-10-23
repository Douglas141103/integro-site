import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
const migration=name=>readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8');
test('operator correction debits once, refunds only an owned recorded skate use and isolates its notice',async()=>{
 const {db,run}=await intgemDatabase();try{
  for(const file of ['20261020233803_egg_room_traps.sql','20261023004052_egg_winter_2026.sql','20261023150112_egg_admin_adjustment_notices.sql','20261023150112_egg_admin_adjustment_notices.sql'])await db.exec(await migration(file));
  const g=new EggAdventure();g.save.coins=142279964;
  await db.query('insert into private.box_egg_saves(user_id,revision,data) values($1,937,$2)',[uid(1),g.save]);
  await db.query('insert into private.egg_winter_inventory(user_id,skates) values($1,1)',[uid(1)]);
  await db.query("insert into private.egg_winter_operations(user_id,request_id,action) values($1,$2,'winter_use')",[uid(1),uid(91)]);
  const adjust=(reference='correction-one',amount=46000000,op=uid(91))=>db.query('select private.egg_admin_adjust($1,$2,$3,$4,$5) r',[uid(1),reference,amount,'Aviso da administração: irregularidades na coleta anterior.',op]);
  await assert.rejects(()=>adjust('too-much',200000000),/insufficient_integros/);
  await assert.rejects(()=>adjust('wrong-op',46000000,uid(92)),/skate_use_not_found/);
  assert.equal((await db.query('select skates from private.egg_winter_inventory where user_id=$1',[uid(1)])).rows[0].skates,1);
  const first=(await adjust()).rows[0].r;assert.equal(first.coins_after,96279964);assert.equal(first.amount,46000000);assert.equal(first.skates_after,2);assert.equal(first.save_before,undefined);
  assert.deepEqual((await adjust()).rows[0].r,first);await assert.rejects(()=>adjust('second-refund',1),/skate_already_refunded/);await assert.rejects(()=>adjust('correction-one',24000000),/adjustment_reference_changed/);
  const saved=(await db.query('select revision,data from private.box_egg_saves where user_id=$1',[uid(1)])).rows[0];assert.equal(saved.revision,938);assert.deepEqual(saved.data,{...g.save,coins:96279964});
  assert.equal((await db.query('select save_before from private.egg_admin_adjustments')).rows[0].save_before.coins,g.save.coins);
  const notice=n=>run(n,"select public.box_egg('adjustment_notices') r");
  assert.equal((await notice(1)).notices[0].skates,1);assert.equal((await notice(2)).notices.length,0);
  await run(2,"select public.box_egg('adjustment_ack',p_id=>$1) r",[first.id]);assert.equal((await notice(1)).notices.length,1);
  await run(1,"select public.box_egg('adjustment_ack',p_id=>$1) r",[first.id]);assert.equal((await notice(1)).notices.length,0);
  await assert.rejects(()=>run(1,'select * from private.egg_admin_adjustments'),/permission denied/);
  await assert.rejects(()=>run(1,"select private.egg_admin_adjust($1,'illegal',1,'bad',null) r",[uid(1)]),/permission denied/);
  assert.equal((await run(1,"select public.box_egg('save',p_revision=>937,p_data=>$1) r",[g.save])).error,'conflict');
 }finally{await db.close();}
});
