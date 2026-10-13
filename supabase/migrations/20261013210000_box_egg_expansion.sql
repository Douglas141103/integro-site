-- Pegue o Ovo: profile saves, corral visits, confirmed creature trades and room races.
begin;
create table private.box_egg_saves(user_id uuid primary key references auth.users(id) on delete cascade,revision integer not null default 0,data jsonb,updated_at timestamptz not null default now());
create table private.box_egg_tokens(token text primary key,owner_id uuid not null references auth.users(id) on delete cascade);
create table private.box_egg_trades(id uuid primary key default gen_random_uuid(),room_id uuid not null references private.box_rooms(id) on delete cascade,a uuid not null references auth.users(id) on delete cascade,b uuid not null references auth.users(id) on delete cascade,a_pet text not null,b_pet text not null,a_revision integer not null,b_revision integer not null,confirmed boolean not null default false,status text not null default 'pending',expires_at timestamptz not null default now()+interval '2 minutes');
create table private.box_egg_races(room_id uuid primary key references private.box_rooms(id) on delete cascade,id uuid not null default gen_random_uuid(),starts_at timestamptz not null,world integer not null,results jsonb not null default '{}');
alter table private.box_egg_saves enable row level security;
alter table private.box_egg_tokens enable row level security;
alter table private.box_egg_trades enable row level security;
alter table private.box_egg_races enable row level security;
revoke all on private.box_egg_saves,private.box_egg_tokens,private.box_egg_trades,private.box_egg_races from public,anon,authenticated;
-- Keep existing room behavior; extend only egg track coordinates (12 continuous worlds).
do $$declare f text;begin
 f:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 f:=replace(f,'and z between -200 and 200','and z between (case when r.game=''egg'' then -580 else -200 end) and 200');
 execute f;
end $$;
create or replace function public.box_egg(p_action text,p_revision integer default -1,p_data jsonb default null,p_room uuid default null,p_slot integer default null,p_id uuid default null,p_offer text default null,p_want text default null,p_world integer default 0)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); s private.box_egg_saves%rowtype; other private.box_egg_saves%rowtype; m private.box_members%rowtype; target private.box_members%rowtype; r private.box_rooms%rowtype; t private.box_egg_trades%rowtype; race private.box_egg_races%rowtype; pet jsonb; ap jsonb; bp jsonb; pets jsonb; result jsonb; trades jsonb; checkpoint jsonb; k text; z numeric; elapsed numeric;
begin
 if u is null or not exists(select 1 from public.profiles where id=u and role::text in ('responsavel','integro_admin','diretor','coordenacao','professor')) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action not in ('load','save','room','visit','offer','accept','confirm','cancel','race_start','race_tick') then return jsonb_build_object('error','invalid_action');end if;
 -- All egg transactions lock in the same order. Active games save at most every 15 s.
 perform pg_advisory_xact_lock(832137);
 update private.box_egg_trades set status='expired' where status='pending' and (expires_at<now() or not exists(select 1 from private.box_rooms br where br.id=box_egg_trades.room_id and not br.closed and br.expires_at>now()) or (select count(*) from private.box_members bm where bm.room_id=box_egg_trades.room_id and bm.user_id in(box_egg_trades.a,box_egg_trades.b) and bm.seen_at>now()-interval '30 seconds')<2);
 insert into private.box_egg_saves(user_id) values(u) on conflict do nothing;
 select * into s from private.box_egg_saves where user_id=u for update;
 if p_action='load' then return jsonb_build_object('save',s.data,'revision',s.revision);end if;
 if p_action='save' then
  if p_revision<>s.revision then return jsonb_build_object('error','conflict','save',s.data,'revision',s.revision);end if;
  if exists(select 1 from private.box_egg_trades where status='pending' and u in(a,b)) then return jsonb_build_object('error','trade_pending');end if;
  if p_data is null or jsonb_typeof(p_data)<>'object' or octet_length(p_data::text)>65536 or p_data->>'version'<>'4' or jsonb_typeof(p_data->'creatures')<>'array' or jsonb_typeof(p_data->'eggs')<>'array' then return jsonb_build_object('error','invalid_save');end if;
  begin
   if coalesce((p_data->>'coins')::numeric,-1) not between 0 and 1000000000 or coalesce((p_data->>'training')::integer,-1) not between 0 and 600 or coalesce((p_data->'upgrades'->>'pen')::integer,-1) not between 0 and 10 or jsonb_array_length(p_data->'creatures')+jsonb_array_length(p_data->'eggs')>3+2*(p_data->'upgrades'->>'pen')::integer then return jsonb_build_object('error','invalid_save');end if;
   for pet in select value from jsonb_array_elements(p_data->'creatures') loop
    if coalesce(pet->>'uid','') !~ '^[a-zA-Z0-9_-]{1,80}$' or coalesce((pet->>'world')::integer,-1) not between 0 and 11 or coalesce(pet->>'rarity','') not in('common','rare','epic','legendary','secret') or coalesce(pet->>'mutation','') not in('normal','gold','rainbow','cosmic') then return jsonb_build_object('error','invalid_save');end if;
    if exists(select 1 from private.box_egg_tokens where token=pet->>'uid' and owner_id<>u) then return jsonb_build_object('error','pet_transferred');end if;
   end loop;
  exception when invalid_text_representation or numeric_value_out_of_range then return jsonb_build_object('error','invalid_save');end;
  if (select count(*) from jsonb_array_elements(p_data->'creatures'))<>(select count(distinct value->>'uid') from jsonb_array_elements(p_data->'creatures')) then return jsonb_build_object('error','duplicate_pet');end if;
  insert into private.box_egg_tokens(token,owner_id) select value->>'uid',u from jsonb_array_elements(p_data->'creatures') on conflict do nothing;
  update private.box_egg_saves set data=p_data,revision=revision+1,updated_at=now() where user_id=u returning * into s;
  return jsonb_build_object('revision',s.revision);
 end if;
 select * into r from private.box_rooms where id=p_room and game='egg' and not closed and expires_at>now() for update;
 select * into m from private.box_members where room_id=p_room and user_id=u and seen_at>now()-interval '30 seconds';
 if r.id is null or m.user_id is null then return jsonb_build_object('error','not_member');end if;
 if p_action in('visit','offer') then
  select * into target from private.box_members where room_id=r.id and slot=p_slot and user_id<>u and seen_at>now()-interval '30 seconds';
  if target.user_id is null then return jsonb_build_object('error','not_member');end if;
  select * into other from private.box_egg_saves where user_id=target.user_id for update;
  if other.data is null then return jsonb_build_object('error','no_save');end if;
 end if;
 if p_action='visit' then
  select coalesce(jsonb_agg(jsonb_build_object('uid',value->>'uid','world',value->'world','rarity',value->>'rarity','mutation',value->>'mutation')),'[]') into pets from jsonb_array_elements(other.data->'creatures');
  return jsonb_build_object('corral',jsonb_build_object('creatures',pets,'eggs','[]'::jsonb,'decoration',other.data->>'decoration'),'revision',other.revision);
 elsif p_action='offer' then
  if s.data is null or p_revision<>s.revision then return jsonb_build_object('error','conflict','save',s.data,'revision',s.revision);end if;
  if coalesce((m.state->>'z')::numeric,0)<3 or coalesce((target.state->>'z')::numeric,0)<3 then return jsonb_build_object('error','base_required');end if;
  if exists(select 1 from private.box_egg_trades where status='pending' and (u in(a,b) or target.user_id in(a,b))) then return jsonb_build_object('error','trade_pending');end if;
  select value into ap from jsonb_array_elements(s.data->'creatures') where value->>'uid'=p_offer;
  select value into bp from jsonb_array_elements(other.data->'creatures') where value->>'uid'=p_want;
  if ap is null or bp is null then return jsonb_build_object('error','pet_missing');end if;
  insert into private.box_egg_trades(room_id,a,b,a_pet,b_pet,a_revision,b_revision) values(r.id,u,target.user_id,p_offer,p_want,s.revision,other.revision) returning * into t;
 elsif p_action in('accept','confirm','cancel') then
  select * into t from private.box_egg_trades where id=p_id and room_id=r.id and u in(a,b) for update;
  if t.id is null or t.status<>'pending' then return jsonb_build_object('error','trade_closed');end if;
  if p_action='cancel' then update private.box_egg_trades set status='cancelled' where id=t.id;
  elsif p_action='accept' then
   if t.b<>u then return jsonb_build_object('error','wrong_party');end if;
   update private.box_egg_trades set confirmed=true where id=t.id;
  elsif p_action='confirm' then
   if t.a<>u or not t.confirmed then return jsonb_build_object('error','confirmation_required');end if;
   select * into s from private.box_egg_saves where user_id=t.a for update;
   select * into other from private.box_egg_saves where user_id=t.b for update;
   if s.revision<>t.a_revision or other.revision<>t.b_revision then update private.box_egg_trades set status='cancelled' where id=t.id;return jsonb_build_object('error','trade_changed');end if;
   if not exists(select 1 from private.box_members where user_id=t.b and room_id=r.id and seen_at>now()-interval '30 seconds' and (state->>'z')::numeric>=3) or coalesce((m.state->>'z')::numeric,0)<3 then return jsonb_build_object('error','base_required');end if;
   select value into ap from jsonb_array_elements(s.data->'creatures') where value->>'uid'=t.a_pet;
   select value into bp from jsonb_array_elements(other.data->'creatures') where value->>'uid'=t.b_pet;
   if ap is null or bp is null then return jsonb_build_object('error','pet_missing');end if;
   select coalesce(jsonb_agg(value),'[]')||jsonb_build_array(bp) into pets from jsonb_array_elements(s.data->'creatures') where value->>'uid'<>t.a_pet;
   update private.box_egg_saves set data=jsonb_set(jsonb_set(data,'{creatures}',pets),'{companionId}','null'),revision=revision+1,updated_at=now() where user_id=t.a;
   select coalesce(jsonb_agg(value),'[]')||jsonb_build_array(ap) into pets from jsonb_array_elements(other.data->'creatures') where value->>'uid'<>t.b_pet;
   update private.box_egg_saves set data=jsonb_set(jsonb_set(data,'{creatures}',pets),'{companionId}','null'),revision=revision+1,updated_at=now() where user_id=t.b;
   update private.box_egg_tokens set owner_id=case token when t.a_pet then t.b else t.a end where token in(t.a_pet,t.b_pet);
   update private.box_egg_trades set status='completed' where id=t.id;
  end if;
 elsif p_action='race_start' then
  if r.owner_id<>u then return jsonb_build_object('error','not_owner');end if;
  if p_world not between 0 and 11 then return jsonb_build_object('error','invalid_world');end if;
  if (select count(*) from private.box_members where room_id=r.id and seen_at>now()-interval '30 seconds' and coalesce((state->>'z')::numeric,0)>=3)<2 or exists(select 1 from private.box_members where room_id=r.id and seen_at>now()-interval '30 seconds' and coalesce((state->>'z')::numeric,0)<3) then return jsonb_build_object('error','base_required');end if;
  if exists(select 1 from private.box_egg_races where room_id=r.id and starts_at>now()-interval '2 minutes') then return jsonb_build_object('error','race_running');end if;
  insert into private.box_egg_races(room_id,starts_at,world) values(r.id,now()+interval '6 seconds',p_world) on conflict(room_id) do update set id=gen_random_uuid(),starts_at=excluded.starts_at,world=excluded.world,results='{}';
 elsif p_action='race_tick' then
  select * into race from private.box_egg_races where room_id=r.id for update;
  if race.room_id is not null and now() between race.starts_at and race.starts_at+interval '2 minutes' then
   z:=coalesce((m.state->>'z')::numeric,15);k:=m.slot::text;checkpoint:=coalesce(race.results->k,'{}');elapsed:=extract(epoch from(now()-race.starts_at));
   if z<=-(race.world*48+24) and elapsed>=(race.world*48+39)/30.0 then checkpoint:=checkpoint||'{"checkpoint":true}'::jsonb;end if;
   if checkpoint->>'checkpoint'='true' and z>=12 and not(checkpoint?'finished') and elapsed>=2*(race.world*48+36)/30.0 then checkpoint:=checkpoint||jsonb_build_object('finished',round(elapsed,2));end if;
   update private.box_egg_races set results=jsonb_set(results,array[k],checkpoint) where room_id=r.id;
  end if;
 end if;
 select * into s from private.box_egg_saves where user_id=u;
 select coalesce(jsonb_agg(jsonb_build_object('id',et.id,'side',case when et.a=u then 'a' else 'b' end,'confirmed',et.confirmed,'status',et.status,'expires',et.expires_at,'give',case when et.a=u then et.a_pet else et.b_pet end,'receive',case when et.a=u then et.b_pet else et.a_pet end)),'[]') into trades from private.box_egg_trades et where et.room_id=r.id and u in(et.a,et.b) and et.expires_at>now()-interval '2 minutes';
 select jsonb_build_object('id',er.id,'starts',er.starts_at,'world',er.world,'results',er.results) into result from private.box_egg_races er where er.room_id=r.id;
 return jsonb_build_object('revision',s.revision,'trades',trades,'race',result,'now',now());
end $$;
revoke all on function public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer) from public,anon;
grant execute on function public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer) to authenticated;
notify pgrst,'reload schema';
commit;
