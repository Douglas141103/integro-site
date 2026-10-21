import {supabase} from './access.js?v=20261016-intgem1';
export async function cageRPC(action,payload={}){
 const {data,error}=await supabase.rpc('box_intgem',{p_action:action,p_payload:payload});
 if(error)throw Error('Não foi possível conectar. Tente novamente.');
 if(data?.error){const e=Error(data.error);e.code=data.error;throw e;}
 return data;
}
