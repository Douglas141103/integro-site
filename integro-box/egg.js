(()=>{var co={astronautHelmet:{name:"Capacete espacial",slot:"head",price:6500,desc:"C\xFApula branca, visor azul e antena."},pirateHat:{name:"Chap\xE9u de capit\xE3o",slot:"head",price:2800,desc:"Tric\xF3rnio com emblema dourado e pena."},wizardHat:{name:"Chap\xE9u de mago",slot:"head",price:9500,desc:"Cone estrelado com uma lua na ponta."},ninjaBand:{name:"Faixa do vento",slot:"head",price:2200,desc:"Faixa vermelha com duas fitas longas."},sharkHood:{name:"Capuz tubar\xE3o",slot:"head",price:14e3,desc:"Barbatana e dentinhos de fantasia."},mushroomCap:{name:"Chap\xE9u cogumelo",slot:"head",price:4800,desc:"Um cogumelo vermelho com pintinhas claras."},flowerCrown:{name:"Coroa do jardim",slot:"head",price:12e3,desc:"Flores, folhas e p\xE9talas coloridas."},antlers:{name:"Galhadas da floresta",slot:"head",price:28e3,desc:"Galhos dourados com folhas de jade."},clockworkCrown:{name:"Coroa do tempo",slot:"head",price:3e5,desc:"Um rel\xF3gio rodeado de engrenagens reais em 3D."},samuraiHelm:{name:"Elmo do drag\xE3o",slot:"head",price:85e3,desc:"Placas rubras e um grande crescente dourado."},monocle:{name:"Mon\xF3culo elegante",slot:"face",price:3500,desc:"Lente redonda com corrente dourada."},heartGlasses:{name:"\xD3culos de cora\xE7\xE3o",slot:"face",price:6e3,desc:"Duas lentes cor-de-rosa em formato de cora\xE7\xE3o."},snowGoggles:{name:"\xD3culos de nevasca",slot:"face",price:18e3,desc:"Lentes espelhadas, prote\xE7\xE3o branca e flocos."},foxMask:{name:"M\xE1scara de raposa",slot:"face",price:32e3,desc:"Orelhas pontudas e focinho de porcelana."},dragonMask:{name:"M\xE1scara de drag\xE3o",slot:"face",price:68e3,desc:"Chifres verdes e focinho com detalhes dourados."},owlMask:{name:"M\xE1scara da coruja",slot:"face",price:55e3,desc:"Dois grandes aros e um pequeno bico."},rainbowVisor:{name:"Visor arco-\xEDris",slot:"face",price:42e3,desc:"Sete faixas coloridas em uma moldura azul."},divingMask:{name:"M\xE1scara de mergulho",slot:"face",price:11e3,desc:"Lentes duplas e um snorkel amarelo."},timeMask:{name:"M\xE1scara dos segundos",slot:"face",price:25e4,desc:"Lente-rel\xF3gio, ponteiros e engrenagem lateral."},galaxyMask:{name:"M\xE1scara gal\xE1ctica",slot:"face",price:38e4,desc:"Constela\xE7\xF5es e planetas em um visor violeta."},snailPack:{name:"Mochila caracol",slot:"back",price:8e3,desc:"Casco em espiral com duas antenas fofas."},turtleShell:{name:"Casco de aventureiro",slot:"back",price:16e3,desc:"Placas verdes e contorno de areia."},guitar:{name:"Viol\xE3o viajante",slot:"back",price:24e3,desc:"Cordas, bra\xE7o e caixa de madeira."},surfboard:{name:"Prancha de ver\xE3o",slot:"back",price:36e3,desc:"Prancha turquesa com faixa laranja e quilha."},balloonPack:{name:"Bal\xF5es de festa",slot:"back",price:48e3,desc:"Cinco bal\xF5es presos \xE0 mochila. Sem voo."},butterflyWings:{name:"Asas do jardim",slot:"back",price:72e3,desc:"Quatro asas arredondadas com pintas douradas."},mechanicalWings:{name:"Asas mec\xE2nicas",slot:"back",price:11e4,desc:"Placas articuladas, engrenagens e parafusos."},dragonWings:{name:"Asas de drag\xE3o",slot:"back",price:18e4,desc:"Membranas verdes e hastes douradas."},hourglassPack:{name:"Ampulheta eterna",slot:"back",price:35e4,desc:"Duas c\xE2maras de cristal e areia luminosa."},galaxyPortal:{name:"Portal das gal\xE1xias",slot:"back",price:5e5,desc:"An\xE9is orbitais, estrelas e uma nebulosa central."}},Mt={bubble:{name:"Bolha protetora",kind:"power",price:450,max:10,duration:8,color:8514303,icon:"shield",desc:"Protege das capturas e dos perigos da pista durante 8 segundos."},frost:{name:"Pulso congelante",kind:"power",price:750,max:10,duration:6,color:11390975,icon:"snow",desc:"Reduz pela metade a velocidade do guardi\xE3o por 6 segundos."},doubleJump:{name:"Salto duplo",kind:"power",price:600,max:10,duration:25,color:14986751,icon:"jump",desc:"Permite um segundo pulo no ar durante 25 segundos."},endurance:{name:"F\xF4lego infinito",kind:"power",price:900,max:10,duration:20,color:9105861,icon:"wind",desc:"Mant\xE9m o f\xF4lego cheio enquanto voc\xEA dispara, por 20 segundos."},rush:{name:"Boost de velocidade",kind:"boost",price:1200,max:10,duration:20,color:16758131,icon:"speed",desc:"Aumenta sua velocidade em 25% por 20 segundos."},trainingBoost:{name:"Boost de treino",kind:"boost",price:2200,max:10,duration:60,color:16769419,icon:"dumbbell",desc:"A esteira rende o dobro de treino por 60 segundos. Ative sobre a esteira."},hatchBoost:{name:"Boost de incuba\xE7\xE3o",kind:"boost",price:1800,max:10,duration:60,color:16755915,icon:"egg",desc:"Os ovos do curral chocam duas vezes mais r\xE1pido por 60 segundos."},incomeBoost:{name:"Boost do curral",kind:"boost",price:4500,max:10,duration:90,color:12251787,icon:"coin",desc:"As criaturas produzem o dobro de integros durante 90 segundos de jogo."}};var Qc={shield:"M12 2 21 5v6c0 6-9 11-9 11S3 17 3 11V5Z M8 12l3 3 5-6",snow:"M12 2v20M3 7l18 10M3 17 21 7M9 4l3 3 3-3M9 20l3-3 3 3",jump:"M7 21V5m-4 4 4-4 4 4M17 17V2m-4 4 4-4 4 4",wind:"M2 7h15c5 0 5-5 1-5M2 12h18M2 17h12c5 0 5 5 1 5",speed:"M3 18a9 9 0 1 1 18 0M12 14l5-6M7 21h10",dumbbell:"M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8",egg:"M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z M7 13l3-2 3 3 4-2",coin:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v10m-3-9h5m-5 8h5"},yd=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Qc[Mt[i]?.icon]||Qc.shield}"/></svg>`;function eh({stage:i,getGame:e,blocked:t,use:n,open:s}){let r=document.createElement("div");r.className="egg-ability-dock",r.setAttribute("role","group"),r.setAttribute("aria-label","Poder e boost equipados"),i.append(r);let o={};for(let c of["power","boost"]){let a=document.createElement("button");a.type="button",a.className="egg-ability-button",a.onclick=()=>{let u=e(),h=u.save.abilitySlots[c];u.canUseAbility(h)?n(h):u.save.activeAbilities[c]||s()},o[c]=a,r.append(a)}function l(){let c=e();r.hidden=!!c.raceMode;for(let a of["power","boost"]){let u=c.save.abilitySlots[a],h=Mt[u],d=c.save.activeAbilities[a],f=o[a],g=c.save.abilityStock[u],v=d?Math.ceil(d.remaining):0,m=[u,g,v].join(":");f.dataset.signature!==m&&(f.dataset.signature=m,f.innerHTML=yd(u)+`<span>${d?v+"s":"\xD7"+g}</span><small>${a==="power"?"Q":"B"}</small>`,f.title=h.name+(d?" \xB7 "+v+" s":g?" \xB7 "+g+" cargas":" \xB7 Abrir mochila"),f.setAttribute("aria-label",f.title),f.style.setProperty("--ability-color","#"+h.color.toString(16))),f.disabled=t()||!!d||g>0&&!c.canUseAbility(u),f.classList.toggle("active",!!d),f.style.setProperty("--ability-progress",d?String(d.remaining/h.duration*100)+"%":"100%")}}return{update:l,dock:r}}function El(i,e){let t=i.save;return Object.entries(Mt).map(([n,s])=>{let r=t.abilityStock[n],o=t.abilitySlots[s.kind]===n;return`<article class="egg-upgrade egg-ability-card"><img class="egg-item-icon" src="${e[n]||""}" alt="${s.name}"><small>${s.kind==="power"?"PODER":"BOOST"} \xB7 ${s.duration} s \xB7 ${r}/${s.max} cargas</small><h3>${s.name}</h3><p>${s.desc}</p><button class="egg-primary" data-buy="${n}" ${!i.inBase()||r>=s.max||t.coins<s.price?"disabled":""}>${r>=s.max?"Mochila cheia":s.price.toLocaleString("pt-BR")+" integros"}</button><button class="egg-secondary" data-select-ability="${n}" ${!r||t.activeAbilities[s.kind]?"disabled":""}>${o?"No atalho "+(s.kind==="power"?"Q":"B"):"Colocar no HUD"}</button><button class="egg-secondary" data-use-ability="${n}" ${i.canUseAbility(n)?"":"disabled"}>Usar agora</button></article>`}).join("")}var Uh=0,lc=1,Nh=2;var cc=1,ha=2,Fn=3,Jn=0,Vt=1,On=2,ni=0,Ni=1,hc=2,uc=3,dc=4,Fh=5,pi=100,Oh=101,Bh=102,zh=103,kh=104,Vh=200,Hh=201,Gh=202,Wh=203,Oo=204,Bo=205,Xh=206,qh=207,$h=208,Yh=209,Zh=210,Jh=211,jh=212,Kh=213,Qh=214,ua=0,da=1,fa=2,Fi=3,pa=4,ma=5,ga=6,xa=7,fc=0,eu=1,tu=2,ii=0,nu=1,iu=2,su=3,ru=4,ou=5,au=6,Yr=7,ec="attached",lu="detached",pc=300,Yi=301,Zi=302,va=303,_a=304,Zr=306,zo=1e3,fi=1001,ko=1002,kt=1003,cu=1004;var Jr=1005;var ln=1006,ya=1007;var Bn=1008;var En=1009,mc=1010,gc=1011,zs=1012,Ma=1013,yi=1014,Tn=1015,ks=1016,ba=1017,Sa=1018,Vs=1020,xc=35902,vc=35899,_c=1021,yc=1022,hn=1023,bs=1026,Hs=1027,jr=1028,wa=1029,Mc=1030,Ea=1031;var Ta=1033,Kr=33776,Qr=33777,eo=33778,to=33779,Aa=35840,Ca=35841,Ra=35842,Ia=35843,Pa=36196,La=37492,Da=37496,Ua=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,za=37813,ka=37814,Va=37815,Ha=37816,Ga=37817,Wa=37818,Xa=37819,qa=37820,$a=37821,Ya=36492,Za=36494,Ja=36495,ja=36283,Ka=36284,Qa=36285,el=36286,hu=2200,uu=2201,du=2202,fr=2300,Vo=2301,Fo=2302,Li=2400,Di=2401,pr=2402,tl=2500,fu=2501;var pu=3200,mu=3201;var nl=0,gu=1,si="",Ct="srgb",Oi="srgb-linear",mr="linear",ut="srgb";var Pi=7680;var tc=519,xu=512,vu=513,_u=514,bc=515,yu=516,Mu=517,bu=518,Su=519,Ho=35044;var Sc="300 es",Sn=2e3,gr=2001;var Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,cr=Math.PI/180,Ss=180/Math.PI;function pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function wc(i,e){return(i%e+e)%e}function Md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bd(i,e,t){return i!==e?(t-i)/(e-i):0}function hr(i,e,t){return(1-t)*i+t*e}function Sd(i,e,t,n){return hr(i,e,1-Math.exp(-t*n))}function wd(i,e=1){return e-Math.abs(wc(i,e*2)-e)}function Ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Td(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ad(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cd(i,e){return i+Math.random()*(e-i)}function Rd(i){return i*(.5-Math.random())}function Id(i){i!==void 0&&(th=i);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pd(i){return i*cr}function Ld(i){return i*Ss}function Dd(i){return(i&i-1)===0&&i!==0}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fd(i,e,t,n,s){let r=Math.cos,o=Math.sin,l=r(t/2),c=o(t/2),a=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(l*u,c*h,c*d,l*a);break;case"YZY":i.set(c*d,l*u,c*h,l*a);break;case"ZXZ":i.set(c*h,c*d,l*u,l*a);break;case"XZX":i.set(l*u,c*g,c*f,l*a);break;case"YXY":i.set(c*f,l*u,c*g,l*a);break;case"ZYZ":i.set(c*g,c*f,l*u,l*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xt={DEG2RAD:cr,RAD2DEG:Ss,generateUUID:pn,clamp:st,euclideanModulo:wc,mapLinear:Md,inverseLerp:bd,lerp:hr,damp:Sd,pingpong:wd,smoothstep:Ed,smootherstep:Td,randInt:Ad,randFloat:Cd,randFloatSpread:Rd,seededRandom:Id,degToRad:Pd,radToDeg:Ld,isPowerOfTwo:Dd,ceilPowerOfTwo:Ud,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Fd,normalize:ht,denormalize:bn},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],a=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(l===0){e[t+0]=c,e[t+1]=a,e[t+2]=u,e[t+3]=h;return}if(l===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||a!==f||u!==g){let m=1-l,p=c*d+a*f+u*g+h*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),C=Math.atan2(I,p*M);m=Math.sin(m*C)/I,l=Math.sin(l*C)/I}let _=l*M;if(c=c*m+d*_,a=a*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-l){let I=1/Math.sqrt(c*c+a*a+u*u+h*h);c*=I,a*=I,u*=I,h*=I}}e[t]=c,e[t+1]=a,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],a=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=l*g+u*h+c*f-a*d,e[t+1]=c*g+u*d+a*h-l*f,e[t+2]=a*g+u*f+l*d-c*h,e[t+3]=u*g-l*h-c*d-a*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,a=l(n/2),u=l(s/2),h=l(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+a*f*g,this._y=a*f*h-d*u*g,this._z=a*u*g+d*f*h,this._w=a*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+a*f*g,this._y=a*f*h-d*u*g,this._z=a*u*g-d*f*h,this._w=a*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-a*f*g,this._y=a*f*h+d*u*g,this._z=a*u*g+d*f*h,this._w=a*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-a*f*g,this._y=a*f*h+d*u*g,this._z=a*u*g-d*f*h,this._w=a*u*h+d*f*g;break;case"YZX":this._x=d*u*h+a*f*g,this._y=a*f*h+d*u*g,this._z=a*u*g-d*f*h,this._w=a*u*h-d*f*g;break;case"XZY":this._x=d*u*h-a*f*g,this._y=a*f*h-d*u*g,this._z=a*u*g+d*f*h,this._w=a*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],a=t[2],u=t[6],h=t[10],d=n+l+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-a)*f,this._z=(o-s)*f}else if(n>l&&n>h){let f=2*Math.sqrt(1+n-l-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+a)/f}else if(l>h){let f=2*Math.sqrt(1+l-n-h);this._w=(r-a)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-l);this._w=(o-s)/f,this._x=(r+a)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,a=t._z,u=t._w;return this._x=n*u+o*l+s*a-r*c,this._y=s*u+o*c+r*l-n*a,this._z=r*u+o*a+n*c-s*l,this._w=o*u-n*l-s*c-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,l=o*e._w+n*e._x+s*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-l*l;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let a=Math.sqrt(c),u=Math.atan2(a,l),h=Math.sin((1-t)*u)/a,d=Math.sin(t*u)/a;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,a=2*(o*s-l*n),u=2*(l*t-r*s),h=2*(r*n-o*t);return this.x=t+c*a+o*h-l*u,this.y=n+c*u+l*a-r*h,this.z=s+c*h+r*u-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new O,nh=new gt,Ke=class i{constructor(e,t,n,s,r,o,l,c,a){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a)}set(e,t,n,s,r,o,l,c,a){let u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],a=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],y=s[4],_=s[7],I=s[2],C=s[5],N=s[8];return r[0]=o*v+l*M+c*I,r[3]=o*m+l*y+c*C,r[6]=o*p+l*_+c*N,r[1]=a*v+u*M+h*I,r[4]=a*m+u*y+h*C,r[7]=a*p+u*_+h*N,r[2]=d*v+f*M+g*I,r[5]=d*m+f*y+g*C,r[8]=d*p+f*_+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],u=e[8];return t*o*u-t*l*a-n*r*u+n*l*c+s*r*a-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],u=e[8],h=u*o-l*a,d=l*c-u*r,f=a*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*a-u*n)*v,e[2]=(l*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-l*t)*v,e[6]=f*v,e[7]=(n*c-a*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),a=Math.sin(r);return this.set(n*c,n*a,-n*(c*o+a*l)+o+e,-s*a,s*c,-s*(-a*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ke;function Ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){let i=xr("canvas");return i.style.display="block",i}var ih={};function ws(i){i in ih||(ih[i]=!0,console.warn(i))}function Eu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var lt=Od();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Go=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=xr("canvas")),rs.width=e.width,rs.height=e.height;let s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bd=0,Es=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,Rl=new O,Kt=class i extends Pn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=ln,o=Bn,l=hn,c=En,a=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=pn(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=pc;Kt.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,a=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(a+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(a+1)/2,_=(f+1)/2,I=(p+1)/2,C=(u+d)/4,N=(h+v)/4,A=(g+m)/4;return y>_&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=N/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=A/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=N/r,s=A/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((a+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends Pn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Kt(s);this.textures=[];let o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Wo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),uo.subVectors(this.max,tr),os.subVectors(e.a,tr),as.subVectors(e.b,tr),ls.subVectors(e.c,tr),ai.subVectors(as,os),li.subVectors(ls,as),Ai.subVectors(os,ls);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ai.z,Ai.y,ai.z,0,-ai.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!Il(t,os,as,ls,uo)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,os,as,ls,uo))?!1:(fo.crossVectors(ai,li),t=[fo.x,fo.y,fo.z],Il(t,os,as,ls,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,ho=new jn,os=new O,as=new O,ls=new O,ai=new O,li=new O,Ai=new O,tr=new O,uo=new O,fo=new O,Ci=new O;function Il(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let l=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=e.dot(Ci),a=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,a,u),Math.min(c,a,u))>l)return!1}return!0}var kd=new jn,nr=new O,Pl=new O,mi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Pl)),this.expandByPoint(nr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wn=new O,Ll=new O,po=new O,ci=new O,Dl=new O,mo=new O,Ul=new O,_r=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ll.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ll);let r=e.distanceTo(t)*.5,o=-this.direction.dot(po),l=ci.dot(this.direction),c=-ci.dot(po),a=ci.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-l,d=o*l-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*l)+d*(o*h+d+2*c)+a}else d=r,h=Math.max(0,-(o*d+l)),f=-h*h+d*(d+2*c)+a;else d=-r,h=Math.max(0,-(o*d+l)),f=-h*h+d*(d+2*c)+a;else d<=-g?(h=Math.max(0,-(-o*r+l)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+a):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+a):(h=Math.max(0,-(o*r+l)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+a);else d=o>0?-r:r,h=Math.max(0,-(o*d+l)),f=-h*h+d*(d+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ll).addScaledVector(po,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,a=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return a>=0?(n=(e.min.x-d.x)*a,s=(e.max.x-d.x)*a):(n=(e.max.x-d.x)*a,s=(e.min.x-d.x)*a),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(l=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(l=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){Dl.subVectors(t,e),mo.subVectors(n,e),Ul.crossVectors(Dl,mo);let o=this.direction.dot(Ul),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;ci.subVectors(this.origin,e);let c=l*this.direction.dot(mo.crossVectors(ci,mo));if(c<0)return null;let a=l*this.direction.dot(Dl.cross(ci));if(a<0||c+a>o)return null;let u=-l*ci.dot(Ul);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,l,c,a,u,h,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,a,u,h,d,f,g,v,m)}set(e,t,n,s,r,o,l,c,a,u,h,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=l,p[13]=c,p[2]=a,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),a=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=l*u,v=l*h;t[0]=c*u,t[4]=-c*h,t[8]=a,t[1]=f+g*a,t[5]=d-v*a,t[9]=-l*c,t[2]=v-d*a,t[6]=g+f*a,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=a*u,v=a*h;t[0]=d+v*l,t[4]=g*l-f,t[8]=o*a,t[1]=o*h,t[5]=o*u,t[9]=-l,t[2]=f*l-g,t[6]=v+d*l,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=a*u,v=a*h;t[0]=d-v*l,t[4]=-o*h,t[8]=g+f*l,t[1]=f+g*l,t[5]=o*u,t[9]=v-d*l,t[2]=-o*a,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=l*u,v=l*h;t[0]=c*u,t[4]=g*a-f,t[8]=d*a+v,t[1]=c*h,t[5]=v*a+d,t[9]=f*a-g,t[2]=-a,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*a,g=l*c,v=l*a;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-l*u,t[2]=-a*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*c,f=o*a,g=l*c,v=l*a;t[0]=c*u,t[4]=-h,t[8]=a*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=l*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Hd)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),go.crossVectors(on,hi),s[0]=hi.x,s[4]=go.x,s[8]=on.x,s[1]=hi.y,s[5]=go.y,s[9]=on.y,s[2]=hi.z,s[6]=go.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],a=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],_=n[11],I=n[15],C=s[0],N=s[4],A=s[8],b=s[12],S=s[1],U=s[5],V=s[9],Z=s[13],K=s[2],j=s[6],J=s[10],fe=s[14],Q=s[3],be=s[7],Ee=s[11],me=s[15];return r[0]=o*C+l*S+c*K+a*Q,r[4]=o*N+l*U+c*j+a*be,r[8]=o*A+l*V+c*J+a*Ee,r[12]=o*b+l*Z+c*fe+a*me,r[1]=u*C+h*S+d*K+f*Q,r[5]=u*N+h*U+d*j+f*be,r[9]=u*A+h*V+d*J+f*Ee,r[13]=u*b+h*Z+d*fe+f*me,r[2]=g*C+v*S+m*K+p*Q,r[6]=g*N+v*U+m*j+p*be,r[10]=g*A+v*V+m*J+p*Ee,r[14]=g*b+v*Z+m*fe+p*me,r[3]=M*C+y*S+_*K+I*Q,r[7]=M*N+y*U+_*j+I*be,r[11]=M*A+y*V+_*J+I*Ee,r[15]=M*b+y*Z+_*fe+I*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],a=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*a*h-r*l*d+n*a*d+s*l*f-n*c*f)+v*(+t*c*f-t*a*d+r*o*d-s*o*f+s*a*u-r*c*u)+m*(+t*a*h-t*l*f-r*o*h+n*o*f+r*l*u-n*a*u)+p*(-s*l*u-t*c*h+t*l*d+s*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],a=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*a-v*d*a+v*c*f-l*m*f-h*c*p+l*d*p,y=g*d*a-u*m*a-g*c*f+o*m*f+u*c*p-o*d*p,_=u*v*a-g*h*a+g*l*f-o*v*f-u*l*p+o*h*p,I=g*h*c-u*v*c-g*l*d+o*v*d+u*l*m-o*h*m,C=t*M+n*y+s*_+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=M*N,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*N,e[2]=(l*m*r-v*c*r+v*s*a-n*m*a-l*s*p+n*c*p)*N,e[3]=(h*c*r-l*d*r-h*s*a+n*d*a+l*s*f-n*c*f)*N,e[4]=y*N,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*N,e[6]=(g*c*r-o*m*r-g*s*a+t*m*a+o*s*p-t*c*p)*N,e[7]=(o*d*r-u*c*r+u*s*a-t*d*a-o*s*f+t*c*f)*N,e[8]=_*N,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*N,e[10]=(o*v*r-g*l*r+g*n*a-t*v*a-o*n*p+t*l*p)*N,e[11]=(u*l*r-o*h*r-u*n*a+t*h*a+o*n*f-t*l*f)*N,e[12]=I*N,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*N,e[14]=(g*l*s-o*v*s-g*n*c+t*v*c+o*n*m-t*l*m)*N,e[15]=(o*h*s-u*l*s+u*n*c-t*h*c-o*n*d+t*l*d)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,a=r*o,u=r*l;return this.set(a*o+n,a*l-s*c,a*c+s*l,0,a*l+s*c,u*l+n,u*c-s*o,0,a*c-s*l,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,a=r+r,u=o+o,h=l+l,d=r*a,f=r*u,g=r*h,v=o*u,m=o*h,p=l*h,M=c*a,y=c*u,_=c*h,I=n.x,C=n.y,N=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-_)*C,s[5]=(1-(d+p))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+y)*N,s[9]=(m-M)*N,s[10]=(1-(d+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);let a=1/r,u=1/o,h=1/l;return yn.elements[0]*=a,yn.elements[1]*=a,yn.elements[2]*=a,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,o,l=Sn,c=!1){let a=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(l===Sn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(l===gr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=h,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=g,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Sn,c=!1){let a=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(l===Sn)g=-2/(o-r),v=-(o+r)/(o-r);else if(l===gr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=u,a[4]=0,a[8]=0,a[12]=d,a[1]=0,a[5]=h,a[9]=0,a[13]=f,a[2]=0,a[6]=0,a[10]=g,a[14]=v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new O,yn=new je,Vd=new O(0,0,0),Hd=new O(1,1,1),hi=new O,go=new O,on=new O,oh=new je,ah=new gt,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],a=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,a),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,a),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gd=0,lh=new O,hs=new gt,Xn=new je,xo=new O,ir=new O,Wd=new O,Xd=new gt,ch=new O(1,0,0),hh=new O(0,1,0),uh=new O(0,0,1),dh={type:"added"},qd={type:"removed"},us={type:"childadded",child:null},Nl={type:"childremoved",child:null},Bt=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new $t,n=new gt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ir,xo,this.up):Xn.lookAt(xo,ir,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Xn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let a=0,u=c.length;a<u;a++){let h=c[a];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,a=this.material.length;c<a;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),a=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(l){let c=[];for(let a in l){let u=l[a];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new O(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new O,qn=new O,Fl=new O,$n=new O,ds=new O,fs=new O,fh=new O,Ol=new O,Bl=new O,zl=new O,kl=new _t,Vl=new _t,Hl=new _t,Yn=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),qn.subVectors(n,t),Fl.subVectors(e,t);let o=Mn.dot(Mn),l=Mn.dot(qn),c=Mn.dot(Fl),a=qn.dot(qn),u=qn.dot(Fl),h=o*a-l*l;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(a*c-l*u)*d,g=(o*u-l*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(l,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return kl.setScalar(0),Vl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(Vl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),qn.subVectors(e,t),Mn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;ds.subVectors(s,n),fs.subVectors(r,n),Ol.subVectors(e,n);let c=ds.dot(Ol),a=fs.dot(Ol);if(c<=0&&a<=0)return t.copy(n);Bl.subVectors(e,s);let u=ds.dot(Bl),h=fs.dot(Bl);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*a;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ds,o);zl.subVectors(e,r);let f=ds.dot(zl),g=fs.dot(zl);if(g>=0&&f<=g)return t.copy(r);let v=f*a-c*g;if(v<=0&&a>=0&&g<=0)return l=a/(a-g),t.copy(n).addScaledVector(fs,l);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return fh.subVectors(r,s),l=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(fh,l);let p=1/(m+v+d);return o=v*p,l=d*p,t.copy(n).addScaledVector(ds,o).addScaledVector(fs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=wc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gl(o,r,e+1/3),this.g=Gl(o,r,e),this.b=Gl(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return lt.workingToColorSpace(Xt.copy(this),e),Math.round(st(Xt.r*255,0,255))*65536+Math.round(st(Xt.g*255,0,255))*256+Math.round(st(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,a,u=(l+o)/2;if(l===o)c=0,a=0;else{let h=o-l;switch(a=u<=.5?h/(o+l):h/(2-o-l),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=a,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){lt.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(vo);let n=hr(ui.h,vo.h,t),s=hr(ui.s,vo.s,t),r=hr(ui.l,vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Ye;Ye.NAMES=Tu;var $d=0,Dn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Ni,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kn=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new O,_o=new ge,Yd=0,qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}};var Un=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mr=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zd=0,fn=new je,Wl=new Bt,ps=new O,an=new jn,sr=new jn,Ot=new O,Rt=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Mr:Un)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];sr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(an.min,sr.min),an.expandByPoint(Ot),Ot.addVectors(an.max,sr.max),an.expandByPoint(Ot)):(an.expandByPoint(sr.min),an.expandByPoint(sr.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let a=0,u=l.count;a<u;a++)Ot.fromBufferAttribute(l,a),c&&(ps.fromBufferAttribute(e,a),Ot.add(ps)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),l=[],c=[];for(let A=0;A<n.count;A++)l[A]=new O,c[A]=new O;let a=new O,u=new O,h=new O,d=new ge,f=new ge,g=new ge,v=new O,m=new O;function p(A,b,S){a.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(a),h.sub(a),f.sub(d),g.sub(d);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),l[A].add(v),l[b].add(v),l[S].add(v),c[A].add(m),c[b].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let A=0,b=M.length;A<b;++A){let S=M[A],U=S.start,V=S.count;for(let Z=U,K=U+V;Z<K;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let y=new O,_=new O,I=new O,C=new O;function N(A){I.fromBufferAttribute(s,A),C.copy(I);let b=l[A];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),_.crossVectors(C,b);let U=_.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,U)}for(let A=0,b=M.length;A<b;++A){let S=M[A],U=S.start,V=S.count;for(let Z=U,K=U+V;Z<K;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,l=new O,c=new O,a=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),l.add(u),c.add(u),a.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,a.x,a.y,a.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,c){let a=l.array,u=l.itemSize,h=l.normalized,d=new a.constructor(c.length*u),f=0,g=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?f=c[v]*l.data.stride+l.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=a[f++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],a=e(c,n);t.setAttribute(l,a)}let r=this.morphAttributes;for(let l in r){let c=[],a=r[l];for(let u=0,h=a.length;u<h;u++){let d=a[u],f=e(d,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let a=o[l];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],u=[];for(let h=0,d=a.length;h<d;h++){let f=a[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let u=s[a];this.setAttribute(a,u.clone(t))}let r=e.morphAttributes;for(let a in r){let u=[],h=r[a];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[a]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,u=o.length;a<u;a++){let h=o[a];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ph=new je,Ri=new _r,yo=new mi,mh=new O,Mo=new O,bo=new O,So=new O,Xl=new O,wo=new O,gh=new O,Eo=new O,pt=class extends Bt{constructor(e=new Rt,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){wo.set(0,0,0);for(let c=0,a=r.length;c<a;c++){let u=l[c],h=r[c];u!==0&&(Xl.fromBufferAttribute(h,e),o?wo.addScaledVector(Xl,u):wo.addScaledVector(Xl.sub(t),u))}t.add(wo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(yo.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(yo,mh)===null||Ri.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,a=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=y;_<I;_+=3){let C=l.getX(_),N=l.getX(_+1),A=l.getX(_+2);s=To(this,p,e,n,a,u,h,C,N,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=l.getX(m),y=l.getX(m+1),_=l.getX(m+2);s=To(this,o,e,n,a,u,h,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=y;_<I;_+=3){let C=_,N=_+1,A=_+2;s=To(this,p,e,n,a,u,h,C,N,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,y=m+1,_=m+2;s=To(this,o,e,n,a,u,h,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jd(i,e,t,n,s,r,o,l){let c;if(e.side===Vt?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===Jn,l),c===null)return null;Eo.copy(l),Eo.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(Eo);return a<t.near||a>t.far?null:{distance:a,point:Eo.clone(),object:i}}function To(i,e,t,n,s,r,o,l,c,a){i.getVertexPosition(l,Mo),i.getVertexPosition(c,bo),i.getVertexPosition(a,So);let u=Jd(i,e,t,n,Mo,bo,So,gh);if(u){let h=new O;Yn.getBarycoord(gh,Mo,bo,So,h),s&&(u.uv=Yn.getInterpolatedAttribute(s,l,c,a,h,new ge)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,l,c,a,h,new ge)),o&&(u.normal=Yn.getInterpolatedAttribute(o,l,c,a,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:l,b:c,c:a,normal:new O,materialIndex:0};Yn.getNormal(Mo,bo,So,d.normal),u.face=d,u.barycoord=h}return u}var mn=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],a=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(v,m,p,M,y,_,I,C,N,A,b){let S=_/N,U=I/A,V=_/2,Z=I/2,K=C/2,j=N+1,J=A+1,fe=0,Q=0,be=new O;for(let Ee=0;Ee<J;Ee++){let me=Ee*U-Z;for(let Ve=0;Ve<j;Ve++){let He=Ve*S-V;be[v]=He*M,be[m]=me*y,be[p]=K,a.push(be.x,be.y,be.z),be[v]=0,be[m]=0,be[p]=C>0?1:-1,u.push(be.x,be.y,be.z),h.push(Ve/N),h.push(1-Ee/A),fe+=1}}for(let Ee=0;Ee<A;Ee++)for(let me=0;me<N;me++){let Ve=d+me+j*Ee,He=d+me+j*(Ee+1),Qe=d+(me+1)+j*(Ee+1),et=d+(me+1)+j*Ee;c.push(Ve,He,et),c.push(He,Qe,et),Q+=6}l.addGroup(f,Q,b),f+=Q,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ji(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Ji(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Au={clone:Ji,merge:Yt},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},br=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new O,xh=new ge,vh=new ge,zt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,xh,vh),t.subVectors(vh,xh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/a,s*=o.width/c,n*=o.height/a}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=-90,gs=1,qo=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(ms,gs,e,t);s.layers=this.layers,this.add(s);let r=new zt(ms,gs,e,t);r.layers=this.layers,this.add(r);let o=new zt(ms,gs,e,t);o.layers=this.layers,this.add(o);let l=new zt(ms,gs,e,t);l.layers=this.layers,this.add(l);let c=new zt(ms,gs,e,t);c.layers=this.layers,this.add(c);let a=new zt(ms,gs,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let a of t)this.remove(a);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,a,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,a),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sr=class extends Kt{constructor(e=[],t=Yi,n,s,r,o,l,c,a,u){super(e,t,n,s,r,o,l,c,a,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$o=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ni});r.uniforms.tEquirect.value=t;let o=new pt(s,r),l=t.minFilter;return t.minFilter===Bn&&(t.minFilter=ln),new qo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},At=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ef={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(a,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=a.joints["index-finger-tip"],h=a.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;a.inputState.pinching&&d>f+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&d<=f-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var wr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ho,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new O,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bi=class extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,rr=new O,vs=new O,_s=new O,ys=new ge,or=new ge,Cu=new je,Ao=new O,ar=new O,Co=new O,_h=new ge,ql=new ge,yh=new ge,Rs=class extends Bt{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Er(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Cs(n,3,0,!1)),xs.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),Cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ro(Ao.set(-.5,-.5,0),_s,o,vs,s,r),Ro(ar.set(.5,-.5,0),_s,o,vs,s,r),Ro(Co.set(.5,.5,0),_s,o,vs,s,r),_h.set(0,0),ql.set(1,0),yh.set(1,1);let l=e.ray.intersectTriangle(Ao,ar,Co,!1,rr);if(l===null&&(Ro(ar.set(-.5,.5,0),_s,o,vs,s,r),ql.set(0,1),l=e.ray.intersectTriangle(Ao,Co,ar,!1,rr),l===null))return;let c=e.ray.origin.distanceTo(rr);c<e.near||c>e.far||t.push({distance:c,point:rr.clone(),uv:Yn.getInterpolation(rr,Ao,ar,Co,_h,ql,yh,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ro(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(or.x=r*ys.x-s*ys.y,or.y=s*ys.x+r*ys.y):or.copy(ys),i.copy(e),i.x+=or.x,i.y+=or.y,i.applyMatrix4(Cu)}var Mh=new O,bh=new _t,Sh=new _t,tf=new O,wh=new je,Io=new O,$l=new mi,Eh=new je,Yl=new _r,Nn=class extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(s),e.ray.intersectsSphere($l)!==!1&&(Eh.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(Eh),!(this.boundingBox!==null&&Yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;bh.fromBufferAttribute(s.attributes.skinIndex,e),Sh.fromBufferAttribute(s.attributes.skinWeight,e),Mh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Sh.getComponent(r);if(o!==0){let l=bh.getComponent(r);wh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(tf.copy(Mh).applyMatrix4(wh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},gi=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},zi=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,l,c,a=kt,u=kt,h,d){super(null,o,l,c,a,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Th=new je,nf=new je,ki=class i{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let l=e[r]?e[r].matrixWorld:nf;Th.multiplyMatrices(l,t[r]),Th.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zi(t,e,e,hn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gi),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let l=n[s];e.boneInverses.push(l.toArray())}return e}};var Zl=new O,sf=new O,rf=new Ke,In=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zl.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new mi,of=new ge(.5,.5),Po=new O,Is=class{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],a=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],y=r[13],_=r[14],I=r[15];if(s[0].setComponents(a-o,f-u,p-g,I-M).normalize(),s[1].setComponents(a+o,f+u,p+g,I+M).normalize(),s[2].setComponents(a+l,f+h,p+v,I+y).normalize(),s[3].setComponents(a-l,f-h,p-v,I-y).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(a-c,f-d,p-m,I-_).normalize();else if(s[4].setComponents(a-c,f-d,p-m,I-_).normalize(),t===Sn)s[5].setComponents(a+c,f+d,p+m,I+_).normalize();else if(t===gr)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);let t=of.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Kt{constructor(e,t,n,s,r,o,l,c,a){super(e,t,n,s,r,o,l,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tr=class extends Kt{constructor(e,t,n=yi,s,r,o,l=kt,c=kt,a,u=bs,h=1){if(u!==bs&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,l,c,u,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ar=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Cr=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],a=new O,u=new ge;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;a.x=e*Math.cos(f),a.y=e*Math.sin(f),o.push(a.x,a.y,a.z),l.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let a=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function M(){let _=new O,I=new O,C=0,N=(t-e)/n;for(let A=0;A<=r;A++){let b=[],S=A/r,U=S*(t-e)+e;for(let V=0;V<=s;V++){let Z=V/s,K=Z*c+l,j=Math.sin(K),J=Math.cos(K);I.x=U*j,I.y=-S*n+m,I.z=U*J,h.push(I.x,I.y,I.z),_.set(j,N,J).normalize(),d.push(_.x,_.y,_.z),f.push(Z,1-S),b.push(g++)}v.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let S=v[b][A],U=v[b+1][A],V=v[b+1][A+1],Z=v[b][A+1];(e>0||b!==0)&&(u.push(S,U,Z),C+=3),(t>0||b!==r-1)&&(u.push(U,V,Z),C+=3)}a.addGroup(p,C,0),p+=C}function y(_){let I=g,C=new ge,N=new O,A=0,b=_===!0?e:t,S=_===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let U=g;for(let V=0;V<=s;V++){let K=V/s*c+l,j=Math.cos(K),J=Math.sin(K);N.x=b*J,N.y=m*S,N.z=b*j,h.push(N.x,N.y,N.z),d.push(0,S,0),C.x=j*.5+.5,C.y=J*.5*S+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){let Z=I+V,K=U+V;_===!0?u.push(K,K+1,Z):u.push(K+1,K,Z),A+=3}a.addGroup(p,A,_===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class i extends xi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yo=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),a(n),u(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(M){let y=new O,_=new O,I=new O;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],_),f(t[C+2],I),c(y,_,I,M)}function c(M,y,_,I){let C=I+1,N=[];for(let A=0;A<=C;A++){N[A]=[];let b=M.clone().lerp(_,A/C),S=y.clone().lerp(_,A/C),U=C-A;for(let V=0;V<=U;V++)V===0&&A===C?N[A][V]=b:N[A][V]=b.clone().lerp(S,V/U)}for(let A=0;A<C;A++)for(let b=0;b<2*(C-A)-1;b++){let S=Math.floor(b/2);b%2===0?(d(N[A][S+1]),d(N[A+1][S]),d(N[A][S])):(d(N[A][S+1]),d(N[A+1][S+1]),d(N[A+1][S]))}}function a(M){let y=new O;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let _=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(_,1-I)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){let y=o[M+0],_=o[M+2],I=o[M+4],C=Math.max(y,_,I),N=Math.min(y,_,I);C>.9&&N<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){let _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let M=new O,y=new O,_=new O,I=new O,C=new ge,N=new ge,A=new ge;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),C.set(o[S+0],o[S+1]),N.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),I.copy(M).add(y).add(_).divideScalar(3);let U=m(I);v(C,S+0,M,U),v(N,S+2,y,U),v(A,S+4,_,U)}}function v(M,y,_,I){I<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,a;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),a=n[s]-o,a<0)l=s+1;else if(a>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new ge:new O);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],l=new O,c=new je;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let a=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=a&&(a=u,n.set(1,0,0)),h<=a&&(a=h,n.set(0,1,0)),d<=a&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(s[f-1],s[f]),l.length()>Number.EPSILON){l.normalize();let g=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(l,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ls=class extends cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),a=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=a-this.aY;c=d*u-f*h+this.aX,a=d*h+f*u+this.aY}return n.set(c,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zo=class extends Ls{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,a){s(o,l,a*(l-r),a*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,a,u,h){let d=(o-r)/a-(l-r)/(a+u)+(l-o)/u,f=(l-o)/u-(c-o)/(u+h)+(c-l)/h;d*=u,f*=u,s(o,l,d,f)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var Lo=new O,Jl=new Ac,jl=new Ac,Kl=new Ac,Ds=class extends cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let a,u;this.closed||l>0?a=s[(l-1)%r]:(Lo.subVectors(s[0],s[1]).add(s[0]),a=Lo);let h=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?u=s[(l+2)%r]:(Lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(a.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Jl.initNonuniformCatmullRom(a.x,h.x,d.x,u.x,g,v,m),jl.initNonuniformCatmullRom(a.y,h.y,d.y,u.y,g,v,m),Kl.initNonuniformCatmullRom(a.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(a.x,h.x,d.x,u.x,this.tension),jl.initCatmullRom(a.y,h.y,d.y,u.y,this.tension),Kl.initCatmullRom(a.z,h.z,d.z,u.z,this.tension));return n.set(Jl.calc(c),jl.calc(c),Kl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ah(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function af(i,e){let t=1-i;return t*t*e}function lf(i,e){return 2*(1-i)*i*e}function cf(i,e){return i*i*e}function ur(i,e,t,n){return af(i,e)+lf(i,t)+cf(i,n)}function hf(i,e){let t=1-i;return t*t*t*e}function uf(i,e){let t=1-i;return 3*t*t*i*e}function df(i,e){return 3*(1-i)*i*i*e}function ff(i,e){return i*i*i*e}function dr(i,e,t,n,s){return hf(i,e)+uf(i,t)+df(i,n)+ff(i,s)}var Ir=class extends cn{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(dr(e,s.x,r.x,o.x,l.x),dr(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends cn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(dr(e,s.x,r.x,o.x,l.x),dr(e,s.y,r.y,o.y,l.y),dr(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pr=class extends cn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends cn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lr=class extends cn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends cn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y),ur(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],a=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(l,c.x,a.x,u.x,h.x),Ah(l,c.y,a.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},Ko=Object.freeze({__proto__:null,ArcCurve:Zo,CatmullRomCurve3:Ds,CubicBezierCurve:Ir,CubicBezierCurve3:Jo,EllipseCurve:Ls,LineCurve:Pr,LineCurve3:jo,QuadraticBezierCurve:Lr,QuadraticBezierCurve3:Dr,SplineCurve:Ur}),Qo=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),a=c===0?0:1-o/c;return l.getPointAt(a,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let a=0;a<c.length;a++){let u=c[a];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}},Nr=class extends Qo{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Lr(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Ir(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ur(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let a=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+a,t+u,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let a=new Ls(e,t,n,s,r,o,l,c);if(this.curves.length>0){let h=a.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(a);let u=a.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends Nr{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Nr().fromJSON(s))}return this}};function pf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ru(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,a;if(n&&(r=_f(i,e,r,t)),i.length>80*t){l=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<l&&(l=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}a=Math.max(u-l,h-c),a=a!==0?32767/a:0}return Fr(r,o,t,l,c,a,0),o}function Ru(i,e,t,n,s){let r;if(s===If(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ch(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ch(o/n|0,i[o],i[o+1],r);return r&&Ns(r,r.next)&&(Br(r),r=r.next),r}function Vi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ns(t,t.next)||Et(t.prev,t,t.next)===0)){if(Br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&wf(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,a=i.next;if(r?gf(i,n,s,r):mf(i)){e.push(c.i,i.i,a.i),Br(i),i=a.next,l=a.next;continue}if(i=a,i===l){o?o===1?(i=xf(Vi(i),e),Fr(i,e,t,n,s,r,2)):o===2&&vf(i,e,t,n,s,r):Fr(Vi(i),e,t,n,s,r,1);break}}}function mf(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,a=n.y,u=Math.min(s,r,o),h=Math.min(l,c,a),d=Math.max(s,r,o),f=Math.max(l,c,a),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&lr(s,l,r,c,o,a,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Et(s,r,o)>=0)return!1;let l=s.x,c=r.x,a=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(l,c,a),g=Math.min(u,h,d),v=Math.max(l,c,a),m=Math.max(u,h,d),p=nc(f,g,e,t,n),M=nc(v,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(l,u,c,h,a,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&lr(l,u,c,h,a,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(l,u,c,h,a,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&lr(l,u,c,h,a,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ns(n,s)&&Pu(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),Br(t),Br(t.next),t=i=s),t=t.next}while(t!==i);return Vi(t)}function vf(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Af(o,l)){let c=Lu(o,l);o=Vi(o,o.next),c=Vi(c,c.next),Fr(o,e,t,n,s,r,0),Fr(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function _f(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,a=Ru(i,l,c,n,!1);a===a.next&&(a.steiner=!0),s.push(Tf(a))}s.sort(yf);for(let r=0;r<s.length;r++)t=Mf(s[r],t);return t}function yf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mf(i,e){let t=bf(i,e);if(!t)return e;let n=Lu(t,i);return Vi(n,n.next),Vi(t,t.next)}function bf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ns(i,t))return t;do{if(Ns(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,a=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Iu(s<a?n:r,s,c,a,s<a?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Sf(o,t)))&&(o=t,u=h)}t=t.next}while(t!==l);return o}function Sf(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function wf(i,e,t,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let a=0;a<t&&(l++,o=o.nextZ,!!o);a++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function nc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Iu(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function lr(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Iu(i,e,t,n,s,r,o,l)}function Af(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cf(i,e)&&(Or(i,e)&&Or(e,i)&&Rf(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Ns(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ns(i,e){return i.x===e.x&&i.y===e.y}function Pu(i,e,t,n){let s=Uo(Et(i,e,t)),r=Uo(Et(i,e,n)),o=Uo(Et(t,n,i)),l=Uo(Et(t,n,e));return!!(s!==r&&o!==l||s===0&&Do(i,t,e)||r===0&&Do(i,n,e)||o===0&&Do(t,i,n)||l===0&&Do(t,e,n))}function Do(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Uo(i){return i>0?1:i<0?-1:0}function Cf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Rf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lu(i,e){let t=ic(i.i,i.x,i.y),n=ic(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ch(i,e,t,n){let s=ic(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function If(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sc=class{static triangulate(e,t,n=2){return pf(e,t,n)}},Ui=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rh(e),Ih(n,e);let o=e.length;t.forEach(Rh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ih(n,t[c]);let l=sc.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function Rh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ih(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zr=class i extends Rt{constructor(e=new Us([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let l=0,c=e.length;l<c;l++){let a=e[l];o(a)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(l){let c=[],a=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Pf,y,_=!1,I,C,N,A;p&&(y=p.getSpacedPoints(u),_=!0,d=!1,I=p.computeFrenetFrames(u,!1),C=new O,N=new O,A=new O),d||(m=0,f=0,g=0,v=0);let b=l.extractPoints(a),S=b.shape,U=b.holes;if(!Ui.isClockWise(S)){S=S.reverse();for(let de=0,he=U.length;de<he;de++){let ae=U[de];Ui.isClockWise(ae)&&(U[de]=ae.reverse())}}function Z(de){let ae=10000000000000001e-36,le=de[0];for(let we=1;we<=de.length;we++){let L=we%de.length,P=de[L],R=P.x-le.x,F=P.y-le.y,w=R*R+F*F,x=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(le.x),Math.abs(le.y)),E=ae*x*x;if(w<=E){de.splice(L,1),we--;continue}le=P}}Z(S),U.forEach(Z);let K=U.length,j=S;for(let de=0;de<K;de++){let he=U[de];S=S.concat(he)}function J(de,he,ae){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(he,ae)}let fe=S.length;function Q(de,he,ae){let le,we,L,P=de.x-he.x,R=de.y-he.y,F=ae.x-de.x,w=ae.y-de.y,x=P*P+R*R,E=P*w-R*F;if(Math.abs(E)>Number.EPSILON){let k=Math.sqrt(x),ee=Math.sqrt(F*F+w*w),$=he.x-R/k,ie=he.y+P/k,se=ae.x-w/ee,B=ae.y+F/ee,W=((se-$)*w-(B-ie)*F)/(P*w-R*F);le=$+P*W-de.x,we=ie+R*W-de.y;let q=le*le+we*we;if(q<=2)return new ge(le,we);L=Math.sqrt(q/2)}else{let k=!1;P>Number.EPSILON?F>Number.EPSILON&&(k=!0):P<-Number.EPSILON?F<-Number.EPSILON&&(k=!0):Math.sign(R)===Math.sign(w)&&(k=!0),k?(le=-R,we=P,L=Math.sqrt(x)):(le=P,we=R,L=Math.sqrt(x/2))}return new ge(le/L,we/L)}let be=[];for(let de=0,he=j.length,ae=he-1,le=de+1;de<he;de++,ae++,le++)ae===he&&(ae=0),le===he&&(le=0),be[de]=Q(j[de],j[ae],j[le]);let Ee=[],me,Ve=be.concat();for(let de=0,he=K;de<he;de++){let ae=U[de];me=[];for(let le=0,we=ae.length,L=we-1,P=le+1;le<we;le++,L++,P++)L===we&&(L=0),P===we&&(P=0),me[le]=Q(ae[le],ae[L],ae[P]);Ee.push(me),Ve=Ve.concat(me)}let He;if(m===0)He=Ui.triangulateShape(j,U);else{let de=[],he=[];for(let ae=0;ae<m;ae++){let le=ae/m,we=f*Math.cos(le*Math.PI/2),L=g*Math.sin(le*Math.PI/2)+v;for(let P=0,R=j.length;P<R;P++){let F=J(j[P],be[P],L);Ue(F.x,F.y,-we),le===0&&de.push(F)}for(let P=0,R=K;P<R;P++){let F=U[P];me=Ee[P];let w=[];for(let x=0,E=F.length;x<E;x++){let k=J(F[x],me[x],L);Ue(k.x,k.y,-we),le===0&&w.push(k)}le===0&&he.push(w)}}He=Ui.triangulateShape(de,he)}let Qe=He.length,et=g+v;for(let de=0;de<fe;de++){let he=d?J(S[de],Ve[de],et):S[de];_?(N.copy(I.normals[0]).multiplyScalar(he.x),C.copy(I.binormals[0]).multiplyScalar(he.y),A.copy(y[0]).add(N).add(C),Ue(A.x,A.y,A.z)):Ue(he.x,he.y,0)}for(let de=1;de<=u;de++)for(let he=0;he<fe;he++){let ae=d?J(S[he],Ve[he],et):S[he];_?(N.copy(I.normals[de]).multiplyScalar(ae.x),C.copy(I.binormals[de]).multiplyScalar(ae.y),A.copy(y[de]).add(N).add(C),Ue(A.x,A.y,A.z)):Ue(ae.x,ae.y,h/u*de)}for(let de=m-1;de>=0;de--){let he=de/m,ae=f*Math.cos(he*Math.PI/2),le=g*Math.sin(he*Math.PI/2)+v;for(let we=0,L=j.length;we<L;we++){let P=J(j[we],be[we],le);Ue(P.x,P.y,h+ae)}for(let we=0,L=U.length;we<L;we++){let P=U[we];me=Ee[we];for(let R=0,F=P.length;R<F;R++){let w=J(P[R],me[R],le);_?Ue(w.x,w.y+y[u-1].y,y[u-1].x+ae):Ue(w.x,w.y,h+ae)}}}oe(),pe();function oe(){let de=s.length/3;if(d){let he=0,ae=fe*he;for(let le=0;le<Qe;le++){let we=He[le];Fe(we[2]+ae,we[1]+ae,we[0]+ae)}he=u+m*2,ae=fe*he;for(let le=0;le<Qe;le++){let we=He[le];Fe(we[0]+ae,we[1]+ae,we[2]+ae)}}else{for(let he=0;he<Qe;he++){let ae=He[he];Fe(ae[2],ae[1],ae[0])}for(let he=0;he<Qe;he++){let ae=He[he];Fe(ae[0]+fe*u,ae[1]+fe*u,ae[2]+fe*u)}}n.addGroup(de,s.length/3-de,0)}function pe(){let de=s.length/3,he=0;Me(j,he),he+=j.length;for(let ae=0,le=U.length;ae<le;ae++){let we=U[ae];Me(we,he),he+=we.length}n.addGroup(de,s.length/3-de,1)}function Me(de,he){let ae=de.length;for(;--ae>=0;){let le=ae,we=ae-1;we<0&&(we=de.length-1);for(let L=0,P=u+m*2;L<P;L++){let R=fe*L,F=fe*(L+1),w=he+le+R,x=he+we+R,E=he+we+F,k=he+le+F;tt(w,x,E,k)}}}function Ue(de,he,ae){c.push(de),c.push(he),c.push(ae)}function Fe(de,he,ae){ot(de),ot(he),ot(ae);let le=s.length/3,we=M.generateTopUV(n,s,le-3,le-2,le-1);z(we[0]),z(we[1]),z(we[2])}function tt(de,he,ae,le){ot(de),ot(he),ot(le),ot(he),ot(ae),ot(le);let we=s.length/3,L=M.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);z(L[0]),z(L[1]),z(L[3]),z(L[1]),z(L[2]),z(L[3])}function ot(de){s.push(c[de*3+0]),s.push(c[de*3+1]),s.push(c[de*3+2])}function z(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let l=t[e.shapes[r]];n.push(l)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ko[s.type]().fromJSON(s)),new i(n,e.options)}},Pf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],a=e[s*3],u=e[s*3+1];return[new ge(r,o),new ge(l,c),new ge(a,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],l=e[t*3+1],c=e[t*3+2],a=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(l-u)<Math.abs(o-a)?[new ge(o,1-c),new ge(a,1-h),new ge(d,1-g),new ge(v,1-p)]:[new ge(l,1-c),new ge(u,1-h),new ge(f,1-g),new ge(m,1-p)]}};function Lf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kr=class i extends Yo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Fs=class i extends Rt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],l=[],c=[],a=[],u=1/t,h=new O,d=new ge,f=new O,g=new O,v=new O,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let y=n+M*u*s,_=Math.sin(y),I=Math.cos(y);for(let C=0;C<=e.length-1;C++){h.x=e[C].x*_,h.y=e[C].y,h.z=e[C].x*I,o.push(h.x,h.y,h.z),d.x=M/t,d.y=C/(e.length-1),l.push(d.x,d.y);let N=c[3*C+0]*_,A=c[3*C+1],b=c[3*C+0]*I;a.push(N,A,b)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){let _=y+M*e.length,I=_,C=_+e.length,N=_+e.length+1,A=_+1;r.push(I,C,A),r.push(N,A,C)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(l,2)),this.setAttribute("normal",new $e(a,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Hi=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),a=l+1,u=c+1,h=e/l,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let M=p*d-o;for(let y=0;y<a;y++){let _=y*h-r;g.push(_,-M,0),v.push(0,0,1),m.push(y/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<l;M++){let y=M+a*p,_=M+a*(p+1),I=M+1+a*(p+1),C=M+1+a*p;f.push(y,_,C),f.push(_,I,C)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var vi=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),a=0,u=[],h=new O,d=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let C=I/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+y*l),h.y=e*Math.cos(o+y*l),h.z=e*Math.sin(s+C*r)*Math.sin(o+y*l),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(C+_,1-y),M.push(a++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=u[p][M+1],_=u[p][M],I=u[p+1][M],C=u[p+1][M+1];(p!==0||o>0)&&f.push(y,_,C),(p!==n-1||c<Math.PI)&&f.push(_,I,C)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],l=[],c=[],a=[],u=new O,h=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),l.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),a.push(g/s),a.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(v,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vr=class i extends Rt{constructor(e=new Dr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let l=new O,c=new O,a=new ge,u=new O,h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function v(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){u=e.getPointAt(y/t,u);let _=o.normals[y],I=o.binormals[y];for(let C=0;C<=s;C++){let N=C/s*Math.PI*2,A=Math.sin(N),b=-Math.cos(N);c.x=b*_.x+A*I.x,c.y=b*_.y+A*I.y,c.z=b*_.z+A*I.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=u.x+n*c.x,l.y=u.y+n*c.y,l.z=u.z+n*c.z,h.push(l.x,l.y,l.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let I=(s+1)*(y-1)+(_-1),C=(s+1)*y+(_-1),N=(s+1)*y+_,A=(s+1)*(y-1)+_;g.push(I,C,A),g.push(C,N,A)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)a.x=y/t,a.y=_/s,f.push(a.x,a.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ko[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Hr=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Gi=class extends Dn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ea=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ta=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function No(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Df(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Uf(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ph(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let l=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[l+c]}return s}function Du(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},na=class extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Li,endingEnd:Li}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Di:r=e,l=2*t-n;break;case pr:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Di:o=e,c=2*n-t;break;case pr:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let a=(n-t)*.5,u=this.valueSize;this._weightPrev=a/(t-l),this._weightNext=a/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let I=0;I!==l;++I)r[I]=p*o[u+I]+M*o[a+I]+y*o[c+I]+_*o[h+I];return r}},Gr=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,a=c-l,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==l;++d)r[d]=o[a+d]*h+o[c+d]*u;return r}},ia=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&Df(s))for(let l=0,c=s.length;l!==c;++l){let a=s[l];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,a=e[l],u=e[l+1];if(a!==u&&(l!==1||a!==e[0]))if(s)c=!0;else{let h=l*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let h=l*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[l+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Vo;var Qn=class extends nn{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=fr;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="color";var Xi=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="number";var sa=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),a=e*l;for(let u=a+l;a!==u;a+=4)gt.slerpFlat(r,0,o,a-l,o,a,c);return r}},ei=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}};ei.prototype.ValueTypeName="quaternion";ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends nn{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=fr;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};qi.prototype.ValueTypeName="vector";var $i=class{constructor(e="",t=-1,n=[],s=tl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(Ff(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let l=0;l<r;l++){let c=[],a=[];c.push((l+r-1)%r,l,(l+1)%r),a.push(0,1,0);let u=Uf(c);c=Ph(c,1,u),a=Ph(a,1,u),!s&&c[0]===0&&(c.push(r),a.push(a[0])),o.push(new Xi(".morphTargetInfluences["+t[l].name+"]",c,a).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){let a=e[l],u=a.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(a)}}let o=[];for(let l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,v){if(f.length!==0){let m=[],p=[];Du(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,l=e.blendMode,c=e.length||-1,a=e.hierarchy||[];for(let h=0;h<a.length;h++){let d=a[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(let v in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}s.push(new Xi(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(qi,f+".position",d,"pos",s),n(ei,f+".quaternion",d,"rot",s),n(qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,l)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Nf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return Wr;case"quaternion":return ei;case"bool":case"boolean":return Qn;case"string":return ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ff(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Nf(i.type);if(i.times===void 0){let t=[],n=[];Du(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ra=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,l),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return a.push(u,h),this},this.removeHandler=function(u){let h=a.indexOf(u);return h!==-1&&a.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=a.length;h<d;h+=2){let f=a[h],g=a[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Uu=new ra,oa=class{constructor(e){this.manager=e!==void 0?e:Uu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Os=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ql=new je,Lh=new O,Dh=new O,rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var qr=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=class extends rc{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var aa=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var la=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let l=0;l!==s;++l)n[r+l]=n[l];o=t}else{o+=t;let l=t/o;this._mixBufferRegion(n,r,0,l,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,a=t+t;c!==a;++c)if(n[c]!==n[c+t]){l.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){gt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;gt.multiplyQuaternionsFlat(e,o,e,t,e,n),gt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let l=0;l!==r;++l){let c=t+l;e[c]=e[c]*o+e[n+l]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]+e[n+o]*s}}},Cc="\\[\\]\\.:\\/",Of=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",Bf="[^"+Cc.replace("\\.","")+"]",zf=/((?:WC+[\/:])*)/.source.replace("WC",Rc),kf=/(WCOD+)?/.source.replace("WCOD",Bf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),Hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Gf=new RegExp("^"+zf+kf+Vf+Hf+"$"),Wf=["material","materials","bones","map"],ac=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Of,"")}static parseTrackName(e){let t=Gf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===a){a=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=ac;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ca=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,l=new Array(o),c={endingStart:Li,endingEnd:Li};for(let a=0;a!==o;++a){let u=r[a].createInterpolant(null);l[a]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,l=s/r;e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,l=this._timeScaleInterpolant;l===null&&(l=s._lendControlInterpolant(),this._timeScaleInterpolant=l);let c=l.parameterPositions,a=l.sampleValues;return c[0]=r,c[1]=r+n,a[0]=e/o,a[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),l=this._updateWeight(e);if(l>0){let c=this._interpolants,a=this._propertyBindings;switch(this.blendMode){case fu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),a[u].accumulateAdditive(l);break;case tl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),a[u].accumulate(s,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===du;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===hu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let l=Math.floor(s/t);s-=t*l,r+=Math.abs(l);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let a=e<0;this._setEndings(a,!a,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Di,s.endingEnd=Di):(e?s.endingStart=this.zeroSlopeAtStart?Di:Li:s.endingStart=pr,t?s.endingEnd=this.zeroSlopeAtEnd?Di:Li:s.endingEnd=pr)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,c[0]=t,l[1]=r+e,c[1]=n,this}},Xf=new Float32Array(1),$r=class extends Pn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,l=e._interpolants,c=n.uuid,a=this._bindingsByRootAndName,u=a[c];u===void 0&&(u={},a[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;g=new la(vt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}l[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,l=o[r],c=l.knownActions,a=c[c.length-1],u=e._byClipCacheIndex;a._byClipCacheIndex=u,c[u]=a,c.pop(),e._byClipCacheIndex=null;let h=l.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,l=o[s],c=t[t.length-1],a=e._cacheIndex;c._cacheIndex=a,t[a]=c,t.pop(),delete l[r],Object.keys(l).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Gr(new Float32Array(2),new Float32Array(2),1,Xf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?$i.findByName(s,e):e,l=o!==null?o.uuid:e,c=this._actionsByClip[l],a=null;if(n===void 0&&(o!==null?n=o.blendMode:n=tl),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;a=c.knownActions[0],o===null&&(o=a._clip)}if(o===null)return null;let u=new ca(this,o,t,n);return this._bindAction(u,a),this._addInactiveAction(u,l,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?$i.findByName(n,e):e,o=r?r.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let a=0;a!==n;++a)t[a]._update(s,e,r,o);let l=this._bindings,c=this._nActiveBindings;for(let a=0;a!==c;++a)l[a].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let l=0,c=o.length;l!==c;++l){let a=o[l];this._deactivateAction(a);let u=a._cacheIndex,h=t[t.length-1];a._cacheIndex=null,a._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(a)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let l=n[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let l=r[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function Ic(i,e,t,n){let s=qf(n);switch(t){case _c:return i*e;case jr:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case Mc:return i*e*2/s.components*s.byteLength;case Ea:return i*e*2/s.components*s.byteLength;case yc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Ta:return i*e*4/s.components*s.byteLength;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ra:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ya:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qa:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qf(i){switch(i){case En:case mc:return{byteLength:1,components:1};case zs:case gc:case ks:return{byteLength:2,components:1};case ba:case Sa:return{byteLength:2,components:4};case yi:case Ma:case Tn:return{byteLength:4,components:1};case xc:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function sd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kf(i){let e=new WeakMap;function t(l,c){let a=l.array,u=l.usage,h=a.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,a,u),l.onUploadCallback();let f;if(a instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)f=i.HALF_FLOAT;else if(a instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)f=i.SHORT;else if(a instanceof Uint32Array)f=i.UNSIGNED_INT;else if(a instanceof Int32Array)f=i.INT;else if(a instanceof Int8Array)f=i.BYTE;else if(a instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:d,type:f,bytesPerElement:a.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,c,a){let u=c.array,h=c.updateRanges;if(i.bindBuffer(a,l),h.length===0)i.bufferSubData(a,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];i.bufferSubData(a,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let a=e.get(l);if(a===void 0)e.set(l,t(l,c));else if(a.version<l.version){if(a.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,l,c),a.version=l.version}}return{get:s,remove:r,update:o}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,y0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,E0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,R0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Qf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:vp,color_pars_fragment:_p,color_pars_vertex:yp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Ip,envmap_fragment:Pp,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Np,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:$p,lights_phong_fragment:Yp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:jp,lights_fragment_begin:Kp,lights_fragment_maps:Qp,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:vm,normal_pars_vertex:_m,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Im,dithering_pars_fragment:Pm,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:km,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:$m,uv_pars_fragment:Ym,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:jm,background_vert:Km,background_frag:Qm,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distanceRGBA_vert:o0,distanceRGBA_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:x0,meshnormal_vert:v0,meshnormal_frag:_0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:b0,meshphysical_frag:S0,meshtoon_vert:w0,meshtoon_frag:E0,points_vert:T0,points_frag:A0,shadow_vert:C0,shadow_frag:R0,sprite_vert:I0,sprite_frag:P0},Ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},zn={basic:{uniforms:Yt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Yt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Yt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Yt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Yt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Yt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Yt([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Yt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Yt([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Yt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Yt([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Yt([Ie.common,Ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Yt([Ie.lights,Ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zn.physical={uniforms:Yt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var il={r:0,b:0,g:0},ji=new $t,L0=new je;function D0(i,e,t,n,s,r,o){let l=new Ye(0),c=r===!0?0:1,a,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1,I=g(y);I===null?p(l,c):I&&I.isColor&&(p(I,1),_=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let I=g(_);I&&(I.isCubeTexture||I.mapping===Zr)?(u===void 0&&(u=new pt(new mn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ji(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,N,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ji.copy(_.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L0.makeRotationFromEuler(ji)),u.material.toneMapped=lt.getTransfer(I.colorSpace)!==ut,(h!==I||d!==I.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(a===void 0&&(a=new pt(new Hi(2,2),new wn({name:"BackgroundMaterial",uniforms:Ji(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=I,a.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,a.material.toneMapped=lt.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),a.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==i.toneMapping)&&(a.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),a.layers.enableAll(),y.unshift(a,a.geometry,a.material,0,0,null))}function p(y,_){y.getRGB(il,Tc(i)),n.buffers.color.setClear(il.r,il.g,il.b,_,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return l},setClearColor:function(y,_=1){l.set(y),c=_,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(l,c)},render:v,addToRenderList:m,dispose:M}}function U0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function l(S,U,V,Z,K){let j=!1,J=h(Z,V,U);r!==J&&(r=J,a(r.object)),j=f(S,Z,V,K),j&&g(S,Z,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(S,U,V,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function a(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,U,V){let Z=V.wireframe===!0,K=n[S.id];K===void 0&&(K={},n[S.id]=K);let j=K[U.id];j===void 0&&(j={},K[U.id]=j);let J=j[Z];return J===void 0&&(J=d(c()),j[Z]=J),J}function d(S){let U=[],V=[],Z=[];for(let K=0;K<t;K++)U[K]=0,V[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Z,object:S,attributes:{},index:null}}function f(S,U,V,Z){let K=r.attributes,j=U.attributes,J=0,fe=V.getAttributes();for(let Q in fe)if(fe[Q].location>=0){let Ee=K[Q],me=j[Q];if(me===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),Ee===void 0||Ee.attribute!==me||me&&Ee.data!==me.data)return!0;J++}return r.attributesNum!==J||r.index!==Z}function g(S,U,V,Z){let K={},j=U.attributes,J=0,fe=V.getAttributes();for(let Q in fe)if(fe[Q].location>=0){let Ee=j[Q];Ee===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor));let me={};me.attribute=Ee,Ee&&Ee.data&&(me.data=Ee.data),K[Q]=me,J++}r.attributes=K,r.attributesNum=J,r.index=Z}function v(){let S=r.newAttributes;for(let U=0,V=S.length;U<V;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){let V=r.newAttributes,Z=r.enabledAttributes,K=r.attributeDivisors;V[S]=1,Z[S]===0&&(i.enableVertexAttribArray(S),Z[S]=1),K[S]!==U&&(i.vertexAttribDivisor(S,U),K[S]=U)}function M(){let S=r.newAttributes,U=r.enabledAttributes;for(let V=0,Z=U.length;V<Z;V++)U[V]!==S[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function y(S,U,V,Z,K,j,J){J===!0?i.vertexAttribIPointer(S,U,V,K,j):i.vertexAttribPointer(S,U,V,Z,K,j)}function _(S,U,V,Z){v();let K=Z.attributes,j=V.getAttributes(),J=U.defaultAttributeValues;for(let fe in j){let Q=j[fe];if(Q.location>=0){let be=K[fe];if(be===void 0&&(fe==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),fe==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),be!==void 0){let Ee=be.normalized,me=be.itemSize,Ve=e.get(be);if(Ve===void 0)continue;let He=Ve.buffer,Qe=Ve.type,et=Ve.bytesPerElement,oe=Qe===i.INT||Qe===i.UNSIGNED_INT||be.gpuType===Ma;if(be.isInterleavedBufferAttribute){let pe=be.data,Me=pe.stride,Ue=be.offset;if(pe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Q.locationSize;Fe++)p(Q.location+Fe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Fe=0;Fe<Q.locationSize;Fe++)m(Q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Fe=0;Fe<Q.locationSize;Fe++)y(Q.location+Fe,me/Q.locationSize,Qe,Ee,Me*et,(Ue+me/Q.locationSize*Fe)*et,oe)}else{if(be.isInstancedBufferAttribute){for(let pe=0;pe<Q.locationSize;pe++)p(Q.location+pe,be.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let pe=0;pe<Q.locationSize;pe++)m(Q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let pe=0;pe<Q.locationSize;pe++)y(Q.location+pe,me/Q.locationSize,Qe,Ee,me*et,me/Q.locationSize*pe*et,oe)}}else if(J!==void 0){let Ee=J[fe];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(Q.location,Ee);break;case 3:i.vertexAttrib3fv(Q.location,Ee);break;case 4:i.vertexAttrib4fv(Q.location,Ee);break;default:i.vertexAttrib1fv(Q.location,Ee)}}}}M()}function I(){A();for(let S in n){let U=n[S];for(let V in U){let Z=U[V];for(let K in Z)u(Z[K].object),delete Z[K];delete U[V]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let U=n[S.id];for(let V in U){let Z=U[V];for(let K in Z)u(Z[K].object),delete Z[K];delete U[V]}delete n[S.id]}function N(S){for(let U in n){let V=n[U];if(V[S.id]===void 0)continue;let Z=V[S.id];for(let K in Z)u(Z[K].object),delete Z[K];delete V[S.id]}}function A(){b(),o=!0,r!==s&&(r=s,a(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:A,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function N0(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(a,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<a.length;g++)o(a[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,a,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function F0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==hn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){let A=N===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==En&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Tn&&!A)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",u=c(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:a,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:C}}function O0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new In,l=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):a();else{let M=r?0:n,y=M*4,_=p.clippingState||null;c.value=_,_=u(g,d,y,f);for(let I=0;I!==y;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(h[y]).applyMatrix4(M,l),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function B0(i){let e=new WeakMap;function t(o,l){return l===va?o.mapping=Yi:l===_a&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){let l=o.mapping;if(l===va||l===_a)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let a=new $o(c.height);return a.fromEquirectangularTexture(i,o),e.set(o,a),o.addEventListener("dispose",s),t(a.texture,o.mapping)}else return null}}return o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ws=4,Nu=[.125,.215,.35,.446,.526,.582],es=20,Pc=new qr,Fu=new Ye,Lc=null,Dc=0,Uc=0,Nc=!1,Qi=(1+Math.sqrt(5))/2,Gs=1/Qi,Ou=[new O(-Qi,Gs,0),new O(Qi,Gs,0),new O(-Gs,0,Qi),new O(Gs,0,Qi),new O(0,Qi,-Gs),new O(0,Qi,Gs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],z0=new O,ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=z0}=r;Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ks,format:hn,colorSpace:Oi,depthBuffer:!1},s=Bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(r)),this._blurMaterial=V0(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,s,r){let c=new zt(90,1,t,n),a=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Fu),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let v=new Kn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new pt(new mn,v),p=!1,M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,p=!0):(v.color.copy(Fu),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,a[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,a[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,a[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));let I=this._cubeSize;sl(s,_*I,y>2?I:0,I,I),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Yi||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;sl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ou[(s-r-1)%Ou.length];this._blur(e,r-1,r,o,l)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,l){let c=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pt(this._lodPlanes[s],a),d=a.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let p=[],M=0;for(let N=0;N<es;++N){let A=N/v,b=Math.exp(-A*A/2);p.push(b),N===0?M+=b:N<m&&(M+=2*b)}for(let N=0;N<p.length;N++)p[N]=p[N]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[s],I=3*_*(s>y-Ws?s-y+Ws:0),C=4*(this._cubeSize-_);sl(t,I,C,3*_,2*_),c.setRenderTarget(t),c.render(h,Pc)}};function k0(i){let e=[],t=[],n=[],s=i,r=i-Ws+1+Nu.length;for(let o=0;o<r;o++){let l=Math.pow(2,s);t.push(l);let c=1/l;o>i-Ws?c=Nu[o-i+Ws-1]:o===0&&(c=0),n.push(c);let a=1/(l-2),u=-a,h=1+a,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let C=0;C<f;C++){let N=C%3*2/3-1,A=C>2?0:-1,b=[N,A,0,N+2/3,A,0,N+2/3,A+1,0,N,A,0,N+2/3,A+1,0,N,A+1,0];M.set(b,v*g*C),y.set(d,m*g*C);let S=[C,C,C,C,C,C];_.set(S,p*g*C)}let I=new Rt;I.setAttribute("position",new qt(M,v)),I.setAttribute("uv",new qt(y,m)),I.setAttribute("faceIndex",new qt(_,p)),e.push(I),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bu(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function V0(i,e,t){let n=new Float32Array(es),s=new O(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ku(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function H0(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){let c=l.mapping,a=c===va||c===_a,u=c===Yi||c===Zi;if(a||u){let h=e.get(l),d=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return t===null&&(t=new ol(i)),h=a?t.fromEquirectangular(l,h):t.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),h.texture;if(h!==void 0)return h.texture;{let f=l.image;return a&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new ol(i)),h=a?t.fromEquirectangular(l):t.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,e.set(l,h),l.addEventListener("dispose",r),h.texture):null}}}return l}function s(l){let c=0,a=6;for(let u=0;u<a;u++)l[u]!==void 0&&c++;return c===a}function r(l){let c=l.target;c.removeEventListener("dispose",r);let a=e.get(c);a!==void 0&&(e.delete(c),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function G0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function l(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function a(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let y=0,_=M.length;y<_;y+=3){let I=M[y+0],C=M[y+1],N=M[y+2];d.push(I,C,C,N,N,I)}}else if(g!==void 0){let M=g.array;v=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let I=y+0,C=y+1,N=y+2;d.push(I,C,C,N,N,I)}}else return;let m=new(Ec(d)?Mr:Un)(d,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&a(h)}else a(h);return r.get(h)}return{get:l,update:c,getWireframeAttribute:u}}function X0(i,e,t){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function a(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)a(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=a,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function q0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,e,t){let n=new WeakMap,s=new _t;function r(o,l,c){let a=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(l);if(d===void 0||d.count!==h){let b=function(){N.dispose(),n.delete(l),l.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let _=l.attributes.position.count*y,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*I*4*h),N=new vr(C,_,I,h);N.type=Tn,N.needsUpdate=!0;let A=y*4;for(let S=0;S<h;S++){let U=m[S],V=p[S],Z=M[S],K=_*I*4*S;for(let j=0;j<U.count;j++){let J=j*A;f===!0&&(s.fromBufferAttribute(U,j),C[K+J+0]=s.x,C[K+J+1]=s.y,C[K+J+2]=s.z,C[K+J+3]=0),g===!0&&(s.fromBufferAttribute(V,j),C[K+J+4]=s.x,C[K+J+5]=s.y,C[K+J+6]=s.z,C[K+J+7]=0),v===!0&&(s.fromBufferAttribute(Z,j),C[K+J+8]=s.x,C[K+J+9]=s.y,C[K+J+10]=s.z,C[K+J+11]=Z.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new ge(_,I)},n.set(l,d),l.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<a.length;v++)f+=a[v];let g=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Y0(i,e,t,n){let s=new WeakMap;function r(c){let a=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==a&&(e.update(h),s.set(h,a)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==a&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,a))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==a&&(d.update(),s.set(d,a))}return h}function o(){s=new WeakMap}function l(c){let a=c.target;a.removeEventListener("dispose",l),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:r,dispose:o}}var rd=new Kt,Vu=new Tr(1,1),od=new vr,ad=new Xo,ld=new Sr,Hu=[],Gu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function al(i,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;qu.set(n),i.uniformMatrix2fv(this.addr,!1,qu),Nt(t,n)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),Nt(t,n)}}function tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Wu.set(n),i.uniformMatrix4fv(this.addr,!1,Wu),Nt(t,n)}}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vu.compareFunction=bc,r=Vu):r=rd,t.setTexture2D(e||r,s)}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ad,s)}function dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ld,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||od,s)}function pg(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return j0;case 35666:return K0;case 35674:return Q0;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,e){i.uniform1fv(this.addr,e)}function gg(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function xg(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function vg(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function _g(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yg(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mg(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function Sg(i,e){i.uniform2iv(this.addr,e)}function wg(i,e){i.uniform3iv(this.addr,e)}function Eg(i,e){i.uniform4iv(this.addr,e)}function Tg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function Cg(i,e){i.uniform3uiv(this.addr,e)}function Rg(i,e){i.uniform4uiv(this.addr,e)}function Ig(i,e,t){let n=this.cache,s=e.length,r=al(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rd,r[o])}function Pg(i,e,t){let n=this.cache,s=e.length,r=al(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ad,r[o])}function Lg(i,e,t){let n=this.cache,s=e.length,r=al(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ld,r[o])}function Dg(i,e,t){let n=this.cache,s=e.length,r=al(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||od,r[o])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return vg;case 35674:return _g;case 35675:return yg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pg(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}},zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function $u(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let r=Fc.exec(n),o=Fc.lastIndex,l=r[1],c=r[2]==="]",a=r[3];if(c&&(l=l|0),a===void 0||a==="["&&o+2===s){$u(t,a===void 0?new Oc(l,i,e):new Bc(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new zc(l),$u(t,h)),t=h}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ng(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Yu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fg=37297,Og=0;function Bg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Zu=new Ke;function zg(i){lt._getMatrix(Zu,lt.workingColorSpace,i);let e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ju(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bg(i.getShaderSource(e),l)}else return r}function kg(i,e){let t=zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vg(i,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case su:t="Cineon";break;case ru:t="ACESFilmic";break;case au:t="AgX";break;case Yr:t="Neutral";break;case ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rl=new O;function Hg(){lt.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function no(i){return i!==""}function ju(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(qg,Yg)}var $g=new Map;function Yg(i,e){let t=nt[e];if(t===void 0){let n=$g.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(Zg,Jg)}function Jg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ha?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function ex(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case eu:e="ENVMAP_BLENDING_MIX";break;case tu:e="ENVMAP_BLENDING_ADD";break}return e}function tx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=jg(t),a=Kg(t),u=Qg(t),h=ex(t),d=tx(t),f=Gg(t),g=Wg(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),p.length>0&&(p+=`
`)):(m=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?nt.tonemapping_pars_fragment:"",t.toneMapping!==ii?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),o=kc(o),o=ju(o,t),o=Ku(o,t),l=kc(l),l=ju(l,t),l=Ku(l,t),o=Qu(o),l=Qu(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+m+o,_=M+p+l,I=Yu(s,s.VERTEX_SHADER,y),C=Yu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(U){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(I)||"",K=s.getShaderInfoLog(C)||"",j=V.trim(),J=Z.trim(),fe=K.trim(),Q=!0,be=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,C);else{let Ee=Ju(s,I,"vertex"),me=Ju(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+Ee+`
`+me)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(J===""||fe==="")&&(be=!1);be&&(U.diagnostics={runnable:Q,programLog:j,vertexShader:{log:J,prefix:m},fragmentShader:{log:fe,prefix:p}})}s.deleteShader(I),s.deleteShader(C),A=new Xs(s,v),b=Xg(s,v)}let A;this.getUniforms=function(){return A===void 0&&N(this),A};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Fg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Og++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}var ix=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=ix++,this.code=e,this.usedTimes=0}};function sx(i,e,t,n,s,r,o){let l=new yr,c=new Vc,a=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return a.add(b),b===0?"uv":`uv${b}`}function m(b,S,U,V,Z){let K=V.fog,j=Z.geometry,J=b.isMeshStandardMaterial?V.environment:null,fe=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),Q=fe&&fe.mapping===Zr?fe.image.height:null,be=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let Ee=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=Ee!==void 0?Ee.length:0,Ve=0;j.morphAttributes.position!==void 0&&(Ve=1),j.morphAttributes.normal!==void 0&&(Ve=2),j.morphAttributes.color!==void 0&&(Ve=3);let He,Qe,et,oe;if(be){let D=zn[be];He=D.vertexShader,Qe=D.fragmentShader}else He=b.vertexShader,Qe=b.fragmentShader,c.update(b),et=c.getVertexShaderID(b),oe=c.getFragmentShaderID(b);let pe=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ue=Z.isInstancedMesh===!0,Fe=Z.isBatchedMesh===!0,tt=!!b.map,ot=!!b.matcap,z=!!fe,de=!!b.aoMap,he=!!b.lightMap,ae=!!b.bumpMap,le=!!b.normalMap,we=!!b.displacementMap,L=!!b.emissiveMap,P=!!b.metalnessMap,R=!!b.roughnessMap,F=b.anisotropy>0,w=b.clearcoat>0,x=b.dispersion>0,E=b.iridescence>0,k=b.sheen>0,ee=b.transmission>0,$=F&&!!b.anisotropyMap,ie=w&&!!b.clearcoatMap,se=w&&!!b.clearcoatNormalMap,B=w&&!!b.clearcoatRoughnessMap,W=E&&!!b.iridescenceMap,q=E&&!!b.iridescenceThicknessMap,ce=k&&!!b.sheenColorMap,Ae=k&&!!b.sheenRoughnessMap,De=!!b.specularMap,Se=!!b.specularColorMap,Je=!!b.specularIntensityMap,H=ee&&!!b.transmissionMap,xe=ee&&!!b.thicknessMap,Te=!!b.gradientMap,Ne=!!b.alphaMap,ve=b.alphaTest>0,ue=!!b.alphaHash,ke=!!b.extensions,Xe=ii;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let dt={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Qe,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&Z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,instancingMorph:Ue&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Oi,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:ot,envMap:z,envMapMode:z&&fe.mapping,envMapCubeUVHeight:Q,aoMap:de,lightMap:he,bumpMap:ae,normalMap:le,displacementMap:d&&we,emissiveMap:L,normalMapObjectSpace:le&&b.normalMapType===gu,normalMapTangentSpace:le&&b.normalMapType===nl,metalnessMap:P,roughnessMap:R,anisotropy:F,anisotropyMap:$,clearcoat:w,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:B,dispersion:x,iridescence:E,iridescenceMap:W,iridescenceThicknessMap:q,sheen:k,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:De,specularColorMap:Se,specularIntensityMap:Je,transmission:ee,transmissionMap:H,thicknessMap:xe,gradientMap:Te,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:ue,combine:b.combine,mapUv:tt&&v(b.map.channel),aoMapUv:de&&v(b.aoMap.channel),lightMapUv:he&&v(b.lightMap.channel),bumpMapUv:ae&&v(b.bumpMap.channel),normalMapUv:le&&v(b.normalMap.channel),displacementMapUv:we&&v(b.displacementMap.channel),emissiveMapUv:L&&v(b.emissiveMap.channel),metalnessMapUv:P&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:ie&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:q&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(b.sheenRoughnessMap.channel),specularMapUv:De&&v(b.specularMap.channel),specularColorMapUv:Se&&v(b.specularColorMap.channel),specularIntensityMapUv:Je&&v(b.specularIntensityMap.channel),transmissionMapUv:H&&v(b.transmissionMap.channel),thicknessMapUv:xe&&v(b.thicknessMap.channel),alphaMapUv:Ne&&v(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(le||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(tt||Ne),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:L&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=a.has(1),dt.vertexUv2s=a.has(2),dt.vertexUv3s=a.has(3),a.clear(),dt}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(M(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),S.gradientMap&&l.enable(22),b.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reversedDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.decodeVideoTextureEmissive&&l.enable(20),S.alphaToCoverage&&l.enable(21),b.push(l.mask)}function _(b){let S=g[b.type],U;if(S){let V=zn[S];U=Au.clone(V.uniforms)}else U=b.uniforms;return U}function I(b,S){let U;for(let V=0,Z=u.length;V<Z;V++){let K=u[V];if(K.cacheKey===S){U=K,++U.usedTimes;break}}return U===void 0&&(U=new nx(i,S,b,r),u.push(U)),U}function C(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function N(b){c.remove(b)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:C,releaseShaderCache:N,programs:u,dispose:A}}function rx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ox(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function td(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function l(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function a(h,d){t.length>1&&t.sort(h||ox),n.length>1&&n.sort(d||td),s.length>1&&s.sort(d||td)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:a}}function ax(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nd,i.set(n,[o])):s>=r.length?(o=new nd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hx=0;function ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dx(i){let e=new lx,t=cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new O);let s=new O,r=new je,o=new je;function l(a){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,y=0,_=0,I=0,C=0,N=0;a.sort(ux);for(let b=0,S=a.length;b<S;b++){let U=a[b],V=U.color,Z=U.intensity,K=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=V.r*Z,h+=V.g*Z,d+=V.b*Z;else if(U.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(U.sh.coefficients[J],Z);N++}else if(U.isDirectionalLight){let J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let fe=U.shadow,Q=t.get(U);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=U.shadow.matrix,M++}n.directional[f]=J,f++}else if(U.isSpotLight){let J=e.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(V).multiplyScalar(Z),J.distance=K,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,n.spot[v]=J;let fe=U.shadow;if(U.map&&(n.spotLightMap[I]=U.map,I++,fe.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[v]=fe.matrix,U.castShadow){let Q=t.get(U);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=j,_++}v++}else if(U.isRectAreaLight){let J=e.get(U);J.color.copy(V).multiplyScalar(Z),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=J,m++}else if(U.isPointLight){let J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){let fe=U.shadow,Q=t.get(U);Q.shadowIntensity=fe.intensity,Q.shadowBias=fe.bias,Q.shadowNormalBias=fe.normalBias,Q.shadowRadius=fe.radius,Q.shadowMapSize=fe.mapSize,Q.shadowCameraNear=fe.camera.near,Q.shadowCameraFar=fe.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=J,g++}else if(U.isHemisphereLight){let J=e.get(U);J.skyColor.copy(U.color).multiplyScalar(Z),J.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==M||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==I||A.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,A.directionalLength=f,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=M,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=I,A.numLightProbes=N,n.version=hx++)}function c(a,u){let h=0,d=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,M=a.length;p<M;p++){let y=a[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:l,setupView:c,state:n}}function id(i){let e=new dx(i),t=[],n=[];function s(u){a.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function l(){e.setup(t)}function c(u){e.setupView(t,u)}let a={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function fx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new id(i),e.set(s,[l])):r>=o.length?(l=new id(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(i,e,t){let n=new Is,s=new ge,r=new ge,o=new _t,l=new ea({depthPacking:mu}),c=new ta,a={},u=t.maxTextureSize,h={[Jn]:Vt,[Vt]:Jn,[On]:On},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:px,fragmentShader:mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let p=this.type;this.render=function(C,N,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ni),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Z=p!==Fn&&this.type===Fn,K=p===Fn&&this.type!==Fn;for(let j=0,J=C.length;j<J;j++){let fe=C[j],Q=fe.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let be=Q.getFrameExtents();if(s.multiply(be),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/be.x),s.x=r.x*be.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/be.y),s.y=r.y*be.y,Q.mapSize.y=r.y)),Q.map===null||Z===!0||K===!0){let me=this.type!==Fn?{minFilter:kt,magFilter:kt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ln(s.x,s.y,me),Q.map.texture.name=fe.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let Ee=Q.getViewportCount();for(let me=0;me<Ee;me++){let Ve=Q.getViewport(me);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),V.viewport(o),Q.updateMatrices(fe,me),n=Q.getFrustum(),_(N,A,Q.camera,fe,this.type)}Q.isPointLightShadow!==!0&&this.type===Fn&&M(Q,A),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,U)};function M(C,N){let A=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,A,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,A,f,v,null)}function y(C,N,A,b){let S=null,U=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)S=U;else if(S=A.isPointLight===!0?c:l,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let V=S.uuid,Z=N.uuid,K=a[V];K===void 0&&(K={},a[V]=K);let j=K[Z];j===void 0&&(j=S.clone(),K[Z]=j,N.addEventListener("dispose",I)),S=j}if(S.visible=N.visible,S.wireframe=N.wireframe,b===Fn?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:h[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=i.properties.get(S);V.light=A}return S}function _(C,N,A,b,S){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let Z=e.update(C),K=C.material;if(Array.isArray(K)){let j=Z.groups;for(let J=0,fe=j.length;J<fe;J++){let Q=j[J],be=K[Q.materialIndex];if(be&&be.visible){let Ee=y(C,be,b,S);C.onBeforeShadow(i,C,N,A,Z,Ee,Q),i.renderBufferDirect(A,null,Z,Ee,C,Q),C.onAfterShadow(i,C,N,A,Z,Ee,Q)}}}else if(K.visible){let j=y(C,K,b,S);C.onBeforeShadow(i,C,N,A,Z,j,null),i.renderBufferDirect(A,null,Z,j,C,null),C.onAfterShadow(i,C,N,A,Z,j,null)}}let V=C.children;for(let Z=0,K=V.length;Z<K;Z++)_(V[Z],N,A,b,S)}function I(C){C.target.removeEventListener("dispose",I);for(let A in a){let b=a[A],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var xx={[ua]:da,[fa]:ga,[pa]:xa,[Fi]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:Fi};function vx(i,e){function t(){let H=!1,xe=new _t,Te=null,Ne=new _t(0,0,0,0);return{setMask:function(ve){Te!==ve&&!H&&(i.colorMask(ve,ve,ve,ve),Te=ve)},setLocked:function(ve){H=ve},setClear:function(ve,ue,ke,Xe,dt){dt===!0&&(ve*=Xe,ue*=Xe,ke*=Xe),xe.set(ve,ue,ke,Xe),Ne.equals(xe)===!1&&(i.clearColor(ve,ue,ke,Xe),Ne.copy(xe))},reset:function(){H=!1,Te=null,Ne.set(-1,0,0,0)}}}function n(){let H=!1,xe=!1,Te=null,Ne=null,ve=null;return{setReversed:function(ue){if(xe!==ue){let ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;let Xe=ve;ve=null,this.setClear(Xe)}},getReversed:function(){return xe},setTest:function(ue){ue?pe(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ue){Te!==ue&&!H&&(i.depthMask(ue),Te=ue)},setFunc:function(ue){if(xe&&(ue=xx[ue]),Ne!==ue){switch(ue){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=ue}},setLocked:function(ue){H=ue},setClear:function(ue){ve!==ue&&(xe&&(ue=1-ue),i.clearDepth(ue),ve=ue)},reset:function(){H=!1,Te=null,Ne=null,ve=null,xe=!1}}}function s(){let H=!1,xe=null,Te=null,Ne=null,ve=null,ue=null,ke=null,Xe=null,dt=null;return{setTest:function(D){H||(D?pe(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(D){xe!==D&&!H&&(i.stencilMask(D),xe=D)},setFunc:function(D,re,Re){(Te!==D||Ne!==re||ve!==Re)&&(i.stencilFunc(D,re,Re),Te=D,Ne=re,ve=Re)},setOp:function(D,re,Re){(ue!==D||ke!==re||Xe!==Re)&&(i.stencilOp(D,re,Re),ue=D,ke=re,Xe=Re)},setLocked:function(D){H=D},setClear:function(D){dt!==D&&(i.clearStencil(D),dt=D)},reset:function(){H=!1,xe=null,Te=null,Ne=null,ve=null,ue=null,ke=null,Xe=null,dt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,a=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,y=null,_=null,I=null,C=null,N=new Ye(0,0,0),A=0,b=!1,S=null,U=null,V=null,Z=null,K=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,fe=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=fe>=1):Q.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=fe>=2);let be=null,Ee={},me=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),He=new _t().fromArray(me),Qe=new _t().fromArray(Ve);function et(H,xe,Te,Ne){let ve=new Uint8Array(4),ue=i.createTexture();i.bindTexture(H,ue),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<Te;ke++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(xe+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ue}let oe={};oe[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Fi),ae(!1),le(lc),pe(i.CULL_FACE),de(ni);function pe(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Me(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ue(H,xe){return h[H]!==xe?(i.bindFramebuffer(H,xe),h[H]=xe,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Fe(H,xe){let Te=f,Ne=!1;if(H){Te=d.get(xe),Te===void 0&&(Te=[],d.set(xe,Te));let ve=H.textures;if(Te.length!==ve.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,ke=ve.length;ue<ke;ue++)Te[ue]=i.COLOR_ATTACHMENT0+ue;Te.length=ve.length,Ne=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Te)}function tt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let ot={[pi]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};ot[zh]=i.MIN,ot[kh]=i.MAX;let z={[Vh]:i.ZERO,[Hh]:i.ONE,[Gh]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function de(H,xe,Te,Ne,ve,ue,ke,Xe,dt,D){if(H===ni){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),H!==Fh){if(H!==m||D!==b){if((p!==pi||_!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,_=pi),D)switch(H){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,y=null,I=null,C=null,N.set(0,0,0),A=0,m=H,b=D}return}ve=ve||xe,ue=ue||Te,ke=ke||Ne,(xe!==p||ve!==_)&&(i.blendEquationSeparate(ot[xe],ot[ve]),p=xe,_=ve),(Te!==M||Ne!==y||ue!==I||ke!==C)&&(i.blendFuncSeparate(z[Te],z[Ne],z[ue],z[ke]),M=Te,y=Ne,I=ue,C=ke),(Xe.equals(N)===!1||dt!==A)&&(i.blendColor(Xe.r,Xe.g,Xe.b,dt),N.copy(Xe),A=dt),m=H,b=!1}function he(H,xe){H.side===On?Me(i.CULL_FACE):pe(i.CULL_FACE);let Te=H.side===Vt;xe&&(Te=!Te),ae(Te),H.blending===Ni&&H.transparent===!1?de(ni):de(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ne=H.stencilWrite;l.setTest(Ne),Ne&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),L(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){S!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),S=H)}function le(H){H!==Uh?(pe(i.CULL_FACE),H!==U&&(H===lc?i.cullFace(i.BACK):H===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=H}function we(H){H!==V&&(J&&i.lineWidth(H),V=H)}function L(H,xe,Te){H?(pe(i.POLYGON_OFFSET_FILL),(Z!==xe||K!==Te)&&(i.polygonOffset(xe,Te),Z=xe,K=Te)):Me(i.POLYGON_OFFSET_FILL)}function P(H){H?pe(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function R(H){H===void 0&&(H=i.TEXTURE0+j-1),be!==H&&(i.activeTexture(H),be=H)}function F(H,xe,Te){Te===void 0&&(be===null?Te=i.TEXTURE0+j-1:Te=be);let Ne=Ee[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},Ee[Te]=Ne),(Ne.type!==H||Ne.texture!==xe)&&(be!==Te&&(i.activeTexture(Te),be=Te),i.bindTexture(H,xe||oe[H]),Ne.type=H,Ne.texture=xe)}function w(){let H=Ee[be];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function B(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(H){He.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),He.copy(H))}function Ae(H){Qe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Qe.copy(H))}function De(H,xe){let Te=a.get(xe);Te===void 0&&(Te=new WeakMap,a.set(xe,Te));let Ne=Te.get(H);Ne===void 0&&(Ne=i.getUniformBlockIndex(xe,H.name),Te.set(H,Ne))}function Se(H,xe){let Ne=a.get(xe).get(H);c.get(xe)!==Ne&&(i.uniformBlockBinding(xe,Ne,H.__bindingPointIndex),c.set(xe,Ne))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},be=null,Ee={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,y=null,_=null,I=null,C=null,N=new Ye(0,0,0),A=0,b=!1,S=null,U=null,V=null,Z=null,K=null,He.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:pe,disable:Me,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:tt,setBlending:de,setMaterial:he,setFlipSided:ae,setCullFace:le,setLineWidth:we,setPolygonOffset:L,setScissorTest:P,activeTexture:R,bindTexture:F,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:E,texImage2D:W,texImage3D:q,updateUBOMapping:De,uniformBlockBinding:Se,texStorage2D:se,texStorage3D:B,texSubImage2D:k,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:ie,scissor:ce,viewport:Ae,reset:Je}}function _x(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new ge,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):xr("canvas")}function v(w,x,E){let k=1,ee=F(w);if((ee.width>E||ee.height>E)&&(k=E/Math.max(ee.width,ee.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(k*ee.width),ie=Math.floor(k*ee.height);h===void 0&&(h=g($,ie));let se=x?g($,ie):h;return se.width=$,se.height=ie,se.getContext("2d").drawImage(w,0,0,$,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+ie+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,E,k,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===i.RED&&(E===i.FLOAT&&($=i.R32F),E===i.HALF_FLOAT&&($=i.R16F),E===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(E===i.UNSIGNED_BYTE&&($=i.R8UI),E===i.UNSIGNED_SHORT&&($=i.R16UI),E===i.UNSIGNED_INT&&($=i.R32UI),E===i.BYTE&&($=i.R8I),E===i.SHORT&&($=i.R16I),E===i.INT&&($=i.R32I)),x===i.RG&&(E===i.FLOAT&&($=i.RG32F),E===i.HALF_FLOAT&&($=i.RG16F),E===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(E===i.UNSIGNED_BYTE&&($=i.RG8UI),E===i.UNSIGNED_SHORT&&($=i.RG16UI),E===i.UNSIGNED_INT&&($=i.RG32UI),E===i.BYTE&&($=i.RG8I),E===i.SHORT&&($=i.RG16I),E===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(E===i.UNSIGNED_BYTE&&($=i.RGB8UI),E===i.UNSIGNED_SHORT&&($=i.RGB16UI),E===i.UNSIGNED_INT&&($=i.RGB32UI),E===i.BYTE&&($=i.RGB8I),E===i.SHORT&&($=i.RGB16I),E===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(E===i.UNSIGNED_BYTE&&($=i.RGBA8UI),E===i.UNSIGNED_SHORT&&($=i.RGBA16UI),E===i.UNSIGNED_INT&&($=i.RGBA32UI),E===i.BYTE&&($=i.RGBA8I),E===i.SHORT&&($=i.RGBA16I),E===i.INT&&($=i.RGBA32I)),x===i.RGB&&(E===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),E===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let ie=ee?mr:lt.getTransfer(k);E===i.FLOAT&&($=i.RGBA32F),E===i.HALF_FLOAT&&($=i.RGBA16F),E===i.UNSIGNED_BYTE&&($=ie===ut?i.SRGB8_ALPHA8:i.RGBA8),E===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),E===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(w,x){let E;return w?x===null||x===yi||x===Vs?E=i.DEPTH24_STENCIL8:x===Tn?E=i.DEPTH32F_STENCIL8:x===zs&&(E=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===Vs?E=i.DEPTH_COMPONENT24:x===Tn?E=i.DEPTH_COMPONENT32F:x===zs&&(E=i.DEPTH_COMPONENT16),E}function I(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&u.delete(x)}function N(w){let x=w.target;x.removeEventListener("dispose",N),S(x)}function A(w){let x=n.get(w);if(x.__webglInit===void 0)return;let E=w.source,k=d.get(E);if(k){let ee=k[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(w),Object.keys(k).length===0&&d.delete(E)}n.remove(w)}function b(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let E=w.source,k=d.get(E);delete k[x.__cacheKey],o.memory.textures--}function S(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let ee=0;ee<x.__webglFramebuffer[k].length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[k][ee]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let E=w.textures;for(let k=0,ee=E.length;k<ee;k++){let $=n.get(E[k]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(E[k])}n.remove(w)}let U=0;function V(){U=0}function Z(){let w=U;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),U+=1,w}function K(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function j(w,x){let E=n.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&E.__version!==w.version){let k=w.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(E,w,x);return}}else w.isExternalTexture&&(E.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,E.__webglTexture,i.TEXTURE0+x)}function J(w,x){let E=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&E.__version!==w.version){oe(E,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,E.__webglTexture,i.TEXTURE0+x)}function fe(w,x){let E=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&E.__version!==w.version){oe(E,w,x);return}t.bindTexture(i.TEXTURE_3D,E.__webglTexture,i.TEXTURE0+x)}function Q(w,x){let E=n.get(w);if(w.version>0&&E.__version!==w.version){pe(E,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+x)}let be={[zo]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},Ee={[kt]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},me={[xu]:i.NEVER,[Su]:i.ALWAYS,[vu]:i.LESS,[bc]:i.LEQUAL,[_u]:i.EQUAL,[bu]:i.GEQUAL,[yu]:i.GREATER,[Mu]:i.NOTEQUAL};function Ve(w,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===ya||x.magFilter===Jr||x.magFilter===Bn||x.minFilter===ln||x.minFilter===ya||x.minFilter===Jr||x.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,be[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,be[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,be[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ee[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==Jr&&x.minFilter!==Bn||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let E=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function He(w,x){let E=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let k=x.source,ee=d.get(k);ee===void 0&&(ee={},d.set(k,ee));let $=K(x);if($!==w.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,E=!0),ee[$].usedTimes++;let ie=ee[w.__cacheKey];ie!==void 0&&(ee[w.__cacheKey].usedTimes--,ie.usedTimes===0&&b(x)),w.__cacheKey=$,w.__webglTexture=ee[$].texture}return E}function Qe(w,x,E){return Math.floor(Math.floor(w/E)/x)}function et(w,x,E,k){let $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,E,k,x.data);else{$.sort((q,ce)=>q.start-ce.start);let ie=0;for(let q=1;q<$.length;q++){let ce=$[ie],Ae=$[q],De=ce.start+ce.count,Se=Qe(Ae.start,x.width,4),Je=Qe(ce.start,x.width,4);Ae.start<=De+1&&Se===Je&&Qe(Ae.start+Ae.count-1,x.width,4)===Se?ce.count=Math.max(ce.count,Ae.start+Ae.count-ce.start):(++ie,$[ie]=Ae)}$.length=ie+1;let se=i.getParameter(i.UNPACK_ROW_LENGTH),B=i.getParameter(i.UNPACK_SKIP_PIXELS),W=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let q=0,ce=$.length;q<ce;q++){let Ae=$[q],De=Math.floor(Ae.start/4),Se=Math.ceil(Ae.count/4),Je=De%x.width,H=Math.floor(De/x.width),xe=Se,Te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,Je,H,xe,Te,E,k,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,B),i.pixelStorei(i.UNPACK_SKIP_ROWS,W)}}function oe(w,x,E){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);let ee=He(w,x),$=x.source;t.bindTexture(k,w.__webglTexture,i.TEXTURE0+E);let ie=n.get($);if($.version!==ie.__version||ee===!0){t.activeTexture(i.TEXTURE0+E);let se=lt.getPrimaries(lt.workingColorSpace),B=x.colorSpace===si?null:lt.getPrimaries(x.colorSpace),W=x.colorSpace===si||se===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let q=v(x.image,!1,s.maxTextureSize);q=R(x,q);let ce=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),De=y(x.internalFormat,ce,Ae,x.colorSpace,x.isVideoTexture);Ve(k,x);let Se,Je=x.mipmaps,H=x.isVideoTexture!==!0,xe=ie.__version===void 0||ee===!0,Te=$.dataReady,Ne=I(x,q);if(x.isDepthTexture)De=_(x.format===Hs,x.type),xe&&(H?t.texStorage2D(i.TEXTURE_2D,1,De,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,De,q.width,q.height,0,ce,Ae,null));else if(x.isDataTexture)if(Je.length>0){H&&xe&&t.texStorage2D(i.TEXTURE_2D,Ne,De,Je[0].width,Je[0].height);for(let ve=0,ue=Je.length;ve<ue;ve++)Se=Je[ve],H?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,ce,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ve,De,Se.width,Se.height,0,ce,Ae,Se.data);x.generateMipmaps=!1}else H?(xe&&t.texStorage2D(i.TEXTURE_2D,Ne,De,q.width,q.height),Te&&et(x,q,ce,Ae)):t.texImage2D(i.TEXTURE_2D,0,De,q.width,q.height,0,ce,Ae,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,De,Je[0].width,Je[0].height,q.depth);for(let ve=0,ue=Je.length;ve<ue;ve++)if(Se=Je[ve],x.format!==hn)if(ce!==null)if(H){if(Te)if(x.layerUpdates.size>0){let ke=Ic(Se.width,Se.height,x.format,x.type);for(let Xe of x.layerUpdates){let dt=Se.data.subarray(Xe*ke/Se.data.BYTES_PER_ELEMENT,(Xe+1)*ke/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Xe,Se.width,Se.height,1,ce,dt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,q.depth,ce,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,De,Se.width,Se.height,q.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,q.depth,ce,Ae,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,De,Se.width,Se.height,q.depth,0,ce,Ae,Se.data)}else{H&&xe&&t.texStorage2D(i.TEXTURE_2D,Ne,De,Je[0].width,Je[0].height);for(let ve=0,ue=Je.length;ve<ue;ve++)Se=Je[ve],x.format!==hn?ce!==null?H?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,ce,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,ce,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ve,De,Se.width,Se.height,0,ce,Ae,Se.data)}else if(x.isDataArrayTexture)if(H){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,De,q.width,q.height,q.depth),Te)if(x.layerUpdates.size>0){let ve=Ic(q.width,q.height,x.format,x.type);for(let ue of x.layerUpdates){let ke=q.data.subarray(ue*ve/q.data.BYTES_PER_ELEMENT,(ue+1)*ve/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,q.width,q.height,1,ce,Ae,ke)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ce,Ae,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,q.width,q.height,q.depth,0,ce,Ae,q.data);else if(x.isData3DTexture)H?(xe&&t.texStorage3D(i.TEXTURE_3D,Ne,De,q.width,q.height,q.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ce,Ae,q.data)):t.texImage3D(i.TEXTURE_3D,0,De,q.width,q.height,q.depth,0,ce,Ae,q.data);else if(x.isFramebufferTexture){if(xe)if(H)t.texStorage2D(i.TEXTURE_2D,Ne,De,q.width,q.height);else{let ve=q.width,ue=q.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(i.TEXTURE_2D,ke,De,ve,ue,0,ce,Ae,null),ve>>=1,ue>>=1}}else if(Je.length>0){if(H&&xe){let ve=F(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ne,De,ve.width,ve.height)}for(let ve=0,ue=Je.length;ve<ue;ve++)Se=Je[ve],H?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ce,Ae,Se):t.texImage2D(i.TEXTURE_2D,ve,De,ce,Ae,Se);x.generateMipmaps=!1}else if(H){if(xe){let ve=F(q);t.texStorage2D(i.TEXTURE_2D,Ne,De,ve.width,ve.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ae,q)}else t.texImage2D(i.TEXTURE_2D,0,De,ce,Ae,q);m(x)&&p(k),ie.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pe(w,x,E){if(x.image.length!==6)return;let k=He(w,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+E);let $=n.get(ee);if(ee.version!==$.__version||k===!0){t.activeTexture(i.TEXTURE0+E);let ie=lt.getPrimaries(lt.workingColorSpace),se=x.colorSpace===si?null:lt.getPrimaries(x.colorSpace),B=x.colorSpace===si||ie===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let W=x.isCompressedTexture||x.image[0].isCompressedTexture,q=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let ue=0;ue<6;ue++)!W&&!q?ce[ue]=v(x.image[ue],!0,s.maxCubemapSize):ce[ue]=q?x.image[ue].image:x.image[ue],ce[ue]=R(x,ce[ue]);let Ae=ce[0],De=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),Je=y(x.internalFormat,De,Se,x.colorSpace),H=x.isVideoTexture!==!0,xe=$.__version===void 0||k===!0,Te=ee.dataReady,Ne=I(x,Ae);Ve(i.TEXTURE_CUBE_MAP,x);let ve;if(W){H&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Je,Ae.width,Ae.height);for(let ue=0;ue<6;ue++){ve=ce[ue].mipmaps;for(let ke=0;ke<ve.length;ke++){let Xe=ve[ke];x.format!==hn?De!==null?H?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,Xe.width,Xe.height,De,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,Xe.width,Xe.height,De,Se,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Je,Xe.width,Xe.height,0,De,Se,Xe.data)}}}else{if(ve=x.mipmaps,H&&xe){ve.length>0&&Ne++;let ue=F(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(q){H?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ce[ue].width,ce[ue].height,De,Se,ce[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Je,ce[ue].width,ce[ue].height,0,De,Se,ce[ue].data);for(let ke=0;ke<ve.length;ke++){let dt=ve[ke].image[ue].image;H?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,dt.width,dt.height,De,Se,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Je,dt.width,dt.height,0,De,Se,dt.data)}}else{H?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,De,Se,ce[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Je,De,Se,ce[ue]);for(let ke=0;ke<ve.length;ke++){let Xe=ve[ke];H?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,De,Se,Xe.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Je,De,Se,Xe.image[ue])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Me(w,x,E,k,ee,$){let ie=r.convert(E.format,E.colorSpace),se=r.convert(E.type),B=y(E.internalFormat,ie,se,E.colorSpace),W=n.get(x),q=n.get(E);if(q.__renderTarget=x,!W.__hasExternalTextures){let ce=Math.max(1,x.width>>$),Ae=Math.max(1,x.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,B,ce,Ae,x.depth,0,ie,se,null):t.texImage2D(ee,$,B,ce,Ae,0,ie,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),L(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,ee,q.__webglTexture,0,we(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,ee,q.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,x,E){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let k=x.depthTexture,ee=k&&k.isDepthTexture?k.type:null,$=_(x.stencilBuffer,ee),ie=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=we(x);L(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,$,x.width,x.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,w)}else{let k=x.textures;for(let ee=0;ee<k.length;ee++){let $=k[ee],ie=r.convert($.format,$.colorSpace),se=r.convert($.type),B=y($.internalFormat,ie,se,$.colorSpace),W=we(x);E&&L(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,B,x.width,x.height):L(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,B,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let ee=k.__webglTexture,$=we(x);if(x.depthTexture.format===bs)L(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Hs)L(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function tt(w){let x=n.get(w),E=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",ee)};k.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=k}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");let k=w.texture.mipmaps;k&&k.length>0?Fe(x.__webglFramebuffer[0],w):Fe(x.__webglFramebuffer,w)}else if(E){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),Ue(x.__webglDepthbuffer[k],w,!1);else{let ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ue(x.__webglDepthbuffer,w,!1);else{let ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(w,x,E){let k=n.get(w);x!==void 0&&Me(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),E!==void 0&&tt(w)}function z(w){let x=w.texture,E=n.get(w),k=n.get(x);w.addEventListener("dispose",N);let ee=w.textures,$=w.isWebGLCubeRenderTarget===!0,ie=ee.length>1;if(ie||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,o.memory.textures++),$){E.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer[se]=[];for(let B=0;B<x.mipmaps.length;B++)E.__webglFramebuffer[se][B]=i.createFramebuffer()}else E.__webglFramebuffer[se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)E.__webglFramebuffer[se]=i.createFramebuffer()}else E.__webglFramebuffer=i.createFramebuffer();if(ie)for(let se=0,B=ee.length;se<B;se++){let W=n.get(ee[se]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&L(w)===!1){E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let se=0;se<ee.length;se++){let B=ee[se];E.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,E.__webglColorRenderbuffer[se]);let W=r.convert(B.format,B.colorSpace),q=r.convert(B.type),ce=y(B.internalFormat,W,q,B.colorSpace,w.isXRRenderTarget===!0),Ae=we(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,E.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(E.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let B=0;B<x.mipmaps.length;B++)Me(E.__webglFramebuffer[se][B],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,B);else Me(E.__webglFramebuffer[se],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let se=0,B=ee.length;se<B;se++){let W=ee[se],q=n.get(W),ce=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),Ve(ce,W),Me(E.__webglFramebuffer,w,W,i.COLOR_ATTACHMENT0+se,ce,0),m(W)&&p(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,k.__webglTexture),Ve(se,x),x.mipmaps&&x.mipmaps.length>0)for(let B=0;B<x.mipmaps.length;B++)Me(E.__webglFramebuffer[B],w,x,i.COLOR_ATTACHMENT0,se,B);else Me(E.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),t.unbindTexture()}w.depthBuffer&&tt(w)}function de(w){let x=w.textures;for(let E=0,k=x.length;E<k;E++){let ee=x[E];if(m(ee)){let $=M(w),ie=n.get(ee).__webglTexture;t.bindTexture($,ie),p($),t.unbindTexture()}}}let he=[],ae=[];function le(w){if(w.samples>0){if(L(w)===!1){let x=w.textures,E=w.width,k=w.height,ee=i.COLOR_BUFFER_BIT,$=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(w),se=x.length>1;if(se)for(let W=0;W<x.length;W++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let B=w.texture.mipmaps;B&&B.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let W=0;W<x.length;W++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[W]);let q=n.get(x[W]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,E,k,0,0,E,k,ee,i.NEAREST),c===!0&&(he.length=0,ae.length=0,he.push(i.COLOR_ATTACHMENT0+W),w.depthBuffer&&w.resolveDepthBuffer===!1&&(he.push($),ae.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let W=0;W<x.length;W++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,ie.__webglColorRenderbuffer[W]);let q=n.get(x[W]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function we(w){return Math.min(s.maxSamples,w.samples)}function L(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function R(w,x){let E=w.colorSpace,k=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||E!==Oi&&E!==si&&(lt.getTransfer(E)===ut?(k!==hn||ee!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",E)),x}function F(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(a.width=w.naturalWidth||w.width,a.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(a.width=w.displayWidth,a.height=w.displayHeight):(a.width=w.width,a.height=w.height),a}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=Q,this.rebindTextures=ot,this.setupRenderTarget=z,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=L}function yx(i,e){function t(n,s=si){let r,o=lt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===yc)return i.RGB;if(n===hn)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===jr)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===Mc)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Kr||n===Qr||n===eo||n===to)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ca||n===Ra||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===$a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Ka||n===Qa||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:Mx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Pn{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,a=null,u=null,h=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Gc,p={},M=t.getContextAttributes(),y=null,_=null,I=[],C=[],N=new ge,A=null,b=new zt;b.viewport=new _t;let S=new zt;S.viewport=new _t;let U=[b,S],V=new aa,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let pe=I[oe];return pe===void 0&&(pe=new Ts,I[oe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(oe){let pe=I[oe];return pe===void 0&&(pe=new Ts,I[oe]=pe),pe.getGripSpace()},this.getHand=function(oe){let pe=I[oe];return pe===void 0&&(pe=new Ts,I[oe]=pe),pe.getHandSpace()};function j(oe){let pe=C.indexOf(oe.inputSource);if(pe===-1)return;let Me=I[pe];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,a||o),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",fe);for(let oe=0;oe<I.length;oe++){let pe=C[oe];pe!==null&&(C[oe]=null,I[oe].disconnect(pe))}Z=null,K=null,m.reset();for(let oe in p)delete p[oe];e.setRenderTarget(y),f=null,d=null,h=null,s=null,_=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(oe){a=oe},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",fe),M.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?Hs:bs,Ue=M.stencil?Vs:yi);let tt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ln(d.textureWidth,d.textureHeight,{format:hn,type:En,depthTexture:new Tr(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ln(f.framebufferWidth,f.framebufferHeight,{format:hn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await s.requestReferenceSpace(l),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function fe(oe){for(let pe=0;pe<oe.removed.length;pe++){let Me=oe.removed[pe],Ue=C.indexOf(Me);Ue>=0&&(C[Ue]=null,I[Ue].disconnect(Me))}for(let pe=0;pe<oe.added.length;pe++){let Me=oe.added[pe],Ue=C.indexOf(Me);if(Ue===-1){for(let tt=0;tt<I.length;tt++)if(tt>=C.length){C.push(Me),Ue=tt;break}else if(C[tt]===null){C[tt]=Me,Ue=tt;break}if(Ue===-1)break}let Fe=I[Ue];Fe&&Fe.connect(Me)}}let Q=new O,be=new O;function Ee(oe,pe,Me){Q.setFromMatrixPosition(pe.matrixWorld),be.setFromMatrixPosition(Me.matrixWorld);let Ue=Q.distanceTo(be),Fe=pe.projectionMatrix.elements,tt=Me.projectionMatrix.elements,ot=Fe[14]/(Fe[10]-1),z=Fe[14]/(Fe[10]+1),de=(Fe[9]+1)/Fe[5],he=(Fe[9]-1)/Fe[5],ae=(Fe[8]-1)/Fe[0],le=(tt[8]+1)/tt[0],we=ot*ae,L=ot*le,P=Ue/(-ae+le),R=P*-ae;if(pe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(R),oe.translateZ(P),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let F=ot+P,w=z+P,x=we-R,E=L+(Ue-R),k=de*z/w*F,ee=he*z/w*F;oe.projectionMatrix.makePerspective(x,E,k,ee,F,w),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,pe){pe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(pe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let pe=oe.near,Me=oe.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),V.near=S.near=b.near=pe,V.far=S.far=b.far=Me,(Z!==V.near||K!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),Z=V.near,K=V.far),V.layers.mask=oe.layers.mask|6,b.layers.mask=V.layers.mask&3,S.layers.mask=V.layers.mask&5;let Ue=oe.parent,Fe=V.cameras;me(V,Ue);for(let tt=0;tt<Fe.length;tt++)me(Fe[tt],Ue);Fe.length===2?Ee(V,b,S):V.projectionMatrix.copy(b.projectionMatrix),Ve(oe,V,Ue)};function Ve(oe,pe,Me){Me===null?oe.matrix.copy(pe.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(pe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ss*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(oe){c=oe,d!==null&&(d.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(oe){return p[oe]};let He=null;function Qe(oe,pe){if(u=pe.getViewerPose(a||o),g=pe,u!==null){let Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Ue=!0);for(let z=0;z<Me.length;z++){let de=Me[z],he=null;if(f!==null)he=f.getViewport(de);else{let le=h.getViewSubImage(d,de);he=le.viewport,z===0&&(e.setRenderTargetTextures(_,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(_))}let ae=U[z];ae===void 0&&(ae=new zt,ae.layers.enable(z),ae.viewport=new _t,U[z]=ae),ae.matrix.fromArray(de.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(de.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(he.x,he.y,he.width,he.height),z===0&&(V.matrix.copy(ae.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ue===!0&&V.cameras.push(ae)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let z=h.getDepthInformation(Me[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let z=0;z<Me.length;z++){let de=Me[z].camera;if(de){let he=p[de];he||(he=new Ar,p[de]=he);let ae=h.getCameraImage(de);he.sourceTexture=ae}}}}for(let Me=0;Me<I.length;Me++){let Ue=C[Me],Fe=I[Me];Ue!==null&&Fe!==void 0&&Fe.update(Ue,pe,a||o)}He&&He(oe,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let et=new sd;et.setAnimationLoop(Qe),this.setAnimationLoop=function(oe){He=oe},this.dispose=function(){}}},Ki=new $t,Sx=new je;function wx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,Ki.copy(_),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(Ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ex(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let _=y.program;n.uniformBlockBinding(M,_)}function a(M,y){let _=s[M.id];_===void 0&&(g(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(M,I);let C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function u(M){let y=h();M.__bindingPointIndex=y;let _=i.createBuffer(),I=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let M=0;M<l;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],_=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,N=_.length;C<N;C++){let A=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,S=A.length;b<S;b++){let U=A[b];if(f(U,C,b,I)===!0){let V=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value],K=0;for(let j=0;j<Z.length;j++){let J=Z[j],fe=v(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+K,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,K),K+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,_,I){let C=M.value,N=y+"_"+_;if(I[N]===void 0)return typeof C=="number"||typeof C=="boolean"?I[N]=C:I[N]=C.clone(),!0;{let A=I[N];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return I[N]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(M){let y=M.uniforms,_=0,I=16;for(let N=0,A=y.length;N<A;N++){let b=Array.isArray(y[N])?y[N]:[y[N]];for(let S=0,U=b.length;S<U;S++){let V=b[S],Z=Array.isArray(V.value)?V.value:[V.value];for(let K=0,j=Z.length;K<j;K++){let J=Z[K],fe=v(J),Q=_%I,be=Q%fe.boundary,Ee=Q+be;_+=be,Ee!==0&&I-Ee<fe.storage&&(_+=I-Ee),V.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=fe.storage}}}let C=_%I;return C>0&&(_+=I-C),M.__size=_,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:a,dispose:p}}var io=class{constructor(e={}){let{canvas:t=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,I=!1;this._outputColorSpace=Ct;let C=0,N=0,A=null,b=-1,S=null,U=new _t,V=new _t,Z=null,K=new Ye(0),j=0,J=t.width,fe=t.height,Q=1,be=null,Ee=null,me=new _t(0,0,J,fe),Ve=new _t(0,0,J,fe),He=!1,Qe=new Is,et=!1,oe=!1,pe=new je,Me=new O,Ue=new _t,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function ot(){return A===null?Q:1}let z=n;function de(T,X){return t.getContext(T,X)}try{let T={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let X="webgl2";if(z=de(X,T),z===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,ae,le,we,L,P,R,F,w,x,E,k,ee,$,ie,se,B,W,q,ce,Ae,De,Se,Je;function H(){he=new G0(z),he.init(),De=new yx(z,he),ae=new F0(z,he,e,De),le=new vx(z,he),ae.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),we=new q0(z),L=new rx,P=new _x(z,he,le,L,ae,De,we),R=new B0(_),F=new H0(_),w=new Kf(z),Se=new U0(z,w),x=new W0(z,w,we,Se),E=new Y0(z,x,w,we),q=new $0(z,ae,P),se=new O0(L),k=new sx(_,R,F,he,ae,Se,se),ee=new wx(_,L),$=new ax,ie=new fx(he),W=new D0(_,R,F,le,E,f,c),B=new gx(_,E,ae),Je=new Ex(z,we,ae,le),ce=new N0(z,he,we),Ae=new X0(z,he,we),we.programs=k.programs,_.capabilities=ae,_.extensions=he,_.properties=L,_.renderLists=$,_.shadowMap=B,_.state=le,_.info=we}H();let xe=new Wc(_,z);this.xr=xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(J,fe,!1))},this.getSize=function(T){return T.set(J,fe)},this.setSize=function(T,X,te=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,fe=X,t.width=Math.floor(T*Q),t.height=Math.floor(X*Q),te===!0&&(t.style.width=T+"px",t.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(J*Q,fe*Q).floor()},this.setDrawingBufferSize=function(T,X,te){J=T,fe=X,Q=te,t.width=Math.floor(T*te),t.height=Math.floor(X*te),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,X,te,ne){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,X,te,ne),le.viewport(U.copy(me).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,X,te,ne){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,X,te,ne),le.scissor(V.copy(Ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){le.setScissorTest(He=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,te=!0){let ne=0;if(T){let G=!1;if(A!==null){let _e=A.texture.format;G=_e===Ta||_e===Ea||_e===wa}if(G){let _e=A.texture.type,Ce=_e===En||_e===yi||_e===zs||_e===Vs||_e===ba||_e===Sa,Be=W.getClearColor(),Oe=W.getClearAlpha(),qe=Be.r,Ze=Be.g,Ge=Be.b;Ce?(g[0]=qe,g[1]=Ze,g[2]=Ge,g[3]=Oe,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=qe,v[1]=Ze,v[2]=Ge,v[3]=Oe,z.clearBufferiv(z.COLOR,0,v))}else ne|=z.COLOR_BUFFER_BIT}X&&(ne|=z.DEPTH_BUFFER_BIT),te&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),W.dispose(),$.dispose(),ie.dispose(),L.dispose(),R.dispose(),F.dispose(),E.dispose(),Se.dispose(),Je.dispose(),k.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Re),xe.removeEventListener("sessionend",Pe),Y.stop()};function Te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=we.autoReset,X=B.enabled,te=B.autoUpdate,ne=B.needsUpdate,G=B.type;H(),we.autoReset=T,B.enabled=X,B.autoUpdate=te,B.needsUpdate=ne,B.type=G}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){let X=T.target;X.removeEventListener("dispose",ue),ke(X)}function ke(T){Xe(T),L.remove(T)}function Xe(T){let X=L.get(T).programs;X!==void 0&&(X.forEach(function(te){k.releaseProgram(te)}),T.isShaderMaterial&&k.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,te,ne,G,_e){X===null&&(X=Fe);let Ce=G.isMesh&&G.matrixWorld.determinant()<0,Be=yl(T,X,te,ne,G);le.setMaterial(ne,Ce);let Oe=te.index,qe=1;if(ne.wireframe===!0){if(Oe=x.getWireframeAttribute(te),Oe===void 0)return;qe=2}let Ze=te.drawRange,Ge=te.attributes.position,rt=Ze.start*qe,ft=(Ze.start+Ze.count)*qe;_e!==null&&(rt=Math.max(rt,_e.start*qe),ft=Math.min(ft,(_e.start+_e.count)*qe)),Oe!==null?(rt=Math.max(rt,0),ft=Math.min(ft,Oe.count)):Ge!=null&&(rt=Math.max(rt,0),ft=Math.min(ft,Ge.count));let Tt=ft-rt;if(Tt<0||Tt===1/0)return;Se.setup(G,ne,Be,te,Oe);let yt,mt=ce;if(Oe!==null&&(yt=w.get(Oe),mt=Ae,mt.setIndex(yt)),G.isMesh)ne.wireframe===!0?(le.setLineWidth(ne.wireframeLinewidth*ot()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(G.isLine){let We=ne.linewidth;We===void 0&&(We=1),le.setLineWidth(We*ot()),G.isLineSegments?mt.setMode(z.LINES):G.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else G.isPoints?mt.setMode(z.POINTS):G.isSprite&&mt.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,St=G._multiDrawCounts,ct=G._multiDrawCount,sn=Oe?w.get(Oe).bytesPerElement:1,ss=L.get(ne).currentProgram.getUniforms();for(let rn=0;rn<ct;rn++)ss.setValue(z,"_gl_DrawID",rn),mt.render(We[rn]/sn,St[rn])}else if(G.isInstancedMesh)mt.renderInstances(rt,Tt,G.count);else if(te.isInstancedBufferGeometry){let We=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,St=Math.min(te.instanceCount,We);mt.renderInstances(rt,Tt,St)}else mt.render(rt,Tt)};function dt(T,X,te){T.transparent===!0&&T.side===On&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,Ft(T,X,te),T.side=Jn,T.needsUpdate=!0,Ft(T,X,te),T.side=On):Ft(T,X,te)}this.compile=function(T,X,te=null){te===null&&(te=T),p=ie.get(te),p.init(X),y.push(p),te.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),T!==te&&T.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let ne=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _e=G.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let Be=_e[Ce];dt(Be,te,G),ne.add(Be)}else dt(_e,te,G),ne.add(_e)}),p=y.pop(),ne},this.compileAsync=function(T,X,te=null){let ne=this.compile(T,X,te);return new Promise(G=>{function _e(){if(ne.forEach(function(Ce){L.get(Ce).currentProgram.isReady()&&ne.delete(Ce)}),ne.size===0){G(T);return}setTimeout(_e,10)}he.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let D=null;function re(T){D&&D(T)}function Re(){Y.stop()}function Pe(){Y.start()}let Y=new sd;Y.setAnimationLoop(re),typeof self<"u"&&Y.setContext(self),this.setAnimationLoop=function(T){D=T,xe.setAnimationLoop(T),T===null?Y.stop():Y.start()},xe.addEventListener("sessionstart",Re),xe.addEventListener("sessionend",Pe),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(X),X=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,X,A),p=ie.get(T,y.length),p.init(X),y.push(p),pe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Qe.setFromProjectionMatrix(pe,Sn,X.reversedDepth),oe=this.localClippingEnabled,et=se.init(this.clippingPlanes,oe),m=$.get(T,M.length),m.init(),M.push(m),xe.enabled===!0&&xe.isPresenting===!0){let _e=_.xr.getDepthSensingMesh();_e!==null&&ye(_e,X,-1/0,_.sortObjects)}ye(T,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(be,Ee),tt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,tt&&W.addToRenderList(m,T),this.info.render.frame++,et===!0&&se.beginShadows();let te=p.state.shadowsArray;B.render(te,T,X),et===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=m.opaque,G=m.transmissive;if(p.setupLights(),X.isArrayCamera){let _e=X.cameras;if(G.length>0)for(let Ce=0,Be=_e.length;Ce<Be;Ce++){let Oe=_e[Ce];bt(ne,G,T,Oe)}tt&&W.render(T);for(let Ce=0,Be=_e.length;Ce<Be;Ce++){let Oe=_e[Ce];at(m,T,Oe,Oe.viewport)}}else G.length>0&&bt(ne,G,T,X),tt&&W.render(T),at(m,T,X);A!==null&&N===0&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,X),Se.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ye(T,X,te,ne){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){ne&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);let Ce=E.update(T),Be=T.material;Be.visible&&m.push(T,Ce,Be,te,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){let Ce=E.update(T),Be=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ue.copy(Ce.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Be)){let Oe=Ce.groups;for(let qe=0,Ze=Oe.length;qe<Ze;qe++){let Ge=Oe[qe],rt=Be[Ge.materialIndex];rt&&rt.visible&&m.push(T,Ce,rt,te,Ue.z,Ge)}}else Be.visible&&m.push(T,Ce,Be,te,Ue.z,null)}}let _e=T.children;for(let Ce=0,Be=_e.length;Ce<Be;Ce++)ye(_e[Ce],X,te,ne)}function at(T,X,te,ne){let G=T.opaque,_e=T.transmissive,Ce=T.transparent;p.setupLightsView(te),et===!0&&se.setGlobalState(_.clippingPlanes,te),ne&&le.viewport(U.copy(ne)),G.length>0&&Dt(G,X,te),_e.length>0&&Dt(_e,X,te),Ce.length>0&&Dt(Ce,X,te),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function bt(T,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new Ln(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ks:En,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let _e=p.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||U;_e.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);let Be=_.getRenderTarget(),Oe=_.getActiveCubeFace(),qe=_.getActiveMipmapLevel();_.setRenderTarget(_e),_.getClearColor(K),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),tt&&W.render(te);let Ze=_.toneMapping;_.toneMapping=ii;let Ge=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),et===!0&&se.setGlobalState(_.clippingPlanes,ne),Dt(T,te,ne),P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e),he.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let ft=0,Tt=X.length;ft<Tt;ft++){let yt=X[ft],mt=yt.object,We=yt.geometry,St=yt.material,ct=yt.group;if(St.side===On&&mt.layers.test(ne.layers)){let sn=St.side;St.side=Vt,St.needsUpdate=!0,en(mt,te,ne,We,St,ct),St.side=sn,St.needsUpdate=!0,rt=!0}}rt===!0&&(P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e))}_.setRenderTarget(Be,Oe,qe),_.setClearColor(K,j),Ge!==void 0&&(ne.viewport=Ge),_.toneMapping=Ze}function Dt(T,X,te){let ne=X.isScene===!0?X.overrideMaterial:null;for(let G=0,_e=T.length;G<_e;G++){let Ce=T[G],Be=Ce.object,Oe=Ce.geometry,qe=Ce.group,Ze=Ce.material;Ze.allowOverride===!0&&ne!==null&&(Ze=ne),Be.layers.test(te.layers)&&en(Be,X,te,Oe,Ze,qe)}}function en(T,X,te,ne,G,_e){T.onBeforeRender(_,X,te,ne,G,_e),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(_,X,te,ne,T,_e),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,_.renderBufferDirect(te,X,ne,G,T,_e),G.side=Jn,G.needsUpdate=!0,_.renderBufferDirect(te,X,ne,G,T,_e),G.side=On):_.renderBufferDirect(te,X,ne,G,T,_e),T.onAfterRender(_,X,te,ne,G,_e)}function Ft(T,X,te){X.isScene!==!0&&(X=Fe);let ne=L.get(T),G=p.state.lights,_e=p.state.shadowsArray,Ce=G.state.version,Be=k.getParameters(T,G.state,_e,X,te),Oe=k.getProgramCacheKey(Be),qe=ne.programs;ne.environment=T.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(T.isMeshStandardMaterial?F:R).get(T.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",ue),qe=new Map,ne.programs=qe);let Ze=qe.get(Oe);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Ce)return Qs(T,Be),Ze}else Be.uniforms=k.getUniforms(T),T.onBeforeCompile(Be,_),Ze=k.acquireProgram(Be,Oe),qe.set(Oe,Ze),ne.uniforms=Be.uniforms;let Ge=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=se.uniform),Qs(T,Be),ne.needsLights=bl(T),ne.lightsStateVersion=Ce,ne.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Gt(T){if(T.uniformsList===null){let X=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Qs(T,X){let te=L.get(T);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function yl(T,X,te,ne,G){X.isScene!==!0&&(X=Fe),P.resetTextureUnits();let _e=X.fog,Ce=ne.isMeshStandardMaterial?X.environment:null,Be=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Oi,Oe=(ne.isMeshStandardMaterial?F:R).get(ne.envMap||Ce),qe=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ze=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ge=!!te.morphAttributes.position,rt=!!te.morphAttributes.normal,ft=!!te.morphAttributes.color,Tt=ii;ne.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=_.toneMapping);let yt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=yt!==void 0?yt.length:0,We=L.get(ne),St=p.state.lights;if(et===!0&&(oe===!0||T!==S)){let Jt=T===S&&ne.id===b;se.setState(ne,T,Jt)}let ct=!1;ne.version===We.__version?(We.needsLights&&We.lightsStateVersion!==St.state.version||We.outputColorSpace!==Be||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==Oe||ne.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==se.numPlanes||We.numIntersection!==se.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ze||We.morphTargets!==Ge||We.morphNormals!==rt||We.morphColors!==ft||We.toneMapping!==Tt||We.morphTargetsCount!==mt)&&(ct=!0):(ct=!0,We.__version=ne.version);let sn=We.currentProgram;ct===!0&&(sn=Ft(ne,X,G));let ss=!1,rn=!1,er=!1,wt=sn.getUniforms(),un=We.uniforms;if(le.useProgram(sn.program)&&(ss=!0,rn=!0,er=!0),ne.id!==b&&(b=ne.id,rn=!0),ss||S!==T){le.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(z,"projectionMatrix",T.projectionMatrix),wt.setValue(z,"viewMatrix",T.matrixWorldInverse);let tn=wt.map.cameraPosition;tn!==void 0&&tn.setValue(z,Me.setFromMatrixPosition(T.matrixWorld)),ae.logarithmicDepthBuffer&&wt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,rn=!0,er=!0)}if(G.isSkinnedMesh){wt.setOptional(z,G,"bindMatrix"),wt.setOptional(z,G,"bindMatrixInverse");let Jt=G.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),wt.setValue(z,"boneTexture",Jt.boneTexture,P))}G.isBatchedMesh&&(wt.setOptional(z,G,"batchingTexture"),wt.setValue(z,"batchingTexture",G._matricesTexture,P),wt.setOptional(z,G,"batchingIdTexture"),wt.setValue(z,"batchingIdTexture",G._indirectTexture,P),wt.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(z,"batchingColorTexture",G._colorsTexture,P));let dn=te.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&q.update(G,te,sn),(rn||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,wt.setValue(z,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(un.envMap.value=Oe,un.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),rn&&(wt.setValue(z,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Ml(un,er),_e&&ne.fog===!0&&ee.refreshFogUniforms(un,_e),ee.refreshMaterialUniforms(un,ne,Q,fe,p.state.transmissionRenderTarget[T.id]),Xs.upload(z,Gt(We),un,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xs.upload(z,Gt(We),un,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(z,"center",G.center),wt.setValue(z,"modelViewMatrix",G.modelViewMatrix),wt.setValue(z,"normalMatrix",G.normalMatrix),wt.setValue(z,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Jt=ne.uniformsGroups;for(let tn=0,wl=Jt.length;tn<wl;tn++){let Ti=Jt[tn];Je.update(Ti,sn),Je.bind(Ti,sn)}}return sn}function Ml(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function bl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,X,te){let ne=L.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),L.get(T.texture).__webglTexture=X,L.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){let te=L.get(T);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};let Sl=z.createFramebuffer();this.setRenderTarget=function(T,X=0,te=0){A=T,C=X,N=te;let ne=!0,G=null,_e=!1,Ce=!1;if(T){let Oe=L.get(T);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(z.FRAMEBUFFER,null),ne=!1;else if(Oe.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Oe.__hasExternalTextures)P.rebindTextures(T,L.get(T.texture).__webglTexture,L.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(Oe.__boundDepthTexture!==Ge){if(Ge!==null&&L.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);let Ze=L.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?G=Ze[X][te]:G=Ze[X],_e=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?G=L.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[te]:G=Ze,U.copy(T.viewport),V.copy(T.scissor),Z=T.scissorTest}else U.copy(me).multiplyScalar(Q).floor(),V.copy(Ve).multiplyScalar(Q).floor(),Z=He;if(te!==0&&(G=Sl),le.bindFramebuffer(z.FRAMEBUFFER,G)&&ne&&le.drawBuffers(T,G),le.viewport(U),le.scissor(V),le.setScissorTest(Z),_e){let Oe=L.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,te)}else if(Ce){let Oe=X;for(let qe=0;qe<T.textures.length;qe++){let Ze=L.get(T.textures[qe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,te,Oe)}}else if(T!==null&&te!==0){let Oe=L.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(T,X,te,ne,G,_e,Ce,Be=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){le.bindFramebuffer(z.FRAMEBUFFER,Oe);try{let qe=T.textures[Be],Ze=qe.format,Ge=qe.type;if(!ae.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-ne&&te>=0&&te<=T.height-G&&(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be),z.readPixels(X,te,ne,G,De.convert(Ze),De.convert(Ge),_e))}finally{let qe=A!==null?L.get(A).__webglFramebuffer:null;le.bindFramebuffer(z.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,X,te,ne,G,_e,Ce,Be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe)if(X>=0&&X<=T.width-ne&&te>=0&&te<=T.height-G){le.bindFramebuffer(z.FRAMEBUFFER,Oe);let qe=T.textures[Be],Ze=qe.format,Ge=qe.type;if(!ae.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,rt),z.bufferData(z.PIXEL_PACK_BUFFER,_e.byteLength,z.STREAM_READ),T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Be),z.readPixels(X,te,ne,G,De.convert(Ze),De.convert(Ge),0);let ft=A!==null?L.get(A).__webglFramebuffer:null;le.bindFramebuffer(z.FRAMEBUFFER,ft);let Tt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Eu(z,Tt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,rt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_e),z.deleteBuffer(rt),z.deleteSync(Tt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,te=0){let ne=Math.pow(2,-te),G=Math.floor(T.image.width*ne),_e=Math.floor(T.image.height*ne),Ce=X!==null?X.x:0,Be=X!==null?X.y:0;P.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Ce,Be,G,_e),le.unbindTexture()};let lo=z.createFramebuffer(),it=z.createFramebuffer();this.copyTextureToTexture=function(T,X,te=null,ne=null,G=0,_e=null){_e===null&&(G!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ce,Be,Oe,qe,Ze,Ge,rt,ft,Tt,yt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(te!==null)Ce=te.max.x-te.min.x,Be=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,Ze=te.min.y,Ge=te.isBox3?te.min.z:0;else{let dn=Math.pow(2,-G);Ce=Math.floor(yt.width*dn),Be=Math.floor(yt.height*dn),T.isDataArrayTexture?Oe=yt.depth:T.isData3DTexture?Oe=Math.floor(yt.depth*dn):Oe=1,qe=0,Ze=0,Ge=0}ne!==null?(rt=ne.x,ft=ne.y,Tt=ne.z):(rt=0,ft=0,Tt=0);let mt=De.convert(X.format),We=De.convert(X.type),St;X.isData3DTexture?(P.setTexture3D(X,0),St=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),St=z.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),St=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);let ct=z.getParameter(z.UNPACK_ROW_LENGTH),sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ss=z.getParameter(z.UNPACK_SKIP_PIXELS),rn=z.getParameter(z.UNPACK_SKIP_ROWS),er=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);let wt=T.isDataArrayTexture||T.isData3DTexture,un=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){let dn=L.get(T),Jt=L.get(X),tn=L.get(dn.__renderTarget),wl=L.get(Jt.__renderTarget);le.bindFramebuffer(z.READ_FRAMEBUFFER,tn.__webglFramebuffer),le.bindFramebuffer(z.DRAW_FRAMEBUFFER,wl.__webglFramebuffer);for(let Ti=0;Ti<Oe;Ti++)wt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(T).__webglTexture,G,Ge+Ti),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,L.get(X).__webglTexture,_e,Tt+Ti)),z.blitFramebuffer(qe,Ze,Ce,Be,rt,ft,Ce,Be,z.DEPTH_BUFFER_BIT,z.NEAREST);le.bindFramebuffer(z.READ_FRAMEBUFFER,null),le.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||L.has(T)){let dn=L.get(T),Jt=L.get(X);le.bindFramebuffer(z.READ_FRAMEBUFFER,lo),le.bindFramebuffer(z.DRAW_FRAMEBUFFER,it);for(let tn=0;tn<Oe;tn++)wt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,G,Ge+tn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,G),un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Jt.__webglTexture,_e,Tt+tn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Jt.__webglTexture,_e),G!==0?z.blitFramebuffer(qe,Ze,Ce,Be,rt,ft,Ce,Be,z.COLOR_BUFFER_BIT,z.NEAREST):un?z.copyTexSubImage3D(St,_e,rt,ft,Tt+tn,qe,Ze,Ce,Be):z.copyTexSubImage2D(St,_e,rt,ft,qe,Ze,Ce,Be);le.bindFramebuffer(z.READ_FRAMEBUFFER,null),le.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(St,_e,rt,ft,Tt,Ce,Be,Oe,mt,We,yt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(St,_e,rt,ft,Tt,Ce,Be,Oe,mt,yt.data):z.texSubImage3D(St,_e,rt,ft,Tt,Ce,Be,Oe,mt,We,yt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_e,rt,ft,Ce,Be,mt,We,yt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_e,rt,ft,yt.width,yt.height,mt,yt.data):z.texSubImage2D(z.TEXTURE_2D,_e,rt,ft,Ce,Be,mt,We,yt);z.pixelStorei(z.UNPACK_ROW_LENGTH,ct),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ss),z.pixelStorei(z.UNPACK_SKIP_ROWS,rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,er),_e===0&&X.generateMipmaps&&z.generateMipmap(St),le.unbindTexture()},this.initRenderTarget=function(T){L.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){C=0,N=0,A=null,le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var ze=[{name:"Campos do Sol",short:"Sol",creature:"Pintinho Pipoca",value:80,color:16239189,ground:6072679,path:14665623,sky:11067373,kind:"chick"},{name:"Dunas Douradas",short:"Dunas",creature:"Raposa de Areia",value:140,color:16163924,ground:14262362,path:15978380,sky:16176812,kind:"fox"},{name:"Bosque Encantado",short:"Bosque",creature:"Cervinho Folha",value:230,color:9096067,ground:3767916,path:11380108,sky:10142154,kind:"deer"},{name:"Reino de Gelo",short:"Gelo",creature:"Pingui de Gelo",value:360,color:8509420,ground:13495281,path:9553371,sky:13232891,kind:"penguin"},{name:"Vale Vulc\xE2nico",short:"Vulc\xE3o",creature:"Drag\xE3o Brasa",value:550,color:15890772,ground:5589083,path:7824246,sky:7689058,kind:"dragon"},{name:"Caverna de Cristal",short:"Cristal",creature:"Tartaruga Cristal",value:850,color:11969011,ground:7632040,path:11839441,sky:7634862,kind:"turtle"},{name:"Ilhas C\xF3smicas",short:"Cosmos",creature:"Gato Estelar",value:1300,color:12884981,ground:4146541,path:7960243,sky:2699606,kind:"cat"},{name:"Recife de Coral",short:"Coral",creature:"Axolote P\xE9rola",value:1900,color:16748986,ground:2400186,path:15192996,sky:9560045,kind:"axolotl"},{name:"Vale dos Doces",short:"Doces",creature:"Coelho Caramelo",value:2700,color:16297102,ground:11969500,path:16766653,sky:16240612,kind:"rabbit"},{name:"Floresta de Bambu",short:"Bambu",creature:"Panda Jade",value:3700,color:6865562,ground:3904109,path:12958598,sky:12773588,kind:"panda"},{name:"Cidade das Engrenagens",short:"Rob\xF4s",creature:"Rob\xF4 Fa\xEDsca",value:5e3,color:16761943,ground:4479355,path:8820914,sky:9549791,kind:"robot"},{name:"Templo das Nuvens",short:"Nuvens",creature:"Grifo Aurora",value:6800,color:14070527,ground:10732778,path:16180925,sky:13359866,kind:"griffin"},{name:"Santu\xE1rio das Tempestades",short:"Tempestade",creature:"F\xEAnix Rel\xE2mpago",value:9500,color:8974335,ground:3490912,path:6584736,sky:4278905,kind:"phoenix"},{name:"Cidadela do Tempo",short:"Tempo",creature:"Coruja Cronos",value:13500,color:9561294,ground:4746098,path:14205071,sky:11589334,kind:"clockOwl"}],ri=600,It=48,Cn={x:-5,z:14},Vn={x:5,z:14},bi=4.75,ul=9.4,Tx=.4;function Ax(i){let e=Math.max(0,Math.min(1,(i-3)/5));return bi+(ul-bi)*e}function Mi(i,e=Tx){i.z=Math.max(-It*ze.length+.8,Math.min(25,i.z));let t=Ax(i.z)-e;return i.x=Math.max(-t,Math.min(t,i.x)),i}var kn=ze.map((i,e)=>({x:e%2?-3.2:3.2,z:-(e*It+25)})),$s=i=>(7.7+i*1.1)*2,ll=ze.flatMap((i,e)=>[{x:-2.3,z:-(e*It+11),r:.72,h:.65,world:e},{x:2.15,z:-(e*It+37),r:.78,h:.72,world:e},...e>=7?Array.from({length:3},(t,n)=>({x:[0,-3.1,3.1][n],z:-(e*It+17+n*8),r:.65,h:.8+n*.08,world:e})):[]]),Si={boots:{name:"T\xEAnis velozes",icon:"\u{1F45F}",desc:"+0,8 de velocidade por n\xEDvel.",max:10,base:80},energy:{name:"Mais f\xF4lego",icon:"\u{1F4A8}",desc:"+30 de energia para disparar.",max:5,base:90},pen:{name:"Curral maior",icon:"\u{1F3E1}",desc:"+2 espa\xE7os para ovos e criaturas.",max:10,base:150},incubator:{name:"Ninho aquecido",icon:"\u{1F95A}",desc:"O ovo choca 1,5 s mais r\xE1pido.",max:3,base:100},gloves:{name:"Luvas de transporte",icon:"\u{1F9E4}",desc:"Corra 4% mais r\xE1pido carregando o ovo, por n\xEDvel.",max:4,base:180},springs:{name:"Molas de salto",icon:"\u{1F998}",desc:"Pule mais alto para superar obst\xE1culos.",max:3,base:120},hydration:{name:"Garrafa esportiva",icon:"\u{1F4A7}",desc:"+6 de f\xF4lego recuperado por segundo, por n\xEDvel.",max:4,base:160},coach:{name:"Esteira profissional",icon:"\u{1F3C3}",desc:"Ganhe 25% mais treino por segundo, por n\xEDvel.",max:4,base:200},charm:{name:"Medalha do criador",icon:"\u{1F3C5}",desc:"Receba 10% a mais por criatura vendida, por n\xEDvel.",max:3,base:300},turbo:{name:"Impulso turbo",icon:"\u{1F680}",desc:"Dispare 10% mais r\xE1pido, por n\xEDvel.",max:3,base:220}},ns={shield:{name:"Escudo bolha",icon:"\u{1F6E1}\uFE0F",price:60,max:5,desc:"Protege de uma captura. Ativa sozinho quando o dono encosta."},juice:{name:"Suco de energia",icon:"\u{1F9C3}",price:35,max:5,desc:"Recupera todo o f\xF4lego. Toque em Suco durante a corrida."}},Lt={common:{name:"Comum",mult:1,color:16773585},rare:{name:"Raro",mult:3,color:7921151},epic:{name:"\xC9pico",mult:5,color:13476095},legendary:{name:"Lend\xE1rio",mult:8,color:16765788},secret:{name:"Secreto",mult:12,color:15963343}},cd=(i,e)=>e===0?"common":e===1?"rare":i>=6?"legendary":"epic",Qt={...co,crown:{name:"Coroa dourada",slot:"head",price:240,desc:"Uma coroa com pedras coloridas."},headphones:{name:"Fones neon",slot:"head",price:120,desc:"Fones azuis para seu corredor."},halo:{name:"Halo estelar",slot:"head",price:550,desc:"Um anel luminoso sobre a cabe\xE7a."},goggles:{name:"\xD3culos de aviador",slot:"face",price:160,desc:"Lentes turquesa e arma\xE7\xE3o dourada."},wings:{name:"Asas de cristal",slot:"back",price:420,desc:"Asas lil\xE1s para enfeitar o personagem."},cape:{name:"Capa de her\xF3i",slot:"back",price:200,desc:"Uma capa vermelha para a aventura."},pilotCap:{name:"Capacete de piloto",slot:"head",price:850,desc:"Capacete laranja com faixa e prote\xE7\xE3o lateral."},safariHat:{name:"Chap\xE9u explorador",slot:"head",price:1500,desc:"Aba larga e uma pena verde para as expedi\xE7\xF5es."},iceTiara:{name:"Tiara de gelo",slot:"head",price:3e3,desc:"Pontas de cristal azul em uma tiara prateada."},stormHelm:{name:"Elmo da tempestade",slot:"head",price:18e3,desc:"Elmo violeta com dois rel\xE2mpagos dourados."},solarCrown:{name:"Coroa do sol",slot:"head",price:75e3,desc:"Uma coroa m\xEDtica com um grande disco solar."},starGlasses:{name:"\xD3culos de estrela",slot:"face",price:2200,desc:"Duas estrelas douradas com lentes rosadas."},cyberVisor:{name:"Visor cibern\xE9tico",slot:"face",price:4500,desc:"Visor azul com moldura e luzes neon."},butterflyMask:{name:"M\xE1scara borboleta",slot:"face",price:9e3,desc:"Asas turquesa e lil\xE1s ao redor dos olhos."},royalMask:{name:"M\xE1scara imperial",slot:"face",price:35e3,desc:"M\xE1scara dourada com cristais de rubi."},explorerPack:{name:"Mochila de expedi\xE7\xE3o",slot:"back",price:1200,desc:"Mochila verde com bolso e rolinho de viagem."},beeWings:{name:"Asas de abelha",slot:"back",price:3800,desc:"Quatro asas claras com detalhes amarelos."},jetpack:{name:"Mochila a jato",slot:"back",price:6500,desc:"Dois propulsores prateados com chamas azuis. Visual, sem voo."},phoenixWings:{name:"Asas da f\xEAnix",slot:"back",price:12e3,desc:"Penas longas nas cores do fogo."},auroraCape:{name:"Manto da aurora",slot:"back",price:25e3,desc:"Manto em faixas lil\xE1s, verde e azul."},cometPack:{name:"Cometa de cristal",slot:"back",price:5e4,desc:"Um cometa com cauda de cristais azuis."},infinityWings:{name:"Asas do infinito",slot:"back",price:15e4,desc:"Asas m\xEDticas, an\xE9is c\xF3smicos e estrelas douradas."}},oi={normal:{name:"Natural",mult:1,color:null},gold:{name:"Dourado",mult:1.5,color:16764006},rainbow:{name:"Arco-\xEDris",mult:2,color:9369055},cosmic:{name:"C\xF3smico",mult:3,color:11439103}},wi={meadow:{name:"Prado",price:0,color:9750141,roof:7824561},candy:{name:"Doceria",price:600,color:15839692,roof:8244431},space:{name:"Observat\xF3rio",price:1200,color:7833016,roof:14527231},bamboo:{name:"Jardim de bambu",price:800,color:7780741,roof:14531176}},qc=["Troncos girat\xF3rios","Rajada de areia","Esporos do bosque","Piso escorregadio","Jatos de lava","Pulso de cristal","Baixa gravidade","Correnteza do recife","Po\xE7as de caramelo","Bambu m\xF3vel","Prensa mec\xE2nica","Vento das nuvens","Rel\xE2mpagos do santu\xE1rio","P\xEAndulo do tempo"],dl=[{id:"first",name:"Primeira entrega",key:"delivered",target:1,reward:100},{id:"five",name:"Mensageiro dos ovos",key:"delivered",target:5,reward:350},{id:"explorer",name:"Seis mundos",key:"visited",target:6,reward:600},{id:"collector",name:"Seis esp\xE9cies",key:"seen",target:6,reward:1e3},{id:"trainer",name:"Atleta n\xEDvel 50",key:"training",target:50,reward:700},{id:"rare",name:"Criador de raridades",key:"rareHatched",target:5,reward:800},{id:"income",name:"Curral produtivo",key:"incomeEarned",target:500,reward:400},{id:"clean",name:"Fuga impec\xE1vel",key:"cleanRuns",target:3,reward:500},{id:"worlds",name:"Grande explorador",key:"visited",target:12,reward:2e3},{id:"secret",name:"Segredo revelado",key:"secretHatched",target:1,reward:1500},{id:"storm",name:"Al\xE9m das nuvens",key:"visited",target:13,reward:3500},{id:"chronos",name:"Guardi\xE3o do tempo",key:"visited",target:14,reward:5e3}],cl=i=>oi[i]?i:"normal",hd=i=>["speed","energy","value"][i%3],fl=i=>i?{speed:"Velocidade +5%",energy:"Recupera\xE7\xE3o de f\xF4lego +8/s",value:"Vendas +10%"}[hd(i.world)]:"Escolha uma criatura no curral.",hl=i=>Lt[i]?i:"common",An=(i,e,t)=>Math.max(e,Math.min(t,i)),Ht=(i,e,t)=>Number.isFinite(i)?An(i,e,t):e,gn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function $c(){return{version:4,abilityStock:Object.fromEntries(Object.keys(Mt).map(i=>[i,0])),abilitySlots:{power:"bubble",boost:"rush"},activeAbilities:{power:null,boost:null},rng:Math.floor(Math.random()*2147483646)+1,nestState:null,companionId:null,decorations:["meadow"],decoration:"meadow",incomePending:0,incomeEarned:0,rareHatched:0,secretHatched:0,cleanRuns:0,claimed:[],album:[],daily:{day:"",delivered:0,claimed:!1},accessories:[],equipped:{},coins:0,training:0,trainXP:0,upgrades:Object.fromEntries(Object.keys(Si).map(i=>[i,0])),supplies:{shield:0,juice:0},creatures:[],eggs:[],seen:Array(ze.length).fill(!1),visited:Array(ze.length).fill(!1),delivered:0,caught:0,nextId:1}}function Cx(i){let e=$c();if(!i||![1,2,3,4].includes(i.version))return e;for(let[t,n]of Object.entries(Mt))e.abilityStock[t]=Math.floor(Ht(i.abilityStock?.[t],0,n.max));for(let t of["power","boost"]){let n=i.abilitySlots?.[t];Mt[n]?.kind===t&&(e.abilitySlots[t]=n);let s=i.activeAbilities?.[t],r=Mt[s?.id];r?.kind===t&&Ht(s.remaining,0,r.duration)>0&&(e.activeAbilities[t]={id:s.id,remaining:Ht(s.remaining,0,r.duration)},e.abilitySlots[t]=s.id)}e.accessories=Object.keys(Qt).filter(t=>i.accessories?.includes(t));for(let t of e.accessories)i.equipped?.[Qt[t].slot]===t&&(e.equipped[Qt[t].slot]=t);e.coins=Math.floor(Ht(i.coins,0,1e9)),e.training=Math.floor(Ht(i.training,0,ri)),e.trainXP=Ht(i.trainXP,0,8+e.training*1.5);for(let[t,n]of Object.entries(Si))e.upgrades[t]=Math.floor(Ht(i.upgrades?.[t],0,n.max));for(let[t,n]of Object.entries(ns))e.supplies[t]=Math.floor(Ht(i.supplies?.[t],0,n.max));e.seen=e.seen.map((t,n)=>i.seen?.[n]===!0),e.visited=e.visited.map((t,n)=>i.visited?.[n]===!0),e.delivered=Math.floor(Ht(i.delivered,0,1e6)),e.caught=Math.floor(Ht(i.caught,0,1e6));for(let t of Array.isArray(i.creatures)?i.creatures:[])Number.isInteger(t.world)&&t.world>=0&&t.world<ze.length&&e.creatures.length<3+e.upgrades.pen*2&&e.creatures.push({id:e.nextId++,world:t.world,rarity:hl(t.rarity),mutation:cl(t.mutation),incomeProgress:Ht(t.incomeProgress,0,1e9),uid:typeof t.uid=="string"&&/^[a-zA-Z0-9_-]{1,80}$/.test(t.uid)?t.uid:"pet-"+Date.now().toString(36)+"-"+e.nextId});for(let t of Array.isArray(i.eggs)?i.eggs:[])Number.isInteger(t.world)&&t.world>=0&&t.world<ze.length&&e.creatures.length+e.eggs.length<3+e.upgrades.pen*2&&e.eggs.push({id:e.nextId++,world:t.world,rarity:hl(t.rarity),mutation:cl(t.mutation),remaining:Ht(t.remaining,0,8)});e.companionId=e.creatures.find(t=>t.uid===i.companionId)?.uid||null,e.decorations=Object.keys(wi).filter(t=>t==="meadow"||i.decorations?.includes(t)),e.decoration=e.decorations.includes(i.decoration)?i.decoration:"meadow",e.rng=Math.floor(Ht(i.rng||e.rng,1,4294967295)),e.nestState=Array.isArray(i.nestState)?i.nestState:null;for(let t of["incomePending","incomeEarned","rareHatched","secretHatched","cleanRuns"])e[t]=Ht(i[t],0,1e9);e.claimed=dl.filter(t=>i.claimed?.includes(t.id)).map(t=>t.id),e.album=Array.isArray(i.album)?[...new Set(i.album.filter(t=>/^\d{1,2}:(common|rare|epic|legendary|secret):(normal|gold|rainbow|cosmic)$/.test(t)))].slice(0,240):[];for(let t of e.creatures){let n=t.world+":"+t.rarity+":"+t.mutation;e.album.includes(n)||e.album.push(n)}return i.daily&&/^\d{4}-\d{2}-\d{2}$/.test(i.daily.day)&&(e.daily={day:i.daily.day,delivered:Ht(i.daily.delivered,0,1e4),claimed:i.daily.claimed===!0}),e}var Ys=class{constructor(e){this.save=Cx(e),this.player={x:0,z:15,y:0,vy:0},this.time=0,this.incomeClock=0,this.carrying=null,this.carriedEgg=null,this.mode="run",this.energy=this.maxEnergy(),this.moving=0,this.sprinting=!1,this.events=[],this.hazardCooldown=0,this.slowUntil=0,this.runClean=!0,this.nestEggs=ze.map((t,n)=>Array.from({length:3},(s,r)=>{let o=this.save.nestState?.[n]?.[r];return o?{slot:r,rarity:hl(o.rarity),mutation:cl(o.mutation),availableAt:Ht(o.cooldown,0,240),refreshAt:Ht(o.refresh,1,240)}:this.rollEgg(n,r)})),this.captureNests(),this.guardians=kn.map(t=>({x:t.x,z:t.z-2.5,state:"idle",grace:0})),this.hitCooldown=0,this.airJumps=0,this.save.visited[0]=!0}get availableAt(){return this.nestEggs.map(e=>Math.min(...e.map(t=>t.availableAt)))}availableEggs(e){return this.nestEggs[e].filter(t=>t.availableAt<=this.time)}recommendedTraining(e){let t=.92+this.save.upgrades.gloves*.04;return Math.max(0,Math.ceil(($s(e)*1.1/(t*(this.power()==="speed"?1.05:1))-9-this.save.upgrades.boots*.8)/.35))}trainingAdvice(e){let t=this.recommendedTraining(e);return{level:t,remaining:Math.max(0,t-this.save.training),ready:this.save.training>=t}}speed(){return this.raceMode?22:(9+this.save.training*.35+this.save.upgrades.boots*.8)*(this.power()==="speed"?1.05:1)*(this.effect("rush")?1.25:1)}maxEnergy(){return 100+this.save.upgrades.energy*30}capacity(){return 3+this.save.upgrades.pen*2}trainTarget(){return 8+this.save.training*1.5}hatchTime(){return 8-this.save.upgrades.incubator*1.5}zone(){return An(Math.floor(-this.player.z/It),0,ze.length-1)}inBase(){return this.player.z>3}price(e){let t=Si[e];return t?Math.round(t.base*(this.save.upgrades[e]+1)**1.5):1/0}emit(e,t,n){this.events.push({type:e,text:t,world:n})}drainEvents(){return this.events.splice(0)}push(e){if(!this.raceMode||this.mode!=="run"||!e||!Number.isFinite(e.x)||!Number.isFinite(e.z)||this.time<(this.pushProtectedUntil||0))return!1;let t=Math.hypot(e.x,e.z);return t<.01?!1:(this.pushVelocity={x:e.x/t*15,z:e.z/t*15},this.pushUntil=this.time+.55,this.pushProtectedUntil=this.time+1.25,this.player.vy=Math.max(this.player.vy,3.3),!0)}clearPush(){this.pushVelocity=null,this.pushUntil=0,this.pushProtectedUntil=0}jump(){return this.mode!=="run"?!1:this.player.y===0?(this.airJumps=0,this.player.vy=7.6+(this.raceMode?0:this.save.upgrades.springs*.7),!0):this.effect("doubleJump")&&this.airJumps<1?(this.airJumps++,this.player.vy=8.3,this.emit("ability","Salto duplo!"),!0):!1}effect(e){let t=Mt[e],n=t&&this.save.activeAbilities[t.kind];return!this.raceMode&&n?.id===e&&n.remaining>0}selectAbility(e){let t=Mt[e];return!t||!this.save.abilityStock[e]||this.save.activeAbilities[t.kind]?!1:(this.save.abilitySlots[t.kind]=e,this.emit("upgrade",t.name+" no atalho do HUD."),!0)}canUseAbility(e){let t=Mt[e];return!t||this.raceMode||!this.save.abilityStock[e]||this.save.activeAbilities[t.kind]?!1:e==="trainingBoost"?this.mode==="train"&&this.save.training<ri:e==="hatchBoost"?this.save.eggs.length>0:e==="incomeBoost"?this.save.creatures.length>0:this.mode==="run"}useAbility(e){if(!this.canUseAbility(e))return!1;let t=Mt[e];return this.save.abilityStock[e]--,this.save.abilitySlots[t.kind]=e,this.save.activeAbilities[t.kind]={id:e,remaining:t.duration},e==="endurance"&&(this.energy=this.maxEnergy()),this.emit("ability",t.name+" \xB7 "+t.duration+" s"),!0}tickAbilities(e){if(!this.raceMode)for(let t of["power","boost"]){let n=this.save.activeAbilities[t];n&&(n.remaining=Math.max(0,n.remaining-e),n.remaining||(this.save.activeAbilities[t]=null,this.emit("abilityEnd",Mt[n.id].name+" terminou.")))}}trainingRate(){return(1+this.save.upgrades.coach*.25)*(this.effect("trainingBoost")?2:1)}interaction(){if(this.raceMode)return{type:"walk",label:"Siga o ninho da corrida"};if(this.mode==="train")return{type:"stop",label:"Sair da esteira"};if(this.carrying!==null)return gn(this.player,Cn)<3.1?{type:"deposit",label:"Guardar ovo"}:{type:"return",label:"Leve ao curral"};if(gn(this.player,Vn)<2.5)return{type:"train",label:"Treinar na esteira"};if(gn(this.player,Cn)<3.1)return{type:"corral",label:"Abrir curral"};for(let e=0;e<ze.length;e++)if(gn(this.player,kn[e])<2.6)return this.availableAt[e]<=this.time?{type:"nest",label:`Escolher ovo \xB7 ${this.availableEggs(e).length}`,world:e}:{type:"wait",label:`Novo ovo em ${Math.ceil(this.availableAt[e]-this.time)} s`};return{type:"walk",label:"Aproxime-se do ovo"}}interact(){let e=this.interaction();if(e.type==="stop")return this.mode="run",this.player.z=16.2,this.emit("stop","Treino conclu\xEDdo. Sua velocidade est\xE1 maior!"),e.type;if(e.type==="train")return this.save.training>=ri?(this.emit("notice","Voc\xEA j\xE1 atingiu o n\xEDvel m\xE1ximo de treino!"),!1):(this.mode="train",this.player.x=Vn.x,this.player.z=Vn.z,this.player.y=0,this.player.vy=0,this.emit("train","Treinando! A cada barra completa, sua velocidade aumenta."),e.type);if(e.type==="deposit"){if(this.save.creatures.length+this.save.eggs.length>=this.capacity())return this.emit("notice","Curral cheio! Venda uma criatura ou compre mais espa\xE7os."),!1;let t=this.carrying;return this.save.eggs.push({id:this.save.nextId++,world:t,rarity:this.carriedEgg.rarity,mutation:this.carriedEgg.mutation,remaining:this.hatchTime()}),this.save.delivered++,this.refreshDay(),this.save.daily.delivered++,this.runClean&&this.save.cleanRuns++,this.nestEggs[t][this.carriedEgg.slot].availableAt=this.time+18,this.carrying=null,this.carriedEgg=null,this.guardians[t].state="return",this.emit("deposit","O ovo chegou ao curral! J\xE1 est\xE1 chocando.",t),e.type}return["corral","nest"].includes(e.type)?e.type:!1}steal(e){let t=this.interaction();if(t.type!=="nest"||!Number.isInteger(e))return!1;let n=this.nestEggs[t.world]?.[e];if(!n||n.availableAt>this.time)return!1;this.carrying=t.world,this.runClean=!0,this.carriedEgg={world:t.world,slot:e,rarity:n.rarity,mutation:n.mutation},n.availableAt=1/0;let s=this.guardians[t.world];return s.state="chase",s.grace=1.1,this.emit("grab",`Ovo ${Lt[n.rarity].name.toLowerCase()}! Corra para o curral!`,t.world),!0}saleValue(e,t="common",n="normal"){return Math.round(ze[e].value*Lt[hl(t)].mult*oi[cl(n)].mult*(1+this.save.upgrades.charm*.1+(this.power()==="value"?.1:0)))}equip(e){let t=Qt[e];return!t||!this.save.accessories.includes(e)?!1:(this.save.equipped[t.slot]===e?delete this.save.equipped[t.slot]:this.save.equipped[t.slot]=e,this.emit("upgrade",this.save.equipped[t.slot]===e?`${t.name} equipado!`:`${t.name} guardado.`),!0)}useJuice(){return this.mode!=="run"||this.save.supplies.juice<1||this.energy>=this.maxEnergy()-1?!1:(this.save.supplies.juice--,this.energy=this.maxEnergy(),this.emit("juice","Suco usado! Seu f\xF4lego est\xE1 completo."),!0)}sell(e){if(!this.inBase())return!1;let t=this.save.creatures.findIndex(r=>r.id===e);if(t<0)return!1;let n=this.saleValue(this.save.creatures[t].world,this.save.creatures[t].rarity,this.save.creatures[t].mutation),[s]=this.save.creatures.splice(t,1);return this.save.incomePending+=s.incomeProgress||0,this.collectIncome(),this.save.companionId===s.uid&&(this.save.companionId=null),this.save.coins+=n,this.emit("sold",`${ze[s.world].creature}: +${n} integros!`,s.world),!0}buy(e){if(Mt[e]){let n=Mt[e];return!this.inBase()||this.save.coins<n.price||this.save.abilityStock[e]>=n.max?!1:(this.save.coins-=n.price,this.save.abilityStock[e]++,this.save.activeAbilities[n.kind]||(this.save.abilitySlots[n.kind]=e),this.emit("upgrade",n.name+" comprado!"),!0)}if(wi[e]){let n=wi[e];if(!this.inBase())return!1;if(!this.save.decorations.includes(e)){if(this.save.coins<n.price)return!1;this.save.coins-=n.price,this.save.decorations.push(e)}return this.save.decoration=e,this.emit("upgrade","Curral decorado: "+n.name),!0}if(Qt[e]){let n=Qt[e];return!this.inBase()||this.save.accessories.includes(e)||this.save.coins<n.price?!1:(this.save.coins-=n.price,this.save.accessories.push(e),this.equip(e),!0)}if(ns[e]){let n=ns[e];return!this.inBase()||this.save.coins<n.price||this.save.supplies[e]>=n.max?!1:(this.save.coins-=n.price,this.save.supplies[e]++,this.emit("upgrade",`${n.name} comprado!`),!0)}let t=Si[e];return!t||!this.inBase()||this.save.upgrades[e]>=t.max||this.save.coins<this.price(e)?!1:(this.save.coins-=this.price(e),this.save.upgrades[e]++,this.energy=this.maxEnergy(),this.emit("upgrade",`${t.name}: melhoria comprada!`),!0)}catchEgg(e){if(this.effect("bubble")){this.guardians[e].grace=1;return}if(this.runClean=!1,this.save.supplies.shield>0){this.save.supplies.shield--,this.guardians[e].grace=3,this.energy=this.maxEnergy(),this.emit("shield","Escudo ativado! Voc\xEA tem 3 segundos para abrir dist\xE2ncia.",e);return}this.nestEggs[e][this.carriedEgg.slot].availableAt=this.time+5,this.carrying=null,this.carriedEgg=null,this.guardians[e].state="return",this.save.caught++,Object.assign(this.player,{x:0,z:15,y:0,vy:0}),this.energy=this.maxEnergy(),this.emit("caught","O dono recuperou o ovo! Treine ou melhore seus t\xEAnis e tente de novo.",e)}collide(e,t=.35,n=!1){for(let s of ll){if(!n&&e.y>s.h)continue;let r=e.x-s.x,o=e.z-s.z,l=Math.hypot(r,o),c=t+s.r;l<c&&(e.x=s.x+(l?r/l:1)*c,e.z=s.z+(l?o/l:0)*c,!n&&this.hitCooldown<=0&&(this.runClean=!1,this.emit("obstacle","Pule ou contorne os obst\xE1culos!"),this.hitCooldown=2))}}moveGuardian(e,t,n,s){Mi(e,.43),t=Mi({...t},.43);let r=t.x-e.x,o=t.z-e.z,l=Math.hypot(r,o);if(l<.12)return;r/=l,o/=l;for(let a of ll){let u=e.x-a.x,h=e.z-a.z,d=Math.hypot(u,h);d<a.r+1.5&&d>.01&&(r+=u/d*(a.r+1.5-d)*1.2,o+=h/d*(a.r+1.5-d)*1.2)}let c=Math.hypot(r,o)||1;e.x+=r/c*Math.min(n*s,l),e.z+=o/c*Math.min(n*s,l),this.collide(e,.43,!0),Mi(e,.43)}update(e,t={}){e=An(e,0,.05),this.time+=e,this.tickAbilities(e),this.refreshDay(),this.hazardCooldown=Math.max(0,this.hazardCooldown-e);for(let a=0;a<this.nestEggs.length;a++)for(let u=0;u<3;u++){let h=this.nestEggs[a][u];h.availableAt<=this.time&&h.refreshAt<=this.time&&(this.nestEggs[a][u]=this.rollEgg(a,u))}this.updateIncome(e),this.captureNests(),this.hitCooldown-=e;for(let a of this.save.eggs)a.remaining-=e*(this.effect("hatchBoost")?2:1);let n=this.save.eggs.filter(a=>a.remaining<=0);this.save.eggs=this.save.eggs.filter(a=>a.remaining>0);for(let a of n){let u={id:a.id,uid:"pet-"+Date.now().toString(36)+"-"+this.random().toString(36).slice(2,10),world:a.world,rarity:a.rarity,mutation:a.mutation||"normal"};this.save.creatures.push(u),a.rarity!=="common"&&this.save.rareHatched++,a.rarity==="secret"&&this.save.secretHatched++;let h=u.world+":"+u.rarity+":"+u.mutation;this.save.album.includes(h)||this.save.album.push(h),this.save.seen[a.world]=!0,this.emit("hatch",`${ze[a.world].creature} nasceu! Vale ${this.saleValue(a.world,a.rarity,a.mutation)} integros (${Lt[a.rarity].name}).`,a.world)}if(this.mode==="train"){this.moving=1,this.sprinting=!1,this.save.trainXP+=e*this.trainingRate(),this.energy=Math.min(this.maxEnergy(),this.energy+e*20),this.save.trainXP>=this.trainTarget()&&(this.save.trainXP-=this.trainTarget(),this.save.training++,this.emit("level",`Treino n\xEDvel ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace(".",",")}.`),this.save.training>=ri&&(this.save.trainXP=0,this.mode="run",this.player.z=16.2));return}let s={x:this.player.x,z:this.player.z},r=t.x||0,o=t.z||0,l=Math.hypot(r,o);l>1&&(r/=l,o/=l),this.moving=Math.min(1,l),this.sprinting=!!t.sprint&&this.energy>1&&this.moving>0,this.energy=An(this.energy+e*(this.sprinting?-32:18+this.save.upgrades.hydration*6+(this.power()==="energy"?8:0)),0,this.maxEnergy()),this.effect("endurance")&&(this.energy=this.maxEnergy());let c=this.raceMode?22*(this.time<(this.pushUntil||0)?.35:1):this.speed()*(this.time<this.slowUntil?.65:1)*(this.carrying===null?1:.92+this.save.upgrades.gloves*.04)*(this.sprinting?1.55+this.save.upgrades.turbo*.1:1);if(this.player.x=An(this.player.x+r*c*e,-9,9),this.player.z=An(this.player.z+o*c*e,-It*ze.length+.8,25),this.raceMode&&this.pushVelocity&&this.time<this.pushUntil){this.player.x=An(this.player.x+this.pushVelocity.x*e,-9,9),this.player.z=An(this.player.z+this.pushVelocity.z*e,-It*ze.length+.8,25);let a=Math.exp(-4*e);this.pushVelocity.x*=a,this.pushVelocity.z*=a}else this.pushVelocity=null;(this.player.vy||this.player.y)&&(this.player.vy-=(this.zone()===6?13:22)*e,this.player.y+=this.player.vy*e,this.player.y<0&&(this.player.y=0,this.player.vy=0,this.airJumps=0)),this.collide(this.player),Mi(this.player),this.save.visited[this.zone()]=!0,this.updateHazard(),Mi(this.player),this.motionSpeed=e?gn(s,this.player)/e:0,this.moving=Math.min(1,this.motionSpeed/Math.max(c,.001));for(let a=0;a<ze.length;a++){let u=this.guardians[a],h={x:kn[a].x,z:kn[a].z-2.5};if(this.carrying===a){if(u.grace=Math.max(0,u.grace-e),this.inBase())u.state="waiting",this.moveGuardian(u,{x:An(this.player.x,-4,4),z:1.5},$s(a),e);else if(u.state="chase",u.grace||this.moveGuardian(u,this.guardianTarget(a,t),$s(a)*(this.guardianBurst(a)?1.18:1)*(this.effect("frost")?.5:1),e),!u.grace&&gn(u,this.player)<.94&&this.player.y<.65){this.catchEgg(a);break}}else u.state!=="idle"&&(this.moveGuardian(u,h,12,e),gn(u,h)<.15&&(u.state="idle"))}}random(){return this.save.rng=Math.imul(this.save.rng,1664525)+1013904223>>>0,this.save.rng/4294967296}rollEgg(e,t){let n=this.random(),s=this.random(),r=e===0&&t===0||n<.46?"common":n<.75?"rare":n<.92||e<6?"epic":n<.988?"legendary":"secret";return{slot:t,rarity:r,mutation:s<.72?"normal":s<.91?"gold":s<.985?"rainbow":"cosmic",availableAt:this.time,refreshAt:this.time+180+this.random()*60}}captureNests(){this.save.nestState=this.nestEggs.map(e=>e.map(t=>({rarity:t.rarity,mutation:t.mutation,cooldown:Number.isFinite(t.availableAt)?Math.max(0,t.availableAt-this.time):18,refresh:Math.max(1,t.refreshAt-this.time)})))}refreshDay(){let e=new Date().toISOString().slice(0,10);this.save.daily.day!==e&&(this.save.daily={day:e,delivered:0,claimed:!1})}companion(){return this.save.creatures.find(e=>e.uid===this.save.companionId)||null}power(){let e=this.companion();return e?hd(e.world):null}equipPet(e){return!this.inBase()||!this.save.creatures.some(t=>t.uid===e)?!1:(this.save.companionId=this.save.companionId===e?null:e,this.emit("upgrade",this.save.companionId?"Companheiro pronto! "+fl(this.companion()):"Companheiro voltou ao curral."),!0)}creatureIncomeRate(e){return ze[e.world].value*Lt[e.rarity].mult*oi[e.mutation||"normal"].mult/1200*(this.effect("incomeBoost")?2:1)}incomeRate(){return this.save.creatures.reduce((e,t)=>e+this.creatureIncomeRate(t),0)}creditIncome(e,t){return e=Math.min(Math.floor(e),1e9-this.save.coins),e<=0?0:(this.save.coins+=e,this.save.incomeEarned+=e,this.events.push({type:"income",amount:e,uid:t?.uid,world:t?.world}),e)}collectIncome(){let e=this.creditIncome(Math.floor(this.save.incomePending+1e-9));return this.save.incomePending=Math.max(0,this.save.incomePending-e),e||!1}updateIncome(e){if(this.collectIncome(),this.save.incomePending>0&&this.save.incomePending<1&&this.save.creatures.length){let t=this.save.creatures[0];t.incomeProgress=(t.incomeProgress||0)+this.save.incomePending,this.save.incomePending=0}for(let t of this.save.creatures)t.incomeProgress=(t.incomeProgress||0)+this.creatureIncomeRate(t)*e;if(this.incomeClock+=e,!(this.incomeClock<3-1e-9)){this.incomeClock=Math.max(0,this.incomeClock-3);for(let t of this.save.creatures){let n=this.creditIncome(Math.floor(t.incomeProgress+1e-9),t);t.incomeProgress=Math.max(0,t.incomeProgress-n)}}}missionProgress(e){let t=this.save[e.key];return Math.min(e.target,Array.isArray(t)?t.filter(Boolean).length:t||0)}claimMission(e){let t=dl.find(n=>n.id===e);return!t||this.save.claimed.includes(e)||this.missionProgress(t)<t.target?!1:(this.save.claimed.push(e),this.save.coins+=t.reward,this.emit("upgrade","Conquista: "+t.name+" \xB7 +"+t.reward+" integros"),!0)}claimDaily(){return this.refreshDay(),this.save.daily.claimed||this.save.daily.delivered<3?!1:(this.save.daily.claimed=!0,this.save.coins+=200,this.emit("upgrade","Expedi\xE7\xE3o do dia: +200 integros!"),!0)}hazard(e=this.zone()){let t=-(e*It+19),n=(this.time+e*.63)%6;return{x:Math.sin(this.time*(e===10?1.6:.8)+e)*3.8,z:t,r:e===4?1.5:1.1,active:n>2&&n<4.6,warning:n>1.2&&n<=2,name:qc[e]}}guardianTarget(e,t){let n=this.player;return e%3===1?{x:An(n.x+(t.x||0)*2,-8,8),z:n.z+(t.z||0)*2}:e%3===2?{x:n.x+Math.sin(this.time*2+e)*1.2,z:n.z}:n}guardianBurst(e){return e>=3&&(this.time+e)%8>6.8}updateHazard(){if(this.effect("bubble")||this.inBase()||this.hazardCooldown>0)return;let e=this.zone(),t=this.hazard(e);t.active&&gn(this.player,t)<t.r+.3&&this.player.y<.8&&(this.hazardCooldown=3,this.runClean=!1,this.energy=Math.max(0,this.energy-12),this.slowUntil=this.time+(e===13?2.5:e===8?2:e===3?1.6:1),[1,7,11,12].includes(e)&&(this.player.x=An(this.player.x+(e%2?1:-1)*2,-8,8)),e===4&&(this.energy=Math.max(0,this.energy-12)),this.emit("obstacle",t.name+"! Pule ou desvie da \xE1rea marcada."))}snapshot(){return this.captureNests(),{incomeRate:this.incomeRate(),hazard:this.hazard(),player:{...this.player},zone:this.zone(),speed:this.speed(),energy:this.energy,capacity:this.capacity(),carrying:this.carrying,carriedEgg:this.carriedEgg?{...this.carriedEgg}:null,nestEggs:this.nestEggs.map(e=>e.map(t=>({...t,available:t.availableAt<=this.time}))),mode:this.mode,time:this.time,interaction:this.interaction(),guardians:this.guardians.map((e,t)=>({...e,speed:$s(t)})),availableAt:[...this.availableAt],trainingAdvice:ze.map((e,t)=>this.trainingAdvice(t)),...JSON.parse(JSON.stringify(this.save))}}};function ud(i,e,{ball:t,cyl:n,torus:s,rod:r,softBox:o}){let g=(m,p,M,y,_=.28)=>{n(m,_,_,.07,16766581,p,M,y,24).rotation.x=Math.PI/2,t(m,_*.83,16117210,p,M,y-.055,1,1,.12),r(m,[p,M,y-.09],[p+_*.5,M+_*.3,y-.09],.016,3425373),r(m,[p,M,y-.09],[p,M+_*.65,y-.09],.02,3425373)},v=(m,p,M,y=7854834,_=.3)=>n(e,0,.09,_,y,m,p,M,5);if(i==="astronautHelmet"){t(e,.41,16117210,0,.04,0,1,.95,1),t(e,.32,7854834,0,.03,-.24,1,.8,.55);for(let m of[-.39,.39])n(e,.1,.1,.1,15235451,m,0,0).rotation.z=Math.PI/2;r(e,[.25,.25,0],[.38,.58,0],.025,16766581),t(e,.065,15235451,.38,.58,0)}if(i==="pirateHat"){o(e,.95,.15,.42,3425373,0,.02,0),n(e,.18,.4,.28,3425373,0,.17,0,3),t(e,.09,16766581,0,.17,-.25,1,1,.2);let m=t(e,.1,15235451,.3,.4,0,.6,2.2,.4);m.rotation.z=-.4}if(i==="wizardHat"){n(e,.48,.5,.07,10849261,0,.02,0),n(e,.015,.3,.84,10849261,0,.45,0);for(let m=0;m<5;m++)v((m%2?1:-1)*(.2-m*.025),.2+m*.1,-.2+m*.025,16766581,.1);s(e,.09,.025,16766581,0,.92,0)}if(i==="ninjaBand"){s(e,.34,.055,15235451,0,.02,0).rotation.x=Math.PI/2,o(e,.28,.14,.035,16117210,0,.04,-.35);for(let m of[-1,1]){let p=o(e,.13,.6,.045,15235451,m*.12,-.15,.32);p.rotation.z=m*.35}v(0,.03,-.39,3425373,.08)}if(i==="sharkHood"){t(e,.39,8103355,0,.03,0,1,.9,1),n(e,0,.17,.38,6522785,0,.43,.02,3);for(let m of[-.25,.25]){t(e,.045,3425373,m,.12,-.27);for(let p=0;p<3;p++)n(e,0,.045,.1,16117210,m*.6+p*.035,-.12,-.32,3).rotation.z=Math.PI}o(e,.49,.08,.1,16117210,0,-.13,-.28)}if(i==="mushroomCap"){t(e,.54,15235451,0,.14,0,1,.48,1),n(e,.3,.3,.12,16117210,0,-.02,0);for(let m=0;m<7;m++){let p=m*2.4;t(e,.07,16117210,Math.sin(p)*.32,.33-m%2*.08,Math.cos(p)*.32,1,.3,1)}}if(i==="flowerCrown"){s(e,.35,.04,7196849,0,0,0).rotation.x=Math.PI/2;for(let m=0;m<6;m++){let p=m*Math.PI/3,M=Math.sin(p)*.35,y=Math.cos(p)*.35;for(let _=0;_<5;_++)t(e,.055,[15235451,10849261,7854834][m%3],M+Math.cos(_*1.256)*.07,.08+Math.sin(_*1.256)*.07,y,1,1,.6);t(e,.04,16766581,M,.08,y-.025)}}if(i==="antlers"){s(e,.32,.04,16766581,0,.02,0).rotation.x=Math.PI/2;for(let m of[-1,1]){r(e,[m*.25,.05,0],[m*.48,.67,0],.05,16766581);for(let p=0;p<3;p++)r(e,[m*(.32+p*.04),.25+p*.15,0],[m*(.48+p*.1),.37+p*.15,0],.033,16766581),t(e,.09,7196849,m*(.48+p*.1),.42+p*.15,0,.6,1,.3)}}if(i==="clockworkCrown"){n(e,.35,.35,.14,16766581,0,.04,0),g(e,0,.36,-.2,.3);for(let m of[-1,1]){s(e,.14,.04,7196849,m*.38,.27,0);for(let p=0;p<6;p++){let M=p*Math.PI/3;o(e,.07,.09,.09,16766581,m*.38+Math.sin(M)*.16,.27+Math.cos(M)*.16,0)}}}if(i==="samuraiHelm"){t(e,.37,3425373,0,.06,0,1,.8,1);for(let m=0;m<3;m++)o(e,.5+m*.1,.1,.35,15235451,0,-.08-m*.09,.07);for(let m of[-1,1])r(e,[m*.1,.19,-.28],[m*.36,.4,-.2],.05,16766581),r(e,[m*.36,.4,-.2],[m*.47,.66,-.12],.04,16766581);v(0,.22,-.31,15235451,.22)}if(i==="monocle"){s(e,.15,.035,16766581,-.15,0,0),t(e,.12,7854834,-.15,0,-.01,1,1,.15);for(let m=0;m<6;m++)s(e,.025,.012,16766581,-.29-m*.009,-.12-m*.045,0);o(e,.08,.035,.035,16766581,0,0,0)}if(i==="heartGlasses"){for(let m of[-.18,.18]){for(let p of[-1,1])t(e,.095,15235451,m+p*.055,.045,0,1,1,.25);n(e,.13,0,.19,15235451,m,-.065,0,3).scale.z=.2}o(e,.12,.03,.05,16766581,0,0,0)}if(i==="snowGoggles"){o(e,.7,.25,.13,16117210,0,0,0);for(let m of[-.18,.18]){t(e,.14,7854834,m,0,-.09,1,.7,.2);for(let p=0;p<3;p++){let M=p*Math.PI/3;r(e,[m-Math.sin(M)*.07,-Math.cos(M)*.07,-.13],[m+Math.sin(M)*.07,Math.cos(M)*.07,-.13],.009,16117210)}}}if(i==="foxMask"){t(e,.31,16117210,0,0,0,1,.8,.2);for(let m of[-1,1])n(e,0,.12,.28,16117210,m*.22,.24,0,3),t(e,.08,15235451,m*.15,0,-.06,1,.6,.3);n(e,0,.07,.14,3425373,0,-.08,-.12,3).rotation.x=-Math.PI/2}if(i==="dragonMask"){t(e,.31,7196849,0,0,0,1,.75,.4),o(e,.22,.16,.2,16766581,0,-.08,-.14);for(let m of[-1,1])n(e,0,.07,.32,16766581,m*.22,.25,0,5),t(e,.06,3425373,m*.14,.02,-.12),t(e,.026,15235451,m*.06,-.06,-.25)}if(i==="owlMask"){for(let m of[-.17,.17])s(e,.19,.045,16766581,m,0,0),t(e,.15,16117210,m,0,.01,1,1,.18),t(e,.07,3425373,m,0,-.05);n(e,0,.07,.15,15235451,0,-.12,-.06,3).rotation.z=Math.PI}if(i==="rainbowVisor"&&(o(e,.72,.26,.1,3425373,0,0,0),[15235451,16759157,16766581,7196849,7854834,8562666,10849261].forEach((m,p)=>o(e,.08,.17,.05,m,(p-3)*.085,0,-.08))),i==="divingMask"){for(let m of[-.15,.15])s(e,.14,.045,7196849,m,0,0),t(e,.11,7854834,m,0,-.01,1,1,.2);r(e,[.36,-.16,0],[.36,.43,0],.04,16766581),r(e,[.36,.43,0],[.48,.43,0],.04,16766581),o(e,.1,.08,.05,16117210,0,-.08,0)}if(i==="timeMask"){g(e,-.15,0,0,.19),s(e,.14,.04,7196849,.2,0,0);for(let m=0;m<8;m++){let p=m*Math.PI/4;o(e,.065,.08,.06,16766581,.2+Math.sin(p)*.18,Math.cos(p)*.18,0)}t(e,.08,7854834,.2,0,-.01,1,1,.2)}if(i==="galaxyMask"){o(e,.68,.27,.1,10849261,0,0,0);for(let m=0;m<6;m++)t(e,.025,16117210,(m-2.5)*.095,Math.sin(m*2)*.07,-.07),m<5&&r(e,[(m-2.5)*.095,Math.sin(m*2)*.07,-.07],[(m-1.5)*.095,Math.sin((m+1)*2)*.07,-.07],.008,16766581);t(e,.07,7854834,.26,.16,0),s(e,.11,.014,16766581,.26,.16,0).rotation.x=.7}if(i==="snailPack"){t(e,.36,14527607,0,0,.1,1,1,.5);for(let m=0;m<3;m++)s(e,.1+m*.08,.035,m%2?16766581:15235451,0,0,.3-m*.015);for(let m of[-.17,.17])r(e,[m,.2,.1],[m,.48,.1],.025,7196849),t(e,.06,7196849,m,.48,.1)}if(i==="turtleShell"){t(e,.43,3425373,0,0,.1,1,1.2,.5);for(let m=0;m<7;m++){let p=m*Math.PI/3;n(e,.13,.13,.08,m?7196849:9818765,m?Math.sin(p)*.25:0,m?Math.cos(p)*.3:0,.31,6).rotation.x=Math.PI/2}s(e,.42,.04,16766581,0,0,.1).scale.y=1.2}if(i==="guitar"){t(e,.27,13143128,0,-.1,.1,1,1.2,.32),t(e,.2,14858878,0,.17,.1,1,1,.32),o(e,.12,.62,.1,8410951,0,.6,.1),o(e,.19,.2,.13,10053966,0,.98,.1),t(e,.08,3425373,0,.1,.19,1,1,.15);for(let m=-1;m<=1;m++)r(e,[m*.025,-.25,.21],[m*.025,.98,.21],.006,16766581)}if(i==="surfboard"){t(e,.35,7854834,0,.1,.12,1,2.3,.23),o(e,.1,1.38,.035,15235451,0,.1,.21),n(e,0,.16,.3,16766581,0,-.37,.26,3).rotation.x=Math.PI/2;for(let m of[-.2,.2])t(e,.045,16117210,m,.2,.2)}if(i==="balloonPack"){o(e,.4,.4,.2,10849261,0,-.05,.08);for(let m=0;m<5;m++){let p=(m-2)*.24,M=.7+m%2*.2;r(e,[0,.15,.1],[p,M,.1],.01,16766581),t(e,.17,[15235451,7196849,16766581,10849261,7854834][m],p,M+.16,.1,1,1.2,1)}}if(i==="butterflyWings"){for(let m of[-1,1])for(let p=0;p<2;p++){let M=m*(p?.38:.45),y=p?-.16:.27,_=t(e,p?.25:.36,p?10849261:15235451,M,y,0,1,1,.16);_.rotation.z=-m*.35;for(let I=0;I<3;I++)t(e,.045,16766581,M+m*I*.07,y+(I-1)*.1,-.055)}t(e,.08,3425373,0,0,0,.6,3,.5)}if(i==="mechanicalWings"){o(e,.3,.45,.2,3425373,0,0,.08);for(let m of[-1,1]){s(e,.14,.04,16766581,m*.22,.15,0);for(let p=0;p<4;p++){let M=m*(.3+p*.17),y=.18+p*.11,_=o(e,.15,.6-p*.07,.08,p%2?16117210:7854834,M,y,0);_.rotation.z=-m*.4,t(e,.035,16766581,M,y+.18,-.06)}}}if(i==="dragonWings"){for(let m of[-1,1]){let p=n(e,0,.48,.9,7196849,m*.45,.17,0,3);p.scale.z=.12,p.rotation.z=-m*.75,r(e,[0,-.1,0],[m*.8,.56,0],.035,16766581);for(let M=0;M<3;M++)r(e,[m*.25,.12,0],[m*(.4+M*.16),-.25+M*.12,0],.025,16766581)}t(e,.12,15235451,0,.12,.05)}if(i==="hourglassPack"){for(let m of[-.5,.5])n(e,.32,.32,.09,16766581,0,m,.12);for(let m of[-.28,.28])r(e,[m,-.5,.12],[m,.5,.12],.035,7196849);n(e,.24,.035,.4,7854834,0,.22,.12,16),n(e,.035,.24,.4,7854834,0,-.22,.12,16),n(e,0,.18,.18,16766581,0,-.32,-.03,12),r(e,[0,.1,-.09],[0,-.3,-.09],.018,16766581)}if(i==="galaxyPortal"){t(e,.34,10849261,0,.14,.12,1,1,.25);for(let m=0;m<3;m++){let p=s(e,.42+m*.13,.035,[16766581,7854834,7196849][m],0,.14,.12);p.rotation.y=(m-1)*.5,p.rotation.x=m*.25}for(let m=0;m<8;m++){let p=m*Math.PI/4;v(Math.sin(p)*.7,.14+Math.cos(p)*.7,.12,m%2?16766581:16117210,.12)}t(e,.09,15235451,.5,.55,.13)}}function dd(i,e,{ball:t,cyl:n,torus:s,rod:r,softBox:o}){let l=Mt[i];if(!l)return;let c=l.color,a=16766581;n(e,.26,.3,.45,4018795,0,.3,0),n(e,.18,.18,.12,a,0,.59,0);let u=.9;if(i==="bubble"&&(t(e,.29,c,0,u,0,1,1.2,.25),s(e,.25,.035,a,0,u,-.06)),i==="frost")for(let h=0;h<3;h++){let d=h*Math.PI/3;r(e,[-Math.sin(d)*.3,u-Math.cos(d)*.3,0],[Math.sin(d)*.3,u+Math.cos(d)*.3,0],.04,c)}if(i==="doubleJump")for(let h of[-.16,.16])r(e,[h,u-.2,0],[h,u+.2,0],.035,c),n(e,0,.11,.2,c,h,u+.25,0,3);if(i==="endurance")for(let h=0;h<3;h++)r(e,[-.25,u+h*.12-.1,0],[.1+h*.07,u+h*.12-.1,0],.035,c),s(e,.08,.03,c,.14+h*.07,u+h*.12-.04,0);if(i==="rush"){n(e,.12,.17,.45,c,0,u,0),n(e,0,.12,.19,a,0,u+.32,0);for(let h of[-.2,.2])o(e,.1,.22,.08,c,h,u-.1,0)}if(i==="trainingBoost"){r(e,[-.3,u,0],[.3,u,0],.04,a);for(let h of[-.27,.27])o(e,.12,.3,.2,c,h,u,0)}if(i==="hatchBoost"&&(t(e,.23,c,0,u,0,1,1.3,1),s(e,.27,.035,a,0,u-.2,0).rotation.x=Math.PI/2,t(e,.055,a,.1,u,-.2)),i==="incomeBoost")for(let h=0;h<4;h++)n(e,.25,.25,.08,h%2?c:a,0,u-.25+h*.1,0)}var so=new O;function xn(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;so.copy(e),so[n]=0,so.normalize();let a=.5*o/(o+l),u=1-so.angleTo(i)/c;return Math.sign(so[t])===1?u*a:l/(o+l)+a+a*(1-u)}var Zs=class i extends mn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new O,a=new O,u=new O(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,v=new O,m=.5/o;for(let p=0,M=0;p<h.length;p+=3,M+=2)switch(c.fromArray(h,p),a.copy(c),a.x-=Math.sign(a.x)*m,a.y-=Math.sign(a.y)*m,a.z-=Math.sign(a.z)*m,a.normalize(),h[p+0]=u.x*Math.sign(c.x)+a.x*r,h[p+1]=u.y*Math.sign(c.y)+a.y*r,h[p+2]=u.z*Math.sign(c.z)+a.z*r,d[p+0]=a.x,d[p+1]=a.y,d[p+2]=a.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[M+0]=xn(v,a,"z","y",r,n),f[M+1]=1-xn(v,a,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-xn(v,a,"z","y",r,n),f[M+1]=1-xn(v,a,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-xn(v,a,"x","z",r,e),f[M+1]=xn(v,a,"z","x",r,n);break;case 3:v.set(0,-1,0),f[M+0]=1-xn(v,a,"x","z",r,e),f[M+1]=1-xn(v,a,"z","x",r,n);break;case 4:v.set(0,0,1),f[M+0]=1-xn(v,a,"x","y",r,e),f[M+1]=1-xn(v,a,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=xn(v,a,"x","y",r,e),f[M+1]=1-xn(v,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Rx={cloth:0,denim:1,skin:2,hair:3,stone:4,wood:5,roof:6,plaster:7,sand:8,snow:9,basalt:10,cloud:11,gold:12,leaf:13,sole:14,trim:15};function Ix(){let t=new Uint8Array(1048576);for(let s=0;s<512;s++)for(let r=0;r<512;r++){let o=r%128/127,l=s%128/127,c=Math.floor(s/128)*4+Math.floor(r/128),a=Math.sin(r*127.1+s*311.7)*43758.5453%1,u=Math.sin(o*15+Math.sin(l*11)*.8)*Math.sin(l*24),h=.88+.045*u+.025*a+.06*(1-l);if(c===0&&(h=.95+.012*u+.005*a),c===1&&(h=.92+.012*Math.sin((o+l)*180)+.008*u),c===2&&(h=.97+.025*Math.exp(-((o-.5)**2+(l-.35)**2)*9)),c===3&&(h=.93+.025*Math.sin(o*14+l*2)),c===4){let g=Math.floor(l*4),v=Math.abs((o*3+g*.5)%1-.5);h=.84+.05*u,(l*4%1<.065||v>.475)&&(h-=.22),l*4%1>.09&&l*4%1<.12&&(h+=.09)}c===5&&(h=.79+.095*Math.sin(o*28+Math.sin(l*8)*1.4)+.025*Math.sin(o*80),(o<.025||o>.975)&&(h-=.19)),c===6&&(h=.85+.06*u,l*5%1<.07&&(h-=.23),(o*4+Math.floor(l*5)*.5)%1<.05&&(h-=.12)),c===7&&(h=.9+.045*u+.02*a-.06*Math.exp(-l*9)),c===8&&(h=.87+.055*u+.025*a+.025*Math.sin(l*48+o*10)),(c===9||c===11)&&(h=.92+.05*u+.02*a),c===10&&(h=.71+.08*u,Math.abs(Math.sin(o*14+Math.sin(l*9)))<.07&&(h-=.2)),c===12&&(h=.76+.2*Math.max(0,Math.sin((o+l)*5))+.04*a),c===13&&(h=.79+.13*Math.sin(o*Math.PI),(Math.abs(o-.5)<.025||Math.sin(l*40+Math.abs(o-.5)*30)>.94)&&(h+=.12)),c===14&&(h=.9),c===15&&(h=.94-.12*Math.exp(-(((o-.5)/.1)**2)));let d=Math.round(xt.clamp(h,.35,1)*255),f=(s*512+r)*4;t[f]=t[f+1]=t[f+2]=d,t[f+3]=255}let n=new zi(t,512,512);return n.colorSpace=Ct,n.magFilter=ln,n.minFilter=Bn,n.generateMipmaps=!0,n.needsUpdate=!0,n}function pl(i,e="cloth"){let t=typeof e=="number"?e:Rx[e]??0,n=i.getAttribute("uv");if(n)for(let s=0;s<n.count;s++)n.setXY(s,(t%4+(2+xt.clamp(n.getX(s),0,1)*124)/128)/4,(Math.floor(t/4)+(2+xt.clamp(n.getY(s),0,1)*124)/128)/4);return i}function Px(i,e=20){let t=[],n=[],s=[];for(let l=0;l<i.length;l++){let[c,a,u,h=0]=i[l];for(let d=0;d<=e;d++){let f=d/e*Math.PI*2;t.push(Math.sin(f)*a,c,Math.cos(f)*u+h),n.push(d/e,l/(i.length-1))}}for(let l=0;l<i.length-1;l++)for(let c=0;c<e;c++){let a=l*(e+1)+c,u=a+e+1;s.push(a,a+1,u,a+1,u+1,u)}let r=new Rt;r.setAttribute("position",new $e(t,3)),r.setAttribute("uv",new $e(n,2)),r.setIndex(s),r.computeVertexNormals();let o=r.attributes.normal;for(let l=0;l<i.length;l++){let c=l*(e+1),a=c+e,u=new O().fromBufferAttribute(o,c).add(new O().fromBufferAttribute(o,a)).normalize();o.setXYZ(c,u.x,u.y,u.z),o.setXYZ(a,u.x,u.y,u.z)}return r}function ro(i,e=32,t=3){let n=[];for(let s=0;s<i.length-1;s++)for(let r=0;r<t;r++){let o=r/t,l=o*o*(3-2*o),c=i[s],a=i[s+1];n.push([xt.lerp(c[0],a[0],o),xt.lerp(c[1],a[1],l),xt.lerp(c[2],a[2],l),xt.lerp(c[3]||0,a[3]||0,l)])}return n.push(i.at(-1)),Px(n,e)}function Lx(){let i=new Uint8Array([62,128,196,255]),e=new zi(i,4,1,jr);return e.minFilter=kt,e.magFilter=kt,e.generateMipmaps=!1,e.needsUpdate=!0,e}var ml=class{constructor({curved:e=!1}={}){this.geometries=new Map,this.materials=new Map,this.atlas=Ix(),this.toonRamp=Lx(),this.curved=e}material(e,t="cloth",n=0){let s=e+":"+t+":"+n;if(!this.materials.has(s)){let r=new Gi({color:e,map:this.atlas,gradientMap:this.toonRamp});this.curved&&(r.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`vec4 mvPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
mvPosition=instanceMatrix*mvPosition;
#endif
vec4 rushWorld=modelMatrix*mvPosition;
float rushDistance=max(0.0,-rushWorld.z-28.0);
rushWorld.y-=rushDistance*rushDistance*0.0005;
mvPosition=viewMatrix*rushWorld;
gl_Position=projectionMatrix*mvPosition;`)},r.customProgramCacheKey=()=>"rush-toon-curve-v2"),this.materials.set(s,r)}return this.materials.get(s)}outlineMaterial(){return this.contour||(this.contour=new Kn({color:1455943,side:Vt,depthWrite:!1}),this.contour.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.012;`)},this.contour.customProgramCacheKey=()=>"rush-ink-contour-v1"),this.contour}geometry(e,t="cloth"){let n=e+":"+t;if(!this.geometries.has(n)){let s;e==="round"?s=new Zs(1,1,1,1,.13):e==="ball"?s=new vi(1,12,8):e==="disk"?s=new Cr(1,16):e==="rock"?s=new kr(1,1):e==="cyl"?s=new xi(1,1,1,16):e==="cone"?s=new Rr(1,1,12):e==="ring"?s=new _i(1,.18,6,24):e==="plane"?s=new Hi(1,1):s=new mn(1,1,1),this.geometries.set(n,pl(s,t))}return this.geometries.get(n)}mesh(e,t,n,s,r,o,l=1,c=l,a=l,u="cloth",h=0){let d=new pt(this.geometry(t,u),this.material(n,u,h));return d.position.set(s,r,o),d.scale.set(l,c,a),e.add(d),d}own(e,t,n="cloth"){return this.geometries.has(e)?t.dispose():this.geometries.set(e,pl(t,n)),this.geometries.get(e)}dispose(){for(let e of this.geometries.values())e.dispose();for(let e of this.materials.values())e.dispose();this.contour?.dispose(),this.atlas.dispose(),this.toonRamp.dispose()}};function Js(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new Rt,a=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(a,f,u),a+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=fd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);let g=fd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function fd(i){let e,t,n,s=-1,r=0;for(let a=0;a<i.length;++a){let u=i[a];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),l=new qt(o,t,n),c=0;for(let a=0;a<i.length;++a){let u=i[a];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let v=u.getComponent(d,g);l.setComponent(d+h,g,v)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(l.gpuType=s),l}var Dx=["Ba\xEDa das Esmeraldas","Pontes de Coral","Tempestade no Caribe","Templo das Cascatas","Jardins Suspensos","Fuga das Ru\xEDnas","Passagem Polar","Desfiladeiro de Gelo","A Grande Avalanche","Pontes sobre a Lava","Cratera em Erup\xE7\xE3o","Cora\xE7\xE3o do Vulc\xE3o","Arquip\xE9lago das Nuvens","Aurora Celestial","A \xDAltima Expedi\xE7\xE3o"],Cy=Dx.map((i,e)=>({name:i,index:e,region:Math.floor(e/3),duration:240,speed:18+e*.45,seed:1703+e*7919,bonus:150+e*25,chapters:[["Costa dos coqueiros","Passarela de coral","Ilhas e cascatas","Reta das esmeraldas"],["Entrada do templo","Jardim das colunas","Pontes ancestrais","Santu\xE1rio perdido"],["Encosta gelada","T\xFAnel das agulhas","Zona de avalanche","Passagem do cume"],["Rio de magma","Pontes de basalto","Chuva de brasas","Fuga da cratera"],["Mar de nuvens","Portais celestes","Chuva de estrelas","Horizonte final"]][Math.floor(e/3)]}));var gl=[["cap-coral","Bon\xE9 Coral","head",180,16740445,"cap"],["cap-ocean","Bon\xE9 Oceano","head",220,3786204,"cap"],["hat-explorer","Chap\xE9u Explorador","head",450,14399092,"hat"],["crown-ice","Coroa Glacial","head",1200,9955327,"crown"],["crown-solar","Coroa Solar","head",3200,16764253,"crown"],["halo-aurora","Halo Aurora","head",6500,15049215,"halo"],["pack-coral","Mochila Coral","back",250,16742507,"pack"],["pack-ocean","Mochila Oceano","back",300,5887725,"pack"],["pack-moss","Mochila Selva","back",500,11195498,"pack"],["wings-ice","Asas de Gelo","back",1800,10676735,"wings"],["wings-flame","Asas da F\xEAnix","back",4500,16751432,"wings"],["wings-celestial","Asas Celestiais","back",9e3,14993407,"wings"],["suit-teal","Traje Turquesa","suit",200,2740413,"suit"],["suit-coral","Traje Coral","suit",250,16738655,"suit"],["suit-forest","Traje da Selva","suit",400,9222757,"suit"],["suit-glacier","Traje Glacial","suit",850,10083583,"suit"],["suit-magma","Traje Magma","suit",1700,16746047,"suit"],["suit-cosmos","Traje C\xF3smico","suit",4e3,12291571,"suit"],["trail-mint","Rastro Menta","trail",350,6813378,"trail"],["trail-gold","Rastro Dourado","trail",600,16764246,"trail"],["trail-snow","Rastro Polar","trail",900,12119807,"trail"],["trail-fire","Rastro de Fogo","trail",1500,16744776,"trail"],["trail-orchid","Rastro Orqu\xEDdea","trail",2800,15177727,"trail"],["trail-starlight","Rastro Estelar","trail",7500,16773309,"trail"]].map(([i,e,t,n,s,r])=>({id:i,name:e,slot:t,price:n,color:s,model:r}));var Zt=(i,e,t)=>xt.smoothstep(t,i,e),Hn=class{constructor(e=22,t=.68){this.frequency=e,this.damping=t,this.value=0,this.velocity=0}step(e,t){if(t<=0)return this.value;let n=this.frequency,s=this.damping,r=n*Math.sqrt(1-s*s),o=this.value-e,l=(this.velocity+s*n*o)/r,c=Math.exp(-s*n*t),a=Math.cos(r*t),u=Math.sin(r*t),h=o*a+l*u;return this.value=e+c*h,this.velocity=c*(-s*n*h+r*(-o*u+l*a)),this.value}},js=class{constructor(e,t,n){Object.assign(this,{thigh:e,knee:t,foot:n}),this.upper=t.position.clone(),this.lower=n.position.clone(),this.l1=this.upper.length(),this.l2=this.lower.length(),this.upper.normalize(),this.lower.normalize(),this.inverse=new je,this.end=new O,this.axis=new O,this.pole=new O,this.joint=new O,this.lowerDirection=new O,this.q1=new gt,this.q2=new gt,this.inverseQ=new gt,this.parentQ=new gt,this.target=new O,this.contact=!1}solve(e,t,n=1){this.target.copy(e),this.thigh.parent.updateWorldMatrix(!0,!1),this.inverse.copy(this.thigh.parent.matrixWorld).invert(),this.end.copy(e).applyMatrix4(this.inverse).sub(this.thigh.position);let s=xt.clamp(this.end.length(),Math.abs(this.l1-this.l2)+1e-4,this.l1+this.l2-1e-4);this.axis.copy(this.end).normalize(),this.pole.set(0,0,-1).addScaledVector(this.axis,this.axis.z),this.pole.lengthSq()<1e-5&&this.pole.set(0,1,0).addScaledVector(this.axis,-this.axis.y),this.pole.normalize();let r=(this.l1*this.l1-this.l2*this.l2+s*s)/(2*s),o=Math.sqrt(Math.max(0,this.l1*this.l1-r*r));this.joint.copy(this.axis).multiplyScalar(r).addScaledVector(this.pole,o),this.q1.setFromUnitVectors(this.upper,this.lowerDirection.copy(this.joint).normalize()),this.lowerDirection.copy(this.axis).multiplyScalar(s).sub(this.joint).applyQuaternion(this.inverseQ.copy(this.q1).invert()).normalize(),this.q2.setFromUnitVectors(this.lower,this.lowerDirection),this.thigh.quaternion.slerp(this.q1,n).normalize(),this.knee.quaternion.slerp(this.q2,n).normalize(),this.thigh.updateWorldMatrix(!1,!0),this.knee.getWorldQuaternion(this.parentQ).normalize(),this.q2.copy(this.parentQ).invert().multiply(t).normalize(),this.foot.quaternion.slerp(this.q2,n).normalize(),this.foot.updateWorldMatrix(!1,!0)}};function oo(i){let e=Math.cos(i),t=Math.sin(i);return .012-Math.min(-.1*e+.395*t,-.1*e-.205*t)}function xl(i){let e=(i%1+1)%1,t=.38;if(e<t){let o=e/t,l=.1*(1-Zt(0,.25,o))-.65*Zt(.55,1,o);return{z:xt.lerp(-.4,.4,o),y:oo(l),pitch:l,contact:!0}}let n=(e-t)/(1-t),s=1-n,r=n<.28?xt.lerp(-.65,-1.05,Zt(0,.28,n)):xt.lerp(-1.05,.1,Zt(.28,1,n));return{z:s*s*s*.4+3*s*s*n*.78-3*s*n*n*.66-n*n*n*.4,y:oo(r)+Math.sin(Math.PI*n)**1.2*.49,pitch:r,contact:!1}}var Ei=xt.clamp,vn=(i,e,t=0,n=0,s=0)=>{let r=new gi;return r.name=i,r.position.set(t,n,s),e.add(r),r},is=(i,e)=>new Ye(i).multiplyScalar(e).getHex();function ao(i,e,t,n,s,r=.009,o="trim"){let l=new Ds(n.map(u=>new O(...u))),c=i.own(t,new Vr(l,12,r,5,!1),o),a=new pt(c,i.material(s,o));return e.add(a),a}function pd(i,e){let t=new At,n=e.color,s=(r,o,l,c,a,u,h=u,d=u,f="cloth",g=0)=>i.mesh(t,r,o,l,c,a,u,h,d,f,g);if(e.model==="cap"||e.model==="hat"){let r=i.own("cap-shell-v2",ro([[0,.357,.327],[.06,.375,.345],[.18,.348,.325],[.29,.26,.255],[.35,.13,.13],[.372,0,0]],24,2),"cloth");if(t.add(new pt(r,i.material(n))),e.model==="hat")s("round",n,0,.025,-.07,.98,.07,.9),s("cyl",7950655,0,.06,0,.375,.07,.345,"wood");else{let c=new Us;c.moveTo(-.31,-.13),c.bezierCurveTo(-.44,-.37,-.34,-.63,0,-.66),c.bezierCurveTo(.34,-.63,.44,-.37,.31,-.13),c.quadraticCurveTo(0,-.3,-.31,-.13);let a=new zr(c,{depth:.035,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1,curveSegments:8});a.rotateX(Math.PI/2),a.translate(0,.025,0),t.add(new pt(i.own("cap-visor-v2",a,"cloth"),i.material(is(n,.58)))),ao(i,t,"cap-brim-seam",[[-.28,.026,-.34],[-.23,.026,-.55],[0,.026,-.61],[.23,.026,-.55],[.28,.026,-.34]],16767919,.007);for(let u of[-1,1])ao(i,t,"cap-panel-"+u,[[u*.28,.04,-.21],[u*.26,.17,-.23],[u*.17,.29,-.19],[0,.375,0]],is(n,1.35),.007,"cloth");s("ball",is(n,.65),0,.374,0,.045,.02,.045,"cloth")}s("round",1588308,0,.14,-.326,.23,.17,.032,"denim");let o=s("round",16772538,-.035,.14,-.35,.037,.11,.015,"trim");o.rotation.z=-.3;let l=s("round",16772538,.035,.14,-.35,.037,.11,.015,"trim");l.rotation.z=-.3}if(e.model==="crown"){s("cyl",n,0,.06,0,.35,.13,.33,"gold",.4);for(let r=0;r<7;r++){let o=r*Math.PI*2/7;s("cone",n,Math.sin(o)*.3,.23,Math.cos(o)*.29,.075,.32,.075,"gold",.3),s("rock",15007743,Math.sin(o)*.32,.08,Math.cos(o)*.31,.045,.06,.04,"gold")}}if(e.model==="halo"){let r=s("ring",n,0,.34,0,.43,.43,.43,"gold",.25);r.rotation.x=Math.PI/2;for(let o=0;o<4;o++)s("rock",16777215,Math.sin(o*Math.PI/2)*.43,.34,Math.cos(o*Math.PI/2)*.43,.035)}if(e.model==="pack"){s("round",n,0,0,0,.58,.69,.25),s("round",n,0,-.14,.13,.43,.24,.14),s("round",16767898,0,.02,.146,.48,.035,.025,"trim");for(let r of[-.23,.23])s("round",2639963,r,0,-.14,.055,.65,.07,"denim");s("round",16111773,0,.37,0,.17,.045,.05,"trim"),s("round",16576724,0,.12,.145,.16,.15,.025,"trim")}if(e.model==="wings"){for(let r of[-1,1])for(let o=0;o<5;o++){let l=s("ball",n,r*(.15+o*.12),.15-o*.08,0,.13,.45-o*.045,.055,"leaf");l.rotation.z=r*(-.45-o*.1)}s("rock",16772540,0,.1,.06,.11)}if(e.model==="suit"){s("round",n,0,0,0,.65,.8,.26);for(let r of[-1,1]){let o=s("round",n,r*.44,.1,0,.23,.6,.24);o.rotation.z=r*.3}s("round",16768146,0,-.15,.14,.36,.2,.03,"trim"),s("round",16381145,0,.35,.15,.2,.05,.03,"trim")}if(e.model==="trail")for(let r=0;r<12;r++){let o=r/11;s("ball",n,Math.sin(o*5)*.22,(o-.5)*1.2,0,.03+o*.075,.03+o*.075,.03+o*.075,"gold")}return t}var vl=class{constructor(e,t,n={}){this.art=e,this.root=new At,this.root.name="RushExplorer",this.rig=new At,this.root.add(this.rig),this.meshes=[],this.ownedGeometry=[];let s=vn("hips",this.rig,0,.9,0),r=vn("spine",s,0,.19,0),o=vn("chest",r,0,.26,0),l=vn("neck",o,0,.24,0),c=vn("head",l,0,.12,0);this.bones={hips:s,spine:r,chest:o,neck:l,head:c};for(let[A,b]of[["L",-1],["R",1]]){let S=vn("shoulder"+A,o,b*.355,.07,0),U=vn("elbow"+A,S,b*.035,-.3,0),V=vn("hand"+A,U,0,-.28,0),Z=vn("thigh"+A,s,b*.19,-.04,0),K=vn("knee"+A,Z,0,-.38,.025),j=vn("foot"+A,K,0,-.34,-.025);Object.assign(this.bones,{["shoulder"+A]:S,["elbow"+A]:U,["hand"+A]:V,["thigh"+A]:Z,["knee"+A]:K,["foot"+A]:j})}for(let[A,b]of[["cap",c],["fringe",c],["hood",o],["back",o]])this.bones[A]=vn(A,b);this.rig.updateMatrixWorld(!0),this.skeleton=new ki(Object.values(this.bones)),this.index=Object.fromEntries(this.skeleton.bones.map((A,b)=>[A.name,b]));let a=n.suitColor||gl.find(A=>A.id===t.equipped.suit)?.color||1621166,u=1521741,h=15642759,d=3681073,f=16771783,g=this.skinPart("jacket",[[.85,.24,.17],[.91,.29,.2],[1.05,.32,.215],[1.26,.365,.22],[1.39,.35,.205],[1.48,.23,.16],[1.53,.13,.11]],a,"cloth",A=>{if(A.y<1.13){let S=Zt(.94,1.13,A.y);return[["hips",1-S],["spine",S]]}let b=Zt(1.13,1.36,A.y);return[["spine",1-b],["chest",b]]}),v=g.geometry.attributes.position,m=[];for(let A=0;A<v.count;A++){let b=v.getX(A),S=v.getY(A),U=v.getZ(A),V=new Ye(a);S<.94?V.set(u):U<-.14&&Math.abs(b)<.1?V.set(f):S>1.3&&U>.1&&V.set(is(a,.66)),m.push(V.r,V.g,V.b)}g.geometry.setAttribute("color",new $e(m,3)),g.material=this.colourMaterial("cloth"),this.headMesh=this.skinPart("face",[[1.57,.055,.06,-.035],[1.62,.17,.16,-.04],[1.72,.285,.245,-.025],[1.84,.326,.287],[1.99,.32,.285,.012],[2.12,.25,.235,.02],[2.19,.13,.135,.02],[2.22,0,0,.02]],h,"skin",()=>[["head",1]]);let p=(A,b,S,U,V,Z)=>{let K=this.part(c,"disk",A,b,S,U,V,Z,1,"trim");return K.rotation.y=Math.PI,K};for(let[A,b]of[["L",-1],["R",1]]){let S=this.profile([[.81,0,0],[.84,.095,.09],[.89,.12,.11],[.98,.14,.125],[1.12,.145,.13],[1.28,.16,.145],[1.4,.16,.14],[1.47,.1,.095],[1.49,0,0]],16),U=S.attributes.position;for(let me=0;me<U.count;me++)U.setX(me,U.getX(me)+b*(.4-(U.getY(me)-1.12)*.09));let V=this.bindPart(S,a,"cloth",me=>{let Ve=1-Zt(.99,1.19,me.y);return[["shoulder"+A,1-Ve],["elbow"+A,Ve]]}),Z=[];for(let me=0;me<U.count;me++){let Ve=new Ye(U.getY(me)<.92?u:U.getY(me)>1.29?is(a,.72):a);Z.push(Ve.r,Ve.g,Ve.b)}V.geometry.setAttribute("color",new $e(Z,3)),V.material=this.colourMaterial("cloth");let K=this.profile([[.13,.115,.13],[.22,.14,.145],[.33,.162,.17],[.47,.165,.175],[.67,.18,.19],[.85,.19,.185],[.94,.17,.16]],18),j=K.attributes.position;for(let me=0;me<j.count;me++)j.setX(me,j.getX(me)+b*.19);this.bindPart(K,3233394,"denim",me=>{let Ve=1-Zt(.37,.59,me.y);return[["thigh"+A,1-Ve],["knee"+A,Ve]]});let J=this.bones["hand"+A];this.part(J,"ball",h,0,-.055,-.005,.105,.135,.09,"skin"),this.part(J,"ball",h,-b*.085,-.03,-.035,.055,.075,.055,"skin"),this.part(J,"cyl",u,0,.035,0,.116,.09,.105,"cloth");let fe=this.bones["foot"+A];this.part(fe,"round",u,0,-.055,-.09,.365,.09,.59,"sole"),this.part(fe,"round",16775398,0,-.005,-.1,.36,.13,.58,"sole"),this.part(fe,"round",16745045,0,.1,-.055,.31,.22,.445,"cloth"),this.part(fe,"ball",f,0,.07,-.265,.163,.105,.145,"sole"),this.part(fe,"round",u,0,.12,.13,.32,.18,.07,"denim"),this.part(fe,"round",16764777,0,.22,-.08,.18,.075,.19,"cloth");for(let me=0;me<3;me++)this.part(fe,"round",16775647,0,.225-me*.012,-.06-me*.055,.21,.022,.03,"trim");let Q=this.part(fe,"round",f,b*.16,.1,-.055,.022,.075,.21,"trim");Q.rotation.x=-.25,this.part(fe,"round",f,0,.205,.16,.075,.15,.045,"trim"),this.part(this.bones["knee"+A],"cyl",2113111,0,-.22,-.01,.145,.13,.145,"denim"),this.part(c,"ball",h,b*.315,.09,.005,.076,.102,.065,"skin"),this.part(c,"ball",14126192,b*.357,.09,-.014,.024,.053,.025,"skin"),p(10444108,b*.124,.155,-.286,.091,.089),p(16775657,b*.124,.16,-.29,.083,.08),p(3627878,b*.126,.157,-.294,.034,.048),p(1321272,b*.127,.16,-.298,.024,.038),p(16777215,b*.126-.013,.18,-.302,.012,.017);let be=this.part(c,"round",d,b*.125,.287,-.258,.16,.039,.035,"hair");be.rotation.z=b*.12,this.part(c,"ball",15770759,b*.21,.025,-.223,.055,.033,.013,"skin");let Ee=this.part(c,"ball",d,b*.294,.175,.025,.05,.16,.22,"hair");Ee.rotation.z=-b*.12}this.part(c,"ball",h,0,.052,-.282,.071,.072,.079,"skin"),ao(e,c,"runner-smile-v2",[[-.065,-.038,-.207],[0,-.052,-.218],[.064,-.033,-.209]],8931394,.009,"skin"),this.part(c,"ball",16238754,0,-.07,-.17,.08,.024,.026,"skin");let M=this.profile([[.015,.26,.225,.025],[.1,.326,.287,.022],[.27,.351,.312,.024],[.42,.315,.287,.024],[.515,.22,.21,.02],[.55,.1,.1,.02],[.56,0,0,.02]],24),y=M.attributes.position;for(let A=0;A<y.count;A++){let b=y.getY(A),S=y.getZ(A);b<.27&&S<0&&y.setY(A,b+Math.pow(Math.max(0,-S/.32),2)*(.27-b))}M.computeVertexNormals();let _=new pt(e.own("runner-hair-v2",M,"hair"),e.material(d,"hair"));_.name="closed-hair",c.add(_);for(let A=0;A<3;A++){let b=this.part(this.bones.fringe,"ball",d,-.17+A*.105,.32+A*.025,-.25,.12,.16,.1,"hair");b.rotation.z=-.45}this.part(l,"cyl",h,0,0,0,.105,.14,.095,"skin"),this.part(this.bones.hood,"ball",is(a,.54),0,.12,.185,.255,.19,.12,"cloth"),ao(e,this.bones.hood,"runner-hood-v2",[[-.2,.24,.11],[-.24,.09,.21],[0,-.015,.31],[.24,.09,.21],[.2,.24,.11]],a,.052,"cloth"),this.part(o,"round",f,0,-.15,.236,.23,.23,.023,"trim");for(let A of[-1,1]){let b=this.part(o,"round",a,A*.04,-.15,.255,.04,.13,.013,"trim");b.rotation.z=-.35}for(let A of[-.12,.12])ao(e,o,"runner-cord-"+A,[[A,.12,-.17],[A*.9,.02,-.225],[A*1.1,-.085,-.23]],f,.01),this.part(o,"cyl",16759116,A*1.1,-.085,-.23,.014,.04,.014,"trim");for(let A of[-1,1]){let b=this.part(o,"round",is(a,.66),A*.21,-.22,-.182,.12,.023,.025,"cloth");b.rotation.z=-A*.45}let I=n.hat||gl.find(A=>A.id===t.equipped.head)||{color:15953229,model:"cap"},C=pd(e,I);C.position.set(0,I.model==="cap"||I.model==="hat"?.25:.38,.015),I.model==="cap"&&C.rotation.set(.06,Math.PI+.12,-.075),this.bones.cap.add(C);let N=n.back||gl.find(A=>A.id===t.equipped.back);if(N){let A=pd(e,N);A.position.set(0,-.03,.32),this.bones.back.add(A)}this.batchAttachments(),this.addContours(),this.root.traverse(A=>{A.isMesh&&(A.castShadow=!A.userData.contour,A.receiveShadow=!1)}),this.mixer=new $r(this.rig),this.clips=this.createClips(),this.actions={},this.poseWeights={};for(let A of this.clips){let b=this.mixer.clipAction(A);b.play(),b.paused=!0,b.setEffectiveWeight(A.name==="idle"?1:0),this.actions[A.name]=b,this.poseWeights[A.name]=A.name==="idle"?1:0}this.current="idle",this.hit=0,this.landAge=10,this.wasAirborne=!1,this.slideBlend=0,this.footPoint=new O,this.elapsed=0,this.gaitPhase=0,this.hasFrame=!1,this.previousVisualY=0,this.previousX=0,this.previousVx=0,this.previousSpine=0,this.legs={};for(let A of["L","R"])this.legs[A]=new js(this.bones["thigh"+A],this.bones["knee"+A],this.bones["foot"+A]);this.lean=new Hn(20,.8),this.secondary={};for(let A of["cap","hood","back","fringe"])this.secondary[A]={pitch:new Hn(A==="cap"?27:19,.62),roll:new Hn(20,.7)};this.ikTarget=new O,this.footOrientation=new gt,this.heading=new gt,this.euler=new $t,this.parentInverse=new je,this.parentOrientation=new gt}part(e,t,n,s,r,o,l,c=l,a=l,u="cloth"){return this.art.mesh(e,t,n,s,r,o,l,c,a,u)}profile(e,t=24){return ro(e,t,2)}skinPart(e,t,n,s,r){let o=this.bindPart(this.profile(t,24),n,s,r);return o.name=e,o}colourMaterial(e){let t=this.art.material(16777215,e);return t.vertexColors=!0,t}addContours(){let e=[];this.rig.traverse(t=>{t.isMesh&&e.push(t)});for(let t of e){let n=t.isSkinnedMesh?new Nn(t.geometry,this.art.outlineMaterial()):new pt(t.geometry,this.art.outlineMaterial());n.name="ink-"+t.name,n.userData.contour=!0,n.frustumCulled=!1,n.renderOrder=1,t.parent.add(n),t.isSkinnedMesh&&n.bind(this.skeleton,t.bindMatrix)}}batchAttachments(){this.rig.updateMatrixWorld(!0);for(let e of Object.values(this.bones)){let t=e.children.filter(l=>!l.isBone),n=[],s=e.matrixWorld.clone().invert();for(let l of t)l.traverse(c=>{if(!c.isMesh||c.isSkinnedMesh)return;let a=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();a.applyMatrix4(new je().multiplyMatrices(s,c.matrixWorld));let u=c.material.color,h=[];for(let d=0;d<a.attributes.position.count;d++)h.push(u.r,u.g,u.b);a.setAttribute("color",new $e(h,3)),n.push(a)});if(!n.length)continue;let r=Js(n);if(n.forEach(l=>l.dispose()),!r)throw Error("Invalid runner attachments");for(let l of t)e.remove(l);let o=new pt(r,this.colourMaterial("trim"));o.name=e.name+"-details",e.add(o),this.ownedGeometry.push(r)}}bindPart(e,t,n,s){pl(e,n);let r=[],o=[],l=new O;for(let a=0;a<e.attributes.position.count;a++){l.fromBufferAttribute(e.attributes.position,a);let u=s(l);for(let h=0;h<4;h++)r.push(u[h]?this.index[u[h][0]]:0),o.push(u[h]?.[1]||0)}e.setAttribute("skinIndex",new Un(r,4)),e.setAttribute("skinWeight",new $e(o,4));let c=new Nn(e,this.art.material(t,n));return c.frustumCulled=!1,this.rig.add(c),c.bind(this.skeleton,new je),this.meshes.push(c),this.ownedGeometry.push(e),c}createClips(){let e=(h,d,f)=>{let g=[],v=f.map(m=>m[0]*d);for(let m of Object.keys(this.bones)){let p=[];for(let[,M]of f){let y=new gt().setFromEuler(new $t(...M[m]||[0,0,0]));p.push(y.x,y.y,y.z,y.w)}g.push(new ei(m+".quaternion",v,p))}return new $i(h,d,g)},t=[];for(let h=0;h<=16;h++){let d=h/16*Math.PI*2,f=Math.sin(d);t.push([h/16,{hips:[0,f*.09,f*.045],spine:[-.21,f*.07,-f*.035],chest:[-.05,-f*.19,f*.045],head:[.22,f*.035,-f*.045],shoulderL:[.15-Math.cos(d)*1.04,-.12,-.24],shoulderR:[.15+Math.cos(d)*1.04,.12,.24],elbowL:[1.2-Math.cos(d)*.3,0,-.08],elbowR:[1.2+Math.cos(d)*.3,0,.08],handL:[.1,0,-.06],handR:[.1,0,.06],thighL:[f*.6,0,0],thighR:[-f*.6,0,0],kneeL:[-.7-Math.max(0,-f)*.6,0,0],kneeR:[-.7-Math.max(0,f)*.6,0,0]}])}let n=[];for(let h=0;h<=8;h++){let d=h/8*Math.PI*2;n.push([h/8,{chest:[Math.sin(d)*.02,0,0],head:[0,Math.sin(d)*.05,0],shoulderL:[.05,0,-.08],shoulderR:[.05,0,.08],elbowL:[.12,0,0],elbowR:[.12,0,0]}])}let s={spine:[-.3,0,0],head:[.22,0,0],shoulderL:[-.6,0,-.15],shoulderR:[-.6,0,.15],elbowL:[.45,0,0],elbowR:[.45,0,0],thighL:[.65,0,0],thighR:[.65,0,0],kneeL:[-1.2,0,0],kneeR:[-1.2,0,0],footL:[.55,0,0],footR:[.55,0,0]},r={spine:[-.18,.1,0],chest:[-.05,-.16,0],head:[.18,0,0],shoulderL:[1.55,-.1,-.38],shoulderR:[-.6,.1,.3],elbowL:[1.1,0,0],elbowR:[1.25,0,0],thighL:[1.25,0,-.16],thighR:[-.35,0,.13],kneeL:[-1.35,0,0],kneeR:[-.6,0,0],footL:[.05,0,0],footR:[.65,0,0]},o={spine:[-.26,.12,-.06],chest:[-.07,-.22,.04],head:[.25,.05,.02],shoulderL:[1.05,-.1,-.48],shoulderR:[-.3,.1,.36],elbowL:[1.35,0,0],elbowR:[.95,0,0],thighL:[1.65,0,-.2],thighR:[.12,0,.15],kneeL:[-1.5,0,0],kneeR:[-.42,0,0],footL:[-.15,0,0],footR:[.38,0,0]},l={spine:[-.2,0,0],head:[.17,0,0],shoulderL:[.4,0,-.3],shoulderR:[-.25,0,.28],elbowL:[.85,0,0],elbowR:[.8,0,0],thighL:[.55,0,-.12],thighR:[.12,0,.1],kneeL:[-.65,0,0],kneeR:[-.4,0,0],footL:[.12,0,0],footR:[.18,0,0]},c={spine:[-1.22,0,0],chest:[-.1,0,0],head:[.86,0,0],shoulderL:[-.4,0,-.32],shoulderR:[-.35,0,.32],elbowL:[.35,0,0],elbowR:[.4,0,0],thighL:[1.3,0,-.08],thighR:[1.1,0,.08],kneeL:[-2,0,0],kneeR:[-2.1,0,0],footL:[.7,0,0],footR:[1,0,0]},a={...c,chest:[-.12,.09,-.055],head:[.88,-.07,.03],shoulderL:[-.48,0,-.38],shoulderR:[-.25,0,.28]},u={spine:[.1,0,.14],head:[-.08,-.16,0],shoulderL:[.8,0,-.5],shoulderR:[.3,0,.6],elbowL:[.8,0,0],elbowR:[.5,0,0]};return[e("run",.66,t),e("idle",3,n),e("jump",1,[[0,s],[.07,s],[.18,r],[.42,o],[.62,o],[.88,l],[1,s]]),e("slide",1,[[0,s],[.12,c],[.38,a],[.72,c],[.93,c],[1,c]]),e("hit",.4,[[0,u],[.35,u],[1,{}]])]}event(e){(e==="hit"||e==="shield-hit")&&(this.hit=.32)}update(e,t,{paused:n=!1,preview:s=!1,previewYaw:r,externalVelocityY:o=0,time:l=0,reducedMotion:c=!1}={}){if(n&&!s&&this.hasFrame)return;t=Ei(t,0,.05),this.elapsed+=t;let a=!s&&e.jump>0,u=!s&&e.slide>0;this.wasAirborne&&!a&&(this.landAge=0),this.wasAirborne=a,this.landAge+=t,this.hit=Math.max(0,this.hit-t);let h=a?Ei(1-e.jump/1.05,0,1):0,d=u?Ei(1-e.slide/.95,0,1):0,f=s||n?"idle":u?"slide":a?"jump":this.hit>0?"hit":"run",g=f==="run"||f==="hit",v=Ei((e.speed||e.level?.speed||18)/18,1,2.4);g&&(this.gaitPhase=(this.gaitPhase+t/(.54/Math.sqrt(v)))%1);let m=1-Math.exp(-t*(f==="slide"?42:f==="jump"?32:18));for(let[V,Z]of Object.entries(this.actions))this.poseWeights[V]+=((f===V?1:0)-this.poseWeights[V])*m,Z.setEffectiveWeight(this.poseWeights[V]),V==="run"?Z.time=this.gaitPhase*.66:V==="jump"&&a?Z.time=h:V==="slide"&&u?Z.time=d:V==="hit"?Z.time=.4-this.hit:V==="idle"&&(Z.time=this.elapsed%3);this.current=f,this.mixer.update(t),this.slideBlend+=((u?1:0)-this.slideBlend)*(1-Math.exp(-t*(u?42:18)));let p=a?(1-Zt(.055,.13,h))*Math.sin(Math.min(1,h/.09)*Math.PI)*.1:0,M=this.landAge<.22?Math.sin(this.landAge/.22*Math.PI)*(1-this.landAge/.22)*.17:0,y=g?-Math.sin(this.gaitPhase*Math.PI*4)*.035:s?Math.sin(this.elapsed*2.1)*.009:0,_=c?.2:1,I=a?Math.exp(-(((h-.18)/.1)**2))*.075:0,C=(p+M)*_;this.rig.scale.set(1+C*.35-I*.35*_,1-C+I*_,1+C*.25-I*.25*_),this.rig.rotation.set(0,0,0),this.rig.position.y=0,this.bones.hips.position.set(0,xt.lerp((g?.735:.8)+y-p*.65-M*.72,.335,this.slideBlend),0);let N=a?e.y*Zt(.025,.12,h):0;this.root.position.set(s?0:e.x,N,0);let A=this.lean.step(s?0:Ei((e.lane*2.55-e.x)*-.12,-.18,.18),t);this.root.rotation.set(0,s?r??Math.PI+Math.sin(l*.4)*.25:(e.lane*2.55-e.x)*-.08,c?A*.4:A),this.parentInverse.identity(),this.parentOrientation.identity(),this.root.parent&&(this.root.parent.updateWorldMatrix(!0,!1),this.parentInverse.copy(this.root.parent.matrixWorld).invert(),this.root.parent.getWorldQuaternion(this.parentOrientation).normalize()),this.root.updateMatrixWorld(!0),this.heading.setFromEuler(this.euler.set(0,this.root.rotation.y,0));let b=!a||h<.13,S=a?1-Zt(.04,.11,h):1;if(b)for(let[V,Z,K]of[["L",-1,0],["R",1,.5]]){let j=g?xl(this.gaitPhase+K):{z:u?V==="L"?-.36:-.19:-.03,y:oo(0),pitch:0,contact:!0};if(g&&this.landAge<.18){let J=Zt(.045,.18,this.landAge);j={z:xt.lerp(-.04,j.z,J),y:xt.lerp(oo(0),j.y,J),pitch:j.pitch*J,contact:J<.5||j.contact}}this.ikTarget.set(Z*(u?.22:.23),j.y,j.z).applyQuaternion(this.heading),this.ikTarget.x+=this.root.position.x,this.root.parent&&this.ikTarget.applyMatrix4(this.root.parent.matrixWorld),this.footOrientation.copy(this.parentOrientation).multiply(this.heading).multiply(this.eulerQuaternion(j.pitch)),this.legs[V].contact=j.contact&&S>.999&&N<.002,this.legs[V].solve(this.ikTarget,this.footOrientation,S)}else for(let V of Object.values(this.legs))V.contact=!1;this.root.updateMatrixWorld(!0);let U=1/0;for(let V of["L","R"])for(let Z of[-.1825,.1825])for(let K of[-.395,.205])this.footPoint.set(Z,-.1,K).applyMatrix4(this.bones["foot"+V].matrixWorld).applyMatrix4(this.parentInverse),U=Math.min(U,this.footPoint.y);U<.002&&(this.root.position.y+=.002-U),this.secondaryMotion(t,{visualY:N+this.bones.hips.position.y*this.rig.scale.y,run:e,preview:s,reducedMotion:c,landing:M,externalVelocityY:o}),this.root.visible=s||e.invincible<=0||Math.floor(l*10)%2===0,this.hasFrame=!0}eulerQuaternion(e){return this.pitchQ||=new gt,this.pitchQ.setFromEuler(this.euler.set(e,0,0))}secondaryMotion(e,{visualY:t,run:n,preview:s,reducedMotion:r,landing:o,externalVelocityY:l=0}){let c=Math.max(e,.004166666666666667),a=(this.hasFrame?(t-this.previousVisualY)/c:0)+l,u=this.hasFrame&&!s?(n.x-this.previousX)/c:0,h=Ei((u-this.previousVx)/c,-50,50),d=this.hasFrame?(this.bones.spine.rotation.x-this.previousSpine)/c:0,f=r?.2:1;for(let[g,v]of Object.entries(this.secondary)){let m=g==="hood"||g==="back",p=Ei(-a*(m?.016:.006)-d*(m?.018:.006)+o*.5,-.15,.15)*f,M=Ei(h*(m?.002:8e-4),-.08,.08)*f;this.bones[g].rotation.x=v.pitch.step(p,e),this.bones[g].rotation.z=v.roll.step(M,e)}this.previousVisualY=t,this.previousX=n.x,this.previousVx=u,this.previousSpine=this.bones.spine.rotation.x}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.rig),this.skeleton.dispose();for(let e of this.ownedGeometry)e.dispose();this.root.removeFromParent()}};var Ks=xt.clamp;function Rn(i,e,t=0,n=0,s=0){let r=new gi;return r.name=i,r.position.set(t,n,s),e.add(r),r}function Yc(i){return i.materials.has("egg-actor-colors")||i.materials.set("egg-actor-colors",new Gi({color:16777215,vertexColors:!0,gradientMap:i.toonRamp})),i.materials.get("egg-actor-colors")}function Zc(i,e){let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();t.applyMatrix4(e);let n=[],s=i.material.color;for(let r=0;r<t.attributes.position.count;r++)n.push(s.r,s.g,s.b);return t.setAttribute("color",new $e(n,3)),t}function Jc(i,e,t){let n=i.isSkinnedMesh?new Nn(i.geometry,e.outlineMaterial()):new pt(i.geometry,e.outlineMaterial());return n.userData.contour=!0,n.renderOrder=1,n.frustumCulled=!1,i.parent.add(n),t&&i.isSkinnedMesh&&n.bind(t,i.bindMatrix),n}var _l=class{constructor(e,t,n=2469802){this.art=e,this.g=new At,this.g.name="EggExplorer",t.add(this.g),this.model=new vl(e,{equipped:{}},{suitColor:n,hat:{model:"cap",color:7890126},back:{model:"pack",color:15904600}}),this.space=new At,this.space.scale.setScalar(.82),this.g.add(this.space),this.space.add(this.model.root);let s=this.model.bones;this.carry=new At,this.carry.position.set(0,-.1,-.53),s.chest.add(this.carry),this.wear=new At,this.model.rig.add(this.wear),this.hat=new At,this.hat.name="DefaultEggCap";for(let r of[...s.cap.children])this.hat.add(r);s.cap.add(this.hat),this.pack=new At;for(let r of[...s.back.children])this.pack.add(r);s.back.add(this.pack),this.elapsed=0,this.previous=null,this.takeoff=8,this.carryBlend=0,this.g.userData.actor=this}update(e,{player:t,moving:n=0,training:s=!1,carrying:r=!1,speed:o=9,push:l=!1,reducedMotion:c=!1}={}){let a=t||{x:0,y:0,z:0,vy:0};if(e=Ks(e,0,.05),!e)return;this.elapsed+=e,a.vy>0&&(!this.previous||a.vy>this.previous.vy+.2||this.previous.y===0)&&(this.takeoff=Math.max(1,a.vy));let u=a.y>.002||a.vy>0,h=Ks((1-a.vy/this.takeoff)*.5,0,.99),d=!s&&n<.02&&!u;this.model.update({x:0,lane:0,jump:u?(1-h)*1.05:0,y:0,slide:0,invincible:0,speed:18*Ks(o/9,.8,2.1),level:{speed:18}},e,{preview:d,previewYaw:0,externalVelocityY:a.vy/.82,time:this.elapsed,reducedMotion:c}),this.model.root.rotation.y=0,this.carryBlend+=(Number(r)-this.carryBlend)*(1-Math.exp(-e*16));let f=this.model.bones,g=this.carryBlend;for(let[v,m]of[["L",1],["R",-1]]){let p=f["shoulder"+v],M=f["elbow"+v];p.rotation.x=xt.lerp(p.rotation.x,.87,g),p.rotation.z=xt.lerp(p.rotation.z,m*.35,g),M.rotation.x=xt.lerp(M.rotation.x,1.18,g),l&&(p.rotation.x=1.35,M.rotation.x=.2)}f.chest.rotation.y*=1-g*.7,this.model.root.updateMatrixWorld(!0),this.previous={y:a.y,vy:a.vy}}equip(e,t){this.clearWear(),this.hat.visible=!e.head||e.head==="headphones",this.pack.visible=!e.back;let n=this.model;for(let s of Object.values(e)){let r=Qt[s];if(!r)continue;let o=new At,l=t(o,s),c=r.slot,a=c==="head"?"cap":c==="face"?"head":"back",u=n.index[a];l.position.set(0,c==="head"?s==="halo"?.62:s==="headphones"?.25:.48:c==="face"?.12:-.03,c==="face"?-.33:c==="back"?.34:.015),o.updateMatrixWorld(!0);let h=n.skeleton.boneInverses[u].clone().invert(),d=[];o.traverse(p=>{p.isMesh&&d.push(Zc(p,new je().multiplyMatrices(h,p.matrixWorld)))});let f=Js(d);if(d.forEach(p=>p.dispose()),!f)continue;let g=[],v=[];for(let p=0;p<f.attributes.position.count;p++)g.push(u,0,0,0),v.push(1,0,0,0);f.setAttribute("skinIndex",new Un(g,4)),f.setAttribute("skinWeight",new $e(v,4));let m=new Nn(f,Yc(this.art));m.name=s,m.frustumCulled=!1,m.castShadow=!0,this.wear.add(m),m.bind(n.skeleton,new je),Jc(m,this.art,n.skeleton)}}clearWear(){for(let e of this.wear.children)e.userData.contour||e.geometry.dispose();this.wear.clear()}dispose(){this.clearWear(),this.model.dispose(),this.g.removeFromParent()}},Ux={chick:{head:[1,-.07],hip:.37,leg:.32,foot:.055,r:.055,wing:!0},fox:{head:[.95,-.18],hip:.4,leg:.35,foot:.055,r:.075,quad:!0},deer:{head:[1.06,-.23],hip:.55,leg:.5,foot:.045,r:.052,quad:!0},penguin:{head:[1.1,-.06],hip:.35,leg:.3,foot:.055,r:.07,wing:!0,waddle:!0},dragon:{head:[1.06,-.23],hip:.45,leg:.39,foot:.065,r:.1,wing:!0},turtle:{head:[.4,-.56],hip:.23,leg:.17,foot:.065,r:.085,quad:!0,low:!0},cat:{head:[.95,-.18],hip:.4,leg:.35,foot:.055,r:.075,quad:!0,wing:!0},axolotl:{head:[.7,-.24],hip:.23,leg:.18,foot:.055,r:.065,quad:!0,low:!0},rabbit:{head:[.99,-.13],hip:.37,leg:.31,foot:.065,r:.105,hop:!0},panda:{head:[1.07,-.12],hip:.43,leg:.37,foot:.065,r:.12,arms:!0},robot:{head:[1.22,-.06],hip:.45,leg:.4,foot:.055,r:.1,arms:!0},griffin:{head:[1.08,-.17],hip:.43,leg:.37,foot:.065,r:.085,wing:!0},phoenix:{head:[1.12,-.16],hip:.43,leg:.37,foot:.065,r:.075,wing:!0},clockOwl:{head:[1.16,-.1],hip:.37,leg:.31,foot:.065,r:.06,wing:!0}},jc=class{constructor(e,t,n,s,r){this.g=e,this.kind=n,this.art=r,this.config={...Ux[n]},this.owned=[],this.legs=[],this.wings=[],this.arms=[],this.loose=[],this.phase=0,this.elapsed=0,this.blend=0;let o=this.config,l=e.parent,c=e.scale.clone(),a=o.low?.045:.14;o.hip+=a,o.leg+=a,o.head=[o.head[0]+a,o.head[1]],e.removeFromParent(),e.scale.setScalar(1),e.updateMatrixWorld(!0);let u=[...e.children];for(let p of u)p.position.y+=a;this.rig=new At,e.add(this.rig);let h=Rn("hips",this.rig),d=Rn("chest",h,0,(o.low?.3:.55)+a,0),f=Rn("head",d,0,o.head[0]-d.position.y,o.head[1]);this.bones={hips:h,chest:d,head:f};let g=[];for(let p of u){let M=p.position.x,y=p.position.y,_=p.position.z;if(p.isMesh&&y<.3+a&&Math.abs(M)>.1){e.remove(p);continue}let I=d;if(t.includes(p)&&y>.3+a){if(_>.35&&Math.abs(M)<.15)I=Rn("tail",h,0,.4+a,.4),this.bones.tail=I,this.loose.push({bone:I,type:"tail",spring:new Hn(15,.63)});else if(Math.abs(M)>.3){let C=Math.sign(M),N=(o.arms?"arm":"wing")+(C<0?"L":"R");I=Rn(N,d,C*.32,.24,.04),this.bones[N]=I,(o.arms?this.arms:this.wings).push({bone:I,sign:C})}}else _>.4&&y<.7+a&&Math.abs(M)<.3?(I=this.bones.tail||Rn("tail",h,0,.4+a,.4),this.bones.tail||(this.bones.tail=I,this.loose.push({bone:I,type:"tail",spring:new Hn(15,.63)}))):y>o.head[0]-.22&&(_<.15||y>1.2+a)&&!(o.low&&_>-.25)&&(I=f);if(n==="rabbit"&&y>1.3+a){let C=Math.sign(M),N="ear"+(C<0?"L":"R");I=this.bones[N]||Rn(N,f,C*.16,.25,.05),this.bones[N]||(this.bones[N]=I,this.loose.push({bone:I,type:"ear",spring:new Hn(17,.6)}))}e.updateMatrixWorld(!0),I.attach(p),I===d&&p.traverse(C=>{C.isMesh&&g.push(C)})}let v=["panda","penguin"].includes(n)?2575947:["chick","griffin","phoenix","clockOwl"].includes(n)?15381086:s;for(let p of[-1,1])for(let M of o.quad?[!1,!0]:[!1]){let y=(p<0?"L":"R")+(M?"Back":"Front"),_=o.quad?M?.31:-.25:0,I=p*(o.low?.34:.21),C=o.leg*.52,N=o.leg*.48,A=Rn("thigh"+y,h,I,o.hip,_),b=Rn("knee"+y,A,0,-C,0),S=Rn("foot"+y,b,0,-N,0);Object.assign(this.bones,{["thigh"+y]:A,["knee"+y]:b,["foot"+y]:S});let U=r.mesh(S,n==="robot"?"round":"ball",v,0,0,-.055,o.hop?.17:o.low?.16:.12,o.foot,o.hop?.3:o.waddle?.24:.18,"trim");n==="robot"&&U.scale.set(.22,.11,.32),this.legs.push({name:y,thigh:A,knee:b,foot:S,x:I,z:_,l1:C,l2:N,phase:o.hop?0:(p<0?0:.5)+(M?.5:0),target:new O})}for(let p of this.arms){let M=p.bone,y=[...M.children];for(let I of y)M.remove(I);let _=Rn(M.name+"Elbow",M,0,-.23,0);this.bones[_.name]=_,p.elbow=_,r.mesh(M,"ball",v,0,-.1,0,.12,.19,.12,"trim"),r.mesh(_,n==="robot"?"round":"ball",v,0,-.12,-.02,.14,.19,.13,"trim")}this.rig.updateMatrixWorld(!0),this.skeleton=new ki(Object.values(this.bones)),this.index=Object.fromEntries(this.skeleton.bones.map((p,M)=>[p.name,M]));let m=g.map(p=>Zc(p,p.matrixWorld));if(g.forEach(p=>p.removeFromParent()),m.length){let p=Js(m);m.forEach(M=>M.dispose()),this.skin(p,M=>{let y=Zt((o.low?.14:.25)+a,(o.low?.42:.8)+a,M.y);return[[this.index.hips,1-y],[this.index.chest,y]]})}for(let p of this.legs){let M=o.hip-o.leg,y=o.hip-p.l1,_=o.r,I=ro([[M,0,0],[M+.04,_*.8,_*.8],[y-.05,_,_],[y+.05,_,_],[o.hip-.03,_*1.2,_*1.2],[o.hip,0,0]],12,1);I.translate(p.x,0,p.z);let C=new Ye(v),N=[];for(let A=0;A<I.attributes.position.count;A++)N.push(C.r,C.g,C.b);I.setAttribute("color",new $e(N,3)),this.skin(I,A=>{let b=1-Zt(y-.08,y+.08,A.y);return[[this.index[p.thigh.name],1-b],[this.index[p.knee.name],b]]}),p.ik=new js(p.thigh,p.knee,p.foot)}this.batch(),this.rig.traverse(p=>{p.isMesh&&(p.castShadow=!p.userData.contour,p.receiveShadow=!1)}),e.scale.copy(c),l?.add(e),e.userData.actor=this,this.target=new O,this.orientation=new gt,this.pitch=new gt,this.euler=new $t}skin(e,t){e.attributes.uv||e.setAttribute("uv",new $e(new Float32Array(e.attributes.position.count*2),2));let n=[],s=[],r=new O;for(let l=0;l<e.attributes.position.count;l++){r.fromBufferAttribute(e.attributes.position,l);let c=t(r);for(let a=0;a<4;a++)n.push(c[a]?.[0]||0),s.push(c[a]?.[1]||0)}e.setAttribute("skinIndex",new Un(n,4)),e.setAttribute("skinWeight",new $e(s,4));let o=new Nn(e,Yc(this.art));o.frustumCulled=!1,this.rig.add(o),o.bind(this.skeleton,new je),this.owned.push(e),Jc(o,this.art,this.skeleton)}batch(){this.rig.updateMatrixWorld(!0);for(let e of Object.values(this.bones)){let t=e.children.filter(l=>!l.isBone),n=[],s=e.matrixWorld.clone().invert();for(let l of t)l.traverse(c=>{c.isMesh&&!c.isSkinnedMesh&&n.push(Zc(c,new je().multiplyMatrices(s,c.matrixWorld)))});if(!n.length)continue;let r=Js(n);n.forEach(l=>l.dispose()),t.forEach(l=>e.remove(l));let o=new pt(r,Yc(this.art));o.name=e.name+"-surface",e.add(o),this.owned.push(r),(e.name==="head"||e.name==="chest")&&Jc(o,this.art)}}update(e,t=0,n=9,s=!1){if(e=Ks(e,0,.05),!e)return;this.elapsed+=e,this.blend+=(Ks(t,0,1)-this.blend)*(1-Math.exp(-e*12));let r=this.blend,o=this.config,l=Ks(n/12,.55,2),c=(o.low?1.3:o.hop?2.5:2)*Math.sqrt(l);this.phase=(this.phase+e*c*r)%1;let a=this.phase*Math.PI*2,u=s?.3:1,h=this.bones,d=o.hop?(1-Math.cos(a))*.065*r:0;h.hips.position.y=-.025+Math.sin(a*2)*.018*r+d,h.hips.rotation.set(0,Math.sin(a)*.035*r,Math.sin(a)*(o.waddle?.1:.025)*r*u),h.chest.rotation.set(-.08*r,Math.sin(a)*-.06*r,Math.sin(a)*.025*r),h.head.rotation.set(.05*r+Math.sin(this.elapsed*2)*.025,Math.sin(this.elapsed*1.6)*.09*(1-r),-h.hips.rotation.z*.5);let f=(Math.sin(a*2)*(o.hop?.045:.018)*r+Math.sin(this.elapsed*2)*.008*(1-r))*u;h.chest.scale.set(1+f*.3,1-f,1+f*.3);for(let{bone:g,sign:v}of this.wings)g.rotation.z=v*(.1+Math.sin(a+v*.2)*(.14+r*.48)*u),g.rotation.x=.08+Math.cos(a)*r*.12;for(let{bone:g,elbow:v,sign:m}of this.arms)g.rotation.x=Math.cos(a+(m<0?0:Math.PI))*r*.65,g.rotation.z=m*.1,v.rotation.x=.4+r*.4;for(let g of this.loose){let v=g.spring.step(Math.sin(a)*(g.type==="tail"?.25:.12)*r*u,e);g.bone.rotation.z=v,g.bone.rotation.x=g.type==="ear"?-r*.15+v*.3:0}this.g.updateWorldMatrix(!0,!0),this.g.getWorldQuaternion(this.orientation).normalize();for(let g of this.legs){let v=xl(this.phase+g.phase),m=o.leg/.72,p=v.z*m*.68*r,M=Math.max(0,v.y-.112)*m*(o.hop?.12:.4)*r,y=v.pitch*.4*r;this.target.set(g.x,o.foot+.012+M+d+Math.abs(Math.sin(y))*.18,g.z+p).applyMatrix4(this.g.matrixWorld),this.pitch.setFromEuler(this.euler.set(y,0,0)),g.ik.solve(this.target,new gt().copy(this.orientation).multiply(this.pitch)),g.ik.contact=r<.05||v.contact}this.g.updateMatrixWorld(!0)}dispose(){for(let e of this.owned)e.dispose();this.skeleton.dispose(),this.g.removeFromParent()}};function md(i,e,t,n,s){let r=new jc(i,e,t,n,s);return{g:i,limbs:r.legs.map(o=>o.thigh),kind:t,animator:r,dispose:()=>r.dispose()}}function gd(i){let e=new Map,t=new Map,n=new ml,s=!1,r=(L,P=!1,R=!1)=>{let F=L+":"+P+":"+R;return e.has(F)||e.set(F,new Hr({color:L,roughness:.72,flatShading:R,emissive:P?L:0,emissiveIntensity:P?.35:0})),e.get(F)},o=(L,P)=>(t.has(L)||t.set(L,P()),t.get(L)),l=(L,P=0,R=0,F=0)=>{let w=new At;return w.position.set(P,R,F),L.add(w),w},c=(L,P,R,F=0,w=0,x=0,E=!1)=>{let k=new pt(P,r(R,E,P.userData.faceted===!0));return k.position.set(F,w,x),k.receiveShadow=!0,L.add(k),k},a=(L,P,R,F,w,x=0,E=0,k=0)=>c(L,o(`b${P},${R},${F}`,()=>new mn(P,R,F)),w,x,E,k),u=(L,P,R,F,w,x=0,E=0,k=0)=>{let ee=Math.min(.09,Math.min(P,R,F)*.22);return c(L,o(`rounded:${P},${R},${F}`,()=>new Zs(P,R,F,2,ee)),w,x,E,k)},h=(L,P,R,F=0,w=0,x=0,E=1,k=1,ee=1)=>{let $=c(L,o("s"+P+":"+s,()=>new vi(P,s||P<.12?12:P<.6?24:20,s||P<.12?8:P<.6?16:12)),R,F,w,x);return $.scale.set(E,k,ee),$},d=(L,P,R,F,w,x=0,E=0,k=0,ee=20)=>{let $=ee>=7?Math.max(16,ee):ee;return c(L,o(`c${P},${R},${F},${$}`,()=>{let ie=new xi(P,R,F,$);return ie.userData.faceted=ee<=6,ie}),w,x,E,k)},f=(L,P,R,F,w=0,x=0,E=0)=>c(L,o(`t${P},${R}`,()=>new _i(P,R,8,P<.2?20:36)),F,w,x,E),g=(L,P,R,F,w)=>{let x=new O(...P),E=new O(...R).sub(x),k=d(L,F,F,E.length(),w,...x.addScaledVector(E,.5).toArray());return k.quaternion.setFromUnitVectors(new O(0,1,0),E.normalize()),k},v=(L,P,R,F,w,x=3,E="#233d46",k="#fff6d9")=>{let ee=document.createElement("canvas");ee.width=512,ee.height=128;let $=ee.getContext("2d");$.fillStyle=k,$.beginPath(),$.roundRect(4,4,504,120,22),$.fill(),$.fillStyle=E,$.font="bold 40px Arial",$.textAlign="center",$.textBaseline="middle",$.fillText(P,256,66,480);let ie=new Ps(ee);ie.colorSpace=Ct;let se=new Rs(new Bi({map:ie,depthWrite:!1}));return se.position.set(R,F,w),se.scale.set(x,x/4,1),L.add(se),se};function m(L){let P=document.createElement("canvas");P.width=640,P.height=288;let R=new Ps(P);R.colorSpace=Ct;let F=new Rs(new Bi({map:R,depthWrite:!1}));return F.position.set(0,2.4,0),F.scale.set(4.2,1.89,1),L.add(F),{canvas:P,texture:R,sprite:F}}function p(L,P){let R=Z[L].plaque,F=R.canvas.getContext("2d");F.clearRect(0,0,640,288),F.fillStyle=P.ready?"#daf3cf":"#fff1c8",F.beginPath(),F.roundRect(5,5,630,278,28),F.fill(),F.strokeStyle=P.ready?"#4b8c55":"#b48135",F.lineWidth=8,F.stroke(),F.textAlign="center",F.textBaseline="middle",F.fillStyle="#345047",F.font="bold 30px Arial",F.fillText("TREINO RECOMENDADO",320,52),F.font="bold 54px Arial",F.fillText("N\xCDVEL "+P.level,320,115),F.font="bold 34px Arial",F.fillText(P.ready?"Voc\xEA j\xE1 tem esse treino!":"Faltam "+P.remaining+" n\xEDveis",320,178),F.fillStyle="#876323",F.font="bold 24px Arial",F.fillText("3 OVOS \xB7 RARIDADES E MUTA\xC7\xD5ES",320,240),R.texture.needsUpdate=!0,R.sprite.userData.advice={...P}}function M(L,P,R=1,F="common"){let w=l(L);w.scale.setScalar(R),c(w,o("egg-shell",()=>{let x=Array.from({length:21},(E,k)=>{let ee=Math.PI*(1-k/20),$=k===0||k===20?0:.42*Math.sin(ee)*(1-.16*Math.cos(ee));return new ge($,.567*Math.cos(ee))});return new Fs(x,28)}),Lt[F].color,0,.5,0);for(let[x,E,k]of[[.25,.63,.28],[-.19,.34,.32],[.05,.9,.18],[.3,.33,-.2]])h(w,.075,P,x,E,k,1,1.2,.4);if(F!=="common"){f(w,.44,.025,Lt[F].color,0,.06,0).rotation.x=Math.PI/2;for(let x=0;x<Lt[F].mult-1;x++){let E=x*2.4;d(w,0,.06,.15,16773296,Math.sin(E)*.47,.75+x%2*.2,Math.cos(E)*.47,4)}}return w}function y(L,P,R,F=1,w="common"){s=!0;let x=l(L);x.scale.setScalar(F);let E=[],k=2505291,ee=16771258,$=-.35,ie=.92;if(P==="chick"){h(x,.43,R,0,.51,0,1,1.1,.9),h(x,.31,R,0,1,-.07),d(x,0,.13,.24,15697476,0,.94,-.43,4).rotation.x=-Math.PI/2;for(let B of[-.16,.16])u(x,.18,.09,.3,15697476,B,.06,-.06);for(let B of[-.42,.42]){let W=h(x,.22,R,B,.61,0,.45,1.15,.9);E.push(W)}for(let B=0;B<3;B++)h(x,.095,15231840,(B-1)*.09,1.28,-.05);ie=1.06,$=-.35}else if(P==="fox"||P==="cat"){h(x,.36,R,0,.47,.06,1,1.1,1.35),h(x,.34,R,0,.95,-.18,1.08,.92,.95),h(x,.19,ee,0,.83,-.43,1,.65,.7),h(x,.065,k,0,.9,-.55);for(let W of[-.24,.24]){let q=d(x,0,.16,.4,R,W,1.31,-.16,4);q.rotation.z=W<0?.18:-.18,h(x,.07,16036809,W,1.35,-.28,1,1.8,.3)}for(let W of[-.21,.21]){let q=u(x,.16,.28,.23,R,W,.16,-.12);E.push(q)}let B=l(x,0,.4,.47);if(h(B,.2,R,0,.22,.24,1,1.2,2.1),h(B,.14,ee,0,.32,.52,1,1,1.3),B.rotation.x=-.3,E.push(B),ie=1,$=-.48,P==="cat"){f(x,.2,.025,16176247,0,1.7,-.16).rotation.x=Math.PI/2;for(let W of[-.44,.44]){let q=h(x,.27,9018337,W,.72,.1,.45,.6,1.5);q.rotation.z=W,E.push(q)}}}else if(P==="deer"){h(x,.38,R,0,.55,.06,.8,1,1.4),h(x,.26,12574109,0,1.06,-.23,.9,1.1,1),h(x,.14,ee,0,.99,-.48),h(x,.045,k,0,1.04,-.6);for(let B of[-.22,.22])h(x,.16,R,B,1.18,-.24,1.5,.5,.65),g(x,[B*.6,1.25,-.2],[B,1.67,-.2],.038,12358234),g(x,[B*.85,1.47,-.2],[B*1.7,1.56,-.2],.026,12358234);for(let B of[-.19,.19])for(let W of[-.24,.29]){let q=d(x,.055,.055,.37,7506774,B,.2,W);E.push(q)}for(let B of[-.16,.16])h(x,.048,ee,B,.65,-.29);ie=1.12,$=-.46}else if(P==="penguin"){h(x,.44,3299975,0,.61,0,1,1.4,.85),h(x,.32,16119271,0,.55,-.19,1,1.5,.6),h(x,.3,3299975,0,1.1,-.06),d(x,0,.12,.22,15908181,0,1,-.4,4).rotation.x=-Math.PI/2;for(let B of[-.42,.42]){let W=h(x,.21,R,B,.65,0,.45,1.8,.8);W.rotation.z=B*.7,E.push(W)}for(let B of[-.2,.2])h(x,.16,15908181,B,.07,-.13,1,.35,1.4);f(x,.32,.065,R,0,.89,-.04).rotation.x=Math.PI/2,ie=1.13,$=-.34}else if(P==="dragon"){h(x,.42,R,0,.52,.07,1,1.1,1.2),h(x,.31,R,0,1.06,-.23),h(x,.21,15972966,0,.94,-.48,1,.7,1);for(let B of[-.2,.2])d(x,0,.075,.27,ee,B,1.41,-.1,5);for(let B of[-.56,.56]){let W=l(x,B,.92,.12);d(W,0,.35,.62,10967922,0,0,0,3).rotation.z=B>0?-1.1:1.1,E.push(W)}for(let B=0;B<4;B++)d(x,0,.11,.18,16438365,0,.93-B*.13,.24+B*.18,4);for(let B of[-.24,.24]){let W=u(x,.19,.25,.31,R,B,.13,-.1);E.push(W)}h(x,.18,R,0,.28,.6,1,.7,2.1),ie=1.13,$=-.5}else if(P==="turtle"){h(x,.52,6980258,0,.49,.1,1,.7,1.2);for(let B=0;B<5;B++){let W=B*1.256;d(x,0,.18,.42,R,Math.sin(W)*.3,.8,Math.cos(W)*.34+.1,5)}h(x,.24,9029305,0,.4,-.56);for(let B of[-.42,.42])for(let W of[-.23,.39]){let q=h(x,.15,9029305,B,.12,W,1,.55,1.25);E.push(q)}ie=.47,$=-.77}else if(P==="axolotl"){h(x,.36,R,0,.38,.12,1,.7,1.6),h(x,.34,16765666,0,.7,-.24,1.25,.8,1);for(let B of[-.38,.38])for(let W=0;W<3;W++)g(x,[B*.75,.7,-.2],[B*1.5,.55+W*.18,-.17],.05,R),h(x,.08,R,B*1.5,.55+W*.18,-.17);for(let B of[-.3,.3])for(let W of[-.1,.4]){let q=h(x,.14,R,B,.13,W,1,.5,1.3);E.push(q)}h(x,.18,R,0,.32,.67,.35,1,1.8),ie=.73,$=-.54}else if(P==="rabbit"){h(x,.37,R,0,.44,.04,1,1.2,1),h(x,.32,16770256,0,.99,-.13);for(let B of[-.16,.16])h(x,.16,R,B,1.47,-.08,.7,2.1,.7),h(x,.08,16161978,B,1.5,-.17,.6,2.2,.4);for(let B of[-.24,.24]){let W=h(x,.2,R,B,.12,-.1,.8,.6,1.5);E.push(W)}h(x,.18,16775146,0,.45,.44),h(x,.06,14582162,0,.91,-.43),ie=1.04,$=-.41}else if(P==="panda"){h(x,.46,15922141,0,.52,0,1,1.12,1),h(x,.36,15922141,0,1.07,-.12,1.12,.96,1);for(let B of[-.31,.31])h(x,.15,2575947,B,1.31,-.1);for(let B of[-.15,.15])h(x,.12,2575947,B,1.08,-.42,1,1.2,.3);for(let B of[-.37,.37]){let W=h(x,.19,2575947,B,.58,0,.75,1.5,.8);E.push(W)}for(let B of[-.23,.23])h(x,.18,2575947,B,.13,-.05);f(x,.33,.065,R,0,.81,-.02).rotation.x=Math.PI/2,h(x,.06,2575947,0,.96,-.47),ie=1.1,$=-.46}else if(P==="robot"){u(x,.66,.6,.46,8366791,0,.65,0),u(x,.66,.46,.48,R,0,1.22,-.06),u(x,.5,.25,.03,2704991,0,1.25,-.31),u(x,.28,.23,.04,R,0,.69,-.25),g(x,[0,1.45,0],[0,1.68,0],.035,8366791),h(x,.09,10876879,0,1.7,0);for(let B of[-.45,.45]){let W=u(x,.17,.46,.21,R,B,.64,0);E.push(W)}for(let B of[-.2,.2]){let W=u(x,.2,.35,.28,4217725,B,.19,0);E.push(W)}ie=1.25,$=-.33}else if(P==="griffin"){h(x,.4,R,0,.52,.09,1,1.1,1.2),h(x,.32,16774357,0,1.08,-.17),d(x,0,.12,.3,16038756,0,1,-.54,4).rotation.x=-Math.PI/2;for(let B of[-.58,.58]){let W=l(x,B,.85,.1);for(let q=0;q<3;q++)h(W,.22,q%2?R:16774357,Math.sign(B)*q*.13,q*.13,q*.12,.5,1.6,1);E.push(W)}for(let B of[-.23,.23]){let W=u(x,.2,.22,.3,16038756,B,.12,-.12);E.push(W)}d(x,0,.2,.3,16038756,0,1.46,-.1,5),ie=1.15,$=-.45}else if(P==="phoenix"){h(x,.4,5269694,0,.58,.08,.9,1.2,1.1),h(x,.31,9498623,0,1.12,-.16),d(x,0,.12,.29,16766062,0,1.02,-.51,5).rotation.x=-Math.PI/2;for(let B of[-1,1]){let W=l(x,B*.35,.86,.05);for(let q=0;q<5;q++){let ce=h(W,.19,q%2?10810623:9731322,B*(.12+q*.15),.1+q*.12,.06+q*.04,.45,2.2,.7);ce.rotation.z=-B*.55}E.push(W),u(x,.2,.2,.3,16766062,B*.22,.12,-.16)}for(let B=-1;B<=1;B++){let W=h(x,.14,11769343,B*.2,.4,.55+Math.abs(B)*.09,.6,1,2.2);W.rotation.z=B*.25}for(let B=-1;B<=1;B++)d(x,0,.075,.32,16768885,B*.12,1.5,-.07,4);ie=1.17,$=-.44}else if(P==="clockOwl"){h(x,.46,5406337,0,.63,0,1,1.3,.9),h(x,.37,12773589,0,1.16,-.1,1.1,1,.85);for(let B of[-1,1]){f(x,.17,.04,15912577,B*.17,1.19,-.39),d(x,0,.1,.22,5406337,B*.28,1.52,-.02,3);let W=l(x,B*.4,.7,.07);for(let q=0;q<3;q++)h(W,.16,q%2?12773589:7056292,B*q*.08,-q*.12,0,.5,1.6,1);E.push(W),u(x,.17,.08,.25,15382880,B*.17,.06,-.05)}d(x,0,.08,.18,15382880,0,1.08,-.43,3).rotation.x=-Math.PI/2,f(x,.24,.035,15912577,0,.64,-.36),h(x,.2,16772552,0,.64,-.36,1,1,.14),g(x,[0,.64,-.4],[0,.79,-.4],.018,3492962),g(x,[0,.64,-.4],[.13,.6,-.4],.016,3492962),ie=1.2,$=-.43}w!=="common"&&(f(x,.55,.035,Lt[w].color,0,.055,0).rotation.x=Math.PI/2);let se=P==="turtle"?.1:.12;for(let B of[-se,se])h(x,.065,16777215,B,ie,$),h(x,.035,k,B,ie,$-.055),h(x,.012,16777215,B-.01,ie+.015,$-.084);return x.traverse(B=>{B.isMesh&&(B.castShadow=!0)}),s=!1,md(x,E,P,R,n)}function _(L,P){let R=l(L);if(co[P]&&ud(P,R,{ball:h,cyl:d,torus:f,rod:g,softBox:u}),P==="crown"){d(R,.34,.34,.16,15910483,0,.1,0,10);for(let E=0;E<7;E++){let k=E*Math.PI*2/7;d(R,0,.09,.28,16767336,Math.sin(k)*.29,.3,Math.cos(k)*.29,4),h(R,.055,E%2?7724525:15759772,Math.sin(k)*.33,.12,Math.cos(k)*.33)}}if(P==="halo"){f(R,.4,.06,16768889,0,.16,0).rotation.x=Math.PI/2;for(let E of[-.5,.5])d(R,0,.06,.17,16774330,E,.2,0,4)}if(P==="headphones"){f(R,.33,.045,3560884,0,0,0);for(let E of[-.32,.32])u(R,.12,.3,.23,6480616,E,-.03,0),u(R,.13,.2,.15,8483822,E*1.15,-.03,0)}if(P==="goggles"){for(let E of[-.15,.15])f(R,.125,.035,16764004,E,0,0),h(R,.1,6807528,E,0,-.01,1,1,.25);u(R,.08,.04,.07,16764004,0,0,0)}if(P==="wings")for(let E of[-1,1])for(let k=0;k<4;k++){let ee=h(R,.19,k%2?10149870:13214971,E*(.26+k*.17),.25+k*.09,.08+k*.05,.7,2.3,.4);ee.rotation.z=-E*(.4+k*.08)}if(P==="cape"){let E=d(R,.26,.6,1,14636152,0,-.2,.1,4);E.scale.z=.19,u(R,.5,.08,.17,16766832,0,.35,0)}let F=16765803,w=9106416,x=11836159;if(P==="pilotCap"){h(R,.36,15173198,0,.08,0,1,.8,1),u(R,.14,.055,.64,16772558,0,.34,-.03);for(let E of[-.34,.34])h(R,.13,4150123,E,-.04,0,.6,1.3,1);u(R,.48,.1,.13,9297899,0,.08,-.32)}if(P==="safariHat"){d(R,.55,.55,.065,14269302,0,0,0,24),d(R,.28,.37,.3,13148764,0,.18,0,20),d(R,.36,.36,.07,6980950,0,.08,0,20);let E=h(R,.12,8574083,.29,.37,0,.6,2,.4);E.rotation.z=-.4}if(P==="iceTiara"){f(R,.34,.045,14215663,0,.06,0).rotation.x=Math.PI/2;for(let E=-2;E<=2;E++)d(R,0,.085,.3+(2-Math.abs(E))*.09,E%2?w:12177151,E*.13,.23,-.22,5)}if(P==="stormHelm"){h(R,.36,6706846,0,.07,0,1,.8,1),u(R,.5,.1,.12,F,0,.03,-.31);for(let E of[-1,1])g(R,[E*.25,.15,0],[E*.48,.39,0],.045,F),g(R,[E*.48,.39,0],[E*.32,.39,0],.045,F),g(R,[E*.32,.39,0],[E*.52,.66,0],.045,F)}if(P==="solarCrown"){d(R,.34,.34,.15,F,0,.06,0,16),f(R,.42,.055,F,0,.46,.02),h(R,.21,16758363,0,.46,.02,1,1,.35);for(let E=0;E<10;E++){let k=E*Math.PI/5;g(R,[Math.sin(k)*.43,.46+Math.cos(k)*.43,.02],[Math.sin(k)*.58,.46+Math.cos(k)*.58,.02],.035,F)}}if(P==="starGlasses"){for(let E of[-.16,.16]){let k=d(R,0,.18,.055,F,E,0,0,5);k.rotation.x=Math.PI/2,h(R,.09,15635142,E,0,-.04,1,1,.25)}u(R,.12,.035,.06,F,0,0,0)}if(P==="cyberVisor"){u(R,.68,.25,.12,3883368,0,0,0),u(R,.57,.15,.045,w,0,0,-.08);for(let E=-2;E<=2;E++)u(R,.035,.11,.02,7513324,E*.095,0,-.11)}if(P==="butterflyMask"){for(let E of[-1,1]){let k=h(R,.19,E<0?w:x,E*.22,.07,0,1.2,1,.25);k.rotation.z=-E*.35,h(R,.13,15507164,E*.2,-.12,0,1,.8,.25),h(R,.075,3295333,E*.14,0,-.06,1,1,.25)}u(R,.08,.12,.06,F,0,0,-.02)}if(P==="royalMask"){u(R,.65,.24,.1,F,0,0,0);for(let E of[-.16,.16])h(R,.09,5125205,E,0,-.07,1,.7,.3);for(let E=-2;E<=2;E++)d(R,0,.055,.17,E%2?15235234:12296959,E*.13,.22,0,4)}if(P==="explorerPack"){u(R,.57,.62,.3,5086332,0,.02,.12),u(R,.38,.26,.12,9030039,0,-.08,.3),d(R,.12,.12,.65,14926220,0,.4,.1).rotation.z=Math.PI/2;for(let E of[-.19,.19])u(R,.06,.65,.03,14598273,E,.02,-.05)}if(P==="beeWings"){for(let E of[-1,1])for(let k=0;k<2;k++){let ee=h(R,.25,13759985,E*(.32+k*.16),.08+k*.3,.03,.7,1.6,.22);ee.rotation.z=-E*.65}h(R,.17,F,0,0,.12,.6,1.5,1)}if(P==="jetpack"){u(R,.44,.5,.2,6651809,0,.02,.08);for(let E of[-.28,.28])d(R,.13,.18,.61,12964575,E,0,.15,16),d(R,.18,.11,.12,F,E,-.34,.15,16),d(R,0,.13,.34,w,E,-.55,.15,7).rotation.z=Math.PI}if(P==="phoenixWings"||P==="infinityWings"){let E=P==="infinityWings";for(let k of[-1,1])for(let ee=0;ee<5;ee++){let $=h(R,.16,E?ee%2?w:x:ee%2?F:16089958,k*(.25+ee*.15),.12+ee*.12,.05+ee*.025,.65,2.5,.35);$.rotation.z=-k*(.3+ee*.13)}if(E){f(R,.48,.028,F,0,.25,.13),f(R,.64,.025,x,0,.25,.13);for(let k of[-1,1])h(R,.08,F,k*.72,.7,.15)}}if(P==="auroraCape"){for(let E=-2;E<=2;E++){let k=d(R,.075,.145,.9,[w,x,8380603,8829434,14851802][E+2],E*.14,-.16,.1,4);k.scale.z=.27}u(R,.63,.09,.15,F,0,.34,0)}if(P==="cometPack"){let E=d(R,0,.27,.55,w,0,.25,.13,6);E.rotation.z=-.5,f(R,.32,.03,F,0,.25,.13);for(let k=0;k<4;k++){let ee=h(R,.1,k%2?x:12185599,.1+k*.08,-.05-k*.13,.13,1,2,.4);ee.rotation.z=-.45}}return R}function I(L,P){L.equip(P,_)}function C(L,P){if(Mt[P]){let E=l(L);return dd(P,E,{ball:h,cyl:d,torus:f,rod:g,softBox:u}),E}if(Qt[P]){let E=l(L),k=_(E,P);return k.position.y=["cape","auroraCape","jetpack"].includes(P)?.82:.55,E}let R=l(L),F=5610951,w=15843169,x=16773330;if(P==="boots"||P==="springs")for(let E of[-.28,.28]){u(R,.36,.22,.7,P==="boots"?F:9861582,E,.35,-.1),u(R,.33,.3,.36,P==="boots"?7915215:12821745,E,.55,.1),u(R,.38,.08,.74,x,E,.21,-.1);for(let k=0;k<3;k++)u(R,.25,.025,.04,x,E,.48,-.32+k*.09);if(P==="springs")for(let k=0;k<3;k++)f(R,.13,.025,w,E,.06+k*.055,0).rotation.x=Math.PI/2}if((P==="energy"||P==="hydration"||P==="juice")&&(d(R,.25,.28,.8,P==="juice"?16099675:F,0,.5,0),d(R,.14,.14,.2,x,0,.99,0),d(R,.19,.19,.12,5334158,0,1.13,0),u(R,.36,.26,.055,x,0,.6,-.25),P==="juice"?h(R,.1,15898692,0,.6,-.3):u(R,.08,.19,.05,F,0,.6,-.29)),P==="pen"){u(R,1.2,.09,1,10012531,0,.06,0);for(let E of[-.52,.52])for(let k of[-.4,0,.4])u(R,.08,.55,.08,x,E,.33,k),u(R,.06,.06,.8,x,E,.42,0);M(R,w,.6)}if(P==="incubator"){d(R,.53,.6,.15,11569751,0,.1,0),f(R,.43,.08,w,0,.23,0).rotation.x=Math.PI/2,M(R,15505259,.75);for(let E of[-.55,.55])g(R,[E,.1,0],[E,1.05,0],.04,F);u(R,1.2,.14,.5,15303283,0,1.1,0)}if(P==="gloves")for(let E of[-.26,.26])h(R,.23,15906415,E,.5,0,.9,1.2,.55),u(R,.32,.2,.24,F,E,.24,0),h(R,.12,15906415,E+Math.sign(E)*.2,.48,0,.75,1.3,.9);if(P==="coach"){u(R,1,.17,1.4,F,0,.12,0),u(R,.75,.04,1.1,3426142,0,.23,0);for(let E=0;E<5;E++)u(R,.7,.01,.03,11192271,0,.26,-.4+E*.2);for(let E of[-.44,.44])g(R,[E,.2,-.4],[E,1,-.5],.04,x);u(R,1,.23,.14,6600369,0,1,-.5)}if(P==="charm"){f(R,.31,.05,F,0,.95,0);let E=d(R,.3,.3,.12,w,0,.42,0);E.rotation.x=Math.PI/2;let k=d(R,0,.17,.08,x,0,.43,-.08,5);k.rotation.x=-Math.PI/2}if(P==="turbo"){d(R,.18,.23,.8,15777377,0,.7,0),d(R,0,.18,.32,14579833,0,1.26,0);for(let E of[-.25,.25])u(R,.18,.35,.2,F,E,.43,0);d(R,.15,0,.35,15569252,0,.14,0),h(R,.1,F,0,.86,-.18)}if(P==="shield"){let E=h(R,.48,F,0,.67,0,1,1.25,.22);f(R,.42,.045,x,0,.67,-.04).scale.y=1.2,u(R,.08,.43,.07,w,0,.67,-.13),u(R,.3,.08,.07,w,0,.67,-.13)}return R}function N(L,P){return new _l(n,L,P)}function A(L,P,R,F=0,w=1){let x=l(L,P,0,R);if(x.scale.setScalar(w),d(x,.15,.22,1.5,9727820,0,.75,0,7),F===3)for(let E=0;E<3;E++)d(x,0,1.05-E*.21,1.4,[11654875,15070957,16252152][E],0,1.65+E*.55,0,7);else h(x,1.03,F===2?6454466:4100700,0,2,0,1,1,.9),h(x,.73,F===2?8958608:7386716,.51,2.35,.1),h(x,.65,F===2?10266329:7780711,-.5,2.05,-.1)}function b(L,P,R,F,w=2){let x=l(L,P,0,R);d(x,0,.53,w,F,0,w/2,0,5);let E=d(x,0,.29,w*.7,F,.43,w*.33,.2,5);return E.rotation.z=-.35,x}let S=l(i),U=l(S),V=[],Z=[],K=[],j=[];a(U,28,.7,30,7648127,0,-.43,12),a(U,10,.04,30,14994592,0,-.025,12),a(U,28,.3,1,5867873,0,-.22,27);for(let L of[-1,1])g(U,[L*bi,.57,0],[L*bi,.57,3],.06,16048051),g(U,[L*bi,.57,3],[L*ul,.57,8],.06,16048051),d(U,.075,.1,.8,3781804,L*bi,.4,3,8),d(U,.075,.1,.8,3781804,L*ul,.4,8,8);let J=l(U,Cn.x,0,Cn.z),fe=a(J,7,.08,7.8,9750141,0,.02,0);for(let L of[-3.5,3.5])for(let P=-3.5;P<4;P+=1.4)a(J,.13,.9,.13,16048051,L,.5,P),a(J,.1,.13,1.45,16048051,L,.72,P+.5),a(J,.1,.13,1.45,16048051,L,.33,P+.5);for(let L=-3.5;L<4;L+=1.4)a(J,.13,.9,.13,16048051,L,.5,3.8),a(J,1.4,.12,.12,16048051,L+.5,.72,3.8);for(let L of[-2.8,2.8])a(J,.18,2.9,.18,11701600,L,1.45,2.5);let Q=d(J,0,4.5,1.2,7824561,0,3.2,2.5,4);Q.rotation.y=Math.PI/4,Q.scale.z=.48,v(J,"SEU CURRAL",0,2.1,-3.7,3.7);let be=l(J),Ee=l(J),me=l(U,Vn.x,0,Vn.z);a(me,2.1,.28,3.3,3233139,0,.15,0),a(me,1.68,.07,2.9,3358805,0,.33,0);let Ve=[];for(let L=0;L<9;L++)Ve.push(a(me,1.6,.016,.055,7047576,0,.374,-1.3+L*.32));for(let L of[-.95,.95])g(me,[L,.35,-1],[L,1.8,-1.2],.065,10864330),g(me,[L,1.8,-1.2],[L,1.25,.9],.045,10864330);a(me,1.95,.37,.28,3324338,0,1.8,-1.25),a(me,.75,.17,.03,10808757,0,1.82,-1.42),v(me,"ESTEIRA",0,2.8,0,3);let He=l(U,7,0,21);a(He,2.8,1.25,1.6,15052645,0,.67,0),a(He,3.2,.16,2,16309936,0,1.34,0);for(let L of[-1.4,1.4])a(He,.12,2.6,.12,5471379,L,1.5,0);a(He,3.4,.2,2,3781804,0,2.7,0),v(He,"MELHORIAS",0,3.25,0,3);for(let L of[-9.8,10.5])A(U,L,8,0,1.4),A(U,L,23,0,1.15);v(U,"BASE SEGURA",0,3.7,4,4.3),a(U,23,.06,.32,13169563,0,.025,3);for(let L=0;L<ze.length;L++){let P=ze[L],R=-(L*It+It/2),F=l(S);V.push(F),a(F,28,.8,It,P.ground,0,-.46,R),a(F,9.5,.06,It,P.path,0,-.03,R);for(let ie of[-5.1,5.1])a(F,.2,.08,It,P.color,ie,.03,R);for(let ie=0;ie<6;ie++)a(F,.1,.01,1.7,16772554,0,.013,-L*It-ie*8-3);for(let ie of[-1,1]){let se=ie*bi;a(F,.1,.12,It,16048051,se,.57,R);for(let B=0;B<6;B++)d(F,.075,.1,.8,P.color,se,.4,-L*It-B*8,8)}let w=l(F,0,0,-L*It);for(let ie of[-6,6])a(w,.42,4.3,.48,P.color,ie,2.15,0),a(w,.7,.2,.75,16378298,ie,4.35,0);a(w,12.6,.38,.48,P.color,0,4.6,0),v(w,`${L+1} \xB7 ${P.name.toUpperCase()}`,0,5.25,0,6.3);for(let ie=0;ie<10;ie++){let se=ie%2?1:-1,B=se*(7+ie%3*2),W=-L*It-5-ie*4.1;if(L===0){A(F,B,W,0,.8+ie%3*.22);for(let q=0;q<3;q++)d(F,.03,.03,.55,5410126,B+.4*q,.25,W+1),h(F,.15,16042588,B+.4*q,.55,W+1,1,.65,1)}if(L===1&&(ie%3===0?(h(F,2.4,15119733,B,-.15,W,1,.78,1.35),h(F,1.4,15845002,B-se*.8,-.18,W+1.8,1.4,.45,1.1)):(d(F,.22,.26,2.2,7055212,B,1.05,W,7),g(F,[B,.8,W],[B+se*.65,.8,W],.15,7055212),d(F,.15,.15,.85,7055212,B+se*.65,1.2,W,7))),L===2){A(F,B,W,2,1);let q=l(F,B-se*1,0,W+1.4);d(q,.16,.21,.85,15454134,0,.4,0),h(q,.68,ie%2?10256603:15306921,0,1,0,1,.47,1);for(let ce of[-.2,.2])h(q,.1,16772304,ce,1.28,.18,1,.3,1)}if(L===3&&(A(F,B,W,3,1),ie%2&&b(F,B-se,W+1.7,8967914,1.6),h(F,.75,16251632,B+se,.3,W-1,1,.5,1.3)),L===4){let q=c(F,o("volcano-slope",()=>new Fs([new ge(2.2,0),new ge(1.75,.3),new ge(1.22,1),new ge(.82,2.15),new ge(.56,3.1),new ge(.38,3.1),new ge(.32,2.85)],24)),4669011,B,0,W);d(F,.4,.56,.12,16755799,B,3.1,W,8),a(F,1.3,.02,3.2,15891267,B-se,.01,W+1),b(F,B-se*1.5,W-1,12411489,.8)}if(L===5&&(b(F,B,W,ie%2?11507182:7524321,2.4+ie%3*.5),ie%3===0&&c(F,o("crystalArch",()=>new _i(3.1,.36,8,32,Math.PI)),5988494,0,0,W).scale.set(2.3,1.8,1)),L===6){b(F,B,W,9080267,1.2);let q=h(F,.42,ie%2?15251951:9358300,B,3+ie%3,W);if(j.push({mesh:q,y:q.position.y,phase:ie}),ie%3===0){let ce=h(F,1.1,10259424,B+se*2,5.5,W);f(F,1.6,.055,15978889,B+se*2,5.5,W).rotation.x=1,j.push({mesh:ce,y:5.5,phase:ie})}}if(L===7){a(F,5,.04,3,6870231,B,-.005,W);for(let ce=0;ce<3;ce++){let Ae=.8+ce*.5;g(F,[B+ce*.32,0,W],[B+ce*.32,Ae,W],.12,ce%2?16756104:16095426),g(F,[B+ce*.32,Ae*.6,W],[B+ce*.32+.4,Ae*.9,W+.1],.09,16095426)}let q=h(F,.22,16775143,B-se*.8,.3,W+.9);ie%2===0&&(f(F,1.05,.13,15905225,B,1.1,W).rotation.y=.4)}if(L===8){d(F,.09,.09,2.6,16774881,B,1.3,W);let q=h(F,.65,ie%2?15760045:8641486,B,2.6,W,1,1,.4);f(F,.42,.08,16772550,B,2.6,W-.28),ie%3===0&&(a(F,1.9,1.4,1.6,12814180,B+se*1.2,.7,W+1.4),a(F,2.1,.28,1.8,16769003,B+se*1.2,1.55,W+1.4))}if(L===9){for(let q=0;q<3;q++){let ce=B+(q-1)*.5,Ae=3.4+ie%3*.5;d(F,.1,.15,Ae,8047993,ce,Ae/2,W+q*.25,7);for(let De=.6;De<Ae;De+=.7)f(F,.12,.025,14020275,ce,De,W+q*.25).rotation.x=Math.PI/2,h(F,.35,2852191,ce+se*.22,De+.2,W+q*.25,.9,.18,.6)}ie%3===0&&(a(F,1.8,.32,1.8,6847856,B,.16,W+1.5),d(F,0,1,.6,12602709,B,1.6,W+1.5,4),a(F,.5,1.1,.5,16770725,B,.8,W+1.5))}if(L===10){let q=2+ie%3*1.5;a(F,2,q,2,4614284,B,q/2,W);for(let Ae=0;Ae<3;Ae++)a(F,.28,.28,.03,9172959,B+(Ae-1)*.5,q*.65,W-1.02);let ce=l(F,B,2.1,W+1.6);f(ce,.65,.16,15910507);for(let Ae=0;Ae<8;Ae++){let De=Ae*Math.PI/4,Se=a(ce,.24,.35,.2,15910507,Math.sin(De)*.83,Math.cos(De)*.83,0);Se.rotation.z=-De}j.push({mesh:ce,y:ce.position.y,phase:ie,spin:!0})}if(L===11){for(let q=0;q<3;q++)h(F,1.3,16053759,B+(q-1)*.7,.5,W,1,.45,1);if(d(F,.3,.4,3.4,16773848,B,1.7,W,10),a(F,1.1,.23,1.1,15186537,B,3.5,W),ie%2===0){f(F,1.1,.1,14068991,B,4.4,W);let q=h(F,.22,16765553,B,4.4,W);j.push({mesh:q,y:4.4,phase:ie})}}}if(L===12)for(let ie of[-1,1]){let se=ie*7;for(let B=0;B<4;B++){let W=R-18+B*12;d(F,.55,.75,3.8,7829416,se,1.9,W,10),f(F,.65,.1,10873588,se,3.8,W).rotation.x=Math.PI/2;let q=h(F,.32,16768906,se,4.3,W);j.push({mesh:q,y:4.3,phase:B+ie}),g(F,[se,4.6,W],[se-ie*.45,5.3,W],.075,11070975),g(F,[se-ie*.45,5.3,W],[se+ie*.2,5.3,W],.075,11070975),g(F,[se+ie*.2,5.3,W],[se-ie*.4,6.1,W],.075,11070975);for(let ce=0;ce<3;ce++)h(F,.9,8754877,se+ie*(1+ce*.5),4.6,W+ce*.3,1,.5,1)}}if(L===13){for(let se of[-1,1])for(let B=0;B<5;B++){let W=se*(7+B%2*2),q=R-19+B*9,ce=l(F,W,0,q);if(B%2===0){d(ce,.7,.9,2.9,5406337,0,1.45,0,12),f(ce,1.05,.12,15912577,0,3.4,0),h(ce,.94,16772552,0,3.4,0,1,1,.13);for(let De=0;De<12;De++){let Se=De*Math.PI/6;u(ce,.07,.16,.04,5406337,Math.sin(Se)*.81,3.4+Math.cos(Se)*.81,-.15)}let Ae=l(ce,0,3.4,-.2);g(Ae,[0,0,0],[0,.7,0],.045,5406337),g(Ae,[0,0,0],[.5,0,0],.035,14460501),j.push({mesh:Ae,y:3.4,phase:B,spin:!0})}else{for(let Ae of[.3,3.5])d(ce,.9,.9,.18,15056757,0,Ae,0);for(let Ae of[-.75,.75])g(ce,[Ae,.3,0],[Ae,3.5,0],.09,5406337);d(ce,.7,.08,1.4,10872029,0,2.65,0,16),d(ce,.08,.7,1.4,10872029,0,1.15,0,16),d(ce,0,.5,.6,15056757,0,.7,-.15,12)}for(let Ae=0;Ae<3;Ae++)h(F,.45,7912102,W+se*(1+Ae*.3),.4,q+1,1,.45,1)}let ie=f(F,5.8,.18,15056757,0,3,R);ie.scale.y=1.2}let x=kn[L],E=l(F,x.x,0,x.z);d(E,1.55,1.7,.2,10123090,0,.1,0);for(let ie=0;ie<3;ie++)f(E,1.45-ie*.12,.065,14926459,0,.22+ie*.035,0).rotation.x=Math.PI/2;let k=Array.from({length:3},(ie,se)=>{let B=M(E,P.color,.8,cd(L,se));return B.position.set((se-1)*.85,.2,se===1?.42:0),B}),ee=m(E);Z.push({g:E,eggs:k,plaque:ee});let $=y(F,P.kind,P.color,1.65);$.g.position.set(x.x,0,x.z-2.5),v($.g,"DONO DO OVO",0,2.9,0,2.6),K.push($)}for(let L of ll){let P=V[L.world];if(L.world===0||L.world===2){let R=d(P,.4,.4,1.55,10253394,L.x,.37,L.z,8);R.rotation.z=Math.PI/2}else if(L.world===1)a(P,1.35,L.h,1.1,12292190,L.x,L.h/2,L.z);else if(L.world===3)b(P,L.x,L.z,11724011,L.h);else if(L.world===4)d(P,.35,.8,L.h,9591137,L.x,L.h/2,L.z,6);else if(L.world===8)d(P,.55,.66,L.h,16230326,L.x,L.h/2,L.z),f(P,.5,.09,16773332,L.x,L.h,L.z).rotation.x=Math.PI/2;else if(L.world===9){let R=d(P,.32,.32,1.4,7584881,L.x,.32,L.z,7);R.rotation.z=Math.PI/2}else L.world===10?a(P,1.2,L.h,1.2,14595688,L.x,L.h/2,L.z):b(P,L.x,L.z,ze[L.world].color,L.h)}let Qe=l(V[ze.length-1],0,0,-It*ze.length+1);a(Qe,18,.45,1,6908570,0,.2,0),v(Qe,ze.length+" MUNDOS \xB7 VOLTE AO CURRAL",0,3,0,7);let et=N(S),oe=new pt(new vi(1.15,28,18),new Kn({color:8843007,transparent:!0,opacity:.25,depthWrite:!1}));oe.position.y=1,oe.visible=!1,et.g.add(oe);let pe=l(et.g,0,.2,0);for(let L=0;L<2;L++)f(pe,.7+L*.12,.028,9561294,0,L*.5,0).rotation.x=Math.PI/2;pe.visible=!1;let Me=l(S),Ue=Array.from({length:24},()=>{let L=h(Me,.09,16769443);return L.visible=!1,{mesh:L,life:0,v:new O}}),Fe=0;function tt(L,P){for(let R=0;R<16;R++){let F=Ue[Fe++%Ue.length];F.mesh.material=r(P),F.mesh.position.copy(L),F.mesh.visible=!0,F.life=.6+Math.random()*.4,F.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}function ot(L,P){for(let R of j)R.spin?R.mesh.rotation.z=P*.7+R.phase:R.mesh.position.y=R.y+Math.sin(P*1.5+R.phase)*.3;for(let R of Ue)R.life>0&&(R.life-=L,R.mesh.visible=R.life>0,R.v.y-=7*L,R.mesh.position.addScaledVector(R.v,L),R.mesh.scale.setScalar(Math.max(.1,R.life)));for(let R=0;R<Ve.length;R++)Ve[R].position.z=-1.4+(P*2+R*.32)%2.8}function z(L,P,R=0,F=1/60,w=9,x=!1){L.animator.update(F,R,w,x)}function de(L){for(let P of[...L.children])P.userData.actor?.dispose()}function he(L,P){if(!P||P==="normal")return;let R=P==="gold"?[16765788]:P==="cosmic"?[11439103,7921151]:[16751266,16769157,9300932,9423359];for(let F=0;F<R.length;F++){let w=f(L,.5+F*.06,.026,R[F],0,.12+F*.065,0);w.rotation.x=Math.PI/2}if(P==="cosmic")for(let F=0;F<4;F++){let w=F*Math.PI/2;h(L,.05,16777215,Math.sin(w)*.6,.6,Math.cos(w)*.6)}L.userData.mutation=P}function ae(L,P){fe.material=r(L.color),Q.material=r(L.roof),Ee.clear();for(let R=0;R<P;R++)d(Ee,.37,.4,.06,13745522,(R%4-1.5)*1.45,.09,Math.floor(R/4)*1.1-2.7,10);for(let R of[-3,3]){d(Ee,.3,.23,.5,L.roof,R,.3,3);for(let F=0;F<3;F++)h(Ee,.17,L.color===7833016?16769157:16229816,R+(F-1)*.2,.85,3)}}let le=V.map((L,P)=>{let R=l(L),F=f(R,1.15,.06,16766312,0,.1,0);F.rotation.x=Math.PI/2;let w=l(R),x=ze[P];if(P===13)g(w,[0,2.2,0],[0,.5,0],.05,15912577),h(w,.48,9561294,0,.5,0),f(w,.49,.035,15912577,0,.5,0);else if(P===0||P===9)d(w,.18,.18,2.2,x.color,0,.45,0).rotation.z=Math.PI/2;else if(P===4||P===5||P===6)d(w,0,.6,1.3,x.color,0,.7,0,6);else if(P===3||P===7||P===8)h(w,.8,x.color,0,.14,0,1.4,.12,1);else if(P===10)a(w,1.4,.45,1.2,16760158,0,1.4,0);else for(let E=0;E<3;E++)f(w,.5+E*.2,.05,x.color,0,.3+E*.3,0).rotation.x=Math.PI/2;return{node:R,body:w,ring:F}});function we(L){le.forEach((P,R)=>{let F=L.hazard(R);P.node.position.set(F.x,0,F.z),P.ring.material=r(F.active?16740442:F.warning?16767842:13360333),P.body.visible=F.active||F.warning,P.body.scale.y=F.active?1:.3,P.body.rotation.y=L.time*(R+1)*.3})}return{hero:N,disposeActors:de,mutate:he,decorate:ae,updateHazards:we,equipAccessories:I,setTrainingPlaque:p,shieldBubble:oe,abilityAura:pe,root:S,base:U,zoneGroups:V,nests:Z,guardians:K,player:et,penContent:be,egg:M,shopItem:C,creature:y,animateCreature:z,animate:ot,burst:tt,label:v,mat:r,group:l}}function xd(i,e,{reducedMotion:t=!1}={}){if(!i)return;let n=new Map,s=[8444332,16764536,12297727,7986154],r=new O;function o(l){l.label.material.map.dispose(),l.label.material.dispose(),l.actor.dispose()}i.setPeers=(l=[])=>{let c=e(),a=i.scene();if(!c||!a)return;let u=new Set;for(let h of l.slice(0,4)){let d=h.state;if(!Number.isInteger(h.slot)||h.slot<1||h.slot>4||!d||!["x","y","z","yaw"].every(v=>Number.isFinite(d[v])))continue;let f=Mi({...d});f.y=xt.clamp(f.y,0,8),u.add(h.slot);let g=n.get(h.slot);if(!g){let v=c.hero(a,s[h.slot-1]),m=c.label(v.g,"Explorador "+h.slot,0,2.3,0,2.2);v.g.position.set(f.x,f.y,f.z),v.g.rotation.y=f.yaw,g={actor:v,label:m,state:f},n.set(h.slot,g)}g.state=f}for(let[h,d]of n)u.has(h)||(o(d),n.delete(h))},i.clearPeers=()=>{for(let l of n.values())o(l);n.clear()},i.tick=l=>{let c=i.state();if(!(!c||!l))for(let a of n.values()){let{actor:u,state:h}=a,d=u.g,f=d.position.y;d.visible=h.zone===c.zone;let g=d.position.x,v=d.position.z;d.position.lerp(r.set(h.x,h.y,h.z),1-Math.exp(-l*8)),Mi(d.position),d.rotation.y+=Math.atan2(Math.sin(h.yaw-d.rotation.y),Math.cos(h.yaw-d.rotation.y))*(1-Math.exp(-l*10));let m=Math.hypot(d.position.x-g,d.position.z-v)/l;if(u.update(l,{player:{...d.position,vy:(d.position.y-f)/l},moving:m>.12?1:0,speed:m,reducedMotion:t}),h.gesture==="wave"||h.gesture==="cheer"){let p=u.model.bones;p.shoulderR.rotation.z=-2.2+Math.sin(u.elapsed*9)*.2,p.elbowR.rotation.x=.3}}}}var vd={compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10m-2-10h3m-3 10h3"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 3 1-2h4l1 2 2 1 2-1 3 4-2 2v3l2 2-2 4-3-1-2 1-1 3h-4l-1-3-2-1-3 1-2-4 2-2V9L2 7l3-4 2 1Z"/><circle cx="12" cy="11" r="3"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',full:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 7 16-7-4-7 4Z"/></svg>',egg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z"/><path d="m7 12 3-2 3 3 4-2"/></svg>',speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17a9 9 0 1 1 18 0M12 13l5-5M4 21h16"/><circle cx="12" cy="14" r="2"/></svg>',dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 2-9 12h6l-1 8 9-12h-6Z"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5Z"/><path d="m8 11 3 3 5-5"/></svg>',juice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 2 13h10l2-13ZM3 8h18M12 8l2-6h5"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 11 10-8 10 8M5 10v11h14V10M10 21v-7h4v7"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 22V3m0 0c5-5 9 5 14 0v11c-5 5-9-5-14 0"/></svg>',friends:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M2 21v-4c0-7 14-7 14 0v4M17 4a3 3 0 0 1 0 6m2 3c3 1 3 4 3 8"/></svg>',shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18l-2-6H5Zm1 0v12h16V9M9 21v-7h6v7"/></svg>',help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 1-2 3m0 3h.01"/></svg>',jump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V3m-7 7 7-7 7 7"/></svg>'},Le=i=>document.getElementById(i),Kc="integro-box-eggs-v1";function _d({onExit:i,registerAdapter:e}){let t=window.BoxStorage||localStorage,n=null,s="",r=null,o=null,l=null,c=!0;try{l=JSON.parse(t.getItem(Kc)||"null")}catch{c=!1}let a=new Ys(l),u=!1,h,d,f,g,v=0,m=0,p=0,M=0,y=null,_="gear",I=0,C=0,N=0,A=0,b=.52,S=.52,U=null,V=null,Z="",K="",j="",J=-1,fe=-1,Q={},be=null,Ee=null,me={x:0,z:0},Ve=!1,He=new Set,Qe=0,et=0,oe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||!1,pe=Le("eggApp"),Me=Le("eggCanvas"),Ue=new O,Fe=D=>D.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:2}),tt=eh({stage:Le("eggStage"),getGame:()=>a,blocked:()=>!!y,use:ot,open:()=>H("abilities")});function ot(D){!u||window.BoxEggCloud?.frozen||a.useAbility(D)&&(xe(),se(),q(),Me.focus())}let z=document.createElement("div");z.className="egg-income-effects",z.setAttribute("aria-hidden","true"),Le("eggStage").append(z);let de=[],he=0,ae=document.createElement("span");ae.className="egg-wallet-gain",ae.setAttribute("aria-hidden","true"),document.querySelector("#eggApp .egg-money").append(ae);function le(D){if(!D.uid||r||!g||de.length>=24)return;let re=document.createElement("div");re.className="egg-income-float",re.innerHTML="<span>"+vd.coin+" +"+D.amount.toLocaleString("pt-BR")+"</span>",z.append(re),de.push({el:re,uid:D.uid,start:performance.now()})}function we(D){for(let re of de){let Re=!r&&g?.penContent.userData.actors?.find(at=>at.uid===re.uid),Pe=Re?.g||(s===re.uid?n?.g:null);if(D-re.start>1800||!Pe){re.el.remove(),re.done=!0;continue}let Y=Pe.getWorldPosition(new O);Y.y+=1.3,Y.project(f);let ye=Y.z>=-1&&Y.z<=1&&Math.abs(Y.x)<.94&&Math.abs(Y.y)<.83;re.el.hidden=!ye,ye&&(re.el.style.left=(Y.x+1)*50+"%",re.el.style.top=(1-Y.y)*50+"%")}de=de.filter(re=>!re.done),D>he&&(ae.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning"))}function L(){for(let D of de)D.el.remove();de=[],ae.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning")}function P(){a.captureNests();try{t.setItem(Kc,JSON.stringify(a.save)),c=!0,window.BoxEggCloud?.dirty()}catch{c=!1}}function R(D){Le("eggToast").textContent=D,I=performance.now()+3400}function F(){U=null,V=null,Me.classList.remove("dragging"),He.clear(),me={x:0,z:0},Ve=!1,Ee=null,be=null,Le("eggStick").style.transform="translate(0px,0px)",Le("eggSprint").classList.remove("held")}function w(){C=A,S=.52,U=null,V=null,Me.classList.remove("dragging"),Le("eggCamera").setAttribute("aria-pressed","false")}function x(){let D=Math.atan2(Math.sin(C-A),Math.cos(C-A));C=Math.abs(Math.abs(D)-Math.PI)<.2?A:A+Math.PI,S=.38,Le("eggCamera").setAttribute("aria-pressed",String(Math.abs(C-A)>.2))}Me.addEventListener("pointerdown",D=>{!u||y||U!==null||D.pointerType==="mouse"&&D.button!==0||(D.preventDefault(),U=D.pointerId,V={x:D.clientX,y:D.clientY},Me.setPointerCapture(D.pointerId),Me.classList.add("dragging"),Me.focus())}),Me.addEventListener("pointermove",D=>{if(D.pointerId!==U||!V||y)return;D.preventDefault();let re=D.clientX-V.x,Re=D.clientY-V.y;C-=re/Math.max(240,Me.clientWidth)*Math.PI*2,C=Math.atan2(Math.sin(C),Math.cos(C)),S=Math.max(.2,Math.min(1.05,S+Re/Math.max(200,Me.clientHeight)*1.6)),V={x:D.clientX,y:D.clientY},Le("eggCamera").setAttribute("aria-pressed","false")});let E=D=>{D.pointerId===U&&(U=null,V=null,Me.classList.remove("dragging"))};for(let D of["pointerup","pointercancel","lostpointercapture"])Me.addEventListener(D,E);e&&(o=e("egg",{scene:()=>d,active:()=>u,state:()=>({x:a.player.x,y:a.player.y,z:a.player.z,yaw:Qe,zone:"world"}),enter:()=>{xe(),R("Sala conectada! Abra Amigos para correr, visitar e trocar.")},leave:()=>{r=null,K="",B()}})),xd(o,()=>g,{reducedMotion:oe});function k(){let D=new io({alpha:!0,antialias:!0});D.setPixelRatio(1),D.setSize(130,120),D.outputColorSpace=Ct,D.toneMapping=Yr,D.toneMappingExposure=1;let re=new As;re.add(new Os(16777215,11057583,1.15));let Re=new Bs(16777215,2);Re.position.set(3,6,-5),re.add(Re);let Pe=new zt(30,130/120,.1,30);for(let Y=0;Y<ze.length;Y++){let ye=g.creature(re,ze[Y].kind,ze[Y].color);Pe.position.set(2,1.8,-3.5),Pe.lookAt(0,.78,0),D.render(re,Pe),Q[Y]=D.domElement.toDataURL("image/png"),ye.dispose()}for(let Y of[...Object.keys(Si),...Object.keys(ns),...Object.keys(Qt),...Object.keys(Mt)]){let ye=g.shopItem(re,Y);Pe.position.set(1.7,1.6,-3.1),Pe.lookAt(0,.6,0),D.render(re,Pe),Q[Y]=D.domElement.toDataURL("image/png"),re.remove(ye)}for(let Y of Object.keys(Lt)){let ye=g.egg(re,15505771,1,Y);Pe.position.set(1.7,1.6,-3.1),Pe.lookAt(0,.6,0),D.render(re,Pe),Q["egg-"+Y]=D.domElement.toDataURL("image/png"),re.remove(ye)}D.dispose(),D.forceContextLoss()}function ee(){try{h=new io({canvas:Me,antialias:!0,alpha:!1,powerPreference:"high-performance"}),h.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<950?1.5:1.75)),h.shadowMap.enabled=!0,h.shadowMap.type=ha,h.outputColorSpace=Ct,h.toneMapping=Yr,h.toneMappingExposure=1,d=new As,d.background=new Ye(ze[0].sky),d.fog=new wr(ze[0].sky,42,108),f=new zt(52,1,.1,130),d.add(new Os(16775917,6983578,1.15));let D=new Bs(16774104,2.4);D.position.set(-10,20,13),D.castShadow=!0,D.shadow.mapSize.set(1024,1024),Object.assign(D.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:65}),D.shadow.normalBias=.035,D.shadow.bias=-2e-4,d.add(D),d.add(D.target),d.userData.sun=D,g=gd(d),k(),f.position.set(0,8,27),f.lookAt(0,1,10),new ResizeObserver($).observe(Le("eggStage")),$(),B(),q(),m=performance.now(),ce(m)}catch(D){console.error("Pegue o Ovo 3D:",D),Le("eggWebglError").hidden=!1}}function $(){if(!h)return;let D=Me.clientWidth,re=Me.clientHeight;!D||!re||(h.setSize(D,re,!1),f.aspect=D/re,f.fov=D/re>2?58:D/re<1?64:52,f.updateProjectionMatrix())}function ie(){let D=me.x+(He.has("d")||He.has("arrowright")?1:0)-(He.has("a")||He.has("arrowleft")?1:0),re=me.z+(He.has("s")||He.has("arrowdown")?1:0)-(He.has("w")||He.has("arrowup")?1:0);return f.getWorldDirection(Ue),Ue.y=0,Ue.normalize(),{x:-D*Ue.z-re*Ue.x,z:D*Ue.x-re*Ue.z,sprint:Ve||He.has("shift")}}function se(){let D=0;for(let re of a.drainEvents()){if(re.type==="income"){D+=re.amount,le(re);continue}re.type==="grab"&&(A=Math.PI,w()),["caught","deposit","train"].includes(re.type)&&(A=0,w()),["grab","deposit","caught","hatch","level","sold","upgrade","juice","shield","ability","abilityEnd"].includes(re.type)&&(B(),P()),re.type==="hatch"&&(g?.burst(new O(Cn.x,1,Cn.z),ze[re.world].color),a.save.seen.every(Boolean)&&(re.text+=` Voc\xEA descobriu todas as ${ze.length} criaturas!`)),re.type==="ability"&&g?.burst(new O(a.player.x,1,a.player.z),10741230),re.type==="shield"&&g?.burst(new O(a.player.x,1,a.player.z),8843007),re.type==="level"&&g?.burst(new O(Vn.x,1.5,Vn.z),14283674),["train","level"].includes(re.type)&&a.mode==="train"||R(re.text)}D&&(ae.textContent="+"+D.toLocaleString("pt-BR"),he=performance.now()+1800,document.querySelector("#eggApp .egg-money").classList.add("earning"),Le("eggCoins").textContent=a.save.coins.toLocaleString("pt-BR"),P())}function B(){if(!g)return;let D=r||a.save,re=JSON.stringify([D.decoration,a.capacity(),D.creatures,D.eggs]);if(re===K)return;K=re,g.decorate(wi[D.decoration]||wi.meadow,r?Math.max(3,D.creatures.length):a.capacity()),g.disposeActors(g.penContent),g.penContent.clear(),g.penContent.userData.actors=[];let Re=0;for(let Pe of D.eggs||[]){let Y=g.egg(g.penContent,ze[Pe.world].color,.55,Pe.rarity);g.mutate(Y,Pe.mutation),Y.position.set((Re%4-1.5)*1.45,.14,Math.floor(Re/4)*1.1-2.7),Y.userData.egg=Pe.id,g.penContent.userData.actors.push({g:Y,egg:!0,baseX:Y.position.x,baseZ:Y.position.z}),Re++}for(let Pe of D.creatures){let Y=g.creature(g.penContent,ze[Pe.world].kind,ze[Pe.world].color,.52,Pe.rarity);g.mutate(Y.g,Pe.mutation),Y.g.position.set((Re%4-1.5)*1.45,.12,Math.floor(Re/4)*1.1-2.7),g.penContent.userData.actors.push({...Y,uid:Pe.uid,baseX:Y.g.position.x,baseZ:Y.g.position.z}),Re++}}function W(D,re){o?.tick(D),g.updateHazards(a);let Re=a.companion();(Re?.uid||"")!==s&&(n&&n.dispose(),s=Re?.uid||"",n=Re?g.creature(g.root,ze[Re.world].kind,ze[Re.world].color,.7,Re.rarity):null,n&&(g.mutate(n.g,Re.mutation),n.g.position.set(a.player.x+1,0,a.player.z+1))),n&&(n.g.position.lerp(new O(a.player.x+1,0,a.player.z+1.1),Math.min(1,D*5)),n.g.rotation.y=Qe,g.animateCreature(n,a.time,a.moving,D,a.speed(),oe));let Pe=a.player,Y=g.player;Y.g.position.set(Pe.x,Pe.y+(a.mode==="train"?.37:0),Pe.z),Math.hypot(re.x,re.z)>.05&&a.mode==="run"&&(Qe=Math.atan2(-re.x,-re.z)),a.mode==="train"&&(Qe=0);let ye=Math.atan2(Math.sin(Qe-Y.g.rotation.y),Math.cos(Qe-Y.g.rotation.y));Y.g.rotation.y+=ye*Math.min(1,D*14),Y.update(D,{player:Pe,moving:a.moving,training:a.mode==="train",carrying:a.carrying!==null,speed:a.mode==="train"?a.speed():a.motionSpeed||0,push:performance.now()<et,reducedMotion:oe});let at=a.carriedEgg?`${a.carrying}:${a.carriedEgg.rarity}:${a.carriedEgg.mutation}`:"none";if(J!==at){if(Y.carry.clear(),a.carrying!==null){let it=g.egg(Y.carry,ze[a.carrying].color,.65,a.carriedEgg.rarity);g.mutate(it,a.carriedEgg.mutation)}J=at}let bt=JSON.stringify(a.save.equipped);bt!==Z&&(g.equipAccessories(Y,a.save.equipped),Z=bt),g.abilityAura.visible=!a.raceMode&&Object.values(a.save.activeAbilities).some(Boolean),g.abilityAura.rotation.y=a.time,g.shieldBubble.visible=a.effect("bubble")||a.carrying!==null&&a.guardians[a.carrying].grace>0&&a.guardians[a.carrying].grace>1.1;let Dt=a.zone();for(let it=0;it<ze.length;it++){g.zoneGroups[it].visible=Math.abs(it-Dt)<=2;let T=g.guardians[it],X=a.guardians[it],te=X.x-T.g.position.x,ne=X.z-T.g.position.z;if(Math.hypot(te,ne)>.005){let G=Math.atan2(-te,-ne);T.g.rotation.y+=Math.atan2(Math.sin(G-T.g.rotation.y),Math.cos(G-T.g.rotation.y))*(1-Math.exp(-D*12))}else X.state==="idle"&&(T.g.rotation.y=Math.sin(a.time*.5+it)*.35);T.g.position.x=X.x,T.g.position.z=X.z,(g.zoneGroups[it].visible||a.carrying===it)&&g.animateCreature(T,a.time+it,X.state==="chase"||X.state==="return"?1:0,D,D?Math.hypot(te,ne)/D:0,oe),g.nests[it].eggs.forEach((G,_e)=>{let Ce=a.nestEggs[it][_e],Be=Ce.rarity+Ce.mutation;G.userData.signature!==Be&&(g.nests[it].g.remove(G),G=g.egg(g.nests[it].g,ze[it].color,.8,Ce.rarity),g.mutate(G,Ce.mutation),G.userData.signature=Be,G.position.set((_e-1)*.85,.2,_e===1?.42:0),g.nests[it].eggs[_e]=G),G.visible=a.nestEggs[it][_e].availableAt<=a.time,G.rotation.y=a.time*.6,G.position.y=.2+Math.sin(a.time*2+it+_e)*.04}),a.carrying===it&&(T.g.visible=!0,g.zoneGroups[it].visible=!0)}g.base.visible=Pe.z>-88;for(let it of g.penContent.userData.actors||[])it.egg?it.g.rotation.z=Math.sin(a.time*4+it.baseX)*.06:(g.animateCreature(it,a.time+it.baseX,.1,D,2,oe),it.g.position.y=.12,it.g.position.x=it.baseX+Math.sin(a.time*.6+it.baseZ)*.16,it.g.position.z=it.baseZ+Math.cos(a.time*.45+it.baseX)*.12,it.g.rotation.y=Math.sin(a.time*.35+it.baseX)*.7);let en=Math.atan2(Math.sin(C-N),Math.cos(C-N));N+=en*Math.min(1,D*5),b+=(S-b)*Math.min(1,D*8);let Ft=Me.clientWidth/Me.clientHeight>2,Gt=Ft?10:13.5,Qs=Math.cos(b)*Gt,yl=Math.cos(N)*Qs,Ml=Math.sin(N)*Qs,bl=new O(Pe.x+Ml,1.05+Math.sin(b)*Gt+Pe.y*.25,Pe.z+yl);f.position.lerp(bl,Math.min(1,D*9)),f.lookAt(Pe.x-Math.sin(N)*3.3,1.05,Pe.z-Math.cos(N)*3.3);let Sl=new Ye(ze[Dt].sky);d.background.lerp(Sl,Math.min(1,D*.8)),d.fog.color.copy(d.background);let lo=d.userData.sun;lo.position.set(Pe.x-10,20,Pe.z+13),lo.target.position.set(Pe.x,0,Pe.z),g.animate(D,a.mode==="train"?a.time:a.time*.3),fe!==Dt&&(fe=Dt,Pe.z<0&&R(`${Dt+1}/${ze.length} \xB7 ${ze[Dt].name}`))}function q(){tt.update();let D=a.save,re=a.player,Re=a.zone(),Pe=[D.training,D.upgrades.boots,D.upgrades.gloves,D.companionId].join(":");g&&Pe!==j&&(j=Pe,ze.forEach((Ft,Gt)=>g.setTrainingPlaque(Gt,a.trainingAdvice(Gt)))),Le("eggJuiceCount").textContent=D.supplies.juice,Le("eggShieldCount").textContent=D.supplies.shield,Le("eggJuice").disabled=!!y||a.mode!=="run"||!D.supplies.juice||a.energy>=a.maxEnergy()-1,Le("eggCoins").textContent=D.coins.toLocaleString("pt-BR"),Le("eggSpeed").textContent=Fe(a.speed()),Le("eggLevel").textContent=D.training,Le("eggLevelMax").textContent=ri;let Y=Math.round(a.energy/a.maxEnergy()*100);Le("eggEnergyFill").style.width=Y+"%",Le("eggEnergyMeter").setAttribute("aria-valuenow",Y),Le("eggEnergyMeter").classList.toggle("low",Y<25),Le("eggShield").hidden=!D.supplies.shield,Le("eggJuice").hidden=!D.supplies.juice,Le("eggWorldIndex").textContent=a.inBase()?"BASE SEGURA":`${Re+1} / ${ze.length}`,Le("eggWorldName").textContent=a.inBase()?"Seu curral":ze[Re].name;let ye=a.interaction();Le("eggInteract").textContent=r?"Voltar ao meu curral":ye.label,Le("eggInteract").disabled=!r&&["walk","return","wait"].includes(ye.type),Le("eggTraining").hidden=a.mode!=="train";let at=Math.ceil(Math.max(0,(a.trainTarget()-D.trainXP)/a.trainingRate()));Le("eggTrainText").textContent=String(Math.floor(at/60)).padStart(2,"0")+":"+String(at%60).padStart(2,"0"),Le("eggTrainText").setAttribute("aria-label",`${at} segundos para ganhar 0,35 de velocidade`),Le("eggTrainFill").style.strokeDashoffset=String(100-Math.min(1,D.trainXP/a.trainTarget())*100),Le("eggTarget").parentElement.hidden=a.mode==="train";let bt=kn.map((Ft,Gt)=>({i:Gt,d:gn(re,Ft)})).filter(Ft=>a.availableAt[Ft.i]<=a.time).sort((Ft,Gt)=>Ft.d-Gt.d)[0],Dt=a.carrying!==null?Cn:bt?kn[bt.i]:null;Le("eggTarget").textContent=a.mode==="train"?`Treino ${D.training}/${ri}`:a.carrying!==null?`Curral \xB7 ${Math.ceil(gn(re,Cn))} m`:bt?`Ovo \xB7 ${Math.ceil(bt.d)} m`:"Ninhos renovando",Le("eggBearing").hidden=!Dt||a.mode==="train",Dt&&(Le("eggBearing").style.transform=`rotate(${Math.atan2(Dt.x-re.x,-(Dt.z-re.z))+N}rad)`);let en=Le("eggChase");if(en.hidden=a.carrying===null,a.carrying!==null){let Ft=a.inBase(),Gt=Math.max(0,Math.round(gn(re,a.guardians[a.carrying])));en.classList.toggle("safe",Ft),en.classList.toggle("urgent",!Ft&&Gt<10),en.textContent=Ft?"\u2713 Ovo seguro":`! Perseguidor \xB7 ${Gt} m`,en.setAttribute("aria-label",Ft?"Voc\xEA est\xE1 seguro. Guarde o ovo no curral.":`Perseguidor a ${Gt} metros`)}}function ce(D){v=requestAnimationFrame(ce);let re=Math.min(.05,Math.max(0,(D-m)/1e3));if(m=D,!(!u||!h)){if(!y&&!document.hidden){let Re=ie();a.mode==="train"&&Math.hypot(Re.x,Re.z)>.2&&a.interact(),window.BoxEggCloud?.frozen||a.update(re,Re),se(),W(window.BoxEggCloud?.frozen?0:re,Re),M+=re,M>2&&(P(),M=0)}h.render(d,f),we(D),p+=re,p>.1&&(q(),p=0),Le("eggToast").textContent&&D>I&&(Le("eggToast").textContent="")}}function Ae(){if(y)return;if(r){r=null,K="",B(),R("Voc\xEA voltou ao seu curral.");return}let D=a.interact();D==="corral"&&H("corral"),D==="nest"&&H("nest"),se(),q(),y||Me.focus()}function De(){return`<ol class="egg-help-list"><li><strong>Siga a pista.</strong> Os ${ze.length} mundos est\xE3o conectados. N\xE3o h\xE1 troca de tela. Os donos ficam mais r\xE1pidos a cada mundo.</li><li><strong>Escolha seu ovo.</strong> Cada ninho tem tr\xEAs ovos que se renovam a cada 3\u20134 minutos de jogo ativo. As muta\xE7\xF5es dourada, arco-\xEDris e c\xF3smica aumentam o valor em 1,5\xD7, 2\xD7 e 3\xD7. Aproxime-se, toque em \u201CEscolher ovo\u201D ou aperte E e escolha um. Comum vale 1\xD7, raro 3\xD7, \xE9pico 5\xD7 lend\xE1rio 8\xD7 e secreto 12\xD7; lend\xE1rios e secretos aparecem a partir da pista 7. A c\xE2mera vira para o curral; continue em frente para voltar.</li><li><strong>Fuja!</strong> Mova pelo controle ou WASD/setas. Use Espa\xE7o/Pular para saltar obst\xE1culos e Shift/Disparar para correr mais r\xE1pido. O f\xF4lego recarrega sozinho.</li><li><strong>Guarde no curral.</strong> Na base, v\xE1 at\xE9 o cercado e toque em \u201CGuardar ovo\u201D. Ele choca em ${a.hatchTime()} s de jogo ativo. O dono n\xE3o entra na base.</li><li><strong>Venda e melhore.</strong> As criaturas geram integros que entram automaticamente no saldo enquanto voc\xEA joga. O valor aparece sobre elas; voc\xEA tamb\xE9m pode vend\xEA-las no curral. Escolha uma como companheira para ganhar uma habilidade. Compre melhorias ou entre na esteira para treinar a velocidade. Cada barra completa aumenta o n\xEDvel, at\xE9 ${ri}.</li><li><strong>Confira a plaqueta do ovo.</strong> Ela mostra o treino recomendado e quantos n\xEDveis faltam. O c\xE1lculo considera seus t\xEAnis e luvas, com 10% de vantagem de velocidade carregando o ovo sem disparar. \xC9 uma refer\xEAncia: desvie dos obst\xE1culos durante a fuga.</li><li><strong>Olhe ao redor.</strong> Arraste a \xE1rea do cen\xE1rio com o dedo ou mouse para girar e inclinar a c\xE2mera. Use \u201CAtr\xE1s\u201D ou C para olhar para tr\xE1s; \u201CCentrar\u201D ou R volta \xE0 vista de corrida. O direcional acompanha a c\xE2mera: para cima vai \xE0 frente da tela; esquerda e direita seguem a vis\xE3o atual.</li><li><strong>Dispute com amigos.</strong> Na corrida online, chegue perto de outro corredor e toque na m\xE3o \u201CEmpurrar\u201D ou aperte F. O empurr\xE3o recarrega em 3 segundos; quem recebeu fica protegido por um instante. A base \xE9 uma \xE1rea segura.</li><li><strong>Poderes e boosts.</strong> Compre cargas na base e equipe um poder e um boost. Ative pelos \xEDcones do HUD ou Q/B. Abra Poderes no menu para trocar. H\xE1 prote\xE7\xE3o, congelamento, salto duplo, f\xF4lego infinito e boosts de velocidade, treino, incuba\xE7\xE3o e produ\xE7\xE3o. Eles ficam pausados nas corridas online, que mant\xEAm velocidade igual para todos.</li><li><strong>Prepare sua mochila.</strong> O escudo protege automaticamente de uma captura. Toque em Suco para recuperar o f\xF4lego. Compre na base, com integros ganhas no jogo.</li></ol><p class="egg-muted">${c?"integros, criaturas, ovos no curral e treino ficam salvos neste navegador. Uma corrida em andamento recome\xE7a na base ao recarregar.":"O navegador n\xE3o permitiu salvar. O progresso ficar\xE1 apenas nesta sess\xE3o."} No portal, consulte Amigos e perfil para ver a situa\xE7\xE3o do salvamento online. O jogo pausa ao abrir um painel, trocar de jogo ou sair da tela. N\xE3o h\xE1 dinheiro real.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Jogar</button></div><button class="egg-reset" data-egg-action="resetAsk">Apagar progresso deste jogo</button>`}function Se(){if(!y)return;let D=a.save,re="",Re="PEGUE O OVO",Pe="";if(y==="shop")re="Loja do corredor",Re=`${Object.keys(Si).length+Object.keys(ns).length+Object.keys(Qt).length+Object.keys(wi).length+Object.keys(Mt).length} ITENS \xB7 INTEGROS DO JOGO`,Pe=`<div class="egg-shop-balance">\u25CF ${D.coins.toLocaleString("pt-BR")} integros dispon\xEDveis</div><div class="egg-shop-tabs"><button data-shop-tab="gear" class="${_==="gear"?"selected":""}">Melhorias permanentes</button><button data-shop-tab="supplies" class="${_==="supplies"?"selected":""}">Mochila \xB7 ${D.supplies.shield+D.supplies.juice}</button><button data-shop-tab="accessories" class="${_==="accessories"?"selected":""}">Acess\xF3rios \xB7 ${D.accessories.length}/${Object.keys(Qt).length}</button><button data-shop-tab="abilities" class="${_==="abilities"?"selected":""}">Poderes e boosts \xB7 8</button><button data-shop-tab="decor" class="${_==="decor"?"selected":""}">Decora\xE7\xF5es</button></div>${a.inBase()?"":"<p>Volte \xE0 base para comprar.</p>"}<div class="egg-sheet-grid">`,_==="gear"?Pe+=Object.entries(Si).map(([Y,ye])=>{let at=D.upgrades[Y]>=ye.max,bt=a.price(Y);return`<article class="egg-upgrade"><img class="egg-item-icon" src="${Q[Y]}" alt="${ye.name}"><small>N\xCDVEL ${D.upgrades[Y]}/${ye.max}</small><h3>${ye.name}</h3><p>${ye.desc}</p><div class="egg-level-dots" aria-label="${D.upgrades[Y]} de ${ye.max} n\xEDveis">${Array.from({length:ye.max},(Dt,en)=>`<i class="${en<D.upgrades[Y]?"owned":""}"></i>`).join("")}</div><button class="egg-primary" data-buy="${Y}" ${at||D.coins<bt||!a.inBase()?"disabled":""}>${at?"No m\xE1ximo":bt+" integros"}</button></article>`}).join(""):_==="abilities"?Pe+=El(a,Q):_==="supplies"?Pe+=Object.entries(ns).map(([Y,ye])=>`<article class="egg-upgrade"><img class="egg-item-icon" src="${Q[Y]}" alt="${ye.name}"><small>NA MOCHILA: ${D.supplies[Y]}/${ye.max}</small><h3>${ye.name}</h3><p>${ye.desc}</p><button class="egg-primary" data-buy="${Y}" ${D.supplies[Y]>=ye.max||D.coins<ye.price||!a.inBase()?"disabled":""}>${D.supplies[Y]>=ye.max?"Mochila cheia":ye.price.toLocaleString("pt-BR")+" integros"}</button></article>`).join(""):_==="decor"?Pe+=Object.entries(wi).map(([Y,ye])=>`<article class="egg-upgrade"><div class="egg-decor-preview" style="--decor:#${ye.color.toString(16)};--roof:#${ye.roof.toString(16)}">\u2302</div><h3>${ye.name}</h3><p>Piso, cobertura e plantas do curral.</p><button class="egg-primary" data-buy="${Y}" ${!a.inBase()||!D.decorations.includes(Y)&&D.coins<ye.price?"disabled":""}>${D.decoration===Y?"Selecionado":D.decorations.includes(Y)?"Decorar":ye.price+" integros"}</button></article>`).join(""):Pe+=Object.entries(Qt).map(([Y,ye])=>{let at=D.accessories.includes(Y),bt=D.equipped[ye.slot]===Y;return`<article class="egg-upgrade"><img class="egg-item-icon" src="${Q[Y]}" alt="${ye.name}"><small>${bt?"EQUIPADO":at?"NA SUA COLE\xC7\xC3O":ye.price>=25e4?"REL\xCDQUIA":ye.price>=75e3?"M\xCDTICO":ye.price>=2e4?"LEND\xC1RIO":ye.price>=5e3?"\xC9PICO":"COLE\xC7\xC3O ESPECIAL"}</small><h3>${ye.name}</h3><p>${ye.desc} N\xE3o altera a velocidade.</p><button class="egg-primary" ${at?`data-equip="${Y}"`:`data-buy="${Y}"`} ${!at&&(D.coins<ye.price||!a.inBase())?"disabled":""}>${at?bt?"Guardar":"Equipar":ye.price.toLocaleString("pt-BR")+" integros"}</button></article>`}).join(""),Pe+="</div>";else if(y==="abilities")re="Poderes e boosts",Re="ATALHOS Q E B \xB7 MOCHILA",Pe='<p>Escolha um poder e um boost para os dois atalhos no HUD. Cada uso consome uma carga. O tempo passa s\xF3 durante o jogo e fica salvo ao sair. Nas corridas online, os efeitos ficam pausados e n\xE3o podem ser ativados.</p><div class="egg-sheet-grid">'+El(a,Q)+"</div>";else if(y==="tracks")re=`As ${ze.length} pistas`,Re="UMA CORRIDA CONT\xCDNUA",Pe='<p>Os 14 mundos se conectam na mesma pista. Siga em frente para explorar. Cada ovo mostra seu treino recomendado e quantos n\xEDveis faltam. A refer\xEAncia considera seus t\xEAnis e luvas: correr com o ovo 10% mais r\xE1pido que o dono, sem disparar. Desvie dos obst\xE1culos.</p><div class="egg-pet-grid">'+ze.map((Y,ye)=>`<article class="egg-pet-card egg-track-card" style="--track-color:#${Y.color.toString(16)}"><small>PISTA ${ye+1} \xB7 ${D.visited[ye]?"VISITADA":"PARA EXPLORAR"}</small><img src="${Q[ye]}" alt="${Y.creature}"><strong>${Y.name}</strong><p>${Y.creature}</p><small>${qc[ye]} \xB7 ${["Persegui\xE7\xE3o direta","Antecipa a dire\xE7\xE3o","Corrida em zigue-zague"][ye%3]}${ye>=3?" + arrancadas":""}</small><small>Dono: ${Fe($s(ye))} de velocidade</small><div class="egg-track-training ${a.trainingAdvice(ye).ready?"ready":""}"><strong>Treino recomendado: ${a.recommendedTraining(ye)}</strong><span>${a.trainingAdvice(ye).ready?"N\xEDvel alcan\xE7ado":`Faltam ${a.trainingAdvice(ye).remaining} n\xEDveis`}</span></div><b>${a.saleValue(ye).toLocaleString("pt-BR")} integros</b><small>${D.seen[ye]?"\u2713 Criatura descoberta":"Leve o ovo ao curral"}</small></article>`).join("")+"</div>";else if(y==="corral")re="Seu curral",Re=`${D.creatures.length+D.eggs.length}/${a.capacity()} ESPA\xC7OS \xB7 ${D.seen.filter(Boolean).length}/${ze.length} CRIATURAS DESCOBERTAS`,Pe=`<div class="egg-income"><strong>Produ\xE7\xE3o autom\xE1tica</strong><span>${(a.incomeRate()*60).toLocaleString("pt-BR",{maximumFractionDigits:1})} integros / min de jogo ativo</span><small>Os ganhos entram direto no saldo. Total produzido: ${Math.floor(D.incomeEarned).toLocaleString("pt-BR")} integros.</small></div><p>Companheiro: ${fl(a.companion())}</p><p>Os ovos chocam durante o jogo ativo. ${a.inBase()?"Venda criaturas para ganhar integros.":"Volte \xE0 base para vender criaturas."}</p>`,!D.creatures.length&&!D.eggs.length?Pe+='<div class="egg-empty"><strong>Seu primeiro ovo est\xE1 esperando!</strong><p>Siga a pista, pegue um ovo e traga at\xE9 o cercado.</p></div>':Pe+='<div class="egg-pet-grid">'+D.eggs.map(Y=>`<article class="egg-pet-card"><img src="${Q["egg-"+Y.rarity]}" alt="Ovo ${Lt[Y.rarity].name}"><strong>Ovo de ${ze[Y.world].creature}</strong><small>${Lt[Y.rarity].name} \xB7 ${a.saleValue(Y.world,Y.rarity,Y.mutation)} integros</small><small>Choca em ${Math.ceil(Y.remaining)} s de jogo</small><button class="egg-secondary" data-egg-action="resume">Continuar incubando</button></article>`).join("")+D.creatures.map(Y=>`<article class="egg-pet-card"><img src="${Q[Y.world]}" alt="${ze[Y.world].creature}"><strong>${ze[Y.world].creature}</strong><small>${Lt[Y.rarity].name} \xB7 ${oi[Y.mutation].name}</small><small>Valor: ${a.saleValue(Y.world,Y.rarity,Y.mutation)} integros</small><small>${fl(Y)}</small><button class="egg-secondary" data-pet="${Y.uid}" ${a.inBase()?"":"disabled"}>${D.companionId===Y.uid?"Guardar companheiro":"Acompanhar"}</button><button class="egg-primary" data-sell="${Y.id}" ${a.inBase()?"":"disabled"}>Vender por ${a.saleValue(Y.world,Y.rarity,Y.mutation)}</button></article>`).join("")+"</div>";else if(y==="nest"){let Y=a.interaction().world;Y===void 0?(re="Ninho distante",Pe="<p>Aproxime-se de um ninho para escolher.</p>"):(re="Escolha um ovo",Re=ze[Y].name.toUpperCase(),Pe=`<p>Leve um ovo por vez ao curral. Os outros continuam no ninho. Treino recomendado: <strong>${a.recommendedTraining(Y)}</strong>.</p><div class="egg-nest-grid">${a.nestEggs[Y].map(ye=>{let at=Lt[ye.rarity],bt=ye.availableAt<=a.time;return`<article class="egg-pet-card" style="border-top:5px solid #${at.color.toString(16)}"><img src="${Q["egg-"+ye.rarity]}" alt="Ovo ${at.name}"><strong>${at.name} \xB7 ${oi[ye.mutation].name}</strong><small>Valor da criatura \xB7 ${at.mult}\xD7</small><b>${a.saleValue(Y,ye.rarity,ye.mutation)} integros</b><button class="egg-primary" data-steal="${ye.slot}" ${bt?"":"disabled"}>${bt?"Pegar e correr":`Volta em ${Math.ceil(ye.availableAt-a.time)} s de jogo`}</button></article>`}).join("")}</div>`)}else if(y==="missions")re="Miss\xF5es e cole\xE7\xE3o",Re="CONQUISTAS \xB7 INTEGROS",Pe=`<div class="egg-income"><strong>Expedi\xE7\xE3o do dia</strong><span>Entregue 3 ovos: ${Math.min(3,D.daily.delivered)}/3 \xB7 200 integros</span><button class="egg-primary" data-daily ${D.daily.claimed||D.daily.delivered<3?"disabled":""}>${D.daily.claimed?"Recompensa recebida":"Receber"}</button></div><div class="egg-sheet-grid">${dl.map(Y=>`<article class="egg-upgrade"><h3>${Y.name}</h3><progress value="${a.missionProgress(Y)}" max="${Y.target}"></progress><p>${a.missionProgress(Y)}/${Y.target} \xB7 ${Y.reward} integros</p><button class="egg-primary" data-mission="${Y.id}" ${D.claimed.includes(Y.id)||a.missionProgress(Y)<Y.target?"disabled":""}>${D.claimed.includes(Y.id)?"Conclu\xEDda":"Receber"}</button></article>`).join("")}</div><h3>\xC1lbum \xB7 ${D.album.length} combina\xE7\xF5es descobertas</h3><div class="egg-album">${D.album.map(Y=>{let[ye,at,bt]=Y.split(":");return ze[ye]?`<span>${ze[ye].creature} \xB7 ${Lt[at].name} \xB7 ${oi[bt].name}</span>`:""}).join("")||"Traga ovos e descubra novas combina\xE7\xF5es!"}</div>`;else if(y==="friends")re="Aventura com amigos",Re="SALAS \xB7 CORRIDA \xB7 VISITAS \xB7 TROCAS",Pe='<div id="eggOnlineContent"></div>';else if(y==="settings"){re="Menu da aventura",Re="PEGUE O OVO";let Y=a.trainingAdvice(a.carrying??a.zone());Pe=`<nav class="egg-menu-grid" aria-label="Atalhos do jogo">${[["corral","home","Curral",`${D.creatures.length+D.eggs.length}/${a.capacity()} espa\xE7os`],["missions","flag","Miss\xF5es","Conquistas e cole\xE7\xE3o"],["friends","friends","Amigos","Corridas, visitas e trocas"],["shop","shop","Loja","76 itens para comprar"],["abilities","bolt","Poderes","Escolher atalhos Q e B"],["tracks","compass","Pistas",`${ze.length} mundos`],["help","help","Como jogar","Controles e dicas"]].map(([at,bt,Dt,en])=>`<button data-egg-action="${at}">${vd[bt]}<strong>${Dt}</strong><small>${en}</small></button>`).join("")}</nav><div class="egg-menu-detail"><strong>${a.inBase()?"Seu curral":ze[a.zone()].name}</strong><p>${a.carrying!==null?`Ovo ${Lt[a.carriedEgg.rarity].name} \xB7 ${a.saleValue(a.carrying,a.carriedEgg.rarity,a.carriedEgg.mutation)} integros. Leve ao curral!`:a.mode==="train"?"A esteira aumenta sua velocidade permanentemente.":"Aproxime-se de um ninho, escolha um ovo e leve ao curral."}</p><p>Treino recomendado: <b>${Y.level}</b> \xB7 ${Y.ready?"N\xEDvel alcan\xE7ado":`faltam ${Y.remaining} n\xEDveis`}.</p></div><div class="egg-settings-stats"><span><b>${Fe(a.speed())}</b> velocidade</span><span><b>${D.training}/${ri}</b> treino</span><span><b>${D.delivered}</b> ovos entregues</span><span><b>${D.coins.toLocaleString("pt-BR")}</b> integros</span></div><div class="egg-settings-buttons"><button class="egg-secondary" data-control="behind">Olhar para tr\xE1s</button><button class="egg-secondary" data-control="center">Centrar c\xE2mera</button><button class="egg-secondary" data-control="fullscreen">Tela cheia</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div><p class="egg-muted">Mova pelo direcional ou WASD/setas. Arraste o cen\xE1rio para olhar. Espa\xE7o: pular \xB7 Shift: disparar \xB7 E: a\xE7\xE3o \xB7 C: atr\xE1s \xB7 R: centrar \xB7 F: empurrar na corrida online \xB7 Q: poder \xB7 B: boost \xB7 Esc: pausa.</p><button class="egg-primary" data-egg-action="resume">Voltar ao jogo</button>`}else y==="help"?(re="Como jogar",Pe=De()):y==="reset"?(re="Apagar este progresso?",Pe='<p>Isso zera as integros, criaturas, ovos, treino e melhorias do Pegue o Ovo.</p><div class="egg-modal-actions"><button class="egg-secondary" data-egg-action="help">Manter meu progresso</button><button class="egg-primary" data-egg-action="resetConfirm">Apagar e recome\xE7ar</button></div>'):(re="Uma pausa na aventura",Pe=`<p>Seu jogo est\xE1 pausado. ${D.seen.filter(Boolean).length} de ${ze.length} criaturas descobertas \xB7 ${D.delivered} ovos entregues.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Continuar</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div>`);Le("eggSheetTitle").textContent=re,Le("eggSheetTag").textContent=Re,Le("eggSheetBody").innerHTML=Pe,Je(),Le("eggSheetBody").querySelectorAll("[data-shop-tab]").forEach(Y=>Y.onclick=()=>{_=Y.dataset.shopTab,Se()}),Le("eggSheetBody").querySelectorAll("[data-steal]").forEach(Y=>Y.onclick=()=>{a.steal(+Y.dataset.steal)&&(xe(),se(),q())}),Le("eggSheetBody").querySelectorAll("[data-equip]").forEach(Y=>Y.onclick=()=>{a.equip(Y.dataset.equip)&&(se(),Se())}),Le("eggSheetBody").querySelectorAll("[data-control]").forEach(Y=>Y.onclick=()=>{let ye=Y.dataset.control;xe(),ye==="behind"&&x(),ye==="center"&&w(),ye==="fullscreen"&&Le("eggFullscreen").click()}),Le("eggSheetBody").querySelectorAll("[data-buy]").forEach(Y=>Y.onclick=()=>{a.buy(Y.dataset.buy)&&(se(),Se(),q())}),Le("eggSheetBody").querySelectorAll("[data-sell]").forEach(Y=>Y.onclick=()=>{a.sell(+Y.dataset.sell)&&(se(),Se(),q())}),Le("eggSheetBody").querySelectorAll("[data-egg-action]").forEach(Y=>Y.onclick=()=>{let ye=Y.dataset.eggAction;ye==="resume"&&xe(),["help","shop","corral","tracks","missions","friends","abilities"].includes(ye)&&H(ye),ye==="exit"&&(Ne(),i()),ye==="resetAsk"&&H("reset"),ye==="resetConfirm"&&(a=new Ys($c()),A=0,w(),N=0,b=.52,Qe=0,K="force",j="",J=-1,B(),P(),xe(),R("Nova aventura! Siga a pista para encontrar o primeiro ovo."))})}function Je(){let D=Le("eggSheetBody"),re=(Re,Pe)=>D.querySelectorAll(Re).forEach(Y=>Y.onclick=()=>{Pe(Y),se(),Se(),q()});D.querySelectorAll("[data-use-ability]").forEach(Re=>Re.onclick=()=>ot(Re.dataset.useAbility)),re("[data-select-ability]",Re=>a.selectAbility(Re.dataset.selectAbility)),re("[data-pet]",Re=>a.equipPet(Re.dataset.pet)),re("[data-mission]",Re=>a.claimMission(Re.dataset.mission)),re("[data-daily]",()=>a.claimDaily()),y==="friends"&&(window.BoxEggCloud?window.BoxEggCloud.render(Le("eggOnlineContent")):Le("eggOnlineContent").innerHTML='<p>O progresso fica neste navegador. As salas, visitas, trocas e salvamento por perfil est\xE3o no portal da fam\xEDlia.</p><a class="egg-primary" href="https://www.institutointegro.com.br/integro-box/" target="_blank" rel="noopener">Abrir Integro Box no portal</a>')}function H(D){F(),y=D,Le("eggSheet").hidden=!1,Se(),Le("eggCloseSheet").focus(),P()}function xe(){y=null,Le("eggSheet").hidden=!0,F(),m=performance.now(),Me.focus()}function Te(){pe.hidden=!1,u=!0,h?($(),m=performance.now()):ee(),q(),Me.focus(),window.scrollTo(0,0)}function Ne(){L(),P(),u=!1,pe.hidden=!0,y=null,Le("eggSheet").hidden=!0,F()}Le("eggRoute").onclick=()=>H("tracks"),Le("eggInteract").onclick=Ae,Le("eggJump").onclick=()=>{y||a.jump(),Me.focus()},Le("eggCamera").onclick=()=>{x(),Me.focus()},Le("eggSettings").onclick=()=>H("settings"),Le("eggPause").onclick=()=>H("pause"),Le("eggJuice").onclick=()=>{!y&&a.useJuice()&&(se(),q(),Me.focus())},Le("eggCloseSheet").onclick=xe,Le("eggReload").onclick=()=>location.reload(),Le("eggFullscreen").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await pe.requestFullscreen();try{await screen.orientation?.lock("landscape")}catch{}}}catch{R("Gire o celular para o modo paisagem para ampliar o jogo.")}};let ve=Le("eggJoystick");function ue(D){let re=ve.getBoundingClientRect(),Re=re.width*.32,Pe=D.clientX-re.left-re.width/2,Y=D.clientY-re.top-re.height/2,ye=Math.hypot(Pe,Y),at=ye>Re?Re/ye:1;me={x:Pe*at/Re,z:Y*at/Re},Le("eggStick").style.transform=`translate(${Pe*at}px,${Y*at}px)`}ve.addEventListener("pointerdown",D=>{y||(D.preventDefault(),be=D.pointerId,ve.setPointerCapture(D.pointerId),ue(D))}),ve.addEventListener("pointermove",D=>{D.pointerId===be&&ue(D)});let ke=D=>{D.pointerId===be&&(be=null,me={x:0,z:0},Le("eggStick").style.transform="translate(0px,0px)")};for(let D of["pointerup","pointercancel","lostpointercapture"])ve.addEventListener(D,ke);let Xe=Le("eggSprint");Xe.addEventListener("pointerdown",D=>{y||(D.preventDefault(),Ee=D.pointerId,Xe.setPointerCapture(D.pointerId),Ve=!0,Xe.classList.add("held"))});let dt=D=>{D.pointerId===Ee&&(Ve=!1,Ee=null,Xe.classList.remove("held"))};for(let D of["pointerup","pointercancel","lostpointercapture"])Xe.addEventListener(D,dt);return document.addEventListener("keydown",D=>{if(!u||D.target?.closest("input,select,textarea,[contenteditable=true],#boxOnline"))return;let re=D.key.toLowerCase();if(re==="escape"){D.preventDefault(),y?xe():H("pause");return}if(y){if(re==="tab"){let Re=[...Le("eggSheet").querySelectorAll("button:not([disabled])")];D.shiftKey&&document.activeElement===Re[0]?(D.preventDefault(),Re.at(-1)?.focus()):!D.shiftKey&&document.activeElement===Re.at(-1)&&(D.preventDefault(),Re[0]?.focus())}return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","c","r","f","q","b"].includes(re)&&(D.preventDefault(),He.add(re),D.repeat||(re===" "&&a.jump(),re==="e"&&Ae(),re==="c"&&x(),re==="r"&&w(),re==="q"&&ot(a.save.abilitySlots.power),re==="b"&&ot(a.save.abilitySlots.boost),re==="f"&&window.BoxEggPush?.push()))}),document.addEventListener("keyup",D=>He.delete(D.key.toLowerCase())),window.addEventListener("blur",F),document.addEventListener("visibilitychange",()=>{document.hidden&&u&&(P(),H("pause"))}),window.addEventListener("pagehide",P),window.BoxEggRuntime={save:()=>(a.captureNests(),JSON.parse(JSON.stringify(a.save))),apply:D=>{L(),a=new Ys(D),r=null,K="",B(),q();try{t.setItem(Kc,JSON.stringify(a.save))}catch{}y&&Se()},active:()=>u,playing:()=>u&&!y&&!document.hidden,frozen:()=>!!window.BoxEggCloud?.frozen,push:D=>!u||y||document.hidden||window.BoxEggCloud?.frozen?!1:a.push(D),pushGesture:()=>{et=performance.now()+260},pushEffect:()=>{g?.burst(new O(a.player.x,a.player.y+1,a.player.z),16768394)},inBase:()=>a.inBase()&&a.carrying===null,visit:D=>{L(),r=D,a.player.x=0,a.player.z=15,K="",B(),xe(),R("Visitando o curral do colega. Toque em Voltar para sair.")},message:R,openFriends:()=>H("friends"),pause:()=>H("pause"),raceMode:D=>{a.raceMode=D,D||a.clearPush()},raceStart:()=>{a.clearPush(),r=null,A=0,N=0,Qe=0,w(),a.carriedEgg&&(a.nestEggs[a.carrying][a.carriedEgg.slot].availableAt=a.time+5,a.guardians[a.carrying].state="return"),a.mode="run",a.carrying=null,a.carriedEgg=null,a.player.x=0,a.player.z=15,a.player.y=0,a.player.vy=0,F(),xe()},stop:Ne},window.IntegroOvo={getState:()=>({...a.snapshot(),active:u,paused:!!y,sheet:y,thumbnailCount:Object.keys(Q).length,visibleNestEggs:g?.nests.map(D=>D.eggs.filter(re=>re.visible).length),equippedModels:g?.player.wear.children.length,plaques:g?.nests.map(D=>({...D.plaque.sprite.userData.advice})),cameraYaw:C,cameraActualYaw:N,cameraForward:f?f.getWorldDirection(new O).toArray():null,cameraPitch:S,movementYaw:A,webgl:!!h}),getScreenPoints:()=>f?[{name:"curral",...Cn},{name:"esteira",...Vn},...kn.map((D,re)=>({name:"ninho"+re,...D}))].map(D=>{let re=new O(D.x,1,D.z).project(f),Re=Me.getBoundingClientRect();return{name:D.name,x:Re.left+(re.x+1)*Re.width/2,y:Re.top+(1-re.y)*Re.height/2}}):[]},{show:Te,hide:Ne,help:()=>H("help"),get active(){return u}}}window.BoxEgg={mountEggGame:_d,worldNames:ze.map(i=>i.name),petName:i=>`${ze[i.world]?.creature||"Criatura"} \xB7 ${Lt[i.rarity]?.name||"Comum"} \xB7 ${oi[i.mutation]?.name||"Natural"}`};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
