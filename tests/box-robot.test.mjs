import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import '../integro-box/robot-core.js';
const C=globalThis.BoxRobotCore;
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('all 12 missions have valid, distinct boards and a reachable goal within the command limit',()=>{
 assert.equal(C.LEVELS.length,12);assert.equal(new Set(C.LEVELS.map(m=>m.walls.join(','))).size,12);
 assert.deepEqual([...new Set(C.LEVELS.map(m=>m.theme))],['garden','desert','space']);
 for(const map of C.LEVELS){
  assert.equal(map.walls.length,new Set(map.walls).size);assert(!map.walls.includes(map.start));assert(!map.walls.includes(map.goal));assert(map.walls.every(n=>Number.isInteger(n)&&n>=0&&n<25));
  const route=C.shortestPath(map);assert(route&&route.length<=C.MAX_COMMANDS);assert.equal(C.simulate(map,route).status,'won');assert.equal(C.starsFor(map,route.length),3);assert.equal(C.starsFor(map,route.length+2),2);assert.equal(C.starsFor(map,route.length+4),1);
 }
 assert(C.shortestPath(C.LEVELS.at(-1)).length>C.shortestPath(C.LEVELS[0]).length);
 assert.equal(C.step(C.LEVELS[0],0,'L').reason,'edge');assert.equal(C.step(C.LEVELS[0],4,'R').reason,'edge');assert.equal(C.step(C.LEVELS[0],0,'U').reason,'edge');assert.equal(C.step(C.LEVELS[0],20,'D').reason,'edge');assert.equal(C.step(C.LEVELS[0],5,'R').reason,'wall');
});

function fixture(saved){
 const dom=new JSDOM(read('integro-box/jogar.html'),{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document;
 const data=new Map(saved||[]),timers=new Map();let time=0,serial=0;
 w.BoxStorage={getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)};w.scrollTo=()=>{};
 w.setTimeout=(fn,ms)=>{timers.set(++serial,{fn,at:time+ms});return serial;};w.clearTimeout=id=>timers.delete(id);
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 w.eval(read('integro-box/robot-core.js'));w.eval(read('integro-box/robot-game.js'));w.eval(read('integro-box/classic-games.js'));
 const click=s=>{const b=d.querySelector(s);assert(b,'Missing '+s);b.click();};
 const advance=(ms=50000)=>{const end=time+ms;let guard=0;while(true){const pending=[...timers].sort((a,b)=>a[1].at-b[1].at)[0];if(!pending||pending[1].at>end)break;assert(++guard<1000);time=pending[1].at;timers.delete(pending[0]);pending[1].fn();}time=end;};
 const enter=()=>click('[data-game="robot"]');
 const add=route=>route.forEach(dir=>click(`[data-rr-dir="${dir}"]`));
 const key=(key,code=key,repeat=false,target=d)=>target.dispatchEvent(new w.KeyboardEvent('keydown',{key,code,repeat,bubbles:true,cancelable:true}));
 return {w,d,data,click,advance,enter,add,key,state:()=>w.BoxRobot.getState(),timers,destroy(){w.BoxRobot.stop();w.close();}};
}

test('catalog selection, all mission wins, progress and stars use only family storage',()=>{
 const t=fixture();try{
  assert(!t.state().active);t.enter();assert(t.d.body.classList.contains('robot-playing'));assert.equal(t.w.BoxUsageGame,'robot');assert.equal(t.d.querySelectorAll('.rr-tile').length,25);assert.equal(t.d.activeElement.id,'rrTitle');
  for(const m of C.LEVELS){
   assert.equal(t.state().level,m.id);t.add(C.shortestPath(m));t.click('#rrRun');t.advance();
   assert.equal(t.state().status,'won');assert.equal(t.state().position,m.goal);assert.equal(t.state().progress.best[m.id].stars,3);assert(!t.d.getElementById('rrWin').hidden);assert.equal(t.d.activeElement.id,'rrNext');
   t.click('#rrNext');
  }
  assert(t.d.getElementById('rrDialog').open);assert.match(t.d.getElementById('rrDialogContent').textContent,/12 de 12 missões · 36 de 36 estrelas/);assert.equal(t.w.localStorage.length,0);assert(t.data.has('integro-robot-v2'));
  t.click('#rrCloseDialog');t.click('#rrExit');assert(!t.state().active);assert(!t.d.body.classList.contains('robot-playing'));assert(!t.d.getElementById('lobby').classList.contains('hidden'));assert.equal(t.d.activeElement.dataset.game,'robot');
  t.enter();assert.equal(t.state().level,11);assert.equal(Object.keys(t.state().progress.best).length,12);
  const other=fixture();try{other.enter();assert.equal(other.state().level,0);assert.equal(Object.keys(other.state().progress.best).length,0);}finally{other.destroy();}
 }finally{t.destroy();}
});

test('commands can be removed individually; blocked and incomplete routes can be corrected',()=>{
 const t=fixture();try{
  t.enter();t.add(['U','R']);t.click('#rrRun');t.advance();assert.equal(t.state().status,'blocked');assert.equal(t.state().index,1);assert(t.d.querySelector('[data-rr-command="1"]').classList.contains('is-error'));assert.match(t.d.getElementById('rrStatus').textContent,/Passo 2: há um obstáculo/);
  t.click('[data-rr-command="1"]');assert.equal(t.state().status,'ready');assert.equal(t.state().position,20);assert.equal(t.state().commands.length,1);
  t.click('#rrRun');t.advance();assert.equal(t.state().status,'incomplete');t.add(['U','U','U','R','R','R','R']);t.click('#rrRun');t.advance();assert.equal(t.state().status,'won');
  t.click('#rrRetry');assert.equal(t.state().status,'ready');assert(t.d.getElementById('rrWin').hidden);assert.equal(t.state().commands.length,8);t.click('#rrClear');assert.equal(t.state().commands.length,0);assert.equal(t.state().position,20);assert(t.d.getElementById('rrRun').disabled);
  t.add(['L']);t.click('#rrRun');t.advance();assert.equal(t.state().status,'blocked');assert.match(t.d.getElementById('rrStatus').textContent,/o caminho termina aqui/);
 }finally{t.destroy();}
});

test('pause, blur, clear, level switch and exit cancel animation without late moves',async()=>{
 const t=fixture();try{
  t.enter();t.add(C.shortestPath(C.LEVELS[0]));t.click('#rrRun');t.advance(460);assert.equal(t.state().index,1);t.click('#rrRun');assert.equal(t.state().status,'paused');t.advance();assert.equal(t.state().index,1);
  t.click('#rrRun');t.advance(460);assert.equal(t.state().index,2);t.w.dispatchEvent(new t.w.Event('blur'));assert.equal(t.state().status,'paused');t.advance();assert.equal(t.state().index,2);
  t.click('#rrRun');t.click('#rrClear');t.advance();assert.equal(t.state().status,'ready');assert.equal(t.state().position,20);assert.equal(t.state().commands.length,0);
  t.add(['U','U']);t.click('#rrRun');t.click('#rrMissions');assert.equal(t.state().status,'paused');t.click('[data-rr-level="5"]');t.advance();assert.equal(t.state().level,5);assert.equal(t.state().position,24);assert.equal(t.state().commands.length,0);
  t.add(C.shortestPath(C.LEVELS[5]));t.click('#rrRun');t.d.getElementById('play').classList.add('hidden');await new Promise(r=>setImmediate(r));t.advance();assert(!t.state().active);assert.equal(t.state().position,24);assert(!t.d.body.classList.contains('robot-playing'));
  t.enter();t.add(['U']);t.click('#rrRun');t.click('#rrExit');t.advance();assert(!t.state().active);assert.equal(t.timers.size,0);
 }finally{t.destroy();}
});

test('keyboard, hints, maximum queue and menus remain usable without moving other games or typing fields',()=>{
 const t=fixture();try{
  t.enter();t.key('ArrowUp');t.key('ArrowUp','ArrowUp',true);assert.equal(t.state().commands.length,1);t.key('Backspace');assert.equal(t.state().commands.length,0);t.click('#rrHint');assert(t.d.querySelector('.rr-hinted'));assert.match(t.d.getElementById('rrStatus').textContent,/cima/);
  t.click('#rrMenu');t.key('ArrowUp');assert.equal(t.state().commands.length,0);t.click('#rrCloseDialog');
  const field=t.d.createElement('input');t.d.body.append(field);t.key('ArrowUp','ArrowUp',false,field);assert.equal(t.state().commands.length,0);
  for(let i=0;i<40;i++)t.key('ArrowUp');assert.equal(t.state().commands.length,32);assert(t.d.querySelector('[data-rr-dir]').disabled);t.click('#rrClear');
  t.add(['U']);t.key(' ','Space');assert.equal(t.state().status,'running');t.key(' ','Space');assert.equal(t.state().status,'paused');t.key('ArrowRight');assert.equal(t.state().commands.length,1);t.click('#rrClear');
  t.click('#rrExit');t.key('ArrowUp');assert.equal(t.state().commands.length,0);
  t.click('[data-game="math"]');assert.equal(t.w.BoxUsageGame,'math');assert(t.d.querySelector('[data-answer]'));assert(!t.d.body.classList.contains('robot-playing'));
 }finally{t.destroy();}
});

test('corrupt/unavailable storage cannot break play; game stars cannot mint IntGem',()=>{
 assert.deepEqual(C.sanitizeProgress({selected:999,best:{0:{steps:1},1:{steps:NaN}},sound:'true',speed:'warp'}),{selected:0,best:{},sound:false,speed:'normal'});
 const t=fixture([['integro-robot-v2','broken json']]);try{
  t.w.BoxStorage.setItem=()=>{throw Error('storage unavailable');};let purchases=0;t.w.BoxIntGem={open(){purchases++;}};
  t.enter();t.add(C.shortestPath(C.LEVELS[0]));t.click('#rrRun');t.advance();assert.equal(t.state().status,'won');assert.match(t.d.getElementById('rrWinText').textContent,/Não foi possível salvar/);assert.equal(purchases,0);
 }finally{t.destroy();}
});

test('mobile game hides floating launchers, keeps access in its menu and restores them after exit',()=>{
 const t=fixture();try{
  const style=t.d.createElement('style');style.textContent=read('integro-box/robot.css');t.d.head.append(style);
  const tools=t.d.createElement('div');tools.innerHTML='<aside class="ig-dock"></aside><aside id="boxOnline"><button id="boxOnlineToggle">Salas</button></aside><aside id="boxChat"><button id="boxChatToggle">Chat</button></aside>';t.d.body.append(tools);
  let chat=0,rooms=0;t.d.getElementById('boxChatToggle').onclick=()=>chat++;t.d.getElementById('boxOnlineToggle').onclick=()=>rooms++;
  t.enter();for(const s of ['.ig-dock','#boxOnlineToggle','#boxChatToggle'])assert.equal(t.w.getComputedStyle(t.d.querySelector(s)).display,'none');
  t.click('#rrMenu');t.click('#rrChat');assert.equal(chat,1);t.click('#rrMenu');t.click('#rrRooms');assert.equal(rooms,1);t.click('#rrExit');
  for(const s of ['.ig-dock','#boxOnlineToggle','#boxChatToggle'])assert.notEqual(t.w.getComputedStyle(t.d.querySelector(s)).display,'none');
 }finally{t.destroy();}
});
