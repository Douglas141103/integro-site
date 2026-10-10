import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

async function setup({closed = false, authorization = true, closingWindow = false} = {}) {
  const dom = new JSDOM(read('portal/financeiro.html'), {runScripts:'outside-only',url:'https://www.institutointegro.com.br/portal/financeiro.html'});
  await new Promise(resolve => dom.window.addEventListener('load', resolve, {once:true}));
  const w = dom.window, d = w.document;
  const writes = [], reads = [];
  const db = {
    from(table) {
      reads.push(table);
      return {insert(payload) {writes.push({table,payload}); return Promise.resolve({error:{message:'Test-only ordinary write stopped'}});}};
    },
    auth:{async getUser() {reads.push('auth'); return {data:{user:null}};}}
  };
  w.console = {log(){},warn(){},error(){}};
  w.INTEGRO_SUPABASE={url:'https://project.example',anonKey:'test-public-key'};
  w.supabase={createClient:()=>db};
  w.INTEGRO_FINANCE_CYCLE_POLICY={referenceISO:()=> '2026-10-10', getCurrentCycleRange:()=>({cycleKey:'2026-09',startISO:'2026-09-11',endISO:'2026-10-10',start:'2026-09-11',end:'2026-10-10',isClosingWindow:closingWindow})};
  const boot = 'window.addEventListener("DOMContentLoaded", init);';
  const base = read('portal/financeiro-recolho.js');
  assert.ok(base.includes(boot));
  w.eval(base.replace(boot,'window.cashTest = { state, createPanel, bindPanelEvents, openMovementModal };'));
  const cycle={id:'cycle-test',school_id:'school-test',cycle_key:'2026-09',start_date:'2026-09-11',end_date:'2026-10-10',status:closed?'fechado':'aberto'};
  Object.assign(w.cashTest.state,{cycle,school:{id:'school-test'},user:{id:'user-test'},totals:{buckets:Object.fromEntries(['acionista_1','acionista_2','acionista_3','operacoes','fundo_caixa'].map(key=>[key,{available:500}]))}});
  w.INTEGRO_FINANCE_CURRENT_CYCLE=cycle;
  w.cashTest.createPanel(); w.cashTest.bindPanelEvents();
  // Run the real capture listener and real authorization dialog. No credentials
  // or external requests are used, and no authorization form is submitted.
  w.eval(read('portal/financeiro-recolho-acionista.js'));
  if(authorization) {
    w.state={school:{id:'school-test'},entries:[],expenses:[]}; w.client=db; w.cfg=w.INTEGRO_SUPABASE;
    w.$=id=>d.getElementById(id); w.escapeHtml=String; w.money=n=>`R$ ${n}`;
    w.showStatus=()=>{}; w.renderAll=()=>{};
    w.eval(read('portal/financeiro-diretor.js'));
  }
  return {w,d,dom,writes,reads,open(action,source,destination) {
    w.cashTest.openMovementModal(action,source);
    d.getElementById('cashModalSource').value=source;
    d.getElementById('cashModalDestination').value=destination||'';
    d.getElementById('cashModalAmount').value='333.50';
    d.getElementById('cashModalDate').value='2026-10-10';
    d.getElementById('cashModalSaveBtn').click();
  }};
}

test('real capture and base handlers route full and partial shareholder adjustments to director credentials',async()=>{
  for(const action of ['pay-shareholder-full','pay-shareholder-partial']) {
    for(const source of ['acionista_1','acionista_2','acionista_3']) {
      const h=await setup();
      h.open(action,source,'ajuste_administrativo');
      assert.equal(h.d.getElementById('directorModal').hidden,false,`${action}/${source}`);
      assert.equal(h.d.getElementById('directorModalTitle').textContent,'Autorizar ajuste administrativo');
      assert.equal(h.w.state.directorAction.adjustment.amount,333.5);
      assert.equal(h.w.state.directorAction.adjustment.source_bucket,source);
      assert.equal(h.w.state.directorAction.adjustment.destination_bucket,'ajuste_administrativo');
      assert.equal(h.w.state.directorAction.adjustment.school_id,'school-test');
      assert.equal(h.w.state.directorAction.adjustment.cycle_id,'cycle-test');
      assert.equal(h.w.state.directorAction.adjustment.movement_date,'2026-10-10');
      assert.equal(h.d.getElementById('directorPassword').value,'');
      assert.deepEqual(h.writes,[]); assert.deepEqual(h.reads,[]);
      h.dom.window.close();
    }
  }
});
test('both administrative endpoints and manual action use authorization regardless of originating button',async()=>{
  for(const [action,source,destination] of [
    ['pay-bill','operacoes','ajuste_administrativo'],
    ['fund-expense','fundo_caixa','ajuste_administrativo'],
    ['pay-bill','ajuste_administrativo','operacoes'],
    ['manual-adjust','operacoes','fundo_caixa']
  ]) {
    const h=await setup({closingWindow:true}); h.open(action,source,destination);
    assert.equal(h.d.getElementById('directorModal').hidden,false);
    assert.deepEqual(h.writes,[]); h.dom.window.close();
  }
});
test('missing authorization, closed cycle and invalid amount cannot fall back to direct insert',async()=>{
  const absent=await setup({authorization:false}); absent.open('pay-shareholder-full','acionista_1','ajuste_administrativo');
  assert.match(absent.d.getElementById('cashModalMessage').textContent,/autorização.*carregando/);
  assert.deepEqual(absent.writes,[]); absent.dom.window.close();
  const closed=await setup({closed:true}); closed.open('pay-shareholder-full','acionista_1','ajuste_administrativo');
  assert.match(closed.d.getElementById('cashModalMessage').textContent,/ciclo já foi fechado/);
  assert.equal(closed.d.getElementById('directorModal').hidden,true); assert.deepEqual(closed.writes,[]); closed.dom.window.close();
  const invalid=await setup(); invalid.w.cashTest.openMovementModal('pay-shareholder-full','acionista_1');
  invalid.d.getElementById('cashModalDestination').value='ajuste_administrativo';
  invalid.d.getElementById('cashModalAmount').value='0'; invalid.d.getElementById('cashModalSaveBtn').click();
  assert.match(invalid.d.getElementById('cashModalMessage').textContent,/valor maior que zero/);
  assert.equal(invalid.d.getElementById('directorModal').hidden,true); assert.deepEqual(invalid.writes,[]); invalid.dom.window.close();
});
test('ordinary shareholder and operations movements retain their existing handlers',async()=>{
  const shareholder=await setup(); shareholder.open('pay-shareholder-full','acionista_1',null);
  assert.ok(shareholder.reads.includes('auth')); assert.equal(shareholder.d.getElementById('directorModal').hidden,true);
  await new Promise(resolve=>setTimeout(resolve,0)); shareholder.dom.window.close();
  const base=await setup(); base.open('pay-bill','operacoes',null);
  assert.equal(base.writes.length,1,base.d.getElementById('cashModalMessage').textContent); assert.equal(base.writes[0].payload.movement_type,'conta_paga');
  assert.equal(base.d.getElementById('directorModal').hidden,true);
  await new Promise(resolve=>setTimeout(resolve,0)); base.dom.window.close();
});
