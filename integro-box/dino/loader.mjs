export function installDino(client){
  const lobby=document.getElementById('lobby'), home=document.getElementById('brandHome');
  const card=document.createElement('article');card.className='card';
  card.innerHTML='<div class="card-body"><h3>Dino Expedição</h3><p>Conduza o dinossauro por seis fases, salte obstáculos, recolha âmbares e dispute o ranking geral.</p><button id="playDino" class="btn">Jogar Dino Expedição</button></div>';
  lobby.querySelector('.cards').prepend(card);
  window.BoxCatalogAssets={...window.BoxCatalogAssets,'dino-expedicao':'./dino/capa.svg'};
  const app=document.createElement('section');app.id='dinoApp';app.hidden=true;app.setAttribute('aria-label','Dino Expedição');document.body.append(app);
  const css=document.createElement('link');css.rel='stylesheet';css.href='./dino/style.css?v=hud2';document.head.append(css);
  let game,opening=false,closed=false,sequence=0;
  const button=card.querySelector('button');
  async function rpc(action,extra={}){
    const {data,error}=await client.rpc('box_dino',{p_action:action,...extra});
    if(error)throw Error(error.message);return data;
  }
  function hide(){sequence++;game?.hide();app.hidden=true;}
  function exit(){home.click();button.focus({preventScroll:true});}
  async function open(){
    if(closed||opening)return;opening=true;
    try{
      await window.BoxMultiplayer?.disconnect();
      if(closed)return;
      home.click();const current=sequence;
      for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');
      app.hidden=false;
      const {createGame}=await import('./game.mjs?v=hud2');
      if(closed||sequence!==current)return;
      game??=createGame(app,{rpc,storage:window.BoxStorage,exit});game.open();
    }catch{
      if(closed||app.hidden)return;
      const back=document.createElement('button');back.textContent='Voltar ao catálogo';back.onclick=exit;
      app.replaceChildren('Não foi possível abrir a corrida. ',back);
    }finally{opening=false;}
  }
  button.onclick=open;home.addEventListener('click',hide,{capture:true});
  window.BoxDino={open,pause:()=>game?.pause(),get mode(){return game?.mode;},stop(){closed=true;hide();}};
}
