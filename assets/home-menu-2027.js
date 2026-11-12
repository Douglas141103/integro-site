(() => {
  'use strict';
  const panels = [...document.querySelectorAll('[data-explore-panel]')];
  const menu = document.getElementById('menu-integro');
  if (!panels.length || !menu) return;
  const bar = document.querySelector('.explore-backbar');
  const tiles = [...document.querySelectorAll('[data-explore-link]')];
  const names = { apoio: 'Atendimentos', metodo: 'Como aprendemos', resultados: 'Resultados 2026', box: 'Integro Box', portais: 'Portais', duvidas: 'Dúvidas', reserva: 'Pré-matrícula 2027' };
  function targetForHash() {
    try { return document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return null; }
  }
  function renderRoute(moveFocus = false) {
    const target = targetForHash();
    const selected = target?.closest('[data-explore-panel]');
    const group = selected?.dataset.explorePanel;
    panels.forEach(panel => { panel.hidden = panel.dataset.explorePanel !== group; });
    bar.hidden = !group;
    document.getElementById('explore-current').textContent = names[group] || '';
    tiles.forEach(tile => {
      const active = tile.dataset.exploreLink === group;
      if (active) tile.setAttribute('aria-current', 'true');
      else tile.removeAttribute('aria-current');
      tile.setAttribute('aria-expanded', String(active));
      tile.setAttribute('aria-controls', tile.hash.slice(1));
    });
    if (target && moveFocus) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }
  window.addEventListener('hashchange', () => renderRoute(true));
  // Handle the active link again and reveal hidden targets before native scrolling.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    renderRoute(true);
  });
  window.addEventListener('popstate', () => renderRoute(true));
  renderRoute(Boolean(location.hash));

  const form = document.getElementById('enroll-form');
  const review = document.getElementById('enroll-review');
  const parent = document.getElementById('enroll-parent');
  const student = document.getElementById('enroll-student');
  const send = document.getElementById('enroll-send');
  [parent, student].forEach(input => input.addEventListener('input', () => input.setCustomValidity('')));
  form.hidden = false;
  document.getElementById('enroll-fallback').hidden = true;
  form.addEventListener('submit', event => {
    event.preventDefault();
    for (const input of [parent, student]) {
      input.value = input.value.trim();
      input.setCustomValidity(input.value ? '' : 'Preencha este nome para continuar.');
    }
    if (!form.reportValidity()) return;
    const message = [
      'Olá! Quero solicitar a pré-matrícula 2027 no Instituto Integro.',
      '',
      `Responsável: ${parent.value}`,
      `Estudante (primeiro nome): ${student.value}`,
      `Ano escolar em 2027: ${document.getElementById('enroll-grade').value}`,
      `Preferência de turno: ${document.getElementById('enroll-shift').value}`,
      '',
      'Tenho interesse na campanha de 10% de desconto em todas as mensalidades de 2027.',
      'Podem confirmar a disponibilidade, o valor com desconto e os próximos passos para a matrícula?'
    ].join('\n');
    document.getElementById('enroll-message').textContent = message;
    send.href = `https://wa.me/5592984833301?text=${encodeURIComponent(message)}`;
    form.hidden = true;
    review.hidden = false;
    review.focus({ preventScroll: true });
    review.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  document.getElementById('enroll-edit').addEventListener('click', () => {
    review.hidden = true;
    form.hidden = false;
    send.removeAttribute('href');
    document.getElementById('enroll-message').textContent = '';
    parent.focus();
  });
})();
