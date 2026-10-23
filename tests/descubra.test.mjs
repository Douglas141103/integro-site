import test from 'node:test';import assert from 'node:assert/strict';
import {SoloGame,initialState,action,tick,publicView,resolveVote} from '../integro-box/descubra-src/rules.mjs';
import {descubraDatabase,userId} from './descubra-fixture.mjs';
test('solo bots, legal room travel, tasks only once and hidden role',()=>{const g=new SoloGame('crew',()=>.5);assert.equal(g.state.traitor,4);assert.equal(g.view().traitor,undefined);assert.equal(g.act('move',{room:1}),true);assert.equal(g.act('move',{room:2}),false);assert.equal(g.act('task'),true);assert.equal(g.act('task'),false);assert.equal(g.state.progress,1);assert.equal(g.act('sabotage'),false);g.update(1);assert.equal(g.act('move',{room:6}),true);});
test('infiltrator cooldown, same-room stun, sabotage deadline and repair',()=>{const s=initialState(0);assert.equal(action(s,1,'stun',{target:2},1),false);assert.equal(action(s,1,'stun',{target:2},23),true);assert.equal(s.players[1].alive,false);assert.equal(action(s,1,'stun',{target:3},24),false);assert.equal(action(s,2,'move',{room:2},24),false);assert.equal(action(s,1,'sabotage',{},31),true);tick(s,77,()=>1);assert.equal(s.winner,'infiltrator');const v=initialState();action(v,1,'sabotage',{},31);action(v,2,'move',{room:2},32);assert.equal(action(v,2,'repair',{},33),true);assert.equal(v.sabotage,null);});
test('tie skips, dead players cannot vote, ejecting infiltrator wins and reveals',()=>{const s=initialState();s.phase='meeting';s.players.forEach(p=>p.bot=false);for(let i=0;i<6;i++)s.players[i].vote=i<3?1:2;resolveVote(s,30);assert.equal(s.players.filter(p=>p.alive).length,6);s.phase='meeting';s.players.forEach(p=>p.vote=1);resolveVote(s,60);assert.equal(s.winner,'crew');assert.equal(publicView(s,2,60).reveal,1);assert.equal(action(s,2,'vote',{target:0},70),false);});
test('bot simulations always terminate and never leak the secret in a public view',()=>{for(let seed=1;seed<=20;seed++){let n=seed;const rand=()=>((n=(n*1664525+1013904223)>>>0)/4294967296);const g=new SoloGame('crew',rand);for(let t=0;t<400;t++){g.update(1);assert.equal('traitor' in g.view(),false);}assert.equal(g.state.phase,'ended');}});
test('online lobby auth, privacy, capacity, authorization, tasks, votes and closure',async()=>{const {db,call}=await descubraDatabase();try{
 await assert.rejects(call(0,'list'),/authentication_required/);
 const a=await call(1,'create',{public:false});assert.equal(a.phase,'lobby');assert.equal(a.role,null);assert.equal(a.players.filter(p=>!p.bot).length,1);assert.equal(a.traitor,undefined);assert.equal((await call(2,'list')).rooms.length,0);assert.equal((await call(2,'join',{id:a.id})).error,'room_unavailable');
 const b=await call(2,'join',{code:a.code});assert.equal(b.slot,2);assert.equal((await call(3,'sync',{room:a.id})).error,'not_member');assert.equal((await call(2,'start',{room:a.id})).error,'not_owner');
 for(let i=3;i<=6;i++)assert.equal((await call(i,'join',{code:a.code})).slot,i);assert.equal((await call(7,'join',{code:a.code})).error,'room_full');
 await db.exec('set role authenticated');await assert.rejects(db.query('select * from private.descubra_rooms'),/permission denied/);await assert.rejects(db.query('select private.descubra_initial(0)'),/permission denied/);await db.exec('reset role');
 let match=await call(1,'start',{room:a.id});assert.equal(match.phase,'play');assert.equal(match.traitor,undefined);assert.equal(match.reveal,null);assert.equal((await call(7,'join',{code:a.code})).error,'started');
 const secret=(await db.query('select state from private.descubra_rooms where id=$1',[a.id])).rows[0].state.traitor;
 const crew=secret===1?2:1;assert.equal((await call(crew,'sabotage',{room:a.id})).error,'invalid_action');
 let moved=await call(crew,'move',{room:a.id,destination:1});assert.equal(moved.players[crew-1].room,1);
 assert.equal((await call(crew,'move',{room:a.id,destination:2})).error,'invalid_action');
 assert.equal((await call(crew,'task',{room:a.id})).error,'invalid_action');
 await db.query("update private.descubra_rooms set state=jsonb_set(state,$2,to_jsonb(extract(epoch from now())-5)) where id=$1",[a.id,['players',String(crew-1),'cooldown']]);
 let completed=await call(crew,'task',{room:a.id});assert.equal(completed.progress,1);assert.equal((await call(crew,'task',{room:a.id})).error,'invalid_action');
 await call(crew,'move',{room:a.id,destination:6});
 const state=match; // establish a deterministic voting scene, no bots in this match.
 await db.query("update private.descubra_rooms set state=jsonb_set(state,'{lastTick}',to_jsonb(extract(epoch from now()))) where id=$1",[a.id]);
 let meeting=await call(1,'meeting',{room:a.id});assert.equal(meeting.phase,'meeting');
 for(let i=1;i<=6;i++)match=await call(i,'vote',{room:a.id,target:secret});assert.equal(match.phase,'ended');assert.equal(match.winner,'crew');assert.equal(match.reveal,secret);
 await call(1,'leave',{room:a.id});assert.equal((await call(2,'sync',{room:a.id})).error,'room_unavailable');
 const pub=await call(7,'create',{public:true});assert.equal((await call(8,'list')).rooms[0].id,pub.id);assert.equal((await call(8,'join',{id:pub.id})).slot,2);assert.equal((await call(8,'kick',{room:pub.id,target:1})).error,'not_owner');await call(7,'kick',{room:pub.id,target:2});assert.equal((await call(8,'sync',{room:pub.id})).error,'not_member');
 }finally{await db.close();}});
