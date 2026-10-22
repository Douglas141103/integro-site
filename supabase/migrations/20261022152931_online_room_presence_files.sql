-- Presence indicators, branded waiting/pause modes and authorized classroom files.
begin;
alter table private.online_lessons add column room_mode text not null default 'soon' check(room_mode in ('soon','paused','live'));
alter table private.online_lessons add column room_mode_revision bigint not null default 0;
-- Preserve any lesson already running during rollout.
update private.online_lessons set room_mode='live' where status='live';
alter table private.online_call_members add column microphone_on boolean not null default false;
alter table private.online_call_members add column camera_on boolean not null default false;
create or replace function private.online_call(p_action text,p_data jsonb) returns jsonb
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
 if p_action in ('wait','join') and not private.online_teacher(lesson.class_id) then
  if not exists(select 1 from private.online_enrollments e where e.class_id=lesson.class_id
    and e.student_id=(p_data->>'student_id')::uuid and private.online_guardian(e.student_id)) then
   raise exception 'Aula não autorizada para esta família.';
  end if;
  if not exists(select 1 from private.online_classes where id=lesson.class_id and active)
    or lesson.status in ('ended','cancelled') or now()>lesson.ends_at+interval '30 minutes' then
   raise exception 'A sala foi encerrada ou está indisponível.';
  end if;
  if p_action='wait' or lesson.status<>'live' or now()<lesson.starts_at-interval '30 minutes'
    or not exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher) then
   return jsonb_build_object('waiting',true,'isTeacher',false,'roomMode',lesson.room_mode,
    'ready',lesson.status='live' and now()>=lesson.starts_at-interval '30 minutes' and exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher),
    'starts_at',lesson.starts_at);
  end if;
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
  if not found then return jsonb_build_object('closed',true,'reason','Você foi desconectado desta chamada. Clique em Entrar na aula para voltar.'); end if;
  if lesson.status<>'live' or now()>lesson.ends_at+interval '30 minutes'
   or not exists(select 1 from private.online_classes where id=lesson.class_id and active)
   or not exists(select 1 from private.online_call_members where lesson_id=lid and is_teacher) then
   delete from private.online_call_members where lesson_id=lid;
   return jsonb_build_object('closed',true,'reason','A chamada foi encerrada ou o professor saiu.');
  end if;
  -- Recheck guardian/student and teacher authorization on every request.
  perform private.online_portal('join_context',jsonb_build_object('lesson_id',lid,'student_id',member.student_id));
  update private.online_call_members set seen_at=now() where id=member.id;
  if p_action='room_mode' then
   if not member.is_teacher then raise exception 'Somente o professor pode alterar o estado da aula.'; end if;
   if coalesce(p_data->>'mode','') not in ('soon','paused','live') then raise exception 'Estado da aula inválido.'; end if;
   update private.online_lessons set room_mode=p_data->>'mode',room_mode_revision=room_mode_revision+1 where id=lid returning * into lesson;
   if lesson.room_mode<>'live' then
    update private.online_call_members set microphone_on=false,camera_on=false where lesson_id=lid;
   end if;
  elsif p_action='moderate' then
   if not member.is_teacher then raise exception 'Somente o professor desta sala pode administrar participantes.'; end if;
   peer:=(p_data->>'target_id')::uuid;
   if coalesce(p_data->>'operation','') not in ('mute','release','remove') then raise exception 'Controle inválido.'; end if;
   if not exists(select 1 from private.online_call_members where id=peer and lesson_id=lid and not is_teacher) then
    raise exception 'Aluno indisponível nesta sala.';
   end if;
   if p_data->>'operation'='remove' then
    -- Revoke this connection, not the enrollment. A fresh admission gets a new member ID.
    delete from private.online_call_members where id=peer and lesson_id=lid and not is_teacher;
   else
    if exists(select 1 from private.online_call_members where id=peer and protocol<3) then
     raise exception 'Peça ao aluno para atualizar a página e entrar novamente antes de usar este controle.';
    end if;
    update private.online_call_members set mic_blocked=(p_data->>'operation'='mute') where id=peer and lesson_id=lid and not is_teacher;
   end if;
   return jsonb_build_object('ok',true);
  elsif p_action='signal' then
   peer:=(p_data->>'recipient')::uuid;
   if peer=member.id or not exists(select 1 from private.online_call_members where id=peer and lesson_id=lid) then raise exception 'Participante indisponível.'; end if;
   if coalesce(p_data->'description'->>'type','') not in ('offer','answer')
    or coalesce(length(p_data->'description'->>'sdp'),0) not between 1 and 60000 then raise exception 'Conexão inválida.'; end if;
   if (select count(*) from private.online_call_signals where sender=member.id and created_at>now()-interval '30 seconds')>=24 then raise exception 'Aguarde antes de tentar novamente.'; end if;
   -- Sender is assigned here, never taken from the browser's payload.
   insert into private.online_call_signals(sender,recipient,description)
   values(member.id,peer,jsonb_build_object('type',p_data->'description'->>'type','sdp',p_data->'description'->>'sdp'));
   return jsonb_build_object('ok',true);
  elsif p_action='poll' then
   if jsonb_typeof(p_data->'media'->'microphone')='boolean' and jsonb_typeof(p_data->'media'->'camera')='boolean' then
    update private.online_call_members set
     microphone_on=(p_data->'media'->>'microphone')::boolean and not mic_blocked and lesson.room_mode='live',
     camera_on=(p_data->'media'->>'camera')::boolean and lesson.room_mode='live'
    where id=member.id;
   end if;
  elsif p_action<>'poll' then raise exception 'Operação inválida.'; end if;
 end if;
 select coalesce(jsonb_agg(jsonb_build_object('id',m.id,'name',m.name,'isTeacher',m.is_teacher,'micBlocked',m.mic_blocked,'micOn',m.microphone_on and not m.mic_blocked and lesson.room_mode='live','cameraOn',m.camera_on and lesson.room_mode='live') order by m.id),'[]'::jsonb)
 into roster from private.online_call_members m where m.lesson_id=lid;
 select coalesce(jsonb_agg(jsonb_build_object('id',s.id,'sender',s.sender,'description',s.description) order by s.id),'[]'::jsonb)
 into messages from private.online_call_signals s where s.recipient=member.id and s.id>coalesce((p_data->>'after')::bigint,0);
 select id into coordinator from private.online_call_members where lesson_id=lid and is_teacher order by joined_at,id limit 1;
 return jsonb_build_object('member_id',member.id,'isTeacher',member.is_teacher,'name',member.name,'micBlocked',member.mic_blocked,'peers',roster,'messages',messages,'coordinator_id',coordinator,'roomMode',lesson.room_mode,'modeRevision',lesson.room_mode_revision);
end $$;

-- A separate private bucket: teachers send to their class; enrolled families download.
create function private.online_room_file_allowed(p_name text,p_write boolean) returns boolean
language plpgsql stable security definer set search_path='' as $$
declare lesson private.online_lessons;
begin
 if auth.uid() is null or array_length(string_to_array(p_name,'/'),1)<>2 then return false; end if;
 select * into lesson from private.online_lessons where id=split_part(p_name,'/',1)::uuid;
 if not found then return false; end if;
 if private.online_teacher(lesson.class_id) then
  return not p_write or (lesson.status='live' and exists(select 1 from private.online_call_members
   where lesson_id=lesson.id and user_id=auth.uid() and is_teacher and seen_at>now()-interval '45 seconds'));
 end if;
 if p_write then return false; end if;
 return exists(select 1 from private.online_enrollments e join private.online_classes c on c.id=e.class_id
  where e.class_id=lesson.class_id and c.active and private.online_guardian(e.student_id));
exception when invalid_text_representation then return false;
end $$;
revoke all on function private.online_call(text,jsonb),private.online_room_file_allowed(text,boolean) from public,anon;
grant execute on function private.online_call(text,jsonb),private.online_room_file_allowed(text,boolean) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('online-room-files','online-room-files',false,20971520,array['image/jpeg','image/png','image/webp','application/pdf','text/plain','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation']);
create policy online_room_files_select on storage.objects for select to authenticated using(bucket_id='online-room-files' and private.online_room_file_allowed(name,false));
create policy online_room_files_insert on storage.objects for insert to authenticated with check(bucket_id='online-room-files' and private.online_room_file_allowed(name,true));
create policy online_room_files_delete on storage.objects for delete to authenticated using(bucket_id='online-room-files' and private.online_room_file_allowed(name,true));
commit;
