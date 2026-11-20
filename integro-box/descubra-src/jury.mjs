import {ROOMS} from './world.mjs?v=20261112-update1';

const names=['Azul','Dourado','Rosa','Violeta','Verde','Laranja'];
const roomName=id=>ROOMS[id]?.name||'corredor';
export function remember(state,who,kind,subject,room,time){
  const memories=state.memories??={};
  const list=memories[who]??=[];
  const duplicate=list.findIndex(f=>f.kind===kind&&f.subject===subject&&f.room===room);
  if(duplicate>=0)list.splice(duplicate,1);
  list.push({kind,subject,room,time:Math.floor(time)});
  if(list.length>16)list.shift();
}
export function observe(state,time){
  for(const p of state.players.filter(p=>p.bot&&p.alive)){
    remember(state,p.slot,'route',p.slot,p.room,time);
    for(const q of state.players){
      if(q.alive&&q.slot!==p.slot&&q.room===p.room&&Math.hypot(p.x-q.x,p.y-q.y)<180)
        remember(state,p.slot,'seen',q.slot,q.room,time);
    }
  }
}
export function perspective(s,who,history,stage){
  return {who,role:who===s.traitor?'infiltrator':'crew',alive:s.players.filter(p=>p.alive).map(p=>p.slot),
    facts:(s.memories?.[who]||[]).slice(-16).map(({kind,subject,room,time})=>({kind,subject,room,age:Math.max(0,Math.min(999,Math.floor(s.meetingEnd-25-time)))})),
    history:history.slice(-15),stage};
}
export function localDecision(context){
  const last=context.history.at(-1);
  const facts=context.facts;
  const witness=facts.findLast(f=>f.kind==='witness'&&context.alive.includes(f.subject));
  const seen=facts.findLast(f=>f.kind==='seen'&&(!last?.subject||last.subject===f.subject));
  const route=facts.findLast(f=>f.kind==='route');
  const fact=witness||seen||route;
  const text=witness?'Eu vi '+names[witness.subject-1]+' desativar alguém no '+roomName(witness.room)+'.':
    seen?'Cruzei com '+names[seen.subject-1]+' no '+roomName(seen.room)+'. Só vi a passagem.':
    route?'Eu estava no '+roomName(route.room)+'. Alguém consegue confirmar?':'Ainda tenho pouca informação. Vou esperar outra pista.';
  return {text,vote:witness?.subject||0,claim:{speaker:context.who,kind:witness?'accuse':seen?'seen':route?'alibi':'unsure',subject:fact?.subject||0,room:fact?.room??-2}};
}

const plain=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
// Convert player speech to ship events. Only this vocabulary travels to the API.
export function readStatement(text){
  const s=plain(text).trim().replace(/\bn\b/g,'nao');
  if(!s)return null;
  const people=names.map((name,i)=>({id:i+1,pos:s.search(new RegExp('\\b'+plain(name)+'\\b'))})).filter(p=>p.pos>=0).sort((a,b)=>a.pos-b.pos);
  const rooms=[/comando|ponte/,/laboratorio|amostras/,/reator/,/jardim/,/enfermaria/,/deposito|carga/,/central/,/corredor/];
  const id=rooms.findIndex(r=>r.test(s)),room=id===7?-1:id<0?-2:id;
  const selfDefense=/\b(?:nao (?:sou (?:eu|(?:o |a )?infiltrad[oa])|fui (?:eu|quem|(?:o |a )?infiltrad[oa])|fiz (?:nada|isso)|sabotei|desativei)|sou (?:inocente|tripulante)|(?:fui|sou) eu nao)\b/.test(s);
  if(selfDefense)return {speaker:1,kind:'defend',subject:1,other:people.find(p=>p.id!==1)?.id||0,room};
  const kind=/nao vi|nao tenho certeza|sem prova|nao sei|pular/.test(s)?'unsure':
    /inocente|nao foi|nao era|nao fui|comigo|ao meu lado/.test(s)?'defend':
    /\?|quem|onde|por que|alguem viu|confirma/.test(s)?'ask':
    /suspeit|acus|infiltrad|sabotou|desativou|mentiu|voto/.test(s)?'accuse':
    /eu estava|eu tava|eu fui|passei|estava no|estava na/.test(s)?'alibi':
    /\bvi\b|cruzei|encontrei|saiu|entrou/.test(s)?'seen':'comment';
  return {speaker:1,kind,subject:kind==='alibi'?1:people[0]?.id||(kind==='defend'?1:0),other:(kind==='alibi'?people[0]:people[1])?.id||0,room};
}
export function mountJury(sheet,game,call,allowVote){
  const s=game.state,round=s.round,people=s.players.filter(p=>p.bot&&p.alive).map(p=>p.slot);
  const alive=()=>game.state===s&&s.round===round&&s.phase==='meeting'&&sheet.isConnected;
  const history=[],lines=document.createElement('div'),status=document.createElement('p');
  const section=document.createElement('section'),form=document.createElement('form'),field=document.createElement('input'),submit=document.createElement('button'),done=document.createElement('button');
  section.className='dc-jury';lines.setAttribute('role','log');lines.setAttribute('aria-live','polite');
  field.maxLength=180;field.placeholder='Ex.: Verde, você viu o Rosa no reator?';field.setAttribute('aria-label','Sua fala na reunião');
  submit.textContent='Falar';done.textContent='Passar à votação';done.type='button';
  form.append(field,submit);section.append(lines,status,form,done);sheet.append(section);
  let working=false,finished=false,turns=0,cursor=round%Math.max(1,people.length),offline=false;
  const heard=new Set();
  function line(name,text){const p=document.createElement('p'),b=document.createElement('strong');b.textContent=name+' · ';p.append(b,document.createTextNode(text));lines.append(p);lines.scrollTop=lines.scrollHeight;}
  function controls(){field.disabled=submit.disabled=working||finished||turns>=3;done.disabled=working||finished;status.textContent=working?'A tripulação está pensando…':finished?'Depoimentos encerrados. Escolha seu voto.':turns>=3?'A tripulação está pronta para votar.':offline?'Conversa local · a conexão com a IA está indisponível.':'Sua vez. Você pode perguntar, acusar, se defender ou passar à votação.';}
  async function decide(who,stage,snapshot){
    const context=perspective(s,who,snapshot,stage);
    if(call&&!offline)try{return await call(context);}catch{offline=true;}
    return localDecision(context);
  }
  async function speak(who){const answer=await decide(who,'speak',history.slice());if(!alive())return;
    heard.add(who);history.push(answer.claim);line(names[who-1],answer.text);}
  function choose(){const who=people.find(p=>!heard.has(p))||people[cursor++%people.length];return who;}
  form.onsubmit=async e=>{e.preventDefault();if(working||finished||turns>=3||!field.value.trim())return;
    const msg=readStatement(field.value);
    if(!msg)return;
    turns++;history.push(msg);line('Você',field.value.trim());field.value='';working=true;controls();
    await speak(people.includes(msg.subject)&&msg.kind==='ask'?msg.subject:choose());working=false;if(alive())controls();};
  done.onclick=async()=>{if(working||finished)return;working=true;controls();const transcript=history.slice();
    const results=await Promise.all(people.map(id=>decide(id,'vote',transcript)));
    if(!alive())return;
    s.juryReasons=people.map((id,i)=>({id,text:results[i].text,vote:results[i].vote}));s.juryBallots={};people.forEach((id,i)=>{const target=results[i].vote;s.juryBallots[id]=target!==id&&s.players.some(p=>p.alive&&p.slot===target)?target:0;});
    finished=true;working=false;controls();form.hidden=done.hidden=true;allowVote();};
  if(!people.length||!s.players[0].alive){allowVote();section.remove();return;}
  working=true;controls();
  void (async()=>{await speak(people[cursor]);if(alive()&&people.length>1)await speak(choose());working=false;if(alive())controls();})();
}
