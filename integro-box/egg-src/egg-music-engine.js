export const MUSIC_URL='/integro-box/assets/audio/beyond-the-forest-gate.mp3';

// Use the game's unlocked context so mobile browsers can start after loading.
export async function createMusicEngine({rawContext,volume=.45,fetchAudio=globalThis.fetch}){
 const response=await fetchAudio(MUSIC_URL);
 if(!response.ok)throw new Error('Não foi possível carregar a música do jogo.');
 const buffer=await rawContext.decodeAudioData(await response.arrayBuffer());
 const master=rawContext.createGain();
 master.gain.value=volume;master.connect(rawContext.destination);
 let source=null,offset=0,startedAt=0,disposed=false;
 function play(){
  if(disposed||source)return;
  source=rawContext.createBufferSource();source.buffer=buffer;source.loop=true;
  source.connect(master);startedAt=rawContext.currentTime;source.start(0,offset);
 }
 function pause(){
  if(!source)return;
  offset=(offset+rawContext.currentTime-startedAt)%buffer.duration;
  source.stop();source.disconnect();source=null;
 }
 function setVolume(value){if(!disposed)master.gain.setTargetAtTime(value,rawContext.currentTime,.04);}
 // Keep the same recording and its original speed while carrying an egg.
 function setMode(){}
 function dispose(){if(disposed)return;pause();disposed=true;master.disconnect();}
 return{play,pause,setVolume,setMode,dispose};
}
