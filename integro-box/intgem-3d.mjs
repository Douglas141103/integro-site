// Shared toon cosmetics. Rebuild only changed slots, never on every frame.
function release(group){const gs=new Set(),ms=new Set();group.traverse(o=>{if(o.isMesh){gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])ms.add(m);}});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());group.clear();}
export function createIntGem3D(T,parent){
 const root=new T.Group();root.name='IntGem';parent.add(root);
 const companion=new T.Group(),aura=new T.Group();root.add(companion,aura);
 let petKey='',auraKey='',wings=[];root.visible=false;
 function petModel(item){
  release(companion);wings=[];if(!item)return;
  const main=new T.MeshToonMaterial({color:item.color}),trim=new T.MeshToonMaterial({color:item.secondary}),dark=new T.MeshBasicMaterial({color:0x173b50});
  const mesh=(geo,mat,x=0,y=0,z=0,sx=1,sy=1,sz=1)=>{const m=new T.Mesh(geo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);companion.add(m);return m;};
  const ball=(r,x,y,z,mat=main,sx=1,sy=1,sz=1)=>mesh(new T.SphereGeometry(r,8,6),mat,x,y,z,sx,sy,sz);
  const cone=(r,h,x,y,z,mat=trim)=>mesh(new T.ConeGeometry(r,h,5),mat,x,y,z);
  const box=(w,h,d,x,y,z,mat=main)=>mesh(new T.BoxGeometry(w,h,d),mat,x,y,z);
  const type=item.model||'gem';companion.userData.model=type;
  if(type==='gem'){mesh(new T.OctahedronGeometry(.29,0),main,0,0,0,1,1.2,1);cone(.21,.16,0,.33,0);}
  else if(type==='robot'){box(.43,.36,.32,0,.12,0);box(.29,.28,.25,0,-.2,0,trim);cone(.05,.16,0,.42,0);ball(.065,0,.5,0,trim);for(const x of[-.31,.31])box(.1,.24,.13,x,-.1,0,trim);}
  else{
   ball(.28,0,-.03,0,main,1,type==='axolotl'?.7:1.15,.8);
   if(type==='fox'||type==='dragon'){for(const x of[-.18,.18])cone(.1,.23,x,.3,0);ball(.13,0,-.01,.22,trim,1,.7,1);const tail=cone(.15,.55,.34,-.15,-.08);tail.rotation.z=-1;}
   if(type==='axolotl')for(const side of[-1,1])for(let j=0;j<3;j++){const fin=cone(.07,.23,side*.31,(j-1)*.15,0);fin.rotation.z=-side*(.6+j*.4);}
   if(type==='owl'){for(const x of[-.12,.12])ball(.12,x,.08,.19,trim,1,1,.4);cone(.06,.13,0,-.03,.25).rotation.x=Math.PI/2;}
   if(type==='chick'){cone(.16,.15,0,.3,0);cone(.075,.16,0,-.03,.25,trim).rotation.x=Math.PI/2;for(const x of[-.11,.11])ball(.075,x,-.33,.06,trim,1,.5,1.4);}
   if(['owl','chick','dragon'].includes(type))for(const side of[-1,1]){const w=mesh(new T.OctahedronGeometry(.2,0),trim,side*.3,-.03,0,.6,1.4,.3);w.userData.side=side;wings.push(w);}
  }
  for(const x of[-.09,.09])ball(.032,x,type==='robot'?.14:.04,.245,dark);
 }
 function auraModel(item){
  release(aura);if(!item)return;
  const main=new T.MeshBasicMaterial({color:item.color,transparent:true,opacity:.72,depthWrite:false}),accent=new T.MeshBasicMaterial({color:item.secondary,transparent:true,opacity:.85,depthWrite:false});
  const mesh=(geo,mat,x=0,y=.075,z=0)=>{const m=new T.Mesh(geo,mat);m.position.set(x,y,z);aura.add(m);return m;};
  const ring=(r,mat=main)=>{const m=mesh(new T.TorusGeometry(r,.024,4,32),mat);m.rotation.x=Math.PI/2;return m;};
  const type=item.model||'stars';aura.userData.model=type;
  if(type==='tracks'){for(const x of[-.48,.48])mesh(new T.BoxGeometry(.045,.025,1.5),main,x);for(let i=0;i<7;i++)mesh(new T.BoxGeometry(1.05,.02,.045),accent,0,.06,(i-3)*.23);return;}
  ring(.7);if(type==='orbit'){ring(.52,accent).rotation.x=1;ring(.84).rotation.x=2;}
  for(let j=0;j<6;j++){
   const a=j*Math.PI/3,x=Math.cos(a)*.7,z=Math.sin(a)*.7;
   const geo=type==='bubbles'?new T.SphereGeometry(.075,8,6):type==='fire'?new T.ConeGeometry(.06,.23,4):new T.OctahedronGeometry(.075,0);
   const m=mesh(geo,j%2?main:accent,x,.13,z);
   if(type==='petals'){m.scale.set(1, .4, 2.7);m.rotation.y=-a;}
   if(type==='orbit')m.scale.setScalar(j%2?1:1.5);
  }
 }
 return {root,update(equipment={},time=0,reducedMotion=false){
  const {aura:item,companion:pet}=equipment||{};
  if((pet?.id||'')!==petKey){petKey=pet?.id||'';petModel(pet);}
  if((item?.id||'')!==auraKey){auraKey=item?.id||'';auraModel(item);}
  root.visible=!!(item||pet);companion.visible=!!pet;aura.visible=!!item;
  const t=reducedMotion?0:time;companion.position.set(.86,1.25+Math.sin(t*2.4)*.075,.12);companion.rotation.y=Math.sin(t*.8)*.3;
  for(const w of wings)w.rotation.z=w.userData.side*(.15+Math.sin(t*5)*.25);
  aura.rotation.y=item?.model==='tracks'?0:t*.45;
 },dispose(){release(companion);release(aura);root.removeFromParent();}};
}
