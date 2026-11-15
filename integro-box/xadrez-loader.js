(()=>{
 'use strict';
 const lobby=document.getElementById('lobby'),home=document.getElementById('brandHome');
 if(!lobby||!home||!window.BoxStorage||window.BoxXadrez)return;
 const card=document.createElement('article');card.className='card';
 card.innerHTML='<div class="card-body"><h3>Xadrez · Reinos em Duelo</h3><p>Peças cartoon em 3D, seis animações de captura e todas as regras do xadrez. Jogue contra o computador em três dificuldades ou com outra pessoa no mesmo aparelho.</p><button id="playXadrez" class="btn">Jogar Xadrez</button></div>';
 lobby.querySelector('.cards').prepend(card);
 const app=document.createElement('section');app.id='xadrezApp';app.hidden=true;app.setAttribute('aria-label','Xadrez · Reinos em Duelo');
 app.style.cssText='position:fixed;inset:0;z-index:20000;background:#121b24';document.body.append(app);const css=document.createElement('style');css.textContent='body.xadrez-playing #boxChat,body.xadrez-playing #boxOnline{display:none!important}';document.head.append(css);
 let frame=null,opening=false,closed=false,previousOverflow='';
 function hide(){if(app.hidden)return;app.hidden=true;frame?.remove();frame=null;document.body.style.overflow=previousOverflow;document.body.classList.remove('xadrez-playing');}
 function exit(){hide();home.click();document.getElementById('playXadrez')?.focus();}
 async function open(){
  if(opening||closed||!app.hidden)return;opening=true;
  try{
   await window.BoxMultiplayer?.disconnect();if(closed)return;
   home.click();for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');
   previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';app.hidden=false;document.body.classList.add('xadrez-playing');
   frame=document.createElement('iframe');frame.title='Xadrez 3D · Reinos em Duelo';frame.allow='fullscreen';frame.allowFullscreen=true;
   frame.style.cssText='width:100%;height:100%;border:0;display:block';frame.src='./xadrez/index.html?v=20261115-hud2';app.replaceChildren(frame);
  }catch{exit();}finally{opening=false;}
 }
 function receive(event){if(event.origin===location.origin&&frame&&event.source===frame.contentWindow&&event.data?.type==='integro-chess-exit')exit();}
 window.addEventListener('message',receive);home.addEventListener('click',hide,{capture:true});card.querySelector('button').onclick=open;
 window.BoxXadrez={open,hide,stop(){closed=true;hide();window.removeEventListener('message',receive);}};
})();
