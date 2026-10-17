import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const settle=()=>new Promise(r=>setImmediate(r));

test('compact account keeps original logout/profile actions, disclosure and searchable game launches',async()=>{
 const dom=new JSDOM(await read('integro-box/jogar.html'),{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 let signedOut=0,played=0,changed=0;const logout=d.getElementById('boxLogout');logout.onclick=()=>signedOut++;d.getElementById('playFruitGame').onclick=()=>played++;
 const select=d.createElement('select');select.id='boxStudentSelect';select.innerHTML='<option>Aluno A</option><option>Aluno B</option>';select.onchange=()=>changed++;d.querySelector('.box-player-name').append(select);
 try{
  w.eval(await read('integro-box/catalog.js'));
  assert.equal(d.querySelector('body>.box-account'),null);assert.equal(d.querySelector('body>#boxUsageNotice'),null);assert.equal(d.querySelector('#boxAccountDialog #boxLogout'),logout);assert.equal(d.querySelector('#boxAccountDialog #boxStudentSelect'),select);
  d.querySelector('.catalog-settings').click();assert(d.getElementById('boxAccountDialog').open);assert(!d.querySelector('.catalog-privacy').open);d.querySelector('.catalog-privacy').open=true;assert.match(d.querySelector('.catalog-privacy').textContent,/moderação/);
  select.dispatchEvent(new w.Event('change'));logout.click();assert.equal(changed,1);assert.equal(signedOut,1);d.getElementById('boxAccountDialog').close();
  const search=d.querySelector('.catalog-search');search.value='fruit';search.dispatchEvent(new w.Event('input'));const visible=[...d.querySelectorAll('[data-catalog-game]')].filter(c=>!c.hidden);assert.equal(visible.length,1);visible[0].querySelector('.catalog-play').click();assert.equal(played,1);assert.equal(d.querySelector('.catalog-recent').hidden,false);
 }finally{w.close();}
});

test('loading stages wait for auth and real script completion; failures keep the gate locked with a retry',async()=>{
 const html=await read('integro-box/jogar.html'),source=(await read('integro-box/gate.js')).replace(/^import .*;\n/gm,'').replaceAll('await import(','await loadModule(');
 for(const fail of [false,true]){
  const dom=new JSDOM(html,{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document,loaded=[];let releaseAuth;
  w.requireFamily=()=>new Promise(r=>releaseAuth=r);w.supabase={auth:{onAuthStateChange(){},signOut:async()=>{}}};
  w.loadModule=async()=>({mountPlayerProfile(){},startPresence(){},installGoSnake(){},installInterDance(){},installRush(){},startUsage(){},startIntGem:async()=>{}});
  const append=d.body.append.bind(d.body);d.body.append=(...nodes)=>{append(...nodes);for(const n of nodes)if(n.tagName==='SCRIPT'){loaded.push(n.src);queueMicrotask(()=>fail&&n.src.includes('egg.js')?n.onerror():n.onload());}};
  try{
   const done=w.eval('(async()=>{'+source+'})()');assert.equal(loaded.length,0);assert(d.body.classList.contains('box-locked'));releaseAuth({id:'user-a'});await done;
   assert(loaded[0].includes('classic-games'));assert.equal(d.getElementById('boxGate').getAttribute('aria-busy'),'false');
   if(fail){assert(d.body.classList.contains('box-locked'));assert.equal(d.getElementById('boxGate').dataset.state,'error');assert(!d.getElementById('boxRetry').hidden);assert(!loaded.some(s=>s.includes('worlds.js')));}
   else{assert(!d.body.classList.contains('box-locked'));assert(d.getElementById('boxGate').hidden);assert(loaded.some(s=>s.includes('catalog.js')));}
  }finally{w.close();}
 }
});

test('portal entry shows the catalog for old game links and saved recent games; InterDance opens only on selection',async()=>{
 const html=await read('integro-box/jogar.html'),gate=(await read('integro-box/gate.js')).replace(/^import .*;\n/gm,'').replaceAll('await import(','await loadModule(');
 const dance=(await read('integro-box/interdance.js')).replace(/export \{[^}]+\};\s*$/,''),catalog=await read('integro-box/catalog.js');
 const gameHashes=['#interdance','#interdace','#gosnake','#interball','#fruitbox','#egggame','#fuitcort','#integrocraft'];
 for(const hash of ['',...gameHashes,'#gamesTitle']){
  const dom=new JSDOM(html,{url:'https://example.test/integro-box/jogar.html?v=old'+hash,runScripts:'outside-only'}),w=dom.window,d=w.document;
  const gradient={addColorStop(){}},ctx=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient,measureText:()=>({width:50})},{get:(o,k)=>k in o?o[k]:()=>{}});
  w.HTMLCanvasElement.prototype.getContext=()=>ctx;w.requestAnimationFrame=()=>1;w.cancelAnimationFrame=()=>{};
  w.history.replaceState({entry:'preserved'},'',w.location.href);
  w.localStorage.setItem('box:user-a:catalog-recent-v1',JSON.stringify(['interdance']));
  w.requireFamily=async()=>({id:'user-a'});w.supabase={auth:{onAuthStateChange(){},signOut:async()=>{}}};
  d.getElementById('brandHome').onclick=()=>{d.getElementById('lobby').classList.remove('hidden');d.getElementById('footer').classList.remove('hidden');};
  const idleModules={mountPlayerProfile(){},startPresence(){},installGoSnake(){},installRush(){},startUsage(){},startIntGem:async()=>{}};
  w.loadModule=async url=>{assert(!gameHashes.includes(w.location.hash),'game anchor reached an installer');return url.includes('/interdance.js')?w.eval('(function(){'+dance+';return {installInterDance};})()'):idleModules;};
  const append=d.body.append.bind(d.body);d.body.append=(...nodes)=>{append(...nodes);for(const n of nodes)if(n.tagName==='SCRIPT')queueMicrotask(()=>{assert(!gameHashes.includes(w.location.hash),'game anchor reached a script');if(n.src.includes('catalog.js'))w.eval(catalog);n.onload();});};
  try{
   await w.eval('(async()=>{'+gate+'})()');
   assert.equal(w.location.hash,gameHashes.includes(hash)?'':hash);assert.equal(w.location.search,'?v=old');assert.equal(w.history.state.entry,'preserved');
   assert(d.getElementById('boxGate').hidden);assert(!d.body.classList.contains('box-locked'));
   assert.equal(d.getElementById('lobby').dataset.catalogReady,'true');assert(!d.getElementById('lobby').classList.contains('hidden'));
   assert.equal(w.InterDance.getState().active,false);assert(d.getElementById('danceApp').hidden);assert(!d.querySelector('.catalog-recent').hidden);
   d.querySelector('[data-catalog-game="interdance"] .catalog-play').click();await settle();
   assert.equal(w.InterDance.getState().active,true);assert(!d.getElementById('danceApp').hidden);assert(d.getElementById('lobby').classList.contains('hidden'));
   d.getElementById('danceExit').click();assert.equal(w.InterDance.getState().active,false);assert(!d.getElementById('lobby').classList.contains('hidden'));assert.equal(d.activeElement.id,'playInterDance');
  }finally{w.BoxInterDance?.stop();w.close();}
 }
});

test('public game cards link to the catalog without an automatic game selection',async()=>{
 const dom=new JSDOM(await read('integro-box/index.html'),{url:'https://example.test/integro-box/'});
 try{const links=[...dom.window.document.querySelectorAll('.box-game a')];assert(links.length>=4);for(const link of links){assert.equal(new URL(link.href).pathname,'/integro-box/jogar.html');assert.equal(new URL(link.href).hash,'');}}
 finally{dom.window.close();}
});

test('rooms drag, restore, resize and fullscreen stay in bounds and never open or request a room after dragging',async()=>{
 const source=(await read('integro-box/multiplayer.js')).replace(/^import .*;\n/,'');
 async function fixture(saved){
  const dom=new JSDOM('<body></body>',{url:'https://example.test/integro-box/jogar.html',runScripts:'outside-only'}),w=dom.window,d=w.document;let calls=0;
  Object.defineProperty(w,'innerWidth',{value:360,configurable:true});Object.defineProperty(w,'innerHeight',{value:740,configurable:true});
  if(saved)w.localStorage.setItem('integro-box-rooms-position-v1',saved);
  w.HTMLElement.prototype.getBoundingClientRect=function(){let width=68,height=36,left,top;if(this.id==='boxOnlinePanel'){width=Math.min(340,w.innerWidth-16);height=Math.min(440,w.innerHeight-16);left=parseFloat(this.style.left)||0;top=parseFloat(this.style.top)||0;}else{left=w.innerWidth-(parseFloat(this.style.right)||14)-width;top=w.innerHeight-(parseFloat(this.style.bottom)||136)-height;}return {width,height,left,top,right:left+width,bottom:top+height};};
  w.supabase={rpc:async()=>{calls++;return {data:{rooms:[]}};}};w.eval(source);return {dom,w,d,calls:()=>calls};
 }
 const f=await fixture(),{w,d}=f,button=d.getElementById('boxOnlineToggle'),root=d.getElementById('boxOnline'),sheet=d.getElementById('boxOnlinePanel');
 const pointer=(type,x,y,handle=button)=>{const e=new w.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{pointerId:1,button:0,clientX:x,clientY:y});(type==='pointerdown'?handle:w).dispatchEvent(e);};
 try{
  pointer('pointerdown',310,580);pointer('pointermove',170,220);pointer('pointerup',-100,-100);button.click();assert(sheet.hidden);assert.equal(f.calls(),0);assert.equal(root.style.right,'284px');assert.equal(root.style.bottom,'696px');
  const saved=w.localStorage.getItem('integro-box-rooms-position-v1');const restored=await fixture(saved);assert.equal(restored.d.getElementById('boxOnline').style.right,'284px');restored.w.close();
  pointer('pointerdown',30,20);pointer('pointerup',30,20);button.click();await settle();assert(!sheet.hidden);assert.equal(f.calls(),1);
  let r=sheet.getBoundingClientRect();assert(r.left>=8&&r.right<=352&&r.top>=8&&r.bottom<=732);
  pointer('pointerdown',40,30,d.getElementById('boxOnlineDrag'));pointer('pointermove',200,100);pointer('pointerup',200,100);assert(!sheet.hidden);
  Object.defineProperty(w,'innerWidth',{value:320,configurable:true});Object.defineProperty(w,'innerHeight',{value:280,configurable:true});w.dispatchEvent(new w.Event('resize'));r=sheet.getBoundingClientRect();assert(r.left>=8&&r.right<=312&&r.top>=8&&r.bottom<=272);
  const full=d.createElement('section');d.body.append(full);Object.defineProperty(d,'fullscreenElement',{value:full,configurable:true});d.dispatchEvent(new w.Event('fullscreenchange'));assert.equal(root.parentElement,full);r=sheet.getBoundingClientRect();assert(r.right<=312&&r.bottom<=272);
 }finally{w.close();}
});
