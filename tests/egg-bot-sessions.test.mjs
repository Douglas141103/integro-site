import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {createBot,prepareBotSession,advanceBot,botSnapshot} from '../integro-box/egg-src/egg-bot.js';
test('offline sessions freeze progress; a later login keeps earned save and restarts at the base',()=>{
 const bot=createBot(null,71);advanceBot(bot,15);bot.game.save.coins=120;bot.game.save.training=12;
 bot.game.player.z=-20;bot.session=4;
 const saved=structuredClone(botSnapshot(bot));
 const offline=prepareBotSession(saved,71,{online:false,number:4,seconds:0},()=>1000000);
 advanceBot(offline,0);
 assert.deepEqual(botSnapshot(offline),saved);
 const login=prepareBotSession(saved,71,{online:true,number:5,seconds:0},()=>2000000);
 assert.equal(login.game.save.coins,120);assert.equal(login.game.save.training,12);
 assert.equal(login.game.player.z,15);assert.equal(login.game.time,0);assert.equal(login.session,5);
 advanceBot(login,10);const checkpoint=structuredClone(botSnapshot(login));
 const same=prepareBotSession(checkpoint,71,{online:true,number:5,seconds:15},()=>2015000);
 assert.equal(same.game.time,login.game.time);assert.deepEqual(same.game.player,login.game.player);
});
test('session schedules vary room occupancy, credit only online time, expire presence immediately and keep offline rankings',async()=>{
 const {db,run,call}=await intgemDatabase();
 try{
  await db.exec('alter table public.students add column active boolean default true');
  for(const file of ['20261021030058_room_equipped_appearance.sql','20261030211429_box_room_departure.sql','20261020210536_egg_balance_ranking.sql','20261030224808_egg_virtual_players.sql','20261031000651_egg_virtual_sessions.sql','20261031001331_egg_virtual_session_scope.sql']){
   await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  }
  await assert.rejects(run(1,'select private.egg_bot_sessions(now(),now()) r'),/permission denied/);
  // Force a daytime fixture; scheduling itself is tested with explicit clocks below.
  const daytime='2026-11-01T16:00:00Z';
  await db.query("update private.egg_bots set is_online=false,next_login_at=$1::timestamptz-interval '1 second'",[daytime]);
  let sessions=(await db.query('select private.egg_bot_sessions($1,$1::timestamptz-interval \'15 seconds\') r',[daytime])).rows[0].r;
  assert.equal(Object.values(sessions).filter(s=>s.online).length,48);
  assert(Object.values(sessions).every(s=>s.seconds===0));
  let counts=(await db.query('select count(*)::int n from private.egg_bots where is_online group by room_id')).rows.map(r=>r.n);
  assert.deepEqual([...new Set(counts)].sort(),[1,2,3]);
  assert.equal((await db.query("select count(*)::int n from private.egg_bots where is_online and session_until-session_started_at not between interval '10 minutes' and interval '35 minutes'")).rows[0].n,0);
  // Restore live clock to exercise the RPC, presence and daily reward path.
  const token='b'.repeat(64);
  await db.query("update private.egg_bot_control set enabled=true,token_hash=sha256(convert_to($1,'UTF8')),last_tick=now()-interval '15 seconds'",[token]);
  await db.exec("update private.egg_bots set session_started_at=now()-interval '1 minute',session_until=now()+interval '10 minutes',next_login_at=now()+interval '1 hour',seen_at=now(),day=(now() at time zone 'America/Manaus')::date,day_seconds=299");
  const tick=async(action,lease=null,results=null)=>(await db.query('select public.box_bot_tick($1,$2,$3,$4,$5) r',[token,action,lease,results?'checkpoint':null,results])).rows[0].r;
  const job=await tick('claim');
  const results=Array.from({length:70},(_,i)=>({id:i+1,session:job.sessions[i+1].number,data:{coins:10},pose:{x:0,y:0,z:15,yaw:0,zone:'world'},path:[]}));
  assert.equal((await tick('commit',job.lease,results)).participants,48);
  assert.equal((await run(1,'select public.box_virtual_presence() r')).active,48);
  assert.equal((await db.query('select sum(intgem)::int n from private.egg_bots')).rows[0].n,48);
  assert.equal((await db.query('select sum(seconds)::numeric n from private.egg_bots where not is_online')).rows[0].n,'0');
  const rows=await run(1,"select public.box_egg('ranking') r");assert.equal(rows.rows.filter(r=>r.name.endsWith(' · virtual')).length,70);
  // A session deadline immediately removes presence, even before the next worker.
  await db.exec("update private.egg_bots set session_until=now()-interval '1 second' where is_online");
  assert.equal((await run(1,'select public.box_virtual_presence() r')).active,0);
  const listed=await call(1,'list',{p_game:'egg'});assert.equal(listed.rooms.length,0);
  await db.exec("select private.egg_bot_sessions(now(),now()-interval '15 seconds')");
  assert.equal((await db.query('select count(*)::int n from private.egg_bots where is_online')).rows[0].n,0);
  // Night rest prevents immediate re-entry even if all logins are due.
  const night='2026-11-02T07:00:00Z';
  await db.query("update private.egg_bots set next_login_at=$1::timestamptz-interval '1 second'",[night]);
  sessions=(await db.query('select private.egg_bot_sessions($1,$1) r',[night])).rows[0].r;
  assert(Object.values(sessions).every(s=>!s.online&&s.seconds===0));
  assert.equal((await db.query('select count(distinct next_login_at)::int n from private.egg_bots')).rows[0].n,70);
 }finally{await db.close();}
});
