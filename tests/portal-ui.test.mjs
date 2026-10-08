import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const script = readFileSync(new URL('../assets/portal-ui.js', import.meta.url), 'utf8');
const root = new URL('../', import.meta.url);
const pages = ['portal', 'portal-professor', 'portal-familia'].flatMap(dir => readdirSync(new URL(dir, root)).filter(p => p.endsWith('.html')).map(p => `${dir}/${p}`)).concat('portal-acessos.html', 'pesquisa-satisfacao/resultados.html');
function setup(path, mobile = false) {
  const dom = new JSDOM(readFileSync(new URL(path, root), 'utf8'), { url: `https://www.institutointegro.com.br/${path}`, runScripts: 'outside-only', pretendToBeVisual: true });
  const { window: w } = dom;
  w.matchMedia = () => ({ matches: mobile, addEventListener() {} });
  w.HTMLDialogElement.prototype.show = function () { this.open = true; };
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; this.dataset.testModal = 'true'; };
  w.HTMLDialogElement.prototype.close = function () { this.open = false; };
  const originalControls = [...w.document.querySelectorAll('form, input, select, textarea')];
  w.eval(script);
  return { dom, w, d: w.document, originalControls };
}
test('all 16 pages initialize with one shell; existing forms, controls and inline scripts stay intact', () => {
  assert.equal(pages.length, 16);
  for (const page of pages) {
    const { dom, d, w, originalControls } = setup(page);
    const ids = [...d.querySelectorAll('[id]')].map(el => el.id);
    assert.equal(ids.length, new Set(ids).size, `${page}: duplicate IDs`);
    if (d.body.dataset.portalUi === 'workspace') {
      assert.equal(d.querySelectorAll('#portal-shell-nav').length, 1, page);
      w.eval(script);
      assert.equal(d.querySelectorAll('#portal-shell-nav').length, 1, 'idempotent init');
      for (const control of originalControls) assert.ok(control.isConnected, `${page}: control replaced`);
    }
    assert.equal(d.querySelectorAll('link[href*="portal-ui.css"]').length, 1, page);
    assert.equal(d.querySelectorAll('script[src*="portal-ui.js"]').length, 1, page);
    dom.window.close();
  }
});
test('family and teacher navigation never gains administrative destinations', () => {
  for (const page of ['portal-familia/dashboard.html', 'portal-professor/dashboard.html']) {
    const { dom, d } = setup(page);
    assert.equal(d.querySelector('.portal-nav a[href*="financeiro"]'), null);
    assert.equal(d.querySelector('.portal-nav a[href*="gestao-escolar"]'), null);
    dom.window.close();
  }
});
test('search excludes hidden survey links and personal records, supports accents and empty results', () => {
  const { dom, w, d } = setup('portal/dashboard.html');
  d.getElementById('userName').textContent = 'PRIVATE_TEST_PERSON';
  d.querySelector('.portal-search-trigger').click();
  const input = d.querySelector('.portal-command-input');
  assert.ok(!d.querySelector('.portal-command-results').textContent.includes('PRIVATE_TEST_PERSON'));
  assert.ok(!d.querySelector('.portal-command-results').textContent.includes('Apuração da pesquisa'));
  input.value = 'gestao'; input.dispatchEvent(new w.Event('input'));
  assert.match(d.querySelector('.portal-command-results').textContent, /Gestão escolar/);
  input.value = 'ZZZ_not_found'; input.dispatchEvent(new w.Event('input'));
  assert.equal(d.querySelectorAll('.portal-command-result').length, 0);
  assert.match(d.querySelector('.portal-command-count').textContent, /Nenhum atalho/);
  input.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
  assert.equal(d.querySelector('.portal-command-dialog').open, false, 'Escape closes even a non-empty search');
  dom.window.close();
});
test('context shortcuts delegate exactly once to existing navigation and preserve field values', async () => {
  const { dom, d } = setup('portal/financeiro.html');
  const source = d.querySelector('[data-tab="mensalidades"]'); let clicks = 0;
  source.addEventListener('click', () => clicks++);
  const field = d.querySelector('#entryForm input'); field.value = '123';
  const shortcut = [...d.querySelectorAll('.portal-context-link')].find(el => el.textContent === 'Mensalidades');
  assert.ok(shortcut); shortcut.click(); assert.equal(clicks, 1); assert.equal(field.value, '123');
  await new Promise(resolve => setTimeout(resolve, 0));
  dom.window.close();
});
test('hidden authorized contextual controls are not exposed and update when revealed', async () => {
  const { dom, d } = setup('portal/gestao-escolar.html');
  const source = d.querySelector('[data-gestao-tab="painel-pesquisa"]');
  assert.ok(!d.querySelector('.portal-context').textContent.includes('Pesquisa de satisfação'));
  source.hidden = false; await new Promise(resolve => setTimeout(resolve, 0));
  assert.ok(d.querySelector('.portal-context').textContent.includes('Pesquisa de satisfação'));
  source.hidden = true; await new Promise(resolve => setTimeout(resolve, 0));
  assert.ok(!d.querySelector('.portal-context').textContent.includes('Pesquisa de satisfação'));
  dom.window.close();
});
test('mobile drawer starts closed and desktop collapse preference persists without storing content', () => {
  const { dom, d, w } = setup('portal/dashboard.html', true);
  const menu = d.querySelector('[aria-controls="portal-shell-nav"]');
  assert.equal(d.querySelector('.portal-sidebar').open, false);
  menu.click(); assert.equal(d.querySelector('.portal-sidebar').open, true);
  assert.equal(d.querySelector('.portal-sidebar').dataset.testModal, 'true');
  menu.click(); assert.equal(d.querySelector('.portal-sidebar').open, false);
  assert.equal(w.localStorage.length, 0); dom.window.close();
  const desktop = setup('portal/dashboard.html');
  desktop.d.querySelector('[aria-controls="portal-shell-nav"]').click();
  assert.equal(desktop.w.localStorage.getItem('integro:sidebar-collapsed'), 'true'); desktop.dom.window.close();
});
test('password visibility does not submit forms or modify the password', () => {
  for (const page of ['portal/index.html','portal-familia/index.html','portal-professor/index.html']) {
    const { dom, d } = setup(page); const input = d.querySelector('input[type="password"]');
    input.value = 'only-a-local-test'; let submits = 0;
    input.form.addEventListener('submit', e => { e.preventDefault(); submits++; });
    const toggle = d.querySelector('.portal-password-toggle');
    assert.equal(toggle.closest('label'), null, 'visibility control is outside the password label');
    toggle.click(); assert.equal(input.type, 'text'); toggle.click(); assert.equal(input.type, 'password');
    assert.equal(input.value, 'only-a-local-test'); assert.equal(submits, 0); dom.window.close();
  }
});
test('all new destinations resolve to repo pages; presentation has no data/network API', () => {
  const { dom, d } = setup('portal/dashboard.html');
  for (const link of d.querySelectorAll('.portal-sidebar a')) {
    const path = new URL(link.href).pathname.replace(/^\//,'') || 'index.html'; assert.ok(existsSync(new URL(path, root)), path);
  }
  assert.doesNotMatch(script, /fetch\(|\.from\(|auth\.|innerHTML|eval\(/);
  const css = readFileSync(new URL('assets/portal-ui.css', root), 'utf8');
  assert.match(css, /@media screen/); assert.match(css, /@media print/); assert.match(css, /prefers-reduced-motion/);
  const loader = readFileSync(new URL('pwa-install.js', root), 'utf8');
  assert.match(loader, /location.pathname === "\/index.html"/);
  assert.doesNotMatch(loader, /location.pathname.endsWith\("\/index.html"\)/, 'public-site styles must not load on portal sign-in pages');
  dom.window.close();
});
