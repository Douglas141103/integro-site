// Generated from worlds.js by extract-legacy-bots.mjs. Do not edit.
const Ag = [
      null,
      { name: "Grama", color: 7452750 },
      { name: "Terra", color: 10383440 },
      { name: "Pedra", color: 9542817 },
      { name: "Madeira", color: 9003325 },
      { name: "Folhas", color: 4364635 },
      { name: "Areia", color: 14994827 },
      { name: "Tijolo", color: 12021333 },
      { name: "Vidro", color: 10413535 },
      { name: "T\xE1buas", color: 13344100 },
      { name: "Neve", color: 15135475 },
      { name: "Rocha base", color: 4409687 },
      {
        name: "Escada",
        color: 13015137,
        group: "Constru\xE7\xE3o",
        price: 12,
        pack: 4,
      },
      { name: "Porta", color: 10055755, group: "Constru\xE7\xE3o", price: 18 },
      {
        name: "Cerca",
        color: 14003314,
        group: "Constru\xE7\xE3o",
        price: 10,
        pack: 4,
      },
      { name: "Cama", color: 14575995, group: "Casa", price: 35 },
      { name: "Mesa", color: 12950373, group: "Casa", price: 20 },
      { name: "Cadeira", color: 9943470, group: "Casa", price: 15 },
      { name: "Ba\xFA", color: 12223039, group: "Casa", price: 28 },
      { name: "Fornalha", color: 7700612, group: "Casa", price: 40 },
      { name: "Lumin\xE1ria", color: 16766319, group: "Casa", price: 18 },
      {
        name: "Banca do marketplace",
        color: 5610374,
        group: "Casa",
        price: 30,
      },
      { name: "\xC1gua", color: 5029335, fluid: !0 },
      { name: "Lava", color: 16742969, fluid: !0 },
      {
        name: "Balde vazio",
        color: 12175819,
        group: "Baldes",
        price: 10,
        tool: !0,
      },
      {
        name: "Balde de \xE1gua",
        color: 4831717,
        group: "Baldes",
        price: 14,
        tool: !0,
      },
      {
        name: "Balde de lava",
        color: 16743733,
        group: "Baldes",
        price: 25,
        tool: !0,
      },
      {
        name: "Vaca",
        color: 15920865,
        group: "Animais",
        price: 65,
        animal: "cow",
      },
      {
        name: "Porco",
        color: 15307169,
        group: "Animais",
        price: 45,
        animal: "pig",
      },
      {
        name: "Boi",
        color: 9595723,
        group: "Animais",
        price: 75,
        animal: "ox",
      },
      {
        name: "Balde de leite",
        color: 16446424,
        group: "Baldes",
        tool: !0,
        price: 18,
      },
      {
        name: "Trigo",
        color: 15188581,
        group: "Animais",
        price: 10,
        pack: 5,
        tool: !0,
      },
      { name: "P\xE3o", color: 14131801, group: "Casa", price: 12, tool: !0 },
    ];
const RC = Ag.map((C, A) => A).filter((C) => C && C !== 11 && !Ag[C].fluid);
const sM = [
      { id: "planks", name: "T\xE1buas", cost: { 4: 1 }, out: 9, count: 4 },
      { id: "bricks", name: "Tijolos", cost: { 3: 4 }, out: 7, count: 4 },
      { id: "glass", name: "Vidro", cost: { 6: 3 }, out: 8, count: 2 },
      { id: "stairs", name: "Escadas", cost: { 9: 3 }, out: 12, count: 4 },
      { id: "door", name: "Porta", cost: { 9: 4 }, out: 13, count: 1 },
      { id: "fence", name: "Cercas", cost: { 9: 2 }, out: 14, count: 4 },
      { id: "bed", name: "Cama", cost: { 9: 4, 5: 3 }, out: 15, count: 1 },
      { id: "table", name: "Mesa", cost: { 9: 3 }, out: 16, count: 1 },
      { id: "chair", name: "Cadeira", cost: { 9: 2 }, out: 17, count: 1 },
      { id: "chest", name: "Ba\xFA", cost: { 9: 5 }, out: 18, count: 1 },
      { id: "furnace", name: "Fornalha", cost: { 3: 8 }, out: 19, count: 1 },
      {
        id: "lamp",
        name: "Lumin\xE1ria",
        cost: { 4: 1, 8: 2 },
        out: 20,
        count: 1,
      },
    ];
const $C = [
      {
        id: "glass",
        name: "Fundir vidro",
        cost: { 6: 3, 4: 1 },
        out: 8,
        count: 3,
        seconds: 12,
      },
      {
        id: "brick",
        name: "Assar tijolos",
        cost: { 2: 4, 4: 1 },
        out: 7,
        count: 4,
        seconds: 15,
      },
      {
        id: "bread",
        name: "Assar p\xE3o",
        cost: { 31: 3, 4: 1 },
        out: 32,
        count: 2,
        seconds: 10,
      },
    ];
const PY = (C) =>
      C === 30
        ? 14
        : C === 32
          ? 8
          : C <= 10
            ? 1
            : Math.max(
                1,
                Math.floor(((Ag[C]?.price || 4) / (Ag[C]?.pack || 1)) * 0.35),
              );
function Ji(C, A = {}) {
    if (!C || Ag[C]?.fluid || Ag[C]?.tool || Ag[C]?.animal) return [];
    let g =
        C === 12
          ? [
              [0, 0, 0, 1, 0.25, 1],
              [0, 0.25, 0.25, 1, 0.5, 1],
              [0, 0.5, 0.5, 1, 0.75, 1],
              [0, 0.75, 0.75, 1, 1, 1],
            ]
          : C === 13
            ? A.open
              ? [[0, 0, 0, 0.13, 1.95, 1]]
              : [[0, 0, 0, 1, 1.95, 0.13]]
            : C === 14
              ? [
                  [0, 0, 0.39, 1, 1.35, 0.61],
                  [0.39, 0, 0, 0.61, 1.35, 1],
                ]
              : C === 15
                ? [[0.05, 0, 0.03, 0.95, 0.55, 0.97]]
                : C === 16
                  ? [[0.04, 0.66, 0.04, 0.96, 0.85, 0.96]]
                  : C === 17
                    ? [
                        [0.15, 0, 0.15, 0.85, 0.52, 0.85],
                        [0.15, 0.52, 0.72, 0.85, 1.15, 0.88],
                      ]
                    : C === 18
                      ? [[0.07, 0, 0.09, 0.93, 0.8, 0.91]]
                      : C === 20
                        ? [[0.37, 0, 0.37, 0.63, 1.45, 0.63]]
                        : C === 21
                          ? [[0, 0, 0, 1, 0.9, 1]]
                          : [[0, 0, 0, 1, 1, 1]],
      B = A.rot || 0;
    for (let E = 0; E < B; E++)
      g = g.map(([I, Q, M, Y, w, G]) => [M, Q, 1 - Y, G, w, 1 - I]);
    return g;
  };
const cE = (C) =>
    C === 13 || C === 20 || C === 21 ? 2 : C === 14 || C === 17 ? 1.5 : 1;
const ii = 48;
const si = 5.12;
const ki = (C, A, g) => C + 48 * (g + 48 * A);
const BI = (C) => Number.isFinite(C);
const kM = (C, A, g) => Math.max(A, Math.min(g, C));
const Si = {
      initLife(C) {
        ((this.props = new Map()),
          (this.coins = Math.floor(
            kM(BI(C?.coins) ? C.coins : 180, 0, 999999),
          )),
          (this.lifeTime = BI(C?.lifeTime) ? C.lifeTime : 0),
          (this.lifeDirty = !0));
        for (let A of RC)
          this.inventory[A] === void 0 && (this.inventory[A] = 0);
        if (!C?.expansion)
          Object.assign(this.inventory, {
            12: 12,
            13: 2,
            14: 20,
            15: 1,
            16: 1,
            17: 2,
            18: 1,
            19: 1,
            20: 2,
            21: 1,
            24: 1,
            25: 1,
            26: 1,
            31: 10,
          });
        else
          for (let A of RC)
            A > 11 &&
              (this.inventory[A] = Math.floor(
                kM(Number(C.inventory?.[A]) || 0, 0, 9999),
              ));
        for (let A of Array.isArray(C?.props) ? C.props : []) {
          let [g, B] = Array.isArray(A) ? A : [];
          if (
            !Number.isInteger(g) ||
            !B ||
            typeof B != "object" ||
            g < 0 ||
            g >= this.cells.length ||
            this.cells[g] < 12 ||
            this.cells[g] > 21
          )
            continue;
          let E = {
            rot: Math.floor(kM(Number(B.rot) || 0, 0, 3)),
            open: B.open === !0,
            lit: B.lit !== !1,
            stored: {},
          };
          if (this.cells[g] === 18)
            for (let I of RC)
              E.stored[I] = Math.floor(kM(Number(B.stored?.[I]) || 0, 0, 9999));
          if (this.cells[g] === 19 && $C.some((I) => I.id === B.job?.id)) {
            let I = $C.find((Q) => Q.id === B.job.id);
            E.job = {
              id: I.id,
              remaining: kM(Number(B.job.remaining) || 0, 0, I.seconds),
            };
          }
          this.props.set(g, E);
        }
        if (((this.animals = []), C?.expansion && Array.isArray(C.animals)))
          for (let A of C.animals.slice(0, 40))
            !["cow", "pig", "ox", "sheep"].includes(A.type) ||
              !BI(A.x) ||
              !BI(A.z) ||
              A.x < 1 ||
              A.z < 1 ||
              A.x > 46 ||
              A.z > 46 ||
              this.animals.push({
                type: A.type,
                x: A.x,
                z: A.z,
                y: this.surface(Math.floor(A.x), Math.floor(A.z)) + 1,
                yaw: BI(A.yaw) ? A.yaw : 0,
                turn: 0,
                feedAt: BI(A.feedAt) ? A.feedAt : 0,
                milkAt: BI(A.milkAt) ? A.milkAt : 0,
              });
        else
          for (let [A, g] of [
            "cow",
            "pig",
            "ox",
            "sheep",
            "cow",
            "pig",
          ].entries())
            for (let B = 0; B < 200; B++) {
              let E = 12 + ((A * 5 + B * 3) % 22),
                I = 7 + ((A * 7 + B * 5) % 27),
                Q = this.surface(E, I);
              if (
                Q >= 5 &&
                this.get(E, Q, I) !== 5 &&
                this.get(E, Q, I) !== 4
              ) {
                this.animals.push({
                  type: g,
                  x: E + 0.5,
                  z: I + 0.5,
                  y: Q + 1,
                  yaw: A,
                  turn: 0,
                  feedAt: 0,
                  milkAt: 0,
                });
                break;
              }
            }
      },
      meta(C) {
        return this.props.get(ki(C.x, C.y, C.z)) || { rot: 0 };
      },
      setMeta(C, A) {
        (this.props.set(ki(C.x, C.y, C.z), A), (this.lifeDirty = !0));
      },
      nearby(C) {
        return (
          C &&
          Math.hypot(
            C.x + 0.5 - this.player.x,
            C.y + 0.5 - (this.player.y + 1.5),
            C.z + 0.5 - this.player.z,
          ) <= 7
        );
      },
      occupied(C, A, g) {
        if (this.get(C, A, g)) return !0;
        let B = this.get(C, A - 1, g);
        return B >= 12 && B <= 21 && cE(B) > 1;
      },
      collisionAt(C, A, g) {
        if (C < 0.32 || g < 0.32 || C > ii - 0.32 || g > ii - 0.32) return !0;
        for (let B = Math.floor(C - 0.29); B <= Math.floor(C + 0.29); B++)
          for (let E = Math.floor(A + 0.02) - 1; E <= Math.floor(A + 1.74); E++)
            for (let I = Math.floor(g - 0.29); I <= Math.floor(g + 0.29); I++)
              for (let Q of Ji(
                this.get(B, E, I),
                this.meta({ x: B, y: E, z: I }),
              ))
                if (
                  C + 0.29 > B + Q[0] &&
                  C - 0.29 < B + Q[3] &&
                  A + 1.74 > E + Q[1] &&
                  A + 0.02 < E + Q[4] &&
                  g + 0.29 > I + Q[2] &&
                  g - 0.29 < I + Q[5]
                )
                  return !0;
        return !1;
      },
      stepMove(C, A) {
        let g = this.player;
        if (!this.collides(C, g.y, A)) {
          ((g.x = C), (g.z = A));
          return;
        }
        if (this.creative || g.vy > 0 || !this.collides(g.x, g.y - 0.12, g.z))
          return;
        let B = !1;
        for (let E = Math.floor(C - 0.3); E <= Math.floor(C + 0.3); E++)
          for (let I = Math.floor(A - 0.3); I <= Math.floor(A + 0.3); I++)
            for (let Q = Math.floor(g.y) - 1; Q <= Math.floor(g.y + 0.3); Q++)
              this.get(E, Q, I) === 12 && (B = !0);
        B &&
          !this.collides(g.x, g.y + 0.27, g.z) &&
          !this.collides(C, g.y + 0.27, A) &&
          ((g.x = C), (g.z = A), (g.y += 0.27), (g.vy = 0));
      },
      buy(C) {
        let A = Ag[C],
          g = A?.pack || 1;
        return !A?.price ||
          !RC.includes(C) ||
          this.coins < A.price ||
          this.inventory[C] + g > 9999
          ? !1
          : ((this.coins -= A.price), (this.inventory[C] += g), !0);
      },
      sell(C, A = 1) {
        return !RC.includes(C) ||
          !Number.isInteger(A) ||
          A < 1 ||
          this.inventory[C] < A ||
          this.creative
          ? !1
          : ((this.inventory[C] -= A),
            (this.coins = Math.min(999999, this.coins + PY(C) * A)),
            C === 30 &&
              (this.inventory[24] = Math.min(9999, this.inventory[24] + A)),
            !0);
      },
      use(C) {
        let A = this.get(C.x, C.y, C.z);
        if (!this.nearby(C)) return "Aproxime-se para usar.";
        let g = { ...this.meta(C) };
        if (A === 13) {
          g.open = !g.open;
          let B = this.meta(C);
          return (
            this.setMeta(C, g),
            this.collides(this.player.x, this.player.y, this.player.z)
              ? (this.setMeta(C, B), "Afaste-se um pouco da porta.")
              : g.open
                ? "Porta aberta."
                : "Porta fechada."
          );
        }
        if (A === 20)
          return (
            (g.lit = g.lit === !1),
            this.setMeta(C, g),
            g.lit ? "Lumin\xE1ria acesa." : "Lumin\xE1ria apagada."
          );
        if (A === 15)
          return (
            (this.time =
              Math.ceil(this.time / (Math.PI * 240)) * Math.PI * 240),
            "Voc\xEA descansou. Um novo dia come\xE7ou!"
          );
        if (A === 17) {
          let B = 0.5,
            E = 0.34;
          for (let Q = 0; Q < (g.rot || 0); Q++) [B, E] = [E, 1 - B];
          let I = C.y + 0.55;
          return this.collides(C.x + B, I, C.z + E)
            ? "Deixe espa\xE7o livre em volta da cadeira."
            : (Object.assign(this.player, {
                x: C.x + B,
                y: I,
                z: C.z + E,
                vy: 0,
              }),
              (this.seated = !0),
              "Voc\xEA sentou! Mova o direcional para levantar.");
        }
        return A === 16
          ? "Sua mesa est\xE1 pronta. Selecione um p\xE3o na mochila e toque em Usar para comer."
          : null;
      },
      chest(C, A, g, B) {
        if (
          !this.nearby(C) ||
          this.get(C.x, C.y, C.z) !== 18 ||
          !RC.includes(A) ||
          !Number.isInteger(g) ||
          g < 1
        )
          return !1;
        let E = { ...this.meta(C), stored: { ...this.meta(C).stored } },
          I = B === "put" ? this.inventory : E.stored,
          Q = B === "put" ? E.stored : this.inventory;
        return (I[A] || 0) < g || (Q[A] || 0) + g > 9999
          ? !1
          : ((I[A] -= g), (Q[A] = (Q[A] || 0) + g), this.setMeta(C, E), !0);
      },
      smelt(C, A) {
        let g = $C.find((E) => E.id === A),
          B = { ...this.meta(C) };
        if (
          !g ||
          !this.nearby(C) ||
          this.get(C.x, C.y, C.z) !== 19 ||
          B.job ||
          Object.entries(g.cost).some(([E, I]) => this.inventory[E] < I)
        )
          return !1;
        for (let [E, I] of Object.entries(g.cost)) this.inventory[E] -= I;
        return (
          (B.job = { id: g.id, remaining: g.seconds }),
          this.setMeta(C, B),
          !0
        );
      },
      collectSmelt(C) {
        let A = { ...this.meta(C) },
          g = $C.find((B) => B.id === A.job?.id);
        return !g ||
          !this.nearby(C) ||
          this.get(C.x, C.y, C.z) !== 19 ||
          A.job.remaining > 0 ||
          this.inventory[g.out] + g.count > 9999
          ? !1
          : ((this.inventory[g.out] += g.count),
            delete A.job,
            (this.stats.crafted += g.count),
            this.setMeta(C, A),
            !0);
      },
      bucket(C) {
        let A = this.selected;
        if (
          ![24, 25, 26].includes(A) ||
          (!this.creative && !this.inventory[A]) ||
          !C
        )
          return !1;
        if (A === 24) {
          let E = this.get(C.x, C.y, C.z);
          if ((![22, 23].includes(E) && !C.lake) || !this.nearby(C)) return !1;
          let I = E === 23 ? 26 : 25;
          return this.inventory[I] >= 9999
            ? !1
            : (C.lake || this.set(C.x, C.y, C.z, 0),
              this.creative || this.inventory[24]--,
              this.inventory[I]++,
              (this.selected = I),
              !0);
        }
        let g = C.place,
          B = A === 25 ? 22 : 23;
        if (
          !g ||
          !this.nearby(g) ||
          this.occupied(g.x, g.y, g.z) ||
          this.overlaps(g.x, g.y, g.z) ||
          !this.get(g.x, g.y - 1, g.z) ||
          !this.set(g.x, g.y, g.z, B)
        )
          return !1;
        this.creative ||
          (this.inventory[A]--,
          (this.inventory[24] = Math.min(9999, this.inventory[24] + 1)));
        for (let [E, I] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ])
          this.get(g.x + E, g.y, g.z + I) === (B === 22 ? 23 : 22) &&
            (this.set(g.x, g.y, g.z, 3), this.set(g.x + E, g.y, g.z + I, 3));
        return !0;
      },
      spawnAnimal(C, A) {
        let g = Ag[A];
        return !g?.animal ||
          !this.nearby(C) ||
          this.animals.length >= 40 ||
          (!this.creative && !this.inventory[A]) ||
          this.occupied(C.x, C.y, C.z) ||
          !this.get(C.x, C.y - 1, C.z) ||
          C.y < si ||
          this.collides(C.x + 0.5, C.y + 0.03, C.z + 0.5)
          ? !1
          : (this.creative || this.inventory[A]--,
            this.animals.push({
              type: g.animal,
              x: C.x + 0.5,
              y: C.y,
              z: C.z + 0.5,
              yaw: this.player.yaw,
              turn: 0,
              feedAt: 0,
              milkAt: 0,
            }),
            (this.lifeDirty = !0),
            !0);
      },
      useAnimal(C) {
        let A = this.animals[C];
        return !A ||
          Math.hypot(
            A.x - this.player.x,
            A.y - this.player.y,
            A.z - this.player.z,
          ) > 7
          ? "Aproxime-se do animal."
          : A.type === "cow" && this.selected === 24 && this.inventory[24]
            ? this.lifeTime < A.milkAt
              ? "A vaca precisa descansar: " +
                Math.ceil(A.milkAt - this.lifeTime) +
                " s."
              : this.inventory[30] >= 9999
                ? "Sua mochila est\xE1 cheia."
                : (this.inventory[24]--,
                  this.inventory[30]++,
                  (A.milkAt = this.lifeTime + 45),
                  "Leite coletado! Venda no marketplace; o balde vazio volta para voc\xEA.")
            : this.selected === 31 && this.inventory[31]
              ? this.lifeTime < A.feedAt
                ? "J\xE1 est\xE1 alimentado! Aguarde " +
                  Math.ceil(A.feedAt - this.lifeTime) +
                  " s."
                : (this.inventory[31]--,
                  (A.feedAt = this.lifeTime + 30),
                  this.creative || (this.coins += 5),
                  "Animal alimentado! " + (this.creative ? "" : " +5 integros"))
              : A.type === "cow"
                ? "Selecione trigo para alimentar ou um balde vazio para tirar leite."
                : "Selecione trigo na mochila para alimentar.";
      },
      tickLife(C, A = !0) {
        this.lifeTime += C;
        for (let [B, E] of this.props)
          E.job?.remaining > 0 &&
            ((E.job.remaining = Math.max(0, E.job.remaining - C)),
            E.job.remaining || (this.lifeDirty = !0));
        if (A)
          for (let B of this.animals) {
            ((B.turn -= C),
              B.turn <= 0 &&
                ((B.yaw += Math.sin(this.lifeTime * 0.7 + B.x) * 1.4),
                (B.turn = 2.4)));
            let E = B.type === "pig" ? 0.42 : 0.3,
              I = B.x - Math.sin(B.yaw) * E * C,
              Q = B.z - Math.cos(B.yaw) * E * C,
              M = this.surface(Math.floor(I), Math.floor(Q)) + 1;
            M > si && Math.abs(M - B.y) < 0.6 && !this.collides(I, M + 0.02, Q)
              ? ((B.x = I), (B.z = Q), (B.y = M))
              : ((B.yaw += 1.7), (B.turn = 1));
          }
        let g = this.player;
        A &&
          !this.creative &&
          this.get(Math.floor(g.x), Math.floor(g.y + 0.1), Math.floor(g.z)) ===
            23 &&
          (this.home(),
          (this.notice =
            "A lava estava quente! Voc\xEA voltou ao in\xEDcio sem perder seus itens."));
      },
      lifeSave() {
        return {
          expansion: 1,
          coins: this.coins,
          lifeTime: this.lifeTime,
          props: [...this.props],
          animals: this.animals.map((C) => ({ ...C })),
        };
      },
    };
const Jg = 48;
const AE = 30;
const BQ = 5.12;
const SM = (C, A, g) => Math.max(A, Math.min(g, C));
const Dt = (C, A) => {
      let g = Math.sin(C * 127.1 + A * 311.7 + 42) * 43758.5453;
      return g - Math.floor(g);
    };
const eM = (C, A, g) => C + Jg * (g + Jg * A);
const ei = (C, A) =>
      Math.floor(
        6 +
          Math.sin(C * 0.16) * 1.8 +
          Math.cos(A * 0.17) * 1.7 +
          (C > 29 ? Math.max(0, 1 - Math.hypot(C - 38, A - 33) / 18) * 10 : 0),
      );
const oM = class {
      constructor(A) {
        if (
          ((this.cells = new Uint8Array(Jg * Jg * AE)),
          (this.edits = new Map()),
          (this.inventory = {
            1: 24,
            2: 24,
            3: 24,
            4: 12,
            5: 12,
            6: 16,
            7: 12,
            8: 12,
            9: 24,
            10: 8,
          }),
          (this.stats = { mined: 0, placed: 0, crafted: 0 }),
          (this.selected = 1),
          (this.creative = !1),
          (this.time = 0),
          (this.dirty = new Set()),
          this.generate(),
          (this.base = this.cells.slice()),
          A?.version === 1)
        ) {
          for (let g of Array.isArray(A.edits) ? A.edits : [])
            Array.isArray(g) &&
              Number.isInteger(g[0]) &&
              g[0] >= Jg * Jg &&
              g[0] < this.cells.length &&
              Number.isInteger(g[1]) &&
              g[1] >= 0 &&
              g[1] <= 23 &&
              g[1] !== 11 &&
              ((this.cells[g[0]] = g[1]), this.edits.set(g[0], g[1]));
          for (let g in this.inventory)
            this.inventory[g] = Number.isFinite(A.inventory?.[g])
              ? Math.floor(SM(A.inventory[g], 0, 9999))
              : this.inventory[g];
          for (let g in this.stats)
            this.stats[g] = Math.floor(SM(Number(A.stats?.[g]) || 0, 0, 1e6));
          (Ag[A.selected] && A.selected !== 11 && (this.selected = A.selected),
            (this.creative = A.creative === !0),
            (this.time = Number.isFinite(A.time) ? Math.max(0, A.time) : 0));
        }
        if (
          (this.initLife(A),
          (this.lastSafe = this.findDrySpawn()),
          (this.jumpBuffer = 0),
          (this.player = {
            ...this.lastSafe,
            vy: 0,
            yaw: Math.PI,
            pitch: -0.05,
            grounded: !1,
          }),
          A?.player)
        ) {
          let g = A.player;
          ["x", "y", "z", "yaw", "pitch"].every((B) => Number.isFinite(g[B])) &&
            g.x > 1 &&
            g.x < Jg - 1 &&
            g.z > 1 &&
            g.z < Jg - 1 &&
            g.y > 1 &&
            g.y < AE + 12 &&
            !this.collides(g.x, g.y, g.z) &&
            Object.assign(this.player, {
              x: g.x,
              y: g.y,
              z: g.z,
              yaw: g.yaw,
              pitch: SM(g.pitch, -1.4, 1.4),
            });
        }
      }
      get(A, g, B) {
        return g < 0
          ? 11
          : A < 0 || B < 0 || A >= Jg || B >= Jg || g >= AE
            ? 0
            : this.cells[eM(A, g, B)];
      }
      generate() {
        for (let A = 0; A < Jg; A++)
          for (let g = 0; g < Jg; g++) {
            let B = ei(A, g);
            for (let E = 0; E <= B; E++)
              this.cells[eM(A, E, g)] =
                E === 0
                  ? 11
                  : E < B - 2
                    ? 3
                    : E < B
                      ? 2
                      : B < 6
                        ? 6
                        : B > 12
                          ? 10
                          : 1;
          }
        for (let A = 3; A < Jg - 3; A++)
          for (let g = 3; g < Jg - 3; g++) {
            let B = ei(A, g);
            if (
              !(
                B < 6 ||
                B > 11 ||
                Math.hypot(A - 23, g - 10) < 5 ||
                Dt(A, g) > 0.025
              )
            ) {
              for (let E = B + 1; E < B + 5; E++) this.cells[eM(A, E, g)] = 4;
              for (let E = -2; E <= 2; E++)
                for (let I = -2; I <= 2; I++)
                  for (let Q = 3; Q <= 5; Q++) {
                    if (Math.abs(E) + Math.abs(I) + (Q === 5 ? 1 : 0) > 3)
                      continue;
                    let M = eM(A + E, B + Q, g + I);
                    this.cells[M] || (this.cells[M] = 5);
                  }
            }
          }
      }
      surface(A, g) {
        for (let B = AE - 1; B >= 0; B--)
          if (this.get(A, B, g) && !Ag[this.get(A, B, g)]?.fluid) return B;
        return 0;
      }
      set(A, g, B, E) {
        if (
          !Number.isInteger(A) ||
          !Number.isInteger(g) ||
          !Number.isInteger(B) ||
          A < 0 ||
          B < 0 ||
          A >= Jg ||
          B >= Jg ||
          g <= 0 ||
          g >= AE ||
          !Number.isInteger(E) ||
          E < 0 ||
          E > 23 ||
          E === 11
        )
          return !1;
        let I = eM(A, g, B);
        (this.props?.delete(I),
          (this.lifeDirty = !0),
          (this.cells[I] = E),
          this.base[I] === E ? this.edits.delete(I) : this.edits.set(I, E));
        for (let [Q, M] of [
          [0, 0],
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]) {
          let Y = Math.floor((A + Q) / 8),
            w = Math.floor((B + M) / 8);
          Y >= 0 && w >= 0 && Y < 6 && w < 6 && this.dirty.add(Y + "," + w);
        }
        return !0;
      }
      collides(A, g, B) {
        return this.collisionAt(A, g, B);
      }
      overlaps(A, g, B) {
        let E = this.player;
        return (
          A + 1 > E.x - 0.3 &&
          A < E.x + 0.3 &&
          g + 1 > E.y &&
          g < E.y + 1.76 &&
          B + 1 > E.z - 0.3 &&
          B < E.z + 0.3
        );
      }
      mine(A) {
        let g = this.get(A.x, A.y, A.z),
          B = this.meta(A);
        return !g ||
          g === 11 ||
          Ag[g]?.fluid ||
          !this.nearby(A) ||
          B.job ||
          Object.values(B.stored || {}).some((E) => E > 0) ||
          !this.set(A.x, A.y, A.z, 0)
          ? !1
          : (this.creative ||
              (this.inventory[g] = Math.min(
                9999,
                (this.inventory[g] || 0) + 1,
              )),
            this.stats.mined++,
            g);
      }
      place(A) {
        let g = this.selected;
        return Ag[g]?.animal
          ? this.spawnAnimal(A, g)
          : !A ||
              Ag[g]?.tool ||
              Ag[g]?.fluid ||
              this.occupied(A.x, A.y, A.z) ||
              this.overlaps(A.x, A.y, A.z) ||
              (!this.creative && !this.inventory[g]) ||
              !this.nearby(A) ||
              (cE(g) > 1 &&
                (A.y + 2 >= AE ||
                  this.occupied(A.x, A.y + 1, A.z) ||
                  this.overlaps(A.x, A.y + 1, A.z))) ||
              (g >= 12 && !this.get(A.x, A.y - 1, A.z)) ||
              !this.set(A.x, A.y, A.z, g)
            ? !1
            : (g >= 12 &&
                this.setMeta(A, {
                  rot:
                    (((Math.round(this.player.yaw / (Math.PI / 2)) + 2) % 4) +
                      4) %
                    4,
                  open: !1,
                  lit: !0,
                }),
              this.creative || this.inventory[g]--,
              this.stats.placed++,
              !0);
      }
      craft(A) {
        let g = sM.find((B) => B.id === A);
        if (
          !g ||
          Object.entries(g.cost).some(([B, E]) => this.inventory[B] < E) ||
          this.inventory[g.out] + g.count > 9999
        )
          return !1;
        for (let [B, E] of Object.entries(g.cost)) this.inventory[B] -= E;
        return (
          (this.inventory[g.out] += g.count),
          (this.stats.crafted += g.count),
          !0
        );
      }
      findDrySpawn() {
        let A = null,
          g = 1 / 0;
        for (let B = 2; B < Jg - 2; B++)
          for (let E = 2; E < Jg - 2; E++) {
            let I = this.surface(B, E),
              Q = this.get(B, I, E),
              M = I + 1.05;
            if (
              M < BQ + 0.2 ||
              Q === 4 ||
              Q === 5 ||
              this.collides(B + 0.5, M, E + 0.5)
            )
              continue;
            let Y = (B - 23) ** 2 + (E - 10) ** 2;
            Y < g && ((g = Y), (A = { x: B + 0.5, y: M, z: E + 0.5 }));
          }
        return A || { x: 23.5, y: this.surface(23, 10) + 1.05, z: 10.5 };
      }
      waterSurface() {
        let A = this.player;
        for (let g = Math.floor(A.y + 0.1); g <= Math.floor(A.y + 1); g++)
          if (this.get(Math.floor(A.x), g, Math.floor(A.z)) === 22)
            return g + 0.8;
        return BQ;
      }
      inWater() {
        return this.player.y < this.waterSurface() + 0.05;
      }
      jump() {
        ((this.jumpBuffer = 0.16),
          !this.creative &&
            (this.player.grounded || this.inWater()) &&
            ((this.player.vy = Math.max(this.player.vy, 9)),
            (this.player.grounded = !1),
            (this.jumpBuffer = 0)));
      }
      home() {
        ((this.seated = !1),
          (this.lastSafe = this.findDrySpawn()),
          (this.jumpBuffer = 0),
          Object.assign(this.player, {
            ...this.lastSafe,
            vy: 0,
            grounded: !1,
          }));
      }
      update(A, g = {}) {
        ((A = SM(A, 0, 0.05)), (this.time += A));
        let B = this.player,
          E = g.x || 0,
          I = g.z || 0;
        (E || I || g.up) && (this.seated = !1);
        let Q = Math.hypot(E, I);
        Q > 1 && ((E /= Q), (I /= Q));
        let M = g.sprint ? 7.2 : 4.7,
          Y = (E * Math.cos(B.yaw) + I * Math.sin(B.yaw)) * M * A,
          w = (-E * Math.sin(B.yaw) + I * Math.cos(B.yaw)) * M * A,
          G = Math.max(1, Math.ceil(Math.hypot(Y, w) / 0.18));
        for (let h = 0; h < G; h++)
          (this.stepMove(B.x + Y / G, B.z), this.stepMove(B.x, B.z + w / G));
        if (this.creative) {
          B.vy = 0;
          let h = (g.up || 0) * M * A;
          (B.y + h > 1 &&
            B.y + h < AE + 10 &&
            !this.collides(B.x, B.y + h, B.z) &&
            (B.y += h),
            (B.grounded = !1));
        } else {
          let h = this.inWater(),
            J = g.up > 0 || this.jumpBuffer > 0;
          if (
            (J &&
              (h || B.grounded) &&
              ((B.vy = Math.max(B.vy, 9)), (this.jumpBuffer = 0)),
            h)
          )
            if (J || B.vy > 3) B.vy -= 5 * A;
            else {
              let S = (this.waterSurface() - 0.65 - B.y) * 14 - B.vy * 5;
              B.vy = SM(B.vy + S * A, -2, 3);
            }
          else B.vy = Math.max(-24, B.vy - 24 * A);
          this.jumpBuffer = Math.max(0, this.jumpBuffer - A);
          let s = B.vy * A,
            e = Math.max(1, Math.ceil(Math.abs(s) / 0.15));
          B.grounded = !1;
          for (let S = 0; S < e; S++)
            if (!this.collides(B.x, B.y + s / e, B.z)) B.y += s / e;
            else {
              (B.vy < 0 && (B.grounded = !0), (B.vy = 0));
              break;
            }
        }
        B.y < -3 && this.home();
      }
      serialize() {
        return {
          version: 1,
          ...this.lifeSave(),
          edits: [...this.edits],
          inventory: { ...this.inventory },
          selected: this.selected,
          creative: this.creative,
          stats: { ...this.stats },
          time: this.time,
          player: { ...this.player },
        };
      }
    };
const CQ = {
      classic: {
        name: "Cl\xE1ssico",
        seconds: 0,
        desc: "3 vidas. Evite bombas e n\xE3o deixe frutas cair.",
      },
      arcade: {
        name: "Contra o tempo",
        seconds: 60,
        desc: "60 segundos. Bombas tiram 50 pontos.",
      },
      zen: {
        name: "Zen",
        seconds: 90,
        desc: "90 segundos de frutas, sem bombas nem vidas.",
      },
    };
const EQ = (C, A, g) => Math.max(A, Math.min(g, C));
const kt = (C) => Math.floor(Math.max(0, C) / 10);
function St(C, A, g) {
    let B = g.x - A.x,
      E = g.y - A.y,
      I = EQ(((C.x - A.x) * B + (C.y - A.y) * E) / (B * B + E * E || 1), 0, 1);
    return Math.hypot(C.x - A.x - I * B, C.y - A.y - I * E);
  };
const fY = class {
    constructor(A = "classic", g = Math.random) {
      ((this.mode = CQ[A] ? A : "classic"),
        (this.rng = g),
        (this.w = 1e3),
        (this.h = 620),
        (this.score = 0),
        (this.lives = 3),
        (this.time = 0),
        (this.state = "playing"),
        (this.objects = []),
        (this.events = []),
        (this.nextWave = 0.5),
        (this.nextId = 1),
        (this.sliced = 0),
        (this.maxCombo = 0),
        (this.strokeCount = 0),
        (this.strokeBonus = 0),
        (this.shield = 0),
        (this.slow = 0),
        (this.double = 0),
        (this.paid = !1),
        (this.reason = ""));
    }
    get remaining() {
      return Math.max(0, CQ[this.mode].seconds - this.time);
    }
    get reward() {
      return kt(this.score);
    }
    emit(A, g = {}) {
      this.events.push({ type: A, ...g });
    }
    drain() {
      return this.events.splice(0);
    }
    startStroke() {
      ((this.strokeCount = 0),
        (this.strokeBonus = 0),
        (this.strokeStart = this.time));
    }
    spawn() {
      let A =
        2 +
        Math.floor(this.rng() * 3) +
        Math.min(2, Math.floor(this.time / 22));
      for (let g = 0; g < A; g++) {
        let B = this.mode !== "zen" && this.time > 3 && this.rng() < 0.16,
          E = !B && this.rng() < 0.07,
          I = 120 + this.rng() * 760;
        this.objects.push({
          id: this.nextId++,
          x: I,
          y: this.h + 65 + g * 10,
          vx: (500 - I) * (0.22 + this.rng() * 0.2),
          vy: -Math.sqrt(2 * 950 * this.h * (0.62 + this.rng() * 0.2)),
          r: B ? 30 : 34 + this.rng() * 9,
          kind: B
            ? "bomb"
            : E
              ? "gold"
              : ["apple", "orange", "watermelon", "kiwi", "plum", "pear"][
                  Math.floor(this.rng() * 6)
                ],
          angle: this.rng() * 6,
          spin: (this.rng() - 0.5) * 3,
          cut: !1,
        });
      }
    }
    use(A, g) {
      return this.state !== "playing" ||
        !g.boosts[A] ||
        (A === "shield" && this.shield) ||
        (A === "slow" && this.slow > 0) ||
        (A === "double" && this.double > 0) ||
        !["shield", "slow", "double"].includes(A)
        ? !1
        : (g.boosts[A]--,
          A === "shield" && (this.shield = 1),
          A === "slow" && (this.slow = 6),
          A === "double" && (this.double = 8),
          this.emit("boost", { id: A }),
          !0);
    }
    slice(A, g) {
      if (!(this.state !== "playing" || Math.hypot(g.x - A.x, g.y - A.y) < 2)) {
        this.time - (this.strokeStart ?? 0) > 0.4 && this.startStroke();
        for (let B of this.objects) {
          if (B.cut || B.y > this.h + B.r || B.y < 85 || St(B, A, g) > B.r + 5)
            continue;
          if (((B.cut = !0), B.kind === "bomb")) {
            if (((this.strokeCount = 0), (this.strokeBonus = 0), this.shield))
              ((this.shield = 0), this.emit("shield", { ...B }));
            else if (
              (this.mode === "classic"
                ? this.lives--
                : (this.score = Math.max(0, this.score - 50)),
              this.emit("bomb", { ...B }),
              this.lives <= 0)
            ) {
              this.finish("Voc\xEA perdeu as 3 vidas.");
              break;
            }
            continue;
          }
          (this.sliced++, this.strokeCount++);
          let E = this.double > 0 ? 2 : 1,
            I = B.kind === "gold" ? 50 : 10,
            Q = this.strokeCount >= 3 ? this.strokeCount * 5 : 0,
            M = Math.max(0, Q - this.strokeBonus);
          ((this.strokeBonus = Q),
            (this.score += (I + M) * E),
            (this.maxCombo = Math.max(this.maxCombo, this.strokeCount)),
            this.emit("slice", {
              ...B,
              points: (I + M) * E,
              combo: this.strokeCount >= 3 ? this.strokeCount : 0,
            }));
        }
      }
    }
    update(A) {
      if (this.state !== "playing") return;
      ((A = EQ(A, 0, 0.05)),
        (this.time += A),
        (this.slow = Math.max(0, this.slow - A)),
        (this.double = Math.max(0, this.double - A)));
      let g = A * (this.slow > 0 ? 0.45 : 1);
      ((this.nextWave -= g),
        this.nextWave <= 0 &&
          (this.spawn(),
          (this.nextWave =
            Math.max(0.7, 1.7 - this.time * 0.009) + this.rng() * 0.35)));
      for (let B of this.objects)
        if (
          ((B.x += B.vx * g),
          (B.y += B.vy * g),
          (B.vy += 950 * g),
          (B.angle += B.spin * g),
          !B.cut &&
            B.y > this.h + 100 &&
            B.vy > 0 &&
            ((B.cut = !0),
            B.kind !== "bomb" &&
              this.mode === "classic" &&
              (this.lives--,
              this.emit("miss", { x: EQ(B.x, 80, 920), y: this.h - 100 }),
              this.lives <= 0)))
        ) {
          this.finish("Tr\xEAs frutas escaparam ou bombas foram cortadas.");
          break;
        }
      ((this.objects = this.objects.filter(
        (B) => !B.cut && B.y < this.h + 160,
      )),
        CQ[this.mode].seconds &&
          this.remaining <= 0 &&
          this.finish("Tempo encerrado!"));
    }
    finish(A = "Partida encerrada.") {
      this.state !== "finished" &&
        ((this.state = "finished"), (this.reason = A), this.emit("finish"));
    }
    settle(A) {
      if (this.state !== "finished" || this.paid) return 0;
      this.paid = !0;
      let g = this.reward;
      return (
        (A.integros += g),
        (A.earned += g),
        (A.points += this.score),
        A.rounds++,
        (A.best[this.mode] = Math.max(A.best[this.mode], this.score)),
        g
      );
    }
  };
const QQ = [
      "Som na caixa",
      "Cora\xE7\xE3o pixel",
      "\xD3rbita",
      "Ondas",
      "Diamante",
      "Festa de blocos",
    ];
const VB = (C, A, g) => Math.max(A, Math.min(g, C));
function zi(C, A, g) {
    let B = (A - 17.5) / 17.5,
      E = (g - 15.5) / 15.5;
    if (C === 0)
      return (
        (A >= 10 && A <= 20 && Math.abs(g - 15.5) < (A - 8) * 1.06) ||
        (A < 11 && Math.abs(g - 15.5) < 1.15) ||
        (A > 22 &&
          A < 31 &&
          (Math.abs(g - 15.5) < 0.8 ||
            Math.abs(Math.abs(g - 15.5) - (A - 21) * 1.6) < 0.85))
      );
    if (C === 1) {
      let I = B * 1.65,
        Q = -E * 1.65;
      return (I * I + Q * Q - 1) ** 3 - I * I * Q * Q * Q < 0;
    }
    return C === 2
      ? Math.abs(Math.hypot(B, E) - 0.54) < 0.15 ||
          Math.abs(E - 0.4 * B) < 0.065
      : C === 3
        ? Math.abs(E - 0.42 * Math.sin(B * 7)) < 0.18
        : C === 4
          ? Math.abs(B) + Math.abs(E) < 0.72 ||
            Math.abs(Math.abs(B) + Math.abs(E) - 1.2) < 0.065
          : ((A >> 2) + (g >> 2)) % 4 === 0;
  };
const cM = class {
    constructor({ level: A = 0, best: g = 0 } = {}) {
      ((this.best = g), (this.score = 0), (this.lives = 3), this.load(A));
    }
    load(A) {
      ((this.level = VB(A, 0, QQ.length - 1)),
        (this.bricks = []),
        (this.revision = 0),
        (this.left = 0));
      for (let g = 0; g < 32; g++)
        for (let B = 0; B < 36; B++) {
          if (zi(A, B, g)) {
            this.bricks.push(null);
            continue;
          }
          let I =
            B === 0 ||
            g === 0 ||
            B === 35 ||
            g === 31 ||
            [
              [B - 1, g],
              [B + 1, g],
              [B, g - 1],
              [B, g + 1],
            ].some(([Q, M]) => zi(A, Q, M))
              ? 2
              : 1;
          (this.bricks.push({
            c: B,
            r: g,
            hp: I,
            max: I,
            tone: (g + B + A) % 4,
          }),
            this.left++);
        }
      ((this.total = this.left),
        (this.paddle = { x: 720 / 2, w: 128, y: 816 }),
        (this.target = 720 / 2),
        (this.balls = []),
        (this.drops = []),
        (this.events = []),
        (this.wide = 0),
        (this.power = 0),
        (this.charges = 3),
        (this.destroyed = 0),
        (this.state = "ready"),
        (this.time = 0),
        this.resetBall());
    }
    resetBall() {
      this.balls = [
        {
          x: this.paddle.x,
          y: this.paddle.y - 13,
          vx: 0,
          vy: 0,
          r: 6,
          trail: [],
        },
      ];
    }
    launch() {
      if (this.state !== "ready") return !1;
      let A = this.balls[0];
      return (
        (A.vx = 140),
        (A.vy = -Math.sqrt(this.speed ** 2 - A.vx ** 2)),
        (this.state = "playing"),
        !0
      );
    }
    get speed() {
      return 410 + this.level * 28;
    }
    aim(A) {
      this.target = VB(A, this.paddle.w / 2 + 8, 720 - this.paddle.w / 2 - 8);
    }
    split(A = 3) {
      if (this.state !== "playing" || !this.balls.length) return !1;
      let g = [...this.balls];
      for (let B of g)
        for (let E = 1; E < A && this.balls.length < 18; E++) {
          let I = Math.atan2(B.vy, B.vx) + (E === 1 ? 0.42 : -0.42),
            Q = Math.cos(I) * this.speed,
            M = Math.sin(I) * this.speed;
          Math.abs(M) < this.speed * 0.28 && (M = -this.speed * 0.4);
          let Y = Math.hypot(Q, M);
          this.balls.push({
            x: B.x,
            y: B.y,
            vx: (Q / Y) * this.speed,
            vy: (M / Y) * this.speed,
            r: 6,
            trail: [],
          });
        }
      return (
        this.events.push({ type: "bonus", name: "Bolas multiplicadas!" }),
        !0
      );
    }
    useBonus() {
      return this.charges > 0 && this.split(3) ? (this.charges--, !0) : !1;
    }
    hit(A) {
      let g = this.bricks[A];
      if (
        g &&
        (g.hp--,
        this.revision++,
        this.events.push({
          type: "hit",
          x: 36 + g.c * 18 + 8,
          y: 36 + g.r * 18 + 8,
          tone: g.tone,
        }),
        !(g.hp > 0) &&
          ((this.bricks[A] = null),
          this.left--,
          this.destroyed++,
          (this.score += 10 + this.level * 2),
          (this.best = Math.max(this.best, this.score)),
          this.destroyed % 36 === 0))
      ) {
        let B = ["multi", "wide", "power"];
        this.drops.push({
          x: 36 + g.c * 18 + 8,
          y: 36 + g.r * 18 + 8,
          type: B[(this.destroyed / 36 - 1) % 3],
        });
      }
    }
    bounceBrick(A, g, B) {
      let E = VB(Math.floor((A.x - A.r - 36) / 18), 0, 35),
        I = VB(Math.floor((A.x + A.r - 36) / 18), 0, 35),
        Q = VB(Math.floor((A.y - A.r - 36) / 18), 0, 31),
        M = VB(Math.floor((A.y + A.r - 36) / 18), 0, 31);
      for (let Y = Q; Y <= M; Y++)
        for (let w = E; w <= I; w++) {
          let G = Y * 36 + w;
          if (!this.bricks[G]) continue;
          let h = 36 + w * 18,
            J = 36 + Y * 18,
            s = 15,
            e = VB(A.x, h, h + s),
            S = VB(A.y, J, J + s),
            i = A.x - e,
            D = A.y - S;
          if (!(i * i + D * D > A.r * A.r)) {
            if ((this.hit(G), this.power > 0))
              for (let c = -1; c <= 1; c++)
                for (let o = -1; o <= 1; o++)
                  (c || o) &&
                    Y + c >= 0 &&
                    Y + c < 32 &&
                    w + o >= 0 &&
                    w + o < 36 &&
                    this.hit((Y + c) * 36 + w + o);
            B + A.r <= J || B - A.r >= J + s
              ? ((A.vy = -A.vy), (A.y = B))
              : g + A.r <= h || g - A.r >= h + s || Math.abs(i) > Math.abs(D)
                ? ((A.vx = -A.vx), (A.x = g))
                : ((A.vy = -A.vy), (A.y = B));
            return;
          }
        }
    }
    step(A) {
      if (((A = VB(A, 0, 0.05)), !["ready", "playing"].includes(this.state)))
        return;
      ((this.paddle.w = this.wide > 0 ? 196 : 128),
        (this.target = VB(
          this.target,
          this.paddle.w / 2 + 8,
          720 - this.paddle.w / 2 - 8,
        )));
      let g = VB(this.target - this.paddle.x, -1300 * A, 1300 * A);
      if (((this.paddle.x += g), this.state === "ready")) {
        this.balls[0].x = this.paddle.x;
        return;
      }
      ((this.time += A),
        (this.wide = Math.max(0, this.wide - A)),
        (this.power = Math.max(0, this.power - A)));
      let B = Math.max(1, Math.ceil((this.speed * A) / 3)),
        E = A / B;
      for (let I = 0; I < B; I++) {
        for (let Q of this.balls) {
          let M = Q.x,
            Y = Q.y;
          if (
            ((Q.x += Q.vx * E),
            (Q.y += Q.vy * E),
            Q.x < Q.r + 8 && ((Q.x = Q.r + 8), (Q.vx = Math.abs(Q.vx))),
            Q.x > 720 - Q.r - 8 &&
              ((Q.x = 720 - Q.r - 8), (Q.vx = -Math.abs(Q.vx))),
            Q.y < Q.r + 8 && ((Q.y = Q.r + 8), (Q.vy = Math.abs(Q.vy))),
            Q.vy > 0 &&
              Y + Q.r <= this.paddle.y &&
              Q.y + Q.r >= this.paddle.y &&
              Math.abs(Q.x - this.paddle.x) <= this.paddle.w / 2 + Q.r)
          ) {
            let w = VB((Q.x - this.paddle.x) / (this.paddle.w / 2), -1, 1),
              G = w * 1.06;
            ((Q.vx = Math.sin(G) * this.speed),
              (Q.vy = -Math.cos(G) * this.speed),
              (Q.y = this.paddle.y - Q.r),
              this.events.push({ type: "paddle" }));
          }
          this.bounceBrick(Q, M, Y);
        }
        if (((this.balls = this.balls.filter((Q) => Q.y < 920)), !this.left)) {
          ((this.state = this.level === QQ.length - 1 ? "won" : "clear"),
            (this.balls = []),
            (this.drops = []),
            this.events.push({ type: "clear" }));
          return;
        }
        if (!this.balls.length) {
          (this.lives--,
            (this.drops = []),
            (this.wide = 0),
            (this.power = 0),
            (this.state = this.lives > 0 ? "ready" : "over"),
            this.lives > 0 && this.resetBall(),
            this.events.push({ type: "life" }));
          return;
        }
      }
      for (let I of this.drops)
        ((I.y += 140 * A),
          I.y >= this.paddle.y - 14 &&
            I.y <= this.paddle.y + 20 &&
            Math.abs(I.x - this.paddle.x) < this.paddle.w / 2 + 12 &&
            ((I.used = !0),
            I.type === "multi" && this.split(2),
            I.type === "wide" &&
              ((this.wide = 18),
              this.events.push({
                type: "bonus",
                name: "Barra maior por 18 segundos",
              })),
            I.type === "power" &&
              ((this.power = 14),
              this.events.push({
                type: "bonus",
                name: "Superbola por 14 segundos",
              }))));
      this.drops = this.drops.filter((I) => !I.used && I.y < 900);
    }
    next() {
      this.state === "clear" &&
        ((this.lives = Math.min(5, this.lives + 1)), this.load(this.level + 1));
    }
    snapshot() {
      return {
        level: this.level,
        name: QQ[this.level],
        state: this.state,
        score: this.score,
        best: this.best,
        lives: this.lives,
        left: this.left,
        total: this.total,
        charges: this.charges,
        wide: this.wide,
        power: this.power,
        paddle: { ...this.paddle },
        balls: this.balls.map(({ x: A, y: g, vx: B, vy: E }) => ({
          x: A,
          y: g,
          vx: B,
          vy: E,
        })),
      };
    }
  };
const Zg = {
      carrot: {
        name: "Cenoura",
        seed: 2,
        value: 12,
        time: 90,
        color: 15829561,
      },
      berry: {
        name: "Morango",
        seed: 5,
        value: 26,
        time: 120,
        color: 14898809,
      },
      sunflower: {
        name: "Girassol",
        seed: 8,
        value: 40,
        time: 150,
        color: 16042063,
      },
    };
const eB = [
      { id: "bob", avatar: "female", name: "Curto", price: 0 },
      { id: "long", avatar: "female", name: "Comprido", price: 0 },
      { id: "curls", name: "Cacheado", price: 0 },
      { id: "braids", avatar: "female", name: "Tran\xE7as", price: 35 },
      { id: "short", avatar: "male", name: "Corte curto", price: 0 },
      { id: "quiff", avatar: "male", name: "Topete", price: 0 },
      { id: "fade", avatar: "male", name: "Degrad\xEA", price: 25 },
    ];
const oB = [
      {
        id: "dress",
        avatar: "female",
        name: "Vestido cereja",
        color: 14899078,
        price: 0,
      },
      { id: "overalls", name: "Jardineira azul", color: 4557989, price: 0 },
      { id: "casual", name: "Blusa e cal\xE7a", color: 13081677, price: 0 },
      {
        id: "sunny",
        avatar: "female",
        name: "Vestido girassol",
        color: 15646019,
        price: 30,
      },
      {
        id: "lilac",
        avatar: "female",
        name: "Conjunto lil\xE1s",
        color: 10911198,
        price: 45,
      },
      {
        id: "party",
        avatar: "female",
        name: "Vestido de festa",
        color: 4372908,
        price: 65,
      },
      {
        id: "tee",
        avatar: "male",
        name: "Camiseta e bermuda",
        color: 4759997,
        price: 0,
      },
      {
        id: "sport",
        avatar: "male",
        name: "Conjunto esportivo",
        color: 5613960,
        price: 30,
      },
      {
        id: "jacket",
        avatar: "male",
        name: "Jaqueta azul",
        color: 4288446,
        price: 45,
      },
      {
        id: "shirt",
        avatar: "male",
        name: "Camisa de festa",
        color: 15121253,
        price: 65,
      },
    ];
const UB = [
      { id: "none", name: "Sem acess\xF3rio", price: 0 },
      { id: "bow", avatar: "female", name: "La\xE7o", price: 0 },
      { id: "hat", name: "Chap\xE9u de palha", price: 25 },
      { id: "glasses", name: "\xD3culos", price: 20 },
      { id: "bag", name: "Mochila", price: 35 },
      { id: "cap", avatar: "male", name: "Bon\xE9", price: 0 },
      { id: "watch", avatar: "male", name: "Rel\xF3gio esportivo", price: 20 },
    ];
const wQ = [16043948, 15316103, 13209960, 10906443, 7686192];
const YQ = [3681064, 7160622, 11825986, 14859122, 8931701, 4543086];
const GQ = [16049874, 11813993, 3895964, 8805796, 4944224];
const XY = [
      { id: "female", name: "Feminino" },
      { id: "male", name: "Masculino" },
    ];
const MI = (C, A) => C.filter((g) => !g.avatar || g.avatar === A);
const aC = {
      fashion: { name: "Integro Fashion", x: -39, z: 32, color: 10974656 },
      market: { name: "Super Mercado Integro", x: -13, z: 32, color: 5613689 },
      burger: { name: "Integro Burger", x: 13, z: 32, color: 15241811 },
      gym: { name: "Integro GYM", x: 39, z: 32, color: 5278893 },
    };
const MC = {
      apple: { name: "Ma\xE7\xE3", price: 5, relief: 20, shop: "market" },
      juice: { name: "Suco de frutas", price: 6, relief: 25, shop: "market" },
      vegetables: {
        name: "Cesta de legumes",
        price: 8,
        relief: 0,
        shop: "market",
      },
      burger: { name: "Hamb\xFArguer", price: 18, relief: 60, shop: "burger" },
      combo: { name: "Combo Integro", price: 26, relief: 85, shop: "burger" },
    };
const wI = Array.from({ length: 6 }, (C, A) => ({
      x: ((A % 3) - 1) * 5.2,
      z: -11.8 - Math.floor(A / 3) * 4,
    }));
const RM = [
      {
        id: "sofa",
        name: "Sala",
        action: "Sentar e ler",
        x: -6,
        z: 1.2,
        at: { x: -6, z: 2.8 },
        zone: "home",
        room: "Sala",
      },
      {
        id: "stove",
        name: "Cozinha",
        action: "Preparar uma sopa",
        x: 7.7,
        z: 0.2,
        at: { x: 6, z: 1 },
        zone: "home",
        room: "Cozinha",
      },
      {
        id: "table",
        name: "Mesa",
        action: "Comer a sopa",
        x: 4.2,
        z: 4,
        at: { x: 2.5, z: 4 },
        zone: "home",
        room: "Cozinha",
      },
      {
        id: "bed",
        name: "Quarto",
        action: "Descansar",
        x: -7.2,
        z: -4.6,
        at: { x: -5.2, z: -4 },
        zone: "home",
        room: "Quarto",
      },
      {
        id: "wardrobe",
        name: "Guarda-roupa",
        action: "Mudar o visual",
        x: 7.9,
        z: -4.9,
        at: { x: 5.6, z: -4.2 },
        zone: "home",
        room: "Ateli\xEA",
      },
      {
        id: "swing",
        name: "Parque",
        action: "Brincar no balan\xE7o",
        x: -18,
        z: 1,
        at: { x: -18, z: 3.5 },
        zone: "street",
        room: "Parque",
      },
      {
        id: "slide",
        name: "Escorregador",
        action: "Descer o escorregador",
        x: -23,
        z: -2.5,
        at: { x: -23, z: 1.5 },
        zone: "street",
        room: "Parque",
      },
      {
        id: "pool",
        name: "Piscina",
        action: "Nadar com a boia",
        x: 18,
        z: -12,
        at: { x: 18, z: -6 },
        zone: "street",
        room: "Piscina",
      },
      ...wI.map((C, A) => ({
        id: "plot" + A,
        name: "Canteiro " + (A + 1),
        action: "Cuidar da horta",
        ...C,
        at: { x: C.x, z: C.z + 1.5 },
        zone: "street",
        room: "Horta",
      })),
    ];
const Oi = [
    { x: -10, z: -0.5, w: 0.35, d: 13 },
    { x: 10, z: -0.5, w: 0.35, d: 13 },
    { x: -5.75, z: -7, w: 8.5, d: 0.35 },
    { x: 5.75, z: -7, w: 8.5, d: 0.35 },
    { x: -6, z: 0.7, w: 4.2, d: 1.65 },
    { x: -6, z: 4.5, w: 2.2, d: 1.1 },
    { x: -7.2, z: -4.6, w: 2.7, d: 3.6 },
    { x: -3.1, z: -5.8, w: 1.8, d: 1.2 },
    { x: 8.1, z: 0.1, w: 2.3, d: 2 },
    { x: 8.3, z: 3.6, w: 2, d: 3 },
    { x: 4.2, z: 4, w: 2.2, d: 1.6 },
    { x: 8, z: -5, w: 2.5, d: 3.4 },
    { x: 3.7, z: -5.8, w: 2.2, d: 1.2 },
    { x: 17.5, z: 6.8, w: 6, d: 1.2 },
    { x: 18, z: -12, w: 9, d: 9 },
    { x: -18, z: 1, w: 4, d: 2 },
    { x: -23, z: -3, w: 2.5, d: 6 },
    ...wI.map((C) => ({ ...C, w: 3.4, d: 1.6 })),
  ];
function nt(C) {
    if (C === "home") return Oi.filter((B) => Math.abs(B.x) <= 10 && B.z >= -7);
    if (C === "street")
      return [
        { x: 0, z: -0.5, w: 20.5, d: 13.5 },
        ...Oi.filter((B) => B.z < -8 || B.x < -12 || B.x > 12).filter(
          (B) => !(B.x === 17.5 && B.z === 6.8),
        ),
        ...Object.values(aC).map((B) => ({ x: B.x, z: B.z, w: 20, d: 14 })),
      ];
    let A = [
        { x: -8, z: -0.5, w: 0.3, d: 13 },
        { x: 8, z: -0.5, w: 0.3, d: 13 },
        { x: 0, z: -7, w: 16, d: 0.3 },
      ],
      g = {
        fashion: [
          { x: -4, z: -3.5, w: 3.4, d: 1.2 },
          { x: -6, z: 1, w: 2, d: 3 },
          { x: 5.8, z: -4.2, w: 2, d: 2.5 },
        ],
        market: [
          { x: 0, z: -4.4, w: 5, d: 1.3 },
          { x: -4.5, z: 0, w: 2, d: 5 },
          { x: 4.5, z: 0, w: 2, d: 5 },
        ],
        burger: [
          { x: 0, z: -4.4, w: 11, d: 1.4 },
          { x: -4, z: 2.3, w: 1.8, d: 1.5 },
          { x: 4, z: 2.3, w: 1.8, d: 1.5 },
        ],
        gym: [
          { x: -4, z: -2.5, w: 2.5, d: 3 },
          { x: 4, z: -2.5, w: 2, d: 2.5 },
        ],
      };
    return [...A, ...(g[C] || [])];
  };
const WD = (C, A, g) => Math.max(A, Math.min(g, C));
const aE = (C, A, g) => (Number.isFinite(C) ? WD(C, A, g) : A);
const pi = (C, A) => Math.hypot(C.x - A.x, C.z - A.z);
function QI(C = "female") {
    return {
      avatar: C,
      hair: C === "male" ? "short" : "bob",
      hairColor: 1,
      skin: 1,
      outfit: C === "male" ? "tee" : "dress",
      shoes: 0,
      accessory: C === "male" ? "cap" : "bow",
    };
  };
function HD() {
    return {
      version: 3,
      avatarChosen: !1,
      coins: 20,
      hunger: 15,
      swam: 0,
      played: 0,
      fitness: 0,
      workouts: 0,
      style: QI(),
      styles: { female: QI(), male: QI("male") },
      owned: [...eB, ...oB, ...UB]
        .filter((C) => C.price === 0)
        .map((C) => C.id),
      pantry: { apple: 0, juice: 0, vegetables: 0, burger: 0, combo: 0 },
      seeds: { carrot: 6, berry: 2, sunflower: 1 },
      plots: Array(6).fill(null),
      harvests: 0,
      earned: 0,
      wateringCan: !1,
      cooked: 0,
      meals: 0,
      eaten: 0,
      read: 0,
      rested: 0,
    };
  };
function Rt(C) {
    let A = HD();
    if (!C || ![1, 2, 3].includes(C.version)) return A;
    for (let I of [
      "coins",
      "harvests",
      "earned",
      "cooked",
      "meals",
      "eaten",
      "read",
      "rested",
      "swam",
      "played",
      "workouts",
    ])
      A[I] = Math.floor(aE(C[I], 0, 1e8));
    ((A.fitness = Math.floor(aE(C.fitness, 0, 20))),
      (A.hunger = C.version === 1 ? 15 : aE(C.hunger, 0, 100)),
      (A.avatarChosen = C.version === 3 && C.avatarChosen === !0));
    let g = [...eB, ...oB, ...UB].map((I) => I.id);
    A.owned = [
      ...new Set([
        ...A.owned,
        ...(Array.isArray(C.owned) ? C.owned : []).filter((I) => g.includes(I)),
      ]),
    ];
    function B(I, Q) {
      let M = QI(Q);
      for (let [Y, w] of [
        ["hair", eB],
        ["outfit", oB],
        ["accessory", UB],
      ])
        MI(w, Q).some((G) => G.id === I?.[Y]) &&
          A.owned.includes(I[Y]) &&
          (M[Y] = I[Y]);
      for (let [Y, w] of [
        ["hairColor", YQ],
        ["skin", wQ],
        ["shoes", GQ],
      ])
        Number.isInteger(I?.[Y]) &&
          (M[Y] = Math.floor(aE(I[Y], 0, w.length - 1)));
      return M;
    }
    for (let I of ["female", "male"]) A.styles[I] = B(C.styles?.[I], I);
    let E = C.style?.avatar === "male" ? "male" : "female";
    ((A.style = B(C.style, E)), (A.styles[E] = { ...A.style }));
    for (let I in MC) A.pantry[I] = Math.floor(aE(C.pantry?.[I], 0, 99));
    for (let I in Zg) A.seeds[I] = Math.floor(aE(C.seeds?.[I], 0, 999));
    return (
      (A.wateringCan = C.wateringCan === !0),
      (A.plots = A.plots.map((I, Q) => {
        let M = C.plots?.[Q];
        return M && Zg[M.crop]
          ? {
              crop: M.crop,
              watered: M.watered === !0,
              progress:
                C.version === 1
                  ? Math.min(
                      1,
                      aE(M.progress, 0, 150) /
                        { carrot: 18, berry: 30, sunflower: 42 }[M.crop],
                    ) * Zg[M.crop].time
                  : aE(M.progress, 0, Zg[M.crop].time),
            }
          : null;
      })),
      A
    );
  };
const xM = class {
    constructor(A) {
      ((this.save = Rt(A)),
        (this.zone = "home"),
        (this.riding = !1),
        (this.motorcycle = { x: -3, z: 12, yaw: 0 }),
        (this.pending = null),
        (this.player = { x: 0, z: 3.7 }),
        (this.path = []),
        (this.destination = null),
        (this.activity = null),
        (this.moving = 0),
        (this.time = 0),
        (this.events = []),
        (this.hungerNotified = this.save.hunger >= 70));
    }
    emit(A, g) {
      this.events.push({ type: A, text: g });
    }
    drainEvents() {
      return this.events.splice(0);
    }
    free(A, g, B = this.riding ? 0.48 : 0.32) {
      let E =
        this.zone === "street"
          ? [-55, 55, -23, 43]
          : this.zone === "home"
            ? [-9.6, 9.6, -6.6, 6]
            : [-7.6, 7.6, -6.6, 6];
      return (
        A >= E[0] &&
        A <= E[1] &&
        g >= E[2] &&
        g <= E[3] &&
        !nt(this.zone).some(
          (I) =>
            Math.abs(A - I.x) < I.w / 2 + B && Math.abs(g - I.z) < I.d / 2 + B,
        )
      );
    }
    pathTo(A) {
      let B = (s, e) => s + "," + e,
        E = {
          x: Math.round(this.player.x / 0.5),
          z: Math.round(this.player.z / 0.5),
        },
        I = { x: Math.round(A.x / 0.5), z: Math.round(A.z / 0.5) };
      if (!this.free(I.x * 0.5, I.z * 0.5)) return !1;
      let Q = B(E.x, E.z),
        M = B(I.x, I.z),
        Y = [{ ...E, g: 0, f: 0 }],
        w = new Map([[Q, 0]]),
        G = new Map(),
        h = new Set(),
        J = 0;
      for (; Y.length && J++ < 4e4; ) {
        Y.sort((S, i) => S.f - i.f);
        let s = Y.shift(),
          e = B(s.x, s.z);
        if (!h.has(e)) {
          if (e === M) {
            let S = e,
              i = [];
            for (; S !== Q; ) {
              let [D, c] = S.split(",").map(Number);
              if ((i.push({ x: D * 0.5, z: c * 0.5 }), (S = G.get(S)), !S))
                return !1;
            }
            return ((this.path = i.reverse()), !0);
          }
          h.add(e);
          for (let [S, i] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            let D = s.x + S,
              c = s.z + i,
              o = B(D, c);
            if (
              h.has(o) ||
              !this.free(D * 0.5, c * 0.5) ||
              (S &&
                i &&
                (!this.free(D * 0.5, s.z * 0.5) ||
                  !this.free(s.x * 0.5, c * 0.5)))
            )
              continue;
            let k = s.g + Math.hypot(S, i);
            k >= (w.get(o) ?? 1 / 0) ||
              (w.set(o, k),
              G.set(o, e),
              Y.push({
                x: D,
                z: c,
                g: k,
                f: k + Math.hypot(I.x - D, I.z - c),
              }));
          }
        }
      }
      return !1;
    }
    walkTo(A, g = null) {
      return (
        (this.activity = null),
        this.pathTo(A)
          ? ((this.destination = g),
            !this.path.length &&
              g &&
              (this.emit("arrive", g), (this.destination = null)),
            !0)
          : (this.emit(
              "notice",
              "Esse cantinho est\xE1 ocupado. Toque no ch\xE3o livre.",
            ),
            !1)
      );
    }
    station(A) {
      return A === "moto"
        ? {
            id: "moto",
            zone: "street",
            name: "Sua moto",
            action: this.riding ? "Descer da moto" : "Pilotar a moto",
            x: this.motorcycle.x,
            z: this.motorcycle.z,
            at: { x: this.motorcycle.x, z: this.motorcycle.z },
            room: "Rua",
          }
        : RM.find((g) => g.id === A);
    }
    go(A) {
      return this.station(A) ? ((this.pending = A), this.route()) : !1;
    }
    route() {
      let A = this.station(this.pending);
      if (!A) return !1;
      if (A.zone === this.zone) return this.walkTo(A.at, A.id);
      let g = this.station(
        this.zone === "street" ? "enter:" + A.zone : "exit:" + this.zone,
      );
      return this.walkTo(g.at, g.id);
    }
    enter(A) {
      let g = "enter:" + A;
      if (this.zone !== "street" || !this.at(g)) return !1;
      if (this.riding) {
        let B = this.pending;
        (this.toggleMoto(), (this.pending = B));
      }
      return (
        (this.zone = A),
        (this.player = { x: 0, z: 4.6 }),
        (this.path = []),
        (this.destination = null),
        (this.activity = null),
        this.emit(
          "zone",
          A === "home"
            ? "Voc\xEA entrou em casa."
            : "Voc\xEA entrou em " + aC[A].name + ".",
        ),
        this.pending === g && (this.pending = null),
        this.pending && this.route(),
        !0
      );
    }
    exit() {
      if (this.zone === "street" || !this.at("exit:" + this.zone)) return !1;
      let A = this.station("enter:" + this.zone);
      return (
        (this.zone = "street"),
        (this.player = { ...A.at }),
        (this.path = []),
        (this.destination = null),
        (this.activity = null),
        this.emit("zone", "Voc\xEA est\xE1 na rua."),
        this.pending?.startsWith("exit:") && (this.pending = null),
        this.pending && this.route(),
        !0
      );
    }
    nearby() {
      let A = RM.filter((g) => g.zone === this.zone);
      return (
        this.zone === "street" && A.push(this.station("moto")),
        A.map((g) => ({ ...g, d: pi(this.player, g.at) }))
          .filter((g) => g.d < 1.7)
          .sort((g, B) => g.d - B.d)[0] || null
      );
    }
    at(A) {
      let g = this.station(A);
      return g && g.zone === this.zone && pi(this.player, g.at) < 1.9;
    }
    toggleMoto() {
      return this.zone !== "street" || (!this.riding && !this.at("moto"))
        ? !1
        : ((this.riding = !this.riding),
          (this.path = []),
          (this.destination = null),
          (this.pending = null),
          (this.activity = null),
          (this.motorcycle.x = this.player.x),
          (this.motorcycle.z = this.player.z),
          this.emit(
            "ride",
            this.riding
              ? "Moto pronta! Use o controle ou toque no destino."
              : "Moto estacionada. Vamos passear a p\xE9!",
          ),
          !0);
    }
    chooseAvatar(A) {
      return XY.some((g) => g.id === A)
        ? ((this.save.styles[this.save.style.avatar] = { ...this.save.style }),
          (this.save.style = { ...this.save.styles[A], avatar: A }),
          (this.save.avatarChosen = !0),
          this.emit("style", "Avatar escolhido! Personalize seu visual."),
          !0)
        : !1;
    }
    consume(A) {
      let g = MC[A];
      return !g ||
        !g.relief ||
        this.save.pantry[A] < 1 ||
        this.save.hunger < 1 ||
        this.riding
        ? !1
        : ((this.path = []),
          (this.destination = null),
          (this.pending = null),
          (this.activity = { type: "snack", food: A, total: 5, remaining: 5 }),
          this.emit(
            "activity",
            A === "juice"
              ? "Hora de tomar um suco!"
              : "Vamos comer " + g.name.toLowerCase() + "!",
          ),
          !0);
    }
    cropState(A) {
      let g = this.save.plots[A];
      return g
        ? g.watered
          ? g.progress >= Zg[g.crop].time
            ? "ready"
            : "growing"
          : "dry"
        : "empty";
    }
    plant(A, g) {
      return !this.at("plot" + A) ||
        !Zg[g] ||
        this.save.plots[A] ||
        this.save.seeds[g] < 1
        ? !1
        : (this.save.seeds[g]--,
          (this.save.plots[A] = { crop: g, watered: !1, progress: 0 }),
          this.emit("plant", "Sementes plantadas! Agora regue o canteiro."),
          !0);
    }
    water(A) {
      let g = this.save.plots[A];
      return !this.at("plot" + A) || !g || g.watered
        ? !1
        : ((g.watered = !0),
          (this.activity = { type: "water", remaining: 1.8, total: 1.8 }),
          this.emit("water", "Muito bem! Sua plantinha come\xE7ou a crescer."),
          !0);
    }
    harvest(A) {
      let g = this.save.plots[A];
      if (!this.at("plot" + A) || this.cropState(A) !== "ready") return !1;
      let B = Zg[g.crop];
      return (
        (this.save.coins += B.value),
        (this.save.earned += B.value),
        this.save.harvests++,
        (this.save.plots[A] = null),
        this.emit("harvest", `Colheita vendida: +${B.value} integros!`),
        !0
      );
    }
    buy(A) {
      if (MC[A]) {
        let B = MC[A],
          E = B.shop === "market" ? "shop" : "burgerCounter";
        return !this.at(E) ||
          this.save.coins < B.price ||
          this.save.pantry[A] >= 99
          ? !1
          : ((this.save.coins -= B.price),
            this.save.pantry[A]++,
            this.emit("buy", `${B.name} na mochila!`),
            !0);
      }
      if (
        !this.at(
          A.startsWith("seed:") || A === "wateringCan"
            ? "shop"
            : "fashionCounter",
        )
      )
        return !1;
      if (A.startsWith("seed:")) {
        let B = A.slice(5),
          E = Zg[B];
        return !E || this.save.coins < E.seed || this.save.seeds[B] >= 999
          ? !1
          : ((this.save.coins -= E.seed),
            this.save.seeds[B]++,
            this.emit("buy", `Semente de ${E.name.toLowerCase()} comprada!`),
            !0);
      }
      if (A === "wateringCan")
        return this.save.wateringCan || this.save.coins < 60
          ? !1
          : ((this.save.coins -= 60),
            (this.save.wateringCan = !0),
            this.emit(
              "buy",
              "Regador especial! As plantas crescem 30% mais r\xE1pido.",
            ),
            !0);
      let g = [...eB, ...oB, ...UB].find((B) => B.id === A);
      return !g ||
        (g.avatar && g.avatar !== this.save.style.avatar) ||
        this.save.owned.includes(A) ||
        this.save.coins < g.price
        ? !1
        : ((this.save.coins -= g.price),
          this.save.owned.push(A),
          this.emit(
            "buy",
            `${g.name} comprado! J\xE1 est\xE1 no guarda-roupa.`,
          ),
          !0);
    }
    starterSeeds() {
      return !this.at("shop") ||
        this.save.coins >= 2 ||
        Object.values(this.save.seeds).some((A) => A > 0) ||
        this.save.plots.some(Boolean)
        ? !1
        : ((this.save.seeds.carrot = 3),
          this.emit(
            "buy",
            "Aqui est\xE3o tr\xEAs sementes para recome\xE7ar sua horta!",
          ),
          !0);
    }
    customize(A, g) {
      if (!this.at("wardrobe") && !this.at("fashionMirror")) return !1;
      let B = { hair: eB, outfit: oB, accessory: UB };
      if (B[A]) {
        if (
          !MI(B[A], this.save.style.avatar).some((E) => E.id === g) ||
          !this.save.owned.includes(g)
        )
          return !1;
      } else {
        let E = { hairColor: YQ.length, skin: wQ.length, shoes: GQ.length };
        if (!E[A] || !Number.isInteger(g) || g < 0 || g >= E[A]) return !1;
      }
      return (
        (this.save.style[A] = g),
        (this.save.styles[this.save.style.avatar] = { ...this.save.style }),
        this.emit("style", "Visual atualizado!"),
        !0
      );
    }
    use(A) {
      if (!this.at(A)) return !1;
      if ((this.riding && this.toggleMoto(), A === "table" && !this.save.meals))
        return (
          this.emit("notice", "Prepare uma sopa no fog\xE3o antes de comer."),
          !1
        );
      let g = {
        sofa: ["read", 6, "Hora de ler um livro na sala!"],
        stove: ["cook", 8, "Preparando uma sopa de legumes\u2026"],
        table: ["eat", 5, "Hora de comer a sopa!"],
        bed: ["rest", 6, "Uma pausa no quarto\u2026"],
        swing: ["swing", 12, "Vamos brincar no balan\xE7o!"],
        slide: ["slide", 9, "L\xE1 vem o escorregador!"],
        pool: ["swim", 18, "Hora de nadar e brincar na piscina!"],
        gymTreadmill: ["gymRun", 12, "Vamos treinar na esteira!"],
        gymBike: ["gymCycle", 12, "Vamos pedalar!"],
        gymMat: ["stretch", 10, "Hora de alongar o corpo!"],
      };
      if (g[A]) {
        let [B, E, I] = g[A];
        return (
          (this.path = []),
          (this.activity = { type: B, total: E, remaining: E }),
          this.emit("activity", I),
          !0
        );
      }
      return !1;
    }
    update(A, g = { x: 0, z: 0 }) {
      ((A = WD(A, 0, 0.05)),
        (this.time += A),
        (this.save.hunger = WD(
          this.save.hunger +
            A *
              (this.activity?.type === "rest"
                ? 0.06
                : [
                      "swim",
                      "swing",
                      "slide",
                      "gymRun",
                      "gymCycle",
                      "stretch",
                    ].includes(this.activity?.type)
                  ? 0.24
                  : 0.16),
          0,
          100,
        )),
        this.save.hunger >= 70 &&
          !this.hungerNotified &&
          ((this.hungerNotified = !0),
          this.emit(
            "hungry",
            "Seu avatar est\xE1 com fome. Vamos preparar uma refei\xE7\xE3o?",
          )),
        this.save.hunger < 60 && (this.hungerNotified = !1));
      for (let Q of this.save.plots)
        Q?.watered &&
          (Q.progress = Math.min(
            Zg[Q.crop].time,
            Q.progress + A * (this.save.wateringCan ? 1.3 : 1),
          ));
      let B = g.x || 0,
        E = g.z || 0,
        I = Math.hypot(B, E);
      if (((this.moving = 0), I > 0.1))
        ((this.path = []),
          (this.destination = null),
          (this.pending = null),
          (this.activity = null));
      else if (this.activity) {
        if (((this.activity.remaining -= A), this.activity.remaining <= 0)) {
          let Q = this.activity.type,
            M = this.activity.food;
          ((this.activity = null),
            Q === "snack" &&
              this.save.pantry[M] > 0 &&
              (this.save.pantry[M]--,
              (this.save.hunger = Math.max(0, this.save.hunger - MC[M].relief)),
              this.save.eaten++,
              this.emit("done", "Que del\xEDcia! A fome diminuiu.")),
            ["gymRun", "gymCycle", "stretch"].includes(Q) &&
              (this.save.workouts++,
              (this.save.fitness = Math.min(
                20,
                Math.floor(this.save.workouts / 3),
              )),
              this.emit(
                "done",
                `Treino conclu\xEDdo! Condicionamento ${this.save.fitness}/20.`,
              )),
            Q === "cook" &&
              (this.save.cooked++,
              this.save.meals++,
              this.save.pantry.vegetables > 0 &&
                (this.save.pantry.vegetables--, this.save.meals++),
              this.emit("done", "Sopa prontinha! A mesa est\xE1 servida.")),
            Q === "eat" &&
              ((this.save.meals = Math.max(0, this.save.meals - 1)),
              this.save.eaten++,
              (this.save.hunger = Math.max(0, this.save.hunger - 55)),
              this.emit("done", "Que del\xEDcia! A fome diminuiu.")),
            Q === "swim" &&
              (this.save.swam++, this.emit("done", "Que mergulho divertido!")),
            (Q === "swing" || Q === "slide") &&
              (this.save.played++,
              this.emit("done", "Foi divertido brincar no parque!")),
            Q === "read" &&
              (this.save.read++,
              this.emit("done", "Livro terminado! Que hist\xF3ria bonita.")),
            Q === "rest" &&
              (this.save.rested++,
              this.emit("done", "Descanso completo. Vamos brincar!")));
        }
        return;
      } else if (this.path.length) {
        let Q = this.path[0];
        if (
          ((B = Q.x - this.player.x),
          (E = Q.z - this.player.z),
          (I = Math.hypot(B, E)),
          I < 0.09)
        ) {
          (this.path.shift(),
            this.path.length ||
              (this.emit("arrive", this.destination),
              (this.destination = null)));
          return;
        }
      }
      if (I > 0.01) {
        let Q = Math.min(
          (this.riding ? 11 : 3.8 + this.save.fitness * 0.06) *
            (this.save.hunger >= 90 ? 0.8 : 1) *
            A,
          I,
        );
        ((B = (B / I) * Q),
          (E = (E / I) * Q),
          this.free(this.player.x + B, this.player.z) && (this.player.x += B),
          this.free(this.player.x, this.player.z + E) && (this.player.z += E),
          (this.moving = 1),
          (this.direction = { x: B, z: E }),
          this.riding &&
            ((this.motorcycle.x = this.player.x),
            (this.motorcycle.z = this.player.z),
            (this.motorcycle.yaw = Math.atan2(B, E))));
      }
    }
    snapshot() {
      return {
        zone: this.zone,
        riding: this.riding,
        motorcycle: { ...this.motorcycle },
        pending: this.pending,
        ...JSON.parse(JSON.stringify(this.save)),
        player: { ...this.player },
        time: this.time,
        path: this.path.map((A) => ({ ...A })),
        destination: this.destination,
        activity: this.activity ? { ...this.activity } : null,
        nearby: this.nearby()?.id ?? null,
        plotsState: this.save.plots.map((A, g) => this.cropState(g)),
      };
    }
  };
const vi = {
      house2: {
        living: [
          ["rabbit", "Coelhinho"],
          ["kite", "Pipa"],
          ["train", "Trenzinho"],
          ["rings", "Argolas"],
          ["ladybug", "Joaninha"],
        ],
        kitchen: [
          ["banana", "Banana"],
          ["teapot", "Bule"],
          ["fork", "Garfo"],
          ["corn", "Milho"],
          ["pear", "Pera"],
        ],
        bedroom: [
          ["doll", "Boneca"],
          ["backpack", "Mochila"],
          ["glasses", "\xD3culos"],
          ["spinningtop", "Pi\xE3o"],
          ["lamp", "Abajur"],
        ],
        bathroom: [
          ["fish", "Peixinho"],
          ["sponge", "Esponja"],
          ["shampoo", "Xampu"],
          ["hairdryer", "Secador"],
          ["mirror", "Espelho de m\xE3o"],
        ],
        laundry: [
          ["glove", "Luva"],
          ["button", "Bot\xE3o"],
          ["iron", "Ferro de passar"],
          ["hanger", "Cabide"],
          ["bucket", "Balde"],
        ],
      },
      house3: {
        living: [
          ["robot", "Rob\xF4"],
          ["airplane", "Avi\xE3o"],
          ["boat", "Barquinho"],
          ["telescope", "Telesc\xF3pio"],
          ["puzzle", "Quebra-cabe\xE7a"],
        ],
        kitchen: [
          ["grapes", "Uvas"],
          ["pan", "Panela"],
          ["whisk", "Batedor"],
          ["tomato", "Tomate"],
          ["bread", "P\xE3o"],
        ],
        bedroom: [
          ["camera", "C\xE2mera"],
          ["paintpalette", "Paleta de pintura"],
          ["hat", "Chap\xE9u"],
          ["flute", "Flauta"],
          ["medal", "Medalha"],
        ],
        bathroom: [
          ["starfish", "Estrela-do-mar"],
          ["cottonbox", "Algod\xE3o"],
          ["toothpaste", "Pasta de dentes"],
          ["showercap", "Touca de banho"],
          ["perfume", "Perfume"],
        ],
        laundry: [
          ["zipper", "Z\xEDper"],
          ["spray", "Borrifador"],
          ["sewingmachine", "M\xE1quina de costura"],
          ["dustpan", "P\xE1 de limpeza"],
          ["broom", "Vassoura"],
        ],
      },
      house4: {
        living: [
          ["elephant", "Elefantinho"],
          ["skateboard", "Skate"],
          ["yoyo", "Ioi\xF4"],
          ["guitar", "Viol\xE3o"],
          ["drum", "Tambor"],
        ],
        kitchen: [
          ["orange", "Laranja"],
          ["watermelon", "Melancia"],
          ["rollingpin", "Rolo de massa"],
          ["broccoli", "Br\xF3colis"],
          ["sieve", "Peneira"],
        ],
        bedroom: [
          ["butterfly", "Borboleta"],
          ["calculator", "Calculadora"],
          ["sneaker", "T\xEAnis"],
          ["pinwheel", "Catavento"],
          ["trophy", "Trof\xE9u"],
        ],
        bathroom: [
          ["shell", "Concha"],
          ["bathball", "Bomba de banho"],
          ["hourglass", "Ampulheta"],
          ["loofah", "Bucha de banho"],
          ["bathbrush", "Escova de banho"],
        ],
        laundry: [
          ["apron", "Avental"],
          ["threadspool", "Carretel"],
          ["wateringcan", "Regador"],
          ["washboard", "T\xE1bua de lavar"],
          ["boot", "Galocha"],
        ],
      },
    };
const at = {
      living: [
        "Abra o cesto perto da planta.",
        "Olhe debaixo da mesa de centro. Arraste o cen\xE1rio para enxergar melhor.",
        "Mova a almofada da direita do sof\xE1.",
        "Olhe em cima da estante baixinha, perto dos livros.",
        "Abra a caixa de brinquedos perto do tapete.",
      ],
      kitchen: [
        "Abra a porta da geladeira.",
        "Abra o arm\xE1rio \xE0 esquerda da pia.",
        "Abra a gaveta \xE0 direita da pia.",
        "Abra a cesta de compras no ch\xE3o.",
        "Olhe em cima do banquinho perto da mesa.",
      ],
      bedroom: [
        "Mova o travesseiro da cama.",
        "Olhe em cima da escrivaninha, perto do caderno.",
        "Abra o guarda-roupa e olhe a parte de baixo.",
        "Abra o ba\xFA aos p\xE9s da cama.",
        "Olhe na mesinha ao lado da cabeceira.",
      ],
      bathroom: [
        "Olhe dentro da banheira, perto da \xE1gua.",
        "Abra a caixinha sobre o banquinho.",
        "Olhe ao lado da pia, perto do espelho.",
        "Abra o cesto perto da porta.",
        "Abra a portinha embaixo da pia.",
      ],
      laundry: [
        "Abra a porta redonda da m\xE1quina de lavar.",
        "Olhe em cima do banquinho perto do varal.",
        "Olhe sobre o balc\xE3o ao lado do tanque.",
        "Abra o arm\xE1rio embaixo do tanque.",
        "Abra o cesto.",
      ],
    };
function _i(C) {
    let A = { house1: C };
    for (let [B, E] of Object.entries(vi)) {
      A[B] = {};
      for (let [I, Q] of Object.entries(E))
        A[B][I] = Q.map(([M, Y], w) => ({
          ...C[I][w],
          id: M,
          name: Y,
          icon: "",
          hint: `${Y}: ${at[I][w]}`,
          pos: [...C[I][w].pos],
        }));
    }
    let g = Object.values(A).flatMap((B) => Object.values(B).flat());
    if (
      g.length !== 100 ||
      new Set(g.map((B) => B.id)).size !== 100 ||
      new Set(g.map((B) => B.name)).size !== 100
    )
      throw Error("Cada casa precisa de 25 objetos exclusivos.");
    return A;
  };
const qD = {
      id: "key",
      name: "Chave da casa",
      icon: "\u{1F511}",
      hint: "Na sala, mova o tapetinho amarelo perto da porta de sa\xEDda.",
      a: 3,
      b: 1,
      op: "+",
      pos: [-3.35, 0.12, 2.65],
      scale: 0.8,
      cover: "keymat",
    };
const vD = [
      {
        id: "map",
        name: "Mapa",
        icon: "\u{1F5FA}\uFE0F",
        hint: "Abra a porta azul da frente. O mapa est\xE1 no banco.",
        a: 2,
        b: 2,
        op: "+",
        pos: [0.52, 0.83, 0.18],
        scale: 0.9,
        cover: "cardoor",
      },
      {
        id: "flashlight",
        name: "Lanterna",
        icon: "\u{1F526}",
        hint: "Abra o porta-malas, na parte de tr\xE1s do carro.",
        a: 6,
        b: 2,
        op: "\u2212",
        pos: [-1.97, 0.89, 0],
        scale: 0.9,
        cover: "trunk",
      },
      {
        id: "wrench",
        name: "Chave de roda",
        icon: "\u{1F527}",
        hint: "Levante o cap\xF4, na frente do carro.",
        a: 5,
        b: 3,
        op: "\u2212",
        pos: [1.94, 1.01, 0],
        scale: 1,
        cover: "hood",
      },
      {
        id: "cone",
        name: "Cone",
        icon: "\u{1F6A7}",
        hint: "O cone est\xE1 atr\xE1s do carro, perto da cal\xE7ada.",
        a: 3,
        b: 3,
        op: "+",
        pos: [-3, 0.04, 0.9],
        scale: 0.85,
      },
      {
        id: "tire",
        name: "Pneu pequeno",
        icon: "\u{1F6DE}",
        hint: "Levante o teto do carro para procurar no banco de tr\xE1s.",
        a: 4,
        b: 3,
        op: "+",
        pos: [-0.6, 0.89, -0.12],
        scale: 0.8,
        cover: "carroof",
      },
    ];
const Es = {
    bedroom: [
      {
        id: "storybook",
        name: "Livro",
        icon: "\u{1F4D5}",
        hint: "Um livro est\xE1 debaixo do travesseiro. Toque no travesseiro!",
        a: 3,
        b: 3,
        op: "+",
        pos: [-1.8, 0.91, -1.68],
        scale: 0.83,
        cover: "bedpillow",
      },
      {
        id: "pencil",
        name: "L\xE1pis",
        icon: "\u270F\uFE0F",
        hint: "Procure em cima da escrivaninha, perto do caderno.",
        a: 9,
        b: 4,
        op: "\u2212",
        pos: [2.45, 1.24, 0.67],
        scale: 1,
      },
      {
        id: "slippers",
        name: "Chinelos",
        icon: "\u{1FA74}",
        hint: "Abra a porta do guarda-roupa. Os chinelos est\xE3o na parte de baixo.",
        a: 4,
        b: 3,
        op: "+",
        pos: [2.72, 0.32, -1.92],
        scale: 0.8,
        cover: "wardrobe",
      },
      {
        id: "dinosaur",
        name: "Dinossauro",
        icon: "\u{1F996}",
        hint: "O dinossauro est\xE1 no ba\xFA aos p\xE9s da cama. Toque na tampa!",
        a: 6,
        b: 2,
        op: "\u2212",
        pos: [-0.4, 0.62, 1.75],
        scale: 0.73,
        cover: "bedchest",
      },
      {
        id: "clock",
        name: "Despertador",
        icon: "\u23F0",
        hint: "Olhe na mesinha ao lado da cabeceira da cama.",
        a: 5,
        b: 3,
        op: "+",
        pos: [-3.3, 0.91, -1.92],
        scale: 0.65,
      },
    ],
    bathroom: [
      {
        id: "duck",
        name: "Patinho",
        icon: "\u{1F986}",
        hint: "Tem um patinho na banheira. Olhe com aten\xE7\xE3o perto da \xE1gua!",
        a: 2,
        b: 4,
        op: "+",
        pos: [-2.1, 0.58, -1.55],
        scale: 0.9,
      },
      {
        id: "soap",
        name: "Sabonete",
        icon: "\u{1F9FC}",
        hint: "Abra a caixinha sobre o banquinho, perto do tapete.",
        a: 8,
        b: 3,
        op: "\u2212",
        pos: [2.55, 0.92, 1.12],
        scale: 0.83,
        cover: "soapbox",
      },
      {
        id: "toothbrush",
        name: "Escova de dentes",
        icon: "\u{1FAA5}",
        hint: "A escova est\xE1 perto da pia, ao lado do espelho.",
        a: 1,
        b: 6,
        op: "+",
        pos: [2.65, 1.28, -2.05],
        scale: 1,
      },
      {
        id: "towel",
        name: "Toalha",
        icon: "\u{1F9FA}",
        hint: "A toalha est\xE1 no cesto perto da porta. Toque na tampa do cesto!",
        a: 7,
        b: 4,
        op: "\u2212",
        pos: [-2.2, 0.63, 1.68],
        scale: 0.85,
        cover: "towelbasket",
      },
      {
        id: "comb",
        name: "Pente",
        icon: "\u{1FAAE}",
        hint: "Abra a portinha do m\xF3vel embaixo da pia.",
        a: 5,
        b: 4,
        op: "+",
        pos: [1.3, 0.33, -1.91],
        scale: 1,
        cover: "bathdoor",
      },
    ],
    laundry: [
      {
        id: "sock",
        name: "Meia",
        icon: "\u{1F9E6}",
        hint: "Toque na porta redonda da m\xE1quina de lavar. A meia ficou l\xE1 dentro!",
        a: 4,
        b: 4,
        op: "+",
        pos: [-2.58, 0.69, -1.54],
        scale: 0.73,
        cover: "washer",
      },
      {
        id: "peg",
        name: "Prendedor",
        icon: "\u{1F4CE}",
        hint: "Procure em cima do banquinho perto do varal.",
        a: 9,
        b: 3,
        op: "\u2212",
        pos: [2.75, 0.83, 1.38],
        scale: 1.1,
      },
      {
        id: "scrub",
        name: "Escovinha",
        icon: "\u{1F9F9}",
        hint: "Olhe ao lado do tanque, em cima do balc\xE3o.",
        a: 2,
        b: 5,
        op: "+",
        pos: [0.7, 1.3, -1.98],
        scale: 0.86,
      },
      {
        id: "cloth",
        name: "Pano",
        icon: "\u{1F9FB}",
        hint: "Abra o arm\xE1rio embaixo do tanque. Tem um pano dobrado l\xE1!",
        a: 10,
        b: 5,
        op: "\u2212",
        pos: [-0.06, 0.33, -1.88],
        scale: 0.8,
        cover: "laundrydoor",
      },
      {
        id: "yarn",
        name: "Novelo",
        icon: "\u{1F9F6}",
        hint: "O novelo est\xE1 guardado no cesto. Abra a tampa!",
        a: 3,
        b: 4,
        op: "+",
        pos: [-2, 0.63, 1.62],
        scale: 0.9,
        cover: "yarnbasket",
      },
    ],
  };
const EG = {
      living: [
        {
          id: "bear",
          name: "Ursinho",
          icon: "\u{1F9F8}",
          hint: "O ursinho est\xE1 dentro do cesto perto da planta. Toque na tampa!",
          a: 2,
          b: 3,
          op: "+",
          pos: [-2.75, 0.73, 1.65],
          scale: 0.72,
          cover: "basket",
        },
        {
          id: "ball",
          name: "Bola",
          icon: "\u26BD",
          hint: "Olhe debaixo da mesa de centro. Arraste a sala um pouquinho.",
          a: 4,
          b: 2,
          op: "+",
          pos: [0.7, 0.32, 0.8],
          scale: 0.82,
        },
        {
          id: "car",
          name: "Carrinho",
          icon: "\u{1F697}",
          hint: "Uma almofada do sof\xE1 est\xE1 escondendo o carrinho. Toque na almofada da direita!",
          a: 5,
          b: 2,
          op: "\u2212",
          pos: [-0.45, 0.83, -1.53],
          scale: 0.78,
          cover: "cushion",
        },
        {
          id: "rocket",
          name: "Foguete",
          icon: "\u{1F680}",
          hint: "Perto dos livros, em cima da estante baixinha.",
          a: 1,
          b: 4,
          op: "+",
          pos: [3.04, 1.2, -1.84],
          scale: 0.66,
        },
        {
          id: "blocks",
          name: "Bloquinhos",
          icon: "\u{1F9E9}",
          hint: "Procure dentro da caixa de brinquedos, perto do tapete. Toque na tampa!",
          a: 6,
          b: 3,
          op: "\u2212",
          pos: [2.35, 0.54, 1.7],
          scale: 0.72,
          cover: "toybox",
        },
      ],
      kitchen: [
        {
          id: "apple",
          name: "Ma\xE7\xE3",
          icon: "\u{1F34E}",
          hint: "Toque na porta da geladeira: tem uma ma\xE7\xE3 guardada l\xE1 dentro.",
          a: 3,
          b: 2,
          op: "+",
          pos: [-2.95, 1.32, -2],
          scale: 0.75,
          cover: "fridge",
        },
        {
          id: "cup",
          name: "X\xEDcara",
          icon: "\u2615",
          hint: "A x\xEDcara est\xE1 no arm\xE1rio \xE0 esquerda da pia. Abra a portinha!",
          a: 7,
          b: 2,
          op: "\u2212",
          pos: [-0.98, 0.36, -1.9],
          scale: 0.85,
          cover: "cabinet",
        },
        {
          id: "spoon",
          name: "Colher",
          icon: "\u{1F944}",
          hint: "Toque na gaveta do balc\xE3o, \xE0 direita da pia.",
          a: 4,
          b: 1,
          op: "+",
          pos: [1.6, 1.13, -1.7],
          scale: 0.84,
          cover: "drawer",
        },
        {
          id: "carrot",
          name: "Cenoura",
          icon: "\u{1F955}",
          hint: "A cenoura est\xE1 dentro da cesta de compras no ch\xE3o. Toque na tampa da cesta!",
          a: 8,
          b: 4,
          op: "\u2212",
          pos: [3, 0.64, 1.6],
          scale: 0.9,
          cover: "shopping",
        },
        {
          id: "cookie",
          name: "Biscoito",
          icon: "\u{1F36A}",
          hint: "Olhe em cima do banquinho perto da mesa.",
          a: 2,
          b: 2,
          op: "+",
          pos: [0.7, 0.9, 1.6],
          scale: 0.9,
        },
      ],
    };
Object.assign(EG,Es);
const ws = _i(EG);
RM.push(
    {
      id: "enter:home",
      zone: "street",
      name: "Sua casa",
      action: "Entrar em casa",
      x: 0,
      z: 6.7,
      at: { x: 0, z: 8.5 },
      room: "Rua",
    },
    ...Object.entries(aC).map(([C, A]) => ({
      id: "enter:" + C,
      zone: "street",
      name: A.name,
      action: "Entrar",
      x: A.x,
      z: 25,
      at: { x: A.x, z: 23 },
      room: "Rua",
    })),
    ...["home", ...Object.keys(aC)].map((C) => ({
      id: "exit:" + C,
      zone: C,
      name: "Sa\xEDda",
      action: "Sair para a rua",
      x: 0,
      z: 6,
      at: { x: 0, z: 5.2 },
      room: "Sa\xEDda",
    })),
    {
      id: "fashionCounter",
      zone: "fashion",
      name: "Integro Fashion",
      action: "Comprar roupas",
      x: -4,
      z: -3.5,
      at: { x: -4, z: -1.6 },
      room: "Loja de roupas",
    },
    {
      id: "fashionMirror",
      zone: "fashion",
      name: "Provador",
      action: "Mudar o visual",
      x: 5,
      z: -3,
      at: { x: 4.5, z: -1 },
      room: "Provador",
    },
    {
      id: "shop",
      zone: "market",
      name: "Super Mercado Integro",
      action: "Fazer compras",
      x: 0,
      z: -4.4,
      at: { x: 0, z: -2.4 },
      room: "Supermercado",
    },
    {
      id: "burgerCounter",
      zone: "burger",
      name: "Integro Burger",
      action: "Fazer um pedido",
      x: 0,
      z: -4.4,
      at: { x: 0, z: -2.4 },
      room: "Lanchonete",
    },
    {
      id: "burgerTable",
      zone: "burger",
      name: "Mesa da lanchonete",
      action: "Comer meu pedido",
      x: -4,
      z: 2.3,
      at: { x: -2.4, z: 2.3 },
      room: "Lanchonete",
    },
    {
      id: "gymTreadmill",
      zone: "gym",
      name: "Esteira",
      action: "Treinar corrida",
      x: -4,
      z: -2.5,
      at: { x: -4, z: -0.6 },
      room: "Academia",
    },
    {
      id: "gymBike",
      zone: "gym",
      name: "Bicicleta",
      action: "Pedalar",
      x: 4,
      z: -2.5,
      at: { x: 4, z: -0.6 },
      room: "Academia",
    },
    {
      id: "gymMat",
      zone: "gym",
      name: "Alongamento",
      action: "Fazer alongamento",
      x: 0,
      z: 2.2,
      at: { x: 0, z: 2.2 },
      room: "Academia",
    },
  );
Object.assign(oM.prototype,Si);
export {fY as FruitCutRun,cM as InterBallRun,xM as BairroRun,oM as SharedCraftRun,ws as streetHouses,EG as streetRooms,qD as streetKey,vD as streetCar};
