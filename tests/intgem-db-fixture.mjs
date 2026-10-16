import {readFile} from 'node:fs/promises';
import {usageDatabase} from './box-usage-fixture.mjs';
import {uid} from './box-db-fixture.mjs';
const migration=await readFile(new URL('../supabase/migrations/20261016180041_box_intgem_economy.sql',import.meta.url),'utf8');
export async function intgemDatabase(){
 const {db,call,pulse}=await usageDatabase();
 await db.exec(`create role service_role;alter table auth.users add column email_confirmed_at timestamptz default now(),add column is_anonymous boolean default false;alter table public.profiles add column active boolean default true;alter table public.students add column full_name text;insert into auth.users(id,email) values('${uid(20)}','visitor@example.test'),('${uid(21)}','unconfirmed@example.test');update auth.users set email_confirmed_at=null where id='${uid(21)}';`);
 for(const name of ['20261013210000_box_egg_expansion.sql','20261016170000_box_egg_twenty.sql','20261015010000_box_moderated_chat.sql'])await db.exec(await readFile(new URL('../supabase/migrations/'+name,import.meta.url),'utf8'));
 await db.exec(migration);await db.exec(migration);
 const priceMigration=await readFile(new URL('../supabase/migrations/20261016184145_box_intgem_one_real.sql',import.meta.url),'utf8');await db.exec(priceMigration);await db.exec(priceMigration);
 const run=(n,sql,args=[])=>db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("select set_config('test.uid',$1,true)",[n?uid(n):'']);return (await tx.query(sql,args)).rows[0]?.r;});
 const rpc=(n,action='wallet',payload={})=>run(n,'select public.box_intgem($1,$2) r',[action,payload]);
 const access=(n,name=null)=>run(n,'select public.box_access($1) r',[name]);
 const order=(n,pack='gem20',nonce=90)=>run(n,'select public.box_intgem_order($1,$2) r',[pack,uid(nonce)]);
 const pay=(action,id,data={})=>db.transaction(async tx=>{await tx.exec('set local role service_role');return (await tx.query('select public.box_intgem_payment($1,$2,$3) r',[action,id,data])).rows[0].r;});
 const tick=async(n,seconds=30,game='egg',active=true,visible=true)=>{await db.query("update private.intgem_clock set last_seen=clock_timestamp()-$1*interval '1 second' where user_id=$2",[seconds,uid(n)]);return rpc(n,'pulse',{game,active,visible});};
 return {db,call,pulse,run,rpc,access,order,pay,tick};
}
