export function installEngole(client,user){
 const home=document.getElementById('brandHome'),lobby=document.getElementById('lobby');
 const card=document.createElement('article');card.className='card';card.innerHTML='<div class="card-body"><h3>Engole Engole</h3><p>Engula a cidade e cresça! Jogue solo ou em salas para até 8 pessoas.</p><button id="playEngole" class="btn">Jogar Engole Engole</button></div>';lobby.querySelector('.cards').prepend(card);
 window.BoxCatalogAssets={...window.BoxCatalogAssets,'engole-engole':'./engole/capa-v1.webp'};
 const app=document.createElement('section');app.id='engoleApp';app.hidden=true;app.setAttribute('aria-label','Engole Engole');document.body.append(app);
 const css=document.createElement('link');css.rel='stylesheet';css.href='./engole/style.css?v=20261112-update1';document.head.append(css);
 let game,opening=false,closed=false,seq=0;
 function hide(){seq++;game?.hide();app.hidden=true;}
 async function open(){if(opening||closed)return;opening=true;try{await window.BoxMultiplayer?.disconnect();if(closed)return;home.click();const current=seq;for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');app.hidden=false;const {createGame}=await import('./game.mjs?v=20261112-update1');if(closed||seq!==current)return;game??=createGame(app,{client,user,exit:()=>home.click(),storage:window.BoxStorage});game.open();}catch{if(!app.hidden){app.textContent='Não foi possível abrir o jogo. ';const b=document.createElement('button');b.textContent='Voltar ao catálogo';b.onclick=()=>home.click();app.append(b);}}finally{opening=false;}}
 card.querySelector('button').onclick=open;home.addEventListener('click',hide,{capture:true});
 window.BoxEngole={open,get mode(){return game?.mode;},get usageRoom(){return game?.room?{id:game.room.id,game:'engole'}:null;},stop(){closed=true;hide();}};
}
