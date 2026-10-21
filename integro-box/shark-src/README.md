# Shark — Integro Box

Free-swimming cartoon WebGL 2 game. Open the existing authenticated catalog and select Shark. No automatic game launch. The lightweight catalog loader imports the Three.js bundle only after selection.

- Ocean: 1,800 × 1,200 world meters, six geographically distinct regions, free vertical movement, landmarks, pearls, regional predators, discoverable destinations and sonar map.
- Growth: 60 evolutions, strictly smaller prey, physical growth, XP carryover, automatic eating and five one-time missions.
- Every fish: forty actual `THREE.Bone` joints bound to skinned geometry: twenty spine joints, ten pectoral joints, three dorsal, six tail and one jaw. All forty joints have positive vertex weights and animate.
- Shop: twelve entries, three-tier speed and growth upgrades, sonar, pearl magnet, consumable shields, five skins and two accessories. Earned Shark coins only; no real-money debits or IntGem conversion.
- Progress is scoped to the existing authenticated `BoxStorage` account on this browser. It is not cloud synchronized. Local storage failures are reported in pause settings. Existing portal usage tracking records Shark and excludes paused time.
- Input: WASD/arrows and joystick; E/Q or on-screen depth buttons; Space/Shift or held impulse button; drag to orbit and wheel to zoom. Lost focus pauses and clears held controls.

## Build and check

From this directory: `npm ci` then `npm run build`. From repository root after installing its dev dependencies: `node --test tests/shark.test.mjs tests/shark-ui.test.mjs tests/box-navigation-ui.test.mjs`.

Automated checks cover the economy, progression, map, corruption recovery, all forty weighted joints, animation deformation, UI navigation, catalog integration and existing game navigation. Interactive browser/WebGL visual QA was unavailable in the implementation environment; no device FPS claims are made.

## Cover art

Final asset: `../assets/catalog-v1/shark.webp`. Generated with the built-in image generation tool using the existing Integro Rush cover as a style reference, then encoded as WebP. The same asset appears in both the public game list and the authenticated catalog.

Prompt: Create a landscape 1536×1024 Shark cover for Integro Box matching the reference's polished colorful 3D cartoon illustration and glossy rounded beveled lettering with dark navy outlines. A lovable turquoise shark with expressive eyes swims through a rich underwater coral garden chasing three smaller colorful fish. Include bubbles, golden pearl coins, cyan sunbeams, pink/orange coral, and distant sunken ship and temple silhouettes. Large central shark, readable at thumbnail size. Exact text: “SHARK” across the lower third and smaller “INTEGRO BOX” above. Full ocean background, safe text margins, no buttons, no gore, no other game names.

### Atualização visual 2
HUD compacto com controles de toque de pelo menos 44 px, mapa no canto superior,
e barra de evolução horizontal. Tubarão e cinco espécies de peixes usam 40 juntas
ponderadas, detalhes faciais integrados ao mesh, padrões próprios e contorno cartoon.
A natação usa fase contínua, curvas com velocidade angular limitada, aceleração,
alinhamento e separação de cardumes. A câmera está mais próxima, com iluminação
ACES e exposição reduzida. Economia e formato do progresso salvo permanecem compatíveis.

Validação: `node --test tests/shark.test.mjs tests/shark-motion.test.mjs tests/shark-ui.test.mjs tests/box-navigation-ui.test.mjs`.

### Algas e câmera
Algas comestíveis flutuam em todas as regiões, inclusive perto do início. Dão XP
sem contar como peixes nas missões; o bônus de crescimento também se aplica.
Cada alga reaparece após 18 segundos de jogo ativo. O campo usa três lotes de
instâncias, com geometria compartilhada, para limitar o custo de renderização.
Zoom de 0 a 3, botões −/+, roda, pinça e atalho do olho. Zoom 0 ativa a câmera
nos olhos do tubarão, com corpo e anel ocultos, direção de nado coerente e
preferência salva por conta no navegador. Testes: `tests/shark-algae-camera.test.mjs`.

### Gaiolas IntGem e HUD 3
Gaiolas pequenas/médias/grandes custam 1/2/3 IntGem e capturam até 3/6/10 peixes
menores em um raio de 55 metros. Cada gaiola permite exatamente cinco pescas.
Sem peixes disponíveis, a interface não envia uma utilização. Compra, propriedade,
capacidade, débito e usos são validados no servidor; solicitações têm identificadores
persistidos para retomada sem cobrança ou uso duplicado. A gaiola permanece na conta
entre dispositivos; XP e moedas continuam no progresso local do Shark.
A pesca exibe a gaiola 3D e concede os ganhos normais dos peixes capturados.
A aplicação local registra recibos para impedir ganhos duplicados em tentativas.
HUD: minimapa menor, zoom recolhível, acesso a gaiolas e tela inicial mais compacta.
Testes adicionais: `tests/shark-cages-db.test.mjs tests/shark-cages-client.test.mjs`.
