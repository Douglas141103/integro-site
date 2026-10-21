import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.95.3/+esm';
import {zipSync} from 'https://cdn.jsdelivr.net/npm/fflate@0.8.2/esm/browser.js';
import {DirectRoom,directView} from './direct-room.mjs';

const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const config=window.INTEGRO_SUPABASE;
const db=createClient(config.url,config.anonKey);
const local=['127.0.0.1','localhost'].includes(location.hostname);
const server=local?'http://127.0.0.1:8787':window.INTEGRO_ONLINE?.serverUrl?.replace(/\/$/,'');
const direct=window.INTEGRO_ONLINE?.mode==='direct';
const clientId=crypto.randomUUID();
let Room,RoomEvent,Track,VideoPresets;
async function callDirect(action,data={}){const {data:result,error}=await db.rpc('online_call',{p_action:action,p_data:{client_id:clientId,...data}}).abortSignal(AbortSignal.timeout(12000));if(error)throw error;return result;}
const labels={scheduled:'Agendada',live:'Sala aberta',ended:'Encerrada',cancelled:'Cancelada',received:'Recebida',reviewing:'Em correção',returned:'Devolvida'};
const state={classes:[],options:null,role:null,lesson:null,selectedClass:null,room:null,roomLesson:null,teacher:false,online:false,refreshing:false};
const notice=(message,error=false)=>{$('notice').textContent=message;$('notice').className='notice'+(error?' error':'');};
const date=value=>new Date(value).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});
const inputDate=value=>{const d=new Date(value);return new Date(d-d.getTimezoneOffset()*60000).toISOString().slice(0,16);};
const options=items=>items.map(s=>`<option value="${esc(s.id)}">${esc(s.name)}</option>`).join('');
async function rpc(action,data={}){const {data:result,error}=await db.rpc('online_portal',{p_action:action,p_data:data});if(error)throw error;return result;}
async function api(action,data){
 if(direct)return callDirect(action,data);
 if(!server)throw Error('O acesso externo à sala está em preparação. O agendamento e as entregas já podem ser usados.');
 const {data:{session}}=await db.auth.getSession();if(!session)throw Error('Entre novamente no portal.');
 const response=await fetch(server+'/api/'+action,{method:'POST',headers:{Authorization:'Bearer '+session.access_token,'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(20000)});
 const result=await response.json();if(!response.ok)throw Error(result.error||'Não foi possível abrir a sala.');return result;
}
async function health(){
 state.online=false;
 if(direct){try{state.online=Boolean(window.RTCPeerConnection&&navigator.mediaDevices&&(await callDirect('health')).ok);}catch{}return;}
 if(server){try{const r=await fetch(server+'/api/health',{signal:AbortSignal.timeout(4000)});state.online=r.ok;}catch{}}
}
function render(){
 $('classes').innerHTML=state.classes.length?state.classes.map(c=>`<article class="card" data-class="${esc(c.id)}">
 <div class="class-head"><div><h3>${esc(c.title)}</h3><p class="muted">Professor: ${esc(c.teacher_name)}</p></div><span class="badge">${c.enrolled_count}/4 alunos${c.active?'':' · Arquivada'}</span></div>
 <div class="roster">${c.students.map(s=>`<span>${esc(s.name)} ${c.can_manage&&c.active?`<button aria-label="Retirar ${esc(s.name)} da turma" data-action="unenroll" data-student="${esc(s.id)}">×</button>`:''}</span>`).join('')}</div>
 ${c.can_manage&&c.active?`<details><summary>Organizar turma e agendar aula</summary>
 <form data-form="enroll" class="form-grid"><label>Matricular aluno<select name="student_id" required><option value="">Selecione</option>${options(state.options.students.filter(s=>!c.students.some(e=>e.id===s.id)))}</select></label><button ${c.enrolled_count>=4?'disabled':''}>Matricular na turma</button></form>
 <form data-form="lesson" class="form-grid"><label class="wide">Tema do encontro<input name="title" maxlength="160" required></label><label>Início<input name="starts_at" type="datetime-local" value="${inputDate(Date.now()+600000)}" required></label><label>Fim<input name="ends_at" type="datetime-local" value="${inputDate(Date.now()+600000+5400000)}" required></label><button>Agendar encontro</button></form>
 <button class="secondary" data-action="archive">Arquivar turma</button></details>`:''}
 ${c.lessons.length?c.lessons.map(l=>`<div class="lesson"><div><strong>${esc(l.title)}</strong><p class="muted">${esc(date(l.starts_at))} até ${esc(new Date(l.ends_at).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}))}</p><span class="badge">${labels[l.status]}</span></div><div class="actions">
 ${['scheduled','live'].includes(l.status)&&c.active?`${c.can_manage?`<button data-action="start" data-lesson="${l.id}" ${state.online?'':'disabled'}>${l.status==='live'?'Entrar como professor':'Abrir sala'}</button>`:`<select aria-label="Aluno que entrará na aula" data-join-student="${l.id}">${options(c.students)}</select><button data-action="join" data-lesson="${l.id}" ${l.status==='live'&&state.online?'':'disabled'}>Entrar na aula</button>`}`:''}
 <button class="secondary" data-action="deliveries" data-lesson="${l.id}">${c.can_manage?'Fotos e correções':'Atividade e devolutiva'}</button>
 ${c.can_manage&&l.status==='live'?`<button class="danger" data-action="end" data-lesson="${l.id}">Encerrar aula</button>`:''}
 ${c.can_manage&&l.status==='scheduled'?`<button class="secondary" data-action="cancel" data-lesson="${l.id}">Cancelar encontro</button>`:''}
 </div></div>`).join(''):'<p class="muted">Nenhum encontro agendado nesta turma.</p>'}</article>`).join(''):'<div class="card"><h3>Nenhuma turma disponível</h3><p class="muted">As turmas aparecem aqui quando o professor matricula o aluno. Cada família acessa apenas os alunos vinculados à sua conta.</p></div>';
}
async function refresh(quiet=false){
 if(state.refreshing)return;state.refreshing=true;
 try{
  const data=await rpc('list');const changed=JSON.stringify(state.classes)!==JSON.stringify(data.classes);state.classes=data.classes;state.role=data.role;
  if(['integro_admin','professor'].includes(data.role)&&!state.options)state.options=await rpc('options');
  $('admin').hidden=!state.options;
  if(state.options&&!$('class-form').elements.teacher_id.options.length)$('class-form').elements.teacher_id.innerHTML=options(state.options.teachers);
  const previouslyOnline=state.online;await health();
  if(!quiet||changed||previouslyOnline!==state.online)render();
  if(!quiet)notice(state.online?(direct?'Chamada pelo navegador disponível. Escolha seu encontro abaixo.':'Servidor de aulas disponível. Escolha um encontro abaixo.'):direct?'Não foi possível preparar a chamada. Use um navegador atualizado e clique em Atualizar. Agenda e atividades continuam disponíveis.':server?'O servidor de vídeo está indisponível. Você pode consultar a agenda, enviar atividades e acompanhar devolutivas.':'Acesso externo ao vídeo em preparação. Agenda, fotos do caderno e devolutivas estão disponíveis.');
 }finally{state.refreshing=false;}
}
async function act(button,fn){
 if(button)button.disabled=true;
 try{await fn();}catch(error){notice(error.message||'Não foi possível concluir. Tente novamente.',true);}
 finally{if(button?.isConnected)button.disabled=false;}
}
$('class-form').addEventListener('submit',event=>{event.preventDefault();act(event.submitter,async()=>{
 const form=event.currentTarget;await rpc('class_create',Object.fromEntries(new FormData(form)));form.reset();await refresh();notice('Turma criada. Matricule até quatro alunos e agende os encontros.');
});});
$('classes').addEventListener('submit',event=>{
 event.preventDefault();const form=event.target;const c=state.classes.find(c=>c.id===form.closest('[data-class]').dataset.class);
 act(event.submitter,async()=>{const data=Object.fromEntries(new FormData(form));data.class_id=c.id;
  if(form.dataset.form==='lesson'){
   const start=new Date(data.starts_at),end=new Date(data.ends_at);
   if(end<=start||end-start>14400000)throw Error('O fim deve ser depois do início, com duração máxima de quatro horas.');
   data.starts_at=start.toISOString();data.ends_at=end.toISOString();
  }
  await rpc(form.dataset.form==='lesson'?'lesson_create':'enroll',data);await refresh();notice('Salvo com sucesso.');
 });
});
$('classes').addEventListener('click',event=>{
 const button=event.target.closest('button[data-action]');if(!button)return;
 const c=state.classes.find(c=>c.id===button.closest('[data-class]').dataset.class);
 const l=c.lessons.find(l=>l.id===button.dataset.lesson);
 act(button,async()=>{
  if(button.dataset.action==='unenroll'){await rpc('unenroll',{class_id:c.id,student_id:button.dataset.student});await refresh();}
  if(button.dataset.action==='archive'){await rpc('class_archive',{class_id:c.id});await refresh();}
  if(button.dataset.action==='cancel'){await rpc('lesson_status',{lesson_id:l.id,status:'cancelled'});await refresh();}
  if(button.dataset.action==='end'){await api('end',{lesson_id:l.id});if(state.roomLesson?.id===l.id)await state.room?.disconnect();await refresh();notice('Aula encerrada para todos.');}
  if(button.dataset.action==='deliveries')await showDeliveries(c,l);
  if(['start','join'].includes(button.dataset.action)){
   if(state.room)await state.room.disconnect();
   const student=button.closest('.lesson').querySelector('select')?.value;
   const result=await api(button.dataset.action,{lesson_id:l.id,student_id:student});
   if(direct)await connectDirect(result,l);else await connectRoom(result,l);await refresh(true);
  }
 });
});
async function connectDirect(result,lesson){
 $('videos').replaceChildren();$('audio').replaceChildren();state.roomLesson=lesson;state.teacher=result.isTeacher;
 const room=new DirectRoom({call:callDirect,admission:result,context:{lesson_id:lesson.id,client_id:clientId},view:directView({
  videos:$('videos'),audio:$('audio'),status:text=>{$('connection').textContent=text;},
  controls:p=>{$('mic').textContent=p.isMicrophoneEnabled?'Desligar microfone':'Ligar microfone';$('camera').textContent=p.isCameraEnabled?'Desligar câmera':'Ligar câmera';$('screen').textContent=p.isScreenShareEnabled?'Parar compartilhamento':'Compartilhar tela';},
  closed:text=>{if(state.room!==room)return;state.room=null;$('classroom').hidden=true;$('videos').replaceChildren();$('audio').replaceChildren();notice(text);}
 })});
 state.room=room;$('room-title').textContent=lesson.title;$('classroom').hidden=false;$('screen').hidden=!result.isTeacher||!navigator.mediaDevices.getDisplayMedia;$('end').hidden=!result.isTeacher;
 $('mic').textContent='Ligar microfone';$('camera').textContent='Ligar câmera';$('screen').textContent='Compartilhar tela';
 try{await room.start();}catch(error){await room.disconnect();throw error;}
 $('classroom').scrollIntoView({behavior:'smooth',block:'start'});
}
function participantTile(participant){
 const id='participant-'+participant.identity;
 let el=document.getElementById(id);
 if(!el){el=document.createElement('div');el.className='video-tile';el.id=id;const name=document.createElement('span');name.textContent=participant.name||'Participante';el.append(name);$('videos').append(el);}return el;
}
function attachTrack(track,participant){
 const media=track.attach();media.dataset.track=track.sid||track.mediaStreamTrack?.id||'';
 if(track.kind===Track.Kind.Video){const tile=participantTile(participant);tile.append(media);}else $('audio').append(media);
}
async function connectRoom(result,lesson){
 ({Room,RoomEvent,Track,VideoPresets}=await import('https://cdn.jsdelivr.net/npm/livekit-client@2.23.0/dist/livekit-client.esm.mjs'));
 if(state.room)await state.room.disconnect();$('videos').replaceChildren();$('audio').replaceChildren();
 const room=new Room({adaptiveStream:true,dynacast:true,videoCaptureDefaults:{resolution:VideoPresets.h360.resolution},publishDefaults:{videoCodec:'vp8',videoSimulcastLayers:[VideoPresets.h180,VideoPresets.h360]}});
 state.room=room;state.roomLesson=lesson;state.teacher=result.isTeacher;
 room.on(RoomEvent.ParticipantConnected,p=>participantTile(p));
 room.on(RoomEvent.ParticipantDisconnected,p=>document.getElementById('participant-'+p.identity)?.remove());
 room.on(RoomEvent.TrackSubscribed,(track,publication,p)=>attachTrack(track,p));
 room.on(RoomEvent.TrackUnsubscribed,track=>track.detach().forEach(el=>el.remove()));
 room.on(RoomEvent.LocalTrackPublished,publication=>{if(publication.track?.kind===Track.Kind.Video)attachTrack(publication.track,room.localParticipant);});
 room.on(RoomEvent.LocalTrackUnpublished,publication=>publication.track?.detach().forEach(el=>el.remove()));
 room.on(RoomEvent.Reconnecting,()=>{$('connection').textContent='Reconectando à aula...';});
 room.on(RoomEvent.Reconnected,()=>{$('connection').textContent='Conectado. Câmera e microfone são opcionais.';});
 room.on(RoomEvent.Disconnected,()=>{
  if(state.room!==room)return;state.room=null;$('classroom').hidden=true;$('videos').replaceChildren();$('audio').replaceChildren();notice('Você saiu da sala. As atividades continuam disponíveis.');
 });
 try{await room.connect(result.url,result.token);}catch(error){await room.disconnect();state.room=null;throw Error('Não foi possível conectar o vídeo. Verifique a conexão e tente novamente.');}
 participantTile(room.localParticipant);room.remoteParticipants.forEach(p=>participantTile(p));
 $('room-title').textContent=lesson.title;$('classroom').hidden=false;$('screen').hidden=!result.isTeacher;$('end').hidden=!result.isTeacher;
 $('mic').textContent='Ligar microfone';$('camera').textContent='Ligar câmera';$('screen').textContent='Compartilhar tela';
 $('connection').textContent='Conectado. Ligue sua câmera e seu microfone quando desejar.';$('classroom').scrollIntoView({behavior:'smooth',block:'start'});
}
$('leave').onclick=()=>state.room?.disconnect();
$('mic').onclick=event=>act(event.currentTarget,async()=>{if(!state.room)return;const p=state.room.localParticipant;await p.setMicrophoneEnabled(!p.isMicrophoneEnabled);$('mic').textContent=p.isMicrophoneEnabled?'Desligar microfone':'Ligar microfone';});
$('camera').onclick=event=>act(event.currentTarget,async()=>{if(!state.room)return;const p=state.room.localParticipant;await p.setCameraEnabled(!p.isCameraEnabled);$('camera').textContent=p.isCameraEnabled?'Desligar câmera':'Ligar câmera';});
$('screen').onclick=event=>act(event.currentTarget,async()=>{if(!state.room||!state.teacher)return;const p=state.room.localParticipant;await p.setScreenShareEnabled(!p.isScreenShareEnabled);$('screen').textContent=p.isScreenShareEnabled?'Parar compartilhamento':'Compartilhar tela';});
$('sound').onclick=event=>act(event.currentTarget,async()=>{await state.room?.startAudio();notice('Áudio da sala ativado.');});
$('end').onclick=event=>act(event.currentTarget,async()=>{if(!state.roomLesson)return;await api('end',{lesson_id:state.roomLesson.id});await state.room?.disconnect();await refresh();notice('Aula encerrada para todos os participantes.');});

async function showDeliveries(c,l){
 state.selectedClass=c;state.lesson=l;$('delivery-title').textContent=l.title;$('deliveries').hidden=false;
 $('submission-form').hidden=c.can_manage;$('submission-form').elements.student_id.innerHTML=options(c.students);
 await loadSubmissions();$('deliveries').scrollIntoView({behavior:'smooth',block:'start'});
}
function validateFiles(files){
 if(!files.length||files.length>10)throw Error('Selecione de 1 a 10 arquivos.');
 for(const f of files)if(f.size>10485760||!['image/jpeg','image/png','image/webp','application/pdf'].includes(f.type))throw Error('Envie fotos JPG, PNG, WEBP ou PDF com até 10 MB por arquivo.');
}
function safeName(name){return name.replace(/[^a-zA-Z0-9._-]/g,'_').slice(-110)||'arquivo';}
async function uploadFiles(id,kind,files){
 const uploaded=[];
 try{for(const file of files){const path=`${id}/${kind}/${crypto.randomUUID()}-${safeName(file.name)}`;
  const {error}=await db.storage.from('online-classwork').upload(path,file,{contentType:file.type,upsert:false});if(error)throw error;uploaded.push(path);
 }}catch(error){if(uploaded.length)await db.storage.from('online-classwork').remove(uploaded);throw error;}
}
$('submission-form').addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;
 act(event.submitter,async()=>{const files=Array.from(form.elements.files.files);validateFiles(files);
  const data={lesson_id:state.lesson.id,student_id:form.elements.student_id.value,title:form.elements.title.value,message:form.elements.message.value};
  const submission=await rpc('submission_create',data);
  try{await uploadFiles(submission.id,'original',files);}catch(error){try{await rpc('submission_delete',{submission_id:submission.id});}catch{}throw error;}
  form.reset();await loadSubmissions();notice('Atividade recebida. A devolutiva aparecerá aqui quando o professor concluir a correção.');
 });
});
async function fileList(id,kind){const {data,error}=await db.storage.from('online-classwork').list(`${id}/${kind}`,{limit:100});if(error)throw error;return (data||[]).filter(f=>f.id).map(f=>({name:f.name,path:`${id}/${kind}/${f.name}`}));}
async function loadSubmissions(){
 const lesson=state.lesson;const submissions=await rpc('submissions',{lesson_id:lesson.id});
 const loaded=await Promise.all(submissions.map(async s=>({...s,original:await fileList(s.id,'original'),correction:(state.selectedClass.can_manage||s.status==='returned')?await fileList(s.id,'correction'):[]})));
 if(state.lesson?.id!==lesson.id)return;
 $('submissions').innerHTML=loaded.length?loaded.map(s=>`<article class="submission" data-submission="${s.id}"><div class="section-title"><div><h3>${esc(s.title)}</h3><p class="muted">${esc(s.student_name)} · ${esc(date(s.created_at))}</p></div><span class="badge">${labels[s.status]}</span></div><p>${esc(s.message)}</p><div class="files">${s.original.map(f=>`<button class="secondary" data-download="${esc(f.path)}">Ver/baixar ${esc(f.name.slice(37))}</button>`).join('')}${state.selectedClass.can_manage&&s.original.length?'<button class="secondary" data-zip>Baixar fotos em ZIP</button>':''}</div>
 ${s.status==='returned'?`<div class="feedback"><strong>Devolutiva do professor</strong><p>${esc(s.feedback||'Confira os arquivos devolvidos abaixo.')}</p></div>`:''}
 <div class="files">${s.correction.map(f=>`<button class="secondary" data-download="${esc(f.path)}">Correção: ${esc(f.name.slice(37))}</button>`).join('')}</div>
 ${state.selectedClass.can_manage?`<form data-review class="form-grid"><label class="wide">Correção e orientação<textarea name="feedback" rows="5" maxlength="30000">${esc(s.feedback)}</textarea></label><label class="wide">Anexar correção (opcional)<input name="files" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" multiple></label><button name="status" value="reviewing" class="secondary">Salvar em correção</button><button name="status" value="returned">Devolver ao aluno</button></form><p class="muted">Baixe as fotos, faça a correção manualmente no ChatGPT, confira o resultado e cole a devolutiva ou anexe um arquivo. As fotos não são enviadas automaticamente ao ChatGPT.</p>`:''}</article>`).join(''):'<p class="muted">Nenhuma atividade enviada para este encontro.</p>';
 state.submissions=loaded;
}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
$('submissions').addEventListener('click',event=>{
 const button=event.target.closest('button[data-download],button[data-zip]');if(!button)return;
 act(button,async()=>{
  if(button.dataset.download){const {data,error}=await db.storage.from('online-classwork').download(button.dataset.download);if(error)throw error;downloadBlob(data,button.dataset.download.split('/').pop().slice(37));}
  else {const s=state.submissions.find(s=>s.id===button.closest('[data-submission]').dataset.submission);const files={};
   for(const [i,f] of s.original.entries()){const {data,error}=await db.storage.from('online-classwork').download(f.path);if(error)throw error;files[`${i+1}-${f.name.slice(37)}`]=new Uint8Array(await data.arrayBuffer());}
   downloadBlob(new Blob([zipSync(files,{level:0})],{type:'application/zip'}),safeName(s.student_name+'-'+s.title)+'.zip');
  }
 });
});
$('submissions').addEventListener('submit',event=>{
 if(!event.target.matches('[data-review]'))return;event.preventDefault();const form=event.target;const submit=event.submitter;
 act(submit,async()=>{const id=form.closest('[data-submission]').dataset.submission;const files=Array.from(form.elements.files.files);
  if(files.length){validateFiles(files);await uploadFiles(id,'correction',files);}
  await rpc('submission_review',{submission_id:id,status:submit.value,feedback:form.elements.feedback.value});await loadSubmissions();notice(submit.value==='returned'?'Devolutiva enviada ao aluno.':'Correção salva. A família verá quando você devolver.');
 });
});
$('close-deliveries').onclick=()=>{$('deliveries').hidden=true;state.lesson=null;};
$('refresh').onclick=event=>act(event.currentTarget,()=>refresh());
try{
 const {data:{user},error}=await db.auth.getUser();
 if(error||!user){$('login').hidden=false;notice('Entre com a conta que você já usa no portal.');}
 else{
  $('workspace').hidden=false;await refresh();
  const {data:profile}=await db.from('profiles').select('full_name').eq('id',user.id).single();$('user').textContent=profile?.full_name||'';
  if(['integro_admin','professor'].includes(state.role))$('back').href=state.role==='integro_admin'?'/portal/dashboard.html':'/portal-professor/dashboard.html';
  setInterval(()=>{if(!document.hidden)refresh(true).catch(()=>{});},30000);
 }
}catch(error){notice(error.message||'Não foi possível carregar as aulas.',true);}
window.addEventListener('pagehide',()=>state.room?.disconnect());
