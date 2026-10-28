import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {saleForPix,today,provider,AsaasError,accountForKey,verifyPayment,pixData} from '../supabase/functions/finance-asaas/contract.mjs';
import {createHandler} from '../supabase/functions/finance-asaas/handler.mjs';
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const sample=()=>({customer:{studentId:id(3),studentName:'Aluno',payerName:'Responsável',payerDocument:'24971563792',phone:'',email:''},items:[{type:'material',qty:2,grossUnit:15,discountUnit:5,finalUnit:10,desc:'Apostila'}],note:'Teste'});
const migration=await readFile(new URL('../supabase/migrations/20261027231540_finance_asaas_pix.sql',import.meta.url),'utf8');
const apiKey='test-only-key-never-a-real-credential',hookToken='hook-test-'.padEnd(64,'h');
async function setup(){
 const db=new PGlite();await db.exec(`create role anon;create role authenticated;create role service_role;create schema auth;create schema private;create schema cron;create schema vault;
 create function auth.role() returns text language sql as $$select current_setting('request.jwt.claim.role',true)$$;
 create table auth.users(id uuid primary key);insert into auth.users values('${id(1)}'),('${id(2)}'),('${id(5)}');
 create table public.schools(id uuid primary key,slug text);insert into public.schools values('${id(10)}','instituto-integro'),('${id(11)}','outra');
 create table public.profiles(id uuid primary key,school_id uuid,role text,active boolean);insert into public.profiles values('${id(1)}','${id(10)}','diretor',true),('${id(2)}','${id(11)}','diretor',true),('${id(5)}','${id(10)}','coordenacao',true);
 create table public.students(id uuid primary key,school_id uuid);insert into public.students values('${id(3)}','${id(10)}'),('${id(4)}','${id(11)}');
 create table public.finance_packages(id uuid primary key,school_id uuid);create table public.finance_discounts(id uuid primary key,school_id uuid);
 create table public.finance_cash_cycles(id uuid primary key,school_id uuid,start_date date,end_date date,cycle_key text,status text);
 insert into public.finance_cash_cycles values('${id(20)}','${id(10)}',date_trunc('month',now())::date,(date_trunc('month',now())+interval '1 month - 1 day')::date,to_char(now(),'YYYY-MM'),'aberto');
 create function private.assert_finance_cycle_writable(uuid,uuid,date,boolean) returns void language plpgsql as $$begin if not exists(select 1 from public.finance_cash_cycles where school_id=$1 and id=$2 and status='aberto' and $3 between start_date and end_date) then raise exception 'closed_cycle';end if;end$$;
 create table public.finance_entries(id uuid primary key default gen_random_uuid(),receipt_number bigint generated always as identity,school_id uuid,cash_cycle_id uuid,student_id uuid,student_name_snapshot text,payer_name text,payer_document text,package_id uuid,package_name_snapshot text,discount_id uuid,discount_name_snapshot text,gross_amount numeric,discount_amount numeric,amount_paid numeric,payment_method text,competence_month text,description text,entry_type text,entry_date date,created_by uuid);
 create function cron.schedule(text,text,text) returns bigint language sql as $$select 1::bigint$$;
 -- In-memory Vault double only. Production uses the installed encrypted Vault extension.
 create table vault.secrets(id uuid primary key default gen_random_uuid(),value text,name text unique);
 create view vault.decrypted_secrets as select id,value decrypted_secret from vault.secrets;
 create function vault.create_secret(v text,n text) returns uuid language plpgsql as $$declare result uuid;begin insert into vault.secrets(value,name) values(v,n) returning id into result;return result;end$$;
 create function vault.update_secret(i uuid,v text) returns void language sql as $$update vault.secrets set value=v where id=i$$;`);
 await db.exec(migration);
 await db.exec(await readFile(new URL('../supabase/migrations/20261027235725_finance_asaas_creation_errors.sql',import.meta.url),'utf8'));
 const rpc=(action,data={})=>db.transaction(async tx=>{await tx.exec("set local role service_role;set local request.jwt.claim.role='service_role';");return (await tx.query('select public.finance_asaas_service($1,$2) r',[action,data])).rows[0].r;});
 const connect=async(account_id=id(90))=>{const {lease}=await rpc('connect_lock',{user_id:id(1)});try{return await rpc('connect_save',{user_id:id(1),lease,api_key:apiKey,hook_token:hookToken,account_id,account_name:'Conta de teste',document_masked:'•••3792',webhook_id:'hook_test001'});}finally{await rpc('connect_unlock',{user_id:id(1),lease});}};
 const create=(n=30,sale=saleForPix(sample()),user_id=id(1))=>rpc('create',{user_id,request_id:id(n),sale,due_date:today()});
 const bind=async(o,suffix='001')=>{await rpc('customer',{id:o.id,customer_id:'cus_test'+suffix});return rpc('bind',{id:o.id,payment_id:'pay_test'+suffix});};
 const settle=o=>rpc('sync',{id:o.id,payment_id:o.payment_id,amount:o.amount,status:'paid',payment_date:today()});
 return {db,rpc,connect,create,bind,settle};
}
test('provider validates exact payment identity, amount, method and received date; rejects unsafe QR',async()=>{
 const order={id:id(40),amount:2000,payment_id:'pay_test001',customer_id:'cus_test001'};
 const p={id:order.payment_id,customer:order.customer_id,billingType:'PIX',value:20,externalReference:'integro:'+order.id,status:'RECEIVED',paymentDate:today()};
 assert.equal(verifyPayment(order,p).status,'paid');assert.equal(verifyPayment(order,{...p,status:'PENDING'}).status,'pending');
 for(const [key,value] of Object.entries({id:'pay_wrong01',customer:'cus_wrong01',billingType:'CREDIT_CARD',value:20.001,externalReference:'wrong',paymentDate:'bad'}))assert.throws(()=>verifyPayment(order,{...p,[key]:value}));
 assert.throws(()=>verifyPayment(order,{...p,refunds:[{}]}));
 assert.throws(()=>pixData({payload:'https://example.test',encodedImage:'svg'}));
 let captured;const call=provider(apiKey,{fetcher:async(url,options)=>{captured={url,options};return {ok:true,json:async()=>({ok:true})};}});
 await call('/payments/pay_test001');assert.equal(captured.options.body,undefined);assert.equal(captured.options.headers.access_token,apiKey);assert.equal(captured.options.redirect,'error');
 await assert.rejects(call('//evil.test'));await assert.rejects(accountForKey(async()=>({general:'PENDING',id:id(90)})),/aprovação/);
});
test('provider errors expose only safe explanations and numeric minimums',async()=>{
 const error=new AsaasError(400,{errors:[{code:'invalid_value',description:'O valor mínimo da cobrança é R$ 5,00. segredo-nao-expor'}]});
 assert.match(error.message,/R\$\s*5,00/);assert.equal(error.rejected,true);assert.equal(error.message.includes('segredo'),false);
 const call=provider(apiKey,{fetcher:async()=>({ok:false,status:400,json:async()=>({errors:[{code:'invalid_value',description:'valor inválido '+apiKey}]})})});
 await assert.rejects(call('/payments','POST',{}),e=>e instanceof AsaasError&&e.rejected&&e.message.includes('valor mínimo')&&!e.message.includes(apiKey));
 assert.equal(new AsaasError(500).rejected,false);assert.equal(new AsaasError(429).rejected,false);
 assert.equal(new AsaasError(400,{errors:[{code:'unknown',description:apiKey}]}).message.includes(apiKey),false);
});
test('a refused payment is stored with its safe reason, never retried under the same request, and never posted',async()=>{
 const x=await setup();try{
  await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});let posts=0;
  const fetcher=async(url,opts)=>{
   if(url.includes('/customers')&&opts.method==='GET')return {ok:true,json:async()=>({data:[]})};
   if(url.includes('/customers'))return {ok:true,json:async()=>({id:'cus_test001'})};
   posts++;return {ok:false,status:400,json:async()=>({errors:[{code:'invalid_value',description:'O valor mínimo é R$ 5,00.'}]})};
  };
  const handler=createHandler({rpc:x.rpc,getUser:async()=>({id:id(1)}),baseUrl:'https://project.supabase.co',fetcher});
  const invoke=b=>handler(new Request('https://project.supabase.co/functions/v1/finance-asaas',{method:'POST',headers:{authorization:'Bearer valid'},body:JSON.stringify(b)}));
  const b={action:'create',request_id:id(60),...sample()},first=await invoke(b);assert.equal(first.status,400);
  const data=await first.json();assert.match(data.error,/5,00/);
  const list=await x.rpc('list',{user_id:id(1)});assert.equal(list.orders[0].status,'rejected');assert.match(list.orders[0].creation_error,/5,00/);
  assert.equal((await invoke(b)).status,400);assert.equal(posts,1);
  assert.equal((await x.db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
 }finally{await x.db.close();}
});
test('checking an uncertain attempt reports absence only after a valid provider response, without creating a payment',async()=>{
 const x=await setup();try{
  await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});const o=await x.create();await x.rpc('uncertain',{id:o.id});
  let gets=0;
  const handler=createHandler({rpc:x.rpc,getUser:async()=>({id:id(1)}),baseUrl:'https://project.supabase.co',fetcher:async(url,opts)=>{assert.equal(opts.method,'GET');gets++;return {ok:true,json:async()=>({data:[],hasMore:false})};}});
  const response=await handler(new Request('https://project.supabase.co/functions/v1/finance-asaas',{method:'POST',headers:{authorization:'Bearer valid'},body:JSON.stringify({action:'check',id:o.id})}));
  const result=await response.json();assert.equal(result.not_found,true);assert.equal(result.status,'uncertain');assert.equal(gets,1);
 }finally{await x.db.close();}
});
test('database isolates schools and credentials; receipts are atomic, immutable and idempotent after disable',async()=>{
 const x=await setup();try{
  await assert.rejects(x.db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select public.finance_asaas_service('credentials','{}')");}),/permission denied/);
  await assert.rejects(x.rpc('connect_lock',{user_id:id(5)}),/direção/);
  await assert.rejects(x.create(),/desativado/);await x.connect();
  const list=await x.rpc('list',{user_id:id(1)});assert.equal(JSON.stringify(list).includes(apiKey),false);assert.equal(list.enabled,false);
  await assert.rejects(x.connect(id(91)),/mesma conta/);await x.rpc('settings',{user_id:id(1),enabled:true});
  await assert.rejects(x.create(32,saleForPix(sample()),id(2)),/unidade/);
  const cross=sample();cross.customer.studentId=id(4);await assert.rejects(x.create(32,saleForPix(cross)),/outra unidade/);
  let o=await x.create();assert.equal((await x.create()).created,false);o=await x.bind(o);
  await x.rpc('settings',{user_id:id(1),enabled:false});await assert.rejects(x.create(31),/desativado/);
  assert.ok((await x.settle(o)).posted_at);await x.settle(o);
  const entries=(await x.db.query('select * from public.finance_entries')).rows;assert.equal(entries.length,1);assert.equal(Number(entries[0].amount_paid),20);assert.equal(entries[0].payment_method,'Pix');
  await assert.rejects(x.db.exec('delete from public.finance_entries'),/preservado/);
  await x.rpc('sync',{id:o.id,payment_id:o.payment_id,amount:o.amount,status:'refunded'});
  const refunded=await x.rpc('inspect',{id:o.id});assert.equal(refunded.status,'refunded');assert.ok(refunded.post_error);
 }finally{await x.db.close();}
});
test('closed cycle cannot receive partial entries; retries post using actual payment date; duplicate payment ID blocked',async()=>{
 const x=await setup();try{
  await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});const s=sample();s.items.push({...s.items[0],desc:'Segundo'});
  const o=await x.bind(await x.create(30,saleForPix(s)));await x.db.exec("update public.finance_cash_cycles set status='fechado'");
  assert.equal((await x.settle(o)).posted_at,null);assert.equal((await x.db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
  await x.db.exec("update public.finance_cash_cycles set status='aberto'");await x.db.exec('select private.finance_asaas_retry()');
  assert.equal((await x.db.query('select count(*)::int n from public.finance_entries')).rows[0].n,2);
  const second=await x.create(31);await assert.rejects(x.bind(second),/unique/);
  await assert.rejects(x.rpc('get',{user_id:id(2),id:o.id}),/unidade/);
 }finally{await x.db.close();}
});
test('HTTP flow recovers a lost creation response without duplicate POST; webhook never trusts its paid flag',async()=>{
 const x=await setup();try{
  await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});let payment,posts=0,fail=true,paid=false;
  const fetcher=async(url,opts)=>{
   const path=new URL(url).pathname;
   if(path==='/v3/customers'&&opts.method==='GET')return {ok:true,json:async()=>({data:[]})};
   if(path==='/v3/customers'&&opts.method==='POST'){assert.equal(JSON.parse(opts.body).notificationDisabled,true);return {ok:true,json:async()=>({id:'cus_test001'})};}
   if(path==='/v3/payments'&&opts.method==='POST'){posts++;payment={...JSON.parse(opts.body),id:'pay_test001',status:'PENDING'};if(fail)throw Error('connection lost after creation');}
   const current={...payment,status:paid?'RECEIVED':'PENDING',paymentDate:today()};
   return {ok:true,json:async()=>path==='/v3/payments'?{data:[current],hasMore:false}:current};
  };
  const handler=createHandler({rpc:x.rpc,getUser:async token=>token==='valid'?{id:id(1)}:null,baseUrl:'https://project.supabase.co',fetcher});
  const request=(body,path='',auth='valid',extra={})=>handler(new Request('https://project.supabase.co/functions/v1/finance-asaas'+path,{method:'POST',headers:{authorization:'Bearer '+auth,'Content-Type':'application/json',...extra},body:JSON.stringify(body)}));
  assert.equal((await request({action:'list'},'','invalid')).status,401);
  assert.equal((await request({action:'credentials',school_id:id(10)})).status,400);
  const body={action:'create',request_id:id(40),...sample()};assert.equal((await request(body)).status,503);
  fail=false;const retry=await (await request(body)).json();assert.equal(posts,1);assert.equal(retry.status,'uncertain');
  const recovered=await (await request({action:'check',id:retry.id})).json();assert.equal(recovered.status,'pending');assert.equal(posts,1);
  const event={account:{id:id(90)},payment:{id:'pay_test001',externalReference:'integro:'+retry.id,status:'RECEIVED'},event:'PAYMENT_RECEIVED'};
  assert.equal((await request(event,'/webhook/'+id(10),'valid',{'asaas-access-token':'invalid'})).status,401);
  assert.equal((await request(event,'/webhook/'+id(10),'valid',{'asaas-access-token':hookToken})).status,200);
  assert.equal((await x.db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
  paid=true;await request(event,'/webhook/'+id(10),'valid',{'asaas-access-token':hookToken});await request(event,'/webhook/'+id(10),'valid',{'asaas-access-token':hookToken});
  assert.equal((await x.db.query('select count(*)::int n from public.finance_entries')).rows[0].n,1);
 }finally{await x.db.close();}
});
test('connection validates account before storing secrets, creates authenticated webhook and stays disabled for owner review',async()=>{
 const x=await setup();try{
  let hookBody,readonlyCalls=0;
  const fetcher=async(url,opts)=>{
   const path=new URL(url).pathname;let data;
   assert.equal(opts.headers.access_token,apiKey);
   if(path.endsWith('/status')){readonlyCalls++;data={id:id(90),general:'APPROVED'};}
   else if(path.endsWith('/commercialInfo')){readonlyCalls++;data={name:'Titular Teste',cpfCnpj:'24971563792'};}
   else if(opts.method==='GET')data={data:[],hasMore:false};
   else {hookBody=JSON.parse(opts.body);data={id:'hook_test001'};}
   return {ok:true,json:async()=>data};
  };
  const handler=createHandler({rpc:x.rpc,getUser:async()=>({id:id(1)}),baseUrl:'https://project.supabase.co',fetcher});
  const req=(origin)=>new Request('https://project.supabase.co/functions/v1/finance-asaas',{method:'POST',headers:{authorization:'Bearer valid','Content-Type':'application/json',...(origin?{origin}:{})},body:JSON.stringify({action:'connect',api_key:apiKey,email:'owner@example.test',user_id:id(2)})});
  assert.equal((await handler(req('https://evil.test'))).status,403);
  const response=await handler(req());assert.equal(response.status,200);const result=await response.text();assert.equal(result.includes(apiKey),false);assert.equal(result.includes('hook_token'),false);
  assert.equal(readonlyCalls,2);assert.match(hookBody.url,/webhook\/00000000-0000-4000-8000-000000000010$/);assert.equal(hookBody.authToken.length,72);assert.ok(hookBody.events.includes('PAYMENT_RECEIVED'));
  const state=await x.rpc('list',{user_id:id(1)});assert.equal(state.enabled,false);assert.equal(state.connected,true);
 }finally{await x.db.close();}
});
