# Integro Box


## Integro Rush — corrida expressiva, aceleração e logo (rush-speed5)

A análise do vídeo enviado mostrou uma passada curta, com apoio quase contínuo, e pouca diferença entre as pernas durante o salto. A corrida agora usa apoio de 38% do ciclo, intervalos com os dois pés no ar, retorno alto do calcanhar, passada ampliada, braços mais ativos e rotação oposta de tórax/quadril. O salto tem um joelho elevado e a outra perna estendida, com braços assimétricos; as transições e o IK de contato permanecem.

A velocidade cresce continuamente com o tempo da fase: `base × (1 + 0,75 × (1 − exp(−tempo/90)))`. Aos quatro minutos chega a aproximadamente 1,70× o ritmo inicial. A pista, as bordas, o cenário, moedas, obstáculos e buracos usam a integral dessa curva, mantendo a passagem por z=0 no instante da colisão. A cadência dos passos acompanha a velocidade. Velocidade e distância são derivadas do tempo salvo, preservando pausa, recarga e retorno ao checkpoint sem novos campos no salvamento. O HUD mostra o multiplicador real em “RITMO”.

Nova logo ilustrada criada pelo Criar Imagem usando Pegue o Ovo e IntegroCraft como referências de família visual: personagem de boné coral e moletom turquesa, ilha, moedas e tipografia volumétrica. A arte WebP substitui o SVG nas capas do catálogo, página pública e abertura do Rush, com proporção 3:2 e sem corte no celular. O título compacto do HUD segue a mesma paleta.

Validação: 31 testes nas suítes Rush, movimento, arte, GoSnake e atualização do portal. Cobrem o crescimento contínuo da velocidade, integral/distância, alinhamento de obstáculos e buracos, pausa, checkpoints, salvamentos, cadência a 30/60/120 Hz, altura dos pés, amplitude dos braços e assimetria no salto. Poses da geometria real também foram conferidas em renderização offline. A aparência WebGL e o desempenho desta versão em aparelho real não foram testados neste ambiente.

## Integro Rush — movimento e apoio dos pés (rush-motion4)

O rig ganhou quatro controles secundários para boné, franja, capuz e acessórios das costas. As pernas usam IK analítico de dois ossos com direção de dobra do joelho e orientação do tornozelo; o apoio considera a sola durante a entrada do calcanhar e a saída da ponta do pé. Braços e tronco usam FK, rotação contrária de quadril/ombros e passada com cadência adaptada à fase. Pesos do tronco passam por quadril, coluna e peito.

Salto com preparação visual curta, impulso, recolhimento no ápice e extensão para pousar; compressão e recuperação na aterrissagem. A curva, duração e regras de colisão do salto permanecem iguais. Deslize com entrada, acomodação e retorno progressivo. A pose de saída é preservada durante o blend, eliminando o salto instantâneo de pose. A pausa congela também o corpo e os movimentos secundários.

Boné, franja, capuz e costas usam molas amortecidas com integração analítica e limites de movimento. A preferência por movimento reduzido diminui a elasticidade e o balanço extra. Toda a animação é local e visual; não altera dados de progresso, moedas ou regras das fases.

Validação: 27 testes nas suítes de movimento, arte, Rush, GoSnake e atualização do portal. Cobrem pés apoiados, ausência de penetração da sola, normalização dos ossos, poses distintas de salto, transição do deslize, pausa, resposta independente da taxa de quadros (30/60/120 Hz), movimento secundário, persistência e jogabilidade. Conferência offline das poses; validação visual WebGL e desempenho em aparelho real ainda não disponíveis nesta sessão.

## Integro Rush — low poly, cel-shading e HUD (rush-toon3)

A direção visual passa a low poly estilizado com `MeshToonMaterial`, uma rampa compartilhada de quatro níveis de iluminação e contornos por malha invertida no personagem. Luz principal, preenchimento e tone mapping foram ajustados para preservar as cores. O modelo tem boné padrão, cabelo fechado acima do crânio, rosto com olhos planos, jaqueta com capuz e emblema, calça larga e tênis detalhados. Os detalhes rígidos são agrupados por osso: 15 superfícies e 15 contornos no visual padrão, com menos de 16 mil triângulos nas superfícies. A loja continua equipando os mesmos 24 itens e preserva moedas e progresso existentes.

HUD vetorial original em `rush-src/hud.js`: corações, moeda, bússola, relógio, estrelas de checkpoint, ímã, escudo e comandos ilustrados. A paleta acompanha a região. O HUD exibe o nome completo da fase, energia, moedas, capítulo, tempo restante, progresso e duração dos poderes. Controles respeitam áreas seguras, modo paisagem e preferência por movimento reduzido.

Câmera mais próxima, com menos céu e acompanhamento lateral ampliado. Curvatura distante suavizada, folhas de palmeira modeladas, fachadas visíveis nos dois sentidos. O rastro de esferas foi substituído por fita apenas quando um cosmético de rastro estiver equipado.

Validação: 23 testes passaram nas suítes Rush, arte, GoSnake e atualização do portal. Incluem cobertura do couro cabeludo, rampa toon, orçamento geométrico, enquadramento das três faixas em quatro formatos de tela, deslize sob obstáculos, HUD, loja e persistência. Conferência offline das malhas; WebGL e desempenho em aparelho real ainda não verificados nesta sessão, pois o ambiente não oferece o navegador de testes suportado.

## Integro Rush — acabamento cartoon (rush-art2)

Personagem remodelado com superfícies de perfil, seis malhas com skinning e esqueleto de 17 ossos. Cinco animações (corrida, repouso, salto, deslize e impacto) usam AnimationMixer e transições; articulações de joelho/cotovelo, ajuste dos pés ao chão, inclinação nas curvas, elasticidade no salto e compressão ao aterrissar. O modelo inclui rosto, cabelo, capuz, bolso, cordões, costuras, tênis e acessórios. São modelos e texturas originais construídos em código; não são arquivos do Subway Surfers nem ativos extraídos de terceiros.

Atlas de textura 512×512 compartilhado com detalhes de tecido, jeans, pele, cabelo, pedra, madeira, telhados, areia, neve e vegetação. Os cinco ambientes agora alternam construções, mercados, coqueiros, templos, cabanas, pinheiros, rochas vulcânicas e arcos celestes. Cada conjunto decorativo é mesclado com cores por vértice e uma única chamada de desenho. A pista continua instanciada; obstáculos usam reaproveitamento de objetos. O modo automático reduz resolução e distância decorativa após queda sustentada de quadros. A detecção de colisões e a duração das fases permanecem iguais.

Iluminação com preenchimento, luz de contorno, sombra de contato suave e sombra dinâmica no modo automático/detalhado. Curvatura visual apenas após 28 unidades de distância, sem alterar o espaço de colisão. Câmera suavizada, pequenos efeitos de aterrissagem e partículas para moedas, poeira, escudo, ímã e pontos de retorno. A preferência por movimento reduzido diminui os efeitos e desativa os balanços.

A loja mostra miniaturas renderizadas dos 24 acessórios e o personagem equipado em uma prévia 3D giratória. Reutiliza o mesmo contexto WebGL do jogo; sair da loja devolve o canvas à corrida. Modelos, geometrias mescladas e render targets temporários têm descarte explícito. Moedas, fases e equipamentos existentes permanecem no mesmo salvamento por conta.

Validação: 20 testes nas suítes `box-rush-art`, `box-rush`, `box-gosnake` e `site-update`: regras das 15 fases, pesos do esqueleto, orientação das superfícies, poses, passagem sob obstáculo, cenários agrupados, ajuste gráfico, descarte de recursos, loja, retorno ao jogo, salvamentos e autenticação. Uma renderização offline das malhas permitiu conferir as poses; não substitui o teste visual WebGL e de desempenho em aparelho real, indisponível nesta sessão. A migração pendente do relatório de uso continua independente desta atualização visual.


## Integro Rush — 15/10/2026 (rush1)

Concluído o início de `rush-src/rules.mjs` encontrado na branch local `codex/integro-rush`. Jogo original de corrida em três faixas, com 15 fases de quatro minutos: Caribe, ruínas, neve, lava e ilhas do céu. Há saltos, deslizes, três vidas, pontos de retorno a cada minuto, ímã, escudo, estrelas e 24 acessórios visuais comprados apenas com moedas virtuais. O mapa desbloqueia as fases em sequência. Uma tentativa conserva moedas coletadas ao voltar ao ponto de retorno, sem permitir recolher a mesma moeda duas vezes.

A entrada está no catálogo autenticado e na apresentação pública. O cenário Three.js usa peças instanciadas para a pista, geometria compartilhada e três níveis gráficos. Teclado, gestos e botões grandes funcionam com as mesmas regras. O jogo pausa ao ocultar a página ou perder foco, sai da sala online antes de iniciar e bloqueia reabertura após logout. A partida, moedas e acessórios ficam na chave `integro-rush-v1` do `BoxStorage`, separados por conta neste navegador. Não há sincronização entre aparelhos. A atualização do portal salva a corrida antes de recarregar.

Reconstrução: `cd integro-box/rush-src && npm ci && npm run build`. A licença do Three.js está preservada no bundle. Nenhuma dependência é carregada de CDN em tempo de execução.

A migração `20261015170000_box_rush_usage.sql` acrescenta `rush` ao registro de uso sem mudar permissões. Foi validada em banco isolado; a aplicação no banco de produção ainda precisa ser confirmada. Se o servidor ainda não aceitar `rush`, o cliente encerra a sessão anterior e sinaliza indisponibilidade, sem atribuir o tempo da corrida ao jogo anterior. O funcionamento individual não depende dessa migração.

Verificação: `node --test tests/box-rush.test.mjs tests/box-gosnake.test.mjs tests/site-update.test.mjs` — 15 testes, todos aprovados. Cobrem passagem pelas 15 pistas, colisões, poderes, retorno sem duplicar moedas, loja, persistência, integração do catálogo, pausa, gestos, logout concorrente, falha de WebGL, montagem dos cinco ambientes e 24 acessórios, migração e escopo da gestão. A renderização WebGL real, o desempenho em celular e a aparência visual ainda não foram conferidos em navegador nesta sessão.


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

### Ativado em produção

Migração aplicada no projeto `kvdfnmwuxmpalsyuytwt`; Edge Function `box-chat` publicada com `index.ts` e `moderation.mjs`, mantendo verificação JWT habilitada e validação adicional de `auth.getUser()`. Confirmada a presença do segredo `OPENAI_API_KEY` sem consultar seu valor. Modelo contextual padrão: `gpt-4.1-mini`.

Validação real em sala privada com uma conta autenticada: “Vamos jogar juntos!” foi aprovada e exibida como `J10000`; pedido de telefone para conversar fora do jogo foi bloqueado e não apareceu no histórico. A conta usada não tinha aluno vinculado, portanto exibiu “Jogador”, sem nome do responsável. Isolamento entre contas, vínculos de alunos e falhas da API foram validados por testes automatizados; não houve teste real com duas contas simultâneas. O navegador remoto não disponibilizou WebGL, limitando a validação visual do jogo 3D, mas presença, sala e chat funcionaram.

Release `20261015-chat2` corrige também o aviso de privacidade atualizado por `usage.js`, para informar moderação e histórico de sete dias em vez de afirmar que conversas não são gravadas.

Cada tentativa válida reservada é enviada à Moderation API (`omni-moderation-latest`). Se não bloqueada por ela ou pelo filtro de contatos, passa à Responses API com saída estrita e as seis mensagens aprovadas mais recentes da sala. Respostas incompletas, recusas, timeout, chave ausente ou erro de conexão não publicam. `store:false` na Responses API; sem nomes/IDs escolares no contexto enviado. O código não usa recursos de chat/completion no navegador. Referências oficiais: https://developers.openai.com/api/docs/guides/moderation e https://developers.openai.com/api/docs/guides/structured-outputs.

Somente a função com papel de serviço reserva e conclui mensagens, sob bloqueio por usuário. Limite de uma tentativa a cada 3 segundos e dez/minuto; UUID de requisição evita nova análise/publicação da mesma tentativa. A finalização revalida presença/sala e expira após 60 segundos. Tabelas privadas sem acesso direto a anon/authenticated; o RPC público só lê aprovadas ou registra denúncia. Não há mensagens privadas. A moderação automática não garante detecção perfeita e denúncias exigem acompanhamento humano.

Histórico consultável: últimos sete dias, com limpeza de registros antigos nas consultas do chat/painel. Sem tráfego, não há promessa de eliminação no instante exato do vencimento; configurar tarefa de limpeza periódica para uma política de eliminação com prazo estrito. O encerramento/limpeza das salas existentes também remove mensagens por cascata.

Testes sintéticos: `node --test tests/box-chat.test.mjs tests/box-chat-ui.test.mjs tests/box-player-profile.test.mjs tests/box-presence.test.mjs`. Conferem permissões reais em PGlite, isolamento, associação aluno/responsável, envio idempotente, revogação, denúncia, escopo da direção, saídas da API simuladas e UI em jsdom. Não substituem validação da API real nem teste visual em aparelho.


## Contador, reações e posição do chat — 15/10/2026

Release `20261015-chat6`: o balão mostra um contador vermelho com números brancos das novas mensagens aprovadas de colegas recebidas enquanto o painel está fechado. Abrir o chat zera o contador. O histórico existente na entrada, mensagens próprias e mudanças nas reações não aumentam o contador; sair/trocar de sala ou aluno limpa seu estado. A consulta a cada quatro segundos agora ocorre também com o painel recolhido, somente com a página visível e dentro de uma sala.

Cada mensagem aprovada tem 👍, ⭐, 🎆 e 😊, com contagem por reação e destaque das escolhas do aluno. Tocar novamente retira a escolha. As quatro opções são fixas, sem texto livre nem chamada adicional à IA. A migração `20261015033000_box_chat_reactions.sql` foi aplicada em produção: tabela privada com RLS, chave única por mensagem/aluno/reação e RPC autenticado que revalida vínculo e presença na sala. Mensagens pendentes, ocultas, expiradas ou de outra sala não aceitam reações. O envio é idempotente e só confirma a reação após resposta do servidor.

É possível arrastar o balão ou o cabeçalho do painel com mouse ou toque, sem abrir o chat ao terminar um arraste. A posição fica salva neste navegador; abertura, redimensionamento e tela cheia mantêm o painel nos limites da tela. Alternativa com teclado: focar o balão e usar Alt + setas.

Validação: testes de banco cobrem contagem entre dois usuários, idempotência, retirada, isolamento, vínculo, RLS e limpeza; testes de interface cobrem mensagens não lidas, quatro reações, falha de rede, arrastar, limites, persistência e distinção entre clique e arraste.


## Reforço contra variantes de palavrões — 15/10/2026

Após relato de passagem da palavra “Ku”, a função `box-chat` recebeu uma camada determinística de bloqueio por palavra completa, independente da classificação da IA. Normaliza acentos, caracteres invisíveis, substituições frequentes de letras por números e alguns caracteres visualmente semelhantes; reconhece separadores e letras repetidas. Inclui `ku`, `k.u`, `k u`, `k_u` e outros palavrões/abreviações frequentes. Não é uma lista exaustiva de evasões.

A instrução contextual passou a proibir explicitamente gírias vulgares isoladas e variantes fonéticas, mesmo sem alvo, preservando nomes/palavras comuns como cubo, cuidado e Kuromi. O texto original e uma representação normalizada são enviados juntos ao classificador; nenhum deles é tratado como instrução. Modelos mantidos: `omni-moderation-latest` e `gpt-4.1-mini` (padrão do parâmetro `BOX_CHAT_MODEL`). Falhas continuam sem publicação.

A atualização foi publicada diretamente na Edge Function, sem mudança do frontend. Testes automatizados cobrem variantes, palavras comuns e um fornecedor simulado permissivo. Teste real em sala privada confirmou o bloqueio de “Ku” e “k.u” sem entrega no histórico; “Vamos montar um cubo!” foi aprovada. A consulta corretiva por variantes isoladas já aprovadas encontrou zero ocorrências; não houve alteração de mensagens antigas por essa consulta.


## IntegroCraft — HUD e alimentos (15/10/2026)

Versão `20261015-craft3`: controles circulares translúcidos, barra de seis atalhos sem molduras pesadas (o item selecionado sempre aparece), minimapa circular e dimensões próprias para retrato/paisagem. Campo de visão vertical 100° em retrato e 78° em paisagem: blocos visualmente menores, sem alterar a grade, construções ou colisões dos mundos salvos. Texturas de 32 px com contraste suave, filtragem e antialiasing; pixel ratio limitado a 2.

No mundo individual, mirar em animal adulto transforma Quebrar em Caçar (tecla E): vaca/porco dão 3 carnes, boi 4, ovelha/capivara 2. O animal sai do mundo e a carne vai diretamente à mochila, sem sangue. Filhotes, alcance acima de 4 blocos e mochila cheia não permitem coleta. Carne crua (64) exige fornalha: 1 carne + 1 madeira, 12 s, produz 1 carne assada (65). Usar carne assada recupera 55 de alimento e 20 de vida. Animais removidos, carne e cozimento persistem no salvamento. Salas compartilhadas continuam no protocolo de blocos básicos, sem animais.

Validação: `node tests/box-craft-food.cjs`, `node tests/box-craft-adventure.cjs`, `node tests/box-craft-hud.cjs` e bundle esbuild. O teste de HUD usa Three/raycast real com renderizador substituído; não houve conferência visual/WebGL em navegador nesta sessão.


## IntegroCraft — blocos de meia unidade e detalhes (15/10/2026)

Versão `20261015-craft4`: no mundo individual, materiais básicos e lã são colocados em uma grade de 0,5 unidade em cada eixo. Geometria, mira e colisões usam o tamanho real reduzido. Ao minerar um bloco antigo, somente uma das oito peças é retirada; as outras sete permanecem no local. Cada peça usa/retorna uma unidade na mochila. Preencher as oito partes com o mesmo material reúne novamente a célula, permitindo as interações existentes. Móveis, estações, terras preparadas e minérios preservam suas regras de tamanho/interação. O campo de visão voltou para 88° retrato / 74° paisagem, pois a redução agora está nas peças.

`smallCells` é um campo adicional do save v2 (até 4.000 células detalhadas), validado na leitura e preservado junto das construções anteriores. Líquidos e pistões respeitam as construções pequenas. As salas online mantêm o protocolo anterior de blocos inteiros, com as melhorias visuais. Não houve migração de banco.

Faces expostas do terreno usam quatro quadrados menores; árvores naturais têm troncos de nove faces e folhagem arredondada, com colisões ajustadas. Modelos de móveis/animais têm arestas suaves. Grama e flores são agrupadas por chunk em uma malha decorativa sem interferir na mira. Construções existentes de madeira/folhas mantêm seus formatos.

Validação: `box-craft-detail.cjs` verifica dimensões reais de 0,5 unidade e raycast, colisões, alcance, inventário, mineração parcial, salvamento, reunião das peças, líquidos e compatibilidade com saves antigos. Suítes de HUD, aventuras, alimentos e atualização também verificadas. Renderização WebGL visual não disponível nesta sessão.


## IntegroCraft — água e lava nos canais pequenos (15/10/2026)

Versão `20261015-craft5`: baldes usam a face da mira na grade de meia unidade, permitindo despejar em canais estreitos e nas laterais de bordas sem chão imediatamente abaixo. Água e lava descem por gravidade e se espalham ao encontrar apoio (respectivamente até 8 e 4 passos horizontais de meia unidade), com limite de 2.048 células de fluxo e 64 novas fontes. O fluxo é recalculado ao usar o balde e a cada segundo, preservando os blocos pequenos das margens e do fundo. As fontes antigas de bloco inteiro continuam compatíveis.

Fontes novas são salvas em `fineSources`, separadas dos sólidos; a corrente é derivada novamente ao carregar. O balde vazio recolhe a fonte associada à corrente na mira e drena sua queda, devolvendo um balde cheio uma única vez. Água e lava em contato solidificam em pedra. A malha por chunk une os segmentos verticais, com textura de movimento para água e lava; a mira reconhece o fluxo. Água pequena participa da irrigação/nado e lava mantém o retorno seguro ao início. Recursos disponíveis no mundo individual.

Validação: `node tests/box-craft-waterfalls.cjs` cobre os dois líquidos, canais de 0,5 unidade, queda sem apoio, preservação dos sólidos, mira, salvamento, coleta/drenagem, alteração de caminho, inventário, alcance, mistura, entradas inválidas e limites. Suítes anteriores de blocos pequenos, aventura e HUD mantidas. Conferência visual/WebGL no navegador não disponível nesta sessão.


### Água contínua até as barreiras do terreno

Versão `20261015-craft6`: removidos os limites de distância e quantidade de células que interrompiam a água, tanto na grade de meia unidade quanto nas fontes antigas. A busca visita cada posição acessível uma vez e termina nas barreiras ou nos limites físicos do mapa. Continua priorizando quedas, não sobe paredes, recalcula caminhos quando o terreno muda e drena trechos desconectados da fonte. A lava mantém seu alcance horizontal anterior. O desenho do fluxo consulta apenas as células do próprio trecho do mapa, evitando varrer toda a corrente para cada malha.

Validação: reservatório com 3.600 células (acima do limite antigo de 2.048), canto distante, barreiras sólidas, abertura de canal longo com queda, bloqueio com drenagem, retirada da fonte e compatibilidade com fontes antigas. Testes anteriores de cachoeiras, blocos pequenos, aventura e HUD. Sem conferência visual WebGL nesta sessão.
