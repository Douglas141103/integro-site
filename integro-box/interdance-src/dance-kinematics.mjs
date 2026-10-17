import * as T from 'three';

// Two-bone inverse kinematics keeps the supporting shoe on the stage while
// the pelvis moves. Reuse scratch objects: no per-frame vector allocations.
export function createLegSolver(rig, bones) {
  const down=new T.Vector3(0,-1,0),hip=new T.Vector3(),goal=new T.Vector3();
  const direction=new T.Vector3(),pole=new T.Vector3(),kneePoint=new T.Vector3();
  const segment=new T.Vector3(),parentRotation=new T.Quaternion();
  const rotation=new T.Quaternion(),rigRotation=new T.Quaternion(),bodyRotation=new T.Quaternion(),euler=new T.Euler();
  const upperLength=bones.kneeL.position.length(),lowerLength=bones.footL.position.length();
  return (side,target)=>{
    const thigh=bones['thigh'+side],knee=bones['knee'+side],foot=bones['foot'+side];
    rig.updateWorldMatrix(true,false);
    rig.getWorldQuaternion(rigRotation);
    bones.root.getWorldQuaternion(bodyRotation);
    thigh.getWorldPosition(hip);
    goal.set(target.x,target.y,target.z);rig.localToWorld(goal);
    direction.subVectors(goal,hip);
    const distance=T.MathUtils.clamp(direction.length(),.08,upperLength+lowerLength-.001);
    direction.normalize();
    // Knees point forward, with a small outward component for a natural stance.
    pole.set(side==='L'?-.08:.08,0,1).applyQuaternion(bodyRotation);
    pole.addScaledVector(direction,-pole.dot(direction)).normalize();
    const along=(upperLength**2-lowerLength**2+distance**2)/(2*distance);
    const height=Math.sqrt(Math.max(0,upperLength**2-along**2));
    kneePoint.copy(hip).addScaledVector(direction,along).addScaledVector(pole,height);
    segment.subVectors(kneePoint,hip).normalize();
    rotation.setFromUnitVectors(down,segment);
    thigh.parent.getWorldQuaternion(parentRotation).invert();
    thigh.quaternion.copy(parentRotation).multiply(rotation);
    thigh.updateWorldMatrix(true,false);
    segment.subVectors(goal,kneePoint).normalize();
    rotation.setFromUnitVectors(down,segment);
    thigh.getWorldQuaternion(parentRotation).invert();
    knee.quaternion.copy(parentRotation).multiply(rotation);
    knee.updateWorldMatrix(true,false);
    rotation.setFromEuler(euler.set(target.pitch,target.yaw,0)).premultiply(rigRotation);
    knee.getWorldQuaternion(parentRotation).invert();
    foot.quaternion.copy(parentRotation).multiply(rotation);
    bones['toe'+side].rotation.x=target.toe;
  };
}

// Solve the free hand against the moving waist, keeping its elbow out to the
// side. The elbow remains a local X hinge, compatible with its volume morph.
export function createHipHandSolver(bones){
  const shoulder=bones.shoulderL,elbow=bones.elbowL,hand=bones.handL;
  const l1=elbow.position.length(),l2=hand.position.length();
  const origin=new T.Vector3(),goal=new T.Vector3(),direction=new T.Vector3(),pole=new T.Vector3(),joint=new T.Vector3();
  const upper=new T.Vector3(),lower=new T.Vector3(),x=new T.Vector3(),y=new T.Vector3(),z=new T.Vector3(),matrix=new T.Matrix4();
  const bodyRotation=new T.Quaternion(),parentInverse=new T.Quaternion(),world=new T.Quaternion();
  const beforeUpper=new T.Quaternion(),beforeLower=new T.Quaternion(),beforeHand=new T.Quaternion(),wristRotation=new T.Quaternion().setFromEuler(new T.Euler(-.08,0,-.12));
  return weight=>{
    if(weight<=0)return;
    beforeUpper.copy(shoulder.quaternion);beforeLower.copy(elbow.quaternion);beforeHand.copy(hand.quaternion);
    shoulder.getWorldPosition(origin);bones.hips.getWorldQuaternion(bodyRotation);
    goal.set(-.255,.235,.13);bones.hips.localToWorld(goal);
    direction.subVectors(goal,origin);const distance=T.MathUtils.clamp(direction.length(),.05,l1+l2-.001);direction.normalize();
    pole.set(-1,0,.2).applyQuaternion(bodyRotation);pole.addScaledVector(direction,-pole.dot(direction)).normalize();
    const along=(l1*l1-l2*l2+distance*distance)/(2*distance),height=Math.sqrt(Math.max(0,l1*l1-along*along));
    joint.copy(origin).addScaledVector(direction,along).addScaledVector(pole,height);
    upper.subVectors(joint,origin).normalize();lower.subVectors(goal,joint).normalize();
    x.crossVectors(lower,upper).normalize();y.copy(upper).negate();z.crossVectors(x,y).normalize();
    world.setFromRotationMatrix(matrix.makeBasis(x,y,z));shoulder.parent.getWorldQuaternion(parentInverse).invert();
    shoulder.quaternion.copy(parentInverse).multiply(world);
    elbow.rotation.set(-Math.acos(T.MathUtils.clamp(upper.dot(lower),-1,1)),0,0);
    elbow.updateWorldMatrix(true,false);elbow.getWorldQuaternion(parentInverse).invert();
    hand.quaternion.copy(parentInverse).multiply(bodyRotation).multiply(wristRotation);
    shoulder.quaternion.slerp(beforeUpper,1-weight);elbow.quaternion.slerp(beforeLower,1-weight);hand.quaternion.slerp(beforeHand,1-weight);
  };
}
