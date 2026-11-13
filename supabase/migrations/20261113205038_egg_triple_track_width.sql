-- Permit existing paid traps across the widened 28.5-unit track.
-- Placement still uses the authenticated room member's server position.
-- Preserve all rows, ownership, stock, refunds, RLS and longitudinal bounds.
alter table private.egg_traps drop constraint egg_traps_x_check;
alter table private.egg_traps add constraint egg_traps_x_check check(x between -14.25 and 14.25);
