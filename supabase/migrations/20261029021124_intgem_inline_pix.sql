-- One-use, expiring Asaas Pix displayed inside the wallet. Historical checkouts
-- retain their flow and continue to accept verified late confirmations.
begin;
alter table private.intgem_orders add column if not exists payment_flow text not null default 'checkout' check(payment_flow in ('checkout','pix'));
alter table private.intgem_orders alter column payment_flow set default 'pix';
alter table private.intgem_orders add column if not exists pix_qr_id text unique;
alter table private.intgem_orders add column if not exists pix_payload text;
alter table private.intgem_orders add column if not exists pix_image text;
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
  if (select count(*) from private.intgem_orders where user_id=u and created_at>now()-interval '1 hour')>=12 then return jsonb_build_object('error','rate_limit');end if;
  promo:=private.intgem_promotion_state();
  if p_pack='gem20' and (promo->>'active')::boolean then qty:=100;end if;
  insert into private.intgem_orders(user_id,request_id,pack,gems,amount,promotion_id) values(u,p_request,p_pack,qty,cents,case when qty=100 then promo->>'id' else null end) returning * into o;fresh:=o.id;
 end if;
 if o.pack<>p_pack then return jsonb_build_object('error','invalid_request');end if;
 if o.status='paid' then return jsonb_build_object('id',o.id,'status',o.status,'gems',o.gems,'provider',o.provider,'payment_flow',o.payment_flow);end if;
 if o.provider='asaas' and (o.status in ('expired','canceled') or coalesce(o.checkout_expires_at,o.attempt_at+case when o.payment_flow='pix' then interval '32 minutes' else interval '62 minutes' end)<=now()) then return jsonb_build_object('error','checkout_expired','id',o.id);end if;
 if o.payment_flow='pix' and o.pix_qr_id is not null then
  return jsonb_build_object('id',o.id,'status',o.status,'gems',o.gems,'amount',o.amount,'pack',o.pack,'provider',o.provider,'payment_flow',o.payment_flow,'server_now',clock_timestamp(),'pix',jsonb_build_object('payload',o.pix_payload,'encodedImage',o.pix_image,'expires_at',o.checkout_expires_at));
 end if;
 if o.checkout_url is not null then return jsonb_build_object('id',o.id,'url',o.checkout_url,'status',o.status,'gems',o.gems,'provider',o.provider,'payment_flow',o.payment_flow);end if;
 -- Never repeat an Asaas POST whose outcome is unknown; its authenticated
 -- CHECKOUT_CREATED event recovers the link if the original response was lost.
 if o.provider='asaas' and fresh is null and o.status='creating' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 if o.provider<>'asaas' then return jsonb_build_object('error','checkout_expired','id',o.id);end if;
 if fresh is null and o.status='creating' and o.attempt_at>now()-interval '40 seconds' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 update private.intgem_orders set status='creating',attempt_at=now() where id=o.id;
 return jsonb_build_object('id',o.id,'gems',o.gems,'amount',o.amount,'provider',o.provider,'payment_flow',o.payment_flow,'pack',o.pack,'create',true);
end $$;
create or replace function public.box_intgem_payment(p_action text,p_order uuid,p_data jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare o private.intgem_orders%rowtype; tx text; url text; credited uuid; checkout uuid; result jsonb;
begin
 if p_action='lookup_pix' then
  select id into p_order from private.intgem_orders where pix_qr_id=p_data->>'qr_id';
 end if;
 if p_action='lookup_checkout' then
  select id into p_order from private.intgem_orders where asaas_checkout_id=(p_data->>'checkout_id')::uuid;
 end if;
 select * into o from private.intgem_orders where id=p_order for update;
 if o.id is null then return jsonb_build_object('error','unknown_order');end if;
 result:=jsonb_build_object('id',o.id,'user_id',o.user_id,'amount',o.amount,'gems',o.gems,'status',o.status,'provider',o.provider,'payment_flow',o.payment_flow,'pack',o.pack,'pix_qr_id',o.pix_qr_id,'server_now',clock_timestamp(),'checkout_id',o.asaas_checkout_id,'checkout_expires_at',o.checkout_expires_at);
 if p_action in ('inspect','lookup_checkout','lookup_pix') then
  -- Webhook delivery must not be throttled by a buyer's manual verification.
  if coalesce((p_data->>'manual')::boolean,false) and o.status<>'paid' then
   if o.checked_at>clock_timestamp()-interval '3 seconds' then return jsonb_build_object('error','checking');end if;
   update private.intgem_orders set checked_at=clock_timestamp() where id=o.id;
  end if;
  return result;
 elsif p_action='pix' then
  if o.provider<>'asaas' or o.payment_flow<>'pix' or coalesce(p_data->>'qr_id','') !~ '^[A-Za-z0-9]{16,64}$' or coalesce(p_data->>'payload','') !~ '^000201' or length(p_data->>'payload')>4096 or coalesce(p_data->>'encodedImage','') !~ '^iVBORw0KGgo[A-Za-z0-9+/=[:space:]]+$' or length(p_data->>'encodedImage')>300000 or (p_data->>'expires_at')::timestamptz is null or (p_data->>'expires_at')::timestamptz>clock_timestamp()+interval '31 minutes' then return jsonb_build_object('error','invalid_pix');end if;
  if o.pix_qr_id is not null and o.pix_qr_id<>p_data->>'qr_id' then return jsonb_build_object('error','checkout_mismatch');end if;
  update private.intgem_orders set pix_qr_id=p_data->>'qr_id',pix_payload=p_data->>'payload',pix_image=p_data->>'encodedImage',checkout_expires_at=(p_data->>'expires_at')::timestamptz,status=case when status='paid' then status else 'pending' end where id=o.id returning * into o;
  return jsonb_build_object('id',o.id,'gems',o.gems,'amount',o.amount,'pack',o.pack,'status',o.status,'provider',o.provider,'payment_flow',o.payment_flow,'server_now',clock_timestamp(),'pix',jsonb_build_object('payload',o.pix_payload,'encodedImage',o.pix_image,'expires_at',o.checkout_expires_at));
 elsif p_action='pix_view' then
  if o.payment_flow<>'pix' or o.pix_qr_id is null then return jsonb_build_object('error','pix_unavailable');end if;
  return result||jsonb_build_object('pix',jsonb_build_object('payload',o.pix_payload,'encodedImage',o.pix_image,'expires_at',o.checkout_expires_at));
 elsif p_action='checkout' then
  if o.payment_flow='pix' then return jsonb_build_object('error','checkout_mismatch');end if;
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
  if o.provider='asaas' then
   if coalesce(p_data->>'transaction_nsu','') !~ '^asaas:pay_[a-zA-Z0-9]{6,80}$' then return jsonb_build_object('error','payment_mismatch');end if;
   if o.payment_flow='pix' then
    if o.pix_qr_id is null or p_data->>'invoice_slug' is distinct from 'pix:'||o.pix_qr_id or p_data->>'capture_method' is distinct from 'pix' then return jsonb_build_object('error','payment_mismatch');end if;
   elsif o.asaas_checkout_id is null or p_data->>'invoice_slug' is distinct from o.asaas_checkout_id::text then return jsonb_build_object('error','payment_mismatch');end if;
  end if;
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
 'orders',coalesce((select jsonb_agg(to_jsonb(o)) from (select id,pack,gems,amount,status,provider,payment_flow,created_at from private.intgem_orders where user_id=p_user order by created_at desc limit 10) o),'[]'))
$$;
revoke all on function public.box_intgem_order(text,uuid) from public,anon;
grant execute on function public.box_intgem_order(text,uuid) to authenticated;
revoke all on function public.box_intgem_payment(text,uuid,jsonb) from public,anon,authenticated;
grant execute on function public.box_intgem_payment(text,uuid,jsonb) to service_role;
revoke all on function private.intgem_snapshot(uuid) from public,anon,authenticated;
notify pgrst, 'reload schema';
commit;
