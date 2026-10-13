# InterDance

Music, cartoon scenes and 16 solo stages imported from the user-supplied `Integro_Box_Atualizado.html`. Local versus gives Duda (WASD) and Ravi (arrow keys) identical charts, separate scoring and no early elimination. Touch controls support simultaneous pointers. Tied scores are a draw; versus never writes solo records.

- `engine.mjs`: supplied stage, music, drawing and scoring engine.
- `versus.mjs`: independent runs, player controls, winner and split-screen renderer.
- `app.mjs`: menus, audio lifecycle, family-scoped storage and portal integration.

Build from the repository root:

```sh
node integro-box/craft-src/node_modules/esbuild/bin/esbuild integro-box/interdance-src/app.mjs --bundle --format=esm --target=es2022 --outfile=integro-box/interdance.js
node --test tests/box-interdance*.test.mjs
```

The portal loads only `interdance.js`, behind its existing family gate. Apply `supabase/migrations/20261013150000_box_interdance_usage.sql` for game-level usage reporting. Gameplay requires no database changes. When an older backend rejects this game, the client ends the previous usage interval and does not misattribute dance time to another game; other games keep reporting. Reload after applying the migration.
