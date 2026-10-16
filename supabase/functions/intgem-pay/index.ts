import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {createCheckout,verifyPayment,SITE} from './provider.mjs';
const origins=new Set([SITE,'https://institutointegro.com.br']);
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const token=/^[a-zA-Z0-9_.:-]{1,160}$/;
Deno.serve(async request=>{
 const origin=request.headers.get('origin'),webhook=new URL(request.url).pathname.endsWith('/webhook');
 const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST, OPTIONS',...(origin&&origins.has(origin)?{'Access-Control-Allow-Origin':origin}:{})};
 const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers});
 if(origin&&!origins.has(origin))return reply({error:'origin_not_allowed'},403);
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(request.method!=='POST')return reply({error:'method_not_allowed'},405);
 let input;
 try{if(Number(request.headers.get('content-length')||0)>8192)throw Error();const raw=await request.text();if(new TextEncoder().encode(raw).length>8192)throw Error();input=JSON.parse(raw);if(!input||typeof input!=='object'||Array.isArray(input))throw Error();}catch{return reply({error:'invalid_request'},400);}
 const url=Deno.env.get('SUPABASE_URL')!,anon=Deno.env.get('SUPABASE_ANON_KEY')!,key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
 const admin=createClient(url,key,{auth:{persistSession:false}});
 let client,user;
 if(!webhook){
  const authorization=request.headers.get('authorization')||'';
  if(!/^Bearer\s+\S+$/i.test(authorization))return reply({error:'authentication_required'},401);
  client=createClient(url,anon,{global:{headers:{Authorization:authorization}},auth:{persistSession:false}});
  const auth=await client.auth.getUser();user=auth.data?.user;
  if(auth.error||!user)return reply({error:'authentication_required'},401);
 }
 const service=async(action:string,id:string,data:unknown={})=>{const r=await admin.rpc('box_intgem_payment',{p_action:action,p_order:id,p_data:data});if(r.error)throw Error('database_unavailable');return r.data;};
 try{
  if(!webhook&&input.action==='create'){
   if(!uuid.test(input.request)||!['gem1','gem5','gem10','gem20'].includes(input.pack))return reply({error:'invalid_request'},400);
   const result=await client!.rpc('box_intgem_order',{p_pack:input.pack,p_request:input.request});
   if(result.error)return reply({error:'checkout_unavailable'},403);
   const order=result.data;if(order.error)return reply(order,409);
   if(order.url||order.status==='paid')return reply(order);
   try{
    const checkout=await createCheckout(order,url+'/functions/v1/intgem-pay/webhook');
    const stored=await service('checkout',order.id,{url:checkout});
    if(stored.error)throw Error();return reply(stored);
   }catch(e){await service('failed',order.id);return reply({error:e instanceof Error&&e.message==='checkout_not_enabled'?'checkout_not_enabled':'checkout_unavailable',order:order.id},503);}
  }
  if(!webhook&&input.action!=='verify')return reply({error:'invalid_action'},400);
  const id=input.order_nsu,transaction=input.transaction_nsu,slug=webhook?input.invoice_slug:input.slug;
  if(!uuid.test(id)||!token.test(transaction)||!token.test(slug))return reply({error:'invalid_request'},400);
  const order=await service('inspect',id);
  if(order.error)return reply({error:order.error},webhook?400:409);
  if(!webhook&&order.user_id!==user!.id)return reply({error:'order_not_found'},404);
  if(order.status==='paid')return reply({paid:true});
  // Callback and redirect fields are hints, never evidence of payment.
  const verified=await verifyPayment(order,transaction,slug);
  if(!verified.paid)return reply({paid:false},webhook?400:200);
  const settled=await service('settle',id,verified);
  if(settled.error)return reply({error:'payment_not_confirmed'},webhook?400:409);
  return reply(settled);
 }catch{return reply({error:'payment_verification_unavailable'},webhook?400:503);}
});
