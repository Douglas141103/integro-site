import {ExtrudeGeometry, Shape, SphereGeometry} from 'three';

const gold=0xffcc62, brass=0xc68a36, ivory=0xfff3d4, ink=0x243b50;
const sides=[-1,1];
const profiles={
 feather:[[0,-.50],[.17,-.19],[.23,.14],[.14,.39],[0,.5],[-.08,.2],[-.16,-.16]],
 bat:[[0,-.39],[.08,.03],[.23,.48],[.42,.63],[.44,.46],[.67,.3],[.9,.08],[1,-.16],[.82,-.07],[.7,-.1],[.61,-.33],[.48,-.18],[.36,-.2],[.27,-.42],[.16,-.28]],
 cape:[[-.36,.46],[-.22,.52],[0,.37],[.22,.52],[.36,.46],[.46,-.07],[.59,-.46],[.37,-.52],[.17,-.46],[0,-.53],[-.17,-.46],[-.37,-.52],[-.59,-.46],[-.46,-.07]],
 visor:[[-.47,.12],[-.35,.2],[.30,.2],[.46,.12],[.45,-.06],[.34,-.17],[.12,-.17],[0,-.08],[-.12,-.17],[-.35,-.17],[-.46,-.06]],
 flame:[[0,-.5],[.22,-.41],[.32,-.15],[.27,.14],[.12,.04],[.08,.42],[-.04,.64],[-.07,.26],[-.25,.04],[-.3,-.18],[-.21,-.42]],
 collar:[[-.45,.33],[-.25,.43],[0,.21],[.25,.43],[.45,.33],[.32,.14],[.17,.17],[0,-.04],[-.17,.17],[-.32,.14]]
};
function radial(count,inner){
 return Array.from({length:count*2},(_,i)=>{
  const a=Math.PI*.5+i*Math.PI/count,r=i%2?inner:1;
  return [Math.cos(a)*r,Math.sin(a)*r];
 });
}
profiles.star=radial(5,.45);profiles.spark=radial(4,.34);profiles.gear=radial(10,.78);
profiles.gem=[[0,1],[.62,.22],[.62,-.14],[0,-1],[-.62,-.14],[-.62,.22]];
profiles.hex=Array.from({length:6},(_,i)=>[Math.cos(i*Math.PI/3),Math.sin(i*Math.PI/3)]);

// The world owns and reuses these neutral silhouettes; individual pieces have
// normal thickness and bevels so their profiles remain readable when orbiting.
function silhouette(name){
 const shape=new Shape(),points=profiles[name];
 shape.moveTo(...points[0]);for(const point of points.slice(1))shape.lineTo(...point);shape.closePath();
 const result=new ExtrudeGeometry(shape,{depth:.16,bevelEnabled:true,bevelSize:.022,bevelThickness:.025,bevelSegments:1,curveSegments:2});
 result.translate(0,0,-.08);return result;
}
export function premiumAccessory(group,item,helpers){
 if(!item)return;
 const {cyl,torus,rod,softBox,mesh,geo}=helpers;
 const main=parseInt(item.color.slice(1),16),trim=parseInt(item.secondary.slice(1),16);
 const orb=(r,x,y,z,c=main,sx=1,sy=1,sz=1)=>{
  const m=mesh(group,geo('egg-gem-orb',()=>new SphereGeometry(1,12,8)),c,x,y,z);
  m.scale.set(r*sx,r*sy,r*sz);return m;
 };
 const ring=(r,x,y,z,c=trim,t=.027)=>torus(group,r,t,c,x,y,z);
 const horizontal=(r,x,y,z,c,t)=>{const m=ring(r,x,y,z,c,t);m.rotation.x=Math.PI/2;return m;};
 const box=(w,h,d,x,y,z,c=main)=>softBox(group,w,h,d,c,x,y,z);
 const tube=(top,bottom,h,x,y,z,c,n=12)=>cyl(group,top,bottom,h,c,x,y,z,n);
 const line=(a,b,c=trim,r=.024)=>rod(group,a,b,r,c);
 const plate=(name,x,y,z,w,h,d,c,angle=0)=>{
  const part=mesh(group,geo('egg-gem-profile-'+name,()=>silhouette(name)),c,x,y,z);
  part.scale.set(w,h,d);part.rotation.z=angle;return part;
 };
 const jewel=(x,y,z,w,h,c)=>plate('gem',x,y,z,w,h,.48,c);
 const gemStar=(x,y,z,r,c=gold)=>plate('star',x,y,z,r,r,.25,c);
 const visor=(c,rim=gold)=>{plate('visor',0,0,0,.79,.81,.72,rim);plate('visor',0,0,-.061,.72,.65,.33,c);};
 const crownBand=(c)=>{horizontal(.305,0,.03,0,c,.049);horizontal(.307,0,.105,0,c,.028);};
 const clock=(x,y,z,r)=>{
  orb(r,x,y,z,ivory,1,1,.23);ring(r,x,y,z-.016,gold,.022);
  line([x,y,z-.05],[x-.32*r,y+.48*r,z-.05],ink,.011);
  line([x,y,z-.05],[x+.49*r,y+.23*r,z-.05],ink,.009);
  orb(.021,x,y,z-.053,brass);
 };
 const galaxy=(x,y,z,r,c)=>{
  orb(r,x,y,z,c,1,1,.64);
  for(let i=0;i<3;i++){
   const band=ring(r*(1.18+i*.18),x,y,z,i===1?trim:gold,.018);
   band.rotation.set(.95-i*.51,.36+i*.46,.35+i*.68);
  }
 };
 group.name='IntGem-'+item.id;
 switch(item.model||item.nativeId){
 case 'cap':
  orb(.36,0,.14,0,main,1.12,.67,1);tube(.34,.35,.10,0,.036,0,ink);
  orb(.29,0,-.015,-.26,ink,1.16,.14,.74);horizontal(.35,0,.091,0,gold,.014);
  ring(.085,0,.15,-.34,gold,.016);gemStar(0,.15,-.357,.068);break;
 case 'scanner':
  visor(0x199b9c);for(const y of[-.042,.047])line([-.25,y,-.108],[.25,y,-.108],trim,.013);
  for(const x of[-.17,0,.17])line([x-.018,-.046,-.106],[x+.018,.049,-.106],trim,.008);
  for(const k of sides)box(.07,.11,.27,k*.33,.012,.092,main);break;
 case 'train':
  box(.43,.45,.27,0,.03,.085,main);box(.54,.075,.42,0,.291,.09,gold);
  box(.30,.17,.035,0,.12,.235,ink);tube(.165,.165,.44,0,-.125,.30,main).rotation.x=Math.PI/2;
  ring(.145,0,-.125,.52,gold,.026);orb(.10,0,-.125,.53,ivory,1,1,.48);
  tube(.09,.065,.21,0,.065,.39,ink);horizontal(.088,0,.17,.39,gold,.018);
  for(const k of sides)for(const z of[.03,.29]){const w=tube(.102,.102,.04,k*.23,-.20,z,gold);w.rotation.z=Math.PI/2;}
  break;
 case 'coral':
  crownBand(main);
  for(let j=-2;j<=2;j++){
   const x=j*.122,base=-.245+Math.abs(j)*.065,h=.33+Math.cos(j)*.07;
   line([x,.10,base],[x*(1.21),h,base],main,.039);
   for(const k of sides){line([x*1.1,h*.64,base],[x*1.2+k*.068,h*.88,base],main,.022);orb(.026,x*1.2+k*.068,h*.88,base,main);}
   orb(.042,x*1.21,h+.008,base,trim);
  }break;
 case 'diver':
  visor(trim,main);plate('visor',0,-.02,-.09,.63,.51,.20,0x6dd5d4);
  line([.34,-.14,.05],[.39,.23,.045],main,.042);line([.39,.23,.045],[.36,.31,-.025],main,.042);
  horizontal(.05,.36,.315,-.025,trim,.012);break;
 case 'shell':
  for(let j=-3;j<=3;j++){const f=orb(.17,j*.084,.10-Math.abs(j)*.022,.09,j%2?main:0xeaa2c6,.70,2.05,.50);f.rotation.z=-j*.24;}
  orb(.14,0,-.11,.23,ivory);orb(.21,0,-.21,.12,trim,1.25,.36,.8);break;
 case 'antlers':
  crownBand(0x7962b9);
  for(const k of sides){
   line([k*.235,.04,0],[k*.42,.39,0],main,.032);line([k*.34,.25,0],[k*.51,.34,.01],main,.025);
   for(const [x,y,h,c,lean] of[[.41,.43,.145,trim,-.3],[.53,.36,.095,main,-.68],[.30,.32,.092,trim,.36]]){
    const gem=jewel(k*x,y,0,.077,h,c);gem.rotation.z=k*lean;
   }
  }break;
 case 'prism':
  for(const k of sides){plate('hex',k*.17,0,0,.166,.14,.51,main);plate('hex',k*.17,0,-.056,.134,.109,.3,trim);
   const mark=box(.10,.017,.018,k*.16,.037,-.09,ivory);mark.rotation.z=.48;
   box(.035,.04,.24,k*.312,0,.10,main);}
  box(.076,.034,.05,0,.016,0,main);break;
 case 'wings':
  orb(.11,0,0,.11,main,1,1.2,.65);
  for(const k of sides)for(let j=0;j<6;j++){
   const f=plate('feather',k*(.17+j*.10),.005+j*.075,.11-j*.018,.63,.50+j*.04,.58,j<3?main:trim,-k*(.53+j*.078));
   if(k<0){f.rotation.order='ZXY';f.rotation.y=Math.PI;}
  }break;
 case 'horns':
  orb(.345,0,.06,0,0x823b31,1,.82,1);horizontal(.335,0,.045,0,main,.033);
  for(const k of sides){line([k*.23,.11,0],[k*.40,.26,.02],gold,.067);
   const horn=tube(0,.069,.225,k*.43,.347,.015,gold,6);horn.rotation.z=-k*.25;
   line([k*.03,.25,-.22],[k*.24,.03,-.25],main,.024);}
  plate('flame',0,.29,-.06,.29,.39,.67,main);break;
 case 'mask':
  plate('visor',0,.02,0,.74,.96,.75,0x733529);
  for(const k of sides){
   const brow=box(.19,.05,.06,k*.16,.045,-.078,trim);brow.rotation.z=k*.25;
   tube(.041,0,.17,k*.22,-.145,-.035,ivory,5);
  }plate('flame',0,.15,-.041,.21,.29,.46,main);break;
 case 'reactor':
  box(.44,.45,.24,0,.03,.05,0x773b3a);
  for(const x of[-.225,.225]){tube(.14,.15,.48,x,.02,.17,0xa64635,8);
   for(const y of[-.18,.17])horizontal(.14,x,y,.17,gold,.027);
   orb(.075,x,.07,.30,main);tube(.10,0,.27,x,-.345,.17,trim,5);}
  break;
 case 'orbit':
  crownBand(0x8869c8);jewel(0,.32,0,.15,.26,trim);
  for(const k of sides){const band=ring(.38,0,.24,0,main,.018);band.rotation.set(1,k*.45,k*.55);
   orb(.077,k*.30,.27,-k*.12,k===1?trim:gold);}
  break;
 case 'saturn':
  visor(0x5c4c9d,main);orb(.125,0,.01,-.111,main,1,1,.64);
  {const rings=ring(.23,0,.009,-.12,trim,.022);rings.scale.y=.47;rings.rotation.z=.29;}
  break;
 case 'satellite':
  box(.32,.41,.33,0,0,.14,main);jewel(0,.015,.34,.10,.16,0x985ccb);
  for(const k of sides){line([k*.11,0,.1],[k*.40,0,.1],gold,.028);box(.31,.42,.052,k*.49,0,.11,0x5267aa);
   for(const y of[-.11,0,.11])box(.31,.01,.015,k*.49,y,.145,trim);
   box(.012,.41,.015,k*.49,0,.145,trim);}
  line([0,.18,.14],[.11,.39,.14],gold,.025);orb(.14,.13,.41,.14,ivory,1,.36,1).rotation.z=.32;break;
 case 'crown':
  crownBand(gold);for(let j=0;j<7;j++){const a=2*Math.PI*j/7,x=.30*Math.sin(a),z=-.30*Math.cos(a);
   tube(0,.097,.22,x,.19,z,gold,4);orb(.033,x,.305,z,gold);}
  jewel(0,.145,-.315,.121,.141,0x59c7e3);break;
 case 'monocle':
  ring(.145,-.112,.025,0,gold,.025);orb(.127,-.112,.025,-.006,trim,1,1,.23);
  for(let i=0;i<4;i++){const l=ring(.026,-.242-i*.014,-.06-i*.049,0,brass,.008);l.scale.y=1.34;}
  gemStar(-.30,-.30,0,.072);break;
 case 'cape':
  plate('cape',0,-.12,.12,.92,.93,1.10,0x448ac8);plate('collar',0,.03,.24,.91,.64,.53,gold);
  for(const k of sides)line([k*.28,.19,.21],[k*.47,-.52,.21],gold,.017);
  jewel(0,.025,.25,.105,.125,trim);break;
 case 'dragonWings':
  for(const k of sides){
   const wing=plate('bat',k*.052,0,.09,.83,.76,.86,main);
   if(k<0)wing.rotation.y=Math.PI;
   for(const [x,y] of[[.07,-.24],[.32,-.23],[.56,-.20],[.83,-.1]])line([k*.40,.43,.165],[k*x,y,.165],gold,.018);
   line([k*.04,-.14,.16],[k*.40,.43,.16],gold,.028);
   line([k*.40,.43,.16],[k*.78,.06,.16],gold,.022);
  }break;
 case 'prismHalo':
  for(const [r,y,c] of[[.39,.16,main],[.48,.25,trim]])horizontal(r,0,y,0,c,.023);
  for(let j=0;j<6;j++){const a=j*Math.PI/3;jewel(Math.sin(a)*.435,.24,Math.cos(a)*.435,.058,.096,[main,trim,gold][j%3]);}break;
 case 'timeMask':
  visor(0x428e85,trim);clock(-.104,.005,-.088,.13);
  plate('gear',.22,.012,-.086,.098,.098,.34,brass);orb(.047,.22,.012,-.13,trim,1,1,.4);break;
 case 'clockworkCrown':
  crownBand(gold);for(const k of sides){plate('gear',k*.205,.18,-.16,.118,.118,.48,brass);orb(.061,k*.205,.18,-.213,trim,1,1,.3);
   tube(0,.071,.19,k*.25,.23,.076,gold,4);}
  clock(0,.20,-.30,.146);gemStar(0,.39,-.23,.069);break;
 case 'hourglassPack':
  for(const y of[-.40,.40]){tube(.28,.28,.065,0,y,.14,brass);horizontal(.26,0,y+.033,.14,gold,.022);}
  for(const k of sides){line([k*.242,-.39,.16],[k*.242,.39,.16],gold,.022);}
  for(const k of sides){const glass=tube(k>0?.215:.033,k>0?.033:.215,.33,0,k*.18,.14,main,12);glass.scale.z=.86;}
  tube(.042,.14,.15,0,-.26,.22,trim,10);line([0,.17,.271],[0,-.17,.271],trim,.011);break;
 case 'galaxyMask':
  visor(0x65509f,main);
  for(const k of sides){const x=k*.17;gemStar(x,.042,-.092,.032,ivory);line([x,.042,-.097],[k*.058,-.055,-.097],trim,.006);orb(.02,k*.058,-.055,-.096,ivory);}
  orb(.042,.26,-.026,-.092,trim,1,.92,.6);break;
 case 'galaxyPortal':{
  galaxy(0,.08,.18,.285,0x8052b0);
  // A spiral of starlight across the dome identifies the portal from afar.
  let previous=[0,.08,.369];
  for(let j=1;j<=9;j++){
   const a=j*.69,r=j*.019;
   const next=[Math.cos(a)*r,.08+Math.sin(a)*r,.37-.039*(r/.171)**2];
   line(previous,next,j<6?ivory:main,.012);previous=next;
  }
  for(const k of sides){gemStar(k*.36,.15+k*.17,.24,.059,gold);orb(.053,k*.316,.10-k*.24,.19,trim);}
  break;
 }
 case 'starBeacon':
  tube(.21,.27,.09,0,-.25,.12,brass);tube(.105,.16,.15,0,-.15,.12,gold);
  galaxy(0,.18,.14,.24,main);orb(.06,-.27,.33,.18,gold);break;
 default:return false;
 }
 return true;
}
