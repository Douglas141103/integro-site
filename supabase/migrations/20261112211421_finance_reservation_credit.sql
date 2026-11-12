-- Reservation is cash received now, credited once against the first tuition.
-- No existing receipt or student is changed by this migration.
alter table public.finance_packages add column is_reservation boolean not null default false;
alter table public.finance_discounts add column is_reservation_credit boolean not null default false;
create unique index finance_reservation_package_school on public.finance_packages(school_id) where is_reservation;
create unique index finance_reservation_discount_school on public.finance_discounts(school_id) where is_reservation_credit;
insert into public.finance_packages(school_id,name,description,default_amount,is_reservation)
 select id,'RESERVA / PRÉ-MATRÍCULA 2027','Reserva de R$ 50,00. Após o pagamento e a ativação do aluno, o valor será abatido uma única vez da primeira mensalidade.',50,true
 from public.schools where slug='instituto-integro';
insert into public.finance_discounts(school_id,name,discount_type,value,description,is_reservation_credit)
 select id,'Crédito da reserva / pré-matrícula','valor',50,'Aplicado automaticamente após o pagamento da reserva e a ativação do aluno. Uso único.',true
 from public.schools where slug='instituto-integro';

create table private.finance_reservation_credits (
 id uuid primary key default gen_random_uuid(),
 school_id uuid not null references public.schools(id),
 student_id uuid not null references public.students(id),
 source_entry_id uuid not null unique references public.finance_entries(id),
 amount numeric(12,2) not null check(amount=50),
 created_at timestamptz not null default now(),
 hold_provider text check(hold_provider in ('manual','asaas','infinitepay')),
 hold_id uuid, hold_user_id uuid references public.profiles(id),
 used_entry_id uuid unique references public.finance_entries(id), used_at timestamptz,
 unique(school_id,student_id),
 check((hold_provider is null)=(hold_id is null))
);
alter table private.finance_reservation_credits enable row level security;
revoke all on private.finance_reservation_credits from public,anon,authenticated;

-- Internal helpers are not exposed through the Data API and cannot be called
-- by browser roles. Entrypoints check the authenticated school/financial role.
create function private.finance_reservation_source_valid(p_source uuid) returns boolean
language sql stable security definer set search_path='' as $$
 select exists(select 1 from public.finance_entries e
 left join private.finance_asaas_orders a on a.id=e.asaas_order_id
 left join private.finance_ip_orders i on i.id=e.infinitepay_order_id
 where e.id=p_source and e.amount_paid=50
 and (e.asaas_order_id is null or a.status='paid')
 and (e.infinitepay_order_id is null or i.status='paid'))
$$;
revoke all on function private.finance_reservation_source_valid(uuid) from public,anon,authenticated;

create function private.finance_reservation_claim(p_school uuid,p_student uuid,p_provider text,p_hold uuid,p_user uuid) returns uuid
language plpgsql security definer set search_path='' as $$
declare c private.finance_reservation_credits%rowtype;
begin
 select * into c from private.finance_reservation_credits where school_id=p_school and student_id=p_student for update;
 if c.id is null or c.used_entry_id is not null or not private.finance_reservation_source_valid(c.source_entry_id) then
  raise exception 'Reserva paga não disponível para este aluno.';
 end if;
 if not exists(select 1 from public.students where id=p_student and school_id=p_school and active and enrollment_status='matriculado') then
  raise exception 'Ative a matrícula do aluno antes de usar o crédito da reserva.';
 end if;
 if exists(select 1 from public.finance_entries e where e.school_id=p_school and e.student_id=p_student and e.entry_type='mensalidade' and e.created_at>=c.created_at) then
  raise exception 'A primeira mensalidade após a reserva já foi registrada. Confira com a direção.';
 end if;
 if c.hold_id is not null and (c.hold_id is distinct from p_hold or c.hold_provider is distinct from p_provider) then
  raise exception 'Crédito da reserva vinculado a outra cobrança. Confira antes de receber novamente.';
 end if;
 update private.finance_reservation_credits set hold_provider=p_provider,hold_id=p_hold,hold_user_id=p_user where id=c.id;
 return c.id;
end $$;
revoke all on function private.finance_reservation_claim(uuid,uuid,text,uuid,uuid) from public,anon,authenticated;

create function private.finance_reservation_credit(p_student_id uuid,p_action text default 'quote',p_sale_id uuid default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare s public.students%rowtype; c private.finance_reservation_credits%rowtype; discount uuid;
begin
 select * into s from public.students where id=p_student_id;
 if auth.uid() is null or s.id is null or not exists(select 1 from public.profiles p where p.id=auth.uid() and p.active and p.school_id=s.school_id and p.role::text in ('diretor','integro_admin','admin','coordenacao')) then
  raise exception 'Acesso financeiro não autorizado.' using errcode='42501';
 end if;
 if p_action='hold' then
  if p_sale_id is null then raise exception 'Venda inválida.'; end if;
  perform private.finance_reservation_claim(s.school_id,s.id,'manual',p_sale_id,auth.uid());
 elsif p_action='release' then
  update private.finance_reservation_credits set hold_provider=null,hold_id=null,hold_user_id=null
   where school_id=s.school_id and student_id=s.id and hold_provider='manual' and hold_id=p_sale_id and hold_user_id=auth.uid() and used_entry_id is null;
 elsif p_action<>'quote' then raise exception 'Ação inválida.';
 end if;
 select * into c from private.finance_reservation_credits where school_id=s.school_id and student_id=s.id;
 select id into discount from public.finance_discounts where school_id=s.school_id and is_reservation_credit;
 return jsonb_build_object('amount',case when c.used_entry_id is null and private.finance_reservation_source_valid(c.source_entry_id) then c.amount else 0 end,
  'discount_id',discount,'ready',s.active and s.enrollment_status='matriculado' and c.used_entry_id is null and private.finance_reservation_source_valid(c.source_entry_id),
  'held',c.hold_id is not null,'used',c.used_entry_id is not null,
  'manual_hold_id',case when c.hold_provider='manual' and c.hold_user_id=auth.uid() and c.used_entry_id is null then c.hold_id else null end);
end $$;
revoke all on function private.finance_reservation_credit(uuid,text,uuid) from public,anon;
grant execute on function private.finance_reservation_credit(uuid,text,uuid) to authenticated;
-- Parsed SQL body binds only this vetted helper; no private schema/table access
-- is granted to the browser role.
create function public.finance_reservation_credit(p_student_id uuid,p_action text default 'quote',p_sale_id uuid default null) returns jsonb
language sql security invoker set search_path='' begin atomic
 select private.finance_reservation_credit(p_student_id,p_action,p_sale_id);
end;
revoke all on function public.finance_reservation_credit(uuid,text,uuid) from public,anon;
grant execute on function public.finance_reservation_credit(uuid,text,uuid) to authenticated;

-- Validate/claim before the provider sees the amount. Holds are deliberately
-- retained for uncertain/expired orders, which may still settle late.
create function private.finance_reservation_order_guard() returns trigger
language plpgsql security definer set search_path='' as $$
declare item jsonb; sid uuid; is_reserve boolean; is_credit boolean; credit_count integer:=0; reserve_count integer:=0; provider text;
begin
 provider:=case when tg_table_name='finance_asaas_orders' then 'asaas' else 'infinitepay' end;
 if tg_op='UPDATE' then
  if new.status='rejected' and new.posted_at is null then
   update private.finance_reservation_credits set hold_provider=null,hold_id=null,hold_user_id=null where hold_provider=provider and hold_id=new.id and used_entry_id is null;
  end if;
  return new;
 end if;
 sid:=nullif(new.sale->'customer'->>'student_id','')::uuid;
 for item in select value from jsonb_array_elements(new.sale->'items') loop
  select coalesce(bool_or(is_reservation),false) into is_reserve from public.finance_packages where id=nullif(item->>'package_id','')::uuid;
  select coalesce(bool_or(is_reservation_credit),false) into is_credit from public.finance_discounts where id=nullif(item->>'discount_id','')::uuid;
  if is_reserve then
   reserve_count:=reserve_count+1;
   if sid is null or not exists(select 1 from public.students where id=sid and school_id=new.school_id and enrollment_status='pre_matricula') then raise exception 'Selecione um aluno cadastrado como pré-matrícula para pagar a reserva.'; end if;
   if item->>'type'<>'servico' or (item->>'qty')::int<>1 or (item->>'gross')::numeric<>5000 or (item->>'amount')::numeric<>5000 or (item->>'discount')::numeric<>0 then raise exception 'A reserva deve ser uma cobrança única de R$ 50,00, sem desconto.'; end if;
   perform 1 from public.students where id=sid for update;
   if exists(select 1 from private.finance_reservation_credits where student_id=sid) then raise exception 'Este aluno já pagou a reserva.'; end if;
   if exists(select 1 from private.finance_asaas_orders o where o.sale->'customer'->>'student_id'=sid::text and o.status not in ('rejected','refunded','canceled','expired') and exists(select 1 from jsonb_array_elements(o.sale->'items') x where x->>'package_id'=item->>'package_id'))
    or exists(select 1 from private.finance_ip_orders o where o.sale->'customer'->>'student_id'=sid::text and exists(select 1 from jsonb_array_elements(o.sale->'items') x where x->>'package_id'=item->>'package_id')) then raise exception 'Já existe cobrança de reserva para este aluno. Confira a cobrança pendente.'; end if;
  end if;
  if is_credit then
   credit_count:=credit_count+1;
   if is_reserve or item->>'type'<>'mensalidade' or (item->>'qty')::int<>1 or (item->>'discount')::numeric<5000 or (item->>'gross')::numeric-(item->>'discount')::numeric<>(item->>'amount')::numeric then raise exception 'Crédito de reserva inválido.'; end if;
   perform private.finance_reservation_claim(new.school_id,sid,provider,new.id,new.created_by);
  elsif item->>'type'='mensalidade' and exists(select 1 from private.finance_reservation_credits rc where rc.student_id=sid and rc.used_entry_id is null and private.finance_reservation_source_valid(rc.source_entry_id)) then
   raise exception 'Atualize o caixa para aplicar o crédito da reserva à primeira mensalidade.';
  end if;
 end loop;
 if credit_count>1 or reserve_count>1 then raise exception 'Use a reserva uma única vez por venda.'; end if;
 return new;
end $$;
revoke all on function private.finance_reservation_order_guard() from public,anon,authenticated;
create trigger finance_reservation_order_guard before insert or update of status on private.finance_asaas_orders for each row execute function private.finance_reservation_order_guard();
create trigger finance_reservation_order_guard before insert on private.finance_ip_orders for each row execute function private.finance_reservation_order_guard();

create function private.finance_reservation_entry_guard() returns trigger
language plpgsql security definer set search_path='' as $$
declare is_reserve boolean; is_credit boolean; c private.finance_reservation_credits%rowtype; provider text; hold uuid;
begin
 if tg_op<>'INSERT' then
  if exists(select 1 from private.finance_reservation_credits where source_entry_id=old.id or used_entry_id=old.id) then raise exception 'Recibo vinculado ao crédito da reserva. É necessária conciliação pela direção.'; end if;
  if tg_op='DELETE' then return old; end if;
 end if;
 select coalesce(bool_or(is_reservation),false) into is_reserve from public.finance_packages where id=new.package_id and school_id=new.school_id;
 select coalesce(bool_or(is_reservation_credit),false) into is_credit from public.finance_discounts where id=new.discount_id and school_id=new.school_id;
 if tg_op='UPDATE' and (is_reserve or is_credit) then raise exception 'Registre a reserva ou o crédito em um novo recebimento.'; end if;
 if is_reserve then
  perform 1 from public.students where id=new.student_id and school_id=new.school_id for update;
  if not found or (new.asaas_order_id is null and new.infinitepay_order_id is null and not exists(select 1 from public.students where id=new.student_id and enrollment_status='pre_matricula')) then raise exception 'Selecione um aluno cadastrado como pré-matrícula para pagar a reserva.'; end if;
  if new.gross_amount<>50 or new.amount_paid<>50 or new.discount_amount<>0 or is_credit then raise exception 'A reserva deve ser de R$ 50,00, sem desconto.'; end if;
  if exists(select 1 from private.finance_reservation_credits where student_id=new.student_id) then raise exception 'Este aluno já pagou a reserva.'; end if;
  new.entry_type:='servico'; new.tuition_cycle_start:=null;
 elsif is_credit then
  provider:=case when new.asaas_order_id is not null then 'asaas' when new.infinitepay_order_id is not null then 'infinitepay' else 'manual' end;
  hold:=coalesce(new.asaas_order_id,new.infinitepay_order_id,new.pos_sale_id);
  if hold is null or new.entry_type<>'mensalidade' or new.discount_amount<50 or new.gross_amount-new.discount_amount<>new.amount_paid then raise exception 'Crédito de reserva inválido.'; end if;
  select * into c from private.finance_reservation_credits where school_id=new.school_id and student_id=new.student_id for update;
  if c.hold_provider is distinct from provider or c.hold_id is distinct from hold then raise exception 'Confirme o crédito da reserva no caixa antes de receber.'; end if;
  perform private.finance_reservation_claim(new.school_id,new.student_id,provider,hold,new.created_by);
  new.discount_name_snapshot:=concat_ws(' + ',nullif(new.discount_name_snapshot,''),'Abatimento da reserva: R$ 50,00');
 elsif new.entry_type='mensalidade' and exists(select 1 from private.finance_reservation_credits rc where rc.student_id=new.student_id and rc.used_entry_id is null and private.finance_reservation_source_valid(rc.source_entry_id)) then
  raise exception 'Atualize o caixa para aplicar o crédito da reserva à primeira mensalidade.';
 end if;
 return new;
end $$;
revoke all on function private.finance_reservation_entry_guard() from public,anon,authenticated;
create trigger finance_00_reservation_entry_guard before insert or update or delete on public.finance_entries for each row execute function private.finance_reservation_entry_guard();

create function private.finance_reservation_entry_post() returns trigger
language plpgsql security definer set search_path='' as $$
begin
 if exists(select 1 from public.finance_packages where id=new.package_id and school_id=new.school_id and is_reservation) then
  insert into private.finance_reservation_credits(school_id,student_id,source_entry_id,amount) values(new.school_id,new.student_id,new.id,50);
 elsif exists(select 1 from public.finance_discounts where id=new.discount_id and school_id=new.school_id and is_reservation_credit) then
  update private.finance_reservation_credits set used_entry_id=new.id,used_at=now() where school_id=new.school_id and student_id=new.student_id and used_entry_id is null;
 end if;
 return new;
end $$;
revoke all on function private.finance_reservation_entry_post() from public,anon,authenticated;
create trigger finance_reservation_entry_post after insert on public.finance_entries for each row execute function private.finance_reservation_entry_post();
