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
