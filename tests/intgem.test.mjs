import test from 'node:test';
import assert from 'node:assert/strict';
import {uid} from './box-db-fixture.mjs';
import {freshSave} from '../integro-box/egg-src/egg-rules.js';
import {GAMES,ITEMS,PACKS} from '../integro-box/intgem-catalog.mjs';
import {createCheckout,verifyPayment,safeCheckout} from '../supabase/functions/intgem-pay/provider.mjs';
import {intgemDatabase as setup} from './intgem-db-fixture.mjs';
test('public visitors verify email, play and chat without receiving school roles; blocked and anonymous accounts fail',async()=>{
 const {db,call,pulse,run,rpc,access}=await setup();try{
  await assert.rejects(rpc(0));await assert.rejects(rpc(20));await assert.rejects(access(21),/email_confirmation_required/);
  assert.equal((await access(20,'Explorador novo')).family,false);assert.equal((await access(1)).family,true);
  assert.equal((await db.query('select count(*)::int n from public.profiles where id=$1',[uid(20)])).rows[0].n,0);
  const room=await call(20,'create',{p_game:'egg'});assert(room.id);await call(1,'join',{p_code:room.code});
  assert.match((await run(20,'select public.box_chat($1,null,null) r',[room.id])).code,/^J\d+$/);
  for(const game of GAMES)assert.equal((await pulse(20,100+GAMES.indexOf(game),game.id)).ok,true);
  assert.equal((await run(20,"select public.box_egg('capabilities') r")).worlds,20);
  await assert.rejects(run(20,"select public.box_usage_report(current_date,current_date) r"),/box_management_denied/);
  await assert.rejects(run(20,'select * from private.intgem_wallets'),/permission denied/);
  await assert.rejects(run(20,"select public.box_intgem_payment('settle',$1,'{}') r",[uid(999)]),/permission denied/);
  await db.query('update private.box_accounts set blocked=true where user_id=$1',[uid(20)]);await assert.rejects(rpc(20));await assert.rejects(access(20));
 }finally{await db.close();}
});
test('daily credits use server time, ignore hidden/offline intervals and cannot double through repeated pulses or purchases',async()=>{
 const {db,rpc,access,tick,order,pay}=await setup();try{
  await access(20);let r=await rpc(20,'pulse',{game:'lobby',active:true,visible:true,seconds:999999});assert.equal(r.balance,0);
  r=await tick(20,600);assert.equal(r.daily.seconds,0);r=await tick(20,30,'lobby',true,false);assert.equal(r.daily.seconds,0);
  await rpc(20,'pulse',{game:'lobby',active:true,visible:true});
  for(let i=0;i<9;i++)r=await tick(20,30,'lobby');assert.equal(r.balance,0);
  r=await tick(20,30,'lobby');assert.equal(r.balance,1);assert.equal(r.daily.rewarded,true);
  for(let i=0;i<12;i++)await rpc(20,'pulse',{game:'lobby',active:true,visible:true});assert.equal((await rpc(20)).balance,1);
  assert.equal((await rpc(20,'buy',{item:'egg_jade',price:0})).error,'price_changed');
  assert.equal((await rpc(20,'buy',{item:'egg_jade',price:4})).error,'insufficient_balance');
  const single=await order(20,'gem1',89);assert.equal(single.amount,100);assert.equal(single.gems,1);assert.equal((await pay('settle',single.id,{transaction_nsu:'old-price',invoice_slug:'abc',amount:99,capture_method:'credit_card'})).error,'payment_mismatch');
  const o=await order(20);assert.equal(o.amount,1099);assert.equal((await order(20)).error,'checkout_in_progress');
  assert.equal((await pay('settle',o.id,{transaction_nsu:'payment-20',invoice_slug:'abc',amount:1,capture_method:'credit_card'})).error,'payment_mismatch');
  const proof={transaction_nsu:'payment-20',invoice_slug:'abc',amount:1099,capture_method:'credit_card'};
  assert.equal((await pay('settle',o.id,proof)).paid,true);assert.equal((await pay('settle',o.id,proof)).duplicate,true);assert.equal((await rpc(20)).balance,21);
  const other=await order(1);assert.equal((await pay('settle',other.id,proof)).error,'transaction_reused');
  const bought=await rpc(20,'buy',{item:'egg_jade',price:4});assert.equal(bought.balance,17);assert(bought.owned.includes('egg_jade'));assert(bought.equipped.some(x=>x.item==='egg_jade'));
  assert.equal((await rpc(20,'buy',{item:'egg_jade',price:4})).balance,17);assert.equal((await rpc(20,'equip',{item:'egg_cosmos'})).error,'not_owned');
  assert.equal((await rpc(20,'unequip',{item:'egg_jade'})).equipped.length,0);
  assert.equal((await rpc(1)).balance,0);
  const balances=(await db.query('select w.balance,coalesce(sum(l.delta),0)::int total from private.intgem_wallets w left join private.intgem_ledger l on l.user_id=w.user_id group by w.user_id')).rows;assert(balances.every(x=>x.balance===x.total));
 }finally{await db.close();}
});
test('conversion quotes use real demand and reserves, debit the versioned cloud save once and require measured playtime',async()=>{
 const {db,rpc,access,run}=await setup();try{
  await access(20);const save=freshSave();save.coins=300000;
  const saved=await run(20,"select public.box_egg('save',0,$1) r",[save]);assert.equal(saved.revision,1);
  let q=(await rpc(20,'exchange_quote')).quote;assert.equal(q.rate,20000);assert.equal(q.remaining,50);
  assert.equal((await rpc(20,'exchange',{rate:q.rate,day:q.day,revision:1})).error,'exchange_time_required');
  await db.query('update private.intgem_days set egg_seconds=1200 where user_id=$1',[uid(20)]);
  assert.equal((await rpc(20,'exchange',{rate:1,day:q.day,revision:1})).error,'quote_changed');
  assert.equal((await rpc(20,'exchange',{rate:q.rate,day:q.day,revision:0})).error,'save_conflict');
  const converted=await rpc(20,'exchange',{rate:q.rate,day:q.day,revision:1});assert.equal(converted.balance,1);assert.equal(converted.save.coins,280000);assert.equal(converted.revision,2);
  assert.equal((await rpc(20,'exchange',{rate:q.rate,day:q.day,revision:2})).error,'daily_exchange_used');
  assert.equal((await run(20,"select public.box_egg('save',1,$1) r",[save])).error,'conflict');
  q=(await rpc(1,'exchange_quote')).quote;assert(q.rate>20000);assert.equal(q.remaining,49);
  await db.exec('update private.intgem_exchange_days set used=capacity');assert.equal((await rpc(1,'exchange',{rate:q.rate,day:q.day,revision:0})).error,'exchange_pool_empty');
 }finally{await db.close();}
});
test('catalog covers every game with permanent visible cosmetics above 3 gems and exact pack prices',()=>{
 assert.equal(GAMES.length,15);assert.equal(ITEMS.length,45);assert.equal(new Set(ITEMS.map(x=>x.id)).size,45);
 assert(ITEMS.every(x=>x.price>3));for(const g of GAMES)assert.equal(ITEMS.filter(x=>x.game===g.id).length,3);
 assert.deepEqual(PACKS.map(p=>[p.gems,p.cents]),[[1,100],[5,299],[10,699],[20,1099]]);
});
test('provider confirmation rejects forged redirects, amount mismatch and foreign checkout URLs; paid_amount may include fees',async()=>{
 let requests=[];const order={id:uid(90),gems:5,amount:299};
 const fetcher=async(url,opts)=>{requests.push([url,JSON.parse(opts.body)]);return {ok:true,json:async()=>url.endsWith('/links')?{url:'https://checkout.infinitepay.com.br/test'}:{success:true,paid:true,amount:299,paid_amount:309,capture_method:'credit_card'}};};
 assert.equal(await createCheckout(order,'https://example.test/webhook',{fetcher}),'https://checkout.infinitepay.com.br/test');assert.equal(requests[0][1].items[0].price,299);assert.equal(requests[0][1].handle,'instituto-integro');
 assert.equal((await verifyPayment(order,'tx','slug',{fetcher})).paid,true);assert.equal(requests[1][1].order_nsu,order.id);assert.equal(requests[1][1].handle,'instituto-integro');
 await assert.rejects(createCheckout({...order,amount:99},'https://example.test/webhook',{fetcher}),/checkout_below_minimum/);
 const answer=value=>({fetcher:async()=>({ok:true,json:async()=>value})});
 assert.equal((await verifyPayment(order,'tx','slug',answer({success:true,paid:false}))).paid,false);
 await assert.rejects(verifyPayment(order,'tx','slug',answer({success:true,paid:true,amount:99,capture_method:'credit_card'})),/payment_mismatch/);
 for(const url of ['javascript:alert(1)','https://checkout.infinitepay.com.br.evil.test/x','https://evil.test','http://checkout.infinitepay.com.br/x','https://user@checkout.infinitepay.com.br/x'])assert.equal(safeCheckout(url),null);
});
