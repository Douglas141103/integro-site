import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {boxDatabase,uid} from './box-db-fixture.mjs';
import {normalizeMessage,moderate,parseReview,reviewRequest} from '../supabase/functions/box-chat/moderation.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261015010000_box_moderated_chat.sql',import.meta.url),'utf8');
const reactionsMigration=await readFile(new URL('../supabase/migrations/20261015033000_box_chat_reactions.sql',import.meta.url),'utf8');
async function setup(){const {db,call}=await boxDatabase();await db.exec(`alter table public.profiles add column school_id uuid;create role service_role; create table public.students(id uuid primary key,full_name text,school_id uuid);create table public.student_guardians(student_id uuid,guardian_profile_id uuid);insert into public.students values('${uid(50)}','Álvaro Silva',null),('${uid(51)}','Beatriz Santos',null);insert into public.student_guardians values('${uid(50)}','${uid(1)}'),('${uid(51)}','${uid(2)}');`);await db.exec(migration);await db.exec(migration);await db.exec(reactionsMigration);await db.exec(reactionsMigration);return {db,call};}
async function chat(db,n,room,student=null,report=null){return db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[uid(n)]);return (await tx.query('select public.box_chat($1,$2,$3) r',[room,student,report])).rows[0].r;});}
async function review(db,action,n,room,opts={}){return db.transaction(async tx=>{await tx.exec('set local role service_role');return (await tx.query('select public.box_chat_moderate($1,$2,$3,$4,$5,$6,$7,$8,$9) r',[action,uid(n),room,opts.student??null,opts.request??uid(90),opts.body??'Vamos correr?',opts.message??null,opts.status??null,opts.reason??null])).rows[0].r;});}
test('linked student codes, pending privacy, approval, idempotency, reports and revoked membership',async()=>{const {db,call}=await setup();try{
 const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});
 await assert.rejects(chat(db,1,a.id,uid(51)),/student_not_linked/);await assert.rejects(chat(db,1,a.id),/select_student/);
 const own=await chat(db,1,a.id,uid(50));assert.match(own.code,/^A\d+$/);assert.deepEqual(own.messages,[]);
 const first=await review(db,'reserve',1,a.id,{student:uid(50)});assert.equal(first.code,own.code);
 assert.deepEqual((await chat(db,2,a.id,uid(51))).messages,[]);
 await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select public.box_chat_moderate('finish',$1,$2,null,null,null,$3,'approved',null)",[uid(1),a.id,first.id]);}),/permission denied/);
 await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query('select * from private.box_chat_messages');}),/permission denied/);
 await review(db,'finish',1,a.id,{message:first.id,status:'approved'});let messages=(await chat(db,2,a.id,uid(51))).messages;assert.equal(messages.length,1);assert.deepEqual(Object.keys(messages[0]).sort(),['approved_at','body','code','id','my_reactions','reactions']);
 assert.equal((await review(db,'reserve',1,a.id,{student:uid(50)})).duplicate,true);
 assert.equal((await review(db,'reserve',1,a.id,{student:uid(50),request:uid(91)})).error,'rate_limit');
 await chat(db,2,a.id,uid(51),first.id);assert.equal((await db.query('select count(*)::int n from private.box_chat_reports')).rows[0].n,1);
 await call(1,'kick',{p_room:a.id,p_slot:2});await assert.rejects(chat(db,2,a.id,uid(51)),/not_member/);
 }finally{await db.close();}});
test('no delivery after leaving, blocked/error messages remain hidden and old history is removed',async()=>{const {db,call}=await setup();try{
 const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});
 const t=await review(db,'reserve',2,a.id,{student:uid(51)});await call(2,'leave',{p_room:a.id});
 assert.equal((await review(db,'finish',2,a.id,{message:t.id,status:'approved'})).status,'error');assert.equal((await chat(db,1,a.id,uid(50))).messages.length,0);
 await db.exec("update private.box_chat_messages set created_at=now()-interval '8 days'");await chat(db,1,a.id,uid(50));assert.equal((await db.query('select count(*)::int n from private.box_chat_messages')).rows[0].n,0);
 }finally{await db.close();}});
test('API failure, malformed or incomplete output never approves; each candidate gets moderated',async()=>{
 const candidate={body:'Vamos correr?',code:'A10000',context:[]};let calls=[];
 const fetcher=async(url,opts)=>{calls.push({url,body:JSON.parse(opts.body)});return {ok:true,json:async()=>url.endsWith('moderations')?{results:[{flagged:false}]}:{status:'completed',output:[{type:'message',content:[{type:'output_text',text:'{"allow":true,"reason":"safe"}'}]}]}};};
 assert.equal((await moderate(candidate,{key:'test-key',fetcher})).allow,true);assert.equal(calls.length,2);assert.equal(calls[1].body.store,false);
 await assert.rejects(moderate(candidate,{key:'test',fetcher:async()=>({ok:false})}));
 assert.throws(()=>parseReview({status:'incomplete'}));assert.throws(()=>parseReview({status:'completed',output:[]}));
 assert.equal(normalizeMessage('  O\u200bi  '),'Oi');assert.throws(()=>normalizeMessage('x'.repeat(281)));
 calls=[];assert.equal((await moderate({...candidate,body:'Meu telefone 92999998888'},{key:'test',fetcher})).allow,false);assert.equal(calls.length,1);
 assert.equal(reviewRequest(candidate).text.format.strict,true);
});
test('moderation console restricts directors by student school and permits hiding',async()=>{const {db,call}=await setup();try{
 await db.exec("alter type public.partner_role add value 'diretor'");await db.exec(`update public.profiles set role='integro_admin' where id='${uid(3)}';update public.profiles set role='diretor',school_id='${uid(70)}' where id='${uid(4)}';update public.students set school_id='${uid(71)}';`);
 const a=await call(1,'create',{p_game:'egg'});const t=await review(db,'reserve',1,a.id,{student:uid(50)});await review(db,'finish',1,a.id,{message:t.id,status:'approved'});
 const report=(n,hide=null)=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[uid(n)]);return (await tx.query('select public.box_chat_review($1) r',[hide])).rows[0].r;});
 await assert.rejects(report(1),/forbidden/);assert.equal((await report(4)).messages.length,0);await assert.rejects(report(4,t.id),/forbidden/);
 assert.equal((await report(3)).messages.length,1);await report(3,t.id);assert.equal((await chat(db,1,a.id,uid(50))).messages.length,0);
 }finally{await db.close();}});

test('reactions are idempotent per student, private, room-scoped and only on approved messages',async()=>{const {db,call}=await setup();try{
 const a=await call(1,'create',{p_game:'egg'});await call(2,'join',{p_code:a.code});const b=await call(3,'create',{p_game:'egg'});
 const first=await review(db,'reserve',1,a.id,{student:uid(50)});
 const react=(n,room,id,key,active=true,student=n===1?uid(50):n===2?uid(51):null)=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[uid(n)]);return (await tx.query('select public.box_chat_react($1,$2,$3,$4,$5) r',[room,id,key,active,student])).rows[0].r;});
 await assert.rejects(react(2,a.id,first.id,'like'),/message_not_found/);
 await review(db,'finish',1,a.id,{message:first.id,status:'approved'});
 for(const key of ['like','star','fireworks','happy']){await react(2,a.id,first.id,key);await react(2,a.id,first.id,key);}
 let m=(await chat(db,2,a.id,uid(51))).messages[0];assert.deepEqual(m.reactions,{like:1,star:1,fireworks:1,happy:1});assert.deepEqual(m.my_reactions,['fireworks','happy','like','star']);
 assert.deepEqual((await chat(db,1,a.id,uid(50))).messages[0].my_reactions,[]);
 await react(1,a.id,first.id,'like');assert.equal((await chat(db,1,a.id,uid(50))).messages[0].reactions.like,2);
 await react(2,a.id,first.id,'like',false);await react(2,a.id,first.id,'like',false);assert.equal((await chat(db,2,a.id,uid(51))).messages[0].reactions.like,1);
 await assert.rejects(react(2,a.id,first.id,'other'),/invalid_reaction/);await assert.rejects(react(2,a.id,first.id,'like',true,uid(50)),/student_not_linked/);
 await assert.rejects(react(3,a.id,first.id,'like'),/not_member/);await assert.rejects(react(3,b.id,first.id,'like'),/message_not_found/);
 await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query('select * from private.box_chat_reactions');}),/permission denied/);
 await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role anon');await tx.query('select public.box_chat_react($1,$2,$3,true,null)',[a.id,first.id,'like']);}),/permission denied/);
 await db.query("update private.box_chat_messages set status='blocked' where id=$1",[first.id]);await assert.rejects(react(2,a.id,first.id,'star'),/message_not_found/);assert.deepEqual((await chat(db,2,a.id,uid(51))).messages,[]);
 await db.query("update private.box_chat_messages set status='approved',created_at=now()-interval '8 days' where id=$1",[first.id]);await assert.rejects(react(2,a.id,first.id,'star'),/message_not_found/);
 await chat(db,1,a.id,uid(50));assert.equal((await db.query('select count(*)::int n from private.box_chat_reactions')).rows[0].n,0);
 }finally{await db.close();}});
