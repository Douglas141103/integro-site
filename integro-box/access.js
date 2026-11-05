import {loadBoxStudents} from './player-profile.js?v=20261016-intgem1';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import {loginMessage,temporary,unavailable} from './login-errors.mjs';
export {loginMessage};
const config=window.INTEGRO_SUPABASE;
export const supabase=window.BoxSupabase||(window.BoxSupabase=createClient(config.url,config.anonKey));
export async function requireFamily(){
 const {data,error}=await supabase.auth.getUser();
 if(temporary(error))throw new Error(unavailable);
 if(error || !data.user){location.replace('./entrar.html');return null;}
 const access=await boxAccess();
 const user={...data.user,boxName:access.display_name,boxFamily:access.family};
 if(!access.family)return {...user,boxStudents:[],boxStudent:null};
 return loadBoxStudents(user,supabase);
}

export async function boxAccess(name){
 const response=await supabase.rpc('box_access',name?{p_name:name}:undefined);
 if(response.error)throw new Error(loginMessage(response.error,response.status));
 if(!response.data?.allowed)throw new Error('Esta conta não tem acesso ao Integro Box. Entre em contato com o Instituto.');
 return response.data;
}
