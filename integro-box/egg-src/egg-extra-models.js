import {ABILITIES} from './egg-content.js';

export function extraAccessory(id,g,{ball,cyl,torus,rod,softBox}){
 const gold=0xffd675,white=0xf5edda,blue=0x77daf2,teal=0x6dd0b1,purple=0xa58bed,red=0xe8797b,dark=0x34445d;
 const clock=(p,x,y,z,r=.28)=>{cyl(p,r,r,.07,gold,x,y,z,24).rotation.x=Math.PI/2;ball(p,r*.83,white,x,y,z-.055,1,1,.12);rod(p,[x,y,z-.09],[x+r*.5,y+r*.3,z-.09],.016,dark);rod(p,[x,y,z-.09],[x,y+r*.65,z-.09],.02,dark);};
 const gem=(x,y,z,c=blue,h=.3)=>cyl(g,0,.09,h,c,x,y,z,5);
 if(id==='astronautHelmet'){ball(g,.41,white,0,.04,0,1,.95,1);ball(g,.32,blue,0,.03,-.24,1,.8,.55);for(const x of[-.39,.39])cyl(g,.1,.1,.1,red,x,0,0).rotation.z=Math.PI/2;rod(g,[.25,.25,0],[.38,.58,0],.025,gold);ball(g,.065,red,.38,.58,0);}
 if(id==='pirateHat'){softBox(g,.95,.15,.42,dark,0,.02,0);cyl(g,.18,.4,.28,dark,0,.17,0,3);ball(g,.09,gold,0,.17,-.25,1,1,.2);const p=ball(g,.1,red,.3,.4,0,.6,2.2,.4);p.rotation.z=-.4;}
 if(id==='wizardHat'){cyl(g,.48,.5,.07,purple,0,.02,0);cyl(g,.015,.3,.84,purple,0,.45,0);for(let j=0;j<5;j++)gem((j%2?1:-1)*(.2-j*.025),.2+j*.1,-.2+j*.025,gold,.1);torus(g,.09,.025,gold,0,.92,0);}
 if(id==='ninjaBand'){torus(g,.34,.055,red,0,.02,0).rotation.x=Math.PI/2;softBox(g,.28,.14,.035,white,0,.04,-.35);for(const side of[-1,1]){const r=softBox(g,.13,.6,.045,red,side*.12,-.15,.32);r.rotation.z=side*.35;}gem(0,.03,-.39,dark,.08);}
 if(id==='sharkHood'){ball(g,.39,0x7ba5bb,0,.03,0,1,.9,1);cyl(g,0,.17,.38,0x6387a1,0,.43,.02,3);for(const x of[-.25,.25]){ball(g,.045,dark,x,.12,-.27);for(let j=0;j<3;j++)cyl(g,0,.045,.1,white,x*.6+j*.035,-.12,-.32,3).rotation.z=Math.PI;}softBox(g,.49,.08,.1,white,0,-.13,-.28);}
 if(id==='mushroomCap'){ball(g,.54,red,0,.14,0,1,.48,1);cyl(g,.3,.3,.12,white,0,-.02,0);for(let j=0;j<7;j++){const a=j*2.4;ball(g,.07,white,Math.sin(a)*.32,.33-j%2*.08,Math.cos(a)*.32,1,.3,1);}}
 if(id==='flowerCrown'){torus(g,.35,.04,teal,0,0,0).rotation.x=Math.PI/2;for(let j=0;j<6;j++){const a=j*Math.PI/3,x=Math.sin(a)*.35,z=Math.cos(a)*.35;for(let k=0;k<5;k++)ball(g,.055,[red,purple,blue][j%3],x+Math.cos(k*1.256)*.07,.08+Math.sin(k*1.256)*.07,z,1,1,.6);ball(g,.04,gold,x,.08,z-.025);}}
 if(id==='antlers'){torus(g,.32,.04,gold,0,.02,0).rotation.x=Math.PI/2;for(const side of[-1,1]){rod(g,[side*.25,.05,0],[side*.48,.67,0],.05,gold);for(let j=0;j<3;j++){rod(g,[side*(.32+j*.04),.25+j*.15,0],[side*(.48+j*.1),.37+j*.15,0],.033,gold);ball(g,.09,teal,side*(.48+j*.1),.42+j*.15,0,.6,1,.3);}}}
 if(id==='clockworkCrown'){cyl(g,.35,.35,.14,gold,0,.04,0);clock(g,0,.36,-.2,.3);for(const side of[-1,1]){torus(g,.14,.04,teal,side*.38,.27,0);for(let j=0;j<6;j++){const a=j*Math.PI/3;softBox(g,.07,.09,.09,gold,side*.38+Math.sin(a)*.16,.27+Math.cos(a)*.16,0);}}}
 if(id==='samuraiHelm'){ball(g,.37,dark,0,.06,0,1,.8,1);for(let j=0;j<3;j++)softBox(g,.5+j*.1,.1,.35,red,0,-.08-j*.09,.07);for(const side of[-1,1]){rod(g,[side*.1,.19,-.28],[side*.36,.4,-.2],.05,gold);rod(g,[side*.36,.4,-.2],[side*.47,.66,-.12],.04,gold);}gem(0,.22,-.31,red,.22);}
 if(id==='monocle'){torus(g,.15,.035,gold,-.15,0,0);ball(g,.12,blue,-.15,0,-.01,1,1,.15);for(let j=0;j<6;j++)torus(g,.025,.012,gold,-.29-j*.009,-.12-j*.045,0);softBox(g,.08,.035,.035,gold,0,0,0);}
 if(id==='heartGlasses'){for(const x of[-.18,.18]){for(const side of[-1,1])ball(g,.095,red,x+side*.055,.045,0,1,1,.25);cyl(g,.13,0,.19,red,x,-.065,0,3).scale.z=.2;}softBox(g,.12,.03,.05,gold,0,0,0);}
 if(id==='snowGoggles'){softBox(g,.7,.25,.13,white,0,0,0);for(const x of[-.18,.18]){ball(g,.14,blue,x,0,-.09,1,.7,.2);for(let j=0;j<3;j++){const a=j*Math.PI/3;rod(g,[x-Math.sin(a)*.07,-Math.cos(a)*.07,-.13],[x+Math.sin(a)*.07,Math.cos(a)*.07,-.13],.009,white);}}}
 if(id==='foxMask'){ball(g,.31,white,0,0,0,1,.8,.2);for(const side of[-1,1]){cyl(g,0,.12,.28,white,side*.22,.24,0,3);ball(g,.08,red,side*.15,0,-.06,1,.6,.3);}cyl(g,0,.07,.14,dark,0,-.08,-.12,3).rotation.x=-Math.PI/2;}
 if(id==='dragonMask'){ball(g,.31,teal,0,0,0,1,.75,.4);softBox(g,.22,.16,.2,gold,0,-.08,-.14);for(const side of[-1,1]){cyl(g,0,.07,.32,gold,side*.22,.25,0,5);ball(g,.06,dark,side*.14,.02,-.12);ball(g,.026,red,side*.06,-.06,-.25);}}
 if(id==='owlMask'){for(const x of[-.17,.17]){torus(g,.19,.045,gold,x,0,0);ball(g,.15,white,x,0,.01,1,1,.18);ball(g,.07,dark,x,0,-.05);}cyl(g,0,.07,.15,red,0,-.12,-.06,3).rotation.z=Math.PI;}
 if(id==='rainbowVisor'){softBox(g,.72,.26,.1,dark,0,0,0);[red,0xffb975,gold,teal,blue,0x82a7ea,purple].forEach((c,j)=>softBox(g,.08,.17,.05,c,(j-3)*.085,0,-.08));}
 if(id==='divingMask'){for(const x of[-.15,.15]){torus(g,.14,.045,teal,x,0,0);ball(g,.11,blue,x,0,-.01,1,1,.2);}rod(g,[.36,-.16,0],[.36,.43,0],.04,gold);rod(g,[.36,.43,0],[.48,.43,0],.04,gold);softBox(g,.1,.08,.05,white,0,-.08,0);}
 if(id==='timeMask'){clock(g,-.15,0,0,.19);torus(g,.14,.04,teal,.2,0,0);for(let j=0;j<8;j++){const a=j*Math.PI/4;softBox(g,.065,.08,.06,gold,.2+Math.sin(a)*.18,Math.cos(a)*.18,0);}ball(g,.08,blue,.2,0,-.01,1,1,.2);}
 if(id==='galaxyMask'){softBox(g,.68,.27,.1,purple,0,0,0);for(let j=0;j<6;j++){ball(g,.025,white,(j-2.5)*.095,Math.sin(j*2)*.07,-.07);if(j<5)rod(g,[(j-2.5)*.095,Math.sin(j*2)*.07,-.07],[(j-1.5)*.095,Math.sin((j+1)*2)*.07,-.07],.008,gold);}ball(g,.07,blue,.26,.16,0);torus(g,.11,.014,gold,.26,.16,0).rotation.x=.7;}
 if(id==='snailPack'){ball(g,.36,0xddac77,0,0,.1,1,1,.5);for(let j=0;j<3;j++)torus(g,.1+j*.08,.035,j%2?gold:red,0,0,.3-j*.015);for(const x of[-.17,.17]){rod(g,[x,.2,.1],[x,.48,.1],.025,teal);ball(g,.06,teal,x,.48,.1);}}
 if(id==='turtleShell'){ball(g,.43,dark,0,0,.1,1,1.2,.5);for(let j=0;j<7;j++){const a=j*Math.PI/3;cyl(g,.13,.13,.08,j?teal:0x95d28d,j?Math.sin(a)*.25:0,j?Math.cos(a)*.3:0,.31,6).rotation.x=Math.PI/2;}torus(g,.42,.04,gold,0,0,.1).scale.y=1.2;}
 if(id==='guitar'){ball(g,.27,0xc88c58,0,-.1,.1,1,1.2,.32);ball(g,.2,0xe2ba7e,0,.17,.1,1,1,.32);softBox(g,.12,.62,.1,0x805747,0,.6,.1);softBox(g,.19,.2,.13,0x99694e,0,.98,.1);ball(g,.08,dark,0,.1,.19,1,1,.15);for(let j=-1;j<=1;j++)rod(g,[j*.025,-.25,.21],[j*.025,.98,.21],.006,gold);}
 if(id==='surfboard'){ball(g,.35,blue,0,.1,.12,1,2.3,.23);softBox(g,.1,1.38,.035,red,0,.1,.21);cyl(g,0,.16,.3,gold,0,-.37,.26,3).rotation.x=Math.PI/2;for(const x of[-.2,.2])ball(g,.045,white,x,.2,.2);}
 if(id==='balloonPack'){softBox(g,.4,.4,.2,purple,0,-.05,.08);for(let j=0;j<5;j++){const x=(j-2)*.24,y=.7+(j%2)*.2;rod(g,[0,.15,.1],[x,y,.1],.01,gold);ball(g,.17,[red,teal,gold,purple,blue][j],x,y+.16,.1,1,1.2,1);}}
 if(id==='butterflyWings'){for(const side of[-1,1])for(let j=0;j<2;j++){const x=side*(j?.38:.45),y=j?-.16:.27;const wing=ball(g,j?.25:.36,j?purple:red,x,y,0,1,1,.16);wing.rotation.z=-side*.35;for(let k=0;k<3;k++)ball(g,.045,gold,x+side*k*.07,y+(k-1)*.1,-.055);}ball(g,.08,dark,0,0,0,.6,3,.5);}
 if(id==='mechanicalWings'){softBox(g,.3,.45,.2,dark,0,0,.08);for(const side of[-1,1]){torus(g,.14,.04,gold,side*.22,.15,0);for(let j=0;j<4;j++){const x=side*(.3+j*.17),y=.18+j*.11;const plate=softBox(g,.15,.6-j*.07,.08,j%2?white:blue,x,y,0);plate.rotation.z=-side*.4;ball(g,.035,gold,x,y+.18,-.06);}}}
 if(id==='dragonWings'){for(const side of[-1,1]){const wing=cyl(g,0,.48,.9,teal,side*.45,.17,0,3);wing.scale.z=.12;wing.rotation.z=-side*.75;rod(g,[0,-.1,0],[side*.8,.56,0],.035,gold);for(let j=0;j<3;j++)rod(g,[side*.25,.12,0],[side*(.4+j*.16),-.25+j*.12,0],.025,gold);}ball(g,.12,red,0,.12,.05);}
 if(id==='hourglassPack'){for(const y of[-.5,.5])cyl(g,.32,.32,.09,gold,0,y,.12);for(const x of[-.28,.28])rod(g,[x,-.5,.12],[x,.5,.12],.035,teal);cyl(g,.24,.035,.4,blue,0,.22,.12,16);cyl(g,.035,.24,.4,blue,0,-.22,.12,16);cyl(g,0,.18,.18,gold,0,-.32,-.03,12);rod(g,[0,.1,-.09],[0,-.3,-.09],.018,gold);}
 if(id==='galaxyPortal'){ball(g,.34,purple,0,.14,.12,1,1,.25);for(let j=0;j<3;j++){const ring=torus(g,.42+j*.13,.035,[gold,blue,teal][j],0,.14,.12);ring.rotation.y=(j-1)*.5;ring.rotation.x=j*.25;}for(let j=0;j<8;j++){const a=j*Math.PI/4;gem(Math.sin(a)*.7,.14+Math.cos(a)*.7,.12,j%2?gold:white,.12);}ball(g,.09,red,.5,.55,.13);}
}

export function abilityModel(id,g,{ball,cyl,torus,rod,softBox}){
 const d=ABILITIES[id];if(!d)return;
 const c=d.color,gold=0xffd675;
 cyl(g,.26,.3,.45,0x3d526b,0,.3,0);cyl(g,.18,.18,.12,gold,0,.59,0);
 const y=.9;
 if(id==='bubble'){ball(g,.29,c,0,y,0,1,1.2,.25);torus(g,.25,.035,gold,0,y,-.06);}
 if(id==='frost')for(let j=0;j<3;j++){const a=j*Math.PI/3;rod(g,[-Math.sin(a)*.3,y-Math.cos(a)*.3,0],[Math.sin(a)*.3,y+Math.cos(a)*.3,0],.04,c);}
 if(id==='doubleJump')for(const x of[-.16,.16]){rod(g,[x,y-.2,0],[x,y+.2,0],.035,c);cyl(g,0,.11,.2,c,x,y+.25,0,3);}
 if(id==='endurance')for(let j=0;j<3;j++){rod(g,[-.25,y+j*.12-.1,0],[.1+j*.07,y+j*.12-.1,0],.035,c);torus(g,.08,.03,c,.14+j*.07,y+j*.12-.04,0);}
 if(id==='rush'){cyl(g,.12,.17,.45,c,0,y,0);cyl(g,0,.12,.19,gold,0,y+.32,0);for(const x of[-.2,.2])softBox(g,.1,.22,.08,c,x,y-.1,0);}
 if(id==='trainingBoost'){rod(g,[-.3,y,0],[.3,y,0],.04,gold);for(const x of[-.27,.27])softBox(g,.12,.3,.2,c,x,y,0);}
 if(id==='hatchBoost'){ball(g,.23,c,0,y,0,1,1.3,1);torus(g,.27,.035,gold,0,y-.2,0).rotation.x=Math.PI/2;ball(g,.055,gold,.1,y,-.2);}
 if(id==='incomeBoost')for(let j=0;j<4;j++)cyl(g,.25,.25,.08,j%2?c:gold,0,y-.25+j*.1,0);
}
