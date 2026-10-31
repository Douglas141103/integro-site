// Ephemeral room interactions. Only anonymous slots and bounded game coordinates are sent.
// As with movement, this casual game uses client validation; it awards no currency.
export const PUSH_RULES=Object.freeze({range:3.6,cooldown:3000,protection:1250,poseAge:700,eventAge:850});
const finitePose=s=>s&&['x','y','z','yaw'].every(k=>Number.isFinite(s[k]))&&Math.abs(s.x)<=9.5&&s.y>=0&&s.y<=15&&s.z>=-1012&&s.z<=25;
const cleanDrop=e=>e&&Number.isInteger(e.world)&&e.world>=0&&e.world<20&&['common','rare','epic','legendary','secret'].includes(e.rarity)&&['normal','gold','rainbow','cosmic'].includes(e.mutation)&&Number.isFinite(e.x)&&Math.abs(e.x)<=9.5&&Number.isFinite(e.z)&&e.z>=-964&&e.z<=25?{world:e.world,rarity:e.rarity,mutation:e.mutation,x:e.x,z:e.z}:null;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export function createEggPush({client,getRoom,getRace,getRuntime,getAdapter,healthy=()=>true,now=Date.now,id=()=>crypto.randomUUID(),onState=()=>{},onEffect=()=>{}}){
 let channel=null,key='',connected=false,stopped=false,sequence=0,nextPush=0,protectedUntil=0,lastPose=0;
 const poses=new Map(),seen=new Map(),senderCooldown=new Map(),pending=new Map(),botVisuals=new Map();
 function context(){const room=getRoom(),runtime=getRuntime(),clock=now();if(!room||room.game!=='egg'||!runtime||!healthy())return null;let race=getRace();const start=Date.parse(race?.starts);if(!Number.isFinite(start)||clock>=start+120000)race=null;return{room,race,runtime,clock,start,key:race?.id||'room'};}
 function member(c,slot){return Number.isInteger(slot)&&slot>=1&&slot<=4&&c.room.players.some(p=>p.slot===slot);}
 function racing(c,slot){return c&&(!c.race||(c.clock>=c.start&&!c.race.results?.[slot]?.finished));}
 function playing(c){return racing(c,c.room.slot)&&c.runtime.playing()&&!c.runtime.frozen?.();}
 function virtualPose(peer,c){
  const s=peer.state;if(!finitePose(s))return null;
  const key=peer.identity,p=s.botPush;
  if(p?.applied){if(p.at>=(botVisuals.get(key)?.at??-Infinity))botVisuals.delete(key);}
  else if(p?.id&&!botVisuals.has(key))botVisuals.set(key,{...p,start:c.clock-Math.max(0,p.serverNow-p.at)});
  let effect=botVisuals.get(key);
  if(effect&&p?.id&&!p.applied&&p.id!==effect.id&&p.at>effect.at){effect={...p,start:c.clock-Math.max(0,p.serverNow-p.at)};botVisuals.set(key,effect);}
  if(!effect)return {...s,playing:true};
  const age=Math.max(0,(c.clock-effect.start)/1000);
  if(age>16){botVisuals.delete(key);return {...s,playing:true};}
  const travel=3.75*(1-Math.exp(-4*Math.min(age,.55))),z=Math.max(-1012,Math.min(25,s.z+effect.z*travel));
  const limit=4.75+(9.4-4.75)*Math.max(0,Math.min(1,(z-3)/5))-.4;
  return {...s,x:Math.max(-limit,Math.min(limit,s.x+effect.x*travel)),z,y:s.y+Math.max(0,3.3*age-11*age*age),activity:'pushed',playing:true};
 }
 function poseFor(slot,c){const bot=c.room.players.find(p=>p.slot===slot&&p.automated);if(bot)return virtualPose(bot,c);const entry=poses.get(slot);if(!entry||c.clock-entry.received>=PUSH_RULES.poseAge||!entry.playing)return null;const dt=Math.min(.18,Math.max(0,(c.clock-entry.at)/1000));return{...entry,x:Math.max(-9,Math.min(9,entry.x+entry.vx*dt)),z:Math.max(-1007.2,Math.min(25,entry.z+entry.vz*dt))};}
 function target(c){if(!c||!playing(c))return null;const own=getAdapter()?.state();if(!finitePose(own)||own.jetpack)return null;return c.room.players.filter(p=>p.slot!==c.room.slot&&racing(c,p.slot)).map(p=>({slot:p.slot,state:poseFor(p.slot,c)})).filter(p=>p.state&&!p.state.jetpack&&Math.abs(p.state.y-own.y)<1.6&&distance(own,p.state)<=PUSH_RULES.range).sort((a,b)=>distance(own,a.state)-distance(own,b.state))[0]||null;}
 function state(){const c=context(),visible=!!c&&racing(c,c.room.slot)&&c.runtime.active(),other=target(c),remaining=Math.max(0,nextPush-now());return{visible,racing:!!c?.race,ready:visible&&connected&&!!other&&remaining===0&&playing(c),connected,target:other?.slot||null,remaining};}
 function refresh(){onState(state());}
 function peers(list){const c=context();return !c||!connected?list:list.map(p=>{const s=poseFor(p.slot,c);return s?{...p,state:{...p.state,x:s.x,y:s.y,z:s.z,yaw:s.yaw,activity:s.activity||p.state?.activity,zone:'world',appearance:p.state?.appearance,gesture:p.state?.gesture||'',vehicle:p.state?.vehicle||'',droppedEgg:s.droppedEgg,jetpack:s.jetpack}}:p;});}
 function drawPeers(){const c=context();if(c)getAdapter()?.setPeers(peers(c.room.players.filter(p=>p.slot!==c.room.slot)));}
 async function send(payload){if(!channel||!connected)return false;try{return await channel.send({type:'broadcast',event:'race',payload})==='ok';}catch{return false;}}
 function envelope(c,kind){return{v:2,kind,room:c.room.id,scope:c.key,from:c.room.slot,at:c.clock};}
 function receive(message){const c=context(),e=message?.payload;if(!c||!connected||!e||e.v!==2||e.room!==c.room.id||e.scope!==c.key||e.from===c.room.slot||!member(c,e.from)||!Number.isFinite(e.at)||Math.abs(c.clock-e.at)>PUSH_RULES.eventAge)return;
  if(c.room.players.find(p=>p.slot===e.from)?.automated)return;
  if(e.kind==='pose'){
   if(!finitePose(e)||!Number.isInteger(e.seq)||e.seq<0||e.seq>1e9||typeof e.playing!=='boolean')return;
   const previous=poses.get(e.from);if(previous&&e.at<=previous.at&&e.seq<=previous.seq)return;
   const delta=previous?(e.at-previous.at)/1000:0,vx=delta>.05&&delta<.7?(e.x-previous.x)/delta:0,vz=delta>.05&&delta<.7?(e.z-previous.z)/delta:0;
   poses.set(e.from,{vx:Math.max(-38,Math.min(38,vx)),vz:Math.max(-38,Math.min(38,vz)),x:e.x,y:e.y,z:e.z,yaw:e.yaw,at:e.at,seq:e.seq,playing:e.playing,jetpack:e.jetpack===true,droppedEgg:cleanDrop(e.droppedEgg),received:c.clock});drawPeers();refresh();return;
  }
  if(!['shove','impact'].includes(e.kind)||typeof e.id!=='string'||e.id.length>80||!member(c,e.to)||e.to===e.from||!racing(c,e.from)||!racing(c,e.to))return;
  if(e.kind==='impact'){
   const request=pending.get(e.id);if(!request||request.target!==e.from||e.to!==c.room.slot||c.clock-request.at>1500)return;
   pending.delete(e.id);onEffect({kind:'sent',slot:e.from});return;
  }
  if(e.to!==c.room.slot||!playing(c)||seen.has(e.id)||c.clock<protectedUntil||c.clock<(senderCooldown.get(e.from)||0))return;
  const attacker=poseFor(e.from,c),own=getAdapter()?.state();
  if(!attacker||!finitePose(own)||own.jetpack||attacker.jetpack||Math.abs(own.y-attacker.y)>=1.6||distance(own,attacker)>PUSH_RULES.range+.65)return;
  let dx=own.x-attacker.x,dz=own.z-attacker.z,len=Math.hypot(dx,dz);if(len<.05){dx=-Math.sin(attacker.yaw);dz=-Math.cos(attacker.yaw);len=1;}
  if(!c.runtime.push({x:dx/len,z:dz/len}))return;
  seen.set(e.id,c.clock);senderCooldown.set(e.from,c.clock+PUSH_RULES.cooldown);protectedUntil=c.clock+PUSH_RULES.protection;
  onEffect({kind:'received',slot:e.from});void send({...envelope(c,'impact'),id:e.id,to:e.from});
 }
 async function push(){const c=context(),s=state();if(!c||!s.ready)return false;
  const bot=c.room.players.find(p=>p.slot===s.target&&p.automated);
  if(bot){
   const botId=Number(bot.identity?.replace('virtual-',''));if(!Number.isInteger(botId))return false;
   nextPush=c.clock+PUSH_RULES.cooldown;refresh();
   try{
    const {data,error}=await client.rpc('box_egg_bot_push',{p_room:c.room.id,p_bot:botId,p_request:id()});
    if(error||!data?.ok)throw Error('push_rejected');
    if(context()?.room.id!==c.room.id)return false;
    if(data.push)botVisuals.set(bot.identity,{...data.push,start:now()-Math.max(0,data.serverNow-data.push.at)});
    drawPeers();onEffect({kind:'sent',slot:s.target,name:data.name});return true;
   }catch{onEffect({kind:'unavailable'});return false;}
  }
  const event={...envelope(c,'shove'),to:s.target,id:id()};nextPush=c.clock+PUSH_RULES.cooldown;pending.set(event.id,{target:event.to,at:c.clock});refresh();
  const sent=await send(event);if(!sent&&context()?.key===event.scope){pending.delete(event.id);onEffect({kind:'unavailable'});}return sent;
 }
 function detach(){const old=channel;channel=null;connected=false;poses.clear();pending.clear();botVisuals.clear();if(old)void Promise.resolve(client.removeChannel(old)).catch(()=>{});}
 function tick(){if(stopped)return;const c=context(),next=c?c.room.id+':'+c.key:'';
  if(next!==key){detach();key=next;sequence=0;nextPush=0;protectedUntil=0;seen.clear();senderCooldown.clear();lastPose=0;
   if(c){const selected=client.channel('egg-room-push-v2:'+c.room.id+':'+c.key,{config:{broadcast:{ack:true,self:false}}});channel=selected;selected.on('broadcast',{event:'race'},receive).subscribe(status=>{if(channel!==selected||stopped)return;connected=status==='SUBSCRIBED';if(!connected)poses.clear();refresh();});}
  }
  if(c&&connected&&c.clock-lastPose>=140){lastPose=c.clock;const s=getAdapter()?.state();if(finitePose(s))void send({...envelope(c,'pose'),x:s.x,y:s.y,z:s.z,yaw:s.yaw,seq:++sequence,playing:playing(c),droppedEgg:cleanDrop(s.droppedEgg),jetpack:s.jetpack===true});drawPeers();}
  for(const [k,t] of seen)if(now()-t>10000)seen.delete(k);
  for(const [k,t] of pending)if(now()-t.at>1500)pending.delete(k);
  refresh();
 }
 function stop(){stopped=true;detach();key='';onState({visible:false,ready:false,connected:false,target:null,remaining:0});}
 return{tick,push,peers,state,stop};
}
