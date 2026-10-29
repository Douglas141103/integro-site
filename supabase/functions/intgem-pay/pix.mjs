import {pixData,PAYMENT_ID} from '../finance-asaas/contract.mjs';
import {reference,UUID} from './asaas.mjs';
export const QR_ID=/^[A-Za-z0-9]{16,64}$/;
export const PIX_SECONDS=1800;
export async function createPix(call,order){
 if(!UUID.test(order.id)||!Number.isSafeInteger(order.amount)||order.amount<100)throw Error('checkout_below_minimum');
 const keys=await call('/pix/addressKeys?status=ACTIVE&limit=100');
 const active=Array.isArray(keys.data)?keys.data.filter(k=>k.status==='ACTIVE'&&typeof k.key==='string'):[];
 const key=active.find(k=>k.type==='EVP')||active[0];
 if(!key)throw Object.assign(Error('pix_not_enabled'),{rejected:true});
 const expires=new Date(Date.now()+PIX_SECONDS*1000).toISOString();
 const qr=await call('/pix/qrCodes/static','POST',{addressKey:key.key,value:order.amount/100,description:order.gems+' IntGem - Instituto Integro',format:'ALL',expirationSeconds:PIX_SECONDS,allowsMultiplePayments:false,externalReference:reference(order.id)});
 const data=pixData(qr);
 if(!QR_ID.test(qr.id)||qr.allowsMultiplePayments!==false||qr.externalReference!==reference(order.id))throw Error('invalid_pix');
 return {qr_id:qr.id,payload:data.payload,encodedImage:data.encodedImage,expires_at:expires};
}
export function pixProof(order,payment){
 const amount=Number(payment.value)*100;
 if(!QR_ID.test(order.pix_qr_id)||payment.pixQrCodeId!==order.pix_qr_id||!PAYMENT_ID.test(payment.id)||payment.billingType!=='PIX'||!Number.isFinite(amount)||Math.abs(amount-order.amount)>0.000001||(payment.externalReference&&payment.externalReference!==reference(order.id)))throw Error('payment_mismatch');
 if(payment.deleted||payment.refunds?.length||payment.status!=='RECEIVED')return {paid:false};
 return {paid:true,amount:order.amount,capture_method:'pix',transaction_nsu:'asaas:'+payment.id,invoice_slug:'pix:'+order.pix_qr_id};
}
export async function verifyPix(call,order){
 if(!QR_ID.test(order.pix_qr_id))return {paid:false};
 const list=await call('/payments?pixQrCodeId='+order.pix_qr_id+'&limit=100');
 if(!Array.isArray(list.data)||list.hasMore)throw Error('payment_verification_unavailable');
 const paid=list.data.map(p=>pixProof(order,p)).filter(p=>p.paid);
 if(paid.length>1)throw Error('payment_mismatch');
 return paid[0]||{paid:false};
}
