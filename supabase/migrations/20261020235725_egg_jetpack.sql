-- Each 15-IntGem pack grants twelve launches. Purchases and launches are
-- idempotent, account-owned transactions; local game saves cannot mint charges.
create table if not exists private.egg_jetpacks (
 user_id uuid primary key references auth.users(id) on delete cascade,
 charges integer not null default 0 check(charges between 0 and 1000000),
 flight_id uuid, flight_until timestamptz, updated_at timestamptz not null default now()
);
create table if not exists private.egg_jetpack_operations (
 user_id uuid not null references auth.users(id) on delete cascade, request_id uuid not null,
 action text not null check(action in ('jet_buy','jet_launch')), created_at timestamptz not null default now(),
 primary key(user_id,request_id)
);
alter table private.egg_jetpacks enable row level security;
alter table private.egg_jetpack_operations enable row level security;
revoke all on private.egg_jetpacks,private.egg_jetpack_operations from public,anon,authenticated;
create or replace function private.box_egg_jetpack(p_action text,p_request uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); j private.egg_jetpacks; previous text; funds integer;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action not in ('jet_state','jet_buy','jet_launch','jet_land') then return jsonb_build_object('error','invalid_action');end if;
 if p_action<>'jet_state' and p_request is null then return jsonb_build_object('error','request_required');end if;
 if p_action='jet_buy' then
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  select balance into funds from private.intgem_wallets where user_id=u for update;
 end if;
 insert into private.egg_jetpacks(user_id) values(u) on conflict do nothing;
 select * into j from private.egg_jetpacks where user_id=u for update;
 if p_action in ('jet_buy','jet_launch') then
  select action into previous from private.egg_jetpack_operations where user_id=u and request_id=p_request;
  if found then
   if previous<>p_action then return jsonb_build_object('error','request_changed');end if;
  elsif p_action='jet_buy' then
   if funds<15 then return jsonb_build_object('error','insufficient_intgem');end if;
   if j.charges>999988 then return jsonb_build_object('error','jet_full');end if;
   insert into private.egg_jetpack_operations(user_id,request_id,action) values(u,p_request,p_action);
   update private.intgem_wallets set balance=balance-15,updated_at=now() where user_id=u;
   insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-15,'purchase','egg-jetpack:'||p_request::text);
   update private.egg_jetpacks set charges=charges+12,updated_at=now() where user_id=u;
  else
   if exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id join private.box_egg_races race on race.room_id=r.id where m.user_id=u and m.seen_at>now()-interval '30 seconds' and not r.closed and r.expires_at>now() and race.starts_at>now()-interval '2 minutes') then return jsonb_build_object('error','race_running');end if;
   if exists(select 1 from private.box_egg_trades t where u in(t.a,t.b) and t.status='pending' and t.expires_at>now()) then return jsonb_build_object('error','trade_pending');end if;
   if j.flight_until>now() then return jsonb_build_object('error','jet_active');end if;
   if j.charges<1 then return jsonb_build_object('error','jet_empty');end if;
   insert into private.egg_jetpack_operations(user_id,request_id,action) values(u,p_request,p_action);
   update private.egg_jetpacks set charges=charges-1,flight_id=p_request,flight_until=now()+interval '45 seconds',updated_at=now() where user_id=u;
  end if;
 elsif p_action='jet_land' then
  update private.egg_jetpacks set flight_until=null,updated_at=now() where user_id=u and flight_id=p_request;
 end if;
 select * into j from private.egg_jetpacks where user_id=u;
 return jsonb_build_object('charges',j.charges,'price',15,'pack',12,'duration',45,'now',now(),
  'balance',coalesce((select balance from private.intgem_wallets where user_id=u),0),
  'flight',case when j.flight_until>now() then jsonb_build_object('id',j.flight_id,'until',j.flight_until) else null end);
end $$;
revoke all on function private.box_egg_jetpack(text,uuid) from public,anon,authenticated;
do $$ declare source text;begin
 select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) into source;
 if position('private.box_egg_jetpack(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'box_egg_dispatcher_anchor_not_found';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''jet_state'',''jet_buy'',''jet_launch'',''jet_land'') then return private.box_egg_jetpack(p_action,p_id);end if; if p_action=''capabilities''');execute source;
 end if;
 -- Presentation flag only; payment and charge authorization stay in the helper.
 select pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure) into source;
 if position('''jetpack''' in source)=0 then
  if position('clean:=jsonb_build_object(''x'',x' in source)=0 then raise exception 'box_room_pose_anchor_not_found';end if;
  source:=replace(source,'clean:=jsonb_build_object(''x'',x','clean:=jsonb_build_object(''jetpack'',coalesce(r.game=''egg'' and p_state->>''jetpack''=''true'',false),''x'',x');execute source;
 end if;
end $$;
