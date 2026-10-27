import {createClient} from 'npm:@supabase/supabase-js@2.49.8';
import {createHandler} from './handler.mjs';
const baseUrl=Deno.env.get('SUPABASE_URL')!;
const admin=createClient(baseUrl,Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,{auth:{persistSession:false}});
Deno.serve(createHandler({
 baseUrl,
 getUser:async token=>{const r=await admin.auth.getUser(token);return r.error?null:r.data.user;},
 rpc:async(action,data)=>{const r=await admin.rpc('finance_asaas_service',{p_action:action,p_data:data});if(r.error)throw Error(action.startsWith('connect')?'Não foi possível concluir a conexão. Confira as permissões e tente novamente.':'Operação financeira indisponível. Confira a conta e os dados da cobrança.');return r.data;}
}));
