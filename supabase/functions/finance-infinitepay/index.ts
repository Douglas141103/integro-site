import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {normalizeSale,createCheckout,verifyPayment,SITE,UUID,TOKEN} from './contract.mjs';
Deno.serve(async request=>{
 const origin=request.headers.get('origin');
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization, apikey, content-type, x-client-info','Access-Control-Allow-Methods':'POST, OPTIONS',...(origin&&[SITE,'https://institutointegro.com.br'].includes(origin)?{'Access-Control-Allow-Origin':origin}:{})};
 const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers});
 if(origin&&![SITE,'https://institutointegro.com.br'].includes(origin))return reply({error:'Origem não permitida.'},403);
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(request.method!=='POST')return reply({error:'Método inválido.'},405);
 const webhook=new URL(request.url).pathname.endsWith('/webhook');
 let input;try{const raw=await request.text();if(raw.length>40000)throw Error();input=JSON.parse(raw);if(!input||Array.isArray(input))throw Error();}catch{return reply({error:'Pedido inválido.'},400);}
 const url=Deno.env.get('SUPABASE_URL')!;
 const admin=createClient(url,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,{auth:{persistSession:false}});
 const rpc=async(action:string,data:unknown={})=>{const r=await admin.rpc('finance_infinitepay_service',{p_action:action,p_data:data});if(r.error)throw Error('Operação financeira indisponível.');if(r.data?.error)throw Error(r.data.error);return r.data;};
 try{
  if(webhook){
   if(!UUID.test(input.order_nsu)||!TOKEN.test(input.transaction_nsu)||!TOKEN.test(input.invoice_slug))return reply({error:'Evento inválido.'},400);
   const order=await rpc('inspect',{id:input.order_nsu});
   // Never trust webhook amounts, redirects or browser-provided paid flags.
   const proof=await verifyPayment(order,input.transaction_nsu,input.invoice_slug);
   if(!proof.paid)return reply({error:'Pagamento ainda não confirmado.'},400);
   return reply(await rpc('settle',{id:order.id,...proof}));
  }
  const authorization=request.headers.get('authorization')||'';
  if(!/^Bearer\s+\S+$/i.test(authorization))return reply({error:'Entre no portal para continuar.'},401);
  const auth=await admin.auth.getUser(authorization.replace(/^Bearer\s+/i,''));
  if(auth.error||!auth.data.user)return reply({error:'Sessão expirada.'},401);
  const user_id=auth.data.user.id;
  if(['list','settings'].includes(input.action))return reply(await rpc(input.action,{user_id,...(input.action==='settings'?{enabled:input.enabled}:{})}));
  if(input.action==='create'){
   if(!UUID.test(input.request_id))return reply({error:'Identificador inválido.'},400);
   const sale=normalizeSale(input);
   const order=await rpc('create',{user_id,request_id:input.request_id,sale});
   if(!order.created)return reply(order);
   try{
    const checkout=await createCheckout(order,url+'/functions/v1/finance-infinitepay/webhook');
    return reply(await rpc('checkout',{id:order.id,url:checkout}));
   }catch{
    await rpc('uncertain',{id:order.id});
    return reply({error:'Não foi possível confirmar a geração. A tentativa ficou registrada; confira a InfinitePay antes de gerar outra cobrança.',order_id:order.id},503);
   }
  }
  if(input.action==='verify'){
   const order=await rpc('get',{user_id,id:input.order_nsu});
   const proof=await verifyPayment(order,input.transaction_nsu,input.slug);
   return reply(proof.paid?await rpc('settle',{id:order.id,...proof}):{paid:false});
  }
  return reply({error:'Ação inválida.'},400);
 }catch(e){return reply({error:e instanceof Error?e.message:'Operação indisponível.'},webhook?400:400);}
});
