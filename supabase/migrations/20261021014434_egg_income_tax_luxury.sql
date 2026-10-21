-- Income-tax state is part of the revisioned game save, with immutable debit audit rows.
create table if not exists private.egg_income_tax_ledger (
 id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id) on delete cascade,
 revision integer not null,period integer not null,amount bigint not null check(amount>0),breakdown jsonb not null,
 created_at timestamptz not null default now(),unique(user_id,revision)
);
alter table private.egg_income_tax_ledger enable row level security;
revoke all on private.egg_income_tax_ledger from public,anon,authenticated;
create or replace function private.egg_tax_valid(old_save jsonb,new_save jsonb) returns boolean
language plpgsql immutable security invoker set search_path='' as $$
declare t jsonb:=new_save->'tax'; old_t jsonb:=old_save->'tax'; basis numeric; earned numeric; assessed numeric; settled numeric; paid numeric; period numeric; seconds numeric; key text;
begin
 if t is null or t->>'version'<>'1' then return false;end if;
 foreach key in array array['basis','earned','assessed','settled','paid','period','seconds'] loop
  if coalesce(jsonb_typeof(t->key),'')<>'number' or (t->>key)::numeric not between 0 and 9007199254740991 then return false;end if;
 end loop;
 basis:=(t->>'basis')::numeric;earned:=(t->>'earned')::numeric;assessed:=(t->>'assessed')::numeric;settled:=(t->>'settled')::numeric;paid:=(t->>'paid')::numeric;period:=(t->>'period')::numeric;seconds:=(t->>'seconds')::numeric;
 if assessed<>floor(assessed) or paid<>floor(paid) or period<>floor(period) or seconds>=300.000001 or settled>assessed or assessed>earned*50 or paid<>floor(settled/100) then return false;end if;
 if jsonb_typeof(t->'buckets')<>'object' or jsonb_typeof(t->'history')<>'array' or jsonb_array_length(t->'history')>20 then return false;end if;
 foreach key in array array['0','20','35','50'] loop
  if coalesce(jsonb_typeof(t->'buckets'->key),'')<>'number' or (t->'buckets'->>key)::numeric not between 0 and earned then return false;end if;
 end loop;
 -- An explicit restart burns the entire balance and all creatures; it cannot retain spendable wealth.
 if coalesce((new_save->>'coins')::numeric,-1)=0 and coalesce((new_save->>'incomeEarned')::numeric,-1)=0 and jsonb_array_length(new_save->'creatures')=0 and jsonb_array_length(new_save->'eggs')=0 and earned=0 and assessed=0 and paid=0 then return true;end if;
 if basis<>coalesce((old_t->>'basis')::numeric,(old_save->>'incomeEarned')::numeric,basis) or earned<>coalesce((new_save->>'incomeEarned')::numeric,0)-basis then return false;end if;
 if old_t->>'version'='1' then
  foreach key in array array['earned','assessed','settled','paid','period'] loop if (t->>key)::numeric<(old_t->>key)::numeric then return false;end if;end loop;
  if period*300+seconds+0.00001<(old_t->>'period')::numeric*300+(old_t->>'seconds')::numeric then return false;end if;
  if period=(old_t->>'period')::numeric and (settled<>(old_t->>'settled')::numeric or paid<>(old_t->>'paid')::numeric) then return false;end if;
  if assessed-(old_t->>'assessed')::numeric>(earned-(old_t->>'earned')::numeric)*50 then return false;end if;
 end if;
 return true;
exception when invalid_text_representation or numeric_value_out_of_range then return false;
end $$;
revoke all on function private.egg_tax_valid(jsonb,jsonb) from public,anon,authenticated;
do $$declare source text;old_list text:='''skateBreeze'',''skateNeon'',''skateAurora'',''skateIntegro'',''scooterPort'',''scooterComet'',''scooterGalaxy'',''scooterIntegro''';begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_tax_valid(' in source)=0 then
  if position('insert into private.box_egg_tokens(token,owner_id)' in source)=0 then raise exception 'egg_save_anchor_missing';end if;
  source:=replace(source,old_list,old_list||',''carAurora'',''carRoyal'',''jetAurora'',''jetImperial''');
  source:=replace(source,'jsonb_array_length(p_data->''vehicles'')>8','jsonb_array_length(p_data->''vehicles'')>12');
  source:=replace(source,'''vehicles'',8','''vehicles'',12');
  source:=replace(source,'insert into private.box_egg_tokens(token,owner_id)',
   'if coalesce(p_data->''tax''->>''version'','''')<>''1'' then return jsonb_build_object(''error'',''economy_update_required'');end if;
    if not private.egg_tax_valid(s.data,p_data) then return jsonb_build_object(''error'',''invalid_tax'');end if;
    if (p_data->''tax''->>''paid'')::numeric>coalesce((s.data->''tax''->>''paid'')::numeric,0) then
     insert into private.egg_income_tax_ledger(user_id,revision,period,amount,breakdown) values(u,s.revision+1,(p_data->''tax''->>''period'')::integer,(p_data->''tax''->>''paid'')::bigint-coalesce((s.data->''tax''->>''paid'')::bigint,0),p_data->''tax''->''history'');
    end if;
    insert into private.box_egg_tokens(token,owner_id)');execute source;
 end if;
end $$;
-- Currency exchange cannot spend funds already reserved for the next tax debit.
do $$declare source text;anchor text:='coalesce((save.data->>''coins'')::numeric,0)<rate';begin
 source:=pg_get_functiondef('public.box_intgem(text,jsonb)'::regprocedure);
 if position('egg_tax_reserved' in source)=0 then
  if position(anchor in source)=0 then raise exception 'exchange_balance_anchor_missing';end if;
  source:=replace(source,anchor,'coalesce((save.data->>''coins'')::numeric,0)-greatest(0,floor(coalesce((save.data->''tax''->>''assessed'')::numeric,0)/100)-coalesce((save.data->''tax''->>''paid'')::numeric,0))<rate /* egg_tax_reserved */');execute source;
 end if;
end $$;
-- Multiplayer publishes the same mounted models as solo play.
do $$declare source text;old_list text:='''skateBreeze'',''skateNeon'',''skateAurora'',''skateIntegro'',''scooterPort'',''scooterComet'',''scooterGalaxy'',''scooterIntegro''';begin
 source:=pg_get_functiondef('public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer)'::regprocedure);
 if position('''carAurora''' in source)=0 then
  if position(old_list in source)=0 then raise exception 'vehicle_room_anchor_missing';end if;
  source:=replace(source,old_list,old_list||',''carAurora'',''carRoyal'',''jetAurora'',''jetImperial''');execute source;
 end if;
end $$;
-- Follow the wallet-first order used by box_intgem for later operator conversions.
do $$declare source text;begin
 if to_regprocedure('private.egg_admin_conversion(uuid,text,bigint,integer)') is not null then
  source:=pg_get_functiondef('private.egg_admin_conversion(uuid,text,bigint,integer)'::regprocedure);
  source:=replace(source,'perform pg_advisory_xact_lock(832137);','');
  source:=replace(source,'select * into w from private.intgem_wallets where user_id=p_user for update;','select * into w from private.intgem_wallets where user_id=p_user for update; perform pg_advisory_xact_lock(832137);');execute source;
 end if;
end $$;
