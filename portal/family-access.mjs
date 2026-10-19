// Create access for an existing pupil without inserting another student record.
export async function createFamilyAccess(client, config, student, password, send = fetch) {
  if (!student?.id || !student.school_id || !student.guardian_1_name?.trim() || !student.guardian_1_email?.trim()) {
    throw new Error('Salve o nome e o e-mail do responsável na ficha antes de criar o acesso.');
  }
  if (password.trim().length < 8) throw new Error('Use uma senha com pelo menos 8 caracteres.');
  const { data, error } = await client.auth.getSession();
  const token = data?.session?.access_token;
  if (error || !token) throw new Error('Sua sessão expirou. Entre novamente no portal.');
  const response = await send(`${config.url}/functions/v1/dynamic-responder`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, apikey: config.anonKey },
    body: JSON.stringify({
      full_name: student.guardian_1_name.trim(),
      email: student.guardian_1_email.trim().toLowerCase(),
      password: password.trim(),
      school_id: student.school_id,
      student_id: student.id,
      relation_type: 'responsavel',
      contact_phone: student.guardian_1_phone || null,
      create_only: true,
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) throw new Error(result.error || 'Não foi possível criar o acesso.');
  return result;
}

export function mountFamilyAccess(doc, client, config, send = fetch) {
  const byId = id => doc.getElementById(id);
  const dialog = byId('familyAccessDialog');
  const form = byId('familyAccessForm');
  const submit = byId('familyAccessSubmit');
  const output = byId('familyAccessStatus');
  let student = null, busy = false, loading = false;
  function status(type, message) {
    output.className = `status show ${type}`;
    output.textContent = message;
  }
  function close() {
    if (busy) return;
    dialog.close();
    form.reset();
    student = null;
  }
  byId('closeFamilyAccess').addEventListener('click', close);
  dialog.addEventListener('cancel', e => { e.preventDefault(); close(); });
  byId('openFamilyAccess').addEventListener('click', async () => {
    if (loading || busy) return;
    const id = byId('editStudentId').value;
    if (!id) return;
    loading = true;
    student = null;
    form.reset();
    form.hidden = false;
    submit.disabled = true;
    byId('familyAccessSummary').textContent = '';
    status('warn', 'Conferindo os dados salvos…');
    dialog.showModal();
    try {
      const { data, error } = await client.from('students')
        .select('id, full_name, school_id, guardian_1_name, guardian_1_email, guardian_1_phone')
        .eq('id', id).single();
      if (error || !data) throw new Error('Não foi possível carregar o cadastro do aluno.');
      if (!dialog.open) return;
      student = data;
      byId('familyAccessSummary').textContent = `${data.full_name} · ${data.guardian_1_name || 'Responsável sem nome'} · ${data.guardian_1_email || 'E-mail não informado'}`;
      if (!data.guardian_1_name || !data.guardian_1_email) throw new Error('Preencha e salve o nome e o e-mail do responsável na ficha.');
      output.className = 'status';
      output.textContent = '';
      submit.disabled = false;
      byId('familyAccessPassword').focus();
    } catch (error) { status('error', error.message); }
    finally { loading = false; }
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (busy || !student) return;
    const password = byId('familyAccessPassword').value;
    if (password !== byId('familyAccessConfirm').value) {
      status('warn', 'As senhas não coincidem. Confira os dois campos.');
      return;
    }
    busy = true;
    submit.disabled = true;
    byId('closeFamilyAccess').disabled = true;
    status('warn', 'Criando e vinculando o acesso…');
    try {
      await createFamilyAccess(client, config, student, password, send);
      form.reset();
      form.hidden = true;
      status('ok', `Login criado e vinculado a ${student.full_name}. Acesso: ${student.guardian_1_email}.`);
    } catch (error) {
      form.reset();
      status('error', error.message);
      submit.disabled = false;
    } finally {
      busy = false;
      byId('closeFamilyAccess').disabled = false;
    }
  });
}

if (typeof document !== 'undefined') {
  const config = window.INTEGRO_SUPABASE;
  if (config && window.supabase && document.getElementById('openFamilyAccess')) {
    mountFamilyAccess(document, window.supabase.createClient(config.url, config.anonKey), config);
  }
}
