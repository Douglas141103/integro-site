begin;
-- Isolated game tables: existing Integro Box rooms/economy are untouched.
create table private.descubra_rooms(
 id uuid primary key default gen_random_uuid(),
 code text unique not null default upper(substr(replace(gen_random_uuid()::text,'-',''),1,8)),
 owner_id uuid not null references auth.users(id) on delete cascade,
 is_public boolean not null default false,
 expires_at timestamptz not null default now()+interval '30 minutes',
 closed boolean not null default false,
 state jsonb not null default '{}'::jsonb
);
create table private.descubra_members(
 user_id uuid primary key references auth.users(id) on delete cascade,
 room_id uuid not null references private.descubra_rooms(id) on delete cascade,
 slot integer not null check(slot between 1 and 6),
 seen_at timestamptz not null default now(),
 unique(room_id,slot)
);
create table private.descubra_limits(user_id uuid primary key references auth.users(id) on delete cascade, last_call timestamptz not null default '-infinity',window_at timestamptz not null default now(),creates integer not null default 0);
alter table private.descubra_rooms enable row level security;
alter table private.descubra_members enable row level security;
alter table private.descubra_limits enable row level security;
revoke all on private.descubra_rooms,private.descubra_members,private.descubra_limits from public,anon,authenticated;
create index descubra_members_room on private.descubra_members(room_id);
create index descubra_discovery on private.descubra_rooms(expires_at) where is_public and not closed;

create function private.descubra_initial(t numeric) returns jsonb language sql immutable set search_path='' as $$
 select jsonb_build_object('phase','lobby','players',(select jsonb_agg(jsonb_build_object('slot',i,'name',(array['Azul','Dourado','Rosa','Violeta','Verde','Laranja'])[i],'bot',true,'room',6,'alive',true,'done','[]'::jsonb,'vote',null,'cooldown',0,'meetingUsed',false) order by i) from generate_series(1,6)i),'traitor',1,'progress',0,'target',10,'deadline',t+360,'meetingEnd',0,'sabotage',null,'sabotageReady',t+30,'killReady',t+22,'lastTick',t,'clues','[]'::jsonb,'reports','[]'::jsonb,'reason','','winner','','round',0)
$$;
create function private.descubra_note(s jsonb,msg text) returns jsonb language sql immutable set search_path='' as $$
 select jsonb_set(s,'{clues}',coalesce((select jsonb_agg(value order by ord) from jsonb_array_elements((s->'clues')||jsonb_build_array(msg)) with ordinality x(value,ord) where ord>greatest(0,jsonb_array_length(s->'clues')-9)),'[]'::jsonb))
$$;
create function private.descubra_win(s jsonb,t numeric) returns jsonb language plpgsql set search_path='' as $$
declare winner text;reason text;alive integer;
begin
 if s->>'phase' in ('ended','lobby') then return s;end if;
 select count(*) into alive from jsonb_array_elements(s->'players')p where (p->>'alive')::boolean;
 if not (s#>>array['players',((s->>'traitor')::int-1)::text,'alive'])::boolean then winner:='crew';reason:='O infiltrado foi descoberto!';
 elsif (s->>'progress')::int >=(s->>'target')::int then winner:='crew';reason:='Todos os sistemas essenciais estão prontos!';
 elsif alive<=2 then winner:='infiltrator';reason:='O infiltrado dominou a nave.';
 elsif s->'sabotage'<>'null'::jsonb and t>=(s#>>'{sabotage,until}')::numeric then winner:='infiltrator';reason:='O reator não foi reparado a tempo.';
 elsif t>=(s->>'deadline')::numeric then winner:='infiltrator';reason:='O tempo da missão terminou.';end if;
 if winner is not null then s:=s||jsonb_build_object('phase','ended','winner',winner,'reason',reason);end if;return s;
end $$;

create function private.descubra_act(s jsonb,who integer,a text,arg jsonb,t numeric) returns jsonb language plpgsql set search_path='' as $$
declare p jsonb;q jsonb;idx text:=(who-1)::text;dest integer;target integer;report integer;decoy integer;
begin
 p:=s->'players'->(who-1);if p is null or s->>'phase'='ended' then return s;end if;
 if a='vote' and s->>'phase'='meeting' and (p->>'alive')::boolean and p->'vote'='null'::jsonb then
  target:=(arg->>'target')::int;
  if target=0 or (target between 1 and 6 and (s#>>array['players',(target-1)::text,'alive'])::boolean) then return jsonb_set(s,array['players',idx,'vote'],to_jsonb(target));end if;return s;
 end if;
 if s->>'phase'<>'play' or not (p->>'alive')::boolean then return s;end if;
 if a='move' then
  dest:=(arg->>'destination')::int;
  if dest between 0 and 6 and dest<>(p->>'room')::int and (dest=6 or (p->>'room')::int=6) and t>=(p->>'cooldown')::numeric then p:=p||jsonb_build_object('room',dest,'cooldown',t+1);s:=jsonb_set(s,array['players',idx],p);end if;
 elsif a='task' and (p->>'room')::int<>6 and who<>(s->>'traitor')::int and not (p->'done' @> jsonb_build_array((p->>'room')::int)) then
  -- Require real travel time and terminal interaction time before crediting a task.
  if t<(p->>'cooldown')::numeric+2 then return s;end if;
  s:=jsonb_set(s,array['players',idx,'done'],(p->'done')||jsonb_build_array((p->>'room')::int));s:=jsonb_set(s,'{progress}',to_jsonb((s->>'progress')::int+1));
 elsif a='repair' and s->'sabotage'<>'null'::jsonb and (p->>'room')::int=2 and t>=(p->>'cooldown')::numeric+2 then
  s:=jsonb_set(s,'{sabotage}','null');s:=private.descubra_note(s,(p->>'name')||' restabeleceu a energia do reator.');
 elsif a='sabotage' and who=(s->>'traitor')::int and s->'sabotage'='null'::jsonb and t>=(s->>'sabotageReady')::numeric then
  s:=s||jsonb_build_object('sabotage',jsonb_build_object('until',t+45),'sabotageReady',t+65);s:=private.descubra_note(s,'Alerta: sabotagem! Vá ao REATOR e estabilize a energia.');
 elsif a='stun' and who=(s->>'traitor')::int and t>=(s->>'killReady')::numeric then
  target:=(arg->>'target')::int;q:=s->'players'->(target-1);
  if target between 1 and 6 and target<>who and (q->>'alive')::boolean and q->>'room'=p->>'room' then
   s:=jsonb_set(s,array['players',(target-1)::text,'alive'],'false');s:=jsonb_set(s,'{killReady}',to_jsonb(t+25));s:=jsonb_set(s,'{reports}',(s->'reports')||jsonb_build_array(jsonb_build_object('slot',target,'room',(q->>'room')::int,'reported',false)));
   decoy:=(who%6)+1;s:=private.descubra_note(s,'Sensor: '||(p->>'name')||' ou '||(s#>>array['players',(decoy-1)::text,'name'])||' passou perto de '||(array['Ponte de comando','Laboratório','Reator','Jardim orbital','Enfermaria','Depósito','Central Integro'])[(p->>'room')::int+1]||'.');
  end if;
 elsif a in ('report','meeting') then
  if a='report' then select ord::int-1 into report from jsonb_array_elements(s->'reports') with ordinality x(v,ord) where not (v->>'reported')::boolean and v->>'room'=p->>'room' limit 1;if report is null then return s;end if;s:=jsonb_set(s,array['reports',report::text,'reported'],'true');
  else if (p->>'room')::int<>6 or (p->>'meetingUsed')::boolean then return s;end if;s:=jsonb_set(s,array['players',idx,'meetingUsed'],'true');end if;
  s:=s||jsonb_build_object('phase','meeting','meetingEnd',t+25,'round',(s->>'round')::int+1,'sabotage',null);
  for target in 0..5 loop s:=jsonb_set(s,array['players',target::text,'vote'],'null');end loop;
  s:=private.descubra_note(s,case when a='report' then 'Tripulante desativado encontrado. Reunião de emergência!' else 'Reunião na Central Integro. Compare as pistas antes de votar.' end);
 end if;
 return private.descubra_win(s,t);
end $$;

create function private.descubra_tick(s jsonb,t numeric) returns jsonb language plpgsql set search_path='' as $$
declare p jsonb;q jsonb;i integer;dest integer;target integer;choice integer;winner integer;topcount integer;ties integer;votes jsonb:='{}';cnt integer;done boolean;
begin
 s:=private.descubra_win(s,t);if s->>'phase' in ('ended','lobby') then return s;end if;
 if s->>'phase'='meeting' then
  select not exists(select 1 from jsonb_array_elements(s->'players') person where (person->>'alive')::boolean and not (person->>'bot')::boolean and person->'vote'='null'::jsonb) into done;
  if t<(s->>'meetingEnd')::numeric and not done then return s;end if;
  for i in 0..5 loop
   p:=s->'players'->i;if not (p->>'alive')::boolean then continue;end if;
   if (p->>'bot')::boolean and p->'vote'='null'::jsonb then
    if random()<.25 then choice:=0;
    elsif random()<.55 and jsonb_array_length(s->'reports')>0 and i+1<>(s->>'traitor')::int then choice:=(s->>'traitor')::int;
    else select (v->>'slot')::int into choice from jsonb_array_elements(s->'players')v where (v->>'alive')::boolean and (v->>'slot')::int<>i+1 order by random() limit 1;end if;
    s:=jsonb_set(s,array['players',i::text,'vote'],to_jsonb(coalesce(choice,0)));p:=s->'players'->i;
   end if;
   if p->'vote'<>'null'::jsonb then choice:=(p->>'vote')::int;votes:=jsonb_set(votes,array[choice::text],to_jsonb(coalesce((votes->>choice::text)::int,0)+1));end if;
  end loop;
  select max(value::int) into topcount from jsonb_each_text(votes);select count(*) into ties from jsonb_each_text(votes) where value::int=topcount;winner:=0;
  if ties=1 then select key::int into winner from jsonb_each_text(votes) where value::int=topcount;end if;
  if winner>0 then s:=jsonb_set(s,array['players',(winner-1)::text,'alive'],'false');s:=private.descubra_note(s,(s#>>array['players',(winner-1)::text,'name'])||' foi enviado à cápsula de segurança.');else s:=private.descubra_note(s,'Votação empatada ou pulada. Ninguém saiu.');end if;
  s:=s||jsonb_build_object('phase','play','killReady',t+18,'sabotageReady',t+25);for i in 0..5 loop s:=jsonb_set(s,array['players',i::text,'room'],'6');end loop;return private.descubra_win(s,t);
 end if;
 if t-(s->>'lastTick')::numeric<5 then return s;end if;s:=jsonb_set(s,'{lastTick}',to_jsonb(t));
 for i in 0..5 loop
  p:=s->'players'->i;if not (p->>'alive')::boolean or not (p->>'bot')::boolean then continue;end if;if s->>'phase'<>'play' then exit;end if;
  if i+1=(s->>'traitor')::int then
   select (v->>'slot')::int into target from jsonb_array_elements(s->'players')v where (v->>'alive')::boolean and (v->>'slot')::int<>i+1 and v->>'room'=p->>'room' limit 1;
   if target is not null and t>=(s->>'killReady')::numeric then s:=private.descubra_act(s,i+1,'stun',jsonb_build_object('target',target),t);
   elsif t>=(s->>'sabotageReady')::numeric and random()<.2 then s:=private.descubra_act(s,i+1,'sabotage','{}',t);end if;
  else
   if exists(select 1 from jsonb_array_elements(s->'reports')v where not (v->>'reported')::boolean and v->>'room'=p->>'room') and random()<.55 then s:=private.descubra_act(s,i+1,'report','{}',t);exit;end if;
   if s->'sabotage'<>'null'::jsonb and (p->>'room')::int=2 and random()<.3 then s:=private.descubra_act(s,i+1,'repair','{}',t);elsif random()<.2 then s:=private.descubra_act(s,i+1,'task','{}',t);end if;
  end if;
  if random()<.7 then dest:=case when (p->>'room')::int=6 then floor(random()*6)::int else 6 end;if s->'sabotage'<>'null'::jsonb and (p->>'room')::int=6 and i+1<>(s->>'traitor')::int and random()<.7 then dest:=2;end if;s:=private.descubra_act(s,i+1,'move',jsonb_build_object('destination',dest),t);end if;
 end loop;return private.descubra_win(s,t);
end $$;

-- The privileged implementation is private. Only this explicit wrapper is exposed.
create function private.descubra_room(p_action text,p_arg jsonb default '{}') returns jsonb language plpgsql security definer set search_path='' as $$
#variable_conflict use_column
declare uid uuid:=auth.uid();r private.descubra_rooms%rowtype;m private.descubra_members%rowtype;lim private.descubra_limits%rowtype;s jsonb;t numeric:=extract(epoch from now());rid uuid;slot integer;i integer;old jsonb;outdata jsonb;is_public boolean;
begin
 if uid is null then raise exception 'authentication_required' using errcode='42501';end if;
 perform public.box_access();
 if p_action is null or p_action not in ('list','create','join','sync','leave','kick','start','move','task','repair','sabotage','stun','meeting','report','vote') then return jsonb_build_object('error','invalid_action');end if;
 if p_arg is null or jsonb_typeof(p_arg)<>'object' or pg_column_size(p_arg)>2048 then return jsonb_build_object('error','invalid_action');end if;
 insert into private.descubra_limits(user_id) values(uid) on conflict do nothing;
 select * into lim from private.descubra_limits where user_id=uid for update;
 if lim.last_call>now()-interval '100 milliseconds' then return jsonb_build_object('error','rate_limit');end if;
 update private.descubra_limits set last_call=now() where user_id=uid;
 if p_action='list' then
  select coalesce(jsonb_agg(v),'[]'::jsonb) into outdata from (select r.id,upper(left(r.id::text,5)) as label,(select count(*) from private.descubra_members m where m.room_id=r.id and m.seen_at>now()-interval '60 seconds') as count from private.descubra_rooms r where r.is_public and not r.closed and r.expires_at>now() and r.state->>'phase'='lobby' order by r.expires_at desc limit 30)v;
  return jsonb_build_object('rooms',outdata);
 end if;
 if p_action='create' then
  if lim.window_at<now()-interval '1 hour' then update private.descubra_limits set window_at=now(),creates=0 where user_id=uid;lim.creates:=0;end if;
  if lim.creates>=6 then return jsonb_build_object('error','rate_limit');end if;
  update private.descubra_rooms set closed=true where owner_id=uid and not closed;
  delete from private.descubra_members where user_id=uid;
  insert into private.descubra_rooms(owner_id,is_public,state) values(uid,coalesce((p_arg->>'public')::boolean,false),private.descubra_initial(t)) returning * into r;
  insert into private.descubra_members(user_id,room_id,slot) values(uid,r.id,1);
  update private.descubra_limits set creates=creates+1 where user_id=uid;
 elsif p_action='join' then
  select * into r from private.descubra_rooms where not closed and expires_at>now() and (code=upper(p_arg->>'code') or (is_public and id::text=p_arg->>'id')) for update;
  if r.id is null then return jsonb_build_object('error','room_unavailable');end if;
  if r.state->>'phase'<>'lobby' then return jsonb_build_object('error','started');end if;
  select m.slot into slot from private.descubra_members m where m.room_id=r.id and m.user_id=uid;
  if slot is null then
   delete from private.descubra_members where room_id=r.id and seen_at<now()-interval '60 seconds' and user_id<>r.owner_id;
   select g into slot from generate_series(1,6)g where not exists(select 1 from private.descubra_members m where m.room_id=r.id and m.slot=g) order by g limit 1;
   if slot is null then return jsonb_build_object('error','room_full');end if;
   update private.descubra_rooms set closed=true where owner_id=uid and id<>r.id and not closed;
   delete from private.descubra_members where user_id=uid;
   insert into private.descubra_members(user_id,room_id,slot) values(uid,r.id,slot);
  end if;
 else
  select * into r from private.descubra_rooms where id::text=p_arg->>'room' and not closed and expires_at>now() for update;
  if r.id is null then return jsonb_build_object('error','room_unavailable');end if;
 end if;
 select * into m from private.descubra_members where user_id=uid and room_id=r.id;
 if m.user_id is null then return jsonb_build_object('error','not_member');end if;
 if p_action='leave' then if uid=r.owner_id then update private.descubra_rooms set closed=true where id=r.id;end if;delete from private.descubra_members where user_id=uid;return jsonb_build_object('left',true);end if;
 update private.descubra_members set seen_at=now() where user_id=uid;
 s:=r.state;
 for i in 0..5 loop s:=jsonb_set(s,array['players',i::text,'bot'],to_jsonb(not exists(select 1 from private.descubra_members m where m.room_id=r.id and m.slot=i+1 and m.seen_at>now()-interval '60 seconds')));end loop;
 if p_action='kick' then
  if uid<>r.owner_id then return jsonb_build_object('error','not_owner');end if;
  if s->>'phase'<>'lobby' or (p_arg->>'target')::int=m.slot then return jsonb_build_object('error','invalid_action');end if;
  delete from private.descubra_members where room_id=r.id and slot=(p_arg->>'target')::int;
  if (p_arg->>'target')::int between 1 and 6 then s:=jsonb_set(s,array['players',((p_arg->>'target')::int-1)::text,'bot'],'true');end if;
 elsif p_action='start' then
  if uid<>r.owner_id then return jsonb_build_object('error','not_owner');end if;
  if s->>'phase'<>'lobby' then return jsonb_build_object('error','started');end if;
  s:=s||jsonb_build_object('phase','play','traitor',1+floor(random()*6)::int,'deadline',t+360,'killReady',t+22,'sabotageReady',t+30,'lastTick',t);s:=private.descubra_note(s,'Missão iniciada. Observe os trajetos e complete as tarefas.');
 elsif p_action not in ('create','join','sync') then
  s:=private.descubra_tick(s,t);old:=s;s:=private.descubra_act(s,m.slot,p_action,p_arg,t);
  if old=s then update private.descubra_rooms set state=s where id=r.id;return jsonb_build_object('error','invalid_action');end if;
 end if;
 s:=private.descubra_tick(s,t);update private.descubra_rooms set state=s where id=r.id;
 return (s-'traitor')||jsonb_build_object('id',r.id,'public',r.is_public,'code',case when not r.is_public then r.code else null end,'owner',uid=r.owner_id,'slot',m.slot,'now',t,'role',case when s->>'phase'='lobby' then null when m.slot=(s->>'traitor')::int then 'infiltrator' else 'crew' end,'reveal',case when s->>'phase'='ended' then (s->>'traitor')::int else null end);
exception when invalid_text_representation or numeric_value_out_of_range then return jsonb_build_object('error','invalid_action');
end $$;
create function public.descubra_room(p_action text,p_arg jsonb default '{}') returns jsonb language sql security invoker set search_path='' as $$select private.descubra_room(p_action,p_arg)$$;
revoke all on function private.descubra_initial(numeric),private.descubra_note(jsonb,text),private.descubra_win(jsonb,numeric),private.descubra_act(jsonb,integer,text,jsonb,numeric),private.descubra_tick(jsonb,numeric),private.descubra_room(text,jsonb),public.descubra_room(text,jsonb) from public,anon,authenticated;
grant usage on schema private to authenticated;
grant execute on function private.descubra_room(text,jsonb),public.descubra_room(text,jsonb) to authenticated;
notify pgrst,'reload schema';
commit;
