export const HANDLE='instituto-integro';
export const MINIMUM_CENTS=100;
export const SITE='https://www.institutointegro.com.br';
export const API='https://api.checkout.infinitepay.io';
const checkoutHosts=new Set(['checkout.infinitepay.com.br','checkout.infinitepay.io','pay.infinitepay.io','buy.infinitepay.io']);
export function safeCheckout(value){try{const u=new URL(value);return u.protocol==='https:'&&checkoutHosts.has(u.hostname)&&!u.username&&!u.password?u.href:null;}catch{return null;}}
export async function providerPost(path,body,{fetcher=fetch}={}){
 const r=await fetcher(API+path,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
 if(!r.ok){let data;try{data=await r.json();}catch{}throw new Error(data?.error==='external_checkout_not_enabled'?'checkout_not_enabled':'provider_unavailable');}
 const data=await r.json();if(!data||typeof data!=='object')throw new Error('invalid_provider_response');return data;
}
export async function createCheckout(order,webhook,options){
 if(order.amount<MINIMUM_CENTS)throw new Error('checkout_below_minimum');
 const result=await providerPost('/links',{handle:HANDLE,order_nsu:order.id,redirect_url:SITE+'/integro-box/intgem.html',webhook_url:webhook,items:[{quantity:1,price:order.amount,description:`${order.gems} IntGem — Instituto Integro`}]},options);
 const url=safeCheckout(result.url);if(!url)throw new Error('invalid_checkout_url');return url;
}
export async function verifyPayment(order,transaction,slug,options){
 const result=await providerPost('/payment_check',{handle:HANDLE,order_nsu:order.id,transaction_nsu:transaction,slug},options);
 if(result.success!==true||result.paid!==true)return {paid:false};
 if(!Number.isSafeInteger(result.amount)||result.amount!==order.amount||!['credit_card','pix'].includes(result.capture_method))throw new Error('payment_mismatch');
 return {paid:true,amount:result.amount,capture_method:result.capture_method,transaction_nsu:transaction,invoice_slug:slug};
}
