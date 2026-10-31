import {prepareParticipant,participantPush,advanceParticipant,participantPose,participantSnapshot,participantResult,decodeBot} from './simulation.mjs';

import {reviewBotChat} from './chat.mjs';

import {packCheckpoint,unpackCheckpoint,gameCheckpoint} from './checkpoint.mjs';

Deno.serve(async req=>{
 if(req.method!=='POST')return new Response('Method not allowed',{status:405});
 const token=req.headers.get('x-bot-key');
 if(!token||!/^[0-9a-f]{64}$/.test(token))return new Response('Unauthorized',{status:401});
 const url=Deno.env.get('SUPABASE_URL'),key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
 async function rpc(body:Record<string,unknown>,name='box_bot_tick'){
  const r=await fetch(url+'/rest/v1/rpc/'+name,{method:'POST',headers:{'Content-Type':'application/json',apikey:key!,Authorization:'Bearer '+key},body:JSON.stringify({p_token:token,...body})});
  if(!r.ok){const detail=await r.json().catch(()=>({}));const code=/^[A-Z0-9]{5}$/.test(detail.code||'')?detail.code:'unknown';throw new Error('checkpoint_rpc_failed:'+r.status+':'+code);}return await r.json();
 }
 let lease:string|null=null;
 try{
  const job=await rpc({p_action:'claim'});
  if(job.error)return Response.json({error:'unauthorized'},{status:401});
  if(job.busy)return Response.json({busy:true});
  lease=job.lease;
  const sharded=job.format==='sharded-v1';
  const saved=!sharded&&job.checkpoint?unpackCheckpoint(job.checkpoint,decodeBot):{};
  const next:Record<string,unknown>={},results=[];
  for(let id=1;id<=140;id++){
   const session=job.sessions?.[id],seconds=Math.max(0,Math.min(15,session?.seconds??job.seconds));
   const baseline=job.baseline?.[id];
   if(sharded&&!session?.online&&seconds===0&&baseline){results.push({id,session:session?.number??0,...baseline,path:[]});continue;}
   let time=job.now-seconds*1000;
   const prior=sharded?(job.checkpoints?.[id]?unpackCheckpoint(job.checkpoints[id],decodeBot):null):saved[id];
   const bot=prepareParticipant(prior,id,session,()=>time),path=[];
   const pushes=job.pushes?.[id]||[];let pushIndex=0;
   for(let elapsed=0;elapsed<seconds-1e-8;elapsed+=.5){
    while(pushIndex<pushes.length&&elapsed>=Math.max(0,(pushes[pushIndex].at-(job.now-seconds*1000))/1000))participantPush(bot,pushes[pushIndex++]);
    const dt=Math.min(.5,seconds-elapsed);time+=dt*1000;advanceParticipant(bot,dt);
    const p=participantPose(bot);path.push([p.x,p.y,p.z,p.yaw].map(v=>Math.round(v*1000)/1000));
   }
   // Events accepted just before the claim still apply, with motion continuing
   // into the next checkpoint; no extra simulation time is granted.
   while(pushIndex<pushes.length)participantPush(bot,pushes[pushIndex++]);
   const snapshot=participantSnapshot(bot),result=participantResult(bot);
   if(sharded&&session?.game!=='egg'&&baseline)result.data=baseline.data;
   next[id]=sharded?packCheckpoint(gameCheckpoint(snapshot,session.game)):snapshot;
   results.push({id,session:session?.number??0,...result,pose:participantPose(bot),path});
  }
  const outcome=await rpc({p_action:'commit',p_lease:job.lease,p_checkpoint:sharded?JSON.stringify(next):packCheckpoint(next),p_results:results});
  if(outcome.error)throw new Error('stale_checkpoint');
  lease=null;
  const chat=await reviewBotChat(body=>rpc(body,'box_bot_chat'),{key:Deno.env.get('OPENAI_API_KEY'),model:Deno.env.get('BOX_CHAT_MODEL')||'gpt-4.1-mini'});
  return Response.json({ok:true,participants:outcome.participants,chat});
 }catch(error){
  if(lease)try{await rpc({p_action:'abort',p_lease:lease});}catch{}
  // Never log request headers, tokens, credentials or character checkpoints.
  console.error('egg-bots tick failed',error instanceof Error?error.message:'unknown');
  return Response.json({error:'tick_failed'},{status:503});
 }
});
