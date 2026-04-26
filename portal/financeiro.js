const cfg = window.INTEGRO_SUPABASE || {};
const client = window.supabase.createClient(cfg.url, cfg.anonKey);

const state = {
  user: null,
  profile: null,
  school: null,
  students: [],
  packages: [],
  discounts: [],
  entries: [],
  expenses: [],
  lastReport: null,
};

const $ = (id) => document.getElementById(id);

function money(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

function normalizeNumber(value) {
  return Number(String(value || '0').replace(',', '.')) || 0;
}

function showStatus(message, type = 'ok') {
  const box = $('statusBox');
  box.hidden = false;
  box.className = `status ${type}`;
  box.textContent = message;
  setTimeout(() => { box.hidden = true; }, 6500);
}

function entryTypeLabel(type) {
  const labels = {
    mensalidade: 'Mensalidade', matricula: 'Matrícula', avaliacao: 'Avaliação / diagnóstico',
    material: 'Material', servico: 'Serviço / atendimento avulso', taxa: 'Taxa', outro: 'Outra entrada'
  };
  return labels[type] || 'Entrada';
}

async function init() {
  bindEvents();

  const { data: authData } = await client.auth.getUser();
  state.user = authData?.user;
  if (!state.user) {
    window.location.href = './index.html';
    return;
  }

  const { data: profile, error: profileError } = await client
    .from('profiles')
    .select('id, full_name, role, school_id')
    .eq('id', state.user.id)
    .limit(1)
    .maybeSingle();

  if (profileError || !profile) {
    showStatus('Erro ao carregar perfil do usuário.', 'error');
    return;
  }

  state.profile = profile;
  const allowed = ['integro_admin', 'diretor', 'coordenacao'];
  if (!allowed.includes(profile.role)) {
    showStatus('Seu perfil não tem permissão para acessar a Gestão Financeira.', 'error');
    return;
  }

  $('userBadge').textContent = profile.full_name || state.user.email || 'Usuário';

  const { data: school, error: schoolError } = await client
    .from('schools')
    .select('id, name, slug')
    .eq('id', profile.school_id)
    .limit(1)
    .maybeSingle();

  if (schoolError || !school) {
    showStatus('Erro ao carregar escola ativa.', 'error');
    return;
  }

  state.school = school;
  $('schoolName').textContent = school.name || 'Escola';
  $('expenseDate').value = todayISO();
  $('reportDate').value = todayISO();

  await reloadAll();
}

function bindEvents() {
  document.querySelectorAll('.tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      $(btn.dataset.tab).classList.add('active');
    });
  });

  $('logoutBtn').addEventListener('click', async () => {
    await client.auth.signOut();
    window.location.href = './index.html';
  });

  $('packageForm').addEventListener('submit', savePackage);
  $('discountForm').addEventListener('submit', saveDiscount);
  $('expenseForm').addEventListener('submit', saveExpense);
  $('entryForm').addEventListener('submit', saveEntryAndPrint);
  $('reportForm').addEventListener('submit', downloadCsvReport);
  $('downloadHtmlReportBtn').addEventListener('click', downloadHtmlReport);

  $('entryPackageId').addEventListener('change', applyPackage);
  $('entryDiscountId').addEventListener('change', applyDiscount);
  $('grossAmount').addEventListener('input', recalcAmountPaid);
  $('discountAmount').addEventListener('input', recalcAmountPaid);
  $('entryType').addEventListener('change', fillDefaultDescription);
}

async function reloadAll() {
  await Promise.all([
    loadStudents(), loadPackages(), loadDiscounts(), loadEntries(), loadExpenses()
  ]);
  renderAll();
}

async function loadStudents() {
  const { data, error } = await client
    .from('students')
    .select('id, full_name, active')
    .eq('school_id', state.school.id)
    .order('full_name');
  if (error) throw new Error(error.message);
  state.students = data || [];
}

async function loadPackages() {
  const { data, error } = await client
    .from('finance_packages')
    .select('*')
    .eq('school_id', state.school.id)
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  state.packages = data || [];
}

async function loadDiscounts() {
  const { data, error } = await client
    .from('finance_discounts')
    .select('*')
    .eq('school_id', state.school.id)
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  state.discounts = data || [];
}

async function loadEntries() {
  const { data, error } = await client
    .from('finance_entries')
    .select('*')
    .eq('school_id', state.school.id)
    .order('created_at', { ascending: false })
    .limit(120);
  if (error) throw new Error(error.message);
  state.entries = data || [];
}

async function loadExpenses() {
  const { data, error } = await client
    .from('finance_expenses')
    .select('*')
    .eq('school_id', state.school.id)
    .order('created_at', { ascending: false })
    .limit(120);
  if (error) throw new Error(error.message);
  state.expenses = data || [];
}

function renderAll() {
  renderSelects();
  renderPackages();
  renderDiscounts();
  renderEntries();
  renderExpenses();
  renderKpis();
}

function renderSelects() {
  $('entryStudentId').innerHTML = '<option value="">Selecione um aluno</option>' +
    state.students.map((s) => `<option value="${s.id}">${escapeHtml(s.full_name)}</option>`).join('');

  $('entryPackageId').innerHTML = '<option value="">Selecione um pacote</option>' +
    state.packages.filter((p) => p.active).map((p) =>
      `<option value="${p.id}">${escapeHtml(p.name)} — ${money(p.default_amount)}</option>`
    ).join('');

  $('entryDiscountId').innerHTML = '<option value="">Sem desconto</option>' +
    state.discounts.filter((d) => d.active).map((d) => {
      const label = d.discount_type === 'percentual' ? `${d.value}%` : money(d.value);
      return `<option value="${d.id}">${escapeHtml(d.name)} — ${label}</option>`;
    }).join('');
}

function renderKpis() {
  const entradas = state.entries.reduce((acc, e) => acc + Number(e.amount_paid || 0), 0);
  const saidas = state.expenses.reduce((acc, e) => acc + Number(e.amount || 0), 0);
  $('totalEntradas').textContent = money(entradas);
  $('totalSaidas').textContent = money(saidas);
  $('saldoAtual').textContent = money(entradas - saidas);
  $('recibosCount').textContent = state.entries.length;
}

function renderPackages() {
  $('packagesList').innerHTML = state.packages.length ? state.packages.map((p) => `
    <article class="record">
      <div class="record-head">
        <div><strong>${escapeHtml(p.name)}</strong><br><small>${p.active ? 'Ativo' : 'Inativo'}</small></div>
        <span class="amount">${money(p.default_amount)}</span>
      </div>
      <p>${escapeHtml(p.description || 'Sem descrição.')}</p>
    </article>`).join('') : '<p class="muted">Nenhum pacote cadastrado ainda.</p>';
}

function renderDiscounts() {
  $('discountsList').innerHTML = state.discounts.length ? state.discounts.map((d) => {
    const value = d.discount_type === 'percentual' ? `${d.value}%` : money(d.value);
    return `<article class="record">
      <div class="record-head">
        <div><strong>${escapeHtml(d.name)}</strong><br><small>${d.discount_type === 'percentual' ? 'Percentual' : 'Valor fixo'} • ${d.active ? 'Ativo' : 'Inativo'}</small></div>
        <span class="amount">${value}</span>
      </div>
      <p>${escapeHtml(d.description || 'Sem descrição.')}</p>
    </article>`;
  }).join('') : '<p class="muted">Nenhum desconto cadastrado ainda.</p>';
}

function renderEntries() {
  $('entriesList').innerHTML = state.entries.length ? state.entries.map((e) => `
    <article class="record">
      <div class="record-head">
        <div>
          <strong>Recibo nº ${String(e.receipt_number || '').padStart(5, '0')}</strong><br>
          <small>${new Date(e.created_at).toLocaleString('pt-BR')} • ${escapeHtml(e.payment_method || '')}</small>
        </div>
        <span class="amount">${money(e.amount_paid)}</span>
      </div>
      <p><span class="badge">${escapeHtml(entryTypeLabel(e.entry_type || 'mensalidade'))}</span></p>
      <p><strong>Aluno/beneficiário:</strong> ${escapeHtml(e.student_name_snapshot)}</p>
      <p><strong>Responsável/Pagador:</strong> ${escapeHtml(e.payer_name)} — ${escapeHtml(e.payer_document)}</p>
      <p>${escapeHtml(e.description || e.package_name_snapshot || 'Pagamento registrado.')}</p>
      <button class="linkbtn" type="button" onclick='printExistingReceipt(${JSON.stringify(e).replace(/'/g, "&#039;")})'>Imprimir recibo</button>
    </article>`).join('') : '<p class="muted">Nenhuma entrada registrada ainda.</p>';
}

function renderExpenses() {
  $('expensesList').innerHTML = state.expenses.length ? state.expenses.map((e) => `
    <article class="record">
      <div class="record-head">
        <div><strong>${escapeHtml(e.description)}</strong><br><small>${new Date(e.expense_date + 'T00:00:00').toLocaleDateString('pt-BR')} • ${escapeHtml(e.category || 'Sem categoria')}</small></div>
        <span class="amount">${money(e.amount)}</span>
      </div>
      <p><strong>Para:</strong> ${escapeHtml(e.paid_to)}</p>
      <p><strong>Saiu de:</strong> ${escapeHtml(e.paid_by_name)}</p>
      <p>${escapeHtml(e.notes || '')}</p>
    </article>`).join('') : '<p class="muted">Nenhuma saída registrada ainda.</p>';
}

async function savePackage(event) {
  event.preventDefault();
  const payload = {
    school_id: state.school.id,
    name: $('packageName').value.trim(),
    description: $('packageDescription').value.trim() || null,
    default_amount: normalizeNumber($('packageAmount').value),
    created_by: state.user.id,
  };
  const { error } = await client.from('finance_packages').insert(payload);
  if (error) { showStatus(error.message, 'error'); return; }
  event.target.reset();
  showStatus('Pacote cadastrado com sucesso.');
  await loadPackages();
  renderAll();
}

async function saveDiscount(event) {
  event.preventDefault();
  const payload = {
    school_id: state.school.id,
    name: $('discountName').value.trim(),
    discount_type: $('discountType').value,
    value: normalizeNumber($('discountValue').value),
    description: $('discountDescription').value.trim() || null,
    created_by: state.user.id,
  };
  const { error } = await client.from('finance_discounts').insert(payload);
  if (error) { showStatus(error.message, 'error'); return; }
  event.target.reset();
  showStatus('Desconto cadastrado com sucesso.');
  await loadDiscounts();
  renderAll();
}

async function saveExpense(event) {
  event.preventDefault();
  const payload = {
    school_id: state.school.id,
    description: $('expenseDescription').value.trim(),
    amount: normalizeNumber($('expenseAmount').value),
    paid_to: $('paidTo').value.trim(),
    paid_by_name: $('paidByName').value.trim(),
    category: $('expenseCategory').value.trim() || null,
    expense_date: $('expenseDate').value || todayISO(),
    notes: $('expenseNotes').value.trim() || null,
    created_by: state.user.id,
  };
  const { error } = await client.from('finance_expenses').insert(payload);
  if (error) { showStatus(error.message, 'error'); return; }
  event.target.reset();
  $('expenseDate').value = todayISO();
  showStatus('Saída registrada com sucesso.');
  await loadExpenses();
  renderAll();
}

function fillDefaultDescription() {
  if ($('entryDescription').value.trim()) return;
  const type = $('entryType').value;
  const label = entryTypeLabel(type);
  $('entryDescription').value = type === 'mensalidade'
    ? 'Pagamento de mensalidade.'
    : `Recebimento referente a ${label.toLowerCase()}.`;
}

function applyPackage() {
  const p = state.packages.find((x) => x.id === $('entryPackageId').value);
  if (p) {
    $('grossAmount').value = Number(p.default_amount || 0).toFixed(2);
    if (!$('entryDescription').value.trim()) {
      $('entryDescription').value = `Pagamento referente ao pacote ${p.name}.`;
    }
  }
  applyDiscount();
}

function applyDiscount() {
  const gross = normalizeNumber($('grossAmount').value);
  const d = state.discounts.find((x) => x.id === $('entryDiscountId').value);
  let discount = 0;
  if (d) {
    discount = d.discount_type === 'percentual' ? gross * (Number(d.value || 0) / 100) : Number(d.value || 0);
  }
  discount = Math.min(discount, gross);
  $('discountAmount').value = discount.toFixed(2);
  recalcAmountPaid();
}

function recalcAmountPaid() {
  const gross = normalizeNumber($('grossAmount').value);
  const discount = normalizeNumber($('discountAmount').value);
  $('amountPaid').value = Math.max(gross - discount, 0).toFixed(2);
}

async function saveEntryAndPrint(event) {
  event.preventDefault();
  const selectedStudent = state.students.find((s) => s.id === $('entryStudentId').value);
  const manualStudent = $('entryStudentManual').value.trim();
  const studentName = selectedStudent?.full_name || manualStudent || 'Não informado';
  const payerName = $('payerName').value.trim();
  const payerDocument = $('payerDocument').value.trim();

  if (!payerName || !payerDocument) {
    showStatus('Informe nome completo e CPF/CNPJ do responsável/pagador.', 'error');
    return;
  }

  const p = state.packages.find((x) => x.id === $('entryPackageId').value);
  const d = state.discounts.find((x) => x.id === $('entryDiscountId').value);
  const description = $('entryDescription').value.trim();

  const payload = {
    school_id: state.school.id,
    entry_type: $('entryType').value,
    entry_date: todayISO(),
    student_id: selectedStudent?.id || null,
    student_name_snapshot: studentName,
    payer_name: payerName,
    payer_document: payerDocument,
    package_id: p?.id || null,
    package_name_snapshot: p?.name || null,
    discount_id: d?.id || null,
    discount_name_snapshot: d?.name || null,
    gross_amount: normalizeNumber($('grossAmount').value),
    discount_amount: normalizeNumber($('discountAmount').value),
    amount_paid: normalizeNumber($('amountPaid').value),
    payment_method: $('paymentMethod').value,
    competence_month: $('competenceMonth').value.trim() || null,
    description,
    created_by: state.user.id,
  };

  const { data, error } = await client.from('finance_entries').insert(payload).select('*').single();
  if (error) { showStatus(error.message, 'error'); return; }

  showStatus('Entrada registrada. Abrindo recibo para impressão.');
  event.target.reset();
  await loadEntries();
  renderAll();
  printReceipt(data);
}

window.printExistingReceipt = function(entry) {
  printReceipt(entry);
};

function printReceipt(entry) {
  const receiptNo = String(entry.receipt_number || '').padStart(5, '0');
  const issuedAt = new Date(entry.created_at || new Date()).toLocaleString('pt-BR');
  const schoolName = state.school?.name || 'INSTITUTO INTEGRO';
  const typeLabel = entryTypeLabel(entry.entry_type || 'mensalidade');
  const description = entry.description || entry.package_name_snapshot || `Pagamento de ${typeLabel.toLowerCase()}.`;

  const via = (label) => `
    <section class="receipt">
      <div class="header"><h1>RECIBO Nº ${receiptNo}</h1><strong>${escapeHtml(label)}</strong></div>
      <p><strong>Emitente:</strong> ${escapeHtml(schoolName)}</p>
      <p><strong>Tipo de entrada:</strong> ${escapeHtml(typeLabel)}</p>
      <p><strong>Recebemos de:</strong> ${escapeHtml(entry.payer_name)}</p>
      <p><strong>CPF/CNPJ:</strong> ${escapeHtml(entry.payer_document)}</p>
      <p><strong>Aluno/beneficiário:</strong> ${escapeHtml(entry.student_name_snapshot)}</p>
      <p><strong>Descrição:</strong> ${escapeHtml(description)}</p>
      <div class="values">
        <p><strong>Valor bruto:</strong> ${money(entry.gross_amount)}</p>
        <p><strong>Desconto:</strong> ${money(entry.discount_amount)}</p>
        <p><strong>Valor recebido:</strong> ${money(entry.amount_paid)}</p>
      </div>
      <p><strong>Forma de pagamento:</strong> ${escapeHtml(entry.payment_method || '')}</p>
      <p><strong>Referência:</strong> ${escapeHtml(entry.competence_month || '')}</p>
      <p><strong>Data de emissão:</strong> ${issuedAt}</p>
      <div class="signature"><span></span><p>Assinatura / INTEGRO</p></div>
    </section>`;

  const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/><title>Recibo ${receiptNo}</title><style>body{font-family:Arial,Helvetica,sans-serif;color:#073b31;margin:24px}.receipt{border:2px solid #0b6b4e;border-radius:16px;padding:22px;margin-bottom:22px;page-break-inside:avoid}.header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid #cfe4d9;padding-bottom:12px;margin-bottom:12px}h1{font-size:22px;margin:0;color:#004b38}p{font-size:14px;line-height:1.45}.values{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;background:#f4fbf7;border:1px solid #d8e7df;border-radius:12px;padding:8px 12px;margin:12px 0}.signature{margin-top:42px;text-align:center}.signature span{display:block;border-top:1px solid #073b31;width:260px;margin:0 auto}@media print{button{display:none}body{margin:10mm}}</style></head><body>${via('Via do responsável')}${via('Via do INTEGRO')}<script>window.onload=()=>{window.print();}<\/script></body></html>`;

  const w = window.open('', '_blank');
  if (!w) {
    showStatus('O navegador bloqueou a janela do recibo. Libere pop-ups para imprimir.', 'error');
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}

function periodRange(period, dateISO) {
  const base = dateISO ? new Date(`${dateISO}T12:00:00`) : new Date();
  let start;
  let end;
  if (period === 'annual') {
    start = new Date(base.getFullYear(), 0, 1);
    end = new Date(base.getFullYear() + 1, 0, 1);
  } else if (period === 'monthly') {
    start = new Date(base.getFullYear(), base.getMonth(), 1);
    end = new Date(base.getFullYear(), base.getMonth() + 1, 1);
  } else {
    const day = base.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    start = new Date(base);
    start.setDate(base.getDate() + diffToMonday);
    start.setHours(0, 0, 0, 0);
    end = new Date(start);
    end.setDate(start.getDate() + 7);
  }
  return { start, end };
}

function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}

function periodLabel(period, start, end) {
  if (period === 'annual') return `Ano de ${start.getFullYear()}`;
  if (period === 'monthly') return start.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const endDisplay = new Date(end);
  endDisplay.setDate(endDisplay.getDate() - 1);
  return `${start.toLocaleDateString('pt-BR')} a ${endDisplay.toLocaleDateString('pt-BR')}`;
}

async function getReportData() {
  const period = $('reportPeriod').value;
  const { start, end } = periodRange(period, $('reportDate').value);
  const label = periodLabel(period, start, end);

  const { data: entries, error: entriesError } = await client
    .from('finance_entries')
    .select('*')
    .eq('school_id', state.school.id)
    .gte('created_at', start.toISOString())
    .lt('created_at', end.toISOString())
    .order('created_at', { ascending: true });

  if (entriesError) throw new Error(entriesError.message);

  const { data: expenses, error: expensesError } = await client
    .from('finance_expenses')
    .select('*')
    .eq('school_id', state.school.id)
    .gte('expense_date', fmtDate(start))
    .lt('expense_date', fmtDate(end))
    .order('expense_date', { ascending: true });

  if (expensesError) throw new Error(expensesError.message);

  const totalEntries = (entries || []).reduce((acc, e) => acc + Number(e.amount_paid || 0), 0);
  const totalExpenses = (expenses || []).reduce((acc, e) => acc + Number(e.amount || 0), 0);

  return {
    period,
    label,
    start,
    end,
    entries: entries || [],
    expenses: expenses || [],
    totalEntries,
    totalExpenses,
    balance: totalEntries - totalExpenses,
  };
}

function renderReportPreview(report) {
  $('reportPreview').innerHTML = `
    <h3>${escapeHtml(report.label)}</h3>
    <div class="report-grid">
      <div class="report-stat"><small>Entradas</small><strong>${money(report.totalEntries)}</strong></div>
      <div class="report-stat"><small>Saídas</small><strong>${money(report.totalExpenses)}</strong></div>
      <div class="report-stat"><small>Saldo</small><strong>${money(report.balance)}</strong></div>
      <div class="report-stat"><small>Movimentos</small><strong>${report.entries.length + report.expenses.length}</strong></div>
    </div>`;
}

function csvCell(value) {
  const str = String(value ?? '').replace(/\r?\n/g, ' ');
  return `"${str.replace(/"/g, '""')}"`;
}

function buildReportRows(report) {
  const rows = [];
  report.entries.forEach((e) => {
    rows.push({
      movimento: 'Entrada',
      data: new Date(e.created_at).toLocaleDateString('pt-BR'),
      categoria: entryTypeLabel(e.entry_type || 'mensalidade'),
      descricao: e.description || e.package_name_snapshot || 'Entrada registrada',
      aluno_ou_beneficiario: e.student_name_snapshot || '',
      pessoa_destino: e.payer_name || '',
      documento: e.payer_document || '',
      forma_pagamento: e.payment_method || '',
      valor: Number(e.amount_paid || 0),
    });
  });
  report.expenses.forEach((e) => {
    rows.push({
      movimento: 'Saída',
      data: new Date(e.expense_date + 'T00:00:00').toLocaleDateString('pt-BR'),
      categoria: e.category || 'Saída',
      descricao: e.description || '',
      aluno_ou_beneficiario: '',
      pessoa_destino: e.paid_to || '',
      documento: '',
      forma_pagamento: e.paid_by_name || '',
      valor: -Number(e.amount || 0),
    });
  });
  return rows.sort((a, b) => a.data.localeCompare(b.data));
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function downloadCsvReport(event) {
  event.preventDefault();
  try {
    const report = await getReportData();
    state.lastReport = report;
    renderReportPreview(report);
    const headers = ['movimento', 'data', 'categoria', 'descricao', 'aluno_ou_beneficiario', 'pessoa_destino', 'documento', 'forma_pagamento', 'valor'];
    const rows = buildReportRows(report);
    const summary = [
      ['Relatório', report.label],
      ['Escola', state.school.name],
      ['Entradas', report.totalEntries],
      ['Saídas', report.totalExpenses],
      ['Saldo', report.balance],
      [],
    ];
    const csv = '\ufeff' +
      summary.map((r) => r.map(csvCell).join(';')).join('\n') + '\n' +
      headers.map(csvCell).join(';') + '\n' +
      rows.map((r) => headers.map((h) => csvCell(h === 'valor' ? r[h].toFixed(2).replace('.', ',') : r[h])).join(';')).join('\n');
    const safeLabel = report.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
    downloadBlob(csv, `relatorio-financeiro-${safeLabel}.csv`, 'text/csv;charset=utf-8');
    showStatus('Relatório CSV baixado com sucesso.');
  } catch (err) {
    showStatus(err.message || 'Erro ao gerar relatório.', 'error');
  }
}

async function downloadHtmlReport() {
  try {
    const report = state.lastReport || await getReportData();
    state.lastReport = report;
    renderReportPreview(report);
    const rows = buildReportRows(report);
    const trs = rows.map((r) => `<tr><td>${escapeHtml(r.movimento)}</td><td>${escapeHtml(r.data)}</td><td>${escapeHtml(r.categoria)}</td><td>${escapeHtml(r.descricao)}</td><td>${escapeHtml(r.aluno_ou_beneficiario)}</td><td>${escapeHtml(r.pessoa_destino)}</td><td>${escapeHtml(r.forma_pagamento)}</td><td style="text-align:right">${money(r.valor)}</td></tr>`).join('');
    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Relatório Financeiro</title><style>body{font-family:Arial,Helvetica,sans-serif;color:#073b31;margin:24px}h1{color:#004b38}.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:18px 0}.summary div{border:1px solid #d8e7df;border-radius:12px;padding:12px;background:#f4fbf7}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d8e7df;padding:8px;font-size:12px}th{background:#e8f5ef;color:#004b38;text-align:left}@media print{body{margin:10mm}}</style></head><body><h1>Relatório Financeiro INTEGRO</h1><p><strong>Escola:</strong> ${escapeHtml(state.school.name)}</p><p><strong>Período:</strong> ${escapeHtml(report.label)}</p><div class="summary"><div><small>Entradas</small><h2>${money(report.totalEntries)}</h2></div><div><small>Saídas</small><h2>${money(report.totalExpenses)}</h2></div><div><small>Saldo</small><h2>${money(report.balance)}</h2></div></div><table><thead><tr><th>Movimento</th><th>Data</th><th>Categoria</th><th>Descrição</th><th>Aluno/beneficiário</th><th>Pessoa/destino</th><th>Forma/Saiu de</th><th>Valor</th></tr></thead><tbody>${trs || '<tr><td colspan="8">Nenhum movimento no período.</td></tr>'}</tbody></table></body></html>`;
    const safeLabel = report.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
    downloadBlob(html, `relatorio-financeiro-${safeLabel}.html`, 'text/html;charset=utf-8');
    showStatus('Relatório para impressão baixado com sucesso.');
  } catch (err) {
    showStatus(err.message || 'Erro ao gerar relatório.', 'error');
  }
}

init().catch((err) => {
  console.error(err);
  showStatus(err.message || 'Erro ao carregar gestão financeira.', 'error');
});
