import test from 'node:test';
import assert from 'node:assert/strict';
import {createAutoRefresh} from '../portal-colaborador/auto-refresh.mjs';
function fixture(){
 const doc=new EventTarget();doc.visibilityState='visible';const win=new EventTarget();
 let connected=true,allowed=true,pending=false,clock=10000,next=0,calls=0,result=true;
 const timers=new Map();let refresh=async()=>{calls++;return result;};
 const control=createAutoRefresh({doc,win,online:()=>connected,canRefresh:()=>allowed,now:()=>clock,interval:()=>pending?10000:30000,
  refresh:()=>refresh(),setTimer:(fn,delay)=>{const id=++next;timers.set(id,{fn,delay});return id;},clearTimer:id=>timers.delete(id)});
 return {doc,win,control,timers,get calls(){return calls;},set connected(v){connected=v;},set allowed(v){allowed=v;},set pending(v){pending=v;},set result(v){result=v;},set refresh(fn){refresh=fn;},
  get delay(){return [...timers.values()][0]?.delay;},advance(ms){clock+=ms;},
  async run(){assert.equal(timers.size,1);const [id,t]=[...timers][0];timers.delete(id);clock+=t.delay;await t.fn();},
  async flush(){await new Promise(r=>setImmediate(r));}
 };
}
test('refreshes every 30 seconds and speeds up only for processing transfers',async()=>{
 const f=fixture();assert.equal(f.delay,30000);await f.run();assert.equal(f.calls,1);assert.equal(f.timers.size,1);
 f.pending=true;f.control.markUpdated();assert.equal(f.delay,10000);await f.run();assert.equal(f.calls,2);
 f.pending=false;f.control.markUpdated();assert.equal(f.delay,30000);f.control.stop();
});
test('pauses hidden/offline pages and refreshes on return without duplicate focus requests',async()=>{
 const f=fixture();f.doc.visibilityState='hidden';f.doc.dispatchEvent(new Event('visibilitychange'));assert.equal(f.timers.size,0);assert.equal(f.calls,0);
 f.doc.visibilityState='visible';f.doc.dispatchEvent(new Event('visibilitychange'));await f.flush();assert.equal(f.calls,1);
 f.win.dispatchEvent(new Event('focus'));await f.flush();assert.equal(f.calls,1);assert.equal(f.timers.size,1);
 f.connected=false;f.win.dispatchEvent(new Event('offline'));assert.equal(f.timers.size,0);
 f.advance(6000);f.connected=true;f.win.dispatchEvent(new Event('online'));await f.flush();assert.equal(f.calls,2);f.control.stop();
});
test('leaves forms and logged-out sessions alone, resumes after a dialog closes',async()=>{
 const f=fixture();f.allowed=false;await f.run();assert.equal(f.calls,0);
 f.allowed=true;f.doc.dispatchEvent(new Event('close'));await f.flush();assert.equal(f.calls,1);f.control.stop();
});
test('never overlaps requests or restarts after logout while a request completes',async()=>{
 const f=fixture();let resolve,calls=0;f.refresh=()=>{calls++;return new Promise(r=>resolve=r);};
 const running=f.run();f.advance(6000);f.win.dispatchEvent(new Event('focus'));f.doc.dispatchEvent(new Event('visibilitychange'));assert.equal(calls,1);
 f.control.stop();resolve(true);await running;assert.equal(f.timers.size,0);
 f.advance(6000);f.win.dispatchEvent(new Event('focus'));assert.equal(calls,1);
});
test('backs off after failures and returns to normal after recovery',async()=>{
 const f=fixture();f.result=false;await f.run();assert.equal(f.delay,30000);await f.run();assert.equal(f.delay,60000);await f.run();assert.equal(f.delay,120000);await f.run();assert.equal(f.delay,120000);
 f.result=true;await f.run();assert.equal(f.delay,30000);f.control.stop();
});

test('portal updates balances and receipts in place, preserving filters and consulting only pending transfers',async()=>{
 const {readFile}=await import('node:fs/promises');const {JSDOM}=await import('jsdom');
 const html=await readFile(new URL('../portal-colaborador/index.html',import.meta.url),'utf8');
 const code=(await readFile(new URL('../portal-colaborador/app.js',import.meta.url),'utf8')).replace(/^import .*;\n/gm,'');
 const dom=new JSDOM(html,{url:'https://www.institutointegro.com.br/portal-colaborador/index.html',runScripts:'outside-only'});const w=dom.window;
 let options,login,stopped=false;const actions=[];
 let data={context:{name:'Teste',bucket:'acionista_1',is_admin:true,webhook_ready:true,start_date:'2026-10-11'},balance:{available:20},ledger:[],withdrawals:[],pending_entries:[]};
 w.INTEGRO_SUPABASE={url:'https://example.invalid',anonKey:'test'};w.AbortSignal=AbortSignal;
 w.createClient=()=>({auth:{getSession:async()=>({data:{session:{access_token:'test'}}}),signOut:async()=>{}}});
 w.createAutoRefresh=o=>{options=o;return {markUpdated(){},stop(){stopped=true;}};};
 w.bindPortalLogin=({go})=>{login=go();};
 w.fetch=async(url,request)=>{const action=JSON.parse(request.body).action;actions.push(action);assert.ok(['dashboard','reconcile'].includes(action));return {ok:true,json:async()=>structuredClone(data)};};
 w.eval(code);await login;
 assert.match(w.document.getElementById('available').textContent,/20,00/);assert.equal(options.canRefresh(),true);
 const search=w.document.getElementById('search');search.value='mensalidade';
 data.balance.available=50;data.pending_entries=[{id:'r1',receipt_number:205,amount_paid:150,entry_date:'2026-11-06',payment_method:'Dinheiro'}];data.withdrawals=[{id:'w1',status:'PENDING',amount:2,created_at:'2026-11-06',pix_type:'EMAIL',pix_key:'teste@example.com'}];
 await options.refresh();assert.match(w.document.getElementById('available').textContent,/50,00/);assert.match(w.document.getElementById('admin-list').textContent,/205/);assert.equal(search.value,'mensalidade');assert.equal(options.interval(),10000);
 const dialog=w.document.getElementById('transfer-dialog');dialog.setAttribute('open','');w.document.getElementById('pix-key').value='rascunho@example.com';assert.equal(options.canRefresh(),false);dialog.removeAttribute('open');
 data.withdrawals[0].status='DONE';await options.refresh();assert.deepEqual(actions,['dashboard','dashboard','reconcile']);assert.equal(options.interval(),30000);assert.equal(w.document.getElementById('pix-key').value,'rascunho@example.com');assert.equal(stopped,false);dom.window.close();
});
