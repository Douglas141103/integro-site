-- Operational usage only: no keystrokes, messages, IPs, locations or passwords.
begin;
create table if not exists private.box_usage_sessions (
 id uuid primary key, user_id uuid not null references auth.users(id) on delete cascade,
 started_at timestamptz not null default clock_timestamp(), last_seen_at timestamptz not null default clock_timestamp(),
 ended_at timestamptz, end_reason text, device text not null,
 active boolean not null default false, visible boolean not null default true,
 game text not null default 'lobby', room_id uuid,
 check(device in ('desktop','mobile','tablet')),
 check(game in ('lobby','house','egg','bairro','fruit','interball','fuitcort','craft','math','words','robot','memory'))
);
create index if not exists box_usage_user_seen on private.box_usage_sessions(user_id,last_seen_at desc);
create table if not exists private.box_usage_spans (
 id bigint generated always as identity primary key,
 session_id uuid not null references private.box_usage_sessions(id) on delete cascade,
 game text not null, room_id uuid, day date not null,
 started_at timestamptz not null, last_seen_at timestamptz not null,
 connected_seconds numeric not null default 0, active_seconds numeric not null default 0
);
create index if not exists box_usage_span_session on private.box_usage_spans(session_id,id desc);
create index if not exists box_usage_span_day on private.box_usage_spans(day);
create table if not exists private.box_usage_clock (
 user_id uuid primary key references auth.users(id) on delete cascade,
 counted_at timestamptz not null default clock_timestamp()
);
alter table private.box_usage_sessions enable row level security;
alter table private.box_usage_spans enable row level security;
alter table private.box_usage_clock enable row level security;
revoke all on private.box_usage_sessions,private.box_usage_spans,private.box_usage_clock from public,anon,authenticated;

create or replace function public.box_usage(p_session uuid, p_action text default 'pulse', p_game text default 'lobby',
 p_active boolean default false, p_visible boolean default true, p_room uuid default null, p_device text default 'desktop')
returns jsonb language plpgsql security definer set search_path='' as $$
declare
 u uuid:=auth.uid(); t timestamptz:=clock_timestamp(); s private.box_usage_sessions%rowtype;
 span private.box_usage_spans%rowtype; counted timestamptz; dt numeric:=0; room uuid; d date;
begin
 if u is null or not exists(select 1 from public.profiles where id=u and role::text in
 ('responsavel','integro_admin','diretor','coordenacao','professor')) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_session is null or p_action is null or p_action not in ('pulse','end') or p_game is null or
 p_game not in ('lobby','house','egg','bairro','fruit','interball','fuitcort','craft','math','words','robot','memory') or
 p_device is null or p_device not in ('desktop','mobile','tablet') then raise exception 'invalid_usage';end if;
 insert into private.box_usage_clock(user_id,counted_at) values(u,t) on conflict do nothing;
 select counted_at into counted from private.box_usage_clock where user_id=u for update;
 select * into s from private.box_usage_sessions where id=p_session for update;
 if s.id is not null and s.user_id<>u then raise exception 'box_access_denied' using errcode='42501';end if;
 if s.ended_at is not null then return jsonb_build_object('closed',true);end if;
 -- Keep one account's overlapping tabs from doubling its measured time.
 if s.id is not null then
  if t-s.last_seen_at<interval '1 second' and p_action='pulse' and s.game=p_game and s.room_id is not distinct from p_room and s.active=coalesce(p_active,false) and s.visible=coalesce(p_visible,false) then return jsonb_build_object('ok',true);end if;
  if t-s.last_seen_at<=interval '70 seconds' then dt:=greatest(0,least(35,extract(epoch from t-greatest(s.last_seen_at,counted))));end if;
  select * into span from private.box_usage_spans where session_id=s.id order by id desc limit 1;
  if span.id is not null then
   update private.box_usage_spans set connected_seconds=connected_seconds+dt,
    active_seconds=active_seconds+case when s.active and s.visible and coalesce(p_active,false) and coalesce(p_visible,false) and s.game<>'lobby' then dt else 0 end,
    last_seen_at=t where id=span.id;
  end if;
 else
  if p_action='end' then return jsonb_build_object('closed',true);end if;
  if (select count(*) from private.box_usage_sessions where user_id=u and started_at>t-interval '1 hour')>=120 then
   return jsonb_build_object('error','rate_limit');end if;
  insert into private.box_usage_sessions(id,user_id,device,started_at,last_seen_at) values(p_session,u,p_device,t,t) returning * into s;
 end if;
 update private.box_usage_clock set counted_at=t where user_id=u;
 if p_action='end' then
  update private.box_usage_sessions set last_seen_at=t,ended_at=t,end_reason='exit',active=false where id=s.id;
  return jsonb_build_object('closed',true);
 end if;
 -- The client cannot invent a multiplayer membership.
 select r.id into room from private.box_rooms r join private.box_members m on m.room_id=r.id
  where r.id=p_room and r.game=p_game and m.user_id=u and m.seen_at>t-interval '30 seconds' and not r.closed and r.expires_at>t;
 d:=(t at time zone 'America/Manaus')::date;
 if span.id is null or span.game<>p_game or span.room_id is distinct from room or span.day<>d then
  insert into private.box_usage_spans(session_id,game,room_id,day,started_at,last_seen_at) values(s.id,p_game,room,d,t,t);
 end if;
 update private.box_usage_sessions set last_seen_at=t,game=p_game,room_id=room,active=coalesce(p_active,false),visible=coalesce(p_visible,false) where id=s.id;
 return jsonb_build_object('ok',true);
end;$$;
revoke all on function public.box_usage(uuid,text,text,boolean,boolean,uuid,text) from public,anon;
grant execute on function public.box_usage(uuid,text,text,boolean,boolean,uuid,text) to authenticated;

create or replace function public.box_usage_report(p_from date,p_to date,p_user uuid default null,p_game text default null,p_mode text default null,p_page integer default 0)
returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); role_name text; school uuid; result jsonb;
begin
 select p.role::text,p.school_id into role_name,school from public.profiles p where p.id=u;
 if u is null or role_name is null or role_name not in ('integro_admin','diretor') or (role_name='diretor' and school is null) then
  raise exception 'box_management_denied' using errcode='42501';end if;
 if p_from is null or p_to is null or p_to<p_from or p_to-p_from>92 or p_page is null or p_page<0 or p_page>10000 or
 (p_mode is not null and p_mode not in ('individual','multiplayer')) then raise exception 'invalid_period';end if;
 with scope as (
  select p.id,p.full_name,p.role::text as role,a.email,a.last_sign_in_at
  from public.profiles p join auth.users a on a.id=p.id
  where p.role::text in ('responsavel','integro_admin','diretor','coordenacao','professor') and
   (role_name='integro_admin' or p.school_id=school or exists(
    select 1 from public.student_guardians g join public.students st on st.id=g.student_id
    where g.guardian_profile_id=p.id and st.school_id=school))
 ), spans as (
  select x.*,s.user_id,s.device,s.started_at as session_start,s.last_seen_at as session_seen,s.ended_at,s.visible,s.active
  from private.box_usage_spans x join private.box_usage_sessions s on s.id=x.session_id join scope p on p.id=s.user_id
  where x.day between p_from and p_to and (p_user is null or p.id=p_user) and (p_game is null or x.game=p_game)
   and (p_mode is null or (p_mode='multiplayer')=(x.room_id is not null))
 ), people as (
  select p.*,
   (select max(s.started_at) from private.box_usage_sessions s where s.user_id=p.id) as last_box_at,
   exists(select 1 from private.box_usage_sessions s where s.user_id=p.id and s.ended_at is null and s.visible and s.last_seen_at>clock_timestamp()-interval '70 seconds') as online,
   (select count(distinct x.session_id) from spans x where x.user_id=p.id) as sessions,
   coalesce((select sum(x.active_seconds) from spans x where x.user_id=p.id),0) as active_seconds,
   coalesce((select sum(x.connected_seconds) from spans x where x.user_id=p.id),0) as connected_seconds
  from scope p where p_user is null or p.id=p_user
 ), sessions as (
  select x.session_id,x.user_id,p.full_name,p.email,x.device,min(x.session_start) as started_at,max(x.session_seen) as last_seen_at,
   max(x.ended_at) as ended_at, bool_or(x.ended_at is null and x.visible and x.session_seen>clock_timestamp()-interval '70 seconds') as online,
   sum(x.connected_seconds) as connected_seconds,sum(x.active_seconds) as active_seconds,
   jsonb_agg(jsonb_build_object('game',x.game,'room_id',x.room_id,'started_at',x.started_at,'last_seen_at',x.last_seen_at,
    'active_seconds',x.active_seconds,'connected_seconds',x.connected_seconds) order by x.id) as history
  from spans x join scope p on p.id=x.user_id group by x.session_id,x.user_id,p.full_name,p.email,x.device
 ), games as (
  select game,count(*) as visits,count(distinct user_id) as profiles,sum(active_seconds) as active_seconds,
   sum(connected_seconds) as connected_seconds,count(distinct room_id) as rooms
  from spans where game<>'lobby' group by game
 ), days as (
  select day,count(distinct user_id) as profiles,sum(active_seconds) as active_seconds from spans group by day
 ), rooms as (
  select room_id,game,min(started_at) as started_at,max(last_seen_at) as last_seen_at,
   count(distinct user_id) as profiles,jsonb_agg(distinct user_id) as participants,sum(active_seconds) as active_seconds
  from spans where room_id is not null group by room_id,game
 )
 select jsonb_build_object(
  'scope',case when role_name='integro_admin' then 'Todos os perfis autorizados' else 'Perfis vinculados à sua escola' end,
  'tracking_since',(select min(s.started_at) from private.box_usage_sessions s join scope p on p.id=s.user_id),
  'profiles',coalesce((select jsonb_agg(to_jsonb(p) order by p.online desc,p.full_name) from people p),'[]'::jsonb),
  'summary',jsonb_build_object('profiles',(select count(distinct user_id) from spans),'sessions',(select count(*) from sessions),
    'online',(select count(*) from people where online),'active_seconds',coalesce((select sum(active_seconds) from spans),0),
    'connected_seconds',coalesce((select sum(connected_seconds) from spans),0),'rooms',(select count(*) from rooms)),
  'games',coalesce((select jsonb_agg(to_jsonb(g) order by g.active_seconds desc) from games g),'[]'::jsonb),
  'days',coalesce((select jsonb_agg(to_jsonb(d) order by d.day) from days d),'[]'::jsonb),
  'rooms',coalesce((select jsonb_agg(to_jsonb(r)) from (select * from rooms order by last_seen_at desc limit 100) r),'[]'::jsonb),
  'sessions',coalesce((select jsonb_agg(to_jsonb(s)) from (select * from sessions order by started_at desc limit 50 offset p_page*50) s),'[]'::jsonb),
  'total_sessions',(select count(*) from sessions),'page',p_page
 ) into result;
 return result;
end;$$;
revoke all on function public.box_usage_report(date,date,uuid,text,text,integer) from public,anon;
grant execute on function public.box_usage_report(date,date,uuid,text,text,integer) to authenticated;
notify pgrst,'reload schema';
commit;
