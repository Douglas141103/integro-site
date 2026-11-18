import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// These shapes use the same soft silhouette and palette as the shop illustrations.
// All GPU resources, including the combined meshes, belong to the world's ArtResources.
const teal=0x12ada9, mint=0x8bedb5, ink=0x25435b, violet=0x9452c5, gold=0xffbd3e,
  cream=0xffedc6, blue=0x338ed3, ice=0x9beafb, coral=0xf08341, wood=0xae7245, pink=0xef81ae;

function build(art,id) {
  const group=new T.Group();
  const part=(type,color,x,y,z,w,h,d)=>art.mesh(group,type,color,x,y,z,w,h,d,'trim');
  const ball=(c,x,y,z,w,h=w,d=w)=>part('ball',c,x,y,z,w,h,d);
  const block=(c,x,y,z,w,h,d)=>part('round',c,x,y,z,w,h,d);
  const disk=(c,x,y,z,r,h)=>part('cyl',c,x,y,z,r,h,r);
  const hoop=(c,x,y,z,w,h=w,d=w)=>part('ring',c,x,y,z,w,h,d);
  const rod=(c,start,end,r)=>{
    const a=new T.Vector3(...start),b=new T.Vector3(...end),v=b.clone().sub(a);
    const m=disk(c,(a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2,r,v.length());
    m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());
  };
  function custom(key,make,color,x=0,y=0,z=0) {
    const cacheKey='gear-shape:'+key;
    const geometry=art.geometries.get(cacheKey)||art.own(cacheKey,make(),'trim');
    const m=new T.Mesh(geometry,art.material(color,'trim'));
    m.position.set(x,y,z);group.add(m);return m;
  }
  function plate(key,points,color,x,y,z,scale=1) {
    const mesh=custom(key,()=>{
      const shape=new T.Shape(points.map(p=>new T.Vector2(...p)));
      return new T.ExtrudeGeometry(shape,{depth:.07,bevelEnabled:true,bevelSize:.018,bevelThickness:.018,bevelSegments:2});
    },color,x,y,z);
    mesh.scale.setScalar(scale);return mesh;
  }
  function stroke(key,points,color,radius=.045) {
    return custom(key,()=>new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),Math.max(12,points.length*3),radius,6,false),color);
  }
  const bolt=[[.06,.32],[-.24,-.02],[-.03,-.02],[-.14,-.32],[.24,.09],[.03,.09]];
  const star=Array.from({length:10},(_,i)=>{const a=Math.PI/2+i*Math.PI/5,r=i%2?.11:.24;return [r*Math.cos(a),r*Math.sin(a)]});
  function egg(color,x,y,z,r,spots) {
    ball(color,x,y,z,r,r*1.28,r);
    if(spots)for(const [dx,dy,dz] of [[-.46,.3,.85],[.34,-.29,.9],[.71,.5,.49],[-.45,-.48,-.76],[.12,.62,-.82]])
      ball(spots,x+dx*r,y+dy*r*1.28,z+dz*r,r*.13,r*.17,r*.105);
  }
  function fence() {
    block(0x79be64,0,.08,0,1.12,.16,.86);
    for(const x of [-.46,.46])for(const z of [-.32,.32])block(wood,x,.31,z,.13,.51,.13);
    for(const y of [.25,.43]){
      block(wood,0,y,-.32,.94,.09,.075);
      for(const x of [-.46,.46])block(wood,x,y,0,.08,.09,.68);
      block(0xc58a4d,-.24,y,.32,.42,.09,.08);
    }
  }
  switch(id){
    case 'boots':
      ball(cream,0,.18,0,.55,.13,.24);ball(teal,0,.31,0,.51,.19,.23);
      ball(teal,.19,.45,0,.27,.23,.21);ball(ink,.22,.61,0,.17,.04,.145);
      for(let n=0;n<3;n++)block(cream,-.17+n*.09,.46+n*.045,.015,.065,.045,.31);
      plate('bolt',bolt,gold,.01,.32,.225,.51);break;
    case 'energy':
      for(const [x,y,r] of [[-.29,.39,.20],[-.12,.52,.25],[.11,.42,.21]])ball(mint,x,y,0,r);
      for(let n=0;n<3;n++)stroke('gust'+n,[[-.04,.32+n*.095,0],[.22,.26+n*.12,.03],[.44,.3+n*.17,0],[.49,.38+n*.15,0]],teal,.035);
      break;
    case 'pen':fence();break;
    case 'incubator':
      disk(ink,0,.10,0,.49,.14);
      for(let i=0;i<3;i++){const m=hoop(i===0?coral:wood,0,.17+i*.085,0,.39+i*.021);m.rotation.x=Math.PI/2;}
      egg(cream,0,.55,0,.25,teal);break;
    case 'gloves':
      egg(cream,0,.48,0,.23,teal);
      for(const s of [-1,1]){
        const palm=ball(violet,s*.26,.37,.05,.16,.24,.17);palm.rotation.z=-s*.38;
        for(let n=0;n<3;n++)ball(violet,s*(.28+n*.04),.53,.12-n*.095,.075,.13,.075);
        ball(0xb97fe2,s*.2,.36,.18,.09,.13,.07);block(gold,s*.25,.18,0,.25,.13,.26);
      }break;
    case 'springs':
      for(const s of [-1,1]){
        const x=s*.27;disk(gold,x,.11,0,.226,.12);disk(gold,x,.72,0,.226,.11);
        const points=Array.from({length:33},(_,i)=>[x+.15*Math.cos(i*Math.PI/4),.18+.49*i/32,.15*Math.sin(i*Math.PI/4)]);
        stroke('spring'+s,points,teal,.045);
      }break;
    case 'hydration':
      disk(teal,0,.43,0,.255,.65);ball(teal,0,.72,0,.254,.16,.254);
      disk(ink,0,.85,0,.19,.12);disk(blue,0,.95,0,.09,.09);
      plate('drop',[[0,.19],[-.10,.02],[-.08,-.07],[0,-.11],[.08,-.07],[.10,.02]],cream,0,.45,.24);
      break;
    case 'coach':
      block(ink,0,.16,0,.88,.19,1.14);block(0x54647b,0,.27,0,.65,.055,1.02);
      for(const x of [-.38,.38]){
        rod(teal,[x,.19,-.36],[x,.88,-.46],.05);rod(teal,[x,.68,-.4],[x,.63,.01],.046);
        block(blue,x,.23,0,.085,.11,1.08);
      }
      block(blue,0,.89,-.43,.78,.25,.12);block(ice,0,.92,-.355,.41,.10,.024);break;
    case 'charm':
      for(const s of [-1,1])block(teal,s*.115,.73,0,.17,.43,.065).rotation.z=-s*.42;
      disk(gold,0,.38,0,.31,.10).rotation.x=Math.PI/2;
      hoop(0xf0a52c,0,.38,.06,.26);
      ball(cream,-.025,.38,.077,.101,.12,.034);ball(cream,.05,.47,.077,.075,.075,.034);
      part('cone',coral,.134,.46,.088,.042,.078,.038).rotation.z=-Math.PI/2;break;
    case 'turbo':
      ball(coral,0,.60,0,.22,.39,.22);part('cone',gold,0,.94,0,.15,.24,.15);
      ball(ice,0,.65,.19,.11,.11,.045);hoop(cream,0,.65,.211,.11);
      for(const s of [-1,1])block(coral,s*.215,.35,0,.12,.28,.1).rotation.z=-s*.45;
      part('cone',blue,0,.19,0,.13,.30,.13).rotation.z=Math.PI;break;
    case 'shield':
      plate('shield',[[-.29,.18],[0,.28],[.29,.18],[.24,-.08],[0,-.30],[-.24,-.08]],blue,0,.55,0);
      hoop(ice,0,.54,.02,.45);hoop(0x68c9ef,0,.54,.03,.45).rotation.y=1.12;break;
    case 'juice':
      block(coral,0,.42,0,.46,.60,.34);block(violet,0,.74,0,.44,.09,.32);
      rod(cream,[.13,.75,0],[.13,.93,0],.035);rod(violet,[.13,.93,0],[.26,.99,0],.035);
      plate('bolt',bolt,gold,0,.43,.17,.64);break;
    case 'bubble':
      egg(gold,0,.46,0,.23);
      for(let i=0;i<3;i++){const m=hoop(i===1?blue:ice,0,.50,0,.45);m.rotation.y=i*Math.PI/3;}
      break;
    case 'frost':
      for(let i=0;i<6;i++){
        const a=Math.PI*i/3,c=Math.cos(a),s=Math.sin(a);
        const point=(x,y)=>[x*c-y*s,.52+x*s+y*c,0];
        rod(ice,point(0,0),point(.44,0),.039);
        for(const sign of [-1,1])rod(ice,point(.23,0),point(.34,.105*sign),.026);
      }ball(blue,0,.52,0,.095);break;
    case 'doubleJump':
      for(const y of [.31,.66])plate('chevron',[[-.34,-.095],[0,.16],[.34,-.095],[.26,-.19],[0,.005],[-.26,-.19]],violet,0,y,0);
      break;
    case 'endurance':{
      const points=Array.from({length:33},(_,i)=>{const a=Math.PI*2*i/32;return [.5*Math.sin(a),.52+.24*Math.sin(a*2),.06*Math.cos(a)]});
      stroke('infinity',points,teal,.075);break;
    }
    case 'rush':
      plate('bolt',bolt,gold,.09,.53,0,1.38);
      for(let n=0;n<3;n++)block(coral,-.33,.36+n*.12,0,.26-n*.035,.048,.06);
      break;
    case 'trainingBoost':
      rod(ink,[-.44,.5,0],[.44,.5,0],.071);
      for(const s of [-1,1]){
        disk(gold,s*.29,.5,0,.235,.14).rotation.z=Math.PI/2;
        disk(coral,s*.412,.5,0,.185,.09).rotation.z=Math.PI/2;
      }break;
    case 'hatchBoost':
      egg(pink,0,.40,0,.31,cream);
      stroke('egg-crack',[[-.22,.49,.19],[-.12,.43,.28],[-.02,.54,.31],[.12,.42,.27],[.21,.49,.20]],0xab4f81,.023);
      plate('star',star,gold,.05,.88,.02,.86);break;
    case 'incomeBoost':
      for(let i=0;i<3;i++)disk(gold,-.07,.15+i*.12,0,.31,.10);
      for(const x of [-.30,0,.30])block(wood,x,.20,.30,.09,.38,.08);
      block(wood,0,.23,.30,.73,.09,.07);
      plate('up',[[-.08,-.16],[.08,-.16],[.08,.04],[.18,.04],[0,.22],[-.18,.04],[-.08,.04]],teal,.23,.58,.04);
      break;
    default:return null;
  }
  return group;
}

// Bake opaque toy parts into one vertex-coloured mesh so a live effect costs one draw call.
export function createGearModel(art,id){
  return bakedToyModel(art,'gear:'+id,()=>build(art,id));
}

export function bakedToyModel(art,name,buildParts){
  const key='egg-shop-toy:'+name;
  let geometry=art.geometries.get(key);
  if(!geometry){
    const group=buildParts();
    if(!group)return null;
    group.updateMatrixWorld(true);
    const parts=[];
    group.traverse(mesh=>{
      if(!mesh.isMesh)return;
      const geo=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();
      geo.applyMatrix4(mesh.matrixWorld);
      const rgb=mesh.material.color.toArray(),colors=new Float32Array(geo.attributes.position.count*3);
      for(let p=0;p<colors.length;p+=3)colors.set(rgb,p);
      geo.setAttribute('color',new T.BufferAttribute(colors,3));
      parts.push(geo);
    });
    geometry=mergeGeometries(parts);parts.forEach(part=>part.dispose());
    art.geometries.set(key,geometry);
  }
  const materialKey='egg-gear:paint';
  if(!art.materials.has(materialKey))art.materials.set(materialKey,new T.MeshStandardMaterial({vertexColors:true,roughness:.72,metalness:.06}));
  const group=new T.Group();
  group.name=name;
  group.add(new T.Mesh(geometry,art.materials.get(materialKey)));
  return group;
}

// Powers briefly display their emblem on activation. Boosts last up to 90 seconds;
// keeping the emblem visible for that entire time would obscure the runner.
export function createGearEffects(art,parent){
  const slots=['power','boost'];
  const channels=[...slots,'supply'].map(()=>({id:null,model:null,started:0}));
  const reusable=new Map();
  function reset(channel){
    channel.model?.removeFromParent();
    channel.model=null;
    channel.id=null;
  }
  function show(channel,id,time){
    reset(channel);
    if(!id)return;
    if(!reusable.has(id))reusable.set(id,createGearModel(art,id));
    channel.model=reusable.get(id);channel.id=id;channel.started=time;
    if(channel.model)parent.add(channel.model);
  }
  function consume(type,time){
    if(type==='shield'||type==='juice')show(channels[2],type,time);
  }
  function update(game,reducedMotion=false){
    slots.forEach((kind,i)=>{
      const id=game.raceMode?null:game.save.activeAbilities[kind]?.id||null;
      if(id!==channels[i].id)show(channels[i],id,game.time);
    });
    for(let index=0;index<channels.length;index++){
      const channel=channels[index],m=channel.model;
      if(!m)continue;
      const elapsed=game.time-channel.started;
      if(elapsed>1.6||elapsed<0||game.raceMode){
        m.removeFromParent();channel.model=null;continue;
      }
      m.position.set((index-1)*.45,1.78+(reducedMotion?0:elapsed*.23),0);
      m.rotation.y=reducedMotion?0:elapsed*1.8;
      const pulse=Math.min(1,(elapsed+.08)*6,Math.max(.08,(1.6-elapsed)*3));
      m.scale.setScalar(.49*(reducedMotion?1:pulse));
    }
  }
  return {update,consume,clear:()=>{channels.forEach(reset);reusable.clear();}};
}
