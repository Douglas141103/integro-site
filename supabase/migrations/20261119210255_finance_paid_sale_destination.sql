-- Preserve verified POS items until the operator chooses their accounting cycle.
create table private.finance_paid_destinations (
  id uuid primary key, school_id uuid not null references public.schools,
  student_id uuid not null references public.students, provider text not null,
  sale_id uuid not null, item_index integer not null check (item_index>0),
  snapshot jsonb not null, received_at timestamptz not null, decided_by uuid references public.profiles,
  advance_id uuid unique references private.finance_tuition_advances, entry_id uuid unique references public.finance_entries,
  unique(school_id,provider,sale_id,item_index)
);
alter table private.finance_paid_destinations enable row level security;
revoke all on private.finance_paid_destinations from public,anon,authenticated;
create index finance_paid_destinations_waiting on private.finance_paid_destinations(school_id,received_at)
where advance_id is null and entry_id is null;

create function private.finance_capture_paid_tuition() returns trigger
language plpgsql security definer set search_path='' as $$
declare source text; v_sale uuid; idx int; paid timestamptz;
begin
  if new.entry_type<>'mensalidade' or new.student_id is null or new.amount_paid<=0 then return new; end if;
  -- Replaying a protected snapshot and releasing an advance from the earlier workflow
  -- must pass the normal ledger guards once, without creating a second destination.
  if current_setting('app.finance_destination_row',true)=new.id::text and exists
    (select 1 from private.finance_paid_destinations where id=new.id and school_id=new.school_id) then return new; end if;
  if new.asaas_order_id is not null then
    source:='asaas';v_sale:=new.asaas_order_id;idx:=new.asaas_item_index;
    select paid_at into paid from private.finance_asaas_orders where id=v_sale and school_id=new.school_id and status='paid';
  elsif new.infinitepay_order_id is not null then
    source:='infinitepay';v_sale:=new.infinitepay_order_id;idx:=new.infinitepay_item_index;
    select paid_at into paid from private.finance_ip_orders where id=v_sale and school_id=new.school_id and status='paid';
  elsif new.pos_sale_id is not null then
    if exists(select 1 from private.finance_tuition_advances where id=new.pos_sale_id and school_id=new.school_id and received_at is not null) then return new; end if;
    source:='manual';v_sale:=new.pos_sale_id;idx:=new.pos_item_index;paid:=now();
    if auth.uid() is distinct from new.created_by or not exists(select 1 from public.profiles where id=auth.uid()
      and school_id=new.school_id and active and role::text in ('diretor','integro_admin','coordenacao')) then
      raise exception 'Acesso financeiro não autorizado.' using errcode='42501';
    end if;
  else return new;
  end if;
  if not exists(select 1 from public.students where id=new.student_id and school_id=new.school_id) then raise exception 'Aluno não pertence à escola.';end if;
  insert into private.finance_paid_destinations(id,school_id,student_id,provider,sale_id,item_index,snapshot,received_at)
    values(new.id,new.school_id,new.student_id,source,v_sale,idx,to_jsonb(new),coalesce(paid,now()))
    on conflict(school_id,provider,sale_id,item_index) do nothing;
  return null;
end $$;
revoke all on function private.finance_capture_paid_tuition() from public,anon,authenticated;
-- Run after the provider, cash-cycle and reservation checks.
create trigger zz_finance_capture_paid_tuition before insert on public.finance_entries
for each row execute function private.finance_capture_paid_tuition();

create function private.finance_keep_paid_reservation_hold() returns trigger
language plpgsql security definer set search_path='' as $$
begin
  if old.hold_id is not null and new.hold_id is distinct from old.hold_id and new.used_entry_id is null
    and exists(select 1 from private.finance_paid_destinations where school_id=old.school_id and student_id=old.student_id
      and sale_id=old.hold_id and provider=old.hold_provider and entry_id is null) then
    raise exception 'A reserva está vinculada a uma mensalidade recebida. Confira o destino em Adiantamentos.';
  end if;
  return new;
end $$;
revoke all on function private.finance_keep_paid_reservation_hold() from public,anon,authenticated;
create trigger finance_keep_paid_reservation_hold before update of hold_id on private.finance_reservation_credits
for each row execute function private.finance_keep_paid_reservation_hold();

create function private.finance_paid_destination(p_action text,p_data jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare
  school uuid; actor uuid:=auth.uid(); today date:=(now() at time zone 'America/Manaus')::date;
  r private.finance_paid_destinations%rowtype; a private.finance_tuition_advances%rowtype;
  c public.finance_cash_cycles%rowtype; e public.finance_entries%rowtype;
  start_day date; end_day date; key text; result jsonb;
begin
  select school_id into school from public.profiles where id=actor and active and role::text in ('diretor','integro_admin','coordenacao');
  if school is null then raise exception 'Acesso financeiro não autorizado.' using errcode='42501'; end if;
  if p_action in ('sale','pending') then
    select coalesce(jsonb_agg(x.snapshot || jsonb_build_object('destination_id',x.id,'advance_id',x.advance_id,'entry_id',x.entry_id,
       'received_at',x.received_at,'school_id',x.school_id) order by x.received_at,x.item_index),'[]') into result
    from private.finance_paid_destinations x where x.school_id=school and
      ((p_action='sale' and x.provider=p_data->>'provider' and x.sale_id=(p_data->>'sale')::uuid)
       or (p_action='pending' and x.advance_id is null and x.entry_id is null));
    return result;
  end if;
  if p_action='release' then
    select * into r from private.finance_paid_destinations where advance_id=(p_data->>'id')::uuid and school_id=school for update;
    if not found then return private.finance_tuition_advances('release',p_data); end if;
  else
    if p_action not in ('advance','current') then raise exception 'Destino desconhecido.'; end if;
    select * into r from private.finance_paid_destinations where id=(p_data->>'id')::uuid and school_id=school for update;
    if not found then raise exception 'Recebimento indisponível.';end if;
  end if;
  if r.entry_id is not null or (r.advance_id is not null and p_action<>'release') then
    return jsonb_build_object('advance_id',r.advance_id,'entry_id',r.entry_id);
  end if;
  if r.provider='asaas' and not exists(select 1 from private.finance_asaas_orders where id=r.sale_id and status='paid' and school_id=school and post_error is null)
    or r.provider='infinitepay' and not exists(select 1 from private.finance_ip_orders where id=r.sale_id and status='paid' and school_id=school and post_error is null) then
    raise exception 'Confira a situação da cobrança na operadora antes de destinar o pagamento.';
  end if;
  e:=jsonb_populate_record(null::public.finance_entries,r.snapshot);
  if p_action='advance' then
    start_day:=(p_data->>'start')::date;end_day:=(p_data->>'end')::date;key:=p_data->>'key';
    if not private.finance_cycle_matches_policy(school,start_day,end_day,key) or end_day<today then raise exception 'Ciclo de destino inválido.';end if;
    if start_day<=today and not exists(select 1 from private.finance_tuition_advances where school_id=school and student_id=r.student_id and cycle_start=start_day and received_at is null) then
      raise exception 'Selecione um ciclo futuro.';end if;
    insert into private.finance_tuition_advances(school_id,student_id,cycle_start,cycle_end,cycle_key)
      values(school,r.student_id,start_day,end_day,key) on conflict(school_id,student_id,cycle_start) do nothing;
    select * into strict a from private.finance_tuition_advances where school_id=school and student_id=r.student_id and cycle_start=start_day for update;
    if a.received_at is not null then raise exception 'Este ciclo já possui um adiantamento recebido.'; end if;
    update private.finance_tuition_advances set received_at=r.received_at,received_by=actor,payment_token=r.id,
      amount=e.amount_paid,payment_method=e.payment_method,payer_name=e.payer_name,payer_document=e.payer_document where id=a.id;
    update private.finance_paid_destinations set advance_id=a.id,decided_by=actor where id=r.id;
    return jsonb_build_object('advance_id',a.id);
  end if;

  select * into c from public.finance_cash_cycles where school_id=school and status='aberto' and today between start_date and end_date for share;
  if c.id is null then raise exception 'Abra o ciclo de destino antes de lançar.'; end if;
  if p_action='release' then
    select * into strict a from private.finance_tuition_advances where id=r.advance_id for update;
    if (c.start_date,c.end_date,c.cycle_key) is distinct from (a.cycle_start,a.cycle_end,a.cycle_key) then
      raise exception 'A liberação depende da abertura do ciclo de destino.'; end if;
    if exists(select 1 from public.finance_entries where cash_cycle_id=c.id and student_id=r.student_id and entry_type='mensalidade' and amount_paid>0) then
      raise exception 'Já existe uma mensalidade neste ciclo. Confira as entradas.'; end if;
    e.competence_month:=(array['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'])[extract(month from c.start_date)::int] || ' de ' || extract(year from c.start_date)::text;
    e.description:=concat_ws(' · ',e.description,'Adiantamento recebido em '||to_char(r.received_at at time zone 'America/Manaus','DD/MM/YYYY'));
  end if;
  if c.id is distinct from e.cash_cycle_id or p_action='release' then
    e.cash_cycle_id:=c.id;e.entry_date:=today;e.tuition_cycle_start:=null;e.created_at:=now();
  end if;
  perform set_config('app.finance_destination_row',r.id::text,true);
  if r.provider='asaas' then perform set_config('app.finance_asaas_order',r.sale_id::text,true);
  elsif r.provider='infinitepay' then perform set_config('app.finance_ip_order',r.sale_id::text,true);
  end if;
  insert into public.finance_entries overriding system value select (e).*;
  perform set_config('app.finance_destination_row','',true);
  if r.provider='asaas' then perform set_config('app.finance_asaas_order','',true);
  elsif r.provider='infinitepay' then perform set_config('app.finance_ip_order','',true);end if;
  update private.finance_paid_destinations set entry_id=e.id,decided_by=actor where id=r.id;
  if r.advance_id is not null then update private.finance_tuition_advances set entry_id=e.id,released_at=now(),released_by=actor where id=r.advance_id;end if;
  return jsonb_build_object('entry_id',e.id,'advance_id',r.advance_id);
end $$;
revoke all on function private.finance_paid_destination(text,jsonb) from public,anon;
grant execute on function private.finance_paid_destination(text,jsonb) to authenticated;
create function public.finance_paid_destination(p_action text,p_data jsonb default '{}') returns jsonb
language sql security invoker set search_path='' begin atomic select private.finance_paid_destination(p_action,p_data); end;
revoke all on function public.finance_paid_destination(text,jsonb) from public,anon;
grant execute on function public.finance_paid_destination(text,jsonb) to authenticated;
create or replace function public.finance_tuition_advances(p_action text,p_data jsonb default '{}') returns jsonb
language sql security invoker set search_path='' begin atomic
  select case when p_action='release' then private.finance_paid_destination('release',p_data) else private.finance_tuition_advances(p_action,p_data) end;
end;
