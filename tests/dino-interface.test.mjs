import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {installDino} from '../integro-box/dino/loader.mjs';
import {makeCourse} from '../integro-box/dino/course.mjs';
const settle=()=>new Promise(resolve=>setImmediate(resolve));

test('launch through catalog, jump with touch and keyboard, pause, finish, rank and return',async()=>{
  const html=await readFile(new URL('../integro-box/jogar.html',import.meta.url),'utf8');
  const dom=new JSDOM(html,{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only',pretendToBeVisual:true});
  const w=dom.window,d=w.document;
  const requests=[],frames=new Map();let nextId=0,now=1,submitted=null;
  Object.assign(globalThis,{window:w,document:d,localStorage:w.localStorage,
    requestAnimationFrame:cb=>{frames.set(++nextId,cb);return nextId;},cancelAnimationFrame:id=>frames.delete(id)});
  const heights=[];
  const ctx=new Proxy({fillRect(x,y){if(x===145)heights.push(y);}}, {get:(o,k)=>k in o?o[k]:()=>{}});
  w.HTMLCanvasElement.prototype.getContext=()=>ctx;
  w.BoxStorage=w.localStorage;
  d.querySelector('#brandHome').onclick=()=>d.querySelector('#lobby').classList.remove('hidden');
  const seed=4;
  const client={async rpc(name,params){
    assert.equal(name,'box_dino');requests.push(params.p_action);
    if(params.p_action==='start')return {data:{run:'test-run',seed}};
    if(params.p_action==='finish'){submitted=params;return {data:{}};}
    return {data:{leaders:[{name:'Corredor 1',position:1,score:80,stage:1,mine:true}],me:{name:'Corredor 1',position:1,score:80}}};
  }};
  const tick=()=>{now+=1000/60+.00001;for(const [id,cb] of [...frames]){frames.delete(id);cb(now);}};
  try{
    installDino(client);w.eval(await readFile(new URL('../integro-box/catalog.js',import.meta.url),'utf8'));
    const card=d.querySelector('[data-catalog-game="dino-expedicao"] .catalog-play');
    card.click();
    for(let i=0;i<50&&!d.querySelector('#dinoApp canvas');i++)await new Promise(r=>setTimeout(r,5));
    const app=d.querySelector('#dinoApp');assert(!app.hidden);
    app.querySelector('[data-action]').click();await settle();tick();
    for(let i=0;i<12;i++)tick();
    app.querySelector('canvas').dispatchEvent(new w.Event('pointerdown',{cancelable:true}));tick();
    for(let i=0;i<60;i++)tick();
    d.dispatchEvent(new w.KeyboardEvent('keydown',{code:'ArrowUp',bubbles:true,cancelable:true}));tick();
    app.querySelector('[data-ranks]').click();await settle();assert.equal(w.BoxDino.mode,'paused');assert(app.querySelector('.mine'));
    assert(app.querySelector('.dino-game').inert);app.querySelector('[data-close]').click();app.querySelector('[data-action]').click();tick();
    for(let i=0;i<500&&!submitted;i++)tick();
    await settle();assert.equal(w.BoxDino.mode,'end');assert.equal(submitted.p_jumps.length,2);assert(submitted.p_tick<=makeCourse(seed)[0].center);assert(heights.some(y=>y<150));
    assert.deepEqual(requests,['start','ranking','finish']);
    app.querySelector('[data-back]').click();assert(app.hidden);assert(!d.querySelector('#lobby').classList.contains('hidden'));assert.equal(d.activeElement,card);
  }finally{dom.window.close();}
});
