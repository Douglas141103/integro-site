import test from 'node:test';
import assert from 'node:assert/strict';

import {
  cosineSimilarity,
  evaluateCaptureQuality,
  findBestCandidate,
  getLocalISODate,
  roundEmbedding,
  updateStableCandidate,
} from '../portal/presenca-facial-core.mjs';

const vector = values => [...values, ...Array(128 - values.length).fill(0)];

test('arredonda e valida uma assinatura facial', () => {
  const result = roundEmbedding(vector([0.1234567, -0.3333333]));
  assert.equal(result[0], 0.12346);
  assert.equal(result[1], -0.33333);
  assert.equal(result.length, 128);
});

test('similaridade cosseno distingue vetores', () => {
  assert.equal(cosineSimilarity(vector([1, 0]), vector([1, 0])), 1);
  assert.equal(cosineSimilarity(vector([1, 0]), vector([0, 1])), 0);
});

test('aceita o melhor aluno somente com margem segura', () => {
  const current = vector([1, 0.1]);
  const result = findBestCandidate(current, [
    { id: 'a', student_id: 'aluno-a', embeddings: [vector([1, 0]), vector([0.98, 0.05])] },
    { id: 'b', student_id: 'aluno-b', embeddings: [vector([0, 1])] },
  ], { threshold: 0.6, margin: 0.05 });

  assert.equal(result.accepted, true);
  assert.equal(result.best.studentId, 'aluno-a');
});

test('recusa resultado ambíguo entre dois alunos', () => {
  const current = vector([1, 0.1]);
  const result = findBestCandidate(current, [
    { id: 'a', student_id: 'aluno-a', embeddings: [vector([1, 0.08])] },
    { id: 'b', student_id: 'aluno-b', embeddings: [vector([1, 0.12])] },
  ], { threshold: 0.6, margin: 0.05 });

  assert.equal(result.accepted, false);
  assert.equal(result.reason, 'ambiguous');
});

test('exige três leituras consecutivas do mesmo aluno', () => {
  const match = { accepted: true, best: { studentId: 'aluno-a', score: 0.8 }, margin: 0.1 };
  let stable = updateStableCandidate(null, match, 1000);
  stable = updateStableCandidate(stable, match, 1500);
  assert.equal(stable.ready, false);
  stable = updateStableCandidate(stable, match, 2000);
  assert.equal(stable.ready, true);
});

test('validação de qualidade exige luz, nitidez, vida e piscar', () => {
  const quality = evaluateCaptureQuality({
    faceCount: 1,
    faceScore: 0.9,
    faceSize: 190,
    brightness: 120,
    blurScore: 70,
    centered: true,
    realScore: 0.8,
    liveScore: 0.8,
    blinkSeen: true,
  });

  assert.equal(quality.accepted, true);
});

test('data local não sofre deslocamento por UTC', () => {
  assert.equal(getLocalISODate(new Date(2026, 6, 21, 23, 50)), '2026-07-21');
});
