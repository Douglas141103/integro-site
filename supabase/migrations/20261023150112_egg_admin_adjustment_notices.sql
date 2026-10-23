-- Operator-only balance corrections and evidence-backed skate restitution.
-- Account identities and individual adjustments are kept out of source control.
begin;
create table if not exists private.egg_admin_adjustments (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 reference text not null unique,
 amount bigint not null check(amount>0),
 message text not null check(length(message) between 1 and 2000),
 coins_before bigint not null, coins_after bigint not null check(coins_after>=0),
 skate_operation uuid, skates_before integer, skates_after integer,
 save_before jsonb not null,
 created_at timestamptz not null default now(), acknowledged_at timestamptz,
 unique(user_id,skate_operation),
 foreign key(user_id,skate_operation) references private.egg_winter_operations(user_id,request_id),
 check(coins_before-coins_after=amount)
);
alter table private.egg_admin_adjustments enable row level security;
revoke all on private.egg_admin_adjustments from public,anon,authenticated;
create index if not exists egg_admin_adjustments_user_unread on private.egg_admin_adjustments(user_id,created_at) where acknowledged_at is null;

create or replace function private.egg_admin_adjust(p_user uuid,p_reference text,p_amount bigint,p_message text,p_skate_operation uuid default null) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare s private.box_egg_saves; w private.egg_winter_inventory; receipt private.egg_admin_adjustments; coins bigint;
begin
 if p_user is null or p_reference is null or length(p_reference) not between 1 and 160 or p_amount is null or p_amount<=0 or p_message is null or length(p_message) not between 1 and 2000 then raise exception 'invalid_adjustment';end if;
 perform pg_advisory_xact_lock(832137);
 select * into receipt from private.egg_admin_adjustments where reference=p_reference;
 if found then
  if receipt.user_id<>p_user or receipt.amount<>p_amount or receipt.message<>p_message or receipt.skate_operation is distinct from p_skate_operation then raise exception 'adjustment_reference_changed';end if;
  return to_jsonb(receipt)-'save_before';
 end if;
 select * into s from private.box_egg_saves where user_id=p_user for update;
 if s.data is null then raise exception 'no_save';end if;
 coins:=(s.data->>'coins')::bigint;
 if coins is null or coins<p_amount then raise exception 'insufficient_integros';end if;
 if exists(select 1 from private.box_egg_trades where status='pending' and p_user in(a,b) and expires_at>now()) then raise exception 'trade_pending';end if;
 if p_skate_operation is not null then
  if not exists(select 1 from private.egg_winter_operations where user_id=p_user and request_id=p_skate_operation and action='winter_use') then raise exception 'skate_use_not_found';end if;
  if exists(select 1 from private.egg_admin_adjustments where user_id=p_user and skate_operation=p_skate_operation) then raise exception 'skate_already_refunded';end if;
  select * into w from private.egg_winter_inventory where user_id=p_user for update;
  if w.user_id is null or w.skates>=1000000 then raise exception 'invalid_skate_inventory';end if;
  update private.egg_winter_inventory set skates=skates+1,updated_at=now() where user_id=p_user;
 end if;
 update private.box_egg_saves set data=jsonb_set(data,'{coins}',to_jsonb(coins-p_amount)),revision=revision+1,updated_at=now() where user_id=p_user;
 insert into private.egg_admin_adjustments(user_id,reference,amount,message,coins_before,coins_after,skate_operation,skates_before,skates_after,save_before)
 values(p_user,p_reference,p_amount,p_message,coins,coins-p_amount,p_skate_operation,w.skates,case when p_skate_operation is not null then w.skates+1 else null end,s.data) returning * into receipt;
 return to_jsonb(receipt)-'save_before';
end $$;
revoke all on function private.egg_admin_adjust(uuid,text,bigint,text,uuid) from public,anon,authenticated;

create or replace function private.egg_adjustment_notice(p_action text,p_id uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid();begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action not in ('adjustment_notices','adjustment_ack') then raise exception 'invalid_action';end if;
 if p_action='adjustment_ack' then update private.egg_admin_adjustments set acknowledged_at=coalesce(acknowledged_at,now()) where id=p_id and user_id=u;end if;
 return jsonb_build_object('notices',coalesce((select jsonb_agg(jsonb_build_object('id',id,'amount',amount,'message',message,'balance',coins_after,'skates',coalesce(skates_after-skates_before,0),'created',created_at) order by created_at) from private.egg_admin_adjustments where user_id=u and acknowledged_at is null),'[]'::jsonb));
end $$;
revoke all on function private.egg_adjustment_notice(text,uuid) from public,anon,authenticated;
do $$declare source text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_adjustment_notice(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'egg_dispatch_anchor_missing';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''adjustment_notices'',''adjustment_ack'') then return private.egg_adjustment_notice(p_action,p_id);end if; if p_action=''capabilities''');execute source;
 end if;
end $$;
notify pgrst,'reload schema';
commit;
