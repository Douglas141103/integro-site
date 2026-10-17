export function installBlueWorld(){
 if(window.BoxBlueWorld)return window.BoxBlueWorld;
 const lobby=document.getElementById('lobby');if(!lobby||!window.BoxStorage)return;
 const card=document.createElement('article');card.className='card';card.innerHTML='<div class="card-body"><h3>Blue World</h3><p>Devolva a luz a Lúmina. Explore as quatro fases dos Campos do Orvalho, restaure pontes e liberte o guardião Bront.</p><button id="playBlueWorld" class="btn">Jogar Blue World</button></div>';lobby.querySelector('.cards').prepend(card);
 window.BoxCatalogAssets={...window.BoxCatalogAssets,'blue-world':'./assets/blue-world-cover.webp?v=20261017-blue1'};
 const app=document.createElement('section');app.id='blueApp';app.hidden=true;app.setAttribute('aria-label','Blue World — Campos do Orvalho');document.body.append(app);
 let runtime=null,loading=false,stopped=false;const button=card.querySelector('button');
 button.addEventListener('click',async()=>{
  if(loading||stopped)return;loading=true;button.disabled=true;button.textContent='Abrindo Blue World…';
  try{if(!runtime){const {mountBlueWorld}=await import('./blue-world.js?v=20261017-blue2');if(stopped)return;runtime=mountBlueWorld(app);}runtime.show();}
  catch(error){console.error('Blue World não carregou',error);window.alert('Não foi possível carregar Blue World. Confira sua conexão e tente novamente.');}
  finally{loading=false;button.disabled=false;button.textContent='▶ Jogar';}
 });
 window.BoxBlueWorld={stop(){stopped=true;runtime?.stop();},pause(){runtime?.pause();},get active(){return runtime?.active||false;}};return window.BoxBlueWorld;
}
