// Visual metadata only. The server owns prices, inventory and equipped slots.
export const EGG_COLLECTIONS=[
 {id:'station',name:'Estação Integro',color:'#32cfc3',secondary:'#ffce64',items:[
  ['head','Quepe do Maquinista',4,'cap','Quepe turquesa com emblema dourado e aba escura.'],
  ['face','Visor de Trilhos',4,'scanner','Visor panorâmico com dois trilhos luminosos.'],
  ['back','Locomotiva de Bolso',7,'train','Uma pequena locomotiva com rodas e chaminé nas costas.'],
  ['companion','Robô Bilhete',7,'robot','Robozinho flutuante com antena e braços articulados.'],
  ['aura','Trilhos de Luz',4,'tracks','Dois trilhos e travessas de luz acompanham seus passos.']]},
 {id:'coral',name:'Tesouros do Recife',color:'#ff83ad',secondary:'#76e3ed',items:[
  ['head','Coroa de Coral',6,'coral','Ramos de coral rosado e pequenas pérolas azuis.'],
  ['face','Máscara Abissal',5,'diver','Lentes de mergulho com tubo e aro de coral.'],
  ['back','Concha Imperial',8,'shell','Concha aberta em leque, com uma pérola no centro.'],
  ['companion','Axolote Rubi',8,'axolotl','Axolote voador com seis brânquias de cristal.'],
  ['aura','Maré de Pérolas',5,'bubbles','Bolhas e pérolas em órbita ao redor do corredor.']]},
 {id:'aurora',name:'Expedição Boreal',color:'#a5a3ff',secondary:'#79f0c5',items:[
  ['head','Tiara Boreal',8,'antlers','Galhos de cristal verde e lilás sobre a cabeça.'],
  ['face','Óculos Prisma',6,'prism','Duas lentes hexagonais com reflexos da aurora.'],
  ['back','Asas Boreais',10,'wings','Seis penas facetadas em cada asa. São decorativas.'],
  ['companion','Coruja Polar',10,'owl','Coruja com olhos dourados e asas que batem suavemente.'],
  ['aura','Jardim da Aurora',7,'petals','Seis pétalas luminosas giram sob seus pés.']]},
 {id:'magma',name:'Forja do Vulcão',color:'#ff7954',secondary:'#ffda6c',items:[
  ['head','Elmo Magmático',10,'horns','Elmo de lava com chifres dourados e crista central.'],
  ['face','Máscara Brasa',8,'mask','Máscara facetada com presas e detalhes incandescentes.'],
  ['back','Reator Vulcânico',12,'reactor','Reator de dois núcleos com jatos de cristal, sem voo.'],
  ['companion','Dragão Faísca',12,'dragon','Dragão pequenino com chifres, cauda e asas flamejantes.'],
  ['aura','Órbita de Lava',8,'fire','Pontas de fogo estilizadas formam uma coroa no chão.']]},
 {id:'lunar',name:'Exploradores do Cosmos',color:'#9383ef',secondary:'#80dfff',items:[
  ['head','Coroa Nebulosa',12,'orbit','Planetas e órbitas cercam um cristal sobre a cabeça.'],
  ['face','Visor Saturno',10,'saturn','Uma lente planetária com anéis inclinados.'],
  ['back','Satélite Portátil',16,'satellite','Painéis solares, antena e um núcleo de ametista.'],
  ['companion','Raposa Lunar',14,'fox','Raposa com orelhas pontudas e uma grande cauda estelar.'],
  ['aura','Portais Orbitais',10,'orbit','Três órbitas cruzadas com pequenos planetas.']]},
 {id:'royal',name:'Realeza do Ninho',color:'#ffd56e',secondary:'#b4e9ff',items:[
  ['head','Coroa Diamante',14,'crown','Sete pontas douradas e uma grande joia azul.'],
  ['face','Monóculo Real',12,'monocle','Lente de cristal com corrente e estrela dourada.'],
  ['back','Manto Real',18,'cape','Manto azul com gola dourada e emblema de diamante.'],
  ['companion','Pintinho Imperial',16,'chick','Pintinho coroado, com bico dourado e pequenas asas.'],
  ['aura','Constelação Real',12,'stars','Estrelas e diamantes desenham uma constelação no chão.']]}
];
export const NEW_EGG_ITEMS=EGG_COLLECTIONS.flatMap(t=>t.items.map(([kind,name,price,model,description])=>({
 id:`egg_${t.id}_${kind}`,game:'egg',name,kind,price,model,color:t.color,secondary:t.secondary,
 rarity:price>=12?'Lendário':price>=7?'Épico':'Raro',collection:t.name,isNew:true,
 nativeId:['head','face','back'].includes(kind)?`ig_${t.id}_${kind}`:null,
 description:description+' Cosmético permanente.'
})));
export const CONVERTED_EGG_ITEMS=[
 ['dragonWings','Asas de dragão','back',14,'#79cfad','#ffce6a','Membranas verdes e hastes douradas.'],
 ['prismHalo','Halo prismático','head',16,'#bca4ff','#7ae8df','Dois anéis de cristal e seis prismas coloridos.'],
 ['timeMask','Máscara dos segundos','face',18,'#7ddbc8','#ffd375','Lente-relógio, ponteiros e engrenagem lateral.'],
 ['clockworkCrown','Coroa do tempo','head',20,'#ffcf72','#81d9d4','Relógio cercado por engrenagens douradas.'],
 ['hourglassPack','Ampulheta eterna','back',22,'#9ccfff','#ffe3a1','Duas câmaras de cristal e areia luminosa.'],
 ['galaxyMask','Máscara galáctica','face',24,'#b5a0ff','#8de7ff','Constelações e planetas em um visor violeta.'],
 ['galaxyPortal','Portal das galáxias','back',26,'#9981e9','#ffcf80','Anéis orbitais, estrelas e uma nebulosa central.'],
 ['starBeacon','Farol do infinito','back',28,'#80e8df','#ffd977','Planeta luminoso com três órbitas douradas.']
].map(([nativeId,name,kind,price,color,secondary,description])=>({id:'egg_relic_'+nativeId,nativeId,game:'egg',name,kind,price,color,secondary,rarity:'Relíquia',collection:'Relíquias da aventura',converted:true,description:description+' Cosmético permanente.'}));
export const EGG_PREMIUM_ITEMS=[...NEW_EGG_ITEMS,...CONVERTED_EGG_ITEMS];
export const PREMIUM_BY_NATIVE=Object.fromEntries(EGG_PREMIUM_ITEMS.filter(i=>i.nativeId).map(i=>[i.nativeId,i]));
export const PREMIUM_ACCESSORIES=Object.fromEntries(NEW_EGG_ITEMS.filter(i=>i.nativeId).map(i=>[i.nativeId,{name:i.name,slot:i.kind,desc:i.description,price:Infinity,premium:true}]));
export const EGG_SLOT_LABELS={head:'Cabeça',face:'Rosto',back:'Costas',companion:'Mascotes',aura:'Auras'};

export function eggPremiumEquipment(legacy={},wallet={}){
 const result=Object.fromEntries(Object.entries(legacy).filter(([,id])=>!PREMIUM_BY_NATIVE[id]));
 for(const slot of ['head','face','back'])if(wallet?.[slot]?.nativeId)result[slot]=wallet[slot].nativeId;
 return result;
}

// Code-native illustrations also work when WebGL thumbnails are unavailable.
export function eggItemArt(item){
 const c=/^#[0-9a-f]{6}$/i.test(item.color)?item.color:'#76dfd0',s=/^#[0-9a-f]{6}$/i.test(item.secondary)?item.secondary:'#ffd578';
 const shapes={
 head:'<path d="m20 63-4-31 19 14 15-24 15 24 19-14-4 31Z"/><path d="M20 66h60v10H20Z"/>',
 face:'<path d="M16 40h68v24L66 74 50 62 34 74 16 64Z"/><circle cx="33" cy="53" r="9"/><circle cx="67" cy="53" r="9"/>',
 back:'<path d="m45 36-29-12 5 39 24 13m10-40 29-12-5 39-24 13"/><rect x="39" y="30" width="22" height="51" rx="9"/>',
 companion:'<path d="m26 35-4-16 20 12h16l20-12-4 16 4 30-28 18-28-18Z"/><circle cx="38" cy="50" r="4"/><circle cx="62" cy="50" r="4"/><path d="m44 64 6 5 6-5"/>',
 aura:'<ellipse cx="50" cy="63" rx="35" ry="16"/><ellipse cx="50" cy="63" rx="22" ry="9"/><path d="m50 12 6 13 14 3-11 10 2 15-11-7-11 7 2-15-11-10 14-3Z"/>'
 };
 return `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="88" rx="31" ry="5" fill="#173e4d" opacity=".12"/><g fill="${c}" stroke="#214454" stroke-width="3" stroke-linejoin="round">${shapes[item.kind]||shapes.aura}</g><path d="m50 42 7 8-7 10-7-10Z" fill="${s}"/><circle cx="83" cy="17" r="4" fill="${s}"/><path d="M14 20v10m-5-5h10" stroke="${s}" stroke-width="3"/></svg>`;
}
