import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
import {usageDatabase} from './box-usage-fixture.mjs';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const source=async p=>import('data:text/javascript;base64,'+Buffer.from(await read('integro-box/gosnake-src/'+p+'.js')).toString('base64'));

test('15 distinct arenas keep walls solid, tunnels passable and joystick headings stable',async()=>{
 const {SnakeRun,LEVELS,makeArena,cellKey}=await source('gosnake-rules');
 const {screenDirection,joystickVector}=await source('gosnake-controls');
 assert.equal(LEVELS.length,15);assert.equal(new Set(LEVELS.map(l=>l.name)).size,15);
 for(let level=0;level<15;level++){
  const arena=makeArena(level);assert(arena.free.length>600);
  for(const tunnel of arena.tunnels){
   const dx=tunnel.axis==='x'?1:0,dz=tunnel.axis==='z'?1:0,run=new SnakeRun(level,1);
   run.status='playing';run.fruits=[];run.power=null;
   run.snake=[{x:tunnel.x-dx,z:tunnel.z-dz},{x:tunnel.x-2*dx,z:tunnel.z-2*dz}];run.direction=dx?1:2;
   run.step();assert.equal(run.status,'playing');assert.equal(run.tunnelTrips,1);
   assert(!arena.walls.has(cellKey(run.snake[0].x,run.snake[0].z)));
  }
 }
 for(let direction=0;direction<4;direction++){
  const forward=[[0,-1],[1,0],[0,1],[-1,0]][direction];
  assert.equal(screenDirection(0,-1,...forward),direction);
  assert.equal(screenDirection(1,0,...forward),(direction+1)%4);
 }
 const clamp=joystickVector(100,100,30);assert(Math.abs(Math.hypot(clamp.px,clamp.py)-30)<1e-8);
 const run=new SnakeRun(0,1);run.status='playing';assert(!run.steer(3));
 run.steer(0);run.step();const z=run.snake[0].z;
 run.steer(0);run.step();assert.equal(run.direction,0);assert.equal(run.snake[0].z,z-1);
});

test('catalog integration exits multiplayer, returns home and closes on logout without losing account scope',async()=>{
 const dom=new JSDOM(await read('integro-box/jogar.html'),{url:'https://www.institutointegro.com.br/integro-box/jogar.html'});
 const {window}=dom;let active=false,saves=0,exits=0;
 window.BoxStorage={getItem(){return null},setItem(){}};
 window.BoxMultiplayer={async disconnect(){exits++}};
 window.document.getElementById('brandHome').onclick=()=>window.document.getElementById('lobby').classList.remove('hidden');
 const context=vm.createContext({window,document:window.document,location:window.location});
 const entry=(await read('integro-box/gosnake-src/entry.js')).replace(/^import .*;\n/gm,'').replace('export function','function');
 vm.runInContext(entry,context);
 const fake={show:async()=>{active=true;window.document.getElementById('snakeApp').hidden=false},hide:()=>{active=false;window.document.getElementById('snakeApp').hidden=true},persist:()=>saves++};
 const api=context.installGoSnake({mount:()=>fake,makeLoader:()=>async(name,open)=>open(()=>{})});
 await window.document.getElementById('playGoSnake').onclick();assert(active);assert.equal(exits,1);
 assert(window.document.getElementById('lobby').classList.contains('hidden'));
 api.persist();assert.equal(saves,1);window.document.getElementById('brandHome').click();assert(!active);
 await window.document.getElementById('playGoSnake').onclick();api.stop();assert(!active);
 await window.document.getElementById('playGoSnake').onclick();assert(!active);
 const gameSource=await read('integro-box/gosnake-src/gosnake.js');assert(!gameSource.includes('localStorage.'));assert(gameSource.includes('window.BoxStorage.getItem'));
 const ids=[...window.document.querySelectorAll('[id]')].map(el=>el.id);assert.equal(new Set(ids).size,ids.length,'No duplicate IDs');
 assert.equal(window.document.querySelector('#snakeJoystick #snakeStick').id,'snakeStick');
 const publicPage=await read('integro-box/index.html');assert(publicPage.includes('Jogar GoSnake'));assert(!/billing\/|10,90/.test(publicPage));
 dom.window.close();
});

test('GoSnake usage migration preserves authorization and reports the new game',async()=>{
 const f=await usageDatabase();try{
  const sql=await read('supabase/migrations/20261013110000_box_gosnake_usage.sql');
  await f.db.exec(sql);await f.db.exec(sql);
  await assert.rejects(()=>f.pulse(null,103,'gosnake'),/box_access_denied/);
  await assert.rejects(()=>f.pulse(8,103,'gosnake'),/box_access_denied/);
  await f.pulse(3,103,'gosnake');await f.tick(3,103);await f.pulse(3,103,'gosnake');
  const report=await f.report(1,3,'gosnake');assert.equal(report.summary.sessions,1);assert(report.summary.active_seconds>=29);
  assert.equal(report.sessions[0].history[0].game,'gosnake');
  await assert.rejects(()=>f.report(3),/box_management_denied/);
  await assert.rejects(()=>f.pulse(3,103,'invented'),/invalid_usage/);
  await f.pulse(3,103,'craft');
 }finally{await f.db.close();}
});
