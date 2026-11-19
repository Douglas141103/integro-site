import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {fixture} from './fixtures/finance-reservation-db.mjs';
import {id} from './fixtures/finance-asaas-db.mjs';
import {installFixture} from './fixtures/finance-pos-browser.mjs';

const file = path => readFile(new URL('../'+path,import.meta.url),'utf8');
test('advance stays out of cash until its cycle opens and is released once',async()=>{
  const {db} = await fixture();
  try {
    await db.exec(`alter table students add full_name text default 'Teste';
      create function private.finance_cycle_matches_policy(uuid,date,date,text) returns boolean language sql as
      $$select $2=date '2027-01-15' and $3=date '2027-02-10' and $4='2027-01'$$;
      set test.today='2026-11-19';`);
    const migration = await file('supabase/migrations/20261119201713_finance_tuition_advance_requests.sql');
    await db.exec(migration.replace("(now() at time zone 'America/Manaus')::date","current_setting('test.today')::date"));
    const call = (action,data={},user=id(1))=>db.transaction(async tx=>{
      await tx.query("select set_config('request.jwt.claim.sub',$1,true)",[user]);
      await tx.exec('set local role authenticated');
      return (await tx.query('select public.finance_tuition_advances($1,$2) as value',[action,data])).rows[0].value;
    });
    const input = {student:id(3),payer:'Pagador de teste',document:'00000000000',token:id(77),amount:'140.00',method:'Pix',
      start:'2027-01-15',end:'2027-02-10',key:'2027-01',credit:0};
    await db.query('insert into private.finance_tuition_advances(school_id,student_id,cycle_start,cycle_end,cycle_key) values($1,$2,$3,$4,$5)',
      [id(10),input.student,input.start,input.end,input.key]);
    const [pending] = await call('list');
    assert.equal(pending.amount,null);
    await assert.rejects(call('release',{id:pending.id}),/ainda não foi confirmado/);
    assert.deepEqual(await call('list',{},id(2)),[]);
    await assert.rejects(call('receive',input,id(2)),/Selecione um aluno/);
    await assert.rejects(call('receive',{...input,start:'2027-01-11'}),/calendário/);
    const receipt = await call('receive',input);
    assert.equal(receipt.id,pending.id);
    assert.deepEqual(await call('receive',input),receipt);
    await assert.rejects(call('receive',{...input,token:id(78)}),/já foi recebida/);
    await assert.rejects(call('release',receipt),/abertura/);
    assert.equal((await db.query('select * from finance_entries')).rows.length,0);
    await db.exec("set test.today='2027-01-15'");
    await assert.rejects(call('release',receipt),/abertura/);
    await db.query("insert into finance_cash_cycles values($1,$2,$3,$4,$5,'aberto')",[id(21),id(10),input.start,input.end,input.key]);
    assert.equal((await call('list'))[0].can_release,true);
    const result = await call('release',receipt);
    assert.deepEqual(await call('release',receipt),result);
    const entries = (await db.query('select *,entry_date::text as day from finance_entries')).rows;
    assert.equal(entries.length,1);
    assert.equal(entries[0].cash_cycle_id,id(21));
    assert.equal(entries[0].day,'2027-01-15');
    assert.equal(entries[0].competence_month,'janeiro de 2027');
    assert.equal(entries[0].payment_method,'Pix');
    assert.equal(Number(entries[0].amount_paid),140);
    assert.ok((await call('list'))[0].released);
  } finally {await db.close();}
});

test('cashier routes a requested tuition to advances and keeps the current sale empty',async()=>{
  const dom=new JSDOM(await file('portal/financeiro.html'),{url:'https://example.test',runScripts:'outside-only'});
  const w=dom.window, doc=w.document;
  try {
    const t=installFixture(w);
    class FixedDate extends w.Date {constructor(...args){super(...(args.length?args:['2026-11-19T12:00:00Z']));}}
    w.Date=FixedDate;
    delete w.INTEGRO_FINANCE_CYCLE_POLICY;
    w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
    w.HTMLDialogElement.prototype.close=function(v){this.returnValue=v;this.onclose();};
    const calls=[], row={id:id(55),student_id:id(3),student_name:'Aluno de teste',payer:'Responsável',start:'2027-01-15',end:'2027-02-10',key:'2027-01'};
    const rpc=w.client.rpc;
    w.client.rpc=async(name,args)=>{
      if(name!=='finance_tuition_advances') return rpc(name,args);
      calls.push(args);
      if(args.p_action==='receive') Object.assign(row,{received:'2026-11-19T12:00:00Z',amount:args.p_data.amount,method:args.p_data.method});
      return {data:args.p_action==='list'?[row]:{id:row.id}};
    };
    for(const f of ['financeiro-cycle-policy.js','financeiro-adiantamentos.js','financeiro-frente-caixa-v3.js']) w.eval(await file('portal/'+f));
    const tick=()=>new Promise(resolve=>setTimeout(resolve,10));
    const $=id=>doc.getElementById(id);
    await tick(); $('pdvOpen').click(); $('pdv2Student').value=id(3);
    $('pdv2Student').dispatchEvent(new w.Event('change'));
    $('pdvNextCustomer').click(); await tick();
    Array.from(doc.querySelectorAll('dialog button')).find(b=>b.textContent.includes('Registrar pagamento')).click();await tick();
    const form=doc.querySelector('dialog form');
    assert.equal(form.elements.cycle.value,row.start);
    form.elements.amount.value='145.20'; form.elements.method.value='Pix';
    assert.equal(form.checkValidity(),false);
    form.elements.confirmed.checked=true; form.requestSubmit();await tick();
    assert.equal(calls.filter(c=>c.p_action==='receive').length,1);
    assert.equal(t.entries.length,0);assert.equal(t.requests.length,0);
    assert.match($('advanceList').textContent,/Recebido · aguardando liberação/);
    assert.equal($('pdv2').hidden,true);
  } finally {w.close();}
});
