import {provider,UUID,equalToken,SITE,checkoutBody,checkoutUrl,webhookOrder,validateCheckout,verifyAsaas} from './asaas.mjs';
import {verifyPayment as verifyLegacy} from './provider.mjs';
const origins=new Set([SITE,'https://institutointegro.com.br']);
const token=/^[a-zA-Z0-9_.:-]{1,160}$/;
export function createHandler({authenticate,createOrder,service,credentials,fetcher=fetch}){
 return async request=>{
  const path=new URL(request.url).pathname,asaasHook=path.endsWith('/asaas-webhook'),legacyHook=path.endsWith('/webhook'),hook=asaasHook||legacyHook;
  const origin=request.headers.get('origin');
  const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST, OPTIONS',...(origin&&origins.has(origin)?{'Access-Control-Allow-Origin':origin}:{})};
  const reply=(body,status=200)=>new Response(JSON.stringify(body),{status,headers});
  if(origin&&!origins.has(origin))return reply({error:'origin_not_allowed'},403);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(request.method!=='POST')return reply({error:'method_not_allowed'},405);
  let input;
  try{const limit=hook?150000:8192;if(Number(request.headers.get('content-length')||0)>limit)throw Error();const raw=await request.text();if(new TextEncoder().encode(raw).length>limit)throw Error();input=JSON.parse(raw);if(!input||typeof input!=='object'||Array.isArray(input))throw Error();}catch{return reply({error:'invalid_request'},400);}
  let auth,config;
  try{
   if(!hook){auth=await authenticate(request.headers.get('authorization')||'');if(!auth?.user)return reply({error:'authentication_required'},401);}
   const connection=async()=>config||(config=await credentials());
   const checkedService=async(action,id,data={})=>{const r=await service(action,id,data);if(r?.error)throw Error(r.error);return r;};
   if(asaasHook){
    config=await connection();
    if(!await equalToken(request.headers.get('asaas-access-token'),config.hook_token)||input.account?.id!==config.account_id)return reply({error:'invalid_webhook'},401);
    const events=['CHECKOUT_CREATED','CHECKOUT_PAID','CHECKOUT_CANCELED','CHECKOUT_EXPIRED','PAYMENT_RECEIVED','PAYMENT_CONFIRMED'];
    if(!events.includes(input.event))return reply({received:true,ignored:true});
    let order;
    if(input.checkout){
     const id=webhookOrder(input.checkout);if(!id)return reply({received:true,ignored:true});
     order=await service('inspect',id);
     if(order.error==='unknown_order')return reply({received:true,ignored:true});
     if(order.error||order.provider!=='asaas')throw Error('payment_mismatch');
     const binding=validateCheckout(order,input.checkout);await checkedService('checkout',id,binding);order={...order,checkout_id:binding.checkout_id};
    }else if(input.payment){
     const ref=input.payment.externalReference;
     const id=typeof ref==='string'&&ref.startsWith('intgem:')?ref.slice(7):null;
     if(UUID.test(id))order=await service('inspect',id);
     else if(UUID.test(input.payment.checkoutSession))order=await service('lookup_checkout',null,{checkout_id:input.payment.checkoutSession});
     else return reply({received:true,ignored:true});
     if(order.error==='unknown_order')return reply({received:true,ignored:true});
     if(order.error||order.provider!=='asaas')throw Error('payment_mismatch');
    }else return reply({received:true,ignored:true});
    if(order.status==='paid')return reply({paid:true,duplicate:true});
    if(input.event==='CHECKOUT_CREATED')return reply({received:true});
    const proof=await verifyAsaas(provider(config.api_key,{fetcher}),order);
    if(proof.paid)return reply(await checkedService('settle',order.id,proof));
    if(input.event==='CHECKOUT_CANCELED'||input.event==='CHECKOUT_EXPIRED'){
     await checkedService(input.event==='CHECKOUT_CANCELED'?'canceled':'expired',order.id);return reply({received:true});
    }
    return reply({error:'payment_not_confirmed'},503);
   }
   if(!hook&&input.action==='create'){
    if(!UUID.test(input.request)||!['gem1','gem5','gem10','gem20'].includes(input.pack))return reply({error:'invalid_request'},400);
    config=await connection();if(!config.enabled||!config.api_key)return reply({error:'checkout_not_enabled'},503);
    const order=await createOrder(auth,input.pack,input.request);if(order.error)return reply(order,409);
    if(order.url||order.status==='paid')return reply(order);
    if(order.provider!=='asaas')return reply({error:'checkout_expired'},409);
    try{
     const result=await provider(config.api_key,{fetcher})('/checkouts','POST',checkoutBody(order));
     return reply(await checkedService('checkout',order.id,{checkout_id:result.id,url:checkoutUrl(result.id)}));
    }catch(e){
     // Timeouts/5xx reserve this request for CHECKOUT_CREATED recovery.
     // Only definite rejection permits retrying POST, preventing duplicates.
     if(e.rejected)await service('failed',order.id);
     return reply({error:e.message==='checkout_below_minimum'?'checkout_below_minimum':e.rejected?'checkout_unavailable':'checkout_in_progress',order:order.id},503);
    }
   }
   if(!hook&&input.action!=='verify')return reply({error:'invalid_action'},400);
   const id=input.order||input.order_nsu;if(!UUID.test(id))return reply({error:'invalid_request'},400);
   const order=await service('inspect',id);if(order.error)return reply({error:order.error},hook?400:409);
   if(!hook&&order.user_id!==auth.user.id)return reply({error:'order_not_found'},404);
   if(legacyHook&&order.provider==='asaas')return reply({error:'invalid_webhook'},400);
   if(order.status==='paid')return reply({paid:true});
   if(!hook){const limited=await service('inspect',id,{manual:true});if(limited.error)return reply(limited,409);}
   let proof;
   if(order.provider==='asaas'){
    config=await connection();proof=await verifyAsaas(provider(config.api_key,{fetcher}),order);
   }else{
    const transaction=input.transaction_nsu,slug=hook?input.invoice_slug:input.slug;
    if(!token.test(transaction)||!token.test(slug))return reply({error:'invalid_request'},400);
    proof=await verifyLegacy(order,transaction,slug,{fetcher});
   }
   if(!proof.paid)return reply({paid:false,status:order.status},hook?400:200);
   return reply(await checkedService('settle',id,proof));
  }catch(e){return reply({error:['checking','payment_mismatch','checkout_below_minimum'].includes(e.message)?e.message:'payment_verification_unavailable'},503);}
 };
}
