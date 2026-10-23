export function installDescubra(){
 if(window.BoxDescubra)return window.BoxDescubra;
 const lobby=document.getElementById('lobby'),home=document.getElementById('brandHome');if(!lobby||!window.BoxStorage)return null;
 const card=document.createElement('article');card.className='card';card.innerHTML='<div class="card-body"><h3>Descubra!</h3><p>Explore a nave Integro em 2D cartoon. Complete tarefas, investigue sabotagens e descubra o infiltrado! Jogue sozinho contra bots ou em salas online para até seis pessoas.</p><button id="playDescubra" class="btn">Jogar Descubra!</button></div>';lobby.querySelector('.cards').prepend(card);
 window.BoxCatalogAssets={...window.BoxCatalogAssets,descubra:'./assets/catalog-v1/descubra.webp?v=20261023-walk2'};
 const css=document.createElement('link');css.rel='stylesheet';css.href='./descubra.css?v=20261023-walk2';document.head.append(css);
 const app=document.createElement('section');app.id='descubraApp';app.hidden=true;app.setAttribute('aria-label','Descubra! — nave Integro');document.body.append(app);
 let runtime,opening=false,closed=false;
 function hide(){runtime?.hide();app.hidden=true;document.body.classList.remove('descubra-playing');}
 function exit(){hide();home.click();document.getElementById('playDescubra')?.focus();}
 async function open(rooms=false){if(opening||closed)return;opening=true;try{await window.BoxMultiplayer?.disconnect();home.click();if(closed)return;for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');app.hidden=false;document.body.classList.add('descubra-playing');if(!runtime){app.textContent='Preparando a nave Integro…';const [{createDescubra},{supabase}]=await Promise.all([import('./descubra-src/game.mjs?v=20261023-walk2'),import('./access.js?v=20261016-intgem1')]);if(closed)return;runtime=createDescubra(app,exit,async(action,arg)=>{const {data,error}=await supabase.rpc('descubra_room',{p_action:action,p_arg:arg});if(error)throw new Error('Não foi possível conectar à nave. Confira a internet e entre novamente, se necessário.');return data;});}runtime.open(rooms===true);}catch(e){app.replaceChildren();const p=document.createElement('p'),b=document.createElement('button');p.textContent=e.message;b.textContent='Voltar ao catálogo';b.onclick=exit;app.append(p,b);}finally{opening=false;if(closed)hide();}}
 document.getElementById('playDescubra').onclick=()=>open();home.addEventListener('click',hide,{capture:true});
 window.BoxDescubra={open,hide,pause:()=>runtime?.pause(),getState:()=>runtime?.getState(),stop(){closed=true;hide();}};return window.BoxDescubra;
}
