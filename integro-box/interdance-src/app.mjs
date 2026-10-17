import {stages,generateSong,sanitizeProgress,RhythmRun,DanceAudio,setCharacterPainter,avatars,escapeHTML,formatTime} from './engine.mjs';
import {createVersusRuns,versusWinner,keyLane} from './versus.mjs';
import {drawConcert,concertLayout} from './concert.mjs';

async function loadAnimeRenderer(options){
  if(!globalThis.WebGL2RenderingContext)return null;
  const {createAnimePainter}=await import('./interdance-anime.js?v=20261017-dance-rig56');
  return createAnimePainter(options);
}

export function createInterDance({onExit,storage=window.BoxStorage,audio=new DanceAudio(),loadRenderer=loadAnimeRenderer}={}) {
  if(!storage) throw new Error('Entre com a conta da família para jogar.');
  const $=id=>document.getElementById(id), app=$('danceApp'), canvas=$('danceCanvas'), ctx=canvas.getContext('2d'), sheet=$('danceSheet');
  const pads=[...$('dancePads').querySelectorAll('[data-dance-lane]')];
  const arrow='<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5 35 21H26V35H14V21H5Z"/></svg>';
  pads.forEach((pad,index)=>{pad.innerHTML=arrow+`<small>${['A','S','W','D','←','↓','↑','→'][index]}</small>`;pad.setAttribute('aria-label',`Jogador ${Math.floor(index/4)+1}: ${['esquerda','baixo','cima','direita'][index%4]}`);});
  [...$('dancePads').children].forEach((group,index)=>{group.querySelector('span').textContent='J'+(index+1);});
  const storageKey='integro-interdance-v1';
  let progress=sanitizeProgress(null), saved=true;
  try {progress=sanitizeProgress(JSON.parse(storage.getItem(storageKey)||storage.getItem('integro-interdace-v1')||'null'));}
  catch {saved=false;}
  try {if(!storage.getItem(storageKey)&&window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) progress.reducedEffects=true;} catch {}
  audio.setVolume(progress.volume);
  let active=false,view='home',stage=stages[0],song=null,runs=[],match='solo',preferredMatch='solo',avatar=0;
  let frameId=0,width=960,height=540,generation=0,finished=false,returnView='home',toastUntil=0;
  let graphics=null,visualGeneration=0;
  function graphicsUnavailable(){setCharacterPainter(null);app.dataset.graphics='compatibility';if(active)toast('Modo leve ativado. A música e os comandos continuam normalmente.');}
  async function prepareGraphics(){
    const token=++visualGeneration;app.dataset.graphics='loading';
    try{
      const painter=await loadRenderer({onUnavailable:()=>{if(active&&token===visualGeneration)graphicsUnavailable();}});
      if(!active||token!==visualGeneration){painter?.dispose();return;}
      if(!painter){app.dataset.graphics='compatibility';return;}
      graphics=painter;graphics.setOptions({bpm:stage.bpm,reduced:progress.reducedEffects});
      setCharacterPainter(graphics);app.dataset.graphics='anime';artwork();
    }catch{if(active&&token===visualGeneration)graphicsUnavailable();}
  }
  const keyboard=new Map(),pointers=new Map(),pressed=new Array(8).fill(0);
  function persist(){try {storage.setItem(storageKey,JSON.stringify(progress));saved=true;}catch{saved=false;}}
  function toast(text){$('danceToast').textContent=text;$('danceToast').classList.add('visible');toastUntil=performance.now()+3500;}
  const time=()=>Math.max(0,audio.position()-progress.offset/1000);
  function clearInputs(){keyboard.clear();pointers.clear();pressed.fill(0);runs.forEach(run=>run.held.clear());pads.forEach(pad=>pad.classList.remove('pressed'));}
  function resize(){const rect=app.getBoundingClientRect();width=rect.width||innerWidth;height=rect.height||innerHeight;const scale=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*scale);canvas.height=Math.round(height*scale);ctx.setTransform(scale,0,0,scale,0,0);ctx.imageSmoothingEnabled=true;placeControls();}
  function hud(visible=false){$('danceHUD').hidden=!visible||match==='versus';$('danceVersusHUD').hidden=!visible||match!=='versus';$('dancePads').hidden=!visible;$('dancePlayer2Pads').hidden=match!=='versus';app.classList.toggle('dance-versus',match==='versus');}
  function placeControls(){
    const layout=concertLayout(width,height,match==='versus');
    [...$('dancePads').children].forEach((group,i)=>{const track=layout.tracks[i];if(!track)return;Object.assign(group.style,{left:track.padLeft+'px',top:track.padY+'px',width:track.padWidth+'px',height:track.padHeight+'px'});});
  }
  function artwork(){graphics?.setOptions({bpm:stage.bpm,reduced:progress.reducedEffects});const hero=$('danceHero');if(hero){hero.width=640;hero.height=260;drawConcert(hero.getContext('2d'),640,260,stage,[],0,[avatars[avatar]],{preview:true,reduced:true});}}
  function overlay(next,html){view=next;app.dataset.view=next;document.body.classList.remove('dance-in-song');$('dancePause').hidden=next==='home';$('danceOverlay').hidden=false;sheet.innerHTML=html;sheet.scrollTop=0;sheet.focus();bind();artwork();}
  const button=(action,label,primary=false)=>`<button data-action="${action}"${primary?' class="primary"':''}>${label}</button>`;
  function home(){
    generation++;audio.stop();clearInputs();hud();
    $('danceTrack').innerHTML='<b>INTER<span class="dance-word-accent">DANCE</span></b><small>Festival de ritmo</small>';
    const complete=stages.filter(s=>progress.best[`${s.id}-${progress.mode}-remix`]?.stars).length;
    overlay('home',`<div class="dance-library"><div class="dance-cover-art"><div><span class="dance-eyebrow">VOLUME 01 · INTEGRO BOX</span><h1>Sinta o som.<br><em>Entre no ritmo.</em></h1><span class="dance-cover-caption">16 músicas. Seu próximo palco.</span></div></div><div class="dance-stage-heading"><div><span class="dance-eyebrow">PLAYLIST</span><h2>Escolha sua música</h2></div><span>${complete}<small> / 16</small></span></div><div class="dance-stages">${stages.map(s=>{const best=progress.best[`${s.id}-${progress.mode}-remix`];return `<button class="dance-stage" data-stage="${s.id}" style="--track-color:${s.accent};--track-tint:${s.color}"><span class="dance-track-art" aria-hidden="true"><span>${String(s.week).padStart(2,'0')}</span></span><span class="dance-track-title"><b>${s.title}</b><small>${s.artist} <i>·</i> ${s.bpm} BPM</small></span><span class="dance-track-rating"><span class="stars" aria-label="${best?.stars||0} de 3 estrelas">${'★'.repeat(best?.stars||0)+'☆'.repeat(3-(best?.stars||0))}</span><span class="dance-play-mark" aria-hidden="true">›</span></span></button>`;}).join('')}</div><div class="dance-library-footer">${button('shop','◇ Loja IntGem')}${button('settings','Som e ajuda')}<span>${saved?'Recordes salvos nesta conta e navegador.':'Salvamento indisponível nesta sessão.'}</span></div></div>`);
  }
  function detail(id=stage.id){
    generation++;audio.stop();clearInputs();hud();stage=stages[id]||stages[0];song=generateSong(stage,progress.mode);
    $('danceTrack').innerHTML=`<b>Preparar o palco</b><small>Música ${String(stage.week).padStart(2,'0')} de 16</small>`;
    overlay('detail',`<div class="dance-detail"><div class="dance-detail-visual"><canvas id="danceHero" class="dance-detail-art" aria-label="Artistas no palco"></canvas><span class="dance-eyebrow">${stage.artist} · ${stage.place}</span><h1>${stage.title}</h1><div class="dance-facts"><span>${stage.bpm} BPM</span><span>${formatTime(song.duration)}</span><span>${song.notes.length} notas</span></div></div><div class="dance-preparation"><div class="dance-option"><span>Modo de jogo</span><div class="dance-mode">${['solo','versus'].map(mode=>`<button data-match="${mode}" aria-pressed="${preferredMatch===mode}" class="${preferredMatch===mode?'selected':''}">${mode==='solo'?'Solo':'Versus local'}</button>`).join('')}</div></div><div class="dance-option"><span>Dificuldade</span><div class="dance-mode">${['easy','normal'].map(mode=>`<button data-mode="${mode}" aria-pressed="${progress.mode===mode}" class="${progress.mode===mode?'selected':''}">${mode==='easy'?'Aprender':'Desafio'}</button>`).join('')}</div></div><label class="dance-avatar">Seu artista <select id="danceAvatar"><option value="0" ${avatar===0?'selected':''}>Duda</option><option value="1" ${avatar===1?'selected':''}>Ravi</option></select></label><p class="dance-instruction">${preferredMatch==='versus'?'Dois jogadores no mesmo aparelho. WASD × setas, ou dois conjuntos de botões.':'Toque quando a nota chegar ao alvo. Segure as notas com cauda.'}</p><div class="dance-launch">${button(preferredMatch,preferredMatch==='solo'?'▶ Jogar agora':'▶ Começar duelo',true)}${button(preferredMatch==='solo'?'versus':'solo',preferredMatch==='solo'?'Jogar a dois':'Jogar solo')}</div><div class="dance-buttons dance-secondary-actions">${button('practice','Treinar')}${button('listen','Ouvir')}${button('home','Todas as músicas')}</div><details class="dance-help"><summary>Como jogar</summary><p>As notas descem até os alvos junto dos botões. As colunas ficam no mesmo lugar. No solo, use WASD ou as setas; no versus, cada pessoa usa um conjunto. A maior pontuação vence. Para jogar a dois no celular, prefira a tela deitada.</p></details></div></div>`);
  }
  async function start(mode){
    const token=++generation;audio.stop();clearInputs();finished=false;match=mode;hud();
    overlay('loading',`<div class="dance-result"><span class="dance-eyebrow">PREPARANDO ${mode==='versus'?'O DUELO':'SEU PALCO'}</span><h1>${stage.title}</h1><p>Sintetizando a música original… <b id="danceAudioProgress">0%</b></p><p>A primeira preparação pode levar alguns segundos.</p>${button('home','Voltar às semanas')}</div>`);
    try {
      await audio.unlock();if(!active||token!==generation)return;
      song=generateSong(stage,progress.mode);
      const rendered=await audio.render(song,value=>{const label=$('danceAudioProgress');if(label&&token===generation)label.textContent=Math.round(value*100)+'%';});
      if(!rendered||!active||token!==generation)return;
      if(mode==='listen'){
        if(document.hidden){detail();return;}
        audio.play();overlay('listen',`<div class="dance-result"><span class="dance-eyebrow">TRILHA ORIGINAL</span><h1>${stage.title}</h1><canvas id="danceHero" class="dance-detail-art"></canvas><div class="dance-buttons">${button('download','↓ Baixar música WAV')}${button('detail','Voltar ao palco')}</div></div>`);return;
      }
      runs=mode==='versus'?createVersusRuns(song):[new RhythmRun(song,mode==='practice')];
      $('danceTrack').innerHTML=`<b>${stage.title}</b><small>${mode==='versus'?'VERSUS LOCAL · DUDA × RAVI':mode==='practice'?'TREINO LIVRE':'SOLO'} · ${progress.mode==='easy'?'Aprender':'Desafio'}</small>`;
      audio.play();view='playing';app.dataset.view='playing';document.body.classList.add('dance-in-song');$('danceOverlay').hidden=true;hud(true);placeControls();canvas.focus();if(document.hidden)pause();
    }catch(error){if(token!==generation||!active)return;overlay('error',`<div class="dance-result"><h1>Vamos tentar de novo?</h1><p>${escapeHTML(error.message||'Não foi possível preparar o áudio.')}</p>${button('detail','Voltar e ativar o som',true)}</div>`);}
  }
  function pause(){if(view!=='playing')return;audio.pause();clearInputs();showPause();}
  function showPause(){overlay('paused',`<div class="dance-result"><span class="dance-eyebrow">${match==='versus'?'DUELO PAUSADO':'PAUSA NO PALCO'}</span><h1>${stage.title}</h1><p>A música e as setas estão pausadas juntas.</p><div class="dance-buttons">${button('resume','▶ Continuar',true)}${button('restart','Recomeçar')}${button('settings','Som e sincronização')}${button('shop','◇ Loja IntGem')}${button('home','Escolher música')}</div></div>`);}
  async function resume(){const token=generation;try{await audio.unlock();if(!active||token!==generation||view!=='paused')return;clearInputs();audio.play(audio.offset,.8);view='playing';app.dataset.view='playing';document.body.classList.add('dance-in-song');$('danceOverlay').hidden=true;canvas.focus();toast('Prepare-se…');}catch(error){toast(error.message);}}
  function settings(){
    if(view==='loading'){generation++;audio.stop();view='detail';}
    if(view==='playing')pause();if(view==='listen')audio.pause();
    returnView=view==='paused'?'paused':['detail','listen'].includes(view)?'detail':'home';
    overlay('settings',`<div class="dance-settings"><span class="dance-eyebrow">NO SEU RITMO</span><h1>Som, efeitos e controles</h1><label>Efeitos visuais<select id="danceEffects"><option value="full" ${progress.reducedEffects?'':'selected'}>Completos — dança fluida e efeitos</option><option value="reduced" ${progress.reducedEffects?'selected':''}>Reduzidos — poses e setas estáveis</option></select></label><label>Volume <output id="danceVolumeValue">${Math.round(progress.volume*100)}%</output><input id="danceVolume" type="range" min="0" max="100" value="${progress.volume*100}"></label><label>Ajuste de sincronização <output id="danceOffsetValue">${progress.offset} ms</output><input id="danceOffset" type="range" min="-250" max="250" step="10" value="${progress.offset}"></label><p>Se você ouve a batida depois que a seta chega, aumente o ajuste. Se ouve antes, diminua. O mesmo ajuste vale para os dois jogadores.</p><div class="dance-help"><b>Solo:</b> WASD ou setas.<br><b>Versus:</b> jogador 1: A S W D · jogador 2: ← ↓ ↑ →. No celular, cada jogador tem quatro botões. Segure as notas com cauda. P ou Esc pausa os dois jogadores.<br>★ 55% · ★★ 75% · ★★★ 92%. Treino e versus não alteram os recordes solo. O versus funciona no mesmo aparelho.</div><div class="dance-buttons">${button('backSettings','Pronto',true)}${button('fullscreen','Tela cheia')}</div></div>`);
  }
  function finish(){
    if(finished)return;finished=true;audio.stopSource();clearInputs();hud();
    if(match==='versus'){
      const winner=versusWinner(runs);
      overlay('result',`<div class="dance-result"><span class="dance-eyebrow">${stage.title} · VERSUS LOCAL</span><h1>${winner===null?'Empate!':`Jogador ${winner+1} venceu!`}</h1><p>${winner===null?'Mesma pontuação. Que tal uma revanche?':`${avatars[winner].artist} fez a maior pontuação. Boa dança para os dois!`}</p><div class="dance-versus-results">${runs.map((run,index)=>{const r=run.result();return `<article class="${winner===index?'winner':''}"><h2>Jogador ${index+1} · ${avatars[index].artist}</h2><strong>${r.score.toLocaleString('pt-BR')}</strong><span>pontos</span><p>${r.accuracy.toFixed(1)}% de precisão<br>${r.combo}× melhor combo<br>${r.hits} acertos · ${r.misses} perdidas</p></article>`;}).join('')}</div><div class="dance-buttons">${button('versus','↻ Revanche',true)}${button('detail','Trocar modo')}${button('home','Escolher música')}</div></div>`);return;
    }
    const result=runs[0].result(),key=`${stage.id}-${progress.mode}-remix`,best=progress.best[key];
    if(!result.practice){progress.best[key]={score:Math.max(best?.score||0,result.score),accuracy:Math.max(best?.accuracy||0,result.accuracy),stars:Math.max(best?.stars||0,result.stars)};persist();}
    overlay('result',`<div class="dance-result"><span class="dance-eyebrow">${stage.title} · ${progress.mode==='easy'?'APRENDER':'DESAFIO'}</span><h1>${result.practice?'Treino concluído':result.passed?'Você brilhou!':'Vamos pegar o ritmo!'}</h1><div class="dance-stars">${'★'.repeat(result.stars)+'☆'.repeat(3-result.stars)}</div><div class="dance-facts"><div><b>${result.score.toLocaleString('pt-BR')}</b>pontos</div><div><b>${result.accuracy.toFixed(1)}%</b>precisão</div><div><b>${result.combo}×</b>melhor combo</div></div><p>${result.practice?'Treino livre: seu recorde não foi alterado.':saved?'Seu resultado foi salvo neste navegador.':'Não foi possível salvar nesta sessão.'}</p><p>${result.hits} acertos · ${result.misses} notas perdidas · ${result.ghosts} toques fora do tempo</p><div class="dance-buttons">${result.passed&&stage.id<15?button('next','Próxima semana →',true):button('restart','Jogar novamente',true)}${button('versus','Versus · 2 jogadores')}${button('home','Todas as semanas')}</div></div>`);
  }
  const actions={home,shop:()=>window.BoxIntGem?.open('collection','interdance'),detail:()=>detail(),solo:()=>start('solo'),versus:()=>start('versus'),practice:()=>start('practice'),listen:()=>start('listen'),restart:()=>start(match),resume,settings,next:()=>detail(Math.min(15,stage.id+1)),backSettings:()=>{persist();returnView==='paused'?showPause():returnView==='detail'?detail():home();},fullscreen:()=>{(document.fullscreenElement?document.exitFullscreen():app.requestFullscreen?.())?.catch(()=>toast('Gire o celular para jogar em paisagem.'));},download:()=>{const wav=audio.wav();if(!wav){toast('Ouça a música primeiro para baixar.');return;}const url=URL.createObjectURL(wav),link=document.createElement('a');link.href=url;link.download=`InterDance_${String(stage.week).padStart(2,'0')}.wav`;link.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}};
  function bind(){
    sheet.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>detail(+b.dataset.stage));
    sheet.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{progress.mode=b.dataset.mode;persist();view==='detail'?detail():home();});
    sheet.querySelectorAll('[data-match]').forEach(b=>b.onclick=()=>{preferredMatch=b.dataset.match;view==='detail'?detail():home();});
    sheet.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>actions[b.dataset.action]?.());
    const avatarSelect=$('danceAvatar');if(avatarSelect)avatarSelect.onchange=()=>{avatar=+avatarSelect.value;artwork();};
    const effects=$('danceEffects');if(effects)effects.onchange=()=>{progress.reducedEffects=effects.value==='reduced';persist();};
    const volume=$('danceVolume');if(volume)volume.oninput=()=>{progress.volume=+volume.value/100;audio.setVolume(progress.volume);$('danceVolumeValue').textContent=volume.value+'%';persist();};
    const offset=$('danceOffset');if(offset)offset.oninput=()=>{progress.offset=+offset.value;$('danceOffsetValue').textContent=offset.value+' ms';persist();};
  }
  function hit(index){if(!active||view!=='playing')return;if(pressed[index]++===0){runs[Math.floor(index/4)]?.hit(index%4,time());pads[index].classList.add('pressed');}}
  function release(index){pressed[index]=Math.max(0,pressed[index]-1);if(pressed[index]===0){if(view==='playing')runs[Math.floor(index/4)]?.release(index%4,time());pads[index].classList.remove('pressed');}}
  pads.forEach((pad,index)=>{
    pad.addEventListener('pointerdown',event=>{if(!active||view!=='playing'||(index>=4&&match!=='versus'))return;event.preventDefault();if(!pointers.has(event.pointerId)){pointers.set(event.pointerId,index);pad.setPointerCapture(event.pointerId);hit(index);}});
    for(const type of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(type,event=>{if(pointers.has(event.pointerId)){pointers.delete(event.pointerId);release(index);}});
  });
  document.addEventListener('keydown',event=>{
    if(!active)return;const key=event.key.toLowerCase();
    if(key==='escape'||key==='p'){if(event.target.matches?.('input,select')&&key==='p')return;event.preventDefault();if(event.repeat)return;view==='playing'?pause():view==='paused'?resume():view!=='home'&&home();return;}
    if(view!=='playing'){
      if(key==='tab'){const focusable=[...sheet.querySelectorAll('button:not([disabled]),select,input')];if(focusable.length&&event.shiftKey&&(document.activeElement===focusable[0]||document.activeElement===sheet)){event.preventDefault();focusable.at(-1).focus();}else if(focusable.length&&!event.shiftKey&&document.activeElement===focusable.at(-1)){event.preventDefault();focusable[0].focus();}}return;
    }
    const lane=keyLane(key,match==='versus');if(lane===null)return;event.preventDefault();if(event.repeat||keyboard.has(key))return;keyboard.set(key,lane);hit(lane);
  });
  document.addEventListener('keyup',event=>{const key=event.key.toLowerCase();if(keyboard.has(key)){release(keyboard.get(key));keyboard.delete(key);}});
  function interrupted(){if(!active)return;if(view==='playing')pause();else if(view==='listen')detail();}
  document.addEventListener('visibilitychange',()=>{if(document.hidden)interrupted();});window.addEventListener('blur',interrupted);window.addEventListener('resize',()=>{if(active)resize();});
  $('danceExit').onclick=()=>{hide();onExit?.();};$('dancePause').onclick=()=>{view==='playing'?pause():view==='paused'?resume():view!=='home'&&home();};$('danceSettings').onclick=settings;$('danceShop').onclick=()=>actions.shop();
  function frame(now){
    if(!active)return;frameId=requestAnimationFrame(frame);
    if(view==='playing'&&audio.context?.state!=='running'){pause();toast('Áudio interrompido. Toque em Continuar.');}
    const position=view==='playing'?time():view==='paused'?runs[0]?.time||0:view==='listen'?audio.position():progress.reducedEffects?0:now/1000;
    if(view==='playing'){
      runs.forEach(run=>run.update(position));
      if(match==='versus'){runs.forEach((run,index)=>{$('danceScore'+(index+1)).textContent=run.score.toLocaleString('pt-BR');$('danceStats'+(index+1)).textContent=Math.round(run.liveAccuracy)+'% · '+run.combo+' combo';});$('danceVersusTime').textContent=formatTime(position)+' / '+formatTime(song.duration);}
      else{$('danceScore').textContent=runs[0].score.toLocaleString('pt-BR');$('danceEnergy').value=runs[0].energy;$('danceAccuracy').textContent=Math.round(runs[0].liveAccuracy)+'% · '+runs[0].combo+' combo';$('danceTime').textContent=formatTime(position)+' / '+formatTime(song.duration);$('danceProgress').value=Math.min(1,position/song.duration);}
      if(runs.every(run=>run.status!=='playing'))finish();
    }
    graphics?.setOptions({bpm:stage.bpm,reduced:progress.reducedEffects});
    const playing=['playing','paused'].includes(view);
    if(playing)drawConcert(ctx,width,height,stage,runs,position,match==='versus'?avatars:[avatars[avatar]],{versus:match==='versus',reduced:progress.reducedEffects});
    if(now>toastUntil)$('danceToast').classList.remove('visible');
  }
  function hide(){if(!active)return;active=false;generation++;visualGeneration++;setCharacterPainter(null);graphics?.dispose();graphics=null;cancelAnimationFrame(frameId);clearInputs();audio.dispose();persist();app.hidden=true;document.body.classList.remove('dance-playing','dance-in-song');if(document.fullscreenElement===app)document.exitFullscreen?.().catch(()=>{});}
  const api={show(){if(active)return;active=true;app.hidden=false;document.body.classList.add('dance-playing');resize();home();void prepareGraphics();frameId=requestAnimationFrame(frame);},hide,pause,persist,get active(){return active;},getState:()=>({active,view,graphics:app.dataset.graphics||'compatibility',stage:stage.id,week:stage.week,mode:progress.mode,match,time:runs[0]?.time||0,players:runs.map(run=>run.result()),winner:finished&&match==='versus'?versusWinner(runs):null,progress:JSON.parse(JSON.stringify(progress)),audioRunning:audio.running})};
  return api;
}

export function installInterDance(){
  const brand=document.getElementById('brandHome'),button=document.getElementById('playInterDance');
  const game=createInterDance({onExit:()=>{brand.click();button.focus();}});
  let stopped=false,busy=false;
  brand.addEventListener('click',()=>game.hide(),{capture:true});
  async function open(){if(stopped||busy)return;busy=true;try{await window.BoxMultiplayer?.disconnect();if(stopped)return;brand.click();for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');const house=document.getElementById('houseApp');if(house)house.hidden=true;game.show();}finally{busy=false;}}
  button.onclick=open;
  window.BoxInterDance={hide:game.hide,persist:game.persist,pause:game.pause,stop(){stopped=true;game.hide();}};
  window.InterDance={getState:game.getState};
  if(['#interdance','#interdace'].includes(location.hash))void open();
  return game;
}
