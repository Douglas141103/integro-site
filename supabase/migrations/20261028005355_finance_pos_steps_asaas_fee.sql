-- One financial receipt per manual sale item, even when a request is repeated.
alter table public.finance_entries
 add column pos_sale_id uuid,
 add column pos_item_index integer,
 add constraint finance_entries_pos_item_valid check (
  (pos_sale_id is null and pos_item_index is null) or
  (pos_sale_id is not null and pos_item_index is not null and pos_item_index > 0)
 );
create unique index finance_entries_pos_sale_item_unique
 on public.finance_entries(pos_sale_id,pos_item_index) where pos_sale_id is not null;

-- The merchant explicitly selected a fixed R$ 0.99 bookkeeping fee per paid Pix.
-- This is not inferred from the provider contract and never reduces the receipt.
alter table public.finance_expenses add column asaas_order_id uuid references private.finance_asaas_orders(id);
create unique index finance_expenses_asaas_fee_unique
 on public.finance_expenses(asaas_order_id) where asaas_order_id is not null;

create function private.finance_asaas_expense_guard() returns trigger
language plpgsql security definer set search_path='' as $$
begin
 if tg_op in ('UPDATE','DELETE') and old.asaas_order_id is not null then
  raise exception 'Tarifa Asaas automática preservada para conciliação.' using errcode='42501';
 end if;
 if tg_op in ('INSERT','UPDATE') and new.asaas_order_id is not null then
  if coalesce(auth.role(),'') in ('anon','authenticated')
   or current_setting('app.finance_asaas_fee_order',true) is distinct from new.asaas_order_id::text
   or new.amount is distinct from 0.99::numeric
   or not exists(select 1 from private.finance_asaas_orders o where o.id=new.asaas_order_id and o.school_id=new.school_id and o.status='paid' and o.payment_date=new.expense_date)
  then raise exception 'Tarifa automática inválida.' using errcode='42501'; end if;
 end if;
 if tg_op='DELETE' then return old; end if;
 return new;
end $$;
revoke all on function private.finance_asaas_expense_guard() from public,anon,authenticated;
create trigger finance_asaas_expense_guard before insert or update or delete on public.finance_expenses
 for each row execute function private.finance_asaas_expense_guard();

create function private.finance_asaas_record_fee(p_id uuid) returns void
language plpgsql security definer set search_path='' as $$
declare o private.finance_asaas_orders%rowtype; cycle_id uuid; receipt_total numeric; previous_context text;
begin
 select * into o from private.finance_asaas_orders where id=p_id for update;
 if o.id is null or o.status<>'paid' or o.payment_date is null then
  raise exception 'O pagamento precisa estar confirmado para registrar a tarifa.';
 end if;
 if exists(select 1 from public.finance_expenses where asaas_order_id=o.id) then return; end if;
 select e.cash_cycle_id into cycle_id from public.finance_entries e where e.asaas_order_id=o.id limit 1;
 select sum(e.amount_paid) into receipt_total from public.finance_entries e where e.asaas_order_id=o.id and e.school_id=o.school_id;
 if cycle_id is null or receipt_total is distinct from o.amount::numeric/100 then
  raise exception 'Os recibos precisam estar conciliados antes da tarifa.';
 end if;
 perform private.assert_finance_cycle_writable(o.school_id,cycle_id,o.payment_date,false);
 previous_context:=current_setting('app.finance_asaas_fee_order',true);
 perform set_config('app.finance_asaas_fee_order',o.id::text,true);
 insert into public.finance_expenses(school_id,cash_cycle_id,asaas_order_id,description,amount,paid_to,paid_by_name,category,expense_date,notes,created_by,allocation_bucket)
 values(o.school_id,cycle_id,o.id,'Tarifa Pix Asaas • Pedido '||o.id::text,0.99,'Asaas','Conta Asaas','Tarifas de recebimento',o.payment_date,
  'Tarifa fixa de R$ 0,99 configurada pelo Instituto Integro, por cobrança paga. Receita registrada pelo valor integral. Pagamento '||o.payment_id||'.',o.created_by,'operacoes')
 on conflict (asaas_order_id) where asaas_order_id is not null do nothing;
 perform set_config('app.finance_asaas_fee_order',coalesce(previous_context,''),true);
end $$;
revoke all on function private.finance_asaas_record_fee(uuid) from public,anon,authenticated,service_role;

create or replace function private.finance_asaas_post(p_id uuid) returns boolean language plpgsql security definer set search_path='' as $$
declare o private.finance_asaas_orders%rowtype; c public.finance_cash_cycles%rowtype; item jsonb; idx integer:=0; customer jsonb;
begin
 select * into o from private.finance_asaas_orders where id=p_id for update;
 if o.id is null or o.status<>'paid' or o.payment_date is null then return false; end if;
 if o.posted_at is not null then return true; end if;
 begin
  select * into c from public.finance_cash_cycles where school_id=o.school_id and o.payment_date between start_date and end_date order by start_date desc limit 1 for share;
  perform private.assert_finance_cycle_writable(o.school_id,c.id,o.payment_date,false);
  customer:=o.sale->'customer';
  perform set_config('app.finance_asaas_order',o.id::text,true);
  for item in select value from jsonb_array_elements(o.sale->'items') loop
   idx:=idx+1;
   insert into public.finance_entries(school_id,cash_cycle_id,asaas_order_id,asaas_item_index,
    student_id,student_name_snapshot,payer_name,payer_document,package_id,package_name_snapshot,discount_id,discount_name_snapshot,
    gross_amount,discount_amount,amount_paid,payment_method,competence_month,description,entry_type,entry_date,created_by)
   values(o.school_id,c.id,o.id,idx,(customer->>'student_id')::uuid,customer->>'student_name',customer->>'payer_name',customer->>'payer_document',
    (item->>'package_id')::uuid,item->>'package_name',(item->>'discount_id')::uuid,item->>'discount_name',
    (item->>'gross')::numeric/100,(item->>'discount')::numeric/100,(item->>'amount')::numeric/100,'Pix',item->>'reference',
    'Asaas Pix • Pedido '||o.id::text||' • '||(item->>'description')||' • Receita bruta; tarifa registrada separadamente em Saídas.'||case when coalesce(o.sale->>'note','')<>'' then ' • Obs.: '||(o.sale->>'note') else '' end,
    item->>'type',o.payment_date,o.created_by);
  end loop;
  perform private.finance_asaas_record_fee(o.id);
  update private.finance_asaas_orders set posted_at=now(),post_error=null where id=o.id;
  perform set_config('app.finance_asaas_order','',true);
  return true;
 exception when others then
  update private.finance_asaas_orders set post_error=left(sqlstate||': '||sqlerrm,500) where id=o.id;
  return false;
 end;
end $$;
revoke all on function private.finance_asaas_post(uuid) from public,anon,authenticated;

-- Reconcile already posted Asaas payments in the currently writable Integro cycle.
-- Closed cycles and other schools are never backfilled.
do $$
declare payment record;
begin
 for payment in
  select o.id from private.finance_asaas_orders o
  join public.schools s on s.id=o.school_id and s.slug='instituto-integro'
  where o.status='paid' and o.posted_at is not null
   and not exists(select 1 from public.finance_expenses e where e.asaas_order_id=o.id)
   and exists(select 1 from public.finance_cash_cycles c where c.school_id=o.school_id
    and c.status='aberto' and o.payment_date between c.start_date and c.end_date
    and (now() at time zone 'America/Manaus')::date between c.start_date and c.end_date)
 loop
  perform private.finance_asaas_record_fee(payment.id);
 end loop;
end $$;
