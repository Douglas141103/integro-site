# Integro Box

## Cabeçalho da conta e presença — 13/10/2026 (box9)

A faixa superior de atalhos foi retirada da apresentação. O catálogo continua oferecendo todos os jogos. O cabeçalho exibe o `full_name` do próprio perfil autorizado e a quantidade de contas com o Integro Box aberto e visível. Uma conta equivale a uma presença, mesmo com várias abas/dispositivos. A conta familiar não permite identificar quantas pessoas físicas a utilizam.

`presence.js` usa Supabase Realtime Presence no canal `integro-box-online-v1`, iniciado somente após a autorização do gate. A chave é um digest SHA-256 do identificador da conta com prefixo específico do Box; o payload contém apenas `{online:true}`. Nome, e-mail, ID bruto, jogo e histórico não são publicados no canal. O nome é renderizado como texto somente no próprio navegador. Este canal de presença é público e efêmero; o contador é informativo e não é usado para autorização, cobrança ou auditoria. Não substitui os relatórios autorizados da gestão.

As abas ocultas deixam de se anunciar e voltam quando visíveis; desconexão/saída remove a presença, sujeita ao tempo de detecção do serviço. Falha de conexão mostra indisponibilidade, nunca um número inventado ou antigo. Logout remove o canal; os demais dados e permissões continuam iguais.

Verificação: três testes em `tests/box-presence.test.mjs` cobrem nome seguro, deduplicação, entrada/saída, ocultação, reconexão e logout. Teste real em um canal temporário isolado confirmou três conexões representando duas contas e atualização para uma conta após saída. Nenhum dado real de usuário foi usado no teste. Sem conferência visual em navegador nesta sessão.

## IntegroCraft — atualização de 13/10/2026 (box8)

Integrado da versão 28 do Integro Box (fonte `b1ccf639f0a0401d611ae17a7746a21bfbb40774`): terreno individual 96×96, capivaras e reprodução, plantio/colheita, vila e trocas, minérios/picaretas/encantamentos, barcos/carrinhos, circuitos, fome e vida.

A chave do mundo continua `integrocraft-world-v1`, dentro do escopo `box:<perfil>:`. O salvamento v1 é migrado para v2 preservando coordenadas, construções, inventário e metadados; a primeira gravação guarda também uma cópia v1 na chave `-backup` do mesmo perfil. O registro de uso continua `craft`.

As salas preservam o terreno original 48×48 e os dez blocos básicos, com as mesmas validações de servidor. O mapa ampliado e os novos recursos são individuais. Ao entrar, o mundo individual fica preservado em memória; nenhuma gravação do mundo compartilhado pode substituí-lo. Ao sair, o mundo individual é restaurado. Não há migração de banco nesta atualização.

Fontes em `integro-box/craft-src/`. Reconstrução: `cd integro-box/craft-src && npm ci && npm run build`. O gate autenticado carrega o bundle antes de montar os mundos. A licença do Three.js permanece no bundle. O HTML e CSS do jogo usam a versão atual; os demais jogos mantêm seus adaptadores.

Validação: `node tests/box-craft-adventure.cjs`, `node tests/box-craft-hud.cjs` e as suítes `integro-box`, `box-public`, `box-usage`, `box-gosnake` e `site-update`. O teste do HUD executa montagem, viagem ao rio, seleção de capivara, entrada/edições/saída de sala e preservação do mundo individual com renderizador substituído. A conferência visual/WebGL em navegador não está disponível nesta sessão.

## GoSnake — catálogo de 13/10/2026

Integrado a partir do HTML enviado (SHA-256 `c64b5f1f712ebfc49691285f32fedf82a375defdfe603949562afe4433424238`), idêntico ao build local de origem. O novo jogo individual mantém as 15 arenas, frutas, poderes, túneis e o direcional por bolinha da versão enviada. A arte original foi convertida para WebP para reduzir o download, sem redesenho.

O módulo `gosnake.js` é carregado somente após o gate autenticar a família. Usa `BoxStorage` para separar fases/recordes por conta. Ao abrir, sai da sala multiplayer e fecha os outros jogos; ao sair da conta, interrompe o jogo. A manutenção salva o progresso antes da recarga. O GoSnake não adiciona um modo multiplayer.

`gosnake-src/` preserva as fontes e dependências fixadas. Para reconstruir: `cd integro-box/gosnake-src && npm ci && npm run build`. O pacote Three.js mantém os avisos de licença no bundle.

Aplicar `20261013110000_box_gosnake_usage.sql` antes do novo cliente: apenas acrescenta `gosnake` à lista de jogos do registro de uso já autorizado. A migração preserva permissões, históricos e escopo por escola; pode ser reaplicada.

Verificação: testes de regras nas 15 arenas (inclusive conclusão das 15 fases no modelo, 1.766 movimentos), modelos 3D, joystick, integração do menu/logout, uso no banco isolado, salas existentes e manutenção. A infraestrutura de prévia local não oferece o controle de navegador exigido nesta sessão, portanto não houve QA visual/WebGL local. Conferir a apresentação publicada no navegador. Nenhum arquivo de cadastro, assinatura ou cobrança é incluído nesta versão.

## Gestão de uso

`/portal/integro-box.html` é a área de acompanhamento. O cartão aparece no
Portal de Gestão apenas para `integro_admin` e `diretor`. O servidor repete a
verificação em todas as consultas: administradores consultam perfis autorizados;
diretores consultam perfis de sua escola e responsáveis com alunos vinculados a ela.
Sem escola atribuída, o diretor não acessa o relatório. Não altera cargos existentes.

Ativar primeiro `20261012233000_box_usage_management.sql`, depois publicar o
frontend. A migração cria três tabelas privadas com RLS e duas RPCs, sem acesso
direto às tabelas para anon/authenticated. Não apagar nem modificar o histórico
escolar/financeiro. Depois da publicação, conferir a versão dos scripts e liberar
uma nova versão do manifesto de atualização para as abas já abertas.

O registro começa após a autenticação no jogo e coleta apenas perfil, jogo,
entrada/último sinal/saída, classe do aparelho (computador/celular/tablet), sala
validada no servidor e tempos estimados. Um aviso visível informa as famílias.
Não registra teclas, mensagens, imagens, IPs, localização ou senhas. Não envia
informações para IA ou serviço analítico externo. A conta de família não identifica
qual criança joga. Não existe reconstrução retroativa de jogos anteriores.

Sinais a cada 30 segundos e nas mudanças de jogo/visibilidade. O relógio do banco
calcula no máximo 35 segundos por sinal, sem crédito após lacunas acima de 70 s;
um relógio por perfil evita somar tempo de abas concorrentes. Atividade exige
página visível, interação recente (2 minutos), jogo aberto e ausência da manutenção.
Tempos são estimativas operacionais; não servem como evidência disciplinar ou
medida de aprendizagem. Último login vem de `auth.users.last_sign_in_at`, enquanto
uma sessão Box é uma abertura/recarga, não um novo login de autenticação.

Filtros: até 93 dias, perfil, jogo e modo. Os totais usam todos os dados do recorte;
histórico paginado em 50 sessões e até 100 salas recentes. Partes de sessões que
atravessam a meia-noite são agrupadas pela data de início do intervalo medido
(America/Manaus), com aproximação de até um sinal de 35 s na virada do dia.
Histórico de sala persiste mesmo após expirar a sala temporária; não armazena
código de convite. Não há exclusão automática dos registros nesta versão.

Verificação: `node --test tests/box-usage.test.mjs` executa a migração duas vezes
em PostgreSQL isolado, testa escopo por escola, acesso negado, contagem concorrente,
inatividade, pausa, encerramento e validação de sala. `node scripts/check-box-management.mjs`
testa o painel no Chromium com contas sintéticas, filtros, celular, histórico,
registro de jogo e resposta atrasada após logout. Não altera dados de produção.

Entrada pública: `/integro-box/`. Jogos: `/integro-box/jogar.html`.
A página inicial e o Portal da Família apontam para essa área. Não há preço,
assinatura, cobrança ou integração de pagamento nesta versão.

## Atualização de 12/10/2026

O arquivo `Integro_Box_12_Pistas.html` (SHA-256
`b6fbe118bea1d2dc2e071055328eab519d5ee824d519b50a5acb32ddfbe4e9d0`)
acrescenta ao mundo individual do IntegroCraft escadas, portas, móveis,
fornalha, marketplace com moeda virtual, animais e baldes de água/lava.
Salvamentos anteriores continuam usando a mesma chave individual; a expansão
migra o inventário sem apagar as construções. O multiplayer mantém avatares,
movimento e os dez blocos básicos sincronizados. Móveis, animais, economia,
líquidos e interações da expansão ficam no mundo individual; a interface
informa isso e impede alterações locais não sincronizadas dentro de uma sala.

## Aviso de manutenção

`assets/site-update.js` consulta `site-release.json` a cada dez segundos,
ao recuperar conexão e ao voltar à aba. `maintenance:true` apresenta o aviso
animado; `maintenance:false` com uma versão diferente da versão do cliente
salva o progresso individual, sai da sala e recarrega a mesma rota automaticamente.
Não recarrega formulários em edição nem envia dados automaticamente. Campos
em edição permanecem no navegador, sem cópia em armazenamento; o usuário pode
voltar à edição para concluir o salvamento. Formulários que executam `reset`
liberam a recarga; os demais seguem para a nova versão ao navegar/recarregar.

O aviso respeita movimento reduzido, funciona em tela cheia e mantém a espera
quando a conexão cai. A recarga tem proteção contra repetição por versão.
Publicar primeiro o cliente de atualização e o estado de manutenção, depois
os jogos e o cliente com nova versão e `maintenance:false`. Não ligar
manutenção antes de testar e preparar todos os arquivos da versão seguinte.
Abas anteriores à instalação deste mecanismo não podem receber código novo
retroativamente: precisam de uma primeira recarga; dispositivos suspensos ou
offline verificam o estado ao voltar. Nenhuma afirmação de controle instantâneo
de todos os dispositivos deve ser feita.

O HTML enviado pelo usuário foi incorporado como código e imagens separados.
`worlds.js` preserva o pacote Three.js e suas licenças, além dos jogos originais.
Os adaptadores `registerBoxAdapter` acrescentam avatares remotos nos três mundos.

## Acesso

O jogo só carrega os scripts após `auth.getUser()` e a confirmação de um perfil
permitido no banco. Usa a sessão existente da família e retorna ao jogo depois
do login com `?next=integro-box` (destino fixo, sem redirecionamento arbitrário).
As salas repetem a autorização no servidor. Arquivos estáticos não são DRM.
O progresso local é separado por usuário e navegador; não é sincronizado entre
aparelhos. Sair da conta ou trocar a sessão bloqueia o jogo.

## Salas públicas

Aplicar `20261013010000_box_public_rooms.sql` antes de publicar o novo cliente.
A coluna `is_public` nasce falsa; salas já existentes continuam privadas.
No botão **Salas**, escolha Pegue o Ovo, Meu Bairro ou IntegroCraft. A lista
atualiza a cada 10 segundos enquanto o painel está aberto; mostra até 20 salas
com presença recente, ocupação e botão Entrar. Salas cheias continuam visíveis
com botão desativado. Sem salas, o usuário pode criar uma sala pública.

Somente contas autenticadas autorizadas no Box consultam e entram. O aviso
informa que desconhecidos autenticados podem participar; não se promete que
os participantes sejam alunos ou crianças. A listagem não inclui código de
convite, nomes, e-mails ou identificadores de perfis. Apelidos automáticos,
limite de quatro jogadores, remoção pelo criador, bloqueio de reentrada,
validadores do mundo e ausência de chat/voz permanecem. Ao sair, o criador
encerra a sala; todas expiram em quatro horas. Não há mudança retroativa de
visibilidade, criação automática de contas nem alteração de permissões escolares.

Verificação: `node --test tests/box-public.test.mjs tests/integro-box.test.mjs tests/box-usage.test.mjs`;
`node scripts/check-box-public.mjs` testa duas sessões, listagem, entrada,
remoção, filtro de mundo, convite privado e tela móvel em banco isolado.

## Salas por convite

Aplicar uma vez `supabase/migrations/20261012210000_integro_box.sql` no projeto
`kvdfnmwuxmpalsyuytwt`. A migração cria apenas tabelas privadas do jogo e a RPC
`box_room`; não altera os registros escolares, financeiros nem suas permissões.
Pode ser reaplicada. Antes da instalação, o painel avisa que as salas estão em
preparação; os jogos individuais continuam disponíveis.

- Perfil autenticado: responsável, administração, direção, coordenação ou professor.
- Convite aleatório com 12 caracteres hexadecimais. Sem lista pública de salas.
- Até quatro contas diferentes por sala; uma presença por conta.
- Identificação pública: apenas “Explorador 1” a “Explorador 4”.
- Sem texto livre, áudio, vídeo ou contato externo entre jogadores.
- Participantes validam a associação à sala a cada chamada. O criador pode
  remover participantes (sem retorno à mesma sala) ou encerrá-la.
- Sala temporária por quatro horas. Presenças inativas saem da listagem após
  30 segundos; as vagas podem ser usadas por outros convidados.
- Histórico temporário de salas expiradas é eliminado na criação de novas salas,
  após um dia. Não há dados de crianças, nomes, e-mails ou conversas nas tabelas.
- Estados são enviados por RPC a cada 500 ms mais a latência da conexão;
  avatares são interpolados no cliente. Não é um sistema competitivo de baixa
  latência. Há limites de chamadas, criação e tentativas de convite por conta.
- Pegue o Ovo e Meu Bairro: os jogadores se veem e exploram juntos, com desafios,
  inventários, economia virtual e conquistas individuais.
- IntegroCraft: mundo temporário comum com até 2.048 posições alteradas. Edições
  validadas e serializadas no servidor. O mundo individual é restaurado ao sair.
- O jogo requer WebGL e uma conexão estável para as salas.

## Verificação

`node --test tests/integro-box.test.mjs tests/portal-ui.test.mjs tests/home-public.test.mjs`
executa a migração real em PGlite e verifica autenticação, convites, lotação,
isolamento, expulsão, encerramento, limites, blocos, revisões, expiração e o
retorno após login. Verificação visual local com dois navegadores independentes
usa a mesma RPC em um banco de teste isolado, sem contas ou dados de produção.

Ativação exige acesso ao SQL Editor do Supabase. Não comunicar multiplayer em
produção antes de aplicar a migração e conferir a RPC com uma sessão autorizada.

A prova de dois clientes pode ser repetida com Playwright instalado no ambiente:
`node scripts/check-box-browser.mjs`. Opcionalmente, defina `BOX_CHROMIUM_PATH`
para o executável Chromium. O script só serve localhost, injeta contas fictícias
nesse servidor isolado e salva capturas em `/tmp`; não altera dados de produção.

### Pegue o Ovo — expansão de 13/10/2026

O jogo agora usa `egg.js`, compilado dos arquivos em `egg-src`, mantendo os demais jogos do portal. Inclui produção do curral durante jogo ativo, 5 raridades, 4 mutações, rotação persistente dos ninhos, companheiro com habilidade, missões, desafio diário, álbum, 23 espaços, 4 decorações e obstáculos por mundo. Os preços anteriores foram preservados; novos temas custam integros.

A integração `egg-cloud.js` reutiliza a autenticação familiar e as salas existentes. Aplique **depois** das migrações de salas `supabase/migrations/20261013210000_box_egg_expansion.sql` no SQL Editor do projeto oficial. Migração aplicada no projeto oficial em 13/10/2026. Conferência no SQL Editor confirmou RPC, tabelas de salvamento, trocas e corridas, alcance das 12 pistas e execução restrita a usuários autenticados. O portal já entrega os novos arquivos; falta de conexão continua preservando o progresso neste aparelho.

O RPC `box_egg` guarda versões por perfil, limita visitas aos membros presentes na mesma sala e expõe somente criaturas/decoração. Trocas exigem proposta, aceite do destinatário e confirmação final do proponente. Enquanto a troca está pendente, o jogo aguarda; as duas revisões são verificadas e atualizadas em uma transação. Identificadores transferidos não podem ser reimportados pelo antigo dono. As propostas expiram após 2 minutos ou perda de presença. O salvamento utiliza comparação de versão e guarda uma cópia local de recuperação antes de carregar mudanças de outro aparelho. A conta familiar compartilha um progresso, não um progresso por aluno.

Corridas usam início e resultados do servidor, ida ao ninho escolhido e volta à base, velocidade 22 para todos e duração de até 2 minutos. Não dão prêmios monetários. A posição e o progresso individual continuam originados no cliente; isto não é um sistema de economia competitiva com prevenção completa de trapaças.

Validação: `node --test tests/egg-online.test.mjs`, testes existentes de salas, GoSnake e InterDance; testes de regras no projeto original. Inspeção estrutural do HUD e construção dos modelos 3D realizadas sem navegador gráfico.

### Pegue o Ovo — tempestades e acessórios (14/10/2026)

São 13 pistas e 22 acessórios (16 novos, de 850 a 150.000 integros), com modelos próprios, três posições de equipamento e persistência compatível com os saves anteriores. O Santuário das Tempestades tem três ovos, relâmpagos e a Fênix Relâmpago. A migração `20261014220000_box_egg_storm.sql` precisa ser aplicada antes de liberar essa pista no portal: amplia os limites de coordenadas, os mundos permitidos no salvamento/corridas e anuncia as capacidades do servidor. Não altera preços antigos nem tabelas de contas.

Nas corridas online, Empurrar (F) usa alcance curto, recarga de 3 segundos, proteção de 1,25 segundo após impacto e base segura. O botão ocupa o lugar da interação no HUD durante a corrida. `egg-push.js` usa um canal Realtime por corrida com posições de slots anônimos; confirmações, prazo, distância, presença e estado do jogo são checados no cliente. Desconexão, pausa, saída de sala e fim da corrida desativam o contato. Esta mecânica casual mantém a autoridade de movimento no cliente, sem novos prêmios monetários.

Verificação: `node --test tests/egg-push.test.mjs tests/egg-push-ui.test.mjs tests/egg-storm.test.mjs tests/egg-online.test.mjs`. Inclui transporte simulado entre jogadores, física, isolamento, migração idempotente em PGlite, salvamento, compras e integração do HUD em jsdom. Modelos e geometrias inspecionados estruturalmente; não substitui uma partida real em dois aparelhos. Migração aplicada no Supabase oficial em 14/10/2026. Conferência no SQL Editor confirmou limites de posição, salvamento da pista 13 e capacidades atualizadas (três resultados verdadeiros).

Atualização geral acionada em 14/10/2026 com `20261014-egg13-refresh1`, depois da publicação dos acessórios, pista 13 e empurrões. O cliente novo aguarda também a sincronização do Pegue o Ovo após o salvamento local. A recarga é solicitada às abas pelo manifesto existente; não há confirmação individual de cada dispositivo.

### Pegue o Ovo — Cidadela do Tempo (14/10/2026)

A expansão soma 30 acessórios com modelos próprios (52 no total, até 500.000 integros) e oito consumíveis: bolha protetora, pulso congelante, salto duplo, fôlego infinito, velocidade +25%, treino 2×, incubação 2× e produção do curral 2×. A loja tem 76 tipos de itens. Um poder e um boost podem ficar ativos; estoque máximo de dez por item. Os atalhos Q/B e os dois ícones no HUD mostram estoque e segundos restantes. Ativações sem estoque, sem requisito ou com um efeito da categoria em andamento não consomem cargas. As durações avançam só no jogo ativo e são preservadas no save v4, compatível com versões anteriores.

A 14ª pista, Cidadela do Tempo, acrescenta a Coruja Cronos, relógios, ampulhetas e pêndulos. São 42 ovos simultâneos nos 14 ninhos. A velocidade dos guardiões continua no multiplicador de 2× já estabelecido. Poderes/boosts ficam suspensos nas corridas online, incluindo seus relógios; velocidade de corrida permanece 22, e os empurrões alcançam a nova área.

Migração `20261014230000_box_egg_time.sql` aplicada no Supabase oficial em 14/10/2026, depois da pista Tempestade. Expande posições até -676, permite mundo 13 no salvamento e corridas, e anuncia 14 mundos / 52 acessórios / 8 habilidades. O SQL Editor confirmou posições, salvamento da pista 14 e poderes ativados (três resultados verdadeiros).

Validação: 32 testes passaram (19 de regras, inventário, física, HUD, corridas e migrações, cinco de atualização do portal e oito de regressão da expansão), além da inspeção estrutural dos 38 novos modelos e dos 42 ovos. Sem verificação gráfica em aparelhos reais nesta sessão. O manifesto `20261014-egg14-powers1` solicita a atualização automática das abas conectadas após a publicação.

## Aluno no perfil e chat moderado — 15/10/2026

`player-profile.js` usa apenas alunos vinculados em `student_guardians` ao usuário autenticado. Com um vínculo, exibe esse aluno; com vários, pede seleção (persistida neste navegador). Sem vínculo, exibe “Jogador”. Não usa o nome do responsável como fallback. A troca de aluno sai da sala. O progresso continua associado à conta familiar, preservando os saves existentes; esta mudança não cria saves individuais por aluno. A presença global continua enviando apenas seu payload anônimo.

O botão Chat abre um painel recolhível nas salas existentes. A identificação é inicial do nome validado pelo banco + sequência única, persistente por conta/aluno (exemplo A10001). A consulta dos colegas retorna somente código, texto aprovado, ID da mensagem e horário; nomes/IDs escolares não são enviados. A gestão autorizada pode consultar até 100 registros recentes e ocultar mensagens. Diretores consultam somente alunos da sua escola; administradores têm visão geral. A troca de perfil/saída/logout limpa o painel. O texto é renderizado via `textContent`.

### Ativação pendente em produção

1. Aplicar `supabase/migrations/20261015010000_box_moderated_chat.sql` no projeto `kvdfnmwuxmpalsyuytwt` depois das migrações existentes. É idempotente; não altera cadastros, vínculos ou saldos.
2. Publicar a Edge Function `box-chat` com `index.ts` e `moderation.mjs`. Manter verificação JWT habilitada. A função também verifica `auth.getUser()`.
3. Confirmar o segredo existente `OPENAI_API_KEY` no Supabase (sem expor/copiar seu valor). `BOX_CHAT_MODEL` é opcional, padrão `gpt-4.1-mini`. Chaves de serviço/API nunca chegam ao cliente.
4. Validar duas contas de teste na mesma sala: mensagem respeitosa aprovada, telefone/ofensa bloqueados, terceiros sem acesso, erro da API sem entrega. Confirmar análise real antes de anunciar o chat ativo.

Cada tentativa válida reservada é enviada à Moderation API (`omni-moderation-latest`). Se não bloqueada por ela ou pelo filtro de contatos, passa à Responses API com saída estrita e as seis mensagens aprovadas mais recentes da sala. Respostas incompletas, recusas, timeout, chave ausente ou erro de conexão não publicam. `store:false` na Responses API; sem nomes/IDs escolares no contexto enviado. O código não usa recursos de chat/completion no navegador. Referências oficiais: https://developers.openai.com/api/docs/guides/moderation e https://developers.openai.com/api/docs/guides/structured-outputs.

Somente a função com papel de serviço reserva e conclui mensagens, sob bloqueio por usuário. Limite de uma tentativa a cada 3 segundos e dez/minuto; UUID de requisição evita nova análise/publicação da mesma tentativa. A finalização revalida presença/sala e expira após 60 segundos. Tabelas privadas sem acesso direto a anon/authenticated; o RPC público só lê aprovadas ou registra denúncia. Não há mensagens privadas. A moderação automática não garante detecção perfeita e denúncias exigem acompanhamento humano.

Histórico consultável: últimos sete dias, com limpeza de registros antigos nas consultas do chat/painel. Sem tráfego, não há promessa de eliminação no instante exato do vencimento; configurar tarefa de limpeza periódica para uma política de eliminação com prazo estrito. O encerramento/limpeza das salas existentes também remove mensagens por cascata.

Testes sintéticos: `node --test tests/box-chat.test.mjs tests/box-chat-ui.test.mjs tests/box-player-profile.test.mjs tests/box-presence.test.mjs`. Conferem permissões reais em PGlite, isolamento, associação aluno/responsável, envio idempotente, revogação, denúncia, escopo da direção, saídas da API simuladas e UI em jsdom. Não substituem validação da API real nem teste visual em aparelho.
