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
