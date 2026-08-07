export const SURVEY_SLUG = 'etelvina-familias-2026';

export const DOMAIN_ORDER = [
  'gestao',
  'professores',
  'infraestrutura',
  'merenda',
  'secretaria'
];

export const DOMAIN_LABELS = {
  gestao: 'Gestão escolar',
  professores: 'Professores',
  infraestrutura: 'Infraestrutura',
  merenda: 'Merenda escolar',
  secretaria: 'Secretaria'
};

export const PRIORITY_LABELS = {
  ...DOMAIN_LABELS,
  nenhuma: 'Nenhuma no momento',
  nao_sei: 'Não sei responder'
};

export const DEFAULT_SCALE = [
  { value: 1, label: 'Insatisfeito(a)', shortLabel: 'Insatisfeito' },
  { value: 2, label: 'Parcialmente satisfeito(a)', shortLabel: 'Parcialmente' },
  { value: 3, label: 'Satisfeito(a)', shortLabel: 'Satisfeito' }
];

export function onlyDigits(value = '') {
  return String(value).replace(/\D/g, '');
}

export function normalizeBrazilPhone(value = '') {
  let digits = onlyDigits(value);

  if ((digits.length === 12 || digits.length === 13) && digits.startsWith('55')) {
    digits = digits.slice(2);
  }

  while (digits.length > 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (!/^\d{10,11}$/.test(digits)) return '';
  if (/^(\d)\1+$/.test(digits)) return '';
  if (Number(digits.slice(0, 2)) < 11) return '';

  return `55${digits}`;
}

export function formatBrazilPhone(value = '') {
  const canonical = normalizeBrazilPhone(value);
  if (!canonical) return String(value || '');

  const local = canonical.slice(2);
  const ddd = local.slice(0, 2);
  const number = local.slice(2);

  if (number.length === 9) {
    return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
  }

  return `(${ddd}) ${number.slice(0, 4)}-${number.slice(4)}`;
}

export function clampText(value = '', maxLength = 1000) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

export function percentage(part, total, digits = 1) {
  if (!total) return 0;
  const factor = 10 ** digits;
  return Math.round((Number(part) / Number(total)) * 100 * factor) / factor;
}

export function scoreIndex(average, minScore = 1, maxScore = 3) {
  if (average === null || average === undefined || average === '' || !Number.isFinite(Number(average)) || maxScore <= minScore) {
    return null;
  }
  const value = ((Number(average) - minScore) / (maxScore - minScore)) * 100;
  return Math.round(Math.max(0, Math.min(100, value)) * 10) / 10;
}

function average(values) {
  const valid = values.map(Number).filter(Number.isFinite);
  if (!valid.length) return null;
  return valid.reduce((total, value) => total + value, 0) / valid.length;
}

function summarizeAnswers(answers, scale) {
  const values = (scale?.length ? scale : DEFAULT_SCALE).map((item) => Number(item.value));
  const minScore = Math.min(...values);
  const maxScore = Math.max(...values);
  const distribution = Object.fromEntries(values.map((value) => [String(value), 0]));
  let notApplicable = 0;
  const scores = [];

  for (const answer of answers || []) {
    if (answer?.not_applicable || answer?.score === null || answer?.score === undefined) {
      notApplicable += 1;
      continue;
    }

    const score = Number(answer.score);
    if (!values.includes(score)) continue;
    distribution[String(score)] += 1;
    scores.push(score);
  }

  const ratedCount = scores.length;
  const totalCount = ratedCount + notApplicable;
  const avg = average(scores);

  return {
    ratedCount,
    notApplicable,
    totalCount,
    average: avg === null ? null : Math.round(avg * 100) / 100,
    index: scoreIndex(avg, minScore, maxScore),
    distribution,
    rates: Object.fromEntries(
      values.map((value) => [String(value), percentage(distribution[String(value)], ratedCount)])
    )
  };
}

export function computeSurveyMetrics(payload = {}, filters = {}) {
  const survey = payload.survey || {};
  const scale = Array.isArray(payload.scale) && payload.scale.length ? payload.scale : DEFAULT_SCALE;
  const questions = Array.isArray(payload.questions) ? payload.questions : [];
  const responses = Array.isArray(payload.responses) ? payload.responses : [];
  const answers = Array.isArray(payload.answers) ? payload.answers : [];
  const gradeFilter = filters.grade || 'all';
  const shiftFilter = filters.shift || 'all';

  const filteredResponses = responses.filter((response) => {
    const gradeMatches = gradeFilter === 'all' || response.student_grade === gradeFilter;
    const shiftMatches = shiftFilter === 'all' || response.student_shift === shiftFilter;
    return gradeMatches && shiftMatches;
  });

  const responseIds = new Set(filteredResponses.map((response) => response.id));
  const filteredAnswers = answers.filter((answer) => responseIds.has(answer.response_id));
  const questionById = new Map(questions.map((question) => [question.id, question]));

  const questionMetrics = questions.map((question) => {
    const questionAnswers = filteredAnswers.filter((answer) => answer.question_id === question.id);
    return {
      ...question,
      ...summarizeAnswers(questionAnswers, scale)
    };
  });

  const domainMetrics = DOMAIN_ORDER.map((domain) => {
    const domainQuestionIds = new Set(
      questions.filter((question) => question.domain === domain).map((question) => question.id)
    );
    const domainAnswers = filteredAnswers.filter((answer) => domainQuestionIds.has(answer.question_id));
    return {
      domain,
      label: DOMAIN_LABELS[domain] || domain,
      ...summarizeAnswers(domainAnswers, scale)
    };
  });

  const validDomainIndexes = domainMetrics
    .map((domain) => domain.index)
    .filter((value) => Number.isFinite(value));
  const overallIndexValue = average(validDomainIndexes);
  const allSummary = summarizeAnswers(filteredAnswers, scale);
  const highestScore = Math.max(...scale.map((item) => Number(item.value)));
  const positiveCount = Number(allSummary.distribution[String(highestScore)] || 0);

  const priorityCounts = Object.fromEntries(
    [...DOMAIN_ORDER, 'nenhuma', 'nao_sei'].map((key) => [key, 0])
  );

  for (const response of filteredResponses) {
    const priority = response.improvement_priority || 'nao_sei';
    priorityCounts[priority] = Number(priorityCounts[priority] || 0) + 1;
  }

  const priorityOrder = [...DOMAIN_ORDER, 'nenhuma', 'nao_sei'];
  const rankedPriorities = priorityOrder.map((domain) => ({
    domain,
    label: PRIORITY_LABELS[domain] || domain,
    count: priorityCounts[domain] || 0,
    rate: percentage(priorityCounts[domain] || 0, filteredResponses.length)
  })).sort((a, b) => b.count - a.count || priorityOrder.indexOf(a.domain) - priorityOrder.indexOf(b.domain));

  const grades = [...new Set(responses.map((response) => response.student_grade).filter(Boolean))]
    .sort((a, b) => String(a).localeCompare(String(b), 'pt-BR', { numeric: true }));
  const shifts = [...new Set(responses.map((response) => response.student_shift).filter(Boolean))]
    .sort((a, b) => String(a).localeCompare(String(b), 'pt-BR'));

  const comments = filteredResponses
    .filter((response) => String(response.improvement_comment || '').trim())
    .sort((a, b) => new Date(b.submitted_at) - new Date(a.submitted_at));

  const answersByResponse = new Map();
  for (const answer of filteredAnswers) {
    const row = answersByResponse.get(answer.response_id) || {};
    const question = questionById.get(answer.question_id);
    if (question) row[question.code] = answer.not_applicable ? 'Não sei avaliar' : answer.score;
    answersByResponse.set(answer.response_id, row);
  }

  return {
    survey,
    scale,
    questions,
    responses: filteredResponses,
    answers: filteredAnswers,
    answersByResponse,
    totalResponses: filteredResponses.length,
    overallIndex: overallIndexValue === null ? null : Math.round(overallIndexValue * 10) / 10,
    positiveRate: allSummary.ratedCount ? percentage(positiveCount, allSummary.ratedCount) : null,
    allSummary,
    domainMetrics,
    questionMetrics,
    priorityCounts,
    rankedPriorities,
    topPriority: rankedPriorities.find((item) => item.count > 0) || null,
    comments,
    grades,
    shifts
  };
}

export function safeCsvCell(value = '') {
  const raw = String(value ?? '').replace(/\r?\n/g, ' ').trim();
  const protectedValue = /^[=+\-@]/.test(raw) ? `'${raw}` : raw;
  return `"${protectedValue.replaceAll('"', '""')}"`;
}

export function buildSurveyCsv(metrics) {
  const questions = metrics?.questions || [];
  const headers = [
    'Data',
    'Responsável',
    'Telefone',
    'Vínculo',
    'Ano do aluno',
    'Turno',
    'Prioridade de melhoria',
    'Comentário',
    ...questions.map((question) => `${question.code} — ${question.prompt}`)
  ];

  const rows = (metrics?.responses || []).map((response) => {
    const responseAnswers = metrics.answersByResponse?.get(response.id) || {};
    return [
      response.submitted_at ? new Date(response.submitted_at).toLocaleString('pt-BR') : '',
      response.respondent_name || '',
      response.phone_masked || '',
      response.relationship || '',
      response.student_grade || '',
      response.student_shift || '',
      PRIORITY_LABELS[response.improvement_priority] || response.improvement_priority || '',
      response.improvement_comment || '',
      ...questions.map((question) => responseAnswers[question.code] ?? '')
    ];
  });

  return [headers, ...rows]
    .map((row) => row.map(safeCsvCell).join(';'))
    .join('\r\n');
}
