import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const sql=await readFile(new URL('../supabase/migrations/20261020233803_egg_room_traps.sql',import.meta.url),'utf8');
test('paid traps charge once, hit opponents once and refund only unused deployments across room lifecycle',async()=>{
 const {db,call,run}=await intgemDatabase();
 try{
  await db.exec(sql);await db.exec(sql);
  const trap=(n,action='trap_state',room=null,kind=null,id=null,extra={})=>run(n,'select public.box_egg(p_action=>$1,p_room=>$2,p_data=>$3,p_id=>$4) r',[action,room,{kind,...extra},id?uid(id):null]);
  const sync=async(n,room,x,z,y=0)=>{await db.exec("update private.box_limits set last_sync='2000-01-01'");const r=await call(n,'sync',{p_room:room,p_state:{x,z,y,yaw:0,zone:'world'}});assert.equal(r.error,undefined);return r;};
  const arm=()=>db.exec("update private.egg_traps set placed_at=now()-interval '2 seconds'");
  await db.exec(`insert into private.intgem_wallets(user_id,balance) values('${uid(1)}',5),('${uid(2)}',0);`);
  assert.equal((await trap(2,'trap_buy',null,'mine',90)).error,'insufficient_intgem');
  assert.equal((await trap(1,'trap_buy',null,'bear',91)).balance,4);
  assert.equal((await trap(1,'trap_buy',null,'bear',91)).balance,4);
  assert.equal((await trap(1,'trap_buy',null,'mine',91)).error,'request_changed');
  assert.equal((await trap(1)).stock.bear,1);
  assert.equal((await db.query('select count(*)::int n from private.intgem_ledger')).rows[0].n,1);
  assert.equal((await trap(1,'trap_place',null,'bear',92)).error,'not_member');
  const room=(await call(1,'create_public',{p_game:'egg'})).id;assert.ok(room);
  assert.equal((await call(2,'join_public',{p_room:room})).error,undefined);
  await sync(1,room,-5,14);await sync(2,room,0,14);
  assert.equal((await trap(1,'trap_place',room,'bear',92)).stock.bear,0);
  assert.equal((await trap(1,'trap_place',room,'bear',92)).stock.bear,0,'place replay does not debit twice');
  await arm();await sync(1,room,-5,14);assert.equal((await trap(1,'trap_state',room)).traps.length,1,'owner immune');
  await sync(2,room,-5,14,2);assert.equal((await trap(2,'trap_state',room)).hits.length,0,'jump above trap');
  await sync(2,room,-5,14,0);let state=await trap(2,'trap_state',room);assert.equal(state.hits.length,1);assert.equal(state.traps.length,0);assert.equal(state.hits[0].id,uid(92));
  await sync(2,room,-5,14);assert.equal((await trap(2,'trap_state',room)).hits.length,1,'one durable hit');
  assert.equal((await trap(1,'trap_state',room)).hits.length,0,'private victim event');
  assert.equal((await trap(2,'trap_state',room,null,null,{ack:[uid(92)]})).hits.length,0);
  await trap(1,'trap_buy',room,'mine',93);await trap(1,'trap_place',room,'mine',94);
  await call(1,'leave',{p_room:room});state=await trap(1);assert.equal(state.stock.mine,1,'unused mine returned on leave');assert.equal(state.stock.bear,0,'spent bear never returned');
  await db.exec('select private.egg_trap_reap()');assert.equal((await trap(1)).stock.mine,1,'repeat cleanup no duplication');
  const second=(await call(2,'create_public',{p_game:'egg'})).id;await call(1,'join_public',{p_room:second});await sync(1,second,0,-10);
  await trap(1,'trap_place',second,'mine',95);await db.exec(`update private.box_members set seen_at=now()-interval '31 seconds' where user_id='${uid(1)}'`);
  state=await trap(2,'trap_state',second);assert.equal(state.traps.length,0);assert.equal((await trap(1)).stock.mine,1,'disconnect refund');
  await sync(1,second,0,-10);await trap(1,'trap_place',second,'mine',96);
  await call(2,'kick',{p_room:second,p_slot:2});assert.equal((await trap(1)).stock.mine,1,'kick refund');
  const third=(await call(1,'create_public',{p_game:'egg'})).id;await call(3,'join_public',{p_room:third});await sync(1,third,0,-40);await sync(3,third,0,-30);
  await trap(1,'trap_place',third,'mine',97);await arm();await sync(3,third,0,-50);
  assert.equal((await trap(3,'trap_state',third)).hits.length,1,'fast movement sweeps through trap');
  await trap(1,'trap_buy',third,'bear',98);await trap(1,'trap_place',third,'bear',99);await call(1,'close',{p_room:third});assert.equal((await trap(1)).stock.bear,1,'room close refunds');
  const fourth=(await call(1,'create_public',{p_game:'egg'})).id;await sync(1,fourth,0,-10);await trap(1,'trap_place',fourth,'bear',101);
  await db.query("update private.box_rooms set expires_at=now()-interval '1 second' where id=$1",[fourth]);assert.equal((await trap(1)).stock.bear,1,'room expiry refunds');
  assert.equal((await trap(1,'trap_buy',null,'bear',91)).balance,2,'purchase replay remains safe after use and refund');
  await assert.rejects(()=>run(1,'select private.box_egg_traps($1,$2,$3,$4) r',['trap_buy',{kind:'mine'},null,uid(100)]),/permission denied/);
  await assert.rejects(()=>run(1,'select quantity r from private.egg_trap_stock'),/permission denied/);
  await assert.rejects(()=>trap(20,'trap_buy',null,'mine',100),/box_access_denied/);
 }finally{await db.close();}
});


test('widened track accepts and triggers paid traps on both new shoulders without weakening bounds or ownership',async()=>{
 const {db,call,run}=await intgemDatabase();
 try{
  await db.exec(sql);
  const migration=await readFile(new URL('../supabase/migrations/20261113205038_egg_triple_track_width.sql',import.meta.url),'utf8');
  await db.exec(migration);await db.exec(migration);
  const room=(await call(1,'create_public',{p_game:'egg'})).id;await call(2,'join_public',{p_room:room});
  await db.exec(`insert into private.egg_trap_stock(user_id,kind,quantity) values('${uid(1)}','bear',2)`);
  const sync=async(n,x,z)=>{await db.exec("update private.box_limits set last_sync='2000-01-01'");assert.equal((await call(n,'sync',{p_room:room,p_state:{x,z,y:0,yaw:0,zone:'world'}})).error,undefined);};
  for(const side of [-1,1]){
   const x=side*13.85;await sync(1,x,-20);await sync(2,x,-15);
   const r=await run(1,'select public.box_egg(p_action=>$1,p_room=>$2,p_data=>$3,p_id=>$4) r',['trap_place',room,{kind:'bear'},uid(side<0?110:111)]);
   assert.equal(r.error,undefined);assert.equal(r.traps.at(-1).x,x);
   await db.exec("update private.egg_traps set placed_at=now()-interval '2 seconds';update private.egg_traps set hit_at=now()-interval '5 seconds' where status='spent'");
   await sync(2,x,-25);
   assert.equal((await db.query("select count(*)::int n from private.egg_traps where status='spent'")).rows[0].n,side<0?1:2);
  }
  for(const x of [-14.26,14.26])await assert.rejects(()=>db.query('update private.egg_traps set x=$1',[x]),/egg_traps_x_check/);
  await assert.rejects(()=>run(2,'select * from private.egg_traps'),/permission denied/);
 }finally{await db.close();}
});
