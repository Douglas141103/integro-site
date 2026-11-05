(()=>{var Oe=(i,e,t)=>i+192*(t+192*e);var me=[null,{name:"Grama",color:7452750},{name:"Terra",color:10383440},{name:"Pedra",color:9542817},{name:"Madeira",color:9003325},{name:"Folhas",color:4364635},{name:"Areia",color:14994827},{name:"Tijolo",color:12021333},{name:"Vidro",color:10413535},{name:"T\xE1buas",color:13344100},{name:"Neve",color:15135475},{name:"Rocha base",color:4409687},{name:"Escada",color:13015137,group:"Constru\xE7\xE3o",price:12,pack:4},{name:"Porta",color:10055755,group:"Constru\xE7\xE3o",price:18},{name:"Cerca",color:14003314,group:"Constru\xE7\xE3o",price:10,pack:4},{name:"Cama",color:14575995,group:"Casa",price:35},{name:"Mesa",color:12950373,group:"Casa",price:20},{name:"Cadeira",color:9943470,group:"Casa",price:15},{name:"Ba\xFA",color:12223039,group:"Casa",price:28},{name:"Fornalha",color:7700612,group:"Casa",price:40},{name:"Lumin\xE1ria",color:16766319,group:"Casa",price:18},{name:"Banca do marketplace",color:5610374,group:"Casa",price:30},{name:"\xC1gua",color:5029335,fluid:!0},{name:"Lava",color:16742969,fluid:!0},{name:"Balde vazio",color:12175819,group:"Baldes",price:10,tool:!0},{name:"Balde de \xE1gua",color:4831717,group:"Baldes",price:14,tool:!0},{name:"Balde de lava",color:16743733,group:"Baldes",price:25,tool:!0},{name:"Vaca",color:15920865,group:"Animais",price:65,animal:"cow"},{name:"Porco",color:15307169,group:"Animais",price:45,animal:"pig"},{name:"Boi",color:9595723,group:"Animais",price:75,animal:"ox"},{name:"Balde de leite",color:16446424,group:"Baldes",tool:!0,price:18},{name:"Trigo",color:15188581,group:"Animais",price:10,pack:5,tool:!0},{name:"P\xE3o",color:14131801,group:"Casa",price:12,tool:!0},{name:"Terra preparada",color:7426361,group:"Fazenda",cube:!0},{name:"Sementes de trigo",color:14205294,group:"Fazenda",price:8,pack:4,tool:!0},{name:"Sementes de cenoura",color:9877607,group:"Fazenda",price:10,pack:4,tool:!0},{name:"Cenoura",color:16098116,group:"Fazenda",price:8,tool:!0},{name:"Planta\xE7\xE3o de trigo",color:13224044,prop:!0,nonSolid:!0,hidden:!0},{name:"Planta\xE7\xE3o de cenoura",color:7715684,prop:!0,nonSolid:!0,hidden:!0},{name:"Min\xE9rio de carv\xE3o",color:5593442,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de ferro",color:13871758,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de ouro",color:15978080,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de cristal",color:7201762,cube:!0,group:"Minera\xE7\xE3o"},{name:"Carv\xE3o",color:4409941,tool:!0,group:"Minera\xE7\xE3o",price:8},{name:"Barra de ferro",color:13162975,tool:!0,group:"Minera\xE7\xE3o",price:24},{name:"Barra de ouro",color:16766563,tool:!0,group:"Minera\xE7\xE3o",price:40},{name:"Cristal",color:7860964,tool:!0,group:"Minera\xE7\xE3o",price:70},{name:"Picareta de madeira",color:12093527,tool:!0,group:"Minera\xE7\xE3o",price:15,tier:1,durability:50},{name:"Picareta de pedra",color:10267312,tool:!0,group:"Minera\xE7\xE3o",price:35,tier:2,durability:100},{name:"Picareta de ferro",color:14280683,tool:!0,group:"Minera\xE7\xE3o",price:70,tier:3,durability:220},{name:"Machado",color:11452104,tool:!0,group:"Minera\xE7\xE3o",price:30,durability:100},{name:"P\xE1",color:11781318,tool:!0,group:"Minera\xE7\xE3o",price:20,durability:100},{name:"Enxada",color:12764072,tool:!0,group:"Fazenda",price:20,durability:100},{name:"Capivara",color:11108440,animal:"capybara",group:"Animais",price:55},{name:"Barco",color:12884577,tool:!0,group:"Transportes",price:45},{name:"Trilhos",color:11123140,prop:!0,nonSolid:!0,group:"Transportes",price:12,pack:8},{name:"Carrinho",color:8689571,tool:!0,group:"Transportes",price:65},{name:"Fio de energia",color:14658904,prop:!0,nonSolid:!0,group:"Mecanismos",price:10,pack:8},{name:"Alavanca",color:14792047,prop:!0,nonSolid:!0,group:"Mecanismos",price:15},{name:"Pist\xE3o",color:9545626,prop:!0,group:"Mecanismos",price:35},{name:"Mesa de encantamentos",color:8355014,prop:!0,group:"Minera\xE7\xE3o",price:100},{name:"L\xE3",color:16117983,cube:!0,group:"Constru\xE7\xE3o",price:12,pack:3},{name:"Ovelha",color:16773846,animal:"sheep",group:"Animais",price:45},{name:"Haste do pist\xE3o",color:13086855,prop:!0,hidden:!0},{name:"Carne crua",color:14125945,tool:!0,group:"Alimentos",price:10},{name:"Carne assada",color:10972222,tool:!0,group:"Alimentos",price:20}],hn=me.map((i,e)=>e).filter(i=>i&&i!==11&&!me[i].fluid&&!me[i].hidden),Mi=[{id:"planks",name:"T\xE1buas",cost:{4:1},out:9,count:4},{id:"bricks",name:"Tijolos",cost:{3:4},out:7,count:4},{id:"glass",name:"Vidro",cost:{6:3},out:8,count:2},{id:"stairs",name:"Escadas",cost:{9:3},out:12,count:4},{id:"door",name:"Porta",cost:{9:4},out:13,count:1},{id:"fence",name:"Cercas",cost:{9:2},out:14,count:4},{id:"bed",name:"Cama",cost:{9:4,5:3},out:15,count:1},{id:"table",name:"Mesa",cost:{9:3},out:16,count:1},{id:"chair",name:"Cadeira",cost:{9:2},out:17,count:1},{id:"chest",name:"Ba\xFA",cost:{9:5},out:18,count:1},{id:"furnace",name:"Fornalha",cost:{3:8},out:19,count:1},{id:"lamp",name:"Lumin\xE1ria",cost:{4:1,8:2},out:20,count:1}],tn=[{id:"glass",name:"Fundir vidro",cost:{6:3,4:1},out:8,count:3,seconds:12},{id:"brick",name:"Assar tijolos",cost:{2:4,4:1},out:7,count:4,seconds:15},{id:"bread",name:"Assar p\xE3o",cost:{31:3,4:1},out:32,count:2,seconds:10}],Ks=i=>i===30?14:i===32?8:i<=10?1:Math.max(1,Math.floor((me[i]?.price||4)/(me[i]?.pack||1)*.35));function js(i,e={}){if(!i||me[i]?.nonSolid||me[i]?.fluid||me[i]?.tool||me[i]?.animal)return[];let t=i===12?[[0,0,0,1,.25,1],[0,.25,.25,1,.5,1],[0,.5,.5,1,.75,1],[0,.75,.75,1,1,1]]:i===13?e.open?[[0,0,0,.13,1.95,1]]:[[0,0,0,1,1.95,.13]]:i===14?[[0,0,.39,1,1.35,.61],[.39,0,0,.61,1.35,1]]:i===15?[[.05,0,.03,.95,.55,.97]]:i===16?[[.04,.66,.04,.96,.85,.96]]:i===17?[[.15,0,.15,.85,.52,.85],[.15,.52,.72,.85,1.15,.88]]:i===18?[[.07,0,.09,.93,.8,.91]]:i===20?[[.37,0,.37,.63,1.45,.63]]:i===21?[[0,0,0,1,.9,1]]:[[0,0,0,1,1,1]],n=e.rot||0;for(let s=0;s<n;s++)t=t.map(([r,a,o,l,c,u])=>[o,a,1-l,u,c,1-r]);return t}var On=i=>i===13||i===20||i===21?2:i===14||i===17?1.5:1,bi=i=>!!i&&(i<=11||!!me[i]?.cube),is=i=>i>=12&&i<=23||!!me[i]?.prop;Mi.push({id:"pickwood",name:"Picareta de madeira",cost:{9:5},out:47,count:1},{id:"pickstone",name:"Picareta de pedra",cost:{3:5,9:2},out:48,count:1},{id:"pickiron",name:"Picareta de ferro",cost:{44:3,9:2},out:49,count:1},{id:"axe",name:"Machado",cost:{3:3,9:2},out:50,count:1},{id:"shovel",name:"P\xE1",cost:{3:1,9:2},out:51,count:1},{id:"hoe",name:"Enxada",cost:{3:2,9:2},out:52,count:1},{id:"boat",name:"Barco",cost:{9:8},out:54,count:1},{id:"rail",name:"Trilhos",cost:{44:2,9:2},out:55,count:12},{id:"cart",name:"Carrinho",cost:{44:5},out:56,count:1},{id:"wire",name:"Fio de energia",cost:{45:1},out:57,count:12},{id:"lever",name:"Alavanca",cost:{3:1,9:1},out:58,count:1},{id:"piston",name:"Pist\xE3o",cost:{44:2,9:3},out:59,count:1},{id:"enchant",name:"Mesa de encantamentos",cost:{46:2,9:4,3:4},out:60,count:1});tn.push({id:"iron",name:"Fundir ferro",cost:{40:2,43:1},out:44,count:2,seconds:18},{id:"gold",name:"Fundir ouro",cost:{41:2,43:1},out:45,count:2,seconds:22});tn.push({id:"roast",name:"Assar carne",cost:{64:1,4:1},out:65,count:1,seconds:12});var ss={cow:"Vaca",pig:"Porco",ox:"Boi",sheep:"Ovelha",capybara:"Capivara"},Bn={palms:{name:"Vila das Palmeiras",description:"Horta, curral e moradores que ajudam a cuidar das criaturas.",color:"#f2ce74"},crystal:{name:"Vila dos Cristais",description:"Oficina, fornalha, biblioteca de encantamentos e trocas de minerais.",color:"#9edce9"}},Ll={rancher:[{name:"8 trigos por 1 ovelha",cost:{31:8},out:62,count:1},{name:"6 cenouras por 1 capivara",cost:{36:6},out:53,count:1},{name:"4 l\xE3s por 12 cercas",cost:{61:4},out:14,count:12}],builder:[{name:"8 pedras por 8 tijolos",cost:{3:8},out:7,count:8},{name:"6 barras de ferro por 1 picareta de ferro",cost:{44:6},out:49,count:1},{name:"3 cristais por 1 mesa de encantamentos",cost:{46:3},out:60,count:1}]},Qs={harvest:{name:"A primeira colheita",text:"Traga 8 trigos para abastecer a vila.",cost:{31:8},reward:{34:8,35:8},xp:15},shelter:{name:"Um lar para as criaturas",text:"Acolha uma criatura encontrada e traga 4 t\xE1buas para o curral.",cost:{9:4},tamed:!0,reward:{14:16,31:10},xp:20},workshop:{name:"Acenda a oficina",text:"Traga 6 carv\xF5es para o ferreiro.",cost:{43:6},reward:{44:3},xp:15},crystals:{name:"Segredos da montanha",text:"Traga 2 cristais para os estudos da alde\xE3.",cost:{46:2},reward:{49:1},xp:25}},Pl=(i,e,t)=>e>=i.x-2&&e<=i.x+25&&t>=i.z-2&&t<=i.z+25;function jh(i){return i&&Bn[i.id]&&[i.x,i.z,i.h].every(Number.isInteger)&&i.x>=100&&i.z>=4&&i.x+25<192&&i.z+25<192&&i.h>=6&&i.h<=12}function Dl(i,e){let t=[];if(e?.settlementsVersion===1)for(let n of Array.isArray(e.settlements)?e.settlements:[])jh(n)&&!t.some(s=>s.id===n.id||Pl(s,n.x,n.z))&&t.push({id:n.id,x:n.x,z:n.z,h:n.h});else{let n=[];for(let r of["edits","props","smallCells","fluidSources"])for(let a of Array.isArray(e?.[r])?e[r]:[])Array.isArray(a)&&Number.isInteger(a[0])&&a[0]>=0&&a[0]<36864*30&&n.push([a[0]%192,Math.floor(a[0]/192)%192]);for(let r of Array.isArray(e?.fineSources)?e.fineSources:[])Array.isArray(r)&&Number.isInteger(r[0])&&n.push([Math.floor(r[0]%384/2),Math.floor(Math.floor(r[0]/384)%384/2)]);for(let r of[...Array.isArray(e?.animals)?e.animals:[],...Array.isArray(e?.vehicles)?e.vehicles:[],e?.player,e?.respawn])r&&Number.isFinite(r.x)&&Number.isFinite(r.z)&&n.push([r.x,r.z]);let s=[[112,24],[144,120]];for(let r=104;r<=160;r+=28)for(let a=8;a<=148;a+=28)s.push([r,a]);for(let r of["palms","crystal"])for(let[a,o]of s){let l={id:r,x:a,z:o,h:8};if(!(t.some(c=>Math.abs(c.x-a)<28&&Math.abs(c.z-o)<28)||n.some(([c,u])=>Pl(l,c,u)))){t.push(l);break}}}i.settlements=t;for(let n of t){let{x:s,z:r,h:a}=n,o=(l,c,u,f)=>{i.cells[Oe(s+l,c,r+u)]=f};for(let l=0;l<24;l++)for(let c=0;c<24;c++)for(let u=1;u<30;u++)o(l,u,c,u>a?0:u===a?1:u<a-2?3:2);for(let l of[2,15]){for(let c=l;c<l+7;c++)for(let u=2;u<9;u++){o(c,a,u,9);for(let f=a+1;f<=a+3;f++)o(c,f,u,c===l||c===l+6||u===2||u===8?9:0);o(c,a+4,u,n.id==="palms"?5:7)}o(l+3,a+1,8,13),o(l+3,a+2,8,0),o(l+1,a+2,2,8),o(l+5,a+2,2,8),o(l+1,a+1,4,15),o(l+5,a+1,4,18)}for(let l=10;l<=13;l++)for(let c=0;c<24;c++)o(l,a,c,7);for(let l=2;l<=21;l++)for(let c=10;c<=12;c++)o(l,a,c,7);for(let[l,c]of[[9,9],[14,9],[9,20],[14,20]])o(l,a+1,c,20);if(o(11,a+1,5,21),o(3,a+1,6,16),o(5,a+1,6,17),n.id==="palms"){for(let l=2;l<=8;l++)for(let c=15;c<=20;c++)o(l,a,c,33),o(l,a+1,c,(l+c)%2?37:38);for(let l=15;l<=21;l++)for(let c=15;c<=21;c++)(l===15||l===21||c===15||c===21)&&o(l,a+1,c,14);o(18,a+1,21,13),o(6,a+1,6,19)}else{o(4,a+1,5,19),o(6,a+1,5,19),o(18,a+1,5,60);for(let l=3;l<=8;l++)for(let c=16;c<=19;c++)o(l,a,c,3),(l+c)%3===0&&o(l,a+1,c,39+(l+c)%4);o(17,a+1,17,16),o(19,a+1,17,17),o(20,a+1,17,18)}}}function Ul(i){let e=i.useAnimal,t=i.tickLife;return{initVillages(n){this.companions=[],this.creatureSerial=Math.max(0,Math.min(1e9,Math.floor(Number(n?.creatureSerial)||0))),this.completedQuests=new Set((Array.isArray(n?.completedQuests)?n.completedQuests:[]).filter(s=>Qs[s])),this.discoveredCreatures=new Set((Array.isArray(n?.discoveredCreatures)?n.discoveredCreatures:[]).filter(s=>ss[s]));for(let s of(Array.isArray(n?.companions)?n.companions:[]).slice(0,12))if(ss[s?.type]){let r={type:s.type,tamed:!0,stay:!0,follow:!1};for(let a of["creatureId","bornAt","feedAt","milkAt","breedAt","loveUntil","babyDue","shearAt"])r[a]=Number.isFinite(s[a])?s[a]:a==="bornAt"?-300:0;this.companions.push(r)}if(!n?.villageLife){for(let s of this.settlements)if(s.id==="palms")for(let[r,a]of["sheep","sheep","cow","cow"].entries()){if(this.animals.length+this.companions.length>=40)break;this.animals.push({type:a,x:s.x+17+r%2*2+.5,y:s.h+1,z:s.z+17+Math.floor(r/2)*2+.5,yaw:0,turn:0,feedAt:0,milkAt:0,bornAt:-300})}}this.ensureCreatureIds();for(let s of this.settlements)(s.id==="palms"?[["Mara \xB7 agricultora","farmer","harvest","As hortas s\xE3o de todos! Plante, colha e traga trigo para a vila."],["Nina \xB7 cuidadora","rancher","shelter","Alimente uma criatura para ganhar sua confian\xE7a. Depois voc\xEA pode acolh\xEA-la e solt\xE1-la no seu curral."]]:[["Caio \xB7 ferreiro","builder","workshop","Use as fornalhas da oficina. Carv\xE3o, ferro e cristais viram ferramentas para explorar."],["Iara \xB7 exploradora","miner","crystals","A mesa de encantamentos melhora suas picaretas. Explore as montanhas e encontre cristais!"]]).forEach(([a,o,l,c],u)=>this.villagers.push({x:s.x+9+u*5+.5,y:s.h+1,z:s.z+11.5,name:a,trade:o,quest:l,dialogue:c}))},ensureCreatureIds(){let n=new Set;for(let s of[...this.animals,...this.companions])!Number.isSafeInteger(s.creatureId)||s.creatureId<=0||n.has(s.creatureId)?s.creatureId=++this.creatureSerial:this.creatureSerial=Math.max(this.creatureSerial,s.creatureId),n.add(s.creatureId)},villageSave(){return{settlementsVersion:1,settlements:this.settlements.map(n=>({...n})),villageLife:1,companions:this.companions.map(n=>({...n})),creatureSerial:this.creatureSerial,completedQuests:[...this.completedQuests],discoveredCreatures:[...this.discoveredCreatures]}},creature(n){return this.animals.find(s=>s.creatureId===n)},creatureNear(n,s=7){return n&&Math.hypot(n.x-this.player.x,n.y-this.player.y,n.z-this.player.z)<=s},useAnimal(n){let s=this.animals[n],r=this.selected,a=this.inventory[r],o=e.call(this,n);return s&&[31,36].includes(r)&&this.inventory[r]<a?(s.tamed=!0,s.stay=!0,s.follow=!1,this.discoveredCreatures.add(s.type),o+" Ganhou confian\xE7a! Voc\xEA pode acolher esta criatura."):o},careCreature(n,s){let r=this.creature(n);if(!this.creatureNear(r))return"Aproxime-se da criatura.";if(s==="feed"){let a=this.inventory[31]>0?31:this.inventory[36]>0?36:0;if(!a)return"Pegue trigo ou cenoura na mochila para alimentar.";let o=this.selected;this.selected=a;let l=this.useAnimal(this.animals.indexOf(r));return this.selected=o,l}if(s==="capture")return r.tamed?this.companions.length>=12?"Seu abrigo de transporte est\xE1 cheio. Solte uma criatura antes.":this.creatureNear(r,4)?(this.animals.splice(this.animals.indexOf(r),1),this.companions.push({...r,stay:!0,follow:!1,loveUntil:0}),this.lifeDirty=!0,"Criatura acolhida! Abra Minhas criaturas para solt\xE1-la no curral."):"Chegue mais perto para acolher a criatura.":"Alimente primeiro para ganhar a confian\xE7a da criatura.";if(s==="follow"||s==="stay")return r.tamed?(r.follow=s==="follow",r.stay=!r.follow,r.follow?"Ela vai acompanhar voc\xEA. Evite obst\xE1culos e passagens estreitas.":"Ela vai esperar aqui. Alimente um casal para ter filhotes."):"Alimente primeiro para ganhar confian\xE7a.";if(s==="collect"){if(this.baby(r))return"Deixe o filhote crescer primeiro.";if(r.type==="cow"&&!this.inventory[24])return"Pegue um balde vazio na mochila.";if(r.type==="sheep"&&!this.inventory[50])return"Pegue um machado na mochila para tosquiar.";let a=this.selected;this.selected=r.type==="cow"?24:50;let o=this.useAnimal(this.animals.indexOf(r));return this.selected=a,o}return"Escolha como cuidar desta criatura."},releaseCreature(n){let s=this.companions.findIndex(r=>r.creatureId===n);if(s<0)return"Essa criatura j\xE1 saiu do abrigo.";if(this.animals.length>=40)return"N\xE3o h\xE1 espa\xE7o para mais criaturas neste mundo.";for(let r=2;r<=4;r++)for(let[a,o]of[[r,0],[-r,0],[0,r],[0,-r],[r,r],[-r,-r]]){let l=Math.floor(this.player.x)+a+.5,c=Math.floor(this.player.z)+o+.5;if(l<1||c<1||l>=191||c>=191)continue;let u=this.surface(Math.floor(l),Math.floor(c)),f=u+1;if(f<6||f>=28||Math.abs(f-this.player.y)>2||!js(this.get(Math.floor(l),u,Math.floor(c))).length||this.collides(l,f+.02,c)||this.animals.some(m=>Math.hypot(m.x-l,m.z-c)<1.5)||this.villagers.some(m=>Math.hypot(m.x-l,m.z-c)<1.5))continue;let[d]=this.companions.splice(s,1);return this.animals.push({...d,x:l,y:f,z:c,yaw:0,turn:0,stay:!0,follow:!1,loveUntil:0}),this.lifeDirty=!0,"Criatura solta perto de voc\xEA! Ela ficar\xE1 esperando aqui."}return"V\xE1 para um ch\xE3o seco e livre, com espa\xE7o ao seu redor."},completeQuest(n){let s=this.villagers[n],r=Qs[s?.quest];if(!r||this.creative||!this.creatureNear(s)||this.completedQuests.has(s.quest)||r.tamed&&!this.discoveredCreatures.size||Object.entries(r.cost).some(([a,o])=>(this.inventory[a]||0)<o)||Object.entries(r.reward).some(([a,o])=>(this.inventory[a]||0)+o>9999))return!1;for(let[a,o]of Object.entries(r.cost))this.inventory[a]-=o;for(let[a,o]of Object.entries(r.reward))this.inventory[a]=(this.inventory[a]||0)+o;return this.xp=Math.min(999999,this.xp+r.xp),this.completedQuests.add(s.quest),!0},tickLife(n,s=!0){t.call(this,n,s),this.ensureCreatureIds()}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ac=0,Fo=1,oc=2;var Oo=1,lc=2,pn=3,wn=0,Lt=1,Tt=2,In=0,ri=1,Bo=2,zo=3,ko=4,cc=5,qn=100,hc=101,uc=102,fc=103,dc=104,pc=200,mc=201,gc=202,xc=203,Tr=204,Ar=205,_c=206,yc=207,vc=208,Mc=209,bc=210,Sc=211,Ec=212,Tc=213,Ac=214,Kr=0,jr=1,Qr=2,ai=3,ea=4,ta=5,na=6,ia=7,Ns=0,wc=1,Cc=2,Pn=0,Rc=1,Ic=2,Pc=3,Lc=4,Dc=5,Uc=6,Nc=7;var Vo=300,fi=301,di=302,sa=303,ra=304,Fs=306,Fi=1e3,Xn=1001,wr=1002,Jt=1003,Fc=1004;var Os=1005;var Wt=1006,aa=1007;var mn=1008;var ln=1009,Ho=1010,Go=1011,Xi=1012,oa=1013,Kn=1014,gn=1015,qi=1016,la=1017,ca=1018,$i=1020,Wo=35902,Xo=35899,qo=1021,$o=1022,jt=1023,Oi=1026,Yi=1027,Yo=1028,ha=1029,Zo=1030,ua=1031;var fa=1033,Bs=33776,zs=33777,ks=33778,Vs=33779,da=35840,pa=35841,ma=35842,ga=35843,xa=36196,_a=37492,ya=37496,va=37808,Ma=37809,ba=37810,Sa=37811,Ea=37812,Ta=37813,Aa=37814,wa=37815,Ca=37816,Ra=37817,Ia=37818,Pa=37819,La=37820,Da=37821,Ua=36492,Na=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286;var us=2300,Cr=2301,Sr=2302,wo=2400,Co=2401,Ro=2402;var Oc=3200,Bc=3201;var Va=0,zc=1,Ln="",_t="srgb",oi="srgb-linear",fs="linear",je="srgb";var si=7680;var Io=519,kc=512,Vc=513,Hc=514,Jo=515,Gc=516,Wc=517,Xc=518,qc=519,Po=35044;var Ko="300 es",an=2e3,ds=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Er=Math.PI/180,Rr=180/Math.PI;function Hs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Qh(i,e){return(i%e+e)%e}function to(i,e,t){return(1-t)*i+t*e}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==d||c!==m||u!==g){let p=1-o,h=l*d+c*m+u*g+f*x,y=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let C=Math.sqrt(E),w=Math.atan2(C,h*y);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}let v=o*y;if(l=l*p+d*v,c=c*p+m*v,u=u*p+g*v,f=f*p+x*v,p===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-o*m,e[t+2]=c*g+u*m+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new z,Nl=new Rn,ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],x=s[0],p=s[3],h=s[6],y=s[1],E=s[4],v=s[7],C=s[2],w=s[5],P=s[8];return r[0]=a*x+o*y+l*C,r[3]=a*p+o*E+l*w,r[6]=a*h+o*v+l*P,r[1]=c*x+u*y+f*C,r[4]=c*p+u*E+f*w,r[7]=c*h+u*v+f*P,r[2]=d*x+m*y+g*C,r[5]=d*p+m*E+g*w,r[8]=d*h+m*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},io=new ze;function jo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $c(){let i=ps("canvas");return i.style.display="block",i}var Fl={};function Bi(i){i in Fl||(Fl[i]=!0,console.warn(i))}function Yc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ol=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eu(){let i={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oi]:{primaries:e,whitePoint:n,transfer:fs,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}var $e=eu();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,Ir=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=ps("canvas")),Si.width=e.width,Si.height=e.height;let s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tu=0,zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ir.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nu=0,ro=new z,Nt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=Wt,a=mn,o=jt,l=ln,c=i.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Hs(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Vo;Nt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(m+1)/2,C=(h+1)/2,w=(u+d)/4,P=(f+x)/4,A=(g+p)/4;return E>v&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=P/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pr=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Nt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Pr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ms=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lr=class extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),tr.subVectors(this.max,as),Ei.subVectors(e.a,as),Ti.subVectors(e.b,as),Ai.subVectors(e.c,as),zn.subVectors(Ti,Ei),kn.subVectors(Ai,Ti),ei.subVectors(Ei,Ai);let t=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!ao(t,Ei,Ti,Ai,tr)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Ei,Ti,Ai,tr))?!1:(nr.crossVectors(zn,kn),t=[nr.x,nr.y,nr.z],ao(t,Ei,Ti,Ai,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vn=[new z,new z,new z,new z,new z,new z,new z,new z],nn=new z,er=new $n,Ei=new z,Ti=new z,Ai=new z,zn=new z,kn=new z,ei=new z,as=new z,tr=new z,nr=new z,ti=new z;function ao(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);let o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var iu=new $n,os=new z,oo=new z,li=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):iu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);let t=os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(oo)),this.expandByPoint(os.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mn=new z,lo=new z,ir=new z,Vn=new z,co=new z,sr=new z,ho=new z,ki=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lo.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(lo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=Vn.dot(this.direction),l=-Vn.dot(ir),c=Vn.lengthSq(),u=Math.abs(1-a*a),f,d,m,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){let x=1/u;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lo).addScaledVector(ir,d),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){co.subVectors(t,e),sr.subVectors(n,e),ho.crossVectors(co,sr);let a=this.direction.dot(ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);let l=o*this.direction.dot(sr.crossVectors(Vn,sr));if(l<0)return null;let c=o*this.direction.dot(co.cross(Vn));if(c<0||l+c>a)return null;let u=-o*Vn.dot(ho);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,a,o,l,c,u,f,d,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,m,g,x,p)}set(e,t,n,s,r,a,o,l,c,u,f,d,m,g,x,p){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,m=l*f,g=c*u,x=c*f;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,m=l*f,g=c*u,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,m=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ru)}lookAt(e,t,n){let s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Hn.crossVectors(n,Vt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Hn.crossVectors(n,Vt)),Hn.normalize(),rr.crossVectors(Vt,Hn),s[0]=Hn.x,s[4]=rr.x,s[8]=Vt.x,s[1]=Hn.y,s[5]=rr.y,s[9]=Vt.y,s[2]=Hn.z,s[6]=rr.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],h=n[14],y=n[3],E=n[7],v=n[11],C=n[15],w=s[0],P=s[4],A=s[8],b=s[12],M=s[1],D=s[5],O=s[9],G=s[13],q=s[2],ee=s[6],j=s[10],ae=s[14],$=s[3],le=s[7],de=s[11],Te=s[15];return r[0]=a*w+o*M+l*q+c*$,r[4]=a*P+o*D+l*ee+c*le,r[8]=a*A+o*O+l*j+c*de,r[12]=a*b+o*G+l*ae+c*Te,r[1]=u*w+f*M+d*q+m*$,r[5]=u*P+f*D+d*ee+m*le,r[9]=u*A+f*O+d*j+m*de,r[13]=u*b+f*G+d*ae+m*Te,r[2]=g*w+x*M+p*q+h*$,r[6]=g*P+x*D+p*ee+h*le,r[10]=g*A+x*O+p*j+h*de,r[14]=g*b+x*G+p*ae+h*Te,r[3]=y*w+E*M+v*q+C*$,r[7]=y*P+E*D+v*ee+C*le,r[11]=y*A+E*O+v*j+C*de,r[15]=y*b+E*G+v*ae+C*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],h=e[15];return g*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*m-n*l*m)+x*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],h=e[15],y=f*p*c-x*d*c+x*l*m-o*p*m-f*l*h+o*d*h,E=g*d*c-u*p*c-g*l*m+a*p*m+u*l*h-a*d*h,v=u*x*c-g*f*c+g*o*m-a*x*m-u*o*h+a*f*h,C=g*f*l-u*x*l-g*o*d+a*x*d+u*o*p-a*f*p,w=t*y+n*E+s*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=y*P,e[1]=(x*d*r-f*p*r-x*s*m+n*p*m+f*s*h-n*d*h)*P,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*h+n*l*h)*P,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*m-n*l*m)*P,e[4]=E*P,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*h+t*d*h)*P,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*P,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*P,e[8]=v*P,e[9]=(g*f*r-u*x*r-g*n*m+t*x*m+u*n*h-t*f*h)*P,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*h+t*o*h)*P,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*m-t*o*m)*P,e[12]=C*P,e[13]=(u*x*s-g*f*s+g*n*d-t*x*d-u*n*p+t*f*p)*P,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*p-t*o*p)*P,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,g=r*f,x=a*u,p=a*f,h=o*f,y=l*c,E=l*u,v=l*f,C=n.x,w=n.y,P=n.z;return s[0]=(1-(x+h))*C,s[1]=(m+v)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(m-v)*w,s[5]=(1-(d+h))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+E)*P,s[9]=(p-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=wi.set(s[0],s[1],s[2]).length(),a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);let c=1/r,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===an)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ds)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===an)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ds)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wi=new z,sn=new ut,su=new z(0,0,0),ru=new z(1,1,1),Hn=new z,rr=new z,Vt=new z,zl=new ut,kl=new Rn,Kt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},au=0,Vl=new z,Ci=new Rn,bn=new ut,ar=new z,ls=new z,ou=new z,lu=new Rn,Hl=new z(1,0,0),Gl=new z(0,1,0),Wl=new z(0,0,1),Xl={type:"added"},cu={type:"removed"},Ri={type:"childadded",child:null},uo={type:"childremoved",child:null},St=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Kt,n=new Rn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,ar,this.up):bn.lookAt(ar,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(bn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cu),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new z(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new z,Sn=new z,fo=new z,En=new z,Ii=new z,Pi=new z,ql=new z,po=new z,mo=new z,go=new z,xo=new ft,_o=new ft,yo=new ft,Tn=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),Sn.subVectors(n,t),fo.subVectors(e,t);let a=rn.dot(rn),o=rn.dot(Sn),l=rn.dot(fo),c=Sn.dot(Sn),u=Sn.dot(fo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return xo.setScalar(0),_o.setScalar(0),yo.setScalar(0),xo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Pi.subVectors(r,n),po.subVectors(e,n);let l=Ii.dot(po),c=Pi.dot(po);if(l<=0&&c<=0)return t.copy(n);mo.subVectors(e,s);let u=Ii.dot(mo),f=Pi.dot(mo);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ii,a);go.subVectors(e,r);let m=Ii.dot(go),g=Pi.dot(go);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Pi,o);let p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ql.subVectors(r,s),o=(f-u)/(f-u+(m-g)),t.copy(s).addScaledVector(ql,o);let h=1/(p+x+d);return a=x*h,o=d*h,t.copy(n).addScaledVector(Ii,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},or={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Qh(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vo(a,r,e+1/3),this.g=vo(a,r,e),this.b=vo(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return $e.workingToColorSpace(wt.copy(this),e),Math.round(qe(wt.r*255,0,255))*65536+Math.round(qe(wt.g*255,0,255))*256+Math.round(qe(wt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(wt.copy(this),t);let n=wt.r,s=wt.g,r=wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=_t){$e.workingToColorSpace(wt.copy(this),e);let t=wt.r,n=wt.g,s=wt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(or);let n=to(Gn.h,or.h,t),s=to(Gn.s,or.s,t),r=to(Gn.l,or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new Ne;Ne.NAMES=Zc;var hu=0,dn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=ri,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=Ar,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gs=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new z,lr=new He,uu=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}};var xs=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fu=0,Zt=new ut,Mo=new St,Li=new z,Ht=new $n,cs=new $n,bt=new z,Et=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?_s:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Ht.min,cs.min),Ht.expandByPoint(bt),bt.addVectors(Ht.max,cs.max),Ht.expandByPoint(bt)):(Ht.expandByPoint(cs.min),Ht.expandByPoint(cs.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),bt.add(Li)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new z,l[A]=new z;let c=new z,u=new z,f=new z,d=new He,m=new He,g=new He,x=new z,p=new z;function h(A,b,M){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),m.sub(d),g.sub(d);let D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),o[A].add(x),o[b].add(x),o[M].add(x),l[A].add(p),l[b].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,b=y.length;A<b;++A){let M=y[A],D=M.start,O=M.count;for(let G=D,q=D+O;G<q;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let E=new z,v=new z,C=new z,w=new z;function P(A){C.fromBufferAttribute(s,A),w.copy(C);let b=o[A];E.copy(b),E.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);let D=v.dot(l[A])<0?-1:1;a.setXYZW(A,E.x,E.y,E.z,D)}for(let A=0,b=y.length;A<b;++A){let M=y[A],D=M.start,O=M.count;for(let G=D,q=D+O;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Gt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$l=new ut,ni=new ki,cr=new li,Yl=new z,hr=new z,ur=new z,fr=new z,bo=new z,dr=new z,Zl=new z,pr=new z,dt=class extends St{constructor(e=new Et,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(bo.fromBufferAttribute(f,e),a?dr.addScaledVector(bo,u):dr.addScaledVector(bo.sub(t),u))}t.add(dr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(cr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(cr,Yl)===null||ni.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&($l.copy(r).invert(),ni.copy(e.ray).applyMatrix4($l),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],h=a[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,C=E;v<C;v+=3){let w=o.getX(v),P=o.getX(v+1),A=o.getX(v+2);s=mr(this,h,e,n,c,u,f,w,P,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){let y=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=mr(this,a,e,n,c,u,f,y,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],h=a[p.materialIndex],y=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,C=E;v<C;v+=3){let w=v,P=v+1,A=v+2;s=mr(this,h,e,n,c,u,f,w,P,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){let y=p,E=p+1,v=p+2;s=mr(this,a,e,n,c,u,f,y,E,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function du(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,fr);let u=du(i,e,t,n,hr,ur,fr,Zl);if(u){let f=new z;Tn.getBarycoord(Zl,hr,ur,fr,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,l,c,f,new He)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,l,c,f,new He)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new z,materialIndex:0};Tn.getNormal(hr,ur,fr,d.normal),u.face=d,u.barycoord=f}return u}var Ft=class i extends Et{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function g(x,p,h,y,E,v,C,w,P,A,b){let M=v/P,D=C/A,O=v/2,G=C/2,q=w/2,ee=P+1,j=A+1,ae=0,$=0,le=new z;for(let de=0;de<j;de++){let Te=de*D-G;for(let ke=0;ke<ee;ke++){let Ze=ke*M-O;le[x]=Ze*y,le[p]=Te*E,le[h]=q,c.push(le.x,le.y,le.z),le[x]=0,le[p]=0,le[h]=w>0?1:-1,u.push(le.x,le.y,le.z),f.push(ke/P),f.push(1-de/A),ae+=1}}for(let de=0;de<A;de++)for(let Te=0;Te<P;Te++){let ke=d+Te+ee*de,Ze=d+Te+ee*(de+1),nt=d+(Te+1)+ee*(de+1),Xe=d+(Te+1)+ee*de;l.push(ke,Ze,Xe),l.push(Ze,nt,Xe),$+=6}o.addGroup(m,$,b),m+=$,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=pi(i[t]);for(let s in n)e[s]=n[s]}return e}function pu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qo(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Jc={clone:pi,merge:It},mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ys=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new z,Jl=new He,Kl=new He,Ct=class extends ys{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Kl),t.subVectors(Kl,Jl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ui=1,Dr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Di,Ui,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Di,Ui,e,t);r.layers=this.layers,this.add(r);let a=new Ct(Di,Ui,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Di,Ui,e,t);o.layers=this.layers,this.add(o);let l=new Ct(Di,Ui,e,t);l.layers=this.layers,this.add(l);let c=new Ct(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vs=class extends Nt{constructor(e=[],t=fi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ur=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ft(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:In});r.uniforms.tEquirect.value=t;let a=new dt(s,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=Wt),new Dr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Rt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},xu={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ms=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var So=new z,_u=new z,yu=new ze,un=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=So.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yu.getNormalMatrix(e),s=this.coplanarPoint(So).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new li,vu=new He(.5,.5),gr=new z,Gi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],m=r[7],g=r[8],x=r[9],p=r[10],h=r[11],y=r[12],E=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-a,m-u,h-g,C-y).normalize(),s[1].setComponents(c+a,m+u,h+g,C+y).normalize(),s[2].setComponents(c+o,m+f,h+x,C+E).normalize(),s[3].setComponents(c-o,m-f,h-x,C-E).normalize(),n)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,m-d,h-p,C-v).normalize();else if(s[4].setComponents(c-l,m-d,h-p,C-v).normalize(),t===an)s[5].setComponents(c+l,m+d,h+p,C+v).normalize();else if(t===ds)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=vu.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wi=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nr=new z,Fr=new z,jl=new ut,hs=new ki,xr=new li,Eo=new z,Ql=new z,Or=class extends St{constructor(e=new Et,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nr.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;jl.copy(s).invert(),hs.copy(e.ray).applyMatrix4(jl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){let h=u.getX(x),y=u.getX(x+1),E=_r(this,e,hs,l,h,y,x);E&&t.push(E)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(m),h=_r(this,e,hs,l,x,p,g-1);h&&t.push(h)}}else{let m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=m,p=g-1;x<p;x+=c){let h=_r(this,e,hs,l,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){let x=_r(this,e,hs,l,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _r(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Nr.fromBufferAttribute(o,s),Fr.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Fr,Eo,Ql)>n)return;Eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Eo);if(!(c<e.near||c>e.far))return{distance:c,point:Ql.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ec=new z,tc=new z,Ss=class extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ec.fromBufferAttribute(t,s),tc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ec.distanceTo(tc);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ci=class extends Nt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Es=class extends Nt{constructor(e,t,n=Kn,s,r,a,o=Jt,l=Jt,c,u=Oi,f=1){if(u!==Oi&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var As=class i extends Et{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],m=[],g=0,x=[],p=n/2,h=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(m,2));function y(){let v=new z,C=new z,w=0,P=(t-e)/n;for(let A=0;A<=r;A++){let b=[],M=A/r,D=M*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,q=G*l+o,ee=Math.sin(q),j=Math.cos(q);C.x=D*ee,C.y=-M*n+p,C.z=D*j,f.push(C.x,C.y,C.z),v.set(ee,P,j).normalize(),d.push(v.x,v.y,v.z),m.push(G,1-M),b.push(g++)}x.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let M=x[b][A],D=x[b+1][A],O=x[b+1][A+1],G=x[b][A+1];(e>0||b!==0)&&(u.push(M,D,G),w+=3),(t>0||b!==r-1)&&(u.push(D,O,G),w+=3)}c.addGroup(h,w,0),h+=w}function E(v){let C=g,w=new He,P=new z,A=0,b=v===!0?e:t,M=v===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let q=O/s*l+o,ee=Math.cos(q),j=Math.sin(q);P.x=b*j,P.y=p*M,P.z=b*ee,f.push(P.x,P.y,P.z),d.push(0,M,0),w.x=ee*.5+.5,w.y=j*.5*M+.5,m.push(w.x,w.y),g++}for(let O=0;O<s;O++){let G=C+O,q=D+O;v===!0?u.push(q,q+1,G):u.push(q+1,q,G),A+=3}c.addGroup(h,A,v===!0?1:2),h+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Br=class i extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let E=new z,v=new z,C=new z;for(let w=0;w<t.length;w+=3)m(t[w+0],E),m(t[w+1],v),m(t[w+2],C),l(E,v,C,y)}function l(y,E,v,C){let w=C+1,P=[];for(let A=0;A<=w;A++){P[A]=[];let b=y.clone().lerp(v,A/w),M=E.clone().lerp(v,A/w),D=w-A;for(let O=0;O<=D;O++)O===0&&A===w?P[A][O]=b:P[A][O]=b.clone().lerp(M,O/D)}for(let A=0;A<w;A++)for(let b=0;b<2*(w-A)-1;b++){let M=Math.floor(b/2);b%2===0?(d(P[A][M+1]),d(P[A+1][M]),d(P[A][M])):(d(P[A][M+1]),d(P[A+1][M+1]),d(P[A+1][M]))}}function c(y){let E=new z;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(y),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function u(){let y=new z;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let v=p(y)/2/Math.PI+.5,C=h(y)/Math.PI+.5;a.push(v,1-C)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){let E=a[y+0],v=a[y+2],C=a[y+4],w=Math.max(E,v,C),P=Math.min(E,v,C);w>.9&&P<.1&&(E<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,E){let v=y*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function g(){let y=new z,E=new z,v=new z,C=new z,w=new He,P=new He,A=new He;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),P.set(a[M+2],a[M+3]),A.set(a[M+4],a[M+5]),C.copy(y).add(E).add(v).divideScalar(3);let D=p(C);x(w,M+0,y,D),x(P,M+2,E,D),x(A,M+4,v,D)}}function x(y,E,v,C){C<0&&y.x===1&&(a[E]=y.x-1),v.x===0&&v.z===0&&(a[E]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var yr=new z,vr=new z,To=new z,Mr=new Tn,ws=class extends Et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Er*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:h}=Mr;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Mr.getNormal(To),f[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){let E=(y+1)%3,v=f[y],C=f[E],w=Mr[u[y]],P=Mr[u[E]],A=`${v}_${C}`,b=`${C}_${v}`;b in d&&d[b]?(To.dot(d[b].normal)<=r&&(m.push(w.x,w.y,w.z),m.push(P.x,P.y,P.z)),d[b]=null):A in d||(d[A]={index0:c[y],index1:c[E],normal:To.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];yr.fromBufferAttribute(o,x),vr.fromBufferAttribute(o,p),m.push(yr.x,yr.y,yr.z),m.push(vr.x,vr.y,vr.z)}this.setAttribute("position",new Ke(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Cs=class i extends Br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yn=class i extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){let y=h*d-a;for(let E=0;E<c;E++){let v=E*f-r;g.push(v,-y,0),x.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){let E=y+c*h,v=y+c*(h+1),C=y+1+c*(h+1),w=y+1+c*h;m.push(E,v,w),m.push(v,C,w)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var hi=class extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xt=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zr=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kr=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vr=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=e,o=2*t-n;break;case Ro:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Co:a=e,l=2*n-t;break;case Ro:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,h=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-m)*p+(1.5+m)*x+.5*g,v=m*p-m*x;for(let C=0;C!==o;++C)r[C]=h*a[u+C]+y*a[c+C]+E*a[l+C]+v*a[f+C];return r}},Hr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},Gr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Mu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Cr;var Zn=class extends qt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=us;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="color";var Xr=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};Xr.prototype.ValueTypeName="number";var qr=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rs=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qr(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends qt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=us;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="vector";var Yr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Kc=new Yr,Zr=class{constructor(e){this.manager=e!==void 0?e:Kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ps=class extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ao=new ut,nc=new z,ic=new z,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ls=class extends ys{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Do=class extends Lo{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Do}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Jr=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var el="\\[\\]\\.:\\/",bu=new RegExp("["+el+"]","g"),tl="[^"+el+"]",Su="[^"+el.replace("\\.","")+"]",Eu=/((?:WC+[\/:])*)/.source.replace("WC",tl),Tu=/(WCOD+)?/.source.replace("WCOD",Su),Au=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),Cu=new RegExp("^"+Eu+Tu+Au+wu+"$"),Ru=["material","materials","bones","map"],Uo=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bu,"")}static parseTrackName(e){let t=Cu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ru.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Uo;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vg=new Float32Array(1);var sc=new ut,Us=class{constructor(e,t,n=0,s=1/0){this.ray=new ki(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(rc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)No(e[s],this,n,t);return n.sort(rc),n}};function rc(i,e){return i.distance-e.distance}function No(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)No(r[a],e,t,!0)}}function nl(i,e,t,n){let s=Iu(n);switch(t){case qo:return i*e;case Yo:return i*e/s.components*s.byteLength;case ha:return i*e/s.components*s.byteLength;case Zo:return i*e*2/s.components*s.byteLength;case ua:return i*e*2/s.components*s.byteLength;case $o:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case fa:return i*e*4/s.components*s.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case da:case ma:return Math.max(i,8)*Math.max(e,8)/2;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iu(i){switch(i){case ln:case Ho:return{byteLength:1,components:1};case Xi:case Go:case qi:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Kn:case oa:case gn:return{byteLength:4,components:1};case Wo:case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lu(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Du,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Vu,batching_vertex:Hu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:$u,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Ku,color_fragment:ju,color_pars_fragment:Qu,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:ff,envmap_common_pars_fragment:df,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:xf,fog_pars_vertex:_f,fog_fragment:yf,fog_pars_fragment:vf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:wf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Rf,lights_phong_pars_fragment:If,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:kf,map_pars_fragment:Vf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:$f,morphnormal_vertex:Yf,morphtarget_pars_vertex:Zf,morphtarget_vertex:Jf,normal_fragment_begin:Kf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:ed,normal_vertex:td,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:rd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:hd,dithering_fragment:ud,dithering_pars_fragment:fd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:xd,shadowmask_pars_fragment:_d,skinbase_vertex:yd,skinning_pars_vertex:vd,skinning_vertex:Md,skinnormal_vertex:bd,specularmap_fragment:Sd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:wd,transmission_pars_fragment:Cd,uv_pars_fragment:Rd,uv_pars_vertex:Id,uv_vertex:Pd,worldpos_vertex:Ld,background_vert:Dd,background_frag:Ud,backgroundCube_vert:Nd,backgroundCube_frag:Fd,cube_vert:Od,cube_frag:Bd,depth_vert:zd,depth_frag:kd,distanceRGBA_vert:Vd,distanceRGBA_frag:Hd,equirect_vert:Gd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:$d,meshbasic_frag:Yd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Kd,meshmatcap_frag:jd,meshnormal_vert:Qd,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:fp},he={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xn={basic:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:It([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:It([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:It([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:It([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:It([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:It([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:It([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:It([he.lights,he.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:It([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ha={r:0,b:0,g:0},mi=new Kt,dp=new ut;function pp(i,e,t,n,s,r,a){let o=new Ne(0),l=r===!0?0:1,c,u,f=null,d=0,m=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function x(E){let v=!1,C=g(E);C===null?h(o,l):C&&C.isColor&&(h(C,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,v){let C=g(v);C&&(C.isCubeTexture||C.mapping===Fs)?(u===void 0&&(u=new dt(new Ft(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:pi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(mi)),u.material.toneMapped=$e.getTransfer(C.colorSpace)!==je,(f!==C||d!==C.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new dt(new Yn(2,2),new on({name:"BackgroundMaterial",uniforms:pi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$e.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,v){E.getRGB(Ha,Qo(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,v,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:x,addToRenderList:p,dispose:y}}function mp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,D,O,G,q){let ee=!1,j=f(G,O,D);r!==j&&(r=j,c(r.object)),ee=m(M,G,O,q),ee&&g(M,G,O,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,v(M,D,O,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,D,O){let G=O.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let ee=q[D.id];ee===void 0&&(ee={},q[D.id]=ee);let j=ee[G];return j===void 0&&(j=d(l()),ee[G]=j),j}function d(M){let D=[],O=[],G=[];for(let q=0;q<t;q++)D[q]=0,O[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,D,O,G){let q=r.attributes,ee=D.attributes,j=0,ae=O.getAttributes();for(let $ in ae)if(ae[$].location>=0){let de=q[$],Te=ee[$];if(Te===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function g(M,D,O,G){let q={},ee=D.attributes,j=0,ae=O.getAttributes();for(let $ in ae)if(ae[$].location>=0){let de=ee[$];de===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));let Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),q[$]=Te,j++}r.attributes=q,r.attributesNum=j,r.index=G}function x(){let M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function p(M){h(M,0)}function h(M,D){let O=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),q[M]!==D&&(i.vertexAttribDivisor(M,D),q[M]=D)}function y(){let M=r.newAttributes,D=r.enabledAttributes;for(let O=0,G=D.length;O<G;O++)D[O]!==M[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function E(M,D,O,G,q,ee,j){j===!0?i.vertexAttribIPointer(M,D,O,q,ee):i.vertexAttribPointer(M,D,O,G,q,ee)}function v(M,D,O,G){x();let q=G.attributes,ee=O.getAttributes(),j=D.defaultAttributeValues;for(let ae in ee){let $=ee[ae];if($.location>=0){let le=q[ae];if(le===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){let de=le.normalized,Te=le.itemSize,ke=e.get(le);if(ke===void 0)continue;let Ze=ke.buffer,nt=ke.type,Xe=ke.bytesPerElement,Q=nt===i.INT||nt===i.UNSIGNED_INT||le.gpuType===oa;if(le.isInterleavedBufferAttribute){let ne=le.data,xe=ne.stride,Le=le.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<$.locationSize;Ee++)h($.location+Ee,ne.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<$.locationSize;Ee++)p($.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ee=0;Ee<$.locationSize;Ee++)E($.location+Ee,Te/$.locationSize,nt,de,xe*Xe,(Le+Te/$.locationSize*Ee)*Xe,Q)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<$.locationSize;ne++)h($.location+ne,le.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<$.locationSize;ne++)p($.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ne=0;ne<$.locationSize;ne++)E($.location+ne,Te/$.locationSize,nt,de,Te*Xe,Te/$.locationSize*ne*Xe,Q)}}else if(j!==void 0){let de=j[ae];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv($.location,de);break;case 3:i.vertexAttrib3fv($.location,de);break;case 4:i.vertexAttrib4fv($.location,de);break;default:i.vertexAttrib1fv($.location,de)}}}}y()}function C(){A();for(let M in n){let D=n[M];for(let O in D){let G=D[O];for(let q in G)u(G[q].object),delete G[q];delete D[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let O in D){let G=D[O];for(let q in G)u(G[q].object),delete G[q];delete D[O]}delete n[M.id]}function P(M){for(let D in n){let O=n[D];if(O[M.id]===void 0)continue;let G=O[M.id];for(let q in G)u(G[q].object),delete G[q];delete O[M.id]}}function A(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function gp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,n,1)}function l(c,u,f,d){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==jt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let A=P===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gn&&!A)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function _p(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let y=r?0:n,E=y*4,v=h.clippingState||null;l.value=v,v=u(g,d,E,m);for(let C=0;C!==E;++C)v[C]=t[C];h.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let h=m+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,v=m;E!==x;++E,v+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function yp(i){let e=new WeakMap;function t(a,o){return o===sa?a.mapping=fi:o===ra&&(a.mapping=di),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===sa||o===ra)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ur(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ji=4,jc=[.125,.215,.35,.446,.526,.582],_i=20,il=new Ls,Qc=new Ne,sl=null,rl=0,al=0,ol=!1,xi=(1+Math.sqrt(5))/2,Zi=1/xi,eh=[new z(-xi,Zi,0),new z(xi,Zi,0),new z(-Zi,0,xi),new z(Zi,0,xi),new z(0,xi,-Zi),new z(0,xi,Zi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],vp=new z,Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vp}=r;sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=ol,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:qi,format:jt,colorSpace:oi,depthBuffer:!1},s=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=bp(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,s,r){let l=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Qc),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new gs({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),p=new dt(new Ft,x),h=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,h=!0):(x.color.copy(Qc),h=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let C=this._cubeSize;Ga(s,v*C,E>2?C:0,C,C),f.setRenderTarget(s),h&&f.render(p,l),f.render(e,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(s-r-1)%eh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new dt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);let h=[],y=0;for(let P=0;P<_i;++P){let A=P/x,b=Math.exp(-A*A/2);h.push(b),P===0?y+=b:P<p&&(y+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let v=this._sizeLods[s],C=3*v*(s>E-Ji?s-E+Ji:0),w=4*(this._cubeSize-v);Ga(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(f,il)}};function Mp(i){let e=[],t=[],n=[],s=i,r=i-Ji+1+jc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ji?l=jc[a-i+Ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,p=2,h=1,y=new Float32Array(x*g*m),E=new Float32Array(p*g*m),v=new Float32Array(h*g*m);for(let w=0;w<m;w++){let P=w%3*2/3-1,A=w>2?0:-1,b=[P,A,0,P+2/3,A,0,P+2/3,A+1,0,P,A,0,P+2/3,A+1,0,P,A+1,0];y.set(b,x*g*w),E.set(d,p*g*w);let M=[w,w,w,w,w,w];v.set(M,h*g*w)}let C=new Et;C.setAttribute("position",new Gt(y,x)),C.setAttribute("uv",new Gt(E,p)),C.setAttribute("faceIndex",new Gt(v,h)),e.push(C),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(i,e,t){let n=new fn(i,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bp(i,e,t){let n=new Float32Array(_i),s=new z(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function nh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ih(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===sa||l===ra,u=l===fi||l===di;if(c||u){let f=e.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Xa(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Xa(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ep(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(f){let d=[],m=f.index,g=f.attributes.position,x=0;if(m!==null){let y=m.array;x=m.version;for(let E=0,v=y.length;E<v;E+=3){let C=y[E+0],w=y[E+1],P=y[E+2];d.push(C,w,w,P,P,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){let C=E+0,w=E+1,P=E+2;d.push(C,w,w,P,P,C)}}else return;let p=new(jo(d)?_s:xs)(d,1);p.version=x;let h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ap(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function c(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function f(d,m,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,g);let h=0;for(let y=0;y<g;y++)h+=m[y]*x[y];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cp(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;m===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let v=o.attributes.position.count*E,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*C*4*f),P=new ms(w,v,C,f);P.type=gn,P.needsUpdate=!0;let A=E*4;for(let M=0;M<f;M++){let D=p[M],O=h[M],G=y[M],q=v*C*4*M;for(let ee=0;ee<D.count;ee++){let j=ee*A;m===!0&&(s.fromBufferAttribute(D,ee),w[q+j+0]=s.x,w[q+j+1]=s.y,w[q+j+2]=s.z,w[q+j+3]=0),g===!0&&(s.fromBufferAttribute(O,ee),w[q+j+4]=s.x,w[q+j+5]=s.y,w[q+j+6]=s.z,w[q+j+7]=0),x===!0&&(s.fromBufferAttribute(G,ee),w[q+j+8]=s.x,w[q+j+9]=s.y,w[q+j+10]=s.z,w[q+j+11]=G.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new He(v,C)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var bh=new Nt,sh=new Es(1,1),Sh=new ms,Eh=new Lr,Th=new vs,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function ji(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $a(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ip(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),vt(t,n)}}function Np(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),vt(t,n)}}function Fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(yt(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),vt(t,n)}}function Op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Vp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Xp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sh.compareFunction=Jo,r=sh):r=bh,t.setTexture2D(e||r,s)}function qp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Eh,s)}function $p(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Th,s)}function Yp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sh,s)}function Zp(i){switch(i){case 5126:return Ip;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Yp}}function Jp(i,e){i.uniform1fv(this.addr,e)}function Kp(i,e){let t=ji(e,this.size,2);i.uniform2fv(this.addr,t)}function jp(i,e){let t=ji(e,this.size,3);i.uniform3fv(this.addr,t)}function Qp(i,e){let t=ji(e,this.size,4);i.uniform4fv(this.addr,t)}function em(i,e){let t=ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tm(i,e){let t=ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nm(i,e){let t=ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function im(i,e){i.uniform1iv(this.addr,e)}function sm(i,e){i.uniform2iv(this.addr,e)}function rm(i,e){i.uniform3iv(this.addr,e)}function am(i,e){i.uniform4iv(this.addr,e)}function om(i,e){i.uniform1uiv(this.addr,e)}function lm(i,e){i.uniform2uiv(this.addr,e)}function cm(i,e){i.uniform3uiv(this.addr,e)}function hm(i,e){i.uniform4uiv(this.addr,e)}function um(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bh,r[a])}function fm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eh,r[a])}function dm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Th,r[a])}function pm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sh,r[a])}function mm(i){switch(i){case 5126:return Jp;case 35664:return Kp;case 35665:return jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}var cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zp(t.type)}},hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}},ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function gm(i,e,t){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),a=ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hh(t,c===void 0?new cl(o,i,e):new hl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ul(o),hh(t,f)),t=f}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);gm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xm=37297,_m=0;function ym(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var fh=new ze;function vm(i){$e._getMatrix(fh,$e.workingColorSpace,i);let e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case fs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ym(i.getShaderSource(e),o)}else return r}function Mm(i,e){let t=vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(i,e){let t;switch(e){case Rc:t="Linear";break;case Ic:t="Reinhard";break;case Pc:t="Cineon";break;case Lc:t="ACESFilmic";break;case Uc:t="AgX";break;case Nc:t="Neutral";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new z;function Sm(){$e.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Tm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Am(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(wm,Rm)}var Cm=new Map;function Rm(i,e){let t=Ve[e];if(t===void 0){let n=Cm.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(Im,Pm)}function Pm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case di:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Um(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Nm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ns:e="ENVMAP_BLENDING_MULTIPLY";break;case wc:e="ENVMAP_BLENDING_MIX";break;case Cc:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lm(t),c=Dm(t),u=Um(t),f=Nm(t),d=Fm(t),m=Em(t),g=Tm(r),x=s.createProgram(),p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),h.length>0&&(h+=`
`)):(p=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),h=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Pn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),Sm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=fl(a),a=ph(a,t),a=mh(a,t),o=fl(o),o=ph(o,t),o=mh(o,t),a=gh(a),o=gh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=y+p+a,v=y+h+o,C=uh(s,s.VERTEX_SHADER,E),w=uh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(w)||"",ee=O.trim(),j=G.trim(),ae=q.trim(),$=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,w);else{let de=dh(s,C,"vertex"),Te=dh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ee+`
`+de+`
`+Te)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(j===""||ae==="")&&(le=!1);le&&(D.diagnostics={runnable:$,programLog:ee,vertexShader:{log:j,prefix:p},fragmentShader:{log:ae,prefix:h}})}s.deleteShader(C),s.deleteShader(w),A=new Ki(s,x),b=Am(s,x)}let A;this.getUniforms=function(){return A===void 0&&P(this),A};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,xm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var Bm=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pl(e),t.set(e,n)),n}},pl=class{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}};function zm(i,e,t,n,s,r,a){let o=new Vi,l=new dl,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,D,O,G){let q=O.fog,ee=G.geometry,j=b.isMeshStandardMaterial?O.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),$=ae&&ae.mapping===Fs?ae.image.height:null,le=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let de=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=de!==void 0?de.length:0,ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let Ze,nt,Xe,Q;if(le){let Je=xn[le];Ze=Je.vertexShader,nt=Je.fragmentShader}else Ze=b.vertexShader,nt=b.fragmentShader,l.update(b),Xe=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);let ne=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Ee=G.isBatchedMesh===!0,Ge=!!b.map,Mt=!!b.matcap,I=!!ae,Ae=!!b.aoMap,De=!!b.lightMap,Ie=!!b.bumpMap,ye=!!b.normalMap,it=!!b.displacementMap,_e=!!b.emissiveMap,Be=!!b.metalnessMap,pt=!!b.roughnessMap,at=b.anisotropy>0,R=b.clearcoat>0,_=b.dispersion>0,V=b.iridescence>0,J=b.sheen>0,te=b.transmission>0,K=at&&!!b.anisotropyMap,be=R&&!!b.clearcoatMap,ie=R&&!!b.clearcoatNormalMap,pe=R&&!!b.clearcoatRoughnessMap,Se=V&&!!b.iridescenceMap,se=V&&!!b.iridescenceThicknessMap,ue=J&&!!b.sheenColorMap,Ce=J&&!!b.sheenRoughnessMap,ve=!!b.specularMap,L=!!b.specularColorMap,N=!!b.specularIntensityMap,T=te&&!!b.transmissionMap,U=te&&!!b.thicknessMap,k=!!b.gradientMap,H=!!b.alphaMap,Y=b.alphaTest>0,Z=!!b.alphaHash,ce=!!b.extensions,Fe=Pn;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let rt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:nt,defines:b.defines,customVertexShaderID:Xe,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:oi,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:Mt,envMap:I,envMapMode:I&&ae.mapping,envMapCubeUVHeight:$,aoMap:Ae,lightMap:De,bumpMap:Ie,normalMap:ye,displacementMap:d&&it,emissiveMap:_e,normalMapObjectSpace:ye&&b.normalMapType===zc,normalMapTangentSpace:ye&&b.normalMapType===Va,metalnessMap:Be,roughnessMap:pt,anisotropy:at,anisotropyMap:K,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:_,iridescence:V,iridescenceMap:Se,iridescenceThicknessMap:se,sheen:J,sheenColorMap:ue,sheenRoughnessMap:Ce,specularMap:ve,specularColorMap:L,specularIntensityMap:N,transmission:te,transmissionMap:T,thicknessMap:U,gradientMap:k,opaque:b.transparent===!1&&b.blending===ri&&b.alphaToCoverage===!1,alphaMap:H,alphaTest:Y,alphaHash:Z,combine:b.combine,mapUv:Ge&&x(b.map.channel),aoMapUv:Ae&&x(b.aoMap.channel),lightMapUv:De&&x(b.lightMap.channel),bumpMapUv:Ie&&x(b.bumpMap.channel),normalMapUv:ye&&x(b.normalMap.channel),displacementMapUv:it&&x(b.displacementMap.channel),emissiveMapUv:_e&&x(b.emissiveMap.channel),metalnessMapUv:Be&&x(b.metalnessMap.channel),roughnessMapUv:pt&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:be&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(b.sheenRoughnessMap.channel),specularMapUv:ve&&x(b.specularMap.channel),specularColorMapUv:L&&x(b.specularColorMap.channel),specularIntensityMapUv:N&&x(b.specularIntensityMap.channel),transmissionMapUv:T&&x(b.transmissionMap.channel),thicknessMapUv:U&&x(b.thicknessMap.channel),alphaMapUv:H&&x(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ye||at),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(Ge||H),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===je,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tt,flipSided:b.side===Lt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&b.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function h(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(M,b),E(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function E(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let M=g[b.type],D;if(M){let O=xn[M];D=Jc.clone(O.uniforms)}else D=b.uniforms;return D}function C(b,M){let D;for(let O=0,G=u.length;O<G;O++){let q=u[O];if(q.cacheKey===M){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Om(i,M,b,r),u.push(D)),D}function w(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:A}}function km(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,m,g,x,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function o(f,d,m,g,x,p){let h=a(f,d,m,g,x,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(f,d,m,g,x,p){let h=a(f,d,m,g,x,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Vm),n.length>1&&n.sort(d||_h),s.length>1&&s.sort(d||_h)}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Hm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yh,i.set(n,[a])):s>=r.length?(a=new yh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Wm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Xm=0;function qm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $m(i){let e=new Gm,t=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ut,a=new ut;function o(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,y=0,E=0,v=0,C=0,w=0,P=0;c.sort(qm);for(let b=0,M=c.length;b<M;b++){let D=c[b],O=D.color,G=D.intensity,q=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*G,f+=O.g*G,d+=O.b*G;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],G);P++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,$=t.get(D);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=D.shadow.matrix,y++}n.directional[m]=j,m++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(O).multiplyScalar(G),j.distance=q,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[x]=j;let ae=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,ae.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[x]=ae.matrix,D.castShadow){let $=t.get(D);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=ee,v++}x++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(O).multiplyScalar(G),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=j,p++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let ae=D.shadow,$=t.get(D);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(G),j.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[h]=j,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==h||A.numDirectionalShadows!==y||A.numPointShadows!==E||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,A.directionalLength=m,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=h,A.numDirectionalShadows=y,A.numPointShadows=E,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=P,n.version=Xm++)}function l(c,u){let f=0,d=0,m=0,g=0,x=0,p=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){let E=c[h];if(E.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(E.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function vh(i){let e=new $m(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ym(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vh(i),e.set(s,[o])):r>=a.length?(o=new vh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Km(i,e,t){let n=new Gi,s=new He,r=new He,a=new ft,o=new zr({depthPacking:Bc}),l=new kr,c={},u=t.maxTextureSize,f={[wn]:Lt,[Lt]:wn,[Tt]:Tt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Zm,fragmentShader:Jm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let h=this.type;this.render=function(w,P,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(In),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=h!==pn&&this.type===pn,q=h===pn&&this.type!==pn;for(let ee=0,j=w.length;ee<j;ee++){let ae=w[ee],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let le=$.getFrameExtents();if(s.multiply(le),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,$.mapSize.y=r.y)),$.map===null||G===!0||q===!0){let Te=this.type!==pn?{minFilter:Jt,magFilter:Jt}:{};$.map!==null&&$.map.dispose(),$.map=new fn(s.x,s.y,Te),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let de=$.getViewportCount();for(let Te=0;Te<de;Te++){let ke=$.getViewport(Te);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),O.viewport(a),$.updateMatrices(ae,Te),n=$.getFrustum(),v(P,A,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===pn&&y($,A),$.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,D)};function y(w,P){let A=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,A,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,A,m,x,null)}function E(w,P,A,b){let M=null,D=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=A.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=M.uuid,G=P.uuid,q=c[O];q===void 0&&(q={},c[O]=q);let ee=q[G];ee===void 0&&(ee=M.clone(),q[G]=ee,P.addEventListener("dispose",C)),M=ee}if(M.visible=P.visible,M.wireframe=P.wireframe,b===pn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=A}return M}function v(w,P,A,b,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let G=e.update(w),q=w.material;if(Array.isArray(q)){let ee=G.groups;for(let j=0,ae=ee.length;j<ae;j++){let $=ee[j],le=q[$.materialIndex];if(le&&le.visible){let de=E(w,le,b,M);w.onBeforeShadow(i,w,P,A,G,de,$),i.renderBufferDirect(A,null,G,de,w,$),w.onAfterShadow(i,w,P,A,G,de,$)}}}else if(q.visible){let ee=E(w,q,b,M);w.onBeforeShadow(i,w,P,A,G,ee,null),i.renderBufferDirect(A,null,G,ee,w,null),w.onAfterShadow(i,w,P,A,G,ee,null)}}let O=w.children;for(let G=0,q=O.length;G<q;G++)v(O[G],P,A,b,M)}function C(w){w.target.removeEventListener("dispose",C);for(let A in c){let b=c[A],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var jm={[Kr]:jr,[Qr]:na,[ea]:ia,[ai]:ta,[jr]:Kr,[na]:Qr,[ia]:ea,[ta]:ai};function Qm(i,e){function t(){let T=!1,U=new ft,k=null,H=new ft(0,0,0,0);return{setMask:function(Y){k!==Y&&!T&&(i.colorMask(Y,Y,Y,Y),k=Y)},setLocked:function(Y){T=Y},setClear:function(Y,Z,ce,Fe,rt){rt===!0&&(Y*=Fe,Z*=Fe,ce*=Fe),U.set(Y,Z,ce,Fe),H.equals(U)===!1&&(i.clearColor(Y,Z,ce,Fe),H.copy(U))},reset:function(){T=!1,k=null,H.set(-1,0,0,0)}}}function n(){let T=!1,U=!1,k=null,H=null,Y=null;return{setReversed:function(Z){if(U!==Z){let ce=e.get("EXT_clip_control");Z?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),U=Z;let Fe=Y;Y=null,this.setClear(Fe)}},getReversed:function(){return U},setTest:function(Z){Z?ne(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){k!==Z&&!T&&(i.depthMask(Z),k=Z)},setFunc:function(Z){if(U&&(Z=jm[Z]),H!==Z){switch(Z){case Kr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=Z}},setLocked:function(Z){T=Z},setClear:function(Z){Y!==Z&&(U&&(Z=1-Z),i.clearDepth(Z),Y=Z)},reset:function(){T=!1,k=null,H=null,Y=null,U=!1}}}function s(){let T=!1,U=null,k=null,H=null,Y=null,Z=null,ce=null,Fe=null,rt=null;return{setTest:function(Je){T||(Je?ne(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Je){U!==Je&&!T&&(i.stencilMask(Je),U=Je)},setFunc:function(Je,yn,cn){(k!==Je||H!==yn||Y!==cn)&&(i.stencilFunc(Je,yn,cn),k=Je,H=yn,Y=cn)},setOp:function(Je,yn,cn){(Z!==Je||ce!==yn||Fe!==cn)&&(i.stencilOp(Je,yn,cn),Z=Je,ce=yn,Fe=cn)},setLocked:function(Je){T=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){T=!1,U=null,k=null,H=null,Y=null,Z=null,ce=null,Fe=null,rt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,y=null,E=null,v=null,C=null,w=null,P=new Ne(0,0,0),A=0,b=!1,M=null,D=null,O=null,G=null,q=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ae=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),j=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=ae>=2);let le=null,de={},Te=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ze=new ft().fromArray(Te),nt=new ft().fromArray(ke);function Xe(T,U,k,H){let Y=new Uint8Array(4),Z=i.createTexture();i.bindTexture(T,Z),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<k;ce++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(U,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(U+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return Z}let Q={};Q[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(ai),Ie(!1),ye(Fo),ne(i.CULL_FACE),Ae(In);function ne(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function xe(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function Le(T,U){return f[T]!==U?(i.bindFramebuffer(T,U),f[T]=U,T===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=U),T===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=U),!0):!1}function Ee(T,U){let k=m,H=!1;if(T){k=d.get(U),k===void 0&&(k=[],d.set(U,k));let Y=T.textures;if(k.length!==Y.length||k[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ce=Y.length;Z<ce;Z++)k[Z]=i.COLOR_ATTACHMENT0+Z;k.length=Y.length,H=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,H=!0);H&&i.drawBuffers(k)}function Ge(T){return g!==T?(i.useProgram(T),g=T,!0):!1}let Mt={[qn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};Mt[fc]=i.MIN,Mt[dc]=i.MAX;let I={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[Tr]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[Ar]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(T,U,k,H,Y,Z,ce,Fe,rt,Je){if(T===In){x===!0&&(xe(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),T!==cc){if(T!==p||Je!==b){if((h!==qn||v!==qn)&&(i.blendEquation(i.FUNC_ADD),h=qn,v=qn),Je)switch(T){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ko:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ko:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,E=null,C=null,w=null,P.set(0,0,0),A=0,p=T,b=Je}return}Y=Y||U,Z=Z||k,ce=ce||H,(U!==h||Y!==v)&&(i.blendEquationSeparate(Mt[U],Mt[Y]),h=U,v=Y),(k!==y||H!==E||Z!==C||ce!==w)&&(i.blendFuncSeparate(I[k],I[H],I[Z],I[ce]),y=k,E=H,C=Z,w=ce),(Fe.equals(P)===!1||rt!==A)&&(i.blendColor(Fe.r,Fe.g,Fe.b,rt),P.copy(Fe),A=rt),p=T,b=!1}function De(T,U){T.side===Tt?xe(i.CULL_FACE):ne(i.CULL_FACE);let k=T.side===Lt;U&&(k=!k),Ie(k),T.blending===ri&&T.transparent===!1?Ae(In):Ae(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let H=T.stencilWrite;o.setTest(H),H&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),_e(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(T){M!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),M=T)}function ye(T){T!==ac?(ne(i.CULL_FACE),T!==D&&(T===Fo?i.cullFace(i.BACK):T===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=T}function it(T){T!==O&&(j&&i.lineWidth(T),O=T)}function _e(T,U,k){T?(ne(i.POLYGON_OFFSET_FILL),(G!==U||q!==k)&&(i.polygonOffset(U,k),G=U,q=k)):xe(i.POLYGON_OFFSET_FILL)}function Be(T){T?ne(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(T){T===void 0&&(T=i.TEXTURE0+ee-1),le!==T&&(i.activeTexture(T),le=T)}function at(T,U,k){k===void 0&&(le===null?k=i.TEXTURE0+ee-1:k=le);let H=de[k];H===void 0&&(H={type:void 0,texture:void 0},de[k]=H),(H.type!==T||H.texture!==U)&&(le!==k&&(i.activeTexture(k),le=k),i.bindTexture(T,U||Q[T]),H.type=T,H.texture=U)}function R(){let T=de[le];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.texSubImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{i.texSubImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ie(){try{i.texStorage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{i.texStorage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Se(){try{i.texImage2D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{i.texImage3D(...arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(T){Ze.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Ze.copy(T))}function Ce(T){nt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),nt.copy(T))}function ve(T,U){let k=c.get(U);k===void 0&&(k=new WeakMap,c.set(U,k));let H=k.get(T);H===void 0&&(H=i.getUniformBlockIndex(U,T.name),k.set(T,H))}function L(T,U){let H=c.get(U).get(T);l.get(U)!==H&&(i.uniformBlockBinding(U,H,T.__bindingPointIndex),l.set(U,H))}function N(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,de={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,h=null,y=null,E=null,v=null,C=null,w=null,P=new Ne(0,0,0),A=0,b=!1,M=null,D=null,O=null,G=null,q=null,Ze.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:xe,bindFramebuffer:Le,drawBuffers:Ee,useProgram:Ge,setBlending:Ae,setMaterial:De,setFlipSided:Ie,setCullFace:ye,setLineWidth:it,setPolygonOffset:_e,setScissorTest:Be,activeTexture:pt,bindTexture:at,unbindTexture:R,compressedTexImage2D:_,compressedTexImage3D:V,texImage2D:Se,texImage3D:se,updateUBOMapping:ve,uniformBlockBinding:L,texStorage2D:ie,texStorage3D:pe,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:be,scissor:ue,viewport:Ce,reset:N}}function eg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return m?new OffscreenCanvas(R,_):ps("canvas")}function x(R,_,V){let J=1,te=at(R);if((te.width>V||te.height>V)&&(J=V/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let K=Math.floor(J*te.width),be=Math.floor(J*te.height);f===void 0&&(f=g(K,be));let ie=_?g(K,be):f;return ie.width=K,ie.height=be,ie.getContext("2d").drawImage(R,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+be+")."),ie}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function p(R){return R.generateMipmaps}function h(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,_,V,J,te=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=_;if(_===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),_===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let be=te?fs:$e.getTransfer(J);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=be===je?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(R,_){let V;return R?_===null||_===Kn||_===$i?V=i.DEPTH24_STENCIL8:_===gn?V=i.DEPTH32F_STENCIL8:_===Xi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===$i?V=i.DEPTH_COMPONENT24:_===gn?V=i.DEPTH_COMPONENT32F:_===Xi&&(V=i.DEPTH_COMPONENT16),V}function C(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function w(R){let _=R.target;_.removeEventListener("dispose",w),A(_),_.isVideoTexture&&u.delete(_)}function P(R){let _=R.target;_.removeEventListener("dispose",P),M(_)}function A(R){let _=n.get(R);if(_.__webglInit===void 0)return;let V=R.source,J=d.get(V);if(J){let te=J[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(J).length===0&&d.delete(V)}n.remove(R)}function b(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let V=R.source,J=d.get(V);delete J[_.__cacheKey],a.memory.textures--}function M(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let te=0;te<_.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(_.__webglFramebuffer[J][te]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=R.textures;for(let J=0,te=V.length;J<te;J++){let K=n.get(V[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(R)}let D=0;function O(){D=0}function G(){let R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function q(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function ee(R,_){let V=n.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,R,_);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function j(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function ae(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Q(V,R,_);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function $(R,_){let V=n.get(R);if(R.version>0&&V.__version!==R.version){ne(V,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}let le={[Fi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},de={[Jt]:i.NEAREST,[Fc]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},Te={[kc]:i.NEVER,[qc]:i.ALWAYS,[Vc]:i.LESS,[Jo]:i.LEQUAL,[Hc]:i.EQUAL,[Xc]:i.GEQUAL,[Gc]:i.GREATER,[Wc]:i.NOTEQUAL};function ke(R,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Wt||_.magFilter===aa||_.magFilter===Os||_.magFilter===mn||_.minFilter===Wt||_.minFilter===aa||_.minFilter===Os||_.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==Os&&_.minFilter!==mn||_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(R,_){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",w));let J=_.source,te=d.get(J);te===void 0&&(te={},d.set(J,te));let K=q(_);if(K!==R.__cacheKey){te[K]===void 0&&(te[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[K].usedTimes++;let be=te[R.__cacheKey];be!==void 0&&(te[R.__cacheKey].usedTimes--,be.usedTimes===0&&b(_)),R.__cacheKey=K,R.__webglTexture=te[K].texture}return V}function nt(R,_,V){return Math.floor(Math.floor(R/V)/_)}function Xe(R,_,V,J){let K=R.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,J,_.data);else{K.sort((se,ue)=>se.start-ue.start);let be=0;for(let se=1;se<K.length;se++){let ue=K[be],Ce=K[se],ve=ue.start+ue.count,L=nt(Ce.start,_.width,4),N=nt(ue.start,_.width,4);Ce.start<=ve+1&&L===N&&nt(Ce.start+Ce.count-1,_.width,4)===L?ue.count=Math.max(ue.count,Ce.start+Ce.count-ue.start):(++be,K[be]=Ce)}K.length=be+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let se=0,ue=K.length;se<ue;se++){let Ce=K[se],ve=Math.floor(Ce.start/4),L=Math.ceil(Ce.count/4),N=ve%_.width,T=Math.floor(ve/_.width),U=L,k=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,N),i.pixelStorei(i.UNPACK_SKIP_ROWS,T),t.texSubImage2D(i.TEXTURE_2D,0,N,T,U,k,V,J,_.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Q(R,_,V){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let te=Ze(R,_),K=_.source;t.bindTexture(J,R.__webglTexture,i.TEXTURE0+V);let be=n.get(K);if(K.version!==be.__version||te===!0){t.activeTexture(i.TEXTURE0+V);let ie=$e.getPrimaries($e.workingColorSpace),pe=_.colorSpace===Ln?null:$e.getPrimaries(_.colorSpace),Se=_.colorSpace===Ln||ie===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let se=x(_.image,!1,s.maxTextureSize);se=pt(_,se);let ue=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),ve=E(_.internalFormat,ue,Ce,_.colorSpace,_.isVideoTexture);ke(J,_);let L,N=_.mipmaps,T=_.isVideoTexture!==!0,U=be.__version===void 0||te===!0,k=K.dataReady,H=C(_,se);if(_.isDepthTexture)ve=v(_.format===Yi,_.type),U&&(T?t.texStorage2D(i.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,ue,Ce,null));else if(_.isDataTexture)if(N.length>0){T&&U&&t.texStorage2D(i.TEXTURE_2D,H,ve,N[0].width,N[0].height);for(let Y=0,Z=N.length;Y<Z;Y++)L=N[Y],T?k&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,L.width,L.height,ue,Ce,L.data):t.texImage2D(i.TEXTURE_2D,Y,ve,L.width,L.height,0,ue,Ce,L.data);_.generateMipmaps=!1}else T?(U&&t.texStorage2D(i.TEXTURE_2D,H,ve,se.width,se.height),k&&Xe(_,se,ue,Ce)):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,ue,Ce,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){T&&U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,ve,N[0].width,N[0].height,se.depth);for(let Y=0,Z=N.length;Y<Z;Y++)if(L=N[Y],_.format!==jt)if(ue!==null)if(T){if(k)if(_.layerUpdates.size>0){let ce=nl(L.width,L.height,_.format,_.type);for(let Fe of _.layerUpdates){let rt=L.data.subarray(Fe*ce/L.data.BYTES_PER_ELEMENT,(Fe+1)*ce/L.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Fe,L.width,L.height,1,ue,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,L.width,L.height,se.depth,ue,L.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ve,L.width,L.height,se.depth,0,L.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,L.width,L.height,se.depth,ue,Ce,L.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ve,L.width,L.height,se.depth,0,ue,Ce,L.data)}else{T&&U&&t.texStorage2D(i.TEXTURE_2D,H,ve,N[0].width,N[0].height);for(let Y=0,Z=N.length;Y<Z;Y++)L=N[Y],_.format!==jt?ue!==null?T?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,L.width,L.height,ue,L.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ve,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?k&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,L.width,L.height,ue,Ce,L.data):t.texImage2D(i.TEXTURE_2D,Y,ve,L.width,L.height,0,ue,Ce,L.data)}else if(_.isDataArrayTexture)if(T){if(U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,ve,se.width,se.height,se.depth),k)if(_.layerUpdates.size>0){let Y=nl(se.width,se.height,_.format,_.type);for(let Z of _.layerUpdates){let ce=se.data.subarray(Z*Y/se.data.BYTES_PER_ELEMENT,(Z+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,ue,Ce,ce)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Ce,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,ue,Ce,se.data);else if(_.isData3DTexture)T?(U&&t.texStorage3D(i.TEXTURE_3D,H,ve,se.width,se.height,se.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Ce,se.data)):t.texImage3D(i.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,ue,Ce,se.data);else if(_.isFramebufferTexture){if(U)if(T)t.texStorage2D(i.TEXTURE_2D,H,ve,se.width,se.height);else{let Y=se.width,Z=se.height;for(let ce=0;ce<H;ce++)t.texImage2D(i.TEXTURE_2D,ce,ve,Y,Z,0,ue,Ce,null),Y>>=1,Z>>=1}}else if(N.length>0){if(T&&U){let Y=at(N[0]);t.texStorage2D(i.TEXTURE_2D,H,ve,Y.width,Y.height)}for(let Y=0,Z=N.length;Y<Z;Y++)L=N[Y],T?k&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ue,Ce,L):t.texImage2D(i.TEXTURE_2D,Y,ve,ue,Ce,L);_.generateMipmaps=!1}else if(T){if(U){let Y=at(se);t.texStorage2D(i.TEXTURE_2D,H,ve,Y.width,Y.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ce,se)}else t.texImage2D(i.TEXTURE_2D,0,ve,ue,Ce,se);p(_)&&h(J),be.__version=K.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ne(R,_,V){if(_.image.length!==6)return;let J=Ze(R,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let K=n.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(i.TEXTURE0+V);let be=$e.getPrimaries($e.workingColorSpace),ie=_.colorSpace===Ln?null:$e.getPrimaries(_.colorSpace),pe=_.colorSpace===Ln||be===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Se&&!se?ue[Z]=x(_.image[Z],!0,s.maxCubemapSize):ue[Z]=se?_.image[Z].image:_.image[Z],ue[Z]=pt(_,ue[Z]);let Ce=ue[0],ve=r.convert(_.format,_.colorSpace),L=r.convert(_.type),N=E(_.internalFormat,ve,L,_.colorSpace),T=_.isVideoTexture!==!0,U=K.__version===void 0||J===!0,k=te.dataReady,H=C(_,Ce);ke(i.TEXTURE_CUBE_MAP,_);let Y;if(Se){T&&U&&t.texStorage2D(i.TEXTURE_CUBE_MAP,H,N,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){Y=ue[Z].mipmaps;for(let ce=0;ce<Y.length;ce++){let Fe=Y[ce];_.format!==jt?ve!==null?T?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,Fe.width,Fe.height,ve,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,N,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,Fe.width,Fe.height,ve,L,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,N,Fe.width,Fe.height,0,ve,L,Fe.data)}}}else{if(Y=_.mipmaps,T&&U){Y.length>0&&H++;let Z=at(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,H,N,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){T?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,ve,L,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,N,ue[Z].width,ue[Z].height,0,ve,L,ue[Z].data);for(let ce=0;ce<Y.length;ce++){let rt=Y[ce].image[Z].image;T?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,rt.width,rt.height,ve,L,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,N,rt.width,rt.height,0,ve,L,rt.data)}}else{T?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve,L,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,N,ve,L,ue[Z]);for(let ce=0;ce<Y.length;ce++){let Fe=Y[ce];T?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,ve,L,Fe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,N,ve,L,Fe.image[Z])}}}p(_)&&h(i.TEXTURE_CUBE_MAP),K.__version=te.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function xe(R,_,V,J,te,K){let be=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),pe=E(V.internalFormat,be,ie,V.colorSpace),Se=n.get(_),se=n.get(V);if(se.__renderTarget=_,!Se.__hasExternalTextures){let ue=Math.max(1,_.width>>K),Ce=Math.max(1,_.height>>K);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,K,pe,ue,Ce,_.depth,0,be,ie,null):t.texImage2D(te,K,pe,ue,Ce,0,be,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,se.__webglTexture,0,it(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,se.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(R,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let J=_.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=v(_.stencilBuffer,te),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=it(_);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,K,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,R)}else{let J=_.textures;for(let te=0;te<J.length;te++){let K=J[te],be=r.convert(K.format,K.colorSpace),ie=r.convert(K.type),pe=E(K.internalFormat,be,ie,K.colorSpace),Se=it(_);V&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,pe,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee(_.depthTexture,0);let te=J.__webglTexture,K=it(_);if(_.depthTexture.format===Oi)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(_.depthTexture.format===Yi)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let _=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=J}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?Ee(_.__webglFramebuffer[0],R):Ee(_.__webglFramebuffer,R)}else if(V){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[J],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,_,V){let J=n.get(R);_!==void 0&&xe(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ge(R)}function I(R){let _=R.texture,V=n.get(R),J=n.get(_);R.addEventListener("dispose",P);let te=R.textures,K=R.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let pe=0;pe<_.mipmaps.length;pe++)V.__webglFramebuffer[ie][pe]=i.createFramebuffer()}else V.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)V.__webglFramebuffer[ie]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(be)for(let ie=0,pe=te.length;ie<pe;ie++){let Se=n.get(te[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let pe=te[ie];V.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);let Se=r.convert(pe.format,pe.colorSpace),se=r.convert(pe.type),ue=E(pe.internalFormat,Se,se,pe.colorSpace,R.isXRRenderTarget===!0),Ce=it(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(V.__webglFramebuffer[ie][pe],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else xe(V.__webglFramebuffer[ie],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ie=0,pe=te.length;ie<pe;ie++){let Se=te[ie],se=n.get(Se),ue=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,se.__webglTexture),ke(ue,Se),xe(V.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+ie,ue,0),p(Se)&&h(ue)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ke(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(V.__webglFramebuffer[pe],R,_,i.COLOR_ATTACHMENT0,ie,pe);else xe(V.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,ie,0);p(_)&&h(ie),t.unbindTexture()}R.depthBuffer&&Ge(R)}function Ae(R){let _=R.textures;for(let V=0,J=_.length;V<J;V++){let te=_[V];if(p(te)){let K=y(R),be=n.get(te).__webglTexture;t.bindTexture(K,be),h(K),t.unbindTexture()}}}let De=[],Ie=[];function ye(R){if(R.samples>0){if(_e(R)===!1){let _=R.textures,V=R.width,J=R.height,te=i.COLOR_BUFFER_BIT,K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(R),ie=_.length>1;if(ie)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let pe=R.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let se=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,te,i.NEAREST),l===!0&&(De.length=0,Ie.length=0,De.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(De.push(K),Ie.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let se=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function it(R){return Math.min(s.maxSamples,R.samples)}function _e(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function pt(R,_){let V=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==oi&&V!==Ln&&($e.getTransfer(V)===je?(J!==jt||te!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),_}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=_e}function tg(i,e){function t(n,s=Ln){let r,a=$e.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ho)return i.BYTE;if(n===Go)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===qo)return i.ALPHA;if(n===$o)return i.RGB;if(n===jt)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===Zo)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===ks||n===Vs)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===Ma||n===ba||n===Sa||n===Ea||n===Ta||n===Aa||n===wa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Na||n===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gl=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null,x=typeof XRWebGLBinding<"u",p=new ml,h={},y=t.getContextAttributes(),E=null,v=null,C=[],w=[],P=new He,A=null,b=new Ct;b.viewport=new ft;let M=new Ct;M.viewport=new ft;let D=[b,M],O=new Jr,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hi,C[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hi,C[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=C[Q];return ne===void 0&&(ne=new Hi,C[Q]=ne),ne.getHandSpace()};function ee(Q){let ne=w.indexOf(Q.inputSource);if(ne===-1)return;let xe=C[ne];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ae);for(let Q=0;Q<C.length;Q++){let ne=w[Q];ne!==null&&(w[Q]=null,C[Q].disconnect(ne))}G=null,q=null,p.reset();for(let Q in h)delete h[Q];e.setRenderTarget(E),m=null,d=null,f=null,s=null,v=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Yi:Oi,Le=y.stencil?$i:Kn);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new fn(d.textureWidth,d.textureHeight,{format:jt,type:ln,depthTexture:new Es(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new fn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ae(Q){for(let ne=0;ne<Q.removed.length;ne++){let xe=Q.removed[ne],Le=w.indexOf(xe);Le>=0&&(w[Le]=null,C[Le].disconnect(xe))}for(let ne=0;ne<Q.added.length;ne++){let xe=Q.added[ne],Le=w.indexOf(xe);if(Le===-1){for(let Ge=0;Ge<C.length;Ge++)if(Ge>=w.length){w.push(xe),Le=Ge;break}else if(w[Ge]===null){w[Ge]=xe,Le=Ge;break}if(Le===-1)break}let Ee=C[Le];Ee&&Ee.connect(xe)}}let $=new z,le=new z;function de(Q,ne,xe){$.setFromMatrixPosition(ne.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Le=$.distanceTo(le),Ee=ne.projectionMatrix.elements,Ge=xe.projectionMatrix.elements,Mt=Ee[14]/(Ee[10]-1),I=Ee[14]/(Ee[10]+1),Ae=(Ee[9]+1)/Ee[5],De=(Ee[9]-1)/Ee[5],Ie=(Ee[8]-1)/Ee[0],ye=(Ge[8]+1)/Ge[0],it=Mt*Ie,_e=Mt*ye,Be=Le/(-Ie+ye),pt=Be*-Ie;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ee[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let at=Mt+Be,R=I+Be,_=it-pt,V=_e+(Le-pt),J=Ae*I/R*at,te=De*I/R*at;Q.projectionMatrix.makePerspective(_,V,J,te,at,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Te(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,xe=Q.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),O.near=M.near=b.near=ne,O.far=M.far=b.far=xe,(G!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,q=O.far),O.layers.mask=Q.layers.mask|6,b.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Le=Q.parent,Ee=O.cameras;Te(O,Le);for(let Ge=0;Ge<Ee.length;Ge++)Te(Ee[Ge],Le);Ee.length===2?de(O,b,M):O.projectionMatrix.copy(b.projectionMatrix),ke(Q,O,Le)};function ke(Q,ne,xe){xe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Q){return h[Q]};let Ze=null;function nt(Q,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){let xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Le=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let I=0;I<xe.length;I++){let Ae=xe[I],De=null;if(m!==null)De=m.getViewport(Ae);else{let ye=f.getViewSubImage(d,Ae);De=ye.viewport,I===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let Ie=D[I];Ie===void 0&&(Ie=new Ct,Ie.layers.enable(I),Ie.viewport=new ft,D[I]=Ie),Ie.matrix.fromArray(Ae.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ae.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(De.x,De.y,De.width,De.height),I===0&&(O.matrix.copy(Ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Ie)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let I=f.getDepthInformation(xe[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let I=0;I<xe.length;I++){let Ae=xe[I].camera;if(Ae){let De=h[Ae];De||(De=new Ts,h[Ae]=De);let Ie=f.getCameraImage(Ae);De.sourceTexture=Ie}}}}for(let xe=0;xe<C.length;xe++){let Le=w[xe],Ee=C[xe];Le!==null&&Ee!==void 0&&Ee.update(Le,ne,c||a)}Ze&&Ze(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Xe=new Mh;Xe.setAnimationLoop(nt),this.setAnimationLoop=function(Q){Ze=Q},this.dispose=function(){}}},gi=new Kt,sg=new ut;function rg(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Qo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,y,E,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,y,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Lt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Lt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let y=e.get(h),E=y.envMap,v=y.envMapRotation;E&&(p.envMap.value=E,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(gi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){let y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ag(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",p));let C=E.program;n.updateUBOMapping(y,C);let w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){let E=f();y.__bindingPointIndex=E;let v=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let E=s[y.id],v=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,P=v.length;w<P;w++){let A=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,M=A.length;b<M;b++){let D=A[b];if(m(D,w,b,C)===!0){let O=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],q=0;for(let ee=0;ee<G.length;ee++){let j=G[ee],ae=x(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,O+q,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,q),q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,v,C){let w=y.value,P=E+"_"+v;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{let A=C[P];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[P]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){let E=y.uniforms,v=0,C=16;for(let P=0,A=E.length;P<A;P++){let b=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,D=b.length;M<D;M++){let O=b[M],G=Array.isArray(O.value)?O.value:[O.value];for(let q=0,ee=G.length;q<ee;q++){let j=G[q],ae=x(j),$=v%C,le=$%ae.boundary,de=$+le;v+=le,de!==0&&C-de<ae.storage&&(v+=C-de),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=ae.storage}}}let w=v%C;return w>0&&(v+=C-w),y.__size=v,y.__cache={},this}function x(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){let E=y.target;E.removeEventListener("dispose",p);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var qa=class{constructor(e={}){let{canvas:t=$c(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),x=new Int32Array(4),p=null,h=null,y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=_t;let w=0,P=0,A=null,b=-1,M=null,D=new ft,O=new ft,G=null,q=new Ne(0),ee=0,j=t.width,ae=t.height,$=1,le=null,de=null,Te=new ft(0,0,j,ae),ke=new ft(0,0,j,ae),Ze=!1,nt=new Gi,Xe=!1,Q=!1,ne=new ut,xe=new z,Le=new ft,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Mt(){return A===null?$:1}let I=n;function Ae(S,F){return t.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Y,!1),I===null){let F="webgl2";if(I=Ae(F,S),I===null)throw Ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let De,Ie,ye,it,_e,Be,pt,at,R,_,V,J,te,K,be,ie,pe,Se,se,ue,Ce,ve,L,N;function T(){De=new Ep(I),De.init(),ve=new tg(I,De),Ie=new xp(I,De,e,ve),ye=new Qm(I,De),Ie.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),it=new wp(I),_e=new km,Be=new eg(I,De,ye,_e,Ie,ve,it),pt=new yp(v),at=new Sp(v),R=new Lu(I),L=new mp(I,R),_=new Tp(I,R,it,L),V=new Rp(I,_,R,it),se=new Cp(I,Ie,Be),ie=new _p(_e),J=new zm(v,pt,at,De,Ie,L,ie),te=new rg(v,_e),K=new Hm,be=new Ym(De),Se=new pp(v,pt,at,ye,V,m,l),pe=new Km(v,V,Ie),N=new ag(I,it,Ie,ye),ue=new gp(I,De,it),Ce=new Ap(I,De,it),it.programs=J.programs,v.capabilities=Ie,v.extensions=De,v.properties=_e,v.renderLists=K,v.shadowMap=pe,v.state=ye,v.info=it}T();let U=new gl(v,I);this.xr=U,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=De.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=De.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(j,ae,!1))},this.getSize=function(S){return S.set(j,ae)},this.setSize=function(S,F,W=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,ae=F,t.width=Math.floor(S*$),t.height=Math.floor(F*$),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(j*$,ae*$).floor()},this.setDrawingBufferSize=function(S,F,W){j=S,ae=F,$=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(Te)},this.setViewport=function(S,F,W,X){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,F,W,X),ye.viewport(D.copy(Te).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,F,W,X){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,F,W,X),ye.scissor(O.copy(ke).multiplyScalar($).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){ye.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,W=!0){let X=0;if(S){let B=!1;if(A!==null){let oe=A.texture.format;B=oe===fa||oe===ua||oe===ha}if(B){let oe=A.texture.type,fe=oe===ln||oe===Kn||oe===Xi||oe===$i||oe===la||oe===ca,Me=Se.getClearColor(),ge=Se.getClearAlpha(),Pe=Me.r,Ue=Me.g,we=Me.b;fe?(g[0]=Pe,g[1]=Ue,g[2]=we,g[3]=ge,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Pe,x[1]=Ue,x[2]=we,x[3]=ge,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}F&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Se.dispose(),K.dispose(),be.dispose(),_e.dispose(),pt.dispose(),at.dispose(),V.dispose(),L.dispose(),N.dispose(),J.dispose(),U.dispose(),U.removeEventListener("sessionstart",cn),U.removeEventListener("sessionend",Tl),jn.stop()};function k(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=it.autoReset,F=pe.enabled,W=pe.autoUpdate,X=pe.needsUpdate,B=pe.type;T(),it.autoReset=S,pe.enabled=F,pe.autoUpdate=W,pe.needsUpdate=X,pe.type=B}function Y(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Z(S){let F=S.target;F.removeEventListener("dispose",Z),ce(F)}function ce(S){Fe(S),_e.remove(S)}function Fe(S){let F=_e.get(S).programs;F!==void 0&&(F.forEach(function(W){J.releaseProgram(W)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,X,B,oe){F===null&&(F=Ee);let fe=B.isMesh&&B.matrixWorld.determinant()<0,Me=qh(S,F,W,X,B);ye.setMaterial(X,fe);let ge=W.index,Pe=1;if(X.wireframe===!0){if(ge=_.getWireframeAttribute(W),ge===void 0)return;Pe=2}let Ue=W.drawRange,we=W.attributes.position,We=Ue.start*Pe,Qe=(Ue.start+Ue.count)*Pe;oe!==null&&(We=Math.max(We,oe.start*Pe),Qe=Math.min(Qe,(oe.start+oe.count)*Pe)),ge!==null?(We=Math.max(We,0),Qe=Math.min(Qe,ge.count)):we!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,we.count));let mt=Qe-We;if(mt<0||mt===1/0)return;L.setup(B,X,Me,W,ge);let ot,st=ue;if(ge!==null&&(ot=R.get(ge),st=Ce,st.setIndex(ot)),B.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*Mt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(B.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*Mt()),B.isLineSegments?st.setMode(I.LINES):B.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else B.isPoints?st.setMode(I.POINTS):B.isSprite&&st.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Bi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Re=B._multiDrawStarts,ct=B._multiDrawCounts,Ye=B._multiDrawCount,zt=ge?R.get(ge).bytesPerElement:1,vi=_e.get(X).currentProgram.getUniforms();for(let kt=0;kt<Ye;kt++)vi.setValue(I,"_gl_DrawID",kt),st.render(Re[kt]/zt,ct[kt])}else if(B.isInstancedMesh)st.renderInstances(We,mt,B.count);else if(W.isInstancedBufferGeometry){let Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ct=Math.min(W.instanceCount,Re);st.renderInstances(We,mt,ct)}else st.render(We,mt)};function rt(S,F,W){S.transparent===!0&&S.side===Tt&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,Js(S,F,W),S.side=wn,S.needsUpdate=!0,Js(S,F,W),S.side=Tt):Js(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),h=be.get(W),h.init(F),E.push(h),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),S!==W&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();let X=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let Me=oe[fe];rt(Me,W,B),X.add(Me)}else rt(oe,W,B),X.add(oe)}),h=E.pop(),X},this.compileAsync=function(S,F,W=null){let X=this.compile(S,F,W);return new Promise(B=>{function oe(){if(X.forEach(function(fe){_e.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){B(S);return}setTimeout(oe,10)}De.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Je=null;function yn(S){Je&&Je(S)}function cn(){jn.stop()}function Tl(){jn.start()}let jn=new Mh;jn.setAnimationLoop(yn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){Je=S,U.setAnimationLoop(S),S===null?jn.stop():jn.start()},U.addEventListener("sessionstart",cn),U.addEventListener("sessionend",Tl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(F),F=U.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,A),h=be.get(S,E.length),h.init(F),E.push(h),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ne,an,F.reversedDepth),Q=this.localClippingEnabled,Xe=ie.init(this.clippingPlanes,Q),p=K.get(S,y.length),p.init(),y.push(p),U.enabled===!0&&U.isPresenting===!0){let oe=v.xr.getDepthSensingMesh();oe!==null&&Qa(oe,F,-1/0,v.sortObjects)}Qa(S,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(le,de),Ge=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Ge&&Se.addToRenderList(p,S),this.info.render.frame++,Xe===!0&&ie.beginShadows();let W=h.state.shadowsArray;pe.render(W,S,F),Xe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,B=p.transmissive;if(h.setupLights(),F.isArrayCamera){let oe=F.cameras;if(B.length>0)for(let fe=0,Me=oe.length;fe<Me;fe++){let ge=oe[fe];wl(X,B,S,ge)}Ge&&Se.render(S);for(let fe=0,Me=oe.length;fe<Me;fe++){let ge=oe[fe];Al(p,S,ge,ge.viewport)}}else B.length>0&&wl(X,B,S,F),Ge&&Se.render(S),Al(p,S,F);A!==null&&P===0&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(v,S,F),L.resetDefaultState(),b=-1,M=null,E.pop(),E.length>0?(h=E[E.length-1],Xe===!0&&ie.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Qa(S,F,W,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||nt.intersectsSprite(S)){X&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);let fe=V.update(S),Me=S.material;Me.visible&&p.push(S,fe,Me,W,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||nt.intersectsObject(S))){let fe=V.update(S),Me=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(Me)){let ge=fe.groups;for(let Pe=0,Ue=ge.length;Pe<Ue;Pe++){let we=ge[Pe],We=Me[we.materialIndex];We&&We.visible&&p.push(S,fe,We,W,Le.z,we)}}else Me.visible&&p.push(S,fe,Me,W,Le.z,null)}}let oe=S.children;for(let fe=0,Me=oe.length;fe<Me;fe++)Qa(oe[fe],F,W,X)}function Al(S,F,W,X){let B=S.opaque,oe=S.transmissive,fe=S.transparent;h.setupLightsView(W),Xe===!0&&ie.setGlobalState(v.clippingPlanes,W),X&&ye.viewport(D.copy(X)),B.length>0&&Zs(B,F,W),oe.length>0&&Zs(oe,F,W),fe.length>0&&Zs(fe,F,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function wl(S,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new fn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?qi:ln,minFilter:mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let oe=h.state.transmissionRenderTarget[X.id],fe=X.viewport||D;oe.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);let Me=v.getRenderTarget(),ge=v.getActiveCubeFace(),Pe=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(q),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Se.render(W);let Ue=v.toneMapping;v.toneMapping=Pn;let we=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),Xe===!0&&ie.setGlobalState(v.clippingPlanes,X),Zs(S,W,X),Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe),De.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,mt=F.length;Qe<mt;Qe++){let ot=F[Qe],st=ot.object,Re=ot.geometry,ct=ot.material,Ye=ot.group;if(ct.side===Tt&&st.layers.test(X.layers)){let zt=ct.side;ct.side=Lt,ct.needsUpdate=!0,Cl(st,W,X,Re,ct,Ye),ct.side=zt,ct.needsUpdate=!0,We=!0}}We===!0&&(Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe))}v.setRenderTarget(Me,ge,Pe),v.setClearColor(q,ee),we!==void 0&&(X.viewport=we),v.toneMapping=Ue}function Zs(S,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,oe=S.length;B<oe;B++){let fe=S[B],Me=fe.object,ge=fe.geometry,Pe=fe.group,Ue=fe.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),Me.layers.test(W.layers)&&Cl(Me,F,W,ge,Ue,Pe)}}function Cl(S,F,W,X,B,oe){S.onBeforeRender(v,F,W,X,B,oe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,F,W,X,S,oe),B.transparent===!0&&B.side===Tt&&B.forceSinglePass===!1?(B.side=Lt,B.needsUpdate=!0,v.renderBufferDirect(W,F,X,B,S,oe),B.side=wn,B.needsUpdate=!0,v.renderBufferDirect(W,F,X,B,S,oe),B.side=Tt):v.renderBufferDirect(W,F,X,B,S,oe),S.onAfterRender(v,F,W,X,B,oe)}function Js(S,F,W){F.isScene!==!0&&(F=Ee);let X=_e.get(S),B=h.state.lights,oe=h.state.shadowsArray,fe=B.state.version,Me=J.getParameters(S,B.state,oe,F,W),ge=J.getProgramCacheKey(Me),Pe=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?at:pt).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",Z),Pe=new Map,X.programs=Pe);let Ue=Pe.get(ge);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===fe)return Il(S,Me),Ue}else Me.uniforms=J.getUniforms(S),S.onBeforeCompile(Me,v),Ue=J.acquireProgram(Me,ge),Pe.set(ge,Ue),X.uniforms=Me.uniforms;let we=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=ie.uniform),Il(S,Me),X.needsLights=Yh(S),X.lightsStateVersion=fe,X.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function Rl(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Il(S,F){let W=_e.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function qh(S,F,W,X,B){F.isScene!==!0&&(F=Ee),Be.resetTextureUnits();let oe=F.fog,fe=X.isMeshStandardMaterial?F.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:oi,ge=(X.isMeshStandardMaterial?at:pt).get(X.envMap||fe),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!W.morphAttributes.position,We=!!W.morphAttributes.normal,Qe=!!W.morphAttributes.color,mt=Pn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=v.toneMapping);let ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=ot!==void 0?ot.length:0,Re=_e.get(X),ct=h.state.lights;if(Xe===!0&&(Q===!0||S!==M)){let Pt=S===M&&X.id===b;ie.setState(X,S,Pt)}let Ye=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ct.state.version||Re.outputColorSpace!==Me||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==ge||X.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ue||Re.morphTargets!==we||Re.morphNormals!==We||Re.morphColors!==Qe||Re.toneMapping!==mt||Re.morphTargetsCount!==st)&&(Ye=!0):(Ye=!0,Re.__version=X.version);let zt=Re.currentProgram;Ye===!0&&(zt=Js(X,F,B));let vi=!1,kt=!1,ns=!1,ht=zt.getUniforms(),$t=Re.uniforms;if(ye.useProgram(zt.program)&&(vi=!0,kt=!0,ns=!0),X.id!==b&&(b=X.id,kt=!0),vi||M!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",S.projectionMatrix),ht.setValue(I,"viewMatrix",S.matrixWorldInverse);let Dt=ht.map.cameraPosition;Dt!==void 0&&Dt.setValue(I,xe.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,kt=!0,ns=!0)}if(B.isSkinnedMesh){ht.setOptional(I,B,"bindMatrix"),ht.setOptional(I,B,"bindMatrixInverse");let Pt=B.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ht.setValue(I,"boneTexture",Pt.boneTexture,Be))}B.isBatchedMesh&&(ht.setOptional(I,B,"batchingTexture"),ht.setValue(I,"batchingTexture",B._matricesTexture,Be),ht.setOptional(I,B,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",B._indirectTexture,Be),ht.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",B._colorsTexture,Be));let Yt=W.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&se.update(B,W,zt),(kt||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,ht.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($t.envMap.value=ge,$t.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&($t.envMapIntensity.value=F.environmentIntensity),kt&&(ht.setValue(I,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&$h($t,ns),oe&&X.fog===!0&&te.refreshFogUniforms($t,oe),te.refreshMaterialUniforms($t,X,$,ae,h.state.transmissionRenderTarget[S.id]),Ki.upload(I,Rl(Re),$t,Be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ki.upload(I,Rl(Re),$t,Be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(I,"center",B.center),ht.setValue(I,"modelViewMatrix",B.modelViewMatrix),ht.setValue(I,"normalMatrix",B.normalMatrix),ht.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Pt=X.uniformsGroups;for(let Dt=0,eo=Pt.length;Dt<eo;Dt++){let Qn=Pt[Dt];N.update(Qn,zt),N.bind(Qn,zt)}}return zt}function $h(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Yh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,F,W){let X=_e.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),_e.get(S.texture).__webglTexture=F,_e.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let W=_e.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};let Zh=I.createFramebuffer();this.setRenderTarget=function(S,F=0,W=0){A=S,w=F,P=W;let X=!0,B=null,oe=!1,fe=!1;if(S){let ge=_e.get(S);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)Be.setupRenderTarget(S);else if(ge.__hasExternalTextures)Be.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let we=S.depthTexture;if(ge.__boundDepthTexture!==we){if(we!==null&&_e.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(S)}}let Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);let Ue=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?B=Ue[F][W]:B=Ue[F],oe=!0):S.samples>0&&Be.useMultisampledRTT(S)===!1?B=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[W]:B=Ue,D.copy(S.viewport),O.copy(S.scissor),G=S.scissorTest}else D.copy(Te).multiplyScalar($).floor(),O.copy(ke).multiplyScalar($).floor(),G=Ze;if(W!==0&&(B=Zh),ye.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&ye.drawBuffers(S,B),ye.viewport(D),ye.scissor(O),ye.setScissorTest(G),oe){let ge=_e.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,W)}else if(fe){let ge=F;for(let Pe=0;Pe<S.textures.length;Pe++){let Ue=_e.get(S.textures[Pe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,W,ge)}}else if(S!==null&&W!==0){let ge=_e.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(S,F,W,X,B,oe,fe,Me=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ye.bindFramebuffer(I.FRAMEBUFFER,ge);try{let Pe=S.textures[Me],Ue=Pe.format,we=Pe.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&W>=0&&W<=S.height-B&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(F,W,X,B,ve.convert(Ue),ve.convert(we),oe))}finally{let Pe=A!==null?_e.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,F,W,X,B,oe,fe,Me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(F>=0&&F<=S.width-X&&W>=0&&W<=S.height-B){ye.bindFramebuffer(I.FRAMEBUFFER,ge);let Pe=S.textures[Me],Ue=Pe.format,we=Pe.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(F,W,X,B,ve.convert(Ue),ve.convert(we),0);let Qe=A!==null?_e.get(A).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Qe);let mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Yc(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(We),I.deleteSync(mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,W=0){let X=Math.pow(2,-W),B=Math.floor(S.image.width*X),oe=Math.floor(S.image.height*X),fe=F!==null?F.x:0,Me=F!==null?F.y:0;Be.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,Me,B,oe),ye.unbindTexture()};let Jh=I.createFramebuffer(),Kh=I.createFramebuffer();this.copyTextureToTexture=function(S,F,W=null,X=null,B=0,oe=null){oe===null&&(B!==0?(Bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let fe,Me,ge,Pe,Ue,we,We,Qe,mt,ot=S.isCompressedTexture?S.mipmaps[oe]:S.image;if(W!==null)fe=W.max.x-W.min.x,Me=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ue=W.min.y,we=W.isBox3?W.min.z:0;else{let Yt=Math.pow(2,-B);fe=Math.floor(ot.width*Yt),Me=Math.floor(ot.height*Yt),S.isDataArrayTexture?ge=ot.depth:S.isData3DTexture?ge=Math.floor(ot.depth*Yt):ge=1,Pe=0,Ue=0,we=0}X!==null?(We=X.x,Qe=X.y,mt=X.z):(We=0,Qe=0,mt=0);let st=ve.convert(F.format),Re=ve.convert(F.type),ct;F.isData3DTexture?(Be.setTexture3D(F,0),ct=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),ct=I.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Ye=I.getParameter(I.UNPACK_ROW_LENGTH),zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vi=I.getParameter(I.UNPACK_SKIP_PIXELS),kt=I.getParameter(I.UNPACK_SKIP_ROWS),ns=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we);let ht=S.isDataArrayTexture||S.isData3DTexture,$t=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Yt=_e.get(S),Pt=_e.get(F),Dt=_e.get(Yt.__renderTarget),eo=_e.get(Pt.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let Qn=0;Qn<ge;Qn++)ht&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,B,we+Qn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,oe,mt+Qn)),I.blitFramebuffer(Pe,Ue,fe,Me,We,Qe,fe,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||_e.has(S)){let Yt=_e.get(S),Pt=_e.get(F);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Jh),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Kh);for(let Dt=0;Dt<ge;Dt++)ht?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,B,we+Dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,B),$t?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,oe,mt+Dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,oe),B!==0?I.blitFramebuffer(Pe,Ue,fe,Me,We,Qe,fe,Me,I.COLOR_BUFFER_BIT,I.NEAREST):$t?I.copyTexSubImage3D(ct,oe,We,Qe,mt+Dt,Pe,Ue,fe,Me):I.copyTexSubImage2D(ct,oe,We,Qe,Pe,Ue,fe,Me);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else $t?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(ct,oe,We,Qe,mt,fe,Me,ge,st,Re,ot.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(ct,oe,We,Qe,mt,fe,Me,ge,st,ot.data):I.texSubImage3D(ct,oe,We,Qe,mt,fe,Me,ge,st,Re,ot):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,We,Qe,fe,Me,st,Re,ot.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,We,Qe,ot.width,ot.height,st,ot.data):I.texSubImage2D(I.TEXTURE_2D,oe,We,Qe,fe,Me,st,Re,ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ns),oe===0&&F.generateMipmaps&&I.generateMipmap(ct),ye.unbindTexture()},this.initRenderTarget=function(S){_e.get(S).__webglFramebuffer===void 0&&Be.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Be.setTextureCube(S,0):S.isData3DTexture?Be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Be.setTexture2DArray(S,0):Be.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){w=0,P=0,A=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Un=384,Ah=64,Qi=i=>i.x+Un*(i.z+Un*i.y),Dn=i=>({x:i%Un,y:Math.floor(i/(Un*Un)),z:Math.floor(i/Un)%Un}),Za=i=>i&&[i.x,i.y,i.z].every(Number.isInteger)&&i.x>=0&&i.x<Un&&i.z>=0&&i.z<Un&&i.y>=2&&i.y<60,_l=i=>({x:Math.floor(i.x/2),y:Math.floor(i.y/2),z:Math.floor(i.z/2)}),es=i=>i===22||i===23,og=[[1,0],[-1,0],[0,1],[0,-1]];function wh(i){let e={bucket:i.bucket,spreadFluids:i.spreadFluids,waterSurface:i.waterSurface,tickLife:i.tickLife,irrigated:i.irrigated};return{initFineFluids(t){this.fineSources=new Map,this.fineFlow=new Map,this.fineFluidCells=new Set;for(let n of(Array.isArray(t?.fineSources)?t.fineSources:[]).slice(0,Ah)){if(!Array.isArray(n)||!Number.isInteger(n[0])||!es(n[1]))continue;let s=Dn(n[0]);n[0]<0||!Za(s)||this.smallAt(s)||this.fineSources.set(n[0],n[1])}this.spreadFineFluids()},fineFluidSave(){return{fineSources:[...this.fineSources]}},fineFluidAt(t){return Za(t)&&this.fineFlow?.get(Qi(t))?.id||0},fluidNear(t){return Za(t)&&Math.hypot(t.x*.5+.25-this.player.x,t.y*.5+.25-(this.player.y+1.5),t.z*.5+.25-this.player.z)<=7},bucket(t){let n=this.selected;if(!t||![24,25,26].includes(n)||!this.creative&&!this.inventory[n])return!1;if(n===24&&t.fluidSmall){let s=t.fluidSmall,r=this.fineFlow.get(Qi(s));if(!r||!this.fluidNear(s))return!1;let a=r.id===22?25:26;return this.inventory[a]>=9999||!this.fineSources.has(r.source)?!1:(this.fineSources.delete(r.source),this.creative||this.inventory[24]--,this.inventory[a]++,this.selected=a,this.spreadFineFluids(),this.notice="Fonte recolhida. A corrente secou.",!0)}if(n!==24&&(t.placeSmall||t.fluidSmall)){let s=t.fluidSmall||t.placeSmall;if(!this.fluidNear(s))return this.notice="Aproxime-se da borda ou do canal.",!1;if(this.fineSources.size+this.fluidSources.size>=Ah)return this.notice="Recolha uma fonte antes de despejar outro balde.",!1;if(this.smallAt(s))return this.notice="Esse espa\xE7o est\xE1 ocupado. Mire na face livre do canal ou da borda.",!1;let r=n===25?22:23,a=Qi(s),o=this.fineFlow.get(a);if(o?.id===r)return this.notice="J\xE1 existe uma corrente aqui. Mire em outra borda.",!1;if(o){if(!this.solidifyFine(s))return!1}else this.fineSources.set(a,r);return this.creative||(this.inventory[n]--,this.inventory[24]=Math.min(9999,this.inventory[24]+1)),this.spreadFineFluids(),this.notice=o?"\xC1gua e lava viraram pedra.":r===22?"\xC1gua despejada! Ela segue o canal e cai pelas bordas.":"Lava despejada! Ela escorre pelas bordas.",!0}return e.bucket.call(this,t)},solidifyFine(t){let n=_l(t),s=Oe(n.x,n.y,n.z),r=this.smallAt(t);if(r&&!es(r))return!1;if(es(r))return this.set(n.x,n.y,n.z,3),this.fluidSources.delete(s),!0;if(!this.smallCells.has(s)&&this.smallCells.size>=4e3)return!1;let a=this.smallCells.get(s)||Array(8).fill(0),o=t.x%2+2*(t.z%2)+4*(t.y%2);return a[o]=3,this.smallCells.set(s,a),this.fineSources.delete(Qi(t)),this.dirtyDetail(n),!0},spreadFineFluids(){if(!this.fineSources)return;let t=this.fineFlow,n=new Map,s=[];for(let[o,l]of this.fineSources){let c=Dn(o);if(this.smallAt(c)){this.fineSources.delete(o);continue}let u={id:l,source:o};n.set(o,u),s.push([c,u,0])}let r=o=>Za(o)&&(!this.smallAt(o)||es(this.smallAt(o))),a=(o,l,c)=>{if(!r(o))return!1;let u=Qi(o),f=n.get(u)||t.get(u),d=this.smallAt(o),m=f?.id||(es(d)?d:0);return m&&m!==l.id?(this.solidifyFine(o)&&n.delete(u),!1):es(d)?!1:(n.has(u)||(n.set(u,l),s.push([o,l,c])),!0)};for(let o=0;o<s.length;o++){let[l,c,u]=s[o],f=Qi(l);if(!n.has(f)||this.smallAt(l))continue;let d={x:l.x,y:l.y-1,z:l.z};if(r(d)){a(d,c,0);continue}if(!(c.id===23&&u>=4))for(let[m,g]of og)a({x:l.x+m,y:l.y,z:l.z+g},c,u+1)}for(let[o,l]of n)(this.smallAt(Dn(o))||!this.fineSources.has(l.source))&&n.delete(o);for(let o of new Set([...t.keys(),...n.keys()]))t.get(o)?.id!==n.get(o)?.id&&this.dirtyDetail(_l(Dn(o)));this.fineFlow=n,this.fineFlowChunks=new Map;for(let[o,l]of n){let c=Dn(o),u=Math.floor(c.x/16)+","+Math.floor(c.z/16);this.fineFlowChunks.has(u)||this.fineFlowChunks.set(u,[]),this.fineFlowChunks.get(u).push([o,l])}this.fineFluidCells=new Set([...n.keys()].map(o=>{let l=_l(Dn(o));return Oe(l.x,l.y,l.z)}))},spreadFluids(){e.spreadFluids.call(this),this.spreadFineFluids()},waterSurface(){let t=this.player;for(let n=Math.floor((t.y+1)*2);n>=Math.floor(t.y*2);n--){let s={x:Math.floor(t.x*2),y:n,z:Math.floor(t.z*2)};if(this.fineFluidAt(s)===22)return n*.5+.48}return e.waterSurface.call(this)},irrigated(t){if(e.irrigated.call(this,t))return!0;for(let[n,s]of this.fineFlow||[]){if(s.id!==22)continue;let r=Dn(n);if(Math.abs(r.x*.5-t.x)+Math.abs(r.z*.5-t.z)<=4&&r.y*.5>=t.y-2&&r.y*.5<=t.y+1)return!0}return!1},tickLife(t,n=!0){e.tickLife.call(this,t,n),n&&!this.creative&&this.fineFluidAt({x:Math.floor(this.player.x*2),y:Math.floor((this.player.y+.1)*2),z:Math.floor(this.player.z*2)})===23&&(this.home(),this.notice="A lava estava quente! Voc\xEA voltou ao in\xEDcio sem perder seus itens.")}}}function Ch(){let i=e=>{let t=document.createElement("canvas");t.width=32,t.height=128;let n=t.getContext("2d");n.fillStyle=e===22?"#46b9dc":"#ff8b26",n.fillRect(0,0,32,128);for(let r=0;r<24;r++)n.fillStyle=e===22?"#d9ffff28":r%2?"#ffe06c99":"#ad330e55",n.fillRect(r*11%31,r*37%125,1+r%3,6+r%12);let s=new ci(t);return s.wrapS=s.wrapT=Fi,s.colorSpace=_t,new hi({map:s,transparent:e===22,opacity:e===22?.76:1,shininess:e===22?100:20,emissive:e===23?11876877:0,emissiveIntensity:.65,side:Tt})};return{22:i(22),23:i(23)}}var lg=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];function Rh(i,e,t,n){let s=[],r=[],a=[],o=[];for(let[c,u]of i.fineFlowChunks?.get(e+","+t)||[]){if(u.id!==n)continue;let f=Dn(c);if(Math.floor(f.x/16)!==e||Math.floor(f.z/16)!==t)continue;let d=i.fineFluidAt({...f,y:f.y+1})===n,m=d?.5:.48;for(let g of lg){let x={x:f.x+g.n[0],y:f.y+g.n[1],z:f.z+g.n[2]};if(i.fineFluidAt(x)===n||i.smallAt(x)&&![22,23].includes(i.smallAt(x)))continue;let p=s.length/3;for(let h of g.p){let y=f.x*.5+h[0]*.5,E=f.y*.5+h[1]*m,v=f.z*.5+h[2]*.5;s.push(y,E,v),r.push(...g.n),a.push(g.n[0]?v*2:y*2,g.n[1]?v*2:E*2)}o.push(p,p+1,p+2,p,p+2,p+3)}}let l=new Et;return l.setAttribute("position",new Ke(s,3)),l.setAttribute("normal",new Ke(r,3)),l.setAttribute("uv",new Ke(a,2)),l.setIndex(o),l.computeBoundingSphere(),l}var yi=new Set([1,2,3,4,5,6,7,8,9,10,61]),yl=(i,e,t)=>i%2+2*(t%2)+4*(e%2),vl=i=>({x:Math.floor(i.x/2),y:Math.floor(i.y/2),z:Math.floor(i.z/2)}),Ml=i=>i&&[i.x,i.y,i.z].every(Number.isInteger)&&i.x>=0&&i.z>=0&&i.x<384&&i.z<384&&i.y>=2&&i.y<60;function Ih(){return{initDetail(i){this.smallCells=new Map;for(let e of(Array.isArray(i?.smallCells)?i.smallCells:[]).slice(0,4e3)){if(!Array.isArray(e))continue;let[t,n]=e;!Number.isInteger(t)||t<36864||t>=this.cells.length||this.cells[t]||!Array.isArray(n)||n.length!==8||n.some(s=>!Number.isInteger(s)||s!==0&&!yi.has(s))||n.some(Boolean)&&this.smallCells.set(t,n.slice())}},surfaceId(i,e,t){let n=this.get(i,e,t);if(n)return n;let s=this.smallCells.get(Oe(i,e,t));if(s){for(let r=7;r>=0;r--)if(s[r])return s[r]}return 2},detailSave(){return{detail:1,smallCells:[...this.smallCells].map(([i,e])=>[i,e.slice()])}},smallAt(i){if(!Ml(i))return 0;let e=vl(i);return this.get(e.x,e.y,e.z)||this.smallCells.get(Oe(e.x,e.y,e.z))?.[yl(i.x,i.y,i.z)]||0},detailBoxes(i,e,t){let n=this.get(i,e,t);if([4,5].includes(n)&&this.base[Oe(i,e,t)]===n&&!this.edits.has(Oe(i,e,t)))return n===5?[]:[[.24,0,.24,.76,1,.76]];if(n)return js(n,this.meta({x:i,y:e,z:t}));let s=this.smallCells.get(Oe(i,e,t));return s?s.flatMap((r,a)=>{if(!r)return[];let o=a%2*.5,l=Math.floor(a/4)*.5,c=Math.floor(a/2)%2*.5;return[[o,l,c,o+.5,l+.5,c+.5]]}):[]},dirtyDetail(i){for(let[e,t]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]]){let n=Math.floor((i.x+e)/8),s=Math.floor((i.z+t)/8);n>=0&&s>=0&&n<192/8&&s<192/8&&this.dirty.add(n+","+s)}},placeSmall(i){if(!Ml(i)||!yi.has(this.selected)||this.smallAt(i)||!this.creative&&!this.inventory[this.selected])return!1;let e=vl(i),t=Oe(e.x,e.y,e.z);if(this.occupied(e.x,e.y,e.z)&&!this.smallCells.has(t))return!1;if(!this.smallCells.has(t)&&this.smallCells.size>=4e3)return this.notice="Limite de detalhes atingido. Reaproveite os blocos existentes.",!1;let n=i.x*.5,s=i.y*.5,r=i.z*.5,a=this.player;if(Math.hypot(n+.25-a.x,s+.25-(a.y+1.5),r+.25-a.z)>7||n+.5>a.x-.3&&n<a.x+.3&&s+.5>a.y&&s<a.y+1.76&&r+.5>a.z-.3&&r<a.z+.3||![[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([l,c,u])=>this.smallAt({x:i.x+l,y:i.y+c,z:i.z+u})))return!1;let o=this.smallCells.get(t)||Array(8).fill(0);return o[yl(i.x,i.y,i.z)]=this.selected,this.smallCells.set(t,o),o.every(l=>l===this.selected)&&(this.smallCells.delete(t),this.set(e.x,e.y,e.z,this.selected)),this.creative||this.inventory[this.selected]--,this.stats.placed++,this.dirtyDetail(e),!0},mineSmall(i){if(!Ml(i))return!1;let e=vl(i),t=Oe(e.x,e.y,e.z),n=this.smallAt(i);if(!yi.has(n)||!this.nearby(e))return!1;if(!this.smallCells.has(t)&&this.smallCells.size>=4e3)return this.notice="Reaproveite os blocos pequenos antes de detalhar mais terreno.",!1;if(!this.creative&&this.inventory[n]>=9999)return this.notice="Sua mochila est\xE1 cheia.",!1;let s=this.selected,r=this.inventory[s]>0,a=[3,4].includes(n)?3:1;r&&(n===3&&me[s]?.tier||n===4&&s===50)&&(a=1);let o="small:"+i.x+","+i.y+","+i.z,l=this.mineProgress?.key===o&&this.mineProgress.tool===s?this.mineProgress:{key:o,tool:s,hits:0};if(l.hits++,!this.creative&&l.hits<a)return this.mineProgress=l,this.notice="Minerando: "+l.hits+"/"+a,!1;let c=this.smallCells.get(t);return c||(c=Array(8).fill(n),this.set(e.x,e.y,e.z,0)),c[yl(i.x,i.y,i.z)]=0,c.some(Boolean)?this.smallCells.set(t,c):this.smallCells.delete(t),this.creative||(this.inventory[n]=(this.inventory[n]||0)+1,this.xp++,this.wear(s)),this.stats.mined++,this.mineProgress=null,this.dirtyDetail(e),n}}}var _n=(i,e,t)=>Math.max(e,Math.min(t,i)),Nn=(i,e)=>Number.isFinite(i)?i:e,Ja=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[0,-1,0]],ts=i=>({x:i%192,z:Math.floor(i/192)%192,y:Math.floor(i/36864)}),Ph=(i,e,t)=>{let n=Math.sin(i*127.1+e*73.13+t*311.7)*43758.5453;return n-Math.floor(n)};function Lh(i){if(!i||![1,2,3].includes(i.version))return null;if(i.version===3)return i.worldSize===192?i:null;let e=i.version===1?48:96,t=(r,a=1)=>{let o=e*a,l=192*a;return r%o+l*(Math.floor(r/o)%o+l*Math.floor(r/(o*o)))},n=(r,a=1)=>Number.isInteger(r)&&r>=0&&r<e*e*30*a**3,s=(r,a=1)=>(Array.isArray(r)?r:[]).filter(o=>Array.isArray(o)&&n(o[0],a)).map(([o,l])=>[t(o,a),l]);return{...i,version:3,worldSize:192,edits:s(i.edits),props:s(i.props),smallCells:s(i.smallCells),fluidSources:s(i.fluidSources),flowCells:(Array.isArray(i.flowCells)?i.flowCells:[]).filter(r=>n(r)).map(r=>t(r)),fineSources:s(i.fineSources,2)}}function cg(i,e){if(i>=58&&i<=78&&e>=13&&e<=29)return 9;let t=Math.abs(i-(62+Math.sin(e*.09)*5));return e>45&&t<3||Math.hypot(i-77,e-73)<11?3:e>45&&t<5||Math.hypot(i-77,e-73)<13?5:Math.floor(7+Math.sin(i*.13)*2+Math.cos(e*.17)*2+Math.max(0,1-Math.hypot(i-81,e-39)/16)*11+Math.max(0,1-Math.hypot(i-27,e-77)/17)*12)}function Dh(i){for(let t of[96,192])for(let n=0;n<t;n++)for(let s=0;s<t;s++){if(t>96&&n<96&&s<96||n<48&&s<48)continue;let r=cg(n,s);for(let a=0;a<=r;a++){let o=a===0?11:a<r-2?3:a<r?2:r<6?6:r>14?10:1;if(o===3){let l=Ph(n,a,s);l<.017?o=39:l<.03?o=40:l<.035&&a<9?o=41:l<.037&&a<6&&(o=42),a>1&&a<r-3&&Math.sin(n*.25)+Math.sin(s*.22)+Math.cos(a*.65)>2.25&&(o=0)}i.cells[Oe(n,a,s)]=o}if(r>5&&r<13&&!(n>=56&&n<=80&&s>=11&&s<=32)&&Ph(n,0,s)<.018&&n>2&&s>2&&n<t-3&&s<t-3&&(t===96||n>97||s>97)){for(let a=r+1;a<=r+4;a++)i.cells[Oe(n,a,s)]=4;for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)for(let l=r+3;l<=r+5;l++)i.get(n+a,l,s+o)||(i.cells[Oe(n+a,l,s+o)]=5)}}let e=(t,n,s,r)=>{i.cells[Oe(t,n,s)]=r};for(let t of[60,72]){for(let n=t;n<t+5;n++)for(let s=16;s<22;s++){e(n,10,s,9);for(let r=11;r<=13;r++)e(n,r,s,n===t||n===t+4||s===16||s===21?9:0);e(n,14,s,7)}e(t+2,11,21,13),e(t+2,12,21,0),e(t+1,12,16,8),e(t+3,12,16,8),e(t+1,11,18,15),e(t+3,11,18,18),e(t+2,10,22,12)}for(let t=58;t<=79;t++)for(let n=24;n<=26;n++)e(t,9,n,7);e(66,10,20,21),e(68,10,20,19),e(70,10,20,60);for(let t=79;t<=89;t++){let n=Math.max(2,7-Math.floor((89-t)/2));for(let s=34;s<=36;s++){for(let r=n+1;r<30;r++)e(t,r,s,0);e(t,n,s,3),t%2===0&&e(t,n+1,s,12)}e(t,n+1,33,t%4===0?42:t%3===0?41:t%2===0?40:39)}for(let t=90;t<96;t++)for(let n=34;n<=36;n++){for(let s=8;s<30;s++)e(t,s,n,0);e(t,7,n,3)}for(let t=60;t<=78;t++)e(t,10,28,55)}function Uh(i){let e={};for(let t of["mine","use","useAnimal","tickLife","bucket","place","set","home","update"])e[t]=i[t];return{initAdventure(t){this.features=new Map;for(let n=0;n<this.cells.length;n++)is(this.cells[n])&&this.features.set(n,this.cells[n]);this.riding=null,this.flowTime=0,this.gardenTime=0,this.mineProgress=null,this.toolWear={},this.enchants={},this.vitals={health:_n(Nn(t?.vitals?.health,100),1,100),hunger:_n(Nn(t?.vitals?.hunger,100),0,100)},this.xp=_n(Nn(t?.xp,0),0,999999),this.respawn=t?.respawn&&["x","y","z"].every(n=>Number.isFinite(t.respawn[n]))?{...t.respawn}:null;for(let[n,s]of me.entries())s?.durability&&(this.toolWear[n]=_n(Nn(t?.toolWear?.[n],s.durability),1,s.durability),this.enchants[n]=_n(Math.floor(Nn(t?.enchants?.[n],0)),0,3));this.fluidSources=new Map,this.flowCells=new Set;for(let[n,s]of this.features)(s===22||s===23)&&this.fluidSources.set(n,s);if(t?.adventure){this.fluidSources.clear();for(let[n,s]of t.fluidSources||[])Number.isInteger(n)&&this.cells[n]===s&&[22,23].includes(s)&&this.fluidSources.set(n,s);for(let n of t.flowCells||[])Number.isInteger(n)&&[22,23].includes(this.cells[n])&&!this.fluidSources.has(n)&&this.flowCells.add(n)}for(let[n,s]of t?.props||[])if(this.features.has(n)&&s&&typeof s=="object"){let r=this.cells[n],a=this.props.get(n)||{};[37,38].includes(r)&&Object.assign(a,{planted:Math.max(0,Nn(s.planted,this.lifeTime)),growth:_n(Nn(s.growth,0),0,180),stage:_n(Math.floor(Nn(s.stage,0)),0,3)}),[57,58,59].includes(r)&&Object.assign(a,{on:s.on===!0,powered:s.powered===!0,extended:s.extended===!0,rot:_n(Math.floor(Nn(s.rot,0)),0,3)}),this.props.set(n,a)}if(this.vehicles=(Array.isArray(t?.vehicles)?t.vehicles:[]).filter(n=>[54,56].includes(n.type)&&["x","y","z","yaw"].every(s=>Number.isFinite(n[s]))&&n.x>0&&n.x<192&&n.z>0&&n.z<192).slice(0,12).map(n=>({...n})),!t?.adventure){Object.assign(this.inventory,{34:8,35:8,47:1,52:1,54:1,55:24,56:1,57:16,58:2});for(let[n,s]of[[73,61],[76,61],[86,65],[88,67]]){let r=this.surface(n,s)+1;this.animals.length+(this.companions?.length||0)<40&&this.animals.push({type:"capybara",x:n+.5,z:s+.5,y:Math.max(r,5.12-.45),yaw:2,turn:0,feedAt:0,milkAt:0,bornAt:-300})}this.vehicles.push({type:56,x:65.5,y:10.1,z:28.5,yaw:Math.PI/2})}this.villagers=[{x:65.5,y:10,z:23.5,name:"Lia \xB7 agricultora",trade:"farmer"},{x:69.5,y:10,z:23.5,name:"Bento \xB7 minerador",trade:"miner"}],this.lifeDirty=!0},trackFeature(t,n){this.features&&(is(n)?this.features.set(t,n):this.features.delete(t),[22,23].includes(n)||(this.fluidSources?.delete(t),this.flowCells?.delete(t)))},adventureSave(){return{adventure:1,worldSize:192,toolWear:{...this.toolWear},enchants:{...this.enchants},vitals:{...this.vitals},xp:this.xp,respawn:this.respawn,vehicles:this.vehicles.map(t=>({...t})),fluidSources:[...this.fluidSources],flowCells:[...this.flowCells]}},biome(){let t=this.player,n=this.settlements?.find(s=>t.x>=s.x&&t.x<s.x+24&&t.z>=s.z&&t.z<s.z+24);return n?Bn[n.id].name.toUpperCase():t.x>=58&&t.x<=80&&t.z>=12&&t.z<=31?"VILA INTEGRO":t.x>55&&t.z>48?"RIO DAS CAPIVARAS":t.y>14?"MONTANHAS NEVADAS":t.x>74&&t.z>30&&t.z<45?"MINAS DE CRISTAL":t.y<6?"PRAIA DAS CONCHAS":"VALE VERDE"},home(){e.home.call(this),this.respawn&&this.respawn.x>1&&this.respawn.x<191&&this.respawn.z>1&&this.respawn.z<191&&this.respawn.y>0&&this.respawn.y<40&&!this.collides(this.respawn.x,this.respawn.y,this.respawn.z)&&Object.assign(this.player,this.respawn,{vy:0})},update(t,n={}){let s=this.player.vy;e.update.call(this,t,n),!this.creative&&s<-12&&this.player.grounded&&!this.inWater()&&(this.vitals.health=Math.max(25,this.vitals.health-Math.round((Math.abs(s)-12)*2)))},wear(t){let n=me[t];!n?.durability||this.creative||!this.inventory[t]||(this.toolWear[t]=(this.toolWear[t]||n.durability)-1,this.toolWear[t]<=0&&(this.inventory[t]=Math.max(0,this.inventory[t]-1),this.toolWear[t]=n.durability,this.inventory[t]||(this.notice=n.name+" gastou. Fabrique outra na bancada.")))},mine(t){let n=this.get(t.x,t.y,t.z),s=me[this.selected];if([37,38].includes(n))return this.harvest(t)?n:!1;if(n===63||n===59&&this.meta(t).extended)return this.notice="Desligue o pist\xE3o antes de remover.",!1;if(!this.creative&&n>=39&&n<=42){let a=n===39?1:n===40?2:3;if(!s?.tier||s.tier<a||!this.inventory[this.selected])return this.notice="Use uma picareta "+(a===1?"de madeira ou melhor.":a===2?"de pedra ou ferro.":"de ferro."),!1}if(!this.creative&&n&&n!==11&&this.nearby(t)&&!me[n]?.fluid){let a=Oe(t.x,t.y,t.z),o=!!s?.tier&&this.inventory[this.selected]>0,l=this.selected===50&&this.inventory[50]>0,c=this.selected===51&&this.inventory[51]>0,u=n>=39&&n<=42||n===3||n===4?3:1;o&&(n===3||n>=39&&n<=42)&&(u=Math.max(1,u-s.tier+1-(this.enchants[this.selected]||0))),(l&&[4,9].includes(n)||c&&[1,2,6,33].includes(n))&&(u=1);let f=this.mineProgress?.key===a&&this.mineProgress.tool===this.selected?this.mineProgress:{key:a,tool:this.selected,hits:0};if(f.hits++,this.mineProgress=f,f.hits<u)return this.notice="Minerando: "+f.hits+"/"+u+" \xB7 toque em Quebrar novamente",!1}let r=e.mine.call(this,t);if(r){if(this.mineProgress=null,!this.creative&&(this.xp+=n>=39&&n<=42?4:1,this.wear(this.selected),n===39||n===42)){this.inventory[n]--;let a=n===39?43:46;this.inventory[a]=Math.min(9999,this.inventory[a]+1+(this.enchants[this.selected]>=2?1:0))}this.solveCircuits()}return r},place(t){let n=e.place.call(this,t);return n&&this.solveCircuits(),n},eat(){let t=this.selected;return t===64&&this.inventory[t]?(this.notice="Asse a carne na fornalha antes de comer.",!0):![32,36,30,65].includes(t)||!this.inventory[t]?!1:this.vitals.hunger>=100&&this.vitals.health>=100?(this.notice="Voc\xEA j\xE1 est\xE1 alimentado e descansado.",!0):(this.inventory[t]--,t===30&&this.inventory[24]++,this.vitals.hunger=_n(this.vitals.hunger+(t===65?55:t===32?35:t===36?20:25),0,100),this.vitals.health=_n(this.vitals.health+(t===65?20:12),0,100),this.notice="Que del\xEDcia! Fome e energia recuperadas.",!0)},farm(t){if(!t||!this.nearby(t))return null;let n=this.selected,s=this.get(t.x,t.y,t.z);if(n===52)return!this.creative&&!this.inventory[52]?"Pegue a enxada na mochila.":![1,2,33].includes(s)||this.get(t.x,t.y+1,t.z)?"Use a enxada em terra ou grama com espa\xE7o livre acima.":(this.set(t.x,t.y,t.z,33),this.wear(52),"Terra preparada! Selecione sementes e toque em Usar.");if(n===34||n===35){if(!this.creative&&!this.inventory[n])return"Suas sementes acabaram. Compre ou colha mais.";let r={x:t.x,y:t.y+1,z:t.z};return s!==33||this.occupied(r.x,r.y,r.z)||this.overlaps(r.x,r.y,r.z)?"Plante em terra preparada com a enxada.":this.set(r.x,r.y,r.z,n===34?37:38)?(this.setMeta(r,{growth:0,stage:0,planted:this.lifeTime}),this.creative||this.inventory[n]--,"Plantado! Cresce em 2 min perto da \xE1gua ou 3 min sem irriga\xE7\xE3o."):"N\xE3o h\xE1 espa\xE7o para plantar."}return null},irrigated(t){for(let n=-4;n<=4;n++)for(let s=-4;s<=4;s++)if(Math.abs(n)+Math.abs(s)<=4){let r=t.x+n,a=t.z+s;if(r<0||a<0||r>=192||a>=192)continue;for(let o=t.y-2;o<=t.y;o++)if(this.get(r,o,a)===22)return!0;if(t.y<=7&&this.surface(r,a)<5.12-1)return!0}return!1},harvest(t){let n=this.get(t.x,t.y,t.z),s=this.meta(t);if(![37,38].includes(n)||!this.nearby(t))return!1;if((s.growth||0)<180)return this.notice="Crescendo: "+Math.floor((s.growth||0)/1.8)+"%. Aguarde a colheita.",!1;let r=n===37?31:36,a=n===37?34:35;return this.inventory[r]>9996||this.inventory[a]>9997?(this.notice="Guarde itens no ba\xFA antes de colher.",!1):(this.inventory[r]+=3,this.inventory[a]+=2,this.set(t.x,t.y,t.z,0),this.xp+=5,this.notice="Colheita pronta: +3 "+me[r].name+" e +2 sementes!",!0)},use(t){if(!this.nearby(t))return"Aproxime-se para usar.";let n=this.get(t.x,t.y,t.z);if([37,38].includes(n)){this.harvest(t);let s=this.notice;return this.notice=null,s}if(n===58)return this.setMeta(t,{...this.meta(t),on:!this.meta(t).on}),this.solveCircuits(),"Circuito "+(this.meta(t).on?"ligado":"desligado")+". Conecte fios \xE0 porta, lumin\xE1ria ou pist\xE3o.";if(n===15){let s=e.use.call(this,t);return this.vitals.health=100,this.respawn={x:this.player.x,y:this.player.y,z:this.player.z},s+" Seu retorno foi marcado aqui."}return n===57?"Fio de energia. Ligue uma alavanca \xE0 porta, lumin\xE1ria ou pist\xE3o com fios encostados.":e.use.call(this,t)},huntAnimal(t){let n=Number.isInteger(t)?this.animals[t]:null;if(!n||Math.hypot(n.x-this.player.x,n.y-this.player.y,n.z-this.player.z)>4)return"Aproxime-se do animal para ca\xE7ar.";if(this.baby(n))return"Este animal ainda \xE9 filhote. Deixe crescer.";let s={cow:3,ox:4,pig:3,sheep:2,capybara:2}[n.type];return s?(this.inventory[64]||0)+s>9999?"Sua mochila est\xE1 cheia. Guarde a carne no ba\xFA.":(this.animals.splice(t,1),this.inventory[64]=(this.inventory[64]||0)+s,this.xp=Math.min(999999,this.xp+3),this.lifeDirty=!0,"+"+s+" carne crua na mochila. Asse na fornalha para comer!"):"Este animal n\xE3o pode ser coletado."},baby(t){return this.lifeTime-(t.bornAt??-300)<240},useAnimal(t){let n=this.animals[t];if(!n||Math.hypot(n.x-this.player.x,n.y-this.player.y,n.z-this.player.z)>7)return"Aproxime-se do animal.";if(n.type==="sheep"&&this.selected===50&&this.inventory[50])return this.lifeTime<(n.shearAt||0)?"A l\xE3 ainda est\xE1 crescendo.":(n.shearAt=this.lifeTime+120,this.inventory[61]+=3,this.wear(50),"Ovelha cuidada: +3 l\xE3!");if(this.baby(n)&&this.selected===24)return"O filhote ainda est\xE1 crescendo.";let s=this.selected;if([31,36].includes(s)&&this.inventory[s]){if(this.lifeTime<n.feedAt)return"J\xE1 est\xE1 alimentado! Aguarde "+Math.ceil(n.feedAt-this.lifeTime)+" s.";if(this.inventory[s]--,n.feedAt=this.lifeTime+30,this.creative||(this.coins=Math.min(999999,this.coins+5)),n.loveUntil=this.lifeTime+45,!this.baby(n)&&this.lifeTime>=(n.breedAt||0)&&this.animals.length+(this.companions?.length||0)<40){let r=this.animals.find(a=>a!==n&&a.type===n.type&&!this.baby(a)&&this.lifeTime<(a.loveUntil||0)&&this.lifeTime>=(a.breedAt||0)&&Math.hypot(n.x-a.x,n.z-a.z)<6);if(r)return n.babyDue=this.lifeTime+30,n.breedAt=r.breedAt=this.lifeTime+240,n.loveUntil=r.loveUntil=0,"Fam\xEDlia crescendo! Um filhote chegar\xE1 em 30 segundos."}return(this.baby(n)?"Filhote alimentado!":"Animal alimentado! Alimente outro adulto da mesma esp\xE9cie por perto para ter um filhote.")+(this.creative?"":" +5 integros")}return n.type==="capybara"?"Capivara tranquila! Ofere\xE7a trigo ou cenoura. Duas adultas alimentadas podem ter filhotes.":e.useAnimal.call(this,t)},trade(t,n){let s=this.villagers[t];if(!s||Math.hypot(s.x-this.player.x,s.z-this.player.z)>7||this.creative)return!1;let r=bl[s.trade]?.[n];if(!r||Object.entries(r.cost).some(([a,o])=>this.inventory[a]<o)||this.inventory[r.out]+r.count>9999)return!1;for(let[a,o]of Object.entries(r.cost))this.inventory[a]-=o;return this.inventory[r.out]+=r.count,this.xp+=2,!0},enchant(t,n){return this.get(t.x,t.y,t.z)!==60||!this.nearby(t)||!me[n]?.tier||!this.inventory[n]||(this.enchants[n]||0)>=3||this.xp<20||this.inventory[46]<1?!1:(this.xp-=20,this.inventory[46]--,this.enchants[n]=(this.enchants[n]||0)+1,this.toolWear[n]=me[n].durability,!0)},bucket(t){let n=this.selected,s=t?.place;if([25,26].includes(n)&&this.fluidSources.size>=64)return this.notice="Recolha uma fonte de l\xEDquido antes de colocar outra.",!1;if([25,26].includes(n)&&s&&this.nearby(s)&&!this.overlaps(s.x,s.y,s.z)&&(this.creative||this.inventory[n]>0)){let a=this.get(s.x,s.y,s.z),o=n===25?23:22;if(a===o){this.set(s.x,s.y,s.z,3);for(let[l,,c]of Ja.slice(0,4))this.get(s.x+l,s.y,s.z+c)===o&&this.set(s.x+l,s.y,s.z+c,3);return this.creative||(this.inventory[n]--,this.inventory[24]++),this.spreadFluids(),!0}}let r=e.bucket.call(this,t);if(r){if(n===24&&!t.lake)this.fluidSources.delete(Oe(t.x,t.y,t.z));else if(n!==24&&t.place){let a=t.place,o=Oe(a.x,a.y,a.z),l=this.get(a.x,a.y,a.z);[22,23].includes(l)&&this.fluidSources.set(o,l)}this.spreadFluids()}return r},spreadFluids(){let t=new Map,n=[];for(let[a,o]of this.fluidSources){if(this.cells[a]!==o){this.fluidSources.delete(a);continue}n.push([a,o,0]),t.set(a,o)}let s=a=>!this.smallCells.has(a)&&!this.fineFluidCells?.has(a)&&(!this.cells[a]||this.flowCells.has(a)||[22,23].includes(this.cells[a])),r=0;for(;r<n.length;){let[a,o,l]=n[r++],c=ts(a);if(c.y<=1)continue;let u=Oe(c.x,c.y-1,c.z),f=this.cells[u];if(f&&[22,23].includes(f)&&f!==o){this.set(c.x,c.y-1,c.z,3),this.fluidSources.delete(u);continue}if(s(u)){t.has(u)||(t.set(u,o),n.push([u,o,0]));continue}if(!(o===23&&l>=2))for(let[d,,m]of Ja.slice(0,4)){let g=c.x+d,x=c.z+m;if(g<1||x<1||g>=191||x>=191)continue;let p=Oe(g,c.y,x),h=this.cells[p];if([22,23].includes(h)&&h!==o){this.set(g,c.y,x,3),this.fluidSources.delete(p);continue}s(p)&&!t.has(p)&&(t.set(p,o),n.push([p,o,l+1]))}}for(let a of[...this.flowCells])if(!t.has(a)){let o=ts(a);[22,23].includes(this.cells[a])&&this.set(o.x,o.y,o.z,0)}this.flowCells.clear();for(let[a,o]of t){if(this.fluidSources.has(a))continue;let l=ts(a);this.cells[a]!==o&&this.set(l.x,l.y,l.z,o),this.flowCells.add(a)}},solveCircuits(){if(!this.features)return;let t=new Set,n=[];for(let[s,r]of this.features)r===58&&this.props.get(s)?.on&&(t.add(s),n.push(s));for(let s=0;s<n.length&&s<256;s++){let r=ts(n[s]);for(let[a,o,l]of Ja){let c=r.x+a,u=r.y+o,f=r.z+l;if(c<0||f<0||c>=192||f>=192||u<1||u>=30)continue;let d=Oe(c,u,f),m=this.cells[d];[57,58,13,20,59].includes(m)&&!t.has(d)&&(t.add(d),m===57&&n.push(d))}}for(let[s,r]of[...this.features])if([57,13,20,59].includes(r)){let a=ts(s),o=this.meta(a),l=t.has(s);if(!l&&!o.powered)continue;let c={...o,powered:l};if(r===13&&(c.open=l,this.setMeta(a,c),this.player&&this.collides(this.player.x,this.player.y,this.player.z)&&(c.open=!0)),r===20&&(c.lit=l),r===59){let u=c.rot||0,f=[0,1,0,-1][u],d=[-1,0,1,0][u],m={x:a.x+f,y:a.y,z:a.z+d},g={x:a.x+f*2,y:a.y,z:a.z+d*2},x=this.get(m.x,m.y,m.z);l&&!c.extended&&!this.smallCells.has(Oe(m.x,m.y,m.z))&&(x===0||bi(x)&&x!==11)&&!this.occupied(g.x,g.y,g.z)&&!this.overlaps(m.x,m.y,m.z)&&!this.overlaps(g.x,g.y,g.z)&&g.x>0&&g.z>0&&g.x<191&&g.z<191&&(x&&this.set(g.x,g.y,g.z,x),this.set(m.x,m.y,m.z,63),c.extended=!0),!l&&c.extended&&(x===63&&this.set(m.x,m.y,m.z,0),c.extended=!1)}this.setMeta(a,c)}},waterAt(t,n){let s=Math.floor(t),r=Math.floor(n);if(s<1||r<1||s>=191||r>=191)return null;for(let a=28;a>0;a--)if(this.get(s,a,r)===22&&!this.get(s,a+1,r))return a+.65;return this.surface(s,r)<5.12-1?5.12-.15:null},launchVehicle(t){let n=this.selected;if(![54,56].includes(n)||!t||!this.nearby(t)||!this.creative&&!this.inventory[n]||this.vehicles.length>=12)return!1;let s=t.x+.5,r=t.z+.5,a=this.waterAt(s,r),o=n===54?a:t.y+.1;return n===54&&a===null||n===56&&this.get(t.x,t.y,t.z)!==55||this.vehicles.some(l=>Math.hypot(l.x-s,l.z-r)<1)?!1:(this.creative||this.inventory[n]--,this.vehicles.push({type:n,x:s,y:o,z:r,yaw:this.player.yaw}),this.lifeDirty=!0,!0)},board(t){let n=this.vehicles[t];return!n||Math.hypot(n.x-this.player.x,n.z-this.player.z)>7?!1:(this.riding=t,Object.assign(this.player,{x:n.x,y:n.y+.4,z:n.z,vy:0}),!0)},dismount(){let t=this.vehicles[this.riding];if(!t)return!1;for(let n=1;n<=3;n++)for(let[s,,r]of Ja.slice(0,4)){let a=t.x+s*n,o=t.z+r*n,l=this.surface(Math.floor(a),Math.floor(o))+1.04;if(l>=5.12&&!this.collides(a,l,o))return Object.assign(this.player,{x:a,y:l,z:o,vy:0}),this.riding=null,!0}return this.notice="Aproxime-se da margem para desembarcar.",!1},drive(t,n){let s=this.vehicles[this.riding];if(!s){this.riding=null;return}let r=this.player,a=Math.max(1,Math.hypot(n.x||0,n.z||0)),o=s.type===54?6:8,l=((n.x||0)*Math.cos(r.yaw)+(n.z||0)*Math.sin(r.yaw))/a*t*o,c=(-(n.x||0)*Math.sin(r.yaw)+(n.z||0)*Math.cos(r.yaw))/a*t*o;for(let u of["x","z"]){let f=s.x+(u==="x"?l:0),d=s.z+(u==="z"?c:0),m=s.type===54?this.waterAt(f,d):this.get(Math.floor(f),Math.round(s.y),Math.floor(d))===55?s.y:null;m!==null&&!this.collides(f,m+.35,d)&&(s.x=f,s.z=d,s.y=m)}(l||c)&&(s.yaw=Math.atan2(-l,-c)),Object.assign(r,{x:s.x,y:s.y+.4,z:s.z,vy:0})},tickLife(t,n=!0){if(e.tickLife.call(this,t,n),this.gardenTime+=t,this.flowTime+=t,n&&!this.creative&&(this.vitals.hunger=Math.max(0,this.vitals.hunger-t*.065),this.vitals.hunger>60&&(this.vitals.health=Math.min(100,this.vitals.health+t*.5)),this.vitals.hunger<=0&&(this.vitals.health=Math.max(25,this.vitals.health-t*.2))),this.gardenTime>=1){let s=this.gardenTime;this.gardenTime=0;for(let[r,a]of[...this.features])if([37,38].includes(a)){let o=ts(r),l={...this.meta(o)};if(this.get(o.x,o.y-1,o.z)!==33){this.set(o.x,o.y,o.z,0);continue}l.growth=Math.min(180,(l.growth||0)+s*(this.irrigated(o)?1.5:1));let c=Math.min(3,Math.floor(l.growth/60));c!==l.stage&&(l.stage=c,this.lifeDirty=!0),this.props.set(r,l)}for(let r of[...this.animals])r.babyDue&&r.babyDue<=this.lifeTime&&this.animals.length+(this.companions?.length||0)<40&&(r.babyDue=0,this.animals.push({...r,bornAt:this.lifeTime,breedAt:this.lifeTime+240,loveUntil:0,feedAt:this.lifeTime+5,milkAt:this.lifeTime+240,turn:0}),this.lifeDirty=!0,this.notice="Nasceu um filhote de "+{capybara:"capivara",cow:"vaca",pig:"porco",ox:"boi",sheep:"ovelha"}[r.type]+"!")}this.flowTime>=1&&(this.flowTime=0,this.spreadFluids())}}}var bl={...Ll,farmer:[{name:"Trocar 6 trigos por 4 cenouras",cost:{31:6},out:36,count:4},{name:"Trocar 3 cenouras por 6 sementes",cost:{36:3},out:34,count:6},{name:"Trocar 4 trigos por 2 p\xE3es",cost:{31:4},out:32,count:2}],miner:[{name:"Trocar 8 carv\xF5es por 2 barras de ferro",cost:{43:8},out:44,count:2},{name:"Trocar 4 barras de ouro por 1 cristal",cost:{45:4},out:46,count:1}]};var Qt=i=>Number.isFinite(i),Ws=(i,e,t)=>Math.max(e,Math.min(t,i)),Nh={initLife(i){this.props=new Map,this.coins=Math.floor(Ws(Qt(i?.coins)?i.coins:180,0,999999)),this.lifeTime=Qt(i?.lifeTime)?i.lifeTime:0,this.lifeDirty=!0;for(let e of hn)this.inventory[e]===void 0&&(this.inventory[e]=0);if(!i?.expansion)Object.assign(this.inventory,{12:12,13:2,14:20,15:1,16:1,17:2,18:1,19:1,20:2,21:1,24:1,25:1,26:1,31:10});else for(let e of hn)e>11&&(this.inventory[e]=Math.floor(Ws(Number(i.inventory?.[e])||0,0,9999)));for(let e of Array.isArray(i?.props)?i.props:[]){let[t,n]=Array.isArray(e)?e:[];if(!Number.isInteger(t)||!n||typeof n!="object"||t<0||t>=this.cells.length||this.cells[t]<12||this.cells[t]>63)continue;let s={rot:Math.floor(Ws(Number(n.rot)||0,0,3)),open:n.open===!0,lit:n.lit!==!1,stored:{}};if(this.cells[t]===18)for(let r of hn)s.stored[r]=Math.floor(Ws(Number(n.stored?.[r])||0,0,9999));if(this.cells[t]===19&&tn.some(r=>r.id===n.job?.id)){let r=tn.find(a=>a.id===n.job.id);s.job={id:r.id,remaining:Ws(Number(n.job.remaining)||0,0,r.seconds)}}this.props.set(t,s)}if(this.animals=[],i?.expansion&&Array.isArray(i.animals))for(let e of i.animals.slice(0,40))!["cow","pig","ox","sheep","capybara"].includes(e.type)||!Qt(e.x)||!Qt(e.z)||e.x<1||e.z<1||e.x>190||e.z>190||this.animals.push({creatureId:Number.isSafeInteger(e.creatureId)?e.creatureId:0,tamed:e.tamed===!0,stay:e.stay===!0,follow:e.follow===!0,type:e.type,x:e.x,z:e.z,y:this.surface(Math.floor(e.x),Math.floor(e.z))+1,yaw:Qt(e.yaw)?e.yaw:0,turn:0,feedAt:Qt(e.feedAt)?e.feedAt:0,milkAt:Qt(e.milkAt)?e.milkAt:0,bornAt:Qt(e.bornAt)?e.bornAt:-300,breedAt:Qt(e.breedAt)?e.breedAt:0,loveUntil:Qt(e.loveUntil)?e.loveUntil:0,babyDue:Qt(e.babyDue)?e.babyDue:0,shearAt:Qt(e.shearAt)?e.shearAt:0});else for(let[e,t]of["cow","pig","ox","sheep","cow","pig"].entries())for(let n=0;n<200;n++){let s=12+(e*5+n*3)%22,r=7+(e*7+n*5)%27,a=this.surface(s,r);if(a>=5&&this.get(s,a,r)!==5&&this.get(s,a,r)!==4){this.animals.push({type:t,x:s+.5,z:r+.5,y:a+1,yaw:e,turn:0,feedAt:0,milkAt:0});break}}},meta(i){return this.props.get(Oe(i.x,i.y,i.z))||{rot:0}},setMeta(i,e){this.props.set(Oe(i.x,i.y,i.z),e),this.lifeDirty=!0},nearby(i){return i&&Math.hypot(i.x+.5-this.player.x,i.y+.5-(this.player.y+1.5),i.z+.5-this.player.z)<=7},occupied(i,e,t){if(this.get(i,e,t)||this.smallCells?.has(Oe(i,e,t)))return!0;let n=this.get(i,e-1,t);return n>=12&&n<=21&&On(n)>1},collisionAt(i,e,t){if(i<.32||t<.32||i>192-.32||t>192-.32)return!0;for(let n=Math.floor(i-.29);n<=Math.floor(i+.29);n++)for(let s=Math.floor(e+.02)-1;s<=Math.floor(e+1.74);s++)for(let r=Math.floor(t-.29);r<=Math.floor(t+.29);r++)for(let a of this.detailBoxes(n,s,r))if(i+.29>n+a[0]&&i-.29<n+a[3]&&e+1.74>s+a[1]&&e+.02<s+a[4]&&t+.29>r+a[2]&&t-.29<r+a[5])return!0;return!1},stepMove(i,e){let t=this.player;if(!this.collides(i,t.y,e)){t.x=i,t.z=e;return}if(this.creative||t.vy>0||!this.collides(t.x,t.y-.12,t.z))return;let n=!1;for(let s=Math.floor(i-.3);s<=Math.floor(i+.3);s++)for(let r=Math.floor(e-.3);r<=Math.floor(e+.3);r++)for(let a=Math.floor(t.y)-1;a<=Math.floor(t.y+.3);a++)this.get(s,a,r)===12&&(n=!0);n&&!this.collides(t.x,t.y+.27,t.z)&&!this.collides(i,t.y+.27,e)&&(t.x=i,t.z=e,t.y+=.27,t.vy=0)},buy(i){let e=me[i],t=e?.pack||1;return!e?.price||!hn.includes(i)||this.coins<e.price||this.inventory[i]+t>9999?!1:(this.coins-=e.price,this.inventory[i]+=t,!0)},sell(i,e=1){return!hn.includes(i)||!Number.isInteger(e)||e<1||this.inventory[i]<e||this.creative?!1:(this.inventory[i]-=e,this.coins=Math.min(999999,this.coins+Ks(i)*e),i===30&&(this.inventory[24]=Math.min(9999,this.inventory[24]+e)),!0)},use(i){let e=this.get(i.x,i.y,i.z);if(!this.nearby(i))return"Aproxime-se para usar.";let t={...this.meta(i)};if(e===13){t.open=!t.open;let n=this.meta(i);return this.setMeta(i,t),this.collides(this.player.x,this.player.y,this.player.z)?(this.setMeta(i,n),"Afaste-se um pouco da porta."):t.open?"Porta aberta.":"Porta fechada."}if(e===20)return t.lit=t.lit===!1,this.setMeta(i,t),t.lit?"Lumin\xE1ria acesa.":"Lumin\xE1ria apagada.";if(e===15)return this.time=Math.ceil(this.time/(Math.PI*240))*Math.PI*240,"Voc\xEA descansou. Um novo dia come\xE7ou!";if(e===17){let n=.5,s=.34;for(let a=0;a<(t.rot||0);a++)[n,s]=[s,1-n];let r=i.y+.55;return this.collides(i.x+n,r,i.z+s)?"Deixe espa\xE7o livre em volta da cadeira.":(Object.assign(this.player,{x:i.x+n,y:r,z:i.z+s,vy:0}),this.seated=!0,"Voc\xEA sentou! Mova o direcional para levantar.")}return e===16?"Sua mesa est\xE1 pronta. Selecione um p\xE3o na mochila e toque em Usar para comer.":null},chest(i,e,t,n){if(!this.nearby(i)||this.get(i.x,i.y,i.z)!==18||!hn.includes(e)||!Number.isInteger(t)||t<1)return!1;let s={...this.meta(i),stored:{...this.meta(i).stored}},r=n==="put"?this.inventory:s.stored,a=n==="put"?s.stored:this.inventory;return(r[e]||0)<t||(a[e]||0)+t>9999?!1:(r[e]-=t,a[e]=(a[e]||0)+t,this.setMeta(i,s),!0)},smelt(i,e){let t=tn.find(s=>s.id===e),n={...this.meta(i)};if(!t||!this.nearby(i)||this.get(i.x,i.y,i.z)!==19||n.job||Object.entries(t.cost).some(([s,r])=>this.inventory[s]<r))return!1;for(let[s,r]of Object.entries(t.cost))this.inventory[s]-=r;return n.job={id:t.id,remaining:t.seconds},this.setMeta(i,n),!0},collectSmelt(i){let e={...this.meta(i)},t=tn.find(n=>n.id===e.job?.id);return!t||!this.nearby(i)||this.get(i.x,i.y,i.z)!==19||e.job.remaining>0||this.inventory[t.out]+t.count>9999?!1:(this.inventory[t.out]+=t.count,delete e.job,this.stats.crafted+=t.count,this.setMeta(i,e),!0)},bucket(i){let e=this.selected;if(![24,25,26].includes(e)||!this.creative&&!this.inventory[e]||!i)return!1;if(e===24){let s=this.get(i.x,i.y,i.z);if(![22,23].includes(s)&&!i.lake||!this.nearby(i))return!1;let r=s===23?26:25;return this.inventory[r]>=9999?!1:(i.lake||this.set(i.x,i.y,i.z,0),this.creative||this.inventory[24]--,this.inventory[r]++,this.selected=r,!0)}let t=i.place,n=e===25?22:23;if(!t||!this.nearby(t)||this.occupied(t.x,t.y,t.z)||this.overlaps(t.x,t.y,t.z)||!this.get(t.x,t.y-1,t.z)||!this.set(t.x,t.y,t.z,n))return!1;this.creative||(this.inventory[e]--,this.inventory[24]=Math.min(9999,this.inventory[24]+1));for(let[s,r]of[[1,0],[-1,0],[0,1],[0,-1]])this.get(t.x+s,t.y,t.z+r)===(n===22?23:22)&&(this.set(t.x,t.y,t.z,3),this.set(t.x+s,t.y,t.z+r,3));return!0},spawnAnimal(i,e){let t=me[e];return!t?.animal||!this.nearby(i)||this.animals.length+(this.companions?.length||0)>=40||!this.creative&&!this.inventory[e]||this.occupied(i.x,i.y,i.z)||!this.get(i.x,i.y-1,i.z)||i.y<5.12||this.collides(i.x+.5,i.y+.03,i.z+.5)?!1:(this.creative||this.inventory[e]--,this.animals.push({type:t.animal,x:i.x+.5,y:i.y,z:i.z+.5,yaw:this.player.yaw,turn:0,feedAt:0,milkAt:0}),this.lifeDirty=!0,!0)},useAnimal(i){let e=this.animals[i];return!e||Math.hypot(e.x-this.player.x,e.y-this.player.y,e.z-this.player.z)>7?"Aproxime-se do animal.":e.type==="cow"&&this.selected===24&&this.inventory[24]?this.lifeTime<e.milkAt?"A vaca precisa descansar: "+Math.ceil(e.milkAt-this.lifeTime)+" s.":this.inventory[30]>=9999?"Sua mochila est\xE1 cheia.":(this.inventory[24]--,this.inventory[30]++,e.milkAt=this.lifeTime+45,"Leite coletado! Venda no marketplace; o balde vazio volta para voc\xEA."):this.selected===31&&this.inventory[31]?this.lifeTime<e.feedAt?"J\xE1 est\xE1 alimentado! Aguarde "+Math.ceil(e.feedAt-this.lifeTime)+" s.":(this.inventory[31]--,e.feedAt=this.lifeTime+30,this.creative||(this.coins+=5),"Animal alimentado! "+(this.creative?"":" +5 integros")):e.type==="cow"?"Selecione trigo para alimentar ou um balde vazio para tirar leite.":"Selecione trigo na mochila para alimentar."},tickLife(i,e=!0){this.lifeTime+=i;for(let[n,s]of this.props)s.job?.remaining>0&&(s.job.remaining=Math.max(0,s.job.remaining-i),s.job.remaining||(this.lifeDirty=!0));if(e)for(let n of this.animals){if(n.tamed&&n.stay)continue;let s=n.tamed&&n.follow&&Math.hypot(n.x-this.player.x,n.z-this.player.z)>2.5;if(n.tamed&&n.follow&&!s)continue;n.turn-=i,n.turn<=0&&(n.yaw+=Math.sin(this.lifeTime*.7+n.x)*1.4,n.turn=2.4),s&&(n.yaw=Math.atan2(n.x-this.player.x,n.z-this.player.z));let r=s?1.8:n.type==="pig"?.42:.3,a=n.x-Math.sin(n.yaw)*r*i,o=n.z-Math.cos(n.yaw)*r*i,l=this.surface(Math.floor(a),Math.floor(o))+1,c=n.type==="capybara"&&l<5.12;(l>5.12||c)&&Math.abs((c?5.12-.45:l)-n.y)<(n.type==="capybara"?1.5:1.1)&&!this.collides(a,l+.02,o)?(n.x=a,n.z=o,n.y=c?5.12-.45:l):(n.yaw+=1.7,n.turn=1)}let t=this.player;e&&!this.creative&&this.get(Math.floor(t.x),Math.floor(t.y+.1),Math.floor(t.z))===23&&(this.home(),this.notice="A lava estava quente! Voc\xEA voltou ao in\xEDcio sem perder seus itens.")},lifeSave(){return{expansion:1,coins:this.coins,lifeTime:this.lifeTime,props:[...this.props],animals:this.animals.map(i=>({...i}))}}};var Xs=(i,e,t)=>Math.max(e,Math.min(t,i)),hg=(i,e)=>{let t=Math.sin(i*127.1+e*311.7+42)*43758.5453;return t-Math.floor(t)},Fh=(i,e)=>Math.floor(6+Math.sin(i*.16)*1.8+Math.cos(e*.17)*1.7+(i>29?Math.max(0,1-Math.hypot(i-38,e-33)/18)*10:0)),Ot=class{constructor(e){if(e=Lh(e),this.cells=new Uint8Array(36864*30),this.edits=new Map,this.inventory={1:24,2:24,3:24,4:12,5:12,6:16,7:12,8:12,9:24,10:8},this.stats={mined:0,placed:0,crafted:0},this.selected=1,this.creative=!1,this.time=0,this.dirty=new Set,this.generate(),Dh(this),Dl(this,e),this.base=this.cells.slice(),e?.version===3){for(let t of Array.isArray(e.edits)?e.edits:[])Array.isArray(t)&&Number.isInteger(t[0])&&t[0]>=36864&&t[0]<this.cells.length&&Number.isInteger(t[1])&&t[1]>=0&&(me[t[1]]||t[1]===0)&&t[1]!==11&&(this.cells[t[0]]=t[1],this.edits.set(t[0],t[1]));for(let t in this.inventory)this.inventory[t]=Number.isFinite(e.inventory?.[t])?Math.floor(Xs(e.inventory[t],0,9999)):this.inventory[t];for(let t in this.stats)this.stats[t]=Math.floor(Xs(Number(e.stats?.[t])||0,0,1e6));me[e.selected]&&e.selected!==11&&(this.selected=e.selected),this.creative=e.creative===!0,this.time=Number.isFinite(e.time)?Math.max(0,e.time):0}if(this.initDetail(e),this.initLife(e),this.initAdventure(e),this.initFineFluids(e),this.lastSafe=this.findDrySpawn(),this.jumpBuffer=0,this.player={...this.lastSafe,vy:0,yaw:Math.PI,pitch:-.05,grounded:!1},e?.player){let t=e.player;["x","y","z","yaw","pitch"].every(n=>Number.isFinite(t[n]))&&t.x>1&&t.x<191&&t.z>1&&t.z<191&&t.y>1&&t.y<42&&!this.collides(t.x,t.y,t.z)&&Object.assign(this.player,{x:t.x,y:t.y,z:t.z,yaw:t.yaw,pitch:Xs(t.pitch,-1.4,1.4)})}this.initVillages(e)}get(e,t,n){return t<0?11:e<0||n<0||e>=192||n>=192||t>=30?0:this.cells[Oe(e,t,n)]}generate(){for(let e=0;e<48;e++)for(let t=0;t<48;t++){let n=Fh(e,t);for(let s=0;s<=n;s++)this.cells[Oe(e,s,t)]=s===0?11:s<n-2?3:s<n?2:n<6?6:n>12?10:1}for(let e=3;e<45;e++)for(let t=3;t<45;t++){let n=Fh(e,t);if(!(n<6||n>11||Math.hypot(e-23,t-10)<5||hg(e,t)>.025)){for(let s=n+1;s<n+5;s++)this.cells[Oe(e,s,t)]=4;for(let s=-2;s<=2;s++)for(let r=-2;r<=2;r++)for(let a=3;a<=5;a++){if(Math.abs(s)+Math.abs(r)+(a===5?1:0)>3)continue;let o=Oe(e+s,n+a,t+r);this.cells[o]||(this.cells[o]=5)}}}}surface(e,t){for(let n=29;n>=0;n--)if(this.get(e,n,t)&&!me[this.get(e,n,t)]?.fluid||this.smallCells?.has(Oe(e,n,t)))return n;return 0}set(e,t,n,s){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||e<0||n<0||e>=192||n>=192||t<=0||t>=30||!Number.isInteger(s)||s<0||!me[s]&&s!==0||s===11)return!1;let r=Oe(e,t,n);this.smallCells?.delete(r),this.props?.delete(r),this.lifeDirty=!0,this.cells[r]=s,this.trackFeature?.(r,s),this.base[r]===s?this.edits.delete(r):this.edits.set(r,s);for(let[a,o]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]]){let l=Math.floor((e+a)/8),c=Math.floor((n+o)/8);l>=0&&c>=0&&l<Math.ceil(192/8)&&c<Math.ceil(192/8)&&this.dirty.add(l+","+c)}return!0}collides(e,t,n){return this.collisionAt(e,t,n)}overlaps(e,t,n){let s=this.player;return e+1>s.x-.3&&e<s.x+.3&&t+1>s.y&&t<s.y+1.76&&n+1>s.z-.3&&n<s.z+.3}mine(e){let t=this.get(e.x,e.y,e.z),n=this.meta(e);return!t||t===11||me[t]?.fluid||!this.nearby(e)||n.job||Object.values(n.stored||{}).some(s=>s>0)||!this.set(e.x,e.y,e.z,0)?!1:(this.creative||(this.inventory[t]=Math.min(9999,(this.inventory[t]||0)+1)),this.stats.mined++,t)}place(e){let t=this.selected;return me[t]?.animal?this.spawnAnimal(e,t):!e||me[t]?.tool||me[t]?.fluid||this.occupied(e.x,e.y,e.z)||this.overlaps(e.x,e.y,e.z)||!this.creative&&!this.inventory[t]||!this.nearby(e)||On(t)>1&&(e.y+2>=30||this.occupied(e.x,e.y+1,e.z)||this.overlaps(e.x,e.y+1,e.z))||t>=12&&!this.get(e.x,e.y-1,e.z)||!this.set(e.x,e.y,e.z,t)?!1:(t>=12&&this.setMeta(e,{rot:((Math.round(this.player.yaw/(Math.PI/2))+2)%4+4)%4,open:!1,lit:!0}),this.creative||this.inventory[t]--,this.stats.placed++,!0)}craft(e){let t=Mi.find(n=>n.id===e);if(!t||Object.entries(t.cost).some(([n,s])=>(this.inventory[n]||0)<s)||this.inventory[t.out]+t.count>9999)return!1;for(let[n,s]of Object.entries(t.cost))this.inventory[n]-=s;return this.inventory[t.out]+=t.count,this.stats.crafted+=t.count,!0}findDrySpawn(){let e=null,t=1/0;for(let n=2;n<190;n++)for(let s=2;s<190;s++){let r=this.surface(n,s),a=this.get(n,r,s),o=r+1.05;if(o<5.12+.2||a===4||a===5||this.collides(n+.5,o,s+.5))continue;let l=(n-23)**2+(s-10)**2;l<t&&(t=l,e={x:n+.5,y:o,z:s+.5})}return e||{x:23.5,y:this.surface(23,10)+1.05,z:10.5}}waterSurface(){let e=this.player;for(let t=Math.floor(e.y+.1);t<=Math.floor(e.y+1);t++)if(this.get(Math.floor(e.x),t,Math.floor(e.z))===22)return t+.8;return 5.12}inWater(){return this.player.y<this.waterSurface()+.05}jump(){this.jumpBuffer=.16,!this.creative&&(this.player.grounded||this.inWater())&&(this.player.vy=Math.max(this.player.vy,9),this.player.grounded=!1,this.jumpBuffer=0)}home(){this.riding=null,this.seated=!1,this.lastSafe=this.findDrySpawn(),this.jumpBuffer=0,Object.assign(this.player,{...this.lastSafe,vy:0,grounded:!1})}update(e,t={}){if(e=Xs(e,0,.05),this.time+=e,this.riding!==null&&this.riding!==void 0){this.drive(e,t);return}let n=this.player,s=t.x||0,r=t.z||0;(s||r||t.up)&&(this.seated=!1);let a=Math.hypot(s,r);a>1&&(s/=a,r/=a);let o=t.sprint?7.2:4.7,l=(s*Math.cos(n.yaw)+r*Math.sin(n.yaw))*o*e,c=(-s*Math.sin(n.yaw)+r*Math.cos(n.yaw))*o*e,u=Math.max(1,Math.ceil(Math.hypot(l,c)/.18));for(let f=0;f<u;f++)this.stepMove(n.x+l/u,n.z),this.stepMove(n.x,n.z+c/u);if(this.creative){n.vy=0;let f=(t.up||0)*o*e;n.y+f>1&&n.y+f<40&&!this.collides(n.x,n.y+f,n.z)&&(n.y+=f),n.grounded=!1}else{let f=this.inWater(),d=t.up>0||this.jumpBuffer>0;if(d&&(f||n.grounded)&&(n.vy=Math.max(n.vy,9),this.jumpBuffer=0),f)if(d||n.vy>3)n.vy-=5*e;else{let x=(this.waterSurface()-.65-n.y)*14-n.vy*5;n.vy=Xs(n.vy+x*e,-2,3)}else n.vy=Math.max(-24,n.vy-24*e);this.jumpBuffer=Math.max(0,this.jumpBuffer-e);let m=n.vy*e,g=Math.max(1,Math.ceil(Math.abs(m)/.15));n.grounded=!1;for(let x=0;x<g;x++)if(!this.collides(n.x,n.y+m/g,n.z))n.y+=m/g;else{n.vy<0&&(n.grounded=!0),n.vy=0;break}}n.y<-3&&this.home()}serialize(){return{version:3,...this.lifeSave(),...this.adventureSave(),...this.detailSave(),...this.fineFluidSave(),...this.villageSave(),edits:[...this.edits],inventory:{...this.inventory},selected:this.selected,creative:this.creative,stats:{...this.stats},time:this.time,player:{...this.player}}}};Object.assign(Ot.prototype,Nh);Object.assign(Ot.prototype,Uh(Ot.prototype));Object.assign(Ot.prototype,Ih());Object.assign(Ot.prototype,wh(Ot.prototype));Object.assign(Ot.prototype,Ul(Ot.prototype));function Oh(i){let e=new Ot;for(let n=0;n<192;n++)for(let s=0;s<192;s++)for(let r=0;r<30;r++){let a=Oe(n,r,s),o=e.cells[a];e.cells[a]=n>=96||s>=96?0:o<=11?o:o>=39&&o<=42?3:0}for(let n=0;n<48;n++)for(let s=0;s<48;s++)for(let r=0;r<30;r++)e.cells[Oe(n,r,s)]=i.get(n,r,s);e.base=e.cells.slice(),e.edits.clear(),e.features.clear(),e.props.clear(),e.fluidSources.clear(),e.flowCells.clear(),e.animals=[],e.vehicles=[],e.villagers=[],e.creative=!0,e.riding=null,e.seated=!1,e.selected=1,e.player={...i.player},e.lastSafe={...i.lastSafe};let t=e.update.bind(e);return e.update=(n,s)=>{t(n,s),e.player.x=Math.max(.35,Math.min(96-.35,e.player.x)),e.player.z=Math.max(.35,Math.min(96-.35,e.player.z))},e}var tt=32,Ka=128;function zh(){let i=document.createElement("canvas");i.width=tt*Ka,i.height=tt;let e=i.getContext("2d");for(let n=1;n<me.length;n++){let s=new Ne(n>=39&&n<=42?8754587:me[n].color),r=n*tt;e.fillStyle="#"+s.getHexString(),e.fillRect(r,0,tt,tt);for(let a=0;a<190;a++){let o=(a*7+n*3)%tt,l=(a*11+Math.floor(a/tt)*3)%tt;e.fillStyle=a%2?"#ffffff10":"#00000010",e.fillRect(r+o,l,1+a%2,1+a%3)}if(n>=39&&n<=42){e.fillStyle="#"+me[n].color.toString(16).padStart(6,"0");for(let a=0;a<7;a++)e.fillRect(r+3+a*11%25,3+a*7%25,3,3)}if(n===33){e.fillStyle="#49372b";for(let a=3;a<tt;a+=7)e.fillRect(r,a,tt,2)}if(n===4||n===9){e.fillStyle="#45351f30";for(let a=4;a<tt;a+=8)e.fillRect(r,a,tt,1);if(n===4)for(let a=4;a<tt;a+=7)e.fillRect(r+a,0,1,tt)}if(n===7){e.fillStyle="#efc5a480";for(let a=7;a<tt;a+=8){e.fillRect(r,a,tt,1);for(let o=a%3*4;o<tt;o+=16)e.fillRect(r+o,a-7,1,7)}}n===8&&(e.fillStyle="#d8ffffa0",e.fillRect(r,0,tt,1),e.fillRect(r,0,1,tt),e.fillRect(r+31,0,1,tt),e.fillRect(r,31,tt,1),e.fillStyle="#ffffff55",e.fillRect(r+5,6,2,12))}let t=new ci(i);return t.magFilter=Wt,t.minFilter=mn,t.anisotropy=4,t.colorSpace=_t,{details:new Xt({vertexColors:!0,side:Tt}),solid:new Xt({map:t,vertexColors:!0}),glass:new Xt({map:t,vertexColors:!0,transparent:!0,opacity:.38,depthWrite:!1,side:Tt})}}var Sl=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.8},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.68},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.88},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.74}],ug=new Cs(.49,1),fg=new As(.19,.26,1,9,1,!1),Bh=(i,e,t,n,s)=>[4,5].includes(s)&&i.base?.[Oe(e,t,n)]===s&&!i.edits.has(Oe(e,t,n));function kh(i,e,t,n=!1){let s=[],r=[],a=[],o=[],l=[];function c(d,m,g,x,p,h=1){let y=d.getAttribute("position"),E=d.getAttribute("normal"),v=s.length/3;for(let C=0;C<y.count;C++)s.push(m+y.getX(C),g+y.getY(C),x+y.getZ(C)),r.push(E.getX(C),E.getY(C),E.getZ(C)),a.push((p*tt+8+C%3*7)/(tt*Ka),.2+C%3*.3),o.push(h,h,h);if(d.index)for(let C of d.index.array)l.push(v+C);else for(let C=0;C<y.count;C++)l.push(v+C)}function u(d,m,g,x,p,h){let y=s.length/3,E=(h===1||h===10)&&p.n[1]!==1?2:h,v=(E*tt+1)/(tt*Ka),C=(E*tt+tt-1)/(tt*Ka),w=.96+.04*Math.sin(d*31+m*17+g*13);for(let P=0;P<4;P++){let A=p.p[P];s.push(d+A[0]*x,m+A[1]*x,g+A[2]*x),r.push(...p.n),a.push(P===0||P===3?v:C,P<2?.03:.97);let b=p.shade*w;o.push(b,b,b)}l.push(y,y+1,y+2,y,y+2,y+3)}for(let d=e*8;d<Math.min(192,e*8+8);d++)for(let m=t*8;m<Math.min(192,t*8+8);m++)for(let g=0;g<30;g++){let x=i.get(d,g,m),p=i.smallCells?.get(Oe(d,g,m));if(!n&&Bh(i,d,g,m,x)){x===4?c(fg,d+.5,g+.5,m+.5,4):Sl.some(h=>i.get(d+h.n[0],g+h.n[1],m+h.n[2])!==5)&&c(ug,d+.5,g+.5,m+.5,5,.92+.08*Math.sin(d+m));continue}if(p){for(let h=0;h<8;h++){let y=p[h];if(!y||y===8!==n)continue;let E=d*2+h%2,v=g*2+Math.floor(h/4),C=m*2+Math.floor(h/2)%2;for(let w of Sl){let P=i.smallAt({x:E+w.n[0],y:v+w.n[1],z:C+w.n[2]});bi(P)&&!(P===8&&y!==8)||u(E*.5,v*.5,C*.5,.5,w,y)}}continue}if(!(!bi(x)||x===8!==n))for(let h of Sl){let y=d+h.n[0],E=g+h.n[1],v=m+h.n[2],C=i.get(y,E,v);if(!(bi(C)&&!(C===8&&x!==8)&&!Bh(i,y,E,v,C)))for(let w=0;w<2;w++)for(let P=0;P<2;P++){let A=h.n[0]?[h.n[0]>0?.5:0,w*.5,P*.5]:h.n[1]?[w*.5,h.n[1]>0?.5:0,P*.5]:[w*.5,P*.5,h.n[2]>0?.5:0];u(d+A[0],g+A[1],m+A[2],.5,h,x)}}}let f=new Et;return f.setAttribute("position",new Ke(s,3)),f.setAttribute("normal",new Ke(r,3)),f.setAttribute("uv",new Ke(a,2)),f.setAttribute("color",new Ke(o,3)),f.setIndex(l),f.computeBoundingSphere(),f}function Vh(i,e,t){let n=[],s=[],r=(o,l)=>{n.push(...o.flat());for(let c=0;c<3;c++)s.push(...l)};for(let o=e*8;o<Math.min(192,e*8+8);o++)for(let l=t*8;l<Math.min(192,t*8+8);l++){let c=i.surface(o,l);if(i.get(o,c,l)!==1||i.get(o,c+1,l)||(o*17+l*31)%9>1)continue;let u=c+1.008;for(let f=0;f<3;f++){let d=o+.2+f*.22,m=l+.25+f%2*.3,g=.13+(o+l+f)%4*.04;r([[d-.04,u,m],[d+.04,u,m],[d+.06,u+g,m-.025]],[.3,.53,.19]),r([[d,u,m-.04],[d,u,m+.04],[d-.025,u+g,m+.05]],[.43,.65,.26])}if((o+l)%7===0){let f=o+.6,d=l+.5,m=u+.25,g=o%2?[.98,.78,.38]:[.88,.6,.76];r([[f-.07,m,d],[f+.07,m,d],[f,m+.1,d+.03]],g),r([[f,m,d-.07],[f,m,d+.07],[f+.03,m+.1,d]],g)}}let a=new Et;return a.setAttribute("position",new Ke(n,3)),a.setAttribute("color",new Ke(s,3)),a.computeVertexNormals(),a.computeBoundingSphere(),a}var qs=new z;function en(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;qs.copy(e),qs[n]=0,qs.normalize();let c=.5*a/(a+o),u=1-qs.angleTo(i)/l;return Math.sign(qs[t])===1?u*c:o/(a+o)+c+c*(1-u)}var ja=class i extends Ft{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,g=f.length/6,x=new z,p=.5/a;for(let h=0,y=0;h<f.length;h+=3,y+=2)switch(l.fromArray(f,h),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[h+0]=u.x*Math.sign(l.x)+c.x*r,f[h+1]=u.y*Math.sign(l.y)+c.y*r,f[h+2]=u.z*Math.sign(l.z)+c.z*r,d[h+0]=c.x,d[h+1]=c.y,d[h+2]=c.z,Math.floor(h/g)){case 0:x.set(1,0,0),m[y+0]=en(x,c,"z","y",r,n),m[y+1]=1-en(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),m[y+0]=1-en(x,c,"z","y",r,n),m[y+1]=1-en(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),m[y+0]=1-en(x,c,"x","z",r,e),m[y+1]=en(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),m[y+0]=1-en(x,c,"x","z",r,e),m[y+1]=1-en(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),m[y+0]=1-en(x,c,"x","y",r,e),m[y+1]=1-en(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),m[y+0]=en(x,c,"x","y",r,e),m[y+1]=1-en(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var dg=i=>new Xt({color:i});function $s(i,e=.5){let t=new Map;return(n,s,r,a,o,l,c,u=!1)=>{let f=a+":"+u;if(!t.has(f)){let m=dg(a);u&&(m.emissive=new Ne(a),m.emissiveIntensity=.7),t.set(f,m)}let d=new dt(new ja(n,s,r,1,Math.min(n,s,r)*.16),t.get(f));return d.position.set(o-e,l,c-e),i.add(d),d}}function El(i,e={}){let t=new Rt,n=$s(t),s=12225366,r=7426105,a=16116174;if(i===12)for(let o=0;o<4;o++)n(1,(o+1)*.25,.25,s,.5,(o+1)*.125,(o+.5)*.25),n(.98,.035,.23,14661245,.5,(o+1)*.25+.008,(o+.5)*.25);if(i===13){let o=new Rt,l=$s(o,0);o.position.set(-.5,0,-.5),l(1,1.92,.12,s,.5,.96,.06);for(let c of[.11,.89])l(.09,1.84,.14,r,c,.96,.06);for(let c of[.12,1.02,1.81])l(.85,.08,.14,r,.5,c,.06);for(let c of[.3,.65])l(.2,.47,.015,11064528,c,1.39,-.01);l(.08,.09,.1,16241522,.83,.92,-.03),e.open&&(o.rotation.y=-Math.PI/2,o.position.x+=.12),t.add(o)}if(i===14){for(let[o,l]of[[.5,.5]])n(.2,1.35,.2,s,o,.675,l),n(.25,.08,.25,a,o,1.36,l);for(let o of[.43,.93])n(1,.13,.1,s,.5,o,.5),n(.1,.13,1,s,.5,o,.5)}if(i===15){n(.9,.18,.94,r,.5,.18,.5),n(.87,.17,.9,a,.5,.36,.5),n(.88,.08,.59,14182785,.5,.49,.64),n(.67,.1,.24,16777197,.5,.51,.2),n(.9,.65,.07,s,.5,.325,.04);for(let o of[.12,.88])for(let l of[.14,.86])n(.1,.22,.1,s,o,.11,l)}if(i===16){n(.96,.15,.96,s,.5,.76,.5);for(let o of[.15,.85])for(let l of[.15,.85])n(.11,.7,.11,r,o,.35,l);n(.23,.02,.23,a,.5,.85,.5),n(.11,.12,.11,8630437,.7,.91,.38)}if(i===17){for(let o of[.2,.8])for(let l of[.2,.8])n(.11,.47,.11,r,o,.235,l);n(.72,.13,.72,9221280,.5,.48,.5);for(let o of[.2,.8])n(.1,.75,.1,s,o,.79,.8);n(.69,.28,.08,9221280,.5,1,.8)}if(i===18){n(.85,.67,.79,s,.5,.37,.5),n(.88,.14,.82,13409375,.5,.76,.5);for(let o of[.15,.85])n(.08,.8,.84,r,o,.4,.5);n(.12,.16,.05,16374128,.5,.58,.07)}if(i===19){n(1,1,1,8095112,.5,.5,.5);for(let o of[.16,.52,.85])n(.99,.045,1.01,5463910,.5,o,.5);if(n(.61,.38,.025,1780020,.5,.38,-.014),n(.58,.15,.025,1780020,.5,.82,-.014),e.job?.remaining>0){for(let o=0;o<3;o++)n(.13,.16+o%2*.12,.035,o%2?16765783:16745018,.3+o*.19,.3+o%2*.06,-.035);n(.35,.08,.035,16769927,.5,.23,-.036)}else e.job&&n(.38,.13,.035,10218428,.5,.35,-.035)}if(i===20){n(.42,.1,.42,r,.5,.05,.5),n(.1,1.1,.1,r,.5,.6,.5),n(.42,.38,.42,e.lit===!1?7633260:16766837,.5,1.24,.5,e.lit!==!1),n(.5,.08,.5,r,.5,1.45,.5);for(let o of[.3,.7])for(let l of[.3,.7])n(.04,.4,.04,r,o,1.24,l)}if(i===21){n(1,.72,.86,s,.5,.36,.5),n(1,.12,1,r,.5,.8,.5);for(let o of[.07,.93])n(.09,1.8,.09,r,o,.9,.92);for(let o=0;o<5;o++)n(.2,.13,1,o%2?a:4627578,.1+o*.2,1.81,.5);n(.8,.28,.08,2843990,.5,1.45,.9),n(.22,.16,.25,15314251,.23,.92,.35),n(.22,.2,.25,14121329,.55,.94,.35),n(.2,.17,.25,8566888,.81,.93,.4)}if(i===22||i===23){let o=new Xt({color:me[i].color,transparent:i===22,opacity:i===22?.7:1,emissive:i===23?13055245:0,emissiveIntensity:.5}),l=new dt(new Ft(.99,.8,.99),o);l.position.y=.4,t.add(l);for(let c=0;c<3;c++)n(.17,.012,.07,i===22?11662587:16765792,.2+c*.25,.81,.23+c%2*.4,i===23)}if(i===37||i===38){let o=e.stage||0,l=.16+o*.19;for(let[c,u]of[[.25,.25],[.7,.25],[.25,.7],[.7,.7]])n(.045,l,.045,7252817,c,l/2,u),n(.24,.07,.07,o===3&&i===37?15254882:7847524,c,l*.7,u),n(.07,.06,.25,9617768,c,l*.45,u),o===3&&n(i===37?.11:.12,i===37?.2:.18,.11,i===37?14795116:15769677,c,i===37?l:.08,u)}if(i===54){n(1.15,.12,1.75,s,.5,.12,.5);for(let o of[-.1,1.1])n(.12,.43,1.9,r,o,.31,.5);for(let o of[-.4,1.4])n(1.2,.38,.12,s,.5,.29,o);n(1.1,.12,.25,a,.5,.4,.5),n(.08,.08,2,15120247,-.28,.47,.6)}if(i===55){for(let o of[.12,.4,.7,.94])n(.1,.065,.95,s,o,.035,.5);for(let o of[.18,.82])n(1,.07,.08,12306892,.5,.09,o)}if(i===56){n(.94,.18,1.05,5465200,.5,.2,.5);for(let o of[.05,.95])n(.1,.65,1.05,10137269,o,.49,.5);for(let o of[0,1])n(.9,.65,.1,11452354,.5,.49,o);for(let o of[0,1])for(let l of[.22,.78])n(.16,.23,.23,3425104,o,.11,l)}if(i===57){let o=e.powered?16770187:11565893;n(1,.035,.09,o,.5,.03,.5,e.powered),n(.09,.035,1,o,.5,.03,.5,e.powered),n(.16,.06,.16,o,.5,.045,.5)}if(i===58&&(n(.55,.16,.55,7243141,.5,.08,.5),n(.09,.42,.09,s,.5,.32,e.on?.66:.34),n(.17,.13,.17,e.on?10936177:15517048,.5,.58,e.on?.66:.34)),i===59){n(1,.8,1,7965572,.5,.4,.5),n(.96,.8,.12,s,.5,.42,.02);for(let o of[.13,.87])n(.08,.78,1.02,11452594,o,.41,.5)}if(i===63&&(n(.2,.2,1,r,.5,.5,.5),n(.85,.85,.13,s,.5,.5,.02)),i===60){n(.95,.7,.95,5001835,.5,.35,.5),n(1,.15,1,9730756,.5,.76,.5),n(.5,.08,.65,16771504,.5,.89,.5),n(.05,.12,.67,15589538,.5,.92,.5);for(let o of[.12,.88])n(.12,.15,.12,7662294,o,.85,.12,!0)}return t.rotation.y=(e.rot||0)*Math.PI/2,t}function Hh(i){if(i==="capybara"){let l=new Rt,c=$s(l,0);c(.86,.61,1.38,11108440,0,.61,.1),c(.65,.57,.69,11963489,0,.87,-.66),c(.62,.35,.28,12950381,0,.74,-1.06);for(let u of[-.24,.24])c(.16,.17,.14,9924679,u,1.18,-.62),c(.055,.07,.045,3157803,u,.94,-1.08),c(.04,.025,.03,16777215,u,.97,-1.105);for(let u of[-.28,.28])for(let f of[-.37,.49])c(.18,.34,.22,9859148,u,.17,f),c(.2,.07,.27,7362623,u,.045,f-.03);return c(.11,.06,.025,7493697,0,.74,-1.21),l}let e=new Rt,t=$s(e,0),n=i==="pig",s=i==="ox",r=i==="sheep",a=n?15311536:s?9529161:16050643,o=n?13401490:6311490;t(n?.7:.87,n?.5:.65,n?1:1.3,a,0,n?.58:.88,0),t(.5,.47,.48,a,0,n?.65:1.05,-.7),t(.36,.21,.16,n?14123413:12625291,0,n?.54:.93,-.96);for(let l of[-.28,.28])t(.2,.12,.19,a,l,n?.91:1.3,-.68),t(.055,.07,.08,2503745,l*.72,n?.73:1.15,-.96);for(let l of[-.25,.25])for(let c of[-.37,.37])t(.15,n?.36:.61,.16,o,l,n?.18:.3,c),t(.16,.12,.17,4209462,l,.065,c);if(i==="cow"&&(t(.18,.29,.56,5592659,-.443,.92,.03),t(.27,.05,.38,5592659,.2,1.218,-.2),t(.29,.18,.26,14525347,0,.48,.35)),s){for(let l of[-.29,.29])t(.11,.27,.11,15128492,l,1.4,-.64),t(.16,.1,.1,15128492,l*1.16,1.48,-.64);t(.36,.3,.23,6178361,0,1.27,-.5)}if(r)for(let l of[-.34,.34])for(let c of[-.35,.25])t(.28,.28,.36,16774620,l,1.03,c);return t(.08,n?.15:.4,.09,o,0,n?.67:.77,n?.56:.71),e}function Ys(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose(),t.material&&e.add(t.material)});for(let t of e)t.dispose()}function Gh(i){let e=new Rt,t=$s(e,0),n={farmer:6658414,rancher:12024672,builder:10058936,miner:6454943}[i]||6454943;t(.58,.73,.35,n,0,.96,0),t(.47,.48,.43,14066548,0,1.59,0),t(.71,.1,.6,i==="farmer"?14268777:10202546,0,1.86,0);for(let s of[-.14,.14])t(.2,.6,.22,4872540,s,.31,0),t(.07,.06,.035,2635842,s,1.64,-.23);for(let s of[-.39,.39])t(.17,.68,.2,n,s,1.02,0);return e}function Bt(i){let e="#"+me[i].color.toString(16).padStart(6,"0"),t=(s,r,a,o,l)=>`<rect x="${s}" y="${r}" width="${a}" height="${o}" fill="${l}"/>`,n="";if(i<12||me[i].cube)n=`<path d="M4 9L16 3 28 9 16 15Z" fill="${e}"/><path d="M4 9L16 15V29L4 23Z" fill="${e}"/><path d="M16 15L28 9V23L16 29Z" fill="${e}"/><path d="M16 15L28 9V23L16 29Z" fill="#000" opacity=".2"/>`;else if(i===12){for(let s=0;s<4;s++)n+=t(3+s*6,23-s*5,6,6+s*5,e);n+=t(3,29,24,2,"#795639")}else if(i===13)n=t(7,2,18,29,e)+t(10,5,12,9,"#a4d7d1")+t(10,18,12,10,"#735237")+t(20,16,3,3,"#ffe586");else if(i===14)n=t(3,4,5,26,e)+t(24,4,5,26,e)+t(5,9,22,4,e)+t(5,21,22,4,e);else if(i===15)n=t(3,6,4,24,"#875836")+t(25,15,4,15,"#875836")+t(7,13,19,10,e)+t(7,10,7,5,"#fff8dc")+t(5,23,23,3,"#875836");else if(i===16)n=t(2,10,28,6,e)+t(5,16,4,14,"#88603e")+t(23,16,4,14,"#88603e")+t(12,6,8,4,"#dbe8c3");else if(i===17)n=t(6,2,20,12,e)+t(6,14,4,15,"#9d764e")+t(22,14,4,15,"#9d764e")+t(5,17,22,5,e);else if(i===18)n=t(3,7,26,21,e)+t(3,13,26,3,"#805835")+t(14,12,5,9,"#ffdc7f");else if(i===19)n=t(3,3,26,26,e)+t(8,7,16,4,"#243643")+t(8,16,16,10,"#243643")+t(11,21,10,4,"#ffb153")+t(16,17,4,5,"#ffda7e");else if(i===20)n=t(13,13,6,16,"#805e49")+t(9,28,14,3,"#805e49")+t(7,4,18,15,e)+t(5,2,22,4,"#805e49");else if(i===21){n=t(4,18,24,12,"#bd8c54")+t(4,8,3,20,"#815b3a")+t(25,8,3,20,"#815b3a");for(let s=0;s<6;s++)n+=t(1+s*5,4,5,8,s%2?"#f5e9ce":e)}else if(i>=24&&i<=26||i===30)n=t(6,12,20,17,"#91a5af")+t(9,15,14,11,i===24?"#405763":e)+t(6,6,3,7,"#bbcbd0")+t(23,6,3,7,"#bbcbd0")+t(8,4,16,3,"#bbcbd0");else if(i>=27&&i<=29)n=t(5,9,20,17,e)+t(2,6,7,5,e)+t(24,6,6,5,e)+t(7,14,4,4,"#263744")+t(20,14,4,4,"#263744")+t(11,21,12,7,i===28?"#cf8294":"#d1af8d"),i===29&&(n+=t(4,2,4,7,"#e3d3af")+t(25,2,4,7,"#e3d3af")),i===27&&(n+=t(12,9,7,5,"#5a574e"));else if(i===31){n=t(14,4,3,27,e);for(let s=5;s<23;s+=6)n+=t(7,s,7,4,e)+t(17,s-2,7,4,e)}else i===32&&(n=t(4,12,24,14,e)+t(8,8,16,4,e)+t(10,12,3,6,"#f6d097")+t(19,12,3,6,"#f6d097"));if(i===53&&(n=t(5,13,22,14,e)+t(2,8,15,14,"#bd966b")+t(1,5,4,5,"#96714e")+t(12,5,4,5,"#96714e")+t(4,12,3,3,"#2b352d")+t(2,20,10,4,"#d1ab7f")+t(7,26,4,5,"#795b42")+t(22,26,4,5,"#795b42")),i===62&&(n=t(4,6,24,20,e)+t(10,12,12,16,"#88786a")+t(11,15,3,3,"#263744")+t(19,15,3,3,"#263744")),[34,35].includes(i)){for(let s=0;s<5;s++)n+=t(5+s*7%20,6+s*5%19,4,5,e);n+=t(14,4,3,8,"#73b569")}if(i===36&&(n='<path d="M10 8H24L13 30H9Z" fill="#f0a04d"/>'+t(12,1,4,8,"#69a354")+t(18,3,8,4,"#86ba61")),[43,44,45,46].includes(i)&&(n='<path d="M4 18L10 8H25L29 19 22 25H6Z" fill="'+e+'"/>'+t(11,10,10,3,"#ffffff55")),i>=47&&i<=52&&(n=t(13,8,4,23,"#ab7b50"),i<=49?n+=t(4,4,24,5,e)+t(3,7,5,7,e):i===50?n+=t(4,4,12,14,e):i===51?n+=t(8,3,15,13,e):n+=t(4,4,20,5,e)+t(4,9,5,6,e)),i===54&&(n=t(3,15,26,11,e)+t(1,12,5,8,"#85603e")+t(26,12,5,8,"#85603e")+t(8,19,17,3,"#e4ba78")+t(3,28,26,2,"#80d4e1")),i===55){for(let s=4;s<30;s+=6)n+=t(3,s,26,3,"#ab835a");n+=t(7,2,3,29,e)+t(22,2,3,29,e)}return i===56&&(n=t(3,7,26,17,e)+t(6,10,20,8,"#526873")+t(6,24,6,6,"#303f4a")+t(22,24,6,6,"#303f4a")),i===57&&(n=t(2,15,28,5,e)+t(14,3,5,28,e)+t(11,12,11,11,"#f6d67f")),i===58&&(n=t(5,22,23,8,"#829791")+t(14,7,5,18,"#ad8052")+t(11,3,11,9,e)),i===59&&(n=t(2,12,18,18,e)+t(18,16,9,7,"#bd9159")+t(26,11,5,16,"#e0bd83")),i===60&&(n=t(4,15,24,15,"#595574")+t(2,12,28,5,e)+t(7,4,18,9,"#f6e6b7")+t(15,4,2,10,"#bb9c61")),(i===64||i===65)&&(n='<path d="M8 7C15 2 29 5 28 16S18 29 9 26 1 13 8 7Z" fill="'+e+'" stroke="#f5d6a8" stroke-width="2"/><path d="M10 11L21 16M9 17L17 21" stroke="'+(i===65?"#67452e":"#f4b7a2")+'" stroke-width="3" stroke-linecap="round"/>'),n||(n=t(6,6,20,20,e)),`<svg class="craft-item-icon" viewBox="0 0 32 32" aria-hidden="true" shape-rendering="crispEdges">${n}</svg>`}function Wh({getWorld:i,open:e,close:t,refresh:n,message:s,persist:r}){let a="Todos",o=null,l=null,c=()=>`<nav class="craft-tabs" aria-label="Categorias">${["Todos","Constru\xE7\xE3o","Casa","Animais","Fazenda","Minera\xE7\xE3o","Transportes","Mecanismos","Baldes"].map(g=>`<button data-tab="${g}" class="${a===g?"selected":""}">${g}</button>`).join("")}</nav>`,u=()=>hn.filter(g=>a==="Todos"||(me[g].group||"Constru\xE7\xE3o")===a);function f(g,x){let p=i();if(o=x,l=g,g==="bag")return{title:"Mochila \xB7 construa seu mundo",body:`<button data-companions>Minhas criaturas \xB7 ${p.companions.length}/12 no abrigo</button><p>Selecione um item e use <b>Colocar</b>. Baldes, sementes, enxada, alimentos e ve\xEDculos usam <b>Usar</b>. Picaretas usam <b>Quebrar</b>. As escadas ficam voltadas na dire\xE7\xE3o em que voc\xEA olha.</p>${c()}<div class="craft-grid">${u().map(h=>`<button data-select="${h}" class="${h===p.selected?"selected":""}">${Bt(h)}<strong>${me[h].name}</strong><small>${p.creative&&!me[h].tool?"Ilimitado":p.inventory[h]+" na mochila"}</small></button>`).join("")}</div>`};if(g==="market")return{title:"Marketplace Integro",body:`<div class="craft-wallet">${Bt(31)}<b>${p.coins} <small>integros</small></b><span>Compre, construa e cuide dos animais.</span></div><p>Venda materiais coletados, p\xE3o e leite para ganhar integros. Alimentar um animal com trigo rende 5 integros a cada 30 s. ${p.creative?"Volte ao modo Explorar para vender.":""}</p>${c()}<div class="craft-shop">${u().filter(h=>me[h].price||p.inventory[h]>0).map(h=>{let y=me[h];return`<article>${Bt(h)}<h3>${y.name}</h3><small>Voc\xEA tem ${p.inventory[h]}</small><div>${y.price?`<button data-buy="${h}" ${p.coins<y.price?"disabled":""}>Comprar ${y.pack||1} \xB7 ${y.price} \u2B21</button>`:""}<button data-sell="${h}" ${!p.inventory[h]||p.creative?"disabled":""}>Vender 1 \xB7 ${Ks(h)} \u2B21</button></div></article>`}).join("")}</div><p class="craft-note">\u2B21 = integros do IntegroCraft. Ao vender leite, voc\xEA recebe o balde vazio de volta.</p>`};if(g==="furnace"){let h=p.meta(x),y=tn.find(E=>E.id===h.job?.id);return{title:"Fornalha",body:`<p>Coloque ingredientes e madeira como combust\xEDvel. A fornalha trabalha enquanto voc\xEA est\xE1 neste jogo.</p>${y?`<div class="craft-smelt">${Bt(y.out)}<h3>${y.name}</h3><progress id="craftSmeltBar" max="${y.seconds}" value="${y.seconds-h.job.remaining}"></progress><p id="craftSmeltStatus">${h.job.remaining>0?"Preparando \xB7 "+Math.ceil(h.job.remaining)+" s":"Pronto para retirar!"}</p><button id="craftSmeltCollect" data-collect ${h.job.remaining>0?"disabled":""}>Retirar ${y.count} ${me[y.out].name}</button></div>`:`<div class="craft-recipes">${tn.map(E=>`<article class="craft-recipe">${Bt(E.out)}<h3>${E.name}</h3><p>${Object.entries(E.cost).map(([v,C])=>`${C} ${me[v].name} (voc\xEA tem ${p.inventory[v]})`).join("<br>")}<br>${E.seconds} segundos \u2192 ${E.count} unidades</p><button data-smelt="${E.id}" ${Object.entries(E.cost).some(([v,C])=>p.inventory[v]<C)?"disabled":""}>Preparar</button></article>`).join("")}</div>`}`}}if(g==="chest"){let h=p.meta(x);return{title:"Ba\xFA \xB7 seus materiais guardados",body:`<p>Guarde itens neste ba\xFA e retire quando quiser. Esvazie-o antes de quebrar.</p><div class="craft-storage">${hn.filter(y=>p.inventory[y]||h.stored?.[y]||0).map(y=>`<div>${Bt(y)}<span><b>${me[y].name}</b><small>Mochila ${p.inventory[y]} \xB7 Ba\xFA ${h.stored?.[y]||0}</small></span><button data-put="${y}" ${p.inventory[y]?"":"disabled"}>Guardar 1</button><button data-take="${y}" ${h.stored?.[y]?"":"disabled"}>Retirar 1</button></div>`).join("")}</div>`}}if(g==="journey")return{title:"Seu mundo cresceu!",body:`<p class="craft-update">${192} \xD7 ${192} blocos \xB7 vilas, criaturas e aventuras</p><p>Escolha um destino para visitar. Suas constru\xE7\xF5es continuam no vale original. Os pontos coloridos aparecem no minimapa.</p><div class="craft-destinations">${[{name:"Vale e sua casa",text:"Volte para construir e cuidar da fazenda.",id:"home",icon:15},{name:"Vila Integro",text:"Trocas com Lia e Bento, fornalha, encantamentos e trilhos.",id:"village",icon:21},{name:"Minas de cristal",text:"Leve picaretas. Carv\xE3o, ferro, ouro e cristais aguardam.",id:"mine",icon:49},{name:"Rio das capivaras",text:"Leve trigo ou cenoura! Observe os animais e pilote um barco.",id:"river",icon:53},...p.settlements.map(h=>({name:Bn[h.id].name,text:Bn[h.id].description,id:h.id,icon:h.id==="palms"?62:60}))].map(h=>`<article>${Bt(h.icon)}<h3>${h.name}</h3><p>${h.text}</p><button data-travel="${h.id}">Visitar</button></article>`).join("")}</div><p><b>Fazenda:</b> enxada \u2192 terra preparada \u2192 sementes \u2192 Usar para colher. Crescimento: 2 minutos perto da \xE1gua, 3 minutos sem irriga\xE7\xE3o.</p><button data-companions>Minhas criaturas \xB7 ${p.companions.length}/12 no abrigo</button><p><b>Acolher:</b> mire numa criatura e toque em Usar. Alimente para ganhar confian\xE7a; depois acolha e solte perto do seu curral. Ela pode esperar ou acompanhar voc\xEA.</p><p><b>Filhotes:</b> alimente dois adultos da mesma esp\xE9cie pr\xF3ximos. O filhote chega em 30 segundos e cresce em 4 minutos de jogo.</p><p><b>HUD:</b> \u2665 vida \xB7 \u25CF alimento \xB7 \u2726 experi\xEAncia. Coma p\xE3o, cenoura ou leite com Usar; dormir recupera a vida.</p>`};if(g==="villager"){let h=p.villagers[x];if(!h)return null;let y=Qs[h.quest],E=p.completedQuests.has(h.quest);return{title:h.name,body:`${h.dialogue?"<p>"+h.dialogue+"</p>":""}${y?`<article class="craft-recipe"><h3>${y.name}</h3><p>${y.text}</p><p>${Object.entries(y.cost).map(([v,C])=>`${me[v].name}: ${p.inventory[v]}/${C}`).join(" \xB7 ")}</p><p>Recompensa: ${Object.entries(y.reward).map(([v,C])=>`${C} ${me[v].name}`).join(", ")} + ${y.xp} XP.</p><button data-quest ${E||p.creative||y.tamed&&!p.discoveredCreatures.size||Object.entries(y.cost).some(([v,C])=>p.inventory[v]<C)?"disabled":""}>${E?"Miss\xE3o conclu\xEDda":"Entregar e concluir"}</button></article>`:""}<p>Troque os recursos que voc\xEA coletou. As trocas rendem experi\xEAncia.</p><div class="craft-recipes">${bl[h.trade].map((v,C)=>`<article class="craft-recipe">${Bt(v.out)}<h3>${v.name}</h3><p>${Object.entries(v.cost).map(([w,P])=>`${me[w].name}: ${p.inventory[w]}/${P}`).join("<br>")}</p><button data-trade="${C}" ${p.creative||Object.entries(v.cost).some(([w,P])=>p.inventory[w]<P)?"disabled":""}>Trocar</button></article>`).join("")}</div>${p.creative?"<p>Volte ao modo Explorar para fazer trocas.</p>":""}`}}if(g==="creature"){let h=p.creature(x);return h?{title:ss[h.type]+(p.baby(h)?" \xB7 filhote":""),body:`<p>${h.tamed?"Ela confia em voc\xEA! Acolha para transportar ao seu curral.":"Alimente com trigo ou cenoura para ganhar sua confian\xE7a."}</p><p>Alimente dois adultos da mesma esp\xE9cie, a menos de 6 blocos um do outro. O filhote chega em 30 segundos e cresce em 4 minutos.</p><div class="craft-menu-grid"><button id="craftCreatureFeed" data-care="feed" ${!p.inventory[31]&&!p.inventory[36]||p.lifeTime<h.feedAt?"disabled":""}>Alimentar${p.lifeTime<h.feedAt?" \xB7 aguarde "+Math.ceil(h.feedAt-p.lifeTime)+" s":""}</button><button data-care="capture" ${!h.tamed||p.companions.length>=12?"disabled":""}>Acolher para transportar</button><button data-care="follow" ${h.tamed?"":"disabled"}>Acompanhar voc\xEA</button><button data-care="stay" ${h.tamed?"":"disabled"}>Esperar aqui</button>${["cow","sheep"].includes(h.type)?`<button data-care="collect">${h.type==="cow"?"Tirar leite \xB7 balde vazio":"Tosquiar \xB7 machado"}</button>`:""}<button data-companions>Minhas criaturas</button></div>`}:{title:"Criatura",body:"<p>Esta criatura j\xE1 foi acolhida ou se afastou.</p><button data-companions>Abrir Minhas criaturas</button>"}}return g==="companions"?{title:"Minhas criaturas",body:`<p>${p.companions.length}/12 no abrigo de transporte \xB7 ${p.animals.filter(h=>h.tamed).length} acolhidas no terreno \xB7 ${p.discoveredCreatures.size}/5 esp\xE9cies com sua confian\xE7a.</p><p>V\xE1 at\xE9 seu curral e toque em <b>Soltar aqui</b>. A criatura aparece num ch\xE3o livre perto de voc\xEA e espera ali. Para formar um casal, solte duas adultas da mesma esp\xE9cie pr\xF3ximas e alimente as duas.</p><div class="craft-shop">${p.companions.map(h=>`<article>${Bt(me.findIndex(y=>y?.animal===h.type))}<h3>${ss[h.type]}${p.baby(h)?" \xB7 filhote":""}</h3><button data-release="${h.creatureId}">Soltar aqui</button></article>`).join("")||"<p>Nenhuma criatura no abrigo. Mire em um animal, toque em Usar, alimente e escolha Acolher.</p>"}</div>`}:g==="enchant"?{title:"Mesa de encantamentos",body:`<p>Cada melhoria custa <b>20 XP + 1 cristal</b> e recupera a durabilidade. Voc\xEA tem ${p.xp} XP e ${p.inventory[46]} cristais.</p><p>N\xEDvel 1: menos toques para minerar. N\xEDvel 2: carv\xE3o e cristais em dobro. N\xEDvel 3: minera\xE7\xE3o ainda mais r\xE1pida.</p><div class="craft-recipes">${[47,48,49].map(h=>`<article class="craft-recipe">${Bt(h)}<h3>${me[h].name}</h3><p>N\xEDvel ${p.enchants[h]||0}/3 \xB7 ${p.inventory[h]} na mochila</p><button data-enchant="${h}" ${!p.inventory[h]||p.enchants[h]>=3||p.xp<20||p.inventory[46]<1?"disabled":""}>Encantar</button></article>`).join("")}</div>`}:null}function d(g,x){g.querySelectorAll("[data-travel]").forEach(p=>p.onclick=()=>{let h=i(),y=p.dataset.travel;if(y==="home")h.home();else{let E=h.settlements.find(A=>A.id===y),v=E?[E.x+11,E.z+12]:{village:[67,25],mine:[90,35],river:[75,59]}[y];if(!v)return;let[C,w]=v,P=!1;for(let A=0;A<8&&!P;A++)for(let b=-A;b<=A&&!P;b++)for(let M=-A;M<=A&&!P;M++){let D=C+b+.5,O=w+M+.5,G=h.surface(Math.floor(D),Math.floor(O))+1.04;G>=5.4&&!h.collides(D,G,O)&&(Object.assign(h.player,{x:D,y:G,z:O,vy:0,pitch:-.1,yaw:0}),h.riding=null,P=!0)}}r(),t(),n(),s("Explore! Abra a mochila para escolher seus itens.")}),g.querySelectorAll("[data-companions]").forEach(p=>p.onclick=()=>e("companions")),g.querySelectorAll("[data-care]").forEach(p=>p.onclick=()=>{let h=i(),y=o;s(h.careCreature(y,p.dataset.care)),r(),h.creature(y)||e("companions"),n()}),g.querySelectorAll("[data-release]").forEach(p=>p.onclick=()=>{s(i().releaseCreature(+p.dataset.release)),r(),n()}),g.querySelectorAll("[data-quest]").forEach(p=>p.onclick=()=>{s(i().completeQuest(o)?"Miss\xE3o conclu\xEDda! Recompensa na mochila.":"Confira os materiais e aproxime-se do alde\xE3o."),r(),n()}),g.querySelectorAll("[data-trade]").forEach(p=>p.onclick=()=>{s(i().trade(o,+p.dataset.trade)?"Troca conclu\xEDda! +2 XP":"Aproxime-se do morador e confira seus itens."),r(),n()}),g.querySelectorAll("[data-enchant]").forEach(p=>p.onclick=()=>{s(i().enchant(o,+p.dataset.enchant)?"Picareta encantada e reparada!":"Confira XP, cristais e dist\xE2ncia da mesa."),r(),n()}),g.querySelectorAll("[data-tab]").forEach(p=>p.onclick=()=>{a=p.dataset.tab,n()});for(let p of["buy","sell","put","take","smelt","collect"])g.querySelectorAll(`[data-${p}]`).forEach(h=>h.onclick=()=>{let y=i(),E=+h.dataset[p],v=p==="buy"?y.buy(E):p==="sell"?y.sell(E):p==="put"||p==="take"?y.chest(o,E,1,p):p==="smelt"?y.smelt(o,h.dataset.smelt):y.collectSmelt(o);s(v?p==="buy"?"Compra feita! O item est\xE1 na mochila.":p==="sell"?"Venda conclu\xEDda!":p==="smelt"?"Fornalha acesa!":"Pronto!":"N\xE3o foi poss\xEDvel. Confira os itens dispon\xEDveis."),r(),n()})}function m(){let g=i();if(l==="creature"){let v=g.creature(o),C=document.getElementById("craftCreatureFeed");if(v&&C){let w=Math.max(0,Math.ceil((v.feedAt||0)-g.lifeTime));C.disabled=!g.inventory[31]&&!g.inventory[36]||w>0,C.textContent="Alimentar"+(w?" \xB7 aguarde "+w+" s":"")}return}if(!o||typeof o!="object")return;let x=g.meta(o).job;if(!x)return;let p=tn.find(v=>v.id===x.id),h=document.getElementById("craftSmeltBar"),y=document.getElementById("craftSmeltStatus"),E=document.getElementById("craftSmeltCollect");h&&(h.value=p.seconds-x.remaining),y&&(y.textContent=x.remaining>0?"Preparando \xB7 "+Math.ceil(x.remaining)+" s":"Pronto para retirar!"),E&&(E.disabled=x.remaining>0)}return{content:f,bind:d,tick:m}}function Xh({onExit:i,registerAdapter:e,createLegacyWorld:t}){let n=L=>document.getElementById(L),s=n("craftApp"),r=n("craftCanvas"),a="integrocraft-world-v1",o=!1,l,c,u,f,d,m,g,x,p,h,y=!1,E=!1,v=0,C=0,w=null,P=null,A=null,b=[],M=new Map,D=[],O=[],G=[],q=new Set,ee={x:0,z:0},j=null,ae=null,$=null,le=0,de=0,Te=0,ke=0,Ze=0,nt=0,Xe=!0,Q=null;try{Q=JSON.parse(window.BoxStorage.getItem(a)||"null")}catch{Xe=!1}let ne=null,xe=()=>{for(let L of[b,D,O,G])for(let N of L)u.remove(N),Ys(N);b=[],D=[],O=[],G=[],Ie(),it(1/0),at(),te(),K(),De()},Le=e("craft",{scene:()=>u,active:()=>o&&y,state:()=>l?{...l.player,zone:"world"}:null,enter(L={}){ne||(I(),ne=l,l=Oh(t()),this.applyWorld(L),xe(),pe(),Ae("Sala compartilhada: blocos b\xE1sicos. Capivaras e novas aventuras no mundo individual."))},applyWorld(L){if(ne){for(let[N,T]of Object.entries(L)){let[U,k,H]=N.split(",").map(Number);[U,k,H,T].every(Number.isInteger)&&U>=0&&U<96&&H>=0&&H<96&&k>0&&k<30&&T>=0&&T<=10&&l.get(U,k,H)!==T&&l.set(U,k,H,T)}J(),l.collides(l.player.x,l.player.y,l.player.z)&&l.home()}},leave(){ne&&(l=ne,ne=null,xe(),pe(),I())},persist:()=>I()}),Ee=Wh({getWorld:()=>l,open:ie,close:pe,refresh:()=>{te(),be(),J()},message:Ae,persist:I}),Ge=L=>"#"+me[L].color.toString(16).padStart(6,"0"),Mt=()=>new Promise(L=>requestAnimationFrame(()=>requestAnimationFrame(L)));function I(){if(!(!l||ne))try{Q&&Q.version!==3&&!window.BoxStorage.getItem(a+"-before-expansion")&&window.BoxStorage.setItem(a+"-before-expansion",JSON.stringify(Q)),window.BoxStorage.setItem(a,JSON.stringify(l.serialize())),Xe=!0}catch{Xe=!1}}function Ae(L){n("craftToast").textContent=L,n("craftToast").classList.add("visible"),nt=performance.now()+3e3}function De(){q.clear(),ee={x:0,z:0},le=de=0,j=ae=null,$=null,n("craftStick").style.transform="translate(0px,0px)"}function Ie(){for(let L of M.values())for(let N of L)u.remove(N),N.geometry.dispose();M.clear()}function ye(){let L=ne?96:192,N=Math.floor(l.player.x/8),T=Math.floor(l.player.z/8),U=[];for(let k=Math.max(0,N-6);k<Math.min(L/8,N+7);k++)for(let H=Math.max(0,T-6);H<Math.min(L/8,T+7);H++)U.push([k,H]);return U.sort((k,H)=>Math.hypot(k[0]-N,k[1]-T)-Math.hypot(H[0]-N,H[1]-T))}function it(L=2){let N=ye(),T=new Set(N.map(U=>U.join(",")));for(let[U,k]of M)if(!T.has(U)){for(let H of k)u.remove(H),H.geometry.dispose();M.delete(U)}for(let[U,k]of N)if(!M.has(U+","+k)&&(_e(U,k),--L<=0))break}function _e(L,N){let T=L+","+N;for(let H of M.get(T)||[])u.remove(H),H.geometry.dispose();let U=[];for(let H of[!1,!0]){let Y=kh(l,L,N,H);if(!Y.getAttribute("position").count){Y.dispose();continue}let Z=new dt(Y,H?d.glass:d.solid);u.add(Z),U.push(Z)}let k=Vh(l,L,N);if(k.getAttribute("position").count){let H=new dt(k,d.details);H.userData.decoration=!0,u.add(H),U.push(H)}else k.dispose();for(let H of[22,23]){let Y=Rh(l,L,N,H);if(Y.getAttribute("position").count){let Z=new dt(Y,d.flow[H]);Z.userData.fineFluid=H,u.add(Z),U.push(Z)}else Y.dispose()}M.set(T,U)}async function Be(L){if(!y){E=!0;try{L?.(.1,"Gerando o terreno"),l=new Ot(Q),c=new qa({canvas:r,antialias:!0,powerPreference:"high-performance"}),c.setPixelRatio(Math.min(devicePixelRatio||1,2)),c.outputColorSpace=_t,c.setClearColor(10869229),u=new bs,u.background=new Ne(10869229),u.fog=new Ms(10869229,30,48),f=new Ct(72,1,.05,180),f.rotation.order="YXZ",d=zh(),d.flow=Ch(),p=new Ps(14087167,6714698,2),u.add(p),g=new Ds(16772816,1.3),g.position.set(-20,40,20),u.add(g);for(let[H,Y]of ye())_e(H,Y),M.size%8===0&&(L?.(.15+M.size/169*.65,"Construindo blocos e \xE1rvores"),await Mt());let N=new dt(new Yn(326,326),new hi({color:4699855,transparent:!0,opacity:.62,shininess:90,side:Tt}));N.rotation.x=-Math.PI/2,N.position.set(192/2,5.12,192/2),u.add(N),m=N;let T=new dt(new Yn(326,326),new Xt({color:12434313}));T.rotation.x=-Math.PI/2,T.position.set(192/2,-.1,192/2),u.add(T);let U=new Ss(new ws(new Ft(1.012,1.012,1.012)),new Wi({color:16777215,depthTest:!0}));u.add(U),h=U,at();let k=new Xt({color:16777215,transparent:!0,opacity:.82});for(let H=0;H<10;H++){let Y=new Rt;for(let Z=0;Z<3;Z++){let ce=new dt(new Ft(5+Z,1.5,3+Z),k);ce.position.set(Z*3,0,Z%2),Y.add(ce)}Y.position.set(H*13%70-10,25+H%3*2,H*23%70-10),u.add(Y)}y=!0,pt(),te(),K(),L?.(1,"Mundo pronto")}catch(N){throw c?.dispose(),c=null,N}finally{E=!1}}}function pt(){if(!c)return;let L=s.clientWidth,N=s.clientHeight;!L||!N||(c.setSize(L,N,!1),f.aspect=L/N,f.fov=L/N<1?88:74,f.updateProjectionMatrix())}function at(){for(let L of b)u.remove(L),Ys(L);b=[];for(let[L,N]of l.features){if(!is(N))continue;let T=L%192,U=Math.floor(L/192)%192,k=Math.floor(L/36864),H=El(N,l.meta({x:T,y:k,z:U}));H.position.set(T+.5,k,U+.5),H.traverse(Y=>{Y.isMesh&&(Y.userData.voxel={x:T,y:k,z:U})}),u.add(H),b.push(H)}if(D.length!==l.animals.length){for(let L of D)u.remove(L),Ys(L);D=l.animals.map((L,N)=>{let T=Hh(L.type);return T.traverse(U=>{U.isMesh&&(U.userData.animal=N)}),u.add(T),T})}if(O.length!==l.vehicles.length){for(let L of O)u.remove(L),Ys(L);O=l.vehicles.map((L,N)=>{let T=El(L.type);return T.traverse(U=>{U.isMesh&&(U.userData.vehicle=N)}),u.add(T),T})}G.length||(G=l.villagers.map((L,N)=>{let T=Gh(L.trade);return T.position.set(L.x,L.y,L.z),T.traverse(U=>{U.isMesh&&(U.userData.villager=N)}),u.add(T),T})),l.lifeDirty=!1}function R(){if(!y||w)return;f.updateMatrixWorld();let L=new Us;L.far=6.5,L.setFromCamera(new He,f);let N=[...M.values()].flat().filter(ce=>!ce.userData.decoration).concat(b,D,O.filter((ce,Fe)=>l.riding!==Fe),G);(l.selected===24||l.selected===54)&&N.push(m);let T=L.intersectObjects(N,!0)[0];if(!T){A=null,h.visible=!1,n("craftTarget").textContent="";return}if(T.object.userData.vehicle!==void 0){A={vehicle:T.object.userData.vehicle},h.visible=!1,n("craftTarget").textContent="Usar para embarcar";return}if(T.object.userData.villager!==void 0){A={villager:T.object.userData.villager},h.visible=!1,n("craftTarget").textContent=l.villagers[A.villager].name+" \xB7 Usar para trocar";return}if(T.object.userData.animal!==void 0){A={animal:T.object.userData.animal},h.visible=!1;let ce=l.animals[A.animal];n("craftTarget").textContent={cow:"Vaca",pig:"Porco",ox:"Boi",sheep:"Ovelha",capybara:"Capivara"}[ce.type]+(l.baby(ce)?" \xB7 filhote":"")+" \xB7 Usar: cuidar \xB7 Ca\xE7ar: carne";return}let U=T.face.normal.clone().transformDirection(T.object.matrixWorld),k=T.point.clone().addScaledVector(U,-.002),H=T.point.clone().addScaledVector(U,.002),Y=T.object.userData.voxel;if(T.object===m){A={x:Math.floor(T.point.x),y:Math.floor(5.12),z:Math.floor(T.point.z),lake:!0},h.visible=!1,n("craftTarget").textContent="Lago \xB7 Usar para encher o balde";return}if(T.object.userData.fineFluid){let ce={x:Math.floor(k.x*2),y:Math.floor(k.y*2),z:Math.floor(k.z*2)};A={x:Math.floor(k.x),y:Math.floor(k.y),z:Math.floor(k.z),fluidSmall:ce,placeSmall:{x:Math.floor(H.x*2),y:Math.floor(H.y*2),z:Math.floor(H.z*2)}},h.visible=!1,n("craftTarget").textContent=(T.object.userData.fineFluid===22?"\xC1gua":"Lava")+" \xB7 Balde vazio para recolher a fonte";return}if(A=Y?{...Y}:{x:Math.floor(k.x),y:Math.floor(k.y),z:Math.floor(k.z)},!Y&&!ne&&(A.small={x:Math.floor(k.x*2),y:Math.floor(k.y*2),z:Math.floor(k.z*2)},A.placeSmall={x:Math.floor(H.x*2),y:Math.floor(H.y*2),z:Math.floor(H.z*2)}),Y){let ce=Math.abs(U.y)>.5?"y":Math.abs(U.x)>.5?"x":"z";A.place={...Y},A.place[ce]+=Math.sign(U[ce])*(ce==="y"&&U.y>0?Math.ceil(On(l.get(Y.x,Y.y,Y.z))):1)}else A.place={x:Math.floor(H.x),y:Math.floor(H.y),z:Math.floor(H.z)};Y&&!ne&&(A.placeSmall={x:A.place.x*2,y:A.place.y*2,z:A.place.z*2});let Z=A.small?l.smallAt(A.small):l.get(A.x,A.y,A.z);h.visible=!!Z,h.scale.set(1,Z>=12?On(Z):1,1),h.position.set(A.x+.5,A.y+(Z>=12?On(Z):1)/2,A.z+.5),A.small&&yi.has(Z)&&(h.scale.setScalar(.5),h.position.set(A.small.x*.5+.25,A.small.y*.5+.25,A.small.z*.5+.25)),n("craftTarget").textContent=Z?me[Z].name+([13,15,16,17,18,19,20,21,37,38,58,60].includes(Z)?" \xB7 Usar":""):""}function _(L){if(!(w||!o||!l)){if(R(),ne){let N=L==="mine"?A:A?.place,T=L==="mine"?0:l.selected;if(!N||N.animal!==void 0||N.lake||T>10){Ae("Na sala, use os blocos b\xE1sicos. Novos itens no mundo individual.");return}if(L!=="mine"&&l.overlaps(N.x,N.y,N.z)){Ae("Afaste-se para colocar o bloco.");return}window.BoxMultiplayer?.edit({...N,block:T});return}if(L==="mine"&&A?.animal!==void 0){Ae(l.huntAnimal(A.animal)),A=null,J(),I(),te(),R();return}if([54,56].includes(l.selected)&&L==="place"){Ae(l.launchVehicle(A)?"Transporte pronto! Mire nele e toque em Usar para embarcar.":"Coloque o barco na \xE1gua ou o carrinho sobre os trilhos."),J(),I(),te();return}if(!A||A.animal!==void 0||A.vehicle!==void 0||A.villager!==void 0||A.lake){Ae("Mire em um bloco mais pr\xF3ximo.");return}if(L==="mine"){let N=A.small&&yi.has(l.smallAt(A.small))?l.mineSmall(A.small):l.mine(A);Ae(l.notice||(N?(l.creative?"Item removido: ":"+1 ")+me[N].name:"Esvazie o ba\xFA ou retire a produ\xE7\xE3o antes de quebrar. \xC1gua e lava precisam de balde; a rocha base \xE9 protegida.")),l.notice=null}else if([24,25,26].includes(l.selected)){let N=l.bucket(A);Ae(l.notice||(N?"Balde usado!":"Mire no canal ou em uma face livre da borda para despejar.")),l.notice=null}else yi.has(l.selected)&&A.placeSmall?Ae(l.placeSmall(A.placeSmall)?"Bloco pequeno colocado!":l.notice||"Aproxime-se e mire em uma face livre."):Ae(l.place(A.place)?me[l.selected].animal?"Animal chegou!":"Item colocado!":"Confira a mochila e mire em um espa\xE7o livre com ch\xE3o. Portas precisam de dois blocos de altura.");J(),te(),K(),I(),R()}}function V(){if(w||!o||!l)return;if(ne){Ae("Capivaras, fazenda e novos itens est\xE3o no mundo individual.");return}if(R(),l.riding!==null){Ae(l.dismount()?"Voc\xEA desembarcou.":l.notice||"Aproxime-se da margem."),l.notice=null,I();return}if(A?.animal!==void 0){l.ensureCreatureIds();let N=l.animals[A.animal];N&&ie("creature",N.creatureId);return}if(l.eat()){Ae(l.notice),l.notice=null,I(),te();return}if(A?.vehicle!==void 0){Ae(l.board(A.vehicle)?"Use o direcional para pilotar. Toque em Usar para sair.":"Aproxime-se para embarcar.");return}if(A?.villager!==void 0){ie("villager",A.villager);return}if([54,56].includes(l.selected)){Ae(l.launchVehicle(A)?"Transporte pronto! Mire nele e toque em Usar para embarcar.":"Mire na \xE1gua para o barco ou nos trilhos para o carrinho."),J(),I(),te();return}if(A&&[37,38].includes(l.get(A.x,A.y,A.z))){Ae(l.use(A)),J(),I(),te();return}if(A&&A.animal===void 0&&[34,35,52].includes(l.selected)){Ae(l.farm(A)||"Mire no ch\xE3o para preparar ou plantar."),J(),I(),te();return}if([24,25,26].includes(l.selected)){let N=l.bucket(A);Ae(l.notice||(N?"Pronto! Confira os baldes na mochila.":"Mire no canal ou na lateral de uma borda para despejar.")),l.notice=null,J(),I(),te();return}if(!A||A.lake){Ae("Mire em uma porta, m\xF3vel, fornalha ou animal.");return}let L=l.get(A.x,A.y,A.z);if(L===18){ie("chest",A);return}if(L===19){ie("furnace",A);return}if(L===21){ie("market");return}if(L===60){ie("enchant",A);return}Ae(l.use(A)||"Este bloco serve para construir."),J(),I(),te()}function J(){for(let L of l.dirty){let[N,T]=L.split(",").map(Number);M.has(L)&&_e(N,T)}l.dirty.clear(),l.lifeDirty&&at()}function te(){if(!l)return;let L=l.player;n("craftBiome").textContent=ne?"SALA COMPARTILHADA":l.biome(),n("craftCoords").textContent=`X ${Math.floor(L.x)} \xB7 Y ${Math.floor(L.y)} \xB7 Z ${Math.floor(L.z)}`,n("craftModeLabel").textContent=l.creative?"CRIATIVO \xB7 VOO LIVRE":"EXPLORAR",n("craftJumpText").textContent=l.creative?"Subir":l.inWater()?"Nadar":"Pular",n("craftDown").hidden=!l.creative,n("craftCoins").textContent=l.coins+" integros",n("craftVitals").textContent=l.creative?"\u221E CRIATIVO":`\u2665 ${Math.ceil(l.vitals.health)} \xB7 \u25CF ${Math.ceil(l.vitals.hunger)} \xB7 \u2726 ${l.xp} XP`,n("craftMineText").textContent=A?.animal!==void 0?"Ca\xE7ar":"Quebrar";let N=me[l.selected];n("craftTool").textContent=N?.durability&&l.inventory[l.selected]?`${N.name} \xB7 ${l.toolWear[l.selected]}/${N.durability}${l.enchants[l.selected]?" \xB7 \u2726 "+l.enchants[l.selected]:""}`:l.riding!==null?"Pilotando \xB7 Usar para desembarcar":"";let T=[l.selected,l.creative,...Object.values(l.inventory)].join(":");n("craftHotbar").dataset.signature!==T&&(n("craftHotbar").dataset.signature=T,n("craftHotbar").innerHTML=[1,3,4,8,9,l.selected>0&&![1,3,4,8,9].includes(l.selected)?l.selected:2].map(U=>`<button data-block="${U}" class="${U===l.selected?"selected":""}" title="${me[U].name}" aria-label="Selecionar ${me[U].name}"><em>${U<=9?U:""}</em>${Bt(U)}<b>${l.creative&&!me[U].tool?"\u221E":l.inventory[U]}</b></button>`).join(""),n("craftHotbar").querySelectorAll("[data-block]").forEach(U=>U.onclick=()=>{l.selected=+U.dataset.block,te(),Ae(me[l.selected].name),I()}))}function K(){if(!l)return;let L=ne?96:192,N=n("craftMap").getContext("2d");N.fillStyle="#44879a",N.fillRect(0,0,144,144);for(let U=0;U<L;U++)for(let k=0;k<L;k++){let H=l.surface(U,k);N.fillStyle=H<5?"#62b3c5":Ge(l.surfaceId(U,H,k)),N.fillRect(U*144/L,k*144/L,144/L,144/L)}for(let[U,k,H]of[[67,24,"#ffed91"],[83,35,"#74ffff"],[77,65,"#e0b98b"],...ne?[]:l.settlements.map(Y=>[Y.x+12,Y.z+12,Bn[Y.id].color])])N.fillStyle=H,N.fillRect(U*144/L-2,k*144/L-2,4,4);let T=l.player;N.save(),N.translate(T.x*144/L,T.z*144/L),N.rotate(-T.yaw),N.fillStyle="#fff3a5",N.strokeStyle="#193944",N.lineWidth=1.5,N.beginPath(),N.moveTo(0,-7),N.lineTo(-4,5),N.lineTo(4,5),N.closePath(),N.fill(),N.stroke(),N.restore()}function be(){let L="",N="";w==="intro"&&(L="Seu mundo come\xE7a com um bloco",N='<p>Explore 192 \xD7 192 blocos de terreno, colete materiais e construa o que imaginar. Visite a Vila Integro e as novas vilas das Palmeiras e dos Cristais, com alde\xF5es, miss\xF5es, hortas e oficinas! Prepare a terra, plante, crie filhotes e pilote barcos e carrinhos.</p><ul><li>Arraste o cen\xE1rio para olhar. Ande pelo direcional ou WASD.</li><li>Mire no bloco e use <b>Quebrar</b> para coletar. Escolha um material na mochila e use <b>Colocar</b> para construir.</li><li>Voc\xEA ganhou m\xF3veis, sementes, enxada, picareta e transportes para come\xE7ar. Abra o mapa para visitar a vila, as minas e as capivaras. Use <b>Marketplace</b> para comprar e vender com integros.</li><li>Abra <b>Fabricar</b> para transformar madeira, pedra e areia.</li><li>Na engrenagem, ative o modo Criativo para voar e usar blocos ilimitados.</li></ul><button data-action="resume">Explorar meu mundo</button>'),w==="recipes"&&(L="Bancada de fabrica\xE7\xE3o",N=`<p>Transforme o que voc\xEA coletou em novos materiais para construir.</p><div class="craft-recipes">${Mi.map(U=>`<article class="craft-recipe">${Bt(U.out)}<h3>${U.count} ${U.name}</h3><p>${Object.entries(U.cost).map(([k,H])=>`${H} ${me[k].name.toLowerCase()} \xB7 voc\xEA tem ${l.inventory[k]}`).join("<br>")}</p><button data-recipe="${U.id}" ${Object.entries(U.cost).some(([k,H])=>l.inventory[k]<H)?"disabled":""}>Fabricar</button></article>`).join("")}</div><p class="craft-note">No modo Criativo voc\xEA pode colocar qualquer bloco sem gastar materiais.</p>`),w==="menu"&&(L="Meu mundo",N=`<div class="craft-goals"><div>Coletar 20 blocos<b>${l.stats.mined}/20</b>${l.stats.mined>=20?"\u2605 Conclu\xEDdo":"Continue explorando"}</div><div>Construir com 30 blocos<b>${l.stats.placed}/30</b>${l.stats.placed>=30?"\u2605 Conclu\xEDdo":"Construa sua casa"}</div><div>Fabricar 12 blocos<b>${l.stats.crafted}/12</b>${l.stats.crafted>=12?"\u2605 Conclu\xEDdo":"Use a bancada"}</div></div><div class="craft-menu-grid"><button data-action="resume">Continuar</button><button data-action="mode">${l.creative?"Voltar a Explorar":"Ativar Criativo e voar"}</button><button data-action="home">Voltar ao in\xEDcio do mundo</button><button data-action="market">Marketplace \xB7 comprar e vender</button><button data-action="journey">Mapa e novas aventuras</button><button data-action="companions">Minhas criaturas</button><button data-action="help">Como jogar</button><button data-action="fullscreen">Tela cheia</button><button data-action="exit">Menu de jogos</button></div><p class="craft-note">${Xe?"Mundo, constru\xE7\xF5es e mochila salvos neste navegador.":"N\xE3o foi poss\xEDvel salvar; seu mundo est\xE1 apenas nesta sess\xE3o."} Dia e noite mudam enquanto voc\xEA joga.</p>`),w==="help"&&(L="Como construir",N='<ul><li><b>WASD / setas ou direcional:</b> andar. Arraste a tela para olhar em qualquer dire\xE7\xE3o.</li><li><b>Espa\xE7o / Pular:</b> subir um bloco. Na \xE1gua, segure Nadar e avance em dire\xE7\xE3o \xE0 margem para sair do lago.</li><li><b>E / Quebrar:</b> coletar o bloco que est\xE1 na mira. <b>Q / Colocar:</b> colocar o bloco selecionado.</li><li><b>R / Usar:</b> abrir portas e ba\xFAs, operar a fornalha, dormir, sentar e cuidar dos animais. Escadas sobem automaticamente; a dire\xE7\xE3o acompanha seu olhar ao colocar.</li><li><b>Baldes:</b> selecione e toque em Usar mirando no lago ou em um l\xEDquido. Para despejar, mire no canal ou na lateral de uma borda e toque em Usar ou Colocar. \xC1gua e lava preenchem espa\xE7os de meio bloco e caem sem precisar de ch\xE3o abaixo. \xC1gua e lava lado a lado viram pedra. Os l\xEDquidos escorrem para baixo e pelos lados. Recolher a fonte faz a corrente secar.</li><li><b>Blocos pequenos:</b> cada pe\xE7a tem metade do tamanho. Quebrar retira apenas a parte na mira; Colocar encaixa uma pe\xE7a pequena. A mochila conta pe\xE7as; estruturas antigas continuam no lugar.</li><li><b>Animais:</b> mire em um adulto e toque em <b>Ca\xE7ar</b> (E) para obter carne, sem sangue. A carne vai \xE0 mochila; asse com madeira na fornalha e selecione a carne assada + Usar para comer. Toque em Usar para alimentar, acolher, tirar leite ou tosquiar. Abra Minhas criaturas para transportar ao curral; alimente dois adultos da mesma esp\xE9cie para ter filhotes.</li><li><b>Fazenda:</b> use a enxada no ch\xE3o; selecione sementes e use na terra preparada. Colha com Usar ap\xF3s 2 a 3 minutos. Alimente dois adultos pr\xF3ximos para ter filhotes.</li><li><b>Minera\xE7\xE3o:</b> madeira extrai carv\xE3o; pedra extrai ferro; ferro extrai ouro e cristal. Toque em Quebrar at\xE9 concluir. Fundir min\xE9rios usa carv\xE3o na fornalha.</li><li><b>Transporte:</b> use o barco na \xE1gua e o carrinho nos trilhos. Mire no ve\xEDculo e toque em Usar para entrar; toque novamente para sair.</li><li><b>Energia:</b> conecte alavancas, fios, portas, lumin\xE1rias e pist\xF5es. Toque em Usar na alavanca. O pist\xE3o empurra um bloco; desligue antes de remover.</li><li><b>1 a 9 e 0:</b> escolher material. <b>B:</b> mochila. <b>F:</b> fabricar. <b>Esc:</b> pausar.</li><li><b>Criativo:</b> ative na engrenagem. Espa\xE7o sobe; Shift desce. No celular use Subir e Descer.</li><li>No modo Explorar, construir gasta materiais; quebrar devolve um bloco \xE0 mochila. A rocha base fica protegida.</li><li>O mapa mostra o terreno e sua posi\xE7\xE3o. O mundo tem 96 \xD7 96 blocos de terreno e espa\xE7o para construir at\xE9 30 blocos de altura.</li></ul><button data-action="resume">Voltar ao jogo</button>');let T=Ee.content(w,P);T&&(L=T.title,N=T.body),n("craftTitle").textContent=L,n("craftBody").innerHTML=N,Ee.bind(n("craftBody"),w),n("craftBody").querySelectorAll("[data-select]").forEach(U=>U.onclick=()=>{l.selected=+U.dataset.select,te(),pe(),I()}),n("craftBody").querySelectorAll("[data-recipe]").forEach(U=>U.onclick=()=>{l.craft(U.dataset.recipe)&&(I(),te(),be(),Ae("Material fabricado!"))}),n("craftBody").querySelectorAll("[data-action]").forEach(U=>U.onclick=()=>{let k=U.dataset.action;if(k==="resume"&&pe(),k==="help"&&ie("help"),k==="market"&&ie("market"),k==="journey"&&ie("journey"),k==="companions"&&ie("companions"),k==="mode"&&(l.creative=ne?!0:!l.creative,l.player.vy=0,I(),te(),pe(),Ae(l.creative?"Criativo: blocos ilimitados e voo livre.":"Explorar: colete blocos para construir.")),k==="home"&&(l.home(),pe(),Ae("De volta ao in\xEDcio do mundo.")),k==="exit"&&(ve(),i()),k==="fullscreen")try{(document.fullscreenElement?document.exitFullscreen():s.requestFullscreen())?.catch(()=>Ae("Gire o celular para o modo paisagem."))}catch{Ae("Gire o celular para o modo paisagem.")}})}function ie(L,N=null){if(l){if(ne&&!["bag","menu","help"].includes(L)){Ae("Este recurso est\xE1 dispon\xEDvel no mundo individual.");return}De(),w=L,P=N,n("craftSheet").hidden=!1,be(),n("craftClose").focus(),I()}}function pe(){w=null,n("craftSheet").hidden=!0,De(),C=performance.now(),r.focus()}function Se(L){if(!o||!y)return;v=requestAnimationFrame(Se);let N=Math.min(.05,(L-C)/1e3||0);C=L,!document.hidden&&!ne&&l.tickLife(N,!w),Ee.tick(),l.notice&&(Ae(l.notice),l.notice=null),(l.lifeDirty||l.dirty.size)&&J(),!w&&!document.hidden&&l.update(N,{x:ee.x+(q.has("d")||q.has("arrowright")?1:0)-(q.has("a")||q.has("arrowleft")?1:0),z:ee.z+(q.has("s")||q.has("arrowdown")?1:0)-(q.has("w")||q.has("arrowup")?1:0),sprint:q.has("shift")&&!l.creative,up:le+(q.has(" ")?1:0)-de-(q.has("shift")&&l.creative?1:0)}),document.hidden||(it(),ke+=N,ke>3&&(I(),ke=0));let T=l.player;f.position.set(T.x,T.y+(l.seated?.85:1.58),T.z),f.rotation.set(T.pitch,T.yaw,0,"YXZ");let U=.65+.35*Math.cos(l.time/120);u.background.setRGB(.28+U*.36,.39+U*.4,.48+U*.4),u.fog.color.copy(u.background),p.intensity=1.1+U,g.intensity=.4+U,d.flow[22].map.offset.y=l.time*.35,d.flow[23].map.offset.y=l.time*.12,m.position.y=5.12+Math.sin(l.time*.5)*.025;for(let k=0;k<D.length;k++){let H=l.animals[k],Y=D[k];Y.position.set(H.x,H.y,H.z),Y.rotation.y=H.yaw,Y.scale.setScalar(l.baby(H)?.55:1),Y.position.y+=H.type==="capybara"&&H.y<5.12?Math.sin(l.time*2+k)*.035:0}for(let k=0;k<O.length;k++){let H=l.vehicles[k];O[k].position.set(H.x,H.y,H.z),O[k].rotation.y=H.yaw}for(let k=0;k<G.length;k++){let H=l.villagers[k];G[k].rotation.y=Math.atan2(T.x-H.x,T.z-H.z)}Ze+=N,Te+=N,Ze>.08&&(R(),te(),Ze=0),Te>.7&&(K(),Te=0),Le.tick(N),c.render(u,f),L>nt&&n("craftToast").classList.remove("visible")}let se=n("craftJoystick"),ue=L=>{let N=se.getBoundingClientRect(),T=N.width*.3,U=L.clientX-N.left-N.width/2,k=L.clientY-N.top-N.height/2,H=Math.hypot(U,k),Y=H>T?T/H:1;ee={x:U*Y/T,z:k*Y/T},n("craftStick").style.transform=`translate(${U*Y}px,${k*Y}px)`};se.addEventListener("pointerdown",L=>{w||(L.preventDefault(),j=L.pointerId,se.setPointerCapture(j),ue(L))}),se.addEventListener("pointermove",L=>{L.pointerId===j&&ue(L)});for(let L of["pointerup","pointercancel","lostpointercapture"])se.addEventListener(L,N=>{N.pointerId===j&&(j=null,ee={x:0,z:0},n("craftStick").style.transform="translate(0px,0px)")});r.addEventListener("pointerdown",L=>{w||!l||ae!==null||(L.preventDefault(),ae=L.pointerId,$={x:L.clientX,y:L.clientY},r.setPointerCapture(ae),r.focus())}),r.addEventListener("pointermove",L=>{L.pointerId!==ae||!$||(L.preventDefault(),l.player.yaw-=(L.clientX-$.x)*.004,l.player.pitch=Math.max(-1.4,Math.min(1.4,l.player.pitch-(L.clientY-$.y)*.004)),$={x:L.clientX,y:L.clientY})});for(let L of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(L,N=>{N.pointerId===ae&&(ae=null,$=null)});r.addEventListener("contextmenu",L=>L.preventDefault());function Ce(L,N){L.addEventListener("pointerdown",T=>{w||!l||(T.preventDefault(),L.setPointerCapture(T.pointerId),N>0?(le=1,l.jump()):de=1)});for(let T of["pointerup","pointercancel","lostpointercapture"])L.addEventListener(T,()=>{N>0?le=0:de=0})}Ce(n("craftJump"),1),Ce(n("craftDown"),-1),n("craftMap").onclick=()=>ie("journey"),n("craftJourney").onclick=()=>ie("journey"),n("craftUse").onclick=V,n("craftMarket").onclick=()=>ie("market"),n("craftMine").onclick=()=>_("mine"),n("craftPlace").onclick=()=>_("place"),n("craftBag").onclick=()=>ie("bag"),n("craftRecipes").onclick=()=>ie("recipes"),n("craftMenu").onclick=()=>ie("menu"),n("craftClose").onclick=pe,n("craftExit").onclick=()=>{ve(),i()},document.addEventListener("keydown",L=>{if(!o||E)return;let N=L.key.toLowerCase();if(N==="escape"){L.preventDefault(),w?pe():ie("menu");return}if(w){if(N==="tab"){let T=[...n("craftSheet").querySelectorAll("button:not([disabled])")];L.shiftKey&&document.activeElement===T[0]?(L.preventDefault(),T.at(-1)?.focus()):!L.shiftKey&&document.activeElement===T.at(-1)&&(L.preventDefault(),T[0]?.focus())}return}(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","q","b","f","r","m"].includes(N)||/^\d$/.test(N))&&(L.preventDefault(),q.add(N),L.repeat||(N===" "&&l.jump(),N==="e"&&_("mine"),N==="q"&&_("place"),N==="r"&&V(),N==="m"&&ie("market"),N==="b"&&ie("bag"),N==="f"&&ie("recipes"),/^\d$/.test(N)&&(l.selected=+N||(l.selected>10?l.selected:10),te())))}),document.addEventListener("keyup",L=>q.delete(L.key.toLowerCase())),document.addEventListener("visibilitychange",()=>{document.hidden&&o&&!w&&ie("menu")}),window.addEventListener("blur",()=>{o&&!w&&ie("menu")}),window.addEventListener("pagehide",I),window.addEventListener("resize",()=>{o&&pt()});function ve(){o&&(o=!1,cancelAnimationFrame(v),De(),I(),s.hidden=!0,document.body.classList.remove("craft-playing"))}return window.BoxCraft.stop=ve,window.IntegroCraft={getState:()=>({active:o,initialized:y,panel:w,target:A?{...A}:null,...l?l.serialize():{}})},{async show(L){o=!0,s.hidden=!1,document.body.classList.add("craft-playing"),await Be(L),pt(),ie(Q?"menu":"intro"),C=performance.now(),v=requestAnimationFrame(Se)},hide:ve,help(){ie("help")},get active(){return o}}}window.BoxCraft={mountCraft:Xh};})();
