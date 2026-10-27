import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
const code=await readFile(new URL('../portal/financeiro-asaas.js',import.meta.url),'utf8');
const pause=()=>new Promise(r=>setTimeout(r,30));
test('Asaas UI connects without persisting a key; Pix creation is disabled until enabled and displays direct payload',async()=>{
 const dom=new JSDOM('<div id="pdv2"></div>',{url:'https://www.institutointegro.com.br/portal/financeiro.html',runScripts:'outside-only'}),w=dom.window;
 let connected=false,enabled=false,orders=[],clears=0,fail=true,requests=[],copied;
 w.INTEGRO_SUPABASE={url:'https://example.test',anonKey:'public'};w.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{access_token:'test'}}})}})};
 w.AbortSignal={timeout:()=>undefined};w.confirm=()=>true;Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async s=>{copied=s;}}});
 const qr={payload:'000201-test-payload',encodedImage:'iVBORw0KGgoAAA=',expirationDate:'2026-12-31'};
 w.fetch=async(url,opts)=>{
  const b=JSON.parse(opts.body);requests.push(b);
  let result;if(b.action==='list')result={connected,enabled,can_configure:true,account_name:'Instituto Teste',document_masked:'•••1234',orders};
  else if(b.action==='connect'){connected=true;result={connected:true};}
  else if(b.action==='settings'){enabled=b.enabled;result={enabled};}
  else if(b.action==='qr')result={order:orders[0],qr};
  else if(b.action==='create'){
   if(fail)throw Error('network error');
   const o={id:'00000000-0000-4000-8000-000000000030',status:'pending',payment_id:'pay_test001',amount:100,created_at:new Date().toISOString(),student_name:'<img onerror=alert(1)>',payer_name:'Responsável'};orders=[o];result=o;
  }
  return {ok:true,json:async()=>result};
 };
 w.eval(code);w.INTEGRO_ASAAS.mount({snapshot:()=>({customer:{},items:[{}]}),clear:()=>clears++,lock:()=>{},refresh:async()=>{}});await pause();
 assert.equal(w.document.getElementById('asaasCreate').disabled,true);
 const key=w.document.getElementById('asaasKey');key.value='fake-test-key';w.document.getElementById('asaasEmail').value='owner@example.test';
 w.document.getElementById('asaasConnectForm').dispatchEvent(new w.Event('submit',{cancelable:true}));assert.equal(key.value,'');await pause();
 assert.equal(w.localStorage.length,0);assert.equal(w.sessionStorage.length,0);assert.equal(w.document.getElementById('asaasCreate').disabled,true);
 w.document.getElementById('asaasToggle').click();await pause();assert.equal(w.document.getElementById('asaasCreate').disabled,false);
 w.document.getElementById('asaasCreate').click();await pause();assert.equal(clears,0);
 fail=false;w.document.getElementById('asaasCreate').click();await pause();assert.equal(clears,1);
 const creations=requests.filter(x=>x.action==='create');assert.equal(creations[0].request_id,creations[1].request_id);
 assert.equal(w.document.querySelector('#asaasOrders img'),null);assert.equal(w.document.getElementById('asaasPayload').value,qr.payload);
 w.document.getElementById('asaasCopy').click();await pause();assert.equal(copied,qr.payload);w.close();
});
