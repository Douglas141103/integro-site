-- Direct browser calls. Only authenticated, authorized RPCs can access signaling.
begin;
create table private.online_call_members (
 id uuid primary key default gen_random_uuid(),
 lesson_id uuid not null references private.online_lessons(id) on delete cascade,
 user_id uuid not null references public.profiles(id),
 student_id uuid references public.students(id),
 identity text not null, name text not null, is_teacher boolean not null,
 client_id uuid not null, seen_at timestamptz not null default now(),
 joined_at timestamptz not null default clock_timestamp(), protocol integer not null default 1,
 unique(lesson_id,identity)
);
create index online_call_members_user on private.online_call_members(user_id);
create index online_call_members_student on private.online_call_members(student_id);
create index online_call_members_expiry on private.online_call_members(seen_at);
create table private.online_call_signals (
 id bigint generated always as identity primary key,
 sender uuid not null references private.online_call_members(id) on delete cascade,
 recipient uuid not null references private.online_call_members(id) on delete cascade,
 description jsonb not null check(octet_length(description::text)<=65536),
 created_at timestamptz not null default now()
);
create index online_call_signals_recipient on private.online_call_signals(recipient,id);
create index online_call_signals_sender on private.online_call_signals(sender,created_at);
create index online_call_signals_expiry on private.online_call_signals(created_at);
alter table private.online_call_members enable row level security;
alter table private.online_call_signals enable row level security;
revoke all on private.online_call_members,private.online_call_signals from public,anon,authenticated;
revoke all on sequence private.online_call_signals_id_seq from public,anon,authenticated;

create function private.online_call(p_action text,p_data jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare
 u uuid:=auth.uid(); lid uuid:=(p_data->>'lesson_id')::uuid;
 client uuid:=(p_data->>'client_id')::uuid; ctx jsonb; member private.online_call_members;
 lesson private.online_lessons; peer uuid; roster jsonb; messages jsonb; coordinator uuid; teacher boolean; seat text;
begin
 if u is null or not exists(select 1 from public.profiles where id=u and active is not false) then
  raise exception 'Entre com sua conta do portal.';
 end if;
 if p_action='health' then return jsonb_build_object('ok',true,'mode','direct'); end if;
 -- Serializing each room prevents duplicate seats and message cursor races.
 select * into lesson from private.online_lessons where id=lid for update;
 if not found then raise exception 'Aula não encontrada.'; end if;
 if p_action='end' then
  perform private.online_portal('end_context',jsonb_build_object('lesson_id',lid));
  perform private.online_portal('lesson_status',jsonb_build_object('lesson_id',lid,'status','ended'));
  delete from private.online_call_members where lesson_id=lid;
  return jsonb_build_object('ok',true);
 end if;
 if client is null then raise exception 'Identificação da aba ausente.'; end if;
 -- Clear abandoned / revoked participants and old connection descriptions.
 delete from private.online_call_members m where m.lesson_id=lid and (
  m.seen_at<now()-interval '45 seconds'
  or not exists(select 1 from public.profiles p where p.id=m.user_id and p.active is not false
   and ((m.is_teacher and (p.role='integro_admin' or (p.role='professor' and p.id=(select teacher_id from private.online_classes where id=lesson.class_id))))
    or (not m.is_teacher and exists(select 1 from public.student_guardians g join public.students s on s.id=g.student_id
     join private.online_enrollments e on e.student_id=s.id and e.class_id=lesson.class_id
     where g.guardian_profile_id=p.id and g.student_id=m.student_id and s.active is true)))));
 delete from private.online_call_signals where created_at<now()-interval '2 minutes';
 if p_action='leave' then
  select * into member from private.online_call_members where lesson_id=lid and id=(p_data->>'member_id')::uuid and user_id=u and client_id=client;
  if found then
   delete from private.online_call_members where id=member.id;
   if member.is_teacher and not exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher) then
    delete from private.online_call_members where lesson_id=lid;
   end if;
  end if;
  return jsonb_build_object('ok',true);
 end if;
 if p_action in ('start','join') then
  ctx:=private.online_portal('join_context',p_data);
  if p_action='start' and not (ctx->>'is_teacher')::boolean then raise exception 'Ação exclusiva do professor.'; end if;
  if not (ctx->>'is_teacher')::boolean and not exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher) then
   raise exception 'Aguarde o professor entrar na chamada.';
  end if;
  teacher:=(ctx->>'is_teacher')::boolean;
  seat:=ctx->>'identity';
  if teacher then
   select * into member from private.online_call_members where lesson_id=lid and is_teacher and user_id=u and client_id=client;
   seat:=seat||':device:'||client::text;
  else
   select * into member from private.online_call_members where lesson_id=lid and identity=seat;
  end if;
  if found and (member.user_id<>u or member.client_id<>client) then
   raise exception 'Este participante já está na chamada. Feche a outra aba ou aguarde 45 segundos.';
  end if;
  if not found then
   if teacher then
    if (select count(*) from private.online_call_members where lesson_id=lid and is_teacher)>=2 then raise exception 'O professor já está usando dois dispositivos. Saia de um deles ou aguarde 45 segundos.'; end if;
    if exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher and user_id<>u) then raise exception 'Entre com a mesma conta do professor que abriu esta sala.'; end if;
    if exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher)
      and (coalesce((p_data->>'protocol')::integer,1)<2 or exists(select 1 from private.online_call_members where lesson_id=lid and protocol<2)) then
     raise exception 'Atualize a página nos dispositivos que já estão na sala antes de entrar com o segundo aparelho.';
    end if;
   elsif (select count(*) from private.online_call_members where lesson_id=lid and not is_teacher)>=4 then raise exception 'Sala completa: quatro alunos.';
   end if;
   if coalesce((p_data->>'protocol')::integer,1)<2 and (select count(*) from private.online_call_members where lesson_id=lid and is_teacher)>1 then
    raise exception 'Atualize a página para entrar nesta sala com dois dispositivos do professor.';
   end if;
   insert into private.online_call_members(lesson_id,user_id,student_id,identity,name,is_teacher,client_id,protocol)
   values(lid,u,case when (ctx->>'is_teacher')::boolean then null else (p_data->>'student_id')::uuid end,
    seat,ctx->>'name',teacher,client,coalesce((p_data->>'protocol')::integer,1)) returning * into member;
  else update private.online_call_members set seen_at=now() where id=member.id; end if;
  if member.is_teacher then perform private.online_portal('lesson_status',jsonb_build_object('lesson_id',lid,'status','live')); end if;
 else
  select * into member from private.online_call_members where lesson_id=lid and id=(p_data->>'member_id')::uuid and user_id=u and client_id=client;
  if not found then return jsonb_build_object('closed',true,'reason','Sua presença expirou. Entre novamente na aula.'); end if;
  if lesson.status<>'live' or now()>lesson.ends_at+interval '30 minutes'
   or not exists(select 1 from private.online_classes where id=lesson.class_id and active)
   or not exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher) then
   delete from private.online_call_members where lesson_id=lid;
   return jsonb_build_object('closed',true,'reason','A chamada foi encerrada ou o professor saiu.');
  end if;
  -- Recheck guardian/student and teacher authorization on every request.
  perform private.online_portal('join_context',jsonb_build_object('lesson_id',lid,'student_id',member.student_id));
  update private.online_call_members set seen_at=now() where id=member.id;
  if p_action='signal' then
   peer:=(p_data->>'recipient')::uuid;
   if peer=member.id or not exists(select 1 from private.online_call_members where id=peer and lesson_id=lid) then raise exception 'Participante indisponível.'; end if;
   if coalesce(p_data->'description'->>'type','') not in ('offer','answer')
    or coalesce(length(p_data->'description'->>'sdp'),0) not between 1 and 60000 then raise exception 'Conexão inválida.'; end if;
   if (select count(*) from private.online_call_signals where sender=member.id and created_at>now()-interval '30 seconds')>=24 then raise exception 'Aguarde antes de tentar novamente.'; end if;
   -- Sender is assigned here, never taken from the browser's payload.
   insert into private.online_call_signals(sender,recipient,description)
   values(member.id,peer,jsonb_build_object('type',p_data->'description'->>'type','sdp',p_data->'description'->>'sdp'));
   return jsonb_build_object('ok',true);
  elsif p_action<>'poll' then raise exception 'Operação inválida.'; end if;
 end if;
 select coalesce(jsonb_agg(jsonb_build_object('id',m.id,'name',m.name,'isTeacher',m.is_teacher) order by m.id),'[]'::jsonb)
 into roster from private.online_call_members m where m.lesson_id=lid;
 select coalesce(jsonb_agg(jsonb_build_object('id',s.id,'sender',s.sender,'description',s.description) order by s.id),'[]'::jsonb)
 into messages from private.online_call_signals s where s.recipient=member.id and s.id>coalesce((p_data->>'after')::bigint,0);
 select id into coordinator from private.online_call_members where lesson_id=lid and is_teacher order by joined_at,id limit 1;
 return jsonb_build_object('member_id',member.id,'isTeacher',member.is_teacher,'name',member.name,'peers',roster,'messages',messages,'coordinator_id',coordinator);
end $$;
create function public.online_call(p_action text,p_data jsonb default '{}'::jsonb) returns jsonb
language sql security invoker set search_path='' as $$ select private.online_call(p_action,p_data) $$;
revoke all on function private.online_call(text,jsonb),public.online_call(text,jsonb) from public,anon;
grant execute on function private.online_call(text,jsonb),public.online_call(text,jsonb) to authenticated;
commit;
