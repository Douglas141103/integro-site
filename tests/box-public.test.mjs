import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {boxDatabase,uid} from './box-db-fixture.mjs';
test('public discovery requires login and never reveals private rooms or account identities',async()=>{
 const {db,call}=await boxDatabase();try{
  await db.exec(await readFile(new URL('../supabase/migrations/20261013010000_box_public_rooms.sql',import.meta.url),'utf8'));
  for(const n of [null,8])await assert.rejects(call(n,'list',{p_game:'egg'}),/box_access_denied/);
  const privateRoom=await call(1,'create',{p_game:'egg'});
  assert.equal(privateRoom.public,false);
  assert.equal((await call(2,'join_public',{p_room:privateRoom.id})).error,'room_unavailable');
  const publicRoom=await call(2,'create_public',{p_game:'egg'});
  assert.equal(publicRoom.public,true);assert.equal(publicRoom.code,null);
  const otherGame=await call(3,'create_public',{p_game:'craft'});
  const listed=await call(4,'list',{p_game:'egg'});
  assert.equal(listed.rooms.length,1);assert.equal(listed.rooms[0].id,publicRoom.id);
  assert.deepEqual(Object.keys(listed.rooms[0]).sort(),['capacity','expires_at','game','id','players']);
  assert.doesNotMatch(JSON.stringify(listed),new RegExp(privateRoom.id+'|'+privateRoom.code+'|'+otherGame.id+'|'+uid(2)));
  assert.equal((await call(4,'list',{p_game:'egg'})).error,'rate_limit');
  assert.equal((await call(5,'list',{})).error,'invalid_game');
  assert.equal((await call(4,'join_public',{p_room:publicRoom.id})).players.length,2);
 }finally{await db.close();}
});
test('public rooms enforce capacity, owner moderation, expiry and idle presence',async()=>{
 const {db,call}=await boxDatabase();try{
  const room=await call(1,'create_public',{p_game:'bairro'});
  for(const n of [2,3,4])await call(n,'join_public',{p_room:room.id});
  assert.equal((await call(5,'list',{p_game:'bairro'})).rooms[0].players,4);
  assert.equal((await call(5,'join_public',{p_room:room.id})).error,'room_full');
  assert.equal((await call(2,'kick',{p_room:room.id,p_slot:3})).error,'not_owner');
  await call(1,'kick',{p_room:room.id,p_slot:2});
  assert.deepEqual((await call(2,'list',{p_game:'bairro'})).rooms,[]);
  assert.equal((await call(2,'join_public',{p_room:room.id})).error,'room_unavailable');
  assert.equal((await call(5,'join_public',{p_room:room.id})).slot,2);
  await db.exec("update private.box_members set seen_at=now()-interval '1 minute'");
  assert.deepEqual((await call(6,'list',{p_game:'bairro'})).rooms,[]);
  await call(3,'join_public',{p_room:room.id});
  assert.equal((await call(7,'list',{p_game:'bairro'})).rooms[0].players,1);
  await db.exec("update private.box_rooms set expires_at=now()-interval '1 minute';update private.box_limits set last_list='-infinity'");
  assert.deepEqual((await call(7,'list',{p_game:'bairro'})).rooms,[]);
  assert.equal((await call(4,'join_public',{p_room:room.id})).error,'room_unavailable');
 }finally{await db.close();}
});
test('creation limit also applies to public rooms and private remains the default',async()=>{
 const {db,call}=await boxDatabase();try{
  for(let i=0;i<6;i++)assert.equal((await call(1,'create_public',{p_game:'craft'})).public,true);
  assert.equal((await call(1,'create_public',{p_game:'craft'})).error,'rate_limit');
  assert.equal((await call(1,'create',{p_game:'craft'})).error,'rate_limit');
  const r=await call(2,'create_public',{p_game:'egg'});await call(2,'leave',{p_room:r.id});
  assert.deepEqual((await call(3,'list',{p_game:'egg'})).rooms,[]);
  const permissions=(await db.query("select has_table_privilege('authenticated','private.box_rooms','SELECT') allowed,has_function_privilege('anon','public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)','EXECUTE') anon")).rows[0];
  assert.deepEqual(permissions,{allowed:false,anon:false});
 }finally{await db.close();}
});
