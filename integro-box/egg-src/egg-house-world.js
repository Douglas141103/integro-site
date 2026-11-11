import {cleanHouse,modulePosition,houseWalls,HOUSE_MODULES} from './egg-house.js';
export function createHouseWorld({base,helpers}){
 const {group,box,cyl,rod,ball,label}=helpers,root=group(base),building=group(root);root.name='PlayerModularHouse';let signature='',roofs=[],walls=[],modules=[];
 box(root,28,.7,24,0x79ae70,0,-.43,38);box(root,3,.035,8,0xe0ca92,0,-.01,29);box(root,14,.04,14,0x99bc7c,0,-.005,39);
 for(const x of[-7,7]){for(let z=32;z<=46;z+=2)cyl(root,.09,.12,.7,0xb48a52,x,.3,z,6);rod(root,[x,.43,32],[x,.43,46],.06,0xdfbe7b);}
 label(root,'MINHA CASA · MONTAR',0,2.3,30,4);for(const x of[-1.65,1.65]){cyl(root,.24,.17,.4,0xb96b45,x,.2,30,8);ball(root,.38,0x508b54,x,.62,30,1,.9,1);}
 function sync(raw){const house=cleanHouse(raw),key=JSON.stringify(house);if(signature===key)return;signature=key;modules=house.modules;building.clear();roofs=[];walls=[];
  for(const m of modules){const p=modulePosition(m),g=group(building,p.x,0,p.z);g.name='HouseModule:'+m.id;g.userData.module={...m};box(g,3.96,.08,3.96,0xbc955e,0,0,0);for(let x=-1.8;x<=1.8;x+=.4)box(g,.015,.01,3.9,0x957343,x,.045,0);for(const x of[-1.92,1.92])for(const z of[-1.92,1.92])cyl(g,.075,.1,2.5,0x9a7045,x,1.25,z,6);
   const roof=group(g);roof.name='ThatchedHouseRoof';for(let j=0;j<4;j++){const width=4.5-j*.6;cyl(roof,0,width/Math.sqrt(2),1, j%2?0xc5a45d:0xe2c779,0,2.7+j*.23,0,4).rotation.y=Math.PI/4;}roofs.push(roof);
   for(let j=-5;j<=5;j++){const a=j*.37;rod(roof,[a,2.25,-2.2],[a*.65,3.05,-1.25],.035,0xf0d990);rod(roof,[a,2.25,2.2],[a*.65,3.05,1.25],.035,0xf0d990);}
   const f=group(g);f.rotation.y=m.rotation*Math.PI/2;
   if(m.type==='bedroom'){box(f,1.25,.35,1.9,0x976941,-.85,.23,.25);box(f,1.18,.16,1.8,0xb0cda0,-.85,.48,.25);box(f,1,.12,.4,0xfff3d4,-.85,.61,.85);box(f,1.1,.025,1.2,0xe9c36f,.8,.055,0);}
   else if(m.type==='kitchen'){box(f,2.4,.85,.65,0xb68450,0,.46,1.45);box(f,2.5,.12,.72,0xf4dfb0,0,.94,1.45);box(f,.6,.03,.45,0x80b5c1,-.65,1.01,1.45);rod(f,[-.65,1,1.7],[-.65,1.35,1.7],.04,0x456d78);box(f,1,.1,.8,0xd0a365,1,.68,-.7);cyl(f,.08,.1,.6,0x956b43,1,.32,-.7,6);}
   else if(m.type==='porch'){for(const x of[-1.3,1.3]){box(f,.55,.12,1.8,0xc1975c,x,.5,0);box(f,.15,.5,1.8,0xa77b48,x,.25,0);}cyl(f,.25,.18,.4,0xbc7954,1.25,.2,1.3,8);ball(f,.4,0x5d9754,1.25,.7,1.3);}
   else{box(f,2.4,.02,1.6,HOUSE_MODULES.room.color,0,.055,0);box(f,1.3,.12,.65,0xb18450,0,.65,.7);cyl(f,.09,.12,.6,0x946e42,0,.3,.7,6);box(f,1.5,.35,.6,0xd3b477,-.2,.22,1.4);}
  }
  for(const w of houseWalls(house)){const g=group(building,w.x,0,w.z);box(g,w.w,2.35,w.d,0xddc280,0,1.175,0);for(let j=0;j<6;j++)box(g,w.w+.01,.035,w.d+.01,0xc5a568,0,.25+j*.36,0);g.name='HouseStrawWall';walls.push({g,...w});}
 }
 function animate(game,camera){const p=game.player,inside=p.y<2.5&&modules.some(m=>{const q=modulePosition(m);return Math.abs(p.x-q.x)<1.95&&Math.abs(p.z-q.z)<1.95;});for(const r of roofs)r.visible=!inside;for(const w of walls){const towardCamera=camera?(w.x-p.x)*(camera.position.x-p.x)+(w.z-p.z)*(camera.position.z-p.z)>0:w.z>p.z;w.g.scale.y=inside&&towardCamera?.25:1;}}
 sync();return{root,sync,animate};
}
