import {provider,UUID,PAYMENT_ID,equalToken} from '../finance-asaas/contract.mjs';
import {SITE} from './provider.mjs';
export {provider,UUID,equalToken,SITE};
export const SCHOOL='da5d33a5-616a-4abc-8f88-78f5ecb85cd4';
export const reference=id=>'intgem:'+id;
export const returnUrl=id=>SITE+'/integro-box/intgem.html?intgem_order='+id;
export const checkoutUrl=id=>{if(!UUID.test(id))throw Error('invalid_checkout');return 'https://asaas.com/checkoutSession/show?id='+id;};
export function checkoutBody(order){
 if(!UUID.test(order.id)||!Number.isSafeInteger(order.amount)||order.amount<500)throw Error('checkout_below_minimum');
 const url=returnUrl(order.id);
 return {billingTypes:['PIX','CREDIT_CARD'],chargeTypes:['DETACHED'],minutesToExpire:60,externalReference:reference(order.id),callback:{successUrl:url,cancelUrl:url+'&checkout=canceled',expiredUrl:url+'&checkout=expired'},items:[{name:order.gems+' IntGem',description:order.gems===100?'Promoção: compre 20 IntGem e ganhe 80 de bônus. Total: 100 IntGem.':order.gems+' IntGem — Instituto Integro',quantity:1,value:order.amount/100}]};
}
export function webhookOrder(checkout){
 try{const u=new URL(checkout?.callback?.successUrl);const id=u.searchParams.get('intgem_order');return UUID.test(id)&&u.href===returnUrl(id)?id:null;}catch{return null;}
}
export function validateCheckout(order,checkout){
 const item=checkout?.items?.[0];
 if(!UUID.test(checkout?.id)||webhookOrder(checkout)!==order.id||checkout.items?.length!==1||Number(item?.quantity)!==1||Number(item?.value)!==order.amount/100||(checkout.externalReference&&checkout.externalReference!==reference(order.id))||(order.checkout_id&&order.checkout_id!==checkout.id))throw Error('payment_mismatch');
 return {checkout_id:checkout.id,url:checkoutUrl(checkout.id)};
}
export function paymentProof(order,payment){
 const amount=Number(payment.value)*100;
 if(!PAYMENT_ID.test(payment.id)||!Number.isFinite(amount)||Math.abs(amount-order.amount)>0.000001||!['PIX','CREDIT_CARD'].includes(payment.billingType)||(payment.checkoutSession&&payment.checkoutSession!==order.checkout_id)||(payment.externalReference&&payment.externalReference!==reference(order.id)))throw Error('payment_mismatch');
 if(payment.deleted||payment.refunds?.length||!(payment.status==='RECEIVED'||(payment.billingType==='CREDIT_CARD'&&payment.status==='CONFIRMED')))return {paid:false};
 return {paid:true,amount:order.amount,capture_method:payment.billingType==='PIX'?'pix':'credit_card',transaction_nsu:'asaas:'+payment.id,invoice_slug:order.checkout_id};
}
export async function verifyAsaas(call,order){
 if(!UUID.test(order.checkout_id))return {paid:false};
 // The authenticated API filter binds charges to this checkout even when
 // optional reference fields are absent on individual payment objects.
 const list=await call('/payments?checkoutSession='+order.checkout_id+'&limit=100');
 if(!Array.isArray(list.data)||list.hasMore)throw Error('payment_verification_unavailable');
 const proofs=list.data.map(p=>paymentProof(order,p)).filter(p=>p.paid);
 if(proofs.length>1)throw Error('payment_mismatch');
 return proofs[0]||{paid:false};
}
