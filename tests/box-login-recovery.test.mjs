import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {loginMessage,temporary,unavailable} from '../integro-box/login-errors.mjs';
const src=(await readFile(new URL('../integro-box/access.js',import.meta.url),'utf8'))
  .replace(/^import .*;\n/gm,'').replace('export {loginMessage};','').replaceAll('export ','');
function fixture(authResult,accessResult){
 const redirects=[];
 const client={auth:{getUser:async()=>authResult},rpc:async()=>accessResult};
 const gate=new Function('window','location','loginMessage','temporary','unavailable',src+';return requireFamily;')(
   {BoxSupabase:client},{replace:t=>redirects.push(t)},loginMessage,temporary,unavailable);
 return {gate,redirects};
}
test('temporary Auth and RPC outages keep the gate closed without redirecting a session to the password form',async()=>{
 const timeout=fixture({error:{status:504,code:'request_timeout'},data:{user:null}});
 await assert.rejects(timeout.gate(),e=>e.message===unavailable);assert.deepEqual(timeout.redirects,[]);
 const lookup=fixture({data:{user:{id:'x'}}},{status:503,error:{message:'unavailable'}});
 await assert.rejects(lookup.gate(),e=>e.message===unavailable);assert.deepEqual(lookup.redirects,[]);
 const missing=fixture({data:{user:null},error:{name:'AuthSessionMissingError',status:400}});
 assert.equal(await missing.gate(),null);assert.equal(missing.redirects.length,1);
 const denied=fixture({data:{user:{id:'x'}}},{status:403,error:{message:'box_access_denied'}});
 await assert.rejects(denied.gate(),/conta não tem acesso/);
 assert.match(loginMessage({status:400,code:'invalid_credentials'}),/senha incorretos/);
});
