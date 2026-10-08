import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/results-opening.js', import.meta.url), 'utf8');
function setup(reduced = false) {
  const dom = new JSDOM(html, { runScripts: 'outside-only' });
  const w = dom.window, d = w.document;
  const timers = new Map(), frames = new Map(); let id = 0, observe;
  w.matchMedia = () => ({ matches: reduced, addEventListener() {} });
  w.performance.now = () => 0;
  w.requestAnimationFrame = fn => { frames.set(++id, fn); return id; };
  w.cancelAnimationFrame = n => frames.delete(n);
  w.setTimeout = (fn, ms) => { timers.set(++id, {fn,ms}); return id; };
  w.clearTimeout = n => timers.delete(n);
  Object.defineProperty(d, 'hidden', { value: false, configurable: true });
  w.IntersectionObserver = class { constructor(fn) { observe=fn; } observe() {} };
  w.eval(script);
  return {w,d, enter: selector => observe([{target:d.querySelector(selector),isIntersecting:true}]),
    time: ms => { for(const [key,t] of [...timers]) if(t.ms === ms) {timers.delete(key);t.fn();} },
    frame: now => {for(const [key,fn] of [...frames]) {frames.delete(key);fn(now);}},
    values: () => [...d.querySelectorAll('.results-numbers dd')].map(el=>el.textContent), frames};
}
test('arrows and smile precede counter, which ends at exact source values', () => {
  const p = setup();
  assert.deepEqual(p.values(), ['42','3','86%']);
  p.enter('.results-opening-art'); assert.deepEqual(p.values(), ['0','0','0%']);
  p.enter('.results-numbers'); assert.equal(p.frames.size,0);
  p.time(1250); p.frame(750);
  assert.deepEqual(p.values(), ['36','2','75%']);
  p.frame(1500); assert.deepEqual(p.values(), ['42','3','86%']);
  assert.deepEqual([...p.d.querySelectorAll('.results-numbers dd')].map(el=>el.getAttribute('aria-label')), ['42','3','86%']);
});
test('mobile counters wait for visibility; replay resets and counts again', () => {
  const p=setup(); p.enter('.results-opening-art'); p.time(1250);
  assert.equal(p.frames.size,0); p.enter('.results-numbers'); p.frame(1500);
  p.d.querySelector('.results-replay').click(); assert.deepEqual(p.values(),['0','0','0%']);
  p.time(1250); p.frame(1500); assert.deepEqual(p.values(),['42','3','86%']);
});
test('reduced motion, global pause and printing immediately show final values', () => {
  const r=setup(true); r.enter('.results-opening-art'); assert.deepEqual(r.values(),['42','3','86%']);
  assert.equal(r.d.querySelector('.results-replay').disabled,true);
  const p=setup(); p.enter('.results-opening-art');
  p.d.body.classList.add('reading-paused'); p.d.dispatchEvent(new p.w.CustomEvent('integro-motion-change'));
  assert.deepEqual(p.values(),['42','3','86%']);
  const q=setup(); q.enter('.results-opening-art'); q.w.dispatchEvent(new q.w.Event('beforeprint'));
  assert.deepEqual(q.values(),['42','3','86%']);
});
test('counter safety deadline settles values even if animation frames stop', () => {
  const p=setup(); p.enter('.results-opening-art'); p.enter('.results-numbers'); p.time(1250); p.time(2200);
  assert.deepEqual(p.values(),['42','3','86%']); assert.equal(p.frames.size,0);
});
