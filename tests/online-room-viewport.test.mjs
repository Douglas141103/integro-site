import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {mountScreenExpansion,mountRoomViewport} from '../aulas-online/room-viewport.mjs';
import {mountRoomPanels} from '../aulas-online/room-panels.mjs';
const html=readFileSync(new URL('../aulas-online/index.html',import.meta.url),'utf8');
const tick=()=>new Promise(resolve=>setTimeout(resolve,0));
test('shared screen offers Reduce while fullscreen and resets after native Escape',async()=>{
 const dom=new JSDOM('<div id="tile"><video></video><button></button></div>'),doc=dom.window.document,tile=doc.querySelector('#tile'),button=doc.querySelector('button');
 tile.requestFullscreen=async()=>{doc.fullscreenElement=tile;doc.dispatchEvent(new dom.window.Event('fullscreenchange'));};
 doc.exitFullscreen=async()=>{doc.fullscreenElement=null;doc.dispatchEvent(new dom.window.Event('fullscreenchange'));};
 const dispose=mountScreenExpansion(tile,button);
 try{button.click();await tick();assert.equal(button.textContent,'Reduzir tela');assert.equal(button.closest('#tile'),doc.fullscreenElement);
 button.click();await tick();assert.equal(doc.fullscreenElement,null);assert.equal(button.textContent,'Ampliar tela');
 button.click();await tick();await doc.exitFullscreen();assert.equal(button.getAttribute('aria-expanded'),'false');
 }finally{dispose();dom.window.close();}
});
test('fullscreen fallback reduces and restores the same video without replacing its stream',async()=>{
 const dom=new JSDOM('<div id="videos"><div id="tile"><video></video><button></button></div></div>'),doc=dom.window.document,tile=doc.querySelector('#tile'),button=doc.querySelector('button'),video=doc.querySelector('video'),videos=doc.querySelector('#videos');
 const stream={id:'live-stream'};video.srcObject=stream;tile.requestFullscreen=async()=>{throw Error('unavailable');};
 const dispose=mountScreenExpansion(tile,button);
 try{button.click();await tick();assert.equal(tile.parentNode,doc.body);assert.equal(button.textContent,'Reduzir tela');
 button.click();await tick();assert.equal(tile.parentNode,videos);assert.equal(video.srcObject,stream);
 button.click();await tick();doc.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(tile.parentNode,videos);
 button.click();await tick();dispose();assert.equal(tile.parentNode,videos);assert.equal(doc.querySelector('.screen-expanded'),null);
 }finally{dispose();dom.window.close();}
});
test('mobile chat follows keyboard viewport and releases compact mode on Done and tab changes',async()=>{
 const dom=new JSDOM(html,{pretendToBeVisual:true}),win=dom.window,doc=win.document,room=doc.querySelector('#classroom');room.hidden=false;win.innerWidth=390;
 const viewport=new win.EventTarget();Object.assign(viewport,{height:780,offsetTop:0});win.visualViewport=viewport;
 const dispose=mountRoomPanels(room);
 try{room.querySelector('[data-room-panel="chat"]').click();const input=room.querySelector('#chat-message');input.focus();await tick();
 viewport.height=340;viewport.offsetTop=44;viewport.dispatchEvent(new win.Event('resize'));
 assert.equal(room.classList.contains('chat-composing'),true);assert.equal(room.style.getPropertyValue('--room-visible-height'),'340px');assert.equal(room.style.getPropertyValue('--room-visible-top'),'44px');assert.equal(room.querySelector('#chat-done').hidden,false);
 input.value='Mensagem preservada';room.querySelector('#chat-done').click();await tick();assert.equal(room.classList.contains('chat-composing'),false);assert.equal(input.value,'Mensagem preservada');
 input.focus();await tick();room.querySelector('[data-room-panel="call"]').click();await tick();assert.equal(room.classList.contains('chat-composing'),false);assert.equal(room.querySelector('#videos').hidden,false);
 dispose();viewport.height=800;viewport.dispatchEvent(new win.Event('resize'));assert.equal(room.style.getPropertyValue('--room-visible-height'),'');
 }finally{dispose();dom.window.close();}
});
test('desktop typing keeps the chat beside the video without entering mobile composition mode',()=>{
 const dom=new JSDOM(html,{pretendToBeVisual:true}),doc=dom.window.document,room=doc.querySelector('#classroom');room.hidden=false;dom.window.innerWidth=1280;
 const dispose=mountRoomPanels(room);
 try{room.querySelector('[data-room-panel="chat"]').click();room.querySelector('#chat-message').focus();assert.equal(room.classList.contains('chat-composing'),false);assert.equal(room.querySelector('#chat-done').hidden,true);assert.equal(room.querySelector('#videos').hidden,false);assert.equal(room.querySelector('#collaboration').parentNode,room.querySelector('#videos').parentNode);}
 finally{dispose();dom.window.close();}
});
