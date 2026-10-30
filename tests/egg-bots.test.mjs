import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createBot,advanceBot,encodeBot,decodeBot,botSnapshot} from '../integro-box/egg-src/egg-bot.js';
import {intgemDatabase} from './intgem-db-fixture.mjs';
const read=n=>readFile(new URL('../supabase/migrations/'+n,import.meta.url),'utf8');
test('70 newcomers explore immediately, stagger their short workouts and survive checkpoints without extending training',()=>{
 const bots=Array.from({length:70},(_,i)=>createBot(null,(i+1)*7919));
 const training=Array(70).fill(0);let longest=0,maxSimultaneous=0,hunts=new Set(),trained=new Set();
 for(let second=0;second<180;second++){
  let simultaneous=0;
  for(let i=0;i<bots.length;i++){
   const b=bots[i];advanceBot(b,1);
   if(b.game.mode==='train'){training[i]++;longest=Math.max(longest,training[i]);simultaneous++;trained.add(i);}else training[i]=0;
   if(b.game.player.z<-10)hunts.add(i);
   if(second%15===0)bots[i]=createBot(decodeBot(encodeBot(b)),(i+1)*7919);
  }
  maxSimultaneous=Math.max(maxSimultaneous,simultaneous);
 }
 assert(longest<=26,`workout lasted ${longest}s`);
 assert(maxSimultaneous<40,`${maxSimultaneous} bots trained together`);
 assert(hunts.size>=65,`${hunts.size} explorers tried the track`);assert(trained.size>=60);
 assert(new Set(bots.map(b=>[Math.round(b.game.player.x),Math.round(b.game.player.z)].join(','))).size>10);
});
test('existing treadmill-only checkpoints exit safely and preserve earned progress',()=>{
 const old=createBot(null,7);old.game.mode='train';old.game.player={x:5,z:14,y:0,vy:0};old.game.save.training=19;old.game.save.coins=73;
 const checkpoint=botSnapshot(old);checkpoint.brain={world:0,trainTo:30,yaw:0};
 const resumed=createBot(checkpoint,7919);assert.equal(resumed.game.mode,'run');
 assert.equal(resumed.game.save.training,19);assert.equal(resumed.game.save.coins,73);
 advanceBot(resumed,15);assert(resumed.game.player.x!==5||resumed.game.player.z!==14);
});
test('virtual character earns progress through the shared rules, persists physics and cannot skip elapsed time',()=>{
 const bot=createBot(null,42),g=bot.game;
 assert.equal(g.save.coins,0);assert.deepEqual(g.save.vehicles,[]);
 advanceBot(bot,100000);assert(Math.abs(g.time-15)<1e-6);assert.equal(g.save.coins,0);assert(g.save.training<5);
 for(let t=15;t<3600;t+=15)advanceBot(bot,15);
 assert(g.save.delivered>0);assert(g.save.coins>0);assert(g.save.training>0);assert(g.save.vehicles.length>0);
 const resumed=createBot(decodeBot(encodeBot(bot)));
 assert.deepEqual(resumed.game.player,g.player);assert.equal(resumed.game.time,g.time);assert.equal(resumed.game.save.coins,g.save.coins);
 assert.equal(g.buy('jetImperial'),false);assert(!g.save.vehicles.includes('jetImperial'));
 advanceBot(bot,10);advanceBot(resumed,10);
 assert.equal(resumed.game.save.coins,g.save.coins);assert.deepEqual(resumed.game.player,g.player);
});
test('worker authentication, replay protection, daily reward, honest presence, room slots and one ranking',async()=>{
 const {db,call,run}=await intgemDatabase();
 try{
  await db.exec('alter table public.students add column active boolean default true');
  for(const n of ['20261021030058_room_equipped_appearance.sql','20261030211429_box_room_departure.sql','20261020210536_egg_balance_ranking.sql','20261030224808_egg_virtual_players.sql'])await db.exec(await read(n));
  assert.equal((await db.query('select count(*)::int n from private.egg_bots')).rows[0].n,70);
  await assert.rejects(run(1,"select public.box_bot_tick('abc','claim') r"),/permission denied/);
  const token='a'.repeat(64);
  const tick=async(action,lease=null,results=null)=>(await db.query('select public.box_bot_tick($1,$2,$3,$4,$5) r',[token,action,lease,results?'compressed-fixture':null,results])).rows[0].r;
  assert.equal((await tick('claim')).error,'unauthorized');
  await db.query("update private.egg_bot_control set enabled=true,token_hash=sha256(convert_to($1,'UTF8')),last_tick=now()-interval '15 seconds'",[token]);
  const job=await tick('claim');assert(job.lease);assert.equal((await tick('claim')).busy,true);
  const results=Array.from({length:70},(_,i)=>({id:i+1,data:{coins:i*10,training:1,vehicles:[]},pose:{x:0,y:0,z:14,yaw:0,zone:'world'},path:[[0,0,14,0]]}));
  assert.equal((await tick('commit',job.lease,results)).ok,true);
  assert.equal((await tick('commit',job.lease,results)).error,'stale_lease');
  assert.equal((await run(1,'select public.box_virtual_presence() r')).active,70);
  const listed=await call(1,'list',{p_game:'egg'});assert.equal(listed.rooms.length,24);assert(listed.rooms.every(r=>r.joinable));
  const room=listed.rooms.find(r=>r.players===3).id;
  for(let n=1;n<=4;n++){
   const response=await call(n,'join_public',{p_room:room});assert.equal(response.players.length,4);
   assert.equal(new Set(response.players.map(p=>p.slot)).size,4);assert.equal(response.players.filter(p=>p.automated).length,4-n);
  }
  assert.equal((await call(5,'join_public',{p_room:room})).error,'room_full');
  assert.equal((await call(1,'close',{p_room:room})).error,'not_owner');
  assert.equal((await call(1,'kick',{p_room:room,p_slot:2})).error,'not_owner');
  await call(4,'leave',{p_room:room});
  await db.exec("update private.box_limits set last_sync='-infinity'");
  const synced=await call(1,'sync',{p_room:room,p_state:{x:0,y:0,z:15,yaw:0,zone:'world'}});
  assert.equal(synced.players.filter(p=>p.automated).length,1);
  const rank=await run(1,"select public.box_egg('ranking') r");assert.equal(rank.rows.filter(r=>r.name.endsWith(' · virtual')).length,70);
  assert.equal(rank.rows[0].integros,690);
  await db.exec("update private.egg_bot_control set last_tick=now()-interval '15 seconds';update private.egg_bots set day_seconds=299");
  const rewardJob=await tick('claim');await tick('commit',rewardJob.lease,results);
  assert.equal((await db.query('select sum(intgem)::int n from private.egg_bots')).rows[0].n,70);
  await db.exec("update private.egg_bot_control set last_tick=now()-interval '15 seconds'");
  const again=await tick('claim');await tick('commit',again.lease,results);
  assert.equal((await db.query('select sum(intgem)::int n from private.egg_bots')).rows[0].n,70);
  await db.exec("update private.egg_bots set seen_at=now()-interval '46 seconds'");
  assert.equal((await run(1,'select public.box_virtual_presence() r')).active,0);
  await db.exec("update private.box_limits set last_sync='-infinity'");
  assert.equal((await call(1,'sync',{p_room:room,p_state:{x:0,y:0,z:15,yaw:0,zone:'world'}})).players.length,3);
 }finally{await db.close();}
});
