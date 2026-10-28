# Pegue o Ovo — Inverno 2026

O primeiro evento acrescenta a pista 21, Santuário da Fênix Gelada, sem substituir as vinte pistas existentes. Todas recebem neve; o curral ganha pódio, cinco anéis coloridos, bandeiras e totens “Inverno 2026”. A fênix tem uma espécie própria, asas articuladas e acompanha o jogador no ar quando ele carrega seu ovo com a mochila a jato. A base permanece segura.

## Ovos misteriosos

O ninho especial tem cinco ovos. Os valores-base internos são 800.000, 900.000, 1.000.000, 2.000.000 e 3.000.000 Integros; as melhorias existentes de venda continuam sendo aplicadas. Não há mutações aleatórias neste ninho.

Na loja, nas pistas, no ninho e no menu enquanto carrega o ovo, o valor aparece como **XXXXX**, acompanhado de “Pegue o ovo e descubra no curral quanto vale”. O valor real é revelado ao guardar o ovo no curral e fica disponível na incubação e na venda da criatura. Isso é apresentação de jogo, não uma promessa de sigilo do código entregue ao navegador.

## Gelo e patins

A fênix anuncia a nevasca 1,5 s antes de congelar toda a pista por 10 s; o ciclo começa a cada 17 s. No chão congelado, a velocidade é reduzida em 70%, com inércia ao virar ou soltar o controle. Os patins mantêm 75% da velocidade normal (redução de 25%) e melhoram o controle no gelo. As regras de gelo não interferem nas corridas online com velocidade igual.

Um par é consumido ao ativar. Dura uma tentativa, terminando ao voltar à base depois de sair, ser capturado, entrar em uma corrida/visita ou sair do jogo. Pausar não consome outro par. Os pares ainda não usados permanecem na conta.

Cada par custa **7 IntGem**, debitados da carteira IntGem com lançamento no extrato. O saldo de Integros não é alterado. A compra ocorre na base, sem ovo carregado, com revisão do progresso e reserva do imposto preservada. Repetir uma solicitação que perdeu a resposta não cobra nem consome outro item.

## Presente e loja

O presente de inverno concede **3 minas terrestres e 2 pares de patins**, uma única vez por conta. É uma campanha independente do presente inicial já existente. As minas continuam seguindo as regras de armadilhas das salas online.

A loja única reúne inverno, mochila a jato, armadilhas, IntGem, melhorias, consumíveis, veículos, acessórios, poderes/boosts e decorações. Os atalhos existentes abrem a categoria correspondente. No celular, as categorias deslizam horizontalmente e o botão de patins aparece no HUD quando há estoque ou na pista de inverno.

## Operação e validação

- Migration: `20261023004052_egg_winter_2026.sql`; adiciona inventário/operações privados e as ações `winter_state`, `winter_claim`, `winter_buy`, `winter_use` ao dispatcher autenticado. Atualiza capacidades para 21 pistas e limites das salas/armadilhas.
- Acesso direto às novas tabelas e ao helper é revogado, com RLS sem políticas deliberadamente fechado. A autorização ocorre no dispatcher e no helper. Não há alteração de permissões de outras funções.
- Build: `npm ci`, `npm ci --prefix integro-box/egg-src`, `npm run build --prefix integro-box/egg-src`. O bundle usa uma única cópia de Three, inclusive nos atores compartilhados com Rush.
- Testes: `node --test --test-concurrency=2 tests/egg-*.test.mjs`. Cobrem as regras, preservação dos cinco valores, revelação no curral, perseguição aérea, percentuais, estoque, dupla solicitação, autenticação, imposto, compatibilidade e integração dos atores/HUD.
- QA de interface em 390 × 844 com renderizador de teste e serviços simulados: presente, loja e uso dos patins. O navegador de QA não oferece WebGL, portanto a renderização GPU final não foi validada nele. Os arquivos temporários de QA não fazem parte da publicação.

## Identidade visual e atualização — winter2

- Totens do curral substituídos por placas de gelo extrudadas com cintura e topo inclinado, seguindo o desenho fornecido. Círculos vermelhos em relevo e inscrição `2026 / INVERNO` em ambas as faces.
- Logo sazonal gerada com a ferramenta de imagens, preservando explorador, pintinho e tipografia; neve, roupa de inverno e pequeno totem. Asset: `integro-box/assets/catalog-v1/pegue-o-ovo.webp`. Catálogo, destaque, recentes, página de apresentação e capas traduzidas usam a identidade de inverno.
- Direção visual: volumes táteis e letras expressivas, apoiada nas referências Adobe de tendências 2026: https://www.adobe.com/express/learn/blog/design-trends-2026 . Brief: atualizar a identidade existente para Inverno 2026, com neve, azul-gelo e o totem do desenho com círculos vermelhos.
- Corrigida divergência entre `site-release.json` e a versão interna de `site-update.js`, que provocava tentativas de atualização repetidas. O aviso de atraso agora tem título coerente e botão de fechar; a verificação periódica não reabre um aviso dispensado. Avisos compactos não bloqueiam o teclado do jogo. Dados de formulários continuam protegidos.
- Verificação: testes do atualizador, geometria do totem, atores, integração do jogo e idiomas. Prévia do catálogo em 390 × 844 verificou a nova capa e o botão que dispensa o aviso. A prévia de navegador não oferece WebGL, portanto a aparência 3D final dos totens ainda precisa de conferência em um dispositivo com GPU.

## Distribuição pelas pistas — winter3

Removidas as duas árvores dianteiras que encobriam os totens do curral; as duas árvores de fundo ficam nas extremidades traseiras. Cada uma das 21 pistas recebe dois totens alternados nas laterais e uma faixa física `INVERNO 2026`, legível nos dois sentidos. Os modelos compartilham geometria e materiais e acompanham a visibilidade de cada pista. Áreas de exposição ficam livres de vegetação e adereços do cenário.

Validação: nove testes do atualizador, totem e integração do jogo passaram. Inspeção geométrica das 21 pistas confirmou 42 totens, 21 faixas, nenhuma interseção entre árvores e peças e todas as peças fora dos limites da corrida. A limitação de conferência visual WebGL permanece.

## Ano em destaque — winter4

O ano foi redesenhado com polígonos próprios: números angulares, zeros com recortes retangulares e o 6 em degrau, seguindo o desenho enviado. O `2026` passa a ser geometria em relevo, com 0,86 m de altura, interior branco e contorno azul-marinho. A base foi alargada e a parte superior elevada para separar os círculos da inscrição. `INVERNO` ocupa uma faixa escura maior. Ano, contorno, fundo e faixa não recebem névoa nem variação de iluminação, preservando o contraste.

Nove testes passaram. A prova vetorial dos mesmos polígonos foi conferida visualmente no navegador, incluindo redução a 180 px. A conferência geométrica confirmou que os totens maiores continuam fora da pista e sem interseção com árvores nas 21 pistas; a limitação de visualização WebGL permanece.


## Encerramento — 28/10/2026, 23h32 (UTC−4)

Prazo absoluto: `2026-10-29T03:32:00.000Z`, seis horas a partir do pedido às 17h32. Relógio físico de duas faces entre os dois totens da entrada do curral; contagem também no HUD. Não reinicia ao entrar e continua com o jogo pausado. O servidor fornece a hora, sincronizada a cada 30 segundos; os clientes usam relógio monotônico entre sincronizações.

Ao expirar, somem a neve geral, faixas, totens, pódio e neve caindo, e voltam as cores e árvores normais. A pista 21, sua Fênix Gelada, o gelo e os patins permanecem. O ninho passa a três ovos, com raridades, mutações e renovação comuns; valor-base de 75.000, igual à pista 20. Não há mais a tabela promocional nem XXXXX. Ovos em transporte ou caídos viram comuns; ovos já depositados e criaturas conquistadas mantêm a marca `winterReward` e seus valores, inclusive após chocar/recarregar/trocar. Saldos e compras são preservados.

O servidor encerra o presente de inverno e rejeita salvamentos de clientes desatualizados após o prazo. A função de estado deriva do horário do banco; não depende de tarefa agendada para fechar. O cálculo patrimonial distingue criaturas promocionais antigas de novas criaturas normais. Migração: `20261028213739_egg_winter_event_deadline.sql`.

Validação: testes das regras, transição durante pausa, relógio, geometrias reais, preservação de recompensas, autenticação, fim do presente e rejeição de salvamentos antigos. A prévia remota está com WebGL desativado, portanto o desenho por GPU não foi conferido visualmente nesse navegador.
