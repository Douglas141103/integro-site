import {taxRate,taxDue,TAX_PERIOD} from './egg-tax.js';
const fmt=n=>Math.floor(n).toLocaleString('pt-BR');
const node=(tag,text,cls)=>{const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;return e;};
export function createEggEconomyUI({rpc,ready,active,canPresent,getGame,open,close,persist,refreshWallet}){
 let notices=[],queue=[],current=null,busy=false,checking=false,nextCheck=0,host=null,status='';const shown=new Set();
 async function check(){if(checking||!ready()||!active()||Date.now()<nextCheck)return;checking=true;nextCheck=Date.now()+15000;try{const d=await rpc('economy_notices');notices=d.notices||[];}catch{}finally{checking=false;}}
 function tick(){if(!active()||document.hidden||!ready())return;void check();if(checking||!canPresent())return;const notice=notices.find(n=>!shown.has(n.id));if(notice){shown.add(notice.id);current={type:'conversion',notice};open('economyNotice');void refreshWallet();return;}if(queue.length){current=queue.shift();open('economyNotice');}}
 async function acknowledge(){if(busy)return;if(current?.type==='conversion'){busy=true;status='Confirmando leitura…';render(host);try{await rpc('economy_ack',current.notice.id);notices=notices.filter(n=>n.id!==current.notice.id);}catch{status='Não foi possível confirmar. Tente novamente.';busy=false;render(host);return;}busy=false;}current=null;status='';close();}
 const button=(label,fn,secondary=false)=>{const b=node('button',label,secondary?'egg-secondary':'egg-primary');b.type='button';b.onclick=fn;b.disabled=busy;return b;};
 function render(element){if(!element)return;host=element;host.className='egg-economy-notice';host.replaceChildren();if(!current)return;
  const conversion=current.type==='conversion';host.append(node('div',conversion?'◆':'%','egg-economy-symbol'),node('h3',conversion?'Conversão de equilíbrio':current.type==='tax'?'Imposto de renda descontado':'Sua faixa de imposto mudou'));
  if(conversion){const n=current.notice;host.append(node('p','Para controlar a inflação do Pegue o Ovo e manter a economia equilibrada, realizamos uma conversão no seu saldo.'),node('strong',fmt(n.integros)+' Integros → '+fmt(n.gems)+' IntGems','egg-economy-conversion'),node('p','Os IntGems já foram creditados na sua conta. Você pode continuar sua aventura normalmente.'));}
  else{host.append(node('p',current.text));if(current.type==='tax'){host.append(node('strong','−'+fmt(current.receipt.amount)+' Integros','egg-tax-debit'));breakdown(host,current.receipt.buckets);}}
  host.append(node('p','O imposto do jogo incide apenas sobre a renda nova dos bichinhos. A apuração ocorre a cada 5 minutos de jogo ativo; pausar ou sair preserva a contagem.','egg-economy-note'),button(conversion?'Entendi, continuar jogando':'Continuar jogando',()=>void acknowledge()),button('Ver faixas e extrato',()=>open('economy'),true));
  if(status){const feedback=node('p',status);feedback.setAttribute('role','status');host.append(feedback);}
 }
 function breakdown(element,buckets){const table=node('table','','egg-tax-table');const head=node('tr');for(const label of ['Imposto de renda %','Renda apurada'])head.append(node('th',label));table.append(head);for(const rate of ['0','20','35','50'])if(buckets[rate]){const row=node('tr');row.append(node('td',rate+'%'),node('td',fmt(buckets[rate])+' Integros'));table.append(row);}element.append(table);}
 function renderAccount(element){const g=getGame(),s=g.save,t=s.tax;element.className='egg-economy-account';element.replaceChildren();element.append(node('p','Até 1 milhão: isento. Acima de 1 até 5 milhões: 20%. Acima de 5 até 10 milhões: 35%. Acima de 10 milhões: 50%.'),node('strong','Faixa atual: '+taxRate(s.coins)+'%'),node('p','Próxima apuração em '+Math.ceil(TAX_PERIOD-t.seconds)+' s de jogo ativo.'),node('p','Reservado para imposto: '+fmt(taxDue(t))+' Integros.'),node('p','Disponível para compras: '+fmt(g.spendable())+' Integros.'),node('p','A parte reservada permanece no saldo até a cobrança, mas não pode ser gasta. Vendas de criaturas, missões e IntGems não entram neste imposto.'));
  breakdown(element,t.buckets);element.append(node('h3','Extrato de imposto de renda'));
  if(!t.history.length)element.append(node('p','Nenhuma apuração concluída.'));
  for(const r of [...t.history].reverse()){const card=node('article','','egg-tax-receipt');card.append(node('strong','Período '+r.period+' · −'+fmt(r.amount)+' Integros'));breakdown(card,r.buckets);element.append(card);}
  element.append(button('Ver carros e jatinhos',()=>open('luxury')),button('Voltar ao jogo',close,true));
 }
 return{tick,check,clearTransient(){queue=[];},event(e){if(e.type==='taxband'||e.type==='tax'){queue.push(e);persist();}},render,renderAccount};
}
