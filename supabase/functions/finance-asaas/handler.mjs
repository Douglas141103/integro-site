import {SITE,UUID,PAYMENT_ID,saleForPix,today,validDate,provider,accountForKey,getCustomer,paymentBody,externalReference,verifyPayment,pixData,equalToken} from './contract.mjs';
const publicOrder=o=>o?({id:o.id,status:o.status,amount:o.amount,due_date:o.due_date,payment_id:o.payment_id,posted_at:o.posted_at,needs_reconciliation:!!o.post_error}):null;
export function createHandler({rpc,getUser,baseUrl,fetcher=fetch}){
 return async request=>{
  const origin=request.headers.get('origin'),headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Access-Control-Allow-Methods':'POST, OPTIONS',...(origin&&[SITE,'https://institutointegro.com.br'].includes(origin)?{'Access-Control-Allow-Origin':origin}:{})};
  const reply=(body,status=200)=>new Response(JSON.stringify(body),{status,headers});
  if(origin&&![SITE,'https://institutointegro.com.br'].includes(origin))return reply({error:'Origem não permitida.'},403);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(request.method!=='POST')return reply({error:'Método inválido.'},405);
  const hookPath=new URL(request.url).pathname.match(/\/webhook\/([0-9a-f-]+)$/i);
  try{
   let credentials;
   if(hookPath){
    if(!UUID.test(hookPath[1]))return reply({error:'Evento inválido.'},400);
    credentials=await rpc('credentials',{school_id:hookPath[1]});
    if(!await equalToken(request.headers.get('asaas-access-token'),credentials.hook_token))return reply({error:'Evento não autorizado.'},401);
   }
   const raw=await request.text();if(raw.length>(hookPath?150000:40000))return reply({error:'Pedido muito grande.'},413);
   let input;try{input=JSON.parse(raw);if(!input||Array.isArray(input)||typeof input!=='object')throw Error();}catch{return reply({error:'Pedido inválido.'},400);}
   const synchronize=async(order,call,payment)=>{
    if(!order.payment_id){
     const matches=await call('/payments?externalReference='+encodeURIComponent(externalReference(order.id))+'&limit=100');
     const found=(matches.data||[]).filter(p=>p.externalReference===externalReference(order.id));
     if(!found.length)return order;
     if(found.length!==1||matches.hasMore)throw Error('Mais de uma cobrança encontrada. Confira no Asaas.');
     payment=found[0];
     // Validate before binding a recovered ID. No POST is retried.
     try{verifyPayment({...order,payment_id:payment.id},payment);}catch{return await rpc('error',{id:order.id});}
     order=await rpc('bind',{id:order.id,payment_id:payment.id});
    }
    payment=payment||await call('/payments/'+order.payment_id);
    let proof;try{proof=verifyPayment(order,payment);}catch{return await rpc('error',{id:order.id});}
    return await rpc('sync',{id:order.id,...proof});
   };
   if(hookPath){
    if(input.account?.id&&input.account.id!==credentials.account_id)return reply({error:'Conta divergente.'},400);
    const reference=input.payment?.externalReference;
    if(typeof reference!=='string'||!reference.startsWith('integro:')||!UUID.test(reference.slice(8)))return reply({ignored:true});
    const order=await rpc('inspect',{id:reference.slice(8),school_id:hookPath[1]});
    if(!order)return reply({ignored:true});
    if(!PAYMENT_ID.test(input.payment?.id)||(order.payment_id&&order.payment_id!==input.payment.id))return reply({error:'Cobrança divergente.'},400);
    // Webhook is only a notification. Always read the current payment through Asaas.
    await synchronize(order,provider(credentials.api_key,{fetcher}));
    return reply({received:true});
   }
   const bearer=request.headers.get('authorization')||'';
   if(!/^Bearer\s+\S+$/i.test(bearer))return reply({error:'Entre no portal para continuar.'},401);
   const user=await getUser(bearer.replace(/^Bearer\s+/i,''));
   if(!user)return reply({error:'Sessão expirada.'},401);
   const context=await rpc('authorize',{user_id:user.id});
   if(input.action==='list')return reply(await rpc('list',{user_id:user.id}));
   if(input.action==='settings')return reply(await rpc('settings',{user_id:user.id,enabled:input.enabled}));
   if(input.action==='connect'){
    if(!context.can_configure)return reply({error:'Apenas a direção pode conectar o Asaas.'},403);
    if(typeof input.api_key!=='string'||!/^\S+@[^\s@]+\.[^\s@]+$/.test(input.email||'')||input.email.length>254)return reply({error:'Informe a chave de Produção e um e-mail para avisos técnicos.'},400);
    if(input.api_key.includes('_hmlg_'))return reply({error:'Use a chave de Produção. Uma conta de testes não recebe pagamentos reais.'},400);
    const {lease}=await rpc('connect_lock',{user_id:user.id});
    try{
     const call=provider(input.api_key.trim(),{fetcher}),account=await accountForKey(call);
     const previous=await rpc('credentials',{school_id:context.school_id});
     if(previous.account_id&&previous.account_id!==account.id)throw Error('A chave pertence a outra conta. Use a mesma conta já vinculada ao Integro.');
     const hookToken=previous.hook_token||crypto.randomUUID()+crypto.randomUUID();
     const hookUrl=baseUrl+'/functions/v1/finance-asaas/webhook/'+context.school_id;
     const hooks=await call('/webhooks?limit=100'),existing=(hooks.data||[]).filter(h=>h.url===hookUrl);
     if(existing.length>1||hooks.hasMore)throw Error('Confira os webhooks da conta Asaas antes de conectar.');
     const webhookBody={name:'Integro — confirmação de Pix',url:hookUrl,email:input.email,enabled:true,interrupted:false,authToken:hookToken,sendType:'SEQUENTIALLY',events:['PAYMENT_RECEIVED','PAYMENT_REFUNDED','PAYMENT_PARTIALLY_REFUNDED','PAYMENT_REFUND_IN_PROGRESS','PAYMENT_DELETED','PAYMENT_RESTORED','PAYMENT_UPDATED']};
     const hook=existing.length?await call('/webhooks/'+encodeURIComponent(existing[0].id),'PUT',webhookBody):await call('/webhooks','POST',webhookBody);
     if(typeof hook.id!=='string'||!/^\w[\w-]{5,100}$/.test(hook.id))throw Error('O Asaas não confirmou a configuração da baixa automática.');
     await rpc('connect_save',{user_id:user.id,lease,api_key:input.api_key.trim(),hook_token:hookToken,account_id:account.id,account_name:account.name,document_masked:account.document_masked,webhook_id:hook.id});
     return reply({connected:true,account_name:account.name,document_masked:account.document_masked});
    }finally{await rpc('connect_unlock',{user_id:user.id,lease});}
   }
   if(input.action==='create'){
    if(!UUID.test(input.request_id))return reply({error:'Identificador inválido.'},400);
    const sale=saleForPix(input),due_date=input.due_date||today();if(!validDate(due_date))return reply({error:'Vencimento inválido.'},400);
    let order=await rpc('create',{user_id:user.id,request_id:input.request_id,sale,due_date});
    if(!order.created)return reply(publicOrder(order));
    try{
     const secret=await rpc('credentials',{school_id:context.school_id}),call=provider(secret.api_key,{fetcher});
     const customer=await getCustomer(call,order);
     order=await rpc('customer',{id:order.id,customer_id:customer});
     const payment=await call('/payments','POST',paymentBody(order,customer));
     verifyPayment({...order,payment_id:payment.id},payment);
     order=await rpc('bind',{id:order.id,payment_id:payment.id});
     return reply(publicOrder(await synchronize(order,call,payment)));
    }catch{
     await rpc('uncertain',{id:order.id});
     return reply({error:'A tentativa foi registrada. Use “Conferir pagamento” nesta cobrança antes de tentar outra venda.',order_id:order.id},503);
    }
   }
   if(input.action==='check'||input.action==='qr'){
    if(!UUID.test(input.id))return reply({error:'Cobrança inválida.'},400);
    let order=await rpc('get',{user_id:user.id,id:input.id});if(!order)throw Error('Cobrança não encontrada.');
    const secret=await rpc('credentials',{school_id:context.school_id}),call=provider(secret.api_key,{fetcher});
    const claim=await rpc('claim_check',{id:order.id});
    if(claim.claimed)order=await synchronize(order,call);
    if(input.action==='qr'){
     if(!order.payment_id||order.status!=='pending'||order.post_error)return reply({order:publicOrder(order),qr:null});
     return reply({order:publicOrder(order),qr:pixData(await call('/payments/'+order.payment_id+'/pixQrCode'))});
    }
    return reply(publicOrder(order));
   }
   return reply({error:'Ação inválida.'},400);
  }catch(e){return reply({error:e instanceof Error?e.message:'Operação indisponível.'},400);}
 };
}
