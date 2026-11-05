import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
const html=await readFile(new URL('../portal/dashboard.html',import.meta.url),'utf8');
const flush=()=>new Promise(r=>setImmediate(r));
test('profile timeout ends loading; retry recovers without a second login; school failure preserves confirmed profile',async()=>{
 const dom=new JSDOM(html,{url:'https://example.test/portal/dashboard.html',runScripts:'outside-only'});
 const w=dom.window,d=w.document,profile={id:'user',role:'diretor',school_id:1,full_name:'Diretor'};
 let attempts=0,schoolReads=0,aborted=false,expire;
 const source=[...d.scripts].find(el=>el.textContent.includes('async function initDashboard')).textContent;
 w.INTEGRO_SUPABASE={};w.setTimeout=fn=>{expire=fn;return 1;};w.clearTimeout=()=>{};
 w.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:'user'}}}})},
 from(table){return {select(){return this;},eq(){return this;},limit(){return this;},
 abortSignal(signal){signal.addEventListener('abort',()=>{aborted=true;});return this;},
 maybeSingle(){
  if(table==='profiles')return ++attempts===1?new Promise(()=>{}):Promise.resolve({data:profile});
  return Promise.resolve(++schoolReads===1?{error:{code:'PGRST002'}}:{data:{name:'Etelvina Pereira Braga'}});
 }};}})};
 try{
  w.eval(source);await flush();expire();await flush();
  assert(aborted);assert(!d.getElementById('panelRetry').hidden);assert.equal(d.getElementById('userName').textContent,'Perfil indisponível');
  assert(d.getElementById('boxManagementCard').hidden);
  d.getElementById('panelRetry').click();await flush();assert.equal(d.getElementById('userName').textContent,'Diretor');
  assert.match(d.getElementById('panelStatus').textContent,/carregar a escola/);
  d.getElementById('panelRetry').click();await flush();assert.equal(d.getElementById('schoolName').textContent,'Etelvina Pereira Braga');
  assert(d.getElementById('panelRetry').hidden);assert(!d.querySelector('[data-etelvina-survey]').hidden);
 }finally{w.close();}
});
