-- Salas online: até quatro matrículas por turma; dados acessíveis somente por RPC.
begin;
create schema if not exists private;
create table private.online_classes (
 id uuid primary key default gen_random_uuid(), title text not null check(length(title) between 1 and 120),
 teacher_id uuid not null references public.profiles(id), active boolean not null default true,
 created_at timestamptz not null default now()
);
create index online_classes_teacher on private.online_classes(teacher_id);
create table private.online_enrollments (
 class_id uuid not null references private.online_classes(id), student_id uuid not null references public.students(id),
 created_at timestamptz not null default now(), primary key(class_id,student_id)
);
create index online_enrollments_student on private.online_enrollments(student_id);
create table private.online_lessons (
 id uuid primary key default gen_random_uuid(), class_id uuid not null references private.online_classes(id),
 title text not null check(length(title) between 1 and 160), starts_at timestamptz not null,
 ends_at timestamptz not null, status text not null default 'scheduled' check(status in ('scheduled','live','ended','cancelled')),
 check(ends_at > starts_at and ends_at <= starts_at + interval '4 hours')
);
create index online_lessons_class_date on private.online_lessons(class_id,starts_at);
create table private.online_submissions (
 id uuid primary key default gen_random_uuid(), lesson_id uuid not null references private.online_lessons(id),
 student_id uuid not null references public.students(id), uploaded_by uuid not null references public.profiles(id),
 title text not null check(length(title) between 1 and 160), message text not null default '' check(length(message)<=5000),
 status text not null default 'received' check(status in ('received','reviewing','returned')),
 feedback text not null default '' check(length(feedback)<=30000), created_at timestamptz not null default now(), returned_at timestamptz
);
create index online_submissions_lesson on private.online_submissions(lesson_id,student_id);
create index online_submissions_student on private.online_submissions(student_id);
create index online_submissions_author on private.online_submissions(uploaded_by);
alter table private.online_classes enable row level security;
alter table private.online_enrollments enable row level security;
alter table private.online_lessons enable row level security;
alter table private.online_submissions enable row level security;
revoke all on private.online_classes,private.online_enrollments,private.online_lessons,private.online_submissions from public,anon,authenticated;

create function private.online_enrollment_limit() returns trigger language plpgsql set search_path='' as $$
begin
 perform 1 from private.online_classes where id=new.class_id for update;
 if (select count(*) from private.online_enrollments where class_id=new.class_id)>=4 then
  raise exception 'A turma já tem quatro alunos.';
 end if;
 return new;
end $$;
create trigger online_enrollment_limit before insert on private.online_enrollments for each row execute function private.online_enrollment_limit();

create function private.online_guardian(p_student uuid) returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and exists(select 1 from public.profiles p join public.student_guardians g on g.guardian_profile_id=p.id
 join public.students st on st.id=g.student_id
 where p.id=auth.uid() and p.active is not false and st.active is true and g.student_id=p_student)
$$;
create function private.online_teacher(p_class uuid) returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and exists(select 1 from public.profiles p join private.online_classes c on c.id=p_class
 where p.id=auth.uid() and p.active is not false and (p.role='integro_admin' or (c.teacher_id=p.id and p.role='professor')))
$$;

create function private.online_portal(p_action text,p_data jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
declare
 u uuid:=auth.uid(); r text; cid uuid; sid uuid; lid uuid; subid uuid; c private.online_classes; l private.online_lessons;
 s private.online_submissions; result jsonb; teacher boolean;
begin
 select role::text into r from public.profiles where id=u and active is not false;
 if u is null or r is null then raise exception 'Entre com sua conta do portal.'; end if;
 if p_action='list' then
  return jsonb_build_object('role',r,'classes',coalesce((select jsonb_agg(jsonb_build_object(
   'id',cl.id,'title',cl.title,'teacher_id',cl.teacher_id,'teacher_name',p.full_name,'active',cl.active,
   'can_manage',private.online_teacher(cl.id),'students',coalesce((select jsonb_agg(jsonb_build_object('id',st.id,'name',st.full_name))
    from private.online_enrollments e join public.students st on st.id=e.student_id
    where e.class_id=cl.id and (private.online_teacher(cl.id) or private.online_guardian(st.id))),'[]'::jsonb),
   'enrolled_count',(select count(*) from private.online_enrollments e where e.class_id=cl.id),
   'lessons',coalesce((select jsonb_agg(to_jsonb(le) order by le.starts_at) from private.online_lessons le where le.class_id=cl.id),'[]'::jsonb)
  ) order by cl.created_at desc) from private.online_classes cl join public.profiles p on p.id=cl.teacher_id
   where private.online_teacher(cl.id) or (cl.active and exists(select 1 from private.online_enrollments e where e.class_id=cl.id and private.online_guardian(e.student_id)))),'[]'::jsonb));
 elsif p_action='options' then
  if r not in ('integro_admin','professor') then raise exception 'Acesso restrito ao professor.'; end if;
  return jsonb_build_object('teachers',coalesce((select jsonb_agg(jsonb_build_object('id',id,'name',full_name)) from public.profiles
   where active is not false and role in ('integro_admin','professor') and (r='integro_admin' or id=u)),'[]'::jsonb),
   'students',coalesce((select jsonb_agg(jsonb_build_object('id',st.id,'name',st.full_name) order by st.full_name) from public.students st
   where st.active is true and (r='integro_admin' or exists(select 1 from public.student_teachers t where t.student_id=st.id and t.teacher_profile_id=u))),'[]'::jsonb));
 elsif p_action='class_create' then
  if r not in ('integro_admin','professor') then raise exception 'Acesso restrito ao professor.'; end if;
  if not exists(select 1 from public.profiles where id=(p_data->>'teacher_id')::uuid and active is not false and role in ('integro_admin','professor')
   and (r='integro_admin' or id=u)) then raise exception 'Professor inválido.'; end if;
  insert into private.online_classes(title,teacher_id) values(trim(p_data->>'title'),(p_data->>'teacher_id')::uuid) returning id into cid;
  return jsonb_build_object('id',cid);
 elsif p_action in ('enroll','unenroll','lesson_create','class_archive') then
  cid:=(p_data->>'class_id')::uuid;
  select * into c from private.online_classes where id=cid for update;
  if not found or not private.online_teacher(cid) then raise exception 'Turma não autorizada.'; end if;
  if p_action='class_archive' then
   if exists(select 1 from private.online_lessons where class_id=cid and status='live') then raise exception 'Encerre a aula em andamento primeiro.'; end if;
   update private.online_classes set active=false where id=cid;
  elsif not c.active then raise exception 'Turma arquivada.';
  elsif p_action in ('enroll','unenroll') then
   sid:=(p_data->>'student_id')::uuid;
   if exists(select 1 from private.online_lessons where class_id=cid and status='live') then raise exception 'Altere as matrículas após encerrar a aula.'; end if;
   if p_action='enroll' then
    if not exists(select 1 from public.students st where st.id=sid and st.active is true and (r='integro_admin' or exists(
      select 1 from public.student_teachers t where t.student_id=sid and t.teacher_profile_id=u))) then raise exception 'Aluno não autorizado.'; end if;
    insert into private.online_enrollments(class_id,student_id) values(cid,sid) on conflict do nothing;
   else delete from private.online_enrollments where class_id=cid and student_id=sid; end if;
  else
   insert into private.online_lessons(class_id,title,starts_at,ends_at) values(cid,trim(p_data->>'title'),(p_data->>'starts_at')::timestamptz,(p_data->>'ends_at')::timestamptz) returning id into lid;
  end if;
  return jsonb_build_object('ok',true,'id',lid);
 end if;

 if p_action in ('submission_review','submission_delete') then
  subid:=(p_data->>'submission_id')::uuid;
  select * into s from private.online_submissions where id=subid;
  if not found then raise exception 'Entrega não encontrada.'; end if;
  lid:=s.lesson_id;
 else lid:=(p_data->>'lesson_id')::uuid; end if;
 select * into l from private.online_lessons where id=lid;
 if not found then raise exception 'Aula não encontrada.'; end if;
 select * into c from private.online_classes where id=l.class_id;
 teacher:=private.online_teacher(c.id);
 sid:=nullif(p_data->>'student_id','')::uuid;
 if not teacher and not exists(select 1 from private.online_enrollments e where e.class_id=c.id
  and private.online_guardian(e.student_id) and (sid is null or sid=e.student_id)) then raise exception 'Aula não autorizada para esta família.'; end if;

 if p_action='end_context' then
  if not teacher then raise exception 'Ação exclusiva do professor.'; end if;
  return jsonb_build_object('room','integro-'||l.id,'is_teacher',true);
 elsif p_action='join_context' then
  if not c.active or l.status in ('ended','cancelled') or now()<l.starts_at-interval '30 minutes' or now()>l.ends_at+interval '30 minutes' then
   raise exception 'A sala está fora do horário ou foi encerrada.';
  end if;
  if not teacher and (l.status<>'live' or sid is null or not private.online_guardian(sid)) then raise exception 'Aguarde o professor abrir a sala e selecione o aluno.'; end if;
  return jsonb_build_object('room','integro-'||l.id,'is_teacher',teacher,'status',l.status,
   'ends_at',l.ends_at+interval '30 minutes','identity',case when teacher then 'teacher-'||l.id else 'student-'||sid end,
   'name',case when teacher then (select full_name from public.profiles where id=u) else (select full_name from public.students where id=sid) end);
 elsif p_action='lesson_status' then
  if not teacher or p_data->>'status' not in ('live','ended','cancelled') then raise exception 'Ação exclusiva do professor.'; end if;
  if l.status in ('ended','cancelled') and p_data->>'status'='live' then raise exception 'Agende outra aula para reabrir uma sala.'; end if;
  update private.online_lessons set status=p_data->>'status' where id=lid;
  return jsonb_build_object('ok',true);
 elsif p_action='submission_create' then
  if sid is null or not private.online_guardian(sid) or not exists(select 1 from private.online_enrollments where class_id=c.id and student_id=sid) then
   raise exception 'Selecione um aluno matriculado vinculado à sua conta.';
  end if;
  insert into private.online_submissions(lesson_id,student_id,uploaded_by,title,message) values(lid,sid,u,trim(p_data->>'title'),coalesce(p_data->>'message','')) returning id into subid;
  return jsonb_build_object('id',subid);
 elsif p_action='submissions' then
  return coalesce((select jsonb_agg(jsonb_build_object('id',su.id,'student_id',su.student_id,'student_name',st.full_name,
   'title',su.title,'message',su.message,'status',su.status,'feedback',case when teacher or su.status='returned' then su.feedback else '' end,
   'created_at',su.created_at,'returned_at',su.returned_at) order by su.created_at desc) from private.online_submissions su join public.students st on st.id=su.student_id
   where su.lesson_id=lid and (teacher or (private.online_guardian(su.student_id) and (sid is null or sid=su.student_id)))),'[]'::jsonb);
 elsif p_action='submission_review' then
  if not teacher or p_data->>'status' not in ('reviewing','returned') then raise exception 'Ação exclusiva do professor.'; end if;
  update private.online_submissions set status=p_data->>'status',feedback=coalesce(p_data->>'feedback',''),
   returned_at=case when p_data->>'status'='returned' then now() else null end where id=subid;
  return jsonb_build_object('ok',true);
 elsif p_action='submission_delete' then
  if s.uploaded_by<>u or s.status<>'received' or exists(select 1 from storage.objects where bucket_id='online-classwork' and name like s.id::text||'/%') then
   raise exception 'Somente uma entrega vazia recém-criada pode ser descartada.';
  end if;
  delete from private.online_submissions where id=subid;
  return jsonb_build_object('ok',true);
 end if;
 raise exception 'Operação inválida.';
end $$;

create function public.online_portal(p_action text,p_data jsonb default '{}'::jsonb) returns jsonb language sql security invoker set search_path='' as $$
 select private.online_portal(p_action,p_data)
$$;

create function private.online_file_allowed(p_name text,p_write boolean) returns boolean language plpgsql stable security definer set search_path='' as $$
declare s private.online_submissions; cid uuid; kind text;
begin
 if auth.uid() is null or split_part(p_name,'/',1) !~ '^[0-9a-f-]{36}$' then return false; end if;
 select * into s from private.online_submissions where id=split_part(p_name,'/',1)::uuid;
 if not found then return false; end if;
 select class_id into cid from private.online_lessons where id=s.lesson_id;
 kind:=split_part(p_name,'/',2);
 if kind not in ('original','correction') then return false; end if;
 if private.online_teacher(cid) then return not p_write or kind='correction'; end if;
 if not private.online_guardian(s.student_id) then return false; end if;
 if p_write then return kind='original' and s.uploaded_by=auth.uid() and s.status='received'; end if;
 return kind='original' or s.status='returned';
exception when invalid_text_representation then return false;
end $$;
revoke all on function private.online_portal(text,jsonb),private.online_guardian(uuid),private.online_teacher(uuid),private.online_file_allowed(text,boolean),private.online_enrollment_limit() from public,anon;
revoke all on function public.online_portal(text,jsonb) from public,anon;
grant usage on schema private to authenticated;
grant execute on function public.online_portal(text,jsonb),private.online_portal(text,jsonb),private.online_file_allowed(text,boolean) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
 values('online-classwork','online-classwork',false,10485760,array['image/jpeg','image/png','image/webp','application/pdf']);
create policy online_classwork_select on storage.objects for select to authenticated using(bucket_id='online-classwork' and private.online_file_allowed(name,false));
create policy online_classwork_insert on storage.objects for insert to authenticated with check(bucket_id='online-classwork' and private.online_file_allowed(name,true));
create policy online_classwork_delete on storage.objects for delete to authenticated using(bucket_id='online-classwork' and private.online_file_allowed(name,true));
commit;
