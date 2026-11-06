-- Staged only. Activation is a separate operational step after Asaas/network setup.
create table private.collaborator_authorization_settings (
 school_id uuid primary key references public.schools(id),
 enabled boolean not null default false,
 enabled_at timestamptz,
 check(not enabled or enabled_at is not null)
);
create table private.collaborator_authorization_audit (
 school_id uuid not null references public.schools(id), provider_id uuid not null,
 withdrawal_id uuid references private.collaborator_withdrawals(id),
 decision text not null check(decision in ('APPROVED','REFUSED')), reason text,
 attempts integer not null default 1, created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 primary key(school_id,provider_id)
);
alter table private.collaborator_authorization_settings enable row level security;
alter table private.collaborator_authorization_audit enable row level security;
revoke all on private.collaborator_authorization_settings,private.collaborator_authorization_audit from public,anon,authenticated;
grant all on private.collaborator_authorization_settings,private.collaborator_authorization_audit to service_role;

create function public.collaborator_authorization_service(p_action text,p_data jsonb default '{}') returns jsonb
language plpgsql security invoker set search_path='' as $$
declare s private.collaborator_authorization_settings%rowtype; w private.collaborator_withdrawals%rowtype;
 school uuid:=(p_data->>'school_id')::uuid; provider_uuid uuid:=(p_data->>'provider_id')::uuid;
 reason text; funded numeric; result text; prior text;
begin
 if current_user<>'service_role' then raise exception 'Acesso negado.' using errcode='42501'; end if;
 if p_action not in ('inspect','decide') then raise exception 'Ação inválida.'; end if;
 if p_action='inspect' then
  select * into s from private.collaborator_authorization_settings where school_id=school;
  select * into w from private.collaborator_withdrawals where school_id=school and
   ((p_data->>'id' is not null and id=(p_data->>'id')::uuid) or (provider_uuid is not null and provider_id=provider_uuid::text));
  return jsonb_build_object('enabled',coalesce(s.enabled,false),'withdrawal',case when w.id is null then null else to_jsonb(w) end);
 end if;
 -- Same lock order as reservation: school, then withdrawal. Prevent cross-member overcommit.
 perform 1 from private.collaborator_settings where school_id=school for update;
 select * into s from private.collaborator_authorization_settings where school_id=school for update;
 if not coalesce(s.enabled,false) then return '{"status":"REFUSED","refuseReason":"Autorização automática ainda não ativada."}'::jsonb; end if;
 if provider_uuid is null then raise exception 'Identificador inválido.'; end if;
 select * into w from private.collaborator_withdrawals where school_id=school and id=(p_data->>'id')::uuid for update;
 reason:=nullif(left(p_data->>'refuse_reason',200),'');
 select decision into prior from private.collaborator_authorization_audit where school_id=school and provider_id=provider_uuid;
 if prior='REFUSED' then reason:='Operação anteriormente recusada.';
 elsif reason is null then
  if w.id is null then reason:='Solicitação desconhecida.';
  elsif w.status not in ('submitting','uncertain','PENDING','BLOCKED') then reason:='Solicitação fora do estado de autorização.';
  elsif w.created_at<s.enabled_at then reason:='Solicitação anterior à ativação automática.';
  elsif (w.provider_id is not null and w.provider_id<>provider_uuid::text)
    or p_data->>'external_reference' is distinct from ('integro-withdrawal:'||w.id)
    or (p_data->>'amount')::numeric is distinct from w.amount
    or p_data->>'pix_key' is distinct from w.pix_key
    or p_data->>'operation_type' is distinct from 'PIX'
    or coalesce(p_data->>'provider_status','') not in ('PENDING','BLOCKED') then reason:='Dados da transferência divergentes.';
  elsif not exists(select 1 from private.collaborator_members m join public.profiles p on p.id=m.user_id
    where m.user_id=w.user_id and m.school_id=school and p.school_id=school and m.bucket=w.bucket and m.active and p.active) then reason:='Colaborador sem acesso ativo.';
  else
   -- This includes the current reservation and all other debits. Do not clamp negatives.
   select coalesce(sum(amount) filter(where (kind='participation' and state='available') or (kind<>'participation' and amount<0)),0)
   into funded from private.collaborator_ledger(w.user_id);
   if funded<0 then reason:='Reserva deixou de ter cobertura no saldo conciliado.'; end if;
  end if;
 end if;
 result:=case when reason is null then 'APPROVED' else 'REFUSED' end;
 if result='APPROVED' then
  update private.collaborator_withdrawals set provider_id=provider_uuid::text,updated_at=now() where id=w.id;
 end if;
 insert into private.collaborator_authorization_audit(school_id,provider_id,withdrawal_id,decision,reason)
 values(school,provider_uuid,w.id,result,reason)
 on conflict(school_id,provider_id) do update set decision=excluded.decision,reason=excluded.reason,
  attempts=private.collaborator_authorization_audit.attempts+1,updated_at=now();
 -- REFUSED leaves funds reserved until the provider confirms cancellation/failure.
 return case when result='APPROVED' then '{"status":"APPROVED"}'::jsonb else jsonb_build_object('status','REFUSED','refuseReason',reason) end;
end $$;
revoke all on function public.collaborator_authorization_service(text,jsonb) from public,anon,authenticated;
grant execute on function public.collaborator_authorization_service(text,jsonb) to service_role;
