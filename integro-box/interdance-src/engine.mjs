import {animePose} from './anime-motion.mjs';
import {HIP_HEIGHT} from './dance-proportions.mjs';
import {drawAnimeStage} from './anime-stage.mjs';
let characterPainter=null;
export function setCharacterPainter(painter){characterPainter=painter;}
// InterDance music, cartoon artwork and solo engine imported from Integro_Box_Atualizado.html.
  var laneColors = ["#be8cff", "#69deee", "#b3ee70", "#ff8fae"], $k = [["Primeiro passo", "P\xE1tio da escola", "Lia", 88, 60, "major", "school", "#ffd97b", "#7ba4e5", "cap", [0, 2, 4, 2, 1, 3, 2, 0], [0, 3, 4, 0], "pop"], ["Rua de neon", "Centro da cidade", "Nico", 94, 62, "minor", "city", "#84f4df", "#bb80f0", "phones", [0, 3, 2, 5, 4, 2, 1, 0], [0, 5, 3, 4], "electro"], ["Brisa em sincopa", "Praia dourada", "Sol", 98, 65, "major", "beach", "#ffc581", "#69c4dc", "flower", [4, 2, 0, 1, 2, 4, 5, 2], [0, 4, 3, 0], "tropical"], ["Circuito azul", "Oficina dos rob\xF4s", "Bit", 104, 57, "dorian", "lab", "#7bf6ed", "#6a88cc", "robot", [0, 0, 4, 6, 3, 4, 1, 2], [0, 3, 0, 4], "electro"], ["Ra\xEDzes do som", "Floresta encantada", "Iara", 106, 64, "minor", "forest", "#b1ef9c", "#4fa392", "leaf", [0, 2, 3, 5, 3, 2, 6, 4], [0, 5, 2, 4], "forest"], ["Roda de cores", "Feira dos brinquedos", "T\xE9o", 110, 67, "major", "fair", "#f8c488", "#d886ad", "cap", [2, 4, 5, 4, 2, 0, 1, 3], [0, 3, 1, 4], "funk"], ["Capivara groove", "Margem do rio", "Capi DJ", 112, 60, "pent", "river", "#dcc48d", "#71c0ab", "capybara", [0, 1, 3, 2, 4, 3, 1, 0], [0, 2, 3, 0], "tropical"], ["Fagulha", "Palco do vulc\xE3o", "Brasa", 116, 59, "minor", "volcano", "#ffb177", "#be636d", "flame", [0, 4, 3, 2, 6, 5, 3, 1], [0, 5, 3, 4], "rock"], ["Cristal em movimento", "Lago congelado", "\xCDris", 120, 66, "major", "ice", "#a6e6ff", "#9f99e5", "crown", [4, 6, 5, 2, 3, 1, 2, 0], [0, 4, 1, 3], "crystal"], ["Onda retr\xF4", "Fliperama espacial", "Pixel", 124, 61, "dorian", "arcade", "#df9cff", "#7973ba", "robot", [0, 2, 5, 6, 4, 1, 3, 2], [0, 3, 4, 2], "chip"], ["Jardim suspenso", "Estufa nas nuvens", "Flora", 128, 69, "pent", "garden", "#d1f29b", "#cf89aa", "flower", [2, 3, 1, 4, 0, 2, 4, 3], [0, 2, 3, 1], "forest"], ["Expresso da batida", "Esta\xE7\xE3o lunar", "Tril", 132, 63, "minor", "station", "#ffe095", "#8e97c3", "visor", [0, 3, 4, 1, 5, 2, 6, 4], [0, 5, 3, 2], "funk"], ["\xD3rbita lil\xE1s", "Observat\xF3rio", "Luna", 136, 68, "minor", "space", "#d6b7ff", "#7b83c9", "star", [0, 4, 2, 6, 3, 5, 1, 4], [0, 3, 5, 4], "electro"], ["Chuva de confete", "Carnaval de estrelas", "Mika", 140, 65, "major", "carnival", "#ffc89f", "#df86bb", "feather", [4, 2, 5, 3, 6, 4, 1, 2], [0, 3, 4, 1], "tropical"], ["Aurora el\xE9trica", "Montanha da aurora", "Aurora", 146, 62, "dorian", "aurora", "#96f5e2", "#9b81d1", "crown", [0, 2, 6, 4, 5, 3, 1, 6], [0, 4, 3, 5], "crystal"], ["Todo mundo dan\xE7a", "Festival Integro", "Maestro Box", 152, 60, "major", "festival", "#f5df92", "#c18ae8", "box", [0, 4, 2, 5, 3, 6, 4, 0], [0, 3, 5, 4], "finale"]], stages = $k.map((E, A) => ({ id: A, week: A + 1, title: E[0], place: E[1], artist: E[2], bpm: 140 + A * 4, key: E[4], scale: E[5], theme: E[6], accent: E[7], color: E[8], look: E[9], motif: E[10], chords: E[11], groove: E[12], bars: A < 8 ? 32 : 40, skin: ["#c58c6c", "#f2cda3", "#9c6954", "#deb084"][A % 4], hair: ["#493e52", "#322d44", "#865742", "#413e59"][A % 4] })), _k = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10], pent: [0, 2, 4, 7, 9] }, lI = (E, A, g = 0) => {
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
  var ew = [[0, 1, 2, 3], [3, 2, 1, 0], [1, 3, 0, 2], [2, 0, 3, 1]], kJ = (E) => Math.max(0, Math.min(1, E)), mw = (E) => (E = kJ(E), E * E * (3 - 2 * E));
  function phaseEffects(E, A, g = false) {
    let B = 60 / E.bpm, I = Math.max(0, A / B - 4), C = I / 4, Q = C < 8 ? 0 : C < 16 ? 1 : 2, M = Math.floor(C / 8), Y = mw(I % 32 / 2), w = ew[Math.max(0, M - 2) % ew.length], G = ew[Math.max(0, M - 1) % ew.length], D = [0, 1, 2, 3].map((s) => g || Q < 2 ? s : w[s] + (G[s] - w[s]) * Y), i = !g && Q === 2 && I % 32 < 2;
    return { phase: Q, slots: D, shake: g || Q === 0 ? 0 : Q === 1 ? 1 : 1.3, swapping: i, label: g ? ["AQUECIMENTO", "CHEFE EM CORES", "FINAL DO CHEFE"][Q] : ["AQUECIMENTO", "PASSOS TREME-TREME", i ? "TROCA DE POSI\xC7\xD5ES!" : "REMIX DO CHEFE"][Q] };
  }
  function noteMotion(E, A, g, B) {
    let I = kJ((g - 0.15) / 0.7) * B;
    return { x: Math.sin(A * 17 + E * 2.1) * 7 * I, y: Math.cos(A * 13 + E * 1.8) * 4 * I };
  }
  var hJ = [["#ec94bb", "#ffe299", "#7750b3"], ["#80dadc", "#e8a8f4", "#435faf"], ["#a9e593", "#ffbe8e", "#6962be"], ["#cca4f0", "#95e8d5", "#bf647e"]];
  function $G(E, A, g) {
    let B = E.slice(1).match(/../g).map((C) => parseInt(C, 16)), I = A.slice(1).match(/../g).map((C) => parseInt(C, 16));
    return "#" + B.map((C, Q) => Math.round(C + (I[Q] - C) * g).toString(16).padStart(2, "0")).join("");
  }
  function sJ(E, A) {
    let g = E.slice(1).match(/../g).map((I) => parseInt(I, 16)), B = Math.round(g[0] * 0.2126 + g[1] * 0.7152 + g[2] * 0.0722).toString(16).padStart(2, "0");
    return $G(E, "#" + B + B + B, A);
  }
  function eJ(E, A, g = false) {
    let B = Math.max(0, A / (60 / E.bpm) - 4), I = phaseEffects(E, A, g).phase;
    if (I === 0) return { person: E, mono: 0 };
    let C = (g ? I * 2 : B / 16) + E.id / 4, Q = Math.floor(C) % 4, M = mw(C % 1), Y = hJ[Q], w = hJ[(Q + 1) % 4], G = g ? 1 : mw((B - 32) / 4), D = I < 2 ? 0 : g ? 1 : mw((B - 64) / 4) * (0.5 - 0.5 * Math.cos((B - 64) * Math.PI / 16)), i = { ...E };
    for (let [s, k] of [["color", 0], ["accent", 1], ["hair", 2]]) i[s] = sJ($G(E[s] || "#6f6387", $G(Y[k], w[k], M), G), D);
    return i.skin = sJ(E.skin || "#d2a082", D), i.monochrome = D, { person: i, mono: D };
  }
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
  function VQ(E, A, g, B, I = "#ffffff99") {
    E.save(), E.translate(A, g), E.scale(B, B), E.beginPath(), E.moveTo(-32, 10), E.bezierCurveTo(-45, -2, -25, -18, -14, -9), E.bezierCurveTo(-15, -32, 20, -32, 24, -10), E.bezierCurveTo(50, -15, 50, 14, 28, 15), E.lineTo(-25, 15), E.closePath(), hB(E, I, null), E.restore();
  }
  function drawCharacter(E, A, g, B, I, C = 0, Q = -1, M = false, cue = {}) {
    if(characterPainter?.draw(E,A,g,B,I,C,Q,M,cue))return;
    E.save(), I.monochrome && (E.filter = "grayscale(" + I.monochrome + ")"), E.translate(A, g);
    let Y = B / 104;
    E.scale(M ? -Y : Y, Y), E.lineJoin = "round", E.lineCap = "round";
    let w = Q >= 0, G = Math.sin(C * Math.PI * 2), D = I.skin || "#d2a082", i = I.hair || "#302c47", s = I.color || "#89d8e5", k = I.accent || "#d9ef8f", e = I.look === "capybara", h = I.look === "robot", J = I.look === "box";
    const pose=animePose(C*60/(I.bpm||140),I.bpm||140,Q,!!cue.reduced,cue);
    const hx=pose.hipX*36,hy=72+(HIP_HEIGHT-pose.hipY)*35;
    // Compatibility mode also has articulated knees, elbows and wrists.
    Ag(E,0,103,32,5,"#18233e33",null);
    for(const [side,sign]of [['L',-1],['R',1]]) {
      const foot=pose.feet[side],x0=hx+sign*8,y0=hy;
      const fx=sign*12+(foot.x-sign*.205)*42,fy=98-(foot.y-.1775)*45;
      const kx=(x0+fx)/2+sign*(3+(HIP_HEIGHT-pose.hipY)*18),ky=(y0+fy)/2;
      xg(E,[x0,y0,kx,ky],_A,10);xg(E,[x0,y0,kx,ky],'#556988',7);
      xg(E,[kx,ky,fx,fy],_A,8);xg(E,[kx,ky,fx,fy],'#556988',5.5);
      E.save();E.translate(fx,fy);E.rotate(sign*foot.lift*.12);
      kg(E,-8,-3,18,9,4,sign<0?k:'#f9efde',_A,1.5);xg(E,[-4,0,0,-1,5,0],'#ffffff',1.2);E.restore();
    }
    E.translate(hx,hy);E.rotate(-pose.spineRoll);E.translate(0,-76);
    E.beginPath();E.moveTo(-15,47);E.bezierCurveTo(-21,49,-17,66,-16,77);E.quadraticCurveTo(0,82,16,77);E.bezierCurveTo(17,66,21,49,15,47);E.closePath();hB(E,s,_A,1.8);
    xg(E,[-15,76,0,79,15,76],k,3);kg(E,-7,56,14,15,4,'#fff5dd',null);OC(E,0,63,5,s);
    for(const sign of [-1,1]) {
      const left=sign<0;E.save();E.translate(sign*18,52);
      E.rotate(-(left?pose.leftArm:pose.rightArm));
      kg(E,-4.5,0,9,15,4.5,s,_A,1.6);E.translate(0,13);
      E.rotate(-sign*(.28+Math.abs(left?pose.leftElbow:pose.rightElbow)*.55));
      kg(E,-3.5,0,7,13,3.5,s,_A,1.5);E.translate(0,12);
      E.rotate(-(left?pose.leftWrist:pose.rightWrist));
      Ag(E,0,1,4.5,5,e?'#b8895f':D,_A,1.6);
      const curl=left?pose.leftCurl:pose.rightCurl;
      for(let finger=0;finger<4;finger++){
        const bend=left&&finger===0?curl*(1-pose.leftPoint):curl;
        const x=(finger-1.5)*2.1,length=finger===3?4.3:5.6;
        xg(E,[x,4,x+sign*bend*1.5,4+length*(1-bend*.35),x+sign*bend*2.5,4+length*(1-bend*.6)],e?'#b8895f':D,1.7);
      }
      xg(E,[-sign*3,0,-sign*6,2,-sign*5,4],e?'#b8895f':D,2);
      if(!left){kg(E,3,-13,4,18,2,'#4b607b',_A,1.3);Ag(E,5,-15,6,7,'#d6e5ea',_A,1.6);}
      E.restore();
    }
    E.translate(0,45);E.rotate(-pose.neckTurn);E.scale(.88,.88);E.translate(0,-45);
    if(e) Ag(E, -16, 5, 8, 9, "#b68a61", _A, 2.5), Ag(E, 14, 5, 8, 9, "#b68a61", _A, 2.5), Ag(E, -16, 5, 4, 5, "#dbb089", null), Ag(E, 14, 5, 4, 5, "#dbb089", null), E.beginPath(), E.moveTo(-25, 17), E.bezierCurveTo(-24, -6, 21, -4, 25, 20), E.bezierCurveTo(45, 20, 43, 47, 23, 48), E.lineTo(-7, 48), E.bezierCurveTo(-24, 48, -30, 36, -25, 17), E.closePath(), hB(E, "#be946b", _A, 2.8), Ag(E, 19, 34, 19, 12, "#d9b58b", null), Ag(E, -10, 22, 4, 5, "#fff4df", null), Ag(E, 13, 22, 4, 5, "#fff4df", null), Ag(E, -9, 23, 2.3, 3, _A, null), Ag(E, 14, 23, 2.3, 3, _A, null), Ag(E, 31, 31, 3, 2.6, "#78573f", null), xg(E, [20, 40, 26, 44, 32, 39], _A, 1.8), w && Ag(E, 24, 42, 4, 3, "#745148", null), xg(E, [-28, 24, -33, -3, 26, 1, 28, 22], k, 6), kg(E, -31, 19, 8, 17, 4, k, _A, 2), kg(E, 26, 17, 8, 12, 4, k, _A, 2);
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
  function drawBackground(E,A,g,B,I=0){drawIllustratedBackground(E,A,g,B,I);drawAnimeStage(E,A,g,B,I);}
  function drawIllustratedBackground(E, A, g, B, I = 0) {
    let C = B.theme, Q = ["city", "arcade", "space", "aurora", "festival", "station", "volcano"].includes(C), M = g * 0.77, Y = E.createLinearGradient(0, 0, 0, g);
    if (Y.addColorStop(0, Q ? "#252342" : C === "ice" ? "#a9d9ef" : "#b4dced"), Y.addColorStop(1, Q ? "#695275" : C === "volcano" ? "#eaaa8a" : "#f9e8d0"), E.fillStyle = Y, E.fillRect(0, 0, A, g), E.lineJoin = "round", E.lineCap = "round", Q) for (let G = 0; G < 28; G++) {
      let D = (G * 137 + 41) % A, i = (G * 57 + 17) % (g * 0.52);
      G % 5 === 0 ? OC(E, D, i, 3.5, "#fff1c8", 0.15) : Ag(E, D, i, 1.3, 1.3, "#d6d8f7aa", null);
    }
    else Ag(E, A * 0.83, g * 0.15, g * 0.064, g * 0.064, "#fff0c2", null), VQ(E, A * 0.18, g * 0.17, A / 700), VQ(E, A * 0.71, g * 0.28, A / 1050), VQ(E, A * 0.43, g * 0.12, A / 1300);
    for (let G = 0; G < 2; G++) E.beginPath(), E.moveTo(0, M), E.lineTo(0, g * (0.57 + G * 0.06)), E.bezierCurveTo(A * 0.3, g * (0.24 + G * 0.12), A * 0.55, g * 0.76, A, g * (0.46 + G * 0.12)), E.lineTo(A, M + 15), E.closePath(), hB(E, Q ? G ? "#4a4765" : "#505879" : G ? "#8ab5a4" : "#a5c5b7", null);
    if (["ice", "aurora", "volcano"].includes(C)) for (let G = 0; G < 4; G++) {
      let D = (G + 0.2) * A / 3, i = g * (0.25 + G % 2 * 0.06), s = A * 0.2;
      E.beginPath(), E.moveTo(D - s, M), E.quadraticCurveTo(D - s * 0.35, i + g * 0.13, D, i), E.quadraticCurveTo(D + s * 0.36, i + g * 0.12, D + s, M), E.closePath(), hB(E, C === "volcano" ? "#865f76" : "#96bdd5", null), E.beginPath(), E.moveTo(D - s * 0.3, i + g * 0.16), E.quadraticCurveTo(D - s * 0.12, i + g * 0.04, D, i), E.quadraticCurveTo(D + s * 0.12, i + g * 0.04, D + s * 0.3, i + g * 0.16), E.quadraticCurveTo(D + s * 0.12, i + g * 0.11, D, i + g * 0.15), E.quadraticCurveTo(D - s * 0.1, i + g * 0.09, D - s * 0.3, i + g * 0.16), hB(E, C === "volcano" ? "#ffc58a" : "#e9f8f9", null);
    }
    if (["school", "city", "lab", "arcade", "station", "fair", "carnival", "festival"].includes(C)) {
      for (let G = 0; G < 7; G++) {
        let D = G * A / 6 - A * 0.055, i = g * (0.25 + G % 3 * 0.055), s = A * 0.125;
        kg(E, D, i, s, M - i + 8, 14, Q ? "#3c4564" : "#93b3c5", Q ? "#222e49" : "#5f8da9", 2);
        for (let k = i + 18; k < M - 12; k += 30) for (let e = D + 12; e < D + s - 12; e += 22) kg(E, e, k, 11, 17, 5, Q ? "#e6c89b" : "#d8f1ee", null);
        kg(E, D + 5, i - 6, s - 10, 12, 6, B.color, null);
      }
      if (C === "school" && (kg(E, A * 0.34, g * 0.27, A * 0.32, g * 0.22, 14, "#f2d4a8", "#9c8990", 3), kg(E, A * 0.38, g * 0.31, A * 0.24, g * 0.08, 7, "#547e87", null), E.font = "bold " + Math.max(12, g * 0.035) + "px system-ui", E.textAlign = "center", E.fillStyle = "#fff3cc", E.fillText("INTEGRO", A * 0.5, g * 0.365), Ag(E, A * 0.5, g * 0.235, g * 0.045, g * 0.045, "#fff0cd", "#718b9c", 3), xg(E, [A * 0.5, g * 0.235, A * 0.5, g * 0.207, A * 0.5, g * 0.207], "#53677e", 2), xg(E, [A * 0.5, g * 0.235, A * 0.521, g * 0.235, A * 0.521, g * 0.235], "#53677e", 2)), C === "lab") for (let G = 0; G < 3; G++) {
        let D = A * (0.15 + G * 0.34);
        kg(E, D, g * 0.44, A * 0.035, g * 0.18, 9, "#b9eef080", "#d8faff", 2), Ag(E, D + A * 0.017, g * 0.53, A * 0.012, A * 0.012, B.accent, null);
      }
    }
    if (["forest", "garden", "river"].includes(C)) {
      for (let G = 0; G < 7; G++) {
        let D = G * A / 6, i = M - g * (0.36 + G % 3 * 0.04);
        xg(E, [D, M, D + 5, i + 24, D, i], "#685a60", A * 0.018), VQ(E, D, i, A / 420, G % 2 ? "#5c9c83" : "#75b48a"), VQ(E, D - 8, i - 25, A / 700, "#96c795");
      }
      for (let G = 0; G < 15; G++) mJ(E, G * 73 % A, M - 4 - G % 3 * 6, ["#e9bec7", "#f5dea7", "#c7bae8"][G % 3]);
    }
    if (["beach", "river"].includes(C)) {
      E.beginPath(), E.moveTo(0, g * 0.65), E.bezierCurveTo(A * 0.3, g * 0.54, A * 0.6, g * 0.73, A, g * 0.61), E.lineTo(A, M), E.lineTo(0, M), E.closePath(), hB(E, "#74bbcb", null);
      for (let G = 0; G < 8; G++) {
        let D = (G * A / 7 + I * 4) % A, i = g * (0.66 + G % 3 * 0.022);
        xg(E, [D, i, D + 20, i + 4, D + 40, i], "#d3f0eac4", 2);
      }
    }
    if (C === "space" && (Ag(E, A * 0.77, g * 0.22, g * 0.09, g * 0.09, "#ba9ccb", null), E.save(), E.translate(A * 0.77, g * 0.22), E.rotate(-0.25), Ag(E, 0, 0, g * 0.155, g * 0.028, null, "#e1c5e5", 6), E.restore()), C === "aurora") for (let G = 0; G < 3; G++) E.beginPath(), E.moveTo(-20, g * (0.16 + G * 0.04)), E.bezierCurveTo(A * 0.3, -g * 0.05, A * 0.45, g * 0.36, A + 20, g * (0.1 + G * 0.025)), E.strokeStyle = ["#a4eccd66", "#a9c6f066", "#c0b1ea66"][G], E.lineWidth = g * 0.04, E.stroke();
    if (["fair", "carnival", "festival"].includes(C)) {
      xg(E, [0, g * 0.12, A * 0.5, g * 0.31, A, g * 0.12], "#eadbd3", 2);
      for (let G = 0; G < 16; G++) {
        let D = (G + 0.5) * A / 16, i = g * 0.12 + Math.sin((G + 0.5) / 16 * Math.PI) * g * 0.09;
        Ag(E, D, i, 5, 7, laneColors[G % 4], null);
      }
    }
    let w = E.createLinearGradient(0, M, 0, g);
    w.addColorStop(0, Q ? "#5b6484" : "#b8a592"), w.addColorStop(1, Q ? "#343d62" : "#8f91a0"), E.fillStyle = w, E.fillRect(0, M, A, g - M), xg(E, [0, M, A / 2, M - 9, A, M], B.accent, 5);
    for (let G = 1; G < 5; G++) xg(E, [0, M + G * G * g * 9e-3, A / 2, M + G * G * g * 9e-3 - 4, A, M + G * G * g * 9e-3], "#e7e2ed22", 1.5);
    for (let G of [A * 0.065, A * 0.87]) {
      let D = Math.max(30, A * 0.067), i = g * 0.205;
      kg(E, G + 3, M - i + 4, D, i, 10, "#15223a66", null), kg(E, G, M - i, D, i, 10, "#41516d", _A, 3), kg(E, G + 5, M - i + 5, D - 10, i - 10, 6, "#2f3f58", null);
      for (let s of [M - i * 0.71, M - i * 0.25]) {
        let k = Math.min(D * 0.34, i * 0.2);
        Ag(E, G + D / 2, s, k, k, "#17283f", "#8293ad", 2), Ag(E, G + D / 2, s, k * 0.58 + Math.max(0, Math.sin(I * Math.PI * 2)), k * 0.58 + Math.max(0, Math.sin(I * Math.PI * 2)), "#465977", B.color, 2), Ag(E, G + D / 2, s, k * 0.18, k * 0.18, "#adc0d4", null);
      }
    }
  }
  function drawArrow(E, A, g, B, I, C, Q = 1) {
    E.save(), E.translate(A, g), E.rotate([-Math.PI / 2, Math.PI, 0, Math.PI / 2][I]), E.globalAlpha = Q, E.lineJoin = "round", E.lineCap = "round", E.beginPath(), E.moveTo(0, -B * 0.56), E.lineTo(B * 0.49, -B * 0.05), E.quadraticCurveTo(B * 0.58, B * 0.06, B * 0.42, B * 0.06), E.lineTo(B * 0.2, B * 0.06), E.lineTo(B * 0.2, B * 0.42), E.quadraticCurveTo(B * 0.2, B * 0.53, B * 0.09, B * 0.53), E.lineTo(-B * 0.1, B * 0.53), E.quadraticCurveTo(-B * 0.2, B * 0.53, -B * 0.2, B * 0.42), E.lineTo(-B * 0.2, B * 0.06), E.lineTo(-B * 0.42, B * 0.06), E.quadraticCurveTo(-B * 0.58, B * 0.06, -B * 0.49, -B * 0.05), E.closePath(), hB(E, C, "#202d48", 3), xg(E, [-B * 0.22, -B * 0.13, 0, -B * 0.37, B * 0.14, -B * 0.19], "#ffffff77", Math.max(1.5, B * 0.07)), E.restore();
  }
  function drawSolo(E, A, g, B, I, C, Q, M = false, Y = false) {
    let w = C / (60 / B.bpm), G = phaseEffects(B, C, Y), D = M ? { person: B, mono: 0 } : eJ(B, C, Y);
    drawBackground(E, A, g, B, Y ? 0 : w);
    let i = A < g, s = M ? Math.min(g * 0.52, A * 0.35) : i ? Math.min(g * 0.16, A * 0.28) : Math.min(g * 0.42, A * 0.23), k = i && !M ? 132 : g * 0.81 - s, e = I?.song.opponent.findLast((K) => K.time <= C && K.time > C - 0.22), h = I && C - I.last.at < 0.17 ? I.last.lane : -1;
    if (drawCharacter(E, A * (i ? 0.22 : 0.2), k, s, D.person, Y ? 0 : w, e?.lane ?? -1), drawCharacter(E, A * (i ? 0.78 : 0.8), k, s, {...Q,bpm:B.bpm}, Y ? 0 : w, h, true), M) return;
    E.textAlign = "center", E.font = "800 " + (i ? 10 : 12) + "px system-ui";
    let J = A * (i ? 0.22 : 0.2), c = k + s + 16;
    kg(E, J - (i ? 58 : 76), c - 13, i ? 116 : 152, 22, 11, D.mono > 0.8 ? "#343b46" : "#594977"), E.fillStyle = "#fff4da", E.fillText((D.mono > 0.8 ? "P&B \xB7 " : "CHEFE \xB7 ") + B.artist, J, c + 2);
    let m = Math.min(i ? A * 0.88 : A * 0.43, 410), S = (A - m) / 2, a = m / 4, n = i ? k + s + 92 : 105, T = g - 112, U = Math.max(100, (T - n) / 1.7);
    kg(E, S - 8, n - 40, m + 16, T - n + 50, 22, "#15223ce0", "#a6b7d84a", 2);
    for (let K = 0; K < 4; K++) kg(E, S + K * a + 2, n - 34, a - 5, T - n + 40, 16, "#40557538"), drawArrow(E, S + a * (G.slots[K] + 0.5), n, Math.min(34, a * 0.53), K, I.held.has(K) ? laneColors[K] : "#576980");
    E.save(), E.beginPath(), E.rect(S - 8, n - 40, m + 16, T - n + 50), E.clip();
    for (let K of I.notes) {
      if (["hit", "miss", "broken"].includes(K.state)) continue;
      let _ = n + (K.time - C) * U, CA = _ + K.hold * U;
      if (CA < n - 45 || _ > T + 40) continue;
      let MA = noteMotion(K.lane, C, K.time - C, G.shake), b = S + a * (G.slots[K.lane] + 0.5) + MA.x;
      K.hold && (kg(E, b - 6, Math.max(n, _), 12, Math.max(0.1, CA - Math.max(n, _)), 6, laneColors[K.lane]), kg(E, b - 2, Math.max(n, _), 4, Math.max(0.1, CA - Math.max(n, _)), 2, "#ffffff66")), K.state === "waiting" && drawArrow(E, b, _ + MA.y, Math.min(34, a * 0.53), K.lane, laneColors[K.lane]);
    }
    E.restore(), E.font = "800 10px system-ui", E.textAlign = "center", kg(E, A / 2 - 90, T - 14, 180, 23, 11, "#30445e"), E.fillStyle = "#eff3ff", E.fillText(G.label, A / 2, T + 1);
    let l = Math.floor((C / (60 / B.bpm) - 4) / 4), x = C < 4 * I.song.beat ? "3 \xB7 2 \xB7 1" : l % 4 >= 2 ? "SUA VEZ" : "ESCUTE O RITMO";
    if (kg(E, A / 2 - 86, n - 73, 172, 27, 13, "#263750"), E.textAlign = "center", E.font = "800 12px system-ui", E.fillStyle = l % 4 >= 2 ? "#d0f297" : "#e5d4ff", E.fillText(x, A / 2, n - 55), C - I.last.at < 0.65) {
      if (I.last.text === "PERFEITO!") {
        let K = Math.max(0, C - I.last.at);
        for (let _ = 0; _ < 7; _++) {
          let CA = _ * Math.PI * 2 / 7;
          OC(E, A / 2 + Math.cos(CA) * (28 + K * 90), n + 90 + Math.sin(CA) * (22 + K * 55), Math.max(1, 5 - K * 6), laneColors[_ % 4], K + _);
        }
      }
      E.font = "900 " + (i ? 17 : 22) + "px system-ui", E.fillStyle = I.last.text === "PERFEITO!" ? "#d7f79a" : "#f5ebd4", E.fillText(I.last.text, A / 2, Math.min(T - 30, n + 105)), I.combo >= 3 && (E.font = "900 32px system-ui", E.fillText(I.combo + "\xD7", A / 2, Math.min(T, n + 142)));
    }
    e && drawArrow(E, A * (i ? 0.22 : 0.2), k - 15, 16, e.lane, laneColors[e.lane]), C < 4 * I.song.beat && (E.font = "1000 60px system-ui", E.fillStyle = "#ffedb6", E.fillText(Math.max(1, 4 - Math.floor(C / I.song.beat)), A / 2, g * 0.57));
  }
  var avatars = [{ artist: "Duda", skin: "#d7a57e", hair: "#3a334d", color: "#27c6c8", accent: "#b6a5ff", look: "phones" }, { artist: "Ravi", skin: "#9f7159", hair: "#2c3042", color: "#f08065", accent: "#f6e5bf", look: "cap" }], escapeHTML = (E) => String(E).replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]), formatTime = (E) => Math.floor(Math.max(0, E) / 60) + ":" + String(Math.floor(Math.max(0, E) % 60)).padStart(2, "0");

export { laneColors, stages, generateSong, sanitizeProgress, RhythmRun, synthesize, DanceAudio, phaseEffects, drawBackground, drawCharacter, drawArrow, drawSolo, avatars, escapeHTML, formatTime, noteMotion };
