import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
import {Match,applySnapshot,city} from '../integro-box/engole/core.mjs';
import {intgemDatabase} from './intgem-db-fixture.mjs';import {uid} from './box-db-fixture.mjs';
test('city is deterministic; consumption is unique, movement bounded and snapshots recover dropped events',()=>{
 assert.deepEqual(city(42),city(42));assert.notDeepEqual(city(42),city(43));
 const m=new Match(42,[{id:'a',slot:0},{id:'b',slot:1}]),o=m.objects[0];for(const p of m.players)Object.assign(p,{x:o.x,y:o.y,r:18});
 m.step(.02);assert(o.gone);assert.equal(m.players[0].score+m.players[1].score,o.value);const score=m.players[0].score;m.step(.02);assert.equal(m.players[0].score,score);
 m.input('a',{x:1e20,y:0});const x=m.players[0].x;m.step(.05);assert(m.players[0].x-x<9);
 const guest=new Match(42,[{id:'a',slot:0},{id:'b',slot:1}]);assert(applySnapshot(guest,m.snapshot()));assert.deepEqual(guest.snapshot(),m.snapshot());assert(!applySnapshot(guest,{...m.snapshot(),gone:[null]}));
 const total=m.players.map(p=>p.score);m.time=119.99;m.step(.05);assert(m.done);m.step(.05);assert.deepEqual(m.players.map(p=>p.score),total);
});
test('rooms enforce invitations, 8 seats, host authority, private transport and usage',async()=>{
 const {db,run}=await intgemDatabase();try{
 await db.exec(await readFile(new URL('../supabase/migrations/20261104223447_box_dino_expedicao.sql',import.meta.url),'utf8'));
 await db.exec(`create schema realtime;create table realtime.messages(extension text);alter table realtime.messages enable row level security;create function realtime.topic() returns text language sql as $$ select current_setting('test.topic',true) $$;grant usage on schema realtime to authenticated;grant select,insert on realtime.messages to authenticated;insert into realtime.messages values('broadcast');update public.profiles set role='responsavel' where id='${uid(8)}';insert into auth.users(id) values('${uid(9)}');insert into public.profiles(id,role) values('${uid(9)}','responsavel');`);
 await db.exec(await readFile(new URL('../supabase/migrations/20261105205152_engole_engole_rooms.sql',import.meta.url),'utf8'));
 const rpc=(n,act,code=null,room=null)=>run(n,'select public.box_engole($1,$2,$3) r',[act,code,room]);
 await assert.rejects(rpc(null,'create'),/access_denied/);await assert.rejects(rpc(20,'create'),/access_denied/);
 const r=await rpc(1,'create');assert.equal(r.players.length,1);assert.equal(r.code.length,12);
 await assert.rejects(rpc(2,'status',null,r.id),/room_not_found/);await assert.rejects(rpc(1,'start',null,r.id),/need_players/);
 for(let i=2;i<=8;i++)assert.equal((await rpc(i,'join',r.code.toLowerCase())).players.length,i);
 await assert.rejects(rpc(9,'join',r.code),/room_full/);await assert.rejects(rpc(2,'start',null,r.id),/host_only/);
 const allowed=async(n,topic,send)=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true),set_config('test.topic',$2,true)",[uid(n),topic]);if(!send)return (await tx.query('select count(*)::integer n from realtime.messages')).rows[0].n>0;try{await tx.query("insert into realtime.messages values('broadcast')");return true;}catch{return false;}});const base='engole:'+r.id;
 assert(await allowed(1,base+':state',true));assert(!await allowed(2,base+':state',true));assert(await allowed(2,base+':state',false));assert(!await allowed(9,base+':state',false));assert(!await allowed(2,base+':input:'+uid(3),true));assert(await allowed(2,base+':input:'+uid(2),true));assert(await allowed(1,base+':input:'+uid(2),false));assert(!await allowed(3,base+':input:'+uid(2),false));assert(!await allowed(1,'engole:bad:state',true));
 assert.equal((await rpc(1,'start',null,r.id)).phase,'playing');await rpc(8,'leave',null,r.id);await assert.rejects(rpc(9,'join',r.code),/already_started/);
 await run(1,"select public.box_usage($1,'pulse','engole',true,true,$2,'desktop') r",[uid(100),r.id]);
 const usage=await db.query('select game,room_id from private.box_usage_sessions where id=$1',[uid(100)]);assert.equal(usage.rows[0].game,'engole');assert.equal(usage.rows[0].room_id,r.id);
 await assert.rejects(run(2,'select * from private.engole_rooms'),/permission denied/);
 await rpc(1,'leave',null,r.id);assert.equal((await rpc(2,'status',null,r.id)).phase,'closed');assert(!await allowed(2,base+':state',false));await assert.rejects(rpc(9,'join',r.code),/room_not_found/);
 }finally{await db.close();}
});
