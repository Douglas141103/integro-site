export const MAX_REQUEST_BYTES = 16_384;
export const MAX_AMOUNT = 999_999_999.99;

export const ALLOWED_BUCKETS = Object.freeze([
  'operacoes',
  'fundo_caixa',
  'acionista_1',
  'acionista_2',
  'acionista_3',
  'ajuste_administrativo'
]);

const ALLOWED_KEYS = new Set([
  'request_id',
  'school_id',
  'cycle_id',
  'movement_date',
  'amount',
  'source_bucket',
  'destination_bucket',
  'description',
  'notes',
  'reason',
  'director_email',
  'director_password'
]);

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export class RequestValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestValidationError';
  }
}

function requiredText(value, label, minimum, maximum) {
  if (typeof value !== 'string') {
    throw new RequestValidationError(`${label} deve ser informado.`);
  }

  const normalized = value.trim();
  if (normalized.length < minimum || normalized.length > maximum) {
    throw new RequestValidationError(`${label} possui tamanho inválido.`);
  }
  return normalized;
}

function optionalText(value, label, maximum) {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string') {
    throw new RequestValidationError(`${label} possui formato inválido.`);
  }

  const normalized = value.trim();
  if (!normalized) return null;
  if (normalized.length > maximum) {
    throw new RequestValidationError(`${label} excede o tamanho permitido.`);
  }
  return normalized;
}

function uuid(value, label) {
  if (typeof value !== 'string' || !UUID_PATTERN.test(value)) {
    throw new RequestValidationError(`${label} inválido.`);
  }
  return value.toLowerCase();
}

function strictDate(value) {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) {
    throw new RequestValidationError('Data da movimentação inválida.');
  }

  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new RequestValidationError('Data da movimentação inválida.');
  }
  return value;
}

function amount(value) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0 || value > MAX_AMOUNT) {
    throw new RequestValidationError('Valor da movimentação inválido.');
  }

  // toFixed evita rejeitar centavos válidos grandes por ruído IEEE-754 em
  // `value * 100` (ex.: 620547416.83 vira 62054741683.00001).
  const normalizedToCents = Number(value.toFixed(2));
  if (normalizedToCents !== value) {
    throw new RequestValidationError('O valor deve ter no máximo duas casas decimais.');
  }
  return normalizedToCents;
}

function bucket(value, label) {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string' || !ALLOWED_BUCKETS.includes(value)) {
    throw new RequestValidationError(`${label} inválido.`);
  }
  return value;
}

export function validateRequestBody(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new RequestValidationError('Corpo da solicitação inválido.');
  }

  if (Object.keys(body).some((key) => !ALLOWED_KEYS.has(key))) {
    throw new RequestValidationError('A solicitação contém campos não permitidos.');
  }

  const sourceBucket = bucket(body.source_bucket, 'Origem');
  const destinationBucket = bucket(body.destination_bucket, 'Destino');
  if (!sourceBucket && !destinationBucket) {
    throw new RequestValidationError('Informe uma origem ou um destino.');
  }
  if (sourceBucket && sourceBucket === destinationBucket) {
    throw new RequestValidationError('Origem e destino devem ser diferentes.');
  }

  const email = requiredText(body.director_email, 'Login do autorizador', 3, 254).toLowerCase();
  if (!EMAIL_PATTERN.test(email)) {
    throw new RequestValidationError('Login do autorizador inválido.');
  }

  if (typeof body.director_password !== 'string' || body.director_password.length < 1 || body.director_password.length > 1_024) {
    throw new RequestValidationError('Senha do autorizador inválida.');
  }

  return {
    adjustment: {
      requestId: uuid(body.request_id, 'Identificador da solicitação'),
      schoolId: uuid(body.school_id, 'Escola'),
      cycleId: uuid(body.cycle_id, 'Ciclo'),
      movementDate: strictDate(body.movement_date),
      amount: amount(body.amount),
      sourceBucket,
      destinationBucket,
      description: requiredText(body.description, 'Descrição', 3, 200),
      notes: optionalText(body.notes, 'Observação', 1_000),
      reason: requiredText(body.reason, 'Motivo da autorização', 3, 500)
    },
    credentials: {
      email,
      password: body.director_password
    }
  };
}
