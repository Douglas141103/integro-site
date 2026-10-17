import * as T from 'three';

const CORRECTION=.65;

// Distances from shoulder/hip, followed by the radius at each anatomical zone.
export const ARM_PROFILE=Object.freeze([[0,.094],[.08,.098],[.22,.087],[.32,.064],[.42,.079],[.55,.059],[.60,.052]]);
export const LEG_PROFILE=Object.freeze([[0,.103],[.10,.110],[.29,.094],[.46,.072],[.61,.091],[.80,.067],[.92,.054]]);
function profileAt(profile,d){
  for(let i=1;i<profile.length;i++)if(d<=profile[i][0]){
    const [a,x]=profile[i-1],[b,y]=profile[i],t=T.MathUtils.smoothstep(d,a,b);return x+(y-x)*t;
  }
  return profile.at(-1)[1];
}

export function shapeJacket(geometry){
  const position=geometry.attributes.position;
  const widths=[[-.37,.65],[-.28,.62],[-.12,.71],[.10,.81],[.25,.74]];
  const depths=[[-.37,.69],[-.28,.67],[-.12,.74],[.10,.78],[.25,.70]];
  for(let i=0;i<position.count;i++){
    const y=position.getY(i);position.setXYZ(i,position.getX(i)*profileAt(widths,y),y,position.getZ(i)*profileAt(depths,y));
  }
  geometry.computeVertexNormals();return geometry;
}

export function createLimbSurface({length,joint,profile,bindMatrix}){
  // The middle ring lies exactly on the hinge; extra rings on either side
  // distribute the fold over a short region instead of bending a broad tube.
  const radial=16,rows=32,geometry=new T.CylinderGeometry(1,1,1,radial,rows,false);
  const positions=geometry.attributes.position,blend=[];
  for(let i=0;i<positions.count;i++){
    const t=.5-positions.getY(i),d=t<=.5?t*2*joint:joint+(t-.5)*2*(length-joint);
    const radius=profileAt(profile,d),w=T.MathUtils.smoothstep(d,joint-.065,joint+.065);
    positions.setXYZ(i,positions.getX(i)*radius,-d,positions.getZ(i)*radius*.88);blend.push(w);
  }
  geometry.computeVertexNormals();
  const corrective=geometry.clone(),target=corrective.attributes.position;
  for(let i=0;i<target.count;i++){
    const w=blend[i];target.setZ(i,target.getZ(i)*(1+CORRECTION*4*w*(1-w)));
  }
  corrective.computeVertexNormals();
  geometry.applyMatrix4(bindMatrix);corrective.applyMatrix4(bindMatrix);
  geometry.morphAttributes.position=[corrective.attributes.position];
  geometry.morphAttributes.normal=[corrective.attributes.normal];
  geometry.morphTargetsRelative=false;
  geometry.userData.jointRing=Array.from({length:radial},(_,i)=>rows/2*(radial+1)+i);
  geometry.userData.jointRadius=profileAt(profile,joint);
  return {geometry,blend};
}

export function jointCorrectionInfluence(bend){
  // Linear blending contracts the hinge by cos(bend / 2). A bounded morph
  // restores its depth without adding bones or increasing the limb's width.
  return T.MathUtils.clamp((1/Math.max(.5,Math.cos(Math.abs(bend)/2))-1)/CORRECTION,0,1);
}
