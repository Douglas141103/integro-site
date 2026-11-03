-- Reuse the existing authenticated room sync, lock and transient world JSON.
-- Only actual casts/captures change the room revision; no new polling or cron.
begin;
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 anchor:='  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;';
 if position(anchor in source)=0 then raise exception 'room_sync_anchor_changed';end if;
 source:=replace(source,anchor,$patch$
  if r.game='egg' then
   clean:=clean||jsonb_build_object('flame_event',m.state->>'flame_event','flameChase',p_state->>'flameChase'='true');
   if jsonb_typeof(p_state->'flame')='object'
    and (p_state->'flame'->>'id') ~ '^[a-zA-Z0-9-]{1,64}$'
    and (p_state->'flame'->>'id') is distinct from (m.state->>'flame_event') then
    clean:=jsonb_set(clean,'{flame_event}',p_state->'flame'->'id');
    if p_state->'flame'->>'action'='cast'
     and (z<=-1008 or (z<0 and p_state->>'flameChase'='true'))
     and coalesce((r.world->'flame'->>'nextAt')::numeric,0)<=extract(epoch from clock_timestamp())*1000
     and not exists(select 1 from private.box_egg_races where room_id=r.id and starts_at>now()-interval '2 minutes') then
     update private.box_rooms set world=jsonb_set(world,'{flame}',jsonb_build_object(
      'id',p_state->'flame'->>'id','owner',m.slot,'castAt',extract(epoch from clock_timestamp())*1000,
      'nextAt',extract(epoch from clock_timestamp())*1000+16000,'closed',false)),revision=revision+1
      where id=r.id returning * into r;
    elsif p_state->'flame'->>'action'='close'
     and r.world->'flame'->>'owner'=m.slot::text
     and r.world->'flame'->>'id'=p_state->'flame'->>'castId'
     and r.world->'flame'->>'closed'='false' then
     update private.box_rooms set world=jsonb_set(world,'{flame}',world->'flame'||jsonb_build_object(
      'closed',true,'nextAt',extract(epoch from clock_timestamp())*1000+16000)),revision=revision+1
      where id=r.id returning * into r;
    end if;
   end if;
  end if;
  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;
$patch$);
 anchor:='''expires_at'',r.expires_at,''players'',peers,''revision'',r.revision,''edit_error'',edit_error,';
 if position(anchor in source)=0 then raise exception 'room_result_anchor_changed';end if;
 source:=replace(source,anchor,anchor||$patch$
  'flame',case when r.game='egg' then r.world->'flame' else null end,'serverNow',extract(epoch from clock_timestamp())*1000,
$patch$);
 execute source;
end $migration$;
notify pgrst,'reload schema';
commit;
