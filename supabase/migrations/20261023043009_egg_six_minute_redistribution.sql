-- Six-minute solidarity fund. Only taxes collected after activation fund the program.
-- No asynchronous edits of game saves: allocated credits are applied on the next revisioned save/load.
create table if not exists private.egg_solidarity_fund (
 singleton boolean primary key default true check(singleton), started_at timestamptz not null default now(),
 last_end timestamptz not null default date_bin(interval '6 minutes',now(),timestamptz '2000-01-01'),
 collected bigint not null default 0 check(collected>=0), allocated bigint not null default 0 check(allocated>=0),
 reserve bigint not null default 0 check(reserve>=0), check(allocated+reserve=floor(collected::numeric*30/100))
);
insert into private.egg_solidarity_fund(singleton) values(true) on conflict do nothing;
create table if not exists private.egg_solidarity_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade, wealth_peak bigint not null default 0,
 last_played timestamptz
);
create table if not exists private.egg_solidarity_activity (
 cycle timestamptz not null,user_id uuid not null references auth.users(id) on delete cascade,
 seconds numeric not null check(seconds between 0 and 360),primary key(cycle,user_id)
);
create index if not exists egg_solidarity_activity_user_idx on private.egg_solidarity_activity(user_id,cycle desc);
create table if not exists private.egg_solidarity_cycles (
 ends_at timestamptz primary key,collected bigint not null,budget bigint not null,distributed bigint not null,
 recipients integer not null, reserve bigint not null
);
create table if not exists private.egg_solidarity_credits (
 id uuid primary key default gen_random_uuid(),cycle timestamptz not null references private.egg_solidarity_cycles(ends_at),
 user_id uuid not null references auth.users(id) on delete cascade,amount bigint not null check(amount>0),
 band integer not null check(band between 1 and 4),active boolean not null,wealth bigint not null,
 credited_at timestamptz,acknowledged_at timestamptz,unique(cycle,user_id)
);
create index if not exists egg_solidarity_credits_user_idx on private.egg_solidarity_credits(user_id,cycle desc);
create index if not exists egg_solidarity_credits_pending_idx on private.egg_solidarity_credits(user_id,cycle) where credited_at is null;
create index if not exists egg_solidarity_credits_unread_idx on private.egg_solidarity_credits(user_id) where credited_at is not null and acknowledged_at is null;
create index if not exists egg_income_tax_ledger_created_idx on private.egg_income_tax_ledger(created_at);
alter table private.egg_solidarity_fund enable row level security;
alter table private.egg_solidarity_profiles enable row level security;
alter table private.egg_solidarity_activity enable row level security;
alter table private.egg_solidarity_cycles enable row level security;
alter table private.egg_solidarity_credits enable row level security;
revoke all on private.egg_solidarity_fund,private.egg_solidarity_profiles,private.egg_solidarity_activity,private.egg_solidarity_cycles,private.egg_solidarity_credits from public,anon,authenticated;

create or replace function private.egg_economic_wealth(s jsonb) returns bigint
language plpgsql immutable security invoker set search_path='' as $$
declare cfg jsonb:='{"upgrades":{"boots":{"name":"T\u00eanis velozes","icon":"\ud83d\udc5f","desc":"+0,8 de velocidade por n\u00edvel.","max":10,"base":160},"energy":{"name":"Mais f\u00f4lego","icon":"\ud83d\udca8","desc":"+30 de energia para disparar.","max":5,"base":180},"pen":{"name":"Curral maior","icon":"\ud83c\udfe1","desc":"+2 espa\u00e7os para ovos e criaturas.","max":10,"base":300},"incubator":{"name":"Ninho aquecido","icon":"\ud83e\udd5a","desc":"O ovo choca 1,5 s mais r\u00e1pido.","max":3,"base":200},"gloves":{"name":"Luvas de transporte","icon":"\ud83e\udde4","desc":"Corra 4% mais r\u00e1pido carregando o ovo, por n\u00edvel.","max":4,"base":360},"springs":{"name":"Molas de salto","icon":"\ud83e\udd98","desc":"Pule mais alto para superar obst\u00e1culos.","max":3,"base":240},"hydration":{"name":"Garrafa esportiva","icon":"\ud83d\udca7","desc":"+6 de f\u00f4lego recuperado por segundo, por n\u00edvel.","max":4,"base":320},"coach":{"name":"Esteira profissional","icon":"\ud83c\udfc3","desc":"Ganhe 25% mais treino por segundo, por n\u00edvel.","max":4,"base":400},"charm":{"name":"Medalha do criador","icon":"\ud83c\udfc5","desc":"Receba 10% a mais por criatura vendida, por n\u00edvel.","max":3,"base":600},"turbo":{"name":"Impulso turbo","icon":"\ud83d\ude80","desc":"Dispare 10% mais r\u00e1pido, por n\u00edvel.","max":3,"base":440}},"items":{"astronautHelmet":26000,"pirateHat":11200,"wizardHat":38000,"ninjaBand":8800,"sharkHood":140000,"mushroomCap":19200,"flowerCrown":120000,"antlers":280000,"samuraiHelm":850000,"monocle":14000,"heartGlasses":24000,"snowGoggles":180000,"foxMask":320000,"dragonMask":680000,"owlMask":550000,"rainbowVisor":420000,"divingMask":110000,"snailPack":32000,"turtleShell":160000,"guitar":240000,"surfboard":360000,"balloonPack":480000,"butterflyWings":720000,"mechanicalWings":2200000,"conductorCap":7200,"truffleCrown":120000,"auroraHelmet":480000,"neonGlasses":16800,"starMask":650000,"conductorGoggles":36000,"leafMask":220000,"stationPack":150000,"cloudSails":380000,"magneticCape":3200000,"crown":480,"headphones":240,"halo":1100,"goggles":320,"wings":840,"cape":400,"pilotCap":1700,"safariHat":6000,"iceTiara":12000,"stormHelm":180000,"solarCrown":750000,"starGlasses":8800,"cyberVisor":18000,"butterflyMask":36000,"royalMask":350000,"explorerPack":4800,"beeWings":15200,"jetpack":26000,"phoenixWings":120000,"auroraCape":250000,"cometPack":500000,"infinityWings":3000000,"meadow":0,"candy":3000,"space":6000,"bamboo":4000,"carAurora":10000000,"carRoyal":30000000,"jetAurora":80000000,"jetImperial":180000000,"skateBreeze":2850,"skateNeon":25500,"skateAurora":520000,"skateIntegro":4200000,"scooterPort":5400,"scooterComet":112000,"scooterGalaxy":720000,"scooterIntegro":6300000,"bubble":1800,"frost":3000,"doubleJump":2400,"endurance":3600,"rush":4800,"trainingBoost":8800,"hatchBoost":7200,"incomeBoost":18000,"shield":120,"juice":70},"worlds":[80,140,230,360,550,850,1300,1900,2700,3700,5000,6800,9500,13500,18000,24000,32000,42000,56000,75000,800000]}';pets numeric:=0;assets numeric:=0;v numeric;r numeric;m numeric;p jsonb;k text;d jsonb;level integer;i integer;
begin
 for p in select value from jsonb_array_elements(coalesce(s->'creatures','[]')) union all select value from jsonb_array_elements(coalesce(s->'eggs','[]')) loop
  r:=case p->>'rarity' when 'rare' then 3 when 'epic' then 5 when 'legendary' then 8 when 'secret' then 12 else 1 end;
  m:=case p->>'mutation' when 'gold' then 1.5 when 'rainbow' then 2 when 'cosmic' then 3 else 1 end;
  if (p->>'world')::integer=20 then v:=case p->>'rarity' when 'rare' then 900000 when 'epic' then 1000000 when 'legendary' then 2000000 when 'secret' then 3000000 else 800000 end;
  else v:=coalesce((cfg->'worlds'->>((p->>'world')::integer))::numeric,0)*r*m;end if;
  pets:=pets+v;
 end loop;
 for k in select distinct value from jsonb_array_elements_text(coalesce(s->'accessories','[]')||coalesce(s->'vehicles','[]')||coalesce(s->'decorations','[]')) loop
  assets:=assets+coalesce((cfg->'items'->>k)::numeric,0);
 end loop;
 for k,d in select key,value from jsonb_each(cfg->'upgrades') loop
  level:=least((d->>'max')::integer,greatest(0,coalesce((s->'upgrades'->>k)::integer,0)));
  if level>0 then for i in 1..level loop assets:=assets+round((d->>'base')::numeric*power(i::numeric,2.4));end loop;end if;
 end loop;
 -- Four hours of unboosted production prevents an apparently cash-poor, productive corral qualifying.
 return ceil(greatest(coalesce((s->>'coins')::numeric,0)+pets*1.4+assets,pets*4.2))::bigint;
end $$;
revoke all on function private.egg_economic_wealth(jsonb) from public,anon,authenticated;
insert into private.egg_solidarity_profiles(user_id,wealth_peak,last_played)
 select user_id,private.egg_economic_wealth(data),updated_at from private.box_egg_saves where data is not null
on conflict(user_id) do update set wealth_peak=greatest(egg_solidarity_profiles.wealth_peak,excluded.wealth_peak);

create or replace function private.egg_solidarity_track(u uuid,old_save jsonb,new_save jsonb,last_saved timestamptz) returns void
language plpgsql security invoker set search_path='' as $$
declare t timestamptz:=clock_timestamp();dt numeric;cursor_at timestamptz;edge timestamptz;slot timestamptz;portion numeric;
begin
 dt:=least(60,greatest(0,extract(epoch from(t-last_saved))),greatest(0,
 coalesce((new_save->'tax'->>'period')::numeric,0)*300+coalesce((new_save->'tax'->>'seconds')::numeric,0)
 -coalesce((old_save->'tax'->>'period')::numeric,0)*300-coalesce((old_save->'tax'->>'seconds')::numeric,0)));
 insert into private.egg_solidarity_profiles(user_id,wealth_peak,last_played)
 values(u,private.egg_economic_wealth(new_save),case when dt>0 then t end)
 on conflict(user_id) do update set wealth_peak=greatest(egg_solidarity_profiles.wealth_peak,excluded.wealth_peak),last_played=coalesce(excluded.last_played,egg_solidarity_profiles.last_played);
 if dt<=0 then return;end if;
 cursor_at:=greatest(t-dt*interval '1 second',(select started_at from private.egg_solidarity_fund where singleton));
 while cursor_at<t loop
  slot:=date_bin(interval '6 minutes',cursor_at,timestamptz '2000-01-01');edge:=least(t,slot+interval '6 minutes');portion:=extract(epoch from(edge-cursor_at));
  insert into private.egg_solidarity_activity(cycle,user_id,seconds) values(slot,u,portion)
  on conflict(cycle,user_id) do update set seconds=least(360,egg_solidarity_activity.seconds+excluded.seconds);
  cursor_at:=edge;
 end loop;
end $$;
revoke all on function private.egg_solidarity_track(uuid,jsonb,jsonb,timestamptz) from public,anon,authenticated;

create or replace function private.egg_distribute_solidarity(p_until timestamptz default now()) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare f private.egg_solidarity_fund%rowtype;e timestamptz;stop_at timestamptz;taxes bigint;budget bigint;added bigint;given bigint;people integer;iterations integer:=0;
begin
 perform pg_advisory_xact_lock(832137);
 select * into f from private.egg_solidarity_fund where singleton for update;
 stop_at:=date_bin(interval '6 minutes',least(p_until,now()),timestamptz '2000-01-01');
 while f.last_end<stop_at and iterations<240 loop
  e:=f.last_end+interval '6 minutes';iterations:=iterations+1;
  select coalesce(sum(amount),0) into taxes from private.egg_income_tax_ledger where created_at>=greatest(f.last_end,f.started_at) and created_at<e;
  added:=floor((f.collected+taxes)::numeric*30/100)-floor(f.collected::numeric*30/100);budget:=f.reserve+added;
  insert into private.egg_solidarity_cycles(ends_at,collected,budget,distributed,recipients,reserve) values(e,taxes,budget,0,0,budget);
  with candidates as (
   select s.user_id,greatest(p.wealth_peak,private.egg_economic_wealth(s.data))+coalesce((select sum(c.amount) from private.egg_solidarity_credits c where c.user_id=s.user_id and c.credited_at is null),0) wealth,
    coalesce(a.seconds,0)>=300 active,
    coalesce((select sum(c.amount) from private.egg_solidarity_credits c where c.user_id=s.user_id and c.cycle>=(date_trunc('day',e at time zone 'America/Manaus') at time zone 'America/Manaus') and c.cycle<e),0) today
   from private.box_egg_saves s join private.egg_solidarity_profiles p using(user_id)
   left join private.egg_solidarity_activity a on a.user_id=s.user_id and a.cycle=f.last_end
   where e=stop_at and p.last_played>=e-interval '24 hours' and coalesce((s.data->>'delivered')::integer,0)>0 and private.box_can_play(s.user_id)
  ), bands as (
   select *,case when wealth<100000 then 1 when wealth<1000000 then 2 when wealth<5000000 then 3 else 4 end band from candidates where wealth<10000000
  ), weighted as (
   select *, (5-band)*(case when active then 5 else 1 end) weight,
    least((array[100,60,30,10])[band]*(case when active then 5 else 1 end),greatest(0,(array[2000,1200,600,200])[band]*(case when active then 5 else 1 end)-today)) cap from bands
  ), payouts as (
   select *,least(cap,floor(budget::numeric*weight/nullif(sum(weight) over(),0)))::bigint amount from weighted where cap>0
  ) insert into private.egg_solidarity_credits(cycle,user_id,amount,band,active,wealth)
    select e,user_id,amount,band,active,wealth from payouts where amount>0;
  select coalesce(sum(amount),0),count(*) into given,people from private.egg_solidarity_credits where cycle=e;
  f.collected:=f.collected+taxes;f.allocated:=f.allocated+given;f.reserve:=budget-given;f.last_end:=e;
  update private.egg_solidarity_cycles set distributed=given,recipients=people,reserve=f.reserve where ends_at=e;
 end loop;
 update private.egg_solidarity_fund set last_end=f.last_end,collected=f.collected,allocated=f.allocated,reserve=f.reserve where singleton;
 -- Keep recent participation; immutable allocations and tax receipts remain available for audit.
 delete from private.egg_solidarity_activity where cycle<now()-interval '7 days';
 return jsonb_build_object('cycles',iterations,'collected',f.collected,'allocated',f.allocated,'reserve',f.reserve,'last_end',f.last_end);
end $$;
revoke all on function private.egg_distribute_solidarity(timestamptz) from public,anon,authenticated;

create or replace function private.egg_solidarity_apply(u uuid,s jsonb) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare r record;amount bigint:=0;room_left bigint:=greatest(0,1000000000-coalesce((s->>'coins')::bigint,0));
begin
 for r in select id,egg_solidarity_credits.amount from private.egg_solidarity_credits where user_id=u and credited_at is null order by cycle,id for update loop
  if r.amount>room_left-amount then exit;end if;
  amount:=amount+r.amount;update private.egg_solidarity_credits set credited_at=now() where id=r.id;
 end loop;
 if amount>0 then s:=jsonb_set(s,'{coins}',to_jsonb(coalesce((s->>'coins')::bigint,0)+amount));end if;
 return s;
end $$;
revoke all on function private.egg_solidarity_apply(uuid,jsonb) from public,anon,authenticated;

create or replace function private.egg_solidarity_status(p_action text,p_id uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid();s jsonb;wealth bigint;band integer;active_seconds numeric;slot timestamptz:=date_bin(interval '6 minutes',now(),timestamptz '2000-01-01');
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if p_action='solidarity_ack' then update private.egg_solidarity_credits set acknowledged_at=coalesce(acknowledged_at,now()) where user_id=u and (p_id is null or id=p_id) and credited_at is not null;end if;
 select data into s from private.box_egg_saves where user_id=u;
 select greatest(wealth_peak,private.egg_economic_wealth(s)) into wealth from private.egg_solidarity_profiles where user_id=u;
 wealth:=coalesce(wealth,private.egg_economic_wealth(s));band:=case when wealth<100000 then 1 when wealth<1000000 then 2 when wealth<5000000 then 3 when wealth<10000000 then 4 else 0 end;
 select seconds into active_seconds from private.egg_solidarity_activity where user_id=u and cycle=slot;
 return jsonb_build_object('band',band,'wealth',wealth,'seconds',coalesce(active_seconds,0),'next',slot+interval '6 minutes','now',now(),
 'pending',coalesce((select sum(amount) from private.egg_solidarity_credits where user_id=u and credited_at is null),0),
 'received',coalesce((select sum(amount) from private.egg_solidarity_credits where user_id=u and credited_at is not null),0),
 'unread',coalesce((select sum(amount) from private.egg_solidarity_credits where user_id=u and credited_at is not null and acknowledged_at is null),0),
 'history',coalesce((select jsonb_agg(x order by x.cycle desc) from(select c.cycle,c.amount,c.band,c.active,c.credited_at from private.egg_solidarity_credits c where c.user_id=u order by c.cycle desc limit 20)x),'[]'::jsonb));
end $$;
revoke all on function private.egg_solidarity_status(text,uuid) from public,anon,authenticated;

-- Guard old clients, track active gameplay and atomically apply pending benefits.
do $$declare source text;anchor text;begin
 source:=pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure);
 if position('private.egg_solidarity_apply' in source)=0 then
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''solidarity_status'',''solidarity_ack'') then return private.egg_solidarity_status(p_action,p_id);end if; if p_action=''capabilities''');
  source:=replace(source,'if p_revision<>s.revision then','if coalesce((p_data->>''economyVersion''),'''')<>''2'' then return jsonb_build_object(''error'',''economy_update_required'');end if; if p_revision<>s.revision then');
  anchor:='update private.box_egg_saves set data=p_data,revision=revision+1,updated_at=now() where user_id=u returning * into s;';
  if position(anchor in source)=0 then raise exception 'save_anchor_missing';end if;
  source:=replace(source,anchor,'perform private.egg_solidarity_track(u,s.data,p_data,s.updated_at); z:=coalesce((p_data->>''coins'')::numeric,0);p_data:=private.egg_solidarity_apply(u,p_data);z:=coalesce((p_data->>''coins'')::numeric,0)-z; '||anchor);
  source:=replace(source,'return jsonb_build_object(''revision'',s.revision);','return jsonb_build_object(''revision'',s.revision,''solidarity_credit'',z);');
  anchor:='if p_action=''load'' then return jsonb_build_object(''save'',s.data,''revision'',s.revision);end if;';
  if position(anchor in source)=0 then raise exception 'load_anchor_missing';end if;
  source:=replace(source,anchor,'if p_action=''load'' then if s.data is not null then result:=private.egg_solidarity_apply(u,s.data);if result is distinct from s.data then update private.box_egg_saves set data=result,revision=revision+1,updated_at=now() where user_id=u returning * into s;end if;end if;return jsonb_build_object(''save'',s.data,''revision'',s.revision);end if;');
  execute source;
 end if;
end $$;
-- pg_cron is already installed in production. The local SQL fixture supplies a stub.
select cron.schedule('egg-solidarity-six-minutes','*/6 * * * *','select private.egg_distribute_solidarity();');
