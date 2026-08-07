import { createClient } from 'npm:@supabase/supabase-js@2.49.8';
import {
  MAX_REQUEST_BYTES,
  buildOpenAIRequest,
  extractResponseText,
  hasMinimumAISample,
  isValidAnalysis,
  prepareDatasetForModel
} from './analysis-contract.mjs';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://www.institutointegro.com.br',
  'https://institutointegro.com.br'
];
const OPENAI_TIMEOUT_MS = 45_000;
const ALLOWED_GRADES = new Set([
  '6º ano', '7º ano', '8º ano', '9º ano', 'Mais de um ano', 'Prefiro não informar'
]);
const ALLOWED_SHIFTS = new Set([
  'Matutino', 'Vespertino', 'Integral', 'Mais de um turno', 'Prefiro nao informar'
]);

type ErrorCode =
  | 'method_not_allowed'
  | 'origin_not_allowed'
  | 'invalid_request'
  | 'authentication_required'
  | 'forbidden'
  | 'analysis_not_enabled'
  | 'analysis_not_configured'
  | 'survey_not_found'
  | 'insufficient_data'
  | 'rate_limited'
  | 'analysis_timeout'
  | 'analysis_provider_error'
  | 'analysis_invalid_output'
  | 'internal_error';

function allowedOrigins(): Set<string> {
  const configured = (Deno.env.get('ALLOWED_ORIGINS') || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  return new Set(configured.length ? configured : DEFAULT_ALLOWED_ORIGINS);
}

function corsHeaders(origin: string | null): HeadersInit {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Cache-Control': 'no-store, max-age=0',
    'Content-Type': 'application/json; charset=utf-8',
    'Vary': 'Origin'
  };
  if (origin && allowedOrigins().has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function jsonResponse(body: unknown, status: number, origin: string | null, extraHeaders: HeadersInit = {}) {
  const headers = new Headers(corsHeaders(origin));
  new Headers(extraHeaders).forEach((value, key) => headers.set(key, value));
  return new Response(JSON.stringify(body), { status, headers });
}

function errorResponse(code: ErrorCode, message: string, status: number, origin: string | null, extraHeaders: HeadersInit = {}) {
  return jsonResponse({ error: { code, message } }, status, origin, extraHeaders);
}

function bearerToken(request: Request): string {
  const authorization = request.headers.get('Authorization') || '';
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || '';
}

function normalizedFilter(value: unknown, allowed: Set<string>): string | null {
  if (value === undefined || value === null || value === '' || value === 'all') return null;
  if (typeof value !== 'string' || !allowed.has(value)) throw new Error('invalid_request');
  return value;
}

async function readBody(request: Request): Promise<{ survey_slug: string; grade: string | null; shift: string | null }> {
  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) throw new Error('invalid_request');
  if (!request.headers.get('Content-Type')?.toLowerCase().includes('application/json')) {
    throw new Error('invalid_request');
  }

  const raw = await request.text();
  if (!raw || new TextEncoder().encode(raw).byteLength > MAX_REQUEST_BYTES) {
    throw new Error('invalid_request');
  }
  const body = JSON.parse(raw);
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('invalid_request');
  if (Object.keys(body).some((key) => !['survey_slug', 'grade', 'shift'].includes(key))) {
    throw new Error('invalid_request');
  }
  if (typeof body.survey_slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(body.survey_slug)) {
    throw new Error('invalid_request');
  }
  return {
    survey_slug: body.survey_slug,
    grade: normalizedFilter(body.grade, ALLOWED_GRADES),
    shift: normalizedFilter(body.shift, ALLOWED_SHIFTS)
  };
}

function providerErrorCode(error: unknown): ErrorCode {
  if (error instanceof DOMException && error.name === 'AbortError') return 'analysis_timeout';
  if (error instanceof Error && [
    'openai_invalid_output',
    'openai_refusal',
    'openai_output_missing',
    'openai_incomplete',
    'openai_status_invalid'
  ].includes(error.message)) {
    return 'analysis_invalid_output';
  }
  if (error instanceof Error && error.message === 'audit_log_failed') return 'internal_error';
  return 'analysis_provider_error';
}

async function recordAuditResult(
  supabase: ReturnType<typeof createClient>,
  values: {
    slug: string;
    status: 'completed' | 'failed';
    model: string;
    requestId: string;
    durationMs: number;
  }
): Promise<boolean> {
  const { data, error } = await supabase.rpc('log_school_satisfaction_ai_result', {
    p_slug: values.slug,
    p_status: values.status,
    p_model: values.model,
    p_request_id: values.requestId,
    p_duration_ms: Math.min(Math.max(0, values.durationMs), 180_000),
    p_comments_sent: 0
  });
  if (error || data?.status !== 'logged') {
    console.error(JSON.stringify({ request_id: values.requestId, event: 'audit_log_failed' }));
    return false;
  }
  return true;
}

Deno.serve(async (request: Request) => {
  const origin = request.headers.get('Origin');
  const requestId = crypto.randomUUID();
  const startedAt = Date.now();

  if (origin && !allowedOrigins().has(origin)) {
    return errorResponse('origin_not_allowed', 'Origem não autorizada.', 403, origin);
  }
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use o método POST.', 405, origin, { Allow: 'POST, OPTIONS' });
  }

  let body: { survey_slug: string; grade: string | null; shift: string | null };
  try {
    body = await readBody(request);
  } catch {
    return errorResponse('invalid_request', 'Informe somente um identificador de pesquisa válido.', 400, origin);
  }

  const token = bearerToken(request);
  if (!token) {
    return errorResponse('authentication_required', 'Entre no Portal Integro para gerar a análise.', 401, origin);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
  if (!supabaseUrl || !supabaseAnonKey) {
    return errorResponse('internal_error', 'Configuração do servidor indisponível.', 500, origin);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });

  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userData.user) {
    return errorResponse('authentication_required', 'Sua sessão expirou. Entre novamente.', 401, origin);
  }

  const openaiKey = Deno.env.get('OPENAI_API_KEY') || '';
  if (!openaiKey) {
    return errorResponse(
      'analysis_not_configured',
      'A análise por IA ainda não foi configurada no servidor.',
      503,
      origin
    );
  }
  const configuredModel = Deno.env.get('OPENAI_MODEL') || 'gpt-5-mini';
  const model = /^[A-Za-z0-9._:\-]{1,100}$/.test(configuredModel) ? configuredModel : 'gpt-5-mini';

  const { data: payload, error: payloadError } = await supabase.rpc(
    'get_school_satisfaction_ai_payload',
    {
      p_slug: body.survey_slug,
      p_request_id: requestId,
      p_grade: body.grade,
      p_shift: body.shift
    }
  );

  if (payloadError) {
    console.error(JSON.stringify({ request_id: requestId, event: 'authorization_or_rpc_error' }));
    return errorResponse('forbidden', 'Você não tem permissão para analisar esta pesquisa.', 403, origin);
  }
  if (!payload || payload.status === 'not_found') {
    return errorResponse('survey_not_found', 'Pesquisa não encontrada.', 404, origin);
  }
  if (payload.status === 'rate_limited') {
    const retryAfter = Math.max(1, Number(payload.retry_after_seconds || 600));
    return errorResponse(
      'rate_limited',
      'Aguarde alguns minutos antes de gerar outra análise.',
      429,
      origin,
      { 'Retry-After': String(retryAfter) }
    );
  }
  if (payload.status === 'invalid_request' || payload.status === 'invalid_filter') {
    return errorResponse('invalid_request', 'Os filtros informados são inválidos.', 400, origin);
  }
  if (payload.status === 'analysis_not_enabled') {
    return errorResponse(
      'analysis_not_enabled',
      'A análise por IA não está habilitada para esta edição da pesquisa.',
      409,
      origin
    );
  }
  if (payload.status !== 'ready') {
    return errorResponse('internal_error', 'Não foi possível preparar os dados da pesquisa.', 500, origin);
  }

  const totalResponses = Number(payload?.sample?.total_responses || 0);
  if (!hasMinimumAISample(payload)) {
    const auditLogged = await recordAuditResult(supabase, {
      slug: body.survey_slug,
      status: 'failed',
      model,
      requestId,
      durationMs: Date.now() - startedAt
    });
    if (!auditLogged) {
      return errorResponse('internal_error', 'Não foi possível registrar a solicitação com segurança.', 500, origin);
    }
    return errorResponse(
      'insufficient_data',
      'São necessárias pelo menos cinco respostas no recorte atual para gerar a análise por IA.',
      422,
      origin
    );
  }

  let dataset;
  try {
    dataset = prepareDatasetForModel(payload);
  } catch {
    const auditLogged = await recordAuditResult(supabase, {
      slug: body.survey_slug,
      status: 'failed',
      model,
      requestId,
      durationMs: Date.now() - startedAt
    });
    if (!auditLogged) {
      return errorResponse('internal_error', 'Não foi possível registrar a solicitação com segurança.', 500, origin);
    }
    return errorResponse('internal_error', 'O conjunto de dados excedeu o limite seguro.', 500, origin);
  }

  const commentsSent = 0;
  const qualitativeSuppressed = true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);
  let finalAuditLogged = false;

  try {
    const providerResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
        'X-Client-Request-Id': requestId
      },
      body: JSON.stringify(buildOpenAIRequest(model, dataset)),
      signal: controller.signal
    });

    if (!providerResponse.ok) {
      console.error(JSON.stringify({
        request_id: requestId,
        event: 'openai_http_error',
        status: providerResponse.status
      }));
      throw new Error('openai_http_error');
    }

    const providerBody = await providerResponse.json();
    if (providerBody?.status === 'incomplete' || providerBody?.incomplete_details) {
      throw new Error('openai_incomplete');
    }
    if (providerBody?.status !== 'completed') throw new Error('openai_status_invalid');
    const analysis = JSON.parse(extractResponseText(providerBody));
    if (!isValidAnalysis(analysis)) throw new Error('openai_invalid_output');

    analysis.qualitative_themes = [];
    const privacyLimitation = 'Por privacidade, comentários livres não foram enviados à IA; a análise usa somente indicadores quantitativos agregados.';
    if (!analysis.risks_and_limitations.includes(privacyLimitation)) {
      analysis.risks_and_limitations = analysis.risks_and_limitations.slice(0, 7);
      analysis.risks_and_limitations.push(privacyLimitation);
    }

    finalAuditLogged = await recordAuditResult(supabase, {
      slug: body.survey_slug,
      status: 'completed',
      model,
      requestId,
      durationMs: Date.now() - startedAt
    });
    if (!finalAuditLogged) throw new Error('audit_log_failed');

    return jsonResponse({
      analysis,
      meta: {
        model,
        generated_at: new Date().toISOString(),
        survey_slug: body.survey_slug,
        grade: body.grade || 'all',
        shift: body.shift || 'all',
        total_responses: totalResponses,
        comments_sent: commentsSent,
        qualitative_suppressed: qualitativeSuppressed
      }
    }, 200, origin);
  } catch (error) {
    const code = providerErrorCode(error);
    console.error(JSON.stringify({ request_id: requestId, event: code }));
    if (!finalAuditLogged) {
      finalAuditLogged = await recordAuditResult(supabase, {
        slug: body.survey_slug,
        status: 'failed',
        model,
        requestId,
        durationMs: Date.now() - startedAt
      });
    }
    if (!finalAuditLogged) {
      return errorResponse('internal_error', 'Não foi possível registrar o resultado com segurança.', 500, origin);
    }

    const isTimeout = code === 'analysis_timeout';
    const isInternal = code === 'internal_error';
    return errorResponse(
      code,
      isTimeout
        ? 'A análise demorou além do limite. Tente novamente.'
        : isInternal
          ? 'Não foi possível concluir a auditoria da análise.'
          : 'Não foi possível gerar a análise agora. Os gráficos e indicadores locais continuam disponíveis.',
      isTimeout ? 504 : isInternal ? 500 : 502,
      origin
    );
  } finally {
    clearTimeout(timeout);
  }
});
