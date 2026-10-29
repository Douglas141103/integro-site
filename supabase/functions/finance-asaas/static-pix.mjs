import {UUID,PAYMENT_ID,externalReference,pixData,validDate} from './contract.mjs';
export const QR_ID=/^[A-Za-z0-9]{16,64}$/;
export const PIX_SECONDS=1800;
export class StaticPaymentMismatch extends Error {}
export async function createStaticPix(call,order,onAttempt=()=>{}){
 if(!UUID.test(order.id)||!Number.isSafeInteger(order.amount)||order.amount<100)throw Error('Valor da venda inválido.');
 const keys=await call('/pix/addressKeys?status=ACTIVE&limit=100');
 const active=Array.isArray(keys.data)?keys.data.filter(k=>k.status==='ACTIVE'&&typeof k.key==='string'):[];
 const key=active.find(k=>k.type==='EVP')||active[0];
 if(!key)throw Error('Cadastre uma chave Pix ativa na conta Asaas.');
 const expires_at=new Date(Date.now()+PIX_SECONDS*1000).toISOString();
 onAttempt();
 const qr=await call('/pix/qrCodes/static','POST',{addressKey:key.key,value:order.amount/100,description:'Venda - Instituto Integro',format:'ALL',expirationSeconds:PIX_SECONDS,allowsMultiplePayments:false,externalReference:externalReference(order.id)});
 const data=pixData(qr);
 if(!QR_ID.test(qr.id)||qr.allowsMultiplePayments!==false||qr.externalReference!==externalReference(order.id))throw Error('O Asaas não confirmou os dados do QR Code.');
 return {qr_id:qr.id,payload:data.payload,encodedImage:data.encodedImage,expires_at};
}
export function verifyStaticPayment(order,payment){
 const amount=Number(payment.value)*100;
 if(!QR_ID.test(order.pix_qr_id)||payment.pixQrCodeId!==order.pix_qr_id||!PAYMENT_ID.test(payment.id)||(order.payment_id&&order.payment_id!==payment.id)||payment.billingType!=='PIX'||!Number.isFinite(amount)||Math.abs(amount-order.amount)>0.000001||(payment.externalReference&&payment.externalReference!==externalReference(order.id)))throw new StaticPaymentMismatch('Pagamento divergente: confira no Asaas.');
 const proof={amount:order.amount,payment_id:payment.id};
 if(['REFUNDED','REFUND_REQUESTED','REFUND_IN_PROGRESS'].includes(payment.status))return {...proof,status:'refunded'};
 if(payment.deleted===true)return {...proof,status:'canceled'};
 if(payment.refunds?.length)throw new StaticPaymentMismatch('Pagamento com estorno parcial exige conciliação.');
 if(payment.status!=='RECEIVED')return {...proof,status:'pending'};
 const date=payment.paymentDate||payment.clientPaymentDate;
 if(!validDate(date))throw Error('O Asaas ainda não informou a data do recebimento.');
 return {...proof,status:'paid',payment_date:date};
}
export async function readStaticPayment(call,order){
 if(!QR_ID.test(order.pix_qr_id))return null;
 const list=await call('/payments?pixQrCodeId='+order.pix_qr_id+'&limit=100');
 if(!Array.isArray(list.data)||list.hasMore)throw Error('Não foi possível conferir todos os recebimentos deste Pix.');
 if(list.data.length>1)throw new StaticPaymentMismatch('Mais de um recebimento neste QR Code. Confira a conciliação.');
 return list.data.length?verifyStaticPayment(order,list.data[0]):null;
}
