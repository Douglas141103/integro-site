# InterDance

Music, cartoon scenes and 16 solo stages imported from the user-supplied `Integro_Box_Atualizado.html`. Local versus gives Duda (WASD) and Ravi (arrow keys) identical charts, separate scoring and no early elimination. Touch controls support simultaneous pointers. Tied scores are a draw; versus never writes solo records.

- `engine.mjs`: supplied stage, music, drawing and scoring engine.
- `versus.mjs`: independent runs, player controls and winner.
- `concert.mjs`: dark concert stage, fixed downward note lanes and one shared geometry contract for canvas targets and HTML touch pads.
- `app.mjs`: menus, audio lifecycle, family-scoped storage and portal integration.
- `anime-actor.mjs`: 21-bone characters, weighted sleeves/trousers, three-tone materials, edited face normals, inverted hulls and authored graphic textures.
- `anime-motion.mjs`: continuous beat-driven motion with a 30 fps sprite cache and responsive versus layout, independent of the judgment/audio clock.
- `anime-view.mjs`: lazy WebGL 2 renderer with one 384 × 448 transparent surface, four-character LRU cache, context-loss fallback and cleanup on exit.
- `anime-stage.mjs`: legacy stage retained only for compatibility with the imported drawing engine.

Build from the repository root:

```sh
npm ci --prefix integro-box/interdance-src
node integro-box/interdance-src/build.mjs
node --test tests/box-interdance*.test.mjs
```

The portal loads `interdance.js` behind its existing family gate. The separate `interdance-anime.js` bundle is requested only when opening this game. Devices without WebGL 2 keep the illustrated 2D renderer. Audio, note timing, touch input, solo records and versus rules are shared by both renderers. Reduced effects freeze the secondary motion and stabilize notes. No external model/CDN requests occur. The playlist cover is a local WebP asset. The backgrounds remain illustrated 2D, with real 3D characters composited into the Canvas; this is not a replacement of the rhythm engine.

Visual QA on a real WebGL mobile device is required to assess the final lighting, texture appearance and frame rate. Automated tests check all 18 rigs, skin weights, bounded poses, pose cadence, renderer lifecycle, responsive lane separation and the existing rhythm/versus flows.

 Apply `supabase/migrations/20261013150000_box_interdance_usage.sql` for game-level usage reporting. Gameplay requires no database changes. When an older backend rejects this game, the client ends the previous usage interval and does not misattribute dance time to another game; other games keep reporting. Reload after applying the migration.

## Concert redesign — 20261017-dance-stage2

The playlist appears immediately under a compact original cover. Match type, difficulty and artist selection live in the track preparation screen. During songs, the note field is opaque and stable; notes descend toward the touch targets. Portrait versus stacks two full-width control rows so each button stays at least 44 × 44 CSS pixels. The exact canvas and DOM coordinates come from `concertLayout()`.

Chat and Rooms are hidden only while a song is active and return on pause/exit. InterDance has an explicit IntGem shop action in its toolbar and pause screen, replacing the obstructive floating wallet. Audio synthesis, timestamps, judgment windows, family-scoped saves and all 16 charts retain their behavior. The characters have smaller heads and eyes, longer weighted legs and graphic jacket panels; animation follows the music independently from gameplay.

Design research: SEGA’s official COLORFUL STAGE rhythm-game support documentation (song selection, timing and display choices), and W3C WCAG 2.2 Understanding Non-text Contrast / Target Size Minimum. These informed hierarchy and legibility; no third-party game assets were copied.

Checks: real stylesheet computed colors in JSDOM, controls/layout across eight viewport sizes in solo/versus, audio/input/pause/result/storage integration, all 18 rigs and cached renderer lifecycle. Offline SVG/CPU geometry renders were also inspected for composition; they do not validate WebGL shaders, browser layout or actual phone frame rate. A real mobile browser check remains necessary for those qualities.

### Original artwork

`../assets/interdance/cover-v2.webp` was generated with the built-in imagegen tool, then encoded to WebP without aesthetic edits. It is splash artwork, not a screenshot or an assertion about gameplay rendering.

Generation prompt: Original panoramic anime key art for InterDance, landscape 16:9; two original teenage street dancers, fully clothed, on a nighttime music festival stage. Duda: brown skin, dark bob, teal headphones, white/turquoise bomber, navy trousers and white sneakers. Ravi: medium-brown skin, tousled dark hair, coral/navy varsity jacket and white trainers. Cyan/coral spotlights, violet LED rings, restrained city skyline, crisp linework and three-tone cel shadows. Characters on the right two thirds, midnight-blue negative space on the left for HTML title. No text, logo, UI, arrows or watermark.

## Articulated dance — 20261017-dance-rig1

The rig now includes a separate spine, neck, two clavicles and toe joints. Wrists and ankles move independently. Beat-driven step-touch, knee flexion, pelvis weight transfer and counter-rotation of the torso keep dancing visible between notes. Directional gestures have an attack/release envelope and blended upper-body targets; held notes sustain the gesture. Missed notes no longer trigger a directional hit pose.

`dance-kinematics.mjs` solves each leg against a stage-space foot target, keeping the supporting sole at the same floor height and preserving thigh/shin lengths while the pelvis moves. Swing feet return smoothly to planted positions. Rendering is cached at 30 fps; audio, scoring, charts, saves and input retain their existing timing. The 2D compatibility renderer also bends knees, elbows and wrists. Reduced motion freezes all secondary motion and reuses its cached sprite.

Validation: 18 focused tests pass, including all 18 rigs at multiple animation phases, clipping bounds, foot contact and limb lengths over 1,800 poses, responsive layout, audio, solo/versus input, pauses, scoring, storage, rendering cleanup and fallback. Offline CPU projections of representative poses were inspected for geometry; these do not validate WebGL shaders or actual mobile frame rate. No browser QA was available in this session.
