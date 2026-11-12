import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const code = readFileSync(new URL('../assets/home-menu-2027.js', import.meta.url), 'utf8');
function page(hash = '') {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://www.institutointegro.com.br/' + hash });
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  dom.window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  dom.window.HTMLDialogElement.prototype.close = function () { this.open = false; };
  dom.window.eval(code);
  return { w: dom.window, d: dom.window.document };
}
test('initial menu hides content; routes reveal only their group and return restores menu focus', () => {
  const { d } = page();
  assert.equal(d.querySelectorAll('[data-explore-panel]:not([hidden])').length, 0);
  d.querySelector('[data-explore-link="apoio"]').click();
  assert.equal(d.querySelectorAll('[data-explore-panel]:not([hidden])').length, 2);
  assert.equal(d.getElementById('servicos').hidden, false);
  assert.equal(d.activeElement.id, 'servicos');
  d.querySelector('[data-explore-link="portais"]').click();
  assert.equal(d.querySelectorAll('[data-explore-panel]:not([hidden])').length, 1);
  assert.equal(d.getElementById('portais').hidden, false);
  assert.equal(d.getElementById('explore-dialog').open, true);
  d.getElementById('explore-close').click();
  assert.equal(d.getElementById('explore-dialog').open, false);
  assert.equal(d.querySelectorAll('[data-explore-panel]:not([hidden])').length, 0);
  assert.equal(d.activeElement.dataset.exploreLink, 'portais');
  assert.equal(d.activeElement.getAttribute('tabindex'), null);
});
test('direct links, hash changes and history navigation reveal preserved content', () => {
  const { d, w } = page('#aprendizagem-em-movimento');
  assert.equal(d.getElementById('aprendizagem-em-movimento').hidden, false);
  w.history.replaceState(null, '', '#resultados-2026');
  w.dispatchEvent(new w.PopStateEvent('popstate'));
  assert.equal(d.getElementById('resultados-2026').hidden, false);
  assert.equal(d.getElementById('aprendizagem-em-movimento').hidden, true);
  w.history.replaceState(null, '', '#%E0%A4%A');
  assert.doesNotThrow(() => w.dispatchEvent(new w.HashChangeEvent('hashchange')));
});
test('reservation requires fields and consent and never reports submission before handoff', () => {
  const { d, w } = page('#pre-matricula');
  const form = d.getElementById('enroll-form');
  const submit = () => form.dispatchEvent(new w.Event('submit', { cancelable: true }));
  submit();
  assert.equal(d.getElementById('enroll-review').hidden, true);
  for (const [id, value] of [['enroll-parent', 'Ana & Luís'], ['enroll-student', '<img src=x>']]) {
    d.getElementById(id).value = value;
    d.getElementById(id).dispatchEvent(new w.Event('input'));
  }
  assert.equal(d.getElementById('enroll-grade').options.length, 13);
  d.getElementById('enroll-grade').selectedIndex = 1;
  d.getElementById('enroll-shift').selectedIndex = 2;
  submit(); assert.equal(d.getElementById('enroll-review').hidden, true);
  d.getElementById('enroll-consent').checked = true;
  submit();
  assert.equal(d.getElementById('enroll-review').hidden, false);
  assert.match(d.getElementById('enroll-review').textContent, /ainda não foi enviada/);
  const url = new URL(d.getElementById('enroll-send').href);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5592984833301');
  assert.match(url.searchParams.get('text'), /Ana & Luís/);
  assert.match(url.searchParams.get('text'), /10% de desconto em todas as mensalidades de 2027/);
  assert.equal(d.querySelector('#enroll-message img'), null);
  assert.equal(w.localStorage.length, 0);
  d.getElementById('enroll-edit').click();
  assert.equal(form.hidden, false);
  assert.equal(d.getElementById('enroll-send').hasAttribute('href'), false);
  d.getElementById('enroll-parent').value = '   ';
  submit(); assert.equal(d.getElementById('enroll-review').hidden, true);
});
test('without JavaScript all content and a direct reservation link remain available', () => {
  const d = new JSDOM(html).window.document;
  assert.equal(d.querySelectorAll('[data-explore-panel][hidden]').length, 0);
  const link = d.querySelector('#enroll-fallback a');
  assert.match(link.href, /wa.me\/5592984833301/);
  assert.equal(d.getElementById('enroll-form').hidden, true);
});

test('Escape closes the modal, unlocks the page and preserves a direct-link route', () => {
  const {d,w} = page('#pre-matricula');
  const dialog = d.getElementById('explore-dialog');
  assert.equal(dialog.open,true);
  dialog.dispatchEvent(new w.Event('cancel',{cancelable:true}));
  assert.equal(dialog.open,false);
  assert.equal(d.body.classList.contains('explore-modal-open'),false);
  assert.equal(w.location.hash,'#menu-integro');
});
test('campaign displays the actual uncropped poster as a reservation link', () => {
  const d = new JSDOM(html).window.document;
  const img = d.querySelector('#campanha-2027 img');
  assert.equal(img.getAttribute('src'),'/assets/prematricula-2027.webp');
  assert.equal(img.closest('a').hash,'#pre-matricula');
  assert.match(img.alt,/10%.*2027/);
});
