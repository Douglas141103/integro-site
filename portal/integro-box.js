import {supabase} from '../integro-box/access.js';
const $=id=>document.getElementById(id);
const games={gosnake:'GoSnake',lobby:'Menu de jogos',house:'Rua das Descobertas',egg:'Pegue o Ovo',bairro:'Meu Bairro',fruit:'Fruit Box',interball:'InterBall',fuitcort:'FuitCort',craft:'IntegroCraft',math:'Torre da Matemática',words:'Palavras',robot:'Robótica',memory:'Memória'};
const roleNames={responsavel:'Responsável',integro_admin:'Administrador',diretor:'Diretor',coordenacao:'Coordenação',professor:'Professor'};
const deviceNames={desktop:'Computador',mobile:'Celular',tablet:'Tablet'};
let generation=0,userId=null,page=0,total=0,people=[],loading=false;
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=String(text);if(cls)n.className=cls;return n;}
function time(seconds){const value=Number(seconds||0);if(value<=0)return '0 min';const m=Math.floor(value/60);return m<1?'Menos de 1 min':m<60?m+' min':Math.floor(m/60)+'h '+String(m%60).padStart(2,'0')+'min';}
function date(value){return value?new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Manaus',dateStyle:'short',timeStyle:'short'}).format(new Date(value)):'Sem registro';}
function day(value){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Manaus',year:'numeric',month:'2-digit',day:'2-digit'}).format(value);}
function empty(el,text){el.replaceChildren(node('p',text,'empty'));}
function feedback(text,error=false){$('feedback').textContent=text;$('feedback').classList.toggle('error',error);}
function clear(){generation++;people=[];$('management').hidden=true;$('managerName').textContent='';$('profile').replaceChildren(new Option('Todos os perfis',''));$('search').value='';for(const id of ['people','sessions','rooms','gamesChart','daysChart'])$(id).replaceChildren();}
function renderPeople(){
 const q=$('search').value.toLocaleLowerCase('pt-BR');const list=people.filter(p=>(p.full_name+' '+p.email).toLocaleLowerCase('pt-BR').includes(q));$('people').replaceChildren();
 for(const p of list){const tr=node('tr');const identity=node('td');identity.append(node('strong',p.full_name||'Perfil sem nome'),node('small',p.email||''),node('small',roleNames[p.role]||p.role));tr.append(identity);
  const status=node('td');status.append(node('span',p.online?'Online':'Offline','pill'+(p.online?' online':'')));tr.append(status);
  for(const value of [date(p.last_sign_in_at),date(p.last_box_at),p.sessions,time(p.active_seconds)])tr.append(node('td',value));
  const action=node('td'),button=node('button','Ver histórico');button.type='button';button.onclick=()=>{$('profile').value=p.id;page=0;void load();};action.append(button);tr.append(action);$('people').append(tr);
 }
 if(!list.length){const tr=node('tr'),td=node('td','Nenhum perfil encontrado.');td.colSpan=7;tr.append(td);$('people').append(tr);}
}
function render(data){
 $('scope').textContent=data.scope;$('updated').textContent='Atualizado às '+new Date().toLocaleTimeString('pt-BR',{timeZone:'America/Manaus'});
 const s=data.summary;for(const [id,value] of Object.entries({profilesCount:s.profiles,sessionsCount:s.sessions,activeTime:time(s.active_seconds),connectedTime:time(s.connected_seconds),onlineCount:s.online,roomsCount:s.rooms}))$(id).textContent=value;
 $('trackingSince').textContent=data.tracking_since?'Primeiro registro disponível: '+date(data.tracking_since)+'.':'O acompanhamento foi preparado. Os dados aparecerão conforme os perfis abrirem os jogos na versão atualizada.';
 people=data.profiles;
 if(!$('profile').value){const select=$('profile');select.replaceChildren(new Option('Todos os perfis',''));for(const p of people)select.add(new Option(p.full_name||p.email,p.id));}
 renderPeople();$('gamesChart').replaceChildren();const max=Math.max(1,...data.games.map(g=>Number(g.active_seconds)));
 for(const g of data.games){const b=node('button',undefined,'game-bar');b.type='button';const bar=node('i');bar.style.width=(100*Number(g.active_seconds)/max)+'%';bar.setAttribute('aria-hidden','true');b.append(bar,node('span',games[g.game]||g.game),node('b',time(g.active_seconds)));b.title=g.profiles+' perfis · '+g.visits+' períodos de uso';b.onclick=()=>{$('game').value=g.game;page=0;void load();};$('gamesChart').append(b);}
 if(!data.games.length)empty($('gamesChart'),'Nenhum jogo acessado neste período.');
 $('daysChart').replaceChildren();const dayMax=Math.max(1,...data.days.map(d=>Number(d.active_seconds)));
 for(const d of data.days){const col=node('div',undefined,'day');col.tabIndex=0;col.title=d.day.split('-').reverse().join('/')+' · '+time(d.active_seconds)+' · '+d.profiles+' perfis';col.setAttribute('aria-label',col.title);const bar=node('i');bar.style.height=Math.max(1,100*Number(d.active_seconds)/dayMax)+'%';col.append(bar,node('small',d.day.slice(8)+'/'+d.day.slice(5,7)));$('daysChart').append(col);}
 if(!data.days.length)empty($('daysChart'),'Aguardando os primeiros acessos.');
 $('sessions').replaceChildren();
 for(const sess of data.sessions){const details=node('details',undefined,'session'),summary=node('summary');summary.append(node('strong',sess.full_name||sess.email),node('span',date(sess.started_at)),node('span',deviceNames[sess.device]||sess.device,'pill'),node('span',sess.online?'Online':sess.ended_at?'Encerrada':'Sem conexão recente','pill'+(sess.online?' online':'')),node('span',time(sess.active_seconds)+' ativos'),node('span','Detalhes ↓'));details.append(summary);
  details.append(node('p','Último sinal: '+date(sess.last_seen_at)+' · Tempo de sessão medido: '+time(sess.connected_seconds),'muted'));
  const wrap=node('div',undefined,'table-scroll'),table=node('table'),head=node('tr');for(const text of ['Jogo','Modo / sala','Entrada','Último sinal','Tempo ativo'])head.append(node('th',text));const thead=node('thead');thead.append(head);table.append(thead);const body=node('tbody');
  for(const h of sess.history){const tr=node('tr');for(const value of [games[h.game]||h.game,h.room_id?'Multiplayer · '+h.room_id.slice(0,8):'Individual',date(h.started_at),date(h.last_seen_at),time(h.active_seconds)])tr.append(node('td',value));body.append(tr);}table.append(body);wrap.append(table);details.append(wrap);$('sessions').append(details);
 }
 if(!data.sessions.length)empty($('sessions'),'Nenhuma sessão neste recorte.');total=Number(data.total_sessions);$('pageInfo').textContent=total?`${page*50+1}–${Math.min((page+1)*50,total)} de ${total} sessões`:'0 sessões';$('previous').disabled=page===0;$('next').disabled=(page+1)*50>=total;
 $('rooms').replaceChildren();for(const r of data.rooms){const card=node('article',undefined,'room');card.append(node('strong',games[r.game]||r.game),node('p','Sala '+r.room_id.slice(0,8)),node('p',r.profiles+' perfis no recorte · '+time(r.active_seconds)+' ativos'),node('p',(r.participants||[]).map(id=>people.find(p=>p.id===id)?.full_name||'Perfil autorizado').join(', ')),node('p',date(r.started_at)+' → '+date(r.last_seen_at)));$('rooms').append(card);}if(!data.rooms.length)empty($('rooms'),'Nenhuma sala multiplayer registrada neste recorte.');
}
async function load(){
 if(!userId)return;const stamp=++generation;loading=true;$('refresh').disabled=true;feedback('Atualizando os indicadores…');
 try{
  const {data,error}=await supabase.rpc('box_usage_report',{p_from:$('from').value,p_to:$('to').value,p_user:$('profile').value||null,p_game:$('game').value||null,p_mode:$('mode').value||null,p_page:page});
  if(stamp!==generation||!userId)return;
  if(error){if(error.code==='42501'){clear();userId=null;throw Error('Acesso restrito aos administradores e diretores autorizados.');}if(error.code==='PGRST202'||error.code==='42883')throw Error('O acompanhamento ainda está sendo ativado no banco de dados.');throw Error('Não foi possível carregar os dados. Confira a conexão e selecione um período de até 93 dias.');}
  render(data);$('management').hidden=false;feedback('');
 }catch(e){if(stamp===generation||!userId)feedback(e.message,true);}
 finally{if(stamp===generation){loading=false;$('refresh').disabled=false;}}
}
$('filters').onsubmit=e=>{e.preventDefault();page=0;void load();};$('refresh').onclick=()=>void load();$('search').oninput=renderPeople;
$('previous').onclick=()=>{if(page>0){page--;void load();}};$('next').onclick=()=>{if((page+1)*50<total){page++;void load();}};
$('logout').onclick=async()=>{userId=null;clear();await supabase.auth.signOut();location.replace('./index.html');};
const now=new Date();$('to').value=day(now);$('from').value=day(new Date(now.getTime()-29*86400000));
for(const [id,title] of Object.entries(games))$('game').add(new Option(title,id));
try{
 const {data,error}=await supabase.auth.getUser();if(error||!data.user){$('loginLink').hidden=false;throw Error('Entre no Portal de Gestão para acessar este painel.');}
 const {data:profile,error:pe}=await supabase.from('profiles').select('role,full_name').eq('id',data.user.id).single();
 if(pe||!['integro_admin','diretor'].includes(profile?.role))throw Error('Esta área é exclusiva de administradores e diretores.');
 userId=data.user.id;$('managerName').textContent=profile.full_name||'Gestão';
 supabase.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'||(session&&session.user.id!==userId)){userId=null;clear();feedback('Sessão encerrada. Entre novamente para consultar os dados.');$('loginLink').hidden=false;}});
 $('management').hidden=false;await load();
 setInterval(()=>{if(!document.hidden&&!loading&&userId&&!document.querySelector('#sessions details[open]'))void load();},30000);
}catch(e){feedback(e.message,true);}
