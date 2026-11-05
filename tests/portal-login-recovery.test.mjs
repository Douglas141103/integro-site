import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {bindPortalLogin} from '../portal/login-form.mjs';
for(const portal of ['portal','portal-familia'])test(portal+' accepts retry and prevents native submission during a stalled session refresh',async()=>{
  const html=await readFile(new URL('../'+portal+'/index.html',import.meta.url),'utf8');
  const dom=new JSDOM(html),w=dom.window,form=w.document.querySelector('#login-form');
  let resolveSession,attempts=0,redirects=0,message='';
  try{
    assert(form.querySelector('button[type=submit]').disabled);
    form.querySelector('#email').value='test@example.invalid';form.querySelector('#password').value='test-example';
    assert.equal([...new w.FormData(form)].length,0);
    const auth={getSession:()=>new Promise(r=>{resolveSession=r;}),signInWithPassword:async args=>{
      assert.equal(args.email,'test@example.invalid');assert.equal(args.password,'test-example');
      if(++attempts===1)throw Object.assign(new Error('upstream'),{status:504});
      return {data:{session:{}}};
    }};
    bindPortalLogin({form,client:{auth},feedback:s=>{message=s;},go:()=>redirects++});
    const submit=()=>form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
    assert.equal(submit(),false);await new Promise(r=>setImmediate(r));
    assert.match(message,/servidor/i);assert.equal(redirects,0);assert(!form.querySelector('button[type=submit]').disabled);
    assert.equal(submit(),false);await new Promise(r=>setImmediate(r));assert.equal(redirects,1);
    resolveSession({data:{session:{}},error:null});await new Promise(r=>setImmediate(r));assert.equal(redirects,1);
  }finally{dom.window.close();}
});
