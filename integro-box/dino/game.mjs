import {DinoRun,STAGES,stageAt,STAGE_TICKS,FINISH} from './course.mjs?v=long2';
import {dockServices,paintTrack} from './hud.mjs?v=long2';

import {createDinoMusic} from './music.mjs?v=long2';

const fmt = n => n.toLocaleString('pt-BR');
const key = 'dino-expedicao-pendente-v1';
const safeRead = (storage,k) => {try{return JSON.parse(storage.getItem(k));}catch{return null;}};
const safeWrite = (storage,k,value) => {try{if(value===null)storage.removeItem(k);else storage.setItem(k,JSON.stringify(value));}catch{}};
export function createGame(app,{rpc,storage,exit}) {
  app.innerHTML=`<main class="dino-hud" aria-label="Dino Expedição">
    <div class="dino-game">
      <header class="dino-bar"><button data-back aria-label="Voltar ao catálogo">← Catálogo</button><h1>Dino Expedição</h1><button data-ranks aria-haspopup="dialog">Ranking</button></header>
      <div class="dino-stats"><div class="dino-phase"><small>FASE</small><strong data-stage></strong></div>
        <div><small>PONTOS</small><strong data-points>00000</strong></div><div><small>RECORDE</small><strong data-best>00000</strong></div></div>
      <div class="dino-progress"><i></i></div>
      <div class="dino-track"><canvas width="800" height="264" aria-label="Pista do dinossauro. Toque para pular."></canvas>
        <div class="dino-tally"><span>Obstáculos <b data-clears>0</b></span><span>Âmbares <b data-amber>0</b></span></div>
        <section class="dino-card"><h2 data-heading></h2><p data-info></p></section>
      </div>
      <footer class="dino-dock"><p class="dino-status" role="status"></p>
        <div class="dino-row"><div class="dino-services" aria-label="Ferramentas do Integro Box"></div>
        <div class="dino-controls"><button data-music type="button" aria-pressed="true" aria-label="Música ligada. Desligar música">♫ Som</button><button data-pause hidden>Pausar</button><button data-action></button></div></div>
      </footer>
    </div>
    <section class="dino-ranking" role="dialog" aria-modal="true" aria-labelledby="dino-rank-title" hidden>
      <div class="dino-rankhead"><h2 id="dino-rank-title">Ranking geral</h2><button data-close>Fechar</button></div><div data-board></div>
    </section></main>`;
  const q=s=>app.querySelector(s),canvas=q('canvas'),ctx=canvas.getContext('2d');
  const heading=q('[data-heading]'),info=q('[data-info]'),action=q('[data-action]'),pause=q('[data-pause]');
  const ranking=q('.dino-ranking'),status=q('.dino-status');
  let run=new DinoRun(0),mode='menu',ticket=null,visible=false,epoch=0,raf=0,previous=0,debt=0,sending=null;
  let best=Number(safeRead(storage,'dino-best'))||0, pending=safeRead(storage,key);
  const music=createDinoMusic({storage});
  const sound=q('[data-music]');
  function soundLabel(){sound.setAttribute('aria-pressed',String(music.enabled));sound.setAttribute('aria-label',music.enabled?'Música ligada. Desligar música':'Música desligada. Ligar música');sound.textContent=music.enabled?'♫ Som':'♫ Mudo';}
  soundLabel();
  const services=dockServices(q('.dino-services'),freeze);
  function paint(){
    paintTrack(canvas,ctx,run);
    const stage=stageAt(run.tick);
    q('[data-stage]').textContent='0'+(stage+1)+' / 06   '+STAGES[stage].name;
    q('[data-points]').textContent=String(run.score).padStart(5,'0');
    q('[data-clears]').textContent=String(run.clears);
    q('[data-amber]').textContent=String(run.amber);
    q('[data-best]').textContent=String(best).padStart(5,'0');
    q('.dino-progress i').style.width=(run.tick===FINISH?100:100*(run.tick%STAGE_TICKS)/STAGE_TICKS)+'%';
  }
  function controls(){
    app.dataset.mode=mode;
    music.setStage(stageAt(run.tick));music.setPlaying(visible&&(mode==='play'||mode==='loading'));
    q('.dino-card').hidden=mode==='play';
    pause.hidden=mode!=='play';
    action.disabled=mode==='loading';action.textContent=({menu:'Começar corrida',loading:'Preparando…',play:'↑ Pular',paused:'Retomar',end:'Jogar de novo'})[mode];
    heading.textContent=({menu:'Atravesse as seis fases',loading:'Preparando a pista',play:STAGES[stageAt(run.tick)].name,paused:'Corrida pausada',end:run.result==='win'?'Expedição completa!':'Fim da corrida'})[mode];
    info.textContent=mode==='end'?fmt(run.score)+' pontos · '+run.clears+' obstáculos · '+run.amber+' âmbares':
      mode==='paused'?'Retome quando estiver pronto.':mode==='play'?'Toque na pista ou pressione espaço para pular.':
      'Use espaço, ↑ ou toque na pista para pular. Cada fase dura 40 segundos. Cada obstáculo vale 25 pontos e cada âmbar vale 50.';
  }
  function freeze(){
    if(mode!=='play')return;
    mode='paused';cancelAnimationFrame(raf);previous=0;debt=0;controls();
  }
  function resume(){
    if(mode!=='paused'||document.hidden||!ranking.hidden||services.opened())return;
    void music.unlock();mode='play';previous=0;controls();raf=requestAnimationFrame(frame);
  }
  function frame(now){
    if(!visible||mode!=='play')return;
    if(previous)debt+=Math.min(100,now-previous);
    previous=now;
    const stage=stageAt(run.tick);
    while(debt>=1000/60&&!run.result){run.advance();debt-=1000/60;}
    if(stage!==stageAt(run.tick))controls();
    paint();
    if(run.result){finish();return;}
    raf=requestAnimationFrame(frame);
  }
  async function submit(){
    if(!pending)return true;
    if(sending)return sending;
    const payload=pending;
    sending=(async()=>{
      try {
        await rpc('finish',payload);
        pending=null;safeWrite(storage,key,null);
        if(visible)status.textContent='Resultado confirmado no ranking.';
        return true;
      }catch(error){
        if(error.message?.includes('run_replaced')){
          pending=null;safeWrite(storage,key,null);
          if(visible)status.textContent='Outra corrida já foi iniciada neste perfil.';
        }else if(visible)status.textContent='Resultado guardado. O envio será tentado novamente ao abrir o ranking ou começar outra corrida.';
        return false;
      }finally{sending=null;}
    })();
    return sending;
  }
  function finish(){
    mode='end';best=Math.max(best,run.score);safeWrite(storage,'dino-best',best);
    paint();controls();action.focus({preventScroll:true});
    if(ticket){pending={p_run:ticket,p_tick:run.tick,p_jumps:[...run.jumps]};safeWrite(storage,key,pending);void submit();}
    else status.textContent='Treino offline concluído. Seu recorde ficou salvo neste aparelho.';
  }
  async function start(){
    if(!visible||!['menu','end'].includes(mode))return;
    const current=epoch;
    mode='loading';ranking.hidden=true;controls();
    let entry=null;
    try {
      await submit();
      if(!visible||epoch!==current)return;
      if(!pending)entry=await rpc('start_long');
    }catch{}
    if(!visible||current!==epoch)return;
    ticket=entry?.run||null;
    run=new DinoRun(entry?.seed??Math.floor(Math.random()*99991));
    status.textContent=ticket?'Corrida válida para o ranking geral.':'Treino offline · pontuação salva apenas neste aparelho.';
    mode='play';previous=0;debt=0;controls();paint();action.focus({preventScroll:true});
    if(document.hidden||!ranking.hidden)freeze();else raf=requestAnimationFrame(frame);
  }
  async function showRanks(){
    services.close();freeze();ranking.hidden=false;q('.dino-game').inert=true;const board=q('[data-board]');board.textContent='Carregando classificação…';const current=epoch;
    q('[data-close]').focus({preventScroll:true});
    try{
      await submit();const data=await rpc('ranking');
      if(current!==epoch||!visible||ranking.hidden)return;
      board.replaceChildren();
      if(data.me){best=Math.max(best,data.me.score);safeWrite(storage,'dino-best',best);paint();}
      const own=document.createElement('p');own.textContent=data.me?'Você ocupa o '+data.me.position+'º lugar como '+data.me.name+' · '+fmt(data.me.score)+' pontos.':'Conclua uma corrida para entrar no ranking.';board.append(own);
      const list=document.createElement('ol');list.className='dino-leaders';board.append(list);
      for(const player of data.leaders){
        const row=document.createElement('li');
        for(const value of [player.position+'º',player.mine?player.name+' (você)':player.name,'Fase '+player.stage,fmt(player.score)+' pts']){
          const cell=document.createElement('span');cell.textContent=value;row.append(cell);
        }
        if(player.mine)row.classList.add('mine');list.append(row);
      }
    }catch{if(current===epoch&&visible)board.textContent='Não foi possível carregar o ranking. Confira a conexão e abra-o novamente.';}
  }
  function closeRanks(){ranking.hidden=true;q('.dino-game').inert=false;q('[data-ranks]').focus({preventScroll:true});}
  function primary(){
    if(!ranking.hidden||services.opened())return;
    void music.unlock();
    if(mode==='play')run.jump();else if(mode==='paused')resume();else void start();
  }
  function keydown(e){
    if(!visible||e.altKey||e.ctrlKey||e.metaKey)return;
    if(services.opened()||e.target?.closest?.('input,textarea,[contenteditable=true],dialog[open]'))return;
    if(!ranking.hidden&&e.code==='Tab'){e.preventDefault();q('[data-close]').focus();return;}
    if(e.code==='Escape'){e.preventDefault();if(!ranking.hidden)closeRanks();else if(mode==='play')freeze();else if(mode==='paused')resume();else exit();return;}
    if(!ranking.hidden)return;
    if(['Space','ArrowUp','KeyW'].includes(e.code)){
      if(e.code==='Space'&&e.target?.closest?.('button')&&e.target!==action)return;
      e.preventDefault();if(!e.repeat)primary();
    }else if(e.code==='KeyP'&&!e.repeat){if(mode==='paused')resume();else freeze();}
  }
  sound.onclick=()=>{music.setEnabled(!music.enabled);soundLabel();if(music.enabled)void music.unlock();};
  action.onclick=primary;
  canvas.addEventListener('pointerdown',e=>{if(visible&&mode==='play'&&ranking.hidden&&!services.opened()){e.preventDefault();void music.unlock();run.jump();}});
  pause.onclick=()=>mode==='play'?freeze():resume();
  q('[data-ranks]').onclick=showRanks;q('[data-close]').onclick=closeRanks;q('[data-back]').onclick=exit;
  document.addEventListener('keydown',keydown);document.addEventListener('visibilitychange',()=>{if(document.hidden)freeze();});
  const redraw=()=>{if(visible)paint();};
  window.addEventListener('resize',redraw);
  if(window.ResizeObserver)new window.ResizeObserver(redraw).observe(canvas);
  return {
    open(){services.attach();q('.dino-game').inert=false;visible=true;epoch++;mode='menu';ticket=null;run=new DinoRun(0);ranking.hidden=true;status.textContent='';controls();paint();action.focus({preventScroll:true});if(pending)void submit();},
    hide(){music.setPlaying(false);services.detach();visible=false;epoch++;cancelAnimationFrame(raf);}, pause:freeze,get mode(){return mode;}
  };
}
