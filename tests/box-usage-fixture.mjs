import {readFile} from 'node:fs/promises';
import {boxDatabase,uid} from './box-db-fixture.mjs';
export async function usageDatabase(){
 const {db,call}=await boxDatabase();
 await db.exec(`alter type public.partner_role add value 'diretor';alter type public.partner_role add value 'coordenacao';
 alter table public.profiles add column school_id uuid,add column full_name text;
 alter table auth.users add column email text,add column last_sign_in_at timestamptz;
 create table public.students(id uuid primary key,school_id uuid);
 create table public.student_guardians(student_id uuid,guardian_profile_id uuid);`);
 await db.exec(`update public.profiles set full_name='Perfil '||right(id::text,1);
 update auth.users set email='perfil'||right(id::text,1)||'@example.test',last_sign_in_at=now()-interval '1 day';
 update public.profiles set role='integro_admin' where id='${uid(1)}';
 update public.profiles set role='diretor',school_id='${uid(901)}' where id='${uid(2)}';
 update public.profiles set role='coordenacao',school_id='${uid(901)}' where id='${uid(6)}';
 update public.profiles set role='diretor',school_id='${uid(902)}' where id='${uid(7)}';
 update public.profiles set school_id='${uid(902)}' where id='${uid(4)}';
 insert into public.students values('${uid(800)}','${uid(901)}');
 insert into public.student_guardians values('${uid(800)}','${uid(3)}');`);
 const sql=await readFile(new URL('../supabase/migrations/20261012233000_box_usage_management.sql',import.meta.url),'utf8');await db.exec(sql);await db.exec(sql);
 const run=(n,fn,args)=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);return (await tx.query(fn,args)).rows[0].result;});
 const pulse=(n,id,game='craft',active=true,visible=true,room=null,action='pulse')=>run(n,'select public.box_usage($1,$2,$3,$4,$5,$6,$7) result',[uid(id),action,game,active,visible,room,'desktop']);
 const report=(n,user=null,game=null,mode=null,page=0)=>run(n,"select public.box_usage_report((now() at time zone 'America/Manaus')::date-1,(now() at time zone 'America/Manaus')::date,$1,$2,$3,$4) result",[user?uid(user):null,game,mode,page]);
 const tick=async(n,id,seconds=30)=>{await db.query("update private.box_usage_sessions set last_seen_at=clock_timestamp()-$1*interval '1 second' where id=$2",[seconds,uid(id)]);await db.query("update private.box_usage_clock set counted_at=clock_timestamp()-$1*interval '1 second' where user_id=$2",[seconds,uid(n)]);};
 return {db,call,pulse,report,tick};
}
