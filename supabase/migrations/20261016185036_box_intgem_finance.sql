-- Confirmed IntGem sales enter INSTITUTO INTEGRO's current cash cycle once.
-- Gross sale value, not a claim that InfinitePay has settled that amount net.
alter table public.finance_entries
  add column if not exists intgem_order_id uuid references private.intgem_orders(id) on delete restrict,
  add column if not exists cash_cycle_id uuid references public.finance_cash_cycles(id) on delete restrict;
create unique index if not exists finance_entries_intgem_order_unique
  on public.finance_entries(intgem_order_id) where intgem_order_id is not null;
create index if not exists finance_entries_cash_cycle_idx
  on public.finance_entries(cash_cycle_id) where cash_cycle_id is not null;

create table if not exists private.intgem_finance_posts (
  order_id uuid primary key references private.intgem_orders(id) on delete restrict,
  entry_id uuid unique references public.finance_entries(id) on delete restrict,
  attempted_at timestamptz not null default now(),
  posted_at timestamptz,
  last_error text,
  check ((entry_id is null) = (posted_at is null))
);
alter table private.intgem_finance_posts enable row level security;
revoke all on private.intgem_finance_posts from public, anon, authenticated;
create index if not exists intgem_finance_retry_idx
  on private.intgem_finance_posts(attempted_at, order_id) where entry_id is null;

-- Preserve the receipt as evidence of the verified sale. Corrections are separate
-- reconciled adjustments; a director cannot turn this into an unrelated receipt.
create or replace function private.guard_intgem_finance_entry() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if tg_op <> 'INSERT' and old.intgem_order_id is not null then
    raise exception 'intgem_finance_receipt_immutable' using errcode = '42501';
  end if;
  if tg_op = 'DELETE' then return old; end if;
  if new.intgem_order_id is not null or lower(btrim(new.entry_type)) = 'intgem' then
    if tg_op <> 'INSERT'
       or new.intgem_order_id is null or new.entry_type <> 'intgem'
       or coalesce(auth.role(), '') not in ('', 'service_role')
       or current_setting('app.intgem_finance_order', true) is distinct from new.intgem_order_id::text
       or not exists (
         select 1 from private.intgem_orders o
         where o.id = new.intgem_order_id and o.status = 'paid'
           and o.paid_at is not null and o.transaction_nsu is not null
           and new.amount_paid = o.amount::numeric / 100
           and new.gross_amount = o.amount::numeric / 100 and new.discount_amount = 0
           and new.entry_date = (o.paid_at at time zone 'America/Manaus')::date
           and new.school_id = 'da5d33a5-616a-4abc-8f88-78f5ecb85cd4'::uuid
           and new.cash_cycle_id is not null and new.student_id is null
       ) then
      raise exception 'intgem_finance_requires_verified_payment' using errcode = '42501';
    end if;
  end if;
  return new;
end $$;
revoke all on function private.guard_intgem_finance_entry() from public, anon, authenticated;
drop trigger if exists intgem_finance_entry_guard on public.finance_entries;
create trigger intgem_finance_entry_guard before insert or update or delete on public.finance_entries
  for each row execute function private.guard_intgem_finance_entry();

create or replace function private.intgem_post_to_finance(p_order uuid) returns boolean
language plpgsql security definer set search_path = '' as $$
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
      coalesce(buyer_label, 'Conta Integro Box'), 'Comprador via InfinitePay', 'Não informado pelo checkout',
      o.gems::text || ' IntGem', o.amount::numeric / 100, 0, o.amount::numeric / 100,
      case o.capture_method when 'pix' then 'Pix' else 'Cartão de crédito' end,
      c.cycle_key,
      'Venda de ' || o.gems::text || ' IntGem • InfinitePay • Pedido ' || o.id::text ||
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
end $$;
revoke all on function private.intgem_post_to_finance(uuid) from public, anon, authenticated;

create or replace function private.intgem_finance_after_payment() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  perform private.intgem_post_to_finance(new.id);
  return new;
end $$;
revoke all on function private.intgem_finance_after_payment() from public, anon, authenticated;
drop trigger if exists intgem_finance_after_payment on private.intgem_orders;
create trigger intgem_finance_after_payment after update of status on private.intgem_orders
  for each row when(new.status = 'paid' and old.status is distinct from 'paid')
  execute function private.intgem_finance_after_payment();

create or replace function private.intgem_retry_finance() returns integer
language plpgsql security definer set search_path = '' as $$
declare item record; posted integer := 0;
begin
  for item in
    select p.order_id from private.intgem_finance_posts p
      join private.intgem_orders o on o.id = p.order_id
    where p.entry_id is null and p.attempted_at < now() - interval '4 minutes' and o.status = 'paid'
    order by p.attempted_at, p.order_id limit 100 for update of o skip locked
  loop
    if private.intgem_post_to_finance(item.order_id) then posted := posted + 1; end if;
  end loop;
  return posted;
end $$;
revoke all on function private.intgem_retry_finance() from public, anon, authenticated;

-- Only real paid orders are eligible. Never mark a pending checkout as paid here.
do $$
declare item record;
begin
  for item in select id from private.intgem_orders where status = 'paid' loop
    perform private.intgem_post_to_finance(item.id);
  end loop;
end $$;
select cron.schedule('intgem-finance-retry', '*/5 * * * *', 'select private.intgem_retry_finance();');
