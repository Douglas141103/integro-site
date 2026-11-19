create table private.finance_tuition_advances (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id),
  student_id uuid not null references public.students(id),
  cycle_start date not null, cycle_end date not null, cycle_key text not null,
  requested_by_name text,
  created_at timestamptz not null default now(),
  received_at timestamptz, received_by uuid references public.profiles(id),
  payment_token uuid unique, amount numeric(12,2) check (amount > 0),
  payment_method text, payer_name text, payer_document text,
  reservation_discount uuid references public.finance_discounts(id),
  released_at timestamptz, released_by uuid references public.profiles(id),
  entry_id uuid unique references public.finance_entries(id),
  unique (school_id, student_id, cycle_start),
  check ((received_at is null and amount is null and payment_token is null)
      or (received_at is not null and amount is not null and payment_token is not null and
          received_by is not null and payment_method is not null and payer_name is not null and payer_document is not null)),
  check ((entry_id is null) = (released_at is null)),
  check (entry_id is null or received_at is not null)
);
alter table private.finance_tuition_advances enable row level security;
revoke all on private.finance_tuition_advances from public, anon, authenticated;

create function private.finance_tuition_advances(p_action text, p_data jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare
  school uuid; actor uuid := auth.uid(); today date := (now() at time zone 'America/Manaus')::date;
  a private.finance_tuition_advances%rowtype; student public.students%rowtype;
  cycle public.finance_cash_cycles%rowtype; discount uuid; credit jsonb;
  net numeric; result jsonb; new_entry uuid; target date; target_end date; target_key text;
begin
  select school_id into school from public.profiles
  where id=actor and active and role::text in ('diretor','coordenacao','integro_admin');
  if school is null then raise exception 'Acesso financeiro não autorizado.' using errcode='42501'; end if;

  if p_action='list' then
    select coalesce(jsonb_agg(jsonb_build_object(
      'id',x.id,'student_id',x.student_id,'student_name',s.full_name,
      'payer',coalesce(x.payer_name,x.requested_by_name),'start',x.cycle_start,'end',x.cycle_end,'key',x.cycle_key,
      'amount',x.amount,'method',x.payment_method,'received',x.received_at,'released',x.released_at,
      'receipt',e.receipt_number,'can_release',x.received_at is not null and x.entry_id is null
        and today between x.cycle_start and x.cycle_end and c.status is not distinct from 'aberto')
      order by x.cycle_start,s.full_name), '[]'::jsonb) into result
    from private.finance_tuition_advances x join public.students s on s.id=x.student_id
    left join public.finance_cash_cycles c on c.school_id=x.school_id and c.cycle_key=x.cycle_key
      and c.start_date=x.cycle_start and c.end_date=x.cycle_end
    left join public.finance_entries e on e.id=x.entry_id
    where x.school_id=school and (p_data->>'student' is null or x.student_id=(p_data->>'student')::uuid);
    return result;
  end if;

  if p_action='receive' then
    select * into student from public.students where id=(p_data->>'student')::uuid and school_id=school for update;
    if not found then raise exception 'Selecione um aluno da escola.'; end if;
    target := (p_data->>'start')::date; target_end := (p_data->>'end')::date; target_key := p_data->>'key';
    if not private.finance_cycle_matches_policy(school,target,target_end,target_key) then
      raise exception 'O período escolhido não corresponde ao calendário financeiro.';
    end if;
    select * into a from private.finance_tuition_advances where school_id=school and student_id=student.id and cycle_start=target for update;
    if a.received_at is not null then
      if a.payment_token=(p_data->>'token')::uuid then return jsonb_build_object('id',a.id); end if;
      raise exception 'Esta mensalidade já foi recebida. Consulte Adiantamentos.';
    end if;
    if target<=today and (a.id is null or today>target_end) then raise exception 'Escolha um ciclo futuro.'; end if;
    if exists(select 1 from public.finance_entries e join public.finance_cash_cycles c on c.id=e.cash_cycle_id
      where e.school_id=school and e.student_id=student.id and c.start_date=target and e.entry_type='mensalidade' and e.amount_paid>0) then
      raise exception 'A mensalidade deste ciclo já tem um recebimento. Confira as entradas.';
    end if;
    net := (p_data->>'amount')::numeric;
    if net is null or not (net > 0 and net <= 9999999999.99 and net=round(net,2))
      or nullif(btrim(p_data->>'payer'),'') is null or nullif(btrim(p_data->>'document'),'') is null
      or p_data->>'method' is null or p_data->>'method' not in ('Dinheiro','Pix','Cartão de crédito','Cartão de débito')
      or p_data->>'token' is null then raise exception 'Confira o pagador, o valor e a forma de pagamento.'; end if;
    if a.id is null then
      insert into private.finance_tuition_advances(school_id,student_id,cycle_start,cycle_end,cycle_key)
      values(school,student.id,target,target_end,target_key) returning * into a;
    end if;
    credit := private.finance_reservation_credit(student.id,'quote',null);
    if (credit->>'amount')::numeric is distinct from coalesce((p_data->>'credit')::numeric,0) then
      raise exception 'O crédito de reserva mudou. Feche e confira o valor antes de confirmar.';
    end if;
    if (credit->>'amount')::numeric>0 then
      perform private.finance_reservation_claim(school,student.id,'manual',a.id,actor);
      discount := (credit->>'discount_id')::uuid;
      if discount is null then raise exception 'Desconto da reserva indisponível.'; end if;
    end if;
    update private.finance_tuition_advances set received_at=now(), received_by=actor, payment_token=(p_data->>'token')::uuid,
      amount=net,payment_method=p_data->>'method',payer_name=btrim(p_data->>'payer'),payer_document=btrim(p_data->>'document'),
      reservation_discount=discount where id=a.id;
    return jsonb_build_object('id',a.id);
  end if;

  if p_action='release' then
    select * into a from private.finance_tuition_advances where id=(p_data->>'id')::uuid and school_id=school for update;
    if not found or a.received_at is null then raise exception 'O recebimento ainda não foi confirmado no caixa.'; end if;
    if a.entry_id is not null then return jsonb_build_object('entry',a.entry_id); end if;
    select * into cycle from public.finance_cash_cycles where school_id=school and cycle_key=a.cycle_key
      and start_date=a.cycle_start and end_date=a.cycle_end and status='aberto' and today between start_date and end_date for share;
    if not found then raise exception 'A liberação depende da abertura do ciclo de destino.'; end if;
    select * into student from public.students where id=a.student_id and school_id=school for update;
    if exists(select 1 from public.finance_entries where school_id=school and student_id=a.student_id
      and entry_type='mensalidade' and amount_paid>0 and cash_cycle_id=cycle.id) then
      raise exception 'Já existe uma mensalidade neste ciclo. Confira as entradas antes de liberar.';
    end if;
    insert into public.finance_entries(school_id,student_id,student_name_snapshot,payer_name,payer_document,
      cash_cycle_id,entry_date,entry_type,gross_amount,discount_id,discount_amount,amount_paid,payment_method,
      pos_sale_id,pos_item_index,competence_month,description,created_by)
    values(school,a.student_id,student.full_name,a.payer_name,a.payer_document,cycle.id,today,'mensalidade',
      a.amount+case when a.reservation_discount is null then 0 else 50 end,a.reservation_discount,
      case when a.reservation_discount is null then 0 else 50 end,a.amount,a.payment_method,a.id,1,
      (array['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'])[extract(month from a.cycle_start)::int] || ' de ' || extract(year from a.cycle_start)::text,
      'Mensalidade adiantada em '||to_char(a.received_at at time zone 'America/Manaus','DD/MM/YYYY')||' e liberada no ciclo '||a.cycle_key,actor)
    returning id into new_entry;
    update private.finance_tuition_advances set entry_id=new_entry,released_at=now(),released_by=actor where id=a.id;
    return jsonb_build_object('entry',new_entry);
  end if;
  raise exception 'Operação desconhecida.';
end $$;
revoke all on function private.finance_tuition_advances(text,jsonb) from public,anon;
grant execute on function private.finance_tuition_advances(text,jsonb) to authenticated;
create function public.finance_tuition_advances(p_action text,p_data jsonb default '{}') returns jsonb
language sql security invoker set search_path='' begin atomic
  select private.finance_tuition_advances(p_action,p_data);
end;
revoke all on function public.finance_tuition_advances(text,jsonb) from public,anon;
grant execute on function public.finance_tuition_advances(text,jsonb) to authenticated;
