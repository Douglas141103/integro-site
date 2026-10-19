import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';
import { JSDOM } from 'jsdom';
import { createFamilyAccess, mountFamilyAccess } from '../portal/family-access.mjs';

const student = { id: 'student-1', school_id: 'school-1', full_name: 'Aluno de teste', guardian_1_name: 'Responsável de teste', guardian_1_email: 'family@example.test' };
const config = { url: 'https://project.example.test', anonKey: 'test-public-key' };
const client = { auth: { getSession: async () => ({ data: { session: { access_token: 'test-session' } } }) } };

test('existing-student request preserves the student ID and requests create-only mode', async () => {
  let payload;
  await createFamilyAccess(client, config, student, 'test-only-password', async (url, options) => {
    assert.equal(url, config.url + '/functions/v1/dynamic-responder');
    payload = JSON.parse(options.body);
    return { ok: true, json: async () => ({ success: true, user_id: 'new-user' }) };
  });
  assert.equal(payload.student_id, student.id);
  assert.equal(payload.school_id, student.school_id);
  assert.equal(payload.create_only, true);
  assert.equal(payload.relation_type, 'responsavel');
  await assert.rejects(() => createFamilyAccess(client, config, student, 'short'), /8 caracteres/);
  await assert.rejects(() => createFamilyAccess({auth:{getSession:async()=>({data:{}})}}, config, student, 'test-only-password'), /sessão expirou/);
});

test('dialog uses saved data, rejects mismatched passwords, prevents double submit and clears the secret', async () => {
  const dom = new JSDOM(readFileSync(new URL('../portal/gestao-escolar.html', import.meta.url), 'utf8'));
  const d = dom.window.document;
  dom.window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  dom.window.HTMLDialogElement.prototype.close = function () { this.open = false; };
  d.getElementById('editStudentId').value = student.id;
  let calls = 0, resolveRequest;
  const database = { ...client, from(table) {
    assert.equal(table, 'students');
    return {select(){return this;},eq(key,id){assert.equal(id,student.id);return this;},single:async()=>({data:student})};
  }};
  mountFamilyAccess(d, database, config, async () => {
    calls++;
    await new Promise(resolve => { resolveRequest = resolve; });
    return { ok: true, json: async () => ({success:true}) };
  });
  d.getElementById('openFamilyAccess').click();
  await new Promise(setImmediate);
  assert.match(d.getElementById('familyAccessSummary').textContent, /family@example.test/);
  const form = d.getElementById('familyAccessForm');
  d.getElementById('familyAccessPassword').value = 'test-only-password';
  d.getElementById('familyAccessConfirm').value = 'different';
  form.dispatchEvent(new dom.window.Event('submit', {cancelable:true}));
  assert.equal(calls, 0);
  d.getElementById('familyAccessConfirm').value = 'test-only-password';
  form.dispatchEvent(new dom.window.Event('submit', {cancelable:true}));
  form.dispatchEvent(new dom.window.Event('submit', {cancelable:true}));
  await new Promise(setImmediate);
  assert.equal(calls, 1);
  resolveRequest();
  await new Promise(setImmediate);
  assert.equal(form.hidden, true);
  assert.equal(d.getElementById('familyAccessPassword').value, '');
  assert.match(d.getElementById('familyAccessStatus').textContent, /Login criado e vinculado/);
  dom.window.close();
});

const edgeSource = stripTypeScriptTypes(readFileSync(new URL('../supabase/functions/dynamic-responder/index.ts', import.meta.url), 'utf8').replace(/^import .*;\s*$/gm, ''), {mode:'strip'});
function edge({existing = false, role = 'diretor', callerSchool = student.school_id} = {}) {
  const writes = [];
  let handler, clients = 0;
  const profile = {id:'admin',role,school_id:callerSchool};
  function table(name) {
    let selectedId;
    return {select(){return this;},eq(key,value){if(key==='id')selectedId=value;return this;},maybeSingle:async()=>({data:name==='profiles'?(selectedId==='admin'?profile:null):name==='students'?student:null}),
      upsert:async row=>{writes.push({name,row});return {error:null};},
      insert:async row=>{writes.push({name,row});return {error:null};}};
  }
  const caller = {auth:{getUser:async()=>({data:{user:{id:'admin',email:'admin@example.test'}}})},from:table};
  const admin = {from:table,auth:{admin:{
    listUsers:async()=>({data:{users:existing?[{id:'existing',email:student.guardian_1_email}]:[]}}),
    createUser:async data=>{writes.push({name:'auth-create',row:data});return {data:{user:{id:'new-user'}}};},
    updateUserById:async()=>{throw Error('Existing credentials must never be changed');}
  }}};
  vm.runInNewContext(edgeSource,{Response,createClient:()=>++clients===1?caller:admin,Deno:{env:{get:()=> 'configured'},serve:fn=>{handler=fn;}}});
  return {writes,call:body=>handler(new Request(config.url,{method:'POST',headers:{Authorization:'Bearer test-session','Content-Type':'application/json'},body:JSON.stringify(body)}))};
}
const request = {full_name:student.guardian_1_name,email:student.guardian_1_email,password:'test-only-password',student_id:student.id,school_id:student.school_id,create_only:true};
test('create-only refuses existing accounts before any mutation', async()=>{
  const app = edge({existing:true});
  assert.equal((await app.call(request)).status,409);
  assert.equal(app.writes.length,0);
});
test('family creation still rejects a non-admin and a different school', async()=>{
  for(const options of [{role:'responsavel'},{callerSchool:'another-school'}]){
    const app=edge(options);
    assert.equal((await app.call(request)).status,403);
    assert.equal(app.writes.length,0);
  }
});
test('new family account links to the existing student and creates no student row', async()=>{
  const app=edge();
  const response=await app.call(request);
  assert.equal(response.status,200);
  const link=app.writes.find(w=>w.name==='student_guardians');
  assert.equal(link.row.student_id,student.id);
  assert.equal(link.row.guardian_profile_id,'new-user');
  assert.equal(app.writes.some(w=>w.name==='students'),false);
  assert.equal(app.writes.find(w=>w.name==='profiles').row.role,'responsavel');
  assert.equal(app.writes.find(w=>w.name==='auth-create').row.email_confirm,true);
});
