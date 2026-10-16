import * as THREE from 'three';
import {OctahedronGeometry} from 'three';
import {ArtResources} from '../rush-src/art.js';
import {FruitExplorer,FruitGuardian} from './fruit-actors.js';
import {addIslandLandmarks,animateLandmarks} from './fruit-landmarks.js';
import {createIntGem3D} from '../intgem-3d.mjs';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {Vector3 as $,IcosahedronGeometry as AM,Fog as BC,SpriteMaterial as CC,Float32BufferAttribute as Cg,CylinderGeometry as EB,ConeGeometry as HE,DodecahedronGeometry as HQ,TorusGeometry as IB,Color as KA,WebGLRenderer as MB,Raycaster as PB,DirectionalLight as Pg,Group as Sg,BoxGeometry as Tg,Mesh as VA,Scene as Vg,PlaneGeometry as Xg,Vector2 as bA,ShaderMaterial as bB,MeshToonMaterial as cg,CircleGeometry as dQ,SphereGeometry as iB,Object3D as lg,Plane as mB,CanvasTexture as nB,PerspectiveCamera as ng,Sprite as oC,InstancedMesh as pI,HemisphereLight as qg,MeshBasicMaterial as rg,BufferGeometry as zg,SRGBColorSpace as Eg,NeutralToneMapping as RB,PCFSoftShadowMap as tC,DoubleSide as yg,LinearFilter as Og} from 'three';
import {clamp,islandRadius,insideIsland,terrainHeight,groundHeight,islandOutline,ISLANDS,FRUITS,DOCK_OFFSET,RARE_FRUITS,rarePosition,SEA_MINES,UPGRADES,distance,bound,safeNumber,freshSave,cleanSave,stationPosition,FruitAdventure,SEA_BOUNDS} from "./fruit-rules.mjs";
import {iconCanvas} from "./fruit-icons.js";
function islandTerrain(C,gradientMap) {
  let B = [],
    E = [],
    I = [],
    Q = new KA(C.ground),
    M = new KA(
      ["glacier", "snow"].includes(C.biome)
        ? 13233648
        : C.biome === "basalt"
          ? 10924463
          : 15848608,
    ),
    Y = new KA(
      ["volcano", "final"].includes(C.biome)
        ? 7366261
        : C.biome === "canyon"
          ? 10903374
          : 9017230,
    ),
    w = new KA(15661823);
  for (let D = 0; D <= 20; D++)
    for (let c = 0; c <= 80; c++) {
      let o = (c / 80) * Math.PI * 2,
        k = D / 20,
        R = islandRadius(C, o) * k,
        a = Math.sin(o) * R,
        l = Math.cos(o) * R,
        L = terrainHeight(C, a, l);
      B.push(a, L, l);
      let z = Q.clone();
      (k > 0.82
        ? z.lerp(M, Math.min(1, (k - 0.82) / 0.12))
        : L > 2.5 &&
          [
            "mountain",
            "basalt",
            "storm",
            "volcano",
            "canyon",
            "final",
          ].includes(C.biome) &&
          z.lerp(Y, Math.min(0.9, (L - 2.5) / 7)),
        L > 8 &&
          ["mountain", "snow", "glacier", "final"].includes(C.biome) &&
          z.lerp(w, Math.min(1, (L - 8) / 3)),
        z.multiplyScalar(0.96 + Math.sin(a * 0.4 + l * 0.7 + C.id) * 0.04),
        E.push(z.r, z.g, z.b));
    }
  for (let D = 0; D < 20; D++)
    for (let c = 0; c < 80; c++) {
      let o = D * 81 + c,
        k = o + 80 + 1;
      I.push(o, k, o + 1, k, k + 1, o + 1);
    }
  let G = new zg();
  (G.setAttribute("position", new Cg(B, 3)),
    G.setAttribute("color", new Cg(E, 3)),
    G.setIndex(I),
    G.computeVertexNormals());
  let h = new VA(
    G,
    new cg({ gradientMap, vertexColors: !0, side: yg }),
  );
  h.receiveShadow = !0;
  let J = islandOutline(C, 80),
    s = [],
    e = [];
  for (let D = 0; D <= 80; D++) {
    let c = J[D % 80],
      o = Math.atan2(c.x, c.z);
    if (
      (s.push(
        c.x,
        0.14,
        c.z,
        Math.sin(o) * (islandRadius(C, o) + 2),
        -3.5,
        Math.cos(o) * (islandRadius(C, o) + 2),
      ),
      D < 80)
    ) {
      let k = D * 2;
      e.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  let S = new zg();
  (S.setAttribute("position", new Cg(s, 3)),
    S.setIndex(e),
    S.computeVertexNormals());
  let i = new VA(
    S,
    new cg({
      gradientMap,
      color: C.biome === "basalt" ? 6056560 : 12164218,
      side: yg,
    }),
  );
  return ((i.receiveShadow = !0), { surface: h, side: i });
}
function createFruitWorld(C) {
  const art=new ArtResources(),guides=[],landmarkMotion=[];
  let A = new Sg();
  C.add(A);
  let g = new Map(),
    B = new Map(),
    E = [],
    I = [],
    Q = [],
    M = [],
    Y = [],
    w = [],
    G = [],
    h = [],
    J = [],
    s = [],
    e = [],
    S = [],
    i = [],
    D = [],
    c = (j) => (
      g.has(j) ||
        g.set(j, new cg({color:j,gradientMap:art.toonRamp})),
      g.get(j)
    ),
    o = (j, K) => (B.has(j) || B.set(j, K()), B.get(j)),
    k = (j, K = 0, O = 0, N = 0) => {
      let u = new Sg();
      return (u.position.set(K, O, N), j.add(u), u);
    },
    R = (j, K, O, N = 0, u = 0, F = 0) => {
      let H = new VA(K, c(O));
      return (
        H.position.set(N, u, F),
        j.add(H),
        (H.castShadow = !0),
        (H.receiveShadow = !0),
        H
      );
    },
    a = (j, K, O, N, u, F = 0, H = 0, v = 0) =>
      R(
        j,
        o(`b${K},${O},${N}`, () => new RoundedBoxGeometry(K,O,N,1,Math.min(K,O,N)*.12)),
        u,
        F,
        H,
        v,
      ),
    l = (j, K, O, N = 0, u = 0, F = 0) =>
      R(
        j,
        o("s" + K, () => new AM(K, 2)),
        O,
        N,
        u,
        F,
      ),
    L = (j, K, O, N, u, F = 0, H = 0, v = 0, QA = 10) =>
      R(
        j,
        o(`c${K},${O},${N},${QA}`, () => new EB(K, O, N, QA)),
        u,
        F,
        H,
        v,
      ),
    z = (j, K, O, N, u = 0, F = 0, H = 0) => {
      let v = R(
        j,
        o(`t${K},${O}`, () => new IB(K, O, 5, 36)),
        N,
        u,
        F,
        H,
      );
      return ((v.rotation.x = Math.PI / 2), v);
    },
    x = new rg({
      color: 1193554,
      transparent: !0,
      opacity: 0.22,
      depthWrite: !1,
    }),
    d = (j, K) => {
      let O = new VA(
        o("disk" + K, () => new dQ(K, 20)),
        x,
      );
      return (
        (O.rotation.x = -Math.PI / 2),
        (O.position.y = 0.03),
        j.add(O),
        O
      );
    };
  function BA(j, K, O, N, u, F = 5) {
    let H = K.includes("LIA")
        ? "scroll"
        : K.includes("LOJA")
          ? "shop"
          : K.includes("CAIS")
            ? "boat"
            : K === "BA\xDA"
              ? "bag"
              : "compass",
      v = new nB(iconCanvas(H));
    ((v.magFilter = v.minFilter = Og), (v.colorSpace = Eg));
    let QA = new oC(new CC({ map: v, depthTest: !0, transparent: !0 }));
    return (
      QA.position.set(O, N, u),
      QA.scale.set(1.8, 1.8, 1),
      j.add(QA),
      I.push(QA),
      QA
    );
  }
  let wA = (j, K, O) => (
      (j.userData = { station: K, island: O }),
      E.push(j),
      j
    ),
    IA = new VA(
      new Xg(1050, 1200, 90, 90),
      new bB({
        uniforms: {
          time: { value: 0 },
          centers: { value: ISLANDS.map((j) => new bA(j.x, j.z)) },
        },
        vertexShader:
          "uniform float time; varying vec3 worldPos; void main(){vec3 p=position;p.z+=sin(p.x*.10+time)*.09+sin(p.y*.18+time*.8)*.07;worldPos=(modelMatrix*vec4(p,1.0)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(worldPos,1.0);}",
        fragmentShader:
          "uniform float time;uniform vec2 centers[20];varying vec3 worldPos;void main(){vec2 p=worldPos.xz;float nearest=10000.;vec2 delta=vec2(0.);float seed=0.;for(int i=0;i<20;i++){vec2 v=p-centers[i];float d=length(v);if(d<nearest){nearest=d;delta=v;seed=float(i)*.83;}}float a=atan(delta.x,delta.y);float port=atan(sin(a-3.14159265),cos(a-3.14159265));float raw=clamp(47.+7.*sin(2.*a+seed)+5.*cos(3.*a-seed)+3.*sin(5.*a+seed*.7),40.,62.);float blend=exp(-port*port/.065);float radius=mix(raw,43.,blend);float shore=nearest-radius;float ripple=sin(p.x*.72+time*1.8+sin(p.y*.18))*cos(p.y*.65-time*1.2);float fine=sin(p.x*2.+time)*cos(p.y*2.3-time);vec3 deep=vec3(.035,.29,.52),shallow=vec3(.10,.79,.77);vec3 col=mix(shallow,deep,smoothstep(0.,30.,shore));col+=pow(max(0.,ripple),18.)*.22+pow(max(0.,fine*ripple),12.)*.14;float foam=(1.-smoothstep(.3,1.4,abs(shore-2.-sin(time+p.x*.2)*.6)))*.72;col=mix(col,vec3(.80,.98,.95),foam);float horizon=smoothstep(180.,450.,distance(cameraPosition,worldPos));col=mix(col,vec3(.51,.77,.90),horizon*.8);gl_FragColor=vec4(col,1.);}",
      }),
    );
  ((IA.rotation.x = -Math.PI / 2),
    IA.position.set(280, -0.15, 270),
    (IA.receiveShadow = !1),
    A.add(IA));
  function y(j, K, O, N = 1) {
    let u = k(j, K, 0, O);
    u.scale.setScalar(N);
    let F = L(u, 0.25, 0.48, 5, 9791556, 0, 2.4, 0, 7);
    F.rotation.z = 0.12;
    for (let H = 0; H < 6; H++) {
      let v = (H * Math.PI) / 3;
      (a(
        u,
        3.8,
        0.18,
        1.25,
        2075762,
        Math.sin(v) * 1.4,
        4.95,
        Math.cos(v) * 1.4,
      ).rotation.set(0.18, v, 0.15),
        l(u, 0.28, 9593656, Math.sin(v) * 0.42, 4.5, Math.cos(v) * 0.42));
    }
  }
  function V(j, K, O, N, u) {
    let F = k(j, K, 0, O);
    return (
      L(F, 0, 0.9 * N, 2.9 * N, u, 0, 1.45 * N, 0, 5),
      (L(
        F,
        0.5 * N,
        0.5 * N,
        1.7 * N,
        u,
        0.85 * N,
        0.6 * N,
        0.5,
        5,
      ).rotation.z = -0.35),
      F
    );
  }
  function JA(j, K = A) {
    let O = FRUITS[j],
      N = k(K),
      u = k(N);
    if (O.shape === "grape")
      for (let v = 0; v < 7; v++) {
        let QA = v * 2.4;
        l(
          u,
          0.36,
          O.color,
          Math.cos(QA) * 0.32,
          0.55 + v * 0.08,
          Math.sin(QA) * 0.3,
        );
      }
    else if (O.shape === "star") {
      let v = l(u, 0.7, O.color, 0, 0.7, 0);
      v.scale.y = 0.75;
      for (let QA = 0; QA < 5; QA++) {
        let T = (QA * Math.PI * 2) / 5,
          AA = L(
            u,
            0,
            0.2,
            0.75,
            16772507,
            Math.sin(T) * 0.6,
            0.7 + Math.cos(T) * 0.5,
            0,
            5,
          );
        AA.rotation.z = -T;
      }
    } else {
      let v = l(u, 0.66, O.color, 0, 0.68, 0);
      if (
        (O.shape === "pear" &&
          (v.scale.set(0.85, 1.2, 0.85), l(u, 0.36, O.color, 0, 1.22, 0)),
        O.shape === "berry")
      )
        for (let QA = 0; QA < 5; QA++) {
          let T = (QA * Math.PI * 2) / 5,
            AA = L(
              u,
              0,
              0.18,
              0.46,
              16762203,
              Math.sin(T) * 0.4,
              0.65,
              Math.cos(T) * 0.4,
              5,
            );
          AA.rotation.z = 0.4;
        }
      if (O.shape === "spiral")
        for (let QA = 0; QA < 3; QA++) {
          let T = z(
            u,
            0.66 - QA * 0.13,
            0.045,
            6346167,
            0,
            0.5 + QA * 0.25,
            0,
          );
          T.rotation.z = 0.2;
        }
    }
    (L(u, 0.06, 0.08, 0.45, 5990481, 0.03, 1.42, 0, 6),
      l(u, 0.3, 5884024, 0.3, 1.47, 0).scale.set(1.5, 0.2, 0.65));
    let H = l(u, 0.1, 16777215, -0.22, 0.95, 0.52);
    return N;
  }
  function CA(parent,color){const actor=new FruitGuardian(art,parent,{color,npc:true});actor.g.scale.setScalar(.9);guides.push(actor);return {g:actor.g,actor};}
  for (let j of ISLANDS) {
    let K = k(A, j.x, 1, j.z),
      O = k(K),
      N = islandTerrain(j,art.toonRamp);
    (K.add(N.surface, N.side), i.push(N.surface));
    let u = BA(K, j.name.toUpperCase(), 0, 9, 7, 15, "#ffffff", "#10384bdb");
    Y.push({ g: K, decor: O, sign: u });
    for (let X = 0; X < 16; X++) {
      let Z = X * 2.399,
        gA = islandRadius(j, Z) - 7,
        MA = Math.sin(Z) * gA,
        EA = Math.cos(Z) * gA;
      if (!(Math.abs(MA) < 9 && EA < -26))
        if (["beach", "coral", "desert"].includes(j.biome))
          y(O, MA, EA, 0.8 + (X % 3) * 0.16);
        else if (["forest", "jungle"].includes(j.biome)) {
          L(O, 0.5, 0.8, 5.5, 8546631, MA, 2.6, EA, 8);
          let GA = l(
            O,
            3.2,
            j.biome === "jungle" ? 1678445 : 3254129,
            MA,
            6,
            EA,
          );
          ((GA.scale.y = j.biome === "jungle" ? 1.6 : 1.3),
            l(O, 2.4, 7788386, MA + 1.2, 7.5, EA));
        } else
          ["glacier", "snow"].includes(j.biome)
            ? V(O, MA, EA, 1.2 + (X % 3) * 0.6, X % 2 ? 7655140 : 12318207)
            : ["basalt", "canyon", "mountain", "storm"].includes(j.biome)
              ? (l(
                  O,
                  2.5 + (X % 3),
                  j.biome === "canyon"
                    ? 11363153
                    : j.biome === "storm"
                      ? 6910340
                      : 7900045,
                  MA,
                  1.3,
                  EA,
                ).scale.set(0.8, 1.1 + (X % 3) * 0.5, 0.75),
                j.biome === "mountain" &&
                  X % 3 === 0 &&
                  L(O, 0, 1.5, 3, 15003633, MA, 4, EA, 6))
              : ["volcano", "final"].includes(j.biome)
                ? (L(O, 0.7, 2.5, 4.5, 5785957, MA, 2.25, EA, 7),
                  V(
                    O,
                    MA + 0.5,
                    EA,
                    1,
                    j.biome === "final" && MA > 0 ? 9561855 : 16745286,
                  ))
                : (V(
                    O,
                    MA,
                    EA,
                    1.3 + (X % 2) * 0.3,
                    X % 2 ? 11769844 : 7008486,
                  ),
                  z(O, 1.3, 0.08, 16766307, MA, 3.7, EA));
    }
    if (["volcano", "final"].includes(j.biome)) {
      let X = k(O, -19, 0, 11);
      (L(X, 2.7, 2.7, 0.12, 16747824, 0, 0.2, 0, 20),
        z(X, 3, 0.2, 16761450, 0, 0.24, 0));
      let Z = k(X, 0, 2, 0);
      for (let gA = 0; gA < 4; gA++) {
        let MA = l(Z, 1.2 + gA * 0.3, 12037814, gA * 0.3, gA * 1.6, 0);
        ((MA.material = new cg({
          color: 12037814,
          transparent: !0,
          opacity: 0.22,
          depthWrite: !1,
        })),
          (MA.castShadow = !1));
      }
      D.push({ g: Z, base: 2, type: "smoke" });
    }
    if (j.biome === "ruins") {
      for (let X of [-8, 8])
        (L(O, 0.55, 0.75, 6.5, 16046488, X, 3.2, 19, 8),
          l(O, 0.65, 9500658, X, 6.8, 19));
      a(O, 17, 0.6, 1.6, 10785743, 0, 6.5, 19);
    }
    let F = stationPosition(j.id, "guide"),
      H = wA(
        k(K, F.x - j.x, terrainHeight(j, F.x - j.x, F.z - j.z), F.z - j.z),
        "guide",
        j.id,
      );
    (CA(H, 15693907), BA(H, "LIA \xB7 MISS\xC3O", 0, 3.6, 0, 5.2));
    let v = l(H, 0.22, 16766819, 0, 4.35, 0),
      QA = stationPosition(j.id, "shop"),
      T = wA(
        k(K, QA.x - j.x, terrainHeight(j, QA.x - j.x, QA.z - j.z), QA.z - j.z),
        "shop",
        j.id,
      );
    a(T, 4.6, 1.1, 2.4, 8868671, 0, 0.55, 0);
    for (let X of [-2, 2]) L(T, 0.08, 0.08, 3.6, 15058049, X, 1.8, 0, 6);
    for (let X = 0; X < 6; X++)
      a(T, 0.8, 0.14, 3.6, X % 2 ? 5491402 : 16763758, -2 + X * 0.8, 3.65, 0);
    BA(T, "LOJA \xB7 MELHORIAS", 0, 4.65, 0, 6);
    for (let X of [-1, 0, 1])
      l(T, 0.26, [9300393, 16500334, 12820470][X + 1], X, 1.4, 0);
    let AA = wA(k(K, 0, -0.25, -43), "dock", j.id);
    a(AA, 5, 0.3, 14, 11962962, 0, -0.15, 0);
    for (let X = 0; X < 9; X++)
      a(AA, 5, 0.045, 0.13, 8411712, 0, 0.03, -4 + X);
    for (let X of [-2.3, 2.3])
      for (let Z of [-3.8, 2.8])
        L(AA, 0.18, 0.23, 2.7, 10252870, X, -0.25, Z);
    if ((BA(AA, "CAIS \xB7 BARCO", 4.5, 3, -1, 4.5), j.fruit)) {
      let X = stationPosition(j.id, "fruit"),
        Z = wA(
          k(K, X.x - j.x, terrainHeight(j, X.x - j.x, X.z - j.z), X.z - j.z),
          "fruit",
          j.id,
        );
      (L(Z, 1.25, 1.6, 0.5, 6850707, 0, 0.25, 0, 10),
        z(Z, 1.1, 0.07, j.color, 0, 0.55, 0));
      let gA = JA(j.fruit, Z);
      ((gA.position.y = 1.05),
        Q.push({ ped: Z, fr: gA, island: j.id, id: j.fruit }));
    }
    let m = stationPosition(j.id, "chest"),
      r = wA(
        k(K, m.x - j.x, terrainHeight(j, m.x - j.x, m.z - j.z), m.z - j.z),
        "chest",
        j.id,
      );
    a(r, 2, 1, 1.5, 9589813, 0, 0.65, 0);
    let n = k(r, 0, 1.13, -0.73);
    a(n, 2.1, 0.55, 1.5, 12350784, 0, 0.17, 0.73);
    for (let X of [-0.75, 0.75])
      (a(r, 0.14, 1.1, 1.54, 16435284, X, 0.65, 0),
        a(n, 0.14, 0.58, 1.53, 16435284, X, 0.18, 0.73));
    (a(r, 0.28, 0.35, 0.13, 16768114, 0, 1, 0.82),
      M.push({ chest: r, lid: n }),
      BA(r, "BA\xDA", 0, 2.5, 0, 3));
    let t = j.id === 2 ? 15203327 : j.id === 3 ? 12686976 : 15323032;
    for (let X = 0; X < 23; X++) {
      let Z = -35 + X * 2.7,
        gA = Math.sin(X * 0.48) * 2.2,
        MA = L(O, 1.4, 1.6, 0.09, t, gA, 0.31, Z, 7);
      MA.scale.z = 1.25;
    }
    let P = o("detail-rock", () => new HQ(1, 0)),
      hA = c(j.id === 2 ? 8826556 : j.id === 3 ? 6376544 : 10727323),
      U = new pI(P, hA, 50),
      f = new lg();
    for (let X = 0; X < 50; X++) {
      let Z = X * 2.399,
        gA = islandRadius(j, Z) - 3 - Math.abs(Math.sin(X * 7.2)) * 5;
      (f.position.set(
        Math.sin(Z) * gA,
        0.2 + terrainHeight(j, Math.sin(Z) * gA, Math.cos(Z) * gA),
        Math.cos(Z) * gA,
      ),
        f.scale.set(
          0.35 + (X % 4) * 0.35,
          0.3 + (X % 3) * 0.4,
          0.5 + (X % 5) * 0.25,
        ),
        f.rotation.set(X * 0.5, X, 0),
        f.updateMatrix(),
        U.setMatrixAt(X, f.matrix));
    }
    if (
      ((U.receiveShadow = !0),
      (U.castShadow = !0),
      O.add(U),
      !["glacier", "snow", "volcano", "desert", "basalt", "canyon"].includes(
        j.biome,
      ))
    ) {
      let X = new pI(
        o("grass", () => new HE(0.16, 0.6, 3)),
        c(j.id === 4 ? 10407603 : 5417325),
        180,
      );
      for (let Z = 0; Z < 180; Z++) {
        let gA = Z * 2.4,
          MA = 17 + (Z % 17);
        (f.position.set(
          Math.sin(gA) * MA,
          0.48 + terrainHeight(j, Math.sin(gA) * MA, Math.cos(gA) * MA),
          Math.cos(gA) * MA,
        ),
          f.scale.set(1, 1 + (Z % 4) * 0.3, 1),
          f.rotation.set(0, Z, 0),
          f.updateMatrix(),
          X.setMatrixAt(Z, f.matrix));
      }
      O.add(X);
    }
    if (j.id === 0)
      for (let X of [-24, 24]) {
        let Z = k(O, X, 0, -18);
        a(Z, 5, 3.2, 4.5, 14396009, 0, 1.6, 0);
        let gA = L(Z, 0, 4.6, 2.7, 13008706, 0, 4.5, 0, 4);
        ((gA.rotation.y = Math.PI / 4),
          a(Z, 1.1, 2.3, 0.15, 6638914, 0, 1.3, -2.3),
          a(Z, 1, 0.9, 0.16, 10807517, 1.5, 2, -2.3));
      }
    if (["forest", "jungle"].includes(j.biome)) {
      let X = k(O, -28, 0, 17);
      for (let MA of [-4, 4]) {
        let EA = l(X, 3.8, 7115907, MA, 3.1, 0);
        EA.scale.y = 1.5;
      }
      a(X, 9, 1.7, 3, 7638650, 0, 7.1, 0);
      let Z = a(X, 5.3, 6.5, 0.25, 7924204, 0, 3.8, -1.8);
      ((Z.material = new cg({
        color: 10156272,
        transparent: !0,
        opacity: 0.72,
        emissive: 2394783,
        emissiveIntensity: 0.3,
        })),
        e.push(Z));
      let gA = L(X, 5, 5, 0.04, 6082003, 0, 0.29, -4, 32);
      gA.scale.z = 0.7;
    }
    if (j.id === 2) {
      let X = k(O, 27, 0, 22);
      for (let Z of [-3.5, 3.5]) V(X, Z, 0, 2.8, 8441311);
      (a(X, 9, 2, 5, 13693169, 0, 7, 0), a(X, 6, 5, 0.7, 6852265, 0, 2.5, 2));
    }
    if (j.id === 3) {
      let X = k(O, -29, 0, 16);
      for (let Z of [-3.5, 3.5]) L(X, 2, 2.6, 6, 5589603, Z, 3, 0, 7);
      a(X, 10, 1.8, 4, 6247021, 0, 6.4, 0);
      for (let Z = 0; Z < 11; Z++) {
        let gA = L(
          O,
          1,
          1,
          0.05,
          16751945,
          12 + Math.sin(Z * 0.9) * 4,
          0.28,
          14 + Z * 1.7,
          8,
        );
        gA.scale.z = 1.9;
      }
    }
    if (j.id === 4) {
      let X = k(O, 26, 0, 25);
      for (let Z of [-3, 3])
        (L(X, 0.6, 0.9, 5.5, 15324345, Z, 2.75, 0, 8),
          a(X, 1.6, 0.3, 1.7, 16311221, Z, 5.6, 0));
      a(X, 8, 0.8, 2, 13022678, 0, 6, 0);
      for (let Z = 0; Z < 9; Z++)
        l(
          X,
          0.18,
          16768181,
          Math.sin(Z * 2.4) * 4,
          0.4,
          Math.cos(Z * 2.4) * 3,
        );
    }
    if (j.biome === "coral")
      for (let X = 0; X < 12; X++) {
        let Z = X * 0.52,
          gA = islandRadius(j, Z) - 3,
          MA = k(O, Math.sin(Z) * gA, 0, Math.cos(Z) * gA);
        for (let EA = 0; EA < 3; EA++) {
          let GA = L(
            MA,
            0.13,
            0.28,
            1.6 + EA * 0.5,
            X % 2 ? 15962008 : 13214959,
            (EA - 1) * 0.5,
            0.7 + EA * 0.2,
            0,
            6,
          );
          GA.rotation.z = (EA - 1) * 0.35;
        }
      }
    if (j.biome === "desert") {
      let X = L(O, 5, 5, 0.08, 5556413, -22, 0.12, -16, 24);
      X.scale.z = 0.65;
      for (let Z = 0; Z < 4; Z++) y(O, -25 + Z * 2, -21, 0.7);
    }
    if (j.biome === "canyon") {
      for (let X of [-4, 4]) L(O, 1.5, 2.8, 8, 12085070, X + 24, 4, 24, 7);
      a(O, 12, 2, 3, 13402208, 24, 9, 24);
    }
    if (j.biome === "basalt")
      for (let X = 0; X < 9; X++)
        L(
          O,
          1.3,
          1.5,
          4 + (X % 4),
          5464426,
          -27 + X * 2.2,
          2 + (X % 4) * 0.5,
          26,
          6,
        );
    if (j.biome === "geyser")
      for (let [X, Z] of [
        [-23, 16],
        [22, 6],
        [24, 27],
      ]) {
        (L(O, 3.3, 3.3, 0.12, 7989199, X, 0.13, Z, 20),
          z(O, 3.6, 0.25, 14341810, X, 0.15, Z));
        let gA = k(O, X, 0, Z),
          MA = L(gA, 0.3, 0.7, 7, 11335922, 0, 3.5, 0, 8);
        ((MA.material = new cg({
          color: 11598591,
          transparent: !0,
          opacity: 0.65,
        })),
          D.push({ g: gA, base: 0, type: "water" }));
      }
    if (["snow", "glacier", "final"].includes(j.biome))
      for (let X = 0; X < 5; X++) {
        let Z = 0.6 + X * 0.35,
          gA = islandRadius(j, Z) + 8,
          MA = k(A, j.x + Math.sin(Z) * gA, -0.15, j.z + Math.cos(Z) * gA),
          EA = L(MA, 0, 2.5 + (X % 2), 5 + (X % 3), 13104895, 0, 1.5, 0, 5);
        EA.rotation.z = 0.15 * X;
      }
    landmarkMotion.push(...addIslandLandmarks(art,O,j));
    for (let X of O.children)
      X.isInstancedMesh ||
        (X.position.y += terrainHeight(j, X.position.x, X.position.z));
    for (let X = 0; X < 3; X++) {
      let Z = k(A, j.x - 35 + X * 33, 24 + X * 3, j.z - 15 + X * 20);
      for (let gA = 0; gA < 3; gA++) {
        let MA = l(Z, 3 + (gA % 2), 16777215, gA * 3, 0, 0);
        (MA.scale.set(1.4, 0.5, 0.8), (MA.castShadow = !1));
      }
      S.push({ g: Z, x: Z.position.x });
    }
  }
  for (let j of RARE_FRUITS) {
    let K = rarePosition(j.id),
      O = wA(
        k(A, K.x, groundHeight(ISLANDS[j.island], K.x, K.z), K.z),
        "rare:" + j.id,
        j.island,
      ),
      N = JA(j.id, O);
    N.position.y = 0.2;
    let u = z(O, 1.1, 0.065, FRUITS[j.id].color, 0, 0.15, 0);
    J.push({ g: O, fr: N, glow: u, ...j });
  }
  for (let j of SEA_MINES) {
    let K = k(A, j.x, 0.55, j.z),
      O = l(K, 1.1, 2702166);
    ((O.material = O.material.clone()), z(K, 0.9, 0.12, 16169572, 0, 0.2, 0));
    for (let u = 0; u < 6; u++) {
      let F = (u * Math.PI) / 3,
        H = L(
          K,
          0.14,
          0.22,
          0.7,
          6387083,
          Math.sin(F) * 1.1,
          0.1,
          Math.cos(F) * 1.1,
          6,
        );
      ((H.rotation.z = Math.PI / 2), (H.rotation.y = F));
    }
    L(K, 0.18, 0.24, 0.45, 15829605, 0, 1.1, 0, 8);
    let N = z(A, 8, 0.12, 16740193, j.x, 0.12, j.z);
    ((N.material = new rg({
      color: 16737626,
      transparent: !0,
      opacity: 0.7,
      depthWrite: !1,
    })),
      s.push({ g: K, body: O, alert: N }));
  }
  const explorer=new FruitExplorer(art,A),oA={g:explorer.g,actor:explorer},intgem=createIntGem3D(THREE,explorer.g);
  let ZA = k(A);
  ((L(ZA, 1.65, 1.1, 1.1, 10184255, 0, 0.4, 0, 6).scale.z = 1.8),
    a(ZA, 2.1, 0.13, 3.5, 15580789, 0, 0.92, 0),
    a(ZA, 1.8, 0.2, 0.5, 7754816, 0, 1.1, -0.7),
    L(ZA, 0.07, 0.12, 5, 8216130, 0, 3, 1, 8));
  let cA = new VA(
    new Xg(3, 3.2),
    new cg({ color: 16771242, side: yg, }),
  );
  (cA.position.set(0.1, 3.6, 1), ZA.add(cA));
  let aA = l(ZA, 0.42, 16748352, 0.1, 3.6, 1.1);
  ((aA.scale.z = 0.13), a(ZA, 0.25, 0.16, 1.1, 5652016, 0, 1, -2.3));
  let DA = z(ZA, 2.3, 0.045, 11728365, 0, -0.3, -2);
  DA.scale.set(0.7, 1, 1.5);
  let kA = R(
    A,
    o("shield", () => new iB(1.8, 16, 12)),
    7268272,
  );
  kA.material = new rg({
    color: 7405505,
    wireframe: !0,
    transparent: !0,
    opacity: 0.28,
  });
  function q(enemy){
    const island=ISLANDS[enemy.island],actor=new FruitGuardian(art,A,{color:island.color,biome:island.biome,boss:enemy.boss}),g=actor.g;g.scale.setScalar(enemy.boss?1.75:1);d(g,1);
    const telegraph=z(A,enemy.boss?5:3,.12,0xff785a);telegraph.material=new rg({color:0xff785a,transparent:true,opacity:.8,depthWrite:false});
    const bar=k(g,0,3.35,0);a(bar,1.8,.18,.08,0x173e4b);const fill=a(bar,1.72,.13,.09,0x83e9b5,0,0,.015);
    return {g,actor,bar,fill,telegraph};
  }
  function sA(game){for(const enemy of w){enemy.actor.dispose();enemy.telegraph.removeFromParent();enemy.telegraph.material.dispose();}w.length=0;for(const enemy of game.enemies)w.push(q(enemy));}
  let TA = -1;
  function _(j, K, O) {
    ((IA.material.uniforms.time.value = j.time),
      TA !== j.island && ((TA = j.island), sA(j)));
    for (let N = 0; N < Y.length; N++) {
      let u = Math.hypot(ISLANDS[N].x - j.player.x, ISLANDS[N].z - j.player.z);
      ((Y[N].g.visible = u < 260),
        (Y[N].decor.visible = u < 170),
        (M[N].lid.rotation.x = j.save.chests.includes(N) ? -1.25 : 0),
        (Y[N].sign.visible = !1));
    }
    for (let N of Q)
      ((N.ped.visible = !j.save.collected.includes(N.id)),
        (N.fr.position.y = 1.05 + Math.sin(j.time * 2 + N.island) * 0.15),
        (N.fr.rotation.y = j.time * 0.65));
    for (let N of J)
      ((N.g.visible =
        !j.save.owned.includes(N.id) && N.island === j.island && !j.boating),
        (N.fr.rotation.y = j.time * 0.5),
        (N.fr.position.y = 0.25 + Math.sin(j.time * 2) * 0.15),
        (N.glow.visible =
          Math.hypot(
            N.g.position.x - j.player.x,
            N.g.position.z - j.player.z,
          ) < 9));
    for (let N = 0; N < s.length; N++) {
      let u = j.mines[N],
        F = s[N];
      ((F.g.visible =
        u.cooldown <= 0 &&
        Math.hypot(u.x - j.player.x, u.z - j.player.z) < 120),
        (F.g.position.y = 0.55 + Math.sin(j.time * 2 + N) * 0.16),
        F.body.material.color.setHex(
          u.armed > 0 && Math.sin(j.time * 22) > 0 ? 16737360 : 2702166,
        ),
        (F.alert.visible = u.armed > 0 && j.boating),
        (F.alert.material.opacity =
          0.3 + Math.abs(Math.sin(j.time * 8)) * 0.5));
    }
    for (let N of e) N.material.opacity = 0.62 + Math.sin(j.time * 5) * 0.1;
    for (let N of S)
      ((N.g.position.x = N.x + Math.sin(j.time * 0.06 + N.x) * 4),
        (N.g.visible =
          Math.hypot(
            N.g.position.x - j.player.x,
            N.g.position.z - j.player.z,
          ) < 220));
    for (let N of D)
      N.type === "water"
        ? (N.g.scale.y =
            0.4 + Math.abs(Math.sin(j.time * 0.7 + N.g.position.x)) * 0.9)
        : (N.g.position.y = N.base + Math.sin(j.time) * 0.4);
    const reduced=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false;
    oA.g.position.set(j.player.x,(j.boating?1.2:j.ground)+j.player.y,j.player.z);oA.g.rotation.y=j.player.yaw;
    explorer.update(j,K,reduced);intgem.update(globalThis.window?.BoxIntGem?.getEquipped('fruit'),j.time,reduced);
    animateLandmarks(landmarkMotion,j.time,reduced);
    for(const guide of guides){if(guide.g.getWorldPosition(new $()).distanceTo(oA.g.position)<80)guide.update({x:0,z:0},K,j.time,reduced);}
    ZA.visible=j.boating;if(j.boating){ZA.position.set(j.player.x,.08+Math.sin(j.time*3)*.07,j.player.z);ZA.rotation.y=j.player.yaw;ZA.rotation.z=reduced?0:Math.sin(j.time*2)*.035;DA.visible=!!j.moving;}
    kA.visible=j.shield>0;kA.position.copy(oA.g.position).add(new $(0,1.2,0));kA.rotation.y=j.time;
    for(let n=0;n<w.length;n++){
      const visual=w[n],enemy=j.enemies[n];visual.g.visible=enemy.alive&&!j.boating;if(!visual.g.visible){visual.telegraph.visible=false;continue;}
      visual.g.position.set(enemy.x,groundHeight(ISLANDS[enemy.island],enemy.x,enemy.z),enemy.z);visual.g.rotation.y=enemy.yaw;
      visual.actor.update(enemy,K,j.time,reduced);visual.fill.scale.x=Math.max(.001,enemy.hp/enemy.maxHp);visual.fill.position.x=-.86*(1-enemy.hp/enemy.maxHp);
      visual.bar.quaternion.copy(O.quaternion).premultiply(visual.g.quaternion.clone().invert());visual.telegraph.visible=enemy.windup>0;
      if(visual.telegraph.visible){visual.telegraph.position.set(enemy.attackAt.x,groundHeight(ISLANDS[enemy.island],enemy.attackAt.x,enemy.attackAt.z)+.05,enemy.attackAt.z);visual.telegraph.scale.setScalar(reduced?1:.95+Math.sin(j.time*16)*.04);}
    }
    for (; h.length < j.projectiles.length; ) {
      let N = l(A, 0.36, 16777215);
      ((N.material = new rg()), h.push(N));
    }
    for (
      h.forEach((N, u) => {
        let F = j.projectiles[u];
        ((N.visible = !!F),
          F &&
            (N.position.set(F.x, groundHeight(ISLANDS[j.island], F.x, F.z) + 1.15, F.z),
            N.material.color.setHex(F.color),
            (N.rotation.y = j.time * 5)));
      });
      G.length < j.fx.length;

    ) {
      let N = z(A, 1, 0.065, 16777215);
      ((N.material = new rg({ transparent: !0, depthWrite: !1, side: yg })),
        G.push(N));
    }
    G.forEach((N, u) => {
      let F = j.fx[u];
      if (((N.visible = !!F), F)) {
        let H = 1 - F.life / F.total;
        (N.material.color.setHex(F.color),
          (N.material.opacity = 1 - H),
          N.position.set(
            F.x,
            (F.type === "bomb" ? 0.3 : groundHeight(ISLANDS[j.island], F.x, F.z) + 0.25) +
              H * 0.9,
            F.z,
          ),
          N.scale.setScalar(0.3 + H * F.radius),
          N.rotation.set(
            F.type === "slash" ? Math.PI / 2 - 0.3 : Math.PI / 2,
            0,
            j.time * 3,
          ));
      }
    });
    for (let N of I) {
      if (N === Y.find((F) => F.sign === N)?.sign) continue;
      let u = N.getWorldPosition(new $());
      N.visible = u.distanceTo(oA.g.position) < 20;
    }
  }
  return {
    root: A,
    pickables: E,
    avatar: oA,
    boat: ZA,
    animate: _,
    fruitModel: JA,
    terrainMeshes: i,islands:Y,guardians:w,art,
    dispose(){intgem.dispose();explorer.dispose();guides.forEach(g=>g.dispose());w.forEach(e=>{e.actor.dispose();e.telegraph.material.dispose();});const geometries=new Set(),materials=new Set(),textures=new Set();A.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:o.material?[o.material]:[]){materials.add(m);if(m.map)textures.add(m.map);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());art.dispose();A.removeFromParent();},
  };
}

export {islandTerrain,createFruitWorld};
