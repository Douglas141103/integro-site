import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {installFixture} from './fixtures/finance-pos-browser.mjs';
const names=['vendor/qrcode-generator-1.4.4.js','pix-brcode.js','financeiro-asaas.js','financeiro-infinitepay.js','financeiro-frente-caixa-v3.js'];
const sources=await Promise.all(names.map(n=>readFile(new URL('../portal/'+n,import.meta.url),'utf8')));
const pause=()=>new Promise(r=>setTimeout(r,35));
async function setup(){const dom=new JSDOM('<button data-tab="caixa">Frente de caixa</button><section id="caixa"></section>',{url:'https://www.institutointegro.com.br/portal/financeiro.html',runScripts:'outside-only'});const w=dom.window,t=installFixture(w);sources.forEach(s=>w.eval(s));await pause();const $=id=>w.document.getElementById(id);const click=async id=>{$(id).click();await pause();};const input=(id,value)=>{$(id).value=value;$(id).dispatchEvent(new w.Event('input'));};
 const cart=async()=>{await click('pdvOpen');$('pdv2Student').value='00000000-0000-4000-8000-000000000003';$('pdv2Student').dispatchEvent(new w.Event('change'));await click('pdvNextCustomer');input('pdv2Gross','140');input('pdv2Desc','Mensalidade');await click('pdv2Add');await click('pdvNextPayment');};return{dom,w,t,$,click,input,cart};}
test('dedicated screen opens with only customer; validates steps and updates cart total',async()=>{const x=await setup();try{const{$,click,input,w}=x;assert.equal($('pdv2').hidden,true);w.document.querySelector('[data-tab="caixa"]').click();assert.equal($('pdv2').hidden,false);assert.equal($('pdvStep1').hidden,false);assert.equal($('pdvStep2').hidden,true);assert.equal($('pdvStep3').hidden,true);await click('pdvNextCustomer');assert.equal($('pdvStep1').hidden,false);input('pdv2ManualStudent','Beneficiário');input('pdv2Payer','Pagador');input('pdv2Doc','24971563792');await click('pdvNextCustomer');assert.equal($('pdvStep2').hidden,false);input('pdv2Gross','30');input('pdv2Qty','2');input('pdv2Desc','Apostila');await click('pdv2Add');assert.match($('pdv2Total').textContent,/60,00/);input('pdv2Gross','20');input('pdv2Desc','Material');await click('pdv2Add');assert.match($('pdv2Total').textContent,/80,00/);assert.equal($('pdvPrintReceipt').hidden,true);await click('pdvNextPayment');assert.equal($('pdvStep3').hidden,false);}finally{x.w.close();}});
test('cash receipt is available only after confirmed persistent payment; retry of lost response cannot duplicate sale',async()=>{const x=await setup();try{const{$,w,t,click,input}=x;await x.cart();w.document.querySelector('[data-method="cash"]').click();input('pdv2Received','150');await click('pdv2Finish');assert.equal(t.insertCount,0);assert.equal($('pdvPrintReceipt').hidden,true);$('pdvReceivedConfirmed').checked=true;t.lostResponse=true;await click('pdv2Finish');assert.equal(t.insertCount,1);assert.equal($('pdvPrintReceipt').hidden,true);assert.equal($('pdvBackItems').disabled,true);await click('pdv2Finish');assert.equal(t.insertCount,1);assert.equal($('pdvPrintReceipt').hidden,false);assert.equal(t.printCount,0);assert.match($('pdv2Change').value,/10,00/);await click('pdvPrintReceipt');assert.equal(t.printCount,1);await click('pdvNewSale');assert.equal($('pdvStep1').hidden,false);assert.equal($('pdvPrintReceipt').hidden,true);}finally{x.w.close();}});
for(const provider of ['asaas','infinitepay'])test(provider+' waits for settlement, preserves cart and blocks a second payment method',async()=>{const x=await setup();try{const{$,w,t,click}=x;await x.cart();w.document.querySelector('[data-method="'+provider+'"]').click();await click(provider==='asaas'?'asaasCreate':'ipCreate');assert.equal($('pdvPrintReceipt').hidden,true);assert.match($('pdvPaymentTotal').textContent,/140,00/);assert.equal(w.document.querySelector('[data-method="cash"]').disabled,true);t.pay(provider,false);await click(provider==='asaas'?'asaasRefresh':'ipRefresh');assert.equal($('pdvPrintReceipt').hidden,true);t.pay(provider,true);await click(provider==='asaas'?'asaasRefresh':'ipRefresh');assert.equal($('pdvPrintReceipt').hidden,false);assert.equal(t.insertCount,0);assert.equal(t.printCount,0);await click('pdvPrintReceipt');assert.equal(t.printCount,1);}finally{x.w.close();}});
test('unknown provider outcome keeps the same request and prevents switching to manual payment',async()=>{const x=await setup();try{const{$,w,t,click}=x;await x.cart();w.document.querySelector('[data-method="asaas"]').click();t.failCreation=true;await click('asaasCreate');assert.equal(w.document.querySelector('[data-method="cash"]').disabled,true);assert.equal($('pdvPrintReceipt').hidden,true);t.failCreation=false;await click('asaasCreate');const requests=t.requests.filter(r=>r.action==='create');assert.equal(requests.length,2);assert.equal(requests[0].request_id,requests[1].request_id);assert.equal(t.asaas.length,1);}finally{x.w.close();}});
test('external terminal payment offers card and Pix and requires operator confirmation',async()=>{const x=await setup();try{const{$,w,t,click}=x;await x.cart();w.document.querySelector('[data-method="other"]').click();assert.equal($('pdvOtherOptions').hidden,false);$('pdvOtherType').value='pix';$('pdvOtherType').dispatchEvent(new w.Event('change'));await click('pdv2Finish');assert.equal(t.insertCount,0);$('pdvReceivedConfirmed').checked=true;await click('pdv2Finish');assert.equal(t.entries[0].payment_method,'Pix');assert.equal($('pdvPrintReceipt').hidden,false);}finally{x.w.close();}});


test('new sale clears the previous Pix code; decimal cash totals stay exact',async()=>{const x=await setup();try{const{$,w,t,click,input}=x;await x.cart();w.document.querySelector('[data-method="asaas"]').click();await click('asaasCreate');assert.equal($('asaasPix').hidden,false);await click('pdvLeavePending');assert.equal($('asaasPix').hidden,true);assert.equal($('asaasPix').textContent,'');input('pdv2ManualStudent','Novo aluno');input('pdv2Payer','Outro pagador');input('pdv2Doc','24971563792');await click('pdvNextCustomer');for(const v of ['0.10','0.20']){input('pdv2Gross',v);input('pdv2Desc','Material');await click('pdv2Add');}assert.match($('pdv2Total').textContent,/0,30/);await click('pdvNextPayment');w.document.querySelector('[data-method="cash"]').click();input('pdv2Received','0.30');$('pdvReceivedConfirmed').checked=true;await click('pdv2Finish');assert.equal($('pdvPrintReceipt').hidden,false);assert.equal(t.insertCount,1);}finally{x.w.close();}});

const testPixSettings={key_type:'random',pix_key:'123e4567-e12b-12d1-a456-426655440000',merchant_name:'INSTITUTO INTEGRO',merchant_city:'MANAUS',enabled:true};
test('direct Pix requires saved settings; generates and copies QR without charging API or posting a receipt',async()=>{
 const x=await setup();try{const{$,w,t,click,input}=x;await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();
 assert.equal($('pdvPixGenerate').disabled,true);assert.equal($('pdvPixConfig').hidden,false);assert.equal($('pdvPixCode').hidden,true);
 input('pdvPixKey',testPixSettings.pix_key);input('pdvPixName','Instituto Integro');input('pdvPixCity','Manaus');$('pdvPixEnabled').checked=true;await click('pdvPixSave');
 assert.equal($('pdvPixGenerate').disabled,false);assert.equal(t.pixSettings.merchant_city,'MANAUS');
 await click('pdvPixGenerate');assert.equal($('pdvPixCode').hidden,false);assert.ok($('pdvPixImage').querySelector('svg'));assert.match($('pdvPixPayload').value,/5406140\.00/);
 assert.equal(t.insertCount,0);assert.equal(t.requests.some(r=>r.action==='create'),false);assert.equal($('pdvPrintReceipt').hidden,true);
 assert.equal($('pdvBackItems').disabled,true);assert.equal($('pdvPixSave').disabled,true);assert.equal(w.document.querySelector('[data-method="asaas"]').disabled,true);
 await click('pdvPixCopy');assert.equal(t.copied,$('pdvPixPayload').value);assert.equal(t.insertCount,0);
 await click('pdv2Finish');assert.equal(t.insertCount,0);assert.match($('pdvMessage').textContent,/Confirme o recebimento/);
 }finally{x.w.close();}
});
test('direct Pix confirms manually once, retries lost response and releases receipt only after the saved rows are verified',async()=>{
 const x=await setup();try{const{$,w,t,click}=x;t.pixSettings={...testPixSettings};await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();await click('pdvPixGenerate');
 const oldPayload=$('pdvPixPayload').value,ref=$('pdvPixReference').textContent.replace('Referência: ','');
 $('pdvReceivedConfirmed').checked=true;t.lostResponse=true;await click('pdv2Finish');assert.equal(t.insertCount,1);assert.equal($('pdvPrintReceipt').hidden,true);assert.equal($('pdvPixReset').disabled,true);
 await click('pdv2Finish');assert.equal(t.insertCount,1);assert.equal(t.entries[0].payment_method,'Pix');assert.match(t.entries[0].description,/Recebimento conferido manualmente/);assert.ok(t.entries[0].description.includes(ref));
 assert.equal(t.entries[0].pos_sale_id.replace(/-/g,'').slice(0,25),ref);assert.equal($('pdvPrintReceipt').hidden,false);assert.equal($('pdvDirectPix').hidden,true);assert.equal(t.printCount,0);
 await click('pdvNewSale');assert.equal($('pdvPixPayload').value,'');assert.equal($('pdvPixImage').textContent,'');assert.equal($('pdvPixCode').hidden,true);
 await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();await click('pdvPixGenerate');assert.notEqual($('pdvPixPayload').value,oldPayload);
 }finally{x.w.close();}
});
test('direct Pix checks current configuration before generation, handles failure, and respects director permissions',async()=>{
 const x=await setup();try{const{$,w,t,click}=x;t.pixSettings={...testPixSettings};t.pixCanConfigure=false;await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();assert.equal($('pdvPixConfig').hidden,true);
 t.pixSettings.enabled=false;await click('pdvPixGenerate');assert.equal($('pdvPixCode').hidden,true);assert.equal($('pdvPixGenerate').disabled,true);assert.equal(t.insertCount,0);
 t.pixRpcError='Conexão indisponível';w.document.querySelector('[data-method="direct_pix"]').click();await pause();assert.equal($('pdvPixGenerate').disabled,true);assert.match($('pdvPixStatus').textContent,/Conexão/);
 }finally{x.w.close();}
});
test('direct Pix reset asks before discarding a payable code and cannot generate in a closed cart from another method',async()=>{
 const x=await setup();try{const{$,w,t,click}=x;t.pixSettings={...testPixSettings};await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();await click('pdvPixGenerate');
 const oldPayload=$('pdvPixPayload').value;w.confirm=()=>false;await click('pdvPixReset');assert.equal($('pdvPixPayload').value,oldPayload);assert.equal($('pdvBackItems').disabled,true);
 w.confirm=()=>true;await click('pdvPixReset');assert.equal($('pdvPixPayload').value,'');assert.equal($('pdvBackItems').disabled,false);assert.equal(t.insertCount,0);
 w.document.querySelector('[data-method="cash"]').click();await click('pdvPixGenerate');assert.equal($('pdvPixPayload').value,'');
 }finally{x.w.close();}
});

test('direct Pix never presents a payable code while the financial cycle is closed',async()=>{
 const x=await setup();try{const{$,w,t,click}=x;t.pixSettings={...testPixSettings};await x.cart();w.document.querySelector('[data-method="direct_pix"]').click();await pause();w.INTEGRO_FINANCE_CURRENT_CYCLE.status='fechado';await click('pdvPixGenerate');assert.equal($('pdvPixCode').hidden,true);assert.equal($('pdvPixPayload').value,'');assert.equal(t.insertCount,0);assert.match($('pdvMessage').textContent,/fechado/);
 }finally{x.w.close();}
});
