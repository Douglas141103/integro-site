import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {createHandler} from './handler.mjs';
import {SCHOOL} from './asaas.mjs';
const url=Deno.env.get('SUPABASE_URL')!,anon=Deno.env.get('SUPABASE_ANON_KEY')!;
const admin=createClient(url,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,{auth:{persistSession:false}});
Deno.serve(createHandler({
 authenticate:async(authorization:string)=>{
  if(!/^Bearer\s+\S+$/i.test(authorization))return null;
  const client=createClient(url,anon,{global:{headers:{Authorization:authorization}},auth:{persistSession:false}});
  const {data,error}=await client.auth.getUser();return error||!data.user?null:{user:data.user,client};
 },
 createOrder:async(auth:any,pack:string,request:string)=>{
  const r=await auth.client.rpc('box_intgem_order',{p_pack:pack,p_request:request});if(r.error)throw Error('checkout_unavailable');return r.data;
 },
 service:async(action:string,id:string|null,data:unknown={})=>{
  const r=await admin.rpc('box_intgem_payment',{p_action:action,p_order:id,p_data:data});if(r.error)throw Error('database_unavailable');return r.data;
 },
 credentials:async()=>{
  const r=await admin.rpc('finance_asaas_service',{p_action:'credentials',p_data:{school_id:SCHOOL}});if(r.error)throw Error('checkout_not_enabled');return r.data;
 }
}));
