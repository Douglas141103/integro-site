import {prepareParticipant,participantPush,advanceParticipant,participantPose,participantSnapshot,participantResult,decodeBot} from './simulation.mjs';

import {reviewBotChat} from './chat.mjs';

async function pack(value:unknown){
 const text=JSON.stringify(value,(_,v)=>v===Infinity?'@Infinity':v===-Infinity?'@-Infinity':v);
 const bytes=new Uint8Array(await new Response(new Blob([text]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());
 let binary='';for(const b of bytes)binary+=String.fromCharCode(b);
 return btoa(binary);
}
async function unpack(value:string){
 const bytes=Uint8Array.from(atob(value),c=>c.charCodeAt(0));
 return decodeBot(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text());
}
Deno.serve(async req=>{
 if(req.method!=='POST')return new Response('Method not allowed',{status:405});
 const token=req.headers.get('x-bot-key');
 if(!token||!/^[0-9a-f]{64}$/.test(token))return new Response('Unauthorized',{status:401});
 const url=Deno.env.get('SUPABASE_URL'),key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
 async function rpc(body:Record<string,unknown>,name='box_bot_tick'){
  const r=await fetch(url+'/rest/v1/rpc/'+name,{method:'POST',headers:{'Content-Type':'application/json',apikey:key!,Authorization:'Bearer '+key},body:JSON.stringify({p_token:token,...body})});
  if(!r.ok)throw new Error('checkpoint_rpc_failed');return await r.json();
 }
 try{
  const job=await rpc({p_action:'claim'});
  if(job.error)return Response.json({error:'unauthorized'},{status:401});
  if(job.busy)return Response.json({busy:true});
  const saved=job.checkpoint?await unpack(job.checkpoint):{};
  const next:Record<string,unknown>={},results=[];
  for(let id=1;id<=140;id++){
   const session=job.sessions?.[id],seconds=Math.max(0,Math.min(15,session?.seconds??job.seconds));
   let time=job.now-seconds*1000;
   const bot=prepareParticipant(saved[id],id,session,()=>time),path=[];
   const pushes=job.pushes?.[id]||[];let pushIndex=0;
   for(let elapsed=0;elapsed<seconds-1e-8;elapsed+=.5){
    while(pushIndex<pushes.length&&elapsed>=Math.max(0,(pushes[pushIndex].at-(job.now-seconds*1000))/1000))participantPush(bot,pushes[pushIndex++]);
    const dt=Math.min(.5,seconds-elapsed);time+=dt*1000;advanceParticipant(bot,dt);
    const p=participantPose(bot);path.push([p.x,p.y,p.z,p.yaw].map(v=>Math.round(v*1000)/1000));
   }
   // Events accepted just before the claim still apply, with motion continuing
   // into the next checkpoint; no extra simulation time is granted.
   while(pushIndex<pushes.length)participantPush(bot,pushes[pushIndex++]);
   next[id]=participantSnapshot(bot);
   results.push({id,session:session?.number??0,...participantResult(bot),pose:participantPose(bot),path});
  }
  const outcome=await rpc({p_action:'commit',p_lease:job.lease,p_checkpoint:await pack(next),p_results:results});
  if(outcome.error)throw new Error('stale_checkpoint');
  const chat=await reviewBotChat(body=>rpc(body,'box_bot_chat'),{key:Deno.env.get('OPENAI_API_KEY'),model:Deno.env.get('BOX_CHAT_MODEL')||'gpt-4.1-mini'});
  return Response.json({ok:true,participants:outcome.participants,chat});
 }catch(error){
  // Never log request headers, tokens, credentials or character checkpoints.
  console.error('egg-bots tick failed',error instanceof Error?error.message:'unknown');
  return Response.json({error:'tick_failed'},{status:503});
 }
});
