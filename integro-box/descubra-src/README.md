# Descubra! — Nave Integro

Jogo original de dedução social, 2D Canvas cartoon, integrado ao catálogo e ao seletor Salas do Integro Box. Não usa Unity nem requer WebGL. Sete cômodos em um mundo contínuo de 2200 × 1700, com corredores, portas e colisões. Joystick por pointer events no celular; WASD/setas no computador. Câmera acompanha o astronauta e o botão Mapa mostra a planta sem teleportar. E ou os botões usam objetos próximos.

- Solo: um humano e cinco bots; escolha tripulante ou infiltrado.
- Online: até seis contas autenticadas, convite de oito caracteres ou descoberta pública, bots nas vagas. Papéis sorteados no servidor. Criador inicia/remove participantes antes da partida; sair como criador encerra a sala.
- Missão: seis minutos, dez tarefas coletivas ou expulsão do infiltrado para vitória da tripulação. Infiltrado vence por paridade (dois sobreviventes), prazo da missão ou sabotagem não reparada em 45 segundos.
- Reuniões de 25 segundos, voto único, empate/pular mantém todos. Desativados acompanham como espectadores; sem violência gráfica ou chat livre próprio.
- Modo online mantém estado privado, decisões e bots no Postgres. RPC `public.descubra_room` é wrapper invoker; implementação definer privada, acesso `box_access`, associação por `auth.uid()`, RLS com negação por padrão e revogação de leitura direta. Respostas excluem `traitor`; revelação só no fim.
- Sala expira em 30 minutos. Ausentes por 60 segundos são controlados por bots; partida não é salva para continuação após recarregar. Não altera carteira, prêmios ou economia dos outros jogos.

Arquivos: `world.mjs` (geometria/colisão), `rules.mjs` (solo), `render.mjs` (arte Canvas), `game.mjs` (UI/transporte), `../descubra-loader.js`, `../descubra.css`. A migração `20261023205650_descubra_game.sql` cria somente recursos novos.

Capa: `../assets/catalog-v1/descubra.webp`, gerada com Criar imagem integrado, a partir do prompt: “Capa horizontal 3:2 cartoon 2D de nave científica Integro, cinco pequenos astronautas coloridos arredondados com mochila, sem braços, visor ciano e emblema i; logo grande DESCUBRA! e marca INTEGRO BOX; cores chapadas, contornos simples, sem realismo ou violência”. PNG original foi convertido para WebP para uso no catálogo.

Validação: `node --test tests/descubra.test.mjs tests/box-navigation-ui.test.mjs tests/integro-box.test.mjs tests/box-public.test.mjs`. As contas usadas nos testes pertencem apenas ao banco PGlite isolado. Browser QA: tarefa solo, duas contas em sala por convite, sorteio, sincronização, votação, espectador, menu em 390×844.

Movimento online: a entrada é prevista no cliente e reconciliada por sequência. O servidor limita distância por orçamento de tempo, normaliza diagonais e verifica a mesma geometria antes de mover. Pacotes repetidos não repetem passos. Salas novas usam `walking: true`; salas v1 em andamento conservam as regras antigas. Bots também percorrem corredores; proximidade é exigida para terminais, reuniões, desativação e reportes. Sincronização ~220 ms mais latência de rede, com interpolação visual dos outros jogadores.

Validação de movimento: `node --test tests/descubra.test.mjs tests/descubra-walk.test.mjs`. Cobre sete trajetos de ida/volta, paredes e móveis, velocidade diagonal, sequência/replay, compartilhamento de posições, proximidade e permissões.

Atualização de movimento: `20261023212701_descubra_walkable_world.sql`. Verificação visual em 390×844 e 844×390, controles solo e sala online com duas contas de teste.
