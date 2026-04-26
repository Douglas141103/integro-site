(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  function $(id) { return document.getElementById(id); }
  function text(id, value) { const el = $(id); if (el) el.textContent = value; }
  function value(id, value) { const el = $(id); if (el) el.value = value ?? ''; }
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
  function showModal(id) {
    const el = $(id);
    if (el) {
      el.classList.add('show');
      el.setAttribute('aria-hidden', 'false');
    }
  }
  function hideModal(id) {
    const el = $(id);
    if (el) {
      el.classList.remove('show');
      el.setAttribute('aria-hidden', 'true');
    }
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
      .select('id, full_name, role, school_id, contact_email, contact_phone, active')
      .eq('school_id', profile.school_id)
      .eq('role', 'professor')
      .order('full_name', { ascending: true });

    if (error) throw new Error('Erro ao carregar professores: ' + error.message);
    teachers = data || [];
    text('teachersCount', String(teachers.length));

    html('teachersTable', teachers.length
      ? teachers.map((t) => `
        <tr>
          <td><strong>${safe(t.full_name)}</strong><br><span class="small">${safe(t.contact_phone || '')}</span></td>
          <td>${safe(t.contact_email || 'E-mail de login não exibido')}</td>
          <td>${t.active === false ? 'Inativo' : 'Ativo'}</td>
          <td><button class="btn-small" type="button" data-edit-teacher="${safe(t.id)}">Editar</button></td>
        </tr>`).join('')
      : '<tr><td colspan="4" class="empty">Nenhum professor cadastrado.</td></tr>'
    );

    const teacherSelect = $('linkTeacher');
    if (teacherSelect) teacherSelect.innerHTML = optionList(teachers.filter(t => t.active !== false), 'full_name', 'id', 'Selecione um professor');
  }

  async function loadStudents() {
    const { data, error } = await client
      .from('students')
      .select('id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, guardian_2_name, guardian_2_phone, active, notes, school_id')
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
          <td>${safe(s.guardian_1_name || '-')}<br><span class="small">${safe(s.guardian_1_email || '')}</span><br><span class="small">${safe(s.guardian_2_name ? 'Outro resp.: ' + s.guardian_2_name : '')}</span></td>
          <td>${safe(s.guardian_1_phone || '-')}<br><span class="small">${safe(s.guardian_2_phone || '')}</span></td>
          <td>${s.active ? 'Ativo' : 'Inativo'}</td>
          <td><button class="btn-small" type="button" data-edit-student="${safe(s.id)}">Editar</button></td>
        </tr>`).join('')
      : '<tr><td colspan="6" class="empty">Nenhum aluno cadastrado.</td></tr>'
    );

    const studentSelect = $('linkStudent');
    if (studentSelect) studentSelect.innerHTML = optionList(students.filter(s => s.active !== false), 'full_name', 'id', 'Selecione um aluno');
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

  async function createFamilyUser(payload) {
    const { data: sessionData } = await client.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token) throw new Error('Sessão inválida. Saia e entre novamente.');

    const resp = await fetch(`${cfg.url}/functions/v1/create-family-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        apikey: cfg.anonKey,
      },
      body: JSON.stringify(payload),
    });

    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) throw new Error(json.error || 'Erro ao criar login do responsável.');
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
      const result = await createTeacher(payload);
      if (result?.user_id) {
        await client.from('profiles')
          .update({ contact_email: payload.email, active: true })
          .eq('id', result.user_id);
      }
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
      const guardianEmail = $('guardianPrimaryEmail').value.trim().toLowerCase();
      const guardianPassword = $('guardianPassword').value.trim();
      const payload = {
        full_name: $('studentName').value.trim(),
        birth_date: $('studentBirthDate').value || null,
        guardian_1_name: $('guardianPrimaryName').value.trim(),
        guardian_1_cpf: $('guardianPrimaryCpf').value.trim(),
        guardian_1_email: guardianEmail,
        guardian_1_phone: $('guardianPrimaryPhone').value.trim(),
        guardian_2_name: $('guardianSecondaryName').value.trim() || null,
        guardian_2_phone: $('guardianSecondaryPhone').value.trim() || null,
        active: $('studentActive').value === 'true',
        notes: $('studentNotes').value.trim() || null,
        school_id: profile.school_id,
      };
      if (!payload.full_name || !payload.birth_date || !payload.guardian_1_name || !payload.guardian_1_cpf || !payload.guardian_1_email || !payload.guardian_1_phone || !guardianPassword) {
        status('studentStatus', 'warn', 'Preencha aluno, nascimento, responsável, CPF, e-mail, telefone e senha do Portal da Família.');
        return;
      }
      if (onlyDigits(payload.guardian_1_cpf).length !== 11) {
        status('studentStatus', 'warn', 'Informe um CPF válido com 11 dígitos para o responsável.');
        return;
      }
      if (guardianPassword.length < 6) {
        status('studentStatus', 'warn', 'Use uma senha inicial com pelo menos 6 caracteres. Exemplo: Familia@2026');
        return;
      }

      const { data: inserted, error } = await client
        .from('students')
        .insert(payload)
        .select('id')
        .limit(1);
      if (error) throw error;

      const createdStudent = inserted && inserted[0];
      if (!createdStudent?.id) throw new Error('Aluno foi salvo, mas o ID não retornou. Atualize a página e confira a lista.');

      await createFamilyUser({
        full_name: payload.guardian_1_name,
        email: payload.guardian_1_email,
        password: guardianPassword,
        school_id: profile.school_id,
        student_id: createdStudent.id,
        relation_type: 'responsavel',
        contact_phone: payload.guardian_1_phone,
        cpf: payload.guardian_1_cpf,
      });

      status('studentStatus', 'ok', 'Aluno cadastrado, login do responsável criado e Portal da Família vinculado com sucesso.');
      $('studentForm').reset();
      await refreshAll();
    } catch (err) {
      console.error(err);
      status('studentStatus', 'error', err.message || 'Erro ao cadastrar aluno e responsável.');
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

  function openStudentEdit(studentId) {
    const s = students.find((item) => item.id === studentId);
    if (!s) return;
    clearStatus('studentEditStatus');
    value('editStudentId', s.id);
    value('editStudentName', s.full_name);
    value('editStudentBirthDate', s.birth_date);
    value('editGuardianPrimaryName', s.guardian_1_name);
    value('editGuardianPrimaryCpf', s.guardian_1_cpf);
    value('editGuardianPrimaryEmail', s.guardian_1_email);
    value('editGuardianPrimaryPhone', s.guardian_1_phone);
    value('editGuardianSecondaryName', s.guardian_2_name);
    value('editGuardianSecondaryPhone', s.guardian_2_phone);
    value('editStudentActive', String(s.active !== false));
    value('editStudentNotes', s.notes);
    showModal('studentEditModal');
  }

  async function handleStudentEdit(e) {
    e.preventDefault();
    clearStatus('studentEditStatus');
    try {
      const id = $('editStudentId').value;
      const payload = {
        full_name: $('editStudentName').value.trim(),
        birth_date: $('editStudentBirthDate').value || null,
        guardian_1_name: $('editGuardianPrimaryName').value.trim(),
        guardian_1_cpf: $('editGuardianPrimaryCpf').value.trim(),
        guardian_1_email: $('editGuardianPrimaryEmail').value.trim().toLowerCase(),
        guardian_1_phone: $('editGuardianPrimaryPhone').value.trim(),
        guardian_2_name: $('editGuardianSecondaryName').value.trim() || null,
        guardian_2_phone: $('editGuardianSecondaryPhone').value.trim() || null,
        active: $('editStudentActive').value === 'true',
        notes: $('editStudentNotes').value.trim() || null,
      };
      if (!id || !payload.full_name || !payload.birth_date || !payload.guardian_1_name || !payload.guardian_1_cpf || !payload.guardian_1_email || !payload.guardian_1_phone) {
        status('studentEditStatus', 'warn', 'Preencha os campos obrigatórios.');
        return;
      }
      if (onlyDigits(payload.guardian_1_cpf).length !== 11) {
        status('studentEditStatus', 'warn', 'Informe um CPF válido com 11 dígitos para o responsável.');
        return;
      }
      const { error } = await client
        .from('students')
        .update(payload)
        .eq('id', id)
        .eq('school_id', profile.school_id);
      if (error) throw error;
      status('studentEditStatus', 'ok', 'Aluno atualizado com sucesso.');
      await refreshAll();
      setTimeout(() => hideModal('studentEditModal'), 500);
    } catch (err) {
      console.error(err);
      status('studentEditStatus', 'error', err.message || 'Erro ao atualizar aluno.');
    }
  }

  function openTeacherEdit(teacherId) {
    const t = teachers.find((item) => item.id === teacherId);
    if (!t) return;
    clearStatus('teacherEditStatus');
    value('editTeacherId', t.id);
    value('editTeacherName', t.full_name);
    value('editTeacherEmail', t.contact_email);
    value('editTeacherPhone', t.contact_phone);
    value('editTeacherActive', String(t.active !== false));
    showModal('teacherEditModal');
  }

  async function handleTeacherEdit(e) {
    e.preventDefault();
    clearStatus('teacherEditStatus');
    try {
      const id = $('editTeacherId').value;
      const payload = {
        full_name: $('editTeacherName').value.trim(),
        contact_email: $('editTeacherEmail').value.trim() || null,
        contact_phone: $('editTeacherPhone').value.trim() || null,
        active: $('editTeacherActive').value === 'true',
      };
      if (!id || !payload.full_name) {
        status('teacherEditStatus', 'warn', 'Informe o nome do professor.');
        return;
      }
      const { error } = await client
        .from('profiles')
        .update(payload)
        .eq('id', id)
        .eq('school_id', profile.school_id)
        .eq('role', 'professor');
      if (error) throw error;
      status('teacherEditStatus', 'ok', 'Professor atualizado com sucesso.');
      await refreshAll();
      setTimeout(() => hideModal('teacherEditModal'), 500);
    } catch (err) {
      console.error(err);
      status('teacherEditStatus', 'error', err.message || 'Erro ao atualizar professor.');
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
    const studentEditForm = $('studentEditForm');
    const teacherEditForm = $('teacherEditForm');

    if (teacherForm) teacherForm.addEventListener('submit', handleTeacher);
    if (studentForm) studentForm.addEventListener('submit', handleStudent);
    if (linkForm) linkForm.addEventListener('submit', handleLink);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (studentEditForm) studentEditForm.addEventListener('submit', handleStudentEdit);
    if (teacherEditForm) teacherEditForm.addEventListener('submit', handleTeacherEdit);

    ['closeStudentEdit', 'cancelStudentEdit'].forEach((id) => {
      const el = $(id);
      if (el) el.addEventListener('click', () => hideModal('studentEditModal'));
    });
    ['closeTeacherEdit', 'cancelTeacherEdit'].forEach((id) => {
      const el = $(id);
      if (el) el.addEventListener('click', () => hideModal('teacherEditModal'));
    });

    document.addEventListener('click', function (ev) {
      const studentBtn = ev.target.closest('[data-edit-student]');
      const teacherBtn = ev.target.closest('[data-edit-teacher]');
      if (studentBtn) openStudentEdit(studentBtn.getAttribute('data-edit-student'));
      if (teacherBtn) openTeacherEdit(teacherBtn.getAttribute('data-edit-teacher'));
      if (ev.target.classList && ev.target.classList.contains('modal-backdrop')) {
        hideModal(ev.target.id);
      }
    });

    init();
  });
})();
