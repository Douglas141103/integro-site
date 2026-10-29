-- Keep historical InfinitePay orders verifiable; all new orders use Asaas.
begin;
alter table private.intgem_orders add column if not exists provider text not null default 'infinitepay' check(provider in ('infinitepay','asaas'));
alter table private.intgem_orders alter column provider set default 'asaas';
alter table private.intgem_orders add column if not exists asaas_checkout_id uuid unique;
alter table private.intgem_orders add column if not exists checkout_expires_at timestamptz;
alter table private.intgem_orders drop constraint if exists intgem_orders_status_check;
alter table private.intgem_orders add constraint intgem_orders_status_check check(status in ('creating','pending','paid','error','expired','canceled'));
create or replace function public.box_intgem_order(p_pack text,p_request uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); o private.intgem_orders%rowtype; qty integer; cents integer; fresh uuid; promo jsonb;
begin
 if not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_request is null then return jsonb_build_object('error','invalid_request');end if;
 select q,a into qty,cents from (values('gem1',1,100),('gem5',5,299),('gem10',10,699),('gem20',20,1099)) p(k,q,a) where k=p_pack;
 if qty is null then return jsonb_build_object('error','invalid_pack');end if;
 perform pg_advisory_xact_lock(hashtextextended('intgem-order:'||u::text,0));
 select * into o from private.intgem_orders where user_id=u and request_id=p_request for update;
 if o.id is null then
  if cents<500 then return jsonb_build_object('error','checkout_below_minimum');end if;
  if (select count(*) from private.intgem_orders where user_id=u and created_at>now()-interval '1 hour')>=12 then return jsonb_build_object('error','rate_limit');end if;
  promo:=private.intgem_promotion_state();
  if p_pack='gem20' and (promo->>'active')::boolean then qty:=100;end if;
  insert into private.intgem_orders(user_id,request_id,pack,gems,amount,promotion_id) values(u,p_request,p_pack,qty,cents,case when qty=100 then promo->>'id' else null end) returning * into o;fresh:=o.id;
 end if;
 if o.pack<>p_pack then return jsonb_build_object('error','invalid_request');end if;
 if o.status='paid' then return jsonb_build_object('id',o.id,'status',o.status,'gems',o.gems,'provider',o.provider);end if;
 if o.provider='asaas' and (o.status in ('expired','canceled') or coalesce(o.checkout_expires_at,o.attempt_at+interval '62 minutes')<=now()) then return jsonb_build_object('error','checkout_expired','id',o.id);end if;
 if o.checkout_url is not null then return jsonb_build_object('id',o.id,'url',o.checkout_url,'status',o.status,'gems',o.gems,'provider',o.provider);end if;
 -- Never repeat an Asaas POST whose outcome is unknown; its authenticated
 -- CHECKOUT_CREATED event recovers the link if the original response was lost.
 if o.provider='asaas' and fresh is null and o.status='creating' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 if o.provider<>'asaas' then return jsonb_build_object('error','checkout_expired','id',o.id);end if;
 if fresh is null and o.status='creating' and o.attempt_at>now()-interval '40 seconds' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 update private.intgem_orders set status='creating',attempt_at=now() where id=o.id;
 return jsonb_build_object('id',o.id,'gems',o.gems,'amount',o.amount,'provider',o.provider,'create',true);
end $$;
create or replace function public.box_intgem_payment(p_action text,p_order uuid,p_data jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare o private.intgem_orders%rowtype; tx text; url text; credited uuid; checkout uuid; result jsonb;
begin
 if p_action='lookup_checkout' then
  select id into p_order from private.intgem_orders where asaas_checkout_id=(p_data->>'checkout_id')::uuid;
 end if;
 select * into o from private.intgem_orders where id=p_order for update;
 if o.id is null then return jsonb_build_object('error','unknown_order');end if;
 result:=jsonb_build_object('id',o.id,'user_id',o.user_id,'amount',o.amount,'gems',o.gems,'status',o.status,'provider',o.provider,'checkout_id',o.asaas_checkout_id,'checkout_expires_at',o.checkout_expires_at);
 if p_action in ('inspect','lookup_checkout') then
  -- Webhook delivery must not be throttled by a buyer's manual verification.
  if coalesce((p_data->>'manual')::boolean,false) and o.status<>'paid' then
   if o.checked_at>clock_timestamp()-interval '3 seconds' then return jsonb_build_object('error','checking');end if;
   update private.intgem_orders set checked_at=clock_timestamp() where id=o.id;
  end if;
  return result;
 elsif p_action='checkout' then
  url:=p_data->>'url';
  if o.provider='asaas' then
   checkout:=(p_data->>'checkout_id')::uuid;
   if checkout is null or url is distinct from 'https://asaas.com/checkoutSession/show?id='||checkout::text then return jsonb_build_object('error','invalid_checkout_url');end if;
   if o.asaas_checkout_id is not null and o.asaas_checkout_id<>checkout then return jsonb_build_object('error','checkout_mismatch');end if;
   update private.intgem_orders set asaas_checkout_id=checkout,checkout_expires_at=coalesce(checkout_expires_at,attempt_at+interval '60 minutes') where id=o.id;
  elsif url is null or url !~ '^https://(checkout[.]infinitepay[.]com[.]br|checkout[.]infinitepay[.]io|pay[.]infinitepay[.]io|buy[.]infinitepay[.]io)/' then return jsonb_build_object('error','invalid_checkout_url');end if;
  update private.intgem_orders set checkout_url=url,status=case when status in ('paid','expired','canceled') then status else 'pending' end where id=o.id returning * into o;
  return jsonb_build_object('id',o.id,'url',url,'status',o.status,'gems',o.gems,'provider',o.provider);
 elsif p_action in ('expired','canceled') then
  if o.provider='asaas' then update private.intgem_orders set status=p_action where id=o.id and status<>'paid';end if;
  return jsonb_build_object('ok',true);
 elsif p_action='failed' then
  update private.intgem_orders set status='error' where id=o.id and status='creating';return jsonb_build_object('ok',true);
 elsif p_action='settle' then
  if o.provider='asaas' and (o.asaas_checkout_id is null or p_data->>'invoice_slug' is distinct from o.asaas_checkout_id::text or coalesce(p_data->>'transaction_nsu','') !~ '^asaas:pay_[a-zA-Z0-9]{6,80}$') then return jsonb_build_object('error','payment_mismatch');end if;
  tx:=p_data->>'transaction_nsu';
  if tx is null or char_length(tx) not between 1 and 160 or coalesce((p_data->>'amount')::integer,-1)<>o.amount or coalesce(p_data->>'capture_method','') not in ('credit_card','pix') or nullif(p_data->>'invoice_slug','') is null then return jsonb_build_object('error','payment_mismatch');end if;
  if o.status='paid' then return jsonb_build_object('paid',true,'duplicate',true,'gems',o.gems);end if;
  if exists(select 1 from private.intgem_orders where transaction_nsu=tx and id<>o.id) then return jsonb_build_object('error','transaction_reused');end if;
  insert into private.intgem_wallets(user_id) values(o.user_id) on conflict do nothing;
  perform 1 from private.intgem_wallets where user_id=o.user_id for update;
  insert into private.intgem_ledger(user_id,delta,kind,reference) values(o.user_id,o.gems,'payment',o.id::text) on conflict do nothing returning id into credited;
  if credited is not null then update private.intgem_wallets set balance=balance+o.gems,updated_at=now() where user_id=o.user_id;end if;
  update private.intgem_orders set status='paid',paid_at=now(),transaction_nsu=tx,invoice_slug=p_data->>'invoice_slug',capture_method=p_data->>'capture_method' where id=o.id;
  return jsonb_build_object('paid',true,'gems',o.gems);
 end if;
 return jsonb_build_object('error','invalid_action');
end $$;
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
end $$;
revoke all on function public.box_intgem_order(text,uuid) from public,anon;
grant execute on function public.box_intgem_order(text,uuid) to authenticated;
revoke all on function public.box_intgem_payment(text,uuid,jsonb) from public,anon,authenticated;
grant execute on function public.box_intgem_payment(text,uuid,jsonb) to service_role;
revoke all on function private.intgem_post_to_finance(uuid) from public,anon,authenticated;
create or replace function private.intgem_snapshot(p_user uuid) returns jsonb language sql stable set search_path='' as $$
 select jsonb_build_object(
 'promotion',private.intgem_promotion_state(),
 'balance',coalesce((select balance from private.intgem_wallets where user_id=p_user),0),
 'day',(clock_timestamp() at time zone 'America/Manaus')::date,
 'daily',coalesce((select jsonb_build_object('seconds',floor(seconds),'egg_seconds',floor(egg_seconds),'rewarded',rewarded) from private.intgem_days where user_id=p_user and day=(clock_timestamp() at time zone 'America/Manaus')::date),'{"seconds":0,"egg_seconds":0,"rewarded":false}'::jsonb),
 'owned',coalesce((select jsonb_agg(item_id order by item_id) from private.intgem_inventory where user_id=p_user),'[]'),
 'equipped',coalesce((select jsonb_agg(jsonb_build_object('game',game,'kind',kind,'item',item_id)) from private.intgem_equipped where user_id=p_user),'[]'),
 'items',coalesce((select jsonb_agg(to_jsonb(i)-'enabled' order by game,price) from private.intgem_items i where enabled),'[]'),
 'history',coalesce((select jsonb_agg(to_jsonb(h)) from (select delta,kind,reference,created_at from private.intgem_ledger where user_id=p_user order by created_at desc limit 25) h),'[]'),
 'orders',coalesce((select jsonb_agg(to_jsonb(o)) from (select id,pack,gems,amount,status,provider,created_at from private.intgem_orders where user_id=p_user order by created_at desc limit 10) o),'[]'))
$$;
notify pgrst, 'reload schema';
commit;
