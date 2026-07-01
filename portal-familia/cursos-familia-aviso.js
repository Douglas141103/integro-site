(function(){
  if(window.__FAMILIA_CURSOS_AVISO__) return;
  window.__FAMILIA_CURSOS_AVISO__ = true;

  let supabaseClient = null;
  let lastStudentId = '';
  let lastData = null;

  function safe(v){return String(v??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');}
  function brDate(v){if(!v)return '—';const p=String(v).slice(0,10).split('-');return p.length===3?`${p[2]}/${p[1]}/${p[0]}`:String(v);}
  function num(v){if(v===null||v===undefined||v==='')return '—';const n=Number(v);return Number.isFinite(n)?String(n.toFixed(1)).replace('.',','):'—';}
  function byId(items){return new Map((items||[]).map(function(item){return [item.id,item];}));}

  async function getClient(){
    if(supabaseClient) return supabaseClient;
    const cfg=window.INTEGRO_SUPABASE||{};
    const mod=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    supabaseClient=mod.createClient(cfg.url,cfg.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    return supabaseClient;
  }

  function addCss(){
    if(document.getElementById('familiaCursosAvisoCss')) return;
    const style=document.createElement('style');
    style.id='familiaCursosAvisoCss';
    style.textContent=`
      .familia-cursos-aviso{border:1px solid rgba(15,61,46,.12);border-radius:22px;padding:20px;background:#fff;box-shadow:0 10px 24px rgba(7,49,35,.06);overflow:hidden}
      .familia-cursos-aviso h4{margin:0 0 8px;color:#0f3d2e}
      .familia-cursos-aviso p{color:#607084;line-height:1.55}
      .familia-cursos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}
      .familia-curso-btn{background:#f4fbf7;border:1px solid #d7e9df;border-radius:16px;padding:14px;color:#073b31;font-weight:900;cursor:pointer;text-align:left;font:inherit;transition:.2s}
      .familia-curso-btn:hover,.familia-curso-btn.active{background:#0f3d2e;color:#fff;transform:translateY(-1px)}
      .familia-curso-panel{display:none;margin-top:16px;background:#fbfefc;border:1px solid #dfeee6;border-radius:18px;padding:16px;overflow:hidden}
      .familia-curso-panel.active{display:block}
      .familia-cursos-lista{display:grid;gap:10px;margin-top:10px}
      .familia-cursos-lista div,.curso-real-card{border:1px solid #d7e9df;border-radius:14px;padding:12px;background:#fff;color:#073b31}
      .curso-real-card{margin-bottom:12px;overflow:hidden}
      .curso-real-card strong{color:#0f3d2e}
      .curso-real-card small{display:block;color:#607084;margin-top:4px;line-height:1.45}
      .curso-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:12px 0}
      .curso-stat{background:#f4fbf7;border:1px solid #d7e9df;border-radius:14px;padding:10px}
      .curso-stat span{display:block;color:#607084;font-size:.78rem;font-weight:800}
      .curso-stat b{color:#0f3d2e;word-break:break-word}
      .curso-table-wrap{width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid #dfeee6;border-radius:14px;background:#fff;margin-top:8px}
      .curso-table{width:100%;min-width:760px;border-collapse:collapse}
      .curso-table th,.curso-table td{border-bottom:1px solid #dfeee6;padding:8px;text-align:left;vertical-align:top;word-break:break-word}
      .curso-table th{background:#eef7f2;color:#0f3d2e}
      .curso-empty{background:#fff8e6;border:1px solid rgba(216,169,75,.35);border-radius:14px;padding:12px;color:#624000;font-weight:700;margin-top:10px}
      .curso-table-empty{padding:12px;color:#607084}
      @media (max-width:800px){
        .familia-cursos-grid{grid-template-columns:1fr}
        .curso-stats{grid-template-columns:repeat(2,1fr)}
        .curso-table-wrap{overflow:visible;border:none;background:transparent}
        .curso-table{min-width:0;border-collapse:separate;border-spacing:0 10px}
        .curso-table thead{display:none}
        .curso-table,.curso-table tbody,.curso-table tr,.curso-table td{display:block;width:100%}
        .curso-table tbody{display:grid;gap:10px}
        .curso-table tr{background:#fff;border:1px solid #d7e9df;border-radius:14px;padding:12px}
        .curso-table td{border:none;padding:4px 0}
        .curso-table td::before{content:attr(data-label);display:block;font-size:.72rem;font-weight:800;color:#607084;margin-bottom:2px;text-transform:uppercase}
      }
      @media (max-width:520px){
        .curso-stats{grid-template-columns:1fr}
      }
    `;
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
    document.querySelectorAll('.family-section-panel').forEach(function(panel){panel.classList.toggle('active',panel.id===sectionId);});
    document.querySelectorAll('[data-family-tab]').forEach(function(button){button.classList.toggle('active',button.dataset.familyTab===sectionId);});
    const target=document.getElementById(sectionId);
    if(target) window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-120,behavior:'smooth'});
    if(history.replaceState) history.replaceState(null,'','#'+sectionId);
  }

  function abrirSubAba(tipo){
    document.querySelectorAll('[data-curso-subtab]').forEach(function(button){button.classList.toggle('active',button.dataset.cursoSubtab===tipo);});
    document.querySelectorAll('[data-curso-panel]').forEach(function(panel){panel.classList.toggle('active',panel.dataset.cursoPanel===tipo);});
    renderPainel(tipo);
  }

  function baseBoxHtml(){
    return '<h4>Acompanhamento dos cursos</h4><p>Esta área mostra os dados reais lançados na Gestão de Cursos: notas, médias, componentes curriculares/módulos e atividades online vinculadas ao estudante selecionado.</p><div class="familia-cursos-grid"><button class="familia-curso-btn active" type="button" data-curso-subtab="notas">Notas e médias</button><button class="familia-curso-btn" type="button" data-curso-subtab="componentes">Componentes curriculares</button><button class="familia-curso-btn" type="button" data-curso-subtab="online">Atividades online</button></div><div class="familia-curso-panel active" data-curso-panel="notas"><div id="cursoNotasDados" class="curso-empty">Carregando notas e médias...</div></div><div class="familia-curso-panel" data-curso-panel="componentes"><div id="cursoComponentesDados" class="curso-empty">Carregando componentes curriculares...</div></div><div class="familia-curso-panel" data-curso-panel="online"><div id="cursoOnlineDados" class="curso-empty">Carregando atividades online...</div></div>';
  }

  function criarAreaDashboard(){
    addCss();
    const hero=document.querySelector('.hero-actions');
    if(hero&&!hero.querySelector('[data-family-tab="courses-online"]')){
      const btn=document.createElement('button');btn.className='btn btn-light family-tab-button';btn.type='button';btn.dataset.familyTab='courses-online';btn.textContent='Cursos e notas';hero.insertBefore(btn,hero.children[1]||null);
    }
    const menu=document.querySelector('.family-section-buttons');
    if(menu&&!menu.querySelector('[data-family-tab="courses-online"]')){
      const btn=document.createElement('button');btn.className='family-nav-button';btn.type='button';btn.dataset.familyTab='courses-online';btn.innerHTML='<span class="family-nav-icon">3</span><strong>Cursos, notas e online</strong><small>Acompanhe componentes curriculares, notas e atividades online.</small>';
      const ref=menu.querySelector('[data-family-tab="materials"]');ref?ref.insertAdjacentElement('afterend',btn):menu.appendChild(btn);
    }
    const grid=document.querySelector('.family-single-view');
    if(grid&&!document.getElementById('courses-online')){
      const section=document.createElement('section');section.id='courses-online';section.className='content-card family-section-panel';
      section.innerHTML='<div class="section-head"><div><p class="eyebrow">Cursos e atividades online</p><h3>Notas e componentes curriculares</h3><p class="muted">Acompanhe os cursos em que o aluno está matriculado, os módulos/matérias, notas, médias e atividades online lançadas pela equipe.</p></div></div><div class="familia-cursos-aviso">'+baseBoxHtml()+'</div>';
      const ref=document.getElementById('materials');ref?ref.insertAdjacentElement('afterend',section):grid.appendChild(section);
    }else if(document.getElementById('courses-online')&&!document.querySelector('[data-curso-subtab]')){
      const box=document.querySelector('#courses-online .familia-cursos-aviso');if(box) box.innerHTML=baseBoxHtml();
    }
  }

  function selectedStudent(){
    const select=document.getElementById('student-selector');
    return {id:select?.value||'',name:select?.options?.[select.selectedIndex]?.textContent?.trim()||''};
  }

  function avgFor(enrollment,assessments,grades){
    let total=0, weightTotal=0;
    assessments.forEach(function(a){const g=grades.find(function(x){return x.assessment_id===a.id&&x.enrollment_id===enrollment.id;});if(g?.score===null||g?.score===undefined||g?.score==='')return;const max=Number(a.max_score||10)||10;const w=Number(a.weight||1)||1;total+=((Number(g.score||0)/max)*10)*w;weightTotal+=w;});
    return weightTotal?Number((total/weightTotal).toFixed(1)):null;
  }

  async function loadData(){
    const student=selectedStudent();
    if(!student.id) return {student,enrollments:[]};
    const db=await getClient();
    let {data:enrollments,error}=await db.from('course_enrollments').select('*').eq('student_id',student.id).order('created_at',{ascending:false});
    if(error) throw error;
    if((!enrollments||!enrollments.length)&&student.name){
      const byName=await db.from('course_enrollments').select('*').ilike('student_name_snapshot',student.name).order('created_at',{ascending:false});
      if(byName.error) throw byName.error;
      enrollments=byName.data||[];
    }
    enrollments=enrollments||[];
    if(!enrollments.length) return {student,enrollments:[]};
    const courseIds=[...new Set(enrollments.map(function(e){return e.course_id;}).filter(Boolean))];
    const classIds=[...new Set(enrollments.map(function(e){return e.class_id;}).filter(Boolean))];
    const enrollmentIds=enrollments.map(function(e){return e.id;});
    const [coursesRes,classesRes,modulesRes,assessmentsRes,gradesRes,lessonsRes,attendanceRes]=await Promise.all([
      courseIds.length?db.from('courses').select('*').in('id',courseIds):Promise.resolve({data:[]}),
      classIds.length?db.from('course_classes').select('*').in('id',classIds):Promise.resolve({data:[]}),
      courseIds.length?db.from('course_modules').select('*').in('course_id',courseIds).order('order_index',{ascending:true}):Promise.resolve({data:[]}),
      classIds.length?db.from('course_assessments').select('*').in('class_id',classIds).order('assessment_date',{ascending:true}):Promise.resolve({data:[]}),
      enrollmentIds.length?db.from('course_grades').select('*').in('enrollment_id',enrollmentIds):Promise.resolve({data:[]}),
      classIds.length?db.from('course_lessons').select('*').in('class_id',classIds).order('lesson_date',{ascending:false}):Promise.resolve({data:[]}),
      enrollmentIds.length?db.from('course_attendance').select('*').in('enrollment_id',enrollmentIds):Promise.resolve({data:[]})
    ]);
    const err=[coursesRes,classesRes,modulesRes,assessmentsRes,gradesRes,lessonsRes,attendanceRes].find(function(r){return r.error;});
    if(err) throw err.error;
    return {student,enrollments,courses:coursesRes.data||[],classes:classesRes.data||[],modules:modulesRes.data||[],assessments:assessmentsRes.data||[],grades:gradesRes.data||[],lessons:lessonsRes.data||[],attendance:attendanceRes.data||[]};
  }

  function renderPainel(tipo){
    const data=lastData;
    const target={notas:document.getElementById('cursoNotasDados'),componentes:document.getElementById('cursoComponentesDados'),online:document.getElementById('cursoOnlineDados')}[tipo||'notas'];
    if(!target) return;
    if(!data){target.innerHTML='Carregando dados dos cursos...';return;}
    if(!data.enrollments?.length){target.className='curso-empty';target.innerHTML='Nenhuma matrícula em curso foi encontrada para este aluno. Verifique se a matrícula do curso foi feita usando o aluno da base, ou se o nome digitado na matrícula é igual ao nome do aluno no portal da família.';return;}
    target.className='';
    if(tipo==='componentes') return renderComponentes(target,data);
    if(tipo==='online') return renderOnline(target,data);
    return renderNotas(target,data);
  }

  function renderNotas(target,data){
    const courses=byId(data.courses), classes=byId(data.classes), modules=byId(data.modules);
    target.innerHTML=data.enrollments.map(function(en){
      const course=courses.get(en.course_id)||{};
      const klass=classes.get(en.class_id)||{};
      const ass=data.assessments.filter(function(a){return a.class_id===en.class_id;});
      const gr=data.grades.filter(function(g){return g.enrollment_id===en.id;});
      const average=en.final_average??avgFor(en,ass,gr);
      const rows=ass.length?ass.map(function(a){
        const g=gr.find(function(x){return x.assessment_id===a.id;});
        const mod=modules.get(a.course_module_id);
        return `<tr><td data-label="Data">${safe(brDate(a.assessment_date))}</td><td data-label="Módulo/matéria">${safe(mod?.name||'Sem módulo/matéria')}</td><td data-label="Avaliação">${safe(a.title||'Avaliação')}</td><td data-label="Tipo">${safe(a.assessment_type||'Atividade')}</td><td data-label="Nota"><strong>${safe(g?.score??'—')}</strong></td><td data-label="Máx.">${safe(a.max_score||10)}</td><td data-label="Observação">${safe(g?.observation||'')}</td></tr>`;
      }).join(''):'<tr><td colspan="7" class="curso-table-empty">Nenhuma avaliação/nota lançada para esta turma.</td></tr>';
      return `<article class="curso-real-card"><strong>${safe(course.name||'Curso')}</strong><small>Turma: ${safe(klass.class_name||'—')} • Status: ${safe(en.final_result||en.status||'Matriculado')}</small><div class="curso-stats"><div class="curso-stat"><span>Média geral</span><b>${num(average)}</b></div><div class="curso-stat"><span>Frequência</span><b>${en.attendance_percentage!=null?num(en.attendance_percentage)+'%':'—'}</b></div><div class="curso-stat"><span>Avaliações</span><b>${ass.length}</b></div><div class="curso-stat"><span>Notas lançadas</span><b>${gr.length}</b></div></div><div class="curso-table-wrap"><table class="curso-table"><thead><tr><th>Data</th><th>Módulo/matéria</th><th>Avaliação</th><th>Tipo</th><th>Nota</th><th>Máx.</th><th>Observação</th></tr></thead><tbody>${rows}</tbody></table></div></article>`;
    }).join('');
  }

  function renderComponentes(target,data){
    const courses=byId(data.courses), classes=byId(data.classes);
    target.innerHTML=data.enrollments.map(function(en){
      const course=courses.get(en.course_id)||{};const klass=classes.get(en.class_id)||{};const mods=data.modules.filter(function(m){return m.course_id===en.course_id;});
      const items=mods.length?mods.map(function(m){const ass=data.assessments.filter(function(a){return a.course_module_id===m.id&&a.class_id===en.class_id;});const gr=data.grades.filter(function(g){return g.enrollment_id===en.id&&ass.some(function(a){return a.id===g.assessment_id;});});const avg=ass.length?avgFor(en,ass,gr):null;return `<div><strong>${safe(m.order_index?m.order_index+'. ':'')}${safe(m.name)}</strong><small>${m.workload_hours?`Carga horária: ${safe(m.workload_hours)}h<br>`:''}${safe(m.description||'Componente curricular cadastrado.')}<br>Média do módulo: <b>${num(avg)}</b> • Avaliações: ${ass.length}</small></div>`;}).join(''):'<div>Nenhum módulo/matéria cadastrado para este curso.</div>';
      return `<article class="curso-real-card"><strong>${safe(course.name||'Curso')}</strong><small>Turma: ${safe(klass.class_name||'—')}</small><div class="familia-cursos-lista">${items}</div></article>`;
    }).join('');
  }

  function renderOnline(target,data){
    const courses=byId(data.courses), classes=byId(data.classes), modules=byId(data.modules);
    target.innerHTML=data.enrollments.map(function(en){
      const course=courses.get(en.course_id)||{};const klass=classes.get(en.class_id)||{};const lessons=data.lessons.filter(function(l){return l.class_id===en.class_id;});
      const items=lessons.length?lessons.map(function(l){const mod=modules.get(l.course_module_id||l.module_id);return `<div><strong>${safe(l.title||'Aula / atividade')}</strong><small>${brDate(l.lesson_date)}${mod?` • ${safe(mod.name)}`:''}<br>${safe(l.content_summary||'Atividade/aula registrada pela equipe.')}</small></div>`;}).join(''):'<div>Nenhuma aula ou atividade online lançada para esta turma.</div>';
      return `<article class="curso-real-card"><strong>${safe(course.name||'Curso')}</strong><small>Turma: ${safe(klass.class_name||'—')}</small><div class="familia-cursos-lista">${items}</div></article>`;
    }).join('');
  }

  async function refreshDados(){
    const student=selectedStudent();
    if(!student.id) return;
    if(student.id===lastStudentId&&lastData) return renderPainel(document.querySelector('[data-curso-subtab].active')?.dataset.cursoSubtab||'notas');
    lastStudentId=student.id;lastData=null;
    ['cursoNotasDados','cursoComponentesDados','cursoOnlineDados'].forEach(function(id){const el=document.getElementById(id);if(el) el.innerHTML='Carregando dados lançados em cursos...';});
    try{lastData=await loadData();renderPainel(document.querySelector('[data-curso-subtab].active')?.dataset.cursoSubtab||'notas');}
    catch(error){console.error(error);['cursoNotasDados','cursoComponentesDados','cursoOnlineDados'].forEach(function(id){const el=document.getElementById(id);if(el){el.className='curso-empty';el.innerHTML='Não foi possível carregar os dados dos cursos. Verifique se as permissões/RLS das tabelas course_enrollments, course_modules, course_assessments, course_grades e course_lessons permitem leitura pelo responsável. Detalhe: '+safe(error.message||'erro desconhecido');}});}
  }

  function start(){
    atualizarLogin();
    document.addEventListener('click',function(event){
      const tab=event.target.closest('[data-family-tab]');
      if(tab&&tab.dataset.familyTab==='courses-online'){event.preventDefault();criarAreaDashboard();abrirSecaoFamilia('courses-online');setTimeout(refreshDados,250);}
      const sub=event.target.closest('[data-curso-subtab]');
      if(sub){event.preventDefault();abrirSubAba(sub.dataset.cursoSubtab);setTimeout(refreshDados,100);}
    });
    document.addEventListener('change',function(event){if(event.target&&event.target.id==='student-selector'){lastStudentId='';lastData=null;setTimeout(refreshDados,700);}});
    if(location.pathname.includes('/portal-familia/dashboard.html')){
      let tentativas=0;const timer=setInterval(function(){tentativas++;criarAreaDashboard();if(document.getElementById('student-selector')?.value){refreshDados();clearInterval(timer);}else if(tentativas>40){clearInterval(timer);}},300);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();