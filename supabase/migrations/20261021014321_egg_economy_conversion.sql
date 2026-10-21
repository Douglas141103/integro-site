-- Operator-directed conversions have an immutable receipt and an account-only notice.
create table if not exists private.egg_economy_conversions (
 id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id) on delete cascade,
 reference text not null unique,integros bigint not null check(integros>0),gems integer not null check(gems>0),
 coins_before bigint not null,coins_after bigint not null,gems_before integer not null,gems_after integer not null,
 created_at timestamptz not null default now(),acknowledged_at timestamptz
);
alter table private.egg_economy_conversions enable row level security;
revoke all on private.egg_economy_conversions from public,anon,authenticated;
create or replace function private.egg_admin_conversion(p_user uuid,p_reference text,p_integros bigint,p_gems integer) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare s private.box_egg_saves; w private.intgem_wallets; receipt private.egg_economy_conversions; coins bigint;
begin
 if p_reference is null or length(p_reference)>160 or p_integros<=0 or p_gems<=0 then raise exception 'invalid_conversion';end if;
 -- Same global egg lock, then wallet, then save: compatible with the existing exchange.
 perform pg_advisory_xact_lock(832137);
 insert into private.intgem_wallets(user_id) values(p_user) on conflict do nothing;
 select * into w from private.intgem_wallets where user_id=p_user for update;
 select * into receipt from private.egg_economy_conversions where reference=p_reference;
 if found then
  if receipt.user_id<>p_user or receipt.integros<>p_integros or receipt.gems<>p_gems then raise exception 'conversion_reference_changed';end if;
  return to_jsonb(receipt);
 end if;
 select * into s from private.box_egg_saves where user_id=p_user for update;
 if s.data is null then raise exception 'no_save';end if;
 coins:=(s.data->>'coins')::bigint;
 if coins<p_integros then raise exception 'insufficient_integros';end if;
 if exists(select 1 from private.box_egg_trades where status='pending' and p_user in(a,b) and expires_at>now()) then raise exception 'trade_pending';end if;
 update private.box_egg_saves set data=jsonb_set(data,'{coins}',to_jsonb(coins-p_integros)),revision=revision+1,updated_at=now() where user_id=p_user;
 update private.intgem_wallets set balance=balance+p_gems,updated_at=now() where user_id=p_user;
 insert into private.intgem_ledger(user_id,delta,kind,reference) values(p_user,p_gems,'exchange',p_reference);
 insert into private.egg_economy_conversions(user_id,reference,integros,gems,coins_before,coins_after,gems_before,gems_after)
 values(p_user,p_reference,p_integros,p_gems,coins,coins-p_integros,w.balance,w.balance+p_gems) returning * into receipt;
 return to_jsonb(receipt);
end $$;
revoke all on function private.egg_admin_conversion(uuid,text,bigint,integer) from public,anon,authenticated;
create or replace function private.egg_economy_notice(p_action text,p_id uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid();begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action='economy_ack' then update private.egg_economy_conversions set acknowledged_at=coalesce(acknowledged_at,now()) where id=p_id and user_id=u;end if;
 return jsonb_build_object('notices',coalesce((select jsonb_agg(jsonb_build_object('id',id,'integros',integros,'gems',gems,'balance',coins_after,'created',created_at) order by created_at) from private.egg_economy_conversions where user_id=u and acknowledged_at is null),'[]'::jsonb));
end $$;
revoke all on function private.egg_economy_notice(text,uuid) from public,anon,authenticated;
do $$declare source text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_economy_notice(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'egg_dispatch_anchor_missing';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''economy_notices'',''economy_ack'') then return private.egg_economy_notice(p_action,p_id);end if; if p_action=''capabilities''');execute source;
 end if;
end $$;
