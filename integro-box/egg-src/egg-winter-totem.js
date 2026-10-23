import * as T from 'three';

// Custom angular numerals follow the supplied sketch instead of a system font.
export function createWinterYear(){
 const two=[[0,1],[1,1],[1,.75],[.37,.25],[1,.25],[1,0],[0,0],[0,.24],[.65,.76],[0,.76]];
 const zero=[[0,0],[1,0],[1,1],[0,1]],six=[[0,0],[1,0],[1,.59],[.39,.59],[.39,1],[0,1]];
 const definitions=[{outer:two},{outer:zero,hole:[[.32,.23],[.32,.77],[.68,.77],[.68,.23]]},{outer:two},{outer:six,hole:[[.32,.19],[.32,.39],[.68,.39],[.68,.19]]}];
 const shapes=definitions.map((d,i)=>{
  const points=p=>p.map(([x,y])=>new T.Vector2(-1.19+i*.635+x*.475,y*.86));
  const shape=new T.Shape(points(d.outer));if(d.hole)shape.holes.push(new T.Path(points(d.hole)));return shape;
 });
 const group=new T.Group();group.name='WinterYear2026';group.userData.text='2026';
 const outlineGeo=new T.ExtrudeGeometry(shapes,{depth:.055,bevelEnabled:true,bevelSize:.035,bevelThickness:.022,bevelSegments:1,curveSegments:1,steps:1});
 const outline=new T.Mesh(outlineGeo,new T.MeshBasicMaterial({color:0x082f50,toneMapped:false,fog:false}));outline.name='YearOutline';group.add(outline);
 const face=new T.Mesh(new T.ShapeGeometry(shapes),new T.MeshBasicMaterial({color:0xffffff,toneMapped:false,fog:false}));face.position.z=.079;face.name='YearFace';group.add(face);
 return group;
}

// Sculpted ice plaque traced from the event's hand-drawn reference.
// Rings and inscriptions are mounted on both faces, so they read from the track and the corral.
export function createWinterTotem(){
 const g=new T.Group();g.name='Winter2026Totem';
 const shape=new T.Shape();
 shape.moveTo(-1.42,.17);shape.quadraticCurveTo(-1.52,.9,-1.14,1.92);
 shape.lineTo(-.59,2.55);shape.quadraticCurveTo(-.91,3.4,-1.0,4.08);
 shape.quadraticCurveTo(-.93,4.33,-.35,4.46);shape.lineTo(.83,4.82);
 shape.quadraticCurveTo(1.08,4.25,.91,2.92);shape.lineTo(1.17,1.92);
 shape.quadraticCurveTo(1.51,1.22,1.42,.17);shape.closePath();
 const bodyGeo=new T.ExtrudeGeometry(shape,{depth:.32,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.075,bevelThickness:.065,curveSegments:10});bodyGeo.translate(0,0,-.16);
 const faceMat=new T.MeshStandardMaterial({color:0xc6edfa,roughness:.3,metalness:.08});
 const edgeMat=new T.MeshStandardMaterial({color:0x559ec9,roughness:.22,metalness:.16});
 const body=new T.Mesh(bodyGeo,[faceMat,edgeMat]);body.name='SculptedIcePlaque';body.castShadow=true;body.receiveShadow=true;g.add(body);
 const foot=new T.Mesh(new T.BoxGeometry(3.08,.18,.85),edgeMat);foot.position.y=.09;foot.receiveShadow=true;g.add(foot);
 const red=new T.MeshStandardMaterial({color:0xe52c42,roughness:.23,metalness:.12});
 const rings=[[-.30,2.53,.065],[-.44,2.68,.11],[-.57,2.98,.18],[-.35,3.43,.25],[.15,3.49,.26],[.45,3.08,.24],[.54,2.57,.30],[.35,2.03,.32],[-.09,1.70,.27],[-.49,1.57,.23]];
 const year=createWinterYear();
 const cv=document.createElement('canvas');cv.width=1024;cv.height=192;const ctx=cv.getContext('2d');
 ctx.fillStyle='#082f50';ctx.fillRect(0,0,1024,192);ctx.fillStyle='#ffffff';ctx.font='900 138px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('INVERNO',512,102,960);
 const texture=new T.CanvasTexture(cv);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=8;
 const textMat=new T.MeshBasicMaterial({map:texture,toneMapped:false,fog:false});
 const textGeo=new T.PlaneGeometry(2.42,.45);
 const yearPanelGeo=new T.BoxGeometry(2.65,1.04,.06),yearPanelMat=new T.MeshBasicMaterial({color:0xdaf4ff,toneMapped:false,fog:false});
 const ringGeos=rings.map(([, , r])=>new T.TorusGeometry(r,Math.min(.036,r*.23),8,32));
 for(const side of [-1,1]){
  const face=new T.Group();face.name=side<0?'TotemTrackFace':'TotemCorralFace';face.rotation.y=side<0?Math.PI:0;g.add(face);
  rings.forEach(([x,y],i)=>{const ring=new T.Mesh(ringGeos[i],red);ring.name='RedCircle'+i;ring.position.set(x,y+.5,.255+(i%2)*.01);ring.castShadow=true;face.add(ring);});
  const inscription=new T.Group();inscription.name='TotemInscription';inscription.userData.text='2026 INVERNO';face.add(inscription);
  const panel=new T.Mesh(yearPanelGeo,yearPanelMat);panel.position.set(0,1.24,.27);inscription.add(panel);
  const numerals=year.clone(true);numerals.position.set(0,.81,.325);inscription.add(numerals);
  const text=new T.Mesh(textGeo,textMat);text.name='WinterWord';text.position.set(0,.48,.31);inscription.add(text);
 }
 const snow=new T.MeshStandardMaterial({color:0xf7fcff,roughness:.95});
 const capPath=new T.CatmullRomCurve3([new T.Vector3(-.96,4.21,0),new T.Vector3(-.53,4.44,0),new T.Vector3(.15,4.63,0),new T.Vector3(.84,4.84,0)]);
 const cap=new T.Mesh(new T.TubeGeometry(capPath,18,.10,6,false),snow);cap.scale.z=2.4;cap.castShadow=true;g.add(cap);
 return g;
}

// Set dressing stays beyond the running rails and alternates sides along the route.
export function winterDisplayLayout(index){
 const side=index%2?-1:1,z=-index*48;
 return {totems:[{x:side*7.6,z:z-8},{x:-side*7.6,z:z-36}],banner:{x:-side*9,z:z-21}};
}
export function winterDisplayArea(index,x,z){
 const {totems,banner}=winterDisplayLayout(index);
 return [...totems,banner].some(p=>Math.abs(x-p.x)<4.5&&Math.abs(z-p.z)<5.5);
}
export function createWinterBanner(){
 const g=new T.Group();g.name='Winter2026Banner';
 const poleMat=new T.MeshStandardMaterial({color:0x609fbd,roughness:.5});
 const poleGeo=new T.CylinderGeometry(.055,.075,3.2,8),capGeo=new T.SphereGeometry(.105,8,6);
 for(const x of [-2.05,2.05]){
  const pole=new T.Mesh(poleGeo,poleMat);pole.position.set(x,1.6,0);pole.castShadow=true;g.add(pole);
  const cap=new T.Mesh(capGeo,poleMat);cap.position.set(x,3.24,0);g.add(cap);
 }
 const cv=document.createElement('canvas');cv.width=768;cv.height=192;const c=cv.getContext('2d');
 c.fillStyle='#edfaff';c.fillRect(0,0,768,192);c.fillStyle='#196385';c.fillRect(0,14,768,164);
 c.fillStyle='#e52c42';c.fillRect(0,14,22,164);c.fillRect(746,14,22,164);
 c.fillStyle='#ffffff';c.font='bold 65px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText('INVERNO 2026',384,97,660);
 const texture=new T.CanvasTexture(cv);texture.colorSpace=T.SRGBColorSpace;
 const material=new T.MeshBasicMaterial({map:texture,toneMapped:false});
 const geo=new T.PlaneGeometry(4,.99);
 for(const side of [-1,1]){const face=new T.Mesh(geo,material);face.position.set(0,2.56,side*.018);face.rotation.y=side<0?Math.PI:0;g.add(face);}
 return g;
}
