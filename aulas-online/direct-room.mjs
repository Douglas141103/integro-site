// Media stays between browsers. The authenticated RPC carries only connection descriptions.
const slots=['audio','camera','screen'];
export class DirectRoom {
 constructor({call,admission,context,view,rtcFactory=config=>new RTCPeerConnection(config),mediaDevices=navigator.mediaDevices}){
  this.call=call;this.self=admission;this.context={...context,member_id:admission.member_id};
  this.view=view;this.rtcFactory=rtcFactory;this.mediaDevices=mediaDevices;
  this.peers=new Map();this.tracks={};this.cursor=0;this.closed=false;this.lastPoll=Date.now();
  this.dataListeners=new Set();this.mediaRevision={};
  this.localParticipant={
   setMicrophoneEnabled:enabled=>this.setMedia('audio',enabled),
   setCameraEnabled:enabled=>this.setMedia('camera',enabled),
   setScreenShareEnabled:enabled=>this.setMedia('screen',enabled),
   isMicrophoneEnabled:false,isCameraEnabled:false,isScreenShareEnabled:false
  };
 }
 async start(){
  this.view.participant(this.self.member_id,this.self.name,true);
  if(this.self.micBlocked)this.view.moderation?.(true);
  await this.sync(this.self);this.timer=setTimeout(()=>this.poll(),1500);
  this.watchdog=setInterval(()=>{if(Date.now()-this.lastPoll>30000)this.disconnect('A conexão com o portal foi interrompida. Entre novamente.');},3000);
 }
 async request(action,extra={}){
  const result=await this.call(action,{...this.context,...extra});
  if(result.closed){await this.disconnect(result.reason);throw Error(result.reason);}
  return result;
 }
 async poll(){
  if(this.closed)return;
  try{const data=await this.request('poll',{after:this.cursor});this.lastPoll=Date.now();await this.sync(data);}
  catch(error){if(!this.closed)this.view.status('Reconectando ao portal. '+error.message);}
  finally{if(!this.closed)this.timer=setTimeout(()=>this.poll(),2000);}
 }
 async sync(data){
  if(this.closed)return;
  const blocked=Boolean(data.micBlocked);
  if(blocked!==Boolean(this.self.micBlocked)){
   this.self.micBlocked=blocked;
   if(blocked)await this.setMedia('audio',false);
   this.view.moderation?.(blocked);
  }
  this.view.roster?.(data.peers,this.self.member_id);
  for(const person of data.peers)this.view.blockAudio?.(person.id,Boolean(person.micBlocked));
  if(data.coordinator_id)this.collaboration?.setCoordinator(data.coordinator_id);
  const others=data.peers.filter(p=>p.id!==this.self.member_id);
  for(const [id,peer] of this.peers)if(!others.some(p=>p.id===id)){peer.pc.close();clearTimeout(peer.timeout);this.peers.delete(id);this.view.remove(id);for(const listener of this.dataListeners)listener.close?.(peer.person);}
  for(const person of others){
   if(this.peers.has(person.id)){Object.assign(this.peers.get(person.id).person,person);continue;}
   const peer=this.addPeer(person);
   // One deterministic offerer per pair; no simultaneous-offer race.
   if(this.self.member_id<person.id)this.enqueue(peer,()=>this.offer(peer));
  }
  for(const message of data.messages||[]){
   const peer=this.peers.get(message.sender);
   if(peer)this.enqueue(peer,()=>this.receive(peer,message.description));
   this.cursor=Math.max(this.cursor,message.id);
  }
  this.showStatus();
 }
 enqueue(peer,fn){
  peer.queue=peer.queue.then(()=>{if(!this.closed&&this.peers.get(peer.person.id)===peer)return fn();})
   .catch(()=>{if(!this.closed){peer.failed=true;this.showStatus();}});
  return peer.queue;
 }
 addPeer(person){
  const pc=this.rtcFactory({iceServers:[{urls:'stun:stun.cloudflare.com:3478'},{urls:'stun:stun.l.google.com:19302'}],bundlePolicy:'max-bundle'});
  const peer={pc,person,queue:Promise.resolve(),senders:[],failed:false,retries:0};
  this.peers.set(person.id,peer);this.view.participant(person.id,person.name,false);
  // Negotiated, ordered channel uses the same authenticated DTLS peer connection.
  peer.channel=pc.createDataChannel('integro-classroom-v1',{negotiated:true,id:0,ordered:true});peer.outbox=[];peer.queuedBytes=0;
  peer.channel.bufferedAmountLowThreshold=65536;
  peer.flush=()=>{
   while(!this.closed&&peer.channel.readyState==='open'&&peer.outbox.length&&peer.channel.bufferedAmount<131072){
    const text=peer.outbox.shift();peer.queuedBytes-=text.length;
    try{peer.channel.send(text);}catch{peer.channel.close();break;}
   }
  };
  peer.channel.onbufferedamountlow=peer.flush;
  peer.channel.onopen=()=>{for(const listener of this.dataListeners)listener.open?.(person);peer.flush();};
  peer.channel.onclose=()=>{peer.outbox=[];peer.queuedBytes=0;for(const listener of this.dataListeners)listener.close?.(person);};
  peer.channel.onmessage=event=>{
   if(this.closed||this.peers.get(person.id)!==peer||typeof event.data!=='string'||event.data.length>16384)return;
   try{const message=JSON.parse(event.data);for(const listener of this.dataListeners)listener.message?.(person,message);}catch{/* Ignore malformed data, not media. */}
  };
  // Fixed media slots permit camera/mic/share switches without renegotiation.
  for(const slot of this.self.member_id<person.id?slots:[]){
   const transceiver=pc.addTransceiver(slot==='audio'?'audio':'video',{direction:'sendrecv',sendEncodings:[slot==='audio'?{maxBitrate:40000}:{maxBitrate:slot==='screen'?600000:350000,maxFramerate:slot==='screen'?10:15}]});
   peer.senders.push(transceiver.sender);
   if(this.tracks[slot])this.enqueue(peer,()=>transceiver.sender.replaceTrack(this.tracks[slot]));
  }
  pc.ontrack=event=>{
   const index=pc.getTransceivers().indexOf(event.transceiver);
   if(index===2&&!person.isTeacher)return;
   this.view.track(person.id,slots[index]||'camera',event.track,false);
  };
  pc.onconnectionstatechange=()=>{
   if(pc.connectionState==='connected'){peer.failed=false;clearTimeout(peer.timeout);}
   if(pc.connectionState==='failed'){
    peer.failed=true;
    if(this.self.member_id<person.id&&peer.retries++<1)this.enqueue(peer,()=>this.offer(peer,true));
   }
   this.showStatus();
  };
  peer.timeout=setTimeout(()=>{if(pc.connectionState!=='connected'){peer.failed=true;this.showStatus();}},30000);
  return peer;
 }
 async gathered(pc){
  if(pc.iceGatheringState==='complete')return;
  await new Promise(resolve=>{
   const done=()=>{clearTimeout(timer);pc.removeEventListener('icegatheringstatechange',changed);resolve();};
   const changed=()=>{if(pc.iceGatheringState==='complete')done();};
   const timer=setTimeout(done,8000);pc.addEventListener('icegatheringstatechange',changed);
  });
 }
 async describe(peer,description){
  await peer.pc.setLocalDescription(description);await this.gathered(peer.pc);
  if(!this.closed&&peer.pc.signalingState!=='closed')await this.request('signal',{recipient:peer.person.id,description:peer.pc.localDescription.toJSON()});
 }
 async offer(peer,restart=false){
  if(peer.pc.signalingState!=='stable')return;
  await this.describe(peer,await peer.pc.createOffer({iceRestart:restart}));
 }
 async receive(peer,description){
  if(description.type==='offer'){
   if(this.self.member_id<peer.person.id)return;
   await peer.pc.setRemoteDescription(description);
   // The answerer must use the transceivers created by the remote offer.
   // Pre-creating its own leaves extra, unassociated senders (one-way media).
   const transceivers=peer.pc.getTransceivers();
   peer.senders=transceivers.slice(0,3).map(t=>t.sender);
   for(let i=0;i<peer.senders.length;i++){
    transceivers[i].direction='sendrecv';
    await peer.senders[i].replaceTrack(this.tracks[slots[i]]||null);
   }
   await this.describe(peer,await peer.pc.createAnswer());
   for(let i=0;i<peer.senders.length;i++){
    const sender=peer.senders[i],params=sender.getParameters();
    if(params.encodings?.length){params.encodings[0].maxBitrate=i===0?40000:i===2?600000:350000;await sender.setParameters(params);}
   }
  }else if(description.type==='answer'&&peer.pc.signalingState==='have-local-offer')await peer.pc.setRemoteDescription(description);
 }
 showStatus(){
  if(this.closed)return;
  const connected=[...this.peers.values()].filter(p=>p.pc.connectionState==='connected').length;
  if([...this.peers.values()].some(p=>p.failed))this.view.status('Não foi possível ligar todos os participantes diretamente. Tente outra rede (por exemplo, dados móveis) e entre novamente.');
  else if(!this.peers.size)this.view.status('Sala aberta · aguardando participantes.');
  else if(connected===this.peers.size)this.view.status(`Conectado · ${connected+1} participantes.`);
  else this.view.status(`Estabelecendo a chamada · ${connected} de ${this.peers.size} conexões prontas...`);
 }
 async setMedia(slot,enabled){
  if(this.closed)return;
  if(slot==='audio'&&enabled&&this.self.micBlocked)throw Error('Seu microfone foi silenciado pelo professor. Aguarde a liberação.');
  const revision=(this.mediaRevision[slot]||0)+1;this.mediaRevision[slot]=revision;
  if(slot==='screen'&&!this.self.isTeacher)throw Error('Somente o professor pode compartilhar a tela.');
  let track=null;
  if(enabled){
   let stream;
   try{
    stream=slot==='screen'?await this.mediaDevices.getDisplayMedia({video:{frameRate:10},audio:false}):await this.mediaDevices.getUserMedia(slot==='audio'?{audio:{echoCancellation:true,noiseSuppression:true},video:false}:{audio:false,video:{width:{ideal:640},height:{ideal:360},frameRate:{ideal:15,max:15}}});
   }catch(error){throw Error(error.name==='NotAllowedError'?'A permissão foi recusada ou cancelada. Permita o acesso no navegador e tente novamente.':'Não foi possível acessar o dispositivo. Confira se está conectado e livre para uso.');}
   track=stream.getTracks()[0];
   if(this.closed||this.mediaRevision[slot]!==revision||(slot==='audio'&&this.self.micBlocked)){stream.getTracks().forEach(t=>t.stop());return;}
  }
  const previous=this.tracks[slot];this.tracks[slot]=track;
  const results=await Promise.allSettled([...this.peers.values()].map(p=>p.senders[slots.indexOf(slot)]?.replaceTrack(track)));
  previous?.stop();this.view.track(this.self.member_id,slot,track,true);
  const flag={audio:'isMicrophoneEnabled',camera:'isCameraEnabled',screen:'isScreenShareEnabled'}[slot];
  this.localParticipant[flag]=Boolean(track);this.view.controls(this.localParticipant);
  if(track)track.onended=()=>{if(this.tracks[slot]===track)this.setMedia(slot,false).catch(()=>{});};
  if(results.some(r=>r.status==='rejected'))this.view.status('Um participante perdeu a conexão. Saia e entre na aula novamente.');
 }
 async startAudio(){await this.view.audio();}
 async moderate(targetId,operation){
  if(!this.self.isTeacher)throw Error('Somente o professor pode administrar participantes.');
  if(!['mute','release','remove'].includes(operation))throw Error('Controle inválido.');
  const peer=this.peers.get(targetId);
  if(!peer||peer.person.isTeacher)throw Error('Aluno indisponível nesta sala.');
  await this.request('moderate',{target_id:targetId,operation});
  if(this.closed)return;
  // Reflect the verified action immediately; other peers receive it through their authenticated poll.
  if(operation==='remove'){
   peer.pc.close();clearTimeout(peer.timeout);this.peers.delete(targetId);this.view.remove(targetId);
   for(const listener of this.dataListeners)listener.close?.(peer.person);
  }else{peer.person.micBlocked=operation==='mute';this.view.blockAudio?.(targetId,peer.person.micBlocked);}
  this.view.roster?.([{id:this.self.member_id,name:this.self.name,isTeacher:this.self.isTeacher,micBlocked:this.self.micBlocked},...[...this.peers.values()].map(p=>p.person)],this.self.member_id);
 }
 async setAudioMuted(muted){await this.view.muteAudio(muted);this.audioMuted=muted;}
 onData(listener){this.dataListeners.add(listener);for(const peer of this.peers.values())if(peer.channel?.readyState==='open')listener.open?.(peer.person);return ()=>this.dataListeners.delete(listener);}
 sendData(id,message){
  const peer=this.peers.get(id);if(this.closed||peer?.channel?.readyState!=='open')return false;
  const text=JSON.stringify(message);if(text.length>16384)return false;
  if(peer.queuedBytes+text.length>2097152){peer.channel.close();return false;}
  peer.outbox.push(text);peer.queuedBytes+=text.length;peer.flush();return true;
 }
 async disconnect(reason='Você saiu da sala. As atividades continuam disponíveis.'){
  if(this.closed)return;this.closed=true;clearTimeout(this.timer);clearInterval(this.watchdog);
  for(const p of this.peers.values()){clearTimeout(p.timeout);p.pc.close();}
  this.peers.clear();this.dataListeners.clear();Object.values(this.tracks).forEach(t=>t?.stop());this.tracks={};this.view.closed(reason);
  try{await this.call('leave',this.context);}catch{/* Lease expiry also releases the seat. */}
 }
}

export function directView({videos,audio,status,controls,closed,roster,moderation,audioMuted=false}){
 const tiles=new Map(),screens=new Map(),names=new Map(),blockedAudio=new Set();
 return {
  participant(id,name,local){
   if(tiles.has(id))return;
   const tile=document.createElement('div');tile.className='video-tile';tile.dataset.peer=id;
   const avatar=document.createElement('div');avatar.className='video-avatar';avatar.textContent=name.trim().split(/\s+/).slice(0,2).map(n=>n[0]).join('').toUpperCase();tile.append(avatar);
   const label=document.createElement('span');label.className='video-name';label.textContent=name+(local?' (você)':'');tile.append(label);videos.append(tile);tiles.set(id,tile);names.set(id,name);
  },
  remove(id){tiles.get(id)?.remove();tiles.delete(id);screens.get(id)?.remove();screens.delete(id);names.delete(id);audio.querySelectorAll('audio').forEach(el=>{if(el.dataset.peer===id)el.remove();});},
  track(id,slot,track,local){
   if(slot==='screen'){
    screens.get(id)?.remove();screens.delete(id);
    if(track){const tile=document.createElement('div');tile.className='video-tile shared-screen';const label=document.createElement('span');label.textContent=(names.get(id)||'Professor')+' — tela';
     const expand=document.createElement('button');expand.className='expand-screen secondary';expand.textContent='Ampliar tela';expand.onclick=()=>tile.requestFullscreen?.().catch(()=>status('Não foi possível ampliar a tela neste navegador.'));
     tile.append(label,expand);videos.prepend(tile);screens.set(id,tile);}
   }
   const container=slot==='audio'?audio:slot==='screen'?screens.get(id):tiles.get(id);if(!container||slot==='audio'&&local)return;
   const existing=[...container.querySelectorAll('video,audio')].find(el=>el.dataset.slot===slot&&el.dataset.peer===id);existing?.remove();
   if(!track)return;
   const el=document.createElement(slot==='audio'?'audio':'video');el.dataset.peer=id;el.dataset.slot=slot;
   el.autoplay=true;el.playsInline=true;el.muted=local||slot!=='audio'||audioMuted||blockedAudio.has(id);el.srcObject=new MediaStream([track]);container.append(el);
   if(slot!=='audio'){
    const target=slot==='screen'?container:el;target.hidden=track.muted;
    track.onmute=()=>{target.hidden=true;};track.onunmute=()=>{target.hidden=false;};
   }
   el.play().catch(()=>status('Para ouvir a chamada, clique em “Ativar áudio”.'));
  },
  status,controls,closed,roster,moderation,
  blockAudio(id,blocked){
   if(blocked)blockedAudio.add(id);else blockedAudio.delete(id);
   tiles.get(id)?.classList.toggle('teacher-muted',blocked);
   audio.querySelectorAll('audio').forEach(el=>{if(el.dataset.peer===id)el.muted=audioMuted||blocked;});
  },
  async audio(){await Promise.all([...audio.querySelectorAll('audio')].map(el=>el.play()));},
  async muteAudio(muted){audioMuted=muted;await Promise.all([...audio.querySelectorAll('audio')].map(el=>{el.muted=muted||blockedAudio.has(el.dataset.peer);return el.muted?Promise.resolve():el.play();}));}
 };
}
