import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {fixture} from './fixtures/finance-reservation-db.mjs';
import {id} from './fixtures/finance-asaas-db.mjs';
const sql=await readFile(new URL('../supabase/migrations/20261112214928_finance_reservations_panel.sql',import.meta.url),'utf8');
const script=await readFile(new URL('../portal/financeiro-reservas.js',import.meta.url),'utf8');
test('register follows payment, activation, hold and consumption; isolates schools and denies unauthorised roles',async()=>{
 const x=await fixture();try{
  await x.db.exec(`alter table students add full_name text default 'Aluno',add guardian_1_name text,add reserved_at timestamptz,add created_at timestamptz default now();`);
  await x.db.exec(sql);
  const list=(user=id(1),role='authenticated')=>x.db.transaction(async t=>{await t.query("select set_config('request.jwt.claim.sub',$1,true)",[user]);await t.exec(`set local role ${role}`);return(await t.query('select public.finance_reservations_list() r')).rows[0].r;});
  let rows=await list();assert.equal(rows.length,1);assert.equal(rows[0].student_id,id(3));assert.equal(rows[0].status,'aguardando_pagamento');
  assert.equal((await list(id(2)))[0].student_id,id(4));
  await assert.rejects(list(''),/não autorizado/);await assert.rejects(list(id(1),'anon'),/permission denied/);
  await x.db.exec(`update profiles set role='professor' where id='${id(5)}'`);await assert.rejects(list(id(5)),/não autorizado/);
  await x.source();rows=await list();assert.equal(rows[0].status,'aguardando_ativacao');assert.equal(rows[0].credit_amount,50);assert.equal(rows[0].payment_valid,true);assert.ok(rows[0].reserve_receipt);
  await x.db.exec(`update students set active=false where id='${id(3)}'`);assert.equal((await list())[0].status,'aguardando_ativacao');
  await x.db.exec(`update students set active=true where id='${id(3)}'`);
  await x.activate();assert.equal((await list())[0].status,'credito_disponivel');
  await x.quote(id(3),'hold',id(100));assert.equal((await list())[0].status,'credito_vinculado');
  await x.entry({credit:true,disc:50});rows=await list();assert.equal(rows[0].status,'credito_utilizado');assert.ok(rows[0].tuition_receipt);assert.equal(rows[0].tuition_paid,150);
  assert.ok(!JSON.stringify(rows).includes('payer_document'));
 }finally{await x.db.close();}
});
test('pending provider reservation is unpaid and a refunded source needs reconciliation',async()=>{
 const x=await fixture();try{
  await x.db.exec(`alter table students add full_name text,add guardian_1_name text,add reserved_at timestamptz,add created_at timestamptz default now();`);await x.db.exec(sql);
  const list=()=>x.db.transaction(async t=>{await t.query("select set_config('request.jwt.claim.sub',$1,true)",[id(1)]);await t.exec('set local role authenticated');return(await t.query('select public.finance_reservations_list() r')).rows[0].r;});
  const sale={customer:{student_id:id(3),student_name:'Teste',payer_name:'Teste',payer_document:'24971563792'},items:[{type:'servico',description:'Reserva',qty:1,gross:5000,discount:0,amount:5000,package_id:x.pkg}],amount:5000};
  const order=await x.asaCreate(sale);assert.equal((await list())[0].payment_valid,false);assert.equal((await list())[0].status,'aguardando_pagamento');
  const bound=await x.bind(order);await x.settle(bound);assert.equal((await list())[0].status,'aguardando_ativacao');
  await x.rpc('sync',{id:bound.id,payment_id:bound.payment_id,amount:bound.amount,status:'refunded'});
  assert.equal((await list())[0].status,'conciliacao');assert.equal((await list())[0].payment_valid,false);
 }finally{await x.db.close();}
});
test('panel searches accent-insensitively, filters, escapes names and hides stale data after an error',async()=>{
 const dom=new JSDOM('<button data-tab="reservas">Reservas</button><section id="reservas" class="active"><div id="reservasRoot"></div></section>',{runScripts:'outside-only'}),w=dom.window;
 try{
  let failed=false,calls=0;
  w.INTEGRO_SUPABASE={url:'test',anonKey:'test'};
  w.supabase={createClient:()=>({rpc:async name=>{calls++;assert.equal(name,'finance_reservations_list');return failed?{error:{message:'offline'}}:{data:[{student_name:'João <img src=x onerror=alert(1)>',guardian_name:'Maria',active:true,enrollment_status:'pre_matricula',status:'aguardando_ativacao',credit_amount:50,payment_valid:true,reserve_receipt:1},{student_name:'Ana',status:'aguardando_pagamento'}]};}})};
  w.eval(script);const $=id=>w.document.getElementById(id);
  w.document.querySelector('[data-tab]').click();await new Promise(r=>setTimeout(r,0));
  assert.equal(calls,1);assert.equal(w.document.querySelectorAll('.res-card').length,2);assert.equal(w.document.querySelector('img'),null);
  $('resSearch').value='joao';$('resSearch').dispatchEvent(new w.Event('input'));assert.equal(w.document.querySelectorAll('.res-card').length,1);
  $('resFilter').value='aguardando_pagamento';$('resFilter').dispatchEvent(new w.Event('change'));assert.match($('resList').textContent,/Nenhuma reserva corresponde/);
  failed=true;$('resRefresh').click();await new Promise(r=>setTimeout(r,0));assert.equal($('resContent').hidden,true);assert.equal($('resMessage').dataset.error,'true');assert.equal($('resRefresh').disabled,false);
 }finally{w.close();}
});
