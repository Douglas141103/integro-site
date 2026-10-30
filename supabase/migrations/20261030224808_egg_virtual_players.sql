begin;
-- Virtual characters are game entities, never fabricated auth/student accounts.
create table private.egg_bot_control (
 id boolean primary key default true check(id), enabled boolean not null default false,
 token_hash bytea, checkpoint text, lease uuid, lease_until timestamptz,
 last_tick timestamptz not null default clock_timestamp(), ticks bigint not null default 0
);
insert into private.egg_bot_control(id) values(true);
alter table private.box_rooms alter column owner_id drop not null;
alter table private.box_rooms add column automated boolean not null default false;
alter table private.box_rooms add constraint box_room_owner_kind check(
 (automated and owner_id is null and is_public and game='egg') or (not automated and owner_id is not null));
create table private.egg_bots (
 id integer primary key check(id between 1 and 70), name text not null,
 room_id uuid not null references private.box_rooms(id),
 data jsonb not null default '{}', pose jsonb not null default '{}', path jsonb not null default '[]',
 seen_at timestamptz, seconds numeric not null default 0,
 intgem integer not null default 0 check(intgem between 0 and 1000000),
 day date, day_seconds numeric not null default 0, rewarded boolean not null default false
);
create index egg_bots_room_idx on private.egg_bots(room_id);
create table private.egg_bot_ledger (
 bot_id integer not null references private.egg_bots(id), day date not null,
 kind text not null check(kind='daily'), delta integer not null check(delta=1),
 primary key(bot_id,day,kind)
);
alter table private.egg_bot_control enable row level security;
alter table private.egg_bots enable row level security;
alter table private.egg_bot_ledger enable row level security;
revoke all on private.egg_bot_control,private.egg_bots,private.egg_bot_ledger from public,anon,authenticated,service_role;
do $$declare room uuid; i integer; j integer; names text[]:=array['Aurora','Cometa','Nimbo','Pipoca','Jade','Solar','Cristal','Luna','Cosmo','Brisa'];begin
 for i in 0..23 loop
  insert into private.box_rooms(owner_id,game,is_public,automated,expires_at) values(null,'egg',true,true,now()+interval '4 hours') returning id into room;
  for j in i*3+1..least(70,i*3+3) loop
   insert into private.egg_bots(id,name,room_id) values(j,names[1+(j-1)%10]||' '||lpad(j::text,2,'0'),room);
  end loop;
 end loop;
end $$;

-- Only the private worker can lease/checkpoint all characters atomically.
create function public.box_bot_tick(p_token text,p_action text,p_lease uuid default null,p_checkpoint text default null,p_results jsonb default null)
returns jsonb language plpgsql security definer set search_path='' as $$
declare c private.egg_bot_control%rowtype; t timestamptz:=clock_timestamp(); v uuid; b record; item jsonb; elapsed numeric; d date;
begin
 select * into c from private.egg_bot_control where id for update;
 if not c.enabled or c.token_hash is null or p_token is null or c.token_hash<>sha256(convert_to(p_token,'UTF8')) then
  return jsonb_build_object('error','unauthorized');end if;
 if p_action='claim' then
  if c.lease_until>t or c.last_tick>t-interval '10 seconds' then return jsonb_build_object('busy',true);end if;
  v:=gen_random_uuid();
  update private.egg_bot_control set lease=v,lease_until=t+interval '60 seconds' where id;
  return jsonb_build_object('lease',v,'checkpoint',c.checkpoint,'seconds',least(15,greatest(0,extract(epoch from t-c.last_tick))),
   'now',extract(epoch from t)*1000);
 elsif p_action='commit' then
  if p_lease is distinct from c.lease or c.lease_until<t then return jsonb_build_object('error','stale_lease');end if;
  if p_checkpoint is null or length(p_checkpoint)>2000000 or jsonb_typeof(p_results)<>'array' or jsonb_array_length(p_results)<>70
   or (select count(distinct (e->>'id')::integer) from jsonb_array_elements(p_results)e)<>70 then raise exception 'invalid_checkpoint';end if;
  elapsed:=least(15,greatest(0,extract(epoch from (c.lease_until-interval '60 seconds')-c.last_tick)));
  d:=(t at time zone 'America/Manaus')::date;
  for item in select value from jsonb_array_elements(p_results) loop
   if (item->>'id')::integer not between 1 and 70 or jsonb_typeof(item->'data')<>'object'
    or not ((item->'data'->>'coins')::numeric between 0 and 1000000000)
    or jsonb_typeof(item->'pose')<>'object' or jsonb_typeof(item->'path')<>'array' then raise exception 'invalid_bot_result';end if;
   update private.egg_bots set data=item->'data',pose=item->'pose',path=item->'path',seen_at=t,seconds=seconds+elapsed,
    day_seconds=case when day=d then day_seconds else 0 end+least(elapsed,extract(epoch from t-(d::timestamp at time zone 'America/Manaus'))),
    rewarded=case when day=d then rewarded else false end, day=d where id=(item->>'id')::integer;
  end loop;
  -- Same daily IntGem rule as intgem pulse: one after 300 active seconds, UTC-4.
  for b in select * from private.egg_bots where day_seconds>=300 and not rewarded for update loop
   insert into private.egg_bot_ledger(bot_id,day,kind,delta) values(b.id,d,'daily',1) on conflict do nothing;
   if found then update private.egg_bots set intgem=least(1000000,intgem+1),rewarded=true where id=b.id;end if;
  end loop;
  update private.egg_bot_control set checkpoint=p_checkpoint,last_tick=c.lease_until-interval '60 seconds',lease=null,lease_until=null,ticks=ticks+1 where id;
  update private.box_rooms set expires_at=t+interval '4 hours',closed=false where automated;
  return jsonb_build_object('ok',true,'participants',70);
 end if;
 return jsonb_build_object('error','invalid_action');
end $$;
revoke all on function public.box_bot_tick(text,text,uuid,text,jsonb) from public,anon,authenticated;
grant execute on function public.box_bot_tick(text,text,uuid,text,jsonb) to service_role;

create function private.egg_bot_peers(p_room uuid) returns jsonb
language sql stable set search_path='' as $$
 with slots as (select s,row_number() over(order by s) n from generate_series(1,4)s
  where not exists(select 1 from private.box_members m where m.room_id=p_room and m.slot=s and m.seen_at>now()-interval '30 seconds')),
 bots as (select *,row_number() over(order by id) n from private.egg_bots where room_id=p_room and seen_at>now()-interval '45 seconds'
  and exists(select 1 from private.egg_bot_control where enabled)),
 frames as (select b.*,s.s as slot,b.path->least(greatest(0,floor(extract(epoch from now()-b.seen_at)*2)::integer),greatest(0,jsonb_array_length(b.path)-1)) frame from bots b join slots s using(n))
 select coalesce(jsonb_agg(jsonb_build_object('slot',slot,'automated',true,'name',name,'identity','virtual-'||id,
  'state',pose||case when frame is null then '{}'::jsonb else jsonb_build_object('x',frame->0,'y',frame->1,'z',frame->2,'yaw',frame->3) end) order by slot),'[]'::jsonb) from frames;
$$;
revoke all on function private.egg_bot_peers(uuid) from public,anon,authenticated,service_role;

create function public.box_virtual_presence() returns jsonb
language plpgsql stable security definer set search_path='' as $$begin
 if auth.uid() is null or not private.box_can_play(auth.uid()) then raise exception 'box_access_denied' using errcode='42501';end if;
 return jsonb_build_object('active',(select count(*) from private.egg_bots where seen_at>now()-interval '45 seconds'
  and exists(select 1 from private.egg_bot_control where enabled)), 'expires_in',15);
end $$;
revoke all on function public.box_virtual_presence() from public,anon;
grant execute on function public.box_virtual_presence() to authenticated;

-- Modify only listing/peer projection and null-safe owner guards, retaining all
-- existing human access, movement, departure, moderation and room limits.
do $patch$declare f text; a text; z text;begin
 f:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 a:='   select br.id,br.game,br.expires_at,count(bm.user_id)::integer as players,4 as capacity';
 z:='   group by br.id order by count(bm.user_id) asc,br.expires_at desc,br.id limit 20';
 if position(a in f)=0 or position(z in f)=0 then raise exception 'room_list_anchor_changed';end if;
 f:=overlay(f placing $new$   select br.id,br.game,br.expires_at,least(4,h.n+jsonb_array_length(private.egg_bot_peers(br.id))) as players,4 as capacity,h.n<4 as joinable,br.automated
   from private.box_rooms br cross join lateral (select count(*)::integer n from private.box_members bm where bm.room_id=br.id and bm.seen_at>now()-interval '30 seconds')h
   where br.is_public and not br.closed and br.expires_at>now() and br.game=p_game
    and (h.n>0 or jsonb_array_length(private.egg_bot_peers(br.id))>0)
    and not exists(select 1 from private.box_blocks bb where bb.room_id=br.id and bb.user_id=uid)
   order by br.automated,h.n desc,br.id limit 40$new$ from position(a in f) for position(z in f)+length(z)-position(a in f));
 a:=' return jsonb_build_object(''id'',r.id';
 if position(a in f)=0 then raise exception 'room_response_anchor_changed';end if;
 f:=replace(f,a,' peers:=peers||private.egg_bot_peers(r.id);'||chr(10)||a);
 f:=replace(f,'if r.owner_id<>uid then','if r.owner_id is distinct from uid then');
 f:=replace(f,'delete from private.box_rooms where expires_at <', 'delete from private.box_rooms where not automated and expires_at <');
 execute f;
 -- Race creation also requires an actual human room owner.
 f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 f:=replace(f,'if r.owner_id<>u then','if r.owner_id is distinct from u then');execute f;
end $patch$;

-- One standings list, same sorting; virtual names remain identifiable.
do $rank$declare f text; a text;begin
 f:=pg_get_functiondef('private.box_egg_ranking()'::regprocedure);
 a:='  ), ranked as (';
 if position(a in f)=0 then raise exception 'ranking_anchor_changed';end if;
 f:=replace(f,a,$union$    union all
    select null::uuid, b.seen_at, coalesce((b.data->>'coins')::numeric,0), b.intgem, b.name||' · virtual'
    from private.egg_bots b where b.seen_at is not null
  ), ranked as ($union$);
 execute f;
end $rank$;
notify pgrst,'reload schema';
commit;
