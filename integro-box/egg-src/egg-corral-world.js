import {CORRAL_DESIGNS,CORRAL_ELEVATOR,FLOOR_HEIGHT,corralFloors} from './egg-corral.js';
export function createCorralWorld({pen,roof,penContent,penDecor,helpers}){
 const {group,box,cyl,rod,torus,ball,label}=helpers,upper=group(pen),levels=[];let cabin=null;
 upper.name='CorralWalkableFloors';let signature='';
 function clear(){upper.traverse(o=>{if(o.isSprite){o.material.map?.dispose();o.material.dispose();}});upper.clear();levels.length=0;cabin=null;}
 function theme(g,id,d,y){
  const deco=group(g,0,y,0);deco.name='CorralDesign-'+id;
  for(const x of[-3.25,3.25]){
   if(id==='castle'){
    cyl(deco,.35,.38,1.25,d.trim,x,.63,3.25,8);for(let k=0;k<5;k++){const a=k*Math.PI*2/5;box(deco,.18,.25,.18,d.rail,x+Math.cos(a)*.26,1.32,3.25+Math.sin(a)*.26);}rod(deco,[x,1.4,3.25],[x,2.25,3.25],.035,d.trim);box(deco,.55,.34,.045,d.roof,x+.24,2.04,3.25);
   }else if(id==='candy'){
    rod(deco,[x,0,3.25],[x,1.5,3.25],.065,d.rail);ball(deco,.34,d.roof,x,1.6,3.25);torus(deco,.22,.06,d.trim,x,1.6,3.49);for(let k=0;k<4;k++)box(deco,.16,.12,.16,d.roof,x,.2+k*.3,3.25);
   }else if(id==='space'){
    const orbit=torus(deco,.43,.035,d.rail,x,1.2,3.25);orbit.rotation.x=.5;ball(deco,.22,d.roof,x,1.2,3.25);rod(deco,[x,0,3.25],[x,1.15,3.25],.05,d.trim);ball(deco,.08,0xffe08b,x+.4,1.35,3.25);
   }else if(id==='bamboo'){
    for(let k=0;k<3;k++){const px=x+(k-1)*.18;rod(deco,[px,0,3.25],[px,1.55-k*.16,3.25],.05,d.trim);for(let j=0;j<4;j++)torus(deco,.054,.015,d.rail,px,.25+j*.3,3.25).rotation.x=Math.PI/2;ball(deco,.13,d.color,px,1.4,3.25,2,.4,1);}ball(deco,.18,0xffd785,x,1,2.95);
   }else if(id==='tropical'){
    rod(deco,[x,0,3.25],[x+.12,1.6,3.25],.09,d.trim);for(let k=0;k<5;k++){const a=k*1.256;const leaf=ball(deco,.22,0x3eaa79,x+Math.sin(a)*.3,1.7,3.25+Math.cos(a)*.3,1.8,.25,1);leaf.rotation.y=-a;}ball(deco,.13,0x9b6945,x,1.5,3.3);
   }else if(id==='neon'){
    const arch=torus(deco,.4,.045,d.rail,x,1,3.25);arch.scale.y=1.45;box(deco,.7,.16,.5,d.trim,x,.1,3.25);cyl(deco,0,.16,.55,d.roof,x,.7,3.25,5);
   }else{cyl(deco,.22,.18,.35,d.roof,x,.18,3.25);for(let k=0;k<3;k++)ball(deco,.12,k%2?0xffd585:0xf9a8c6,x+(k-1)*.17,.58,3.25);}
  }
 }
 function sync(save){
  const n=corralFloors(save),id=CORRAL_DESIGNS[save.decoration]?save.decoration:'meadow',d=CORRAL_DESIGNS[id],key=n+':'+id;
  if(key===signature)return;signature=key;clear();roof.position.y=3.2+(n-1)*FLOOR_HEIGHT;
  for(let floor=1;floor<=n;floor++){
   const y=(floor-1)*FLOOR_HEIGHT,g=group(upper);g.name='CorralFloor-'+floor;g.userData.floor=floor;levels.push(g);
   if(floor>1){const deck=box(g,7.1,.18,7.8,d.color,0,y-.09,0);deck.name='WalkableCorralDeck';deck.userData.surfaceY=y;
    for(const x of[-3.4,3.4])for(const z of[-3.55,3.55])box(g,.17,FLOOR_HEIGHT,.17,d.trim,x,y-FLOOR_HEIGHT/2,z);
    for(const x of[-3.45,3.45]){for(const h of[.45,.85]){if(x>0){for(const z of[-2.5,2.5])box(g,.1,.1,2.4,d.rail,x,y+h,z);}else box(g,.1,.1,7.5,d.rail,x,y+h,0);}for(const z of[-2.5,2.5])box(g,.1,.9,.1,d.trim,x,y+.45,z);}
    for(const z of[-3.78,3.78]){for(const h of[.45,.85])box(g,6.9,.1,.1,d.rail,0,y+h,z);for(const x of[-3.4,0,3.4])box(g,.1,.9,.1,d.trim,x,y+.45,z);}
    label(g,floor+'º ANDAR · 24 NINHOS',0,y+1.55,-3.8,3.3);
   }
   const e=CORRAL_ELEVATOR,edge=e.x+e.width/2,width=edge-3.1,center=(edge+3.1)/2;
   const landing=box(g,width,.18,e.depth,d.color,center,y-.09,e.z);landing.name='CorralLanding';landing.userData.surfaceY=y;
   if(floor>1)for(const z of[-e.depth/2,e.depth/2]){box(g,width,.08,.08,d.rail,center,y+.85,z);for(const x of[3.6,edge])box(g,.08,.9,.08,d.trim,x,y+.45,z);}
   label(g,floor+'º',e.x,y+2.15,-e.depth/2,1);
   theme(g,id,d,y);
  }
  const e=CORRAL_ELEVATOR,tower=group(upper,e.x,0,e.z),height=(n-1)*FLOOR_HEIGHT+2.55;tower.name='CorralElevator';
  for(const x of[-e.width/2,e.width/2])for(const z of[-e.depth/2,e.depth/2]){box(tower,.13,height,.13,d.trim,x,height/2,z);ball(tower,.13,d.rail,x,height,z);}
  box(tower,e.width+.25,.18,e.depth+.25,d.roof,0,height,0);label(tower,'ELEVADOR',0,2.8,e.depth/2+.08,2.1);label(tower,'ENTRE · ESCOLHA O ANDAR',0,1.7,e.depth/2+.15,2.1);
  cabin=group(tower);cabin.name='CorralElevatorCabin';
  box(cabin,e.width,.16,e.depth,d.roof,0,.04,0);box(cabin,e.width-.2,.025,e.depth-.2,d.rail,0,.13,0);
  box(cabin,e.width,.14,e.depth,d.roof,0,2.25,0);
  for(const x of[-e.width/2+.1,e.width/2-.1])for(const z of[-e.depth/2+.1,e.depth/2-.1])box(cabin,.1,2.12,.1,d.rail,x,1.15,z);
  box(cabin,e.width-.15,1.5,.07,d.color,0,.9,-e.depth/2+.08);
  for(const y of[.5,1])box(cabin,.07,.07,e.depth,d.rail,e.width/2-.07,y,0);
  box(cabin,.4,.65,.12,d.trim,e.width/2-.3,1.05,-e.depth/2+.16);
  for(let i=0;i<Math.min(n,5);i++)ball(cabin,.055,0xffe58d,e.width/2-.3,1.25-i*.1,-e.depth/2+.24);
  label(cabin,'↕',0,1.65,-e.depth/2+.2,.7);

 }
 function animate(game){
  // Cut away upper slabs only while inside, so the active floor stays readable.
  const p=game.player,inside=p.x>-8.55&&p.x<2.3&&p.z>10.1&&p.z<17.95;
  const active=1+Math.floor((p.y+.12)/FLOOR_HEIGHT);
  for(const g of levels)g.visible=!inside||g.userData.floor<=active;
  if(cabin)cabin.position.y=game.elevatorRide?p.y:Math.max(0,Math.min(corralFloors(game.corralSave())-1,Math.round(p.y/FLOOR_HEIGHT)))*FLOOR_HEIGHT;
  for(const container of [penContent,penDecor])for(const child of container.children)child.visible=!inside||child.position.y<active*FLOOR_HEIGHT;
  roof.visible=!inside||active>=corralFloors(game.corralSave());
 }
 return{sync,animate,upper,levels,get cabin(){return cabin;}};
}
