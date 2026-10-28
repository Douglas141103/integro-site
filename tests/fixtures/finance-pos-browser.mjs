// Isolated financial doubles: no external network and no real charges.
export function installFixture(w) {
 const id=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
 const t=w.PDV_TEST={entries:[],insertCount:0,printCount:0,lostResponse:false,asaas:[],infinitepay:[],requests:[],failCreation:false};
 const fixed={profiles:[{id:id(1),school_id:id(10),role:'diretor'}],schools:[{id:id(10),name:'Instituto Integro',slug:'instituto-integro'}],students:[{id:id(3),full_name:'Aluno de teste',active:true,enrollment_status:'matriculado',guardian_1_name:'Pagador de teste',guardian_1_cpf:'24971563792'}],finance_packages:[{id:id(4),name:'Reforço escolar',default_amount:140,active:true}],finance_discounts:[]};
 class Query {
  constructor(table){this.table=table;this.filters=[];this.mode='read';}
  select(){return this;} eq(k,v){this.filters.push([k,v]);return this;} order(){return this;} maybeSingle(){this.single=true;return this;} insert(rows){this.mode='insert';this.rows=rows;return this;}
  async run(){
   if(this.mode==='insert'){
    t.insertCount++;
    const rows=this.rows.map((r,i)=>({...r,id:id(100+t.entries.length+i),receipt_number:100+t.entries.length+i,created_at:new Date().toISOString()}));t.entries.push(...rows);
    if(t.lostResponse){t.lostResponse=false;return {data:null,error:{message:'Resposta perdida'}};}
    return {data:rows,error:null};
   }
   const rows=(this.table==='finance_entries'?t.entries:fixed[this.table]||[]).filter(r=>this.filters.every(([k,v])=>r[k]===v));return {data:this.single?rows[0]||null:rows,error:null};
  }
  then(resolve,reject){return this.run().then(resolve,reject);}
 }
 for(const records of Object.values(fixed))for(const record of records)record.school_id ||= id(10);
 t.pixSettings=null;t.pixCanConfigure=true;t.pixRpcError=null;t.pixRpcCalls=[];t.copied='';
 Object.defineProperty(w.navigator,'clipboard',{configurable:true,value:{writeText:async text=>{t.copied=text;}}});
 const db={auth:{getUser:async()=>({data:{user:{id:id(1)}}}),getSession:async()=>({data:{session:{access_token:'test-only'}}})},from:table=>new Query(table),rpc:async(name,args)=>{
  t.pixRpcCalls.push({name,args});
  if(t.pixRpcError)return{error:{message:t.pixRpcError},data:null};
  if(args.p_settings){if(!t.pixCanConfigure)return{error:{message:'Sem acesso'},data:null};t.pixSettings={...args.p_settings};}
  return{data:{can_configure:t.pixCanConfigure,settings:t.pixSettings},error:null};
 }};
 w.INTEGRO_SUPABASE={url:'https://payments.example.test',anonKey:'test-public'};w.supabase={createClient:()=>db};w.client=db;
 w.INTEGRO_FINANCE_CYCLE_POLICY={referenceISO:()=> '2026-10-27',getCurrentCycleRange:()=>({cycleKey:'2026-10',startISO:'2026-10-11',endISO:'2026-11-10',isClosingWindow:false})};
 w.INTEGRO_FINANCE_CURRENT_CYCLE={id:id(20),cycle_key:'2026-10',start_date:'2026-10-11',end_date:'2026-11-10',status:'aberto'};
 w.reloadAll=async()=>{};w.confirm=()=>true;w.alert=()=>{};w.AbortSignal={timeout:()=>undefined};
 w.open=()=>{t.printCount++;return {document:{open(){},write(){},close(){}}};};
 w.fetch=async(url,opts)=>{
  const b=JSON.parse(opts.body),provider=url.includes('finance-asaas')?'asaas':'infinitepay';t.requests.push({provider,...b});let result;
  if(b.action==='list')result={enabled:true,connected:true,can_configure:false,account_name:'Instituto Integro',document_masked:'•••0000',orders:t[provider]};
  else if(b.action==='create'){
   if(t.failCreation)throw Error('Conexão interrompida');
   const existing=t[provider].find(o=>o.request_id===b.request_id);
   result=existing||{id:id(provider==='asaas'?30:40),status:'pending',amount:b.items.reduce((s,i)=>s+Math.round(i.finalUnit*100)*i.qty,0),student_name:b.customer.studentName,payer_name:b.customer.payerName,payment_id:provider==='asaas'?'pay_test001':null,checkout_url:provider==='infinitepay'?'https://checkout.infinitepay.io/instituto-integro/test':null,created_at:new Date().toISOString(),request_id:b.request_id};
   if(!existing)t[provider].push(result);
  } else if(b.action==='qr')result={order:t[provider][0],qr:{payload:'000201-test',encodedImage:'iVBORw0KGgoAAA='}};
  else if(b.action==='check')result=t[provider].find(o=>o.id===b.id);
  else result={};
  return {ok:true,status:200,json:async()=>result};
 };
 t.pay=(provider,posted=true)=>{
  const o=t[provider][0];o.status='paid';o.posted_at=posted?new Date().toISOString():null;
  if(posted&&!t.entries.some(r=>r[provider==='asaas'?'asaas_order_id':'infinitepay_order_id']===o.id))t.entries.push({id:id(90),school_id:id(10),[provider==='asaas'?'asaas_order_id':'infinitepay_order_id']:o.id,receipt_number:90,student_name_snapshot:o.student_name,payer_name:o.payer_name,payer_document:'24971563792',entry_type:'mensalidade',description:'Mensalidade de teste',gross_amount:o.amount/100,discount_amount:0,amount_paid:o.amount/100,payment_method:'Pix',created_at:new Date().toISOString()});
 };
 return t;
}
