import test from 'node:test';
import assert from 'node:assert/strict';
import {id} from './fixtures/finance-asaas-db.mjs';
import {fixture} from './fixtures/finance-reservation-db.mjs';
test('package is R$50, only paid reservation creates credit; activation unlocks it; it is used once',async()=>{const x=await fixture();try{
 assert.equal((await x.quote()).amount,0);assert.equal((await x.db.query('select default_amount from finance_packages where is_reservation')).rows[0].default_amount,'50');
 const source=await x.source();assert.equal(source.entry_type,'servico');assert.equal((await x.quote()).ready,false);
 await assert.rejects(x.quote(id(3),'hold',id(100)),/Ative/);
 await x.activate();assert.equal((await x.quote()).amount,50);assert.equal((await x.quote()).ready,true);
 await assert.rejects(x.entry(),/aplicar o crédito/);
 await x.quote(id(3),'hold',id(100));const paid=await x.entry({credit:true,disc:50});assert.equal(Number(paid.amount_paid),150);
 assert.equal((await x.quote()).used,true);assert.equal((await x.quote()).amount,0);
 await assert.rejects(x.entry({credit:true,disc:50}),/não disponível/);
 await assert.rejects(x.db.query('delete from finance_entries where id=$1',[source.id]),/conciliação/);
 await assert.rejects(x.db.query('update finance_entries set amount_paid=1 where id=$1',[paid.id]),/conciliação/);
 assert.equal(Number((await x.entry({sale:id(101)})).amount_paid),200);
}finally{await x.db.close();}});
test('reservation requires registered pre-enrollment and exact payment, cannot repeat or credit another student',async()=>{const x=await fixture();try{
 await assert.rejects(x.entry({reserve:true,student:null}),/Selecione/);
 await assert.rejects(x.entry({reserve:true,disc:1}),/R\$ 50/);
 await x.source();await assert.rejects(x.source(),/já pagou/);
 await assert.rejects(x.quote(id(4)),/não autorizado/);
 await assert.rejects(x.quote(id(3),'quote',null,id(2)),/não autorizado/);
 await assert.rejects(x.quote(id(3),'quote',null,''),/não autorizado/);
 await x.activate();await x.quote(id(3),'hold',id(100));
 await assert.rejects(x.entry({credit:true,student:id(4),disc:50}),/Confirme/);
 await assert.rejects(x.entry({credit:true,disc:49}),/inválido/);
 await assert.rejects(x.entry({credit:true,disc:50,type:'material'}),/inválido/);
}finally{await x.db.close();}});
test('a manual hold excludes other checkouts; release and retry are idempotent; ordinary discounts combine',async()=>{const x=await fixture();try{
 await x.source();await x.activate();await x.quote(id(3),'hold',id(100));await x.quote(id(3),'hold',id(100));
 await assert.rejects(x.quote(id(3),'hold',id(101)),/outra cobrança/);
 await assert.rejects(x.asaCreate(),/outra cobrança/);
 await x.quote(id(3),'release',id(100));await x.quote(id(3),'release',id(100));await x.quote(id(3),'hold',id(101));
 const row=await x.entry({credit:true,sale:id(101),disc:70});assert.equal(Number(row.amount_paid),130);
}finally{await x.db.close();}});
test('Asaas claims credit before creating a payment and duplicate settlement does not duplicate credit',async()=>{const x=await fixture();try{
 await x.source();await x.activate();await assert.rejects(x.asaCreate(x.sale(false)),/aplicar o crédito/);
 const order=await x.asaCreate();assert.equal((await x.quote()).held,true);
 await assert.rejects(x.asaCreate(),/outra cobrança/);await assert.rejects(x.quote(id(3),'hold',id(100)),/outra cobrança/);
 const bound=await x.bind(order);await x.settle(bound);await x.settle(bound);
 assert.equal((await x.quote()).used,true);
 assert.equal((await x.db.query("select count(*)::int n from finance_entries where entry_type='mensalidade'")).rows[0].n,1);
}finally{await x.db.close();}});
test('InfinitePay also holds and consumes the same credit; unauthenticated cannot execute ledger helpers',async()=>{const x=await fixture();try{
 await x.source();await x.activate();await x.db.exec('update private.finance_ip_settings set enabled=true');
 const rpc=(action,data)=>x.db.transaction(async t=>{await t.exec("set local role service_role;set local request.jwt.claim.role='service_role'");return (await t.query('select finance_infinitepay_service($1,$2) r',[action,data])).rows[0].r;});
 const order=await rpc('create',{user_id:id(1),request_id:id(111),sale:x.sale()});
 await assert.rejects(x.asaCreate(),/outra cobrança/);
 await rpc('settle',{id:order.id,paid:true,amount:15000,capture_method:'pix',transaction_nsu:'test-only',invoice_slug:'test'});
 assert.equal((await x.quote()).used,true);
 await assert.rejects(x.db.transaction(async t=>{await t.exec('set local role authenticated');await t.query('select private.finance_reservation_claim($1,$2,$3,$4,$5)',[id(10),id(3),'manual',id(100),id(1)]);}),/permission denied/);
}finally{await x.db.close();}});
test('reservation Asaas charge only becomes credit on verified receipt; refund invalidates unused credit',async()=>{const x=await fixture();try{
 const s={customer:{student_id:id(3),student_name:'Teste',payer_name:'Teste',payer_document:'24971563792'},items:[{type:'servico',description:'Reserva',qty:1,gross:5000,discount:0,amount:5000,package_id:x.pkg}],amount:5000};
 const order=await x.asaCreate(s);assert.equal((await x.quote()).amount,0);
 await assert.rejects(x.asaCreate(s),/cobrança de reserva/);
 const bound=await x.bind(order);await x.settle(bound);assert.equal((await x.quote()).amount,50);
 await x.rpc('sync',{id:bound.id,payment_id:bound.payment_id,amount:bound.amount,status:'refunded'});
 assert.equal((await x.quote()).amount,0);await x.activate();await assert.rejects(x.quote(id(3),'hold',id(100)),/não disponível/);
}finally{await x.db.close();}});
