import {SUBSOIL,SUBSOIL_LAVA} from './egg-subsoil.js';
import {TRACK_WIDTH,TRACK_HALF_WIDTH} from './egg-track.js';

export function magmaGuardian(g,limbs,{group,ball,cyl,box}){
 g.name='MagmaGuardian';
 box(g,.85,.85,.58,0x4d3541,0,.87,0);
 box(g,.66,.48,.52,0x62404b,0,1.38,-.06);
 const core=ball(g,.23,0xffa13d,0,.88,-.32,1,1.3,.4);core.material=core.material.clone();core.material.emissive.setHex(0xff671c);core.material.emissiveIntensity=.8;
 for(const side of [-1,1]){
  const arm=group(g,side*.59,.87,0);box(arm,.28,.65,.36,0x62404b);box(arm,.1,.45,.04,0xff963c,0,0,-.2);limbs.push(arm);
  box(g,.28,.39,.38,0x4d3541,side*.23,.23,-.03);
  cyl(g,0,.12,.33,0xffae4b,side*.23,1.76,-.02,5);
  box(g,.07,.37,.035,0xffb34f,side*.22,.88,-.3).rotation.z=side*.38;
 }
 return{faceY:1.42,faceZ:-.34};
}

export function createSubsoilWorld({root,entrance,content,helpers}){
 const {group,box,ball,cyl,torus,label}=helpers,g=content||group(root),lava=[],embers=[];
 g.name='SubsoilBonusTrack';g.visible=false;
 function door(parent,pos,text){
  const d=group(parent,pos.x,0,pos.z);d.name=text==='PORTA DO SUBSOLO'?'SubsoilEntranceDoor':'SubsoilExitDoor';
  for(const side of [-1,1]){box(d,.7,4.4,.85,0x3d293c,side*2.6,2.2,0);box(d,.12,3.8,.91,0xff8d3d,side*2.6,2.2,0);cyl(d,0,.6,1.15,0xffab48,side*2.6,4.9,0,5);}
  box(d,5.9,.7,.9,0x5f3543,0,4.5,0);
  const glow=box(d,4.5,4,.08,0xff6b24,0,2,.2);glow.material=glow.material.clone();glow.material.emissive.setHex(0xff4a16);glow.material.emissiveIntensity=.6;glow.material.transparent=true;glow.material.opacity=.28;glow.material.depthWrite=false;
  label(d,text,0,6,0,6.5,'#fff1cb','#663040');
  label(d,text==='PORTA DO SUBSOLO'?'DESVIE DOS LAGOS DE LAVA':'VOLTE AO MUNDO NORMAL',0,5.35,0,6.4,'#ffddb0','#342732');
 }
 door(entrance,SUBSOIL.gate,'PORTA DO SUBSOLO');door(g,SUBSOIL.exit,'SAÍDA DO SUBSOLO');door(g,SUBSOIL.finish,'SUPERFÍCIE');
 const dais=cyl(g,2.4,2.6,.12,0x3e303b,SUBSOIL.nest.x,.01,SUBSOIL.nest.z,24);dais.name='MagmaNestDais';
 label(g,'OVOS DO GUARDIÃO DE MAGMA',0,5.5,SUBSOIL.nest.z,8,'#fff0c8','#62303a');
 const floor=box(g,TRACK_WIDTH,.6,SUBSOIL.length,0x554752,0,-.3,SUBSOIL.start-SUBSOIL.length/2);floor.name='SubsoilGround';
 for(const h of SUBSOIL_LAVA){
  const rim=cyl(g,1,1,.12,0x2c2530,h.x,.015,h.z,40);rim.scale.set(h.rx+.3,1,h.rz+.3);rim.name='SubsoilLavaRim';
  const pool=cyl(g,1,1,.08,0xff7829,h.x,.075,h.z,40);pool.scale.set(h.rx,1,h.rz);pool.name=h.lake?'SubsoilLavaLake':'SubsoilLavaPuddle';pool.userData.hazard={...h};pool.material=pool.material.clone();pool.material.emissive.setHex(0xff5118);pool.material.emissiveIntensity=.65;lava.push(pool);
  const center=cyl(g,1,1,.015,0xffbe4c,h.x,.121,h.z,32);center.scale.set(h.rx*.65,1,h.rz*.63);
  for(let j=0;j<(h.lake?4:2);j++){const a=j*2.4,b=ball(g,.15,0xffdf75,h.x+Math.cos(a)*h.rx*.5,.18,h.z+Math.sin(a)*h.rz*.5,1,.45,1);embers.push({mesh:b,x:b.position.x,y:.18,z:b.position.z,phase:j+h.z,small:true});}
 }
 for(const side of [-1,1]){
  box(g,.5,1.1,SUBSOIL.length,0x302936,side*(TRACK_HALF_WIDTH+.3),.4,SUBSOIL.start-SUBSOIL.length/2);
  // Volcanoes and their lava rivers sit outside the playable boundary.
  for(let j=0;j<8;j++){
   const x=side*(TRACK_HALF_WIDTH+5+(j%2)*2),z=SUBSOIL.start-13-j*30,h=4.5+j%3;
   const v=group(g,x,0,z);v.name='SubsoilVolcano';cyl(v,1.15,4.2,h,0x3b303c,0,h/2,0,9);cyl(v,1.17,.9,.18,0xff8f33,0,h+.02,0,16);torus(v,1.2,.23,0x704047,0,h,0).rotation.x=Math.PI/2;
   const river=box(v,.75,.05,4.4,0xff8328,-side*2,.02,1.6);river.rotation.y=side*.45;
   for(let k=0;k<3;k++){const b=ball(g,.16+k*.04,0xffbc50,x,h+1+k*.5,z);embers.push({mesh:b,x,y:h+.4,z,phase:j+k*.7});}
   const smoke=ball(g,.8,0x675361,x,h+2,z,1.1,.6,1.1);embers.push({mesh:smoke,x,y:h+2,z,phase:j+side,smoke:true});
  }
 }
 const eruption=group(root);eruption.name='SubsoilSurfaceEruption';eruption.visible=false;
 const opening=cyl(eruption,1.15,1.25,.04,0x302b36,0,.035,0,24);
 const ring=torus(eruption,1.2,.12,0xbca08b,0,.06,0);ring.rotation.x=Math.PI/2;
 const stones=Array.from({length:8},(_,i)=>{const a=i*Math.PI/4,s=ball(eruption,.18,0x8c746c,Math.sin(a),.1,Math.cos(a),1,.8,1);s.userData.angle=a;return s;});
 return{group:g,update(game,reduced){
  g.visible=game.inSubsoil();if(g.visible&&!reduced){for(const p of lava)p.material.emissiveIntensity=.6+Math.sin(game.time*1.5+p.position.z)*.12;for(const e of embers){const t=(game.time*(e.smoke?.35:e.small?.6:1)+e.phase)%1,phase=t<0?t+1:t;e.mesh.position.y=e.y+(e.small?Math.sin(game.time*2+e.phase)*.06:phase*(e.smoke?2.5:3));e.mesh.position.x=e.x+(e.small?0:Math.sin(phase*3+e.phase)*.4);}}
  eruption.visible=!!game.emerging;eruption.position.set(SUBSOIL.surface.x,0,SUBSOIL.surface.z);if(eruption.visible){const t=1-game.emerging/SUBSOIL.emergeSeconds;opening.scale.setScalar(1-t*.7);ring.scale.setScalar(1+t*.5);for(const s of stones){const r=1+t*.9;s.position.set(Math.sin(s.userData.angle)*r,reduced?.1:.1+Math.sin(t*Math.PI)*.7,Math.cos(s.userData.angle)*r);}}
 }};
}
