import {
  SURVEY_SLUG,
  DOMAIN_ORDER,
  DOMAIN_LABELS,
  DEFAULT_SCALE,
  normalizeBrazilPhone,
  formatBrazilPhone,
  clampText
} from './core.mjs';

const cfg = window.INTEGRO_SUPABASE || {};
const supabaseGlobal = window.supabase;
const client = cfg.url && cfg.anonKey && supabaseGlobal?.createClient
  ? supabaseGlobal.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
    })
  : null;

const $ = (id) => document.getElementById(id);
const loadingState = $('loadingState');
const unavailableState = $('unavailableState');
const formCard = $('formCard');
const successState = $('successState');
const surveyForm = $('surveyForm');
const questionSteps = $('questionSteps');
const previousButton = $('previousButton');
const nextButton = $('nextButton');
const submitButton = $('submitButton');
const formAlert = $('formAlert');
const liveRegion = $('liveRegion');

let surveyPayload = null;
let steps = [];
let currentStep = 0;
let submitting = false;
let submissionId = createSubmissionId();

function createSubmissionId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const random = Math.floor(Math.random() * 16);
    const value = character === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

function announce(message) {
  liveRegion.textContent = '';
  window.setTimeout(() => { liveRegion.textContent = message; }, 30);
}

function showUnavailable(title, message, showRetry = true) {
  loadingState.classList.add('hidden');
  formCard.classList.add('hidden');
  successState.classList.add('hidden');
  unavailableState.classList.remove('hidden');
  $('unavailableTitle').textContent = title;
  $('unavailableMessage').textContent = message;
  $('retryButton').classList.toggle('hidden', !showRetry);
}

function showForm() {
  loadingState.classList.add('hidden');
  unavailableState.classList.add('hidden');
  successState.classList.add('hidden');
  formCard.classList.remove('hidden');
}

function setFormAlert(message = '') {
  formAlert.textContent = message;
  formAlert.classList.toggle('hidden', !message);
}

function setFieldError(fieldId, message = '') {
  const field = $(fieldId);
  const error = document.querySelector(`[data-error-for="${fieldId}"]`);
  if (field) field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (error) error.textContent = message;
}

function domainIntro(domain) {
  if (domain === 'merenda') {
    return 'Responda considerando o que você acompanha ou o que o aluno relata. Se não tiver informação suficiente, marque “Não sei avaliar”.';
  }

  const descriptions = {
    gestao: 'Considere a comunicação, a escuta e o encaminhamento das solicitações das famílias.',
    professores: 'Considere o tratamento com os alunos, as informações à família e o apoio à aprendizagem.',
    infraestrutura: 'Considere limpeza, conservação e segurança dos espaços utilizados pelos estudantes.',
    secretaria: 'Considere cordialidade, clareza das orientações e tempo de atendimento ou retorno.'
  };

  return descriptions[domain] || 'Marque a opção que melhor representa sua experiência.';
}

function createQuestionStep(domain, questions, scale) {
  const section = document.createElement('section');
  section.className = 'survey-step';
  section.dataset.stepTitle = DOMAIN_LABELS[domain] || domain;
  section.dataset.domain = domain;

  const intro = document.createElement('div');
  intro.className = 'step-intro';

  const number = document.createElement('span');
  number.className = 'area-number';
  number.textContent = `Área ${DOMAIN_ORDER.indexOf(domain) + 1} de ${DOMAIN_ORDER.length}`;

  const title = document.createElement('h3');
  title.textContent = DOMAIN_LABELS[domain] || domain;

  const description = document.createElement('p');
  description.textContent = domainIntro(domain);

  intro.append(number, title, description);
  section.append(intro);

  const list = document.createElement('div');
  list.className = 'question-list';

  questions.forEach((question, index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'question-card';
    fieldset.dataset.questionId = question.id;

    const legend = document.createElement('legend');
    const badge = document.createElement('span');
    badge.className = 'question-number';
    badge.textContent = String(question.position || index + 1);
    legend.append(badge, document.createTextNode(question.prompt));
    fieldset.append(legend);

    const grid = document.createElement('div');
    grid.className = 'rating-grid';

    [...scale, { value: 0, label: 'Não sei avaliar', shortLabel: 'Não sei avaliar' }].forEach((option) => {
      const label = document.createElement('label');
      label.className = 'rating-option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${question.id}`;
      input.value = String(option.value);
      input.required = true;
      input.setAttribute('aria-label', `${question.prompt}: ${option.label}`);
      const text = document.createElement('span');
      text.textContent = option.shortLabel || option.label;
      label.append(input, text);
      grid.append(label);
    });

    const error = document.createElement('small');
    error.className = 'question-error';
    error.dataset.questionError = question.id;
    fieldset.append(grid, error);
    list.append(fieldset);
  });

  section.append(list);
  return section;
}

function renderQuestions(payload) {
  questionSteps.replaceChildren();
  const scale = Array.isArray(payload.scale) && payload.scale.length ? payload.scale : DEFAULT_SCALE;

  DOMAIN_ORDER.forEach((domain) => {
    const domainQuestions = payload.questions
      .filter((question) => question.domain === domain)
      .sort((a, b) => Number(a.position) - Number(b.position));
    if (domainQuestions.length) {
      questionSteps.append(createQuestionStep(domain, domainQuestions, scale));
    }
  });

  steps = [...document.querySelectorAll('.survey-step')];
}

function updateStep() {
  steps.forEach((step, index) => step.classList.toggle('active', index === currentStep));
  const total = steps.length;
  const visibleNumber = currentStep + 1;
  const percent = total ? Math.round((visibleNumber / total) * 100) : 0;
  const activeStep = steps[currentStep];

  $('stepLabel').textContent = `Etapa ${visibleNumber} de ${total}`;
  $('formHeading').textContent = activeStep?.dataset.stepTitle || 'Pesquisa de satisfação';
  $('progressPercent').textContent = `${percent}%`;
  $('progressBar').style.width = `${percent}%`;
  previousButton.classList.toggle('hidden', currentStep === 0);
  nextButton.classList.toggle('hidden', currentStep === total - 1);
  submitButton.classList.toggle('hidden', currentStep !== total - 1);
  setFormAlert('');
  announce(`Etapa ${visibleNumber} de ${total}: ${activeStep?.dataset.stepTitle || ''}`);

  const top = formCard.getBoundingClientRect().top + window.scrollY - 18;
  window.scrollTo({ top, behavior: 'smooth' });
}

function validateIdentification() {
  let valid = true;
  const name = clampText($('respondentName').value, 120);
  const phone = normalizeBrazilPhone($('phone').value);

  setFieldError('respondentName', '');
  setFieldError('phone', '');
  setFieldError('privacyAccepted', '');

  if (name.length < 3 || !name.includes(' ')) {
    setFieldError('respondentName', 'Digite o nome completo do responsável.');
    valid = false;
  }

  if (!phone) {
    setFieldError('phone', 'Digite um telefone válido com DDD.');
    valid = false;
  }

  if (!$('privacyAccepted').checked) {
    setFieldError('privacyAccepted', 'Confirme a leitura do aviso de privacidade para continuar.');
    valid = false;
  }

  return valid;
}

function validateQuestionStep(step) {
  let valid = true;
  step.querySelectorAll('.question-card').forEach((card) => {
    const questionId = card.dataset.questionId;
    const checked = card.querySelector(`input[name="question-${questionId}"]:checked`);
    const error = card.querySelector('[data-question-error]');
    card.classList.toggle('invalid', !checked);
    if (error) error.textContent = checked ? '' : 'Marque uma opção para continuar.';
    if (!checked) valid = false;
  });
  return valid;
}

function validateFinalStep() {
  const checked = surveyForm.querySelector('input[name="improvementPriority"]:checked');
  const error = document.querySelector('[data-error-for="improvementPriority"]');
  if (error) error.textContent = checked ? '' : 'Escolha uma opção para continuar.';
  return Boolean(checked);
}

function validateCurrentStep() {
  const step = steps[currentStep];
  if (!step) return false;
  if (currentStep === 0) return validateIdentification();
  if (currentStep === steps.length - 1) return validateFinalStep();
  return validateQuestionStep(step);
}

function firstInvalidControl(step) {
  return step?.querySelector('[aria-invalid="true"], .question-card.invalid input, input:invalid');
}

function goNext() {
  if (!validateCurrentStep()) {
    firstInvalidControl(steps[currentStep])?.focus();
    announce('Há campos que precisam ser preenchidos antes de continuar.');
    return;
  }

  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateStep();
  }
}

function goPrevious() {
  if (currentStep > 0) {
    currentStep -= 1;
    updateStep();
  }
}

function collectAnswers() {
  return surveyPayload.questions.map((question) => {
    const selected = surveyForm.querySelector(`input[name="question-${question.id}"]:checked`);
    return {
      question_id: question.id,
      score: selected ? Number(selected.value) : null
    };
  });
}

function serverMessage(status) {
  const messages = {
    closed: 'Esta edição da pesquisa já foi encerrada.',
    not_found: 'Esta pesquisa não foi encontrada.',
    privacy_required: 'Confirme a leitura do aviso de privacidade.',
    invalid_name: 'Confira o nome completo do responsável.',
    invalid_phone: 'Confira o telefone e o DDD informados.',
    incomplete_answers: 'Todas as perguntas precisam ser respondidas.',
    comment_too_long: 'O comentário ultrapassou o limite permitido.',
    invalid_priority: 'Escolha a área que deve receber prioridade.',
    invalid_submission: 'Não foi possível validar este envio. Atualize a página e tente novamente.'
  };
  return messages[status] || 'Não foi possível registrar a resposta. Revise os dados e tente novamente.';
}

async function submitSurvey(event) {
  event.preventDefault();
  if (submitting || !client || !surveyPayload) return;

  if (!validateFinalStep()) {
    announce('Escolha a área que deveria receber prioridade de melhoria.');
    return;
  }

  const answers = collectAnswers();
  if (answers.some((answer) => answer.score === null)) {
    setFormAlert('Volte e responda todas as perguntas antes de enviar.');
    return;
  }

  submitting = true;
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando com segurança...';
  setFormAlert('');

  try {
    const priority = surveyForm.querySelector('input[name="improvementPriority"]:checked')?.value;
    const { data, error } = await client.rpc('submit_parent_school_satisfaction', {
      p_survey_slug: SURVEY_SLUG,
      p_respondent_name: clampText($('respondentName').value, 120),
      p_phone: $('phone').value,
      p_relationship: $('relationship').value,
      p_student_grade: $('studentGrade').value,
      p_student_shift: $('studentShift').value,
      p_improvement_priority: priority,
      p_improvement_comment: $('improvementComment').value.trim(),
      p_contact_permission: $('contactPermission').checked,
      p_privacy_accepted: $('privacyAccepted').checked,
      p_answers: answers,
      p_client_submission_id: submissionId,
      p_honeypot: $('website').value,
      p_form_version: Number(surveyPayload.survey?.questionnaire_version || 1)
    });

    if (error) throw error;

    if (data?.status === 'duplicate') {
      currentStep = 0;
      updateStep();
      setFieldError('phone', 'Este telefone já enviou uma resposta nesta edição. Se acredita que houve engano, procure a secretaria da escola.');
      $('phone').focus();
      return;
    }

    if (data?.status !== 'submitted') {
      setFormAlert(serverMessage(data?.status));
      return;
    }

    formCard.classList.add('hidden');
    successState.classList.remove('hidden');
    $('successReference').textContent = data.reference ? `Comprovante: ${data.reference}` : '';
    submissionId = createSubmissionId();
    surveyForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    announce('Resposta registrada com sucesso. Obrigado por contribuir com a escola.');
  } catch (error) {
    console.error('Erro ao enviar pesquisa:', error);
    setFormAlert('A conexão falhou e a resposta não foi confirmada. Verifique a internet e toque em enviar novamente.');
  } finally {
    submitting = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar minha resposta';
  }
}

function maskPhoneInput(value) {
  let digits = String(value || '').replace(/\D/g, '');
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith('55')) digits = digits.slice(2);
  digits = digits.slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

async function loadSurvey() {
  loadingState.classList.remove('hidden');
  unavailableState.classList.add('hidden');
  formCard.classList.add('hidden');

  if (!client) {
    showUnavailable('Configuração indisponível', 'O formulário ainda não foi conectado ao sistema da escola.', false);
    return;
  }

  try {
    const { data, error } = await client.rpc('get_public_school_satisfaction', { p_slug: SURVEY_SLUG });
    if (error) throw error;
    if (!data?.survey) {
      showUnavailable('Pesquisa não encontrada', 'A edição solicitada ainda não está disponível.', false);
      return;
    }
    if (!data.survey.is_open) {
      showUnavailable('Pesquisa encerrada', 'A Escola Municipal Etelvina Pereira Braga agradece a participação das famílias.', false);
      return;
    }
    if (!Array.isArray(data.questions) || !data.questions.length) {
      showUnavailable('Pesquisa em preparação', 'As perguntas ainda não foram liberadas.', false);
      return;
    }

    surveyPayload = data;
    $('pageTitle').textContent = data.survey.title || 'Sua opinião ajuda a escola a melhorar';
    renderQuestions(data);
    currentStep = 0;
    showForm();
    updateStep();
  } catch (error) {
    console.error('Erro ao carregar pesquisa:', error);
    showUnavailable('Não foi possível abrir a pesquisa', 'Verifique sua conexão com a internet e tente novamente.', true);
  }
}

nextButton.addEventListener('click', goNext);
previousButton.addEventListener('click', goPrevious);
surveyForm.addEventListener('submit', submitSurvey);
$('retryButton').addEventListener('click', loadSurvey);
$('phone').addEventListener('input', (event) => { event.target.value = maskPhoneInput(event.target.value); });
$('phone').addEventListener('blur', (event) => {
  const formatted = formatBrazilPhone(event.target.value);
  if (normalizeBrazilPhone(formatted)) event.target.value = formatted;
});
$('improvementComment').addEventListener('input', (event) => {
  $('commentCount').textContent = String(event.target.value.length);
});

loadSurvey();
