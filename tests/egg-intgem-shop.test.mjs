import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import * as T from '../integro-box/egg-src/node_modules/three/build/three.module.js';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
import {NEW_EGG_ITEMS,CONVERTED_EGG_ITEMS,PREMIUM_BY_NATIVE,eggPremiumEquipment} from '../integro-box/egg-intgem-catalog.mjs';
import {ITEMS} from '../integro-box/intgem-catalog.mjs';
import {EggAdventure,freshSave} from '../integro-box/egg-src/egg-rules.js';
import {createIntGem3D} from '../integro-box/intgem-3d.mjs';
import {createEggGemShop} from '../integro-box/egg-src/egg-intgem-shop.js';
const migration=await readFile(new URL('../supabase/migrations/20261016190709_egg_intgem_shop.sql',import.meta.url),'utf8');

test('thirty new items and eight converted relics use server prices and preserve only pre-existing ownership',async()=>{
 const {db,access,rpc,run,order,pay}=await intgemDatabase();try{
  await access(20);const old=freshSave();old.accessories=['starBeacon','timeMask','clockworkCrown'];old.equipped={back:'starBeacon',head:'clockworkCrown',face:'timeMask'};old.coins=1500;
  await run(20,"select public.box_egg('save',0,$1) r",[old]);
  await db.exec(migration);let state=await rpc(20);
  assert.equal(NEW_EGG_ITEMS.length,30);assert.equal(CONVERTED_EGG_ITEMS.length,8);assert.equal(state.items.filter(i=>i.game==='egg').length,41);
  assert.equal(state.balance,0);assert.equal(state.owned.length,3);assert.equal(state.equipped.length,3);assert.equal(state.history.length,0);
  const late=freshSave();late.accessories=['starBeacon'];await run(1,"select public.box_egg('save',0,$1) r",[late]);await db.exec(migration);
  assert.equal((await rpc(1)).owned.length,0,'reapplying cannot grandfather new local claims');
  assert.equal((await rpc(20,'buy',{item:'egg_station_head',price:4})).error,'insufficient_balance');
  for(const n of[90,91]){const o=await order(20,'gem20',n);await pay('settle',o.id,{amount:o.amount,transaction_nsu:'fixture-'+n,invoice_slug:'fixture',capture_method:'pix'});}
  for(const item of ITEMS){const actual=state.items.find(i=>i.id===item.id);assert(actual,item.id);assert.equal(actual.price,item.price);assert.equal(actual.kind,item.kind);}
  for(const item of NEW_EGG_ITEMS.filter(i=>i.collection==='Estação Integro')){
   assert.equal((await rpc(20,'buy',{item:item.id,price:0})).error,'price_changed');
   state=await rpc(20,'buy',{item:item.id,price:item.price});const balance=state.balance;
   assert.equal((await rpc(20,'buy',{item:item.id,price:item.price})).balance,balance);
  }
  assert.equal(state.balance,14);assert.equal(state.equipped.filter(i=>i.game==='egg').length,5);
  assert.equal((await run(20,"select public.box_egg('load') r")).save.coins,1500);
  await rpc(20,'unequip',{item:'egg_station_head'});assert(!(await rpc(20)).equipped.some(i=>i.item==='egg_station_head'));
  assert.equal((await rpc(1,'equip',{item:'egg_station_head'})).error,'not_owned');
  await assert.rejects(run(20,'select * from private.intgem_items'),/permission denied/);
  assert.equal((await run(20,"select public.box_egg('capabilities') r")).accessories,82);
 }finally{await db.close();}
});

test('premium accessories cannot be bought with game coins or equipped from a forged legacy save',()=>{
 const save=freshSave();save.coins=1e9;save.accessories=Object.keys(PREMIUM_BY_NATIVE);save.equipped={head:'clockworkCrown',back:'starBeacon',face:'timeMask'};
 const game=new EggAdventure(save),coins=game.save.coins;
 for(const id of Object.keys(PREMIUM_BY_NATIVE)){assert.equal(game.buy(id),false);assert.equal(game.equip(id),false);}
 assert.equal(game.save.coins,coins);assert.deepEqual(eggPremiumEquipment(save.equipped,{}),{});
 const crown=NEW_EGG_ITEMS.find(i=>i.id==='egg_royal_head');assert.deepEqual(eggPremiumEquipment({face:'goggles'},{head:crown}),{face:'goggles',head:crown.nativeId});
 assert.equal(game.buy('headphones'),true);
});

test('each new companion and aura builds finite, distinct, bounded geometry and disposes its resources',()=>{
 const parent=new T.Group(),fx=createIntGem3D(T,parent),shapes=new Set();let disposed=0;
 for(const item of NEW_EGG_ITEMS.filter(i=>['companion','aura'].includes(i.kind))){
  fx.update({[item.kind]:item},12);fx.root.updateMatrixWorld(true);
  let meshes=0,vertices=0;const parts=[];
  fx.root.traverse(o=>{if(o.isMesh){meshes++;vertices+=o.geometry.attributes.position.count;parts.push(o.geometry.type+JSON.stringify([o.position.toArray(),o.scale.toArray(),o.rotation.toArray()]));assert([...o.geometry.attributes.position.array].every(Number.isFinite));o.geometry.addEventListener('dispose',()=>disposed++);}});
  assert(meshes>=5&&meshes<25);assert(vertices<3500);shapes.add(parts.join('|'));
  const box=new T.Box3().setFromObject(fx.root);assert(box.getSize(new T.Vector3()).length()<4);
  fx.update({[item.kind]:item},20,true);const first=fx.root.children.map(g=>g.rotation.toArray());fx.update({[item.kind]:item},99,true);assert.deepEqual(fx.root.children.map(g=>g.rotation.toArray()),first);
 }
 assert.equal(shapes.size,12);fx.dispose();assert.equal(parent.children.length,0);assert(disposed>70);
});

test('in-game shop confirms a debit once, equips owned items, handles insufficient/offline states and filters the catalog',async()=>{
 const dom=new JSDOM('<div class="egg-sheet-card"><div id="shop"></div></div>',{url:'https://example.test'}),w=dom.window,host=w.document.getElementById('shop');
 let balance=20,busyResolve,buyCalls=0,atBase=true,offline=false;
 const owned=new Set(),equipped=new Set();const items=ITEMS.filter(i=>i.game==='egg');
 const api={get balance(){return balance;},getCatalog:()=>items.map(i=>({...i,owned:owned.has(i.id),equipped:equipped.has(i.id)})),refresh:async()=>{if(offline)throw Error('Sem conexão');},
  purchase:async(id,price)=>{buyCalls++;await new Promise(r=>{busyResolve=r;});if(offline)throw Error('Sem conexão');balance-=price;owned.add(id);equipped.add(id);w.dispatchEvent(new w.Event('box-intgem-change'));},
  toggleEquipment:async id=>{if(equipped.has(id))equipped.delete(id);else equipped.add(id);w.dispatchEvent(new w.Event('box-intgem-change'));},open(){} };
 const shop=createEggGemShop({getAPI:()=>api,canBuy:()=>atBase,eventTarget:w});
 const wait=()=>new Promise(r=>setTimeout(r,0));
 try{
  shop.mount(host);assert.equal(host.querySelectorAll('.egg-gem-card').length,41);
  host.querySelector('[data-gem-filter="head"]').click();assert.equal(host.querySelectorAll('.egg-gem-card').length,8);
  host.querySelector('[data-gem-item="egg_station_head"]').click();assert.equal(buyCalls,0);assert(host.querySelector('[data-gem-confirm]'));
  host.querySelector('[data-gem-confirm]').click();host.querySelector('[data-gem-confirm]').click();assert.equal(buyCalls,1);
  busyResolve();await wait();assert.equal(balance,16);assert.match(host.querySelector('[role=status]').textContent,/Compra concluída/);
  host.querySelector('[data-gem-item="egg_station_head"]').click();await wait();assert(!equipped.has('egg_station_head'));assert.equal(balance,16);
  atBase=false;shop.refresh();assert(host.querySelector('[data-gem-item="egg_coral_head"]').disabled);
  atBase=true;balance=0;shop.refresh();assert(host.querySelector('[data-gem-item="egg_coral_head"]').disabled);assert(!host.querySelector('[data-gem-item="egg_station_head"]').disabled);
  offline=true;host.querySelector('[data-gem-refresh]').click();await wait();assert.match(host.querySelector('[role=status]').textContent,/Sem conexão/);assert.equal(balance,0);
  host.querySelector('[data-gem-filter="owned"]').click();assert.equal(host.querySelectorAll('.egg-gem-card').length,1);
 }finally{shop.dispose();w.close();}
});
