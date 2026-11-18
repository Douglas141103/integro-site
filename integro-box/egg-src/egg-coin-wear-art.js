import * as THREE from 'three';

// Coordinates follow the explorer rig: the player looks toward -Z, back ornaments toward +Z.
const gold=0xffbe37, brass=0xb87725, silver=0xc1d4e4, ink=0x263854, leather=0x825136;
const cream=0xffedc6, cyan=0x40e3eb, blue=0x2974ce, violet=0x8859df, green=0x399859;
const pink=0xf477bf, red=0xe9423d, orange=0xff891e, mint=0xa8ebb1, tau=Math.PI*2;
const sides=[-1,1];
const circle=Array.from({length:20},(_,i)=>[Math.cos(i*tau/20),Math.sin(i*tau/20)]);
const contours={
 star:Array.from({length:10},(_,i)=>{const a=Math.PI/2+i*Math.PI/5,r=i%2?.46:1;return [Math.cos(a)*r,Math.sin(a)*r];}),
 spark:[[0,1],[.22,.24],[1,0],[.22,-.2],[0,-1],[-.22,-.2],[-1,0],[-.22,.24]],
 diamond:[[0,1],[.74,0],[0,-1],[-.74,0]],
 leaf:[[0,1],[-.58,.44],[-.7,.02],[-.43,-.55],[0,-1],[.5,-.47],[.65,.12],[.46,.57]],
 heart:[[0,.48],[-.36,.89],[-.75,.91],[-1,.56],[-.95,.14],[-.62,-.34],[0,-1],[.67,-.32],[.96,.12],[1,.55],[.75,.9],[.37,.89]],
 bolt:[[.7,1],[-.33,.21],[.08,.16],[-.76,-1],[.53,-.07],[.08,-.02]],
 crescent:[[-1,.95],[-.74,-.38],[-.36,-.84],[0,-1],[.46,-.84],[.81,-.39],[1,.94],[.65,.28],[.35,.01],[0,-.14],[-.33,0],[-.64,.28]],
 tricorne:[[-1,.55],[-.55,.48],[-.3,.65],[0,.91],[.3,.65],[.55,.48],[1,.55],[.73,-.56],[0,-.92],[-.72,-.56]],
 shield:[[-1,.72],[-.68,.95],[.68,.95],[1,.72],[.91,-.5],[.46,-.76],[0,-.98],[-.44,-.74],[-.91,-.5]],
 visor:[[-1,.65],[-.77,.92],[.73,.94],[1,.64],[.88,-.45],[.55,-.84],[.16,-.68],[0,-.42],[-.25,-.7],[-.6,-.87],[-.91,-.48]],
 feather:[[0,-1],[-.45,-.32],[-.74,.27],[-.53,.7],[0,1],[.24,.56],[.59,.69],[.39,.18],[.72,.24],[.35,-.4]],
 cloak:[[-.57,1],[.57,1],[.77,.44],[1,-.83],[.74,-.92],[.38,-.89],[0,-1],[-.45,-.88],[-.83,-.93],[-1,-.82]],
 sail:[[-.77,-.9],[.05,-.65],[.92,-.78],[.53,-.15],[.08,.57],[-.78,1],[-.55,.3],[-.55,-.34]],
 triangle:[[0,1],[-1,-1],[1,-1]], hex:Array.from({length:6},(_,i)=>[Math.cos(i*tau/6),Math.sin(i*tau/6)]),
 oct:Array.from({length:8},(_,i)=>[Math.cos((i+.5)*tau/8),Math.sin((i+.5)*tau/8)]), circle
};

function outline(path,points) {
 points.forEach(([x,y],i)=>i ? path.lineTo(x,y) : path.moveTo(x,y));
 path.closePath();
}

function sculpt(art,key,create) {
 return art.geometries.get(key) || art.own(key,create(),'trim');
}

function designer(art,group) {
 function mesh(geom,color,x,y,z,sx=1,sy=1,sz=1) {
  const part=new THREE.Mesh(geom,art.material(color,'trim'));
  part.position.set(x,y,z);part.scale.set(sx,sy,sz);group.add(part);return part;
 }
 function plate(type,color,x,y,z,w,h,depth,rotation=0,hole=0) {
  const key='eggwear-plate:'+type+':'+hole;
  const geom=sculpt(art,key,()=>{
   const shape=new THREE.Shape(),points=contours[type];outline(shape,points);
   if(hole){const aperture=new THREE.Path();outline(aperture,points.map(([px,py])=>[px*hole,py*hole]).reverse());shape.holes.push(aperture);}
   const geo=new THREE.ExtrudeGeometry(shape,{depth:1,bevelEnabled:true,bevelSize:.035,bevelThickness:.08,bevelSegments:1,curveSegments:3});
   return geo.translate(0,0,-.5);
  });
  const part=mesh(geom,color,x,y,z,w,h,depth);part.rotation.z=rotation;return part;
 }
 function orb(c,x,y,z,rx,ry=rx,rz=rx){
  if(Math.max(rx,ry,rz)>.16)return art.mesh(group,'ball',c,x,y,z,rx,ry,rz,'trim');
  return mesh(sculpt(art,'eggwear-bead',()=>new THREE.SphereGeometry(1,8,5)),c,x,y,z,rx,ry,rz);
 }
 function box(c,x,y,z,w,h,d){return art.mesh(group,'round',c,x,y,z,w,h,d,'trim');}
 function tube(c,x,y,z,radius,height){return art.mesh(group,'cyl',c,x,y,z,radius,height,radius,'trim');}
 function cone(c,x,y,z,r,h){
  return mesh(sculpt(art,'eggwear-cone',()=>new THREE.ConeGeometry(1,1,12)),c,x,y,z,r,h,r);
 }
 function ring(c,x,y,z,rx,ry=rx,depth=rx){return art.mesh(group,'ring',c,x,y,z,rx,ry,depth,'trim');}
 function band(c,radius,y){const p=ring(c,0,y,0,radius,radius*.97,radius*.75);p.rotation.x=Math.PI/2;return p;}
 function wire(c,points,r=.018){for(let i=1;i<points.length;i++){
  const a=new THREE.Vector3(...points[i-1]),b=new THREE.Vector3(...points[i]),v=b.clone().sub(a),mid=a.addScaledVector(v,.5);
  const p=mesh(sculpt(art,'eggwear-wire',()=>new THREE.CylinderGeometry(1,1,1,7)),c,mid.x,mid.y,mid.z,r,v.length(),r);p.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());
 }}
 function gem(c,x,y,z,w,h=w,d=w){const g=sculpt(art,'eggwear-gem',()=>new THREE.OctahedronGeometry(1));return mesh(g,c,x,y,z,w,h,d);}
 function flower(x,y,z,r,c){for(let i=0;i<5;i++){const a=i*tau/5;orb(c,x+Math.cos(a)*r*.58,y+Math.sin(a)*r*.58,z,r*.47,r*.47,r*.33);}orb(gold,x,y,z-.012,r*.35);}
 function backpack(c,trim=leather){
  box(c,0,-.03,.13,.5,.56,.28);box(c,0,-.11,.305,.37,.26,.13);
  for(const s of sides){wire(trim,[[s*.17,.21,.22],[s*.19,.29,.10],[s*.19,.23,-.05],[s*.18,-.22,-.04],[s*.16,-.29,.12]],.032);box(trim,s*.13,-.1,.38,.045,.14,.025);}
 }
 function dome(c,rx=.365,h=.31,y=.055){return orb(c,0,y,0,rx,h,rx*.98);}
 function hatBrim(c,w=.45){const p=tube(c,0,.01,0,w,.048);p.scale.z*=.96;return p;}
 function goggles(shape,frame,lens,w=.154,h=.123){
  wire(frame,[[-.16,.012,.01],[0,.028,-.012],[.16,.012,.01]],.023);
  for(const s of sides){
   plate(shape,frame,s*.165,0,0,w,h,.065,0,.72);
   plate(shape,lens,s*.165,0,.009,w*.74,h*.74,.035);
   wire(frame,[[s*.30,.03,.01],[s*.34,.032,.11],[s*.32,-.015,.30]],.018);
  }
 }
 function plume(c,s,x,y,z){const p=plate('feather',c,x,y,z,.075,.20,.025,-s*.42);return p;}
 function straps(c=leather){for(const s of sides){const p=ring(c,s*.14,-.03,-.015,.075,.24,.14);p.rotation.y=.25*s;}}
 return {plate,orb,box,tube,cone,ring,band,wire,gem,flower,backpack,dome,hatBrim,goggles,plume,straps};
}

function headwear(d,id) {
 const {orb,band,box,tube,cone,plate,gem,wire,flower,ring,dome,hatBrim,plume}=d;
 switch(id){
 case 'headphones':{
  const points=Array.from({length:11},(_,i)=>{const a=i*Math.PI/10;return [.38*Math.cos(a),-.08+.36*Math.sin(a),0];});
  wire(ink,points,.049);wire(cyan,points.map(([x,y,z])=>[x,y+.027,z-.016]),.024);
  for(const s of sides){orb(ink,s*.36,-.11,0,.10,.175,.14);orb(blue,s*.416,-.10,0,.069,.15,.13);
   const rim=ring(cyan,s*.47,-.10,0,.084,.10,.11);rim.rotation.y=Math.PI/2;
   wire(cyan,[[s*.479,-.11,-.052],[s*.483,-.075,-.025],[s*.486,-.126,0],[s*.483,-.066,.04]],.009);}
  break;
 }
 case 'crown':
  band(gold,.32,.03);band(brass,.315,.092);
  for(let i=0;i<7;i++){const a=i*tau/7,x=Math.sin(a)*.315,z=-Math.cos(a)*.315;
   const p=plate('triangle',gold,x,.18,z,.144,.155,.056);p.rotation.y=-a;orb(gold,x,.34,z,.043);
   if(i%2===0)gem([red,cyan,violet][(i/2)%3],x*1.055,.095,z*1.055,.056,.075,.05);}
  break;
 case 'halo':
  band(gold,.38,.13);band(cream,.355,.15);plate('spark',gold,0,.26,-.32,.09,.14,.04);
  for(const s of sides)plate('spark',cream,s*.45,.24,.06,.039,.066,.025);
  break;
 case 'pilotCap':
  dome(orange);for(const s of sides){orb(leather,s*.30,-.08,.01,.085,.22,.27);orb(brass,s*.357,-.08,.02,.05,.095,.09);orb(cream,s*.155,.11,-.31,.15,.091,.068);orb(blue,s*.155,.11,-.36,.12,.065,.047);}
  wire(cream,[[0,.10,-.32],[0,.28,-.19],[0,.36,0],[0,.29,.17]],.021);break;
 case 'safariHat':{
  hatBrim(0xb77a3f,.47);dome(0xbf8a4d,.355,.23,.13);band(leather,.34,.085);
  box(gold,0,.084,-.343,.13,.095,.032);box(leather,0,.084,-.366,.078,.053,.024);plume(green,-1,-.25,.33,-.04);break;
 }
 case 'conductorCap':
  dome(green,.40,.19,.14);band(ink,.33,.07);orb(ink,0,.018,-.23,.36,.047,.26);band(gold,.335,.092);
  plate('circle',gold,0,.177,-.352,.086,.088,.04);for(const s of sides)plume(gold,s,s*.105,.16,-.326);break;
 case 'ninjaBand':
  tube(red,0,.025,0,.35,.12);orb(0xd53731,.27,.02,.20,.095);for(const s of sides){const tail=plate('feather',s<0?red:0xc93430,.29+s*.10,-.17,.22+s*.025,.077,.25,.035,-.52*s);tail.rotation.y=-.36;}break;
 case 'pirateHat':{
  const brim=plate('tricorne',0x222e52,0,.06,0,.51,.33,.11);brim.rotation.x=-1.16;dome(0x334060,.32,.21,.15);
  for(const s of sides)wire(gold,[[s*.45,.20,-.17],[s*.3,.13,-.25],[0,.05,-.32]],.021);
  ring(gold,0,.19,-.31,.079);plate('spark',gold,0,.19,-.33,.05,.06,.026);plume(blue,1,.26,.36,.055);break;
 }
 case 'iceTiara': case 'auroraHelmet':{
  const helmet=id==='auroraHelmet';if(helmet){dome(blue);for(const s of sides)plate('shield',blue,s*.29,-.06,-.08,.11,.21,.12,s*.12);}
  band(helmet?cyan:silver,.333,.018);
  for(let i=-2;i<=2;i++){const k=2-Math.abs(i);const x=i*.13,y=.10+.04*k,z=-.28+Math.abs(i)*.046;
   gem(helmet?(i%2?violet:cyan):(i%2?0x69c2ff:0x9cedff),x,y,z,.075,.14+k*.06,.085);}
  break;
 }
 case 'mushroomCap':
  dome(0xf0d1a6,.37,.10,.015);dome(red,.48,.26,.12);
  for(let i=0;i<9;i++){const a=i*tau/9,r=i%2?.32:.17;orb(cream,Math.sin(a)*r,.13+.25*Math.sqrt(1-(r/.48)**2),Math.cos(a)*r,.064,.024,.058);}break;
 case 'astronautHelmet':
  dome(cream,.405,.36,.025);orb(ink,0,.03,-.23,.325,.24,.16);orb(blue,0,.043,-.285,.28,.20,.133);orb(0xb5ecff,-.10,.13,-.385,.076,.039,.018);
  for(const s of sides){orb(orange,s*.376,.035,0,.07,.14,.12);}wire(ink,[[.24,.27,.03],[.33,.53,.04]],.024);orb(orange,.33,.55,.04,.07);break;
 case 'wizardHat':{
  hatBrim(0x4830ad,.48);
  const crown=cone(violet,.04,.35,0,.32,.69);crown.rotation.z=-.16;
  const tip=cone(0x6940ca,.116,.637,0,.077,.24);tip.rotation.z=-.60;band(gold,.285,.10);
  for(const [x,y] of [[-.15,.20],[.02,.37],[.06,.56]])plate('star',gold,x,y,-.155,.046,.046,.023);
  plate('crescent',gold,.21,.80,-.015,.063,.085,.044,-.6);break;
 }
 case 'flowerCrown': case 'truffleCrown':{
  band(green,.33,.015);
  for(let i=0;i<8;i++){const a=i*tau/8,x=.33*Math.sin(a),z=.33*Math.cos(a);
   const leaf=plate('leaf',i%2?green:mint,x,.06,z,.055,.11,.025,i*.4);leaf.rotation.y=a;
   if(id==='flowerCrown')flower(x,.125,z,.097,[pink,cream,orange][i%3]);
   else{tube(cream,x,.112,z,.034,.12);orb(i%2?pink:red,x,.191,z,.09,.063,.09);orb(cream,x-.025,.241,z,.025,.013,.020);}
  }break;
 }
 case 'sharkHood':{
  dome(0x498cca,.395,.32,.03);orb(ink,0,-.01,-.28,.276,.17,.09);
  const fin=plate('triangle',0x3578b8,0,.37,.04,.095,.17,.075,-.24);fin.rotation.y=.68;
  for(const s of sides){orb(ink,s*.247,.185,-.248,.043);orb(cream,s*.255,.193,-.279,.013);}
  for(let i=-2;i<=2;i++)plate('triangle',cream,i*.088,.084-Math.abs(i)*.012,-.354,.036,.048,.035,Math.PI);
  break;
 }
 case 'stormHelm':
  dome(0x634090);for(const s of sides){plate('shield',violet,s*.255,-.025,-.12,.112,.175,.12,s*.12);plate('bolt',gold,s*.32,.30,-.12,.092,.25,.066,-s*.16);}
  plate('diamond',gold,0,.13,-.328,.074,.109,.038);break;
 case 'antlers':
  band(leather,.325,0);for(const s of sides){
   wire(brass,[[s*.25,.02,0],[s*.38,.16,0],[s*.48,.38,.05],[s*.44,.59,.09]],.048);
   for(const [x,y] of [[.32,.11],[.43,.27],[.46,.42]]){wire(brass,[[s*x,y,0],[s*(x+.15),y+.14,0]],.031);plate('leaf',green,s*(x+.145),y+.17,-.012,.044,.079,.032,-s*.60);}
  }break;
 case 'solarCrown':
  band(gold,.34,.055);plate('circle',brass,0,.32,-.22,.22,.22,.065);gem(orange,0,.32,-.269,.171,.17,.065);
  for(let i=0;i<12;i++){const a=i*tau/12;plate('triangle',gold,Math.sin(a)*.26,.32+Math.cos(a)*.26,-.215,.061,.108,.047,-a);}
  break;
 case 'samuraiHelm':
  dome(0x8d262d);for(let i=0;i<3;i++){for(const s of sides){const p=box(i%2?red:0xb63230,s*.30,-.018-i*.073,.04,.15,.10,.40+i*.045);p.rotation.z=s*.19;}}
  plate('crescent',gold,0,.26,-.31,.295,.243,.07);gem(red,0,.16,-.357,.069,.084,.04);break;
 default:return false;
 }return true;
}

function facewear(d,id){
 const {orb,plate,wire,ring,gem,goggles,flower}=d;
 switch(id){
 case 'goggles': case 'conductorGoggles':{
  const aviator=id==='goggles';goggles(aviator?'oct':'circle',gold,aviator?cyan:green);
  for(const s of sides){wire(leather,[[s*.294,.035,.035],[s*.34,.03,.18],[s*.30,0,.34]],.034);
   orb(cream,s*.16-.04,.053,-.037,.024,.014,.009);}
  break;
 }
 case 'starGlasses':goggles('star',gold,pink,.192,.173);break;
 case 'heartGlasses':goggles('heart',red,pink,.171,.145);break;
 case 'monocle':
  plate('circle',gold,-.14,.009,0,.164,.164,.050,0,.81);
  plate('circle',0xb6dce7,-.14,.009,.012,.127,.127,.022);
  for(let i=0;i<6;i++){const a=i*Math.PI/5;
   const loop=ring(gold,-.297+Math.sin(a)*.046,-.12-i*.046,.013+.008*i,.022,.034,.021);loop.rotation.y=i%2*.64;}
  break;
 case 'neonGlasses':goggles('hex',violet,cyan,.183,.126);
  for(const s of sides)plate('spark',pink,s*.30,.10,-.042,.031,.043,.019);break;
 case 'cyberVisor': case 'rainbowVisor': case 'starMask':{
  const galaxy=id==='starMask',rainbow=id==='rainbowVisor';
  plate('visor',galaxy?silver:ink,0,0,0,.345,.16,.095);
  plate('visor',galaxy?0x594399:blue,0,.006,-.058,.306,.125,.072);
  if(rainbow){
   const colors=[red,orange,gold,green,cyan,blue,violet];
   colors.forEach((c,i)=>wire(c,[[-.262,.093-i*.027,-.108],[0,.096-i*.024,-.109],[.262,.093-i*.027,-.108]],.014));
  }else if(galaxy){
   const orbit=ring(silver,0,.015,-.106,.28,.068,.12);orbit.rotation.z=.28;
   plate('star',cream,-.12,.036,-.13,.037,.039,.016);orb(violet,.115,.038,-.13,.044);orb(cream,.22,.086,-.12,.018);
  }else{
   wire(cyan,[[-.23,.073,-.11],[.10,.073,-.11],[.20,.10,-.11]],.014);
   for(const s of sides)orb(violet,s*.316,.015,0,.048,.081,.081);
  }
  for(const s of sides)wire(ink,[[s*.29,.05,.01],[s*.34,.037,.13],[s*.30,0,.30]],.022);break;
 }
 case 'butterflyMask':case 'leafMask':{
  const garden=id==='leafMask';
  for(const s of sides){
   const x=s*.16;plate('leaf',garden?green:violet,s*.23,.093,.033,.127,.204,.047,-s*.52);
   plate('leaf',garden?mint:cyan,s*.236,.108,-.004,.080,.14,.035,-s*.52);
   if(!garden)plate('leaf',pink,s*.24,-.066,.04,.08,.10,.042,-s*1.09);
   plate('oct',garden?0x356b3e:brass,x,0,-.05,.128,.083,.036,-s*.12,.68);
   if(garden)flower(s*.29,.115,-.025,.053,pink);
  }gem(garden?green:gold,0,.035,-.057,.044,.088,.035);break;
 }
 case 'divingMask':
  goggles('oct',0x289cbe,cyan,.165,.124);
  wire(gold,[[.248,-.119,.006],[.352,-.11,.015],[.354,.22,.02],[.342,.337,-.026]],.039);
  orb(orange,.34,.346,-.023,.053,.038,.046);orb(blue,0,-.09,-.018,.076,.064,.052);break;
 case 'snowGoggles':
  plate('visor',cream,0,0,0,.359,.159,.097);plate('visor',0x93bcec,0,.008,-.067,.301,.112,.04);
  for(const s of sides){wire(0x9aaec7,[[s*.312,.025,.023],[s*.354,.018,.16],[s*.3,.015,.31]],.038);}
  for(let i=0;i<3;i++){const a=i*Math.PI/3;wire(cream,[[.20-.055*Math.cos(a),.10-.055*Math.sin(a),-.101],[.20+.055*Math.cos(a),.10+.055*Math.sin(a),-.101]],.008);}
  break;
 case 'foxMask':case 'owlMask':case 'dragonMask':case 'royalMask':{
  const fox=id==='foxMask',owl=id==='owlMask',dragon=id==='dragonMask';
  const base=fox?cream:owl?leather:dragon?red:gold,trim=fox?orange:owl?brass:dragon?green:red;
  for(const s of sides){
   plate(owl?'circle':'leaf',base,s*.151,0,.012,.179,.131,.073,-s*.17,.57);
   if(fox){
    plate('triangle',orange,s*.245,.184,.024,.103,.136,.075,-s*.16);
    plate('triangle',cream,s*.245,.177,-.025,.058,.08,.026,-s*.16);
    wire(orange,[[s*.069,.044,-.046],[s*.144,.084,-.046],[s*.25,.043,-.046]],.022);
   }else if(owl){
    const brow=plate('feather',0x9a633c,s*.185,.124,-.004,.094,.176,.065,-s*.78);brow.rotation.y=s*.10;
    ring(brass,s*.15,-.003,-.036,.104,.083,.064);
   }else if(dragon){
    plate('leaf',green,s*.246,.204,0,.07,.17,.07,-s*.35);gem(gold,s*.28,.048,-.041,.071,.06,.06);
    plate('triangle',cream,s*.115,-.133,-.061,.024,.059,.03,Math.PI);
   }else{
    gem(trim,s*.20,.15,-.015,.065,.087,.044);wire(brass,[[s*.27,.059,-.044],[s*.2,.105,-.07],[s*.065,.064,-.06]],.019);
   }
  }
  if(fox){plate('triangle',orange,0,-.062,-.029,.093,.099,.07,Math.PI);orb(ink,0,-.115,-.078,.044,.036,.042);}
  else if(owl)plate('triangle',brass,0,-.068,-.066,.067,.090,.074,Math.PI);
  else if(dragon){orb(red,0,-.052,-.070,.128,.103,.092);for(const s of sides)orb(gold,s*.054,-.032,-.158,.025);}
  else{gem(red,0,.161,-.037,.086,.135,.055);plate('diamond',gold,0,.032,-.057,.061,.10,.045);}
  break;
 }
 default:return false;
 }return true;
}

function wingSet(d,id){
 const {plate,orb,ring,gem,wire,flower}=d;
 const phoenix=id==='phoenixWings',cosmic=id==='infinityWings',crystal=id==='wings',mech=id==='mechanicalWings';
 if(crystal||phoenix||cosmic||mech){
  const colors=phoenix?[0xe84b28,orange,gold]:cosmic?[0x5937c5,violet,0xab96fe]:mech?[ink,silver,0x8f9baa]:[violet,0xd6a2ff,0xa1dfff];
  for(const s of sides){
   for(let i=0;i<5;i++){const x=s*(.22+i*.098),y=-.08+i*.114;
    if(crystal){const shaft=gem(colors[i%3],x,y,.085,.133,.282+i*.013,.09);shaft.rotation.z=-s*(.62+i*.052);}
    else{plate('feather',colors[i%3],x,y,.092-i*.014,.14,.25+i*.024,.065,-s*(.70+i*.04));
     if(mech){wire(brass,[[x-s*.07,y-.06,.155-i*.014],[x+s*.06,y+.095,.155-i*.014]],.016);}}
   }
   if(mech){ring(brass,s*.158,.046,.16,.111);gem(gold,s*.158,.046,.17,.053);}
  }
  if(cosmic){
   const orbit=ring(gold,0,.12,.08,.44,.44,.095);
   const other=ring(gold,0,.07,.16,.38,.13,.075);other.rotation.z=.51;
   for(const [x,y] of [[-.46,.54],[.45,-.20],[0,-.44]])plate('spark',gold,x,y,.13,.058,.083,.035);
  }
  gem(gold,0,.036,.174,.138,.16,.078);gem(crystal?violet:phoenix?red:cosmic?blue:ink,0,.036,.23,.086,.096,.046);
  return;
 }
 const bee=id==='beeWings';
 for(const s of sides)for(const j of [0,1]){
  const x=s*(j?.24:.36),y=j?-.135:.20,rot=j?-s*.98:-s*.65;
  plate('leaf',bee?gold:0xa59d34,x,y,.07,j?.165:.210,j?.24:.35,.045,rot);
  plate('leaf',bee?0xffecae:j?mint:pink,x,y,.104,j?.14:.18,j?.204:.302,.035,rot);
  wire(bee?gold:cream,[[s*.05,0,.133],[x,y,.135],[x+s*.095,y+(j?-.06:.13),.135]],.012);
  if(!bee)orb(gold,x+s*.09,y+.006,.132,.03,.035,.012);
 }
 if(bee)gem(gold,0,.02,.15,.09,.12,.07);else flower(0,.012,.13,.13,cream);
}

function backwear(d,id){
 const {backpack,plate,orb,gem,wire,box,tube,ring,straps,flower}=d;
 switch(id){
 case 'beeWings':case 'wings':case 'mechanicalWings':case 'infinityWings':case 'phoenixWings':case 'butterflyWings':
  wingSet(d,id);break;
 case 'cape':case 'auroraCape':case 'magneticCape':{
  const magnetic=id==='magneticCape',aurora=id==='auroraCape';
  const panels=magnetic?[0x6c449a,0xa568bc,0x57388f,0xa568bc,0x6c449a]:aurora?[blue,cyan,mint,0xa4a3f1,violet]:[0xac2431,red,0xbc2733,red,0xac2431];
  for(let i=-2;i<=2;i++){
   const cloth=plate('cloak',panels[i+2],i*.14,-.19,.12-.016*Math.abs(i),.135,.40-.027*Math.abs(i),.063,i*.13);
   cloth.rotation.x=-.14;
   if(magnetic)plate('diamond',i%2?cyan:violet,i*.142,-.276,.18-.016*Math.abs(i),.045,.12,.036,i*.08);
  }
  wire(gold,[[-.32,.27,.07],[-.13,.18,.14],[0,.157,.16],[.13,.18,.14],[.32,.27,.07]],.033);
  if(aurora)plate('spark',gold,0,.16,.21,.10,.12,.046);
  else gem(magnetic?cyan:gold,0,.159,.21,.084,.101,.053);
  break;
 }
 case 'explorerPack':case 'stationPack':{
  const station=id==='stationPack';backpack(station?0x428e42:0x6c953e);
  if(station){
   tube(brass,-.166,.31,.14,.067,.1);orb(gold,-.166,.389,.14,.073,.09,.062);
   const ticket=box(gold,.102,-.13,.396,.134,.087,.027);ticket.rotation.z=-.20;
   plate('star',cream,.102,-.13,.413,.024,.026,.010);
  }else{
   const bedroll=tube(0xdca65d,0,.30,.11,.109,.53);bedroll.rotation.z=Math.PI/2;
   for(const s of sides){const belt=tube(leather,s*.155,.30,.11,.115,.034);belt.rotation.z=Math.PI/2;box(gold,s*.127,-.11,.394,.062,.058,.024);}
  }break;
 }
 case 'jetpack':
  backpack(0x415578,leather);
  for(const s of sides){const x=s*.29;tube(silver,x,.012,.15,.139,.46);orb(silver,x,.243,.15,.138,.105,.14);tube(gold,x,-.228,.15,.146,.062);tube(ink,x,-.273,.15,.111,.039);
   gem(cyan,x,-.376,.15,.081,.146,.078);gem(blue,x,-.419,.15,.042,.105,.047);}
  plate('circle',gold,0,.071,.302,.093,.093,.033);plate('star',blue,0,.071,.329,.054,.054,.016);break;
 case 'snailPack':{
  straps();orb(0xc87555,0,-.03,.124,.32,.31,.19);
  const line=[];for(let i=0;i<=18;i++){const a=.22+i*.51,r=.263-i*.012;line.push([Math.cos(a)*r,-.028+Math.sin(a)*r,.31-i*.001]);}wire(0xa24558,line,.031);
  for(const s of sides){wire(leather,[[s*.11,.19,.10],[s*.153,.37,.14]],.024);orb(0xf9b37c,s*.159,.396,.14,.065);
   plate('leaf',green,s*.23,-.238,.237,.049,.105,.027,-s*.63);}break;
 }
 case 'turtleShell':
  straps();orb(leather,0,0,.095,.33,.425,.19);orb(0x3f7b37,0,0,.147,.303,.395,.19);
  for(let i=0;i<7;i++){const a=i*tau/6,x=i?Math.sin(a)*.17:0,y=i?Math.cos(a)*.252:0;
   plate('hex',i%2?0x68a13a:0x548f35,x,y,i?.282:.336,i?.094:.141,i?.115:.145,.041);}
  plate('spark',gold,0,.04,.367,.045,.06,.018);break;
 case 'guitar':{
  straps();orb(0xc98939,-.03,-.2,.12,.21,.245,.105);orb(0xcf9348,.02,.034,.12,.151,.158,.095);
  orb(ink,0,-.008,.209,.077,.079,.02);
  const neck=box(leather,.055,.335,.134,.091,.60,.068);neck.rotation.z=-.17;
  const peg=box(0xc98743,.112,.69,.144,.133,.16,.078);peg.rotation.z=-.17;
  for(let i=-1;i<=1;i++)wire(cream,[[i*.018-.016,-.245,.222],[i*.018+.112,.735,.193]],.005);
  for(const s of sides)for(let j=0;j<2;j++)orb(gold,.108+s*.089,.64+j*.072,.143,.027);
  break;
 }
 case 'surfboard':{
  straps();const board=orb(cyan,0,.005,.12,.227,.595,.076);board.rotation.z=-.32;
  wire(orange,[[-.157,-.41,.168],[.035,.00,.206],[.204,.436,.167]],.039);
  flower(-.051,.149,.203,.067,pink);plate('triangle',brass,-.127,-.338,.184,.048,.094,.117,-.32);break;
 }
 case 'cloudSails':
  backpack(leather);
  for(const s of sides){
   wire(brass,[[s*.12,-.11,.13],[s*.42,.623,.12]],.029);orb(gold,s*.42,.623,.12,.043);
   const sail=plate('sail',cream,s*.32,.264,.19,.177,.32,.059,-s*.27);sail.rotation.y=s<0?Math.PI:0;
   wire(blue,[[s*.141,.20,.236],[s*.304,.189,.238],[s*.471,.223,.233]],.026);
  }break;
 case 'balloonPack':{
  backpack(0x76538c);const balloons=[[-.30,.52,red],[-.15,.67,orange],[.04,.69,gold],[.21,.60,violet],[.05,.48,green]];
  for(const [x,y,c]of balloons){wire(cream,[[x*.23,.19,.13],[x,y-.13,.12]],.009);orb(c,x,y,.14,.127,.151,.12);gem(c,x,y-.153,.134,.025,.033,.023);}
  plate('star',gold,0,-.10,.387,.065,.065,.021);break;
 }
 case 'cometPack':
  straps(blue);
  for(let i=0;i<5;i++){const x=.06+.079*i,y=.11+.073*i;
   const shard=gem(i%2?blue:cyan,x,y,.13,.075,.184-i*.008,.065);shard.rotation.z=-.75;}
  plate('star',gold,-.088,-.09,.14,.194,.199,.075,-.25);plate('star',cyan,-.088,-.09,.204,.140,.145,.052,-.25);
  break;
 default:return false;
 }return true;
}

// All geometry is shared by the world's ArtResources and merged when mounted on
// the explorer. Returning false leaves specialty and IntGem wearables to their own renderers.
export function buildCoinWearArt(art,group,id){
 const d=designer(art,group);
 return headwear(d,id)||facewear(d,id)||backwear(d,id);
}
