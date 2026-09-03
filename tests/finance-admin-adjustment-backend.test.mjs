import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  RequestValidationError,
  validateRequestBody
} from '../supabase/functions/finance-admin-adjustment/request-contract.mjs';

const paths = {
  edge: new URL('../supabase/functions/finance-admin-adjustment/index.ts', import.meta.url),
  migration: new URL('../supabase/migrations/20260903010000_finance_admin_adjustment_secure.sql', import.meta.url)
};

const validBody = {
  request_id: '6ba7b810-9dad-41d1-80b4-00c04fd430c8',
  school_id: '6ba7b811-9dad-41d1-80b4-00c04fd430c8',
  cycle_id: '6ba7b812-9dad-41d1-80b4-00c04fd430c8',
  movement_date: '2026-09-03',
  amount: 123.45,
  source_bucket: 'ajuste_administrativo',
  destination_bucket: null,
  description: 'Correção do saldo do caixa',
  notes: 'Conferido pela gestão.',
  reason: 'Correção autorizada após conferência.',
  director_email: 'DIRETOR@EXEMPLO.COM',
  director_password: 'segredo-transitorio'
};

test('contrato aceita a saída administrativa usada pelo portal e normaliza sem alterar a senha', () => {
  const result = validateRequestBody(validBody);
  assert.equal(result.adjustment.sourceBucket, 'ajuste_administrativo');
  assert.equal(result.adjustment.destinationBucket, null);
  assert.equal(result.adjustment.amount, 123.45);
  assert.equal(result.credentials.email, 'diretor@exemplo.com');
  assert.equal(result.credentials.password, 'segredo-transitorio');

  const largeCents = validateRequestBody({ ...validBody, amount: 620547416.83 });
  assert.equal(largeCents.adjustment.amount, 620547416.83);
});

test('contrato rejeita campos extras, IDs não UUID, rota vazia/igual e valores ambíguos', () => {
  const invalidCases = [
    { ...validBody, unexpected: true },
    { ...validBody, request_id: `${Date.now()}-${Math.random()}` },
    { ...validBody, source_bucket: null, destination_bucket: null },
    { ...validBody, source_bucket: 'operacoes', destination_bucket: 'operacoes' },
    { ...validBody, amount: 1.001 },
    { ...validBody, amount: -1 },
    { ...validBody, movement_date: '2026-02-30' },
    { ...validBody, director_password: '' }
  ];

  for (const body of invalidCases) {
    assert.throws(() => validateRequestBody(body), RequestValidationError);
  }
});

test('Edge Function verifica JWT, reautentica em cliente isolado e chama somente a RPC de serviço', async () => {
  const edge = await readFile(paths.edge, 'utf8');

  assert.match(edge, /callerClient\.auth\.getUser\(token\)/);
  assert.match(edge, /const authorizerClient = createClient\(supabaseUrl, supabaseAnonKey/);
  assert.match(edge, /authorizerClient\.auth\.signInWithPassword/);
  assert.match(edge, /persistSession:\s*false/g);
  assert.match(edge, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.match(edge, /serviceClient\.rpc\('create_finance_admin_adjustment'/);
  assert.match(edge, /\['integro_admin', 'diretor', 'coordenacao'\]/);
  assert.match(edge, /role === 'diretor' && profile\.school_id === schoolId/);
  assert.match(edge, /validated\.credentials\.password = ''/);
  assert.match(edge, /request\.body\.getReader\(\)/);
  assert.match(edge, /receivedBytes > MAX_REQUEST_BYTES/);
  assert.doesNotMatch(edge, /request\.text\(\)/);
  assert.doesNotMatch(edge, /console\.(?:log|info|warn|error)/);

  const rpcCall = edge.slice(edge.indexOf("serviceClient.rpc('create_finance_admin_adjustment'"));
  assert.doesNotMatch(rpcCall, /director_password|credentials\.password/);
});

test('RPC é service-role-only, transacional, idempotente e nunca cria finance_expenses', async () => {
  const sql = await readFile(paths.migration, 'utf8');
  const rpcStart = sql.indexOf('create or replace function public.create_finance_admin_adjustment');
  const rpcEnd = sql.indexOf('create or replace function private.guard_finance_admin_movement_mutation');
  const rpc = sql.slice(rpcStart, rpcEnd);

  assert.ok(rpcStart >= 0 && rpcEnd > rpcStart);
  assert.match(rpc, /coalesce\(auth\.role\(\), ''\) <> 'service_role'/i);
  assert.match(rpc, /pg_advisory_xact_lock/i);
  assert.match(rpc, /where audit_row\.request_id = p_request_id/i);
  assert.match(rpc, /'status', 'already_processed'/i);
  assert.match(rpc, /finance_request_id_conflict/i);
  assert.match(rpc, /v_authorizer_role not in \('integro_admin', 'diretor'\)/i);
  assert.match(rpc, /v_authorizer_role = 'diretor'.*v_authorizer_school_id is distinct from p_school_id/is);
  assert.match(rpc, /insert into public\.finance_cash_cycle_movements/i);
  assert.match(rpc, /insert into private\.finance_admin_adjustment_audit/i);
  assert.doesNotMatch(rpc, /insert into public\.finance_expenses/i);
  assert.doesNotMatch(rpc, /\bupdated_at\b/i);
  assert.match(rpc, /\[AJUSTE ADMINISTRATIVO\] Ajuste autorizado/i);
  assert.doesNotMatch(rpc, /Motivo da autorização:/i);
  assert.match(sql, /revoke all on function public\.create_finance_admin_adjustment[\s\S]*?from public, anon, authenticated/i);
  assert.match(sql, /grant execute on function public\.create_finance_admin_adjustment[\s\S]*?to service_role/i);
});

test('migração preserva o ciclo atual e limita a exceção de 09–10/09 à RPC protegida', async () => {
  const sql = await readFile(paths.migration, 'utf8');

  assert.match(sql, /c\.start_date = date '2026-08-09'/i);
  assert.match(sql, /c\.end_date = date '2026-09-08'/i);
  assert.match(sql, /c\.end_date < date '2026-08-09'/i);
  assert.match(sql, /finance_current_cycle_not_found/i);
  assert.match(sql, /v_cycle_start >= date '2026-09-11'/i);
  assert.match(sql, /extract\(day from v_cycle_start\) = 11/i);
  assert.match(sql, /v_cycle_end = \(v_cycle_start \+ interval '1 month' - interval '1 day'\)::date/i);
  assert.match(sql, /v_is_transition_cycle and v_today_manaus between v_cycle_start and date '2026-09-10'/i);
  assert.match(sql, /v_is_future_cycle and v_today_manaus between v_cycle_start and v_cycle_end/i);
  assert.match(sql, /p_movement_date not between v_cycle_start and v_cycle_end/i);
  assert.match(sql, /p_allow_transition_closing[\s\S]*?v_today_manaus between date '2026-09-09' and date '2026-09-10'/i);
  assert.match(sql, /perform private\.assert_finance_cycle_writable\([\s\S]*?v_is_secure_admin_insert[\s\S]*?\)/i);
  assert.match(sql, /and tg_op = 'INSERT'[\s\S]*?auth\.role\(\)[\s\S]*?= 'service_role'[\s\S]*?v_rpc_request_id is not null/i);
  assert.match(sql, /or p_activity_date not between v_cycle_start and v_cycle_end/i);
  assert.match(sql, /finance_current_cycle_not_open/i);
  assert.doesNotMatch(sql, /update\s+public\.finance_cash_cycles/i);
});

test('banco impõe ciclos 11–10, impede sobreposição e bloqueia escrita comum fora de ciclo aberto', async () => {
  const sql = await readFile(paths.migration, 'utf8');
  const cyclePolicyStart = sql.indexOf('create or replace function private.guard_finance_cash_cycle_policy');
  const activityPolicyStart = sql.indexOf('create or replace function private.assert_finance_cycle_writable');
  const adminGuardStart = sql.indexOf('create or replace function private.guard_finance_admin_movement_mutation');
  const policy = sql.slice(cyclePolicyStart, adminGuardStart);

  assert.ok(cyclePolicyStart >= 0 && activityPolicyStart > cyclePolicyStart && adminGuardStart > activityPolicyStart);
  assert.match(sql, /create or replace function private\.is_valid_finance_cycle_dates/i);
  assert.match(sql, /p_start_date = date '2026-08-09'.*p_end_date = date '2026-09-08'/is);
  assert.match(sql, /p_start_date >= date '2026-09-11'/i);
  assert.match(sql, /extract\(day from p_start_date\) = 11/i);
  assert.match(sql, /p_end_date = \(p_start_date \+ interval '1 month' - interval '1 day'\)::date/i);
  assert.match(sql, /select coalesce\(\([\s\S]*?\), false\)/i);
  assert.match(policy, /finance_closed_cycle_is_immutable/i);
  assert.match(policy, /finance_cycle_identity_is_immutable/i);
  assert.match(policy, /finance_cycle_cannot_close_early/i);
  assert.match(policy, /new\.start_date = date '2026-08-09'[\s\S]*?new\.end_date = date '2026-09-08'[\s\S]*?then date '2026-09-10'/i);
  assert.match(policy, /finance_transition_cycle_cannot_be_recreated/i);
  assert.match(policy, /finance_cycle_can_only_be_created_when_current/i);
  assert.match(policy, /finance_closed_cycle_requires_metadata/i);
  assert.match(policy, /finance_open_cycle_cannot_have_closing_metadata/i);
  assert.match(policy, /finance_overlapping_cycles/i);
  assert.match(policy, /v_cycle_status[\s\S]*?is distinct from 'aberto'/i);
  assert.match(policy, /if v_today_manaus not between v_cycle_start and v_cycle_end/i);
  assert.match(policy, /for share/i);
  assert.match(sql, /create unique index if not exists finance_cash_cycles_school_cycle_key_unique/i);

  const activityTriggers = sql.match(
    /create trigger finance_activity_cycle_guard\s+before insert or update or delete on public\.(finance_entries|finance_expenses|finance_cash_cycle_movements)/gi
  ) || [];
  assert.equal(activityTriggers.length, 3);
  assert.match(sql, /create trigger finance_cash_cycle_policy_guard/i);
});

test('limpeza arquiva antes de remover, preserva linhas comuns e tolera colunas de vínculo variantes', async () => {
  const sql = await readFile(paths.migration, 'utf8');
  const firstArchive = sql.indexOf('insert into private.finance_admin_adjustment_archive');
  const movementDelete = sql.indexOf('delete from public.finance_cash_cycle_movements');
  const expenseDelete = sql.indexOf('delete from public.finance_expenses');

  assert.ok(firstArchive >= 0 && firstArchive < movementDelete && movementDelete < expenseDelete);
  assert.match(sql, /protected_adjustment\.movement_id = m\.id/i);
  assert.match(sql, /finance_transition_old_cycles[\s\S]*?where c\.end_date < date '2026-08-09'/i);
  assert.match(sql, /assert_cleanup_scope/i);
  assert.match(sql, /v_current_cycles <> 2/i);
  assert.match(sql, /v_old_cycles <> 3 or v_movements <> 107 or v_expenses <> 43/i);
  assert.match(sql, /where pg_catalog\.lower\(pg_catalog\.btrim\(coalesce\(e\.allocation_bucket, ''\)\)\) = 'ajuste_administrativo'/i);
  assert.match(sql, /column_name in \('related_cash_movement_id', 'cash_movement_id'\)/i);
  assert.match(sql, /column_name in \('cash_cycle_id', 'cycle_id'\)/i);
  assert.match(sql, /'finance_cash_cycles'[\s\S]*?'prior_cycle_cleanup'[\s\S]*?to_jsonb\(c\)/i);
  assert.match(sql, /archive_old_cycle_links/i);
  assert.match(sql, /archive_cross_links_before_detach/i);
  assert.match(sql, /'movement_link_detached'/i);
  assert.match(sql, /'expense_link_detached'/i);
  assert.match(sql, /'prior_cycle_link_detached'/i);
  assert.match(sql, /'finance_expenses', 'finance_entries'/i);
  assert.doesNotMatch(sql, /coalesce\(e\.notes, ''\).*ajuste interno/i);
  assert.doesNotMatch(sql, /delete from public\.finance_entries/i);

  const expenseDeleteStatement = sql.slice(expenseDelete, sql.indexOf('do $detach_old_cycles$'));
  assert.match(expenseDeleteStatement, /finance_transition_expenses_to_remove/i);
});

test('auditoria e arquivo privados são imutáveis e bypass direto fica bloqueado', async () => {
  const sql = await readFile(paths.migration, 'utf8');

  assert.match(sql, /finance_admin_adjustment_audit_immutable/i);
  assert.match(sql, /finance_admin_adjustment_archive_immutable/i);
  assert.match(sql, /raise exception 'finance_audit_is_immutable'/i);
  assert.match(sql, /alter table private\.finance_admin_adjustment_audit enable row level security/i);
  assert.match(sql, /finance_admin_adjustment_requires_secure_rpc/i);
  assert.match(sql, /finance_admin_expense_is_not_allowed/i);
  assert.match(sql, /btrim\(coalesce\(v_row\.allocation_bucket, ''\)\)/i);
  assert.match(sql, /btrim\(coalesce\(old\.source_bucket, ''\)\)/i);
  assert.match(sql, /btrim\(coalesce\(v_row\.description, ''\)\)\) = 'ajuste administrativo do ciclo'/i);
  const expenseGuard = sql.slice(sql.indexOf('create or replace function private.guard_finance_admin_expense_mutation'));
  assert.doesNotMatch(expenseGuard, /v_row\.(?:description|notes)/i);
  assert.match(sql, /tg_op <> 'INSERT'[\s\S]*?auth\.role\(\)[\s\S]*?v_rpc_request_id is null/i);
});
