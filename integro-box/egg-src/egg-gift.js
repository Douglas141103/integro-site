import {JET_ICON} from './egg-jetpack.js';
const labels={jet:'Mochila a jato',mine:'Mina terrestre',bear:'Boca de urso'};
// The server owns eligibility and rewards. No local flag can grant or reset a gift.
export function createEggGift({rpc,ready,active,canPresent,open,close,onClaim}){
 let checked=false,claimed=false,busy=false,checking=false,offer=true,nextCheck=0,host=null,status='',emptyKind='jet';
 const stock=new Map(),empty=new Set();
 const visible=()=>host?.isConnected&&!host.closest('[hidden]');
 function inventory(kind,total){const previous=stock.get(kind);stock.set(kind,total);if(total>0)empty.delete(kind);else if(previous>0)empty.add(kind);}
 async function check(){if(checking||checked||!ready()||!active()||Date.now()<nextCheck)return;checking=true;nextCheck=Date.now()+10000;try{const d=await rpc('gift_state');claimed=!!d.claimed;checked=true;if(visible())render(host);}catch{ /* Retry without obstructing gameplay. */ }finally{checking=false;}}
 function tick(){if(!active()||document.hidden)return;void check();if(!canPresent())return;if(checked&&!claimed&&offer){offer=false;open('gift');return;}if(empty.size){emptyKind=empty.values().next().value;empty.delete(emptyKind);open('empty');}}
 async function claim(){if(busy||claimed)return;busy=true;status='Abrindo seu presente…';if(visible())render(host);try{const d=await rpc('gift_claim');if(!d.claimed)throw Error('gift_unconfirmed');claimed=true;checked=true;status='Presente recebido! Os itens já estão na sua mochila.';await onClaim();}catch(e){status=e.code==='jet_full'?'Use algumas cargas de voo e abra seu presente novamente.':'Não foi possível confirmar o presente. Toque em Abrir para tentar novamente.';}finally{busy=false;if(visible()){render(host);host.querySelector('[data-gift-open]')?.focus();}}}
 function node(tag,text,cls){const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;return e;}
 function button(text,fn,cls='egg-primary'){const b=node('button',text,cls);b.type='button';b.onclick=fn;return b;}
 function render(element){host=element;host.className='egg-gift'+(claimed?' is-open':'');host.replaceChildren();
  const art=node('div','','egg-gift-art');art.setAttribute('aria-hidden','true');art.innerHTML='<i class="egg-gift-spark s1">✦</i><i class="egg-gift-spark s2">✦</i><i class="egg-gift-spark s3">✧</i><div class="egg-gift-box"><div class="egg-gift-lid"><i></i><b></b></div><div class="egg-gift-base"></div><span>★</span></div>';host.append(art,node('h3',claimed?'A aventura ganhou um presente!':'Uma surpresa para você!'),node('p','Um presente grátis para todos os jogadores, novos e antigos. Uma vez por conta.','egg-gift-intro'));
  const rewards=node('div','','egg-gift-rewards');const jet=node('article','','egg-gift-reward');jet.innerHTML=JET_ICON;jet.append(node('strong','1 mochila a jato'),node('span','5 recargas de voo'));rewards.append(jet);
  for(const [icon,label]of [['✹','1 mina terrestre'],['◉','1 boca de urso']]){const card=node('article','','egg-gift-reward');card.append(node('b',icon,'egg-gift-reward-icon'),node('strong',label));rewards.append(card);}host.append(rewards);
  const action=button(claimed?'Vamos jogar!':busy?'Abrindo…':'Abrir',()=>claimed?close():void claim());action.disabled=busy;action.dataset.giftOpen='';host.append(action);
  if(!claimed)host.append(button('Abrir depois',close,'egg-secondary'));
  const feedback=node('p',status,'egg-gift-status');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');host.append(feedback);
 }
 function renderEmpty(element){const kind=emptyKind;element.className='egg-item-empty';element.replaceChildren();element.append(node('div',kind==='jet'?'↟':kind==='mine'?'✹':'◉','egg-item-empty-icon'),node('h3',labels[kind]),node('p',kind==='jet'?'Suas recargas de voo acabaram.':'Você usou a última armadilha deste tipo.'),node('p','Acabou o item, compre mais.'),button('Ir à loja',()=>open(kind==='jet'?'jetpack':'traps')),button('Continuar jogando',close,'egg-secondary'));}
 return{tick,inventory,claim,mount:render,mountEmpty:renderEmpty,wake(){offer=true;void check();},get claimed(){return claimed;}};
}
