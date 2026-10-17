-- Extend the existing usage allowlists; keep all authorization and other games.
begin;
do $migration$
declare item record; definition text; updated text;
begin
 for item in select conname,pg_get_constraintdef(oid) as definition
   from pg_constraint where conrelid='private.box_usage_sessions'::regclass
   and contype='c' and pg_get_constraintdef(oid) like '%game = ANY%'
 loop
  if position('''blueworld''' in item.definition)=0 then
   if position('ARRAY[' in item.definition)=0 then raise exception 'Unexpected usage game constraint';end if;
   updated:=replace(item.definition,'ARRAY[','ARRAY[''blueworld''::text,');
   execute format('alter table private.box_usage_sessions drop constraint %I',item.conname);
   execute format('alter table private.box_usage_sessions add constraint %I %s',item.conname,updated);
  end if;
 end loop;
 definition:=pg_get_functiondef('public.box_usage(uuid,text,text,boolean,boolean,uuid,text)'::regprocedure);
 if position('''blueworld''' in definition)=0 then
  if position('''robot'',''memory''' in definition)=0 then raise exception 'Unexpected box_usage allowlist';end if;
  execute replace(definition,'''robot'',''memory''','''robot'',''memory'',''blueworld''');
 end if;
end $migration$;
commit;
