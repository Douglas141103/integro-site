import test from 'node:test';
import assert from 'node:assert/strict';
import {createDinoMusic,musicStep} from '../integro-box/dino/music.mjs';

function fixture(){
  const timers=new Map(),saved=new Map(),voices=[];let id=0;
  const param=()=>({value:0,setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}});
  const node=()=>({connect(){},disconnect(){}});
  const source=()=>{const s={...node(),frequency:param(),start(){voices.push(s);},stop(){s.stopped=true;}};return s;};
  const ctx={state:'suspended',currentTime:0,sampleRate:22050,destination:node(),
    createGain:()=>({...node(),gain:param()}),createOscillator:source,createBufferSource:source,
    createBiquadFilter:()=>({...node(),frequency:param()}),createBuffer:(_channels,n)=>({getChannelData:()=>new Float32Array(n)}),
    resume(){this.state='running';return Promise.resolve();},suspend(){this.state='suspended';return Promise.resolve();}};
  const storage={getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)};
  const config={storage,createContext:()=>ctx,schedule:fn=>{timers.set(++id,fn);return id;},cancel:id=>timers.delete(id)};
  return {music:createDinoMusic(config),ctx,config,voices,timers};
}
test('sound starts after user input, survives async race setup, and pauses immediately',async()=>{
  const f=fixture();f.music.setPlaying(true);assert.equal(f.voices.length,0);
  const unlocked=f.music.unlock();f.music.setPlaying(true);await unlocked;
  assert(f.music.playing);assert.equal(f.timers.size,1);assert(f.voices.length>=4);
  f.music.setStage(5);f.music.setPlaying(true);await f.music.unlock();assert.equal(f.timers.size,1);
  f.music.setPlaying(false);assert.equal(f.timers.size,0);assert.equal(f.ctx.state,'suspended');assert(f.voices.every(v=>v.stopped));
  const resumed=f.music.unlock();f.music.setPlaying(true);await resumed;assert(f.music.playing);
  f.music.setPlaying(false);
});
test('mute survives reopening and does not prevent silent gameplay',async()=>{
  const f=fixture();f.music.setPlaying(true);await f.music.unlock();f.music.setEnabled(false);
  assert(!f.music.playing);assert.equal(await f.music.unlock(),false);
  const reopened=createDinoMusic(f.config);assert.equal(reopened.enabled,false);
  f.music.setEnabled(true);await f.music.unlock();assert(f.music.playing);f.music.setPlaying(false);
});
test('leaving while audio unlock is pending cannot start a late soundtrack',async()=>{
  const f=fixture();let release;
  f.ctx.resume=()=>new Promise(resolve=>{release=()=>{f.ctx.state='running';resolve();};});
  f.music.setPlaying(true);const pending=f.music.unlock();f.music.setPlaying(false);release();await pending;
  assert(!f.music.playing);assert.equal(f.voices.length,0);assert.equal(f.ctx.state,'suspended');
});
test('missing or blocked Web Audio does not throw and can retry on later input',async()=>{
  const absent=createDinoMusic({createContext:()=>null});absent.setPlaying(true);assert.equal(await absent.unlock(),false);
  const f=fixture();f.music.setPlaying(true);f.ctx.resume=()=>Promise.reject(Error('blocked'));
  assert.equal(await f.music.unlock(),false);assert(!f.music.playing);
  f.ctx.resume=()=>{f.ctx.state='running';return Promise.resolve();};assert.equal(await f.music.unlock(),true);assert(f.music.playing);f.music.setPlaying(false);
});
test('the melody loops with bass and percussion without stacked lead chords',()=>{
  for(let stage=0;stage<6;stage++){
    const voices=new Set();
    for(let step=0;step<128;step++){
      const notes=musicStep(stage,step);assert.deepEqual(notes,musicStep(stage,step+128));
      assert(notes.filter(n=>n.voice==='melody').length<=1);
      for(const n of notes){voices.add(n.voice);if(n.note)assert(n.note>=40&&n.note<=84);}
    }
    assert.deepEqual([...voices].sort(),['bass','hat','kick','melody','snare']);
  }
});
