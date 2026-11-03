-- Track 23 and its shared, server-timed mountain growth. No new polling or cron.
begin;
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''worlds'',22' in source)=0 then raise exception 'world_count_changed';end if;
 source:=replace(source,'''worlds'',22','''worlds'',23');
 source:=replace(source,'not between 0 and 21','not between 0 and 22');execute source;
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -1060 else -200' in source)=0 then raise exception 'room_bound_changed';end if;
 source:=replace(source,'then -1060 else -200','then -1108 else -200');
 anchor:='  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;';
 if position(anchor in source)=0 then raise exception 'room_sync_anchor_changed';end if;
 source:=replace(source,anchor,$patch$
  if r.game='egg' then
   clean:=clean||jsonb_build_object('rock_event',m.state->>'rock_event','rockChase',p_state->>'rockChase'='true');
   if jsonb_typeof(p_state->'rock')='object'
    and (p_state->'rock'->>'id') ~ '^[a-zA-Z0-9-]{1,64}$'
    and (p_state->'rock'->>'id') is distinct from (m.state->>'rock_event') then
    clean:=jsonb_set(clean,'{rock_event}',p_state->'rock'->'id');
    if p_state->'rock'->>'action'='cast'
     and (z<=-1056 or (z<0 and p_state->>'rockChase'='true'))
     and coalesce((r.world->'rock'->>'nextAt')::numeric,0)<=extract(epoch from clock_timestamp())*1000
     and not exists(select 1 from private.box_egg_races where room_id=r.id and starts_at>now()-interval '2 minutes') then
     update private.box_rooms set world=jsonb_set(world,'{rock}',jsonb_build_object(
      'id',p_state->'rock'->>'id','owner',m.slot,'castAt',extract(epoch from clock_timestamp())*1000,
      'nextAt',extract(epoch from clock_timestamp())*1000+40000,'closed',false)),revision=revision+1
      where id=r.id returning * into r;
    elsif p_state->'rock'->>'action'='close'
     and r.world->'rock'->>'owner'=m.slot::text
     and r.world->'rock'->>'id'=p_state->'rock'->>'castId'
     and r.world->'rock'->>'closed'='false' then
     update private.box_rooms set world=jsonb_set(world,'{rock}',world->'rock'||jsonb_build_object(
      'closed',true,'nextAt',extract(epoch from clock_timestamp())*1000+40000)),revision=revision+1
      where id=r.id returning * into r;
    end if;
   end if;
  end if;
  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;
$patch$);
 anchor:='''flame'',case when r.game=''egg'' then r.world->''flame'' else null end,';
 if position(anchor in source)=0 then raise exception 'room_result_anchor_changed';end if;
 source:=replace(source,anchor,anchor||$patch$'rock',case when r.game='egg' then r.world->'rock' else null end,$patch$);
 execute source;
end $migration$;
alter table private.egg_traps drop constraint egg_traps_z_check;
alter table private.egg_traps add constraint egg_traps_z_check check(z between -1108 and 25);
notify pgrst,'reload schema';
commit;
