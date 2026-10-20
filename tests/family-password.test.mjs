import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';
import { JSDOM } from 'jsdom';
import { mountFamilyPassword } from '../portal/family-password.mjs';

const source = stripTypeScriptTypes(readFileSync(new URL('../supabase/functions/reset-family-password/index.ts', import.meta.url), 'utf8').replace(/^import .*;\s*$/gm, ''), { mode: 'strip' });
function edge(options = {}) {
  const writes = [];
  let handler;
  const db = {
    profiles: [{ id:'admin', role:options.role || 'diretor', school_id:'school', active:options.active ?? true },
      { id:'guardian', role:options.targetRole || 'responsavel', school_id:'school', active:true }],
    students: [{ id:'joao', full_name:'João', school_id:options.school || 'school' }],
    student_guardians: options.noLink ? [] : [{ student_id:'joao', guardian_profile_id:'guardian', students:{ full_name:'João', school_id:'school' } }],
  };
  const admin = { from(name) {
    let rows = db[name];
    return { select(){return this;}, eq(key,value){rows=rows.filter(row=>row[key]===value);return this;},
      maybeSingle:async()=>({data:rows[0] || null}), then(resolve){return Promise.resolve({data:rows}).then(resolve);} };
  }, auth:{ getUser:async()=>options.unauthenticated ? {error:{message:'bad token'}} : {data:{user:{id:'admin'}}}, admin:{
    getUserById:async id=>({data:{user:{id,email:'family@example.test'}}}),
    updateUserById:async(id,attributes)=>{writes.push({id,attributes});return {error:null};},
  } } };
  vm.runInNewContext(source, {Response,createClient:()=>admin,Deno:{env:{get:()=> 'configured'},serve:fn=>{handler=fn;}}});
  return {writes,call:body=>handler(new Request('https://example.test',{method:'POST',headers:{Authorization:'Bearer test-token','Content-Type':'application/json'},body:JSON.stringify(body)}))};
}
const reset = {action:'reset',student_id:'joao',user_id:'guardian',email:'family@example.test',password:'test-password-only'};
test('password reset checks role, active account, school and linked family before any mutation',async()=>{
  for(const options of [{role:'responsavel'},{active:false},{school:'other-school'},{targetRole:'diretor'},{noLink:true},{unauthenticated:true}]){
    const app=edge(options), response=await app.call(reset);
    assert.ok(response.status>=400);
    assert.equal(app.writes.length,0);
  }
});
test('inspect does not change credentials; reset changes only the linked user password',async()=>{
  const app=edge();
  const response=await app.call({action:'inspect',student_id:'joao'});
  const details=await response.json();
  assert.equal(details.email,'family@example.test');
  assert.deepEqual(details.students,['João']);
  assert.equal(app.writes.length,0);
  assert.equal((await app.call(reset)).status,200);
  assert.equal(app.writes.length,1);
  assert.equal(app.writes[0].id,'guardian');
  assert.deepEqual(Object.keys(app.writes[0].attributes),['password']);
});
test('changed target, changed email and short password cannot reset an account',async()=>{
  for(const patch of [{user_id:'other'},{email:'other@example.test'},{password:'short'}]){
    const app=edge();
    assert.ok((await app.call({...reset,...patch})).status>=400);
    assert.equal(app.writes.length,0);
  }
});
test('reset form loads the verified login, checks confirmation, prevents double submission, clears passwords',async()=>{
  const dom=new JSDOM(readFileSync(new URL('../portal/gestao-escolar.html',import.meta.url),'utf8'));
  const d=dom.window.document;
  dom.window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
  dom.window.HTMLDialogElement.prototype.close=function(){this.open=false;};
  d.getElementById('editStudentId').value='joao';
  let saves=0, finish;
  mountFamilyPassword(d,{auth:{getSession:async()=>({data:{session:{access_token:'test-token'}}})}},{url:'https://example.test',anonKey:'public'},async(url,options)=>{
    const body=JSON.parse(options.body);
    if(body.action==='inspect')return {ok:true,json:async()=>({success:true,user_id:'guardian',email:'family@example.test',student_name:'João',students:['João']})};
    saves++; assert.equal(body.student_id,'joao');assert.equal(body.user_id,'guardian');
    await new Promise(resolve=>{finish=resolve;});
    return {ok:true,json:async()=>({success:true,email:'family@example.test'})};
  });
  d.getElementById('openFamilyPassword').click();await new Promise(setImmediate);
  assert.match(d.getElementById('familyPasswordSummary').textContent,/family@example.test/);
  const form=d.getElementById('familyPasswordForm');
  d.getElementById('familyPasswordNew').value='test-password-only';
  d.getElementById('familyPasswordConfirm').value='different-password';
  const submit=()=>form.dispatchEvent(new dom.window.Event('submit',{cancelable:true}));
  submit();assert.equal(saves,0);
  d.getElementById('familyPasswordConfirm').value='test-password-only';
  submit();submit();await new Promise(setImmediate);assert.equal(saves,1);
  finish();await new Promise(setImmediate);
  assert.equal(form.hidden,true);
  assert.equal(d.getElementById('familyPasswordNew').value,'');
  assert.equal(d.getElementById('familyPasswordConfirm').value,'');
  assert.match(d.getElementById('familyPasswordStatus').textContent,/Senha alterada com sucesso/);
  dom.window.close();
});
