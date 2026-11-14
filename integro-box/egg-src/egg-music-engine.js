export const MUSIC_URL='/integro-box/assets/audio/beyond-the-forest-gate.mp3';
export const SUBSOIL_MUSIC_URL='/integro-box/assets/audio/before-the-magma-rises.mp3';

// Share the unlocked context, volume and pause behavior across both recordings.
export async function createMusicEngine({rawContext,mode='calm',volume=.45,fetchAudio=globalThis.fetch}){
 const tracks=new Map(),loading=new Map();
 const trackFor=mode=>mode==='subsoil'?SUBSOIL_MUSIC_URL:MUSIC_URL;
 let current=trackFor(mode),source=null,startedAt=0,playing=false,disposed=false;
 const master=rawContext.createGain();
 master.gain.value=volume;master.connect(rawContext.destination);
 async function load(url){
  if(tracks.has(url))return tracks.get(url);
  if(!loading.has(url))loading.set(url,(async()=>{
   const response=await fetchAudio(url);
   if(!response.ok)throw new Error('Não foi possível carregar a música do jogo.');
   const buffer=await rawContext.decodeAudioData(await response.arrayBuffer());
   const track={buffer,offset:0};if(!disposed)tracks.set(url,track);return track;
  })().finally(()=>loading.delete(url)));
  return loading.get(url);
 }
 function start(){
  const track=tracks.get(current);
  if(disposed||!playing||source||!track)return;
  source=rawContext.createBufferSource();source.buffer=track.buffer;source.loop=true;
  source.connect(master);startedAt=rawContext.currentTime;source.start(0,track.offset);
 }
 function stop(){
  if(!source)return;
  const track=tracks.get(current);
  track.offset=(track.offset+rawContext.currentTime-startedAt)%track.buffer.duration;
  source.stop();source.disconnect();source=null;
 }
 function prepare(){void load(current).then(start).catch(()=>{});}
 function play(){if(disposed)return;playing=true;if(tracks.has(current))start();else prepare();}
 function pause(){playing=false;stop();}
 function setVolume(value){if(!disposed)master.gain.setTargetAtTime(value,rawContext.currentTime,.04);}
 function setMode(mode){
  const next=trackFor(mode);if(disposed||next===current)return;
  stop();current=next;if(tracks.has(current))start();else prepare();
 }
 function dispose(){if(disposed)return;pause();disposed=true;master.disconnect();tracks.clear();}
 try{await load(current);}catch(error){dispose();throw error;}
 return{play,pause,setVolume,setMode,dispose};
}
