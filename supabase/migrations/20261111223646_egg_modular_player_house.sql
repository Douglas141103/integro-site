-- Modular straw homes: legacy saves remain compatible until a home is saved.
-- Permanent module identities survive rearrangement and older client saves.
create or replace function private.egg_house_valid(old_save jsonb,new_save jsonb) returns boolean
language plpgsql immutable security invoker set search_path='' as $$
declare h jsonb:=new_save->'house';ms jsonb;m jsonb;n integer;reached text[]:=array['home'];expanded text[];
begin
 if not (new_save ? 'house') then return not coalesce(old_save ? 'house',false);end if;
 if jsonb_typeof(h) is distinct from 'object' or h->'version' is distinct from '1'::jsonb or jsonb_typeof(h->'modules') is distinct from 'array' then return false;end if;
 ms:=h->'modules';n:=jsonb_array_length(ms);if n not between 1 and 9 then return false;end if;
 for m in select value from jsonb_array_elements(ms) loop
  if jsonb_typeof(m) is distinct from 'object' or jsonb_typeof(m->'id') is distinct from 'string' or coalesce(m->>'id','') !~ '^(home|m[1-8])$' or coalesce(m->>'type','') not in ('room','bedroom','kitchen','porch') then return false;end if;
  if jsonb_typeof(m->'col') is distinct from 'number' or coalesce(m->>'col','') !~ '^[0-2]$' or jsonb_typeof(m->'row') is distinct from 'number' or coalesce(m->>'row','') !~ '^[0-2]$' or jsonb_typeof(m->'rotation') is distinct from 'number' or coalesce(m->>'rotation','') !~ '^[0-3]$' then return false;end if;
 end loop;
 if (select count(distinct value->>'id') from jsonb_array_elements(ms))<>n or (select count(distinct (value->>'col',value->>'row')) from jsonb_array_elements(ms))<>n then return false;end if;
 if not exists(select 1 from jsonb_array_elements(ms) v where v->>'id'='home' and v->>'type'='room' and v->>'col'='1' and v->>'row'='0') then return false;end if;
 for i in 1..9 loop
  select array_agg(distinct a->>'id') into expanded from jsonb_array_elements(ms) a where a->>'id'=any(reached) or exists(select 1 from jsonb_array_elements(ms) b where b->>'id'=any(reached) and abs((a->>'col')::integer-(b->>'col')::integer)+abs((a->>'row')::integer-(b->>'row')::integer)=1);
  reached:=expanded;
 end loop;
 if cardinality(reached)<>n then return false;end if;
 if exists(select 1 from jsonb_array_elements(coalesce(old_save->'house'->'modules','[]')) a where not exists(select 1 from jsonb_array_elements(ms) b where b->>'id'=a->>'id' and b->>'type'=a->>'type')) then return false;end if;
 return true;
 exception when others then return false;
end $$;
revoke all on function private.egg_house_valid(jsonb,jsonb) from public,anon,authenticated;
do $migration$
declare f text;anchor text;
begin
 f:=pg_get_functiondef('private.egg_progression_valid(jsonb,jsonb)'::regprocedure);
 if position('private.egg_house_valid(' in f)=0 then
  anchor:='begin';if position(anchor in f)=0 then raise exception 'house_validation_anchor_missing';end if;
  f:=replace(f,anchor,E'begin\n if not private.egg_house_valid(old_save,new_save) then return false;end if;');execute f;
 end if;
 f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''house_modules''' in f)=0 then
  anchor:='''corral_designs'',7';if position(anchor in f)=0 then raise exception 'house_capability_anchor_missing';end if;
  f:=replace(f,anchor,anchor||',''house_modules'',9');
  anchor:='''fusion'',other.data->''fusion''';if position(anchor in f)=0 then raise exception 'house_visit_anchor_missing';end if;
  f:=replace(f,anchor,anchor||',''house'',other.data->''house''');execute f;
 end if;
end $migration$;
