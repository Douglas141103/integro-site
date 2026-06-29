(function () {
  const isHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
  if (!isHome || document.getElementById('integroSiteImprovements')) return;

  const style = document.createElement('style');
  style.id = 'integroSiteImprovements';
  style.textContent = `
    body{background:radial-gradient(circle at 8% 12%,rgba(216,169,75,.10),transparent 28%),radial-gradient(circle at 92% 4%,rgba(31,110,80,.10),transparent 26%),linear-gradient(180deg,#fbfdfb 0%,#eef8f2 52%,#f8fcfa 100%)!important;}
    header{box-shadow:0 10px 24px rgba(15,61,46,.04)}
    .nav-links a.btn-primary,.btn-primary{color:#fff!important}.nav-links a.btn-primary:hover{color:#fff!important}
    .hero{position:relative;overflow:hidden;padding-top:72px!important}.hero:before{content:"";position:absolute;width:360px;height:360px;border-radius:50%;background:rgba(31,110,80,.06);left:-160px;top:80px;z-index:-1}
    .hero h1{font-size:clamp(2.2rem,5.2vw,4.15rem)!important;line-height:1.05!important;letter-spacing:-1.8px;max-width:720px}
    .hero p strong{color:#0f3d2e}.hero-list div,.card,.step,.portal-card,.faq-item{border:1px solid rgba(15,61,46,.07);box-shadow:0 14px 34px rgba(7,49,35,.08)!important}.card,.step,.portal-card,.faq-item{transition:.25s ease}.card:hover,.portal-card:hover,.step:hover{transform:translateY(-4px);box-shadow:0 18px 45px rgba(7,49,35,.12)!important}
    .hero-card{background:linear-gradient(145deg,#082d22,#1f6e50)!important;box-shadow:0 24px 60px rgba(15,61,46,.18)!important;border:1px solid rgba(255,255,255,.12)}
    .explain-upgrade{display:grid;grid-template-columns:.9fr 1.1fr;gap:28px;align-items:stretch;margin-bottom:28px}.explain-copy,.mind-map{background:#fff;border-radius:26px;padding:30px;box-shadow:0 14px 34px rgba(7,49,35,.08);border:1px solid rgba(15,61,46,.08)}.explain-copy h3{color:#0f3d2e;font-size:1.55rem;margin-bottom:12px}.explain-copy p{color:#607084;margin-bottom:14px}.explain-copy strong{color:#0f3d2e}.mind-map{background:radial-gradient(circle at center,rgba(216,169,75,.12),transparent 52%),linear-gradient(145deg,#fff,#eef8f2);display:grid;place-items:center}.map-center{width:min(250px,100%);min-height:120px;display:grid;place-items:center;text-align:center;padding:20px;border-radius:28px;background:linear-gradient(145deg,#0f3d2e,#1f6e50);color:#fff;font-size:1.25rem;font-weight:900;box-shadow:0 20px 45px rgba(15,61,46,.20)}.map-items{width:100%;display:grid;grid-template-columns:repeat(2,minmax(190px,1fr));gap:16px;margin-top:24px}.map-item{background:rgba(255,255,255,.95);border:1px solid rgba(15,61,46,.08);border-left:5px solid #d8a94b;border-radius:18px;padding:16px;box-shadow:0 10px 24px rgba(15,61,46,.07)}.map-item b{display:block;color:#0f3d2e;margin-bottom:5px}.map-item span{color:#607084;font-size:.95rem}
    .portal-note{margin-top:24px;background:#fff4d6;color:#4a3712;padding:18px 20px;border-radius:18px;border:1px solid rgba(216,169,75,.35);font-weight:700;text-align:center}
    #portais .portal-card{position:relative;overflow:hidden}
    #portais .portal-icon{width:136px;height:118px;padding:0;background:transparent!important;border-radius:0!important;margin:0 0 16px;display:flex;align-items:center;justify-content:center}
    #portais .portal-icon svg{width:100%;height:100%;display:block;filter:drop-shadow(0 12px 22px rgba(0,0,0,.12))}
    #portais .portal-card .btn{color:#fff!important}
    @media(max-width:980px){.explain-upgrade{grid-template-columns:1fr}.map-items{grid-template-columns:1fr}.hero h1{letter-spacing:-1px}}
    @media(max-width:700px){#portais .portal-icon{width:118px;height:102px}}
  `;
  document.head.appendChild(style);

  const portalPage = '/portal-acessos.html';
  const navPortal = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase() === 'portais');
  if (navPortal) navPortal.href = portalPage;
  const navAccess = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase().includes('acessar portais'));
  if (navAccess) {
    navAccess.href = portalPage;
    navAccess.style.color = '#ffffff';
  }

  const h1 = document.querySelector('#inicio h1');
  if (h1) h1.textContent = 'Seu filho precisa de um apoio personalizado para ele?';

  const heroP = document.querySelector('#inicio .hero-grid > div:first-child p');
  if (heroP) {
    heroP.innerHTML = 'No <strong>INTEGRO</strong>, o atendimento começa com um diagnóstico pedagógico. A partir dele, produzimos atividades personalizadas para cada dificuldade, impressas e coladas no caderno do aluno para acompanhar a evolução de forma prática e organizada.';
  }

  const list = document.querySelectorAll('.hero-list div');
  ['Atividades personalizadas', 'Impressas no caderno', 'Foco na dificuldade real', 'Acompanhamento da evolução'].forEach((text, i) => {
    if (list[i]) list[i].textContent = text;
  });

  const heroCard = document.querySelector('.hero-card');
  if (heroCard) {
    const title = heroCard.querySelector('h3');
    const text = heroCard.querySelector('p');
    const points = heroCard.querySelectorAll('.card-points div');
    const button = heroCard.querySelector('.btn');
    if (title) title.textContent = 'Comece com um diagnóstico pedagógico';
    if (text) text.textContent = 'Identificamos as principais dificuldades, organizamos um plano de intervenção e transformamos cada necessidade em atividades práticas para o aluno avançar com mais segurança.';
    ['Mapeamento das dificuldades e potencialidades', 'Atividades personalizadas por objetivo', 'Material impresso e colado no caderno'].forEach((p, i) => {
      if (points[i]) points[i].textContent = p;
    });
    if (button) {
      button.textContent = 'Quero saber mais';
      button.style.color = '#0f3d2e';
    }
  }

  const diffCards = document.querySelectorAll('#diferenciais .card');
  if (diffCards[1]) {
    const h = diffCards[1].querySelector('h3');
    const p = diffCards[1].querySelector('p');
    if (h) h.textContent = 'Material direcionado';
    if (p) p.textContent = 'As atividades são produzidas com foco nas dificuldades observadas, impressas e organizadas no caderno do aluno.';
  }

  const como = document.querySelector('#como-funciona .container');
  const steps = document.querySelector('#como-funciona .steps');
  const headerP = document.querySelector('#como-funciona .section-header p');
  if (headerP) headerP.textContent = 'Após o diagnóstico, o acompanhamento se transforma em um plano visual, prático e personalizado para cada dificuldade do aluno.';
  if (como && steps && !document.getElementById('mindMapIntegro')) {
    const block = document.createElement('div');
    block.id = 'mindMapIntegro';
    block.className = 'explain-upgrade';
    block.innerHTML = `<div class="explain-copy"><h3>Da avaliação à atividade no caderno</h3><p>Primeiro, realizamos o <strong>diagnóstico pedagógico</strong> para compreender as dificuldades do estudante. Depois, cada necessidade vira uma sequência de atividades personalizadas.</p><p>Essas atividades são <strong>produzidas de acordo com cada dificuldade</strong>, impressas e coladas no caderno do aluno, permitindo que a família acompanhe o que está sendo trabalhado.</p><p>O acompanhamento não é genérico: ele é organizado por metas, conteúdo, nível de dificuldade e resposta do aluno durante as aulas.</p></div><div class="mind-map"><div><div class="map-center">Mapa mental do acompanhamento</div><div class="map-items"><div class="map-item"><b>1. Diagnóstico</b><span>Identifica dificuldades, potencialidades e prioridades.</span></div><div class="map-item"><b>2. Plano personalizado</b><span>Define objetivos e habilidades que precisam ser desenvolvidas.</span></div><div class="map-item"><b>3. Atividades impressas</b><span>Materiais próprios, colados no caderno do aluno.</span></div><div class="map-item"><b>4. Acompanhamento</b><span>Correção, devolutiva, ajustes e evolução contínua.</span></div></div></div></div>`;
    steps.parentNode.insertBefore(block, steps);
  }

  const stepTitles = ['Contato inicial', 'Diagnóstico', 'Material personalizado', 'Evolução'];
  const stepTexts = ['A família entra em contato e informa as principais dificuldades, necessidades e objetivos do estudante.', 'Realizamos um mapeamento pedagógico para compreender o momento atual da aprendizagem.', 'As atividades são produzidas, impressas e coladas no caderno conforme cada dificuldade.', 'O estudante realiza as atividades, recebe mediação e o plano é ajustado conforme os avanços.'];
  document.querySelectorAll('#como-funciona .step').forEach((step, i) => {
    const h = step.querySelector('h3');
    const p = step.querySelector('p');
    if (h && stepTitles[i]) h.textContent = stepTitles[i];
    if (p && stepTexts[i]) p.textContent = stepTexts[i];
  });

  const portalSection = document.querySelector('#portais .section-header p');
  if (portalSection) portalSection.textContent = 'Os ambientes de acesso ficam em uma página própria, com entrada para parceiro, família e professor.';

  const portalIcons = [
    '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="partnerGrad" x1="12%" y1="10%" x2="88%" y2="90%"><stop offset="0%" stop-color="#169c63"/><stop offset="100%" stop-color="#bed63a"/></linearGradient></defs><polygon points="92,30 138,76 92,122 46,76" fill="#6d9c14" opacity="0.84"/><polygon points="86,22 132,68 86,114 40,68" fill="#4d8d11" opacity="0.93"/><polygon points="78,14 124,60 78,106 32,60" fill="url(#partnerGrad)"/><polygon points="110,16 114,24 122,28 114,32 110,40 106,32 98,28 106,24" fill="#e1b82e"/><polygon points="123,27 126,32 131,35 126,38 123,43 120,38 115,35 120,32" fill="#e1b82e"/><g fill="#fff"><path d="M59 59 L78 45 L97 59 V64 H93 V92 H63 V64 H59Z"/><rect x="54" y="61" width="48" height="31" rx="6"/><rect x="75" y="67" width="8" height="25" rx="2" fill="#16935c" opacity="0.82"/><circle cx="64" cy="99" r="10"/><circle cx="92" cy="99" r="10"/><path d="M48 118 C52 106,61 102,64 102 C67 102,76 106,80 118 Z"/><path d="M76 118 C80 106,89 102,92 102 C95 102,104 106,108 118 Z"/><circle cx="78" cy="57" r="6" fill="#16935c" opacity="0.82"/><rect x="77" y="46" width="2.5" height="10" fill="#16935c" opacity="0.82"/></g></svg>',
    '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="familyGrad" x1="12%" y1="10%" x2="88%" y2="90%"><stop offset="0%" stop-color="#169c63"/><stop offset="100%" stop-color="#bed63a"/></linearGradient></defs><polygon points="92,30 138,76 92,122 46,76" fill="#6d9c14" opacity="0.84"/><polygon points="86,22 132,68 86,114 40,68" fill="#4d8d11" opacity="0.93"/><polygon points="78,14 124,60 78,106 32,60" fill="url(#familyGrad)"/><polygon points="110,16 114,24 122,28 114,32 110,40 106,32 98,28 106,24" fill="#e1b82e"/><polygon points="123,27 126,32 131,35 126,38 123,43 120,38 115,35 120,32" fill="#e1b82e"/><g fill="#fff"><rect x="47" y="40" width="62" height="36" rx="7"/><rect x="53" y="48" width="50" height="21" rx="4" fill="#0f6c48" opacity="0.16"/><circle cx="56" cy="44" r="2.3" fill="#0f6c48" opacity="0.58"/><circle cx="63" cy="44" r="2.3" fill="#0f6c48" opacity="0.58"/><circle cx="70" cy="44" r="2.3" fill="#0f6c48" opacity="0.58"/><circle cx="60" cy="89" r="10"/><circle cx="95" cy="89" r="10"/><circle cx="77.5" cy="98" r="13"/><path d="M43 111 C47 99,56 95,60 95 C64 95,72 99,76 111 Z"/><path d="M79 111 C83 99,91 95,95 95 C99 95,108 99,112 111 Z"/><path d="M55 116 C60 103,69 98,77.5 98 C86 98,95 103,100 116 Z"/></g></svg>',
    '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="teacherGrad" x1="12%" y1="10%" x2="88%" y2="90%"><stop offset="0%" stop-color="#169c63"/><stop offset="100%" stop-color="#bed63a"/></linearGradient></defs><polygon points="92,30 138,76 92,122 46,76" fill="#6d9c14" opacity="0.84"/><polygon points="86,22 132,68 86,114 40,68" fill="#4d8d11" opacity="0.93"/><polygon points="78,14 124,60 78,106 32,60" fill="url(#teacherGrad)"/><polygon points="110,16 114,24 122,28 114,32 110,40 106,32 98,28 106,24" fill="#e1b82e"/><polygon points="123,27 126,32 131,35 126,38 123,43 120,38 115,35 120,32" fill="#e1b82e"/><g fill="#fff"><rect x="49" y="42" width="58" height="34" rx="5"/><rect x="54" y="47" width="48" height="24" rx="3" fill="#0f6c48" opacity="0.18"/><rect x="58" y="53" width="19" height="4" rx="2" fill="#0f6c48" opacity="0.76"/><rect x="58" y="61" width="29" height="4" rx="2" fill="#0f6c48" opacity="0.76"/><circle cx="67" cy="92" r="10"/><path d="M52 112 C56 100,64 96,67 96 C70 96,78 100,82 112 Z"/><rect x="91" y="77" width="7" height="28" rx="3" transform="rotate(28 94.5 91)"/><polygon points="105,69 112,73 100,86 95,82"/><circle cx="93" cy="94" r="3" fill="#0f6c48" opacity="0.75"/></g></svg>'
  ];

  document.querySelectorAll('#portais .portal-card').forEach((card, index) => {
    const icon = card.querySelector('.portal-icon');
    const btn = card.querySelector('.btn');
    if (icon && portalIcons[index]) icon.innerHTML = portalIcons[index];
    if (btn) {
      btn.href = portalPage;
      btn.textContent = 'Abrir';
      btn.style.color = '#ffffff';
    }
  });

  const portalContainer = document.querySelector('#portais .container');
  if (portalContainer && !document.querySelector('.portal-note')) {
    const note = document.createElement('div');
    note.className = 'portal-note';
    note.textContent = 'Clique em qualquer botão de acesso para abrir a página exclusiva dos portais.';
    portalContainer.appendChild(note);
  }
})();
