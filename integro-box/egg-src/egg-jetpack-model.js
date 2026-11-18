import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

// Chest-local accessory for EggExplorer: the character faces -Z, so +Z is its
// back. Its .82 actor scale is inherited; do not apply a second model scale.
export function createEggJetpackModel(parent) {
  const root = new THREE.Group();
  root.name = 'Egg cartoon jetpack';
  root.position.set(0, -.07, .40);
  root.visible = false;
  root.userData.eggJetpack = true;
  parent.add(root);
  const geometries = new Set(), materials = new Set(), plumes = [];
  let disposed = false;
  const geometry = value => (geometries.add(value), value);
  const material = (color, extra = {}) => {
    const value = new THREE.MeshToonMaterial({ color, ...extra });
    materials.add(value);
    return value;
  };
  const flameMaterial = (color, opacity) => {
    const value = new THREE.MeshBasicMaterial({ color, transparent: true, opacity,
      depthWrite: false, toneMapped: false });
    materials.add(value);
    return value;
  };
  const palette = {
    mint: material(0x64d886), navy: material(0x333554), gold: material(0xf4bd56),
    metal: material(0xb4bac6),
    cyan: material(0x78eaff, { emissive: 0x147e9b, emissiveIntensity: .5 }),
    flame: flameMaterial(0x57dbff, .72), core: flameMaterial(0xffbf67, .95)
  };
  const shapes = {
    tank: geometry(new THREE.CapsuleGeometry(.127, .32, 5, 14)),
    panel: geometry(new RoundedBoxGeometry(.43, .53, .10, 1, .044)),
    spine: geometry(new RoundedBoxGeometry(.135, .49, .12, 1, .04)),
    band: geometry(new THREE.CylinderGeometry(.134, .134, .066, 14)),
    nozzle: geometry(new THREE.CylinderGeometry(.092, .106, .127, 14)),
    rim: geometry(new THREE.TorusGeometry(.10, .025, 4, 10)),

    buckle: geometry(new RoundedBoxGeometry(.075, .065, .025, 1, .009)),
    light: geometry(new THREE.SphereGeometry(.047, 8, 6))
  };
  // Plume bases sit at y=0 and their tips point down, keeping animated length
  // anchored to the nozzle rather than moving the exhaust up through the tank.
  shapes.flame = geometry(new THREE.ConeGeometry(.105, .42, 8));
  shapes.flame.rotateZ(Math.PI);
  shapes.flame.translate(0, -.21, 0);
  shapes.core = geometry(new THREE.ConeGeometry(.06, .29, 8));
  shapes.core.rotateZ(Math.PI);
  shapes.core.translate(0, -.145, 0);

  function mesh(parentNode, shape, mat, name, x = 0, y = 0, z = 0) {
    const part = new THREE.Mesh(shape, mat);
    part.name = name;
    part.userData.jetpackPart = name;
    part.position.set(x, y, z);
    part.castShadow = !name.includes('flame');
    part.receiveShadow = false;
    parentNode.add(part);
    return part;
  }

  mesh(root, shapes.panel, palette.navy, 'jetpack-backplate', 0, -.015, -.075);
  mesh(root, shapes.spine, palette.navy, 'jetpack-center-panel', 0, -.012, .075);
  const grip = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-.138, .22, -.055), new THREE.Vector3(-.135, .331, -.055),
    new THREE.Vector3(-.088, .369, -.055), new THREE.Vector3(.088, .369, -.055),
    new THREE.Vector3(.135, .331, -.055), new THREE.Vector3(.138, .22, -.055)
  ]);
  mesh(root, geometry(new THREE.TubeGeometry(grip, 16, .032, 6, false)), palette.gold, 'jetpack-handle');
  const bezel = mesh(root, shapes.light, palette.gold, 'jetpack-lamp-bezel', 0, .055, .14);
  bezel.scale.set(1.1, 1.1, .5);
  const lamp = mesh(root, shapes.light, palette.cyan, 'jetpack-status-light', 0, .055, .153);
  lamp.scale.set(.69, .69, .5);

  for (const [index, side] of [-1, 1].entries()) {
    const x = side * .155;
    mesh(root, shapes.tank, palette.mint, 'jetpack-tank', x, 0, .035);
    for (const y of [-.165, .165]) mesh(root, shapes.band, palette.gold, 'jetpack-tank-band', x, y, .035);
    mesh(root, shapes.nozzle, palette.metal, 'jetpack-nozzle', x, -.345, .035);
    const rim = mesh(root, shapes.rim, palette.gold, 'jetpack-nozzle-rim', x, -.405, .035);
    rim.rotation.x = Math.PI / 2;

    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * .23, .16, -.07),
      new THREE.Vector3(side * .245, .23, -.31),
      new THREE.Vector3(side * .23, .07, -.64),
      new THREE.Vector3(side * .23, -.23, -.64),
      new THREE.Vector3(side * .22, -.27, -.08)
    ]);
    const strap = new THREE.TubeGeometry(path, 18, .025, 6, false);
    const vertices = strap.attributes.position;
    for (let step = 0; step <= 18; step++) {
      const center = path.getPointAt(step / 18);
      for (let i = 0; i <= 6; i++) {
        const v = step * 7 + i;
        vertices.setX(v, center.x + (vertices.getX(v) - center.x) * 1.8);
      }
    }
    strap.computeVertexNormals();
    mesh(root, geometry(strap), palette.navy, 'jetpack-strap');
    mesh(root, shapes.buckle, palette.gold, 'jetpack-buckle', side * .23, -.145, -.66);

    const plume = new THREE.Group();
    plume.name = 'Jetpack exhaust';
    plume.userData.jetpackPlume = index;
    plume.position.set(x, -.418, .035);
    plume.visible = false;
    root.add(plume);
    const outer = mesh(plume, shapes.flame, palette.flame, 'jetpack-flame-outer');
    const core = mesh(plume, shapes.core, palette.core, 'jetpack-flame-core', 0, 0, .008);
    outer.renderOrder = 2;
    core.renderOrder = 3;
    plumes.push(plume);
  }

  function update({ visible = false, flying = false, time = 0, reducedMotion = false } = {}) {
    if (disposed) return;
    root.visible = Boolean(visible);
    const burning = root.visible && Boolean(flying), t = Number.isFinite(time) ? time : 0;
    for (let i = 0; i < plumes.length; i++) {
      const plume = plumes[i];
      plume.visible = burning;
      const pulse = burning && !reducedMotion ? Math.sin(t * 18 + i * 1.1) : 0;
      plume.scale.set(1 + pulse * .025, 1 + pulse * .12, 1 + pulse * .025);
    }
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    root.visible = false;
    root.removeFromParent();
    for (const value of geometries) value.dispose();
    for (const value of materials) value.dispose();
    geometries.clear();
    materials.clear();
  }
  return { root, update, dispose };
}
