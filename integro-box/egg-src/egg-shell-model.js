import {BufferGeometry, Float32BufferAttribute, LatheGeometry, Vector2} from 'three';

const radius = polar => .42 * Math.sin(polar) * (1 - .16 * Math.cos(polar));
const height = polar => .567 * Math.cos(polar);

export function shellGeometry() {
  const profile = Array.from({length: 21}, (_, i) => {
    const polar = Math.PI * (1 - i / 20);
    return new Vector2(i === 0 || i === 20 ? 0 : radius(polar), height(polar));
  });
  return new LatheGeometry(profile, 28);
}

// The spots follow the shell curvature and share one mesh across every egg of a given colour.
export function shellSpots() {
  const vertices = [], indices = [];
  function point(polar, yaw) {
    const r = radius(polar) * 1.004;
    vertices.push(r * Math.sin(yaw), height(polar) * 1.004, r * Math.cos(yaw));
  }
  const rings = [[.66, 4], [1.06, 6], [1.48, 7], [1.91, 6], [2.33, 5]];
  for (const [row, [polar, count]] of rings.entries()) {
    for (let i = 0; i < count; i++) {
      const yaw = 2 * Math.PI * i / count + row * .67;
      const size = .032 + .023 * ((i * 3 + row) % 5) / 4;
      const latitude = polar + .06 * Math.sin(3 * i + row);
      const start = vertices.length / 3;
      point(latitude, yaw);
      for (let j = 0; j < 12; j++) {
        const angle = 2 * Math.PI * j / 12;
        point(latitude - Math.sin(angle) * size / .54, yaw + Math.cos(angle) * size / radius(latitude));
        indices.push(start, start + 1 + j, start + 1 + (j + 1) % 12);
      }
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}
