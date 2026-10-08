(() => {
  'use strict';
  const body = document.body;
  const demo = document.querySelector('.reading-demo');
  if (!demo || body.classList.contains('reading-ready')) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motion = document.getElementById('reading-motion');
  let paused = reduced.matches;
  function updateMotion() {
    const off = paused || reduced.matches;
    body.classList.toggle('reading-paused', off);
    motion.setAttribute('aria-pressed', String(off));
    motion.textContent = reduced.matches ? 'Movimento reduzido no dispositivo' : off ? 'Ativar animações' : 'Pausar animações';
    motion.disabled = reduced.matches;
  }
  motion.addEventListener('click', () => { paused = !paused; updateMotion(); });
  reduced.addEventListener('change', updateMotion);
  updateMotion();
  const tabs = [...document.querySelectorAll('[data-reading-tab]')];
  const panels = [...demo.querySelectorAll('.reading-panel')];
  function selectPanel(button) {
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    panels.forEach(panel => { panel.hidden = panel.id !== button.getAttribute('aria-controls'); });
  }
  tabs.forEach(button => button.addEventListener('click', () => selectPanel(button)));
  selectPanel(tabs[0]);
  document.querySelector('.reading-toolbar').hidden = false;
  document.querySelectorAll('.reading-action,.reading-counter').forEach(el => { el.hidden = false; });
  const join = document.getElementById('reading-join');
  join.addEventListener('click', () => {
    const joined = document.getElementById('reading-leitura').classList.toggle('reading-joined');
    join.textContent = joined ? 'Separar sílabas ↔' : 'Juntar sílabas →';
    document.getElementById('reading-word-status').textContent = joined ? 'CA + SA formam CASA. Duas sílabas, uma palavra.' : 'CA + SA = CASA';
  });
  let groups = 3;
  const minus = document.getElementById('reading-minus');
  const plus = document.getElementById('reading-plus');
  function renderGroups() {
    const container = document.getElementById('reading-groups');
    container.replaceChildren();
    for (let i = 0; i < groups; i++) {
      const group = document.createElement('div');
      group.className = 'reading-group';
      for (let j = 0; j < 4; j++) group.appendChild(document.createElement('i'));
      container.appendChild(group);
    }
    document.getElementById('reading-group-count').textContent = `${groups} ${groups === 1 ? 'grupo' : 'grupos'}`;
    document.getElementById('reading-math-status').textContent = `${groups} × 4 = ${groups * 4} peças`;
    document.querySelector('.reading-math-art').setAttribute('aria-label', `${groups} grupos com quatro peças em cada: ${groups * 4} peças`);
    minus.disabled = groups === 1;
    plus.disabled = groups === 4;
  }
  minus.addEventListener('click', () => { groups = Math.max(1, groups - 1); renderGroups(); });
  plus.addEventListener('click', () => { groups = Math.min(4, groups + 1); renderGroups(); });
  const checks = [...document.querySelectorAll('[data-reading-check]')];
  function updateChecklist() {
    const count = checks.filter(check => check.checked).length;
    document.getElementById('reading-routine-status').textContent = `${count} de 3 passos marcados neste exemplo.`;
    const progress = document.querySelector('.reading-progress');
    progress.setAttribute('aria-valuenow', String(count));
    progress.style.setProperty('--reading-progress', `${count / 3 * 100}%`);
  }
  checks.forEach(check => check.addEventListener('change', updateChecklist));
  document.getElementById('reading-reset').addEventListener('click', () => { checks.forEach(check => { check.checked = false; }); updateChecklist(); });
  body.classList.add('reading-ready');
  // Only animate a section as it arrives, once. No timers or scroll interception.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reading-in-view');
      observer.unobserve(entry.target);
    }), { threshold: 0.08 });
    document.querySelectorAll('[data-reading-scene],.home-steps li,.results-dashboard').forEach(el => observer.observe(el));
  }
})();
