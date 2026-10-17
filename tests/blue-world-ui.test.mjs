import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {mountBlueWorld} from '../integro-box/blue-src/entry.mjs';
import {readFileSync} from 'node:fs';
import {usageDatabase} from './box-usage-fixture.mjs';

test('menu, keyboard, multi-touch, pause, reopening and storage failure use the real controller',()=>{
 const dom=new JSDOM('<button id="brandHome"></button><main id="lobby"></main><footer id="footer"></footer><button id="playBlueWorld"></button><section id="blueApp" hidden></section>',{url:'https://example.test/integro-box/jogar.html'}),w=dom.window,app=w.document.getElementById('blueApp');
 const values=new Map();w.BoxStorage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
 let next,created=0,disposed=0;globalThis.requestAnimationFrame=fn=>(next=fn,1);globalThis.cancelAnimationFrame=()=>{};
 const game=mountBlueWorld(app,{makeScene:()=>{created++;return {setLevel(){},render(){},emit(){},dispose(){disposed++;}};}});
 const click=s=>{const b=app.querySelector(s);assert(b,s);b.click();};
 game.show();assert.equal(game.getState().mode,'home');assert(w.document.body.classList.contains('blue-playing'));
 click('[data-panel="map"]');assert.equal(app.querySelectorAll('.bw-map-node:disabled').length,3);click('[data-start="0"]');assert.equal(game.getState().mode,'story');click('[data-resume]');
 w.document.dispatchEvent(new w.KeyboardEvent('keydown',{code:'ArrowRight',bubbles:true,cancelable:true}));const before=game.getState().run.player.x;let now=performance.now();for(let i=1;i<30;i++)next(now+i*17);assert(game.getState().run.player.x>before+1);
 w.dispatchEvent(new w.Event('blur'));assert.equal(game.getState().mode,'pause');const paused=game.getState().run.player.x;next(now+1000);assert.equal(game.getState().run.player.x,paused);
 click('[data-resume]');const fire=(s,type,id)=>{const e=new w.Event(type,{bubbles:true,cancelable:true});Object.defineProperty(e,'pointerId',{value:id});app.querySelector(s).dispatchEvent(e);};
 fire('[data-control="right"]','pointerdown',1);fire('[data-control="jump"]','pointerdown',2);now=performance.now();for(let i=1;i<15;i++)next(now+i*17);assert(game.getState().run.player.y>.2);
 fire('[data-control="right"]','pointercancel',1);fire('[data-control="jump"]','pointerup',2);assert.equal(app.querySelectorAll('.is-held').length,0);
 game.pause();click('[data-panel="settings"]');const assist=app.querySelector('[data-setting="assist"]');assist.checked=true;assist.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(game.getState().run.player.health,5);
 click('[data-exit]');assert.equal(game.active,false);assert(app.hidden);assert(!w.document.getElementById('lobby').classList.contains('hidden'));assert.equal(disposed,1);assert(values.has('blue-world-v1'));
 game.show();assert.equal(created,2);w.BoxStorage.setItem=()=>{throw Error('quota');};game.pause();game.hide();game.stop();dom.window.close();delete globalThis.requestAnimationFrame;delete globalThis.cancelAnimationFrame;
});

test('usage migration accepts Blue without exposing records or removing existing games',async()=>{
 const f=await usageDatabase();const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
 try{
  const migration=read('supabase/migrations/20261017160338_box_blue_world_usage.sql');await f.db.exec(migration);await f.db.exec(migration);
  await assert.rejects(()=>f.pulse(null,103,'blueworld'),/box_access_denied/);await assert.rejects(()=>f.pulse(8,103,'blueworld'),/box_access_denied/);
  await f.pulse(3,103,'blueworld');await f.tick(3,103);await f.pulse(3,103,'blueworld');
  const report=await f.report(1,3,'blueworld');assert.equal(report.sessions[0].history[0].game,'blueworld');assert(report.summary.active_seconds>=29);
  await f.pulse(3,104,'craft');await assert.rejects(()=>f.pulse(3,105,'invented'),/invalid_usage/);
  const permissions=(await f.db.query("select has_table_privilege('authenticated','private.box_usage_sessions','SELECT') allowed")).rows[0];assert.equal(permissions.allowed,false);
 }finally{await f.db.close();}
});
