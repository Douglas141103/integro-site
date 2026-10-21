# Chamada direta no Portal Família

Modo ativo: `window.INTEGRO_ONLINE.mode = 'direct'`. O computador do professor é o anfitrião da chamada, não um servidor central de vídeo. O transporte LiveKit anterior fica disponível no código, mas não é usado nesse modo.

## Uso

1. O professor entra no portal, abre Aulas online, cria uma turma e matricula até quatro alunos.
2. Agenda um encontro e clica em Abrir sala, dentro do período permitido.
3. A família entra na própria conta, seleciona o aluno e clica em Entrar na aula.
4. Cada pessoa liga câmera/microfone quando desejar. Tela é compartilhada somente pelo professor, em navegadores compatíveis.
5. Encerrar aula para todos remove as presenças e impede reentrada. Sair da sala como professor interrompe a chamada, mas permite que ele volte ao mesmo encontro.

Use fones e mantenha a aba aberta e o computador acordado. Outra aba do mesmo participante é recusada; após uma queda, aguarde até 45 segundos para liberar a vaga.

## Arquitetura e limites

`aulas-online/direct-room.mjs` usa RTCPeerConnection, com conexões entre cada par de participantes. Máximo de cinco pessoas, incluindo professor; vídeo inicial de 640×360, 15 quadros/s. STUN público Cloudflare e Google auxilia a descoberta de conexão; não há TURN, túnel, aplicativo adicional, alteração de roteador ou nova assinatura. Áudio/vídeo ficam entre os navegadores e não são gravados automaticamente.

Algumas combinações de NAT/CGNAT e redes restritas não permitem comunicação direta. É necessário testar professor + aluno em redes diferentes (por exemplo, aluno em dados móveis), depois quatro alunos, antes de uso regular. Teste local com cinco participantes não comprova conectividade externa nem capacidade de upload. O serviço Supabase existente continua sujeito às cotas de seu plano.

## Autorização

`supabase/online-direct.sql`, migração remota `online_direct_browser_calls`, adiciona duas tabelas privadas e RPC `online_call`. O banco revalida perfil ativo, papel do professor, matrícula e vínculo da família. Remetente e identidade são atribuídos no servidor; payloads do navegador não definem papéis. Serialização por aula evita vagas duplicadas. RLS e revogação de privilégios impedem acesso direto às tabelas. Somente o wrapper SECURITY INVOKER é exposto, com função privada autorizadora e search_path vazio.

Descrições de conexão têm limite de 64 KiB e 24 envios por participante a cada 30 segundos. Descrições anteriores a dois minutos são removidas na próxima solicitação; saída/encerramento elimina os registros vinculados. A presença expira após 45 segundos; o navegador encerra mídia após 30 segundos sem confirmação do portal. Remoções de autorização são refletidas nas consultas seguintes. A agenda, entregas privadas e devolutivas usam as regras existentes.

O auditor relata RLS sem políticas nas tabelas privadas, intencional para negar acesso direto: https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy . Não foram introduzidos avisos de funções públicas SECURITY DEFINER para esta modalidade; os avisos dos demais módulos não foram alterados.

## Verificações

`node --test tests/online-direct.test.mjs tests/online-classrooms.test.mjs` cobre vínculo familiar, papéis, limite, duplicidade, remetentes, isolamento de mensagens, tamanho/frequência, revogação, expiração, encerramento e ausência de acesso direto. Também cobre permissão de câmera que chega após a saída e associação correta dos canais de mídia de quem recebe a chamada.

Teste local no navegador: cinco participantes sintéticos, áudio e câmera bidirecionais em todos os pares e tela do professor recebida pelos quatro alunos. Nenhuma câmera/microfone real usado. Validação externa com professor e aluno continua pendente.

## Referências

- https://webrtc.org/getting-started/peer-connections
- https://webrtc.org/getting-started/turn-server
- https://developers.cloudflare.com/realtime/turn/faq/
- https://supabase.com/docs/guides/database/functions
