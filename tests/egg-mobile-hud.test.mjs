import test from 'node:test';import assert from 'node:assert/strict';import {JSDOM} from 'jsdom';import {mountEggHud} from '../integro-box/egg-hud.mjs';
test('mobile controls preserve handlers and stay draggable after rotation and return to their original parents on exit and stop',()=>{
 const dom=new JSDOM('<body><aside id="boxChat"><button>Chat</button></aside><aside id="boxOnline"></aside><section id="eggApp"><div id="eggStage"><div class="egg-ability-dock"></div><div class="egg-supplies"><button id="eggTrapOpen">Armadilhas</button></div></div><div class="ig-dock"></div></section></body>');
 const w=dom.window,d=w.document,media={matches:true,addEventListener(){},removeEventListener(){}};let sync,cleared=false,clicks=0;w.matchMedia=()=>media;w.setInterval=fn=>(sync=fn,1);w.clearInterval=()=>cleared=true;
 const chat=d.getElementById('boxChat');chat.querySelector('button').onclick=()=>clicks++;
 const hud=mountEggHud({doc:d,win:w});assert.equal(chat.parentNode,hud.host());assert(d.body.classList.contains('egg-mobile-layout'));chat.querySelector('button').click();assert.equal(clicks,1);
 assert.equal(d.getElementById('eggTrapOpen').parentNode.className,'egg-ability-dock');
 media.matches=false;sync();assert.equal(chat.parentNode,hud.host());assert.equal(d.getElementById('eggTrapOpen').parentNode.className,'egg-supplies');assert(hud.host());
 media.matches=true;sync();d.body.append(chat);sync();assert.equal(chat.parentNode,hud.host());
 d.getElementById('eggApp').hidden=true;sync();assert.equal(chat.parentNode,d.body);assert(!d.body.classList.contains('egg-mobile-layout'));
 d.getElementById('eggApp').hidden=false;sync();hud.stop();assert(cleared);assert.equal(chat.parentNode,d.body);assert.equal(d.querySelectorAll('#boxChat').length,1);dom.window.close();
});

test('all three launchers drag independently, stay in bounds, retain taps and remember positions',()=>{
 const dom=new JSDOM('<body><section id="eggApp"><div id="eggStage"></div><div class="ig-dock"><button class="ig-wallet-button">46</button></div></section><aside id="boxOnline"><button id="boxOnlineToggle">Sala</button></aside><aside id="boxChat"><button id="boxChatToggle">Chat</button><section id="boxChatPanel" hidden></section></aside></body>',{url:'https://test.example',pretendToBeVisual:true});
 const w=dom.window,d=w.document,media={matches:true,addEventListener(){},removeEventListener(){}};let sync,stageWidth=360,stageHeight=600;
 w.matchMedia=()=>media;w.setInterval=fn=>(sync=fn,1);w.clearInterval=()=>{};
 const rect=(x,y,width,height)=>({left:x,top:y,right:x+width,bottom:y+height,width,height});
 d.getElementById('eggStage').getBoundingClientRect=()=>rect(10,100,stageWidth,stageHeight);
 const roots=[d.querySelector('.ig-dock'),d.getElementById('boxOnline'),d.getElementById('boxChat')];let taps=0,legacyDrags=0;
 for(const root of roots){root.getBoundingClientRect=()=>rect(10+parseFloat(root.style.getPropertyValue('--egg-tool-x')||0),100+parseFloat(root.style.getPropertyValue('--egg-tool-y')||0),70,44);const button=root.querySelector('button');button.getBoundingClientRect=root.getBoundingClientRect;button.onclick=()=>taps++;button.addEventListener('pointerdown',()=>legacyDrags++);}
 const pointer=(target,type,x,y,id=1)=>{const e=new w.MouseEvent(type,{bubbles:true,cancelable:true,button:0,clientX:x,clientY:y});Object.defineProperty(e,'pointerId',{value:id});target.dispatchEvent(e);};
 let hud=mountEggHud({doc:d,win:w});
 for(const [i,root]of roots.entries()){
  const b=root.querySelector('button'),before=roots.filter(r=>r!==root).map(r=>r.style.cssText),r=root.getBoundingClientRect();pointer(b,'pointerdown',r.left+5,r.top+5);pointer(w,'pointermove',r.left+25,r.top+65);pointer(w,'pointerup',r.left+25,r.top+65);b.click();assert.equal(taps,i);assert.deepEqual(roots.filter(r=>r!==root).map(r=>r.style.cssText),before);
  pointer(b,'pointerdown',50,50);pointer(w,'pointerup',50,50);b.click();assert.equal(taps,i+1);
 }
 assert.equal(legacyDrags,0);assert.deepEqual(Object.keys(JSON.parse(w.localStorage.getItem('integro-egg-hud-positions-v1'))).sort(),['chat','gems','rooms']);
 const chat=roots[2],b=chat.querySelector('button');pointer(b,'pointerdown',50,50);pointer(w,'pointermove',5000,5000);pointer(w,'pointerup',5000,5000);assert.equal(parseFloat(chat.style.getPropertyValue('--egg-tool-x')),282);assert.equal(parseFloat(chat.style.getPropertyValue('--egg-tool-y')),548);
 stageWidth=280;stageHeight=400;w.dispatchEvent(new w.Event('resize'));assert(parseFloat(chat.style.getPropertyValue('--egg-tool-x'))<=202);assert(parseFloat(chat.style.getPropertyValue('--egg-tool-y'))<=348);
 const panel=d.getElementById('boxChatPanel');panel.getBoundingClientRect=()=>rect(0,0,240,200);panel.hidden=false;sync();const x=parseFloat(chat.style.getPropertyValue('--egg-tool-x'))+parseFloat(chat.style.getPropertyValue('--egg-panel-x')),y=parseFloat(chat.style.getPropertyValue('--egg-tool-y'))+parseFloat(chat.style.getPropertyValue('--egg-panel-y'));assert(x>=8&&x+240<=272);assert(y>=8&&y+200<=392);
 const saved=chat.style.getPropertyValue('--egg-tool-y');hud.stop();hud=mountEggHud({doc:d,win:w});assert.equal(chat.style.getPropertyValue('--egg-tool-y'),saved);
 pointer(b,'pointerdown',30,30);pointer(w,'pointercancel',30,30);assert.equal(chat.dataset.eggDragging,undefined);hud.stop();dom.window.close();
});
