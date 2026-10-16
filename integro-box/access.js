import {loadBoxStudents} from './player-profile.js?v=20261016-intgem1';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const config=window.INTEGRO_SUPABASE;
export const supabase=window.BoxSupabase||(window.BoxSupabase=createClient(config.url,config.anonKey));
export async function requireFamily(){
 const {data,error}=await supabase.auth.getUser();
 if(error || !data.user){location.replace('./entrar.html');return null;}
 const {data:access,error:accessError}=await supabase.rpc('box_access');
 if(accessError||!access?.allowed)throw new Error('Não foi possível liberar esta conta. Confirme seu e-mail ou entre em contato com o Instituto.');
 const user={...data.user,boxName:access.display_name,boxFamily:access.family};
 if(!access.family)return {...user,boxStudents:[],boxStudent:null};
 return loadBoxStudents(user,supabase);
}
