-- Instituto Integro — presença facial no tablet
-- Execute este arquivo uma única vez no Editor SQL do Supabase.
-- A aplicação armazena somente assinaturas numéricas do rosto, nunca fotografias ou vídeos.

begin;

create table if not exists public.student_face_templates (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  embeddings jsonb not null,
  sample_count smallint not null default 5,
  model_version text not null,
  consent_guardian_name text not null,
  consent_recorded_at timestamptz not null,
  consent_reference text,
  created_by uuid not null references public.profiles(id),
  updated_by uuid not null references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint student_face_templates_student_unique unique (student_id),
  constraint student_face_templates_embeddings_array check (jsonb_typeof(embeddings) = 'array'),
  constraint student_face_templates_sample_count check (sample_count between 3 and 8)
);

create index if not exists student_face_templates_school_idx
  on public.student_face_templates (school_id);

create table if not exists public.student_attendance_events (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  recorded_by uuid not null references public.profiles(id),
  scanned_at timestamptz not null default now(),
  attendance_date date not null,
  source text not null default 'facial',
  similarity numeric(6, 5),
  liveness_score numeric(6, 5),
  real_score numeric(6, 5),
  device_id text,
  model_version text,
  metadata jsonb not null default '{}'::jsonb,
  constraint student_attendance_events_source check (source in ('facial', 'manual')),
  constraint student_attendance_events_similarity check (similarity is null or similarity between 0 and 1),
  constraint student_attendance_events_liveness check (liveness_score is null or liveness_score between 0 and 1),
  constraint student_attendance_events_real check (real_score is null or real_score between 0 and 1)
);

create index if not exists student_attendance_events_school_date_idx
  on public.student_attendance_events (school_id, attendance_date, scanned_at desc);

create index if not exists student_attendance_events_student_date_idx
  on public.student_attendance_events (student_id, attendance_date);

alter table public.student_face_templates enable row level security;
alter table public.student_attendance_events enable row level security;

drop policy if exists "face_templates_staff_read" on public.student_face_templates;
create policy "face_templates_staff_read"
  on public.student_face_templates
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao', 'professor')
        and (p.role = 'integro_admin' or p.school_id = student_face_templates.school_id)
    )
  );

drop policy if exists "face_templates_management_insert" on public.student_face_templates;
create policy "face_templates_management_insert"
  on public.student_face_templates
  for insert
  to authenticated
  with check (
    created_by = auth.uid()
    and updated_by = auth.uid()
    and exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao')
        and (p.role = 'integro_admin' or p.school_id = student_face_templates.school_id)
    )
    and exists (
      select 1
      from public.students s
      where s.id = student_face_templates.student_id
        and s.school_id = student_face_templates.school_id
    )
  );

drop policy if exists "face_templates_management_update" on public.student_face_templates;
create policy "face_templates_management_update"
  on public.student_face_templates
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao')
        and (p.role = 'integro_admin' or p.school_id = student_face_templates.school_id)
    )
  )
  with check (
    updated_by = auth.uid()
    and exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao')
        and (p.role = 'integro_admin' or p.school_id = student_face_templates.school_id)
    )
  );

drop policy if exists "face_templates_management_delete" on public.student_face_templates;
create policy "face_templates_management_delete"
  on public.student_face_templates
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao')
        and (p.role = 'integro_admin' or p.school_id = student_face_templates.school_id)
    )
  );

drop policy if exists "attendance_events_staff_read" on public.student_attendance_events;
create policy "attendance_events_staff_read"
  on public.student_attendance_events
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and p.role in ('integro_admin', 'diretor', 'coordenacao', 'professor')
        and (p.role = 'integro_admin' or p.school_id = student_attendance_events.school_id)
    )
  );

revoke all on public.student_face_templates from anon;
revoke all on public.student_face_templates from authenticated;
grant select, insert, update, delete on public.student_face_templates to authenticated;

revoke all on public.student_attendance_events from anon;
revoke all on public.student_attendance_events from authenticated;
grant select on public.student_attendance_events to authenticated;

create or replace function public.register_facial_attendance(
  p_student_id uuid,
  p_similarity numeric default null,
  p_liveness numeric default null,
  p_real_score numeric default null,
  p_source text default 'facial',
  p_device_id text default null,
  p_model_version text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_profile public.profiles%rowtype;
  v_student public.students%rowtype;
  v_today date := (now() at time zone 'America/Manaus')::date;
  v_existing public.student_attendance%rowtype;
  v_note text;
begin
  if auth.uid() is null then
    raise exception 'Sessão não autenticada.';
  end if;

  select * into v_profile
  from public.profiles
  where id = auth.uid();

  if v_profile.id is null
     or v_profile.role not in ('integro_admin', 'diretor', 'coordenacao', 'professor') then
    raise exception 'Usuário sem permissão para registrar presença.';
  end if;

  select * into v_student
  from public.students
  where id = p_student_id
    and active is distinct from false
    and (v_profile.role = 'integro_admin' or school_id = v_profile.school_id);

  if v_student.id is null then
    raise exception 'Aluno não encontrado na unidade deste usuário.';
  end if;

  if p_source not in ('facial', 'manual') then
    raise exception 'Método de presença inválido.';
  end if;

  if p_source = 'facial' then
    if not exists (
      select 1
      from public.student_face_templates f
      where f.student_id = p_student_id
        and f.school_id = v_student.school_id
    ) then
      raise exception 'O aluno não possui cadastro facial autorizado.';
    end if;

    if coalesce(p_similarity, 0) < 0.60 then
      raise exception 'Similaridade facial abaixo do limite mínimo.';
    end if;

    if coalesce(p_liveness, 0) < 0.38 or coalesce(p_real_score, 0) < 0.38 then
      raise exception 'A prova de vida não atingiu o limite mínimo.';
    end if;
  end if;

  select * into v_existing
  from public.student_attendance
  where student_id = p_student_id
    and attendance_date = v_today
  limit 1;

  if v_existing.student_id is not null and v_existing.status = 'presente' then
    return jsonb_build_object(
      'status', 'already_registered',
      'student_id', p_student_id,
      'attendance_date', v_today,
      'registered_at', v_existing.updated_at
    );
  end if;

  v_note := case
    when p_source = 'facial' then 'Entrada registrada automaticamente pelo terminal facial.'
    else 'Entrada registrada manualmente no terminal facial.'
  end;

  insert into public.student_attendance (
    student_id,
    attendance_date,
    status,
    notes,
    teacher_id,
    updated_at
  ) values (
    p_student_id,
    v_today,
    'presente',
    v_note,
    auth.uid(),
    now()
  )
  on conflict (student_id, attendance_date)
  do update set
    status = 'presente',
    notes = case
      when public.student_attendance.notes is null or btrim(public.student_attendance.notes) = '' then excluded.notes
      else public.student_attendance.notes || E'\n' || excluded.notes
    end,
    teacher_id = excluded.teacher_id,
    updated_at = excluded.updated_at;

  insert into public.student_attendance_events (
    school_id,
    student_id,
    recorded_by,
    attendance_date,
    source,
    similarity,
    liveness_score,
    real_score,
    device_id,
    model_version,
    metadata
  ) values (
    v_student.school_id,
    p_student_id,
    auth.uid(),
    v_today,
    p_source,
    p_similarity,
    p_liveness,
    p_real_score,
    nullif(btrim(p_device_id), ''),
    nullif(btrim(p_model_version), ''),
    jsonb_build_object('timezone', 'America/Manaus')
  );

  return jsonb_build_object(
    'status', 'registered',
    'student_id', p_student_id,
    'attendance_date', v_today,
    'registered_at', now()
  );
end;
$$;

revoke all on function public.register_facial_attendance(uuid, numeric, numeric, numeric, text, text, text) from public;
revoke all on function public.register_facial_attendance(uuid, numeric, numeric, numeric, text, text, text) from anon;
grant execute on function public.register_facial_attendance(uuid, numeric, numeric, numeric, text, text, text) to authenticated;

comment on table public.student_face_templates is
  'Assinaturas matemáticas usadas no reconhecimento facial autorizado de alunos. Não contém fotografias.';

comment on table public.student_attendance_events is
  'Trilha de auditoria dos registros feitos pelo terminal facial ou pela alternativa manual.';

commit;
