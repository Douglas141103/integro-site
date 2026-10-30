import {createBot,advanceBot,botPose,botSnapshot,decodeBot} from './simulation.mjs';

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
 async function rpc(body:Record<string,unknown>){
  const r=await fetch(url+'/rest/v1/rpc/box_bot_tick',{method:'POST',headers:{'Content-Type':'application/json',apikey:key!,Authorization:'Bearer '+key},body:JSON.stringify({p_token:token,...body})});
  if(!r.ok)throw new Error('checkpoint_rpc_failed');return await r.json();
 }
 try{
  const job=await rpc({p_action:'claim'});
  if(job.error)return Response.json({error:'unauthorized'},{status:401});
  if(job.busy)return Response.json({busy:true});
  const saved=job.checkpoint?await unpack(job.checkpoint):{};
  const next:Record<string,unknown>={},results=[];
  for(let id=1;id<=70;id++){
   let time=job.now-job.seconds*1000;
   const bot=createBot(saved[id],id*7919,()=>time),path=[];
   for(let elapsed=0;elapsed<job.seconds-1e-8;elapsed+=.5){
    const dt=Math.min(.5,job.seconds-elapsed);time+=dt*1000;advanceBot(bot,dt);
    const p=botPose(bot);path.push([p.x,p.y,p.z,p.yaw].map(v=>Math.round(v*1000)/1000));
   }
   next[id]=botSnapshot(bot);
   const s=bot.game.save;
   results.push({id,data:{coins:s.coins,training:s.training,delivered:s.delivered,caught:s.caught,vehicles:s.vehicles,accessories:s.accessories,creatures:s.creatures.length,eggs:s.eggs.length,tax:s.tax},pose:botPose(bot),path});
  }
  const outcome=await rpc({p_action:'commit',p_lease:job.lease,p_checkpoint:await pack(next),p_results:results});
  if(outcome.error)throw new Error('stale_checkpoint');
  return Response.json({ok:true,participants:results.length});
 }catch(error){
  // Never log request headers, tokens, credentials or character checkpoints.
  console.error('egg-bots tick failed',error instanceof Error?error.message:'unknown');
  return Response.json({error:'tick_failed'},{status:503});
 }
});
