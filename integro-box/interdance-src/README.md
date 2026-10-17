# InterDance

Music, cartoon scenes and 16 solo stages imported from the user-supplied `Integro_Box_Atualizado.html`. Local versus gives Duda (WASD) and Ravi (arrow keys) identical charts, separate scoring and no early elimination. Touch controls support simultaneous pointers. Tied scores are a draw; versus never writes solo records.

- `engine.mjs`: supplied stage, music, drawing and scoring engine.
- `versus.mjs`: independent runs, player controls, winner and split-screen renderer.
- `app.mjs`: menus, audio lifecycle, family-scoped storage and portal integration.
- `anime-actor.mjs`: 15-bone characters, weighted sleeves/trousers, three-tone materials, edited face normals, inverted hulls and authored graphic textures.
- `anime-motion.mjs`: 12 fps pose clock and responsive versus layout, independent of the judgment/audio clock.
- `anime-view.mjs`: lazy WebGL 2 renderer with one 384 × 448 transparent surface, four-character LRU cache, context-loss fallback and cleanup on exit.
- `anime-stage.mjs`: illustrated stage dressing behind the gameplay layer.

Build from the repository root:

```sh
npm ci --prefix integro-box/interdance-src
node integro-box/interdance-src/build.mjs
node --test tests/box-interdance*.test.mjs
```

The portal loads `interdance.js` behind its existing family gate. The separate `interdance-anime.js` bundle is requested only when opening this game. Devices without WebGL 2 keep the illustrated 2D renderer. Audio, note timing, touch input, solo records and versus rules are shared by both renderers. Reduced effects freeze the secondary motion and stabilize notes. No external model/CDN requests or asset downloads occur. The backgrounds remain illustrated 2D, with real 3D characters composited into the Canvas; this is not a replacement of the rhythm engine.

Visual QA on a real WebGL mobile device is required to assess the final lighting, texture appearance and frame rate. Automated tests check all 18 rigs, skin weights, bounded poses, pose cadence, renderer lifecycle, responsive lane separation and the existing rhythm/versus flows.

 Apply `supabase/migrations/20261013150000_box_interdance_usage.sql` for game-level usage reporting. Gameplay requires no database changes. When an older backend rejects this game, the client ends the previous usage interval and does not misattribute dance time to another game; other games keep reporting. Reload after applying the migration.
