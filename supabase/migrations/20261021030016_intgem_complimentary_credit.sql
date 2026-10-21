-- Complimentary credits are separate from paid orders and daily rewards.
alter table private.intgem_ledger drop constraint intgem_ledger_kind_check;
alter table private.intgem_ledger add constraint intgem_ledger_kind_check check(kind in ('payment','daily','purchase','exchange','grant'));
create or replace function private.intgem_admin_grant(p_user uuid,p_amount integer,p_reference text) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare receipt private.intgem_ledger; current_balance integer;
begin
 if p_amount is null or p_amount not between 1 and 1000000 or p_reference is null or char_length(p_reference) not between 8 and 160 then raise exception 'invalid_grant';end if;
 if not private.box_can_play(p_user) then raise exception 'box_access_denied';end if;
 insert into private.intgem_wallets(user_id) values(p_user) on conflict do nothing;
 select balance into current_balance from private.intgem_wallets where user_id=p_user for update;
 select * into receipt from private.intgem_ledger where user_id=p_user and kind='grant' and reference=p_reference;
 if found then
  if receipt.delta<>p_amount then raise exception 'grant_reference_conflict';end if;
  return jsonb_build_object('credited',false,'balance',current_balance,'receipt',receipt.id);
 end if;
 insert into private.intgem_ledger(user_id,delta,kind,reference) values(p_user,p_amount,'grant',p_reference) returning * into receipt;
 update private.intgem_wallets set balance=balance+p_amount,updated_at=now() where user_id=p_user returning balance into current_balance;
 return jsonb_build_object('credited',true,'balance',current_balance,'receipt',receipt.id);
end $$;
revoke all on function private.intgem_admin_grant(uuid,integer,text) from public,anon,authenticated,service_role;
