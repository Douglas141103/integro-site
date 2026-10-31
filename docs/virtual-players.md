# Personagens virtuais do Integro Box

Há 140 personagens cadastrados e identificados como virtuais no mesmo ranking.
A contagem única de **participantes online** inclui somente sessões ativas e
recentemente confirmadas pelo worker. Não são contas de alunos, responsáveis
ou autenticação; seus dados ficam em tabelas privadas separadas.

O worker `egg-bots` reutiliza `EggAdventure`, com entradas automáticas em passos de
50 ms. Inicia com o mesmo save vazio. Treino, guardiões, obstáculos, incubação,
missões, vendas, renda, impostos, compras e equipamentos passam pelos métodos do
jogo. O servidor limita cada execução ao tempo transcorrido, no máximo 15 segundos;
uma interrupção não concede progresso retroativo. Os personagens podem acumular
o mesmo bônus diário de um IntGem após 300 segundos ativos (dia UTC-4), com ledger
idempotente. Não criam pagamentos, não compram Pix e não resgatam dinheiro.

Os treinos duram de 12 a 25 segundos, com intervalos individuais de 45 a 110
segundos. Exploração, tentativas de coleta e pequenas pausas são intercaladas;
nenhum nível mínimo bloqueia a saída da esteira. Atualizações preservam o progresso
e os prazos de treino entre checkpoints.

Nesta versão, as decisões automáticas incluem coleta, treino, missões, criação,
venda e compras com Integros. Trocas entre contas, conversão no mercado de IntGem,
corridas organizadas e compras premium não são automatizados.

As sessões duram de 10 a 35 minutos e as pausas, de 8 a 45 minutos. Cada
personagem descansa à noite em uma janela própria, começando entre 0h e 2h e
retornando entre 6h e 9h45 (America/Boa_Vista). Uma nova sessão pode escolher
outra sala. O tempo offline não avança o jogo nem concede renda, treino ou
recompensa diária; o ranking e os itens conquistados continuam salvos.

24 salas públicas de Pegue o Ovo, 8 de Meu Bairro e 8 de IntegroCraft comportam até quatro participantes cada, com limites de um,
dois ou três virtuais distribuídos entre as salas. A ocupação muda a cada entrada
e saída; salas sem participantes saem da lista. Os personagens usam as vagas livres; jogadores autenticados têm prioridade e podem entrar mesmo
quando uma vaga estiver ocupada por personagem virtual. Todos continuam com o
próprio curral e progresso, como nas salas existentes. Botões de expulsar e fechar
exigem um proprietário humano, inclusive em salas com proprietário nulo.

## Operação

- Build do motor compartilhado: `node integro-box/egg-src/build-bots.mjs`.
- Publicação: Edge Function `egg-bots`, com `index.ts`, `simulation.mjs` e `chat.mjs`.
- Cron `egg-virtual-players`, a cada 15 segundos, chama `private.egg_bots_wake()`.
- Token aleatório armazenado no Vault; somente seu hash fica no controle.
  O endpoint valida o token no RPC restrito a `service_role`. Não expor esse token.
- Checkpoint comprimido dos 140 personagens, salvo atomicamente sob lease;
  concorrência e replay não duplicam recompensas.
- Presença exige sessão ainda aberta, último checkpoint há menos de 45 segundos e controle habilitado.
  Movimentos públicos reproduzem amostras da simulação concluída, com atraso de
  até um ciclo; não revelam checkpoint, token nem IDs de contas.
- Desativar: `update private.egg_bot_control set enabled=false where id;`.
  Isso preserva os itens e o histórico; remove presença e pares virtuais.
- Monitorar: `ticks`, `last_tick` e `lease_until` no controle; respostas do
  `pg_net` para status HTTP, sem consultar cabeçalhos contendo segredo.

Validação: simulação com compras reais do jogo, restauração de estado físico,
limite de tempo, permissões, leases/replay, bônus diário único, presença expirada,
prioridade de vagas, ranking unificado e regressões de presença/equipamentos.

## Nomes e empurrões

Os personagens usam os nomes Jogador 001 a Jogador 140, mantendo o indicador virtual.
O botão Empurrar reconhece a posição recebida do servidor, sem exigir broadcast
de um navegador para o personagem automatizado. O RPC valida sala, presença,
proximidade, altura, recarga de 3 segundos e proteção de 1,25 segundo.

O impacto aceito aparece imediatamente para quem empurrou e é enviado aos demais
pelo estado da sala. O worker aplica a força no motor compartilhado no próximo
ciclo (até 15 segundos), interrompendo a esteira e dando tempo de recuperação.
A fila é consumida no mesmo checkpoint, preservando impactos que chegaram durante
o processamento e ignorando eventos de sessões antigas. O empurrão não concede
moedas ou itens.

## Catálogo completo e chat

Cada personagem alterna entre os 18 jogos. A escolha de sessão percorre todos os
jogos em 18 logins, com deslocamentos iniciais distintos. Jogos individuais usam
partidas próprias (incluindo o modo solo do Descubra!); as salas públicas desta
integração são Pegue o Ovo, Meu Bairro e IntegroCraft. Os saldos e o progresso
ficam separados por jogo. O ranking de Pegue o Ovo recebe apenas seu próprio
saldo; o IntGem diário continua limitado a um por dia e personagem.

O adaptador reaproveita os motores puros existentes. `extract-legacy-bots.mjs`
extrai as classes de FuitCort, InterBall, Bairro, Craft compartilhado e os bancos
de desafios do código legado. Execute esse extrator antes do build ao alterar
`worlds.js` ou `classic-games.js`. Ele recusa dependências de interface. As ações
incluem movimento, colisão, desafios, combate, ritmo e construção. No Craft
público, o modo criativo é o mesmo usado por humanos; robôs apenas adicionam
blocos básicos, sem remover ou substituir alterações humanas.

O chat usa o mesmo histórico, denúncias, revisão administrativa e dupla
moderação antes de publicar. As mensagens são modelos fixos de saudação e
incentivo relacionados ao jogo, com identificação virtual. Não há geração livre,
mensagens privadas, pedidos de dados, links, publicidade, compras ou conversas
entre robôs. Só pode haver mensagem com pessoa presente. Limites: uma tentativa
por sala a cada 2 minutos, uma por personagem a cada 5 minutos, três por sessão e
20 por dia. Após a saudação, apenas cumprimentos humanos já aprovados acionam
resposta; falhas de revisão impedem publicação. Sem chave de moderação, o chat
automático fica desativado e os jogos continuam funcionando.

Validação adicional: `node --test tests/catalog-bots.test.mjs` cobre os 18 motores,
persistência, isolamento dos saldos, rotação dos 140 personagens, protocolo de
checkpoint, moderação, rate limit e denúncias.
