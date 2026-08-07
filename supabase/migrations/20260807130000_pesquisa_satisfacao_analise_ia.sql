-- Instituto Integro — agregados quantitativos e auditoria para análise gerencial por IA
-- Pré-requisito: 20260807_pesquisa_satisfacao_escolar.sql
--
-- Esta migração NÃO armazena a narrativa produzida pela IA. Somente registra
-- metadados operacionais (ator, modelo, duração e situação) para auditoria.

begin;

alter table private.school_satisfaction_audit_log
  drop constraint if exists school_satisfaction_audit_action_check;

alter table private.school_satisfaction_audit_log
  add constraint school_satisfaction_audit_action_check
  check (action in (
    'submitted',
    'viewed_dashboard',
    'status_changed',
    'response_voided',
    'pii_anonymized',
    'exported',
    'analysis_requested',
    'analysis_completed',
    'analysis_failed'
  ));

create index if not exists school_satisfaction_ai_rate_limit_idx
  on private.school_satisfaction_audit_log (actor_id, survey_id, created_at desc)
  where action = 'analysis_requested';

create unique index if not exists school_satisfaction_ai_result_once_idx
  on private.school_satisfaction_audit_log (
    actor_id,
    survey_id,
    ((metadata ->> 'request_id'))
  )
  where action in ('analysis_completed', 'analysis_failed');

create or replace function public.submit_parent_school_satisfaction_v2(
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
  p_privacy_notice_version text,
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
  v_current_notice_version text;
begin
  select survey.privacy_notice_version
  into v_current_notice_version
  from private.school_satisfaction_surveys survey
  where survey.public_slug = pg_catalog.lower(pg_catalog.btrim(p_survey_slug))
  for share;

  if v_current_notice_version is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  if p_privacy_accepted is distinct from true then
    return pg_catalog.jsonb_build_object('status', 'privacy_required');
  end if;

  if nullif(pg_catalog.btrim(coalesce(p_privacy_notice_version, '')), '')
       is distinct from v_current_notice_version
     or v_current_notice_version <> '2026-08-07-ia1' then
    return pg_catalog.jsonb_build_object(
      'status', 'privacy_version_mismatch',
      'required_version', v_current_notice_version
    );
  end if;

  return public.submit_parent_school_satisfaction(
    p_survey_slug,
    p_respondent_name,
    p_phone,
    p_relationship,
    p_student_grade,
    p_student_shift,
    p_improvement_priority,
    p_improvement_comment,
    p_contact_permission,
    p_privacy_accepted,
    p_answers,
    p_client_submission_id,
    p_honeypot,
    p_form_version
  );
end;
$$;

create or replace function public.get_school_satisfaction_ai_payload(
  p_slug text,
  p_request_id uuid,
  p_grade text,
  p_shift text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey private.school_satisfaction_surveys%rowtype;
  v_role text;
  v_total_responses integer := 0;
  v_recent_requests integer := 0;
  v_retry_after_seconds integer := 0;
  v_response_ids uuid[] := '{}'::uuid[];
  v_result jsonb;
  v_grade text := nullif(pg_catalog.btrim(coalesce(p_grade, '')), '');
  v_shift text := nullif(pg_catalog.btrim(coalesce(p_shift, '')), '');
begin
  select s.*
  into v_survey
  from private.school_satisfaction_surveys s
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_slug))
  limit 1;

  if v_survey.id is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  v_role := private.assert_school_satisfaction_manager(v_survey.school_id);

  -- Fail closed: somente pesquisas cujo aviso vigente informa este tratamento
  -- automatizado podem gerar payload para a IA.
  if v_survey.privacy_notice_version is distinct from '2026-08-07-ia1' then
    return pg_catalog.jsonb_build_object('status', 'analysis_not_enabled');
  end if;

  if p_request_id is null then
    return pg_catalog.jsonb_build_object('status', 'invalid_request');
  end if;
  if v_grade is not null and v_grade <> all(array[
    '6º ano', '7º ano', '8º ano', '9º ano', 'Mais de um ano', 'Prefiro não informar'
  ]::text[]) then
    return pg_catalog.jsonb_build_object('status', 'invalid_filter');
  end if;
  if v_shift is not null and v_shift <> all(array[
    'Matutino', 'Vespertino', 'Integral', 'Mais de um turno', 'Prefiro nao informar'
  ]::text[]) then
    return pg_catalog.jsonb_build_object('status', 'invalid_filter');
  end if;

  -- Serializa a reserva por usuário/pesquisa para o limite também valer sob concorrência.
  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended(auth.uid()::text || ':' || v_survey.id::text, 0)
  );

  select pg_catalog.count(*)::integer
  into v_recent_requests
  from private.school_satisfaction_audit_log log
  where log.actor_id = auth.uid()
    and log.survey_id = v_survey.id
    and log.action = 'analysis_requested'
    and log.created_at >= pg_catalog.now() - interval '10 minutes';

  if v_recent_requests >= 3 then
    select greatest(
      1,
      pg_catalog.ceil(
        extract(epoch from (
          pg_catalog.min(log.created_at) + interval '10 minutes' - pg_catalog.now()
        ))
      )::integer
    )
    into v_retry_after_seconds
    from private.school_satisfaction_audit_log log
    where log.actor_id = auth.uid()
      and log.survey_id = v_survey.id
      and log.action = 'analysis_requested'
      and log.created_at >= pg_catalog.now() - interval '10 minutes';

    return pg_catalog.jsonb_build_object(
      'status', 'rate_limited',
      'retry_after_seconds', coalesce(v_retry_after_seconds, 600)
    );
  end if;

  -- Materializa uma única fotografia do recorte. Todas as métricas abaixo usam
  -- exatamente estes IDs. O FOR SHARE impede anulação até o fim desta transação.
  select coalesce(pg_catalog.array_agg(response_snapshot.id order by response_snapshot.id), '{}'::uuid[])
  into v_response_ids
  from (
    select r.id
    from private.school_satisfaction_responses r
    where r.survey_id = v_survey.id
      and r.voided_at is null
      and (v_grade is null or r.student_grade = v_grade)
      and (v_shift is null or r.student_shift = v_shift)
    order by r.id
    for share of r
  ) response_snapshot;

  v_total_responses := pg_catalog.cardinality(v_response_ids);

  select pg_catalog.jsonb_build_object(
    'status', 'ready',
    'filters', pg_catalog.jsonb_build_object(
      'grade', coalesce(v_grade, 'all'),
      'shift', coalesce(v_shift, 'all')
    ),
    'sample', pg_catalog.jsonb_build_object(
      'total_responses', v_total_responses,
      'minimum_group_size', 5,
      'comments_sent', 0,
      'comments_truncated', false,
      'qualitative_suppressed', true
    ),
    'overall', (
      select pg_catalog.jsonb_build_object(
        'rated_count', pg_catalog.count(a.score),
        'not_applicable_count', pg_catalog.count(*) filter (where a.not_applicable),
        'average_score', case
          when pg_catalog.count(a.score) = 0 then null
          else pg_catalog.round(pg_catalog.avg(a.score)::numeric, 2)
        end,
        'satisfaction_index', case
          when pg_catalog.count(a.score) = 0 then null
          else (
            select pg_catalog.round(pg_catalog.avg(domain_index.value)::numeric, 1)
            from (
              select pg_catalog.round(
                (((pg_catalog.avg(domain_answer.score) - 1) / 2 * 100))::numeric,
                1
              ) as value
              from private.school_satisfaction_questions domain_question
              join private.school_satisfaction_answers domain_answer
                on domain_answer.question_id = domain_question.id
               and domain_answer.survey_id = domain_question.survey_id
              join private.school_satisfaction_responses domain_response
                on domain_response.id = domain_answer.response_id
              where domain_question.survey_id = v_survey.id
                and domain_question.active = true
                and domain_response.id = any(v_response_ids)
                and domain_answer.score is not null
              group by domain_question.domain
            ) domain_index
          )
        end,
        'distribution', pg_catalog.jsonb_build_object(
          'insatisfeito', pg_catalog.count(*) filter (where a.score = 1),
          'parcialmente_satisfeito', pg_catalog.count(*) filter (where a.score = 2),
          'satisfeito', pg_catalog.count(*) filter (where a.score = 3)
        )
      )
      from private.school_satisfaction_answers a
      join private.school_satisfaction_responses r on r.id = a.response_id
      join private.school_satisfaction_questions overall_question
        on overall_question.id = a.question_id
       and overall_question.survey_id = a.survey_id
       and overall_question.active = true
      where a.survey_id = v_survey.id
        and r.id = any(v_response_ids)
    ),
    'domains', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'domain', domain_stats.domain,
          'label', private.school_satisfaction_domain_label(domain_stats.domain),
          'rated_count', domain_stats.rated_count,
          'not_applicable_count', domain_stats.not_applicable_count,
          'average_score', domain_stats.average_score,
          'satisfaction_index', domain_stats.satisfaction_index,
          'distribution', pg_catalog.jsonb_build_object(
            'insatisfeito', domain_stats.insatisfeito,
            'parcialmente_satisfeito', domain_stats.parcialmente_satisfeito,
            'satisfeito', domain_stats.satisfeito
          )
        ) order by domain_stats.first_position
      )
      from (
        select
          q.domain,
          pg_catalog.min(q.position) as first_position,
          pg_catalog.count(a.score) as rated_count,
          pg_catalog.count(*) filter (where a.not_applicable) as not_applicable_count,
          case when pg_catalog.count(a.score) = 0 then null
            else pg_catalog.round(pg_catalog.avg(a.score)::numeric, 2) end as average_score,
          case when pg_catalog.count(a.score) = 0 then null
            else pg_catalog.round(((pg_catalog.avg(a.score) - 1) / 2 * 100)::numeric, 1) end as satisfaction_index,
          pg_catalog.count(*) filter (where a.score = 1) as insatisfeito,
          pg_catalog.count(*) filter (where a.score = 2) as parcialmente_satisfeito,
          pg_catalog.count(*) filter (where a.score = 3) as satisfeito
        from private.school_satisfaction_questions q
        left join (
          select answer.*
          from private.school_satisfaction_answers answer
          join private.school_satisfaction_responses response on response.id = answer.response_id
          where response.survey_id = v_survey.id
            and response.id = any(v_response_ids)
        ) a on a.question_id = q.id
        where q.survey_id = v_survey.id
          and q.active = true
        group by q.domain
      ) domain_stats
    ), '[]'::jsonb),
    'questions', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'code', q.code,
          'label', case q.code
            when 'gestao_1' then 'Clareza dos comunicados'
            when 'gestao_2' then 'Escuta das famílias'
            when 'gestao_3' then 'Encaminhamento de solicitações'
            when 'professores_1' then 'Tratamento respeitoso'
            when 'professores_2' then 'Informações sobre aprendizagem'
            when 'professores_3' then 'Apoio nas dificuldades'
            when 'infraestrutura_1' then 'Limpeza dos ambientes'
            when 'infraestrutura_2' then 'Conservação dos espaços'
            when 'infraestrutura_3' then 'Segurança dos espaços'
            when 'merenda_1' then 'Qualidade da merenda'
            when 'merenda_2' then 'Variedade das refeições'
            when 'merenda_3' then 'Quantidade da merenda'
            when 'secretaria_1' then 'Cordialidade no atendimento'
            when 'secretaria_2' then 'Clareza das orientações'
            when 'secretaria_3' then 'Tempo de espera ou retorno'
            else q.code
          end,
          'domain', q.domain,
          'position', q.position,
          'rated_count', stats.rated_count,
          'not_applicable_count', stats.not_applicable_count,
          'average_score', stats.average_score,
          'satisfaction_index', stats.satisfaction_index,
          'distribution', pg_catalog.jsonb_build_object(
            'insatisfeito', stats.insatisfeito,
            'parcialmente_satisfeito', stats.parcialmente_satisfeito,
            'satisfeito', stats.satisfeito
          )
        ) order by q.position
      )
      from private.school_satisfaction_questions q
      left join lateral (
        select
          pg_catalog.count(a.score) as rated_count,
          pg_catalog.count(*) filter (where a.not_applicable) as not_applicable_count,
          case when pg_catalog.count(a.score) = 0 then null
            else pg_catalog.round(pg_catalog.avg(a.score)::numeric, 2) end as average_score,
          case when pg_catalog.count(a.score) = 0 then null
            else pg_catalog.round(((pg_catalog.avg(a.score) - 1) / 2 * 100)::numeric, 1) end as satisfaction_index,
          pg_catalog.count(*) filter (where a.score = 1) as insatisfeito,
          pg_catalog.count(*) filter (where a.score = 2) as parcialmente_satisfeito,
          pg_catalog.count(*) filter (where a.score = 3) as satisfeito
        from private.school_satisfaction_answers a
        join private.school_satisfaction_responses r on r.id = a.response_id
        where a.question_id = q.id
          and a.survey_id = v_survey.id
          and r.id = any(v_response_ids)
      ) stats on true
      where q.survey_id = v_survey.id
        and q.active = true
    ), '[]'::jsonb),
    'priorities', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object(
          'priority', priority_stats.improvement_priority,
          'count', priority_stats.total
        ) order by priority_stats.total desc, priority_stats.improvement_priority
      )
      from (
        select r.improvement_priority, pg_catalog.count(*) as total
        from private.school_satisfaction_responses r
        where r.survey_id = v_survey.id
          and r.id = any(v_response_ids)
        group by r.improvement_priority
      ) priority_stats
    ), '[]'::jsonb),
    'segments', pg_catalog.jsonb_build_object(
      'student_grade', coalesce((
        select pg_catalog.jsonb_agg(
          pg_catalog.jsonb_build_object('label', grade_stats.student_grade, 'count', grade_stats.total)
          order by grade_stats.student_grade
        )
        from (
          select r.student_grade, pg_catalog.count(*) as total
          from private.school_satisfaction_responses r
          where r.survey_id = v_survey.id
            and r.id = any(v_response_ids)
            and r.student_grade is not null
          group by r.student_grade
          having pg_catalog.count(*) >= 5
        ) grade_stats
      ), '[]'::jsonb),
      'student_shift', coalesce((
        select pg_catalog.jsonb_agg(
          pg_catalog.jsonb_build_object('label', shift_stats.student_shift, 'count', shift_stats.total)
          order by shift_stats.student_shift
        )
        from (
          select r.student_shift, pg_catalog.count(*) as total
          from private.school_satisfaction_responses r
          where r.survey_id = v_survey.id
            and r.id = any(v_response_ids)
            and r.student_shift is not null
          group by r.student_shift
          having pg_catalog.count(*) >= 5
        ) shift_stats
      ), '[]'::jsonb)
    ),
    'participation_by_day', coalesce((
      select pg_catalog.jsonb_agg(
        pg_catalog.jsonb_build_object('date', daily.day, 'count', daily.total)
        order by daily.day
      )
      from (
        select (r.submitted_at at time zone 'America/Manaus')::date as day,
               pg_catalog.count(*) as total
        from private.school_satisfaction_responses r
        where r.survey_id = v_survey.id
          and r.id = any(v_response_ids)
        group by (r.submitted_at at time zone 'America/Manaus')::date
        having pg_catalog.count(*) >= 5
      ) daily
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
    'analysis_requested',
    pg_catalog.jsonb_build_object(
      'viewer_role', v_role,
      'request_id', p_request_id,
      'grade_filter', v_grade,
      'shift_filter', v_shift,
      'total_responses', v_total_responses,
      'comments_sent', 0,
      'qualitative_suppressed', true
    )
  );

  return v_result;
end;
$$;

create or replace function public.log_school_satisfaction_ai_result(
  p_slug text,
  p_status text,
  p_model text,
  p_request_id uuid,
  p_duration_ms integer,
  p_comments_sent integer
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_survey private.school_satisfaction_surveys%rowtype;
  v_role text;
  v_action text;
  v_expected_comments integer;
begin
  select s.*
  into v_survey
  from private.school_satisfaction_surveys s
  where s.public_slug = pg_catalog.lower(pg_catalog.btrim(p_slug))
  limit 1;

  if v_survey.id is null then
    return pg_catalog.jsonb_build_object('status', 'not_found');
  end if;

  v_role := private.assert_school_satisfaction_manager(v_survey.school_id);

  if p_status not in ('completed', 'failed') then
    return pg_catalog.jsonb_build_object('status', 'invalid_status');
  end if;
  if p_request_id is null
     or pg_catalog.char_length(pg_catalog.btrim(coalesce(p_model, ''))) not between 1 and 100
     or p_duration_ms is null or p_duration_ms not between 0 and 180000
     or p_comments_sent is null or p_comments_sent not between 0 and 120 then
    return pg_catalog.jsonb_build_object('status', 'invalid_metadata');
  end if;

  v_action := case when p_status = 'completed' then 'analysis_completed' else 'analysis_failed' end;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended(
      'ai-result:' || auth.uid()::text || ':' || v_survey.id::text || ':' || p_request_id::text,
      0
    )
  );

  select (requested.metadata ->> 'comments_sent')::integer
  into v_expected_comments
  from private.school_satisfaction_audit_log requested
  where requested.actor_id = auth.uid()
    and requested.survey_id = v_survey.id
    and requested.action = 'analysis_requested'
    and requested.metadata ->> 'request_id' = p_request_id::text
    and requested.created_at >= pg_catalog.now() - interval '10 minutes'
  order by requested.created_at desc
  limit 1;

  if v_expected_comments is null
     or v_expected_comments <> p_comments_sent
     or exists (
       select 1
       from private.school_satisfaction_audit_log finished
       where finished.actor_id = auth.uid()
         and finished.survey_id = v_survey.id
         and finished.action in ('analysis_completed', 'analysis_failed')
         and finished.metadata ->> 'request_id' = p_request_id::text
     ) then
    return pg_catalog.jsonb_build_object('status', 'invalid_request');
  end if;

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
    v_action,
    pg_catalog.jsonb_build_object(
      'viewer_role', v_role,
      'model', pg_catalog.btrim(p_model),
      'request_id', p_request_id,
      'duration_ms', p_duration_ms,
      'comments_sent', p_comments_sent
    )
  );

  return pg_catalog.jsonb_build_object('status', 'logged');
end;
$$;

revoke all on function public.submit_parent_school_satisfaction(
  text, text, text, text, text, text, text, text, boolean, boolean, jsonb, uuid, text, integer
) from public, anon, authenticated;

revoke all on function public.submit_parent_school_satisfaction_v2(
  text, text, text, text, text, text, text, text, boolean, boolean, text, jsonb, uuid, text, integer
) from public, anon, authenticated;
grant execute on function public.submit_parent_school_satisfaction_v2(
  text, text, text, text, text, text, text, text, boolean, boolean, text, jsonb, uuid, text, integer
) to anon, authenticated;

revoke all on function public.get_school_satisfaction_ai_payload(text, uuid, text, text)
  from public, anon, authenticated;
grant execute on function public.get_school_satisfaction_ai_payload(text, uuid, text, text)
  to authenticated;

revoke all on function public.log_school_satisfaction_ai_result(text, text, text, uuid, integer, integer)
  from public, anon, authenticated;
grant execute on function public.log_school_satisfaction_ai_result(text, text, text, uuid, integer, integer)
  to authenticated;

comment on function public.get_school_satisfaction_ai_payload(text, uuid, text, text) is
  'Autoriza a gestão, limita requisições e retorna somente indicadores quantitativos agregados; nunca retorna comentários ou identificação da escola para a IA.';

comment on function public.submit_parent_school_satisfaction_v2(
  text, text, text, text, text, text, text, text, boolean, boolean, text, jsonb, uuid, text, integer
) is
  'Valida a versão do aviso realmente aceita antes de delegar ao envio legado; páginas antigas não podem gravar consentimento da versão de IA.';

comment on function public.log_school_satisfaction_ai_result(text, text, text, uuid, integer, integer) is
  'Registra somente metadados operacionais da análise; nunca persiste a narrativa ou o conteúdo enviado à IA.';

do $migration$
declare
  v_updated integer;
begin
  update private.school_satisfaction_surveys
  set privacy_notice_version = '2026-08-07-ia1',
      updated_at = pg_catalog.now()
  where public_slug = 'etelvina-familias-2026';

  get diagnostics v_updated = row_count;
  if v_updated <> 1 then
    raise exception 'A pesquisa Etelvina esperada não foi atualizada (linhas=%).', v_updated;
  end if;
end;
$migration$;

commit;
