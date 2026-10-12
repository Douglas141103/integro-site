import {supabase,requireFamily} from './access.js';
const message=document.getElementById('boxGateMessage');
let unloaded=false;
function lock(){
 if(unloaded)return;unloaded=true;
 document.body.classList.add('box-locked');
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
  await script('./classic-games.js?v=20261012-2');
  await script('./worlds.js?v=20261012-2');
  await import('./multiplayer.js?v=20261012-2');
  if(!unloaded){document.body.classList.remove('box-locked');document.getElementById('boxGate').hidden=true;}
  document.getElementById('boxLogout').onclick=async()=>{await window.BoxMultiplayer?.disconnect();await supabase.auth.signOut();lock();};
 }
} catch(error){message.textContent=error.message||'Não foi possível verificar o acesso. Tente novamente.';document.getElementById('boxRetry').hidden=false;}
