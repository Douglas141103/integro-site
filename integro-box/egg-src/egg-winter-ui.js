import {WINTER,winterActive,winterCountdown} from './egg-winter-rules.js';
export const SKATE_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h6v7l6 2c2 1 3 3 2 4H5V8m2 8v4m10-4v4M3 20h17l2-2M7 6h4M7 9h4"/></svg>';
const errors={winter_ended:'O evento de inverno terminou. A pista da Fênix Gelada continua disponível.',insufficient_intgem:'Você precisa de 7 IntGem disponíveis.',winter_empty:'Seus patins acabaram. Compre outro par na loja.',winter_full:'Sua mochila está cheia.',race_running:'Os patins não podem ser usados durante uma corrida online.',trade_pending:'Conclua a troca antes de usar os patins.',request_changed:'Atualize a página e tente novamente.'};
export function createEggWinter({dock,getGame,rpc,ready,active,blocked,canPresent,open,close,message,storage,onClaim,onUse,canAct=()=>true,getBalance=()=>window.BoxIntGem?.balance,refreshWallet=()=>window.BoxIntGem?.refresh()}){
 let data={claimed:false,skates:0},loaded=false,busy=false,checking=false,nextCheck=0,offer=true,host=null,mode='shop',status='',requests={};
 try{requests=JSON.parse(storage?.getItem('egg-winter-requests')||'{}');}catch{}
 const remember=()=>{try{storage?.setItem('egg-winter-requests',JSON.stringify(requests));}catch{}};
 const visible=()=>host?.isConnected&&!host.closest('[hidden]');
 const button=document.createElement('button');button.type='button';button.className='egg-ability-button egg-skate-button';button.innerHTML=SKATE_ICON+'<span></span><small>Gelo</small>';button.hidden=true;dock.append(button);
 const canUse=()=>!getGame().skatesActive&&!getGame().raceMode&&!getGame().jetFlight&&getGame().mode==='run';
 const node=(tag,text,cls)=>{const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;return e;};
 const btn=(label,fn,disabled=false,cls='egg-primary')=>{const b=node('button',label,cls);b.type='button';b.disabled=busy||disabled;b.onclick=fn;return b;};
 async function check(force=false){if(checking||busy||!ready()||!active()||(!force&&(loaded||Date.now()<nextCheck)))return;checking=true;nextCheck=Date.now()+10000;try{data=await rpc('winter_state');loaded=true;status='';update();if(visible())render(host,mode);}catch{status='Conecte o perfil para abrir o presente e usar os patins.';if(visible())render(host,mode);}finally{checking=false;}}
 async function act(action,fromPanel=false){if(action==='winter_claim'&&!winterActive())return false;if(busy||!ready()||!canAct())return false;if(action==='winter_use'&&(!canUse()||!active()||(!fromPanel&&blocked())))return false;if(action==='winter_buy_intgem'&&(!getGame().inBase()||getGame().carrying!==null||getGame().raceMode)){status='Volte à base, guarde o ovo e abra a loja para comprar.';if(visible())render(host,mode);return false;}
  busy=true;status='Confirmando…';const id=action==='winter_claim'?null:(requests[action]||=window.crypto.randomUUID());remember();update();if(visible())render(host,mode);
  try{const result=await rpc(action,id);data=result;loaded=true;delete requests[action];remember();
   if(action==='winter_claim'){status='Presente recebido: 3 minas e 2 pares de patins!';await onClaim();}
   if(action==='winter_buy_intgem'){status='Um par de patins comprado por 7 IntGem.';try{await refreshWallet();}catch{}}
   if(action==='winter_use'){if(!getGame().activateSkates())throw Error('Não foi possível ativar os patins neste momento.');close();onUse();message('Patins ativados. No gelo, a redução cai de 70% para 25%.');}
   return true;
  }catch(e){status=errors[e.code]||e.message||'Não foi possível confirmar. Tente novamente.';if(e.code){delete requests[action];remember();}message(status);return false;}finally{busy=false;update();if(visible())render(host,mode);}
 }
 button.onclick=()=>getGame().skatesActive?message('Patins ativos até voltar à base ou ser capturado.'):data.skates?void act('winter_use'):open('winter');
 function update(){const g=getGame();button.hidden=!loaded||g.raceMode||!!g.jetFlight||(!data.skates&&!g.skatesActive&&g.zone()!==WINTER.world);button.disabled=busy||blocked()||g.skatesActive;button.classList.toggle('active',g.skatesActive);button.querySelector('span').textContent=g.skatesActive?'✓':'×'+data.skates;button.title=g.skatesActive?'Patins ativos · uma tentativa':'Usar patins de neve · '+data.skates+' pares';button.setAttribute('aria-label',button.title);button.style.setProperty('--ability-color','#b7eaff');}
 function tick(){if(!active()||document.hidden)return;void check();update();if(winterActive()&&loaded&&!data.claimed&&offer&&canPresent()){offer=false;open('winterGift');}}
 function render(element,selected='shop'){host=element;mode=selected;host.className='egg-winter-panel';host.replaceChildren();
  const hero=node('div','','egg-winter-hero');hero.innerHTML='<span aria-hidden="true">❄</span><div><small>PRIMEIRO EVENTO · PISTA 21</small><h3>Inverno 2026</h3><p>A fênix gelada despertou.</p></div>';host.append(hero);if(!winterActive()){hero.querySelector('small').textContent='PISTA 21 · PERMANENTE';hero.querySelector('h3').textContent='Fênix Gelada';hero.querySelector('p').textContent='Evento encerrado · ovos normais';}else host.append(node('p','Fim do evento: '+winterCountdown(),'egg-muted'));
  if(mode==='gift'&&!winterActive()){host.append(node('p','O evento terminou. Os itens já recebidos continuam na mochila.'),btn('Continuar jogando',close));return;}
  if(mode==='gift'){
   host.append(node('p','Um presente de inverno grátis para cada conta. Os itens não usados ficam na sua mochila.'));
   const gifts=node('div','','egg-winter-rewards');for(const [icon,title,detail]of [['✹','3 minas terrestres','Use nas salas online.'],['❄','2 pares de patins','Cada par vale uma tentativa.']]){const item=node('article');item.append(node('b',icon),node('strong',title),node('small',detail));gifts.append(item);}host.append(gifts);
   const claim=btn(!loaded?'Conectando…':data.claimed?'Presente recebido ✓':'Abrir presente de inverno',()=>void act('winter_claim'),!loaded||data.claimed);claim.dataset.winterClaim='';host.append(claim,btn('Continuar jogando',close,false,'egg-secondary'));
  }else{
   host.append(node('p','A fênix persegue até quem voa de mochila a jato. Após o aviso, ela congela toda a pista por 10 segundos: o chão escorrega e sua velocidade cai 70%.'));
   if(winterActive()){const values=node('div','','egg-winter-values');for(let i=0;i<5;i++)values.append(node('span','XXXXX'));host.append(values,node('p','Pegue o ovo e descubra no curral quanto vale.','egg-muted'));}else host.append(node('p','A pista tem três ovos com as mesmas raridades, mutações e regras de renovação das outras pistas.'));
   const card=node('article','','egg-winter-skates');const art=node('div','','egg-winter-skate-art');art.innerHTML=SKATE_ICON;
   card.append(art,node('h3','Patins de neve'),node('strong','💎 7 IntGem · uso único'),node('p','No gelo, a redução de velocidade passa de 70% para 25%. Um par é consumido ao ativar e termina ao voltar à base, ser capturado ou sair da partida.'),node('p',loaded?'Na mochila: '+data.skates+' pares':'Conectando sua mochila…'));
   const buy=btn('Comprar 1 par · 7 IntGem',()=>void act('winter_buy_intgem'),!loaded||!getGame().inBase()||(getBalance()!=null&&getBalance()<WINTER.skatePrice)||getGame().carrying!==null||getGame().raceMode);buy.dataset.winterBuy='';
   const use=btn(getGame().skatesActive?'Patins ativos':'Usar 1 par agora',()=>void act('winter_use',true),!loaded||!data.skates||!canUse(),'egg-secondary');use.dataset.winterUse='';card.append(buy,use);host.append(card);if(winterActive())host.append(btn(data.claimed?'Ver presente de inverno':'Abrir meu presente grátis',()=>open('winterGift'),false,'egg-secondary'));
  }
  const feedback=node('p',status,'egg-winter-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');host.append(feedback);
 }
 return{tick,update,act,refresh:()=>check(true),mount(el,selected='shop'){render(el,selected);void check(true);},get state(){return data;}};
}
