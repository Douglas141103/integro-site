import {mountGoSnake} from './gosnake.js';
import {createGameLoader} from './game-loader.js';

// Installed by the authenticated gate only. The original games keep their own adapters.
export function installGoSnake({mount=mountGoSnake,makeLoader=createGameLoader}={}) {
  if (!window.BoxStorage) throw new Error('Entre com a conta da família para jogar.');
  const home=document.getElementById('brandHome');
  const button=document.getElementById('playGoSnake');
  let closed=false,busy=false;
  const game=mount({onExit:()=>home.click()});
  const returnHome=()=>{game.hide();home.click();};
  const load=makeLoader(returnHome);
  home.addEventListener('click',()=>game.hide(),{capture:true});
  async function open() {
    if(closed||busy)return;
    busy=true;
    try {
      await load('GoSnake',async report=>{
        await window.BoxMultiplayer?.disconnect();
        if(closed)return;
        home.click();
        for(const id of ['lobby','play','posterView','footer'])document.getElementById(id)?.classList.add('hidden');
        const house=document.getElementById('houseApp');if(house)house.hidden=true;
        await game.show(report);
        if(closed)game.hide();
      });
    } finally {busy=false;}
  }
  button.onclick=open;
  window.BoxGoSnake={hide:()=>game.hide(),persist:()=>game.persist(),stop(){closed=true;game.hide();}};
  if(location.hash==='#gosnake')void open();
  return window.BoxGoSnake;
}
