import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from 'three';
import {createDepartureClock,createModelFade} from '../integro-box/room-departure.mjs';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const read=name=>readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8');

test('fade takes 30 seconds, stays at zero and cached peers cannot restart it',()=>{
 let now=100;const clock=createDepartureClock(()=>now);
 const value={start:50000,end:80000,serverNow:50000};clock.set(value);
 assert.equal(clock.opacity(),1);now+=15000;assert.equal(clock.opacity(),.5);
 clock.set(value);assert.equal(clock.opacity(),.5);now+=15000;assert.equal(clock.opacity(),0);
 now+=1000;assert.equal(clock.opacity(),0);clock.set(null);assert.equal(clock.opacity(),1);
});
test('avatar, equipment, pet and labels fade without changing other players or shared materials',()=>{
 const mat=new T.MeshBasicMaterial({opacity:.8}),root=new T.Group(),other=new T.Mesh(new T.BoxGeometry(),mat);
 const mesh=new T.Mesh(new T.BoxGeometry(),mat);mesh.castShadow=true;root.add(mesh);
 const pet=new T.Group(),petMesh=new T.Mesh(new T.BoxGeometry(),mat);pet.add(petMesh);
 const fade=createModelFade();fade.apply([root,pet],.5);
 assert.equal(mesh.material.opacity,.4);assert.equal(petMesh.material.opacity,.4);assert.equal(other.material.opacity,.8);
 const ride=new T.Mesh(new T.BoxGeometry(),mat);root.add(ride);fade.apply([root,pet],0);
 assert.equal(ride.material.opacity,0);assert.equal(mesh.castShadow,false);assert.equal(mesh.material.depthWrite,false);
 fade.clear();assert.equal(mesh.material,mat);assert.equal(ride.material,mat);assert.equal(mesh.castShadow,true);
});

test('only selected members fade; server removes at deadline, preserves others and does not ban a return',async()=>{
 const {db,call,run}=await intgemDatabase();
 try{
  await db.exec(await read('20261021030058_room_equipped_appearance.sql'));
  const migration=await read('20261030211429_box_room_departure.sql');await db.exec(migration);await db.exec(migration);
  const room=await call(1,'create_public',{p_game:'egg'});
  await call(2,'join_public',{p_room:room.id});await call(3,'join_public',{p_room:room.id});
  for(const n of [1,2])await db.query('insert into private.box_room_departures(user_id,room_id,reference) values($1,$2,$3)',[uid(n),room.id,'test-departure-'+n]);
  await assert.rejects(()=>run(3,'select private.box_finish_departures($1) r',[room.id]),/permission denied/);
  const state={x:0,y:0,z:10,yaw:0,zone:'world'};
  const sync=async(n,extra={})=>{await db.exec("update private.box_limits set last_sync='-infinity'");return call(n,'sync',{p_room:room.id,p_state:{...state,...extra}});};
  const legacy=await sync(1);assert.equal(legacy.players[0].state.departure,null);
  assert.equal((await call(3,'resume_departure')).pending,false);
  await db.exec("update private.box_limits set last_sync='-infinity'");
  const resumed=await call(1,'resume_departure');assert.equal(resumed.id,room.id,JSON.stringify(resumed));
  assert.equal((await sync(3,{departure_client:1,departure:{start:0,end:1}})).players.find(p=>p.slot===3).state.departure,null);
  const started=await sync(1,{departure_client:1});const marker=started.players.find(p=>p.slot===1).state.departure;
  assert.equal(marker.end-marker.start,30000);assert(!JSON.stringify(started.players).includes(uid(1)));
  await sync(2,{departure_client:1});
  assert.equal((await call(1,'finish_departure',{p_room:room.id})).ok,false);
  await db.exec("update private.box_room_departures set started_at=clock_timestamp()-interval '29 seconds'");
  assert.equal((await sync(3)).players.length,3);
  await db.exec("update private.box_room_departures set started_at=clock_timestamp()-interval '31 seconds'");
  const finished=await sync(3);assert.equal(finished.players.length,1);assert.equal(finished.owner,true);
  assert.equal((await call(1,'finish_departure',{p_room:room.id})).ok,true);
  assert.equal((await sync(2)).error,'not_member');
  assert.equal((await call(1,'join_public',{p_room:room.id})).id,room.id);
  const returned=await sync(1,{departure_client:1});assert.equal(returned.players.find(p=>p.slot===1).state.departure,null);
  assert.equal((await db.query('select count(*)::int n from private.box_blocks')).rows[0].n,0);
 }finally{await db.close();}
});
