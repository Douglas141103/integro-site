import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {createEggGift} from '../integro-box/egg-src/egg-gift.js';
const settle=()=>new Promise(r=>setImmediate(r));
test('gift requires Abrir, retries safely, reveals five charges and does not automatically offer an already claimed gift',async()=>{
 const dom=new JSDOM('<div id="host"></div>',{url:'https://example.test',pretendToBeVisual:true}),w=dom.window;globalThis.window=w;globalThis.document=w.document;
 const calls=[],views=[];let claimed=false,fail=true,refresh=0,controller,panel=null;
 const open=type=>{views.push(type);panel=type;controller.mount(w.document.getElementById('host'));};
 controller=createEggGift({ready:()=>true,active:()=>true,canPresent:()=>!panel,open,close:()=>panel=null,onClaim:async()=>refresh++,rpc:async action=>{calls.push(action);if(action==='gift_claim'){claimed=true;if(fail){fail=false;throw Error('lost response');}}return{claimed};}});
 try{
  controller.wake();await settle();controller.tick();assert.deepEqual(views,['gift']);assert.deepEqual(calls,['gift_state']);assert.match(w.document.body.textContent,/1 mochila a jato/);assert.match(w.document.body.textContent,/5 recargas de voo/);
  w.document.querySelector('[data-gift-open]').click();w.document.querySelector('[data-gift-open]').click();await settle();assert.equal(calls.filter(a=>a==='gift_claim').length,1);assert.match(w.document.body.textContent,/tentar novamente/);
  w.document.querySelector('[data-gift-open]').click();await settle();assert.equal(refresh,1);assert.equal(controller.claimed,true);assert.ok(w.document.querySelector('.is-open'));assert.equal(w.document.querySelector('[data-gift-open]').textContent,'Vamos jogar!');
  w.document.querySelector('[data-gift-open]').click();controller.wake();controller.tick();assert.equal(views.length,1);
  const otherViews=[];const other=createEggGift({ready:()=>true,active:()=>true,canPresent:()=>true,open:x=>otherViews.push(x),close:()=>{},onClaim:()=>{},rpc:async()=>({claimed:true})});other.wake();await settle();other.tick();assert.deepEqual(otherViews,[]);
 }finally{w.close();delete globalThis.window;delete globalThis.document;}
});
test('empty item notices wait for landing, ignore initial zero and returned traps, and open the matching shop',async()=>{
 const dom=new JSDOM('<div id="host"></div>',{pretendToBeVisual:true});globalThis.window=dom.window;globalThis.document=dom.window.document;
 let safe=true;const views=[];const c=createEggGift({ready:()=>true,active:()=>true,canPresent:()=>safe,open:x=>views.push(x),close:()=>{},onClaim:()=>{},rpc:async()=>({claimed:true})});
 try{c.wake();await settle();c.inventory('jet',0);c.tick();assert.deepEqual(views,[]);
  c.inventory('jet',5);safe=false;c.inventory('jet',0);c.tick();assert.deepEqual(views,[]);safe=true;c.tick();assert.deepEqual(views,['empty']);c.mountEmpty(document.getElementById('host'));assert.match(document.body.textContent,/recargas de voo acabaram/);document.querySelector('button').click();assert.equal(views.at(-1),'jetpack');c.tick();assert.equal(views.length,2);
  c.inventory('mine',1);c.inventory('mine',0);c.inventory('mine',1);c.tick();assert.equal(views.length,2,'returned stock cancels a pending notice');c.inventory('mine',0);c.tick();c.mountEmpty(document.getElementById('host'));assert.match(document.body.textContent,/Mina terrestre/);document.querySelector('button').click();assert.equal(views.at(-1),'traps');
 }finally{dom.window.close();delete globalThis.window;delete globalThis.document;}
});
