-- Five days from activation. The promised total is fixed when an order is created;
-- existing orders retain their original quantity and paid orders are never recredited.
begin;
create table if not exists private.intgem_promotions (
 id text primary key, starts_at timestamptz not null, ends_at timestamptz not null,
 check(ends_at=starts_at+interval '120 hours')
);
alter table private.intgem_promotions enable row level security;
revoke all on private.intgem_promotions from public,anon,authenticated;
-- Do not restart the five-day clock if the migration is re-applied.
insert into private.intgem_promotions(id,starts_at,ends_at)
 values('intgem-surpresa-20261028',now(),now()+interval '120 hours') on conflict do nothing;
alter table private.intgem_orders add column if not exists promotion_id text references private.intgem_promotions(id);
alter table private.intgem_orders drop constraint if exists intgem_orders_gems_check;
alter table private.intgem_orders add constraint intgem_orders_gems_check check(gems in(1,5,10,20,100));
alter table private.intgem_orders drop constraint if exists intgem_orders_promotion_check;
alter table private.intgem_orders add constraint intgem_orders_promotion_check check(
 (promotion_id is null and gems in(1,5,10,20)) or
 (promotion_id is not null and promotion_id='intgem-surpresa-20261028' and pack='gem20' and gems=100 and amount=1099)
);
create or replace function private.intgem_promotion_state() returns jsonb
 language sql stable security invoker set search_path='' as $$
 select jsonb_build_object('id',id,'pack','gem20','base',20,'bonus',80,'total',100,'cents',1099,
 'starts_at',starts_at,'ends_at',ends_at,'server_now',now(),'active',now()>=starts_at and now()<ends_at)
 from private.intgem_promotions where id='intgem-surpresa-20261028'
$$;
revoke all on function private.intgem_promotion_state() from public,anon,authenticated;

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
 'orders',coalesce((select jsonb_agg(to_jsonb(o)) from (select id,pack,gems,amount,status,created_at from private.intgem_orders where user_id=p_user order by created_at desc limit 10) o),'[]'))
$$;
revoke all on function private.intgem_snapshot(uuid) from public,anon,authenticated;

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
 if o.checkout_url is not null or o.status='paid' then return jsonb_build_object('id',o.id,'url',o.checkout_url,'status',o.status,'gems',o.gems);end if;
 if fresh is null and o.status='creating' and o.attempt_at>now()-interval '40 seconds' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 update private.intgem_orders set status='creating',attempt_at=now() where id=o.id;
 return jsonb_build_object('id',o.id,'gems',o.gems,'amount',o.amount,'create',true);
end $$;
revoke all on function public.box_intgem_order(text,uuid) from public,anon;
grant execute on function public.box_intgem_order(text,uuid) to authenticated;

-- This endpoint is callable only by the server's service role, never by buyers.

notify pgrst, 'reload schema';
commit;
