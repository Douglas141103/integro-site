import {supabase,requireFamily} from './access.js?v=20261015-chat1';
const message=document.getElementById('boxGateMessage');
let unloaded=false;
function lock(){
 if(unloaded)return;unloaded=true;
 document.body.classList.add('box-locked');
 window.BoxChat?.stop();
 window.BoxPresence?.stop();
 window.BoxGoSnake?.stop();
 window.BoxRush?.stop();
 window.BoxBounce?.stop();
 window.BoxInterDance?.stop();
 window.BoxCraft?.stop?.();
 window.BoxEggCloud?.stop();
 window.BoxUsage?.stop();
 window.BoxMultiplayer?.disconnect();
 location.replace('/portal-familia/index.html?next=integro-box');
}
function script(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Não foi possível carregar os jogos. Recarregue a página.'));document.body.append(s);});}
try {
 const user=await requireFamily();
 if(user){
  window.BoxStorage={getItem:k=>localStorage.getItem('box:'+user.id+':'+k),setItem:(k,v)=>localStorage.setItem('box:'+user.id+':'+k,v),removeItem:k=>localStorage.removeItem('box:'+user.id+':'+k)};
  supabase.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'||(session&&session.user.id!==user.id)||(!session&&event!=='INITIAL_SESSION'))lock();});
  message.textContent='Preparando os jogos…';
  const {mountPlayerProfile}=await import('./player-profile.js?v=20261015-chat1');
  mountPlayerProfile(user);
  const {startPresence}=await import('./presence.js?v=20261015-chat1');
  if(!unloaded)startPresence(user);
  await script('./classic-games.js?v=20261012-usage1');
  await script('./craft.js?v=20261015-craft6');
  if(unloaded)throw new Error('Sessão encerrada. Entre novamente.');
  await script('./egg.js?v=20261014-egg14-powers1');
  await script('./worlds.js?v=20261013-egg1');
  await import('./multiplayer.js?v=20261015-chat1');
  if(!unloaded)await import('./chat.js?v=20261015-chat6');
  if(!unloaded)await import('./egg-cloud.js?v=20261014-egg14-powers1');
  if(!unloaded){const {installGoSnake}=await import('./gosnake.js?v=20261013-snake1');installGoSnake();}
  if(!unloaded){const {installInterDance}=await import('./interdance.js?v=20261013-dance1');installInterDance();}
  if(!unloaded)await script('./bounce-core.js?v=20261014-bounce3');
  if(!unloaded)await script('./bounce-render.js?v=20261014-bounce3');
  if(!unloaded)await script('./bounce.js?v=20261014-bounce3');
  if(!unloaded){const {installRush}=await import('./rush.js?v=20261015-rush-art2');installRush();}
  if(!unloaded){const {startUsage}=await import('./usage.js?v=20261015-rush1');startUsage();}
  if(!unloaded)await script('./catalog.js?v=20261015-rush1');
  if(!unloaded){document.body.classList.remove('box-locked');document.getElementById('boxGate').hidden=true;}
  document.getElementById('boxLogout').onclick=async()=>{await window.BoxEggCloud?.flush();await window.BoxUsage?.stop();
 window.BoxMultiplayer?.disconnect();await supabase.auth.signOut();lock();};
 }
} catch(error){message.textContent=error.message||'Não foi possível verificar o acesso. Tente novamente.';document.getElementById('boxRetry').hidden=false;}
