import {
  SURVEY_SLUG,
  computeSurveyMetrics
} from '../pesquisa-satisfacao/core.mjs';

const PUBLIC_SURVEY_URL = 'https://www.institutointegro.com.br/pesquisa-satisfacao/';
const cfg = window.INTEGRO_SUPABASE || {};
const supabaseGlobal = window.supabase;
const client = cfg.url && cfg.anonKey && supabaseGlobal?.createClient
  ? supabaseGlobal.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
    })
  : null;

const $ = (id) => document.getElementById(id);

function setModuleVisibility(visible) {
  document.querySelectorAll('[data-etelvina-survey]').forEach((element) => {
    element.hidden = !visible;
  });
}

function leaveUnavailableModule() {
  setModuleVisibility(false);
  if (window.location.hash === '#painel-pesquisa') {
    const showFallback = () => document.querySelector('[data-gestao-tab="painel-professor"]')?.click();
    showFallback();
    window.setTimeout(showFallback, 350);
  }
}

async function canAccessEtelvinaSurvey(userId) {
  const { data: profile, error: profileError } = await client
    .from('profiles')
    .select('role, school_id')
    .eq('id', userId)
    .limit(1)
    .maybeSingle();
  if (profileError || !profile || !['integro_admin', 'diretor', 'coordenacao'].includes(profile.role)) {
    return false;
  }
  if (profile.role === 'integro_admin') return true;
  if (!profile.school_id) return false;

  const { data: school, error: schoolError } = await client
    .from('schools')
    .select('name')
    .eq('id', profile.school_id)
    .limit(1)
    .maybeSingle();
  if (schoolError) return false;
  return /etelvina\s+pereira\s+braga/i.test(school?.name || '');
}

function setState(state, message = '') {
  $('surveyCompactLoading')?.classList.toggle('hidden', state !== 'loading');
  $('surveyCompactError')?.classList.toggle('hidden', state !== 'error');
  $('surveyCompactContent')?.classList.toggle('hidden', state !== 'content');
  if (state === 'error' && $('surveyCompactError')) $('surveyCompactError').textContent = message;
}

function formatPercent(value) {
  return value !== null && value !== undefined && Number.isFinite(Number(value))
    ? `${Number(value).toFixed(1).replace('.', ',')}%`
    : '—';
}

function renderDomains(metrics) {
  const root = $('surveyCompactDomains');
  if (!root) return;
  root.replaceChildren();

  metrics.domainMetrics.forEach((domain) => {
    const row = document.createElement('div');
    row.className = 'survey-compact-domain';
    const label = document.createElement('span');
    label.textContent = domain.label;
    label.title = domain.label;
    const track = document.createElement('div');
    track.className = 'survey-compact-track';
    const fill = document.createElement('div');
    fill.className = 'survey-compact-fill';
    fill.style.width = `${domain.index ?? 0}%`;
    track.append(fill);
    const value = document.createElement('span');
    value.className = 'survey-compact-value';
    value.textContent = domain.index === null ? '—' : String(Math.round(domain.index));
    row.append(label, track, value);
    root.append(row);
  });
}

function render(payload) {
  const metrics = computeSurveyMetrics(payload);
  const active = payload.survey?.status === 'active';
  const archived = payload.survey?.status === 'archived';
  $('surveyCompactResponses').textContent = String(metrics.totalResponses);
  $('surveyCompactIndex').textContent = metrics.overallIndex === null ? '—' : `${Math.round(metrics.overallIndex)}/100`;
  $('surveyCompactPositive').textContent = formatPercent(metrics.positiveRate);
  $('surveyCompactPriority').textContent = metrics.topPriority?.label || 'Sem dados';
  $('surveyCompactStatus').textContent = active
    ? 'Pesquisa aberta'
    : (archived ? 'Encerrada e anonimizada' : 'Pesquisa encerrada');
  $('surveyCompactStatus').classList.toggle('closed', !active);
  $('surveyCompactUpdated').textContent = `Atualizado em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Manaus' })}`;
  renderDomains(metrics);
  setState('content');
}

async function load() {
  if (!$('painel-pesquisa')) return;
  if (!client) {
    setState('error', 'O módulo não encontrou a configuração do Supabase.');
    return;
  }

  setState('loading');
  try {
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw sessionError;
    if (!sessionData?.session) {
      window.location.href = './index.html?next=%2Fportal%2Fgestao-escolar.html%23painel-pesquisa';
      return;
    }
    if (!await canAccessEtelvinaSurvey(sessionData.session.user.id)) {
      leaveUnavailableModule();
      return;
    }
    setModuleVisibility(true);
    const { data, error } = await client.rpc('get_school_satisfaction_summary', { p_slug: SURVEY_SLUG });
    if (error) throw error;
    if (!data?.survey) throw new Error('A edição da pesquisa não foi encontrada.');
    render(data);
  } catch (error) {
    console.error('Erro no resumo da pesquisa:', error);
    setState('error', error.message || 'Não foi possível carregar a apuração.');
  }
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(PUBLIC_SURVEY_URL);
    const button = $('surveyCompactCopy');
    if (button) {
      const original = button.textContent;
      button.textContent = 'Link copiado!';
      window.setTimeout(() => { button.textContent = original; }, 2200);
    }
  } catch {
    window.prompt('Copie o link da pesquisa:', PUBLIC_SURVEY_URL);
  }
}

$('surveyCompactRefresh')?.addEventListener('click', load);
$('surveyCompactCopy')?.addEventListener('click', copyLink);

load();
