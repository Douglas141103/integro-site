var clamp = (C, A, g) => Math.max(A, Math.min(g, C));
function islandRadius(C, A) {
  let g = C.id * 0.83,
    B = Math.atan2(Math.sin(A - Math.PI), Math.cos(A - Math.PI)),
    E = clamp(
      47 +
        7 * Math.sin(2 * A + g) +
        5 * Math.cos(3 * A - g) +
        3 * Math.sin(5 * A + g * 0.7),
      40,
      62,
    ),
    I = Math.exp((-B * B) / 0.065);
  return E * (1 - I) + 43 * I;
}
function insideIsland(C, A, g, B = 0) {
  let E = A - C.x,
    I = g - C.z;
  return Math.hypot(E, I) < islandRadius(C, Math.atan2(E, I)) - B;
}
function terrainHeight(C, A, g) {
  let B = Math.atan2(A, g),
    E = Math.hypot(A, g),
    I = clamp((islandRadius(C, B) - E) / 9, 0, 1),
    Q = 0.14,
    M = (G, h, J, s) =>
      J * Math.exp(-((A - G) ** 2 + (g - h) ** 2) / (s * s));
  switch (C.biome) {
    case "mountain":
      Q += M(-19, 8, 17, 13) + M(23, 17, 13, 11);
      break;
    case "glacier":
    case "snow":
      Q += M(-21, 7, 10, 15) + M(24, 22, 8, 13);
      break;
    case "volcano": {
      let G = Math.hypot(A + 19, g - 11);
      Q +=
        Math.max(0, 15 * (1 - G / 23)) -
        (G < 4 ? 2 * (1 - G / 4) : 0) +
        M(21, 3, 4, 15);
      break;
    }
    case "canyon":
    case "basalt":
      Q += M(-21, 5, 8, 13) + M(23, 11, 9, 13);
      break;
    case "desert":
      Q += M(-18, 9, 6, 18) + M(23, 13, 5, 17);
      break;
    case "jungle":
    case "forest":
      Q += M(-23, 7, 4, 17) + M(22, 20, 5, 15);
      break;
    case "final": {
      let G = Math.hypot(A + 19, g - 11);
      Q +=
        Math.max(0, 15 * (1 - G / 23)) -
        (G < 4 ? 2 * (1 - G / 4) : 0) +
        M(23, 17, 15, 13);
      break;
    }
    case "geyser":
      Q += M(-19, 9, 5, 15) + M(24, 13, 6, 15);
      break;
    case "storm":
      Q += M(-22, 8, 9, 12) + M(22, 14, 7, 14);
      break;
    default:
      Q += M(-23, 12, 2, 18) + M(24, 19, 2.5, 16);
  }
  let Y = [
    [-7, -28],
    [14, -28],
    [0, -39],
    [12, -13],
    [-26, -10],
    [0, 27],
  ];
  (C.id === 1 && Y.push([-28, 18]),
    C.id === 2 && Y.push([27, 19]),
    C.id === 3 && Y.push([-29, 16]),
    C.id === 4 && Y.push([26, 28]));
  let w = 1;
  for (let [G, h] of Y) w *= clamp((Math.hypot(A - G, g - h) - 3) / 8, 0, 1);
  return 0.14 + (Q - 0.14) * w * I;
}
var groundHeight = (C, A, g) => 1 + terrainHeight(C, A - C.x, g - C.z),
  islandOutline = (C, A = 64, g = 0) =>
    Array.from({ length: A }, (B, E) => {
      let I = (E / A) * Math.PI * 2,
        Q = islandRadius(C, I) - g;
      return { x: Math.sin(I) * Q, z: Math.cos(I) * Q };
    });
var ISLANDS = [
    {
      name: "Porto do Sol",
      biome: "beach",
      subtitle: "Praias e enseadas",
      color: 5097896,
      ground: 15914378,
      fruit: null,
      boss: "Guardi\xE3o da Praia",
    },
    {
      name: "Floresta Esmeralda",
      biome: "forest",
      subtitle: "Mata e cachoeira",
      color: 4308336,
      ground: 7850339,
      fruit: "ember",
      boss: "Guardi\xE3o das Ra\xEDzes",
    },
    {
      name: "Pico da Geada",
      biome: "glacier",
      subtitle: "Montanhas de gelo",
      color: 7985134,
      ground: 13955573,
      fruit: "frost",
      boss: "Guardi\xE3o de Cristal",
    },
    {
      name: "Forja da Brasa",
      biome: "volcano",
      subtitle: "Vulc\xE3o e lava",
      color: 16287552,
      ground: 9729402,
      fruit: "wind",
      boss: "Guardi\xE3o da Forja",
    },
    {
      name: "Templo da Aurora",
      biome: "ruins",
      subtitle: "Ru\xEDnas e cristais",
      color: 11836153,
      ground: 10324427,
      fruit: "storm",
      boss: "Guardi\xE3o da Aurora",
    },
    {
      name: "Ba\xEDa dos Corais",
      biome: "coral",
      subtitle: "Recifes e praias rosadas",
      color: 16754849,
      ground: 15980221,
      fruit: null,
      boss: "Guardi\xE3o dos Corais",
    },
    {
      name: "Serra do Vento",
      biome: "mountain",
      subtitle: "Cumes e encostas",
      color: 9088178,
      ground: 9547138,
      fruit: null,
      boss: "Guardi\xE3o da Serra",
    },
    {
      name: "Dunas Douradas",
      biome: "desert",
      subtitle: "Dunas e o\xE1sis",
      color: 16107374,
      ground: 15649157,
      fruit: null,
      boss: "Guardi\xE3o das Dunas",
    },
    {
      name: "Costa de Basalto",
      biome: "basalt",
      subtitle: "Fal\xE9sias e pedregulhos",
      color: 8624034,
      ground: 7833994,
      fruit: null,
      boss: "Guardi\xE3o de Pedra",
    },
    {
      name: "Geleira Boreal",
      biome: "snow",
      subtitle: "Geleiras e icebergs",
      color: 11529197,
      ground: 15004655,
      fruit: null,
      boss: "Guardi\xE3o Boreal",
    },
    {
      name: "Selva das Cascatas",
      biome: "jungle",
      subtitle: "Mata alta e cascatas",
      color: 3783041,
      ground: 6858861,
      fruit: null,
      boss: "Guardi\xE3o das Cascatas",
    },
    {
      name: "C\xE2nion Rubro",
      biome: "canyon",
      subtitle: "Arcos e rochas vermelhas",
      color: 14125931,
      ground: 12880491,
      fruit: null,
      boss: "Guardi\xE3o do C\xE2nion",
    },
    {
      name: "Ilha dos G\xEAiseres",
      biome: "geyser",
      subtitle: "Lagoas e vapor",
      color: 6674628,
      ground: 11188895,
      fruit: null,
      boss: "Guardi\xE3o das Fontes",
    },
    {
      name: "Picos da Tempestade",
      biome: "storm",
      subtitle: "Agulhas de pedra e nuvens",
      color: 10001097,
      ground: 9277862,
      fruit: null,
      boss: "Guardi\xE3o da Tempestade",
    },
    {
      name: "Coroa dos Elementos",
      biome: "final",
      subtitle: "Gelo e fogo lado a lado",
      color: 16036991,
      ground: 10393011,
      fruit: null,
      boss: "Guardi\xE3o dos Elementos",
    },
    {name:'Bosque dos Cogumelos',biome:'mushroom',subtitle:'Fungos gigantes e esporos de luz',color:0xb98be5,ground:0x8bc79e,fruit:null,boss:'Guardião dos Esporos'},
    {name:'Arquipélago Mecânico',biome:'clockwork',subtitle:'Engrenagens e torres de cobre',color:0xe7ac62,ground:0xb8c6bd,fruit:null,boss:'Guardião das Engrenagens'},
    {name:'Jardim das Nuvens',biome:'sky',subtitle:'Arcos celestes e jardins suspensos',color:0x81d4e9,ground:0xc5e7d8,fruit:null,boss:'Guardião dos Ventos'},
    {name:'Santuário Lunar',biome:'lunar',subtitle:'Cristais e observatório estelar',color:0xad99ef,ground:0xb2afcf,fruit:null,boss:'Guardião da Lua'},
    {name:'Estação Integro',biome:'station',subtitle:'Trilhos, jardins e o grande relógio',color:0x4fbea5,ground:0xc9d9a9,fruit:null,boss:'Guardião da Estação'},
  ].map((C, A) => ({
    ...C,
    id: A,
    x: (Math.floor(A / 5) % 2 ? 4 - (A % 5) : A % 5) * 140,
    z: Math.floor(A / 5) * 180,
    radius: 42,
  })),
  FRUITS = {
    ember: {
      name: "Brasa",
      color: 16742200,
      shape: "berry",
      power: "Bola de fogo",
      burst: "Explos\xE3o solar",
      desc: "Proj\xE9teis que deixam calor por 3 segundos.",
      damage: 25,
      cost: 10,
      cool: 1.1,
    },
    sprout: {
      name: "Broto",
      color: 6808472,
      shape: "apple",
      power: "Semente viva",
      burst: "Escudo da floresta",
      desc: "Sementes fortes; a habilidade cura e protege.",
      damage: 25,
      cost: 10,
      cool: 1,
    },
    frost: {
      name: "Geada",
      color: 8644095,
      shape: "pear",
      power: "Estilha\xE7o de gelo",
      burst: "Inverno circular",
      desc: "Desacelera os inimigos; a habilidade congela.",
      damage: 28,
      cost: 12,
      cool: 1.2,
    },
    wind: {
      name: "Vento",
      color: 14219465,
      shape: "spiral",
      power: "Rajada",
      burst: "Grande tornado",
      desc: "Uma onda de vento afasta os inimigos.",
      damage: 28,
      cost: 12,
      cool: 1.1,
    },
    storm: {
      name: "Raio",
      color: 11836159,
      shape: "grape",
      power: "Raio em cadeia",
      burst: "Tempestade",
      desc: "O raio salta entre at\xE9 tr\xEAs inimigos.",
      damage: 32,
      cost: 14,
      cool: 1.4,
    },
    aurora: {
      name: "Aurora",
      color: 16765787,
      shape: "star",
      power: "Luz da aurora",
      burst: "Estrela do mar",
      desc: "Fruta lend\xE1ria escondida nas ru\xEDnas da Aurora.",
      damage: 42,
      cost: 14,
      cool: 1,
    },
  };
FRUITS.tide = {
  name: "Mar\xE9",
  color: 3793885,
  shape: "pear",
  power: "P\xE9rola do mar",
  burst: "Mar\xE9 luminosa",
  desc: "Fruta rara escondida na gruta de gelo; lan\xE7a p\xE9rolas de energia.",
  damage: 36,
  cost: 12,
  cool: 1,
};
FRUITS.lunar = {
  name: "Lunar",
  color: 16160219,
  shape: "star",
  power: "Fragmento lunar",
  burst: "Eclipse",
  desc: "Fruta \xE9pica escondida perto da forja; seu brilho afasta sentinelas.",
  damage: 39,
  cost: 13,
  cool: 1.15,
};
var DOCK_OFFSET = -54,
  RARE_FRUITS = [
    {
      id: "sprout",
      island: 1,
      x: -28,
      z: 18,
      rarity: "Rara",
      hint: "Atr\xE1s da cortina de \xE1gua, entre duas pedras verdes.",
    },
    {
      id: "tide",
      island: 2,
      x: 27,
      z: 19,
      rarity: "Rara",
      hint: "Na gruta azul, entre os cristais mais altos.",
    },
    {
      id: "lunar",
      island: 3,
      x: -29,
      z: 16,
      rarity: "\xC9pica",
      hint: "Sob o arco de basalto, longe da lava alaranjada.",
    },
    {
      id: "aurora",
      island: 4,
      x: 26,
      z: 28,
      rarity: "Lend\xE1ria",
      hint: "Atr\xE1s das colunas partidas, no jardim das estrelas.",
    },
  ],
  rarePosition = (C) => {
    let A = RARE_FRUITS.find((g) => g.id === C);
    return A ? { x: ISLANDS[A.island].x + A.x, z: ISLANDS[A.island].z + A.z } : null;
  },
  SEA_MINES = ISLANDS.slice(0, -1).flatMap((C, A) => {
    let g = ISLANDS[A + 1],
      B = (C.x + g.x) / 2,
      E = (C.z + g.z) / 2;
    return C.z === g.z
      ? [
          { id: A * 2, x: B, z: E - 54 },
          { id: A * 2 + 1, x: B + 19, z: E - 79 },
        ]
      : [
          { id: A * 2, x: B + 65, z: E },
          { id: A * 2 + 1, x: B - 67, z: E + 12 },
        ];
  }),
  UPGRADES = {
    power: {
      name: "For\xE7a",
      desc: "+5 de dano nos golpes e poderes",
      max: 6,
      base: 45,
    },
    armor: {
      name: "Vitalidade",
      desc: "+22 de vida m\xE1xima",
      max: 6,
      base: 40,
    },
    speed: {
      name: "Passos leves",
      desc: "Caminhada e esquiva mais r\xE1pidas",
      max: 4,
      base: 55,
    },
    boat: {
      name: "Vela veloz",
      desc: "Mais velocidade no barco",
      max: 3,
      base: 60,
    },
  },
  distance = (C, A) => Math.hypot(C.x - A.x, C.z - A.z),
  bound = (C, A, g) => Math.max(A, Math.min(g, C)),
  safeNumber = (C, A = 0, g = 1e7) => (Number.isFinite(C) ? bound(C, 0, g) : A);
function freshSave() {
  return {
    version: 1,
    coins: 30,
    level: 1,
    xp: 0,
    island: 0,
    fruit: null,
    owned: [],
    collected: [],
    kills: Array(ISLANDS.length).fill(0),
    bosses: Array(ISLANDS.length).fill(!1),
    claimed: Array(ISLANDS.length).fill(!1),
    chests: [],
    upgrades: { power: 0, armor: 0, speed: 0, boat: 0 },
    potions: 2,
    defeated: 0,
  };
}
function cleanSave(C) {
  let A = freshSave();
  if (C?.version !== 1) return A;
  ((A.coins = Math.floor(safeNumber(C.coins, 30))),
    (A.level = Math.floor(bound(safeNumber(C.level, 1), 1, 30))),
    (A.xp = Math.floor(safeNumber(C.xp, 0, 1100))),
    (A.potions = Math.floor(safeNumber(C.potions, 2, 15))),
    (A.defeated = Math.floor(safeNumber(C.defeated))),
    (A.owned = [
      ...new Set(
        (Array.isArray(C.owned) ? C.owned : []).filter((g) =>
          Object.hasOwn(FRUITS, g),
        ),
      ),
    ]),
    (A.collected = [
      ...new Set(
        (Array.isArray(C.collected) ? C.collected : []).filter((g) =>
          Object.hasOwn(FRUITS, g),
        ),
      ),
    ]),
    (A.fruit = A.owned.includes(C.fruit) ? C.fruit : A.owned[0] || null));
  for (let g = 0; g < ISLANDS.length; g++)
    ((A.kills[g] = Math.floor(safeNumber(C.kills?.[g], 0, 3))),
      (A.bosses[g] = C.bosses?.[g] === !0),
      (A.claimed[g] =
        C.claimed?.[g] === !0 &&
        A.bosses[g] &&
        (!ISLANDS[g].fruit || A.collected.includes(ISLANDS[g].fruit))),
      g > 1 && !A.claimed[g - 1] && (A.claimed[g] = !1));
  for (let g in UPGRADES)
    A.upgrades[g] = Math.floor(safeNumber(C.upgrades?.[g], 0, UPGRADES[g].max));
  for (
    A.chests = [
      ...new Set(
        (Array.isArray(C.chests) ? C.chests : []).filter(
          (g) => Number.isInteger(g) && g >= 0 && g < ISLANDS.length,
        ),
      ),
    ],
      A.island = Math.floor(safeNumber(C.island, 0, ISLANDS.length - 1));
    A.island > 1 && !A.claimed[A.island - 1];

  )
    A.island--;
  return A;
}
var stationPosition = (C, A) => {
    if (A?.startsWith("rare:")) return rarePosition(A.slice(5));
    let g = ISLANDS[C],
      B = {
        guide: [-7, -28],
        shop: [14, -28],
        dock: [0, -39],
        fruit: [12, -13],
        chest: [-26, -10],
        boss: [0, 27],
      }[A] || [0, 0];
    return { x: g.x + B[0], z: g.z + B[1] };
  },
  FruitAdventure = class {
    constructor(A) {
      ((this.save = cleanSave(A)),
        (this.island = this.save.island),
        (this.player = { ...stationPosition(this.island, "dock"), y: 0, vy: 0, yaw: 0 }),
        (this.hp = this.maxHp),
        (this.energy = 100),
        (this.events = []),
        (this.time = 0),
        (this.cool = { slash: 0, power: 0, burst: 0, dash: 0, potion: 0 }),
        (this.shield = 0),
        (this.invincible = 1),
        (this.dashing = 0),
        (this.dashDir = { x: 0, z: 1 }),
        (this.attackAnim = 0),
        (this.boating = !1),
        (this.route = []),
        (this.travelTo = null),
        (this.walkTarget = null),
        (this.moving = 0),
        (this.projectiles = []),
        (this.fx = []),
        (this.enemies = []),
        (this.mines = SEA_MINES.map((g) => ({ ...g, armed: 0, cooldown: 0 }))),
        (this.mineWarning = null),
        (this.treasureTarget = null),
        this.spawnEnemies());
    }
    get ground() {
      return this.boating
        ? 0
        : groundHeight(ISLANDS[this.island], this.player.x, this.player.z);
    }
    get maxHp() {
      return 110 + (this.save.level - 1) * 8 + this.save.upgrades.armor * 22;
    }
    get xpGoal() {
      return 60 + (this.save.level - 1) * 30;
    }
    get speed() {
      return 9.2 + this.save.upgrades.speed * 0.7;
    }
    get damageBonus() {
      return (this.save.level - 1) * 2 + this.save.upgrades.power * 5;
    }
    get bossReady() {
      return (
        this.save.kills[this.island] >= 3 &&
        (!ISLANDS[this.island].fruit ||
          this.save.collected.includes(ISLANDS[this.island].fruit))
      );
    }
    emit(A, g) {
      this.events.push({ type: A, text: g });
    }
    drainEvents() {
      return this.events.splice(0);
    }
    spawnEnemies() {
      let A = this.island,
        g = ISLANDS[A];
      this.enemies = [
        [-18, 1],
        [20, 6],
        [-10, 20],
        [0, 27],
      ].map(([B, E], I) => ({
        id: A + ":" + I,
        island: A,
        x: g.x + B,
        z: g.z + E,
        home: { x: g.x + B, z: g.z + E },
        boss: I === 3,
        hp: I === 3 ? 190 + A * 85 : 38 + A * 20,
        maxHp: I === 3 ? 190 + A * 85 : 38 + A * 20,
        alive: I !== 3 || !this.save.bosses[A],
        respawn: 0,
        windup: 0,
        recover: 0,
        slow: 0,
        burn: 0,
        burnTick: 0,
        flash: 0,
        yaw: 0,
        attackAt: null,
      }));
    }
    unlocked(A) {
      return A >= 0 && A < ISLANDS.length && (A <= 1 || this.save.claimed[A - 1]);
    }
    near(A, g = 5) {
      return !this.boating && distance(this.player, stationPosition(this.island, A)) < g;
    }
    nearby() {
      if (this.boating) return "dock";
      let A = ["chest", "guide", "shop", "dock"];
      ISLANDS[this.island].fruit &&
        !this.save.collected.includes(ISLANDS[this.island].fruit) &&
        A.push("fruit");
      for (let g of RARE_FRUITS)
        g.island === this.island &&
          !this.save.owned.includes(g.id) &&
          A.push("rare:" + g.id);
      return (
        A.filter(
          (g) => !(g === "chest" && this.save.chests.includes(this.island)),
        )
          .map((g) => ({ id: g, d: distance(this.player, stationPosition(this.island, g)) }))
          .filter((g) => g.d < 4.5)
          .sort((g, B) => g.d - B.d)[0]?.id || null
      );
    }
    free(A, g) {
      if (this.boating)
        return (
          A >= -75 &&
          A <= 635 &&
          g >= -125 &&
          g <= SEA_BOUNDS.maxZ &&
          !ISLANDS.some((E) => insideIsland(E, A, g, -4))
        );
      let B = ISLANDS[this.island];
      return insideIsland(B, A, g, 1);
    }
    markTreasure(A) {
      let g = RARE_FRUITS.find((B) => B.id === A);
      return !g || this.save.owned.includes(A)
        ? !1
        : ((this.treasureTarget = A), this.emit("notice", g.hint), !0);
    }
    walkTo(A, g, B = null) {
      return this.free(A, g)
        ? ((this.walkTarget = { x: A, z: g, id: B }), !0)
        : !1;
    }
    go(A) {
      if (A === "fruit" && !ISLANDS[this.island].fruit)
        return (
          this.emit(
            "notice",
            "Sua primeira fruta est\xE1 na Floresta Esmeralda. Embarque no cais.",
          ),
          !1
        );
      if (this.boating)
        return (
          this.emit(
            "notice",
            "Escolha uma ilha no mapa ou pilote com o controle.",
          ),
          !1
        );
      let g = stationPosition(this.island, A);
      return (this.walkTo(g.x, g.z, A), !0);
    }
    interact(A = this.nearby()) {
      if (this.boating) return (this.emit("panel", "map"), !0);
      if (!A || !this.near(A) || (A === "fruit" && !ISLANDS[this.island].fruit))
        return !1;
      this.walkTarget = null;
      let g = this.island;
      if (A === "fruit" || A.startsWith("rare:")) {
        let B = A.startsWith("rare:") ? A.slice(5) : ISLANDS[g].fruit;
        return !B || !FRUITS[B] || this.save.collected.includes(B)
          ? !1
          : (this.save.collected.push(B),
            this.save.owned.includes(B) || this.save.owned.push(B),
            (this.save.fruit = B),
            this.treasureTarget === B && (this.treasureTarget = null),
            this.emit(
              "collect",
              FRUITS[B].name + " encontrada! Use Poder e Habilidade.",
            ),
            this.effect(
              "collect",
              this.player.x,
              this.player.z,
              FRUITS[B].color,
              3,
            ),
            !0);
      }
      return A === "chest"
        ? this.save.chests.includes(g)
          ? !1
          : (this.save.chests.push(g),
            (this.save.coins += 35 + g * 20),
            this.emit(
              "loot",
              "Ba\xFA aberto! +" + (35 + g * 20) + " integros.",
            ),
            this.effect("collect", this.player.x, this.player.z, 16765787, 3),
            !0)
        : A === "guide"
          ? this.save.bosses[g] &&
            !this.save.claimed[g] &&
            (!ISLANDS[g].fruit || this.save.collected.includes(ISLANDS[g].fruit))
            ? ((this.save.claimed[g] = !0),
              (this.save.coins += 100 + g * 55),
              this.gainXP(70 + g * 40),
              g === ISLANDS.length - 1
                ? this.emit(
                    "victory",
                    `As ${ISLANDS.length} ilhas foram exploradas! Você venceu o ${ISLANDS[g].boss}.`,
                  )
                : this.emit(
                    "quest",
                    "Miss\xE3o conclu\xEDda! Pr\xF3xima ilha liberada no mapa.",
                  ),
              !0)
            : (this.emit("panel", "quest"), !0)
          : A === "shop"
            ? (this.emit("panel", "shop"), !0)
            : A === "dock"
              ? (this.emit("panel", "map"), !0)
              : !1;
    }
    equip(A) {
      return this.save.owned.includes(A)
        ? ((this.save.fruit = A),
          this.emit("equip", FRUITS[A].name + " equipada."),
          !0)
        : !1;
    }
    price(A) {
      return A === "potion"
        ? 18
        : Math.round(UPGRADES[A].base * Math.pow(this.save.upgrades[A] + 1, 1.45));
    }
    buy(A) {
      if (
        !this.near("shop") ||
        (A !== "potion" && !UPGRADES[A]) ||
        (A === "potion"
          ? this.save.potions >= 15
          : this.save.upgrades[A] >= UPGRADES[A].max)
      )
        return !1;
      let g = this.price(A);
      return this.save.coins < g
        ? !1
        : ((this.save.coins -= g),
          A === "potion"
            ? this.save.potions++
            : (this.save.upgrades[A]++,
              A === "armor" &&
                (this.hp = Math.min(this.maxHp, this.hp + 22))),
          this.emit("buy", "Compra feita com integros!"),
          !0);
    }
    potion() {
      return this.save.potions < 1 ||
        this.hp >= this.maxHp ||
        this.cool.potion > 0
        ? !1
        : (this.save.potions--,
          (this.hp = Math.min(this.maxHp, this.hp + 65)),
          (this.cool.potion = 8),
          this.effect("heal", this.player.x, this.player.z, 7860132, 3),
          this.emit("heal", "\xC1gua de coco: +65 de vida."),
          !0);
    }
    board() {
      return this.boating
        ? !0
        : this.near("dock", 6)
          ? ((this.boating = !0),
            (this.walkTarget = null),
            (this.player.x = ISLANDS[this.island].x),
            (this.player.z = ISLANDS[this.island].z + DOCK_OFFSET),
            (this.player.y = 0),
            (this.player.vy = 0),
            (this.player.yaw = Math.PI),
            this.emit(
              "boat",
              "No barco! Escolha uma ilha no mapa ou use o controle.",
            ),
            !0)
          : !1;
    }
    disembark() {
      if (!this.boating) return !1;
      let A = ISLANDS.findIndex(
        (g, B) =>
          this.unlocked(B) && distance(this.player, { x: g.x, z: g.z + DOCK_OFFSET }) < 7,
      );
      return A < 0
        ? (this.emit(
            "notice",
            "Aproxime-se do cais de uma ilha liberada para desembarcar.",
          ),
          !1)
        : (this.arrive(A), !0);
    }
    waterPath(A) {
      let B = (e, S) => e + "," + S,
        E = {
          x: Math.round(this.player.x / 3),
          z: Math.round(this.player.z / 3),
        },
        I = { x: Math.round(A.x / 3), z: Math.round(A.z / 3) },
        Q = B(E.x, E.z),
        M = B(I.x, I.z),
        Y = [{ ...E, g: 0, f: 0 }],
        w = new Map([[Q, 0]]),
        G = new Map(),
        h = new Set(),
        J = (e, S) =>
          e * 3 >= -75 &&
          e * 3 <= 635 &&
          S * 3 >= -125 &&
          S * 3 <= SEA_BOUNDS.maxZ &&
          !ISLANDS.some((i) => insideIsland(i, e * 3, S * 3, -6)) &&
          !SEA_MINES.some((i) => Math.hypot(e * 3 - i.x, S * 3 - i.z) < 11),
        s = 0;
      for (; Y.length && s++ < 4e4; ) {
        Y.sort((i, D) => i.f - D.f);
        let e = Y.shift(),
          S = B(e.x, e.z);
        if (!h.has(S)) {
          if (S === M) {
            let i = S,
              D = [];
            for (; i !== Q; ) {
              let [c, o] = i.split(",").map(Number);
              if ((D.push({ x: c * 3, z: o * 3 }), (i = G.get(i)), !i))
                return null;
            }
            return (
              D.reverse(),
              D.filter((c, o) => {
                if (!o || o === D.length - 1) return !0;
                let k = D[o - 1],
                  R = D[o + 1];
                return (
                  Math.abs(
                    (c.x - k.x) * (R.z - c.z) - (c.z - k.z) * (R.x - c.x),
                  ) > 0.01
                );
              })
            );
          }
          h.add(S);
          for (let [i, D] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            let c = e.x + i,
              o = e.z + D,
              k = B(c, o);
            if (
              h.has(k) ||
              !J(c, o) ||
              (i && D && (!J(c, e.z) || !J(e.x, o)))
            )
              continue;
            let R = e.g + Math.hypot(i, D);
            R >= (w.get(k) ?? 1 / 0) ||
              (w.set(k, R),
              G.set(k, S),
              Y.push({
                x: c,
                z: o,
                g: R,
                f: R + Math.hypot(I.x - c, I.z - o),
              }));
          }
        }
      }
      return null;
    }
    sail(A) {
      if (!this.unlocked(A) || (!this.boating && !this.board())) return !1;
      let g = this.waterPath({ x: ISLANDS[A].x, z: ISLANDS[A].z + DOCK_OFFSET });
      return g
        ? ((this.travelTo = A),
          (this.route = g.length ? g : [{ x: ISLANDS[A].x, z: ISLANDS[A].z + DOCK_OFFSET }]),
          this.emit("boat", "Navegando at\xE9 " + ISLANDS[A].name + "."),
          !0)
        : (this.emit(
            "notice",
            "Afaste o barco um pouco da margem e tente novamente.",
          ),
          !1);
    }
    arrive(A) {
      ((this.island = A),
        (this.save.island = A),
        (this.boating = !1),
        (this.travelTo = null),
        (this.route = []),
        (this.player = { ...stationPosition(A, "dock"), y: 0, vy: 0, yaw: 0 }),
        (this.walkTarget = null),
        (this.projectiles = []),
        (this.fx = []),
        (this.invincible = 2),
        (this.hp = Math.max(this.hp, this.maxHp * 0.65)),
        this.spawnEnemies(),
        this.emit("arrival", "Voc\xEA chegou a " + ISLANDS[A].name + "!"));
    }
    target(A = 22) {
      return (
        this.enemies
          .filter(
            (g) =>
              g.alive &&
              (!g.boss || this.bossReady) &&
              distance(g, this.player) < A,
          )
          .sort((g, B) => distance(g, this.player) - distance(B, this.player))[0] || null
      );
    }
    effect(A, g, B, E, I = 2) {
      (this.fx.push({
        type: A,
        x: g,
        z: B,
        color: E,
        radius: I,
        life: 0.6,
        total: 0.6,
      }),
        this.fx.length > 35 && this.fx.shift());
    }
    gainXP(A) {
      for (
        this.save.xp += A;
        this.save.xp >= this.xpGoal && this.save.level < 30;

      )
        ((this.save.xp -= this.xpGoal),
          this.save.level++,
          (this.hp = this.maxHp),
          (this.energy = 100),
          this.emit(
            "level",
            "N\xEDvel " + this.save.level + "! Vida e energia recuperadas.",
          ));
      this.save.level === 30 &&
        (this.save.xp = Math.min(this.save.xp, this.xpGoal));
    }
    hit(A, g, B = "slash") {
      if (!(!A.alive || (A.boss && !this.bossReady))) {
        if (
          ((A.hp = Math.max(0, A.hp - g)),
          (A.flash = 0.15),
          B === "frost" && (A.slow = 3),
          B === "ember" && ((A.burn = 3), (A.burnTick = 0.6)),
          B === "wind")
        ) {
          let E = distance(A, this.player) || 1,
            I = (A.x - this.player.x) / E,
            Q = (A.z - this.player.z) / E,
            M = ISLANDS[this.island],
            Y = A.x + I * 3,
            w = A.z + Q * 3;
          insideIsland(M, Y, w, 2) && ((A.x = Y), (A.z = w));
        }
        A.hp ||
          ((A.alive = !1),
          (A.respawn = 28),
          this.save.defeated++,
          (this.save.coins += A.boss
            ? 65 + this.island * 30
            : 9 + this.island * 5),
          this.gainXP(A.boss ? 70 + this.island * 35 : 22 + this.island * 10),
          A.boss
            ? ((this.save.bosses[this.island] = !0),
              this.emit(
                "boss",
                "Guardi\xE3o vencido! Volte at\xE9 Lia para concluir a miss\xE3o.",
              ))
            : ((this.save.kills[this.island] = Math.min(
                3,
                this.save.kills[this.island] + 1,
              )),
              this.emit(
                "defeat",
                this.save.kills[this.island] >= 3
                  ? "Sentinelas vencidas! O guardi\xE3o espera voc\xEA."
                  : "Sentinela vencida! " +
                      this.save.kills[this.island] +
                      "/3.",
              )),
          this.effect(
            "burst",
            A.x,
            A.z,
            FRUITS[this.save.fruit]?.color || 16765787,
            A.boss ? 5 : 2,
          ));
      }
    }
    attack(A) {
      if (this.boating || this.cool[A] > 0) return !1;
      let g = FRUITS[this.save.fruit];
      if (A !== "slash" && !g)
        return (
          this.emit(
            "notice",
            "Busque a primeira fruta na Floresta Esmeralda. O barco j\xE1 est\xE1 liberado.",
          ),
          !1
        );
      let B = A === "slash" ? 0 : A === "burst" ? 30 : g.cost;
      if (this.energy < B)
        return (this.emit("notice", "Espere a energia recarregar."), !1);
      ((this.energy -= B),
        (this.attackAnim = 0.35),
        (this.walkTarget = null));
      let E = this.target(A === "slash" ? 4.7 : 22);
      if (
        (E &&
          (this.player.yaw = Math.atan2(
            E.x - this.player.x,
            E.z - this.player.z,
          )),
        A === "slash")
      )
        return (
          (this.cool.slash = 0.48),
          this.effect("slash", this.player.x, this.player.z, 16773307, 3),
          E && this.hit(E, 15 + this.damageBonus),
          !0
        );
      let I = this.save.fruit,
        Q = g.color;
      if (((this.cool[A] = A === "burst" ? 6 : g.cool), A === "burst")) {
        (this.effect("burst", this.player.x, this.player.z, Q, 9),
          I === "sprout" &&
            ((this.hp = Math.min(this.maxHp, this.hp + 40)),
            (this.shield = 6),
            this.emit("notice", "Escudo da floresta ativo!")));
        for (let G of this.enemies)
          distance(G, this.player) < (I === "storm" ? 16 : 9) &&
            (this.hit(G, 42 + this.damageBonus * 1.6, I),
            I === "frost" && (G.slow = 6));
        return !0;
      }
      if (I === "storm") {
        let G = this.enemies
          .filter(
            (h) =>
              h.alive &&
              (!h.boss || this.bossReady) &&
              distance(h, this.player) < 20,
          )
          .sort((h, J) => distance(h, this.player) - distance(J, this.player))
          .slice(0, 3);
        for (let h of G)
          (this.effect("spark", h.x, h.z, Q, 2),
            this.hit(h, g.damage + this.damageBonus, I));
        return (this.effect("spark", this.player.x, this.player.z, Q, 2), !0);
      }
      if (I === "wind") {
        this.effect("wind", this.player.x, this.player.z, Q, 10);
        for (let G of this.enemies)
          distance(G, this.player) < 11 &&
            this.hit(G, g.damage + this.damageBonus, I);
        return !0;
      }
      let M = E ? E.x - this.player.x : Math.sin(this.player.yaw),
        Y = E ? E.z - this.player.z : Math.cos(this.player.yaw),
        w = Math.hypot(M, Y) || 1;
      return (
        this.projectiles.push({
          x: this.player.x,
          z: this.player.z,
          dx: M / w,
          dz: Y / w,
          life: 1.5,
          kind: I,
          color: Q,
          damage: g.damage + this.damageBonus,
        }),
        !0
      );
    }
    jump() {
      return this.boating || this.player.y > 0.02
        ? !1
        : ((this.player.vy = 9), !0);
    }
    dash(A = { x: 0, z: 0 }) {
      if (this.boating || this.cool.dash > 0 || this.energy < 18) return !1;
      let { x: g, z: B } = A,
        E = Math.hypot(g, B);
      return (
        E < 0.1 &&
          ((g = Math.sin(this.player.yaw)),
          (B = Math.cos(this.player.yaw)),
          (E = 1)),
        (this.dashDir = { x: g / E, z: B / E }),
        (this.dashing = 0.3),
        (this.invincible = 0.5),
        (this.cool.dash = 2),
        (this.energy -= 18),
        (this.walkTarget = null),
        this.effect("dash", this.player.x, this.player.z, 15007743, 3),
        !0
      );
    }
    hurt(A) {
      this.invincible > 0 ||
        this.player.y > 1.5 ||
        ((this.hp = Math.max(0, this.hp - A * (this.shield > 0 ? 0.35 : 1))),
        (this.invincible = 0.55),
        this.effect("hurt", this.player.x, this.player.z, 16741224, 2),
        this.hp ||
          ((this.hp = this.maxHp),
          (this.energy = 100),
          (this.boating = !1),
          (this.travelTo = null),
          (this.route = []),
          (this.player = { ...stationPosition(this.island, "dock"), y: 0, vy: 0, yaw: 0 }),
          (this.invincible = 3),
          (this.walkTarget = null),
          this.spawnEnemies(),
          this.emit(
            "respawn",
            "Uma pausa no cais! Seu progresso e suas frutas foram mantidos.",
          )));
    }
    update(A, g = { x: 0, z: 0 }) {
      ((A = bound(A, 0, 0.05)),
        (this.time += A),
        (this.energy = Math.min(100, this.energy + A * 15)));
      for (let M in this.cool) this.cool[M] = Math.max(0, this.cool[M] - A);
      for (let M of ["shield", "invincible", "attackAnim", "dashing"])
        this[M] = Math.max(0, this[M] - A);
      for (let M of this.fx) M.life -= A;
      ((this.fx = this.fx.filter((M) => M.life > 0)), (this.moving = 0));
      let B = g.x || 0,
        E = g.z || 0,
        I = Math.hypot(B, E),
        Q = this.boating ? 27 + this.save.upgrades.boat * 5 : this.speed;
      if (I > 0.1)
        ((this.walkTarget = null), (this.route = []), (this.travelTo = null));
      else if (this.boating && this.route.length) {
        let M = this.route[0];
        if (
          ((B = M.x - this.player.x),
          (E = M.z - this.player.z),
          (I = Math.hypot(B, E)),
          I < 0.35 &&
            (this.route.shift(),
            !this.route.length && this.travelTo !== null))
        ) {
          this.arrive(this.travelTo);
          return;
        }
      } else if (
        this.walkTarget &&
        ((B = this.walkTarget.x - this.player.x),
        (E = this.walkTarget.z - this.player.z),
        (I = Math.hypot(B, E)),
        I < 0.6)
      ) {
        let M = this.walkTarget.id;
        ((this.walkTarget = null), M && this.interact(M), (B = E = I = 0));
      }
      if (
        (this.dashing > 0 &&
          ((B = this.dashDir.x),
          (E = this.dashDir.z),
          (I = 1),
          (Q = this.speed * 3.2)),
        I > 0.02)
      ) {
        let M = Math.min(Q * A, I),
          Y = this.player.x + (B / I) * M,
          w = this.player.z + (E / I) * M;
        (this.free(Y, this.player.z) && (this.player.x = Y),
          this.free(this.player.x, w) && (this.player.z = w),
          (this.player.yaw = Math.atan2(B, E)),
          (this.moving = 1));
      }
      (this.boating ||
        ((this.player.vy -= A * 24),
        (this.player.y = Math.max(0, this.player.y + this.player.vy * A)),
        this.player.y || (this.player.vy = 0),
        distance(this.player, stationPosition(this.island, "dock")) < 8 &&
          (this.hp = Math.min(this.maxHp, this.hp + A * 7))),
        (this.mineWarning = null));
      for (let M of this.mines) {
        if (((M.cooldown = Math.max(0, M.cooldown - A)), M.cooldown > 0))
          continue;
        let Y = distance(this.player, M);
        (this.boating &&
          Y < 9 &&
          ((this.mineWarning = M.id),
          M.armed === 0 &&
            ((M.armed = 1.1),
            this.emit(
              "notice",
              "Bomba \xE0 frente! Desvie do c\xEDrculo vermelho.",
            ))),
          M.armed > 0 &&
            ((M.armed -= A),
            M.armed <= 0 &&
              ((M.armed = 0),
              (M.cooldown = 18),
              this.effect("bomb", M.x, M.z, 16750666, 8),
              this.emit("explosion", "Bomba explodiu!"),
              this.boating &&
                Y < 8 &&
                (this.hurt(38),
                this.boating &&
                  ((this.route = []), (this.travelTo = null))))));
      }
      if (!this.boating) {
        for (let M of this.projectiles) {
          let Y = A * 28;
          ((M.x += M.dx * Y), (M.z += M.dz * Y), (M.life -= A));
          for (let w of this.enemies)
            if (
              w.alive &&
              (!w.boss || this.bossReady) &&
              distance(w, M) < (w.boss ? 2.2 : 1.5)
            ) {
              (this.hit(w, M.damage, M.kind),
                this.effect("spark", M.x, M.z, M.color, 2),
                (M.life = 0));
              break;
            }
        }
        this.projectiles = this.projectiles.filter((M) => M.life > 0);
        for (let M of this.enemies) {
          if (!M.alive) {
            M.boss ||
              ((M.respawn -= A),
              M.respawn <= 0 &&
                ((M.alive = !0),
                (M.hp = M.maxHp),
                (M.x = M.home.x),
                (M.z = M.home.z),
                (M.windup = 0),
                (M.recover = 1),
                (M.burn = M.slow = 0)));
            continue;
          }
          if (
            (M.boss && (!this.bossReady || this.save.bosses[this.island])) ||
            ((M.slow = Math.max(0, M.slow - A)),
            (M.flash = Math.max(0, M.flash - A)),
            (M.recover = Math.max(0, M.recover - A)),
            M.burn > 0 &&
              ((M.burn -= A),
              (M.burnTick -= A),
              M.burnTick <= 0 &&
                ((M.burnTick = 0.6), this.hit(M, 3, "burn"), !M.alive)))
          )
            continue;
          if (M.windup > 0) {
            ((M.windup -= A),
              M.windup <= 0 &&
                (this.effect(
                  "enemy",
                  M.attackAt.x,
                  M.attackAt.z,
                  16737115,
                  M.boss ? 5 : 3,
                ),
                distance(this.player, M.attackAt) < (M.boss ? 5 : 3) &&
                  this.hurt(
                    M.boss ? 21 + this.island * 5 : 9 + this.island * 3,
                  ),
                (M.recover = M.boss ? 1.3 : 1.1)));
            continue;
          }
          if (M.recover > 0) continue;
          let Y = distance(M, this.player),
            w = distance(this.player, stationPosition(this.island, "dock")) < 8,
            G = this.player;
          (Y > (M.boss ? 20 : 15) || w) && (G = M.home);
          let h = distance(M, G);
          if (G === this.player && Y < (M.boss ? 5.5 : 3.3)) {
            ((M.windup = M.boss ? 1.1 : 0.85),
              (M.attackAt = { x: this.player.x, z: this.player.z }));
            continue;
          }
          if (h > 0.4) {
            let J = Math.min(
              h,
              A * (M.boss ? 3.2 : 3.7) * (M.slow > 0 ? 0.35 : 1),
            );
            ((M.x += ((G.x - M.x) / h) * J),
              (M.z += ((G.z - M.z) / h) * J),
              (M.yaw = Math.atan2(G.x - M.x, G.z - M.z)));
          }
        }
      }
    }
    snapshot() {
      return {
        ...JSON.parse(JSON.stringify(this.save)),
        island: this.island,
        ground: this.ground,
        hp: this.hp,
        maxHp: this.maxHp,
        energy: this.energy,
        xpGoal: this.xpGoal,
        player: { ...this.player },
        boating: this.boating,
        travelTo: this.travelTo,
        route: this.route.map((A) => ({ ...A })),
        walkTarget: this.walkTarget ? { ...this.walkTarget } : null,
        cool: { ...this.cool },
        shield: this.shield,
        bossReady: this.bossReady,
        nearby: this.nearby(),
        time: this.time,
        enemies: this.enemies.map((A) => ({ ...A })),
        projectiles: this.projectiles.length,
        treasureTarget: this.treasureTarget,
        mineWarning: this.mineWarning,
        mines: this.mines.map((A) => ({ ...A })),
        rares: RARE_FRUITS.map((A) => ({
          ...A,
          collected: this.save.owned.includes(A.id),
        })),
      };
    }
  };

const SEA_BOUNDS={minX:-75,maxX:635,minZ:-125,maxZ:Math.max(...ISLANDS.map(i=>i.z))+115};
export {clamp, islandRadius, insideIsland, terrainHeight, groundHeight, islandOutline, ISLANDS, FRUITS, DOCK_OFFSET, RARE_FRUITS, rarePosition, SEA_MINES, UPGRADES, distance, bound, safeNumber, freshSave, cleanSave, stationPosition, FruitAdventure,SEA_BOUNDS};
