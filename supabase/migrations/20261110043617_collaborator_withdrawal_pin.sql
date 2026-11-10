-- Only the wallet Edge Function may enroll or verify a member's withdrawal PIN.
-- No plaintext PIN, browser-readable hash, reset endpoint, or authorization flag.
create table private.collaborator_withdrawal_pins (
 user_id uuid primary key references private.collaborator_members(user_id) on delete cascade,
 pin_hash text not null,
 failed_attempts integer not null default 0 check (failed_attempts between 0 and 5),
 locked_until timestamptz,
 created_at timestamptz not null default now()
);
alter table private.collaborator_withdrawal_pins enable row level security;
revoke all on private.collaborator_withdrawal_pins from public, anon, authenticated;
grant select, insert, update on private.collaborator_withdrawal_pins to service_role;

create function public.collaborator_pin_service(p_action text, p_data jsonb default '{}'::jsonb)
returns jsonb language plpgsql security invoker set search_path = '' as $function$
declare
 uid uuid := (p_data->>'user_id')::uuid;
 s private.collaborator_withdrawal_pins%rowtype;
 pin text := p_data->>'pin';
 attempts integer;
 until_time timestamptz;
begin
 if current_user <> 'service_role' then
  raise exception 'Acesso negado.' using errcode='42501';
 end if;
 if p_action not in ('status','setup','verify') then raise exception 'Ação inválida.'; end if;
 if not exists (
  select 1 from private.collaborator_members m join public.profiles p on p.id=m.user_id
  where m.user_id=uid and m.active and p.active and p.school_id=m.school_id
 ) then raise exception 'Colaborador não autorizado.' using errcode='42501'; end if;

 if p_action='status' then
  select * into s from private.collaborator_withdrawal_pins where user_id=uid;
  return jsonb_build_object('configured',s.user_id is not null,'locked_until',
   case when s.locked_until > now() then s.locked_until else null end);
 end if;

 -- Lock the membership even before a PIN row exists. Concurrent enrollments and
 -- guesses serialize per user; failed attempts are returned, never rolled back.
 perform 1 from private.collaborator_members where user_id=uid for update;
 select * into s from private.collaborator_withdrawal_pins where user_id=uid for update;
 if p_action='setup' and s.user_id is not null then
  return jsonb_build_object('error','Sua senha de saque já foi cadastrada.','code','PIN_ALREADY_SET');
 end if;
 if p_action='verify' and s.user_id is null then
  return jsonb_build_object('error','Cadastre sua senha de saque antes de transferir.','code','PIN_NOT_SET');
 end if;
 if p_action='verify' and s.locked_until > now() then
  return jsonb_build_object('error','Senha bloqueada temporariamente. Aguarde o prazo informado.','code','PIN_LOCKED',
   'retry_after',ceil(extract(epoch from (s.locked_until-now())))::integer,'locked_until',s.locked_until);
 end if;
 if jsonb_typeof(p_data->'pin') is distinct from 'string' or pin !~ '^[0-9]{4}$' then
  return jsonb_build_object('error','Digite sua senha de saque de 4 dígitos.','code','PIN_FORMAT');
 end if;
 if p_action='setup' then
  if jsonb_typeof(p_data->'pin_confirmation') is distinct from 'string' or pin is distinct from p_data->>'pin_confirmation' then
   return jsonb_build_object('error','As duas senhas precisam ser iguais.','code','PIN_MISMATCH');
  end if;
  if pin in ('0000','1111','2222','3333','4444','5555','6666','7777','8888','9999',
             '0123','1234','2345','3456','4567','5678','6789','9876','8765','7654','6543','5432','4321','3210') then
   return jsonb_build_object('error','Escolha uma senha sem números todos iguais ou em sequência.','code','PIN_WEAK');
  end if;
  insert into private.collaborator_withdrawal_pins(user_id,pin_hash)
   values(uid,extensions.crypt(pin,extensions.gen_salt('bf',12)));
  return jsonb_build_object('configured',true);
 end if;
 if extensions.crypt(pin,s.pin_hash)=s.pin_hash then
  update private.collaborator_withdrawal_pins set failed_attempts=0,locked_until=null where user_id=uid;
  return jsonb_build_object('verified',true);
 end if;
 attempts:=case when s.locked_until is not null then 1 else s.failed_attempts+1 end;
 until_time:=case when attempts>=5 then now()+interval '15 minutes' else null end;
 update private.collaborator_withdrawal_pins set failed_attempts=attempts,locked_until=until_time where user_id=uid;
 return jsonb_build_object('error',case when attempts>=5 then 'Cinco tentativas incorretas. Aguarde 15 minutos para tentar novamente.' else 'Senha de saque incorreta.' end,
  'code',case when attempts>=5 then 'PIN_LOCKED' else 'PIN_INVALID' end,
  'attempts_remaining',5-attempts,'retry_after',case when attempts>=5 then 900 else 0 end,'locked_until',until_time);
end $function$;
revoke all on function public.collaborator_pin_service(text,jsonb) from public, anon, authenticated;
grant execute on function public.collaborator_pin_service(text,jsonb) to service_role;
