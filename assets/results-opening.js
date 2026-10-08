(() => {
  'use strict';
  const section = document.getElementById('resultados-2026');
  if (!section || section.dataset.openingReady) return;
  section.dataset.openingReady = 'true';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const numbers = section.querySelector('.results-numbers');
  const replay = section.querySelector('.results-replay');
  const values = [...numbers.querySelectorAll('dd')].map(dd => {
    const text = dd.firstChild;
    return { dd, text, target: Number(text.textContent.trim()) };
  });
  let openingStarted = false, openingDone = false, numbersVisible = false, counted = false;
  let frame = 0, openingTimer = 0, safetyTimer = 0;
  const motionOff = () => reduced.matches || document.body.classList.contains('reading-paused');
  function settle() {
    cancelAnimationFrame(frame); clearTimeout(openingTimer); clearTimeout(safetyTimer);
    values.forEach(({text,target}) => { text.textContent = String(target); });
    numbers.classList.remove('results-counting');
    openingDone = true; counted = true;
  }
  function count() {
    if (!openingDone || !numbersVisible || counted) return;
    counted = true;
    if (motionOff() || document.hidden) { settle(); return; }
    numbers.classList.add('results-counting');
    values.forEach(({dd,text,target}) => { dd.setAttribute('aria-label', `${target}${dd.querySelector('span') ? '%' : ''}`); text.textContent = '0'; });
    const start = performance.now();
    const tick = now => {
      const progress = Math.min(1, Math.max(0, (now - start) / 1500));
      const eased = 1 - Math.pow(1 - progress, 3);
      values.forEach(({text,target}) => { text.textContent = String(Math.floor(target * eased)); });
      if (progress < 1) frame = requestAnimationFrame(tick);
      else settle();
    };
    safetyTimer = setTimeout(settle, 2200);
    frame = requestAnimationFrame(tick);
  }
  function begin() {
    if (motionOff()) { settle(); return; }
    openingStarted = true;
    values.forEach(({dd,text,target}) => {
      dd.setAttribute('aria-label', `${target}${dd.querySelector('span') ? '%' : ''}`);
      text.textContent = '0';
    });
    section.classList.remove('results-opening-active');
    // Restart CSS artwork without changing layout or the page's scroll position.
    void section.offsetWidth;
    section.classList.add('results-opening-active');
    openingTimer = setTimeout(() => { openingDone = true; count(); }, 1250);
  }
  replay.hidden = false;
  replay.addEventListener('click', () => {
    settle(); counted = false; openingDone = false; begin();
  });
  function synchronizeMotion() {
    replay.disabled = motionOff();
    if (motionOff()) { settle(); section.classList.remove('results-opening-active'); }
  }
  document.addEventListener('integro-motion-change', synchronizeMotion);
  reduced.addEventListener('change', synchronizeMotion);
  document.addEventListener('visibilitychange', () => { if (document.hidden && openingStarted) settle(); });
  window.addEventListener('beforeprint', settle);
  synchronizeMotion();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.target === numbers) { numbersVisible = entry.isIntersecting; if (numbersVisible) count(); }
      else if (entry.isIntersecting && !openingStarted) begin();
    }), { threshold: 0.15 });
    observer.observe(section.querySelector('.results-opening-art'));
    observer.observe(numbers);
  } else { numbersVisible = true; begin(); }
})();
