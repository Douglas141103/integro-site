import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const migration=name=>readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8');
test('gift grants exactly five charges and one of each trap once, to existing and future accounts, for free',async()=>{
 const {db,run}=await intgemDatabase();try{
  await db.exec(await migration('20261020233803_egg_room_traps.sql'));await db.exec(await migration('20261020235725_egg_jetpack.sql'));
  const sql=await migration('20261021001638_egg_welcome_gift.sql');await db.exec(sql);await db.exec(sql);
  const gift=(n,action='gift_state',payload={})=>run(n,'select public.box_egg(p_action=>$1,p_data=>$2) r',[action,payload]);
  await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',19);insert into private.egg_jetpacks(user_id,charges) values('${uid(1)}',11);insert into private.egg_trap_stock(user_id,kind,quantity) values('${uid(1)}','bear',2);`);
  assert.equal((await gift(1)).claimed,false);assert.equal((await db.query('select count(*)::int n from private.egg_gift_claims')).rows[0].n,0,'viewing never grants');
  let d=await gift(1,'gift_claim',{charges:999,user_id:uid(2)});assert.equal(d.granted,true);assert.deepEqual(d.rewards,{jetpacks:1,charges:5,mine:1,bear:1});
  assert.equal((await gift(1,'gift_claim')).granted,false);assert.equal((await gift(1)).claimed,true);
  assert.equal((await db.query('select charges from private.egg_jetpacks where user_id=$1',[uid(1)])).rows[0].charges,16);
  assert.deepEqual((await db.query('select kind,quantity from private.egg_trap_stock where user_id=$1 order by kind',[uid(1)])).rows,[{kind:'bear',quantity:3},{kind:'mine',quantity:1}]);
  assert.equal((await gift(2)).claimed,false,'payload cannot award another account');
  assert.equal((await db.query('select balance from private.intgem_wallets where user_id=$1',[uid(1)])).rows[0].balance,19);assert.equal((await db.query('select count(*)::int n from private.intgem_ledger')).rows[0].n,0);
  await db.exec(`insert into auth.users(id,email) values('${uid(30)}','new-player@example.test');insert into public.profiles(id,role) values('${uid(30)}','responsavel');`);
  assert.equal((await gift(30)).claimed,false);assert.equal((await gift(30,'gift_claim')).granted,true);assert.equal((await gift(30,'gift_claim')).granted,false);
  assert.equal((await db.query('select charges from private.egg_jetpacks where user_id=$1',[uid(30)])).rows[0].charges,5);
  assert.deepEqual((await db.query('select quantity from private.egg_trap_stock where user_id=$1',[uid(30)])).rows,[{quantity:1},{quantity:1}]);
  // An overflow cannot partially grant traps or consume the claim.
  await db.exec(`insert into private.egg_jetpacks(user_id,charges) values('${uid(3)}',999996)`);assert.equal((await gift(3,'gift_claim')).error,'jet_full');assert.equal((await gift(3)).claimed,false);
  assert.equal((await db.query('select count(*)::int n from private.egg_trap_stock where user_id=$1',[uid(3)])).rows[0].n,0);
  await assert.rejects(()=>gift(20,'gift_claim'),/box_access_denied/);await assert.rejects(()=>gift(null,'gift_claim'),/box_access_denied/);
  await assert.rejects(()=>run(1,'select claimed_at r from private.egg_gift_claims'),/permission denied/);await assert.rejects(()=>run(1,"select private.box_egg_gift('gift_claim') r"),/permission denied/);
 }finally{await db.close();}
});
