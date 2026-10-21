-- Universal, one-time gift: one jetpack with FIVE flight charges and two traps.
-- Eligibility has no registration-date cutoff; existing and future players qualify.
create table if not exists private.egg_gift_claims (
 user_id uuid not null references auth.users(id) on delete cascade,
 campaign text not null, claimed_at timestamptz not null default now(),
 jet_charges integer not null check(jet_charges=5),
 mines integer not null check(mines=1), bears integer not null check(bears=1),
 primary key(user_id,campaign)
);
alter table private.egg_gift_claims enable row level security;
revoke all on private.egg_gift_claims from public,anon,authenticated;
create or replace function private.box_egg_gift(p_action text) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); campaign_id constant text:='egg_welcome_20261021'; received timestamptz; granted boolean:=false;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action not in ('gift_state','gift_claim') then return jsonb_build_object('error','invalid_action');end if;
 if p_action='gift_claim' then
  -- Follow the wallet-before-inventory lock order used by paid purchases.
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  perform 1 from private.intgem_wallets where user_id=u for update;
  select claimed_at into received from private.egg_gift_claims where user_id=u and campaign=campaign_id;
  if received is null then
   insert into private.egg_jetpacks(user_id) values(u) on conflict do nothing;
   perform 1 from private.egg_jetpacks where user_id=u for update;
   if (select charges from private.egg_jetpacks where user_id=u)>999995 then return jsonb_build_object('error','jet_full');end if;
   update private.egg_jetpacks set charges=charges+5,updated_at=now() where user_id=u;
   insert into private.egg_trap_stock(user_id,kind,quantity) values(u,'bear',1),(u,'mine',1)
    on conflict(user_id,kind) do update set quantity=private.egg_trap_stock.quantity+excluded.quantity;
   insert into private.egg_gift_claims(user_id,campaign,jet_charges,mines,bears) values(u,campaign_id,5,1,1) returning claimed_at into received;
   granted:=true;
  end if;
 else
  select claimed_at into received from private.egg_gift_claims where user_id=u and campaign=campaign_id;
 end if;
 return jsonb_build_object('campaign',campaign_id,'claimed',received is not null,'claimed_at',received,'granted',granted,
  'rewards',jsonb_build_object('jetpacks',1,'charges',5,'mine',1,'bear',1));
end $$;
revoke all on function private.box_egg_gift(text) from public,anon,authenticated;
do $$ declare source text;begin
 select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) into source;
 if position('private.box_egg_gift(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'box_egg_dispatcher_anchor_not_found';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''gift_state'',''gift_claim'') then return private.box_egg_gift(p_action);end if; if p_action=''capabilities''');execute source;
 end if;
end $$;
