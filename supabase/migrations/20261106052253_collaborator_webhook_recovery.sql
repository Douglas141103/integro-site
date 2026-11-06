create or replace function public.collaborator_wallet_service(p_action text,p_data jsonb default '{}') returns jsonb
language plpgsql security invoker set search_path='' as $$
declare m private.collaborator_members%rowtype; w private.collaborator_withdrawals%rowtype; s private.collaborator_settings%rowtype;
 p public.profiles%rowtype; e public.finance_entries%rowtype; b jsonb; rows jsonb; admin_ok boolean; target_user uuid; cyc uuid;
 total_due numeric; active_due numeric; v_amount numeric; date_today date:=(now() at time zone 'America/Manaus')::date;
begin
 if current_user<>'service_role' then raise exception 'Acesso negado.' using errcode='42501'; end if;
 if p_action in ('context','dashboard','reserve','claim','get','cash_delivered','fund_entry','setup','setup_done','queue') then
  select * into p from public.profiles where id=(p_data->>'user_id')::uuid and active;
  select * into m from private.collaborator_members where user_id=p.id and active and school_id=p.school_id;
  if m.user_id is null then raise exception 'Este login não está vinculado a um colaborador autorizado.' using errcode='42501'; end if;
  select * into s from private.collaborator_settings where school_id=m.school_id;
  admin_ok:=p.role::text in ('integro_admin','diretor','admin');
 end if;
 if p_action='context' then
  return jsonb_build_object('user_id',m.user_id,'school_id',m.school_id,'name',m.display_name,'bucket',m.bucket,'is_admin',admin_ok,'start_date',s.start_date,'webhook_ready',s.webhook_id is not null);
 elsif p_action='dashboard' then
  b:=private.collaborator_balance(m.user_id);
  select coalesce(jsonb_agg(to_jsonb(t) order by t.occurred_on desc,t.id),'[]') into rows from private.collaborator_ledger(m.user_id) t;
  return jsonb_build_object('balance',b,'ledger',rows,'withdrawals',(select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc),'[]') from (select id,amount,pix_key,pix_type,status,provider_id,receipt_url,end_to_end,recipient_name,failure,created_at,updated_at from private.collaborator_withdrawals where user_id=m.user_id order by created_at desc limit 200)t),
  'pending_entries',case when admin_ok then (select coalesce(jsonb_agg(to_jsonb(t) order by t.entry_date desc),'[]') from (
   select fe.id,fe.receipt_number,fe.entry_date,fe.amount_paid,fe.payment_method,r.status,r.reference
   from public.finance_entries fe left join private.collaborator_releases r on r.entry_id=fe.id
   left join private.finance_asaas_orders o on o.id=fe.asaas_order_id
   where fe.school_id=m.school_id and fe.entry_date>=s.start_date and fe.asaas_order_id is null
   and not(coalesce(r.status='funded' and r.amount=fe.amount_paid and r.payment_method=fe.payment_method,false)) limit 500)t) else '[]'::jsonb end);
 elsif p_action in ('cash_delivered','fund_entry') then
  if not admin_ok then raise exception 'Somente a administração pode conferir recebimentos.'; end if;
  select * into e from public.finance_entries where id=(p_data->>'entry_id')::uuid and school_id=m.school_id and entry_date>=s.start_date for update;
  if e.id is null or e.asaas_order_id is not null then raise exception 'Recebimento inválido para conferência manual.'; end if;
  if p_action='cash_delivered' then
   if lower(e.payment_method) not like '%dinheiro%' then raise exception 'Este recebimento não é em dinheiro.'; end if;
   insert into private.collaborator_releases(entry_id,school_id,amount,payment_method,status,delivered_by,delivered_at)
   values(e.id,m.school_id,e.amount_paid,e.payment_method,'delivered',m.user_id,now())
   on conflict(entry_id) do update set amount=excluded.amount,payment_method=excluded.payment_method,status='delivered',delivered_by=excluded.delivered_by,delivered_at=now(),funded_by=null,funded_at=null,reference=null;
  else
   if length(trim(coalesce(p_data->>'reference',''))) not between 6 and 180 or p_data->>'funds_confirmed'<>'true' then raise exception 'Confirme o crédito na conta Asaas e informe a referência bancária.'; end if;
   if lower(e.payment_method) like '%dinheiro%' and not exists(select 1 from private.collaborator_releases where entry_id=e.id and status='delivered' and amount=e.amount_paid) then raise exception 'Confira primeiro a entrega do dinheiro ao caixa central.'; end if;
   insert into private.collaborator_releases(entry_id,school_id,amount,payment_method,status,reference,funded_by,funded_at)
   values(e.id,m.school_id,e.amount_paid,e.payment_method,'funded',trim(p_data->>'reference'),m.user_id,now())
   on conflict(entry_id) do update set amount=excluded.amount,payment_method=excluded.payment_method,status='funded',reference=excluded.reference,funded_by=excluded.funded_by,funded_at=now();
  end if;
  return jsonb_build_object('confirmed',true);
 elsif p_action='setup' then
  if not admin_ok then raise exception 'A administração precisa ativar a conexão de retiradas.'; end if;
  return jsonb_build_object('school_id',m.school_id,'webhook_id',s.webhook_id);
 elsif p_action='setup_done' then
  if not admin_ok then raise exception 'Acesso negado.'; end if;
  update private.collaborator_settings set webhook_id=p_data->>'webhook_id' where school_id=m.school_id;
  return '{"ready":true}'::jsonb;
 elsif p_action='reserve' then
  -- Serialize all withdrawals of this school, including different shareholders.
  perform 1 from private.collaborator_settings where school_id=m.school_id for update;
  select * into w from private.collaborator_withdrawals where user_id=m.user_id and request_id=(p_data->>'request_id')::uuid;
  if w.id is not null then
   if w.amount is distinct from (p_data->>'amount')::numeric or w.pix_key is distinct from p_data->>'pix_key' or w.pix_type is distinct from p_data->>'pix_type' then raise exception 'Solicitação já usada com outros dados.'; end if;
   return jsonb_build_object('id',w.id,'status',w.status,'existing',true);
  end if;
  if s.webhook_id is null then raise exception 'A administração precisa ativar a conexão de retiradas.'; end if;
  v_amount:=(p_data->>'amount')::numeric;
  if v_amount is null or v_amount<1 or v_amount<>round(v_amount,2) or v_amount>100000 then raise exception 'Valor inválido.'; end if;
  b:=private.collaborator_balance(m.user_id);
  if v_amount>(b->>'available')::numeric then raise exception 'Valor maior que o saldo disponível para Pix.'; end if;
  select sum((private.collaborator_balance(user_id)->>'available')::numeric) into total_due from private.collaborator_members where school_id=m.school_id and active;
  select coalesce(sum(amount),0) into active_due from private.collaborator_withdrawals where school_id=m.school_id and status not in ('DONE','FAILED','CANCELLED');
  if (p_data->>'provider_balance')::numeric is null or (p_data->>'provider_balance')::numeric < coalesce(total_due,0)+active_due then raise exception 'O caixa digital ainda não cobre os saldos liberados. Aguarde a conciliação da administração.'; end if;
  if length(p_data->>'pix_key') not between 3 and 150 or p_data->>'pix_type' not in ('CPF','CNPJ','EMAIL','PHONE','EVP') then raise exception 'Chave Pix inválida.'; end if;
  insert into private.collaborator_withdrawals(request_id,user_id,school_id,bucket,amount,pix_key,pix_type)
  values((p_data->>'request_id')::uuid,m.user_id,m.school_id,m.bucket,v_amount,p_data->>'pix_key',p_data->>'pix_type') returning * into w;
  return jsonb_build_object('id',w.id,'status',w.status,'existing',false);
 elsif p_action in ('get','claim') then
  select * into w from private.collaborator_withdrawals where id=(p_data->>'id')::uuid and user_id=m.user_id for update;
  if w.id is null then raise exception 'Transferência não encontrada.'; end if;
  if p_action='claim' then
   if w.status<>'reserved' then return jsonb_build_object('claimed',false,'withdrawal',to_jsonb(w)); end if;
   update private.collaborator_withdrawals set status='submitting',updated_at=now() where id=w.id returning * into w;
  end if;
  return jsonb_build_object('claimed',true,'withdrawal',to_jsonb(w));
 elsif p_action='queue' then
  return (select coalesce(jsonb_agg(to_jsonb(t)),'[]') from (select * from private.collaborator_withdrawals where user_id=m.user_id and (status not in ('DONE','FAILED','CANCELLED') or (status='DONE' and movement_id is null)) order by created_at limit 15)t);
 elsif p_action='inspect' then
  select * into w from private.collaborator_withdrawals where school_id=(p_data->>'school_id')::uuid and (id=(p_data->>'id')::uuid or (nullif(p_data->>'provider_id','') is not null and provider_id=p_data->>'provider_id'));
  return to_jsonb(w);
 elsif p_action='update' then
  select * into w from private.collaborator_withdrawals where id=(p_data->>'id')::uuid for update;
  if w.id is null then raise exception 'Transferência não encontrada.'; end if;
  if w.provider_id is not null and nullif(p_data->>'provider_id','') is not null and w.provider_id<>p_data->>'provider_id' then raise exception 'Identificador divergente.'; end if;
  if w.status='DONE' and p_data->>'status'<>'DONE' then return to_jsonb(w); end if;
  if p_data->>'status' not in ('uncertain','PENDING','BANK_PROCESSING','BLOCKED','DONE','FAILED','CANCELLED') then raise exception 'Estado inválido.'; end if;
  update private.collaborator_withdrawals set status=p_data->>'status',provider_id=coalesce(nullif(p_data->>'provider_id',''),provider_id),
   receipt_url=coalesce(p_data->>'receipt_url',receipt_url),end_to_end=coalesce(p_data->>'end_to_end',end_to_end),recipient_name=coalesce(p_data->>'recipient_name',recipient_name),failure=p_data->>'failure',updated_at=now() where id=w.id returning * into w;
  if w.status='DONE' and w.movement_id is null then
   begin
    select id into cyc from public.finance_cash_cycles where school_id=w.school_id and date_today between start_date and end_date and status='aberto' order by start_date desc limit 1;
    if cyc is null then raise exception 'Aguardando abertura do ciclo financeiro.'; end if;
    insert into public.finance_cash_cycle_movements(school_id,cycle_id,movement_type,source_bucket,amount,movement_date,description,notes,created_by)
    values(w.school_id,cyc,'pagamento_acionista',w.bucket,w.amount,date_today,'Retirada Pix · Portal do Colaborador','Transferência Asaas: '||w.provider_id,w.user_id) returning id into w.movement_id;
    update private.collaborator_withdrawals set movement_id=w.movement_id,post_error=null where id=w.id;
   exception when others then
    update private.collaborator_withdrawals set post_error='Pagamento confirmado; lançamento no caixa aguardando conciliação.' where id=w.id;
   end;
  end if;
  return jsonb_build_object('id',w.id,'status',w.status);
 else raise exception 'Ação inválida.';
 end if;
end $$;
revoke all on function public.collaborator_wallet_service(text,jsonb) from public,anon,authenticated;
grant execute on function public.collaborator_wallet_service(text,jsonb) to service_role;
