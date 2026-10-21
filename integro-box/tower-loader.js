export function installTower(){
 if(window.BoxTower)return window.BoxTower;
 const lobby=document.getElementById('lobby'),home=document.getElementById('brandHome');if(!lobby||!window.BoxStorage)return null;
 const card=document.createElement('article');card.className='card';card.innerHTML='<div class="card-body"><h3>TOWER</h3><p>Construa com lógica: 24 desafios de equilíbrio, pontes, sequências de cores e vento. Encaixe peças, teste a estabilidade e experimente na construção livre.</p><button id="playTower" class="btn">Jogar TOWER</button></div>';lobby.querySelector('.cards').prepend(card);
 window.BoxCatalogAssets={...window.BoxCatalogAssets,tower:'./assets/catalog-v1/tower.webp?v=20261021-tower1'};
 const css=document.createElement('link');css.rel='stylesheet';css.href='./tower.css?v=20261021-tower1';document.head.append(css);
 const app=document.createElement('section');app.id='towerApp';app.hidden=true;app.setAttribute('aria-label','TOWER — construção e lógica');document.body.append(app);
 let runtime=null,opening=false,closed=false;
 const hide=()=>{runtime?.hide();app.hidden=true;document.body.classList.remove('tower-playing');};
 const exit=()=>{hide();home.click();document.getElementById('playTower')?.focus();};
 async function open(){if(opening||closed)return;opening=true;try{await window.BoxMultiplayer?.disconnect();if(closed)return;home.click();for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');app.hidden=false;document.body.classList.add('tower-playing');if(!runtime){app.classList.add('tower-loading');app.innerHTML='<div><b>Abrindo sua oficina…</b><p>Preparando as peças e as ideias.</p></div>';const {createTowerGame}=await import('./tower.js?v=20261021-tower1');if(closed)return;app.classList.remove('tower-loading');runtime=createTowerGame(app,exit);}runtime.open();}catch(error){app.classList.add('tower-loading');app.replaceChildren();const panel=document.createElement('div'),text=document.createElement('p'),back=document.createElement('button');text.textContent='Não foi possível carregar o TOWER. Verifique sua conexão e tente novamente.';back.textContent='Voltar ao catálogo';back.onclick=exit;panel.append(text,back);app.append(panel);console.error(error);}finally{opening=false;if(closed)hide();}}
 document.getElementById('playTower').onclick=open;home.addEventListener('click',hide,{capture:true});window.BoxTower={open,hide,pause:()=>runtime?.pause(),persist:()=>runtime?.save(),getState:()=>runtime?.state(),stop(){closed=true;hide();}};return window.BoxTower;
}
