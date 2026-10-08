(() => {
  'use strict';
  const body = document.body;
  if (body.dataset.homeDesign !== '2026') return;
  const menu = document.querySelector('.home-menu-toggle');
  const nav = document.getElementById('home-navigation');
  const mobile = window.matchMedia('(max-width: 900px)');
  function closeMenu(restoreFocus = false) {
    body.classList.remove('home-menu-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menu');
    if (restoreFocus) menu.focus();
  }
  menu.hidden = false;
  body.classList.add('home-ready');
  menu.addEventListener('click', () => {
    const open = !body.classList.contains('home-menu-open');
    body.classList.toggle('home-menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && body.classList.contains('home-menu-open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.home-header') && body.classList.contains('home-menu-open')) closeMenu();
  });
  mobile.addEventListener('change', () => closeMenu());

  const search = document.getElementById('home-service-query');
  const cards = [...document.querySelectorAll('[data-home-service]')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const status = document.getElementById('home-service-status');
  function filterServices() {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      const text = normalize(card.textContent);
      card.hidden = !words.every(word => text.includes(word));
      if (!card.hidden) visible++;
    });
    status.textContent = `${visible} ${visible === 1 ? 'atendimento encontrado' : 'atendimentos encontrados'}`;
    document.getElementById('home-service-empty').hidden = visible > 0;
  }
  document.querySelector('.home-service-search').hidden = false;
  search.addEventListener('input', filterServices);
  filterServices();

  const photo = document.getElementById('home-photo');
  const photoStatus = document.getElementById('home-photo-status');
  const photoButtons = [...document.querySelectorAll('[data-home-photo]')];
  document.querySelector('.home-gallery-controls').hidden = false;
  photoButtons.forEach(button => button.addEventListener('click', () => {
    const number = button.dataset.homePhoto;
    if (!/^[1-4]$/.test(number)) return;
    photo.hidden = false;
    photo.src = `/assets/instagram/story-${number}.jpeg`;
    photo.alt = `Publicação ${number} do Instituto Integro`;
    photoButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    photoStatus.textContent = `Publicação ${number} de 4`;
  }));
  photo.addEventListener('error', () => {
    photo.hidden = true;
    photoStatus.textContent = 'Não foi possível carregar a imagem. Veja as publicações pelo link do Instagram.';
  });
})();
