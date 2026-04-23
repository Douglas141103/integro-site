import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const config = window.INTEGRO_SUPABASE || {};
const isConfigured =
  typeof config.url === 'string' &&
  config.url.startsWith('https://') &&
  typeof config.anonKey === 'string' &&
  !config.anonKey.includes('COLE_AQUI');

const feedbackEl = document.getElementById('auth-feedback') || document.getElementById('dashboard-feedback');
const configWarningEl = document.getElementById('config-warning');

function setFeedback(message = '', type = '') {
  if (!feedbackEl) return;
  feedbackEl.textContent = message;
  feedbackEl.className = `feedback ${type}`.trim();
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatDate(value) {
  if (!value) return '—';
  try {
    return new Date(value).toLocaleDateString('pt-BR');
  } catch {
    return value;
  }
}

function translateRole(role) {
  const map = {
    integro_admin: 'Administrador INTEGRO',
    responsavel: 'Responsável',
    professor: 'Professor',
    coordenacao: 'Coordenação',
    diretor: 'Direção'
  };
  return map[role] || role || 'Não definido';
}

if (!isConfigured) {
  configWarningEl?.classList.remove('hidden');
  setFeedback('Configure primeiro o arquivo portal/config.js para ativar o portal da família.', 'error');
}

const supabase = isConfigured
  ? createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;

const page = window.location.pathname.split('/').pop() || 'index.html';
const state = {
  profile: null,
  session: null,
  students: [],
  selectedStudent: null,
  teacherRecipientId: null,
  schoolMap: new Map()
};

async function requireSession() {
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  const session = data.session;
  if (!session) {
    window.location.href = './index.html';
    return null;
  }
  state.session = session;
  return session;
}

async function loadProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', userId)
    .single();

  if (error) throw error;
  state.profile = data;
  return data;
}

async function loadSchoolsByIds(ids) {
  if (!ids.length) return new Map();
  const { data, error } = await supabase
    .from('schools')
    .select('id, name, slug')
    .in('id', ids);

  if (error) throw error;
  const map = new Map((data || []).map((item) => [item.id, item]));
  state.schoolMap = map;
  return map;
}

async function loadStudentsForCurrentProfile(profile) {
  let studentIds = [];

  if (profile.role === 'responsavel') {
    const { data, error } = await supabase
      .from('student_guardians')
      .select('student_id')
      .eq('guardian_profile_id', profile.id);

    if (error) throw error;
    studentIds = (data || []).map((row) => row.student_id);
  } else if (profile.role === 'integro_admin') {
    const { data, error } = await supabase
      .from('students')
      .select('id')
      .order('created_at', { ascending: false });

    if (error) throw error;
    studentIds = (data || []).map((row) => row.id);
  } else if (profile.role === 'professor') {
    const { data, error } = await supabase
      .from('student_teachers')
      .select('student_id')
      .eq('teacher_profile_id', profile.id);

    if (error) throw error;
    studentIds = (data || []).map((row) => row.student_id);
  } else if (profile.school_id) {
    const { data, error } = await supabase
      .from('students')
      .select('id')
      .eq('school_id', profile.school_id)
      .order('full_name', { ascending: true });

    if (error) throw error;
    studentIds = (data || []).map((row) => row.id);
  }

  if (!studentIds.length) return [];

  const { data: students, error: studentsError } = await supabase
    .from('students')
    .select('id, full_name, school_id, active, notes, created_at')
    .in('id', studentIds)
    .order('full_name', { ascending: true });

  if (studentsError) throw studentsError;

  const schoolIds = [...new Set((students || []).map((item) => item.school_id).filter(Boolean))];
  await loadSchoolsByIds(schoolIds);

  return students || [];
}

async function resolveTeacherRecipientId(studentId) {
  const { data: links } = await supabase
    .from('student_teachers')
    .select('teacher_profile_id')
    .eq('student_id', studentId)
    .limit(1);

  if (links?.length) return links[0].teacher_profile_id;

  const { data: plan } = await supabase
    .from('student_plans')
    .select('teacher_id')
    .eq('student_id', studentId)
    .not('teacher_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1);

  if (plan?.length && plan[0].teacher_id) return plan[0].teacher_id;

  const { data: progress } = await supabase
    .from('student_progress')
    .select('teacher_id')
    .eq('student_id', studentId)
    .not('teacher_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1);

  if (progress?.length && progress[0].teacher_id) return progress[0].teacher_id;

  return null;
}

async function createSignedUrl(filePath) {
  const { data, error } = await supabase.storage
    .from(config.bucket || 'partner-materials')
    .createSignedUrl(filePath, 60 * 60);

  if (error) throw error;
  return data.signedUrl;
}

async function openMaterial(filePath) {
  try {
    setFeedback('Gerando link seguro do arquivo...', 'success');
    const signedUrl = await createSignedUrl(filePath);
    window.open(signedUrl, '_blank', 'noopener');
    setFeedback('');
  } catch (error) {
    setFeedback(error.message || 'Não foi possível abrir o material.', 'error');
  }
}

async function loadPlans(studentId) {
  const { data, error } = await supabase
    .from('student_plans')
    .select('id, title, description, week_reference, status, created_at')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function loadStudentMaterials(studentId) {
  const { data, error } = await supabase
    .from('student_materials')
    .select('id, title, description, category, file_path, created_at')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function loadProgress(studentId) {
  const { data, error } = await supabase
    .from('student_progress')
    .select('id, summary, strengths, difficulties, next_steps, created_at')
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function loadAnnouncements(studentId) {
  const { data, error } = await supabase
    .from('student_announcements')
    .select('id, title, message, created_at')
    .or(`student_id.is.null,student_id.eq.${studentId}`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

async function loadMessages(studentId, profileId) {
  const { data, error } = await supabase
    .from('student_messages')
    .select('id, sender_profile_id, recipient_profile_id, message, read_at, created_at')
    .eq('student_id', studentId)
    .or(`sender_profile_id.eq.${profileId},recipient_profile_id.eq.${profileId}`)
    .order('created_at', { ascending: true });

  if (error) throw error;

  const messages = data || [];
  const profileIds = [...new Set(messages.flatMap((item) => [item.sender_profile_id, item.recipient_profile_id]).filter(Boolean))];

  let profileMap = new Map();
  if (profileIds.length) {
    const { data: profilesData, error: profilesError } = await supabase
      .from('profiles')
      .select('id, full_name, role')
      .in('id', profileIds);

    if (profilesError) throw profilesError;
    profileMap = new Map((profilesData || []).map((item) => [item.id, item]));
  }

  return messages.map((item) => ({
    ...item,
    sender: profileMap.get(item.sender_profile_id) || null,
    recipient: profileMap.get(item.recipient_profile_id) || null
  }));
}

function renderPlans(items) {
  const list = document.getElementById('plans-list');
  if (!list) return;

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Ainda não há um plano de estudos lançado para este aluno.</div>';
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="item-card">
      <div class="badge">${escapeHtml(item.week_reference || 'Planejamento')}</div>
      <h4>${escapeHtml(item.title)}</h4>
      <div class="item-meta">Status: ${escapeHtml(item.status || 'ativo')} • Atualizado em ${formatDate(item.created_at)}</div>
      <p>${escapeHtml(item.description || 'Sem descrição informada.')}</p>
    </article>
  `).join('');
}

function renderMaterials(items) {
  const list = document.getElementById('materials-list');
  const count = document.getElementById('materials-count');
  if (!list || !count) return;

  count.textContent = String(items.length);

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Ainda não há materiais individualizados para este aluno.</div>';
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="item-card">
      <div class="badge">${escapeHtml(item.category || 'Arquivo')}</div>
      <h4>${escapeHtml(item.title)}</h4>
      <div class="item-meta">Atualizado em ${formatDate(item.created_at)}</div>
      <p>${escapeHtml(item.description || 'Material disponível para consulta e download.')}</p>
      <button class="btn btn-primary open-material" type="button" data-file="${escapeHtml(item.file_path)}">Abrir arquivo</button>
    </article>
  `).join('');

  list.querySelectorAll('.open-material').forEach((button) => {
    button.addEventListener('click', () => openMaterial(button.dataset.file));
  });
}

function renderProgress(items) {
  const list = document.getElementById('progress-list');
  if (!list) return;

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Ainda não há registros de evolução para este aluno.</div>';
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="item-card">
      <div class="badge">${formatDate(item.created_at)}</div>
      <h4>Evolução registrada</h4>
      <p><strong>Resumo:</strong> ${escapeHtml(item.summary || '—')}</p>
      <p><strong>Pontos fortes:</strong> ${escapeHtml(item.strengths || '—')}</p>
      <p><strong>Dificuldades:</strong> ${escapeHtml(item.difficulties || '—')}</p>
      <p><strong>Próximos passos:</strong> ${escapeHtml(item.next_steps || '—')}</p>
    </article>
  `).join('');
}

function renderAnnouncements(items) {
  const list = document.getElementById('announcements-list');
  const count = document.getElementById('announcements-count');
  if (!list || !count) return;

  count.textContent = String(items.length);

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Nenhum comunicado disponível no momento.</div>';
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="item-card">
      <div class="badge">Comunicado</div>
      <h4>${escapeHtml(item.title)}</h4>
      <div class="item-meta">Publicado em ${formatDate(item.created_at)}</div>
      <p>${escapeHtml(item.message)}</p>
    </article>
  `).join('');
}

function renderMessages(items, currentProfileId) {
  const list = document.getElementById('messages-list');
  if (!list) return;

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Ainda não há recados trocados com a equipe.</div>';
    return;
  }

  list.innerHTML = items.map((item) => {
    const sent = item.sender_profile_id === currentProfileId;
    const author = sent ? 'Você' : (item.sender?.full_name || 'Equipe INTEGRO');
    return `
      <div class="message-row ${sent ? 'sent' : 'received'}">
        <article class="item-card">
          <div class="message-author">${escapeHtml(author)}</div>
          <div class="item-meta">${formatDate(item.created_at)}</div>
          <div class="message-body">${escapeHtml(item.message)}</div>
        </article>
      </div>
    `;
  }).join('');
}

function renderStudentHeader(student) {
  const school = state.schoolMap.get(student.school_id);
  document.getElementById('student-name').textContent = student.full_name || 'Estudante';
  document.getElementById('welcome-copy').textContent =
    `${school?.name || 'Escola não informada'} • ${student.active ? 'Acompanhamento ativo' : 'Acompanhamento inativo'}`;
}

function renderStudentSelector(students) {
  const select = document.getElementById('student-selector');
  if (!select) return;

  select.innerHTML = students.map((student) => `
    <option value="${escapeHtml(student.id)}">${escapeHtml(student.full_name)}</option>
  `).join('');

  if (students.length <= 1) {
    select.disabled = true;
  }

  select.addEventListener('change', async () => {
    const next = state.students.find((item) => item.id === select.value);
    if (next) {
      state.selectedStudent = next;
      await refreshStudentView();
    }
  });
}

async function refreshStudentView() {
  if (!state.selectedStudent) return;
  renderStudentHeader(state.selectedStudent);
  state.teacherRecipientId = await resolveTeacherRecipientId(state.selectedStudent.id);

  const [plans, materials, progress, announcements, messages] = await Promise.all([
    loadPlans(state.selectedStudent.id),
    loadStudentMaterials(state.selectedStudent.id),
    loadProgress(state.selectedStudent.id),
    loadAnnouncements(state.selectedStudent.id),
    loadMessages(state.selectedStudent.id, state.profile.id)
  ]);

  renderPlans(plans);
  renderMaterials(materials);
  renderProgress(progress);
  renderAnnouncements(announcements);
  renderMessages(messages, state.profile.id);
}

async function sendMessage(event) {
  event.preventDefault();
  const textarea = document.getElementById('message-text');
  const text = textarea.value.trim();

  if (!text) {
    setFeedback('Digite a mensagem antes de enviar.', 'error');
    return;
  }

  try {
    setFeedback('Enviando recado...', 'success');
    const recipientId = state.teacherRecipientId;

    const payload = {
      student_id: state.selectedStudent.id,
      sender_profile_id: state.profile.id,
      recipient_profile_id: recipientId || null,
      message: text
    };

    const { error } = await supabase.from('student_messages').insert(payload);
    if (error) throw error;

    textarea.value = '';
    const messages = await loadMessages(state.selectedStudent.id, state.profile.id);
    renderMessages(messages, state.profile.id);

    if (recipientId) {
      setFeedback('Recado enviado com sucesso.', 'success');
    } else {
      setFeedback('Recado salvo, mas ainda não há professor vinculado a este aluno.', 'success');
    }
  } catch (error) {
    console.error(error);
    setFeedback(error.message || 'Não foi possível enviar o recado.', 'error');
  }
}

async function handleLoginPage() {
  const form = document.getElementById('login-form');
  const forgotButton = document.getElementById('forgot-password');
  const loginButton = document.getElementById('login-button');
  if (!form || !supabase) return;

  const { data } = await supabase.auth.getSession();
  if (data.session) {
    window.location.href = './dashboard.html';
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setFeedback('Entrando...', 'success');
    loginButton.disabled = true;

    const email = form.email.value.trim();
    const password = form.password.value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    loginButton.disabled = false;

    if (error) {
      setFeedback(error.message || 'Falha ao entrar.', 'error');
      return;
    }

    setFeedback('Login realizado. Redirecionando...', 'success');
    window.location.href = './dashboard.html';
  });

  forgotButton?.addEventListener('click', async () => {
    const email = form.email.value.trim();
    if (!email) {
      setFeedback('Digite o e-mail primeiro para receber a redefinição de senha.', 'error');
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${config.siteUrl || window.location.origin}/portal-familia/index.html`
    });

    if (error) {
      setFeedback(error.message || 'Não foi possível enviar o e-mail.', 'error');
      return;
    }

    setFeedback('Link de redefinição enviado. Verifique seu e-mail.', 'success');
  });
}

async function handleDashboardPage() {
  if (!supabase) return;

  document.getElementById('logout-button')?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = './index.html';
  });

  document.getElementById('message-form')?.addEventListener('submit', sendMessage);

  try {
    const session = await requireSession();
    if (!session) return;

    const profile = await loadProfile(session.user.id);
    document.getElementById('user-chip').textContent = profile.full_name || session.user.email;
    document.getElementById('profile-role').textContent = translateRole(profile.role);

    if (!['responsavel', 'integro_admin', 'professor', 'coordenacao', 'diretor'].includes(profile.role)) {
      throw new Error('Este usuário não está habilitado para o portal da família.');
    }

    state.students = await loadStudentsForCurrentProfile(profile);
    if (!state.students.length) {
      throw new Error('Nenhum aluno vinculado a este usuário no momento.');
    }

    state.selectedStudent = state.students[0];
    renderStudentSelector(state.students);
    await refreshStudentView();
    setFeedback('');
  } catch (error) {
    console.error(error);
    setFeedback(error.message || 'Não foi possível carregar a área da família.', 'error');
  }
}

if (page === 'index.html' || page === '') {
  handleLoginPage();
}

if (page === 'dashboard.html') {
  handleDashboardPage();
}
