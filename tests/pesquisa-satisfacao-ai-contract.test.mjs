import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  AI_ANALYSIS_SCHEMA,
  MAX_AI_PAYLOAD_BYTES,
  MAX_ANALYSIS_STRING_LENGTH,
  buildOpenAIRequest,
  extractResponseText,
  hasMinimumAISample,
  isSafeAnalysisOutput,
  isValidAnalysis,
  prepareDatasetForModel
} from '../supabase/functions/analyze-school-satisfaction/analysis-contract.mjs';

const paths = {
  migration: new URL('../supabase/migrations/20260807130000_pesquisa_satisfacao_analise_ia.sql', import.meta.url),
  edge: new URL('../supabase/functions/analyze-school-satisfaction/index.ts', import.meta.url),
  form: new URL('../pesquisa-satisfacao/index.html', import.meta.url),
  formScript: new URL('../pesquisa-satisfacao/pesquisa.js', import.meta.url),
  resultsHtml: new URL('../pesquisa-satisfacao/resultados.html', import.meta.url),
  resultsScript: new URL('../pesquisa-satisfacao/resultados.js', import.meta.url)
};

const basePayload = {
  status: 'ready',
  survey: {
    slug: 'etelvina-familias-2026',
    title: 'Pesquisa das famílias',
    school_name: 'Escola Etelvina',
    id: 'não-deve-sair'
  },
  sample: {
    total_responses: 8,
    comments_available: 5,
    comments_sent: 5,
    qualitative_suppressed: false
  },
  overall: { satisfaction_index: 75, rated_count: 16 },
  priorities: [
    { priority: 'Infraestrutura', count: 3 },
    { priority: 'Gestão', count: 5 }
  ],
  responses: [{ id: 'r1', respondent_name: 'Maria', phone_masked: '(**) *****-9999' }],
  questions: [{ question_id: 'q1', code: 'gestao_1', prompt: 'Pergunta', satisfaction_index: 75 }],
  comments: [
    { reference: 'C921', text: 'Meu nome é Maria Silva, ligue (92) 99999-9999.' },
    { reference: 'C922', text: 'Contato teste@exemplo.com. Melhorar a ventilação.' },
    { reference: 'C923', text: 'Melhorar a conservação dos banheiros.' },
    { reference: 'C924', text: 'Ampliar a variedade da merenda.' },
    { reference: 'C925', text: 'Manter a comunicação com as famílias.' }
  ]
};

const validAnalysis = {
  schema_version: '1.0',
  executive_summary: 'A amostra indica avaliação predominantemente positiva.',
  confidence: { level: 'moderada', explanation: 'A amostra é limitada.' },
  strengths: [{
    title: 'Ponto forte',
    finding: 'A gestão recebeu avaliação favorável.',
    evidence: ['Gestão: índice 75.'],
    management_implication: 'Manter a rotina.'
  }],
  attention_points: [],
  segment_insights: [],
  qualitative_themes: [],
  action_plan: [{
    priority: 1,
    horizon: '30_dias',
    action: 'Definir rotina de acompanhamento.',
    owner_suggestion: 'Gestão escolar',
    indicator: 'Percentual acompanhado',
    target: 'Meta sugerida de 90%.',
    rationale: 'Melhorar o acompanhamento.'
  }],
  monitoring_recommendations: ['Atualizar os indicadores mensalmente.'],
  risks_and_limitations: ['A participação pode não representar todas as famílias.'],
  final_assessment: 'Use os resultados como apoio à decisão.'
};

test('RPC de IA exige gestão autenticada, limita frequência e não concede acesso anônimo', async () => {
  const sql = await readFile(paths.migration, 'utf8');
  assert.match(sql, /private\.assert_school_satisfaction_manager\(v_survey\.school_id\)/i);
  assert.match(sql, /auth\.uid\(\)/i);
  assert.match(sql, /analysis_requested/i);
  assert.match(sql, /interval '10 minutes'/i);
  assert.match(sql, /v_recent_requests >= 3/i);
  assert.match(sql, /pg_advisory_xact_lock/i);
  assert.match(sql, /grant execute on function public\.get_school_satisfaction_ai_payload\(text, uuid, text, text\)\s+to authenticated/i);
  assert.doesNotMatch(sql, /grant execute on function public\.get_school_satisfaction_ai_payload\(text, uuid, text, text\)\s+to anon/i);
  assert.match(sql, /'request_id', p_request_id/i);
  assert.match(sql, /requested\.metadata ->> 'request_id' = p_request_id::text/i);
  assert.match(sql, /finished\.action in \('analysis_completed', 'analysis_failed'\)/i);
  assert.match(sql, /privacy_notice_version is distinct from '2026-08-07-ia1'/i);
  assert.match(sql, /'status', 'analysis_not_enabled'/i);
});

test('payload SQL é quantitativo, sem texto livre, e usa fotografia estável do recorte', async () => {
  const sql = await readFile(paths.migration, 'utf8');
  const aiSql = sql.slice(
    sql.indexOf('create or replace function public.get_school_satisfaction_ai_payload'),
    sql.indexOf('create or replace function public.log_school_satisfaction_ai_result')
  );
  assert.match(aiSql, /array_agg\(response_snapshot\.id/i);
  assert.match(aiSql, /for share of r/i);
  assert.ok((aiSql.match(/id = any\(v_response_ids\)/gi) || []).length >= 8);
  assert.match(aiSql, /having pg_catalog\.count\(\*\) >= 5/i);
  assert.match(aiSql, /v_grade is null or r\.student_grade = v_grade/i);
  assert.match(aiSql, /v_shift is null or r\.student_shift = v_shift/i);
  assert.match(aiSql, /'comments_sent', 0/i);
  assert.match(aiSql, /'qualitative_suppressed', true/i);
  assert.doesNotMatch(aiSql, /redact_school_satisfaction_comment|improvement_comment/i);
  assert.doesNotMatch(aiSql, /school_satisfaction_response_pii/i);
  assert.doesNotMatch(aiSql, /private\.purge_expired_school_satisfaction_pii/i);
  assert.doesNotMatch(aiSql, /'comments'\s*,/i);
  assert.doesNotMatch(aiSql, /'school_name'\s*,|'title'\s*,|'prompt'\s*,/i);
  assert.doesNotMatch(aiSql, /'respondent_name'/i);
  assert.doesNotMatch(aiSql, /'phone_masked'/i);
  assert.doesNotMatch(aiSql, /'contact_permission'/i);
  assert.match(aiSql, /domain_question\.active = true/i);
  assert.match(aiSql, /round\(pg_catalog\.avg\(domain_index\.value\)::numeric, 1\)/i);
});

test('RPC v2 vincula o consentimento à versão exibida e bloqueia o endpoint legado', async () => {
  const [sql, html, script] = await Promise.all([
    readFile(paths.migration, 'utf8'),
    readFile(paths.form, 'utf8'),
    readFile(paths.formScript, 'utf8')
  ]);
  assert.match(sql, /create or replace function public\.submit_parent_school_satisfaction_v2/i);
  assert.match(sql, /p_privacy_notice_version text/i);
  assert.match(sql, /is distinct from v_current_notice_version/i);
  assert.match(sql, /v_current_notice_version <> '2026-08-07-ia1'/i);
  assert.match(sql, /for share;/i);
  assert.match(sql, /revoke all on function public\.submit_parent_school_satisfaction\([\s\S]*?from public, anon, authenticated/i);
  assert.match(sql, /grant execute on function public\.submit_parent_school_satisfaction_v2\([\s\S]*?to anon, authenticated/i);
  assert.match(html, /id="privacyNoticeVersion" data-version="2026-08-07-ia1"/i);
  assert.match(script, /PRIVACY_NOTICE_VERSION = '2026-08-07-ia1'/i);
  assert.match(script, /submit_parent_school_satisfaction_v2/i);
  assert.match(script, /p_privacy_notice_version: displayedPrivacyNoticeVersion/i);
  assert.doesNotMatch(script, /rpc\('submit_parent_school_satisfaction',/i);
  assert.match(html, /Nenhum nome, telefone ou comentário será enviado à ferramenta/i);
  assert.match(sql, /get diagnostics v_updated = row_count/i);
  assert.match(sql, /if v_updated <> 1 then/i);
});

test('Edge Function valida JWT e chama a RPC sob o token do usuário', async () => {
  const edge = await readFile(paths.edge, 'utf8');
  assert.match(edge, /supabase\.auth\.getUser\(token\)/i);
  assert.match(edge, /Authorization: `Bearer \$\{token\}`/i);
  assert.match(edge, /get_school_satisfaction_ai_payload/i);
  assert.match(edge, /p_request_id: requestId/i);
  assert.match(edge, /p_grade: body\.grade/i);
  assert.match(edge, /p_shift: body\.shift/i);
  assert.match(edge, /OPENAI_API_KEY/i);
  assert.doesNotMatch(edge, /service[_-]?role/i);
});

test('requisição usa Responses API, store false, timeout e schema estrito', async () => {
  const edge = await readFile(paths.edge, 'utf8');
  const dataset = prepareDatasetForModel(basePayload);
  const request = buildOpenAIRequest('gpt-5-mini', dataset);
  assert.equal(request.store, false);
  assert.equal(request.text.format.type, 'json_schema');
  assert.equal(request.text.format.strict, true);
  assert.deepEqual(request.text.format.schema, AI_ANALYSIS_SCHEMA);
  assert.match(edge, /https:\/\/api\.openai\.com\/v1\/responses/i);
  assert.match(edge, /AbortController/i);
  assert.match(edge, /45_000/i);
  assert.match(edge, /Cache-Control.*no-store/is);
  assert.match(edge, /providerBody\?\.status !== 'completed'/i);
  assert.match(edge, /providerBody\?\.incomplete_details/i);
  assert.match(edge, /data\?\.status !== 'logged'/i);
  assert.equal((edge.match(/const openaiKey\s*=/g) || []).length, 1);
  assert.equal(AI_ANALYSIS_SCHEMA.properties.qualitative_themes.maxItems, 0);
});

test('defesa em profundidade elimina comentários, identificação, textos livres e células pequenas', () => {
  const dataset = prepareDatasetForModel(basePayload);
  const serialized = JSON.stringify(dataset);
  assert.doesNotMatch(serialized, /Maria Silva/);
  assert.doesNotMatch(serialized, /99999-9999/);
  assert.doesNotMatch(serialized, /teste@exemplo\.com/);
  assert.doesNotMatch(serialized, /respondent_name|phone_masked|question_id|"id"|"slug"|school_name|"title"|"prompt"/);
  assert.equal('comments' in dataset, false);
  assert.equal(dataset.sample.comments_sent, 0);
  assert.equal(dataset.sample.qualitative_suppressed, true);
  assert.deepEqual(dataset.priorities, [{ priority: 'Gestão', count: 5 }]);
  assert.equal(dataset.overall.rated_count, 16);
});

test('comentários são sempre excluídos, mesmo com amostra e contagem altas', () => {
  const payload = structuredClone(basePayload);
  payload.sample.total_responses = 120;
  payload.sample.comments_available = 120;
  const dataset = prepareDatasetForModel(payload);
  assert.equal('comments' in dataset, false);
  assert.equal('comments_available' in dataset.sample, false);
  assert.equal(dataset.sample.comments_sent, 0);
  assert.equal(dataset.sample.qualitative_suppressed, true);
  const requestText = JSON.stringify(buildOpenAIRequest('gpt-5-mini', dataset));
  assert.doesNotMatch(requestText, /Maria Silva|99999-9999|teste@exemplo\.com|Melhorar a ventilação/);
});

test('amostras de uma a quatro respostas nunca são elegíveis para chamar o provedor', async () => {
  for (let total = 1; total <= 4; total += 1) {
    const payload = structuredClone(basePayload);
    payload.sample.total_responses = total;
    assert.equal(hasMinimumAISample(payload), false);
  }
  const eligible = structuredClone(basePayload);
  eligible.sample.total_responses = 5;
  assert.equal(hasMinimumAISample(eligible), true);

  const edge = await readFile(paths.edge, 'utf8');
  assert.ok(
    edge.indexOf('if (!hasMinimumAISample(payload))') < edge.indexOf("fetch('https://api.openai.com/v1/responses'"),
    'a barreira de amostra mínima deve ocorrer antes do fetch para a OpenAI'
  );
});

test('Edge Function força análise apenas quantitativa e a interface não exibe temas de comentários', async () => {
  const [edge, resultsHtml, resultsScript] = await Promise.all([
    readFile(paths.edge, 'utf8'),
    readFile(paths.resultsHtml, 'utf8'),
    readFile(paths.resultsScript, 'utf8')
  ]);
  assert.match(edge, /analysis\.qualitative_themes\s*=\s*\[\]/);
  assert.match(edge, /comentários livres não foram enviados à IA/i);
  assert.doesNotMatch(resultsHtml, /Temas dos comentários|aiQualitativeThemes/i);
  assert.doesNotMatch(resultsScript, /aiQualitativeThemes|eligible_comments|comentário\(s\) anonimizado/i);
  assert.match(resultsHtml, /nenhum nome, telefone, comentário ou identificação da escola é enviado/i);
});

test('payload enviado ao modelo respeita o teto de bytes', () => {
  const payload = structuredClone(basePayload);
  payload.comments = Array.from({ length: 120 }, (_, index) => ({
    reference: `C${index}`,
    text: 'Comentário escolar sem identificadores. '.repeat(60)
  }));
  const dataset = prepareDatasetForModel(payload);
  assert.ok(new TextEncoder().encode(JSON.stringify(dataset)).byteLength <= MAX_AI_PAYLOAD_BYTES);
  assert.equal('comments' in dataset, false);

  const excessive = structuredClone(basePayload);
  excessive.unexpected_aggregate = 'x'.repeat(MAX_AI_PAYLOAD_BYTES + 1);
  assert.throws(() => prepareDatasetForModel(excessive), /ai_payload_too_large/);
});

test('aceita somente resposta completed e valida contrato, DLP e limites de saída', () => {
  const text = JSON.stringify(validAnalysis);
  const extracted = extractResponseText({
    status: 'completed',
    output: [{ type: 'message', content: [{ type: 'output_text', text }] }]
  });
  assert.deepEqual(JSON.parse(extracted), validAnalysis);
  assert.equal(isValidAnalysis(validAnalysis), true);
  assert.equal(isSafeAnalysisOutput(validAnalysis), true);
  assert.equal(isValidAnalysis({ ...validAnalysis, executive_summary: '<b>HTML</b>' }), false);
  assert.equal(isValidAnalysis({ ...validAnalysis, executive_summary: 'Ligue para (92) 99999-8888.' }), false);
  assert.equal(isValidAnalysis({ ...validAnalysis, executive_summary: 'A professora Maria Silva deve ser chamada.' }), false);
  assert.equal(isValidAnalysis({ ...validAnalysis, final_assessment: 'Suspenda a professora responsável.' }), false);
  assert.equal(isValidAnalysis({
    ...validAnalysis,
    executive_summary: 'x'.repeat(MAX_ANALYSIS_STRING_LENGTH + 1)
  }), false);
  assert.equal(isValidAnalysis({ ...validAnalysis, qualitative_themes: [{ theme: 'não permitido' }] }), false);
  assert.equal(isValidAnalysis({
    ...validAnalysis,
    monitoring_recommendations: Array.from({ length: 9 }, () => 'Item')
  }), false);
  assert.throws(() => extractResponseText({ status: 'incomplete', output: [] }), /openai_incomplete/);
  assert.throws(() => extractResponseText({
    status: 'completed',
    output: [{ type: 'message', content: [{ type: 'refusal', refusal: 'Não posso responder.' }] }]
  }), /openai_refusal/);
  assert.throws(() => extractResponseText({ status: 'queued', output: [] }), /openai_status_invalid/);
});
