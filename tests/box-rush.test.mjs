import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
import {Run,LEVELS,REGIONS,SHOP,clean,purchase,complete,snapshot,restore,buildTrack} from '../integro-box/rush-src/rules.mjs';
import {RushScene} from '../integro-box/rush-src/scene.js';
import * as T from '../integro-box/rush-src/node_modules/three/build/three.module.js';
import {usageDatabase} from './box-usage-fixture.mjs';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const advance=(r,time)=>{while(r.time<time&&r.status==='playing')r.update(Math.min(1/120,time-r.time));};

test('every expedition has a playable obstacle route, lasts four minutes and rewards exactly once',()=>{
 assert.equal(LEVELS.length,15);assert.equal(REGIONS.length,5);const p=clean(null);
 for(let level=0;level<15;level++){
  const run=new Run(level);assert.deepEqual(buildTrack(level),buildTrack(level));
  while(run.status==='playing'){
   const next=run.track.filter(o=>!['coin','magnet','shield'].includes(o.type)&&o.time>=run.time&&o.time<run.time+.65),blocked=new Set(next.map(o=>o.lane));
   if(blocked.has(run.lane)){const free=[-1,0,1].find(l=>!blocked.has(l));assert.notEqual(free,undefined);while(run.lane!==free)run.action(free>run.lane?'right':'left');}
   run.update(1/30);
  }
  assert.equal(run.status,'won',`level ${level+1}`);assert.equal(run.hits,0);assert.equal(run.time,240);const before=p.coins;assert.equal(complete(p,run),run.level.bonus);assert.equal(complete(p,run),0);assert.equal(p.coins,before+run.level.bonus);assert.equal(p.unlocked,Math.min(15,level+2));
 }
});

test('jump, slide, lane motion, shields, magnets, checkpoint retry and reload preserve collision rules',()=>{
 const obstacle=type=>{const r=new Run(0);r.track=[{id:1,time:1,lane:0,type}];return r;};
 for(const type of['log','gap']){const r=obstacle(type);advance(r,.65);r.action('jump');advance(r,1.1);assert.equal(r.health,3,type);}
 const arch=obstacle('arch');advance(arch,.7);arch.action('slide');advance(arch,1.1);assert.equal(arch.health,3);
 const rock=obstacle('rock');advance(rock,.65);rock.action('jump');advance(rock,1.1);assert.equal(rock.health,2,'rocks require a lane change');
 const shield=obstacle('rock');shield.shield=5;advance(shield,1.1);assert.equal(shield.health,3);assert.equal(shield.shield,0);
 const magnet=obstacle('coin');magnet.track[0].lane=1;magnet.magnet=3;advance(magnet,1.1);assert.equal(magnet.coins,2);
 const r=new Run(0);r.track=[{id:1,time:61,lane:0,type:'coin'},{id:2,time:63,lane:0,type:'rock'},{id:3,time:66,lane:0,type:'rock'},{id:4,time:69,lane:0,type:'rock'}];advance(r,70);assert.equal(r.status,'lost');assert.equal(r.coins,2);assert.equal(r.checkpoint,60);r.retry();assert.equal(r.time,60);advance(r,61.1);assert.equal(r.coins,2,'retry cannot harvest the same coin twice');
 const live=new Run(0);advance(live,65.1);const saved=snapshot(live),copy=restore(JSON.parse(JSON.stringify(saved)),clean(null));assert.deepEqual(snapshot(copy),saved);assert.equal(restore({...saved,level:14},clean(null)),null);assert.equal(restore({...saved,time:NaN},clean(null)),null);live.update(NaN);assert.equal(live.time,saved.time);
});

test('shop spends only earned currency, equips owned items and sanitizes damaged saves',()=>{
 const p=clean(null);assert.equal(purchase(p,SHOP[0].id),false);p.coins=20000;let expected=p.coins;
 for(const item of SHOP.slice(0,4)){assert(purchase(p,item.id));expected-=item.price;assert.equal(p.coins,expected);assert.equal(p.equipped[item.slot],item.id);assert(purchase(p,item.id));assert.equal(p.coins,expected);assert.equal(p.equipped[item.slot],null);}
 assert.equal(SHOP.length,24);assert.equal(new Set(SHOP.map(x=>x.id)).size,24);assert.equal(clean({owned:{},coins:Infinity}).coins,0);assert.deepEqual(clean({equipped:{head:SHOP[0].id}}).equipped,{});
});

function fakeScene(){return {setLevel(){},resize(){},draw(){},dispose(){}};}
async function ui(storage=new Map()){
 const dom=new JSDOM(await read('integro-box/jogar.html'),{url:'https://www.institutointegro.com.br/integro-box/jogar.html'}),w=dom.window;let frame,exits=0,resolveDisconnect=null;
 w.BoxStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};w.BoxMultiplayer={async disconnect(){exits++;if(resolveDisconnect)await resolveDisconnect;}};
 w.document.getElementById('brandHome').onclick=()=>{w.document.getElementById('lobby').classList.remove('hidden');};
 const ctx=vm.createContext({window:w,document:w.document,performance:{now:()=>0},console,Run,LEVELS,REGIONS,SHOP,clean,purchase,complete,snapshot,restore,requestAnimationFrame:cb=>{frame=cb;return 1;},cancelAnimationFrame:()=>{frame=null;}});
 const source=(await read('integro-box/rush-src/entry.js')).replace(/^import .*;\n/gm,'').replace('export function','function');vm.runInContext(source,ctx);const api=ctx.installRush({makeScene:fakeScene});
 return {dom,w,ctx,api,storage,exits:()=>exits,frame:time=>frame?.(time),block:p=>{resolveDisconnect=p},click:selector=>w.document.querySelector(selector).click()};
}

test('catalog, controls, pause, account storage, returning home and logout work together',async()=>{
 const f=await ui();try{
  vm.runInContext(await read('integro-box/catalog.js'),f.ctx);assert(f.w.BoxCatalog.games.includes('integro-rush'));assert.equal(f.w.document.querySelector('.catalog-feature h2').textContent,'Integro Rush');
  await f.api.open();assert.equal(f.exits(),1);assert(f.api.getState().active);f.click('[data-start="0"]');assert.equal(f.api.getState().mode,'');
  const key=k=>f.w.document.dispatchEvent(new f.w.KeyboardEvent('keydown',{key:k,bubbles:true,cancelable:true}));key('ArrowRight');assert.equal(f.api.getState().run.lane,1);key('ArrowUp');assert(f.api.getState().run.jump>0);f.frame(100);key('Escape');const time=f.api.getState().run.time;f.frame(10000);assert.equal(f.api.getState().run.time,time,'pause freezes simulation');
  f.click('[data-resume]');f.w.dispatchEvent(new f.w.Event('blur'));assert.equal(f.api.getState().mode,'pause');f.click('[data-resume]');f.w.document.getElementById('rushCanvas').setPointerCapture=()=>{};
  const pointer=(type,x,y)=>{const event=new f.w.Event(type,{bubbles:true,cancelable:true});Object.assign(event,{pointerId:1,clientX:x,clientY:y});f.w.document.getElementById('rushCanvas').dispatchEvent(event);};pointer('pointerdown',100,100);pointer('pointermove',40,102);assert.equal(f.api.getState().run.lane,0);
  key('Escape');f.click('[data-panel="shop"]');assert.equal(f.w.document.getElementById('rushCanvas').parentElement.id,'rushPreviewStage');assert.equal(f.w.document.querySelectorAll('[data-rush-thumbnail]').length,24);f.click('[data-slot="head"]');assert.equal(f.w.document.querySelectorAll('[data-rush-thumbnail]').length,6);f.click('[data-resume]');assert.equal(f.w.document.getElementById('rushCanvas').parentElement.id,'rushApp');assert.equal(f.api.getState().mode,'');
  f.api.persist();assert(f.storage.get('integro-rush-v1'));f.click('#brandHome');assert(!f.api.getState().active);assert(!f.w.document.getElementById('lobby').classList.contains('hidden'));
  const ids=[...f.w.document.querySelectorAll('[id]')].map(x=>x.id);assert.equal(new Set(ids).size,ids.length);
  await f.api.open();f.api.stop();await f.api.open();assert(!f.api.getState().active);
  const reloaded=await ui(f.storage);try{assert.equal(reloaded.api.getState().run.time,time);assert.equal(reloaded.api.getState().run.lane,0);}finally{reloaded.dom.window.close();}
 }finally{f.dom.window.close();}
});

test('logout while opening cannot reopen the game; WebGL failure gives a usable return path',async()=>{
 const f=await ui();try{let resolve;f.block(new Promise(r=>resolve=r));const opening=f.api.open();f.api.stop();resolve();await opening;assert(!f.api.getState().active);}finally{f.dom.window.close();}
 const g=await ui();try{g.api.stop();delete g.w.BoxRush;g.w.document.getElementById('rushApp').remove();g.w.document.getElementById('playRush').closest('.card').remove();const api=g.ctx.installRush({makeScene:()=>{throw Error('no WebGL')}});await api.open();assert.equal(api.getState().mode,'error');g.click('[data-exit]');assert(!api.getState().active);}finally{g.dom.window.close();}
});

test('all five 3D environments and 24 equipped items build with finite transforms and bounded object counts',()=>{
 const renderer={shadowMap:{},setPixelRatio(){},setSize(){},render(){},dispose(){}};const scene=new RushScene({clientWidth:900,clientHeight:600},'low',{rendererFactory:()=>renderer});
 const p=clean(null);p.coins=999999;
 for(const item of SHOP){purchase(p,item.id);const run=new Run((SHOP.indexOf(item)%5)*3);scene.setLevel(run,p);for(const time of[0,12,62,122,182,239]){run.time=time;scene.draw(run,time);scene.scene.updateMatrixWorld(true);let objects=0;scene.world.traverse(o=>{objects++;assert(o.position.toArray().every(Number.isFinite));assert(o.scale.toArray().every(Number.isFinite));});assert(objects<700);assert(scene.objects.size<100);assert.equal(scene.scenery.length,12);}}
 scene.dispose();
});

test('Rush usage migration preserves permissions and can be applied twice',async()=>{
 const f=await usageDatabase();try{const sql=await read('supabase/migrations/20261015170000_box_rush_usage.sql');await f.db.exec(sql);await f.db.exec(sql);await assert.rejects(()=>f.pulse(null,109,'rush'),/box_access_denied/);await f.pulse(3,109,'rush');await f.tick(3,109);await f.pulse(3,109,'rush');const report=await f.report(1,3,'rush');assert.equal(report.sessions[0].history[0].game,'rush');assert(report.summary.active_seconds>=29);await assert.rejects(()=>f.report(3),/box_management_denied/);await f.pulse(3,109,'craft');}finally{await f.db.close();}
});
