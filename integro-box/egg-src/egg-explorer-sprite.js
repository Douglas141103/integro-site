import * as THREE from 'three';

const HYSTERESIS = THREE.MathUtils.degToRad(2);
const POLE_INNER = Math.sin(THREE.MathUtils.degToRad(5));
const POLE_OUTER = Math.sin(THREE.MathUtils.degToRad(20));
const signedAngle = radians => Math.atan2(Math.sin(radians), Math.cos(radians));
const RETRY_MS = 15000;
const FILENAMES = {
  full: 'explorer.webp',
  'no-cap': 'explorer-no-cap.webp',
  'no-pack': 'explorer-no-pack.webp',
  bare: 'explorer-no-cap-pack.webp'
};
const ASSET_DIRECTORY = '/integro-box/assets/egg-explorer-v1/';
const sharedAtlases = new Map();

function acquireAtlas(url) {
  let entry = sharedAtlases.get(url);
  if (!entry) {
    entry = {url, users: 0, texture: null, loading: false, retryAt: 0};
    sharedAtlases.set(url, entry);
  }
  entry.users++;
  return entry;
}

function releaseAtlas(entry) {
  if (!entry || --entry.users !== 0) return;
  sharedAtlases.delete(entry.url);
  entry.texture?.dispose();
}

function loadedAtlas(entry) {
  if (entry.texture || entry.loading || typeof document === 'undefined' || Date.now() < entry.retryAt) return entry.texture;
  entry.loading = true;
  try {
    new THREE.TextureLoader().load(entry.url, texture => {
      entry.loading = false;
      if (!entry.users) { texture.dispose(); return; }
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.needsUpdate = true;
      entry.texture = texture;
    }, undefined, () => {
      entry.loading = false;
      entry.retryAt = Date.now() + RETRY_MS;
    });
  } catch {
    entry.loading = false;
    entry.retryAt = Date.now() + RETRY_MS;
  }
  return entry.texture;
}

export class EggExplorerSprite {
  constructor(space, {columns = 5, rows = 5, widthRatio = 280 / 320, footRatio = 307 / 320,
    height = 2.53, name = 'EggExplorer', url = null} = {}) {
    this.columns = columns;
    this.directions = 2 * (columns - 1);
    this.angleStep = 2 * Math.PI / this.directions;
    this.rows = rows;
    this.footRatio = footRatio;
    this.url = url;
    this.billboard = new THREE.Group();
    this.billboard.name = name + 'Illustration';
    this.billboard.visible = false;
    space.add(this.billboard);
    this.height = height;
    this.width = height * widthRatio;
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.geometry.translate(0, this.height * (this.footRatio - .5), 0);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      toneMapped: false,
      fog: false,
      alphaTest: .20,
      alphaToCoverage: true,
      depthWrite: true
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.name = name + 'Atlas';
    this.billboard.add(this.mesh);

    this.atlas = null;
    this.displayedAtlas = null;
    this.showingPrevious = false;
    this.frame = {column: -1, row: -1, mirror: false, width: this.width, height: this.height, flying: false};
    this.viewDirection = new THREE.Vector3();
    this.right = new THREE.Vector3(1, 0, 0);
    this.up = new THREE.Vector3();
    this.axes = new THREE.Matrix4();
    this.parentRotation = new THREE.Quaternion();
    this.cameraRotation = new THREE.Quaternion();
    this.inverseParent = new THREE.Quaternion();
    this.poleRightWorld = new THREE.Vector3();
    this.poleRightLocal = new THREE.Vector3();
    this.inPole = false;
    this.poleTurn = null;
    this.sector = null;
  }

  atlasTexture(variant, options) {
    this.showingPrevious = false;
    if (options.texture) {
      releaseAtlas(this.atlas); releaseAtlas(this.displayedAtlas);
      this.atlas = this.displayedAtlas = null;
      return options.texture;
    }
    const url = options.url || this.url || ASSET_DIRECTORY + FILENAMES[variant];
    if (this.atlas?.url !== url) {
      releaseAtlas(this.atlas);
      this.atlas = acquireAtlas(url);
    }
    const texture = loadedAtlas(this.atlas);
    if (texture) {
      if (this.displayedAtlas !== this.atlas) {
        releaseAtlas(this.displayedAtlas);
        this.displayedAtlas = acquireAtlas(url);
      }
      return texture;
    }
    // Keep an already visible illustration on screen during an outfit swap.
    // A genuine loading error falls back to the working geometric avatar.
    this.showingPrevious = this.atlas.loading && Boolean(this.displayedAtlas?.texture);
    return this.showingPrevious ? this.displayedAtlas.texture : null;
  }

  preload() {
    this.atlasTexture('full', {});
  }

  // At the gravity poles a tiny camera translation can reverse its measured
  // azimuth. Carry the last level right-axis in world space so actor turns still
  // register. Rejoin the measured azimuth gradually as the camera leaves.
  viewAzimuth(camera, view) {
    const horizontal = Math.hypot(view.x, view.z);
    const measured = Math.atan2(view.x, -view.z);
    if (horizontal >= POLE_OUTER || (!this.inPole && horizontal > POLE_INNER)) {
      this.inPole = false;
      this.poleTurn = null;
      this.poleRightWorld.set(-Math.cos(measured), 0, -Math.sin(measured)).applyQuaternion(this.parentRotation);
      return measured;
    }
    this.inPole = true;
    if (!this.poleRightWorld.lengthSq()) {
      camera.getWorldQuaternion(this.cameraRotation);
      this.poleRightWorld.set(1, 0, 0).applyQuaternion(this.cameraRotation);
      // The camera keeps world-up even in Heaven, where the art hangs inverted.
      if (this.up.set(0, 1, 0).applyQuaternion(this.parentRotation).y < 0) this.poleRightWorld.negate();
    }
    const right = this.poleRightLocal.copy(this.poleRightWorld).applyQuaternion(this.inverseParent);
    const anchor = Math.atan2(-right.z, -right.x);
    if (horizontal <= POLE_INNER) {
      this.poleTurn = null;
      return anchor;
    }
    const turn = signedAngle(measured - anchor);
    // Pick a continuous direction around the circle even when the exit is
    // almost exactly opposite the approach and straddles the +/-pi seam.
    this.poleTurn = this.poleTurn === null ? turn : this.poleTurn + signedAngle(turn - this.poleTurn);
    const blend = THREE.MathUtils.smoothstep(horizontal, POLE_INNER, POLE_OUTER);
    return anchor + this.poleTurn * blend;
  }

  selectDirection(angle) {
    if (this.sector === null || Math.abs(signedAngle(angle - this.sector * this.angleStep)) > this.angleStep / 2 + HYSTERESIS) {
      const nearest = Math.round(angle / this.angleStep);
      this.sector = THREE.MathUtils.euclideanModulo(nearest, this.directions);
    }
  }

  present(camera, variant, state, options) {
    const group = this.billboard;
    if (!camera || options.enabled === false) { group.visible = false; return false; }
    const texture = this.atlasTexture(variant, options);
    if (!texture) { group.visible = false; return false; }

    // The room departure fade may temporarily install a cloned material on the
    // mesh. Update both so a variant switch during a fade restores correctly.
    if (this.material.map !== texture || this.mesh.material.map !== texture) {
      this.material.map = this.mesh.material.map = texture;
      this.material.needsUpdate = this.mesh.material.needsUpdate = true;
    }
    group.visible = true;
    const parent = group.parent;
    const view = this.viewDirection;
    parent.getWorldQuaternion(this.parentRotation);
    this.inverseParent.copy(this.parentRotation).invert();
    if (camera.isOrthographicCamera) {
      camera.getWorldDirection(view).negate().applyQuaternion(this.inverseParent);
    } else {
      camera.getWorldPosition(view);
      parent.worldToLocal(view);
      view.y -= this.height * (this.footRatio - .5);
    }
    if (view.lengthSq() > 1e-10) {
      view.normalize();
      const angle = this.viewAzimuth(camera, view);
      this.selectDirection(angle);
      // Keep the illustrated up-axis in actor gravity, including the ceiling.
      // Inside the pole cone the stabilized horizontal axis is projected onto
      // the view plane, preserving an orthonormal basis at every elevation.
      this.right.set(-Math.cos(angle), 0, -Math.sin(angle));
      this.right.addScaledVector(view, -this.right.dot(view)).normalize();
      this.up.crossVectors(view, this.right).normalize();
      group.quaternion.setFromRotationMatrix(this.axes.makeBasis(this.right, this.up, view));
    }

    const contact = state.stepping && !state.reducedMotion ? Number(state.gaitPhase >= .5) : 0;
    const row = state.carrying ? 3 + contact : state.stepping ? 1 + contact : 0;
    const mirror = this.sector > this.columns - 1;
    this.selectFrame(mirror ? this.directions - this.sector : this.sector ?? 0, row, mirror);
    this.frame.flying = state.flying;
    group.updateWorldMatrix(false, false);
    return true;
  }

  selectFrame(column, row, mirror) {
    const frame = this.frame;
    if (frame.column === column && frame.row === row && frame.mirror === mirror) return;
    // UVs are per actor. All players using the same variant share one GPU
    // texture while facing different directions and using different poses.
    const x0 = column / this.columns, x1 = (column + 1) / this.columns;
    const y0 = 1 - (row + 1) / this.rows, y1 = 1 - row / this.rows;
    const left = mirror ? x1 : x0, right = mirror ? x0 : x1;
    const uv = this.geometry.attributes.uv;
    uv.setXY(0, left, y1); uv.setXY(1, right, y1);
    uv.setXY(2, left, y0); uv.setXY(3, right, y0);
    uv.needsUpdate = true;
    Object.assign(frame, {column, row, mirror});
  }

  dispose() {
    releaseAtlas(this.atlas);
    releaseAtlas(this.displayedAtlas);
    this.atlas = this.displayedAtlas = null;
    this.geometry.dispose();
    this.material.dispose();
    this.billboard.removeFromParent();
  }
}
