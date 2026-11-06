import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {createHandler} from './handler.mjs';
const baseUrl=Deno.env.get('SUPABASE_URL')!;
const admin=createClient(baseUrl,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,{auth:{persistSession:false}});
Deno.serve(createHandler({baseUrl,
 authorizationRpc:async(action:string,data:unknown)=>{const r=await admin.rpc('collaborator_authorization_service',{p_action:action,p_data:data});if(r.error)throw Error('Validação indisponível.');return r.data;},
 getUser:async(token:string)=>{const r=await admin.auth.getUser(token);return r.error?null:r.data.user;},
 rpc:async(action:string,data:unknown)=>{const r=await admin.rpc('collaborator_wallet_service',{p_action:action,p_data:data});if(r.error)throw Error(r.error.message);return r.data;},
 credentials:async(school_id:string)=>{const r=await admin.rpc('finance_asaas_service',{p_action:'credentials',p_data:{school_id}});if(r.error)throw Error('Conexão financeira indisponível.');return r.data;}
}));
