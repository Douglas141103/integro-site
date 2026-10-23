import * as T from 'three';

// Sculpted ice plaque traced from the event's hand-drawn reference.
// Rings and inscriptions are mounted on both faces, so they read from the track and the corral.
export function createWinterTotem(){
 const g=new T.Group();g.name='Winter2026Totem';
 const shape=new T.Shape();
 shape.moveTo(-1.08,.17);shape.quadraticCurveTo(-1.2,.8,-.84,1.5);
 shape.lineTo(-.59,2.05);shape.quadraticCurveTo(-.91,2.9,-1.0,3.58);
 shape.quadraticCurveTo(-.93,3.83,-.35,3.96);shape.lineTo(.83,4.32);
 shape.quadraticCurveTo(1.08,3.75,.91,2.42);shape.lineTo(.86,1.66);
 shape.quadraticCurveTo(1.18,1.22,1.07,.17);shape.closePath();
 const bodyGeo=new T.ExtrudeGeometry(shape,{depth:.32,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.075,bevelThickness:.065,curveSegments:10});bodyGeo.translate(0,0,-.16);
 const faceMat=new T.MeshStandardMaterial({color:0xc6edfa,roughness:.3,metalness:.08});
 const edgeMat=new T.MeshStandardMaterial({color:0x559ec9,roughness:.22,metalness:.16});
 const body=new T.Mesh(bodyGeo,[faceMat,edgeMat]);body.name='SculptedIcePlaque';body.castShadow=true;body.receiveShadow=true;g.add(body);
 const foot=new T.Mesh(new T.BoxGeometry(2.42,.18,.85),edgeMat);foot.position.y=.09;foot.receiveShadow=true;g.add(foot);
 const red=new T.MeshStandardMaterial({color:0xe52c42,roughness:.23,metalness:.12});
 const rings=[[-.30,2.53,.065],[-.44,2.68,.11],[-.57,2.98,.18],[-.35,3.43,.25],[.15,3.49,.26],[.45,3.08,.24],[.54,2.57,.30],[.35,2.03,.32],[-.09,1.70,.27],[-.49,1.57,.23]];
 const cv=document.createElement('canvas');cv.width=512;cv.height=256;const ctx=cv.getContext('2d');
 ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.strokeStyle='#f8fdff';ctx.lineWidth=9;ctx.fillStyle='#195579';ctx.font='900 148px Arial';ctx.strokeText('2026',256,94,480);ctx.fillText('2026',256,94,480);
 ctx.font='bold 58px Arial';ctx.lineWidth=4;ctx.strokeText('INVERNO',256,206,480);ctx.fillText('INVERNO',256,206,480);
 const texture=new T.CanvasTexture(cv);texture.colorSpace=T.SRGBColorSpace;
 const textMat=new T.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,toneMapped:false});
 const textGeo=new T.PlaneGeometry(1.90,.95);
 const ringGeos=rings.map(([, , r])=>new T.TorusGeometry(r,Math.min(.036,r*.23),8,32));
 for(const side of [-1,1]){
  const face=new T.Group();face.name=side<0?'TotemTrackFace':'TotemCorralFace';face.rotation.y=side<0?Math.PI:0;g.add(face);
  rings.forEach(([x,y],i)=>{const ring=new T.Mesh(ringGeos[i],red);ring.name='RedCircle'+i;ring.position.set(x,y,.255+(i%2)*.01);ring.castShadow=true;face.add(ring);});
  const text=new T.Mesh(textGeo,textMat);text.name='TotemInscription';text.userData.text='2026 INVERNO';text.position.set(0,.82,.24);face.add(text);
 }
 const snow=new T.MeshStandardMaterial({color:0xf7fcff,roughness:.95});
 const capPath=new T.CatmullRomCurve3([new T.Vector3(-.96,3.71,0),new T.Vector3(-.53,3.94,0),new T.Vector3(.15,4.13,0),new T.Vector3(.84,4.34,0)]);
 const cap=new T.Mesh(new T.TubeGeometry(capPath,18,.10,6,false),snow);cap.scale.z=2.4;cap.castShadow=true;g.add(cap);
 return g;
}
