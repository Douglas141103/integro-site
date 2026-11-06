import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {normalizeWithdrawal,verifyTransfer,reference} from '../supabase/functions/collaborator-wallet/contract.mjs';
import {createHandler} from '../supabase/functions/collaborator-wallet/handler.mjs';
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const migration=await readFile(new URL('../supabase/migrations/20261106050857_collaborator_portal.sql',import.meta.url),'utf8');
async function fixture(){const db=new PGlite();await db.exec(`
create role anon;create role authenticated;create role service_role bypassrls;
create schema auth;create schema private;
create table auth.users(id uuid primary key);insert into auth.users values('${id(1)}'),('${id(2)}'),('${id(3)}'),('${id(4)}');
create table public.schools(id uuid primary key);insert into public.schools values('${id(10)}');
create table public.profiles(id uuid,full_name text,role text,school_id uuid,active boolean);
insert into public.profiles values('${id(1)}','Andre','integro_admin','${id(10)}',true),('${id(2)}','Lucilene','professor','${id(10)}',true),('${id(3)}','Douglas','integro_admin','${id(10)}',true),('${id(4)}','Outro','professor','${id(10)}',true);
create table public.finance_cash_cycles(id uuid primary key,school_id uuid,start_date date,end_date date,status text);
insert into public.finance_cash_cycles values('${id(20)}','${id(10)}',current_date-10,current_date+10,'aberto');
create table public.finance_entries(id uuid primary key,school_id uuid,entry_date date,amount_paid numeric,payment_method text,receipt_number bigint,asaas_order_id uuid);
create table private.finance_asaas_orders(id uuid,school_id uuid,status text,posted_at timestamptz,post_error text);
create table public.finance_cash_cycle_movements(id uuid primary key default gen_random_uuid(),school_id uuid,cycle_id uuid,movement_type text,source_bucket text,destination_bucket text,amount numeric,movement_date date,description text,notes text,related_expense_id uuid,created_by uuid,created_at timestamptz default now());
create table public.finance_expenses(id uuid,school_id uuid,allocation_bucket text,expense_date date,amount numeric,description text,notes text,category text,related_cash_movement_id uuid);
grant all on all tables in schema public to service_role;
`);await db.exec(migration);await db.exec(await readFile(new URL('../supabase/migrations/20261106052253_collaborator_webhook_recovery.sql',import.meta.url),'utf8'));await db.exec(`insert into private.collaborator_settings values('${id(10)}',current_date-10,'hook_test',now());
insert into private.collaborator_members(user_id,school_id,bucket,display_name) values('${id(1)}','${id(10)}','acionista_1','Andre'),('${id(2)}','${id(10)}','acionista_2','Lucilene'),('${id(3)}','${id(10)}','acionista_3','Douglas');
insert into public.finance_entries values('${id(30)}','${id(10)}',current_date,100,'Dinheiro',1,null),('${id(31)}','${id(10)}',current_date,200,'Cartão',2,null),('${id(32)}','${id(10)}',current_date,500,'Pix',3,'${id(40)}');
insert into private.finance_asaas_orders values('${id(40)}','${id(10)}','paid',now(),null);`);
const rpc=(action,data={})=>db.transaction(async tx=>{await tx.exec('set local role service_role');return (await tx.query('select public.collaborator_wallet_service($1,$2) r',[action,data])).rows[0].r;});
return {db,rpc,dashboard:()=>rpc('dashboard',{user_id:id(1)})};}
test('cash needs physical validation and funding; card approval alone cannot fund; teacher limited to own account',async()=>{const {db,rpc,dashboard}=await fixture();try{
 let d=await dashboard();assert.equal(d.balance.available,100);assert.equal(d.balance.balance,160);assert.equal(d.balance.pending_cash,20);assert.equal(d.balance.pending_settlement,40);
 await assert.rejects(rpc('fund_entry',{user_id:id(1),entry_id:id(30),reference:'deposit-test',funds_confirmed:true}),/primeiro/);
 await assert.rejects(rpc('cash_delivered',{user_id:id(2),entry_id:id(30)}),/administração/);
 await rpc('cash_delivered',{user_id:id(1),entry_id:id(30)});assert.equal((await dashboard()).balance.available,100);
 await rpc('fund_entry',{user_id:id(1),entry_id:id(30),reference:'deposit-test',funds_confirmed:true});assert.equal((await dashboard()).balance.available,120);
 assert.equal((await rpc('context',{user_id:id(2)})).is_admin,false);
 await assert.rejects(rpc('dashboard',{user_id:id(4)}),/vinculado/);
 await db.exec(`update public.finance_entries set amount_paid=150 where id='${id(30)}'`);assert.equal((await dashboard()).balance.available,100);
 await db.exec(`set role authenticated`);await assert.rejects(db.query("select public.collaborator_wallet_service('context','{}')"),/permission denied/);
 }finally{await db.close();}});
test('reserve once, protect others, owner isolation, confirmed completion posts once, failure releases funds',async()=>{const {db,rpc,dashboard}=await fixture();try{
 const req={user_id:id(1),request_id:id(50),amount:80,pix_key:'example@example.com',pix_type:'EMAIL',provider_balance:500};
 await assert.rejects(rpc('reserve',{...req,provider_balance:150}),/cobre/);
 const a=await rpc('reserve',req);assert.equal((await dashboard()).balance.available,20);
 assert.equal((await rpc('reserve',req)).id,a.id);await assert.rejects(rpc('reserve',{...req,amount:90}),/outros dados/);
 await assert.rejects(rpc('get',{user_id:id(2),id:a.id}),/não encontrada/);
 assert.equal((await rpc('claim',{user_id:id(1),id:a.id})).claimed,true);assert.equal((await rpc('claim',{user_id:id(1),id:a.id})).claimed,false);
 await rpc('update',{id:a.id,status:'DONE',provider_id:id(80)});await rpc('update',{id:a.id,status:'DONE',provider_id:id(80)});
 assert.equal((await db.query('select count(*)::int n from public.finance_cash_cycle_movements')).rows[0].n,1);assert.equal((await dashboard()).balance.available,20);
 const b=await rpc('reserve',{...req,request_id:id(51),amount:10});await rpc('update',{id:b.id,status:'FAILED'});assert.equal((await dashboard()).balance.available,20);
 await db.exec(`update private.finance_asaas_orders set status='refunded'`);assert.equal((await dashboard()).balance.available,0);
 }finally{await db.close();}});
test('pending and confirmed withdrawal survive cycle changes and failed accounting post',async()=>{const {db,rpc,dashboard}=await fixture();try{
 const a=await rpc('reserve',{user_id:id(1),request_id:id(52),amount:25,pix_key:'example@example.com',pix_type:'EMAIL',provider_balance:500});
 await db.exec("update public.finance_cash_cycles set status='fechado'");await rpc('update',{id:a.id,status:'DONE',provider_id:id(81)});
 assert.equal((await dashboard()).balance.available,75);assert.equal((await dashboard()).withdrawals[0].status,'DONE');
 await db.exec("update public.finance_cash_cycles set status='aberto'");await rpc('update',{id:a.id,status:'DONE',provider_id:id(81)});assert.equal((await dashboard()).balance.available,75);
 }finally{await db.close();}});
test('provider ambiguous response never causes a second payment POST',async()=>{const {db,rpc}=await fixture();try{
 let posts=0;const h=createHandler({rpc,getUser:async token=>token==='valid'?{id:id(1),email:'admin@example.com'}:null,credentials:async()=>({api_key:'a-test-key-with-minimum-length',enabled:true,hook_token:'x'.repeat(64),account_id:id(10)}),baseUrl:'https://example.supabase.co',fetcher:async(url,opts)=>{
 if(url.endsWith('/finance/balance'))return Response.json({balance:500});
 if(opts.method==='POST'){posts++;throw Error('connection lost');}
 return Response.json({data:[],hasMore:false});
 }});
 const body={action:'withdraw',request_id:id(53),amount:20,pix_key:'example@example.com',pix_type:'EMAIL'};
 const send=token=>h(new Request('https://example.supabase.co/functions/v1/collaborator-wallet',{method:'POST',headers:{authorization:'Bearer '+token},body:JSON.stringify(body)}));
 assert.equal((await send('bad')).status,401);assert.equal(posts,0);
 assert.equal((await (await send('valid')).json()).status,'uncertain');await send('valid');assert.equal(posts,1);
 }finally{await db.close();}});
test('transfer contract rejects malformed amount, wrong recipient/reference and untrusted receipt URL',()=>{
 assert.throws(()=>normalizeWithdrawal({request_id:id(1),amount:1.001,pix_type:'CPF',pix_key:'123'}));
 const w={id:id(1),amount:20,pix_key:'a@example.com'};const t={id:id(2),externalReference:reference(w.id),value:20,status:'DONE',bankAccount:{pixAddressKey:w.pix_key},transactionReceiptUrl:'https://evil.example/fake'};
 assert.equal(verifyTransfer(w,t).receipt_url,undefined);assert.throws(()=>verifyTransfer(w,{...t,value:21}));assert.throws(()=>verifyTransfer(w,{...t,bankAccount:{pixAddressKey:'wrong@example.com'}}));
});
test('webhook authenticates, reads current provider status, recovers missing reference, and handles replay',async()=>{const {db,rpc,dashboard}=await fixture();try{
 const r=await rpc('reserve',{user_id:id(1),request_id:id(54),amount:20,pix_key:'example@example.com',pix_type:'EMAIL',provider_balance:500});
 await rpc('claim',{user_id:id(1),id:r.id});await rpc('update',{id:r.id,status:'PENDING',provider_id:id(82)});
 let providerStatus='PENDING';const secret='h'.repeat(64);
 const h=createHandler({rpc,getUser:async()=>null,credentials:async()=>({api_key:'a-test-key-with-minimum-length',enabled:true,hook_token:secret,account_id:id(10)}),baseUrl:'https://example.supabase.co',fetcher:async()=>Response.json({id:id(82),externalReference:reference(r.id),value:20,status:providerStatus,bankAccount:{pixAddressKey:'example@example.com'}})});
 const hook=token=>h(new Request('https://example.supabase.co/functions/v1/collaborator-wallet/webhook/'+id(10),{method:'POST',headers:{'asaas-access-token':token},body:JSON.stringify({event:'TRANSFER_DONE',transfer:{id:id(82),status:'DONE'}})}));
 assert.equal((await hook('bad')).status,401);assert.equal((await hook(secret)).status,200);assert.equal((await dashboard()).withdrawals[0].status,'PENDING');
 providerStatus='DONE';await hook(secret);await hook(secret);assert.equal((await dashboard()).balance.available,80);assert.equal((await db.query('select count(*)::int n from public.finance_cash_cycle_movements')).rows[0].n,1);
 }finally{await db.close();}});
