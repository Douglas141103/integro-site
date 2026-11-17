-- School-scoped exception for the authorized 2026 vacation and January return.
create or replace function private.finance_cycle_matches_policy(p_school uuid, p_start date, p_end date, p_key text)
returns boolean language sql immutable set search_path = '' as $$
select coalesce(case when p_school = 'da5d33a5-616a-4abc-8f88-78f5ecb85cd4'::uuid and p_start between date '2026-11-11' and date '2027-01-15' then
  (p_start=date '2026-11-11' and p_end=date '2026-11-16' and p_key='2026-11')
  or (p_start=date '2026-11-17' and p_end=date '2027-01-14' and p_key='ferias-2026')
  or (p_start=date '2027-01-15' and p_end=date '2027-02-10' and p_key='2027-01')
else private.is_valid_finance_cycle_dates(p_start,p_end) and p_key=pg_catalog.to_char(p_start,'YYYY-MM') end,false);
$$;
revoke all on function private.finance_cycle_matches_policy(uuid,date,date,text) from public,anon,authenticated;

CREATE OR REPLACE FUNCTION private.guard_finance_cash_cycle_policy()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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

  if not private.finance_cycle_matches_policy(new.school_id,new.start_date,new.end_date,new.cycle_key) then
    raise exception 'finance_invalid_cycle_dates' using errcode = '22023';
  end if;

  if tg_op = 'INSERT' then
    if new.start_date = date '2026-08-09'
       and new.end_date = date '2026-09-08'
       and v_today_manaus not between new.start_date and new.end_date then
      raise exception 'finance_transition_cycle_cannot_be_recreated' using errcode = '22023';
    elsif new.start_date >= date '2026-09-11'
       and v_today_manaus not between new.start_date and new.end_date
       and not (new.school_id='da5d33a5-616a-4abc-8f88-78f5ecb85cd4'::uuid and new.cycle_key='ferias-2026' and v_today_manaus=date '2026-11-16') then
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
       or (new.end_date is distinct from old.end_date and not (
         new.school_id='da5d33a5-616a-4abc-8f88-78f5ecb85cd4'::uuid and old.start_date=date '2026-11-11'
         and old.end_date=date '2026-12-10' and new.end_date=date '2026-11-16'
         and v_new_status='fechado' and v_today_manaus=date '2026-11-16'
         and not exists(select 1 from public.finance_entries where school_id=new.school_id and entry_date>new.end_date and entry_date<=old.end_date)
         and not exists(select 1 from public.finance_expenses where school_id=new.school_id and expense_date>new.end_date and expense_date<=old.end_date)
         and not exists(select 1 from public.finance_cash_cycle_movements where school_id=new.school_id and movement_date>new.end_date and movement_date<=old.end_date)
       ))
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
$function$;

CREATE OR REPLACE FUNCTION private.assert_finance_cycle_writable(p_school_id uuid, p_cycle_id uuid, p_activity_date date, p_allow_transition_closing boolean DEFAULT false)
 RETURNS void
 LANGUAGE plpgsql
 SET search_path TO ''
AS $function$
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
     or not private.finance_cycle_matches_policy(p_school_id,v_cycle_start,v_cycle_end,v_cycle_key)
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

  if v_today_manaus not between v_cycle_start and v_cycle_end
     and not (p_school_id='da5d33a5-616a-4abc-8f88-78f5ecb85cd4'::uuid and v_cycle_key='ferias-2026' and v_today_manaus=date '2026-11-16' and p_activity_date=date '2026-11-17') then
    raise exception 'finance_cycle_not_available' using errcode = '22023';
  end if;
end;
$function$;

CREATE OR REPLACE FUNCTION public.create_finance_admin_adjustment(p_request_id uuid, p_school_id uuid, p_cycle_id uuid, p_movement_date date, p_amount numeric, p_source_bucket text, p_destination_bucket text, p_description text, p_notes text, p_reason text, p_caller_id uuid, p_authorizer_id uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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

  select pg_catalog.lower(pg_catalog.btrim(p.role::text)), p.school_id
    into v_caller_role, v_caller_school_id
  from public.profiles p
  where p.id = p_caller_id;

  if v_caller_role is null
     or v_caller_role not in ('integro_admin', 'diretor', 'coordenacao')
     or (v_caller_role <> 'integro_admin' and v_caller_school_id is distinct from p_school_id) then
    raise exception 'finance_forbidden' using errcode = '42501';
  end if;

  select pg_catalog.lower(pg_catalog.btrim(p.role::text)), p.school_id
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
    and private.finance_cycle_matches_policy(p_school_id,v_cycle_start,v_cycle_end,v_cycle_key);

  if not private.finance_cycle_matches_policy(p_school_id,v_cycle_start,v_cycle_end,v_cycle_key)
     or not (v_is_transition_cycle or v_is_future_cycle)
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
$function$;

-- INTGEM ROUTING
CREATE OR REPLACE FUNCTION private.intgem_post_to_finance(p_order uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare
  o private.intgem_orders%rowtype;
  c public.finance_cash_cycles%rowtype;
  target_school constant uuid := 'da5d33a5-616a-4abc-8f88-78f5ecb85cd4';
  today_local date := (now() at time zone 'America/Manaus')::date;
  sale_date date;
  cycle_start date;
  receipt_id uuid;
  buyer_label text;
begin
  select * into o from private.intgem_orders where id = p_order for update;
  if o.id is null or o.status <> 'paid' then return false; end if;
  insert into private.intgem_finance_posts(order_id) values(o.id) on conflict do nothing;
  if exists(select 1 from private.intgem_finance_posts where order_id = o.id and entry_id is not null) then
    return true;
  end if;

  -- A failed cash insert must not undo the customer's already verified gem credit.
  -- This subtransaction rolls back both the receipt and its link on any failure.
  begin
    if o.paid_at is null or nullif(o.transaction_nsu, '') is null
       or o.capture_method not in ('credit_card', 'pix') or o.capture_method is null
       or not exists(select 1 from private.intgem_ledger
         where user_id = o.user_id and kind = 'payment' and reference = o.id::text and delta = o.gems) then
      raise exception 'intgem_finance_payment_incomplete';
    end if;
    sale_date := (o.paid_at at time zone 'America/Manaus')::date;
    -- A configured vacation/return cycle takes precedence over monthly defaults.
    select * into c from public.finance_cash_cycles
      where school_id=target_school and today_local between start_date and end_date
      order by start_date desc limit 1 for share;
    if c.id is null then
    cycle_start := (date_trunc('month', today_local)::date + 10);
    if today_local < cycle_start then cycle_start := (cycle_start - interval '1 month')::date; end if;
    if sale_date not between cycle_start and (cycle_start + interval '1 month' - interval '1 day')::date then
      raise exception 'intgem_finance_previous_cycle_requires_reconciliation';
    end if;

    select * into c from public.finance_cash_cycles
      where school_id = target_school and cycle_key = to_char(cycle_start, 'YYYY-MM') for share;
    if c.id is null then
      insert into public.finance_cash_cycles(school_id, cycle_key, start_date, end_date, status, notes)
        values(target_school, to_char(cycle_start, 'YYYY-MM'), cycle_start,
          (cycle_start + interval '1 month' - interval '1 day')::date, 'aberto',
          'Ciclo vigente aberto automaticamente pelo recebimento de IntGem.')
        on conflict(school_id, cycle_key) do nothing;
      select * into c from public.finance_cash_cycles
        where school_id = target_school and cycle_key = to_char(cycle_start, 'YYYY-MM') for share;
    end if;
    end if;
    if sale_date not between c.start_date and c.end_date then
      raise exception 'intgem_finance_previous_cycle_requires_reconciliation';
    end if;
    perform private.assert_finance_cycle_writable(target_school, c.id, sale_date, false);
    select coalesce(nullif(display_name, ''), 'Conta Integro Box') into buyer_label
      from private.box_accounts where user_id = o.user_id;
    perform set_config('app.intgem_finance_order', o.id::text, true);
    insert into public.finance_entries(
      school_id, cash_cycle_id, intgem_order_id, entry_type, entry_date,
      student_name_snapshot, payer_name, payer_document, package_name_snapshot,
      gross_amount, discount_amount, amount_paid, payment_method, competence_month, description
    ) values (
      target_school, c.id, o.id, 'intgem', sale_date,
      coalesce(buyer_label, 'Conta Integro Box'), 'Comprador via ' || case o.provider when 'asaas' then 'Asaas' else 'InfinitePay' end, 'Não informado pelo checkout',
      o.gems::text || ' IntGem', o.amount::numeric / 100, 0, o.amount::numeric / 100,
      case o.capture_method when 'pix' then 'Pix' else 'Cartão de crédito' end,
      c.cycle_key,
      'Venda de ' || o.gems::text || ' IntGem • ' || case o.provider when 'asaas' then 'Asaas' else 'InfinitePay' end || ' • Pedido ' || o.id::text ||
      ' • Transação ' || o.transaction_nsu ||
      ' • Receita bruta; taxas e liquidação da operadora sujeitas a conciliação.'
    ) returning id into receipt_id;
    perform set_config('app.intgem_finance_order', '', true);
    update private.intgem_finance_posts set entry_id = receipt_id, posted_at = now(),
      attempted_at = now(), last_error = null where order_id = o.id;
    return true;
  exception when others then
    update private.intgem_finance_posts set attempted_at = now(),
      last_error = left(sqlstate || ': ' || sqlerrm, 500) where order_id = o.id;
    return false;
  end;
end $function$;
