// Offline vector projection of the actual meshes for catalog artwork and geometry review.
// This does not substitute for GPU/browser or real-device validation.
import {JSDOM} from 'jsdom';
import * as T from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {writeFile,mkdir} from 'node:fs/promises';
import {BlueRun} from './engine.mjs';
import {createWorld} from './scene.mjs';
const dom=new JSDOM('<!doctype html>');globalThis.document=dom.window.document;
const destination=process.argv[2];if(!destination)throw Error('Provide an absolute output directory');await mkdir(destination,{recursive:true});
function bake(source){
 source.updateMatrixWorld(true);const out=new T.Scene();out.background=source.background;
 source.traverse(o=>{
  if(o.isLight){out.add(o.isHemisphereLight?new T.AmbientLight(0xe6f4db,.9):o.clone());return;}if(!o.isMesh||o.material.userData.outline)return;
  for(let p=o;p;p=p.parent)if(!p.visible)return;
  const g=o.geometry.clone(),p=g.attributes.position,v=new T.Vector3();
  if(o.isSkinnedMesh){for(let i=0;i<p.count;i++){o.getVertexPosition(i,v);p.setXYZ(i,v.x,v.y,v.z);}g.computeVertexNormals();}
  if(o.material.userData.outline){const n=g.attributes.normal;for(let i=0;i<p.count;i++)p.setXYZ(i,p.getX(i)+n.getX(i)*.008,p.getY(i)+n.getY(i)*.008,p.getZ(i)+n.getZ(i)*.008);}
  const m=o.material.isMeshBasicMaterial?new T.MeshBasicMaterial({color:o.material.color,side:o.material.side,transparent:o.material.transparent,opacity:o.material.opacity}):new T.MeshLambertMaterial({color:o.material.color,side:o.material.side});
  const mesh=new T.Mesh(g,m);mesh.applyMatrix4(o.matrixWorld);out.add(mesh);
 });return out;
}
async function render(name,{level=0,x=3,y=0,width=1200,height=800,cover=false,pose={}}={}){
 const run=new BlueRun(level);Object.assign(run.player,{x,y,vx:cover?0:3,facing:cover?.5:1,...pose});run.time=.65;
 const world=createWorld(run,{document:null});world.update(run,1);
 const scene=bake(world.scene),camera=new T.OrthographicCamera(),renderer=new SVGRenderer();renderer.setSize(width,height);renderer.setPrecision(2);
 const viewWidth=cover?3.5:21,viewHeight=viewWidth*height/width;camera.left=-viewWidth/2;camera.right=viewWidth/2;camera.top=viewHeight/2;camera.bottom=-viewHeight/2;camera.near=.1;camera.far=100;
 const cx=cover?x+.12:x+4,cy=cover?y+1.45:y+1.4;camera.position.set(cx,cy+(cover?1.7:4),cover?14:18);camera.lookAt(cx,cy,0);camera.updateProjectionMatrix();renderer.render(scene,camera);
 let svg=renderer.domElement.outerHTML.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ');
 svg=svg.replace(/(<svg[^>]*>)/,`$1<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" fill="#c3e8e9"/>`);
 if(cover){svg=svg.replace('</svg>',`<rect x="${-width/2}" y="${height/2-125}" width="${width}" height="125" fill="#244e54" opacity=".85"/><text x="0" y="${height/2-64}" text-anchor="middle" fill="#fcf8db" font-family="DejaVu Sans,sans-serif" font-weight="bold" font-size="51" letter-spacing="-2">BLUE WORLD</text><text x="0" y="${height/2-31}" text-anchor="middle" fill="#c6e7c7" font-family="DejaVu Sans,sans-serif" font-size="13" letter-spacing="3">CAMPOS DO ORVALHO</text></svg>`);}
 await writeFile(`${destination}/${name}.svg`,svg);world.dispose();scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});console.log(name);
}
await render('cover',{cover:true,width:1000,height:1000,x:8});
await render('meadow',{x:14});await render('bridge',{level:1,x:16});await render('mill',{level:2,x:66,y:2});await render('boss',{level:3,x:8});
await render('crouch',{cover:true,x:4,pose:{crouching:true}});
dom.window.close();
