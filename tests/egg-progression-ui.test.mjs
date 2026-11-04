import test from 'node:test';import assert from 'node:assert/strict';import {JSDOM} from 'jsdom';
import {EggAdventure,FUSION_MACHINE,TREADMILLS} from '../integro-box/egg-src/egg-rules.js';
import {createProgressionUI} from '../integro-box/egg-src/egg-progression-ui.js';
test('fusion panel charges IntGems, blocks duplicate clicks and previews the exact pair before fusion',async()=>{
 const dom=new JSDOM('<main></main>',{url:'https://example.test'}),previous=globalThis.window;globalThis.window=dom.window;
 try{
  let g=new EggAdventure({version:4,coins:999,creatures:[{uid:'a',world:0,rarity:'common',mutation:'normal'},{uid:'b',world:2,rarity:'rare',mutation:'gold'}]}),tab='corral',calls=[];
  const body=dom.window.document.querySelector('main'),messages=[];Object.assign(g.player,FUSION_MACHINE);dom.window.BoxIntGem={balance:20,refresh:async()=>{}};
  dom.window.BoxEggCloud={ready:true,fusion:async(action,id,main,donor)=>{calls.push({action,id,main,donor});await Promise.resolve();if(action==='fusion_buy'){dom.window.BoxIntGem.balance-=10;g.save.fusion={owned:true,charges:10};}else assert(g.fuse(main,donor));}};
  const ui=createProgressionUI({getGame:()=>g,storage:dom.window.localStorage,changed:()=>render(),close:()=>{},message:m=>messages.push(m)}),render=()=>{body.innerHTML=ui[tab]();ui.bind(body);};render();
  const buy=body.querySelector('[data-fusion-pack]');assert.match(buy.textContent,/10 IntGems/);buy.click();buy.click();await new Promise(setImmediate);assert.equal(calls.length,1);assert.equal(dom.window.BoxIntGem.balance,10);assert.equal(g.save.coins,999);assert.equal(g.save.fusion.charges,10);
  tab='fusion';render();assert.match(body.querySelector('[data-fusion-preview]').textContent,/25|Integros\/min/);const select=body.querySelector('[data-fusion-donor]');select.value='a';select.dispatchEvent(new dom.window.Event('change'));assert(body.querySelector('[data-confirm-fusion]').disabled);
  select.value='b';select.dispatchEvent(new dom.window.Event('change'));body.querySelector('[data-confirm-fusion]').click();await new Promise(setImmediate);assert.equal(calls.length,2);assert.equal(calls[1].main,'a');assert.equal(calls[1].donor,'b');assert.equal(g.save.fusion.charges,9);assert.equal(g.save.creatures.length,1);assert.equal(dom.window.BoxIntGem.balance,10);
  g=new EggAdventure({version:4,coins:1000});Object.assign(g.player,TREADMILLS.gold);tab='training';render();assert.equal(body.querySelectorAll('[data-start-training]').length,3);body.querySelector('[data-start-training="gold"]').click();assert.equal(g.save.coins,0);assert.equal(g.mode,'train');
 }finally{globalThis.window=previous;dom.window.close();}
});
test('an uncertain paid request reuses its id on retry instead of charging twice',async()=>{
 const dom=new JSDOM('<main></main>',{url:'https://example.test'}),previous=globalThis.window;globalThis.window=dom.window;
 try{const g=new EggAdventure(),ids=[],body=dom.window.document.querySelector('main');let attempts=0;dom.window.BoxIntGem={balance:20,refresh:async()=>{}};dom.window.BoxEggCloud={ready:true,fusion:async(_,id)=>{ids.push(id);if(++attempts===1)throw Error('connection lost');g.save.fusion={owned:true,charges:10};}};
 const ui=createProgressionUI({getGame:()=>g,storage:dom.window.localStorage,changed:()=>render(),close(){},message(){}}),render=()=>{body.innerHTML=ui.corral();ui.bind(body);};render();body.querySelector('[data-fusion-pack]').click();await new Promise(setImmediate);body.querySelector('[data-fusion-pack]').click();await new Promise(setImmediate);assert.equal(ids.length,2);assert.equal(ids[0],ids[1]);assert.equal(dom.window.localStorage.getItem('egg-fusion-request'),null);
 }finally{globalThis.window=previous;dom.window.close();}
});
