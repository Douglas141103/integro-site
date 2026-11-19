import test from 'node:test';
import assert from 'node:assert/strict';
import {DanceAudio, generateSong, stages} from '../integro-box/interdance-src/engine.mjs';

for (const [index, title] of ['Pirouette on the Grid', 'Asphalt Glider'].entries()) {
  test(title + ' follows its recording grid and natural ending', () => {
    assert.equal(stages[index].recording.title, title);
    for (const mode of ['easy', 'normal']) {
      const song = generateSong(stages[index], mode);
      const {gridOffset, duration} = song.stage.recording;
      assert.equal(song.duration, duration);
      assert.equal(song.opponent[0].time, gridOffset + 4 * song.beat);
      assert.equal(song.notes[0].time, gridOffset + 12 * song.beat);
      for (const note of [...song.notes, ...song.opponent]) {
        const beat = (note.time - gridOffset) / song.beat;
        assert.ok(Math.abs(beat - Math.round(beat)) < 1e-8);
        assert.ok(note.time + note.hold < duration);
      }
    }
  });
}

test('the player decodes the recording, reuses it, and discards stale decoding on exit', async t => {
  const song = generateSong(stages[0]);
  const audio = new DanceAudio();
  const bytes = new ArrayBuffer(12);
  const decoded = {duration: song.duration};
  let calls = 0, decodedStarted, finishDecode;
  t.mock.method(globalThis, 'fetch', async url => {
    assert.equal(url, song.stage.recording.url);
    calls++;
    return {ok:true, arrayBuffer: async () => bytes};
  });
  audio.context = {decodeAudioData: async input => {assert.equal(input, bytes); return decoded;}};
  assert.equal(await audio.render(song), true);
  assert.equal(audio.buffer, decoded);
  audio.stop();
  assert.equal(await audio.render(song), true);
  assert.equal(calls, 1);
  audio.dispose();
  const started = new Promise(resolve => {decodedStarted = resolve;});
  audio.context.decodeAudioData = () => {decodedStarted(); return new Promise(resolve => {finishDecode = resolve;});};
  const pending = audio.render(song);
  await started;
  audio.dispose();
  finishDecode(decoded);
  assert.equal(await pending, false);
  assert.equal(audio.buffer, null);
});
