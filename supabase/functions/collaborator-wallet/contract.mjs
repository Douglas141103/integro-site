export const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const reference=id=>'integro-withdrawal:'+id;
export function withdrawalIdFromReference(value){
 const prefix=reference('');const id=typeof value==='string'&&value.startsWith(prefix)?value.slice(prefix.length):null;
 return UUID.test(id||'')?id:null;
}
export function normalizeWithdrawal(input){
 const amount=Number(input.amount);
 if(!UUID.test(input.request_id||'')||!Number.isFinite(amount)||amount<1||amount>100000||Math.abs(amount*100-Math.round(amount*100))>0.00001)throw Error('Informe um valor válido, a partir de R$ 1,00.');
 const type=input.pix_type;let key=String(input.pix_key||'').trim();
 if(['CPF','CNPJ','PHONE'].includes(type))key=key.replace(/\D/g,'');
 const patterns={CPF:/^\d{11}$/,CNPJ:/^\d{14}$/,PHONE:/^\d{11}$/,EMAIL:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,EVP:/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i};
 if(!patterns[type]?.test(key)||key.length>150)throw Error('Confira o tipo e o formato da chave Pix.');
 return {request_id:input.request_id,amount:Math.round(amount*100)/100,pix_key:key,pix_type:type};
}
export function transferBody(w){return {value:Number(w.amount),pixAddressKey:w.pix_key,pixAddressKeyType:w.pix_type,operationType:'PIX',externalReference:reference(w.id),description:'Instituto Integro · retirada de participação'};}
export function verifyTransfer(w,t){
 if(!UUID.test(t?.id||'')||t.externalReference!==reference(w.id)||Math.round(Number(t.value)*100)!==Math.round(Number(w.amount)*100)||!Number.isFinite(Number(t.value)))throw Error('Transferência divergente. Aguarde a conciliação da administração.');
 if(w.provider_id&&w.provider_id!==t.id)throw Error('Identificador de transferência divergente.');
 if((t.pixAddressKey||t.bankAccount?.pixAddressKey)&&(t.pixAddressKey||t.bankAccount?.pixAddressKey)!==w.pix_key)throw Error('Destino Pix divergente.');
 if(!['PENDING','BANK_PROCESSING','BLOCKED','DONE','FAILED','CANCELLED'].includes(t.status))throw Error('O processamento ainda precisa ser conferido.');
 let receipt;
 try{const url=new URL(t.transactionReceiptUrl);if(url.protocol==='https:'&&(url.hostname==='asaas.com'||url.hostname.endsWith('.asaas.com')))receipt=url.href;}catch{}
 return {id:w.id,status:t.status,provider_id:t.id,receipt_url:receipt,end_to_end:typeof t.endToEndIdentifier==='string'?t.endToEndIdentifier.slice(0,100):undefined,recipient_name:typeof t.bankAccount?.ownerName==='string'?t.bankAccount.ownerName.slice(0,180):undefined,failure:t.authorized===false&&!['FAILED','CANCELLED','DONE'].includes(t.status)?'Aguardando autorização da retirada no aplicativo Asaas.':['FAILED','CANCELLED'].includes(t.status)?'O Asaas não concluiu esta transferência. O valor foi liberado no saldo.':null};
}
