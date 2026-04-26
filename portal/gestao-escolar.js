(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  function $(id) { return document.getElementById(id); }
  function text(id, value) { const el = $(id); if (el) el.textContent = value; }
  function value(id, value) { const el = $(id); if (el) el.value = value; }
  function html(id, value) { const el = $(id); if (el) el.innerHTML = value; }
  function status(id, type, message) {
    const el = $(id);
    if (!el) return;
    el.className = 'status show ' + type;
    el.textContent = message;
  }
  function clearStatus(id) {
    const el = $(id);
    if (!el) return;
    el.className = 'status';
    el.textContent = '';
  }
  function safe(v) {
    return (v ?? '').toString()
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
  function onlyDigits(v) {
    return (v || '').toString().replace(/\D/g, '');
  }
  function formatDateBR(v) {
    if (!v) return '';
    const parts = v.split('-');
    if (parts.length !== 3) return v;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  function optionList(items, labelKey, valueKey, placeholder) {
    return [`<option value="">${placeholder}</option>`].concat(
      (items || []).map((item) => `<option value="${safe(item[valueKey])}">${safe(item[labelKey])}</option>`)
    ).join('');
  }

  if (!cfg || !cfg.url || !cfg.anonKey) {
    console.error('Configuração INTEGRO_SUPABASE não encontrada em config.js.');
    text('userBadge', 'Erro config.js');
    text('schoolName', 'Erro config.js');
    return;
  }

  if (!supabaseGlobal || !supabaseGlobal.createClient) {
    console.error('Biblioteca Supabase não carregou.');
    text('userBadge', 'Erro Supabase');
    text('schoolName', 'Erro Supabase');
    return;
  }

  const client = supabaseGlobal.createClient(cfg.url, cfg.anonKey);

  let user = null;
  let profile = null;
  let school = null;
  let teachers = [];
  let students = [];

  async function loadSession() {
    text('userBadge', 'Carregando...');
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw new Error('Erro ao carregar sessão: ' + sessionError.message);

    if (!sessionData.session) {
      window.location.href = './index.html';
      return false;
    }

    // Confirma o usuário atual pelo token, evitando sessão antiga ou incompleta.
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData.user) {
      await client.auth.signOut();
      window.location.href = './index.html';
      return false;
    }

    user = userData.user;
    return true;
  }

  async function loadProfile() {
    if (!user || !user.id) throw new Error('Usuário autenticado sem ID. Faça login novamente.');

    // Não usa .single() para evitar o erro "Cannot coerce the result to a single JSON object".
    // Busca pelo UID do Auth e usa o primeiro resultado encontrado.
    const { data, error } = await client
      .from('profiles')
      .select('id, full_name, role, school_id')
      .eq('id', user.id)
      .limit(1);

    if (error) throw new Error('Erro ao carregar profile: ' + error.message);
    if (!data || data.length === 0) {
      throw new Error('Perfil não encontrado em profiles para o usuário logado. Crie o perfil com o mesmo UID do Authentication.');
    }

    profile = data[0];
    text('userBadge', profile.full_name || user.email || 'Usuário');

    if (!['integro_admin', 'diretor', 'coordenacao'].includes(profile.role)) {
      alert('Este usuário não tem permissão para usar a Gestão Escolar. Entre com administrador, direção ou coordenação.');
      window.location.href = './dashboard.html';
      return false;
    }
    return true;
  }

  async function loadSchool() {
    if (!profile.school_id) {
      text('schoolName', 'Sem escola vinculada');
      value('teacherSchool', 'Sem escola vinculada');
      return;
    }

    const { data, error } = await client
      .from('schools')
      .select('id, name, slug')
      .eq('id', profile.school_id)
      .limit(1);

    if (error) throw new Error('Erro ao carregar escola: ' + error.message);
    if (!data || data.length === 0) throw new Error('Escola não encontrada para o school_id do perfil.');

    school = data[0];
    const schoolName = school?.name || 'Escola sem nome';
    text('schoolName', schoolName);
    value('teacherSchool', schoolName);
  }

  async function loadTeachers() {
    const { data, error } = await client
      .from('profiles')
      .select('id, full_name, role, school_id')
      .eq('school_id', profile.school_id)
      .eq('role', 'professor')
      .order('full_name', { ascending: true });

    if (error) throw new Error('Erro ao carregar professores: ' + error.message);
    teachers = data || [];
    text('teachersCount', String(teachers.length));

    html('teachersTable', teachers.length
      ? teachers.map((t) => `<tr><td>${safe(t.full_name)}</td><td>Professor cadastrado</td></tr>`).join('')
      : '<tr><td colspan="2" class="empty">Nenhum professor cadastrado.</td></tr>'
    );

    const teacherSelect = $('linkTeacher');
    if (teacherSelect) teacherSelect.innerHTML = optionList(teachers, 'full_name', 'id', 'Selecione um professor');
  }

  async function loadStudents() {
    const { data, error } = await client
      .from('students')
      .select('id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_phone, guardian_2_name, guardian_2_phone, active, school_id')
      .eq('school_id', profile.school_id)
      .order('full_name', { ascending: true });

    if (error) throw new Error('Erro ao carregar alunos: ' + error.message);
    students = data || [];
    text('studentsCount', String(students.length));

    html('studentsTable', students.length
      ? students.map((s) => `
        <tr>
          <td><strong>${safe(s.full_name)}</strong><br><span class="small">CPF resp.: ${safe(s.guardian_1_cpf || '-')}</span></td>
          <td>${safe(formatDateBR(s.birth_date) || '-')}</td>
          <td>${safe(s.guardian_1_name || '-')}<br><span class="small">${safe(s.guardian_2_name ? 'Outro resp.: ' + s.guardian_2_name : '')}</span></td>
          <td>${safe(s.guardian_1_phone || '-')}<br><span class="small">${safe(s.guardian_2_phone || '')}</span></td>
          <td>${s.active ? 'Ativo' : 'Inativo'}</td>
        </tr>`).join('')
      : '<tr><td colspan="5" class="empty">Nenhum aluno cadastrado.</td></tr>'
    );

    const studentSelect = $('linkStudent');
    if (studentSelect) studentSelect.innerHTML = optionList(students, 'full_name', 'id', 'Selecione um aluno');
  }

  async function loadLinks() {
    const { data, error } = await client
      .from('student_teachers')
      .select('id, student_id, teacher_profile_id')
      .order('id', { ascending: false });

    if (error) {
      console.warn('Erro ao carregar vínculos:', error.message);
      html('linksTable', '<tr><td colspan="2" class="empty">Não foi possível carregar os vínculos.</td></tr>');
      return;
    }

    const teacherNames = new Map(teachers.map((t) => [t.id, t.full_name]));
    const studentNames = new Map(students.map((s) => [s.id, s.full_name]));
    const rows = (data || []).filter((v) => teacherNames.has(v.teacher_profile_id) && studentNames.has(v.student_id));

    html('linksTable', rows.length
      ? rows.map((v) => `<tr><td>${safe(teacherNames.get(v.teacher_profile_id))}</td><td>${safe(studentNames.get(v.student_id))}</td></tr>`).join('')
      : '<tr><td colspan="2" class="empty">Nenhum vínculo criado.</td></tr>'
    );
  }

  async function refreshAll() {
    await loadTeachers();
    await loadStudents();
    await loadLinks();
  }

  async function createTeacher(payload) {
    const { data: sessionData } = await client.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token) throw new Error('Sessão inválida. Saia e entre novamente.');

    const resp = await fetch(`${cfg.url}/functions/v1/create-teacher-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        apikey: cfg.anonKey,
      },
      body: JSON.stringify(payload),
    });

    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) throw new Error(json.error || 'Erro ao cadastrar professor.');
    return json;
  }

  async function handleTeacher(e) {
    e.preventDefault();
    clearStatus('teacherStatus');
    try {
      const payload = {
        full_name: $('teacherName').value.trim(),
        email: $('teacherEmail').value.trim(),
        password: $('teacherPassword').value.trim(),
        school_id: profile.school_id,
      };
      if (!payload.full_name || !payload.email || !payload.password) {
        status('teacherStatus', 'warn', 'Preencha nome, e-mail e senha.');
        return;
      }
      if (payload.password.length < 6) {
        status('teacherStatus', 'warn', 'Use uma senha inicial com pelo menos 6 caracteres. Exemplo: Integro@2026');
        return;
      }
      await createTeacher(payload);
      status('teacherStatus', 'ok', 'Professor cadastrado com sucesso.');
      $('teacherForm').reset();
      value('teacherSchool', school?.name || '');
      await refreshAll();
    } catch (err) {
      console.error(err);
      status('teacherStatus', 'error', err.message || 'Erro ao cadastrar professor.');
    }
  }

  async function handleStudent(e) {
    e.preventDefault();
    clearStatus('studentStatus');
    try {
      const payload = {
        full_name: $('studentName').value.trim(),
        birth_date: $('studentBirthDate').value || null,
        guardian_1_name: $('guardianPrimaryName').value.trim(),
        guardian_1_cpf: $('guardianPrimaryCpf').value.trim(),
        guardian_1_phone: $('guardianPrimaryPhone').value.trim(),
        guardian_2_name: $('guardianSecondaryName').value.trim() || null,
        guardian_2_phone: $('guardianSecondaryPhone').value.trim() || null,
        active: $('studentActive').value === 'true',
        notes: $('studentNotes').value.trim() || null,
        school_id: profile.school_id,
      };
      if (!payload.full_name || !payload.birth_date || !payload.guardian_1_name || !payload.guardian_1_cpf || !payload.guardian_1_phone) {
        status('studentStatus', 'warn', 'Preencha nome do aluno, nascimento, responsável principal, CPF e telefone.');
        return;
      }
      if (onlyDigits(payload.guardian_1_cpf).length !== 11) {
        status('studentStatus', 'warn', 'Informe um CPF válido com 11 dígitos para o responsável.');
        return;
      }
      const { error } = await client.from('students').insert(payload);
      if (error) throw error;
      status('studentStatus', 'ok', 'Aluno cadastrado com sucesso.');
      $('studentForm').reset();
      await refreshAll();
    } catch (err) {
      console.error(err);
      status('studentStatus', 'error', err.message || 'Erro ao cadastrar aluno.');
    }
  }

  async function handleLink(e) {
    e.preventDefault();
    clearStatus('linkStatus');
    try {
      const teacher_profile_id = $('linkTeacher').value;
      const student_id = $('linkStudent').value;
      if (!teacher_profile_id || !student_id) {
        status('linkStatus', 'warn', 'Selecione um professor e um aluno.');
        return;
      }
      const { error } = await client.from('student_teachers').insert({ teacher_profile_id, student_id });
      if (error) throw error;
      status('linkStatus', 'ok', 'Vínculo criado com sucesso.');
      $('linkForm').reset();
      await loadLinks();
    } catch (err) {
      console.error(err);
      status('linkStatus', 'error', err.message || 'Erro ao criar vínculo.');
    }
  }

  async function logout() {
    await client.auth.signOut();
    window.location.href = './index.html';
  }

  async function init() {
    try {
      const ok = await loadSession();
      if (!ok) return;
      const okProfile = await loadProfile();
      if (!okProfile) return;
      await loadSchool();
      await refreshAll();
    } catch (err) {
      console.error('ERRO GESTAO ESCOLAR:', err);
      text('userBadge', 'Erro ao carregar');
      text('schoolName', 'Erro: ' + (err.message || 'falha'));
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    const teacherForm = $('teacherForm');
    const studentForm = $('studentForm');
    const linkForm = $('linkForm');
    const logoutBtn = $('logoutBtn');
    if (teacherForm) teacherForm.addEventListener('submit', handleTeacher);
    if (studentForm) studentForm.addEventListener('submit', handleStudent);
    if (linkForm) linkForm.addEventListener('submit', handleLink);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    init();
  });
})();
