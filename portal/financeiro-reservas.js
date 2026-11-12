(function () {
  'use strict';
  const root = document.getElementById('reservasRoot');
  if (!root) return;
  const labels = {
    aguardando_pagamento: 'Aguardando pagamento', aguardando_ativacao: 'Paga · aguardando ativação',
    credito_disponivel: 'Crédito disponível', credito_vinculado: 'Crédito vinculado à cobrança',
    credito_utilizado: 'Crédito utilizado', conciliacao: 'Conferir com a direção'
  };
  const money = n => Number(n || 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const safe = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = v => String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const date = v => v ? new Date(v.length === 10 ? `${v}T12:00:00` : v).toLocaleDateString('pt-BR') : '—';
  let rows = [], loading = false, loaded = false;
  root.innerHTML = `<style>
    #reservasRoot{color:var(--text,#193b31)}
    .res-head{display:flex;justify-content:space-between;gap:16px;align-items:start;flex-wrap:wrap}
    .res-head h2{margin:0 0 8px}.res-head p{max-width:730px;line-height:1.5;margin:0 0 18px;color:#52655e}
    .res-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:16px 0 24px}
    .res-summary div{border:1px solid #dae5dc;border-radius:16px;padding:18px;background:#f5f8f1}
    .res-summary span{display:block;font-size:13px;color:#52655e}.res-summary strong{display:block;font-size:25px;margin:8px 0}
    .res-filters{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px}.res-filters label{flex:1;min-width:220px}
    .res-filters input,.res-filters select{width:100%;margin-top:6px;min-height:44px}
    .res-list{display:grid;gap:12px}.res-card{border:1px solid #dbe5dd;border-radius:16px;padding:20px;background:white}
    .res-card header{display:flex;gap:12px;justify-content:space-between;flex-wrap:wrap}.res-card h3{margin:0 0 5px;font-size:18px}
    .res-card p{margin:6px 0;color:#52655e}.res-tag{border-radius:20px;padding:7px 12px;font-size:13px;background:#edf3e9;align-self:start}
    .res-tag[data-status=conciliacao]{background:#fff1db;color:#704700}.res-card details{border-top:1px solid #e7ece7;margin-top:14px;padding-top:12px}
    .res-card summary{cursor:pointer;font-weight:600}.res-details{display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;margin-top:12px}
    .res-note{font-size:13px;color:#647168;line-height:1.5}.res-empty{padding:30px;text-align:center;background:#f5f8f1;border-radius:16px}
    #resMessage{margin:14px 0}#resMessage[data-error=true]{color:#9c2929}
    @media(max-width:650px){.res-summary{grid-template-columns:1fr 1fr}.res-summary div{padding:12px}.res-summary strong{font-size:22px}.res-details{grid-template-columns:1fr}.res-card{padding:16px}}
  </style>
  <div class="res-head"><div><h2>Reservas de matrícula</h2>
  <p>Acompanhe as pré-matrículas e o crédito de R$ 50,00 de cada reserva paga, até o abatimento na primeira mensalidade.</p></div>
  <button type="button" class="btn" id="resRefresh">Atualizar reservas</button></div>
  <div id="resMessage" role="status" aria-live="polite">Abra esta aba para consultar as reservas.</div>
  <div id="resContent" hidden><div class="res-summary" id="resSummary"></div>
  <div class="res-filters"><label>Buscar aluno ou responsável<input id="resSearch" type="search" placeholder="Digite um nome" autocomplete="off"></label>
  <label>Situação<select id="resFilter"><option value="">Todas as situações</option>${Object.entries(labels).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></label></div>
  <p id="resCount" class="res-note"></p><div id="resList" class="res-list"></div>
  <p class="res-note">O pagamento da reserva é registrado na Frente de caixa. Após a ativação do aluno, o crédito é aplicado uma única vez na primeira mensalidade. Esta área acompanha os registros; os valores já fazem parte das entradas do financeiro.</p></div>`;
  const $ = id => document.getElementById(id);
  function render() {
    const sum = predicate => rows.filter(predicate).reduce((n,r)=>n+Number(r.credit_amount || 0),0);
    $('resSummary').innerHTML = [
      ['Reservas pagas',money(sum(r=>r.payment_valid))],
      ['Créditos ainda não utilizados',money(sum(r=>r.payment_valid && !r.tuition_receipt))],
      ['Créditos utilizados',money(sum(r=>r.payment_valid && !!r.tuition_receipt))],
      ['Aguardando pagamento',String(rows.filter(r=>r.status==='aguardando_pagamento').length)]
    ].map(([label,value])=>`<div><span>${label}</span><strong>${value}</strong></div>`).join('');
    const q = normalize($('resSearch').value), status = $('resFilter').value;
    const filtered = rows.filter(r=>(!status || r.status===status) && normalize(`${r.student_name} ${r.guardian_name || ''}`).includes(q));
    $('resCount').textContent = `${filtered.length} de ${rows.length} reserva(s) · Totais acima consideram todas as reservas.`;
    $('resList').innerHTML = filtered.length ? filtered.map(r=>`<article class="res-card">
      <header><div><h3>${safe(r.student_name || 'Aluno sem nome')}</h3><p>Responsável: ${safe(r.guardian_name || 'Não informado')}</p></div>
      <span class="res-tag" data-status="${safe(r.status)}">${safe(labels[r.status] || 'Conferir com a direção')}</span></header>
      <p>${r.payment_valid ? `Reserva paga: <strong>${money(r.credit_amount)}</strong>` : r.reserve_receipt ? 'Pagamento requer conferência.' : 'Reserva de R$ 50,00 · pagamento ainda não confirmado'}</p>
      <details><summary>Ver detalhes da reserva</summary><div class="res-details">
      <p>Reserva cadastrada: <strong>${safe(date(r.reserved_at || r.registered_at))}</strong></p>
      <p>Matrícula: <strong>${!r.active ? 'Inativa' : r.enrollment_status==='matriculado' ? 'Ativada' : 'Pré-matrícula'}</strong></p>
      <p>Recibo da reserva: <strong>${safe(r.reserve_receipt || '—')}</strong></p><p>Data do pagamento: <strong>${safe(date(r.paid_date))}</strong></p>
      <p>Recibo da mensalidade: <strong>${safe(r.tuition_receipt || '—')}</strong></p><p>Data do abatimento: <strong>${safe(date(r.used_date))}</strong></p>
      ${r.tuition_receipt ? `<p>Competência: <strong>${safe(r.competence_month || '—')}</strong></p><p>Mensalidade recebida: <strong>${money(r.tuition_paid)}</strong></p>` : ''}
      ${r.charge_status ? `<p>Última cobrança: <strong>${safe(r.charge_provider)} · ${safe(({creating:'Em criação',pending:'Pendente',uncertain:'Em verificação',paid:'Paga',canceled:'Cancelada',refunded:'Estornada',rejected:'Recusada',expired:'Expirada'})[r.charge_status] || 'Em verificação')}</strong></p>` : ''}
      </div>${r.status==='credito_vinculado' ? '<p class="res-note">Crédito reservado para um recebimento em andamento. Confira a cobrança antes de tentar receber novamente.</p>' : ''}
      ${r.status==='conciliacao' ? '<p class="res-note">Confira a situação da matrícula, o pagamento e os recibos com a direção antes de usar o crédito.</p>' : ''}</details></article>`).join('') : `<div class="res-empty">${rows.length ? 'Nenhuma reserva corresponde à busca.' : 'Nenhuma reserva de matrícula cadastrada nesta escola.'}</div>`;
  }
  async function refresh() {
    if (loading) return;
    loading = true; $('resRefresh').disabled = true; $('resMessage').dataset.error = 'false';
    $('resMessage').textContent = 'Consultando reservas…';
    try {
      const cfg = window.INTEGRO_SUPABASE;
      if (!cfg || !window.supabase?.createClient) throw new Error('Configuração indisponível');
      const api = window.__integroReservationsClient ||= window.supabase.createClient(cfg.url,cfg.anonKey);
      const {data,error} = await api.rpc('finance_reservations_list');
      if (error || !Array.isArray(data)) throw error || new Error('Resposta inválida');
      rows = data; loaded = true; render(); $('resContent').hidden = false;
      $('resMessage').textContent = `Atualizado às ${new Date().toLocaleTimeString('pt-BR')}.`;
    } catch (error) {
      $('resContent').hidden = true;
      $('resMessage').dataset.error = 'true';
      $('resMessage').textContent = 'Não foi possível consultar as reservas. Verifique sua conexão e o acesso financeiro e toque em Atualizar reservas.';
    } finally {loading = false; $('resRefresh').disabled = false;}
  }
  $('resRefresh').addEventListener('click',refresh);
  $('resSearch').addEventListener('input',render); $('resFilter').addEventListener('change',render);
  document.querySelector('[data-tab="reservas"]')?.addEventListener('click',refresh);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden && document.getElementById('reservas').classList.contains('active')) refresh();});
  setInterval(()=>{if(loaded && !document.hidden && document.getElementById('reservas').classList.contains('active')) refresh();},60000);
})();
