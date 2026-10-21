-- Only public appearance is shared with verified members of the same room.
-- Inventory, account identifiers and balances remain private.
create or replace function private.box_room_appearance(p_user uuid,p_game text) returns jsonb
language sql stable security invoker set search_path='' as $$
 select jsonb_build_object(
  'premium',coalesce((select jsonb_object_agg(e.kind,e.item_id)
   from private.intgem_equipped e join private.intgem_inventory inv on inv.user_id=e.user_id and inv.item_id=e.item_id
   join private.intgem_items i on i.id=e.item_id and i.enabled and i.game=e.game and i.kind=e.kind
   where e.user_id=p_user and e.game=p_game and e.kind in ('head','face','back','aura','companion')),'{}'::jsonb),
  'accessories',case when p_game='egg' then coalesce((select jsonb_object_agg(eq.key,eq.value)
   from private.box_egg_saves s cross join lateral jsonb_each_text(case when jsonb_typeof(s.data->'equipped')='object' then s.data->'equipped' else '{}'::jsonb end) eq
   where s.user_id=p_user and eq.key in ('head','face','back') and char_length(eq.value)<=64 and s.data->'accessories' ? eq.value),'{}'::jsonb) else '{}'::jsonb end,
  'companion',case when p_game='egg' then (select jsonb_build_object('world',pet->'world','rarity',pet->'rarity','mutation',pet->'mutation')
   from private.box_egg_saves s cross join lateral jsonb_array_elements(case when jsonb_typeof(s.data->'creatures')='array' then s.data->'creatures' else '[]'::jsonb end) pet
   where s.user_id=p_user and pet->>'uid'=s.data->>'companionId' limit 1) else null end
 );
$$;
revoke all on function private.box_room_appearance(uuid,text) from public,anon,authenticated,service_role;
-- Retain all current access checks, rate limits, block edits and movement validation.
do $patch$
declare f text; needle text:='jsonb_build_object(''slot'',slot,''state'',state)';
begin
 f:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('private.box_room_appearance' in f)=0 then
  if position(needle in f)=0 then raise exception 'room_payload_patch_missing';end if;
  f:=replace(f,needle,'jsonb_build_object(''slot'',slot,''state'',state || jsonb_build_object(''appearance'',private.box_room_appearance(user_id,r.game)))');
  execute f;
 end if;
end $patch$;
