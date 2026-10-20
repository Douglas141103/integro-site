import * as THREE from 'three';

// Toy-like, readable ground hazards. Resources belong to the manager, not to
// individual traps, so room updates only reconcile inexpensive scene groups.
export function createEggTrapVisuals(parent) {
  const root = new THREE.Group();
  root.name = 'Egg trap visuals';
  root.userData.eggTrapVisuals = true;
  parent.add(root);
  const entries = new Map(), geometries = new Set(), materials = new Set();
  let disposed = false, elapsed = 0;
  const geometry = value => (geometries.add(value), value);
  const material = options => {
    const value = new THREE.MeshStandardMaterial({ roughness: .78, metalness: .05, ...options });
    materials.add(value);
    return value;
  };
  const ringMaterial = (color, opacity) => {
    const value = new THREE.MeshBasicMaterial({ color, transparent: true, opacity,
      side: THREE.DoubleSide, depthWrite: false, polygonOffset: true,
      polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    materials.add(value);
    return value;
  };
  const palette = {
    navy: material({ color: 0x263e57 }),
    rubber: material({ color: 0x46607b }),
    gold: material({ color: 0xffc65b }),
    cream: material({ color: 0xfff1c9 }),
    eyes: material({ color: 0x142c40 }),
    own: material({ color: 0x83e8bd, emissive: 0x123d2b, emissiveIntensity: .15 }),
    other: material({ color: 0xff947f, emissive: 0x482017, emissiveIntensity: .15 }),
    ownRing: ringMaterial(0x8af1c7, .72),
    otherRing: ringMaterial(0xffa18b, .72),
    ownWaiting: ringMaterial(0x8af1c7, .25),
    otherWaiting: ringMaterial(0xffa18b, .25)
  };
  const shapes = {
    ring: geometry(new THREE.RingGeometry(.86, 1.02, 40)),
    bearBase: geometry(new THREE.CylinderGeometry(.64, .69, .09, 16)),
    jaw: geometry(new THREE.TorusGeometry(.52, .065, 6, 16, Math.PI)),
    stud: geometry(new THREE.CylinderGeometry(.045, .075, .115, 6)),
    hinge: geometry(new THREE.CylinderGeometry(.085, .085, .15, 10)),
    plate: geometry(new THREE.CylinderGeometry(.235, .26, .055, 14)),
    ear: geometry(new THREE.CylinderGeometry(.075, .08, .045, 10)),
    eye: geometry(new THREE.SphereGeometry(.025, 6, 4)),
    mineBase: geometry(new THREE.CylinderGeometry(.48, .56, .11, 16)),
    mineBand: geometry(new THREE.TorusGeometry(.43, .035, 6, 20)),
    dome: geometry(new THREE.SphereGeometry(.42, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2)),
    button: geometry(new THREE.CylinderGeometry(.115, .135, .065, 12)),
    stripe: geometry(new THREE.BoxGeometry(.12, .045, .12)),
    bolt: geometry(new THREE.CylinderGeometry(.033, .033, .035, 6))
  };

  function mesh(entry, shape, mat, x = 0, y = 0, z = 0) {
    const object = new THREE.Mesh(shape, mat);
    object.position.set(x, y, z);
    object.userData.kind = entry.kind;
    object.userData.id = entry.id;
    // The ring does not cast a large ground shadow over its own marker.
    object.castShadow = false;
    object.receiveShadow = false;
    entry.group.add(object);
    return object;
  }

  function create(row) {
    const group = new THREE.Group();
    group.name = `Egg trap ${row.kind}`;
    group.userData.kind = row.kind;
    group.userData.id = row.id;
    const entry = { id: row.id, kind: row.kind, group, accents: [], ring: null, indicator: null,
      owned: null, armed: null, indicatorY: 0 };
    entry.ring = mesh(entry, shapes.ring, palette.ownWaiting, 0, .022, 0);
    entry.ring.rotation.x = -Math.PI / 2;
    entry.ring.renderOrder = 2;
    if (row.kind === 'bear') {
      mesh(entry, shapes.bearBase, palette.navy, 0, .075);
      // Open semicircular jaws with blunt toy studs, rather than sharp teeth.
      for (let half = 0; half < 2; half++) {
        const jaw = mesh(entry, shapes.jaw, palette.gold, 0, .16);
        jaw.rotation.set(-Math.PI / 2, 0, half * Math.PI);
        for (let i = 0; i < 4; i++) {
          const angle = half * Math.PI + (i + .5) * Math.PI / 4;
          mesh(entry, shapes.stud, palette.cream, Math.cos(angle) * .52, .225, Math.sin(angle) * .52);
        }
      }
      for (const x of [-.56, .56]) {
        const hinge = mesh(entry, shapes.hinge, palette.rubber, x, .17);
        hinge.rotation.x = Math.PI / 2;
      }
      entry.indicator = mesh(entry, shapes.plate, palette.own, 0, .145);
      entry.indicatorY = .145;
      entry.accents.push(entry.indicator);
      for (const x of [-.15, .15]) entry.accents.push(mesh(entry, shapes.ear, palette.own, x, .165, -.16));
      for (const x of [-.075, .075]) mesh(entry, shapes.eye, palette.eyes, x, .184, -.015);
    } else {
      mesh(entry, shapes.mineBase, palette.navy, 0, .085);
      const dome = mesh(entry, shapes.dome, palette.own, 0, .14);
      dome.scale.y = .55;
      entry.accents.push(dome);
      const band = mesh(entry, shapes.mineBand, palette.gold, 0, .15);
      band.rotation.x = -Math.PI / 2;
      entry.indicator = mesh(entry, shapes.button, palette.cream, 0, .395);
      entry.indicatorY = .395;
      // Candy-yellow safety tabs make the little puck readable from above.
      for (let i = 0; i < 4; i++) {
        const angle = i * Math.PI / 2;
        const stripe = mesh(entry, shapes.stripe, palette.gold,
          Math.cos(angle) * .35, .255, Math.sin(angle) * .35);
        stripe.rotation.y = -angle;
        mesh(entry, shapes.bolt, palette.cream,
          Math.cos(angle + Math.PI / 4) * .48, .15, Math.sin(angle + Math.PI / 4) * .48);
      }
    }
    root.add(group);
    return entry;
  }

  function sync(traps = []) {
    if (disposed) return;
    const seen = new Set();
    for (const row of Array.isArray(traps) ? traps : []) {
      if (!row || !['bear', 'mine'].includes(row.kind) || !Number.isFinite(row.x) || !Number.isFinite(row.z)
        || !['string', 'number'].includes(typeof row.id) || row.id === ''
        || (typeof row.id === 'number' && !Number.isFinite(row.id))) continue;
      if (seen.has(row.id)) continue;
      seen.add(row.id);
      let entry = entries.get(row.id);
      if (entry && entry.kind !== row.kind) {
        root.remove(entry.group);
        entries.delete(row.id);
        entry = null;
      }
      if (!entry) {
        entry = create(row);
        entries.set(row.id, entry);
      }
      entry.group.position.set(row.x, 0, row.z);
      const owned = row.mine === true, armed = row.armed === true;
      if (entry.owned !== owned || entry.armed !== armed) {
        const tint = owned ? palette.own : palette.other;
        for (const part of entry.accents) part.material = tint;
        entry.ring.material = owned
          ? (armed ? palette.ownRing : palette.ownWaiting)
          : (armed ? palette.otherRing : palette.otherWaiting);
        entry.group.userData.mine = owned;
        entry.group.userData.armed = armed;
        entry.owned = owned;
        entry.armed = armed;
        entry.ring.scale.setScalar(1);
        entry.indicator.position.y = entry.indicatorY;
      }
    }
    for (const [id, entry] of entries) if (!seen.has(id)) {
      root.remove(entry.group);
      entries.delete(id);
    }
  }

  function tick(dt = 0, time) {
    if (disposed) return;
    elapsed = Number.isFinite(time) ? time : elapsed + Math.min(.1, Math.max(0, Number.isFinite(dt) ? dt : 0));
    const pulse = Math.sin(elapsed * 2.6);
    for (const entry of entries.values()) {
      entry.ring.scale.setScalar(entry.armed ? 1 + pulse * .025 : 1);
      entry.indicator.position.y = entry.indicatorY + (entry.armed ? (pulse + 1) * .003 : 0);
    }
  }

  function clear() {
    for (const entry of entries.values()) root.remove(entry.group);
    entries.clear();
  }

  function dispose() {
    if (disposed) return;
    clear();
    root.removeFromParent();
    for (const value of geometries) value.dispose();
    for (const value of materials) value.dispose();
    geometries.clear();
    materials.clear();
    disposed = true;
  }
  return { sync, tick, clear, dispose };
}
