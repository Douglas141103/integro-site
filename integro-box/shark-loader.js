export function installShark(){
 if(window.BoxShark)return window.BoxShark;
 const lobby=document.getElementById('lobby'),home=document.getElementById('brandHome');if(!lobby||!window.BoxStorage)return null;
 const card=document.createElement('article');card.className='card';card.innerHTML='<div class="card-body"><h3>Shark</h3><p>Coma peixes menores e cresça até a evolução 60. Explore seis regiões em um oceano 3D cartoon, complete missões e equipe seu tubarão na Loja das Marés.</p><button id="playShark" class="btn">Jogar Shark</button></div>';lobby.querySelector('.cards').prepend(card);
 window.BoxCatalogAssets={...window.BoxCatalogAssets,shark:'./assets/catalog-v1/shark.webp?v=20261020-shark2'};
 const css=document.createElement('link');css.rel='stylesheet';css.href='./shark.css?v=20261020-shark2';document.head.append(css);
 const app=document.createElement('section');app.id='sharkApp';app.hidden=true;app.setAttribute('aria-label','Shark — oceano 3D');document.body.append(app);
 let runtime=null,opening=false,closed=false;
 const hide=()=>{runtime?.hide();app.hidden=true;document.body.classList.remove('shark-playing');};
 const exit=()=>{hide();home.click();document.getElementById('playShark')?.focus();};
 async function open(){if(opening||closed)return;opening=true;try{await window.BoxMultiplayer?.disconnect();if(closed)return;home.click();for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');app.hidden=false;document.body.classList.add('shark-playing');if(!runtime){app.classList.add('shark-loading');app.innerHTML='<div><b>Preparando o oceano…</b><p>Seu mergulho está quase pronto.</p></div>';const {createSharkGame}=await import('./shark.js?v=20261020-shark2');if(closed)return;app.classList.remove('shark-loading');runtime=createSharkGame(app,exit);}runtime.open();}catch(error){app.classList.add('shark-loading');app.replaceChildren();const panel=document.createElement('div'),text=document.createElement('p'),back=document.createElement('button');text.textContent='Não foi possível carregar o Shark. Verifique sua conexão e tente novamente.';back.textContent='Voltar ao catálogo';back.onclick=exit;panel.append(text,back);app.append(panel);console.error(error);}finally{opening=false;if(closed)hide();}}
 document.getElementById('playShark').onclick=open;home.addEventListener('click',hide,{capture:true});window.BoxShark={open,hide,pause:()=>runtime?.pause(),persist:()=>runtime?.save(),getState:()=>runtime?.state(),stop(){closed=true;hide();}};return window.BoxShark;
}
