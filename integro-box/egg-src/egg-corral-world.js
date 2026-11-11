import {CORRAL_DESIGNS,CORRAL_STAIRS,FLOOR_HEIGHT,corralFloors,stairPoint} from './egg-corral.js';
export function createCorralWorld({pen,roof,penContent,penDecor,helpers}){
 const {group,box,cyl,rod,torus,ball,label}=helpers,upper=group(pen),levels=[],stairs=[];
 upper.name='CorralWalkableFloors';let signature='';
 function clear(){upper.traverse(o=>{if(o.isSprite){o.material.map?.dispose();o.material.dispose();}});upper.clear();levels.length=0;stairs.length=0;}
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
    for(const x of[-3.45,3.45]){const length=x>0?5.6:7.5;for(const h of[.45,.85])box(g,.1,.1,length,d.rail,x,y+h,0);for(const z of[-2.5,0,2.5])box(g,.1,.9,.1,d.trim,x,y+.45,z);}
    for(const z of[-3.78,3.78]){for(const h of[.45,.85])box(g,6.9,.1,.1,d.rail,0,y+h,z);for(const x of[-3.4,0,3.4])box(g,.1,.9,.1,d.trim,x,y+.45,z);}
    label(g,floor+'º ANDAR · 24 NINHOS',0,y+1.55,-3.8,3.3);
   }
   if(n>1)for(const z of[-CORRAL_STAIRS.landingZ,CORRAL_STAIRS.landingZ]){const edge=CORRAL_STAIRS.x+CORRAL_STAIRS.laneGap+CORRAL_STAIRS.width/2,width=edge-3.1,center=(edge+3.1)/2;const landing=box(g,width,.18,CORRAL_STAIRS.landingDepth,d.color,center,y-.09,z);landing.name='CorralLanding';landing.userData.surfaceY=y;box(g,width,.1,.1,d.rail,center,y+.85,z+Math.sign(z)*.36);}
   theme(g,id,d,y);
  }
  for(let level=1;level<n;level++){
   const ramp=group(upper);ramp.name='CorralStairs-'+level;ramp.userData.fromFloor=level;stairs.push(ramp);
   const s=CORRAL_STAIRS,run=s.halfRun*2/s.steps,rise=FLOOR_HEIGHT/s.steps;
   for(let j=0;j<s.steps;j++){const p=stairPoint(level,(j+.5)/s.steps),top=(level-1)*FLOOR_HEIGHT+(j+1)*rise;const tread=box(ramp,s.width,.12,run+.005,d.trim,p.x,top-.06,p.z);tread.name='CorralStairTread';tread.userData.surfaceY=top;box(ramp,s.width,.025,.035,d.rail,p.x,top+.012,p.z+(level%2?1:-1)*run*.45);}
   const a=stairPoint(level,0),b=stairPoint(level,1);
   for(const x of[a.x-s.width/2,a.x+s.width/2]){rod(ramp,[x,a.y+.85,a.z],[x,b.y+.85,b.z],.055,d.rail);for(const t of[0,.5,1]){const p=stairPoint(level,t);rod(ramp,[x,p.y,p.z],[x,p.y+.85,p.z],.045,d.trim);}}
  }
  if(n>1)label(upper,'ESCADAS · SUBA AQUI',CORRAL_STAIRS.x,1.5,4.2,2.8);
 }
 function animate(game){
  // Cut away upper slabs only while inside, so the active floor stays readable.
  const p=game.player,inside=p.x>-8.55&&p.x<.35&&p.z>10.1&&p.z<17.95;
  const active=1+Math.floor((p.y+.12)/FLOOR_HEIGHT);
  for(const g of levels)g.visible=!inside||g.userData.floor<=active;
  for(const g of stairs)g.visible=!inside||g.userData.fromFloor<=active;
  for(const container of [penContent,penDecor])for(const child of container.children)child.visible=!inside||child.position.y<active*FLOOR_HEIGHT;
  roof.visible=!inside||active>=corralFloors(game.corralSave());
 }
 return{sync,animate,upper,levels,stairs};
}
