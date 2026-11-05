import {loginMessage} from '../integro-box/login-errors.mjs';

// Bind the form before attempting to renew a stored session. A slow refresh
// must never leave the browser to submit a native form or disable it forever.
export function bindPortalLogin({form,client,feedback,go}){
  const button=form.querySelector('[type="submit"]');
  let attempted=false, busy=false;
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(busy)return;
    attempted=busy=true;
    button.disabled=true;feedback('Entrando…','success');
    const notice=setTimeout(()=>feedback('O servidor está demorando para responder. Aguarde a conclusão desta tentativa.'),8000);
    try{
      const email=form.querySelector('#email').value.trim();
      const password=form.querySelector('#password').value;
      const {data,error}=await client.auth.signInWithPassword({email,password});
      if(error)throw error;
      if(!data?.session)throw new Error('Não foi possível iniciar a sessão. Tente novamente.');
      feedback('Login realizado. Redirecionando…','success');
      go();
    }catch(error){
      feedback(loginMessage(error),'error');
    }finally{
      clearTimeout(notice);busy=false;button.disabled=false;
    }
  });
  button.disabled=false;
  void (async()=>{
    try{
      const {data,error}=await client.auth.getSession();
      if(attempted)return;
      if(error)throw error;
      if(data.session)go();
    }catch(error){if(!attempted)feedback(loginMessage(error),'error');}
  })();
}
