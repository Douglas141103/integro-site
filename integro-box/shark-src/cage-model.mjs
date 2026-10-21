import * as T from 'three';
export function createCageEffect(scene){
 const root=new T.Group(),points=[];
 for(const y of [-1,-.35,.35,1])for(let i=0;i<32;i++){const a=i/32*Math.PI*2,b=(i+1)/32*Math.PI*2;points.push(Math.cos(a),y,Math.sin(a),Math.cos(b),y,Math.sin(b));}
 for(let i=0;i<12;i++){const a=i/12*Math.PI*2;points.push(Math.cos(a),-1,Math.sin(a),Math.cos(a),1,Math.sin(a));}
 for(let i=0;i<16;i++){const a=i/16*Math.PI,b=(i+1)/16*Math.PI;points.push(Math.cos(a)*.45,1+Math.sin(a)*.45,0,Math.cos(b)*.45,1+Math.sin(b)*.45,0);}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(points,3));const material=new T.LineBasicMaterial({color:0xffdc83,transparent:true});root.add(new T.LineSegments(geometry,material));scene.add(root);root.visible=false;let remaining=0;
 return{show(position,length,capacity,heading){root.position.copy(position).add(new T.Vector3(Math.cos(heading),0,-Math.sin(heading)).multiplyScalar(length*.6));root.scale.setScalar(Math.min(7,1.5+capacity*.12+length*.08));remaining=2.8;root.visible=true;},update(dt){if(!root.visible)return;remaining-=dt;root.rotation.y+=dt*.45;material.opacity=Math.min(1,remaining);if(remaining<=0)root.visible=false;},dispose(){scene.remove(root);geometry.dispose();material.dispose();}};
}
