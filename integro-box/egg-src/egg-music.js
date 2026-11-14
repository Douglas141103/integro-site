const KEY='integro-egg-music-v1',clamp=v=>Math.max(0,Math.min(1,v));
export function musicMode(carrying,subsoil=false){if(subsoil)return 'subsoil';return carrying!==null&&carrying!==undefined?'chase':'calm';}
export function createEggMusic({storage,loadEngine=()=>import('./egg-music-engine.js'),createContext=()=>{const Audio=globalThis.window?.AudioContext||globalThis.window?.webkitAudioContext;return Audio?new Audio({latencyHint:'playback'}):null;},schedule=setTimeout,cancel=clearTimeout}={}){
 let enabled=true,volume=.45,state={active:false,paused:false,hidden:false,frozen:false,carrying:null},engine=null,raw=null,pending=null,running=false,disposed=false,suspendTimer=null;
 try{const saved=JSON.parse(storage?.getItem(KEY)||'null');if(typeof saved?.enabled==='boolean')enabled=saved.enabled;if(Number.isFinite(saved?.volume))volume=clamp(saved.volume);}catch{}
 const wanted=()=>!disposed&&enabled&&volume>0&&state.active&&!state.paused&&!state.hidden&&!state.frozen;
 const save=()=>{try{storage?.setItem(KEY,JSON.stringify({enabled,volume}));}catch{}};
 function reconcile(){
  if(!engine)return;engine.setMode(musicMode(state.carrying,state.subsoil));engine.setVolume(volume);
  if(wanted()&&raw?.state==='running'){
   if(suspendTimer!==null){cancel(suspendTimer);suspendTimer=null;}
   if(!running){running=true;engine.play();}
  }else{if(running){running=false;engine.pause();}if(raw?.state==='running'&&suspendTimer===null)suspendTimer=schedule(()=>{suspendTimer=null;if(!wanted())void raw?.suspend().catch(()=>{});},100);}
 }
 async function unlock(){
  if(disposed||!enabled||volume===0||!state.active)return false;
  if(pending)return pending;
  try{
   // Resume in the input handler, before loading the engine, for mobile policies.
   if(!raw)raw=createContext();if(!raw)return false;
   const resumed=raw.resume();
   pending=(async()=>{await resumed;if(disposed)return false;if(!engine){const {createMusicEngine}=await loadEngine();if(disposed)return false;const loaded=await createMusicEngine({rawContext:raw,mode:musicMode(state.carrying,state.subsoil),volume});if(disposed){loaded.dispose();return false;}engine=loaded;}reconcile();return true;})().catch(()=>{engine?.dispose();engine=null;running=false;const failed=raw;raw=null;void failed?.close().catch(()=>{});return false;}).finally(()=>{pending=null;});
   return pending;
  }catch{return false;}
 }
 function sync(next){state={...state,...next};reconcile();}
 function setEnabled(v){enabled=!!v;save();reconcile();}
 function setVolume(v){if(!Number.isFinite(Number(v)))return;volume=clamp(Number(v));save();reconcile();}
 function dispose(){if(disposed)return;disposed=true;if(suspendTimer!==null)cancel(suspendTimer);engine?.dispose();engine=null;running=false;void raw?.close().catch(()=>{});}
 return{unlock,sync,setEnabled,setVolume,dispose,getState:()=>({enabled,volume,mode:musicMode(state.carrying,state.subsoil),ready:!!engine,playing:running})};
}
