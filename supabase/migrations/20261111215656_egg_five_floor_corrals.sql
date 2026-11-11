-- Preserve legacy second-floor saves while allowing five permanent nest floors.
create or replace function private.egg_corral_floors(data jsonb) returns integer
language plpgsql immutable security invoker set search_path='' as $$
declare n numeric;
begin
 if data ? 'corralFloors' then
  if jsonb_typeof(data->'corralFloors') is distinct from 'number' then return 0;end if;
  n:=(data->>'corralFloors')::numeric;
  if n not between 1 and 5 or n<>trunc(n) then return 0;end if;
  return n::integer;
 end if;
 return case when data->>'secondFloor'='true' then 2 else 1 end;
 exception when others then return 0;
end $$;
revoke all on function private.egg_corral_floors(jsonb) from public,anon,authenticated;

do $migration$
declare f text;anchor text;
begin
 f:=pg_get_functiondef('private.egg_progression_valid(jsonb,jsonb)'::regprocedure);
 if position('private.egg_corral_floors(' in f)=0 then
  anchor:='begin';
  f:=replace(f,anchor,$checks$begin
 if private.egg_corral_floors(new_save)=0 or private.egg_corral_floors(new_save)<private.egg_corral_floors(old_save) then return false;end if;
 if new_save ? 'corralFloors' and (coalesce(new_save->>'secondFloor','false')='true')<>(private.egg_corral_floors(new_save)>1) then return false;end if;
 if new_save ? 'decorations' then
  if jsonb_typeof(new_save->'decorations') is distinct from 'array' then return false;end if;
  if exists(select 1 from jsonb_array_elements(new_save->'decorations') d where jsonb_typeof(d)<>'string' or d#>>'{}' not in ('meadow','candy','space','bamboo','castle','tropical','neon')) then return false;end if;
  if exists(select 1 from jsonb_array_elements_text(coalesce(old_save->'decorations','[]')) d where not (new_save->'decorations' ? d)) then return false;end if;
  if not coalesce(new_save->'decorations' ? (new_save->>'decoration'),false) then return false;end if;
 elsif old_save ? 'decorations' then return false;
 end if;
$checks$);
  execute f;
 end if;
 f:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_corral_floors(p_data)' in f)=0 then
  anchor:='+(case when p_data->>''secondFloor''=''true'' then 24 else 0 end)';
  if position(anchor in f)=0 then raise exception 'five_floor_capacity_anchor_missing';end if;
  f:=replace(f,anchor,'+24*(private.egg_corral_floors(p_data)-1)');
  anchor:='''secondFloor'',other.data->''secondFloor''';
  if position(anchor in f)=0 then raise exception 'five_floor_visit_anchor_missing';end if;
  f:=replace(f,anchor,anchor||',''corralFloors'',private.egg_corral_floors(other.data)');
  anchor:='''vehicles'',12,''event''';
  if position(anchor in f)=0 then raise exception 'five_floor_capabilities_anchor_missing';end if;
  f:=replace(f,anchor,'''vehicles'',12,''corral_floors'',5,''corral_designs'',7,''event''');
  execute f;
 end if;
end $migration$;
