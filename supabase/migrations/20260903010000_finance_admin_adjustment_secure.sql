-- Instituto Integro — ajustes administrativos financeiros com dupla autenticação
--
-- Escopo desta transição:
--   * preserva, sem estender, o ciclo atual de 09/08/2026 a 08/09/2026;
--   * remove do domínio operacional os ajustes administrativos legados, após
--     arquivá-los em área privada;
--   * remove todos os ciclos anteriores a 09/08/2026, preservando entradas e
--     despesas ordinárias e arquivando seus vínculos históricos;
--   * cria uma RPC transacional exclusiva da service_role. A RPC grava somente
--     finance_cash_cycle_movements + auditoria privada; nunca finance_expenses.
--   * mantém 09 e 10/09 sem novo ciclo e sem atividade ordinária; somente a RPC
--     protegida pode registrar, nessa janela, um ajuste datado até 08/09;
--   * valida os ciclos seguintes de 11 de um mês a 10 do mês seguinte.

begin;

do $preflight$
begin
  if pg_catalog.to_regclass('public.profiles') is null
     or pg_catalog.to_regclass('public.schools') is null
     or pg_catalog.to_regclass('public.finance_cash_cycles') is null
     or pg_catalog.to_regclass('public.finance_cash_cycle_movements') is null
     or pg_catalog.to_regclass('public.finance_expenses') is null
     or pg_catalog.to_regclass('public.finance_entries') is null then
    raise exception 'finance_schema_incomplete: tabelas financeiras obrigatórias não encontradas';
  end if;
end;
$preflight$;

create schema if not exists private;
revoke all on schema private from public;

create table if not exists private.finance_admin_adjustment_audit (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null,
  movement_id uuid not null,
  school_id uuid not null,
  cycle_id uuid not null,
  caller_id uuid not null,
  authorizer_id uuid not null,
  authorizer_role text not null,
  movement_date date not null,
  amount numeric(14, 2) not null,
  source_bucket text,
  destination_bucket text,
  description text not null,
  notes text,
  reason text not null,
  created_at timestamptz not null default pg_catalog.now(),
  constraint finance_admin_adjustment_audit_request_unique unique (request_id),
  constraint finance_admin_adjustment_audit_authorizer_role_check
    check (authorizer_role in ('diretor', 'integro_admin')),
  constraint finance_admin_adjustment_audit_amount_check
    check (amount > 0 and amount <= 999999999.99),
  constraint finance_admin_adjustment_audit_bucket_check
    check (
      source_bucket is null or source_bucket in (
        'operacoes', 'fundo_caixa', 'acionista_1', 'acionista_2',
        'acionista_3', 'ajuste_administrativo'
      )
    ),
  constraint finance_admin_adjustment_audit_destination_bucket_check
    check (
      destination_bucket is null or destination_bucket in (
        'operacoes', 'fundo_caixa', 'acionista_1', 'acionista_2',
        'acionista_3', 'ajuste_administrativo'
      )
    ),
  constraint finance_admin_adjustment_audit_route_check
    check (
      (source_bucket is not null or destination_bucket is not null)
      and source_bucket is distinct from destination_bucket
    )
);

create index if not exists finance_admin_adjustment_audit_school_created_idx
  on private.finance_admin_adjustment_audit (school_id, created_at desc);
create index if not exists finance_admin_adjustment_audit_cycle_idx
  on private.finance_admin_adjustment_audit (cycle_id, created_at desc);

create table if not exists private.finance_admin_adjustment_archive (
  id uuid primary key default gen_random_uuid(),
  source_table text not null,
  source_id uuid not null,
  school_id uuid,
  cycle_id uuid,
  classification text not null,
  payload jsonb not null,
  archived_at timestamptz not null default pg_catalog.now(),
  constraint finance_admin_adjustment_archive_source_unique
    unique (source_table, source_id),
  constraint finance_admin_adjustment_archive_source_check
    check (source_table in (
      'finance_cash_cycles', 'finance_cash_cycle_movements',
      'finance_expenses', 'finance_entries'
    )),
  constraint finance_admin_adjustment_archive_payload_check
    check (pg_catalog.jsonb_typeof(payload) = 'object')
);

alter table private.finance_admin_adjustment_audit enable row level security;
alter table private.finance_admin_adjustment_archive enable row level security;

-- Mantém o CHECK correto também se uma versão anterior desta migração tiver
-- criado a tabela antes da inclusão do arquivo de ciclos.
alter table private.finance_admin_adjustment_archive
  drop constraint if exists finance_admin_adjustment_archive_source_check;
alter table private.finance_admin_adjustment_archive
  add constraint finance_admin_adjustment_archive_source_check
  check (source_table in (
    'finance_cash_cycles', 'finance_cash_cycle_movements',
    'finance_expenses', 'finance_entries'
  ));

revoke all on table private.finance_admin_adjustment_audit from public, anon, authenticated;
revoke all on table private.finance_admin_adjustment_archive from public, anon, authenticated;

create or replace function private.reject_finance_immutable_mutation()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  raise exception 'finance_audit_is_immutable' using errcode = '42501';
end;
$$;

revoke all on function private.reject_finance_immutable_mutation()
  from public, anon, authenticated;

drop trigger if exists finance_admin_adjustment_audit_immutable
  on private.finance_admin_adjustment_audit;
create trigger finance_admin_adjustment_audit_immutable
before update or delete on private.finance_admin_adjustment_audit
for each row execute function private.reject_finance_immutable_mutation();

drop trigger if exists finance_admin_adjustment_archive_immutable
  on private.finance_admin_adjustment_archive;
create trigger finance_admin_adjustment_archive_immutable
before update or delete on private.finance_admin_adjustment_archive
for each row execute function private.reject_finance_immutable_mutation();

-- Se a migração estiver sendo reaplicada, retiramos temporariamente as travas
-- operacionais para que a limpeza idempotente possa terminar e as recriamos no fim.
drop trigger if exists finance_admin_adjustment_movement_guard
  on public.finance_cash_cycle_movements;
drop trigger if exists finance_admin_adjustment_expense_guard
  on public.finance_expenses;
drop trigger if exists finance_activity_cycle_guard
  on public.finance_entries;
drop trigger if exists finance_activity_cycle_guard
  on public.finance_expenses;
drop trigger if exists finance_activity_cycle_guard
  on public.finance_cash_cycle_movements;
drop trigger if exists finance_cash_cycle_policy_guard
  on public.finance_cash_cycles;

create temporary table finance_transition_current_cycles
on commit drop
as
select c.id, c.school_id, c.status
from public.finance_cash_cycles c
where c.start_date = date '2026-08-09'
  and c.end_date = date '2026-09-08';

do $assert_current_cycle$
declare
  v_current_count integer;
begin
  select pg_catalog.count(*)::integer
    into v_current_count
  from finance_transition_current_cycles;

  if v_current_count = 0 then
    raise exception 'finance_current_cycle_not_found: esperado ciclo 2026-08-09 a 2026-09-08';
  end if;

  if exists (
    select 1
    from finance_transition_current_cycles current_cycle
    where current_cycle.status is distinct from 'aberto'
  ) then
    raise exception 'finance_current_cycle_not_open: o ciclo 2026-08-09 a 2026-09-08 deve permanecer aberto durante a transição';
  end if;

  if exists (
    select 1
    from finance_transition_current_cycles current_cycle
    group by current_cycle.school_id
    having pg_catalog.count(*) <> 1
  ) then
    raise exception 'finance_current_cycle_duplicated: existe mais de um ciclo atual para a mesma escola';
  end if;
end;
$assert_current_cycle$;

create temporary table finance_transition_old_cycles
on commit drop
as
select c.id, c.school_id
from public.finance_cash_cycles c
where c.end_date < date '2026-08-09';

create temporary table finance_transition_movements_to_remove
on commit drop
as
select m.id
from public.finance_cash_cycle_movements m
where not exists (
    select 1
    from private.finance_admin_adjustment_audit protected_adjustment
    where protected_adjustment.movement_id = m.id
  )
  and (
    pg_catalog.lower(pg_catalog.btrim(coalesce(m.movement_type, ''))) in ('ajuste_credito', 'ajuste_debito')
    or pg_catalog.lower(pg_catalog.btrim(coalesce(m.source_bucket, ''))) = 'ajuste_administrativo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(m.destination_bucket, ''))) = 'ajuste_administrativo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(m.description, ''))) = 'ajuste administrativo do ciclo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(m.description, ''))) like '[ajuste administrativo]%'
    or exists (
      select 1
      from finance_transition_old_cycles old_cycle
      where old_cycle.id = m.cycle_id
    )
  );

create unique index on finance_transition_movements_to_remove (id);

create temporary table finance_transition_expenses_to_remove
on commit drop
as
select e.id
from public.finance_expenses e
where pg_catalog.lower(pg_catalog.btrim(coalesce(e.allocation_bucket, ''))) = 'ajuste_administrativo';

create unique index on finance_transition_expenses_to_remove (id);

-- Guarda destrutiva baseada na fotografia de produção validada em 03/09/2026.
-- Também aceita o estado pós-migração totalmente limpo para manter a reaplicação
-- idempotente. Qualquer estado intermediário ou conjunto inesperado aborta antes
-- do primeiro DELETE.
do $assert_cleanup_scope$
declare
  v_current_cycles integer;
  v_old_cycles integer;
  v_movements integer;
  v_expenses integer;
begin
  select pg_catalog.count(*)::integer into v_current_cycles
  from finance_transition_current_cycles;
  select pg_catalog.count(*)::integer into v_old_cycles
  from finance_transition_old_cycles;
  select pg_catalog.count(*)::integer into v_movements
  from finance_transition_movements_to_remove;
  select pg_catalog.count(*)::integer into v_expenses
  from finance_transition_expenses_to_remove;

  if v_current_cycles <> 2 then
    raise exception 'finance_cleanup_scope_changed: esperados 2 ciclos atuais, encontrados %',
      v_current_cycles;
  end if;

  if v_old_cycles = 0 and v_movements = 0 and v_expenses = 0 then
    return;
  end if;

  if v_old_cycles <> 3 or v_movements <> 107 or v_expenses <> 43 then
    raise exception 'finance_cleanup_scope_changed: esperado (3 ciclos antigos, 107 movimentos, 43 despesas administrativas), encontrado (%, %, %)',
      v_old_cycles, v_movements, v_expenses;
  end if;

  if exists (
    select 1
    from public.finance_cash_cycle_movements m
    join finance_transition_movements_to_remove target on target.id = m.id
    where m.cycle_id not in (select id from finance_transition_old_cycles)
  ) then
    raise exception 'finance_cleanup_scope_changed: movimento administrativo fora dos ciclos antigos';
  end if;

  if exists (
    select 1
    from public.finance_expenses e
    join finance_transition_expenses_to_remove target on target.id = e.id
    where e.cash_cycle_id is null
       or e.cash_cycle_id not in (select id from finance_transition_old_cycles)
  ) then
    raise exception 'finance_cleanup_scope_changed: despesa administrativa fora dos ciclos antigos';
  end if;
end;
$assert_cleanup_scope$;

-- Arquiva antes de excluir. Movimentos ordinários de ciclos apagados também
-- recebem uma fotografia, embora não sejam classificados como ajustes.
insert into private.finance_admin_adjustment_archive (
  source_table,
  source_id,
  school_id,
  cycle_id,
  classification,
  payload
)
select
  'finance_cash_cycle_movements',
  m.id,
  m.school_id,
  m.cycle_id,
  case
    when
      pg_catalog.lower(pg_catalog.btrim(coalesce(m.movement_type, ''))) in ('ajuste_credito', 'ajuste_debito')
      or pg_catalog.lower(pg_catalog.btrim(coalesce(m.source_bucket, ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(m.destination_bucket, ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(m.description, ''))) = 'ajuste administrativo do ciclo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(m.description, ''))) like '[ajuste administrativo]%'
      then 'legacy_administrative_adjustment'
    else 'prior_cycle_cleanup'
  end,
  pg_catalog.to_jsonb(m)
from public.finance_cash_cycle_movements m
join finance_transition_movements_to_remove target on target.id = m.id
on conflict (source_table, source_id) do nothing;

insert into private.finance_admin_adjustment_archive (
  source_table,
  source_id,
  school_id,
  cycle_id,
  classification,
  payload
)
select
  'finance_cash_cycles',
  c.id,
  c.school_id,
  c.id,
  'prior_cycle_cleanup',
  pg_catalog.to_jsonb(c)
from public.finance_cash_cycles c
join finance_transition_old_cycles target on target.id = c.id
on conflict (source_table, source_id) do nothing;

insert into private.finance_admin_adjustment_archive (
  source_table,
  source_id,
  school_id,
  cycle_id,
  classification,
  payload
)
select
  'finance_expenses',
  e.id,
  e.school_id,
  case
    when coalesce(
      nullif(pg_catalog.to_jsonb(e) ->> 'cash_cycle_id', ''),
      nullif(pg_catalog.to_jsonb(e) ->> 'cycle_id', '')
    ) ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
    then coalesce(
      nullif(pg_catalog.to_jsonb(e) ->> 'cash_cycle_id', ''),
      nullif(pg_catalog.to_jsonb(e) ->> 'cycle_id', '')
    )::uuid
    else null
  end,
  'legacy_administrative_expense',
  pg_catalog.to_jsonb(e)
from public.finance_expenses e
join finance_transition_expenses_to_remove target on target.id = e.id
on conflict (source_table, source_id) do nothing;

-- Antes de desligar vínculos de despesas/entradas ordinárias com ciclos antigos,
-- guarda a linha completa. Isso permite reconstruir exatamente a associação
-- histórica mesmo em versões do esquema que usam nomes de coluna diferentes.
do $archive_old_cycle_links$
declare
  v_target record;
begin
  for v_target in
    select table_name, column_name
    from information_schema.columns
    where table_schema = 'public'
      and (
        (table_name = 'finance_expenses' and column_name in ('cash_cycle_id', 'cycle_id'))
        or (table_name = 'finance_entries' and column_name in ('cash_cycle_id', 'cycle_id'))
      )
  loop
    execute pg_catalog.format(
      'insert into private.finance_admin_adjustment_archive (
         source_table, source_id, school_id, cycle_id, classification, payload
       )
       select %1$L, preserved.id, preserved.school_id,
              preserved.%2$I::text::uuid,
              ''prior_cycle_link_detached'', pg_catalog.to_jsonb(preserved)
       from public.%3$I preserved
       where preserved.%2$I in (select id from finance_transition_old_cycles)
       on conflict (source_table, source_id) do nothing',
      v_target.table_name,
      v_target.column_name,
      v_target.table_name
    );
  end loop;
end;
$archive_old_cycle_links$;

-- Fotografa também as linhas ordinárias que terão somente um vínculo cruzado
-- removido. Elas podem não apontar diretamente para um ciclo antigo e, sem
-- esta etapa, a referência movimento<->despesa seria perdida no arquivo.
do $archive_cross_links_before_detach$
declare
  v_column record;
begin
  for v_column in
    select column_name
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'finance_expenses'
      and column_name in ('related_cash_movement_id', 'cash_movement_id')
  loop
    execute pg_catalog.format(
      'insert into private.finance_admin_adjustment_archive (
         source_table, source_id, school_id, cycle_id, classification, payload
       )
       select ''finance_expenses'', e.id, e.school_id,
              case
                when coalesce(
                  nullif(pg_catalog.to_jsonb(e) ->> ''cash_cycle_id'', ''''),
                  nullif(pg_catalog.to_jsonb(e) ->> ''cycle_id'', '''')
                ) ~* ''^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$''
                then coalesce(
                  nullif(pg_catalog.to_jsonb(e) ->> ''cash_cycle_id'', ''''),
                  nullif(pg_catalog.to_jsonb(e) ->> ''cycle_id'', '''')
                )::uuid
                else null
              end,
              ''movement_link_detached'', pg_catalog.to_jsonb(e)
       from public.finance_expenses e
       where e.%1$I in (select id from finance_transition_movements_to_remove)
       on conflict (source_table, source_id) do nothing',
      v_column.column_name
    );
  end loop;

  for v_column in
    select column_name
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'finance_cash_cycle_movements'
      and column_name in ('related_expense_id', 'expense_id')
  loop
    execute pg_catalog.format(
      'insert into private.finance_admin_adjustment_archive (
         source_table, source_id, school_id, cycle_id, classification, payload
       )
       select ''finance_cash_cycle_movements'', m.id, m.school_id, m.cycle_id,
              ''expense_link_detached'', pg_catalog.to_jsonb(m)
       from public.finance_cash_cycle_movements m
       where m.%1$I in (select id from finance_transition_expenses_to_remove)
         and m.id not in (select id from finance_transition_movements_to_remove)
       on conflict (source_table, source_id) do nothing',
      v_column.column_name
    );
  end loop;
end;
$archive_cross_links_before_detach$;

-- Desfaz referências cruzadas apenas quando a coluna realmente existe. Assim a
-- migração tolera as duas grafias já usadas pelo portal em versões diferentes.
do $detach_movement_links$
declare
  v_column record;
  v_has_rows boolean;
begin
  for v_column in
    select column_name, is_nullable
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'finance_expenses'
      and column_name in ('related_cash_movement_id', 'cash_movement_id')
  loop
    execute pg_catalog.format(
      'select exists (
         select 1 from public.finance_expenses e
         where e.%1$I in (select id from finance_transition_movements_to_remove)
       )',
      v_column.column_name
    ) into v_has_rows;

    if v_has_rows and v_column.is_nullable <> 'YES' then
      raise exception 'finance_cleanup_blocked: %.% não aceita NULL',
        'finance_expenses', v_column.column_name;
    end if;

    if v_has_rows then
      execute pg_catalog.format(
        'update public.finance_expenses e set %1$I = null
         where e.%1$I in (select id from finance_transition_movements_to_remove)',
        v_column.column_name
      );
    end if;
  end loop;

  for v_column in
    select column_name, is_nullable
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'finance_cash_cycle_movements'
      and column_name in ('related_expense_id', 'expense_id')
  loop
    execute pg_catalog.format(
      'select exists (
         select 1 from public.finance_cash_cycle_movements m
         where m.%1$I in (select id from finance_transition_expenses_to_remove)
           and m.id not in (select id from finance_transition_movements_to_remove)
       )',
      v_column.column_name
    ) into v_has_rows;

    if v_has_rows and v_column.is_nullable <> 'YES' then
      raise exception 'finance_cleanup_blocked: %.% não aceita NULL',
        'finance_cash_cycle_movements', v_column.column_name;
    end if;

    if v_has_rows then
      execute pg_catalog.format(
        'update public.finance_cash_cycle_movements m set %1$I = null
         where m.%1$I in (select id from finance_transition_expenses_to_remove)
           and m.id not in (select id from finance_transition_movements_to_remove)',
        v_column.column_name
      );
    end if;
  end loop;
end;
$detach_movement_links$;

delete from public.finance_cash_cycle_movements m
where m.id in (select id from finance_transition_movements_to_remove);

delete from public.finance_expenses e
where e.id in (select id from finance_transition_expenses_to_remove);

-- Preserva as linhas ordinárias: se alguma versão do esquema tiver vínculo
-- direto com o ciclo, ele é apenas desligado antes da remoção do ciclo antigo.
do $detach_old_cycles$
declare
  v_target record;
  v_has_rows boolean;
begin
  for v_target in
    select table_name, column_name, is_nullable
    from information_schema.columns
    where table_schema = 'public'
      and (
        (table_name = 'finance_expenses' and column_name in ('cash_cycle_id', 'cycle_id'))
        or (table_name = 'finance_entries' and column_name in ('cash_cycle_id', 'cycle_id'))
      )
  loop
    execute pg_catalog.format(
      'select exists (
         select 1 from public.%1$I row_to_preserve
         where row_to_preserve.%2$I in (select id from finance_transition_old_cycles)
       )',
      v_target.table_name,
      v_target.column_name
    ) into v_has_rows;

    if v_has_rows and v_target.is_nullable <> 'YES' then
      raise exception 'finance_cleanup_blocked: %.% não aceita NULL; linhas ordinárias foram preservadas e a transação foi cancelada',
        v_target.table_name, v_target.column_name;
    end if;

    if v_has_rows then
      execute pg_catalog.format(
        'update public.%1$I row_to_preserve set %2$I = null
         where row_to_preserve.%2$I in (select id from finance_transition_old_cycles)',
        v_target.table_name,
        v_target.column_name
      );
    end if;
  end loop;
end;
$detach_old_cycles$;

delete from public.finance_cash_cycles c
where c.id in (select id from finance_transition_old_cycles);

do $assert_current_cycle_unchanged$
declare
  v_missing integer;
begin
  select pg_catalog.count(*)::integer
    into v_missing
  from finance_transition_current_cycles expected
  where not exists (
    select 1
    from public.finance_cash_cycles current_cycle
    where current_cycle.id = expected.id
      and current_cycle.school_id = expected.school_id
      and current_cycle.start_date = date '2026-08-09'
      and current_cycle.end_date = date '2026-09-08'
      and current_cycle.status is not distinct from expected.status
  );

  if v_missing <> 0 then
    raise exception 'finance_current_cycle_changed: a limpeza tentou alterar o ciclo atual';
  end if;
end;
$assert_current_cycle_unchanged$;

create or replace function private.is_valid_finance_cycle_dates(
  p_start_date date,
  p_end_date date
)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select coalesce((
    (p_start_date = date '2026-08-09' and p_end_date = date '2026-09-08')
    or (
      p_start_date >= date '2026-09-11'
      and extract(day from p_start_date) = 11
      and p_end_date = (p_start_date + interval '1 month' - interval '1 day')::date
    )
  ), false);
$$;

revoke all on function private.is_valid_finance_cycle_dates(date, date)
  from public, anon, authenticated;

-- A limpeza deixa somente o ciclo de transição e ciclos futuros 11--10.
-- Falhamos de forma atômica diante de datas, chaves ou sobreposições já
-- inconsistentes, em vez de instalar uma trava sobre dados inválidos.
do $assert_remaining_cycles_valid$
begin
  if exists (
    select 1
    from public.finance_cash_cycles c
    where not private.is_valid_finance_cycle_dates(c.start_date, c.end_date)
       or c.cycle_key is distinct from pg_catalog.to_char(c.start_date, 'YYYY-MM')
       or c.status not in ('aberto', 'fechado')
       or (c.status = 'aberto' and (c.closed_at is not null or c.closed_by is not null))
       or (c.status = 'fechado' and (c.closed_at is null or c.closed_by is null))
  ) then
    raise exception 'finance_invalid_existing_cycle: ciclo remanescente fora da política 09/08--08/09 ou 11--10';
  end if;

  if exists (
    select 1
    from public.finance_cash_cycles first_cycle
    join public.finance_cash_cycles second_cycle
      on second_cycle.school_id = first_cycle.school_id
     and second_cycle.id <> first_cycle.id
     and first_cycle.start_date <= second_cycle.end_date
     and second_cycle.start_date <= first_cycle.end_date
  ) then
    raise exception 'finance_overlapping_cycles: existem ciclos sobrepostos para a mesma escola';
  end if;
end;
$assert_remaining_cycles_valid$;

create unique index if not exists finance_cash_cycles_school_cycle_key_unique
  on public.finance_cash_cycles (school_id, cycle_key);

create or replace function public.create_finance_admin_adjustment(
  p_request_id uuid,
  p_school_id uuid,
  p_cycle_id uuid,
  p_movement_date date,
  p_amount numeric,
  p_source_bucket text,
  p_destination_bucket text,
  p_description text,
  p_notes text,
  p_reason text,
  p_caller_id uuid,
  p_authorizer_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_existing private.finance_admin_adjustment_audit%rowtype;
  v_caller_role text;
  v_caller_school_id uuid;
  v_authorizer_role text;
  v_authorizer_school_id uuid;
  v_cycle_start date;
  v_cycle_end date;
  v_cycle_key text;
  v_cycle_status text;
  v_today_manaus date := (pg_catalog.now() at time zone 'America/Manaus')::date;
  v_is_transition_cycle boolean;
  v_is_future_cycle boolean;
  v_source_bucket text := nullif(pg_catalog.lower(pg_catalog.btrim(coalesce(p_source_bucket, ''))), '');
  v_destination_bucket text := nullif(pg_catalog.lower(pg_catalog.btrim(coalesce(p_destination_bucket, ''))), '');
  v_description text := pg_catalog.btrim(coalesce(p_description, ''));
  v_notes text := nullif(pg_catalog.btrim(coalesce(p_notes, '')), '');
  v_reason text := pg_catalog.btrim(coalesce(p_reason, ''));
  v_movement_type text;
  v_movement_id uuid;
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    raise exception 'finance_forbidden' using errcode = '42501';
  end if;

  if p_request_id is null
     or p_school_id is null
     or p_cycle_id is null
     or p_movement_date is null
     or p_caller_id is null
     or p_authorizer_id is null then
    raise exception 'finance_invalid_request' using errcode = '22023';
  end if;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('finance-admin-adjustment:' || p_request_id::text, 0)
  );

  select audit_row.*
    into v_existing
  from private.finance_admin_adjustment_audit audit_row
  where audit_row.request_id = p_request_id;

  if found then
    if v_existing.school_id is distinct from p_school_id
       or v_existing.cycle_id is distinct from p_cycle_id
       or v_existing.caller_id is distinct from p_caller_id
       or v_existing.authorizer_id is distinct from p_authorizer_id
       or v_existing.movement_date is distinct from p_movement_date
       or v_existing.amount is distinct from pg_catalog.round(p_amount, 2)
       or v_existing.source_bucket is distinct from v_source_bucket
       or v_existing.destination_bucket is distinct from v_destination_bucket
       or v_existing.description is distinct from v_description
       or v_existing.notes is distinct from v_notes
       or v_existing.reason is distinct from v_reason then
      raise exception 'finance_request_id_conflict' using errcode = '23505';
    end if;

    return pg_catalog.jsonb_build_object(
      'status', 'already_processed',
      'movement_id', v_existing.movement_id,
      'request_id', v_existing.request_id
    );
  end if;

  select pg_catalog.lower(pg_catalog.btrim(p.role)), p.school_id
    into v_caller_role, v_caller_school_id
  from public.profiles p
  where p.id = p_caller_id;

  if v_caller_role is null
     or v_caller_role not in ('integro_admin', 'diretor', 'coordenacao')
     or (v_caller_role <> 'integro_admin' and v_caller_school_id is distinct from p_school_id) then
    raise exception 'finance_forbidden' using errcode = '42501';
  end if;

  select pg_catalog.lower(pg_catalog.btrim(p.role)), p.school_id
    into v_authorizer_role, v_authorizer_school_id
  from public.profiles p
  where p.id = p_authorizer_id;

  if v_authorizer_role is null
     or v_authorizer_role not in ('integro_admin', 'diretor')
     or (v_authorizer_role = 'diretor' and v_authorizer_school_id is distinct from p_school_id) then
    raise exception 'finance_forbidden' using errcode = '42501';
  end if;

  select c.start_date, c.end_date, c.cycle_key, c.status
    into v_cycle_start, v_cycle_end, v_cycle_key, v_cycle_status
  from public.finance_cash_cycles c
  where c.id = p_cycle_id
    and c.school_id = p_school_id
  for share;

  v_is_transition_cycle :=
    v_cycle_start = date '2026-08-09'
    and v_cycle_end = date '2026-09-08';
  v_is_future_cycle :=
    v_cycle_start >= date '2026-09-11'
    and extract(day from v_cycle_start) = 11
    and v_cycle_end = (v_cycle_start + interval '1 month' - interval '1 day')::date;

  if not private.is_valid_finance_cycle_dates(v_cycle_start, v_cycle_end)
     or not (v_is_transition_cycle or v_is_future_cycle)
     or v_cycle_key is distinct from pg_catalog.to_char(v_cycle_start, 'YYYY-MM')
     or v_cycle_status is distinct from 'aberto'
     or not (
       -- Exceção exclusiva desta RPC protegida: em 09 e 10/09 o ajuste pode
       -- ser registrado, mas sua data contábil continua limitada a 08/09.
       (v_is_transition_cycle and v_today_manaus between v_cycle_start and date '2026-09-10')
       or (v_is_future_cycle and v_today_manaus between v_cycle_start and v_cycle_end)
     )
     or p_movement_date not between v_cycle_start and v_cycle_end then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;

  if p_amount is null
     or p_amount <= 0
     or p_amount > 999999999.99
     or p_amount <> pg_catalog.round(p_amount, 2) then
    raise exception 'finance_invalid_amount' using errcode = '22023';
  end if;

  if v_source_bucket is not null and v_source_bucket not in (
       'operacoes', 'fundo_caixa', 'acionista_1', 'acionista_2',
       'acionista_3', 'ajuste_administrativo'
     ) then
    raise exception 'finance_invalid_source_bucket' using errcode = '22023';
  end if;
  if v_destination_bucket is not null and v_destination_bucket not in (
       'operacoes', 'fundo_caixa', 'acionista_1', 'acionista_2',
       'acionista_3', 'ajuste_administrativo'
     ) then
    raise exception 'finance_invalid_destination_bucket' using errcode = '22023';
  end if;
  if (v_source_bucket is null and v_destination_bucket is null)
     or v_source_bucket is not distinct from v_destination_bucket then
    raise exception 'finance_invalid_route' using errcode = '22023';
  end if;

  if pg_catalog.char_length(v_description) not between 3 and 200
     or pg_catalog.char_length(v_reason) not between 3 and 500
     or pg_catalog.char_length(coalesce(v_notes, '')) > 1000 then
    raise exception 'finance_invalid_text' using errcode = '22023';
  end if;

  v_movement_type := case
    when v_source_bucket is not null and v_destination_bucket is not null then 'transferencia'
    when v_destination_bucket is not null then 'ajuste_credito'
    else 'ajuste_debito'
  end;

  -- O GUC local é verificado pelo trigger: somente esta RPC pode inserir um
  -- movimento classificado como ajuste administrativo.
  perform pg_catalog.set_config(
    'app.finance_admin_adjustment_request_id',
    p_request_id::text,
    true
  );

  insert into public.finance_cash_cycle_movements (
    school_id,
    cycle_id,
    movement_type,
    source_bucket,
    destination_bucket,
    amount,
    movement_date,
    description,
    notes,
    created_by
  ) values (
    p_school_id,
    p_cycle_id,
    v_movement_type,
    v_source_bucket,
    v_destination_bucket,
    pg_catalog.round(p_amount, 2),
    p_movement_date,
    '[AJUSTE ADMINISTRATIVO] Ajuste autorizado',
    '[AJUSTE ADMINISTRATIVO] Detalhes protegidos na auditoria privada.',
    p_caller_id
  )
  returning id into v_movement_id;

  insert into private.finance_admin_adjustment_audit (
    request_id,
    movement_id,
    school_id,
    cycle_id,
    caller_id,
    authorizer_id,
    authorizer_role,
    movement_date,
    amount,
    source_bucket,
    destination_bucket,
    description,
    notes,
    reason
  ) values (
    p_request_id,
    v_movement_id,
    p_school_id,
    p_cycle_id,
    p_caller_id,
    p_authorizer_id,
    v_authorizer_role,
    p_movement_date,
    pg_catalog.round(p_amount, 2),
    v_source_bucket,
    v_destination_bucket,
    v_description,
    v_notes,
    v_reason
  );

  return pg_catalog.jsonb_build_object(
    'status', 'created',
    'movement_id', v_movement_id,
    'request_id', p_request_id
  );
end;
$$;

revoke all on function public.create_finance_admin_adjustment(
  uuid, uuid, uuid, date, numeric, text, text, text, text, text, uuid, uuid
) from public, anon, authenticated;
grant execute on function public.create_finance_admin_adjustment(
  uuid, uuid, uuid, date, numeric, text, text, text, text, text, uuid, uuid
) to service_role;

comment on function public.create_finance_admin_adjustment(
  uuid, uuid, uuid, date, numeric, text, text, text, text, text, uuid, uuid
) is
  'RPC transacional exclusiva da service_role: valida solicitante/autorizador/ciclo, cria somente movement + auditoria e oferece idempotência por request_id.';

create or replace function private.guard_finance_cash_cycle_policy()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_today_manaus date := (pg_catalog.now() at time zone 'America/Manaus')::date;
  v_earliest_close_date date;
  v_old_status text;
  v_new_status text;
begin
  if tg_op = 'DELETE' then
    raise exception 'finance_cycle_delete_not_allowed' using errcode = '42501';
  end if;

  v_new_status := pg_catalog.lower(pg_catalog.btrim(coalesce(new.status, '')));
  if v_new_status not in ('aberto', 'fechado')
     or new.status is distinct from v_new_status then
    raise exception 'finance_invalid_cycle_status' using errcode = '22023';
  end if;

  if not private.is_valid_finance_cycle_dates(new.start_date, new.end_date)
     or new.cycle_key is distinct from pg_catalog.to_char(new.start_date, 'YYYY-MM') then
    raise exception 'finance_invalid_cycle_dates' using errcode = '22023';
  end if;

  if tg_op = 'INSERT' then
    if new.start_date = date '2026-08-09'
       and new.end_date = date '2026-09-08'
       and v_today_manaus not between new.start_date and new.end_date then
      raise exception 'finance_transition_cycle_cannot_be_recreated' using errcode = '22023';
    elsif new.start_date >= date '2026-09-11'
       and v_today_manaus not between new.start_date and new.end_date then
      raise exception 'finance_cycle_can_only_be_created_when_current' using errcode = '22023';
    end if;

    if v_new_status <> 'aberto' then
      raise exception 'finance_new_cycle_must_be_open' using errcode = '22023';
    end if;

    if new.closed_at is not null or new.closed_by is not null then
      raise exception 'finance_open_cycle_cannot_have_closing_metadata' using errcode = '22023';
    end if;
  end if;

  if tg_op = 'UPDATE' then
    v_old_status := pg_catalog.lower(pg_catalog.btrim(coalesce(old.status, '')));

    if v_old_status <> 'aberto' then
      raise exception 'finance_closed_cycle_is_immutable' using errcode = '42501';
    end if;

    if new.id is distinct from old.id
       or new.school_id is distinct from old.school_id
       or new.cycle_key is distinct from old.cycle_key
       or new.start_date is distinct from old.start_date
       or new.end_date is distinct from old.end_date
       or new.created_by is distinct from old.created_by
       or new.created_at is distinct from old.created_at then
      raise exception 'finance_cycle_identity_is_immutable' using errcode = '42501';
    end if;

    if v_new_status = 'aberto'
       and (new.closed_at is not null or new.closed_by is not null) then
      raise exception 'finance_open_cycle_cannot_have_closing_metadata' using errcode = '22023';
    end if;

    if v_new_status = 'fechado'
       and (new.closed_at is null or new.closed_by is null) then
      raise exception 'finance_closed_cycle_requires_metadata' using errcode = '22023';
    end if;

    v_earliest_close_date := case
      when new.start_date = date '2026-08-09'
       and new.end_date = date '2026-09-08'
        then date '2026-09-10'
      else new.end_date
    end;

    if v_new_status = 'fechado' and v_today_manaus < v_earliest_close_date then
      raise exception 'finance_cycle_cannot_close_early' using errcode = '22023';
    end if;
  end if;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('finance-cycle:' || new.school_id::text, 0)
  );

  if exists (
    select 1
    from public.finance_cash_cycles other_cycle
    where other_cycle.school_id = new.school_id
      and other_cycle.id is distinct from new.id
      and new.start_date <= other_cycle.end_date
      and other_cycle.start_date <= new.end_date
  ) then
    raise exception 'finance_overlapping_cycles' using errcode = '23505';
  end if;

  return new;
end;
$$;

-- Centraliza a regra temporal para todas as tabelas financeiras. Na exceção de
-- fechamento de 09 e 10/09, somente o INSERT administrativo autenticado pela
-- RPC pode usar o ciclo de transição, sempre com data contábil até 08/09.
create or replace function private.assert_finance_cycle_writable(
  p_school_id uuid,
  p_cycle_id uuid,
  p_activity_date date,
  p_allow_transition_closing boolean default false
)
returns void
language plpgsql
set search_path = ''
as $$
declare
  v_cycle_id uuid;
  v_cycle_start date;
  v_cycle_end date;
  v_cycle_key text;
  v_cycle_status text;
  v_today_manaus date := (pg_catalog.now() at time zone 'America/Manaus')::date;
begin
  if p_school_id is null or p_activity_date is null then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;

  if p_cycle_id is not null then
    select c.id, c.start_date, c.end_date, c.cycle_key, c.status
      into v_cycle_id, v_cycle_start, v_cycle_end, v_cycle_key, v_cycle_status
    from public.finance_cash_cycles c
    where c.id = p_cycle_id
      and c.school_id = p_school_id
    for share;
  else
    select c.id, c.start_date, c.end_date, c.cycle_key, c.status
      into v_cycle_id, v_cycle_start, v_cycle_end, v_cycle_key, v_cycle_status
    from public.finance_cash_cycles c
    where c.school_id = p_school_id
      and p_activity_date between c.start_date and c.end_date
    order by c.start_date desc
    limit 1
    for share;
  end if;

  if v_cycle_id is null
     or not private.is_valid_finance_cycle_dates(v_cycle_start, v_cycle_end)
     or v_cycle_key is distinct from pg_catalog.to_char(v_cycle_start, 'YYYY-MM')
     or v_cycle_status is distinct from 'aberto'
     or p_activity_date not between v_cycle_start and v_cycle_end then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;

  if v_cycle_start = date '2026-08-09'
     and v_cycle_end = date '2026-09-08' then
    if v_today_manaus between v_cycle_start and v_cycle_end then
      return;
    end if;

    if p_allow_transition_closing
       and v_today_manaus between date '2026-09-09' and date '2026-09-10' then
      return;
    end if;

    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;

  if v_today_manaus not between v_cycle_start and v_cycle_end then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;
end;
$$;

create or replace function private.guard_finance_activity_cycle()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_row jsonb;
  v_school_id uuid;
  v_cycle_id uuid;
  v_activity_date date;
  v_is_secure_admin_insert boolean := false;
  v_rpc_request_id text;
begin
  if tg_op = 'DELETE' then
    v_row := pg_catalog.to_jsonb(old);
  else
    v_row := pg_catalog.to_jsonb(new);
  end if;

  if coalesce(v_row ->> 'school_id', '')
       !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;
  v_school_id := (v_row ->> 'school_id')::uuid;

  if coalesce(nullif(v_row ->> 'cycle_id', ''), nullif(v_row ->> 'cash_cycle_id', ''))
       ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
    v_cycle_id := coalesce(nullif(v_row ->> 'cycle_id', ''), nullif(v_row ->> 'cash_cycle_id', ''))::uuid;
  end if;

  begin
    v_activity_date := coalesce(
      nullif(v_row ->> 'movement_date', ''),
      nullif(v_row ->> 'expense_date', ''),
      nullif(v_row ->> 'entry_date', '')
    )::date;
  exception when others then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end;

  v_rpc_request_id := nullif(
    pg_catalog.current_setting('app.finance_admin_adjustment_request_id', true),
    ''
  );
  v_is_secure_admin_insert :=
    tg_table_name = 'finance_cash_cycle_movements'
    and tg_op = 'INSERT'
    and coalesce(auth.role(), '') = 'service_role'
    and v_rpc_request_id is not null
    and (
      pg_catalog.lower(pg_catalog.btrim(coalesce(v_row ->> 'movement_type', ''))) in ('ajuste_credito', 'ajuste_debito')
      or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row ->> 'source_bucket', ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row ->> 'destination_bucket', ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row ->> 'description', ''))) = 'ajuste administrativo do ciclo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row ->> 'description', ''))) like '[ajuste administrativo]%'
    );

  perform private.assert_finance_cycle_writable(
    v_school_id,
    v_cycle_id,
    v_activity_date,
    v_is_secure_admin_insert
  );

  if tg_op = 'UPDATE' then
    v_row := pg_catalog.to_jsonb(old);
    v_school_id := (v_row ->> 'school_id')::uuid;
    v_cycle_id := null;
    if coalesce(nullif(v_row ->> 'cycle_id', ''), nullif(v_row ->> 'cash_cycle_id', ''))
         ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      v_cycle_id := coalesce(nullif(v_row ->> 'cycle_id', ''), nullif(v_row ->> 'cash_cycle_id', ''))::uuid;
    end if;
    v_activity_date := coalesce(
      nullif(v_row ->> 'movement_date', ''),
      nullif(v_row ->> 'expense_date', ''),
      nullif(v_row ->> 'entry_date', '')
    )::date;
    perform private.assert_finance_cycle_writable(
      v_school_id,
      v_cycle_id,
      v_activity_date,
      false
    );
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

revoke all on function private.guard_finance_cash_cycle_policy()
  from public, anon, authenticated;
revoke all on function private.assert_finance_cycle_writable(uuid, uuid, date, boolean)
  from public, anon, authenticated;
revoke all on function private.guard_finance_activity_cycle()
  from public, anon, authenticated;

create or replace function private.guard_finance_admin_movement_mutation()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_row public.finance_cash_cycle_movements%rowtype;
  v_is_administrative boolean;
  v_rpc_request_id text;
begin
  if tg_op = 'DELETE' then
    v_row := old;
  else
    v_row := new;
  end if;
  v_is_administrative :=
    pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.movement_type, ''))) in ('ajuste_credito', 'ajuste_debito')
    or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.source_bucket, ''))) = 'ajuste_administrativo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.destination_bucket, ''))) = 'ajuste_administrativo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.description, ''))) = 'ajuste administrativo do ciclo'
    or pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.description, ''))) like '[ajuste administrativo]%';

  if tg_op = 'UPDATE' then
    v_is_administrative := v_is_administrative
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.movement_type, ''))) in ('ajuste_credito', 'ajuste_debito')
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.source_bucket, ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.destination_bucket, ''))) = 'ajuste_administrativo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.description, ''))) = 'ajuste administrativo do ciclo'
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.description, ''))) like '[ajuste administrativo]%';
  end if;

  if not v_is_administrative then
    if tg_op = 'DELETE' then
      return old;
    end if;
    return new;
  end if;

  v_rpc_request_id := nullif(
    pg_catalog.current_setting('app.finance_admin_adjustment_request_id', true),
    ''
  );

  if tg_op <> 'INSERT'
     or coalesce(auth.role(), '') <> 'service_role'
     or v_rpc_request_id is null then
    raise exception 'finance_admin_adjustment_requires_secure_rpc' using errcode = '42501';
  end if;

  return new;
end;
$$;

create or replace function private.guard_finance_admin_expense_mutation()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_row public.finance_expenses%rowtype;
  v_is_administrative boolean;
begin
  if tg_op = 'DELETE' then
    v_row := old;
  else
    v_row := new;
  end if;
  v_is_administrative :=
    pg_catalog.lower(pg_catalog.btrim(coalesce(v_row.allocation_bucket, ''))) = 'ajuste_administrativo';

  if tg_op = 'UPDATE' then
    v_is_administrative := v_is_administrative
      or pg_catalog.lower(pg_catalog.btrim(coalesce(old.allocation_bucket, ''))) = 'ajuste_administrativo';
  end if;

  if v_is_administrative then
    raise exception 'finance_admin_expense_is_not_allowed' using errcode = '42501';
  end if;

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

revoke all on function private.guard_finance_admin_movement_mutation()
  from public, anon, authenticated;
revoke all on function private.guard_finance_admin_expense_mutation()
  from public, anon, authenticated;

create trigger finance_cash_cycle_policy_guard
before insert or update or delete on public.finance_cash_cycles
for each row execute function private.guard_finance_cash_cycle_policy();

create trigger finance_activity_cycle_guard
before insert or update or delete on public.finance_entries
for each row execute function private.guard_finance_activity_cycle();

create trigger finance_activity_cycle_guard
before insert or update or delete on public.finance_expenses
for each row execute function private.guard_finance_activity_cycle();

create trigger finance_activity_cycle_guard
before insert or update or delete on public.finance_cash_cycle_movements
for each row execute function private.guard_finance_activity_cycle();

create trigger finance_admin_adjustment_movement_guard
before insert or update or delete on public.finance_cash_cycle_movements
for each row execute function private.guard_finance_admin_movement_mutation();

create trigger finance_admin_adjustment_expense_guard
before insert or update or delete on public.finance_expenses
for each row execute function private.guard_finance_admin_expense_mutation();

commit;
