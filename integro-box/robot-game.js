(function(){
 'use strict';
 const C=window.BoxRobotCore,STORE='integro-robot-v2';
 const icon=(name)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${({back:'<path d="m14 6-6 6 6 6"/>',play:'<path d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none"/>',pause:'<path d="M8 5v14M16 5v14" stroke-width="4"/>',undo:'<path d="m8 4-5 5 5 5M3 9h11a6 6 0 0 1 0 12"/>',clear:'<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6m4-6v6"/>',hint:'<path d="M9 18h6m-5 3h4M8 14a7 7 0 1 1 8 0l-1 1v1H9v-1Z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',menu:'<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',star:'<path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z" fill="currentColor" stroke="none"/>',reset:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>'})[name]||''}</svg>`;
 const robotArt=`<svg viewBox="0 0 100 112" fill="none" aria-hidden="true"><ellipse cx="50" cy="102" rx="29" ry="7" fill="#123e50" opacity=".25"/><g class="rr-bot-body"><path d="M33 83v11M67 83v11" stroke="#183f50" stroke-width="10"/><rect x="23" y="91" width="23" height="9" rx="4" fill="#eafcdd"/><rect x="55" y="91" width="23" height="9" rx="4" fill="#eafcdd"/><path d="m24 64-8 12m60-12 8 12" stroke="#61c7b4" stroke-width="10" stroke-linecap="round"/><rect x="27" y="56" width="46" height="31" rx="12" fill="#edfae6" stroke="#39988f" stroke-width="3"/><path d="M42 70h16" stroke="#57cbb6" stroke-width="6" stroke-linecap="round"/><path d="M50 22V12" stroke="#f6cb70" stroke-width="4"/><circle cx="50" cy="9" r="6" fill="#ffe490"/><rect x="12" y="31" width="10" height="22" rx="5" fill="#edb864"/><rect x="78" y="31" width="10" height="22" rx="5" fill="#edb864"/><rect x="20" y="21" width="60" height="46" rx="17" fill="#edfae6" stroke="#39988f" stroke-width="3"/><rect x="27" y="29" width="46" height="28" rx="11" fill="#153a4d"/><g class="rr-bot-eyes" fill="#88f5e3"><rect x="35" y="36" width="7" height="11" rx="3.5"/><rect x="58" y="36" width="7" height="11" rx="3.5"/></g><path d="M46 49q4 4 8 0" stroke="#8df4de" stroke-width="2" stroke-linecap="round"/><path d="M30 25h25" stroke="white" stroke-width="3" stroke-linecap="round"/></g></svg>`;
 const starArt=`<svg viewBox="0 0 80 80" aria-hidden="true"><ellipse cx="40" cy="67" rx="23" ry="6" fill="#a8702d" opacity=".2"/><path d="m40 9 9 18 21 3-15 15 4 22-19-11-19 11 4-22-15-15 21-3Z" fill="#e6a635" stroke="#fff4ae" stroke-width="3" stroke-linejoin="round"/><path d="m40 9 9 18 21 3-30 13Z" fill="#ffe28a"/><path d="m40 9-9 18-21 3 30 13Z" fill="#fff3b5"/><path d="M40 43v13L21 67Z" fill="#f5c563"/></svg>`;
 const rockArt=`<svg viewBox="0 0 80 80" aria-hidden="true"><ellipse cx="40" cy="65" rx="28" ry="8" fill="#102d38" opacity=".2"/><path d="m12 52 8-25 23-9 21 15 5 25-24 9-28-4Z" fill="var(--rock)"/><path d="m20 27 23-9 21 15-26 8Z" fill="var(--rock-light)"/><path d="m38 41 26-8 5 25-24 9Z" fill="var(--rock-dark)"/><path d="m20 27 18 14-21 22-5-11Z" fill="var(--rock)"/><path d="m30 25 13-4 8 6" fill="none" stroke="#ffffff40" stroke-width="3" stroke-linecap="round"/></svg>`;
 const crystalArt=`<svg viewBox="0 0 80 80" aria-hidden="true"><ellipse cx="40" cy="65" rx="25" ry="7" fill="#1d1d55" opacity=".3"/><path d="m35 8 16 16 1 39-17 9-13-15 1-36Z" fill="#ac9bef"/><path d="m35 8 1 34 15-18Z" fill="#ede7ff"/><path d="m36 42 16 21-17 9Z" fill="#796dc1"/><path d="m59 34 12 9-6 23-13-3-4-14Z" fill="#75c8da"/><path d="m59 34-1 19 13-10Z" fill="#d3faff"/></svg>`;
 let root=null,active=false,progress=C.sanitizeProgress(),level=0,commands=[],position=0,trail=[],index=0,status='ready',timer=null,onExit=null,storage=null,audio=null,dialog=null,focusReturn=null,hintPosition=null,saveFailed=false,stopped=false;
 const $=selector=>root?.querySelector(selector),map=()=>C.LEVELS[level],running=()=>status==='running',inRun=()=>['running','paused'].includes(status);
 function save(){try{storage?.setItem(STORE,JSON.stringify(progress));saveFailed=false;}catch{saveFailed=true;}}
 function tone(kind='step'){
  if(!progress.sound||!active)return;
  try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;audio??=new Audio();void audio.resume().catch(()=>{});const t=audio.currentTime,osc=audio.createOscillator(),gain=audio.createGain();osc.type='sine';osc.frequency.setValueAtTime(kind==='win'?660:kind==='error'?190:440,t);if(kind==='win')osc.frequency.setValueAtTime(880,t+.13);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.055,t+.015);gain.gain.exponentialRampToValueAtTime(.0001,t+.22);osc.connect(gain);gain.connect(audio.destination);osc.start(t);osc.stop(t+.24);}catch{}
 }
 function message(text,type='ready'){const el=$('#rrStatus');if(!el)return;el.textContent=text;el.dataset.type=type;}
 function cancel(){clearTimeout(timer);timer=null;}
 function hide(){cancel();active=false;document.body.classList.remove('robot-playing');if(dialog?.open)dialog.close();dialog=null;audio?.close().catch(()=>{});audio=null;}
 function show(container,options={}){
  if(stopped)return;hide();active=true;storage=window.BoxStorage;onExit=options.onExit;
  try{progress=C.sanitizeProgress(JSON.parse(storage?.getItem(STORE)||'null'));}catch{progress=C.sanitizeProgress();}
  level=progress.selected;container.innerHTML='<section id="robotApp" aria-label="Rota do Robô"></section>';root=container.firstElementChild;document.body.classList.add('robot-playing');render();
 }
 function render(){
  cancel();status='ready';commands=[];index=0;position=map().start;trail=[position];hintPosition=null;root.dataset.theme=map().theme;
  const theme=C.THEMES[map().theme];
  root.innerHTML=`<header class="rr-header"><button type="button" class="rr-icon-button" id="rrExit" aria-label="Voltar ao catálogo">${icon('back')}</button><div class="rr-brand"><span>INTEGRO BOX · LÓGICA</span><h1 id="rrTitle" tabindex="-1">Rota do Robô</h1></div><button type="button" class="rr-missions-button" id="rrMissions" aria-label="Escolher uma missão">${icon('grid')}<span>Missões</span></button><button type="button" class="rr-icon-button" id="rrMenu" aria-label="Ajuda e opções">${icon('menu')}</button></header>
   <div class="rr-workspace"><section class="rr-adventure" aria-label="Missão atual"><div class="rr-mission"><div><small>${theme.label} · ${theme.name}</small><h2>${map().name}</h2></div><div class="rr-level"><b>${String(level+1).padStart(2,'0')}</b><span>/ ${C.LEVELS.length}</span></div></div>
   <div class="rr-scene"><div class="rr-orbit" aria-hidden="true"></div><i class="rr-plant plant-a" aria-hidden="true"></i><i class="rr-plant plant-b" aria-hidden="true"></i><i class="rr-plant plant-c" aria-hidden="true"></i><div class="rr-island"><div class="rr-board" id="rrBoard" role="img"></div><svg class="rr-trail" id="rrTrail" viewBox="0 0 500 500" aria-hidden="true"><polyline points=""/></svg><div class="rr-avatar" id="rrAvatar" aria-hidden="true">${robotArt}</div></div><div class="rr-scene-label"><span class="rr-signal"></span> MISSÃO: ENCONTRAR A ESTRELA</div></div>
   <div class="rr-status-row"><span class="rr-status-dot" aria-hidden="true"></span><p id="rrStatus" role="status" aria-live="polite"></p></div></section>
   <section class="rr-controller" aria-label="Programar o robô"><div class="rr-program-title"><h2>Sua rota</h2><span id="rrCount">0 / ${C.MAX_COMMANDS}</span></div><div class="rr-queue" id="rrQueue" aria-label="Sequência de comandos"></div>
   <div class="rr-control-row"><div class="rr-directions" aria-label="Adicionar movimentos">${['L','U','D','R'].map(d=>`<button type="button" data-rr-dir="${d}" aria-label="Adicionar: ${C.DIRECTIONS[d].name}"><span aria-hidden="true">${C.DIRECTIONS[d].arrow}</span></button>`).join('')}</div><button type="button" class="rr-tool" id="rrUndo" aria-label="Apagar o último comando">${icon('undo')}</button><button type="button" class="rr-tool" id="rrClear" aria-label="Limpar a rota e voltar ao início">${icon('clear')}</button></div>
   <div class="rr-launch-row"><button type="button" class="rr-hint" id="rrHint">${icon('hint')}<span>Dica</span></button><button type="button" class="rr-run" id="rrRun">${icon('play')}<span>Executar rota</span></button></div><div class="rr-target">${icon('star')}<span id="rrTarget"></span></div><p class="rr-keyboard">Setas: adicionar · Espaço: executar/pausar · Backspace: apagar</p>
   <div class="rr-win" id="rrWin" hidden><div><span id="rrStars" class="rr-stars" aria-label=""></span><strong id="rrWinTitle">Estrela encontrada!</strong><p id="rrWinText"></p></div><div class="rr-win-actions"><button type="button" id="rrNext" class="rr-next">Próxima missão →</button><button type="button" id="rrRetry" class="rr-retry">Rever minha rota</button></div></div></section></div>
   <dialog class="rr-dialog" id="rrDialog" aria-labelledby="rrDialogTitle"><div class="rr-dialog-top"><span>ROTA DO ROBÔ</span><button type="button" class="rr-icon-button" id="rrCloseDialog" aria-label="Fechar">${icon('close')}</button></div><div id="rrDialogContent"></div></dialog>`;
  dialog=$('#rrDialog');dialog.addEventListener('close',()=>focusReturn?.isConnected&&focusReturn.focus());$('#rrCloseDialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  $('#rrExit').onclick=()=>{hide();onExit?.();};$('#rrMissions').onclick=missions;$('#rrMenu').onclick=menu;
  root.querySelectorAll('[data-rr-dir]').forEach(b=>b.onclick=()=>add(b.dataset.rrDir));$('#rrUndo').onclick=undo;$('#rrClear').onclick=clear;$('#rrHint').onclick=hint;$('#rrRun').onclick=toggleRun;$('#rrNext').onclick=()=>level<C.LEVELS.length-1?selectLevel(level+1):missions();$('#rrRetry').onclick=()=>{edited();queue();$('#rrRun').focus();};
  board();queue();message('Toque nas setas para levar o robô até a estrela.');
 }
 function selectLevel(id){cancel();level=id;progress.selected=id;save();if(dialog.open)dialog.close();render();$('#rrMissions').focus();}
 function board(){
  const m=map(),theme=C.THEMES[m.theme];$('#rrBoard').setAttribute('aria-label',`Mapa 5 por 5. Robô na linha ${Math.floor(position/5)+1}, coluna ${position%5+1}. Estrela na linha ${Math.floor(m.goal/5)+1}, coluna ${m.goal%5+1}. Obstáculos (linha, coluna): ${m.walls.map(p=>`${Math.floor(p/5)+1}, ${p%5+1}`).join('; ')}.`);
  $('#rrBoard').innerHTML=Array.from({length:25},(_,i)=>`<span class="rr-tile ${m.walls.includes(i)?'rr-wall':''} ${i===m.goal?'rr-goal':''} ${i===m.start?'rr-start':''} ${trail.includes(i)?'rr-visited':''} ${hintPosition===i?'rr-hinted':''}" aria-label="Linha ${Math.floor(i/5)+1}, coluna ${i%5+1}: ${i===position?'robô':m.walls.includes(i)?theme.obstacle:i===m.goal?'estrela':'caminho'}">${m.walls.includes(i)?m.theme==='space'?crystalArt:rockArt:i===m.goal?starArt:i===m.start?'<span class="rr-start-mark" aria-hidden="true">◎</span>':'<i aria-hidden="true"></i>'}</span>`).join('');
  $('#rrTrail polyline').setAttribute('points',trail.map(p=>`${p%5*100+50},${Math.floor(p/5)*100+50}`).join(' '));
  $('#rrAvatar').style.transform=`translate(${position%5*100}%,${Math.floor(position/5)*100}%)`;
  root.dataset.state=status;
 }
 function queue(){
  $('#rrCount').textContent=`${commands.length} / ${C.MAX_COMMANDS}`;
  $('#rrQueue').innerHTML=commands.length?commands.map((dir,i)=>`<button type="button" class="rr-command ${i<index?'is-done':''} ${inRun()&&i===index?'is-current':''} ${status==='blocked'&&i===index?'is-error':''}" data-rr-command="${i}" ${inRun()?'disabled':''} aria-label="Comando ${i+1}: ${C.DIRECTIONS[dir].name}. Remover." ${inRun()&&i===index?'aria-current="step"':''}><small>${i+1}</small><span aria-hidden="true">${C.DIRECTIONS[dir].arrow}</span></button>`).join(''):'<span class="rr-empty"><b>+ + +</b>Seu caminho começa com uma seta.</span>';
  root.querySelectorAll('[data-rr-command]').forEach(b=>b.onclick=()=>{if(inRun())return;commands.splice(+b.dataset.rrCommand,1);edited();queue();});
  root.querySelectorAll('[data-rr-dir]').forEach(b=>b.disabled=inRun()||commands.length>=C.MAX_COMMANDS);
  $('#rrUndo').disabled=inRun()||!commands.length;$('#rrClear').disabled=!commands.length&&status==='ready';$('#rrHint').disabled=inRun();
  $('#rrRun').disabled=!commands.length;$('#rrRun').innerHTML=icon(running()?'pause':'play')+`<span>${running()?'Pausar':status==='paused'?'Continuar':status==='won'?'Executar de novo':'Executar rota'}</span>`;
  const optimal=C.shortestPath(map()).length,best=progress.best[level];$('#rrTarget').textContent=`3 estrelas: ${optimal} passos${best?' · Seu recorde: '+best.steps:''}`;
  root.dataset.state=status;
 }
 function edited(){
  if(status!=='ready'){cancel();status='ready';position=map().start;trail=[position];index=0;}
  hintPosition=null;$('#rrWin').hidden=true;board();message(commands.length?'Sua rota está pronta para testar.':'Toque nas setas para montar a rota.');
 }
 function add(dir){if(!active||inRun()||!C.DIRECTIONS[dir])return;if(commands.length>=C.MAX_COMMANDS){message('Sua rota está cheia. Apague um comando para ajustar.','error');return;}commands.push(dir);edited();queue();$('#rrQueue').lastElementChild?.scrollIntoView?.({block:'nearest',inline:'nearest',behavior:'auto'});}
 function undo(){if(inRun()||!commands.length)return;commands.pop();edited();queue();}
 function clear(){cancel();commands=[];status='ready';position=map().start;trail=[position];index=0;hintPosition=null;$('#rrWin').hidden=true;board();queue();message('Rota limpa. Vamos tentar outro caminho?');}
 function pause(){if(!running())return;cancel();status='paused';queue();message(`Pausado no passo ${index} de ${commands.length}. Toque em Continuar.`);}
 function schedule(){cancel();timer=setTimeout(advance,progress.speed==='slow'?850:460);}
 function toggleRun(){
  if(!active)return;if(running()){pause();return;}if(!commands.length)return;
  if(status!=='paused'){position=map().start;trail=[position];index=0;hintPosition=null;$('#rrWin').hidden=true;}
  status='running';board();queue();tone();message(`Passo ${index+1} de ${commands.length}: ${C.DIRECTIONS[commands[index]].name.toLowerCase()}.`);schedule();
 }
 function advance(){
  timer=null;if(!active||!running())return;
  const next=C.step(map(),position,commands[index]);
  if(!next.ok){status='blocked';board();queue();tone('error');message(`Passo ${index+1}: ${next.reason==='wall'?'há um obstáculo':'o caminho termina aqui'}. Toque nesse comando para removê-lo e ajuste a rota.`,'error');return;}
  position=next.position;trail.push(position);index++;board();tone();
  if(position===map().goal){win();return;}
  if(index===commands.length){status='incomplete';queue();message('Quase lá! Acrescente mais setas. O próximo teste começa na base.','error');return;}
  queue();message(`Passo ${index+1} de ${commands.length}: ${C.DIRECTIONS[commands[index]].name.toLowerCase()}.`);$('#rrQueue [aria-current]')?.scrollIntoView?.({block:'nearest',inline:'nearest'});schedule();
 }
 function win(){
  status='won';const stars=C.starsFor(map(),index),best=progress.best[level];if(!best||index<best.steps)progress.best[level]={steps:index,stars};save();board();queue();tone('win');
  $('#rrStars').innerHTML=Array.from({length:3},(_,i)=>`<span class="${i<stars?'earned':''}">${icon('star')}</span>`).join('');$('#rrStars').setAttribute('aria-label',`${stars} de 3 estrelas`);
  $('#rrWinTitle').textContent=level===C.LEVELS.length-1?'Missão final concluída!':'Estrela encontrada!';$('#rrWinText').textContent=`${index} passos${stars===3?' · Rota perfeita!':' · Você conseguiu!'}${saveFailed?' · Não foi possível salvar agora.':''}`;
  $('#rrNext').textContent=level===C.LEVELS.length-1?'Ver minhas missões →':'Próxima missão →';$('#rrWin').hidden=false;message(`${stars} estrelas! Você levou o robô até o destino.`,'success');$('#rrNext').focus({preventScroll:true});
 }
 function hint(){
  if(inRun())return;const preview=C.simulate(map(),commands);
  if(preview.status==='blocked'){message(`Confira o comando ${preview.index+1}: ele ${preview.reason==='wall'?'encontra um obstáculo':'sai do tabuleiro'}. Toque nele para remover.`,'error');return;}
  if(preview.status==='won'){message('Sua sequência chega à estrela. Toque em Executar rota!');return;}
  const route=C.shortestPath(map(),preview.position),dir=route?.[0];hintPosition=dir?C.step(map(),preview.position,dir).position:null;board();message(dir?`Após ${commands.length?commands.length+' comandos':'a base'}, experimente ir para ${C.DIRECTIONS[dir].name.toLowerCase()}. O próximo piso está iluminado.`:'Toque em Executar rota para testar.');
 }
 function openDialog(html){pause();focusReturn=document.activeElement;$('#rrDialogContent').innerHTML=html;if(!dialog.open)dialog.showModal();}
 function missions(){
  const complete=Object.keys(progress.best).length,total=Object.values(progress.best).reduce((n,b)=>n+b.stars,0);
  openDialog(`<h2 id="rrDialogTitle">Uma estrela a cada descoberta.</h2><p>${complete} de ${C.LEVELS.length} missões · ${total} de ${C.LEVELS.length*3} estrelas</p>${Object.entries(C.THEMES).map(([key,t])=>`<section class="rr-world"><h3>${t.label} · ${t.name}</h3><div class="rr-levels">${C.LEVELS.filter(m=>m.theme===key).map(m=>`<button type="button" data-rr-level="${m.id}" ${m.id===level?'aria-current="true"':''}><b>${String(m.id+1).padStart(2,'0')}</b><span>${m.name}</span><small aria-label="${progress.best[m.id]?.stars||0} de 3 estrelas">${'★'.repeat(progress.best[m.id]?.stars||0)}${'☆'.repeat(3-(progress.best[m.id]?.stars||0))}</small></button>`).join('')}</div></section>`).join('')}`);
  root.querySelectorAll('[data-rr-level]').forEach(b=>b.onclick=()=>selectLevel(+b.dataset.rrLevel));
 }
 function menu(){
  openDialog(`<h2 id="rrDialogTitle">Pronto para explorar?</h2><p>Monte a rota com as setas e toque em <strong>Executar</strong>. Cada seta anda um piso. Você pode pausar, remover um comando ou pedir uma dica.</p><div class="rr-how"><span>${robotArt}<b>Robô</b></span><span>${starArt}<b>Destino</b></span><span>${rockArt}<b>Obstáculo</b></span></div><p>Ganhe uma estrela ao chegar, duas com até 2 passos extras e três com o menor caminho. As estrelas são conquistas deste jogo.</p><label class="rr-setting">Velocidade <select id="rrSpeed"><option value="normal" ${progress.speed==='normal'?'selected':''}>Normal</option><option value="slow" ${progress.speed==='slow'?'selected':''}>Devagar</option></select></label><label class="rr-setting">Sons do robô <input id="rrSound" type="checkbox" ${progress.sound?'checked':''}></label><div class="rr-menu-links"><button type="button" id="rrShop">Loja e coleção</button><button type="button" id="rrChat">Chat</button><button type="button" id="rrRooms">Salas</button></div><p class="rr-save-note">${saveFailed?'Salvamento indisponível neste navegador.':'Progresso salvo nesta conta e navegador.'}</p>`);
  $('#rrSpeed').onchange=e=>{progress.speed=e.target.value;save();};$('#rrSound').onchange=e=>{progress.sound=e.target.checked;save();tone();};
  $('#rrShop').disabled=!window.BoxIntGem;$('#rrShop').onclick=()=>{dialog.close();void window.BoxIntGem?.open('collection','robot');};
  for(const [id,target]of [['rrChat','boxChatToggle'],['rrRooms','boxOnlineToggle']]){const b=$('#'+id),other=document.getElementById(target);b.disabled=!other;b.onclick=()=>{dialog.close();if(other.getAttribute('aria-expanded')!=='true')other.click();};}
 }
 document.addEventListener('keydown',e=>{
  if(!active||dialog?.open||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||document.querySelector('dialog[open],#boxChatPanel:not([hidden]),#boxOnlinePanel:not([hidden])')||e.target.closest?.('input,select,textarea,[contenteditable="true"]'))return;
  const dir=({ArrowUp:'U',ArrowRight:'R',ArrowDown:'D',ArrowLeft:'L',w:'U',d:'R',s:'D',a:'L'})[e.key];
  if(dir){e.preventDefault();if(!e.repeat)add(dir);}else if(e.code==='Space'&&(!e.target.closest?.('button')||e.target.id==='rrRun')){e.preventDefault();if(!e.repeat)toggleRun();}else if(e.key==='Backspace'){e.preventDefault();undo();}else if(e.key==='Escape'){e.preventDefault();running()?pause():menu();}
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});window.addEventListener('blur',pause);
 document.getElementById('brandHome')?.addEventListener('click',hide,{capture:true});
 const play=document.getElementById('play');if(play)new MutationObserver(()=>{if(active&&(play.hidden||play.classList.contains('hidden')))hide();}).observe(play,{attributes:true,attributeFilter:['hidden','class']});
 window.BoxRobot={show,hide,pause,stop(){hide();stopped=true;},getState:()=>({active,level,position,status,index,commands:[...commands],progress:JSON.parse(JSON.stringify(progress))})};
})();
