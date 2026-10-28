-- Static Pix instructions only; saving settings never posts a financial entry.
create table private.finance_direct_pix_settings (
  school_id uuid primary key references public.schools(id),
  key_type text not null check (key_type in ('cpf','cnpj','phone','email','random')),
  pix_key text not null check (length(pix_key) between 3 and 77),
  merchant_name text not null check (merchant_name ~ '^[A-Z0-9 $%*+./:-]{1,25}$'),
  merchant_city text not null check (merchant_city ~ '^[A-Z0-9 $%*+./:-]{1,15}$'),
  enabled boolean not null default false,
  updated_by uuid not null references auth.users(id),
  updated_at timestamptz not null default now()
);
alter table private.finance_direct_pix_settings enable row level security;
revoke all on private.finance_direct_pix_settings from public, anon, authenticated;

-- Explicit per-school authorization is required because private settings are not
-- exposed through PostgREST. Callers cannot choose an acting user or role.
create or replace function public.finance_direct_pix_settings(
  p_school_id uuid, p_settings jsonb default null
) returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  v_role text;
  v_school uuid;
  v_director boolean;
  v_settings private.finance_direct_pix_settings%rowtype;
  v_kind text;
  v_key text;
  v_name text;
  v_city text;
begin
  select p.role::text, p.school_id into v_role, v_school
  from public.profiles p where p.id = auth.uid() and p.active is true;
  if auth.uid() is null or v_role is null or p_school_id is null
     or v_role not in ('integro_admin','diretor','coordenacao')
     or (v_role <> 'integro_admin' and v_school is distinct from p_school_id)
     or not exists (select 1 from public.schools s where s.id = p_school_id) then
    raise exception 'Sem acesso à configuração Pix desta escola.' using errcode='42501';
  end if;
  v_director := v_role in ('integro_admin','diretor');
  if p_settings is not null then
    if not v_director then
      raise exception 'Somente a direção pode alterar a chave Pix.' using errcode='42501';
    end if;
    if jsonb_typeof(p_settings) is distinct from 'object'
       or jsonb_typeof(p_settings->'enabled') is distinct from 'boolean' then
      raise exception 'Configuração Pix inválida.' using errcode='22023';
    end if;
    v_kind := p_settings->>'key_type'; v_key := p_settings->>'pix_key';
    v_name := p_settings->>'merchant_name'; v_city := p_settings->>'merchant_city';
    if v_key is null or length(v_key) > 77 or v_kind is null
       or not (case v_kind
         when 'cpf' then v_key ~ '^[0-9]{11}$'
         when 'cnpj' then v_key ~ '^[A-Z0-9]{12}[0-9]{2}$'
         when 'phone' then v_key ~ '^\+[1-9][0-9]{1,14}$'
         when 'email' then v_key ~ '^[a-z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$'
         when 'random' then v_key ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
         else false end)
       or v_name is null or v_name !~ '^[A-Z0-9 $%*+./:-]{1,25}$'
       or btrim(v_name) = '' or v_city is null or v_city !~ '^[A-Z0-9 $%*+./:-]{1,15}$' or btrim(v_city) = '' then
      raise exception 'Confira a chave Pix, o nome do recebedor e a cidade.' using errcode='22023';
    end if;
    insert into private.finance_direct_pix_settings(school_id,key_type,pix_key,merchant_name,merchant_city,enabled,updated_by)
    values(p_school_id,v_kind,v_key,v_name,v_city,(p_settings->>'enabled')::boolean,auth.uid())
    on conflict(school_id) do update set key_type=excluded.key_type,pix_key=excluded.pix_key,
      merchant_name=excluded.merchant_name,merchant_city=excluded.merchant_city,
      enabled=excluded.enabled,updated_by=excluded.updated_by,updated_at=now();
  end if;
  select * into v_settings from private.finance_direct_pix_settings where school_id = p_school_id;
  return jsonb_build_object('can_configure',v_director,'settings',case when v_settings.school_id is null then null
    else jsonb_build_object('key_type',v_settings.key_type,'pix_key',v_settings.pix_key,
      'merchant_name',v_settings.merchant_name,'merchant_city',v_settings.merchant_city,
      'enabled',v_settings.enabled,'updated_at',v_settings.updated_at) end);
end;
$$;
revoke all on function public.finance_direct_pix_settings(uuid,jsonb) from public, anon, authenticated;
grant execute on function public.finance_direct_pix_settings(uuid,jsonb) to authenticated;
