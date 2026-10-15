(()=>{var at=(i,e,t)=>i+96*(t+96*e);var _e=[null,{name:"Grama",color:7452750},{name:"Terra",color:10383440},{name:"Pedra",color:9542817},{name:"Madeira",color:9003325},{name:"Folhas",color:4364635},{name:"Areia",color:14994827},{name:"Tijolo",color:12021333},{name:"Vidro",color:10413535},{name:"T\xE1buas",color:13344100},{name:"Neve",color:15135475},{name:"Rocha base",color:4409687},{name:"Escada",color:13015137,group:"Constru\xE7\xE3o",price:12,pack:4},{name:"Porta",color:10055755,group:"Constru\xE7\xE3o",price:18},{name:"Cerca",color:14003314,group:"Constru\xE7\xE3o",price:10,pack:4},{name:"Cama",color:14575995,group:"Casa",price:35},{name:"Mesa",color:12950373,group:"Casa",price:20},{name:"Cadeira",color:9943470,group:"Casa",price:15},{name:"Ba\xFA",color:12223039,group:"Casa",price:28},{name:"Fornalha",color:7700612,group:"Casa",price:40},{name:"Lumin\xE1ria",color:16766319,group:"Casa",price:18},{name:"Banca do marketplace",color:5610374,group:"Casa",price:30},{name:"\xC1gua",color:5029335,fluid:!0},{name:"Lava",color:16742969,fluid:!0},{name:"Balde vazio",color:12175819,group:"Baldes",price:10,tool:!0},{name:"Balde de \xE1gua",color:4831717,group:"Baldes",price:14,tool:!0},{name:"Balde de lava",color:16743733,group:"Baldes",price:25,tool:!0},{name:"Vaca",color:15920865,group:"Animais",price:65,animal:"cow"},{name:"Porco",color:15307169,group:"Animais",price:45,animal:"pig"},{name:"Boi",color:9595723,group:"Animais",price:75,animal:"ox"},{name:"Balde de leite",color:16446424,group:"Baldes",tool:!0,price:18},{name:"Trigo",color:15188581,group:"Animais",price:10,pack:5,tool:!0},{name:"P\xE3o",color:14131801,group:"Casa",price:12,tool:!0},{name:"Terra preparada",color:7426361,group:"Fazenda",cube:!0},{name:"Sementes de trigo",color:14205294,group:"Fazenda",price:8,pack:4,tool:!0},{name:"Sementes de cenoura",color:9877607,group:"Fazenda",price:10,pack:4,tool:!0},{name:"Cenoura",color:16098116,group:"Fazenda",price:8,tool:!0},{name:"Planta\xE7\xE3o de trigo",color:13224044,prop:!0,nonSolid:!0,hidden:!0},{name:"Planta\xE7\xE3o de cenoura",color:7715684,prop:!0,nonSolid:!0,hidden:!0},{name:"Min\xE9rio de carv\xE3o",color:5593442,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de ferro",color:13871758,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de ouro",color:15978080,cube:!0,group:"Minera\xE7\xE3o"},{name:"Min\xE9rio de cristal",color:7201762,cube:!0,group:"Minera\xE7\xE3o"},{name:"Carv\xE3o",color:4409941,tool:!0,group:"Minera\xE7\xE3o",price:8},{name:"Barra de ferro",color:13162975,tool:!0,group:"Minera\xE7\xE3o",price:24},{name:"Barra de ouro",color:16766563,tool:!0,group:"Minera\xE7\xE3o",price:40},{name:"Cristal",color:7860964,tool:!0,group:"Minera\xE7\xE3o",price:70},{name:"Picareta de madeira",color:12093527,tool:!0,group:"Minera\xE7\xE3o",price:15,tier:1,durability:50},{name:"Picareta de pedra",color:10267312,tool:!0,group:"Minera\xE7\xE3o",price:35,tier:2,durability:100},{name:"Picareta de ferro",color:14280683,tool:!0,group:"Minera\xE7\xE3o",price:70,tier:3,durability:220},{name:"Machado",color:11452104,tool:!0,group:"Minera\xE7\xE3o",price:30,durability:100},{name:"P\xE1",color:11781318,tool:!0,group:"Minera\xE7\xE3o",price:20,durability:100},{name:"Enxada",color:12764072,tool:!0,group:"Fazenda",price:20,durability:100},{name:"Capivara",color:11108440,animal:"capybara",group:"Animais",price:55},{name:"Barco",color:12884577,tool:!0,group:"Transportes",price:45},{name:"Trilhos",color:11123140,prop:!0,nonSolid:!0,group:"Transportes",price:12,pack:8},{name:"Carrinho",color:8689571,tool:!0,group:"Transportes",price:65},{name:"Fio de energia",color:14658904,prop:!0,nonSolid:!0,group:"Mecanismos",price:10,pack:8},{name:"Alavanca",color:14792047,prop:!0,nonSolid:!0,group:"Mecanismos",price:15},{name:"Pist\xE3o",color:9545626,prop:!0,group:"Mecanismos",price:35},{name:"Mesa de encantamentos",color:8355014,prop:!0,group:"Minera\xE7\xE3o",price:100},{name:"L\xE3",color:16117983,cube:!0,group:"Constru\xE7\xE3o",price:12,pack:3},{name:"Ovelha",color:16773846,animal:"sheep",group:"Animais",price:45},{name:"Haste do pist\xE3o",color:13086855,prop:!0,hidden:!0},{name:"Carne crua",color:14125945,tool:!0,group:"Alimentos",price:10},{name:"Carne assada",color:10972222,tool:!0,group:"Alimentos",price:20}],ln=_e.map((i,e)=>e).filter(i=>i&&i!==11&&!_e[i].fluid&&!_e[i].hidden),di=[{id:"planks",name:"T\xE1buas",cost:{4:1},out:9,count:4},{id:"bricks",name:"Tijolos",cost:{3:4},out:7,count:4},{id:"glass",name:"Vidro",cost:{6:3},out:8,count:2},{id:"stairs",name:"Escadas",cost:{9:3},out:12,count:4},{id:"door",name:"Porta",cost:{9:4},out:13,count:1},{id:"fence",name:"Cercas",cost:{9:2},out:14,count:4},{id:"bed",name:"Cama",cost:{9:4,5:3},out:15,count:1},{id:"table",name:"Mesa",cost:{9:3},out:16,count:1},{id:"chair",name:"Cadeira",cost:{9:2},out:17,count:1},{id:"chest",name:"Ba\xFA",cost:{9:5},out:18,count:1},{id:"furnace",name:"Fornalha",cost:{3:8},out:19,count:1},{id:"lamp",name:"Lumin\xE1ria",cost:{4:1,8:2},out:20,count:1}],Qt=[{id:"glass",name:"Fundir vidro",cost:{6:3,4:1},out:8,count:3,seconds:12},{id:"brick",name:"Assar tijolos",cost:{2:4,4:1},out:7,count:4,seconds:15},{id:"bread",name:"Assar p\xE3o",cost:{31:3,4:1},out:32,count:2,seconds:10}],Bs=i=>i===30?14:i===32?8:i<=10?1:Math.max(1,Math.floor((_e[i]?.price||4)/(_e[i]?.pack||1)*.35));function cl(i,e={}){if(!i||_e[i]?.nonSolid||_e[i]?.fluid||_e[i]?.tool||_e[i]?.animal)return[];let t=i===12?[[0,0,0,1,.25,1],[0,.25,.25,1,.5,1],[0,.5,.5,1,.75,1],[0,.75,.75,1,1,1]]:i===13?e.open?[[0,0,0,.13,1.95,1]]:[[0,0,0,1,1.95,.13]]:i===14?[[0,0,.39,1,1.35,.61],[.39,0,0,.61,1.35,1]]:i===15?[[.05,0,.03,.95,.55,.97]]:i===16?[[.04,.66,.04,.96,.85,.96]]:i===17?[[.15,0,.15,.85,.52,.85],[.15,.52,.72,.85,1.15,.88]]:i===18?[[.07,0,.09,.93,.8,.91]]:i===20?[[.37,0,.37,.63,1.45,.63]]:i===21?[[0,0,0,1,.9,1]]:[[0,0,0,1,1,1]],n=e.rot||0;for(let s=0;s<n;s++)t=t.map(([r,a,o,l,c,h])=>[o,a,1-l,h,c,1-r]);return t}var Dn=i=>i===13||i===20||i===21?2:i===14||i===17?1.5:1,Xi=i=>!!i&&(i<=11||!!_e[i]?.cube),qi=i=>i>=12&&i<=23||!!_e[i]?.prop;di.push({id:"pickwood",name:"Picareta de madeira",cost:{9:5},out:47,count:1},{id:"pickstone",name:"Picareta de pedra",cost:{3:5,9:2},out:48,count:1},{id:"pickiron",name:"Picareta de ferro",cost:{44:3,9:2},out:49,count:1},{id:"axe",name:"Machado",cost:{3:3,9:2},out:50,count:1},{id:"shovel",name:"P\xE1",cost:{3:1,9:2},out:51,count:1},{id:"hoe",name:"Enxada",cost:{3:2,9:2},out:52,count:1},{id:"boat",name:"Barco",cost:{9:8},out:54,count:1},{id:"rail",name:"Trilhos",cost:{44:2,9:2},out:55,count:12},{id:"cart",name:"Carrinho",cost:{44:5},out:56,count:1},{id:"wire",name:"Fio de energia",cost:{45:1},out:57,count:12},{id:"lever",name:"Alavanca",cost:{3:1,9:1},out:58,count:1},{id:"piston",name:"Pist\xE3o",cost:{44:2,9:3},out:59,count:1},{id:"enchant",name:"Mesa de encantamentos",cost:{46:2,9:4,3:4},out:60,count:1});Qt.push({id:"iron",name:"Fundir ferro",cost:{40:2,43:1},out:44,count:2,seconds:18},{id:"gold",name:"Fundir ouro",cost:{41:2,43:1},out:45,count:2,seconds:22});Qt.push({id:"roast",name:"Assar carne",cost:{64:1,4:1},out:65,count:1,seconds:12});var cn=(i,e,t)=>Math.max(e,Math.min(t,i)),_n=(i,e)=>Number.isFinite(i)?i:e,zs=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[0,-1,0]],pi=i=>({x:i%96,z:Math.floor(i/96)%96,y:Math.floor(i/9216)}),hl=(i,e,t)=>{let n=Math.sin(i*127.1+e*73.13+t*311.7)*43758.5453;return n-Math.floor(n)};function ul(i){if(!i||![1,2].includes(i.version))return null;if(i.version===2)return i;let e=n=>at(n%48,Math.floor(n/2304),Math.floor(n/48)%48),t=n=>(Array.isArray(n)?n:[]).filter(s=>Array.isArray(s)&&Number.isInteger(s[0])&&s[0]>=0&&s[0]<2304*30).map(([s,r])=>[e(s),r]);return{...i,version:2,edits:t(i.edits),props:t(i.props)}}function vh(i,e){if(i>=58&&i<=78&&e>=13&&e<=29)return 9;let t=Math.abs(i-(62+Math.sin(e*.09)*5));return e>45&&t<3||Math.hypot(i-77,e-73)<11?3:e>45&&t<5||Math.hypot(i-77,e-73)<13?5:Math.floor(7+Math.sin(i*.13)*2+Math.cos(e*.17)*2+Math.max(0,1-Math.hypot(i-81,e-39)/16)*11+Math.max(0,1-Math.hypot(i-27,e-77)/17)*12)}function fl(i){for(let t=0;t<96;t++)for(let n=0;n<96;n++){if(t<48&&n<48)continue;let s=vh(t,n);for(let r=0;r<=s;r++){let a=r===0?11:r<s-2?3:r<s?2:s<6?6:s>14?10:1;if(a===3){let o=hl(t,r,n);o<.017?a=39:o<.03?a=40:o<.035&&r<9?a=41:o<.037&&r<6&&(a=42),r>1&&r<s-3&&Math.sin(t*.25)+Math.sin(n*.22)+Math.cos(r*.65)>2.25&&(a=0)}i.cells[at(t,r,n)]=a}if(s>5&&s<13&&!(t>=56&&t<=80&&n>=11&&n<=32)&&hl(t,0,n)<.018&&t>2&&n>2&&t<93&&n<93){for(let r=s+1;r<=s+4;r++)i.cells[at(t,r,n)]=4;for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++)for(let o=s+3;o<=s+5;o++)i.get(t+r,o,n+a)||(i.cells[at(t+r,o,n+a)]=5)}}let e=(t,n,s,r)=>{i.cells[at(t,n,s)]=r};for(let t of[60,72]){for(let n=t;n<t+5;n++)for(let s=16;s<22;s++){e(n,10,s,9);for(let r=11;r<=13;r++)e(n,r,s,n===t||n===t+4||s===16||s===21?9:0);e(n,14,s,7)}e(t+2,11,21,13),e(t+2,12,21,0),e(t+1,12,16,8),e(t+3,12,16,8),e(t+1,11,18,15),e(t+3,11,18,18),e(t+2,10,22,12)}for(let t=58;t<=79;t++)for(let n=24;n<=26;n++)e(t,9,n,7);e(66,10,20,21),e(68,10,20,19),e(70,10,20,60);for(let t=79;t<=89;t++){let n=Math.max(2,7-Math.floor((89-t)/2));for(let s=34;s<=36;s++){for(let r=n+1;r<30;r++)e(t,r,s,0);e(t,n,s,3),t%2===0&&e(t,n+1,s,12)}e(t,n+1,33,t%4===0?42:t%3===0?41:t%2===0?40:39)}for(let t=90;t<96;t++)for(let n=34;n<=36;n++){for(let s=8;s<30;s++)e(t,s,n,0);e(t,7,n,3)}for(let t=60;t<=78;t++)e(t,10,28,55)}function dl(i){let e={};for(let t of["mine","use","useAnimal","tickLife","bucket","place","set","home","update"])e[t]=i[t];return{initAdventure(t){this.features=new Map;for(let n=0;n<this.cells.length;n++)qi(this.cells[n])&&this.features.set(n,this.cells[n]);this.riding=null,this.flowTime=0,this.gardenTime=0,this.mineProgress=null,this.toolWear={},this.enchants={},this.vitals={health:cn(_n(t?.vitals?.health,100),1,100),hunger:cn(_n(t?.vitals?.hunger,100),0,100)},this.xp=cn(_n(t?.xp,0),0,999999),this.respawn=t?.respawn&&["x","y","z"].every(n=>Number.isFinite(t.respawn[n]))?{...t.respawn}:null;for(let[n,s]of _e.entries())s?.durability&&(this.toolWear[n]=cn(_n(t?.toolWear?.[n],s.durability),1,s.durability),this.enchants[n]=cn(Math.floor(_n(t?.enchants?.[n],0)),0,3));this.fluidSources=new Map,this.flowCells=new Set;for(let[n,s]of this.features)(s===22||s===23)&&this.fluidSources.set(n,s);if(t?.adventure){this.fluidSources.clear();for(let[n,s]of t.fluidSources||[])Number.isInteger(n)&&this.cells[n]===s&&[22,23].includes(s)&&this.fluidSources.set(n,s);for(let n of t.flowCells||[])Number.isInteger(n)&&[22,23].includes(this.cells[n])&&!this.fluidSources.has(n)&&this.flowCells.add(n)}for(let[n,s]of t?.props||[])if(this.features.has(n)&&s&&typeof s=="object"){let r=this.cells[n],a=this.props.get(n)||{};[37,38].includes(r)&&Object.assign(a,{planted:Math.max(0,_n(s.planted,this.lifeTime)),growth:cn(_n(s.growth,0),0,180),stage:cn(Math.floor(_n(s.stage,0)),0,3)}),[57,58,59].includes(r)&&Object.assign(a,{on:s.on===!0,powered:s.powered===!0,extended:s.extended===!0,rot:cn(Math.floor(_n(s.rot,0)),0,3)}),this.props.set(n,a)}if(this.vehicles=(Array.isArray(t?.vehicles)?t.vehicles:[]).filter(n=>[54,56].includes(n.type)&&["x","y","z","yaw"].every(s=>Number.isFinite(n[s]))&&n.x>0&&n.x<96&&n.z>0&&n.z<96).slice(0,12).map(n=>({...n})),!t?.adventure){Object.assign(this.inventory,{34:8,35:8,47:1,52:1,54:1,55:24,56:1,57:16,58:2});for(let[n,s]of[[73,61],[76,61],[86,65],[88,67]]){let r=this.surface(n,s)+1;this.animals.length<40&&this.animals.push({type:"capybara",x:n+.5,z:s+.5,y:Math.max(r,5.12-.45),yaw:2,turn:0,feedAt:0,milkAt:0,bornAt:-300})}this.vehicles.push({type:56,x:65.5,y:10.1,z:28.5,yaw:Math.PI/2})}this.villagers=[{x:65.5,y:10,z:23.5,name:"Lia \xB7 agricultora",trade:"farmer"},{x:69.5,y:10,z:23.5,name:"Bento \xB7 minerador",trade:"miner"}],this.lifeDirty=!0},trackFeature(t,n){this.features&&(qi(n)?this.features.set(t,n):this.features.delete(t),[22,23].includes(n)||(this.fluidSources?.delete(t),this.flowCells?.delete(t)))},adventureSave(){return{adventure:1,worldSize:96,toolWear:{...this.toolWear},enchants:{...this.enchants},vitals:{...this.vitals},xp:this.xp,respawn:this.respawn,vehicles:this.vehicles.map(t=>({...t})),fluidSources:[...this.fluidSources],flowCells:[...this.flowCells]}},biome(){let t=this.player;return t.x>=58&&t.x<=80&&t.z>=12&&t.z<=31?"VILA INTEGRO":t.x>55&&t.z>48?"RIO DAS CAPIVARAS":t.y>14?"MONTANHAS NEVADAS":t.x>74&&t.z>30&&t.z<45?"MINAS DE CRISTAL":t.y<6?"PRAIA DAS CONCHAS":"VALE VERDE"},home(){e.home.call(this),this.respawn&&this.respawn.x>1&&this.respawn.x<95&&this.respawn.z>1&&this.respawn.z<95&&this.respawn.y>0&&this.respawn.y<40&&!this.collides(this.respawn.x,this.respawn.y,this.respawn.z)&&Object.assign(this.player,this.respawn,{vy:0})},update(t,n={}){let s=this.player.vy;e.update.call(this,t,n),!this.creative&&s<-12&&this.player.grounded&&!this.inWater()&&(this.vitals.health=Math.max(25,this.vitals.health-Math.round((Math.abs(s)-12)*2)))},wear(t){let n=_e[t];!n?.durability||this.creative||!this.inventory[t]||(this.toolWear[t]=(this.toolWear[t]||n.durability)-1,this.toolWear[t]<=0&&(this.inventory[t]=Math.max(0,this.inventory[t]-1),this.toolWear[t]=n.durability,this.inventory[t]||(this.notice=n.name+" gastou. Fabrique outra na bancada.")))},mine(t){let n=this.get(t.x,t.y,t.z),s=_e[this.selected];if([37,38].includes(n))return this.harvest(t)?n:!1;if(n===63||n===59&&this.meta(t).extended)return this.notice="Desligue o pist\xE3o antes de remover.",!1;if(!this.creative&&n>=39&&n<=42){let a=n===39?1:n===40?2:3;if(!s?.tier||s.tier<a||!this.inventory[this.selected])return this.notice="Use uma picareta "+(a===1?"de madeira ou melhor.":a===2?"de pedra ou ferro.":"de ferro."),!1}if(!this.creative&&n&&n!==11&&this.nearby(t)&&!_e[n]?.fluid){let a=at(t.x,t.y,t.z),o=!!s?.tier&&this.inventory[this.selected]>0,l=this.selected===50&&this.inventory[50]>0,c=this.selected===51&&this.inventory[51]>0,h=n>=39&&n<=42||n===3||n===4?3:1;o&&(n===3||n>=39&&n<=42)&&(h=Math.max(1,h-s.tier+1-(this.enchants[this.selected]||0))),(l&&[4,9].includes(n)||c&&[1,2,6,33].includes(n))&&(h=1);let f=this.mineProgress?.key===a&&this.mineProgress.tool===this.selected?this.mineProgress:{key:a,tool:this.selected,hits:0};if(f.hits++,this.mineProgress=f,f.hits<h)return this.notice="Minerando: "+f.hits+"/"+h+" \xB7 toque em Quebrar novamente",!1}let r=e.mine.call(this,t);if(r){if(this.mineProgress=null,!this.creative&&(this.xp+=n>=39&&n<=42?4:1,this.wear(this.selected),n===39||n===42)){this.inventory[n]--;let a=n===39?43:46;this.inventory[a]=Math.min(9999,this.inventory[a]+1+(this.enchants[this.selected]>=2?1:0))}this.solveCircuits()}return r},place(t){let n=e.place.call(this,t);return n&&this.solveCircuits(),n},eat(){let t=this.selected;return t===64&&this.inventory[t]?(this.notice="Asse a carne na fornalha antes de comer.",!0):![32,36,30,65].includes(t)||!this.inventory[t]?!1:this.vitals.hunger>=100&&this.vitals.health>=100?(this.notice="Voc\xEA j\xE1 est\xE1 alimentado e descansado.",!0):(this.inventory[t]--,t===30&&this.inventory[24]++,this.vitals.hunger=cn(this.vitals.hunger+(t===65?55:t===32?35:t===36?20:25),0,100),this.vitals.health=cn(this.vitals.health+(t===65?20:12),0,100),this.notice="Que del\xEDcia! Fome e energia recuperadas.",!0)},farm(t){if(!t||!this.nearby(t))return null;let n=this.selected,s=this.get(t.x,t.y,t.z);if(n===52)return!this.creative&&!this.inventory[52]?"Pegue a enxada na mochila.":![1,2,33].includes(s)||this.get(t.x,t.y+1,t.z)?"Use a enxada em terra ou grama com espa\xE7o livre acima.":(this.set(t.x,t.y,t.z,33),this.wear(52),"Terra preparada! Selecione sementes e toque em Usar.");if(n===34||n===35){if(!this.creative&&!this.inventory[n])return"Suas sementes acabaram. Compre ou colha mais.";let r={x:t.x,y:t.y+1,z:t.z};return s!==33||this.occupied(r.x,r.y,r.z)||this.overlaps(r.x,r.y,r.z)?"Plante em terra preparada com a enxada.":this.set(r.x,r.y,r.z,n===34?37:38)?(this.setMeta(r,{growth:0,stage:0,planted:this.lifeTime}),this.creative||this.inventory[n]--,"Plantado! Cresce em 2 min perto da \xE1gua ou 3 min sem irriga\xE7\xE3o."):"N\xE3o h\xE1 espa\xE7o para plantar."}return null},irrigated(t){for(let n=-4;n<=4;n++)for(let s=-4;s<=4;s++)if(Math.abs(n)+Math.abs(s)<=4){let r=t.x+n,a=t.z+s;if(r<0||a<0||r>=96||a>=96)continue;for(let o=t.y-2;o<=t.y;o++)if(this.get(r,o,a)===22)return!0;if(t.y<=7&&this.surface(r,a)<5.12-1)return!0}return!1},harvest(t){let n=this.get(t.x,t.y,t.z),s=this.meta(t);if(![37,38].includes(n)||!this.nearby(t))return!1;if((s.growth||0)<180)return this.notice="Crescendo: "+Math.floor((s.growth||0)/1.8)+"%. Aguarde a colheita.",!1;let r=n===37?31:36,a=n===37?34:35;return this.inventory[r]>9996||this.inventory[a]>9997?(this.notice="Guarde itens no ba\xFA antes de colher.",!1):(this.inventory[r]+=3,this.inventory[a]+=2,this.set(t.x,t.y,t.z,0),this.xp+=5,this.notice="Colheita pronta: +3 "+_e[r].name+" e +2 sementes!",!0)},use(t){if(!this.nearby(t))return"Aproxime-se para usar.";let n=this.get(t.x,t.y,t.z);if([37,38].includes(n)){this.harvest(t);let s=this.notice;return this.notice=null,s}if(n===58)return this.setMeta(t,{...this.meta(t),on:!this.meta(t).on}),this.solveCircuits(),"Circuito "+(this.meta(t).on?"ligado":"desligado")+". Conecte fios \xE0 porta, lumin\xE1ria ou pist\xE3o.";if(n===15){let s=e.use.call(this,t);return this.vitals.health=100,this.respawn={x:this.player.x,y:this.player.y,z:this.player.z},s+" Seu retorno foi marcado aqui."}return n===57?"Fio de energia. Ligue uma alavanca \xE0 porta, lumin\xE1ria ou pist\xE3o com fios encostados.":e.use.call(this,t)},huntAnimal(t){let n=Number.isInteger(t)?this.animals[t]:null;if(!n||Math.hypot(n.x-this.player.x,n.y-this.player.y,n.z-this.player.z)>4)return"Aproxime-se do animal para ca\xE7ar.";if(this.baby(n))return"Este animal ainda \xE9 filhote. Deixe crescer.";let s={cow:3,ox:4,pig:3,sheep:2,capybara:2}[n.type];return s?(this.inventory[64]||0)+s>9999?"Sua mochila est\xE1 cheia. Guarde a carne no ba\xFA.":(this.animals.splice(t,1),this.inventory[64]=(this.inventory[64]||0)+s,this.xp=Math.min(999999,this.xp+3),this.lifeDirty=!0,"+"+s+" carne crua na mochila. Asse na fornalha para comer!"):"Este animal n\xE3o pode ser coletado."},baby(t){return this.lifeTime-(t.bornAt??-300)<240},useAnimal(t){let n=this.animals[t];if(!n||Math.hypot(n.x-this.player.x,n.y-this.player.y,n.z-this.player.z)>7)return"Aproxime-se do animal.";if(n.type==="sheep"&&this.selected===50&&this.inventory[50])return this.lifeTime<(n.shearAt||0)?"A l\xE3 ainda est\xE1 crescendo.":(n.shearAt=this.lifeTime+120,this.inventory[61]+=3,this.wear(50),"Ovelha cuidada: +3 l\xE3!");if(this.baby(n)&&this.selected===24)return"O filhote ainda est\xE1 crescendo.";let s=this.selected;if([31,36].includes(s)&&this.inventory[s]){if(this.lifeTime<n.feedAt)return"J\xE1 est\xE1 alimentado! Aguarde "+Math.ceil(n.feedAt-this.lifeTime)+" s.";if(this.inventory[s]--,n.feedAt=this.lifeTime+30,this.creative||(this.coins=Math.min(999999,this.coins+5)),n.loveUntil=this.lifeTime+45,!this.baby(n)&&this.lifeTime>=(n.breedAt||0)&&this.animals.length<40){let r=this.animals.find(a=>a!==n&&a.type===n.type&&!this.baby(a)&&this.lifeTime<(a.loveUntil||0)&&this.lifeTime>=(a.breedAt||0)&&Math.hypot(n.x-a.x,n.z-a.z)<6);if(r)return n.babyDue=this.lifeTime+30,n.breedAt=r.breedAt=this.lifeTime+240,n.loveUntil=r.loveUntil=0,"Fam\xEDlia crescendo! Um filhote chegar\xE1 em 30 segundos."}return(this.baby(n)?"Filhote alimentado!":"Animal alimentado! Alimente outro adulto da mesma esp\xE9cie por perto para ter um filhote.")+(this.creative?"":" +5 integros")}return n.type==="capybara"?"Capivara tranquila! Ofere\xE7a trigo ou cenoura. Duas adultas alimentadas podem ter filhotes.":e.useAnimal.call(this,t)},trade(t,n){let s=this.villagers[t];if(!s||Math.hypot(s.x-this.player.x,s.z-this.player.z)>7||this.creative)return!1;let r=Fa[s.trade]?.[n];if(!r||Object.entries(r.cost).some(([a,o])=>this.inventory[a]<o)||this.inventory[r.out]+r.count>9999)return!1;for(let[a,o]of Object.entries(r.cost))this.inventory[a]-=o;return this.inventory[r.out]+=r.count,this.xp+=2,!0},enchant(t,n){return this.get(t.x,t.y,t.z)!==60||!this.nearby(t)||!_e[n]?.tier||!this.inventory[n]||(this.enchants[n]||0)>=3||this.xp<20||this.inventory[46]<1?!1:(this.xp-=20,this.inventory[46]--,this.enchants[n]=(this.enchants[n]||0)+1,this.toolWear[n]=_e[n].durability,!0)},bucket(t){let n=this.selected,s=t?.place;if([25,26].includes(n)&&this.fluidSources.size>=64)return this.notice="Recolha uma fonte de l\xEDquido antes de colocar outra.",!1;if([25,26].includes(n)&&s&&this.nearby(s)&&!this.overlaps(s.x,s.y,s.z)&&(this.creative||this.inventory[n]>0)){let a=this.get(s.x,s.y,s.z),o=n===25?23:22;if(a===o){this.set(s.x,s.y,s.z,3);for(let[l,,c]of zs.slice(0,4))this.get(s.x+l,s.y,s.z+c)===o&&this.set(s.x+l,s.y,s.z+c,3);return this.creative||(this.inventory[n]--,this.inventory[24]++),this.spreadFluids(),!0}}let r=e.bucket.call(this,t);if(r){if(n===24&&!t.lake)this.fluidSources.delete(at(t.x,t.y,t.z));else if(n!==24&&t.place){let a=t.place,o=at(a.x,a.y,a.z),l=this.get(a.x,a.y,a.z);[22,23].includes(l)&&this.fluidSources.set(o,l)}this.spreadFluids()}return r},spreadFluids(){let t=new Map,n=[];for(let[a,o]of this.fluidSources){if(this.cells[a]!==o){this.fluidSources.delete(a);continue}n.push([a,o,0]),t.set(a,o)}let s=a=>!this.cells[a]||this.flowCells.has(a)||[22,23].includes(this.cells[a]),r=0;for(;r<n.length&&t.size<400;){let[a,o,l]=n[r++],c=pi(a);if(c.y<=1)continue;let h=at(c.x,c.y-1,c.z),f=this.cells[h];if(f&&[22,23].includes(f)&&f!==o){this.set(c.x,c.y-1,c.z,3),this.fluidSources.delete(h);continue}if(s(h)&&!t.has(h)){t.set(h,o),n.push([h,o,l]);continue}if(!(l>=(o===22?4:2)))for(let[p,,m]of zs.slice(0,4)){let x=c.x+p,g=c.z+m;if(x<1||g<1||x>=95||g>=95)continue;let d=at(x,c.y,g),u=this.cells[d];if([22,23].includes(u)&&u!==o){this.set(x,c.y,g,3),this.fluidSources.delete(d);continue}s(d)&&!t.has(d)&&t.size<400&&(t.set(d,o),n.push([d,o,l+1]))}}for(let a of[...this.flowCells])if(!t.has(a)){let o=pi(a);[22,23].includes(this.cells[a])&&this.set(o.x,o.y,o.z,0)}this.flowCells.clear();for(let[a,o]of t){if(this.fluidSources.has(a))continue;let l=pi(a);this.cells[a]!==o&&this.set(l.x,l.y,l.z,o),this.flowCells.add(a)}},solveCircuits(){if(!this.features)return;let t=new Set,n=[];for(let[s,r]of this.features)r===58&&this.props.get(s)?.on&&(t.add(s),n.push(s));for(let s=0;s<n.length&&s<256;s++){let r=pi(n[s]);for(let[a,o,l]of zs){let c=r.x+a,h=r.y+o,f=r.z+l;if(c<0||f<0||c>=96||f>=96||h<1||h>=30)continue;let p=at(c,h,f),m=this.cells[p];[57,58,13,20,59].includes(m)&&!t.has(p)&&(t.add(p),m===57&&n.push(p))}}for(let[s,r]of[...this.features])if([57,13,20,59].includes(r)){let a=pi(s),o=this.meta(a),l=t.has(s);if(!l&&!o.powered)continue;let c={...o,powered:l};if(r===13&&(c.open=l,this.setMeta(a,c),this.player&&this.collides(this.player.x,this.player.y,this.player.z)&&(c.open=!0)),r===20&&(c.lit=l),r===59){let h=c.rot||0,f=[0,1,0,-1][h],p=[-1,0,1,0][h],m={x:a.x+f,y:a.y,z:a.z+p},x={x:a.x+f*2,y:a.y,z:a.z+p*2},g=this.get(m.x,m.y,m.z);l&&!c.extended&&(g===0||Xi(g)&&g!==11)&&!this.occupied(x.x,x.y,x.z)&&!this.overlaps(m.x,m.y,m.z)&&!this.overlaps(x.x,x.y,x.z)&&x.x>0&&x.z>0&&x.x<95&&x.z<95&&(g&&this.set(x.x,x.y,x.z,g),this.set(m.x,m.y,m.z,63),c.extended=!0),!l&&c.extended&&(g===63&&this.set(m.x,m.y,m.z,0),c.extended=!1)}this.setMeta(a,c)}},waterAt(t,n){let s=Math.floor(t),r=Math.floor(n);if(s<1||r<1||s>=95||r>=95)return null;for(let a=28;a>0;a--)if(this.get(s,a,r)===22&&!this.get(s,a+1,r))return a+.65;return this.surface(s,r)<5.12-1?5.12-.15:null},launchVehicle(t){let n=this.selected;if(![54,56].includes(n)||!t||!this.nearby(t)||!this.creative&&!this.inventory[n]||this.vehicles.length>=12)return!1;let s=t.x+.5,r=t.z+.5,a=this.waterAt(s,r),o=n===54?a:t.y+.1;return n===54&&a===null||n===56&&this.get(t.x,t.y,t.z)!==55||this.vehicles.some(l=>Math.hypot(l.x-s,l.z-r)<1)?!1:(this.creative||this.inventory[n]--,this.vehicles.push({type:n,x:s,y:o,z:r,yaw:this.player.yaw}),this.lifeDirty=!0,!0)},board(t){let n=this.vehicles[t];return!n||Math.hypot(n.x-this.player.x,n.z-this.player.z)>7?!1:(this.riding=t,Object.assign(this.player,{x:n.x,y:n.y+.4,z:n.z,vy:0}),!0)},dismount(){let t=this.vehicles[this.riding];if(!t)return!1;for(let n=1;n<=3;n++)for(let[s,,r]of zs.slice(0,4)){let a=t.x+s*n,o=t.z+r*n,l=this.surface(Math.floor(a),Math.floor(o))+1.04;if(l>=5.12&&!this.collides(a,l,o))return Object.assign(this.player,{x:a,y:l,z:o,vy:0}),this.riding=null,!0}return this.notice="Aproxime-se da margem para desembarcar.",!1},drive(t,n){let s=this.vehicles[this.riding];if(!s){this.riding=null;return}let r=this.player,a=Math.max(1,Math.hypot(n.x||0,n.z||0)),o=s.type===54?6:8,l=((n.x||0)*Math.cos(r.yaw)+(n.z||0)*Math.sin(r.yaw))/a*t*o,c=(-(n.x||0)*Math.sin(r.yaw)+(n.z||0)*Math.cos(r.yaw))/a*t*o;for(let h of["x","z"]){let f=s.x+(h==="x"?l:0),p=s.z+(h==="z"?c:0),m=s.type===54?this.waterAt(f,p):this.get(Math.floor(f),Math.round(s.y),Math.floor(p))===55?s.y:null;m!==null&&!this.collides(f,m+.35,p)&&(s.x=f,s.z=p,s.y=m)}(l||c)&&(s.yaw=Math.atan2(-l,-c)),Object.assign(r,{x:s.x,y:s.y+.4,z:s.z,vy:0})},tickLife(t,n=!0){if(e.tickLife.call(this,t,n),this.gardenTime+=t,this.flowTime+=t,n&&!this.creative&&(this.vitals.hunger=Math.max(0,this.vitals.hunger-t*.065),this.vitals.hunger>60&&(this.vitals.health=Math.min(100,this.vitals.health+t*.5)),this.vitals.hunger<=0&&(this.vitals.health=Math.max(25,this.vitals.health-t*.2))),this.gardenTime>=1){let s=this.gardenTime;this.gardenTime=0;for(let[r,a]of[...this.features])if([37,38].includes(a)){let o=pi(r),l={...this.meta(o)};if(this.get(o.x,o.y-1,o.z)!==33){this.set(o.x,o.y,o.z,0);continue}l.growth=Math.min(180,(l.growth||0)+s*(this.irrigated(o)?1.5:1));let c=Math.min(3,Math.floor(l.growth/60));c!==l.stage&&(l.stage=c,this.lifeDirty=!0),this.props.set(r,l)}for(let r of[...this.animals])r.babyDue&&r.babyDue<=this.lifeTime&&this.animals.length<40&&(r.babyDue=0,this.animals.push({...r,bornAt:this.lifeTime,breedAt:this.lifeTime+240,loveUntil:0,feedAt:this.lifeTime+5,milkAt:this.lifeTime+240,turn:0}),this.lifeDirty=!0,this.notice="Nasceu um filhote de "+{capybara:"capivara",cow:"vaca",pig:"porco",ox:"boi",sheep:"ovelha"}[r.type]+"!")}this.flowTime>=1&&(this.flowTime=0,this.spreadFluids())}}}var Fa={farmer:[{name:"Trocar 6 trigos por 4 cenouras",cost:{31:6},out:36,count:4},{name:"Trocar 3 cenouras por 6 sementes",cost:{36:3},out:34,count:6},{name:"Trocar 4 trigos por 2 p\xE3es",cost:{31:4},out:32,count:2}],miner:[{name:"Trocar 8 carv\xF5es por 2 barras de ferro",cost:{43:8},out:44,count:2},{name:"Trocar 4 barras de ouro por 1 cristal",cost:{45:4},out:46,count:1}]};var qt=i=>Number.isFinite(i),Yi=(i,e,t)=>Math.max(e,Math.min(t,i)),pl={initLife(i){this.props=new Map,this.coins=Math.floor(Yi(qt(i?.coins)?i.coins:180,0,999999)),this.lifeTime=qt(i?.lifeTime)?i.lifeTime:0,this.lifeDirty=!0;for(let e of ln)this.inventory[e]===void 0&&(this.inventory[e]=0);if(!i?.expansion)Object.assign(this.inventory,{12:12,13:2,14:20,15:1,16:1,17:2,18:1,19:1,20:2,21:1,24:1,25:1,26:1,31:10});else for(let e of ln)e>11&&(this.inventory[e]=Math.floor(Yi(Number(i.inventory?.[e])||0,0,9999)));for(let e of Array.isArray(i?.props)?i.props:[]){let[t,n]=Array.isArray(e)?e:[];if(!Number.isInteger(t)||!n||typeof n!="object"||t<0||t>=this.cells.length||this.cells[t]<12||this.cells[t]>63)continue;let s={rot:Math.floor(Yi(Number(n.rot)||0,0,3)),open:n.open===!0,lit:n.lit!==!1,stored:{}};if(this.cells[t]===18)for(let r of ln)s.stored[r]=Math.floor(Yi(Number(n.stored?.[r])||0,0,9999));if(this.cells[t]===19&&Qt.some(r=>r.id===n.job?.id)){let r=Qt.find(a=>a.id===n.job.id);s.job={id:r.id,remaining:Yi(Number(n.job.remaining)||0,0,r.seconds)}}this.props.set(t,s)}if(this.animals=[],i?.expansion&&Array.isArray(i.animals))for(let e of i.animals.slice(0,40))!["cow","pig","ox","sheep","capybara"].includes(e.type)||!qt(e.x)||!qt(e.z)||e.x<1||e.z<1||e.x>94||e.z>94||this.animals.push({type:e.type,x:e.x,z:e.z,y:this.surface(Math.floor(e.x),Math.floor(e.z))+1,yaw:qt(e.yaw)?e.yaw:0,turn:0,feedAt:qt(e.feedAt)?e.feedAt:0,milkAt:qt(e.milkAt)?e.milkAt:0,bornAt:qt(e.bornAt)?e.bornAt:-300,breedAt:qt(e.breedAt)?e.breedAt:0,loveUntil:qt(e.loveUntil)?e.loveUntil:0,babyDue:qt(e.babyDue)?e.babyDue:0,shearAt:qt(e.shearAt)?e.shearAt:0});else for(let[e,t]of["cow","pig","ox","sheep","cow","pig"].entries())for(let n=0;n<200;n++){let s=12+(e*5+n*3)%22,r=7+(e*7+n*5)%27,a=this.surface(s,r);if(a>=5&&this.get(s,a,r)!==5&&this.get(s,a,r)!==4){this.animals.push({type:t,x:s+.5,z:r+.5,y:a+1,yaw:e,turn:0,feedAt:0,milkAt:0});break}}},meta(i){return this.props.get(at(i.x,i.y,i.z))||{rot:0}},setMeta(i,e){this.props.set(at(i.x,i.y,i.z),e),this.lifeDirty=!0},nearby(i){return i&&Math.hypot(i.x+.5-this.player.x,i.y+.5-(this.player.y+1.5),i.z+.5-this.player.z)<=7},occupied(i,e,t){if(this.get(i,e,t))return!0;let n=this.get(i,e-1,t);return n>=12&&n<=21&&Dn(n)>1},collisionAt(i,e,t){if(i<.32||t<.32||i>96-.32||t>96-.32)return!0;for(let n=Math.floor(i-.29);n<=Math.floor(i+.29);n++)for(let s=Math.floor(e+.02)-1;s<=Math.floor(e+1.74);s++)for(let r=Math.floor(t-.29);r<=Math.floor(t+.29);r++)for(let a of cl(this.get(n,s,r),this.meta({x:n,y:s,z:r})))if(i+.29>n+a[0]&&i-.29<n+a[3]&&e+1.74>s+a[1]&&e+.02<s+a[4]&&t+.29>r+a[2]&&t-.29<r+a[5])return!0;return!1},stepMove(i,e){let t=this.player;if(!this.collides(i,t.y,e)){t.x=i,t.z=e;return}if(this.creative||t.vy>0||!this.collides(t.x,t.y-.12,t.z))return;let n=!1;for(let s=Math.floor(i-.3);s<=Math.floor(i+.3);s++)for(let r=Math.floor(e-.3);r<=Math.floor(e+.3);r++)for(let a=Math.floor(t.y)-1;a<=Math.floor(t.y+.3);a++)this.get(s,a,r)===12&&(n=!0);n&&!this.collides(t.x,t.y+.27,t.z)&&!this.collides(i,t.y+.27,e)&&(t.x=i,t.z=e,t.y+=.27,t.vy=0)},buy(i){let e=_e[i],t=e?.pack||1;return!e?.price||!ln.includes(i)||this.coins<e.price||this.inventory[i]+t>9999?!1:(this.coins-=e.price,this.inventory[i]+=t,!0)},sell(i,e=1){return!ln.includes(i)||!Number.isInteger(e)||e<1||this.inventory[i]<e||this.creative?!1:(this.inventory[i]-=e,this.coins=Math.min(999999,this.coins+Bs(i)*e),i===30&&(this.inventory[24]=Math.min(9999,this.inventory[24]+e)),!0)},use(i){let e=this.get(i.x,i.y,i.z);if(!this.nearby(i))return"Aproxime-se para usar.";let t={...this.meta(i)};if(e===13){t.open=!t.open;let n=this.meta(i);return this.setMeta(i,t),this.collides(this.player.x,this.player.y,this.player.z)?(this.setMeta(i,n),"Afaste-se um pouco da porta."):t.open?"Porta aberta.":"Porta fechada."}if(e===20)return t.lit=t.lit===!1,this.setMeta(i,t),t.lit?"Lumin\xE1ria acesa.":"Lumin\xE1ria apagada.";if(e===15)return this.time=Math.ceil(this.time/(Math.PI*240))*Math.PI*240,"Voc\xEA descansou. Um novo dia come\xE7ou!";if(e===17){let n=.5,s=.34;for(let a=0;a<(t.rot||0);a++)[n,s]=[s,1-n];let r=i.y+.55;return this.collides(i.x+n,r,i.z+s)?"Deixe espa\xE7o livre em volta da cadeira.":(Object.assign(this.player,{x:i.x+n,y:r,z:i.z+s,vy:0}),this.seated=!0,"Voc\xEA sentou! Mova o direcional para levantar.")}return e===16?"Sua mesa est\xE1 pronta. Selecione um p\xE3o na mochila e toque em Usar para comer.":null},chest(i,e,t,n){if(!this.nearby(i)||this.get(i.x,i.y,i.z)!==18||!ln.includes(e)||!Number.isInteger(t)||t<1)return!1;let s={...this.meta(i),stored:{...this.meta(i).stored}},r=n==="put"?this.inventory:s.stored,a=n==="put"?s.stored:this.inventory;return(r[e]||0)<t||(a[e]||0)+t>9999?!1:(r[e]-=t,a[e]=(a[e]||0)+t,this.setMeta(i,s),!0)},smelt(i,e){let t=Qt.find(s=>s.id===e),n={...this.meta(i)};if(!t||!this.nearby(i)||this.get(i.x,i.y,i.z)!==19||n.job||Object.entries(t.cost).some(([s,r])=>this.inventory[s]<r))return!1;for(let[s,r]of Object.entries(t.cost))this.inventory[s]-=r;return n.job={id:t.id,remaining:t.seconds},this.setMeta(i,n),!0},collectSmelt(i){let e={...this.meta(i)},t=Qt.find(n=>n.id===e.job?.id);return!t||!this.nearby(i)||this.get(i.x,i.y,i.z)!==19||e.job.remaining>0||this.inventory[t.out]+t.count>9999?!1:(this.inventory[t.out]+=t.count,delete e.job,this.stats.crafted+=t.count,this.setMeta(i,e),!0)},bucket(i){let e=this.selected;if(![24,25,26].includes(e)||!this.creative&&!this.inventory[e]||!i)return!1;if(e===24){let s=this.get(i.x,i.y,i.z);if(![22,23].includes(s)&&!i.lake||!this.nearby(i))return!1;let r=s===23?26:25;return this.inventory[r]>=9999?!1:(i.lake||this.set(i.x,i.y,i.z,0),this.creative||this.inventory[24]--,this.inventory[r]++,this.selected=r,!0)}let t=i.place,n=e===25?22:23;if(!t||!this.nearby(t)||this.occupied(t.x,t.y,t.z)||this.overlaps(t.x,t.y,t.z)||!this.get(t.x,t.y-1,t.z)||!this.set(t.x,t.y,t.z,n))return!1;this.creative||(this.inventory[e]--,this.inventory[24]=Math.min(9999,this.inventory[24]+1));for(let[s,r]of[[1,0],[-1,0],[0,1],[0,-1]])this.get(t.x+s,t.y,t.z+r)===(n===22?23:22)&&(this.set(t.x,t.y,t.z,3),this.set(t.x+s,t.y,t.z+r,3));return!0},spawnAnimal(i,e){let t=_e[e];return!t?.animal||!this.nearby(i)||this.animals.length>=40||!this.creative&&!this.inventory[e]||this.occupied(i.x,i.y,i.z)||!this.get(i.x,i.y-1,i.z)||i.y<5.12||this.collides(i.x+.5,i.y+.03,i.z+.5)?!1:(this.creative||this.inventory[e]--,this.animals.push({type:t.animal,x:i.x+.5,y:i.y,z:i.z+.5,yaw:this.player.yaw,turn:0,feedAt:0,milkAt:0}),this.lifeDirty=!0,!0)},useAnimal(i){let e=this.animals[i];return!e||Math.hypot(e.x-this.player.x,e.y-this.player.y,e.z-this.player.z)>7?"Aproxime-se do animal.":e.type==="cow"&&this.selected===24&&this.inventory[24]?this.lifeTime<e.milkAt?"A vaca precisa descansar: "+Math.ceil(e.milkAt-this.lifeTime)+" s.":this.inventory[30]>=9999?"Sua mochila est\xE1 cheia.":(this.inventory[24]--,this.inventory[30]++,e.milkAt=this.lifeTime+45,"Leite coletado! Venda no marketplace; o balde vazio volta para voc\xEA."):this.selected===31&&this.inventory[31]?this.lifeTime<e.feedAt?"J\xE1 est\xE1 alimentado! Aguarde "+Math.ceil(e.feedAt-this.lifeTime)+" s.":(this.inventory[31]--,e.feedAt=this.lifeTime+30,this.creative||(this.coins+=5),"Animal alimentado! "+(this.creative?"":" +5 integros")):e.type==="cow"?"Selecione trigo para alimentar ou um balde vazio para tirar leite.":"Selecione trigo na mochila para alimentar."},tickLife(i,e=!0){this.lifeTime+=i;for(let[n,s]of this.props)s.job?.remaining>0&&(s.job.remaining=Math.max(0,s.job.remaining-i),s.job.remaining||(this.lifeDirty=!0));if(e)for(let n of this.animals){n.turn-=i,n.turn<=0&&(n.yaw+=Math.sin(this.lifeTime*.7+n.x)*1.4,n.turn=2.4);let s=n.type==="pig"?.42:.3,r=n.x-Math.sin(n.yaw)*s*i,a=n.z-Math.cos(n.yaw)*s*i,o=this.surface(Math.floor(r),Math.floor(a))+1,l=n.type==="capybara"&&o<5.12;(o>5.12||l)&&Math.abs((l?5.12-.45:o)-n.y)<(n.type==="capybara"?1.5:1.1)&&!this.collides(r,o+.02,a)?(n.x=r,n.z=a,n.y=l?5.12-.45:o):(n.yaw+=1.7,n.turn=1)}let t=this.player;e&&!this.creative&&this.get(Math.floor(t.x),Math.floor(t.y+.1),Math.floor(t.z))===23&&(this.home(),this.notice="A lava estava quente! Voc\xEA voltou ao in\xEDcio sem perder seus itens.")},lifeSave(){return{expansion:1,coins:this.coins,lifeTime:this.lifeTime,props:[...this.props],animals:this.animals.map(i=>({...i}))}}};var $i=(i,e,t)=>Math.max(e,Math.min(t,i)),Mh=(i,e)=>{let t=Math.sin(i*127.1+e*311.7+42)*43758.5453;return t-Math.floor(t)},ml=(i,e)=>Math.floor(6+Math.sin(i*.16)*1.8+Math.cos(e*.17)*1.7+(i>29?Math.max(0,1-Math.hypot(i-38,e-33)/18)*10:0)),yn=class{constructor(e){if(e=ul(e),this.cells=new Uint8Array(9216*30),this.edits=new Map,this.inventory={1:24,2:24,3:24,4:12,5:12,6:16,7:12,8:12,9:24,10:8},this.stats={mined:0,placed:0,crafted:0},this.selected=1,this.creative=!1,this.time=0,this.dirty=new Set,this.generate(),fl(this),this.base=this.cells.slice(),e?.version===2){for(let t of Array.isArray(e.edits)?e.edits:[])Array.isArray(t)&&Number.isInteger(t[0])&&t[0]>=9216&&t[0]<this.cells.length&&Number.isInteger(t[1])&&t[1]>=0&&(_e[t[1]]||t[1]===0)&&t[1]!==11&&(this.cells[t[0]]=t[1],this.edits.set(t[0],t[1]));for(let t in this.inventory)this.inventory[t]=Number.isFinite(e.inventory?.[t])?Math.floor($i(e.inventory[t],0,9999)):this.inventory[t];for(let t in this.stats)this.stats[t]=Math.floor($i(Number(e.stats?.[t])||0,0,1e6));_e[e.selected]&&e.selected!==11&&(this.selected=e.selected),this.creative=e.creative===!0,this.time=Number.isFinite(e.time)?Math.max(0,e.time):0}if(this.initLife(e),this.initAdventure(e),this.lastSafe=this.findDrySpawn(),this.jumpBuffer=0,this.player={...this.lastSafe,vy:0,yaw:Math.PI,pitch:-.05,grounded:!1},e?.player){let t=e.player;["x","y","z","yaw","pitch"].every(n=>Number.isFinite(t[n]))&&t.x>1&&t.x<95&&t.z>1&&t.z<95&&t.y>1&&t.y<42&&!this.collides(t.x,t.y,t.z)&&Object.assign(this.player,{x:t.x,y:t.y,z:t.z,yaw:t.yaw,pitch:$i(t.pitch,-1.4,1.4)})}}get(e,t,n){return t<0?11:e<0||n<0||e>=96||n>=96||t>=30?0:this.cells[at(e,t,n)]}generate(){for(let e=0;e<48;e++)for(let t=0;t<48;t++){let n=ml(e,t);for(let s=0;s<=n;s++)this.cells[at(e,s,t)]=s===0?11:s<n-2?3:s<n?2:n<6?6:n>12?10:1}for(let e=3;e<45;e++)for(let t=3;t<45;t++){let n=ml(e,t);if(!(n<6||n>11||Math.hypot(e-23,t-10)<5||Mh(e,t)>.025)){for(let s=n+1;s<n+5;s++)this.cells[at(e,s,t)]=4;for(let s=-2;s<=2;s++)for(let r=-2;r<=2;r++)for(let a=3;a<=5;a++){if(Math.abs(s)+Math.abs(r)+(a===5?1:0)>3)continue;let o=at(e+s,n+a,t+r);this.cells[o]||(this.cells[o]=5)}}}}surface(e,t){for(let n=29;n>=0;n--)if(this.get(e,n,t)&&!_e[this.get(e,n,t)]?.fluid)return n;return 0}set(e,t,n,s){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||e<0||n<0||e>=96||n>=96||t<=0||t>=30||!Number.isInteger(s)||s<0||!_e[s]&&s!==0||s===11)return!1;let r=at(e,t,n);this.props?.delete(r),this.lifeDirty=!0,this.cells[r]=s,this.trackFeature?.(r,s),this.base[r]===s?this.edits.delete(r):this.edits.set(r,s);for(let[a,o]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]]){let l=Math.floor((e+a)/8),c=Math.floor((n+o)/8);l>=0&&c>=0&&l<Math.ceil(96/8)&&c<Math.ceil(96/8)&&this.dirty.add(l+","+c)}return!0}collides(e,t,n){return this.collisionAt(e,t,n)}overlaps(e,t,n){let s=this.player;return e+1>s.x-.3&&e<s.x+.3&&t+1>s.y&&t<s.y+1.76&&n+1>s.z-.3&&n<s.z+.3}mine(e){let t=this.get(e.x,e.y,e.z),n=this.meta(e);return!t||t===11||_e[t]?.fluid||!this.nearby(e)||n.job||Object.values(n.stored||{}).some(s=>s>0)||!this.set(e.x,e.y,e.z,0)?!1:(this.creative||(this.inventory[t]=Math.min(9999,(this.inventory[t]||0)+1)),this.stats.mined++,t)}place(e){let t=this.selected;return _e[t]?.animal?this.spawnAnimal(e,t):!e||_e[t]?.tool||_e[t]?.fluid||this.occupied(e.x,e.y,e.z)||this.overlaps(e.x,e.y,e.z)||!this.creative&&!this.inventory[t]||!this.nearby(e)||Dn(t)>1&&(e.y+2>=30||this.occupied(e.x,e.y+1,e.z)||this.overlaps(e.x,e.y+1,e.z))||t>=12&&!this.get(e.x,e.y-1,e.z)||!this.set(e.x,e.y,e.z,t)?!1:(t>=12&&this.setMeta(e,{rot:((Math.round(this.player.yaw/(Math.PI/2))+2)%4+4)%4,open:!1,lit:!0}),this.creative||this.inventory[t]--,this.stats.placed++,!0)}craft(e){let t=di.find(n=>n.id===e);if(!t||Object.entries(t.cost).some(([n,s])=>(this.inventory[n]||0)<s)||this.inventory[t.out]+t.count>9999)return!1;for(let[n,s]of Object.entries(t.cost))this.inventory[n]-=s;return this.inventory[t.out]+=t.count,this.stats.crafted+=t.count,!0}findDrySpawn(){let e=null,t=1/0;for(let n=2;n<94;n++)for(let s=2;s<94;s++){let r=this.surface(n,s),a=this.get(n,r,s),o=r+1.05;if(o<5.12+.2||a===4||a===5||this.collides(n+.5,o,s+.5))continue;let l=(n-23)**2+(s-10)**2;l<t&&(t=l,e={x:n+.5,y:o,z:s+.5})}return e||{x:23.5,y:this.surface(23,10)+1.05,z:10.5}}waterSurface(){let e=this.player;for(let t=Math.floor(e.y+.1);t<=Math.floor(e.y+1);t++)if(this.get(Math.floor(e.x),t,Math.floor(e.z))===22)return t+.8;return 5.12}inWater(){return this.player.y<this.waterSurface()+.05}jump(){this.jumpBuffer=.16,!this.creative&&(this.player.grounded||this.inWater())&&(this.player.vy=Math.max(this.player.vy,9),this.player.grounded=!1,this.jumpBuffer=0)}home(){this.riding=null,this.seated=!1,this.lastSafe=this.findDrySpawn(),this.jumpBuffer=0,Object.assign(this.player,{...this.lastSafe,vy:0,grounded:!1})}update(e,t={}){if(e=$i(e,0,.05),this.time+=e,this.riding!==null&&this.riding!==void 0){this.drive(e,t);return}let n=this.player,s=t.x||0,r=t.z||0;(s||r||t.up)&&(this.seated=!1);let a=Math.hypot(s,r);a>1&&(s/=a,r/=a);let o=t.sprint?7.2:4.7,l=(s*Math.cos(n.yaw)+r*Math.sin(n.yaw))*o*e,c=(-s*Math.sin(n.yaw)+r*Math.cos(n.yaw))*o*e,h=Math.max(1,Math.ceil(Math.hypot(l,c)/.18));for(let f=0;f<h;f++)this.stepMove(n.x+l/h,n.z),this.stepMove(n.x,n.z+c/h);if(this.creative){n.vy=0;let f=(t.up||0)*o*e;n.y+f>1&&n.y+f<40&&!this.collides(n.x,n.y+f,n.z)&&(n.y+=f),n.grounded=!1}else{let f=this.inWater(),p=t.up>0||this.jumpBuffer>0;if(p&&(f||n.grounded)&&(n.vy=Math.max(n.vy,9),this.jumpBuffer=0),f)if(p||n.vy>3)n.vy-=5*e;else{let g=(this.waterSurface()-.65-n.y)*14-n.vy*5;n.vy=$i(n.vy+g*e,-2,3)}else n.vy=Math.max(-24,n.vy-24*e);this.jumpBuffer=Math.max(0,this.jumpBuffer-e);let m=n.vy*e,x=Math.max(1,Math.ceil(Math.abs(m)/.15));n.grounded=!1;for(let g=0;g<x;g++)if(!this.collides(n.x,n.y+m/x,n.z))n.y+=m/x;else{n.vy<0&&(n.grounded=!0),n.vy=0;break}}n.y<-3&&this.home()}serialize(){return{version:2,...this.lifeSave(),...this.adventureSave(),edits:[...this.edits],inventory:{...this.inventory},selected:this.selected,creative:this.creative,stats:{...this.stats},time:this.time,player:{...this.player}}}};Object.assign(yn.prototype,pl);Object.assign(yn.prototype,dl(yn.prototype));function gl(i){let e=new yn;e.cells.fill(0);for(let n=0;n<48;n++)for(let s=0;s<48;s++)for(let r=0;r<30;r++)e.cells[at(n,r,s)]=i.get(n,r,s);e.base=e.cells.slice(),e.edits.clear(),e.features.clear(),e.props.clear(),e.fluidSources.clear(),e.flowCells.clear(),e.animals=[],e.vehicles=[],e.villagers=[],e.creative=!0,e.riding=null,e.seated=!1,e.selected=1,e.player={...i.player},e.lastSafe={...i.lastSafe};let t=e.update.bind(e);return e.update=(n,s)=>{t(n,s),e.player.x=Math.max(.35,Math.min(47.65,e.player.x)),e.player.z=Math.max(.35,Math.min(47.65,e.player.z))},e}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Hl=0,_o=1,Gl=2;var yo=1,Wl=2,dn=3,wn=0,It=1,Ut=2,In=0,ei=1,vo=2,Mo=3,bo=4,Xl=5,Vn=100,ql=101,Yl=102,$l=103,Zl=104,Jl=200,Kl=201,jl=202,Ql=203,ur=204,fr=205,ec=206,tc=207,nc=208,ic=209,sc=210,rc=211,ac=212,oc=213,lc=214,Or=0,Br=1,zr=2,ti=3,kr=4,Vr=5,Hr=6,Gr=7,Ts=0,cc=1,hc=2,Pn=0,uc=1,fc=2,dc=3,pc=4,mc=5,gc=6,xc=7;var So=300,ri=301,ai=302,Wr=303,Xr=304,As=306,dr=1e3,kn=1001,pr=1002,$t=1003,_c=1004;var ws=1005;var kt=1006,qr=1007;var pn=1008;var an=1009,Eo=1010,To=1011,Fi=1012,Yr=1013,qn=1014,mn=1015,Oi=1016,$r=1017,Zr=1018,Bi=1020,Ao=35902,wo=35899,Co=1021,Ro=1022,jt=1023,Ci=1026,zi=1027,Io=1028,Jr=1029,Po=1030,Kr=1031;var jr=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,Qr=35840,ea=35841,ta=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,ua=37813,fa=37814,da=37815,pa=37816,ma=37817,ga=37818,xa=37819,_a=37820,ya=37821,va=36492,Ma=36494,ba=36495,Sa=36283,Ea=36284,Ta=36285,Aa=36286;var ts=2300,mr=2301,cr=2302,lo=2400,co=2401,ho=2402;var yc=3200,vc=3201;var wa=0,Mc=1,Ln="",bt="srgb",ni="srgb-linear",ns="linear",Je="srgb";var Qn=7680;var uo=519,bc=512,Sc=513,Ec=514,Lo=515,Tc=516,Ac=517,wc=518,Cc=519,fo=35044;var Do="300 es",sn=2e3,is=2001;var Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hr=Math.PI/180,gr=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function bh(i,e){return(i%e+e)%e}function Oa(i,e,t){return(1-t)*i+t*e}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==p||c!==m||h!==x){let d=1-o,u=l*p+c*m+h*x+f*g,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){let P=Math.sqrt(T),R=Math.atan2(P,u*w);d=Math.sin(d*R)/P,o=Math.sin(o*R)/P}let b=o*w;if(l=l*d+p*b,c=c*d+m*b,h=h*d+x*b,f=f*d+g*b,d===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],p=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*m-c*p,e[t+1]=l*x+h*p+c*f-o*m,e[t+2]=c*x+h*m+o*p-l*f,e[t+3]=h*x-o*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"YXZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"ZXY":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"ZYX":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"YZX":this._x=p*h*f+c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f-p*m*x;break;case"XZY":this._x=p*h*f-c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ba=new B,xl=new Rn,Be=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],m=n[5],x=n[8],g=s[0],d=s[3],u=s[6],w=s[1],T=s[4],b=s[7],P=s[2],R=s[5],D=s[8];return r[0]=a*g+o*w+l*P,r[3]=a*d+o*T+l*R,r[6]=a*u+o*b+l*D,r[1]=c*g+h*w+f*P,r[4]=c*d+h*T+f*R,r[7]=c*u+h*b+f*D,r[2]=p*g+m*w+x*P,r[5]=p*d+m*T+x*R,r[8]=p*u+m*b+x*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,p=o*l-h*r,m=c*r-a*l,x=t*f+n*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=f*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},za=new Be;function Uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){let i=ss("canvas");return i.style.display="block",i}var _l={};function Ri(i){i in _l||(_l[i]=!0,console.warn(i))}function Ic(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){let i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:ns,toXYZ:yl,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:yl,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var qe=Sh();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,xr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=ss("canvas")),mi.width=e.width,mi.height=e.height;let s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eh=0,Ii=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ka(s[a].image)):r.push(ka(s[a]))}else r=ka(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Th=0,Va=new B,Dt=class i extends Cn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=kt,a=pn,o=jt,l=an,c=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ls(),this.name="",this.source=new Ii(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==So)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=So;Dt.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],x=l[9],g=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-g)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+g)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(m+1)/2,P=(u+1)/2,R=(h+p)/4,D=(f+g)/4,I=(x+d)/4;return T>b&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=D/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=D/r,s=I/r),this.set(n,s,r,t),this}let w=Math.sqrt((d-x)*(d-x)+(f-g)*(f-g)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(d-x)/w,this.y=(f-g)/w,this.z=(p-h)/w,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_r=class extends Cn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ii(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends _r{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yr=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Vs.subVectors(this.max,Ji),gi.subVectors(e.a,Ji),xi.subVectors(e.b,Ji),_i.subVectors(e.c,Ji),Un.subVectors(xi,gi),Nn.subVectors(_i,xi),Zn.subVectors(gi,_i);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!Ha(t,gi,xi,_i,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,gi,xi,_i,Vs))?!1:(Hs.crossVectors(Un,Nn),t=[Hs.x,Hs.y,Hs.z],Ha(t,gi,xi,_i,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vn=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,ks=new Hn,gi=new B,xi=new B,_i=new B,Un=new B,Nn=new B,Zn=new B,Ji=new B,Vs=new B,Hs=new B,Jn=new B;function Ha(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ah=new Hn,Ki=new B,Ga=new B,ii=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ah.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Ga)),this.expandByPoint(Ki.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mn=new B,Wa=new B,Gs=new B,Fn=new B,Xa=new B,Ws=new B,qa=new B,Pi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wa.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Wa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Fn.dot(this.direction),l=-Fn.dot(Gs),c=Fn.lengthSq(),h=Math.abs(1-a*a),f,p,m,x;if(h>0)if(f=a*l-o,p=a*o-l,x=r*h,f>=0)if(p>=-x)if(p<=x){let g=1/h;f*=g,p*=g,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wa).addScaledVector(Gs,p),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){Xa.subVectors(t,e),Ws.subVectors(n,e),qa.crossVectors(Xa,Ws);let a=this.direction.dot(qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);let l=o*this.direction.dot(Ws.crossVectors(Fn,Ws));if(l<0)return null;let c=o*this.direction.dot(Xa.cross(Fn));if(c<0||l+c>a)return null;let h=-o*Fn.dot(qa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,p,m,x,g,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,p,m,x,g,d)}set(e,t,n,s,r,a,o,l,c,h,f,p,m,x,g,d){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=x,u[11]=g,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*h,m=a*f,x=o*h,g=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p+g*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p-g*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,m=a*f,x=o*h,g=o*f;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*f,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=g-p*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+x,t[10]=p-g*f}else if(e.order==="XZY"){let p=a*l,m=a*c,x=o*l,g=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+g,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Ch)}lookAt(e,t,n){let s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),On.crossVectors(n,Ot),On.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),On.crossVectors(n,Ot)),On.normalize(),Xs.crossVectors(Ot,On),s[0]=On.x,s[4]=Xs.x,s[8]=Ot.x,s[1]=On.y,s[5]=Xs.y,s[9]=Ot.y,s[2]=On.z,s[6]=Xs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],m=n[13],x=n[2],g=n[6],d=n[10],u=n[14],w=n[3],T=n[7],b=n[11],P=n[15],R=s[0],D=s[4],I=s[8],M=s[12],v=s[1],L=s[5],V=s[9],q=s[13],Y=s[2],Q=s[6],J=s[10],ae=s[14],W=s[3],ce=s[7],pe=s[11],Ae=s[15];return r[0]=a*R+o*v+l*Y+c*W,r[4]=a*D+o*L+l*Q+c*ce,r[8]=a*I+o*V+l*J+c*pe,r[12]=a*M+o*q+l*ae+c*Ae,r[1]=h*R+f*v+p*Y+m*W,r[5]=h*D+f*L+p*Q+m*ce,r[9]=h*I+f*V+p*J+m*pe,r[13]=h*M+f*q+p*ae+m*Ae,r[2]=x*R+g*v+d*Y+u*W,r[6]=x*D+g*L+d*Q+u*ce,r[10]=x*I+g*V+d*J+u*pe,r[14]=x*M+g*q+d*ae+u*Ae,r[3]=w*R+T*v+b*Y+P*W,r[7]=w*D+T*L+b*Q+P*ce,r[11]=w*I+T*V+b*J+P*pe,r[15]=w*M+T*q+b*ae+P*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],m=e[14],x=e[3],g=e[7],d=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*o*p+n*c*p+s*o*m-n*l*m)+g*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-t*l*f+t*o*p+s*a*f-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],m=e[11],x=e[12],g=e[13],d=e[14],u=e[15],w=f*d*c-g*p*c+g*l*m-o*d*m-f*l*u+o*p*u,T=x*p*c-h*d*c-x*l*m+a*d*m+h*l*u-a*p*u,b=h*g*c-x*f*c+x*o*m-a*g*m-h*o*u+a*f*u,P=x*f*l-h*g*l-x*o*p+a*g*p+h*o*d-a*f*d,R=t*w+n*T+s*b+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=w*D,e[1]=(g*p*r-f*d*r-g*s*m+n*d*m+f*s*u-n*p*u)*D,e[2]=(o*d*r-g*l*r+g*s*c-n*d*c-o*s*u+n*l*u)*D,e[3]=(f*l*r-o*p*r-f*s*c+n*p*c+o*s*m-n*l*m)*D,e[4]=T*D,e[5]=(h*d*r-x*p*r+x*s*m-t*d*m-h*s*u+t*p*u)*D,e[6]=(x*l*r-a*d*r-x*s*c+t*d*c+a*s*u-t*l*u)*D,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*m+t*l*m)*D,e[8]=b*D,e[9]=(x*f*r-h*g*r-x*n*m+t*g*m+h*n*u-t*f*u)*D,e[10]=(a*g*r-x*o*r+x*n*c-t*g*c-a*n*u+t*o*u)*D,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*m-t*o*m)*D,e[12]=P*D,e[13]=(h*g*s-x*f*s+x*n*p-t*g*p-h*n*d+t*f*d)*D,e[14]=(x*o*s-a*g*s-x*n*l+t*g*l+a*n*d-t*o*d)*D,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*p+t*o*p)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,p=r*c,m=r*h,x=r*f,g=a*h,d=a*f,u=o*f,w=l*c,T=l*h,b=l*f,P=n.x,R=n.y,D=n.z;return s[0]=(1-(g+u))*P,s[1]=(m+b)*P,s[2]=(x-T)*P,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(p+u))*R,s[6]=(d+w)*R,s[7]=0,s[8]=(x+T)*D,s[9]=(d-w)*D,s[10]=(1-(p+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=yi.set(s[0],s[1],s[2]).length(),a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);let c=1/r,h=1/a,f=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===sn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===is)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===sn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===is)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yi=new B,tn=new ht,wh=new B(0,0,0),Ch=new B(1,1,1),On=new B,Xs=new B,Ot=new B,Ml=new ht,bl=new Rn,Zt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Li=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rh=0,Sl=new B,vi=new Rn,bn=new ht,qs=new B,ji=new B,Ih=new B,Ph=new Rn,El=new B(1,0,0),Tl=new B(0,1,0),Al=new B(0,0,1),wl={type:"added"},Lh={type:"removed"},Mi={type:"childadded",child:null},Ya={type:"childremoved",child:null},St=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Zt,n=new Rn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Li,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(El,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(El,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ji,qs,this.up):bn.lookAt(qs,ji,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(bn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new B(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new B,Sn=new B,$a=new B,En=new B,bi=new B,Si=new B,Cl=new B,Za=new B,Ja=new B,Ka=new B,ja=new ut,Qa=new ut,eo=new ut,Tn=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),Sn.subVectors(n,t),$a.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(Sn),l=nn.dot($a),c=Sn.dot(Sn),h=Sn.dot($a),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-o*h)*p,x=(a*h-o*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ja.setScalar(0),Qa.setScalar(0),eo.setScalar(0),ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),eo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ja,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(eo,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),Sn.subVectors(e,t),nn.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),nn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Si.subVectors(r,n),Za.subVectors(e,n);let l=bi.dot(Za),c=Si.dot(Za);if(l<=0&&c<=0)return t.copy(n);Ja.subVectors(e,s);let h=bi.dot(Ja),f=Si.dot(Ja);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bi,a);Ka.subVectors(e,r);let m=bi.dot(Ka),x=Si.dot(Ka);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Si,o);let d=h*x-m*f;if(d<=0&&f-h>=0&&m-x>=0)return Cl.subVectors(r,s),o=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Cl,o);let u=1/(d+g+p);return a=g*u,o=p*u,t.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function to(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=bh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=to(a,r,e+1/3),this.g=to(a,r,e),this.b=to(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=Pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return qe.workingToColorSpace(Tt.copy(this),e),Math.round(We(Tt.r*255,0,255))*65536+Math.round(We(Tt.g*255,0,255))*256+Math.round(We(Tt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=bt){qe.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ys);let n=Oa(Bn.h,Ys.h,t),s=Oa(Bn.s,Ys.s,t),r=Oa(Bn.l,Ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Fe;Fe.NAMES=Pc;var Dh=0,fn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=ei,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=fr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},as=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new B,$s=new Xe,Uh=0,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}};var os=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ls=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nh=0,Yt=new ht,no=new St,Ei=new B,Bt=new Hn,Qi=new Hn,vt=new B,Jt=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?ls:os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Bt.min,Qi.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Qi.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Qi.min),Bt.expandByPoint(Qi.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),vt.add(Ei)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new B,l[I]=new B;let c=new B,h=new B,f=new B,p=new Xe,m=new Xe,x=new Xe,g=new B,d=new B;function u(I,M,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,v),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,M),x.fromBufferAttribute(r,v),h.sub(c),f.sub(c),m.sub(p),x.sub(p);let L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(L),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(L),o[I].add(g),o[M].add(g),o[v].add(g),l[I].add(d),l[M].add(d),l[v].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,M=w.length;I<M;++I){let v=w[I],L=v.start,V=v.count;for(let q=L,Y=L+V;q<Y;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let T=new B,b=new B,P=new B,R=new B;function D(I){P.fromBufferAttribute(s,I),R.copy(P);let M=o[I];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),b.crossVectors(R,M);let L=b.dot(l[I])<0?-1:1;a.setXYZW(I,T.x,T.y,T.z,L)}for(let I=0,M=w.length;I<M;++I){let v=w[I],L=v.start,V=v.count;for(let q=L,Y=L+V;q<Y;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let u=0;u<h;u++)p[x++]=c[m++]}return new zt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new ht,Kn=new Pi,Zs=new ii,Il=new B,Js=new B,Ks=new B,js=new B,io=new B,Qs=new B,Pl=new B,er=new B,dt=class extends St{constructor(e=new Jt,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(io.fromBufferAttribute(f,e),a?Qs.addScaledVector(io,h):Qs.addScaledVector(io.sub(t),h))}t.add(Qs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Zs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Zs,Il)===null||Kn.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Rl.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=a[d.materialIndex],w=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let b=w,P=T;b<P;b+=3){let R=o.getX(b),D=o.getX(b+1),I=o.getX(b+2);s=tr(this,u,e,n,c,h,f,R,D,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let w=o.getX(d),T=o.getX(d+1),b=o.getX(d+2);s=tr(this,a,e,n,c,h,f,w,T,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=a[d.materialIndex],w=Math.max(d.start,m.start),T=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=w,P=T;b<P;b+=3){let R=b,D=b+1,I=b+2;s=tr(this,u,e,n,c,h,f,R,D,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let w=d,T=d+1,b=d+2;s=tr(this,a,e,n,c,h,f,w,T,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function Fh(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wn,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:i}}function tr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,Ks),i.getVertexPosition(c,js);let h=Fh(i,e,t,n,Js,Ks,js,Pl);if(h){let f=new B;Tn.getBarycoord(Pl,Js,Ks,js,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new B,materialIndex:0};Tn.getNormal(Js,Ks,js,p.normal),h.face=p,h.barycoord=f}return h}var Vt=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],p=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(f,2));function x(g,d,u,w,T,b,P,R,D,I,M){let v=b/D,L=P/I,V=b/2,q=P/2,Y=R/2,Q=D+1,J=I+1,ae=0,W=0,ce=new B;for(let pe=0;pe<J;pe++){let Ae=pe*L-q;for(let ze=0;ze<Q;ze++){let $e=ze*v-V;ce[g]=$e*w,ce[d]=Ae*T,ce[u]=Y,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[d]=0,ce[u]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(ze/D),f.push(1-pe/I),ae+=1}}for(let pe=0;pe<I;pe++)for(let Ae=0;Ae<D;Ae++){let ze=p+Ae+Q*pe,$e=p+Ae+Q*(pe+1),Qe=p+(Ae+1)+Q*(pe+1),Ge=p+(Ae+1)+Q*pe;l.push(ze,$e,Ge),l.push($e,Qe,Ge),W+=6}o.addGroup(m,W,M),m+=W,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=oi(i[t]);for(let s in n)e[s]=n[s]}return e}function Oh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function No(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Lc={clone:oi,merge:Ct},Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},cs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new B,Ll=new Xe,Dl=new Xe,At=class extends cs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Dl),t.subVectors(Dl,Ll)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ai=1,vr=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Ti,Ai,e,t);s.layers=this.layers,this.add(s);let r=new At(Ti,Ai,e,t);r.layers=this.layers,this.add(r);let a=new At(Ti,Ai,e,t);a.layers=this.layers,this.add(a);let o=new At(Ti,Ai,e,t);o.layers=this.layers,this.add(o);let l=new At(Ti,Ai,e,t);l.layers=this.layers,this.add(l);let c=new At(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},hs=class extends Dt{constructor(e=[],t=ri,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:In});r.uniforms.tEquirect.value=t;let a=new dt(s,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=kt),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},kh={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let d=t.getJointPose(g,n),u=this._getHandJoint(c,g);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var us=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var so=new B,Vh=new B,Hh=new Be,hn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=so.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hh.getNormalMatrix(e),s=this.coplanarPoint(so).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new ii,Gh=new Xe(.5,.5),nr=new B,Ui=class{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],p=r[6],m=r[7],x=r[8],g=r[9],d=r[10],u=r[11],w=r[12],T=r[13],b=r[14],P=r[15];if(s[0].setComponents(c-a,m-h,u-x,P-w).normalize(),s[1].setComponents(c+a,m+h,u+x,P+w).normalize(),s[2].setComponents(c+o,m+f,u+g,P+T).normalize(),s[3].setComponents(c-o,m-f,u-g,P-T).normalize(),n)s[4].setComponents(l,p,d,b).normalize(),s[5].setComponents(c-l,m-p,u-d,P-b).normalize();else if(s[4].setComponents(c-l,m-p,u-d,P-b).normalize(),t===sn)s[5].setComponents(c+l,m+p,u+d,P+b).normalize();else if(t===is)s[5].setComponents(l,p,d,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);let t=Gh.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nr.x=s.normal.x>0?e.max.x:e.min.x,nr.y=s.normal.y>0?e.max.y:e.min.y,nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ni=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},br=new B,Sr=new B,Ul=new ht,es=new Pi,ir=new ii,ro=new B,Nl=new B,Er=class extends St{constructor(e=new Jt,t=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)br.fromBufferAttribute(t,s-1),Sr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=br.distanceTo(Sr);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;Ul.copy(s).invert(),es.copy(e.ray).applyMatrix4(Ul);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=m,d=x-1;g<d;g+=c){let u=h.getX(g),w=h.getX(g+1),T=sr(this,e,es,l,u,w,g);T&&t.push(T)}if(this.isLineLoop){let g=h.getX(x-1),d=h.getX(m),u=sr(this,e,es,l,g,d,x-1);u&&t.push(u)}}else{let m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let g=m,d=x-1;g<d;g+=c){let u=sr(this,e,es,l,g,g+1,g);u&&t.push(u)}if(this.isLineLoop){let g=sr(this,e,es,l,x-1,m,x-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(br.fromBufferAttribute(o,s),Sr.fromBufferAttribute(o,r),t.distanceSqToSegment(br,Sr,ro,Nl)>n)return;ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ro);if(!(c<e.near||c>e.far))return{distance:c,point:Nl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Fl=new B,Ol=new B,ds=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fl.fromBufferAttribute(t,s),Ol.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fl.distanceTo(Ol);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ps=class extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ms=class extends Dt{constructor(e,t,n=qn,s,r,a,o=$t,l=$t,c,h=Ci,f=1){if(h!==Ci&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ii(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gs=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var rr=new B,ar=new B,ao=new B,or=new Tn,xs=class extends Jt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(hr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),p={},m=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:g,b:d,c:u}=or;if(g.fromBufferAttribute(o,c[0]),d.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),or.getNormal(ao),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,f[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){let T=(w+1)%3,b=f[w],P=f[T],R=or[h[w]],D=or[h[T]],I=`${b}_${P}`,M=`${P}_${b}`;M in p&&p[M]?(ao.dot(p[M].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(D.x,D.y,D.z)),p[M]=null):I in p||(p[I]={index0:c[w],index1:c[T],normal:ao.clone()})}}for(let x in p)if(p[x]){let{index0:g,index1:d}=p[x];rr.fromBufferAttribute(o,g),ar.fromBufferAttribute(o,d),m.push(rr.x,rr.y,rr.z),m.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new Mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Gn=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,p=t/l,m=[],x=[],g=[],d=[];for(let u=0;u<h;u++){let w=u*p-a;for(let T=0;T<c;T++){let b=T*f-r;x.push(b,-w,0),g.push(0,0,1),d.push(T/o),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let T=w+c*u,b=w+c*(u+1),P=w+1+c*(u+1),R=w+1+c*u;m.push(T,b,R),m.push(b,P,R)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(g,3)),this.setAttribute("uv",new Mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var _s=class extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kt=class extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tr=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ar=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wr=class extends si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lo,endingEnd:lo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case co:r=e,o=2*t-n;break;case ho:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case co:a=e,l=2*n-t;break;case ho:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),g=x*x,d=g*x,u=-p*d+2*p*g-p*x,w=(1+p)*d+(-1.5-2*p)*g+(-.5+p)*x+1,T=(-1-m)*d+(1.5+m)*g+.5*x,b=m*d-m*g;for(let P=0;P!==o;++P)r[P]=u*a[h+P]+w*a[c+P]+T*a[l+P]+b*a[f+P];return r}},Cr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*h;return r}},Rr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ht=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Wh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,m=f+n;for(let x=0;x!==n;++x){let g=t[f+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ht.prototype.ValueTypeName="";Ht.prototype.TimeBufferType=Float32Array;Ht.prototype.ValueBufferType=Float32Array;Ht.prototype.DefaultInterpolation=mr;var Wn=class extends Ht{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=ts;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Ir.prototype.ValueTypeName="color";var Pr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Pr.prototype.ValueTypeName="number";var Lr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ys=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lr(this.times,this.values,this.getValueSize(),e)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Ht{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=ts;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="vector";var Ur=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Dc=new Ur,Nr=class{constructor(e){this.manager=e!==void 0?e:Dc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ms=class extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},oo=new ht,Bl=new B,zl=new B,po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bs=class extends cs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mo=class extends po{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new mo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fr=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fo="\\[\\]\\.:\\/",Xh=new RegExp("["+Fo+"]","g"),Oo="[^"+Fo+"]",qh="[^"+Fo.replace("\\.","")+"]",Yh=/((?:WC+[\/:])*)/.source.replace("WC",Oo),$h=/(WCOD+)?/.source.replace("WCOD",qh),Zh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),Jh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),Kh=new RegExp("^"+Yh+$h+Zh+Jh+"$"),jh=["material","materials","bones","map"],go=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xh,"")}static parseTrackName(e){let t=Kh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=go;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Km=new Float32Array(1);var kl=new ht,Es=class{constructor(e,t,n=0,s=1/0){this.ray=new Pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Li,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kl),this}intersectObject(e,t=!0,n=[]){return xo(e,this,n,t),n.sort(Vl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xo(e[s],this,n,t);return n.sort(Vl),n}};function Vl(i,e){return i.distance-e.distance}function xo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)xo(r[a],e,t,!0)}}function Bo(i,e,t,n){let s=Qh(n);switch(t){case Co:return i*e;case Io:return i*e/s.components*s.byteLength;case Jr:return i*e/s.components*s.byteLength;case Po:return i*e*2/s.components*s.byteLength;case Kr:return i*e*2/s.components*s.byteLength;case Ro:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case jr:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(i,16)*Math.max(e,8)/4;case Qr:case ta:return Math.max(i,8)*Math.max(e,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case Ma:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case an:case Eo:return{byteLength:1,components:1};case Fi:case To:case Oi:return{byteLength:2,components:1};case $r:case Zr:return{byteLength:2,components:4};case qn:case Yr:case mn:return{byteLength:4,components:1};case Ao:case wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ih(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tu(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<f.length;m++){let x=f[p],g=f[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++p,f[p]=g)}f.length=p+1;for(let m=0,x=f.length;m<x;m++){let g=f[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
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
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
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
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mu=`#ifdef USE_IRIDESCENCE
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
#endif`,gu=`#ifdef USE_BUMPMAP
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wu=`vec3 transformedNormal = objectNormal;
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
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
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
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
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
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
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
#endif`,ef=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ff=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vf=`float getShadowMask() {
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
}`,Hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
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
}`,cd=`#if DEPTH_PACKING == 3200
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
}`,hd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
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
}`,md=`uniform vec3 diffuse;
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
}`,gd=`#include <common>
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
}`,xd=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,yd=`#define LAMBERT
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
}`,vd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,bd=`#define NORMAL
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
}`,Sd=`#define NORMAL
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
}`,Ed=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,Ad=`#define STANDARD
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
}`,wd=`#define STANDARD
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
}`,Cd=`#define TOON
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
}`,Rd=`#define TOON
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
}`,Id=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,Dd=`uniform vec3 color;
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
}`,Ud=`uniform float rotation;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:hu,batching_vertex:uu,begin_vertex:fu,beginnormal_vertex:du,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:yu,clipping_planes_vertex:vu,color_fragment:Mu,color_pars_fragment:bu,color_pars_vertex:Su,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:wu,displacementmap_pars_vertex:Cu,displacementmap_vertex:Ru,emissivemap_fragment:Iu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Uu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Fu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:$u,envmap_vertex:Bu,fog_vertex:zu,fog_pars_vertex:ku,fog_fragment:Vu,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Wu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Zu,lights_toon_pars_fragment:Ju,lights_phong_fragment:Ku,lights_phong_pars_fragment:ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:ef,lights_fragment_begin:tf,lights_fragment_maps:nf,lights_fragment_end:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:df,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:xf,morphtarget_pars_vertex:_f,morphtarget_vertex:yf,normal_fragment_begin:vf,normal_fragment_maps:Mf,normal_pars_fragment:bf,normal_pars_vertex:Sf,normal_vertex:Ef,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Rf,opaque_fragment:If,packing:Pf,premultiplied_alpha_fragment:Lf,project_vertex:Df,dithering_fragment:Uf,dithering_pars_fragment:Nf,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:kf,shadowmask_pars_fragment:Vf,skinbase_vertex:Hf,skinning_pars_vertex:Gf,skinning_vertex:Wf,skinnormal_vertex:Xf,specularmap_fragment:qf,specularmap_pars_fragment:Yf,tonemapping_fragment:$f,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:Kf,uv_pars_fragment:jf,uv_pars_vertex:Qf,uv_vertex:ed,worldpos_vertex:td,background_vert:nd,background_frag:id,backgroundCube_vert:sd,backgroundCube_frag:rd,cube_vert:ad,cube_frag:od,depth_vert:ld,depth_frag:cd,distanceRGBA_vert:hd,distanceRGBA_frag:ud,equirect_vert:fd,equirect_frag:dd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:xd,meshlambert_vert:_d,meshlambert_frag:yd,meshmatcap_vert:vd,meshmatcap_frag:Md,meshnormal_vert:bd,meshnormal_frag:Sd,meshphong_vert:Ed,meshphong_frag:Td,meshphysical_vert:Ad,meshphysical_frag:wd,meshtoon_vert:Cd,meshtoon_frag:Rd,points_vert:Id,points_frag:Pd,shadow_vert:Ld,shadow_frag:Dd,sprite_vert:Ud,sprite_frag:Nd},he={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gn={basic:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ct([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ct([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ct([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ct([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ct([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ct([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ct([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ct([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ct([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ct([he.lights,he.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};gn.physical={uniforms:Ct([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Ca={r:0,b:0,g:0},li=new Zt,Fd=new ht;function Od(i,e,t,n,s,r,a){let o=new Fe(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function g(T){let b=!1,P=x(T);P===null?u(o,l):P&&P.isColor&&(u(P,1),b=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(T,b){let P=x(b);P&&(P.isCubeTexture||P.mapping===As)?(h===void 0&&(h=new dt(new Vt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:oi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(b.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler(li)),h.material.toneMapped=qe.getTransfer(P.colorSpace)!==Je,(f!==P||p!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=P,p=P.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new dt(new Gn(2,2),new rn({name:"BackgroundMaterial",uniforms:oi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=qe.getTransfer(P.colorSpace)!==Je,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||p!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=P,p=P.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,b){T.getRGB(Ca,No(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,b,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:g,addToRenderList:d,dispose:w}}function Bd(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(v,L,V,q,Y){let Q=!1,J=f(q,V,L);r!==J&&(r=J,c(r.object)),Q=m(v,q,V,Y),Q&&x(v,q,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(v,L,V,q),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,L,V){let q=V.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let Q=Y[L.id];Q===void 0&&(Q={},Y[L.id]=Q);let J=Q[q];return J===void 0&&(J=p(l()),Q[q]=J),J}function p(v){let L=[],V=[],q=[];for(let Y=0;Y<t;Y++)L[Y]=0,V[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:v,attributes:{},index:null}}function m(v,L,V,q){let Y=r.attributes,Q=L.attributes,J=0,ae=V.getAttributes();for(let W in ae)if(ae[W].location>=0){let pe=Y[W],Ae=Q[W];if(Ae===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Ae=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Ae=v.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;J++}return r.attributesNum!==J||r.index!==q}function x(v,L,V,q){let Y={},Q=L.attributes,J=0,ae=V.getAttributes();for(let W in ae)if(ae[W].location>=0){let pe=Q[W];pe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor));let Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),Y[W]=Ae,J++}r.attributes=Y,r.attributesNum=J,r.index=q}function g(){let v=r.newAttributes;for(let L=0,V=v.length;L<V;L++)v[L]=0}function d(v){u(v,0)}function u(v,L){let V=r.newAttributes,q=r.enabledAttributes,Y=r.attributeDivisors;V[v]=1,q[v]===0&&(i.enableVertexAttribArray(v),q[v]=1),Y[v]!==L&&(i.vertexAttribDivisor(v,L),Y[v]=L)}function w(){let v=r.newAttributes,L=r.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==v[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function T(v,L,V,q,Y,Q,J){J===!0?i.vertexAttribIPointer(v,L,V,Y,Q):i.vertexAttribPointer(v,L,V,q,Y,Q)}function b(v,L,V,q){g();let Y=q.attributes,Q=V.getAttributes(),J=L.defaultAttributeValues;for(let ae in Q){let W=Q[ae];if(W.location>=0){let ce=Y[ae];if(ce===void 0&&(ae==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),ae==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),ce!==void 0){let pe=ce.normalized,Ae=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;let $e=ze.buffer,Qe=ze.type,Ge=ze.bytesPerElement,j=Qe===i.INT||Qe===i.UNSIGNED_INT||ce.gpuType===Yr;if(ce.isInterleavedBufferAttribute){let ee=ce.data,ge=ee.stride,Le=ce.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)u(W.location+Ee,ee.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)d(W.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ee=0;Ee<W.locationSize;Ee++)T(W.location+Ee,Ae/W.locationSize,Qe,pe,ge*Ge,(Le+Ae/W.locationSize*Ee)*Ge,j)}else{if(ce.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)u(W.location+ee,ce.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ee=0;ee<W.locationSize;ee++)d(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ee=0;ee<W.locationSize;ee++)T(W.location+ee,Ae/W.locationSize,Qe,pe,Ae*Ge,Ae/W.locationSize*ee*Ge,j)}}else if(J!==void 0){let pe=J[ae];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}w()}function P(){I();for(let v in n){let L=n[v];for(let V in L){let q=L[V];for(let Y in q)h(q[Y].object),delete q[Y];delete L[V]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let V in L){let q=L[V];for(let Y in q)h(q[Y].object),delete q[Y];delete L[V]}delete n[v.id]}function D(v){for(let L in n){let V=n[L];if(V[v.id]===void 0)continue;let q=V[v.id];for(let Y in q)h(q[Y].object),delete q[Y];delete V[v.id]}}function I(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:d,disableUnusedAttributes:w}}function zd(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];t.update(m,n,1)}function l(c,h,f,p){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],h[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g]*p[g];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kd(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==jt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let I=D===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==an&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==mn&&!I)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function Vd(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){let x=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!d)r?h(null):c();else{let w=r?0:n,T=w*4,b=u.clippingState||null;l.value=b,b=h(x,p,T,m);for(let P=0;P!==T;++P)b[P]=t[P];u.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,x){let g=f!==null?f.length:0,d=null;if(g!==0){if(d=l.value,x!==!0||d===null){let u=m+g*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<u)&&(d=new Float32Array(u));for(let T=0,b=m;T!==g;++T,b+=4)a.copy(f[T]).applyMatrix4(w,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function Hd(i){let e=new WeakMap;function t(a,o){return o===Wr?a.mapping=ri:o===Xr&&(a.mapping=ai),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wr||o===Xr)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vi=4,Uc=[.125,.215,.35,.446,.526,.582],ui=20,zo=new bs,Nc=new Fe,ko=null,Vo=0,Ho=0,Go=!1,hi=(1+Math.sqrt(5))/2,ki=1/hi,Fc=[new B(-hi,ki,0),new B(hi,ki,0),new B(-ki,0,hi),new B(ki,0,hi),new B(0,hi,-ki),new B(0,hi,ki),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Gd=new B,Pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Gd}=r;ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Vo,Ho),this._renderer.xr.enabled=Go,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Oi,format:jt,colorSpace:ni,depthBuffer:!1},s=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(r)),this._blurMaterial=Xd(r,e,t)}return s}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,s,r){let l=new At(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Nc),f.toneMapping=Pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let g=new as({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),d=new dt(new Vt,g),u=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,u=!0):(g.color.copy(Nc),u=!0);for(let T=0;T<6;T++){let b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let P=this._cubeSize;Ra(s,b*P,T>2?P:0,P,P),f.setRenderTarget(s),u&&f.render(d,l),f.render(e,l)}d.geometry.dispose(),d.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ri||e.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fc[(s-r-1)%Fc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new dt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),g=r/x,d=isFinite(r)?1+Math.floor(h*g):ui;d>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ui}`);let u=[],w=0;for(let D=0;D<ui;++D){let I=D/g,M=Math.exp(-I*I/2);u.push(M),D===0?w+=M:D<d&&(w+=2*M)}for(let D=0;D<u.length;D++)u[D]=u[D]/w;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:T}=this;p.dTheta.value=x,p.mipInt.value=T-n;let b=this._sizeLods[s],P=3*b*(s>T-Vi?s-T+Vi:0),R=4*(this._cubeSize-b);Ra(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(f,zo)}};function Wd(i){let e=[],t=[],n=[],s=i,r=i-Vi+1+Uc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Vi?l=Uc[a-i+Vi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,g=3,d=2,u=1,w=new Float32Array(g*x*m),T=new Float32Array(d*x*m),b=new Float32Array(u*x*m);for(let R=0;R<m;R++){let D=R%3*2/3-1,I=R>2?0:-1,M=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];w.set(M,g*x*R),T.set(p,d*x*R);let v=[R,R,R,R,R,R];b.set(v,u*x*R)}let P=new Jt;P.setAttribute("position",new zt(w,g)),P.setAttribute("uv",new zt(T,d)),P.setAttribute("faceIndex",new zt(b,u)),e.push(P),s>Vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(i,e,t){let n=new un(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xd(i,e,t){let n=new Float32Array(ui),s=new B(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Bc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function zc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function qd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wr||l===Xr,h=l===ri||l===ai;if(c||h){let f=e.get(o),p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Pa(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Pa(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $d(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(f){let p=[],m=f.index,x=f.attributes.position,g=0;if(m!==null){let w=m.array;g=m.version;for(let T=0,b=w.length;T<b;T+=3){let P=w[T+0],R=w[T+1],D=w[T+2];p.push(P,R,R,D,D,P)}}else if(x!==void 0){let w=x.array;g=x.version;for(let T=0,b=w.length/3-1;T<b;T+=3){let P=T+0,R=T+1,D=T+2;p.push(P,R,R,D,D,P)}}else return;let d=new(Uo(p)?ls:os)(p,1);d.version=g;let u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Zd(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function c(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*a,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let d=0;for(let u=0;u<x;u++)d+=m[u];t.update(d,n,1)}function f(p,m,x,g){if(x===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],g[u]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,g,0,x);let u=0;for(let w=0;w<x;w++)u+=m[w]*g[w];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Jd(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kd(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==f){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],T=0;m===!0&&(T=1),x===!0&&(T=2),g===!0&&(T=3);let b=o.attributes.position.count*T,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*P*4*f),D=new rs(R,b,P,f);D.type=mn,D.needsUpdate=!0;let I=T*4;for(let v=0;v<f;v++){let L=d[v],V=u[v],q=w[v],Y=b*P*4*v;for(let Q=0;Q<L.count;Q++){let J=Q*I;m===!0&&(s.fromBufferAttribute(L,Q),R[Y+J+0]=s.x,R[Y+J+1]=s.y,R[Y+J+2]=s.z,R[Y+J+3]=0),x===!0&&(s.fromBufferAttribute(V,Q),R[Y+J+4]=s.x,R[Y+J+5]=s.y,R[Y+J+6]=s.z,R[Y+J+7]=0),g===!0&&(s.fromBufferAttribute(q,Q),R[Y+J+8]=s.x,R[Y+J+9]=s.y,R[Y+J+10]=s.z,R[Y+J+11]=q.itemSize===4?s.w:1)}}p={count:f,texture:D,size:new Xe(b,P)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function jd(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var sh=new Dt,kc=new ms(1,1),rh=new rs,ah=new yr,oh=new hs,Vc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Gi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function ip(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),xt(t,n)}}function sp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),xt(t,n)}}function rp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),xt(t,n)}}function ap(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function hp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Lo,r=kc):r=sh,t.setTexture2D(e||r,s)}function mp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ah,s)}function gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oh,s)}function xp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function _p(i){switch(i){case 5126:return Qd;case 35664:return ep;case 35665:return tp;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return fp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return xp}}function yp(i,e){i.uniform1fv(this.addr,e)}function vp(i,e){let t=Gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Mp(i,e){let t=Gi(e,this.size,3);i.uniform3fv(this.addr,t)}function bp(i,e){let t=Gi(e,this.size,4);i.uniform4fv(this.addr,t)}function Sp(i,e){let t=Gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ep(i,e){let t=Gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tp(i,e){let t=Gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ap(i,e){i.uniform1iv(this.addr,e)}function wp(i,e){i.uniform2iv(this.addr,e)}function Cp(i,e){i.uniform3iv(this.addr,e)}function Rp(i,e){i.uniform4iv(this.addr,e)}function Ip(i,e){i.uniform1uiv(this.addr,e)}function Pp(i,e){i.uniform2uiv(this.addr,e)}function Lp(i,e){i.uniform3uiv(this.addr,e)}function Dp(i,e){i.uniform4uiv(this.addr,e)}function Up(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||sh,r[a])}function Np(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ah,r[a])}function Fp(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oh,r[a])}function Op(i,e,t){let n=this.cache,s=e.length,r=Da(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rh,r[a])}function Bp(i){switch(i){case 5126:return yp;case 35664:return vp;case 35665:return Mp;case 35666:return bp;case 35674:return Sp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Ip;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}var Xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_p(t.type)}},qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bp(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Wo=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function zp(i,e,t){let n=i.name,s=n.length;for(Wo.lastIndex=0;;){let r=Wo.exec(n),a=Wo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qc(t,c===void 0?new Xo(o,i,e):new qo(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Yo(o),qc(t,f)),t=f}}}var Hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zp(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kp=37297,Vp=0;function Hp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $c=new Be;function Gp(i){qe._getMatrix($c,qe.workingColorSpace,i);let e=`mat3( ${$c.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Hp(i.getShaderSource(e),o)}else return r}function Wp(i,e){let t=Gp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xp(i,e){let t;switch(e){case uc:t="Linear";break;case fc:t="Reinhard";break;case dc:t="Cineon";break;case pc:t="ACESFilmic";break;case gc:t="AgX";break;case xc:t="Neutral";break;case mc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ia=new B;function qp(){qe.getLuminanceCoefficients(Ia);let i=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function $p(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ds(i){return i!==""}function Jc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(i){return i.replace(Jp,jp)}var Kp=new Map;function jp(i,e){let t=ke[e];if(t===void 0){let n=Kp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}var Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(Qp,em)}function em(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function im(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function sm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ts:e="ENVMAP_BLENDING_MULTIPLY";break;case cc:e="ENVMAP_BLENDING_MIX";break;case hc:e="ENVMAP_BLENDING_ADD";break}return e}function rm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function am(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tm(t),c=nm(t),h=im(t),f=sm(t),p=rm(t),m=Yp(t),x=$p(r),g=s.createProgram(),d,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ds).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ds).join(`
`),u.length>0&&(u+=`
`)):(d=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),u=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Wp("linearToOutputTexel",t.outputColorSpace),qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=$o(a),a=Jc(a,t),a=Kc(a,t),o=$o(o),o=Jc(o,t),o=Kc(o,t),a=jc(a),o=jc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let T=w+d+a,b=w+u+o,P=Yc(s,s.VERTEX_SHADER,T),R=Yc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,P),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(g)||"",q=s.getShaderInfoLog(P)||"",Y=s.getShaderInfoLog(R)||"",Q=V.trim(),J=q.trim(),ae=Y.trim(),W=!0,ce=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,R);else{let pe=Zc(s,P,"vertex"),Ae=Zc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+pe+`
`+Ae)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(J===""||ae==="")&&(ce=!1);ce&&(L.diagnostics={runnable:W,programLog:Q,vertexShader:{log:J,prefix:d},fragmentShader:{log:ae,prefix:u}})}s.deleteShader(P),s.deleteShader(R),I=new Hi(s,g),M=Zp(s,g)}let I;this.getUniforms=function(){return I===void 0&&D(this),I};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,kp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=R,this}var om=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jo(e),t.set(e,n)),n}},Jo=class{constructor(e){this.id=om++,this.code=e,this.usedTimes=0}};function lm(i,e,t,n,s,r,a){let o=new Li,l=new Zo,c=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,v,L,V,q){let Y=V.fog,Q=q.geometry,J=M.isMeshStandardMaterial?V.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),W=ae&&ae.mapping===As?ae.image.height:null,ce=x[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=pe!==void 0?pe.length:0,ze=0;Q.morphAttributes.position!==void 0&&(ze=1),Q.morphAttributes.normal!==void 0&&(ze=2),Q.morphAttributes.color!==void 0&&(ze=3);let $e,Qe,Ge,j;if(ce){let Ze=gn[ce];$e=Ze.vertexShader,Qe=Ze.fragmentShader}else $e=M.vertexShader,Qe=M.fragmentShader,l.update(M),Ge=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let ee=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Le=q.isInstancedMesh===!0,Ee=q.isBatchedMesh===!0,Ve=!!M.map,_t=!!M.matcap,A=!!ae,we=!!M.aoMap,De=!!M.lightMap,Re=!!M.bumpMap,ye=!!M.normalMap,Ke=!!M.displacementMap,xe=!!M.emissiveMap,Ne=!!M.metalnessMap,ot=!!M.roughnessMap,rt=M.anisotropy>0,S=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,$=M.sheen>0,Z=M.transmission>0,X=rt&&!!M.anisotropyMap,Te=S&&!!M.clearcoatMap,le=S&&!!M.clearcoatNormalMap,ve=S&&!!M.clearcoatRoughnessMap,be=F&&!!M.iridescenceMap,se=F&&!!M.iridescenceThicknessMap,C=$&&!!M.sheenColorMap,z=$&&!!M.sheenRoughnessMap,k=!!M.specularMap,O=!!M.specularColorMap,ne=!!M.specularIntensityMap,E=Z&&!!M.transmissionMap,K=Z&&!!M.thicknessMap,ie=!!M.gradientMap,ue=!!M.alphaMap,re=M.alphaTest>0,te=!!M.alphaHash,Se=!!M.extensions,Oe=Pn;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let tt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Qe,defines:M.defines,customVertexShaderID:Ge,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ni,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:_t,envMap:A,envMapMode:A&&ae.mapping,envMapCubeUVHeight:W,aoMap:we,lightMap:De,bumpMap:Re,normalMap:ye,displacementMap:p&&Ke,emissiveMap:xe,normalMapObjectSpace:ye&&M.normalMapType===Mc,normalMapTangentSpace:ye&&M.normalMapType===wa,metalnessMap:Ne,roughnessMap:ot,anisotropy:rt,anisotropyMap:X,clearcoat:S,clearcoatMap:Te,clearcoatNormalMap:le,clearcoatRoughnessMap:ve,dispersion:_,iridescence:F,iridescenceMap:be,iridescenceThicknessMap:se,sheen:$,sheenColorMap:C,sheenRoughnessMap:z,specularMap:k,specularColorMap:O,specularIntensityMap:ne,transmission:Z,transmissionMap:E,thicknessMap:K,gradientMap:ie,opaque:M.transparent===!1&&M.blending===ei&&M.alphaToCoverage===!1,alphaMap:ue,alphaTest:re,alphaHash:te,combine:M.combine,mapUv:Ve&&g(M.map.channel),aoMapUv:we&&g(M.aoMap.channel),lightMapUv:De&&g(M.lightMap.channel),bumpMapUv:Re&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:Ke&&g(M.displacementMap.channel),emissiveMapUv:xe&&g(M.emissiveMap.channel),metalnessMapUv:Ne&&g(M.metalnessMap.channel),roughnessMapUv:ot&&g(M.roughnessMap.channel),anisotropyMapUv:X&&g(M.anisotropyMap.channel),clearcoatMapUv:Te&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:C&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:z&&g(M.sheenRoughnessMap.channel),specularMapUv:k&&g(M.specularMap.channel),specularColorMapUv:O&&g(M.specularColorMap.channel),specularIntensityMapUv:ne&&g(M.specularIntensityMap.channel),transmissionMapUv:E&&g(M.transmissionMap.channel),thicknessMapUv:K&&g(M.thicknessMap.channel),alphaMapUv:ue&&g(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ye||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(Ve||ue),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:ze,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)v.push(L),v.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(v,M),T(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let v=x[M.type],L;if(v){let V=gn[v];L=Lc.clone(V.uniforms)}else L=M.uniforms;return L}function P(M,v){let L;for(let V=0,q=h.length;V<q;V++){let Y=h[V];if(Y.cacheKey===v){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new am(i,v,M,r),h.push(L)),L}function R(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function D(M){l.remove(M)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:b,acquireProgram:P,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:I}}function cm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function th(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,m,x,g,d){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=d),e++,u}function o(f,p,m,x,g,d){let u=a(f,p,m,x,g,d);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,p,m,x,g,d){let u=a(f,p,m,x,g,d);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||hm),n.length>1&&n.sort(p||eh),s.length>1&&s.sort(p||eh)}function h(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function um(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new th,i.set(n,[a])):s>=r.length?(a=new th,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Fe};break;case"SpotLight":t={position:new B,direction:new B,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function dm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var pm=0;function mm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gm(i){let e=new fm,t=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new ht,a=new ht;function o(c){let h=0,f=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,x=0,g=0,d=0,u=0,w=0,T=0,b=0,P=0,R=0,D=0;c.sort(mm);for(let M=0,v=c.length;M<v;M++){let L=c[M],V=L.color,q=L.intensity,Y=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*q,f+=V.g*q,p+=V.b*q;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],q);D++}else if(L.isDirectionalLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ae=L.shadow,W=t.get(L);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=J,m++}else if(L.isSpotLight){let J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(V).multiplyScalar(q),J.distance=Y,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[g]=J;let ae=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,ae.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[g]=ae.matrix,L.castShadow){let W=t.get(L);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=Q,b++}g++}else if(L.isRectAreaLight){let J=e.get(L);J.color.copy(V).multiplyScalar(q),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[d]=J,d++}else if(L.isPointLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let ae=L.shadow,W=t.get(L);W.shadowIntensity=ae.intensity,W.shadowBias=ae.bias,W.shadowNormalBias=ae.normalBias,W.shadowRadius=ae.radius,W.shadowMapSize=ae.mapSize,W.shadowCameraNear=ae.camera.near,W.shadowCameraFar=ae.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=Q,n.pointShadowMatrix[x]=L.shadow.matrix,T++}n.point[x]=J,x++}else if(L.isHemisphereLight){let J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(q),J.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[u]=J,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==m||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==d||I.hemiLength!==u||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==b||I.numSpotMaps!==P||I.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=d,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,I.directionalLength=m,I.pointLength=x,I.spotLength=g,I.rectAreaLength=d,I.hemiLength=u,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=b,I.numSpotMaps=P,I.numLightProbes=D,n.version=pm++)}function l(c,h){let f=0,p=0,m=0,x=0,g=0,d=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let T=c[u];if(T.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),f++}else if(T.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),m++}else if(T.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(T.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function nh(i){let e=new gm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new nh(i),e.set(s,[o])):r>=a.length?(o=new nh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
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
}`;function vm(i,e,t){let n=new Ui,s=new Xe,r=new Xe,a=new ut,o=new Tr({depthPacking:vc}),l=new Ar,c={},h=t.maxTextureSize,f={[wn]:It,[It]:wn,[Ut]:Ut},p=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:_m,fragmentShader:ym}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new Jt;x.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new dt(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let u=this.type;this.render=function(R,D,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(In),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=u!==dn&&this.type===dn,Y=u===dn&&this.type!==dn;for(let Q=0,J=R.length;Q<J;Q++){let ae=R[Q],W=ae.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ce=W.getFrameExtents();if(s.multiply(ce),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||q===!0||Y===!0){let Ae=this.type!==dn?{minFilter:$t,magFilter:$t}:{};W.map!==null&&W.map.dispose(),W.map=new un(s.x,s.y,Ae),W.map.texture.name=ae.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let pe=W.getViewportCount();for(let Ae=0;Ae<pe;Ae++){let ze=W.getViewport(Ae);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),V.viewport(a),W.updateMatrices(ae,Ae),n=W.getFrustum(),b(D,I,W.camera,ae,this.type)}W.isPointLightShadow!==!0&&this.type===dn&&w(W,I),W.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(M,v,L)};function w(R,D){let I=e.update(g);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new un(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,I,p,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,I,m,g,null)}function T(R,D,I,M){let v=null,L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)v=L;else if(v=I.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=v.uuid,q=D.uuid,Y=c[V];Y===void 0&&(Y={},c[V]=Y);let Q=Y[q];Q===void 0&&(Q=v.clone(),Y[q]=Q,D.addEventListener("dispose",P)),v=Q}if(v.visible=D.visible,v.wireframe=D.wireframe,M===dn?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:f[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=i.properties.get(v);V.light=I}return v}function b(R,D,I,M,v){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let q=e.update(R),Y=R.material;if(Array.isArray(Y)){let Q=q.groups;for(let J=0,ae=Q.length;J<ae;J++){let W=Q[J],ce=Y[W.materialIndex];if(ce&&ce.visible){let pe=T(R,ce,M,v);R.onBeforeShadow(i,R,D,I,q,pe,W),i.renderBufferDirect(I,null,q,pe,R,W),R.onAfterShadow(i,R,D,I,q,pe,W)}}}else if(Y.visible){let Q=T(R,Y,M,v);R.onBeforeShadow(i,R,D,I,q,Q,null),i.renderBufferDirect(I,null,q,Q,R,null),R.onAfterShadow(i,R,D,I,q,Q,null)}}let V=R.children;for(let q=0,Y=V.length;q<Y;q++)b(V[q],D,I,M,v)}function P(R){R.target.removeEventListener("dispose",P);for(let I in c){let M=c[I],v=R.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var Mm={[Or]:Br,[zr]:Hr,[kr]:Gr,[ti]:Vr,[Br]:Or,[Hr]:zr,[Gr]:kr,[Vr]:ti};function bm(i,e){function t(){let E=!1,K=new ut,ie=null,ue=new ut(0,0,0,0);return{setMask:function(re){ie!==re&&!E&&(i.colorMask(re,re,re,re),ie=re)},setLocked:function(re){E=re},setClear:function(re,te,Se,Oe,tt){tt===!0&&(re*=Oe,te*=Oe,Se*=Oe),K.set(re,te,Se,Oe),ue.equals(K)===!1&&(i.clearColor(re,te,Se,Oe),ue.copy(K))},reset:function(){E=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let E=!1,K=!1,ie=null,ue=null,re=null;return{setReversed:function(te){if(K!==te){let Se=e.get("EXT_clip_control");te?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),K=te;let Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return K},setTest:function(te){te?ee(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(te){ie!==te&&!E&&(i.depthMask(te),ie=te)},setFunc:function(te){if(K&&(te=Mm[te]),ue!==te){switch(te){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case ti:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Vr:i.depthFunc(i.GEQUAL);break;case Hr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=te}},setLocked:function(te){E=te},setClear:function(te){re!==te&&(K&&(te=1-te),i.clearDepth(te),re=te)},reset:function(){E=!1,ie=null,ue=null,re=null,K=!1}}}function s(){let E=!1,K=null,ie=null,ue=null,re=null,te=null,Se=null,Oe=null,tt=null;return{setTest:function(Ze){E||(Ze?ee(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ze){K!==Ze&&!E&&(i.stencilMask(Ze),K=Ze)},setFunc:function(Ze,xn,on){(ie!==Ze||ue!==xn||re!==on)&&(i.stencilFunc(Ze,xn,on),ie=Ze,ue=xn,re=on)},setOp:function(Ze,xn,on){(te!==Ze||Se!==xn||Oe!==on)&&(i.stencilOp(Ze,xn,on),te=Ze,Se=xn,Oe=on)},setLocked:function(Ze){E=Ze},setClear:function(Ze){tt!==Ze&&(i.clearStencil(Ze),tt=Ze)},reset:function(){E=!1,K=null,ie=null,ue=null,re=null,te=null,Se=null,Oe=null,tt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,u=null,w=null,T=null,b=null,P=null,R=null,D=new Fe(0,0,0),I=0,M=!1,v=null,L=null,V=null,q=null,Y=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ae=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=ae>=1):W.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=ae>=2);let ce=null,pe={},Ae=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),$e=new ut().fromArray(Ae),Qe=new ut().fromArray(ze);function Ge(E,K,ie,ue){let re=new Uint8Array(4),te=i.createTexture();i.bindTexture(E,te),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<ie;Se++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(K+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return te}let j={};j[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ti),Re(!1),ye(_o),ee(i.CULL_FACE),we(In);function ee(E){h[E]!==!0&&(i.enable(E),h[E]=!0)}function ge(E){h[E]!==!1&&(i.disable(E),h[E]=!1)}function Le(E,K){return f[E]!==K?(i.bindFramebuffer(E,K),f[E]=K,E===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=K),E===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ee(E,K){let ie=m,ue=!1;if(E){ie=p.get(K),ie===void 0&&(ie=[],p.set(K,ie));let re=E.textures;if(ie.length!==re.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Se=re.length;te<Se;te++)ie[te]=i.COLOR_ATTACHMENT0+te;ie.length=re.length,ue=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ie)}function Ve(E){return x!==E?(i.useProgram(E),x=E,!0):!1}let _t={[Vn]:i.FUNC_ADD,[ql]:i.FUNC_SUBTRACT,[Yl]:i.FUNC_REVERSE_SUBTRACT};_t[$l]=i.MIN,_t[Zl]=i.MAX;let A={[Jl]:i.ZERO,[Kl]:i.ONE,[jl]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[sc]:i.SRC_ALPHA_SATURATE,[nc]:i.DST_COLOR,[ec]:i.DST_ALPHA,[Ql]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[ic]:i.ONE_MINUS_DST_COLOR,[tc]:i.ONE_MINUS_DST_ALPHA,[rc]:i.CONSTANT_COLOR,[ac]:i.ONE_MINUS_CONSTANT_COLOR,[oc]:i.CONSTANT_ALPHA,[lc]:i.ONE_MINUS_CONSTANT_ALPHA};function we(E,K,ie,ue,re,te,Se,Oe,tt,Ze){if(E===In){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),E!==Xl){if(E!==d||Ze!==M){if((u!==Vn||b!==Vn)&&(i.blendEquation(i.FUNC_ADD),u=Vn,b=Vn),Ze)switch(E){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}w=null,T=null,P=null,R=null,D.set(0,0,0),I=0,d=E,M=Ze}return}re=re||K,te=te||ie,Se=Se||ue,(K!==u||re!==b)&&(i.blendEquationSeparate(_t[K],_t[re]),u=K,b=re),(ie!==w||ue!==T||te!==P||Se!==R)&&(i.blendFuncSeparate(A[ie],A[ue],A[te],A[Se]),w=ie,T=ue,P=te,R=Se),(Oe.equals(D)===!1||tt!==I)&&(i.blendColor(Oe.r,Oe.g,Oe.b,tt),D.copy(Oe),I=tt),d=E,M=!1}function De(E,K){E.side===Ut?ge(i.CULL_FACE):ee(i.CULL_FACE);let ie=E.side===It;K&&(ie=!ie),Re(ie),E.blending===ei&&E.transparent===!1?we(In):we(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let ue=E.stencilWrite;o.setTest(ue),ue&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),xe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(E){v!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),v=E)}function ye(E){E!==Hl?(ee(i.CULL_FACE),E!==L&&(E===_o?i.cullFace(i.BACK):E===Gl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=E}function Ke(E){E!==V&&(J&&i.lineWidth(E),V=E)}function xe(E,K,ie){E?(ee(i.POLYGON_OFFSET_FILL),(q!==K||Y!==ie)&&(i.polygonOffset(K,ie),q=K,Y=ie)):ge(i.POLYGON_OFFSET_FILL)}function Ne(E){E?ee(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function ot(E){E===void 0&&(E=i.TEXTURE0+Q-1),ce!==E&&(i.activeTexture(E),ce=E)}function rt(E,K,ie){ie===void 0&&(ce===null?ie=i.TEXTURE0+Q-1:ie=ce);let ue=pe[ie];ue===void 0&&(ue={type:void 0,texture:void 0},pe[ie]=ue),(ue.type!==E||ue.texture!==K)&&(ce!==ie&&(i.activeTexture(ie),ce=ie),i.bindTexture(E,K||j[E]),ue.type=E,ue.texture=K)}function S(){let E=pe[ce];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{i.texSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Z(){try{i.texSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{i.texStorage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{i.texStorage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(){try{i.texImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{i.texImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function C(E){$e.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),$e.copy(E))}function z(E){Qe.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),Qe.copy(E))}function k(E,K){let ie=c.get(K);ie===void 0&&(ie=new WeakMap,c.set(K,ie));let ue=ie.get(E);ue===void 0&&(ue=i.getUniformBlockIndex(K,E.name),ie.set(E,ue))}function O(E,K){let ue=c.get(K).get(E);l.get(K)!==ue&&(i.uniformBlockBinding(K,ue,E.__bindingPointIndex),l.set(K,ue))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,pe={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,u=null,w=null,T=null,b=null,P=null,R=null,D=new Fe(0,0,0),I=0,M=!1,v=null,L=null,V=null,q=null,Y=null,$e.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:Le,drawBuffers:Ee,useProgram:Ve,setBlending:we,setMaterial:De,setFlipSided:Re,setCullFace:ye,setLineWidth:Ke,setPolygonOffset:xe,setScissorTest:Ne,activeTexture:ot,bindTexture:rt,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:be,texImage3D:se,updateUBOMapping:k,uniformBlockBinding:O,texStorage2D:le,texStorage3D:ve,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:C,viewport:z,reset:ne}}function Sm(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,_){return m?new OffscreenCanvas(S,_):ss("canvas")}function g(S,_,F){let $=1,Z=rt(S);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let X=Math.floor($*Z.width),Te=Math.floor($*Z.height);f===void 0&&(f=x(X,Te));let le=_?x(X,Te):f;return le.width=X,le.height=Te,le.getContext("2d").drawImage(S,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Te+")."),le}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function d(S){return S.generateMipmaps}function u(S){i.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,_,F,$,Z=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){let Te=Z?ns:qe.getTransfer($);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Te===Je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(S,_){let F;return S?_===null||_===qn||_===Bi?F=i.DEPTH24_STENCIL8:_===mn?F=i.DEPTH32F_STENCIL8:_===Fi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Bi?F=i.DEPTH_COMPONENT24:_===mn?F=i.DEPTH_COMPONENT32F:_===Fi&&(F=i.DEPTH_COMPONENT16),F}function P(S,_){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==$t&&S.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){let _=S.target;_.removeEventListener("dispose",R),I(_),_.isVideoTexture&&h.delete(_)}function D(S){let _=S.target;_.removeEventListener("dispose",D),v(_)}function I(S){let _=n.get(S);if(_.__webglInit===void 0)return;let F=S.source,$=p.get(F);if($){let Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys($).length===0&&p.delete(F)}n.remove(S)}function M(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let F=S.source,$=p.get(F);delete $[_.__cacheKey],a.memory.textures--}function v(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=S.textures;for(let $=0,Z=F.length;$<Z;$++){let X=n.get(F[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(S)}let L=0;function V(){L=0}function q(){let S=L;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function Y(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Q(S,_){let F=n.get(S);if(S.isVideoTexture&&Ne(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,S,_);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function J(S,_){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){j(F,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ae(S,_){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){j(F,S,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function W(S,_){let F=n.get(S);if(S.version>0&&F.__version!==S.version){ee(F,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let ce={[dr]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},pe={[$t]:i.NEAREST,[_c]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[pn]:i.LINEAR_MIPMAP_LINEAR},Ae={[bc]:i.NEVER,[Cc]:i.ALWAYS,[Sc]:i.LESS,[Lo]:i.LEQUAL,[Ec]:i.EQUAL,[wc]:i.GEQUAL,[Tc]:i.GREATER,[Ac]:i.NOTEQUAL};function ze(S,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===qr||_.magFilter===ws||_.magFilter===pn||_.minFilter===kt||_.minFilter===qr||_.minFilter===ws||_.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ce[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==ws&&_.minFilter!==pn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let $=_.source,Z=p.get($);Z===void 0&&(Z={},p.set($,Z));let X=Y(_);if(X!==S.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[X].usedTimes++;let Te=Z[S.__cacheKey];Te!==void 0&&(Z[S.__cacheKey].usedTimes--,Te.usedTimes===0&&M(_)),S.__cacheKey=X,S.__webglTexture=Z[X].texture}return F}function Qe(S,_,F){return Math.floor(Math.floor(S/F)/_)}function Ge(S,_,F,$){let X=S.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,$,_.data);else{X.sort((se,C)=>se.start-C.start);let Te=0;for(let se=1;se<X.length;se++){let C=X[Te],z=X[se],k=C.start+C.count,O=Qe(z.start,_.width,4),ne=Qe(C.start,_.width,4);z.start<=k+1&&O===ne&&Qe(z.start+z.count-1,_.width,4)===O?C.count=Math.max(C.count,z.start+z.count-C.start):(++Te,X[Te]=z)}X.length=Te+1;let le=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let se=0,C=X.length;se<C;se++){let z=X[se],k=Math.floor(z.start/4),O=Math.ceil(z.count/4),ne=k%_.width,E=Math.floor(k/_.width),K=O,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,E),t.texSubImage2D(i.TEXTURE_2D,0,ne,E,K,ie,F,$,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function j(S,_,F){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);let Z=$e(S,_),X=_.source;t.bindTexture($,S.__webglTexture,i.TEXTURE0+F);let Te=n.get(X);if(X.version!==Te.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);let le=qe.getPrimaries(qe.workingColorSpace),ve=_.colorSpace===Ln?null:qe.getPrimaries(_.colorSpace),be=_.colorSpace===Ln||le===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=g(_.image,!1,s.maxTextureSize);se=ot(_,se);let C=r.convert(_.format,_.colorSpace),z=r.convert(_.type),k=T(_.internalFormat,C,z,_.colorSpace,_.isVideoTexture);ze($,_);let O,ne=_.mipmaps,E=_.isVideoTexture!==!0,K=Te.__version===void 0||Z===!0,ie=X.dataReady,ue=P(_,se);if(_.isDepthTexture)k=b(_.format===zi,_.type),K&&(E?t.texStorage2D(i.TEXTURE_2D,1,k,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,k,se.width,se.height,0,C,z,null));else if(_.isDataTexture)if(ne.length>0){E&&K&&t.texStorage2D(i.TEXTURE_2D,ue,k,ne[0].width,ne[0].height);for(let re=0,te=ne.length;re<te;re++)O=ne[re],E?ie&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,O.width,O.height,C,z,O.data):t.texImage2D(i.TEXTURE_2D,re,k,O.width,O.height,0,C,z,O.data);_.generateMipmaps=!1}else E?(K&&t.texStorage2D(i.TEXTURE_2D,ue,k,se.width,se.height),ie&&Ge(_,se,C,z)):t.texImage2D(i.TEXTURE_2D,0,k,se.width,se.height,0,C,z,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){E&&K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,k,ne[0].width,ne[0].height,se.depth);for(let re=0,te=ne.length;re<te;re++)if(O=ne[re],_.format!==jt)if(C!==null)if(E){if(ie)if(_.layerUpdates.size>0){let Se=Bo(O.width,O.height,_.format,_.type);for(let Oe of _.layerUpdates){let tt=O.data.subarray(Oe*Se/O.data.BYTES_PER_ELEMENT,(Oe+1)*Se/O.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Oe,O.width,O.height,1,C,tt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,O.width,O.height,se.depth,C,O.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,k,O.width,O.height,se.depth,0,O.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else E?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,O.width,O.height,se.depth,C,z,O.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,k,O.width,O.height,se.depth,0,C,z,O.data)}else{E&&K&&t.texStorage2D(i.TEXTURE_2D,ue,k,ne[0].width,ne[0].height);for(let re=0,te=ne.length;re<te;re++)O=ne[re],_.format!==jt?C!==null?E?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,O.width,O.height,C,O.data):t.compressedTexImage2D(i.TEXTURE_2D,re,k,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?ie&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,O.width,O.height,C,z,O.data):t.texImage2D(i.TEXTURE_2D,re,k,O.width,O.height,0,C,z,O.data)}else if(_.isDataArrayTexture)if(E){if(K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,k,se.width,se.height,se.depth),ie)if(_.layerUpdates.size>0){let re=Bo(se.width,se.height,_.format,_.type);for(let te of _.layerUpdates){let Se=se.data.subarray(te*re/se.data.BYTES_PER_ELEMENT,(te+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,C,z,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,C,z,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,k,se.width,se.height,se.depth,0,C,z,se.data);else if(_.isData3DTexture)E?(K&&t.texStorage3D(i.TEXTURE_3D,ue,k,se.width,se.height,se.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,C,z,se.data)):t.texImage3D(i.TEXTURE_3D,0,k,se.width,se.height,se.depth,0,C,z,se.data);else if(_.isFramebufferTexture){if(K)if(E)t.texStorage2D(i.TEXTURE_2D,ue,k,se.width,se.height);else{let re=se.width,te=se.height;for(let Se=0;Se<ue;Se++)t.texImage2D(i.TEXTURE_2D,Se,k,re,te,0,C,z,null),re>>=1,te>>=1}}else if(ne.length>0){if(E&&K){let re=rt(ne[0]);t.texStorage2D(i.TEXTURE_2D,ue,k,re.width,re.height)}for(let re=0,te=ne.length;re<te;re++)O=ne[re],E?ie&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,C,z,O):t.texImage2D(i.TEXTURE_2D,re,k,C,z,O);_.generateMipmaps=!1}else if(E){if(K){let re=rt(se);t.texStorage2D(i.TEXTURE_2D,ue,k,re.width,re.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,z,se)}else t.texImage2D(i.TEXTURE_2D,0,k,C,z,se);d(_)&&u($),Te.__version=X.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ee(S,_,F){if(_.image.length!==6)return;let $=$e(S,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);let X=n.get(Z);if(Z.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+F);let Te=qe.getPrimaries(qe.workingColorSpace),le=_.colorSpace===Ln?null:qe.getPrimaries(_.colorSpace),ve=_.colorSpace===Ln||Te===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let be=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,C=[];for(let te=0;te<6;te++)!be&&!se?C[te]=g(_.image[te],!0,s.maxCubemapSize):C[te]=se?_.image[te].image:_.image[te],C[te]=ot(_,C[te]);let z=C[0],k=r.convert(_.format,_.colorSpace),O=r.convert(_.type),ne=T(_.internalFormat,k,O,_.colorSpace),E=_.isVideoTexture!==!0,K=X.__version===void 0||$===!0,ie=Z.dataReady,ue=P(_,z);ze(i.TEXTURE_CUBE_MAP,_);let re;if(be){E&&K&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ne,z.width,z.height);for(let te=0;te<6;te++){re=C[te].mipmaps;for(let Se=0;Se<re.length;Se++){let Oe=re[Se];_.format!==jt?k!==null?E?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Oe.width,Oe.height,k,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,ne,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,0,0,Oe.width,Oe.height,k,O,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se,ne,Oe.width,Oe.height,0,k,O,Oe.data)}}}else{if(re=_.mipmaps,E&&K){re.length>0&&ue++;let te=rt(C[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,ne,te.width,te.height)}for(let te=0;te<6;te++)if(se){E?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,C[te].width,C[te].height,k,O,C[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ne,C[te].width,C[te].height,0,k,O,C[te].data);for(let Se=0;Se<re.length;Se++){let tt=re[Se].image[te].image;E?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,tt.width,tt.height,k,O,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,ne,tt.width,tt.height,0,k,O,tt.data)}}else{E?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,k,O,C[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ne,k,O,C[te]);for(let Se=0;Se<re.length;Se++){let Oe=re[Se];E?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,0,0,k,O,Oe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se+1,ne,k,O,Oe.image[te])}}}d(_)&&u(i.TEXTURE_CUBE_MAP),X.__version=Z.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ge(S,_,F,$,Z,X){let Te=r.convert(F.format,F.colorSpace),le=r.convert(F.type),ve=T(F.internalFormat,Te,le,F.colorSpace),be=n.get(_),se=n.get(F);if(se.__renderTarget=_,!be.__hasExternalTextures){let C=Math.max(1,_.width>>X),z=Math.max(1,_.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,ve,C,z,_.depth,0,Te,le,null):t.texImage2D(Z,X,ve,C,z,0,Te,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,se.__webglTexture,0,Ke(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,se.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(S,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,X=b(_.stencilBuffer,Z),Te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ke(_);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,S)}else{let $=_.textures;for(let Z=0;Z<$.length;Z++){let X=$[Z],Te=r.convert(X.format,X.colorSpace),le=r.convert(X.type),ve=T(X.internalFormat,Te,le,X.colorSpace),be=Ke(_);F&&xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ve,_.width,_.height):xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);let Z=$.__webglTexture,X=Ke(_);if(_.depthTexture.format===Ci)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===zi)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(S){let _=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=$}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let $=S.texture.mipmaps;$&&$.length>0?Ee(_.__webglFramebuffer[0],S):Ee(_.__webglFramebuffer,S)}else if(F){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[$],S,!1);else{let Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{let $=S.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,S,!1);else{let Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(S,_,F){let $=n.get(S);_!==void 0&&ge($.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(S)}function A(S){let _=S.texture,F=n.get(S),$=n.get(_);S.addEventListener("dispose",D);let Z=S.textures,X=S.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[le][ve]=i.createFramebuffer()}else F.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Te)for(let le=0,ve=Z.length;le<ve;le++){let be=n.get(Z[le]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&xe(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){let ve=Z[le];F.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let be=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),C=T(ve.internalFormat,be,se,ve.colorSpace,S.isXRRenderTarget===!0),z=Ke(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,z,C,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,F.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ze(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ge(F.__webglFramebuffer[le][ve],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else ge(F.__webglFramebuffer[le],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);d(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,ve=Z.length;le<ve;le++){let be=Z[le],se=n.get(be),C=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(C=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(C,se.__webglTexture),ze(C,be),ge(F.__webglFramebuffer,S,be,i.COLOR_ATTACHMENT0+le,C,0),d(be)&&u(C)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),ze(le,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)ge(F.__webglFramebuffer[ve],S,_,i.COLOR_ATTACHMENT0,le,ve);else ge(F.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,le,0);d(_)&&u(le),t.unbindTexture()}S.depthBuffer&&Ve(S)}function we(S){let _=S.textures;for(let F=0,$=_.length;F<$;F++){let Z=_[F];if(d(Z)){let X=w(S),Te=n.get(Z).__webglTexture;t.bindTexture(X,Te),u(X),t.unbindTexture()}}}let De=[],Re=[];function ye(S){if(S.samples>0){if(xe(S)===!1){let _=S.textures,F=S.width,$=S.height,Z=i.COLOR_BUFFER_BIT,X=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(S),le=_.length>1;if(le)for(let be=0;be<_.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let ve=S.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<_.length;be++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let se=n.get(_[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,Z,i.NEAREST),l===!0&&(De.length=0,Re.length=0,De.push(i.COLOR_ATTACHMENT0+be),S.depthBuffer&&S.resolveDepthBuffer===!1&&(De.push(X),Re.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<_.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let se=n.get(_[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ke(S){return Math.min(s.maxSamples,S.samples)}function xe(S){let _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ne(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ot(S,_){let F=S.colorSpace,$=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==ni&&F!==Ln&&(qe.getTransfer(F)===Je?($!==jt||Z!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function rt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=ae,this.setTextureCube=W,this.rebindTextures=_t,this.setupRenderTarget=A,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function Em(i,e){function t(n,s=Ln){let r,a=qe.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===$r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ao)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eo)return i.BYTE;if(n===To)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===Co)return i.ALPHA;if(n===Ro)return i.RGB;if(n===jt)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Jr)return i.RED_INTEGER;if(n===Po)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===jr)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qr||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===xa||n===_a||n===ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Ma||n===ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===Ea||n===Ta||n===Aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`,Ko=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:Tm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jo=class extends Cn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,x=null,g=typeof XRWebGLBinding<"u",d=new Ko,u={},w=t.getContextAttributes(),T=null,b=null,P=[],R=[],D=new Xe,I=null,M=new At;M.viewport=new ut;let v=new At;v.viewport=new ut;let L=[M,v],V=new Fr,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=P[j];return ee===void 0&&(ee=new Di,P[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=P[j];return ee===void 0&&(ee=new Di,P[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=P[j];return ee===void 0&&(ee=new Di,P[j]=ee),ee.getHandSpace()};function Q(j){let ee=R.indexOf(j.inputSource);if(ee===-1)return;let ge=P[ee];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||a),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ae);for(let j=0;j<P.length;j++){let ee=R[j];ee!==null&&(R[j]=null,P[j].disconnect(ee))}q=null,Y=null,d.reset();for(let j in u)delete u[j];e.setRenderTarget(T),m=null,p=null,f=null,s=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ae),w.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,Ee=null;w.depth&&(Ee=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=w.stencil?zi:Ci,Le=w.stencil?Bi:qn);let Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new un(p.textureWidth,p.textureHeight,{format:jt,type:an,depthTexture:new ms(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new un(m.framebufferWidth,m.framebufferHeight,{format:jt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ae(j){for(let ee=0;ee<j.removed.length;ee++){let ge=j.removed[ee],Le=R.indexOf(ge);Le>=0&&(R[Le]=null,P[Le].disconnect(ge))}for(let ee=0;ee<j.added.length;ee++){let ge=j.added[ee],Le=R.indexOf(ge);if(Le===-1){for(let Ve=0;Ve<P.length;Ve++)if(Ve>=R.length){R.push(ge),Le=Ve;break}else if(R[Ve]===null){R[Ve]=ge,Le=Ve;break}if(Le===-1)break}let Ee=P[Le];Ee&&Ee.connect(ge)}}let W=new B,ce=new B;function pe(j,ee,ge){W.setFromMatrixPosition(ee.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);let Le=W.distanceTo(ce),Ee=ee.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,_t=Ee[14]/(Ee[10]-1),A=Ee[14]/(Ee[10]+1),we=(Ee[9]+1)/Ee[5],De=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],ye=(Ve[8]+1)/Ve[0],Ke=_t*Re,xe=_t*ye,Ne=Le/(-Re+ye),ot=Ne*-Re;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let rt=_t+Ne,S=A+Ne,_=Ke-ot,F=xe+(Le-ot),$=we*A/S*rt,Z=De*A/S*rt;j.projectionMatrix.makePerspective(_,F,$,Z,rt,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ae(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ee=j.near,ge=j.far;d.texture!==null&&(d.depthNear>0&&(ee=d.depthNear),d.depthFar>0&&(ge=d.depthFar)),V.near=v.near=M.near=ee,V.far=v.far=M.far=ge,(q!==V.near||Y!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,Y=V.far),V.layers.mask=j.layers.mask|6,M.layers.mask=V.layers.mask&3,v.layers.mask=V.layers.mask&5;let Le=j.parent,Ee=V.cameras;Ae(V,Le);for(let Ve=0;Ve<Ee.length;Ve++)Ae(Ee[Ve],Le);Ee.length===2?pe(V,M,v):V.projectionMatrix.copy(M.projectionMatrix),ze(j,V,Le)};function ze(j,ee,ge){ge===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(j){l=j,p!==null&&(p.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(V)},this.getCameraTexture=function(j){return u[j]};let $e=null;function Qe(j,ee){if(h=ee.getViewerPose(c||a),x=ee,h!==null){let ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Le=!1;ge.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let A=0;A<ge.length;A++){let we=ge[A],De=null;if(m!==null)De=m.getViewport(we);else{let ye=f.getViewSubImage(p,we);De=ye.viewport,A===0&&(e.setRenderTargetTextures(b,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(b))}let Re=L[A];Re===void 0&&(Re=new At,Re.layers.enable(A),Re.viewport=new ut,L[A]=Re),Re.matrix.fromArray(we.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(we.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),A===0&&(V.matrix.copy(Re.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(Re)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=n.getBinding();let A=f.getDepthInformation(ge[0]);A&&A.isValid&&A.texture&&d.init(A,s.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<ge.length;A++){let we=ge[A].camera;if(we){let De=u[we];De||(De=new gs,u[we]=De);let Re=f.getCameraImage(we);De.sourceTexture=Re}}}}for(let ge=0;ge<P.length;ge++){let Le=R[ge],Ee=P[ge];Le!==null&&Ee!==void 0&&Ee.update(Le,ee,c||a)}$e&&$e(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}let Ge=new ih;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(j){$e=j},this.dispose=function(){}}},ci=new Zt,wm=new ht;function Cm(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,No(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,w,T,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,b)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),g(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?l(d,u,w,T):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===It&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===It&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let w=e.get(u),T=w.envMap,b=w.envMapRotation;T&&(d.envMap.value=T,ci.copy(b),ci.x*=-1,ci.y*=-1,ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),d.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(ci)),d.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,w,T){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*w,d.scale.value=T*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,w){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function g(d,u){let w=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){let b=T.program;n.uniformBlockBinding(w,b)}function c(w,T){let b=s[w.id];b===void 0&&(x(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",d));let P=T.program;n.updateUBOMapping(w,P);let R=e.render.frame;r[w.id]!==R&&(p(w),r[w.id]=R)}function h(w){let T=f();w.__bindingPointIndex=T;let b=i.createBuffer(),P=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let T=s[w.id],b=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,D=b.length;R<D;R++){let I=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,v=I.length;M<v;M++){let L=I[M];if(m(L,R,M,P)===!0){let V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let Q=0;Q<q.length;Q++){let J=q[Q],ae=g(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,Y),Y+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,T,b,P){let R=w.value,D=T+"_"+b;if(P[D]===void 0)return typeof R=="number"||typeof R=="boolean"?P[D]=R:P[D]=R.clone(),!0;{let I=P[D];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[D]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function x(w){let T=w.uniforms,b=0,P=16;for(let D=0,I=T.length;D<I;D++){let M=Array.isArray(T[D])?T[D]:[T[D]];for(let v=0,L=M.length;v<L;v++){let V=M[v],q=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,Q=q.length;Y<Q;Y++){let J=q[Y],ae=g(J),W=b%P,ce=W%ae.boundary,pe=W+ce;b+=ce,pe!==0&&P-pe<ae.storage&&(b+=P-pe),V.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=ae.storage}}}let R=b%P;return R>0&&(b+=P-R),w.__size=b,w.__cache={},this}function g(w){let T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function d(w){let T=w.target;T.removeEventListener("dispose",d);let b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var La=class{constructor(e={}){let{canvas:t=Rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=new Uint32Array(4),g=new Int32Array(4),d=null,u=null,w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,P=!1;this._outputColorSpace=bt;let R=0,D=0,I=null,M=-1,v=null,L=new ut,V=new ut,q=null,Y=new Fe(0),Q=0,J=t.width,ae=t.height,W=1,ce=null,pe=null,Ae=new ut(0,0,J,ae),ze=new ut(0,0,J,ae),$e=!1,Qe=new Ui,Ge=!1,j=!1,ee=new ht,ge=new B,Le=new ut,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function _t(){return I===null?W:1}let A=n;function we(y,U){return t.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",re,!1),A===null){let U="webgl2";if(A=we(U,y),A===null)throw we(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let De,Re,ye,Ke,xe,Ne,ot,rt,S,_,F,$,Z,X,Te,le,ve,be,se,C,z,k,O,ne;function E(){De=new Yd(A),De.init(),k=new Em(A,De),Re=new kd(A,De,e,k),ye=new bm(A,De),Re.reversedDepthBuffer&&p&&ye.buffers.depth.setReversed(!0),Ke=new Jd(A),xe=new cm,Ne=new Sm(A,De,ye,xe,Re,k,Ke),ot=new Hd(b),rt=new qd(b),S=new tu(A),O=new Bd(A,S),_=new $d(A,S,Ke,O),F=new jd(A,_,S,Ke),se=new Kd(A,Re,Ne),le=new Vd(xe),$=new lm(b,ot,rt,De,Re,O,le),Z=new Cm(b,xe),X=new um,Te=new xm(De),be=new Od(b,ot,rt,ye,F,m,l),ve=new vm(b,F,Re),ne=new Rm(A,Ke,Re,ye),C=new zd(A,De,Ke),z=new Zd(A,De,Ke),Ke.programs=$.programs,b.capabilities=Re,b.extensions=De,b.properties=xe,b.renderLists=X,b.shadowMap=ve,b.state=ye,b.info=Ke}E();let K=new jo(b,A);this.xr=K,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let y=De.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=De.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(J,ae,!1))},this.getSize=function(y){return y.set(J,ae)},this.setSize=function(y,U,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,ae=U,t.width=Math.floor(y*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(J*W,ae*W).floor()},this.setDrawingBufferSize=function(y,U,H){J=y,ae=U,W=H,t.width=Math.floor(y*H),t.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,U,H,G){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,U,H,G),ye.viewport(L.copy(Ae).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(ze)},this.setScissor=function(y,U,H,G){y.isVector4?ze.set(y.x,y.y,y.z,y.w):ze.set(y,U,H,G),ye.scissor(V.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(y){ye.setScissorTest($e=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,H=!0){let G=0;if(y){let N=!1;if(I!==null){let oe=I.texture.format;N=oe===jr||oe===Kr||oe===Jr}if(N){let oe=I.texture.type,de=oe===an||oe===qn||oe===Fi||oe===Bi||oe===$r||oe===Zr,Me=be.getClearColor(),me=be.getClearAlpha(),Pe=Me.r,Ue=Me.g,Ce=Me.b;de?(x[0]=Pe,x[1]=Ue,x[2]=Ce,x[3]=me,A.clearBufferuiv(A.COLOR,0,x)):(g[0]=Pe,g[1]=Ue,g[2]=Ce,g[3]=me,A.clearBufferiv(A.COLOR,0,g))}else G|=A.COLOR_BUFFER_BIT}U&&(G|=A.DEPTH_BUFFER_BIT),H&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",re,!1),be.dispose(),X.dispose(),Te.dispose(),xe.dispose(),ot.dispose(),rt.dispose(),F.dispose(),O.dispose(),ne.dispose(),$.dispose(),K.dispose(),K.removeEventListener("sessionstart",on),K.removeEventListener("sessionend",il),Yn.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let y=Ke.autoReset,U=ve.enabled,H=ve.autoUpdate,G=ve.needsUpdate,N=ve.type;E(),Ke.autoReset=y,ve.enabled=U,ve.autoUpdate=H,ve.needsUpdate=G,ve.type=N}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function te(y){let U=y.target;U.removeEventListener("dispose",te),Se(U)}function Se(y){Oe(y),xe.remove(y)}function Oe(y){let U=xe.get(y).programs;U!==void 0&&(U.forEach(function(H){$.releaseProgram(H)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,G,N,oe){U===null&&(U=Ee);let de=N.isMesh&&N.matrixWorld.determinant()<0,Me=ph(y,U,H,G,N);ye.setMaterial(G,de);let me=H.index,Pe=1;if(G.wireframe===!0){if(me=_.getWireframeAttribute(H),me===void 0)return;Pe=2}let Ue=H.drawRange,Ce=H.attributes.position,He=Ue.start*Pe,je=(Ue.start+Ue.count)*Pe;oe!==null&&(He=Math.max(He,oe.start*Pe),je=Math.min(je,(oe.start+oe.count)*Pe)),me!==null?(He=Math.max(He,0),je=Math.min(je,me.count)):Ce!=null&&(He=Math.max(He,0),je=Math.min(je,Ce.count));let ft=je-He;if(ft<0||ft===1/0)return;O.setup(N,G,Me,H,me);let it,et=C;if(me!==null&&(it=S.get(me),et=z,et.setIndex(it)),N.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*_t()),et.setMode(A.LINES)):et.setMode(A.TRIANGLES);else if(N.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),ye.setLineWidth(Ie*_t()),N.isLineSegments?et.setMode(A.LINES):N.isLineLoop?et.setMode(A.LINE_LOOP):et.setMode(A.LINE_STRIP)}else N.isPoints?et.setMode(A.POINTS):N.isSprite&&et.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ie=N._multiDrawStarts,lt=N._multiDrawCounts,Ye=N._multiDrawCount,Nt=me?S.get(me).bytesPerElement:1,fi=xe.get(G).currentProgram.getUniforms();for(let Ft=0;Ft<Ye;Ft++)fi.setValue(A,"_gl_DrawID",Ft),et.render(Ie[Ft]/Nt,lt[Ft])}else if(N.isInstancedMesh)et.renderInstances(He,ft,N.count);else if(H.isInstancedBufferGeometry){let Ie=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,lt=Math.min(H.instanceCount,Ie);et.renderInstances(He,ft,lt)}else et.render(He,ft)};function tt(y,U,H){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Os(y,U,H),y.side=wn,y.needsUpdate=!0,Os(y,U,H),y.side=Ut):Os(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),u=Te.get(H),u.init(U),T.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),y!==H&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let G=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let oe=N.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){let Me=oe[de];tt(Me,H,N),G.add(Me)}else tt(oe,H,N),G.add(oe)}),u=T.pop(),G},this.compileAsync=function(y,U,H=null){let G=this.compile(y,U,H);return new Promise(N=>{function oe(){if(G.forEach(function(de){xe.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){N(y);return}setTimeout(oe,10)}De.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function xn(y){Ze&&Ze(y)}function on(){Yn.stop()}function il(){Yn.start()}let Yn=new ih;Yn.setAnimationLoop(xn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){Ze=y,K.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},K.addEventListener("sessionstart",on),K.addEventListener("sessionend",il),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,I),u=Te.get(y,T.length),u.init(U),T.push(u),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qe.setFromProjectionMatrix(ee,sn,U.reversedDepth),j=this.localClippingEnabled,Ge=le.init(this.clippingPlanes,j),d=X.get(y,w.length),d.init(),w.push(d),K.enabled===!0&&K.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&Ua(oe,U,-1/0,b.sortObjects)}Ua(y,U,0,b.sortObjects),d.finish(),b.sortObjects===!0&&d.sort(ce,pe),Ve=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ve&&be.addToRenderList(d,y),this.info.render.frame++,Ge===!0&&le.beginShadows();let H=u.state.shadowsArray;ve.render(H,y,U),Ge===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=d.opaque,N=d.transmissive;if(u.setupLights(),U.isArrayCamera){let oe=U.cameras;if(N.length>0)for(let de=0,Me=oe.length;de<Me;de++){let me=oe[de];rl(G,N,y,me)}Ve&&be.render(y);for(let de=0,Me=oe.length;de<Me;de++){let me=oe[de];sl(d,y,me,me.viewport)}}else N.length>0&&rl(G,N,y,U),Ve&&be.render(y),sl(d,y,U);I!==null&&D===0&&(Ne.updateMultisampleRenderTarget(I),Ne.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(b,y,U),O.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(u=T[T.length-1],Ge===!0&&le.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?d=w[w.length-1]:d=null};function Ua(y,U,H,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qe.intersectsSprite(y)){G&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);let de=F.update(y),Me=y.material;Me.visible&&d.push(y,de,Me,H,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qe.intersectsObject(y))){let de=F.update(y),Me=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(Me)){let me=de.groups;for(let Pe=0,Ue=me.length;Pe<Ue;Pe++){let Ce=me[Pe],He=Me[Ce.materialIndex];He&&He.visible&&d.push(y,de,He,H,Le.z,Ce)}}else Me.visible&&d.push(y,de,Me,H,Le.z,null)}}let oe=y.children;for(let de=0,Me=oe.length;de<Me;de++)Ua(oe[de],U,H,G)}function sl(y,U,H,G){let N=y.opaque,oe=y.transmissive,de=y.transparent;u.setupLightsView(H),Ge===!0&&le.setGlobalState(b.clippingPlanes,H),G&&ye.viewport(L.copy(G)),N.length>0&&Fs(N,U,H),oe.length>0&&Fs(oe,U,H),de.length>0&&Fs(de,U,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function rl(y,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new un(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Oi:an,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let oe=u.state.transmissionRenderTarget[G.id],de=G.viewport||L;oe.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);let Me=b.getRenderTarget(),me=b.getActiveCubeFace(),Pe=b.getActiveMipmapLevel();b.setRenderTarget(oe),b.getClearColor(Y),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&be.render(H);let Ue=b.toneMapping;b.toneMapping=Pn;let Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Ge===!0&&le.setGlobalState(b.clippingPlanes,G),Fs(y,H,G),Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe),De.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let je=0,ft=U.length;je<ft;je++){let it=U[je],et=it.object,Ie=it.geometry,lt=it.material,Ye=it.group;if(lt.side===Ut&&et.layers.test(G.layers)){let Nt=lt.side;lt.side=It,lt.needsUpdate=!0,al(et,H,G,Ie,lt,Ye),lt.side=Nt,lt.needsUpdate=!0,He=!0}}He===!0&&(Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe))}b.setRenderTarget(Me,me,Pe),b.setClearColor(Y,Q),Ce!==void 0&&(G.viewport=Ce),b.toneMapping=Ue}function Fs(y,U,H){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=y.length;N<oe;N++){let de=y[N],Me=de.object,me=de.geometry,Pe=de.group,Ue=de.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),Me.layers.test(H.layers)&&al(Me,U,H,me,Ue,Pe)}}function al(y,U,H,G,N,oe){y.onBeforeRender(b,U,H,G,N,oe),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(b,U,H,G,y,oe),N.transparent===!0&&N.side===Ut&&N.forceSinglePass===!1?(N.side=It,N.needsUpdate=!0,b.renderBufferDirect(H,U,G,N,y,oe),N.side=wn,N.needsUpdate=!0,b.renderBufferDirect(H,U,G,N,y,oe),N.side=Ut):b.renderBufferDirect(H,U,G,N,y,oe),y.onAfterRender(b,U,H,G,N,oe)}function Os(y,U,H){U.isScene!==!0&&(U=Ee);let G=xe.get(y),N=u.state.lights,oe=u.state.shadowsArray,de=N.state.version,Me=$.getParameters(y,N.state,oe,U,H),me=$.getProgramCacheKey(Me),Pe=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(y.isMeshStandardMaterial?rt:ot).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",te),Pe=new Map,G.programs=Pe);let Ue=Pe.get(me);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===de)return ll(y,Me),Ue}else Me.uniforms=$.getUniforms(y),y.onBeforeCompile(Me,b),Ue=$.acquireProgram(Me,me),Pe.set(me,Ue),G.uniforms=Me.uniforms;let Ce=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=le.uniform),ll(y,Me),G.needsLights=gh(y),G.lightsStateVersion=de,G.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function ol(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Hi.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ll(y,U){let H=xe.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ph(y,U,H,G,N){U.isScene!==!0&&(U=Ee),Ne.resetTextureUnits();let oe=U.fog,de=G.isMeshStandardMaterial?U.environment:null,Me=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ni,me=(G.isMeshStandardMaterial?rt:ot).get(G.envMap||de),Pe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,je=!!H.morphAttributes.color,ft=Pn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=b.toneMapping);let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=it!==void 0?it.length:0,Ie=xe.get(G),lt=u.state.lights;if(Ge===!0&&(j===!0||y!==v)){let Rt=y===v&&G.id===M;le.setState(G,y,Rt)}let Ye=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==lt.state.version||Ie.outputColorSpace!==Me||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==me||G.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==Ue||Ie.morphTargets!==Ce||Ie.morphNormals!==He||Ie.morphColors!==je||Ie.toneMapping!==ft||Ie.morphTargetsCount!==et)&&(Ye=!0):(Ye=!0,Ie.__version=G.version);let Nt=Ie.currentProgram;Ye===!0&&(Nt=Os(G,U,N));let fi=!1,Ft=!1,Wi=!1,ct=Nt.getUniforms(),Wt=Ie.uniforms;if(ye.useProgram(Nt.program)&&(fi=!0,Ft=!0,Wi=!0),G.id!==M&&(M=G.id,Ft=!0),fi||v!==y){ye.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ct.setValue(A,"projectionMatrix",y.projectionMatrix),ct.setValue(A,"viewMatrix",y.matrixWorldInverse);let Pt=ct.map.cameraPosition;Pt!==void 0&&Pt.setValue(A,ge.setFromMatrixPosition(y.matrixWorld)),Re.logarithmicDepthBuffer&&ct.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Ft=!0,Wi=!0)}if(N.isSkinnedMesh){ct.setOptional(A,N,"bindMatrix"),ct.setOptional(A,N,"bindMatrixInverse");let Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(A,"boneTexture",Rt.boneTexture,Ne))}N.isBatchedMesh&&(ct.setOptional(A,N,"batchingTexture"),ct.setValue(A,"batchingTexture",N._matricesTexture,Ne),ct.setOptional(A,N,"batchingIdTexture"),ct.setValue(A,"batchingIdTexture",N._indirectTexture,Ne),ct.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(A,"batchingColorTexture",N._colorsTexture,Ne));let Xt=H.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&se.update(N,H,Nt),(Ft||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,ct.setValue(A,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wt.envMap.value=me,Wt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Ft&&(ct.setValue(A,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&mh(Wt,Wi),oe&&G.fog===!0&&Z.refreshFogUniforms(Wt,oe),Z.refreshMaterialUniforms(Wt,G,W,ae,u.state.transmissionRenderTarget[y.id]),Hi.upload(A,ol(Ie),Wt,Ne)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hi.upload(A,ol(Ie),Wt,Ne),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(A,"center",N.center),ct.setValue(A,"modelViewMatrix",N.modelViewMatrix),ct.setValue(A,"normalMatrix",N.normalMatrix),ct.setValue(A,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Rt=G.uniformsGroups;for(let Pt=0,Na=Rt.length;Pt<Na;Pt++){let $n=Rt[Pt];ne.update($n,Nt),ne.bind($n,Nt)}}return Nt}function mh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function gh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,H){let G=xe.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),xe.get(y.texture).__webglTexture=U,xe.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let H=xe.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};let xh=A.createFramebuffer();this.setRenderTarget=function(y,U=0,H=0){I=y,R=U,D=H;let G=!0,N=null,oe=!1,de=!1;if(y){let me=xe.get(y);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)Ne.setupRenderTarget(y);else if(me.__hasExternalTextures)Ne.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ce=y.depthTexture;if(me.__boundDepthTexture!==Ce){if(Ce!==null&&xe.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(y)}}let Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);let Ue=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][H]:N=Ue[U],oe=!0):y.samples>0&&Ne.useMultisampledRTT(y)===!1?N=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[H]:N=Ue,L.copy(y.viewport),V.copy(y.scissor),q=y.scissorTest}else L.copy(Ae).multiplyScalar(W).floor(),V.copy(ze).multiplyScalar(W).floor(),q=$e;if(H!==0&&(N=xh),ye.bindFramebuffer(A.FRAMEBUFFER,N)&&G&&ye.drawBuffers(y,N),ye.viewport(L),ye.scissor(V),ye.setScissorTest(q),oe){let me=xe.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,H)}else if(de){let me=U;for(let Pe=0;Pe<y.textures.length;Pe++){let Ue=xe.get(y.textures[Pe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,H,me)}}else if(y!==null&&H!==0){let me=xe.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,me.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(y,U,H,G,N,oe,de,Me=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){ye.bindFramebuffer(A.FRAMEBUFFER,me);try{let Pe=y.textures[Me],Ue=Pe.format,Ce=Pe.type;if(!Re.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&H>=0&&H<=y.height-N&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(U,H,G,N,k.convert(Ue),k.convert(Ce),oe))}finally{let Pe=I!==null?xe.get(I).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,G,N,oe,de,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(U>=0&&U<=y.width-G&&H>=0&&H<=y.height-N){ye.bindFramebuffer(A.FRAMEBUFFER,me);let Pe=y.textures[Me],Ue=Pe.format,Ce=Pe.type;if(!Re.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,oe.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Me),A.readPixels(U,H,G,N,k.convert(Ue),k.convert(Ce),0);let je=I!==null?xe.get(I).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,je);let ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ic(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,oe),A.deleteBuffer(He),A.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,H=0){let G=Math.pow(2,-H),N=Math.floor(y.image.width*G),oe=Math.floor(y.image.height*G),de=U!==null?U.x:0,Me=U!==null?U.y:0;Ne.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,H,0,0,de,Me,N,oe),ye.unbindTexture()};let _h=A.createFramebuffer(),yh=A.createFramebuffer();this.copyTextureToTexture=function(y,U,H=null,G=null,N=0,oe=null){oe===null&&(N!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let de,Me,me,Pe,Ue,Ce,He,je,ft,it=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(H!==null)de=H.max.x-H.min.x,Me=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,Pe=H.min.x,Ue=H.min.y,Ce=H.isBox3?H.min.z:0;else{let Xt=Math.pow(2,-N);de=Math.floor(it.width*Xt),Me=Math.floor(it.height*Xt),y.isDataArrayTexture?me=it.depth:y.isData3DTexture?me=Math.floor(it.depth*Xt):me=1,Pe=0,Ue=0,Ce=0}G!==null?(He=G.x,je=G.y,ft=G.z):(He=0,je=0,ft=0);let et=k.convert(U.format),Ie=k.convert(U.type),lt;U.isData3DTexture?(Ne.setTexture3D(U,0),lt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),lt=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),lt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);let Ye=A.getParameter(A.UNPACK_ROW_LENGTH),Nt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fi=A.getParameter(A.UNPACK_SKIP_PIXELS),Ft=A.getParameter(A.UNPACK_SKIP_ROWS),Wi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,it.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ce);let ct=y.isDataArrayTexture||y.isData3DTexture,Wt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Xt=xe.get(y),Rt=xe.get(U),Pt=xe.get(Xt.__renderTarget),Na=xe.get(Rt.__renderTarget);ye.bindFramebuffer(A.READ_FRAMEBUFFER,Pt.__webglFramebuffer),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let $n=0;$n<me;$n++)ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,N,Ce+$n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,oe,ft+$n)),A.blitFramebuffer(Pe,Ue,de,Me,He,je,de,Me,A.DEPTH_BUFFER_BIT,A.NEAREST);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||xe.has(y)){let Xt=xe.get(y),Rt=xe.get(U);ye.bindFramebuffer(A.READ_FRAMEBUFFER,_h),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,yh);for(let Pt=0;Pt<me;Pt++)ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Xt.__webglTexture,N,Ce+Pt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Xt.__webglTexture,N),Wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,oe,ft+Pt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,oe),N!==0?A.blitFramebuffer(Pe,Ue,de,Me,He,je,de,Me,A.COLOR_BUFFER_BIT,A.NEAREST):Wt?A.copyTexSubImage3D(lt,oe,He,je,ft+Pt,Pe,Ue,de,Me):A.copyTexSubImage2D(lt,oe,He,je,Pe,Ue,de,Me);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Wt?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(lt,oe,He,je,ft,de,Me,me,et,Ie,it.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(lt,oe,He,je,ft,de,Me,me,et,it.data):A.texSubImage3D(lt,oe,He,je,ft,de,Me,me,et,Ie,it):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,oe,He,je,de,Me,et,Ie,it.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,oe,He,je,it.width,it.height,et,it.data):A.texSubImage2D(A.TEXTURE_2D,oe,He,je,de,Me,et,Ie,it);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ye),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Nt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Wi),oe===0&&U.generateMipmaps&&A.generateMipmap(lt),ye.unbindTexture()},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){R=0,D=0,I=null,ye.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var nt=32,tl=128;function lh(){let i=document.createElement("canvas");i.width=nt*tl,i.height=nt;let e=i.getContext("2d");for(let n=1;n<_e.length;n++){let s=new Fe(n>=39&&n<=42?8754587:_e[n].color),r=n*nt;e.fillStyle="#"+s.getHexString(),e.fillRect(r,0,nt,nt);for(let a=0;a<190;a++){let o=(a*7+n*3)%nt,l=(a*11+Math.floor(a/nt)*3)%nt;e.fillStyle=a%2?"#ffffff10":"#00000010",e.fillRect(r+o,l,1+a%2,1+a%3)}if(n>=39&&n<=42){e.fillStyle="#"+_e[n].color.toString(16).padStart(6,"0");for(let a=0;a<7;a++)e.fillRect(r+3+a*11%25,3+a*7%25,3,3)}if(n===33){e.fillStyle="#49372b";for(let a=3;a<nt;a+=7)e.fillRect(r,a,nt,2)}if(n===4||n===9){e.fillStyle="#45351f30";for(let a=4;a<nt;a+=8)e.fillRect(r,a,nt,1);if(n===4)for(let a=4;a<nt;a+=7)e.fillRect(r+a,0,1,nt)}if(n===7){e.fillStyle="#efc5a480";for(let a=7;a<nt;a+=8){e.fillRect(r,a,nt,1);for(let o=a%3*4;o<nt;o+=16)e.fillRect(r+o,a-7,1,7)}}n===8&&(e.fillStyle="#d8ffffa0",e.fillRect(r,0,nt,1),e.fillRect(r,0,1,nt),e.fillRect(r+31,0,1,nt),e.fillRect(r,31,nt,1),e.fillStyle="#ffffff55",e.fillRect(r+5,6,2,12))}let t=new ps(i);return t.magFilter=kt,t.minFilter=pn,t.anisotropy=4,t.colorSpace=bt,{solid:new Kt({map:t,vertexColors:!0}),glass:new Kt({map:t,vertexColors:!0,transparent:!0,opacity:.38,depthWrite:!1,side:Ut})}}var Im=[{n:[1,0,0],p:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.8},{n:[-1,0,0],p:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.68},{n:[0,1,0],p:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1},{n:[0,-1,0],p:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5},{n:[0,0,1],p:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.88},{n:[0,0,-1],p:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.74}];function ch(i,e,t,n=!1){let s=[],r=[],a=[],o=[],l=[];for(let h=e*8;h<Math.min(96,e*8+8);h++)for(let f=t*8;f<Math.min(96,t*8+8);f++)for(let p=0;p<30;p++){let m=i.get(h,p,f);if(!(!Xi(m)||m===8!==n))for(let x of Im){let g=i.get(h+x.n[0],p+x.n[1],f+x.n[2]);if(Xi(g)&&!(g===8&&m!==8))continue;let d=s.length/3,u=(m===1||m===10)&&x.n[1]!==1?2:m,w=(u*nt+1)/(nt*tl),T=(u*nt+nt-1)/(nt*tl);for(let b=0;b<4;b++){let P=x.p[b];s.push(h+P[0],p+P[1],f+P[2]),r.push(...x.n),a.push(b===0||b===3?w:T,b<2?.01:.99),o.push(x.shade,x.shade,x.shade)}l.push(d,d+1,d+2,d,d+2,d+3)}}let c=new Jt;return c.setAttribute("position",new Mt(s,3)),c.setAttribute("normal",new Mt(r,3)),c.setAttribute("uv",new Mt(a,2)),c.setAttribute("color",new Mt(o,3)),c.setIndex(l),c.computeBoundingSphere(),c}var Pm=i=>new Kt({color:i});function Us(i,e=.5){let t=new Map;return(n,s,r,a,o,l,c,h=!1)=>{let f=a+":"+h;if(!t.has(f)){let m=Pm(a);h&&(m.emissive=new Fe(a),m.emissiveIntensity=.7),t.set(f,m)}let p=new dt(new Vt(n,s,r),t.get(f));return p.position.set(o-e,l,c-e),i.add(p),p}}function nl(i,e={}){let t=new wt,n=Us(t),s=12225366,r=7426105,a=16116174;if(i===12)for(let o=0;o<4;o++)n(1,(o+1)*.25,.25,s,.5,(o+1)*.125,(o+.5)*.25),n(.98,.035,.23,14661245,.5,(o+1)*.25+.008,(o+.5)*.25);if(i===13){let o=new wt,l=Us(o,0);o.position.set(-.5,0,-.5),l(1,1.92,.12,s,.5,.96,.06);for(let c of[.11,.89])l(.09,1.84,.14,r,c,.96,.06);for(let c of[.12,1.02,1.81])l(.85,.08,.14,r,.5,c,.06);for(let c of[.3,.65])l(.2,.47,.015,11064528,c,1.39,-.01);l(.08,.09,.1,16241522,.83,.92,-.03),e.open&&(o.rotation.y=-Math.PI/2,o.position.x+=.12),t.add(o)}if(i===14){for(let[o,l]of[[.5,.5]])n(.2,1.35,.2,s,o,.675,l),n(.25,.08,.25,a,o,1.36,l);for(let o of[.43,.93])n(1,.13,.1,s,.5,o,.5),n(.1,.13,1,s,.5,o,.5)}if(i===15){n(.9,.18,.94,r,.5,.18,.5),n(.87,.17,.9,a,.5,.36,.5),n(.88,.08,.59,14182785,.5,.49,.64),n(.67,.1,.24,16777197,.5,.51,.2),n(.9,.65,.07,s,.5,.325,.04);for(let o of[.12,.88])for(let l of[.14,.86])n(.1,.22,.1,s,o,.11,l)}if(i===16){n(.96,.15,.96,s,.5,.76,.5);for(let o of[.15,.85])for(let l of[.15,.85])n(.11,.7,.11,r,o,.35,l);n(.23,.02,.23,a,.5,.85,.5),n(.11,.12,.11,8630437,.7,.91,.38)}if(i===17){for(let o of[.2,.8])for(let l of[.2,.8])n(.11,.47,.11,r,o,.235,l);n(.72,.13,.72,9221280,.5,.48,.5);for(let o of[.2,.8])n(.1,.75,.1,s,o,.79,.8);n(.69,.28,.08,9221280,.5,1,.8)}if(i===18){n(.85,.67,.79,s,.5,.37,.5),n(.88,.14,.82,13409375,.5,.76,.5);for(let o of[.15,.85])n(.08,.8,.84,r,o,.4,.5);n(.12,.16,.05,16374128,.5,.58,.07)}if(i===19){n(1,1,1,8095112,.5,.5,.5);for(let o of[.16,.52,.85])n(.99,.045,1.01,5463910,.5,o,.5);if(n(.61,.38,.025,1780020,.5,.38,-.014),n(.58,.15,.025,1780020,.5,.82,-.014),e.job?.remaining>0){for(let o=0;o<3;o++)n(.13,.16+o%2*.12,.035,o%2?16765783:16745018,.3+o*.19,.3+o%2*.06,-.035);n(.35,.08,.035,16769927,.5,.23,-.036)}else e.job&&n(.38,.13,.035,10218428,.5,.35,-.035)}if(i===20){n(.42,.1,.42,r,.5,.05,.5),n(.1,1.1,.1,r,.5,.6,.5),n(.42,.38,.42,e.lit===!1?7633260:16766837,.5,1.24,.5,e.lit!==!1),n(.5,.08,.5,r,.5,1.45,.5);for(let o of[.3,.7])for(let l of[.3,.7])n(.04,.4,.04,r,o,1.24,l)}if(i===21){n(1,.72,.86,s,.5,.36,.5),n(1,.12,1,r,.5,.8,.5);for(let o of[.07,.93])n(.09,1.8,.09,r,o,.9,.92);for(let o=0;o<5;o++)n(.2,.13,1,o%2?a:4627578,.1+o*.2,1.81,.5);n(.8,.28,.08,2843990,.5,1.45,.9),n(.22,.16,.25,15314251,.23,.92,.35),n(.22,.2,.25,14121329,.55,.94,.35),n(.2,.17,.25,8566888,.81,.93,.4)}if(i===22||i===23){let o=new Kt({color:_e[i].color,transparent:i===22,opacity:i===22?.7:1,emissive:i===23?13055245:0,emissiveIntensity:.5}),l=new dt(new Vt(.99,.8,.99),o);l.position.y=.4,t.add(l);for(let c=0;c<3;c++)n(.17,.012,.07,i===22?11662587:16765792,.2+c*.25,.81,.23+c%2*.4,i===23)}if(i===37||i===38){let o=e.stage||0,l=.16+o*.19;for(let[c,h]of[[.25,.25],[.7,.25],[.25,.7],[.7,.7]])n(.045,l,.045,7252817,c,l/2,h),n(.24,.07,.07,o===3&&i===37?15254882:7847524,c,l*.7,h),n(.07,.06,.25,9617768,c,l*.45,h),o===3&&n(i===37?.11:.12,i===37?.2:.18,.11,i===37?14795116:15769677,c,i===37?l:.08,h)}if(i===54){n(1.15,.12,1.75,s,.5,.12,.5);for(let o of[-.1,1.1])n(.12,.43,1.9,r,o,.31,.5);for(let o of[-.4,1.4])n(1.2,.38,.12,s,.5,.29,o);n(1.1,.12,.25,a,.5,.4,.5),n(.08,.08,2,15120247,-.28,.47,.6)}if(i===55){for(let o of[.12,.4,.7,.94])n(.1,.065,.95,s,o,.035,.5);for(let o of[.18,.82])n(1,.07,.08,12306892,.5,.09,o)}if(i===56){n(.94,.18,1.05,5465200,.5,.2,.5);for(let o of[.05,.95])n(.1,.65,1.05,10137269,o,.49,.5);for(let o of[0,1])n(.9,.65,.1,11452354,.5,.49,o);for(let o of[0,1])for(let l of[.22,.78])n(.16,.23,.23,3425104,o,.11,l)}if(i===57){let o=e.powered?16770187:11565893;n(1,.035,.09,o,.5,.03,.5,e.powered),n(.09,.035,1,o,.5,.03,.5,e.powered),n(.16,.06,.16,o,.5,.045,.5)}if(i===58&&(n(.55,.16,.55,7243141,.5,.08,.5),n(.09,.42,.09,s,.5,.32,e.on?.66:.34),n(.17,.13,.17,e.on?10936177:15517048,.5,.58,e.on?.66:.34)),i===59){n(1,.8,1,7965572,.5,.4,.5),n(.96,.8,.12,s,.5,.42,.02);for(let o of[.13,.87])n(.08,.78,1.02,11452594,o,.41,.5)}if(i===63&&(n(.2,.2,1,r,.5,.5,.5),n(.85,.85,.13,s,.5,.5,.02)),i===60){n(.95,.7,.95,5001835,.5,.35,.5),n(1,.15,1,9730756,.5,.76,.5),n(.5,.08,.65,16771504,.5,.89,.5),n(.05,.12,.67,15589538,.5,.92,.5);for(let o of[.12,.88])n(.12,.15,.12,7662294,o,.85,.12,!0)}return t.rotation.y=(e.rot||0)*Math.PI/2,t}function hh(i){if(i==="capybara"){let l=new wt,c=Us(l,0);c(.86,.61,1.38,11108440,0,.61,.1),c(.65,.57,.69,11963489,0,.87,-.66),c(.62,.35,.28,12950381,0,.74,-1.06);for(let h of[-.24,.24])c(.16,.17,.14,9924679,h,1.18,-.62),c(.055,.07,.045,3157803,h,.94,-1.08),c(.04,.025,.03,16777215,h,.97,-1.105);for(let h of[-.28,.28])for(let f of[-.37,.49])c(.18,.34,.22,9859148,h,.17,f),c(.2,.07,.27,7362623,h,.045,f-.03);return c(.11,.06,.025,7493697,0,.74,-1.21),l}let e=new wt,t=Us(e,0),n=i==="pig",s=i==="ox",r=i==="sheep",a=n?15311536:s?9529161:16050643,o=n?13401490:6311490;t(n?.7:.87,n?.5:.65,n?1:1.3,a,0,n?.58:.88,0),t(.5,.47,.48,a,0,n?.65:1.05,-.7),t(.36,.21,.16,n?14123413:12625291,0,n?.54:.93,-.96);for(let l of[-.28,.28])t(.2,.12,.19,a,l,n?.91:1.3,-.68),t(.055,.07,.08,2503745,l*.72,n?.73:1.15,-.96);for(let l of[-.25,.25])for(let c of[-.37,.37])t(.15,n?.36:.61,.16,o,l,n?.18:.3,c),t(.16,.12,.17,4209462,l,.065,c);if(i==="cow"&&(t(.18,.29,.56,5592659,-.443,.92,.03),t(.27,.05,.38,5592659,.2,1.218,-.2),t(.29,.18,.26,14525347,0,.48,.35)),s){for(let l of[-.29,.29])t(.11,.27,.11,15128492,l,1.4,-.64),t(.16,.1,.1,15128492,l*1.16,1.48,-.64);t(.36,.3,.23,6178361,0,1.27,-.5)}if(r)for(let l of[-.34,.34])for(let c of[-.35,.25])t(.28,.28,.36,16774620,l,1.03,c);return t(.08,n?.15:.4,.09,o,0,n?.67:.77,n?.56:.71),e}function Ns(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose(),t.material&&e.add(t.material)});for(let t of e)t.dispose()}function uh(i){let e=new wt,t=Us(e,0),n=i==="farmer"?6658414:6454943;t(.58,.73,.35,n,0,.96,0),t(.47,.48,.43,14066548,0,1.59,0),t(.71,.1,.6,i==="farmer"?14268777:10202546,0,1.86,0);for(let s of[-.14,.14])t(.2,.6,.22,4872540,s,.31,0),t(.07,.06,.035,2635842,s,1.64,-.23);for(let s of[-.39,.39])t(.17,.68,.2,n,s,1.02,0);return e}function Gt(i){let e="#"+_e[i].color.toString(16).padStart(6,"0"),t=(s,r,a,o,l)=>`<rect x="${s}" y="${r}" width="${a}" height="${o}" fill="${l}"/>`,n="";if(i<12||_e[i].cube)n=`<path d="M4 9L16 3 28 9 16 15Z" fill="${e}"/><path d="M4 9L16 15V29L4 23Z" fill="${e}"/><path d="M16 15L28 9V23L16 29Z" fill="${e}"/><path d="M16 15L28 9V23L16 29Z" fill="#000" opacity=".2"/>`;else if(i===12){for(let s=0;s<4;s++)n+=t(3+s*6,23-s*5,6,6+s*5,e);n+=t(3,29,24,2,"#795639")}else if(i===13)n=t(7,2,18,29,e)+t(10,5,12,9,"#a4d7d1")+t(10,18,12,10,"#735237")+t(20,16,3,3,"#ffe586");else if(i===14)n=t(3,4,5,26,e)+t(24,4,5,26,e)+t(5,9,22,4,e)+t(5,21,22,4,e);else if(i===15)n=t(3,6,4,24,"#875836")+t(25,15,4,15,"#875836")+t(7,13,19,10,e)+t(7,10,7,5,"#fff8dc")+t(5,23,23,3,"#875836");else if(i===16)n=t(2,10,28,6,e)+t(5,16,4,14,"#88603e")+t(23,16,4,14,"#88603e")+t(12,6,8,4,"#dbe8c3");else if(i===17)n=t(6,2,20,12,e)+t(6,14,4,15,"#9d764e")+t(22,14,4,15,"#9d764e")+t(5,17,22,5,e);else if(i===18)n=t(3,7,26,21,e)+t(3,13,26,3,"#805835")+t(14,12,5,9,"#ffdc7f");else if(i===19)n=t(3,3,26,26,e)+t(8,7,16,4,"#243643")+t(8,16,16,10,"#243643")+t(11,21,10,4,"#ffb153")+t(16,17,4,5,"#ffda7e");else if(i===20)n=t(13,13,6,16,"#805e49")+t(9,28,14,3,"#805e49")+t(7,4,18,15,e)+t(5,2,22,4,"#805e49");else if(i===21){n=t(4,18,24,12,"#bd8c54")+t(4,8,3,20,"#815b3a")+t(25,8,3,20,"#815b3a");for(let s=0;s<6;s++)n+=t(1+s*5,4,5,8,s%2?"#f5e9ce":e)}else if(i>=24&&i<=26||i===30)n=t(6,12,20,17,"#91a5af")+t(9,15,14,11,i===24?"#405763":e)+t(6,6,3,7,"#bbcbd0")+t(23,6,3,7,"#bbcbd0")+t(8,4,16,3,"#bbcbd0");else if(i>=27&&i<=29)n=t(5,9,20,17,e)+t(2,6,7,5,e)+t(24,6,6,5,e)+t(7,14,4,4,"#263744")+t(20,14,4,4,"#263744")+t(11,21,12,7,i===28?"#cf8294":"#d1af8d"),i===29&&(n+=t(4,2,4,7,"#e3d3af")+t(25,2,4,7,"#e3d3af")),i===27&&(n+=t(12,9,7,5,"#5a574e"));else if(i===31){n=t(14,4,3,27,e);for(let s=5;s<23;s+=6)n+=t(7,s,7,4,e)+t(17,s-2,7,4,e)}else i===32&&(n=t(4,12,24,14,e)+t(8,8,16,4,e)+t(10,12,3,6,"#f6d097")+t(19,12,3,6,"#f6d097"));if(i===53&&(n=t(5,13,22,14,e)+t(2,8,15,14,"#bd966b")+t(1,5,4,5,"#96714e")+t(12,5,4,5,"#96714e")+t(4,12,3,3,"#2b352d")+t(2,20,10,4,"#d1ab7f")+t(7,26,4,5,"#795b42")+t(22,26,4,5,"#795b42")),i===62&&(n=t(4,6,24,20,e)+t(10,12,12,16,"#88786a")+t(11,15,3,3,"#263744")+t(19,15,3,3,"#263744")),[34,35].includes(i)){for(let s=0;s<5;s++)n+=t(5+s*7%20,6+s*5%19,4,5,e);n+=t(14,4,3,8,"#73b569")}if(i===36&&(n='<path d="M10 8H24L13 30H9Z" fill="#f0a04d"/>'+t(12,1,4,8,"#69a354")+t(18,3,8,4,"#86ba61")),[43,44,45,46].includes(i)&&(n='<path d="M4 18L10 8H25L29 19 22 25H6Z" fill="'+e+'"/>'+t(11,10,10,3,"#ffffff55")),i>=47&&i<=52&&(n=t(13,8,4,23,"#ab7b50"),i<=49?n+=t(4,4,24,5,e)+t(3,7,5,7,e):i===50?n+=t(4,4,12,14,e):i===51?n+=t(8,3,15,13,e):n+=t(4,4,20,5,e)+t(4,9,5,6,e)),i===54&&(n=t(3,15,26,11,e)+t(1,12,5,8,"#85603e")+t(26,12,5,8,"#85603e")+t(8,19,17,3,"#e4ba78")+t(3,28,26,2,"#80d4e1")),i===55){for(let s=4;s<30;s+=6)n+=t(3,s,26,3,"#ab835a");n+=t(7,2,3,29,e)+t(22,2,3,29,e)}return i===56&&(n=t(3,7,26,17,e)+t(6,10,20,8,"#526873")+t(6,24,6,6,"#303f4a")+t(22,24,6,6,"#303f4a")),i===57&&(n=t(2,15,28,5,e)+t(14,3,5,28,e)+t(11,12,11,11,"#f6d67f")),i===58&&(n=t(5,22,23,8,"#829791")+t(14,7,5,18,"#ad8052")+t(11,3,11,9,e)),i===59&&(n=t(2,12,18,18,e)+t(18,16,9,7,"#bd9159")+t(26,11,5,16,"#e0bd83")),i===60&&(n=t(4,15,24,15,"#595574")+t(2,12,28,5,e)+t(7,4,18,9,"#f6e6b7")+t(15,4,2,10,"#bb9c61")),(i===64||i===65)&&(n='<path d="M8 7C15 2 29 5 28 16S18 29 9 26 1 13 8 7Z" fill="'+e+'" stroke="#f5d6a8" stroke-width="2"/><path d="M10 11L21 16M9 17L17 21" stroke="'+(i===65?"#67452e":"#f4b7a2")+'" stroke-width="3" stroke-linecap="round"/>'),n||(n=t(6,6,20,20,e)),`<svg class="craft-item-icon" viewBox="0 0 32 32" aria-hidden="true" shape-rendering="crispEdges">${n}</svg>`}function fh({getWorld:i,open:e,close:t,refresh:n,message:s,persist:r}){let a="Todos",o=null,l=()=>`<nav class="craft-tabs" aria-label="Categorias">${["Todos","Constru\xE7\xE3o","Casa","Animais","Fazenda","Minera\xE7\xE3o","Transportes","Mecanismos","Baldes"].map(m=>`<button data-tab="${m}" class="${a===m?"selected":""}">${m}</button>`).join("")}</nav>`,c=()=>ln.filter(m=>a==="Todos"||(_e[m].group||"Constru\xE7\xE3o")===a);function h(m,x){let g=i();if(o=x,m==="bag")return{title:"Mochila \xB7 construa seu mundo",body:`<p>Selecione um item e use <b>Colocar</b>. Baldes, sementes, enxada, alimentos e ve\xEDculos usam <b>Usar</b>. Picaretas usam <b>Quebrar</b>. As escadas ficam voltadas na dire\xE7\xE3o em que voc\xEA olha.</p>${l()}<div class="craft-grid">${c().map(d=>`<button data-select="${d}" class="${d===g.selected?"selected":""}">${Gt(d)}<strong>${_e[d].name}</strong><small>${g.creative&&!_e[d].tool?"Ilimitado":g.inventory[d]+" na mochila"}</small></button>`).join("")}</div>`};if(m==="market")return{title:"Marketplace Integro",body:`<div class="craft-wallet">${Gt(31)}<b>${g.coins} <small>integros</small></b><span>Compre, construa e cuide dos animais.</span></div><p>Venda materiais coletados, p\xE3o e leite para ganhar integros. Alimentar um animal com trigo rende 5 integros a cada 30 s. ${g.creative?"Volte ao modo Explorar para vender.":""}</p>${l()}<div class="craft-shop">${c().filter(d=>_e[d].price||g.inventory[d]>0).map(d=>{let u=_e[d];return`<article>${Gt(d)}<h3>${u.name}</h3><small>Voc\xEA tem ${g.inventory[d]}</small><div>${u.price?`<button data-buy="${d}" ${g.coins<u.price?"disabled":""}>Comprar ${u.pack||1} \xB7 ${u.price} \u2B21</button>`:""}<button data-sell="${d}" ${!g.inventory[d]||g.creative?"disabled":""}>Vender 1 \xB7 ${Bs(d)} \u2B21</button></div></article>`}).join("")}</div><p class="craft-note">\u2B21 = integros do IntegroCraft. Ao vender leite, voc\xEA recebe o balde vazio de volta.</p>`};if(m==="furnace"){let d=g.meta(x),u=Qt.find(w=>w.id===d.job?.id);return{title:"Fornalha",body:`<p>Coloque ingredientes e madeira como combust\xEDvel. A fornalha trabalha enquanto voc\xEA est\xE1 neste jogo.</p>${u?`<div class="craft-smelt">${Gt(u.out)}<h3>${u.name}</h3><progress id="craftSmeltBar" max="${u.seconds}" value="${u.seconds-d.job.remaining}"></progress><p id="craftSmeltStatus">${d.job.remaining>0?"Preparando \xB7 "+Math.ceil(d.job.remaining)+" s":"Pronto para retirar!"}</p><button id="craftSmeltCollect" data-collect ${d.job.remaining>0?"disabled":""}>Retirar ${u.count} ${_e[u.out].name}</button></div>`:`<div class="craft-recipes">${Qt.map(w=>`<article class="craft-recipe">${Gt(w.out)}<h3>${w.name}</h3><p>${Object.entries(w.cost).map(([T,b])=>`${b} ${_e[T].name} (voc\xEA tem ${g.inventory[T]})`).join("<br>")}<br>${w.seconds} segundos \u2192 ${w.count} unidades</p><button data-smelt="${w.id}" ${Object.entries(w.cost).some(([T,b])=>g.inventory[T]<b)?"disabled":""}>Preparar</button></article>`).join("")}</div>`}`}}if(m==="chest"){let d=g.meta(x);return{title:"Ba\xFA \xB7 seus materiais guardados",body:`<p>Guarde itens neste ba\xFA e retire quando quiser. Esvazie-o antes de quebrar.</p><div class="craft-storage">${ln.filter(u=>g.inventory[u]||d.stored?.[u]||0).map(u=>`<div>${Gt(u)}<span><b>${_e[u].name}</b><small>Mochila ${g.inventory[u]} \xB7 Ba\xFA ${d.stored?.[u]||0}</small></span><button data-put="${u}" ${g.inventory[u]?"":"disabled"}>Guardar 1</button><button data-take="${u}" ${d.stored?.[u]?"":"disabled"}>Retirar 1</button></div>`).join("")}</div>`}}if(m==="journey")return{title:"Seu mundo cresceu!",body:`<p class="craft-update">96 \xD7 96 blocos \xB7 fazenda, vila, minas e capivaras</p><p>Escolha um destino para visitar. Suas constru\xE7\xF5es continuam no vale original. Os pontos coloridos aparecem no minimapa.</p><div class="craft-destinations">${[{name:"Vale e sua casa",text:"Volte para construir e cuidar da fazenda.",id:"home",icon:15},{name:"Vila Integro",text:"Trocas com Lia e Bento, fornalha, encantamentos e trilhos.",id:"village",icon:21},{name:"Minas de cristal",text:"Leve picaretas. Carv\xE3o, ferro, ouro e cristais aguardam.",id:"mine",icon:49},{name:"Rio das capivaras",text:"Leve trigo ou cenoura! Observe os animais e pilote um barco.",id:"river",icon:53}].map(d=>`<article>${Gt(d.icon)}<h3>${d.name}</h3><p>${d.text}</p><button data-travel="${d.id}">Visitar</button></article>`).join("")}</div><p><b>Fazenda:</b> enxada \u2192 terra preparada \u2192 sementes \u2192 Usar para colher. Crescimento: 2 minutos perto da \xE1gua, 3 minutos sem irriga\xE7\xE3o.</p><p><b>Filhotes:</b> alimente dois adultos da mesma esp\xE9cie pr\xF3ximos. O filhote chega em 30 segundos e cresce em 4 minutos de jogo.</p><p><b>HUD:</b> \u2665 vida \xB7 \u25CF alimento \xB7 \u2726 experi\xEAncia. Coma p\xE3o, cenoura ou leite com Usar; dormir recupera a vida.</p>`};if(m==="villager"){let d=g.villagers[x];return d?{title:d.name,body:`<p>Troque os recursos que voc\xEA coletou. As trocas rendem experi\xEAncia.</p><div class="craft-recipes">${Fa[d.trade].map((u,w)=>`<article class="craft-recipe">${Gt(u.out)}<h3>${u.name}</h3><p>${Object.entries(u.cost).map(([T,b])=>`${_e[T].name}: ${g.inventory[T]}/${b}`).join("<br>")}</p><button data-trade="${w}" ${g.creative||Object.entries(u.cost).some(([T,b])=>g.inventory[T]<b)?"disabled":""}>Trocar</button></article>`).join("")}</div>${g.creative?"<p>Volte ao modo Explorar para fazer trocas.</p>":""}`}:null}return m==="enchant"?{title:"Mesa de encantamentos",body:`<p>Cada melhoria custa <b>20 XP + 1 cristal</b> e recupera a durabilidade. Voc\xEA tem ${g.xp} XP e ${g.inventory[46]} cristais.</p><p>N\xEDvel 1: menos toques para minerar. N\xEDvel 2: carv\xE3o e cristais em dobro. N\xEDvel 3: minera\xE7\xE3o ainda mais r\xE1pida.</p><div class="craft-recipes">${[47,48,49].map(d=>`<article class="craft-recipe">${Gt(d)}<h3>${_e[d].name}</h3><p>N\xEDvel ${g.enchants[d]||0}/3 \xB7 ${g.inventory[d]} na mochila</p><button data-enchant="${d}" ${!g.inventory[d]||g.enchants[d]>=3||g.xp<20||g.inventory[46]<1?"disabled":""}>Encantar</button></article>`).join("")}</div>`}:null}function f(m,x){m.querySelectorAll("[data-travel]").forEach(g=>g.onclick=()=>{let d=i(),u=g.dataset.travel;if(u==="home")d.home();else{let[w,T]={village:[67,25],mine:[90,35],river:[75,59]}[u],b=!1;for(let P=0;P<8&&!b;P++)for(let R=-P;R<=P&&!b;R++)for(let D=-P;D<=P&&!b;D++){let I=w+R+.5,M=T+D+.5,v=d.surface(Math.floor(I),Math.floor(M))+1.04;v>=5.4&&!d.collides(I,v,M)&&(Object.assign(d.player,{x:I,y:v,z:M,vy:0,pitch:-.1,yaw:0}),d.riding=null,b=!0)}}r(),t(),n(),s("Explore! Abra a mochila para escolher seus itens.")}),m.querySelectorAll("[data-trade]").forEach(g=>g.onclick=()=>{s(i().trade(o,+g.dataset.trade)?"Troca conclu\xEDda! +2 XP":"Aproxime-se do morador e confira seus itens."),r(),n()}),m.querySelectorAll("[data-enchant]").forEach(g=>g.onclick=()=>{s(i().enchant(o,+g.dataset.enchant)?"Picareta encantada e reparada!":"Confira XP, cristais e dist\xE2ncia da mesa."),r(),n()}),m.querySelectorAll("[data-tab]").forEach(g=>g.onclick=()=>{a=g.dataset.tab,n()});for(let g of["buy","sell","put","take","smelt","collect"])m.querySelectorAll(`[data-${g}]`).forEach(d=>d.onclick=()=>{let u=i(),w=+d.dataset[g],T=g==="buy"?u.buy(w):g==="sell"?u.sell(w):g==="put"||g==="take"?u.chest(o,w,1,g):g==="smelt"?u.smelt(o,d.dataset.smelt):u.collectSmelt(o);s(T?g==="buy"?"Compra feita! O item est\xE1 na mochila.":g==="sell"?"Venda conclu\xEDda!":g==="smelt"?"Fornalha acesa!":"Pronto!":"N\xE3o foi poss\xEDvel. Confira os itens dispon\xEDveis."),r(),n()})}function p(){let m=i();if(!o||typeof o!="object")return;let x=m.meta(o).job;if(!x)return;let g=Qt.find(T=>T.id===x.id),d=document.getElementById("craftSmeltBar"),u=document.getElementById("craftSmeltStatus"),w=document.getElementById("craftSmeltCollect");d&&(d.value=g.seconds-x.remaining),u&&(u.textContent=x.remaining>0?"Preparando \xB7 "+Math.ceil(x.remaining)+" s":"Pronto para retirar!"),w&&(w.disabled=x.remaining>0)}return{content:h,bind:f,tick:p}}function dh({onExit:i,registerAdapter:e,createLegacyWorld:t}){let n=C=>document.getElementById(C),s=n("craftApp"),r=n("craftCanvas"),a="integrocraft-world-v1",o=!1,l,c,h,f,p,m,x,g,d,u,w=!1,T=!1,b=0,P=0,R=null,D=null,I=null,M=[],v=new Map,L=[],V=[],q=[],Y=new Set,Q={x:0,z:0},J=null,ae=null,W=null,ce=0,pe=0,Ae=0,ze=0,$e=0,Qe=0,Ge=!0,j=null;try{j=JSON.parse(window.BoxStorage.getItem(a)||"null")}catch{Ge=!1}let ee=null,ge=()=>{for(let C of[M,L,V,q])for(let z of C)h.remove(z),Ns(z);M=[],L=[],V=[],q=[];for(let C=0;C<96/8;C++)for(let z=0;z<96/8;z++)Re(C,z);xe(),_(),F(),De()},Le=e("craft",{scene:()=>h,active:()=>o&&w,state:()=>l?{...l.player,zone:"world"}:null,enter(C={}){ee||(A(),ee=l,l=gl(t()),this.applyWorld(C),ge(),X(),we("Sala compartilhada: blocos b\xE1sicos. Capivaras e novas aventuras no mundo individual."))},applyWorld(C){if(ee){for(let[z,k]of Object.entries(C)){let[O,ne,E]=z.split(",").map(Number);[O,ne,E,k].every(Number.isInteger)&&O>=0&&O<48&&E>=0&&E<48&&ne>0&&ne<30&&k>=0&&k<=10&&l.get(O,ne,E)!==k&&l.set(O,ne,E,k)}S(),l.collides(l.player.x,l.player.y,l.player.z)&&l.home()}},leave(){ee&&(l=ee,ee=null,ge(),X(),A())},persist:()=>A()}),Ee=fh({getWorld:()=>l,open:Z,close:X,refresh:()=>{_(),$(),S()},message:we,persist:A}),Ve=C=>"#"+_e[C].color.toString(16).padStart(6,"0"),_t=()=>new Promise(C=>requestAnimationFrame(()=>requestAnimationFrame(C)));function A(){if(!(!l||ee))try{j?.version===1&&!window.BoxStorage.getItem(a+"-backup")&&window.BoxStorage.setItem(a+"-backup",JSON.stringify(j)),window.BoxStorage.setItem(a,JSON.stringify(l.serialize())),Ge=!0}catch{Ge=!1}}function we(C){n("craftToast").textContent=C,n("craftToast").classList.add("visible"),Qe=performance.now()+3e3}function De(){Y.clear(),Q={x:0,z:0},ce=pe=0,J=ae=null,W=null,n("craftStick").style.transform="translate(0px,0px)"}function Re(C,z){let k=C+","+z;for(let ne of v.get(k)||[])h.remove(ne),ne.geometry.dispose();let O=[];for(let ne of[!1,!0]){let E=ch(l,C,z,ne);if(!E.getAttribute("position").count){E.dispose();continue}let K=new dt(E,ne?p.glass:p.solid);h.add(K),O.push(K)}v.set(k,O)}async function ye(C){if(!w){T=!0;try{C?.(.1,"Gerando o terreno"),l=new yn(j),c=new La({canvas:r,antialias:!0,powerPreference:"high-performance"}),c.setPixelRatio(Math.min(devicePixelRatio||1,2)),c.outputColorSpace=bt,c.setClearColor(10869229),h=new fs,h.background=new Fe(10869229),h.fog=new us(10869229,38,105),f=new At(72,1,.05,180),f.rotation.order="YXZ",p=lh(),d=new Ms(14087167,6714698,2),h.add(d),x=new Ss(16772816,1.3),x.position.set(-20,40,20),h.add(x);for(let E=0;E<96/8;E++){for(let K=0;K<96/8;K++)Re(E,K);C?.(.15+(E+1)/(96/8)*.65,"Construindo blocos e \xE1rvores"),await _t()}let z=new dt(new Gn(230,230),new _s({color:4699855,transparent:!0,opacity:.62,shininess:90,side:Ut}));z.rotation.x=-Math.PI/2,z.position.set(96/2,5.12,96/2),h.add(z),m=z;let k=new dt(new Gn(230,230),new Kt({color:12434313}));k.rotation.x=-Math.PI/2,k.position.set(96/2,-.1,96/2),h.add(k);let O=new ds(new xs(new Vt(1.012,1.012,1.012)),new Ni({color:16777215,depthTest:!0}));h.add(O),u=O,xe();let ne=new Kt({color:16777215,transparent:!0,opacity:.82});for(let E=0;E<10;E++){let K=new wt;for(let ie=0;ie<3;ie++){let ue=new dt(new Vt(5+ie,1.5,3+ie),ne);ue.position.set(ie*3,0,ie%2),K.add(ue)}K.position.set(E*13%70-10,25+E%3*2,E*23%70-10),h.add(K)}w=!0,Ke(),_(),F(),C?.(1,"Mundo pronto")}catch(z){throw c?.dispose(),c=null,z}finally{T=!1}}}function Ke(){if(!c)return;let C=s.clientWidth,z=s.clientHeight;!C||!z||(c.setSize(C,z,!1),f.aspect=C/z,f.fov=C/z<1?100:78,f.updateProjectionMatrix())}function xe(){for(let C of M)h.remove(C),Ns(C);M=[];for(let[C,z]of l.features){if(!qi(z))continue;let k=C%96,O=Math.floor(C/96)%96,ne=Math.floor(C/9216),E=nl(z,l.meta({x:k,y:ne,z:O}));E.position.set(k+.5,ne,O+.5),E.traverse(K=>{K.isMesh&&(K.userData.voxel={x:k,y:ne,z:O})}),h.add(E),M.push(E)}if(L.length!==l.animals.length){for(let C of L)h.remove(C),Ns(C);L=l.animals.map((C,z)=>{let k=hh(C.type);return k.traverse(O=>{O.isMesh&&(O.userData.animal=z)}),h.add(k),k})}if(V.length!==l.vehicles.length){for(let C of V)h.remove(C),Ns(C);V=l.vehicles.map((C,z)=>{let k=nl(C.type);return k.traverse(O=>{O.isMesh&&(O.userData.vehicle=z)}),h.add(k),k})}q.length||(q=l.villagers.map((C,z)=>{let k=uh(C.trade);return k.position.set(C.x,C.y,C.z),k.traverse(O=>{O.isMesh&&(O.userData.villager=z)}),h.add(k),k})),l.lifeDirty=!1}function Ne(){if(!w||R)return;f.updateMatrixWorld();let C=new Es;C.far=6.5,C.setFromCamera(new Xe,f);let z=[...v.values()].flat().concat(M,L,V.filter((ue,re)=>l.riding!==re),q);(l.selected===24||l.selected===54)&&z.push(m);let k=C.intersectObjects(z,!0)[0];if(!k){I=null,u.visible=!1,n("craftTarget").textContent="";return}if(k.object.userData.vehicle!==void 0){I={vehicle:k.object.userData.vehicle},u.visible=!1,n("craftTarget").textContent="Usar para embarcar";return}if(k.object.userData.villager!==void 0){I={villager:k.object.userData.villager},u.visible=!1,n("craftTarget").textContent=l.villagers[I.villager].name+" \xB7 Usar para trocar";return}if(k.object.userData.animal!==void 0){I={animal:k.object.userData.animal},u.visible=!1;let ue=l.animals[I.animal];n("craftTarget").textContent={cow:"Vaca",pig:"Porco",ox:"Boi",sheep:"Ovelha",capybara:"Capivara"}[ue.type]+(l.baby(ue)?" \xB7 filhote":"")+" \xB7 Usar: cuidar \xB7 Ca\xE7ar: carne";return}let O=k.face.normal.clone().transformDirection(k.object.matrixWorld),ne=k.point.clone().addScaledVector(O,-.002),E=k.point.clone().addScaledVector(O,.002),K=k.object.userData.voxel;if(k.object===m){I={x:Math.floor(k.point.x),y:Math.floor(5.12),z:Math.floor(k.point.z),lake:!0},u.visible=!1,n("craftTarget").textContent="Lago \xB7 Usar para encher o balde";return}if(I=K?{...K}:{x:Math.floor(ne.x),y:Math.floor(ne.y),z:Math.floor(ne.z)},K){let ue=Math.abs(O.y)>.5?"y":Math.abs(O.x)>.5?"x":"z";I.place={...K},I.place[ue]+=Math.sign(O[ue])*(ue==="y"&&O.y>0?Math.ceil(Dn(l.get(K.x,K.y,K.z))):1)}else I.place={x:Math.floor(E.x),y:Math.floor(E.y),z:Math.floor(E.z)};let ie=l.get(I.x,I.y,I.z);u.visible=!!ie,u.scale.set(1,ie>=12?Dn(ie):1,1),u.position.set(I.x+.5,I.y+(ie>=12?Dn(ie):1)/2,I.z+.5),n("craftTarget").textContent=ie?_e[ie].name+([13,15,16,17,18,19,20,21,37,38,58,60].includes(ie)?" \xB7 Usar":""):""}function ot(C){if(!(R||!o||!l)){if(Ne(),ee){let z=C==="mine"?I:I?.place,k=C==="mine"?0:l.selected;if(!z||z.animal!==void 0||z.lake||k>10){we("Na sala, use os blocos b\xE1sicos. Novos itens no mundo individual.");return}if(C!=="mine"&&l.overlaps(z.x,z.y,z.z)){we("Afaste-se para colocar o bloco.");return}window.BoxMultiplayer?.edit({...z,block:k});return}if(C==="mine"&&I?.animal!==void 0){we(l.huntAnimal(I.animal)),I=null,S(),A(),_(),Ne();return}if([54,56].includes(l.selected)&&C==="place"){we(l.launchVehicle(I)?"Transporte pronto! Mire nele e toque em Usar para embarcar.":"Coloque o barco na \xE1gua ou o carrinho sobre os trilhos."),S(),A(),_();return}if(!I||I.animal!==void 0||I.vehicle!==void 0||I.villager!==void 0||I.lake){we("Mire em um bloco mais pr\xF3ximo.");return}if(C==="mine"){let z=l.mine(I);we(l.notice||(z?(l.creative?"Item removido: ":"+1 ")+_e[z].name:"Esvazie o ba\xFA ou retire a produ\xE7\xE3o antes de quebrar. \xC1gua e lava precisam de balde; a rocha base \xE9 protegida.")),l.notice=null}else[24,25,26].includes(l.selected)?we(l.bucket(I)?"Balde usado!":"Mire no l\xEDquido para recolher ou em um ch\xE3o livre para despejar."):we(l.place(I.place)?_e[l.selected].animal?"Animal chegou!":"Item colocado!":"Confira a mochila e mire em um espa\xE7o livre com ch\xE3o. Portas precisam de dois blocos de altura.");S(),_(),F(),A(),Ne()}}function rt(){if(R||!o||!l)return;if(ee){we("Capivaras, fazenda e novos itens est\xE3o no mundo individual.");return}if(Ne(),l.riding!==null){we(l.dismount()?"Voc\xEA desembarcou.":l.notice||"Aproxime-se da margem."),l.notice=null,A();return}if(I?.animal!==void 0){we(l.useAnimal(I.animal)),A(),_();return}if(l.eat()){we(l.notice),l.notice=null,A(),_();return}if(I?.vehicle!==void 0){we(l.board(I.vehicle)?"Use o direcional para pilotar. Toque em Usar para sair.":"Aproxime-se para embarcar.");return}if(I?.villager!==void 0){Z("villager",I.villager);return}if([54,56].includes(l.selected)){we(l.launchVehicle(I)?"Transporte pronto! Mire nele e toque em Usar para embarcar.":"Mire na \xE1gua para o barco ou nos trilhos para o carrinho."),S(),A(),_();return}if(I&&[37,38].includes(l.get(I.x,I.y,I.z))){we(l.use(I)),S(),A(),_();return}if(I&&I.animal===void 0&&[34,35,52].includes(l.selected)){we(l.farm(I)||"Mire no ch\xE3o para preparar ou plantar."),S(),A(),_();return}if([24,25,26].includes(l.selected)){we(l.bucket(I)?"Pronto! Confira os baldes na mochila.":"Mire na \xE1gua/lava para recolher ou no ch\xE3o livre para despejar."),S(),A(),_();return}if(!I||I.lake){we("Mire em uma porta, m\xF3vel, fornalha ou animal.");return}let C=l.get(I.x,I.y,I.z);if(C===18){Z("chest",I);return}if(C===19){Z("furnace",I);return}if(C===21){Z("market");return}if(C===60){Z("enchant",I);return}we(l.use(I)||"Este bloco serve para construir."),S(),A(),_()}function S(){for(let C of l.dirty){let[z,k]=C.split(",").map(Number);Re(z,k)}l.dirty.clear(),l.lifeDirty&&xe()}function _(){if(!l)return;let C=l.player;n("craftBiome").textContent=ee?"SALA COMPARTILHADA":l.biome(),n("craftCoords").textContent=`X ${Math.floor(C.x)} \xB7 Y ${Math.floor(C.y)} \xB7 Z ${Math.floor(C.z)}`,n("craftModeLabel").textContent=l.creative?"CRIATIVO \xB7 VOO LIVRE":"EXPLORAR",n("craftJumpText").textContent=l.creative?"Subir":l.inWater()?"Nadar":"Pular",n("craftDown").hidden=!l.creative,n("craftCoins").textContent=l.coins+" integros",n("craftVitals").textContent=l.creative?"\u221E CRIATIVO":`\u2665 ${Math.ceil(l.vitals.health)} \xB7 \u25CF ${Math.ceil(l.vitals.hunger)} \xB7 \u2726 ${l.xp} XP`,n("craftMineText").textContent=I?.animal!==void 0?"Ca\xE7ar":"Quebrar";let z=_e[l.selected];n("craftTool").textContent=z?.durability&&l.inventory[l.selected]?`${z.name} \xB7 ${l.toolWear[l.selected]}/${z.durability}${l.enchants[l.selected]?" \xB7 \u2726 "+l.enchants[l.selected]:""}`:l.riding!==null?"Pilotando \xB7 Usar para desembarcar":"";let k=[l.selected,l.creative,...Object.values(l.inventory)].join(":");n("craftHotbar").dataset.signature!==k&&(n("craftHotbar").dataset.signature=k,n("craftHotbar").innerHTML=[1,3,4,8,9,l.selected>0&&![1,3,4,8,9].includes(l.selected)?l.selected:2].map(O=>`<button data-block="${O}" class="${O===l.selected?"selected":""}" title="${_e[O].name}" aria-label="Selecionar ${_e[O].name}"><em>${O<=9?O:""}</em>${Gt(O)}<b>${l.creative&&!_e[O].tool?"\u221E":l.inventory[O]}</b></button>`).join(""),n("craftHotbar").querySelectorAll("[data-block]").forEach(O=>O.onclick=()=>{l.selected=+O.dataset.block,_(),we(_e[l.selected].name),A()}))}function F(){if(!l)return;let C=n("craftMap").getContext("2d");C.fillStyle="#44879a",C.fillRect(0,0,144,144);for(let k=0;k<96;k++)for(let O=0;O<96;O++){let ne=l.surface(k,O);C.fillStyle=ne<5?"#62b3c5":Ve(l.get(k,ne,O)),C.fillRect(k*144/96,O*144/96,144/96,144/96)}for(let[k,O,ne]of[[67,24,"#ffed91"],[83,35,"#74ffff"],[77,65,"#e0b98b"]])C.fillStyle=ne,C.fillRect(k*144/96-2,O*144/96-2,4,4);let z=l.player;C.save(),C.translate(z.x*144/96,z.z*144/96),C.rotate(-z.yaw),C.fillStyle="#fff3a5",C.strokeStyle="#193944",C.lineWidth=1.5,C.beginPath(),C.moveTo(0,-7),C.lineTo(-4,5),C.lineTo(4,5),C.closePath(),C.fill(),C.stroke(),C.restore()}function $(){let C="",z="";R==="intro"&&(C="Seu mundo come\xE7a com um bloco",z='<p>Explore o vale, colete materiais e construa o que imaginar. H\xE1 uma vila, minas, montanhas e um rio com capivaras! Prepare a terra, plante, crie filhotes e pilote barcos e carrinhos.</p><ul><li>Arraste o cen\xE1rio para olhar. Ande pelo direcional ou WASD.</li><li>Mire no bloco e use <b>Quebrar</b> para coletar. Escolha um material na mochila e use <b>Colocar</b> para construir.</li><li>Voc\xEA ganhou m\xF3veis, sementes, enxada, picareta e transportes para come\xE7ar. Abra o mapa para visitar a vila, as minas e as capivaras. Use <b>Marketplace</b> para comprar e vender com integros.</li><li>Abra <b>Fabricar</b> para transformar madeira, pedra e areia.</li><li>Na engrenagem, ative o modo Criativo para voar e usar blocos ilimitados.</li></ul><button data-action="resume">Explorar meu mundo</button>'),R==="recipes"&&(C="Bancada de fabrica\xE7\xE3o",z=`<p>Transforme o que voc\xEA coletou em novos materiais para construir.</p><div class="craft-recipes">${di.map(O=>`<article class="craft-recipe">${Gt(O.out)}<h3>${O.count} ${O.name}</h3><p>${Object.entries(O.cost).map(([ne,E])=>`${E} ${_e[ne].name.toLowerCase()} \xB7 voc\xEA tem ${l.inventory[ne]}`).join("<br>")}</p><button data-recipe="${O.id}" ${Object.entries(O.cost).some(([ne,E])=>l.inventory[ne]<E)?"disabled":""}>Fabricar</button></article>`).join("")}</div><p class="craft-note">No modo Criativo voc\xEA pode colocar qualquer bloco sem gastar materiais.</p>`),R==="menu"&&(C="Meu mundo",z=`<div class="craft-goals"><div>Coletar 20 blocos<b>${l.stats.mined}/20</b>${l.stats.mined>=20?"\u2605 Conclu\xEDdo":"Continue explorando"}</div><div>Construir com 30 blocos<b>${l.stats.placed}/30</b>${l.stats.placed>=30?"\u2605 Conclu\xEDdo":"Construa sua casa"}</div><div>Fabricar 12 blocos<b>${l.stats.crafted}/12</b>${l.stats.crafted>=12?"\u2605 Conclu\xEDdo":"Use a bancada"}</div></div><div class="craft-menu-grid"><button data-action="resume">Continuar</button><button data-action="mode">${l.creative?"Voltar a Explorar":"Ativar Criativo e voar"}</button><button data-action="home">Voltar ao in\xEDcio do mundo</button><button data-action="market">Marketplace \xB7 comprar e vender</button><button data-action="journey">Mapa e novas aventuras</button><button data-action="help">Como jogar</button><button data-action="fullscreen">Tela cheia</button><button data-action="exit">Menu de jogos</button></div><p class="craft-note">${Ge?"Mundo, constru\xE7\xF5es e mochila salvos neste navegador.":"N\xE3o foi poss\xEDvel salvar; seu mundo est\xE1 apenas nesta sess\xE3o."} Dia e noite mudam enquanto voc\xEA joga.</p>`),R==="help"&&(C="Como construir",z='<ul><li><b>WASD / setas ou direcional:</b> andar. Arraste a tela para olhar em qualquer dire\xE7\xE3o.</li><li><b>Espa\xE7o / Pular:</b> subir um bloco. Na \xE1gua, segure Nadar e avance em dire\xE7\xE3o \xE0 margem para sair do lago.</li><li><b>E / Quebrar:</b> coletar o bloco que est\xE1 na mira. <b>Q / Colocar:</b> colocar o bloco selecionado.</li><li><b>R / Usar:</b> abrir portas e ba\xFAs, operar a fornalha, dormir, sentar e cuidar dos animais. Escadas sobem automaticamente; a dire\xE7\xE3o acompanha seu olhar ao colocar.</li><li><b>Baldes:</b> selecione e toque em Usar mirando no lago ou em um l\xEDquido. Para despejar, mire no ch\xE3o livre. \xC1gua e lava lado a lado viram pedra. Os l\xEDquidos escorrem para baixo e pelos lados. Recolher a fonte faz a corrente secar.</li><li><b>Animais:</b> mire em um adulto e toque em <b>Ca\xE7ar</b> (E) para obter carne, sem sangue. A carne vai \xE0 mochila; asse com madeira na fornalha e selecione a carne assada + Usar para comer. Use trigo para alimentar. Para tirar leite da vaca, selecione o balde vazio. Cerque o espa\xE7o para criar um curral.</li><li><b>Fazenda:</b> use a enxada no ch\xE3o; selecione sementes e use na terra preparada. Colha com Usar ap\xF3s 2 a 3 minutos. Alimente dois adultos pr\xF3ximos para ter filhotes.</li><li><b>Minera\xE7\xE3o:</b> madeira extrai carv\xE3o; pedra extrai ferro; ferro extrai ouro e cristal. Toque em Quebrar at\xE9 concluir. Fundir min\xE9rios usa carv\xE3o na fornalha.</li><li><b>Transporte:</b> use o barco na \xE1gua e o carrinho nos trilhos. Mire no ve\xEDculo e toque em Usar para entrar; toque novamente para sair.</li><li><b>Energia:</b> conecte alavancas, fios, portas, lumin\xE1rias e pist\xF5es. Toque em Usar na alavanca. O pist\xE3o empurra um bloco; desligue antes de remover.</li><li><b>1 a 9 e 0:</b> escolher material. <b>B:</b> mochila. <b>F:</b> fabricar. <b>Esc:</b> pausar.</li><li><b>Criativo:</b> ative na engrenagem. Espa\xE7o sobe; Shift desce. No celular use Subir e Descer.</li><li>No modo Explorar, construir gasta materiais; quebrar devolve um bloco \xE0 mochila. A rocha base fica protegida.</li><li>O mapa mostra o terreno e sua posi\xE7\xE3o. O mundo tem 96 \xD7 96 blocos de terreno e espa\xE7o para construir at\xE9 30 blocos de altura.</li></ul><button data-action="resume">Voltar ao jogo</button>');let k=Ee.content(R,D);k&&(C=k.title,z=k.body),n("craftTitle").textContent=C,n("craftBody").innerHTML=z,Ee.bind(n("craftBody"),R),n("craftBody").querySelectorAll("[data-select]").forEach(O=>O.onclick=()=>{l.selected=+O.dataset.select,_(),X(),A()}),n("craftBody").querySelectorAll("[data-recipe]").forEach(O=>O.onclick=()=>{l.craft(O.dataset.recipe)&&(A(),_(),$(),we("Material fabricado!"))}),n("craftBody").querySelectorAll("[data-action]").forEach(O=>O.onclick=()=>{let ne=O.dataset.action;if(ne==="resume"&&X(),ne==="help"&&Z("help"),ne==="market"&&Z("market"),ne==="journey"&&Z("journey"),ne==="mode"&&(l.creative=ee?!0:!l.creative,l.player.vy=0,A(),_(),X(),we(l.creative?"Criativo: blocos ilimitados e voo livre.":"Explorar: colete blocos para construir.")),ne==="home"&&(l.home(),X(),we("De volta ao in\xEDcio do mundo.")),ne==="exit"&&(se(),i()),ne==="fullscreen")try{(document.fullscreenElement?document.exitFullscreen():s.requestFullscreen())?.catch(()=>we("Gire o celular para o modo paisagem."))}catch{we("Gire o celular para o modo paisagem.")}})}function Z(C,z=null){if(l){if(ee&&!["bag","menu","help"].includes(C)){we("Este recurso est\xE1 dispon\xEDvel no mundo individual.");return}De(),R=C,D=z,n("craftSheet").hidden=!1,$(),n("craftClose").focus(),A()}}function X(){R=null,n("craftSheet").hidden=!0,De(),P=performance.now(),r.focus()}function Te(C){if(!o||!w)return;b=requestAnimationFrame(Te);let z=Math.min(.05,(C-P)/1e3||0);P=C,!document.hidden&&!ee&&l.tickLife(z,!R),Ee.tick(),l.notice&&(we(l.notice),l.notice=null),l.lifeDirty&&S(),!R&&!document.hidden&&l.update(z,{x:Q.x+(Y.has("d")||Y.has("arrowright")?1:0)-(Y.has("a")||Y.has("arrowleft")?1:0),z:Q.z+(Y.has("s")||Y.has("arrowdown")?1:0)-(Y.has("w")||Y.has("arrowup")?1:0),sprint:Y.has("shift")&&!l.creative,up:ce+(Y.has(" ")?1:0)-pe-(Y.has("shift")&&l.creative?1:0)}),document.hidden||(ze+=z,ze>3&&(A(),ze=0));let k=l.player;f.position.set(k.x,k.y+(l.seated?.85:1.58),k.z),f.rotation.set(k.pitch,k.yaw,0,"YXZ");let O=.65+.35*Math.cos(l.time/120);h.background.setRGB(.28+O*.36,.39+O*.4,.48+O*.4),h.fog.color.copy(h.background),d.intensity=1.1+O,x.intensity=.4+O,m.position.y=5.12+Math.sin(l.time*.5)*.025;for(let ne=0;ne<L.length;ne++){let E=l.animals[ne],K=L[ne];K.position.set(E.x,E.y,E.z),K.rotation.y=E.yaw,K.scale.setScalar(l.baby(E)?.55:1),K.position.y+=E.type==="capybara"&&E.y<5.12?Math.sin(l.time*2+ne)*.035:0}for(let ne=0;ne<V.length;ne++){let E=l.vehicles[ne];V[ne].position.set(E.x,E.y,E.z),V[ne].rotation.y=E.yaw}for(let ne=0;ne<q.length;ne++){let E=l.villagers[ne];q[ne].rotation.y=Math.atan2(k.x-E.x,k.z-E.z)}$e+=z,Ae+=z,$e>.08&&(Ne(),_(),$e=0),Ae>.7&&(F(),Ae=0),Le.tick(z),c.render(h,f),C>Qe&&n("craftToast").classList.remove("visible")}let le=n("craftJoystick"),ve=C=>{let z=le.getBoundingClientRect(),k=z.width*.3,O=C.clientX-z.left-z.width/2,ne=C.clientY-z.top-z.height/2,E=Math.hypot(O,ne),K=E>k?k/E:1;Q={x:O*K/k,z:ne*K/k},n("craftStick").style.transform=`translate(${O*K}px,${ne*K}px)`};le.addEventListener("pointerdown",C=>{R||(C.preventDefault(),J=C.pointerId,le.setPointerCapture(J),ve(C))}),le.addEventListener("pointermove",C=>{C.pointerId===J&&ve(C)});for(let C of["pointerup","pointercancel","lostpointercapture"])le.addEventListener(C,z=>{z.pointerId===J&&(J=null,Q={x:0,z:0},n("craftStick").style.transform="translate(0px,0px)")});r.addEventListener("pointerdown",C=>{R||!l||ae!==null||(C.preventDefault(),ae=C.pointerId,W={x:C.clientX,y:C.clientY},r.setPointerCapture(ae),r.focus())}),r.addEventListener("pointermove",C=>{C.pointerId!==ae||!W||(C.preventDefault(),l.player.yaw-=(C.clientX-W.x)*.004,l.player.pitch=Math.max(-1.4,Math.min(1.4,l.player.pitch-(C.clientY-W.y)*.004)),W={x:C.clientX,y:C.clientY})});for(let C of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(C,z=>{z.pointerId===ae&&(ae=null,W=null)});r.addEventListener("contextmenu",C=>C.preventDefault());function be(C,z){C.addEventListener("pointerdown",k=>{R||!l||(k.preventDefault(),C.setPointerCapture(k.pointerId),z>0?(ce=1,l.jump()):pe=1)});for(let k of["pointerup","pointercancel","lostpointercapture"])C.addEventListener(k,()=>{z>0?ce=0:pe=0})}be(n("craftJump"),1),be(n("craftDown"),-1),n("craftMap").onclick=()=>Z("journey"),n("craftJourney").onclick=()=>Z("journey"),n("craftUse").onclick=rt,n("craftMarket").onclick=()=>Z("market"),n("craftMine").onclick=()=>ot("mine"),n("craftPlace").onclick=()=>ot("place"),n("craftBag").onclick=()=>Z("bag"),n("craftRecipes").onclick=()=>Z("recipes"),n("craftMenu").onclick=()=>Z("menu"),n("craftClose").onclick=X,n("craftExit").onclick=()=>{se(),i()},document.addEventListener("keydown",C=>{if(!o||T)return;let z=C.key.toLowerCase();if(z==="escape"){C.preventDefault(),R?X():Z("menu");return}if(R){if(z==="tab"){let k=[...n("craftSheet").querySelectorAll("button:not([disabled])")];C.shiftKey&&document.activeElement===k[0]?(C.preventDefault(),k.at(-1)?.focus()):!C.shiftKey&&document.activeElement===k.at(-1)&&(C.preventDefault(),k[0]?.focus())}return}(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","q","b","f","r","m"].includes(z)||/^\d$/.test(z))&&(C.preventDefault(),Y.add(z),C.repeat||(z===" "&&l.jump(),z==="e"&&ot("mine"),z==="q"&&ot("place"),z==="r"&&rt(),z==="m"&&Z("market"),z==="b"&&Z("bag"),z==="f"&&Z("recipes"),/^\d$/.test(z)&&(l.selected=+z||(l.selected>10?l.selected:10),_())))}),document.addEventListener("keyup",C=>Y.delete(C.key.toLowerCase())),document.addEventListener("visibilitychange",()=>{document.hidden&&o&&!R&&Z("menu")}),window.addEventListener("blur",()=>{o&&!R&&Z("menu")}),window.addEventListener("pagehide",A),window.addEventListener("resize",()=>{o&&Ke()});function se(){o&&(o=!1,cancelAnimationFrame(b),De(),A(),s.hidden=!0,document.body.classList.remove("craft-playing"))}return window.BoxCraft.stop=se,window.IntegroCraft={getState:()=>({active:o,initialized:w,panel:R,target:I?{...I}:null,...l?l.serialize():{}})},{async show(C){o=!0,s.hidden=!1,document.body.classList.add("craft-playing"),await ye(C),Ke(),Z(j?"menu":"intro"),P=performance.now(),b=requestAnimationFrame(Te)},hide:se,help(){Z("help")},get active(){return o}}}window.BoxCraft={mountCraft:dh};})();
