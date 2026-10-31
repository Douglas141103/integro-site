import test from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import {readFile} from 'node:fs/promises';import {transform} from '../integro-box/egg-src/node_modules/esbuild/lib/main.js';
const source=(await transform(await readFile(new URL('../supabase/functions/egg-bots/index.ts',import.meta.url),'utf8'),{loader:'ts',format:'cjs'})).code;
async function run(failCommit){
 let handler;const requests=[],logs=[];const simulation={prepareParticipant:()=>({}),participantPush(){},advanceParticipant(){},participantPose:()=>({x:0,y:0,z:0,yaw:0}),participantSnapshot:()=>({}),participantResult:()=>({data:{coins:0}}),decodeBot:JSON.parse};
 vm.runInNewContext(source,{require:name=>name==='./simulation.mjs'?simulation:name==='./chat.mjs'?{reviewBotChat:async()=> 'quiet'}:{packCheckpoint:()=> 'checkpoint',unpackCheckpoint:()=>({})},exports:{},Response,console:{error:(...a)=>logs.push(a.join(' '))},Deno:{env:{get:()=> 'private-value'},serve:fn=>handler=fn},fetch:async(_,opts)=>{
  const body=JSON.parse(opts.body);requests.push(body);
  if(body.p_action==='claim')return Response.json({lease:'current-lease',now:100000,seconds:0});
  if(body.p_action==='commit'&&failCommit)return Response.json({code:'57014',message:'sensitive internal details'},{status:500});
  return Response.json({ok:true,participants:60});
 }});
 const response=await handler(new Request('https://test.example',{method:'POST',headers:{'x-bot-key':'a'.repeat(64)}}));return{response,requests,logs};
}
test('failed checkpoint releases only its lease and never logs credentials or server details',async()=>{
 const {response,requests,logs}=await run(true);assert.equal(response.status,503);assert.deepEqual(requests.map(r=>r.p_action),['claim','commit','abort']);assert.equal(requests[2].p_lease,'current-lease');assert.match(logs[0],/500:57014/);assert(!logs.join('').includes('sensitive'));assert(!logs.join('').includes('private-value'));assert(!logs.join('').includes('a'.repeat(64)));
});
test('successful checkpoint does not abort and still submits every participant',async()=>{
 const {response,requests}=await run(false);assert.equal(response.status,200);assert.deepEqual(requests.map(r=>r.p_action),['claim','commit']);assert.equal(requests[1].p_results.length,140);
});
