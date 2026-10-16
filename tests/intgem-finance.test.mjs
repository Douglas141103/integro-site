import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {intgemDatabase} from './intgem-db-fixture.mjs';
import {freshSave} from '../integro-box/egg-src/egg-rules.js';
const school='da5d33a5-616a-4abc-8f88-78f5ecb85cd4';
const sql=await readFile(new URL('../supabase/migrations/20261016185036_box_intgem_finance.sql',import.meta.url),'utf8');
const cycleSql=await readFile(new URL('../supabase/migrations/20260903010000_finance_admin_adjustment_secure.sql',import.meta.url),'utf8');

async function setup(){
  const env=await intgemDatabase(),{db}=env;
  await db.exec(`
    create function auth.role() returns text language sql as $$select nullif(current_setting('role',true),'none')$$;
    create table public.schools(id uuid primary key);
    insert into public.schools values('${school}');
    create table public.finance_cash_cycles(
      id uuid primary key default gen_random_uuid(), school_id uuid not null references public.schools,
      cycle_key text not null, start_date date not null, end_date date not null, status text not null default 'aberto',
      closed_at timestamptz, closed_by uuid, notes text, created_by uuid,
      created_at timestamptz default now(),updated_at timestamptz default now(),unique(school_id,cycle_key)
    );
    create table public.finance_entries(
      id uuid primary key default gen_random_uuid(), receipt_number bigint generated always as identity,
      school_id uuid not null references public.schools, student_id uuid,
      student_name_snapshot text not null, payer_name text not null, payer_document text not null,
      package_name_snapshot text,gross_amount numeric not null default 0,discount_amount numeric not null default 0,
      amount_paid numeric not null default 0,payment_method text,competence_month text,description text,
      created_by uuid,created_at timestamptz default now(),entry_type text not null default 'mensalidade',entry_date date not null
    );
    -- Minimal scheduler double: exercise the migration's registration, not timers.
    create schema cron;
    create table cron.job(jobname text primary key,schedule text,command text);
    create function cron.schedule(text,text,text) returns bigint language plpgsql as $$begin
      insert into cron.job values($1,$2,$3) on conflict(jobname) do update set schedule=$2,command=$3;return 1;end$$;
    grant insert,update,delete,select on public.finance_entries to authenticated;
    grant usage,select on all sequences in schema public to authenticated;
    -- A stale open cycle must never win the selection over the current period.
    insert into public.finance_cash_cycles(school_id,cycle_key,start_date,end_date)
    select '${school}',to_char(s,'YYYY-MM'),s,(s+interval '1 month'-interval '1 day')::date
    from (select (date_trunc('month',now() at time zone 'America/Manaus')-interval '2 months')::date+10 s) x;
  `);
  for(const name of ['is_valid_finance_cycle_dates','guard_finance_cash_cycle_policy','assert_finance_cycle_writable','guard_finance_activity_cycle']){
    const start=cycleSql.indexOf(`create or replace function private.${name}(`);
    assert(start>=0);
    await db.exec(cycleSql.slice(start,cycleSql.indexOf('$$;',cycleSql.indexOf('as $$',start))+3));
  }
  await db.exec(`create trigger finance_cash_cycle_policy_guard before insert or update or delete on public.finance_cash_cycles for each row execute function private.guard_finance_cash_cycle_policy();
    create trigger finance_activity_cycle_guard before insert or update or delete on public.finance_entries for each row execute function private.guard_finance_activity_cycle();`);
  await db.exec(sql);await db.exec(sql);
  await env.access(20,'Jogador de teste');
  const settle=async(pack='gem20',nonce=90)=>{
    const order=await env.order(20,pack,nonce);
    const proof={transaction_nsu:'tx-'+nonce,invoice_slug:'invoice-'+nonce,amount:order.amount,capture_method:nonce%2?'pix':'credit_card'};
    return {order,proof,result:await env.pay('settle',order.id,proof)};
  };
  return {...env,settle};
}

test('verified sales create one gross receipt in the current cycle; ordinary rewards and pending checkouts create none',async()=>{
  const {db,settle,order,pay,rpc,tick,run}=await setup();
  try{
    await order(20,'gem1',80);await rpc(20,'pulse',{game:'lobby',active:true,visible:true});
    for(let i=0;i<10;i++)await tick(20,30,'lobby');
    assert.equal((await rpc(20)).balance,1);
    assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,0);
    for(const [i,pack] of ['gem1','gem5','gem10','gem20'].entries()){
      const sale=await settle(pack,90+i);assert.equal(sale.result.paid,true);
      assert.equal((await pay('settle',sale.order.id,sale.proof)).duplicate,true);
      assert.equal((await db.query('select private.intgem_post_to_finance($1) ok',[sale.order.id])).rows[0].ok,true);
    }
    await rpc(20,'buy',{item:'egg_jade',price:4});
    const save=freshSave();save.coins=100000;
    await run(20,"select public.box_egg('save',0,$1) r",[save]);
    await db.exec('update private.intgem_days set egg_seconds=1200');
    const q=(await rpc(20,'exchange_quote')).quote;
    assert.equal((await rpc(20,'exchange',{rate:q.rate,day:q.day,revision:1})).exchanged,true);
    // Match PostgREST's ISO date strings; PGlite otherwise decodes DATE as Date.
    const rows=(await db.query(`select e.*,e.entry_date::text entry_date,c.status,c.start_date::text,c.end_date::text from public.finance_entries e join public.finance_cash_cycles c on c.id=e.cash_cycle_id order by e.receipt_number`)).rows;
    assert.equal(rows.length,4);assert.deepEqual(rows.map(r=>Number(r.amount_paid)),[1,2.99,6.99,10.99]);
    assert(rows.every(r=>r.entry_type==='intgem'&&r.school_id===school&&r.status==='aberto'&&r.student_id===null&&r.created_by===null));
    assert(rows.every(r=>r.entry_date>=r.start_date&&r.entry_date<=r.end_date&&r.gross_amount===r.amount_paid));
    assert.deepEqual(new Set(rows.map(r=>r.payment_method)),new Set(['Pix','Cartão de crédito']));
    assert.equal((await db.query('select count(*)::int n from private.intgem_finance_posts where entry_id is not null')).rows[0].n,4);
    assert.equal((await db.query('select count(*)::int n from cron.job')).rows[0].n,1);
    // Existing cash calculations include receipts once and preserve bucket rules.
    const window={INTEGRO_SUPABASE:{url:'https://example.test',anonKey:'test'},supabase:{createClient:()=>({})}};
    const context=vm.createContext({window,document:{readyState:'loading',addEventListener(){}},console,setTimeout(){}});
    vm.runInContext(await readFile(new URL('../portal/financeiro-cycle-policy.js',import.meta.url),'utf8'),context);
    vm.runInContext(await readFile(new URL('../portal/financeiro-saldo-reconciliacao.js',import.meta.url),'utf8'),context);
    const r=rows[0],snapshot=window.INTEGRO_FINANCE_CYCLE_CORE.calculateCurrentCycleSnapshot({cycle:{id:r.cash_cycle_id,start_date:r.start_date,end_date:r.end_date},entries:rows});
    assert(Math.abs(snapshot.currentEntriesTotal-21.97)<1e-9);assert(Math.abs(snapshot.currentBalance-21.97)<1e-9);
  }finally{await db.close();}
});

test('cash failure keeps the paid gems and retries exactly once after recovery',async()=>{
  const {db,settle,rpc}=await setup();
  try{
    await db.exec(`create function public.fail_receipt() returns trigger language plpgsql as $$begin raise exception 'temporary_cash_failure';end$$;
      create trigger simulate_cash_failure before insert on public.finance_entries for each row execute function public.fail_receipt();`);
    const sale=await settle();assert.equal(sale.result.paid,true);assert.equal((await rpc(20)).balance,20);
    const pending=(await db.query('select * from private.intgem_finance_posts')).rows[0];
    assert.equal(pending.entry_id,null);assert.match(pending.last_error,/temporary_cash_failure/);
    await db.exec("drop trigger simulate_cash_failure on public.finance_entries;update private.intgem_finance_posts set attempted_at=now()-interval '5 minutes'");
    assert.equal((await db.query('select private.intgem_retry_finance() n')).rows[0].n,1);
    assert.equal((await db.query('select private.intgem_retry_finance() n')).rows[0].n,0);
    assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,1);
    assert.equal((await rpc(20)).balance,20);
  }finally{await db.close();}
});

test('closed and prior cycles stay untouched; confirmed sales remain pending for reconciliation',async()=>{
  const {db,settle}=await setup();
  try{
    await settle('gem1',90);
    // Fixture only: closing early is forbidden by the real policy. Simulate the
    // last-day closed state without replacing the posting or activity guards.
    await db.exec(`alter table public.finance_cash_cycles disable trigger finance_cash_cycle_policy_guard;
      update public.finance_cash_cycles set status='fechado' where id=(select cash_cycle_id from public.finance_entries limit 1);
      alter table public.finance_cash_cycles enable trigger finance_cash_cycle_policy_guard;`);
    const sale=await settle('gem5',91);assert.equal(sale.result.paid,true);
    assert.match((await db.query('select last_error from private.intgem_finance_posts where order_id=$1',[sale.order.id])).rows[0].last_error,/finance_cycle_not_available/);
    await db.query("update private.intgem_orders set paid_at=now()-interval '2 months' where id=$1",[sale.order.id]);
    assert.equal((await db.query('select private.intgem_post_to_finance($1) ok',[sale.order.id])).rows[0].ok,false);
    assert.match((await db.query('select last_error from private.intgem_finance_posts where order_id=$1',[sale.order.id])).rows[0].last_error,/previous_cycle_requires_reconciliation/);
    assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,1);
    assert.equal((await db.query("select count(*)::int n from public.finance_cash_cycles where status='fechado'")).rows[0].n,1);
  }finally{await db.close();}
});

test('players cannot call the private posting functions, forge receipts or edit/delete verified sales',async()=>{
  const {db,settle,run}=await setup();
  try{
    const sale=await settle('gem1');
    await assert.rejects(run(20,'select private.intgem_post_to_finance($1) r',[sale.order.id]),/permission denied/);
    await assert.rejects(run(20,'select private.intgem_retry_finance() r'),/permission denied/);
    await assert.rejects(run(20,'select * from private.intgem_finance_posts'),/permission denied/);
    await assert.rejects(db.exec('update public.finance_entries set amount_paid=999'),/intgem_finance_receipt_immutable/);
    await assert.rejects(run(20,'delete from public.finance_entries'),/intgem_finance_receipt_immutable/);
    await assert.rejects(db.transaction(async tx=>{
      await tx.exec('set local role authenticated');
      await tx.query("select set_config('app.intgem_finance_order',$1,true)",[sale.order.id]);
      await tx.exec(`insert into public.finance_entries(school_id,cash_cycle_id,intgem_order_id,entry_type,entry_date,student_name_snapshot,payer_name,payer_document,gross_amount,amount_paid)
        select school_id,cash_cycle_id,intgem_order_id,entry_type,entry_date,student_name_snapshot,payer_name,payer_document,gross_amount,amount_paid from public.finance_entries limit 1`);
    }),/intgem_finance_requires_verified_payment/);
    assert.equal((await db.query('select count(*)::int n from public.finance_entries')).rows[0].n,1);
  }finally{await db.close();}
});
