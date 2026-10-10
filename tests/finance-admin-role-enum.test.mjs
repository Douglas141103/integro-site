import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';

const base = await readFile(new URL('../supabase/migrations/20260903010000_finance_admin_adjustment_secure.sql', import.meta.url), 'utf8');
const fix = await readFile(new URL('../supabase/migrations/20261010010000_finance_admin_role_enum.sql', import.meta.url), 'utf8');
function definition(name) {
  const start = base.indexOf(`create or replace function ${name}(`);
  return base.slice(start, base.indexOf('$$;', start) + 3);
}
const id = n => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;

test('RPC com partner_role enum: reproduz falha, migra, autoriza e mantém bloqueios e idempotência', async () => {
  const db = new PGlite();
  try {
    await db.exec(`
      create schema private; create schema auth;
      create role anon; create role authenticated; create role service_role;
      create type public.partner_role as enum ('integro_admin','diretor','coordenacao','professor');
      create table public.profiles(id uuid primary key, role public.partner_role, school_id uuid);
      create table public.finance_cash_cycles(id uuid primary key, school_id uuid, start_date date, end_date date, cycle_key text, status text);
      create table public.finance_cash_cycle_movements(id uuid primary key default gen_random_uuid(), school_id uuid, cycle_id uuid, movement_type text, source_bucket text, destination_bucket text, amount numeric, movement_date date, description text, notes text, created_by uuid);
      create function auth.role() returns text language sql as $$ select current_setting('test.auth_role',true) $$;
      select set_config('test.auth_role','service_role',false);
      insert into public.profiles values
        ('${id(1)}','integro_admin','${id(10)}'),
        ('${id(2)}','diretor','${id(10)}'),
        ('${id(3)}','coordenacao','${id(10)}'),
        ('${id(4)}','diretor','${id(11)}');
      with today as (select (now() at time zone 'America/Manaus')::date as d),
      cycle as (select (date_trunc('month', d) + interval '10 days' - case when extract(day from d)<11 then interval '1 month' else interval '0 months' end)::date as s from today)
      insert into public.finance_cash_cycles select '${id(20)}','${id(10)}',s,(s+interval '1 month'-interval '1 day')::date,to_char(s,'YYYY-MM'),'aberto' from cycle;
    `);
    const auditStart = base.indexOf('create table if not exists private.finance_admin_adjustment_audit');
    await db.exec(base.slice(auditStart, base.indexOf('\n);',auditStart)+4));
    await db.exec(definition('private.is_valid_finance_cycle_dates'));
    await db.exec(definition('public.create_finance_admin_adjustment'));
    const signature='public.create_finance_admin_adjustment(uuid,uuid,uuid,date,numeric,text,text,text,text,text,uuid,uuid)';
    await db.exec(`revoke all on function ${signature} from public,anon,authenticated; grant execute on function ${signature} to service_role;`);
    const invoke = (request,caller=1,authorizer=1) => db.query(`select public.create_finance_admin_adjustment($1::uuid,$2::uuid,$3::uuid,(now() at time zone 'America/Manaus')::date,333.50,'acionista_1','ajuste_administrativo','Pagamento total — Acionista 1',null,'Conferência de teste',$4::uuid,$5::uuid) as result`,[id(request),id(10),id(20),id(caller),id(authorizer)]);
    await assert.rejects(invoke(100), /btrim\(public.partner_role\) does not exist/);
    const before = (await db.query(`select proacl::text,proowner,prosecdef,proconfig from pg_proc where oid='${signature}'::regprocedure`)).rows;
    await db.exec(fix);
    await db.exec(fix); // Idempotência da migração.
    assert.deepEqual((await db.query(`select proacl::text,proowner,prosecdef,proconfig from pg_proc where oid='${signature}'::regprocedure`)).rows,before);
    assert.equal((await invoke(100)).rows[0].result.status,'created');
    assert.equal((await invoke(100)).rows[0].result.status,'already_processed');
    assert.equal((await invoke(101,3,2)).rows[0].result.status,'created');
    await assert.rejects(invoke(102,1,3), /finance_forbidden/);
    await assert.rejects(invoke(103,1,4), /finance_forbidden/);
    await assert.rejects(invoke(104,4,1), /finance_forbidden/);
    await db.exec("select set_config('test.auth_role','authenticated',false)");
    await assert.rejects(invoke(105), /finance_forbidden/);
    assert.equal((await db.query('select count(*)::integer as total from public.finance_cash_cycle_movements')).rows[0].total,2);
    assert.equal((await db.query('select count(*)::integer as total from private.finance_admin_adjustment_audit')).rows[0].total,2);
    assert.deepEqual((await db.query(`select has_function_privilege('anon','${signature}','EXECUTE') as anon,has_function_privilege('authenticated','${signature}','EXECUTE') as authenticated,has_function_privilege('service_role','${signature}','EXECUTE') as service`)).rows,[{anon:false,authenticated:false,service:true}]);
  } finally { await db.close(); }
});
