begin;
alter table private.egg_bots drop constraint egg_bots_id_check;
alter table private.egg_bots add constraint egg_bots_id_check check(id between 1 and 140);
alter table private.egg_bots alter column room_id drop not null;
alter table private.egg_bots add column game text not null default 'egg' check(game in ('egg','bairro','craft','descubra','tower','shark','rush','bounce','fruit','gosnake','fuitcort','interball','interdance','house','math','words','robot','memory')),
 add column game_progress jsonb not null default '{}';
alter table private.box_rooms drop constraint box_room_owner_kind;
alter table private.box_rooms add constraint box_room_owner_kind check((automated and owner_id is null and is_public and game in ('egg','bairro','craft')) or (not automated and owner_id is not null));
insert into private.egg_bots(id,name,next_login_at) select i,'Jogador '||lpad(i::text,3,'0'),private.egg_bot_login_after(i,now()+make_interval(secs=>10+random()*350)) from generate_series(71,140)i;
-- Keep original identities, wallets and rankings. New characters start at zero.
update private.egg_bots set name='Jogador '||lpad(id::text,3,'0'),is_online=false,tick_seconds=0,
 next_login_at=private.egg_bot_login_after(id,now()+make_interval(secs=>10+random()*350)) where id between 1 and 70;
insert into private.box_rooms(owner_id,game,is_public,automated,virtual_capacity,closed,expires_at)
 select null,g,true,true,1+i%3,true,now()+interval '4 hours' from unnest(array['bairro','craft'])g cross join generate_series(1,8)i;

create or replace function private.egg_bot_sessions(p_now timestamptz,p_from timestamptz) returns jsonb
language plpgsql volatile set search_path='' as $$
declare b record;chosen uuid;selected_game text;occupants integer;people integer;cap integer;
 games constant text[]:=array['egg','bairro','craft','descubra','tower','shark','rush','bounce','fruit','gosnake','fuitcort','interball','interdance','house','math','words','robot','memory'];
begin
 update private.egg_bots set tick_seconds=case when is_online then greatest(0,least(15,extract(epoch from least(p_now,session_until)-greatest(p_from,p_now-interval '15 seconds',session_started_at)))) else 0 end where id between 1 and 140;
 update private.egg_bots set is_online=false,next_login_at=private.egg_bot_login_after(id,p_now+make_interval(secs=>480+random()*2220)) where is_online and session_until<=p_now;
 for b in select * from private.egg_bots where is_online and room_id is not null order by id desc loop
  select virtual_capacity into cap from private.box_rooms where id=b.room_id;
  select count(*) into occupants from private.egg_bots where room_id=b.room_id and is_online;
  select count(*) into people from private.box_members where room_id=b.room_id and seen_at>p_now-interval '30 seconds';
  if occupants>least(cap,4-people) then update private.egg_bots set is_online=false,next_login_at=private.egg_bot_login_after(id,p_now+make_interval(secs=>480+random()*2220)) where id=b.id;end if;
 end loop;
 for b in select * from private.egg_bots where not is_online and next_login_at<=p_now order by next_login_at,id loop
  if private.egg_bot_login_after(b.id,p_now)>p_now then update private.egg_bots set next_login_at=private.egg_bot_login_after(b.id,p_now) where id=b.id;continue;end if;
  -- 5 is coprime with 18: each character visits every catalog game over 18
  -- logins. Different starting offsets prevent synchronized migrations.
  selected_game:=games[1+(b.id-1+b.session_number*5)%18];chosen:=null;
  if selected_game in ('egg','bairro','craft') then
   select r.id into chosen from private.box_rooms r where r.automated and r.game=selected_game
    and (select count(*) from private.egg_bots a where a.room_id=r.id and a.is_online)<r.virtual_capacity
    and (select count(*) from private.egg_bots a where a.room_id=r.id and a.is_online)+(select count(*) from private.box_members m where m.room_id=r.id and m.seen_at>p_now-interval '30 seconds')<4
    order by random() limit 1;
   if chosen is null then update private.egg_bots set next_login_at=p_now+make_interval(secs=>30+random()*120) where id=b.id;continue;end if;
   update private.box_rooms set closed=false,expires_at=p_now+interval '4 hours' where id=chosen;
  end if;
  update private.egg_bots set game=selected_game,room_id=chosen,is_online=true,session_number=session_number+1,session_started_at=p_now,
   session_until=p_now+make_interval(secs=>600+random()*1500),tick_seconds=0,push_queue='[]',tick_pushes='[]',push_visual=null where id=b.id;
 end loop;
 return(select jsonb_object_agg(participant.id,jsonb_build_object('online',participant.is_online,'number',participant.session_number,'seconds',participant.tick_seconds,'game',participant.game,'room',participant.room_id,'world',case when participant.game='craft' then r.world else null end)) from private.egg_bots participant left join private.box_rooms r on r.id=participant.room_id);
end $$;

-- Evolve the leased protocol, retaining its authentication, daily credit,
-- exactly-once push consumption, and stale-result protections.
do $patch$
declare f text;anchor text;
begin
 f:=pg_get_functiondef('public.box_bot_tick(text,text,uuid,text,jsonb)'::regprocedure);
 f:=regexp_replace(f,'\m70\M','140','g');
 f:=replace(f,'2000000','6000000');
 anchor:='   elapsed:=b.tick_seconds;';
 if position(anchor in f)=0 then raise exception 'worker_commit_changed';end if;
 f:=replace(f,anchor,anchor||$insert$
   if item#>>'{progress,game}' is distinct from b.game then raise exception 'game_checkpoint_mismatch';end if;
   update private.egg_bots set game_progress=jsonb_set(game_progress,array[game],item->'progress') where id=b.id;
   perform private.catalog_bot_edits(b.id,coalesce(item->'edits','[]'));
$insert$);
 execute f;
 f:=pg_get_functiondef('public.box_egg_bot_push(uuid,integer,uuid)'::regprocedure);
 f:=regexp_replace(f,'\m70\M','140','g');execute f;
 f:=pg_get_functiondef('private.egg_bot_push_snapshot(timestamptz)'::regprocedure);
 f:=regexp_replace(f,'\m70\M','140','g');execute f;
end $patch$;

create function private.catalog_bot_edits(p_bot integer,p_edits jsonb) returns void
language plpgsql set search_path='' as $$
declare b private.egg_bots%rowtype;r private.box_rooms%rowtype;e jsonb;k text;x integer;y integer;z integer;block integer;
begin
 select * into b from private.egg_bots where id=p_bot and game='craft' and is_online;
 if not found or jsonb_typeof(p_edits)<>'array' or jsonb_array_length(p_edits)>5 then return;end if;
 select * into r from private.box_rooms where id=b.room_id and game='craft' and not closed for update;
 if not found then return;end if;
 for e in select value from jsonb_array_elements(p_edits) loop
  x:=(e->>'x')::int;y:=(e->>'y')::int;z:=(e->>'z')::int;block:=(e->>'block')::int;k:=x||','||y||','||z;
  -- Bot building is additive only: never remove or replace a player's edits.
  if x between 0 and 47 and y between 1 and 29 and z between 0 and 47 and block between 1 and 10
   and not(r.world?k) and (select count(*) from jsonb_object_keys(r.world))<2048
   and not exists(select 1 from private.box_members m where m.room_id=r.id and m.seen_at>now()-interval '30 seconds'
    and (m.state->>'x')::float between x-1 and x+2 and (m.state->>'z')::float between z-1 and z+2 and (m.state->>'y')::float between y-2 and y+2) then
   update private.box_rooms set world=jsonb_set(world,array[k],to_jsonb(block)),revision=revision+1 where id=r.id returning * into r;
  end if;
 end loop;
end $$;
revoke all on function private.catalog_bot_edits(integer,jsonb) from public,anon,authenticated,service_role;

-- Existing chat UI, reactions and reports also handle virtual messages. There
-- are no fabricated auth identities and no bypass of pre-publication review.
alter table private.box_chat_messages alter column user_id drop not null,alter column identity_id drop not null;
alter table private.box_chat_messages add column bot_id integer references private.egg_bots(id),add column bot_session integer;
alter table private.box_chat_messages add constraint box_chat_author_kind check(
 (bot_id is null and user_id is not null and identity_id is not null and bot_session is null) or
 (bot_id is not null and user_id is null and identity_id is null and bot_session is not null));
create index box_chat_bot_time on private.box_chat_messages(bot_id,created_at) where bot_id is not null;
create unique index box_chat_bot_request on private.box_chat_messages(bot_id,request_id) where bot_id is not null;

create function public.box_bot_chat(p_token text,p_action text,p_message uuid default null,p_status text default null,p_reason text default null) returns jsonb
language plpgsql security definer set search_path='' as $$
declare b record;m private.box_chat_messages%rowtype;template_text text;context jsonb;
begin
 if not exists(select 1 from private.egg_bot_control where id and enabled and token_hash=sha256(convert_to(p_token,'UTF8'))) then return jsonb_build_object('error','unauthorized');end if;
 perform pg_advisory_xact_lock(hashtext('box-virtual-chat'));
 if p_action='finish' then
  select * into m from private.box_chat_messages where id=p_message and bot_id is not null for update;
  if not found then return jsonb_build_object('error','not_found');end if;
  if m.status<>'pending' then return jsonb_build_object('status',m.status);end if;
  if p_status is null or p_status not in ('approved','blocked','error') then raise exception 'invalid_status';end if;
  if p_status='approved' and (m.created_at<now()-interval '60 seconds' or not exists(select 1 from private.egg_bots a join private.box_rooms r on r.id=a.room_id where a.id=m.bot_id and a.room_id=m.room_id and a.is_online and a.session_until>now() and a.session_number=m.bot_session and not r.closed and r.expires_at>now()) or not exists(select 1 from private.box_members where room_id=m.room_id and seen_at>now()-interval '30 seconds')) then p_status:='error';end if;
  update private.box_chat_messages set status=p_status,reason=left(p_reason,80),approved_at=case when p_status='approved' then now() end where id=m.id;
  return jsonb_build_object('status',p_status);
 end if;
 if p_action<>'reserve' then return jsonb_build_object('error','invalid_action');end if;
 -- Maximum one candidate per tick; no autonomous conversations without people,
 -- no responses to unreviewed text, no bot-to-bot loops or private messages.
 select a.* into b from private.egg_bots a join private.box_rooms r on r.id=a.room_id
 where a.is_online and a.session_until>now() and a.seen_at>now()-interval '45 seconds' and not r.closed and r.expires_at>now()
 and exists(select 1 from private.box_members where room_id=a.room_id and seen_at>now()-interval '30 seconds')
 and not exists(select 1 from private.box_chat_messages where bot_id is not null and room_id=a.room_id and created_at>now()-interval '2 minutes')
 and not exists(select 1 from private.box_chat_messages where bot_id=a.id and created_at>now()-interval '5 minutes')
 and (select count(*) from private.box_chat_messages where bot_id=a.id and bot_session=a.session_number)<3
 and (select count(*) from private.box_chat_messages where bot_id=a.id and created_at>now()-interval '24 hours')<20
 and (not exists(select 1 from private.box_chat_messages where bot_id is not null and room_id=a.room_id and created_at>now()-interval '15 minutes')
  or exists(select 1 from private.box_chat_messages where room_id=a.room_id and bot_id is null and status='approved' and approved_at>now()-interval '45 seconds' and lower(trim(body)) ~ '^(oi|ola|olá|bom dia|boa tarde|boa noite|vamos jogar|boa partida)[!.? ]*$'))
 order by random() limit 1;
 if not found then return jsonb_build_object('empty',true);end if;
 template_text:=case b.game when 'egg' then 'Olá! Sou um personagem virtual. Boa partida e boa coleta de ovos!'
 when 'craft' then 'Olá! Sou um personagem virtual. Boa construção!'
 else 'Olá! Sou um personagem virtual. Boa exploração pelo bairro!' end;
 insert into private.box_chat_messages(request_id,room_id,code,body,bot_id,bot_session)
 values(gen_random_uuid(),b.room_id,b.name||' · virtual',template_text,b.id,b.session_number) returning * into m;
 select coalesce(jsonb_agg(jsonb_build_object('code',code,'body',body)),'[]') into context from(select code,body from private.box_chat_messages where room_id=b.room_id and status='approved' and approved_at>now()-interval '10 minutes' order by approved_at desc limit 6)t;
 return jsonb_build_object('id',m.id,'body',m.body,'code',m.code,'context',context);
end $$;
revoke all on function public.box_bot_chat(text,text,uuid,text,text) from public,anon,authenticated;
grant execute on function public.box_bot_chat(text,text,uuid,text,text) to service_role;

-- Admin review must include virtual authors even though they have no identity row.
do $review$
declare f text;
begin
 f:=pg_get_functiondef('public.box_chat_review(uuid)'::regprocedure);
 f:=replace(f,'from private.box_chat_messages m join private.box_chat_identities i','from private.box_chat_messages m left join private.box_chat_identities i');
 f:=replace(f,'  if not found then raise exception ''forbidden'' using errcode=''42501'';end if;',
 $insert$  if not found and v_role='integro_admin' then
   update private.box_chat_messages set status='blocked',reason='human_review' where id=p_hide and bot_id is not null;
  end if;
  if not found then raise exception 'forbidden' using errcode='42501';end if;$insert$);
 execute f;
end $review$;
update private.egg_bot_control set lease=null,lease_until=null where id;
notify pgrst,'reload schema';
commit;
