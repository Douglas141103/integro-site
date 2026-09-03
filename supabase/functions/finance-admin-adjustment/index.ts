import { createClient } from 'npm:@supabase/supabase-js@2.49.8';
import {
  MAX_REQUEST_BYTES,
  RequestValidationError,
  validateRequestBody
} from './request-contract.mjs';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://www.institutointegro.com.br',
  'https://institutointegro.com.br'
];

type ErrorCode =
  | 'method_not_allowed'
  | 'origin_not_allowed'
  | 'invalid_request'
  | 'authentication_required'
  | 'forbidden'
  | 'invalid_authorizer_credentials'
  | 'invalid_authorizer_role'
  | 'cycle_not_available'
  | 'request_conflict'
  | 'internal_error';

type Profile = {
  id: string;
  role: string | null;
  school_id: string | null;
};

function configuredOrigins(): Set<string> {
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
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
    'Vary': 'Origin'
  };
  if (origin && configuredOrigins().has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function jsonResponse(body: unknown, status: number, origin: string | null, extraHeaders: HeadersInit = {}) {
  const headers = new Headers(corsHeaders(origin));
  new Headers(extraHeaders).forEach((value, key) => headers.set(key, value));
  return new Response(JSON.stringify(body), { status, headers });
}

function errorResponse(code: ErrorCode, message: string, status: number, origin: string | null) {
  return jsonResponse({ error: { code, message } }, status, origin);
}

function bearerToken(request: Request): string {
  const authorization = request.headers.get('Authorization') || '';
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || '';
}

async function readJsonBody(request: Request) {
  if (!request.headers.get('Content-Type')?.toLowerCase().includes('application/json')) {
    throw new RequestValidationError('Envie os dados em formato JSON.');
  }

  const announcedLength = Number(request.headers.get('Content-Length') || 0);
  if (Number.isFinite(announcedLength) && announcedLength > MAX_REQUEST_BYTES) {
    throw new RequestValidationError('Solicitação muito grande.');
  }

  if (!request.body) {
    throw new RequestValidationError('Solicitação vazia ou muito grande.');
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let receivedBytes = 0;
  let rawBody = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    receivedBytes += value.byteLength;
    if (receivedBytes > MAX_REQUEST_BYTES) {
      rawBody = '';
      await reader.cancel();
      throw new RequestValidationError('Solicitação vazia ou muito grande.');
    }
    rawBody += decoder.decode(value, { stream: true });
  }
  rawBody += decoder.decode();

  if (!rawBody) {
    throw new RequestValidationError('Solicitação vazia ou muito grande.');
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } finally {
    // Reduz o tempo de vida da representação textual que contém a senha.
    rawBody = '';
  }
  return parsed;
}

function normalizedRole(profile: Profile | null): string {
  return String(profile?.role || '').trim().toLowerCase();
}

function callerMayUseSchool(profile: Profile, schoolId: string): boolean {
  const role = normalizedRole(profile);
  if (!['integro_admin', 'diretor', 'coordenacao'].includes(role)) return false;
  return role === 'integro_admin' || profile.school_id === schoolId;
}

function authorizerMayApprove(profile: Profile, schoolId: string): boolean {
  const role = normalizedRole(profile);
  if (role === 'integro_admin') return true;
  return role === 'diretor' && profile.school_id === schoolId;
}

async function clearTemporaryAuthSession(client: ReturnType<typeof createClient>) {
  try {
    await client.auth.signOut({ scope: 'local' });
  } catch {
    // O cliente não persiste sessão; a limpeza remota é apenas defesa adicional.
  }
}

Deno.serve(async (request: Request) => {
  const origin = request.headers.get('Origin');

  if (origin && !configuredOrigins().has(origin)) {
    return errorResponse('origin_not_allowed', 'Origem não autorizada.', 403, origin);
  }
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== 'POST') {
    return errorResponse('method_not_allowed', 'Use o método POST.', 405, origin);
  }

  const token = bearerToken(request);
  if (!token) {
    return errorResponse('authentication_required', 'Entre novamente no Portal Integro.', 401, origin);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
  const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
  if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
    return errorResponse('internal_error', 'Configuração segura do servidor indisponível.', 500, origin);
  }

  const callerClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });
  const { data: callerAuth, error: callerAuthError } = await callerClient.auth.getUser(token);
  if (callerAuthError || !callerAuth.user) {
    return errorResponse('authentication_required', 'Sua sessão expirou. Entre novamente.', 401, origin);
  }

  let parsedBody: unknown;
  try {
    parsedBody = await readJsonBody(request);
  } catch (error) {
    const message = error instanceof RequestValidationError
      ? error.message
      : 'Não foi possível ler a solicitação.';
    return errorResponse('invalid_request', message, 400, origin);
  }

  let validated;
  try {
    validated = validateRequestBody(parsedBody);
  } catch (error) {
    const message = error instanceof RequestValidationError
      ? error.message
      : 'Dados do ajuste inválidos.';
    return errorResponse('invalid_request', message, 400, origin);
  } finally {
    if (parsedBody && typeof parsedBody === 'object' && !Array.isArray(parsedBody)) {
      delete (parsedBody as Record<string, unknown>).director_password;
    }
  }

  const serviceClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });

  const { data: callerProfileData, error: callerProfileError } = await serviceClient
    .from('profiles')
    .select('id, role, school_id')
    .eq('id', callerAuth.user.id)
    .maybeSingle();
  const callerProfile = callerProfileData as Profile | null;
  if (callerProfileError || !callerProfile || !callerMayUseSchool(callerProfile, validated.adjustment.schoolId)) {
    validated.credentials.password = '';
    return errorResponse('forbidden', 'Seu perfil não pode solicitar este ajuste.', 403, origin);
  }

  // Cliente deliberadamente isolado: a reautenticação nunca substitui a sessão
  // do solicitante e nenhuma sessão/senha é persistida no navegador ou no servidor.
  const authorizerClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  });
  let authorizerUserId: string | null = null;
  try {
    const { data: authorizerAuth, error: authorizerAuthError } =
      await authorizerClient.auth.signInWithPassword({
        email: validated.credentials.email,
        password: validated.credentials.password
      });
    if (!authorizerAuthError && authorizerAuth.user) {
      authorizerUserId = authorizerAuth.user.id;
    }
  } catch {
    authorizerUserId = null;
  } finally {
    validated.credentials.password = '';
  }

  if (!authorizerUserId) {
    await clearTemporaryAuthSession(authorizerClient);
    return errorResponse(
      'invalid_authorizer_credentials',
      'Login ou senha de diretor/administrador inválidos.',
      401,
      origin
    );
  }

  await clearTemporaryAuthSession(authorizerClient);

  const { data: authorizerProfileData, error: authorizerProfileError } = await serviceClient
    .from('profiles')
    .select('id, role, school_id')
    .eq('id', authorizerUserId)
    .maybeSingle();
  const authorizerProfile = authorizerProfileData as Profile | null;
  if (
    authorizerProfileError ||
    !authorizerProfile ||
    !authorizerMayApprove(authorizerProfile, validated.adjustment.schoolId)
  ) {
    return errorResponse(
      'invalid_authorizer_role',
      'A autorização exige um diretor da mesma escola ou administrador do Integro.',
      403,
      origin
    );
  }

  const adjustment = validated.adjustment;
  const { data: result, error: rpcError } = await serviceClient.rpc('create_finance_admin_adjustment', {
    p_request_id: adjustment.requestId,
    p_school_id: adjustment.schoolId,
    p_cycle_id: adjustment.cycleId,
    p_movement_date: adjustment.movementDate,
    p_amount: adjustment.amount,
    p_source_bucket: adjustment.sourceBucket,
    p_destination_bucket: adjustment.destinationBucket,
    p_description: adjustment.description,
    p_notes: adjustment.notes,
    p_reason: adjustment.reason,
    p_caller_id: callerProfile.id,
    p_authorizer_id: authorizerProfile.id
  });

  if (rpcError) {
    if (rpcError.message?.includes('finance_cycle_not_available')) {
      return errorResponse(
        'cycle_not_available',
        'O ajuste só pode ser lançado em um ciclo financeiro atual e aberto.',
        409,
        origin
      );
    }
    if (rpcError.message?.includes('finance_request_id_conflict')) {
      return errorResponse(
        'request_conflict',
        'Este identificador já foi usado em outro ajuste.',
        409,
        origin
      );
    }
    if (rpcError.message?.includes('finance_forbidden')) {
      return errorResponse('forbidden', 'Autorização recusada.', 403, origin);
    }
    return errorResponse('internal_error', 'Não foi possível registrar o ajuste com segurança.', 500, origin);
  }

  if (!result || !['created', 'already_processed'].includes(result.status)) {
    return errorResponse('internal_error', 'Resposta inválida do serviço financeiro.', 500, origin);
  }

  return jsonResponse({
    status: result.status,
    request_id: adjustment.requestId,
    movement_id: result.movement_id,
    cycle_id: adjustment.cycleId
  }, result.status === 'created' ? 201 : 200, origin);
});
