export async function familyPasswordRequest(client, config, body, send = fetch) {
  const { data, error } = await client.auth.getSession();
  const token = data?.session?.access_token;
  if (error || !token) throw new Error('Sua sessão expirou. Entre novamente no portal.');
  const response = await send(`${config.url}/functions/v1/reset-family-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, apikey: config.anonKey },
    body: JSON.stringify(body),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) throw new Error(result.error || 'Não foi possível alterar a senha.');
  return result;
}

export function mountFamilyPassword(doc, client, config, send = fetch) {
  const byId = id => doc.getElementById(id);
  const dialog = byId('familyPasswordDialog'), form = byId('familyPasswordForm');
  const submit = byId('familyPasswordSubmit'), close = byId('closeFamilyPassword');
  const output = byId('familyPasswordStatus');
  let account = null, studentId = '', busy = false, revision = 0;
  const status = (type, message) => { output.className = `status show ${type}`; output.textContent = message; };
  function dismiss() {
    if (busy) return;
    revision++;
    dialog.close(); form.reset(); account = null;
  }
  close.addEventListener('click', dismiss);
  dialog.addEventListener('cancel', e => { e.preventDefault(); dismiss(); });
  byId('openFamilyPassword').addEventListener('click', async () => {
    if (busy || dialog.open) return;
    studentId = byId('editStudentId').value;
    if (!studentId) return;
    const current = ++revision;
    account = null; form.reset(); form.hidden = true; submit.disabled = true;
    byId('familyPasswordSummary').textContent = '';
    byId('familyPasswordShared').textContent = '';
    status('warn', 'Conferindo o login vinculado…');
    dialog.showModal();
    try {
      const result = await familyPasswordRequest(client, config, { action: 'inspect', student_id: studentId }, send);
      if (current !== revision || !dialog.open) return;
      account = result;
      byId('familyPasswordSummary').textContent = `${result.student_name} · Login: ${result.email}`;
      byId('familyPasswordShared').textContent = result.students.length > 1
        ? `Este login é compartilhado por: ${result.students.join(', ')}. A nova senha valerá para todos eles.` : '';
      form.hidden = false; submit.disabled = false;
      output.className = 'status'; output.textContent = '';
      byId('familyPasswordNew').focus();
    } catch (error) { if (current === revision && dialog.open) status('error', error.message); }
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (busy || !account) return;
    const password = byId('familyPasswordNew').value;
    if (password.trim().length < 8 || password.length > 72) return status('warn', 'Use uma senha de 8 a 72 caracteres.');
    if (password !== byId('familyPasswordConfirm').value) return status('warn', 'As senhas não coincidem.');
    busy = true; submit.disabled = true; close.disabled = true;
    status('warn', 'Salvando a nova senha…');
    try {
      const result = await familyPasswordRequest(client, config, {
        action: 'reset', student_id: studentId, user_id: account.user_id, email: account.email, password,
      }, send);
      form.hidden = true;
      status('ok', `Senha alterada com sucesso. Entre no Portal da Família ou no Integro Box com ${result.email} e a nova senha.`);
    } catch (error) { status('error', error.message); submit.disabled = false; }
    finally { form.reset(); busy = false; close.disabled = false; }
  });
}

if (typeof document !== 'undefined' && document.getElementById('openFamilyPassword')) {
  const config = window.INTEGRO_SUPABASE;
  if (config && window.supabase) mountFamilyPassword(document, window.supabase.createClient(config.url, config.anonKey), config);
}
