# Blue World — Campos do Orvalho

First playable chapter of the Blue World plan: three side-scrolling traversal stages and Bront's guardian encounter. The other five worlds are explicitly marked as future content in the menu.

## Build

Run `npm ci` and `npm run build` in this directory (Node 22 or newer). Dependencies are pinned and the generated `../blue-world.js` is committed for the existing static GitHub Pages deployment. The small `../blue-loader.js` registers the catalog card and loads the 3D bundle only when selected.

## Structure

- `levels.mjs`: authored collision geometry, checkpoints, seeds, story and signs.
- `engine.mjs`: deterministic 60 Hz simulation, collisions, jump buffer/coyote time, crouching, moving platforms, pulse, recovery, and boss state machine. No rendering dependency.
- `actor.mjs`: 56-bone Blue rig, blended limb weights, edited face normals, three-tone ramp, normal-extruded inverted hull and sampled poses. Continuous world movement is independent of pose cadence.
- `scene.mjs`: Three.js scenery, reusable materials, spatial geometry batches, moving landmarks and particles. No external CDN or model fetches. Graphics are procedural; a Blender-authored GLB is a future art replacement, not claimed as an included asset.
- `entry.mjs`: touch and keyboard controls, story, map, settings, local account-scoped save, pause/lifecycle, original synthesized music and accessibility settings.

Save key `blue-world-v1` uses the portal's `BoxStorage`, so it is scoped to the signed-in account. Checkpoints and unique collected seed IDs persist locally; no cross-device progress synchronization is claimed. No IntGem or monetized currency is awarded.

Graphics require WebGL 2. The renderer is disposed on exit and rebuilt on reopening. `BoxBlueRuntime` exposes active/playing/pause/persist for portal lifecycle; `IntegroBlue.getState()` provides read-only diagnostic state. Keyboard: arrows or A/D, Space/W/Up for variable jump, X/E for Pulse, S/Down to crouch, Escape to pause.

## Validation

From the repository root: `node --test tests/blue-world*.test.mjs`. Tests cover mechanics, corruption-safe save parsing, all four complete routes through normal controls, 56-bone geometry, DOM menu/input/lifecycle, and the usage migration's access restrictions.

`render-art.mjs /absolute/output/path` projects the actual meshes to SVG using the root development dependency jsdom. It bakes skinning and uses Lambert materials without inverted hull for the SVG renderer. These offline illustrations review geometry and supply catalog art; they are not WebGL screenshots or browser QA. Rasterize the resulting `cover.svg` to `../assets/blue-world-cover.webp`.

Before expanding beyond this chapter, validate WebGL shader appearance, sustained frame time, safe areas and multi-touch on an actual intermediate Android device. The current environment had no supported browser QA capability.
