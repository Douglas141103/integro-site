-- Invitation rooms. Database stores membership only; gameplay uses private Realtime broadcast.
create table private.engole_rooms (
 id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
 code text not null unique default upper(substr(replace(gen_random_uuid()::text,'-',''),1,12)),
 seed integer not null default floor(random()*2147483646)::integer,
 phase text not null default 'waiting' check (phase in ('waiting','playing','ended','closed')),
 created_at timestamptz not null default now(), expires_at timestamptz not null default now()+interval '30 minutes', started_at timestamptz
);
create index engole_rooms_owner on private.engole_rooms(owner_id,created_at);
create table private.engole_members (
 room_id uuid not null references private.engole_rooms(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 slot integer not null check(slot between 0 and 7), primary key(room_id,user_id),unique(room_id,slot)
);
create index engole_members_user on private.engole_members(user_id);
alter table private.engole_rooms enable row level security;
alter table private.engole_members enable row level security;
revoke all on private.engole_rooms,private.engole_members from public,anon,authenticated;

create function private.engole_action(p_action text,p_code text default null,p_room uuid default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); r private.engole_rooms; s integer; result jsonb;
begin
 if u is null or not private.box_can_play(u) then raise exception 'access_denied'; end if;
 if p_action='create' then
  perform pg_advisory_xact_lock(hashtextextended(u::text,25));
  if (select count(*) from private.engole_rooms where owner_id=u and created_at>now()-interval '1 hour')>=10 then raise exception 'room_rate_limit'; end if;
  update private.engole_rooms set phase='closed' where owner_id=u and phase in ('waiting','playing');
  insert into private.engole_rooms(owner_id) values(u) returning * into r;
  insert into private.engole_members values(r.id,u,0);
 elsif p_action='join' then
  select * into r from private.engole_rooms where code=upper(regexp_replace(coalesce(p_code,''),'[^a-zA-Z0-9]','','g')) and expires_at>now() for update;
  if r.id is null or r.phase not in ('waiting','playing') then raise exception 'room_not_found'; end if;
  if not exists(select 1 from private.engole_members where room_id=r.id and user_id=u) then
   if r.phase<>'waiting' then raise exception 'already_started'; end if;
   select i into s from generate_series(0,7) i where not exists(select 1 from private.engole_members where room_id=r.id and slot=i) order by i limit 1;
   if s is null then raise exception 'room_full'; end if;
   insert into private.engole_members values(r.id,u,s);
  end if;
 else
  select * into r from private.engole_rooms where id=p_room and expires_at>now() for update;
  if r.id is null or not exists(select 1 from private.engole_members where room_id=r.id and user_id=u) then raise exception 'room_not_found'; end if;
  if p_action='start' then
   if r.owner_id<>u then raise exception 'host_only'; end if;
   if r.phase<>'waiting' then raise exception 'already_started'; end if;
   if (select count(*) from private.engole_members where room_id=r.id)<2 then raise exception 'need_players'; end if;
   update private.engole_rooms set phase='playing',started_at=now()+interval '5 seconds' where id=r.id returning * into r;
  elsif p_action='end' then
   if r.owner_id<>u then raise exception 'host_only'; end if;
   if r.phase='playing' then update private.engole_rooms set phase='ended' where id=r.id returning * into r; end if;
  elsif p_action='leave' then
   if r.owner_id=u then update private.engole_rooms set phase='closed' where id=r.id; end if;
   delete from private.engole_members where room_id=r.id and user_id=u;
   return jsonb_build_object('left',true);
  elsif p_action<>'status' then raise exception 'invalid_action'; end if;
 end if;
 select jsonb_build_object('id',r.id,'code',r.code,'owner',r.owner_id,'seed',r.seed,'phase',r.phase,
 'startedAt',r.started_at,'serverAt',clock_timestamp(),'expiresAt',r.expires_at,
 'players',(select coalesce(jsonb_agg(jsonb_build_object('id',user_id,'slot',slot) order by slot),'[]'::jsonb) from private.engole_members where room_id=r.id)) into result;
 return result;
end $$;
revoke all on function private.engole_action(text,text,uuid) from public,anon;
revoke all on function private.engole_action(text,text,uuid) from authenticated;
create function public.box_engole(p_action text,p_code text default null,p_room uuid default null) returns jsonb
language sql security definer set search_path='' as $$ select private.engole_action(p_action,p_code,p_room); $$;
revoke all on function public.box_engole(text,text,uuid) from public,anon;
grant execute on function public.box_engole(text,text,uuid) to authenticated;

create function private.engole_channel_allowed(topic text, sending boolean) returns boolean
language plpgsql stable security definer set search_path='' as $$
declare parts text[]:=string_to_array(topic,':'); r private.engole_rooms; u uuid:=auth.uid();
begin
 if u is null or array_length(parts,1) not in (3,4) or parts[1]<>'engole' then return false; end if;
 if parts[2]!~'^[0-9a-f-]{36}$' then return false; end if;
 select * into r from private.engole_rooms where id::text=parts[2] and expires_at>now() and phase<>'closed';
 if r.id is null or not exists(select 1 from private.engole_members where room_id=r.id and user_id=u) or not private.box_can_play(u) then return false; end if;
 if parts[3]='state' and array_length(parts,1)=3 then return not sending or r.owner_id=u; end if;
 if parts[3]='input' and array_length(parts,1)=4 then
  if not exists(select 1 from private.engole_members where room_id=r.id and user_id::text=parts[4]) then return false; end if;
  return case when sending then parts[4]=u::text else (r.owner_id=u or parts[4]=u::text) end;
 end if;
 return false;
end $$;
revoke all on function private.engole_channel_allowed(text,boolean) from public,anon;
grant execute on function private.engole_channel_allowed(text,boolean) to authenticated;
create policy engole_read_broadcast on realtime.messages for select to authenticated using (extension='broadcast' and private.engole_channel_allowed((select realtime.topic()),false));
create policy engole_send_broadcast on realtime.messages for insert to authenticated with check (extension='broadcast' and private.engole_channel_allowed((select realtime.topic()),true));

-- Keep existing telemetry logic and extend only the game/room mapping.
do $$ declare def text; item record; begin
 for item in select conname,pg_get_constraintdef(oid) as definition from pg_constraint where conrelid='private.box_usage_sessions'::regclass and contype='c' and pg_get_constraintdef(oid) like '%game = ANY%' loop
  if position('''engole''' in item.definition)=0 then
   execute format('alter table private.box_usage_sessions drop constraint %I',item.conname);
   execute format('alter table private.box_usage_sessions add constraint %I %s',item.conname,replace(item.definition,'ARRAY[','ARRAY[''engole''::text,'));
  end if;
 end loop;
 select pg_get_functiondef('public.box_usage(uuid,text,text,boolean,boolean,uuid,text)'::regprocedure) into def;
 if position('''engole''' in def)=0 then
  def:=replace(def,'''memory'',''dino''','''memory'',''engole'',''dino''');
  if position('''engole''' in def)=0 then raise exception 'usage_allowlist_not_found'; end if;
  def:=replace(def,'and not r.closed and r.expires_at>t;', 'and not r.closed and r.expires_at>t;
  if p_game=''engole'' then
   select r.id into room from private.engole_rooms r join private.engole_members m on m.room_id=r.id
   where r.id=p_room and m.user_id=u and r.phase<>''closed'' and r.expires_at>t;
  end if;');
  execute def;
 end if;
end $$;
