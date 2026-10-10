-- Corrige a normalização de profiles.role quando a coluna usa partner_role (enum).
-- Preserva a definição vigente, proprietário, ACL e todas as regras financeiras.
begin;
do $fix_role_enum$
declare
  v_oid oid := 'public.create_finance_admin_adjustment(uuid,uuid,uuid,date,numeric,text,text,text,text,text,uuid,uuid)'::regprocedure;
  v_definition text;
  v_old constant text := 'pg_catalog.btrim(p.role)';
  v_new constant text := 'pg_catalog.btrim(p.role::text)';
  v_old_count integer;
  v_new_count integer;
  v_acl aclitem[];
  v_owner oid;
  v_security_definer boolean;
begin
  select pg_catalog.pg_get_functiondef(p.oid), p.proacl, p.proowner, p.prosecdef
    into v_definition, v_acl, v_owner, v_security_definer
  from pg_catalog.pg_proc p where p.oid = v_oid;

  v_old_count := (length(v_definition) - length(replace(v_definition, v_old, ''))) / length(v_old);
  v_new_count := (length(v_definition) - length(replace(v_definition, v_new, ''))) / length(v_new);
  if v_old_count = 0 and v_new_count = 2 then
    return; -- Já corrigida.
  end if;
  if v_old_count <> 2 or v_new_count <> 0 then
    raise exception 'finance_admin_role_definition_unexpected';
  end if;

  execute replace(v_definition, v_old, v_new);

  if exists (
    select 1 from pg_catalog.pg_proc p where p.oid = v_oid
      and (p.proacl is distinct from v_acl
        or p.proowner is distinct from v_owner
        or p.prosecdef is distinct from v_security_definer)
  ) then
    raise exception 'finance_admin_role_security_changed';
  end if;
end;
$fix_role_enum$;
commit;
