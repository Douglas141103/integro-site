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

if (!isConfigured) {
  configWarningEl?.classList.remove('hidden');
  setFeedback('Configure primeiro o arquivo config.js para ativar o portal.', 'error');
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

function translateRole(role) {
  const map = {
    integro_admin: 'Administrador INTEGRO',
    diretor: 'Direção',
    coordenacao: 'Coordenação',
    professor: 'Professor'
  };
  return map[role] || role || 'Não definido';
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function requireSession() {
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  const session = data.session;
  if (!session) {
    window.location.href = './index.html';
    return null;
  }
  return session;
}

async function loadProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, role, school_id, schools ( id, name, slug )')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

async function loadMaterials(profile) {
  let query = supabase
    .from('materials')
    .select('id, title, description, category, school_id, file_path, created_at')
    .order('created_at', { ascending: false });

  if (profile.role !== 'integro_admin') {
    query = query.or(`school_id.is.null,school_id.eq.${profile.school_id}`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

async function loadAnnouncements(profile) {
  let query = supabase
    .from('announcements')
    .select('id, title, message, school_id, published_at, is_pinned')
    .order('is_pinned', { ascending: false })
    .order('published_at', { ascending: false });

  if (profile.role !== 'integro_admin') {
    query = query.or(`school_id.is.null,school_id.eq.${profile.school_id}`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

async function downloadMaterial(filePath) {
  if (!filePath) return;
  setFeedback('Gerando link seguro para download...', 'success');
  const { data, error } = await supabase.storage
    .from(config.bucket || 'partner-materials')
    .createSignedUrl(filePath, 60 * 60);

  if (error) {
    setFeedback(error.message || 'Não foi possível abrir o material.', 'error');
    return;
  }

  window.open(data.signedUrl, '_blank', 'noopener');
  setFeedback('');
}

function renderMaterials(materials) {
  const list = document.getElementById('materials-list');
  const count = document.getElementById('materials-count');
  if (!list || !count) return;

  count.textContent = String(materials.length);

  if (!materials.length) {
    list.innerHTML = '<div class="empty-state">Nenhum material disponível para este parceiro no momento.</div>';
    return;
  }

  list.innerHTML = materials.map((item) => `
    <article class="item-card">
      <div class="badge">${escapeHtml(item.category || 'Material')}</div>
      <h4>${escapeHtml(item.title)}</h4>
      <div class="item-meta">Atualizado em ${new Date(item.created_at).toLocaleDateString('pt-BR')}</div>
      <p>${escapeHtml(item.description || 'Material pedagógico disponível para consulta e download.')}</p>
      <button class="btn btn-primary material-download" data-file-path="${escapeHtml(item.file_path)}" type="button">Abrir material</button>
    </article>
  `).join('');

  list.querySelectorAll('.material-download').forEach((button) => {
    button.addEventListener('click', () => downloadMaterial(button.dataset.filePath));
  });
}

function renderAnnouncements(items) {
  const list = document.getElementById('announcements-list');
  const count = document.getElementById('announcements-count');
  if (!list || !count) return;

  count.textContent = String(items.length);

  if (!items.length) {
    list.innerHTML = '<div class="empty-state">Nenhum comunicado ativo no momento.</div>';
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="item-card">
      ${item.is_pinned ? '<div class="badge">Destaque</div>' : ''}
      <h4>${escapeHtml(item.title)}</h4>
      <div class="item-meta">Publicado em ${new Date(item.published_at).toLocaleDateString('pt-BR')}</div>
      <p>${escapeHtml(item.message)}</p>
    </article>
  `).join('');
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

    setFeedback('Enviando link de redefinição...', 'success');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${config.siteUrl || window.location.origin}/portal/index.html`
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

  const logoutButton = document.getElementById('logout-button');
  logoutButton?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    window.location.href = './index.html';
  });

  try {
    const session = await requireSession();
    if (!session) return;

    const profile = await loadProfile(session.user.id);
    const [materials, announcements] = await Promise.all([
      loadMaterials(profile),
      loadAnnouncements(profile)
    ]);

    document.getElementById('user-chip').textContent = profile.full_name || session.user.email;
    document.getElementById('profile-role').textContent = translateRole(profile.role);
    document.getElementById('school-name').textContent = profile.schools?.name || 'Escola parceira';
    document.getElementById('welcome-copy').textContent = `Bem-vindo(a), ${profile.full_name || session.user.email}. Este espaço reúne os materiais e comunicados liberados para ${profile.schools?.name || 'sua escola'}.`;

    if (profile.role === 'integro_admin') {
      document.getElementById('admin-box')?.classList.remove('hidden');
    }

    renderMaterials(materials);
    renderAnnouncements(announcements);
    setFeedback('');
  } catch (error) {
    console.error(error);
    setFeedback(error.message || 'Não foi possível carregar o portal.', 'error');
  }
}

if (page === 'index.html' || page === '') {
  handleLoginPage();
}

if (page === 'dashboard.html') {
  handleDashboardPage();
}
