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
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const filteredAnswers = answers.filter((answer) => (
    responseIds.has(answer.response_id) && questionById.has(answer.question_id)
  ));

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

function buildBreakdown(responses, field, fallbackLabel = 'Não informado') {
  const counts = new Map();

  for (const response of responses || []) {
    const rawLabel = String(response?.[field] || '').trim();
    const label = rawLabel || fallbackLabel;
    counts.set(label, Number(counts.get(label) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, count]) => ({
      label,
      count,
      rate: percentage(count, responses?.length || 0)
    }))
    .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label, 'pt-BR', { numeric: true }));
}

function analysisBand(index) {
  if (index === null || index === undefined || !Number.isFinite(Number(index))) {
    return { key: 'sem_dados', label: 'Sem dados', guidance: 'aguardando avaliações válidas' };
  }
  if (Number(index) >= 80) {
    return { key: 'muito_favoravel', label: 'Muito favorável', guidance: 'manter e documentar as práticas bem avaliadas' };
  }
  if (Number(index) >= 65) {
    return { key: 'favoravel', label: 'Favorável', guidance: 'manter o acompanhamento e buscar avanços pontuais' };
  }
  if (Number(index) >= 50) {
    return { key: 'atencao', label: 'Atenção', guidance: 'investigar causas e definir melhorias acompanháveis' };
  }
  return { key: 'prioridade', label: 'Prioridade', guidance: 'planejar intervenção e monitorar a evolução' };
}

function formatAnalysisNumber(value) {
  return Number(value).toFixed(1).replace('.', ',');
}

/**
 * Produz uma leitura gerencial explicável e reprodutível a partir dos mesmos
 * indicadores mostrados no painel. Não envia respostas ou dados pessoais a
 * serviços externos e, por isso, também pode ser usada nos testes e no PDF.
 */
export function buildManagementAnalysis(metrics = {}, options = {}) {
  const responses = Array.isArray(metrics.responses) ? metrics.responses : [];
  const scale = Array.isArray(metrics.scale) && metrics.scale.length ? metrics.scale : DEFAULT_SCALE;
  const domainMetrics = Array.isArray(metrics.domainMetrics) ? metrics.domainMetrics : [];
  const questionMetrics = Array.isArray(metrics.questionMetrics) ? metrics.questionMetrics : [];
  const totalResponses = Number(metrics.totalResponses || responses.length || 0);
  const highestScore = Math.max(...scale.map((item) => Number(item.value)));
  const lowestScore = Math.min(...scale.map((item) => Number(item.value)));
  const totalAnswers = Number(metrics.allSummary?.totalCount || 0);
  const notApplicable = Number(metrics.allSummary?.notApplicable || 0);
  const coverageRate = percentage(Number(metrics.allSummary?.ratedCount || 0), totalAnswers);
  const notApplicableRate = percentage(notApplicable, totalAnswers);
  const commentRate = percentage(metrics.comments?.length || 0, totalResponses);
  const canAnalyzeContactPermission = options.includeContactPermission === true;
  const contactCount = canAnalyzeContactPermission
    ? responses.filter((response) => response.contact_permission).length
    : null;
  const contactRate = canAnalyzeContactPermission ? percentage(contactCount, totalResponses) : null;

  const rankedDomains = domainMetrics
    .filter((item) => item.index !== null && item.index !== undefined && Number.isFinite(Number(item.index)))
    .map((item) => ({
      ...item,
      satisfiedRate: Number(item.rates?.[String(highestScore)] || 0),
      dissatisfiedRate: Number(item.rates?.[String(lowestScore)] || 0),
      notApplicableRate: percentage(item.notApplicable || 0, item.totalCount || 0),
      band: analysisBand(item.index)
    }))
    .sort((left, right) => Number(right.index) - Number(left.index) || left.label.localeCompare(right.label, 'pt-BR'));

  const questionAnalyses = questionMetrics.map((item) => ({
    ...item,
    label: item.prompt,
    domainLabel: item.domain_label || DOMAIN_LABELS[item.domain] || item.domain,
    satisfiedRate: Number(item.rates?.[String(highestScore)] || 0),
    dissatisfiedRate: Number(item.rates?.[String(lowestScore)] || 0),
    notApplicableRate: percentage(item.notApplicable || 0, item.totalCount || 0),
    band: analysisBand(item.index)
  }));
  const rankedQuestions = questionAnalyses
    .filter((item) => item.index !== null && item.index !== undefined && Number.isFinite(Number(item.index)))
    .sort((left, right) => Number(right.index) - Number(left.index) || Number(left.position || 0) - Number(right.position || 0));

  const strongestDomain = rankedDomains[0] || null;
  const weakestDomain = rankedDomains.at(-1) || null;
  const strongestQuestions = rankedQuestions.slice(0, 3);
  const attentionQuestions = [...rankedQuestions].reverse().slice(0, 3);
  const highestNotApplicableQuestion = [...questionAnalyses]
    .filter((item) => Number(item.totalCount || 0) > 0)
    .sort((left, right) => right.notApplicableRate - left.notApplicableRate || Number(left.position || 0) - Number(right.position || 0))[0] || null;
  const domainGap = strongestDomain && weakestDomain
    ? Math.round((Number(strongestDomain.index) - Number(weakestDomain.index)) * 10) / 10
    : null;

  const domainPriority = (metrics.rankedPriorities || [])
    .find((item) => DOMAIN_ORDER.includes(item.domain) && Number(item.count) > 0) || null;
  const declaredPriority = metrics.topPriority || null;
  const domainPriorityIsOverallLeader = Boolean(declaredPriority && DOMAIN_ORDER.includes(declaredPriority.domain));
  const priorityAlignment = domainPriority && weakestDomain
    ? domainPriority.domain === weakestDomain.domain
    : null;

  let sample;
  if (!totalResponses) {
    sample = {
      key: 'sem_respostas',
      label: 'Sem respostas',
      text: 'Ainda não há respostas neste recorte; não é possível produzir uma leitura gerencial.'
    };
  } else if (totalResponses < 5) {
    sample = {
      key: 'muito_pequena',
      label: 'Amostra muito pequena',
      text: 'Os resultados descrevem apenas este pequeno grupo e podem mudar bastante com novas participações.'
    };
  } else if (totalResponses < 20) {
    sample = {
      key: 'inicial',
      label: 'Leitura inicial',
      text: 'Os dados já orientam a escuta, mas ainda devem ser acompanhados à medida que novas famílias participarem.'
    };
  } else {
    sample = {
      key: 'descritiva',
      label: 'Leitura descritiva consolidada',
      text: 'A quantidade permite comparar os recortes coletados, sem substituir a análise de representatividade por turma.'
    };
  }

  const overview = [];
  if (totalResponses) {
    const overallBand = analysisBand(metrics.overallIndex);
    const hasOverallIndex = metrics.overallIndex !== null && metrics.overallIndex !== undefined && Number.isFinite(Number(metrics.overallIndex));
    const hasPositiveRate = metrics.positiveRate !== null && metrics.positiveRate !== undefined && Number.isFinite(Number(metrics.positiveRate));
    overview.push({
      label: 'Leitura geral',
      text: hasOverallIndex
        ? `O índice geral é ${formatAnalysisNumber(metrics.overallIndex)} de 100, classificado como ${overallBand.label.toLowerCase()}. ${hasPositiveRate ? `Entre as marcações válidas, ${formatAnalysisNumber(metrics.positiveRate)}% receberam a opção “Satisfeito(a)”.` : 'Não há marcações válidas suficientes para calcular a proporção de satisfação.'}`
        : 'Ainda não há avaliações válidas para calcular o índice geral.'
    });

    if (strongestDomain && weakestDomain) {
      overview.push({
        label: 'Comparação entre áreas',
        text: `${strongestDomain.label} apresenta o maior índice (${formatAnalysisNumber(strongestDomain.index)}), enquanto ${weakestDomain.label} registra o menor (${formatAnalysisNumber(weakestDomain.index)}). A diferença entre elas é de ${formatAnalysisNumber(domainGap)} pontos.`
      });
    }

    if (declaredPriority) {
      overview.push({
        label: 'Prioridade declarada',
        text: `${declaredPriority.label} foi a opção mais indicada, com ${declaredPriority.count} resposta(s), equivalentes a ${formatAnalysisNumber(declaredPriority.rate)}% das participações deste recorte.`
      });
    }

    overview.push({
      label: 'Qualidade da leitura',
      text: `${formatAnalysisNumber(coverageRate)}% das marcações possíveis foram avaliações válidas; ${formatAnalysisNumber(notApplicableRate)}% foram “Não sei avaliar”. ${metrics.comments?.length || 0} família(s) escreveu(ram) comentário (${formatAnalysisNumber(commentRate)}%).`
    });
  }

  const actions = [];
  if (!totalResponses) {
    actions.push({
      level: 'metodologia',
      title: 'Ampliar a participação',
      detail: 'Divulgar o link e o QR Code e acompanhar a quantidade de respostas antes de tomar decisões.'
    });
  } else if (totalResponses < 5) {
    actions.push({
      level: 'metodologia',
      title: 'Ampliar a participação antes de decidir',
      detail: `Este recorte contém apenas ${totalResponses} resposta(s). Divulgue a pesquisa e use os achados atuais somente como sinais iniciais, sem concluir que representam todas as famílias.`
    });
  } else {
    if (weakestDomain) {
      actions.push({
        level: weakestDomain.band.key === 'prioridade' ? 'alta' : 'media',
        title: `Plano de melhoria para ${weakestDomain.label}`,
        detail: `O índice de ${formatAnalysisNumber(weakestDomain.index)} é o menor entre as áreas. Defina uma ação, um responsável, um prazo e um indicador de acompanhamento.`
      });
    }

    if (domainPriority) {
      actions.push({
        level: 'alta',
        title: domainPriorityIsOverallLeader
          ? `Responder à prioridade indicada: ${domainPriority.label}`
          : `Investigar a área mais citada entre as áreas: ${domainPriority.label}`,
        detail: `${domainPriority.count} família(s) escolheram esta área (${formatAnalysisNumber(domainPriority.rate)}%). ${domainPriorityIsOverallLeader ? 'Ela foi a opção líder na pergunta de prioridade.' : `A opção geral mais marcada foi “${declaredPriority?.label || 'não informada'}”; portanto, esta leitura compara apenas as áreas.`} ${priorityAlignment ? 'A indicação coincide com a área de menor índice.' : 'A indicação não coincide com a área de menor índice; vale investigar as duas evidências.'}`
      });
    }

    if (attentionQuestions[0]) {
      const question = attentionQuestions[0];
      actions.push({
        level: 'media',
        title: 'Atuar sobre o item de menor avaliação',
        detail: `${question.domainLabel}: “${question.prompt}” obteve índice ${formatAnalysisNumber(question.index)} e ${formatAnalysisNumber(question.dissatisfiedRate)}% de respostas insatisfeitas entre as avaliações válidas.`
      });
    }

    if (highestNotApplicableQuestion?.notApplicableRate >= 20) {
      actions.push({
        level: 'metodologia',
        title: 'Esclarecer um serviço pouco conhecido',
        detail: `A pergunta “${highestNotApplicableQuestion.prompt}” teve ${formatAnalysisNumber(highestNotApplicableQuestion.notApplicableRate)}% de “Não sei avaliar”. Verifique se as famílias conhecem esse serviço antes de interpretar a nota.`
      });
    }

    if (strongestDomain) {
      actions.push({
        level: 'manter',
        title: `Preservar o desempenho de ${strongestDomain.label}`,
        detail: `Com índice ${formatAnalysisNumber(strongestDomain.index)}, esta é a área mais bem avaliada. Registre as práticas que podem ser mantidas ou replicadas.`
      });
    }
  }

  const overallDistribution = scale.map((option) => ({
    key: String(option.value),
    label: option.shortLabel || option.label,
    count: Number(metrics.allSummary?.distribution?.[String(option.value)] || 0),
    rate: Number(metrics.allSummary?.rates?.[String(option.value)] || 0)
  }));
  overallDistribution.push({
    key: 'na',
    label: 'Não sei avaliar',
    count: notApplicable,
    rate: notApplicableRate
  });

  return {
    sample,
    overview,
    overallDistribution,
    coverageRate,
    notApplicableRate,
    commentRate,
    contactCount,
    contactRate,
    canAnalyzeContactPermission,
    rankedDomains,
    strongestDomain,
    weakestDomain,
    domainGap,
    strongestQuestions,
    attentionQuestions,
    highestNotApplicableQuestion,
    declaredPriority,
    domainPriority,
    domainPriorityIsOverallLeader,
    priorityAlignment,
    actions,
    breakdowns: {
      grades: buildBreakdown(responses, 'student_grade'),
      shifts: buildBreakdown(responses, 'student_shift'),
      relationships: buildBreakdown(responses, 'relationship')
    }
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
