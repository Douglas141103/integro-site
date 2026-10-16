import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export const TILES={cloth:0,denim:1,skin:2,hair:3,stone:4,wood:5,roof:6,plaster:7,sand:8,snow:9,basalt:10,cloud:11,gold:12,leaf:13,sole:14,trim:15};

// A single deterministic, painterly diffuse atlas is shared by the whole scene.
// Strokes, seams and masonry detail live in the texture, not extra geometry.
export function createPaintAtlas(){
 const size=512,tile=128,data=new Uint8Array(size*size*4);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const u=(x%tile)/127,v=(y%tile)/127,id=Math.floor(y/tile)*4+Math.floor(x/tile);
  const noise=(Math.sin(x*127.1+y*311.7)*43758.5453)%1,brush=Math.sin(u*15+Math.sin(v*11)*.8)*Math.sin(v*24);
  let a=.88+.045*brush+.025*noise+.06*(1-v);
  // Clothing needs broad, quiet colour fields. Strong procedural stripes made
  // small moving characters look corrugated and hid the sculpted silhouette.
  if(id===0)a=.95+.012*brush+.005*noise;
  if(id===1)a=.92+.012*Math.sin((u+v)*180)+.008*brush;
  if(id===2)a=.97+.025*Math.exp(-((u-.5)**2+(v-.35)**2)*9);
  if(id===3)a=.93+.025*Math.sin(u*14+v*2);
  if(id===4){const row=Math.floor(v*4),joint=Math.abs(((u*3+row*.5)%1)-.5);a=.84+.05*brush;if(v*4%1<.065||joint>.475)a-=.22;if(v*4%1>.09&&v*4%1<.12)a+=.09;}
  if(id===5){a=.79+.095*Math.sin(u*28+Math.sin(v*8)*1.4)+.025*Math.sin(u*80);if(u<.025||u>.975)a-=.19;}
  if(id===6){a=.85+.06*brush;const row=v*5%1;if(row<.07)a-=.23;const seam=(u*4+Math.floor(v*5)*.5)%1;if(seam<.05)a-=.12;}
  if(id===7)a=.9+.045*brush+.02*noise-.06*Math.exp(-v*9);
  if(id===8)a=.87+.055*brush+.025*noise+.025*Math.sin(v*48+u*10);
  if(id===9||id===11)a=.92+.05*brush+.02*noise;
  if(id===10){a=.71+.08*brush;const crack=Math.abs(Math.sin(u*14+Math.sin(v*9)));if(crack<.07)a-=.2;}
  if(id===12)a=.76+.2*Math.max(0,Math.sin((u+v)*5))+.04*noise;
  if(id===13){a=.79+.13*Math.sin(u*Math.PI);if(Math.abs(u-.5)<.025||Math.sin(v*40+Math.abs(u-.5)*30)>.94)a+=.12;}
  if(id===14)a=.9;if(id===15)a=.94-.12*Math.exp(-(((u-.5)/.1)**2));
  const val=Math.round(T.MathUtils.clamp(a,.35,1)*255),i=(y*size+x)*4;data[i]=data[i+1]=data[i+2]=val;data[i+3]=255;
 }
 const texture=new T.DataTexture(data,size,size);texture.colorSpace=T.SRGBColorSpace;texture.magFilter=T.LinearFilter;texture.minFilter=T.LinearMipmapLinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;return texture;
}
export function atlasUV(geometry,tile='cloth'){
 const idx=typeof tile==='number'?tile:TILES[tile]??0,uv=geometry.getAttribute('uv');
 if(uv)for(let i=0;i<uv.count;i++)uv.setXY(i,(idx%4+(2+T.MathUtils.clamp(uv.getX(i),0,1)*124)/128)/4,(Math.floor(idx/4)+(2+T.MathUtils.clamp(uv.getY(i),0,1)*124)/128)/4);
 return geometry;
}
export function profileGeometry(rings,segments=20){
 const pos=[],uv=[],idx=[];
 for(let j=0;j<rings.length;j++){const [y,rx,rz,zc=0]=rings[j];for(let i=0;i<=segments;i++){const a=i/segments*Math.PI*2;pos.push(Math.sin(a)*rx,y,Math.cos(a)*rz+zc);uv.push(i/segments,j/(rings.length-1));}}
 for(let j=0;j<rings.length-1;j++)for(let i=0;i<segments;i++){const a=j*(segments+1)+i,b=a+segments+1;idx.push(a,a+1,b,a+1,b+1,b);}
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();
 const normals=g.attributes.normal;for(let j=0;j<rings.length;j++){const a=j*(segments+1),b=a+segments;const n=new T.Vector3().fromBufferAttribute(normals,a).add(new T.Vector3().fromBufferAttribute(normals,b)).normalize();normals.setXYZ(a,n.x,n.y,n.z);normals.setXYZ(b,n.x,n.y,n.z);}return g;
}
// Shape-preserving interpolation rounds hand-authored silhouettes without the
// overshoot of a spline (important around eyelids, cuffs and narrow ankles).
export function sculptGeometry(rings,segments=32,steps=3){
 const smooth=[];for(let j=0;j<rings.length-1;j++)for(let i=0;i<steps;i++){
  const t=i/steps,s=t*t*(3-2*t),a=rings[j],b=rings[j+1];
  smooth.push([T.MathUtils.lerp(a[0],b[0],t),T.MathUtils.lerp(a[1],b[1],s),T.MathUtils.lerp(a[2],b[2],s),T.MathUtils.lerp(a[3]||0,b[3]||0,s)]);
 }smooth.push(rings.at(-1));return profileGeometry(smooth,segments);
}
export function createToonRamp(){
 const pixels=new Uint8Array([62,128,196,255]);
 const texture=new T.DataTexture(pixels,4,1,T.RedFormat);texture.minFilter=T.NearestFilter;texture.magFilter=T.NearestFilter;texture.generateMipmaps=false;texture.needsUpdate=true;return texture;
}
export class ArtResources {
 constructor({curved=false}={}){this.geometries=new Map();this.materials=new Map();this.atlas=createPaintAtlas();this.toonRamp=createToonRamp();this.curved=curved;}
 material(color,tile='cloth',metal=0){const key=color+':'+tile+':'+metal;if(!this.materials.has(key)){const m=new T.MeshToonMaterial({color,map:this.atlas,gradientMap:this.toonRamp});
  // Curvature is only in the distant view; collision space remains unchanged.
  if(this.curved){m.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`vec4 mvPosition=vec4(transformed,1.0);
#ifdef USE_INSTANCING
mvPosition=instanceMatrix*mvPosition;
#endif
vec4 rushWorld=modelMatrix*mvPosition;
float rushDistance=max(0.0,-rushWorld.z-28.0);
rushWorld.y-=rushDistance*rushDistance*0.0005;
mvPosition=viewMatrix*rushWorld;
gl_Position=projectionMatrix*mvPosition;`);};m.customProgramCacheKey=()=> 'rush-toon-curve-v2';}
  this.materials.set(key,m);}return this.materials.get(key);}
 outlineMaterial(){
  if(!this.contour){this.contour=new T.MeshBasicMaterial({color:0x163747,side:T.BackSide,depthWrite:false});
   this.contour.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * 0.012;');};this.contour.customProgramCacheKey=()=> 'rush-ink-contour-v1';}
  return this.contour;
 }
 geometry(kind,tile='cloth'){const key=kind+':'+tile;if(!this.geometries.has(key)){let g;
  if(kind==='round')g=new RoundedBoxGeometry(1,1,1,1,.13);
  else if(kind==='ball')g=new T.SphereGeometry(1,12,8);
  else if(kind==='disk')g=new T.CircleGeometry(1,16);
  else if(kind==='rock')g=new T.IcosahedronGeometry(1,1);
  else if(kind==='cyl')g=new T.CylinderGeometry(1,1,1,16);
  else if(kind==='cone')g=new T.ConeGeometry(1,1,12);
  else if(kind==='ring')g=new T.TorusGeometry(1,.18,6,24);
  else if(kind==='plane')g=new T.PlaneGeometry(1,1);
  else g=new T.BoxGeometry(1,1,1);
  this.geometries.set(key,atlasUV(g,tile));}return this.geometries.get(key);}
 mesh(parent,kind,color,x,y,z,sx=1,sy=sx,sz=sx,tile='cloth',metal=0){const m=new T.Mesh(this.geometry(kind,tile),this.material(color,tile,metal));m.position.set(x,y,z);m.scale.set(sx,sy,sz);parent.add(m);return m;}
 own(key,g,tile='cloth'){if(!this.geometries.has(key))this.geometries.set(key,atlasUV(g,tile));else g.dispose();return this.geometries.get(key);}
 dispose(){for(const g of this.geometries.values())g.dispose();for(const m of this.materials.values())m.dispose();this.contour?.dispose();this.atlas.dispose();this.toonRamp.dispose();}
}
export function createShadowTexture(){const n=64,a=new Uint8Array(n*n*4);for(let y=0;y<n;y++)for(let x=0;x<n;x++){const r=Math.hypot((x-31.5)/31.5,(y-31.5)/31.5),i=(y*n+x)*4;a[i]=15;a[i+1]=33;a[i+2]=50;a[i+3]=Math.round(Math.max(0,1-r*r)**2*95);}const t=new T.DataTexture(a,n,n);t.needsUpdate=true;return t;}
