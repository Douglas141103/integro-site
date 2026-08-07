import {
  SURVEY_SLUG,
  DOMAIN_LABELS,
  PRIORITY_LABELS,
  computeSurveyMetrics,
  buildSurveyCsv,
  percentage
} from './core.mjs';

const PUBLIC_SURVEY_URL = 'https://www.institutointegro.com.br/pesquisa-satisfacao/';
const TIME_ZONE = 'America/Manaus';
const cfg = window.INTEGRO_SUPABASE || {};
const supabaseGlobal = window.supabase;
const client = cfg.url && cfg.anonKey && supabaseGlobal?.createClient
  ? supabaseGlobal.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  : null;

const $ = (id) => document.getElementById(id);
const loadingState = $('loadingState');
const loginState = $('loginState');
const errorState = $('errorState');
const dashboard = $('dashboard');
let rawPayload = null;
let latestMetrics = null;
let currentProfile = null;
let toastTimer = null;

function clearNode(node) {
  while (node?.firstChild) node.removeChild(node.firstChild);
}

function clearSensitivePayload() {
  rawPayload = null;
  latestMetrics = null;
  currentProfile = null;
  ['commentsList', 'participantsTable', 'questionsTable', 'domainChart', 'priorityChart', 'trendChart']
    .forEach((id) => clearNode($(id)));
}

function clearSensitiveState() {
  clearSensitivePayload();
  $('viewerName').textContent = 'Acesso protegido';
  showOnly(loadingState);
}

function showOnly(state) {
  [loadingState, loginState, errorState, dashboard].forEach((element) => {
    element?.classList.toggle('hidden', element !== state);
  });
}

function showError(title, message) {
  clearSensitivePayload();
  $('errorTitle').textContent = title;
  $('errorMessage').textContent = message;
  showOnly(errorState);
}

function showToast(message) {
  const toast = $('toast');
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove('hidden');
  toastTimer = window.setTimeout(() => toast.classList.add('hidden'), 3000);
}

function formatDateTime(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: TIME_ZONE
  }).format(new Date(value));
}

function formatPercent(value) {
  return value !== null && value !== undefined && Number.isFinite(Number(value))
    ? `${Number(value).toFixed(1).replace('.', ',')}%`
    : '—';
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = String(text);
  return element;
}

function renderDomainChart(metrics) {
  const root = $('domainChart');
  clearNode(root);

  metrics.domainMetrics.forEach((domain) => {
    const row = createElement('div', 'domain-row');
    const label = createElement('div', 'domain-label');
    label.append(
      createElement('strong', '', domain.label),
      createElement('small', '', `${domain.ratedCount} avaliações válidas`)
    );

    const track = createElement('div', 'index-track');
    const fill = createElement('div', 'index-fill');
    fill.style.width = `${domain.index ?? 0}%`;
    track.append(fill);

    const value = createElement('div', 'index-value', domain.index === null ? '—' : Math.round(domain.index));
    value.setAttribute('aria-label', `${domain.label}: índice ${domain.index ?? 'sem dados'} de 100`);

    const stack = createElement('div', 'stacked-bar');
    const total = domain.totalCount || 0;
    metrics.scale.forEach((option) => {
      const segment = createElement('span', `score-${option.value}`);
      segment.style.width = `${percentage(domain.distribution[String(option.value)] || 0, total)}%`;
      segment.title = `${option.label}: ${domain.distribution[String(option.value)] || 0}`;
      stack.append(segment);
    });
    const notApplicable = createElement('span', 'score-na');
    notApplicable.style.width = `${percentage(domain.notApplicable, total)}%`;
    notApplicable.title = `Não sei avaliar: ${domain.notApplicable}`;
    stack.append(notApplicable);

    const counts = createElement(
      'div',
      'domain-counts',
      metrics.scale.map((option) => `${option.shortLabel || option.label}: ${domain.distribution[String(option.value)] || 0}`).join(' • ') +
        ` • Não sabe: ${domain.notApplicable}`
    );

    row.append(label, track, value, stack, counts);
    root.append(row);
  });
}

function renderPriorityChart(metrics) {
  const root = $('priorityChart');
  clearNode(root);
  const max = Math.max(1, ...metrics.rankedPriorities.map((item) => item.count));

  metrics.rankedPriorities.forEach((item) => {
    const row = createElement('div', 'priority-row');
    const label = createElement('span', '', item.label);
    label.title = item.label;
    const track = createElement('div', 'priority-track');
    const fill = createElement('div', 'priority-fill');
    fill.style.width = `${(item.count / max) * 100}%`;
    track.append(fill);
    const count = createElement('span', 'priority-count', item.count);
    count.title = `${formatPercent(item.rate)} das participações filtradas`;
    row.append(label, track, count);
    root.append(row);
  });

  if (!metrics.totalResponses) {
    root.append(createElement('div', 'empty-state', 'Ainda não há respostas para este recorte.'));
  }
}

function renderTrendChart(metrics) {
  const root = $('trendChart');
  clearNode(root);
  const counts = new Map();

  metrics.responses.forEach((response) => {
    const dateParts = new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit',
      timeZone: TIME_ZONE
    }).formatToParts(new Date(response.submitted_at));
    const part = (type) => dateParts.find((item) => item.type === type)?.value || '';
    const key = `${part('year')}-${part('month')}-${part('day')}`;
    const current = counts.get(key) || { count: 0, label: `${part('day')}/${part('month')}` };
    current.count += 1;
    counts.set(key, current);
  });

  const items = [...counts.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, item]) => [item.label, item.count]);
  if (!items.length) {
    root.append(createElement('div', 'empty-state', 'O gráfico aparecerá quando as primeiras respostas forem recebidas.'));
    return;
  }

  const max = Math.max(...items.map(([, count]) => count), 1);
  items.forEach(([label, count]) => {
    const day = createElement('div', 'trend-day');
    const value = createElement('span', 'trend-value', count);
    const wrap = createElement('div', 'trend-bar-wrap');
    const bar = createElement('div', 'trend-bar');
    bar.style.height = `${Math.max(4, (count / max) * 100)}%`;
    bar.title = `${count} resposta(s) em ${label}`;
    wrap.append(bar);
    day.append(value, wrap, createElement('span', 'trend-label', label));
    root.append(day);
  });
}

function renderQuestionsTable(metrics) {
  const body = $('questionsTable');
  clearNode(body);

  metrics.questionMetrics.forEach((question) => {
    const row = document.createElement('tr');
    const questionCell = document.createElement('td');
    questionCell.append(
      createElement('span', 'question-domain', question.domain_label || DOMAIN_LABELS[question.domain]),
      document.createTextNode(question.prompt)
    );
    const values = [
      question.index === null ? '—' : Math.round(question.index),
      question.distribution['1'] || 0,
      question.distribution['2'] || 0,
      question.distribution['3'] || 0,
      question.notApplicable || 0
    ];
    row.append(questionCell);
    values.forEach((value, index) => row.append(createElement('td', index === 0 ? 'cell-index' : '', value)));
    body.append(row);
  });
}

function renderComments(metrics) {
  const root = $('commentsList');
  clearNode(root);
  $('commentsCount').textContent = `${metrics.comments.length} ${metrics.comments.length === 1 ? 'comentário' : 'comentários'}`;

  if (!metrics.comments.length) {
    root.append(createElement('div', 'empty-state', 'Nenhum comentário foi enviado neste recorte.'));
    return;
  }

  metrics.comments.forEach((response) => {
    const card = createElement('article', 'comment-card');
    const meta = createElement('div', 'comment-meta');
    const priority = PRIORITY_LABELS[response.improvement_priority] || 'Não informada';
    meta.append(createElement('span', 'comment-tag', priority));
    [response.student_grade, response.student_shift, formatDateTime(response.submitted_at)]
      .filter(Boolean)
      .forEach((value) => meta.append(createElement('span', '', value)));
    card.append(meta, createElement('p', '', response.improvement_comment));
    root.append(card);
  });
}

function renderParticipants(metrics) {
  const body = $('participantsTable');
  clearNode(body);
  $('participantsCount').textContent = String(metrics.totalResponses);
  const canVoid = ['integro_admin', 'diretor'].includes(rawPayload?.viewer_role);

  metrics.responses.forEach((response) => {
    const row = document.createElement('tr');
    [
      response.respondent_name || '—',
      response.phone_masked || '—',
      response.student_grade || '—',
      response.student_shift || '—',
      response.contact_permission ? 'Sim' : 'Não',
      formatDateTime(response.submitted_at)
    ].forEach((value) => row.append(createElement('td', '', value)));

    const actionCell = document.createElement('td');
    if (canVoid) {
      const actionButton = createElement('button', 'button button-danger participant-action', 'Anular');
      actionButton.type = 'button';
      actionButton.addEventListener('click', () => voidResponse(response));
      actionCell.append(actionButton);
    } else {
      actionCell.textContent = '—';
    }
    row.append(actionCell);
    body.append(row);
  });

  if (!metrics.totalResponses) {
    const row = document.createElement('tr');
    const cell = createElement('td', '', 'Ainda não há participações.');
    cell.colSpan = 7;
    row.append(cell);
    body.append(row);
  }
}

async function voidResponse(response) {
  const reason = window.prompt(
    `Informe o motivo para anular a participação de ${response.respondent_name || 'este responsável'}:`
  );
  if (reason === null) return;
  if (reason.trim().length < 5) {
    showToast('Informe um motivo com pelo menos 5 caracteres.');
    return;
  }

  const confirmed = window.confirm(
    'A resposta deixará de entrar nos gráficos e esse telefone poderá preencher a pesquisa novamente. O histórico será preservado. Deseja continuar?'
  );
  if (!confirmed) return;

  try {
    const { data, error } = await client.rpc('void_school_satisfaction_response', {
      p_response_id: response.id,
      p_reason: reason.trim()
    });
    if (error) throw error;
    if (data?.status !== 'voided') throw new Error('A participação não foi anulada.');
    showToast('Participação anulada; o telefone já pode responder novamente.');
    await loadDashboard();
  } catch (error) {
    console.error('Erro ao anular participação:', error);
    showToast(error.message || 'Não foi possível anular a participação.');
  }
}

function renderMetrics() {
  if (!rawPayload) return;
  latestMetrics = computeSurveyMetrics(rawPayload, {
    grade: $('gradeFilter').value,
    shift: $('shiftFilter').value
  });

  $('totalResponses').textContent = String(latestMetrics.totalResponses);
  $('overallIndex').textContent = latestMetrics.overallIndex === null ? '—' : `${Math.round(latestMetrics.overallIndex)}/100`;
  $('positiveRate').textContent = formatPercent(latestMetrics.positiveRate);
  $('topPriority').textContent = latestMetrics.topPriority?.label || 'Sem dados';
  $('topPriorityDetail').textContent = latestMetrics.topPriority
    ? `${latestMetrics.topPriority.count} indicação(ões) neste recorte`
    : 'aguardando respostas';
  $('smallSampleWarning').classList.toggle('hidden', latestMetrics.totalResponses === 0 || latestMetrics.totalResponses >= 5);

  renderDomainChart(latestMetrics);
  renderPriorityChart(latestMetrics);
  renderTrendChart(latestMetrics);
  renderQuestionsTable(latestMetrics);
  renderComments(latestMetrics);
  renderParticipants(latestMetrics);
}

function addSelectOptions(select, values, selected) {
  const first = select.options[0]?.cloneNode(true);
  clearNode(select);
  if (first) select.append(first);
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
  select.value = values.includes(selected) ? selected : 'all';
}

function renderDashboard(payload) {
  const survey = payload.survey || {};
  const initial = computeSurveyMetrics(payload);
  const previousGrade = $('gradeFilter').value;
  const previousShift = $('shiftFilter').value;
  addSelectOptions($('gradeFilter'), initial.grades, previousGrade);
  addSelectOptions($('shiftFilter'), initial.shifts, previousShift);

  $('surveyTitle').textContent = survey.title || 'Pesquisa de Satisfação das Famílias';
  $('schoolName').textContent = survey.school_name || 'Escola parceira';
  $('lastUpdate').textContent = survey.last_response_at
    ? `Última resposta em ${formatDateTime(survey.last_response_at)} • painel atualizado em ${formatDateTime(new Date())}`
    : `Nenhuma resposta recebida • painel atualizado em ${formatDateTime(new Date())}`;

  const isActive = survey.status === 'active';
  const isArchived = survey.status === 'archived';
  $('surveyStatus').textContent = isActive
    ? 'Pesquisa aberta'
    : (isArchived ? 'Encerrada e anonimizada' : 'Pesquisa encerrada');
  $('surveyStatus').classList.toggle('closed', !isActive);
  $('statusButton').textContent = isActive ? 'Encerrar pesquisa' : 'Reabrir pesquisa';
  const canManageStatus = ['integro_admin', 'diretor'].includes(payload.viewer_role) && !isArchived;
  $('statusButton').classList.toggle('hidden', !canManageStatus);
  renderMetrics();
  showOnly(dashboard);
}

async function loadProfile(userId, email) {
  const { data, error } = await client
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', userId)
    .limit(1)
    .maybeSingle();
  if (error || !data) throw new Error('Perfil de acesso não encontrado.');
  currentProfile = data;
  $('viewerName').textContent = data.full_name || email || 'Usuário';
}

async function loadDashboard() {
  if (!client) {
    showError('Configuração indisponível', 'O painel não está conectado ao sistema da escola.');
    return;
  }

  clearSensitivePayload();
  showOnly(loadingState);

  try {
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw sessionError;
    const session = sessionData?.session;
    if (!session) {
      $('viewerName').textContent = 'Acesso protegido';
      showOnly(loginState);
      return;
    }

    await loadProfile(session.user.id, session.user.email);
    if (!['integro_admin', 'diretor', 'coordenacao'].includes(currentProfile.role)) {
      showError('Acesso não autorizado', 'Este painel é exclusivo para administrador, direção e coordenação.');
      return;
    }

    const { data, error } = await client.rpc('get_school_satisfaction_results', { p_slug: SURVEY_SLUG });
    if (error) throw error;
    if (!data?.survey) throw new Error('A edição da pesquisa não foi encontrada.');
    rawPayload = data;
    renderDashboard(data);
  } catch (error) {
    console.error('Erro ao carregar apuração:', error);
    const denied = String(error?.code || '') === '42501' || /permissão|outra escola/i.test(error?.message || '');
    showError(
      denied ? 'Acesso não autorizado' : 'Não foi possível carregar a apuração',
      denied ? 'Seu perfil não possui acesso aos resultados desta escola.' : (error.message || 'Tente novamente em alguns instantes.')
    );
  }
}

async function copyPublicLink() {
  try {
    await navigator.clipboard.writeText(PUBLIC_SURVEY_URL);
    showToast('Link da pesquisa copiado.');
  } catch {
    const input = document.createElement('textarea');
    input.value = PUBLIC_SURVEY_URL;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    showToast('Link da pesquisa copiado.');
  }
}

function exportCsv() {
  if (!latestMetrics) return;
  const csv = `\uFEFF${buildSurveyCsv(latestMetrics)}`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `pesquisa-satisfacao-etelvina-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('Planilha CSV gerada com os filtros atuais.');
}

async function toggleSurveyStatus() {
  if (!rawPayload?.survey) return;
  if (rawPayload.survey.status === 'archived') {
    showToast('Uma edição anonimizada não pode ser reaberta. Crie uma nova edição para uma nova coleta.');
    return;
  }
  const isActive = rawPayload.survey.status === 'active';
  const nextStatus = isActive ? 'closed' : 'active';
  const action = isActive ? 'encerrar' : 'reabrir';
  const reason = window.prompt(`Informe o motivo para ${action} esta pesquisa:`);
  if (reason === null) return;
  if (reason.trim().length < 5) {
    showToast('Informe um motivo com pelo menos 5 caracteres.');
    return;
  }

  $('statusButton').disabled = true;
  try {
    const { data, error } = await client.rpc('set_school_satisfaction_status', {
      p_slug: SURVEY_SLUG,
      p_status: nextStatus,
      p_reason: reason.trim()
    });
    if (error) throw error;
    if (data?.status !== 'updated') throw new Error('O status não foi alterado.');
    showToast(isActive ? 'Pesquisa encerrada.' : 'Pesquisa reaberta.');
    await loadDashboard();
  } catch (error) {
    console.error(error);
    showToast(error.message || 'Não foi possível alterar o status.');
  } finally {
    $('statusButton').disabled = false;
  }
}

$('gradeFilter').addEventListener('change', renderMetrics);
$('shiftFilter').addEventListener('change', renderMetrics);
$('refreshButton').addEventListener('click', loadDashboard);
$('retryButton').addEventListener('click', loadDashboard);
$('copyLinkButton').addEventListener('click', copyPublicLink);
$('copyLinkSecondary').addEventListener('click', copyPublicLink);
$('printButton').addEventListener('click', () => window.print());
$('exportButton').addEventListener('click', exportCsv);
$('statusButton').addEventListener('click', toggleSurveyStatus);
$('logoutButton').addEventListener('click', async () => {
  clearSensitiveState();
  try {
    await client?.auth.signOut();
  } finally {
    window.location.replace('/portal/index.html');
  }
});

client?.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') {
    clearSensitivePayload();
    $('viewerName').textContent = 'Acesso protegido';
    showOnly(loginState);
  }
});

window.addEventListener('pagehide', clearSensitiveState);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) loadDashboard();
});

loadDashboard();
