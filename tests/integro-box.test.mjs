import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {boxDatabase,uid} from './box-db-fixture.mjs';

test('salas: autenticação, convites, lotação, isolamento, remoção e encerramento',async()=>{
 const {db,call}=await boxDatabase();try{
  await assert.rejects(call(null,'create',{p_game:'egg'}),/box_access_denied/);
  await assert.rejects(call(8,'create',{p_game:'egg'}),/box_access_denied/);
  const a=await call(1,'create',{p_game:'egg'});assert.equal(a.slot,1);assert.equal(a.owner,true);assert.match(a.code,/^[0-9A-F]{12}$/);
  assert.equal((await call(2,'sync',{p_room:a.id})).error,'not_member');
  assert.equal((await call(2,'join',{p_code:'000000000000'})).error,'room_unavailable');
  for(const n of [2,3,4])assert.equal((await call(n,'join',{p_code:a.code})).slot,n);
  assert.equal((await call(5,'join',{p_code:a.code})).error,'room_full');
  assert.equal((await call(2,'close',{p_room:a.id})).error,'not_owner');
  const st=await call(2,'sync',{p_room:a.id,p_state:{x:0,y:0,z:5,yaw:0,zone:'world',email:'must-not-leak',gesture:'<script>bad</script>'}});
  assert.doesNotMatch(JSON.stringify(st),/must-not-leak|<script>|user_id|owner_id/);
  assert.equal(st.players.find(p=>p.slot===2).state.gesture,'');
  assert.equal((await call(2,'sync',{p_room:a.id,p_state:{}})).error,'rate_limit');
  await call(1,'kick',{p_room:a.id,p_slot:2});
  assert.equal((await call(2,'join',{p_code:a.code})).error,'room_unavailable');
  assert.equal((await call(5,'join',{p_code:a.code})).slot,2);
  await call(1,'leave',{p_room:a.id});
  assert.equal((await call(3,'sync',{p_room:a.id})).error,'room_unavailable');
  const permissions=await db.query("select has_table_privilege('authenticated','private.box_rooms','SELECT') allowed, has_function_privilege('anon','public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)','EXECUTE') anon");
  assert.deepEqual(permissions.rows,[{allowed:false,anon:false}]);
 }finally{await db.close();}
});
test('mundo compartilhado: blocos validados, revisão, posições inválidas, expiração e limites',async()=>{
 const {db,call}=await boxDatabase();try{
  const a=await call(1,'create',{p_game:'craft'});await call(2,'join',{p_code:a.code});
  const state={x:10,y:8,z:10,yaw:0,zone:'world'};
  const sync=opts=>call(1,'sync',{p_room:a.id,p_state:state,...opts});
  const reset=()=>db.query("update private.box_limits set last_sync='-infinity' where user_id=$1",[uid(1)]);
  const b=await sync({p_edit:{x:12,y:8,z:10,block:7}});assert.equal(b.world['12,8,10'],7);assert.equal(b.revision,1);
  const remote=await call(2,'sync',{p_room:a.id,p_state:{...state,x:9}});assert.equal(remote.world['12,8,10'],7);
  await reset();assert.equal((await sync({p_revision:1})).world,null);
  await reset();assert.equal((await sync({p_edit:{x:40,y:8,z:40,block:7}})).edit_error,'invalid_edit');
  await reset();assert.equal((await sync({p_edit:{x:10,y:0,z:10,block:0}})).edit_error,'invalid_edit');
  await reset();assert.equal((await sync({p_state:{...state,x:'NaN'}})).error,'invalid_state');
  await reset();assert.equal((await sync({p_state:{...state,zone:'<script>'}})).error,'invalid_state');
  await db.query("update private.box_rooms set expires_at=now()-interval '1 minute' where id=$1",[a.id]);
  assert.equal((await sync({})).error,'room_unavailable');
  for(let i=0;i<10;i++)await call(3,'join',{p_code:'000000000000'});
  assert.equal((await call(3,'join',{p_code:a.code})).error,'rate_limit');
 }finally{await db.close();}
});
test('entrada autenticada e retorno restrito ao Integro Box',async()=>{
 const html=await readFile(new URL('../integro-box/jogar.html',import.meta.url),'utf8');
 assert.match(html,/class="box-locked"/);assert.doesNotMatch(html,/<script[^>]+src="[^\"]*(worlds|classic-games)/);
 const gate=await readFile(new URL('../integro-box/gate.js',import.meta.url),'utf8');
 assert.ok(gate.indexOf('await requireFamily()')<gate.indexOf("await script('./classic-games"));
 const access=await readFile(new URL('../integro-box/access.js',import.meta.url),'utf8');assert.match(access,/auth.getUser\(\)/);
 const app=await readFile(new URL('../portal-familia/app.js',import.meta.url),'utf8');
 assert.match(app,/get\('next'\) === 'integro-box'/);assert.doesNotMatch(app,/location.href\s*=\s*new URLSearchParams/);
});
