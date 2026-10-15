import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {JSDOM} from 'jsdom';import vm from 'node:vm';import {webcrypto} from 'node:crypto';
test('chat renders approved text safely, never echoes pending messages, clears on room switch',async()=>{
 const dom=new JSDOM('<body></body>',{url:'https://www.institutointegro.com.br/integro-box/jogar.html',pretendToBeVisual:true});let active='room-a',finish,readCalls=0;
 dom.window.BoxPlayer={studentId:'student-a'};dom.window.BoxMultiplayer={get roomInfo(){return {id:active}}};
 const client={rpc:async()=>{readCalls++;return {data:{code:'A10001',messages:[{id:'m1',code:'B10002',body:'Oi <img src=x>',approved_at:'2026-10-15'}]}};},functions:{invoke:()=>new Promise(r=>finish=r)}};
 const context=vm.createContext({window:dom.window,document:dom.window.document,supabase:client,crypto:webcrypto,setInterval:()=>1,clearInterval(){}});
 vm.runInContext((await readFile(new URL('../integro-box/chat.js',import.meta.url),'utf8')).replace(/^import .*;\n/,''),context);
 const doc=dom.window.document;doc.getElementById('boxChatToggle').click();await new Promise(r=>setImmediate(r));assert.equal(readCalls,1);assert.equal(doc.querySelector('#boxChatMessages img'),null);assert.match(doc.querySelector('#boxChatMessages').textContent,/Oi <img/);
 doc.getElementById('boxChatInput').value='Mensagem aguardando';const sending=doc.getElementById('boxChatForm').onsubmit({preventDefault(){}});assert.equal(doc.getElementById('boxChatSend').disabled,true);assert(!doc.querySelector('#boxChatMessages').textContent.includes('aguardando'));
 active=null;dom.window.dispatchEvent(new dom.window.Event('box-room-change'));finish({data:{status:'approved'}});await sending;assert.equal(doc.querySelector('#boxChatMessages').textContent,'');assert.equal(doc.getElementById('boxChatSend').disabled,true);
 dom.window.BoxChat.stop();dom.window.close();
});

test('unread badge counts new approved messages while closed, excludes own and reaction changes, resets on reading or leaving',async()=>{
 const dom=new JSDOM('<body></body>',{url:'https://www.institutointegro.com.br',pretendToBeVisual:true});let tick,active='room-a',messages=[{id:'old',code:'B10002',body:'Antes'}],resolveRead;
 dom.window.BoxMultiplayer={get roomInfo(){return {id:active}}};dom.window.BoxPlayer={studentId:'student-a'};
 const client={rpc:async()=>({data:{code:'A10001',messages}})};
 const context=vm.createContext({window:dom.window,document:dom.window.document,supabase:client,crypto:webcrypto,setInterval:fn=>(tick=fn,1),clearInterval(){}});
 vm.runInContext((await readFile(new URL('../integro-box/chat.js',import.meta.url),'utf8')).replace(/^import .*;\n/,''),context);
 const settle=()=>new Promise(r=>setImmediate(r)),doc=dom.window.document,badge=doc.getElementById('boxChatUnread');await settle();assert.equal(badge.hidden,true);
 messages=[...messages,{id:'new',code:'B10002',body:'Vamos!'},{id:'own',code:'A10001',body:'Minha mensagem'}];tick();await settle();assert.equal(badge.textContent,'1');assert.equal(badge.hidden,false);assert.match(doc.getElementById('boxChatToggle').getAttribute('aria-label'),/1 mensagem não lida/);
 messages=messages.map(m=>({...m,reactions:{like:2}}));tick();await settle();assert.equal(badge.textContent,'1');
 doc.getElementById('boxChatToggle').click();await settle();assert.equal(badge.hidden,true);
 messages.push({id:'open',code:'B10002',body:'Chat aberto'});tick();await settle();assert.equal(badge.hidden,true);
 doc.getElementById('boxChatClose').click();messages.push({id:'late',code:'B10002',body:'Outra'});tick();await settle();assert.equal(badge.textContent,'1');
 messages=messages.filter(m=>m.id!=='late');tick();await settle();assert.equal(badge.hidden,true);
 messages.push({id:'last',code:'B10002',body:'Até mais'});tick();await settle();assert.equal(badge.hidden,false);
 active=null;dom.window.dispatchEvent(new dom.window.Event('box-room-change'));assert.equal(badge.hidden,true);assert.equal(doc.getElementById('boxChatMessages').textContent,'');
 dom.window.BoxChat.stop();dom.window.close();
});
test('all four reactions reflect server counts, toggle idempotently and fail without a fake increment',async()=>{
 const dom=new JSDOM('<body></body>',{url:'https://www.institutointegro.com.br',pretendToBeVisual:true});let active=[],failed=false,calls=[];
 dom.window.BoxMultiplayer={roomInfo:{id:'room-a'}};dom.window.BoxPlayer={studentId:'student-a'};
 const client={rpc:async(name,args)=>{if(name==='box_chat_react'){calls.push(args);if(failed)return {error:{message:'offline'}};active=args.p_active?[...new Set([...active,args.p_reaction])]:active.filter(x=>x!==args.p_reaction);return {data:{ok:true}};}return {data:{code:'A10001',messages:[{id:'m1',code:'B10002',body:'Oi',reactions:Object.fromEntries(active.map(x=>[x,1])),my_reactions:active}]}};}};
 const context=vm.createContext({window:dom.window,document:dom.window.document,supabase:client,crypto:webcrypto,setInterval:()=>1,clearInterval(){}});
 vm.runInContext((await readFile(new URL('../integro-box/chat.js',import.meta.url),'utf8')).replace(/^import .*;\n/,''),context);
 const settle=()=>new Promise(r=>setImmediate(r)),doc=dom.window.document;await settle();doc.getElementById('boxChatToggle').click();await settle();
 for(const key of ['like','star','fireworks','happy']){const button=()=>doc.querySelector(`[data-reaction="${key}"]`);button().click();await settle();assert.equal(button().getAttribute('aria-pressed'),'true');assert.match(button().textContent,/1/);button().click();await settle();assert.equal(button().getAttribute('aria-pressed'),'false');assert.match(button().textContent,/0/);}
 assert.equal(calls.length,8);assert.equal(calls[0].p_student,'student-a');assert.equal(calls[0].p_active,true);assert.equal(calls[1].p_active,false);
 failed=true;doc.querySelector('[data-reaction="like"]').click();await settle();assert.equal(doc.querySelector('[data-reaction="like"]').getAttribute('aria-pressed'),'false');assert.match(doc.getElementById('boxChatStatus').textContent,/Não foi possível/);
 dom.window.BoxChat.stop();dom.window.close();
});
test('chat dragging stays within the viewport, remembers its position and does not open on release',async()=>{
 const source=(await readFile(new URL('../integro-box/chat.js',import.meta.url),'utf8')).replace(/^import .*;\n/,'');
 const dom=new JSDOM('<body></body>',{url:'https://www.institutointegro.com.br',pretendToBeVisual:true});const win=dom.window,doc=win.document;
 Object.defineProperty(win,'innerWidth',{value:400,configurable:true});Object.defineProperty(win,'innerHeight',{value:800,configurable:true});
 win.HTMLElement.prototype.getBoundingClientRect=function(){const width=this.id==='boxChat'?(doc.getElementById('boxChatPanel')?.hidden?90:370):90,height=100;const right=400-(parseFloat(this.style.right)||14),bottom=800-(parseFloat(this.style.bottom)||82);return {width,height,right,bottom,left:right-width,top:bottom-height};};
 const context=vm.createContext({window:win,document:doc,supabase:{},crypto:webcrypto,setInterval:()=>1,clearInterval(){}});vm.runInContext(source,context);
 const root=doc.getElementById('boxChat'),button=doc.getElementById('boxChatToggle'),panel=doc.getElementById('boxChatPanel');
 const pointer=(type,x,y)=>{const e=new win.Event(type,{bubbles:true,cancelable:true});Object.assign(e,{pointerId:1,button:0,clientX:x,clientY:y});(type==='pointerdown'?button:win).dispatchEvent(e);};
 pointer('pointerdown',350,680);pointer('pointermove',-200,-200);pointer('pointerup',-200,-200);button.click();assert.equal(panel.hidden,true);assert.equal(root.style.right,'302px');assert.equal(root.style.bottom,'692px');
 const saved=JSON.parse(win.localStorage.getItem('integro-box-chat-position-v1'));assert.equal(saved.right,302);assert.equal(saved.bottom,692);
 pointer('pointerdown',50,50);pointer('pointerup',50,50);button.click();assert.equal(panel.hidden,false);assert.equal(root.style.right,'22px');
 Object.defineProperty(win,'innerWidth',{value:380,configurable:true});win.dispatchEvent(new win.Event('resize'));assert.equal(root.style.right,'8px');
 win.BoxChat.stop();vm.runInContext(source,vm.createContext({window:win,document:doc,supabase:{},crypto:webcrypto,setInterval:()=>1,clearInterval(){}}));assert.equal(doc.getElementById('boxChat').style.right,'282px');
 win.BoxChat.stop();win.close();
});
