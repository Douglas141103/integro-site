export const HANDLE='instituto-integro';
export const SITE='https://www.institutointegro.com.br';
export const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const TOKEN=/^[a-zA-Z0-9_.:-]{1,160}$/;
export function safeCheckout(value){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&['checkout.infinitepay.com.br','checkout.infinitepay.io','pay.infinitepay.io','buy.infinitepay.io'].includes(u.hostname)?u.href:null;}catch{return null;}}
const text=(v,max=200)=>typeof v==='string'?v.trim().slice(0,max):'';
const cents=v=>{const n=Number(v);if(!Number.isFinite(n)||n<0||n>1000000)throw Error('Valor inválido.');return Math.round(n*100);};
export function normalizeSale(input){
 const c=input.customer;if(!c||!text(c.payerName)||!text(c.payerDocument)||!text(c.studentName))throw Error('Informe aluno, pagador e documento.');
 if(c.studentId&&!UUID.test(c.studentId))throw Error('Aluno inválido.');
 if(!Array.isArray(input.items)||!input.items.length||input.items.length>50)throw Error('Carrinho inválido.');
 const items=input.items.map(i=>{
  if(!['mensalidade','matricula','avaliacao','material','servico','taxa','outro'].includes(i.type)||!text(i.desc)||!Number.isSafeInteger(i.qty)||i.qty<1||i.qty>1000)throw Error('Item inválido.');
  const gross=cents(i.grossUnit)*i.qty,amount=cents(i.finalUnit)*i.qty,discount=cents(i.discountUnit)*i.qty;
  if(amount<1||amount>gross||gross-discount!==amount)throw Error('Confira os valores e descontos do item.');
  for(const key of ['packageId','discountId'])if(i[key]&&!UUID.test(i[key]))throw Error('Cadastro inválido.');
  return {type:i.type,description:text(i.desc,500),qty:i.qty,gross,discount,amount,package_id:i.packageId||null,package_name:text(i.packageName)||null,discount_id:i.discountId||null,discount_name:text(i.discountName)||null,reference:text(i.ref)||null};
 });
 const amount=items.reduce((s,i)=>s+i.amount,0);if(!Number.isSafeInteger(amount)||amount<100||amount>100000000)throw Error('A cobrança deve ficar entre R$ 1,00 e R$ 1.000.000,00.');
 return {customer:{student_id:c.studentId||null,student_name:text(c.studentName),payer_name:text(c.payerName),payer_document:text(c.payerDocument,30),email:text(c.email),phone:text(c.phone,30)},items,amount,note:text(input.note,500)};
}
export async function postProvider(path,body,{fetcher=fetch}={}){
 const r=await fetcher('https://api.checkout.infinitepay.io'+path,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
 if(!r.ok)throw Error('A InfinitePay não respondeu. Consulte a cobrança antes de tentar novamente.');
 const data=await r.json();if(!data||typeof data!=='object')throw Error('Resposta inválida da InfinitePay.');return data;
}
export async function createCheckout(order,webhook,options){
 const c=order.sale.customer;
 const customer={name:c.payer_name};if(c.email)customer.email=c.email;
 const phone=c.phone.replace(/\D/g,'');if(phone)customer.phone_number='+'+(phone.startsWith('55')?phone:'55'+phone);
 const r=await postProvider('/links',{handle:HANDLE,order_nsu:order.id,webhook_url:webhook,redirect_url:SITE+'/portal/financeiro-pagamento.html',customer,items:order.sale.items.map(i=>({quantity:1,price:i.amount,description:i.description+(i.qty>1?' (quantidade '+i.qty+')':'')}))},options);
 const url=safeCheckout(r.url);if(!url)throw Error('Link de pagamento inválido.');return url;
}
export async function verifyPayment(order,transaction,slug,options){
 if(!TOKEN.test(transaction)||!TOKEN.test(slug))throw Error('Identificador inválido.');
 const r=await postProvider('/payment_check',{handle:HANDLE,order_nsu:order.id,transaction_nsu:transaction,slug},options);
 if(r.success!==true||r.paid!==true)return {paid:false};
 if(!Number.isSafeInteger(r.amount)||r.amount!==order.amount||!['pix','credit_card'].includes(r.capture_method))throw Error('Pagamento divergente.');
 return {paid:true,amount:r.amount,transaction_nsu:transaction,invoice_slug:slug,capture_method:r.capture_method};
}
