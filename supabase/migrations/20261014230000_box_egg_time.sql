-- Extend Pegue o Ovo to 14 tracks. Accounts, permissions and saved data are retained.
begin;
do $migration$
declare body text;
begin
 body:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -628 else -200' in body)=0 and position('then -676 else -200' in body)=0 then
  raise exception 'Install the storm track before the time track';
 end if;
 body:=replace(body,'then -628 else -200','then -676 else -200');
 execute body;
 body:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('not between 0 and 12' in body)=0 and position('not between 0 and 13' in body)=0 then
  raise exception 'Install the storm track before the time track';
 end if;
 body:=replace(body,'not between 0 and 12','not between 0 and 13');
 body:=replace(body,'jsonb_build_object(''worlds'',13,''accessories'',22)','jsonb_build_object(''worlds'',14,''accessories'',52,''abilities'',8)');
 execute body;
end $migration$;
notify pgrst,'reload schema';
commit;
