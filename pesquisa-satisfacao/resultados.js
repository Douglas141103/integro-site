import {
  SURVEY_SLUG,
  DOMAIN_LABELS,
  PRIORITY_LABELS,
  computeSurveyMetrics,
  buildManagementAnalysis,
  buildSurveyCsv,
  percentage
} from './core.mjs?v=20260807-2';

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
let latestAiReport = null;
let aiRequestInFlight = false;
let aiAnalysisRevision = 0;
let dashboardLoadRevision = 0;

function invalidateDashboardLoads() {
  dashboardLoadRevision += 1;
}

function clearNode(node) {
  while (node?.firstChild) node.removeChild(node.firstChild);
}

function clearAiAnalysis() {
  aiAnalysisRevision += 1;
  latestAiReport = null;
  const panel = $('aiAnalysisPanel');
  panel?.classList.add('hidden');
  panel?.classList.remove('has-ai-analysis');
  $('aiLoadingState')?.classList.add('hidden');
  $('aiErrorState')?.classList.add('hidden');
  $('aiAnalysisContent')?.classList.add('hidden');
  [
    'aiStrengths',
    'aiAttentionPoints',
    'aiSegmentInsights',
    'aiActionPlanTable',
    'aiMonitoringRecommendations',
    'aiRisksLimitations'
  ].forEach((id) => clearNode($(id)));
  ['aiExecutiveSummary', 'aiConfidenceExplanation', 'aiFinalAssessment', 'aiAnalysisMeta']
    .forEach((id) => { if ($(id)) $(id).textContent = ''; });
  if (!aiRequestInFlight && $('aiAnalysisButton')) {
    $('aiAnalysisButton').disabled = false;
    $('aiAnalysisButton').textContent = 'Gerar análise com IA';
  }
}

function clearSensitivePayload() {
  clearAiAnalysis();
  rawPayload = null;
  latestMetrics = null;
  currentProfile = null;
  [
    'commentsList',
    'participantsTable',
    'questionsTable',
    'domainChart',
    'priorityChart',
    'trendChart',
    'analysisOverview',
    'overallDistributionChart',
    'analysisDomainsTable',
    'strongestQuestions',
    'attentionQuestions',
    'analysisActions',
    'gradeBreakdown',
    'shiftBreakdown',
    'relationshipBreakdown'
  ]
    .forEach((id) => clearNode($(id)));
}

function clearSensitiveState() {
  invalidateDashboardLoads();
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
  const labelStep = Math.max(1, Math.ceil(items.length / 5));
  root.classList.toggle('trend-dense', items.length > 14);
  if (!items.length) {
    root.append(createElement('div', 'empty-state', 'O gráfico aparecerá quando as primeiras respostas forem recebidas.'));
    return;
  }

  const max = Math.max(...items.map(([, count]) => count), 1);
  items.forEach(([label, count], index) => {
    const day = createElement('div', 'trend-day');
    if (index === 0 || index === items.length - 1 || index % labelStep === 0) {
      day.classList.add('trend-label-key');
    }
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

function renderOverallDistribution(analysis) {
  const root = $('overallDistributionChart');
  clearNode(root);

  for (const item of analysis.overallDistribution) {
    const row = createElement('div', 'distribution-row');
    const track = createElement('div', 'distribution-track');
    const fill = createElement('div', `distribution-fill score-${item.key}`);
    fill.style.width = `${Math.max(0, Math.min(100, Number(item.rate || 0)))}%`;
    track.append(fill);
    row.append(
      createElement('span', '', item.label),
      track,
      createElement('span', 'distribution-value', `${formatPercent(item.rate)} • ${item.count}`)
    );
    root.append(row);
  }
}

function renderAnalysisDomains(analysis) {
  const body = $('analysisDomainsTable');
  clearNode(body);

  for (const domain of analysis.rankedDomains) {
    const row = document.createElement('tr');
    row.append(
      createElement('td', '', domain.label),
      createElement('td', 'cell-index', `${Number(domain.index).toFixed(1).replace('.', ',')}/100`),
      createElement('td', '', formatPercent(domain.satisfiedRate)),
      createElement('td', '', formatPercent(domain.dissatisfiedRate)),
      createElement('td', '', formatPercent(domain.notApplicableRate))
    );
    const bandCell = document.createElement('td');
    bandCell.append(createElement('span', `analysis-band band-${domain.band.key}`, domain.band.label));
    row.append(bandCell);
    body.append(row);
  }

  if (!analysis.rankedDomains.length) {
    const row = document.createElement('tr');
    const cell = createElement('td', '', 'Ainda não há avaliações válidas para comparar as áreas.');
    cell.colSpan = 6;
    row.append(cell);
    body.append(row);
  }
}

function renderQuestionRanking(rootId, questions) {
  const root = $(rootId);
  clearNode(root);

  for (const question of questions) {
    const item = document.createElement('li');
    item.append(
      createElement('strong', '', `${Number(question.index).toFixed(1).replace('.', ',')}/100 • ${question.domainLabel}`),
      createElement('span', '', question.prompt),
      createElement(
        'small',
        '',
        `Satisfeitos: ${formatPercent(question.satisfiedRate)} • Insatisfeitos: ${formatPercent(question.dissatisfiedRate)}`
      )
    );
    root.append(item);
  }

  if (!questions.length) {
    root.append(createElement('li', '', 'Sem avaliações válidas neste recorte.'));
  }
}

function renderAnalysisActions(actions) {
  const root = $('analysisActions');
  clearNode(root);

  for (const action of actions) {
    const item = createElement('li', `action-${action.level}`);
    item.append(createElement('strong', '', action.title), createElement('span', '', action.detail));
    root.append(item);
  }
}

function renderBreakdown(rootId, items) {
  const root = $(rootId);
  clearNode(root);

  if (!items.length) {
    root.append(createElement('div', 'empty-state', 'Sem participações neste recorte.'));
    return;
  }

  for (const item of items) {
    const row = createElement('div', 'breakdown-row');
    const label = createElement('span', '', item.label);
    label.title = item.label;
    const track = createElement('div', 'breakdown-track');
    const fill = createElement('div', 'breakdown-fill');
    fill.style.width = `${Math.max(0, Math.min(100, Number(item.rate || 0)))}%`;
    track.append(fill);
    row.append(label, track, createElement('span', 'breakdown-value', `${item.count} • ${formatPercent(item.rate)}`));
    root.append(row);
  }
}

function renderManagementAnalysis(metrics) {
  const includeContactPermission = ['integro_admin', 'diretor'].includes(rawPayload?.viewer_role);
  const analysis = buildManagementAnalysis(metrics, { includeContactPermission });
  const overviewRoot = $('analysisOverview');
  clearNode(overviewRoot);

  if (analysis.overview.length) {
    analysis.overview.forEach((finding) => {
      const card = document.createElement('article');
      card.append(createElement('strong', '', finding.label), createElement('p', '', finding.text));
      overviewRoot.append(card);
    });
  } else {
    overviewRoot.append(createElement('div', 'empty-state', analysis.sample.text));
  }

  const sampleBadge = $('analysisSampleBadge');
  sampleBadge.className = `analysis-sample-badge sample-${analysis.sample.key}`;
  sampleBadge.textContent = analysis.sample.label;
  sampleBadge.title = analysis.sample.text;
  $('analysisCoverage').textContent = formatPercent(analysis.coverageRate);
  $('analysisNotApplicable').textContent = formatPercent(analysis.notApplicableRate);
  $('analysisCommentRate').textContent = formatPercent(analysis.commentRate);

  $('analysisContactCard').classList.toggle('hidden', !analysis.canAnalyzeContactPermission);
  $('analysisIndicatorGrid').classList.toggle('without-contact', !analysis.canAnalyzeContactPermission);
  if (analysis.canAnalyzeContactPermission) {
    $('analysisContactRate').textContent = formatPercent(analysis.contactRate);
    $('analysisContactDetail').textContent = `${analysis.contactCount} família(s)`;
  }

  renderOverallDistribution(analysis);
  renderAnalysisDomains(analysis);
  renderQuestionRanking('strongestQuestions', analysis.strongestQuestions);
  renderQuestionRanking('attentionQuestions', analysis.attentionQuestions);
  renderAnalysisActions(analysis.actions);
  renderBreakdown('gradeBreakdown', analysis.breakdowns.grades);
  renderBreakdown('shiftBreakdown', analysis.breakdowns.shifts);
  renderBreakdown('relationshipBreakdown', analysis.breakdowns.relationships);

  $('analysisMethodNote').textContent =
    `Metodologia: o índice geral dá o mesmo peso às cinco áreas e converte a escala de três níveis para 0 a 100; “Não sei avaliar” não entra na nota. ${analysis.sample.text} Esta é uma análise descritiva, não uma inferência estatística.`;
}

function appendAiEvidence(root, items) {
  const evidence = Array.isArray(items) ? items.filter((item) => String(item || '').trim()) : [];
  if (!evidence.length) return;
  const list = createElement('ul', 'ai-evidence-list');
  evidence.forEach((item) => list.append(createElement('li', '', item)));
  root.append(list);
}

function renderAiFindings(rootId, items, type) {
  const root = $(rootId);
  clearNode(root);
  const findings = Array.isArray(items) ? items : [];

  if (!findings.length) {
    root.append(createElement('div', 'empty-state', 'Nenhum achado foi informado nesta seção.'));
    return;
  }

  for (const finding of findings) {
    const card = createElement('article', 'ai-finding-card');

    if (type === 'segment') {
      card.append(
        createElement('strong', '', finding.segment || 'Segmento'),
        createElement('p', '', finding.finding || '')
      );
      if (finding.caution) card.append(createElement('small', '', `Cautela: ${finding.caution}`));
    } else {
      card.append(
        createElement('strong', '', finding.title || 'Achado'),
        createElement('p', '', finding.finding || '')
      );
      appendAiEvidence(card, finding.evidence);
      if (finding.management_implication) {
        card.append(createElement('small', '', `Implicação para a gestão: ${finding.management_implication}`));
      }
    }

    root.append(card);
  }
}

function renderAiStringList(rootId, values) {
  const root = $(rootId);
  clearNode(root);
  const items = Array.isArray(values) ? values.filter((item) => String(item || '').trim()) : [];
  if (!items.length) {
    root.append(createElement('li', '', 'Nenhum item informado.'));
    return;
  }
  items.forEach((item) => root.append(createElement('li', '', item)));
}

function renderAiActionPlan(actions) {
  const body = $('aiActionPlanTable');
  clearNode(body);
  const rows = Array.isArray(actions) ? [...actions] : [];
  rows.sort((left, right) => Number(left.priority || 99) - Number(right.priority || 99));

  for (const action of rows) {
    const row = document.createElement('tr');
    const priorityCell = document.createElement('td');
    priorityCell.append(createElement('span', 'ai-priority-number', action.priority || '—'));
    const indicatorTarget = [action.indicator, action.target].filter(Boolean).join(' • Meta: ');
    row.append(
      priorityCell,
      createElement('td', '', String(action.horizon || '').replaceAll('_', ' ')),
      createElement('td', '', action.action || ''),
      createElement('td', '', action.owner_suggestion || ''),
      createElement('td', '', indicatorTarget || '—'),
      createElement('td', '', action.rationale || '')
    );
    body.append(row);
  }

  if (!rows.length) {
    const row = document.createElement('tr');
    const cell = createElement('td', '', 'Nenhuma ação foi sugerida.');
    cell.colSpan = 6;
    row.append(cell);
    body.append(row);
  }
}

function renderAiAnalysis(payload) {
  const analysis = payload?.analysis;
  const meta = payload?.meta || {};
  if (!analysis || typeof analysis.executive_summary !== 'string' || typeof analysis.final_assessment !== 'string') {
    throw new Error('A resposta da análise veio incompleta.');
  }

  latestAiReport = payload;
  const confidenceLevel = ['baixa', 'moderada', 'alta'].includes(analysis.confidence?.level)
    ? analysis.confidence.level
    : 'moderada';
  const badge = $('aiConfidenceBadge');
  badge.className = `ai-confidence-badge confidence-${confidenceLevel}`;
  badge.textContent = `Confiança ${confidenceLevel}`;
  $('aiExecutiveSummary').textContent = analysis.executive_summary;
  $('aiConfidenceExplanation').textContent = analysis.confidence?.explanation || '';
  $('aiFinalAssessment').textContent = analysis.final_assessment;

  renderAiFindings('aiStrengths', analysis.strengths, 'finding');
  renderAiFindings('aiAttentionPoints', analysis.attention_points, 'finding');
  renderAiFindings('aiSegmentInsights', analysis.segment_insights, 'segment');
  renderAiActionPlan(analysis.action_plan);
  renderAiStringList('aiMonitoringRecommendations', analysis.monitoring_recommendations);
  renderAiStringList('aiRisksLimitations', analysis.risks_and_limitations);

  const gradeScope = !meta.grade || meta.grade === 'all' ? 'todos os anos' : meta.grade;
  const shiftScope = !meta.shift || meta.shift === 'all' ? 'todos os turnos' : meta.shift;
  $('aiAnalysisMeta').textContent =
    `Análise gerada em ${formatDateTime(meta.generated_at || new Date())} • recorte: ${gradeScope} e ${shiftScope} • ${Number(meta.total_responses || 0)} participação(ões). Somente indicadores quantitativos agregados foram enviados à IA; nenhum nome, telefone ou comentário foi enviado. A narrativa é uma sugestão gerencial e não substitui os KPIs nem a decisão profissional da gestão.`;

  $('aiLoadingState').classList.add('hidden');
  $('aiErrorState').classList.add('hidden');
  $('aiAnalysisContent').classList.remove('hidden');
  $('aiAnalysisPanel').classList.add('has-ai-analysis');
}

async function functionErrorMessage(error, data) {
  if (data?.error?.message) return data.error.message;
  try {
    const context = error?.context;
    const body = context?.clone ? await context.clone().json() : null;
    if (body?.error?.message) return body.error.message;
  } catch {
    // O corpo de erro pode já ter sido consumido pelo cliente Supabase.
  }
  return error?.message || 'Os indicadores e a análise local continuam disponíveis.';
}

function showAiFallback(title, message) {
  $('aiLoadingState').classList.add('hidden');
  $('aiAnalysisContent').classList.add('hidden');
  $('aiErrorTitle').textContent = title;
  $('aiErrorMessage').textContent = message;
  $('aiErrorState').classList.remove('hidden');
  const badge = $('aiConfidenceBadge');
  badge.className = 'ai-confidence-badge confidence-baixa';
  badge.textContent = 'Análise local ativa';
}

async function generateAiAnalysis() {
  if (!client || !rawPayload || !latestMetrics || aiRequestInFlight) return false;
  clearAiAnalysis();
  const requestRevision = aiAnalysisRevision;
  $('aiAnalysisPanel').classList.remove('hidden');

  const filteredResponseCount = latestMetrics.totalResponses;
  if (filteredResponseCount < 5) {
    showAiFallback(
      'Amostra pequena para análise por IA',
      `O recorte atual possui ${filteredResponseCount} resposta(s). Por cautela e proteção dos dados, use a análise local até alcançar pelo menos cinco participações.`
    );
    return false;
  }

  aiRequestInFlight = true;
  $('aiAnalysisButton').disabled = true;
  $('aiAnalysisButton').textContent = 'Analisando...';
  $('printButton').disabled = true;
  $('aiLoadingState').classList.remove('hidden');
  $('aiErrorState').classList.add('hidden');

  try {
    const grade = $('gradeFilter').value;
    const shift = $('shiftFilter').value;
    const { data, error } = await client.functions.invoke('analyze-school-satisfaction', {
      body: { survey_slug: SURVEY_SLUG, grade, shift }
    });
    if (requestRevision !== aiAnalysisRevision) return false;
    if (error || data?.error) {
      throw Object.assign(error || new Error(data.error.message), { responseData: data });
    }
    renderAiAnalysis(data);
    showToast('Análise por IA concluída e incluída no relatório PDF.');
    return true;
  } catch (error) {
    if (requestRevision !== aiAnalysisRevision) return false;
    console.error('Erro ao gerar análise por IA:', error);
    const message = await functionErrorMessage(error, error?.responseData);
    showAiFallback('Não foi possível gerar a análise por IA', message);
    return false;
  } finally {
    aiRequestInFlight = false;
    $('aiAnalysisButton').disabled = false;
    $('aiAnalysisButton').textContent = latestAiReport ? 'Atualizar análise com IA' : 'Gerar análise com IA';
    $('printButton').disabled = false;
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
  clearAiAnalysis();
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

  const gradeLabel = $('gradeFilter').value === 'all' ? 'todos os anos' : $('gradeFilter').value;
  const shiftLabel = $('shiftFilter').value === 'all' ? 'todos os turnos' : $('shiftFilter').value;
  $('reportFilterSummary').textContent = `Recorte analisado: ${gradeLabel} • ${shiftLabel}`;
  $('reportFooterText').textContent = `Recorte: ${gradeLabel} • ${shiftLabel} • Gerado em ${formatDateTime(new Date())}`;
  $('aiScopeNote').textContent = `A IA usará somente indicadores quantitativos agregados do mesmo recorte dos gráficos e do PDF: ${gradeLabel} e ${shiftLabel}. Nenhum nome, telefone ou comentário será enviado.`;

  renderManagementAnalysis(latestMetrics);
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

async function loadProfile(userId, email, expectedRevision) {
  const { data, error } = await client
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', userId)
    .limit(1)
    .maybeSingle();
  if (expectedRevision !== dashboardLoadRevision) return false;
  if (error || !data) throw new Error('Perfil de acesso não encontrado.');
  currentProfile = data;
  $('viewerName').textContent = data.full_name || email || 'Usuário';
  return true;
}

async function loadDashboard() {
  const loadRevision = ++dashboardLoadRevision;
  if (!client) {
    showError('Configuração indisponível', 'O painel não está conectado ao sistema da escola.');
    return;
  }

  clearSensitivePayload();
  showOnly(loadingState);

  try {
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (loadRevision !== dashboardLoadRevision) return;
    if (sessionError) throw sessionError;
    const session = sessionData?.session;
    if (!session) {
      $('viewerName').textContent = 'Acesso protegido';
      showOnly(loginState);
      return;
    }

    const profileLoaded = await loadProfile(session.user.id, session.user.email, loadRevision);
    if (!profileLoaded || loadRevision !== dashboardLoadRevision) return;
    if (!['integro_admin', 'diretor', 'coordenacao'].includes(currentProfile.role)) {
      showError('Acesso não autorizado', 'Este painel é exclusivo para administrador, direção e coordenação.');
      return;
    }

    const { data, error } = await client.rpc('get_school_satisfaction_results', { p_slug: SURVEY_SLUG });
    if (loadRevision !== dashboardLoadRevision) return;
    if (error) throw error;
    if (!data?.survey) throw new Error('A edição da pesquisa não foi encontrada.');
    rawPayload = data;
    renderDashboard(data);
  } catch (error) {
    if (loadRevision !== dashboardLoadRevision) return;
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

const defaultDocumentTitle = document.title;

async function prepareReportPrint() {
  if (!latestMetrics) {
    showToast('Aguarde o carregamento dos dados antes de gerar o relatório.');
    return;
  }

  if (!latestAiReport && latestMetrics.totalResponses >= 5) {
    $('printButton').disabled = true;
    $('printButton').textContent = 'Preparando análise...';
    const aiReady = await generateAiAnalysis();
    $('printButton').disabled = false;
    $('printButton').textContent = 'Gerar relatório PDF';
    if (!aiReady) {
      showToast('A IA não ficou disponível; o PDF seguirá com a análise gerencial calculada localmente.');
    }
  } else if (!latestAiReport && latestMetrics.totalResponses < 5) {
    showToast('Amostra inferior a cinco respostas: o PDF usará somente a análise local com aviso de cautela.');
  }

  const gradePart = $('gradeFilter').value === 'all' ? 'todos-os-anos' : $('gradeFilter').value;
  const shiftPart = $('shiftFilter').value === 'all' ? 'todos-os-turnos' : $('shiftFilter').value;
  document.title = `relatorio-pesquisa-etelvina-${gradePart}-${shiftPart}-${new Date().toISOString().slice(0, 10)}`
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
  document.body.classList.add('report-printing');
  $('reportFooterText').textContent = `${$('reportFilterSummary').textContent} • Gerado em ${formatDateTime(new Date())}`;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => window.print());
  });
}

function finishReportPrint() {
  document.body.classList.remove('report-printing');
  document.title = defaultDocumentTitle;
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
$('printButton').addEventListener('click', prepareReportPrint);
$('exportButton').addEventListener('click', exportCsv);
$('aiAnalysisButton').addEventListener('click', generateAiAnalysis);
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
    invalidateDashboardLoads();
    clearSensitivePayload();
    $('viewerName').textContent = 'Acesso protegido';
    showOnly(loginState);
  }
});

window.addEventListener('pagehide', clearSensitiveState);
window.addEventListener('afterprint', finishReportPrint);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) loadDashboard();
});

loadDashboard();
