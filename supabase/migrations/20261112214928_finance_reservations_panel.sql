-- Read-only, school-scoped financial register. No receipts or balances are changed.
create function private.finance_reservations_list() returns jsonb
language plpgsql stable security definer set search_path='' as $$
declare school uuid; result jsonb;
begin
 select p.school_id into school from public.profiles p
 where p.id=auth.uid() and p.active and p.role::text in ('diretor','integro_admin','admin','coordenacao');
 if school is null then raise exception 'Acesso financeiro não autorizado.' using errcode='42501'; end if;
 with orders as (
  select a.id,a.school_id,a.sale,a.status,a.created_at,a.posted_at,'Asaas'::text provider
  from private.finance_asaas_orders a where a.school_id=school
  union all
  select i.id,i.school_id,i.sale,i.status,i.created_at,i.posted_at,'InfinitePay'::text
  from private.finance_ip_orders i where i.school_id=school
 ), reservation_orders as (
  select o.* from orders o where exists (
   select 1 from jsonb_array_elements(o.sale->'items') item
   join public.finance_packages p on p.id::text=item->>'package_id' and p.school_id=school and p.is_reservation
  )
 ), records as (
  select s.id student_id,s.full_name student_name,s.guardian_1_name guardian_name,
   s.active,s.enrollment_status,s.reserved_at,
   coalesce(c.created_at,s.reserved_at,s.created_at) registered_at,
   coalesce(c.amount,0) credit_amount,
   c.id is not null and private.finance_reservation_source_valid(c.source_entry_id) payment_valid,
   case
    when c.id is not null and not private.finance_reservation_source_valid(c.source_entry_id) then 'conciliacao'
    when c.used_entry_id is not null then 'credito_utilizado'
    when c.id is null and o.status='paid' then 'conciliacao'
    when c.id is null then 'aguardando_pagamento'
    when c.hold_id is not null then 'credito_vinculado'
    when s.enrollment_status='pre_matricula' then 'aguardando_ativacao'
    when not s.active or s.enrollment_status is distinct from 'matriculado' then 'conciliacao'
    when exists(select 1 from public.finance_entries m where m.school_id=school and m.student_id=s.id
      and m.entry_type='mensalidade' and m.created_at>=c.created_at) then 'conciliacao'
    else 'credito_disponivel'
   end status,
   e.receipt_number reserve_receipt,e.entry_date paid_date,e.payment_method,
   u.receipt_number tuition_receipt,u.entry_date used_date,u.competence_month,u.amount_paid tuition_paid,
   c.hold_provider,
   o.provider charge_provider,o.status charge_status,o.created_at charge_created_at
  from public.students s
  left join private.finance_reservation_credits c on c.student_id=s.id and c.school_id=school
  left join public.finance_entries e on e.id=c.source_entry_id and e.school_id=school
  left join public.finance_entries u on u.id=c.used_entry_id and u.school_id=school
  left join lateral (select ro.* from reservation_orders ro where ro.sale->'customer'->>'student_id'=s.id::text
    order by ro.created_at desc,ro.id desc limit 1) o on true
  where s.school_id=school and (s.enrollment_status='pre_matricula' or c.id is not null or o.id is not null)
 ) select coalesce(jsonb_agg(to_jsonb(r) order by registered_at desc nulls last,student_name,student_id),'[]'::jsonb)
 into result from records r;
 return result;
end $$;
revoke all on function private.finance_reservations_list() from public,anon;
grant execute on function private.finance_reservations_list() to authenticated;
create function public.finance_reservations_list() returns jsonb
language sql security invoker set search_path='' begin atomic
 select private.finance_reservations_list();
end;
revoke all on function public.finance_reservations_list() from public,anon;
grant execute on function public.finance_reservations_list() to authenticated;
