import {
 BoxGeometry, Color, ConeGeometry, CylinderGeometry, Group, InstancedMesh,
 MeshStandardMaterial, Object3D, OctahedronGeometry, SphereGeometry, TorusGeometry
} from 'three';

// Unit primitives are shared by every installed design. A whole set of props
// needs one draw call per shape, even when its pieces have different colours.
const shapes = {
 block: new BoxGeometry(1, 1, 1),
 cushion: new SphereGeometry(.5, 12, 8),
 drum: new CylinderGeometry(.5, .5, 1, 12),
 cone: new ConeGeometry(.5, 1, 12),
 peak: new ConeGeometry(.5, 1, 4),
 gem: new OctahedronGeometry(.5),
 ring: new TorusGeometry(.43, .07, 6, 20)
};
const finish = new MeshStandardMaterial({color: 0xffffff, roughness: .68});

export function addOrnaments(parent, name, draw) {
 const parts = new Map();
 const pose = new Object3D();
 function piece(shape, color, x, y, z, width, height, depth, rx = 0, ry = 0, rz = 0) {
  pose.position.set(x, y, z);
  pose.rotation.set(rx, ry, rz);
  pose.scale.set(width, height, depth);
  pose.updateMatrix();
  if (!parts.has(shape)) parts.set(shape, []);
  parts.get(shape).push({matrix: pose.matrix.clone(), color: new Color(color)});
 }
 draw(piece);
 const group = new Group();
 group.name = name;
 for (const [shape, entries] of parts) {
  const batch = new InstancedMesh(shapes[shape], finish, entries.length);
  entries.forEach(({matrix, color}, index) => {
   batch.setMatrixAt(index, matrix);
   batch.setColorAt(index, color);
  });
  batch.receiveShadow = true;
  batch.computeBoundingSphere();
  group.add(batch);
 }
 parent.add(group);
 return group;
}

export function releaseOrnaments(parent) {
 parent.traverse(node => { if (node.isInstancedMesh) node.dispose(); });
}
