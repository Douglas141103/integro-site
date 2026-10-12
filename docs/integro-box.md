# Integro Box

Entrada pública: `/integro-box/`. Jogos: `/integro-box/jogar.html`.
A página inicial e o Portal da Família apontam para essa área. Não há preço,
assinatura, cobrança ou integração de pagamento nesta versão.

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
