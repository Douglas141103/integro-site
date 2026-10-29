import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {intgemDatabase} from './intgem-db-fixture.mjs';
const school='da5d33a5-616a-4abc-8f88-78f5ecb85cd4';
const sql=await readFile(new URL('../supabase/migrations/20261016185036_box_intgem_finance.sql',import.meta.url),'utf8');
const cycleSql=await readFile(new URL('../supabase/migrations/20260903010000_finance_admin_adjustment_secure.sql',import.meta.url),'utf8');
export async function setup(){
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

