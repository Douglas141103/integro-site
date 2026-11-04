begin;
-- Administrative robot-only snapshots; no authenticated/Data API access.
create table if not exists private.egg_bot_balance_adjustments(
 reference text not null,
 bot_id integer not null references private.egg_bots(id),
 coins_before bigint not null check(coins_before>=0),
 coins_after bigint not null check(coins_after>=0 and coins_after<=coins_before),
 data_before jsonb not null,
 checkpoint_before text not null,
 checkpoint_after text,
 created_at timestamptz not null default now(),
 applied_at timestamptz,
 primary key(reference,bot_id)
);
alter table private.egg_bot_balance_adjustments enable row level security;
alter table private.egg_bot_balance_adjustments alter column checkpoint_before set storage external;
alter table private.egg_bot_balance_adjustments alter column checkpoint_after set storage external;
revoke all on private.egg_bot_balance_adjustments from public,anon,authenticated,service_role;
commit;
