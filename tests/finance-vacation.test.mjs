import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {PGlite} from '@electric-sql/pglite';
import {setup} from './intgem-finance-fixture.mjs';
const school='da5d33a5-616a-4abc-8f88-78f5ecb85cd4';
const other='00000000-0000-4000-8000-000000000001';
const cycle='00000000-0000-4000-8000-000000000002';
const base=await readFile(new URL('../supabase/migrations/20260903010000_finance_admin_adjustment_secure.sql',import.meta.url),'utf8');
const migration=await readFile(new URL('../supabase/migrations/20261117021144_finance_vacation_2026.sql',import.meta.url),'utf8');
const policy=await readFile(new URL('../portal/financeiro-cycle-policy.js',import.meta.url),'utf8');
function definition(name){const start=base.indexOf(`create or replace function ${name}(`);return base.slice(start,base.indexOf('$$;',start)+3);}
function clock(sql){return sql.replaceAll("(pg_catalog.now() at time zone 'America/Manaus')::date","current_setting('test.date')::date");}
test('vacation boundaries use Manaus and apply only to Instituto Integro',()=>{
 const context=vm.createContext({window:{}});vm.runInContext(policy,context);
 const get=context.window.INTEGRO_FINANCE_CYCLE_POLICY.getCurrentCycleRange;
 for(const [date,start,end,key] of [
  ['2026-11-16','2026-11-11','2026-11-16','2026-11'],
  ['2026-11-17','2026-11-17','2027-01-14','ferias-2026'],
  ['2026-12-11','2026-11-17','2027-01-14','ferias-2026'],
  ['2027-01-14','2026-11-17','2027-01-14','ferias-2026'],
  ['2027-01-15','2027-01-15','2027-02-10','2027-01'],
  ['2027-02-11','2027-02-11','2027-03-10','2027-02'],
 ]) {const r=get(date,school);assert.deepEqual([r.startISO,r.endISO,r.cycleKey],[start,end,key]);}
 assert.equal(get('2027-01-14',other).startISO,'2027-01-11');
 assert.equal(get(new Date('2027-01-15T03:59:59Z'),school).cycleKey,'ferias-2026');
 assert.equal(get(new Date('2027-01-15T04:00:00Z'),school).cycleKey,'2027-01');
});
test('database closes annual period, preserves guards, accepts vacation funding and January return',async()=>{
 const db=new PGlite();
 try {
 await db.exec(`create schema private;create schema auth;create role anon;create role authenticated;create role service_role;
 create function auth.role() returns text language sql as $$select current_setting('test.auth_role',true)$$;
 create table public.profiles(id uuid primary key,school_id uuid,role text);
 create table public.finance_cash_cycles(id uuid primary key default gen_random_uuid(),school_id uuid,cycle_key text,start_date date,end_date date,status text default 'aberto',closed_at timestamptz,closed_by uuid,created_by uuid,created_at timestamptz default now(),updated_at timestamptz default now(),notes text,unique(school_id,cycle_key));
 create table public.finance_entries(id uuid,school_id uuid,entry_date date);
 create table public.finance_expenses(id uuid,school_id uuid,expense_date date);
 create table public.finance_cash_cycle_movements(id uuid primary key default gen_random_uuid(),school_id uuid,cycle_id uuid,movement_type text,source_bucket text,destination_bucket text,amount numeric,movement_date date,description text,notes text,created_by uuid);
 insert into public.finance_cash_cycles(id,school_id,cycle_key,start_date,end_date) values('${cycle}','${school}','2026-11','2026-11-11','2026-12-10');
 select set_config('test.date','2026-11-16',false);`);
 const a=base.indexOf('create table if not exists private.finance_admin_adjustment_audit');
 await db.exec(base.slice(a,base.indexOf('\n);',a)+4));
 await db.exec(definition('private.is_valid_finance_cycle_dates'));
 await db.exec(clock(migration.split("-- INTGEM ROUTING")[0]));
 await db.exec(clock(migration.split("-- INTGEM ROUTING")[0]));
 await db.exec(definition('private.guard_finance_activity_cycle'));
 await db.exec(`create trigger cycle_guard before insert or update or delete on public.finance_cash_cycles for each row execute function private.guard_finance_cash_cycle_policy();
 create trigger activity_guard before insert or update or delete on public.finance_cash_cycle_movements for each row execute function private.guard_finance_activity_cycle();`);
 await db.exec(`insert into public.finance_entries values(gen_random_uuid(),'${school}','2026-11-18')`);
 const close=`update public.finance_cash_cycles set end_date='2026-11-16',status='fechado',closed_at=now(),closed_by='${other}' where id='${cycle}'`;
 await assert.rejects(db.exec(close),/identity_is_immutable/);
 await db.exec('delete from public.finance_entries');
 await db.exec(close);
 await assert.rejects(db.exec(`update public.finance_cash_cycles set status='aberto' where id='${cycle}'`),/closed_cycle_is_immutable/);
 await assert.rejects(db.exec(`insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date) values('${school}','2026-12','2026-12-11','2027-01-10')`),/invalid_cycle_dates/);
 await assert.rejects(db.exec(`insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date) values('${other}','ferias-2026','2026-11-17','2027-01-14')`),/invalid_cycle_dates/);
 await db.exec(`insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date) values('${school}','ferias-2026','2026-11-17','2027-01-14')`);
 const vacation=(await db.query("select id from public.finance_cash_cycles where cycle_key='ferias-2026'")).rows[0].id;
 await db.exec(`insert into public.finance_cash_cycle_movements(school_id,cycle_id,movement_type,destination_bucket,amount,movement_date,description) values('${school}','${vacation}','transferencia','operacoes',3926.90,'2026-11-17','Saldo do ciclo de férias 2026')`);
 await assert.rejects(db.exec(`select private.assert_finance_cycle_writable('${school}','${cycle}','2026-11-16')`),/not_available/);
 await db.exec(`select set_config('test.date','2026-12-10',false);select private.assert_finance_cycle_writable('${school}','${vacation}','2026-12-10')`);
 await assert.rejects(db.exec(`update public.finance_cash_cycles set status='fechado',closed_at=now(),closed_by='${other}' where id='${vacation}'`),/cannot_close_early/);
 await db.exec(`select set_config('test.date','2027-01-15',false);
 update public.finance_cash_cycles set status='fechado',closed_at=now(),closed_by='${other}' where id='${vacation}';
 insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date) values('${school}','2027-01','2027-01-15','2027-02-10');`);
 assert.equal((await db.query('select amount::text from public.finance_cash_cycle_movements')).rows[0].amount,'3926.90');
 assert.equal((await db.query("select has_function_privilege('anon','private.finance_cycle_matches_policy(uuid,date,date,text)','execute') as allowed")).rows[0].allowed,false);
 } finally {await db.close();}
});

test('vacation opening balance goes entirely to operations and pays expenses without generating revenue',async()=>{
 const window={INTEGRO_SUPABASE:{url:'https://example.test',anonKey:'test'},supabase:{createClient:()=>({})}};
 const context=vm.createContext({window,document:{readyState:'loading',addEventListener(){}},console,setTimeout(){}});
 vm.runInContext(policy,context);
 vm.runInContext(await readFile(new URL('../portal/financeiro-saldo-reconciliacao.js',import.meta.url),'utf8'),context);
 const snapshot=window.INTEGRO_FINANCE_CYCLE_CORE.calculateCurrentCycleSnapshot({
  cycle:{id:cycle,start_date:'2026-11-17',end_date:'2027-01-14'},entries:[],
  movements:[{id:'opening',cycle_id:cycle,movement_type:'transferencia',source_bucket:null,destination_bucket:'operacoes',amount:3926.90,movement_date:'2026-11-17',description:'Saldo do ciclo de férias 2026'}],
  expenses:[{id:'bill',amount:250,expense_date:'2026-12-01',allocation_bucket:'operacoes'}]
 });
 assert.equal(snapshot.currentEntriesTotal,0);
 assert.equal(snapshot.currentBalance,3676.90);
 assert.equal(snapshot.buckets.operacoes.available,3676.90);
 for(const bucket of ['acionista_1','acionista_2','acionista_3','fundo_caixa'])assert.equal(snapshot.buckets[bucket].available,0);
});

test('verified IntGem receipts select the vacation cycle and remain idempotent',async()=>{
 const {db,settle}=await setup();
 try {
  await db.exec(`alter table private.intgem_orders add column provider text default 'infinitepay';
   create table public.finance_expenses(id uuid,school_id uuid,expense_date date);
   create table public.finance_cash_cycle_movements(id uuid,school_id uuid,movement_date date);
   select set_config('test.date','2026-11-17',false);`);
  await db.exec(clock(migration.split('CREATE OR REPLACE FUNCTION public.create_finance_admin_adjustment')[0]));
  await db.exec(migration.split('-- INTGEM ROUTING')[1].replace("(now() at time zone 'America/Manaus')::date","date '2026-11-17'"));
  await db.exec(`insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date) values('${school}','ferias-2026','2026-11-17','2027-01-14')`);
  const sale=await settle('gem5',192);
  await db.query("update private.intgem_orders set paid_at='2026-11-17T15:00:00Z' where id=$1",[sale.order.id]);
  assert.equal((await db.query('select private.intgem_post_to_finance($1) ok',[sale.order.id])).rows[0].ok,true,JSON.stringify((await db.query('select last_error from private.intgem_finance_posts')).rows));
  assert.equal((await db.query('select private.intgem_post_to_finance($1) ok',[sale.order.id])).rows[0].ok,true,JSON.stringify((await db.query('select last_error from private.intgem_finance_posts')).rows));
  const rows=(await db.query('select c.cycle_key,e.amount_paid::numeric(12,2)::text amount from public.finance_entries e join public.finance_cash_cycles c on c.id=e.cash_cycle_id')).rows;
  assert.deepEqual(rows,[{cycle_key:'ferias-2026',amount:'2.99'}]);
 } finally {await db.close();}
});
