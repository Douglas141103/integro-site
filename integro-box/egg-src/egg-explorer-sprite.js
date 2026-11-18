import * as THREE from 'three';

const COLUMNS = 5, ROWS = 5;
const FRAME_WIDTH = 280, FRAME_HEIGHT = 320, FOOT_Y = 307;
const RETRY_MS = 15000;
const FILENAMES = {
  full: 'explorer.webp',
  'no-cap': 'explorer-no-cap.webp',
  'no-pack': 'explorer-no-pack.webp',
  bare: 'explorer-no-cap-pack.webp'
};
const ASSET_DIRECTORY = '/integro-box/assets/egg-explorer-v1/';
const sharedAtlases = new Map();
const localUp = new THREE.Vector3(0, 1, 0);

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
  constructor(space) {
    this.billboard = new THREE.Group();
    this.billboard.name = 'EggExplorerIllustration';
    this.billboard.visible = false;
    space.add(this.billboard);
    this.height = 2.53;
    this.width = this.height * FRAME_WIDTH / FRAME_HEIGHT;
    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.geometry.translate(0, this.height * (FOOT_Y / FRAME_HEIGHT - .5), 0);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      toneMapped: false,
      fog: false,
      alphaTest: .20,
      alphaToCoverage: true,
      depthWrite: true
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.name = 'EggExplorerAtlas';
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
  }

  atlasTexture(variant, options) {
    this.showingPrevious = false;
    if (options.texture) {
      releaseAtlas(this.atlas); releaseAtlas(this.displayedAtlas);
      this.atlas = this.displayedAtlas = null;
      return options.texture;
    }
    const url = options.url || ASSET_DIRECTORY + FILENAMES[variant];
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
    if (camera.isOrthographicCamera) {
      camera.getWorldDirection(view).negate();
      parent.getWorldQuaternion(this.parentRotation);
      view.applyQuaternion(this.parentRotation.invert());
    } else {
      camera.getWorldPosition(view);
      parent.worldToLocal(view);
    }

    if (Math.hypot(view.x, view.z) > 1e-5) {
      const angle = Math.atan2(view.x, -view.z);
      const column = Math.round(Math.abs(angle) * 4 / Math.PI);
      this.nextColumn = column;
      this.nextMirror = column !== 0 && column !== 4 && angle < 0;
    }
    // Orient in the actor's gravity frame; a camera-facing Three.Sprite would
    // stay upright on screen even when the runner is upside down in Heaven.
    if (!camera.isOrthographicCamera) view.y -= this.height * (FOOT_Y / FRAME_HEIGHT - .5);
    if (view.lengthSq() < 1e-10) view.set(0, 0, 1);
    view.normalize();
    if (Math.hypot(view.x, view.z) > 1e-5) this.right.crossVectors(localUp, view).normalize();
    this.up.crossVectors(view, this.right).normalize();
    group.quaternion.setFromRotationMatrix(this.axes.makeBasis(this.right, this.up, view));

    const contact = state.stepping && !state.reducedMotion ? Number(state.gaitPhase >= .5) : 0;
    const row = state.carrying ? 3 + contact : state.stepping ? 1 + contact : 0;
    this.selectFrame(this.nextColumn ?? 0, row, this.nextMirror ?? false);
    this.frame.flying = state.flying;
    group.updateWorldMatrix(false, false);
    return true;
  }

  selectFrame(column, row, mirror) {
    const frame = this.frame;
    if (frame.column === column && frame.row === row && frame.mirror === mirror) return;
    // UVs are per actor. All players using the same variant share one GPU
    // texture while facing different directions and using different poses.
    const x0 = column / COLUMNS, x1 = (column + 1) / COLUMNS;
    const y0 = 1 - (row + 1) / ROWS, y1 = 1 - row / ROWS;
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
