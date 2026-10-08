import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/home-reading.js', import.meta.url), 'utf8');
function setup(reduced = false, observer = true) {
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const w = dom.window;
  const media = { matches: reduced, addEventListener() {} };
  w.matchMedia = () => media;
  w.requestAnimationFrame = () => 1;
  let callback;
  const watched = [], completed = [];
  if (observer) w.IntersectionObserver = class {
    constructor(fn) { callback = fn; }
    observe(el) { watched.push(el); }
    unobserve(el) { completed.push(el); }
  };
  w.eval(script);
  return { dom, w, d: w.document, enter: el => callback([{ isIntersecting: true, target: el }]), leave: el => callback([{ isIntersecting: false, target: el }]), watched, completed };
}
test('each visible card animates independently, stops outside and restarts on re-entry', () => {
  const plain = new JSDOM(html).window.document;
  assert.equal(plain.querySelectorAll('.reading-panel:not([hidden])').length, 3);
  const { d, enter, leave, watched, completed } = setup();
  assert.equal(watched.length, 18);
  const scene = d.querySelector('.reading-paper');
  assert.ok(!scene.classList.contains('reading-in-view'));
  enter(scene); assert.ok(scene.classList.contains('reading-in-view'));
  leave(scene); assert.ok(!scene.classList.contains('reading-in-view'));
  enter(scene); assert.ok(scene.classList.contains('reading-in-view'));
  assert.deepEqual(completed, []);
  assert.equal(d.querySelectorAll('.reading-card-icon').length, 10);
  assert.ok([...d.querySelectorAll('.reading-trace')].every(el => el.getAttribute('pathLength') === '1'));
});
test('reading demonstration joins and separates syllables and selects only one panel', () => {
  const { d } = setup();
  const button = d.getElementById('reading-join');
  button.click(); assert.match(d.getElementById('reading-word-status').textContent, /formam CASA/);
  button.click(); assert.ok(!d.getElementById('reading-leitura').classList.contains('reading-joined'));
  d.querySelector('[data-reading-tab="matematica"]').click();
  assert.equal(d.querySelectorAll('.reading-panel:not([hidden])').length, 1);
  assert.equal(d.getElementById('reading-matematica').hidden, false);
});
test('multiplication keeps illustrated pieces and totals consistent at both limits', () => {
  const { d } = setup();
  const plus = d.getElementById('reading-plus'), minus = d.getElementById('reading-minus');
  plus.click(); plus.click(); assert.equal(plus.disabled, true);
  assert.equal(d.querySelectorAll('.reading-group i').length, 16);
  assert.equal(d.getElementById('reading-math-status').textContent, '4 × 4 = 16 peças');
  for (let i = 0; i < 6; i++) minus.click();
  assert.equal(minus.disabled, true); assert.equal(d.querySelectorAll('.reading-group i').length, 4);
  assert.equal(d.getElementById('reading-math-status').textContent, '1 × 4 = 4 peças');
});
test('checklist updates accessible progress and can reset without persistence', () => {
  const { d } = setup();
  d.querySelectorAll('[data-reading-check]').forEach(check => check.click());
  assert.equal(d.querySelector('.reading-progress').getAttribute('aria-valuenow'), '3');
  d.getElementById('reading-reset').click();
  assert.equal(d.querySelector('.reading-progress').getAttribute('aria-valuenow'), '0');
  assert.doesNotMatch(script, /fetch\(|localStorage|sessionStorage|setInterval/);
});
test('pause and reduced motion work, including browsers without an observer', () => {
  const normal = setup(false, false);
  normal.d.getElementById('reading-motion').click(); assert.ok(normal.d.body.classList.contains('reading-paused'));
  normal.d.getElementById('reading-motion').click(); assert.ok(!normal.d.body.classList.contains('reading-paused'));
  const reduced = setup(true);
  assert.ok(reduced.d.body.classList.contains('reading-paused'));
  assert.equal(reduced.d.getElementById('reading-motion').disabled, true);
  assert.equal(reduced.d.getElementById('reading-leitura').hidden, false);
});
