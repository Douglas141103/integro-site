import {mountIntGemPromotion} from '../integro-box/intgem-promotion.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import * as catalog from '../integro-box/intgem-catalog.mjs';
import {eggItemArt} from '../integro-box/egg-intgem-catalog.mjs';
import * as THREE from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {createIntGem3D} from '../integro-box/intgem-3d.mjs';

test('wallet uses confirmed balances, buys with displayed server price, and mounts collection in all fifteen games',async()=>{
 const screens=[...new Set(catalog.GAMES.map(g=>g.screen))];
 const dom=new JSDOM('<header><div class="head"></div></header>'+screens.map(id=>`<section id="${id}" hidden></section>`).join(''),{url:'https://www.institutointegro.com.br/integro-box/jogar.html',runScripts:'outside-only',pretendToBeVisual:true});
 const w=dom.window;w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 let server={balance:8,daily:{seconds:45,rewarded:false},items:catalog.ITEMS,owned:[],equipped:[],history:[],orders:[]};const calls=[];
 const client={rpc:async(name,args)=>{calls.push({name,...args});if(args.p_action==='buy'){const item=catalog.ITEMS.find(i=>i.id===args.p_payload.item);server={...server,balance:server.balance-item.price,owned:[item.id],equipped:[{game:item.game,kind:item.kind,item:item.id}]};}return {data:structuredClone(server)};}};
 Object.assign(w,{mountIntGemPromotion,eggItemArt,GAMES:catalog.GAMES,ITEMS:catalog.ITEMS,PACKS:catalog.PACKS,gemArt:catalog.gemArt,money:catalog.money,activeGame:()=>catalog.activeGame(w.document,w),supabase:client});
 let source=await readFile(new URL('../integro-box/intgem.js',import.meta.url),'utf8');source=source.replace(/^import .*;\n/gm,'').replaceAll('export ','');
 w.eval(source+'\nwindow.startIntGem=startIntGem;');
 try{
  const api=await w.startIntGem({user:{id:'visitor'},client});await api.open();
  assert.equal(w.document.querySelectorAll('.ig-item').length,0);assert.equal(api.balance,8);assert(w.document.querySelector('[data-tab=collection]').hidden);assert(w.document.querySelector('[data-tab=exchange]').hidden);
  w.document.getElementById('eggApp').hidden=false;await api.open('collection','egg');assert.equal(w.document.querySelectorAll('.ig-item').length,41);assert.equal(w.document.querySelector('.ig-select'),null);
  w.document.querySelector('[data-buy="egg_jade"]').click();await new Promise(r=>setTimeout(r,0));
  assert.deepEqual(JSON.parse(JSON.stringify(calls.find(c=>c.p_action==='buy').p_payload)),{item:'egg_jade',price:4});assert.equal(api.balance,4);
  for(const game of catalog.GAMES){
   for(const id of screens)w.document.getElementById(id).hidden=true;w.document.getElementById(game.screen).hidden=false;w.BoxUsageGame=game.id;
   server={...server,equipped:[{game:game.id,kind:'aura',item:game.id+'_jade'},{game:game.id,kind:'companion',item:game.id+'_guardian'}]};await api.refresh();await api.open('collection',game.id);
   assert.equal(w.document.querySelectorAll('.ig-item').length,catalog.ITEMS.filter(i=>i.game===game.id).length);assert.equal(w.document.querySelector('[data-tab=exchange]').hidden,game.id!=='egg');
   assert.equal(w.document.querySelector('.ig-dock').parentElement.id,game.screen);assert.equal(w.document.querySelector('.ig-aura').parentElement.id,game.screen);assert(w.document.querySelector('.ig-companion svg'));
  }
  let fruitPaused=0;w.BoxFruitRuntime={playing:()=>true,pause:()=>fruitPaused++};await api.open('packs');assert.equal(fruitPaused,1);assert.equal(w.document.querySelectorAll('[data-pack]').length,4);assert.match(w.document.querySelector('.ig-packs').textContent,/1,00/);assert.equal(w.document.querySelector('[data-pack="gem1"]').disabled,false);assert.equal(w.document.querySelector('[data-pack="gem5"]').disabled,false);
  for(const id of screens)w.document.getElementById(id).hidden=true;await api.open('collection','egg');assert.equal(w.document.querySelectorAll('.ig-item').length,0);assert.equal(w.document.querySelectorAll('[data-pack]').length,4);
  api.stop();assert.equal(w.BoxIntGem,undefined);assert.equal(w.document.querySelector('.ig-dock'),null);assert.equal(w.document.querySelector('.ig-game-themed'),null);
  const standalone=w.document.createElement('main');w.document.body.append(standalone);let unsubscribed=false;client.auth={onAuthStateChange:()=>({data:{subscription:{unsubscribe(){unsubscribed=true;}}}})};
  const page=await w.startIntGem({user:{id:'visitor'},standalone,client});await page.open('collection','egg');assert.equal(standalone.querySelectorAll('.ig-item').length,0);assert(standalone.querySelector('[data-tab=collection]').hidden);assert(standalone.querySelector('[data-tab=exchange]').hidden);assert.equal(standalone.querySelectorAll('[data-pack]').length,4);await page.open('history');assert.match(standalone.textContent,/Seus pedidos recentes/);page.stop();assert(unsubscribed);
 }finally{w.BoxIntGem?.stop();w.close();}
});

test('native toon accessories toggle equipped slots, respect reduced motion and release owned geometry',()=>{
 const parent=new THREE.Group(),fx=createIntGem3D(THREE,parent);assert.equal(fx.root.visible,false);
 fx.update({aura:catalog.ITEMS.find(i=>i.id==='egg_jade'),companion:catalog.ITEMS.find(i=>i.id==='egg_guardian')},10,true);
 assert.equal(fx.root.visible,true);assert.equal(fx.root.children[0].position.y,1.25);
 let disposed=0;fx.root.traverse(o=>o.geometry?.addEventListener('dispose',()=>disposed++));
 fx.update({},11);assert.equal(fx.root.visible,false);fx.dispose();assert.equal(parent.children.length,0);assert(disposed>=8);
});

test('public registration sends only a nickname and routes confirmation to the Box',async()=>{
 const html=await readFile(new URL('../integro-box/entrar.html',import.meta.url),'utf8');
 const dom=new JSDOM(html,{url:'https://www.institutointegro.com.br/integro-box/entrar.html?cadastro=1',runScripts:'outside-only'});const w=dom.window;let signup;
 w.supabase={auth:{onAuthStateChange(){},getSession:async()=>({data:{session:null}}),signUp:async args=>{signup=args;return {data:{session:null}};}}};
 const source=(await readFile(new URL('../integro-box/entrar.js',import.meta.url),'utf8')).replace(/^import .*;\n/,'');
 try{
  await w.eval('(async()=>{'+source+'})()');w.document.getElementById('authName').value='Novo jogador';w.document.getElementById('authEmail').value='visitor@example.test';w.document.getElementById('authPassword').value='example-only-password';
  await w.document.getElementById('authForm').onsubmit({preventDefault(){}});
  assert.deepEqual(JSON.parse(JSON.stringify(signup.options.data)),{box_display_name:'Novo jogador'});assert.equal(signup.options.emailRedirectTo,'https://www.institutointegro.com.br/integro-box/entrar.html');assert.match(w.document.getElementById('authStatus').textContent,/confirmação/);
 }finally{w.close();}
});
