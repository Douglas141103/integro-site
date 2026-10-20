import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {createEggTraps} from '../integro-box/egg-src/egg-traps.js';
test('trap UI retries uncertain purchases with the same request, applies hits once and clears room visuals',async()=>{
 const dom=new JSDOM('<div id="host"></div>',{url:'https://example.test',pretendToBeVisual:true}),w=dom.window;
 globalThis.window=w;globalThis.document=w.document;
 const calls=[],hits=[],views=[];let connected={id:'room-a',game:'egg'},fail=true,placed=0;
 const state={stock:{bear:1,mine:0},balance:3,traps:[{id:'trap-a',kind:'bear',x:0,z:14,mine:true,armed:true}],hits:[{id:'hit-a',kind:'mine'}]};
 const runtime={active:()=>true,traps:v=>views.push(v),trapHit:v=>hits.push(v),canPlaceTrap:()=>true,trapPosition:()=>({x:0,z:14})};
 const controller=createEggTraps({getRoom:()=>connected,getRuntime:()=>runtime,storage:w.localStorage,onPlaced:()=>placed++,rpc:async(action,args)=>{calls.push({action,args});if(action==='trap_buy'&&fail){fail=false;throw Error('offline');}return structuredClone(state);}});
 try{
  controller.render(w.document.getElementById('host'));await new Promise(r=>setImmediate(r));
  assert.equal(hits.length,1);assert.equal(w.document.querySelectorAll('.egg-upgrade').length,2);assert.equal(w.document.querySelectorAll('button')[0].textContent,'Comprar · 1 IntGem');
  await controller.poll();assert.equal(hits.length,1);assert.deepEqual(calls.at(-1).args.p_data.ack,['hit-a']);
  assert.equal(await controller.act('trap_buy','bear'),false);const request=calls.at(-1).args.p_id;assert.ok(request);
  assert.equal(await controller.act('trap_buy','bear'),true);assert.equal(calls.at(-1).args.p_id,request,'uncertain network retry is idempotent');
  assert.equal(await controller.act('trap_place','bear'),true);assert.equal(placed,1);assert.deepEqual(calls.at(-1).args.p_data.position,{x:0,z:14});
  connected=null;w.dispatchEvent(new w.Event('box-room-change'));assert.deepEqual(views.at(-1),[]);
 }finally{controller.stop();w.close();delete globalThis.window;delete globalThis.document;}
});
