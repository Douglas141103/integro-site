-- InterDance uses local two-player matches; no new room or user permissions.
begin;
alter table private.box_usage_sessions drop constraint if exists box_usage_sessions_game_check;
alter table private.box_usage_sessions add constraint box_usage_sessions_game_check check(game in ('lobby','house','egg','bairro','fruit','interball','fuitcort','craft','math','words','robot','memory','gosnake','interdance'));
do $migration$
declare definition text;
begin
 definition:=pg_get_functiondef('public.box_usage(uuid,text,text,boolean,boolean,uuid,text)'::regprocedure);
 if position('''interdance''' in definition)=0 then
  if position('''robot'',''memory''' in definition)=0 then raise exception 'Unexpected box_usage allowlist; manual review required'; end if;
  execute replace(definition,'''robot'',''memory''','''robot'',''memory'',''interdance''');
 end if;
end $migration$;
commit;
