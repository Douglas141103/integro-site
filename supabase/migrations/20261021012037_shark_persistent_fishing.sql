-- A cast now stays in the ocean until full and explicitly collected.
create table if not exists private.shark_fishing_runs (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 cage_id uuid not null references private.shark_cages(id), capacity integer not null check(capacity in(3,6,10)),
 position jsonb not null, levels jsonb not null default '[]', requests jsonb not null default '[]',
 place_request uuid not null, collect_request uuid, collected_at timestamptz,
 created_at timestamptz not null default now(), unique(user_id,place_request),
 check(jsonb_array_length(levels)<=capacity), check(jsonb_array_length(levels)=jsonb_array_length(requests))
);
create unique index if not exists shark_fishing_one_active on private.shark_fishing_runs(user_id) where collected_at is null;
alter table private.shark_fishing_runs enable row level security;
revoke all on private.shark_fishing_runs from public,anon,authenticated;
create or replace function private.shark_fishing_action(p_action text,p_payload jsonb) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); req uuid; chosen uuid; cage private.shark_cages; fishing private.shark_fishing_runs; result jsonb; receipt jsonb:=null; pos jsonb; level integer; idx integer;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_payload is null or jsonb_typeof(p_payload)<>'object' or octet_length(p_payload::text)>2048 then return jsonb_build_object('error','invalid_request');end if;
 if p_action in ('shark_cages','shark_cage_buy','shark_cage_cast') then
  -- Only allow recovery of already committed legacy catches.
  if p_action='shark_cage_cast' and not exists(select 1 from private.shark_cage_casts where user_id=u and request::text=p_payload->>'request') then return jsonb_build_object('error','cage_update_required');end if;
  result:=private.shark_cage_action(p_action,p_payload);
  if result ? 'error' then return result;end if;
 else
  if p_action not in ('shark_cage_place','shark_cage_catch','shark_cage_collect') then return jsonb_build_object('error','invalid_request');end if;
  begin req:=(p_payload->>'request')::uuid;chosen:=coalesce(p_payload->>'run',p_payload->>'cage')::uuid;exception when invalid_text_representation then return jsonb_build_object('error','invalid_request');end;
  if req is null or chosen is null then return jsonb_build_object('error','invalid_request');end if;
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  perform 1 from private.intgem_wallets where user_id=u for update;
  if p_action='shark_cage_place' then
   select * into cage from private.shark_cages where id=chosen and user_id=u for update;
   if not found then return jsonb_build_object('error','not_owned');end if;
   select * into fishing from private.shark_fishing_runs where user_id=u and place_request=req;
   if found then
    if fishing.cage_id<>chosen then return jsonb_build_object('error','request_changed');end if;
   else
    if exists(select 1 from private.shark_fishing_runs where user_id=u and collected_at is null) then return jsonb_build_object('error','cage_active');end if;
    if cage.uses_left=0 then return jsonb_build_object('error','cage_empty');end if;
    pos:=p_payload->'position';
    if pos is null or jsonb_typeof(pos)<>'object' or coalesce(jsonb_typeof(pos->'x'),'')<>'number' or coalesce(jsonb_typeof(pos->'y'),'')<>'number' or coalesce(jsonb_typeof(pos->'z'),'')<>'number' then return jsonb_build_object('error','invalid_position');end if;
    if (pos->>'x')::numeric not between -875 and 875 or (pos->>'y')::numeric not between 5 and 95 or (pos->>'z')::numeric not between -575 and 575 then return jsonb_build_object('error','invalid_position');end if;
    insert into private.shark_fishing_runs(user_id,cage_id,capacity,position,place_request) values(u,chosen,cage.capacity,pos,req) returning * into fishing;
    update private.shark_cages set uses_left=uses_left-1 where id=chosen;
   end if;
  else
   select * into fishing from private.shark_fishing_runs where id=chosen and user_id=u for update;
   if not found then return jsonb_build_object('error','not_owned');end if;
   if p_action='shark_cage_catch' then
    if coalesce(p_payload->>'level','') !~ '^([0-9]|[1-5][0-9])$' or jsonb_typeof(p_payload->'level')<>'number' then return jsonb_build_object('error','invalid_catch');end if;
    level:=(p_payload->>'level')::integer;
    select ord::integer-1 into idx from jsonb_array_elements_text(fishing.requests) with ordinality as a(value,ord) where value=req::text;
    if found then
     if (fishing.levels->>idx)::integer<>level then return jsonb_build_object('error','request_changed');end if;
    else
     if fishing.collected_at is not null then return jsonb_build_object('error','already_collected');end if;
     if jsonb_array_length(fishing.levels)>=fishing.capacity then return jsonb_build_object('error','cage_full');end if;
     update private.shark_fishing_runs set levels=levels||jsonb_build_array(level),requests=requests||jsonb_build_array(req) where id=fishing.id returning * into fishing;
    end if;
   else
    if fishing.collected_at is not null and fishing.collect_request<>req then return jsonb_build_object('error','already_collected');end if;
    if jsonb_array_length(fishing.levels)<fishing.capacity then return jsonb_build_object('error','cage_not_full');end if;
    update private.shark_fishing_runs set collected_at=coalesce(collected_at,now()),collect_request=req where id=fishing.id;
    select * into cage from private.shark_cages where id=fishing.cage_id;
    receipt:=jsonb_build_object('id',fishing.id,'cage',cage.id,'capacity',fishing.capacity,'uses_left',cage.uses_left,'levels',fishing.levels);
   end if;
  end if;
  result:=private.shark_cage_action('shark_cages','{}')||jsonb_build_object('cast',receipt);
 end if;
 return result||jsonb_build_object('active',(select jsonb_build_object('id',r.id,'cage',r.cage_id,'capacity',r.capacity,'position',r.position,'levels',r.levels,'uses_left',c.uses_left) from private.shark_fishing_runs r join private.shark_cages c on c.id=r.cage_id where r.user_id=u and r.collected_at is null));
end $$;
revoke all on function private.shark_fishing_action(text,jsonb) from public,anon,authenticated;
do $$ declare source text;begin
 select pg_get_functiondef('public.box_intgem(text,jsonb)'::regprocedure) into source;
 if position('private.shark_fishing_action(' in source)=0 then
  if position('private.shark_cage_action(p_action,p_payload)' in source)=0 then raise exception 'shark_dispatch_anchor_not_found';end if;
  source:=replace(source,'''shark_cages'',''shark_cage_buy'',''shark_cage_cast''','''shark_cages'',''shark_cage_buy'',''shark_cage_cast'',''shark_cage_place'',''shark_cage_catch'',''shark_cage_collect''');
  source:=replace(source,'private.shark_cage_action(p_action,p_payload)','private.shark_fishing_action(p_action,p_payload)');execute source;
 end if;
end $$;
