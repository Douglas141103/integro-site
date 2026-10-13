import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {stages,generateSong,synthesize} from '../integro-box/interdance-src/engine.mjs';
import {createVersusRuns,versusWinner,keyLane,drawVersus} from '../integro-box/interdance-src/versus.mjs';
import {createInterDance} from '../integro-box/interdance-src/app.mjs';

const keys=['a','s','w','d'],arrows=['ArrowLeft','ArrowDown','ArrowUp','ArrowRight'];
test('all sixteen songs give both opponents identical charts with independent note and scoring state',()=>{
  assert.equal(stages.length,16);
  for(const stage of stages)for(const difficulty of ['easy','normal']){
    const song=generateSong(stage,difficulty),runs=createVersusRuns(song);
    assert.deepEqual(runs[0].notes,runs[1].notes);assert.notEqual(runs[0].notes[0],runs[1].notes[0]);
    const first=song.notes[0];runs[0].hit(first.lane,first.time);
    assert.equal(runs[0].score,1000);assert.equal(runs[1].score,0);assert.equal(runs[1].notes[0].state,'waiting');assert.equal(song.notes[0].state,undefined);
    runs.forEach(run=>run.update(song.duration));
    assert.equal(runs[0].status,'finished');assert.equal(runs[1].status,'finished');assert.equal(versusWinner(runs),0);
    assert.equal(versusWinner(createVersusRuns(song)),null);
  }
});
test('versus keeps both players until the end, including zero energy and sustain scoring',()=>{
  const song=generateSong(stages[6]),runs=createVersusRuns(song),hold=song.notes.find(n=>n.hold);
  for(const run of runs){run.hit(hold.lane,hold.time);run.release(hold.lane,hold.time+hold.hold);assert.equal(run.score,1500);run.update(song.duration-1);assert.equal(run.status,'playing');run.update(song.duration);assert.equal(run.status,'finished');}
  assert.equal(versusWinner(runs),null);
});
test('WASD and arrow keys are separated only in versus',()=>{for(let i=0;i<4;i++){assert.equal(keyLane(keys[i],true),i);assert.equal(keyLane(arrows[i],true),i+4);assert.equal(keyLane(arrows[i],false),i);}assert.equal(keyLane('Enter',true),null);});
test('original synthesizer produces finite stereo audio and supports cancellation',async()=>{
  const song=generateSong({...stages[0],bars:2}),wave=await synthesize(song,{sampleRate:8000});
  assert(wave.left.length>=song.duration*8000);assert.equal(wave.left.length,wave.right.length);assert(wave.left.some(n=>n!==0));assert(wave.left.every(Number.isFinite));assert(wave.right.every(Number.isFinite));
  assert.equal(await synthesize(song,{sampleRate:8000,cancelled:()=>true}),null);
});
function setup(){
  const page=readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8'),dom=new JSDOM(page,{url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true}),w=dom.window;
  const gradient={addColorStop(){}},context=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient,measureText:()=>({width:50})},{get:(obj,key)=>key in obj?obj[key]:()=>{}});
  w.HTMLCanvasElement.prototype.getContext=()=>context;w.HTMLElement.prototype.setPointerCapture=()=>{};
  for(const [key,value]of Object.entries({window:w,document:w.document,innerWidth:960,innerHeight:540,devicePixelRatio:1}))globalThis[key]=value;
  let tick;globalThis.requestAnimationFrame=fn=>(tick=fn,1);globalThis.cancelAnimationFrame=()=>{};
  const data=new Map();const storage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};
  const audio={context:{state:'running'},running:false,offset:0,clock:0,setVolume(){},async unlock(){},async render(){return true;},play(offset=0){this.clock=offset;this.running=true;},position(){return this.clock;},pause(){this.offset=this.clock;this.running=false;},stop(){this.running=false;this.offset=0;},stopSource(){this.running=false;},dispose(){this.stop();},wav(){return null;}};
  const game=createInterDance({storage,audio});
  const click=selector=>{const button=w.document.querySelector(selector);assert(button,'missing '+selector);return button.onclick();};
  const press=(key,type='keydown',repeat=false)=>w.document.dispatchEvent(new w.KeyboardEvent(type,{key,repeat,bubbles:true,cancelable:true}));
  return {w,dom,game,audio,data,click,press,step:time=>{audio.clock=time;tick(1000+time*1000);},destroy(){game.hide();w.close();}};
}
test('keyboard, simultaneous touch, pause, results and rematch keep local players independent',async()=>{
  const t=setup();try{
    t.game.show();await t.click('[data-stage="0"]');await t.click('[data-action="versus"]');
    const song=generateSong(stages[0]),note=song.notes[0];t.step(note.time);
    t.press(keys[note.lane]);t.press(keys[note.lane],'keydown',true);t.press(arrows[note.lane]);
    assert.deepEqual(t.game.getState().players.map(r=>r.score),[1000,1000]);
    t.press(keys[note.lane],'keyup');t.press(arrows[note.lane],'keyup');
    t.press('p');assert.equal(t.game.getState().view,'paused');assert.equal(t.audio.running,false);
    await t.click('[data-action="settings"]');await t.click('[data-action="backSettings"]');assert.equal(t.game.getState().match,'versus');await t.click('[data-action="resume"]');
    const next=song.notes[1];t.step(next.time);
    for(const [index,id]of [[next.lane,10],[next.lane+4,11]]){const pad=t.w.document.querySelector(`[data-dance-lane="${index}"]`);const event=new t.w.Event('pointerdown',{bubbles:true,cancelable:true});Object.defineProperty(event,'pointerId',{value:id});pad.dispatchEvent(event);const up=new t.w.Event('pointerup');Object.defineProperty(up,'pointerId',{value:id});pad.dispatchEvent(up);}
    assert.deepEqual(t.game.getState().players.map(r=>r.score),[2000,2000]);
    t.step(song.duration);assert.equal(t.game.getState().view,'result');assert.match(t.w.document.getElementById('danceSheet').textContent,/Empate!/);assert.deepEqual(t.game.getState().progress.best,{});
    await t.click('[data-action="versus"]');assert.deepEqual(t.game.getState().players.map(r=>r.score),[0,0]);assert.equal(t.game.getState().time,0);
    t.w.dispatchEvent(new t.w.Event('blur'));assert.equal(t.game.getState().view,'paused');t.game.hide();assert.equal(t.audio.running,false);assert(t.w.document.getElementById('danceApp').hidden);
  }finally{t.destroy();}
});
test('solo remains playable after versus and saved progress uses only the provided family storage',async()=>{
  const t=setup();try{
    t.game.show();await t.click('[data-stage="0"]');await t.click('[data-action="versus"]');t.press('Escape');await t.click('[data-action="home"]');await t.click('[data-stage="0"]');await t.click('[data-action="solo"]');
    assert(t.w.document.getElementById('dancePlayer2Pads').hidden);assert.equal(t.game.getState().players.length,1);
    const note=generateSong(stages[0]).notes[0];t.step(note.time);t.press(arrows[note.lane]);t.press(arrows[note.lane],'keyup');assert.equal(t.game.getState().players[0].score,1000);
    t.step(1000);assert.equal(t.game.getState().progress.best['0-normal-remix'].score,1000);assert(t.data.has('integro-interdance-v1'));assert.equal(t.w.localStorage.length,0);
  }finally{t.destroy();}
});
test('leaving during music preparation prevents a late start',async()=>{
  const t=setup();try{let complete;t.audio.render=()=>new Promise(resolve=>complete=resolve);t.game.show();await t.click('[data-stage="0"]');const pending=t.click('[data-action="versus"]');await new Promise(resolve=>setImmediate(resolve));t.game.hide();complete(true);await pending;assert.equal(t.game.active,false);assert.equal(t.audio.running,false);}finally{t.destroy();}
});
