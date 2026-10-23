-- Correct skates to 7 IntGem. Old clients must reload before spending a different currency.
-- Existing gifts, stock, and past purchases are preserved.
begin;
alter table private.egg_winter_operations drop constraint if exists egg_winter_operations_action_check;
alter table private.egg_winter_operations add constraint egg_winter_operations_action_check
 check(action in ('winter_buy','winter_buy_intgem','winter_use'));
create or replace function private.box_egg_winter(p_action text,p_request uuid,p_revision integer) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); w private.egg_winter_inventory; s private.box_egg_saves; previous text;
 granted boolean:=false; balance integer; result jsonb;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action='winter_buy' then return jsonb_build_object('error','request_changed','message','Atualize a página: os patins custam 7 IntGem.');end if;
 if p_action not in ('winter_state','winter_claim','winter_buy_intgem','winter_use') then return jsonb_build_object('error','invalid_action');end if;
 if p_action in ('winter_buy_intgem','winter_use') and p_request is null then return jsonb_build_object('error','request_required');end if;
 if p_action='winter_state' then
  select * into w from private.egg_winter_inventory where user_id=u;
 else
  -- Match the save/trade lock order; each request and the gift are idempotent.
  perform pg_advisory_xact_lock(832137);
  if p_action in ('winter_claim','winter_buy_intgem') then
   insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
   select v.balance into balance from private.intgem_wallets v where user_id=u for update;
  end if;
  if p_action='winter_buy_intgem' then
   select * into s from private.box_egg_saves where user_id=u for update;
  end if;
  insert into private.egg_winter_inventory(user_id) values(u) on conflict do nothing;
  select * into w from private.egg_winter_inventory where user_id=u for update;
  if p_action='winter_claim' and w.claimed_at is null then
   if w.skates>999998 then return jsonb_build_object('error','winter_full');end if;
   insert into private.egg_trap_stock(user_id,kind,quantity) values(u,'mine',3)
    on conflict(user_id,kind) do update set quantity=private.egg_trap_stock.quantity+excluded.quantity;
   update private.egg_winter_inventory set skates=skates+2,claimed_at=now(),updated_at=now() where user_id=u returning * into w;
   granted:=true;
  elsif p_action in ('winter_buy_intgem','winter_use') then
   select action into previous from private.egg_winter_operations where user_id=u and request_id=p_request;
   if found then
    if previous<>p_action then return jsonb_build_object('error','request_changed');end if;
   else
    if exists(select 1 from private.box_egg_trades t where u in(t.a,t.b) and t.status='pending' and t.expires_at>now()) then return jsonb_build_object('error','trade_pending');end if;
    if exists(select 1 from private.box_members m join private.box_egg_races r on r.room_id=m.room_id where m.user_id=u and m.seen_at>now()-interval '30 seconds' and r.starts_at>now()-interval '2 minutes') then return jsonb_build_object('error','race_running');end if;
    if p_action='winter_buy_intgem' then
     if s.data is null then return jsonb_build_object('error','no_save');end if;
     if p_revision is distinct from s.revision then return jsonb_build_object('error','conflict','save',s.data,'revision',s.revision);end if;
     if w.skates>=1000000 then return jsonb_build_object('error','winter_full');end if;
     if balance<7 then return jsonb_build_object('error','insufficient_intgem');end if;
     update private.intgem_wallets v set balance=v.balance-7,updated_at=now() where user_id=u;
     insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-7,'purchase','egg-winter-skates:'||p_request::text);
     update private.egg_winter_inventory set skates=skates+1,updated_at=now() where user_id=u returning * into w;
    else
     if w.skates<1 then return jsonb_build_object('error','winter_empty');end if;
     update private.egg_winter_inventory set skates=skates-1,updated_at=now() where user_id=u returning * into w;
    end if;
    insert into private.egg_winter_operations(user_id,request_id,action) values(u,p_request,p_action);
   end if;
  end if;
 end if;
 result:=jsonb_build_object('campaign','winter_2026','claimed',w.claimed_at is not null,'claimed_at',w.claimed_at,'granted',granted,'skates',coalesce(w.skates,0),'price',7,'currency','intgem','rewards',jsonb_build_object('mine',3,'skates',2));
 if p_action='winter_buy_intgem' then result:=result||jsonb_build_object('save',s.data,'revision',s.revision);end if;
 if p_action='winter_use' then result:=result||jsonb_build_object('activation',p_request);end if;
 return result;
end $$;
revoke all on function private.box_egg_winter(text,uuid,integer) from public,anon,authenticated;

do $$ declare source text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('''winter_buy_intgem''' in source)=0 then
  if position('''winter_state'',''winter_claim'',''winter_buy'',''winter_use''' in source)=0 then raise exception 'winter_dispatcher_anchor_missing';end if;
  source:=replace(source,'''winter_state'',''winter_claim'',''winter_buy'',''winter_use''','''winter_state'',''winter_claim'',''winter_buy'',''winter_buy_intgem'',''winter_use''');
  execute source;
 end if;
end $$;
notify pgrst,'reload schema';
commit;
