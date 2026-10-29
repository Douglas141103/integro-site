import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {setup} from './intgem-finance-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
import {createPix,pixProof,verifyPix} from '../supabase/functions/intgem-pay/pix.mjs';
import {createHandler} from '../supabase/functions/intgem-pay/handler.mjs';
import {mountIntGemPromotion} from '../integro-box/intgem-promotion.mjs';
import * as catalog from '../integro-box/intgem-catalog.mjs';
import {eggItemArt} from '../integro-box/egg-intgem-catalog.mjs';
const migrations=['20261029012110_intgem_five_day_promotion.sql','20261029014143_intgem_asaas_checkout.sql','20261029021124_intgem_inline_pix.sql'];
const qrId='3026990200000729027299ASA',png='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==';
const pix={qr_id:qrId,payload:'000201-test-payload',encodedImage:png,expires_at:new Date(Date.now()+1800000).toISOString()};
const proof={amount:1099,capture_method:'pix',transaction_nsu:'asaas:pay_inline12345',invoice_slug:'pix:'+qrId};

test('inline Pix restores small packs, pins promotion, rejects mismatches and credits only once after expiry',async()=>{
 const {db,order,pay,rpc,run}=await setup();
 try{
  for(const name of migrations.slice(0,2))await db.exec(await readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8'));
  const old=await order(20,'gem20',89);await pay('checkout',old.id,{checkout_id:uid(200),url:'https://asaas.com/checkoutSession/show?id='+uid(200)});
  const sql=await readFile(new URL('../supabase/migrations/'+migrations[2],import.meta.url),'utf8');await db.exec(sql);await db.exec(sql);
  assert.equal((await pay('inspect',old.id)).payment_flow,'checkout');
  assert.equal((await order(20,'gem1',90)).amount,100);assert.equal((await order(20,'gem5',91)).amount,299);
  const o=await order(20,'gem20',92);assert.equal(o.gems,100);assert.equal(o.payment_flow,'pix');
  const r=await pay('pix',o.id,pix);assert.equal(r.pix.payload,pix.payload);assert.equal(r.amount,1099);assert.equal(r.gems,100);assert.equal(r.url,undefined);
  assert.equal((await order(20,'gem20',92)).pix.payload,pix.payload);
  assert.equal((await pay('lookup_pix',null,{qr_id:qrId})).id,o.id);
  assert.equal((await pay('pix',o.id,{...pix,qr_id:qrId+'A'})).error,'checkout_mismatch');
  assert.equal((await pay('checkout',o.id,{checkout_id:uid(202),url:'https://asaas.com/checkoutSession/show?id='+uid(202)})).error,'checkout_mismatch');
  assert.equal((await pay('settle',o.id,{...proof,capture_method:'credit_card'})).error,'payment_mismatch');
  assert.equal((await pay('settle',o.id,{...proof,invoice_slug:'pix:other'})).error,'payment_mismatch');
  assert.equal((await pay('settle',o.id,{...proof,amount:100})).error,'payment_mismatch');
  await db.exec("update private.intgem_promotions set starts_at=now()-interval '121 hours',ends_at=now()-interval '1 hour'");
  await db.query("update private.intgem_orders set checkout_expires_at=now()-interval '1 minute' where id=$1",[o.id]);
  assert.equal((await order(20,'gem20',92)).error,'checkout_expired');assert.equal((await order(20,'gem20',93)).gems,20);
  assert.equal((await pay('settle',o.id,proof)).gems,100);assert.equal((await pay('settle',o.id,proof)).duplicate,true);assert.equal((await rpc(20)).balance,100);
  assert.equal((await db.query('select count(*)::int n from public.finance_entries where intgem_order_id=$1',[o.id])).rows[0].n,1);
  assert.equal((await pay('settle',old.id,{...proof,transaction_nsu:'asaas:pay_previous123',invoice_slug:uid(200)})).paid,true);
  await assert.rejects(run(20,'select public.box_intgem_payment($1,$2,$3) r',['pix_view',o.id,{}]),/permission denied/);
  assert.equal((await rpc(20)).orders.find(x=>x.id===o.id).payment_flow,'pix');
 }finally{await db.close();}
});
const order={id:uid(100),user_id:uid(20),amount:1099,gems:100,pack:'gem20',status:'pending',provider:'asaas',payment_flow:'pix',pix_qr_id:qrId};
const payment={id:'pay_inline12345',pixQrCodeId:qrId,value:10.99,billingType:'PIX',status:'RECEIVED'};
const config={api_key:'long-test-api-key-at-least-twenty',enabled:true,account_id:uid(102),hook_token:'a-long-test-webhook-token-at-least-32-characters'};

test('Pix is generated on an active receiving key with amount, order reference, single use and expiration',async()=>{
 const calls=[];const result=await createPix(async(path,method,body)=>{calls.push({path,method,body});return path.startsWith('/pix/addressKeys')?{data:[{key:'random-pix-key',status:'ACTIVE',type:'EVP'}]}:{id:qrId,...pix,allowsMultiplePayments:false,externalReference:'intgem:'+order.id};},order);
 assert.equal(result.payload,pix.payload);assert.equal(calls[1].path,'/pix/qrCodes/static');assert.equal(calls[1].body.value,10.99);assert.equal(calls[1].body.allowsMultiplePayments,false);assert.equal(calls[1].body.expirationSeconds,1800);assert.equal(calls[1].body.externalReference,'intgem:'+order.id);assert.equal(calls[1].body.customer,undefined);assert.equal(calls[1].body.customerData,undefined);
 await assert.rejects(createPix(async()=>({data:[]}),order),/pix_not_enabled/);
});

test('Pix confirmation requires exact QR, amount and actual received status, never browser claims',async()=>{
 assert.equal(pixProof(order,payment).paid,true);
 for(const change of [{pixQrCodeId:qrId+'B'},{value:1},{billingType:'CREDIT_CARD'},{externalReference:'unrelated'}])assert.throws(()=>pixProof(order,{...payment,...change}),/mismatch/);
 for(const change of [{status:'PENDING'},{status:'CONFIRMED'},{status:'RECEIVED_IN_CASH'},{status:'REFUNDED'},{deleted:true},{refunds:[{}]}])assert.equal(pixProof(order,{...payment,...change}).paid,false);
 let filter;await verifyPix(async path=>{filter=path;return {data:[payment],hasMore:false};},order);assert.match(filter,/pixQrCodeId=3026990200000729027299ASA/);
 await assert.rejects(verifyPix(async()=>({data:[payment,payment]}),order),/mismatch/);
});

test('inline endpoints enforce ownership and webhook authentication; payment event looks up QR and rechecks Asaas',async()=>{
 const calls=[],providerCalls=[];let current={...order},apiPayment={...payment};
 const h=createHandler({authenticate:async token=>token==='Bearer owner'?{user:{id:uid(20)}}:token==='Bearer other'?{user:{id:uid(21)}}:null,credentials:async()=>config,createOrder:async()=>({...current}),service:async(action,id,data)=>{calls.push({action,id,data});if(['inspect','lookup_pix'].includes(action))return {...current};if(action==='pix_view')return {...current,pix};if(action==='settle'){current.status='paid';return {paid:true};}return {};},fetcher:async url=>{providerCalls.push(url);return new Response(JSON.stringify({data:[apiPayment],hasMore:false}));}});
 const send=async(body,token='owner',path='')=>{const r=await h(new Request('https://edge.test/intgem-pay'+path,{method:'POST',headers:{'Content-Type':'application/json',authorization:'Bearer '+token,'asaas-access-token':token==='bad'?'bad':config.hook_token},body:JSON.stringify(body)}));return {status:r.status,data:await r.json()};};
 assert.equal((await send({action:'pix',order:order.id},'other')).status,404);
 assert.equal((await send({action:'pix',order:order.id})).data.pix.payload,pix.payload);assert.equal(providerCalls.length,0);
 const event={event:'PAYMENT_RECEIVED',account:{id:config.account_id},payment};
 assert.equal((await send(event,'bad','/asaas-webhook')).status,401);
 apiPayment={...payment,status:'PENDING'};assert.equal((await send(event,'owner','/asaas-webhook')).status,503);assert(!calls.some(x=>x.action==='settle'));
 apiPayment={...payment};assert.equal((await send(event,'owner','/asaas-webhook')).data.paid,true);assert(calls.some(x=>x.action==='lookup_pix'));assert.match(providerCalls.at(-1),/pixQrCodeId=/);
 await send(event,'owner','/asaas-webhook');assert.equal(calls.filter(x=>x.action==='settle').length,1);
});

test('wallet shows QR and copy-paste without redirect or personal form, restores pending Pix, and updates after webhook',async()=>{
 const dom=new JSDOM('<main id="wallet"></main>',{url:'https://www.institutointegro.com.br/integro-box/intgem.html',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};
 let server={balance:0,daily:{seconds:0,rewarded:false},items:catalog.ITEMS,owned:[],equipped:[],history:[],orders:[]},copied='',calls=[];
 Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async text=>{copied=text;}}});
 const result={...order,pix:{...pix,expires_at:new Date(Date.now()+60000).toISOString()},server_now:new Date().toISOString()};
 const client={rpc:async()=>({data:structuredClone(server)}),functions:{invoke:async(name,{body})=>{calls.push(body);return {data:body.action==='verify'?{paid:false}:structuredClone(result)};}},auth:{onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}})}};
 Object.assign(w,{mountIntGemPromotion,eggItemArt,GAMES:catalog.GAMES,ITEMS:catalog.ITEMS,PACKS:catalog.PACKS,gemArt:catalog.gemArt,money:catalog.money,activeGame:()=> 'lobby',supabase:client});
 const source=(await readFile(new URL('../integro-box/intgem.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'').replaceAll('export ','');w.eval(source+'\nwindow.startIntGem=startIntGem;');
 try{
  let api=await w.startIntGem({user:{id:uid(20)},standalone:w.document.getElementById('wallet'),client});
  w.document.querySelector('[data-pack="gem20"]').click();await new Promise(r=>setTimeout(r,0));
  assert.equal(w.location.hostname,'www.institutointegro.com.br');assert(w.document.querySelector('.ig-pix-qr img'));assert.equal(w.document.querySelector('#igPixCode').value,pix.payload);assert.match(w.document.querySelector('.ig-pix').textContent,/100 IntGem/);assert.match(w.document.querySelector('.ig-pix-amount').textContent,/10,99/);assert.equal(w.document.querySelectorAll('input').length,0);
  w.document.querySelector('[data-copy-pix]').click();await new Promise(r=>setTimeout(r,0));assert.equal(copied,pix.payload);assert.equal(api.balance,0);
  api.stop();api=await w.startIntGem({user:{id:uid(20)},standalone:w.document.getElementById('wallet'),client});assert.equal(calls.at(-1).action,'pix');assert(w.document.querySelector('.ig-pix-qr img'));
  server={...server,balance:100,orders:[{...order,status:'paid'}]};await api.refresh();assert.equal(api.balance,100);assert.match(w.document.querySelector('#igPixTitle').textContent,/chegaram/);assert.equal(w.document.querySelector('.ig-pix-qr'),null);assert.equal(w.sessionStorage.getItem('intgem-payment-return'),null);
  api.stop();
 }finally{w.BoxIntGem?.stop();w.close();}
});
