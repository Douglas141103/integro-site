// Poll only while the portal is visible and online. Never overlap requests.
export function createAutoRefresh({refresh,canRefresh,interval=()=>30000,doc=document,win=window,online=()=>navigator.onLine,now=()=>Date.now(),setTimer=setTimeout,clearTimer=clearTimeout}){
 let timer=null,inFlight=false,stopped=false,failures=0,lastAttempt=-Infinity;
 const active=()=>doc.visibilityState==='visible'&&online();
 const cancel=()=>{if(timer!==null)clearTimer(timer);timer=null;};
 const schedule=()=>{
  cancel();if(stopped||!active())return;
  const delay=failures?Math.min(120000,30000*2**(failures-1)):interval();
  timer=setTimer(tick,delay);
 };
 async function tick(){
  cancel();if(stopped||inFlight)return;
  if(!active()||!canRefresh()){schedule();return;}
  inFlight=true;lastAttempt=now();
  try{failures=(await refresh())===false?failures+1:0;}catch{failures++;}
  finally{inFlight=false;schedule();}
 }
 const wake=()=>{
  if(stopped)return;
  if(!active()){cancel();return;}
  if(!inFlight&&now()-lastAttempt>=5000&&canRefresh())void tick();else schedule();
 };
 doc.addEventListener('visibilitychange',wake);
 doc.addEventListener('close',wake,true);
 win.addEventListener('focus',wake);
 win.addEventListener('online',wake);
 win.addEventListener('offline',wake);
 schedule();
 return {
  markUpdated(){failures=0;lastAttempt=now();schedule();},
  stop(){stopped=true;cancel();doc.removeEventListener('visibilitychange',wake);doc.removeEventListener('close',wake,true);win.removeEventListener('focus',wake);win.removeEventListener('online',wake);win.removeEventListener('offline',wake);}
 };
}
