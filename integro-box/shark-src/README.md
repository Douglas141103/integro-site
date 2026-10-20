# Shark — Integro Box

Free-swimming cartoon WebGL 2 game. Open the existing authenticated catalog and select Shark. No automatic game launch. The lightweight catalog loader imports the Three.js bundle only after selection.

- Ocean: 1,800 × 1,200 world meters, six geographically distinct regions, free vertical movement, landmarks, pearls, regional predators, discoverable destinations and sonar map.
- Growth: 60 evolutions, strictly smaller prey, physical growth, XP carryover, automatic eating and five one-time missions.
- Every fish: forty actual `THREE.Bone` joints bound to skinned geometry: twenty spine joints, ten pectoral joints, three dorsal, six tail and one jaw. All forty joints have positive vertex weights and animate.
- Shop: twelve entries, three-tier speed and growth upgrades, sonar, pearl magnet, consumable shields, five skins and two accessories. Earned Shark coins only; no real-money debits or IntGem conversion.
- Progress is scoped to the existing authenticated `BoxStorage` account on this browser. It is not cloud synchronized. Local storage failures are reported in pause settings. Existing portal usage tracking records Shark and excludes paused time.
- Input: WASD/arrows and joystick; E/Q or on-screen depth buttons; Space/Shift or held impulse button; drag to orbit and wheel to zoom. Lost focus pauses and clears held controls.

## Build and check

From this directory: `npm ci` then `npm run build`. From repository root after installing its dev dependencies: `node --test tests/shark.test.mjs tests/shark-ui.test.mjs tests/box-navigation-ui.test.mjs`.

Automated checks cover the economy, progression, map, corruption recovery, all forty weighted joints, animation deformation, UI navigation, catalog integration and existing game navigation. Interactive browser/WebGL visual QA was unavailable in the implementation environment; no device FPS claims are made.

## Cover art

Final asset: `../assets/catalog-v1/shark.webp`. Generated with the built-in image generation tool using the existing Integro Rush cover as a style reference, then encoded as WebP. The same asset appears in both the public game list and the authenticated catalog.

Prompt: Create a landscape 1536×1024 Shark cover for Integro Box matching the reference's polished colorful 3D cartoon illustration and glossy rounded beveled lettering with dark navy outlines. A lovable turquoise shark with expressive eyes swims through a rich underwater coral garden chasing three smaller colorful fish. Include bubbles, golden pearl coins, cyan sunbeams, pink/orange coral, and distant sunken ship and temple silhouettes. Large central shark, readable at thumbnail size. Exact text: “SHARK” across the lower third and smaller “INTEGRO BOX” above. Full ocean background, safe text margins, no buttons, no gore, no other game names.
