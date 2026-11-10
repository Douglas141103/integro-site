import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
import {createHandler} from '../supabase/functions/collaborator-wallet/handler.mjs';
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const migration=await readFile(new URL('../supabase/migrations/20261110043617_collaborator_withdrawal_pin.sql',import.meta.url),'utf8');
async function fixture(){
 const db=new PGlite();
 // PGlite lacks pgcrypto. This fixture substitutes hashing ONLY to exercise the
 // PostgreSQL authorization/locking state machine. Real bcrypt is checked in a
 // rolled-back deployment smoke test; this substitute is never deployed.
 await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;
 create schema private;create schema extensions;
 create function extensions.gen_salt(text,integer) returns text language sql as $$select gen_random_uuid()::text$$;
 create function extensions.crypt(text,text) returns text language sql as $$select split_part($2,'$',1)||'$'||md5($1||split_part($2,'$',1))$$;
 create table private.collaborator_members(user_id uuid primary key,school_id uuid,active boolean);
 create table public.profiles(id uuid primary key,school_id uuid,active boolean);
 insert into private.collaborator_members values('${id(1)}','${id(10)}',true),('${id(2)}','${id(10)}',true);
 insert into public.profiles values('${id(1)}','${id(10)}',true),('${id(2)}','${id(10)}',true);
 grant usage on schema private,extensions to service_role;
 grant select,update on private.collaborator_members to service_role;
 grant select on public.profiles to service_role;`);
 await db.exec(migration);
 const pinRpc=(action,data)=>db.transaction(async tx=>{await tx.exec('set local role service_role');return (await tx.query('select public.collaborator_pin_service($1,$2) r',[action,data])).rows[0].r;});
 const setup=(user=id(1),pin='3847',confirmation=pin)=>pinRpc('setup',{user_id:user,pin,pin_confirmation:confirmation});
 const verify=(pin,user=id(1))=>pinRpc('verify',{user_id:user,pin});
 return {db,pinRpc,setup,verify};
}
test('enrollment requires two matching four-digit strings and cannot replace an existing PIN',async()=>{
 const f=await fixture();try{
  assert.equal((await f.pinRpc('status',{user_id:id(1)})).configured,false);
  assert.equal((await f.verify('3847')).code,'PIN_NOT_SET');
  for(const pin of [null,3847,'384','38470','12a4'])assert.equal((await f.setup(id(1),pin)).code,'PIN_FORMAT');
  assert.equal((await f.setup(id(1),'3847','3848')).code,'PIN_MISMATCH');
  for(const pin of ['0000','1111','1234','4321'])assert.equal((await f.setup(id(1),pin)).code,'PIN_WEAK');
  assert.equal((await f.setup(id(1),'0482')).configured,true);
  assert.equal((await f.setup(id(1),'3847')).code,'PIN_ALREADY_SET');
  assert.equal((await f.verify('0482')).verified,true);
  assert.equal((await f.verify('3847')).code,'PIN_INVALID');
  assert.deepEqual(Object.keys(await f.pinRpc('status',{user_id:id(1)})).sort(),['configured','locked_until']);
 }finally{await f.db.close();}
});
test('wrong PIN attempts persist; fifth attempt blocks even the correct PIN, then expiry allows retry',async()=>{
 const f=await fixture();try{
  await f.setup();
  for(let n=1;n<=4;n++){const r=await f.verify('2468');assert.equal(r.code,'PIN_INVALID');assert.equal(r.attempts_remaining,5-n);}
  assert.equal((await f.verify('2468')).code,'PIN_LOCKED');
  assert.equal((await f.verify('3847')).code,'PIN_LOCKED');
  assert.equal((await f.setup()).code,'PIN_ALREADY_SET');
  assert.ok((await f.pinRpc('status',{user_id:id(1)})).locked_until);
  await f.db.exec("update private.collaborator_withdrawal_pins set locked_until=now()-interval '1 second'");
  assert.equal((await f.verify('2468')).attempts_remaining,4);
  assert.equal((await f.verify('3847')).verified,true);
  assert.equal((await f.verify('2468')).attempts_remaining,4);
 }finally{await f.db.close();}
});
test('PINs and failed attempts belong to each member; browser roles cannot read hashes or call the service',async()=>{
 const f=await fixture();try{
  await f.setup();await f.setup(id(2),'7391');
  assert.equal((await f.verify('3847',id(2))).code,'PIN_INVALID');
  assert.equal((await f.verify('7391',id(2))).verified,true);
  assert.equal((await f.verify('3847')).verified,true);
  await f.db.exec(`update public.profiles set active=false where id='${id(2)}'`);
  await assert.rejects(f.verify('7391',id(2)),/não autorizado/);
  for(const role of ['anon','authenticated']){
   await f.db.exec('set role '+role);
   await assert.rejects(f.db.query('select pin_hash from private.collaborator_withdrawal_pins'),/permission denied/);
   await assert.rejects(f.db.query("select public.collaborator_pin_service('status','{}')"),/permission denied/);
   await f.db.exec('reset role');
  }
 }finally{await f.db.close();}
});
test('concurrent setup requests do not overwrite the first PIN',async()=>{
 const f=await fixture();try{
  const results=await Promise.all([f.setup(id(1),'3847'),f.setup(id(1),'7391')]);
  assert.equal(results.filter(r=>r.configured).length,1);assert.equal(results.filter(r=>r.code==='PIN_ALREADY_SET').length,1);
  assert.equal((await f.verify('3847')).verified,true);
 }finally{await f.db.close();}
});
test('withdrawal requires the server-verified member PIN before any balance query, reservation or payment',async()=>{
 const f=await fixture();try{
  let providerReads=0,payments=0,reservations=0;
  const withdrawal={id:id(30),amount:20,pix_key:'test@example.com',pix_type:'EMAIL'};
  const handler=createHandler({pinRpc:f.pinRpc,getUser:async token=>token==='valid'?{id:id(1)}:null,
   rpc:async(action,data)=>{
    if(action==='context')return {user_id:id(1),school_id:id(10)};
    if(action==='reserve'){reservations++;return {id:withdrawal.id};}
    if(action==='claim')return {claimed:true,withdrawal};
    if(action==='update')return data;
    throw Error('Unexpected wallet action '+action);
   },credentials:async()=>({enabled:true,api_key:'a-test-key-with-minimum-length'}),fetcher:async(url,opts)=>{
    if(opts.method==='POST'){payments++;return Response.json({id:id(31),value:20,status:'DONE',externalReference:'integro-withdrawal:'+withdrawal.id,pixAddressKey:withdrawal.pix_key});}
    providerReads++;return Response.json({balance:100});
   }});
  const send=(data,token='valid')=>handler(new Request('https://example.test/functions/v1/collaborator-wallet',{method:'POST',headers:{authorization:'Bearer '+token},body:JSON.stringify(data)}));
  const body={action:'withdraw',request_id:id(32),amount:20,pix_key:withdrawal.pix_key,pix_type:'EMAIL',user_id:id(2),pin_verified:true};
  assert.equal((await send({...body,pin:'3847'},'bad')).status,401);
  assert.equal((await send({...body,pin:'3847'})).status,409);
  await f.setup(id(2),'7391');
  assert.equal((await send({action:'pin_setup',user_id:id(2),pin:'3847',pin_confirmation:'3847'})).status,200);
  assert.equal((await f.verify('7391',id(2))).verified,true);
  assert.equal((await send(body)).status,400);
  assert.equal((await send({...body,pin:'7391'})).status,403);
  assert.equal(providerReads+payments+reservations,0);
  assert.equal((await send({...body,pin:'3847'})).status,200);
  assert.equal(payments,1);assert.equal(reservations,1);assert.equal(providerReads,1);
 }finally{await f.db.close();}
});
