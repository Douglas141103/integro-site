import test from 'node:test';import assert from 'node:assert/strict';import http from 'node:http';import {createApp,livekitToken,participantGrant} from './server.mjs';
const lesson='00000000-0000-4000-8000-000000000001';
const config={apiKey:'testkey',apiSecret:'x'.repeat(48),allowedOrigins:['https://www.institutointegro.com.br'],supabaseUrl:'https://example.supabase.co',publishableKey:'public',livekitInternal:'http://127.0.0.1:7880',livekitPublic:'ws://127.0.0.1:7880'};
test('tokens are room-scoped, short-lived, and do not grant students moderation or screen sharing',()=>{
 const grant=participantGrant({room:'test',is_teacher:false});assert.deepEqual(grant.canPublishSources,['camera','microphone']);assert.equal(grant.roomAdmin,undefined);
 const token=livekitToken(config,'student',grant);const p=JSON.parse(Buffer.from(token.split('.')[1],'base64url'));assert.ok(p.exp-Math.floor(Date.now()/1000)<=120);assert.equal(p.video.room,'test');
});
test('HTTP gateway rejects foreign origins and missing authentication; starts five-seat room only for teacher',async()=>{
 let created;const rooms=[];
 const app=createApp(config,{fetch:async(url,opts)=>{
  const data=JSON.parse(opts.body);let result={};
  if(url.includes('/rpc/'))result=data.p_action==='lesson_status'?{ok:true}:{room:'integro-'+lesson,is_teacher:opts.headers.Authorization==='Bearer teacher',identity:'opaque',status:'live',ends_at:new Date(Date.now()+60000).toISOString()};
  else if(url.endsWith('ListRooms'))result={rooms};
  else if(url.endsWith('CreateRoom')){created=data;rooms.push({name:data.name});}
  return new Response(JSON.stringify(result),{status:200,headers:{'Content-Type':'application/json'}});
 }});
 const server=http.createServer(app.handler);await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;
 const request=(token,origin='https://www.institutointegro.com.br')=>fetch(url+'/api/start',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify({lesson_id:lesson})});
 try{assert.equal((await request(null)).status,401);assert.equal((await request('teacher','https://evil.example')).status,403);assert.equal((await request('student')).status,403);const response=await request('teacher');assert.equal(response.status,200);assert.equal(created.maxParticipants,5);assert.ok((await response.json()).token);}finally{await new Promise(r=>server.close(r));}
});
