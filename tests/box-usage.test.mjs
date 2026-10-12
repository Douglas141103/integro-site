import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {uid} from './box-db-fixture.mjs';
import {usageDatabase as fixture} from './box-usage-fixture.mjs';
test('usage authorization, director school isolation and private tables',async()=>{
 const f=await fixture();try{
  await assert.rejects(()=>f.pulse(null,100),/box_access_denied/);await assert.rejects(()=>f.pulse(8,100),/box_access_denied/);
  await f.pulse(3,103);await f.pulse(4,104);await assert.rejects(()=>f.pulse(4,103),/box_access_denied/);
  for(const user of [null,3,6,8])await assert.rejects(()=>f.report(user),/box_management_denied/);
  const all=await f.report(1);assert.equal(all.summary.sessions,2);assert.equal(all.profiles.find(p=>p.id===uid(3)).email,'perfil3@example.test');
  const own=await f.report(2);assert.equal(own.summary.sessions,1);assert(own.profiles.some(p=>p.id===uid(3)));assert(!own.profiles.some(p=>p.id===uid(4)));assert.equal((await f.report(2,4)).summary.sessions,0);
  await f.db.exec(`update public.student_guardians set guardian_profile_id='${uid(5)}'`);assert.equal((await f.report(2)).summary.sessions,0);
  await assert.rejects(()=>f.db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query('select * from private.box_usage_sessions');}),/permission denied/);
 }finally{await f.db.close();}
});
test('server timing caps, idle, stale sessions, concurrent tabs and multiplayer validation',async()=>{
 const f=await fixture();try{
  await f.pulse(3,103);await f.tick(3,103);await f.pulse(3,103);let r=await f.report(1,3);assert(r.summary.active_seconds>=29&&r.summary.active_seconds<=31);
  await f.tick(3,103);await f.pulse(3,103,'craft',false,false);r=await f.report(1,3);assert(r.summary.active_seconds<=31);assert(r.summary.connected_seconds>=59);
  await f.tick(3,103,3600);await f.pulse(3,103);r=await f.report(1,3);assert(r.summary.connected_seconds<=61);
  await f.pulse(3,203);await f.tick(3,103);await f.db.query("update private.box_usage_sessions set last_seen_at=clock_timestamp()-interval '30 seconds' where id=$1",[uid(203)]);
  const before=Number((await f.report(1,3)).summary.connected_seconds);await f.pulse(3,103);await f.pulse(3,203);const after=Number((await f.report(1,3)).summary.connected_seconds);assert(after-before<=31,'overlapping tabs must not double time');
  await f.tick(3,103);await f.pulse(3,103,'craft',true,true,uid(999));assert.equal((await f.report(1,3,null,'multiplayer')).summary.sessions,0);
  const room=await f.call(3,'create',{p_game:'craft'});await f.tick(3,103);await f.pulse(3,103,'craft',true,true,room.id);r=await f.report(1,3,null,'multiplayer');assert.equal(r.summary.sessions,1);assert.equal(r.rooms[0].room_id,room.id);
  await f.tick(3,103);await f.pulse(3,103,'math');r=await f.report(1,3,'math');assert.equal(r.sessions[0].history[0].game,'math');assert.equal(r.rooms.length,0);
  await f.pulse(3,103,'math',false,false,null,'end');assert.equal((await f.pulse(3,103)).closed,true);
 }finally{await f.db.close();}
});
