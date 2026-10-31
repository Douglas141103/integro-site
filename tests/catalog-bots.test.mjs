import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {BOT_GAMES,prepareParticipant,advanceParticipant,participantSnapshot,participantResult,participantPose,decodeBot} from '../supabase/functions/egg-bots/simulation.mjs';
import {reviewBotChat} from '../integro-box/egg-src/bot-chat.mjs';
const copy=x=>decodeBot(JSON.stringify(x,(_,v)=>v===Infinity?'@Infinity':v===-Infinity?'@-Infinity':v));

test('all 18 catalog games execute real inputs, resume checkpoints and keep wallets isolated',()=>{
 assert.equal(new Set(BOT_GAMES).size,18);
 for(const game of BOT_GAMES){let saved;for(let n=0;n<24;n++){
  const b=prepareParticipant(saved,23,{number:1,game,online:true},()=>n*15000);
  advanceParticipant(b,15);saved=copy(participantSnapshot(b));
  const r=participantResult(b);assert.equal(r.progress.game,game);assert(['x','y','z','yaw'].every(k=>Number.isFinite(participantPose(b)[k])));
 }
 assert(saved.games[game].actions>0,game+' did not act');assert(Math.abs(saved.games[game].seconds-360)<.001,game+' clock');
 const previous=JSON.stringify(saved.games[game]);const other=prepareParticipant(saved,23,{number:2,game:game==='math'?'words':'math',online:true});advanceParticipant(other,15);participantSnapshot(other);assert.equal(JSON.stringify(saved.games[game]),previous,game+' advanced while away');
 if(game!=='egg')assert.equal(participantResult(other).data.coins,0,'other games must not mint Egg coins');
 }
});
test('Craft camera-relative steering explores the shared world instead of sticking to an edge',()=>{
 let saved;const positions=[];
 for(let n=0;n<40;n++){const bot=prepareParticipant(saved,31,{number:1,game:'craft',online:true,world:{}});advanceParticipant(bot,15);positions.push(participantPose(bot));saved=copy(participantSnapshot(bot));}
 assert(Math.max(...positions.map(p=>p.x))-Math.min(...positions.map(p=>p.x))>15);
 assert(Math.max(...positions.map(p=>p.z))-Math.min(...positions.map(p=>p.z))>15);
 assert(positions.every(p=>p.x>=.35&&p.x<=47.65&&p.z>=.35&&p.z<=47.65));
 assert(saved.games.craft.actions>15);
});
test('existing Egg inventory migrates losslessly; offline games remain frozen',()=>{
 let b=prepareParticipant(null,12,{number:1,game:'egg',online:true});advanceParticipant(b,15);let root=copy(participantSnapshot(b));root.egg.game.save.coins=345;const egg=JSON.stringify(root.egg);
 b=prepareParticipant(root,12,{number:2,game:'interball',online:true});advanceParticipant(b,15);assert.equal(participantResult(b).data.coins,345);assert.equal(JSON.stringify(participantSnapshot(b).egg),egg);
 const before=copy(participantSnapshot(b));b=prepareParticipant(before,12,{number:2,game:'interball',online:false});advanceParticipant(b,0);assert.deepEqual(participantSnapshot(b),before);
});
test('virtual chat publishes only an approved review and fails closed on errors',async()=>{
 const calls=[],rpc=async body=>{calls.push(body);return body.p_action==='reserve'?{id:'message',body:'Boa partida!',code:'Jogador 001 · virtual',context:[]}:{status:body.p_status};};
 assert.equal(await reviewBotChat(rpc,{key:'test'},async()=>({allow:true,reason:'safe'})),'approved');assert.equal(calls.at(-1).p_status,'approved');
 calls.length=0;assert.equal(await reviewBotChat(rpc,{key:'test'},async()=>{throw Error('timeout');}),'unavailable');assert.equal(calls.at(-1).p_status,'error');assert(!calls.some(c=>c.p_status==='approved'));
 calls.length=0;assert.equal(await reviewBotChat(rpc,{},async()=>{throw Error('must not review');}),'disabled');assert.equal(calls.length,0);
});

test('140 identities rotate all games, respect human slots and moderate reportable chat',async()=>{
 const {db,run,call}=await intgemDatabase();
 try{
  await db.exec('alter table public.students add column active boolean default true');
  for(const name of ['20261021030058_room_equipped_appearance.sql','20261030211429_box_room_departure.sql','20261020210536_egg_balance_ranking.sql','20261030224808_egg_virtual_players.sql','20261031000651_egg_virtual_sessions.sql','20261031001331_egg_virtual_session_scope.sql','20261031002420_egg_virtual_push.sql','20261031032814_catalog_virtual_players.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8'));
  assert.equal((await db.query('select count(*)::int n from private.egg_bots')).rows[0].n,140);
  await db.exec("update private.egg_bot_control set enabled=true,token_hash=sha256(convert_to('test-token','UTF8')) where id;update private.egg_bots set next_login_at=now()-interval '1 minute' where id between 1 and 140");
  const day='2026-11-01T17:00:00Z';let sessions=(await db.query('select private.egg_bot_sessions($1,$1) r',[day])).rows[0].r;
  assert.equal(Object.keys(sessions).length,140);assert.equal(new Set(Object.values(sessions).map(s=>s.game)).size,18);
  for(const s of Object.values(sessions)){assert(s.online);assert.equal(s.seconds,0);}
  const visits=new Set();for(let i=0;i<18;i++){
   await db.query("update private.egg_bots set is_online=false,next_login_at=$1,session_until=$1 where id=100",[day]);
   sessions=(await db.query('select private.egg_bot_sessions($1,$1) r',[day])).rows[0].r;visits.add(sessions[100].game);
  }assert.equal(visits.size,18);
  assert.equal((await db.query("select count(*)::int n from private.egg_bots where game not in ('egg','bairro','craft') and room_id is not null")).rows[0].n,0);
  await db.exec("update private.egg_bot_control set last_tick=now()-interval '20 seconds' where id");
  const job=(await db.query("select public.box_bot_tick('test-token','claim') r")).rows[0].r;
  assert(job.lease);const results=[];
  for(let id=1;id<=140;id++){const bot=prepareParticipant(null,id,job.sessions[id]);advanceParticipant(bot,job.sessions[id].seconds);results.push({id,session:job.sessions[id].number,...participantResult(bot),pose:participantPose(bot),path:[]});}
  const committed=(await db.query("select public.box_bot_tick('test-token','commit',$1,'checkpoint',$2) r",[job.lease,JSON.stringify(results)])).rows[0].r;
  assert.equal(committed.ok,true);assert.equal((await db.query("select count(*)::int n from private.egg_bots where game_progress ? game")).rows[0].n,140);
  assert.equal((await db.query("select public.box_bot_tick('test-token','commit',$1,'checkpoint',$2) r",[job.lease,JSON.stringify(results)])).rows[0].r.error,'stale_lease');
  // Only current humans enable chat. Names are visibly virtual, never auth rows.
  assert.deepEqual((await db.query("select public.box_bot_chat('test-token','reserve') r")).rows[0].r,{empty:true});
  const room=(await call(1,'create',{p_game:'bairro'})).id;
  await db.query("update private.egg_bots set room_id=$1,game='bairro',is_online=true,seen_at=now(),session_until=now()+interval '20 minutes' where id=140",[room]);
  const candidate=(await db.query("select public.box_bot_chat('test-token','reserve') r")).rows[0].r;
  assert(candidate.id);assert.match(candidate.code,/Jogador 140 · virtual/);assert.match(candidate.body,/personagem virtual/);
  assert.deepEqual((await db.query("select public.box_bot_chat('test-token','reserve') r")).rows[0].r,{empty:true});
  const hidden=await run(1,'select public.box_chat($1) r',[room]);assert.equal(hidden.messages.length,0);
  await db.query("select public.box_bot_chat('test-token','finish',$1,'approved','safe')",[candidate.id]);
  assert.equal((await run(1,'select public.box_chat($1) r',[room])).messages.length,1);
  await run(1,'select public.box_chat($1,null,$2) r',[room,candidate.id]);assert.equal((await db.query('select count(*)::int n from private.box_chat_reports')).rows[0].n,1);
  await assert.rejects(run(1,"select public.box_bot_chat('test-token','reserve') r"),/permission denied/);
 }finally{await db.close();}
});
