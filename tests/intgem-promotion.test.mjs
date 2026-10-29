import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
import {activePromotion,mountIntGemPromotion,remainingPromotion} from '../integro-box/intgem-promotion.mjs';
import {createCheckout} from '../supabase/functions/intgem-pay/provider.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261029012110_intgem_five_day_promotion.sql',import.meta.url),'utf8');
const campaign='intgem-surpresa-20261028';

test('five-day orders preserve price, grant the promised 100 once after verification, and stop automatically',async()=>{
 const {db,access,order,pay,rpc,run}=await intgemDatabase();
 try{
  await db.exec(migration);const first=(await db.query('select * from private.intgem_promotions')).rows[0];await db.exec(migration);
  assert.deepEqual((await db.query('select * from private.intgem_promotions')).rows[0],first);
  assert.equal(Date.parse(first.ends_at)-Date.parse(first.starts_at),120*3600000);
  await access(20);assert.equal((await rpc(20)).promotion.total,100);
  await db.exec("update private.intgem_promotions set starts_at=now()+interval '1 day',ends_at=now()+interval '6 days'");
  const old=await order(20,'gem20',90);assert.equal(old.gems,20);assert.equal(old.amount,1099);
  await db.exec("update private.intgem_promotions set starts_at=now()-interval '1 hour',ends_at=now()+interval '119 hours'");
  const promo=await order(20,'gem20',91);assert.equal(promo.gems,100);assert.equal(promo.amount,1099);assert.equal((await rpc(20)).balance,0);
  await pay('checkout',promo.id,{url:'https://checkout.infinitepay.com.br/promo'});
  const retry=await order(20,'gem20',91);assert.equal(retry.id,promo.id);assert.equal(retry.gems,100);
  assert.equal((await order(20,'gem10',92)).gems,10);
  const proof={transaction_nsu:'promo-test-payment',invoice_slug:'invoice',amount:1099,capture_method:'pix'};
  assert.equal((await pay('settle',promo.id,{...proof,amount:100})).error,'payment_mismatch');assert.equal((await rpc(20)).balance,0);
  await db.exec("update private.intgem_promotions set starts_at=now()-interval '121 hours',ends_at=now()-interval '1 hour'");
  assert.equal((await rpc(20)).promotion.active,false);
  assert.equal((await order(20,'gem20',93)).gems,20);
  assert.equal((await order(20,'gem20',91)).gems,100);
  assert.equal((await pay('settle',promo.id,proof)).gems,100);
  assert.equal((await pay('settle',promo.id,proof)).duplicate,true);
  assert.equal((await rpc(20)).balance,100);
  assert.equal((await rpc(20)).history.filter(h=>h.kind==='payment').length,1);
  assert.equal((await db.query('select promotion_id from private.intgem_orders where id=$1',[promo.id])).rows[0].promotion_id,campaign);
  assert.equal((await pay('settle',old.id,{...proof,transaction_nsu:'historical-payment'})).gems,20);
  await assert.rejects(run(20,'select * from private.intgem_promotions'),/permission denied/);
  await assert.rejects(run(20,'select private.intgem_promotion_state() r'),/permission denied/);
  await assert.rejects(order(0),/box_access_denied/);
  await assert.rejects(db.query("update private.intgem_orders set gems=100,promotion_id=null where id=$1",[old.id]),/intgem_orders_promotion_check/);
 }finally{await db.close();}
});

test('checkout describes all 100 gems while charging the original 20-gem price',async()=>{
 let request;
 await createCheckout({id:uid(900),gems:100,amount:1099},'https://example.test/webhook',{fetcher:async(url,options)=>{request=JSON.parse(options.body);return {ok:true,json:async()=>({url:'https://checkout.infinitepay.com.br/promotion'})};}});
 assert.equal(request.items[0].price,1099);assert.match(request.items[0].description,/100 IntGem/);
});

test('promotion reappears on entry, remains reachable after closing, and hides at expiry using server time',()=>{
 const dom=new JSDOM('<header></header>',{url:'https://example.test',pretendToBeVisual:true});const w=dom.window;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 const now=Date.now(),p={id:campaign,pack:'gem20',base:20,bonus:80,total:100,cents:1099,active:true,starts_at:new Date(now-1000).toISOString(),ends_at:new Date(now+120*3600000-1000).toISOString(),server_now:new Date(now).toISOString()};
 let opened=0,expired=0;const mount=()=>mountIntGemPromotion({doc:w.document,win:w,openWallet:()=>opened++,onExpire:()=>expired++});
 let api=mount();
 try{
  assert.equal(activePromotion(p,Date.parse(p.starts_at)-1),false);assert.equal(activePromotion(p,Date.parse(p.starts_at)),true);assert.equal(activePromotion(p,Date.parse(p.ends_at)),false);assert.equal(remainingPromotion(p.ends_at,Date.parse(p.ends_at)),'0d 00h 00m 00s');
  api.update(p);const modal=w.document.querySelector('dialog');assert(modal.open);assert.match(modal.textContent,/20 IntGem/);assert.match(modal.textContent,/\+80 de bônus/);assert.equal(modal.querySelector('.ig-promo-total strong').textContent,'100');
  modal.querySelector('.ig-promo-close').click();assert(!modal.open);api.update(p);assert(!modal.open);assert(!w.document.querySelector('.ig-promo-banner').hidden);
  w.document.querySelector('.ig-promo-launcher').click();assert(modal.open);modal.querySelector('.ig-promo-buy').click();assert.equal(opened,1);assert(!modal.open);
  api.stop();api=mount();api.update(p);assert(w.document.querySelector('dialog').open);
  api.update({...p,server_now:new Date(Date.parse(p.ends_at)+1).toISOString()});assert(!w.document.querySelector('dialog').open);assert(w.document.querySelector('.ig-promo-launcher').hidden);assert.equal(expired,1);assert.equal(api.getActive(),null);
 }finally{api.stop();w.close();}
});
