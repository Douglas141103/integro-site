import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {DirectRoom,directView} from '../aulas-online/direct-room.mjs';
import {JSDOM} from 'jsdom';
const uid=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
test('direct calls enforce role, family, unique seats, private signaling, expiry and end',async()=>{
 const db=new PGlite();
 try{
  await db.exec(`create schema auth;create schema storage;create role anon;create role authenticated;
   create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.uid',true),'')::uuid$$;
   grant usage on schema auth to authenticated;
   create table public.profiles(id uuid primary key,full_name text,role text,active boolean default true);
   create table public.students(id uuid primary key,full_name text,active boolean default true);
   create table public.student_guardians(student_id uuid,guardian_profile_id uuid);
   create table public.student_teachers(student_id uuid,teacher_profile_id uuid);
   create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
   create table storage.objects(bucket_id text,name text);alter table storage.objects enable row level security;
   insert into public.profiles values('${uid(1)}','Teacher','professor',true),('${uid(2)}','Other teacher','professor',true),('${uid(3)}','Family','responsavel',true),('${uid(4)}','Other family','responsavel',true);
   insert into public.students select ('00000000-0000-4000-8000-'||lpad(s::text,12,'0'))::uuid,'Pupil '||s,true from generate_series(10,14)s;
   insert into public.student_teachers select id,'${uid(1)}'::uuid from public.students;
   insert into public.student_guardians select id,'${uid(3)}'::uuid from public.students;
   insert into public.student_guardians values('${uid(10)}','${uid(4)}');`);
  await db.exec(await readFile(new URL('../supabase/online-classrooms.sql',import.meta.url),'utf8'));
  await db.exec(await readFile(new URL('../supabase/online-direct.sql',import.meta.url),'utf8'));
  await db.exec(await readFile(new URL('../supabase/migrations/20261022040914_online_room_moderation.sql',import.meta.url),'utf8'));
  const call=(n,fn,a,d={})=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);return(await tx.query(`select public.${fn}($1,$2) result`,[a,d])).rows[0].result;});
  const portal=(n,a,d)=>call(n,'online_portal',a,d);
  const rtc=(n,a,d)=>call(n,'online_call',a,d);
  const c=await portal(1,'class_create',{title:'Direct',teacher_id:uid(1)});
  for(let n=10;n<14;n++)await portal(1,'enroll',{class_id:c.id,student_id:uid(n)});
  const l=await portal(1,'lesson_create',{class_id:c.id,title:'Direct',starts_at:new Date(Date.now()-60000).toISOString(),ends_at:new Date(Date.now()+5400000).toISOString()});
  const data=(n,extra={})=>({lesson_id:l.id,client_id:uid(100+n),protocol:3,...extra});
  await assert.rejects(rtc(0,'health'),/conta/);
  await assert.rejects(rtc(3,'join',data(3,{student_id:uid(10)})),/Aguarde/);
  await assert.rejects(rtc(2,'start',data(2)),/autorizada/);
  const teacher=await rtc(1,'start',data(1));assert.equal(teacher.isTeacher,true);
  const pupils=[];
  for(let n=10;n<14;n++)pupils.push(await rtc(3,'join',data(n,{student_id:uid(n)})));
  assert.equal(pupils[3].peers.length,5);
  const phone=await rtc(1,'start',data(2));
  assert.equal(phone.peers.length,6);assert.notEqual(phone.member_id,teacher.member_id);
  assert.equal(phone.coordinator_id,teacher.member_id);
  assert.equal((await rtc(1,'start',data(2))).member_id,phone.member_id);
  await assert.rejects(rtc(1,'start',data(3)),/dois dispositivos/);
  const phoneContext=data(2,{member_id:phone.member_id});
  await rtc(1,'leave',phoneContext);
  assert.equal((await rtc(3,'poll',data(10,{member_id:pupils[0].member_id}))).peers.length,5);
  await assert.rejects(rtc(1,'start',data(2,{protocol:1})),/Atualize/);
  await assert.rejects(rtc(3,'join',data(14,{student_id:uid(14)})),/autorizada/);
  await assert.rejects(rtc(4,'join',data(44,{student_id:uid(10)})),/já está/);
  await assert.rejects(rtc(3,'start',data(10,{student_id:uid(10)})),/professor/);
  await assert.rejects(rtc(3,'end',data(10)),/professor/);
  const tm=data(1,{member_id:teacher.member_id});const sm=data(10,{member_id:pupils[0].member_id});
  await assert.rejects(rtc(3,'moderate',{...sm,target_id:pupils[1].member_id,operation:'mute'}),/professor/);
  await assert.rejects(rtc(2,'moderate',{...tm,target_id:pupils[1].member_id,operation:'mute'}).then(r=>{if(r.closed)throw Error('closed');}),/closed/);
  await assert.rejects(rtc(1,'moderate',{...tm,target_id:teacher.member_id,operation:'remove'}),/indisponível/);
  await assert.rejects(rtc(1,'moderate',{...tm,target_id:uid(999),operation:'mute'}),/indisponível/);
  await assert.rejects(rtc(1,'moderate',{...tm,target_id:pupils[0].member_id,operation:'unmute'}),/inválido/);
  await rtc(1,'moderate',{...tm,target_id:pupils[0].member_id,operation:'mute'});
  assert.equal((await rtc(3,'poll',sm)).micBlocked,true);
  assert.equal((await rtc(1,'poll',tm)).peers.find(p=>p.id===pupils[0].member_id).micBlocked,true);
  await rtc(1,'moderate',{...tm,target_id:pupils[0].member_id,operation:'release'});
  assert.equal((await rtc(3,'poll',sm)).micBlocked,false);
  const kickedContext=data(13,{member_id:pupils[3].member_id});
  await rtc(1,'moderate',{...tm,target_id:pupils[3].member_id,operation:'remove'});
  assert.equal((await rtc(3,'poll',kickedContext)).closed,true);
  const back=await rtc(3,'join',data(13,{student_id:uid(13)}));assert.notEqual(back.member_id,pupils[3].member_id);
  await rtc(3,'leave',kickedContext); // Old tab cannot close the new connection.
  assert.equal((await rtc(3,'poll',data(13,{member_id:back.member_id}))).closed,undefined);
  pupils[3]=back;
  const desc={type:'offer',sdp:'v=0'};
  await rtc(1,'signal',{...tm,recipient:pupils[0].member_id,description:desc,sender:pupils[1].member_id});
  const polled=await rtc(3,'poll',sm);assert.equal(polled.messages[0].sender,teacher.member_id);
  assert.equal((await rtc(3,'poll',data(11,{member_id:pupils[1].member_id}))).messages.length,0);
  assert.equal((await rtc(4,'poll',sm)).closed,true);
  assert.equal((await rtc(3,'poll',{...sm,client_id:uid(999)})).closed,true);
  await assert.rejects(rtc(1,'signal',{...tm,recipient:uid(999),description:desc}),/indisponível/);
  await assert.rejects(rtc(1,'signal',{...tm,recipient:pupils[0].member_id,description:{type:'offer',sdp:'x'.repeat(66000)}}),/inválida/);
  for(let n=0;n<23;n++)await rtc(1,'signal',{...tm,recipient:pupils[0].member_id,description:desc});
  await assert.rejects(rtc(1,'signal',{...tm,recipient:pupils[0].member_id,description:desc}),/Aguarde/);
  await db.transaction(async tx=>{await tx.exec('set local role authenticated');await assert.rejects(tx.query('select * from private.online_call_signals'));});
  // Revocation is reflected on the next poll, including media roster removal.
  await db.query('delete from public.student_guardians where student_id=$1 and guardian_profile_id=$2',[uid(11),uid(3)]);
  assert.equal((await rtc(1,'poll',tm)).peers.length,4);
  assert.equal((await rtc(3,'poll',data(11,{member_id:pupils[1].member_id}))).closed,true);
  await db.query("update private.online_call_members set seen_at=now()-interval '46 seconds' where id=$1",[pupils[0].member_id]);
  assert.equal((await rtc(3,'poll',sm)).closed,true);
  const rejoined=await rtc(4,'join',data(44,{student_id:uid(10)}));assert.notEqual(rejoined.member_id,pupils[0].member_id);
  const replacement=await rtc(1,'start',data(2));
  await rtc(1,'leave',tm);
  const continuing=await rtc(3,'poll',data(12,{member_id:pupils[2].member_id}));
  assert.equal(continuing.closed,undefined);assert.equal(continuing.coordinator_id,replacement.member_id);
  await rtc(1,'leave',data(2,{member_id:replacement.member_id}));
  assert.equal((await rtc(3,'poll',data(12,{member_id:pupils[2].member_id}))).closed,true);
  await assert.rejects(rtc(3,'join',data(12,{student_id:uid(12)})),/professor/);
  await rtc(1,'start',data(1));const lastPhone=await rtc(1,'start',data(2));await rtc(1,'end',data(1));
  assert.equal((await rtc(1,'poll',data(2,{member_id:lastPhone.member_id}))).closed,true);
  await assert.rejects(rtc(1,'start',data(1)),/encerrada/);
  assert.equal((await db.query('select count(*) n from private.online_call_signals')).rows[0].n,0);
 }finally{await db.close();}
});

test('second device audio starts muted, can be enabled, and new tracks respect mute',async()=>{
 const dom=new JSDOM('<div id="videos"></div><div id="audio"></div>');
 const oldDocument=globalThis.document,oldStream=globalThis.MediaStream;
 globalThis.document=dom.window.document;globalThis.MediaStream=class {constructor(tracks){this.tracks=tracks;}};
 dom.window.HTMLMediaElement.prototype.play=async()=>{};
 try{
  const audio=document.querySelector('#audio');
  const view=directView({videos:document.querySelector('#videos'),audio,audioMuted:true,status(){},controls(){},closed(){}});
  view.track('pupil','audio',{},false);assert.equal(audio.firstChild.muted,true);
  await view.muteAudio(false);assert.equal(audio.firstChild.muted,false);
  await view.muteAudio(true);view.track('teacher','audio',{},false);
  assert.ok([...audio.children].every(el=>el.muted));
 }finally{globalThis.document=oldDocument;globalThis.MediaStream=oldStream;dom.window.close();}
});

test('camera requested only on click, stopped on exit, and late permission cannot leak a track',async()=>{
 let requested=0,stopped=0,release;
 const fakeTrack={stop(){stopped++;}};
 const view={participant(){},status(){},controls(){},track(){},closed(){},remove(){}};
 const room=new DirectRoom({call:async()=>({ok:true}),admission:{member_id:uid(1),name:'Teacher',isTeacher:true,peers:[]},context:{},view,mediaDevices:{getUserMedia(){requested++;return new Promise(resolve=>{release=resolve;});}}});
 await room.start();assert.equal(requested,0);
 const media=room.setMedia('camera',true);assert.equal(requested,1);
 await room.disconnect();release({getTracks:()=>[fakeTrack]});await media;assert.equal(stopped,1);assert.equal(room.localParticipant.isCameraEnabled,false);
});

test('answerer uses offered transceivers rather than creating unused sending slots',async()=>{
 const sent=[],offered=['audio','camera','screen'].map(slot=>({direction:'recvonly',sender:{replaceTrack:async track=>sent.push([slot,track]),getParameters:()=>({encodings:[]})}}));
 const pc={createDataChannel:()=>({readyState:'connecting'}),addTransceiver(){throw Error('Answerer must not pre-create transceivers');},setRemoteDescription:async()=>{},getTransceivers:()=>offered,createAnswer:async()=>({type:'answer',sdp:'v=0'}),setLocalDescription:async()=>{},iceGatheringState:'complete',localDescription:{toJSON:()=>({type:'answer',sdp:'v=0'})},close(){}};
 const view={participant(){},status(){},closed(){}};
 const room=new DirectRoom({call:async()=>({ok:true}),admission:{member_id:'z',isTeacher:true},context:{},view,rtcFactory:()=>pc,mediaDevices:{}});
 const peer=room.addPeer({id:'a',name:'Pupil',isTeacher:false});room.tracks.audio={stop(){}};
 await room.receive(peer,{type:'offer',sdp:'v=0'});
 assert.equal(peer.senders.length,3);assert.equal(sent[0][1],room.tracks.audio);assert.ok(offered.every(t=>t.direction==='sendrecv'));
 await room.disconnect();
});

test('teacher mute stops capture, blocks reacquisition, and release never opens a microphone',async()=>{
 let opened=0,stopped=0;const controls=[],moderation=[];
 const view={participant(){},status(){},controls:p=>controls.push(p.isMicrophoneEnabled),moderation:b=>moderation.push(b),track(){},closed(){},remove(){},roster(){},blockAudio(){}};
 const room=new DirectRoom({call:async()=>({ok:true}),admission:{member_id:'self',name:'Student',isTeacher:false,peers:[]},context:{},view,mediaDevices:{getUserMedia:async()=>{opened++;return {getTracks:()=>[{stop(){stopped++;}}]};}}});
 await room.setMedia('audio',true);assert.equal(room.localParticipant.isMicrophoneEnabled,true);
 await room.sync({peers:[],micBlocked:true});assert.equal(stopped,1);assert.equal(room.localParticipant.isMicrophoneEnabled,false);
 await assert.rejects(room.setMedia('audio',true),/professor/);assert.equal(opened,1);
 await room.sync({peers:[],micBlocked:false});assert.equal(opened,1);assert.equal(room.localParticipant.isMicrophoneEnabled,false);
 await room.setMedia('audio',true);assert.equal(opened,2);await room.disconnect();
 assert.deepEqual(moderation,[true,false]);
});

test('teacher mute wins while microphone permission prompt is still pending',async()=>{
 let release,stopped=0;
 const view={participant(){},status(){},controls(){},track(){},closed(){},remove(){}};
 const room=new DirectRoom({call:async()=>({ok:true}),admission:{member_id:'self',isTeacher:false,peers:[]},context:{},view,mediaDevices:{getUserMedia:()=>new Promise(resolve=>{release=resolve;})}});
 const pending=room.setMedia('audio',true);await room.sync({peers:[],micBlocked:true});
 release({getTracks:()=>[{stop(){stopped++;}}]});await pending;
 assert.equal(stopped,1);assert.equal(room.localParticipant.isMicrophoneEnabled,false);await room.disconnect();
});

test('device sound control cannot override a teacher-muted remote participant',async()=>{
 const dom=new JSDOM('<div id="videos"></div><div id="audio"></div>');const previous={document:globalThis.document,MediaStream:globalThis.MediaStream};
 globalThis.document=dom.window.document;globalThis.MediaStream=class{};dom.window.HTMLMediaElement.prototype.play=async()=>{};
 try{const audio=document.querySelector('#audio'),view=directView({videos:document.querySelector('#videos'),audio,status(){},controls(){},closed(){}});
  view.blockAudio('a',true);view.track('a','audio',{},false);assert.equal(audio.firstChild.muted,true);
  await view.muteAudio(false);assert.equal(audio.firstChild.muted,true);
  view.blockAudio('a',false);assert.equal(audio.firstChild.muted,false);
 }finally{Object.assign(globalThis,previous);dom.window.close();}
});
