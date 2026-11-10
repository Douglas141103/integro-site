import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {normalizeWithdrawal} from '../supabase/functions/collaborator-wallet/contract.mjs';
const html=await readFile(new URL('../portal-colaborador/index.html',import.meta.url),'utf8');
const code=(await readFile(new URL('../portal-colaborador/app.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'');
async function fixture(required=true){
 const dom=new JSDOM(html,{url:'https://www.institutointegro.com.br/portal-colaborador/index.html',runScripts:'outside-only'});
 const w=dom.window,requests=[];let login,nextError=null;
 const data={context:{user_id:'test-user',name:'Teste',bucket:'acionista_1',is_admin:false,webhook_ready:true,start_date:'2026-10-11',pin_required:required},balance:{available:100},ledger:[],withdrawals:[],pending_entries:[]};
 w.INTEGRO_SUPABASE={url:'https://example.invalid',anonKey:'test'};w.AbortSignal=AbortSignal;w.normalizeWithdrawal=normalizeWithdrawal;w.scrollTo=()=>{};
 w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};
 w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
 w.createClient=()=>({auth:{getSession:async()=>({data:{session:{access_token:'test'}}}),signOut:async()=>{}}});
 w.createAutoRefresh=()=>({markUpdated(){},stop(){}});w.bindPortalLogin=({go})=>{login=go();};
 w.fetch=async(url,opts)=>{const body=JSON.parse(opts.body);requests.push(body);
  if(nextError&&body.action!=='dashboard'){const error=nextError;nextError=null;return {ok:false,json:async()=>error};}
  if(body.action==='pin_setup'){data.context.pin_required=false;return {ok:true,json:async()=>({configured:true})};}
  if(body.action==='withdraw')return {ok:true,json:async()=>({status:'DONE'})};
  return {ok:true,json:async()=>structuredClone(data)};
 };
 w.eval(code);await login;
 return {w,requests,$:id=>w.document.getElementById(id),set nextError(e){nextError=e;},flush:()=>new Promise(r=>setImmediate(r)),close:()=>w.close()};
}
test('first access requires double PIN entry, cannot dismiss enrollment, and clears secrets after saving',async()=>{
 const f=await fixture();try{
  assert.equal(f.$('pin-setup-dialog').open,true);
  const cancel=new f.w.Event('cancel',{cancelable:true});f.$('pin-setup-dialog').dispatchEvent(cancel);assert.equal(cancel.defaultPrevented,true);
  const submit=()=>f.$('pin-setup-form').dispatchEvent(new f.w.Event('submit',{cancelable:true}));
  f.$('new-pin').value='0482';f.$('confirm-new-pin').value='0483';submit();await f.flush();
  assert.match(f.$('pin-setup-feedback').textContent,/iguais/);assert.equal(f.requests.filter(x=>x.action==='pin_setup').length,0);
  f.$('confirm-new-pin').value='0482';submit();await f.flush();
  assert.deepEqual(f.requests.find(x=>x.action==='pin_setup'),{action:'pin_setup',pin:'0482',pin_confirmation:'0482'});
  assert.equal(f.$('pin-setup-dialog').open,false);assert.equal(f.$('new-pin').value,'');assert.equal(f.$('confirm-new-pin').value,'');
  assert.equal(f.w.localStorage.length,0);assert.equal(f.w.sessionStorage.length,0);
 }finally{f.close();}
});
test('existing PIN is not requested for enrollment again and is mandatory for every submitted withdrawal',async()=>{
 const f=await fixture(false);try{
  assert.equal(f.$('pin-setup-dialog').open,false);
  f.w.document.querySelector('[data-open-transfer]').click();
  f.$('transfer-amount').value='20,00';f.$('pix-type').value='EMAIL';f.$('pix-key').value='test@example.com';
  f.$('transfer-form').dispatchEvent(new f.w.Event('submit',{cancelable:true}));f.$('confirm-destination').checked=true;
  f.$('send-transfer').click();await f.flush();assert.equal(f.requests.filter(x=>x.action==='withdraw').length,0);
  f.$('withdrawal-pin').value='3847';
  f.nextError={error:'Senha de saque incorreta.',code:'PIN_INVALID',attempts_remaining:4};f.$('send-transfer').click();await f.flush();
  assert.match(f.$('transfer-feedback').textContent,/4 tentativa/);assert.equal(f.$('withdrawal-pin').value,'');
  assert.equal(f.w.sessionStorage.length,0);
  f.$('withdrawal-pin').value='7391';f.$('send-transfer').click();await f.flush();
  const sent=f.requests.filter(x=>x.action==='withdraw');assert.equal(sent.length,2);assert.equal(sent[0].request_id,sent[1].request_id);
  assert.equal(sent[1].pin,'7391');assert.equal(f.$('transfer-dialog').open,false);assert.equal(f.$('withdrawal-pin').value,'');
  assert.equal(f.w.sessionStorage.length,0);
 }finally{f.close();}
});
test('an ambiguous withdrawal keeps its request ID but never persists the PIN',async()=>{
 const f=await fixture(false);try{
  f.w.document.querySelector('[data-open-transfer]').click();f.$('transfer-amount').value='20,00';f.$('pix-type').value='EMAIL';f.$('pix-key').value='test@example.com';
  f.$('transfer-form').dispatchEvent(new f.w.Event('submit',{cancelable:true}));f.$('confirm-destination').checked=true;f.$('withdrawal-pin').value='7391';
  f.nextError={error:'Sem confirmação de resposta.'};f.$('send-transfer').click();await f.flush();
  const stored=JSON.parse(f.w.sessionStorage.getItem('integro-pix-draft:test-user'));
  assert.ok(stored.request_id);assert.equal('pin' in stored,false);assert.equal(f.$('withdrawal-pin').value,'');assert.equal(f.$('edit-transfer').disabled,true);
 }finally{f.close();}
});
