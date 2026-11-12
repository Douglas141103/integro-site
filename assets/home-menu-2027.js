(() => {
  'use strict';
  const panels = [...document.querySelectorAll('[data-explore-panel]')];
  const menu = document.getElementById('menu-integro');
  if (!panels.length || !menu) return;
  const tiles = [...document.querySelectorAll('[data-explore-link]')];
  const names = { apoio: 'Atendimentos', metodo: 'Como aprendemos', resultados: 'Resultados 2026', box: 'Integro Box', portais: 'Portais', duvidas: 'Dúvidas', reserva: 'Pré-matrícula 2027' };
  const dialog = document.getElementById('explore-dialog');
  const dialogContent = document.getElementById('explore-dialog-content');
  const close = document.getElementById('explore-close');
  const modalSupported = typeof dialog.showModal === 'function';
  let returnFocus = null;
  // Keep all original content in place in browsers without native dialogs.
  if (modalSupported) panels.forEach(panel => dialogContent.appendChild(panel));
  function targetForHash() {
    try { return document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return null; }
  }
  function renderRoute(moveFocus = false) {
    const target = targetForHash();
    const selected = target?.closest('[data-explore-panel]');
    const group = selected?.dataset.explorePanel;
    panels.forEach(panel => { panel.hidden = panel.dataset.explorePanel !== group; });
    tiles.forEach(tile => {
      const active = tile.dataset.exploreLink === group;
      if (active) tile.setAttribute('aria-current', 'true');
      else tile.removeAttribute('aria-current');
      tile.setAttribute('aria-expanded', String(active));
      tile.setAttribute('aria-controls', modalSupported ? 'explore-dialog' : tile.hash.slice(1));
      if (modalSupported) tile.setAttribute('aria-haspopup', 'dialog');
    });
    if (modalSupported && group) {
      document.getElementById('explore-dialog-title').textContent = names[group];
      document.querySelectorAll('.explore-dialog-nav a').forEach(link => {
        const active = document.getElementById(link.hash.slice(1))?.dataset.explorePanel === group;
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      document.body.classList.add('explore-modal-open');
      if (!dialog.open) dialog.showModal();
      dialogContent.scrollTop = 0;
      if (moveFocus) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        dialogContent.scrollTop = Math.max(0, target.getBoundingClientRect().top - dialogContent.getBoundingClientRect().top);
      }
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove('explore-modal-open');
      if (target && moveFocus) {
        const focusTarget = target === menu && returnFocus?.isConnected ? returnFocus : target;
        if (!focusTarget.matches('a,button,input,select')) focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus({ preventScroll: true });
        focusTarget.scrollIntoView({ behavior: 'instant', block: 'nearest' });
      }
    }
  }
  function closePanel() {
    if (location.hash !== '#menu-integro') history.pushState(null, '', '#menu-integro');
    renderRoute(true);
  }
  close.addEventListener('click', closePanel);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closePanel(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closePanel();
  });
  window.addEventListener('hashchange', () => renderRoute(true));
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (!dialog.contains(link) && target.closest('[data-explore-panel]')) returnFocus = link;
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    renderRoute(true);
  });
  const hint = document.getElementById('explore-hint');
  tiles.forEach(tile => {
    const preview = () => { hint.textContent = tile.querySelector('small').textContent + '. Toque para abrir.'; };
    tile.addEventListener('mouseenter', preview);
    tile.addEventListener('focus', preview);
    tile.addEventListener('mouseleave', () => { hint.textContent = 'Escolha um caminho. Você pode voltar ao menu quando quiser.'; });
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
