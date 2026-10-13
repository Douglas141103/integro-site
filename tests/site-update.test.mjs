import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
const source=readFileSync(new URL('../assets/site-update.js',import.meta.url),'utf8');
async function setup(path='/portal/gestao-escolar.html'){
 const dom=new JSDOM('<html><head></head><body><form><input name="value"><button>Salvar</button></form></body></html>',{url:'https://example.test'+path});
 const w=dom.window,timers=[],navigations=[];
 let response={version:'20261013-box10',maintenance:false},offline=false;
 const context={window:w,document:w.document,location:{pathname:path,href:'https://example.test'+path+'?next=integro-box#jogos',replace:u=>navigations.push(u)},sessionStorage:w.sessionStorage,Event:w.Event,URL,AbortController,console,
  setInterval(){},setTimeout(fn,ms){timers.push({fn,ms});return timers.length},clearTimeout(){},
  async fetch(){if(offline)throw Error('offline');return {ok:true,json:async()=>response}}};
 vm.runInNewContext(source,context);w.document.dispatchEvent(new w.Event('DOMContentLoaded'));await new Promise(r=>setImmediate(r));
 return {w,dom,navigations,timers,set:r=>response=r,offline:()=>offline=true,check:async()=>{await w.IntegroUpdates.check();await new Promise(r=>setImmediate(r));},reload:()=>timers.filter(t=>t.ms===1600).forEach(t=>t.fn())};
}
test('maintenance animation remains on connection loss, then reloads once to the published version',async()=>{
 const t=await setup();try{
 assert.equal(t.w.document.getElementById('integroUpdate'),null);
 t.set({version:'20261013-box10',maintenance:true});await t.check();
 assert.equal(t.w.document.getElementById('integroUpdate').hidden,false);
 assert.match(t.w.document.querySelector('#integroUpdate h2').textContent,/Aguarde/);
 t.set({version:'20261013-box11',maintenance:false});await t.check();t.reload();
 assert.equal(t.navigations.length,1);assert.match(t.navigations[0],/next=integro-box&_integro_update=20261013-box11#jogos$/);
 await t.check();assert.equal(t.timers.filter(t=>t.ms===1600).length,1);
 }finally{t.dom.window.close()}
});
test('in-progress form input is preserved and does not trigger automatic submission or reload',async()=>{
 const t=await setup();try{
 const input=t.w.document.querySelector('input');input.value='123,45';input.dispatchEvent(new t.w.Event('input',{bubbles:true}));
 t.set({version:'20261013-box11',maintenance:false});await t.check();t.reload();assert.equal(t.navigations.length,0);
 t.w.document.querySelector('#integroUpdate button').click();assert.equal(t.w.document.getElementById('integroUpdate').dataset.compact,'true');assert.equal(input.value,'123,45');
 t.w.document.querySelector('form').reset();await new Promise(r=>setImmediate(r));t.reload();assert.equal(t.navigations.length,1);
 }finally{t.dom.window.close()}
});
test('offline and invalid release data cannot force a reload',async()=>{
 const t=await setup();try{
 t.set({version:'https://other.example',maintenance:true});await t.check();assert.equal(t.w.document.getElementById('integroUpdate'),null);
 t.set({version:'20261013-box10',maintenance:true});await t.check();t.offline();await t.check();t.reload();
 assert.equal(t.navigations.length,0);assert.match(t.w.document.querySelector('#integroUpdate p').textContent,/conexão/);
 }finally{t.dom.window.close()}
});
test('game progress is saved after leaving the shared world; keyboard cannot move players under the notice',async()=>{
 const t=await setup('/integro-box/jogar.html');try{
 const order=[];t.w.BoxMultiplayer={async disconnect(){order.push('restore')}};t.w.BoxAdapters={craft:{persist(){order.push('save')}}};
 t.w.BoxGoSnake={persist(){order.push('snake-save')}};
 t.set({version:'20261013-box10',maintenance:true});await t.check();assert.deepEqual(order,['restore','save','snake-save']);
 let pressed=false;t.w.document.addEventListener('keydown',()=>pressed=true);
 t.w.document.body.dispatchEvent(new t.w.KeyboardEvent('keydown',{key:'w',bubbles:true,cancelable:true}));assert.equal(pressed,false);
 }finally{t.dom.window.close()}
});

test('a stale cached page retries after cooldown and stops after three attempts',async()=>{
 for(const count of [1,3]){
  const t=await setup();try{
   t.w.sessionStorage.setItem('integro:last-auto-update:attempts',JSON.stringify({version:'20261013-box11',count,at:Date.now()}));
   t.set({version:'20261013-box11',maintenance:false});await t.check();t.reload();
   assert.equal(t.navigations.length,0);
   t.w.sessionStorage.setItem('integro:last-auto-update:attempts',JSON.stringify({version:'20261013-box11',count,at:Date.now()-31000}));
   await t.check();t.reload();assert.equal(t.navigations.length,count<3?1:0);
  }finally{t.dom.window.close()}
 }
});
