# Pegue o Ovo — Inverno 2026

O primeiro evento acrescenta a pista 21, Santuário da Fênix Gelada, sem substituir as vinte pistas existentes. Todas recebem neve; o curral ganha pódio, cinco anéis coloridos, bandeiras e totens “Inverno 2026”. A fênix tem uma espécie própria, asas articuladas e acompanha o jogador no ar quando ele carrega seu ovo com a mochila a jato. A base permanece segura.

## Ovos misteriosos

O ninho especial tem cinco ovos. Os valores-base internos são 800.000, 900.000, 1.000.000, 2.000.000 e 3.000.000 Integros; as melhorias existentes de venda continuam sendo aplicadas. Não há mutações aleatórias neste ninho.

Na loja, nas pistas, no ninho e no menu enquanto carrega o ovo, o valor aparece como **XXXXX**, acompanhado de “Pegue o ovo e descubra no curral quanto vale”. O valor real é revelado ao guardar o ovo no curral e fica disponível na incubação e na venda da criatura. Isso é apresentação de jogo, não uma promessa de sigilo do código entregue ao navegador.

## Gelo e patins

A fênix anuncia a nevasca 1,5 s antes de congelar toda a pista por 10 s; o ciclo começa a cada 17 s. No chão congelado, a velocidade é reduzida em 70%, com inércia ao virar ou soltar o controle. Os patins mantêm 75% da velocidade normal (redução de 25%) e melhoram o controle no gelo. As regras de gelo não interferem nas corridas online com velocidade igual.

Um par é consumido ao ativar. Dura uma tentativa, terminando ao voltar à base depois de sair, ser capturado, entrar em uma corrida/visita ou sair do jogo. Pausar não consome outro par. Os pares ainda não usados permanecem na conta.

Cada par custa **7 Integros**, sem cobrança de IntGem. A compra ocorre na base, sem ovo carregado, com revisão do progresso e reserva do imposto preservada. Repetir uma solicitação que perdeu a resposta não cobra nem consome outro item.

## Presente e loja

O presente de inverno concede **3 minas terrestres e 2 pares de patins**, uma única vez por conta. É uma campanha independente do presente inicial já existente. As minas continuam seguindo as regras de armadilhas das salas online.

A loja única reúne inverno, mochila a jato, armadilhas, IntGem, melhorias, consumíveis, veículos, acessórios, poderes/boosts e decorações. Os atalhos existentes abrem a categoria correspondente. No celular, as categorias deslizam horizontalmente e o botão de patins aparece no HUD quando há estoque ou na pista de inverno.

## Operação e validação

- Migration: `20261023004052_egg_winter_2026.sql`; adiciona inventário/operações privados e as ações `winter_state`, `winter_claim`, `winter_buy`, `winter_use` ao dispatcher autenticado. Atualiza capacidades para 21 pistas e limites das salas/armadilhas.
- Acesso direto às novas tabelas e ao helper é revogado, com RLS sem políticas deliberadamente fechado. A autorização ocorre no dispatcher e no helper. Não há alteração de permissões de outras funções.
- Build: `npm ci`, `npm ci --prefix integro-box/egg-src`, `npm run build --prefix integro-box/egg-src`. O bundle usa uma única cópia de Three, inclusive nos atores compartilhados com Rush.
- Testes: `node --test --test-concurrency=2 tests/egg-*.test.mjs`. Cobrem as regras, preservação dos cinco valores, revelação no curral, perseguição aérea, percentuais, estoque, dupla solicitação, autenticação, imposto, compatibilidade e integração dos atores/HUD.
- QA de interface em 390 × 844 com renderizador de teste e serviços simulados: presente, loja e uso dos patins. O navegador de QA não oferece WebGL, portanto a renderização GPU final não foi validada nele. Os arquivos temporários de QA não fazem parte da publicação.
