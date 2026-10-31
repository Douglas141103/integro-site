begin;
alter table private.egg_bots add column is_online boolean not null default false,
 add column session_number integer not null default 0,
 add column session_started_at timestamptz,
 add column session_until timestamptz,
 add column next_login_at timestamptz not null default now(),
 add column tick_seconds numeric not null default 0 check(tick_seconds between 0 and 15);
alter table private.box_rooms add column virtual_capacity integer not null default 3 check(virtual_capacity between 1 and 3);
with rooms as(select id,row_number() over(order by id) n from private.box_rooms where automated)
update private.box_rooms r set virtual_capacity=1+(rooms.n%3) from rooms where r.id=rooms.id;

-- Different night rest windows for each character, in the platform's UTC-4 zone.
create function private.egg_bot_login_after(p_id integer,p_after timestamptz) returns timestamptz
language plpgsql volatile set search_path='' as $$
declare local_time timestamp:=p_after at time zone 'America/Boa_Vista'; wake integer:=6+p_id%4;
begin
 if extract(hour from local_time)>=p_id%3 and extract(hour from local_time)<wake then
  return (date_trunc('day',local_time)+make_interval(hours=>wake,secs=>random()*2700)) at time zone 'America/Boa_Vista';
 end if;
 return p_after;
end $$;
revoke all on function private.egg_bot_login_after(integer,timestamptz) from public,anon,authenticated,service_role;

-- Transition existing characters without resetting any earned progress.
update private.egg_bots set is_online=random()<.55;
update private.egg_bots set
 is_online=is_online and private.egg_bot_login_after(id,now())=now(),
 session_started_at=now(),session_until=now()+make_interval(secs=>600+random()*1500),
 next_login_at=private.egg_bot_login_after(id,now()+make_interval(secs=>30+random()*690)),session_number=1;

create function private.egg_bot_sessions(p_now timestamptz,p_from timestamptz) returns jsonb
language plpgsql volatile set search_path='' as $$
declare b record; chosen uuid; occupants integer; people integer; cap integer;
begin
 -- Only the overlap with a live session can earn progress, including a partial
 -- last interval. Missed/offline time never creates a catch-up reward.
 update private.egg_bots set tick_seconds=case when is_online then greatest(0,least(15,
  extract(epoch from least(p_now,session_until)-greatest(p_from,p_now-interval '15 seconds',session_started_at)))) else 0 end;
 update private.egg_bots set is_online=false,
  next_login_at=private.egg_bot_login_after(id,p_now+make_interval(secs=>480+random()*2220))
  where is_online and session_until<=p_now;

 -- Humans retain priority. Excess virtual occupants leave and take a break.
 for b in select * from private.egg_bots where is_online order by id desc loop
  select virtual_capacity into cap from private.box_rooms where id=b.room_id;
  select count(*) into occupants from private.egg_bots where room_id=b.room_id and is_online;
  select count(*) into people from private.box_members where room_id=b.room_id and seen_at>p_now-interval '30 seconds';
  if occupants>least(cap,4-people) then
   update private.egg_bots set is_online=false,next_login_at=private.egg_bot_login_after(id,p_now+make_interval(secs=>480+random()*2220)) where id=b.id;
  end if;
 end loop;
 for b in select * from private.egg_bots where not is_online and next_login_at<=p_now order by next_login_at,id loop
  if private.egg_bot_login_after(b.id,p_now)>p_now then
   update private.egg_bots set next_login_at=private.egg_bot_login_after(b.id,p_now) where id=b.id;continue;
  end if;
  chosen:=null;
  select r.id into chosen from private.box_rooms r
   where r.automated and
    (select count(*) from private.egg_bots a where a.room_id=r.id and a.is_online)<r.virtual_capacity
    and (select count(*) from private.egg_bots a where a.room_id=r.id and a.is_online)
      +(select count(*) from private.box_members m where m.room_id=r.id and m.seen_at>p_now-interval '30 seconds')<4
   order by random() limit 1;
  if chosen is null then
   update private.egg_bots set next_login_at=p_now+make_interval(secs=>30+random()*120) where id=b.id;
  else
   update private.egg_bots set room_id=chosen,is_online=true,session_number=session_number+1,
    session_started_at=p_now,session_until=p_now+make_interval(secs=>600+random()*1500),tick_seconds=0 where id=b.id;
   update private.box_rooms set closed=false,expires_at=p_now+interval '4 hours' where id=chosen;
  end if;
 end loop;
 return (select jsonb_object_agg(id,jsonb_build_object('online',is_online,'number',session_number,'seconds',tick_seconds)) from private.egg_bots);
end $$;
revoke all on function private.egg_bot_sessions(timestamptz,timestamptz) from public,anon,authenticated,service_role;

do $patch$
declare f text; anchor text;
begin
 f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
 anchor:='v uuid; b record; item jsonb; elapsed numeric; d date;';
 if position(anchor in f)=0 then raise exception 'worker_declaration_changed';end if;
 f:=replace(f,anchor,anchor||' sessions jsonb;');
 anchor:='  v:=gen_random_uuid();';
 if position(anchor in f)=0 then raise exception 'worker_claim_changed';end if;
 f:=replace(f,anchor,'  sessions:=private.egg_bot_sessions(t,c.last_tick);'||chr(10)||anchor);
 f:=replace(f,'''now'',extract(epoch from t)*1000);','''now'',extract(epoch from t)*1000,''sessions'',sessions);');
 anchor:='   update private.egg_bots set data=item->''data''';
 if position(anchor in f)=0 then raise exception 'worker_commit_changed';end if;
 f:=replace(f,anchor,$insert$
   select * into b from private.egg_bots where id=(item->>'id')::integer;
   if (item->>'session')::integer is distinct from b.session_number then raise exception 'session_checkpoint_mismatch';end if;
   elapsed:=b.tick_seconds;
   update private.egg_bots set data=item->'data'$insert$);
 f:=replace(f,'path=item->''path'',seen_at=t,seconds=seconds+elapsed,','path=item->''path'',seen_at=case when is_online then t else seen_at end,seconds=seconds+elapsed,');
 f:=replace(f,'update private.box_rooms set expires_at=t+interval ''4 hours'',closed=false where automated;',
  'update private.box_rooms r set expires_at=t+interval ''4 hours'',closed=not exists(select 1 from private.egg_bots occupant where occupant.room_id=r.id and occupant.is_online) and not exists(select 1 from private.box_members m where m.room_id=r.id and m.seen_at>t-interval ''30 seconds'') where r.automated;');
 f:=replace(f,'''participants'',70','''participants'',(select count(*) from private.egg_bots where is_online and session_until>t)');
 execute f;
 f:=pg_get_functiondef('private.egg_bot_peers(uuid)'::regprocedure);
 f:=replace(f,'where room_id=p_room and seen_at>','where room_id=p_room and is_online and session_until>now() and seen_at>');execute f;
 f:=pg_get_functiondef('public.box_virtual_presence()'::regprocedure);
 f:=replace(f,'from private.egg_bots where seen_at>','from private.egg_bots where is_online and session_until>now() and seen_at>');execute f;
end $patch$;
-- Invalidate an old in-flight protocol; the next scheduled call recovers safely.
update private.egg_bot_control set lease=null,lease_until=null where id;
notify pgrst,'reload schema';
commit;
