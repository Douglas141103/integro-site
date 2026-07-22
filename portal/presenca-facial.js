import { Human } from 'https://cdn.jsdelivr.net/npm/@vladmandic/human@3.3.6/dist/human.esm.js';
import {
  FACE_MODEL_VERSION,
  DEFAULT_MATCH_MARGIN,
  DEFAULT_MATCH_THRESHOLD,
  evaluateCaptureQuality,
  findBestCandidate,
  formatPercentage,
  getLocalISODate,
  roundEmbedding,
  updateAutomaticCapture,
  updateStableCandidate,
} from './presenca-facial-core.mjs?v=20260721-2';

const $ = id => document.getElementById(id);
const cfg = window.INTEGRO_SUPABASE || {};
const client = window.supabase?.createClient?.(cfg.url, cfg.anonKey);

const HUMAN_CONFIG = {
  cacheSensitivity: 0.025,
  modelBasePath: 'https://cdn.jsdelivr.net/npm/@vladmandic/human@3.3.6/models',
  filter: {
    enabled: true,
    equalization: true,
    flip: false,
  },
  face: {
    enabled: true,
    detector: {
      enabled: true,
      rotation: true,
      return: false,
      maxDetected: 2,
      minConfidence: 0.5,
      iouThreshold: 0.2,
    },
    mesh: { enabled: true },
    iris: { enabled: false },
    description: { enabled: true },
    emotion: { enabled: false },
    antispoof: { enabled: true },
    liveness: { enabled: true },
  },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
  segmentation: { enabled: false },
  gesture: { enabled: true },
};

const CAPTURE_POSES = [
  'Olhe de frente para a câmera',
  'Vire levemente o rosto para a esquerda',
  'Vire levemente o rosto para a direita',
  'Aproxime um pouco e olhe de frente',
  'Afaste um pouco e mantenha expressão natural',
];

const PENDING_ATTENDANCE_KEY = 'integro_pending_attendance_v1';
const ENROLLMENT_POSE_DELAY_MS = 5000;

const state = {
  session: null,
  profile: null,
  school: null,
  students: [],
  templates: [],
  todayEvents: [],
  stream: null,
  cameraRunning: false,
  mode: 'terminal',
  human: null,
  humanReady: false,
  humanLoading: null,
  detectionLoop: null,
  detecting: false,
  lastDetectionAt: 0,
  currentFace: null,
  currentQuality: null,
  blinkSeen: false,
  stableCandidate: null,
  processingAttendance: false,
  pauseRecognitionUntil: 0,
  enrollmentSamples: [],
  enrollmentAutomation: {
    enabled: false,
    stableFrames: 0,
    countdownEndsAt: 0,
    remainingMs: 0,
    ready: false,
  },
  enrollmentNextCaptureAt: 0,
  enrollmentSaving: false,
  setupReady: true,
  deviceId: null,
};

function safe(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function studentById(studentId) {
  return state.students.find(student => student.id === studentId) || null;
}

function roleCanManageBiometrics() {
  return ['integro_admin', 'diretor', 'coordenacao'].includes(state.profile?.role);
}

function tableIsMissing(error) {
  const message = String(error?.message || '').toLowerCase();
  return error?.code === '42P01'
    || error?.code === 'PGRST205'
    || message.includes('could not find the table')
    || message.includes('could not find the function')
    || message.includes('does not exist');
}

function setSetupReady(ready) {
  state.setupReady = ready;
  $('setupWarning')?.classList.toggle('hidden', ready);
  ['startTerminalButton', 'startEnrollmentButton', 'manualAttendanceButton'].forEach(id => {
    const element = $(id);
    if (element) element.disabled = !ready;
  });
}

function setConnectionBadge() {
  const online = navigator.onLine;
  const badge = $('connectionBadge');
  if (!badge) return;
  badge.textContent = online ? 'Conectado' : 'Sem internet';
  badge.className = `status-pill ${online ? 'online' : 'offline'}`;
}

function updateClock() {
  const now = new Date();
  $('clockTime').textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  $('clockDate').textContent = now.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function getDeviceId() {
  const key = 'integro_facial_attendance_device_id';
  let value = localStorage.getItem(key);
  if (!value) {
    value = globalThis.crypto?.randomUUID?.() || `tablet-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    localStorage.setItem(key, value);
  }
  return value;
}

function readPendingAttendances() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PENDING_ATTENDANCE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writePendingAttendances(items) {
  localStorage.setItem(PENDING_ATTENDANCE_KEY, JSON.stringify(items));
}

function networkError(error) {
  const message = String(error?.message || error || '').toLowerCase();
  return !navigator.onLine
    || message.includes('failed to fetch')
    || message.includes('networkerror')
    || message.includes('network request failed');
}

function queuePendingAttendance(student, details) {
  const queue = readPendingAttendances();
  const today = getLocalISODate();
  const existing = queue.find(item => item.studentId === student.id && item.localDate === today);
  if (!existing) {
    queue.push({
      id: globalThis.crypto?.randomUUID?.() || `${student.id}-${Date.now()}`,
      studentId: student.id,
      localDate: today,
      createdAt: new Date().toISOString(),
      details,
    });
    writePendingAttendances(queue);
  }
}

function setResult(type, eyebrow, title, message, score = '') {
  const card = $('recognitionResult');
  card.className = `recognition-card ${type}`;
  $('resultEyebrow').textContent = eyebrow;
  $('resultTitle').textContent = title;
  $('resultMessage').textContent = message;
  $('resultScore').textContent = score;
  $('resultScore').classList.toggle('hidden', !score);
}

function setFormStatus(id, message, type = '') {
  const element = $(id);
  if (!element) return;
  element.textContent = message || '';
  element.className = `form-status ${type}`.trim();
}

function showLoader(title, detail = '') {
  $('modelLoaderTitle').textContent = title;
  $('modelLoaderDetail').textContent = detail;
  $('modelLoader').classList.remove('hidden');
  $('cameraPlaceholder').classList.add('hidden');
}

function hideLoader() {
  $('modelLoader').classList.add('hidden');
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabName}`);
  });

  if (tabName === 'terminal') state.mode = 'terminal';
  if (tabName === 'cadastro') state.mode = 'enrollment';
  if (!['terminal', 'cadastro'].includes(tabName) && state.cameraRunning) stopCamera();
  history.replaceState(null, '', `#${tabName}`);
}

async function requireAuthorizedSession() {
  if (!client) throw new Error('Configuração do Supabase não encontrada.');

  const { data: sessionData, error: sessionError } = await client.auth.getSession();
  if (sessionError) throw sessionError;
  state.session = sessionData?.session || null;

  if (!state.session) {
    window.location.href = './index.html';
    return false;
  }

  const { data: profile, error: profileError } = await client
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', state.session.user.id)
    .limit(1)
    .maybeSingle();

  if (profileError) throw profileError;
  if (!profile) throw new Error('Perfil do usuário não encontrado.');

  const allowedRoles = ['integro_admin', 'diretor', 'coordenacao', 'professor'];
  if (!allowedRoles.includes(profile.role)) {
    alert('Este usuário não tem permissão para acessar a presença facial.');
    window.location.href = './dashboard.html';
    return false;
  }

  state.profile = profile;
  $('userBadge').textContent = profile.full_name || state.session.user.email || 'Usuário';

  if (!profile.school_id) throw new Error('O usuário não está vinculado a uma unidade escolar.');

  const { data: school, error: schoolError } = await client
    .from('schools')
    .select('id, name')
    .eq('id', profile.school_id)
    .limit(1)
    .maybeSingle();

  if (schoolError) throw schoolError;
  state.school = school || { id: profile.school_id, name: 'Instituto Integro' };
  return true;
}

function studentIsEnrolled(student) {
  if (student.active === false) return false;
  const status = String(student.enrollment_status || 'matriculado').toLowerCase();
  return !['pre_matricula', 'reserva', 'cancelado', 'inativo'].includes(status);
}

async function loadStudents() {
  const { data, error } = await client
    .from('students')
    .select('id, full_name, active, enrollment_status, guardian_1_name')
    .eq('school_id', state.profile.school_id)
    .order('full_name', { ascending: true });

  if (error) throw error;
  state.students = (data || []).filter(studentIsEnrolled);
  renderStudentSelects();
}

async function loadTemplates() {
  const { data, error } = await client
    .from('student_face_templates')
    .select('id, school_id, student_id, embeddings, sample_count, model_version, consent_guardian_name, consent_recorded_at, consent_reference, created_at, updated_at')
    .eq('school_id', state.profile.school_id)
    .order('updated_at', { ascending: false });

  if (error) throw error;
  state.templates = data || [];
  renderTemplates();
}

async function loadTodayEvents() {
  const today = getLocalISODate();
  const start = `${today}T00:00:00-04:00`;
  const end = `${today}T23:59:59.999-04:00`;

  const { data, error } = await client
    .from('student_attendance_events')
    .select('id, student_id, scanned_at, source, similarity, liveness_score, device_id')
    .eq('school_id', state.profile.school_id)
    .gte('scanned_at', start)
    .lte('scanned_at', end)
    .order('scanned_at', { ascending: false });

  if (error) throw error;
  state.todayEvents = data || [];
  renderTodayEvents();
}

async function loadAllData() {
  await loadStudents();
  try {
    await Promise.all([loadTemplates(), loadTodayEvents()]);
    setSetupReady(true);
  } catch (error) {
    if (tableIsMissing(error)) {
      setSetupReady(false);
      state.templates = [];
      state.todayEvents = [];
      renderTemplates();
      renderTodayEvents();
      return;
    }
    throw error;
  }
}

function renderStudentSelects() {
  const options = [
    '<option value="">Selecione um aluno</option>',
    ...state.students.map(student => `<option value="${safe(student.id)}">${safe(student.full_name)}</option>`),
  ].join('');

  ['manualStudentSelect', 'enrollmentStudentSelect'].forEach(id => {
    const select = $(id);
    if (select) select.innerHTML = options;
  });

  $('studentsMetric').textContent = String(state.students.length);
  updateMetrics();
}

function renderTodayEvents() {
  const list = $('todayAttendanceList');
  const uniqueStudents = new Set(state.todayEvents.map(event => event.student_id));
  const count = uniqueStudents.size;

  $('todayCount').textContent = String(count);
  $('attendanceMetric').textContent = String(count);

  if (!state.todayEvents.length) {
    list.innerHTML = '<p class="empty-state">Nenhuma presença registrada hoje.</p>';
    return;
  }

  list.innerHTML = state.todayEvents.map(event => {
    const student = studentById(event.student_id);
    const time = new Date(event.scanned_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const method = event.source === 'manual' ? 'Registro manual' : 'Reconhecimento facial';
    return `
      <div class="attendance-item">
        <div>
          <strong>${safe(student?.full_name || 'Aluno')}</strong>
          <span>${safe(method)}</span>
        </div>
        <span class="attendance-time">${safe(time)}</span>
      </div>
    `;
  }).join('');
}

function renderTemplates() {
  const list = $('templatesList');
  if (!list) return;

  updateMetrics();

  if (!state.templates.length) {
    list.innerHTML = '<p class="empty-state">Nenhum rosto cadastrado.</p>';
    return;
  }

  list.innerHTML = state.templates.map(template => {
    const student = studentById(template.student_id);
    const updated = template.updated_at
      ? new Date(template.updated_at).toLocaleDateString('pt-BR')
      : '—';
    const deleteButton = roleCanManageBiometrics()
      ? `<button class="danger-button" type="button" data-delete-template="${safe(template.id)}">Excluir cadastro</button>`
      : '';

    return `
      <div class="management-item">
        <div>
          <strong>${safe(student?.full_name || 'Aluno não encontrado')}</strong>
          <div class="management-meta">
            <span class="management-status">${safe(template.sample_count || 0)} amostras</span>
            <span>Atualizado em ${safe(updated)}</span>
            <span>Autorização: ${safe(template.consent_guardian_name || 'não informada')}</span>
          </div>
        </div>
        ${deleteButton}
      </div>
    `;
  }).join('');
}

function updateMetrics() {
  const templateStudentIds = new Set(state.templates.map(template => template.student_id));
  $('templatesMetric').textContent = String(templateStudentIds.size);
  $('pendingMetric').textContent = String(Math.max(0, state.students.length - templateStudentIds.size));
}

async function ensureHumanReady() {
  if (state.humanReady) return state.human;
  if (state.humanLoading) return state.humanLoading;

  showLoader('Carregando reconhecimento facial...', 'O primeiro acesso baixa os modelos de IA. Depois, o navegador reaproveita o cache.');

  state.humanLoading = (async () => {
    try {
      state.human = new Human(HUMAN_CONFIG);
      await state.human.load();
      await state.human.warmup();
      state.humanReady = true;
      $('diagnosticBackend').textContent = state.human.tf?.getBackend?.() || 'Navegador';
      hideLoader();
      return state.human;
    } catch (error) {
      state.humanReady = false;
      state.humanLoading = null;
      hideLoader();
      throw new Error(`Não foi possível carregar o reconhecimento facial: ${error.message || error}`);
    }
  })();

  return state.humanLoading;
}

async function startCamera(mode) {
  if (!state.setupReady) {
    setResult('warning', 'CONFIGURAÇÃO PENDENTE', 'Prepare o banco de dados', 'O arquivo SQL da presença facial precisa ser executado antes do teste.');
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error('Este navegador não oferece acesso à câmera. Use o Chrome atualizado e abra o site por HTTPS.');
  }

  state.mode = mode;
  showLoader('Abrindo a câmera...', 'Permita o acesso quando o tablet solicitar.');

  try {
    await ensureHumanReady();

    if (!state.stream) {
      state.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: { ideal: 640, max: 1280 },
          height: { ideal: 480, max: 960 },
          frameRate: { ideal: 12, max: 15 },
          resizeMode: 'crop-and-scale',
        },
      });
    }

    const video = $('cameraVideo');
    const enrollmentVideo = $('enrollmentVideo');
    video.srcObject = state.stream;
    enrollmentVideo.srcObject = state.stream;
    await Promise.all([video.play(), enrollmentVideo.play()]);
    await waitForVideo(video);

    state.cameraRunning = true;
    state.blinkSeen = false;
    state.stableCandidate = null;
    state.pauseRecognitionUntil = 0;
    $('cameraPlaceholder').classList.add('hidden');
    hideLoader();
    $('startTerminalButton').disabled = true;
    $('startEnrollmentButton').disabled = mode === 'enrollment' || !state.setupReady || !roleCanManageBiometrics();
    $('stopCameraButton').disabled = false;
    $('captureSampleButton').disabled = true;
    $('enrollmentPreviewStatus').textContent = 'Posicione o rosto';
    $('diagnosticResolution').textContent = `${video.videoWidth} × ${video.videoHeight}`;

    if (mode === 'terminal') {
      setResult('waiting', 'TERMINAL ATIVO', 'Aguardando aluno', 'Fique sozinho diante da câmera, olhe para frente e pisque uma vez.');
    }

    startDetectionLoop();
  } catch (error) {
    hideLoader();
    $('cameraPlaceholder').classList.remove('hidden');
    setResult('error', 'ERRO NA CÂMERA', 'Não foi possível iniciar', cameraErrorMessage(error));
    setFormStatus('enrollmentStatus', cameraErrorMessage(error), 'error');
    throw error;
  }
}

function waitForVideo(video) {
  if (video.readyState >= 2 && video.videoWidth) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('A câmera demorou demais para responder.')), 12000);
    video.addEventListener('loadeddata', () => {
      clearTimeout(timeout);
      resolve();
    }, { once: true });
  });
}

function cameraErrorMessage(error) {
  const name = error?.name || '';
  if (name === 'NotAllowedError') return 'A permissão da câmera foi negada. Abra as permissões do site no Chrome e autorize a câmera.';
  if (name === 'NotFoundError') return 'Nenhuma câmera foi encontrada neste tablet.';
  if (name === 'NotReadableError') return 'A câmera está sendo usada por outro aplicativo. Feche-o e tente novamente.';
  return error?.message || 'Erro desconhecido ao abrir a câmera.';
}

function stopCamera() {
  if (state.detectionLoop) cancelAnimationFrame(state.detectionLoop);
  state.detectionLoop = null;
  state.cameraRunning = false;
  state.detecting = false;
  state.currentFace = null;
  state.currentQuality = null;
  state.blinkSeen = false;
  state.stableCandidate = null;
  resetEnrollmentAutomation(false);

  state.stream?.getTracks?.().forEach(track => track.stop());
  state.stream = null;
  $('cameraVideo').srcObject = null;
  $('enrollmentVideo').srcObject = null;
  $('cameraPlaceholder').classList.remove('hidden');
  $('startTerminalButton').disabled = !state.setupReady;
  $('startEnrollmentButton').disabled = !state.setupReady || !roleCanManageBiometrics();
  $('startEnrollmentButton').textContent = 'Iniciar cadastro automático';
  $('stopCameraButton').disabled = true;
  $('captureSampleButton').disabled = true;
  $('cameraStage').classList.remove('accepted');
  $('enrollmentPreview').classList.remove('ready');
  $('enrollmentPreviewStatus').textContent = 'Câmera desligada';
  $('cameraInstruction').textContent = 'Toque em “Iniciar terminal”';
  clearOverlay();
  updateQualityChips(null);
}

function startDetectionLoop() {
  if (state.detectionLoop) cancelAnimationFrame(state.detectionLoop);

  const loop = async timestamp => {
    if (!state.cameraRunning) return;

    if (!state.detecting && timestamp - state.lastDetectionAt >= 480) {
      state.detecting = true;
      state.lastDetectionAt = timestamp;
      try {
        await processCameraFrame();
      } catch (error) {
        console.error('Falha ao analisar câmera:', error);
        $('cameraInstruction').textContent = 'Não foi possível analisar esta imagem. Tente novamente.';
      } finally {
        state.detecting = false;
      }
    }

    state.detectionLoop = requestAnimationFrame(loop);
  };

  state.detectionLoop = requestAnimationFrame(loop);
}

async function processCameraFrame() {
  const video = $('cameraVideo');
  if (!state.humanReady || video.readyState < 2 || !video.videoWidth) return;

  const inferenceCanvas = $('inferenceCanvas');
  drawCroppedFrame(video, inferenceCanvas);
  const result = await state.human.detect(inferenceCanvas);
  const faces = result?.face || [];
  const face = faces[0] || null;
  state.currentFace = face;

  const gestures = (result?.gesture || []).map(item => String(item.gesture || '').toLowerCase());
  if (gestures.some(name => name.includes('blink'))) state.blinkSeen = true;

  const imageQuality = measureImageQuality(inferenceCanvas);
  const centered = face ? faceIsCentered(face, inferenceCanvas.width, inferenceCanvas.height) : false;
  const faceSize = face ? Math.min(Number(face.box?.[2] || 0), Number(face.box?.[3] || 0)) : 0;
  const minimumFaceSize = Math.max(130, Math.min(inferenceCanvas.width, inferenceCanvas.height) * 0.29);

  state.currentQuality = evaluateCaptureQuality({
    faceCount: faces.length,
    faceScore: Number(face?.faceScore || face?.boxScore || 0),
    faceSize,
    minimumFaceSize,
    brightness: imageQuality.brightness,
    blurScore: imageQuality.blurScore,
    centered,
    realScore: Number(face?.real || 0),
    liveScore: Number(face?.live || 0),
    blinkSeen: state.blinkSeen,
    requireBlink: true,
  });

  drawOverlay(faces, inferenceCanvas.width, inferenceCanvas.height, state.currentQuality.accepted);
  updateQualityChips(state.currentQuality);
  $('cameraInstruction').textContent = state.currentQuality.instruction;
  $('cameraStage').classList.toggle('accepted', state.currentQuality.accepted);
  $('enrollmentPreview').classList.toggle('ready', state.currentQuality.accepted);
  $('enrollmentPreviewStatus').textContent = state.currentQuality.instruction;
  $('captureSampleButton').disabled = !(
    state.mode === 'enrollment'
    && !state.enrollmentSaving
    && state.enrollmentSamples.length < CAPTURE_POSES.length
    && state.currentQuality.accepted
    && face?.embedding?.length
  );

  if (state.mode === 'terminal') await processTerminalRecognition(face);
  else if (state.mode === 'enrollment') await processAutomaticEnrollment(face);
}

function drawCroppedFrame(video, canvas) {
  const context = canvas.getContext('2d', { alpha: false });
  const sourceRatio = video.videoWidth / video.videoHeight;
  const targetRatio = canvas.width / canvas.height;
  let sx = 0;
  let sy = 0;
  let sourceWidth = video.videoWidth;
  let sourceHeight = video.videoHeight;

  if (sourceRatio > targetRatio) {
    sourceWidth = video.videoHeight * targetRatio;
    sx = (video.videoWidth - sourceWidth) / 2;
  } else if (sourceRatio < targetRatio) {
    sourceHeight = video.videoWidth / targetRatio;
    sy = (video.videoHeight - sourceHeight) / 2;
  }

  context.drawImage(video, sx, sy, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
}

function measureImageQuality(source) {
  const canvas = $('analysisCanvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  const gray = new Float32Array(canvas.width * canvas.height);
  let brightnessTotal = 0;

  for (let pixel = 0, index = 0; pixel < data.length; pixel += 4, index += 1) {
    const value = data[pixel] * 0.299 + data[pixel + 1] * 0.587 + data[pixel + 2] * 0.114;
    gray[index] = value;
    brightnessTotal += value;
  }

  let laplacianTotal = 0;
  let laplacianSquared = 0;
  let samples = 0;

  for (let y = 1; y < canvas.height - 1; y += 1) {
    for (let x = 1; x < canvas.width - 1; x += 1) {
      const index = y * canvas.width + x;
      const laplacian = 4 * gray[index]
        - gray[index - 1]
        - gray[index + 1]
        - gray[index - canvas.width]
        - gray[index + canvas.width];
      laplacianTotal += laplacian;
      laplacianSquared += laplacian ** 2;
      samples += 1;
    }
  }

  const mean = laplacianTotal / Math.max(samples, 1);
  const variance = laplacianSquared / Math.max(samples, 1) - mean ** 2;
  return {
    brightness: brightnessTotal / gray.length,
    blurScore: Math.max(0, variance),
  };
}

function faceIsCentered(face, frameWidth, frameHeight) {
  const [x, y, width, height] = face.box || [0, 0, 0, 0];
  const faceX = x + width / 2;
  const faceY = y + height / 2;
  const dx = Math.abs(faceX - frameWidth / 2) / frameWidth;
  const dy = Math.abs(faceY - frameHeight / 2) / frameHeight;
  return dx <= 0.18 && dy <= 0.2;
}

function drawOverlay(faces, frameWidth, frameHeight, accepted) {
  const canvas = $('cameraOverlay');
  canvas.width = frameWidth;
  canvas.height = frameHeight;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  faces.forEach((face, index) => {
    const [x, y, width, height] = face.box || [0, 0, 0, 0];
    context.strokeStyle = index === 0 && accepted ? '#5cf293' : '#ffd36b';
    context.lineWidth = Math.max(3, canvas.width / 180);
    context.setLineDash(index === 0 ? [] : [10, 8]);
    context.strokeRect(x, y, width, height);
  });
}

function clearOverlay() {
  const canvas = $('cameraOverlay');
  canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
}

function updateQualityChips(quality) {
  const values = quality?.checks || {};
  const mapping = {
    qualityCamera: quality ? values.oneFace : null,
    qualityLight: quality ? values.light : null,
    qualityFace: quality ? values.size && values.centered && values.confidence && values.sharpness : null,
    qualityBlink: quality ? values.blink : null,
    qualityLive: quality ? values.real && values.live : null,
  };

  Object.entries(mapping).forEach(([id, value]) => {
    const chip = $(id);
    chip.classList.toggle('ok', value === true);
    chip.classList.toggle('bad', value === false);
  });
}

function humanSimilarity(left, right) {
  return state.human.match.similarity(left, right, {
    order: 2,
    multiplier: 25,
    min: 0.2,
    max: 0.8,
  });
}

async function processTerminalRecognition(face) {
  if (Date.now() < state.pauseRecognitionUntil || state.processingAttendance) return;

  if (!state.currentQuality?.accepted || !face?.embedding?.length) {
    state.stableCandidate = null;
    return;
  }

  if (!state.templates.length) {
    setResult('warning', 'SEM CADASTROS', 'Nenhum rosto cadastrado', 'Abra “Cadastrar rosto” e registre pelo menos um aluno autorizado.');
    return;
  }

  const candidate = findBestCandidate(Array.from(face.embedding), state.templates, {
    similarity: humanSimilarity,
    threshold: DEFAULT_MATCH_THRESHOLD,
    margin: DEFAULT_MATCH_MARGIN,
    samplesToAverage: 3,
  });

  state.stableCandidate = updateStableCandidate(state.stableCandidate, candidate, Date.now(), {
    requiredFrames: 3,
    maximumGapMs: 2600,
  });

  if (!candidate.accepted) {
    const message = candidate.reason === 'ambiguous'
      ? 'O resultado ficou parecido com mais de um cadastro. Peça ajuda para registrar manualmente.'
      : 'Rosto ainda não identificado. Ajuste a posição e tente novamente.';
    setResult('warning', 'CONFERINDO', 'Ainda não reconhecido', message, candidate.best ? `Melhor leitura: ${formatPercentage(candidate.best.score)}` : '');
    return;
  }

  const student = studentById(candidate.best.studentId);
  if (!student) return;

  setResult(
    'waiting',
    'CONFIRMANDO',
    student.full_name,
    `Mantenha-se parado: leitura ${state.stableCandidate.count} de 3.`,
    `Confiança ${formatPercentage(candidate.best.score)}`,
  );

  if (state.stableCandidate.ready) {
    await registerAttendance(student, {
      source: 'facial',
      similarity: state.stableCandidate.score,
      liveness: Number(face.live || 0),
      real: Number(face.real || 0),
    });
  }
}

async function registerAttendance(student, details) {
  if (!student || state.processingAttendance) return;
  state.processingAttendance = true;

  try {
    const data = await callAttendanceRpc(student.id, details);

    const alreadyRegistered = data?.status === 'already_registered';
    const title = alreadyRegistered ? 'Presença já registrada' : `Olá, ${student.full_name}!`;
    const message = alreadyRegistered
      ? 'Este aluno já estava presente hoje. Nenhum registro duplicado foi criado.'
      : 'Sua presença foi registrada com sucesso.';

    setResult(
      'success',
      alreadyRegistered ? 'TUDO CERTO' : 'PRESENÇA CONFIRMADA',
      title,
      message,
      details.similarity ? `Confiança ${formatPercentage(details.similarity)}` : 'Registro manual',
    );

    if (!alreadyRegistered) speak(`Presença registrada. Olá, ${student.full_name}.`);
    state.pauseRecognitionUntil = Date.now() + 5200;
    state.blinkSeen = false;
    state.stableCandidate = null;
    await loadTodayEvents();

    window.setTimeout(() => {
      if (state.cameraRunning && state.mode === 'terminal') {
        setResult('waiting', 'TERMINAL ATIVO', 'Aguardando próximo aluno', 'Fique sozinho diante da câmera, olhe para frente e pisque uma vez.');
      }
    }, 5200);
  } catch (error) {
    if (networkError(error)) {
      queuePendingAttendance(student, details);
      setResult(
        'warning',
        'SEM INTERNET',
        `${student.full_name}: presença pendente`,
        'O registro ficou guardado neste tablet e será enviado automaticamente quando a conexão voltar.',
        details.similarity ? `Confiança ${formatPercentage(details.similarity)}` : 'Registro manual',
      );
      state.pauseRecognitionUntil = Date.now() + 5200;
      state.blinkSeen = false;
      state.stableCandidate = null;
      return;
    }
    if (tableIsMissing(error)) setSetupReady(false);
    setResult('error', 'NÃO FOI POSSÍVEL SALVAR', 'Presença não registrada', error.message || 'Verifique a conexão e tente novamente.');
    setFormStatus('manualStatus', error.message || 'Erro ao registrar presença.', 'error');
  } finally {
    state.processingAttendance = false;
  }
}

async function callAttendanceRpc(studentId, details) {
  const { data, error } = await client.rpc('register_facial_attendance', {
    p_student_id: studentId,
    p_similarity: details.similarity ?? null,
    p_liveness: details.liveness ?? null,
    p_real_score: details.real ?? null,
    p_source: details.source,
    p_device_id: state.deviceId,
    p_model_version: FACE_MODEL_VERSION,
  });
  if (error) throw error;
  return data;
}

async function syncPendingAttendances() {
  if (!navigator.onLine || !state.profile) return;
  const queue = readPendingAttendances();
  if (!queue.length) return;

  const remaining = [];
  for (const item of queue) {
    try {
      const student = studentById(item.studentId);
      if (!student) continue;
      await callAttendanceRpc(student.id, item.details || { source: 'manual' });
    } catch (error) {
      remaining.push(item);
      if (networkError(error)) {
        remaining.push(...queue.slice(queue.indexOf(item) + 1));
        break;
      }
      console.error('Registro pendente descartado por erro definitivo:', error);
    }
  }

  writePendingAttendances(remaining);
  if (!remaining.length) await loadTodayEvents();
}

function speak(message) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.debug('Leitura em voz não disponível:', error);
  }
}

function playCaptureTone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = 880;
    gain.gain.setValueAtTime(0.08, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.14);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.14);
    oscillator.addEventListener('ended', () => context.close().catch(() => {}), { once: true });
  } catch (error) {
    console.debug('Aviso sonoro não disponível:', error);
  }
}

function resetEnrollmentAutomation(enabled = false, delayMs = 0) {
  state.enrollmentAutomation = {
    enabled,
    stableFrames: 0,
    countdownEndsAt: 0,
    remainingMs: 0,
    ready: false,
  };
  state.enrollmentNextCaptureAt = enabled ? Date.now() + delayMs : 0;
}

async function processAutomaticEnrollment(face) {
  const automatic = state.enrollmentAutomation;
  if (!automatic.enabled || state.enrollmentSaving || state.enrollmentSamples.length >= CAPTURE_POSES.length) return;

  const now = Date.now();
  if (now < state.enrollmentNextCaptureAt) {
    const seconds = Math.max(1, Math.ceil((state.enrollmentNextCaptureAt - now) / 1000));
    $('enrollmentPreviewStatus').textContent = `Prepare a posição. Próxima captura em ${seconds}s...`;
    return;
  }

  const progress = updateAutomaticCapture(automatic, {
    qualityAccepted: state.currentQuality?.accepted,
    embeddingReady: Boolean(face?.embedding?.length),
  }, now, {
    requiredFrames: 2,
    countdownMs: 1200,
  });

  state.enrollmentAutomation = { ...progress, enabled: true };
  if (!state.currentQuality?.accepted || !face?.embedding?.length) return;

  if (progress.stableFrames < 2) {
    $('enrollmentPreviewStatus').textContent = 'Ótimo. Mantenha essa posição...';
    return;
  }

  if (!progress.ready) {
    const seconds = Math.max(1, Math.ceil(progress.remainingMs / 1000));
    $('enrollmentPreviewStatus').textContent = `Captura automática em ${seconds}...`;
    return;
  }

  resetEnrollmentAutomation(true, ENROLLMENT_POSE_DELAY_MS);
  await captureEnrollmentSample({ automatic: true });
}

function validateEnrollmentForm() {
  const studentId = $('enrollmentStudentSelect').value;
  const guardianName = $('guardianConsentName').value.trim();
  const consentDate = $('guardianConsentDate').value;
  const consentChecked = $('guardianConsentCheck').checked;

  if (!studentId) throw new Error('Selecione o aluno.');
  if (!guardianName) throw new Error('Informe o nome do responsável que autorizou.');
  if (!consentDate) throw new Error('Informe a data da autorização.');
  if (!consentChecked) throw new Error('Confirme o registro da autorização específica.');
  return { studentId, guardianName, consentDate };
}

function resetEnrollmentSamples(options = {}) {
  const resumeAutomatic = options?.resumeAutomatic === true;
  state.enrollmentSamples = [];
  state.blinkSeen = false;
  resetEnrollmentAutomation(resumeAutomatic, resumeAutomatic ? ENROLLMENT_POSE_DELAY_MS : 0);
  document.querySelectorAll('[data-sample]').forEach(item => item.classList.remove('done'));
  $('saveTemplateButton').disabled = true;
  $('resetSamplesButton').disabled = true;
  $('captureInstruction').textContent = CAPTURE_POSES[0];
  if (resumeAutomatic) {
    $('startEnrollmentButton').disabled = true;
    $('startEnrollmentButton').textContent = 'Cadastro automático ativo';
    setFormStatus('enrollmentStatus', 'Reiniciado. Posicione o rosto e o tablet fará as capturas sozinho.');
  } else {
    $('startEnrollmentButton').disabled = !state.setupReady || !roleCanManageBiometrics();
    $('startEnrollmentButton').textContent = 'Iniciar cadastro automático';
    setFormStatus('enrollmentStatus', 'As amostras anteriores foram descartadas.');
  }
}

async function captureEnrollmentSample(options = {}) {
  const automatic = options?.automatic === true;
  try {
    validateEnrollmentForm();
    if (!state.currentQuality?.accepted || !state.currentFace?.embedding?.length) {
      throw new Error('A captura ainda não passou pelos controles de qualidade. Siga a orientação mostrada na câmera.');
    }

    const embedding = roundEmbedding(state.currentFace.embedding);
    if (!embedding.length) throw new Error('A assinatura facial não foi gerada. Tente novamente.');

    if (state.enrollmentSamples.length) {
      const comparison = humanSimilarity(embedding, state.enrollmentSamples[0]);
      if (comparison < 0.55) {
        throw new Error('Esta amostra ficou diferente da primeira. Confirme se é o mesmo aluno e tente novamente.');
      }
    }

    const index = state.enrollmentSamples.length;
    if (index >= CAPTURE_POSES.length) return;

    state.enrollmentSamples.push(embedding);
    document.querySelector(`[data-sample="${index}"]`)?.classList.add('done');
    playCaptureTone();
    $('resetSamplesButton').disabled = false;
    $('captureSampleButton').disabled = true;

    if (state.enrollmentSamples.length === CAPTURE_POSES.length) {
      resetEnrollmentAutomation(false);
      $('captureInstruction').textContent = automatic
        ? 'Cinco amostras concluídas. Salvando o cadastro automaticamente...'
        : 'Cinco amostras concluídas. Confira a autorização e salve o cadastro.';
      $('saveTemplateButton').disabled = false;
      setFormStatus(
        'enrollmentStatus',
        automatic ? 'Captura concluída. Salvando automaticamente...' : 'Captura concluída. As imagens já foram descartadas.',
        'ok',
      );
      if (automatic) await saveFaceTemplate({ automatic: true });
    } else {
      const nextInstruction = CAPTURE_POSES[state.enrollmentSamples.length];
      $('captureInstruction').textContent = nextInstruction;
      setFormStatus(
        'enrollmentStatus',
        `Amostra ${state.enrollmentSamples.length} de 5 capturada${automatic ? ' automaticamente' : ''}. Prepare a próxima posição.`,
        'ok',
      );
      if (automatic) speak(`Amostra ${state.enrollmentSamples.length} capturada. ${nextInstruction}.`);
    }
    return true;
  } catch (error) {
    if (automatic) resetEnrollmentAutomation(true, ENROLLMENT_POSE_DELAY_MS);
    setFormStatus('enrollmentStatus', error.message, 'error');
    return false;
  }
}

async function saveFaceTemplate(options = {}) {
  const automatic = options?.automatic === true;
  if (state.enrollmentSaving) return;
  state.enrollmentSaving = true;
  try {
    if (!roleCanManageBiometrics()) throw new Error('Somente direção, coordenação ou administração podem cadastrar rostos.');
    const form = validateEnrollmentForm();
    if (state.enrollmentSamples.length !== CAPTURE_POSES.length) throw new Error('Capture as cinco amostras antes de salvar.');

    $('saveTemplateButton').disabled = true;
    setFormStatus('enrollmentStatus', 'Salvando assinatura facial...');

    const consentTime = new Date(`${form.consentDate}T12:00:00`).toISOString();
    const payload = {
      school_id: state.profile.school_id,
      student_id: form.studentId,
      embeddings: state.enrollmentSamples,
      sample_count: state.enrollmentSamples.length,
      model_version: FACE_MODEL_VERSION,
      consent_guardian_name: form.guardianName,
      consent_recorded_at: consentTime,
      consent_reference: $('guardianConsentReference').value.trim() || null,
      updated_by: state.profile.id,
      updated_at: new Date().toISOString(),
    };

    const existingTemplate = state.templates.find(template => template.student_id === form.studentId);
    const request = existingTemplate
      ? client.from('student_face_templates').update(payload).eq('id', existingTemplate.id)
      : client.from('student_face_templates').insert({ ...payload, created_by: state.profile.id });
    const { error } = await request;

    if (error) throw error;

    const student = studentById(form.studentId);
    setFormStatus('enrollmentStatus', `Cadastro facial de ${student?.full_name || 'aluno'} salvo com sucesso.`, 'ok');
    state.enrollmentSamples = [];
    document.querySelectorAll('[data-sample]').forEach(item => item.classList.remove('done'));
    $('captureInstruction').textContent = 'Cadastro concluído. Selecione outro aluno ou volte ao terminal.';
    $('guardianConsentCheck').checked = false;
    $('saveTemplateButton').disabled = true;
    $('resetSamplesButton').disabled = true;
    resetEnrollmentAutomation(false);
    $('startEnrollmentButton').disabled = !state.setupReady || !roleCanManageBiometrics();
    $('startEnrollmentButton').textContent = 'Cadastrar próximo aluno';
    await loadTemplates();
    if (automatic) speak(`Cadastro facial de ${student?.full_name || 'aluno'} concluído.`);
  } catch (error) {
    if (tableIsMissing(error)) setSetupReady(false);
    resetEnrollmentAutomation(false);
    $('startEnrollmentButton').disabled = !state.setupReady || !roleCanManageBiometrics();
    $('startEnrollmentButton').textContent = 'Tentar cadastro novamente';
    $('saveTemplateButton').disabled = state.enrollmentSamples.length !== CAPTURE_POSES.length;
    setFormStatus('enrollmentStatus', error.message || 'Erro ao salvar o cadastro facial.', 'error');
  } finally {
    state.enrollmentSaving = false;
  }
}

async function deleteTemplate(templateId) {
  if (!roleCanManageBiometrics()) return;
  const template = state.templates.find(item => item.id === templateId);
  const student = studentById(template?.student_id);
  const confirmed = window.confirm(`Excluir definitivamente o cadastro facial de ${student?.full_name || 'este aluno'}? A presença manual continuará disponível.`);
  if (!confirmed) return;

  const { error } = await client
    .from('student_face_templates')
    .delete()
    .eq('id', templateId)
    .eq('school_id', state.profile.school_id);

  if (error) {
    alert(error.message || 'Não foi possível excluir o cadastro facial.');
    return;
  }

  await loadTemplates();
}

async function registerManualAttendance() {
  const student = studentById($('manualStudentSelect').value);
  if (!student) {
    setFormStatus('manualStatus', 'Selecione um aluno.', 'error');
    return;
  }

  setFormStatus('manualStatus', 'Registrando...');
  await registerAttendance(student, { source: 'manual', similarity: null, liveness: null, real: null });
  if (!$('recognitionResult').classList.contains('error')) {
    setFormStatus('manualStatus', `Presença de ${student.full_name} confirmada.`, 'ok');
  }
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) {
    alert('O navegador não permitiu a tela cheia. Use o menu do Chrome e escolha “Adicionar à tela inicial”.');
  }
}

function bindEvents() {
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
  });

  $('startTerminalButton').addEventListener('click', () => startCamera('terminal').catch(console.error));
  $('startEnrollmentButton').addEventListener('click', async () => {
    try {
      validateEnrollmentForm();
      await startCamera('enrollment');
      resetEnrollmentAutomation(true, ENROLLMENT_POSE_DELAY_MS);
      $('startEnrollmentButton').disabled = true;
      $('startEnrollmentButton').textContent = 'Cadastro automático ativo';
      $('captureInstruction').textContent = CAPTURE_POSES[state.enrollmentSamples.length] || CAPTURE_POSES[0];
      setFormStatus('enrollmentStatus', 'Cadastro automático iniciado. Siga as orientações; não é necessário apertar a cada captura.', 'ok');
      speak(`Cadastro automático iniciado. ${CAPTURE_POSES[state.enrollmentSamples.length] || CAPTURE_POSES[0]}. Pisque uma vez.`);
    } catch (error) {
      setFormStatus('enrollmentStatus', error.message, 'error');
    }
  });
  $('stopCameraButton').addEventListener('click', stopCamera);
  $('fullscreenButton').addEventListener('click', toggleFullscreen);
  $('captureSampleButton').addEventListener('click', () => captureEnrollmentSample().catch(console.error));
  $('resetSamplesButton').addEventListener('click', () => {
    resetEnrollmentSamples({ resumeAutomatic: state.cameraRunning && state.mode === 'enrollment' });
  });
  $('saveTemplateButton').addEventListener('click', () => saveFaceTemplate().catch(console.error));
  $('manualAttendanceButton').addEventListener('click', registerManualAttendance);
  $('refreshDataButton').addEventListener('click', () => loadAllData().catch(error => alert(error.message)));
  $('logoutButton').addEventListener('click', async () => {
    stopCamera();
    await client.auth.signOut();
    window.location.href = './index.html';
  });

  $('enrollmentStudentSelect').addEventListener('change', () => {
    const student = studentById($('enrollmentStudentSelect').value);
    $('guardianConsentName').value = student?.guardian_1_name || '';
    $('guardianConsentCheck').checked = false;
    resetEnrollmentSamples();
  });

  $('templatesList').addEventListener('click', event => {
    const button = event.target.closest('[data-delete-template]');
    if (button) deleteTemplate(button.dataset.deleteTemplate);
  });

  window.addEventListener('online', () => {
    setConnectionBadge();
    syncPendingAttendances().catch(console.error);
  });
  window.addEventListener('offline', setConnectionBadge);
  window.addEventListener('beforeunload', stopCamera);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.cameraRunning) stopCamera();
  });
}

async function init() {
  bindEvents();
  setConnectionBadge();
  updateClock();
  setInterval(updateClock, 15000);
  state.deviceId = getDeviceId();
  $('guardianConsentDate').value = getLocalISODate();
  const requestedTab = window.location.hash.slice(1);
  if (['terminal', 'cadastro', 'gestao', 'privacidade'].includes(requestedTab)) switchTab(requestedTab);

  try {
    const authorized = await requireAuthorizedSession();
    if (!authorized) return;
    await loadAllData();
    await syncPendingAttendances();
    setResult('waiting', 'PRONTO PARA COMEÇAR', 'Terminal ainda não iniciado', 'Toque em “Iniciar terminal” e permita o uso da câmera.');

    if (!roleCanManageBiometrics()) {
      document.querySelector('[data-tab="cadastro"]').disabled = true;
      $('startEnrollmentButton').disabled = true;
    }
  } catch (error) {
    console.error(error);
    setResult('error', 'ERRO DE CONFIGURAÇÃO', 'Não foi possível abrir o terminal', error.message || 'Erro inesperado.');
  }
}

init();
