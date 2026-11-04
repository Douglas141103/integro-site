import {DinoRun,STAGES,stageAt,STAGE_TICKS} from './course.mjs';
import {draw} from './art.mjs';

const fmt = n => n.toLocaleString('pt-BR');
const key = 'dino-expedicao-pendente-v1';
const safeRead = (storage,k) => {try{return JSON.parse(storage.getItem(k));}catch{return null;}};
const safeWrite = (storage,k,value) => {try{if(value===null)storage.removeItem(k);else storage.setItem(k,JSON.stringify(value));}catch{}};
export function createGame(app,{rpc,storage,exit}) {
  app.innerHTML=`<main class="dino-shell"><header class="dino-nav"><button data-back>← Catálogo</button><span>INTEGRO BOX / ARCADE</span><button data-ranks>Ranking</button></header>
    <div class="dino-title"><div><small>CORRIDA JURÁSSICA</small><h1>Dino Expedição</h1></div>
    <div class="dino-best"><small>SEU RECORDE</small><strong data-best>00000</strong></div></div>
    <section class="dino-board" aria-label="Pista de corrida"><div class="dino-stats"><span data-stage></span><span><b data-points>00000</b> PTS</span></div>
    <canvas width="800" height="264" aria-label="Dinossauro correndo e pulando obstáculos"></canvas><div class="dino-progress"><i></i></div></section>
    <section class="dino-console"><div><h2 data-heading></h2><p data-info></p></div><div class="dino-controls"><button data-action></button><button data-pause hidden>Pausar</button></div></section>
    <p class="dino-status" role="status"></p>
    <section class="dino-ranking" hidden><div class="dino-rankhead"><h2>Ranking geral</h2><button data-close>Fechar</button></div><div data-board></div></section></main>`;
  const q=s=>app.querySelector(s),canvas=q('canvas'),ctx=canvas.getContext('2d');
  const heading=q('[data-heading]'),info=q('[data-info]'),action=q('[data-action]'),pause=q('[data-pause]');
  const ranking=q('.dino-ranking'),status=q('.dino-status');
  let run=new DinoRun(0),mode='menu',ticket=null,visible=false,epoch=0,raf=0,previous=0,debt=0,sending=null;
  let best=Number(safeRead(storage,'dino-best'))||0, pending=safeRead(storage,key);
  function paint(){
    draw(ctx,run);
    const stage=stageAt(run.tick);
    q('[data-stage]').textContent='0'+(stage+1)+' / 06   '+STAGES[stage].name;
    q('[data-points]').textContent=String(run.score).padStart(5,'0');
    q('[data-best]').textContent=String(best).padStart(5,'0');
    q('.dino-progress i').style.width=(run.tick===7200?100:100*(run.tick%STAGE_TICKS)/STAGE_TICKS)+'%';
  }
  function controls(){
    pause.hidden=!['play','paused'].includes(mode);pause.textContent=mode==='paused'?'Retomar':'Pausar';
    action.disabled=mode==='loading';action.textContent=({menu:'Começar corrida',loading:'Preparando…',play:'↑ Pular',paused:'Retomar',end:'Jogar de novo'})[mode];
    heading.textContent=({menu:'Atravesse as seis fases',loading:'Preparando a pista',play:STAGES[stageAt(run.tick)].name,paused:'Corrida pausada',end:run.result==='win'?'Expedição completa!':'Fim da corrida'})[mode];
    info.textContent=mode==='end'?fmt(run.score)+' pontos · '+run.clears+' obstáculos · '+run.amber+' âmbares':
      mode==='paused'?'Retome quando estiver pronto.':mode==='play'?'Toque na pista ou pressione espaço para pular.':
      'Use espaço, ↑ ou toque na pista para pular. Cada obstáculo vale 25 pontos e cada âmbar vale 50.';
  }
  function freeze(){
    if(mode!=='play')return;
    mode='paused';cancelAnimationFrame(raf);previous=0;debt=0;controls();
  }
  function resume(){
    if(mode!=='paused'||document.hidden||!ranking.hidden)return;
    mode='play';previous=0;controls();raf=requestAnimationFrame(frame);
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
      if(!pending)entry=await rpc('start');
    }catch{}
    if(!visible||current!==epoch)return;
    ticket=entry?.run||null;
    run=new DinoRun(entry?.seed??Math.floor(Math.random()*99991));
    status.textContent=ticket?'Corrida válida para o ranking geral.':'Treino offline · pontuação salva apenas neste aparelho.';
    mode='play';previous=0;debt=0;controls();paint();action.focus({preventScroll:true});
    if(document.hidden||!ranking.hidden)freeze();else raf=requestAnimationFrame(frame);
  }
  async function showRanks(){
    freeze();ranking.hidden=false;const board=q('[data-board]');board.textContent='Carregando classificação…';const current=epoch;
    q('[data-close]').focus({preventScroll:true});
    ranking.scrollIntoView?.({block:'nearest'});
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
  function closeRanks(){ranking.hidden=true;q('[data-ranks]').focus({preventScroll:true});}
  function primary(){
    if(!ranking.hidden)return;
    if(mode==='play')run.jump();else if(mode==='paused')resume();else void start();
  }
  function keydown(e){
    if(!visible||e.altKey||e.ctrlKey||e.metaKey)return;
    if(e.code==='Escape'){e.preventDefault();if(!ranking.hidden)closeRanks();else if(mode==='play')freeze();else if(mode==='paused')resume();else exit();return;}
    if(!ranking.hidden)return;
    if(['Space','ArrowUp','KeyW'].includes(e.code)){
      if(e.code==='Space'&&e.target?.closest?.('button')&&e.target!==action)return;
      e.preventDefault();if(!e.repeat)primary();
    }else if(e.code==='KeyP'&&!e.repeat){if(mode==='paused')resume();else freeze();}
  }
  action.onclick=primary;
  canvas.addEventListener('pointerdown',e=>{if(visible&&mode==='play'&&ranking.hidden){e.preventDefault();run.jump();}});
  pause.onclick=()=>mode==='play'?freeze():resume();
  q('[data-ranks]').onclick=showRanks;q('[data-close]').onclick=closeRanks;q('[data-back]').onclick=exit;
  document.addEventListener('keydown',keydown);document.addEventListener('visibilitychange',()=>{if(document.hidden)freeze();});
  return {
    open(){visible=true;epoch++;mode='menu';ticket=null;run=new DinoRun(0);ranking.hidden=true;status.textContent='';controls();paint();action.focus({preventScroll:true});if(pending)void submit();},
    hide(){visible=false;epoch++;cancelAnimationFrame(raf);}, pause:freeze,get mode(){return mode;}
  };
}
