import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {fixture} from './fixtures/finance-reservation-db.mjs';
import {id} from './fixtures/finance-asaas-db.mjs';
import {installFixture} from './fixtures/finance-pos-browser.mjs';

const file = path => readFile(new URL('../'+path,import.meta.url),'utf8');
test('manual and provider confirmations preserve each paid item before choosing or releasing a cycle',async()=>{
  const x=await fixture(), db=x.db;
  try {
    await db.exec(`alter table students add full_name text default 'Teste';
      create function private.finance_cycle_matches_policy(uuid,date,date,text) returns boolean language sql as $$select $2=date '2027-01-15' and $3=date '2027-02-10' and $4='2027-01'$$;
      set test.today='2026-11-19';`);
    for(const migration of ['20261119201713_finance_tuition_advance_requests','20261119210255_finance_paid_sale_destination']){
      const sql=await file('supabase/migrations/'+migration+'.sql');
      await db.exec(sql.replace("(now() at time zone 'America/Manaus')::date","current_setting('test.today')::date"));
    }
    const call=(fn,action,data={},user=id(1))=>db.transaction(async tx=>{
      await tx.query("select set_config('request.jwt.claim.sub',$1,true)",[user]);await tx.exec('set local role authenticated');
      return (await tx.query('select public.'+fn+'($1,$2) as r',[action,data])).rows[0].r;
    });
    const route=(action,data,user)=>call('finance_paid_destination',action,data,user);
    const target={start:'2027-01-15',end:'2027-02-10',key:'2027-01'};
    const count=async()=>Number((await db.query("select count(*) n from finance_entries where entry_type='mensalidade'")).rows[0].n);
    const order=await x.asaCreate(x.sale(false));
    assert.deepEqual(await route('pending'),[]);
    const bound=await x.bind(order);await x.settle(bound);await x.settle(bound);
    const [verified]=await route('sale',{provider:'asaas',sale:order.id});
    assert.ok(verified,JSON.stringify((await db.query('select status,post_error from private.finance_asaas_orders where id=$1',[order.id])).rows));
    assert.equal(verified.asaas_order_id,order.id);
    assert.equal(await count(),0);assert.deepEqual(await route('pending',{},id(2)),[]);
    await assert.rejects(route('advance',{id:verified.id,...target},id(2)),/indisponível/);
    const advance=await route('advance',{id:verified.id,...target});
    assert.deepEqual((await route('current',{id:verified.id})).advance_id,advance.advance_id);
    assert.equal(await count(),0);
    await assert.rejects(call('finance_tuition_advances','release',{id:advance.advance_id}),/ciclo|liberação/);

    await db.exec('update private.finance_ip_settings set enabled=true');
    const ip=(action,data)=>db.transaction(async tx=>{
      await tx.exec("set local role service_role;set local request.jwt.claim.role='service_role'");
      return (await tx.query('select finance_infinitepay_service($1,$2) r',[action,data])).rows[0].r;
    });
    const mixed=x.sale(false);
    mixed.items.push({type:'material',description:'Livro',qty:1,gross:1000,discount:0,amount:1000});
    mixed.amount+=1000;
    const link=await ip('create',{user_id:id(1),request_id:id(114),sale:mixed});
    assert.deepEqual(await route('sale',{provider:'infinitepay',sale:link.id}),[]);
    await ip('settle',{id:link.id,paid:true,amount:mixed.amount,capture_method:'pix',transaction_nsu:'test-only',invoice_slug:'teste'});
    const ipRows=await route('sale',{provider:'infinitepay',sale:link.id});
    assert.equal(ipRows.length,1);assert.equal(ipRows[0].entry_type,'mensalidade');
    assert.equal((await db.query("select entry_type from finance_entries where infinitepay_order_id=$1",[link.id])).rows[0].entry_type,'material');

    await db.exec(`update finance_cash_cycles set start_date='2026-11-17',end_date='2027-01-14',cycle_key='ferias-2026' where id='${id(20)}';
      insert into finance_cash_cycles values('${id(21)}','${id(10)}','2027-01-15','2027-02-10','2027-01','aberto');`);
    await db.transaction(async tx=>{
      await tx.query("select set_config('request.jwt.claim.sub',$1,true)",[id(1)]);
      for(let i=0;i<2;i++)await tx.query(`insert into finance_entries(school_id,cash_cycle_id,student_id,pos_sale_id,pos_item_index,amount_paid,entry_type,entry_date,created_by,payment_method,description)
        values($1,$2,$3,$4,1,100,'mensalidade','2026-11-19',$5,'Dinheiro','Teste')`,[id(10),id(20),id(3),id(98),id(1)]);
    });
    const manual=(await route('pending')).find(item=>item.pos_sale_id===id(98));
    const current=await route('current',{id:manual.id});assert.equal(current.entry_id,manual.id);
    await route('current',{id:manual.id});assert.equal(await count(),1);
    await db.exec("set test.today='2027-01-15'");
    const released=await call('finance_tuition_advances','release',{id:advance.advance_id});
    assert.equal(released.entry_id,verified.id);
    await call('finance_tuition_advances','release',{id:advance.advance_id});assert.equal(await count(),2);
    const [ledger]=(await db.query('select * from finance_entries where id=$1',[verified.id])).rows;
    assert.equal(ledger.asaas_order_id,order.id);assert.equal(ledger.cash_cycle_id,id(21));
    assert.equal(ledger.receipt_number,verified.receipt_number);assert.equal(ledger.competence_month,'janeiro de 2027');
  } finally {await db.close();}
});
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
    let staged=null;
    const rpc=w.client.rpc;
    w.client.rpc=async(name,args)=>{
      if(name==='finance_tuition_advances')return {data:[row]};
      if(name!=='finance_paid_destination')return rpc(name,args);
      calls.push(args);
      if(args.p_action==='sale'){
        if(t.entries.length){const [r]=t.entries.splice(0);staged={...r,destination_id:r.id};}
        return {data:staged?[staged]:[]};
      }
      if(args.p_action==='advance'){staged.advance_id=row.id;return {data:{advance_id:row.id}};}
      return {data:[]};
    };
    for(const f of ['vendor/qrcode-generator-1.4.4.js','pix-brcode.js','financeiro-cycle-policy.js','financeiro-adiantamentos.js','financeiro-frente-caixa-v3.js']) w.eval(await file('portal/'+f));
    w.INTEGRO_FINANCE_CURRENT_CYCLE={id:id(20),cycle_key:'2026-11',start_date:'2026-11-11',end_date:'2026-12-10',status:'aberto'};
    t.pixSettings={key_type:'random',pix_key:'123e4567-e12b-12d1-a456-426655440000',merchant_name:'INSTITUTO INTEGRO',merchant_city:'MANAUS',enabled:true};
    const tick=()=>new Promise(resolve=>setTimeout(resolve,15));
    const $=id=>doc.getElementById(id);
    await tick(); $('pdvOpen').click(); $('pdv2Student').value=id(3);
    $('pdv2Student').dispatchEvent(new w.Event('change'));
    $('pdvNextCustomer').click();await tick();
    assert.equal(doc.querySelector('dialog'),null);
    $('pdv2Gross').value='145.20';$('pdv2Desc').value='Mensalidade';$('pdv2Add').click();$('pdvNextPayment').click();
    doc.querySelector('[data-method="direct_pix"]').click();await tick();
    $('pdvPixGenerate').click();await tick();
    assert.ok($('pdvPixPayload').value.startsWith('000201'));
    assert.equal(doc.querySelector('dialog'),null);
    $('pdv2Finish').click();await tick();
    assert.equal(doc.querySelector('dialog'),null);
    $('pdvReceivedConfirmed').checked=true;$('pdv2Finish').click();await tick();
    const select=doc.querySelector('dialog select');
    select.value=row.start;select.dispatchEvent(new w.Event('change'));
    doc.querySelector('dialog button').click();await tick();
    assert.equal(calls.filter(c=>c.p_action==='advance').length,1);
    assert.equal(t.entries.length,0);assert.equal(t.requests.length,0);
    assert.match($('pdvPaidDescription').textContent,/Adiantamentos/);
    assert.equal($('pdvPrintReceipt').hidden,false);
  } finally {w.close();}
});
