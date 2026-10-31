import {supabase} from './access.js?v=20261016-intgem1';

// One ephemeral key per account; names, emails and profile IDs never enter the channel.
export async function accountPresenceKey(id,webCrypto=crypto){
 const bytes=await webCrypto.subtle.digest('SHA-256',new TextEncoder().encode('integro-box-online-v1:'+id));
 return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
}
export function countOnline(state){
 return Object.values(state).filter(entries=>Array.isArray(entries)&&entries.some(entry=>entry.online===true)).length;
}
export function startPresence(user,{client=supabase,doc=document,win=window,makeKey=accountPresenceKey}={}){
 const name=doc.getElementById('boxUserName'),label=doc.getElementById('boxOnlineCount'),badge=doc.getElementById('boxPresence');
 // The player-profile module owns the private student label.
 if(!name.textContent.trim())name.textContent='Jogador';
 let channel,stopped=false,connected=false,synced=false,operation=Promise.resolve(),virtual=0,virtualReady=false,virtualTimer=null;
 function unavailable(message='Conectando…'){label.textContent=message;badge.dataset.state='pending';}
 function render(){if(stopped||!connected||!synced)return;if(!virtualReady){unavailable('Atualizando participantes…');return;}const n=countOnline(channel.presenceState())+virtual;label.textContent=n+' '+(n===1?'participante online':'participantes online');badge.dataset.state='online';}
 async function refreshVirtual(){
  if(stopped||doc.hidden)return;
  try{const {data,error}=await client.rpc('box_virtual_presence');if(error||!Number.isInteger(data?.active)||data.active<0||data.active>140)throw Error('presence');
   if(stopped)return;virtual=data.active;virtualReady=true;render();
  }catch{virtual=0;virtualReady=false;if(!stopped&&connected)unavailable('Online indisponível');}
  finally{if(!stopped){win.clearTimeout(virtualTimer);virtualTimer=win.setTimeout(refreshVirtual,15000);}}
 }
 function visibility(){
  operation=operation.catch(()=>{}).then(async()=>{
   if(stopped||!connected||!channel)return;
   try{const result=doc.hidden?await channel.untrack():await channel.track({online:true});if(!doc.hidden)void refreshVirtual();if(!stopped&&result!=='ok')unavailable('Online indisponível');}
   catch{if(!stopped)unavailable('Online indisponível');}
  });
  return operation;
 }
 function offline(){connected=false;synced=false;unavailable('Sem conexão');}
 function online(){if(!stopped){unavailable('Reconectando…');if(channel?.state==='joined'){connected=true;synced=false;void visibility();}}}
 async function stop(){
  if(stopped)return;stopped=true;connected=false;win.clearTimeout(virtualTimer);
  doc.removeEventListener('visibilitychange',visibility);win.removeEventListener('offline',offline);win.removeEventListener('online',online);win.removeEventListener('pagehide',stop);
  await operation.catch(()=>{});if(channel)await client.removeChannel(channel);
 }
 const ready=(async()=>{
  try{
   const key=await makeKey(user.id);if(stopped)return;
   channel=client.channel('integro-box-online-v1',{config:{presence:{key}}});
   channel.on('presence',{event:'sync'},()=>{synced=true;render();}).subscribe(status=>{
    if(stopped)return;
    if(status==='SUBSCRIBED'){connected=true;synced=false;void visibility();}
    else if(['CHANNEL_ERROR','TIMED_OUT','CLOSED'].includes(status)){connected=false;synced=false;unavailable('Online indisponível');}
   });
  }catch{if(!stopped)unavailable('Online indisponível');}
 })();
 doc.addEventListener('visibilitychange',visibility);win.addEventListener('offline',offline);win.addEventListener('online',online);win.addEventListener('pagehide',stop);
 unavailable();const api={stop,ready};win.BoxPresence=api;return api;
}
