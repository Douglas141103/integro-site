import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {createSharkCages} from '../integro-box/shark-src/cages.mjs';
const settle=()=>new Promise(r=>setImmediate(r));
test('placement and collection recover lost replies without duplicate uses or early rewards',async()=>{
 const dom=new JSDOM('<div id="host"></div>',{url:'https://example.test'}),w=dom.window;globalThis.window=w;globalThis.document=w.document;
 let bought=false,active=null,failPlace=true,failCollect=true,awarded=0;const requests=new Map(),cage={id:'00000000-0000-4000-8000-000000000001',capacity:3,tier:1,uses_left:5};
 const rpc=async(action,payload)=>{let cast=null;
  if(action==='shark_cage_buy')bought=true;
  if(action==='shark_cage_place'){if(!requests.has(payload.request)){cage.uses_left--;active={id:payload.request,cage:cage.id,capacity:3,position:payload.position,levels:[],uses_left:cage.uses_left};requests.set(payload.request,true);}if(failPlace){failPlace=false;throw Error('lost reply');}}
  if(action==='shark_cage_catch'){if(!requests.has(payload.request)){active.levels.push(payload.level);requests.set(payload.request,true);}}
  if(action==='shark_cage_collect'){if(!requests.has(payload.request)){if(active.levels.length<3)throw Object.assign(Error('not full'),{code:'cage_not_full'});requests.set(payload.request,{...active});active=null;}cast=requests.get(payload.request);if(failCollect){failCollect=false;throw Error('lost reply');}}
  return JSON.parse(JSON.stringify({balance:bought?0:1,cages:bought?[cage]:[],active,cast}));};
 const create=()=>createSharkCages({rpc,storage:w.localStorage,position:()=>({x:10,y:24,z:0}),onCatch:()=>awarded++});
 try{let c=create();c.mount(w.document.getElementById('host'));await settle();await c.buy(1);assert.equal(await c.place(cage.id),false);assert.equal(cage.uses_left,4);assert.equal(awarded,0);
 c=create();await c.refresh();assert.equal(c.state.active.levels.length,0);assert.equal(await c.retry(),true);assert.equal(cage.uses_left,4);assert.equal(await c.collect(),false);assert.equal(awarded,0);
 for(let i=0;i<3;i++)await c.capture(0);assert.equal(c.state.active.levels.length,3);assert.equal(cage.uses_left,4);assert.equal(awarded,0);
 assert.equal(await c.collect(),false);assert.equal(awarded,0);c=create();await c.refresh();assert.equal(c.state.active,null);assert.equal(await c.retry(),true);assert.equal(awarded,1);assert.equal(cage.uses_left,4);assert.equal(w.localStorage.getItem('shark-cage-pending'),'null');
 }finally{w.close();delete globalThis.window;delete globalThis.document;}
});

import {clean,applyCageCatch} from '../integro-box/shark-src/rules.mjs';
test('a saved cast receipt awards fish XP and coins once across reloads',()=>{
 let p=clean(null);const cast={id:'00000000-0000-4000-8000-000000000002',levels:[0,0,0]};assert.deepEqual(applyCageCatch(p,cast),{xp:18,count:3});assert.equal(p.coins,9);assert.equal(p.eaten,3);p=clean(JSON.stringify(p));assert.equal(applyCageCatch(p,cast),null);assert.equal(p.coins,9);assert.equal(p.eaten,3);assert.equal(p.xp,18);
});
