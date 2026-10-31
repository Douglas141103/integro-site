-- Existing installations must pause the worker, split the retained legacy blob
-- with gameCheckpoint/packCheckpoint, and seed every historical game before
-- enabling the sharded worker. Keep the original blob as a migration backup.
begin;
create table private.egg_bot_checkpoints(
 bot_id integer not null references private.egg_bots(id) on delete cascade,
 game text not null check(game in ('egg','bairro','craft','descubra','tower','shark','rush','bounce','fruit','gosnake','fuitcort','interball','interdance','house','math','words','robot','memory')),
 checkpoint text not null check(length(checkpoint) between 1 and 1000000),
 primary key(bot_id,game)
);
alter table private.egg_bot_checkpoints enable row level security;
alter table private.egg_bot_checkpoints alter column checkpoint set storage external;
revoke all on private.egg_bot_checkpoints from public,anon,authenticated,service_role;

do $patch$
declare f text;old_claim text;anchor text;
begin
 f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
 f:=replace(f,'sessions jsonb; pushes jsonb;','sessions jsonb; pushes jsonb; shards jsonb;');
 old_claim:=$old$  return jsonb_build_object('lease',v,'checkpoint',c.checkpoint,'seconds',least(15,greatest(0,extract(epoch from t-c.last_tick))),
   'now',extract(epoch from t)*1000,'sessions',sessions,'pushes',pushes);$old$;
 if position(old_claim in f)=0 then raise exception 'worker_claim_changed';end if;
 f:=replace(f,old_claim,$new$
  return jsonb_build_object('format','sharded-v1','lease',v,'seconds',least(15,greatest(0,extract(epoch from t-c.last_tick))),
   'now',extract(epoch from t)*1000,'sessions',sessions,'pushes',pushes,
   'checkpoints',(select coalesce(jsonb_object_agg(participant.id,saved.checkpoint),'{}'::jsonb)
    from private.egg_bots participant join private.egg_bot_checkpoints saved on saved.bot_id=participant.id and saved.game=participant.game
    where participant.is_online or participant.tick_seconds>0),
   'baseline',(select jsonb_object_agg(participant.id,jsonb_build_object('data',participant.data,'pose',participant.pose,
    'progress',coalesce(participant.game_progress->participant.game,jsonb_build_object('game',participant.game,'seconds',0,'actions',0,'rounds',0,'level',0))))
    from private.egg_bots participant where participant.id between 1 and 140));$new$);
 anchor:='  -- Validate the complete batch before changing progress.';
 if position(anchor in f)=0 then raise exception 'worker_validation_changed';end if;
 f:=replace(f,anchor,$validation$
  shards:=p_checkpoint::jsonb;
  if jsonb_typeof(shards)<>'object' then raise exception 'invalid_checkpoint';end if;
  if exists(select 1 from jsonb_each(shards)e where e.key!~'^[0-9]{1,3}$' or jsonb_typeof(e.value)<>'string' or length(e.value#>>'{}') not between 1 and 1000000) then raise exception 'invalid_checkpoint';end if;
  if exists(select 1 from jsonb_each(shards)e where e.key::integer not between 1 and 140) then raise exception 'invalid_checkpoint';end if;
  if exists(select 1 from private.egg_bots participant where participant.id between 1 and 140 and (participant.is_online or participant.tick_seconds>0) and not(shards?participant.id::text)) then raise exception 'missing_active_checkpoint';end if;
$validation$||anchor);
 anchor:='  update private.egg_bot_control set checkpoint=p_checkpoint,last_tick=';
 if position(anchor in f)=0 then raise exception 'worker_checkpoint_changed';end if;
 f:=replace(f,anchor,$save$
  insert into private.egg_bot_checkpoints(bot_id,game,checkpoint)
   select participant.id,participant.game,e.value#>>'{}' from jsonb_each(shards)e join private.egg_bots participant on participant.id=e.key::integer
   on conflict(bot_id,game) do update set checkpoint=excluded.checkpoint
   where egg_bot_checkpoints.checkpoint is distinct from excluded.checkpoint;
  -- Keep the legacy blob as an unchanged migration backup. Each tick writes
  -- only active games; other games retain their prior checkpoints untouched.
  update private.egg_bot_control set last_tick=$save$);
 execute f;
end $patch$;
commit;
