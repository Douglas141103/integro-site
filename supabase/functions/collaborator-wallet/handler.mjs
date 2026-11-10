import {UUID,reference,normalizeWithdrawal,transferBody,verifyTransfer,withdrawalIdFromReference} from './contract.mjs';
import {provider,AsaasError,equalToken} from '../finance-asaas/contract.mjs';
import {createAuthorizationHandler} from './authorization.mjs';
export function createHandler({rpc,authorizationRpc,credentials,getUser,baseUrl,fetcher=fetch}){
 const authorize=createAuthorizationHandler({rpc:authorizationRpc,credentials,fetcher});
 return async req=>{
  if(new URL(req.url).pathname.includes('/authorize/'))return authorize(req);
  const origin=req.headers.get('origin');const allowed=['https://www.institutointegro.com.br','https://institutointegro.com.br'];
  const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization,apikey,content-type,x-client-info','Access-Control-Allow-Methods':'POST,OPTIONS',...(allowed.includes(origin)?{'Access-Control-Allow-Origin':origin}:{})};
  const reply=(value,status=200)=>new Response(JSON.stringify(value),{status,headers});
  if(origin&&!allowed.includes(origin))return reply({error:'Origem não autorizada.'},403);
  if(req.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(req.method!=='POST')return reply({error:'Método inválido.'},405);
  try{
   const raw=await req.text();if(raw.length>30000)return reply({error:'Solicitação muito grande.'},413);
   const input=JSON.parse(raw);if(!input||Array.isArray(input))return reply({error:'Dados inválidos.'},400);
   const hook=new URL(req.url).pathname.match(/\/webhook\/([0-9a-f-]+)$/i);
   const reconcile=async(w,call)=>{
    if(w.provider_id){const t=await call('/transfers/'+encodeURIComponent(w.provider_id));return await rpc('update',verifyTransfer(w,t));}
    if(w.status==='reserved')return {id:w.id,status:w.status};
    // Never repeat a POST after an ambiguous outcome. Recover only by exact reference.
    const found=[];let hasMore=true;
    for(let page=0;page<5&&hasMore;page++){
     const list=await call('/transfers?dateCreated%5Bge%5D='+w.created_at.slice(0,10)+'&limit=100&offset='+(page*100));
     if(!Array.isArray(list.data))throw Error('Consulta de transferências indisponível.');
     found.push(...list.data.filter(t=>t.externalReference===reference(w.id)));hasMore=!!list.hasMore;
    }
    if(found.length!==1||hasMore)return {id:w.id,status:w.status,needs_reconciliation:true};
    return await rpc('update',verifyTransfer(w,found[0]));
   };
   if(hook){
    if(!UUID.test(hook[1]))return reply({error:'Evento inválido.'},400);
    const c=await credentials(hook[1]);
    if(!await equalToken(req.headers.get('asaas-access-token'),c.hook_token))return reply({error:'Evento não autorizado.'},401);
    if(input.account?.id&&input.account.id!==c.account_id)return reply({error:'Conta divergente.'},400);
    const ref=input.transfer?.externalReference;
    const id=withdrawalIdFromReference(ref);
    if(!id&&!UUID.test(input.transfer?.id||''))return reply({ignored:true});
    const w=await rpc('inspect',{id,provider_id:input.transfer?.id,school_id:hook[1]});
    // A missing SQL row can serialize as an object whose fields are all null.
    // Only portal withdrawals with a valid ID may proceed to reconciliation.
    if(!UUID.test(w?.id||''))return reply({ignored:true});
    if(!UUID.test(input.transfer?.id||'')||(w.provider_id&&w.provider_id!==input.transfer.id))return reply({error:'Transferência divergente.'},400);
    try{const t=await provider(c.api_key,{fetcher})('/transfers/'+input.transfer.id);await rpc('update',verifyTransfer(w,t));}catch{return reply({error:'Conferência pendente. Reenvie o evento.'},503);}
    return reply({received:true});
   }
   const token=(req.headers.get('authorization')||'').match(/^Bearer\s+(\S+)$/i)?.[1];
   const user=token?await getUser(token):null;if(!user)return reply({error:'Entre no portal para continuar.'},401);
   const ctx=await rpc('context',{user_id:user.id});
   if(input.action==='dashboard')return reply({context:ctx,...await rpc('dashboard',{user_id:user.id})});
   if(['cash_delivered','fund_entry'].includes(input.action)){
    if(!ctx.is_admin)return reply({error:'Apenas a administração pode conferir recebimentos.'},403);
    if(!UUID.test(input.entry_id||''))throw Error('Recebimento inválido.');
    return reply(await rpc(input.action,{user_id:user.id,entry_id:input.entry_id,reference:input.reference,funds_confirmed:input.funds_confirmed}));
   }
   if(!['setup','withdraw','reconcile'].includes(input.action))return reply({error:'Ação inválida.'},400);
   const c=await credentials(ctx.school_id);if(!c.enabled)throw Error('A conexão Asaas está desativada.');
   const call=provider(c.api_key,{fetcher});
   if(input.action==='setup'){
    if(!ctx.is_admin)return reply({error:'Apenas a administração pode ativar a conexão.'},403);
    const s=await rpc('setup',{user_id:user.id});
    const url=baseUrl+'/functions/v1/collaborator-wallet/webhook/'+ctx.school_id;
    const hooks=await call('/webhooks?limit=100');
    if(hooks.hasMore)throw Error('Confira os webhooks da conta antes de continuar.');
    const existing=(hooks.data||[]).filter(h=>h.url===url);if(existing.length>1)throw Error('Mais de uma conexão encontrada.');
    const body={name:'Integro · retiradas dos colaboradores',url,email:user.email,enabled:true,interrupted:false,authToken:c.hook_token,sendType:'SEQUENTIALLY',events:['TRANSFER_CREATED','TRANSFER_PENDING','TRANSFER_IN_BANK_PROCESSING','TRANSFER_BLOCKED','TRANSFER_DONE','TRANSFER_FAILED','TRANSFER_CANCELLED']};
    const h=await call(existing.length?'/webhooks/'+existing[0].id:'/webhooks',existing.length?'PUT':'POST',body);
    if(!h.id)throw Error('Conexão não confirmada.');
    return reply(await rpc('setup_done',{user_id:user.id,webhook_id:h.id}));
   }
   if(input.action==='reconcile'){
    const queue=await rpc('queue',{user_id:user.id});let pending=0;
    for(const w of queue){try{await reconcile(w,call);}catch{pending++;}}
    return reply({context:ctx,...await rpc('dashboard',{user_id:user.id}),reconciliation_pending:pending});
   }
   const values=normalizeWithdrawal(input);
   const balance=await call('/finance/balance');
   if(!Number.isFinite(Number(balance.balance)))throw Error('Não foi possível conferir o saldo do caixa digital.');
   const reservation=await rpc('reserve',{user_id:user.id,...values,provider_balance:Number(balance.balance)});
   const claim=await rpc('claim',{user_id:user.id,id:reservation.id}),w=claim.withdrawal;
   if(!claim.claimed)return reply(await reconcile(w,call));
   let attempted=false;
   try{
    const body=transferBody(w);attempted=true;
    const t=await call('/transfers','POST',body);
    return reply(await rpc('update',verifyTransfer(w,t)));
   }catch(e){
    const rejected=e instanceof AsaasError&&e.rejected;
    const status=rejected?'FAILED':'uncertain';
    await rpc('update',{id:w.id,status,failure:rejected?e.message:'Envio sem confirmação. O valor permanece reservado; use Atualizar para conferir.'});
    return reply({id:w.id,status,message:rejected?e.message:'Estamos conferindo a transferência. Não envie outra solicitação para substituir esta.'});
   }
  }catch(e){return reply({error:e instanceof SyntaxError?'Dados inválidos.':e.message||'Operação indisponível.'},400);}
 };
}
