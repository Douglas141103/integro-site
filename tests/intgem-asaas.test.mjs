import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {setup} from './intgem-finance-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
import {createHandler} from '../supabase/functions/intgem-pay/handler.mjs';
import {checkoutBody,checkoutUrl,paymentProof,verifyAsaas,returnUrl} from '../supabase/functions/intgem-pay/asaas.mjs';
const promo=await readFile(new URL('../supabase/migrations/20261029012110_intgem_five_day_promotion.sql',import.meta.url),'utf8');
const sql=await readFile(new URL('../supabase/migrations/20261029014143_intgem_asaas_checkout.sql',import.meta.url),'utf8');

test('Asaas orders enforce minimum, preserve promo and legacy promises, recover once, and post one receipt',async()=>{
 const {db,order,pay,rpc,run}=await setup();
 try{
  const legacy=await order(20,'gem1',80);
  await db.exec(promo);await db.exec(sql);await db.exec(sql);
  for(const pack of ['gem1','gem5'])assert.equal((await order(20,pack,81)).error,'checkout_below_minimum');
  assert.equal((await db.query('select count(*)::int n from private.intgem_orders')).rows[0].n,1);
  assert.equal((await pay('inspect',legacy.id)).provider,'infinitepay');
  assert.equal((await pay('settle',legacy.id,{amount:100,capture_method:'pix',transaction_nsu:'legacy-transaction',invoice_slug:'legacy'})).gems,1);
  const o=await order(20,'gem20',82);assert.equal(o.provider,'asaas');assert.equal(o.gems,100);assert.equal(o.amount,1099);
  await db.query("update private.intgem_orders set attempt_at=now()-interval '2 minutes' where id=$1",[o.id]);
  assert.equal((await order(20,'gem20',82)).error,'checkout_in_progress'); // no blind POST retry after timeout
  assert.equal((await pay('checkout',o.id,{checkout_id:uid(91),url:'https://evil.test'})).error,'invalid_checkout_url');
  const bound=await pay('checkout',o.id,{checkout_id:uid(91),url:checkoutUrl(uid(91))});assert.equal(bound.status,'pending');
  assert.equal((await order(20,'gem20',82)).url,checkoutUrl(uid(91)));
  assert.equal((await pay('checkout',o.id,{checkout_id:uid(92),url:checkoutUrl(uid(92))})).error,'checkout_mismatch');
  const proof={amount:1099,capture_method:'credit_card',transaction_nsu:'asaas:pay_123456789',invoice_slug:uid(91)};
  assert.equal((await pay('settle',o.id,{...proof,invoice_slug:uid(92)})).error,'payment_mismatch');
  assert.equal((await pay('settle',o.id,{...proof,amount:100})).error,'payment_mismatch');
  await db.exec("update private.intgem_promotions set starts_at=now()-interval '121 hours',ends_at=now()-interval '1 hour'");
  assert.equal((await order(20,'gem20',83)).gems,20);
  await pay('expired',o.id);assert.equal((await order(20,'gem20',82)).error,'checkout_expired');
  assert.equal((await pay('settle',o.id,proof)).gems,100);assert.equal((await pay('settle',o.id,proof)).duplicate,true);
  assert.equal((await rpc(20)).balance,101);assert.equal((await rpc(20)).orders.find(x=>x.id===o.id).provider,'asaas');
  const receipt=(await db.query('select payer_name,amount_paid,description from public.finance_entries where intgem_order_id=$1',[o.id])).rows[0];
  assert.match(receipt.payer_name,/Asaas/);assert.match(receipt.description,/100 IntGem • Asaas/);assert.equal(Number(receipt.amount_paid),10.99);
  await pay('expired',o.id);assert.equal((await pay('inspect',o.id)).status,'paid');
  const retry=await order(20,'gem10',84);await pay('failed',retry.id);assert.equal((await order(20,'gem10',84)).create,true);
  await assert.rejects(run(20,'select public.box_intgem_payment($1,$2,$3) r',['settle',o.id,proof]),/permission denied/);
 }finally{await db.close();}
});

const baseOrder={id:uid(100),user_id:uid(20),provider:'asaas',amount:1099,gems:100,status:'pending',checkout_id:uid(101)};
const config={enabled:true,api_key:'test-key-with-at-least-twenty-characters',hook_token:'test-webhook-with-at-least-thirty-two-characters',account_id:uid(102)};
const payment={id:'pay_123456789',value:10.99,status:'RECEIVED',billingType:'PIX',checkoutSession:uid(101),externalReference:'intgem:'+uid(100)};
const checkout={id:uid(101),...checkoutBody(baseOrder)};
function harness({order={...baseOrder},response={data:[payment],hasMore:false},fail=null,who=uid(20)}={}){
 const calls=[],requests=[];let failed=false;
 const service=async(action,id,data={})=>{
  calls.push({action,id,data});
  if(action==='inspect'||action==='lookup_checkout')return {...order};
  if(action==='checkout'){order.checkout_id=data.checkout_id;order.url=data.url;order.status='pending';return {...order};}
  if(action==='settle'){order.status='paid';return {paid:true,gems:order.gems};}
  if(action==='failed')failed=true;
  return {ok:true};
 };
 const handler=createHandler({authenticate:async a=>a==='Bearer test'?{user:{id:who}}:null,createOrder:async()=>({...order}),service,credentials:async()=>config,fetcher:async(url,options)=>{requests.push({url,options});if(fail)throw fail;return new Response(JSON.stringify(url.endsWith('/checkouts')?{id:uid(101)}:response),{status:200});}});
 const send=async(body,{path='',auth=true,hookToken=config.hook_token}={})=>{const res=await handler(new Request('https://edge.test/intgem-pay'+path,{method:'POST',headers:{'Content-Type':'application/json',...(auth?{authorization:'Bearer test'}:{}),...(path==='/asaas-webhook'?{'asaas-access-token':hookToken}:{})},body:JSON.stringify(body)}));return {status:res.status,data:await res.json()};};
 return {send,calls,requests,order,get failed(){return failed;}};
}

test('Asaas checkout has pinned price, correct bonus, Pix/card and no subscription; callbacks do not assert payment',()=>{
 const body=checkoutBody(baseOrder);assert.deepEqual(body.chargeTypes,['DETACHED']);assert.deepEqual(body.billingTypes,['PIX','CREDIT_CARD']);assert.equal(body.items[0].value,10.99);assert.equal(body.items[0].name,'100 IntGem');assert.match(body.items[0].description,/80 de bônus/);assert.equal(body.callback.successUrl,returnUrl(baseOrder.id));assert.throws(()=>checkoutBody({...baseOrder,amount:299}),/below_minimum/);
});

test('verified provider payment must match amount, checkout, method and reference; pending/refunded/cash cannot credit',async()=>{
 assert.equal(paymentProof(baseOrder,payment).paid,true);
 assert.equal(paymentProof(baseOrder,{...payment,status:'CONFIRMED',billingType:'CREDIT_CARD'}).paid,true);
 for(const change of [{value:1},{checkoutSession:uid(103)},{externalReference:'intgem:'+uid(103)},{billingType:'BOLETO'}])assert.throws(()=>paymentProof(baseOrder,{...payment,...change}),/mismatch/);
 for(const status of ['PENDING','OVERDUE','RECEIVED_IN_CASH','REFUNDED','CONFIRMED'])assert.equal(paymentProof(baseOrder,{...payment,status}).paid,false);
 assert.equal(paymentProof(baseOrder,{...payment,refunds:[{}]}).paid,false);
 await assert.rejects(verifyAsaas(async()=>({data:[payment,payment]}),baseOrder),/mismatch/);
 await assert.rejects(verifyAsaas(async()=>({data:[payment],hasMore:true}),baseOrder),/unavailable/);
});

test('webhook authentication, account, ownership and amount are checked; only authenticated API data credits',async()=>{
 const event={event:'CHECKOUT_PAID',account:{id:config.account_id},checkout};
 let h=harness();assert.equal((await h.send(event,{path:'/asaas-webhook',auth:false,hookToken:'forged'})).status,401);assert.equal(h.calls.length,0);
 h=harness();assert.equal((await h.send({...event,account:{id:uid(103)}},{path:'/asaas-webhook'})).status,401);
 h=harness({who:uid(21)});assert.equal((await h.send({action:'verify',order:baseOrder.id})).status,404);assert.equal(h.requests.length,0);
 h=harness({response:{data:[{...payment,value:0.01}]}});assert.equal((await h.send(event,{path:'/asaas-webhook'})).status,503);assert(!h.calls.some(x=>x.action==='settle'));
 h=harness({response:{data:[{...payment,status:'PENDING'}]}});assert.equal((await h.send(event,{path:'/asaas-webhook'})).status,503);assert(!h.calls.some(x=>x.action==='settle'));
 h=harness();assert.equal((await h.send(event,{path:'/asaas-webhook'})).data.paid,true);assert.match(h.requests[0].url,/payments\?checkoutSession=/);assert.equal(h.calls.filter(x=>x.action==='settle').length,1);
 await h.send(event,{path:'/asaas-webhook'});assert.equal(h.calls.filter(x=>x.action==='settle').length,1);
});

test('creation recovers uncertain POST through CREATED; rejection alone allows retry; legacy endpoints cannot settle Asaas',async()=>{
 let h=harness({order:{...baseOrder,checkout_id:null,status:'creating'},fail:Error('timeout')});
 assert.equal((await h.send({action:'create',pack:'gem20',request:uid(104)})).data.error,'checkout_in_progress');assert.equal(h.failed,false);
 h=harness({order:{...baseOrder,checkout_id:null,status:'creating'},fail:Object.assign(Error('rejected'),{rejected:true})});
 assert.equal((await h.send({action:'create',pack:'gem20',request:uid(104)})).data.error,'checkout_unavailable');assert.equal(h.failed,true);
 h=harness({order:{...baseOrder,checkout_id:null,status:'creating'}});
 const event={event:'CHECKOUT_CREATED',account:{id:config.account_id},checkout};assert.equal((await h.send(event,{path:'/asaas-webhook'})).status,200);assert.equal(h.order.url,checkoutUrl(uid(101)));assert.equal(h.requests.length,0);
 h=harness();assert.equal((await h.send({order_nsu:baseOrder.id,transaction_nsu:'fake',invoice_slug:'fake'},{path:'/webhook',auth:false})).status,400);assert.equal(h.requests.length,0);
});

test('manual return and payment event use independent verification; legacy InfinitePay orders still verify',async()=>{
 let h=harness();assert.equal((await h.send({action:'verify',order:baseOrder.id})).data.paid,true);
 h=harness();assert.equal((await h.send({event:'PAYMENT_RECEIVED',account:{id:config.account_id},payment},{path:'/asaas-webhook'})).data.paid,true);
 h=harness({order:{...baseOrder,provider:'infinitepay'},response:{success:true,paid:true,amount:1099,capture_method:'pix'}});
 assert.equal((await h.send({order_nsu:baseOrder.id,transaction_nsu:'oldtx',invoice_slug:'oldslug'},{path:'/webhook',auth:false})).data.paid,true);assert.match(h.requests[0].url,/infinitepay.io\/payment_check$/);
});
