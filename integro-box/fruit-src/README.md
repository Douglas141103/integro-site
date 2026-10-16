# Fruit Box — 20 ilhas

A implementação do Fruit Box foi separada do pacote legado `worlds.js`. Este pacote continua responsável pelos outros mundos e pela navegação; chama `window.BoxFruit.mountFruitGame`. `gate.js` carrega `fruit.js` antes do pacote legado, após a autenticação.

## Conteúdo e compatibilidade

As quinze ilhas, oito frutas, quatro tesouros, poderes, melhorias, combate e navegação anteriores foram mantidos. Cinco destinos continuam a sequência após Coroa dos Elementos:

| Ilha | Ambiente | Guardião |
|---|---|---|
| 16 | Bosque dos Cogumelos | Guardião dos Esporos |
| 17 | Arquipélago Mecânico | Guardião das Engrenagens |
| 18 | Jardim das Nuvens | Guardião dos Ventos |
| 19 | Santuário Lunar | Guardião da Lua |
| 20 | Estação Integro | Guardião da Estação |

Cada ilha tem três sentinelas, um guardião, baú, guia, loja e cais. A recompensa de missão libera a próxima ilha; a vitória final agora acontece na 20. O oceano, as bombas, a busca de rotas e os mapas abrangem a quarta fileira de destinos. As cinco novas ilhas têm marcos próprios: cogumelos gigantes, torres e engrenagens, jardins e arcos celestes, observatório lunar e estação com locomotiva.

O save continua usando `integro-box-fruit-v1` por meio de `BoxStorage`, que inclui o usuário no prefixo. A limpeza de dados preserva moedas, frutas, equipamentos, baús e conquistas; estende os arrays de 15 para 20 posições. Não exige migração de banco. O progresso do Fruit Box permanece local neste navegador, como na versão anterior. Os cosméticos IntGem já existentes continuam usando a carteira autenticada e agora também aparecem em 3D.

## Visual e animação

- MeshToonMaterial, rampa de quatro tons, cores de vértices, contornos e geometrias de bordas suaves.
- Personagem principal compartilha `RunnerCharacter`, `ArtResources`, IK e molas de movimento com a base do Pegue o Ovo/Integro Rush. Corrida, salto, aterrissagem, esquiva, ataque e navegação têm poses próprias.
- Guardiões e Lia têm esqueleto e skinning; os guardiões usam uma superfície fundida e um contorno, com pesos mesclados nos cotovelos/joelhos. Os pés usam IK; braços usam FK, antecipação de golpe e recuperação.
- A animação não modifica vida, dano, velocidade ou progresso. Movimento reduzido diminui balanços acessórios.
- HUD em DOM/CSS com vida, energia, XP, nível, moedas, ilha, missão e barra de chefe; bússola e mapa em canvas. Controles usam ícones vetoriais e a logo existente do catálogo.
- Pixel ratio limitado a 1,5; sombras de 1024; rochas e vegetação instanciadas; grupos distantes ocultados. Somente os quatro inimigos da ilha atual permanecem ativos, com descarte ao trocar de ilha.

## Construir e verificar

`npm ci --prefix integro-box/fruit-src`

`node integro-box/fruit-src/build.mjs`

`node --test tests/fruit-box.test.mjs`

Os testes verificam migração de save, desbloqueios, rotas marítimas, recompensas únicas, vitória, corrida e salto simultâneos, pesos dos ossos, IK, poses, liberação de recursos, HUD e controles de vários dedos em DOM. A integração de cena utiliza Three.js real e substitui apenas o renderer GPU. Esses testes não são uma validação visual WebGL nem uma medição de FPS em celular; essa verificação não estava disponível no ambiente de publicação.
