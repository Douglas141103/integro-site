(function(){
  if(window.__FAMILIA_CURSOS_AVISO__) return;
  window.__FAMILIA_CURSOS_AVISO__ = true;

  function addCss(){
    if(document.getElementById('familiaCursosAvisoCss')) return;
    const style=document.createElement('style');
    style.id='familiaCursosAvisoCss';
    style.textContent='.familia-cursos-aviso{border:1px solid rgba(15,61,46,.12);border-radius:22px;padding:20px;background:#fff;box-shadow:0 10px 24px rgba(7,49,35,.06)}.familia-cursos-aviso h4{margin:0 0 8px;color:#0f3d2e}.familia-cursos-aviso p{color:#607084;line-height:1.55}.familia-cursos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}.familia-cursos-grid div{background:#f4fbf7;border:1px solid #d7e9df;border-radius:16px;padding:14px;color:#073b31;font-weight:800}@media(max-width:800px){.familia-cursos-grid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }

  function atualizarLogin(){
    const copy=document.querySelector('.auth-card .muted');
    if(copy) copy.textContent='Acompanhe o plano de estudos, materiais, evolução, frequência, notas, componentes curriculares dos cursos e atividades online do estudante.';
    const list=document.querySelector('.feature-list');
    if(list&&!list.dataset.cursosAviso){
      list.dataset.cursosAviso='true';
      list.innerHTML='<li>O que o estudante vai estudar na semana</li><li>Arquivos e materiais individualizados</li><li>Notas, médias e componentes curriculares dos cursos</li><li>Atividades online, aulas e acompanhamento dos cursos</li><li>Evolução, frequência e acompanhamento do aluno</li><li>Comunicados e recados com a equipe</li>';
    }
  }

  function criarAreaDashboard(){
    addCss();
    const hero=document.querySelector('.hero-actions');
    if(hero&&!hero.querySelector('[data-family-tab="courses-online"]')){
      const btn=document.createElement('button');
      btn.className='btn btn-light family-tab-button';
      btn.type='button';
      btn.dataset.familyTab='courses-online';
      btn.textContent='Cursos e notas';
      hero.insertBefore(btn,hero.children[1]||null);
    }
    const menu=document.querySelector('.family-section-buttons');
    if(menu&&!menu.querySelector('[data-family-tab="courses-online"]')){
      const btn=document.createElement('button');
      btn.className='family-nav-button';
      btn.type='button';
      btn.dataset.familyTab='courses-online';
      btn.innerHTML='<span class="family-nav-icon">3</span><strong>Cursos, notas e online</strong><small>Acompanhe componentes curriculares, notas e atividades online.</small>';
      const ref=menu.querySelector('[data-family-tab="materials"]');
      ref?ref.insertAdjacentElement('afterend',btn):menu.appendChild(btn);
    }
    const grid=document.querySelector('.family-single-view');
    if(grid&&!document.getElementById('courses-online')){
      const section=document.createElement('section');
      section.id='courses-online';
      section.className='content-card family-section-panel';
      section.innerHTML='<div class="section-head"><div><p class="eyebrow">Cursos e atividades online</p><h3>Notas e componentes curriculares</h3><p class="muted">A família poderá acompanhar os cursos em que o aluno está matriculado, os módulos/matérias, notas, médias e atividades online lançadas pela equipe.</p></div></div><div class="familia-cursos-aviso"><h4>Acompanhamento dos cursos</h4><p>Esta área foi reservada para que o responsável acompanhe, em um só lugar, as notas do aluno, os componentes curriculares dos cursos, as médias, as aulas e as atividades online vinculadas ao estudante.</p><div class="familia-cursos-grid"><div>Notas e médias</div><div>Componentes curriculares</div><div>Atividades online</div></div></div>';
      const ref=document.getElementById('materials');
      ref?ref.insertAdjacentElement('afterend',section):grid.appendChild(section);
    }
  }

  function start(){
    atualizarLogin();
    if(location.pathname.includes('/portal-familia/dashboard.html')){
      let tentativas=0;
      const timer=setInterval(function(){
        tentativas++;
        criarAreaDashboard();
        if(document.querySelector('.family-section-buttons')||tentativas>30) clearInterval(timer);
      },300);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
