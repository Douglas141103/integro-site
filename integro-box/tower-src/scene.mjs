import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {PIECES,COLORS,THEMES,dimensions} from './rules.mjs';
const gradient=new T.DataTexture(new Uint8Array([65,130,205,255]),4,1,T.RedFormat);gradient.needsUpdate=true;gradient.minFilter=gradient.magFilter=T.NearestFilter;
export class TowerScene{
 constructor(canvas){this.canvas=canvas;this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1;this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.scene=new T.Scene();this.camera=new T.OrthographicCamera(-6,6,6,-6,.1,100);this.ray=new T.Raycaster();this.plane=new T.Plane(new T.Vector3(0,0,1),0);this.zoom=1;this.theme=THEMES[0];this.meshes=[];this.assets=new Set();this.scene.add(new T.HemisphereLight(0xffffff,0x64748b,1.15));const light=new T.DirectionalLight(0xfff1d6,1.65);light.position.set(-9,18,12);light.castShadow=true;light.shadow.mapSize.set(1024,1024);Object.assign(light.shadow.camera,{left:-12,right:12,top:18,bottom:-5});light.shadow.bias=-.001;this.scene.add(light);const fill=new T.DirectionalLight(0xa7e8ff,.35);fill.position.set(7,3,-5);this.scene.add(fill);
 this.stage=new T.Group();this.building=new T.Group();this.marks=new T.Group();this.scene.add(this.stage,this.building,this.marks);this.ghost=null;this.clouds=[];this.time=0;this.makeClouds();this.resize();}
 material(color,extra={}){const m=new T.MeshToonMaterial({color,gradientMap:gradient,...extra});this.assets.add(m);return m;}
 mesh(geo,mat,parent,x=0,y=0,z=0){this.assets.add(geo);const m=new T.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 rounded(w,h,d,r=.08){return new RoundedBoxGeometry(w,h,d,2,r);}
 clearGroup(group){while(group.children.length){const child=group.children[0];group.remove(child);child.traverse(m=>{if(m.geometry&&this.assets.has(m.geometry)){m.geometry.dispose();this.assets.delete(m.geometry);}if(m.material){const mats=Array.isArray(m.material)?m.material:[m.material];for(const material of mats){if(this.assets.has(material)){material.dispose();this.assets.delete(material);}}}});}}
 setLevel(level,theme){this.level=level;this.theme=theme;this.clearGroup(this.stage);this.clearGroup(this.marks);this.canvas.style.background=`linear-gradient(${theme.sky},${theme.id==='space'?'#555b85':'#d9edf1'})`;
  for(const f of level.floor){const dirt=this.mesh(this.rounded(f.w,1.25,2.8,.2),this.material(theme.rock),this.stage,f.x,-.78,-.5);this.mesh(this.rounded(f.w+.08,.25,2.9,.1),this.material(theme.ground),this.stage,f.x,-.12,-.5);for(let k=0;k<Math.floor(f.w);k++){this.mesh(new T.DodecahedronGeometry(.13,0),this.material(k%2?'#fff0b5':'#f1b4be'),this.stage,f.x-f.w/2+.5+k,.04,-1.7);}}
  const grid=new T.BufferGeometry(),p=[];for(let x=-4.5;x<=4.5;x++){p.push(x,0,-.52,x,16,-.52);}for(let y=0;y<=16;y++){p.push(-5,y,-.52,5,y,-.52);}grid.setAttribute('position',new T.Float32BufferAttribute(p,3));const gm=new T.LineBasicMaterial({color:theme.id==='space'?0xc6c6ff:0x518292,transparent:true,opacity:.11});this.assets.add(grid);this.assets.add(gm);this.stage.add(new T.LineSegments(grid,gm));
  for(const target of level.targets){const g=new T.Group();g.position.set(target.x,target.y,.56);const ring=this.mesh(new T.TorusGeometry(.24,.035,6,24),this.material(target.color===undefined?'#fff4b3':COLORS[target.color],{emissive:target.color===undefined?'#5e460d':COLORS[target.color],emissiveIntensity:.12}),g);ring.castShadow=false;this.marks.add(g);if(target.color!==undefined){const symbol=this.mesh(new T.CircleGeometry(.07,target.color===0?16:target.color===1?4:3),this.material(COLORS[target.color]),g);symbol.position.z=.02;}}
  if(level.height){const goal=new T.Group();goal.position.set(0,level.height+.38,.4);const shape=new T.Shape();for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,r=i%2?.17:.35;if(i===0)shape.moveTo(Math.cos(a)*r,Math.sin(a)*r);else shape.lineTo(Math.cos(a)*r,Math.sin(a)*r);}shape.closePath();this.mesh(new T.ExtrudeGeometry(shape,{depth:.12,bevelEnabled:true,bevelThickness:.025,bevelSize:.025,bevelSegments:1,steps:1}),this.material('#ffcf5e',{emissive:0x795406,emissiveIntensity:.2}),goal);this.marks.add(goal);const lineGeo=new T.BufferGeometry().setFromPoints([new T.Vector3(-5,level.height,-.5),new T.Vector3(5,level.height,-.5)]),lineMat=new T.LineDashedMaterial({color:0xcaa04a,dashSize:.15,gapSize:.12,transparent:true,opacity:.6});const line=new T.Line(lineGeo,lineMat);line.computeLineDistances();this.marks.add(line);this.assets.add(lineGeo);this.assets.add(lineMat);}
  this.zoom=1;this.resize();}
 makePiece(p,ghost=false){
  const spec=PIECES[p.type],g=new T.Group(),color=COLORS[p.color||0];
  const surface={transparent:ghost,opacity:ghost?.84:1,depthWrite:!ghost};
  const dark=new T.Color(color).multiplyScalar(.36),light=new T.Color(color).lerp(new T.Color('#fff6d9'),.48);
  let geom;
  if(p.type==='wedge'){const shape=new T.Shape();shape.moveTo(-1,-.5);shape.lineTo(1,-.5);shape.lineTo(1,.5);shape.closePath();geom=new T.ExtrudeGeometry(shape,{depth:.8,bevelEnabled:true,bevelThickness:.025,bevelSize:.025,bevelSegments:2});geom.translate(0,0,-.4);}
  else geom=this.rounded(spec.w-.035,spec.h-.035,.84,.065);
  // A slightly expanded back-face shell gives the rounded pieces a clean cartoon silhouette.
  const outline=new T.MeshBasicMaterial({color:dark,side:T.BackSide,...surface});this.assets.add(outline);
  const shell=this.mesh(geom,outline,g);shell.scale.set(1+.035/spec.w,1+.035/spec.h,1.045);shell.castShadow=false;shell.receiveShadow=false;
  const body=this.mesh(geom,this.material(color,surface),g);body.castShadow=!ghost;
  const trim=this.material(dark,surface),shine=this.material(light,surface),cream=this.material('#fff1bc',surface);
  const detail=(geo,mat,x,y,z=.435)=>{const m=this.mesh(geo,mat,g,x,y,z);m.castShadow=false;return m;};
  if(p.type!=='wedge'){
   // Recessed face, top bevel and masonry joints stay inside the collision envelope.
   detail(this.rounded(spec.w-.19,spec.h-.19,.035,.045),trim,0,0);
   detail(this.rounded(spec.w-.25,spec.h-.25,.035,.04),this.material(new T.Color(color).multiplyScalar(.94),surface),0,-.012,.46);
   detail(this.rounded(spec.w-.29,.055,.02,.012),shine,0,spec.h/2-.15,.486);
   for(let row=1;row<spec.h;row++)detail(new T.BoxGeometry(spec.w-.26,.032,.015),trim,0,-spec.h/2+row,.486);
   for(let col=1;col<spec.w;col++)detail(new T.BoxGeometry(.032,spec.h-.26,.015),trim,-spec.w/2+col,0,.486);
   for(let row=0;row<spec.h;row++)for(let col=0;col<spec.w;col++){
    const x=col-(spec.w-1)/2,y=row-(spec.h-1)/2;
    detail(this.rounded(.24,.28,.035,.035),trim,x,y-.03,.49);
    const symbol=detail(new T.CircleGeometry(.075,(p.color||0)===0?16:p.color===1?4:3),cream,x,y-.02,.512);if(p.color===2)symbol.rotation.z=Math.PI/2;
   }
   for(const side of [-1,1])detail(new T.SphereGeometry(.037,6,4),cream,side*(spec.w/2-.19),-spec.h/2+.18,.49);
  }else{
   const lineGeo=new T.BufferGeometry().setFromPoints([new T.Vector3(-.72,-.37,.438),new T.Vector3(.86,-.37,.438),new T.Vector3(.86,.38,.438),new T.Vector3(-.72,-.37,.438)]);
   const lineMat=new T.LineBasicMaterial({color:dark,...surface});this.assets.add(lineGeo);this.assets.add(lineMat);g.add(new T.Line(lineGeo,lineMat));
   detail(new T.CircleGeometry(.08,(p.color||0)===0?16:p.color===1?4:3),cream,.55,-.19,.445);
  }
  g.userData.preview=ghost;g.position.set(p.x,p.y,0);g.rotation.z=(p.r||0)*Math.PI/2;return g;
 }
 setPieces(items){this.clearGroup(this.building);this.meshes=items.map(p=>{const g=this.makePiece(p);this.building.add(g);return g;});this.hideGhost();}
 showGhost(piece,ok){this.hideGhost();this.ghost=this.makePiece(piece,true);if(!ok)this.ghost.traverse(o=>{if(o.material)o.material.color.set('#e65d69');});this.scene.add(this.ghost);}
 hideGhost(){if(this.ghost){const wrap=new T.Group();this.scene.remove(this.ghost);wrap.add(this.ghost);this.clearGroup(wrap);this.ghost=null;}}
 updateBodies(snapshot){snapshot.forEach((p,i)=>{const g=this.meshes[i];if(g){g.position.set(p.x,p.y,0);g.rotation.z=p.angle;}});}
 hit(clientX,clientY){const r=this.canvas.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2((clientX-r.left)/r.width*2-1,-(clientY-r.top)/r.height*2+1),this.camera);const p=new T.Vector3();return this.ray.ray.intersectPlane(this.plane,p)?{x:p.x,y:p.y}:null;}
 resize(){const w=this.canvas.clientWidth||600,h=this.canvas.clientHeight||500;this.renderer.setSize(w,h,false);const aspect=w/h,wide=this.level?.id===0||this.level?.id>=9?11.6:8,needed=Math.max(7,(this.level?.height||8)+2.7),vh=Math.max(needed,wide/aspect)/this.zoom;this.camera.left=-vh*aspect/2;this.camera.right=vh*aspect/2;this.camera.top=vh/2;this.camera.bottom=-vh/2;const cy=vh*.5-.9;this.camera.position.set(2.6,cy+2.6,28);this.camera.lookAt(0,cy,0);this.camera.updateProjectionMatrix();}
 setZoom(delta){this.zoom=T.MathUtils.clamp(this.zoom+delta,.65,1.65);this.resize();}
 makeClouds(){for(let i=0;i<13;i++){const g=new T.Group(),mat=this.material('#ffffff',{transparent:true,opacity:.52});for(let j=0;j<3;j++){const cloud=this.mesh(new T.SphereGeometry(1,10,7),mat,g,j*.7,Math.sin(j)*.25,0);cloud.scale.set(1,.42,.55);cloud.castShadow=false;cloud.receiveShadow=false;};g.position.set((i%5-2)*6,Math.floor(i/5)*5+2,-10-Math.random()*3);g.scale.setScalar(.7+Math.random()*.7);this.scene.add(g);this.clouds.push(g);}}
 render(dt){this.time+=dt;for(let i=0;i<this.clouds.length;i++)this.clouds[i].position.x+=Math.sin(this.time*.1+i)*dt*.04;this.renderer.render(this.scene,this.camera);}
 dispose(){for(const a of this.assets)a.dispose();this.assets.clear();this.renderer.dispose();}
}
