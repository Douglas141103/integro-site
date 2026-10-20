-- Read-only standings from saved Pegue o Ovo balances; IntGem breaks coin ties.
-- Called only through the already-authorized public.box_egg dispatcher.
create or replace function private.box_egg_ranking() returns jsonb
language plpgsql stable security invoker set search_path = '' as $$
declare result jsonb; caller uuid := auth.uid();
begin
  if caller is null or not private.box_can_play(caller) then
    raise exception 'box_access_denied' using errcode = '42501';
  end if;
  with eligible as (
    select s.user_id, s.updated_at,
      case when jsonb_typeof(s.data->'coins') = 'number'
        then floor(greatest(0, least(1000000000, (s.data->>'coins')::numeric)))
        else 0 end as integros,
      coalesce(w.balance, 0) as intgem,
      left(coalesce(nullif(pupil.label, ''), nullif(nullif(btrim(a.display_name), ''), 'Jogador'),
        'Jogador ' || left(md5(s.user_id::text), 6)), 80) as name
    from private.box_egg_saves s
    left join private.box_accounts a on a.user_id = s.user_id
    left join private.intgem_wallets w on w.user_id = s.user_id
    left join lateral (
      select string_agg(names.label, ' / ' order by names.label) as label
      from (
        select distinct split_part(btrim(st.full_name), ' ', 1) ||
          case when split_part(btrim(st.full_name), ' ', 2) <> ''
            then ' ' || split_part(btrim(st.full_name), ' ', 2) else '' end as label
        from public.student_guardians sg join public.students st on st.id = sg.student_id
        where sg.guardian_profile_id = s.user_id and st.active is true
      ) names
    ) pupil on true
    where s.data is not null and private.box_can_play(s.user_id)
  ), ranked as (
    select *, rank() over (order by integros desc, intgem desc) as position,
      row_number() over (order by integros desc, intgem desc, name, user_id) as ordinal
    from eligible
  ), visible as (
    select ordinal, jsonb_build_object('position', position, 'name', name,
      'integros', integros, 'intgem', intgem, 'mine', user_id = caller) as item
    from ranked where ordinal <= 100
  )
  select jsonb_build_object(
    'rows', coalesce((select jsonb_agg(item order by ordinal) from visible), '[]'::jsonb),
    'mine', (select jsonb_build_object('position', position, 'name', name,
      'integros', integros, 'intgem', intgem, 'mine', true) from ranked where user_id = caller),
    'total', (select count(*) from ranked), 'updated_at', now()
  ) into result;
  return result;
end $$;
revoke all on function private.box_egg_ranking() from public, anon, authenticated;

-- Add one read branch before the write/locking path, preserving all game actions.
do $$
declare source text;
begin
  select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) into source;
  if position('private.box_egg_ranking()' in source) = 0 then
    if position('if p_action=''capabilities''' in source) = 0 then
      raise exception 'box_egg_dispatcher_anchor_not_found';
    end if;
    source := replace(source, 'if p_action=''capabilities''',
      'if p_action=''ranking'' then return private.box_egg_ranking();end if; if p_action=''capabilities''');
    execute source;
  end if;
end $$;
