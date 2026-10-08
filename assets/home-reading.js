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
  // Each card owns its illustration; only visible scenes run their animation.
  const icons = [
    '<circle cx="39" cy="38" r="20"/><path d="m54 53 17 17M29 38h20M39 28v20"/>',
    '<path d="M44 24Q26 13 12 23v47q18-10 32 0 14-10 32 0V23Q62 13 44 24v46M23 35h12M23 45h12M53 35h12M53 45h12"/>',
    '<circle cx="44" cy="27" r="12"/><path d="M22 72v-9a22 22 0 0 1 44 0v9M17 28h-7M71 28h7M44 8V3"/>',
    '<path d="M16 58V30h18v-8a10 10 0 0 1 20 0v8h18v18h-8a10 10 0 0 0 0 20h8v10H16V58h8a10 10 0 0 0 0-20"/>',
    '<path d="m10 30 34-17 34 17-34 17-34-17M24 38v20q20 18 40 0V38M78 30v30"/>',
    '<path d="M11 18h48v32H34L22 62V50H11zM59 36h18v32H64L53 78V68H38V50M22 30h26M22 39h18"/>'
  ];
  function addIcon(card, index) {
    if (card.querySelector('.reading-card-icon')) return;
    const art = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    art.setAttribute('viewBox', '0 0 88 88');
    art.setAttribute('aria-hidden', 'true');
    art.classList.add('reading-card-icon');
    // Constant artwork authored here, never user-provided HTML.
    art.innerHTML = icons[index % icons.length];
    card.prepend(art);
  }
  document.querySelectorAll('[data-home-service]').forEach(addIcon);
  document.querySelectorAll('.home-portal').forEach((card, index) => addIcon(card, [5,1,4][index]));
  addIcon(document.querySelector('.home-diagnostic'), 0);
  document.querySelectorAll('.reading-card-icon,.reading-step-art,.reading-house').forEach(svg => {
    svg.querySelectorAll('path,rect,circle').forEach((shape, index) => {
      shape.setAttribute('pathLength', '1');
      shape.classList.add('reading-trace');
      shape.style.setProperty('--trace-delay', `${index * 0.16}s`);
    });
  });
  const scenes = [...document.querySelectorAll('.reading-paper,.home-steps li,.results-dashboard,[data-home-service],.home-portal,.home-diagnostic')];
  const visible = new Set();
  let frame = 0;
  function positionScenes() {
    frame = 0;
    if (paused || reduced.matches || document.hidden) return;
    visible.forEach(el => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
      el.style.setProperty('--reading-drift', `${(progress * 12).toFixed(2)}px`);
    });
  }
  function requestPosition() { if (!frame && !paused && !reduced.matches && !document.hidden) frame = requestAnimationFrame(positionScenes); }
  window.addEventListener('scroll', requestPosition, { passive: true });
  window.addEventListener('resize', requestPosition, { passive: true });
  document.addEventListener('visibilitychange', () => {
    body.classList.toggle('reading-page-hidden', document.hidden);
    if (!document.hidden) requestPosition();
  });
  scenes.forEach(el => el.classList.add('reading-motion-card'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('reading-in-view', entry.isIntersecting);
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    requestPosition();
    }), { threshold: 0.08 });
    scenes.forEach(el => observer.observe(el));
  }
})();
