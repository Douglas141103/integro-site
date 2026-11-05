export const unavailable='O servidor de acesso está demorando para responder. Aguarde um momento e tente novamente.';
export function temporary(error,status=error?.status){
  return status===0 || status===408 || status>=500 ||
    ['request_timeout','unexpected_failure','57014','PGRST000','PGRST001','PGRST002','PGRST003'].includes(error?.code) ||
    /fetch failed|failed to fetch|networkerror|failed to connect|deadline exceeded|timed? ?out|load failed/i.test(error?.message||'');
}
export function loginMessage(error,status){
  if(temporary(error,status))return unavailable;
  if(error?.status===429||/rate limit/i.test(error?.message))return 'Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.';
  if(error?.code==='invalid_credentials'||/Invalid login/i.test(error?.message))return 'E-mail/login ou senha incorretos. Confira e tente novamente.';
  if(error?.code==='email_not_confirmed'||/email_confirmation_required|Email not confirmed/i.test(error?.message))
    return 'Confirme seu e-mail pelo link recebido antes de entrar.';
  if(/box_access_denied/i.test(error?.message))return 'Esta conta não tem acesso ao Integro Box. Entre em contato com o Instituto.';
  return error?.message||'Não foi possível concluir. Tente novamente.';
}
