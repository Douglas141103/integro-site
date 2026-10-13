import { PGlite } from '@electric-sql/pglite';
import {readFile} from 'node:fs/promises';
export const uid=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
export async function boxDatabase(){
 const db=new PGlite();
 await db.exec(`create schema auth;create role anon;create role authenticated;
 create table auth.users(id uuid primary key);
 create type public.partner_role as enum ('responsavel','integro_admin','aluno');
 create table public.profiles(id uuid primary key,role public.partner_role);
 create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.uid',true),'')::uuid$$;
 grant usage on schema auth to authenticated;
 insert into auth.users select ('00000000-0000-4000-8000-'||lpad(s::text,12,'0'))::uuid from generate_series(1,8)s;
 insert into public.profiles select id,'responsavel' from auth.users;
 update public.profiles set role='aluno' where id='${uid(8)}';`);
 await db.exec(await readFile(new URL('../supabase/migrations/20261012210000_integro_box.sql',import.meta.url),'utf8'));
 await db.exec(await readFile(new URL('../supabase/migrations/20261013010000_box_public_rooms.sql',import.meta.url),'utf8'));
 const call=(n,action,options={})=>db.transaction(async tx=>{
  await tx.exec('set local role authenticated');
  await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);
  const r=await tx.query('select public.box_room($1,$2,$3,$4,$5,$6,$7,$8) as result',
   [action,options.p_room??null,options.p_code??null,options.p_game??null,options.p_state??{},options.p_revision??-1,options.p_edit??null,options.p_slot??null]);
  return r.rows[0].result;
 });
 return {db,call};
}
