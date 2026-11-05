-- Expand only Craft room coordinates. Preserve membership, reach, quotas and all other games.
do $migration$
declare definition text;
begin
 select pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure) into definition;
 if position('ex between 0 and 47 and ey between 1 and 29 and ez between 0 and 47 and b between 0 and 10' in definition)=0 then
  raise exception 'Unexpected Craft room bounds; inspect box_room before migrating';
 end if;
 definition:=replace(definition,
 'ex between 0 and 47 and ey between 1 and 29 and ez between 0 and 47 and b between 0 and 10',
 'ex between 0 and 95 and ey between 1 and 29 and ez between 0 and 95 and b between 0 and 10');
 execute definition;
end;
$migration$;
