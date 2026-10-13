-- Authenticated public discovery; existing rooms remain invite-only.
begin;
alter table private.box_rooms add column if not exists is_public boolean not null default false;
alter table private.box_limits add column if not exists last_list timestamptz not null default '-infinity';
create index if not exists box_public_discovery on private.box_rooms(game,expires_at) where is_public and not closed;
create or replace function public.box_room(p_action text, p_room uuid default null, p_code text default null,
 p_game text default null, p_state jsonb default '{}'::jsonb, p_revision integer default -1,
 p_edit jsonb default null, p_slot integer default null)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
 uid uuid := auth.uid(); r private.box_rooms%rowtype; m private.box_members%rowtype;
 lim private.box_limits%rowtype; chosen integer; x double precision; y double precision;
 z double precision; yaw double precision; clean jsonb; peers jsonb; k text; b integer;
 ex integer; ey integer; ez integer; target uuid; edit_error text;
begin
 if uid is null or not exists(select 1 from public.profiles p where p.id=uid and p.role::text in
 ('responsavel','integro_admin','diretor','coordenacao','professor')) then
   raise exception 'box_access_denied' using errcode='42501';
 end if;
 if p_action is null or p_action not in ('list','create','create_public','join','join_public','sync','leave','close','kick') then
  return jsonb_build_object('error','invalid_action'); end if;
 insert into private.box_limits(user_id) values(uid) on conflict do nothing;
 select * into lim from private.box_limits where user_id=uid for update;
 if p_action='list' then
  if p_game is null or p_game not in ('egg','bairro','craft') then return jsonb_build_object('error','invalid_game');end if;
  if lim.last_list>clock_timestamp()-interval '2 seconds' then return jsonb_build_object('error','rate_limit');end if;
  update private.box_limits set last_list=clock_timestamp() where user_id=uid;
  return jsonb_build_object('rooms',coalesce((select jsonb_agg(to_jsonb(q)) from (
   select br.id,br.game,br.expires_at,count(bm.user_id)::integer as players,4 as capacity
   from private.box_rooms br join private.box_members bm on bm.room_id=br.id and bm.seen_at>now()-interval '30 seconds'
   where br.is_public and not br.closed and br.expires_at>now() and br.game=p_game
    and not exists(select 1 from private.box_blocks bb where bb.room_id=br.id and bb.user_id=uid)
   group by br.id order by count(bm.user_id) asc,br.expires_at desc,br.id limit 20
  ) q),'[]'::jsonb));
 end if;
 if p_action in ('create','create_public','join','join_public') then
  if lim.window_at < now()-interval '1 minute' then lim.window_at:=now();lim.attempts:=0;end if;
  if lim.create_at < now()-interval '1 hour' then lim.create_at:=now();lim.creates:=0;end if;
  if lim.attempts>=10 or (p_action in ('create','create_public') and lim.creates>=6) then return jsonb_build_object('error','rate_limit');end if;
  update private.box_limits set window_at=lim.window_at,attempts=lim.attempts+1,
   create_at=lim.create_at, creates=lim.creates+case when p_action in ('create','create_public') then 1 else 0 end where user_id=uid;
 end if;
 if p_action in ('create','create_public') then
  if p_game is null or p_game not in ('egg','bairro','craft') then return jsonb_build_object('error','invalid_game');end if;
  -- Expired game data is transient and has no connection to school or financial records.
  delete from private.box_rooms where expires_at < now()-interval '1 day';
  update private.box_rooms set closed=true where owner_id=uid and not closed;
  delete from private.box_members where user_id=uid;
  insert into private.box_rooms(owner_id,game,is_public) values(uid,p_game,p_action='create_public') returning * into r;
 elsif p_action='join' then
  if p_code is null or upper(p_code) !~ '^[0-9A-F]{12}$' then return jsonb_build_object('error','room_unavailable');end if;
  select * into r from private.box_rooms where code=upper(p_code) and not closed and expires_at>now() for update;
 elsif p_action='join_public' then
  select * into r from private.box_rooms where id=p_room and is_public and not closed and expires_at>now() for update;
 else
  select * into r from private.box_rooms where id=p_room and not closed and expires_at>now() for update;
 end if;
 if r.id is null then return jsonb_build_object('error','room_unavailable');end if;
 if exists(select 1 from private.box_blocks where room_id=r.id and user_id=uid) then return jsonb_build_object('error','room_unavailable');end if;
 select * into m from private.box_members where user_id=uid and room_id=r.id;
 if p_action in ('create','create_public','join','join_public') then
  delete from private.box_members where room_id=r.id and seen_at<now()-interval '30 seconds';
  if m.user_id is not null and m.seen_at<now()-interval '30 seconds' then m.user_id:=null;end if;
  if m.user_id is null then
   select s into chosen from generate_series(1,4) s where not exists(select 1 from private.box_members where room_id=r.id and slot=s) order by s limit 1;
   if chosen is null then return jsonb_build_object('error','room_full');end if;
   delete from private.box_members where user_id=uid;
   insert into private.box_members(user_id,room_id,slot) values(uid,r.id,chosen) returning * into m;
  end if;
 elsif m.user_id is null then return jsonb_build_object('error','not_member');
 end if;
 if p_action='close' then
  if r.owner_id<>uid then return jsonb_build_object('error','not_owner');end if;
  update private.box_rooms set closed=true where id=r.id;
  return jsonb_build_object('ok',true);
 elsif p_action='leave' then
  delete from private.box_members where user_id=uid and room_id=r.id;
  if r.owner_id=uid then update private.box_rooms set closed=true where id=r.id;end if;
  return jsonb_build_object('ok',true);
 elsif p_action='kick' then
  if r.owner_id<>uid then return jsonb_build_object('error','not_owner');end if;
  select user_id into target from private.box_members where room_id=r.id and slot=p_slot and user_id<>uid;
  if target is not null then
   insert into private.box_blocks(room_id,user_id) values(r.id,target) on conflict do nothing;
   delete from private.box_members where room_id=r.id and user_id=target;
  end if;
 elsif p_action='sync' then
  if lim.last_sync>clock_timestamp()-interval '200 milliseconds' then return jsonb_build_object('error','rate_limit');end if;
  update private.box_limits set last_sync=clock_timestamp() where user_id=uid;
  if p_state is null or jsonb_typeof(p_state)<>'object' or octet_length(p_state::text)>512 then return jsonb_build_object('error','invalid_state');end if;
  begin
   x:=(p_state->>'x')::double precision; y:=(p_state->>'y')::double precision;
   z:=(p_state->>'z')::double precision; yaw:=(p_state->>'yaw')::double precision;
  exception when others then return jsonb_build_object('error','invalid_state'); end;
  if x is null or y is null or z is null or yaw is null or not(x between -200 and 200 and y between -10 and 60 and z between -200 and 200 and yaw between -10000 and 10000) then return jsonb_build_object('error','invalid_state');end if;
  if coalesce(p_state->>'zone','') not in ('world','street','home','fashion','market','burger','gym') then return jsonb_build_object('error','invalid_state');end if;
  clean:=jsonb_build_object('x',x,'y',y,'z',z,'yaw',yaw,'zone',p_state->>'zone',
   'gesture',case when p_state->>'gesture' in ('wave','cheer') then p_state->>'gesture' else '' end);
  update private.box_members set state=clean,seen_at=now() where user_id=uid and room_id=r.id;
  if p_edit is not null and r.game='craft' then
   if jsonb_typeof(p_edit)<>'object' or octet_length(p_edit::text)>160 then return jsonb_build_object('error','invalid_edit');end if;
   begin
    ex:=(p_edit->>'x')::integer;ey:=(p_edit->>'y')::integer;ez:=(p_edit->>'z')::integer;b:=(p_edit->>'block')::integer;
   exception when others then return jsonb_build_object('error','invalid_edit');end;
   if ex is null or ey is null or ez is null or b is null or not(ex between 0 and 47 and ey between 1 and 29 and ez between 0 and 47 and b between 0 and 10)
    or sqrt(power(ex+0.5-x,2)+power(ey+0.5-y-1.5,2)+power(ez+0.5-z,2))>8 then edit_error:='invalid_edit';
   else
    k:=ex||','||ey||','||ez;
    if not(r.world ? k) and (select count(*) from jsonb_object_keys(r.world))>=2048 then edit_error:='world_limit';
    elsif b<>0 and exists(select 1 from private.box_members pm where pm.room_id=r.id and pm.seen_at>now()-interval '30 seconds'
      and (pm.state->>'x')::float between ex-0.3 and ex+1.3 and (pm.state->>'z')::float between ez-0.3 and ez+1.3
      and (pm.state->>'y')::float between ey-1.75 and ey+1) then edit_error:='occupied';
    else
     update private.box_rooms set world=jsonb_set(world,array[k],to_jsonb(b)),revision=revision+1 where id=r.id returning * into r;
    end if;
   end if;
  end if;
 end if;
 update private.box_members set seen_at=now() where user_id=uid and room_id=r.id;
 select coalesce(jsonb_agg(jsonb_build_object('slot',slot,'state',state) order by slot),'[]'::jsonb) into peers
  from private.box_members where room_id=r.id and seen_at>now()-interval '30 seconds';
 return jsonb_build_object('id',r.id,'code',case when r.is_public then null else r.code end,'public',r.is_public,'game',r.game,'slot',m.slot,'owner',r.owner_id=uid,
  'expires_at',r.expires_at,'players',peers,'revision',r.revision,'edit_error',edit_error,
  'world',case when p_revision<>r.revision then r.world else null end);
end;
$$;
revoke all on function public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer) from public,anon;
grant execute on function public.box_room(text,uuid,text,text,jsonb,integer,jsonb,integer) to authenticated;
notify pgrst, 'reload schema';
commit;
