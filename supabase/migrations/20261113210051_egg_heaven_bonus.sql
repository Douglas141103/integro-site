-- Append the celestial species without changing any earlier world IDs.
-- Bonus gravity is rendered from shared logical positions, so room physics stays compatible.
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''worlds'',23' in source)=0 then raise exception 'heaven_world_count_changed';end if;
 source:=replace(source,'''worlds'',23','''worlds'',24');
 -- Pet validation expands, while ordinary timed races remain on tracks 1--23.
 source:=replace(source,'not between 0 and 22','not between 0 and 23');
 source:=replace(source,'if p_world not between 0 and 23','if p_world not between 0 and 22');
 execute source;
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -1108 else -200' in source)=0 then raise exception 'heaven_room_bound_changed';end if;
 execute replace(source,'then -1108 else -200','then -1492 else -200');
 -- An older client must not silently discard the bonus species on its next save.
 source:=pg_get_functiondef('private.egg_progression_valid(jsonb,jsonb)'::regprocedure);
 anchor:=E'\nbegin\n';
 if position(anchor in source)=0 then raise exception 'heaven_progression_guard_changed';end if;
 execute overlay(source placing E'begin\n if coalesce((new_save->>''contentVersion'')::integer,0)<24 and exists(select 1 from jsonb_array_elements(coalesce(old_save->''creatures'',''[]''::jsonb)||coalesce(old_save->''eggs'',''[]''::jsonb)) as items(item) where items.item->>''world''=''23'') then return false;end if;' from position(anchor in source)+1 for 5);
 source:=pg_get_functiondef('private.egg_fusion_rate(jsonb)'::regprocedure);
 anchor:='75000,75000,45000,50000]';
 if position(anchor in source)=0 then raise exception 'heaven_fusion_values_changed';end if;
 execute replace(source,anchor,'75000,75000,45000,50000,85000]');
 source:=pg_get_functiondef('private.egg_economic_wealth(jsonb)'::regprocedure);
 anchor:='else v:=coalesce((cfg->''worlds''->>((p->>''world'')::integer))::numeric,0)*r*m;end if;';
 if position(anchor in source)=0 then raise exception 'heaven_wealth_values_changed';end if;
 execute replace(source,anchor,'elsif (p->>''world'')::integer=23 then v:=85000*r*m; '||anchor);
end $migration$;
alter table private.egg_traps drop constraint egg_traps_z_check;
alter table private.egg_traps add constraint egg_traps_z_check check(z between -1492 and 25);
notify pgrst,'reload schema';
