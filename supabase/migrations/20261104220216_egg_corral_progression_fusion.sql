-- Paid fusion is account-owned and atomic. Training passes and the upper corral
-- floor remain ordinary Integro game progression; only fusion spends IntGems.
create table if not exists private.egg_fusion_operations(
 user_id uuid not null references auth.users(id) on delete cascade,
 request_id uuid not null, action text not null check(action in ('fusion_buy','fusion_use')),
 main_uid text, donor_uid text, created_at timestamptz not null default now(),
 primary key(user_id,request_id)
);
alter table private.egg_fusion_operations enable row level security;
revoke all on private.egg_fusion_operations from public,anon,authenticated;

create or replace function private.egg_fusion_rate(p jsonb) returns numeric
language plpgsql immutable security invoker set search_path='' as $$
declare values_by_world numeric[]:=array[80,140,230,360,550,850,1300,1900,2700,3700,5000,6800,9500,13500,18000,24000,32000,42000,56000,75000,75000,45000,50000]; v numeric;
begin
 if (p->>'world')::integer=20 and coalesce(p->>'winterReward','true')<>'false' then
  v:=case p->>'rarity' when 'rare' then 900000 when 'epic' then 1000000 when 'legendary' then 2000000 when 'secret' then 3000000 else 800000 end;
 else
  v:=values_by_world[(p->>'world')::integer+1]*(case p->>'rarity' when 'rare' then 3 when 'epic' then 5 when 'legendary' then 8 when 'secret' then 12 else 1 end)*(case p->>'mutation' when 'gold' then 1.5 when 'rainbow' then 2 when 'cosmic' then 3 else 1 end);
 end if;
 return v/1200*.35+coalesce((p->>'fusionBonus')::numeric,0);
end $$;
revoke all on function private.egg_fusion_rate(jsonb) from public,anon,authenticated;

create or replace function private.egg_progression_valid(old_save jsonb,new_save jsonb) returns boolean
language plpgsql immutable security invoker set search_path='' as $$
declare p jsonb; previous jsonb; k text; n numeric;
begin
 if new_save ? 'secondFloor' and jsonb_typeof(new_save->'secondFloor')<>'boolean' then return false;end if;
 if old_save->>'secondFloor'='true' and coalesce(new_save->>'secondFloor','false')<>'true' then return false;end if;
 if new_save ? 'trainingPasses' then
  if jsonb_typeof(new_save->'trainingPasses')<>'object' then return false;end if;
  foreach k in array array['gold','galaxy'] loop
   if jsonb_typeof(new_save->'trainingPasses'->k) is distinct from 'number' then return false;end if;
   n:=(new_save->'trainingPasses'->>k)::numeric;if n not between 0 and 300 then return false;end if;
  end loop;
 end if;
 if coalesce(new_save->'fusion'->>'owned','false')<>coalesce(old_save->'fusion'->>'owned','false') or coalesce((new_save->'fusion'->>'charges')::numeric,0)<>coalesce((old_save->'fusion'->>'charges')::numeric,0) then return false;end if;
 if new_save ? 'fusion' and (jsonb_typeof(new_save->'fusion')<>'object' or jsonb_typeof(new_save->'fusion'->'owned') is distinct from 'boolean' or jsonb_typeof(new_save->'fusion'->'charges') is distinct from 'number') then return false;end if;
 for p in select value from jsonb_array_elements(new_save->'creatures') loop
  select value into previous from jsonb_array_elements(coalesce(old_save->'creatures','[]')) where value->>'uid'=p->>'uid';
  if coalesce((p->>'fusionBonus')::numeric,0) not between 0 and 1000000 or abs(coalesce((p->>'fusionBonus')::numeric,0)-coalesce((previous->>'fusionBonus')::numeric,0))>.00000001 or coalesce((p->>'fusionLevel')::numeric,0)<>coalesce((previous->>'fusionLevel')::numeric,0) then return false;end if;
 end loop;
 return true;
 exception when others then return false;
end $$;
revoke all on function private.egg_progression_valid(jsonb,jsonb) from public,anon,authenticated;

create or replace function private.box_egg_fusion(action text,request uuid,expected_revision integer,main_uid text,donor_uid text) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); s private.box_egg_saves; op private.egg_fusion_operations; funds integer; charges integer; main jsonb; donor jsonb; merged jsonb; pets jsonb; bonus numeric; level integer;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if action not in ('fusion_buy','fusion_use') or request is null then return jsonb_build_object('error','invalid_action');end if;
 if action='fusion_buy' then
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  select balance into funds from private.intgem_wallets where user_id=u for update;
 end if;
 perform pg_advisory_xact_lock(832137);
 select * into s from private.box_egg_saves where user_id=u for update;
 if s.data is null then return jsonb_build_object('error','no_save');end if;
 select * into op from private.egg_fusion_operations where user_id=u and request_id=request;
 if found then
  if op.action<>action or op.main_uid is distinct from main_uid or op.donor_uid is distinct from donor_uid then return jsonb_build_object('error','request_changed');end if;
  return jsonb_build_object('save',s.data,'revision',s.revision,'balance',(select balance from private.intgem_wallets where user_id=u));
 end if;
 if s.revision<>expected_revision then return jsonb_build_object('error','conflict');end if;
 if exists(select 1 from private.box_egg_trades where u in(a,b) and status='pending' and expires_at>now()) then return jsonb_build_object('error','trade_pending');end if;
 if exists(select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id join private.box_egg_races race on race.room_id=r.id where m.user_id=u and m.seen_at>now()-interval '30 seconds' and not r.closed and r.expires_at>now() and race.starts_at>now()-interval '2 minutes') then return jsonb_build_object('error','race_running');end if;
 if exists(select 1 from private.egg_jetpacks where user_id=u and flight_until>now()) then return jsonb_build_object('error','jet_active');end if;
 charges:=coalesce((s.data->'fusion'->>'charges')::integer,0);
 if action='fusion_buy' then
  if funds<10 then return jsonb_build_object('error','insufficient_intgem');end if;
  if charges>990 then return jsonb_build_object('error','fusion_full');end if;
  update private.intgem_wallets set balance=balance-10,updated_at=now() where user_id=u;
  insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-10,'purchase','egg-fusion:'||request::text);
  s.data:=jsonb_set(s.data,'{fusion}',jsonb_build_object('owned',true,'charges',charges+10));
 else
  if coalesce(s.data->'fusion'->>'owned','false')<>'true' or charges<1 then return jsonb_build_object('error','fusion_empty');end if;
  if main_uid is null or donor_uid is null or main_uid=donor_uid then return jsonb_build_object('error','invalid_fusion');end if;
  select value into main from jsonb_array_elements(s.data->'creatures') where value->>'uid'=main_uid;
  select value into donor from jsonb_array_elements(s.data->'creatures') where value->>'uid'=donor_uid;
  if main is null or donor is null then return jsonb_build_object('error','pet_missing');end if;
  bonus:=(private.egg_fusion_rate(main)+private.egg_fusion_rate(donor))*1.25-private.egg_fusion_rate(main||'{"fusionBonus":0}');
  level:=greatest(coalesce((main->>'fusionLevel')::integer,0),coalesce((donor->>'fusionLevel')::integer,0))+1;
  if bonus>1000000 or level>1000 then return jsonb_build_object('error','fusion_limit');end if;
  merged:=main||jsonb_build_object('fusionBonus',bonus,'fusionLevel',level,'incomeProgress',coalesce((main->>'incomeProgress')::numeric,0)+coalesce((donor->>'incomeProgress')::numeric,0));
  select jsonb_agg(case when value->>'uid'=main_uid then merged else value end order by ord) into pets from jsonb_array_elements(s.data->'creatures') with ordinality a(value,ord) where value->>'uid'<>donor_uid;
  s.data:=jsonb_set(jsonb_set(s.data,'{creatures}',pets),'{fusion}',jsonb_build_object('owned',true,'charges',charges-1));
  if s.data->>'companionId'=donor_uid then s.data:=jsonb_set(s.data,'{companionId}',to_jsonb(main_uid));end if;
 end if;
 s.data:=s.data||'{"progressionVersion":1}';
 update private.box_egg_saves set data=s.data,revision=revision+1,updated_at=now() where user_id=u returning * into s;
 insert into private.egg_fusion_operations(user_id,request_id,action,main_uid,donor_uid) values(u,request,action,main_uid,donor_uid);
 return jsonb_build_object('save',s.data,'revision',s.revision,'balance',(select balance from private.intgem_wallets where user_id=u));
end $$;
revoke all on function private.box_egg_fusion(text,uuid,integer,text,text) from public,anon,authenticated;

do $$declare f text;anchor text;begin
 f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.box_egg_fusion(' in f)=0 then
  anchor:='if p_action=''capabilities''';if position(anchor in f)=0 then raise exception 'fusion_dispatch_anchor_missing';end if;
  f:=replace(f,anchor,'if p_action in (''fusion_buy'',''fusion_use'') then return private.box_egg_fusion(p_action,p_id,p_revision,p_offer,p_want);end if; '||anchor);
  anchor:='>3+2*(p_data->''upgrades''->>''pen'')::integer';if position(anchor in f)=0 then raise exception 'corral_capacity_anchor_missing';end if;
  f:=replace(f,anchor,anchor||'+(case when p_data->>''secondFloor''=''true'' then 24 else 0 end)');
  anchor:='   -- Egg 20: validate mounted vehicles and all incubating eggs.';if position(anchor in f)=0 then raise exception 'progression_validation_anchor_missing';end if;
  f:=replace(f,anchor,'   if not private.egg_progression_valid(s.data,p_data) then return jsonb_build_object(''error'',''progression_update_required'');end if;'||chr(10)||anchor);
  f:=replace(f,'''mutation'',value->>''mutation''','''mutation'',value->>''mutation'',''fusionBonus'',value->''fusionBonus'',''fusionLevel'',value->''fusionLevel''');
  f:=replace(f,'''decoration'',other.data->>''decoration''','''decoration'',other.data->>''decoration'',''secondFloor'',other.data->''secondFloor'',''upgrades'',other.data->''upgrades'',''fusion'',other.data->''fusion''');
  execute f;
 end if;
end $$;
