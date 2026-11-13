-- Append Magma as world 24; keep existing IDs and timed race tracks intact.
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''worlds'',24' in source)=0 then raise exception 'magma_world_count_changed';end if;
 source:=replace(source,'''worlds'',24','''worlds'',25');
 source:=replace(source,'not between 0 and 23','not between 0 and 24');
 execute source;
 source:=pg_get_functiondef('private.egg_progression_valid(jsonb,jsonb)'::regprocedure);
 anchor:=E'\nbegin\n';
 if position(anchor in source)=0 then raise exception 'magma_progression_guard_changed';end if;
 execute overlay(source placing E'begin\n if coalesce((new_save->>''contentVersion'')::integer,0)<25 and exists(select 1 from jsonb_array_elements(coalesce(old_save->''creatures'',''[]''::jsonb)||coalesce(old_save->''eggs'',''[]''::jsonb)) as items(item) where items.item->>''world''=''24'') then return false;end if;' from position(anchor in source)+1 for 5);
 source:=pg_get_functiondef('private.egg_fusion_rate(jsonb)'::regprocedure);
 anchor:='50000,85000]';
 if position(anchor in source)=0 then raise exception 'magma_fusion_values_changed';end if;
 execute replace(source,anchor,'50000,85000,100000]');
 source:=pg_get_functiondef('private.egg_economic_wealth(jsonb)'::regprocedure);
 anchor:='else v:=coalesce((cfg->''worlds''->>((p->>''world'')::integer))::numeric,0)*r*m;end if;';
 if position(anchor in source)=0 then raise exception 'magma_wealth_values_changed';end if;
 execute replace(source,anchor,'elsif (p->>''world'')::integer=24 then v:=100000*r*m; '||anchor);
end $migration$;
notify pgrst,'reload schema';
