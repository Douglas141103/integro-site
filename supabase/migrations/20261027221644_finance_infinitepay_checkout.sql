-- Isolated checkout orders; existing manual cash flow remains intact.
create table private.finance_ip_settings (
 school_id uuid primary key references public.schools(id), enabled boolean not null default false,
 updated_by uuid references auth.users(id), updated_at timestamptz not null default now()
);
insert into private.finance_ip_settings(school_id) select id from public.schools where slug='instituto-integro';
create table private.finance_ip_orders (
 id uuid primary key default gen_random_uuid(), school_id uuid not null references public.schools(id),
 created_by uuid not null references auth.users(id), request_id uuid not null,
 sale jsonb not null, amount bigint not null check(amount between 100 and 100000000),
 status text not null default 'creating' check(status in ('creating','pending','uncertain','paid')),
 checkout_url text, transaction_nsu text unique, invoice_slug text, capture_method text,
 created_at timestamptz not null default now(), paid_at timestamptz, posted_at timestamptz,
 post_error text, unique(created_by,request_id)
);
create index finance_ip_orders_school_date on private.finance_ip_orders(school_id,created_at desc);
alter table private.finance_ip_settings enable row level security;
alter table private.finance_ip_orders enable row level security;
revoke all on private.finance_ip_settings,private.finance_ip_orders from public,anon,authenticated;
alter table public.finance_entries add column infinitepay_order_id uuid references private.finance_ip_orders(id), add column infinitepay_item_index integer;
create unique index finance_entries_ip_unique on public.finance_entries(infinitepay_order_id,infinitepay_item_index) where infinitepay_order_id is not null;

create function private.finance_ip_entry_guard() returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_op<>'INSERT' and old.infinitepay_order_id is not null then raise exception 'Recibo InfinitePay preservado para conciliação.'; end if;
 if tg_op='DELETE' then return old; end if;
 if new.infinitepay_order_id is not null and (
   current_setting('app.finance_ip_order',true) is distinct from new.infinitepay_order_id::text
   or not exists(select 1 from private.finance_ip_orders where id=new.infinitepay_order_id and status='paid' and school_id=new.school_id)
 ) then raise exception 'Pagamento precisa ser confirmado pela operadora.'; end if;
 return new;
end $$;
revoke all on function private.finance_ip_entry_guard() from public,anon,authenticated;
create trigger finance_ip_entry_guard before insert or update or delete on public.finance_entries for each row execute function private.finance_ip_entry_guard();

create function private.finance_ip_post(p_id uuid) returns boolean language plpgsql security definer set search_path='' as $$
declare o private.finance_ip_orders%rowtype; c public.finance_cash_cycles%rowtype; item jsonb; idx integer:=0; customer jsonb; day_local date;
begin
 select * into o from private.finance_ip_orders where id=p_id for update;
 if o.id is null or o.status<>'paid' then return false; end if;
 if o.posted_at is not null then return true; end if;
 begin
  day_local := (o.paid_at at time zone 'America/Manaus')::date;
  select * into c from public.finance_cash_cycles where school_id=o.school_id and day_local between start_date and end_date order by start_date desc limit 1 for share;
  perform private.assert_finance_cycle_writable(o.school_id,c.id,day_local,false);
  customer:=o.sale->'customer';
  perform set_config('app.finance_ip_order',o.id::text,true);
  for item in select value from jsonb_array_elements(o.sale->'items') loop
   idx:=idx+1;
   insert into public.finance_entries(school_id,cash_cycle_id,infinitepay_order_id,infinitepay_item_index,
    student_id,student_name_snapshot,payer_name,payer_document,package_id,package_name_snapshot,discount_id,discount_name_snapshot,
    gross_amount,discount_amount,amount_paid,payment_method,competence_month,description,entry_type,entry_date,created_by)
   values(o.school_id,c.id,o.id,idx,(customer->>'student_id')::uuid,customer->>'student_name',customer->>'payer_name',customer->>'payer_document',
    (item->>'package_id')::uuid,item->>'package_name',(item->>'discount_id')::uuid,item->>'discount_name',
    (item->>'gross')::numeric/100,(item->>'discount')::numeric/100,(item->>'amount')::numeric/100,
    case o.capture_method when 'pix' then 'Pix' else 'Cartão de crédito' end,item->>'reference',
    'InfinitePay • Pedido '||o.id::text||' • '||(item->>'description')||' • Receita bruta; taxas e liquidação sujeitas a conciliação.'||case when coalesce(o.sale->>'note','')<>'' then ' • Obs.: '||(o.sale->>'note') else '' end,
    item->>'type',day_local,o.created_by);
  end loop;
  update private.finance_ip_orders set posted_at=now(),post_error=null where id=o.id;
  perform set_config('app.finance_ip_order','',true);
  return true;
 exception when others then
  update private.finance_ip_orders set post_error=left(sqlstate||': '||sqlerrm,500) where id=o.id;
  return false;
 end;
end $$;
revoke all on function private.finance_ip_post(uuid) from public,anon,authenticated;

-- Only the authenticated Edge service can call this RPC. User IDs come from getUser(), never the request body.
create function public.finance_infinitepay_service(p_action text,p_data jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare o private.finance_ip_orders%rowtype; p public.profiles%rowtype; enabled_now boolean; sid uuid; item jsonb; c jsonb; result jsonb; new_id uuid;
begin
 if coalesce(auth.role(),'')<>'service_role' then raise exception 'Acesso negado.' using errcode='42501'; end if;
 if p_action in ('list','settings','create','get') then
  select * into p from public.profiles where id=(p_data->>'user_id')::uuid and active;
  if p.id is null or p.role::text not in ('integro_admin','diretor','coordenacao','admin') then raise exception 'Acesso financeiro não autorizado.'; end if;
  sid:=p.school_id;
  select enabled into enabled_now from private.finance_ip_settings where school_id=sid;
  if enabled_now is null then raise exception 'InfinitePay não configurada para esta unidade.'; end if;
 end if;
 if p_action='settings' then
  if p.role::text not in ('integro_admin','diretor','admin') or jsonb_typeof(p_data->'enabled')<>'boolean' then raise exception 'Apenas a direção pode alterar a integração.'; end if;
  update private.finance_ip_settings set enabled=(p_data->>'enabled')::boolean,updated_by=p.id,updated_at=now() where school_id=sid returning enabled into enabled_now;
  return jsonb_build_object('enabled',enabled_now);
 elsif p_action='list' then
  select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc),'[]') into result from (
   select id,status,amount,checkout_url,created_at,paid_at,posted_at,(post_error is not null) needs_reconciliation,sale->'customer'->>'student_name' student_name,
    sale->'customer'->>'payer_name' payer_name from private.finance_ip_orders where school_id=sid order by created_at desc limit 100
  ) t;
  return jsonb_build_object('enabled',enabled_now,'can_configure',p.role::text in ('integro_admin','diretor','admin'),'orders',result);
 elsif p_action='create' then
  -- Serialize retries and the administrator's enable/disable switch.
  perform 1 from private.finance_ip_settings where school_id=sid for update;
  select * into o from private.finance_ip_orders where created_by=p.id and request_id=(p_data->>'request_id')::uuid;
  if o.id is not null then
   if o.sale is distinct from p_data->'sale' then raise exception 'Pedido já existe com outro conteúdo.'; end if;
   return to_jsonb(o)||jsonb_build_object('created',false);
  end if;
  if not (select enabled from private.finance_ip_settings where school_id=sid) then raise exception 'Integração desativada. Use o caixa manual.'; end if;
  if (select count(*) from private.finance_ip_orders where created_by=p.id and created_at>now()-interval '1 minute')>=10 then raise exception 'Aguarde antes de gerar outra cobrança.'; end if;
  c:=p_data->'sale'->'customer';
  if nullif(c->>'student_id','') is not null and not exists(select 1 from public.students where id=(c->>'student_id')::uuid and school_id=sid) then raise exception 'Aluno de outra unidade.'; end if;
  for item in select value from jsonb_array_elements(p_data->'sale'->'items') loop
   if nullif(item->>'package_id','') is not null and not exists(select 1 from public.finance_packages where id=(item->>'package_id')::uuid and school_id=sid) then raise exception 'Pacote de outra unidade.'; end if;
   if nullif(item->>'discount_id','') is not null and not exists(select 1 from public.finance_discounts where id=(item->>'discount_id')::uuid and school_id=sid) then raise exception 'Desconto de outra unidade.'; end if;
  end loop;
  insert into private.finance_ip_orders(school_id,created_by,request_id,sale,amount) values(sid,p.id,(p_data->>'request_id')::uuid,p_data->'sale',(p_data->'sale'->>'amount')::bigint) returning * into o;
  return to_jsonb(o)||jsonb_build_object('created',true);
 elsif p_action in ('get','inspect','checkout','uncertain','settle') then
  select * into o from private.finance_ip_orders where id=(p_data->>'id')::uuid for update;
  if o.id is null or (p_action='get' and o.school_id<>sid) then raise exception 'Cobrança não encontrada.'; end if;
  if p_action='checkout' then
   update private.finance_ip_orders set checkout_url=p_data->>'url',status=case when status='paid' then 'paid' else 'pending' end where id=o.id returning * into o;
  elsif p_action='uncertain' then
   update private.finance_ip_orders set status='uncertain' where id=o.id and status='creating' returning * into o;
  elsif p_action='settle' then
   if p_data->>'paid' is distinct from 'true' or (p_data->>'amount')::bigint<>o.amount or coalesce(p_data->>'capture_method','') not in ('pix','credit_card') or nullif(p_data->>'transaction_nsu','') is null then raise exception 'Pagamento divergente.'; end if;
   if o.status='paid' and o.transaction_nsu is distinct from p_data->>'transaction_nsu' then raise exception 'Outro pagamento para a mesma cobrança: conciliação necessária.'; end if;
   if o.status<>'paid' then
    update private.finance_ip_orders set status='paid',paid_at=now(),transaction_nsu=p_data->>'transaction_nsu',invoice_slug=p_data->>'invoice_slug',capture_method=p_data->>'capture_method' where id=o.id;
   end if;
   perform private.finance_ip_post(o.id);
   select * into o from private.finance_ip_orders where id=o.id;
   return jsonb_build_object('paid',true,'posted',o.posted_at is not null,'order_id',o.id);
  end if;
  return to_jsonb(o);
 end if;
 raise exception 'Ação inválida.';
end $$;
revoke all on function public.finance_infinitepay_service(text,jsonb) from public,anon,authenticated;
grant execute on function public.finance_infinitepay_service(text,jsonb) to service_role;

create function private.finance_ip_retry() returns void language plpgsql security definer set search_path='' as $$
declare o record;
begin
 for o in select id from private.finance_ip_orders where status='paid' and posted_at is null and paid_at>now()-interval '40 days' order by paid_at limit 100 for update skip locked loop
  perform private.finance_ip_post(o.id);
 end loop;
end $$;
revoke all on function private.finance_ip_retry() from public,anon,authenticated;
select cron.schedule('finance-infinitepay-retry','*/5 * * * *','select private.finance_ip_retry();');
