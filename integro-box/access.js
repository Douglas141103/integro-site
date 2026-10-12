import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const config=window.INTEGRO_SUPABASE;
export const supabase=createClient(config.url,config.anonKey);
export async function requireFamily(){
 const {data,error}=await supabase.auth.getUser();
 if(error || !data.user){location.replace('/portal-familia/index.html?next=integro-box');return null;}
 const {data:profile,error:profileError}=await supabase.from('profiles').select('role').eq('id',data.user.id).single();
 if(profileError || !['responsavel','integro_admin','diretor','coordenacao','professor'].includes(profile?.role)) throw new Error('Este acesso precisa de um perfil autorizado no Portal da Família.');
 return data.user;
}
