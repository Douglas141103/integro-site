import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const paths = {
  migration: new URL('../supabase/migrations/20260807_pesquisa_satisfacao_escolar.sql', import.meta.url),
  aiMigration: new URL('../supabase/migrations/20260807130000_pesquisa_satisfacao_analise_ia.sql', import.meta.url),
  form: new URL('../pesquisa-satisfacao/index.html', import.meta.url),
  formScript: new URL('../pesquisa-satisfacao/pesquisa.js', import.meta.url),
  results: new URL('../pesquisa-satisfacao/resultados.html', import.meta.url),
  resultsScript: new URL('../pesquisa-satisfacao/resultados.js', import.meta.url),
  resultsStyle: new URL('../pesquisa-satisfacao/resultados.css', import.meta.url),
  portal: new URL('../portal/gestao-escolar.html', import.meta.url),
  portalSurveyScript: new URL('../portal/gestao-pesquisa-satisfacao.js', import.meta.url),
  portalDashboard: new URL('../portal/dashboard.html', import.meta.url),
  portalLogin: new URL('../portal/app.js', import.meta.url),
};

async function source(name) {
  return readFile(paths[name], 'utf8');
}

test('dados pessoais e respostas ficam em schema privado sem grants diretos', async () => {
  const sql = await source('migration');
  assert.match(sql, /create schema if not exists private/i);
  assert.match(sql, /revoke all on schema private from anon, authenticated/i);
  assert.match(sql, /revoke all on all tables in schema private from public, anon, authenticated/i);
  assert.match(sql, /create table if not exists private\.school_satisfaction_response_pii/i);
  assert.match(sql, /alter table private\.school_satisfaction_response_pii enable row level security/i);
  assert.match(sql, /pii_anonymized/i);
  assert.match(sql, /delete from private\.school_satisfaction_response_pii pii/i);
  assert.match(sql, /privacy_retention_days/i);
  assert.match(sql, /cron\.schedule/i);
  assert.match(sql, /purge_expired_school_satisfaction_pii/i);
});

test('duplicidade é garantida no banco por edição e telefone normalizado', async () => {
  const sql = await source('migration');
  assert.match(sql, /school_satisfaction_one_response_per_phone_idx/i);
  assert.match(sql, /private\.school_satisfaction_responses \(survey_id, phone_fingerprint\)[\s\S]*where voided_at is null/i);
  assert.match(sql, /dedupe_salt uuid not null/i);
  assert.match(sql, /school_satisfaction_phone_fingerprint/i);
  assert.match(sql, /private\.normalize_br_phone\(p_phone\)/i);
  assert.match(sql, /exception when unique_violation/i);
  assert.match(sql, /jsonb_build_object\('status', 'duplicate'\)/i);
});

test('funções públicas e gerenciais possuem privilégios mínimos separados', async () => {
  const [sql, aiSql] = await Promise.all([source('migration'), source('aiMigration')]);
  assert.match(sql, /security definer\s+set search_path = ''/gi);
  assert.match(sql, /grant execute on function public\.get_public_school_satisfaction\(text\) to anon, authenticated/i);
  assert.match(aiSql, /revoke all on function public\.submit_parent_school_satisfaction\([\s\S]*?from public, anon, authenticated/i);
  assert.match(aiSql, /grant execute on function public\.submit_parent_school_satisfaction_v2\([\s\S]*?to anon, authenticated/i);
  assert.match(sql, /grant execute on function public\.get_school_satisfaction_results\(text\) to authenticated/i);
  assert.match(sql, /grant execute on function public\.get_school_satisfaction_summary\(text\) to authenticated/i);
  assert.doesNotMatch(sql, /grant\s+(select|insert|update|delete)[\s\S]*school_satisfaction/i);
});

test('resultado verifica papel e escola no banco', async () => {
  const sql = await source('migration');
  assert.match(sql, /v_role not in \('integro_admin', 'diretor', 'coordenacao'\)/i);
  assert.match(sql, /v_profile_school_id is distinct from p_school_id/i);
  assert.match(sql, /private\.assert_school_satisfaction_manager\(v_survey\.school_id\)/i);
  assert.match(sql, /when v_role in \('integro_admin', 'diretor'\) then coalesce\(pii\.respondent_name/i);
  assert.match(sql, /item[\s\S]*- 'respondent_name'[\s\S]*- 'phone_masked'[\s\S]*- 'improvement_comment'/i);
});

test('formulário público não contém chave secreta nem instalador do portal', async () => {
  const [html, script] = await Promise.all([source('form'), source('formScript')]);
  assert.match(html, /Pesquisa de Satisfação das Famílias/i);
  assert.match(html, /name="robots" content="noindex,nofollow"/i);
  assert.doesNotMatch(`${html}\n${script}`, /service_role|secret[_-]?key/i);
  assert.doesNotMatch(html, /pwa-install\.js/i);
  assert.match(html, /data-version="2026-08-07-ia1"/i);
  assert.match(script, /submit_parent_school_satisfaction_v2/i);
  assert.match(script, /p_privacy_notice_version/i);
});

test('painel separado exige sessão e usa a RPC gerencial', async () => {
  const [html, script] = await Promise.all([source('results'), source('resultsScript')]);
  assert.match(html, /Acesso protegido/i);
  assert.match(script, /client\.auth\.getSession\(\)/i);
  assert.match(script, /get_school_satisfaction_results/i);
  assert.match(script, /void_school_satisfaction_response/i);
  assert.match(script, /\['integro_admin', 'diretor', 'coordenacao'\]/i);
  assert.match(script, /window\.addEventListener\('pagehide'/i);
  assert.match(script, /window\.location\.replace\('\/portal\/index\.html'\)/i);
  assert.match(script, /let dashboardLoadRevision\s*=\s*0/i);
  assert.match(script, /const loadRevision\s*=\s*\+\+dashboardLoadRevision/i);
  assert.match(script, /if \(loadRevision !== dashboardLoadRevision\) return;/i);
  assert.match(script, /if \(event === 'SIGNED_OUT'\)[\s\S]*invalidateDashboardLoads\(\)/i);
  assert.match(html, /http-equiv="Cache-Control" content="no-store"/i);
  assert.doesNotMatch(`${html}\n${script}`, /service_role|secret[_-]?key/i);
});

test('relatório gerencial imprime gráficos e tabelas sem levar o controle de participantes ao PDF', async () => {
  const [html, script, style] = await Promise.all([
    source('results'), source('resultsScript'), source('resultsStyle')
  ]);
  assert.match(html, /id="managementAnalysisTitle"/i);
  assert.match(html, /id="overallDistributionChart"/i);
  assert.match(html, /id="analysisDomainsTable"/i);
  assert.match(html, /id="analysisActions"/i);
  assert.match(html, /id="aiAnalysisPanel"/i);
  assert.match(html, /id="aiActionPlanTable"/i);
  assert.match(script, /buildManagementAnalysis/i);
  assert.match(script, /client\.functions\.invoke\('analyze-school-satisfaction'/i);
  assert.match(script, /body:\s*\{\s*survey_slug:\s*SURVEY_SLUG,\s*grade,\s*shift\s*\}/i);
  assert.match(script, /function renderMetrics\(\)[\s\S]*?clearAiAnalysis\(\)/i);
  assert.match(script, /if \(!latestAiReport[\s\S]*?await generateAiAnalysis\(\)/i);
  assert.match(script, /window\.requestAnimationFrame[\s\S]*window\.print\(\)/i);
  assert.match(style, /@page\s*\{[\s\S]*size:\s*A4 portrait/i);
  assert.match(style, /print-color-adjust:\s*exact/i);
  assert.match(style, /\.lower-grid[\s\S]*\.participants-panel[\s\S]*display:\s*none\s*!important/i);
  assert.match(style, /\.participants-panel[\s\S]*display:\s*none\s*!important/i);
  assert.match(style, /thead\s*\{\s*display:\s*table-header-group/i);
  assert.match(script, /root\.classList\.toggle\('trend-dense',\s*items\.length\s*>\s*14\)/i);
  assert.match(style, /\.trend-chart\.trend-dense[\s\S]*visibility:\s*hidden/i);
  assert.doesNotMatch(script, /\.innerHTML\s*=/i);
});

test('Portal Integro contém resumo sem PII e atalhos exclusivos da escola Etelvina', async () => {
  const [management, dashboard, compactScript] = await Promise.all([
    source('portal'), source('portalDashboard'), source('portalSurveyScript')
  ]);
  assert.match(management, /data-gestao-tab="painel-pesquisa"/i);
  assert.match(management, /id="painel-pesquisa"/i);
  assert.match(management, /gestao-pesquisa-satisfacao\.js/i);
  assert.match(dashboard, /Pesquisa de Satisfação/i);
  assert.match(dashboard, /pesquisa-satisfacao\/resultados\.html/i);
  assert.match(compactScript, /get_school_satisfaction_summary/i);
  assert.match(compactScript, /canAccessEtelvinaSurvey/i);
  assert.match(dashboard, /data-etelvina-survey hidden/i);
});

test('retorno após login aceita somente destinos internos conhecidos', async () => {
  const login = await source('portalLogin');
  assert.match(login, /function safePostLoginTarget\(\)/i);
  assert.match(login, /target\.origin !== window\.location\.origin/i);
  assert.match(login, /allowed\.has\(target\.pathname\)/i);
  assert.match(login, /requested\.startsWith\('\/\/'\)/i);
});
