import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/home-public.js', import.meta.url), 'utf8');
function page() {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://www.institutointegro.com.br/' });
  let resize;
  dom.window.matchMedia = () => ({ matches: true, addEventListener: (_, fn) => { resize = fn; } });
  dom.window.eval(script);
  return { window: dom.window, document: dom.window.document, resize: () => resize() };
}
test('homepage has unique IDs, valid anchors and progressive content', () => {
  const doc = new JSDOM(html).window.document;
  const ids = [...doc.querySelectorAll('[id]')].map(el => el.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const a of doc.querySelectorAll('a[href^="#"]')) assert.ok(doc.getElementById(a.hash.slice(1)), a.hash);
  assert.equal(doc.querySelectorAll('h1').length, 1);
  assert.equal(doc.querySelectorAll('[data-home-service]').length, 6);
  assert.equal(doc.querySelectorAll('.home-questions details').length, 5);
  assert.ok(doc.querySelector('#home-install-slot'));
});
test('mobile menu opens, closes with Escape, link and resize, and restores focus', () => {
  const { document: d, window: w, resize } = page();
  const menu = d.querySelector('.home-menu-toggle');
  menu.click(); assert.equal(menu.getAttribute('aria-expanded'), 'true');
  d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape' }));
  assert.equal(menu.getAttribute('aria-expanded'), 'false'); assert.equal(d.activeElement, menu);
  menu.click(); d.querySelector('.home-links a').click();
  assert.equal(menu.getAttribute('aria-expanded'), 'false');
  menu.click(); resize(); assert.equal(menu.getAttribute('aria-expanded'), 'false');
  assert.ok(d.body.classList.contains('home-ready'));
});
test('service search handles accents, no results and clearing', () => {
  const { document: d, window: w } = page();
  const input = d.getElementById('home-service-query');
  const set = text => { input.value = text; input.dispatchEvent(new w.Event('input')); };
  set('diagnostico'); assert.equal(d.querySelectorAll('[data-home-service]:not([hidden])').length, 1);
  set('zzzzz'); assert.equal(d.getElementById('home-service-empty').hidden, false);
  assert.equal(d.getElementById('home-service-status').textContent, '0 atendimentos encontrados');
  set(''); assert.equal(d.querySelectorAll('[data-home-service]:not([hidden])').length, 6);
  assert.equal(d.getElementById('home-service-empty').hidden, true);
});
test('gallery changes only on request and handles unavailable images', () => {
  const { document: d, window: w } = page();
  d.querySelector('[data-home-photo="3"]').click();
  assert.match(d.getElementById('home-photo').src, /story-3.jpeg$/);
  assert.equal(d.querySelectorAll('[data-home-photo][aria-pressed="true"]').length, 1);
  d.getElementById('home-photo').dispatchEvent(new w.Event('error'));
  assert.equal(d.getElementById('home-photo').hidden, true);
  assert.match(d.getElementById('home-photo-status').textContent, /Instagram/);
  assert.doesNotMatch(script, /setInterval|fetch\(/);
});
test('legacy home enhancements are skipped and install button uses footer when present', () => {
  const pwa = readFileSync(new URL('../pwa-install.js', import.meta.url), 'utf8');
  assert.match(pwa, /if \(!isHome \|\| document\.body\?\.dataset\.homeDesign === "2026"\) return;/);
  assert.match(pwa, /\(document\.getElementById\("home-install-slot"\) \|\| document\.body\)\.appendChild\(installButton\)/);
});
