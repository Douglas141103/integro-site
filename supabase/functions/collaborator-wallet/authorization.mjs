import {UUID,reference,verifyTransfer,withdrawalIdFromReference} from './contract.mjs';
import {provider,equalToken} from '../finance-asaas/contract.mjs';

// This is a PRE-payment authorization callback, separate from status notifications.
// Never sends a payment or marks a withdrawal as completed.
export function createAuthorizationHandler({rpc,credentials,fetcher=fetch}){
 return async req=>{
  const reply=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
  const refuse=reason=>({status:'REFUSED',refuseReason:reason});
  const match=new URL(req.url).pathname.match(/\/authorize\/([0-9a-f-]+)$/i);
  if(req.method!=='POST'||req.headers.has('origin')||!UUID.test(match?.[1]||''))return reply(refuse('Requisição inválida.'),400);
  const school=match[1];
  try{
   const c=await credentials(school);
   if(!c.enabled||!await equalToken(req.headers.get('asaas-access-token'),c.hook_token))return reply(refuse('Autenticação inválida.'),401);
   const raw=await req.text();if(raw.length>30000)return reply(refuse('Requisição inválida.'),413);
   let input;try{input=JSON.parse(raw);}catch{return reply(refuse('JSON inválido.'),400);}
   if(!input||input.type!=='TRANSFER'||!UUID.test(input.transfer?.id||''))return reply(refuse('Operação não autorizada por este portal.'));
   const id=input.transfer.id;
   const record=await rpc('inspect',{school_id:school,provider_id:id});
   if(!record.enabled)return reply(refuse('Autorização automática ainda não ativada.'));
   const decide=data=>rpc('decide',{school_id:school,provider_id:id,...data});
   if(input.account?.id&&input.account.id!==c.account_id)return reply(await decide({refuse_reason:'Conta divergente.'}));
   let t;
   try{t=await provider(c.api_key,{fetcher})('/transfers/'+id);}catch{return reply({error:'Consulta de confirmação indisponível.'},503);}
   const ref=t.externalReference;
   const withdrawalId=withdrawalIdFromReference(ref);
   const found=record.withdrawal|| (withdrawalId?(await rpc('inspect',{school_id:school,id:withdrawalId})).withdrawal:null);
   let reason=null;
   const key=t.pixAddressKey||t.bankAccount?.pixAddressKey;
   try{
    if(!found||t.id!==id)throw Error();
    verifyTransfer(found,t);
    if(t.operationType!=='PIX'||!['PENDING','BLOCKED'].includes(t.status)||typeof key!=='string'||key!==found.pix_key)throw Error();
    // A matching ID alone is insufficient: both payload and provider must match the reservation.
    const sent=input.transfer;
    if(sent.operationType!=='PIX'||Number(sent.value)!==Number(found.amount))throw Error();
    const sentKey=sent.pixAddressKey||sent.bankAccount?.pixAddressKey;
    if(sentKey&&sentKey!==key)throw Error();
    if(sent.externalReference&&sent.externalReference!==reference(found.id))throw Error();
    if(t.pixAddressKeyType&&t.pixAddressKeyType!==found.pix_type)throw Error();
   }catch{reason='Transferência ou destino sem correspondência com a solicitação do portal.';}
   return reply(await decide(reason?{refuse_reason:reason}:{id:found.id,amount:Number(t.value),pix_key:key,external_reference:ref,operation_type:t.operationType,provider_status:t.status}));
  }catch{
   // An unavailable database must not authorize funds. Asaas retries and then cancels.
   return reply({error:'Validação temporariamente indisponível.'},503);
  }
 };
}
