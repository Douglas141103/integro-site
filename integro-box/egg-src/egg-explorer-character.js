import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {RunnerCharacter} from '../rush-src/character.js';
import {smooth} from '../rush-src/motion.js';
import {profileGeometry} from '../rush-src/art.js';

const INK=0x202946, SOLE=0xffe9b5, TEAL=0x20a9aa, GOLD=0xf7a433;
const HAIR=0x392620, SKIN=0xedab78, IRIS=0x69442b, CAP=0x7847b7;
const sides=[['L',-1],['R',1]];
const tint=(color,brightness)=>new THREE.Color(color).multiplyScalar(brightness).getHex();

function seam(art,parent,id,points,color,radius=.009,tile='cloth'){
 const key='egg-explorer-'+id;
 let geometry=art.geometries.get(key);
 if(!geometry){
  const line=new THREE.CatmullRomCurve3(points.map(point=>new THREE.Vector3(...point)));
  geometry=art.own(key,new THREE.TubeGeometry(line,Math.max(6,(points.length-1)*3),radius,5,false),tile);
 }
 parent.add(new THREE.Mesh(geometry,art.material(color,tile)));
}

function fabric(art,parent,name,rings,color,tile='cloth',segments=24){
 const key='egg-explorer-'+name;
 let geometry=art.geometries.get(key);
 if(!geometry){
  geometry=art.own(key,profileGeometry(rings,segments),tile);
 }
 const mesh=new THREE.Mesh(geometry,art.material(color,tile));
 mesh.name=name;parent.add(mesh);
 return mesh;
}


function addCap(art,head){
 const cap=new THREE.Group();
 cap.position.set(0,.31,.005);cap.scale.set(1.045,1,1.055);cap.rotation.set(.035,-.035,.02);head.add(cap);
 fabric(art,cap,'cap-crown',[[0,.354,.320],[.042,.376,.339],[.14,.367,.333],[.23,.328,.304],[.30,.263,.240],[.36,.147,.129],[.387,0,0]],CAP);
 const brimKey='egg-explorer-bill';
 let geometry=art.geometries.get(brimKey);
 if(!geometry){
  const bill=new THREE.Shape();
  bill.moveTo(-.33,-.11);
  bill.bezierCurveTo(-.43,-.30,-.40,-.55,-.25,-.61);
  bill.bezierCurveTo(-.12,-.69,.12,-.69,.25,-.61);
  bill.bezierCurveTo(.40,-.55,.43,-.30,.33,-.11);
  bill.quadraticCurveTo(0,-.34,-.33,-.11);
  geometry=new THREE.ExtrudeGeometry(bill,{depth:.027,bevelThickness:.014,bevelSize:.014,bevelSegments:1,curveSegments:9});
  geometry.rotateX(Math.PI/2);
  const pos=geometry.attributes.position;
  for(let i=0;i<pos.count;i++)pos.setY(i,pos.getY(i)+.038-Math.abs(pos.getX(i))*.075-.035*Math.max(0,-pos.getZ(i)-.30));
  geometry.computeVertexNormals();
  geometry=art.own(brimKey,geometry,'cloth');
 }
 cap.add(new THREE.Mesh(geometry,art.material(0x57328e,'cloth')));
 for(const sign of [-1,1]){
  seam(art,cap,'cap-panel'+sign,[[sign*.31,.044,-.17],[sign*.276,.20,-.171],[sign*.19,.31,-.133],[0,.384,0]],0x8961bf,.004);
  seam(art,cap,'cap-band'+sign,[[sign*.365,.050,0],[sign*.31,.050,-.172],[sign*.19,.050,-.282],[0,.050,-.331]],0xf3dca9,.0045);
 }
 art.mesh(cap,'ball',0x683f9d,0,.389,0,.029,.014,.029);
 art.mesh(cap,'round',0x673c9c,0,.028,.328,.197,.036,.025);
}

function addPack(art,bone){
 const pack=new THREE.Group();
 pack.position.set(0,-.09,.25);bone.add(pack);
 const part=(kind,c,x,y,z,sx,sy,sz)=>art.mesh(pack,kind,c,x,y,z,sx,sy,sz,'cloth');
 const bag=part('round',GOLD,0,0,.057,.53,.54,.25);
 const pocket=part('round',0xffae34,0,-.084,.193,.424,.246,.117);
 // Softer corners than the small hardware pieces, but still flat canvas panels.
 for(const mesh of [bag,pocket]){
  const key='egg-explorer-rounded-bag';
  let geometry=art.geometries.get(key);
  if(!geometry)geometry=art.own(key,new RoundedBoxGeometry(1,1,1,2,.24),'cloth');
  mesh.geometry=geometry;
 }
 part('round',0x187f81,0,-.010,.251,.36,.022,.013);
 part('round',0x146969,-.14,-.044,.26,.025,.068,.014);
 seam(art,pack,'pack-handle',[[-.075,.25,.066],[-.064,.319,.066],[0,.337,.066],[.064,.319,.066],[.075,.25,.066]],0x1a8280,.019);
 for(const sign of [-1,1]){
  seam(art,pack,'pack-main-zip'+sign,[[sign*.253,-.145,.132],[sign*.258,.08,.129],[sign*.215,.214,.13],[sign*.109,.267,.13],[0,.27,.13]],0x258e87,.009);
  seam(art,pack,'pack-strap'+sign,[[sign*.177,.226,0],[sign*.210,.285,-.145],[sign*.214,.221,-.35],[sign*.245,.078,-.440],[sign*.250,-.067,-.39],[sign*.226,-.187,-.19],[sign*.194,-.196,-.018]],0xf3ab40,.038);
 }
}

// Each eye is a single convex surface. Colour bands meet at their edges, so
// the iris stays flush with the sclera when seen side-on under the cap.
function addEye(art,head,sign){
 const eye=new THREE.Group();
 eye.position.set(sign*.137,.151,-.244);
 eye.rotation.y=-sign*.405;
 head.add(eye);
 const surface=(x,y)=>-.078*(1-x*x-y*y)+.005;
 const vertex=(r,angle)=>{const x=r*Math.cos(angle),y=r*Math.sin(angle);return [.100*x,.107*y,surface(x,y)];};
 for(const [band,inner,outer,color] of [['pupil',0,.40,0x2f211c],['iris',.40,.70,IRIS],['white',.70,.94,0xfff7e6],['rim',.94,1,0x794d35]]){
  const key='egg-explorer-eye-'+band;
  let geometry=art.geometries.get(key);
  if(!geometry){
   const points=[],uv=[],indices=[],segments=24;
   for(const radius of [inner,(inner+outer)*.5,outer]){
    for(let i=0;i<=segments;i++){
     const angle=i*2*Math.PI/segments;
     points.push(...vertex(radius,angle));uv.push(.5+.45*radius*Math.cos(angle),.5+.45*radius*Math.sin(angle));
    }
   }
   for(let ring=0;ring<2;ring++)for(let j=0;j<segments;j++){
    const a=ring*(segments+1)+j,b=a+segments+1;
    indices.push(a,a+1,b,a+1,b+1,b);
   }
   geometry=new THREE.BufferGeometry();
   geometry.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
   geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
   geometry=art.own(key,geometry,'trim');
  }
  eye.add(new THREE.Mesh(geometry,art.material(color,'trim')));
 }
 const gleam=art.mesh(eye,'ball',0xfffcf1,-.018,.025,surface(-.18,.234)-.001,.012,.016,.003,'trim');
 gleam.rotation.x=.27;
}

function addFace(runner,art){
 const {head,neck,fringe}=runner.bones;
 runner.headMesh=runner.skinPart('face',[[1.54,.06,.075,-.015],[1.595,.154,.155,-.03],[1.68,.270,.236,-.030],[1.79,.332,.275,-.009],[1.93,.350,.307,0],[2.06,.315,.274,.012],[2.16,.226,.193,.02],[2.22,.095,.088,.02],[2.24,0,0,.02]],SKIN,'skin',()=>[['head',1]]);
 runner.part(neck,'cyl',SKIN,0,-.005,.006,.104,.19,.1,'skin');
 const sphere=(g,c,x,y,z,sx,sy,sz,tile)=>runner.part(g,'ball',c,x,y,z,sx,sy,sz,tile);
 for(const [,sign] of sides){
  sphere(head,SKIN,sign*.326,.079,0,.083,.091,.060,'skin');
  sphere(head,0xd08c67,sign*.368,.082,-.018,.022,.043,.029,'skin');
  addEye(art,head,sign);
  seam(art,head,'brow'+sign,[[sign*.229,.257,-.230],[sign*.176,.288,-.267],[sign*.12,.281,-.278],[sign*.077,.260,-.287]],HAIR,.017,'hair');
  const lock=sphere(head,HAIR,sign*.308,.167,.025,.052,.132,.168,'hair');
  lock.rotation.z=-sign*.11;
  sphere(head,HAIR,sign*.263,.128,.125,.067,.115,.131,'hair');
 }
 sphere(head,SKIN,0,.051,-.288,.074,.063,.072,'skin');
 // The open smile sits on the surface of the curved cheek and tapers at its corners.
 seam(art,head,'smile',[[-.115,-.033,-.255],[-.070,-.066,-.253],[0,-.075,-.248],[.070,-.064,-.252],[.115,-.031,-.256]],0x754633,.015,'skin');
 sphere(head,HAIR,0,.286,.070,.341,.265,.272,'hair');
 for(const sign of [-1,1]){
  const curl=sphere(head,HAIR,sign*.172,.105,.204,.106,.114,.077,'hair');
  curl.rotation.z=-sign*.31;
 }
 const bangs=[[-.222,.249,-.172,.063,.115,.075,-.30],[-.128,.278,-.217,.086,.120,.076,-.78],[.007,.294,-.219,.097,.119,.065,-.87],[.139,.293,-.193,.095,.100,.064,-.68]];
 for(const [x,y,z,rx,ry,rz,tilt] of bangs){const tuft=sphere(fringe,HAIR,x,y,z,rx,ry,rz,'hair');tuft.rotation.z=tilt;}
}

function addShoes(runner,foot,sign){
 const part=(kind,c,x,y,z,sx,sy,sz,tile='cloth')=>runner.part(foot,kind,c,x,y,z,sx,sy,sz,tile);
 fabric(runner.art,foot,'sneaker-sole',[[-.10,.142,.244,-.09],[-.083,.171,.277,-.09],[-.04,.181,.293,-.09],[.004,.174,.289,-.09],[.02,.152,.265,-.09]],SOLE,'sole');

 part('ball',INK,0,.049,-.093,.170,.124,.236);
 part('ball',TEAL,0,.08,.076,.174,.114,.12);
 part('ball',INK,0,.087,-.06,.153,.108,.149);
 part('ball',INK,0,.059,-.242,.166,.080,.119);
 const panel=part('round',0x25aaa9,sign*.157,.075,-.030,.025,.095,.185);
 panel.rotation.x=-.30;
 for(let j=0;j<2;j++){
  const z=-.176-j*.062,y=.174-j*.016;
  seam(runner.art,foot,'sneaker-lace'+j,[[-.109,y-.036,z],[-.068,y-.004,z-.010],[0,y+.008,z-.018],[.068,y-.004,z-.010],[.109,y-.036,z]],SOLE,.013,'trim');
 }
}

export class EggExplorerCharacter extends RunnerCharacter {
 buildAppearance(art,progress,{suitColor}){
  this.root.name='EggExplorerModel';
  const {chest,hood,back,cap}=this.bones;
  const body=[[.835,.253,.17],[.866,.286,.195],[.92,.297,.202],[1.04,.315,.218],[1.19,.337,.223],[1.33,.359,.212],[1.42,.309,.194],[1.49,.207,.14],[1.52,.120,.105]];
  const torsoWeights=v=>{
   if(v.y<1.12){const w=smooth(.91,1.12,v.y);return [['hips',1-w],['spine',w]];}
   const w=smooth(1.12,1.34,v.y);return [['spine',1-w],['chest',w]];
  };
  this.part(this.bones.hips,'ball',INK,0,-.086,0,.341,.16,.174,'denim');
  const torso=this.skinPart('jacket',body,suitColor,'cloth',torsoWeights);
  // Vertex colours give the cuffs a quiet knitted band without adding a draw call.
  const color=new THREE.Color(),rgb=[],p=torso.geometry.attributes.position;
  for(let i=0;i<p.count;i++){
   color.set(p.getY(i)<.92?tint(suitColor,.74):suitColor);rgb.push(color.r,color.g,color.b);
  }
  torso.geometry.setAttribute('color',new THREE.Float32BufferAttribute(rgb,3));
  torso.material=this.colourMaterial('cloth');
  const zipper=body.slice(0,-1).map(([y,,rz])=>[y,.008,.004,-rz-.003]);
  this.bindPart(profileGeometry(zipper,6),SOLE,'trim',torsoWeights).name='jacket-zipper';
  this.part(chest,'round',SOLE,0,.005,-.222,.048,.081,.023,'trim');
  for(const [side,sign] of sides){
   const sleeve=profileGeometry([[.80,.085,.08],[.85,.104,.097],[.90,.118,.116],[.97,.142,.125],[1.11,.152,.140],[1.25,.157,.148],[1.382,.146,.14],[1.424,.124,.117],[1.466,.079,.083],[1.485,0,0]],16);
   const ap=sleeve.attributes.position;
   for(let i=0;i<ap.count;i++)ap.setX(i,ap.getX(i)+sign*(.394-(ap.getY(i)-1.12)*.067));
   this.bindPart(sleeve,suitColor,'cloth',v=>{const w=1-smooth(1.0,1.19,v.y);return [['shoulder'+side,1-w],['elbow'+side,w]];});
   const hand=this.bones['hand'+side];
   this.part(hand,'cyl',tint(suitColor,.72),0,.029,0,.105,.081,.10);
   this.part(hand,'ball',SKIN,0,-.061,-.008,.094,.125,.091,'skin');
   this.part(hand,'ball',SKIN,-sign*.077,-.041,-.036,.049,.071,.049,'skin');
   const leg=profileGeometry([[.199,.094,.113],[.21,.116,.121],[.29,.133,.141],[.40,.151,.153],[.55,.155,.161],[.70,.178,.183],[.825,.176,.169],[.884,.153,.150],[.925,.115,.115],[.962,.045,.046],[.97,0,0]],16);
   const lp=leg.attributes.position;
   for(let i=0;i<lp.count;i++)lp.setX(i,lp.getX(i)+sign*.19);
   this.bindPart(leg,INK,'denim',v=>{const w=1-smooth(.34,.60,v.y);return [['thigh'+side,1-w],['knee'+side,w]];});
   this.part(this.bones['knee'+side],'cyl',0x1c233c,0,-.268,-.010,.126,.079,.133,'denim');
   addShoes(this,this.bones['foot'+side],sign);
   seam(art,chest,'pocket'+sign,[[sign*.235,-.208,-.159],[sign*.191,-.247,-.182],[sign*.139,-.267,-.201]],tint(suitColor,.67),.009);
  }
  this.part(hood,'ball',tint(suitColor,.72),0,.115,.069,.246,.137,.171);
  seam(art,hood,'hood-collar',[[-.060,.093,-.151],[-.207,.138,-.074],[-.196,.176,.102],[0,.152,.239],[.196,.176,.102],[.207,.138,-.074],[.060,.093,-.151]],suitColor,.057);
  addFace(this,art);
  addCap(art,cap);
  addPack(art,back);
 }
}
