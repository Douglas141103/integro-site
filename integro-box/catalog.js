(()=>{
'use strict';
const lobby=document.getElementById('lobby');
if(!lobby||lobby.dataset.catalogReady)return;
const games=[
 ['descubra','Descubra!','#playDescubra','Desafios','Mistério na nave Integro! Tarefas, sabotagens e votação. Solo com bots ou salas online.'],
 ['tower','TOWER','#playTower','Criatividade','Construa torres, resolva 24 desafios de lógica e teste sua estrutura com gravidade e vento.'],
 ['shark','Shark','#playShark','Aventura','Um oceano 3D cartoon: coma peixes menores, cresça, explore seis regiões e equipe seu tubarão.'],
 ['integro-rush','Integro Rush','#playRush','Corrida','15 expedições 3D, cinco mundos e 24 acessórios. Pule, deslize e explore.'],
 ['bounce-tegro','Bounce Tegro','#playBounce','Aventura','Role, pule e explore 20 fases em cinco mundos.'],
 ['pegue-o-ovo','Pegue o Ovo','#playEggGame','Corrida','Inverno 2026: pista 21, Fênix Gelada, ovos misteriosos e um presente para sua aventura.'],
 ['meu-bairro','Meu Bairro','#playDollGame','Criatividade','Uma casa, lojas e muitas histórias para viver.'],
 ['fruit-box','Fruit Box','#playFruitGame','Aventura','Explore 20 ilhas, enfrente guardiões e descubra frutas.'],
 ['integrocraft','IntegroCraft','#playCraft','Criatividade','Explore, fabrique e construa o seu mundo.'],
 ['gosnake','GoSnake','#playGoSnake','Desafios','Frutas, túneis e poderes em 15 arenas.'],
 ['fuitcort','FuitCort','#playFuitCort','Desafios','Corte frutas e conquiste novos equipamentos.'],
 ['interball','InterBall','#playInterBall','Desafios','Mire a bolinha e quebre todos os blocos.'],
 ['interdance','InterDance','#playInterDance, #playInterDace','Música','Entre no ritmo e desafie os chefes.'],
 ['rua-das-descobertas','Rua das Descobertas','#playStreetGame','Aventura','Procure objetos e resolva pequenas contas.'],
 ['torre-da-matematica','Torre da Matemática','[data-game="math"]','Desafios','Suba a torre com o poder dos números.'],
 ['ponte-das-palavras','Ponte das Palavras','[data-game="words"]','Desafios','Brinque com as letras e forme palavras.'],
 ['rota-do-robo','Rota do Robô','[data-game="robot"]','Desafios','Programe 12 missões pelo jardim, cânion e estação lunar.'],
 ['memoria-em-ingles','Memória em Inglês','[data-game="memory"]','Desafios','Encontre os pares e descubra palavras em inglês.']
].map(([id,name,selector,category,short])=>{const play=lobby.querySelector(selector);return {id,name,category,short,play,card:play?.closest('.card')};}).filter(g=>g.card);
if(!games.length)return;
const asset=id=>(id==='pegue-o-ovo'?'./assets/catalog-v1/pegue-o-ovo.webp?v=20261023-winter2':window.BoxCatalogAssets?.[id])||(id==='rota-do-robo'?'./assets/robot-route.svg?v=20261017-robot1':`./assets/catalog-v1/${id}.webp`);
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
const btn=(cls,label,fn)=>{const b=el('button',cls,label);b.type='button';b.addEventListener('click',fn);return b;};
const read=k=>{try{const a=JSON.parse((window.BoxStorage||localStorage).getItem(k)||'[]');return Array.isArray(a)?a.filter(id=>games.some(g=>g.id===id)):[];}catch{return [];}};
const save=(k,a)=>{try{(window.BoxStorage||localStorage).setItem(k,JSON.stringify(a));}catch{}};
let favorites=new Set(read('catalog-favorites-v1')),recent=read('catalog-recent-v1').slice(0,3),category='Todos',query='';
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const cover=(g,lazy=true)=>{const img=el('img');img.src=asset(g.id);img.alt=g.name;img.width=1536;img.height=1024;img.loading=lazy?'lazy':'eager';img.decoding='async';return img;};
const launch=g=>g.play.click();
const dialog=el('dialog','catalog-dialog');dialog.innerHTML='<form method="dialog"><button class="catalog-close" aria-label="Fechar">×</button></form><div class="catalog-dialog-body"></div>';document.body.append(dialog);
const sheet=dialog.querySelector('.catalog-dialog-body');
function show(){dialog.showModal();}
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
function details(g){sheet.replaceChildren(cover(g),el('small','catalog-kicker',g.category),el('h2','',g.name),el('p','',g.description||g.short),btn('catalog-play','▶ Jogar agora',()=>{dialog.close();launch(g);}));show();}
const grid=el('div','catalog-grid');
for(const g of games){
 g.description=g.card.querySelector('.card-body p')?.textContent;
 const card=el('article','catalog-card');card.dataset.catalogGame=g.id;
 const art=btn('catalog-cover','',()=>launch(g));art.setAttribute('aria-label','Jogar '+g.name);art.append(cover(g));
 const fav=btn('catalog-favorite','☆',()=>{favorites.has(g.id)?favorites.delete(g.id):favorites.add(g.id);save('catalog-favorites-v1',[...favorites]);syncFavorites();filter();});
 g.favorite=fav;
 const body=el('div','catalog-card-body');body.append(el('small','catalog-category',g.category),el('h3','',g.name));
 const actions=el('div','catalog-card-actions');
 g.play.className='catalog-play';g.play.textContent='▶ Jogar';g.play.setAttribute('aria-label','Jogar '+g.name);
 g.play.addEventListener('click',()=>{recent=[g.id,...recent.filter(id=>id!==g.id)].slice(0,3);save('catalog-recent-v1',recent);renderRecent();},true);
 actions.append(g.play,btn('catalog-detail','Detalhes',()=>details(g)));body.append(actions);card.append(art,fav,body);grid.append(card);g.catalogCard=card;
}
function syncFavorites(){games.forEach(g=>{const on=favorites.has(g.id);g.favorite.textContent=on?'★':'☆';g.favorite.setAttribute('aria-pressed',String(on));g.favorite.setAttribute('aria-label',(on?'Remover dos favoritos: ':'Favoritar: ')+g.name);});}
const recentSection=el('section','catalog-recent');recentSection.setAttribute('aria-label','Continuar jogando');
function renderRecent(){recentSection.replaceChildren();recentSection.hidden=!recent.length;if(!recent.length)return;recentSection.append(el('h2','','Continuar jogando'));const row=el('div','catalog-recent-row');for(const id of recent){const g=games.find(g=>g.id===id);if(!g)continue;const b=btn('catalog-recent-game','',()=>launch(g));b.append(cover(g),el('span','',g.name),el('b','','▶'));row.append(b);}recentSection.append(row);}
const intro=el('div','catalog-intro');const heading=el('div');heading.append(el('h1','','Vamos jogar?'));const search=el('input','catalog-search');search.type='search';search.placeholder='Buscar um jogo…';search.setAttribute('aria-label','Buscar um jogo');search.addEventListener('input',()=>{query=norm(search.value.trim());filter();});intro.append(heading,search);
const hero=el('section','catalog-feature');const featured=games.find(g=>g.id==='integro-rush')||games[0];const heroCopy=el('div');heroCopy.append(el('span','catalog-kicker','JOGO EM DESTAQUE'),el('h2','',featured.name),el('p','',featured.short),btn('catalog-play','▶ Vamos nessa',()=>launch(featured)));const heroArt=btn('catalog-feature-art','',()=>launch(featured));heroArt.setAttribute('aria-label','Jogar '+featured.name);heroArt.append(cover(featured,false));hero.append(heroCopy,heroArt);
const filters=el('nav','catalog-filters');filters.setAttribute('aria-label','Categorias de jogos');for(const cat of ['Todos','Favoritos','Aventura','Criatividade','Corrida','Música','Desafios']){const b=btn('catalog-filter',(cat==='Favoritos'?'★ ':'')+cat,()=>{category=cat;filter();});b.dataset.category=cat;filters.append(b);}
const titleRow=el('div','catalog-section-title');titleRow.append(el('h2','','Explore os jogos'));const count=el('span');count.setAttribute('role','status');titleRow.append(count);
const empty=el('div','catalog-empty');empty.hidden=true;empty.append(el('h3','','Nenhum jogo por aqui ainda.'),el('p','','Experimente outra busca ou toque na estrela de uma capa para favoritar.'),btn('catalog-detail','Ver todos os jogos',()=>{category='Todos';query='';search.value='';filter();}));
function filter(){let n=0;for(const g of games){const match=(category==='Todos'||category==='Favoritos'&&favorites.has(g.id)||g.category===category)&&(!query||norm(g.name+' '+g.category+' '+g.short+' '+(window.BoxI18n?.t(g.name)||'')+' '+(window.BoxI18n?.t(g.category)||'')+' '+(window.BoxI18n?.t(g.short)||'')).includes(query));g.catalogCard.hidden=!match;if(match)n++;}count.textContent=`${n} ${n===1?'jogo':'jogos'}`;empty.hidden=n>0;filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));}
const legacy=el('div','catalog-legacy');legacy.hidden=true;legacy.inert=true;legacy.append(...lobby.childNodes);
lobby.replaceChildren(intro,recentSection,filters,titleRow,grid,empty,hero,el('p','catalog-note','Escolha uma aventura. Aprenda brincando.'),legacy);
lobby.dataset.catalogReady='true';document.body.classList.add('catalog-enabled');syncFavorites();renderRecent();filter();
const head=document.querySelector('body > header .head');
if(head){const brand=head.querySelector('.brand-logo');if(brand){brand.src=asset('integro-box');brand.alt='Integro Box';brand.width=156;brand.height=104;}const home=head.querySelector('#brandHome');if(home)home.setAttribute('aria-label','Integro Box — menu de jogos');
 if(!head.querySelector('.box-player')){const profile=el('div','catalog-local-profile','Meu espaço');profile.append(el('small','','Neste aparelho'));head.append(profile);}
 const account=el('dialog','catalog-dialog catalog-account');account.id='boxAccountDialog';account.setAttribute('aria-labelledby','boxAccountTitle');
 account.innerHTML='<form method="dialog"><button class="catalog-close" aria-label="Fechar conta">×</button></form><small class="catalog-kicker">SEU ESPAÇO</small><h2 id="boxAccountTitle">Conta e informações</h2><div class="catalog-account-profile"></div><div class="catalog-account-links"></div><details class="catalog-privacy"><summary>Privacidade e acompanhamento</summary></details>';
 const accountProfile=account.querySelector('.catalog-account-profile'),student=document.getElementById('boxStudentSelect');
 if(student){const label=el('label','','Quem está jogando?');label.htmlFor=student.id;accountProfile.append(label,student);}
 const links=account.querySelector('.catalog-account-links'),original=document.querySelector('.box-account');if(original)links.append(original);
 const notice=document.getElementById('boxUsageNotice');if(notice){notice.removeAttribute('style');account.querySelector('.catalog-privacy').append(notice);}
 const help=document.getElementById('helpBtn');if(help)links.append(btn('catalog-detail','Como jogar',()=>{account.close();help.click();}));
 account.addEventListener('click',e=>{if(e.target===account){const r=account.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)account.close();}});
 document.body.append(account);const accountButton=btn('catalog-settings','Conta',()=>account.showModal());accountButton.setAttribute('aria-label','Conta e informações');accountButton.setAttribute('aria-haspopup','dialog');accountButton.setAttribute('aria-controls',account.id);head.append(accountButton);}

window.addEventListener('box-language-change',filter);
window.BoxCatalog={games:games.map(g=>g.id)};
})();
