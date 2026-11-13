-- Extend authenticated room poses and trap locations to the Subsoil bonus.
-- Keep all identity, ownership, economy and race validation intact.
do $migration$
declare source text;
begin
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -1492 else -200' in source)=0 then raise exception 'subsoil_room_bound_changed';end if;
 execute replace(source,'then -1492 else -200','then -1844 else -200');
end $migration$;
alter table private.egg_traps drop constraint egg_traps_z_check;
alter table private.egg_traps add constraint egg_traps_z_check check(z between -1844 and 25);
notify pgrst,'reload schema';
