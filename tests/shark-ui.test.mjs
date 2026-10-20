import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {createSharkGame} from '../integro-box/shark-src/app.mjs';

test('home, shop, map, help, purchases and exit work without starting a renderer',()=>{
 const dom=new JSDOM('<section id="sharkApp"></section>',{url:'https://example.test/integro-box/jogar.html',pretendToBeVisual:true});const w=dom.window;let exited=false;const backing=new Map([['shark-ocean-v1',JSON.stringify({coins:1000})]]);
 const globals=['window','document','requestAnimationFrame','cancelAnimationFrame'];const old=Object.fromEntries(globals.map(k=>[k,globalThis[k]]));globalThis.window=w;globalThis.document=w.document;globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};w.BoxStorage={getItem:k=>backing.get(k),setItem:(k,v)=>backing.set(k,v)};
 let game;try{const app=w.document.getElementById('sharkApp');game=createSharkGame(app,()=>{exited=true;});game.open();assert.equal(game.state().mode,'home');assert.match(app.querySelector('h1').textContent,/Gigante/);assert.equal(game.state().joints,undefined);
  app.querySelector('[data-panel="shop"]').click();assert.equal(game.state().mode,'shop');assert.equal(app.querySelectorAll('[data-buy]').length,12);app.querySelector('[data-buy="coral"]').click();assert.equal(game.state().progress.skin,'coral');assert.equal(game.state().progress.coins,760);assert.equal(JSON.parse(backing.get('shark-ocean-v1')).skin,'coral');
  app.querySelector('[data-panel="map"]').click();assert.equal(app.querySelectorAll('[data-destination]').length,6);assert.equal(game.state().mode,'map');assert.equal(app.querySelectorAll('.shark-missions>div').length,5);
  app.querySelector('#sharkPause').click();assert.equal(game.state().mode,'pause');app.querySelector('[data-exit]').click();assert(exited);assert(app.hidden);assert.equal(game.state().active,false);
 }finally{game?.stop();w.close();for(const k of globals){if(old[k]===undefined)delete globalThis[k];else globalThis[k]=old[k];}}
});

test('real loader adds the cover and playable Shark card to the actual catalog',()=>{
 const dom=new JSDOM(readFileSync(new URL('../integro-box/jogar.html',import.meta.url),'utf8'),{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document;
 try{w.BoxStorage=w.localStorage;const source=readFileSync(new URL('../integro-box/shark-loader.js',import.meta.url),'utf8').replace('export function installShark','function installShark');w.eval(source+';installShark();');w.eval(readFileSync(new URL('../integro-box/catalog.js',import.meta.url),'utf8'));const card=d.querySelector('[data-catalog-game="shark"]');assert(card);assert.match(card.querySelector('img').src,/catalog-v1\/shark.webp/);assert.equal(card.querySelector('.catalog-play').id,'playShark');assert(d.getElementById('sharkApp').hidden);assert(w.BoxCatalog.games.includes('shark'));assert.equal(w.BoxCatalog.games.filter(x=>x==='shark').length,1);
 }finally{w.close();}
});
