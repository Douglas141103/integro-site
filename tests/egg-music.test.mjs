import test from 'node:test';
import assert from 'node:assert/strict';
import {createEggMusic,musicMode} from '../integro-box/egg-src/egg-music.js';
import {createDrumSamples} from '../integro-box/egg-src/egg-music-drums.js';
import {musicStep,MUSIC_TEMPOS} from '../integro-box/egg-src/egg-music-score.js';
function fixture(options={}){
 const calls=[],timers=new Map(),saved=new Map();let id=0;
 const raw={state:'suspended',resume(){calls.push('resume');this.state='running';return Promise.resolve();},suspend(){calls.push('suspend');this.state='suspended';return Promise.resolve();},close(){this.state='closed';return Promise.resolve();}};
 const engine={setMode:v=>calls.push(['mode',v]),setVolume:v=>calls.push(['volume',v]),play:()=>calls.push('play'),pause:()=>calls.push('pause'),dispose:()=>calls.push('dispose')};
 const storage={getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)};
 const config={storage,createContext:()=>raw,loadEngine:async()=>({createMusicEngine:()=>engine}),schedule:fn=>{timers.set(++id,fn);return id;},cancel:n=>timers.delete(n),...options};
 return{music:createEggMusic(config),calls,raw,storage,engine,config,flush(){for(const [id,fn]of timers){timers.delete(id);fn();}}};
}
test('egg possession switches themes, including the first egg, and deposit or loss restores calm',async()=>{
 const f=fixture();f.music.sync({active:true});await f.music.unlock();assert.equal(f.music.getState().mode,'calm');assert.equal(f.music.getState().playing,true);
 for(const carrying of [0,22]){f.music.sync({carrying});assert.equal(f.music.getState().mode,'chase');f.music.sync({carrying:null});assert.equal(f.music.getState().mode,'calm');}
 for(let i=0;i<100;i++)f.music.sync({carrying:null});assert.equal(f.calls.filter(x=>x==='play').length,1);f.music.dispose();
 assert.equal(musicMode(undefined),'calm');
});
test('menus, hidden tabs, frozen rooms and exiting silence music and suspend audio',async()=>{
 for(const [flag,value]of [['paused',true],['hidden',true],['frozen',true],['active',false]]){
  const f=fixture();f.music.sync({active:true});await f.music.unlock();f.music.sync({[flag]:value});assert.equal(f.music.getState().playing,false);f.flush();assert.equal(f.raw.state,'suspended');
  f.music.sync({[flag]:!value});await f.music.unlock();assert.equal(f.music.getState().playing,true);f.music.dispose();
 }
});
test('mute and volume survive reload; zero volume stops audio',async()=>{
 const f=fixture();f.music.sync({active:true});await f.music.unlock();f.music.setVolume(.23);f.music.setEnabled(false);f.flush();assert.equal(f.music.getState().playing,false);
 const second=createEggMusic(f.config);assert.equal(second.getState().enabled,false);assert.equal(second.getState().volume,.23);second.dispose();
 f.music.setEnabled(true);await f.music.unlock();assert.equal(f.music.getState().playing,true);f.music.setVolume(0);f.flush();assert.equal(f.raw.state,'suspended');f.music.dispose();
});
test('leaving during engine loading never starts music and closes the suspended audio path',async()=>{
 let resolve,loads=0;const deferred=new Promise(r=>resolve=r);const f=fixture({loadEngine:()=>{loads++;return deferred;}});f.music.sync({active:true});const first=f.music.unlock(),second=f.music.unlock();await Promise.resolve();f.music.sync({active:false});resolve({createMusicEngine:()=>f.engine});await Promise.all([first,second]);f.flush();assert.equal(loads,1);assert(!f.calls.includes('play'));assert.equal(f.raw.state,'suspended');f.music.dispose();
});
test('blocked audio can retry and unavailable audio does not break the game',async()=>{
 const f=fixture();f.raw.resume=()=>Promise.reject(new Error('blocked'));f.music.sync({active:true});assert.equal(await f.music.unlock(),false);assert.equal(f.music.getState().ready,false);
 f.raw.resume=()=>{f.raw.state='running';return Promise.resolve();};assert.equal(await f.music.unlock(),true);f.music.dispose();
 const absent=fixture({createContext:()=>null});absent.music.sync({active:true});assert.equal(await absent.music.unlock(),false);absent.music.dispose();
});
test('disposing during loading prevents late engine creation',async()=>{
 let resolve,created=false;const f=fixture({loadEngine:()=>new Promise(r=>resolve=r)});f.music.sync({active:true});const pending=f.music.unlock();await Promise.resolve();f.music.dispose();resolve({createMusicEngine:()=>{created=true;return f.engine;}});await pending;assert.equal(created,false);assert.equal(f.raw.state,'closed');
});
test('original score loops harmonically and gives the chase a faster drum-driven arrangement',()=>{
 assert(MUSIC_TEMPOS.chase>MUSIC_TEMPOS.calm*1.5);
 for(const mode of ['calm','chase'])for(let i=0;i<128;i++){
  const events=musicStep(mode,i);assert.deepEqual(events,musicStep(mode,i+128));
  for(const e of events){assert(e.velocity>0&&e.velocity<=1);for(const n of [e.notes].flat().filter(Boolean))assert.match(n,/^[A-G][1-5]$/);assert(!Array.isArray(e.notes),'melody and bass use single notes, without chord stacks');}
 }
 const voices=new Set(Array.from({length:16},(_,i)=>musicStep('chase',i)).flat().map(e=>e.voice));for(const v of ['kick','snare','hat','chaseBass','lead'])assert(voices.has(v));
});

test('sparser melodies leave room for distinct percussion in both themes',()=>{
 for(const mode of ['calm','chase'])for(let bar=0;bar<8;bar++){
  const events=Array.from({length:16},(_,i)=>musicStep(mode,bar*16+i)).flat();
  const melody=events.filter(e=>['bell','lead'].includes(e.voice));assert(melody.length<=4);
  for(const drum of mode==='calm'?['kick','rim','hat','shaker']:['kick','snare','hat','shaker'])assert(events.some(e=>e.voice===drum));
 }
 assert(musicStep('chase',62).some(e=>e.voice==='tom'),'phrase endings get a drum fill');
});
test('drum one-shots are finite, bounded and fade cleanly at common device sample rates',()=>{
 for(const rate of [22050,44100,48000]){
  const samples=createDrumSamples(rate);assert.equal(Object.keys(samples).length,7);
  for(const data of Object.values(samples)){
   assert.equal(Math.abs(data[0]),0);assert.equal(Math.abs(data.at(-1)),0);assert(data.length<rate/2);
   let energy=0,peak=0;for(const sample of data){assert(Number.isFinite(sample));energy+=sample*sample;peak=Math.max(peak,Math.abs(sample));}
   assert(energy/data.length>.001);assert(peak<=.851);
  }
  assert(samples.openHat.length>samples.hat.length*2);
 }
});
