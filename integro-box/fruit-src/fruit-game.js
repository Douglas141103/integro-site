import {Vector3 as $,IcosahedronGeometry as AM,Fog as BC,SpriteMaterial as CC,Float32BufferAttribute as Cg,CylinderGeometry as EB,ConeGeometry as HE,DodecahedronGeometry as HQ,TorusGeometry as IB,Color as KA,WebGLRenderer as MB,Raycaster as PB,DirectionalLight as Pg,Group as Sg,BoxGeometry as Tg,Mesh as VA,Scene as Vg,PlaneGeometry as Xg,Vector2 as bA,ShaderMaterial as bB,MeshStandardMaterial as cg,CircleGeometry as dQ,SphereGeometry as iB,Object3D as lg,Plane as mB,CanvasTexture as nB,PerspectiveCamera as ng,Sprite as oC,InstancedMesh as pI,HemisphereLight as qg,MeshBasicMaterial as rg,BufferGeometry as zg,SRGBColorSpace as Eg,NeutralToneMapping as RB,PCFSoftShadowMap as tC,DoubleSide as yg,LinearFilter as Og} from 'three';
import {clamp,islandRadius,insideIsland,terrainHeight,groundHeight,islandOutline,ISLANDS,FRUITS,DOCK_OFFSET,RARE_FRUITS,rarePosition,SEA_MINES,UPGRADES,distance,bound,safeNumber,freshSave,cleanSave,stationPosition,FruitAdventure,SEA_BOUNDS} from "./fruit-rules.mjs";
import {iconMarkup,fruitIcon} from "./fruit-icons.js";
import {createFruitWorld} from "./fruit-world.js";
import {createFruitHUD,drawTreasureMap} from "./fruit-hud.js";
var FRUIT_LOGO = "assets/catalog-v1/fruit-box.webp";
var byId = (C) => document.getElementById(C),
  STORAGE_KEY = "integro-box-fruit-v1";
function mountFruitGame({ onExit: C }) {
  let A;
  try {
    A = JSON.parse(window.BoxStorage.getItem(STORAGE_KEY) || "null");
  } catch {}
  let g = new FruitAdventure(A),
    B = !1,
    E,
    I,
    Q,
    M,
    Y = null,
    w = 0,
    G = 0,
    h = 0,
    J = 0,
    s = Math.PI + 0.12,
    e = 0.58,
    S = 21,
    i = s,
    D = new Set(),
    c = new Set(),
    o = { x: 0, z: 0 },
    k = null,
    R = null,
    a = {},
    l = !0,
    L,
    z,
    x = byId("fruitApp"),
    d = byId("fruitCanvas"),
    BA = byId("fruitStage"),
    wA = new $(),
    IA = new PB(),
    y = new mB(new $(0, 1, 0), -1),
    V = createFruitHUD(byId("fruitHudCanvas"));
  for (let T of x.querySelectorAll("[data-pixel]"))
    T.innerHTML = iconMarkup(T.dataset.pixel);
  let JA = "";
  function CA() {
    try {
      (window.BoxStorage.setItem(STORAGE_KEY, JSON.stringify(g.save)), (l = !0));
    } catch {
      l = !1;
    }
  }
  function oA(T) {
    ((byId("fruitToast").textContent = T), (J = performance.now() + 4200));
  }
  function tA() {
    (D.clear(),
      c.clear(),
      (o = { x: 0, z: 0 }),
      (k = null),
      (byId("fruitStick").style.transform = "translate(0px,0px)"));
  }
  function ZA() {
    try {
      ((E = new MB({
        canvas: d,
        antialias: !0,
        powerPreference: "high-performance",
      })),
        E.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5)),
        (E.outputColorSpace = Eg),
        (E.toneMapping = RB),
        (E.toneMappingExposure = 1.02),
        (E.shadowMap.enabled = !0),
        (E.shadowMap.type = tC),
        (I = new Vg()),
        (I.background = new KA(9555173)),
        (I.fog = new BC(9555173, 150, 430)),
        (Q = new ng(53, 1, 0.1, 600)),
        I.add(new qg(0xfff3d5,0x578b9a,1.25)),
        (L = new Pg(0xfff0cc,2.25)),
        L.position.set(-35, 65, 30),
        (L.castShadow = !0),
        L.shadow.mapSize.set(1024, 1024),
        (L.shadow.camera.left = -53),
        (L.shadow.camera.right = 53),
        (L.shadow.camera.top = 53),
        (L.shadow.camera.bottom = -53),
        (L.shadow.camera.near = 1),
        (L.shadow.camera.far = 150),
        (L.shadow.normalBias = 0.05),
        (L.shadow.bias = -2e-4),
        I.add(L, L.target),
        (M = createFruitWorld(I)),
        wA.set(g.player.x, 2, g.player.z),
        cA(),
        new ResizeObserver(aA).observe(BA),
        aA(),
        kA(1),
        M.animate(g, 0, Q),
        (w = performance.now()),
        sA(w));
    } catch (T) {
      (console.error("Fruit Box:", T), (byId("fruitError").hidden = !1));
    }
  }
  function cA() {
    let T = new MB({ alpha: !0, antialias: !0 });
    (T.setSize(150, 150), (T.outputColorSpace = Eg), (T.toneMapping = RB));
    let AA = new Vg();
    AA.add(new qg(16777215, 4488325, 3));
    let m = new Pg(16777215, 3);
    (m.position.set(-2, 5, 6), AA.add(m));
    let r = new ng(33, 1, 0.1, 20);
    (r.position.set(2, 1.8, 3.5), r.lookAt(0, 0.8, 0));
    for (let n in FRUITS) {
      let t = M.fruitModel(n);
      (M.root.remove(t),
        AA.add(t),
        T.render(AA, r),
        (a[n] = T.domElement.toDataURL()),
        AA.remove(t));
    }
    (T.dispose(), T.forceContextLoss());
  }
  function aA() {
    if (!E) return;
    let T = d.clientWidth,
      AA = d.clientHeight;
    !T ||
      !AA ||
      (E.setSize(T, AA, !1), (Q.aspect = T / AA), Q.updateProjectionMatrix());
  }
  function DA() {
    let T =
        o.x +
        (D.has("d") || D.has("arrowright") ? 1 : 0) -
        (D.has("a") || D.has("arrowleft") ? 1 : 0),
      AA =
        o.z +
        (D.has("s") || D.has("arrowdown") ? 1 : 0) -
        (D.has("w") || D.has("arrowup") ? 1 : 0);
    return {
      x: T * Math.cos(i) + AA * Math.sin(i),
      z: -T * Math.sin(i) + AA * Math.cos(i),
    };
  }
  function kA(T) {
    let AA = new $(g.player.x, g.ground + 1 + g.player.y * 0.6, g.player.z),
      m = Math.min(1, T * 7);
    (wA.lerp(AA, m), (i += Math.atan2(Math.sin(s - i), Math.cos(s - i)) * m));
    let r = g.boating ? S + 5 : S;
    (Q.position.set(
      wA.x + Math.sin(i) * r * Math.cos(e),
      wA.y + r * Math.sin(e),
      wA.z + Math.cos(i) * r * Math.cos(e),
    ),
      Q.lookAt(wA));
  }
  function q() {
    for (let T of g.drainEvents()) {
      if (T.type === "panel") {
        j(T.text);
        continue;
      }
      if (T.type === "victory") {
        (CA(), j("victory"));
        continue;
      }
      (oA(T.text),
        [
          "collect",
          "loot",
          "quest",
          "buy",
          "defeat",
          "boss",
          "equip",
          "level",
          "arrival",
          "heal",
        ].includes(T.type) && CA(),
        T.type === "arrival" &&
          ((s = Math.PI + 0.12), (i = s), wA.set(g.player.x, 2, g.player.z)),
        Y === "shop" && T.type === "buy" && u());
    }
  }
  function sA(T) {
    requestAnimationFrame(sA);
    let AA = Math.min(0.05, Math.max(0, (T - w) / 1e3));
    if (((w = T), !(!B || !E))) {
      if (!Y && !document.hidden) {
        g.update(AA, DA());
        for (let m of c) g.attack(m);
        (q(), (h += AA), h > 3 && (CA(), (h = 0)));
      }
      (kA(AA),
        M.animate(g, Y ? 0 : AA, Q),
        L.position.set(g.player.x - 35, 65, g.player.z - 25),
        L.target.position.set(g.player.x, 0, g.player.z),
        E.render(I, Q),
        (G += AA),
        G > 0.1 && ((G = 0), _()),
        T > J && (byId("fruitToast").textContent = ""));
    }
  }
  function TA() {
    let T = g.island,
      AA = g.save,
      m = FRUITS[ISLANDS[T].fruit];
    return T === 0 && !AA.fruit
      ? {
          title: "Navegue para a Floresta Esmeralda",
          text: "Porto do Sol n\xE3o tem frutas. O barco j\xE1 est\xE1 pronto no cais; sua primeira fruta est\xE1 na segunda ilha.",
        }
      : AA.claimed[T]
        ? {
            title:
              T === ISLANDS.length - 1
                ? "Arquip\xE9lago explorado!"
                : "Miss\xE3o conclu\xEDda",
            text: "Explore o mapa de tesouros ou navegue para outra ilha.",
          }
        : m && !AA.collected.includes(ISLANDS[T].fruit)
          ? {
              title: "Encontre a fruta " + m.name,
              text: "Procure o altar de pedra na ilha. Aproxime-se e toque na m\xE3o para coletar.",
            }
          : AA.kills[T] < 3
            ? {
                title: `Ven\xE7a as sentinelas \xB7 ${AA.kills[T]}/3`,
                text: "Use a espada perto dos inimigos e o poder \xE0 dist\xE2ncia. Saia dos c\xEDrculos vermelhos.",
              }
            : AA.bosses[T]
              ? {
                  title: "Volte at\xE9 Lia",
                  text: "Converse para receber integros e liberar a pr\xF3xima ilha.",
                }
              : {
                  title: "Enfrente o guardi\xE3o",
                  text: "Use a estrela para a habilidade e a seta para esquivar. O coco recupera vida.",
                };
  }
  function _() {
    let T = g.save,
      AA = g.nearby(),
      m = {
        fruit: "Pegar fruta",
        chest: "Abrir ba\xFA",
        guide: "Falar com Lia",
        shop: "Abrir loja",
        dock: "Mapa e barco",
      },
      r = g.boating
        ? "Mapa e desembarque"
        : AA?.startsWith("rare:")
          ? "Pegar fruta rara"
          : m[AA] || "Aproxime-se para interagir";
    ((byId("fruitInteract").disabled = !AA),
      byId("fruitInteract").setAttribute("aria-label", r),
      (byId("fruitInteract").title = r + " \xB7 E"),
      (byId("fruitPotionCount").textContent =
        g.cool.potion > 0 ? Math.ceil(g.cool.potion) + "s" : T.potions),
      (byId("fruitPotion").disabled =
        !T.potions || g.hp >= g.maxHp || g.cool.potion > 0));
    let n = fruitIcon(T.fruit);
    (n !== JA && ((byId("fruitPowerGlyph").innerHTML = iconMarkup(n)), (JA = n)),
      byId("fruitPower").setAttribute(
        "aria-label",
        T.fruit ? FRUITS[T.fruit].power : "Encontre uma fruta na segunda ilha",
      ));
    for (let [t, P] of [
      ["fruitSlash", "slash"],
      ["fruitPower", "power"],
      ["fruitBurst", "burst"],
    ])
      ((byId(t).disabled = g.boating || (P !== "slash" && !T.fruit)),
        (byId(t).querySelector("small").textContent =
          g.cool[P] > 0
            ? g.cool[P].toFixed(1) + "s"
            : { slash: "J", power: "Z", burst: "X" }[P]));
    ((byId("fruitJump").disabled = g.boating),
      (byId("fruitDash").disabled = g.boating),
      (byId("fruitDash").querySelector("small").textContent =
        g.cool.dash > 0 ? g.cool.dash.toFixed(1) + "s" : "Q"),
      V.draw(g, i));
  }
  function j(T) {
    (tA(),
      (Y = T),
      (byId("fruitOverlay").hidden = !1),
      u(),
      byId("fruitDialogBody").querySelector("button")?.focus(),
      CA());
  }
  function K() {
    ((Y = null),
      (byId("fruitOverlay").hidden = !0),
      tA(),
      (w = performance.now()),
      d.focus());
  }
  function O(T) {
    (K(), g.go(T), q(), _());
  }
  function N() {
    let T = g.save,
      AA = g.island,
      m = ISLANDS[AA].fruit,
      r = [];
    return (
      m
        ? r.push([
            T.collected.includes(m),
            fruitIcon(m),
            "Encontrar a fruta " + FRUITS[m].name,
          ])
        : AA === 0
          ? r.push([
              T.owned.length > 0,
              "boat",
              "A primeira fruta est\xE1 na Floresta Esmeralda",
            ])
          : r.push([
              T.chests.includes(AA),
              "bag",
              "Explorar " +
                ISLANDS[AA].subtitle.toLowerCase() +
                " e encontrar o ba\xFA",
            ]),
      r.push(
        [
          T.kills[AA] >= 3,
          "sword",
          "Vencer tr\xEAs sentinelas \xB7 " + T.kills[AA] + "/3",
        ],
        [T.bosses[AA], "crown", ISLANDS[AA].boss],
        [
          T.claimed[AA],
          "scroll",
          "Voltar at\xE9 Lia \xB7 " + (100 + AA * 55) + " integros",
        ],
      ),
      '<div class="fruit-quest-list">' +
        r
          .map(
            ([n, t, P]) =>
              `<div class="${n ? "done" : ""}">${iconMarkup(n ? "check" : t)}${P}</div>`,
          )
          .join("") +
        "</div>"
    );
  }
  function u() {
    let T = g.save,
      AA = g.island,
      m = "",
      r = "";
    if (
      (Y === "intro" &&
        ((m = "Fruit Box"),
        (r = `<div class="fruit-intro"><img src="${FRUIT_LOGO}" alt="Fruit Box"><p>Parta de Porto do Sol e navegue at\xE9 a segunda ilha para encontrar sua primeira fruta. Explore 20 ilhas com praias, montanhas, vulc\xF5es e geleiras, desvie das bombas no mar e procure as quatro frutas raras marcadas no mapa!</p><button class="fruit-primary" data-close>Jogar</button><p style="margin-top:12px">Use o controle ou WASD. Arraste para olhar. Os \xEDcones da espada, do poder e da estrela ativam seus ataques.</p></div>`)),
      Y === "quest")
    ) {
      m = ISLANDS[AA].name;
      let n =
        AA === 0 && !T.fruit
          ? "dock"
          : ISLANDS[AA].fruit && !T.collected.includes(ISLANDS[AA].fruit)
            ? "fruit"
            : T.bosses[AA]
              ? "guide"
              : "boss";
      r =
        N() +
        `<p>${TA().text}</p><div class="fruit-row"><button data-go="${n}" class="fruit-primary">${n === "dock" ? "Ir ao cais" : n === "fruit" ? "Buscar primeira fruta" : n === "guide" ? "Ir at\xE9 Lia" : "Ir at\xE9 a arena"}</button><button data-panel="map">${iconMarkup("map")} Mapa de tesouros</button></div>`;
    }
    if (
      (Y === "inventory" &&
        ((m = "Minhas frutas"),
        (r =
          '<p>As frutas encontradas ficam na sua cole\xE7\xE3o. Troque o poder equipado quando quiser.</p><div class="fruit-panel-grid">' +
          Object.entries(FRUITS)
            .map(
              ([n, t]) =>
                `<article class="fruit-card ${T.owned.includes(n) ? "" : "locked"}"><img src="${a[n]}" alt="Fruta ${t.name}"><h3>${t.name}</h3><p>${t.desc}</p><button data-equip="${n}" ${T.owned.includes(n) && T.fruit !== n ? "" : "disabled"}>${T.fruit === n ? "Equipada" : T.owned.includes(n) ? "Equipar" : RARE_FRUITS.some((P) => P.id === n) ? "Escondida \xB7 veja o mapa" : "Encontre na ilha"}</button></article>`,
            )
            .join("") +
          "</div>")),
      Y === "shop")
    ) {
      m = "Bazar dos navegantes";
      let n = g.near("shop");
      r =
        `<div class="fruit-note">Seu saldo: ${T.coins} integros${n ? "" : " \xB7 aproxime-se do vendedor para comprar."}</div><div class="fruit-shop-grid">` +
        Object.entries(UPGRADES)
          .map(
            ([t, P]) =>
              `<article class="fruit-card"><h3>${P.name} \xB7 ${T.upgrades[t]}/${P.max}</h3><p>${P.desc}</p><button data-buy="${t}" ${!n || T.upgrades[t] >= P.max || T.coins < g.price(t) ? "disabled" : ""}>${T.upgrades[t] >= P.max ? "Melhoria completa" : g.price(t) + " integros"}</button></article>`,
          )
          .join("") +
        `<article class="fruit-card"><h3>\xC1gua de coco \xB7 ${T.potions}/15</h3><p>Recupera 65 de vida. Use Coco ou H durante a aventura.</p><button data-buy="potion" ${!n || T.coins < 18 || T.potions >= 15 ? "disabled" : ""}>18 integros</button></article></div>` +
        (n
          ? ""
          : '<div class="fruit-row"><button data-go="shop" class="fruit-primary">Ir at\xE9 a loja</button></div>');
    }
    if (Y === "map") {
      m = "Ilhas & tesouros";
      let n = g.boating || g.near("dock", 6);
      r =
        `<canvas id="fruitTreasureMap" class="fruit-map-canvas" width="900" height="600" aria-label="Mapa das 20 ilhas, com sua posi\xE7\xE3o, bombas e quatro frutas raras"></canvas><p class="fruit-map-legend">${iconMarkup("boat")} cais \xB7 ${iconMarkup("bomb")} bombas \xB7 <b style="color:#f7abeb">\xD7</b> fruta escondida \xB7 \u25CF voc\xEA</p><div class="fruit-map-routes">` +
        ISLANDS.map(
          (t) =>
            `<button data-sail="${t.id}" ${!g.unlocked(t.id) || !n || (t.id === AA && !g.boating) ? "disabled" : ""} title="${t.name}">${iconMarkup(g.unlocked(t.id) ? "boat" : "lock")}${t.id + 1} \xB7 ${t.name.split(" ").at(-1)}</button>`,
        ).join("") +
        `</div><p class="fruit-note">${g.boating ? "As rotas autom\xE1ticas desviam das bombas. Feche o mapa para pilotar." : n ? "A Floresta Esmeralda j\xE1 est\xE1 liberada. Nas outras ilhas, ven\xE7a o guardi\xE3o e fale com Lia." : "Aproxime-se do cais para navegar. Marque uma fruta abaixo para seguir a b\xFAssola."}</p><div class="fruit-rare-list">` +
        RARE_FRUITS
          .map(
            (t) =>
              `<button data-mark="${t.id}" ${T.owned.includes(t.id) ? "disabled" : ""}>${iconMarkup(T.owned.includes(t.id) ? "check" : fruitIcon(t.id))}<span><b>${FRUITS[t.id].name} \xB7 ${T.owned.includes(t.id) ? "Encontrada" : t.rarity}</b><small>Ilha ${t.island + 1}. ${t.hint}${g.unlocked(t.island) ? "" : " Libere esta ilha para explorar."}</small></span></button>`,
          )
          .join("") +
        '</div><div class="fruit-row">' +
        (n
          ? g.boating
            ? '<button id="fruitDisembark" class="fruit-primary">Desembarcar no cais</button>'
            : '<button id="fruitBoard" class="fruit-primary">Pilotar livremente</button>'
          : '<button data-go="dock" class="fruit-primary">Ir ao cais</button>') +
        "</div>";
    }
    ((Y === "pause" || Y === "help") &&
      ((m = "Uma pausa na aventura"),
      (r =
        "<p>O jogo fica pausado enquanto este painel est\xE1 aberto.</p><ul><drawTreasureMap><b>Andar:</b> controle por toque, WASD ou setas. Toque no ch\xE3o para caminhar; arraste a tela para girar a c\xE2mera.</drawTreasureMap><drawTreasureMap><b>Combate:</b> Golpe/J de perto, Poder/Z \xE0 dist\xE2ncia e Habilidade/X. Segure os bot\xF5es para repetir quando recarregarem. A mira escolhe o inimigo mais pr\xF3ximo.</drawTreasureMap><drawTreasureMap><b>Esquiva:</b> Q ou Shift. Pular: Espa\xE7o. Saia dos c\xEDrculos vermelhos antes do ataque! Coco/H recupera vida.</drawTreasureMap><drawTreasureMap><b>Miss\xF5es:</b> a primeira fruta est\xE1 na segunda ilha. Ven\xE7a tr\xEAs sentinelas e o guardi\xE3o, depois volte a Lia para avan\xE7ar. Porto do Sol \xE9 uma miss\xE3o opcional, sem fruta. No cais, recupere vida e escolha a pr\xF3xima ilha.</drawTreasureMap><drawTreasureMap><b>Barco:</b> navegue pelo mapa ou pilote com o controle. Desvie das bombas: elas piscam antes de explodir. Para desembarcar, fique perto do cais de uma ilha liberada. Marque frutas raras no mapa para seguir as pistas.</drawTreasureMap></ul><p>" +
        (l
          ? "O progresso fica salvo neste navegador. Ao voltar, voc\xEA recome\xE7a no cais com sua cole\xE7\xE3o e conquistas."
          : "Este navegador n\xE3o permitiu salvar; o progresso dura nesta sess\xE3o.") +
        ' Os integros s\xE3o moedas do jogo.</p><div class="fruit-row"><button data-close class="fruit-primary">Continuar</button><button id="fruitExit">Outros jogos</button><button id="fruitReset">Recome\xE7ar Fruit Box</button></div>')),
      Y === "reset" &&
        ((m = "Recome\xE7ar Fruit Box?"),
        (r =
          '<p>Isso apaga somente as frutas, moedas e conquistas desta aventura. Os outros jogos s\xE3o mantidos.</p><div class="fruit-row"><button data-close class="fruit-primary">Manter progresso</button><button id="fruitConfirmReset">Apagar e recome\xE7ar</button></div>')),
      Y === "victory" &&
        ((m = "Voc\xEA venceu o Guardi\xE3o dos Elementos!"),
        (r = `<div class="fruit-intro"><img src="${a.aurora}" alt="Fruta Aurora"><p>Voc\xEA concluiu a aventura pelas 20 ilhas! Continue explorando praias, montanhas, vulc\xF5es e geleiras, e complete sua cole\xE7\xE3o de frutas raras.</p><button data-close class="fruit-primary">Continuar explorando</button></div>`)),
      (byId("fruitDialogTitle").textContent = m),
      (byId("fruitDialogBody").innerHTML = r),
      Y === "map" && drawTreasureMap(byId("fruitTreasureMap"), g));
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-panel]"))
      n.onclick = () => j(n.dataset.panel);
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-mark]"))
      n.onclick = () => {
        (g.markTreasure(n.dataset.mark), K(), q(), _());
      };
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-close]"))
      n.onclick = K;
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-go]"))
      n.onclick = () => O(n.dataset.go);
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-equip]"))
      n.onclick = () => {
        (g.equip(n.dataset.equip), q(), u(), _());
      };
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-buy]"))
      n.onclick = () => {
        (g.buy(n.dataset.buy), q(), u(), _());
      };
    for (let n of byId("fruitDialogBody").querySelectorAll("[data-sail]"))
      n.onclick = () => {
        g.sail(+n.dataset.sail) && (K(), q(), _());
      };
    (byId("fruitBoard") &&
      (byId("fruitBoard").onclick = () => {
        g.board() && (K(), q(), _());
      }),
      byId("fruitDisembark") &&
        (byId("fruitDisembark").onclick = () => {
          (g.disembark() && K(), q(), _());
        }),
      byId("fruitExit") &&
        (byId("fruitExit").onclick = () => {
          (H(), C());
        }),
      byId("fruitReset") && (byId("fruitReset").onclick = () => j("reset")),
      byId("fruitConfirmReset") &&
        (byId("fruitConfirmReset").onclick = () => {
          ((g = new FruitAdventure()),
            (s = Math.PI + 0.12),
            wA.set(g.player.x, 2, g.player.z),
            CA(),
            j("intro"));
        }));
  }
  function F() {
    ((B = !0),
      (x.hidden = !1),
      document.body.classList.add("fruit-playing"),
      E ? aA() : ZA(),
      _(),
      window.scrollTo(0, 0),
      d.focus(),
      A || ((A = { version: 1 }), j("intro")),
      (w = performance.now()));
  }
  function H() {
    B &&
      (CA(),
      (B = !1),
      (x.hidden = !0),
      document.body.classList.remove("fruit-playing"),
      (Y = null),
      (byId("fruitOverlay").hidden = !0),
      tA());
  }
  ((byId("fruitBack").onclick = () => {
    (H(), C());
  }),
    (byId("fruitClose").onclick = K),
    (byId("fruitMap").onclick = () => j("map")),
    (byId("fruitInventory").onclick = () => j("inventory")),
    (byId("fruitShop").onclick = () => j("shop")),
    (byId("fruitQuest").onclick = () => j("quest")),
    (byId("fruitPause").onclick = () => j("pause")),
    (byId("fruitDock").onclick = () => (g.boating ? j("map") : O("dock"))),
    (byId("fruitCenter").onclick = () => {
      ((s = g.player.yaw + Math.PI), (e = 0.58), (S = 21), d.focus());
    }),
    (byId("fruitInteract").onclick = () => {
      (g.interact(), q(), _());
    }),
    (byId("fruitPotion").onclick = () => {
      (g.potion(), q(), _());
    }),
    (byId("fruitJump").onclick = e => {if(e.detail===0&&B&&!Y)g.jump();}),
    (byId("fruitDash").onclick = e => {if(e.detail===0&&B&&!Y)g.dash(DA());}),
    (byId("fruitFullscreen").onclick = async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else {
          await x.requestFullscreen();
          try {
            await screen.orientation?.lock("landscape");
          } catch {}
        }
      } catch {
        oA("Gire seu celular para jogar em paisagem.");
      }
    }));
  for(const [id,action]of[['fruitJump',()=>g.jump()],['fruitDash',()=>g.dash(DA())]])byId(id).addEventListener('pointerdown',event=>{if(!B||Y||byId(id).disabled)return;event.preventDefault();byId(id).setPointerCapture(event.pointerId);action();});
  for (let [T, AA] of [
    ["fruitSlash", "slash"],
    ["fruitPower", "power"],
    ["fruitBurst", "burst"],
  ]) {
    let m = byId(T);
    m.addEventListener("pointerdown", (r) => {
      Y ||
        m.disabled ||
        (r.preventDefault(),
        m.setPointerCapture(r.pointerId),
        c.add(AA),
        g.attack(AA),
        q());
    });
    for (let r of ["pointerup", "pointercancel", "lostpointercapture"])
      m.addEventListener(r, () => c.delete(AA));
    m.addEventListener("click", (r) => {
      r.detail === 0 && (g.attack(AA), q());
    });
  }
  (d.addEventListener("pointerdown", (T) => {
    Y ||
      ((R = {
        id: T.pointerId,
        x: T.clientX,
        y: T.clientY,
        yaw: s,
        pitch: e,
        moved: !1,
      }),
      d.setPointerCapture(T.pointerId));
  }),
    d.addEventListener("pointermove", (T) => {
      if (!R || R.id !== T.pointerId) return;
      let AA = T.clientX - R.x,
        m = T.clientY - R.y;
      (Math.abs(AA) + Math.abs(m) > 7 && (R.moved = !0),
        R.moved &&
          ((s = R.yaw - AA * 0.007),
          (e = Math.max(0.32, Math.min(1.15, R.pitch + m * 0.005)))));
    }),
    d.addEventListener("pointercancel", () => (R = null)),
    d.addEventListener("pointerup", (T) => {
      if (!R) return;
      let AA = R.moved;
      if (((R = null), AA || Y)) return;
      let m = d.getBoundingClientRect(),
        r = new bA(
          ((T.clientX - m.left) / m.width) * 2 - 1,
          1 - ((T.clientY - m.top) / m.height) * 2,
        );
      IA.setFromCamera(r, Q);
      let n = (U) => {
          for (let f = U; f; f = f.parent) if (!f.visible) return !1;
          return !0;
        },
        t = IA.intersectObjects(M.pickables.filter(n), !0);
      if (t.length) {
        let U = t[0].object;
        for (; U && !U.userData.station; ) U = U.parent;
        if (U) {
          U.userData.island !== g.island || g.boating
            ? j("map")
            : O(U.userData.station);
          return;
        }
      }
      let P = IA.intersectObjects(M.terrainMeshes.filter(n), !1)[0],
        hA = P ? P.point : new $();
      if (P || IA.ray.intersectPlane(y, hA)) {
        if (g.boating) {
          oA("Use o controle para pilotar ou escolha uma ilha no mapa.");
          return;
        }
        g.walkTo(hA.x, hA.z);
      }
      d.focus();
    }),
    d.addEventListener(
      "wheel",
      (T) => {
        (T.preventDefault(),
          (S = Math.max(13, Math.min(38, S + Math.sign(T.deltaY) * 2))));
      },
      { passive: !1 },
    ));
  let v = byId("fruitJoystick");
  function QA(T) {
    let AA = v.getBoundingClientRect(),
      m = AA.width * 0.32,
      r = T.clientX - AA.left - AA.width / 2,
      n = T.clientY - AA.top - AA.height / 2,
      t = Math.hypot(r, n),
      P = t > m ? m / t : 1;
    ((o = { x: (r * P) / m, z: (n * P) / m }),
      (byId("fruitStick").style.transform =
        `translate(${r * P}px,${n * P}px)`));
  }
  (v.addEventListener("pointerdown", (T) => {
    Y ||
      (T.preventDefault(),
      (k = T.pointerId),
      v.setPointerCapture(T.pointerId),
      QA(T));
  }),
    v.addEventListener("pointermove", (T) => {
      T.pointerId === k && QA(T);
    }));
  for (let T of ["pointerup", "pointercancel", "lostpointercapture"])
    v.addEventListener(T, (AA) => {
      k === AA.pointerId &&
        ((k = null),
        (o = { x: 0, z: 0 }),
        (byId("fruitStick").style.transform = "translate(0px,0px)"));
    });
  return (
    document.addEventListener("keydown", (T) => {
      if (!B) return;
      let AA = T.key.toLowerCase();
      if (AA === "escape") {
        (T.preventDefault(), Y ? K() : j("pause"));
        return;
      }
      if (Y) {
        if (AA === "tab") {
          let m = [
              ...byId("fruitOverlay").querySelectorAll("button:not(:disabled)"),
            ],
            r = m[0],
            n = m.at(-1);
          T.shiftKey && document.activeElement === r
            ? (T.preventDefault(), n.focus())
            : !T.shiftKey &&
              document.activeElement === n &&
              (T.preventDefault(), r.focus());
        }
        return;
      }
      ([
        "w",
        "a",
        "s",
        "d",
        "arrowup",
        "arrowdown",
        "arrowleft",
        "arrowright",
      ].includes(AA) && (T.preventDefault(), D.add(AA)),
        ["j", "z", "x"].includes(AA) &&
          (T.preventDefault(),
          c.add({ j: "slash", z: "power", x: "burst" }[AA])),
        T.repeat ||
          (AA === "e" && (T.preventDefault(), g.interact(), q()),
          AA === " " && (T.preventDefault(), g.jump()),
          (AA === "q" || AA === "shift") &&
            (T.preventDefault(), g.dash(DA())),
          AA === "h" && (g.potion(), q()),
          AA === "m" && j("map"),
          AA === "c" && byId("fruitCenter").click()));
    }),
    document.addEventListener("keyup", (T) => {
      let AA = T.key.toLowerCase();
      (D.delete(AA),
        ["j", "z", "x"].includes(AA) &&
          c.delete({ j: "slash", z: "power", x: "burst" }[AA]));
    }),
    window.addEventListener("blur", tA),
    window.addEventListener("pagehide", () => {
      B && CA();
    }),
    document.addEventListener("visibilitychange", () => {
      B && document.hidden && j("pause");
    }),
    (window.BoxFruitRuntime={active:()=>B,playing:()=>B&&!Y,pause:()=>{if(B&&!Y)j('pause');},persist:CA}),
    (window.IntegroFruit = {
      persist:CA,
      getState: () => ({
        ...g.snapshot(),
        active: B,
        panel: Y,
        webgl: !!E,
        camera: { yaw: i, pitch: e, zoom: S },
        thumbnailCount: Object.keys(a).length,islandCount:ISLANDS.length,rigged:!!M?.avatar.actor,
      }),
      getProjectedStations: () =>
        Q
          ? [
              "guide",
              "shop",
              "dock",
              "chest",
              "boss",
              ...(ISLANDS[g.island].fruit ? ["fruit"] : []),
              ...RARE_FRUITS
                .filter((T) => T.island === g.island)
                .map((T) => "rare:" + T.id),
            ].map((T) => {
              let AA = stationPosition(g.island, T),
                m = new $(AA.x, 2, AA.z).project(Q),
                r = d.getBoundingClientRect();
              return {
                id: T,
                x: r.left + ((m.x + 1) * r.width) / 2,
                y: r.top + ((1 - m.y) * r.height) / 2,
              };
            })
          : [],
    }),
    {
      show: F,
      hide: H,
      help: () => j("help"),
      get active() {
        return B;
      },
    }
  );
}

export {mountFruitGame};
