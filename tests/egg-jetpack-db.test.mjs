import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const sql=await readFile(new URL('../supabase/migrations/20261020235725_egg_jetpack.sql',import.meta.url),'utf8');
test('15 IntGem grants 12 durable launches, with idempotent spending and account/race isolation',async()=>{
 const {db,run,call}=await intgemDatabase();try{
  await db.exec(sql);await db.exec(sql);
  const jet=(n,action='jet_state',id=null)=>run(n,'select public.box_egg(p_action=>$1,p_id=>$2) r',[action,id?uid(id):null]);
  await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',30),('${uid(2)}',14)`);
  assert.equal((await jet(2,'jet_buy',90)).error,'insufficient_intgem');assert.equal((await jet(2)).charges,0);
  let d=await jet(1,'jet_buy',91);assert.equal(d.balance,15);assert.equal(d.charges,12);assert.equal((await jet(1,'jet_buy',91)).charges,12);
  assert.equal((await jet(1,'jet_launch',91)).error,'request_changed');d=await jet(1,'jet_launch',92);assert.equal(d.charges,11);assert.equal(d.flight.id,uid(92));assert.equal(Date.parse(d.flight.until)-Date.parse(d.now),45000);
  assert.equal((await jet(1,'jet_launch',92)).charges,11);assert.equal((await jet(1,'jet_launch',93)).error,'jet_active');
  await jet(2,'jet_land',92);assert.ok((await jet(1)).flight,'another account cannot land this flight');
  await jet(1,'jet_land',92);assert.equal((await jet(1)).flight,null);d=await jet(1,'jet_launch',92);assert.equal(d.flight,null,'replaying an ended launch cannot mint a free flight');assert.equal(d.charges,11);
  for(let i=0;i<11;i++){d=await jet(1,'jet_launch',100+i);assert.equal(d.charges,10-i);await jet(1,'jet_land',100+i);}
  assert.equal((await jet(1,'jet_launch',120)).error,'jet_empty');d=await jet(1,'jet_buy',121);assert.equal(d.charges,12);assert.equal(d.balance,0);
  const room=(await call(1,'create_public',{p_game:'egg'})).id;await call(2,'join_public',{p_room:room});await db.query('insert into private.box_egg_races(room_id,starts_at,world) values($1,now(),0)',[room]);assert.equal((await jet(1,'jet_launch',122)).error,'race_running');assert.equal((await jet(1)).charges,12);
  await db.query("update private.box_egg_races set starts_at=now()-interval '3 minutes'");d=await jet(1,'jet_launch',122);assert.equal(d.charges,11);await db.query("update private.egg_jetpacks set flight_until=now()-interval '1 second' where user_id=$1",[uid(1)]);assert.equal((await jet(1)).flight,null);assert.equal((await jet(1,'jet_launch',123)).charges,10);
  const pose=await call(1,'sync',{p_room:room,p_state:{x:0,y:8,z:14,yaw:0,zone:'world',jetpack:true}});assert.equal(pose.players.find(p=>p.slot===1).state.jetpack,true);
  assert.equal((await db.query("select sum(delta)::int n from private.intgem_ledger where user_id=$1",[uid(1)])).rows[0].n,-30);
  await assert.rejects(()=>run(1,'select charges r from private.egg_jetpacks'),/permission denied/);await assert.rejects(()=>jet(20,'jet_buy',130),/box_access_denied/);
 }finally{await db.close();}
});
