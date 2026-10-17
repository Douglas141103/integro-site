// integro-box/interdance-src/engine.mjs
var characterPainter = null;
function setCharacterPainter(painter) {
  characterPainter = painter;
}
var laneColors = ["#be8cff", "#69deee", "#b3ee70", "#ff8fae"];
var $k = [["Primeiro passo", "P\xE1tio da escola", "Lia", 88, 60, "major", "school", "#ffd97b", "#7ba4e5", "cap", [0, 2, 4, 2, 1, 3, 2, 0], [0, 3, 4, 0], "pop"], ["Rua de neon", "Centro da cidade", "Nico", 94, 62, "minor", "city", "#84f4df", "#bb80f0", "phones", [0, 3, 2, 5, 4, 2, 1, 0], [0, 5, 3, 4], "electro"], ["Brisa em sincopa", "Praia dourada", "Sol", 98, 65, "major", "beach", "#ffc581", "#69c4dc", "flower", [4, 2, 0, 1, 2, 4, 5, 2], [0, 4, 3, 0], "tropical"], ["Circuito azul", "Oficina dos rob\xF4s", "Bit", 104, 57, "dorian", "lab", "#7bf6ed", "#6a88cc", "robot", [0, 0, 4, 6, 3, 4, 1, 2], [0, 3, 0, 4], "electro"], ["Ra\xEDzes do som", "Floresta encantada", "Iara", 106, 64, "minor", "forest", "#b1ef9c", "#4fa392", "leaf", [0, 2, 3, 5, 3, 2, 6, 4], [0, 5, 2, 4], "forest"], ["Roda de cores", "Feira dos brinquedos", "T\xE9o", 110, 67, "major", "fair", "#f8c488", "#d886ad", "cap", [2, 4, 5, 4, 2, 0, 1, 3], [0, 3, 1, 4], "funk"], ["Capivara groove", "Margem do rio", "Capi DJ", 112, 60, "pent", "river", "#dcc48d", "#71c0ab", "capybara", [0, 1, 3, 2, 4, 3, 1, 0], [0, 2, 3, 0], "tropical"], ["Fagulha", "Palco do vulc\xE3o", "Brasa", 116, 59, "minor", "volcano", "#ffb177", "#be636d", "flame", [0, 4, 3, 2, 6, 5, 3, 1], [0, 5, 3, 4], "rock"], ["Cristal em movimento", "Lago congelado", "\xCDris", 120, 66, "major", "ice", "#a6e6ff", "#9f99e5", "crown", [4, 6, 5, 2, 3, 1, 2, 0], [0, 4, 1, 3], "crystal"], ["Onda retr\xF4", "Fliperama espacial", "Pixel", 124, 61, "dorian", "arcade", "#df9cff", "#7973ba", "robot", [0, 2, 5, 6, 4, 1, 3, 2], [0, 3, 4, 2], "chip"], ["Jardim suspenso", "Estufa nas nuvens", "Flora", 128, 69, "pent", "garden", "#d1f29b", "#cf89aa", "flower", [2, 3, 1, 4, 0, 2, 4, 3], [0, 2, 3, 1], "forest"], ["Expresso da batida", "Esta\xE7\xE3o lunar", "Tril", 132, 63, "minor", "station", "#ffe095", "#8e97c3", "visor", [0, 3, 4, 1, 5, 2, 6, 4], [0, 5, 3, 2], "funk"], ["\xD3rbita lil\xE1s", "Observat\xF3rio", "Luna", 136, 68, "minor", "space", "#d6b7ff", "#7b83c9", "star", [0, 4, 2, 6, 3, 5, 1, 4], [0, 3, 5, 4], "electro"], ["Chuva de confete", "Carnaval de estrelas", "Mika", 140, 65, "major", "carnival", "#ffc89f", "#df86bb", "feather", [4, 2, 5, 3, 6, 4, 1, 2], [0, 3, 4, 1], "tropical"], ["Aurora el\xE9trica", "Montanha da aurora", "Aurora", 146, 62, "dorian", "aurora", "#96f5e2", "#9b81d1", "crown", [0, 2, 6, 4, 5, 3, 1, 6], [0, 4, 3, 5], "crystal"], ["Todo mundo dan\xE7a", "Festival Integro", "Maestro Box", 152, 60, "major", "festival", "#f5df92", "#c18ae8", "box", [0, 4, 2, 5, 3, 6, 4, 0], [0, 3, 5, 4], "finale"]];
var stages = $k.map((E, A) => ({ id: A, week: A + 1, title: E[0], place: E[1], artist: E[2], bpm: 140 + A * 4, key: E[4], scale: E[5], theme: E[6], accent: E[7], color: E[8], look: E[9], motif: E[10], chords: E[11], groove: E[12], bars: A < 8 ? 32 : 40, skin: ["#c58c6c", "#f2cda3", "#9c6954", "#deb084"][A % 4], hair: ["#493e52", "#322d44", "#865742", "#413e59"][A % 4] }));
var _k = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10], pent: [0, 2, 4, 7, 9] };
var lI = (E, A, g = 0) => {
  let B = _k[E.scale], I = (A % B.length + B.length) % B.length;
  return E.key + B[I] + Math.floor(A / B.length) * 12 + g * 12;
};
function generateSong(E, A = "normal") {
  let g = 60 / E.bpm, B = [], I = [], C = [], Q = 0, M = (w, G, D, i, s = 0.12, k = 0) => B.push({ at: w * g, duration: G * g, midi: D, voice: i, amp: s, pan: k });
  for (let w = 0; w < 4; w++) M(w, 0.08, w === 3 ? 84 : 72, "count", 0.13);
  for (let w = 0; w < E.bars; w++) {
    let G = 4 + w * 4, D = Math.floor(w / 8), i = E.chords[Math.floor(w / 2) % 4], s = w % 4 >= 2;
    for (let h of [0, 2, 4]) M(G, 3.7, lI(E, i + h, -1), "pad", 0.03, (h - 2) * 0.24);
    let k = E.groove === "funk" ? [0, 1.5, 2, 3.5] : E.groove === "tropical" ? [0, 1.5, 2.5, 3.5] : [0, 1, 2, 3];
    for (let h of k) M(G + h, 0.42, lI(E, i + (h === 3 ? 4 : 0), -2), "bass", 0.24), M(G + h + 0.5, 0.23, lI(E, i, -1), "bass", 0.1);
    for (let h of [0, 1, 2, 3]) M(G + h, 0.3, 36, "kick", 0.48);
    for (let h of [1, 3]) M(G + h, 0.18, 0, "snare", 0.25), M(G + h + 0.015, 0.13, 0, "clap", 0.13, -0.12);
    for (let h = 0; h < 8; h++) M(G + h * 0.5, 0.07, 0, "hat", h % 2 ? 0.07 : 0.1, h % 2 ? 0.3 : -0.3);
    if (["tropical", "forest", "funk"].includes(E.groove)) for (let h of [0.75, 1.75, 2.5, 3.25]) M(G + h, 0.15, lI(E, i, -1), "wood", 0.1, 0.4);
    for (let h = 0; h < 8; h++) M(G + h * 0.5 + 0.25, 0.19, lI(E, i + [0, 2, 4, 6, 4, 2, 5, 2][h], 1), "pluck", w >= 16 ? 0.075 : 0.045, h % 2 ? 0.4 : -0.4);
    for (let h of [0.5, 1.5, 2.5, 3.5]) M(G + h, 0.22, 0, "openhat", 0.065, 0.25);
    if (w % 8 === 7) for (let h = 0; h < 8; h++) M(G + 2 + h * 0.25, 0.09, 0, "snare", 0.045 + h * 9e-3, h % 2 ? 0.2 : -0.2);
    if (w % 8 === 0 && w > 0 && M(G, 0.9, 0, "crash", 0.15), w >= 16) for (let h of [0.5, 1.5, 2.5, 3.5]) for (let J of [0, 2, 4]) M(G + h, 0.32, lI(E, i + J), "saw", 0.033, (J - 2) * 0.2);
    let e = E.id < 3 ? [0, 2, 4, 6] : E.id < 7 ? [0, 2, 3, 4, 6] : E.id < 11 ? [0, 1, 2, 4, 5, 6] : [0, 1, 2, 3, 4, 5, 6, 7];
    E.id >= 11 && w % 8 === 3 && (e = e.filter((h) => h !== 7));
    for (let h of e) {
      let J = E.motif[(h + w % 2 * 2 + D) % 8], c = (J + w % 2) % 4, m = E.id >= 5 && h === 6 && w % 4 === 3 && e.at(-1) === 6 ? 0.7 : 0, S = (G + h * 0.5) * g;
      M(G + h * 0.5, m || 0.32, lI(E, J, 0), s ? "answer" : E.groove === "crystal" ? "bell" : "lead", 0.14, s ? 0.18 : -0.18);
      let a = { id: Q++, lane: c, time: S, hold: m * g };
      s ? (A !== "easy" || h % 2 === 0) && I.push(a) : C.push(a);
    }
  }
  let Y = 4 + E.bars * 4;
  for (let w of [0, 2, 4]) M(Y, 2, lI(E, w, 0), "bell", 0.08);
  return B.sort((w, G) => w.at - G.at), { events: B, notes: I, opponent: C, duration: (Y + 3) * g, beat: g, stage: E, mode: A };
}
function sanitizeProgress(E) {
  let A = { reducedEffects: E?.reducedEffects === true, mode: E?.mode === "easy" ? "easy" : "normal", volume: Math.max(0, Math.min(1, Number.isFinite(E?.volume) ? E.volume : 0.6)), offset: Math.max(-250, Math.min(250, Number.isFinite(E?.offset) ? E.offset : 0)), best: {} };
  for (let g of stages) for (let B of ["easy", "normal"]) for (let I of ["", "-remix"]) {
    let C = g.id + "-" + B + I, Q = E?.best?.[C];
    Q && Number.isFinite(Q.score) && Number.isFinite(Q.accuracy) && (A.best[C] = { score: Math.max(0, Math.floor(Q.score)), accuracy: Math.max(0, Math.min(100, Q.accuracy)), stars: Math.max(0, Math.min(3, Math.floor(Q.stars) || 0)) });
  }
  return A;
}
var RhythmRun = class {
  constructor(A, g = false) {
    this.song = A, this.notes = A.notes.map((B) => ({ ...B, state: "waiting", grade: 0 })), this.window = A.mode === "easy" ? 0.23 : 0.16, this.practice = g, this.held = /* @__PURE__ */ new Set(), this.time = 0, this.score = 0, this.combo = 0, this.maxCombo = 0, this.energy = 65, this.hits = 0, this.misses = 0, this.ghosts = 0, this.earned = 0, this.possible = this.notes.reduce((B, I) => B + 1 + (I.hold ? 0.5 : 0), 0), this.status = "playing", this.last = { text: "Prepare-se", lane: -1, at: -10 };
  }
  feedback(A, g, B) {
    this.last = { text: A, lane: g, at: B };
  }
  hit(A, g) {
    if (this.status !== "playing" || this.held.has(A) || A < 0 || A > 3 || (this.update(g), this.status !== "playing")) return false;
    if (this.held.add(A), this.notes.find((M) => M.state === "holding" && M.lane === A)) return true;
    let I = this.notes.find((M) => M.state === "waiting" && M.lane === A && Math.abs(M.time - g) <= this.window);
    if (!I) return g >= 4 * this.song.beat && (this.ghosts++, this.combo = 0, this.energy = Math.max(0, this.energy - 1), this.feedback("No ritmo!", A, g)), false;
    let C = Math.abs(I.time - g), Q = C <= 0.055 ? 1 : C <= 0.11 ? 0.8 : 0.5;
    return I.grade = Q, I.state = I.hold ? "holding" : "hit", this.earned += Q, this.score += Math.round(1e3 * Q), this.hits++, this.combo++, this.maxCombo = Math.max(this.maxCombo, this.combo), this.energy = Math.min(100, this.energy + 2.5), this.feedback(Q === 1 ? "PERFEITO!" : Q === 0.8 ? "MUITO BEM!" : "BOA!", A, g), true;
  }
  release(A, g) {
    this.update(g), this.held.delete(A);
    for (let B of this.notes) B.lane === A && B.state === "holding" && (g < B.time + B.hold - 0.075 ? (B.state = "broken", this.combo = 0, this.energy = Math.max(0, this.energy - 3), this.feedback("Segure a seta", A, g)) : this.finishHold(B));
  }
  finishHold(A) {
    A.state = "hit", this.earned += 0.5, this.score += 500;
  }
  update(A) {
    if (this.status === "playing") {
      this.time = Math.max(this.time, A);
      for (let g of this.notes) g.state === "waiting" && A > g.time + this.window ? (g.state = "miss", this.misses++, this.combo = 0, this.energy = Math.max(0, this.energy - 4), this.feedback("Continue!", g.lane, A)) : g.state === "holding" && A >= g.time + g.hold && (this.held.has(g.lane) ? this.finishHold(g) : (g.state = "broken", this.combo = 0, this.energy = Math.max(0, this.energy - 3)));
      this.energy <= 0 && !this.practice ? this.status = "failed" : A >= this.song.duration - 0.15 && (this.status = "finished");
    }
  }
  get liveAccuracy() {
    let A = this.notes.reduce((g, B) => g + (B.state === "waiting" ? 0 : 1 + (B.hold && B.state !== "holding" ? 0.5 : 0)), 0);
    return A ? 100 * this.earned / A : 0;
  }
  get accuracy() {
    return this.possible ? 100 * this.earned / this.possible : 0;
  }
  result() {
    let A = this.accuracy, g = this.status === "finished" && A >= 55;
    return { score: this.score, accuracy: A, passed: g, stars: g ? A >= 92 ? 3 : A >= 75 ? 2 : 1 : 0, combo: this.maxCombo, hits: this.hits, misses: this.misses, ghosts: this.ghosts, practice: this.practice };
  }
};
async function synthesize(E, { sampleRate: A = 22050, progress: g = () => {
}, cancelled: B = () => false } = {}) {
  let I = Math.ceil((E.duration + 0.4) * A), C = new Float32Array(I), Q = new Float32Array(I), M = 100 + E.stage.id, Y = 0;
  for (let w = 0; w < E.events.length; w++) {
    if (w % 48 === 0) {
      if (B()) return null;
      g(w / E.events.length), await new Promise((m) => setTimeout(m, 0));
    }
    let G = E.events[w], D = Math.round(G.at * A), i = Math.max(0.035, G.duration), s = Math.min(I - D, Math.ceil(i * A)), k = 440 * 2 ** ((G.midi - 69) / 12), e = Math.max(-1, Math.min(1, G.pan || 0)), h = Math.cos((e + 1) * Math.PI / 4), J = Math.sin((e + 1) * Math.PI / 4), c = G.voice === "pad" ? 0.09 : 5e-3;
    for (let m = 0; m < s; m++) {
      let S = m / A, a = S / i, n = k * S, T = 2 * Math.PI * n, U;
      if (G.voice === "kick") U = Math.sin(2 * Math.PI * (43 * S + 102 / 30 * (1 - Math.exp(-30 * S))));
      else if (["snare", "hat", "openhat", "crash", "clap"].includes(G.voice)) {
        M = Math.imul(M, 1664525) + 1013904223 >>> 0;
        let CA = M / 2147483648 - 1;
        U = ["hat", "openhat", "crash"].includes(G.voice) ? (CA - Y) * 0.5 : G.voice === "clap" ? CA * (0.55 + 0.45 * Math.sin(S * 110) ** 2) : CA * 0.8 + Math.sin(2 * Math.PI * 190 * S) * 0.2, Y = CA;
      } else if (G.voice === "pad") U = Math.sin(T) * 0.85 + Math.sin(T * 1.003) * 0.15;
      else if (G.voice === "bass") U = (1 - 4 * Math.abs(Math.round(n) - n)) * 0.8 + Math.sin(T) * 0.2;
      else if (G.voice === "wood") U = Math.sin(T * (1 - 0.12 * a)) * Math.exp(-5 * a);
      else if (G.voice === "bell") U = (Math.sin(T) + 0.3 * Math.sin(T * 2.01) + 0.12 * Math.sin(T * 3.98)) / 1.42;
      else if (G.voice === "pluck") U = (Math.sin(T) + 0.45 * Math.sin(T * 2) + 0.2 * Math.sin(T * 3)) / 1.65;
      else if (G.voice === "saw") {
        U = 0;
        for (let CA = 1; CA <= 6; CA++) U += Math.sin(T * CA) / CA;
        U *= 0.5;
      } else if (G.voice === "count") U = Math.sin(T);
      else {
        let CA = 1 - 4 * Math.abs(Math.round(n) - n);
        U = G.voice === "answer" ? CA * 0.8 + Math.sin(T * 2) * 0.2 : E.stage.groove === "chip" ? n % 1 < 0.3 ? 0.65 : -0.28 : CA;
      }
      let l = ["kick", "snare", "hat", "openhat", "crash", "clap"].includes(G.voice), x = Math.min(1, S / c) * Math.min(1, (i - S) / 0.025) * Math.exp(-(l ? 6 : G.voice === "pad" ? 0.8 : 2) * a), K = ["pad", "saw", "bass"].includes(G.voice) ? 0.6 + 0.4 * Math.min(1, (G.at + S) / E.beat % 1 * 3) : 1, _ = U * x * G.amp * K;
      C[D + m] += _ * h, Q[D + m] += _ * J;
    }
  }
  for (let w = 0; w < I; w++) C[w] = Math.tanh(C[w] * 1.2) * 0.9, Q[w] = Math.tanh(Q[w] * 1.2) * 0.9;
  return g(1), { left: C, right: Q, sampleRate: A, length: I };
}
var DanceAudio = class {
  constructor() {
    this.context = null, this.source = null, this.buffer = null, this.anchor = 0, this.offset = 0, this.running = false, this.generation = 0, this.volume = 0.6;
  }
  async unlock() {
    if (!this.context) {
      let A = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!A) throw new Error("Este navegador n\xE3o oferece \xE1udio para o jogo. Abra em um navegador atualizado.");
      this.context = new A({ latencyHint: "interactive" }), this.master = this.context.createGain(), this.master.gain.value = this.volume * 0.75;
      let g = this.context.createDynamicsCompressor();
      g.threshold.value = -8, g.knee.value = 12, g.ratio.value = 8, this.master.connect(g), g.connect(this.context.destination);
    }
    if (await this.context.resume(), this.context.state !== "running") throw new Error("Toque novamente em Jogar para ativar o som.");
  }
  async render(A, g) {
    let B = ++this.generation, I = await synthesize(A, { progress: g, cancelled: () => B !== this.generation });
    if (!I || B !== this.generation) return false;
    let C = this.context.createBuffer(2, I.length, I.sampleRate);
    return C.getChannelData(0).set(I.left), C.getChannelData(1).set(I.right), this.buffer = C, true;
  }
  setVolume(A) {
    this.volume = A, this.master && this.master.gain.setTargetAtTime(A * 0.75, this.context.currentTime, 0.025);
  }
  play(A = 0, g = 0.15) {
    this.stopSource(), this.offset = A, this.anchor = this.context.currentTime + g;
    let B = this.context.createBufferSource();
    B.buffer = this.buffer, B.connect(this.master), B.start(this.anchor, Math.max(0, A)), this.source = B, this.running = true;
  }
  position() {
    return this.running ? this.offset + Math.max(0, this.context.currentTime - this.anchor) : this.offset;
  }
  pause() {
    return this.running && (this.offset = this.position()), this.stopSource(), this.offset;
  }
  stopSource() {
    if (this.source) {
      try {
        this.source.stop();
      } catch {
      }
      this.source.disconnect(), this.source = null;
    }
    this.running = false;
  }
  stop() {
    this.generation++, this.stopSource(), this.offset = 0;
  }
  dispose() {
    this.stop(), this.buffer = null;
  }
  wav() {
    if (!this.buffer) return null;
    let A = this.buffer, g = A.length, B = 2, I = new ArrayBuffer(44 + g * B * 2), C = new DataView(I), Q = (M, Y) => {
      for (let w = 0; w < Y.length; w++) C.setUint8(M + w, Y.charCodeAt(w));
    };
    Q(0, "RIFF"), C.setUint32(4, 36 + g * 4, true), Q(8, "WAVE"), Q(12, "fmt "), C.setUint32(16, 16, true), C.setUint16(20, 1, true), C.setUint16(22, 2, true), C.setUint32(24, A.sampleRate, true), C.setUint32(28, A.sampleRate * 4, true), C.setUint16(32, 4, true), C.setUint16(34, 16, true), Q(36, "data"), C.setUint32(40, g * 4, true);
    for (let M = 0; M < g; M++) for (let Y = 0; Y < 2; Y++) C.setInt16(44 + (M * 2 + Y) * 2, Math.max(-1, Math.min(1, A.getChannelData(Y)[M])) * 32767, true);
    return new Blob([I], { type: "audio/wav" });
  }
};
var _A = "#28334d";
function hB(E, A, g = _A, B = 2) {
  A && (E.fillStyle = A, E.fill()), g && (E.strokeStyle = g, E.lineWidth = B, E.stroke());
}
function Ag(E, A, g, B, I, C, Q = _A, M = 2) {
  E.beginPath(), E.ellipse(A, g, B, I, 0, 0, Math.PI * 2), hB(E, C, Q, M);
}
function kg(E, A, g, B, I, C, Q, M = null, Y = 2) {
  C = Math.min(C, B / 2, I / 2), E.beginPath(), E.moveTo(A + C, g), E.arcTo(A + B, g, A + B, g + I, C), E.arcTo(A + B, g + I, A, g + I, C), E.arcTo(A, g + I, A, g, C), E.arcTo(A, g, A + B, g, C), E.closePath(), hB(E, Q, M, Y);
}
function xg(E, A, g, B = 2) {
  E.beginPath(), E.moveTo(A[0], A[1]), A.length === 6 ? E.quadraticCurveTo(...A.slice(2)) : E.bezierCurveTo(...A.slice(2)), E.strokeStyle = g, E.lineWidth = B, E.stroke();
}
function OC(E, A, g, B, I, C = 0) {
  E.save(), E.translate(A, g), E.rotate(C), E.beginPath();
  for (let Q = 0; Q < 10; Q++) {
    let M = Q * Math.PI / 5 - Math.PI / 2, Y = Q % 2 ? B * 0.46 : B;
    E.lineTo(Math.cos(M) * Y, Math.sin(M) * Y);
  }
  E.closePath(), hB(E, I, null), E.restore();
}
function mJ(E, A, g, B) {
  for (let I = 0; I < 5; I++) {
    let C = I * Math.PI * 2 / 5;
    Ag(E, A + Math.cos(C) * 5, g + Math.sin(C) * 5, 4, 4, B, null);
  }
  Ag(E, A, g, 3, 3, "#fff1ad", null);
}
function drawCharacter(E, A, g, B, I, C = 0, Q = -1, M = false) {
  if (characterPainter?.draw(E, A, g, B, I, C, Q, M)) return;
  E.save(), I.monochrome && (E.filter = "grayscale(" + I.monochrome + ")"), E.translate(A, g);
  let Y = B / 104;
  E.scale(M ? -Y : Y, Y), E.lineJoin = "round", E.lineCap = "round";
  let w = Q >= 0, G = Math.sin(C * Math.PI * 2), D = I.skin || "#d2a082", i = I.hair || "#302c47", s = I.color || "#89d8e5", k = I.accent || "#d9ef8f", e = I.look === "capybara", h = I.look === "robot", J = I.look === "box";
  Ag(E, 0, 101, 32, 5, "#18233e33", null), E.translate(Q === 0 ? -3 : Q === 3 ? 3 : 0, G * 1.6 + (Q === 1 ? 4 : Q === 2 ? -4 : 0)), E.rotate(w ? (Q - 1.5) * 0.018 : Math.sin(C * Math.PI) * 0.022);
  for (let c of [-1, 1]) {
    let m = Math.max(0, Math.sin(C * Math.PI * 2 + c)) * 2;
    kg(E, c < 0 ? -17 : 5, 75 - m, 12, 23, 6, "#556988", _A, 2.4), kg(E, c < 0 ? -24 : 3, 92 - m, 24, 11, 5, c < 0 ? k : "#f9efde", _A, 2.4), xg(E, [c < 0 ? -19 : 8, 98 - m, c < 0 ? -11 : 16, 96 - m, c < 0 ? -5 : 25, 98 - m], "#ffffff", 1.8);
  }
  if (E.beginPath(), E.moveTo(-17, 47), E.bezierCurveTo(-27, 49, -25, 71, -22, 82), E.quadraticCurveTo(0, 90, 23, 82), E.bezierCurveTo(24, 69, 26, 51, 15, 47), E.closePath(), hB(E, s, _A, 2.6), xg(E, [-18, 79, 0, 84, 19, 79], k, 4), kg(E, -9, 58, 18, 16, 5, "#fff5dd", null), OC(E, 0, 66, 6, s), E.save(), E.translate(-21, 52), E.rotate(-0.1 + G * 0.1), kg(E, -9, 0, 12, 19, 6, s, _A, 2.3), Ag(E, -3, 20, 6, 7, e ? "#b8895f" : D, _A, 2.1), E.restore(), E.save(), E.translate(21, 53), E.rotate(w ? -0.95 : -0.25), kg(E, -3, 0, 12, 19, 6, s, _A, 2.3), Ag(E, 3, 19, 6, 7, e ? "#b8895f" : D, _A, 2.1), kg(E, 5, 1, 5, 21, 2, "#4b607b", _A, 1.5), Ag(E, 7.5, 0, 8, 10, "#d6e5ea", _A, 2), xg(E, [2, -3, 7, -5, 13, -3], "#ffffff", 1.5), xg(E, [1, 2, 8, 4, 14, 2], "#7a91a6", 1.2), E.restore(), e) Ag(E, -16, 5, 8, 9, "#b68a61", _A, 2.5), Ag(E, 14, 5, 8, 9, "#b68a61", _A, 2.5), Ag(E, -16, 5, 4, 5, "#dbb089", null), Ag(E, 14, 5, 4, 5, "#dbb089", null), E.beginPath(), E.moveTo(-25, 17), E.bezierCurveTo(-24, -6, 21, -4, 25, 20), E.bezierCurveTo(45, 20, 43, 47, 23, 48), E.lineTo(-7, 48), E.bezierCurveTo(-24, 48, -30, 36, -25, 17), E.closePath(), hB(E, "#be946b", _A, 2.8), Ag(E, 19, 34, 19, 12, "#d9b58b", null), Ag(E, -10, 22, 4, 5, "#fff4df", null), Ag(E, 13, 22, 4, 5, "#fff4df", null), Ag(E, -9, 23, 2.3, 3, _A, null), Ag(E, 14, 23, 2.3, 3, _A, null), Ag(E, 31, 31, 3, 2.6, "#78573f", null), xg(E, [20, 40, 26, 44, 32, 39], _A, 1.8), w && Ag(E, 24, 42, 4, 3, "#745148", null), xg(E, [-28, 24, -33, -3, 26, 1, 28, 22], k, 6), kg(E, -31, 19, 8, 17, 4, k, _A, 2), kg(E, 26, 17, 8, 12, 4, k, _A, 2);
  else if (h || J) if (kg(E, -24, 2, 48, 43, J ? 12 : 15, J ? "#dfbb82" : "#c2dbe0", _A, 2.8), J) xg(E, [-20, 12, 0, 18, 21, 12], "#ab834f", 2), kg(E, -3, 3, 6, 13, 2, "#f8e8bd", null), Ag(E, -9, 25, 4.3, 5.8, _A, null), Ag(E, 10, 25, 4.3, 5.8, _A, null), Ag(E, -10, 23, 1.5, 2, "#fff", null), Ag(E, 9, 23, 1.5, 2, "#fff", null), xg(E, [-6, 35, 2, 42, 10, 34], _A, 2), OC(E, 0, -7, 8, k, 0.15);
  else {
    kg(E, -19, 13, 38, 21, 9, "#2f4a66", _A, 1.8);
    for (let c of [-9, 9]) kg(E, c - 4, 18, 8, 8, 4, k, null), Ag(E, c - 1, 20, 1.6, 1.6, "#fff", null);
    xg(E, [-6, 38, 0, 42, 7, 38], _A, 2), xg(E, [0, 3, 0, -1, 4, -5], _A, 3), Ag(E, 5, -7, 5, 5, k, _A, 2), kg(E, -30, 15, 6, 16, 3, k, _A, 2), kg(E, 24, 15, 6, 16, 3, k, _A, 2);
  }
  else {
    ["flower", "leaf", "star", "feather"].includes(I.look) && (Ag(E, -17, 32, 13, 26, i, _A, 2), Ag(E, 17, 32, 13, 26, i, _A, 2)), Ag(E, -21, 28, 6, 8, D, _A, 2), Ag(E, 21, 28, 6, 8, D, _A, 2), Ag(E, 0, 24, 23, 25, D, _A, 2.7), E.beginPath(), E.moveTo(-23, 27), E.bezierCurveTo(-34, -3, -2, -14, 19, 0), E.bezierCurveTo(30, 8, 28, 21, 22, 23), E.lineTo(17, 13), E.quadraticCurveTo(7, 19, 6, 9), E.quadraticCurveTo(-3, 21, -9, 13), E.quadraticCurveTo(-13, 25, -23, 27), E.closePath(), hB(E, i, _A, 2.2);
    for (let m of [-8.5, 9]) Ag(E, m, 26, 5, 6.5, "#fff8ee", null), Ag(E, m + 1, 27, 2.8, 3.8, _A, null), Ag(E, m, 25, 1.1, 1.5, "#fff", null), xg(E, [m - 4, 18, m, 16 + (Q === 2 ? -2 : 0), m + 4, 18], i, 1.8);
    if (Ag(E, -15, 34, 4, 2.1, "#e9999633", null), Ag(E, 16, 34, 4, 2.1, "#e9999633", null), xg(E, [1, 29, 4, 32, 1, 33], "#9c715a", 1.2), w ? (Ag(E, 3, 39, 6, 5.2, "#633b49", _A, 1.5), Ag(E, 4, 41, 3, 1.7, "#ec9aab", null)) : xg(E, [-4, 37, 3, 45, 11, 36], _A, 1.8), I.look === "phones" && (xg(E, [-26, 24, -33, -12, 29, -10, 27, 24], k, 6), kg(E, -31, 18, 9, 20, 4, k, _A, 2), kg(E, 23, 18, 9, 20, 4, k, _A, 2)), (I.look === "cap" || I.look === "visor") && (E.beginPath(), E.moveTo(-24, 11), E.bezierCurveTo(-26, -13, 21, -15, 24, 9), E.closePath(), hB(E, s, _A, 2.5), Ag(E, 15, 10, 19, 4.5, k, _A, 2), OC(E, -3, 1, 5, "#fff2c9")), I.look === "flower" && mJ(E, -21, 9, k), I.look === "leaf" && (E.beginPath(), E.moveTo(-17, 11), E.quadraticCurveTo(-37, -9, -15, -12), E.quadraticCurveTo(-4, -2, -17, 11), hB(E, k, _A, 1.5)), I.look === "star" && OC(E, -22, 9, 9, k, -0.2), I.look === "crown" && (E.beginPath(), E.moveTo(-22, 5), E.lineTo(-25, -13), E.lineTo(-11, -7), E.lineTo(0, -21), E.lineTo(11, -7), E.lineTo(25, -13), E.lineTo(22, 5), E.closePath(), hB(E, k, _A, 2.4), Ag(E, 0, -5, 4, 5, "#f19dac", _A, 1.3)), I.look === "flame" && (E.beginPath(), E.moveTo(-23, 10), E.bezierCurveTo(-27, -4, -14, -1, -17, -16), E.quadraticCurveTo(-4, -12, -3, -23), E.quadraticCurveTo(7, -18, 10, -10), E.quadraticCurveTo(20, -20, 23, -7), E.lineTo(23, 9), E.closePath(), hB(E, "#ed9162", _A, 2), xg(E, [-8, 6, -2, -5, 2, -9], "#ffd58c", 4)), I.look === "feather") {
      for (let m = 0; m < 4; m++) E.save(), E.translate(-17 + m * 11, -4), E.rotate((m - 1.5) * 0.22), Ag(E, 0, -7, 6, 15, laneColors[m], _A, 1.4), E.restore();
      xg(E, [-23, 7, 0, 1, 23, 7], k, 5);
    }
  }
  E.restore();
}
var avatars = [{ artist: "Duda", skin: "#d7a57e", hair: "#3a334d", color: "#27c6c8", accent: "#b6a5ff", look: "phones" }, { artist: "Ravi", skin: "#9f7159", hair: "#2c3042", color: "#f08065", accent: "#f6e5bf", look: "cap" }];
var escapeHTML = (E) => String(E).replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]);
var formatTime = (E) => Math.floor(Math.max(0, E) / 60) + ":" + String(Math.floor(Math.max(0, E) % 60)).padStart(2, "0");

// integro-box/interdance-src/versus.mjs
function createVersusRuns(song) {
  return [new RhythmRun(song, true), new RhythmRun(song, true)];
}
function versusWinner(runs) {
  const [a, b] = runs.map((run) => run.result());
  const difference = a.score - b.score;
  return difference === 0 ? null : difference > 0 ? 0 : 1;
}
function keyLane(key, versus) {
  const lanes = { a: 0, s: 1, w: 2, d: 3, arrowleft: 0, arrowdown: 1, arrowup: 2, arrowright: 3 };
  key = key.toLowerCase();
  return key in lanes ? lanes[key] + (versus && key.startsWith("arrow") ? 4 : 0) : null;
}

// integro-box/interdance-src/concert.mjs
var NOTE_COLORS = ["#b99aff", "#66e4ed", "#bef58c", "#ff9bb9"];
var ink = "#080d20";
var white = "#edf2ff";
function panel(c, x, y, w, h, r, color, stroke = null) {
  c.beginPath();
  c.roundRect(x, y, w, h, r);
  c.fillStyle = color;
  c.fill();
  if (stroke) {
    c.strokeStyle = stroke;
    c.lineWidth = 1;
    c.stroke();
  }
}
function label(c, text, x, y, size = 12, color = white, align = "center", weight = 700) {
  c.font = `${weight} ${size}px system-ui`;
  c.fillStyle = color;
  c.textAlign = align;
  c.fillText(text, x, y);
}
function concertLayout(width, height, versus = false) {
  const landscape = width > height * 1.25, compact = height < 460;
  const stageBottom = landscape ? height - 24 : Math.min(258, Math.max(190, height * 0.35));
  const stacked = versus && !landscape, padHeight = stacked ? 48 : compact ? 50 : 62, padBottom = 18;
  const noteTop = landscape ? 112 : stageBottom + 14;
  const hitY = height - padBottom - padHeight * (stacked ? 2 : 1) - (stacked ? 28 : 18);
  const groups = versus ? 2 : 1;
  const totalWidth = landscape ? Math.min(width * (versus ? 0.64 : 0.46), versus ? 720 : 420) : Math.min(width - 24, 640);
  const gap = versus ? 14 : 0, boardWidth = (totalWidth - gap) / groups, left = (width - totalWidth) / 2;
  const tracks = Array.from({ length: groups }, (_, i) => ({ left: left + i * (boardWidth + gap), width: boardWidth, center: left + i * (boardWidth + gap) + boardWidth / 2, top: noteTop, hitY, padY: stacked ? height - padBottom - padHeight * 2 - 10 + i * (padHeight + 10) : height - padBottom - padHeight, padLeft: stacked ? left : left + i * (boardWidth + gap), padWidth: stacked ? totalWidth : boardWidth, padHeight, laneWidth: boardWidth / 4 }));
  const charSize = landscape ? Math.min(height * 0.53, width * 0.19) : Math.min(138, stageBottom - 104, width * 0.34);
  const feetY = landscape ? height * 0.8 : stageBottom - 23;
  return {
    landscape,
    compact,
    stageBottom,
    noteTop,
    hitY,
    tracks,
    charSize,
    feetY,
    characterX: (i) => landscape ? width * (i ? 0.86 : 0.14) : width * (i ? 0.73 : 0.27),
    statusY: landscape ? 90 : stageBottom - 4
  };
}
function noteY(noteTime, time, track, travel = 1.75) {
  return track.hitY - (noteTime - time) * (track.hitY - track.top) / travel;
}
function drawNote(c, x, y, size, lane, color, alpha = 1) {
  c.save();
  c.translate(x, y);
  c.rotate([-Math.PI / 2, Math.PI, 0, Math.PI / 2][lane]);
  c.globalAlpha = alpha;
  c.beginPath();
  c.moveTo(0, -size * 0.5);
  c.lineTo(size * 0.43, -size * 0.04);
  c.lineTo(size * 0.18, -size * 0.04);
  c.lineTo(size * 0.18, size * 0.42);
  c.lineTo(-size * 0.18, size * 0.42);
  c.lineTo(-size * 0.18, -size * 0.04);
  c.lineTo(-size * 0.43, -size * 0.04);
  c.closePath();
  c.fillStyle = color;
  c.fill();
  c.strokeStyle = "#ffffffc0";
  c.lineWidth = 1.5;
  c.stroke();
  c.restore();
}
function drawConcertStage(c, w, h, stage, time = 0, reduced = false) {
  const top = c.createLinearGradient(0, 0, 0, h);
  top.addColorStop(0, "#101831");
  top.addColorStop(0.65, "#12132d");
  top.addColorStop(1, ink);
  c.fillStyle = top;
  c.fillRect(0, 0, w, h);
  const floor = h * 0.83, accent = stage.accent || "#62ded9", color = stage.color || "#8474de";
  c.save();
  c.globalAlpha = 0.18;
  c.fillStyle = color;
  for (let i = 0; i < 9; i++) {
    const x = (i + 0.5) * w / 9, high = h * (0.18 + i % 3 * 0.045);
    c.fillRect(x - w * 0.022, floor - high, w * 0.044, high);
  }
  c.globalAlpha = 0.65;
  c.strokeStyle = accent;
  c.lineWidth = 2;
  for (let i = 0; i < 3; i++) {
    c.beginPath();
    c.ellipse(w * 0.5, h * 0.44, w * (0.2 + i * 0.045), h * (0.19 + i * 0.045), 0, Math.PI, Math.PI * 2);
    c.stroke();
  }
  c.globalAlpha = 0.1;
  c.fillStyle = accent;
  for (const side of [-1, 1]) {
    const shift = reduced ? 0 : Math.sin(time * 0.35) * w * 0.025;
    c.beginPath();
    c.moveTo(w * (side < 0 ? 0.04 : 0.96), h * 0.04);
    c.lineTo(w * 0.5 + side * w * 0.14 + shift, floor);
    c.lineTo(w * 0.5 + side * w * 0.34 + shift, floor);
    c.closePath();
    c.fill();
  }
  c.globalAlpha = 1;
  c.fillStyle = "#0d152b";
  c.fillRect(0, floor, w, h - floor);
  c.strokeStyle = "#61689280";
  c.beginPath();
  c.moveTo(0, floor);
  c.lineTo(w, floor);
  c.stroke();
  for (let i = 0; i < 5; i++) {
    c.strokeStyle = i === 0 ? accent + "80" : "#b5a4ff18";
    c.beginPath();
    c.moveTo(0, floor + i * i * 3);
    c.lineTo(w, floor + i * i * 3);
    c.stroke();
  }
  for (const side of [-1, 1]) {
    const x = w * (side < 0 ? 0.04 : 0.91);
    panel(c, x, h * 0.5, w * 0.05, h * 0.33, 4, "#0a0e22", "#404663");
    for (const offset of [0.59, 0.74]) {
      c.beginPath();
      c.arc(x + w * 0.025, h * offset, Math.min(w * 0.018, h * 0.052), 0, Math.PI * 2);
      c.strokeStyle = "#565778";
      c.stroke();
    }
  }
  c.restore();
}
function highway(c, track, run, time, player, versus, reduced) {
  const { left, width, top, hitY, laneWidth } = track, base = hitY + 16;
  panel(c, left - 2, top - 12, width + 4, base - top + 12, 12, "#080d20", "#344363");
  for (let lane = 0; lane < 4; lane++) {
    const x = left + lane * laneWidth, center = x + laneWidth / 2, color = NOTE_COLORS[lane];
    const pressed = run.held.has(lane), flash = time - run.last.at < 0.16 && run.last.lane === lane;
    if (pressed || flash) {
      c.fillStyle = color + (reduced ? "14" : "24");
      c.fillRect(x + 2, top, laneWidth - 4, base - top);
    }
    if (lane) {
      c.strokeStyle = "#25304d";
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(x, top);
      c.lineTo(x, base);
      c.stroke();
    }
    drawNote(c, center, hitY, Math.min(34, laneWidth * 0.62), lane, pressed ? color : "#526180", pressed ? 1 : 0.9);
  }
  c.fillStyle = "#d9e6ff";
  c.fillRect(left + 5, hitY + 19, width - 10, 2);
  c.save();
  c.beginPath();
  c.rect(left, top - 8, width, hitY - top + 25);
  c.clip();
  for (const note of run.notes) {
    if (["hit", "miss", "broken"].includes(note.state)) continue;
    const y = noteY(note.time, time, track), end = noteY(note.time + note.hold, time, track), x = left + (note.lane + 0.5) * laneWidth;
    if (y < top - 30 || end > hitY + 26) continue;
    if (note.hold) {
      const bottom = Math.min(y, hitY), start = Math.max(top - 7, end);
      if (bottom > start) {
        panel(c, x - 6, start, 12, bottom - start, 5, NOTE_COLORS[note.lane] + "80");
        c.fillStyle = "#ffffff9c";
        c.fillRect(x - 1.5, start, 3, bottom - start);
      }
    }
    if (note.state === "waiting") drawNote(c, x, y, Math.min(34, laneWidth * 0.62), note.lane, NOTE_COLORS[note.lane]);
  }
  c.restore();
  if (time - run.last.at < 0.58 && run.last.lane >= 0) {
    label(c, run.last.text, track.center, top + 48, versus ? 12 : 16, run.last.text === "PERFEITO!" ? "#bdf58b" : white);
    if (run.combo > 2) label(c, run.combo + "\xD7", track.center, top + 79, versus ? 20 : 26, "#fff");
  }
}
function drawConcert(c, w, h, stage, runs, time, avatars2, { versus = false, reduced = false, preview = false } = {}) {
  const l = concertLayout(w, h, versus);
  drawConcertStage(c, w, preview ? h : l.landscape ? h : l.stageBottom + 14, stage, time, reduced);
  if (!l.landscape && !preview) {
    c.fillStyle = ink;
    c.fillRect(0, l.stageBottom + 4, w, h - l.stageBottom - 4);
  }
  const beat = time / (60 / stage.bpm), opponent = runs[0]?.song.opponent.findLast((n) => n.time <= time && n.time > time - 0.24);
  for (let i = 0; i < 2; i++) {
    const p = versus ? avatars2[i] : i === 0 ? stage : avatars2[0], run = runs[versus ? i : 0];
    const lane = versus || i === 1 ? run && time - run.last.at < 0.2 ? run.last.lane : -1 : opponent?.lane ?? -1;
    const size = preview ? Math.min(h * 0.73, w * 0.32) : l.charSize, feet = preview ? h * 0.88 : l.feetY, x = preview ? w * (i ? 0.72 : 0.28) : l.characterX(i);
    c.fillStyle = "#01051a70";
    c.beginPath();
    c.ellipse(x, feet + 2, size * 0.3, Math.max(3, size * 0.035), 0, 0, Math.PI * 2);
    c.fill();
    drawCharacter(c, x, feet - size, size, { ...p, bpm: stage.bpm }, reduced ? 0 : beat, lane, i === 1);
    if (!preview) label(c, versus ? "J" + (i + 1) + " \xB7 " + p.artist : i === 0 ? p.artist : "VOC\xCA", x, feet + 17, 9, i === 0 ? "#b6b0eb" : "#8be4dd");
  }
  if (preview) return;
  l.tracks.forEach((track, i) => highway(c, track, runs[i], time, i, versus, reduced));
  const song = runs[0].song, count = time < 4 * song.beat, response = Math.floor((time / song.beat - 4) / 4) % 4 >= 2;
  const status = count ? "PREPARE-SE" : response ? versus ? "OS DOIS JOGAM" : "SUA VEZ" : "ESCUTE A BATIDA";
  label(c, status, w / 2, l.statusY, 10, response ? "#91e3d8" : "#b9bfde");
  if (count) {
    const size = Math.min(46, w * 0.11);
    label(c, String(Math.max(1, 4 - Math.floor(time / song.beat))), w / 2, l.noteTop + 70, size, "#fff");
  }
}

// integro-box/interdance-src/app.mjs
async function loadAnimeRenderer(options) {
  if (!globalThis.WebGL2RenderingContext) return null;
  const { createAnimePainter } = await import("./interdance-anime.js?v=20261017-dance-stage2");
  return createAnimePainter(options);
}
function createInterDance({ onExit, storage = window.BoxStorage, audio = new DanceAudio(), loadRenderer = loadAnimeRenderer } = {}) {
  if (!storage) throw new Error("Entre com a conta da fam\xEDlia para jogar.");
  const $ = (id) => document.getElementById(id), app = $("danceApp"), canvas = $("danceCanvas"), ctx = canvas.getContext("2d"), sheet = $("danceSheet");
  const pads = [...$("dancePads").querySelectorAll("[data-dance-lane]")];
  const arrow = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5 35 21H26V35H14V21H5Z"/></svg>';
  pads.forEach((pad, index) => {
    pad.innerHTML = arrow + `<small>${["A", "S", "W", "D", "\u2190", "\u2193", "\u2191", "\u2192"][index]}</small>`;
    pad.setAttribute("aria-label", `Jogador ${Math.floor(index / 4) + 1}: ${["esquerda", "baixo", "cima", "direita"][index % 4]}`);
  });
  [...$("dancePads").children].forEach((group, index) => {
    group.querySelector("span").textContent = "J" + (index + 1);
  });
  const storageKey = "integro-interdance-v1";
  let progress = sanitizeProgress(null), saved = true;
  try {
    progress = sanitizeProgress(JSON.parse(storage.getItem(storageKey) || storage.getItem("integro-interdace-v1") || "null"));
  } catch {
    saved = false;
  }
  try {
    if (!storage.getItem(storageKey) && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) progress.reducedEffects = true;
  } catch {
  }
  audio.setVolume(progress.volume);
  let active = false, view = "home", stage = stages[0], song = null, runs = [], match = "solo", preferredMatch = "solo", avatar = 0;
  let frameId = 0, width = 960, height = 540, generation = 0, finished = false, returnView = "home", toastUntil = 0;
  let graphics = null, visualGeneration = 0;
  function graphicsUnavailable() {
    setCharacterPainter(null);
    app.dataset.graphics = "compatibility";
    if (active) toast("Modo leve ativado. A m\xFAsica e os comandos continuam normalmente.");
  }
  async function prepareGraphics() {
    const token = ++visualGeneration;
    app.dataset.graphics = "loading";
    try {
      const painter = await loadRenderer({ onUnavailable: () => {
        if (active && token === visualGeneration) graphicsUnavailable();
      } });
      if (!active || token !== visualGeneration) {
        painter?.dispose();
        return;
      }
      if (!painter) {
        app.dataset.graphics = "compatibility";
        return;
      }
      graphics = painter;
      graphics.setOptions({ bpm: stage.bpm, reduced: progress.reducedEffects });
      setCharacterPainter(graphics);
      app.dataset.graphics = "anime";
      artwork();
    } catch {
      if (active && token === visualGeneration) graphicsUnavailable();
    }
  }
  const keyboard = /* @__PURE__ */ new Map(), pointers = /* @__PURE__ */ new Map(), pressed = new Array(8).fill(0);
  function persist() {
    try {
      storage.setItem(storageKey, JSON.stringify(progress));
      saved = true;
    } catch {
      saved = false;
    }
  }
  function toast(text) {
    $("danceToast").textContent = text;
    $("danceToast").classList.add("visible");
    toastUntil = performance.now() + 3500;
  }
  const time = () => Math.max(0, audio.position() - progress.offset / 1e3);
  function clearInputs() {
    keyboard.clear();
    pointers.clear();
    pressed.fill(0);
    runs.forEach((run) => run.held.clear());
    pads.forEach((pad) => pad.classList.remove("pressed"));
  }
  function resize() {
    const rect = app.getBoundingClientRect();
    width = rect.width || innerWidth;
    height = rect.height || innerHeight;
    const scale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.imageSmoothingEnabled = true;
    placeControls();
  }
  function hud(visible = false) {
    $("danceHUD").hidden = !visible || match === "versus";
    $("danceVersusHUD").hidden = !visible || match !== "versus";
    $("dancePads").hidden = !visible;
    $("dancePlayer2Pads").hidden = match !== "versus";
    app.classList.toggle("dance-versus", match === "versus");
  }
  function placeControls() {
    const layout = concertLayout(width, height, match === "versus");
    [...$("dancePads").children].forEach((group, i) => {
      const track = layout.tracks[i];
      if (!track) return;
      Object.assign(group.style, { left: track.padLeft + "px", top: track.padY + "px", width: track.padWidth + "px", height: track.padHeight + "px" });
    });
  }
  function artwork() {
    graphics?.setOptions({ bpm: stage.bpm, reduced: progress.reducedEffects });
    const hero = $("danceHero");
    if (hero) {
      hero.width = 640;
      hero.height = 260;
      drawConcert(hero.getContext("2d"), 640, 260, stage, [], 0, [avatars[avatar]], { preview: true, reduced: true });
    }
  }
  function overlay(next, html) {
    view = next;
    app.dataset.view = next;
    document.body.classList.remove("dance-in-song");
    $("dancePause").hidden = next === "home";
    $("danceOverlay").hidden = false;
    sheet.innerHTML = html;
    sheet.scrollTop = 0;
    sheet.focus();
    bind();
    artwork();
  }
  const button = (action, label2, primary = false) => `<button data-action="${action}"${primary ? ' class="primary"' : ""}>${label2}</button>`;
  function home() {
    generation++;
    audio.stop();
    clearInputs();
    hud();
    $("danceTrack").innerHTML = '<b>INTER<span class="dance-word-accent">DANCE</span></b><small>Festival de ritmo</small>';
    const complete = stages.filter((s) => progress.best[`${s.id}-${progress.mode}-remix`]?.stars).length;
    overlay("home", `<div class="dance-library"><div class="dance-cover-art"><div><span class="dance-eyebrow">VOLUME 01 \xB7 INTEGRO BOX</span><h1>Sinta o som.<br><em>Entre no ritmo.</em></h1><span class="dance-cover-caption">16 m\xFAsicas. Seu pr\xF3ximo palco.</span></div></div><div class="dance-stage-heading"><div><span class="dance-eyebrow">PLAYLIST</span><h2>Escolha sua m\xFAsica</h2></div><span>${complete}<small> / 16</small></span></div><div class="dance-stages">${stages.map((s) => {
      const best = progress.best[`${s.id}-${progress.mode}-remix`];
      return `<button class="dance-stage" data-stage="${s.id}" style="--track-color:${s.accent};--track-tint:${s.color}"><span class="dance-track-art" aria-hidden="true"><span>${String(s.week).padStart(2, "0")}</span></span><span class="dance-track-title"><b>${s.title}</b><small>${s.artist} <i>\xB7</i> ${s.bpm} BPM</small></span><span class="dance-track-rating"><span class="stars" aria-label="${best?.stars || 0} de 3 estrelas">${"\u2605".repeat(best?.stars || 0) + "\u2606".repeat(3 - (best?.stars || 0))}</span><span class="dance-play-mark" aria-hidden="true">\u203A</span></span></button>`;
    }).join("")}</div><div class="dance-library-footer">${button("shop", "\u25C7 Loja IntGem")}${button("settings", "Som e ajuda")}<span>${saved ? "Recordes salvos nesta conta e navegador." : "Salvamento indispon\xEDvel nesta sess\xE3o."}</span></div></div>`);
  }
  function detail(id = stage.id) {
    generation++;
    audio.stop();
    clearInputs();
    hud();
    stage = stages[id] || stages[0];
    song = generateSong(stage, progress.mode);
    $("danceTrack").innerHTML = `<b>Preparar o palco</b><small>M\xFAsica ${String(stage.week).padStart(2, "0")} de 16</small>`;
    overlay("detail", `<div class="dance-detail"><div class="dance-detail-visual"><canvas id="danceHero" class="dance-detail-art" aria-label="Artistas no palco"></canvas><span class="dance-eyebrow">${stage.artist} \xB7 ${stage.place}</span><h1>${stage.title}</h1><div class="dance-facts"><span>${stage.bpm} BPM</span><span>${formatTime(song.duration)}</span><span>${song.notes.length} notas</span></div></div><div class="dance-preparation"><div class="dance-option"><span>Modo de jogo</span><div class="dance-mode">${["solo", "versus"].map((mode) => `<button data-match="${mode}" aria-pressed="${preferredMatch === mode}" class="${preferredMatch === mode ? "selected" : ""}">${mode === "solo" ? "Solo" : "Versus local"}</button>`).join("")}</div></div><div class="dance-option"><span>Dificuldade</span><div class="dance-mode">${["easy", "normal"].map((mode) => `<button data-mode="${mode}" aria-pressed="${progress.mode === mode}" class="${progress.mode === mode ? "selected" : ""}">${mode === "easy" ? "Aprender" : "Desafio"}</button>`).join("")}</div></div><label class="dance-avatar">Seu artista <select id="danceAvatar"><option value="0" ${avatar === 0 ? "selected" : ""}>Duda</option><option value="1" ${avatar === 1 ? "selected" : ""}>Ravi</option></select></label><p class="dance-instruction">${preferredMatch === "versus" ? "Dois jogadores no mesmo aparelho. WASD \xD7 setas, ou dois conjuntos de bot\xF5es." : "Toque quando a nota chegar ao alvo. Segure as notas com cauda."}</p><div class="dance-launch">${button(preferredMatch, preferredMatch === "solo" ? "\u25B6 Jogar agora" : "\u25B6 Come\xE7ar duelo", true)}${button(preferredMatch === "solo" ? "versus" : "solo", preferredMatch === "solo" ? "Jogar a dois" : "Jogar solo")}</div><div class="dance-buttons dance-secondary-actions">${button("practice", "Treinar")}${button("listen", "Ouvir")}${button("home", "Todas as m\xFAsicas")}</div><details class="dance-help"><summary>Como jogar</summary><p>As notas descem at\xE9 os alvos junto dos bot\xF5es. As colunas ficam no mesmo lugar. No solo, use WASD ou as setas; no versus, cada pessoa usa um conjunto. A maior pontua\xE7\xE3o vence. Para jogar a dois no celular, prefira a tela deitada.</p></details></div></div>`);
  }
  async function start(mode) {
    const token = ++generation;
    audio.stop();
    clearInputs();
    finished = false;
    match = mode;
    hud();
    overlay("loading", `<div class="dance-result"><span class="dance-eyebrow">PREPARANDO ${mode === "versus" ? "O DUELO" : "SEU PALCO"}</span><h1>${stage.title}</h1><p>Sintetizando a m\xFAsica original\u2026 <b id="danceAudioProgress">0%</b></p><p>A primeira prepara\xE7\xE3o pode levar alguns segundos.</p>${button("home", "Voltar \xE0s semanas")}</div>`);
    try {
      await audio.unlock();
      if (!active || token !== generation) return;
      song = generateSong(stage, progress.mode);
      const rendered = await audio.render(song, (value) => {
        const label2 = $("danceAudioProgress");
        if (label2 && token === generation) label2.textContent = Math.round(value * 100) + "%";
      });
      if (!rendered || !active || token !== generation) return;
      if (mode === "listen") {
        if (document.hidden) {
          detail();
          return;
        }
        audio.play();
        overlay("listen", `<div class="dance-result"><span class="dance-eyebrow">TRILHA ORIGINAL</span><h1>${stage.title}</h1><canvas id="danceHero" class="dance-detail-art"></canvas><div class="dance-buttons">${button("download", "\u2193 Baixar m\xFAsica WAV")}${button("detail", "Voltar ao palco")}</div></div>`);
        return;
      }
      runs = mode === "versus" ? createVersusRuns(song) : [new RhythmRun(song, mode === "practice")];
      $("danceTrack").innerHTML = `<b>${stage.title}</b><small>${mode === "versus" ? "VERSUS LOCAL \xB7 DUDA \xD7 RAVI" : mode === "practice" ? "TREINO LIVRE" : "SOLO"} \xB7 ${progress.mode === "easy" ? "Aprender" : "Desafio"}</small>`;
      audio.play();
      view = "playing";
      app.dataset.view = "playing";
      document.body.classList.add("dance-in-song");
      $("danceOverlay").hidden = true;
      hud(true);
      placeControls();
      canvas.focus();
      if (document.hidden) pause();
    } catch (error) {
      if (token !== generation || !active) return;
      overlay("error", `<div class="dance-result"><h1>Vamos tentar de novo?</h1><p>${escapeHTML(error.message || "N\xE3o foi poss\xEDvel preparar o \xE1udio.")}</p>${button("detail", "Voltar e ativar o som", true)}</div>`);
    }
  }
  function pause() {
    if (view !== "playing") return;
    audio.pause();
    clearInputs();
    showPause();
  }
  function showPause() {
    overlay("paused", `<div class="dance-result"><span class="dance-eyebrow">${match === "versus" ? "DUELO PAUSADO" : "PAUSA NO PALCO"}</span><h1>${stage.title}</h1><p>A m\xFAsica e as setas est\xE3o pausadas juntas.</p><div class="dance-buttons">${button("resume", "\u25B6 Continuar", true)}${button("restart", "Recome\xE7ar")}${button("settings", "Som e sincroniza\xE7\xE3o")}${button("shop", "\u25C7 Loja IntGem")}${button("home", "Escolher m\xFAsica")}</div></div>`);
  }
  async function resume() {
    const token = generation;
    try {
      await audio.unlock();
      if (!active || token !== generation || view !== "paused") return;
      clearInputs();
      audio.play(audio.offset, 0.8);
      view = "playing";
      app.dataset.view = "playing";
      document.body.classList.add("dance-in-song");
      $("danceOverlay").hidden = true;
      canvas.focus();
      toast("Prepare-se\u2026");
    } catch (error) {
      toast(error.message);
    }
  }
  function settings() {
    if (view === "loading") {
      generation++;
      audio.stop();
      view = "detail";
    }
    if (view === "playing") pause();
    if (view === "listen") audio.pause();
    returnView = view === "paused" ? "paused" : ["detail", "listen"].includes(view) ? "detail" : "home";
    overlay("settings", `<div class="dance-settings"><span class="dance-eyebrow">NO SEU RITMO</span><h1>Som, efeitos e controles</h1><label>Efeitos visuais<select id="danceEffects"><option value="full" ${progress.reducedEffects ? "" : "selected"}>Completos \u2014 poses anime e efeitos</option><option value="reduced" ${progress.reducedEffects ? "selected" : ""}>Reduzidos \u2014 poses e setas est\xE1veis</option></select></label><label>Volume <output id="danceVolumeValue">${Math.round(progress.volume * 100)}%</output><input id="danceVolume" type="range" min="0" max="100" value="${progress.volume * 100}"></label><label>Ajuste de sincroniza\xE7\xE3o <output id="danceOffsetValue">${progress.offset} ms</output><input id="danceOffset" type="range" min="-250" max="250" step="10" value="${progress.offset}"></label><p>Se voc\xEA ouve a batida depois que a seta chega, aumente o ajuste. Se ouve antes, diminua. O mesmo ajuste vale para os dois jogadores.</p><div class="dance-help"><b>Solo:</b> WASD ou setas.<br><b>Versus:</b> jogador 1: A S W D \xB7 jogador 2: \u2190 \u2193 \u2191 \u2192. No celular, cada jogador tem quatro bot\xF5es. Segure as notas com cauda. P ou Esc pausa os dois jogadores.<br>\u2605 55% \xB7 \u2605\u2605 75% \xB7 \u2605\u2605\u2605 92%. Treino e versus n\xE3o alteram os recordes solo. O versus funciona no mesmo aparelho.</div><div class="dance-buttons">${button("backSettings", "Pronto", true)}${button("fullscreen", "Tela cheia")}</div></div>`);
  }
  function finish() {
    if (finished) return;
    finished = true;
    audio.stopSource();
    clearInputs();
    hud();
    if (match === "versus") {
      const winner = versusWinner(runs);
      overlay("result", `<div class="dance-result"><span class="dance-eyebrow">${stage.title} \xB7 VERSUS LOCAL</span><h1>${winner === null ? "Empate!" : `Jogador ${winner + 1} venceu!`}</h1><p>${winner === null ? "Mesma pontua\xE7\xE3o. Que tal uma revanche?" : `${avatars[winner].artist} fez a maior pontua\xE7\xE3o. Boa dan\xE7a para os dois!`}</p><div class="dance-versus-results">${runs.map((run, index) => {
        const r = run.result();
        return `<article class="${winner === index ? "winner" : ""}"><h2>Jogador ${index + 1} \xB7 ${avatars[index].artist}</h2><strong>${r.score.toLocaleString("pt-BR")}</strong><span>pontos</span><p>${r.accuracy.toFixed(1)}% de precis\xE3o<br>${r.combo}\xD7 melhor combo<br>${r.hits} acertos \xB7 ${r.misses} perdidas</p></article>`;
      }).join("")}</div><div class="dance-buttons">${button("versus", "\u21BB Revanche", true)}${button("detail", "Trocar modo")}${button("home", "Escolher m\xFAsica")}</div></div>`);
      return;
    }
    const result = runs[0].result(), key = `${stage.id}-${progress.mode}-remix`, best = progress.best[key];
    if (!result.practice) {
      progress.best[key] = { score: Math.max(best?.score || 0, result.score), accuracy: Math.max(best?.accuracy || 0, result.accuracy), stars: Math.max(best?.stars || 0, result.stars) };
      persist();
    }
    overlay("result", `<div class="dance-result"><span class="dance-eyebrow">${stage.title} \xB7 ${progress.mode === "easy" ? "APRENDER" : "DESAFIO"}</span><h1>${result.practice ? "Treino conclu\xEDdo" : result.passed ? "Voc\xEA brilhou!" : "Vamos pegar o ritmo!"}</h1><div class="dance-stars">${"\u2605".repeat(result.stars) + "\u2606".repeat(3 - result.stars)}</div><div class="dance-facts"><div><b>${result.score.toLocaleString("pt-BR")}</b>pontos</div><div><b>${result.accuracy.toFixed(1)}%</b>precis\xE3o</div><div><b>${result.combo}\xD7</b>melhor combo</div></div><p>${result.practice ? "Treino livre: seu recorde n\xE3o foi alterado." : saved ? "Seu resultado foi salvo neste navegador." : "N\xE3o foi poss\xEDvel salvar nesta sess\xE3o."}</p><p>${result.hits} acertos \xB7 ${result.misses} notas perdidas \xB7 ${result.ghosts} toques fora do tempo</p><div class="dance-buttons">${result.passed && stage.id < 15 ? button("next", "Pr\xF3xima semana \u2192", true) : button("restart", "Jogar novamente", true)}${button("versus", "Versus \xB7 2 jogadores")}${button("home", "Todas as semanas")}</div></div>`);
  }
  const actions = { home, shop: () => window.BoxIntGem?.open("collection", "interdance"), detail: () => detail(), solo: () => start("solo"), versus: () => start("versus"), practice: () => start("practice"), listen: () => start("listen"), restart: () => start(match), resume, settings, next: () => detail(Math.min(15, stage.id + 1)), backSettings: () => {
    persist();
    returnView === "paused" ? showPause() : returnView === "detail" ? detail() : home();
  }, fullscreen: () => {
    (document.fullscreenElement ? document.exitFullscreen() : app.requestFullscreen?.())?.catch(() => toast("Gire o celular para jogar em paisagem."));
  }, download: () => {
    const wav = audio.wav();
    if (!wav) {
      toast("Ou\xE7a a m\xFAsica primeiro para baixar.");
      return;
    }
    const url = URL.createObjectURL(wav), link = document.createElement("a");
    link.href = url;
    link.download = `InterDance_${String(stage.week).padStart(2, "0")}.wav`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e4);
  } };
  function bind() {
    sheet.querySelectorAll("[data-stage]").forEach((b) => b.onclick = () => detail(+b.dataset.stage));
    sheet.querySelectorAll("[data-mode]").forEach((b) => b.onclick = () => {
      progress.mode = b.dataset.mode;
      persist();
      view === "detail" ? detail() : home();
    });
    sheet.querySelectorAll("[data-match]").forEach((b) => b.onclick = () => {
      preferredMatch = b.dataset.match;
      view === "detail" ? detail() : home();
    });
    sheet.querySelectorAll("[data-action]").forEach((b) => b.onclick = () => actions[b.dataset.action]?.());
    const avatarSelect = $("danceAvatar");
    if (avatarSelect) avatarSelect.onchange = () => {
      avatar = +avatarSelect.value;
      artwork();
    };
    const effects = $("danceEffects");
    if (effects) effects.onchange = () => {
      progress.reducedEffects = effects.value === "reduced";
      persist();
    };
    const volume = $("danceVolume");
    if (volume) volume.oninput = () => {
      progress.volume = +volume.value / 100;
      audio.setVolume(progress.volume);
      $("danceVolumeValue").textContent = volume.value + "%";
      persist();
    };
    const offset = $("danceOffset");
    if (offset) offset.oninput = () => {
      progress.offset = +offset.value;
      $("danceOffsetValue").textContent = offset.value + " ms";
      persist();
    };
  }
  function hit(index) {
    if (!active || view !== "playing") return;
    if (pressed[index]++ === 0) {
      runs[Math.floor(index / 4)]?.hit(index % 4, time());
      pads[index].classList.add("pressed");
    }
  }
  function release(index) {
    pressed[index] = Math.max(0, pressed[index] - 1);
    if (pressed[index] === 0) {
      if (view === "playing") runs[Math.floor(index / 4)]?.release(index % 4, time());
      pads[index].classList.remove("pressed");
    }
  }
  pads.forEach((pad, index) => {
    pad.addEventListener("pointerdown", (event) => {
      if (!active || view !== "playing" || index >= 4 && match !== "versus") return;
      event.preventDefault();
      if (!pointers.has(event.pointerId)) {
        pointers.set(event.pointerId, index);
        pad.setPointerCapture(event.pointerId);
        hit(index);
      }
    });
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) pad.addEventListener(type, (event) => {
      if (pointers.has(event.pointerId)) {
        pointers.delete(event.pointerId);
        release(index);
      }
    });
  });
  document.addEventListener("keydown", (event) => {
    if (!active) return;
    const key = event.key.toLowerCase();
    if (key === "escape" || key === "p") {
      if (event.target.matches?.("input,select") && key === "p") return;
      event.preventDefault();
      if (event.repeat) return;
      view === "playing" ? pause() : view === "paused" ? resume() : view !== "home" && home();
      return;
    }
    if (view !== "playing") {
      if (key === "tab") {
        const focusable = [...sheet.querySelectorAll("button:not([disabled]),select,input")];
        if (focusable.length && event.shiftKey && (document.activeElement === focusable[0] || document.activeElement === sheet)) {
          event.preventDefault();
          focusable.at(-1).focus();
        } else if (focusable.length && !event.shiftKey && document.activeElement === focusable.at(-1)) {
          event.preventDefault();
          focusable[0].focus();
        }
      }
      return;
    }
    const lane = keyLane(key, match === "versus");
    if (lane === null) return;
    event.preventDefault();
    if (event.repeat || keyboard.has(key)) return;
    keyboard.set(key, lane);
    hit(lane);
  });
  document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    if (keyboard.has(key)) {
      release(keyboard.get(key));
      keyboard.delete(key);
    }
  });
  function interrupted() {
    if (!active) return;
    if (view === "playing") pause();
    else if (view === "listen") detail();
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) interrupted();
  });
  window.addEventListener("blur", interrupted);
  window.addEventListener("resize", () => {
    if (active) resize();
  });
  $("danceExit").onclick = () => {
    hide();
    onExit?.();
  };
  $("dancePause").onclick = () => {
    view === "playing" ? pause() : view === "paused" ? resume() : view !== "home" && home();
  };
  $("danceSettings").onclick = settings;
  $("danceShop").onclick = () => actions.shop();
  function frame(now) {
    if (!active) return;
    frameId = requestAnimationFrame(frame);
    if (view === "playing" && audio.context?.state !== "running") {
      pause();
      toast("\xC1udio interrompido. Toque em Continuar.");
    }
    const position = view === "playing" ? time() : view === "paused" ? runs[0]?.time || 0 : view === "listen" ? audio.position() : progress.reducedEffects ? 0 : now / 1e3;
    if (view === "playing") {
      runs.forEach((run) => run.update(position));
      if (match === "versus") {
        runs.forEach((run, index) => {
          $("danceScore" + (index + 1)).textContent = run.score.toLocaleString("pt-BR");
          $("danceStats" + (index + 1)).textContent = Math.round(run.liveAccuracy) + "% \xB7 " + run.combo + " combo";
        });
        $("danceVersusTime").textContent = formatTime(position) + " / " + formatTime(song.duration);
      } else {
        $("danceScore").textContent = runs[0].score.toLocaleString("pt-BR");
        $("danceEnergy").value = runs[0].energy;
        $("danceAccuracy").textContent = Math.round(runs[0].liveAccuracy) + "% \xB7 " + runs[0].combo + " combo";
        $("danceTime").textContent = formatTime(position) + " / " + formatTime(song.duration);
        $("danceProgress").value = Math.min(1, position / song.duration);
      }
      if (runs.every((run) => run.status !== "playing")) finish();
    }
    graphics?.setOptions({ bpm: stage.bpm, reduced: progress.reducedEffects });
    const playing = ["playing", "paused"].includes(view);
    if (playing) drawConcert(ctx, width, height, stage, runs, position, match === "versus" ? avatars : [avatars[avatar]], { versus: match === "versus", reduced: progress.reducedEffects });
    if (now > toastUntil) $("danceToast").classList.remove("visible");
  }
  function hide() {
    if (!active) return;
    active = false;
    generation++;
    visualGeneration++;
    setCharacterPainter(null);
    graphics?.dispose();
    graphics = null;
    cancelAnimationFrame(frameId);
    clearInputs();
    audio.dispose();
    persist();
    app.hidden = true;
    document.body.classList.remove("dance-playing", "dance-in-song");
    if (document.fullscreenElement === app) document.exitFullscreen?.().catch(() => {
    });
  }
  const api = { show() {
    if (active) return;
    active = true;
    app.hidden = false;
    document.body.classList.add("dance-playing");
    resize();
    home();
    void prepareGraphics();
    frameId = requestAnimationFrame(frame);
  }, hide, pause, persist, get active() {
    return active;
  }, getState: () => ({ active, view, graphics: app.dataset.graphics || "compatibility", stage: stage.id, week: stage.week, mode: progress.mode, match, time: runs[0]?.time || 0, players: runs.map((run) => run.result()), winner: finished && match === "versus" ? versusWinner(runs) : null, progress: JSON.parse(JSON.stringify(progress)), audioRunning: audio.running }) };
  return api;
}
function installInterDance() {
  const brand = document.getElementById("brandHome"), button = document.getElementById("playInterDance");
  const game = createInterDance({ onExit: () => {
    brand.click();
    button.focus();
  } });
  let stopped = false, busy = false;
  brand.addEventListener("click", () => game.hide(), { capture: true });
  async function open() {
    if (stopped || busy) return;
    busy = true;
    try {
      await window.BoxMultiplayer?.disconnect();
      if (stopped) return;
      brand.click();
      for (const id of ["lobby", "play", "posterView", "footer"]) document.getElementById(id)?.classList.add("hidden");
      const house = document.getElementById("houseApp");
      if (house) house.hidden = true;
      game.show();
    } finally {
      busy = false;
    }
  }
  button.onclick = open;
  window.BoxInterDance = { hide: game.hide, persist: game.persist, pause: game.pause, stop() {
    stopped = true;
    game.hide();
  } };
  window.InterDance = { getState: game.getState };
  if (["#interdance", "#interdace"].includes(location.hash)) void open();
  return game;
}
export {
  createInterDance,
  installInterDance
};
