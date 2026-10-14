(()=>{var tr={astronautHelmet:{name:"Capacete espacial",slot:"head",price:6500,desc:"C\xFApula branca, visor azul e antena."},pirateHat:{name:"Chap\xE9u de capit\xE3o",slot:"head",price:2800,desc:"Tric\xF3rnio com emblema dourado e pena."},wizardHat:{name:"Chap\xE9u de mago",slot:"head",price:9500,desc:"Cone estrelado com uma lua na ponta."},ninjaBand:{name:"Faixa do vento",slot:"head",price:2200,desc:"Faixa vermelha com duas fitas longas."},sharkHood:{name:"Capuz tubar\xE3o",slot:"head",price:14e3,desc:"Barbatana e dentinhos de fantasia."},mushroomCap:{name:"Chap\xE9u cogumelo",slot:"head",price:4800,desc:"Um cogumelo vermelho com pintinhas claras."},flowerCrown:{name:"Coroa do jardim",slot:"head",price:12e3,desc:"Flores, folhas e p\xE9talas coloridas."},antlers:{name:"Galhadas da floresta",slot:"head",price:28e3,desc:"Galhos dourados com folhas de jade."},clockworkCrown:{name:"Coroa do tempo",slot:"head",price:3e5,desc:"Um rel\xF3gio rodeado de engrenagens reais em 3D."},samuraiHelm:{name:"Elmo do drag\xE3o",slot:"head",price:85e3,desc:"Placas rubras e um grande crescente dourado."},monocle:{name:"Mon\xF3culo elegante",slot:"face",price:3500,desc:"Lente redonda com corrente dourada."},heartGlasses:{name:"\xD3culos de cora\xE7\xE3o",slot:"face",price:6e3,desc:"Duas lentes cor-de-rosa em formato de cora\xE7\xE3o."},snowGoggles:{name:"\xD3culos de nevasca",slot:"face",price:18e3,desc:"Lentes espelhadas, prote\xE7\xE3o branca e flocos."},foxMask:{name:"M\xE1scara de raposa",slot:"face",price:32e3,desc:"Orelhas pontudas e focinho de porcelana."},dragonMask:{name:"M\xE1scara de drag\xE3o",slot:"face",price:68e3,desc:"Chifres verdes e focinho com detalhes dourados."},owlMask:{name:"M\xE1scara da coruja",slot:"face",price:55e3,desc:"Dois grandes aros e um pequeno bico."},rainbowVisor:{name:"Visor arco-\xEDris",slot:"face",price:42e3,desc:"Sete faixas coloridas em uma moldura azul."},divingMask:{name:"M\xE1scara de mergulho",slot:"face",price:11e3,desc:"Lentes duplas e um snorkel amarelo."},timeMask:{name:"M\xE1scara dos segundos",slot:"face",price:25e4,desc:"Lente-rel\xF3gio, ponteiros e engrenagem lateral."},galaxyMask:{name:"M\xE1scara gal\xE1ctica",slot:"face",price:38e4,desc:"Constela\xE7\xF5es e planetas em um visor violeta."},snailPack:{name:"Mochila caracol",slot:"back",price:8e3,desc:"Casco em espiral com duas antenas fofas."},turtleShell:{name:"Casco de aventureiro",slot:"back",price:16e3,desc:"Placas verdes e contorno de areia."},guitar:{name:"Viol\xE3o viajante",slot:"back",price:24e3,desc:"Cordas, bra\xE7o e caixa de madeira."},surfboard:{name:"Prancha de ver\xE3o",slot:"back",price:36e3,desc:"Prancha turquesa com faixa laranja e quilha."},balloonPack:{name:"Bal\xF5es de festa",slot:"back",price:48e3,desc:"Cinco bal\xF5es presos \xE0 mochila. Sem voo."},butterflyWings:{name:"Asas do jardim",slot:"back",price:72e3,desc:"Quatro asas arredondadas com pintas douradas."},mechanicalWings:{name:"Asas mec\xE2nicas",slot:"back",price:11e4,desc:"Placas articuladas, engrenagens e parafusos."},dragonWings:{name:"Asas de drag\xE3o",slot:"back",price:18e4,desc:"Membranas verdes e hastes douradas."},hourglassPack:{name:"Ampulheta eterna",slot:"back",price:35e4,desc:"Duas c\xE2maras de cristal e areia luminosa."},galaxyPortal:{name:"Portal das gal\xE1xias",slot:"back",price:5e5,desc:"An\xE9is orbitais, estrelas e uma nebulosa central."}},ft={bubble:{name:"Bolha protetora",kind:"power",price:450,max:10,duration:8,color:8514303,icon:"shield",desc:"Protege das capturas e dos perigos da pista durante 8 segundos."},frost:{name:"Pulso congelante",kind:"power",price:750,max:10,duration:6,color:11390975,icon:"snow",desc:"Reduz pela metade a velocidade do guardi\xE3o por 6 segundos."},doubleJump:{name:"Salto duplo",kind:"power",price:600,max:10,duration:25,color:14986751,icon:"jump",desc:"Permite um segundo pulo no ar durante 25 segundos."},endurance:{name:"F\xF4lego infinito",kind:"power",price:900,max:10,duration:20,color:9105861,icon:"wind",desc:"Mant\xE9m o f\xF4lego cheio enquanto voc\xEA dispara, por 20 segundos."},rush:{name:"Boost de velocidade",kind:"boost",price:1200,max:10,duration:20,color:16758131,icon:"speed",desc:"Aumenta sua velocidade em 25% por 20 segundos."},trainingBoost:{name:"Boost de treino",kind:"boost",price:2200,max:10,duration:60,color:16769419,icon:"dumbbell",desc:"A esteira rende o dobro de treino por 60 segundos. Ative sobre a esteira."},hatchBoost:{name:"Boost de incuba\xE7\xE3o",kind:"boost",price:1800,max:10,duration:60,color:16755915,icon:"egg",desc:"Os ovos do curral chocam duas vezes mais r\xE1pido por 60 segundos."},incomeBoost:{name:"Boost do curral",kind:"boost",price:4500,max:10,duration:90,color:12251787,icon:"coin",desc:"As criaturas produzem o dobro de integros durante 90 segundos de jogo."}};var Ec={shield:"M12 2 21 5v6c0 6-9 11-9 11S3 17 3 11V5Z M8 12l3 3 5-6",snow:"M12 2v20M3 7l18 10M3 17 21 7M9 4l3 3 3-3M9 20l3-3 3 3",jump:"M7 21V5m-4 4 4-4 4 4M17 17V2m-4 4 4-4 4 4",wind:"M2 7h15c5 0 5-5 1-5M2 12h18M2 17h12c5 0 5 5 1 5",speed:"M3 18a9 9 0 1 1 18 0M12 14l5-6M7 21h10",dumbbell:"M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8",egg:"M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z M7 13l3-2 3 3 4-2",coin:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v10m-3-9h5m-5 8h5"},yh=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ec[ft[i]?.icon]||Ec.shield}"/></svg>`;function Tc({stage:i,getGame:e,blocked:t,use:n,open:s}){let r=document.createElement("div");r.className="egg-ability-dock",r.setAttribute("role","group"),r.setAttribute("aria-label","Poder e boost equipados"),i.append(r);let o={};for(let l of["power","boost"]){let a=document.createElement("button");a.type="button",a.className="egg-ability-button",a.onclick=()=>{let h=e(),u=h.save.abilitySlots[l];h.canUseAbility(u)?n(u):h.save.activeAbilities[l]||s()},o[l]=a,r.append(a)}function c(){let l=e();r.hidden=!!l.raceMode;for(let a of["power","boost"]){let h=l.save.abilitySlots[a],u=ft[h],p=l.save.activeAbilities[a],m=o[a],_=l.save.abilityStock[h],y=p?Math.ceil(p.remaining):0,f=[h,_,y].join(":");m.dataset.signature!==f&&(m.dataset.signature=f,m.innerHTML=yh(h)+`<span>${p?y+"s":"\xD7"+_}</span><small>${a==="power"?"Q":"B"}</small>`,m.title=u.name+(p?" \xB7 "+y+" s":_?" \xB7 "+_+" cargas":" \xB7 Abrir mochila"),m.setAttribute("aria-label",m.title),m.style.setProperty("--ability-color","#"+u.color.toString(16))),m.disabled=t()||!!p||_>0&&!l.canUseAbility(h),m.classList.toggle("active",!!p),m.style.setProperty("--ability-progress",p?String(p.remaining/u.duration*100)+"%":"100%")}}return{update:c,dock:r}}function io(i,e){let t=i.save;return Object.entries(ft).map(([n,s])=>{let r=t.abilityStock[n],o=t.abilitySlots[s.kind]===n;return`<article class="egg-upgrade egg-ability-card"><img class="egg-item-icon" src="${e[n]||""}" alt="${s.name}"><small>${s.kind==="power"?"PODER":"BOOST"} \xB7 ${s.duration} s \xB7 ${r}/${s.max} cargas</small><h3>${s.name}</h3><p>${s.desc}</p><button class="egg-primary" data-buy="${n}" ${!i.inBase()||r>=s.max||t.coins<s.price?"disabled":""}>${r>=s.max?"Mochila cheia":s.price.toLocaleString("pt-BR")+" integros"}</button><button class="egg-secondary" data-select-ability="${n}" ${!r||t.activeAbilities[s.kind]?"disabled":""}>${o?"No atalho "+(s.kind==="power"?"Q":"B"):"Colocar no HUD"}</button><button class="egg-secondary" data-use-ability="${n}" ${i.canUseAbility(n)?"":"disabled"}>Usar agora</button></article>`}).join("")}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var $c=0,Oo=1,Yc=2;var Bo=1,Jr=2,yn=3,Un=0,kt=1,Mn=2,Bn=0,ui=1,zo=2,ko=3,Vo=4,Zc=5,jn=100,Jc=101,jc=102,Kc=103,Qc=104,el=200,tl=201,nl=202,il=203,Er=204,Tr=205,sl=206,rl=207,al=208,ol=209,cl=210,ll=211,hl=212,ul=213,dl=214,jr=0,Kr=1,Qr=2,di=3,ea=4,ta=5,na=6,ia=7,Ho=0,fl=1,pl=2,zn=0,ml=1,gl=2,xl=3,Hs=4,_l=5,vl=6,yl=7;var Go=300,xi=301,_i=302,sa=303,ra=304,Gs=306,wr=1e3,Zn=1001,Ar=1002,tn=1003,Ml=1004;var Ws=1005;var ln=1006,aa=1007;var ti=1008;var dn=1009,Wo=1010,Xo=1011,is=1012,oa=1013,ni=1014,bn=1015,ss=1016,ca=1017,la=1018,rs=1020,qo=35902,$o=35899,Yo=1021,Zo=1022,nn=1023,Gi=1026,as=1027,Jo=1028,ha=1029,jo=1030,ua=1031;var da=1033,Xs=33776,qs=33777,$s=33778,Ys=33779,fa=35840,pa=35841,ma=35842,ga=35843,xa=36196,_a=37492,va=37496,ya=37808,Ma=37809,ba=37810,Sa=37811,Ea=37812,Ta=37813,wa=37814,Aa=37815,Ca=37816,Ra=37817,Ia=37818,Pa=37819,La=37820,Da=37821,Ua=36492,Na=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286;var bs=2300,Cr=2301,Sr=2302,Io=2400,Po=2401,Lo=2402;var bl=3200,Sl=3201;var Ko=0,El=1,kn="",Et="srgb",fi="srgb-linear",Ss="linear",at="srgb";var hi=7680;var Do=519,Tl=512,wl=513,Al=514,Qo=515,Cl=516,Rl=517,Il=518,Pl=519,Rr=35044;var ec="300 es",cn=2e3,Es=2001;var Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var so=Math.PI/180,Ir=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Mh(i,e){return(i%e+e)%e}function ro(i,e,t){return(1-t)*i+t*e}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,c){let l=n[s+0],a=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3];if(c===0){e[t+0]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u;return}if(c===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(u!==y||l!==p||a!==m||h!==_){let f=1-c,d=l*p+a*m+h*_+u*y,T=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){let U=Math.sqrt(w),R=Math.atan2(U,d*T);f=Math.sin(f*R)/U,c=Math.sin(c*R)/U}let S=c*T;if(l=l*f+p*S,a=a*f+m*S,h=h*f+_*S,u=u*f+y*S,f===1-c){let U=1/Math.sqrt(l*l+a*a+h*h+u*u);l*=U,a*=U,h*=U,u*=U}}e[t]=l,e[t+1]=a,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let c=n[s],l=n[s+1],a=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],_=r[o+3];return e[t]=c*_+h*u+l*m-a*p,e[t+1]=l*_+h*p+a*u-c*m,e[t+2]=a*_+h*m+c*p-l*u,e[t+3]=h*_-c*u-l*p-a*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,c=Math.cos,l=Math.sin,a=c(n/2),h=c(s/2),u=c(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*h*u+a*m*_,this._y=a*m*u-p*h*_,this._z=a*h*_+p*m*u,this._w=a*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+a*m*_,this._y=a*m*u-p*h*_,this._z=a*h*_-p*m*u,this._w=a*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-a*m*_,this._y=a*m*u+p*h*_,this._z=a*h*_+p*m*u,this._w=a*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-a*m*_,this._y=a*m*u+p*h*_,this._z=a*h*_-p*m*u,this._w=a*h*u+p*m*_;break;case"YZX":this._x=p*h*u+a*m*_,this._y=a*m*u+p*h*_,this._z=a*h*_-p*m*u,this._w=a*h*u-p*m*_;break;case"XZY":this._x=p*h*u-a*m*_,this._y=a*m*u-p*h*_,this._z=a*h*_+p*m*u,this._w=a*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],c=t[5],l=t[9],a=t[2],h=t[6],u=t[10],p=n+c+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-a)*m,this._z=(o-s)*m}else if(n>c&&n>u){let m=2*Math.sqrt(1+n-c-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+a)/m}else if(c>u){let m=2*Math.sqrt(1+c-n-u);this._w=(r-a)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-c);this._w=(o-s)/m,this._x=(r+a)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,c=t._x,l=t._y,a=t._z,h=t._w;return this._x=n*h+o*c+s*a-r*l,this._y=s*h+o*l+r*c-n*a,this._z=r*h+o*a+n*l-s*c,this._w=o*h-n*c-s*l-r*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,c=o*e._w+n*e._x+s*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-c*c;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let a=Math.sqrt(l),h=Math.atan2(a,c),u=Math.sin((1-t)*h)/a,p=Math.sin(t*h)/a;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,c=e.z,l=e.w,a=2*(o*s-c*n),h=2*(c*t-r*s),u=2*(r*n-o*t);return this.x=t+l*a+o*u-c*h,this.y=n+l*h+c*a-r*u,this.z=s+l*u+r*h-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,c=t.y,l=t.z;return this.x=s*l-r*c,this.y=r*o-n*l,this.z=n*c-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new H,wc=new Fn,Ye=class i{constructor(e,t,n,s,r,o,c,l,a){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a)}set(e,t,n,s,r,o,c,l,a){let h=this.elements;return h[0]=e,h[1]=s,h[2]=c,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[3],l=n[6],a=n[1],h=n[4],u=n[7],p=n[2],m=n[5],_=n[8],y=s[0],f=s[3],d=s[6],T=s[1],w=s[4],S=s[7],U=s[2],R=s[5],F=s[8];return r[0]=o*y+c*T+l*U,r[3]=o*f+c*w+l*R,r[6]=o*d+c*S+l*F,r[1]=a*y+h*T+u*U,r[4]=a*f+h*w+u*R,r[7]=a*d+h*S+u*F,r[2]=p*y+m*T+_*U,r[5]=p*f+m*w+_*R,r[8]=p*d+m*S+_*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8];return t*o*h-t*c*a-n*r*h+n*c*l+s*r*a-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=h*o-c*a,p=c*l-h*r,m=a*r-o*l,_=t*u+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(s*a-h*n)*y,e[2]=(c*n-s*o)*y,e[3]=p*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-c*t)*y,e[6]=m*y,e[7]=(n*l-a*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,c){let l=Math.cos(r),a=Math.sin(r);return this.set(n*l,n*a,-n*(l*o+a*c)+o+e,-s*a,s*l,-s*(-a*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Ye;function tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ll(){let i=Ts("canvas");return i.style.display="block",i}var Ac={};function Wi(i){i in Ac||(Ac[i]=!0,console.warn(i))}function Dl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bh(){let i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:Cc,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Cc,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}var it=bh();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Ts("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sh=0,Xi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(co(s[o].image)):r.push(co(s[o]))}else r=co(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eh=0,lo=new H,Gt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=ln,o=ti,c=nn,l=dn,a=i.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Jn(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=a,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Go;Gt.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,a=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],y=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+y)<.1&&Math.abs(_+f)<.1&&Math.abs(a+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(a+1)/2,S=(m+1)/2,U=(d+1)/2,R=(h+p)/4,F=(u+y)/4,V=(_+f)/4;return w>S&&w>U?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=F/n):S>U?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=V/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=F/r,s=V/r),this.set(n,s,r,t),this}let T=Math.sqrt((f-_)*(f-_)+(u-y)*(u-y)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(f-_)/T,this.y=(u-y)/T,this.z=(p-h)/T,this.w=Math.acos((a+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lr=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Gt(s);this.textures=[];let o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Lr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ws=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),ir.subVectors(this.max,ms),Ai.subVectors(e.a,ms),Ci.subVectors(e.b,ms),Ri.subVectors(e.c,ms),Gn.subVectors(Ci,Ai),Wn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!ho(t,Ai,Ci,Ri,ir)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,Ai,Ci,Ri,ir))?!1:(sr.crossVectors(Gn,Wn),t=[sr.x,sr.y,sr.z],ho(t,Ai,Ci,Ri,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,nr=new Kn,Ai=new H,Ci=new H,Ri=new H,Gn=new H,Wn=new H,ai=new H,ms=new H,ir=new H,sr=new H,oi=new H;function ho(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);let c=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),a=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,a,h),Math.min(l,a,h))>c)return!1}return!0}var Th=new Kn,gs=new H,uo=new H,qi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(uo)),this.expandByPoint(gs.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},An=new H,fo=new H,rr=new H,Xn=new H,po=new H,ar=new H,mo=new H,Ur=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fo.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(fo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(rr),c=Xn.dot(this.direction),l=-Xn.dot(rr),a=Xn.lengthSq(),h=Math.abs(1-o*o),u,p,m,_;if(h>0)if(u=o*l-c,p=o*c-l,_=r*h,u>=0)if(p>=-_)if(p<=_){let y=1/h;u*=y,p*=y,m=u*(u+o*p+2*c)+p*(o*u+p+2*l)+a}else p=r,u=Math.max(0,-(o*p+c)),m=-u*u+p*(p+2*l)+a;else p=-r,u=Math.max(0,-(o*p+c)),m=-u*u+p*(p+2*l)+a;else p<=-_?(u=Math.max(0,-(-o*r+c)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+a):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+a):(u=Math.max(0,-(o*r+c)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+a);else p=o>0?-r:r,u=Math.max(0,-(o*p+c)),m=-u*u+p*(p+2*l)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fo).addScaledVector(rr,p),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,c,l,a=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return a>=0?(n=(e.min.x-p.x)*a,s=(e.max.x-p.x)*a):(n=(e.max.x-p.x)*a,s=(e.min.x-p.x)*a),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(c=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(c=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||c>s)||((c>n||n!==n)&&(n=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){po.subVectors(t,e),ar.subVectors(n,e),mo.crossVectors(po,ar);let o=this.direction.dot(mo),c;if(o>0){if(s)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Xn.subVectors(this.origin,e);let l=c*this.direction.dot(ar.crossVectors(Xn,ar));if(l<0)return null;let a=c*this.direction.dot(po.cross(Xn));if(a<0||l+a>o)return null;let h=-c*Xn.dot(mo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,o,c,l,a,h,u,p,m,_,y,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,c,l,a,h,u,p,m,_,y,f)}set(e,t,n,s,r,o,c,l,a,h,u,p,m,_,y,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=c,d[13]=l,d[2]=a,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=_,d[11]=y,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),o=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(s),a=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,_=c*h,y=c*u;t[0]=l*h,t[4]=-l*u,t[8]=a,t[1]=m+_*a,t[5]=p-y*a,t[9]=-c*l,t[2]=y-p*a,t[6]=_+m*a,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,_=a*h,y=a*u;t[0]=p+y*c,t[4]=_*c-m,t[8]=o*a,t[1]=o*u,t[5]=o*h,t[9]=-c,t[2]=m*c-_,t[6]=y+p*c,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,_=a*h,y=a*u;t[0]=p-y*c,t[4]=-o*u,t[8]=_+m*c,t[1]=m+_*c,t[5]=o*h,t[9]=y-p*c,t[2]=-o*a,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*u,_=c*h,y=c*u;t[0]=l*h,t[4]=_*a-m,t[8]=p*a+y,t[1]=l*u,t[5]=y*a+p,t[9]=m*a-_,t[2]=-a,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*a,_=c*l,y=c*a;t[0]=l*h,t[4]=y-p*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-c*h,t[2]=-a*h,t[6]=m*u+_,t[10]=p-y*u}else if(e.order==="XZY"){let p=o*l,m=o*a,_=c*l,y=c*a;t[0]=l*h,t[4]=-u,t[8]=a*h,t[1]=p*u+y,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=c*h,t[10]=y*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Ah)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),qn.crossVectors(n,Yt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),qn.crossVectors(n,Yt)),qn.normalize(),or.crossVectors(Yt,qn),s[0]=qn.x,s[4]=or.x,s[8]=Yt.x,s[1]=qn.y,s[5]=or.y,s[9]=Yt.y,s[2]=qn.z,s[6]=or.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],c=n[4],l=n[8],a=n[12],h=n[1],u=n[5],p=n[9],m=n[13],_=n[2],y=n[6],f=n[10],d=n[14],T=n[3],w=n[7],S=n[11],U=n[15],R=s[0],F=s[4],V=s[8],E=s[12],b=s[1],B=s[5],Y=s[9],te=s[13],ee=s[2],ie=s[6],se=s[10],pe=s[14],K=s[3],xe=s[7],ve=s[11],Le=s[15];return r[0]=o*R+c*b+l*ee+a*K,r[4]=o*F+c*B+l*ie+a*xe,r[8]=o*V+c*Y+l*se+a*ve,r[12]=o*E+c*te+l*pe+a*Le,r[1]=h*R+u*b+p*ee+m*K,r[5]=h*F+u*B+p*ie+m*xe,r[9]=h*V+u*Y+p*se+m*ve,r[13]=h*E+u*te+p*pe+m*Le,r[2]=_*R+y*b+f*ee+d*K,r[6]=_*F+y*B+f*ie+d*xe,r[10]=_*V+y*Y+f*se+d*ve,r[14]=_*E+y*te+f*pe+d*Le,r[3]=T*R+w*b+S*ee+U*K,r[7]=T*F+w*B+S*ie+U*xe,r[11]=T*V+w*Y+S*se+U*ve,r[15]=T*E+w*te+S*pe+U*Le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],c=e[5],l=e[9],a=e[13],h=e[2],u=e[6],p=e[10],m=e[14],_=e[3],y=e[7],f=e[11],d=e[15];return _*(+r*l*u-s*a*u-r*c*p+n*a*p+s*c*m-n*l*m)+y*(+t*l*m-t*a*p+r*o*p-s*o*m+s*a*h-r*l*h)+f*(+t*a*u-t*c*m-r*o*u+n*o*m+r*c*h-n*a*h)+d*(-s*c*h-t*l*u+t*c*p+s*o*u-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],c=e[5],l=e[6],a=e[7],h=e[8],u=e[9],p=e[10],m=e[11],_=e[12],y=e[13],f=e[14],d=e[15],T=u*f*a-y*p*a+y*l*m-c*f*m-u*l*d+c*p*d,w=_*p*a-h*f*a-_*l*m+o*f*m+h*l*d-o*p*d,S=h*y*a-_*u*a+_*c*m-o*y*m-h*c*d+o*u*d,U=_*u*l-h*y*l-_*c*p+o*y*p+h*c*f-o*u*f,R=t*T+n*w+s*S+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return e[0]=T*F,e[1]=(y*p*r-u*f*r-y*s*m+n*f*m+u*s*d-n*p*d)*F,e[2]=(c*f*r-y*l*r+y*s*a-n*f*a-c*s*d+n*l*d)*F,e[3]=(u*l*r-c*p*r-u*s*a+n*p*a+c*s*m-n*l*m)*F,e[4]=w*F,e[5]=(h*f*r-_*p*r+_*s*m-t*f*m-h*s*d+t*p*d)*F,e[6]=(_*l*r-o*f*r-_*s*a+t*f*a+o*s*d-t*l*d)*F,e[7]=(o*p*r-h*l*r+h*s*a-t*p*a-o*s*m+t*l*m)*F,e[8]=S*F,e[9]=(_*u*r-h*y*r-_*n*m+t*y*m+h*n*d-t*u*d)*F,e[10]=(o*y*r-_*c*r+_*n*a-t*y*a-o*n*d+t*c*d)*F,e[11]=(h*c*r-o*u*r-h*n*a+t*u*a+o*n*m-t*c*m)*F,e[12]=U*F,e[13]=(h*y*s-_*u*s+_*n*p-t*y*p-h*n*f+t*u*f)*F,e[14]=(_*c*s-o*y*s-_*n*l+t*y*l+o*n*f-t*c*f)*F,e[15]=(o*u*s-h*c*s+h*n*l-t*u*l-o*n*p+t*c*p)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,c=e.y,l=e.z,a=r*o,h=r*c;return this.set(a*o+n,a*c-s*l,a*l+s*c,0,a*c+s*l,h*c+n,h*l-s*o,0,a*l-s*c,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,c=t._z,l=t._w,a=r+r,h=o+o,u=c+c,p=r*a,m=r*h,_=r*u,y=o*h,f=o*u,d=c*u,T=l*a,w=l*h,S=l*u,U=n.x,R=n.y,F=n.z;return s[0]=(1-(y+d))*U,s[1]=(m+S)*U,s[2]=(_-w)*U,s[3]=0,s[4]=(m-S)*R,s[5]=(1-(p+d))*R,s[6]=(f+T)*R,s[7]=0,s[8]=(_+w)*F,s[9]=(f-T)*F,s[10]=(1-(p+y))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),c=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);let a=1/r,h=1/o,u=1/c;return an.elements[0]*=a,an.elements[1]*=a,an.elements[2]*=a,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,o,c=cn,l=!1){let a=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),_,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(c===cn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(c===Es)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=y,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o,c=cn,l=!1){let a=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),_,y;if(l)_=1/(o-r),y=o/(o-r);else if(c===cn)_=-2/(o-r),y=-(o+r)/(o-r);else if(c===Es)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=h,a[4]=0,a[8]=0,a[12]=p,a[1]=0,a[5]=u,a[9]=0,a[13]=m,a[2]=0,a[6]=0,a[10]=_,a[14]=y,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new H,an=new vt,wh=new H(0,0,0),Ah=new H(1,1,1),qn=new H,or=new H,Yt=new H,Ic=new vt,Pc=new Fn,hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],c=s[8],l=s[1],a=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,a),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,a),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,a),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ch=0,Lc=new H,Pi=new Fn,Cn=new vt,cr=new H,xs=new H,Rh=new H,Ih=new Fn,Dc=new H(1,0,0),Uc=new H(0,1,0),Nc=new H(0,0,1),Fc={type:"added"},Ph={type:"removed"},Li={type:"childadded",child:null},go={type:"childremoved",child:null},Lt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new hn,n=new Fn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(xs,cr,this.up):Cn.lookAt(cr,xs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ph),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let a=0,h=l.length;a<h;a++){let u=l[a];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,a=this.material.length;l<a;l++)c.push(r(e.materials,this.material[l]));s.material=c}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(r(e.animations,l))}}if(t){let c=o(e.geometries),l=o(e.materials),a=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),_=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),a.length>0&&(n.textures=a),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(c){let l=[];for(let a in c){let h=c[a];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new H(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new H,Rn=new H,xo=new H,In=new H,Di=new H,Ui=new H,Oc=new H,_o=new H,vo=new H,yo=new H,Mo=new xt,bo=new xt,So=new xt,Pn=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Rn.subVectors(n,t),xo.subVectors(e,t);let o=on.dot(on),c=on.dot(Rn),l=on.dot(xo),a=Rn.dot(Rn),h=Rn.dot(xo),u=o*a-c*c;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(a*l-c*h)*p,_=(o*h-c*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,s,r,o,c,l){return this.getBarycoord(e,t,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(c,In.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mo.setScalar(0),bo.setScalar(0),So.setScalar(0),Mo.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mo,r.x),o.addScaledVector(bo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Rn.subVectors(e,t),on.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,c;Di.subVectors(s,n),Ui.subVectors(r,n),_o.subVectors(e,n);let l=Di.dot(_o),a=Ui.dot(_o);if(l<=0&&a<=0)return t.copy(n);vo.subVectors(e,s);let h=Di.dot(vo),u=Ui.dot(vo);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*a;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Di,o);yo.subVectors(e,r);let m=Di.dot(yo),_=Ui.dot(yo);if(_>=0&&m<=_)return t.copy(r);let y=m*a-l*_;if(y<=0&&a>=0&&_<=0)return c=a/(a-_),t.copy(n).addScaledVector(Ui,c);let f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return Oc.subVectors(r,s),c=(u-h)/(u-h+(m-_)),t.copy(s).addScaledVector(Oc,c);let d=1/(f+y+p);return o=y*d,c=p*d,t.copy(n).addScaledVector(Di,o).addScaledVector(Ui,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Mh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Eo(o,r,e+1/3),this.g=Eo(o,r,e),this.b=Eo(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return it.workingToColorSpace(Nt.copy(this),e),Math.round(nt(Nt.r*255,0,255))*65536+Math.round(nt(Nt.g*255,0,255))*256+Math.round(nt(Nt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);let n=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(n,s,r),c=Math.min(n,s,r),l,a,h=(c+o)/2;if(c===o)l=0,a=0;else{let u=o-c;switch(a=h<=.5?u/(o+c):u/(2-o-c),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=a,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Et){it.workingToColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,s=Nt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(lr);let n=ro($n.h,lr.h,t),s=ro($n.s,lr.s,t),r=ro($n.l,lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Je;Je.NAMES=Ul;var Lh=0,On=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=ui,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let l=r[c];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pi=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new H,hr=new Be,Dh=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rr,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rr&&(e.usage=this.usage),e}};var Cs=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rs=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Uh=0,en=new vt,To=new Lt,Ni=new H,Zt=new Kn,_s=new Kn,At=new H,Jt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?Rs:Cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let c=t[r];_s.setFromBufferAttribute(c),this.morphTargetsRelative?(At.addVectors(Zt.min,_s.min),Zt.expandByPoint(At),At.addVectors(Zt.max,_s.max),Zt.expandByPoint(At)):(Zt.expandByPoint(_s.min),Zt.expandByPoint(_s.max))}Zt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let c=t[r],l=this.morphTargetsRelative;for(let a=0,h=c.count;a<h;a++)At.fromBufferAttribute(c,a),l&&(Ni.fromBufferAttribute(e,a),At.add(Ni)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),c=[],l=[];for(let V=0;V<n.count;V++)c[V]=new H,l[V]=new H;let a=new H,h=new H,u=new H,p=new Be,m=new Be,_=new Be,y=new H,f=new H;function d(V,E,b){a.fromBufferAttribute(n,V),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),p.fromBufferAttribute(r,V),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,b),h.sub(a),u.sub(a),m.sub(p),_.sub(p);let B=1/(m.x*_.y-_.x*m.y);isFinite(B)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(B),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(B),c[V].add(y),c[E].add(y),c[b].add(y),l[V].add(f),l[E].add(f),l[b].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,E=T.length;V<E;++V){let b=T[V],B=b.start,Y=b.count;for(let te=B,ee=B+Y;te<ee;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}let w=new H,S=new H,U=new H,R=new H;function F(V){U.fromBufferAttribute(s,V),R.copy(U);let E=c[V];w.copy(E),w.sub(U.multiplyScalar(U.dot(E))).normalize(),S.crossVectors(R,E);let B=S.dot(l[V])<0?-1:1;o.setXYZW(V,w.x,w.y,w.z,B)}for(let V=0,E=T.length;V<E;++V){let b=T[V],B=b.start,Y=b.count;for(let te=B,ee=B+Y;te<ee;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new H,r=new H,o=new H,c=new H,l=new H,a=new H,h=new H,u=new H;if(e)for(let p=0,m=e.count;p<m;p+=3){let _=e.getX(p+0),y=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,f),c.add(h),l.add(h),a.add(h),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,a.x,a.y,a.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(c,l){let a=c.array,h=c.itemSize,u=c.normalized,p=new a.constructor(l.length*h),m=0,_=0;for(let y=0,f=l.length;y<f;y++){c.isInterleavedBufferAttribute?m=l[y]*c.data.stride+c.offset:m=l[y]*h;for(let d=0;d<h;d++)p[_++]=a[m++]}return new Ht(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let c in s){let l=s[c],a=e(l,n);t.setAttribute(c,a)}let r=this.morphAttributes;for(let c in r){let l=[],a=r[c];for(let h=0,u=a.length;h<u;h++){let p=a[h],m=e(p,n);l.push(m)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,l=o.length;c<l;c++){let a=o[c];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let a=n[l];e.data.attributes[l]=a.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let a=this.morphAttributes[l],h=[];for(let u=0,p=a.length;u<p;u++){let m=a[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let a in s){let h=s[a];this.setAttribute(a,h.clone(t))}let r=e.morphAttributes;for(let a in r){let h=[],u=r[a];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[a]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,h=o.length;a<h;a++){let u=o[a];this.addGroup(u.start,u.count,u.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bc=new vt,ci=new Ur,ur=new qi,zc=new H,dr=new H,fr=new H,pr=new H,wo=new H,mr=new H,kc=new H,gr=new H,zt=class extends Lt{constructor(e=new Jt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let c=this.morphTargetInfluences;if(r&&c){mr.set(0,0,0);for(let l=0,a=r.length;l<a;l++){let h=c[l],u=r[l];h!==0&&(wo.fromBufferAttribute(u,e),o?mr.addScaledVector(wo,h):mr.addScaledVector(wo.sub(t),h))}t.add(mr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(ur.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ur,zc)===null||ci.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Bc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,c=r.index,l=r.attributes.position,a=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(c!==null)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let f=p[_],d=o[f.materialIndex],T=Math.max(f.start,m.start),w=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let S=T,U=w;S<U;S+=3){let R=c.getX(S),F=c.getX(S+1),V=c.getX(S+2);s=xr(this,d,e,n,a,h,u,R,F,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){let T=c.getX(f),w=c.getX(f+1),S=c.getX(f+2);s=xr(this,o,e,n,a,h,u,T,w,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let f=p[_],d=o[f.materialIndex],T=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=T,U=w;S<U;S+=3){let R=S,F=S+1,V=S+2;s=xr(this,d,e,n,a,h,u,R,F,V),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){let T=f,w=f+1,S=f+2;s=xr(this,o,e,n,a,h,u,T,w,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Nh(i,e,t,n,s,r,o,c){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,c):l=n.intersectTriangle(s,r,o,e.side===Un,c),l===null)return null;gr.copy(c),gr.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(gr);return a<t.near||a>t.far?null:{distance:a,point:gr.clone(),object:i}}function xr(i,e,t,n,s,r,o,c,l,a){i.getVertexPosition(c,dr),i.getVertexPosition(l,fr),i.getVertexPosition(a,pr);let h=Nh(i,e,t,n,dr,fr,pr,kc);if(h){let u=new H;Pn.getBarycoord(kc,dr,fr,pr,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,c,l,a,u,new Be)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,c,l,a,u,new Be)),o&&(h.normal=Pn.getInterpolatedAttribute(o,c,l,a,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:c,b:l,c:a,normal:new H,materialIndex:0};Pn.getNormal(dr,fr,pr,p.normal),h.face=p,h.barycoord=u}return h}var vn=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],a=[],h=[],u=[],p=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function _(y,f,d,T,w,S,U,R,F,V,E){let b=S/F,B=U/V,Y=S/2,te=U/2,ee=R/2,ie=F+1,se=V+1,pe=0,K=0,xe=new H;for(let ve=0;ve<se;ve++){let Le=ve*B-te;for(let We=0;We<ie;We++){let $e=We*b-Y;xe[y]=$e*T,xe[f]=Le*w,xe[d]=ee,a.push(xe.x,xe.y,xe.z),xe[y]=0,xe[f]=0,xe[d]=R>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(We/F),u.push(1-ve/V),pe+=1}}for(let ve=0;ve<V;ve++)for(let Le=0;Le<F;Le++){let We=p+Le+ie*ve,$e=p+Le+ie*(ve+1),Qe=p+(Le+1)+ie*(ve+1),Ke=p+(Le+1)+ie*ve;l.push(We,$e,Ke),l.push($e,Qe,Ke),K+=6}c.addGroup(m,K,E),m+=K,p+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=vi(i[t]);for(let s in n)e[s]=n[s]}return e}function Fh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Nl={clone:vi,merge:Ft},Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Is=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new H,Vc=new Be,Hc=new Be,Pt=class extends Is{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Hc),t.subVectors(Hc,Vc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,a=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/a,s*=o.width/l,n*=o.height/a}let c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,Nr=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Pt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let o=new Pt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let c=new Pt(Fi,Oi,e,t);c.layers=this.layers,this.add(c);let l=new Pt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);let a=new Pt(Fi,Oi,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,c,l]=t;for(let a of t)this.remove(a);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,l,a,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,a),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ps=class extends Gt{constructor(e=[],t=xi,n,s,r,o,c,l,a,h){super(e,t,n,s,r,o,c,l,a,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fr=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ps(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Bn});r.uniforms.tEquirect.value=t;let o=new zt(s,r),c=t.minFilter;return t.minFilter===ti&&(t.minFilter=ln),new Nr(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ln=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zh={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,c=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,n),d=this._getHandJoint(a,y);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=a.joints["index-finger-tip"],u=a.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;a.inputState.pinching&&p>m+_?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&p<=m-_&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ls=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rr,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bt=new H,Ds=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mi=class extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bi,vs=new H,zi=new H,ki=new H,Vi=new Be,ys=new Be,Fl=new vt,_r=new H,Ms=new H,vr=new H,Gc=new Be,Ao=new Be,Wc=new Be,Zi=class extends Lt{constructor(e=new mi){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Jt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Ds(n,3,0,!1)),Bi.setAttribute("uv",new Ds(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Fl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;yr(_r.set(-.5,-.5,0),ki,o,zi,s,r),yr(Ms.set(.5,-.5,0),ki,o,zi,s,r),yr(vr.set(.5,.5,0),ki,o,zi,s,r),Gc.set(0,0),Ao.set(1,0),Wc.set(1,1);let c=e.ray.intersectTriangle(_r,Ms,vr,!1,vs);if(c===null&&(yr(Ms.set(-.5,.5,0),ki,o,zi,s,r),Ao.set(0,1),c=e.ray.intersectTriangle(_r,vr,Ms,!1,vs),c===null))return;let l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:Pn.getInterpolation(vs,_r,Ms,vr,Gc,Ao,Wc,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yr(i,e,t,n,s,r){Vi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Vi.x-s*Vi.y,ys.y=s*Vi.x+r*Vi.y):ys.copy(Vi),i.copy(e),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Fl)}var Co=new H,kh=new H,Vh=new Ye,gn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Co.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vh.getNormalMatrix(e),s=this.coplanarPoint(Co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new qi,Hh=new Be(.5,.5),Mr=new H,Ji=class{constructor(e=new gn,t=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let s=this.planes,r=e.elements,o=r[0],c=r[1],l=r[2],a=r[3],h=r[4],u=r[5],p=r[6],m=r[7],_=r[8],y=r[9],f=r[10],d=r[11],T=r[12],w=r[13],S=r[14],U=r[15];if(s[0].setComponents(a-o,m-h,d-_,U-T).normalize(),s[1].setComponents(a+o,m+h,d+_,U+T).normalize(),s[2].setComponents(a+c,m+u,d+y,U+w).normalize(),s[3].setComponents(a-c,m-u,d-y,U-w).normalize(),n)s[4].setComponents(l,p,f,S).normalize(),s[5].setComponents(a-l,m-p,d-f,U-S).normalize();else if(s[4].setComponents(a-l,m-p,d-f,U-S).normalize(),t===cn)s[5].setComponents(a+l,m+p,d+f,U+S).normalize();else if(t===Es)s[5].setComponents(l,p,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=Hh.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Mr.x=s.normal.x>0?e.max.x:e.min.x,Mr.y=s.normal.y>0?e.max.y:e.min.y,Mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ji=class extends Gt{constructor(e,t,n,s,r,o,c,l,a){super(e,t,n,s,r,o,c,l,a),this.isCanvasTexture=!0,this.needsUpdate=!0}},Us=class extends Gt{constructor(e,t,n=ni,s,r,o,c=tn,l=tn,a,h=Gi,u=1){if(h!==Gi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,o,c,l,h,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ns=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Fs=class i extends Jt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:l};let a=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],_=0,y=[],f=n/2,d=0;T(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(m,2));function T(){let S=new H,U=new H,R=0,F=(t-e)/n;for(let V=0;V<=r;V++){let E=[],b=V/r,B=b*(t-e)+e;for(let Y=0;Y<=s;Y++){let te=Y/s,ee=te*l+c,ie=Math.sin(ee),se=Math.cos(ee);U.x=B*ie,U.y=-b*n+f,U.z=B*se,u.push(U.x,U.y,U.z),S.set(ie,F,se).normalize(),p.push(S.x,S.y,S.z),m.push(te,1-b),E.push(_++)}y.push(E)}for(let V=0;V<s;V++)for(let E=0;E<r;E++){let b=y[E][V],B=y[E+1][V],Y=y[E+1][V+1],te=y[E][V+1];(e>0||E!==0)&&(h.push(b,B,te),R+=3),(t>0||E!==r-1)&&(h.push(B,Y,te),R+=3)}a.addGroup(d,R,0),d+=R}function w(S){let U=_,R=new Be,F=new H,V=0,E=S===!0?e:t,b=S===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,f*b,0),p.push(0,b,0),m.push(.5,.5),_++;let B=_;for(let Y=0;Y<=s;Y++){let ee=Y/s*l+c,ie=Math.cos(ee),se=Math.sin(ee);F.x=E*se,F.y=f*b,F.z=E*ie,u.push(F.x,F.y,F.z),p.push(0,b,0),R.x=ie*.5+.5,R.y=se*.5*b+.5,m.push(R.x,R.y),_++}for(let Y=0;Y<s;Y++){let te=U+Y,ee=B+Y;S===!0?h.push(ee,ee+1,te):h.push(ee+1,ee,te),V+=3}a.addGroup(d,V,S===!0?1:2),d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ki=class i extends Jt{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);let r=[],o=[],c=[],l=[],a=[],h=1/t,u=new H,p=new Be,m=new H,_=new H,y=new H,f=0,d=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:f=e[T+1].x-e[T].x,d=e[T+1].y-e[T].y,m.x=d*1,m.y=-f,m.z=d*0,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:f=e[T+1].x-e[T].x,d=e[T+1].y-e[T].y,m.x=d*1,m.y=-f,m.z=d*0,_.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(_)}for(let T=0;T<=t;T++){let w=n+T*h*s,S=Math.sin(w),U=Math.cos(w);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*S,u.y=e[R].y,u.z=e[R].x*U,o.push(u.x,u.y,u.z),p.x=T/t,p.y=R/(e.length-1),c.push(p.x,p.y);let F=l[3*R+0]*S,V=l[3*R+1],E=l[3*R+0]*U;a.push(F,V,E)}}for(let T=0;T<t;T++)for(let w=0;w<e.length-1;w++){let S=w+T*e.length,U=S,R=S+e.length,F=S+e.length+1,V=S+1;r.push(U,R,V),r.push(F,V,R)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(c,2)),this.setAttribute("normal",new yt(a,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Os=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,c=Math.floor(n),l=Math.floor(s),a=c+1,h=l+1,u=e/c,p=t/l,m=[],_=[],y=[],f=[];for(let d=0;d<h;d++){let T=d*p-o;for(let w=0;w<a;w++){let S=w*u-r;_.push(S,-T,0),y.push(0,0,1),f.push(w/c),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<c;T++){let w=T+a*d,S=T+a*(d+1),U=T+1+a*(d+1),R=T+1+a*d;m.push(w,S,R),m.push(S,U,R)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qi=class i extends Jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+c,Math.PI),a=0,h=[],u=new H,p=new H,m=[],_=[],y=[],f=[];for(let d=0;d<=n;d++){let T=[],w=d/n,S=0;d===0&&o===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let U=0;U<=t;U++){let R=U/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+w*c),u.y=e*Math.cos(o+w*c),u.z=e*Math.sin(s+R*r)*Math.sin(o+w*c),_.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),f.push(R+S,1-w),T.push(a++)}h.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){let w=h[d][T+1],S=h[d][T],U=h[d+1][T],R=h[d+1][T+1];(d!==0||o>0)&&m.push(w,S,R),(d!==n-1||l<Math.PI)&&m.push(S,U,R)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class i extends Jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],a=[],h=new H,u=new H,p=new H;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){let y=_/s*r,f=m/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(y),u.y=(e+t*Math.cos(f))*Math.sin(y),u.z=t*Math.sin(f),c.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),a.push(_/s),a.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){let y=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,T=(s+1)*m+_;o.push(y,f,T),o.push(f,d,T)}this.setIndex(o),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bs=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Br=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zr=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let c=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let c=t[1];e<c&&(n=2,r=c);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let c=n+o>>>1;e<t[c]?o=c:n=c+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kr=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,c=s[r],l=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case Po:r=e,c=2*t-n;break;case Lo:r=s.length-2,c=t+s[r]-s[r+1];break;default:r=e,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Po:o=e,l=2*n-t;break;case Lo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let a=(n-t)*.5,h=this.valueSize;this._weightPrev=a/(t-c),this._weightNext=a/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),y=_*_,f=y*_,d=-p*f+2*p*y-p*_,T=(1+p)*f+(-1.5-2*p)*y+(-.5+p)*_+1,w=(-1-m)*f+(1.5+m)*y+.5*_,S=m*f-m*y;for(let U=0;U!==c;++U)r[U]=d*o[h+U]+T*o[a+U]+w*o[l+U]+S*o[u+U];return r}},Vr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=e*c,a=l-c,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==c;++p)r[p]=o[a+p]*u+o[l+p]*h;return r}},Hr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case Sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==r;c++){let l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,o),e=!1;break}o=l}if(s!==void 0&&Gh(s))for(let c=0,l=s.length;c!==l;++c){let a=s[c];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sr,r=e.length-1,o=1;for(let c=1;c<r;++c){let l=!1,a=e[c],h=e[c+1];if(a!==h&&(c!==1||a!==e[0]))if(s)l=!0;else{let u=c*n,p=u-n,m=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[p+_]||y!==t[m+_]){l=!0;break}}}if(l){if(c!==o){e[o]=e[c];let u=c*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let c=r*n,l=o*n,a=0;a!==n;++a)t[l+a]=t[c+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Cr;var Qn=class extends jt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=bs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="color";var Wr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="number";var Xr=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=(n-t)/(s-t),a=e*c;for(let h=a+c;a!==h;a+=4)Fn.slerpFlat(r,0,o,a-c,o,a,l);return r}},zs=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends jt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=bs;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};qr.prototype.ValueTypeName="vector";var $r=class{constructor(e,t,n){let s=this,r=!1,o=0,c=0,l,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,c),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return a.push(h,u),this},this.removeHandler=function(h){let u=a.indexOf(h);return u!==-1&&a.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=a.length;u<p;u+=2){let m=a[u],_=a[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ol=new $r,Yr=class{constructor(e){this.manager=e!==void 0?e:Ol,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ts=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ro=new vt,Xc=new H,qc=new H,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vs=class extends Is{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,c=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=a*this.view.offsetX,o=r+a*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},No=class extends Uo{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new No}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zr=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ic="\\[\\]\\.:\\/",Wh=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",Xh="[^"+ic.replace("\\.","")+"]",qh=/((?:WC+[\/:])*)/.source.replace("WC",sc),$h=/(WCOD+)?/.source.replace("WCOD",Xh),Yh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),Zh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),Jh=new RegExp("^"+qh+$h+Yh+Zh+"$"),jh=["material","materials","bones","map"],Fo=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wh,"")}static parseTrackName(e){let t=Jh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===t||c.uuid===t)return c;let l=n(c.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===a){a=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[s];if(o===void 0){let a=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Fo;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dm=new Float32Array(1);function rc(i,e,t,n){let s=Kh(n);switch(t){case Yo:return i*e;case Jo:return i*e/s.components*s.byteLength;case ha:return i*e/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case ua:return i*e*2/s.components*s.byteLength;case Zo:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case da:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kh(i){switch(i){case dn:case Wo:return{byteLength:1,components:1};case is:case Xo:case ss:return{byteLength:2,components:1};case ca:case la:return{byteLength:2,components:4};case ni:case oa:case bn:return{byteLength:4,components:1};case qo:case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function eu(i){let e=new WeakMap;function t(c,l){let a=c.array,h=c.usage,u=a.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,a,h),c.onUploadCallback();let m;if(a instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)m=i.HALF_FLOAT;else if(a instanceof Uint16Array)c.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=i.SHORT;else if(a instanceof Uint32Array)m=i.UNSIGNED_INT;else if(a instanceof Int32Array)m=i.INT;else if(a instanceof Int8Array)m=i.BYTE;else if(a instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:p,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:c.version,size:u}}function n(c,l,a){let h=l.array,u=l.updateRanges;if(i.bindBuffer(a,c),u.length===0)i.bufferSubData(a,0,h);else{u.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<u.length;m++){let _=u[p],y=u[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++p,u[p]=y)}u.length=p+1;for(let m=0,_=u.length;m<_;m++){let y=u[m];i.bufferSubData(a,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=e.get(c);l&&(i.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let a=e.get(c);if(a===void 0)e.set(c,t(c,l));else if(a.version<c.version){if(a.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,c,l),a.version=c.version}}return{get:s,remove:r,update:o}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
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
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,lu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,mu=`#ifdef USE_BUMPMAP
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eu=`#define PI 3.141592653589793
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
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
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
}`,Gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,ed=`
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
#endif`,td=`#if defined( RE_IndirectDiffuse )
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tf=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,cf=`#if DEPTH_PACKING == 3200
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
}`,lf=`#define DISTANCE
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
}`,hf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 diffuse;
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
}`,xf=`#define LAMBERT
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
}`,_f=`#define LAMBERT
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
}`,vf=`#define MATCAP
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
}`,yf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,bf=`#define NORMAL
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
}`,Sf=`#define PHONG
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
}`,Ef=`#define PHONG
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
}`,Tf=`#define STANDARD
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
}`,wf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Cf=`#define TOON
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
}`,Rf=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:tu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:cu,batching_pars_vertex:lu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:vu,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:bu,color_vertex:Su,common:Eu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Au,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Iu,colorspace_fragment:Pu,colorspace_pars_fragment:Lu,envmap_fragment:Du,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:$u,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:ku,fog_pars_fragment:Vu,gradientmap_pars_fragment:Hu,lightmap_pars_fragment:Gu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Zu,lights_phong_fragment:Ju,lights_phong_pars_fragment:ju,lights_physical_fragment:Ku,lights_physical_pars_fragment:Qu,lights_fragment_begin:ed,lights_fragment_maps:td,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:cd,map_particle_fragment:ld,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:xd,normal_fragment_begin:_d,normal_fragment_maps:vd,normal_pars_fragment:yd,normal_pars_vertex:Md,normal_vertex:bd,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Ad,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Id,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Dd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Vd,skinning_vertex:Hd,skinnormal_vertex:Gd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:$d,transmission_fragment:Yd,transmission_pars_fragment:Zd,uv_pars_fragment:Jd,uv_pars_vertex:jd,uv_vertex:Kd,worldpos_vertex:Qd,background_vert:ef,background_frag:tf,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:cf,distanceRGBA_vert:lf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:xf,meshlambert_frag:_f,meshmatcap_vert:vf,meshmatcap_frag:yf,meshnormal_vert:Mf,meshnormal_frag:bf,meshphong_vert:Sf,meshphong_frag:Ef,meshphysical_vert:Tf,meshphysical_frag:wf,meshtoon_vert:Af,meshtoon_frag:Cf,points_vert:Rf,points_frag:If,shadow_vert:Pf,shadow_frag:Lf,sprite_vert:Df,sprite_frag:Uf},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Sn={basic:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ft([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ft([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ft([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ft([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ft([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ft([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ft([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ft([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ft([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ft([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ft([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Sn.physical={uniforms:Ft([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Va={r:0,b:0,g:0},yi=new hn,Nf=new vt;function Ff(i,e,t,n,s,r,o){let c=new Je(0),l=r===!0?0:1,a,h,u=null,p=0,m=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function y(w){let S=!1,U=_(w);U===null?d(c,l):U&&U.isColor&&(d(U,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(w,S){let U=_(S);U&&(U.isCubeTexture||U.mapping===Gs)?(h===void 0&&(h=new zt(new vn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:vi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(yi)),h.material.toneMapped=it.getTransfer(U.colorSpace)!==at,(u!==U||p!==U.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=U,p=U.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(a===void 0&&(a=new zt(new Os(2,2),new un({name:"BackgroundMaterial",uniforms:vi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(a)),a.material.uniforms.t2D.value=U,a.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,a.material.toneMapped=it.getTransfer(U.colorSpace)!==at,U.matrixAutoUpdate===!0&&U.updateMatrix(),a.material.uniforms.uvTransform.value.copy(U.matrix),(u!==U||p!==U.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,u=U,p=U.version,m=i.toneMapping),a.layers.enableAll(),w.unshift(a,a.geometry,a.material,0,0,null))}function d(w,S){w.getRGB(Va,nc(i)),n.buffers.color.setClear(Va.r,Va.g,Va.b,S,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,S=1){c.set(w),l=S,d(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(c,l)},render:y,addToRenderList:f,dispose:T}}function Of(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function c(b,B,Y,te,ee){let ie=!1,se=u(te,Y,B);r!==se&&(r=se,a(r.object)),ie=m(b,te,Y,ee),ie&&_(b,te,Y,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,S(b,B,Y,te),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return i.createVertexArray()}function a(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,B,Y){let te=Y.wireframe===!0,ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let ie=ee[B.id];ie===void 0&&(ie={},ee[B.id]=ie);let se=ie[te];return se===void 0&&(se=p(l()),ie[te]=se),se}function p(b){let B=[],Y=[],te=[];for(let ee=0;ee<t;ee++)B[ee]=0,Y[ee]=0,te[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:te,object:b,attributes:{},index:null}}function m(b,B,Y,te){let ee=r.attributes,ie=B.attributes,se=0,pe=Y.getAttributes();for(let K in pe)if(pe[K].location>=0){let ve=ee[K],Le=ie[K];if(Le===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor)),ve===void 0||ve.attribute!==Le||Le&&ve.data!==Le.data)return!0;se++}return r.attributesNum!==se||r.index!==te}function _(b,B,Y,te){let ee={},ie=B.attributes,se=0,pe=Y.getAttributes();for(let K in pe)if(pe[K].location>=0){let ve=ie[K];ve===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));let Le={};Le.attribute=ve,ve&&ve.data&&(Le.data=ve.data),ee[K]=Le,se++}r.attributes=ee,r.attributesNum=se,r.index=te}function y(){let b=r.newAttributes;for(let B=0,Y=b.length;B<Y;B++)b[B]=0}function f(b){d(b,0)}function d(b,B){let Y=r.newAttributes,te=r.enabledAttributes,ee=r.attributeDivisors;Y[b]=1,te[b]===0&&(i.enableVertexAttribArray(b),te[b]=1),ee[b]!==B&&(i.vertexAttribDivisor(b,B),ee[b]=B)}function T(){let b=r.newAttributes,B=r.enabledAttributes;for(let Y=0,te=B.length;Y<te;Y++)B[Y]!==b[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function w(b,B,Y,te,ee,ie,se){se===!0?i.vertexAttribIPointer(b,B,Y,ee,ie):i.vertexAttribPointer(b,B,Y,te,ee,ie)}function S(b,B,Y,te){y();let ee=te.attributes,ie=Y.getAttributes(),se=B.defaultAttributeValues;for(let pe in ie){let K=ie[pe];if(K.location>=0){let xe=ee[pe];if(xe===void 0&&(pe==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),pe==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),xe!==void 0){let ve=xe.normalized,Le=xe.itemSize,We=e.get(xe);if(We===void 0)continue;let $e=We.buffer,Qe=We.type,Ke=We.bytesPerElement,oe=Qe===i.INT||Qe===i.UNSIGNED_INT||xe.gpuType===oa;if(xe.isInterleavedBufferAttribute){let re=xe.data,Te=re.stride,ze=xe.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<K.locationSize;Ue++)d(K.location+Ue,re.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)f(K.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ue=0;Ue<K.locationSize;Ue++)w(K.location+Ue,Le/K.locationSize,Qe,ve,Te*Ke,(ze+Le/K.locationSize*Ue)*Ke,oe)}else{if(xe.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)d(K.location+re,xe.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let re=0;re<K.locationSize;re++)f(K.location+re);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let re=0;re<K.locationSize;re++)w(K.location+re,Le/K.locationSize,Qe,ve,Le*Ke,Le/K.locationSize*re*Ke,oe)}}else if(se!==void 0){let ve=se[pe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(K.location,ve);break;case 3:i.vertexAttrib3fv(K.location,ve);break;case 4:i.vertexAttrib4fv(K.location,ve);break;default:i.vertexAttrib1fv(K.location,ve)}}}}T()}function U(){V();for(let b in n){let B=n[b];for(let Y in B){let te=B[Y];for(let ee in te)h(te[ee].object),delete te[ee];delete B[Y]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;let B=n[b.id];for(let Y in B){let te=B[Y];for(let ee in te)h(te[ee].object),delete te[ee];delete B[Y]}delete n[b.id]}function F(b){for(let B in n){let Y=n[B];if(Y[b.id]===void 0)continue;let te=Y[b.id];for(let ee in te)h(te[ee].object),delete te[ee];delete Y[b.id]}}function V(){E(),o=!0,r!==s&&(r=s,a(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:V,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:f,disableUnusedAttributes:T}}function Bf(i,e,t){let n;function s(a){n=a}function r(a,h){i.drawArrays(n,a,h),t.update(h,n,1)}function o(a,h,u){u!==0&&(i.drawArraysInstanced(n,a,h,u),t.update(h,n,u))}function c(a,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];t.update(m,n,1)}function l(a,h,u,p){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<a.length;_++)o(a[_],h[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,a,0,h,0,p,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*p[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function zf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==nn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){let V=F===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==dn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==bn&&!V)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",h=l(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:a,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:U,maxSamples:R}}function kf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gn,c=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let _=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!f)r?h(null):a();else{let T=r?0:n,w=T*4,S=d.clippingState||null;l.value=S,S=h(_,p,w,m);for(let U=0;U!==w;++U)S[U]=t[U];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,_){let y=u!==null?u.length:0,f=null;if(y!==0){if(f=l.value,_!==!0||f===null){let d=m+y*4,T=p.matrixWorldInverse;c.getNormalMatrix(T),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,S=m;w!==y;++w,S+=4)o.copy(u[w]).applyMatrix4(T,c),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function Vf(i){let e=new WeakMap;function t(o,c){return c===sa?o.mapping=xi:c===ra&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){let c=o.mapping;if(c===sa||c===ra)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let a=new Fr(l.height);return a.fromEquirectangularTexture(i,o),e.set(o,a),o.addEventListener("dispose",s),t(a.texture,o.mapping)}else return null}}return o}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var cs=4,Bl=[.125,.215,.35,.446,.526,.582],Si=20,ac=new Vs,zl=new Je,oc=null,cc=0,lc=0,hc=!1,bi=(1+Math.sqrt(5))/2,os=1/bi,kl=[new H(-bi,os,0),new H(bi,os,0),new H(-os,0,bi),new H(os,0,bi),new H(0,bi,-os),new H(0,bi,os),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Hf=new H,Wa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:c=Hf}=r;oc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,cc,lc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ss,format:nn,colorSpace:fi,depthBuffer:!1},s=Vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gf(r)),this._blurMaterial=Wf(r,e,t)}return s}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,s,r){let l=new Pt(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(zl),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new pi({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),f=new zt(new vn,y),d=!1,T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,d=!0):(y.color.copy(zl),d=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(l.up.set(0,a[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):S===1?(l.up.set(0,0,a[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,a[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let U=this._cubeSize;Ha(s,S*U,w>2?U:0,U,U),u.setRenderTarget(s),d&&u.render(f,l),u.render(e,l)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xi||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;let l=this._cubeSize;Ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ac)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=kl[(s-r-1)%kl.length];this._blur(e,r-1,r,o,c)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,c){let l=this._renderer,a=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],a),p=a.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),y=r/_,f=isFinite(r)?1+Math.floor(h*y):Si;f>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);let d=[],T=0;for(let F=0;F<Si;++F){let V=F/y,E=Math.exp(-V*V/2);d.push(E),F===0?T+=E:F<f&&(T+=2*E)}for(let F=0;F<d.length;F++)d[F]=d[F]/T;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",c&&(p.poleAxis.value=c);let{_lodMax:w}=this;p.dTheta.value=_,p.mipInt.value=w-n;let S=this._sizeLods[s],U=3*S*(s>w-cs?s-w+cs:0),R=4*(this._cubeSize-S);Ha(t,U,R,3*S,2*S),l.setRenderTarget(t),l.render(u,ac)}};function Gf(i){let e=[],t=[],n=[],s=i,r=i-cs+1+Bl.length;for(let o=0;o<r;o++){let c=Math.pow(2,s);t.push(c);let l=1/c;o>i-cs?l=Bl[o-i+cs-1]:o===0&&(l=0),n.push(l);let a=1/(c-2),h=-a,u=1+a,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,y=3,f=2,d=1,T=new Float32Array(y*_*m),w=new Float32Array(f*_*m),S=new Float32Array(d*_*m);for(let R=0;R<m;R++){let F=R%3*2/3-1,V=R>2?0:-1,E=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];T.set(E,y*_*R),w.set(p,f*_*R);let b=[R,R,R,R,R,R];S.set(b,d*_*R)}let U=new Jt;U.setAttribute("position",new Ht(T,y)),U.setAttribute("uv",new Ht(w,f)),U.setAttribute("faceIndex",new Ht(S,d)),e.push(U),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vl(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wf(i,e,t){let n=new Float32Array(Si),s=new H(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Hl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Gl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function Xf(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){let l=c.mapping,a=l===sa||l===ra,h=l===xi||l===_i;if(a||h){let u=e.get(c),p=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return t===null&&(t=new Wa(i)),u=a?t.fromEquirectangular(c,u):t.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),u.texture;if(u!==void 0)return u.texture;{let m=c.image;return a&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Wa(i)),u=a?t.fromEquirectangular(c):t.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,e.set(c,u),c.addEventListener("dispose",r),u.texture):null}}}return c}function s(c){let l=0,a=6;for(let h=0;h<a;h++)c[h]!==void 0&&l++;return l===a}function r(c){let l=c.target;l.removeEventListener("dispose",r);let a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $f(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function a(u){let p=[],m=u.index,_=u.attributes.position,y=0;if(m!==null){let T=m.array;y=m.version;for(let w=0,S=T.length;w<S;w+=3){let U=T[w+0],R=T[w+1],F=T[w+2];p.push(U,R,R,F,F,U)}}else if(_!==void 0){let T=_.array;y=_.version;for(let w=0,S=T.length/3-1;w<S;w+=3){let U=w+0,R=w+1,F=w+2;p.push(U,R,R,F,F,U)}}else return;let f=new(tc(p)?Rs:Cs)(p,1);f.version=y;let d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&a(u)}else a(u);return r.get(u)}return{get:c,update:l,getWireframeAttribute:h}}function Yf(i,e,t){let n;function s(p){n=p}let r,o;function c(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function a(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,p*o,_),t.update(m,n,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,_);let f=0;for(let d=0;d<_;d++)f+=m[d];t.update(f,n,1)}function u(p,m,_,y){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)a(p[d]/o,m[d],y[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,y,0,_);let d=0;for(let T=0;T<_;T++)d+=m[T]*y[T];t.update(d,n,1)}}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(r/3);break;case i.LINES:t.lines+=c*(r/2);break;case i.LINE_STRIP:t.lines+=c*(r-1);break;case i.LINE_LOOP:t.lines+=c*r;break;case i.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jf(i,e,t){let n=new WeakMap,s=new xt;function r(o,c,l){let a=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(c);if(p===void 0||p.count!==u){let E=function(){F.dispose(),n.delete(c),c.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let m=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,f=c.morphAttributes.position||[],d=c.morphAttributes.normal||[],T=c.morphAttributes.color||[],w=0;m===!0&&(w=1),_===!0&&(w=2),y===!0&&(w=3);let S=c.attributes.position.count*w,U=1;S>e.maxTextureSize&&(U=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let R=new Float32Array(S*U*4*u),F=new ws(R,S,U,u);F.type=bn,F.needsUpdate=!0;let V=w*4;for(let b=0;b<u;b++){let B=f[b],Y=d[b],te=T[b],ee=S*U*4*b;for(let ie=0;ie<B.count;ie++){let se=ie*V;m===!0&&(s.fromBufferAttribute(B,ie),R[ee+se+0]=s.x,R[ee+se+1]=s.y,R[ee+se+2]=s.z,R[ee+se+3]=0),_===!0&&(s.fromBufferAttribute(Y,ie),R[ee+se+4]=s.x,R[ee+se+5]=s.y,R[ee+se+6]=s.z,R[ee+se+7]=0),y===!0&&(s.fromBufferAttribute(te,ie),R[ee+se+8]=s.x,R[ee+se+9]=s.y,R[ee+se+10]=s.z,R[ee+se+11]=te.itemSize===4?s.w:1)}}p={count:u,texture:F,size:new Be(S,U)},n.set(c,p),c.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<a.length;y++)m+=a[y];let _=c.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",a)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function jf(i,e,t,n){let s=new WeakMap;function r(l){let a=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==a&&(e.update(u),s.set(u,a)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==a&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,a))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==a&&(p.update(),s.set(p,a))}return u}function o(){s=new WeakMap}function c(l){let a=l.target;a.removeEventListener("dispose",c),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:r,dispose:o}}var ch=new Gt,Wl=new Us(1,1),lh=new ws,hh=new Dr,uh=new Ps,Xl=[],ql=[],$l=new Float32Array(16),Yl=new Float32Array(9),Zl=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(r,c)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function np(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),wt(t,n)}}function ip(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),wt(t,n)}}function sp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),wt(t,n)}}function rp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function fp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=Qo,r=Wl):r=ch,t.setTexture2D(e||r,s)}function pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hh,s)}function mp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uh,s)}function gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lh,s)}function xp(i){switch(i){case 5126:return Kf;case 35664:return Qf;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return cp;case 5125:return lp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}function _p(i,e){i.uniform1fv(this.addr,e)}function vp(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function yp(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Mp(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function bp(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sp(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ep(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tp(i,e){i.uniform1iv(this.addr,e)}function wp(i,e){i.uniform2iv(this.addr,e)}function Ap(i,e){i.uniform3iv(this.addr,e)}function Cp(i,e){i.uniform4iv(this.addr,e)}function Rp(i,e){i.uniform1uiv(this.addr,e)}function Ip(i,e){i.uniform2uiv(this.addr,e)}function Pp(i,e){i.uniform3uiv(this.addr,e)}function Lp(i,e){i.uniform4uiv(this.addr,e)}function Dp(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ch,r[o])}function Up(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hh,r[o])}function Np(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uh,r[o])}function Fp(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function Op(i){switch(i){case 5126:return _p;case 35664:return vp;case 35665:return yp;case 35666:return Mp;case 35674:return bp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Ip;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}var dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xp(t.type)}},fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Op(t.type)}},pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(e,t[c.id],n)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Jl(i,e){i.seq.push(e),i.map[e.id]=e}function Bp(i,e,t){let n=i.name,s=n.length;for(uc.lastIndex=0;;){let r=uc.exec(n),o=uc.lastIndex,c=r[1],l=r[2]==="]",a=r[3];if(l&&(c=c|0),a===void 0||a==="["&&o+2===s){Jl(t,a===void 0?new dc(c,i,e):new fc(c,i,e));break}else{let u=t.map[c];u===void 0&&(u=new pc(c),Jl(t,u)),t=u}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Bp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let c=t[r],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zp=37297,kp=0;function Vp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}var Kl=new Ye;function Hp(i){it._getMatrix(Kl,it.workingColorSpace,i);let e=`mat3( ${Kl.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Ss:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ql(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vp(i.getShaderSource(e),c)}else return r}function Gp(i,e){let t=Hp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wp(i,e){let t;switch(e){case ml:t="Linear";break;case gl:t="Reinhard";break;case xl:t="Cineon";break;case Hs:t="ACESFilmic";break;case vl:t="AgX";break;case yl:t="Neutral";break;case _l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new H;function Xp(){it.getLuminanceCoefficients(Ga);let i=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function $p(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function Zs(i){return i!==""}function eh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(Zp,jp)}var Jp=new Map;function jp(i,e){let t=je[e];if(t===void 0){let n=Jp.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}var Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(Kp,Qp)}function Qp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function em(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function tm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case _i:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function im(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case fl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function sm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,c=t.fragmentShader,l=em(t),a=tm(t),h=nm(t),u=im(t),p=sm(t),m=qp(t),_=$p(r),y=s.createProgram(),f,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),d.length>0&&(d+=`
`)):(f=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),d=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?je.tonemapping_pars_fragment:"",t.toneMapping!==zn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=mc(o),o=eh(o,t),o=th(o,t),c=mc(c),c=eh(c,t),c=th(c,t),o=nh(o),c=nh(c),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=T+f+o,S=T+d+c,U=jl(s,s.VERTEX_SHADER,w),R=jl(s,s.FRAGMENT_SHADER,S);s.attachShader(y,U),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(B){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(y)||"",te=s.getShaderInfoLog(U)||"",ee=s.getShaderInfoLog(R)||"",ie=Y.trim(),se=te.trim(),pe=ee.trim(),K=!0,xe=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,U,R);else{let ve=Ql(s,U,"vertex"),Le=Ql(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+ve+`
`+Le)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(se===""||pe==="")&&(xe=!1);xe&&(B.diagnostics={runnable:K,programLog:ie,vertexShader:{log:se,prefix:f},fragmentShader:{log:pe,prefix:d}})}s.deleteShader(U),s.deleteShader(R),V=new ls(s,y),E=Yp(s,y)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,zp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=R,this}var am=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}};function om(i,e,t,n,s,r,o){let c=new As,l=new gc,a=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return a.add(E),E===0?"uv":`uv${E}`}function f(E,b,B,Y,te){let ee=Y.fog,ie=te.geometry,se=E.isMeshStandardMaterial?Y.environment:null,pe=(E.isMeshStandardMaterial?t:e).get(E.envMap||se),K=pe&&pe.mapping===Gs?pe.image.height:null,xe=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let ve=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Le=ve!==void 0?ve.length:0,We=0;ie.morphAttributes.position!==void 0&&(We=1),ie.morphAttributes.normal!==void 0&&(We=2),ie.morphAttributes.color!==void 0&&(We=3);let $e,Qe,Ke,oe;if(xe){let j=Sn[xe];$e=j.vertexShader,Qe=j.fragmentShader}else $e=E.vertexShader,Qe=E.fragmentShader,l.update(E),Ke=l.getVertexShaderID(E),oe=l.getFragmentShaderID(E);let re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),ze=te.isInstancedMesh===!0,Ue=te.isBatchedMesh===!0,Ze=!!E.map,pt=!!E.matcap,L=!!pe,rt=!!E.aoMap,ke=!!E.lightMap,Ve=!!E.bumpMap,I=!!E.normalMap,D=!!E.displacementMap,M=!!E.emissiveMap,A=!!E.metalnessMap,he=!!E.roughnessMap,k=E.anisotropy>0,x=E.clearcoat>0,g=E.dispersion>0,O=E.iridescence>0,q=E.sheen>0,W=E.transmission>0,$=k&&!!E.anisotropyMap,P=x&&!!E.clearcoatMap,N=x&&!!E.clearcoatNormalMap,ne=x&&!!E.clearcoatRoughnessMap,le=O&&!!E.iridescenceMap,ae=O&&!!E.iridescenceThicknessMap,ge=q&&!!E.sheenColorMap,Ne=q&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,be=!!E.specularColorMap,Fe=!!E.specularIntensityMap,z=W&&!!E.transmissionMap,me=W&&!!E.thicknessMap,_e=!!E.gradientMap,Ae=!!E.alphaMap,fe=E.alphaTest>0,ce=!!E.alphaHash,Re=!!E.extensions,qe=zn;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(qe=i.toneMapping);let C={shaderID:xe,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:Qe,defines:E.defines,customVertexShaderID:Ke,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&te._colorsTexture!==null,instancing:ze,instancingColor:ze&&te.instanceColor!==null,instancingMorph:ze&&te.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:fi,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:pt,envMap:L,envMapMode:L&&pe.mapping,envMapCubeUVHeight:K,aoMap:rt,lightMap:ke,bumpMap:Ve,normalMap:I,displacementMap:p&&D,emissiveMap:M,normalMapObjectSpace:I&&E.normalMapType===El,normalMapTangentSpace:I&&E.normalMapType===Ko,metalnessMap:A,roughnessMap:he,anisotropy:k,anisotropyMap:$,clearcoat:x,clearcoatMap:P,clearcoatNormalMap:N,clearcoatRoughnessMap:ne,dispersion:g,iridescence:O,iridescenceMap:le,iridescenceThicknessMap:ae,sheen:q,sheenColorMap:ge,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:be,specularIntensityMap:Fe,transmission:W,transmissionMap:z,thicknessMap:me,gradientMap:_e,opaque:E.transparent===!1&&E.blending===ui&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:fe,alphaHash:ce,combine:E.combine,mapUv:Ze&&y(E.map.channel),aoMapUv:rt&&y(E.aoMap.channel),lightMapUv:ke&&y(E.lightMap.channel),bumpMapUv:Ve&&y(E.bumpMap.channel),normalMapUv:I&&y(E.normalMap.channel),displacementMapUv:D&&y(E.displacementMap.channel),emissiveMapUv:M&&y(E.emissiveMap.channel),metalnessMapUv:A&&y(E.metalnessMap.channel),roughnessMapUv:he&&y(E.roughnessMap.channel),anisotropyMapUv:$&&y(E.anisotropyMap.channel),clearcoatMapUv:P&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:N&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(E.sheenRoughnessMap.channel),specularMapUv:Pe&&y(E.specularMap.channel),specularColorMapUv:be&&y(E.specularColorMap.channel),specularIntensityMapUv:Fe&&y(E.specularIntensityMap.channel),transmissionMapUv:z&&y(E.transmissionMap.channel),thicknessMapUv:me&&y(E.thicknessMap.channel),alphaMapUv:Ae&&y(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(I||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ie.attributes.uv&&(Ze||Ae),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:M&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return C.vertexUv1s=a.has(1),C.vertexUv2s=a.has(2),C.vertexUv3s=a.has(3),a.clear(),C}function d(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)b.push(B),b.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(T(b,E),w(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function T(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function w(E,b){c.disableAll(),b.supportsVertexTextures&&c.enable(0),b.instancing&&c.enable(1),b.instancingColor&&c.enable(2),b.instancingMorph&&c.enable(3),b.matcap&&c.enable(4),b.envMap&&c.enable(5),b.normalMapObjectSpace&&c.enable(6),b.normalMapTangentSpace&&c.enable(7),b.clearcoat&&c.enable(8),b.iridescence&&c.enable(9),b.alphaTest&&c.enable(10),b.vertexColors&&c.enable(11),b.vertexAlphas&&c.enable(12),b.vertexUv1s&&c.enable(13),b.vertexUv2s&&c.enable(14),b.vertexUv3s&&c.enable(15),b.vertexTangents&&c.enable(16),b.anisotropy&&c.enable(17),b.alphaHash&&c.enable(18),b.batching&&c.enable(19),b.dispersion&&c.enable(20),b.batchingColor&&c.enable(21),b.gradientMap&&c.enable(22),E.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reversedDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),E.push(c.mask)}function S(E){let b=_[E.type],B;if(b){let Y=Sn[b];B=Nl.clone(Y.uniforms)}else B=E.uniforms;return B}function U(E,b){let B;for(let Y=0,te=h.length;Y<te;Y++){let ee=h[Y];if(ee.cacheKey===b){B=ee,++B.usedTimes;break}}return B===void 0&&(B=new rm(i,b,E,r),h.push(B)),B}function R(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function F(E){l.remove(E)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:S,acquireProgram:U,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:V}}function cm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,l){i.get(o)[c]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,_,y,f){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:y,group:f},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=y,d.group=f),e++,d}function c(u,p,m,_,y,f){let d=o(u,p,m,_,y,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,p,m,_,y,f){let d=o(u,p,m,_,y,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function a(u,p){t.length>1&&t.sort(u||lm),n.length>1&&n.sort(p||sh),s.length>1&&s.sort(p||sh)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:a}}function hm(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rh,i.set(n,[o])):s>=r.length?(o=new rh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function um(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function dm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fm=0;function pm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mm(i){let e=new um,t=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new H);let s=new H,r=new vt,o=new vt;function c(a){let h=0,u=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,y=0,f=0,d=0,T=0,w=0,S=0,U=0,R=0,F=0;a.sort(pm);for(let E=0,b=a.length;E<b;E++){let B=a[E],Y=B.color,te=B.intensity,ee=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=Y.r*te,u+=Y.g*te,p+=Y.b*te;else if(B.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(B.sh.coefficients[se],te);F++}else if(B.isDirectionalLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let pe=B.shadow,K=t.get(B);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=B.shadow.matrix,T++}n.directional[m]=se,m++}else if(B.isSpotLight){let se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(Y).multiplyScalar(te),se.distance=ee,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,n.spot[y]=se;let pe=B.shadow;if(B.map&&(n.spotLightMap[U]=B.map,U++,pe.updateMatrices(B),B.castShadow&&R++),n.spotLightMatrix[y]=pe.matrix,B.castShadow){let K=t.get(B);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=ie,S++}y++}else if(B.isRectAreaLight){let se=e.get(B);se.color.copy(Y).multiplyScalar(te),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),n.rectArea[f]=se,f++}else if(B.isPointLight){let se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){let pe=B.shadow,K=t.get(B);K.shadowIntensity=pe.intensity,K.shadowBias=pe.bias,K.shadowNormalBias=pe.normalBias,K.shadowRadius=pe.radius,K.shadowMapSize=pe.mapSize,K.shadowCameraNear=pe.camera.near,K.shadowCameraFar=pe.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=B.shadow.matrix,w++}n.point[_]=se,_++}else if(B.isHemisphereLight){let se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(te),se.groundColor.copy(B.groundColor).multiplyScalar(te),n.hemi[d]=se,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let V=n.hash;(V.directionalLength!==m||V.pointLength!==_||V.spotLength!==y||V.rectAreaLength!==f||V.hemiLength!==d||V.numDirectionalShadows!==T||V.numPointShadows!==w||V.numSpotShadows!==S||V.numSpotMaps!==U||V.numLightProbes!==F)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=f,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=F,V.directionalLength=m,V.pointLength=_,V.spotLength=y,V.rectAreaLength=f,V.hemiLength=d,V.numDirectionalShadows=T,V.numPointShadows=w,V.numSpotShadows=S,V.numSpotMaps=U,V.numLightProbes=F,n.version=fm++)}function l(a,h){let u=0,p=0,m=0,_=0,y=0,f=h.matrixWorldInverse;for(let d=0,T=a.length;d<T;d++){let w=a[d];if(w.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(w.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(w.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(w.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),y++}}}return{setup:c,setupView:l,state:n}}function ah(i){let e=new mm(i),t=[],n=[];function s(h){a.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function c(){e.setup(t)}function l(h){e.setupView(t,h)}let a={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:a,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function gm(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),c;return o===void 0?(c=new ah(i),e.set(s,[c])):r>=o.length?(c=new ah(i),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}var xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
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
}`;function vm(i,e,t){let n=new Ji,s=new Be,r=new Be,o=new xt,c=new Br({depthPacking:Sl}),l=new zr,a={},h=t.maxTextureSize,u={[Un]:kt,[kt]:Un,[Mn]:Mn},p=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:xm,fragmentShader:_m}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let _=new Jt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new zt(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let d=this.type;this.render=function(R,F,V){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Bn),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let te=d!==yn&&this.type===yn,ee=d===yn&&this.type!==yn;for(let ie=0,se=R.length;ie<se;ie++){let pe=R[ie],K=pe.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let xe=K.getFrameExtents();if(s.multiply(xe),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,K.mapSize.y=r.y)),K.map===null||te===!0||ee===!0){let Le=this.type!==yn?{minFilter:tn,magFilter:tn}:{};K.map!==null&&K.map.dispose(),K.map=new _n(s.x,s.y,Le),K.map.texture.name=pe.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let ve=K.getViewportCount();for(let Le=0;Le<ve;Le++){let We=K.getViewport(Le);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),Y.viewport(o),K.updateMatrices(pe,Le),n=K.getFrustum(),S(F,V,K.camera,pe,this.type)}K.isPointLightShadow!==!0&&this.type===yn&&T(K,V),K.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(E,b,B)};function T(R,F){let V=e.update(y);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _n(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,V,p,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,V,m,y,null)}function w(R,F,V,E){let b=null,B=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)b=B;else if(b=V.isPointLight===!0?l:c,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let Y=b.uuid,te=F.uuid,ee=a[Y];ee===void 0&&(ee={},a[Y]=ee);let ie=ee[te];ie===void 0&&(ie=b.clone(),ee[te]=ie,F.addEventListener("dispose",U)),b=ie}if(b.visible=F.visible,b.wireframe=F.wireframe,E===yn?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:u[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Y=i.properties.get(b);Y.light=V}return b}function S(R,F,V,E,b){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);let te=e.update(R),ee=R.material;if(Array.isArray(ee)){let ie=te.groups;for(let se=0,pe=ie.length;se<pe;se++){let K=ie[se],xe=ee[K.materialIndex];if(xe&&xe.visible){let ve=w(R,xe,E,b);R.onBeforeShadow(i,R,F,V,te,ve,K),i.renderBufferDirect(V,null,te,ve,R,K),R.onAfterShadow(i,R,F,V,te,ve,K)}}}else if(ee.visible){let ie=w(R,ee,E,b);R.onBeforeShadow(i,R,F,V,te,ie,null),i.renderBufferDirect(V,null,te,ie,R,null),R.onAfterShadow(i,R,F,V,te,ie,null)}}let Y=R.children;for(let te=0,ee=Y.length;te<ee;te++)S(Y[te],F,V,E,b)}function U(R){R.target.removeEventListener("dispose",U);for(let V in a){let E=a[V],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var ym={[jr]:Kr,[Qr]:na,[ea]:ia,[di]:ta,[Kr]:jr,[na]:Qr,[ia]:ea,[ta]:di};function Mm(i,e){function t(){let z=!1,me=new xt,_e=null,Ae=new xt(0,0,0,0);return{setMask:function(fe){_e!==fe&&!z&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){z=fe},setClear:function(fe,ce,Re,qe,C){C===!0&&(fe*=qe,ce*=qe,Re*=qe),me.set(fe,ce,Re,qe),Ae.equals(me)===!1&&(i.clearColor(fe,ce,Re,qe),Ae.copy(me))},reset:function(){z=!1,_e=null,Ae.set(-1,0,0,0)}}}function n(){let z=!1,me=!1,_e=null,Ae=null,fe=null;return{setReversed:function(ce){if(me!==ce){let Re=e.get("EXT_clip_control");ce?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),me=ce;let qe=fe;fe=null,this.setClear(qe)}},getReversed:function(){return me},setTest:function(ce){ce?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ce){_e!==ce&&!z&&(i.depthMask(ce),_e=ce)},setFunc:function(ce){if(me&&(ce=ym[ce]),Ae!==ce){switch(ce){case jr:i.depthFunc(i.NEVER);break;case Kr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ce}},setLocked:function(ce){z=ce},setClear:function(ce){fe!==ce&&(me&&(ce=1-ce),i.clearDepth(ce),fe=ce)},reset:function(){z=!1,_e=null,Ae=null,fe=null,me=!1}}}function s(){let z=!1,me=null,_e=null,Ae=null,fe=null,ce=null,Re=null,qe=null,C=null;return{setTest:function(j){z||(j?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(j){me!==j&&!z&&(i.stencilMask(j),me=j)},setFunc:function(j,Se,ye){(_e!==j||Ae!==Se||fe!==ye)&&(i.stencilFunc(j,Se,ye),_e=j,Ae=Se,fe=ye)},setOp:function(j,Se,ye){(ce!==j||Re!==Se||qe!==ye)&&(i.stencilOp(j,Se,ye),ce=j,Re=Se,qe=ye)},setLocked:function(j){z=j},setClear:function(j){C!==j&&(i.clearStencil(j),C=j)},reset:function(){z=!1,me=null,_e=null,Ae=null,fe=null,ce=null,Re=null,qe=null,C=null}}}let r=new t,o=new n,c=new s,l=new WeakMap,a=new WeakMap,h={},u={},p=new WeakMap,m=[],_=null,y=!1,f=null,d=null,T=null,w=null,S=null,U=null,R=null,F=new Je(0,0,0),V=0,E=!1,b=null,B=null,Y=null,te=null,ee=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,pe=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=pe>=1):K.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=pe>=2);let xe=null,ve={},Le=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),$e=new xt().fromArray(Le),Qe=new xt().fromArray(We);function Ke(z,me,_e,Ae){let fe=new Uint8Array(4),ce=i.createTexture();i.bindTexture(z,ce),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<_e;Re++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(me+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ce}let oe={};oe[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),re(i.DEPTH_TEST),o.setFunc(di),Ve(!1),I(Oo),re(i.CULL_FACE),rt(Bn);function re(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Te(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ze(z,me){return u[z]!==me?(i.bindFramebuffer(z,me),u[z]=me,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Ue(z,me){let _e=m,Ae=!1;if(z){_e=p.get(me),_e===void 0&&(_e=[],p.set(me,_e));let fe=z.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Re=fe.length;ce<Re;ce++)_e[ce]=i.COLOR_ATTACHMENT0+ce;_e.length=fe.length,Ae=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(_e)}function Ze(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let pt={[jn]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};pt[Kc]=i.MIN,pt[Qc]=i.MAX;let L={[el]:i.ZERO,[tl]:i.ONE,[nl]:i.SRC_COLOR,[Er]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[sl]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[ol]:i.ONE_MINUS_DST_COLOR,[rl]:i.ONE_MINUS_DST_ALPHA,[ll]:i.CONSTANT_COLOR,[hl]:i.ONE_MINUS_CONSTANT_COLOR,[ul]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(z,me,_e,Ae,fe,ce,Re,qe,C,j){if(z===Bn){y===!0&&(Te(i.BLEND),y=!1);return}if(y===!1&&(re(i.BLEND),y=!0),z!==Zc){if(z!==f||j!==E){if((d!==jn||S!==jn)&&(i.blendEquation(i.FUNC_ADD),d=jn,S=jn),j)switch(z){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,w=null,U=null,R=null,F.set(0,0,0),V=0,f=z,E=j}return}fe=fe||me,ce=ce||_e,Re=Re||Ae,(me!==d||fe!==S)&&(i.blendEquationSeparate(pt[me],pt[fe]),d=me,S=fe),(_e!==T||Ae!==w||ce!==U||Re!==R)&&(i.blendFuncSeparate(L[_e],L[Ae],L[ce],L[Re]),T=_e,w=Ae,U=ce,R=Re),(qe.equals(F)===!1||C!==V)&&(i.blendColor(qe.r,qe.g,qe.b,C),F.copy(qe),V=C),f=z,E=!1}function ke(z,me){z.side===Mn?Te(i.CULL_FACE):re(i.CULL_FACE);let _e=z.side===kt;me&&(_e=!_e),Ve(_e),z.blending===ui&&z.transparent===!1?rt(Bn):rt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ae=z.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),M(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function I(z){z!==$c?(re(i.CULL_FACE),z!==B&&(z===Oo?i.cullFace(i.BACK):z===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),B=z}function D(z){z!==Y&&(se&&i.lineWidth(z),Y=z)}function M(z,me,_e){z?(re(i.POLYGON_OFFSET_FILL),(te!==me||ee!==_e)&&(i.polygonOffset(me,_e),te=me,ee=_e)):Te(i.POLYGON_OFFSET_FILL)}function A(z){z?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function he(z){z===void 0&&(z=i.TEXTURE0+ie-1),xe!==z&&(i.activeTexture(z),xe=z)}function k(z,me,_e){_e===void 0&&(xe===null?_e=i.TEXTURE0+ie-1:_e=xe);let Ae=ve[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},ve[_e]=Ae),(Ae.type!==z||Ae.texture!==me)&&(xe!==_e&&(i.activeTexture(_e),xe=_e),i.bindTexture(z,me||oe[z]),Ae.type=z,Ae.texture=me)}function x(){let z=ve[xe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function P(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(z){$e.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),$e.copy(z))}function Ne(z){Qe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function Pe(z,me){let _e=a.get(me);_e===void 0&&(_e=new WeakMap,a.set(me,_e));let Ae=_e.get(z);Ae===void 0&&(Ae=i.getUniformBlockIndex(me,z.name),_e.set(z,Ae))}function be(z,me){let Ae=a.get(me).get(z);l.get(me)!==Ae&&(i.uniformBlockBinding(me,Ae,z.__bindingPointIndex),l.set(me,Ae))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},xe=null,ve={},u={},p=new WeakMap,m=[],_=null,y=!1,f=null,d=null,T=null,w=null,S=null,U=null,R=null,F=new Je(0,0,0),V=0,E=!1,b=null,B=null,Y=null,te=null,ee=null,$e.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:re,disable:Te,bindFramebuffer:ze,drawBuffers:Ue,useProgram:Ze,setBlending:rt,setMaterial:ke,setFlipSided:Ve,setCullFace:I,setLineWidth:D,setPolygonOffset:M,setScissorTest:A,activeTexture:he,bindTexture:k,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:le,texImage3D:ae,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:N,texStorage3D:ne,texSubImage2D:q,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:P,scissor:ge,viewport:Ne,reset:Fe}}function bm(i,e,t,n,s,r,o){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Be,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return m?new OffscreenCanvas(x,g):Ts("canvas")}function y(x,g,O){let q=1,W=k(x);if((W.width>O||W.height>O)&&(q=O/Math.max(W.width,W.height)),q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let $=Math.floor(q*W.width),P=Math.floor(q*W.height);u===void 0&&(u=_($,P));let N=g?_($,P):u;return N.width=$,N.height=P,N.getContext("2d").drawImage(x,0,0,$,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+$+"x"+P+")."),N}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function f(x){return x.generateMipmaps}function d(x){i.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(x,g,O,q,W=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let $=g;if(g===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),g===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let P=W?Ss:it.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=P===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(x,g){let O;return x?g===null||g===ni||g===rs?O=i.DEPTH24_STENCIL8:g===bn?O=i.DEPTH32F_STENCIL8:g===is&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ni||g===rs?O=i.DEPTH_COMPONENT24:g===bn?O=i.DEPTH_COMPONENT32F:g===is&&(O=i.DEPTH_COMPONENT16),O}function U(x,g){return f(x)===!0||x.isFramebufferTexture&&x.minFilter!==tn&&x.minFilter!==ln?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function R(x){let g=x.target;g.removeEventListener("dispose",R),V(g),g.isVideoTexture&&h.delete(g)}function F(x){let g=x.target;g.removeEventListener("dispose",F),b(g)}function V(x){let g=n.get(x);if(g.__webglInit===void 0)return;let O=x.source,q=p.get(O);if(q){let W=q[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&E(x),Object.keys(q).length===0&&p.delete(O)}n.remove(x)}function E(x){let g=n.get(x);i.deleteTexture(g.__webglTexture);let O=x.source,q=p.get(O);delete q[g.__cacheKey],o.memory.textures--}function b(x){let g=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let W=0;W<g.__webglFramebuffer[q].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[q][W]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let O=x.textures;for(let q=0,W=O.length;q<W;q++){let $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(x)}let B=0;function Y(){B=0}function te(){let x=B;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),B+=1,x}function ee(x){let g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function ie(x,g){let O=n.get(x);if(x.isVideoTexture&&A(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&O.__version!==x.version){let q=x.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(O,x,g);return}}else x.isExternalTexture&&(O.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function se(x,g){let O=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){oe(O,x,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function pe(x,g){let O=n.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){oe(O,x,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function K(x,g){let O=n.get(x);if(x.version>0&&O.__version!==x.version){re(O,x,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}let xe={[wr]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},ve={[tn]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Le={[Tl]:i.NEVER,[Pl]:i.ALWAYS,[wl]:i.LESS,[Qo]:i.LEQUAL,[Al]:i.EQUAL,[Il]:i.GEQUAL,[Cl]:i.GREATER,[Rl]:i.NOTEQUAL};function We(x,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ln||g.magFilter===aa||g.magFilter===Ws||g.magFilter===ti||g.minFilter===ln||g.minFilter===aa||g.minFilter===Ws||g.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,xe[g.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,xe[g.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,xe[g.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,ve[g.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,Le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===tn||g.minFilter!==Ws&&g.minFilter!==ti||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $e(x,g){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",R));let q=g.source,W=p.get(q);W===void 0&&(W={},p.set(q,W));let $=ee(g);if($!==x.__cacheKey){W[$]===void 0&&(W[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),W[$].usedTimes++;let P=W[x.__cacheKey];P!==void 0&&(W[x.__cacheKey].usedTimes--,P.usedTimes===0&&E(g)),x.__cacheKey=$,x.__webglTexture=W[$].texture}return O}function Qe(x,g,O){return Math.floor(Math.floor(x/O)/g)}function Ke(x,g,O,q){let $=x.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,q,g.data);else{$.sort((ae,ge)=>ae.start-ge.start);let P=0;for(let ae=1;ae<$.length;ae++){let ge=$[P],Ne=$[ae],Pe=ge.start+ge.count,be=Qe(Ne.start,g.width,4),Fe=Qe(ge.start,g.width,4);Ne.start<=Pe+1&&be===Fe&&Qe(Ne.start+Ne.count-1,g.width,4)===be?ge.count=Math.max(ge.count,Ne.start+Ne.count-ge.start):(++P,$[P]=Ne)}$.length=P+1;let N=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ae=0,ge=$.length;ae<ge;ae++){let Ne=$[ae],Pe=Math.floor(Ne.start/4),be=Math.ceil(Ne.count/4),Fe=Pe%g.width,z=Math.floor(Pe/g.width),me=be,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Fe,z,me,_e,O,q,g.data)}x.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,N),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function oe(x,g,O){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let W=$e(x,g),$=g.source;t.bindTexture(q,x.__webglTexture,i.TEXTURE0+O);let P=n.get($);if($.version!==P.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let N=it.getPrimaries(it.workingColorSpace),ne=g.colorSpace===kn?null:it.getPrimaries(g.colorSpace),le=g.colorSpace===kn||N===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ae=y(g.image,!1,s.maxTextureSize);ae=he(g,ae);let ge=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),Pe=w(g.internalFormat,ge,Ne,g.colorSpace,g.isVideoTexture);We(q,g);let be,Fe=g.mipmaps,z=g.isVideoTexture!==!0,me=P.__version===void 0||W===!0,_e=$.dataReady,Ae=U(g,ae);if(g.isDepthTexture)Pe=S(g.format===as,g.type),me&&(z?t.texStorage2D(i.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,ge,Ne,null));else if(g.isDataTexture)if(Fe.length>0){z&&me&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Fe[0].width,Fe[0].height);for(let fe=0,ce=Fe.length;fe<ce;fe++)be=Fe[fe],z?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,ge,Ne,be.data):t.texImage2D(i.TEXTURE_2D,fe,Pe,be.width,be.height,0,ge,Ne,be.data);g.generateMipmaps=!1}else z?(me&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ae.width,ae.height),_e&&Ke(g,ae,ge,Ne)):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,ge,Ne,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,Fe[0].width,Fe[0].height,ae.depth);for(let fe=0,ce=Fe.length;fe<ce;fe++)if(be=Fe[fe],g.format!==nn)if(ge!==null)if(z){if(_e)if(g.layerUpdates.size>0){let Re=rc(be.width,be.height,g.format,g.type);for(let qe of g.layerUpdates){let C=be.data.subarray(qe*Re/be.data.BYTES_PER_ELEMENT,(qe+1)*Re/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,qe,be.width,be.height,1,ge,C)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ae.depth,ge,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Pe,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,ae.depth,ge,Ne,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Pe,be.width,be.height,ae.depth,0,ge,Ne,be.data)}else{z&&me&&t.texStorage2D(i.TEXTURE_2D,Ae,Pe,Fe[0].width,Fe[0].height);for(let fe=0,ce=Fe.length;fe<ce;fe++)be=Fe[fe],g.format!==nn?ge!==null?z?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,ge,Ne,be.data):t.texImage2D(i.TEXTURE_2D,fe,Pe,be.width,be.height,0,ge,Ne,be.data)}else if(g.isDataArrayTexture)if(z){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Pe,ae.width,ae.height,ae.depth),_e)if(g.layerUpdates.size>0){let fe=rc(ae.width,ae.height,g.format,g.type);for(let ce of g.layerUpdates){let Re=ae.data.subarray(ce*fe/ae.data.BYTES_PER_ELEMENT,(ce+1)*fe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ae.width,ae.height,1,ge,Ne,Re)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,Ne,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,ge,Ne,ae.data);else if(g.isData3DTexture)z?(me&&t.texStorage3D(i.TEXTURE_3D,Ae,Pe,ae.width,ae.height,ae.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,Ne,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,ge,Ne,ae.data);else if(g.isFramebufferTexture){if(me)if(z)t.texStorage2D(i.TEXTURE_2D,Ae,Pe,ae.width,ae.height);else{let fe=ae.width,ce=ae.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(i.TEXTURE_2D,Re,Pe,fe,ce,0,ge,Ne,null),fe>>=1,ce>>=1}}else if(Fe.length>0){if(z&&me){let fe=k(Fe[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,fe.width,fe.height)}for(let fe=0,ce=Fe.length;fe<ce;fe++)be=Fe[fe],z?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,ge,Ne,be):t.texImage2D(i.TEXTURE_2D,fe,Pe,ge,Ne,be);g.generateMipmaps=!1}else if(z){if(me){let fe=k(ae);t.texStorage2D(i.TEXTURE_2D,Ae,Pe,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ne,ae)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ge,Ne,ae);f(g)&&d(q),P.__version=$.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function re(x,g,O){if(g.image.length!==6)return;let q=$e(x,g),W=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+O);let $=n.get(W);if(W.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+O);let P=it.getPrimaries(it.workingColorSpace),N=g.colorSpace===kn?null:it.getPrimaries(g.colorSpace),ne=g.colorSpace===kn||P===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let le=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let ce=0;ce<6;ce++)!le&&!ae?ge[ce]=y(g.image[ce],!0,s.maxCubemapSize):ge[ce]=ae?g.image[ce].image:g.image[ce],ge[ce]=he(g,ge[ce]);let Ne=ge[0],Pe=r.convert(g.format,g.colorSpace),be=r.convert(g.type),Fe=w(g.internalFormat,Pe,be,g.colorSpace),z=g.isVideoTexture!==!0,me=$.__version===void 0||q===!0,_e=W.dataReady,Ae=U(g,Ne);We(i.TEXTURE_CUBE_MAP,g);let fe;if(le){z&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Fe,Ne.width,Ne.height);for(let ce=0;ce<6;ce++){fe=ge[ce].mipmaps;for(let Re=0;Re<fe.length;Re++){let qe=fe[Re];g.format!==nn?Pe!==null?z?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Fe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,qe.width,qe.height,Pe,be,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Fe,qe.width,qe.height,0,Pe,be,qe.data)}}}else{if(fe=g.mipmaps,z&&me){fe.length>0&&Ae++;let ce=k(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Fe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ae){z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ge[ce].width,ge[ce].height,Pe,be,ge[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Fe,ge[ce].width,ge[ce].height,0,Pe,be,ge[ce].data);for(let Re=0;Re<fe.length;Re++){let C=fe[Re].image[ce].image;z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,C.width,C.height,Pe,be,C.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Fe,C.width,C.height,0,Pe,be,C.data)}}else{z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,be,ge[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Fe,Pe,be,ge[ce]);for(let Re=0;Re<fe.length;Re++){let qe=fe[Re];z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,Pe,be,qe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Fe,Pe,be,qe.image[ce])}}}f(g)&&d(i.TEXTURE_CUBE_MAP),$.__version=W.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Te(x,g,O,q,W,$){let P=r.convert(O.format,O.colorSpace),N=r.convert(O.type),ne=w(O.internalFormat,P,N,O.colorSpace),le=n.get(g),ae=n.get(O);if(ae.__renderTarget=g,!le.__hasExternalTextures){let ge=Math.max(1,g.width>>$),Ne=Math.max(1,g.height>>$);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,$,ne,ge,Ne,g.depth,0,P,N,null):t.texImage2D(W,$,ne,ge,Ne,0,P,N,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),M(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,W,ae.__webglTexture,0,D(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,W,ae.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(x,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,x),g.depthBuffer){let q=g.depthTexture,W=q&&q.isDepthTexture?q.type:null,$=S(g.stencilBuffer,W),P=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=D(g);M(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,$,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,x)}else{let q=g.textures;for(let W=0;W<q.length;W++){let $=q[W],P=r.convert($.format,$.colorSpace),N=r.convert($.type),ne=w($.internalFormat,P,N,$.colorSpace),le=D(g);O&&M(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ne,g.width,g.height):M(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);let W=q.__webglTexture,$=D(g);if(g.depthTexture.format===Gi)M(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(g.depthTexture.format===as)M(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ze(x){let g=n.get(x),O=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){let q=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",W)};q.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=q}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let q=x.texture.mipmaps;q&&q.length>0?Ue(g.__webglFramebuffer[0],x):Ue(g.__webglFramebuffer,x)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),ze(g.__webglDepthbuffer[q],x,!1);else{let W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,$)}}else{let q=x.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ze(g.__webglDepthbuffer,x,!1);else{let W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(x,g,O){let q=n.get(x);g!==void 0&&Te(q.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ze(x)}function L(x){let g=x.texture,O=n.get(x),q=n.get(g);x.addEventListener("dispose",F);let W=x.textures,$=x.isWebGLCubeRenderTarget===!0,P=W.length>1;if(P||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let N=0;N<6;N++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[N]=[];for(let ne=0;ne<g.mipmaps.length;ne++)O.__webglFramebuffer[N][ne]=i.createFramebuffer()}else O.__webglFramebuffer[N]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let N=0;N<g.mipmaps.length;N++)O.__webglFramebuffer[N]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(P)for(let N=0,ne=W.length;N<ne;N++){let le=n.get(W[N]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&M(x)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let N=0;N<W.length;N++){let ne=W[N];O.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[N]);let le=r.convert(ne.format,ne.colorSpace),ae=r.convert(ne.type),ge=w(ne.internalFormat,le,ae,ne.colorSpace,x.isXRRenderTarget===!0),Ne=D(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ge,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,O.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(O.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),We(i.TEXTURE_CUBE_MAP,g);for(let N=0;N<6;N++)if(g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Te(O.__webglFramebuffer[N][ne],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne);else Te(O.__webglFramebuffer[N],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);f(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){for(let N=0,ne=W.length;N<ne;N++){let le=W[N],ae=n.get(le),ge=i.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ge=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),We(ge,le),Te(O.__webglFramebuffer,x,le,i.COLOR_ATTACHMENT0+N,ge,0),f(le)&&d(ge)}t.unbindTexture()}else{let N=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(N=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,q.__webglTexture),We(N,g),g.mipmaps&&g.mipmaps.length>0)for(let ne=0;ne<g.mipmaps.length;ne++)Te(O.__webglFramebuffer[ne],x,g,i.COLOR_ATTACHMENT0,N,ne);else Te(O.__webglFramebuffer,x,g,i.COLOR_ATTACHMENT0,N,0);f(g)&&d(N),t.unbindTexture()}x.depthBuffer&&Ze(x)}function rt(x){let g=x.textures;for(let O=0,q=g.length;O<q;O++){let W=g[O];if(f(W)){let $=T(x),P=n.get(W).__webglTexture;t.bindTexture($,P),d($),t.unbindTexture()}}}let ke=[],Ve=[];function I(x){if(x.samples>0){if(M(x)===!1){let g=x.textures,O=x.width,q=x.height,W=i.COLOR_BUFFER_BIT,$=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=n.get(x),N=g.length>1;if(N)for(let le=0;le<g.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer);let ne=x.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let le=0;le<g.length;le++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),N){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,P.__webglColorRenderbuffer[le]);let ae=n.get(g[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,W,i.NEAREST),l===!0&&(ke.length=0,Ve.length=0,ke.push(i.COLOR_ATTACHMENT0+le),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ke.push($),Ve.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let le=0;le<g.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,P.__webglColorRenderbuffer[le]);let ae=n.get(g[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let g=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function D(x){return Math.min(s.maxSamples,x.samples)}function M(x){let g=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function A(x){let g=o.render.frame;h.get(x)!==g&&(h.set(x,g),x.update())}function he(x,g){let O=x.colorSpace,q=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==fi&&O!==kn&&(it.getTransfer(O)===at?(q!==nn||W!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function k(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(a.width=x.naturalWidth||x.width,a.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(a.width=x.displayWidth,a.height=x.displayHeight):(a.width=x.width,a.height=x.height),a}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=se,this.setTexture3D=pe,this.setTextureCube=K,this.rebindTextures=pt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=M}function Sm(i,e){function t(n,s=kn){let r,o=it.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===Yo)return i.ALPHA;if(n===Zo)return i.RGB;if(n===nn)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===jo)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===$s||n===Ys)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ma||n===ba||n===Sa||n===Ea||n===Ta||n===wa||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Na||n===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tm=`
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

}`,_c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:Em,fragmentShader:Tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,o=null,c="local-floor",l=1,a=null,h=null,u=null,p=null,m=null,_=null,y=typeof XRWebGLBinding<"u",f=new _c,d={},T=t.getContextAttributes(),w=null,S=null,U=[],R=[],F=new Be,V=null,E=new Pt;E.viewport=new xt;let b=new Pt;b.viewport=new xt;let B=[E,b],Y=new Zr,te=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getTargetRaySpace()},this.getControllerGrip=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getGripSpace()},this.getHand=function(oe){let re=U[oe];return re===void 0&&(re=new $i,U[oe]=re),re.getHandSpace()};function ie(oe){let re=R.indexOf(oe.inputSource);if(re===-1)return;let Te=U[re];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,a||o),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function se(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",pe);for(let oe=0;oe<U.length;oe++){let re=R[oe];re!==null&&(R[oe]=null,U[oe].disconnect(re))}te=null,ee=null,f.reset();for(let oe in d)delete d[oe];e.setRenderTarget(w),m=null,p=null,u=null,s=null,S=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(oe){a=oe},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",se),s.addEventListener("inputsourceschange",pe),T.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(F),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ze=null,Ue=null;T.depth&&(Ue=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=T.stencil?as:Gi,ze=T.stencil?rs:ni);let Ze={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ze),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new _n(p.textureWidth,p.textureHeight,{format:nn,type:dn,depthTexture:new Us(p.textureWidth,p.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Te={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new _n(m.framebufferWidth,m.framebufferHeight,{format:nn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),a=null,o=await s.requestReferenceSpace(c),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function pe(oe){for(let re=0;re<oe.removed.length;re++){let Te=oe.removed[re],ze=R.indexOf(Te);ze>=0&&(R[ze]=null,U[ze].disconnect(Te))}for(let re=0;re<oe.added.length;re++){let Te=oe.added[re],ze=R.indexOf(Te);if(ze===-1){for(let Ze=0;Ze<U.length;Ze++)if(Ze>=R.length){R.push(Te),ze=Ze;break}else if(R[Ze]===null){R[Ze]=Te,ze=Ze;break}if(ze===-1)break}let Ue=U[ze];Ue&&Ue.connect(Te)}}let K=new H,xe=new H;function ve(oe,re,Te){K.setFromMatrixPosition(re.matrixWorld),xe.setFromMatrixPosition(Te.matrixWorld);let ze=K.distanceTo(xe),Ue=re.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,pt=Ue[14]/(Ue[10]-1),L=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],ke=(Ue[9]-1)/Ue[5],Ve=(Ue[8]-1)/Ue[0],I=(Ze[8]+1)/Ze[0],D=pt*Ve,M=pt*I,A=ze/(-Ve+I),he=A*-Ve;if(re.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(he),oe.translateZ(A),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ue[10]===-1)oe.projectionMatrix.copy(re.projectionMatrix),oe.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let k=pt+A,x=L+A,g=D-he,O=M+(ze-he),q=rt*L/x*k,W=ke*L/x*k;oe.projectionMatrix.makePerspective(g,O,q,W,k,x),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Le(oe,re){re===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(re.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let re=oe.near,Te=oe.far;f.texture!==null&&(f.depthNear>0&&(re=f.depthNear),f.depthFar>0&&(Te=f.depthFar)),Y.near=b.near=E.near=re,Y.far=b.far=E.far=Te,(te!==Y.near||ee!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),te=Y.near,ee=Y.far),Y.layers.mask=oe.layers.mask|6,E.layers.mask=Y.layers.mask&3,b.layers.mask=Y.layers.mask&5;let ze=oe.parent,Ue=Y.cameras;Le(Y,ze);for(let Ze=0;Ze<Ue.length;Ze++)Le(Ue[Ze],ze);Ue.length===2?ve(Y,E,b):Y.projectionMatrix.copy(E.projectionMatrix),We(oe,Y,ze)};function We(oe,re,Te){Te===null?oe.matrix.copy(re.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(re.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(re.projectionMatrix),oe.projectionMatrixInverse.copy(re.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ir*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(oe){l=oe,p!==null&&(p.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Y)},this.getCameraTexture=function(oe){return d[oe]};let $e=null;function Qe(oe,re){if(h=re.getViewerPose(a||o),_=re,h!==null){let Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ze=!1;Te.length!==Y.cameras.length&&(Y.cameras.length=0,ze=!0);for(let L=0;L<Te.length;L++){let rt=Te[L],ke=null;if(m!==null)ke=m.getViewport(rt);else{let I=u.getViewSubImage(p,rt);ke=I.viewport,L===0&&(e.setRenderTargetTextures(S,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(S))}let Ve=B[L];Ve===void 0&&(Ve=new Pt,Ve.layers.enable(L),Ve.viewport=new xt,B[L]=Ve),Ve.matrix.fromArray(rt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(rt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ke.x,ke.y,ke.width,ke.height),L===0&&(Y.matrix.copy(Ve.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ze===!0&&Y.cameras.push(Ve)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let L=u.getDepthInformation(Te[0]);L&&L.isValid&&L.texture&&f.init(L,s.renderState)}if(Ue&&Ue.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Te.length;L++){let rt=Te[L].camera;if(rt){let ke=d[rt];ke||(ke=new Ns,d[rt]=ke);let Ve=u.getCameraImage(rt);ke.sourceTexture=Ve}}}}for(let Te=0;Te<U.length;Te++){let ze=R[Te],Ue=U[Te];ze!==null&&Ue!==void 0&&Ue.update(ze,re,a||o)}$e&&$e(oe,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}let Ke=new oh;Ke.setAnimationLoop(Qe),this.setAnimationLoop=function(oe){$e=oe},this.dispose=function(){}}},Mi=new hn,wm=new vt;function Am(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,nc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,T,w,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),y(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&c(f,d)):d.isPointsMaterial?l(f,d,T,w):d.isSpriteMaterial?a(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===kt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===kt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let T=e.get(d),w=T.envMap,S=T.envMapRotation;w&&(f.envMap.value=w,Mi.copy(S),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),f.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(Mi)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function c(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,T,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*T,f.scale.value=w*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,T){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function y(f,d){let T=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,e,t,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){let S=w.program;n.uniformBlockBinding(T,S)}function a(T,w){let S=s[T.id];S===void 0&&(_(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",f));let U=w.program;n.updateUBOMapping(T,U);let R=e.render.frame;r[T.id]!==R&&(p(T),r[T.id]=R)}function h(T){let w=u();T.__bindingPointIndex=w;let S=i.createBuffer(),U=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let T=0;T<c;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let w=s[T.id],S=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,F=S.length;R<F;R++){let V=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,b=V.length;E<b;E++){let B=V[E];if(m(B,R,E,U)===!0){let Y=B.__offset,te=Array.isArray(B.value)?B.value:[B.value],ee=0;for(let ie=0;ie<te.length;ie++){let se=te[ie],pe=y(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,Y+ee,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,ee),ee+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,w,S,U){let R=T.value,F=w+"_"+S;if(U[F]===void 0)return typeof R=="number"||typeof R=="boolean"?U[F]=R:U[F]=R.clone(),!0;{let V=U[F];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return U[F]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function _(T){let w=T.uniforms,S=0,U=16;for(let F=0,V=w.length;F<V;F++){let E=Array.isArray(w[F])?w[F]:[w[F]];for(let b=0,B=E.length;b<B;b++){let Y=E[b],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let ee=0,ie=te.length;ee<ie;ee++){let se=te[ee],pe=y(se),K=S%U,xe=K%pe.boundary,ve=K+xe;S+=xe,ve!==0&&U-ve<pe.storage&&(S+=U-ve),Y.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=pe.storage}}}let R=S%U;return R>0&&(S+=U-R),T.__size=S,T.__cache={},this}function y(T){let w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function f(T){let w=T.target;w.removeEventListener("dispose",f);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:a,dispose:d}}var Js=class{constructor(e={}){let{canvas:t=Ll(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:a=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),y=new Int32Array(4),f=null,d=null,T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,U=!1;this._outputColorSpace=Et;let R=0,F=0,V=null,E=-1,b=null,B=new xt,Y=new xt,te=null,ee=new Je(0),ie=0,se=t.width,pe=t.height,K=1,xe=null,ve=null,Le=new xt(0,0,se,pe),We=new xt(0,0,se,pe),$e=!1,Qe=new Ji,Ke=!1,oe=!1,re=new vt,Te=new H,ze=new xt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function pt(){return V===null?K:1}let L=n;function rt(v,G){return t.getContext(v,G)}try{let v={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){let G="webgl2";if(L=rt(G,v),L===null)throw rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ke,Ve,I,D,M,A,he,k,x,g,O,q,W,$,P,N,ne,le,ae,ge,Ne,Pe,be,Fe;function z(){ke=new qf(L),ke.init(),Pe=new Sm(L,ke),Ve=new zf(L,ke,e,Pe),I=new Mm(L,ke),Ve.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),D=new Zf(L),M=new cm,A=new bm(L,ke,I,M,Ve,Pe,D),he=new Vf(S),k=new Xf(S),x=new eu(L),be=new Of(L,x),g=new $f(L,x,D,be),O=new jf(L,g,x,D),ae=new Jf(L,Ve,A),N=new kf(M),q=new om(S,he,k,ke,Ve,be,N),W=new Am(S,M),$=new hm,P=new gm(ke),le=new Ff(S,he,k,I,O,m,l),ne=new vm(S,O,Ve),Fe=new Cm(L,D,Ve,I),ge=new Bf(L,ke,D),Ne=new Yf(L,ke,D),D.programs=q.programs,S.capabilities=Ve,S.extensions=ke,S.properties=M,S.renderLists=$,S.shadowMap=ne,S.state=I,S.info=D}z();let me=new vc(S,L);this.xr=me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=ke.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ke.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(se,pe,!1))},this.getSize=function(v){return v.set(se,pe)},this.setSize=function(v,G,J=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=v,pe=G,t.width=Math.floor(v*K),t.height=Math.floor(G*K),J===!0&&(t.style.width=v+"px",t.style.height=G+"px"),this.setViewport(0,0,v,G)},this.getDrawingBufferSize=function(v){return v.set(se*K,pe*K).floor()},this.setDrawingBufferSize=function(v,G,J){se=v,pe=G,K=J,t.width=Math.floor(v*J),t.height=Math.floor(G*J),this.setViewport(0,0,v,G)},this.getCurrentViewport=function(v){return v.copy(B)},this.getViewport=function(v){return v.copy(Le)},this.setViewport=function(v,G,J,Q){v.isVector4?Le.set(v.x,v.y,v.z,v.w):Le.set(v,G,J,Q),I.viewport(B.copy(Le).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(We)},this.setScissor=function(v,G,J,Q){v.isVector4?We.set(v.x,v.y,v.z,v.w):We.set(v,G,J,Q),I.scissor(Y.copy(We).multiplyScalar(K).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){I.setScissorTest($e=v)},this.setOpaqueSort=function(v){xe=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(v=!0,G=!0,J=!0){let Q=0;if(v){let X=!1;if(V!==null){let ue=V.texture.format;X=ue===da||ue===ua||ue===ha}if(X){let ue=V.texture.type,Me=ue===dn||ue===ni||ue===is||ue===rs||ue===ca||ue===la,Ie=le.getClearColor(),Ce=le.getClearAlpha(),Ge=Ie.r,Xe=Ie.g,Oe=Ie.b;Me?(_[0]=Ge,_[1]=Xe,_[2]=Oe,_[3]=Ce,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=Ge,y[1]=Xe,y[2]=Oe,y[3]=Ce,L.clearBufferiv(L.COLOR,0,y))}else Q|=L.COLOR_BUFFER_BIT}G&&(Q|=L.DEPTH_BUFFER_BIT),J&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),le.dispose(),$.dispose(),P.dispose(),M.dispose(),he.dispose(),k.dispose(),O.dispose(),be.dispose(),Fe.dispose(),q.dispose(),me.dispose(),me.removeEventListener("sessionstart",ye),me.removeEventListener("sessionend",Z),de.stop()};function _e(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let v=D.autoReset,G=ne.enabled,J=ne.autoUpdate,Q=ne.needsUpdate,X=ne.type;z(),D.autoReset=v,ne.enabled=G,ne.autoUpdate=J,ne.needsUpdate=Q,ne.type=X}function fe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ce(v){let G=v.target;G.removeEventListener("dispose",ce),Re(G)}function Re(v){qe(v),M.remove(v)}function qe(v){let G=M.get(v).programs;G!==void 0&&(G.forEach(function(J){q.releaseProgram(J)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,G,J,Q,X,ue){G===null&&(G=Ue);let Me=X.isMesh&&X.matrixWorld.determinant()<0,Ie=Qs(v,G,J,Q,X);I.setMaterial(Q,Me);let Ce=J.index,Ge=1;if(Q.wireframe===!0){if(Ce=g.getWireframeAttribute(J),Ce===void 0)return;Ge=2}let Xe=J.drawRange,Oe=J.attributes.position,tt=Xe.start*Ge,ot=(Xe.start+Xe.count)*Ge;ue!==null&&(tt=Math.max(tt,ue.start*Ge),ot=Math.min(ot,(ue.start+ue.count)*Ge)),Ce!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Ce.count)):Oe!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,Oe.count));let _t=ot-tt;if(_t<0||_t===1/0)return;be.setup(X,Q,Ie,J,Ce);let ht,lt=ge;if(Ce!==null&&(ht=x.get(Ce),lt=Ne,lt.setIndex(ht)),X.isMesh)Q.wireframe===!0?(I.setLineWidth(Q.wireframeLinewidth*pt()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(X.isLine){let He=Q.linewidth;He===void 0&&(He=1),I.setLineWidth(He*pt()),X.isLineSegments?lt.setMode(L.LINES):X.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else X.isPoints?lt.setMode(L.POINTS):X.isSprite&&lt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let He=X._multiDrawStarts,mt=X._multiDrawCounts,st=X._multiDrawCount,qt=Ce?x.get(Ce).bytesPerElement:1,Ti=M.get(Q).currentProgram.getUniforms();for(let $t=0;$t<st;$t++)Ti.setValue(L,"_gl_DrawID",$t),lt.render(He[$t]/qt,mt[$t])}else if(X.isInstancedMesh)lt.renderInstances(tt,_t,X.count);else if(J.isInstancedBufferGeometry){let He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mt=Math.min(J.instanceCount,He);lt.renderInstances(tt,_t,mt)}else lt.render(tt,_t)};function C(v,G,J){v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=kt,v.needsUpdate=!0,It(v,G,J),v.side=Un,v.needsUpdate=!0,It(v,G,J),v.side=Mn):It(v,G,J)}this.compile=function(v,G,J=null){J===null&&(J=v),d=P.get(J),d.init(G),w.push(d),J.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),v!==J&&v.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();let Q=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ue=X.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let Ie=ue[Me];C(Ie,J,X),Q.add(Ie)}else C(ue,J,X),Q.add(ue)}),d=w.pop(),Q},this.compileAsync=function(v,G,J=null){let Q=this.compile(v,G,J);return new Promise(X=>{function ue(){if(Q.forEach(function(Me){M.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size===0){X(v);return}setTimeout(ue,10)}ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let j=null;function Se(v){j&&j(v)}function ye(){de.stop()}function Z(){de.start()}let de=new oh;de.setAnimationLoop(Se),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(v){j=v,me.setAnimationLoop(v),v===null?de.stop():de.start()},me.addEventListener("sessionstart",ye),me.addEventListener("sessionend",Z),this.render=function(v,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(G),G=me.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,G,V),d=P.get(v,w.length),d.init(G),w.push(d),re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Qe.setFromProjectionMatrix(re,cn,G.reversedDepth),oe=this.localClippingEnabled,Ke=N.init(this.clippingPlanes,oe),f=$.get(v,T.length),f.init(),T.push(f),me.enabled===!0&&me.isPresenting===!0){let ue=S.xr.getDepthSensingMesh();ue!==null&&et(ue,G,-1/0,S.sortObjects)}et(v,G,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(xe,ve),Ze=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ze&&le.addToRenderList(f,v),this.info.render.frame++,Ke===!0&&N.beginShadows();let J=d.state.shadowsArray;ne.render(J,v,G),Ke===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=f.opaque,X=f.transmissive;if(d.setupLights(),G.isArrayCamera){let ue=G.cameras;if(X.length>0)for(let Me=0,Ie=ue.length;Me<Ie;Me++){let Ce=ue[Me];Xt(Q,X,v,Ce)}Ze&&le.render(v);for(let Me=0,Ie=ue.length;Me<Ie;Me++){let Ce=ue[Me];dt(f,v,Ce,Ce.viewport)}}else X.length>0&&Xt(Q,X,v,G),Ze&&le.render(v),dt(f,v,G);V!==null&&F===0&&(A.updateMultisampleRenderTarget(V),A.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(S,v,G),be.resetDefaultState(),E=-1,b=null,w.pop(),w.length>0?(d=w[w.length-1],Ke===!0&&N.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?f=T[T.length-1]:f=null};function et(v,G,J,Q){if(v.visible===!1)return;if(v.layers.test(G.layers)){if(v.isGroup)J=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(G);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){Q&&ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(re);let Me=O.update(v),Ie=v.material;Ie.visible&&f.push(v,Me,Ie,J,ze.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){let Me=O.update(v),Ie=v.material;if(Q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ze.copy(v.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ze.copy(Me.boundingSphere.center)),ze.applyMatrix4(v.matrixWorld).applyMatrix4(re)),Array.isArray(Ie)){let Ce=Me.groups;for(let Ge=0,Xe=Ce.length;Ge<Xe;Ge++){let Oe=Ce[Ge],tt=Ie[Oe.materialIndex];tt&&tt.visible&&f.push(v,Me,tt,J,ze.z,Oe)}}else Ie.visible&&f.push(v,Me,Ie,J,ze.z,null)}}let ue=v.children;for(let Me=0,Ie=ue.length;Me<Ie;Me++)et(ue[Me],G,J,Q)}function dt(v,G,J,Q){let X=v.opaque,ue=v.transmissive,Me=v.transparent;d.setupLightsView(J),Ke===!0&&N.setGlobalState(S.clippingPlanes,J),Q&&I.viewport(B.copy(Q)),X.length>0&&Rt(X,G,J),ue.length>0&&Rt(ue,G,J),Me.length>0&&Rt(Me,G,J),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Xt(v,G,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Q.id]===void 0&&(d.state.transmissionRenderTarget[Q.id]=new _n(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ss:dn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ue=d.state.transmissionRenderTarget[Q.id],Me=Q.viewport||B;ue.setSize(Me.z*S.transmissionResolutionScale,Me.w*S.transmissionResolutionScale);let Ie=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Ge=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(ee),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&le.render(J);let Xe=S.toneMapping;S.toneMapping=zn;let Oe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),d.setupLightsView(Q),Ke===!0&&N.setGlobalState(S.clippingPlanes,Q),Rt(v,J,Q),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ot=0,_t=G.length;ot<_t;ot++){let ht=G[ot],lt=ht.object,He=ht.geometry,mt=ht.material,st=ht.group;if(mt.side===Mn&&lt.layers.test(Q.layers)){let qt=mt.side;mt.side=kt,mt.needsUpdate=!0,Mt(lt,J,Q,He,mt,st),mt.side=qt,mt.needsUpdate=!0,tt=!0}}tt===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}S.setRenderTarget(Ie,Ce,Ge),S.setClearColor(ee,ie),Oe!==void 0&&(Q.viewport=Oe),S.toneMapping=Xe}function Rt(v,G,J){let Q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ue=v.length;X<ue;X++){let Me=v[X],Ie=Me.object,Ce=Me.geometry,Ge=Me.group,Xe=Me.material;Xe.allowOverride===!0&&Q!==null&&(Xe=Q),Ie.layers.test(J.layers)&&Mt(Ie,G,J,Ce,Xe,Ge)}}function Mt(v,G,J,Q,X,ue){v.onBeforeRender(S,G,J,Q,X,ue),v.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(S,G,J,Q,v,ue),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=kt,X.needsUpdate=!0,S.renderBufferDirect(J,G,Q,X,v,ue),X.side=Un,X.needsUpdate=!0,S.renderBufferDirect(J,G,Q,X,v,ue),X.side=Mn):S.renderBufferDirect(J,G,Q,X,v,ue),v.onAfterRender(S,G,J,Q,X,ue)}function It(v,G,J){G.isScene!==!0&&(G=Ue);let Q=M.get(v),X=d.state.lights,ue=d.state.shadowsArray,Me=X.state.version,Ie=q.getParameters(v,X.state,ue,G,J),Ce=q.getProgramCacheKey(Ie),Ge=Q.programs;Q.environment=v.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(v.isMeshStandardMaterial?k:he).get(v.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&v.envMap===null?G.environmentRotation:v.envMapRotation,Ge===void 0&&(v.addEventListener("dispose",ce),Ge=new Map,Q.programs=Ge);let Xe=Ge.get(Ce);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Me)return fs(v,Ie),Xe}else Ie.uniforms=q.getUniforms(v),v.onBeforeCompile(Ie,S),Xe=q.acquireProgram(Ie,Ce),Ge.set(Ce,Xe),Q.uniforms=Ie.uniforms;let Oe=Q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Oe.clippingPlanes=N.uniform),fs(v,Ie),Q.needsLights=Qa(v),Q.lightsStateVersion=Me,Q.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function Ks(v){if(v.uniformsList===null){let G=v.currentProgram.getUniforms();v.uniformsList=ls.seqWithValue(G.seq,v.uniforms)}return v.uniformsList}function fs(v,G){let J=M.get(v);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Qs(v,G,J,Q,X){G.isScene!==!0&&(G=Ue),A.resetTextureUnits();let ue=G.fog,Me=Q.isMeshStandardMaterial?G.environment:null,Ie=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:fi,Ce=(Q.isMeshStandardMaterial?k:he).get(Q.envMap||Me),Ge=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Oe=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,ot=!!J.morphAttributes.color,_t=zn;Q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=S.toneMapping);let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=ht!==void 0?ht.length:0,He=M.get(Q),mt=d.state.lights;if(Ke===!0&&(oe===!0||v!==b)){let Ot=v===b&&Q.id===E;N.setState(Q,v,Ot)}let st=!1;Q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==mt.state.version||He.outputColorSpace!==Ie||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==Ce||Q.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==N.numPlanes||He.numIntersection!==N.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==Xe||He.morphTargets!==Oe||He.morphNormals!==tt||He.morphColors!==ot||He.toneMapping!==_t||He.morphTargetsCount!==lt)&&(st=!0):(st=!0,He.__version=Q.version);let qt=He.currentProgram;st===!0&&(qt=It(Q,G,X));let Ti=!1,$t=!1,ps=!1,gt=qt.getUniforms(),Kt=He.uniforms;if(I.useProgram(qt.program)&&(Ti=!0,$t=!0,ps=!0),Q.id!==E&&(E=Q.id,$t=!0),Ti||b!==v){I.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),gt.setValue(L,"projectionMatrix",v.projectionMatrix),gt.setValue(L,"viewMatrix",v.matrixWorldInverse);let Vt=gt.map.cameraPosition;Vt!==void 0&&Vt.setValue(L,Te.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,$t=!0,ps=!0)}if(X.isSkinnedMesh){gt.setOptional(L,X,"bindMatrix"),gt.setOptional(L,X,"bindMatrixInverse");let Ot=X.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),gt.setValue(L,"boneTexture",Ot.boneTexture,A))}X.isBatchedMesh&&(gt.setOptional(L,X,"batchingTexture"),gt.setValue(L,"batchingTexture",X._matricesTexture,A),gt.setOptional(L,X,"batchingIdTexture"),gt.setValue(L,"batchingIdTexture",X._indirectTexture,A),gt.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&gt.setValue(L,"batchingColorTexture",X._colorsTexture,A));let Qt=J.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ae.update(X,J,qt),($t||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,gt.setValue(L,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Kt.envMap.value=Ce,Kt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Kt.envMapIntensity.value=G.environmentIntensity),$t&&(gt.setValue(L,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&Ka(Kt,ps),ue&&Q.fog===!0&&W.refreshFogUniforms(Kt,ue),W.refreshMaterialUniforms(Kt,Q,K,pe,d.state.transmissionRenderTarget[v.id]),ls.upload(L,Ks(He),Kt,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ls.upload(L,Ks(He),Kt,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gt.setValue(L,"center",X.center),gt.setValue(L,"modelViewMatrix",X.modelViewMatrix),gt.setValue(L,"normalMatrix",X.normalMatrix),gt.setValue(L,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Ot=Q.uniformsGroups;for(let Vt=0,no=Ot.length;Vt<no;Vt++){let ri=Ot[Vt];Fe.update(ri,qt),Fe.bind(ri,qt)}}return qt}function Ka(v,G){v.ambientLightColor.needsUpdate=G,v.lightProbe.needsUpdate=G,v.directionalLights.needsUpdate=G,v.directionalLightShadows.needsUpdate=G,v.pointLights.needsUpdate=G,v.pointLightShadows.needsUpdate=G,v.spotLights.needsUpdate=G,v.spotLightShadows.needsUpdate=G,v.rectAreaLights.needsUpdate=G,v.hemisphereLights.needsUpdate=G}function Qa(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,G,J){let Q=M.get(v);Q.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),M.get(v.texture).__webglTexture=G,M.get(v.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,G){let J=M.get(v);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};let eo=L.createFramebuffer();this.setRenderTarget=function(v,G=0,J=0){V=v,R=G,F=J;let Q=!0,X=null,ue=!1,Me=!1;if(v){let Ce=M.get(v);if(Ce.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(v);else if(Ce.__hasExternalTextures)A.rebindTextures(v,M.get(v.texture).__webglTexture,M.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Oe=v.depthTexture;if(Ce.__boundDepthTexture!==Oe){if(Oe!==null&&M.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(v)}}let Ge=v.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);let Xe=M.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Xe[G])?X=Xe[G][J]:X=Xe[G],ue=!0):v.samples>0&&A.useMultisampledRTT(v)===!1?X=M.get(v).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[J]:X=Xe,B.copy(v.viewport),Y.copy(v.scissor),te=v.scissorTest}else B.copy(Le).multiplyScalar(K).floor(),Y.copy(We).multiplyScalar(K).floor(),te=$e;if(J!==0&&(X=eo),I.bindFramebuffer(L.FRAMEBUFFER,X)&&Q&&I.drawBuffers(v,X),I.viewport(B),I.scissor(Y),I.setScissorTest(te),ue){let Ce=M.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,J)}else if(Me){let Ce=G;for(let Ge=0;Ge<v.textures.length;Ge++){let Xe=M.get(v.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,J,Ce)}}else if(v!==null&&J!==0){let Ce=M.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,J)}E=-1},this.readRenderTargetPixels=function(v,G,J,Q,X,ue,Me,Ie=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=M.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){I.bindFramebuffer(L.FRAMEBUFFER,Ce);try{let Ge=v.textures[Ie],Xe=Ge.format,Oe=Ge.type;if(!Ve.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=v.width-Q&&J>=0&&J<=v.height-X&&(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(G,J,Q,X,Pe.convert(Xe),Pe.convert(Oe),ue))}finally{let Ge=V!==null?M.get(V).__webglFramebuffer:null;I.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(v,G,J,Q,X,ue,Me,Ie=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=M.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(G>=0&&G<=v.width-Q&&J>=0&&J<=v.height-X){I.bindFramebuffer(L.FRAMEBUFFER,Ce);let Ge=v.textures[Ie],Xe=Ge.format,Oe=Ge.type;if(!Ve.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie),L.readPixels(G,J,Q,X,Pe.convert(Xe),Pe.convert(Oe),0);let ot=V!==null?M.get(V).__webglFramebuffer:null;I.bindFramebuffer(L.FRAMEBUFFER,ot);let _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dl(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(tt),L.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,G=null,J=0){let Q=Math.pow(2,-J),X=Math.floor(v.image.width*Q),ue=Math.floor(v.image.height*Q),Me=G!==null?G.x:0,Ie=G!==null?G.y:0;A.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Me,Ie,X,ue),I.unbindTexture()};let to=L.createFramebuffer(),er=L.createFramebuffer();this.copyTextureToTexture=function(v,G,J=null,Q=null,X=0,ue=null){ue===null&&(X!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let Me,Ie,Ce,Ge,Xe,Oe,tt,ot,_t,ht=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(J!==null)Me=J.max.x-J.min.x,Ie=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,Xe=J.min.y,Oe=J.isBox3?J.min.z:0;else{let Qt=Math.pow(2,-X);Me=Math.floor(ht.width*Qt),Ie=Math.floor(ht.height*Qt),v.isDataArrayTexture?Ce=ht.depth:v.isData3DTexture?Ce=Math.floor(ht.depth*Qt):Ce=1,Ge=0,Xe=0,Oe=0}Q!==null?(tt=Q.x,ot=Q.y,_t=Q.z):(tt=0,ot=0,_t=0);let lt=Pe.convert(G.format),He=Pe.convert(G.type),mt;G.isData3DTexture?(A.setTexture3D(G,0),mt=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(A.setTexture2DArray(G,0),mt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(G,0),mt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);let st=L.getParameter(L.UNPACK_ROW_LENGTH),qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ti=L.getParameter(L.UNPACK_SKIP_PIXELS),$t=L.getParameter(L.UNPACK_SKIP_ROWS),ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe);let gt=v.isDataArrayTexture||v.isData3DTexture,Kt=G.isDataArrayTexture||G.isData3DTexture;if(v.isDepthTexture){let Qt=M.get(v),Ot=M.get(G),Vt=M.get(Qt.__renderTarget),no=M.get(Ot.__renderTarget);I.bindFramebuffer(L.READ_FRAMEBUFFER,Vt.__webglFramebuffer),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let ri=0;ri<Ce;ri++)gt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(v).__webglTexture,X,Oe+ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(G).__webglTexture,ue,_t+ri)),L.blitFramebuffer(Ge,Xe,Me,Ie,tt,ot,Me,Ie,L.DEPTH_BUFFER_BIT,L.NEAREST);I.bindFramebuffer(L.READ_FRAMEBUFFER,null),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||M.has(v)){let Qt=M.get(v),Ot=M.get(G);I.bindFramebuffer(L.READ_FRAMEBUFFER,to),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,er);for(let Vt=0;Vt<Ce;Vt++)gt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qt.__webglTexture,X,Oe+Vt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qt.__webglTexture,X),Kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,ue,_t+Vt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,ue),X!==0?L.blitFramebuffer(Ge,Xe,Me,Ie,tt,ot,Me,Ie,L.COLOR_BUFFER_BIT,L.NEAREST):Kt?L.copyTexSubImage3D(mt,ue,tt,ot,_t+Vt,Ge,Xe,Me,Ie):L.copyTexSubImage2D(mt,ue,tt,ot,Ge,Xe,Me,Ie);I.bindFramebuffer(L.READ_FRAMEBUFFER,null),I.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(mt,ue,tt,ot,_t,Me,Ie,Ce,lt,He,ht.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(mt,ue,tt,ot,_t,Me,Ie,Ce,lt,ht.data):L.texSubImage3D(mt,ue,tt,ot,_t,Me,Ie,Ce,lt,He,ht):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,tt,ot,Me,Ie,lt,He,ht.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,tt,ot,ht.width,ht.height,lt,ht.data):L.texSubImage2D(L.TEXTURE_2D,ue,tt,ot,Me,Ie,lt,He,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ti),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ps),ue===0&&G.generateMipmaps&&L.generateMipmap(mt),I.unbindTexture()},this.initRenderTarget=function(v){M.get(v).__webglFramebuffer===void 0&&A.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?A.setTextureCube(v,0):v.isData3DTexture?A.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?A.setTexture2DArray(v,0):A.setTexture2D(v,0),I.unbindTexture()},this.resetState=function(){R=0,F=0,V=null,I.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var De=[{name:"Campos do Sol",short:"Sol",creature:"Pintinho Pipoca",value:80,color:16239189,ground:6072679,path:14665623,sky:11067373,kind:"chick"},{name:"Dunas Douradas",short:"Dunas",creature:"Raposa de Areia",value:140,color:16163924,ground:14262362,path:15978380,sky:16176812,kind:"fox"},{name:"Bosque Encantado",short:"Bosque",creature:"Cervinho Folha",value:230,color:9096067,ground:3767916,path:11380108,sky:10142154,kind:"deer"},{name:"Reino de Gelo",short:"Gelo",creature:"Pingui de Gelo",value:360,color:8509420,ground:13495281,path:9553371,sky:13232891,kind:"penguin"},{name:"Vale Vulc\xE2nico",short:"Vulc\xE3o",creature:"Drag\xE3o Brasa",value:550,color:15890772,ground:5589083,path:7824246,sky:7689058,kind:"dragon"},{name:"Caverna de Cristal",short:"Cristal",creature:"Tartaruga Cristal",value:850,color:11969011,ground:7632040,path:11839441,sky:7634862,kind:"turtle"},{name:"Ilhas C\xF3smicas",short:"Cosmos",creature:"Gato Estelar",value:1300,color:12884981,ground:4146541,path:7960243,sky:2699606,kind:"cat"},{name:"Recife de Coral",short:"Coral",creature:"Axolote P\xE9rola",value:1900,color:16748986,ground:2400186,path:15192996,sky:9560045,kind:"axolotl"},{name:"Vale dos Doces",short:"Doces",creature:"Coelho Caramelo",value:2700,color:16297102,ground:11969500,path:16766653,sky:16240612,kind:"rabbit"},{name:"Floresta de Bambu",short:"Bambu",creature:"Panda Jade",value:3700,color:6865562,ground:3904109,path:12958598,sky:12773588,kind:"panda"},{name:"Cidade das Engrenagens",short:"Rob\xF4s",creature:"Rob\xF4 Fa\xEDsca",value:5e3,color:16761943,ground:4479355,path:8820914,sky:9549791,kind:"robot"},{name:"Templo das Nuvens",short:"Nuvens",creature:"Grifo Aurora",value:6800,color:14070527,ground:10732778,path:16180925,sky:13359866,kind:"griffin"},{name:"Santu\xE1rio das Tempestades",short:"Tempestade",creature:"F\xEAnix Rel\xE2mpago",value:9500,color:8974335,ground:3490912,path:6584736,sky:4278905,kind:"phoenix"},{name:"Cidadela do Tempo",short:"Tempo",creature:"Coruja Cronos",value:13500,color:9561294,ground:4746098,path:14205071,sky:11589334,kind:"clockOwl"}],Vn=600,Ct=48,mn={x:-5,z:14},Tn={x:5,z:14},En=De.map((i,e)=>({x:e%2?-3.2:3.2,z:-(e*Ct+25)})),us=i=>(7.7+i*1.1)*2,qa=De.flatMap((i,e)=>[{x:-2.3,z:-(e*Ct+11),r:.72,h:.65,world:e},{x:2.15,z:-(e*Ct+37),r:.78,h:.72,world:e},...e>=7?Array.from({length:3},(t,n)=>({x:[0,-3.1,3.1][n],z:-(e*Ct+17+n*8),r:.65,h:.8+n*.08,world:e})):[]]),ii={boots:{name:"T\xEAnis velozes",icon:"\u{1F45F}",desc:"+0,8 de velocidade por n\xEDvel.",max:10,base:80},energy:{name:"Mais f\xF4lego",icon:"\u{1F4A8}",desc:"+30 de energia para disparar.",max:5,base:90},pen:{name:"Curral maior",icon:"\u{1F3E1}",desc:"+2 espa\xE7os para ovos e criaturas.",max:10,base:150},incubator:{name:"Ninho aquecido",icon:"\u{1F95A}",desc:"O ovo choca 1,5 s mais r\xE1pido.",max:3,base:100},gloves:{name:"Luvas de transporte",icon:"\u{1F9E4}",desc:"Corra 4% mais r\xE1pido carregando o ovo, por n\xEDvel.",max:4,base:180},springs:{name:"Molas de salto",icon:"\u{1F998}",desc:"Pule mais alto para superar obst\xE1culos.",max:3,base:120},hydration:{name:"Garrafa esportiva",icon:"\u{1F4A7}",desc:"+6 de f\xF4lego recuperado por segundo, por n\xEDvel.",max:4,base:160},coach:{name:"Esteira profissional",icon:"\u{1F3C3}",desc:"Ganhe 25% mais treino por segundo, por n\xEDvel.",max:4,base:200},charm:{name:"Medalha do criador",icon:"\u{1F3C5}",desc:"Receba 10% a mais por criatura vendida, por n\xEDvel.",max:3,base:300},turbo:{name:"Impulso turbo",icon:"\u{1F680}",desc:"Dispare 10% mais r\xE1pido, por n\xEDvel.",max:3,base:220}},Ei={shield:{name:"Escudo bolha",icon:"\u{1F6E1}\uFE0F",price:60,max:5,desc:"Protege de uma captura. Ativa sozinho quando o dono encosta."},juice:{name:"Suco de energia",icon:"\u{1F9C3}",price:35,max:5,desc:"Recupera todo o f\xF4lego. Toque em Suco durante a corrida."}},St={common:{name:"Comum",mult:1,color:16773585},rare:{name:"Raro",mult:3,color:7921151},epic:{name:"\xC9pico",mult:5,color:13476095},legendary:{name:"Lend\xE1rio",mult:8,color:16765788},secret:{name:"Secreto",mult:12,color:15963343}},fh=(i,e)=>e===0?"common":e===1?"rare":i>=6?"legendary":"epic",Wt={...tr,crown:{name:"Coroa dourada",slot:"head",price:240,desc:"Uma coroa com pedras coloridas."},headphones:{name:"Fones neon",slot:"head",price:120,desc:"Fones azuis para seu corredor."},halo:{name:"Halo estelar",slot:"head",price:550,desc:"Um anel luminoso sobre a cabe\xE7a."},goggles:{name:"\xD3culos de aviador",slot:"face",price:160,desc:"Lentes turquesa e arma\xE7\xE3o dourada."},wings:{name:"Asas de cristal",slot:"back",price:420,desc:"Asas lil\xE1s para enfeitar o personagem."},cape:{name:"Capa de her\xF3i",slot:"back",price:200,desc:"Uma capa vermelha para a aventura."},pilotCap:{name:"Capacete de piloto",slot:"head",price:850,desc:"Capacete laranja com faixa e prote\xE7\xE3o lateral."},safariHat:{name:"Chap\xE9u explorador",slot:"head",price:1500,desc:"Aba larga e uma pena verde para as expedi\xE7\xF5es."},iceTiara:{name:"Tiara de gelo",slot:"head",price:3e3,desc:"Pontas de cristal azul em uma tiara prateada."},stormHelm:{name:"Elmo da tempestade",slot:"head",price:18e3,desc:"Elmo violeta com dois rel\xE2mpagos dourados."},solarCrown:{name:"Coroa do sol",slot:"head",price:75e3,desc:"Uma coroa m\xEDtica com um grande disco solar."},starGlasses:{name:"\xD3culos de estrela",slot:"face",price:2200,desc:"Duas estrelas douradas com lentes rosadas."},cyberVisor:{name:"Visor cibern\xE9tico",slot:"face",price:4500,desc:"Visor azul com moldura e luzes neon."},butterflyMask:{name:"M\xE1scara borboleta",slot:"face",price:9e3,desc:"Asas turquesa e lil\xE1s ao redor dos olhos."},royalMask:{name:"M\xE1scara imperial",slot:"face",price:35e3,desc:"M\xE1scara dourada com cristais de rubi."},explorerPack:{name:"Mochila de expedi\xE7\xE3o",slot:"back",price:1200,desc:"Mochila verde com bolso e rolinho de viagem."},beeWings:{name:"Asas de abelha",slot:"back",price:3800,desc:"Quatro asas claras com detalhes amarelos."},jetpack:{name:"Mochila a jato",slot:"back",price:6500,desc:"Dois propulsores prateados com chamas azuis. Visual, sem voo."},phoenixWings:{name:"Asas da f\xEAnix",slot:"back",price:12e3,desc:"Penas longas nas cores do fogo."},auroraCape:{name:"Manto da aurora",slot:"back",price:25e3,desc:"Manto em faixas lil\xE1s, verde e azul."},cometPack:{name:"Cometa de cristal",slot:"back",price:5e4,desc:"Um cometa com cauda de cristais azuis."},infinityWings:{name:"Asas do infinito",slot:"back",price:15e4,desc:"Asas m\xEDticas, an\xE9is c\xF3smicos e estrelas douradas."}},Hn={normal:{name:"Natural",mult:1,color:null},gold:{name:"Dourado",mult:1.5,color:16764006},rainbow:{name:"Arco-\xEDris",mult:2,color:9369055},cosmic:{name:"C\xF3smico",mult:3,color:11439103}},si={meadow:{name:"Prado",price:0,color:9750141,roof:7824561},candy:{name:"Doceria",price:600,color:15839692,roof:8244431},space:{name:"Observat\xF3rio",price:1200,color:7833016,roof:14527231},bamboo:{name:"Jardim de bambu",price:800,color:7780741,roof:14531176}},Mc=["Troncos girat\xF3rios","Rajada de areia","Esporos do bosque","Piso escorregadio","Jatos de lava","Pulso de cristal","Baixa gravidade","Correnteza do recife","Po\xE7as de caramelo","Bambu m\xF3vel","Prensa mec\xE2nica","Vento das nuvens","Rel\xE2mpagos do santu\xE1rio","P\xEAndulo do tempo"],Za=[{id:"first",name:"Primeira entrega",key:"delivered",target:1,reward:100},{id:"five",name:"Mensageiro dos ovos",key:"delivered",target:5,reward:350},{id:"explorer",name:"Seis mundos",key:"visited",target:6,reward:600},{id:"collector",name:"Seis esp\xE9cies",key:"seen",target:6,reward:1e3},{id:"trainer",name:"Atleta n\xEDvel 50",key:"training",target:50,reward:700},{id:"rare",name:"Criador de raridades",key:"rareHatched",target:5,reward:800},{id:"income",name:"Curral produtivo",key:"incomeEarned",target:500,reward:400},{id:"clean",name:"Fuga impec\xE1vel",key:"cleanRuns",target:3,reward:500},{id:"worlds",name:"Grande explorador",key:"visited",target:12,reward:2e3},{id:"secret",name:"Segredo revelado",key:"secretHatched",target:1,reward:1500},{id:"storm",name:"Al\xE9m das nuvens",key:"visited",target:13,reward:3500},{id:"chronos",name:"Guardi\xE3o do tempo",key:"visited",target:14,reward:5e3}],$a=i=>Hn[i]?i:"normal",ph=i=>["speed","energy","value"][i%3],Ja=i=>i?{speed:"Velocidade +5%",energy:"Recupera\xE7\xE3o de f\xF4lego +8/s",value:"Vendas +10%"}[ph(i.world)]:"Escolha uma criatura no curral.",Ya=i=>St[i]?i:"common",fn=(i,e,t)=>Math.max(e,Math.min(t,i)),Dt=(i,e,t)=>Number.isFinite(i)?fn(i,e,t):e,pn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function bc(){return{version:4,abilityStock:Object.fromEntries(Object.keys(ft).map(i=>[i,0])),abilitySlots:{power:"bubble",boost:"rush"},activeAbilities:{power:null,boost:null},rng:Math.floor(Math.random()*2147483646)+1,nestState:null,companionId:null,decorations:["meadow"],decoration:"meadow",incomePending:0,incomeEarned:0,rareHatched:0,secretHatched:0,cleanRuns:0,claimed:[],album:[],daily:{day:"",delivered:0,claimed:!1},accessories:[],equipped:{},coins:0,training:0,trainXP:0,upgrades:Object.fromEntries(Object.keys(ii).map(i=>[i,0])),supplies:{shield:0,juice:0},creatures:[],eggs:[],seen:Array(De.length).fill(!1),visited:Array(De.length).fill(!1),delivered:0,caught:0,nextId:1}}function Rm(i){let e=bc();if(!i||![1,2,3,4].includes(i.version))return e;for(let[t,n]of Object.entries(ft))e.abilityStock[t]=Math.floor(Dt(i.abilityStock?.[t],0,n.max));for(let t of["power","boost"]){let n=i.abilitySlots?.[t];ft[n]?.kind===t&&(e.abilitySlots[t]=n);let s=i.activeAbilities?.[t],r=ft[s?.id];r?.kind===t&&Dt(s.remaining,0,r.duration)>0&&(e.activeAbilities[t]={id:s.id,remaining:Dt(s.remaining,0,r.duration)},e.abilitySlots[t]=s.id)}e.accessories=Object.keys(Wt).filter(t=>i.accessories?.includes(t));for(let t of e.accessories)i.equipped?.[Wt[t].slot]===t&&(e.equipped[Wt[t].slot]=t);e.coins=Math.floor(Dt(i.coins,0,1e9)),e.training=Math.floor(Dt(i.training,0,Vn)),e.trainXP=Dt(i.trainXP,0,8+e.training*1.5);for(let[t,n]of Object.entries(ii))e.upgrades[t]=Math.floor(Dt(i.upgrades?.[t],0,n.max));for(let[t,n]of Object.entries(Ei))e.supplies[t]=Math.floor(Dt(i.supplies?.[t],0,n.max));e.seen=e.seen.map((t,n)=>i.seen?.[n]===!0),e.visited=e.visited.map((t,n)=>i.visited?.[n]===!0),e.delivered=Math.floor(Dt(i.delivered,0,1e6)),e.caught=Math.floor(Dt(i.caught,0,1e6));for(let t of Array.isArray(i.creatures)?i.creatures:[])Number.isInteger(t.world)&&t.world>=0&&t.world<De.length&&e.creatures.length<3+e.upgrades.pen*2&&e.creatures.push({id:e.nextId++,world:t.world,rarity:Ya(t.rarity),mutation:$a(t.mutation),incomeProgress:Dt(t.incomeProgress,0,1e9),uid:typeof t.uid=="string"&&/^[a-zA-Z0-9_-]{1,80}$/.test(t.uid)?t.uid:"pet-"+Date.now().toString(36)+"-"+e.nextId});for(let t of Array.isArray(i.eggs)?i.eggs:[])Number.isInteger(t.world)&&t.world>=0&&t.world<De.length&&e.creatures.length+e.eggs.length<3+e.upgrades.pen*2&&e.eggs.push({id:e.nextId++,world:t.world,rarity:Ya(t.rarity),mutation:$a(t.mutation),remaining:Dt(t.remaining,0,8)});e.companionId=e.creatures.find(t=>t.uid===i.companionId)?.uid||null,e.decorations=Object.keys(si).filter(t=>t==="meadow"||i.decorations?.includes(t)),e.decoration=e.decorations.includes(i.decoration)?i.decoration:"meadow",e.rng=Math.floor(Dt(i.rng||e.rng,1,4294967295)),e.nestState=Array.isArray(i.nestState)?i.nestState:null;for(let t of["incomePending","incomeEarned","rareHatched","secretHatched","cleanRuns"])e[t]=Dt(i[t],0,1e9);e.claimed=Za.filter(t=>i.claimed?.includes(t.id)).map(t=>t.id),e.album=Array.isArray(i.album)?[...new Set(i.album.filter(t=>/^\d{1,2}:(common|rare|epic|legendary|secret):(normal|gold|rainbow|cosmic)$/.test(t)))].slice(0,240):[];for(let t of e.creatures){let n=t.world+":"+t.rarity+":"+t.mutation;e.album.includes(n)||e.album.push(n)}return i.daily&&/^\d{4}-\d{2}-\d{2}$/.test(i.daily.day)&&(e.daily={day:i.daily.day,delivered:Dt(i.daily.delivered,0,1e4),claimed:i.daily.claimed===!0}),e}var ds=class{constructor(e){this.save=Rm(e),this.player={x:0,z:15,y:0,vy:0},this.time=0,this.incomeClock=0,this.carrying=null,this.carriedEgg=null,this.mode="run",this.energy=this.maxEnergy(),this.moving=0,this.sprinting=!1,this.events=[],this.hazardCooldown=0,this.slowUntil=0,this.runClean=!0,this.nestEggs=De.map((t,n)=>Array.from({length:3},(s,r)=>{let o=this.save.nestState?.[n]?.[r];return o?{slot:r,rarity:Ya(o.rarity),mutation:$a(o.mutation),availableAt:Dt(o.cooldown,0,240),refreshAt:Dt(o.refresh,1,240)}:this.rollEgg(n,r)})),this.captureNests(),this.guardians=En.map(t=>({x:t.x,z:t.z-2.5,state:"idle",grace:0})),this.hitCooldown=0,this.airJumps=0,this.save.visited[0]=!0}get availableAt(){return this.nestEggs.map(e=>Math.min(...e.map(t=>t.availableAt)))}availableEggs(e){return this.nestEggs[e].filter(t=>t.availableAt<=this.time)}recommendedTraining(e){let t=.92+this.save.upgrades.gloves*.04;return Math.max(0,Math.ceil((us(e)*1.1/(t*(this.power()==="speed"?1.05:1))-9-this.save.upgrades.boots*.8)/.35))}trainingAdvice(e){let t=this.recommendedTraining(e);return{level:t,remaining:Math.max(0,t-this.save.training),ready:this.save.training>=t}}speed(){return this.raceMode?22:(9+this.save.training*.35+this.save.upgrades.boots*.8)*(this.power()==="speed"?1.05:1)*(this.effect("rush")?1.25:1)}maxEnergy(){return 100+this.save.upgrades.energy*30}capacity(){return 3+this.save.upgrades.pen*2}trainTarget(){return 8+this.save.training*1.5}hatchTime(){return 8-this.save.upgrades.incubator*1.5}zone(){return fn(Math.floor(-this.player.z/Ct),0,De.length-1)}inBase(){return this.player.z>3}price(e){let t=ii[e];return t?Math.round(t.base*(this.save.upgrades[e]+1)**1.5):1/0}emit(e,t,n){this.events.push({type:e,text:t,world:n})}drainEvents(){return this.events.splice(0)}push(e){if(!this.raceMode||this.mode!=="run"||!e||!Number.isFinite(e.x)||!Number.isFinite(e.z)||this.time<(this.pushProtectedUntil||0))return!1;let t=Math.hypot(e.x,e.z);return t<.01?!1:(this.pushVelocity={x:e.x/t*15,z:e.z/t*15},this.pushUntil=this.time+.55,this.pushProtectedUntil=this.time+1.25,this.player.vy=Math.max(this.player.vy,3.3),!0)}clearPush(){this.pushVelocity=null,this.pushUntil=0,this.pushProtectedUntil=0}jump(){return this.mode!=="run"?!1:this.player.y===0?(this.airJumps=0,this.player.vy=7.6+(this.raceMode?0:this.save.upgrades.springs*.7),!0):this.effect("doubleJump")&&this.airJumps<1?(this.airJumps++,this.player.vy=8.3,this.emit("ability","Salto duplo!"),!0):!1}effect(e){let t=ft[e],n=t&&this.save.activeAbilities[t.kind];return!this.raceMode&&n?.id===e&&n.remaining>0}selectAbility(e){let t=ft[e];return!t||!this.save.abilityStock[e]||this.save.activeAbilities[t.kind]?!1:(this.save.abilitySlots[t.kind]=e,this.emit("upgrade",t.name+" no atalho do HUD."),!0)}canUseAbility(e){let t=ft[e];return!t||this.raceMode||!this.save.abilityStock[e]||this.save.activeAbilities[t.kind]?!1:e==="trainingBoost"?this.mode==="train"&&this.save.training<Vn:e==="hatchBoost"?this.save.eggs.length>0:e==="incomeBoost"?this.save.creatures.length>0:this.mode==="run"}useAbility(e){if(!this.canUseAbility(e))return!1;let t=ft[e];return this.save.abilityStock[e]--,this.save.abilitySlots[t.kind]=e,this.save.activeAbilities[t.kind]={id:e,remaining:t.duration},e==="endurance"&&(this.energy=this.maxEnergy()),this.emit("ability",t.name+" \xB7 "+t.duration+" s"),!0}tickAbilities(e){if(!this.raceMode)for(let t of["power","boost"]){let n=this.save.activeAbilities[t];n&&(n.remaining=Math.max(0,n.remaining-e),n.remaining||(this.save.activeAbilities[t]=null,this.emit("abilityEnd",ft[n.id].name+" terminou.")))}}trainingRate(){return(1+this.save.upgrades.coach*.25)*(this.effect("trainingBoost")?2:1)}interaction(){if(this.raceMode)return{type:"walk",label:"Siga o ninho da corrida"};if(this.mode==="train")return{type:"stop",label:"Sair da esteira"};if(this.carrying!==null)return pn(this.player,mn)<3.1?{type:"deposit",label:"Guardar ovo"}:{type:"return",label:"Leve ao curral"};if(pn(this.player,Tn)<2.5)return{type:"train",label:"Treinar na esteira"};if(pn(this.player,mn)<3.1)return{type:"corral",label:"Abrir curral"};for(let e=0;e<De.length;e++)if(pn(this.player,En[e])<2.6)return this.availableAt[e]<=this.time?{type:"nest",label:`Escolher ovo \xB7 ${this.availableEggs(e).length}`,world:e}:{type:"wait",label:`Novo ovo em ${Math.ceil(this.availableAt[e]-this.time)} s`};return{type:"walk",label:"Aproxime-se do ovo"}}interact(){let e=this.interaction();if(e.type==="stop")return this.mode="run",this.player.z=16.2,this.emit("stop","Treino conclu\xEDdo. Sua velocidade est\xE1 maior!"),e.type;if(e.type==="train")return this.save.training>=Vn?(this.emit("notice","Voc\xEA j\xE1 atingiu o n\xEDvel m\xE1ximo de treino!"),!1):(this.mode="train",this.player.x=Tn.x,this.player.z=Tn.z,this.player.y=0,this.player.vy=0,this.emit("train","Treinando! A cada barra completa, sua velocidade aumenta."),e.type);if(e.type==="deposit"){if(this.save.creatures.length+this.save.eggs.length>=this.capacity())return this.emit("notice","Curral cheio! Venda uma criatura ou compre mais espa\xE7os."),!1;let t=this.carrying;return this.save.eggs.push({id:this.save.nextId++,world:t,rarity:this.carriedEgg.rarity,mutation:this.carriedEgg.mutation,remaining:this.hatchTime()}),this.save.delivered++,this.refreshDay(),this.save.daily.delivered++,this.runClean&&this.save.cleanRuns++,this.nestEggs[t][this.carriedEgg.slot].availableAt=this.time+18,this.carrying=null,this.carriedEgg=null,this.guardians[t].state="return",this.emit("deposit","O ovo chegou ao curral! J\xE1 est\xE1 chocando.",t),e.type}return["corral","nest"].includes(e.type)?e.type:!1}steal(e){let t=this.interaction();if(t.type!=="nest"||!Number.isInteger(e))return!1;let n=this.nestEggs[t.world]?.[e];if(!n||n.availableAt>this.time)return!1;this.carrying=t.world,this.runClean=!0,this.carriedEgg={world:t.world,slot:e,rarity:n.rarity,mutation:n.mutation},n.availableAt=1/0;let s=this.guardians[t.world];return s.state="chase",s.grace=1.1,this.emit("grab",`Ovo ${St[n.rarity].name.toLowerCase()}! Corra para o curral!`,t.world),!0}saleValue(e,t="common",n="normal"){return Math.round(De[e].value*St[Ya(t)].mult*Hn[$a(n)].mult*(1+this.save.upgrades.charm*.1+(this.power()==="value"?.1:0)))}equip(e){let t=Wt[e];return!t||!this.save.accessories.includes(e)?!1:(this.save.equipped[t.slot]===e?delete this.save.equipped[t.slot]:this.save.equipped[t.slot]=e,this.emit("upgrade",this.save.equipped[t.slot]===e?`${t.name} equipado!`:`${t.name} guardado.`),!0)}useJuice(){return this.mode!=="run"||this.save.supplies.juice<1||this.energy>=this.maxEnergy()-1?!1:(this.save.supplies.juice--,this.energy=this.maxEnergy(),this.emit("juice","Suco usado! Seu f\xF4lego est\xE1 completo."),!0)}sell(e){if(!this.inBase())return!1;let t=this.save.creatures.findIndex(r=>r.id===e);if(t<0)return!1;let n=this.saleValue(this.save.creatures[t].world,this.save.creatures[t].rarity,this.save.creatures[t].mutation),[s]=this.save.creatures.splice(t,1);return this.save.incomePending+=s.incomeProgress||0,this.collectIncome(),this.save.companionId===s.uid&&(this.save.companionId=null),this.save.coins+=n,this.emit("sold",`${De[s.world].creature}: +${n} integros!`,s.world),!0}buy(e){if(ft[e]){let n=ft[e];return!this.inBase()||this.save.coins<n.price||this.save.abilityStock[e]>=n.max?!1:(this.save.coins-=n.price,this.save.abilityStock[e]++,this.save.activeAbilities[n.kind]||(this.save.abilitySlots[n.kind]=e),this.emit("upgrade",n.name+" comprado!"),!0)}if(si[e]){let n=si[e];if(!this.inBase())return!1;if(!this.save.decorations.includes(e)){if(this.save.coins<n.price)return!1;this.save.coins-=n.price,this.save.decorations.push(e)}return this.save.decoration=e,this.emit("upgrade","Curral decorado: "+n.name),!0}if(Wt[e]){let n=Wt[e];return!this.inBase()||this.save.accessories.includes(e)||this.save.coins<n.price?!1:(this.save.coins-=n.price,this.save.accessories.push(e),this.equip(e),!0)}if(Ei[e]){let n=Ei[e];return!this.inBase()||this.save.coins<n.price||this.save.supplies[e]>=n.max?!1:(this.save.coins-=n.price,this.save.supplies[e]++,this.emit("upgrade",`${n.name} comprado!`),!0)}let t=ii[e];return!t||!this.inBase()||this.save.upgrades[e]>=t.max||this.save.coins<this.price(e)?!1:(this.save.coins-=this.price(e),this.save.upgrades[e]++,this.energy=this.maxEnergy(),this.emit("upgrade",`${t.name}: melhoria comprada!`),!0)}catchEgg(e){if(this.effect("bubble")){this.guardians[e].grace=1;return}if(this.runClean=!1,this.save.supplies.shield>0){this.save.supplies.shield--,this.guardians[e].grace=3,this.energy=this.maxEnergy(),this.emit("shield","Escudo ativado! Voc\xEA tem 3 segundos para abrir dist\xE2ncia.",e);return}this.nestEggs[e][this.carriedEgg.slot].availableAt=this.time+5,this.carrying=null,this.carriedEgg=null,this.guardians[e].state="return",this.save.caught++,Object.assign(this.player,{x:0,z:15,y:0,vy:0}),this.energy=this.maxEnergy(),this.emit("caught","O dono recuperou o ovo! Treine ou melhore seus t\xEAnis e tente de novo.",e)}collide(e,t=.35,n=!1){for(let s of qa){if(!n&&e.y>s.h)continue;let r=e.x-s.x,o=e.z-s.z,c=Math.hypot(r,o),l=t+s.r;c<l&&(e.x=s.x+(c?r/c:1)*l,e.z=s.z+(c?o/c:0)*l,!n&&this.hitCooldown<=0&&(this.runClean=!1,this.emit("obstacle","Pule ou contorne os obst\xE1culos!"),this.hitCooldown=2))}}moveGuardian(e,t,n,s){let r=t.x-e.x,o=t.z-e.z,c=Math.hypot(r,o);if(c<.12)return;r/=c,o/=c;for(let a of qa){let h=e.x-a.x,u=e.z-a.z,p=Math.hypot(h,u);p<a.r+1.5&&p>.01&&(r+=h/p*(a.r+1.5-p)*1.2,o+=u/p*(a.r+1.5-p)*1.2)}let l=Math.hypot(r,o)||1;e.x+=r/l*Math.min(n*s,c),e.z+=o/l*Math.min(n*s,c),this.collide(e,.43,!0)}update(e,t={}){e=fn(e,0,.05),this.time+=e,this.tickAbilities(e),this.refreshDay(),this.hazardCooldown=Math.max(0,this.hazardCooldown-e);for(let l=0;l<this.nestEggs.length;l++)for(let a=0;a<3;a++){let h=this.nestEggs[l][a];h.availableAt<=this.time&&h.refreshAt<=this.time&&(this.nestEggs[l][a]=this.rollEgg(l,a))}this.updateIncome(e),this.captureNests(),this.hitCooldown-=e;for(let l of this.save.eggs)l.remaining-=e*(this.effect("hatchBoost")?2:1);let n=this.save.eggs.filter(l=>l.remaining<=0);this.save.eggs=this.save.eggs.filter(l=>l.remaining>0);for(let l of n){let a={id:l.id,uid:"pet-"+Date.now().toString(36)+"-"+this.random().toString(36).slice(2,10),world:l.world,rarity:l.rarity,mutation:l.mutation||"normal"};this.save.creatures.push(a),l.rarity!=="common"&&this.save.rareHatched++,l.rarity==="secret"&&this.save.secretHatched++;let h=a.world+":"+a.rarity+":"+a.mutation;this.save.album.includes(h)||this.save.album.push(h),this.save.seen[l.world]=!0,this.emit("hatch",`${De[l.world].creature} nasceu! Vale ${this.saleValue(l.world,l.rarity,l.mutation)} integros (${St[l.rarity].name}).`,l.world)}if(this.mode==="train"){this.moving=1,this.sprinting=!1,this.save.trainXP+=e*this.trainingRate(),this.energy=Math.min(this.maxEnergy(),this.energy+e*20),this.save.trainXP>=this.trainTarget()&&(this.save.trainXP-=this.trainTarget(),this.save.training++,this.emit("level",`Treino n\xEDvel ${this.save.training}! Velocidade: ${this.speed().toFixed(2).replace(".",",")}.`),this.save.training>=Vn&&(this.save.trainXP=0,this.mode="run",this.player.z=16.2));return}let s=t.x||0,r=t.z||0,o=Math.hypot(s,r);o>1&&(s/=o,r/=o),this.moving=Math.min(1,o),this.sprinting=!!t.sprint&&this.energy>1&&this.moving>0,this.energy=fn(this.energy+e*(this.sprinting?-32:18+this.save.upgrades.hydration*6+(this.power()==="energy"?8:0)),0,this.maxEnergy()),this.effect("endurance")&&(this.energy=this.maxEnergy());let c=this.raceMode?22*(this.time<(this.pushUntil||0)?.35:1):this.speed()*(this.time<this.slowUntil?.65:1)*(this.carrying===null?1:.92+this.save.upgrades.gloves*.04)*(this.sprinting?1.55+this.save.upgrades.turbo*.1:1);if(this.player.x=fn(this.player.x+s*c*e,-9,9),this.player.z=fn(this.player.z+r*c*e,-Ct*De.length+.8,25),this.raceMode&&this.pushVelocity&&this.time<this.pushUntil){this.player.x=fn(this.player.x+this.pushVelocity.x*e,-9,9),this.player.z=fn(this.player.z+this.pushVelocity.z*e,-Ct*De.length+.8,25);let l=Math.exp(-4*e);this.pushVelocity.x*=l,this.pushVelocity.z*=l}else this.pushVelocity=null;(this.player.vy||this.player.y)&&(this.player.vy-=(this.zone()===6?13:22)*e,this.player.y+=this.player.vy*e,this.player.y<0&&(this.player.y=0,this.player.vy=0,this.airJumps=0)),this.collide(this.player),this.save.visited[this.zone()]=!0,this.updateHazard();for(let l=0;l<De.length;l++){let a=this.guardians[l],h={x:En[l].x,z:En[l].z-2.5};if(this.carrying===l){if(a.grace=Math.max(0,a.grace-e),this.inBase())a.state="waiting",this.moveGuardian(a,{x:fn(this.player.x,-4,4),z:1.5},us(l),e);else if(a.state="chase",a.grace||this.moveGuardian(a,this.guardianTarget(l,t),us(l)*(this.guardianBurst(l)?1.18:1)*(this.effect("frost")?.5:1),e),!a.grace&&pn(a,this.player)<.94&&this.player.y<.65){this.catchEgg(l);break}}else a.state!=="idle"&&(this.moveGuardian(a,h,12,e),pn(a,h)<.15&&(a.state="idle"))}}random(){return this.save.rng=Math.imul(this.save.rng,1664525)+1013904223>>>0,this.save.rng/4294967296}rollEgg(e,t){let n=this.random(),s=this.random(),r=e===0&&t===0||n<.46?"common":n<.75?"rare":n<.92||e<6?"epic":n<.988?"legendary":"secret";return{slot:t,rarity:r,mutation:s<.72?"normal":s<.91?"gold":s<.985?"rainbow":"cosmic",availableAt:this.time,refreshAt:this.time+180+this.random()*60}}captureNests(){this.save.nestState=this.nestEggs.map(e=>e.map(t=>({rarity:t.rarity,mutation:t.mutation,cooldown:Number.isFinite(t.availableAt)?Math.max(0,t.availableAt-this.time):18,refresh:Math.max(1,t.refreshAt-this.time)})))}refreshDay(){let e=new Date().toISOString().slice(0,10);this.save.daily.day!==e&&(this.save.daily={day:e,delivered:0,claimed:!1})}companion(){return this.save.creatures.find(e=>e.uid===this.save.companionId)||null}power(){let e=this.companion();return e?ph(e.world):null}equipPet(e){return!this.inBase()||!this.save.creatures.some(t=>t.uid===e)?!1:(this.save.companionId=this.save.companionId===e?null:e,this.emit("upgrade",this.save.companionId?"Companheiro pronto! "+Ja(this.companion()):"Companheiro voltou ao curral."),!0)}creatureIncomeRate(e){return De[e.world].value*St[e.rarity].mult*Hn[e.mutation||"normal"].mult/1200*(this.effect("incomeBoost")?2:1)}incomeRate(){return this.save.creatures.reduce((e,t)=>e+this.creatureIncomeRate(t),0)}creditIncome(e,t){return e=Math.min(Math.floor(e),1e9-this.save.coins),e<=0?0:(this.save.coins+=e,this.save.incomeEarned+=e,this.events.push({type:"income",amount:e,uid:t?.uid,world:t?.world}),e)}collectIncome(){let e=this.creditIncome(Math.floor(this.save.incomePending+1e-9));return this.save.incomePending=Math.max(0,this.save.incomePending-e),e||!1}updateIncome(e){if(this.collectIncome(),this.save.incomePending>0&&this.save.incomePending<1&&this.save.creatures.length){let t=this.save.creatures[0];t.incomeProgress=(t.incomeProgress||0)+this.save.incomePending,this.save.incomePending=0}for(let t of this.save.creatures)t.incomeProgress=(t.incomeProgress||0)+this.creatureIncomeRate(t)*e;if(this.incomeClock+=e,!(this.incomeClock<3-1e-9)){this.incomeClock=Math.max(0,this.incomeClock-3);for(let t of this.save.creatures){let n=this.creditIncome(Math.floor(t.incomeProgress+1e-9),t);t.incomeProgress=Math.max(0,t.incomeProgress-n)}}}missionProgress(e){let t=this.save[e.key];return Math.min(e.target,Array.isArray(t)?t.filter(Boolean).length:t||0)}claimMission(e){let t=Za.find(n=>n.id===e);return!t||this.save.claimed.includes(e)||this.missionProgress(t)<t.target?!1:(this.save.claimed.push(e),this.save.coins+=t.reward,this.emit("upgrade","Conquista: "+t.name+" \xB7 +"+t.reward+" integros"),!0)}claimDaily(){return this.refreshDay(),this.save.daily.claimed||this.save.daily.delivered<3?!1:(this.save.daily.claimed=!0,this.save.coins+=200,this.emit("upgrade","Expedi\xE7\xE3o do dia: +200 integros!"),!0)}hazard(e=this.zone()){let t=-(e*Ct+19),n=(this.time+e*.63)%6;return{x:Math.sin(this.time*(e===10?1.6:.8)+e)*3.8,z:t,r:e===4?1.5:1.1,active:n>2&&n<4.6,warning:n>1.2&&n<=2,name:Mc[e]}}guardianTarget(e,t){let n=this.player;return e%3===1?{x:fn(n.x+(t.x||0)*2,-8,8),z:n.z+(t.z||0)*2}:e%3===2?{x:n.x+Math.sin(this.time*2+e)*1.2,z:n.z}:n}guardianBurst(e){return e>=3&&(this.time+e)%8>6.8}updateHazard(){if(this.effect("bubble")||this.inBase()||this.hazardCooldown>0)return;let e=this.zone(),t=this.hazard(e);t.active&&pn(this.player,t)<t.r+.3&&this.player.y<.8&&(this.hazardCooldown=3,this.runClean=!1,this.energy=Math.max(0,this.energy-12),this.slowUntil=this.time+(e===13?2.5:e===8?2:e===3?1.6:1),[1,7,11,12].includes(e)&&(this.player.x=fn(this.player.x+(e%2?1:-1)*2,-8,8)),e===4&&(this.energy=Math.max(0,this.energy-12)),this.emit("obstacle",t.name+"! Pule ou desvie da \xE1rea marcada."))}snapshot(){return this.captureNests(),{incomeRate:this.incomeRate(),hazard:this.hazard(),player:{...this.player},zone:this.zone(),speed:this.speed(),energy:this.energy,capacity:this.capacity(),carrying:this.carrying,carriedEgg:this.carriedEgg?{...this.carriedEgg}:null,nestEggs:this.nestEggs.map(e=>e.map(t=>({...t,available:t.availableAt<=this.time}))),mode:this.mode,time:this.time,interaction:this.interaction(),guardians:this.guardians.map((e,t)=>({...e,speed:us(t)})),availableAt:[...this.availableAt],trainingAdvice:De.map((e,t)=>this.trainingAdvice(t)),...JSON.parse(JSON.stringify(this.save))}}};function mh(i,e,{ball:t,cyl:n,torus:s,rod:r,softBox:o}){let _=(f,d,T,w,S=.28)=>{n(f,S,S,.07,16766581,d,T,w,24).rotation.x=Math.PI/2,t(f,S*.83,16117210,d,T,w-.055,1,1,.12),r(f,[d,T,w-.09],[d+S*.5,T+S*.3,w-.09],.016,3425373),r(f,[d,T,w-.09],[d,T+S*.65,w-.09],.02,3425373)},y=(f,d,T,w=7854834,S=.3)=>n(e,0,.09,S,w,f,d,T,5);if(i==="astronautHelmet"){t(e,.41,16117210,0,.04,0,1,.95,1),t(e,.32,7854834,0,.03,-.24,1,.8,.55);for(let f of[-.39,.39])n(e,.1,.1,.1,15235451,f,0,0).rotation.z=Math.PI/2;r(e,[.25,.25,0],[.38,.58,0],.025,16766581),t(e,.065,15235451,.38,.58,0)}if(i==="pirateHat"){o(e,.95,.15,.42,3425373,0,.02,0),n(e,.18,.4,.28,3425373,0,.17,0,3),t(e,.09,16766581,0,.17,-.25,1,1,.2);let f=t(e,.1,15235451,.3,.4,0,.6,2.2,.4);f.rotation.z=-.4}if(i==="wizardHat"){n(e,.48,.5,.07,10849261,0,.02,0),n(e,.015,.3,.84,10849261,0,.45,0);for(let f=0;f<5;f++)y((f%2?1:-1)*(.2-f*.025),.2+f*.1,-.2+f*.025,16766581,.1);s(e,.09,.025,16766581,0,.92,0)}if(i==="ninjaBand"){s(e,.34,.055,15235451,0,.02,0).rotation.x=Math.PI/2,o(e,.28,.14,.035,16117210,0,.04,-.35);for(let f of[-1,1]){let d=o(e,.13,.6,.045,15235451,f*.12,-.15,.32);d.rotation.z=f*.35}y(0,.03,-.39,3425373,.08)}if(i==="sharkHood"){t(e,.39,8103355,0,.03,0,1,.9,1),n(e,0,.17,.38,6522785,0,.43,.02,3);for(let f of[-.25,.25]){t(e,.045,3425373,f,.12,-.27);for(let d=0;d<3;d++)n(e,0,.045,.1,16117210,f*.6+d*.035,-.12,-.32,3).rotation.z=Math.PI}o(e,.49,.08,.1,16117210,0,-.13,-.28)}if(i==="mushroomCap"){t(e,.54,15235451,0,.14,0,1,.48,1),n(e,.3,.3,.12,16117210,0,-.02,0);for(let f=0;f<7;f++){let d=f*2.4;t(e,.07,16117210,Math.sin(d)*.32,.33-f%2*.08,Math.cos(d)*.32,1,.3,1)}}if(i==="flowerCrown"){s(e,.35,.04,7196849,0,0,0).rotation.x=Math.PI/2;for(let f=0;f<6;f++){let d=f*Math.PI/3,T=Math.sin(d)*.35,w=Math.cos(d)*.35;for(let S=0;S<5;S++)t(e,.055,[15235451,10849261,7854834][f%3],T+Math.cos(S*1.256)*.07,.08+Math.sin(S*1.256)*.07,w,1,1,.6);t(e,.04,16766581,T,.08,w-.025)}}if(i==="antlers"){s(e,.32,.04,16766581,0,.02,0).rotation.x=Math.PI/2;for(let f of[-1,1]){r(e,[f*.25,.05,0],[f*.48,.67,0],.05,16766581);for(let d=0;d<3;d++)r(e,[f*(.32+d*.04),.25+d*.15,0],[f*(.48+d*.1),.37+d*.15,0],.033,16766581),t(e,.09,7196849,f*(.48+d*.1),.42+d*.15,0,.6,1,.3)}}if(i==="clockworkCrown"){n(e,.35,.35,.14,16766581,0,.04,0),_(e,0,.36,-.2,.3);for(let f of[-1,1]){s(e,.14,.04,7196849,f*.38,.27,0);for(let d=0;d<6;d++){let T=d*Math.PI/3;o(e,.07,.09,.09,16766581,f*.38+Math.sin(T)*.16,.27+Math.cos(T)*.16,0)}}}if(i==="samuraiHelm"){t(e,.37,3425373,0,.06,0,1,.8,1);for(let f=0;f<3;f++)o(e,.5+f*.1,.1,.35,15235451,0,-.08-f*.09,.07);for(let f of[-1,1])r(e,[f*.1,.19,-.28],[f*.36,.4,-.2],.05,16766581),r(e,[f*.36,.4,-.2],[f*.47,.66,-.12],.04,16766581);y(0,.22,-.31,15235451,.22)}if(i==="monocle"){s(e,.15,.035,16766581,-.15,0,0),t(e,.12,7854834,-.15,0,-.01,1,1,.15);for(let f=0;f<6;f++)s(e,.025,.012,16766581,-.29-f*.009,-.12-f*.045,0);o(e,.08,.035,.035,16766581,0,0,0)}if(i==="heartGlasses"){for(let f of[-.18,.18]){for(let d of[-1,1])t(e,.095,15235451,f+d*.055,.045,0,1,1,.25);n(e,.13,0,.19,15235451,f,-.065,0,3).scale.z=.2}o(e,.12,.03,.05,16766581,0,0,0)}if(i==="snowGoggles"){o(e,.7,.25,.13,16117210,0,0,0);for(let f of[-.18,.18]){t(e,.14,7854834,f,0,-.09,1,.7,.2);for(let d=0;d<3;d++){let T=d*Math.PI/3;r(e,[f-Math.sin(T)*.07,-Math.cos(T)*.07,-.13],[f+Math.sin(T)*.07,Math.cos(T)*.07,-.13],.009,16117210)}}}if(i==="foxMask"){t(e,.31,16117210,0,0,0,1,.8,.2);for(let f of[-1,1])n(e,0,.12,.28,16117210,f*.22,.24,0,3),t(e,.08,15235451,f*.15,0,-.06,1,.6,.3);n(e,0,.07,.14,3425373,0,-.08,-.12,3).rotation.x=-Math.PI/2}if(i==="dragonMask"){t(e,.31,7196849,0,0,0,1,.75,.4),o(e,.22,.16,.2,16766581,0,-.08,-.14);for(let f of[-1,1])n(e,0,.07,.32,16766581,f*.22,.25,0,5),t(e,.06,3425373,f*.14,.02,-.12),t(e,.026,15235451,f*.06,-.06,-.25)}if(i==="owlMask"){for(let f of[-.17,.17])s(e,.19,.045,16766581,f,0,0),t(e,.15,16117210,f,0,.01,1,1,.18),t(e,.07,3425373,f,0,-.05);n(e,0,.07,.15,15235451,0,-.12,-.06,3).rotation.z=Math.PI}if(i==="rainbowVisor"&&(o(e,.72,.26,.1,3425373,0,0,0),[15235451,16759157,16766581,7196849,7854834,8562666,10849261].forEach((f,d)=>o(e,.08,.17,.05,f,(d-3)*.085,0,-.08))),i==="divingMask"){for(let f of[-.15,.15])s(e,.14,.045,7196849,f,0,0),t(e,.11,7854834,f,0,-.01,1,1,.2);r(e,[.36,-.16,0],[.36,.43,0],.04,16766581),r(e,[.36,.43,0],[.48,.43,0],.04,16766581),o(e,.1,.08,.05,16117210,0,-.08,0)}if(i==="timeMask"){_(e,-.15,0,0,.19),s(e,.14,.04,7196849,.2,0,0);for(let f=0;f<8;f++){let d=f*Math.PI/4;o(e,.065,.08,.06,16766581,.2+Math.sin(d)*.18,Math.cos(d)*.18,0)}t(e,.08,7854834,.2,0,-.01,1,1,.2)}if(i==="galaxyMask"){o(e,.68,.27,.1,10849261,0,0,0);for(let f=0;f<6;f++)t(e,.025,16117210,(f-2.5)*.095,Math.sin(f*2)*.07,-.07),f<5&&r(e,[(f-2.5)*.095,Math.sin(f*2)*.07,-.07],[(f-1.5)*.095,Math.sin((f+1)*2)*.07,-.07],.008,16766581);t(e,.07,7854834,.26,.16,0),s(e,.11,.014,16766581,.26,.16,0).rotation.x=.7}if(i==="snailPack"){t(e,.36,14527607,0,0,.1,1,1,.5);for(let f=0;f<3;f++)s(e,.1+f*.08,.035,f%2?16766581:15235451,0,0,.3-f*.015);for(let f of[-.17,.17])r(e,[f,.2,.1],[f,.48,.1],.025,7196849),t(e,.06,7196849,f,.48,.1)}if(i==="turtleShell"){t(e,.43,3425373,0,0,.1,1,1.2,.5);for(let f=0;f<7;f++){let d=f*Math.PI/3;n(e,.13,.13,.08,f?7196849:9818765,f?Math.sin(d)*.25:0,f?Math.cos(d)*.3:0,.31,6).rotation.x=Math.PI/2}s(e,.42,.04,16766581,0,0,.1).scale.y=1.2}if(i==="guitar"){t(e,.27,13143128,0,-.1,.1,1,1.2,.32),t(e,.2,14858878,0,.17,.1,1,1,.32),o(e,.12,.62,.1,8410951,0,.6,.1),o(e,.19,.2,.13,10053966,0,.98,.1),t(e,.08,3425373,0,.1,.19,1,1,.15);for(let f=-1;f<=1;f++)r(e,[f*.025,-.25,.21],[f*.025,.98,.21],.006,16766581)}if(i==="surfboard"){t(e,.35,7854834,0,.1,.12,1,2.3,.23),o(e,.1,1.38,.035,15235451,0,.1,.21),n(e,0,.16,.3,16766581,0,-.37,.26,3).rotation.x=Math.PI/2;for(let f of[-.2,.2])t(e,.045,16117210,f,.2,.2)}if(i==="balloonPack"){o(e,.4,.4,.2,10849261,0,-.05,.08);for(let f=0;f<5;f++){let d=(f-2)*.24,T=.7+f%2*.2;r(e,[0,.15,.1],[d,T,.1],.01,16766581),t(e,.17,[15235451,7196849,16766581,10849261,7854834][f],d,T+.16,.1,1,1.2,1)}}if(i==="butterflyWings"){for(let f of[-1,1])for(let d=0;d<2;d++){let T=f*(d?.38:.45),w=d?-.16:.27,S=t(e,d?.25:.36,d?10849261:15235451,T,w,0,1,1,.16);S.rotation.z=-f*.35;for(let U=0;U<3;U++)t(e,.045,16766581,T+f*U*.07,w+(U-1)*.1,-.055)}t(e,.08,3425373,0,0,0,.6,3,.5)}if(i==="mechanicalWings"){o(e,.3,.45,.2,3425373,0,0,.08);for(let f of[-1,1]){s(e,.14,.04,16766581,f*.22,.15,0);for(let d=0;d<4;d++){let T=f*(.3+d*.17),w=.18+d*.11,S=o(e,.15,.6-d*.07,.08,d%2?16117210:7854834,T,w,0);S.rotation.z=-f*.4,t(e,.035,16766581,T,w+.18,-.06)}}}if(i==="dragonWings"){for(let f of[-1,1]){let d=n(e,0,.48,.9,7196849,f*.45,.17,0,3);d.scale.z=.12,d.rotation.z=-f*.75,r(e,[0,-.1,0],[f*.8,.56,0],.035,16766581);for(let T=0;T<3;T++)r(e,[f*.25,.12,0],[f*(.4+T*.16),-.25+T*.12,0],.025,16766581)}t(e,.12,15235451,0,.12,.05)}if(i==="hourglassPack"){for(let f of[-.5,.5])n(e,.32,.32,.09,16766581,0,f,.12);for(let f of[-.28,.28])r(e,[f,-.5,.12],[f,.5,.12],.035,7196849);n(e,.24,.035,.4,7854834,0,.22,.12,16),n(e,.035,.24,.4,7854834,0,-.22,.12,16),n(e,0,.18,.18,16766581,0,-.32,-.03,12),r(e,[0,.1,-.09],[0,-.3,-.09],.018,16766581)}if(i==="galaxyPortal"){t(e,.34,10849261,0,.14,.12,1,1,.25);for(let f=0;f<3;f++){let d=s(e,.42+f*.13,.035,[16766581,7854834,7196849][f],0,.14,.12);d.rotation.y=(f-1)*.5,d.rotation.x=f*.25}for(let f=0;f<8;f++){let d=f*Math.PI/4;y(Math.sin(d)*.7,.14+Math.cos(d)*.7,.12,f%2?16766581:16117210,.12)}t(e,.09,15235451,.5,.55,.13)}}function gh(i,e,{ball:t,cyl:n,torus:s,rod:r,softBox:o}){let c=ft[i];if(!c)return;let l=c.color,a=16766581;n(e,.26,.3,.45,4018795,0,.3,0),n(e,.18,.18,.12,a,0,.59,0);let h=.9;if(i==="bubble"&&(t(e,.29,l,0,h,0,1,1.2,.25),s(e,.25,.035,a,0,h,-.06)),i==="frost")for(let u=0;u<3;u++){let p=u*Math.PI/3;r(e,[-Math.sin(p)*.3,h-Math.cos(p)*.3,0],[Math.sin(p)*.3,h+Math.cos(p)*.3,0],.04,l)}if(i==="doubleJump")for(let u of[-.16,.16])r(e,[u,h-.2,0],[u,h+.2,0],.035,l),n(e,0,.11,.2,l,u,h+.25,0,3);if(i==="endurance")for(let u=0;u<3;u++)r(e,[-.25,h+u*.12-.1,0],[.1+u*.07,h+u*.12-.1,0],.035,l),s(e,.08,.03,l,.14+u*.07,h+u*.12-.04,0);if(i==="rush"){n(e,.12,.17,.45,l,0,h,0),n(e,0,.12,.19,a,0,h+.32,0);for(let u of[-.2,.2])o(e,.1,.22,.08,l,u,h-.1,0)}if(i==="trainingBoost"){r(e,[-.3,h,0],[.3,h,0],.04,a);for(let u of[-.27,.27])o(e,.12,.3,.2,l,u,h,0)}if(i==="hatchBoost"&&(t(e,.23,l,0,h,0,1,1.3,1),s(e,.27,.035,a,0,h-.2,0).rotation.x=Math.PI/2,t(e,.055,a,.1,h,-.2)),i==="incomeBoost")for(let u=0;u<4;u++)n(e,.25,.25,.08,u%2?l:a,0,h-.25+u*.1,0)}var js=new H;function sn(i,e,t,n,s,r){let o=2*Math.PI*s/4,c=Math.max(r-2*s,0),l=Math.PI/4;js.copy(e),js[n]=0,js.normalize();let a=.5*o/(o+c),h=1-js.angleTo(i)/l;return Math.sign(js[t])===1?h*a:c/(o+c)+a+a*(1-h)}var ja=class i extends vn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let c=this.toNonIndexed();this.index=null,this.attributes.position=c.attributes.position,this.attributes.normal=c.attributes.normal,this.attributes.uv=c.attributes.uv;let l=new H,a=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,_=u.length/6,y=new H,f=.5/o;for(let d=0,T=0;d<u.length;d+=3,T+=2)switch(l.fromArray(u,d),a.copy(l),a.x-=Math.sign(a.x)*f,a.y-=Math.sign(a.y)*f,a.z-=Math.sign(a.z)*f,a.normalize(),u[d+0]=h.x*Math.sign(l.x)+a.x*r,u[d+1]=h.y*Math.sign(l.y)+a.y*r,u[d+2]=h.z*Math.sign(l.z)+a.z*r,p[d+0]=a.x,p[d+1]=a.y,p[d+2]=a.z,Math.floor(d/_)){case 0:y.set(1,0,0),m[T+0]=sn(y,a,"z","y",r,n),m[T+1]=1-sn(y,a,"y","z",r,t);break;case 1:y.set(-1,0,0),m[T+0]=1-sn(y,a,"z","y",r,n),m[T+1]=1-sn(y,a,"y","z",r,t);break;case 2:y.set(0,1,0),m[T+0]=1-sn(y,a,"x","z",r,e),m[T+1]=sn(y,a,"z","x",r,n);break;case 3:y.set(0,-1,0),m[T+0]=1-sn(y,a,"x","z",r,e),m[T+1]=1-sn(y,a,"z","x",r,n);break;case 4:y.set(0,0,1),m[T+0]=1-sn(y,a,"x","y",r,e),m[T+1]=1-sn(y,a,"y","x",r,t);break;case 5:y.set(0,0,-1),m[T+0]=sn(y,a,"x","y",r,e),m[T+1]=1-sn(y,a,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function xh(i){let e=new Map,t=new Map,n=[],s=(I,D=!1,M=!1)=>{let A=I+":"+D+":"+M;return e.has(A)||e.set(A,new Bs({color:I,roughness:.72,flatShading:M,emissive:D?I:0,emissiveIntensity:D?.35:0})),e.get(A)},r=(I,D)=>(t.has(I)||t.set(I,D()),t.get(I)),o=(I,D=0,M=0,A=0)=>{let he=new Ln;return he.position.set(D,M,A),I.add(he),he},c=(I,D,M,A=0,he=0,k=0,x=!1)=>{let g=new zt(D,s(M,x,D.userData.faceted===!0));return g.position.set(A,he,k),g.receiveShadow=!0,I.add(g),g},l=(I,D,M,A,he,k=0,x=0,g=0)=>c(I,r(`b${D},${M},${A}`,()=>new vn(D,M,A)),he,k,x,g),a=(I,D,M,A,he,k=0,x=0,g=0)=>{let O=Math.min(.09,Math.min(D,M,A)*.22);return c(I,r(`rounded:${D},${M},${A}`,()=>new ja(D,M,A,2,O)),he,k,x,g)},h=(I,D,M,A=0,he=0,k=0,x=1,g=1,O=1)=>{let q=c(I,r("s"+D,()=>new Qi(D,D<.12?12:D<.6?24:20,D<.12?8:D<.6?16:12)),M,A,he,k);return q.scale.set(x,g,O),q},u=(I,D,M,A,he,k=0,x=0,g=0,O=20)=>{let q=O>=7?Math.max(16,O):O;return c(I,r(`c${D},${M},${A},${q}`,()=>{let W=new Fs(D,M,A,q);return W.userData.faceted=O<=6,W}),he,k,x,g)},p=(I,D,M,A,he=0,k=0,x=0)=>c(I,r(`t${D},${M}`,()=>new es(D,M,8,D<.2?20:36)),A,he,k,x),m=(I,D,M,A,he)=>{let k=new H(...D),x=new H(...M).sub(k),g=u(I,A,A,x.length(),he,...k.addScaledVector(x,.5).toArray());return g.quaternion.setFromUnitVectors(new H(0,1,0),x.normalize()),g},_=(I,D,M,A,he,k=3,x="#233d46",g="#fff6d9")=>{let O=document.createElement("canvas");O.width=512,O.height=128;let q=O.getContext("2d");q.fillStyle=g,q.beginPath(),q.roundRect(4,4,504,120,22),q.fill(),q.fillStyle=x,q.font="bold 40px Arial",q.textAlign="center",q.textBaseline="middle",q.fillText(D,256,66,480);let W=new ji(O);W.colorSpace=Et;let $=new Zi(new mi({map:W,depthWrite:!1}));return $.position.set(M,A,he),$.scale.set(k,k/4,1),I.add($),n.push($),$};function y(I){let D=document.createElement("canvas");D.width=640,D.height=288;let M=new ji(D);M.colorSpace=Et;let A=new Zi(new mi({map:M,depthWrite:!1}));return A.position.set(0,2.4,0),A.scale.set(4.2,1.89,1),I.add(A),{canvas:D,texture:M,sprite:A}}function f(I,D){let M=Y[I].plaque,A=M.canvas.getContext("2d");A.clearRect(0,0,640,288),A.fillStyle=D.ready?"#daf3cf":"#fff1c8",A.beginPath(),A.roundRect(5,5,630,278,28),A.fill(),A.strokeStyle=D.ready?"#4b8c55":"#b48135",A.lineWidth=8,A.stroke(),A.textAlign="center",A.textBaseline="middle",A.fillStyle="#345047",A.font="bold 30px Arial",A.fillText("TREINO RECOMENDADO",320,52),A.font="bold 54px Arial",A.fillText("N\xCDVEL "+D.level,320,115),A.font="bold 34px Arial",A.fillText(D.ready?"Voc\xEA j\xE1 tem esse treino!":"Faltam "+D.remaining+" n\xEDveis",320,178),A.fillStyle="#876323",A.font="bold 24px Arial",A.fillText("3 OVOS \xB7 RARIDADES E MUTA\xC7\xD5ES",320,240),M.texture.needsUpdate=!0,M.sprite.userData.advice={...D}}function d(I,D,M=1,A="common"){let he=o(I);he.scale.setScalar(M),c(he,r("egg-shell",()=>{let k=Array.from({length:21},(x,g)=>{let O=Math.PI*(1-g/20),q=g===0||g===20?0:.42*Math.sin(O)*(1-.16*Math.cos(O));return new Be(q,.567*Math.cos(O))});return new Ki(k,28)}),St[A].color,0,.5,0);for(let[k,x,g]of[[.25,.63,.28],[-.19,.34,.32],[.05,.9,.18],[.3,.33,-.2]])h(he,.075,D,k,x,g,1,1.2,.4);if(A!=="common"){p(he,.44,.025,St[A].color,0,.06,0).rotation.x=Math.PI/2;for(let k=0;k<St[A].mult-1;k++){let x=k*2.4;u(he,0,.06,.15,16773296,Math.sin(x)*.47,.75+k%2*.2,Math.cos(x)*.47,4)}}return he}function T(I,D,M,A=1,he="common"){let k=o(I);k.scale.setScalar(A);let x=[],g=2505291,O=16771258,q=-.35,W=.92;if(D==="chick"){h(k,.43,M,0,.51,0,1,1.1,.9),h(k,.31,M,0,1,-.07),u(k,0,.13,.24,15697476,0,.94,-.43,4).rotation.x=-Math.PI/2;for(let P of[-.16,.16])a(k,.18,.09,.3,15697476,P,.06,-.06);for(let P of[-.42,.42]){let N=h(k,.22,M,P,.61,0,.45,1.15,.9);x.push(N)}for(let P=0;P<3;P++)h(k,.095,15231840,(P-1)*.09,1.28,-.05);W=1.06,q=-.35}else if(D==="fox"||D==="cat"){h(k,.36,M,0,.47,.06,1,1.1,1.35),h(k,.34,M,0,.95,-.18,1.08,.92,.95),h(k,.19,O,0,.83,-.43,1,.65,.7),h(k,.065,g,0,.9,-.55);for(let N of[-.24,.24]){let ne=u(k,0,.16,.4,M,N,1.31,-.16,4);ne.rotation.z=N<0?.18:-.18,h(k,.07,16036809,N,1.35,-.28,1,1.8,.3)}for(let N of[-.21,.21]){let ne=a(k,.16,.28,.23,M,N,.16,-.12);x.push(ne)}let P=o(k,0,.4,.47);if(h(P,.2,M,0,.22,.24,1,1.2,2.1),h(P,.14,O,0,.32,.52,1,1,1.3),P.rotation.x=-.3,x.push(P),W=1,q=-.48,D==="cat"){p(k,.2,.025,16176247,0,1.7,-.16).rotation.x=Math.PI/2;for(let N of[-.44,.44]){let ne=h(k,.27,9018337,N,.72,.1,.45,.6,1.5);ne.rotation.z=N,x.push(ne)}}}else if(D==="deer"){h(k,.38,M,0,.55,.06,.8,1,1.4),h(k,.26,12574109,0,1.06,-.23,.9,1.1,1),h(k,.14,O,0,.99,-.48),h(k,.045,g,0,1.04,-.6);for(let P of[-.22,.22])h(k,.16,M,P,1.18,-.24,1.5,.5,.65),m(k,[P*.6,1.25,-.2],[P,1.67,-.2],.038,12358234),m(k,[P*.85,1.47,-.2],[P*1.7,1.56,-.2],.026,12358234);for(let P of[-.19,.19])for(let N of[-.24,.29]){let ne=u(k,.055,.055,.37,7506774,P,.2,N);x.push(ne)}for(let P of[-.16,.16])h(k,.048,O,P,.65,-.29);W=1.12,q=-.46}else if(D==="penguin"){h(k,.44,3299975,0,.61,0,1,1.4,.85),h(k,.32,16119271,0,.55,-.19,1,1.5,.6),h(k,.3,3299975,0,1.1,-.06),u(k,0,.12,.22,15908181,0,1,-.4,4).rotation.x=-Math.PI/2;for(let P of[-.42,.42]){let N=h(k,.21,M,P,.65,0,.45,1.8,.8);N.rotation.z=P*.7,x.push(N)}for(let P of[-.2,.2])h(k,.16,15908181,P,.07,-.13,1,.35,1.4);p(k,.32,.065,M,0,.89,-.04).rotation.x=Math.PI/2,W=1.13,q=-.34}else if(D==="dragon"){h(k,.42,M,0,.52,.07,1,1.1,1.2),h(k,.31,M,0,1.06,-.23),h(k,.21,15972966,0,.94,-.48,1,.7,1);for(let P of[-.2,.2])u(k,0,.075,.27,O,P,1.41,-.1,5);for(let P of[-.56,.56]){let N=o(k,P,.92,.12);u(N,0,.35,.62,10967922,0,0,0,3).rotation.z=P>0?-1.1:1.1,x.push(N)}for(let P=0;P<4;P++)u(k,0,.11,.18,16438365,0,.93-P*.13,.24+P*.18,4);for(let P of[-.24,.24]){let N=a(k,.19,.25,.31,M,P,.13,-.1);x.push(N)}h(k,.18,M,0,.28,.6,1,.7,2.1),W=1.13,q=-.5}else if(D==="turtle"){h(k,.52,6980258,0,.49,.1,1,.7,1.2);for(let P=0;P<5;P++){let N=P*1.256;u(k,0,.18,.42,M,Math.sin(N)*.3,.8,Math.cos(N)*.34+.1,5)}h(k,.24,9029305,0,.4,-.56);for(let P of[-.42,.42])for(let N of[-.23,.39]){let ne=h(k,.15,9029305,P,.12,N,1,.55,1.25);x.push(ne)}W=.47,q=-.77}else if(D==="axolotl"){h(k,.36,M,0,.38,.12,1,.7,1.6),h(k,.34,16765666,0,.7,-.24,1.25,.8,1);for(let P of[-.38,.38])for(let N=0;N<3;N++)m(k,[P*.75,.7,-.2],[P*1.5,.55+N*.18,-.17],.05,M),h(k,.08,M,P*1.5,.55+N*.18,-.17);for(let P of[-.3,.3])for(let N of[-.1,.4]){let ne=h(k,.14,M,P,.13,N,1,.5,1.3);x.push(ne)}h(k,.18,M,0,.32,.67,.35,1,1.8),W=.73,q=-.54}else if(D==="rabbit"){h(k,.37,M,0,.44,.04,1,1.2,1),h(k,.32,16770256,0,.99,-.13);for(let P of[-.16,.16])h(k,.16,M,P,1.47,-.08,.7,2.1,.7),h(k,.08,16161978,P,1.5,-.17,.6,2.2,.4);for(let P of[-.24,.24]){let N=h(k,.2,M,P,.12,-.1,.8,.6,1.5);x.push(N)}h(k,.18,16775146,0,.45,.44),h(k,.06,14582162,0,.91,-.43),W=1.04,q=-.41}else if(D==="panda"){h(k,.46,15922141,0,.52,0,1,1.12,1),h(k,.36,15922141,0,1.07,-.12,1.12,.96,1);for(let P of[-.31,.31])h(k,.15,2575947,P,1.31,-.1);for(let P of[-.15,.15])h(k,.12,2575947,P,1.08,-.42,1,1.2,.3);for(let P of[-.37,.37]){let N=h(k,.19,2575947,P,.58,0,.75,1.5,.8);x.push(N)}for(let P of[-.23,.23])h(k,.18,2575947,P,.13,-.05);p(k,.33,.065,M,0,.81,-.02).rotation.x=Math.PI/2,h(k,.06,2575947,0,.96,-.47),W=1.1,q=-.46}else if(D==="robot"){a(k,.66,.6,.46,8366791,0,.65,0),a(k,.66,.46,.48,M,0,1.22,-.06),a(k,.5,.25,.03,2704991,0,1.25,-.31),a(k,.28,.23,.04,M,0,.69,-.25),m(k,[0,1.45,0],[0,1.68,0],.035,8366791),h(k,.09,10876879,0,1.7,0);for(let P of[-.45,.45]){let N=a(k,.17,.46,.21,M,P,.64,0);x.push(N)}for(let P of[-.2,.2]){let N=a(k,.2,.35,.28,4217725,P,.19,0);x.push(N)}W=1.25,q=-.33}else if(D==="griffin"){h(k,.4,M,0,.52,.09,1,1.1,1.2),h(k,.32,16774357,0,1.08,-.17),u(k,0,.12,.3,16038756,0,1,-.54,4).rotation.x=-Math.PI/2;for(let P of[-.58,.58]){let N=o(k,P,.85,.1);for(let ne=0;ne<3;ne++)h(N,.22,ne%2?M:16774357,Math.sign(P)*ne*.13,ne*.13,ne*.12,.5,1.6,1);x.push(N)}for(let P of[-.23,.23]){let N=a(k,.2,.22,.3,16038756,P,.12,-.12);x.push(N)}u(k,0,.2,.3,16038756,0,1.46,-.1,5),W=1.15,q=-.45}else if(D==="phoenix"){h(k,.4,5269694,0,.58,.08,.9,1.2,1.1),h(k,.31,9498623,0,1.12,-.16),u(k,0,.12,.29,16766062,0,1.02,-.51,5).rotation.x=-Math.PI/2;for(let P of[-1,1]){let N=o(k,P*.35,.86,.05);for(let ne=0;ne<5;ne++){let le=h(N,.19,ne%2?10810623:9731322,P*(.12+ne*.15),.1+ne*.12,.06+ne*.04,.45,2.2,.7);le.rotation.z=-P*.55}x.push(N),a(k,.2,.2,.3,16766062,P*.22,.12,-.16)}for(let P=-1;P<=1;P++){let N=h(k,.14,11769343,P*.2,.4,.55+Math.abs(P)*.09,.6,1,2.2);N.rotation.z=P*.25}for(let P=-1;P<=1;P++)u(k,0,.075,.32,16768885,P*.12,1.5,-.07,4);W=1.17,q=-.44}else if(D==="clockOwl"){h(k,.46,5406337,0,.63,0,1,1.3,.9),h(k,.37,12773589,0,1.16,-.1,1.1,1,.85);for(let P of[-1,1]){p(k,.17,.04,15912577,P*.17,1.19,-.39),u(k,0,.1,.22,5406337,P*.28,1.52,-.02,3);let N=o(k,P*.4,.7,.07);for(let ne=0;ne<3;ne++)h(N,.16,ne%2?12773589:7056292,P*ne*.08,-ne*.12,0,.5,1.6,1);x.push(N),a(k,.17,.08,.25,15382880,P*.17,.06,-.05)}u(k,0,.08,.18,15382880,0,1.08,-.43,3).rotation.x=-Math.PI/2,p(k,.24,.035,15912577,0,.64,-.36),h(k,.2,16772552,0,.64,-.36,1,1,.14),m(k,[0,.64,-.4],[0,.79,-.4],.018,3492962),m(k,[0,.64,-.4],[.13,.6,-.4],.016,3492962),W=1.2,q=-.43}he!=="common"&&(p(k,.55,.035,St[he].color,0,.055,0).rotation.x=Math.PI/2);let $=D==="turtle"?.1:.12;for(let P of[-$,$])h(k,.065,16777215,P,W,q),h(k,.035,g,P,W,q-.055),h(k,.012,16777215,P-.01,W+.015,q-.084);return k.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),{g:k,limbs:x,kind:D}}function w(I,D){let M=o(I);if(tr[D]&&mh(D,M,{ball:h,cyl:u,torus:p,rod:m,softBox:a}),D==="crown"){u(M,.34,.34,.16,15910483,0,.1,0,10);for(let x=0;x<7;x++){let g=x*Math.PI*2/7;u(M,0,.09,.28,16767336,Math.sin(g)*.29,.3,Math.cos(g)*.29,4),h(M,.055,x%2?7724525:15759772,Math.sin(g)*.33,.12,Math.cos(g)*.33)}}if(D==="halo"){p(M,.4,.06,16768889,0,.16,0).rotation.x=Math.PI/2;for(let x of[-.5,.5])u(M,0,.06,.17,16774330,x,.2,0,4)}if(D==="headphones"){p(M,.33,.045,3560884,0,0,0);for(let x of[-.32,.32])a(M,.12,.3,.23,6480616,x,-.03,0),a(M,.13,.2,.15,8483822,x*1.15,-.03,0)}if(D==="goggles"){for(let x of[-.15,.15])p(M,.125,.035,16764004,x,0,0),h(M,.1,6807528,x,0,-.01,1,1,.25);a(M,.08,.04,.07,16764004,0,0,0)}if(D==="wings")for(let x of[-1,1])for(let g=0;g<4;g++){let O=h(M,.19,g%2?10149870:13214971,x*(.26+g*.17),.25+g*.09,.08+g*.05,.7,2.3,.4);O.rotation.z=-x*(.4+g*.08)}if(D==="cape"){let x=u(M,.26,.6,1,14636152,0,-.2,.1,4);x.scale.z=.19,a(M,.5,.08,.17,16766832,0,.35,0)}let A=16765803,he=9106416,k=11836159;if(D==="pilotCap"){h(M,.36,15173198,0,.08,0,1,.8,1),a(M,.14,.055,.64,16772558,0,.34,-.03);for(let x of[-.34,.34])h(M,.13,4150123,x,-.04,0,.6,1.3,1);a(M,.48,.1,.13,9297899,0,.08,-.32)}if(D==="safariHat"){u(M,.55,.55,.065,14269302,0,0,0,24),u(M,.28,.37,.3,13148764,0,.18,0,20),u(M,.36,.36,.07,6980950,0,.08,0,20);let x=h(M,.12,8574083,.29,.37,0,.6,2,.4);x.rotation.z=-.4}if(D==="iceTiara"){p(M,.34,.045,14215663,0,.06,0).rotation.x=Math.PI/2;for(let x=-2;x<=2;x++)u(M,0,.085,.3+(2-Math.abs(x))*.09,x%2?he:12177151,x*.13,.23,-.22,5)}if(D==="stormHelm"){h(M,.36,6706846,0,.07,0,1,.8,1),a(M,.5,.1,.12,A,0,.03,-.31);for(let x of[-1,1])m(M,[x*.25,.15,0],[x*.48,.39,0],.045,A),m(M,[x*.48,.39,0],[x*.32,.39,0],.045,A),m(M,[x*.32,.39,0],[x*.52,.66,0],.045,A)}if(D==="solarCrown"){u(M,.34,.34,.15,A,0,.06,0,16),p(M,.42,.055,A,0,.46,.02),h(M,.21,16758363,0,.46,.02,1,1,.35);for(let x=0;x<10;x++){let g=x*Math.PI/5;m(M,[Math.sin(g)*.43,.46+Math.cos(g)*.43,.02],[Math.sin(g)*.58,.46+Math.cos(g)*.58,.02],.035,A)}}if(D==="starGlasses"){for(let x of[-.16,.16]){let g=u(M,0,.18,.055,A,x,0,0,5);g.rotation.x=Math.PI/2,h(M,.09,15635142,x,0,-.04,1,1,.25)}a(M,.12,.035,.06,A,0,0,0)}if(D==="cyberVisor"){a(M,.68,.25,.12,3883368,0,0,0),a(M,.57,.15,.045,he,0,0,-.08);for(let x=-2;x<=2;x++)a(M,.035,.11,.02,7513324,x*.095,0,-.11)}if(D==="butterflyMask"){for(let x of[-1,1]){let g=h(M,.19,x<0?he:k,x*.22,.07,0,1.2,1,.25);g.rotation.z=-x*.35,h(M,.13,15507164,x*.2,-.12,0,1,.8,.25),h(M,.075,3295333,x*.14,0,-.06,1,1,.25)}a(M,.08,.12,.06,A,0,0,-.02)}if(D==="royalMask"){a(M,.65,.24,.1,A,0,0,0);for(let x of[-.16,.16])h(M,.09,5125205,x,0,-.07,1,.7,.3);for(let x=-2;x<=2;x++)u(M,0,.055,.17,x%2?15235234:12296959,x*.13,.22,0,4)}if(D==="explorerPack"){a(M,.57,.62,.3,5086332,0,.02,.12),a(M,.38,.26,.12,9030039,0,-.08,.3),u(M,.12,.12,.65,14926220,0,.4,.1).rotation.z=Math.PI/2;for(let x of[-.19,.19])a(M,.06,.65,.03,14598273,x,.02,-.05)}if(D==="beeWings"){for(let x of[-1,1])for(let g=0;g<2;g++){let O=h(M,.25,13759985,x*(.32+g*.16),.08+g*.3,.03,.7,1.6,.22);O.rotation.z=-x*.65}h(M,.17,A,0,0,.12,.6,1.5,1)}if(D==="jetpack"){a(M,.44,.5,.2,6651809,0,.02,.08);for(let x of[-.28,.28])u(M,.13,.18,.61,12964575,x,0,.15,16),u(M,.18,.11,.12,A,x,-.34,.15,16),u(M,0,.13,.34,he,x,-.55,.15,7).rotation.z=Math.PI}if(D==="phoenixWings"||D==="infinityWings"){let x=D==="infinityWings";for(let g of[-1,1])for(let O=0;O<5;O++){let q=h(M,.16,x?O%2?he:k:O%2?A:16089958,g*(.25+O*.15),.12+O*.12,.05+O*.025,.65,2.5,.35);q.rotation.z=-g*(.3+O*.13)}if(x){p(M,.48,.028,A,0,.25,.13),p(M,.64,.025,k,0,.25,.13);for(let g of[-1,1])h(M,.08,A,g*.72,.7,.15)}}if(D==="auroraCape"){for(let x=-2;x<=2;x++){let g=u(M,.075,.145,.9,[he,k,8380603,8829434,14851802][x+2],x*.14,-.16,.1,4);g.scale.z=.27}a(M,.63,.09,.15,A,0,.34,0)}if(D==="cometPack"){let x=u(M,0,.27,.55,he,0,.25,.13,6);x.rotation.z=-.5,p(M,.32,.03,A,0,.25,.13);for(let g=0;g<4;g++){let O=h(M,.1,g%2?k:12185599,.1+g*.08,-.05-g*.13,.13,1,2,.4);O.rotation.z=-.45}}return M}function S(I,D){I.wear.clear();for(let M of Object.values(D)){let A=Wt[M];if(!A)continue;let he=w(I.wear,M);A.slot==="head"&&he.position.set(0,M==="halo"?1.6:["headphones"].includes(M)?1.08:1.35,0),A.slot==="face"&&he.position.set(0,1.05,-.34),A.slot==="back"&&he.position.set(0,.6,.33)}I.hat.visible=!D.head||D.head==="headphones"}function U(I,D){if(ft[D]){let x=o(I);return gh(D,x,{ball:h,cyl:u,torus:p,rod:m,softBox:a}),x}if(Wt[D]){let x=o(I),g=w(x,D);return g.position.y=["cape","auroraCape","jetpack"].includes(D)?.82:.55,x}let M=o(I),A=5610951,he=15843169,k=16773330;if(D==="boots"||D==="springs")for(let x of[-.28,.28]){a(M,.36,.22,.7,D==="boots"?A:9861582,x,.35,-.1),a(M,.33,.3,.36,D==="boots"?7915215:12821745,x,.55,.1),a(M,.38,.08,.74,k,x,.21,-.1);for(let g=0;g<3;g++)a(M,.25,.025,.04,k,x,.48,-.32+g*.09);if(D==="springs")for(let g=0;g<3;g++)p(M,.13,.025,he,x,.06+g*.055,0).rotation.x=Math.PI/2}if((D==="energy"||D==="hydration"||D==="juice")&&(u(M,.25,.28,.8,D==="juice"?16099675:A,0,.5,0),u(M,.14,.14,.2,k,0,.99,0),u(M,.19,.19,.12,5334158,0,1.13,0),a(M,.36,.26,.055,k,0,.6,-.25),D==="juice"?h(M,.1,15898692,0,.6,-.3):a(M,.08,.19,.05,A,0,.6,-.29)),D==="pen"){a(M,1.2,.09,1,10012531,0,.06,0);for(let x of[-.52,.52])for(let g of[-.4,0,.4])a(M,.08,.55,.08,k,x,.33,g),a(M,.06,.06,.8,k,x,.42,0);d(M,he,.6)}if(D==="incubator"){u(M,.53,.6,.15,11569751,0,.1,0),p(M,.43,.08,he,0,.23,0).rotation.x=Math.PI/2,d(M,15505259,.75);for(let x of[-.55,.55])m(M,[x,.1,0],[x,1.05,0],.04,A);a(M,1.2,.14,.5,15303283,0,1.1,0)}if(D==="gloves")for(let x of[-.26,.26])h(M,.23,15906415,x,.5,0,.9,1.2,.55),a(M,.32,.2,.24,A,x,.24,0),h(M,.12,15906415,x+Math.sign(x)*.2,.48,0,.75,1.3,.9);if(D==="coach"){a(M,1,.17,1.4,A,0,.12,0),a(M,.75,.04,1.1,3426142,0,.23,0);for(let x=0;x<5;x++)a(M,.7,.01,.03,11192271,0,.26,-.4+x*.2);for(let x of[-.44,.44])m(M,[x,.2,-.4],[x,1,-.5],.04,k);a(M,1,.23,.14,6600369,0,1,-.5)}if(D==="charm"){p(M,.31,.05,A,0,.95,0);let x=u(M,.3,.3,.12,he,0,.42,0);x.rotation.x=Math.PI/2;let g=u(M,0,.17,.08,k,0,.43,-.08,5);g.rotation.x=-Math.PI/2}if(D==="turbo"){u(M,.18,.23,.8,15777377,0,.7,0),u(M,0,.18,.32,14579833,0,1.26,0);for(let x of[-.25,.25])a(M,.18,.35,.2,A,x,.43,0);u(M,.15,0,.35,15569252,0,.14,0),h(M,.1,A,0,.86,-.18)}if(D==="shield"){let x=h(M,.48,A,0,.67,0,1,1.25,.22);p(M,.42,.045,k,0,.67,-.04).scale.y=1.2,a(M,.08,.43,.07,he,0,.67,-.13),a(M,.3,.08,.07,he,0,.67,-.13)}return M}function R(I){let D=o(I),M=o(D,0,.62,0),A=[],he=[];a(M,.62,.67,.38,2469802,0,.35,0),a(M,.4,.45,.13,16034132,0,.38,.27),h(M,.28,15777163,0,1.01,-.02,.95,1.08,.9);let k=o(M);a(k,.56,.18,.46,7035595,0,1.25,0),a(k,.53,.055,.24,7035595,0,1.2,-.31);for(let O of[-.1,.1])h(M,.029,2570576,O,1.05,-.27),h(M,.009,16777215,O-.008,1.06,-.295);for(let O of[-.17,.17]){let q=o(M,O,0,0);a(q,.23,.5,.23,3361650,0,-.25,0),a(q,.25,.13,.39,16771499,0,-.55,-.055),A.push(q)}for(let O of[-.41,.41]){let q=o(M,O,.68,0);a(q,.18,.35,.2,2469802,0,-.14,0),h(q,.105,15777163,0,-.36,0),he.push(q)}let x=o(D,0,1.04,-.57);D.traverse(O=>{O.isMesh&&(O.castShadow=!0)});let g=o(M);return{g:D,hips:M,legs:A,arms:he,carry:x,wear:g,hat:k}}function F(I,D,M,A=0,he=1){let k=o(I,D,0,M);if(k.scale.setScalar(he),u(k,.15,.22,1.5,9727820,0,.75,0,7),A===3)for(let x=0;x<3;x++)u(k,0,1.05-x*.21,1.4,[11654875,15070957,16252152][x],0,1.65+x*.55,0,7);else h(k,1.03,A===2?6454466:4100700,0,2,0,1,1,.9),h(k,.73,A===2?8958608:7386716,.51,2.35,.1),h(k,.65,A===2?10266329:7780711,-.5,2.05,-.1)}function V(I,D,M,A,he=2){let k=o(I,D,0,M);u(k,0,.53,he,A,0,he/2,0,5);let x=u(k,0,.29,he*.7,A,.43,he*.33,.2,5);return x.rotation.z=-.35,k}let E=o(i),b=o(E),B=[],Y=[],te=[],ee=[];l(b,28,.7,30,7648127,0,-.43,12),l(b,10,.04,30,14994592,0,-.025,12),l(b,28,.3,1,5867873,0,-.22,27);let ie=o(b,mn.x,0,mn.z),se=l(ie,7,.08,7.8,9750141,0,.02,0);for(let I of[-3.5,3.5])for(let D=-3.5;D<4;D+=1.4)l(ie,.13,.9,.13,16048051,I,.5,D),l(ie,.1,.13,1.45,16048051,I,.72,D+.5),l(ie,.1,.13,1.45,16048051,I,.33,D+.5);for(let I=-3.5;I<4;I+=1.4)l(ie,.13,.9,.13,16048051,I,.5,3.8),l(ie,1.4,.12,.12,16048051,I+.5,.72,3.8);for(let I of[-2.8,2.8])l(ie,.18,2.9,.18,11701600,I,1.45,2.5);let pe=u(ie,0,4.5,1.2,7824561,0,3.2,2.5,4);pe.rotation.y=Math.PI/4,pe.scale.z=.48,_(ie,"SEU CURRAL",0,2.1,-3.7,3.7);let K=o(ie),xe=o(ie),ve=o(b,Tn.x,0,Tn.z);l(ve,2.1,.28,3.3,3233139,0,.15,0),l(ve,1.68,.07,2.9,3358805,0,.33,0);let Le=[];for(let I=0;I<9;I++)Le.push(l(ve,1.6,.016,.055,7047576,0,.374,-1.3+I*.32));for(let I of[-.95,.95])m(ve,[I,.35,-1],[I,1.8,-1.2],.065,10864330),m(ve,[I,1.8,-1.2],[I,1.25,.9],.045,10864330);l(ve,1.95,.37,.28,3324338,0,1.8,-1.25),l(ve,.75,.17,.03,10808757,0,1.82,-1.42),_(ve,"ESTEIRA",0,2.8,0,3);let We=o(b,7,0,21);l(We,2.8,1.25,1.6,15052645,0,.67,0),l(We,3.2,.16,2,16309936,0,1.34,0);for(let I of[-1.4,1.4])l(We,.12,2.6,.12,5471379,I,1.5,0);l(We,3.4,.2,2,3781804,0,2.7,0),_(We,"MELHORIAS",0,3.25,0,3);for(let I of[-9.8,10.5])F(b,I,8,0,1.4),F(b,I,23,0,1.15);_(b,"BASE SEGURA",0,3.7,4,4.3),l(b,23,.06,.32,13169563,0,.025,3);for(let I=0;I<De.length;I++){let D=De[I],M=-(I*Ct+Ct/2),A=o(E);B.push(A),l(A,28,.8,Ct,D.ground,0,-.46,M),l(A,9.5,.06,Ct,D.path,0,-.03,M);for(let W of[-5.1,5.1])l(A,.2,.08,Ct,D.color,W,.03,M);for(let W=0;W<6;W++)l(A,.1,.01,1.7,16772554,0,.013,-I*Ct-W*8-3);let he=o(A,0,0,-I*Ct);for(let W of[-6,6])l(he,.42,4.3,.48,D.color,W,2.15,0),l(he,.7,.2,.75,16378298,W,4.35,0);l(he,12.6,.38,.48,D.color,0,4.6,0),_(he,`${I+1} \xB7 ${D.name.toUpperCase()}`,0,5.25,0,6.3);for(let W=0;W<10;W++){let $=W%2?1:-1,P=$*(7+W%3*2),N=-I*Ct-5-W*4.1;if(I===0){F(A,P,N,0,.8+W%3*.22);for(let ne=0;ne<3;ne++)u(A,.03,.03,.55,5410126,P+.4*ne,.25,N+1),h(A,.15,16042588,P+.4*ne,.55,N+1,1,.65,1)}if(I===1&&(W%3===0?(h(A,2.4,15119733,P,-.15,N,1,.78,1.35),h(A,1.4,15845002,P-$*.8,-.18,N+1.8,1.4,.45,1.1)):(u(A,.22,.26,2.2,7055212,P,1.05,N,7),m(A,[P,.8,N],[P+$*.65,.8,N],.15,7055212),u(A,.15,.15,.85,7055212,P+$*.65,1.2,N,7))),I===2){F(A,P,N,2,1);let ne=o(A,P-$*1,0,N+1.4);u(ne,.16,.21,.85,15454134,0,.4,0),h(ne,.68,W%2?10256603:15306921,0,1,0,1,.47,1);for(let le of[-.2,.2])h(ne,.1,16772304,le,1.28,.18,1,.3,1)}if(I===3&&(F(A,P,N,3,1),W%2&&V(A,P-$,N+1.7,8967914,1.6),h(A,.75,16251632,P+$,.3,N-1,1,.5,1.3)),I===4){let ne=c(A,r("volcano-slope",()=>new Ki([new Be(2.2,0),new Be(1.75,.3),new Be(1.22,1),new Be(.82,2.15),new Be(.56,3.1),new Be(.38,3.1),new Be(.32,2.85)],24)),4669011,P,0,N);u(A,.4,.56,.12,16755799,P,3.1,N,8),l(A,1.3,.02,3.2,15891267,P-$,.01,N+1),V(A,P-$*1.5,N-1,12411489,.8)}if(I===5&&(V(A,P,N,W%2?11507182:7524321,2.4+W%3*.5),W%3===0&&c(A,r("crystalArch",()=>new es(3.1,.36,8,32,Math.PI)),5988494,0,0,N).scale.set(2.3,1.8,1)),I===6){V(A,P,N,9080267,1.2);let ne=h(A,.42,W%2?15251951:9358300,P,3+W%3,N);if(ee.push({mesh:ne,y:ne.position.y,phase:W}),W%3===0){let le=h(A,1.1,10259424,P+$*2,5.5,N);p(A,1.6,.055,15978889,P+$*2,5.5,N).rotation.x=1,ee.push({mesh:le,y:5.5,phase:W})}}if(I===7){l(A,5,.04,3,6870231,P,-.005,N);for(let le=0;le<3;le++){let ae=.8+le*.5;m(A,[P+le*.32,0,N],[P+le*.32,ae,N],.12,le%2?16756104:16095426),m(A,[P+le*.32,ae*.6,N],[P+le*.32+.4,ae*.9,N+.1],.09,16095426)}let ne=h(A,.22,16775143,P-$*.8,.3,N+.9);W%2===0&&(p(A,1.05,.13,15905225,P,1.1,N).rotation.y=.4)}if(I===8){u(A,.09,.09,2.6,16774881,P,1.3,N);let ne=h(A,.65,W%2?15760045:8641486,P,2.6,N,1,1,.4);p(A,.42,.08,16772550,P,2.6,N-.28),W%3===0&&(l(A,1.9,1.4,1.6,12814180,P+$*1.2,.7,N+1.4),l(A,2.1,.28,1.8,16769003,P+$*1.2,1.55,N+1.4))}if(I===9){for(let ne=0;ne<3;ne++){let le=P+(ne-1)*.5,ae=3.4+W%3*.5;u(A,.1,.15,ae,8047993,le,ae/2,N+ne*.25,7);for(let ge=.6;ge<ae;ge+=.7)p(A,.12,.025,14020275,le,ge,N+ne*.25).rotation.x=Math.PI/2,h(A,.35,2852191,le+$*.22,ge+.2,N+ne*.25,.9,.18,.6)}W%3===0&&(l(A,1.8,.32,1.8,6847856,P,.16,N+1.5),u(A,0,1,.6,12602709,P,1.6,N+1.5,4),l(A,.5,1.1,.5,16770725,P,.8,N+1.5))}if(I===10){let ne=2+W%3*1.5;l(A,2,ne,2,4614284,P,ne/2,N);for(let ae=0;ae<3;ae++)l(A,.28,.28,.03,9172959,P+(ae-1)*.5,ne*.65,N-1.02);let le=o(A,P,2.1,N+1.6);p(le,.65,.16,15910507);for(let ae=0;ae<8;ae++){let ge=ae*Math.PI/4,Ne=l(le,.24,.35,.2,15910507,Math.sin(ge)*.83,Math.cos(ge)*.83,0);Ne.rotation.z=-ge}ee.push({mesh:le,y:le.position.y,phase:W,spin:!0})}if(I===11){for(let ne=0;ne<3;ne++)h(A,1.3,16053759,P+(ne-1)*.7,.5,N,1,.45,1);if(u(A,.3,.4,3.4,16773848,P,1.7,N,10),l(A,1.1,.23,1.1,15186537,P,3.5,N),W%2===0){p(A,1.1,.1,14068991,P,4.4,N);let ne=h(A,.22,16765553,P,4.4,N);ee.push({mesh:ne,y:4.4,phase:W})}}}if(I===12)for(let W of[-1,1]){let $=W*7;for(let P=0;P<4;P++){let N=M-18+P*12;u(A,.55,.75,3.8,7829416,$,1.9,N,10),p(A,.65,.1,10873588,$,3.8,N).rotation.x=Math.PI/2;let ne=h(A,.32,16768906,$,4.3,N);ee.push({mesh:ne,y:4.3,phase:P+W}),m(A,[$,4.6,N],[$-W*.45,5.3,N],.075,11070975),m(A,[$-W*.45,5.3,N],[$+W*.2,5.3,N],.075,11070975),m(A,[$+W*.2,5.3,N],[$-W*.4,6.1,N],.075,11070975);for(let le=0;le<3;le++)h(A,.9,8754877,$+W*(1+le*.5),4.6,N+le*.3,1,.5,1)}}if(I===13){for(let $ of[-1,1])for(let P=0;P<5;P++){let N=$*(7+P%2*2),ne=M-19+P*9,le=o(A,N,0,ne);if(P%2===0){u(le,.7,.9,2.9,5406337,0,1.45,0,12),p(le,1.05,.12,15912577,0,3.4,0),h(le,.94,16772552,0,3.4,0,1,1,.13);for(let ge=0;ge<12;ge++){let Ne=ge*Math.PI/6;a(le,.07,.16,.04,5406337,Math.sin(Ne)*.81,3.4+Math.cos(Ne)*.81,-.15)}let ae=o(le,0,3.4,-.2);m(ae,[0,0,0],[0,.7,0],.045,5406337),m(ae,[0,0,0],[.5,0,0],.035,14460501),ee.push({mesh:ae,y:3.4,phase:P,spin:!0})}else{for(let ae of[.3,3.5])u(le,.9,.9,.18,15056757,0,ae,0);for(let ae of[-.75,.75])m(le,[ae,.3,0],[ae,3.5,0],.09,5406337);u(le,.7,.08,1.4,10872029,0,2.65,0,16),u(le,.08,.7,1.4,10872029,0,1.15,0,16),u(le,0,.5,.6,15056757,0,.7,-.15,12)}for(let ae=0;ae<3;ae++)h(A,.45,7912102,N+$*(1+ae*.3),.4,ne+1,1,.45,1)}let W=p(A,5.8,.18,15056757,0,3,M);W.scale.y=1.2}let k=En[I],x=o(A,k.x,0,k.z);u(x,1.55,1.7,.2,10123090,0,.1,0);for(let W=0;W<3;W++)p(x,1.45-W*.12,.065,14926459,0,.22+W*.035,0).rotation.x=Math.PI/2;let g=Array.from({length:3},(W,$)=>{let P=d(x,D.color,.8,fh(I,$));return P.position.set(($-1)*.85,.2,$===1?.42:0),P}),O=y(x);Y.push({g:x,eggs:g,plaque:O});let q=T(A,D.kind,D.color,1.65);q.g.position.set(k.x,0,k.z-2.5),_(q.g,"DONO DO OVO",0,2.9,0,2.6),te.push(q)}for(let I of qa){let D=B[I.world];if(I.world===0||I.world===2){let M=u(D,.4,.4,1.55,10253394,I.x,.37,I.z,8);M.rotation.z=Math.PI/2}else if(I.world===1)l(D,1.35,I.h,1.1,12292190,I.x,I.h/2,I.z);else if(I.world===3)V(D,I.x,I.z,11724011,I.h);else if(I.world===4)u(D,.35,.8,I.h,9591137,I.x,I.h/2,I.z,6);else if(I.world===8)u(D,.55,.66,I.h,16230326,I.x,I.h/2,I.z),p(D,.5,.09,16773332,I.x,I.h,I.z).rotation.x=Math.PI/2;else if(I.world===9){let M=u(D,.32,.32,1.4,7584881,I.x,.32,I.z,7);M.rotation.z=Math.PI/2}else I.world===10?l(D,1.2,I.h,1.2,14595688,I.x,I.h/2,I.z):V(D,I.x,I.z,De[I.world].color,I.h)}let $e=o(B[De.length-1],0,0,-Ct*De.length+1);l($e,18,.45,1,6908570,0,.2,0),_($e,De.length+" MUNDOS \xB7 VOLTE AO CURRAL",0,3,0,7);let Qe=R(E),Ke=new zt(new Qi(1.15,28,18),new pi({color:8843007,transparent:!0,opacity:.25,depthWrite:!1}));Ke.position.y=1,Ke.visible=!1,Qe.g.add(Ke);let oe=o(Qe.g,0,.2,0);for(let I=0;I<2;I++)p(oe,.7+I*.12,.028,9561294,0,I*.5,0).rotation.x=Math.PI/2;oe.visible=!1;let re=o(E),Te=Array.from({length:24},()=>{let I=h(re,.09,16769443);return I.visible=!1,{mesh:I,life:0,v:new H}}),ze=0;function Ue(I,D){for(let M=0;M<16;M++){let A=Te[ze++%Te.length];A.mesh.material=s(D),A.mesh.position.copy(I),A.mesh.visible=!0,A.life=.6+Math.random()*.4,A.v.set((Math.random()-.5)*3,2+Math.random()*2,(Math.random()-.5)*3)}}function Ze(I,D){for(let M of ee)M.spin?M.mesh.rotation.z=D*.7+M.phase:M.mesh.position.y=M.y+Math.sin(D*1.5+M.phase)*.3;for(let M of Te)M.life>0&&(M.life-=I,M.mesh.visible=M.life>0,M.v.y-=7*I,M.mesh.position.addScaledVector(M.v,I),M.mesh.scale.setScalar(Math.max(.1,M.life)));for(let M=0;M<Le.length;M++)Le[M].position.z=-1.4+(D*2+M*.32)%2.8}function pt(I,D,M=0){for(let A=0;A<I.limbs.length;A++){let he=I.limbs[A];he.rotation.x=Math.sin(D*9+A*Math.PI)*(.13+M*.25)}I.g.position.y=Math.sin(D*(M?10:2))*(M?.07:.025)}function L(I,D){if(!D||D==="normal")return;let M=D==="gold"?[16765788]:D==="cosmic"?[11439103,7921151]:[16751266,16769157,9300932,9423359];for(let A=0;A<M.length;A++){let he=p(I,.5+A*.06,.026,M[A],0,.12+A*.065,0);he.rotation.x=Math.PI/2}if(D==="cosmic")for(let A=0;A<4;A++){let he=A*Math.PI/2;h(I,.05,16777215,Math.sin(he)*.6,.6,Math.cos(he)*.6)}I.userData.mutation=D}function rt(I,D){se.material=s(I.color),pe.material=s(I.roof),xe.clear();for(let M=0;M<D;M++)u(xe,.37,.4,.06,13745522,(M%4-1.5)*1.45,.09,Math.floor(M/4)*1.1-2.7,10);for(let M of[-3,3]){u(xe,.3,.23,.5,I.roof,M,.3,3);for(let A=0;A<3;A++)h(xe,.17,I.color===7833016?16769157:16229816,M+(A-1)*.2,.85,3)}}let ke=B.map((I,D)=>{let M=o(I),A=p(M,1.15,.06,16766312,0,.1,0);A.rotation.x=Math.PI/2;let he=o(M),k=De[D];if(D===13)m(he,[0,2.2,0],[0,.5,0],.05,15912577),h(he,.48,9561294,0,.5,0),p(he,.49,.035,15912577,0,.5,0);else if(D===0||D===9)u(he,.18,.18,2.2,k.color,0,.45,0).rotation.z=Math.PI/2;else if(D===4||D===5||D===6)u(he,0,.6,1.3,k.color,0,.7,0,6);else if(D===3||D===7||D===8)h(he,.8,k.color,0,.14,0,1.4,.12,1);else if(D===10)l(he,1.4,.45,1.2,16760158,0,1.4,0);else for(let x=0;x<3;x++)p(he,.5+x*.2,.05,k.color,0,.3+x*.3,0).rotation.x=Math.PI/2;return{node:M,body:he,ring:A}});function Ve(I){ke.forEach((D,M)=>{let A=I.hazard(M);D.node.position.set(A.x,0,A.z),D.ring.material=s(A.active?16740442:A.warning?16767842:13360333),D.body.visible=A.active||A.warning,D.body.scale.y=A.active?1:.3,D.body.rotation.y=I.time*(M+1)*.3})}return{hero:R,mutate:L,decorate:rt,updateHazards:Ve,equipAccessories:S,setTrainingPlaque:f,shieldBubble:Ke,abilityAura:oe,root:E,base:b,zoneGroups:B,nests:Y,guardians:te,player:Qe,penContent:K,egg:d,shopItem:U,creature:T,animateCreature:pt,animate:Ze,burst:Ue,label:_,mat:s,group:o}}var _h={compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10m-2-10h3m-3 10h3"/></svg>',gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 3 1-2h4l1 2 2 1 2-1 3 4-2 2v3l2 2-2 4-3-1-2 1-1 3h-4l-1-3-2-1-3 1-2-4 2-2V9L2 7l3-4 2 1Z"/><circle cx="12" cy="11" r="3"/></svg>',pause:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',full:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 7 16-7-4-7 4Z"/></svg>',egg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15c0 5-4 7-8 7s-8-2-8-7S9 2 12 2s8 8 8 13Z"/><path d="m7 12 3-2 3 3 4-2"/></svg>',speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17a9 9 0 1 1 18 0M12 13l5-5M4 21h16"/><circle cx="12" cy="14" r="2"/></svg>',dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9h12M6 15h12M3 8v8m3-11v14M18 5v14m3-11v8"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 2-9 12h6l-1 8 9-12h-6Z"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 8 3v6c0 6-8 11-8 11S4 17 4 11V5Z"/><path d="m8 11 3 3 5-5"/></svg>',juice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 2 13h10l2-13ZM3 8h18M12 8l2-6h5"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 11 10-8 10 8M5 10v11h14V10M10 21v-7h4v7"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 22V3m0 0c5-5 9 5 14 0v11c-5 5-9-5-14 0"/></svg>',friends:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="7" r="3"/><path d="M2 21v-4c0-7 14-7 14 0v4M17 4a3 3 0 0 1 0 6m2 3c3 1 3 4 3 8"/></svg>',shop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9h18l-2-6H5Zm1 0v12h16V9M9 21v-7h6v7"/></svg>',help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 1-2 3m0 3h.01"/></svg>',jump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V3m-7 7 7-7 7 7"/></svg>'},we=i=>document.getElementById(i),Sc="integro-box-eggs-v1";function vh({onExit:i,registerAdapter:e}){let t=window.BoxStorage||localStorage,n=null,s="",r=null,o=null,c=null,l=!0;try{c=JSON.parse(t.getItem(Sc)||"null")}catch{l=!1}let a=new ds(c),h=!1,u,p,m,_,y=0,f=0,d=0,T=0,w=null,S="gear",U=0,R=0,F=0,V=0,E=.52,b=.52,B=null,Y=null,te="",ee="",ie="",se=-1,pe=-1,K={},xe=null,ve=null,Le={x:0,z:0},We=!1,$e=new Set,Qe=0,Ke=0,oe=we("eggApp"),re=we("eggCanvas"),Te=new H,ze=C=>C.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:2}),Ue=Tc({stage:we("eggStage"),getGame:()=>a,blocked:()=>!!w,use:Ze,open:()=>Fe("abilities")});function Ze(C){!h||window.BoxEggCloud?.frozen||a.useAbility(C)&&(z(),P(),le(),re.focus())}let pt=document.createElement("div");pt.className="egg-income-effects",pt.setAttribute("aria-hidden","true"),we("eggStage").append(pt);let L=[],rt=0,ke=document.createElement("span");ke.className="egg-wallet-gain",ke.setAttribute("aria-hidden","true"),document.querySelector("#eggApp .egg-money").append(ke);function Ve(C){if(!C.uid||r||!_||L.length>=24)return;let j=document.createElement("div");j.className="egg-income-float",j.innerHTML="<span>"+_h.coin+" +"+C.amount.toLocaleString("pt-BR")+"</span>",pt.append(j),L.push({el:j,uid:C.uid,start:performance.now()})}function I(C){for(let j of L){let Se=!r&&_?.penContent.userData.actors?.find(et=>et.uid===j.uid),ye=Se?.g||(s===j.uid?n?.g:null);if(C-j.start>1800||!ye){j.el.remove(),j.done=!0;continue}let Z=ye.getWorldPosition(new H);Z.y+=1.3,Z.project(m);let de=Z.z>=-1&&Z.z<=1&&Math.abs(Z.x)<.94&&Math.abs(Z.y)<.83;j.el.hidden=!de,de&&(j.el.style.left=(Z.x+1)*50+"%",j.el.style.top=(1-Z.y)*50+"%")}L=L.filter(j=>!j.done),C>rt&&(ke.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning"))}function D(){for(let C of L)C.el.remove();L=[],ke.textContent="",document.querySelector("#eggApp .egg-money").classList.remove("earning")}function M(){a.captureNests();try{t.setItem(Sc,JSON.stringify(a.save)),l=!0,window.BoxEggCloud?.dirty()}catch{l=!1}}function A(C){we("eggToast").textContent=C,U=performance.now()+3400}function he(){B=null,Y=null,re.classList.remove("dragging"),$e.clear(),Le={x:0,z:0},We=!1,ve=null,xe=null,we("eggStick").style.transform="translate(0px,0px)",we("eggSprint").classList.remove("held")}function k(){R=V,b=.52,B=null,Y=null,re.classList.remove("dragging"),we("eggCamera").setAttribute("aria-pressed","false")}function x(){let C=Math.atan2(Math.sin(R-V),Math.cos(R-V));R=Math.abs(Math.abs(C)-Math.PI)<.2?V:V+Math.PI,b=.38,we("eggCamera").setAttribute("aria-pressed",String(Math.abs(R-V)>.2))}re.addEventListener("pointerdown",C=>{!h||w||B!==null||C.pointerType==="mouse"&&C.button!==0||(C.preventDefault(),B=C.pointerId,Y={x:C.clientX,y:C.clientY},re.setPointerCapture(C.pointerId),re.classList.add("dragging"),re.focus())}),re.addEventListener("pointermove",C=>{if(C.pointerId!==B||!Y||w)return;C.preventDefault();let j=C.clientX-Y.x,Se=C.clientY-Y.y;R-=j/Math.max(240,re.clientWidth)*Math.PI*2,R=Math.atan2(Math.sin(R),Math.cos(R)),b=Math.max(.2,Math.min(1.05,b+Se/Math.max(200,re.clientHeight)*1.6)),Y={x:C.clientX,y:C.clientY},we("eggCamera").setAttribute("aria-pressed","false")});let g=C=>{C.pointerId===B&&(B=null,Y=null,re.classList.remove("dragging"))};for(let C of["pointerup","pointercancel","lostpointercapture"])re.addEventListener(C,g);e&&(o=e("egg",{scene:()=>p,active:()=>h,state:()=>({x:a.player.x,y:a.player.y,z:a.player.z,yaw:Qe,zone:"world"}),enter:()=>{z(),A("Sala conectada! Abra Amigos para correr, visitar e trocar.")},leave:()=>{r=null,ee="",N()}}));function O(){let C=new Js({alpha:!0,antialias:!0});C.setPixelRatio(1),C.setSize(130,120),C.outputColorSpace=Et,C.toneMapping=Hs,C.toneMappingExposure=1.2;let j=new Yi;j.add(new ts(16777215,11057583,2.5));let Se=new ns(16777215,2);Se.position.set(3,6,-5),j.add(Se);let ye=new Pt(30,130/120,.1,30);for(let Z=0;Z<De.length;Z++){let de=_.creature(j,De[Z].kind,De[Z].color);ye.position.set(2,1.8,-3.5),ye.lookAt(0,.78,0),C.render(j,ye),K[Z]=C.domElement.toDataURL("image/png"),j.remove(de.g)}for(let Z of[...Object.keys(ii),...Object.keys(Ei),...Object.keys(Wt),...Object.keys(ft)]){let de=_.shopItem(j,Z);ye.position.set(1.7,1.6,-3.1),ye.lookAt(0,.6,0),C.render(j,ye),K[Z]=C.domElement.toDataURL("image/png"),j.remove(de)}for(let Z of Object.keys(St)){let de=_.egg(j,15505771,1,Z);ye.position.set(1.7,1.6,-3.1),ye.lookAt(0,.6,0),C.render(j,ye),K["egg-"+Z]=C.domElement.toDataURL("image/png"),j.remove(de)}C.dispose(),C.forceContextLoss()}function q(){try{u=new Js({canvas:re,antialias:!0,alpha:!1,powerPreference:"high-performance"}),u.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<950?1.5:1.75)),u.shadowMap.enabled=!0,u.shadowMap.type=Jr,u.outputColorSpace=Et,u.toneMapping=Hs,u.toneMappingExposure=1.1,p=new Yi,p.background=new Je(De[0].sky),p.fog=new Ls(De[0].sky,42,108),m=new Pt(52,1,.1,130),p.add(new ts(16775917,6983578,2));let C=new ns(16774104,2.4);C.position.set(-10,20,13),C.castShadow=!0,C.shadow.mapSize.set(1024,1024),Object.assign(C.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:65}),C.shadow.normalBias=.035,C.shadow.bias=-2e-4,p.add(C),p.add(C.target),p.userData.sun=C,_=xh(p),O(),m.position.set(0,8,27),m.lookAt(0,1,10),new ResizeObserver(W).observe(we("eggStage")),W(),N(),le(),f=performance.now(),ae(f)}catch(C){console.error("Pegue o Ovo 3D:",C),we("eggWebglError").hidden=!1}}function W(){if(!u)return;let C=re.clientWidth,j=re.clientHeight;!C||!j||(u.setSize(C,j,!1),m.aspect=C/j,m.fov=C/j>2?58:C/j<1?64:52,m.updateProjectionMatrix())}function $(){let C=Le.x+($e.has("d")||$e.has("arrowright")?1:0)-($e.has("a")||$e.has("arrowleft")?1:0),j=Le.z+($e.has("s")||$e.has("arrowdown")?1:0)-($e.has("w")||$e.has("arrowup")?1:0);return m.getWorldDirection(Te),Te.y=0,Te.normalize(),{x:-C*Te.z-j*Te.x,z:C*Te.x-j*Te.z,sprint:We||$e.has("shift")}}function P(){let C=0;for(let j of a.drainEvents()){if(j.type==="income"){C+=j.amount,Ve(j);continue}j.type==="grab"&&(V=Math.PI,k()),["caught","deposit","train"].includes(j.type)&&(V=0,k()),["grab","deposit","caught","hatch","level","sold","upgrade","juice","shield","ability","abilityEnd"].includes(j.type)&&(N(),M()),j.type==="hatch"&&(_?.burst(new H(mn.x,1,mn.z),De[j.world].color),a.save.seen.every(Boolean)&&(j.text+=` Voc\xEA descobriu todas as ${De.length} criaturas!`)),j.type==="ability"&&_?.burst(new H(a.player.x,1,a.player.z),10741230),j.type==="shield"&&_?.burst(new H(a.player.x,1,a.player.z),8843007),j.type==="level"&&_?.burst(new H(Tn.x,1.5,Tn.z),14283674),["train","level"].includes(j.type)&&a.mode==="train"||A(j.text)}C&&(ke.textContent="+"+C.toLocaleString("pt-BR"),rt=performance.now()+1800,document.querySelector("#eggApp .egg-money").classList.add("earning"),we("eggCoins").textContent=a.save.coins.toLocaleString("pt-BR"),M())}function N(){if(!_)return;let C=r||a.save,j=JSON.stringify([C.decoration,a.capacity(),C.creatures,C.eggs]);if(j===ee)return;ee=j,_.decorate(si[C.decoration]||si.meadow,r?Math.max(3,C.creatures.length):a.capacity()),_.penContent.clear(),_.penContent.userData.actors=[];let Se=0;for(let ye of C.eggs||[]){let Z=_.egg(_.penContent,De[ye.world].color,.55,ye.rarity);_.mutate(Z,ye.mutation),Z.position.set((Se%4-1.5)*1.45,.14,Math.floor(Se/4)*1.1-2.7),Z.userData.egg=ye.id,_.penContent.userData.actors.push({g:Z,egg:!0,baseX:Z.position.x,baseZ:Z.position.z}),Se++}for(let ye of C.creatures){let Z=_.creature(_.penContent,De[ye.world].kind,De[ye.world].color,.52,ye.rarity);_.mutate(Z.g,ye.mutation),Z.g.position.set((Se%4-1.5)*1.45,.12,Math.floor(Se/4)*1.1-2.7),_.penContent.userData.actors.push({...Z,uid:ye.uid,baseX:Z.g.position.x,baseZ:Z.g.position.z}),Se++}}function ne(C,j){o?.tick(C),_.updateHazards(a);let Se=a.companion();(Se?.uid||"")!==s&&(n&&_.root.remove(n.g),s=Se?.uid||"",n=Se?_.creature(_.root,De[Se.world].kind,De[Se.world].color,.7,Se.rarity):null,n&&(_.mutate(n.g,Se.mutation),n.g.position.set(a.player.x+1,0,a.player.z+1))),n&&(n.g.position.lerp(new H(a.player.x+1,0,a.player.z+1.1),Math.min(1,C*5)),n.g.rotation.y=Qe,_.animateCreature(n,a.time,a.moving));let ye=a.player,Z=_.player;Z.g.position.set(ye.x,ye.y+(a.mode==="train"?.37:0),ye.z),Math.hypot(j.x,j.z)>.05&&a.mode==="run"&&(Qe=Math.atan2(-j.x,-j.z)),a.mode==="train"&&(Qe=0);let de=Math.atan2(Math.sin(Qe-Z.g.rotation.y),Math.cos(Qe-Z.g.rotation.y));Z.g.rotation.y+=de*Math.min(1,C*14);let et=a.time*(a.sprinting?17:12),dt=a.moving;for(let v=0;v<2;v++)Z.legs[v].rotation.x=Math.sin(et+v*Math.PI)*.7*dt,Z.arms[v].rotation.x=a.carrying!==null?1.03:Math.sin(et+(v+1)*Math.PI)*.55*dt;if(Z.hips.position.y=.62+Math.abs(Math.sin(et))*.035*dt,Z.hips.rotation.z=a.time<(a.pushUntil||0)?.16*Math.sin(a.time*35):a.carrying!==null?.025*Math.sin(et):0,performance.now()<Ke)for(let v of Z.arms)v.rotation.x=1.3;let Xt=a.carriedEgg?`${a.carrying}:${a.carriedEgg.rarity}:${a.carriedEgg.mutation}`:"none";if(se!==Xt){if(Z.carry.clear(),a.carrying!==null){let v=_.egg(Z.carry,De[a.carrying].color,.65,a.carriedEgg.rarity);_.mutate(v,a.carriedEgg.mutation)}se=Xt}let Rt=JSON.stringify(a.save.equipped);Rt!==te&&(_.equipAccessories(Z,a.save.equipped),te=Rt),_.abilityAura.visible=!a.raceMode&&Object.values(a.save.activeAbilities).some(Boolean),_.abilityAura.rotation.y=a.time,_.shieldBubble.visible=a.effect("bubble")||a.carrying!==null&&a.guardians[a.carrying].grace>0&&a.guardians[a.carrying].grace>1.1;let Mt=a.zone();for(let v=0;v<De.length;v++){_.zoneGroups[v].visible=Math.abs(v-Mt)<=2;let G=_.guardians[v],J=a.guardians[v],Q=J.x-G.g.position.x,X=J.z-G.g.position.z;Math.hypot(Q,X)>.005?G.g.rotation.y=Math.atan2(-Q,-X):J.state==="idle"&&(G.g.rotation.y=Math.sin(a.time*.5+v)*.35),G.g.position.x=J.x,G.g.position.z=J.z,_.animateCreature(G,a.time+v,J.state==="chase"||J.state==="return"?1:0),_.nests[v].eggs.forEach((ue,Me)=>{let Ie=a.nestEggs[v][Me],Ce=Ie.rarity+Ie.mutation;ue.userData.signature!==Ce&&(_.nests[v].g.remove(ue),ue=_.egg(_.nests[v].g,De[v].color,.8,Ie.rarity),_.mutate(ue,Ie.mutation),ue.userData.signature=Ce,ue.position.set((Me-1)*.85,.2,Me===1?.42:0),_.nests[v].eggs[Me]=ue),ue.visible=a.nestEggs[v][Me].availableAt<=a.time,ue.rotation.y=a.time*.6,ue.position.y=.2+Math.sin(a.time*2+v+Me)*.04}),a.carrying===v&&(G.g.visible=!0,_.zoneGroups[v].visible=!0)}_.base.visible=ye.z>-88;for(let v of _.penContent.userData.actors||[])v.egg?v.g.rotation.z=Math.sin(a.time*4+v.baseX)*.06:(_.animateCreature(v,a.time+v.baseX,.1),v.g.position.y+=.12,v.g.position.x=v.baseX+Math.sin(a.time*.6+v.baseZ)*.16,v.g.position.z=v.baseZ+Math.cos(a.time*.45+v.baseX)*.12,v.g.rotation.y=Math.sin(a.time*.35+v.baseX)*.7);let It=Math.atan2(Math.sin(R-F),Math.cos(R-F));F+=It*Math.min(1,C*5),E+=(b-E)*Math.min(1,C*8);let Ks=re.clientWidth/re.clientHeight>2,fs=Ks?10:13.5,Qs=Math.cos(E)*fs,Ka=Math.cos(F)*Qs,Qa=Math.sin(F)*Qs,eo=new H(ye.x+Qa,1.05+Math.sin(E)*fs+ye.y*.25,ye.z+Ka);m.position.lerp(eo,Math.min(1,C*9)),m.lookAt(ye.x-Math.sin(F)*3.3,1.05,ye.z-Math.cos(F)*3.3);let to=new Je(De[Mt].sky);p.background.lerp(to,Math.min(1,C*.8)),p.fog.color.copy(p.background);let er=p.userData.sun;er.position.set(ye.x-10,20,ye.z+13),er.target.position.set(ye.x,0,ye.z),_.animate(C,a.mode==="train"?a.time:a.time*.3),pe!==Mt&&(pe=Mt,ye.z<0&&A(`${Mt+1}/${De.length} \xB7 ${De[Mt].name}`))}function le(){Ue.update();let C=a.save,j=a.player,Se=a.zone(),ye=[C.training,C.upgrades.boots,C.upgrades.gloves,C.companionId].join(":");_&&ye!==ie&&(ie=ye,De.forEach((Mt,It)=>_.setTrainingPlaque(It,a.trainingAdvice(It)))),we("eggJuiceCount").textContent=C.supplies.juice,we("eggShieldCount").textContent=C.supplies.shield,we("eggJuice").disabled=!!w||a.mode!=="run"||!C.supplies.juice||a.energy>=a.maxEnergy()-1,we("eggCoins").textContent=C.coins.toLocaleString("pt-BR"),we("eggSpeed").textContent=ze(a.speed()),we("eggLevel").textContent=C.training,we("eggLevelMax").textContent=Vn;let Z=Math.round(a.energy/a.maxEnergy()*100);we("eggEnergyFill").style.width=Z+"%",we("eggEnergyMeter").setAttribute("aria-valuenow",Z),we("eggEnergyMeter").classList.toggle("low",Z<25),we("eggShield").hidden=!C.supplies.shield,we("eggJuice").hidden=!C.supplies.juice,we("eggWorldIndex").textContent=a.inBase()?"BASE SEGURA":`${Se+1} / ${De.length}`,we("eggWorldName").textContent=a.inBase()?"Seu curral":De[Se].name;let de=a.interaction();we("eggInteract").textContent=r?"Voltar ao meu curral":de.label,we("eggInteract").disabled=!r&&["walk","return","wait"].includes(de.type),we("eggTraining").hidden=a.mode!=="train";let et=Math.ceil(Math.max(0,(a.trainTarget()-C.trainXP)/a.trainingRate()));we("eggTrainText").textContent=String(Math.floor(et/60)).padStart(2,"0")+":"+String(et%60).padStart(2,"0"),we("eggTrainText").setAttribute("aria-label",`${et} segundos para ganhar 0,35 de velocidade`),we("eggTrainFill").style.strokeDashoffset=String(100-Math.min(1,C.trainXP/a.trainTarget())*100),we("eggTarget").parentElement.hidden=a.mode==="train";let dt=En.map((Mt,It)=>({i:It,d:pn(j,Mt)})).filter(Mt=>a.availableAt[Mt.i]<=a.time).sort((Mt,It)=>Mt.d-It.d)[0],Xt=a.carrying!==null?mn:dt?En[dt.i]:null;we("eggTarget").textContent=a.mode==="train"?`Treino ${C.training}/${Vn}`:a.carrying!==null?`Curral \xB7 ${Math.ceil(pn(j,mn))} m`:dt?`Ovo \xB7 ${Math.ceil(dt.d)} m`:"Ninhos renovando",we("eggBearing").hidden=!Xt||a.mode==="train",Xt&&(we("eggBearing").style.transform=`rotate(${Math.atan2(Xt.x-j.x,-(Xt.z-j.z))+F}rad)`);let Rt=we("eggChase");if(Rt.hidden=a.carrying===null,a.carrying!==null){let Mt=a.inBase(),It=Math.max(0,Math.round(pn(j,a.guardians[a.carrying])));Rt.classList.toggle("safe",Mt),Rt.classList.toggle("urgent",!Mt&&It<10),Rt.textContent=Mt?"\u2713 Ovo seguro":`! Perseguidor \xB7 ${It} m`,Rt.setAttribute("aria-label",Mt?"Voc\xEA est\xE1 seguro. Guarde o ovo no curral.":`Perseguidor a ${It} metros`)}}function ae(C){y=requestAnimationFrame(ae);let j=Math.min(.05,Math.max(0,(C-f)/1e3));if(f=C,!(!h||!u)){if(!w&&!document.hidden){let Se=$();a.mode==="train"&&Math.hypot(Se.x,Se.z)>.2&&a.interact(),window.BoxEggCloud?.frozen||a.update(j,Se),P(),ne(j,Se),T+=j,T>2&&(M(),T=0)}u.render(p,m),I(C),d+=j,d>.1&&(le(),d=0),we("eggToast").textContent&&C>U&&(we("eggToast").textContent="")}}function ge(){if(w)return;if(r){r=null,ee="",N(),A("Voc\xEA voltou ao seu curral.");return}let C=a.interact();C==="corral"&&Fe("corral"),C==="nest"&&Fe("nest"),P(),le(),w||re.focus()}function Ne(){return`<ol class="egg-help-list"><li><strong>Siga a pista.</strong> Os ${De.length} mundos est\xE3o conectados. N\xE3o h\xE1 troca de tela. Os donos ficam mais r\xE1pidos a cada mundo.</li><li><strong>Escolha seu ovo.</strong> Cada ninho tem tr\xEAs ovos que se renovam a cada 3\u20134 minutos de jogo ativo. As muta\xE7\xF5es dourada, arco-\xEDris e c\xF3smica aumentam o valor em 1,5\xD7, 2\xD7 e 3\xD7. Aproxime-se, toque em \u201CEscolher ovo\u201D ou aperte E e escolha um. Comum vale 1\xD7, raro 3\xD7, \xE9pico 5\xD7 lend\xE1rio 8\xD7 e secreto 12\xD7; lend\xE1rios e secretos aparecem a partir da pista 7. A c\xE2mera vira para o curral; continue em frente para voltar.</li><li><strong>Fuja!</strong> Mova pelo controle ou WASD/setas. Use Espa\xE7o/Pular para saltar obst\xE1culos e Shift/Disparar para correr mais r\xE1pido. O f\xF4lego recarrega sozinho.</li><li><strong>Guarde no curral.</strong> Na base, v\xE1 at\xE9 o cercado e toque em \u201CGuardar ovo\u201D. Ele choca em ${a.hatchTime()} s de jogo ativo. O dono n\xE3o entra na base.</li><li><strong>Venda e melhore.</strong> As criaturas geram integros que entram automaticamente no saldo enquanto voc\xEA joga. O valor aparece sobre elas; voc\xEA tamb\xE9m pode vend\xEA-las no curral. Escolha uma como companheira para ganhar uma habilidade. Compre melhorias ou entre na esteira para treinar a velocidade. Cada barra completa aumenta o n\xEDvel, at\xE9 ${Vn}.</li><li><strong>Confira a plaqueta do ovo.</strong> Ela mostra o treino recomendado e quantos n\xEDveis faltam. O c\xE1lculo considera seus t\xEAnis e luvas, com 10% de vantagem de velocidade carregando o ovo sem disparar. \xC9 uma refer\xEAncia: desvie dos obst\xE1culos durante a fuga.</li><li><strong>Olhe ao redor.</strong> Arraste a \xE1rea do cen\xE1rio com o dedo ou mouse para girar e inclinar a c\xE2mera. Use \u201CAtr\xE1s\u201D ou C para olhar para tr\xE1s; \u201CCentrar\u201D ou R volta \xE0 vista de corrida. O direcional acompanha a c\xE2mera: para cima vai \xE0 frente da tela; esquerda e direita seguem a vis\xE3o atual.</li><li><strong>Dispute com amigos.</strong> Na corrida online, chegue perto de outro corredor e toque na m\xE3o \u201CEmpurrar\u201D ou aperte F. O empurr\xE3o recarrega em 3 segundos; quem recebeu fica protegido por um instante. A base \xE9 uma \xE1rea segura.</li><li><strong>Poderes e boosts.</strong> Compre cargas na base e equipe um poder e um boost. Ative pelos \xEDcones do HUD ou Q/B. Abra Poderes no menu para trocar. H\xE1 prote\xE7\xE3o, congelamento, salto duplo, f\xF4lego infinito e boosts de velocidade, treino, incuba\xE7\xE3o e produ\xE7\xE3o. Eles ficam pausados nas corridas online, que mant\xEAm velocidade igual para todos.</li><li><strong>Prepare sua mochila.</strong> O escudo protege automaticamente de uma captura. Toque em Suco para recuperar o f\xF4lego. Compre na base, com integros ganhas no jogo.</li></ol><p class="egg-muted">${l?"integros, criaturas, ovos no curral e treino ficam salvos neste navegador. Uma corrida em andamento recome\xE7a na base ao recarregar.":"O navegador n\xE3o permitiu salvar. O progresso ficar\xE1 apenas nesta sess\xE3o."} No portal, consulte Amigos e perfil para ver a situa\xE7\xE3o do salvamento online. O jogo pausa ao abrir um painel, trocar de jogo ou sair da tela. N\xE3o h\xE1 dinheiro real.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Jogar</button></div><button class="egg-reset" data-egg-action="resetAsk">Apagar progresso deste jogo</button>`}function Pe(){if(!w)return;let C=a.save,j="",Se="PEGUE O OVO",ye="";if(w==="shop")j="Loja do corredor",Se=`${Object.keys(ii).length+Object.keys(Ei).length+Object.keys(Wt).length+Object.keys(si).length+Object.keys(ft).length} ITENS \xB7 INTEGROS DO JOGO`,ye=`<div class="egg-shop-balance">\u25CF ${C.coins.toLocaleString("pt-BR")} integros dispon\xEDveis</div><div class="egg-shop-tabs"><button data-shop-tab="gear" class="${S==="gear"?"selected":""}">Melhorias permanentes</button><button data-shop-tab="supplies" class="${S==="supplies"?"selected":""}">Mochila \xB7 ${C.supplies.shield+C.supplies.juice}</button><button data-shop-tab="accessories" class="${S==="accessories"?"selected":""}">Acess\xF3rios \xB7 ${C.accessories.length}/${Object.keys(Wt).length}</button><button data-shop-tab="abilities" class="${S==="abilities"?"selected":""}">Poderes e boosts \xB7 8</button><button data-shop-tab="decor" class="${S==="decor"?"selected":""}">Decora\xE7\xF5es</button></div>${a.inBase()?"":"<p>Volte \xE0 base para comprar.</p>"}<div class="egg-sheet-grid">`,S==="gear"?ye+=Object.entries(ii).map(([Z,de])=>{let et=C.upgrades[Z]>=de.max,dt=a.price(Z);return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[Z]}" alt="${de.name}"><small>N\xCDVEL ${C.upgrades[Z]}/${de.max}</small><h3>${de.name}</h3><p>${de.desc}</p><div class="egg-level-dots" aria-label="${C.upgrades[Z]} de ${de.max} n\xEDveis">${Array.from({length:de.max},(Xt,Rt)=>`<i class="${Rt<C.upgrades[Z]?"owned":""}"></i>`).join("")}</div><button class="egg-primary" data-buy="${Z}" ${et||C.coins<dt||!a.inBase()?"disabled":""}>${et?"No m\xE1ximo":dt+" integros"}</button></article>`}).join(""):S==="abilities"?ye+=io(a,K):S==="supplies"?ye+=Object.entries(Ei).map(([Z,de])=>`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[Z]}" alt="${de.name}"><small>NA MOCHILA: ${C.supplies[Z]}/${de.max}</small><h3>${de.name}</h3><p>${de.desc}</p><button class="egg-primary" data-buy="${Z}" ${C.supplies[Z]>=de.max||C.coins<de.price||!a.inBase()?"disabled":""}>${C.supplies[Z]>=de.max?"Mochila cheia":de.price.toLocaleString("pt-BR")+" integros"}</button></article>`).join(""):S==="decor"?ye+=Object.entries(si).map(([Z,de])=>`<article class="egg-upgrade"><div class="egg-decor-preview" style="--decor:#${de.color.toString(16)};--roof:#${de.roof.toString(16)}">\u2302</div><h3>${de.name}</h3><p>Piso, cobertura e plantas do curral.</p><button class="egg-primary" data-buy="${Z}" ${!a.inBase()||!C.decorations.includes(Z)&&C.coins<de.price?"disabled":""}>${C.decoration===Z?"Selecionado":C.decorations.includes(Z)?"Decorar":de.price+" integros"}</button></article>`).join(""):ye+=Object.entries(Wt).map(([Z,de])=>{let et=C.accessories.includes(Z),dt=C.equipped[de.slot]===Z;return`<article class="egg-upgrade"><img class="egg-item-icon" src="${K[Z]}" alt="${de.name}"><small>${dt?"EQUIPADO":et?"NA SUA COLE\xC7\xC3O":de.price>=25e4?"REL\xCDQUIA":de.price>=75e3?"M\xCDTICO":de.price>=2e4?"LEND\xC1RIO":de.price>=5e3?"\xC9PICO":"COLE\xC7\xC3O ESPECIAL"}</small><h3>${de.name}</h3><p>${de.desc} N\xE3o altera a velocidade.</p><button class="egg-primary" ${et?`data-equip="${Z}"`:`data-buy="${Z}"`} ${!et&&(C.coins<de.price||!a.inBase())?"disabled":""}>${et?dt?"Guardar":"Equipar":de.price.toLocaleString("pt-BR")+" integros"}</button></article>`}).join(""),ye+="</div>";else if(w==="abilities")j="Poderes e boosts",Se="ATALHOS Q E B \xB7 MOCHILA",ye='<p>Escolha um poder e um boost para os dois atalhos no HUD. Cada uso consome uma carga. O tempo passa s\xF3 durante o jogo e fica salvo ao sair. Nas corridas online, os efeitos ficam pausados e n\xE3o podem ser ativados.</p><div class="egg-sheet-grid">'+io(a,K)+"</div>";else if(w==="tracks")j=`As ${De.length} pistas`,Se="UMA CORRIDA CONT\xCDNUA",ye='<p>Os 14 mundos se conectam na mesma pista. Siga em frente para explorar. Cada ovo mostra seu treino recomendado e quantos n\xEDveis faltam. A refer\xEAncia considera seus t\xEAnis e luvas: correr com o ovo 10% mais r\xE1pido que o dono, sem disparar. Desvie dos obst\xE1culos.</p><div class="egg-pet-grid">'+De.map((Z,de)=>`<article class="egg-pet-card egg-track-card" style="--track-color:#${Z.color.toString(16)}"><small>PISTA ${de+1} \xB7 ${C.visited[de]?"VISITADA":"PARA EXPLORAR"}</small><img src="${K[de]}" alt="${Z.creature}"><strong>${Z.name}</strong><p>${Z.creature}</p><small>${Mc[de]} \xB7 ${["Persegui\xE7\xE3o direta","Antecipa a dire\xE7\xE3o","Corrida em zigue-zague"][de%3]}${de>=3?" + arrancadas":""}</small><small>Dono: ${ze(us(de))} de velocidade</small><div class="egg-track-training ${a.trainingAdvice(de).ready?"ready":""}"><strong>Treino recomendado: ${a.recommendedTraining(de)}</strong><span>${a.trainingAdvice(de).ready?"N\xEDvel alcan\xE7ado":`Faltam ${a.trainingAdvice(de).remaining} n\xEDveis`}</span></div><b>${a.saleValue(de).toLocaleString("pt-BR")} integros</b><small>${C.seen[de]?"\u2713 Criatura descoberta":"Leve o ovo ao curral"}</small></article>`).join("")+"</div>";else if(w==="corral")j="Seu curral",Se=`${C.creatures.length+C.eggs.length}/${a.capacity()} ESPA\xC7OS \xB7 ${C.seen.filter(Boolean).length}/${De.length} CRIATURAS DESCOBERTAS`,ye=`<div class="egg-income"><strong>Produ\xE7\xE3o autom\xE1tica</strong><span>${(a.incomeRate()*60).toLocaleString("pt-BR",{maximumFractionDigits:1})} integros / min de jogo ativo</span><small>Os ganhos entram direto no saldo. Total produzido: ${Math.floor(C.incomeEarned).toLocaleString("pt-BR")} integros.</small></div><p>Companheiro: ${Ja(a.companion())}</p><p>Os ovos chocam durante o jogo ativo. ${a.inBase()?"Venda criaturas para ganhar integros.":"Volte \xE0 base para vender criaturas."}</p>`,!C.creatures.length&&!C.eggs.length?ye+='<div class="egg-empty"><strong>Seu primeiro ovo est\xE1 esperando!</strong><p>Siga a pista, pegue um ovo e traga at\xE9 o cercado.</p></div>':ye+='<div class="egg-pet-grid">'+C.eggs.map(Z=>`<article class="egg-pet-card"><img src="${K["egg-"+Z.rarity]}" alt="Ovo ${St[Z.rarity].name}"><strong>Ovo de ${De[Z.world].creature}</strong><small>${St[Z.rarity].name} \xB7 ${a.saleValue(Z.world,Z.rarity,Z.mutation)} integros</small><small>Choca em ${Math.ceil(Z.remaining)} s de jogo</small><button class="egg-secondary" data-egg-action="resume">Continuar incubando</button></article>`).join("")+C.creatures.map(Z=>`<article class="egg-pet-card"><img src="${K[Z.world]}" alt="${De[Z.world].creature}"><strong>${De[Z.world].creature}</strong><small>${St[Z.rarity].name} \xB7 ${Hn[Z.mutation].name}</small><small>Valor: ${a.saleValue(Z.world,Z.rarity,Z.mutation)} integros</small><small>${Ja(Z)}</small><button class="egg-secondary" data-pet="${Z.uid}" ${a.inBase()?"":"disabled"}>${C.companionId===Z.uid?"Guardar companheiro":"Acompanhar"}</button><button class="egg-primary" data-sell="${Z.id}" ${a.inBase()?"":"disabled"}>Vender por ${a.saleValue(Z.world,Z.rarity,Z.mutation)}</button></article>`).join("")+"</div>";else if(w==="nest"){let Z=a.interaction().world;Z===void 0?(j="Ninho distante",ye="<p>Aproxime-se de um ninho para escolher.</p>"):(j="Escolha um ovo",Se=De[Z].name.toUpperCase(),ye=`<p>Leve um ovo por vez ao curral. Os outros continuam no ninho. Treino recomendado: <strong>${a.recommendedTraining(Z)}</strong>.</p><div class="egg-nest-grid">${a.nestEggs[Z].map(de=>{let et=St[de.rarity],dt=de.availableAt<=a.time;return`<article class="egg-pet-card" style="border-top:5px solid #${et.color.toString(16)}"><img src="${K["egg-"+de.rarity]}" alt="Ovo ${et.name}"><strong>${et.name} \xB7 ${Hn[de.mutation].name}</strong><small>Valor da criatura \xB7 ${et.mult}\xD7</small><b>${a.saleValue(Z,de.rarity,de.mutation)} integros</b><button class="egg-primary" data-steal="${de.slot}" ${dt?"":"disabled"}>${dt?"Pegar e correr":`Volta em ${Math.ceil(de.availableAt-a.time)} s de jogo`}</button></article>`}).join("")}</div>`)}else if(w==="missions")j="Miss\xF5es e cole\xE7\xE3o",Se="CONQUISTAS \xB7 INTEGROS",ye=`<div class="egg-income"><strong>Expedi\xE7\xE3o do dia</strong><span>Entregue 3 ovos: ${Math.min(3,C.daily.delivered)}/3 \xB7 200 integros</span><button class="egg-primary" data-daily ${C.daily.claimed||C.daily.delivered<3?"disabled":""}>${C.daily.claimed?"Recompensa recebida":"Receber"}</button></div><div class="egg-sheet-grid">${Za.map(Z=>`<article class="egg-upgrade"><h3>${Z.name}</h3><progress value="${a.missionProgress(Z)}" max="${Z.target}"></progress><p>${a.missionProgress(Z)}/${Z.target} \xB7 ${Z.reward} integros</p><button class="egg-primary" data-mission="${Z.id}" ${C.claimed.includes(Z.id)||a.missionProgress(Z)<Z.target?"disabled":""}>${C.claimed.includes(Z.id)?"Conclu\xEDda":"Receber"}</button></article>`).join("")}</div><h3>\xC1lbum \xB7 ${C.album.length} combina\xE7\xF5es descobertas</h3><div class="egg-album">${C.album.map(Z=>{let[de,et,dt]=Z.split(":");return De[de]?`<span>${De[de].creature} \xB7 ${St[et].name} \xB7 ${Hn[dt].name}</span>`:""}).join("")||"Traga ovos e descubra novas combina\xE7\xF5es!"}</div>`;else if(w==="friends")j="Aventura com amigos",Se="SALAS \xB7 CORRIDA \xB7 VISITAS \xB7 TROCAS",ye='<div id="eggOnlineContent"></div>';else if(w==="settings"){j="Menu da aventura",Se="PEGUE O OVO";let Z=a.trainingAdvice(a.carrying??a.zone());ye=`<nav class="egg-menu-grid" aria-label="Atalhos do jogo">${[["corral","home","Curral",`${C.creatures.length+C.eggs.length}/${a.capacity()} espa\xE7os`],["missions","flag","Miss\xF5es","Conquistas e cole\xE7\xE3o"],["friends","friends","Amigos","Corridas, visitas e trocas"],["shop","shop","Loja","76 itens para comprar"],["abilities","bolt","Poderes","Escolher atalhos Q e B"],["tracks","compass","Pistas",`${De.length} mundos`],["help","help","Como jogar","Controles e dicas"]].map(([et,dt,Xt,Rt])=>`<button data-egg-action="${et}">${_h[dt]}<strong>${Xt}</strong><small>${Rt}</small></button>`).join("")}</nav><div class="egg-menu-detail"><strong>${a.inBase()?"Seu curral":De[a.zone()].name}</strong><p>${a.carrying!==null?`Ovo ${St[a.carriedEgg.rarity].name} \xB7 ${a.saleValue(a.carrying,a.carriedEgg.rarity,a.carriedEgg.mutation)} integros. Leve ao curral!`:a.mode==="train"?"A esteira aumenta sua velocidade permanentemente.":"Aproxime-se de um ninho, escolha um ovo e leve ao curral."}</p><p>Treino recomendado: <b>${Z.level}</b> \xB7 ${Z.ready?"N\xEDvel alcan\xE7ado":`faltam ${Z.remaining} n\xEDveis`}.</p></div><div class="egg-settings-stats"><span><b>${ze(a.speed())}</b> velocidade</span><span><b>${C.training}/${Vn}</b> treino</span><span><b>${C.delivered}</b> ovos entregues</span><span><b>${C.coins.toLocaleString("pt-BR")}</b> integros</span></div><div class="egg-settings-buttons"><button class="egg-secondary" data-control="behind">Olhar para tr\xE1s</button><button class="egg-secondary" data-control="center">Centrar c\xE2mera</button><button class="egg-secondary" data-control="fullscreen">Tela cheia</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div><p class="egg-muted">Mova pelo direcional ou WASD/setas. Arraste o cen\xE1rio para olhar. Espa\xE7o: pular \xB7 Shift: disparar \xB7 E: a\xE7\xE3o \xB7 C: atr\xE1s \xB7 R: centrar \xB7 F: empurrar na corrida online \xB7 Q: poder \xB7 B: boost \xB7 Esc: pausa.</p><button class="egg-primary" data-egg-action="resume">Voltar ao jogo</button>`}else w==="help"?(j="Como jogar",ye=Ne()):w==="reset"?(j="Apagar este progresso?",ye='<p>Isso zera as integros, criaturas, ovos, treino e melhorias do Pegue o Ovo.</p><div class="egg-modal-actions"><button class="egg-secondary" data-egg-action="help">Manter meu progresso</button><button class="egg-primary" data-egg-action="resetConfirm">Apagar e recome\xE7ar</button></div>'):(j="Uma pausa na aventura",ye=`<p>Seu jogo est\xE1 pausado. ${C.seen.filter(Boolean).length} de ${De.length} criaturas descobertas \xB7 ${C.delivered} ovos entregues.</p><div class="egg-modal-actions"><button class="egg-primary" data-egg-action="resume">Continuar</button><button class="egg-secondary" data-egg-action="help">Como jogar</button><button class="egg-secondary" data-egg-action="exit">Outros jogos</button></div>`);we("eggSheetTitle").textContent=j,we("eggSheetTag").textContent=Se,we("eggSheetBody").innerHTML=ye,be(),we("eggSheetBody").querySelectorAll("[data-shop-tab]").forEach(Z=>Z.onclick=()=>{S=Z.dataset.shopTab,Pe()}),we("eggSheetBody").querySelectorAll("[data-steal]").forEach(Z=>Z.onclick=()=>{a.steal(+Z.dataset.steal)&&(z(),P(),le())}),we("eggSheetBody").querySelectorAll("[data-equip]").forEach(Z=>Z.onclick=()=>{a.equip(Z.dataset.equip)&&(P(),Pe())}),we("eggSheetBody").querySelectorAll("[data-control]").forEach(Z=>Z.onclick=()=>{let de=Z.dataset.control;z(),de==="behind"&&x(),de==="center"&&k(),de==="fullscreen"&&we("eggFullscreen").click()}),we("eggSheetBody").querySelectorAll("[data-buy]").forEach(Z=>Z.onclick=()=>{a.buy(Z.dataset.buy)&&(P(),Pe(),le())}),we("eggSheetBody").querySelectorAll("[data-sell]").forEach(Z=>Z.onclick=()=>{a.sell(+Z.dataset.sell)&&(P(),Pe(),le())}),we("eggSheetBody").querySelectorAll("[data-egg-action]").forEach(Z=>Z.onclick=()=>{let de=Z.dataset.eggAction;de==="resume"&&z(),["help","shop","corral","tracks","missions","friends","abilities"].includes(de)&&Fe(de),de==="exit"&&(_e(),i()),de==="resetAsk"&&Fe("reset"),de==="resetConfirm"&&(a=new ds(bc()),V=0,k(),F=0,E=.52,Qe=0,ee="force",ie="",se=-1,N(),M(),z(),A("Nova aventura! Siga a pista para encontrar o primeiro ovo."))})}function be(){let C=we("eggSheetBody"),j=(Se,ye)=>C.querySelectorAll(Se).forEach(Z=>Z.onclick=()=>{ye(Z),P(),Pe(),le()});C.querySelectorAll("[data-use-ability]").forEach(Se=>Se.onclick=()=>Ze(Se.dataset.useAbility)),j("[data-select-ability]",Se=>a.selectAbility(Se.dataset.selectAbility)),j("[data-pet]",Se=>a.equipPet(Se.dataset.pet)),j("[data-mission]",Se=>a.claimMission(Se.dataset.mission)),j("[data-daily]",()=>a.claimDaily()),w==="friends"&&(window.BoxEggCloud?window.BoxEggCloud.render(we("eggOnlineContent")):we("eggOnlineContent").innerHTML='<p>O progresso fica neste navegador. As salas, visitas, trocas e salvamento por perfil est\xE3o no portal da fam\xEDlia.</p><a class="egg-primary" href="https://www.institutointegro.com.br/integro-box/" target="_blank" rel="noopener">Abrir Integro Box no portal</a>')}function Fe(C){he(),w=C,we("eggSheet").hidden=!1,Pe(),we("eggCloseSheet").focus(),M()}function z(){w=null,we("eggSheet").hidden=!0,he(),f=performance.now(),re.focus()}function me(){oe.hidden=!1,h=!0,u?(W(),f=performance.now()):q(),le(),re.focus(),window.scrollTo(0,0)}function _e(){D(),M(),h=!1,oe.hidden=!0,w=null,we("eggSheet").hidden=!0,he()}we("eggRoute").onclick=()=>Fe("tracks"),we("eggInteract").onclick=ge,we("eggJump").onclick=()=>{w||a.jump(),re.focus()},we("eggCamera").onclick=()=>{x(),re.focus()},we("eggSettings").onclick=()=>Fe("settings"),we("eggPause").onclick=()=>Fe("pause"),we("eggJuice").onclick=()=>{!w&&a.useJuice()&&(P(),le(),re.focus())},we("eggCloseSheet").onclick=z,we("eggReload").onclick=()=>location.reload(),we("eggFullscreen").onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await oe.requestFullscreen();try{await screen.orientation?.lock("landscape")}catch{}}}catch{A("Gire o celular para o modo paisagem para ampliar o jogo.")}};let Ae=we("eggJoystick");function fe(C){let j=Ae.getBoundingClientRect(),Se=j.width*.32,ye=C.clientX-j.left-j.width/2,Z=C.clientY-j.top-j.height/2,de=Math.hypot(ye,Z),et=de>Se?Se/de:1;Le={x:ye*et/Se,z:Z*et/Se},we("eggStick").style.transform=`translate(${ye*et}px,${Z*et}px)`}Ae.addEventListener("pointerdown",C=>{w||(C.preventDefault(),xe=C.pointerId,Ae.setPointerCapture(C.pointerId),fe(C))}),Ae.addEventListener("pointermove",C=>{C.pointerId===xe&&fe(C)});let ce=C=>{C.pointerId===xe&&(xe=null,Le={x:0,z:0},we("eggStick").style.transform="translate(0px,0px)")};for(let C of["pointerup","pointercancel","lostpointercapture"])Ae.addEventListener(C,ce);let Re=we("eggSprint");Re.addEventListener("pointerdown",C=>{w||(C.preventDefault(),ve=C.pointerId,Re.setPointerCapture(C.pointerId),We=!0,Re.classList.add("held"))});let qe=C=>{C.pointerId===ve&&(We=!1,ve=null,Re.classList.remove("held"))};for(let C of["pointerup","pointercancel","lostpointercapture"])Re.addEventListener(C,qe);return document.addEventListener("keydown",C=>{if(!h||C.target?.closest("input,select,textarea,[contenteditable=true],#boxOnline"))return;let j=C.key.toLowerCase();if(j==="escape"){C.preventDefault(),w?z():Fe("pause");return}if(w){if(j==="tab"){let Se=[...we("eggSheet").querySelectorAll("button:not([disabled])")];C.shiftKey&&document.activeElement===Se[0]?(C.preventDefault(),Se.at(-1)?.focus()):!C.shiftKey&&document.activeElement===Se.at(-1)&&(C.preventDefault(),Se[0]?.focus())}return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"," ","e","c","r","f","q","b"].includes(j)&&(C.preventDefault(),$e.add(j),C.repeat||(j===" "&&a.jump(),j==="e"&&ge(),j==="c"&&x(),j==="r"&&k(),j==="q"&&Ze(a.save.abilitySlots.power),j==="b"&&Ze(a.save.abilitySlots.boost),j==="f"&&window.BoxEggPush?.push()))}),document.addEventListener("keyup",C=>$e.delete(C.key.toLowerCase())),window.addEventListener("blur",he),document.addEventListener("visibilitychange",()=>{document.hidden&&h&&(M(),Fe("pause"))}),window.addEventListener("pagehide",M),window.BoxEggRuntime={save:()=>(a.captureNests(),JSON.parse(JSON.stringify(a.save))),apply:C=>{D(),a=new ds(C),r=null,ee="",N(),le();try{t.setItem(Sc,JSON.stringify(a.save))}catch{}w&&Pe()},active:()=>h,playing:()=>h&&!w&&!document.hidden,frozen:()=>!!window.BoxEggCloud?.frozen,push:C=>!h||w||document.hidden||window.BoxEggCloud?.frozen?!1:a.push(C),pushGesture:()=>{Ke=performance.now()+260},pushEffect:()=>{_?.burst(new H(a.player.x,a.player.y+1,a.player.z),16768394)},inBase:()=>a.inBase()&&a.carrying===null,visit:C=>{D(),r=C,a.player.x=0,a.player.z=15,ee="",N(),z(),A("Visitando o curral do colega. Toque em Voltar para sair.")},message:A,openFriends:()=>Fe("friends"),pause:()=>Fe("pause"),raceMode:C=>{a.raceMode=C,C||a.clearPush()},raceStart:()=>{a.clearPush(),r=null,a.carriedEgg&&(a.nestEggs[a.carrying][a.carriedEgg.slot].availableAt=a.time+5,a.guardians[a.carrying].state="return"),a.mode="run",a.carrying=null,a.carriedEgg=null,a.player.x=0,a.player.z=15,a.player.y=0,he(),z()},stop:_e},window.IntegroOvo={getState:()=>({...a.snapshot(),active:h,paused:!!w,sheet:w,thumbnailCount:Object.keys(K).length,visibleNestEggs:_?.nests.map(C=>C.eggs.filter(j=>j.visible).length),equippedModels:_?.player.wear.children.length,plaques:_?.nests.map(C=>({...C.plaque.sprite.userData.advice})),cameraYaw:R,cameraActualYaw:F,cameraForward:m?m.getWorldDirection(new H).toArray():null,cameraPitch:b,movementYaw:V,webgl:!!u}),getScreenPoints:()=>m?[{name:"curral",...mn},{name:"esteira",...Tn},...En.map((C,j)=>({name:"ninho"+j,...C}))].map(C=>{let j=new H(C.x,1,C.z).project(m),Se=re.getBoundingClientRect();return{name:C.name,x:Se.left+(j.x+1)*Se.width/2,y:Se.top+(1-j.y)*Se.height/2}}):[]},{show:me,hide:_e,help:()=>Fe("help"),get active(){return h}}}window.BoxEgg={mountEggGame:vh,worldNames:De.map(i=>i.name),petName:i=>`${De[i.world]?.creature||"Criatura"} \xB7 ${St[i.rarity]?.name||"Comum"} \xB7 ${Hn[i.mutation]?.name||"Natural"}`};})();
