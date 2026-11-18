// These miniatures are also used by remote players. Three is passed by the
// caller so unbundled rooms and the two separately built games share one API.
const gold=0xffc95d, cream=0xfff1cc, navy=0x253d5b;
const sides=[-1,1];

function parts(T,group){
 const materials=new Map(),geometries=new Map();
 function material(color,lit=true){
  const key=color+':'+lit;
  if(!materials.has(key))materials.set(key,lit?new T.MeshToonMaterial({color}):new T.MeshBasicMaterial({color}));
  return materials.get(key);
 }
 function geometry(key,create){if(!geometries.has(key))geometries.set(key,create());return geometries.get(key);}
 function add(geo,c,x,y,z,sx=1,sy=1,sz=1,lit=true){
  const m=new T.Mesh(geo,material(c,lit));m.position.set(x,y,z);m.scale.set(sx,sy,sz);group.add(m);return m;
 }
 function orb(c,x,y,z,w,h=w,d=w){return add(geometry('orb',()=>new T.SphereGeometry(1,10,7)),c,x,y,z,w,h,d);}
 function crystal(c,x,y,z,w,h=w,d=w){return add(geometry('jewel',()=>new T.OctahedronGeometry(1)),c,x,y,z,w,h,d);}
 function cone(c,x,y,z,r,h,n=5){return add(geometry('cone'+n,()=>new T.ConeGeometry(1,1,n)),c,x,y,z,r,h,r);}
 function ring(c,x,y,z,r,width=.018){return add(geometry('ring'+width/r,()=>new T.TorusGeometry(1,width/r,5,28)),c,x,y,z,r,r,r);}
 function path(c,points,r=.02,segments=12){
  const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
  return add(new T.TubeGeometry(curve,segments,r,5,false),c,0,0,0);
 }
 function relief(c,x,y,z,w,h,d,points){
  const key='relief'+points.join(';'),geo=geometry(key,()=>{
   const shape=new T.Shape();shape.moveTo(...points[0]);for(const p of points.slice(1))shape.lineTo(...p);shape.closePath();
   const g=new T.ExtrudeGeometry(shape,{depth:.14,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:1,curveSegments:2});
   g.translate(0,0,-.07);return g;
  });
  return add(geo,c,x,y,z,w,h,d);
 }
 return {orb,crystal,cone,ring,path,relief};
}
const wing=[[0,-.3],[.10,.03],[.29,.4],[.49,.57],[.55,.41],[.76,.3],[1,-.04],[.84,.02],[.74,-.04],[.66,-.23],[.52,-.12],[.38,-.17],[.31,-.36],[.13,-.24]];
const feather=[[0,-.65],[.19,-.32],[.23,.12],[.11,.46],[0,.64],[-.13,.28],[-.2,-.15]];
const flame=[[0,-.55],[.29,-.41],[.39,-.12],[.33,.22],[.16,.08],[.11,.49],[0,.74],[-.07,.31],[-.33,.03],[-.35,-.23],[-.21,-.42]];
const crown=[[-.95,-.47],[-1,.64],[-.41,.22],[0,.91],[.41,.22],[1,.64],[.95,-.47]];
const star=Array.from({length:10},(_,i)=>{const a=i*Math.PI/5+Math.PI/2,r=i%2?.45:1;return [Math.cos(a)*r,Math.sin(a)*r];});

export function eggCompanion(T,group,item,wings){
 const {orb,cone,crystal,ring,relief}=parts(T,group);
 const dark=navy,body=item.color,accent=item.secondary;
 const type=item.model||'nest-guardian';
 group.userData.model=type;
 function eyes(y,z,d=.109){
  for(const k of sides){
   orb(dark,k*d,y,z,.033,.045,.023);
   orb(0xfff8e8,k*d-.009,y+.014,z+.019,.012);
  }
 }
 function flaps(side,part){part.userData.side=side;wings.push(part);return part;}
 function beak(y,z){
  const beak=cone(gold,0,y,z,.052,.12,6);beak.rotation.x=Math.PI/2;
 }
 switch(type){
 case 'robot':
  orb(body,0,.09,0,.245,.207,.153);orb(0x17485c,0,.101,.115,.203,.141,.056);
  orb(accent,0,-.19,0,.16,.12,.13);orb(0x286d78,0,-.182,.103,.102,.075,.035);
  orb(body,0,.31,0,.017,.055,.017);orb(gold,0,.38,0,.045);
  for(const k of sides){orb(body,k*.197,-.15,0,.06);orb(accent,k*.25,-.22,0,.058,.10,.055);
   orb(accent,k*.08,.105,.173,.032,.045,.019);}
  break;
 case 'axolotl':
  orb(0xeb8daf,0,-.09,-.065,.20,.135,.24);orb(0xffafc5,0,.06,.10,.244,.17,.17);
  const tail=orb(body,0,-.04,-.31,.072,.106,.22);tail.rotation.x=.24;
  for(const k of sides){for(let j=0;j<3;j++){
    const g=crystal(0xd7396f,k*(.25+(j===1?.064:0)),.02+j*.079,.065,.067,.113,.059);
    g.rotation.z=-k*(1.34-j*.38);}
   orb(0xd96796,k*.164,-.162,.057,.072,.048,.065);
  }eyes(.066,.253,.106);break;
 case 'owl':
  orb(0xe6eee7,0,-.087,-.02,.206,.231,.171);orb(cream,0,.115,.007,.254,.196,.17);
  for(const k of sides){orb(0xc9a4d2,k*.104,.145,.148,.105,.105,.036);
   orb(gold,k*.104,.144,.174,.059,.064,.02);
   const f=flaps(k,relief(k<0?body:accent,k*.219,-.008,0,.46,.315,.39,feather));f.userData.tilt=-k*.78;
   cone(body,k*.171,.285,-.024,.073,.15,5).rotation.z=-k*.34;
   orb(gold,k*.077,-.296,.03,.060,.031,.07);}
  eyes(.148,.193,.106);beak(.075,.193);break;
 case 'dragon':
  orb(0xda6849,0,-.103,-.02,.178,.178,.155);orb(body,0,.087,.045,.202,.169,.151);
  orb(accent,0,.025,.163,.122,.065,.095);orb(0xe68a3b,.117,-.12,-.22,.089,.072,.196).rotation.y=-.44;
  for(const k of sides){cone(gold,k*.112,.262,-.01,.046,.153);
   const p=flaps(k,relief(0xca5338,k*.117,.014,-.102,.32,.34,.44,wing));p.scale.x*=k;p.userData.tilt=-k*.12;
   orb(gold,k*.109,-.244,.079,.066,.048,.088);}
  eyes(.106,.179,.095);break;
 case 'fox':
  orb(body,0,-.108,0,.177,.176,.135);orb(body,0,.093,.025,.218,.17,.155);
  for(const k of sides){cone(body,k*.139,.258,.0,.093,.24,4).rotation.z=-k*.18;
   cone(0xf1bad8,k*.139,.257,.042,.052,.142,4).rotation.z=-k*.18;
   orb(cream,k*.073,.024,.164,.087,.063,.05);orb(accent,k*.093,-.26,.07,.060,.039,.065);}
  const plume=orb(0x8a70db,.23,-.08,-.122,.135,.27,.109);plume.rotation.z=-.66;
  const tuft=orb(accent,.342,.077,-.12,.095,.137,.078);tuft.rotation.z=-.59;
  relief(cream,.308,-.022,-.018,.041,.043,.15,star);
  orb(dark,0,.049,.211,.028,.023,.02);eyes(.108,.166,.103);break;
 case 'chick':
 case 'nest-guardian':{
  const royal=type==='chick';orb(royal?0xffd257:gold,0,-.055,0,.213,.23,.175);orb(body,0,.10,.035,.223,.177,.159);
  for(const k of sides){
   const f=flaps(k,orb(royal?accent:0xf2b653,k*.209,-.047,0,.07,.135,.086));f.userData.tilt=-k*.28;
   orb(0xed9b44,k*.091,-.25,.064,.066,.034,.082);
  }
  if(royal){relief(gold,0,.297,0,.135,.115,.76,crown);crystal(0x57c8db,0,.29,.078,.029,.043,.019);}
  else{
   orb(cream,0,-.187,.014,.236,.146,.182);
   for(let i=0;i<6;i++){const a=i*Math.PI/3;cone(cream,Math.sin(a)*.20,-.092,Math.cos(a)*.145+.014,.062,.106,4);}
   crystal(accent,0,-.18,.197,.052,.064,.02);
  }eyes(.113,.175,.098);beak(.066,.205);break;
 }
 }
}

export function eggAura(T,group,item){
 const {orb,crystal,ring,path,relief}=parts(T,group),main=item.color,trim=item.secondary;
 const type=item.model||(item.id==='egg_jade'?'jade':'cosmos');
 group.userData.model=type;
 function band(r,c,t=.022){const p=ring(c,0,.065,0,r,t);p.rotation.x=Math.PI/2;return p;}
 function around(n,fn,r=.67){for(let i=0;i<n;i++){const a=i*2*Math.PI/n;fn(i,a,Math.cos(a)*r,Math.sin(a)*r);}}
 switch(type){
 case 'tracks':
  for(const k of sides){
   path(main,[[-.28+k*.36,.10,-.79],[-.12+k*.36,.10,-.37],[.12+k*.36,.10,.34],[.11+k*.36,.10,.79]],.034);
  }
  for(let j=0;j<7;j++){const z=(j-3)*.235,x=Math.sin(z*2)*.18;path(trim,[[x-.43,.06,z],[x,.06,z],[x+.43,.06,z]],.028,3);}break;
 case 'bubbles':
  band(.67,trim,.013);around(12,(j,a,x,z)=>{
   const r=[.092,.044,.064][j%3],y=.13+.056*Math.cos(a*3);
   orb(j%2?0xffe5ed:trim,x,y,z,r);if(j%3===0)orb(cream,x-.02,y+.032,z+.06,.020);
  });break;
 case 'petals':
  around(6,(j,a,x,z)=>{
   const p=crystal(j%2?trim:main,x*.59,.10,z*.59,.123,.061,.329);p.rotation.y=Math.PI/2-a;
   const tip=crystal(j%2?main:trim,x,.107,z,.056,.035,.091);tip.rotation.y=Math.PI/2-a;
  });crystal(cream,0,.09,0,.067);break;
 case 'fire':
  band(.65,0xaa402b,.041);around(9,(j,a,x,z)=>{
   const f=relief(j%2?0xff993f:main,x,.17,z,j%2?.225:.28,j%2?.30:.40,.46,flame);f.rotation.y=-a+Math.PI*.5;
  },.645);break;
 case 'orbit':
  for(let j=0;j<3;j++){
   const p=ring(j===1?trim:main,0,.38,0,.62+j*.043,.018);p.rotation.set(1.23,j*.51,j*.89);
  }
  around(5,(j,a,x,z)=>orb(j%2?trim:gold,x,.34+Math.sin(a*2)*.18,z,.072-j*.006));break;
 case 'stars':
  {const pts=[];around(7,(j,a,x,z)=>{pts.push([x,.09+.07*(j%2),z]);},.66);
   for(let j=0;j<pts.length;j++){
    const p=pts[j],next=pts[(j+1)%pts.length],mid=p.map((v,i)=>(v+next[i])/2);path(trim,[p,mid,next],.012,2);
    if(j%2)crystal(trim,p[0],p[1]+.045,p[2],.062,.101,.062);
    else relief(gold,p[0],p[1]+.036,p[2],.083,.083,.32,star);
   }}break;
 case 'jade':
  band(.70,0x429a87,.025);band(.64,main,.015);
  around(8,(j,a,x,z)=>{const p=crystal(j%2?trim:main,x,.13,z,.066,.126,.061);p.rotation.z=Math.cos(a)*.23;});break;
 case 'cosmos':
  band(.67,0x8053b8,.028);around(8,(j,a,x,z)=>{
   if(j%2)relief(j%3?gold:trim,x,.15,z,.083,.09,.28,star);
   else crystal(main,x,.16,z,.077,.142,.063);
  });break;
 }
}
