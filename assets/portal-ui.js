/* Shared presentation layer. Authentication and business rules belong to each module. */
(() => {
  'use strict';
  const body = document.body;
  if (!body.dataset.portalUi || document.getElementById('portal-shell-nav')) return;
  const create = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  };
  const icons = {
    menu: 'M4 5h16M4 12h16M4 19h16', search: 'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
    home: 'M3 10l9-7 9 7v11h-6v-7H9v7H3z', school: 'M3 21V7l9-4 9 4v14M8 9h1m6 0h1M8 13h1m6 0h1M10 21v-4h4v4',
    money: 'M3 5h18v14H3zM3 9h18M7 15h3m5 0h2', book: 'M12 5v16M12 5C8 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1',
    scan: 'M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5M8 12l3 3 5-6', spark: 'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z',
    file: 'M5 2h9l5 5v15H5zM14 2v6h5M9 12h6m-6 4h6', arrow: 'M5 12h14m-6-6 6 6-6 6', close: 'M6 6l12 12M6 18 18 6',
    grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'
  };
  function icon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.6'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
    const path = document.createElementNS(svg.namespaceURI, 'path'); path.setAttribute('d', icons[name] || icons.arrow); svg.append(path); return svg;
  }
  function button(label, name, cls = 'portal-ui-button') {
    const node = create('button', cls); node.type = 'button'; node.append(icon(name), create('span', '', label)); return node;
  }
  if (body.dataset.portalUi === 'login') {
    const back = create('a', 'portal-login-back', '← Todos os portais'); back.href = '/portal-acessos.html'; body.prepend(back);
    const password = document.querySelector('input[type="password"]');
    if (password) {
      const toggle = button('Mostrar senha', 'scan', 'portal-password-toggle');
      toggle.setAttribute('aria-pressed', 'false'); toggle.setAttribute('aria-controls', password.id);
      toggle.addEventListener('click', () => {
        const reveal = password.type === 'password'; password.type = reveal ? 'text' : 'password';
        toggle.querySelector('span').textContent = reveal ? 'Ocultar senha' : 'Mostrar senha'; toggle.setAttribute('aria-pressed', String(reveal));
      });
      password.insertAdjacentElement('afterend', toggle);
      password.autocomplete = 'current-password';
      const email = document.querySelector('input[type="email"]'); if (email) email.autocomplete = 'username';
    }
    return;
  }
  if (body.dataset.portalUi === 'access') {
    document.querySelectorAll('.card .icon').forEach((el, i) => el.replaceChildren(icon(['school', 'home', 'book'][i])));
    return;
  }
  const main = document.querySelector('main');
  const header = document.querySelector('body > header');
  if (!main || !header || !HTMLDialogElement.prototype.showModal) return;
  const page = location.pathname;
  const family = page.startsWith('/portal-familia/');
  const teacher = page.startsWith('/portal-professor/');
  const home = family ? '/portal-familia/dashboard.html' : teacher ? '/portal-professor/dashboard.html' : '/portal/dashboard.html';
  const scope = family ? 'Portal da Família' : teacher ? 'Portal do Professor' : 'Portal de Gestão';
  const mobile = matchMedia('(max-width: 900px)');
  let collapsed = false;
  try { collapsed = localStorage.getItem('integro:sidebar-collapsed') === 'true'; } catch {}
  const sidebar = create('dialog', 'portal-sidebar'); sidebar.id = 'portal-shell-nav'; sidebar.setAttribute('aria-label', 'Navegação do ' + scope);
  const sideHead = create('div', 'portal-side-head');
  const brand = create('a', 'portal-wordmark'); brand.href = home;
  const logo = create('img'); logo.src = '/logo-whatsapp.png'; logo.alt = ''; brand.append(logo, create('strong', '', 'INTEGRO'));
  const close = button('Fechar menu', 'close', 'portal-icon-button'); close.setAttribute('aria-label', 'Fechar menu');
  sideHead.append(brand, close); sidebar.append(sideHead, create('p', 'portal-scope', scope));
  const searchButton = button('Buscar no portal', 'search', 'portal-search-trigger');
  const shortcut = create('kbd', '', 'Ctrl K'); searchButton.append(shortcut); sidebar.append(searchButton);
  const nav = create('nav', 'portal-nav'); nav.setAttribute('aria-label', 'Áreas do portal'); sidebar.append(nav);
  const routes = [[home, 'Visão geral', 'home']];
  if (teacher) routes.push(['/portal-professor/planejador-ia.html', 'Planejador com IA', 'spark']);
  if (!family && !teacher) routes.push(
    ['/portal/gestao-escolar.html', 'Gestão escolar', 'school'], ['/portal/financeiro.html', 'Financeiro', 'money'],
    ['/portal/cursos.html', 'Cursos e turmas', 'book'], ['/portal/presenca-facial.html', 'Presença facial', 'scan'],
    ['/portal/documentos-memorandos.html', 'Documentos', 'file'], ['/portal/mapeamento-ia.html', 'Mapeamento com IA', 'spark'],
    ['/portal/analise-mapeamento-ia.html', 'Análise pedagógica', 'spark']);
  const commands = [];
  routes.forEach(([href, label, glyph]) => {
    const link = create('a', 'portal-nav-link'); link.href = href; link.append(icon(glyph), create('span', '', label));
    if (page === href) link.setAttribute('aria-current', 'page');
    nav.append(link); commands.push({ label, group: 'Área', href });
  });
  const context = create('div', 'portal-context'); sidebar.append(context);
  const foot = create('div', 'portal-side-footer');
  const portals = create('a', 'portal-nav-link'); portals.href = '/portal-acessos.html'; portals.append(icon('grid'), create('span', '', 'Trocar de portal'));
  const site = create('a', 'portal-nav-link'); site.href = '/'; site.append(icon('arrow'), create('span', '', 'Site do Instituto'));
  foot.append(portals, site, create('small', '', 'Instituto Integro · Educação que aproxima')); sidebar.append(foot); body.append(sidebar);
  if (!main.id) main.id = 'portal-main-content';
  main.tabIndex = -1;
  const skip = create('a', 'portal-skip', 'Ir para o conteúdo'); skip.href = '#' + main.id; body.prepend(skip);
  const tools = create('div', 'portal-header-tools');
  const menu = button('Menu', 'menu', 'portal-icon-button'); menu.setAttribute('aria-controls', sidebar.id); menu.setAttribute('aria-label', 'Abrir ou recolher menu');
  const quick = button('Buscar', 'search'); quick.setAttribute('aria-haspopup', 'dialog');
  tools.append(menu, quick); header.prepend(tools);
  const title = document.querySelector('main h1, body > .hero h1');
  if (title && page === '/portal/dashboard.html') title.textContent = 'Seu trabalho, em um só lugar.';
  document.querySelectorAll('.module-card .icon').forEach((el) => {
    const href = el.closest('.module-card').querySelector('a[href]')?.getAttribute('href') || '';
    const route = routes.find(item => href.includes(item[0].split('/').pop())); el.replaceChildren(icon(route?.[2] || 'spark'));
  });
  function setSidebar(open, save = false) {
    sidebar.close();
    if (open) {
      const active = document.activeElement;
      if (mobile.matches) sidebar.showModal(); else { sidebar.show(); active?.focus({ preventScroll: true }); }
    }
    body.classList.toggle('portal-sidebar-visible', open && !mobile.matches);
    menu.setAttribute('aria-expanded', String(open));
    if (save && !mobile.matches) { collapsed = !open; try { localStorage.setItem('integro:sidebar-collapsed', String(collapsed)); } catch {} }
  }
  menu.addEventListener('click', () => setSidebar(!sidebar.open, true));
  close.addEventListener('click', () => { setSidebar(false, true); menu.focus(); });
  sidebar.addEventListener('cancel', event => { event.preventDefault(); setSidebar(false, true); menu.focus(); });
  sidebar.addEventListener('click', event => { if (event.target === sidebar && mobile.matches) { const r = sidebar.getBoundingClientRect(); if (event.clientX > r.right) setSidebar(false); } });
  mobile.addEventListener('change', () => setSidebar(!mobile.matches && !collapsed));
  setSidebar(!mobile.matches && !collapsed);

  const sourceSelector = '.gestao-buttons [data-gestao-tab], .family-section-buttons [data-family-tab], .action-menu [data-section-target], .tabs [data-tab], .tab-bar [data-tab]';
  function available(el) {
    if (el.closest('[hidden], .hidden') || el.disabled) return false;
    // Check ancestors too: authorization can hide a whole group.
    for (let node = el; node && node !== body; node = node.parentElement) {
      const style = getComputedStyle(node); if (style.display === 'none' || style.visibility === 'hidden') return false;
    }
    return true;
  }
  function localCommands() {
    return [...document.querySelectorAll(sourceSelector)].filter(available).map(source => ({
      label: (source.querySelector('strong') || source).textContent.trim(), group: 'Nesta página', source
    }));
  }
  function go(command) {
    if (mobile.matches) setSidebar(false);
    if (command.source) {
      if (!available(command.source)) return;
      command.source.click(); command.source.focus({ preventScroll: true });
      syncContext();
    } else location.assign(command.href);
  }
  function syncContext() {
    context.replaceChildren(); const list = localCommands(); if (!list.length) return;
    context.append(create('p', 'portal-nav-caption', 'Nesta página'));
    list.forEach(command => {
      const node = button(command.label, 'arrow', 'portal-context-link');
      node.setAttribute('aria-pressed', String(command.source.classList.contains('active')));
      node.addEventListener('click', () => go(command)); context.append(node);
    });
  }
  syncContext();
  document.addEventListener('click', event => { if (event.target.closest(sourceSelector)) queueMicrotask(syncContext); });
  const menus = document.querySelectorAll('.gestao-buttons, .family-section-buttons, .action-menu, .tabs, .tab-bar');
  const observer = new MutationObserver(syncContext);
  menus.forEach(node => observer.observe(node, { subtree: true, attributes: true, childList: true, attributeFilter: ['hidden', 'class', 'style', 'disabled'] }));

  const search = create('dialog', 'portal-command-dialog'); search.setAttribute('aria-labelledby', 'portal-search-title');
  const searchHead = create('div', 'portal-command-head'); searchHead.append(create('h2', '', 'O que você precisa acessar?')); searchHead.firstChild.id = 'portal-search-title';
  const dismiss = button('Fechar busca', 'close', 'portal-icon-button'); dismiss.setAttribute('aria-label', 'Fechar busca'); searchHead.append(dismiss);
  const input = create('input', 'portal-command-input'); input.type = 'search'; input.placeholder = 'Busque áreas ou ações…'; input.setAttribute('aria-label', 'Buscar áreas e ações'); input.autocomplete = 'off';
  const count = create('p', 'portal-command-count'); count.setAttribute('role', 'status');
  const results = create('div', 'portal-command-results');
  search.append(searchHead, input, count, results, create('p', 'portal-command-help', 'Enter para abrir · Tab para navegar · Esc para fechar')); body.append(search);
  let searchable = [];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function renderSearch() {
    results.replaceChildren(); const query = normalize(input.value.trim());
    const matches = searchable.filter(command => normalize(command.label).includes(query)).slice(0, 25);
    count.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? 'atalho disponível' : 'atalhos disponíveis'}` : 'Nenhum atalho encontrado. Tente outro termo.';
    matches.forEach(command => {
      const row = button(command.label, 'arrow', 'portal-command-result'); row.append(create('small', '', command.group));
      row.addEventListener('click', () => { search.close(); go(command); }); results.append(row);
    });
  }
  function openSearch() {
    // Read existing visible links only; never index names, records or form values.
    const links = [...document.querySelectorAll('.module-actions a, .quick-grid a')].filter(available).map(source => ({label: source.textContent.trim(), group: 'Atalho', href: source.href}));
    searchable = [...commands, ...localCommands(), ...links].filter((value, index, all) => all.findIndex(other => other.label === value.label) === index);
    input.value = ''; renderSearch(); if (mobile.matches) setSidebar(false); search.showModal(); input.focus();
  }
  dismiss.addEventListener('click', () => search.close());
  search.addEventListener('click', event => { if (event.target === search) { const r = search.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) search.close(); } });
  input.addEventListener('input', renderSearch);
  input.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); results.querySelector('button')?.click(); } });
  searchButton.addEventListener('click', openSearch); quick.addEventListener('click', openSearch);
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !document.querySelector('dialog[open]:not(.portal-sidebar)') && ![...document.querySelectorAll('.modal:not([hidden])')].some(available)) {
      event.preventDefault(); openSearch();
    }
  });
})();
