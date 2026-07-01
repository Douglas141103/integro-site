(function(){
  if(window.__FAMILIA_CURSOS_AVISO__) return;
  window.__FAMILIA_CURSOS_AVISO__ = true;

  function addCss(){
    if(document.getElementById('familiaCursosAvisoCss')) return;
    const style=document.createElement('style');
    style.id='familiaCursosAvisoCss';
    style.textContent='.familia-cursos-aviso{border:1px solid rgba(15,61,46,.12);border-radius:22px;padding:20px;background:#fff;box-shadow:0 10px 24px rgba(7,49,35,.06)}.familia-cursos-aviso h4{margin:0 0 8px;color:#0f3d2e}.familia-cursos-aviso p{color:#607084;line-height:1.55}.familia-cursos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}.familia-curso-btn{background:#f4fbf7;border:1px solid #d7e9df;border-radius:16px;padding:14px;color:#073b31;font-weight:900;cursor:pointer;text-align:left;font:inherit;transition:.2s}.familia-curso-btn:hover,.familia-curso-btn.active{background:#0f3d2e;color:#fff;transform:translateY(-1px)}.familia-curso-panel{display:none;margin-top:16px;background:#fbfefc;border:1px solid #dfeee6;border-radius:18px;padding:16px}.familia-curso-panel.active{display:block}.familia-curso-panel h5{margin:0 0 8px;color:#0f3d2e;font-size:1rem}.familia-curso-panel ul{margin:8px 0 0 18px;color:#607084;line-height:1.7}.familia-cursos-lista{display:grid;gap:10px;margin-top:10px}.familia-cursos-lista div{border:1px solid #d7e9df;border-radius:14px;padding:12px;background:#fff;color:#073b31;font-weight:700}@media(max-width:800px){.familia-cursos-grid{grid-template-columns:1fr}}';
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

  function abrirSecaoFamilia(sectionId){
    if(!sectionId) return;
    document.querySelectorAll('.family-section-panel').forEach(function(panel){
      panel.classList.toggle('active', panel.id===sectionId);
    });
    document.querySelectorAll('[data-family-tab]').forEach(function(button){
      button.classList.toggle('active', button.dataset.familyTab===sectionId);
    });
    const target=document.getElementById(sectionId);
    if(target){
      const top=target.getBoundingClientRect().top+window.scrollY-120;
      window.scrollTo({top:top,behavior:'smooth'});
    }
    if(history.replaceState) history.replaceState(null,'','#'+sectionId);
  }

  function abrirSubAba(tipo){
    if(!tipo) return;
    document.querySelectorAll('[data-curso-subtab]').forEach(function(button){
      button.classList.toggle('active', button.dataset.cursoSubtab===tipo);
    });
    document.querySelectorAll('[data-curso-panel]').forEach(function(panel){
      panel.classList.toggle('active', panel.dataset.cursoPanel===tipo);
    });
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
      section.innerHTML='<div class="section-head"><div><p class="eyebrow">Cursos e atividades online</p><h3>Notas e componentes curriculares</h3><p class="muted">A família poderá acompanhar os cursos em que o aluno está matriculado, os módulos/matérias, notas, médias e atividades online lançadas pela equipe.</p></div></div><div class="familia-cursos-aviso"><h4>Acompanhamento dos cursos</h4><p>Esta área foi reservada para que o responsável acompanhe, em um só lugar, as notas do aluno, os componentes curriculares dos cursos, as médias, as aulas e as atividades online vinculadas ao estudante.</p><div class="familia-cursos-grid"><button class="familia-curso-btn active" type="button" data-curso-subtab="notas">Notas e médias</button><button class="familia-curso-btn" type="button" data-curso-subtab="componentes">Componentes curriculares</button><button class="familia-curso-btn" type="button" data-curso-subtab="online">Atividades online</button></div><div class="familia-curso-panel active" data-curso-panel="notas"><h5>Notas e médias</h5><p>Quando as avaliações forem lançadas pela equipe, a família poderá consultar as notas, a média do módulo e a média geral do curso.</p><div class="familia-cursos-lista"><div>Boletim do curso</div><div>Média por módulo ou matéria</div><div>Resultado do estudante</div></div></div><div class="familia-curso-panel" data-curso-panel="componentes"><h5>Componentes curriculares</h5><p>Esta parte organiza as matérias e módulos que compõem cada curso do estudante.</p><ul><li>Nome do componente curricular.</li><li>Carga horária do módulo.</li><li>Conteúdos e objetivos trabalhados.</li></ul></div><div class="familia-curso-panel" data-curso-panel="online"><h5>Atividades online</h5><p>Quando houver atividades online cadastradas, elas aparecerão aqui para acompanhamento da família.</p><ul><li>Aulas registradas.</li><li>Atividades propostas.</li><li>Orientações e prazos.</li></ul></div></div>';
      const ref=document.getElementById('materials');
      ref?ref.insertAdjacentElement('afterend',section):grid.appendChild(section);
    }else if(document.getElementById('courses-online')&&!document.querySelector('[data-curso-subtab]')){
      const box=document.querySelector('#courses-online .familia-cursos-aviso');
      if(box){
        box.innerHTML='<h4>Acompanhamento dos cursos</h4><p>Esta área foi reservada para que o responsável acompanhe, em um só lugar, as notas do aluno, os componentes curriculares dos cursos, as médias, as aulas e as atividades online vinculadas ao estudante.</p><div class="familia-cursos-grid"><button class="familia-curso-btn active" type="button" data-curso-subtab="notas">Notas e médias</button><button class="familia-curso-btn" type="button" data-curso-subtab="componentes">Componentes curriculares</button><button class="familia-curso-btn" type="button" data-curso-subtab="online">Atividades online</button></div><div class="familia-curso-panel active" data-curso-panel="notas"><h5>Notas e médias</h5><p>Quando as avaliações forem lançadas pela equipe, a família poderá consultar as notas, a média do módulo e a média geral do curso.</p><div class="familia-cursos-lista"><div>Boletim do curso</div><div>Média por módulo ou matéria</div><div>Resultado do estudante</div></div></div><div class="familia-curso-panel" data-curso-panel="componentes"><h5>Componentes curriculares</h5><p>Esta parte organiza as matérias e módulos que compõem cada curso do estudante.</p><ul><li>Nome do componente curricular.</li><li>Carga horária do módulo.</li><li>Conteúdos e objetivos trabalhados.</li></ul></div><div class="familia-curso-panel" data-curso-panel="online"><h5>Atividades online</h5><p>Quando houver atividades online cadastradas, elas aparecerão aqui para acompanhamento da família.</p><ul><li>Aulas registradas.</li><li>Atividades propostas.</li><li>Orientações e prazos.</li></ul></div>';
      }
    }
  }

  function start(){
    atualizarLogin();
    document.addEventListener('click',function(event){
      const tab=event.target.closest('[data-family-tab]');
      if(tab&&tab.dataset.familyTab==='courses-online'){
        event.preventDefault();
        criarAreaDashboard();
        abrirSecaoFamilia('courses-online');
      }
      const sub=event.target.closest('[data-curso-subtab]');
      if(sub){
        event.preventDefault();
        abrirSubAba(sub.dataset.cursoSubtab);
      }
    });
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