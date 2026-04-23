const supabaseUrl = window.INTEGRO_SUPABASE?.url;
const supabaseKey = window.INTEGRO_SUPABASE?.anonKey;
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

let sessionUser = null;
let profile = null;
let school = null;
let teachers = [];
let students = [];

const $ = (id) => document.getElementById(id);

function showStatus(id, type, message) {
  const el = $(id);
  el.className = `status show ${type}`;
  el.textContent = message;
}

function clearStatus(id) {
  const el = $(id);
  el.className = 'status';
  el.textContent = '';
}

function optionHtml(items, labelKey='full_name', valueKey='id', placeholder='Selecione') {
  const options = [`<option value="">${placeholder}</option>`];
  items.forEach(item => options.push(`<option value="${item[valueKey]}">${item[labelKey]}</option>`));
  return options.join('');
}

async function loadSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) {
    window.location.href = './index.html';
    return false;
  }
  sessionUser = data.session.user;
  $('userBadge').textContent = sessionUser.email;
  return true;
}

async function loadProfile() {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', sessionUser.id)
    .single();

  if (error || !data) {
    alert('Não foi possível carregar o perfil do usuário.');
    return false;
  }

  profile = data;
  if (!['integro_admin', 'diretor', 'coordenacao'].includes(profile.role)) {
    alert('Seu perfil não tem permissão para usar a gestão escolar.');
    window.location.href = './dashboard.html';
    return false;
  }
  return true;
}

async function loadSchool() {
  if (!profile.school_id) {
    $('schoolName').textContent = 'Sem escola definida';
    $('teacherSchool').value = 'Sem escola definida';
    return;
  }

  const { data, error } = await supabase
    .from('schools')
    .select('id, name, slug')
    .eq('id', profile.school_id)
    .single();

  if (!error && data) {
    school = data;
    $('schoolName').textContent = data.name;
    $('teacherSchool').value = data.name;
  }
}

async function loadTeachers() {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name')
    .eq('role', 'professor')
    .eq('school_id', profile.school_id)
    .order('full_name');

  teachers = error ? [] : data || [];
  $('teachersCount').textContent = String(teachers.length);
  $('teachersTable').innerHTML = teachers.length
    ? teachers.map(t => `<tr><td>${t.full_name ?? '-'}</td><td class="small">Professor cadastrado</td></tr>`).join('')
    : `<tr><td colspan="2" class="empty">Nenhum professor cadastrado.</td></tr>`;
  $('linkTeacher').innerHTML = optionHtml(teachers, 'full_name', 'id', 'Selecione um professor');
}

async function loadStudents() {
  const { data, error } = await supabase
    .from('students')
    .select('id, full_name, active')
    .eq('school_id', profile.school_id)
    .order('full_name');

  students = error ? [] : data || [];
  $('studentsCount').textContent = String(students.length);
  $('studentsTable').innerHTML = students.length
    ? students.map(s => `<tr><td>${s.full_name}</td><td>${s.active ? 'Ativo' : 'Inativo'}</td></tr>`).join('')
    : `<tr><td colspan="2" class="empty">Nenhum aluno cadastrado.</td></tr>`;
  $('linkStudent').innerHTML = optionHtml(students, 'full_name', 'id', 'Selecione um aluno');
}

async function loadLinks() {
  const { data, error } = await supabase
    .from('student_teachers')
    .select('student_id, teacher_profile_id')
    .order('id', { ascending: false });

  if (error) {
    $('linksTable').innerHTML = `<tr><td colspan="2" class="empty">Não foi possível carregar os vínculos.</td></tr>`;
    return;
  }

  const byTeacher = new Map(teachers.map(t => [t.id, t.full_name]));
  const byStudent = new Map(students.map(s => [s.id, s.full_name]));
  const filtered = (data || []).filter(v => byTeacher.has(v.teacher_profile_id) && byStudent.has(v.student_id));

  $('linksTable').innerHTML = filtered.length
    ? filtered.map(v => `<tr><td>${byTeacher.get(v.teacher_profile_id)}</td><td>${byStudent.get(v.student_id)}</td></tr>`).join('')
    : `<tr><td colspan="2" class="empty">Nenhum vínculo criado.</td></tr>`;
}

async function createTeacher(payload) {
  const { data: sessionData } = await supabase.auth.getSession();
  const token = sessionData?.session?.access_token;
  const url = `${window.INTEGRO_SUPABASE.url}/functions/v1/create-teacher-user`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'apikey': window.INTEGRO_SUPABASE.anonKey
    },
    body: JSON.stringify(payload)
  });

  const json = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(json.error || 'Não foi possível cadastrar o professor.');
  }
  return json;
}

async function onTeacherSubmit(e) {
  e.preventDefault();
  clearStatus('teacherStatus');
  try {
    const payload = {
      full_name: $('teacherName').value.trim(),
      email: $('teacherEmail').value.trim(),
      password: $('teacherPassword').value.trim(),
      school_id: profile.school_id,
    };
    await createTeacher(payload);
    showStatus('teacherStatus', 'ok', 'Professor cadastrado com sucesso.');
    $('teacherForm').reset();
    $('teacherSchool').value = school?.name || '';
    await loadTeachers();
    await loadLinks();
  } catch (err) {
    showStatus('teacherStatus', 'error', err.message);
  }
}

async function onStudentSubmit(e) {
  e.preventDefault();
  clearStatus('studentStatus');
  try {
    const payload = {
      full_name: $('studentName').value.trim(),
      school_id: profile.school_id,
      active: $('studentActive').value === 'true',
      notes: $('studentNotes').value.trim() || null,
    };

    const { error } = await supabase.from('students').insert(payload);
    if (error) throw error;

    showStatus('studentStatus', 'ok', 'Aluno cadastrado com sucesso.');
    $('studentForm').reset();
    await loadStudents();
    await loadLinks();
  } catch (err) {
    showStatus('studentStatus', 'error', err.message || 'Não foi possível cadastrar o aluno.');
  }
}

async function onLinkSubmit(e) {
  e.preventDefault();
  clearStatus('linkStatus');
  try {
    const teacher_profile_id = $('linkTeacher').value;
    const student_id = $('linkStudent').value;

    if (!teacher_profile_id || !student_id) {
      showStatus('linkStatus', 'warn', 'Escolha um professor e um aluno.');
      return;
    }

    const { error } = await supabase
      .from('student_teachers')
      .insert({ teacher_profile_id, student_id });

    if (error) throw error;

    showStatus('linkStatus', 'ok', 'Vínculo criado com sucesso.');
    $('linkForm').reset();
    await loadLinks();
  } catch (err) {
    showStatus('linkStatus', 'error', err.message || 'Não foi possível criar o vínculo.');
  }
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = './index.html';
}

async function init() {
  const ok = await loadSession();
  if (!ok) return;
  const okProfile = await loadProfile();
  if (!okProfile) return;
  await loadSchool();
  await loadTeachers();
  await loadStudents();
  await loadLinks();

  $('teacherForm').addEventListener('submit', onTeacherSubmit);
  $('studentForm').addEventListener('submit', onStudentSubmit);
  $('linkForm').addEventListener('submit', onLinkSubmit);
  $('logoutBtn').addEventListener('click', logout);
}

window.addEventListener('load', init);
