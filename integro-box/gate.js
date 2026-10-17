import {supabase,requireFamily} from './access.js?v=20261016-intgem1';
// Old game links must enter through the catalog before any game installer runs.
const gameAnchors=new Set(['#interdance','#interdace','#gosnake','#interball','#fruitbox','#egggame','#fuitcort','#integrocraft','#blueworld','#blue-world']);
if(gameAnchors.has(location.hash))history.replaceState(history.state,'',location.pathname+location.search);
const message=document.getElementById('boxGateMessage');
const gate=document.getElementById('boxGate');
const phase=text=>{message.textContent=text;};
let unloaded=false;
function lock(){
 if(unloaded)return;unloaded=true;
 document.body.classList.add('box-locked');
 window.BoxIntGem?.stop();
 window.BoxChat?.stop();
 window.BoxPresence?.stop();
 window.BoxGoSnake?.stop();
 window.BoxRush?.stop();
 window.BoxBounce?.stop();
 window.BoxInterDance?.stop();
 window.BoxRobot?.stop();
 window.BoxBlueWorld?.stop();
 window.BoxCraft?.stop?.();
 window.BoxEggCloud?.stop();
 window.BoxUsage?.stop();
 window.BoxMultiplayer?.disconnect();
 location.replace('./entrar.html');
}
function script(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Não foi possível carregar os jogos. Recarregue a página.'));document.body.append(s);});}
try {
 const user=await requireFamily();
 if(user){
  window.BoxStorage={getItem:k=>localStorage.getItem('box:'+user.id+':'+k),setItem:(k,v)=>localStorage.setItem('box:'+user.id+':'+k,v),removeItem:k=>localStorage.removeItem('box:'+user.id+':'+k)};
  supabase.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'||(session&&session.user.id!==user.id)||(!session&&event!=='INITIAL_SESSION'))lock();});
  phase('Preparando os seus mundos…');
  const {mountPlayerProfile}=await import('./player-profile.js?v=20261016-intgem1');
  mountPlayerProfile(user);
  const {startPresence}=await import('./presence.js?v=20261016-intgem1');
  if(!unloaded)startPresence(user);
  await script('./classic-games.js?v=20261017-robot1');
  await script('./robot-core.js?v=20261017-robot1');
  await script('./robot-game.js?v=20261017-robot1');
  await script('./craft.js?v=20261015-craft6');
  if(unloaded)throw new Error('Sessão encerrada. Entre novamente.');
  phase('Montando as aventuras 3D…');
  await script('./egg.js?v=20261016-egg-income70');
  await script('./fruit.js?v=20261016-fruit-compact1');
  await script('./worlds.js?v=20261016-fruit20-toon1');
  phase('Conectando amigos e salas…');
  await import('./multiplayer.js?v=20261016-box-ui2');
  if(!unloaded)await import('./chat.js?v=20261016-intgem1');
  if(!unloaded)await import('./egg-cloud.js?v=20261016-intgem1');
  if(!unloaded){const {installGoSnake}=await import('./gosnake.js?v=20261013-snake1');installGoSnake();}
  if(!unloaded){const {installInterDance}=await import('./interdance.js?v=20261017-dance-moves1');installInterDance();}
  if(!unloaded)await script('./bounce-core.js?v=20261014-bounce3');
  if(!unloaded)await script('./bounce-render.js?v=20261016-intgem1');
  if(!unloaded)await script('./bounce.js?v=20261016-intgem1');
  if(!unloaded){const {installRush}=await import('./rush.js?v=20261016-eggshop1');installRush();}
  if(!unloaded){const {installBlueWorld}=await import('./blue-loader.js?v=20261017-blue2');installBlueWorld();}
  if(!unloaded){const {startUsage}=await import('./usage.js?v=20261017-blue1');startUsage();}
  phase('Organizando seu catálogo…');
  if(!unloaded)await script('./catalog.js?v=20261017-blue1');
  if(!unloaded){gate.setAttribute('aria-busy','false');document.body.classList.remove('box-locked');gate.hidden=true;const {startIntGem}=await import('./intgem.js?v=20261016-box-ui2');await startIntGem({user});}
  document.getElementById('boxLogout').onclick=async()=>{await window.BoxEggCloud?.flush();await window.BoxUsage?.stop();
 window.BoxMultiplayer?.disconnect();await supabase.auth.signOut();lock();};
 }
} catch(error){gate.dataset.state='error';gate.setAttribute('aria-busy','false');message.textContent=error.message||'Não foi possível verificar o acesso. Tente novamente.';document.getElementById('boxRetry').hidden=false;}
