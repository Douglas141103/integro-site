-- Purchasable account-owned cages; five casts per cage, no client-minted uses.
create table if not exists private.shark_cages (
 id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id) on delete cascade,
 tier integer not null check(tier between 1 and 3),capacity integer not null check(capacity in(3,6,10)),
 uses_left integer not null default 5 check(uses_left between 0 and 5),purchase_request uuid not null,
 created_at timestamptz not null default now(),unique(user_id,purchase_request),
 check(capacity=case tier when 1 then 3 when 2 then 6 else 10 end)
);
create index if not exists shark_cages_owner_active on private.shark_cages(user_id,created_at) where uses_left>0;
create table if not exists private.shark_cage_casts (
 user_id uuid not null references auth.users(id) on delete cascade,request uuid not null,
 cage_id uuid not null references private.shark_cages(id),levels jsonb not null,
 created_at timestamptz not null default now(),primary key(user_id,request)
);
alter table private.shark_cages enable row level security;
alter table private.shark_cage_casts enable row level security;
revoke all on private.shark_cages,private.shark_cage_casts from public,anon,authenticated;
create or replace function private.shark_cage_action(p_action text,p_payload jsonb) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); req uuid; chosen uuid; v_tier integer; funds integer; cage private.shark_cages; receipt private.shark_cage_casts; result_cast jsonb:=null; levels jsonb;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_payload is null or jsonb_typeof(p_payload)<>'object' or octet_length(p_payload::text)>2048 then return jsonb_build_object('error','invalid_request');end if;
 if p_action not in ('shark_cages','shark_cage_buy','shark_cage_cast') then return jsonb_build_object('error','invalid_request');end if;
 if p_action<>'shark_cages' then
  begin req:=(p_payload->>'request')::uuid;exception when invalid_text_representation then return jsonb_build_object('error','invalid_request');end;
  if req is null then return jsonb_build_object('error','invalid_request');end if;
  -- Same wallet-first lock ordering as all other IntGem purchases.
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  select balance into funds from private.intgem_wallets where user_id=u for update;
 end if;
 if p_action='shark_cage_buy' then
  if coalesce(p_payload->>'tier','') not in ('1','2','3') then return jsonb_build_object('error','invalid_cage');end if;
  v_tier:=(p_payload->>'tier')::integer;
  select * into cage from private.shark_cages where user_id=u and purchase_request=req;
  if found then
   if cage.tier<>v_tier then return jsonb_build_object('error','request_changed');end if;
  else
   if funds<v_tier then return jsonb_build_object('error','insufficient_balance');end if;
   if (select count(*) from private.shark_cages where user_id=u and uses_left>0)>=50 then return jsonb_build_object('error','cage_limit');end if;
   insert into private.shark_cages(user_id,tier,capacity,purchase_request) values(u,v_tier,case v_tier when 1 then 3 when 2 then 6 else 10 end,req);
   update private.intgem_wallets set balance=balance-v_tier,updated_at=now() where user_id=u;
   insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-v_tier,'purchase','shark-cage:'||req::text);
  end if;
 elsif p_action='shark_cage_cast' then
  begin chosen:=(p_payload->>'cage')::uuid;exception when invalid_text_representation then return jsonb_build_object('error','invalid_cage');end;
  select * into cage from private.shark_cages where id=chosen and user_id=u for update;
  if not found then return jsonb_build_object('error','not_owned');end if;
  select * into receipt from private.shark_cage_casts where user_id=u and request=req;
  if found then
   if receipt.cage_id<>chosen then return jsonb_build_object('error','request_changed');end if;
  else
   if cage.uses_left=0 then return jsonb_build_object('error','cage_empty');end if;
   levels:=p_payload->'levels';
   if levels is null or jsonb_typeof(levels)<>'array' then return jsonb_build_object('error','invalid_catch');end if;
   if jsonb_array_length(levels)<1 or jsonb_array_length(levels)>cage.capacity then return jsonb_build_object('error','invalid_catch');end if;
   if exists(select 1 from jsonb_array_elements(levels) e where jsonb_typeof(e)<>'number' or e::text !~ '^([0-9]|[1-5][0-9])$') then return jsonb_build_object('error','invalid_catch');end if;
   insert into private.shark_cage_casts(user_id,request,cage_id,levels) values(u,req,chosen,levels) returning * into receipt;
   update private.shark_cages set uses_left=uses_left-1 where id=chosen returning * into cage;
  end if;
  result_cast:=jsonb_build_object('id',receipt.request,'cage',cage.id,'capacity',cage.capacity,'uses_left',cage.uses_left,'levels',receipt.levels);
 end if;
 return jsonb_build_object('balance',coalesce((select balance from private.intgem_wallets where user_id=u),0),
  'cages',coalesce((select jsonb_agg(jsonb_build_object('id',id,'tier',tier,'capacity',capacity,'uses_left',uses_left) order by created_at,id) from private.shark_cages where user_id=u and uses_left>0),'[]'::jsonb),
  'cast',result_cast);
end $$;
revoke all on function private.shark_cage_action(text,jsonb) from public,anon,authenticated;
do $$ declare source text;begin
 select pg_get_functiondef('public.box_intgem(text,jsonb)'::regprocedure) into source;
 if position('private.shark_cage_action(' in source)=0 then
  if position('if p_action is null or p_action not in' in source)=0 then raise exception 'intgem_dispatch_anchor_not_found';end if;
  source:=replace(source,'if p_action is null or p_action not in','if p_action in (''shark_cages'',''shark_cage_buy'',''shark_cage_cast'') then return private.shark_cage_action(p_action,p_payload);end if; if p_action is null or p_action not in');execute source;
 end if;
end $$;
