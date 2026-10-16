-- IntGem: free Box accounts, server wallet, verified one-off payments and daily rewards.
begin;
create table if not exists private.box_accounts (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default 'Jogador' check(char_length(display_name) between 2 and 40),
 blocked boolean not null default false, created_at timestamptz not null default now()
);
create table if not exists private.intgem_wallets (
 user_id uuid primary key references auth.users(id) on delete cascade,
 balance integer not null default 0 check(balance between 0 and 1000000), updated_at timestamptz not null default now()
);
create table if not exists private.intgem_ledger (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 delta integer not null check(delta<>0), kind text not null check(kind in ('payment','daily','purchase','exchange')),
 reference text not null, created_at timestamptz not null default now(), unique(user_id,kind,reference)
);
create index if not exists intgem_ledger_user_date on private.intgem_ledger(user_id,created_at desc);
create index if not exists intgem_ledger_date on private.intgem_ledger(created_at);
create table if not exists private.intgem_items (
 id text primary key, game text not null, name text not null, kind text not null check(kind in ('aura','companion')),
 rarity text not null, price integer not null check(price>3), color text not null, secondary text not null, description text not null, enabled boolean not null default true
);
create table if not exists private.intgem_inventory (
 user_id uuid not null references auth.users(id) on delete cascade, item_id text not null references private.intgem_items(id),
 acquired_at timestamptz not null default now(), primary key(user_id,item_id)
);
create table if not exists private.intgem_equipped (
 user_id uuid not null, game text not null, kind text not null, item_id text not null,
 primary key(user_id,game,kind), foreign key(user_id,item_id) references private.intgem_inventory(user_id,item_id) on delete cascade
);
create table if not exists private.intgem_clock (
 user_id uuid primary key references auth.users(id) on delete cascade,
 last_seen timestamptz not null default clock_timestamp(), active boolean not null default false,
 game text not null default 'lobby'
);
create table if not exists private.intgem_days (
 user_id uuid not null references auth.users(id) on delete cascade, day date not null,
 seconds numeric not null default 0 check(seconds>=0), egg_seconds numeric not null default 0 check(egg_seconds>=0),
 rewarded boolean not null default false, primary key(user_id,day)
);
create table if not exists private.intgem_exchange_days (
 day date primary key, capacity integer not null default 50 check(capacity>0), used integer not null default 0 check(used>=0 and used<=capacity),
 base_rate integer not null check(base_rate>=20000)
);
create table if not exists private.intgem_orders (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 request_id uuid not null, pack text not null, gems integer not null check(gems in (1,5,10,20)),
 amount integer not null check(amount in (99,299,699,1099)),
 status text not null default 'creating' check(status in ('creating','pending','paid','error')),
 checkout_url text, transaction_nsu text unique, invoice_slug text, capture_method text,
 created_at timestamptz not null default now(), attempt_at timestamptz not null default now(),
 checked_at timestamptz, paid_at timestamptz, unique(user_id,request_id)
);
create index if not exists intgem_orders_user_date on private.intgem_orders(user_id,created_at desc);
do $secure$
declare t text;
begin
 foreach t in array array['box_accounts','intgem_wallets','intgem_ledger','intgem_items','intgem_inventory','intgem_equipped','intgem_clock','intgem_days','intgem_exchange_days','intgem_orders'] loop
  execute format('alter table private.%I enable row level security',t);
  execute format('revoke all on private.%I from public,anon,authenticated',t);
 end loop;
end $secure$;

create or replace function private.box_can_play(p_user uuid) returns boolean
language sql stable security definer set search_path='' as $$
 select p_user is not null
 and not exists(select 1 from private.box_accounts where user_id=p_user and blocked)
 and not exists(select 1 from public.profiles where id=p_user and not active)
 and (exists(select 1 from public.profiles where id=p_user and role::text in ('responsavel','integro_admin','diretor','coordenacao','professor'))
 or exists(select 1 from private.box_accounts a join auth.users u on u.id=a.user_id where a.user_id=p_user and not a.blocked and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false)))
$$;
revoke all on function private.box_can_play(uuid) from public,anon,authenticated;

create or replace function public.box_access(p_name text default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); n text; family boolean;
begin
 if u is null then raise exception 'authentication_required' using errcode='42501';end if;
 if exists(select 1 from private.box_accounts where user_id=u and blocked) or exists(select 1 from public.profiles where id=u and not active) then raise exception 'box_access_denied' using errcode='42501';end if;
 select exists(select 1 from public.profiles where id=u and role::text in ('responsavel','integro_admin','diretor','coordenacao','professor')) into family;
 if not family and not exists(select 1 from auth.users where id=u and email_confirmed_at is not null and not coalesce(is_anonymous,false)) then raise exception 'email_confirmation_required' using errcode='42501';end if;
 n:=left(regexp_replace(trim(coalesce(p_name,'Jogador')),'[[:cntrl:]]','','g'),40);
 if char_length(n)<2 then n:='Jogador';end if;
 insert into private.box_accounts(user_id,display_name) values(u,n) on conflict do nothing;
 if p_name is not null then update private.box_accounts set display_name=n where user_id=u;end if;
 select display_name into n from private.box_accounts where user_id=u;
 return jsonb_build_object('allowed',true,'family',family,'display_name',n);
end $$;
revoke all on function public.box_access(text) from public,anon;
grant execute on function public.box_access(text) to authenticated;

create or replace function private.intgem_snapshot(p_user uuid) returns jsonb language sql stable set search_path='' as $$
 select jsonb_build_object(
 'balance',coalesce((select balance from private.intgem_wallets where user_id=p_user),0),
 'day',(clock_timestamp() at time zone 'America/Manaus')::date,
 'daily',coalesce((select jsonb_build_object('seconds',floor(seconds),'egg_seconds',floor(egg_seconds),'rewarded',rewarded) from private.intgem_days where user_id=p_user and day=(clock_timestamp() at time zone 'America/Manaus')::date),'{"seconds":0,"egg_seconds":0,"rewarded":false}'::jsonb),
 'owned',coalesce((select jsonb_agg(item_id order by item_id) from private.intgem_inventory where user_id=p_user),'[]'),
 'equipped',coalesce((select jsonb_agg(jsonb_build_object('game',game,'kind',kind,'item',item_id)) from private.intgem_equipped where user_id=p_user),'[]'),
 'items',coalesce((select jsonb_agg(to_jsonb(i)-'enabled' order by game,price) from private.intgem_items i where enabled),'[]'),
 'history',coalesce((select jsonb_agg(to_jsonb(h)) from (select delta,kind,reference,created_at from private.intgem_ledger where user_id=p_user order by created_at desc limit 25) h),'[]'),
 'orders',coalesce((select jsonb_agg(to_jsonb(o)) from (select id,pack,gems,amount,status,created_at from private.intgem_orders where user_id=p_user order by created_at desc limit 10) o),'[]'))
$$;
revoke all on function private.intgem_snapshot(uuid) from public,anon,authenticated;

create or replace function public.box_intgem(p_action text default 'wallet',p_payload jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); t timestamptz:=clock_timestamp(); d date:=(clock_timestamp() at time zone 'America/Manaus')::date;
 w private.intgem_wallets%rowtype; c private.intgem_clock%rowtype; daily private.intgem_days%rowtype;
 item private.intgem_items%rowtype; market private.intgem_exchange_days%rowtype; save private.box_egg_saves%rowtype;
 dt numeric:=0; active_now boolean; v_game text; rate integer; demand numeric; supply numeric; quote jsonb; claimed uuid;
begin
 if not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action is null or p_action not in ('wallet','pulse','buy','equip','unequip','exchange_quote','exchange') or p_payload is null or jsonb_typeof(p_payload)<>'object' or octet_length(p_payload::text)>2048 then return jsonb_build_object('error','invalid_request');end if;
 insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
 select * into w from private.intgem_wallets where user_id=u for update;
 t:=clock_timestamp();d:=(t at time zone 'America/Manaus')::date;
 insert into private.intgem_days(user_id,day) values(u,d) on conflict do nothing;
 if p_action='pulse' then
  v_game:=coalesce(p_payload->>'game','lobby');
  if v_game not in ('lobby','rush','bounce','egg','bairro','fruit','craft','gosnake','fuitcort','interball','interdance','house','math','words','robot','memory') then return jsonb_build_object('error','invalid_game');end if;
  active_now:=coalesce(p_payload->'active'='true'::jsonb,false) and coalesce(p_payload->'visible'='true'::jsonb,false);
  insert into private.intgem_clock(user_id) values(u) on conflict do nothing;
  select * into c from private.intgem_clock where user_id=u for update;
  if active_now and c.active and t-c.last_seen<=interval '70 seconds' then
   dt:=greatest(0,least(35,extract(epoch from t-greatest(c.last_seen,d::timestamp at time zone 'America/Manaus'))));
  end if;
  update private.intgem_days set seconds=seconds+dt,egg_seconds=egg_seconds+case when v_game='egg' and c.game='egg' then dt else 0 end where user_id=u and day=d returning * into daily;
  update private.intgem_clock set last_seen=t,active=active_now,game=v_game where user_id=u;
  if daily.seconds>=300 and not daily.rewarded then
   insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,1,'daily',d::text) on conflict do nothing returning id into claimed;
   if claimed is not null then update private.intgem_wallets set balance=balance+1,updated_at=t where user_id=u;end if;
   update private.intgem_days set rewarded=true where user_id=u and day=d;
  end if;
 elsif p_action in ('buy','equip','unequip') then
  select * into item from private.intgem_items where id=p_payload->>'item' and enabled;
  if item.id is null then return jsonb_build_object('error','invalid_item');end if;
  if p_action='buy' and not exists(select 1 from private.intgem_inventory where user_id=u and item_id=item.id) then
   if coalesce((p_payload->>'price')::integer,-1)<>item.price then return jsonb_build_object('error','price_changed');end if;
   if w.balance<item.price then return jsonb_build_object('error','insufficient_balance');end if;
   insert into private.intgem_inventory(user_id,item_id) values(u,item.id);
   insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-item.price,'purchase',item.id);
   update private.intgem_wallets set balance=balance-item.price,updated_at=t where user_id=u;
  end if;
  if not exists(select 1 from private.intgem_inventory where user_id=u and item_id=item.id) then return jsonb_build_object('error','not_owned');end if;
  if p_action='unequip' then delete from private.intgem_equipped where user_id=u and item_id=item.id;
  else insert into private.intgem_equipped(user_id,game,kind,item_id) values(u,item.game,item.kind,item.id) on conflict(user_id,game,kind) do update set item_id=excluded.item_id;end if;
 elsif p_action in ('exchange_quote','exchange') then
  select coalesce(sum(-delta) filter(where kind='purchase'),0),coalesce(sum(delta) filter(where delta>0),0) into demand,supply from private.intgem_ledger where created_at>=((d-7)::timestamp at time zone 'America/Manaus') and created_at<(d::timestamp at time zone 'America/Manaus');
  insert into private.intgem_exchange_days(day,base_rate) values(d,(ceil(20000*(1+least(2,demand/greatest(25,supply)))/1000)*1000)::integer) on conflict do nothing;
  select * into market from private.intgem_exchange_days where day=d for update;
  rate:=(ceil(market.base_rate*(1+market.used::numeric/market.capacity*.5)/1000)*1000)::integer;
  select * into daily from private.intgem_days where user_id=u and day=d;
  select * into save from private.box_egg_saves where user_id=u;
  quote:=jsonb_build_object('rate',rate,'remaining',market.capacity-market.used,'capacity',market.capacity,'egg_seconds',floor(daily.egg_seconds),'required_seconds',1200,'converted',exists(select 1 from private.intgem_ledger where user_id=u and kind='exchange' and reference=d::text),'coins',coalesce((save.data->>'coins')::numeric,0),'revision',save.revision,'day',d);
  if p_action='exchange_quote' then return private.intgem_snapshot(u)||jsonb_build_object('quote',quote);end if;
  if quote->>'converted'='true' then return jsonb_build_object('error','daily_exchange_used');end if;
  if market.used>=market.capacity then return jsonb_build_object('error','exchange_pool_empty');end if;
  if daily.egg_seconds<1200 then return jsonb_build_object('error','exchange_time_required');end if;
  if coalesce((p_payload->>'rate')::integer,0)<>rate or coalesce(p_payload->>'day','')<>d::text then return jsonb_build_object('error','quote_changed','quote',quote);end if;
  -- Serialize with the existing save/trade protocol; never overwrite a newer device.
  perform pg_advisory_xact_lock(832137);
  select * into save from private.box_egg_saves where user_id=u for update;
  if save.data is null or coalesce((p_payload->>'revision')::integer,-1)<>save.revision then return jsonb_build_object('error','save_conflict');end if;
  if exists(select 1 from private.box_egg_trades where status='pending' and u in(a,b)) then return jsonb_build_object('error','trade_pending');end if;
  if coalesce((save.data->>'coins')::numeric,0)<rate then return jsonb_build_object('error','insufficient_coins');end if;
  update private.box_egg_saves set data=jsonb_set(data,'{coins}',to_jsonb((data->>'coins')::numeric-rate)),revision=revision+1,updated_at=t where user_id=u returning * into save;
  update private.intgem_exchange_days set used=used+1 where day=d;
  insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,1,'exchange',d::text);
  update private.intgem_wallets set balance=balance+1,updated_at=t where user_id=u;
  return private.intgem_snapshot(u)||jsonb_build_object('save',save.data,'revision',save.revision,'exchanged',true);
 end if;
 return private.intgem_snapshot(u);
exception when invalid_text_representation or numeric_value_out_of_range then return jsonb_build_object('error','invalid_request');
end $$;
revoke all on function public.box_intgem(text,jsonb) from public,anon;
grant execute on function public.box_intgem(text,jsonb) to authenticated;

create or replace function public.box_intgem_order(p_pack text,p_request uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); o private.intgem_orders%rowtype; qty integer; cents integer; fresh uuid;
begin
 if not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_request is null then return jsonb_build_object('error','invalid_request');end if;
 select q,a into qty,cents from (values('gem1',1,99),('gem5',5,299),('gem10',10,699),('gem20',20,1099)) p(k,q,a) where k=p_pack;
 if qty is null then return jsonb_build_object('error','invalid_pack');end if;
 perform pg_advisory_xact_lock(hashtextextended('intgem-order:'||u::text,0));
 select * into o from private.intgem_orders where user_id=u and request_id=p_request for update;
 if o.id is null then
  if (select count(*) from private.intgem_orders where user_id=u and created_at>now()-interval '1 hour')>=12 then return jsonb_build_object('error','rate_limit');end if;
  insert into private.intgem_orders(user_id,request_id,pack,gems,amount) values(u,p_request,p_pack,qty,cents) returning * into o;fresh:=o.id;
 end if;
 if o.pack<>p_pack then return jsonb_build_object('error','invalid_request');end if;
 if o.checkout_url is not null or o.status='paid' then return jsonb_build_object('id',o.id,'url',o.checkout_url,'status',o.status);end if;
 if fresh is null and o.status='creating' and o.attempt_at>now()-interval '40 seconds' then return jsonb_build_object('error','checkout_in_progress','id',o.id);end if;
 update private.intgem_orders set status='creating',attempt_at=now() where id=o.id;
 return jsonb_build_object('id',o.id,'gems',o.gems,'amount',o.amount,'create',true);
end $$;
revoke all on function public.box_intgem_order(text,uuid) from public,anon;
grant execute on function public.box_intgem_order(text,uuid) to authenticated;

-- This endpoint is callable only by the server's service role, never by buyers.
create or replace function public.box_intgem_payment(p_action text,p_order uuid,p_data jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare o private.intgem_orders%rowtype; tx text; url text; credited uuid;
begin
 select * into o from private.intgem_orders where id=p_order for update;
 if o.id is null then return jsonb_build_object('error','unknown_order');end if;
 if p_action='inspect' then
  if o.status='paid' then return jsonb_build_object('id',o.id,'user_id',o.user_id,'amount',o.amount,'status',o.status);end if;
  if o.checked_at>clock_timestamp()-interval '2 seconds' then return jsonb_build_object('error','checking');end if;
  update private.intgem_orders set checked_at=clock_timestamp() where id=o.id;
  return jsonb_build_object('id',o.id,'user_id',o.user_id,'amount',o.amount,'status',o.status);
 elsif p_action='checkout' then
  url:=p_data->>'url';
  if url is null or url !~ '^https://(checkout[.]infinitepay[.]com[.]br|checkout[.]infinitepay[.]io|pay[.]infinitepay[.]io|buy[.]infinitepay[.]io)/' then return jsonb_build_object('error','invalid_checkout_url');end if;
  update private.intgem_orders set checkout_url=url,status=case when status='paid' then status else 'pending' end where id=o.id;
  return jsonb_build_object('id',o.id,'url',url);
 elsif p_action='failed' then
  update private.intgem_orders set status='error' where id=o.id and status='creating';return jsonb_build_object('ok',true);
 elsif p_action='settle' then
  tx:=p_data->>'transaction_nsu';
  if tx is null or char_length(tx) not between 1 and 160 or coalesce((p_data->>'amount')::integer,-1)<>o.amount or coalesce(p_data->>'capture_method','') not in ('credit_card','pix') or nullif(p_data->>'invoice_slug','') is null then return jsonb_build_object('error','payment_mismatch');end if;
  if o.status='paid' then return jsonb_build_object('paid',true,'duplicate',true,'gems',o.gems);end if;
  if exists(select 1 from private.intgem_orders where transaction_nsu=tx and id<>o.id) then return jsonb_build_object('error','transaction_reused');end if;
  insert into private.intgem_wallets(user_id) values(o.user_id) on conflict do nothing;
  perform 1 from private.intgem_wallets where user_id=o.user_id for update;
  insert into private.intgem_ledger(user_id,delta,kind,reference) values(o.user_id,o.gems,'payment',o.id::text) on conflict do nothing returning id into credited;
  if credited is not null then update private.intgem_wallets set balance=balance+o.gems,updated_at=now() where user_id=o.user_id;end if;
  update private.intgem_orders set status='paid',paid_at=now(),transaction_nsu=tx,invoice_slug=p_data->>'invoice_slug',capture_method=p_data->>'capture_method' where id=o.id;
  return jsonb_build_object('paid',true,'gems',o.gems);
 end if;
 return jsonb_build_object('error','invalid_action');
end $$;
revoke all on function public.box_intgem_payment(text,uuid,jsonb) from public,anon,authenticated;
grant execute on function public.box_intgem_payment(text,uuid,jsonb) to service_role;

-- Replace only player access checks; school administration keeps its own guards.
do $access$
declare f record; body text; changed text; pattern text;
begin
 for f in select p.oid,p.proname from pg_proc p join pg_namespace n on n.oid=p.pronamespace where (n.nspname='public' and p.proname in ('box_room','box_egg','box_usage')) or (n.nspname='private' and p.proname='box_chat_identity') loop
  body:=pg_get_functiondef(f.oid);
  if position('private.box_can_play(' in body)>0 then continue;end if;
  pattern:='not exists\(select 1 from public\.profiles(?: p)? where (?:p\.)?id=(uid|u|p_user) and (?:p\.)?role::text in\s*\(''responsavel'',''integro_admin'',''diretor'',''coordenacao'',''professor''\)\)';
  changed:=regexp_replace(body,pattern,'not private.box_can_play(\1)');
  if changed=body then raise exception 'Unexpected access guard in %',f.proname;end if;
  execute changed;
 end loop;
 -- All fifteen games must be measurable, including Bounce, Rush and InterDance.
 select pg_get_functiondef('public.box_usage(uuid,text,text,boolean,boolean,uuid,text)'::regprocedure) into body;
 body:=regexp_replace(body,'p_game not in \(''lobby''[^)]*\)','p_game not in (''lobby'',''house'',''egg'',''bairro'',''fruit'',''interball'',''fuitcort'',''craft'',''math'',''words'',''robot'',''memory'',''gosnake'',''interdance'',''rush'',''bounce'')');
 execute body;
 for f in select conname from pg_constraint where conrelid='private.box_usage_sessions'::regclass and contype='c' and pg_get_constraintdef(oid) like '%game%' loop execute format('alter table private.box_usage_sessions drop constraint %I',f.conname);end loop;
 alter table private.box_usage_sessions add constraint box_usage_sessions_game_intgem_check check(game in ('lobby','house','egg','bairro','fruit','interball','fuitcort','craft','math','words','robot','memory','gosnake','interdance','rush','bounce'));
end $access$;
-- Catalog seed is appended below from the same reviewed frontend catalog.

insert into private.intgem_items(id,game,name,kind,rarity,price,color,secondary,description) values
('rush_jade','rush','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Integro Rush.'),
('rush_guardian','rush','Guardião da Expedição','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Integro Rush.'),
('rush_cosmos','rush','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Integro Rush.'),
('bounce_jade','bounce','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Bounce Tegro.'),
('bounce_guardian','bounce','Guardião dos Saltos','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Bounce Tegro.'),
('bounce_cosmos','bounce','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Bounce Tegro.'),
('egg_jade','egg','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Pegue o Ovo.'),
('egg_guardian','egg','Guardião do Ninho','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Pegue o Ovo.'),
('egg_cosmos','egg','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Pegue o Ovo.'),
('bairro_jade','bairro','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Meu Bairro.'),
('bairro_guardian','bairro','Guardião do Bairro','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Meu Bairro.'),
('bairro_cosmos','bairro','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Meu Bairro.'),
('fruit_jade','fruit','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Fruit Box.'),
('fruit_guardian','fruit','Guardião das Frutas','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Fruit Box.'),
('fruit_cosmos','fruit','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Fruit Box.'),
('craft_jade','craft','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de IntegroCraft.'),
('craft_guardian','craft','Guardião dos Blocos','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em IntegroCraft.'),
('craft_cosmos','craft','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para IntegroCraft.'),
('gosnake_jade','gosnake','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de GoSnake.'),
('gosnake_guardian','gosnake','Guardião da Serpente','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em GoSnake.'),
('gosnake_cosmos','gosnake','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para GoSnake.'),
('fuitcort_jade','fuitcort','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de FuitCort.'),
('fuitcort_guardian','fuitcort','Guardião da Lâmina','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em FuitCort.'),
('fuitcort_cosmos','fuitcort','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para FuitCort.'),
('interball_jade','interball','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de InterBall.'),
('interball_guardian','interball','Guardião da Arena','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em InterBall.'),
('interball_cosmos','interball','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para InterBall.'),
('interdance_jade','interdance','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de InterDance.'),
('interdance_guardian','interdance','Guardião do Ritmo','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em InterDance.'),
('interdance_cosmos','interdance','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para InterDance.'),
('house_jade','house','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Rua das Descobertas.'),
('house_guardian','house','Guardião das Descobertas','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Rua das Descobertas.'),
('house_cosmos','house','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Rua das Descobertas.'),
('math_jade','math','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Torre da Matemática.'),
('math_guardian','math','Guardião dos Números','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Torre da Matemática.'),
('math_cosmos','math','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Torre da Matemática.'),
('words_jade','words','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Ponte das Palavras.'),
('words_guardian','words','Guardião das Palavras','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Ponte das Palavras.'),
('words_cosmos','words','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Ponte das Palavras.'),
('robot_jade','robot','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Rota do Robô.'),
('robot_guardian','robot','Guardião da Rota','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Rota do Robô.'),
('robot_cosmos','robot','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Rota do Robô.'),
('memory_jade','memory','Aura de Jade','aura','Raro','4','#54ead2','#86aaff','Brilho de cristal e moldura de jade no cenário de Memória em Inglês.'),
('memory_guardian','memory','Guardião da Memória','companion','Épico','7','#ffc96a','#63e7e5','Mascote animado no HUD que acompanha você em Memória em Inglês.'),
('memory_cosmos','memory','Aura Cósmica','aura','Lendário','12','#b7a1ff','#ffb9df','Cristais, estrelas e moldura cósmica para Memória em Inglês.')
on conflict(id) do update set name=excluded.name,price=excluded.price,description=excluded.description,color=excluded.color,secondary=excluded.secondary;
notify pgrst, 'reload schema';
commit;
