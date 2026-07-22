export const FACE_MODEL_VERSION = 'human-3.3.6-faceres';
export const DEFAULT_MATCH_THRESHOLD = 0.62;
export const DEFAULT_MATCH_MARGIN = 0.055;

export function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

export function roundEmbedding(embedding, precision = 5) {
  if (!embedding || typeof embedding.length !== 'number') return [];
  const factor = 10 ** precision;
  return Array.from(embedding, value => Math.round(Number(value) * factor) / factor)
    .filter(Number.isFinite);
}

export function isValidEmbedding(embedding, minimumLength = 128) {
  return Array.isArray(embedding)
    && embedding.length >= minimumLength
    && embedding.every(Number.isFinite);
}

export function cosineSimilarity(left, right) {
  if (!isValidEmbedding(left) || !isValidEmbedding(right) || left.length !== right.length) return 0;

  let dot = 0;
  let leftNorm = 0;
  let rightNorm = 0;

  for (let index = 0; index < left.length; index += 1) {
    dot += left[index] * right[index];
    leftNorm += left[index] ** 2;
    rightNorm += right[index] ** 2;
  }

  if (!leftNorm || !rightNorm) return 0;
  return clamp(dot / (Math.sqrt(leftNorm) * Math.sqrt(rightNorm)));
}

export function topAverage(values, amount = 3) {
  const valid = values.filter(Number.isFinite).sort((a, b) => b - a);
  const selected = valid.slice(0, Math.max(1, Math.min(amount, valid.length)));
  if (!selected.length) return 0;
  return selected.reduce((sum, value) => sum + value, 0) / selected.length;
}

export function findBestCandidate(embedding, templates, options = {}) {
  const {
    similarity = cosineSimilarity,
    threshold = DEFAULT_MATCH_THRESHOLD,
    margin = DEFAULT_MATCH_MARGIN,
    samplesToAverage = 3,
  } = options;

  if (!isValidEmbedding(embedding)) {
    return { accepted: false, reason: 'invalid_embedding', best: null, second: null, margin: 0 };
  }

  const candidates = templates
    .map(template => {
      const embeddings = Array.isArray(template.embeddings) ? template.embeddings : [];
      const scores = embeddings
        .filter(sample => isValidEmbedding(sample) && sample.length === embedding.length)
        .map(sample => similarity(embedding, sample));

      return {
        studentId: template.student_id,
        templateId: template.id,
        score: topAverage(scores, samplesToAverage),
        strongestScore: scores.length ? Math.max(...scores) : 0,
      };
    })
    .filter(candidate => candidate.score > 0)
    .sort((a, b) => b.score - a.score);

  const best = candidates[0] || null;
  const second = candidates[1] || null;
  const scoreMargin = best ? best.score - (second?.score || 0) : 0;

  if (!best || best.score < threshold) {
    return { accepted: false, reason: 'below_threshold', best, second, margin: scoreMargin };
  }

  if (second && scoreMargin < margin) {
    return { accepted: false, reason: 'ambiguous', best, second, margin: scoreMargin };
  }

  return { accepted: true, reason: 'accepted', best, second, margin: scoreMargin };
}

export function updateStableCandidate(previous, candidate, now = Date.now(), options = {}) {
  const requiredFrames = options.requiredFrames || 3;
  const maximumGapMs = options.maximumGapMs || 2500;

  if (!candidate?.accepted || !candidate.best?.studentId) {
    return { studentId: null, count: 0, lastSeenAt: now, ready: false };
  }

  const sameStudent = previous?.studentId === candidate.best.studentId;
  const withinGap = now - (previous?.lastSeenAt || 0) <= maximumGapMs;
  const count = sameStudent && withinGap ? previous.count + 1 : 1;

  return {
    studentId: candidate.best.studentId,
    count,
    lastSeenAt: now,
    score: candidate.best.score,
    margin: candidate.margin,
    ready: count >= requiredFrames,
  };
}

export function getLocalISODate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function evaluateCaptureQuality(input = {}) {
  const {
    faceCount = 0,
    faceScore = 0,
    faceSize = 0,
    minimumFaceSize = 150,
    brightness = 0,
    blurScore = 0,
    centered = false,
    realScore = 0,
    liveScore = 0,
    blinkSeen = false,
    requireBlink = true,
  } = input;

  const checks = {
    oneFace: faceCount === 1,
    confidence: faceScore >= 0.55,
    size: faceSize >= minimumFaceSize,
    light: brightness >= 55 && brightness <= 230,
    sharpness: blurScore >= 35,
    centered: Boolean(centered),
    real: realScore >= 0.42,
    live: liveScore >= 0.42,
    blink: !requireBlink || Boolean(blinkSeen),
  };

  let instruction = 'Mantenha o rosto no centro';
  if (faceCount === 0) instruction = 'Posicione o rosto dentro do círculo';
  else if (faceCount > 1) instruction = 'Apenas uma pessoa diante da câmera';
  else if (!checks.light) instruction = brightness < 55 ? 'Precisamos de mais luz no rosto' : 'Evite luz forte atrás do rosto';
  else if (!checks.size) instruction = 'Aproxime um pouco o rosto';
  else if (!checks.centered) instruction = 'Centralize o rosto';
  else if (!checks.sharpness) instruction = 'Fique parado por um instante';
  else if (!checks.confidence) instruction = 'Olhe diretamente para a câmera';
  else if (!checks.real || !checks.live) instruction = 'Mova levemente a cabeça';
  else if (!checks.blink) instruction = 'Pisque uma vez para confirmar';
  else instruction = 'Ótimo, continue olhando para a câmera';

  return {
    accepted: Object.values(checks).every(Boolean),
    checks,
    instruction,
  };
}

export function formatPercentage(value) {
  return `${Math.round(clamp(value) * 100)}%`;
}
