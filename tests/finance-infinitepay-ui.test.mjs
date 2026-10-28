import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
const code=await readFile(new URL('../portal/financeiro-infinitepay.js',import.meta.url),'utf8');
const pause=()=>new Promise(r=>setTimeout(r,15));
test('UI disables creation when off, clears cart only after link exists, escapes names and labels checkout accurately',async()=>{
 const dom=new JSDOM('<div id="pdv2"></div>',{url:'https://www.institutointegro.com.br/portal/financeiro.html',runScripts:'outside-only'}),w=dom.window;
 let enabled=false,orders=[],clears=0,fail=false,requests=[];
 w.INTEGRO_SUPABASE={url:'https://example.test',anonKey:'public'};
 w.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{access_token:'test'}}})}})};
 w.AbortSignal={timeout:()=>undefined};w.confirm=()=>true;
 w.fetch=async(url,opts)=>{
  const b=JSON.parse(opts.body);requests.push(b);
  if(b.action==='list')return {ok:true,json:async()=>({enabled,can_configure:true,orders})};
  if(b.action==='settings'){enabled=b.enabled;return {ok:true,json:async()=>({enabled})};}
  if(fail)throw Error('network error');
  const o={id:'order-1',status:'pending',checkout_url:'https://checkout.infinitepay.io/instituto-integro/test',amount:100,created_at:new Date().toISOString(),student_name:'<img onerror=alert(1)>',payer_name:'Responsável'};orders=[o];return {ok:true,json:async()=>o};
 };
 w.eval(code);w.INTEGRO_INFINITEPAY.mount({snapshot:()=>({customer:{},items:[{}]}),clear:()=>clears++,lock:()=>{},refresh:async()=>{}});await pause();
 assert.equal(w.document.getElementById('ipCreate').disabled,true);
 w.document.getElementById('ipToggle').click();await pause();assert.equal(w.document.getElementById('ipCreate').disabled,false);
 fail=true;w.document.getElementById('ipCreate').click();await pause();assert.equal(clears,0);
 fail=false;w.document.getElementById('ipCreate').click();await pause();assert.equal(clears,1);
 const creations=requests.filter(r=>r.action==='create');assert.equal(creations[0].request_id,creations[1].request_id);
 assert.equal(w.document.querySelector('#infinitepayPanel img'),null);
 assert.match(w.document.getElementById('infinitepayPanel').textContent,/QR Code.*página da InfinitePay/);
 assert.match(w.document.getElementById('infinitepayPanel').textContent,/Aguardando pagamento/);
 w.close();
});
