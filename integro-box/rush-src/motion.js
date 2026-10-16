import * as T from 'three';
export const smooth=(a,b,x)=>T.MathUtils.smoothstep(x,a,b);

// Exact damped spring integration: accessories lag and settle consistently at
// 30, 60 or 120 Hz. This is visual motion only, never gameplay physics.
export class MotionSpring {
 constructor(frequency=22,damping=.68){this.frequency=frequency;this.damping=damping;this.value=0;this.velocity=0;}
 step(target,dt){if(dt<=0)return this.value;const w=this.frequency,z=this.damping,wd=w*Math.sqrt(1-z*z),x=this.value-target,b=(this.velocity+z*w*x)/wd,e=Math.exp(-z*w*dt),c=Math.cos(wd*dt),s=Math.sin(wd*dt),a=x*c+b*s;
  this.value=target+e*a;this.velocity=e*(-z*w*a+wd*(-x*s+b*c));return this.value;
 }
}

// Analytic two-bone IK in the hip parent's space. A forward knee pole removes
// the ambiguity of a folded leg; the bind vectors retain their real offsets.
export class LegIK {
 constructor(thigh,knee,foot){
  Object.assign(this,{thigh,knee,foot});this.upper=knee.position.clone();this.lower=foot.position.clone();this.l1=this.upper.length();this.l2=this.lower.length();this.upper.normalize();this.lower.normalize();
  this.inverse=new T.Matrix4();this.end=new T.Vector3();this.axis=new T.Vector3();this.pole=new T.Vector3();this.joint=new T.Vector3();this.lowerDirection=new T.Vector3();this.q1=new T.Quaternion();this.q2=new T.Quaternion();this.inverseQ=new T.Quaternion();this.parentQ=new T.Quaternion();this.target=new T.Vector3();this.contact=false;
 }
 solve(target,orientation,weight=1){
  this.target.copy(target);this.thigh.parent.updateWorldMatrix(true,false);this.inverse.copy(this.thigh.parent.matrixWorld).invert();this.end.copy(target).applyMatrix4(this.inverse).sub(this.thigh.position);
  const distance=T.MathUtils.clamp(this.end.length(),Math.abs(this.l1-this.l2)+.0001,this.l1+this.l2-.0001);this.axis.copy(this.end).normalize();
  this.pole.set(0,0,-1).addScaledVector(this.axis,this.axis.z);if(this.pole.lengthSq()<.00001)this.pole.set(0,1,0).addScaledVector(this.axis,-this.axis.y);this.pole.normalize();
  const along=(this.l1*this.l1-this.l2*this.l2+distance*distance)/(2*distance),bend=Math.sqrt(Math.max(0,this.l1*this.l1-along*along));
  this.joint.copy(this.axis).multiplyScalar(along).addScaledVector(this.pole,bend);this.q1.setFromUnitVectors(this.upper,this.lowerDirection.copy(this.joint).normalize());
  this.lowerDirection.copy(this.axis).multiplyScalar(distance).sub(this.joint).applyQuaternion(this.inverseQ.copy(this.q1).invert()).normalize();this.q2.setFromUnitVectors(this.lower,this.lowerDirection);
  this.thigh.quaternion.slerp(this.q1,weight).normalize();this.knee.quaternion.slerp(this.q2,weight).normalize();this.thigh.updateWorldMatrix(false,true);
  this.knee.getWorldQuaternion(this.parentQ).normalize();this.q2.copy(this.parentQ).invert().multiply(orientation).normalize();this.foot.quaternion.slerp(this.q2,weight).normalize();this.foot.updateWorldMatrix(false,true);
 }
}

// The sole, rather than the ankle pivot, contacts the ground during heel strike
// and toe-off. Coordinates match the existing shoe and collision scale.
export function soleHeight(pitch){const c=Math.cos(pitch),s=Math.sin(pitch);return .012-Math.min(-.1*c+.395*s,-.1*c-.205*s);}
export function gaitFoot(phase){
 const p=((phase%1)+1)%1,stance=.38;
 if(p<stance){const u=p/stance,pitch=.10*(1-smooth(0,.25,u))-.65*smooth(.55,1,u);return {z:T.MathUtils.lerp(-.40,.40,u),y:soleHeight(pitch),pitch,contact:true};}
 // Running has a flight phase. The recovering heel kicks back, folds high,
 // then reaches forward; a short double-support walk looked like shuffling.
 const u=(p-stance)/(1-stance),v=1-u,pitch=u<.28?T.MathUtils.lerp(-.65,-1.05,smooth(0,.28,u)):T.MathUtils.lerp(-1.05,.10,smooth(.28,1,u));
 return {z:v*v*v*.40+3*v*v*u*.78-3*v*u*u*.66-u*u*u*.40,y:soleHeight(pitch)+Math.sin(Math.PI*u)**1.2*.49,pitch,contact:false};
}
