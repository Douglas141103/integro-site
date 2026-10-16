// The database is authoritative for prices, balances, ownership and equipment.
export const GAMES=[
 ['rush','Integro Rush','rushApp','runner'],['bounce','Bounce Tegro','bounceApp','ball'],
 ['egg','Pegue o Ovo','eggApp','egg'],['bairro','Meu Bairro','dollApp','home'],
 ['fruit','Fruit Box','fruitApp','fruit'],['craft','IntegroCraft','craftApp','cube'],
 ['gosnake','GoSnake','snakeApp','snake'],['fuitcort','FuitCort','fcApp','blade'],
 ['interball','InterBall','interballApp','ball'],['interdance','InterDance','danceApp','music'],
 ['house','Rua das Descobertas','houseApp','compass'],['math','Torre da Matemática','play','tower'],
 ['words','Ponte das Palavras','play','letters'],['robot','Rota do Robô','play','robot'],
 ['memory','Memória em Inglês','play','cards']
].map(([id,name,screen,symbol])=>({id,name,screen,symbol}));
export const PACKS=[{id:'gem1',gems:1,cents:99},{id:'gem5',gems:5,cents:299},{id:'gem10',gems:10,cents:699},{id:'gem20',gems:20,cents:1099}];
export const ITEMS=GAMES.flatMap(g=>[
 {id:g.id+'_jade',game:g.id,name:'Aura de Jade',kind:'aura',rarity:'Raro',price:4,color:'#54ead2',secondary:'#86aaff',description:'Brilho de cristal e moldura de jade no cenário de '+g.name+'.'},
 {id:g.id+'_guardian',game:g.id,name:'Guardião '+({egg:'do Ninho',rush:'da Expedição',bounce:'dos Saltos',bairro:'do Bairro',fruit:'das Frutas',craft:'dos Blocos',gosnake:'da Serpente',fuitcort:'da Lâmina',interball:'da Arena',interdance:'do Ritmo',house:'das Descobertas',math:'dos Números',words:'das Palavras',robot:'da Rota',memory:'da Memória'}[g.id]),kind:'companion',rarity:'Épico',price:7,color:'#ffc96a',secondary:'#63e7e5',description:'Mascote animado no HUD que acompanha você em '+g.name+'.'},
 {id:g.id+'_cosmos',game:g.id,name:'Aura Cósmica',kind:'aura',rarity:'Lendário',price:12,color:'#b7a1ff',secondary:'#ffb9df',description:'Cristais, estrelas e moldura cósmica para '+g.name+'.'}
]);
export const money=cents=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(cents/100);
export function activeGame(doc=document,win=window){
 for(const g of GAMES.filter(g=>g.screen!=='play')){const el=doc.getElementById(g.screen);if(el&&!el.hidden&&!el.classList.contains('hidden'))return g.id;}
 const play=doc.getElementById('play');return play&&!play.hidden&&!play.classList.contains('hidden')&&GAMES.some(g=>g.id===win.BoxUsageGame)?win.BoxUsageGame:'lobby';
}
export function gemArt(color='#70f1df',secondary='#9c8dff'){
 return `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M25 15H75L94 40 50 91 6 40Z" fill="${color}" stroke="#173b50" stroke-width="5" stroke-linejoin="round"/><path d="M25 15 34 40 50 91 66 40 75 15M6 40H94M34 40 50 15 66 40" stroke="#fff" stroke-opacity=".62" stroke-width="3"/><path d="M66 40 50 91 94 40Z" fill="${secondary}" fill-opacity=".7"/><path d="m20 31 7-9h13" stroke="white" stroke-width="5" stroke-linecap="round"/></svg>`;
}
