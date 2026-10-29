import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {id,sample,setup,hookToken} from './fixtures/finance-asaas-db.mjs';
import {saleForPix,today} from '../supabase/functions/finance-asaas/contract.mjs';
import {createHandler} from '../supabase/functions/finance-asaas/handler.mjs';
import {createStaticPix,verifyStaticPayment} from '../supabase/functions/finance-asaas/static-pix.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261029024558_finance_pos_inline_pix_no_fee.sql',import.meta.url),'utf8');
const qrId='302699020000TESTINGASA',qr={id:qrId,payload:'000201-test-only',encodedImage:'iVBORw0KGgoAAA=',allowsMultiplePayments:false};
const oneReal=()=>{const s=sample();s.items=[{type:'material',qty:1,grossUnit:1,discountUnit:0,finalUnit:1,desc:'Material'}];return s;};
async function current(){const x=await setup();await x.db.exec(migration);await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});x.create=(n=30,sale=saleForPix(sample()))=>x.rpc('create',{user_id:id(1),request_id:id(n),sale,due_date:today(),payment_flow:'static_pix'});return x;}
const bindQr=(x,o,suffix='')=>x.rpc('pix',{id:o.id,qr_id:qrId+suffix,payload:qr.payload,encodedImage:qr.encodedImage,expires_at:new Date(Date.now()+1800000).toISOString()});
const received=o=>({id:'pay_static001',pixQrCodeId:o.pix_qr_id,billingType:'PIX',value:o.amount/100,status:'RECEIVED',paymentDate:today()});
test('static QR fixes the exact R$1 sale, single use, expiry and reference without creating a customer',async()=>{
 const calls=[],o={id:id(40),amount:100};
 const result=await createStaticPix(async(path,method='GET',body)=>{calls.push({path,method,body});return method==='GET'?{data:[{key:'test-key',type:'EVP',status:'ACTIVE'}]}:{...qr,externalReference:body.externalReference};},o);
 assert.equal(calls.length,2);assert.equal(calls[1].path,'/pix/qrCodes/static');assert.equal(calls[1].body.value,1);assert.equal(calls[1].body.allowsMultiplePayments,false);assert.equal(calls[1].body.expirationSeconds,1800);assert.equal(calls[1].body.externalReference,'integro:'+o.id);assert.equal(result.payload,qr.payload);
 const order={...o,pix_qr_id:qrId},p=received(order);
 assert.equal(verifyStaticPayment(order,p).status,'paid');
 for(const bad of [{value:1.01},{pixQrCodeId:qrId+'x'},{billingType:'CREDIT_CARD'},{externalReference:'integro:'+id(41)},{id:'invalid'},{paymentDate:'bad'},{refunds:[{}]}])assert.throws(()=>verifyStaticPayment(order,{...p,...bad}));
 assert.equal(verifyStaticPayment(order,{...p,status:'CONFIRMED'}).status,'pending');
 assert.equal(verifyStaticPayment(order,{...p,status:'REFUNDED'}).status,'refunded');
});
test('HTTP create returns stored QR without charge ID; authenticated webhook independently verifies and posts exactly once with no fee',async()=>{
 const x=await current();try{
  let posts=0,payment=null,body;
  const fetcher=async(url,opts)=>{const path=new URL(url).pathname;let data;
   if(path==='/v3/pix/addressKeys')data={data:[{key:'test-key',type:'EVP',status:'ACTIVE'}]};
   else if(path==='/v3/pix/qrCodes/static'){posts++;body=JSON.parse(opts.body);data={...qr,externalReference:body.externalReference};}
   else if(path==='/v3/payments'){assert.equal(opts.method,'GET');assert.equal(new URL(url).searchParams.get('pixQrCodeId'),qrId);data={data:payment?[payment]:[],hasMore:false};}
   else assert.fail('Unexpected API call: '+path);
   return {ok:true,json:async()=>data};
  };
  const handler=createHandler({rpc:x.rpc,getUser:async()=>({id:id(1)}),baseUrl:'https://project.supabase.co',fetcher});
  const invoke=(b,path='',headers={})=>handler(new Request('https://project.supabase.co/functions/v1/finance-asaas'+path,{method:'POST',headers:{authorization:'Bearer valid',...headers},body:JSON.stringify(b)}));
  const request={action:'create',request_id:id(60),...oneReal()};
  const first=await invoke(request);assert.equal(first.status,200);const o=await first.json();assert.equal(o.amount,100);assert.equal(o.pix_available,true);assert.equal(o.payment_id,null);assert.equal(o.status,'pending');
  assert.equal((await invoke(request)).status,200);assert.equal(posts,1);
  const displayed=await (await invoke({action:'qr',id:o.id})).json();assert.equal(displayed.qr.payload,qr.payload);assert.equal(displayed.qr.encodedImage,qr.encodedImage);
  const event={event:'PAYMENT_RECEIVED',account:{id:id(90)},payment:{id:'pay_static001',pixQrCodeId:qrId,status:'RECEIVED'}};
  const webhook=()=>invoke(event,'/webhook/'+id(10),{'asaas-access-token':hookToken});
  assert.equal((await invoke(event,'/webhook/'+id(10))).status,401);
  assert.equal((await webhook()).status,503);assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,0);
  payment=received({...o,pix_qr_id:qrId});payment.value=2;assert.equal((await webhook()).status,503);assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,0);
  payment.value=1;assert.equal((await webhook()).status,200);assert.equal((await webhook()).status,200);
  const rows=(await x.db.query('select amount_paid from finance_entries')).rows;assert.equal(rows.length,1);assert.equal(Number(rows[0].amount_paid),1);assert.equal((await x.db.query('select count(*)::int n from finance_expenses')).rows[0].n,0);
  assert.equal((await x.rpc('get',{user_id:id(1),id:o.id})).status,'paid');
  payment.status='REFUNDED';event.event='PAYMENT_REFUNDED';await webhook();assert.equal((await x.rpc('get',{user_id:id(1),id:o.id})).status,'refunded');assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,1);
 }finally{await x.db.close();}
});
test('lost QR creation response is never blindly repeated; expiry and QR access remain school scoped',async()=>{
 const x=await current();try{
  let posts=0;
  const handler=createHandler({rpc:x.rpc,getUser:async()=>({id:id(1)}),baseUrl:'https://project.supabase.co',fetcher:async(url,opts)=>{
   if(opts.method==='POST'){posts++;throw Error('response lost');}return {ok:true,json:async()=>({data:[{key:'key',status:'ACTIVE'}]})};
  }});
  const invoke=b=>handler(new Request('https://project.supabase.co/functions/v1/finance-asaas',{method:'POST',headers:{authorization:'Bearer valid'},body:JSON.stringify(b)}));
  const body={action:'create',request_id:id(70),...oneReal()};assert.equal((await invoke(body)).status,503);const o=await (await invoke(body)).json();assert.equal(posts,1);assert.equal(o.status,'uncertain');
  await assert.rejects(x.rpc('get',{user_id:id(2),id:o.id}),/unidade|encontrada/);
  assert.equal(await x.rpc('lookup_pix',{qr_id:qrId,school_id:id(11)}),null);
  await x.db.query("update private.finance_asaas_orders set created_at=now()-interval '33 minutes' where id=$1",[o.id]);
  assert.equal((await (await invoke({action:'check',id:o.id})).json()).status,'expired');assert.equal(posts,1);
  const fresh=await x.create(71,saleForPix(oneReal()));await bindQr(x,fresh);
  await assert.rejects(bindQr(x,fresh,'x'),/vinculado/);
  const another=await x.create(72,saleForPix(oneReal()));await assert.rejects(bindQr(x,another),/unique/);
  assert.equal((await x.rpc('get',{user_id:id(1),id:fresh.id})).pix_qr_id,qrId);
 }finally{await x.db.close();}
});
test('migration removes and audits the old automatic fee, preserves receipt, and posts late legacy payments without a fee',async()=>{
 const x=await setup();try{
  await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});const o=await x.bind(await x.create(90));await x.settle(o);
  const receipt=(await x.db.query('select * from finance_entries')).rows[0];const expense=(await x.db.query('select * from finance_expenses')).rows[0];
  const legacy=await x.bind(await x.create(91),'legacy002');
  await x.db.exec(migration);assert.equal((await x.db.query('select count(*)::int n from finance_expenses')).rows[0].n,0);
  const archived=await x.rpc('inspect',{id:o.id});assert.equal(archived.removed_fee.expense.id,expense.id);assert.equal(archived.payment_flow,'dynamic');
  assert.deepEqual((await x.db.query('select * from finance_entries')).rows[0],receipt);
  await x.settle(legacy);await x.settle(legacy);await x.db.query('select private.finance_asaas_record_fee($1)',[o.id]);
  assert.equal((await x.db.query('select count(*)::int n from finance_expenses')).rows[0].n,0);assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,2);
  await assert.rejects(x.db.exec('delete from finance_entries'),/preservado/);
 }finally{await x.db.close();}
});
test('late verified Pix settles an expired order; a closed cycle waits for reconciliation and never creates a fee',async()=>{
 const x=await current();try{
  let o=await bindQr(x,await x.create(95,saleForPix(oneReal())));
  await x.db.query("update private.finance_asaas_orders set pix_expires_at=now()-interval '2 minutes' where id=$1",[o.id]);
  assert.equal((await x.rpc('expire',{id:o.id})).status,'expired');
  o=await x.rpc('bind',{id:o.id,payment_id:'pay_static001'});
  await x.db.exec("update finance_cash_cycles set status='fechado'");
  const proof=verifyStaticPayment(o,received(o));const blocked=await x.rpc('sync',{id:o.id,...proof});assert.equal(blocked.status,'paid');assert.equal(blocked.posted_at,null);
  assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,0);
  await x.db.exec("update finance_cash_cycles set status='aberto';select private.finance_asaas_retry();select private.finance_asaas_retry();");
  assert.equal((await x.db.query('select count(*)::int n from finance_entries')).rows[0].n,1);assert.equal((await x.db.query('select count(*)::int n from finance_expenses')).rows[0].n,0);
 }finally{await x.db.close();}
});
