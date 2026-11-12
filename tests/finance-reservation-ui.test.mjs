import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {installFixture} from './fixtures/finance-pos-browser.mjs';
const src=await readFile(new URL('../portal/financeiro-frente-caixa-v3.js',import.meta.url),'utf8');
const pause=()=>new Promise(r=>setTimeout(r,25));
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
async function setup(options={}){
 const dom=new JSDOM('<section id="caixa"></section>',{url:'https://www.institutointegro.com.br/portal/financeiro.html',runScripts:'outside-only'}),w=dom.window,t=installFixture(w,options);w.eval(src);await pause();
 const $=s=>w.document.getElementById(s),click=async s=>{$(s).click();await pause();},change=(s,v)=>{$(s).value=v;$(s).dispatchEvent(new w.Event('change'));},input=(s,v)=>{$(s).value=v;$(s).dispatchEvent(new w.Event('input'));};
 await click('pdvOpen');change('pdv2Student',id(3));await click('pdvNextCustomer');return{w,t,$,click,change,input};
}
test('pre-enrollment appears in cash register; reservation package costs 50 and cannot be treated as tuition',async()=>{const x=await setup({preEnrollment:true});try{
 const{$,change,click}=x;assert.match($('pdv2Student').textContent,/Pré-matrícula/);change('pdv2Package',id(6));assert.equal($('pdv2Gross').value,'50.00');assert.equal($('pdv2Type').value,'servico');assert.equal($('pdv2Final').value,'50.00');
 await click('pdv2Add');assert.match($('pdv2Total').textContent,/50,00/);assert.match($('pdv2Cart').textContent,/Reserva/);
 change('pdv2Package',id(6));await click('pdv2Add');assert.match($('pdvMessage').textContent,/já está/);
}finally{x.w.close();}});
test('first tuition automatically deducts 50, combines manual discount, holds credit before collecting and prints net receipt',async()=>{const x=await setup({credit:true});try{
 const{$,input,click,w,t}=x;assert.doesNotMatch($('pdv2Discount').textContent,/Crédito automático/);
 input('pdv2Gross','200');input('pdv2DiscValue','20');input('pdv2Desc','Mensalidade');assert.equal($('pdv2Final').value,'130.00');assert.match($('pdvReservationHint').textContent,/50,00/);
 await click('pdv2Add');assert.match($('pdv2Total').textContent,/130,00/);assert.match($('pdv2Cart').textContent,/Abatimento da reserva/);await click('pdvNextPayment');w.document.querySelector('[data-method="cash"]').click();await pause();assert.ok(t.reservation.holdId);
 input('pdv2Received','130');$('pdvReceivedConfirmed').checked=true;await click('pdv2Finish');assert.equal(t.entries[0].discount_amount,70);assert.equal(t.entries[0].amount_paid,130);assert.equal(t.entries[0].discount_id,id(7));assert.equal(t.entries[0].pos_sale_id,t.reservation.holdId);assert.equal($('pdvPrintReceipt').hidden,false);
}finally{x.w.close();}});
test('credit cannot be multiplied by quantity or applied to materials; removing the item restores automatic credit',async()=>{const x=await setup({credit:true});try{
 const{$,input,change,click,w}=x;input('pdv2Gross','200');input('pdv2Desc','Mensalidade');input('pdv2Qty','2');await click('pdv2Add');assert.match($('pdvMessage').textContent,/quantidade 1/);
 input('pdv2Qty','1');change('pdv2Type','material');assert.equal($('pdv2Final').value,'200.00');await click('pdv2Add');input('pdv2Gross','200');input('pdv2Desc','Mensalidade');assert.equal($('pdv2Final').value,'150.00');await click('pdv2Add');w.document.querySelectorAll('[data-rm]')[1].click();input('pdv2Gross','200');assert.equal($('pdv2Final').value,'150.00');
}finally{x.w.close();}});
