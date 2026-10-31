begin;
-- The checkpoint is already gzip/base64. Do not recompress it with TOAST.
alter table private.egg_bot_control alter column checkpoint set storage external;

do $patch$
declare f text;start_at integer;end_at integer;old_tail text;
begin
 f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
 start_at:=position('  for item in select value from jsonb_array_elements(p_results) loop' in f);
 end_at:=position('  -- Remove only events included in this committed simulation.' in f);
 if start_at=0 or end_at<=start_at then raise exception 'worker_commit_changed';end if;
 f:=substr(f,1,start_at-1)||$bulk$
  -- Validate the complete batch before changing progress. The control-row lock
  -- and lease still make checkpoint, rewards and consumed pushes atomic.
  if exists(select 1 from jsonb_array_elements(p_results) e
    where not coalesce((e->>'id')::integer between 1 and 140
      and jsonb_typeof(e->'data')='object'
      and (e#>>'{data,coins}')::numeric between 0 and 1000000000
      and jsonb_typeof(e->'pose')='object' and jsonb_typeof(e->'path')='array',false)) then
   raise exception 'invalid_bot_result';
  end if;
  if exists(select 1 from jsonb_array_elements(p_results) e join private.egg_bots participant on participant.id=(e->>'id')::integer
    where (e->>'session')::integer is distinct from participant.session_number) then raise exception 'session_checkpoint_mismatch';end if;
  if exists(select 1 from jsonb_array_elements(p_results) e join private.egg_bots participant on participant.id=(e->>'id')::integer
    where e#>>'{progress,game}' is distinct from participant.game) then raise exception 'game_checkpoint_mismatch';end if;

  -- A single table update replaces 280 per-character updates each tick.
  update private.egg_bots participant set
   game_progress=jsonb_set(participant.game_progress,array[participant.game],r.progress),
   data=r.data,pose=r.pose,path=r.path,
   seen_at=case when participant.is_online then t else participant.seen_at end,
   seconds=participant.seconds+participant.tick_seconds,
   day_seconds=(case when participant.day=d then participant.day_seconds else 0 end)+least(participant.tick_seconds,extract(epoch from t-(d::timestamp at time zone 'America/Manaus'))),
   rewarded=case when participant.day=d then participant.rewarded else false end,day=d
  from jsonb_to_recordset(p_results) as r(id integer,data jsonb,pose jsonb,path jsonb,progress jsonb)
  where participant.id=r.id;

  for item in select e from jsonb_array_elements(p_results)e join private.egg_bots participant on participant.id=(e->>'id')::integer
    where participant.game='craft' and participant.is_online and jsonb_typeof(e->'edits')='array' and jsonb_array_length(e->'edits')>0 loop
   perform private.catalog_bot_edits((item->>'id')::integer,item->'edits');
  end loop;

$bulk$||substr(f,end_at);
 old_tail:=$old$  update private.box_rooms r set expires_at=t+interval '4 hours',closed=not exists(select 1 from private.egg_bots occupant where occupant.room_id=r.id and occupant.is_online) and not exists(select 1 from private.box_members m where m.room_id=r.id and m.seen_at>t-interval '30 seconds') where r.automated;$old$;
 if position(old_tail in f)=0 then raise exception 'worker_rooms_changed';end if;
 f:=replace(f,old_tail,$new$
  -- Unchanged closed rooms must not repeatedly run the trap-return trigger.
  with room_status as materialized (
   select r.id,not exists(select 1 from private.egg_bots participant where participant.room_id=r.id and participant.is_online)
    and not exists(select 1 from private.box_members m where m.room_id=r.id and m.seen_at>t-interval '30 seconds') as should_close
   from private.box_rooms r where r.automated
  )
  update private.box_rooms r set expires_at=t+interval '4 hours',closed=s.should_close
   from room_status s where r.id=s.id and (r.closed is distinct from s.should_close or r.expires_at<t+interval '3 hours');$new$);
 f:=replace(f,' elsif p_action=''commit'' then',$abort$ elsif p_action='abort' then
  if p_lease is distinct from c.lease then return jsonb_build_object('error','stale_lease');end if;
  update private.egg_bot_control set lease=null,lease_until=null where id;
  return jsonb_build_object('ok',true);
 elsif p_action='commit' then$abort$);
 execute f;
end $patch$;
commit;
