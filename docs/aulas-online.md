# Aulas online INTEGRO

Módulo em `/aulas-online/`, integrado aos três portais. Usa a sessão Supabase existente. A turma admite até quatro matrículas; o servidor de vídeo admite cinco participantes, incluindo o professor. Uma segunda aba do mesmo aluno usa a mesma identidade de vídeo. O computador atende uma sala simultânea nesta configuração inicial.

## O que foi implementado

- Cadastro de turmas por administrador ou professor, matrícula dos alunos vinculados e agendamento de encontros.
- Professor abre a sala no período de 30 minutos antes do início até 30 minutos após o fim. Alunos só recebem acesso após a abertura. Encerrar remove todos e impede reentrada.
- Vídeo e áudio com LiveKit nativo para Windows, sem Docker ou virtualização. Câmera e microfone começam desligados. Professor pode compartilhar a tela.
- Entregas de até dez fotos/PDFs por envio, com até 10 MB por arquivo. Armazenamento privado no Supabase, por aluno e encontro.
- Download das fotos em ZIP, correção manual no ChatGPT e devolutiva em texto e/ou anexos. Rascunhos ficam privados até a devolução. Não há integração de IA ou gravação automática.
- Não foram criadas turmas nem feitas matrículas de alunos reais automaticamente.

## Instalação neste computador

A pasta de execução está em `outputs/Servidor de Aulas Integro` desta conversa. Ela contém LiveKit Server 1.13.10, Node HTTP gateway, configuração e controles de início/parada. `runtime/server.json` e `runtime/livekit.yaml` contêm chaves locais; não enviar esses arquivos ao GitHub nem compartilhar a pasta runtime. Nenhuma chave Supabase de serviço é necessária.

O domínio principal continua no GitHub Pages. O computador hospeda o transporte de áudio e vídeo e a autorização para entrar na sala; agenda, vínculos e arquivos permanecem no Supabase existente. Isso preserva o acesso aos materiais quando o computador está desligado.

Inicie com `Iniciar-Aulas.ps1` e pare com `Parar-Aulas.ps1`. O teste local responde em `http://127.0.0.1:8787/api/health`. Os dois serviços iniciam em segundo plano. O indicador `ok:true` verifica também a comunicação com o LiveKit.

O modo local ainda não permite alunos externos. O servidor LiveKit no Windows não oferece controle automático de capacidade por CPU; o gateway limita a uma sala simultânea e é necessário um teste real antes das aulas.

## Ativação para alunos externos

1. Reservar o IPv4 deste computador no roteador (observado: `192.168.0.10`). Conectar por cabo para reduzir instabilidade.
2. Conferir no ARRIS se o IPv4 WAN é o mesmo mostrado por `https://api.ipify.org`. Se o WAN for privado ou CGNAT, solicitar IPv4 público ao provedor ou escolher uma infraestrutura externa com o usuário.
3. No Registro.br, criar o registro A `aulas.institutointegro.com.br` com o IPv4 público da conexão. O IP pode mudar; definir IP fixo ou atualização de DNS antes de operação regular.
4. Encaminhar no roteador para o computador: TCP 80 e 443 (HTTPS), TCP 7881 (alternativa de mídia) e UDP 7882 e 3478 (mídia/TURN). Não expor 7880 ou 8787 diretamente. Os caminhos de API e sinalização são publicados via Caddy/HTTPS.
5. Após resolver eventual CGNAT, executar `Configurar-Acesso-Externo.ps1 -PublicHost aulas.institutointegro.com.br -PublicIp IP_PUBLICO_ATUAL -WanIp IP_WAN_DO_ROTEADOR` como administrador. O script recusa endereços WAN privados/CGNAT e divergência entre WAN e IPv4 público; confere o DNS, configura as portas necessárias do firewall e reinicia os serviços. O Caddy solicita certificado de autoridade pública; não usar certificado autoassinado.
6. Conferir `https://aulas.institutointegro.com.br/api/health` e fazer aula de teste com professor e quatro participantes, incluindo um celular em dados móveis. Verificar câmera, áudio, compartilhamento, queda/reconexão e encerramento. Redes que bloqueiam UDP e TCP não padrão podem exigir TURN/TLS adicional; essa opção ainda não foi configurada.
7. Depois da validação externa, preencher `serverUrl` em `aulas-online/config.js` com a URL HTTPS e publicar. Enquanto estiver vazio, o portal informa que o vídeo externo está em preparação.
8. Definir início com o Windows, energia, horário de operação e teste de upload. A máquina precisa estar ligada e conectada durante a aula. A inicialização automática ainda não foi ativada; o script manual é o controle atual.

Atualização de 21/10/2026: o registro A `aulas.institutointegro.com.br` foi criado no Registro.br e confirmado tanto no DNS autoritativo quanto em resolvedor público. O computador foi preparado com Caddy e as regras específicas de firewall listadas acima. Após o login no ARRIS, o painel WAN mostrou `100.64.21.188`, enquanto a saída pública era `177.180.60.5`: diagnóstico de CGNAT. O encaminhamento de portas não foi aplicado, pois sozinho não resolve o NAT da operadora. Há IPv6 global na conexão, mas ainda não foi implementado nem validado um caminho que atenda também alunos com IPv4. É necessário solicitar IPv4 público fora do CGNAT à operadora ou escolher um relay externo, avaliando acesso, custo e capacidade antes de contratar. O Caddy foi pausado para evitar repetidas tentativas de emissão de certificado enquanto a entrada está bloqueada. O certificado e a aula externa continuam pendentes; a URL de vídeo do portal permanece desativada. Nenhum plano pago, política de energia ou rotina automática foi criado.

## Dados e autorização

O SQL aplicado está em `supabase/online-classrooms.sql`; a migração remota chama-se `online_classrooms_four_students`. Quatro tabelas no schema privado usam RLS sem políticas de acesso direto; os privilégios de tabela foram revogados. O wrapper público é SECURITY INVOKER e só usuários autenticados podem executá-lo. As regras ficam na função privada, que verifica o perfil ativo, o professor e o vínculo da família a cada operação. As fotos usam o bucket privado `online-classwork`, sem URLs públicas.

Validações: testes de isolamento, limite de matrículas, papéis, início/fim, sigilo de rascunhos, permissões e duração dos tokens. Também houve teste com cinco clientes reais do SDK RTC conectados ao LiveKit local, bloqueio da sexta conexão e recepção de quadro de vídeo sintético. Isso não substitui o teste pela internet nem mede capacidade de upload.

## Fontes oficiais

- https://github.com/livekit/livekit — servidor nativo Windows.
- https://docs.livekit.io/transport/self-hosting/deployment/ — domínio, HTTPS e conectividade.
- https://docs.livekit.io/transport/self-hosting/ports-firewall/ — portas.
- https://docs.livekit.io/frontends/reference/tokens-grants/ — permissões de entrada.
- https://supabase.com/docs/guides/auth/row-level-security — proteção dos dados.

## 22/10/2026 — Controles de participantes e sala responsiva

A configuração atual usa `mode: 'direct'`: WebRTC entre navegadores, sinalização autenticada pela função `online_call` e os arquivos no Supabase. O gateway LiveKit descrito acima permanece como alternativa desativada; os novos controles são do modo direto ativo.

O professor conectado à própria aula pode silenciar, liberar o microfone e retirar alunos pelo painel **Pessoas**. O servidor verifica novamente a conta, o vínculo à aula, a sessão de origem e o participante de destino. Alunos não podem aplicar moderação; outro professor não pode moderar esta sala. Silenciar bloqueia a captura no cliente e o áudio recebido pelos demais clientes atualizados. Liberar nunca ativa o microfone remotamente: o aluno precisa clicar para falar. O estado é propagado na consulta periódica (normalmente até dois segundos). Clientes anteriores ao protocolo 3 precisam atualizar a página para aceitar os controles de microfone.

Retirar revoga apenas o identificador daquela conexão e os sinais associados. Não altera matrícula nem encerra a aula. **Entrar novamente** exige uma nova admissão normal e recebe outro identificador; uma aba antiga não consegue encerrar a sessão nova. O controle não é um banimento. Não foram silenciados ou retirados usuários reais durante a implantação.

A sala concentra câmera, microfone, tela, caderno e saída numa barra persistente. Quadro, chat e participantes preservam os vídeos em miniatura; controles secundários e encerramento geral ficam em **Áudio e opções da sala**. A interface usa ícones com rótulos, estados acessíveis, grades responsivas e confirmação para retirada/encerramento.

Migração: `20261022040914_online_room_moderation.sql`; estrutura de instalação atualizada em `supabase/online-direct.sql`. Testes: `node --test --test-concurrency=1 tests/online-direct.test.mjs tests/online-room-hud.test.mjs tests/online-collaboration.test.mjs tests/online-classrooms.test.mjs`. Cobrem autorização, retirada/reentrada, captura de áudio, permissão pendente, dois aparelhos do professor e navegação entre ferramentas. A conferência visual pelo navegador de prévia foi bloqueada pela política do ambiente; não foi possível realizar chamada audiovisual entre aparelhos reais nesta execução.

Referências de interação consultadas:
- Google Meet: https://support.google.com/meet/answer/7501121
- Zoom: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065566
