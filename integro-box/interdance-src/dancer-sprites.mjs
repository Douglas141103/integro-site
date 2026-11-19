// Indices in every four-by-four dancer sheet, read from left to right.
const STEP = [0, 2, 14, 12, 14, 2, 12, 0];
const SHUFFLE = [14, 9, 12, 11, 14, 12, 9, 0];
const LOCK = [1, 13, 2, 13, 1, 14, 13, 0];
const REACH = [2, 3, 5, 12, 3, 5, 2, 14];
const DIP = [14, 2, 4, 4, 14, 15, 4, 14];
const WAVE = [8, 12, 10, 10, 2, 13, 1, 14];
const TURN = [2, 6, 7, 7, 8, 8, 12, 14];
const LUNGE = [12, 14, 15, 1, 11, 9, 12, 14];

// Each score is a 32-beat loop with eight four-beat phrases. The two
// dancers follow the same music but enter different, complementary phrases.
const SCORES = {
  pop:      [STEP, REACH, SHUFFLE, TURN, LOCK, DIP, WAVE, LUNGE],
  electro:  [LOCK, STEP, WAVE, SHUFFLE, DIP, TURN, REACH, LUNGE],
  tropical: [SHUFFLE, WAVE, STEP, TURN, LUNGE, REACH, DIP, LOCK],
  forest:   [WAVE, STEP, TURN, REACH, DIP, LUNGE, SHUFFLE, LOCK],
  funk:     [DIP, LOCK, SHUFFLE, STEP, REACH, LUNGE, TURN, WAVE],
  rock:     [LUNGE, REACH, DIP, LOCK, TURN, WAVE, STEP, SHUFFLE],
  crystal:  [TURN, WAVE, REACH, STEP, SHUFFLE, LUNGE, DIP, LOCK],
  chip:     [LOCK, SHUFFLE, DIP, STEP, LUNGE, REACH, WAVE, TURN],
  finale:   [REACH, TURN, LUNGE, SHUFFLE, WAVE, LOCK, DIP, STEP],
};

export function dancerSlug(artist) {
  return artist.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-');
}

export function dancerFrame(beat, person, lane, mirrored, cue) {
  if (cue.reduced) return 0;
  const musicBeat = Math.max(0, beat - 4);
  const score = SCORES[cue.groove] || SCORES[person.groove] || SCORES.pop;
  const stageOffset = Math.floor((cue.stageId ?? person.id ?? 0) / 3);
  const phrase = score[(Math.floor(musicBeat / 4) + stageOffset + (mirrored ? 1 : 0)) % score.length];
  const slot = Math.floor(musicBeat * 2) % phrase.length;
  const seconds = beat * 60 / (person.bpm || 140);
  const age = seconds - cue.at;
  // Leave the facing changes of a pivot legible; tap accents are short so
  // the underlying footwork also remains visible in the faster charts.
  if (lane >= 0 && lane < 4 && age >= 0 && age < Math.max(.115, cue.duration || 0) && (cue.duration > 0 || phrase !== TURN)) {
    return [mirrored ? 1 : 15, 4, 5, mirrored ? 15 : 1][lane];
  }
  return beat < 4 ? STEP[Math.floor(beat * 2) % STEP.length] : phrase[slot];
}

export function createSpritePainter({onReady = () => {}, createImage = () => new Image()} = {}) {
  const sheets = new Map();
  let disposed = false;
  let reduced = false;

  function release(entry) {
    entry.image.onload = null;
    entry.image.onerror = null;
  }

  function sheetFor(artist) {
    let entry = sheets.get(artist);
    if (entry) {
      sheets.delete(artist);
      sheets.set(artist, entry);
      return entry;
    }
    if (sheets.size === 4) {
      const [oldest, oldEntry] = sheets.entries().next().value;
      release(oldEntry);
      sheets.delete(oldest);
    }
    const image = createImage();
    entry = {image, ready: false};
    sheets.set(artist, entry);
    image.decoding = 'async';
    image.onload = () => {
      if (disposed) return;
      entry.ready = image.naturalWidth > 0 && image.naturalHeight > 0 &&
        image.naturalWidth % 4 === 0 && image.naturalHeight % 4 === 0;
      onReady();
    };
    image.src = './assets/interdance/dancers-v1/' + dancerSlug(artist) + '.webp';
    return entry;
  }

  return {
    name: 'sprites',
    setOptions(options) { reduced = !!options.reduced; },
    draw(ctx, x, y, size, person, beat = 0, lane = -1, mirrored = false, cue = {}) {
      if (disposed) return false;
      const entry = sheetFor(person.artist);
      if (!entry.ready) return false;
      const still = reduced || cue.reduced;
      const index = dancerFrame(beat, person, lane, mirrored, {...cue, reduced: still});
      const {image} = entry;
      const width = image.naturalWidth / 4;
      const height = image.naturalHeight / 4;
      const sway = still ? 0 : Math.sin(beat * Math.PI / 2) * size * .021;
      const pulse = still ? 0 : (1 - Math.cos(beat * Math.PI * 2)) * .009;
      const stretch = size * 1.06;
      ctx.save();
      try {
        ctx.translate(x + sway, y + size);
        ctx.scale((mirrored ? -1 : 1) * (1 + pulse * .45), 1 - pulse);
        if (person.monochrome) ctx.filter = 'grayscale(' + person.monochrome + ')';
        const drawWidth = stretch * width / height;
        ctx.drawImage(image, index % 4 * width, Math.floor(index / 4) * height,
          width, height, -drawWidth / 2, -stretch, drawWidth, stretch);
      } finally {
        ctx.restore();
      }
      return true;
    },
    dispose() {
      disposed = true;
      for (const entry of sheets.values()) release(entry);
      sheets.clear();
    },
  };
}
