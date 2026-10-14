-- Add the 13th Pegue o Ovo track without changing accounts, access or saved progress.
begin;
do $migration$
declare body text;
begin
 body:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -580 else -200' in body)=0 and position('then -628 else -200' in body)=0 then
  raise exception 'Install the Pegue o Ovo expansion before the storm track';
 end if;
 body:=replace(body,'then -580 else -200','then -628 else -200');
 execute body;
 body:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 body:=replace(body,'not between 0 and 11','not between 0 and 12');
 if position('p_action=''capabilities''' in body)=0 then
  body:=replace(body,'if p_action not in (','if p_action=''capabilities'' then return jsonb_build_object(''worlds'',13,''accessories'',22);end if; if p_action not in (');
 end if;
 execute body;
end $migration$;
notify pgrst,'reload schema';
commit;
