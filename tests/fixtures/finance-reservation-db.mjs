import {readFile} from 'node:fs/promises';
import {setup,id} from './finance-asaas-db.mjs';
const migration=await readFile(new URL('../../supabase/migrations/20261112211421_finance_reservation_credit.sql',import.meta.url),'utf8');
const ipMigration=await readFile(new URL('../../supabase/migrations/20261027221644_finance_infinitepay_checkout.sql',import.meta.url),'utf8');
export async function fixture(){
 const x=await setup(false),db=x.db;
 await db.exec(ipMigration);
 await db.exec(`create function auth.uid() returns uuid language sql as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
 alter table finance_packages alter column id set default gen_random_uuid();
 alter table finance_discounts alter column id set default gen_random_uuid();
 alter table finance_packages add name text,add description text,add default_amount numeric,add active boolean default true;
 alter table finance_discounts add name text,add discount_type text,add value numeric,add description text,add active boolean default true;
 alter table students add active boolean default true,add enrollment_status text default 'pre_matricula';
 alter table finance_entries add created_at timestamptz default now(),add tuition_cycle_start date,add pos_sale_id uuid,add pos_item_index integer;
 `);
 await db.exec(migration);
 const pkg=(await db.query('select id from finance_packages where is_reservation')).rows[0].id;
 const discount=(await db.query('select id from finance_discounts where is_reservation_credit')).rows[0].id;
 let seq=300;
 const entry=async({reserve=false,credit=false,student=id(3),school=id(10),sale=id(100),gross=200,disc=0,type,asaas=null}={})=>(await db.query(`insert into finance_entries(school_id,student_id,package_id,discount_id,gross_amount,discount_amount,amount_paid,entry_type,entry_date,created_by,pos_sale_id,asaas_order_id) values($1,$2,$3,$4,$5,$6,$5::numeric-$6::numeric,$7,current_date,$8,$9,$10) returning *`,[school,student,reserve?pkg:null,credit?discount:null,reserve?50:gross,disc,type||(reserve?'servico':'mensalidade'),id(1),sale,asaas])).rows[0];
 const quote=async(student=id(3),action='quote',sale=null,user=id(1))=>db.transaction(async t=>{await t.query("select set_config('request.jwt.claim.sub',$1,true)",[user]);await t.exec('set local role authenticated');return(await t.query('select finance_reservation_credit($1,$2,$3) r',[student,action,sale])).rows[0].r;});
 const activate=()=>db.exec(`update students set enrollment_status='matriculado' where id='${id(3)}'`);
 const source=()=>entry({reserve:true});
 const sale=(credit=true)=>({customer:{student_id:id(3),student_name:'Teste',payer_name:'Responsável',payer_document:'24971563792'},items:[{type:'mensalidade',description:'Mensalidade',qty:1,gross:20000,discount:credit?5000:0,amount:credit?15000:20000,discount_id:credit?discount:null}],amount:credit?15000:20000});
 const asaCreate=async(s=sale())=>{await x.connect();await x.rpc('settings',{user_id:id(1),enabled:true});return x.create(seq++,s);};
 return {...x,pkg,discount,entry,quote,activate,source,sale,asaCreate};
}
