import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const read=p=>readFile(new URL('../integro-box/'+p,import.meta.url),'utf8');
test('chess catalog entry opens only on selection, returns safely and stops on logout',async()=>{
 const dom=new JSDOM(await read('jogar.html'),{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document;
 let disconnects=0;w.BoxStorage=w.localStorage;w.BoxMultiplayer={disconnect:async()=>{disconnects++;}};
 d.getElementById('brandHome').onclick=()=>d.getElementById('lobby').classList.remove('hidden');
 try{
  w.eval(await read('xadrez-loader.js'));w.eval(await read('catalog.js'));
  const chat=d.createElement('aside');chat.id='boxChat';d.body.append(chat);const rooms=d.createElement('aside');rooms.id='boxOnline';d.body.append(rooms);
  const card=d.querySelector('[data-catalog-game="xadrez"]');assert(card);assert.match(card.querySelector('img').src,/xadrez.webp$/);assert(!d.querySelector('#xadrezApp iframe'));
  const search=d.querySelector('.catalog-search');search.value='xadrez';search.dispatchEvent(new w.Event('input'));assert(!card.hidden);
  card.querySelector('.catalog-play').click();await new Promise(r=>setImmediate(r));
  const frame=d.querySelector('#xadrezApp iframe');assert(frame);assert.equal(disconnects,1);assert.equal(w.getComputedStyle(chat).display,'none');assert.equal(w.getComputedStyle(rooms).display,'none');assert(!d.getElementById('xadrezApp').hidden);assert.match(frame.src,/\/xadrez\/index.html/);
  w.dispatchEvent(new w.MessageEvent('message',{origin:'https://other.test',source:frame.contentWindow,data:{type:'integro-chess-exit'}}));assert(!d.getElementById('xadrezApp').hidden);
  w.dispatchEvent(new w.MessageEvent('message',{origin:w.location.origin,source:frame.contentWindow,data:{type:'integro-chess-exit'}}));
  assert(d.getElementById('xadrezApp').hidden);assert(!d.querySelector('#xadrezApp iframe'));assert(!d.getElementById('lobby').classList.contains('hidden'));assert.equal(d.activeElement.id,'playXadrez');assert.equal(d.body.style.overflow,'');assert.notEqual(w.getComputedStyle(chat).display,'none');assert.notEqual(w.getComputedStyle(rooms).display,'none');
  await w.BoxXadrez.open();assert(d.querySelector('#xadrezApp iframe'));w.BoxXadrez.stop();await w.BoxXadrez.open();assert(!d.querySelector('#xadrezApp iframe'));
 }finally{w.close();}
});
test('closing the session while chess is opening never mounts a game',async()=>{
 const dom=new JSDOM(await read('jogar.html'),{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window;
 let release;w.BoxStorage=w.localStorage;w.BoxMultiplayer={disconnect:()=>new Promise(r=>release=r)};
 try{w.eval(await read('xadrez-loader.js'));const opened=w.BoxXadrez.open();w.BoxXadrez.stop();release();await opened;assert(!w.document.querySelector('#xadrezApp iframe'));}finally{w.close();}
});
