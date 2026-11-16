-- Append Egypt without changing prior creature IDs, ownership checks or race tracks.
do $migration$
declare source text; anchor text;
begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''worlds'',25' in source)=0 then raise exception 'egypt_world_count_changed';end if;
 source:=replace(source,'''worlds'',25','''worlds'',26');
 source:=replace(source,'not between 0 and 24','not between 0 and 25');execute source;
 source:=pg_get_functiondef('private.egg_progression_valid(jsonb,jsonb)'::regprocedure);
 anchor:=E'\nbegin\n';if position(anchor in source)=0 then raise exception 'egypt_progression_guard_changed';end if;
 execute overlay(source placing E'begin\n if coalesce((new_save->>''contentVersion'')::integer,0)<26 and exists(select 1 from jsonb_array_elements(coalesce(old_save->''creatures'',''[]''::jsonb)||coalesce(old_save->''eggs'',''[]''::jsonb)) as items(item) where items.item->>''world''=''25'') then return false;end if;' from position(anchor in source)+1 for 5);
 source:=pg_get_functiondef('private.egg_fusion_rate(jsonb)'::regprocedure);
 anchor:='85000,100000]';if position(anchor in source)=0 then raise exception 'egypt_fusion_values_changed';end if;
 execute replace(source,anchor,'85000,100000,110000]');
 source:=pg_get_functiondef('private.egg_economic_wealth(jsonb)'::regprocedure);
 anchor:='else v:=coalesce((cfg->''worlds''->>((p->>''world'')::integer))::numeric,0)*r*m;end if;';
 if position(anchor in source)=0 then raise exception 'egypt_wealth_values_changed';end if;
 execute replace(source,anchor,'elsif (p->>''world'')::integer=25 then v:=110000*r*m; '||anchor);
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('then -1844 else -200' in source)=0 then raise exception 'egypt_room_bound_changed';end if;
 execute replace(source,'then -1844 else -200','then -2420 else -200');
end $migration$;
alter table private.egg_traps drop constraint egg_traps_z_check;
alter table private.egg_traps add constraint egg_traps_z_check check(z between -2420 and 25);
notify pgrst,'reload schema';
