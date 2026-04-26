// Patch INTEGRO: edição e exclusão de lançamentos financeiros com credenciais de diretor.
// Este arquivo deve ser carregado depois de financeiro.js.

function modalStatus(message, type = 'error') {
  const box = $('directorModalMessage');
  if (!box) return;
  box.hidden = !message;
  box.className = `status small ${type}`;
  box.textContent = message || '';
}

function openDirectorModal(action) {
  state.directorAction = action;
  modalStatus('');
  $('directorActionForm').reset();
  $('directorEditFields').innerHTML = action.mode === 'edit'
    ? buildEditFields(action.recordType, action.record)
    : buildDeleteSummary(action.recordType, action.record);
  $('directorModalTitle').textContent = action.mode === 'edit' ? 'Editar lançamento financeiro' : 'Excluir lançamento financeiro';
  $('directorModalDescription').textContent = action.mode === 'edit'
    ? 'Revise os campos abaixo. Para salvar, informe as credenciais de diretor/administrador.'
    : 'Esta ação excluirá o lançamento selecionado. Informe as credenciais de diretor/administrador para confirmar.';
  $('directorConfirmBtn').textContent = action.mode === 'edit' ? 'Salvar alteração' : 'Excluir lançamento';
  $('directorConfirmBtn').className = action.mode === 'edit' ? 'btn primary' : 'btn danger';
  $('directorModal').hidden = false;
}

function closeDirectorModal() {
  state.directorAction = null;
  $('directorModal').hidden = true;
  $('directorEditFields').innerHTML = '';
  modalStatus('');
}

function buildDeleteSummary(recordType, record) {
  if (recordType === 'entry') {
    return `
      <div class="full danger-summary">
        <strong>Entrada selecionada</strong>
        <p>Recibo nº ${String(record.receipt_number || '').padStart(5, '0')} — ${escapeHtml(record.student_name_snapshot || 'Beneficiário não informado')}</p>
        <p><strong>Valor:</strong> ${money(record.amount_paid)} • <strong>Pagador:</strong> ${escapeHtml(record.payer_name || '-')}</p>
      </div>`;
  }
  return `
    <div class="full danger-summary">
      <strong>Saída selecionada</strong>
      <p>${escapeHtml(record.description || 'Saída sem descrição')}</p>
      <p><strong>Valor:</strong> ${money(record.amount)} • <strong>Para:</strong> ${escapeHtml(record.paid_to || '-')}</p>
    </div>`;
}

function buildEditFields(recordType, record) {
  if (recordType === 'entry') {
    return `
      <label>
        Tipo de entrada
        <select id="edit_entry_type">
          <option value="mensalidade" ${record.entry_type === 'mensalidade' ? 'selected' : ''}>Mensalidade</option>
          <option value="matricula" ${record.entry_type === 'matricula' ? 'selected' : ''}>Matrícula</option>
          <option value="avaliacao" ${record.entry_type === 'avaliacao' ? 'selected' : ''}>Avaliação / diagnóstico</option>
          <option value="material" ${record.entry_type === 'material' ? 'selected' : ''}>Material</option>
          <option value="servico" ${record.entry_type === 'servico' ? 'selected' : ''}>Serviço / atendimento avulso</option>
          <option value="taxa" ${record.entry_type === 'taxa' ? 'selected' : ''}>Taxa</option>
          <option value="outro" ${record.entry_type === 'outro' ? 'selected' : ''}>Outra entrada</option>
        </select>
      </label>
      <label>
        Data da entrada
        <input id="edit_entry_date" type="date" value="${escapeHtml(record.entry_date || String(record.created_at || '').slice(0, 10) || todayISO())}" />
      </label>
      <label>
        Aluno / beneficiário
        <input id="edit_student_name_snapshot" type="text" value="${escapeHtml(record.student_name_snapshot || '')}" />
      </label>
      <label>
        Responsável / pagador
        <input id="edit_payer_name" type="text" value="${escapeHtml(record.payer_name || '')}" />
      </label>
      <label>
        CPF/CNPJ
        <input id="edit_payer_document" type="text" value="${escapeHtml(record.payer_document || '')}" />
      </label>
      <label>
        Valor bruto
        <input id="edit_gross_amount" type="number" min="0" step="0.01" value="${Number(record.gross_amount || 0).toFixed(2)}" />
      </label>
      <label>
        Desconto
        <input id="edit_discount_amount" type="number" min="0" step="0.01" value="${Number(record.discount_amount || 0).toFixed(2)}" />
      </label>
      <label>
        Valor pago
        <input id="edit_amount_paid" type="number" min="0" step="0.01" value="${Number(record.amount_paid || 0).toFixed(2)}" />
      </label>
      <label>
        Forma de pagamento
        <input id="edit_payment_method" type="text" value="${escapeHtml(record.payment_method || '')}" />
      </label>
      <label>
        Referência
        <input id="edit_competence_month" type="text" value="${escapeHtml(record.competence_month || '')}" />
      </label>
      <label class="full">
        Descrição
        <textarea id="edit_description" rows="3">${escapeHtml(record.description || '')}</textarea>
      </label>`;
  }

  return `
    <label class="full">
      Descrição da saída
      <textarea id="edit_description" rows="3">${escapeHtml(record.description || '')}</textarea>
    </label>
    <label>
      Valor
      <input id="edit_amount" type="number" min="0" step="0.01" value="${Number(record.amount || 0).toFixed(2)}" />
    </label>
    <label>
      Para onde / para quem foi
      <input id="edit_paid_to" type="text" value="${escapeHtml(record.paid_to || '')}" />
    </label>
    <label>
      De quem saiu
      <input id="edit_paid_by_name" type="text" value="${escapeHtml(record.paid_by_name || '')}" />
    </label>
    <label>
      Categoria
      <input id="edit_category" type="text" value="${escapeHtml(record.category || '')}" />
    </label>
    <label>
      Data da saída
      <input id="edit_expense_date" type="date" value="${escapeHtml(record.expense_date || todayISO())}" />
    </label>
    <label class="full">
      Observações
      <textarea id="edit_notes" rows="2">${escapeHtml(record.notes || '')}</textarea>
    </label>`;
}

function collectEditChanges(recordType) {
  if (recordType === 'entry') {
    return {
      entry_type: $('edit_entry_type').value,
      entry_date: $('edit_entry_date').value || todayISO(),
      student_name_snapshot: $('edit_student_name_snapshot').value.trim() || 'Não informado',
      payer_name: $('edit_payer_name').value.trim(),
      payer_document: $('edit_payer_document').value.trim(),
      gross_amount: normalizeNumber($('edit_gross_amount').value),
      discount_amount: normalizeNumber($('edit_discount_amount').value),
      amount_paid: normalizeNumber($('edit_amount_paid').value),
      payment_method: $('edit_payment_method').value.trim() || null,
      competence_month: $('edit_competence_month').value.trim() || null,
      description: $('edit_description').value.trim() || null,
    };
  }

  return {
    description: $('edit_description').value.trim(),
    amount: normalizeNumber($('edit_amount').value),
    paid_to: $('edit_paid_to').value.trim(),
    paid_by_name: $('edit_paid_by_name').value.trim(),
    category: $('edit_category').value.trim() || null,
    expense_date: $('edit_expense_date').value || todayISO(),
    notes: $('edit_notes').value.trim() || null,
  };
}

async function callDirectorFinanceAction(payload) {
  const { data } = await client.auth.getSession();
  const token = data?.session?.access_token;
  if (!token) throw new Error('Sessão expirada. Faça login novamente.');

  const response = await fetch(`${cfg.url}/functions/v1/finance-director-action`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.error) {
    throw new Error(result.error || 'Erro ao executar ação financeira.');
  }
  return result;
}

async function handleDirectorActionSubmit(event) {
  event.preventDefault();
  if (!state.directorAction) return;

  const action = state.directorAction;
  const director_email = $('directorEmail').value.trim();
  const director_password = $('directorPassword').value;
  const reason = $('directorReason').value.trim();

  if (!director_email || !director_password || !reason) {
    modalStatus('Informe e-mail, senha e justificativa do diretor.', 'error');
    return;
  }

  const changes = action.mode === 'edit' ? collectEditChanges(action.recordType) : null;
  $('directorConfirmBtn').disabled = true;
  $('directorConfirmBtn').textContent = 'Processando...';
  modalStatus('Validando credenciais e registrando auditoria...', 'ok');

  try {
    await callDirectorFinanceAction({
      action: action.mode === 'edit' ? 'update' : 'delete',
      record_type: action.recordType,
      record_id: action.record.id,
      changes,
      reason,
      director_email,
      director_password,
    });
    closeDirectorModal();
    showStatus(action.mode === 'edit' ? 'Lançamento atualizado com autorização do diretor.' : 'Lançamento excluído com autorização do diretor.');
    await reloadAll();
  } catch (err) {
    modalStatus(err.message || 'Erro ao confirmar ação.', 'error');
  } finally {
    $('directorConfirmBtn').disabled = false;
    $('directorConfirmBtn').textContent = action.mode === 'edit' ? 'Salvar alteração' : 'Excluir lançamento';
  }
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
      <div class="record-actions">
        <button class="linkbtn" type="button" onclick='printExistingReceipt(${JSON.stringify(e).replace(/'/g, "&#039;")})'>Imprimir recibo</button>
        <button class="linkbtn" type="button" onclick="openFinanceEdit('entry','${e.id}')">Editar</button>
        <button class="linkbtn danger-text" type="button" onclick="openFinanceDelete('entry','${e.id}')">Excluir</button>
      </div>
      <small class="director-note">Editar/excluir exige credenciais de diretor.</small>
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
      <div class="record-actions">
        <button class="linkbtn" type="button" onclick="openFinanceEdit('expense','${e.id}')">Editar</button>
        <button class="linkbtn danger-text" type="button" onclick="openFinanceDelete('expense','${e.id}')">Excluir</button>
      </div>
      <small class="director-note">Editar/excluir exige credenciais de diretor.</small>
    </article>`).join('') : '<p class="muted">Nenhuma saída registrada ainda.</p>';
}

window.openFinanceEdit = function(recordType, recordId) {
  const source = recordType === 'entry' ? state.entries : state.expenses;
  const record = source.find((item) => item.id === recordId);
  if (!record) { showStatus('Lançamento não encontrado.', 'error'); return; }
  openDirectorModal({ mode: 'edit', recordType, record });
};

window.openFinanceDelete = function(recordType, recordId) {
  const source = recordType === 'entry' ? state.entries : state.expenses;
  const record = source.find((item) => item.id === recordId);
  if (!record) { showStatus('Lançamento não encontrado.', 'error'); return; }
  openDirectorModal({ mode: 'delete', recordType, record });
};

function bindDirectorPatchEvents() {
  $('directorActionForm')?.addEventListener('submit', handleDirectorActionSubmit);
  $('directorCancelBtn')?.addEventListener('click', closeDirectorModal);
  $('directorModalClose')?.addEventListener('click', closeDirectorModal);
  document.querySelectorAll('[data-close-director-modal]').forEach((el) => el.addEventListener('click', closeDirectorModal));
}

bindDirectorPatchEvents();
setTimeout(() => {
  try { renderAll(); } catch (err) { console.warn('Patch financeiro diretor aguardando dados.', err); }
}, 600);
