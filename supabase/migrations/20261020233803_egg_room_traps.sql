-- Consumable toy traps: server-priced purchases, server-position placement,
-- swept movement hits and exactly-once return of unused items.
create table if not exists private.egg_trap_stock (
 user_id uuid not null references auth.users(id) on delete cascade,
 kind text not null check(kind in ('bear','mine')), quantity integer not null default 0 check(quantity>=0),
 primary key(user_id,kind)
);
create table if not exists private.egg_trap_purchases (
 user_id uuid not null references auth.users(id) on delete cascade,
 request uuid not null,kind text not null check(kind in ('bear','mine')),created_at timestamptz not null default now(),
 primary key(user_id,request)
);
create table if not exists private.egg_traps (
 id uuid primary key,owner_id uuid not null references auth.users(id) on delete cascade,
 room_id uuid not null,kind text not null check(kind in ('bear','mine')),
 status text not null default 'placed' check(status in ('placed','spent','returned')),
 x real not null check(x between -9.5 and 9.5),z real not null check(z between -964 and 25),
 placed_at timestamptz not null default now(),victim_id uuid references auth.users(id) on delete set null,
 hit_at timestamptz,acked_at timestamptz
);
create index if not exists egg_traps_room_live on private.egg_traps(room_id,placed_at) where status='placed';
create index if not exists egg_traps_owner_live on private.egg_traps(owner_id) where status='placed';
create index if not exists egg_traps_victim_events on private.egg_traps(victim_id,hit_at) where status='spent';
alter table private.egg_trap_stock enable row level security;
alter table private.egg_trap_purchases enable row level security;
alter table private.egg_traps enable row level security;
revoke all on private.egg_trap_stock,private.egg_trap_purchases,private.egg_traps from public,anon,authenticated;

create or replace function private.egg_trap_return_stock() returns trigger
language plpgsql security invoker set search_path='' as $$
begin
 if old.status='placed' and new.status='returned' and exists(select 1 from auth.users where id=new.owner_id) then
  insert into private.egg_trap_stock(user_id,kind,quantity) values(new.owner_id,new.kind,1)
  on conflict(user_id,kind) do update set quantity=private.egg_trap_stock.quantity+1;
 end if;
 return new;
end $$;
drop trigger if exists egg_trap_return_stock on private.egg_traps;
create trigger egg_trap_return_stock after update of status on private.egg_traps for each row execute function private.egg_trap_return_stock();

create or replace function private.egg_trap_reap() returns void
language plpgsql security invoker set search_path='' as $$
begin
 with expired as (
  select t.id from private.egg_traps t where t.status='placed' and not exists (
   select 1 from private.box_members m join private.box_rooms r on r.id=m.room_id
   where m.user_id=t.owner_id and m.room_id=t.room_id and m.seen_at>now()-interval '30 seconds'
    and not r.closed and r.expires_at>now() and r.game='egg'
  ) order by t.id for update skip locked
 ) update private.egg_traps t set status='returned' from expired e where t.id=e.id and t.status='placed';
end $$;
create or replace function private.egg_trap_member_leave() returns trigger
language plpgsql security invoker set search_path='' as $$
begin
 update private.egg_traps set status='returned' where owner_id=old.user_id and room_id=old.room_id and status='placed';
 return old;
end $$;
drop trigger if exists egg_trap_member_leave on private.box_members;
create trigger egg_trap_member_leave before delete on private.box_members for each row execute function private.egg_trap_member_leave();
create or replace function private.egg_trap_room_close() returns trigger
language plpgsql security invoker set search_path='' as $$
begin
 if tg_op='DELETE' or new.closed then
  update private.egg_traps set status='returned' where room_id=old.id and status='placed';
 end if;
 if tg_op='DELETE' then return old;end if;return new;
end $$;
drop trigger if exists egg_trap_room_close on private.box_rooms;
create trigger egg_trap_room_close before update of closed or delete on private.box_rooms for each row execute function private.egg_trap_room_close();

create or replace function private.egg_trap_step() returns trigger
language plpgsql security invoker set search_path='' as $$
declare px double precision; pz double precision; ox double precision; oz double precision; dx double precision; dz double precision; len2 double precision; t private.egg_traps; f double precision;
begin
 if new.state->>'zone'<>'world' or coalesce((new.state->>'y')::double precision,99)>.65
  or not exists(select 1 from private.box_rooms r where r.id=new.room_id and r.game='egg' and not r.closed and r.expires_at>now())
  or exists(select 1 from private.egg_traps where victim_id=new.user_id and hit_at>now()-interval '1.5 seconds') then return new;end if;
 px:=(new.state->>'x')::double precision;pz:=(new.state->>'z')::double precision;
 if px is null or pz is null then return new;end if;
 ox:=coalesce((old.state->>'x')::double precision,px);oz:=coalesce((old.state->>'z')::double precision,pz);
 -- A jumping or stale/teleporting sample only tests the landing point.
 if old.seen_at<now()-interval '3 seconds' or coalesce((old.state->>'y')::double precision,99)>.65 or (px-ox)^2+(pz-oz)^2>25600 then ox:=px;oz:=pz;end if;
 dx:=px-ox;dz:=pz-oz;len2:=dx*dx+dz*dz;
 for t in select a.* from private.egg_traps a
  where a.room_id=new.room_id and a.status='placed' and a.owner_id<>new.user_id and a.placed_at<now()-interval '1 second'
   and exists(select 1 from private.box_members m where m.user_id=a.owner_id and m.room_id=a.room_id and m.seen_at>now()-interval '30 seconds')
   and a.x between least(ox,px)-1.1 and greatest(ox,px)+1.1 and a.z between least(oz,pz)-1.1 and greatest(oz,pz)+1.1
  order by a.placed_at,a.id for update of a skip locked
 loop
  f:=case when len2>0 then greatest(0,least(1,((t.x-ox)*dx+(t.z-oz)*dz)/len2)) else 1 end;
  if (t.x-(ox+f*dx))^2+(t.z-(oz+f*dz))^2<=1.21 then
   update private.egg_traps set status='spent',victim_id=new.user_id,hit_at=now() where id=t.id and status='placed';exit;
  end if;
 end loop;
 return new;
end $$;
drop trigger if exists egg_trap_step on private.box_members;
create trigger egg_trap_step after update of state on private.box_members for each row execute function private.egg_trap_step();

create or replace function private.box_egg_traps(action text,payload jsonb,room uuid,p_request uuid) returns jsonb
language plpgsql security invoker set search_path='' as $$
declare u uuid:=auth.uid(); k text:=payload->>'kind'; balance integer; previous text; m private.box_members; r private.box_rooms; existing private.egg_traps; result jsonb;
begin
 if u is null or not private.box_can_play(u) then raise exception 'box_access_denied' using errcode='42501';end if;
 if action not in ('trap_buy','trap_place','trap_state') then return jsonb_build_object('error','invalid_action');end if;
 if action='trap_buy' then
  if p_request is null or k is null or k not in ('bear','mine') then return jsonb_build_object('error','invalid_trap');end if;
  -- Wallet before any stock/room lock, matching the existing IntGem economy.
  insert into private.intgem_wallets(user_id) values(u) on conflict do nothing;
  select w.balance into balance from private.intgem_wallets w where w.user_id=u for update;
  select p.kind into previous from private.egg_trap_purchases p where p.user_id=u and p.request=p_request;
  if found then
   if previous<>k then return jsonb_build_object('error','request_changed');end if;
  else
   if balance<1 then return jsonb_build_object('error','insufficient_intgem');end if;
   insert into private.egg_trap_purchases(user_id,request,kind) values(u,p_request,k);
   update private.intgem_wallets w set balance=w.balance-1,updated_at=now() where w.user_id=u;
   insert into private.intgem_ledger(user_id,delta,kind,reference) values(u,-1,'purchase','egg-trap:'||p_request::text);
   insert into private.egg_trap_stock(user_id,kind,quantity) values(u,k,1)
    on conflict(user_id,kind) do update set quantity=private.egg_trap_stock.quantity+1;
  end if;
 elsif action='trap_state' then
  perform private.egg_trap_reap();
 end if;
 if action='trap_place' then
  if p_request is null or k is null or k not in ('bear','mine') then return jsonb_build_object('error','invalid_trap');end if;
  select * into r from private.box_rooms where id=room and game='egg' and not closed and expires_at>now() for update;
  if not found then return jsonb_build_object('error','not_member');end if;
  select * into m from private.box_members where user_id=u and room_id=room and seen_at>now()-interval '30 seconds';
  if not found then return jsonb_build_object('error','not_member');end if;
  select * into existing from private.egg_traps where id=p_request;
  if found then
   if existing.owner_id<>u or existing.room_id<>room or existing.kind<>k then return jsonb_build_object('error','request_changed');end if;
  else
   if m.state->>'zone' is distinct from 'world' or coalesce((m.state->>'y')::real,99)>.1 or m.state->>'x' is null or m.state->>'z' is null then return jsonb_build_object('error','ground_required');end if;
   if jsonb_typeof(payload->'position'->'x')='number' and jsonb_typeof(payload->'position'->'z')='number' and ((payload->'position'->>'x')::numeric-(m.state->>'x')::numeric)^2+((payload->'position'->>'z')::numeric-(m.state->>'z')::numeric)^2>.5625 then return jsonb_build_object('error','position_pending');end if;
   if (select count(*) from private.egg_traps where owner_id=u and status='placed')>=12 then return jsonb_build_object('error','trap_limit');end if;
   update private.egg_trap_stock set quantity=quantity-1 where user_id=u and kind=k and quantity>0;
   if not found then return jsonb_build_object('error','trap_empty');end if;
   insert into private.egg_traps(id,owner_id,room_id,kind,x,z) values(p_request,u,room,k,(m.state->>'x')::real,(m.state->>'z')::real);
  end if;
 end if;
 -- Acknowledgements belong only to this caller. Bounded lists prevent oversized RPC work.
 if jsonb_typeof(payload->'ack')='array' and jsonb_array_length(payload->'ack')<=32 then
  update private.egg_traps set acked_at=now() where victim_id=u and room_id=room and status='spent' and acked_at is null
   and id::text in (select jsonb_array_elements_text(payload->'ack'));
 end if;
 select jsonb_build_object('stock',coalesce((select jsonb_object_agg(kind,quantity) from private.egg_trap_stock where user_id=u),'{}'::jsonb),
  'balance',coalesce((select w.balance from private.intgem_wallets w where w.user_id=u),0),'now',now(),
  'traps',coalesce((select jsonb_agg(jsonb_build_object('id',t.id,'kind',t.kind,'x',t.x,'z',t.z,'mine',t.owner_id=u,'armed',t.placed_at<now()-interval '1 second') order by t.placed_at)
   from private.egg_traps t where t.room_id=room and t.status='placed'
    and exists(select 1 from private.box_members a where a.user_id=u and a.room_id=room and a.seen_at>now()-interval '30 seconds')
    and exists(select 1 from private.box_members b join private.box_rooms br on br.id=b.room_id where b.user_id=t.owner_id and b.room_id=room and b.seen_at>now()-interval '30 seconds' and not br.closed and br.expires_at>now())),'[]'::jsonb),
  'hits',coalesce((select jsonb_agg(jsonb_build_object('id',t.id,'kind',t.kind,'x',t.x,'z',t.z)) from private.egg_traps t where t.victim_id=u and t.room_id=room and t.status='spent' and t.acked_at is null and t.hit_at>now()-interval '30 seconds'
   and exists(select 1 from private.box_members a where a.user_id=u and a.room_id=room and a.seen_at>now()-interval '30 seconds')),'[]'::jsonb)) into result;
 return result;
end $$;
revoke all on function private.box_egg_traps(text,jsonb,uuid,uuid),private.egg_trap_step(),private.egg_trap_reap(),private.egg_trap_return_stock(),private.egg_trap_member_leave(),private.egg_trap_room_close() from public,anon,authenticated;
-- Dispatch before the existing advisory/save lock: no wallet/advisory inversion.
do $$ declare source text;begin
 select pg_get_functiondef('public.box_egg(text,integer,jsonb,uuid,integer,uuid,text,text,integer)'::regprocedure) into source;
 if position('private.box_egg_traps(' in source)=0 then
  if position('if p_action=''capabilities''' in source)=0 then raise exception 'box_egg_dispatcher_anchor_not_found';end if;
  source:=replace(source,'if p_action=''capabilities''','if p_action in (''trap_buy'',''trap_place'',''trap_state'') then return private.box_egg_traps(p_action,coalesce(p_data,''{}''::jsonb),p_room,p_id);end if; if p_action=''capabilities''');execute source;
 end if;
end $$;
-- Explicit leave is immediate; lost connections are returned after the 30s room
-- lease, on the next room inventory poll or by the minute reaper.
do $$ begin
 if exists(select 1 from pg_namespace where nspname='cron') then
  execute $q$select cron.schedule('egg-trap-return','* * * * *','select private.egg_trap_reap()')$q$;
 end if;
end $$;
