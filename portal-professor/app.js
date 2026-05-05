const config = window.INTEGRO_SUPABASE || null;

if (!config || !config.url || !config.anonKey) {
  console.error('Configuração do Supabase não encontrada.');
}

const supabaseClient = window.supabase.createClient(config.url, config.anonKey);
const page = document.body.dataset.page;

const state = {
  session: null,
  profile: null,
  students: [],
  selectedStudentId: null,
  selectedStudent: null,
  guardians: [],
  attendanceMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  attendanceSchedule: [],
  attendanceRecords: [],
  editingPlanId: null
};

const isStaff = (role) => ['integro_admin', 'diretor', 'coordenacao', 'professor'].includes(role);
const weekdayNames = ['Domingo', 'Segunda', 'Terça', 'Quinta', 'Quarta', 'Sexta', 'Sábado'];

// Corrige a ordem dos dias da semana caso algum navegador use índice normal do Date.
weekdayNames[3] = 'Quarta';
weekdayNames[4] = 'Quinta';

function slugify(text = '') {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function pad2(value) {
  return String(value).padStart(2, '0');
}

function formatDate(value) {
  if (!value) return '—';

  try {
    return new Date(value).toLocaleString('pt-BR');
  } catch {
    return '—';
  }
}

function formatDateOnly(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function parseDateOnly(value) {
  if (!value) return null;

  const [y, m, d] = String(value).split('-').map(Number);

  if (!y || !m || !d) return null;

  return new Date(y, m - 1, d);
}

function formatDateBR(value) {
  const date = parseDateOnly(value);
  return date ? date.toLocaleDateString('pt-BR') : '—';
}

function monthValue(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}`;
}

function monthBounds(date) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    start: formatDateOnly(start),
    end: formatDateOnly(end)
  };
}

function attendanceLabel(status) {
  const map = {
    presente: 'Presente',
    ausente: 'Ausente',
    justificada: 'Falta justificada'
  };

  return map[status] || status || '—';
}

function setText(id, value) {
  const el = document.getElementById(id);

  if (el) {
    el.textContent = value;
  }
}

function setHelperMessage(id, message, type = 'success') {
  const el = document.getElementById(id);

  if (!el) return;

  el.textContent = message || '';
  el.className = type === 'error' ? 'helper error' : 'helper success';
}

function renderList(containerId, items, mapper) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = items?.length
    ? items.map(mapper).join('')
    : '<div class="empty">Nenhum item encontrado.</div>';
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMultiline(value = '') {
  return escapeHtml(value || '').replace(/\n/g, '<br>');
}

function openActionSection(sectionId = 'actionHome') {
  const sections = Array.from(document.querySelectorAll('.action-section'));
  const triggers = Array.from(document.querySelectorAll('.action-trigger'));

  sections.forEach(section => {
    section.classList.toggle('active', section.id === sectionId);
  });

  triggers.forEach(trigger => {
    trigger.classList.toggle('active', trigger.dataset.sectionTarget === sectionId);
  });

  history.replaceState(
    null,
    '',
    sectionId === 'actionHome' ? window.location.pathname : `#${sectionId}`
  );

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function setPlanSubmitMode() {
  const submitBtn = document.querySelector('#planForm button[type="submit"]');

  if (submitBtn) {
    submitBtn.textContent = state.editingPlanId ? 'Atualizar plano' : 'Salvar plano';
  }
}

function resetPlanEditingState(clearForm = false) {
  state.editingPlanId = null;

  const form = document.getElementById('planForm');

  if (clearForm && form) {
    form.reset();
  }

  setPlanSubmitMode();
}

async function getCurrentProfile(userId) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', userId)
    .single();

  if (error) throw error;

  return data;
}

async function ensureStaffAccess(user) {
  const profile = await getCurrentProfile(user.id);
  state.profile = profile;

  if (!isStaff(profile.role)) {
    await supabaseClient.auth.signOut();
    throw new Error('Seu perfil não tem acesso ao portal do professor.');
  }

  return profile;
}

async function fetchStudents() {
  const { data, error } = await supabaseClient
    .from('students')
    .select('id, full_name, school_id, active, schools(name)')
    .order('full_name', { ascending: true });

  if (error) throw error;

  state.students = data || [];
}

async function fetchGuardians(studentId) {
  const { data: links, error: linksError } = await supabaseClient
    .from('student_guardians')
    .select('guardian_profile_id')
    .eq('student_id', studentId);

  if (linksError) throw linksError;

  const guardianIds = (links || []).map(item => item.guardian_profile_id);

  if (!guardianIds.length) {
    state.guardians = [];
    return [];
  }

  const { data: profiles, error: profilesError } = await supabaseClient
    .from('profiles')
    .select('id, full_name')
    .in('id', guardianIds);

  if (profilesError) throw profilesError;

  state.guardians = profiles || [];
  return state.guardians;
}

async function fetchStudentData(studentId) {
  const { start, end } = monthBounds(state.attendanceMonth);

  const [plansRes, materialsRes, progressRes, announcementsRes, attendanceRes] = await Promise.all([
    supabaseClient
      .from('student_plans')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false }),

    supabaseClient
      .from('student_materials')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false }),

    supabaseClient
      .from('student_progress')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false }),

    supabaseClient
      .from('student_announcements')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false }),

    supabaseClient
      .from('student_attendance')
      .select('*')
      .eq('student_id', studentId)
      .gte('attendance_date', start)
      .lte('attendance_date', end)
      .order('attendance_date', { ascending: false })
  ]);

  [plansRes, materialsRes, progressRes, announcementsRes, attendanceRes].forEach((res) => {
    if (res.error) throw res.error;
  });

  return {
    plans: plansRes.data || [],
    materials: materialsRes.data || [],
    progress: progressRes.data || [],
    announcements: announcementsRes.data || [],
    attendance: attendanceRes.data || []
  };
}

async function fetchAttendanceSchedule(studentId) {
  const { data, error } = await supabaseClient
    .from('student_attendance_schedule')
    .select('*')
    .eq('student_id', studentId)
    .eq('active', true)
    .order('weekday', { ascending: true });

  if (error) throw error;

  state.attendanceSchedule = data || [];
  return state.attendanceSchedule;
}

function renderGuardiansSelect() {
  const select = document.getElementById('guardianSelect');

  if (!select) return;

  select.innerHTML = state.guardians.length
    ? state.guardians
        .map(g => `<option value="${escapeHtml(g.id)}">${escapeHtml(g.full_name || g.id)}</option>`)
        .join('')
    : '<option value="">Nenhum responsável vinculado</option>';
}

function renderAttendanceSchedule() {
  const checked = new Set(state.attendanceSchedule.map(item => String(item.weekday)));

  document.querySelectorAll('input[name="weekday"]').forEach(input => {
    input.checked = checked.has(input.value);
  });
}

function renderAttendanceCalendar(records = []) {
  const container = document.getElementById('attendanceCalendar');

  if (!container) return;

  const scheduledWeekdays = new Set(state.attendanceSchedule.map(item => Number(item.weekday)));
  const recordMap = new Map((records || []).map(item => [item.attendance_date, item]));

  const date = state.attendanceMonth;
  const first = new Date(date.getFullYear(), date.getMonth(), 1);
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const cells = [];

  weekdayNames.forEach(name => {
    cells.push(`<div class="calendar-weekday">${name.slice(0, 3)}</div>`);
  });

  for (let i = 0; i < first.getDay(); i++) {
    cells.push('<div class="calendar-day empty-day"></div>');
  }

  for (let day = 1; day <= last.getDate(); day++) {
    const current = new Date(date.getFullYear(), date.getMonth(), day);
    const iso = formatDateOnly(current);
    const record = recordMap.get(iso);
    const scheduled = scheduledWeekdays.has(current.getDay());
    const status = record?.status || '';
    const label = record ? attendanceLabel(record.status) : (scheduled ? 'dia previsto' : 'sem previsão');

    cells.push(`
      <button
        type="button"
        class="calendar-day ${scheduled ? 'scheduled' : ''} ${status ? `status-${status}` : ''}"
        data-date="${iso}"
      >
        <strong>${day}</strong>
        <span>${escapeHtml(label)}</span>
      </button>
    `);
  }

  container.innerHTML = cells.join('');
}

async function loadAttendanceForSelectedStudent() {
  if (!state.selectedStudentId) return;

  const monthInput = document.getElementById('attendanceMonth');

  if (monthInput) {
    monthInput.value = monthValue(state.attendanceMonth);
  }

  await fetchAttendanceSchedule(state.selectedStudentId);
  renderAttendanceSchedule();

  const { start, end } = monthBounds(state.attendanceMonth);

  const { data, error } = await supabaseClient
    .from('student_attendance')
    .select('*')
    .eq('student_id', state.selectedStudentId)
    .gte('attendance_date', start)
    .lte('attendance_date', end)
    .order('attendance_date', { ascending: false });

  if (error) throw error;

  state.attendanceRecords = data || [];

  setText('attendanceCount', String(state.attendanceRecords.length));
  renderAttendanceCalendar(state.attendanceRecords);

  renderList('attendanceList', state.attendanceRecords, item => `
    <div class="record-item">
      <h3>${escapeHtml(attendanceLabel(item.status))}</h3>
      <p><strong>Data:</strong> ${formatDateBR(item.attendance_date)}</p>
      <p>${formatMultiline(item.notes || 'Sem observação.')}</p>
      <div class="record-meta">Lançado em ${formatDate(item.created_at)}</div>
    </div>
  `);
}

async function saveAttendanceForDate(dateValue) {
  const status = document.getElementById('attendanceStatus')?.value || 'presente';
  const notes = document.getElementById('attendanceNotes')?.value?.trim() || null;

  if (!state.selectedStudentId || !dateValue) return;

  if (status === 'limpar') {
    const { error } = await supabaseClient
      .from('student_attendance')
      .delete()
      .eq('student_id', state.selectedStudentId)
      .eq('attendance_date', dateValue);

    if (error) throw error;

    setHelperMessage('attendanceMessage', 'Lançamento removido com sucesso.');
    await loadAttendanceForSelectedStudent();
    return;
  }

  const payload = {
    student_id: state.selectedStudentId,
    attendance_date: dateValue,
    status,
    notes,
    teacher_id: state.profile.id,
    updated_at: new Date().toISOString()
  };

  const { error } = await supabaseClient
    .from('student_attendance')
    .upsert(payload, { onConflict: 'student_id,attendance_date' });

  if (error) throw error;

  setHelperMessage('attendanceMessage', `Frequência lançada: ${attendanceLabel(status)} em ${formatDateBR(dateValue)}.`);
  await loadAttendanceForSelectedStudent();
}

async function populateDashboard() {
  await fetchStudents();

  const select = document.getElementById('studentSelect');

  if (!select) return;

  if (!state.students.length) {
    select.innerHTML = '<option value="">Nenhum aluno cadastrado</option>';
    return;
  }

  select.innerHTML = state.students
    .map(student => `<option value="${escapeHtml(student.id)}">${escapeHtml(student.full_name)}</option>`)
    .join('');

  state.selectedStudentId = select.value;

  await loadStudentSection(state.selectedStudentId);

  select.addEventListener('change', async (event) => {
    state.selectedStudentId = event.target.value;
    resetPlanEditingState(true);
    await loadStudentSection(state.selectedStudentId);
  });
}

async function loadStudentSection(studentId) {
  const student = state.students.find(s => s.id === studentId);
  state.selectedStudent = student || null;

  setText('studentMeta', student?.schools?.name ? `Escola: ${student.schools.name}` : 'Sem escola vinculada');
  setText('summaryStudent', student?.full_name || '—');
  setText('summarySchool', student?.schools?.name || '—');

  await fetchGuardians(studentId);

  setText('summaryGuardians', String(state.guardians.length));

  renderGuardiansSelect();

  const { plans, materials, progress, announcements, attendance } = await fetchStudentData(studentId);

  setText('plansCount', String(plans.length));
  setText('materialsCount', String(materials.length));
  setText('progressCount', String(progress.length));
  setText('announcementsCount', String(announcements.length));
  setText('attendanceCount', String(attendance.length));

  const latest = [
    plans[0]?.created_at,
    materials[0]?.created_at,
    progress[0]?.created_at,
    announcements[0]?.created_at,
    attendance[0]?.created_at
  ].filter(Boolean).sort().pop();

  setText('summaryLastUpdate', formatDate(latest));

  renderList('plansList', plans, item => `
    <div class="record-item plan-record">
      <h3>${escapeHtml(item.title || 'Plano de estudo')}</h3>

      <p>${formatMultiline(item.description || '')}</p>

      <div class="record-meta">
        ${escapeHtml(item.week_reference || 'Sem período')} • ${escapeHtml(item.status || 'ativo')} • ${formatDate(item.created_at)}
      </div>

      <div class="record-actions" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
        <button
          type="button"
          class="btn btn-secondary small-btn edit-plan-btn"
          data-plan-id="${escapeHtml(item.id)}"
        >
          Editar plano
        </button>

        <button
          type="button"
          class="btn btn-danger small-btn delete-plan-btn"
          data-plan-id="${escapeHtml(item.id)}"
        >
          Excluir plano
        </button>
      </div>
    </div>
  `);

  renderList('materialsList', materials, item => `
    <div class="record-item material-record">
      <h3>${escapeHtml(item.title || 'Material')}</h3>
      <p>${formatMultiline(item.description || '')}</p>
      <div class="record-meta">${escapeHtml(item.category || 'Arquivo')} • ${escapeHtml(item.file_path || '')}</div>
      <div class="record-actions" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
        <button
          type="button"
          class="btn btn-danger small-btn delete-material-btn"
          data-material-id="${escapeHtml(item.id)}"
          data-file-path="${encodeURIComponent(item.file_path || '')}"
        >
          Excluir material
        </button>
      </div>
    </div>
  `);

  renderList('progressList', progress, item => `
    <div class="record-item progress-record">
      <h3>Registro de evolução</h3>

      <p><strong>Resumo:</strong> ${formatMultiline(item.summary || '—')}</p>
      <p><strong>Pontos fortes:</strong> ${formatMultiline(item.strengths || '—')}</p>
      <p><strong>Dificuldades:</strong> ${formatMultiline(item.difficulties || '—')}</p>
      <p><strong>Próximos passos:</strong> ${formatMultiline(item.next_steps || '—')}</p>

      ${item.resultado_semana ? `<p><strong>Resultado da semana:</strong> ${formatMultiline(item.resultado_semana)}</p>` : ''}
      ${item.decisao_pedagogica ? `<p><strong>Decisão pedagógica:</strong> ${formatMultiline(item.decisao_pedagogica)}</p>` : ''}
      ${item.impacto_proximo_plano ? `<p><strong>Impacto no próximo plano:</strong> ${formatMultiline(item.impacto_proximo_plano)}</p>` : ''}
      ${item.recomendacao_proxima_semana ? `<p><strong>Recomendação para a próxima semana:</strong> ${formatMultiline(item.recomendacao_proxima_semana)}</p>` : ''}

      <div class="record-meta">
        ${escapeHtml(item.week_reference || 'Sem período informado')} • ${escapeHtml(item.area || 'Área não informada')} • ${formatDate(item.created_at)}
      </div>

      <div class="record-actions" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
        <button
          type="button"
          class="btn btn-danger small-btn delete-progress-btn"
          data-progress-id="${escapeHtml(item.id)}"
        >
          Excluir evolução
        </button>
      </div>
    </div>
  `);

  renderList('announcementsList', announcements, item => `
    <div class="record-item">
      <h3>${escapeHtml(item.title || 'Comunicado')}</h3>
      <p>${formatMultiline(item.message || '')}</p>
      <div class="record-meta">${formatDate(item.created_at)}</div>
    </div>
  `);

  renderList('attendanceList', attendance, item => `
    <div class="record-item">
      <h3>${escapeHtml(attendanceLabel(item.status))}</h3>
      <p><strong>Data:</strong> ${formatDateBR(item.attendance_date)}</p>
      <p>${formatMultiline(item.notes || 'Sem observação.')}</p>
      <div class="record-meta">${formatDate(item.created_at)}</div>
    </div>
  `);

  await loadAttendanceForSelectedStudent();
}

function setupActionNavigation() {
  const triggers = Array.from(document.querySelectorAll('.action-trigger'));
  const backButtons = Array.from(document.querySelectorAll('.action-back'));

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      openActionSection(trigger.dataset.sectionTarget || 'actionHome');
    });
  });

  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      openActionSection('actionHome');
    });
  });

  const initialHash = window.location.hash ? window.location.hash.replace('#', '') : '';
  openActionSection(initialHash && document.getElementById(initialHash) ? initialHash : 'actionHome');
}

async function initDashboardPage() {
  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (!session?.user) {
    window.location.href = './index.html';
    return;
  }

  state.session = session;

  const profile = await ensureStaffAccess(session.user);

  setText('welcomeName', profile.full_name || profile.role || 'Professor');

  document.getElementById('logoutBtn')?.addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    window.location.href = './index.html';
  });

  setupActionNavigation();
  await populateDashboard();

  document.getElementById('planForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const payload = {
      student_id: state.selectedStudentId,
      teacher_id: state.profile.id,
      title: form.get('title'),
      description: form.get('description'),
      week_reference: form.get('week_reference'),
      status: form.get('status')
    };

    let error = null;

    if (state.editingPlanId) {
      const res = await supabaseClient
        .from('student_plans')
        .update(payload)
        .eq('id', state.editingPlanId)
        .eq('student_id', state.selectedStudentId);

      error = res.error;
    } else {
      const res = await supabaseClient
        .from('student_plans')
        .insert(payload);

      error = res.error;
    }

    setHelperMessage(
      'planMessage',
      error
        ? error.message
        : state.editingPlanId
          ? 'Plano atualizado com sucesso.'
          : 'Plano salvo com sucesso.',
      error ? 'error' : 'success'
    );

    if (!error) {
      e.target.reset();
      resetPlanEditingState(false);
      await loadStudentSection(state.selectedStudentId);
    }
  });

  document.addEventListener('click', async (event) => {
    const editButton = event.target.closest('.edit-plan-btn');

    if (!editButton) return;

    const planId = editButton.dataset.planId;

    if (!planId) return;

    try {
      const { data, error } = await supabaseClient
        .from('student_plans')
        .select('*')
        .eq('id', planId)
        .eq('student_id', state.selectedStudentId)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        throw new Error('Plano não encontrado.');
      }

      const planForm = document.getElementById('planForm');

      if (!planForm) {
        throw new Error('Formulário de plano não encontrado.');
      }

      state.editingPlanId = data.id;

      planForm.elements['title'].value = data.title || '';
      planForm.elements['description'].value = data.description || '';
      planForm.elements['week_reference'].value = data.week_reference || '';
      planForm.elements['status'].value = data.status || 'ativo';

      setPlanSubmitMode();

      setHelperMessage(
        'planMessage',
        'Editando plano selecionado. Faça os ajustes e clique em Atualizar plano.'
      );

      openActionSection('planSection');
    } catch (error) {
      setHelperMessage(
        'planMessage',
        error.message || 'Erro ao carregar plano para edição.',
        'error'
      );
    }
  });

  document.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest('.delete-plan-btn');

    if (!deleteButton) return;

    const planId = deleteButton.dataset.planId;

    if (!planId) return;

    if (!confirm('Tem certeza que deseja excluir este plano? Ele deixará de aparecer para a família.')) {
      return;
    }

    deleteButton.disabled = true;

    const originalText = deleteButton.textContent;

    deleteButton.textContent = 'Excluindo...';

    try {
      const { error } = await supabaseClient
        .from('student_plans')
        .delete()
        .eq('id', planId)
        .eq('student_id', state.selectedStudentId);

      if (error) throw error;

      if (state.editingPlanId === planId) {
        resetPlanEditingState(true);
      }

      setHelperMessage('planMessage', 'Plano excluído com sucesso.');
      await loadStudentSection(state.selectedStudentId);
    } catch (error) {
      setHelperMessage(
        'planMessage',
        error.message || 'Erro ao excluir plano.',
        'error'
      );

      deleteButton.disabled = false;
      deleteButton.textContent = originalText;
    }
  });

  document.getElementById('materialForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const file = form.get('file');

    if (!file || !file.name) {
      setHelperMessage('materialMessage', 'Selecione um arquivo antes de enviar.', 'error');
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;
    const folder = `alunos/${slugify(state.selectedStudent?.full_name || 'aluno')}`;
    const filePath = `${folder}/${fileName}`;

    const uploadRes = await supabaseClient.storage
      .from(config.bucket)
      .upload(filePath, file, { upsert: false });

    if (uploadRes.error) {
      setHelperMessage('materialMessage', uploadRes.error.message, 'error');
      return;
    }

    const payload = {
      student_id: state.selectedStudentId,
      title: form.get('title'),
      description: form.get('description'),
      category: form.get('category'),
      file_path: filePath,
      uploaded_by: state.profile.id
    };

    const { error } = await supabaseClient
      .from('student_materials')
      .insert(payload);

    setHelperMessage(
      'materialMessage',
      error ? error.message : 'Material enviado com sucesso.',
      error ? 'error' : 'success'
    );

    if (!error) {
      e.target.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  document.addEventListener('click', async (event) => {
    const button = event.target.closest('.delete-material-btn');

    if (!button) return;

    if (!confirm('Tem certeza que deseja excluir este material do aluno?')) {
      return;
    }

    const materialId = button.dataset.materialId;
    const filePath = decodeURIComponent(button.dataset.filePath || '');

    button.disabled = true;

    const originalText = button.textContent;

    button.textContent = 'Excluindo...';

    try {
      if (filePath) {
        const storageRes = await supabaseClient.storage
          .from(config.bucket)
          .remove([filePath]);

        if (storageRes.error) throw storageRes.error;
      }

      const { error } = await supabaseClient
        .from('student_materials')
        .delete()
        .eq('id', materialId);

      if (error) throw error;

      setHelperMessage('materialMessage', 'Material excluído com sucesso.');
      await loadStudentSection(state.selectedStudentId);
    } catch (error) {
      setHelperMessage(
        'materialMessage',
        error.message || 'Erro ao excluir material.',
        'error'
      );

      button.disabled = false;
      button.textContent = originalText;
    }
  });

  document.getElementById('progressForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const payload = {
      student_id: state.selectedStudentId,
      teacher_id: state.profile.id,
      summary: form.get('summary'),
      strengths: form.get('strengths'),
      difficulties: form.get('difficulties'),
      next_steps: form.get('next_steps')
    };

    const { error } = await supabaseClient
      .from('student_progress')
      .insert(payload);

    setHelperMessage(
      'progressMessage',
      error ? error.message : 'Evolução salva com sucesso.',
      error ? 'error' : 'success'
    );

    if (!error) {
      e.target.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  document.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest('.delete-progress-btn');

    if (!deleteButton) return;

    const progressId = deleteButton.dataset.progressId;

    if (!progressId) return;

    if (!confirm('Tem certeza que deseja excluir esta evolução? Ela deixará de influenciar os próximos planos semanais.')) {
      return;
    }

    deleteButton.disabled = true;

    const originalText = deleteButton.textContent;

    deleteButton.textContent = 'Excluindo...';

    try {
      const { error } = await supabaseClient
        .from('student_progress')
        .delete()
        .eq('id', progressId)
        .eq('student_id', state.selectedStudentId);

      if (error) throw error;

      setHelperMessage('progressMessage', 'Evolução excluída com sucesso.');

      await loadStudentSection(state.selectedStudentId);
    } catch (error) {
      setHelperMessage(
        'progressMessage',
        error.message || 'Erro ao excluir evolução.',
        'error'
      );

      deleteButton.disabled = false;
      deleteButton.textContent = originalText;
    }
  });

  document.getElementById('announcementForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const payload = {
      student_id: state.selectedStudentId,
      title: form.get('title'),
      message: form.get('message'),
      created_by: state.profile.id
    };

    const { error } = await supabaseClient
      .from('student_announcements')
      .insert(payload);

    setHelperMessage(
      'announcementMessage',
      error ? error.message : 'Comunicado publicado com sucesso.',
      error ? 'error' : 'success'
    );

    if (!error) {
      e.target.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  document.getElementById('messageForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const recipientId = document.getElementById('guardianSelect')?.value;

    if (!recipientId) {
      setHelperMessage('messagePortalStatus', 'Nenhum responsável vinculado a este aluno.', 'error');
      return;
    }

    const payload = {
      student_id: state.selectedStudentId,
      sender_profile_id: state.profile.id,
      recipient_profile_id: recipientId,
      message: form.get('message')
    };

    const { error } = await supabaseClient
      .from('student_messages')
      .insert(payload);

    setHelperMessage(
      'messagePortalStatus',
      error ? error.message : 'Recado enviado com sucesso.',
      error ? 'error' : 'success'
    );

    if (!error) {
      e.target.reset();
    }
  });

  document.getElementById('attendanceScheduleForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const weekdays = Array.from(e.target.querySelectorAll('input[name="weekday"]:checked'))
      .map(input => Number(input.value));

    try {
      const { error: deleteError } = await supabaseClient
        .from('student_attendance_schedule')
        .delete()
        .eq('student_id', state.selectedStudentId);

      if (deleteError) throw deleteError;

      if (weekdays.length) {
        const rows = weekdays.map(weekday => ({
          student_id: state.selectedStudentId,
          weekday,
          active: true,
          created_by: state.profile.id
        }));

        const { error: insertError } = await supabaseClient
          .from('student_attendance_schedule')
          .insert(rows);

        if (insertError) throw insertError;
      }

      setHelperMessage('attendanceScheduleMessage', 'Dias de atendimento salvos com sucesso.');
      await loadAttendanceForSelectedStudent();
    } catch (error) {
      setHelperMessage(
        'attendanceScheduleMessage',
        error.message || 'Erro ao salvar os dias de atendimento.',
        'error'
      );
    }
  });

  document.getElementById('attendanceMonth')?.addEventListener('change', async (event) => {
    if (!event.target.value) return;

    const [year, month] = event.target.value.split('-').map(Number);

    state.attendanceMonth = new Date(year, month - 1, 1);

    await loadAttendanceForSelectedStudent();
  });

  document.getElementById('attendanceCalendar')?.addEventListener('click', async (event) => {
    const dayButton = event.target.closest('.calendar-day[data-date]');

    if (!dayButton) return;

    try {
      await saveAttendanceForDate(dayButton.dataset.date);
    } catch (error) {
      setHelperMessage(
        'attendanceMessage',
        error.message || 'Erro ao lançar frequência.',
        'error'
      );
    }
  });
}

if (page === 'dashboard-professor') {
  initDashboardPage().catch((error) => {
    console.error(error);

    setText('welcomeName', 'Erro');

    const helper = document.createElement('p');
    helper.className = 'helper error';
    helper.textContent = error.message || 'Erro ao carregar o painel.';

    document.querySelector('.dashboard-wrap')?.prepend(helper);
  });
}
