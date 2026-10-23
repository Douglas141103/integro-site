# Descubra! — Nave Integro

Jogo original de dedução social, 2D Canvas cartoon, integrado ao catálogo e ao seletor Salas do Integro Box. Não usa Unity nem requer WebGL. Sete cômodos conectados pela Central; toque no cômodo ou use os botões de viagem. Setas/WASD também viajam entre os cômodos.

- Solo: um humano e cinco bots; escolha tripulante ou infiltrado.
- Online: até seis contas autenticadas, convite de oito caracteres ou descoberta pública, bots nas vagas. Papéis sorteados no servidor. Criador inicia/remove participantes antes da partida; sair como criador encerra a sala.
- Missão: seis minutos, dez tarefas coletivas ou expulsão do infiltrado para vitória da tripulação. Infiltrado vence por paridade (dois sobreviventes), prazo da missão ou sabotagem não reparada em 45 segundos.
- Reuniões de 25 segundos, voto único, empate/pular mantém todos. Desativados acompanham como espectadores; sem violência gráfica ou chat livre próprio.
- Modo online mantém estado privado, decisões e bots no Postgres. RPC `public.descubra_room` é wrapper invoker; implementação definer privada, acesso `box_access`, associação por `auth.uid()`, RLS com negação por padrão e revogação de leitura direta. Respostas excluem `traitor`; revelação só no fim.
- Sala expira em 30 minutos. Ausentes por 60 segundos são controlados por bots; partida não é salva para continuação após recarregar. Não altera carteira, prêmios ou economia dos outros jogos.

Arquivos: `rules.mjs` (solo), `render.mjs` (arte Canvas), `game.mjs` (UI/transporte), `../descubra-loader.js`, `../descubra.css`. A migração `20261023205650_descubra_game.sql` cria somente recursos novos.

Capa: `../assets/catalog-v1/descubra.webp`, gerada com Criar imagem integrado, a partir do prompt: “Capa horizontal 3:2 cartoon 2D de nave científica Integro, cinco pequenos astronautas coloridos arredondados com mochila, sem braços, visor ciano e emblema i; logo grande DESCUBRA! e marca INTEGRO BOX; cores chapadas, contornos simples, sem realismo ou violência”. PNG original foi convertido para WebP para uso no catálogo.

Validação: `node --test tests/descubra.test.mjs tests/box-navigation-ui.test.mjs tests/integro-box.test.mjs tests/box-public.test.mjs`. As contas usadas nos testes pertencem apenas ao banco PGlite isolado. Browser QA: tarefa solo, duas contas em sala por convite, sorteio, sincronização, votação, espectador, menu em 390×844.
