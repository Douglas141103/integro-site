const colors=['#183f36','#111111','#c43f3f','#245edb','#14814d','#e69b16','#873ab8','#ffffff'];
const point=p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&n>=0&&n<=1);
const rounded=p=>p.map(n=>Math.round(n*10000)/10000);
function normalize(a){
 if(a.type==='chat')return {type:a.type,text:a.text.trim()};
 if(a.type==='text')return {type:a.type,text:a.text.trim(),color:a.color,position:rounded(a.position)};
 if(a.type==='draw')return {type:a.type,stroke:a.stroke,color:a.color,width:a.width,points:a.points.map(rounded)};
 if(a.type==='permission')return {type:a.type,allowed:a.allowed};
 return {type:a.type};
}
export function validAction(a){
 if(!a||typeof a!=='object')return false;
 if(a.type==='chat')return typeof a.text==='string'&&a.text.trim().length>0&&a.text.length<=2000;
 if(a.type==='draw')return typeof a.stroke==='string'&&a.stroke.length<=80&&colors.includes(a.color)&&[2,4,8,16].includes(a.width)&&Array.isArray(a.points)&&a.points.length>=1&&a.points.length<=64&&a.points.every(point);
 if(a.type==='text')return typeof a.text==='string'&&a.text.trim().length>0&&a.text.length<=160&&point(a.position)&&colors.includes(a.color);
 return ['clear','undo'].includes(a.type)||(a.type==='permission'&&typeof a.allowed==='boolean');
}
export class ClassroomCollaboration {
 constructor({self,send,peers,changed=()=>{},error=()=>{}}){
  this.self=self;this.send=send;this.peers=peers;this.changed=changed;this.error=error;
  this.state={revision:0,allowed:false,chat:[],board:[]};this.ready=self.isTeacher;this.rates=new Map();this.seen=new Set();
 }
 notify(){this.changed(this.state,this.ready);}
 open(person){
  if(this.self.isTeacher){
   this.send(person.id,{kind:'begin',revision:this.state.revision,allowed:this.state.allowed});
   for(const item of this.state.board)this.send(person.id,{kind:'board-item',item});
   for(const item of this.state.chat)this.send(person.id,{kind:'chat-item',item});
   this.send(person.id,{kind:'ready'});
  }
 }
 closed(person){if(person.isTeacher){this.ready=false;this.notify();}}
 submit(action){
  if(!this.ready)throw Error('Aguarde o chat e o quadro conectarem ao professor.');
  if(!validAction(action))throw Error('Confira o conteúdo antes de enviar.');
  const request={kind:'request',id:crypto.randomUUID(),action};
  if(this.self.isTeacher)this.accept(this.self,request);
  else{
   const teacher=this.peers().find(p=>p.isTeacher);
   if(!teacher||!this.send(teacher.id,request))throw Error('O professor está desconectado. Aguarde e tente novamente.');
  }
 }
 receive(person,msg){
  if(!msg||typeof msg!=='object')return;
  if(this.self.isTeacher){if(msg.kind==='request')this.accept(person,msg);return;}
  // The sender comes from the authenticated peer, never from message contents.
  if(!person.isTeacher)return;
  if(msg.kind==='error'){this.error(String(msg.message).slice(0,200));return;}
  if(msg.kind==='begin'&&Number.isSafeInteger(msg.revision)&&typeof msg.allowed==='boolean'){
   this.pending={revision:msg.revision,allowed:msg.allowed,board:[],chat:[]};this.ready=false;
  }else if(msg.kind==='board-item'&&this.pending&&this.pending.board.length<800){
   if(validAction(msg.item?.action))this.pending.board.push(msg.item);
  }else if(msg.kind==='chat-item'&&this.pending&&this.pending.chat.length<100){
   if(validAction(msg.item?.action))this.pending.chat.push(msg.item);
  }else if(msg.kind==='ready'&&this.pending){this.state=this.pending;this.pending=null;this.ready=true;
  }else if(msg.kind==='event'&&this.ready&&msg.event?.revision===this.state.revision+1&&validAction(msg.event.action))this.apply(msg.event);
  else return;
  this.notify();
 }
 accept(person,request){
  if(!validAction(request.action)||typeof request.id!=='string'||request.id.length>80||this.seen.has(person.id+request.id))return;
  const a=request.action,now=Date.now();const bucket=this.rates.get(person.id)||{start:now,total:0,chat:0};
  if(now-bucket.start>10000){bucket.start=now;bucket.total=0;bucket.chat=0;}
  bucket.total++;if(a.type==='chat')bucket.chat++;this.rates.set(person.id,bucket);
  const reject=message=>{if(person.id===this.self.id)this.error(message);else this.send(person.id,{kind:'error',message});};
  if(bucket.total>180||bucket.chat>12){reject('Aguarde um pouco antes de enviar mais conteúdo.');return;}
  if(!person.isTeacher&&(['clear','permission'].includes(a.type)||a.type!=='chat'&&!this.state.allowed)){reject('O professor precisa liberar o quadro para os alunos.');return;}
  if(['draw','text'].includes(a.type)&&this.state.board.length>=800){reject('O quadro está cheio. Peça ao professor para salvar e limpar.');return;}
  this.seen.add(person.id+request.id);if(this.seen.size>3000)this.seen.delete(this.seen.values().next().value);
  const event={revision:this.state.revision+1,id:request.id,author:person.id,name:person.name,isTeacher:person.isTeacher===true,time:now,action:normalize(a)};
  this.apply(event);this.notify();
  for(const peer of this.peers())this.send(peer.id,{kind:'event',event});
 }
 apply(event){
  const a=event.action;this.state.revision=event.revision;
  if(a.type==='chat'){this.state.chat.push(event);this.state.chat=this.state.chat.slice(-100);}
  if(['draw','text'].includes(a.type))this.state.board.push(event);
  if(a.type==='clear')this.state.board=[];
  if(a.type==='permission')this.state.allowed=a.allowed;
  if(a.type==='undo'){
   const last=[...this.state.board].reverse().find(e=>event.isTeacher||e.author===event.author);
   if(last)this.state.board=this.state.board.filter(e=>!(e.author===last.author&&(last.action.type==='draw'?e.action.type==='draw'&&e.action.stroke===last.action.stroke:e.id===last.id)));
  }
 }
}

export function mountCollaboration(root,room){
 const $=id=>root.querySelector('#'+id);const canvas=$('board-canvas'),ctx=canvas.getContext('2d');
 const self={id:room.self.member_id,name:room.self.name,isTeacher:room.self.isTeacher};
 let model,stroke=null,pending=[],lastPoint=null,lastFlush=0,chatRevision='',drawing=false,disposed=false;
 const error=message=>{$('collab-status').textContent=message;};
 const send=action=>{try{model.submit(action);return true;}catch(e){error(e.message);return false;}};
 const paint=state=>{
  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.lineCap='round';ctx.lineJoin='round';
  for(const item of state.board){const a=item.action;ctx.fillStyle=a.color;ctx.strokeStyle=a.color;
   if(a.type==='text'){ctx.font='24px system-ui';ctx.fillText(a.text,a.position[0]*canvas.width,a.position[1]*canvas.height,canvas.width-a.position[0]*canvas.width);}
   else{ctx.lineWidth=a.width;ctx.beginPath();a.points.forEach((p,i)=>ctx[i?'lineTo':'moveTo'](p[0]*canvas.width,p[1]*canvas.height));if(a.points.length===1){ctx.lineTo(a.points[0][0]*canvas.width+.1,a.points[0][1]*canvas.height);}ctx.stroke();}
  }
 };
 model=new ClassroomCollaboration({self,send:(id,msg)=>room.sendData(id,msg),peers:()=>[...room.peers.values()].map(p=>p.person),error,
  changed(state,ready){
   if(disposed)return;paint(state);
   const allowed=ready&&(self.isTeacher||state.allowed);canvas.setAttribute('aria-disabled',String(!allowed));canvas.style.cursor=allowed?'crosshair':'not-allowed';
   $('board-permission').checked=state.allowed;$('board-undo').disabled=!allowed;$('chat-send').disabled=!ready;$('chat-message').disabled=!ready;
   $('collab-status').textContent=!ready?'Conectando chat e quadro ao professor...':allowed?'Chat conectado. Você pode escrever no quadro.':'Chat conectado. Aguarde o professor liberar o desenho no quadro.';
   const signature=state.chat.map(m=>m.id).join(',');
   if(chatRevision!==signature){
    chatRevision=signature;const log=$('chat-messages');const nearBottom=log.scrollHeight-log.scrollTop-log.clientHeight<70;
    log.replaceChildren();for(const message of state.chat){const item=document.createElement('div');item.className='chat-message'+(message.author===self.id?' mine':'');
     const meta=document.createElement('strong');meta.textContent=message.name+(message.isTeacher?' · Professor':'')+' · '+new Date(message.time).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
     const text=document.createElement('p');text.textContent=message.action.text;item.append(meta,text);log.append(item);
    }if(nearBottom)log.scrollTop=log.scrollHeight;
   }
  }});
 room.collaboration=model;
 const off=room.onData({open:person=>model.open(person),message:(person,msg)=>model.receive(person,msg),close:person=>model.closed(person)});
 $('board-teacher').hidden=!self.isTeacher;$('board-clear').hidden=!self.isTeacher;
 $('chat-form').onsubmit=event=>{event.preventDefault();const input=$('chat-message');if(send({type:'chat',text:input.value.trim()}))input.value='';};
 $('board-permission').onchange=()=>send({type:'permission',allowed:$('board-permission').checked});
 $('board-undo').onclick=()=>send({type:'undo'});
 $('board-clear').onclick=()=>{if(confirm('Limpar o quadro para todos? Salve a imagem antes, se desejar.'))send({type:'clear'});};
 $('board-save').onclick=()=>canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='quadro-da-aula.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
 const coordinate=event=>{const box=canvas.getBoundingClientRect();return [Math.max(0,Math.min(1,(event.clientX-box.left)/box.width)),Math.max(0,Math.min(1,(event.clientY-box.top)/box.height))];};
 const flush=()=>{if(!pending.length)return;const points=pending;pending=[];send({type:'draw',stroke,color:$('board-tool').value==='eraser'?'#ffffff':$('board-color').value,width:Number($('board-width').value),points});lastFlush=Date.now();};
 canvas.onpointerdown=event=>{
  if(event.button!==0||!model.ready||!self.isTeacher&&!model.state.allowed)return;
  const p=coordinate(event);
  if($('board-tool').value==='text'){const text=$('board-text').value.trim();if(!text){error('Digite o texto do quadro e depois toque onde deseja colocá-lo.');return;}send({type:'text',text,position:p,color:$('board-color').value});return;}
  event.preventDefault();canvas.setPointerCapture(event.pointerId);drawing=true;stroke=crypto.randomUUID();pending=[p];lastPoint=p;lastFlush=Date.now();
 };
 canvas.onpointermove=event=>{if(!drawing)return;const p=coordinate(event);pending.push(p);
  ctx.strokeStyle=$('board-tool').value==='eraser'?'#ffffff':$('board-color').value;ctx.lineWidth=Number($('board-width').value);ctx.beginPath();ctx.moveTo(lastPoint[0]*canvas.width,lastPoint[1]*canvas.height);ctx.lineTo(p[0]*canvas.width,p[1]*canvas.height);ctx.stroke();lastPoint=p;
  if(pending.length>=60||Date.now()-lastFlush>100){flush();pending=[p];}
 };
 const finish=()=>{if(drawing){drawing=false;flush();}};canvas.onpointerup=finish;canvas.onpointercancel=finish;canvas.onlostpointercapture=finish;
 model.notify();root.hidden=false;
 return ()=>{disposed=true;off();root.hidden=true;room.collaboration=null;canvas.onpointerdown=canvas.onpointermove=canvas.onpointerup=canvas.onpointercancel=canvas.onlostpointercapture=null;$('chat-messages').replaceChildren();$('chat-message').value='';$('board-text').value='';ctx.clearRect(0,0,canvas.width,canvas.height);};
}
