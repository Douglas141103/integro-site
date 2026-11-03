import {ROCK,rockSites} from './egg-rock-rules.js';

export function stoneGiant(g,limbs,{group,cyl,box}){
 g.name='GrandePedregulho';
 cyl(g,.43,.55,.72,0x85867c,0,.78,0,6);
 box(g,.65,.35,.20,0xadb09c,0,.91,-.40);
 cyl(g,.34,.39,.48,0xa7a797,0,1.38,-.06,5);
 box(g,.62,.09,.15,0x66695f,0,1.51,-.34);
 box(g,.29,.05,.05,0x484c46,0,1.21,-.39);
 for(const side of[-1,1]){
  cyl(g,.29,.36,.38,0x73786d,side*.53,1.02,0,5);
  const arm=group(g,side*.61,.72,0);box(arm,.3,.53,.35,0x929487);limbs.push(arm);
  cyl(g,0,.17,.34,0xc2c1a8,side*.38,1.36,.10,5);
 }
 return{faceY:1.43,faceZ:-.40};
}

export function createRockWorld({helpers}){
 const {group,cyl,torus,box}=helpers,mountains=[];
 function ground(parent,world){
  for(const [slot,site]of rockSites(world).entries()){
   const node=group(parent,site.x,0,site.z);node.name='GrowingMountain';node.visible=false;
   node.userData.mountain={world,slot};
   // Faceted rock layers, with a single collision envelope matching the visible base.
   cyl(node,.17,ROCK.radius,ROCK.height,0x777d74,0,ROCK.height/2,0,5);
   cyl(node,.08,.82,3.2,0xa5a58f,.40,1.6,.14,5);
   cyl(node,0,.55,2.4,0x5d675f,-.62,1.2,-.22,5);
   const halo=torus(parent,ROCK.radius,.045,0xf7d483,site.x,.035,site.z);halo.rotation.x=Math.PI/2;halo.visible=false;
   mountains.push({node,halo,world,slot});
  }
 }
 function scenery(parent,world){if(world!==ROCK.world)return;
  for(const side of[-1,1])for(let j=0;j<6;j++){
   const h=3+(j%3)*2,x=side*(7+(j%2)*2.3),z=-world*48-j*8-3;
   cyl(parent,.2,2.2,h,j%2?0x69746c:0x929582,x,h/2,z,5);
   box(parent,.9,.2,.7,0xc4be9f,x,.2,z-2);
  }
 }
 function update(game,reducedMotion){for(const m of mountains){const s=game.mountain(m.world,m.slot);m.node.visible=s.visible;m.node.scale.setScalar(Math.max(.001,s.amount));m.halo.visible=s.warning;m.halo.scale.setScalar(reducedMotion?1:1+Math.sin(game.time*5)*.025);}}
 return{ground,scenery,update};
}
