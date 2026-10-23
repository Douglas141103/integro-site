import {PGlite} from '@electric-sql/pglite';
import {readFile} from 'node:fs/promises';
export const userId=i=>'00000000-0000-4000-8000-'+String(i).padStart(12,'0');
export async function descubraDatabase(){
 const db=new PGlite();await db.exec(`create schema auth;create schema private;create role anon;create role authenticated;create table auth.users(id uuid primary key);insert into auth.users select ('00000000-0000-4000-8000-'||lpad(i::text,12,'0'))::uuid from generate_series(1,9)i;create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.uid',true),'')::uuid$$;grant usage on schema auth to authenticated;create function public.box_access() returns jsonb language plpgsql as $$begin if auth.uid() is null then raise exception 'authentication_required' using errcode='42501';end if;return '{"allowed":true}';end $$;`);
 await db.exec(await readFile(new URL('../supabase/migrations/20261023205650_descubra_game.sql',import.meta.url),'utf8'));
 async function call(i,action,arg={},throttle=false){if(!throttle)await db.query("update private.descubra_limits set last_call='-infinity' where user_id=$1",[userId(i)]);return db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[i?userId(i):'']);return (await tx.query('select public.descubra_room($1,$2) as result',[action,arg])).rows[0].result;});}
 return {db,call};
}
