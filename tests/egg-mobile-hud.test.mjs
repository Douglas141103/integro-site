import test from 'node:test';import assert from 'node:assert/strict';import {JSDOM} from 'jsdom';import {mountEggHud} from '../integro-box/egg-hud.mjs';
test('mobile controls preserve handlers and return to their original parents on exit, rotation and stop',()=>{
 const dom=new JSDOM('<body><aside id="boxChat"><button>Chat</button></aside><aside id="boxOnline"></aside><section id="eggApp"><div id="eggStage"><div class="egg-ability-dock"></div><div class="egg-supplies"><button id="eggTrapOpen">Armadilhas</button></div></div><div class="ig-dock"></div></section></body>');
 const w=dom.window,d=w.document,media={matches:true,addEventListener(){},removeEventListener(){}};let sync,cleared=false,clicks=0;w.matchMedia=()=>media;w.setInterval=fn=>(sync=fn,1);w.clearInterval=()=>cleared=true;
 const chat=d.getElementById('boxChat');chat.querySelector('button').onclick=()=>clicks++;
 const hud=mountEggHud({doc:d,win:w});assert.equal(chat.parentNode,hud.host());assert(d.body.classList.contains('egg-mobile-layout'));chat.querySelector('button').click();assert.equal(clicks,1);
 assert.equal(d.getElementById('eggTrapOpen').parentNode.className,'egg-ability-dock');
 media.matches=false;sync();assert.equal(chat.parentNode,d.body);assert.equal(d.getElementById('eggTrapOpen').parentNode.className,'egg-supplies');assert.equal(hud.host(),null);
 media.matches=true;sync();d.body.append(chat);sync();assert.equal(chat.parentNode,hud.host());
 d.getElementById('eggApp').hidden=true;sync();assert.equal(chat.parentNode,d.body);assert(!d.body.classList.contains('egg-mobile-layout'));
 d.getElementById('eggApp').hidden=false;sync();hud.stop();assert(cleared);assert.equal(chat.parentNode,d.body);assert.equal(d.querySelectorAll('#boxChat').length,1);dom.window.close();
});
