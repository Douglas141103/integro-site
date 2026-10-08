import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/resultados-2026.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../assets/resultados-2026.css', import.meta.url), 'utf8');
const rows = [...html.matchAll(/<tr data-stage="([^"]+)"><th scope="row">([^<]+)<\/th><td>([^<]+)<\/td><td>(\d+)%<\/td><\/tr>/g)].map(([, stage, , label, value]) => [stage, label, Number(value)]);

test('preserva todos os percentuais informados sem inventar notas iniciais', () => {
  assert.deepEqual(rows, [
    ['ef1', 'Leitura e escrita', 89], ['ef1', 'Matemática', 92],
    ['ef2', 'Língua Portuguesa', 82], ['ef2', 'Matemática', 93], ['ef2', 'Outras disciplinas', 86],
    ['em', 'Língua Portuguesa', 87], ['em', 'Matemática', 85], ['em', 'Física', 86], ['em', 'Química', 80], ['em', 'Outras disciplinas', 93],
    ['frequencia', 'Frequência escolar', 95], ['frequencia', 'Frequência escolar', 93], ['frequencia', 'Frequência escolar', 97]
  ]);
});
test('seção no topo com navegação e indicadores gerais separados', () => {
  assert.ok(html.indexOf('<section id="resultados-2026"') < html.indexOf('<section class="hero"'));
  assert.match(html, /href="#resultados-2026"/);
  assert.match(html, /<dt>Alunos atendidos<\/dt><dd>42<\/dd>/);
  assert.match(html, /<dt>Turmas<\/dt><dd>3<\/dd>/);
  assert.match(html, /<dt>Taxa de melhora escolar informada<\/dt><dd>86/);
});
test('transparência, tabela sem JavaScript e ausência de relatos fabricados', () => {
  assert.match(html, /RESULTADOS PARCIAIS DE 2026/);
  assert.match(html, /Fonte: dados fornecidos pela gestão/);
  assert.match(html, /não necessariamente a base de cada percentual/);
  assert.match(html, /<details class="results-data" open>/);
  assert.match(html, /Depoimentos: incluir somente relatos reais autorizados/);
  assert.doesNotMatch(html.slice(html.indexOf('<section id="resultados-2026"'), html.indexOf('<section class="hero"')), /<blockquote/);
});
test('interação acessível, escala completa e nenhuma conexão ao banco', () => {
  assert.match(script, /aria-pressed/);
  assert.match(html, /aria-live="polite"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(html, /<span>0%<\/span>.*<span>100%<\/span>/);
  assert.doesNotMatch(script, /fetch\(|supabase|innerHTML/);
});
