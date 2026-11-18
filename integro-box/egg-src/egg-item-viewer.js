import * as THREE from 'three';

export function previewButton(id, name, url) {
  return `<button type="button" class="egg-preview-button" data-egg-preview="${id}" aria-label="Ver ${name} em 3D"><img class="egg-item-icon egg-shop-art" loading="lazy" decoding="async" src="${url}" alt=""><span aria-hidden="true">3D ↻</span></button>`;
}

// Draw on demand in the game's existing WebGL context. The purchase screen's images stay lightweight.
export function createItemViewer(app, getRenderer, makeModel) {
  let dialog, pendingFrame = 0;

  function close() {
    if (dialog?.open) dialog.close();
  }

  function open(id, name, startFromBack) {
    if (dialog || !getRenderer()) return;
    const renderer = getRenderer();
    const scene = new THREE.Scene();
    const pivot = new THREE.Group();
    const model = makeModel(pivot, id);
    if (!model) return;
    scene.add(pivot);
    scene.background = new THREE.Color(0xfff4df);
    scene.add(new THREE.HemisphereLight(0xfffcf4, 0xb6bfd1, 1.8));
    const light = new THREE.DirectionalLight(0xfff2dc, 2);
    light.position.set(-3, 5, -4);
    scene.add(light);
    const bounds = new THREE.Box3().setFromObject(model);
    const sphere = bounds.getBoundingSphere(new THREE.Sphere());
    const camera = new THREE.PerspectiveCamera(31, 1, .01, 120);
    model.position.sub(sphere.center);
    const distance = Math.max(.3, sphere.radius) / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.04;
    let yaw = startFromBack ? .48 : Math.PI - .48, pitch = .22, lastPointer;

    dialog = document.createElement('dialog');
    dialog.className = 'egg-item-viewer';
    dialog.setAttribute('aria-labelledby', 'eggPreviewTitle');
    dialog.innerHTML = '<h3 id="eggPreviewTitle"></h3><canvas width="320" height="320" tabindex="0" aria-label="Modelo 3D. Arraste ou use as setas para girar."></canvas><div><button type="button" aria-label="Girar para a esquerda">↶</button><button type="button" aria-label="Girar para a direita">↷</button><button type="button" autofocus>Fechar</button></div>';
    dialog.querySelector('h3').textContent = name;
    app.append(dialog);
    const canvas = dialog.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const pixels = ctx.createImageData(size, size);
    const bytes = new Uint8Array(pixels.data.buffer);
    const target = new THREE.WebGLRenderTarget(size, size, {colorSpace: THREE.SRGBColorSpace});
    function draw() {
      pendingFrame = 0;
      camera.position.setFromSphericalCoords(distance, Math.PI / 2 - pitch, yaw);
      camera.lookAt(0, 0, 0);
      const previous = renderer.getRenderTarget();
      try {
        renderer.setRenderTarget(target);
        renderer.render(scene, camera);
        renderer.readRenderTargetPixels(target, 0, 0, size, size, bytes);
      } finally {
        renderer.setRenderTarget(previous);
      }
      ctx.putImageData(pixels, 0, 0);
    }
    function turn(dx, dy = 0) {
      yaw -= dx;
      pitch = THREE.MathUtils.clamp(pitch + dy, -1.15, 1.15);
      if (!pendingFrame) pendingFrame = requestAnimationFrame(draw);
    }
    canvas.onpointerdown = event => {
      lastPointer = [event.clientX, event.clientY];
      canvas.setPointerCapture(event.pointerId);
    };
    canvas.onpointermove = event => {
      if (!lastPointer || !canvas.hasPointerCapture(event.pointerId)) return;
      turn((event.clientX - lastPointer[0]) * .014, (event.clientY - lastPointer[1]) * .012);
      lastPointer = [event.clientX, event.clientY];
    };
    canvas.onlostpointercapture = () => { lastPointer = null; };
    dialog.onkeydown = event => {
      event.stopPropagation();
      const deltas = {ArrowLeft:[-.32,0], ArrowRight:[.32,0], ArrowUp:[0,.18], ArrowDown:[0,-.18]};
      if (deltas[event.key]) {event.preventDefault();turn(...deltas[event.key]);}
    };
    const [left,right,done] = dialog.querySelectorAll('button');
    left.onclick = () => turn(-.45);
    right.onclick = () => turn(.45);
    done.onclick = close;
    dialog.onclose = () => {
      if (pendingFrame) cancelAnimationFrame(pendingFrame);
      pendingFrame = 0;
      target.dispose();
      model.userData.dispose?.();
      dialog.remove();
      dialog = null;
    };
    dialog.showModal();
    draw();
  }
  return {open, close};
}
