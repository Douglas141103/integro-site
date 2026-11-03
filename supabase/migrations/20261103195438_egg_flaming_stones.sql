-- Append track 22 without changing any existing world IDs or saved rewards.
begin;
do $$declare source text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''worlds'',21' in source)=0 then raise exception 'world_count_changed';end if;
 source:=replace(source,'''worlds'',21','''worlds'',22');
 source:=replace(source,'not between 0 and 20','not between 0 and 21');execute source;
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -1012 else -200' in source)=0 then raise exception 'room_bound_changed';end if;
 execute replace(source,'then -1012 else -200','then -1060 else -200');
end $$;
alter table private.egg_traps drop constraint egg_traps_z_check;
alter table private.egg_traps add constraint egg_traps_z_check check(z between -1060 and 25);
notify pgrst,'reload schema';
commit;
