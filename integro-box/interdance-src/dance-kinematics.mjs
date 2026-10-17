import * as T from 'three';

// Two-bone inverse kinematics keeps the supporting shoe on the stage while
// the pelvis moves. Reuse scratch objects: no per-frame vector allocations.
export function createLegSolver(rig, bones) {
  const down=new T.Vector3(0,-1,0),hip=new T.Vector3(),goal=new T.Vector3();
  const direction=new T.Vector3(),pole=new T.Vector3(),kneePoint=new T.Vector3();
  const segment=new T.Vector3(),parentRotation=new T.Quaternion();
  const rotation=new T.Quaternion(),rigRotation=new T.Quaternion(),euler=new T.Euler();
  const upperLength=bones.kneeL.position.length(),lowerLength=bones.footL.position.length();
  return (side,target)=>{
    const thigh=bones['thigh'+side],knee=bones['knee'+side],foot=bones['foot'+side];
    rig.updateWorldMatrix(true,false);
    rig.getWorldQuaternion(rigRotation);
    thigh.getWorldPosition(hip);
    goal.set(target.x,target.y,target.z);rig.localToWorld(goal);
    direction.subVectors(goal,hip);
    const distance=T.MathUtils.clamp(direction.length(),.08,upperLength+lowerLength-.001);
    direction.normalize();
    // Knees point forward, with a small outward component for a natural stance.
    pole.set(side==='L'?-.08:.08,0,1).applyQuaternion(rigRotation);
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
