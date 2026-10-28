import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {PGlite} from '@electric-sql/pglite';
const migration=await readFile(new URL('../supabase/migrations/20261028020312_finance_direct_pix_settings.sql',import.meta.url),'utf8');
const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const settings={key_type:'random',pix_key:'123e4567-e12b-12d1-a456-426655440000',merchant_name:'INSTITUTO INTEGRO',merchant_city:'MANAUS',enabled:true};
test('Pix configuration is private, tenant-scoped, and writable only by an active director/admin',async()=>{
 const db=new PGlite();
 try{
 await db.exec(`create schema auth;create schema private;create role anon;create role authenticated;
 create table auth.users(id uuid primary key);create table public.schools(id uuid primary key);
 create table public.profiles(id uuid primary key,role text,school_id uuid,active boolean);
 create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
 grant usage on schema public,auth to anon,authenticated;
 insert into public.schools values('${id(10)}'),('${id(20)}');
 insert into auth.users values('${id(1)}'),('${id(2)}'),('${id(3)}'),('${id(4)}'),('${id(5)}'),('${id(6)}');
 insert into public.profiles values('${id(1)}','diretor','${id(10)}',true),('${id(2)}','coordenacao','${id(10)}',true),('${id(3)}','professor','${id(10)}',true),('${id(4)}','diretor','${id(20)}',true),('${id(5)}','diretor','${id(10)}',false),('${id(6)}','integro_admin','${id(20)}',true);`);
 await db.exec(migration);
 const act=async(user,role='authenticated')=>{await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[user?id(user):'']);await db.exec('set role '+role);};
 const call=(school=10,s=null)=>db.query('select public.finance_direct_pix_settings($1::uuid,$2::jsonb) as result',[id(school),s]);
 await act(null,'anon');await assert.rejects(call(),/permission denied/);
 await act(null);await assert.rejects(call(),/Sem acesso/);
 await act(1);assert.equal((await call()).rows[0].result.settings,null);
 const saved=(await call(10,settings)).rows[0].result;assert.equal(saved.can_configure,true);assert.equal(saved.settings.pix_key,settings.pix_key);
 await assert.rejects(db.query('select * from private.finance_direct_pix_settings'),/permission denied/);
 await assert.rejects(call(20),/Sem acesso/);
 await act(2);assert.equal((await call()).rows[0].result.can_configure,false);await assert.rejects(call(10,{...settings,pix_key:'123e4567-e12b-12d1-a456-426655440001'}),/Somente a direção/);
 for(const who of [3,4,5]){await act(who);await assert.rejects(call(),/Sem acesso/);await assert.rejects(call(10,settings),/Sem acesso/);}
 await act(1);for(const s of [{...settings,pix_key:'inchk_secret'},{...settings,merchant_city:'<script>'},{...settings,merchant_name:''},{...settings,enabled:'true'},{...settings,key_type:'invalid'}])await assert.rejects(call(10,s),/Configuração Pix inválida|Confira a chave/);
 assert.equal((await call()).rows[0].result.settings.pix_key,settings.pix_key);
 assert.equal((await call(10,{...settings,enabled:false})).rows[0].result.settings.enabled,false);
 await act(6);assert.equal((await call()).rows[0].result.can_configure,true);
 await db.exec('reset role');const rows=(await db.query('select school_id,updated_by from private.finance_direct_pix_settings')).rows;assert.equal(rows.length,1);assert.equal(rows[0].school_id,id(10));assert.equal(rows[0].updated_by,id(1));
 const rls=(await db.query("select relrowsecurity from pg_class where oid='private.finance_direct_pix_settings'::regclass")).rows[0];assert.equal(rls.relrowsecurity,true);
 }finally{await db.close();}
});
