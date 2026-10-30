begin;
-- Admin-only, one-shot requests. No account identifiers are shipped to peers.
create table if not exists private.box_room_departures (
 user_id uuid primary key references auth.users(id) on delete cascade,
 room_id uuid not null references private.box_rooms(id) on delete cascade,
 reference text not null unique check(length(reference) between 8 and 160),
 duration_seconds integer not null default 30 check(duration_seconds between 1 and 120),
 requested_at timestamptz not null default clock_timestamp(),
 expires_at timestamptz not null default (clock_timestamp()+interval '30 minutes'),
 started_at timestamptz,
 completed_at timestamptz
);
alter table private.box_room_departures enable row level security;
revoke all on private.box_room_departures from public,anon,authenticated,service_role;

create or replace function private.box_departure_state(p_user uuid,p_room uuid)
returns jsonb language sql volatile set search_path='' as $$
 select jsonb_build_object('start',extract(epoch from d.started_at)*1000,
  'end',extract(epoch from d.started_at+make_interval(secs=>d.duration_seconds))*1000,
  'serverNow',extract(epoch from clock_timestamp())*1000)
 from private.box_room_departures d where d.user_id=p_user and d.room_id=p_room
  and d.started_at is not null and d.completed_at is null;
$$;

create or replace function private.box_finish_departures(p_room uuid)
returns void language plpgsql set search_path='' as $$
declare d record; owner_leaving boolean:=false; successor uuid;
begin
 perform 1 from private.box_rooms where id=p_room for update;
 for d in select * from private.box_room_departures
  where room_id=p_room and completed_at is null and started_at is not null
   and started_at+make_interval(secs=>duration_seconds)<=clock_timestamp()
  order by user_id for update
 loop
  if exists(select 1 from private.box_rooms where id=p_room and owner_id=d.user_id) then owner_leaving:=true;end if;
  -- End presence now; ordinary room cleanup retires the expired membership.
  update private.box_members set seen_at='-infinity' where room_id=p_room and user_id=d.user_id;
  update private.box_room_departures set completed_at=clock_timestamp() where user_id=d.user_id;
 end loop;
 if owner_leaving then
  select user_id into successor from private.box_members where room_id=p_room
   and seen_at>clock_timestamp()-interval '30 seconds' order by slot limit 1;
  if successor is null then update private.box_rooms set closed=true where id=p_room;
  else update private.box_rooms set owner_id=successor where id=p_room;end if;
 end if;
end;
$$;
revoke all on function private.box_departure_state(uuid,uuid),private.box_finish_departures(uuid)
 from public,anon,authenticated,service_role;

-- Patch the current dispatcher, preserving equipment, vehicles, races and access.
do $patch$
declare f text; needle text;
begin
 f:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('private.box_finish_departures' in f)>0 then return;end if;
 needle:=' if p_action is null or p_action not in';
 if position(needle in f)=0 then raise exception 'room action guard changed';end if;
 f:=replace(f,needle,$insert$
 if p_action='resume_departure' then
  select b.* into m from private.box_members b join private.box_room_departures d
   on d.user_id=b.user_id and d.room_id=b.room_id
   join private.box_rooms br on br.id=b.room_id
   where b.user_id=uid and d.completed_at is null and (d.started_at is not null or d.expires_at>clock_timestamp())
    and br.game='egg' and not br.closed and br.expires_at>clock_timestamp();
  if m.user_id is null then return jsonb_build_object('pending',false);end if;
  p_room:=m.room_id;p_state:=m.state;p_action:='sync';
 end if;
 if p_action='finish_departure' then
  if not exists(select 1 from private.box_room_departures where user_id=uid and room_id=p_room and started_at is not null) then
   return jsonb_build_object('error','not_member');end if;
  perform private.box_finish_departures(p_room);
  return jsonb_build_object('ok',exists(select 1 from private.box_room_departures where user_id=uid and room_id=p_room and completed_at is not null));
 end if;
 if p_action is null or p_action not in$insert$);
 needle:=' select * into m from private.box_members where user_id=uid and room_id=r.id;';
 if position(needle in f)=0 then raise exception 'room membership guard changed';end if;
 f:=replace(f,needle,$insert$
 perform private.box_finish_departures(r.id);
 select * into r from private.box_rooms where id=r.id;
 if r.closed then return jsonb_build_object('error','room_unavailable');end if;
 select * into m from private.box_members where user_id=uid and room_id=r.id;
 if m.seen_at='-infinity'::timestamptz and p_action not in ('create','create_public','join','join_public') then
  return jsonb_build_object('error','not_member');end if;$insert$);
 needle:=' if p_action=''close'' then';
 if position(needle in f)=0 then raise exception 'room dispatch changed';end if;
 f:=replace(f,needle,$insert$
 -- Only this member's upgraded renderer can start its pending animation.
 if p_action='sync' and r.game='egg' and p_state->>'departure_client'='1' then
  update private.box_room_departures set started_at=clock_timestamp()
   where user_id=uid and room_id=r.id and started_at is null and completed_at is null
    and expires_at>clock_timestamp();
 end if;
 if p_action='close' then$insert$);
 needle:='''appearance'',private.box_room_appearance(user_id,r.game)';
 if position(needle in f)=0 then raise exception 'room appearance response changed';end if;
 f:=replace(f,needle,needle||',''departure'',private.box_departure_state(user_id,r.id)');
 execute f;
end;
$patch$;
notify pgrst,'reload schema';
commit;
