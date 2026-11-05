-- Keep the archived characters and all their per-game checkpoints. The
-- scheduler and worker will only negotiate sessions for players 001–070.
do $migration$
declare f text;
begin
  perform 1 from private.egg_bot_control where id for update;
  if (select count(*) from private.egg_bots)<>140 or
     (select count(*) from private.egg_bots where id between 1 and 70)<>70 then
    raise exception 'unexpected bot roster; verify the population first';
  end if;
  f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
  if position('sharded-v1' in f)=0 or position('jsonb_array_length(p_results)<>140' in f)=0 then
    raise exception 'unexpected bot batch protocol';
  end if;
  -- This function uses 140 only for participant bounds and required batch size.
  execute regexp_replace(f,'\m140\M','70','g');

  f:=pg_get_functiondef('private.egg_bot_sessions(timestamptz,timestamptz)'::regprocedure);
  if position('where not is_online and next_login_at<=p_now' in f)=0 or
     position('r.id=participant.room_id);' in f)=0 then raise exception 'unexpected session allocator';end if;
  f:=replace(f,'between 1 and 140','between 1 and 70');
  f:=replace(f,'where not is_online and next_login_at<=p_now','where id between 1 and 70 and not is_online and next_login_at<=p_now');
  f:=replace(f,'r.id=participant.room_id);','r.id=participant.room_id where participant.id between 1 and 70);');
  execute f;

  f:=pg_get_functiondef('private.egg_bot_push_snapshot(timestamptz)'::regprocedure);
  if position('from private.egg_bots);' in f)=0 then raise exception 'unexpected push snapshot';end if;
  f:=replace(f,'between 1 and 140','between 1 and 70');
  execute replace(f,'from private.egg_bots);','from private.egg_bots where id between 1 and 70);');

  -- Invalidate the old batch before any of its results can be committed.
  update private.egg_bot_control set lease=null,lease_until=null where id;
  update private.egg_bots set is_online=false,room_id=null,tick_seconds=0,
    next_login_at='infinity',push_queue='[]',tick_pushes='[]',push_visual=null
    where id between 71 and 140;
end $migration$;
