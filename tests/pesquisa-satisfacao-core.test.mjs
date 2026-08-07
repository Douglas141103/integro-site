import test from 'node:test';
import assert from 'node:assert/strict';

import {
  normalizeBrazilPhone,
  formatBrazilPhone,
  scoreIndex,
  computeSurveyMetrics,
  buildManagementAnalysis,
  buildSurveyCsv,
  safeCsvCell
} from '../pesquisa-satisfacao/core.mjs';

test('normaliza todos os formatos comuns do mesmo telefone brasileiro', () => {
  const expected = '5592999999999';
  assert.equal(normalizeBrazilPhone('(92) 99999-9999'), expected);
  assert.equal(normalizeBrazilPhone('92999999999'), expected);
  assert.equal(normalizeBrazilPhone('+55 92 99999-9999'), expected);
  assert.equal(formatBrazilPhone(expected), '(92) 99999-9999');
});

test('recusa telefone incompleto, DDD inválido e sequência repetida', () => {
  assert.equal(normalizeBrazilPhone('9999-9999'), '');
  assert.equal(normalizeBrazilPhone('(00) 99999-9999'), '');
  assert.equal(normalizeBrazilPhone('11111111111'), '');
});

test('converte a escala de três pontos para índice de 0 a 100', () => {
  assert.equal(scoreIndex(1, 1, 3), 0);
  assert.equal(scoreIndex(2, 1, 3), 50);
  assert.equal(scoreIndex(3, 1, 3), 100);
  assert.equal(scoreIndex(2.5, 1, 3), 75);
  assert.equal(scoreIndex(null, 1, 3), null);
});

const payload = {
  survey: { slug: 'etelvina-familias-2026', status: 'active' },
  scale: [
    { value: 1, label: 'Insatisfeito', shortLabel: 'Insatisfeito' },
    { value: 2, label: 'Parcialmente', shortLabel: 'Parcialmente' },
    { value: 3, label: 'Satisfeito', shortLabel: 'Satisfeito' }
  ],
  questions: [
    { id: 'q1', code: 'gestao_1', domain: 'gestao', domain_label: 'Gestão escolar', prompt: 'Pergunta 1', position: 1 },
    { id: 'q2', code: 'gestao_2', domain: 'gestao', domain_label: 'Gestão escolar', prompt: 'Pergunta 2', position: 2 },
    { id: 'q3', code: 'professores_1', domain: 'professores', domain_label: 'Professores', prompt: 'Pergunta 3', position: 3 }
  ],
  responses: [
    {
      id: 'r1', respondent_name: 'Maria da Silva', phone_masked: '(**) *****-1111',
      student_grade: '6º ano', student_shift: 'Matutino', improvement_priority: 'infraestrutura',
      improvement_comment: 'Melhorar a ventilação.', submitted_at: '2026-08-07T12:00:00Z'
    },
    {
      id: 'r2', respondent_name: 'João Souza', phone_masked: '(**) *****-2222',
      student_grade: '7º ano', student_shift: 'Vespertino', improvement_priority: 'gestao',
      improvement_comment: '', submitted_at: '2026-08-07T13:00:00Z'
    }
  ],
  answers: [
    { response_id: 'r1', question_id: 'q1', score: 3, not_applicable: false },
    { response_id: 'r1', question_id: 'q2', score: null, not_applicable: true },
    { response_id: 'r1', question_id: 'q3', score: 2, not_applicable: false },
    { response_id: 'r2', question_id: 'q1', score: 1, not_applicable: false },
    { response_id: 'r2', question_id: 'q2', score: 2, not_applicable: false },
    { response_id: 'r2', question_id: 'q3', score: 3, not_applicable: false }
  ]
};

test('não inclui Não sei avaliar na média e mantém a contagem separada', () => {
  const metrics = computeSurveyMetrics(payload);
  const management = metrics.domainMetrics.find((item) => item.domain === 'gestao');
  assert.equal(management.ratedCount, 3);
  assert.equal(management.notApplicable, 1);
  assert.equal(management.average, 2);
  assert.equal(management.index, 50);
  assert.equal(metrics.totalResponses, 2);
});

test('ignora respostas de perguntas que não fazem parte da edição ativa', () => {
  const withInactiveAnswer = structuredClone(payload);
  withInactiveAnswer.answers.push({
    response_id: 'r1',
    question_id: 'pergunta-inativa',
    score: 1,
    not_applicable: false
  });
  const metrics = computeSurveyMetrics(withInactiveAnswer);
  assert.equal(metrics.allSummary.ratedCount, 5);
  assert.equal(metrics.allSummary.distribution['1'], 1);
  assert.equal(metrics.positiveRate, 40);
});

test('filtros por ano e turno recalculam todos os indicadores', () => {
  const metrics = computeSurveyMetrics(payload, { grade: '6º ano', shift: 'Matutino' });
  assert.equal(metrics.totalResponses, 1);
  assert.equal(metrics.comments.length, 1);
  assert.equal(metrics.topPriority.domain, 'infraestrutura');
  assert.equal(metrics.positiveRate, 50);
});

test('mostra Nenhuma no momento quando essa é a prioridade mais escolhida', () => {
  const noPriority = structuredClone(payload);
  noPriority.responses.forEach((response) => { response.improvement_priority = 'nenhuma'; });
  const metrics = computeSurveyMetrics(noPriority);
  assert.equal(metrics.topPriority.domain, 'nenhuma');
  assert.equal(metrics.topPriority.label, 'Nenhuma no momento');
  assert.equal(metrics.rankedPriorities.length, 7);
});

test('não exibe zero por cento quando ainda não há avaliações válidas', () => {
  const empty = { ...structuredClone(payload), responses: [], answers: [] };
  const metrics = computeSurveyMetrics(empty);
  assert.equal(metrics.positiveRate, null);
  assert.equal(metrics.overallIndex, null);
});

test('análise gerencial não transforma índices nulos em zero e limita conclusões em amostra muito pequena', () => {
  const metrics = computeSurveyMetrics(payload);
  const analysis = buildManagementAnalysis(metrics);
  assert.equal(analysis.rankedDomains.length, 2);
  assert.equal(analysis.rankedDomains.some((domain) => domain.domain === 'infraestrutura'), false);
  assert.equal(analysis.sample.key, 'muito_pequena');
  assert.deepEqual(analysis.actions.map((action) => action.title), ['Ampliar a participação antes de decidir']);
  assert.match(analysis.overview[0].text, /marcações válidas/i);
  assert.doesNotMatch(analysis.overview[0].text, /famílias satisfeitas/i);
});

test('análise gerencial identifica pergunta com cem por cento de Não sei avaliar mesmo sem índice', () => {
  const onlyNotApplicable = structuredClone(payload);
  onlyNotApplicable.answers = onlyNotApplicable.answers.map((answer) => ({
    ...answer,
    score: null,
    not_applicable: true
  }));
  const metrics = computeSurveyMetrics(onlyNotApplicable);
  const analysis = buildManagementAnalysis(metrics);
  assert.equal(metrics.overallIndex, null);
  assert.equal(analysis.rankedDomains.length, 0);
  assert.equal(analysis.highestNotApplicableQuestion.notApplicableRate, 100);
  assert.match(analysis.overview[0].text, /não há avaliações válidas/i);
});

test('autorização de contato só entra na análise quando o perfil pode consultá-la', () => {
  const withPermission = structuredClone(payload);
  withPermission.responses[0].contact_permission = true;
  withPermission.responses[1].contact_permission = false;
  const metrics = computeSurveyMetrics(withPermission);
  const protectedAnalysis = buildManagementAnalysis(metrics);
  const directorAnalysis = buildManagementAnalysis(metrics, { includeContactPermission: true });
  assert.equal(protectedAnalysis.contactRate, null);
  assert.equal(protectedAnalysis.contactCount, null);
  assert.equal(directorAnalysis.contactCount, 1);
  assert.equal(directorAnalysis.contactRate, 50);
});

test('CSV neutraliza fórmulas e preserva as respostas por pergunta', () => {
  assert.equal(safeCsvCell('=IMPORTXML("x")'), '"\'=IMPORTXML(""x"")"');
  const dangerous = structuredClone(payload);
  dangerous.responses[0].improvement_comment = '=HYPERLINK("malicioso")';
  const csv = buildSurveyCsv(computeSurveyMetrics(dangerous));
  assert.match(csv, /'\=HYPERLINK/);
  assert.match(csv, /gestao_1/);
  assert.match(csv, /Não sei avaliar/);
});
