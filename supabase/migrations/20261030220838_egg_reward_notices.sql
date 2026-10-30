begin;
create table if not exists private.egg_reward_notices (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 reference text not null unique check(length(reference) between 8 and 160),
 message text not null check(length(message) between 1 and 2000),
 item_name text not null check(length(item_name) between 1 and 100),
 created_at timestamptz not null default clock_timestamp(),
 acknowledged_at timestamptz
);
alter table private.egg_reward_notices enable row level security;
revoke all on private.egg_reward_notices from public,anon,authenticated,service_role;
create index if not exists egg_reward_notices_unread on private.egg_reward_notices(user_id,created_at) where acknowledged_at is null;
create or replace function private.egg_reward_notice(p_action text,p_id uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid();begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action not in ('reward_notices','reward_ack') then raise exception 'invalid_action';end if;
 if p_action='reward_ack' then update private.egg_reward_notices set acknowledged_at=coalesce(acknowledged_at,clock_timestamp()) where id=p_id and user_id=u;end if;
 return jsonb_build_object('notices',coalesce((select jsonb_agg(jsonb_build_object('id',id,'message',message,'item_name',item_name) order by created_at) from private.egg_reward_notices where user_id=u and acknowledged_at is null),'[]'::jsonb));
end $$;
revoke all on function private.egg_reward_notice(text,uuid) from public,anon,authenticated,service_role;
do $$declare source text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_reward_notice(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'egg_dispatch_anchor_missing';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''reward_notices'',''reward_ack'') then return private.egg_reward_notice(p_action,p_id);end if; if p_action=''capabilities''');execute source;
 end if;
end $$;
notify pgrst,'reload schema';
commit;
