import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {webcrypto} from 'node:crypto';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
async function setup(){
 const dom=new JSDOM(await read('integro-box/jogar.html'),{url:'https://www.institutointegro.com.br/integro-box/jogar.html'});const doc=dom.window.document;let hidden=false;
 Object.defineProperty(doc,'hidden',{get:()=>hidden});
 const events={},calls=[];let callback,state={};
 const channel={state:'joined',on(_type,opts,fn){events[opts.event]=fn;return this},subscribe(fn){callback=fn;return this},presenceState:()=>state,async track(payload){calls.push(['track',payload]);return 'ok'},async untrack(){calls.push(['untrack']);return 'ok'}};
 const client={channel(topic,opts){calls.push(['channel',topic,opts]);return channel},async removeChannel(){calls.push(['remove'])}};
 const context=vm.createContext({window:dom.window,document:doc,crypto:webcrypto,TextEncoder,Uint8Array,supabase:client});
 vm.runInContext((await read('integro-box/presence.js')).replace(/^import .*;\n/gm,'').replace(/export /g,''),context);
 doc.getElementById('boxUserName').textContent='Ana <img src=x onerror=alert(1)>';
 const api=context.startPresence({id:'synthetic-user-a',boxProfile:{full_name:'Ana <img src=x onerror=alert(1)>'}},{client,doc,win:dom.window});await api.ready;
 const settle=()=>new Promise(r=>setImmediate(r));
 return {dom,doc,context,api,calls,async status(s){callback(s);await settle()},sync(s){state=s;events.sync()},async hide(value){hidden=value;doc.dispatchEvent(new dom.window.Event('visibilitychange'));await settle()},settle};
}
test('name is text only, shortcuts are removed from view, and profile keys disclose no account identifier',async()=>{
 const t=await setup();try{
 assert.equal(t.doc.querySelector('.header-actions').hidden,true);assert.equal(t.doc.querySelector('#boxUserName img'),null);assert.match(t.doc.getElementById('boxUserName').textContent,/Ana <img/);
 const key=t.calls[0][2].config.presence.key;assert.match(key,/^[a-f0-9]{64}$/);assert(!key.includes('synthetic'));
 assert.equal(key,await t.context.accountPresenceKey('synthetic-user-a'));assert.notEqual(key,await t.context.accountPresenceKey('synthetic-user-b'));
 assert(t.doc.getElementById('playCraft'));assert(t.doc.getElementById('playGoSnake'));assert(t.doc.getElementById('brandHome'));
 }finally{await t.api.stop();t.dom.window.close()}
});
test('counts distinct connected accounts, updates joins/leaves, never shows stale count after error',async()=>{
 const t=await setup();try{
 const label=t.doc.getElementById('boxOnlineCount');assert.equal(label.textContent,'Conectando…');
 await t.status('SUBSCRIBED');assert.deepEqual(JSON.parse(JSON.stringify(t.calls.at(-1))),['track',{online:true}]);
 t.sync({a:[{online:true},{online:true}],b:[{online:true}],empty:[],invalid:[{}]});assert.equal(label.textContent,'2 pessoas online');
 t.sync({a:[{online:true}]});assert.equal(label.textContent,'1 pessoa online');
 await t.status('CHANNEL_ERROR');assert.equal(label.textContent,'Online indisponível');t.sync({a:[{online:true}],b:[{online:true}]});assert.equal(label.textContent,'Online indisponível');
 await t.status('SUBSCRIBED');t.sync({a:[{online:true}]});assert.equal(label.textContent,'1 pessoa online');
 t.dom.window.dispatchEvent(new t.dom.window.Event('offline'));assert.equal(label.textContent,'Sem conexão');
 }finally{await t.api.stop();t.dom.window.close()}
});
test('hidden pages untrack, visible pages rejoin, logout removes the channel and prevents rejoining',async()=>{
 const t=await setup();try{
 await t.status('SUBSCRIBED');await t.hide(true);assert.equal(t.calls.at(-1)[0],'untrack');await t.hide(false);assert.equal(t.calls.at(-1)[0],'track');
 await t.api.stop();assert.equal(t.calls.at(-1)[0],'remove');const count=t.calls.length;await t.hide(true);await t.hide(false);await t.status('SUBSCRIBED');assert.equal(t.calls.length,count);
 }finally{t.dom.window.close()}
});
