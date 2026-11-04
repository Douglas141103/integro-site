-- Run only after deploying the quarter-earnings worker and staging all 140
-- checkpoint_after values. The worker remains paused until verification.
begin;
set local lock_timeout='5s';
do $cut$
declare reference_id constant text:='bot-integros-quarter-20261104';applied integer;
begin
 perform 1 from private.egg_bot_control where id for update;
 if exists(select 1 from private.egg_bot_control where enabled or lease is not null) then raise exception 'pause_worker_first';end if;
 select count(*) into applied from private.egg_bot_balance_adjustments where reference=reference_id and applied_at is not null;
 if applied=140 then return;elsif applied<>0 then raise exception 'partial_adjustment';end if;
 if (select count(*) from private.egg_bot_balance_adjustments where reference=reference_id and checkpoint_after is not null)<>140 then raise exception 'missing_prepared_checkpoints';end if;
 if exists(select 1 from private.egg_bot_balance_adjustments a
  join private.egg_bots b on b.id=a.bot_id join private.egg_bot_checkpoints c on c.bot_id=b.id and c.game='egg'
  where a.reference=reference_id and (b.data is distinct from a.data_before or c.checkpoint is distinct from a.checkpoint_before or a.coins_after<>floor(a.coins_before::numeric/4))) then raise exception 'robot_changed_after_snapshot';end if;
 update private.egg_bot_checkpoints c set checkpoint=a.checkpoint_after from private.egg_bot_balance_adjustments a where a.reference=reference_id and c.bot_id=a.bot_id and c.game='egg';
 if not found then raise exception 'no_checkpoints';end if;
 update private.egg_bots b set data=jsonb_set(b.data,'{coins}',to_jsonb(a.coins_after)) from private.egg_bot_balance_adjustments a where a.reference=reference_id and b.id=a.bot_id;
 update private.egg_bot_balance_adjustments set applied_at=clock_timestamp() where reference=reference_id;
end $cut$;
commit;
