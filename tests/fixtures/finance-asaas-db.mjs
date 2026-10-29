import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {saleForPix,today} from '../../supabase/functions/finance-asaas/contract.mjs';
export const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
export const sample=()=>({customer:{studentId:id(3),studentName:'Aluno',payerName:'Responsável',payerDocument:'24971563792',phone:'',email:''},items:[{type:'material',qty:2,grossUnit:15,discountUnit:5,finalUnit:10,desc:'Apostila'}],note:'Teste'});
const migration=await readFile(new URL('../../supabase/migrations/20261027231540_finance_asaas_pix.sql',import.meta.url),'utf8');
export const apiKey='test-only-key-never-a-real-credential',hookToken='hook-test-'.padEnd(64,'h');
export async function setup(withFee=true){
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
 create table public.finance_expenses(id uuid primary key default gen_random_uuid(),school_id uuid,cash_cycle_id uuid,description text not null,amount numeric not null,paid_to text not null,paid_by_name text not null,category text,expense_date date not null,notes text,created_by uuid,allocation_bucket text);
 create function cron.schedule(text,text,text) returns bigint language sql as $$select 1::bigint$$;
 -- In-memory Vault double only. Production uses the installed encrypted Vault extension.
 create table vault.secrets(id uuid primary key default gen_random_uuid(),value text,name text unique);
 create view vault.decrypted_secrets as select id,value decrypted_secret from vault.secrets;
 create function vault.create_secret(v text,n text) returns uuid language plpgsql as $$declare result uuid;begin insert into vault.secrets(value,name) values(v,n) returning id into result;return result;end$$;
 create function vault.update_secret(i uuid,v text) returns void language sql as $$update vault.secrets set value=v where id=i$$;`);
 await db.exec(migration);
 await db.exec(await readFile(new URL('../../supabase/migrations/20261027235725_finance_asaas_creation_errors.sql',import.meta.url),'utf8'));
 if(withFee)await db.exec(await readFile(new URL('../../supabase/migrations/20261028005355_finance_pos_steps_asaas_fee.sql',import.meta.url),'utf8'));
 const rpc=(action,data={})=>db.transaction(async tx=>{await tx.exec("set local role service_role;set local request.jwt.claim.role='service_role';");return (await tx.query('select public.finance_asaas_service($1,$2) r',[action,data])).rows[0].r;});
 const connect=async(account_id=id(90))=>{const {lease}=await rpc('connect_lock',{user_id:id(1)});try{return await rpc('connect_save',{user_id:id(1),lease,api_key:apiKey,hook_token:hookToken,account_id,account_name:'Conta de teste',document_masked:'•••3792',webhook_id:'hook_test001'});}finally{await rpc('connect_unlock',{user_id:id(1),lease});}};
 const create=(n=30,sale=saleForPix(sample()),user_id=id(1))=>rpc('create',{user_id,request_id:id(n),sale,due_date:today()});
 const bind=async(o,suffix='001')=>{await rpc('customer',{id:o.id,customer_id:'cus_test'+suffix});return rpc('bind',{id:o.id,payment_id:'pay_test'+suffix});};
 const settle=o=>rpc('sync',{id:o.id,payment_id:o.payment_id,amount:o.amount,status:'paid',payment_date:today()});
 return {db,rpc,connect,create,bind,settle};
}
