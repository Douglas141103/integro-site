export class Rooms{
 constructor(client,user,{room,state,input,error}){Object.assign(this,{client,user,onRoom:room,onState:state,onInput:input,onError:error});this.channels=new Map();this.generation=0;this.closed=true;this.failures=0;}
 async rpc(action,extra={}){const {data,error}=await this.client.rpc('box_engole',{p_action:action,p_room:this.room?.id||null,...extra});if(error)throw Error(error.message);return data;}
 async enter(action,code){await this.leave();this.closed=false;const gen=++this.generation;try{const data=await this.rpc(action,{p_code:code||null});if(gen!==this.generation){await this.client.rpc('box_engole',{p_action:'leave',p_room:data.id});return;}await this.accept(data);this.timer=setInterval(()=>void this.refresh(),4000);}catch(e){await this.leave();throw e;}}
 async channel(topic,handler){
  if(this.channels.has(topic))return this.channels.get(topic).ready;
  const channel=this.client.channel(topic,{config:{private:true,broadcast:{ack:true}}});
  channel.on('broadcast',{event:'tick'},({payload})=>{if(!this.closed)handler?.(payload);});
  const entry={channel};this.channels.set(topic,entry);
  entry.ready=new Promise((resolve,reject)=>{let settled=false;const timer=setTimeout(()=>{if(!settled){settled=true;reject(Error('connection_timeout'));}},10000);channel.subscribe(status=>{if(status==='SUBSCRIBED'&&!settled){settled=true;clearTimeout(timer);resolve(channel);}else if(['CHANNEL_ERROR','TIMED_OUT','CLOSED'].includes(status)){if(!settled){settled=true;clearTimeout(timer);reject(Error('connection_failed'));}else if(!this.closed)this.onError(Error('connection_lost'));}});});
  return entry.ready;
 }
 async accept(data){
  if(this.closed)return;this.room=data;this.offset=Date.parse(data.serverAt)-Date.now();
  if(data.phase==='closed'){this.onError(Error('host_left'));return;}
  const base='engole:'+data.id;
  await this.channel(base+':state',s=>this.onState(s));
  if(this.isHost){await Promise.all(data.players.filter(p=>p.id!==this.user.id).map(p=>this.channel(base+':input:'+p.id,v=>this.onInput(p.id,v))));}
  else await this.channel(base+':input:'+this.user.id);
  if(!this.closed)this.onRoom(data);
 }
 get isHost(){return this.room?.owner===this.user.id;}
 async refresh(){if(this.closed||this.busy)return;this.busy=true;try{await this.accept(await this.rpc('status'));this.failures=0;}catch(e){if(!this.closed&&++this.failures>=2)this.onError(e);}finally{this.busy=false;}}
 async start(){await this.accept(await this.rpc('start'));}
 send(kind,payload){if(this.closed||!this.room)return;const topic='engole:'+this.room.id+':'+(kind==='state'?'state':'input:'+this.user.id);const c=this.channels.get(topic)?.channel;if(c?.state==='joined')void c.send({type:'broadcast',event:'tick',payload}).catch(()=>{});}
 async leave(){this.closed=true;this.generation++;clearInterval(this.timer);const room=this.room;this.room=null;const list=[...this.channels.values()];this.channels.clear();await Promise.allSettled(list.map(e=>this.client.removeChannel(e.channel)));if(room)await this.client.rpc('box_engole',{p_action:'leave',p_room:room.id});}
}
export function message(error){const s=error?.message||'';return Object.entries({room_full:'Esta sala já tem 8 jogadores.',need_players:'Espere pelo menos mais uma pessoa entrar.',already_started:'A partida já começou. Peça um novo convite para a próxima rodada.',room_not_found:'Sala encerrada ou código inválido.',host_left:'O anfitrião encerrou a sala.',room_rate_limit:'Você criou muitas salas. Tente novamente mais tarde.',access_denied:'Entre novamente com uma conta com acesso ao Integro Box.',host_only:'Somente o anfitrião pode iniciar.',connection_lost:'A conexão com a sala caiu. Entre novamente.',connection_failed:'Não foi possível conectar a sala. Tente novamente.',connection_timeout:'A conexão demorou demais. Tente novamente.'}).find(([key])=>s.includes(key))?.[1]||'Não foi possível conectar. Verifique a internet e tente novamente.';}
