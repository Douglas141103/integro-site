import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {normalizeSale,createCheckout,verifyPayment,safeCheckout} from '../supabase/functions/finance-infinitepay/contract.mjs';
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const sample=()=>({customer:{studentId:id(3),studentName:'Aluno',payerName:'Responsável',payerDocument:'00000000000',phone:'92999999999',email:'cliente@example.test'},items:[{type:'material',qty:2,grossUnit:15,discountUnit:5,finalUnit:10,desc:'Apostila'}],note:'Teste'});
const migration=await readFile(new URL('../supabase/migrations/20261027221644_finance_infinitepay_checkout.sql',import.meta.url),'utf8');
async function setup(){
 const db=new PGlite();await db.exec(`create role anon;create role authenticated;create role service_role;create schema auth;create schema private;create schema cron;
 create function auth.role() returns text language sql as $$select current_setting('request.jwt.claim.role',true)$$;
 create table auth.users(id uuid primary key);insert into auth.users values('${id(1)}'),('${id(2)}');
 create table public.schools(id uuid primary key,slug text);insert into public.schools values('${id(10)}','instituto-integro'),('${id(11)}','outra');
 create table public.profiles(id uuid primary key,school_id uuid,role text,active boolean);insert into public.profiles values('${id(1)}','${id(10)}','diretor',true),('${id(2)}','${id(11)}','professor',true);
 create table public.students(id uuid primary key,school_id uuid);insert into public.students values('${id(3)}','${id(10)}'),('${id(4)}','${id(11)}');
 create table public.finance_packages(id uuid primary key,school_id uuid);create table public.finance_discounts(id uuid primary key,school_id uuid);
 create table public.finance_cash_cycles(id uuid primary key,school_id uuid,start_date date,end_date date,cycle_key text,status text);
 insert into public.finance_cash_cycles values('${id(20)}','${id(10)}',date_trunc('month',now())::date,(date_trunc('month',now())+interval '1 month - 1 day')::date,to_char(now(),'YYYY-MM'),'aberto');
 create function private.assert_finance_cycle_writable(uuid,uuid,date,boolean) returns void language plpgsql as $$begin if not exists(select 1 from public.finance_cash_cycles where school_id=$1 and id=$2 and status='aberto' and $3 between start_date and end_date) then raise exception 'closed_cycle';end if;end$$;
 create table public.finance_entries(id uuid primary key default gen_random_uuid(),receipt_number bigint generated always as identity,school_id uuid,cash_cycle_id uuid,student_id uuid,student_name_snapshot text,payer_name text,payer_document text,package_id uuid,package_name_snapshot text,discount_id uuid,discount_name_snapshot text,gross_amount numeric,discount_amount numeric,amount_paid numeric,payment_method text,competence_month text,description text,entry_type text,entry_date date,created_by uuid);
 create function cron.schedule(text,text,text) returns bigint language sql as $$select 1::bigint$$;`);
 await db.exec(migration);
 const rpc=(action,data={})=>db.transaction(async tx=>{await tx.exec("set local role service_role;set local request.jwt.claim.role='service_role';");return (await tx.query('select public.finance_infinitepay_service($1,$2) r',[action,data])).rows[0].r;});
 const create=(n=30,sale=normalizeSale(sample()),user_id=id(1))=>rpc('create',{user_id,request_id:id(n),sale});
 const settle=(o,tx='tx-1')=>rpc('settle',{id:o.id,paid:true,amount:o.amount,capture_method:'pix',transaction_nsu:tx,invoice_slug:'invoice-1'});
 return {db,rpc,create,settle};
}
test('amounts validated in cents; rejects malformed or inconsistent carts',()=>{
 assert.equal(normalizeSale(sample()).amount,2000);
 for(const field of ['grossUnit','discountUnit','finalUnit']){const s=sample();s.items[0][field]=-1;assert.throws(()=>normalizeSale(s));}
 const s=sample();s.items[0].finalUnit=11;assert.throws(()=>normalizeSale(s));
 s.items[0].finalUnit=0;assert.throws(()=>normalizeSale(s));
 assert.equal(safeCheckout('https://evil.test/pay'),null);assert.equal(safeCheckout('https://user:pass@pay.infinitepay.io/a'),null);
});
test('checkout pre-fills purchaser and binds the order; verification rejects forged or wrong amounts',async()=>{
 const order={id:id(40),amount:2000,sale:normalizeSale(sample())};let sent;
 const fetcher=async(url,opts)=>{sent=JSON.parse(opts.body);return {ok:true,json:async()=>({url:'https://checkout.infinitepay.io/instituto-integro/a'})};};
 await createCheckout(order,'https://example.test/webhook',{fetcher});assert.equal(sent.order_nsu,order.id);assert.equal(sent.customer.phone_number,'+5592999999999');assert.equal(sent.items[0].price,2000);
 const verified=result=>verifyPayment(order,'tx-1','invoice-1',{fetcher:async()=>({ok:true,json:async()=>result})});
 assert.deepEqual(await verified({paid:false,success:true}),{paid:false});
 await assert.rejects(verified({success:true,paid:true,amount:1,capture_method:'pix'}));
 await assert.rejects(verified({success:true,paid:true,amount:2000,capture_method:'other'}));
 assert.equal((await verified({success:true,paid:true,amount:2000,capture_method:'pix'})).paid,true);
});
test('service-only, off switch, pending orders do not enter cash; paid event posts once even after disable',async()=>{
 const {db,rpc,create,settle}=await setup();try{
 await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select public.finance_infinitepay_service('list','{}')");}),/permission denied/);
 await assert.rejects(create(),/desativada/);await rpc('settings',{user_id:id(1),enabled:true});
 await assert.rejects(create(33,normalizeSale(sample()),id(2)),/autorizado/);
 const cross=sample();cross.customer.studentId=id(4);await assert.rejects(create(32,normalizeSale(cross)),/outra unidade/);
 const o=await create();assert.equal((await create()).id,o.id);assert.equal((await create()).created,false);
 assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
 await rpc('settings',{user_id:id(1),enabled:false});await assert.rejects(create(31),/desativada/);
 assert.equal((await settle(o)).posted,true);await settle(o);
 assert.equal((await db.query('select count(*)::int n,sum(amount_paid) total from public.finance_entries')).rows[0].n,1);
 assert.equal(Number((await db.query('select amount_paid from public.finance_entries')).rows[0].amount_paid),20);
 await assert.rejects(db.exec("delete from public.finance_entries"),/preservado/);
 await assert.rejects(settle(o,'different'),/Outro pagamento/);
 }finally{await db.close();}
});
test('closed cycle retains verified payment, retry posts atomically and duplicate transaction is rejected',async()=>{
 const {db,rpc,create,settle}=await setup();try{
 await rpc('settings',{user_id:id(1),enabled:true});const s=sample();s.items.push({...s.items[0],desc:'Segundo item'});const o=await create(35,normalizeSale(s));
 await db.exec("update public.finance_cash_cycles set status='fechado'");assert.equal((await settle(o)).posted,false);
 assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
 assert.equal((await rpc('inspect',{id:o.id})).status,'paid');
 await db.exec("update public.finance_cash_cycles set status='aberto'");assert.equal((await settle(o)).posted,true);await settle(o);
 assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,2);
 const second=await create(36);await assert.rejects(settle(second),/unique/);
 }finally{await db.close();}
});
