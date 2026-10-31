# Personagens virtuais do Pegue o Ovo

Há 70 personagens cadastrados e identificados como virtuais no mesmo ranking.
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
chat, corridas organizadas e compras premium não são automatizados.

As sessões duram de 10 a 35 minutos e as pausas, de 8 a 45 minutos. Cada
personagem descansa à noite em uma janela própria, começando entre 0h e 2h e
retornando entre 6h e 9h45 (America/Boa_Vista). Uma nova sessão pode escolher
outra sala. O tempo offline não avança o jogo nem concede renda, treino ou
recompensa diária; o ranking e os itens conquistados continuam salvos.

24 salas públicas comportam até quatro participantes cada, com limites de um,
dois ou três virtuais distribuídos entre as salas. A ocupação muda a cada entrada
e saída; salas sem participantes saem da lista. Os personagens usam as vagas livres; jogadores autenticados têm prioridade e podem entrar mesmo
quando uma vaga estiver ocupada por personagem virtual. Todos continuam com o
próprio curral e progresso, como nas salas existentes. Botões de expulsar e fechar
exigem um proprietário humano, inclusive em salas com proprietário nulo.

## Operação

- Build do motor compartilhado: `node integro-box/egg-src/build-bots.mjs`.
- Publicação: Edge Function `egg-bots`, com `index.ts` e `simulation.mjs`.
- Cron `egg-virtual-players`, a cada 15 segundos, chama `private.egg_bots_wake()`.
- Token aleatório armazenado no Vault; somente seu hash fica no controle.
  O endpoint valida o token no RPC restrito a `service_role`. Não expor esse token.
- Checkpoint comprimido dos 70 personagens, salvo atomicamente sob lease;
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
