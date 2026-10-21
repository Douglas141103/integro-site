import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {createSharkCages} from '../integro-box/shark-src/cages.mjs';
const settle=()=>new Promise(r=>setImmediate(r));
test('paid cage retries preserve operation ID, empty water spends nothing and uncertain catches can resume after reload',async()=>{
 const dom=new JSDOM('<div id="host"></div>',{url:'https://example.test'}),w=dom.window;globalThis.window=w;globalThis.document=w.document;let controller,failBuy=true,failCast=true,levels=[],awarded=0,casts=0;const calls=[];
 const cage={id:'00000000-0000-4000-8000-000000000001',capacity:3,tier:1,uses_left:5};let bought=false;const seen=new Set();
 const rpc=async(action,payload)=>{calls.push({action,payload});if(action==='shark_cage_buy'){bought=true;if(failBuy){failBuy=false;throw Error('lost reply');}}let cast=null;if(action==='shark_cage_cast'){if(!seen.has(payload.request)){seen.add(payload.request);cage.uses_left--;casts++;}cast={id:payload.request,cage:cage.id,capacity:3,uses_left:cage.uses_left,levels:payload.levels};if(failCast){failCast=false;throw Error('lost reply');}}return{balance:bought?0:1,cages:bought?[{...cage}]:[],cast};};
 const create=()=>createSharkCages({rpc,storage:w.localStorage,prepare:()=>levels,onCatch:()=>awarded++});
 try{controller=create();controller.mount(w.document.getElementById('host'));await settle();assert.equal(await controller.buy(1),false);const request=calls.at(-1).payload.request;await controller.buy(1);assert.equal(calls.at(-1).payload.request,request);assert.equal(controller.state.cages[0].uses_left,5);
  const before=calls.length;assert.equal(await controller.cast(cage.id),false);assert.equal(calls.length,before);assert.equal(casts,0);assert.match(w.document.body.textContent,/nenhum uso foi gasto/);
  levels=[0,0];const operation=controller.cast(cage.id);assert.equal(await controller.cast(cage.id),false);await operation;const useRequest=calls.at(-1).payload.request;assert.equal(casts,1);assert.equal(awarded,0);
  controller=create();await controller.refresh();assert.equal(await controller.cast(cage.id),true);assert.equal(calls.at(-1).payload.request,useRequest);assert.equal(casts,1);assert.equal(awarded,1);assert.equal(controller.state.cages[0].uses_left,4);assert.equal(w.localStorage.getItem('shark-cage-pending'),'null');
 }finally{w.close();delete globalThis.window;delete globalThis.document;}
});

import {clean,applyCageCatch} from '../integro-box/shark-src/rules.mjs';
test('a saved cast receipt awards fish XP and coins once across reloads',()=>{
 let p=clean(null);const cast={id:'00000000-0000-4000-8000-000000000002',levels:[0,0,0]};assert.deepEqual(applyCageCatch(p,cast),{xp:18,count:3});assert.equal(p.coins,9);assert.equal(p.eaten,3);p=clean(JSON.stringify(p));assert.equal(applyCageCatch(p,cast),null);assert.equal(p.coins,9);assert.equal(p.eaten,3);assert.equal(p.xp,18);
});
