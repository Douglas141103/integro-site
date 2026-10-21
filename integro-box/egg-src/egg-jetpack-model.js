import * as THREE from 'three';

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
    mint: material(0x8aebc4), navy: material(0x24435a), gold: material(0xffcd64),
    cyan: material(0x78eaff, { emissive: 0x147e9b, emissiveIntensity: .5 }),
    flame: flameMaterial(0x57dbff, .72), core: flameMaterial(0xffbf67, .95)
  };
  const shapes = {
    tank: geometry(new THREE.CapsuleGeometry(.12, .33, 4, 10)),
    panel: geometry(new THREE.BoxGeometry(.43, .48, .075)),
    band: geometry(new THREE.CylinderGeometry(.125, .125, .055, 10)),
    nozzle: geometry(new THREE.CylinderGeometry(.085, .115, .13, 10)),
    rim: geometry(new THREE.TorusGeometry(.10, .025, 4, 10)),
    bar: geometry(new THREE.CapsuleGeometry(.035, .30, 3, 8)),
    buckle: geometry(new THREE.BoxGeometry(.075, .065, .025)),
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
  const handle = mesh(root, shapes.bar, palette.gold, 'jetpack-handle', 0, .235, -.035);
  handle.rotation.z = Math.PI / 2;
  mesh(root, shapes.light, palette.cyan, 'jetpack-status-light', 0, .055, .125);

  for (const [index, side] of [-1, 1].entries()) {
    const x = side * .155;
    mesh(root, shapes.tank, palette.mint, 'jetpack-tank', x, 0, .035);
    for (const y of [-.165, .165]) mesh(root, shapes.band, palette.navy, 'jetpack-tank-band', x, y, .035);
    mesh(root, shapes.nozzle, palette.navy, 'jetpack-nozzle', x, -.345, .035);
    const rim = mesh(root, shapes.rim, palette.gold, 'jetpack-nozzle-rim', x, -.405, .035);
    rim.rotation.x = Math.PI / 2;

    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * .23, .16, -.07),
      new THREE.Vector3(side * .245, .23, -.31),
      new THREE.Vector3(side * .23, .07, -.64),
      new THREE.Vector3(side * .23, -.23, -.64),
      new THREE.Vector3(side * .22, -.27, -.08)
    ]);
    mesh(root, geometry(new THREE.TubeGeometry(path, 18, .023, 5, false)), palette.navy, 'jetpack-strap');
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
