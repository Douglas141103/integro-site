import {mock} from 'node:test';
mock.timers.enable({apis:['Date'],now:new Date('2026-10-28T21:32:00Z')});
import test from 'node:test';import assert from 'node:assert/strict';import {JSDOM} from 'jsdom';import {createEggWinter} from '../integro-box/egg-src/egg-winter-ui.js';import {EggAdventure} from '../integro-box/egg-src/egg-rules.js';
test('winter shop hides egg values, activates from its panel once, and retries an uncertain request with its same ID',async()=>{
 const dom=new JSDOM('<main><div id="dock"></div><section></section></main>',{url:'https://test.invalid'});globalThis.window=dom.window;globalThis.document=dom.window.document;
 try{const g=new EggAdventure();let calls=[],fail=true,closed=0;const ui=createEggWinter({dock:document.querySelector('#dock'),getGame:()=>g,ready:()=>true,active:()=>true,blocked:()=>true,canPresent:()=>false,open(){},close(){closed++},message(){},storage:window.localStorage,onClaim:async()=>{},onUse(){},rpc:async(action,id)=>{calls.push({action,id});if(action==='winter_use'&&fail){fail=false;throw Error('network');}return{claimed:true,skates:action==='winter_use'?1:2};}});
 ui.mount(document.querySelector('section'));await new Promise(setImmediate);assert.equal(document.querySelectorAll('.egg-winter-values span').length,5);assert.match(document.querySelector('section').textContent,/Pegue o ovo e descubra no curral quanto vale/);assert.doesNotMatch(document.querySelector('section').textContent,/800|900|milhão|milhões|1.000.000/);
 document.querySelector('[data-winter-use]').click();await new Promise(setImmediate);assert.equal(g.skatesActive,false);assert.equal(calls.filter(c=>c.action==='winter_use').length,1);
 document.querySelector('[data-winter-use]').click();document.querySelector('[data-winter-use]').click();await new Promise(setImmediate);assert.equal(g.skatesActive,true);assert.equal(closed,1);const uses=calls.filter(c=>c.action==='winter_use');assert.equal(uses.length,2);assert.equal(uses[0].id,uses[1].id);assert.equal(ui.state.skates,1);assert.equal(document.querySelector('[data-winter-use]').disabled,true);
 }finally{dom.window.close();delete globalThis.window;delete globalThis.document;}
});

test('skate shop uses IntGem affordability and refreshes the wallet after a confirmed purchase',async()=>{
 const dom=new JSDOM('<div id="dock"></div><section></section>',{url:'https://test.invalid'});globalThis.window=dom.window;globalThis.document=dom.window.document;
 try{const g=new EggAdventure();g.save.coins=0;let balance=7,refreshes=0;const calls=[];const ui=createEggWinter({dock:document.querySelector('#dock'),getGame:()=>g,ready:()=>true,active:()=>true,blocked:()=>false,canPresent:()=>false,open(){},close(){},message(){},onClaim(){},onUse(){},getBalance:()=>balance,refreshWallet:async()=>{balance=0;refreshes++;},rpc:async(action,id)=>{calls.push({action,id});return{claimed:true,skates:action==='winter_buy_intgem'?1:0};}});
 ui.mount(document.querySelector('section'));await new Promise(setImmediate);
 assert.match(document.querySelector('section').textContent,/7 IntGem/);assert.doesNotMatch(document.querySelector('section').textContent,/Integros/);
 assert.equal(document.querySelector('[data-winter-buy]').disabled,false,'zero Integros does not block IntGem purchases');
 document.querySelector('[data-winter-buy]').click();document.querySelector('[data-winter-buy]').click();await new Promise(setImmediate);
 assert.equal(calls.filter(x=>x.action==='winter_buy_intgem').length,1);assert.equal(refreshes,1);assert.equal(g.save.coins,0);assert.equal(ui.state.skates,1);
 g.save.coins=1000000;ui.mount(document.querySelector('section'));await new Promise(setImmediate);assert.equal(document.querySelector('[data-winter-buy]').disabled,true,'Integros do not substitute for an empty IntGem wallet');
 }finally{dom.window.close();delete globalThis.window;delete globalThis.document;}
});
