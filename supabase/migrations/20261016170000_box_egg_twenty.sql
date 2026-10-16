-- Pegue o Ovo: 20 tracks, mounted vehicles, safe save and room bounds.
-- Additive and repeatable. Existing accounts, permissions and saves are retained.
begin;
do $migration$
declare body text; anchor text; old_bound integer;
begin
 body:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -580 else -200' in body)=0 and position('then -628 else -200' in body)=0 and position('then -676 else -200' in body)=0 and position('then -964 else -200' in body)=0 then raise exception 'Install the original Pegue o Ovo expansion before Egg 20';end if;
 foreach old_bound in array array[580,628,676] loop body:=replace(body,'then -'||old_bound||' else -200','then -964 else -200');end loop;
 anchor:=$anchor$'gesture',case when p_state->>'gesture' in ('wave','cheer') then p_state->>'gesture' else '' end)$anchor$;
 if position($check$'vehicle',case when r.game='egg'$check$ in body)=0 then
  if position(anchor in body)=0 then raise exception 'Unexpected room state sanitizer';end if;
  body:=replace(body,anchor,$replacement$'gesture',case when p_state->>'gesture' in ('wave','cheer') then p_state->>'gesture' else '' end,
   'vehicle',case when r.game='egg' and p_state->>'vehicle' in ('skateBreeze','skateNeon','skateAurora','skateIntegro','scooterPort','scooterComet','scooterGalaxy','scooterIntegro') then p_state->>'vehicle' else '' end)$replacement$);
 end if;
 execute body;
 body:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('not between 0 and 11' in body)=0 and position('not between 0 and 12' in body)=0 and position('not between 0 and 13' in body)=0 and position('not between 0 and 19' in body)=0 then raise exception 'Install the original Pegue o Ovo expansion before Egg 20';end if;
 foreach old_bound in array array[11,12,13] loop body:=replace(body,'not between 0 and '||old_bound,'not between 0 and 19');end loop;
 if position('p_action=''capabilities''' in body)=0 then body:=replace(body,'if p_action not in (','if p_action=''capabilities'' then return jsonb_build_object(''worlds'',20,''accessories'',64,''abilities'',8,''vehicles'',8);end if; if p_action not in (');end if;
 body:=replace(body,$old$jsonb_build_object('worlds',13,'accessories',22)$old$,$new$jsonb_build_object('worlds',20,'accessories',64,'abilities',8,'vehicles',8)$new$);
 body:=replace(body,$old$jsonb_build_object('worlds',14,'accessories',52,'abilities',8)$old$,$new$jsonb_build_object('worlds',20,'accessories',64,'abilities',8,'vehicles',8)$new$);
 if position('Egg 20: validate mounted vehicles' in body)=0 then
  anchor:=$anchor$   for pet in select value from jsonb_array_elements(p_data->'creatures') loop$anchor$;
  if position(anchor in body)=0 then raise exception 'Unexpected egg save validator';end if;
  body:=replace(body,anchor,$validation$   -- Egg 20: validate mounted vehicles and all incubating eggs.
   if p_data ? 'vehicles' then
    if jsonb_typeof(p_data->'vehicles')<>'array' then return jsonb_build_object('error','invalid_save');end if;
    if jsonb_array_length(p_data->'vehicles')>8 or exists(select 1 from jsonb_array_elements_text(p_data->'vehicles') v where coalesce(v,'') not in ('skateBreeze','skateNeon','skateAurora','skateIntegro','scooterPort','scooterComet','scooterGalaxy','scooterIntegro')) then return jsonb_build_object('error','invalid_save');end if;
   end if;
   if nullif(p_data->>'vehicle','') is not null and (p_data->>'vehicle' not in ('skateBreeze','skateNeon','skateAurora','skateIntegro','scooterPort','scooterComet','scooterGalaxy','scooterIntegro') or not coalesce(p_data->'vehicles' ? (p_data->>'vehicle'),false)) then return jsonb_build_object('error','invalid_save');end if;
   for pet in select value from jsonb_array_elements(p_data->'eggs') loop
    if coalesce((pet->>'world')::integer,-1) not between 0 and 19 or coalesce(pet->>'rarity','') not in('common','rare','epic','legendary','secret') or coalesce(pet->>'mutation','') not in('normal','gold','rainbow','cosmic') then return jsonb_build_object('error','invalid_save');end if;
   end loop;
$validation$||anchor);
 end if;
 execute body;
end $migration$;
notify pgrst,'reload schema';
commit;
