-- One fixed event deadline. No scheduler or player session is needed to enforce it.
begin;
create or replace function private.egg_winter_event_state() returns jsonb
language sql stable security invoker set search_path='' as $$
 select jsonb_build_object('id','winter_2026','ends_at','2026-10-29T03:32:00.000Z',
 'active',now()<timestamptz '2026-10-29 03:32:00+00','now',now(),'version',1,'permanent_world',20);
$$;
revoke all on function private.egg_winter_event_state() from public,anon,authenticated;
do $$ declare src text;begin
 src:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_winter_event_state()' in src)=0 then
  if position('if p_action=''capabilities''' in src)=0 then raise exception 'event_dispatch_anchor_missing';end if;
  src:=replace(src,'if p_action=''capabilities''','if p_action=''event_state'' then return jsonb_build_object(''event'',private.egg_winter_event_state());end if; if p_action=''capabilities''');
  src:=replace(src,'''vehicles'',12);end if;', '''vehicles'',12,''event'',private.egg_winter_event_state());end if;');
  -- Some earlier migration fixtures have eight vehicles.
  src:=replace(src,'''vehicles'',8);end if;', '''vehicles'',8,''event'',private.egg_winter_event_state());end if;');
  src:=replace(src,'if p_action=''save'' then', E'if p_action=''save'' then\n if not (private.egg_winter_event_state()->>''active'')::boolean and (coalesce(p_data->>''eventVersion'','''')<>''1'' or coalesce(p_data->>''winterEnded'','''')<>''true'') then return jsonb_build_object(''error'',''event_update_required'',''event'',private.egg_winter_event_state());end if;');
  execute src;
 end if;
 src:=pg_get_functiondef('private.box_egg_winter(text,uuid,integer)'::regprocedure);
 if position('winter_ended' in src)=0 then
  if position('if p_action=''winter_state''' in src)=0 then raise exception 'winter_state_anchor_missing';end if;
  src:=replace(src,'if p_action=''winter_state''', 'if p_action=''winter_claim'' and not (private.egg_winter_event_state()->>''active'')::boolean then return jsonb_build_object(''error'',''winter_ended'');end if; if p_action=''winter_state''');
  execute src;
 end if;
 if to_regprocedure('private.egg_economic_wealth(jsonb)') is not null then
  src:=pg_get_functiondef('private.egg_economic_wealth(jsonb)'::regprocedure);
  src:=replace(src,'75000,800000]','75000,75000]');
  src:=replace(src,'if (p->>''world'')::integer=20 then','if (p->>''world'')::integer=20 and coalesce(p->>''winterReward'',''true'')<>''false'' then');
  execute src;
 end if;
end $$;
notify pgrst,'reload schema';
commit;
