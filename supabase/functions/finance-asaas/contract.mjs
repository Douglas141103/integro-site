import {normalizeSale, UUID, SITE} from '../finance-infinitepay/contract.mjs';
export {UUID, SITE};
export const PAYMENT_ID=/^pay_[a-zA-Z0-9]{6,80}$/;
export const CUSTOMER_ID=/^cus_[a-zA-Z0-9]{6,80}$/;
export function saleForPix(input){
 const sale=normalizeSale(input),document=sale.customer.payer_document.replace(/\D/g,'');
 if(![11,14].includes(document.length))throw Error('Informe o CPF ou CNPJ do pagador no cadastro do caixa.');
 sale.customer.payer_document=document;return sale;
}
export function today(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Manaus',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function validDate(s){return typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s))&&new Date(s).toISOString().slice(0,10)===s;}
export function safeProviderDescription(value,secret=''){
 if(typeof value!=='string')return '';
 let text=value;
 if(secret)text=text.split(secret).join('[credencial protegida]');
 return text.replace(/\$aact_[^\s"'<>]+/gi,'[credencial protegida]')
  .replace(/Bearer\s+[^\s"'<>]+/gi,'[credencial protegida]')
  .replace(/(?:access_token|api_key|authorization)\s*[:=]\s*[^\s,;]+/gi,'[credencial protegida]')
  .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,'[e-mail protegido]')
  .replace(/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b|\b\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}\b|\b\d{11,14}\b/g,'[documento protegido]')
  .replace(/\b[A-Za-z0-9_+\/-]{40,}={0,2}\b/g,'[identificador protegido]')
  .replace(/<[^>]*>/g,'').replace(/[\x00-\x1f\x7f]/g,' ').replace(/\s+/g,' ').trim().slice(0,360);
}
export class AsaasError extends Error {
 constructor(status,data={},secret=''){
  const errors=Array.isArray(data.errors)?data.errors:[],code=errors.find(e=>typeof e?.code==='string')?.code;
  const descriptions=errors.map(e=>safeProviderDescription(e?.description,secret)).filter(Boolean).slice(0,2);
  let message='O Asaas recusou a operação. Confira os dados da cobrança e a situação da conta.';
  if(code==='invalid_value'){
   message='O Asaas recusou o valor da cobrança. Confira o valor mínimo permitido pela sua conta.';
  }else if(code==='invalid_dueDate'||code==='invalid_due_date')message='O Asaas recusou o vencimento. Confira a data da cobrança.';
  else if(code==='invalid_customer'||code==='invalid_cpfCnpj'||code==='invalid_cpf_cnpj')message='O Asaas recusou o cadastro do pagador. Confira o nome e o CPF/CNPJ.';
  else if(code==='invalid_billingType')message='O Pix ainda não está disponível para esta cobrança na conta Asaas.';
  // Validation failures also use generic codes such as invalid_object. Preserve the explanation,
  // not the full response: redact credentials and documents, then render as escaped text in the UI.
  if(descriptions.length&&[400,403,422].includes(status))message=('Asaas: '+descriptions.join(' ')).slice(0,420);
  if(status===401)message='A chave do Asaas é inválida ou expirou. A direção precisa atualizar a conexão.';
  if(status===403&&!descriptions.length)message='O Asaas não liberou esta operação. Confira a aprovação e as permissões da conta.';
  if(status===429)message='Aguarde alguns instantes antes de consultar o Asaas novamente.';
  super(message);this.name='AsaasError';this.status=status;
  this.code=typeof code==='string'&&/^[a-z][a-zA-Z0-9_]{1,59}$/.test(code)&&code!==secret?code:'provider_error';
  this.message+=' (HTTP '+status+'; '+this.code+')';
  this.rejected=[400,401,403,404,422].includes(status);
 }
}
export function provider(apiKey,{fetcher=fetch}={}){
 if(typeof apiKey!=='string'||apiKey.length<20||apiKey.length>1000||/[\r\n]/.test(apiKey))throw Error('Chave de API inválida.');
 return async(path,method='GET',body)=>{
  // Fixed origin; no caller-controlled destinations, retries or raw provider errors.
  if(!/^\/[a-zA-Z0-9/?=&_:%.~-]+$/.test(path)||path.startsWith('//'))throw Error('Operação inválida.');
  const response=await fetcher('https://api.asaas.com/v3'+path,{method,redirect:'error',headers:{access_token:apiKey,'Content-Type':'application/json','User-Agent':'InstitutoIntegro/1.0'},...(body===undefined?{}:{body:JSON.stringify(body)}),signal:AbortSignal.timeout(15000)});
  if(!response.ok){
   let data={};try{data=await response.json();}catch{}
   throw new AsaasError(response.status,data||{},apiKey);
  }
  const data=await response.json();if(!data||typeof data!=='object'||Array.isArray(data))throw Error('Resposta inválida do Asaas.');return data;
 };
}
export async function accountForKey(call){
 const [status,info]=await Promise.all([call('/myAccount/status'),call('/myAccount/commercialInfo')]);
 if(!UUID.test(status.id))throw Error('Não foi possível identificar a conta Asaas.');
 if(status.general!=='APPROVED'||info.commercialInfoExpiration?.isExpired)throw Error('Conclua a aprovação e os dados comerciais da conta no Asaas antes de conectar.');
 const document=String(info.cpfCnpj||'').replace(/\D/g,'');
 if(![11,14].includes(document.length))throw Error('Conta Asaas sem documento validado.');
 return {id:status.id,name:String(info.companyName||info.name||'Conta Asaas').slice(0,200),document_masked:'•••'+document.slice(-4)};
}
export async function getCustomer(call,order){
 const c=order.sale.customer,reference='integro:'+order.school_id+':'+c.payer_document;
 const found=await call('/customers?externalReference='+encodeURIComponent(reference)+'&limit=100');
 const customers=Array.isArray(found.data)?found.data:[];
 let customer=customers.find(x=>x.externalReference===reference&&x.cpfCnpj?.replace(/\D/g,'')===c.payer_document&&x.notificationDisabled===true&&!x.deleted);
 if(!customer)customer=await call('/customers','POST',{name:c.payer_name,cpfCnpj:c.payer_document,externalReference:reference,notificationDisabled:true});
 if(!CUSTOMER_ID.test(customer.id))throw Error('Cadastro do pagador não confirmado pelo Asaas.');
 return customer.id;
}
export const externalReference=id=>'integro:'+id;
export function paymentBody(order,customer){return {customer,billingType:'PIX',value:order.amount/100,dueDate:order.due_date,description:('Instituto Integro — '+order.sale.items.map(i=>i.description).join('; ')).slice(0,500),externalReference:externalReference(order.id)};}
export function verifyPayment(order,payment){
 const cents=Math.round(Number(payment.value)*100);
 if(!PAYMENT_ID.test(payment.id)||payment.id!==order.payment_id||payment.externalReference!==externalReference(order.id)||payment.customer!==order.customer_id||payment.billingType!=='PIX'||!Number.isSafeInteger(cents)||Math.abs(Number(payment.value)*100-cents)>0.000001||cents!==order.amount)throw Error('Pagamento divergente: a direção deve conferir no Asaas.');
 if(payment.status==='REFUNDED'||payment.status==='REFUND_REQUESTED'||payment.status==='REFUND_IN_PROGRESS')return {status:'refunded',amount:cents,payment_id:payment.id};
 if(payment.deleted===true)return {status:'canceled',amount:cents,payment_id:payment.id};
 if(payment.status!=='RECEIVED')return {status:'pending',amount:cents,payment_id:payment.id};
 const date=payment.paymentDate||payment.clientPaymentDate;
 if(!validDate(date))throw Error('O Asaas ainda não informou a data do recebimento.');
 if(payment.refunds?.length)throw Error('Cobrança com estorno exige conciliação pela direção.');
 return {status:'paid',amount:cents,payment_id:payment.id,payment_date:date};
}
export function pixData(data){
 if(typeof data.payload!=='string'||!data.payload.startsWith('000201')||data.payload.length>4096||typeof data.encodedImage!=='string'||!/^iVBORw0KGgo[A-Za-z0-9+/=\r\n]+$/.test(data.encodedImage)||data.encodedImage.length>300000)throw Error('QR Code não confirmado pelo Asaas. Atualize a cobrança.');
 return {payload:data.payload,encodedImage:data.encodedImage,expirationDate:String(data.expirationDate||'').slice(0,40)};
}
export async function equalToken(a,b){
 if(typeof a!=='string'||typeof b!=='string'||a.length>255||a.length<32||b.length<32)return false;
 const hash=async s=>new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
 const [x,y]=await Promise.all([hash(a),hash(b)]);let different=0;for(let i=0;i<x.length;i++)different|=x[i]^y[i];return different===0;
}
