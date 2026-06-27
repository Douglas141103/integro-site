(function(){
  const isHome = location.pathname === '/' || location.pathname.endsWith('/index.html');
  if(!isHome || document.getElementById('integroSiteImprovements')) return;

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
    @media(max-width:980px){.explain-upgrade{grid-template-columns:1fr}.map-items{grid-template-columns:1fr}.hero h1{letter-spacing:-1px}}
  `;
  document.head.appendChild(style);

  const navPortal = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase() === 'portais');
  if(navPortal) navPortal.href = '/acessos.html';
  const navAccess = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.textContent.trim().toLowerCase().includes('acessar portais'));
  if(navAccess){ navAccess.href = '/acessos.html'; navAccess.style.color = '#ffffff'; }

  const h1 = document.querySelector('#inicio h1');
  if(h1) h1.textContent = 'Seu filho precisa de um apoio personalizado para ele?';

  const heroP = document.querySelector('#inicio .hero-grid > div:first-child p');
  if(heroP){
    heroP.innerHTML = 'No <strong>INTEGRO</strong>, o atendimento começa com um diagnóstico pedagógico. A partir dele, produzimos atividades personalizadas para cada dificuldade, impressas e coladas no caderno do aluno para acompanhar a evolução de forma prática e organizada.';
  }

  const list = document.querySelectorAll('.hero-list div');
  ['Atividades personalizadas','Impressas no caderno','Foco na dificuldade real','Acompanhamento da evolução'].forEach((text,i)=>{ if(list[i]) list[i].textContent = text; });

  const heroCard = document.querySelector('.hero-card');
  if(heroCard){
    const title = heroCard.querySelector('h3');
    const text = heroCard.querySelector('p');
    const points = heroCard.querySelectorAll('.card-points div');
    if(title) title.textContent = 'Comece com um diagnóstico pedagógico';
    if(text) text.textContent = 'Identificamos as principais dificuldades, organizamos um plano de intervenção e transformamos cada necessidade em atividades práticas para o aluno avançar com mais segurança.';
    ['Mapeamento das dificuldades e potencialidades','Atividades personalizadas por objetivo','Material impresso e colado no caderno'].forEach((p,i)=>{ if(points[i]) points[i].textContent = p; });
  }

  const diffCards = document.querySelectorAll('#diferenciais .card');
  if(diffCards[1]){
    const h = diffCards[1].querySelector('h3');
    const p = diffCards[1].querySelector('p');
    if(h) h.textContent = 'Material direcionado';
    if(p) p.textContent = 'As atividades são produzidas com foco nas dificuldades observadas, impressas e organizadas no caderno do aluno.';
  }

  const como = document.querySelector('#como-funciona .container');
  const steps = document.querySelector('#como-funciona .steps');
  const headerP = document.querySelector('#como-funciona .section-header p');
  if(headerP) headerP.textContent = 'Após o diagnóstico, o acompanhamento se transforma em um plano visual, prático e personalizado para cada dificuldade do aluno.';
  if(como && steps && !document.getElementById('mindMapIntegro')){
    const block = document.createElement('div');
    block.id = 'mindMapIntegro';
    block.className = 'explain-upgrade';
    block.innerHTML = `<div class="explain-copy"><h3>Da avaliação à atividade no caderno</h3><p>Primeiro, realizamos o <strong>diagnóstico pedagógico</strong> para compreender as dificuldades do estudante. Depois, cada necessidade vira uma sequência de atividades personalizadas.</p><p>Essas atividades são <strong>produzidas de acordo com cada dificuldade</strong>, impressas e coladas no caderno do aluno, permitindo que a família acompanhe o que está sendo trabalhado.</p><p>O acompanhamento não é genérico: ele é organizado por metas, conteúdo, nível de dificuldade e resposta do aluno durante as aulas.</p></div><div class="mind-map"><div><div class="map-center">Mapa mental do acompanhamento</div><div class="map-items"><div class="map-item"><b>1. Diagnóstico</b><span>Identifica dificuldades, potencialidades e prioridades.</span></div><div class="map-item"><b>2. Plano personalizado</b><span>Define objetivos e habilidades que precisam ser desenvolvidas.</span></div><div class="map-item"><b>3. Atividades impressas</b><span>Materiais próprios, colados no caderno do aluno.</span></div><div class="map-item"><b>4. Acompanhamento</b><span>Correção, devolutiva, ajustes e evolução contínua.</span></div></div></div></div>`;
    steps.parentNode.insertBefore(block, steps);
  }

  const stepTitles = ['Contato inicial','Diagnóstico','Material personalizado','Evolução'];
  const stepTexts = ['A família entra em contato e informa as principais dificuldades, necessidades e objetivos do estudante.','Realizamos um mapeamento pedagógico para compreender o momento atual da aprendizagem.','As atividades são produzidas, impressas e coladas no caderno conforme cada dificuldade.','O estudante realiza as atividades, recebe mediação e o plano é ajustado conforme os avanços.'];
  document.querySelectorAll('#como-funciona .step').forEach((step,i)=>{
    const h = step.querySelector('h3'); const p = step.querySelector('p');
    if(h && stepTitles[i]) h.textContent = stepTitles[i];
    if(p && stepTexts[i]) p.textContent = stepTexts[i];
  });

  const portalSection = document.querySelector('#portais .section-header p');
  if(portalSection) portalSection.textContent = 'Os ambientes de acesso ficam em uma página própria, com entrada para parceiro, família e professor.';
  document.querySelectorAll('#portais .portal-card .btn').forEach(btn => { btn.href = '/acessos.html'; btn.textContent = 'Ir para acessos'; btn.style.color = '#ffffff'; });
  const portalContainer = document.querySelector('#portais .container');
  if(portalContainer && !document.querySelector('.portal-note')){
    const note = document.createElement('div');
    note.className = 'portal-note';
    note.textContent = 'Clique em qualquer botão de acesso para abrir a página exclusiva dos portais.';
    portalContainer.appendChild(note);
  }
})();
