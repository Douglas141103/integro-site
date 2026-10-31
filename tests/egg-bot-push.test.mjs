import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
import {createBot,pushBot,advanceBot} from '../integro-box/egg-src/egg-bot.js';
import {createEggPush} from '../integro-box/egg-push.js';
test('pushing a training virtual player interrupts the treadmill and uses bounded shared physics',()=>{
 const b=createBot(null,3);b.session=8;b.game.mode='train';b.game.player.x=5;b.game.player.z=14;
 const before=JSON.stringify(b.game.save);
 assert.equal(pushBot(b,{session:7,x:1,z:0}),false);
 assert.equal(pushBot(b,{session:8,x:1,z:0}),true);assert.equal(b.game.mode,'run');
 assert.equal(JSON.stringify(b.game.save),before);advanceBot(b,.6);
 assert(b.game.player.x>6.5);assert(b.game.player.x<=9);assert.equal(pushBot(b,{session:8,x:1,z:0}),false);
});
test('bot targeting needs no bot broadcast; accepted RPC produces immediate visible response',async()=>{
 let now=1000,shown=[],effects=[];const peer={slot:2,identity:'virtual-1',name:'Jogador 01',automated:true,state:{x:2,y:0,z:14,yaw:0,zone:'world'}};
 const client={channel(){return{on(){return this},subscribe(fn){fn('SUBSCRIBED');return this},async send(){return 'ok'}}},async removeChannel(){},async rpc(name,args){assert.equal(name,'box_egg_bot_push');assert.equal(args.p_bot,1);return{data:{ok:true,name:'Jogador 01',serverNow:now,push:{id:'push',x:1,z:0,at:now}}};}};
 const api=createEggPush({client,now:()=>now,id:()=>uid(90),getRoom:()=>({id:uid(91),game:'egg',slot:1,players:[{slot:1},peer]}),getRace:()=>null,getRuntime:()=>({active:()=>true,playing:()=>true}),getAdapter:()=>({state:()=>({x:0,y:0,z:14,yaw:0,zone:'world'}),setPeers:p=>shown=p}),onEffect:e=>effects.push(e)});
 api.tick();assert.equal(api.state().ready,true);assert.equal(await api.push(),true);now+=300;api.tick();
 assert(shown[0].state.x>3);assert.equal(effects[0].name,'Jogador 01');assert.equal(await api.push(),false);
 peer.state.botPush={id:'push',x:1,z:0,at:1000,serverNow:now,applied:true};now+=150;api.tick();assert.equal(shown[0].state.x,2,'authoritative checkpoint ends the immediate preview');
 api.stop();
});
test('server validates membership, range, cooldown and replay, then checkpoints queued impacts once',async()=>{
 const {db,call,run}=await intgemDatabase();
 try{
  await db.exec('alter table public.students add column active boolean default true');
  for(const file of ['20261021030058_room_equipped_appearance.sql','20261030211429_box_room_departure.sql','20261020210536_egg_balance_ranking.sql','20261030224808_egg_virtual_players.sql','20261031000651_egg_virtual_sessions.sql','20261031001331_egg_virtual_session_scope.sql','20261031002420_egg_virtual_push.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+file,import.meta.url),'utf8'));
  const room=(await db.query('select room_id from private.egg_bots where id=1')).rows[0].room_id;
  await db.exec("update private.egg_bot_control set enabled=true;update private.egg_bots set is_online=false,next_login_at=now()+interval '1 hour';");
  await db.query("update private.egg_bots set is_online=true,session_started_at=now()-interval '1 minute',session_until=now()+interval '20 minutes',seen_at=now(),pose=$1,path='[]' where id=1",[{x:2,y:0,z:14,yaw:0,zone:'world'}]);
  await call(1,'join_public',{p_room:room});
  const push=(n,request=90)=>run(n,'select public.box_egg_bot_push($1,1,$2) r',[room,uid(request)]);
  assert.equal((await push(2)).error,'not_member');
  const sync=async(x)=>{await db.exec("update private.box_limits set last_sync='-infinity'");return call(1,'sync',{p_room:room,p_state:{x,y:0,z:14,yaw:0,zone:'world'}});};
  await sync(8);assert.equal((await push(1)).error,'out_of_range');
  await sync(0);const accepted=await push(1);assert.equal(accepted.ok,true);assert.equal(accepted.name,'Jogador 01');
  assert.equal((await push(1)).duplicate,true);assert.equal((await push(1,92)).error,'cooldown');
  assert.equal((await db.query('select jsonb_array_length(push_queue) n from private.egg_bots where id=1')).rows[0].n,1);
  const token='c'.repeat(64);await db.query("update private.egg_bot_control set token_hash=sha256(convert_to($1,'UTF8')),last_tick=now()-interval '15 seconds'",[token]);
  const job=(await db.query("select public.box_bot_tick($1,'claim') r",[token])).rows[0].r;assert.equal(job.pushes['1'].length,1);
  const result=Array.from({length:70},(_,i)=>({id:i+1,session:job.sessions[i+1].number,data:{coins:0},pose:{x:2,y:0,z:14,yaw:0,zone:'world'},path:[]}));
  assert.equal((await db.query("select public.box_bot_tick($1,'commit',$2,'snapshot',$3) r",[token,job.lease,result])).rows[0].r.ok,true);
  assert.equal((await db.query('select jsonb_array_length(push_queue) n from private.egg_bots where id=1')).rows[0].n,0);
  assert.equal((await db.query("select count(*)::int n from private.egg_bots where name='Jogador '||lpad(id::text,2,'0')")).rows[0].n,70);
 }finally{await db.close();}
});
