
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
};

const isStaff = (role) => ['integro_admin', 'diretor', 'coordenacao', 'professor'].includes(role);

function slugify(text = '') {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  return date.toLocaleString('pt-BR');
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderList(containerId, items, mapper) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!items || !items.length) {
    container.innerHTML = '<div class="empty">Nenhum item encontrado.</div>';
    return;
  }
  container.innerHTML = items.map(mapper).join('');
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

async function initLoginPage() {
  const loginForm = document.getElementById('loginForm');
  const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
  const authMessage = document.getElementById('authMessage');

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session?.user) {
    try {
      await ensureStaffAccess(session.user);
      window.location.href = './dashboard.html';
      return;
    } catch (e) {
      await supabaseClient.auth.signOut();
    }
  }

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    authMessage.textContent = 'Entrando...';
    authMessage.className = 'helper';
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      authMessage.textContent = error.message;
      authMessage.className = 'helper error';
      return;
    }

    try {
      await ensureStaffAccess(data.user);
      authMessage.textContent = 'Acesso liberado. Redirecionando...';
      authMessage.className = 'helper success';
      window.location.href = './dashboard.html';
    } catch (e) {
      authMessage.textContent = e.message;
      authMessage.className = 'helper error';
    }
  });

  forgotPasswordBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    if (!email) {
      authMessage.textContent = 'Digite o e-mail para enviar a recuperação de senha.';
      authMessage.className = 'helper error';
      return;
    }
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: `${config.siteUrl}/portal-professor/index.html`
    });
    if (error) {
      authMessage.textContent = error.message;
      authMessage.className = 'helper error';
      return;
    }
    authMessage.textContent = 'E-mail de recuperação enviado.';
    authMessage.className = 'helper success';
  });
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
  const [plansRes, materialsRes, progressRes, announcementsRes] = await Promise.all([
    supabaseClient.from('student_plans').select('*').eq('student_id', studentId).order('created_at', { ascending: false }),
    supabaseClient.from('student_materials').select('*').eq('student_id', studentId).order('created_at', { ascending: false }),
    supabaseClient.from('student_progress').select('*').eq('student_id', studentId).order('created_at', { ascending: false }),
    supabaseClient.from('student_announcements').select('*').eq('student_id', studentId).order('created_at', { ascending: false }),
  ]);

  [plansRes, materialsRes, progressRes, announcementsRes].forEach((res) => { if (res.error) throw res.error; });

  return {
    plans: plansRes.data || [],
    materials: materialsRes.data || [],
    progress: progressRes.data || [],
    announcements: announcementsRes.data || [],
  };
}

function renderGuardiansSelect() {
  const select = document.getElementById('guardianSelect');
  if (!select) return;
  if (!state.guardians.length) {
    select.innerHTML = '<option value="">Nenhum responsável vinculado</option>';
    return;
  }
  select.innerHTML = state.guardians.map(g => `<option value="${g.id}">${g.full_name || g.id}</option>`).join('');
}

async function populateDashboard() {
  await fetchStudents();
  const select = document.getElementById('studentSelect');
  if (!select) return;

  if (!state.students.length) {
    select.innerHTML = '<option value="">Nenhum aluno cadastrado</option>';
    return;
  }

  select.innerHTML = state.students.map(student => `<option value="${student.id}">${student.full_name}</option>`).join('');
  state.selectedStudentId = select.value;
  await loadStudentSection(state.selectedStudentId);

  select.addEventListener('change', async (event) => {
    state.selectedStudentId = event.target.value;
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

  const { plans, materials, progress, announcements } = await fetchStudentData(studentId);
  setText('plansCount', String(plans.length));
  setText('materialsCount', String(materials.length));
  setText('progressCount', String(progress.length));
  setText('announcementsCount', String(announcements.length));

  const latest = [plans[0]?.created_at, materials[0]?.created_at, progress[0]?.created_at, announcements[0]?.created_at]
    .filter(Boolean)
    .sort()
    .pop();
  setText('summaryLastUpdate', formatDate(latest));

  renderList('plansList', plans, item => `
    <div class="record-item">
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
      <div class="record-meta">${item.week_reference || 'Sem período'} • ${item.status || 'ativo'} • ${formatDate(item.created_at)}</div>
    </div>
  `);

  renderList('materialsList', materials, item => `
    <div class="record-item">
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
      <div class="record-meta">${item.category || 'Arquivo'} • ${item.file_path}</div>
    </div>
  `);

  renderList('progressList', progress, item => `
    <div class="record-item">
      <h3>Registro de evolução</h3>
      <p><strong>Resumo:</strong> ${item.summary || '—'}</p>
      <p><strong>Pontos fortes:</strong> ${item.strengths || '—'}</p>
      <p><strong>Dificuldades:</strong> ${item.difficulties || '—'}</p>
      <p><strong>Próximos passos:</strong> ${item.next_steps || '—'}</p>
      <div class="record-meta">${formatDate(item.created_at)}</div>
    </div>
  `);

  renderList('announcementsList', announcements, item => `
    <div class="record-item">
      <h3>${item.title}</h3>
      <p>${item.message}</p>
      <div class="record-meta">${formatDate(item.created_at)}</div>
    </div>
  `);
}

async function initDashboardPage() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session?.user) {
    window.location.href = './index.html';
    return;
  }

  state.session = session;
  const profile = await ensureStaffAccess(session.user);
  setText('welcomeName', profile.full_name || profile.role || 'Professor');

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    window.location.href = './index.html';
  });

  await populateDashboard();

  const planForm = document.getElementById('planForm');
  const materialForm = document.getElementById('materialForm');
  const progressForm = document.getElementById('progressForm');
  const announcementForm = document.getElementById('announcementForm');
  const messageForm = document.getElementById('messageForm');

  planForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(planForm);
    const payload = {
      student_id: state.selectedStudentId,
      teacher_id: state.profile.id,
      title: form.get('title'),
      description: form.get('description'),
      week_reference: form.get('week_reference'),
      status: form.get('status'),
    };
    const { error } = await supabaseClient.from('student_plans').insert(payload);
    setText('planMessage', error ? error.message : 'Plano salvo com sucesso.');
    document.getElementById('planMessage').className = error ? 'helper error' : 'helper success';
    if (!error) {
      planForm.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  materialForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(materialForm);
    const file = form.get('file');
    const fileName = `${Date.now()}-${file.name}`;
    const folder = `alunos/${slugify(state.selectedStudent?.full_name || 'aluno')}`;
    const filePath = `${folder}/${fileName}`;

    const uploadRes = await supabaseClient.storage
      .from(config.bucket)
      .upload(filePath, file, { upsert: false });

    if (uploadRes.error) {
      setText('materialMessage', uploadRes.error.message);
      document.getElementById('materialMessage').className = 'helper error';
      return;
    }

    const payload = {
      student_id: state.selectedStudentId,
      title: form.get('title'),
      description: form.get('description'),
      category: form.get('category'),
      file_path: filePath,
      uploaded_by: state.profile.id,
    };

    const { error } = await supabaseClient.from('student_materials').insert(payload);
    setText('materialMessage', error ? error.message : 'Material enviado com sucesso.');
    document.getElementById('materialMessage').className = error ? 'helper error' : 'helper success';
    if (!error) {
      materialForm.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  progressForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(progressForm);
    const payload = {
      student_id: state.selectedStudentId,
      teacher_id: state.profile.id,
      summary: form.get('summary'),
      strengths: form.get('strengths'),
      difficulties: form.get('difficulties'),
      next_steps: form.get('next_steps'),
    };
    const { error } = await supabaseClient.from('student_progress').insert(payload);
    setText('progressMessage', error ? error.message : 'Evolução salva com sucesso.');
    document.getElementById('progressMessage').className = error ? 'helper error' : 'helper success';
    if (!error) {
      progressForm.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  announcementForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(announcementForm);
    const payload = {
      student_id: state.selectedStudentId,
      title: form.get('title'),
      message: form.get('message'),
      created_by: state.profile.id,
    };
    const { error } = await supabaseClient.from('student_announcements').insert(payload);
    setText('announcementMessage', error ? error.message : 'Comunicado publicado com sucesso.');
    document.getElementById('announcementMessage').className = error ? 'helper error' : 'helper success';
    if (!error) {
      announcementForm.reset();
      await loadStudentSection(state.selectedStudentId);
    }
  });

  messageForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(messageForm);
    const recipientId = document.getElementById('guardianSelect').value;
    if (!recipientId) {
      setText('messagePortalStatus', 'Nenhum responsável vinculado a este aluno.');
      document.getElementById('messagePortalStatus').className = 'helper error';
      return;
    }
    const payload = {
      student_id: state.selectedStudentId,
      sender_profile_id: state.profile.id,
      recipient_profile_id: recipientId,
      message: form.get('message'),
    };
    const { error } = await supabaseClient.from('student_messages').insert(payload);
    setText('messagePortalStatus', error ? error.message : 'Recado enviado com sucesso.');
    document.getElementById('messagePortalStatus').className = error ? 'helper error' : 'helper success';
    if (!error) messageForm.reset();
  });
}

if (page === 'login-professor') {
  initLoginPage().catch(console.error);
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
