// Small, faceted accessories, attached to the explorer's existing skeleton.
export function premiumAccessory(g,item,{ball,cyl,torus,rod,softBox}){
 if(!item?.model)return;
 const c=parseInt(item.color.slice(1),16),s=parseInt(item.secondary.slice(1),16),dark=0x263f58;
 const box=(w,h,d,x,y,z,color=c)=>softBox(g,w,h,d,color,x,y,z);
 const orb=(r,x,y,z,color=c,sx=1,sy=1,sz=1)=>ball(g,r,color,x,y,z,sx,sy,sz);
 const ring=(r,x,y,z,color=s)=>torus(g,r,.035,color,x,y,z);
 const stick=(a,b,color=s,r=.035)=>rod(g,a,b,r,color);
 switch(item.model){
  case 'cap':cyl(g,.35,.36,.22,c,0,.08,0,10);box(.65,.05,.36,0,-.05,-.25,dark);box(.61,.05,.05,0,.01,-.32,s);orb(.085,0,.15,-.34,s,1,1,.3);break;
  case 'coral':ring(.32,0,.02,0).rotation.x=Math.PI/2;for(const a of[-2,-1,0,1,2]){const x=a*.13,h=.35-Math.abs(a)*.035;stick([x,0,-.15],[x,h,-.15],c,.045);stick([x,h*.5,-.15],[x+.08,h*.8,-.15],c);orb(.055,x,h,-.15,s);}break;
  case 'antlers':ring(.3,0,0,0).rotation.x=Math.PI/2;for(const side of[-1,1]){stick([side*.24,0,0],[side*.42,.48,0]);stick([side*.36,.29,0],[side*.56,.4,0],c);stick([side*.4,.4,0],[side*.3,.6,0],c);orb(.065,side*.42,.5,0);}break;
  case 'horns':orb(.34,0,.02,0,c,1,.75,1);for(const side of[-1,1]){stick([side*.25,.12,0],[side*.42,.35,0],s,.07);cyl(g,0,.07,.23,s,side*.42,.45,0,5);}box(.08,.36,.5,0,.18,0,s);break;
  case 'orbit':ring(.38,0,.22,0).rotation.x=.6;ring(.45,0,.22,0,c).rotation.y=.9;orb(.13,0,.22,0,s);orb(.08,.37,.25,0);orb(.06,-.2,.54,0,s);break;
  case 'crown':cyl(g,.33,.33,.14,c,0,.02,0,7);for(let j=0;j<7;j++){const a=j*Math.PI*2/7;cyl(g,0,.085,.28,c,Math.cos(a)*.3,.22,Math.sin(a)*.3,4);}orb(.12,0,.14,-.34,s,1,1.4,.4);break;
  case 'scanner':box(.68,.23,.12,0,0,0,dark);box(.58,.15,.04,0,0,-.08,c);for(const y of[-.035,.035])box(.51,.02,.02,0,y,-.11,s);break;
  case 'diver':for(const x of[-.16,.16]){ring(.145,x,0,0,c);orb(.115,x,0,-.02,s,1,1,.2);}stick([.34,-.12,.05],[.4,.3,.05],c,.055);stick([.4,.3,.05],[.32,.3,-.08],s,.055);break;
  case 'prism':for(const x of[-.17,.17]){const lens=cyl(g,.15,.15,.06,c,x,0,0,6);lens.rotation.x=Math.PI/2;orb(.09,x,0,-.05,s,1,1,.2);}box(.12,.035,.05,0,0,0,s);break;
  case 'mask':box(.62,.26,.09,0,0,0);for(const side of[-1,1]){box(.16,.055,.04,side*.15,.03,-.07,dark);cyl(g,0,.05,.19,s,side*.23,-.17,0,4).rotation.z=Math.PI;}orb(.065,0,.16,0,s);break;
  case 'saturn':orb(.22,0,0,0,c,1.5,.65,.3);const r=ring(.30,0,0,0);r.scale.y=.55;r.rotation.z=.3;for(const x of[-.18,.18])orb(.04,x,0,-.07,s);break;
  case 'monocle':ring(.17,-.15,0,0,c);orb(.13,-.15,0,-.02,s,1,1,.2);for(let j=0;j<7;j++)ring(.025,-.33-j*.008,-.08-j*.055,0,c);box(.16,.04,.04,.2,0,0,c);break;
  case 'train':box(.52,.42,.35,0,.02,.1);cyl(g,.16,.16,.48,s,0,-.12,.32,10).rotation.x=Math.PI/2;box(.3,.05,.35,0,.29,.1,s);cyl(g,.07,.09,.26,dark,0,.12,.43,8);for(const x of[-.28,.28])for(const y of[-.2,.1])orb(.09,x,y,.12,dark,.4,1,1);break;
  case 'shell':for(let j=-3;j<=3;j++){const rib=orb(.16,j*.11,.1+Math.abs(j)*.045,.08,c,.65,2.3,.4);rib.rotation.z=-j*.16;}orb(.17,0,-.1,.23,s);break;
  case 'wings':for(const side of[-1,1])for(let j=0;j<6;j++){const f=cyl(g,0,.095,.58-j*.03,j%2?c:s,side*(.22+j*.115),.08+j*.08,.08,5);f.rotation.z=-side*(.45+j*.09);}break;
  case 'reactor':box(.42,.45,.23,0,0,.07,dark);for(const x of[-.25,.25]){cyl(g,.14,.14,.62,c,x,0,.18,8);ring(.14,x,-.26,.18).rotation.x=Math.PI/2;cyl(g,0,.1,.3,s,x,-.46,.18,5).rotation.z=Math.PI;}orb(.1,0,.05,.23,s);break;
  case 'satellite':box(.32,.52,.3,0,0,.13);for(const side of[-1,1]){stick([0,0,.1],[side*.64,0,.1]);box(.36,.49,.055,side*.48,0,.1,dark);for(let y=-1;y<=1;y++)box(.32,.015,.02,side*.48,y*.13,.14,s);}stick([0,.2,.1],[0,.48,.1]);orb(.09,0,.5,.1,s);break;
  case 'cape':for(let j=-2;j<=2;j++){const p=cyl(g,.06,.13,.9,s,j*.13,-.19,.1,4);p.scale.z=.3;}box(.65,.12,.17,0,.31,0,c);orb(.13,0,.02,.17,c,1,1.3,.4);break;
 }
}
