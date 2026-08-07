-- Instituto Integro — Pesquisa de satisfação das famílias
-- Escola Municipal Etelvina Pereira Braga
-- Execute este arquivo uma única vez no SQL Editor do Supabase.
--
-- Segurança adotada:
-- 1. respostas e dados pessoais ficam no schema private, não exposto pela API;
-- 2. o formulário público acessa apenas duas funções controladas;
-- 3. resultados exigem sessão e perfil de gestão da mesma escola;
-- 4. a restrição única do banco impede duas respostas do mesmo telefone na edição.

begin;

create extension if not exists pg_cron;

create schema if not exists private;

revoke all on schema private from public;
revoke all on schema private from anon, authenticated;

create table if not exists private.school_satisfaction_surveys (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  public_slug text not null unique,
  title text not null,
  questionnaire_version integer not null default 1,
  status text not null default 'draft',
  starts_at timestamptz,
  ends_at timestamptz,
  scale_options jsonb not null default '[
    {"value": 1, "label": "Insatisfeito(a)", "shortLabel": "Insatisfeito"},
    {"value": 2, "label": "Parcialmente satisfeito(a)", "shortLabel": "Parcialmente"},
    {"value": 3, "label": "Satisfeito(a)", "shortLabel": "Satisfeito"}
  ]'::jsonb,
  dedupe_salt uuid not null default gen_random_uuid(),
  privacy_notice_version text not null default '2026-08-07',
  privacy_retention_days integer not null default 180,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint school_satisfaction_surveys_slug_check
    check (public_slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint school_satisfaction_surveys_status_check
    check (status in ('draft', 'active', 'closed', 'archived')),
  constraint school_satisfaction_surveys_scale_array_check
    check (jsonb_typeof(scale_options) = 'array' and jsonb_array_length(scale_options) >= 2),
  constraint school_satisfaction_surveys_dates_check
    check (ends_at is null or starts_at is null or ends_at > starts_at),
  constraint school_satisfaction_surveys_retention_check
    check (privacy_retention_days between 30 and 730)
);

create index if not exists school_satisfaction_surveys_school_idx
  on private.school_satisfaction_surveys (school_id, status);

create table if not exists private.school_satisfaction_questions (
  id uuid primary key default gen_random_uuid(),
  survey_id uuid not null references private.school_satisfaction_surveys(id) on delete cascade,
  code text not null,
  domain text not null,
  prompt text not null,
  position smallint not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint school_satisfaction_questions_code_unique unique (survey_id, code),
  constraint school_satisfaction_questions_position_unique unique (survey_id, position),
  constraint school_satisfaction_questions_id_survey_unique unique (id, survey_id),
  constraint school_satisfaction_questions_domain_check
    check (domain in ('gestao', 'professores', 'infraestrutura', 'merenda', 'secretaria')),
  constraint school_satisfaction_questions_code_check
    check (code ~ '^[a-z0-9_]+$'),
  constraint school_satisfaction_questions_prompt_check
    check (char_length(btrim(prompt)) between 10 and 300),
  constraint school_satisfaction_questions_position_check
    check (position between 1 and 100)
);

create table if not exists private.school_satisfaction_responses (
  id uuid primary key default gen_random_uuid(),
  survey_id uuid not null references private.school_satisfaction_surveys(id) on delete cascade,
  client_submission_id uuid not null,
  phone_fingerprint text not null,
  relationship text,
  student_grade text,
  student_shift text,
  improvement_priority text not null,
  contact_permission boolean not null default false,
  privacy_accepted_at timestamptz not null,
  privacy_notice_version text not null,
  form_version integer not null default 1,
  submitted_at timestamptz not null default now(),
  voided_at timestamptz,
  voided_by uuid references public.profiles(id) on delete set null,
  void_reason text,
  constraint school_satisfaction_responses_submission_unique unique (survey_id, client_submission_id),
  constraint school_satisfaction_responses_id_survey_unique unique (id, survey_id),
  constraint school_satisfaction_responses_relationship_check
    check (relationship is null or relationship in ('Mae', 'Pai', 'Responsavel legal', 'Outro responsavel', 'Prefiro nao informar')),
  constraint school_satisfaction_responses_grade_check
    check (student_grade is null or student_grade in ('6º ano', '7º ano', '8º ano', '9º ano', 'Mais de um ano', 'Prefiro não informar')),
  constraint school_satisfaction_responses_shift_check
    check (student_shift is null or student_shift in ('Matutino', 'Vespertino', 'Integral', 'Mais de um turno', 'Prefiro nao informar')),
  constraint school_satisfaction_responses_priority_check
    check (improvement_priority in ('gestao', 'professores', 'infraestrutura', 'merenda', 'secretaria', 'nenhuma', 'nao_sei')),
  constraint school_satisfaction_responses_form_version_check
    check (form_version between 1 and 1000),
  constraint school_satisfaction_responses_phone_fingerprint_check
    check (phone_fingerprint ~ '^[0-9a-f]{64}$'),
  constraint school_satisfaction_responses_void_reason_check
    check (voided_at is null or char_length(btrim(coalesce(void_reason, ''))) >= 5)
);

create index if not exists school_satisfaction_responses_survey_date_idx
  on private.school_satisfaction_responses (survey_id, submitted_at desc)
  where voided_at is null;

create unique index if not exists school_satisfaction_one_response_per_phone_idx
  on private.school_satisfaction_responses (survey_id, phone_fingerprint)
  where voided_at is null;

create table if not exists private.school_satisfaction_response_pii (
  response_id uuid primary key,
  survey_id uuid not null,
  respondent_name text not null,
  phone_normalized text,
  improvement_comment text,
  created_at timestamptz not null default now(),
  foreign key (response_id, survey_id)
    references private.school_satisfaction_responses(id, survey_id)
    on delete cascade,
  constraint school_satisfaction_response_pii_name_check
    check (char_length(btrim(respondent_name)) between 3 and 120),
  constraint school_satisfaction_response_pii_phone_check
    check (phone_normalized is null or phone_normalized ~ '^55[1-9][0-9]{9,10}$'),
  constraint school_satisfaction_response_pii_comment_check
    check (improvement_comment is null or char_length(improvement_comment) <= 1200)
);

create table if not exists private.school_satisfaction_answers (
  survey_id uuid not null,
  response_id uuid not null,
  question_id uuid not null,
  score smallint,
  not_applicable boolean not null default false,
  created_at timestamptz not null default now(),
  primary key (response_id, question_id),
  foreign key (response_id, survey_id)
    references private.school_satisfaction_responses(id, survey_id)
    on delete cascade,
  foreign key (question_id, survey_id)
    references private.school_satisfaction_questions(id, survey_id)
    on delete restrict,
  constraint school_satisfaction_answers_score_check
    check (
      (not_applicable = true and score is null)
      or
      (not_applicable = false and score between 1 and 3)
    )
);

create index if not exists school_satisfaction_answers_survey_question_idx
  on private.school_satisfaction_answers (survey_id, question_id, score);

create table if not exists private.school_satisfaction_audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id) on delete set null,
  school_id uuid not null references public.schools(id) on delete cascade,
  survey_id uuid not null references private.school_satisfaction_surveys(id) on delete cascade,
  response_id uuid references private.school_satisfaction_responses(id) on delete set null,
  action text not null,
  reason text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint school_satisfaction_audit_action_check
    check (action in ('submitted', 'viewed_dashboard', 'status_changed', 'response_voided', 'pii_anonymized', 'exported'))
);

alter table private.school_satisfaction_surveys enable row level security;
alter table private.school_satisfaction_questions enable row level security;
alter table private.school_satisfaction_responses enable row level security;
alter table private.school_satisfaction_response_pii enable row level security;
alter table private.school_satisfaction_answers enable row level security;
alter table private.school_satisfaction_audit_log enable row level security;

revoke all on all tables in schema private from public, anon, authenticated;
revoke all on all sequences in schema private from public, anon, authenticated;

create or replace function private.normalize_br_phone(p_phone text)
returns text
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_digits text := pg_catalog.regexp_replace(coalesce(p_phone, ''), '[^0-9]', '', 'g');
begin
  if pg_catalog.length(v_digits) in (12, 13) and pg_catalog.left(v_digits, 2) = '55' then
    v_digits := pg_catalog.substring(v_digits, 3);
  end if;

  while pg_catalog.length(v_digits) > 11 and pg_catalog.left(v_digits, 1) = '0' loop
    v_digits := pg_catalog.substring(v_digits, 2);
  end loop;

  if pg_catalog.length(v_digits) not in (10, 11)
     or v_digits !~ '^[0-9]+$' then
    return null;
  end if;

  if pg_catalog.left(v_digits, 2)::integer < 11
     or v_digits ~ '^([0-9])\1+$' then
    return null;
  end if;

  return '55' || v_digits;
end;
$$;

create or replace function private.mask_br_phone(p_phone text)
returns text
language sql
immutable
set search_path = ''
as $$
  select case
    when p_phone is null or pg_catalog.length(p_phone) < 6 then 'Telefone protegido'
    else '(**) *****-' || pg_catalog.right(p_phone, 4)
  end;
$$;

create or replace function private.school_satisfaction_phone_fingerprint(
  p_survey_id uuid,
  p_salt uuid,
  p_phone text
)
returns text
language sql
immutable
set search_path = ''
as $$
  select pg_catalog.encode(
    pg_catalog.sha256(
      pg_catalog.convert_to(
        p_survey_id::text || ':' || p_salt::text || ':' || coalesce(p_phone, ''),
        'UTF8'
      )
    ),
    'hex'
  );
$$;

create or replace function private.school_satisfaction_domain_label(p_domain text)
returns text
language sql
immutable
set search_path = ''
as $$
  select case p_domain
    when 'gestao' then 'Gestão escolar'
    when 'professores' then 'Professores'
    when 'infraestrutura' then 'Infraestrutura'
    when 'merenda' then 'Merenda escolar'
    when 'secretaria' then 'Secretaria'
    else p_domain
  end;
$$;

create or replace function private.assert_school_satisfaction_manager(p_school_id uuid)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_role text;
  v_profile_school_id uuid;
begin
  if auth.uid() is null then
    raise exception 'Sessão não autenticada.' using errcode = '42501';
  end if;

  select p.role, p.school_id
  into v_role, v_profile_school_id
  from public.profiles p
  where p.id = auth.uid()
  limit 1;

  if v_role is null or v_role not in ('integro_admin', 'diretor', 'coordenacao') then
    raise exception 'Usuário sem permissão para consultar esta pesquisa.' using errcode = '42501';
  end if;

  if v_role <> 'integro_admin' and v_profile_school_id is distinct from p_school_id then
    raise exception 'Esta pesquisa pertence a outra escola.' using errcode = '42501';
  end if;

  return v_role;
end;
$$;

create or replace function private.purge_expired_school_satisfaction_pii()
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey record;
  v_deleted integer;
  v_total integer := 0;
begin
  for v_survey in
    select s.id, s.school_id, s.privacy_retention_days
    from private.school_satisfaction_surveys s
    where s.status = 'closed'
      and s.ends_at is not null
      and pg_catalog.now() >= s.ends_at + pg_catalog.make_interval(days => s.privacy_retention_days)
    for update skip locked
  loop
    delete from private.school_satisfaction_response_pii pii
    using private.school_satisfaction_responses r
    where pii.response_id = r.id
      and r.survey_id = v_survey.id;

    get diagnostics v_deleted = row_count;
    v_total := v_total + v_deleted;

    update private.school_satisfaction_surveys
    set status = 'archived',
        updated_at = pg_catalog.now()
    where id = v_survey.id;

    insert into private.school_satisfaction_audit_log (
      actor_id,
      school_id,
      survey_id,
      action,
      metadata
    ) values (
      null,
      v_survey.school_id,
      v_survey.id,
      'pii_anonymized',
      pg_catalog.jsonb_build_object(
        'records', v_deleted,
        'retention_days', v_survey.privacy_retention_days,
        'automatic', true
      )
    );
  end loop;

  return v_total;
end;
$$;

create or replace function public.get_public_school_satisfaction(p_slug text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_result jsonb;
begin
  select pg_catalog.jsonb_build_object(
    'survey', pg_catalog.jsonb_build_object(
      'id', s.id,
      'slug', s.public_slug,
      'title', s.title,
      'school_name', sc.name,
      'status', s.status,
      'starts_at', s.starts_at,
      'ends_at', s.ends_at,
      'is_open', (
        s.status = 'active'
        and (s.starts_at is null or s.starts_at <= pg_catalog.now())
        and (s.ends_at is null or s.ends_at > pg_catalog.now())
      ),
      'questionnaire_version', s.questionnaire_version,
      'privacy_notice_version', s.privacy_notice_version,
      'privacy_retention_days', s.privacy_retention_days
    ),
    'scale', s.scale_options,
    'questions', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'id', q.id,
          'code', q.code,
          'domain', q.domain,
          'domain_label', private.school_satisfaction_domain_label(q.domain),
          'prompt', q.prompt,
          'position', q.position
        ) order by q.position
      )
      from private.school_satisfaction_questions q
      where q.survey_id = s.id
        and q.active = true
    ), '[]'::jsonb)
  )
  into v_result
  from private.school_satisfaction_surveys s
  join public.schools sc on sc.id = s.school_id
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_slug))
    and s.status in ('active', 'closed', 'archived')
  limit 1;

  return v_result;
end;
$$;

create or replace function public.submit_parent_school_satisfaction(
  p_survey_slug text,
  p_respondent_name text,
  p_phone text,
  p_relationship text,
  p_student_grade text,
  p_student_shift text,
  p_improvement_priority text,
  p_improvement_comment text,
  p_contact_permission boolean,
  p_privacy_accepted boolean,
  p_answers jsonb,
  p_client_submission_id uuid,
  p_honeypot text,
  p_form_version integer
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey private.school_satisfaction_surveys%rowtype;
  v_response_id uuid;
  v_phone text;
  v_phone_fingerprint text;
  v_name text;
  v_comment text;
  v_question_count integer;
  v_answer_count integer;
  v_distinct_answer_count integer;
  v_matching_answer_count integer;
  v_scores_valid boolean;
begin
  if pg_catalog.char_length(pg_catalog.btrim(coalesce(p_honeypot, ''))) > 0 then
    return pg_catalog.jsonb_build_object('status', 'submitted');
  end if;

  select s.*
  into v_survey
  from private.school_satisfaction_surveys s
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_survey_slug))
  limit 1;

  if v_survey.id is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  if v_survey.status <> 'active'
     or (v_survey.starts_at is not null and v_survey.starts_at > pg_catalog.now())
     or (v_survey.ends_at is not null and v_survey.ends_at <= pg_catalog.now()) then
    return pg_catalog.jsonb_build_object('status', 'closed');
  end if;

  if p_privacy_accepted is distinct from true then
    return pg_catalog.jsonb_build_object('status', 'privacy_required');
  end if;

  if p_client_submission_id is null then
    return pg_catalog.jsonb_build_object('status', 'invalid_submission');
  end if;

  v_name := pg_catalog.regexp_replace(pg_catalog.btrim(coalesce(p_respondent_name, '')), '\s+', ' ', 'g');
  if pg_catalog.char_length(v_name) not between 3 and 120
     or pg_catalog.strpos(v_name, ' ') = 0 then
    return pg_catalog.jsonb_build_object('status', 'invalid_name');
  end if;

  v_phone := private.normalize_br_phone(p_phone);
  if v_phone is null then
    return pg_catalog.jsonb_build_object('status', 'invalid_phone');
  end if;

  v_phone_fingerprint := private.school_satisfaction_phone_fingerprint(
    v_survey.id,
    v_survey.dedupe_salt,
    v_phone
  );

  if p_relationship is not null
     and p_relationship not in ('Mae', 'Pai', 'Responsavel legal', 'Outro responsavel', 'Prefiro nao informar') then
    return pg_catalog.jsonb_build_object('status', 'invalid_relationship');
  end if;

  if p_student_grade is not null
     and pg_catalog.btrim(p_student_grade) not in ('6º ano', '7º ano', '8º ano', '9º ano', 'Mais de um ano', 'Prefiro não informar') then
    return pg_catalog.jsonb_build_object('status', 'invalid_grade');
  end if;

  if p_student_shift is not null
     and p_student_shift not in ('Matutino', 'Vespertino', 'Integral', 'Mais de um turno', 'Prefiro nao informar') then
    return pg_catalog.jsonb_build_object('status', 'invalid_shift');
  end if;

  if p_improvement_priority is null
     or p_improvement_priority not in ('gestao', 'professores', 'infraestrutura', 'merenda', 'secretaria', 'nenhuma', 'nao_sei') then
    return pg_catalog.jsonb_build_object('status', 'invalid_priority');
  end if;

  v_comment := nullif(pg_catalog.btrim(coalesce(p_improvement_comment, '')), '');
  if v_comment is not null and pg_catalog.char_length(v_comment) > 1200 then
    return pg_catalog.jsonb_build_object('status', 'comment_too_long');
  end if;

  if p_form_version is null
     or p_form_version not between 1 and 1000
     or p_form_version <> v_survey.questionnaire_version then
    return pg_catalog.jsonb_build_object('status', 'invalid_form_version');
  end if;

  if pg_catalog.jsonb_typeof(p_answers) is distinct from 'array' then
    return pg_catalog.jsonb_build_object('status', 'invalid_answers');
  end if;

  if pg_catalog.pg_column_size(p_answers) > 65536 then
    return pg_catalog.jsonb_build_object('status', 'invalid_answers');
  end if;

  select pg_catalog.count(*)
  into v_question_count
  from private.school_satisfaction_questions q
  where q.survey_id = v_survey.id
    and q.active = true;

  if v_question_count = 0
     or pg_catalog.jsonb_array_length(p_answers) <> v_question_count then
    return pg_catalog.jsonb_build_object('status', 'incomplete_answers');
  end if;

  begin
    select
      pg_catalog.count(*),
      pg_catalog.count(distinct x.question_id),
      coalesce(pg_catalog.bool_and(x.score is not null and x.score between 0 and 3), false)
    into v_answer_count, v_distinct_answer_count, v_scores_valid
    from pg_catalog.jsonb_to_recordset(p_answers) as x(question_id uuid, score integer);

    select pg_catalog.count(*)
    into v_matching_answer_count
    from pg_catalog.jsonb_to_recordset(p_answers) as x(question_id uuid, score integer)
    join private.school_satisfaction_questions q
      on q.id = x.question_id
     and q.survey_id = v_survey.id
     and q.active = true;
  exception when others then
    return pg_catalog.jsonb_build_object('status', 'invalid_answers');
  end;

  if v_question_count = 0
     or v_answer_count <> v_question_count
     or v_distinct_answer_count <> v_question_count
     or v_matching_answer_count <> v_question_count
     or v_scores_valid is distinct from true then
    return pg_catalog.jsonb_build_object('status', 'incomplete_answers');
  end if;

  if exists (
    select 1
    from private.school_satisfaction_responses r
    where r.survey_id = v_survey.id
      and r.client_submission_id = p_client_submission_id
      and r.voided_at is null
  ) then
    return pg_catalog.jsonb_build_object('status', 'submitted');
  end if;

  begin
    insert into private.school_satisfaction_responses (
      survey_id,
      client_submission_id,
      phone_fingerprint,
      relationship,
      student_grade,
      student_shift,
      improvement_priority,
      contact_permission,
      privacy_accepted_at,
      privacy_notice_version,
      form_version
    ) values (
      v_survey.id,
      p_client_submission_id,
      v_phone_fingerprint,
      nullif(p_relationship, ''),
      nullif(pg_catalog.btrim(coalesce(p_student_grade, '')), ''),
      nullif(p_student_shift, ''),
      p_improvement_priority,
      coalesce(p_contact_permission, false),
      pg_catalog.now(),
      v_survey.privacy_notice_version,
      p_form_version
    )
    returning id into v_response_id;

    insert into private.school_satisfaction_response_pii (
      response_id,
      survey_id,
      respondent_name,
      phone_normalized,
      improvement_comment
    ) values (
      v_response_id,
      v_survey.id,
      v_name,
      v_phone,
      v_comment
    );
  exception when unique_violation then
    return pg_catalog.jsonb_build_object('status', 'duplicate');
  end;

  insert into private.school_satisfaction_answers (
    survey_id,
    response_id,
    question_id,
    score,
    not_applicable
  )
  select
    v_survey.id,
    v_response_id,
    q.id,
    case when x.score = 0 then null else x.score::smallint end,
    x.score = 0
  from pg_catalog.jsonb_to_recordset(p_answers) as x(question_id uuid, score integer)
  join private.school_satisfaction_questions q
    on q.id = x.question_id
   and q.survey_id = v_survey.id
   and q.active = true;

  insert into private.school_satisfaction_audit_log (
    actor_id,
    school_id,
    survey_id,
    response_id,
    action,
    metadata
  ) values (
    null,
    v_survey.school_id,
    v_survey.id,
    v_response_id,
    'submitted',
    pg_catalog.jsonb_build_object(
      'form_version', p_form_version,
      'student_grade', nullif(pg_catalog.btrim(coalesce(p_student_grade, '')), ''),
      'student_shift', nullif(p_student_shift, '')
    )
  );

  return pg_catalog.jsonb_build_object(
    'status', 'submitted',
    'reference', pg_catalog.upper(pg_catalog.left(v_response_id::text, 8))
  );
end;
$$;

create or replace function public.get_school_satisfaction_results(p_slug text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey private.school_satisfaction_surveys%rowtype;
  v_school_name text;
  v_role text;
  v_result jsonb;
begin
  select s.*
  into v_survey
  from private.school_satisfaction_surveys s
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_slug))
  limit 1;

  if v_survey.id is null then
    return null;
  end if;

  select sc.name
  into v_school_name
  from public.schools sc
  where sc.id = v_survey.school_id
  limit 1;

  v_role := private.assert_school_satisfaction_manager(v_survey.school_id);

  perform private.purge_expired_school_satisfaction_pii();

  select s.*
  into v_survey
  from private.school_satisfaction_surveys s
  where s.id = v_survey.id;

  select pg_catalog.jsonb_build_object(
    'survey', pg_catalog.jsonb_build_object(
      'id', v_survey.id,
      'slug', v_survey.public_slug,
      'title', v_survey.title,
      'school_name', v_school_name,
      'status', v_survey.status,
      'starts_at', v_survey.starts_at,
      'ends_at', v_survey.ends_at,
      'questionnaire_version', v_survey.questionnaire_version,
      'last_response_at', (
        select pg_catalog.max(r.submitted_at)
        from private.school_satisfaction_responses r
        where r.survey_id = v_survey.id
          and r.voided_at is null
      )
    ),
    'viewer_role', v_role,
    'scale', v_survey.scale_options,
    'questions', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'id', q.id,
          'code', q.code,
          'domain', q.domain,
          'domain_label', private.school_satisfaction_domain_label(q.domain),
          'prompt', q.prompt,
          'position', q.position
        ) order by q.position
      )
      from private.school_satisfaction_questions q
      where q.survey_id = v_survey.id
        and q.active = true
    ), '[]'::jsonb),
    'responses', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'id', r.id,
          'respondent_name', case
            when v_role in ('integro_admin', 'diretor') then coalesce(pii.respondent_name, 'Dados anonimizados')
            else 'Participação protegida'
          end,
          'phone_masked', case
            when v_role in ('integro_admin', 'diretor') then private.mask_br_phone(pii.phone_normalized)
            else 'Telefone protegido'
          end,
          'relationship', r.relationship,
          'student_grade', r.student_grade,
          'student_shift', r.student_shift,
          'improvement_priority', r.improvement_priority,
          'improvement_comment', pii.improvement_comment,
          'contact_permission', case
            when v_role in ('integro_admin', 'diretor') then r.contact_permission
            else false
          end,
          'submitted_at', r.submitted_at
        ) order by r.submitted_at desc
      )
      from private.school_satisfaction_responses r
      left join private.school_satisfaction_response_pii pii on pii.response_id = r.id
      where r.survey_id = v_survey.id
        and r.voided_at is null
    ), '[]'::jsonb),
    'answers', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'response_id', a.response_id,
          'question_id', a.question_id,
          'score', a.score,
          'not_applicable', a.not_applicable
        )
      )
      from private.school_satisfaction_answers a
      join private.school_satisfaction_responses r on r.id = a.response_id
      join private.school_satisfaction_questions q
        on q.id = a.question_id
       and q.survey_id = a.survey_id
       and q.active = true
      where a.survey_id = v_survey.id
        and r.voided_at is null
    ), '[]'::jsonb)
  ) into v_result;

  insert into private.school_satisfaction_audit_log (
    actor_id,
    school_id,
    survey_id,
    action,
    metadata
  ) values (
    auth.uid(),
    v_survey.school_id,
    v_survey.id,
    'viewed_dashboard',
    pg_catalog.jsonb_build_object('viewer_role', v_role)
  );

  return v_result;
end;
$$;

create or replace function public.get_school_satisfaction_summary(p_slug text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_result jsonb;
  v_safe_responses jsonb;
begin
  v_result := public.get_school_satisfaction_results(p_slug);
  if v_result is null then
    return null;
  end if;

  select coalesce(
    pg_catalog.jsonb_agg(
      item
      - 'respondent_name'
      - 'phone_masked'
      - 'relationship'
      - 'improvement_comment'
      - 'contact_permission'
    ),
    '[]'::jsonb
  )
  into v_safe_responses
  from pg_catalog.jsonb_array_elements(coalesce(v_result -> 'responses', '[]'::jsonb)) as item;

  return pg_catalog.jsonb_set(v_result, '{responses}', v_safe_responses, false);
end;
$$;

create or replace function public.set_school_satisfaction_status(
  p_slug text,
  p_status text,
  p_reason text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey private.school_satisfaction_surveys%rowtype;
  v_role text;
  v_reason text := pg_catalog.btrim(coalesce(p_reason, ''));
begin
  select s.* into v_survey
  from private.school_satisfaction_surveys s
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_slug))
  for update;

  if v_survey.id is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  v_role := private.assert_school_satisfaction_manager(v_survey.school_id);

  if v_role not in ('integro_admin', 'diretor') then
    raise exception 'Somente administrador ou direção pode abrir ou encerrar a pesquisa.' using errcode = '42501';
  end if;

  if v_survey.status = 'archived' then
    return pg_catalog.jsonb_build_object('status', 'archived_locked');
  end if;

  if p_status not in ('active', 'closed') then
    return pg_catalog.jsonb_build_object('status', 'invalid_status');
  end if;

  if pg_catalog.char_length(v_reason) < 5 then
    return pg_catalog.jsonb_build_object('status', 'reason_required');
  end if;

  update private.school_satisfaction_surveys
  set status = p_status,
      starts_at = case when p_status = 'active' and starts_at is null then pg_catalog.now() else starts_at end,
      ends_at = case when p_status = 'active' then null else pg_catalog.now() end,
      updated_at = pg_catalog.now()
  where id = v_survey.id;

  insert into private.school_satisfaction_audit_log (
    actor_id,
    school_id,
    survey_id,
    action,
    reason,
    metadata
  ) values (
    auth.uid(),
    v_survey.school_id,
    v_survey.id,
    'status_changed',
    v_reason,
    pg_catalog.jsonb_build_object('from', v_survey.status, 'to', p_status, 'viewer_role', v_role)
  );

  return pg_catalog.jsonb_build_object('status', 'updated', 'survey_status', p_status);
end;
$$;

create or replace function public.void_school_satisfaction_response(
  p_response_id uuid,
  p_reason text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_response private.school_satisfaction_responses%rowtype;
  v_survey private.school_satisfaction_surveys%rowtype;
  v_role text;
  v_reason text := pg_catalog.btrim(coalesce(p_reason, ''));
begin
  select r.* into v_response
  from private.school_satisfaction_responses r
  where r.id = p_response_id
    and r.voided_at is null
  for update;

  if v_response.id is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  select s.* into v_survey
  from private.school_satisfaction_surveys s
  where s.id = v_response.survey_id;

  v_role := private.assert_school_satisfaction_manager(v_survey.school_id);

  if v_role not in ('integro_admin', 'diretor') then
    raise exception 'Somente administrador ou direção pode anular uma resposta.' using errcode = '42501';
  end if;

  if pg_catalog.char_length(v_reason) < 5 then
    return pg_catalog.jsonb_build_object('status', 'reason_required');
  end if;

  update private.school_satisfaction_responses
  set voided_at = pg_catalog.now(),
      voided_by = auth.uid(),
      void_reason = v_reason
  where id = v_response.id;

  update private.school_satisfaction_response_pii
  set phone_normalized = null
  where response_id = v_response.id;

  insert into private.school_satisfaction_audit_log (
    actor_id,
    school_id,
    survey_id,
    response_id,
    action,
    reason,
    metadata
  ) values (
    auth.uid(),
    v_survey.school_id,
    v_survey.id,
    v_response.id,
    'response_voided',
    v_reason,
    pg_catalog.jsonb_build_object('viewer_role', v_role)
  );

  return pg_catalog.jsonb_build_object('status', 'voided');
end;
$$;

revoke all on function private.normalize_br_phone(text) from public, anon, authenticated;
revoke all on function private.mask_br_phone(text) from public, anon, authenticated;
revoke all on function private.school_satisfaction_phone_fingerprint(uuid, uuid, text) from public, anon, authenticated;
revoke all on function private.school_satisfaction_domain_label(text) from public, anon, authenticated;
revoke all on function private.assert_school_satisfaction_manager(uuid) from public, anon, authenticated;
revoke all on function private.purge_expired_school_satisfaction_pii() from public, anon, authenticated;

revoke all on function public.get_public_school_satisfaction(text) from public, anon, authenticated;
grant execute on function public.get_public_school_satisfaction(text) to anon, authenticated;

revoke all on function public.submit_parent_school_satisfaction(
  text, text, text, text, text, text, text, text, boolean, boolean, jsonb, uuid, text, integer
) from public, anon, authenticated;
grant execute on function public.submit_parent_school_satisfaction(
  text, text, text, text, text, text, text, text, boolean, boolean, jsonb, uuid, text, integer
) to anon, authenticated;

revoke all on function public.get_school_satisfaction_results(text) from public, anon, authenticated;
grant execute on function public.get_school_satisfaction_results(text) to authenticated;

revoke all on function public.get_school_satisfaction_summary(text) from public, anon, authenticated;
grant execute on function public.get_school_satisfaction_summary(text) to authenticated;

revoke all on function public.set_school_satisfaction_status(text, text, text) from public, anon, authenticated;
grant execute on function public.set_school_satisfaction_status(text, text, text) to authenticated;

revoke all on function public.void_school_satisfaction_response(uuid, text) from public, anon, authenticated;
grant execute on function public.void_school_satisfaction_response(uuid, text) to authenticated;

select cron.schedule(
  'integro-purge-school-satisfaction-pii',
  '17 * * * *',
  $cron$select private.purge_expired_school_satisfaction_pii();$cron$
);

do $$
declare
  v_school_id uuid;
  v_survey_id uuid;
begin
  select s.id
  into v_school_id
  from public.schools s
  where s.name ilike '%Etelvina Pereira Braga%'
  limit 1;

  if v_school_id is null then
    raise exception 'Escola Etelvina Pereira Braga não encontrada em public.schools. Cadastre ou ajuste o nome da escola antes de executar esta migração.';
  end if;

  insert into private.school_satisfaction_surveys (
    school_id,
    public_slug,
    title,
    questionnaire_version,
    status,
    starts_at,
    scale_options,
    privacy_notice_version,
    privacy_retention_days
  ) values (
    v_school_id,
    'etelvina-familias-2026',
    'Pesquisa de Satisfação das Famílias 2026',
    1,
    'active',
    now(),
    '[
      {"value": 1, "label": "Insatisfeito(a)", "shortLabel": "Insatisfeito"},
      {"value": 2, "label": "Parcialmente satisfeito(a)", "shortLabel": "Parcialmente"},
      {"value": 3, "label": "Satisfeito(a)", "shortLabel": "Satisfeito"}
    ]'::jsonb,
    '2026-08-07',
    180
  )
  on conflict (public_slug) do update
  set school_id = excluded.school_id,
      title = excluded.title,
      scale_options = excluded.scale_options,
      privacy_notice_version = excluded.privacy_notice_version,
      privacy_retention_days = excluded.privacy_retention_days,
      updated_at = now()
  returning id into v_survey_id;

  insert into private.school_satisfaction_questions (
    survey_id,
    code,
    domain,
    prompt,
    position
  ) values
    (v_survey_id, 'gestao_1', 'gestao', 'Como você avalia a clareza dos comunicados enviados pela gestão escolar?', 1),
    (v_survey_id, 'gestao_2', 'gestao', 'Como você avalia a disponibilidade da gestão para ouvir as famílias?', 2),
    (v_survey_id, 'gestao_3', 'gestao', 'Como você avalia o encaminhamento dado pela gestão às solicitações das famílias?', 3),
    (v_survey_id, 'professores_1', 'professores', 'Como você avalia o tratamento respeitoso dos professores com os alunos?', 4),
    (v_survey_id, 'professores_2', 'professores', 'Como você avalia as informações fornecidas pelos professores sobre a aprendizagem do aluno?', 5),
    (v_survey_id, 'professores_3', 'professores', 'Como você avalia o apoio dos professores quando o aluno apresenta dificuldades de aprendizagem?', 6),
    (v_survey_id, 'infraestrutura_1', 'infraestrutura', 'Como você avalia a limpeza dos ambientes da escola?', 7),
    (v_survey_id, 'infraestrutura_2', 'infraestrutura', 'Como você avalia a conservação das salas, banheiros e demais espaços utilizados pelos alunos?', 8),
    (v_survey_id, 'infraestrutura_3', 'infraestrutura', 'Como você avalia a segurança dos espaços físicos da escola?', 9),
    (v_survey_id, 'merenda_1', 'merenda', 'Como você avalia a qualidade da merenda escolar?', 10),
    (v_survey_id, 'merenda_2', 'merenda', 'Como você avalia a variedade das refeições oferecidas?', 11),
    (v_survey_id, 'merenda_3', 'merenda', 'Como você avalia a quantidade de merenda oferecida aos alunos?', 12),
    (v_survey_id, 'secretaria_1', 'secretaria', 'Como você avalia a cordialidade no atendimento da secretaria?', 13),
    (v_survey_id, 'secretaria_2', 'secretaria', 'Como você avalia a clareza das orientações fornecidas pela secretaria?', 14),
    (v_survey_id, 'secretaria_3', 'secretaria', 'Como você avalia o tempo de espera ou retorno da secretaria?', 15)
  on conflict (survey_id, code) do nothing;
end;
$$;

comment on schema private is
  'Dados internos não expostos diretamente pela API do Instituto Integro.';

comment on function public.submit_parent_school_satisfaction(
  text, text, text, text, text, text, text, text, boolean, boolean, jsonb, uuid, text, integer
) is
  'Recebe uma resposta pública, valida todos os campos no servidor e impede telefone duplicado por edição.';

comment on function public.get_school_satisfaction_results(text) is
  'Retorna a apuração somente para perfis de gestão autorizados da escola vinculada.';

comment on function public.get_school_satisfaction_summary(text) is
  'Retorna ao resumo incorporado somente os dados necessários para indicadores, sem nome, telefone ou comentário.';

comment on function private.purge_expired_school_satisfaction_pii() is
  'Remove dados identificáveis após o prazo, arquiva a edição e é executada automaticamente pelo Supabase Cron.';

commit;
