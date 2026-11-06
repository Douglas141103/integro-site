import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.8/+esm';
import {bindPortalLogin} from '../portal/login-form.mjs';
import {normalizeWithdrawal} from '../supabase/functions/collaborator-wallet/contract.mjs';
const cfg=window.INTEGRO_SUPABASE;
const db=createClient(cfg.url,cfg.anonKey);
const $=id=>document.getElementById(id);
const state={data:null,hidden:false,tab:'overview',draft:null,draftLocked:false,fund:null,busy:false};
const money=v=>Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const date=v=>v?new Date(v.length===10?v+'T12:00:00':v).toLocaleDateString('pt-BR',{timeZone:'America/Manaus'}):'—';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={available:'Disponível',posted:'Registrado',awaiting_cash:'Aguardando entrega',awaiting_deposit:'Aguardando depósito',awaiting_settlement:'Aguardando liberação',reserved:'Reservado',submitting:'Enviando',uncertain:'Em conferência',PENDING:'Aguardando processamento',BANK_PROCESSING:'Processando',BLOCKED:'Aguardando autorização',DONE:'Concluída',FAILED:'Não concluída',CANCELLED:'Cancelada'};
let messageTimer;
function notify(message,error=false){$('message').textContent=message;$('message').className=error?'error':'';$('message').hidden=false;clearTimeout(messageTimer);messageTimer=setTimeout(()=>$('message').hidden=true,9000);}
async function api(action,data={}){
 const {data:{session},error}=await db.auth.getSession();if(error||!session)throw Error('Sua sessão expirou. Entre novamente.');
 const response=await fetch(cfg.url+'/functions/v1/collaborator-wallet',{method:'POST',headers:{authorization:'Bearer '+session.access_token,apikey:cfg.anonKey,'Content-Type':'application/json'},body:JSON.stringify({action,...data}),signal:AbortSignal.timeout(55000)});
 let result;try{result=await response.json();}catch{throw Error('Não foi possível confirmar a resposta. Atualize o extrato antes de tentar novamente.');}
 if(!response.ok||result.error)throw Error(result.error||'Operação indisponível.');return result;
}
function badge(status){return '<span class="badge '+(['FAILED','CANCELLED'].includes(status)?'failed':!['posted','available','DONE'].includes(status)?'pending':'')+'">'+esc(labels[status]||status)+'</span>';}
function shown(amount){return state.hidden?'••••••':money(amount);}
function empty(title,description){return '<div class="empty"><strong>'+esc(title)+'</strong><p>'+esc(description)+'</p></div>';}
function rows(items){return items.length?items.map(t=>'<button class="transaction" data-entry="'+esc(t.id)+'"><span class="tx-icon '+(t.amount<0?'debit':'')+'">'+(t.amount<0?'→':'↓')+'</span><span class="tx-info"><strong>'+esc(t.title)+'</strong><small>'+date(t.occurred_on)+' · '+esc(t.reference)+'</small></span><span class="tx-value '+(t.amount<0?'debit':'')+'"><strong>'+(state.hidden?'':t.amount>0?'+ ':'− ')+shown(Math.abs(t.amount))+'</strong>'+badge(t.state)+'</span></button>').join(''):empty('Nenhuma movimentação por aqui.','Os registros aparecerão conforme os recebimentos e lançamentos.');}
function filtered(){return (state.data?.ledger||[]).filter(t=>{
 const q=$('search').value.toLocaleLowerCase('pt-BR');const from=$('date-from').value,to=$('date-to').value,type=$('type-filter').value;
 return (!q||(t.title+' '+t.reference).toLocaleLowerCase('pt-BR').includes(q))&&(!from||t.occurred_on>=from)&&(!to||t.occurred_on<=to)&&(type==='all'||type==='participation'&&t.kind==='participation'||type==='debits'&&t.amount<0||type==='pending'&&t.state.startsWith('awaiting_'));
});}
function renderStatement(){const items=filtered();$('statement-list').innerHTML=rows(items);$('result-count').textContent=items.length+' registro(s)';}
function render(){
 const d=state.data;if(!d)return;const c=d.context,b=d.balance;
 $('greeting').textContent=c.name;$('profile-name').textContent=c.name;$('profile-bucket').textContent=c.bucket.replace('acionista_','Acionista ');$('avatar').textContent=c.name.slice(0,1);
 $('today-label').textContent=new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Manaus'});
 for(const [id,key] of [['available','available'],['total-balance','balance'],['pending-cash','pending_cash'],['pending-settlement','pending_settlement'],['reserved','reserved']])$(id).textContent=shown(b[key]);
 $('period-note').textContent='Histórico desde '+date(c.start_date)+' · Valores em reais';
 $('admin-nav').hidden=!c.is_admin;$('mobile-admin').hidden=!c.is_admin;
 $('setup').textContent=c.webhook_ready?'Verificar conexão de retiradas':'Ativar conexão de retiradas';
 $('recent-list').innerHTML=rows(d.ledger.slice(0,6));renderStatement();
 $('transfer-list').innerHTML=d.withdrawals.length?d.withdrawals.map(t=>'<div class="transfer-item"><span class="tx-icon debit">→</span><div class="tx-info"><strong>'+shown(t.amount)+' · Pix</strong><small>'+date(t.created_at)+' · '+esc(t.pix_type)+' '+esc(mask(t.pix_key))+'</small>'+badge(t.status)+'</div><button class="outline" data-transfer="'+esc(t.id)+'">Ver detalhes →</button></div>').join(''):empty('Sua primeira transferência começa aqui.','Quando houver saldo liberado, escolha “Nova transferência”.');
 if(c.is_admin)$('admin-list').innerHTML=d.pending_entries.length?d.pending_entries.map(e=>{
  const cash=e.payment_method.toLowerCase().includes('dinheiro');const delivered=e.status==='delivered';
  return '<div class="admin-row"><div><h3>Recibo '+esc(e.receipt_number)+' · '+money(e.amount_paid)+'</h3><p>'+date(e.entry_date)+' · '+esc(e.payment_method)+'</p>'+badge(cash?(delivered?'awaiting_deposit':'awaiting_cash'):'awaiting_settlement')+'</div><div class="admin-actions"><button type="button" class="outline receipt-detail-button" data-receipt-detail="'+esc(e.id)+'" aria-label="Detalhes do recibo '+esc(e.receipt_number)+'">Detalhes</button><button type="button" class="outline" data-fund="'+esc(e.id)+'" data-action="'+(cash&&!delivered?'cash_delivered':'fund_entry')+'">'+(cash&&!delivered?'Confirmar entrega':'Confirmar crédito')+'</button></div></div>';
 }).join(''):empty('Conferência em dia.','Não há recebimentos externos pendentes de validação.');
}
async function load(reconcile=false){if(state.busy)return;state.busy=true;$('refresh').disabled=true;
 try{state.data=await api(reconcile?'reconcile':'dashboard');
 if(!state.draft){try{const stored=sessionStorage.getItem('integro-pix-draft:'+state.data.context.user_id);if(stored){state.draft=JSON.parse(stored);state.draftLocked=true;}}catch{}}render();$('login-view').hidden=true;$('app-view').hidden=false;return true;}
 catch(e){if(!state.data){$('auth-feedback').textContent=e.message;$('login-view').hidden=false;$('app-view').hidden=true;}else notify(e.message,true);return false;}
 finally{state.busy=false;$('refresh').disabled=false;}
}
function tab(name){if(name==='admin'&&!state.data?.context.is_admin)return;state.tab=name;document.querySelectorAll('.tab-section').forEach(el=>el.hidden=el.id!==name);document.querySelectorAll('[data-tab]').forEach(el=>el.classList.toggle('active',el.dataset.tab===name));window.scrollTo({top:0,behavior:'smooth'});}
function mask(key){return key.length<8?key:'•••• '+key.slice(-4);}
function detail(fields,title,amount,receipt){$('detail-content').innerHTML='<h2>'+esc(title)+'</h2><div class="review-amount">'+shown(amount)+'</div><div class="details-grid">'+fields.map(([k,v])=>'<div><span>'+esc(k)+'</span><strong>'+esc(v||'—')+'</strong></div>').join('')+'</div>';
 if(receipt){try{const u=new URL(receipt);if(u.protocol==='https:'&&(u.hostname==='asaas.com'||u.hostname.endsWith('.asaas.com'))){const a=document.createElement('a');a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';a.className='primary';a.textContent='Abrir comprovante Asaas →';$('detail-content').append(a);}}catch{}}
 $('detail-dialog').showModal();}
function openTransfer(){if(!state.data)return;if(!state.data.context.webhook_ready){notify('A administração precisa ativar a conexão de retiradas na Conferência do caixa.',true);return;}
 if(Number(state.data.balance.available)<1){notify('Ainda não há saldo liberado suficiente para uma transferência Pix.',true);return;}
 // Preserve the same request ID across an uncertain network response until this draft is resolved.
 if(!state.draft){$('transfer-form').reset();$('transfer-entry').hidden=false;$('transfer-review').hidden=true;}
 if(state.draft){$('review-amount').textContent=money(state.draft.amount);$('review-key').textContent=state.draft.pix_key;$('review-type').textContent=state.draft.pix_type;$('transfer-entry').hidden=true;$('transfer-review').hidden=false;}$('edit-transfer').disabled=state.draftLocked;
 $('dialog-available').textContent='Disponível: '+money(state.data.balance.available);$('transfer-feedback').textContent='';$('transfer-dialog').showModal();}
document.addEventListener('click',async e=>{
 const t=e.target.closest('[data-tab]');if(t)tab(t.dataset.tab);
 if(e.target.closest('[data-open-transfer]'))openTransfer();
 if(e.target.closest('.close-dialog'))e.target.closest('dialog').close();
 const entry=e.target.closest('[data-entry]');if(entry){const row=state.data.ledger.find(x=>x.id===entry.dataset.entry);if(row)detail([['Data',date(row.occurred_on)],['Situação',labels[row.state]],['Referência',row.reference],['Identificador',row.id]],row.title,row.amount);}
 const transfer=e.target.closest('[data-transfer]');if(transfer){const w=state.data.withdrawals.find(x=>x.id===transfer.dataset.transfer);if(w)detail([['Solicitada em',new Date(w.created_at).toLocaleString('pt-BR')],['Situação',labels[w.status]],['Chave Pix',w.pix_key],['Tipo de chave',w.pix_type],['Favorecido',w.recipient_name],['Identificador Asaas',w.provider_id],['Identificador Pix',w.end_to_end],['Observação',w.failure]],'Transferência Pix',w.amount,w.status==='DONE'?w.receipt_url:null);}
 const receipt=e.target.closest('[data-receipt-detail]');if(receipt&&state.data?.context.is_admin){
  const row=state.data.pending_entries.find(x=>x.id===receipt.dataset.receiptDetail);
  if(row)detail([['Quem pagou',row.payer_name?.trim()||'Não informado no recibo'],['Aluno',row.student_name_snapshot?.trim()||'Não informado no recibo'],['Data do pagamento',date(row.entry_date)],['Forma de pagamento',row.payment_method],['Descrição',row.description],['Pacote',row.package_name_snapshot],['Competência',row.competence_month]],'Recibo '+row.receipt_number,row.amount_paid);
 }
 const fund=e.target.closest('[data-fund]');if(fund){const row=state.data.pending_entries.find(x=>x.id===fund.dataset.fund);if(!row)return;
  if(fund.dataset.action==='cash_delivered'){
   if(!confirm('Confirma que recebeu e conferiu '+money(row.amount_paid)+' em dinheiro, do recibo '+row.receipt_number+'?'))return;
   fund.disabled=true;try{await api('cash_delivered',{entry_id:row.id});await load();notify('Entrega conferida. A participação aguarda o depósito na conta pagadora.');}catch(err){notify(err.message,true);}finally{fund.disabled=false;}
  }else{state.fund=row.id;$('fund-form').reset();$('fund-feedback').textContent='';$('fund-description').textContent='Recibo '+row.receipt_number+' · '+money(row.amount_paid)+' · '+row.payment_method;$('fund-dialog').showModal();}
 }
});
$('transfer-form').addEventListener('submit',e=>{e.preventDefault();try{
 const draft=normalizeWithdrawal({request_id:crypto.randomUUID(),amount:$('transfer-amount').value,pix_type:$('pix-type').value,pix_key:$('pix-key').value});
 if(draft.amount>Number(state.data.balance.available))throw Error('O valor excede o saldo disponível.');state.draft=draft;
 $('review-amount').textContent=money(draft.amount);$('review-key').textContent=draft.pix_key;$('review-type').textContent=draft.pix_type;$('transfer-entry').hidden=true;$('transfer-review').hidden=false;$('transfer-feedback').textContent='';$('confirm-destination').checked=false;
 }catch(err){$('transfer-feedback').textContent=err.message;}});
$('edit-transfer').onclick=()=>{if(state.draftLocked)return;state.draft=null;$('transfer-entry').hidden=false;$('transfer-review').hidden=true;};
$('send-transfer').onclick=async()=>{
 if(!state.draft||!$('confirm-destination').checked){$('transfer-feedback').textContent='Confirme o valor e a chave Pix para continuar.';return;}
 state.draftLocked=true;sessionStorage.setItem('integro-pix-draft:'+state.data.context.user_id,JSON.stringify(state.draft));
 const button=$('send-transfer');button.disabled=true;$('edit-transfer').disabled=true;$('transfer-feedback').textContent='Enviando solicitação. Aguarde a confirmação…';
 try{const result=await api('withdraw',state.draft);sessionStorage.removeItem('integro-pix-draft:'+state.data.context.user_id);state.draft=null;state.draftLocked=false;$('transfer-dialog').close();await load();tab('transfers');notify(result.message||(result.status==='DONE'?'Transferência concluída.':'Solicitação registrada. Acompanhe o processamento no extrato.'),result.status==='FAILED');}
 catch(e){$('transfer-feedback').textContent=e.message+' O pedido mantém o mesmo identificador para evitar duplicidade.';}
 finally{button.disabled=false;$('edit-transfer').disabled=state.draftLocked;}
};
$('fund-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.target.querySelector('[type="submit"]');button.disabled=true;try{await api('fund_entry',{entry_id:state.fund,reference:$('fund-reference').value,funds_confirmed:$('fund-confirmed').checked});$('fund-dialog').close();await load();notify('Crédito conferido. As participações foram liberadas.');}catch(err){$('fund-feedback').textContent=err.message;}finally{button.disabled=false;}});
$('setup').onclick=async()=>{const button=$('setup');button.disabled=true;try{await api('setup');await load();notify('Conexão de retiradas ativada. As autorizações e limites do Asaas continuam valendo.');}catch(e){notify(e.message,true);}finally{button.disabled=false;}};
$('refresh').onclick=()=>load(true);
$('toggle-balance').onclick=()=>{state.hidden=!state.hidden;$('toggle-balance').setAttribute('aria-pressed',String(state.hidden));$('toggle-balance').setAttribute('aria-label',state.hidden?'Mostrar valores':'Ocultar valores');render();};
for(const id of ['search','date-from','date-to','type-filter'])$(id).addEventListener('input',renderStatement);
function exportCsv(){const list=filtered();const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replaceAll('"','""')+'"';const data=[['Data','Descrição','Valor (R$)','Situação','Referência','Identificador'],...list.map(t=>[date(t.occurred_on),t.title,Number(t.amount).toFixed(2).replace('.',','),labels[t.state],t.reference,t.id])].map(r=>r.map(cell).join(';')).join('\r\n');const url=URL.createObjectURL(new Blob(['\ufeff'+data],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='extrato-integro-'+new Date().toISOString().slice(0,10)+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('export-overview').onclick=exportCsv;$('export-statement').onclick=exportCsv;
$('logout').onclick=async()=>{await db.auth.signOut();state.data=null;state.draft=null;location.reload();};
bindPortalLogin({form:$('login-form'),client:db,feedback:(msg)=>$('auth-feedback').textContent=msg,go:()=>load()});
