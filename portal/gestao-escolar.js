(function () {
  const cfg = window.INTEGRO_SUPABASE;
  const supabaseGlobal = window.supabase;

  function $(id) {
    return document.getElementById(id);
  }

  function text(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
  }

  function value(id, valueToSet) {
    const el = $(id);
    if (el) el.value = valueToSet ?? '';
  }

  function html(id, valueToSet) {
    const el = $(id);
    if (el) el.innerHTML = valueToSet;
  }

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

  function moneyBR(v) {
    return Number(v || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function getEnrollmentStatus(student) {
    if (student?.enrollment_status) {
      return student.enrollment_status;
    }

    return student?.active === false ? 'inativo' : 'matriculado';
  }

  function enrollmentLabel(statusValue) {
    const labels = {
      matriculado: 'Matriculado',
      pre_matricula: 'Pré-matrícula / reserva',
      inativo: 'Inativo'
    };

    return labels[statusValue] || 'Matriculado';
  }

  function isStudentEnrolled(student) {
    return getEnrollmentStatus(student) === 'matriculado';
  }

  function isStudentReserved(student) {
    return getEnrollmentStatus(student) === 'pre_matricula';
  }

  function activeFromEnrollmentStatus(statusValue) {
    return statusValue === 'matriculado';
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
  let financePackages = [];

  async function loadSession() {
    text('userBadge', 'Carregando...');

    const { data: sessionData, error: sessionError } = await client.auth.getSession();

    if (sessionError) {
      throw new Error('Erro ao carregar sessão: ' + sessionError.message);
    }

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
    if (!user || !user.id) {
      throw new Error('Usuário autenticado sem ID. Faça login novamente.');
    }

    const { data, error } = await client
      .from('profiles')
      .select('id, full_name, role, school_id')
      .eq('id', user.id)
      .limit(1);

    if (error) {
      throw new Error('Erro ao carregar profile: ' + error.message);
    }

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

    if (error) {
      throw new Error('Erro ao carregar escola: ' + error.message);
    }

    if (!data || data.length === 0) {
      throw new Error('Escola não encontrada para o school_id do perfil.');
    }

    school = data[0];

    const schoolName = school?.name || 'Escola sem nome';

    text('schoolName', schoolName);
    value('teacherSchool', schoolName);
  }

  async function loadFinancePackages() {
    if (!profile?.school_id) {
      financePackages = [];
      return;
    }

    const { data, error } = await client
      .from('finance_packages')
      .select('id, name, default_amount, active')
      .eq('school_id', profile.school_id)
      .eq('active', true)
      .order('name', { ascending: true });

    if (error) {
      console.warn('Erro ao carregar pacotes financeiros:', error.message);
      financePackages = [];
      return;
    }

    financePackages = data || [];

    const options = '<option value="">Selecione um pacote</option>' +
      financePackages.map((p) =>
        `<option value="${safe(p.id)}">${safe(p.name)} — ${moneyBR(p.default_amount)}</option>`
      ).join('');

    if ($('studentPackageId')) {
      $('studentPackageId').innerHTML = options;
    }

    if ($('editStudentPackageId')) {
      $('editStudentPackageId').innerHTML = options;
    }
  }

  function getPackageName(packageId) {
    const p = financePackages.find((item) => item.id === packageId);

    if (!p) {
      return '-';
    }

    return `${p.name} — ${moneyBR(p.default_amount)}`;
  }

  async function loadTeachers() {
    const { data, error } = await client
      .from('profiles')
      .select('id, full_name, role, school_id, contact_email, contact_phone, active')
      .eq('school_id', profile.school_id)
      .eq('role', 'professor')
      .order('full_name', { ascending: true });

    if (error) {
      throw new Error('Erro ao carregar professores: ' + error.message);
    }

    teachers = data || [];
    text('teachersCount', String(teachers.length));

    html('teachersTable', teachers.length
      ? teachers.map((t) => `
        <tr>
          <td>
            <strong>${safe(t.full_name)}</strong><br>
            <span class="small">${safe(t.contact_phone || '')}</span>
          </td>
          <td>${safe(t.contact_email || 'E-mail de login não exibido')}</td>
          <td>${t.active === false ? 'Inativo' : 'Ativo'}</td>
          <td>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn-small" type="button" data-edit-teacher="${safe(t.id)}">Editar</button>
              <button class="btn-small" type="button" data-delete-teacher="${safe(t.id)}" style="background:#fee2e2;color:#991b1b;">Excluir</button>
            </div>
          </td>
        </tr>
      `).join('')
      : '<tr><td colspan="4" class="empty">Nenhum professor cadastrado.</td></tr>'
    );

    const teacherSelect = $('linkTeacher');

    if (teacherSelect) {
      teacherSelect.innerHTML = optionList(
        teachers.filter(t => t.active !== false),
        'full_name',
        'id',
        'Selecione um professor'
      );
    }
  }

  async function loadStudents() {
    const { data, error } = await client
      .from('students')
      .select('id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, guardian_2_name, guardian_2_phone, active, enrollment_status, reserved_at, enrolled_at, notes, school_id, monthly_due_day, package_id')
      .eq('school_id', profile.school_id)
      .order('full_name', { ascending: true });

    if (error) {
      throw new Error('Erro ao carregar alunos: ' + error.message);
    }

    students = data || [];

    const enrolledCount = students.filter(isStudentEnrolled).length;
    const reservedCount = students.filter(isStudentReserved).length;

    text('studentsCount', String(enrolledCount));
    text('reservedStudentsCount', String(reservedCount));

    html('studentsTable', students.length
      ? students.map((s) => {
        const enrollmentStatus = getEnrollmentStatus(s);

        return `
          <tr>
            <td>
              <strong>${safe(s.full_name)}</strong><br>
              <span class="small">CPF resp.: ${safe(s.guardian_1_cpf || '-')}</span><br>
              <span class="small">Vencimento: ${s.monthly_due_day ? 'dia ' + safe(s.monthly_due_day) : '-'}</span><br>
              <span class="small">Pacote: ${safe(getPackageName(s.package_id))}</span>
            </td>

            <td>${safe(formatDateBR(s.birth_date) || '-')}</td>

            <td>
              ${safe(s.guardian_1_name || '-')}<br>
              <span class="small">${safe(s.guardian_1_email || '')}</span><br>
              <span class="small">${safe(s.guardian_2_name ? 'Outro resp.: ' + s.guardian_2_name : '')}</span>
            </td>

            <td>
              ${safe(s.guardian_1_phone || '-')}<br>
              <span class="small">${safe(s.guardian_2_phone || '')}</span>
            </td>

            <td>${safe(enrollmentLabel(enrollmentStatus))}</td>

            <td>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                ${
                  enrollmentStatus === 'pre_matricula'
                    ? `<button class="btn-small" type="button" data-enroll-student="${safe(s.id)}" style="background:#dcfce7;color:#166534;">
                        Matricular
                      </button>`
                    : ''
                }

                <button class="btn-small" type="button" data-edit-student="${safe(s.id)}">Editar</button>
                <button class="btn-small" type="button" data-print-student="${safe(s.id)}" style="background:#e8f4ee;color:#114a3b;">Imprimir ficha</button>
                <button class="btn-small" type="button" data-delete-student="${safe(s.id)}" style="background:#fee2e2;color:#991b1b;">Excluir</button>
              </div>
            </td>
          </tr>
        `;
      }).join('')
      : '<tr><td colspan="6" class="empty">Nenhum aluno cadastrado.</td></tr>'
    );

    const studentSelect = $('linkStudent');

    if (studentSelect) {
      studentSelect.innerHTML = optionList(
        students.filter(isStudentEnrolled),
        'full_name',
        'id',
        'Selecione um aluno matriculado'
      );
    }
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
    const enrolledStudentIds = new Set(students.filter(isStudentEnrolled).map((s) => s.id));
    const studentNames = new Map(students.map((s) => [s.id, s.full_name]));

    const rows = (data || []).filter((v) =>
      teacherNames.has(v.teacher_profile_id) &&
      studentNames.has(v.student_id) &&
      enrolledStudentIds.has(v.student_id)
    );

    html('linksTable', rows.length
      ? rows.map((v) => `
        <tr>
          <td>${safe(teacherNames.get(v.teacher_profile_id))}</td>
          <td>${safe(studentNames.get(v.student_id))}</td>
        </tr>
      `).join('')
      : '<tr><td colspan="2" class="empty">Nenhum vínculo ativo com aluno matriculado.</td></tr>'
    );
  }

  async function refreshAll() {
    await loadFinancePackages();
    await loadTeachers();
    await loadStudents();
    await loadLinks();
  }

  async function getAccessToken() {
    const { data: sessionData } = await client.auth.getSession();
    const token = sessionData?.session?.access_token;

    if (!token) {
      throw new Error('Sessão inválida. Saia e entre novamente.');
    }

    return token;
  }

  async function createTeacher(payload) {
    const token = await getAccessToken();

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

    if (!resp.ok) {
      throw new Error(json.error || 'Erro ao cadastrar professor.');
    }

    return json;
  }

  async function createFamilyUser(payload) {
    const token = await getAccessToken();

    const resp = await fetch(`${cfg.url}/functions/v1/dynamic-responder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        apikey: cfg.anonKey,
      },
      body: JSON.stringify(payload),
    });

    const json = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      throw new Error(json.error || 'Erro ao criar login do responsável.');
    }

    return json;
  }

  async function deletePortalUser(tipo, id) {
    const token = await getAccessToken();

    const resp = await fetch(`${cfg.url}/functions/v1/excluir-usuario-portal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        apikey: cfg.anonKey,
      },
      body: JSON.stringify({ tipo, id }),
    });

    const json = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      const detalhes = [
        json.error,
        json.detalhe,
        json.dica,
        json.tipo_do_erro
      ].filter(Boolean).join(' | ');

      throw new Error(detalhes || 'Erro ao excluir registro.');
    }

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
        await client
          .from('profiles')
          .update({
            contact_email: payload.email,
            active: true,
          })
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

      const enrollmentStatus = $('studentActive')?.value || 'matriculado';
      const dueDayValue = $('studentMonthlyDueDay')?.value || '';
      const packageValue = $('studentPackageId')?.value || '';
      const now = new Date().toISOString();

      const payload = {
        full_name: $('studentName').value.trim(),
        birth_date: $('studentBirthDate').value || null,
        guardian_1_name: $('guardianPrimaryName').value.trim(),
        guardian_1_cpf: $('guardianPrimaryCpf').value.trim(),
        guardian_1_email: guardianEmail,
        guardian_1_phone: $('guardianPrimaryPhone').value.trim(),
        guardian_2_name: $('guardianSecondaryName').value.trim() || null,
        guardian_2_phone: $('guardianSecondaryPhone').value.trim() || null,
        active: activeFromEnrollmentStatus(enrollmentStatus),
        enrollment_status: enrollmentStatus,
        reserved_at: enrollmentStatus === 'pre_matricula' ? now : null,
        enrolled_at: enrollmentStatus === 'matriculado' ? now : null,
        monthly_due_day: dueDayValue ? Number(dueDayValue) : null,
        package_id: packageValue || null,
        notes: $('studentNotes').value.trim() || null,
        school_id: profile.school_id,
      };

      if (
        !payload.full_name ||
        !payload.birth_date ||
        !payload.guardian_1_name ||
        !payload.guardian_1_cpf ||
        !payload.guardian_1_email ||
        !payload.guardian_1_phone ||
        !guardianPassword
      ) {
        status('studentStatus', 'warn', 'Preencha aluno, nascimento, responsável, CPF, e-mail, telefone e senha do Portal da Família.');
        return;
      }

      if (onlyDigits(payload.guardian_1_cpf).length !== 11) {
        status('studentStatus', 'warn', 'Informe um CPF válido com 11 dígitos para o responsável.');
        return;
      }

      if (payload.monthly_due_day && (payload.monthly_due_day < 1 || payload.monthly_due_day > 31)) {
        status('studentStatus', 'warn', 'O dia de vencimento precisa estar entre 1 e 31.');
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

      if (error) {
        throw error;
      }

      const createdStudent = inserted && inserted[0];

      if (!createdStudent?.id) {
        throw new Error('Aluno foi salvo, mas o ID não retornou. Atualize a página e confira a lista.');
      }

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

      const msg = enrollmentStatus === 'pre_matricula'
        ? 'Aluno cadastrado como pré-matrícula/reserva. Ele não entrou no total de alunos matriculados.'
        : 'Aluno cadastrado, login do responsável criado e Portal da Família vinculado com sucesso.';

      status('studentStatus', 'ok', msg);

      $('studentForm').reset();

      await refreshAll();
    } catch (err) {
      console.error(err);
      status('studentStatus', 'error', err.message || 'Erro ao cadastrar aluno e responsável.');
      await refreshAll();
    }
  }

  async function handleLink(e) {
    e.preventDefault();
    clearStatus('linkStatus');

    try {
      const teacher_profile_id = $('linkTeacher').value;
      const student_id = $('linkStudent').value;

      if (!teacher_profile_id || !student_id) {
        status('linkStatus', 'warn', 'Selecione um professor e um aluno matriculado.');
        return;
      }

      const { error } = await client
        .from('student_teachers')
        .insert({ teacher_profile_id, student_id });

      if (error) {
        throw error;
      }

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
    value('editStudentActive', getEnrollmentStatus(s));
    value('editStudentMonthlyDueDay', s.monthly_due_day || '');
    value('editStudentPackageId', s.package_id || '');
    value('editStudentNotes', s.notes);

    showModal('studentEditModal');
  }

  async function handleStudentEdit(e) {
    e.preventDefault();
    clearStatus('studentEditStatus');

    try {
      const id = $('editStudentId').value;

      if (!id) {
        status('studentEditStatus', 'error', 'ID do aluno não encontrado. Feche a edição e abra novamente.');
        return;
      }

      const oldStudent = students.find((item) => item.id === id);
      const oldStatus = getEnrollmentStatus(oldStudent);

      const enrollmentStatus = $('editStudentActive')?.value || 'matriculado';
      const dueDayValue = $('editStudentMonthlyDueDay')?.value || '';
      const packageValue = $('editStudentPackageId')?.value || '';
      const now = new Date().toISOString();

      const payload = {
        full_name: $('editStudentName').value.trim(),
        birth_date: $('editStudentBirthDate').value || null,
        guardian_1_name: $('editGuardianPrimaryName').value.trim(),
        guardian_1_cpf: $('editGuardianPrimaryCpf').value.trim(),
        guardian_1_email: $('editGuardianPrimaryEmail').value.trim().toLowerCase(),
        guardian_1_phone: $('editGuardianPrimaryPhone').value.trim(),
        guardian_2_name: $('editGuardianSecondaryName').value.trim() || null,
        guardian_2_phone: $('editGuardianSecondaryPhone').value.trim() || null,
        active: activeFromEnrollmentStatus(enrollmentStatus),
        enrollment_status: enrollmentStatus,
        monthly_due_day: dueDayValue ? Number(dueDayValue) : null,
        package_id: packageValue || null,
        notes: $('editStudentNotes').value.trim() || null,
      };

      if (enrollmentStatus === 'pre_matricula' && oldStatus !== 'pre_matricula') {
        payload.reserved_at = now;
      }

      if (enrollmentStatus === 'matriculado' && oldStatus !== 'matriculado') {
        payload.enrolled_at = now;
      }

      if (
        !payload.full_name ||
        !payload.birth_date ||
        !payload.guardian_1_name ||
        !payload.guardian_1_cpf ||
        !payload.guardian_1_email ||
        !payload.guardian_1_phone
      ) {
        status('studentEditStatus', 'warn', 'Preencha os campos obrigatórios.');
        return;
      }

      if (onlyDigits(payload.guardian_1_cpf).length !== 11) {
        status('studentEditStatus', 'warn', 'Informe um CPF válido com 11 dígitos para o responsável.');
        return;
      }

      if (payload.monthly_due_day && (payload.monthly_due_day < 1 || payload.monthly_due_day > 31)) {
        status('studentEditStatus', 'warn', 'O dia de vencimento precisa estar entre 1 e 31.');
        return;
      }

      const { data: updatedStudent, error } = await client
        .from('students')
        .update(payload)
        .eq('id', id)
        .eq('school_id', profile.school_id)
        .select('id, full_name, enrollment_status, active')
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (!updatedStudent) {
        throw new Error('Nenhum aluno foi atualizado. Verifique se o aluno pertence à escola ativa.');
      }

      status(
        'studentEditStatus',
        'ok',
        `Aluno atualizado com sucesso. Situação: ${enrollmentLabel(updatedStudent.enrollment_status)}.`
      );

      await refreshAll();

      setTimeout(() => hideModal('studentEditModal'), 700);
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

      if (error) {
        throw error;
      }

      status('teacherEditStatus', 'ok', 'Professor atualizado com sucesso.');

      await refreshAll();

      setTimeout(() => hideModal('teacherEditModal'), 500);
    } catch (err) {
      console.error(err);
      status('teacherEditStatus', 'error', err.message || 'Erro ao atualizar professor.');
    }
  }

  async function printStudentRecord(studentId) {
    try {
      await loadFinancePackages();

      const { data: freshStudent, error: studentError } = await client
        .from('students')
        .select('id, full_name, birth_date, guardian_1_name, guardian_1_cpf, guardian_1_email, guardian_1_phone, guardian_2_name, guardian_2_phone, active, enrollment_status, notes, school_id, monthly_due_day, package_id')
        .eq('id', studentId)
        .eq('school_id', profile.school_id)
        .maybeSingle();

      if (studentError) {
        throw studentError;
      }

      const student = freshStudent || students.find((item) => item.id === studentId);

      if (!student) {
        alert('Aluno não encontrado na lista atual.');
        return;
      }

      const company =
        window.INTEGRO_COMPANY_SETTINGS?.getCurrentSettings?.() || null;

      const companyName =
        company?.trade_name ||
        company?.legal_name ||
        school?.name ||
        'INSTITUTO INTEGRO';

      const companyDocumentType = company?.document_type || 'CNPJ';
      const companyDocumentNumber = company?.document_number || '';

      const companyAddressParts = [
        company?.address_street && company?.address_number
          ? `${company.address_street}, ${company.address_number}`
          : company?.address_street || '',
        company?.address_complement || '',
        company?.address_neighborhood || '',
        company?.address_city && company?.address_state
          ? `${company.address_city}/${company.address_state}`
          : company?.address_city || company?.address_state || '',
        company?.address_zip_code ? `CEP ${company.address_zip_code}` : ''
      ].filter(Boolean);

      const companyAddress = companyAddressParts.join(' - ');

      const companyContactParts = [
        company?.phone ? `Telefone: ${company.phone}` : '',
        company?.whatsapp ? `WhatsApp: ${company.whatsapp}` : '',
        company?.email ? `E-mail: ${company.email}` : '',
        company?.website ? `Site: ${company.website}` : ''
      ].filter(Boolean);

      const companyContact = companyContactParts.join(' | ');

      const documentObservations =
        company?.document_observations ||
        'Ficha cadastral emitida pelo sistema de gestão do INTEGRO.';

      const studentPackageName = getPackageName(student.package_id);
      const monthlyDueDay = student.monthly_due_day ? `Dia ${student.monthly_due_day}` : 'Não informado';
      const enrollmentStatus = enrollmentLabel(getEnrollmentStatus(student));

      const today = new Date().toLocaleDateString('pt-BR');

      const fichaHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Ficha do Aluno - ${safe(student.full_name)}</title>

  <style>
    @page {
      size: A4;
      margin: 14mm;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #12322a;
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-size: 12px;
      line-height: 1.45;
    }

    .page {
      width: 100%;
      min-height: 100vh;
      border: 2px solid #114a3b;
      padding: 18px;
    }

    .header {
      text-align: center;
      border-bottom: 2px solid #114a3b;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }

    .header h1 {
      margin: 0;
      font-size: 20px;
      color: #003f2d;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .header h2 {
      margin: 6px 0 0;
      font-size: 16px;
      color: #114a3b;
    }

    .company-data {
      margin-top: 8px;
      font-size: 11px;
      color: #415b51;
      line-height: 1.45;
    }

    .section {
      margin-bottom: 14px;
      border: 1px solid #cfe5d8;
      border-radius: 10px;
      overflow: hidden;
      page-break-inside: avoid;
    }

    .section-title {
      background: #e8f4ee;
      color: #003f2d;
      font-weight: bold;
      padding: 8px 10px;
      border-bottom: 1px solid #cfe5d8;
      text-transform: uppercase;
      font-size: 11px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .field {
      padding: 9px 10px;
      border-bottom: 1px solid #e4eee8;
      min-height: 42px;
    }

    .field.full {
      grid-column: 1 / -1;
    }

    .label {
      display: block;
      font-size: 10px;
      color: #5f6b76;
      text-transform: uppercase;
      margin-bottom: 3px;
      font-weight: bold;
    }

    .value {
      font-size: 13px;
      color: #12322a;
      white-space: pre-wrap;
    }

    .footer-note {
      margin-top: 16px;
      border: 1px dashed #cfe5d8;
      background: #f8fcfa;
      border-radius: 10px;
      padding: 10px;
      color: #415b51;
      font-size: 11px;
    }

    .footer {
      margin-top: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      align-items: end;
      page-break-inside: avoid;
    }

    .signature {
      border-top: 1px solid #12322a;
      text-align: center;
      padding-top: 7px;
      font-size: 12px;
    }

    .print-date {
      font-size: 11px;
      color: #5f6b76;
      margin-top: 14px;
    }

    @media print {
      body {
        padding: 0;
      }

      .page {
        border: 1.5px solid #114a3b;
      }
    }
  </style>
</head>

<body>
  <div class="page">
    <div class="header">
      <h1>${safe(companyName)}</h1>
      <h2>FICHA CADASTRAL DO ALUNO</h2>

      <div class="company-data">
        ${
          companyDocumentNumber
            ? `${safe(companyDocumentType)}: ${safe(companyDocumentNumber)}<br>`
            : ''
        }
        ${companyAddress ? `${safe(companyAddress)}<br>` : ''}
        ${companyContact ? `${safe(companyContact)}` : ''}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Dados do aluno</div>

      <div class="grid">
        <div class="field full">
          <span class="label">Nome completo</span>
          <span class="value">${safe(student.full_name || '-')}</span>
        </div>

        <div class="field">
          <span class="label">Data de nascimento</span>
          <span class="value">${safe(formatDateBR(student.birth_date) || '-')}</span>
        </div>

        <div class="field">
          <span class="label">Situação da matrícula</span>
          <span class="value">${safe(enrollmentStatus)}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Dados financeiros do aluno</div>

      <div class="grid">
        <div class="field">
          <span class="label">Dia de vencimento da mensalidade</span>
          <span class="value">${safe(monthlyDueDay)}</span>
        </div>

        <div class="field">
          <span class="label">Pacote contratado</span>
          <span class="value">${safe(studentPackageName)}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Responsável principal</div>

      <div class="grid">
        <div class="field full">
          <span class="label">Nome do responsável</span>
          <span class="value">${safe(student.guardian_1_name || '-')}</span>
        </div>

        <div class="field">
          <span class="label">CPF do responsável</span>
          <span class="value">${safe(student.guardian_1_cpf || '-')}</span>
        </div>

        <div class="field">
          <span class="label">Telefone</span>
          <span class="value">${safe(student.guardian_1_phone || '-')}</span>
        </div>

        <div class="field full">
          <span class="label">E-mail de login da família</span>
          <span class="value">${safe(student.guardian_1_email || '-')}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Outro responsável</div>

      <div class="grid">
        <div class="field">
          <span class="label">Nome</span>
          <span class="value">${safe(student.guardian_2_name || '-')}</span>
        </div>

        <div class="field">
          <span class="label">Telefone</span>
          <span class="value">${safe(student.guardian_2_phone || '-')}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Observações</div>

      <div class="grid">
        <div class="field full">
          <span class="value">${safe(student.notes || 'Sem observações registradas.')}</span>
        </div>
      </div>
    </div>

    <div class="footer-note">
      ${safe(documentObservations)}
    </div>

    <div class="print-date">
      Ficha impressa em ${today}.
    </div>

    <div class="footer">
      <div class="signature">Assinatura do responsável</div>
      <div class="signature">Assinatura do INTEGRO</div>
    </div>
  </div>

  <script>
    window.onload = function () {
      window.focus();
      window.print();
    };
  <\/script>
</body>
</html>
`;

      const printWindow = window.open('', '_blank');

      if (!printWindow) {
        alert('O navegador bloqueou a janela de impressão. Permita pop-ups para imprimir a ficha.');
        return;
      }

      printWindow.document.open();
      printWindow.document.write(fichaHtml);
      printWindow.document.close();
    } catch (err) {
      console.error(err);
      alert(err.message || 'Erro ao gerar ficha do aluno.');
    }
  }

  async function handleEnrollStudent(studentId) {
    const student = students.find((item) => item.id === studentId);

    if (!student) {
      alert('Aluno não encontrado na lista atual.');
      return;
    }

    const confirmMessage =
      `Deseja matricular o aluno "${student.full_name}"?\n\n` +
      `Ele deixará de ser pré-matrícula/reserva e passará a contar como aluno matriculado ativo.`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      status('studentStatus', 'warn', 'Matriculando aluno. Aguarde...');

      const { error } = await client
        .from('students')
        .update({
          active: true,
          enrollment_status: 'matriculado',
          enrolled_at: new Date().toISOString()
        })
        .eq('id', studentId)
        .eq('school_id', profile.school_id);

      if (error) {
        throw error;
      }

      status('studentStatus', 'ok', 'Aluno matriculado com sucesso. Ele agora conta como aluno ativo.');

      await refreshAll();
    } catch (err) {
      console.error(err);
      status('studentStatus', 'error', err.message || 'Erro ao matricular aluno.');
    }
  }

  async function handleDeleteTeacher(teacherId) {
    const teacher = teachers.find((item) => item.id === teacherId);

    if (!teacher) {
      alert('Professor não encontrado na lista atual.');
      return;
    }

    const confirmMessage =
      `Tem certeza que deseja excluir o professor "${teacher.full_name}"?\n\n` +
      `Essa ação removerá o login do professor, o profile e os vínculos com alunos.\n\n` +
      `Esta ação não poderá ser desfeita.`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      status('teacherStatus', 'warn', 'Excluindo professor. Aguarde...');

      await deletePortalUser('professor', teacherId);

      status('teacherStatus', 'ok', 'Professor excluído com sucesso.');

      await refreshAll();
    } catch (err) {
      console.error(err);
      status('teacherStatus', 'error', err.message || 'Erro ao excluir professor.');
    }
  }

  async function handleDeleteStudent(studentId) {
    const student = students.find((item) => item.id === studentId);

    if (!student) {
      alert('Aluno não encontrado na lista atual.');
      return;
    }

    const confirmMessage =
      `Tem certeza que deseja excluir o aluno "${student.full_name}"?\n\n` +
      `Essa ação poderá remover planos, materiais, evoluções, frequência, vínculos com professores e vínculo da família.\n\n` +
      `Se o responsável não tiver outro aluno vinculado, o login da família também poderá ser removido.\n\n` +
      `Esta ação não poderá ser desfeita.`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      status('studentStatus', 'warn', 'Excluindo aluno. Aguarde...');

      await deletePortalUser('aluno', studentId);

      status('studentStatus', 'ok', 'Aluno excluído com sucesso.');

      await refreshAll();
    } catch (err) {
      console.error(err);
      status('studentStatus', 'error', err.message || 'Erro ao excluir aluno.');
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
      const printStudentBtn = ev.target.closest('[data-print-student]');
      const deleteStudentBtn = ev.target.closest('[data-delete-student]');
      const deleteTeacherBtn = ev.target.closest('[data-delete-teacher]');
      const enrollStudentBtn = ev.target.closest('[data-enroll-student]');

      if (studentBtn) {
        openStudentEdit(studentBtn.getAttribute('data-edit-student'));
      }

      if (teacherBtn) {
        openTeacherEdit(teacherBtn.getAttribute('data-edit-teacher'));
      }

      if (printStudentBtn) {
        printStudentRecord(printStudentBtn.getAttribute('data-print-student'));
      }

      if (deleteStudentBtn) {
        handleDeleteStudent(deleteStudentBtn.getAttribute('data-delete-student'));
      }

      if (deleteTeacherBtn) {
        handleDeleteTeacher(deleteTeacherBtn.getAttribute('data-delete-teacher'));
      }

      if (enrollStudentBtn) {
        handleEnrollStudent(enrollStudentBtn.getAttribute('data-enroll-student'));
      }

      if (ev.target.classList && ev.target.classList.contains('modal-backdrop')) {
        hideModal(ev.target.id);
      }
    });

    init();
  });
})();
