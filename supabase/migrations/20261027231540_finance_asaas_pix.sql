-- Optional Asaas Pix. Secrets stay encrypted in Vault; only the Edge service can read them.
create table private.finance_asaas_settings (
 school_id uuid primary key references public.schools(id), enabled boolean not null default false,
 api_secret_id uuid references vault.secrets(id), hook_secret_id uuid references vault.secrets(id),
 account_id uuid, account_name text, document_masked text, webhook_id text,
 connect_lease uuid, connect_until timestamptz,
 updated_by uuid references auth.users(id), updated_at timestamptz not null default now()
);
insert into private.finance_asaas_settings(school_id) select id from public.schools where slug='instituto-integro';
create table private.finance_asaas_orders (
 id uuid primary key default gen_random_uuid(), school_id uuid not null references public.schools(id),
 created_by uuid not null references auth.users(id), request_id uuid not null,
 sale jsonb not null, amount bigint not null check(amount between 100 and 100000000), due_date date not null,
 status text not null default 'creating' check(status in ('creating','pending','uncertain','paid','canceled','refunded')),
 customer_id text, payment_id text unique,
 created_at timestamptz not null default now(), payment_date date, paid_at timestamptz, posted_at timestamptz,
 checked_at timestamptz, post_error text, unique(created_by,request_id)
);
create index finance_asaas_orders_school_date on private.finance_asaas_orders(school_id,created_at desc);
create index finance_asaas_orders_creator on private.finance_asaas_orders(created_by);
create index finance_asaas_settings_api_secret on private.finance_asaas_settings(api_secret_id);
create index finance_asaas_settings_hook_secret on private.finance_asaas_settings(hook_secret_id);
create index finance_asaas_settings_updated_by on private.finance_asaas_settings(updated_by);
alter table private.finance_asaas_settings enable row level security;
alter table private.finance_asaas_orders enable row level security;
revoke all on private.finance_asaas_settings,private.finance_asaas_orders from public,anon,authenticated;
alter table public.finance_entries add column asaas_order_id uuid references private.finance_asaas_orders(id), add column asaas_item_index integer;
create unique index finance_entries_asaas_unique on public.finance_entries(asaas_order_id,asaas_item_index) where asaas_order_id is not null;

create function private.finance_asaas_entry_guard() returns trigger language plpgsql security definer set search_path='' as $$
begin
 if tg_op<>'INSERT' and old.asaas_order_id is not null then raise exception 'Recibo Asaas preservado para conciliação.'; end if;
 if tg_op='DELETE' then return old; end if;
 if new.asaas_order_id is not null and (
  current_setting('app.finance_asaas_order',true) is distinct from new.asaas_order_id::text
  or not exists(select 1 from private.finance_asaas_orders where id=new.asaas_order_id and status='paid' and school_id=new.school_id)
 ) then raise exception 'Pagamento precisa ser confirmado pelo Asaas.'; end if;
 return new;
end $$;
revoke all on function private.finance_asaas_entry_guard() from public,anon,authenticated;
create trigger finance_asaas_entry_guard before insert or update or delete on public.finance_entries for each row execute function private.finance_asaas_entry_guard();

create function private.finance_asaas_post(p_id uuid) returns boolean language plpgsql security definer set search_path='' as $$
declare o private.finance_asaas_orders%rowtype; c public.finance_cash_cycles%rowtype; item jsonb; idx integer:=0; customer jsonb;
begin
 select * into o from private.finance_asaas_orders where id=p_id for update;
 if o.id is null or o.status<>'paid' or o.payment_date is null then return false; end if;
 if o.posted_at is not null then return true; end if;
 begin
  select * into c from public.finance_cash_cycles where school_id=o.school_id and o.payment_date between start_date and end_date order by start_date desc limit 1 for share;
  perform private.assert_finance_cycle_writable(o.school_id,c.id,o.payment_date,false);
  customer:=o.sale->'customer';
  perform set_config('app.finance_asaas_order',o.id::text,true);
  for item in select value from jsonb_array_elements(o.sale->'items') loop
   idx:=idx+1;
   insert into public.finance_entries(school_id,cash_cycle_id,asaas_order_id,asaas_item_index,
    student_id,student_name_snapshot,payer_name,payer_document,package_id,package_name_snapshot,discount_id,discount_name_snapshot,
    gross_amount,discount_amount,amount_paid,payment_method,competence_month,description,entry_type,entry_date,created_by)
   values(o.school_id,c.id,o.id,idx,(customer->>'student_id')::uuid,customer->>'student_name',customer->>'payer_name',customer->>'payer_document',
    (item->>'package_id')::uuid,item->>'package_name',(item->>'discount_id')::uuid,item->>'discount_name',
    (item->>'gross')::numeric/100,(item->>'discount')::numeric/100,(item->>'amount')::numeric/100,'Pix',item->>'reference',
    'Asaas Pix • Pedido '||o.id::text||' • '||(item->>'description')||' • Receita bruta; tarifas sujeitas a conciliação.'||case when coalesce(o.sale->>'note','')<>'' then ' • Obs.: '||(o.sale->>'note') else '' end,
    item->>'type',o.payment_date,o.created_by);
  end loop;
  update private.finance_asaas_orders set posted_at=now(),post_error=null where id=o.id;
  perform set_config('app.finance_asaas_order','',true);
  return true;
 exception when others then
  update private.finance_asaas_orders set post_error=left(sqlstate||': '||sqlerrm,500) where id=o.id;
  return false;
 end;
end $$;
revoke all on function private.finance_asaas_post(uuid) from public,anon,authenticated;

create function public.finance_asaas_service(p_action text,p_data jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare o private.finance_asaas_orders%rowtype; p public.profiles%rowtype; s private.finance_asaas_settings%rowtype; sid uuid; item jsonb; c jsonb; result jsonb; secret_api text; secret_hook text;
begin
 if coalesce(auth.role(),'')<>'service_role' then raise exception 'Acesso negado.' using errcode='42501'; end if;
 if p_action in ('authorize','list','settings','create','get','connect_lock','connect_save','connect_unlock') then
  select * into p from public.profiles where id=(p_data->>'user_id')::uuid and active;
  if p.id is null or p.role::text not in ('integro_admin','diretor','coordenacao','admin') then raise exception 'Acesso financeiro não autorizado.'; end if;
  sid:=p.school_id;
  select * into s from private.finance_asaas_settings where school_id=sid;
  if s.school_id is null then raise exception 'Asaas não configurado para esta unidade.'; end if;
 end if;
 if p_action in ('settings','connect_lock','connect_save','connect_unlock') and p.role::text not in ('integro_admin','diretor','admin') then raise exception 'Apenas a direção pode configurar o Asaas.'; end if;
 if p_action='authorize' then
  return jsonb_build_object('school_id',sid,'can_configure',p.role::text in ('integro_admin','diretor','admin'));
 elsif p_action='connect_lock' then
  select * into s from private.finance_asaas_settings where school_id=sid for update;
  if s.connect_until>now() then raise exception 'Conexão em andamento. Aguarde dois minutos antes de tentar novamente.'; end if;
  update private.finance_asaas_settings set connect_lease=gen_random_uuid(),connect_until=now()+interval '2 minutes' where school_id=sid returning * into s;
  return jsonb_build_object('lease',s.connect_lease);
 elsif p_action='connect_unlock' then
  update private.finance_asaas_settings set connect_until=null,connect_lease=null where school_id=sid and connect_lease=(p_data->>'lease')::uuid;
  return '{}'::jsonb;
 elsif p_action='connect_save' then
  select * into s from private.finance_asaas_settings where school_id=sid for update;
  if s.connect_lease is distinct from (p_data->>'lease')::uuid or s.connect_until<now() then raise exception 'Conexão expirou. Tente novamente.'; end if;
  if s.account_id is not null and s.account_id is distinct from (p_data->>'account_id')::uuid then raise exception 'Use uma chave da mesma conta já vinculada. A troca de titular exige conciliar as cobranças anteriores.'; end if;
  if length(p_data->>'api_key') not between 20 and 1000 or length(p_data->>'hook_token') not between 32 and 255 or nullif(p_data->>'webhook_id','') is null then raise exception 'Conexão incompleta.'; end if;
  if s.api_secret_id is null then s.api_secret_id:=vault.create_secret(p_data->>'api_key','finance_asaas_api_'||sid::text); else perform vault.update_secret(s.api_secret_id,p_data->>'api_key'); end if;
  if s.hook_secret_id is null then s.hook_secret_id:=vault.create_secret(p_data->>'hook_token','finance_asaas_hook_'||sid::text); end if;
  update private.finance_asaas_settings set api_secret_id=s.api_secret_id,hook_secret_id=s.hook_secret_id,account_id=(p_data->>'account_id')::uuid,
   account_name=left(p_data->>'account_name',200),document_masked=left(p_data->>'document_masked',30),webhook_id=p_data->>'webhook_id',
   connect_lease=null,connect_until=null,updated_by=p.id,updated_at=now() where school_id=sid;
  return jsonb_build_object('connected',true);
 elsif p_action='credentials' then
  select * into s from private.finance_asaas_settings where school_id=(p_data->>'school_id')::uuid;
  if s.school_id is null then raise exception 'Unidade não encontrada.'; end if;
  select decrypted_secret into secret_api from vault.decrypted_secrets where id=s.api_secret_id;
  select decrypted_secret into secret_hook from vault.decrypted_secrets where id=s.hook_secret_id;
  return jsonb_build_object('api_key',secret_api,'hook_token',secret_hook,'account_id',s.account_id,'webhook_id',s.webhook_id,'enabled',s.enabled);
 elsif p_action='settings' then
  if jsonb_typeof(p_data->'enabled') is distinct from 'boolean' then raise exception 'Configuração inválida.'; end if;
  if (p_data->>'enabled')::boolean and (s.api_secret_id is null or s.webhook_id is null) then raise exception 'Conecte uma conta Asaas primeiro.'; end if;
  update private.finance_asaas_settings set enabled=(p_data->>'enabled')::boolean,updated_by=p.id,updated_at=now() where school_id=sid;
  return jsonb_build_object('enabled',(p_data->>'enabled')::boolean);
 elsif p_action='list' then
  select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc),'[]') into result from (
   select id,status,amount,due_date,created_at,paid_at,posted_at,payment_id,(post_error is not null) needs_reconciliation,
    sale->'customer'->>'student_name' student_name,sale->'customer'->>'payer_name' payer_name
   from private.finance_asaas_orders where school_id=sid order by created_at desc limit 100
  ) t;
  return jsonb_build_object('enabled',s.enabled,'connected',s.api_secret_id is not null,'account_name',s.account_name,'document_masked',s.document_masked,'can_configure',p.role::text in ('integro_admin','diretor','admin'),'orders',result);
 elsif p_action='create' then
  select * into s from private.finance_asaas_settings where school_id=sid for update;
  select * into o from private.finance_asaas_orders where created_by=p.id and request_id=(p_data->>'request_id')::uuid;
  if o.id is not null then
   if o.sale is distinct from p_data->'sale' or o.due_date is distinct from (p_data->>'due_date')::date then raise exception 'Pedido já existe com outro conteúdo.'; end if;
   return to_jsonb(o)||jsonb_build_object('created',false);
  end if;
  if not s.enabled or s.api_secret_id is null then raise exception 'Pix Asaas desativado. A direção precisa conectar e ativar a conta.'; end if;
  if (select count(*) from private.finance_asaas_orders where created_by=p.id and created_at>now()-interval '1 minute')>=10 then raise exception 'Aguarde antes de gerar outra cobrança.'; end if;
  if (p_data->>'due_date')::date not between (now() at time zone 'America/Manaus')::date and (now() at time zone 'America/Manaus')::date+365 then raise exception 'Vencimento inválido.'; end if;
  c:=p_data->'sale'->'customer';
  if nullif(c->>'student_id','') is not null and not exists(select 1 from public.students where id=(c->>'student_id')::uuid and school_id=sid) then raise exception 'Aluno de outra unidade.'; end if;
  for item in select value from jsonb_array_elements(p_data->'sale'->'items') loop
   if nullif(item->>'package_id','') is not null and not exists(select 1 from public.finance_packages where id=(item->>'package_id')::uuid and school_id=sid) then raise exception 'Pacote de outra unidade.'; end if;
   if nullif(item->>'discount_id','') is not null and not exists(select 1 from public.finance_discounts where id=(item->>'discount_id')::uuid and school_id=sid) then raise exception 'Desconto de outra unidade.'; end if;
  end loop;
  insert into private.finance_asaas_orders(school_id,created_by,request_id,sale,amount,due_date) values(sid,p.id,(p_data->>'request_id')::uuid,p_data->'sale',(p_data->'sale'->>'amount')::bigint,(p_data->>'due_date')::date) returning * into o;
  return to_jsonb(o)||jsonb_build_object('created',true);
 elsif p_action in ('get','inspect','customer','bind','uncertain','claim_check','sync','error') then
  select * into o from private.finance_asaas_orders where id=(p_data->>'id')::uuid for update;
  if o.id is null then return null; end if;
  if (p_action='get' and o.school_id<>sid) or (p_data ? 'school_id' and o.school_id<>(p_data->>'school_id')::uuid) then raise exception 'Cobrança não encontrada.'; end if;
  if p_action='customer' then
   if o.customer_id is not null and o.customer_id is distinct from p_data->>'customer_id' then raise exception 'Pagador divergente.'; end if;
   update private.finance_asaas_orders set customer_id=p_data->>'customer_id' where id=o.id returning * into o;
  elsif p_action='bind' then
   if o.payment_id is not null and o.payment_id is distinct from p_data->>'payment_id' then raise exception 'Cobrança duplicada: conciliação necessária.'; end if;
   update private.finance_asaas_orders set payment_id=p_data->>'payment_id',status=case when status in ('creating','uncertain') then 'pending' else status end where id=o.id returning * into o;
  elsif p_action='uncertain' then
   update private.finance_asaas_orders set status='uncertain' where id=o.id and status='creating';
  elsif p_action='claim_check' then
   if o.checked_at>now()-interval '10 seconds' then return jsonb_build_object('claimed',false); end if;
   update private.finance_asaas_orders set checked_at=now() where id=o.id;
   return jsonb_build_object('claimed',true);
  elsif p_action='error' then
   update private.finance_asaas_orders set post_error='Confira a cobrança no Asaas: dados divergentes ou estorno parcial.' where id=o.id returning * into o;
  elsif p_action='sync' then
   if (p_data->>'amount')::bigint is distinct from o.amount or o.payment_id is distinct from p_data->>'payment_id' or p_data->>'status' not in ('pending','paid','canceled','refunded') then raise exception 'Pagamento divergente.'; end if;
   if p_data->>'status'='paid' and o.status<>'refunded' then
    update private.finance_asaas_orders set status='paid',paid_at=coalesce(paid_at,now()),payment_date=coalesce(payment_date,(p_data->>'payment_date')::date) where id=o.id;
    perform private.finance_asaas_post(o.id);
   elsif p_data->>'status' in ('refunded','canceled') then
    update private.finance_asaas_orders set status=p_data->>'status',post_error=case when posted_at is not null then 'Conciliar estorno/cancelamento no caixa sem apagar o recibo original.' else null end where id=o.id;
   elsif p_data->>'status'='pending' and o.status in ('creating','pending','uncertain','canceled') then
    update private.finance_asaas_orders set status='pending',post_error=null where id=o.id;
   end if;
   select * into o from private.finance_asaas_orders where id=o.id;
  end if;
  return to_jsonb(o);
 end if;
 raise exception 'Ação inválida.';
end $$;
revoke all on function public.finance_asaas_service(text,jsonb) from public,anon,authenticated;
grant execute on function public.finance_asaas_service(text,jsonb) to service_role;

create function private.finance_asaas_retry() returns void language plpgsql security definer set search_path='' as $$
declare o record;
begin
 for o in select id from private.finance_asaas_orders where status='paid' and posted_at is null and paid_at>now()-interval '40 days' order by paid_at limit 100 for update skip locked loop
  perform private.finance_asaas_post(o.id);
 end loop;
end $$;
revoke all on function private.finance_asaas_retry() from public,anon,authenticated;
select cron.schedule('finance-asaas-retry','*/5 * * * *','select private.finance_asaas_retry();');
