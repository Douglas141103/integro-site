import {supabase,boxAccess,loginMessage} from './access.js?v=20261104-auth1';
const $=id=>document.getElementById(id);
let mode=location.hash.includes('type=recovery')?'reset':new URLSearchParams(location.search).get('cadastro')==='1'?'signup':'login',busy=false;
const email=()=>{const value=$('authEmail').value.trim();return value.includes('@')?value:value+'@integro.com';};
const status=t=>$('authStatus').textContent=t;
function render(){
 $('authTabs').hidden=mode==='reset';$('authNameLabel').hidden=mode!=='signup';$('authName').required=mode==='signup';$('authEmailLabel').hidden=mode==='reset';$('authEmail').required=mode!=='reset';
 $('authEmail').type=mode==='signup'?'email':'text';$('authPassword').minLength=mode==='login'?6:8;$('authPassword').autocomplete=mode==='login'?'current-password':'new-password';
 $('authHeading').textContent=mode==='signup'?'Uma conta. Todos os mundos.':mode==='reset'?'Escolha sua nova senha.':'Bom ter você por aqui.';
 $('authDescription').textContent=mode==='signup'?'Cadastre um e-mail válido. Enviaremos a confirmação para liberar o acesso.':mode==='reset'?'Use pelo menos 8 caracteres.':'Use seu e-mail ou o login que já utiliza no Instituto.';
 $('authSubmit').textContent=mode==='signup'?'Criar minha conta gratuita':mode==='reset'?'Salvar nova senha':'Entrar e jogar';
 $('authForgot').hidden=mode!=='login';document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
}
async function enter(name){await boxAccess(name);let payment=false;try{payment=!!sessionStorage.getItem('intgem-payment-return');}catch{}location.replace(payment?'./intgem.html':'./jogar.html');}
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{if(busy)return;mode=b.dataset.mode;status('');render();});
$('authForm').onsubmit=async e=>{e.preventDefault();if(busy)return;busy=true;$('authSubmit').disabled=true;status(mode==='signup'?'Criando sua conta…':'Verificando…');
 try{
  if(mode==='reset'){const r=await supabase.auth.updateUser({password:$('authPassword').value});if(r.error)throw r.error;await enter();}
  else if(mode==='signup'){
   const name=$('authName').value.trim();const r=await supabase.auth.signUp({email:email(),password:$('authPassword').value,options:{data:{box_display_name:name},emailRedirectTo:location.origin+'/integro-box/entrar.html'}});
   if(r.error)throw r.error;$('authPassword').value='';
   if(r.data.session)await enter(name);else status('Confira seu e-mail e clique no link de confirmação. Depois volte aqui e entre para jogar. Se já tiver conta, use “Já tenho conta”.');
  }else{const r=await supabase.auth.signInWithPassword({email:email(),password:$('authPassword').value});if(r.error)throw r.error;await enter(r.data.user?.user_metadata?.box_display_name);}
 }catch(e){status(loginMessage(e));}
 finally{busy=false;$('authSubmit').disabled=false;}
};
$('authForgot').onclick=async()=>{if(busy)return;if(!$('authEmail').value.trim()){status('Digite seu e-mail no campo acima para recuperar a senha.');$('authEmail').focus();return;}busy=true;status('Solicitando recuperação…');try{const r=await supabase.auth.resetPasswordForEmail(email(),{redirectTo:location.origin+'/integro-box/entrar.html'});if(r.error)throw r.error;status('Se o e-mail estiver cadastrado, você receberá as instruções para criar uma nova senha.');}catch{status('Não foi possível enviar agora. Tente novamente em alguns minutos.');}finally{busy=false;}};
supabase.auth.onAuthStateChange(event=>{if(event==='PASSWORD_RECOVERY'){mode='reset';render();}});
render();
try{
 const {data,error}=await supabase.auth.getSession();
 if(error)throw error;
 if(data.session&&mode!=='reset')await enter(data.session.user?.user_metadata?.box_display_name);
}catch(e){status(loginMessage(e));}
