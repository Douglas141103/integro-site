# Pesquisa de satisfação — Escola Etelvina Pereira Braga

## Endereços

- Formulário público: `https://www.institutointegro.com.br/pesquisa-satisfacao/`
- Painel completo: `https://www.institutointegro.com.br/pesquisa-satisfacao/resultados.html`
- Resumo no portal: `Portal do Parceiro > Gestão Escolar > Pesquisa de satisfação`
- QR Code: `assets/pesquisa-satisfacao/qr-etelvina.svg`

O formulário público é independente do login e não exibe atalhos do Portal Integro. O painel e o resumo exigem uma sessão com perfil `integro_admin`, `diretor` ou `coordenacao` vinculado à escola da pesquisa.

## Ativação do banco

Execute no SQL Editor do Supabase:

```text
supabase/migrations/20260807_pesquisa_satisfacao_escolar.sql
```

A migração procura em `public.schools` um registro cujo nome contenha `Etelvina Pereira Braga`. Se não encontrar, a transação é cancelada sem deixar tabelas parcialmente configuradas.

A migração também habilita o `pg_cron` e agenda a limpeza horária dos dados identificáveis. Se o projeto impedir a ativação pelo SQL, habilite **Integrations > Cron** no Supabase e execute a migração novamente.

Depois de executar a migração, confira:

1. O formulário carrega as 15 perguntas.
2. Uma resposta de teste aparece no painel.
3. O mesmo telefone, digitado com outra formatação, é recusado.
4. Um perfil de professor ou de outra escola não abre os resultados.
5. Depois do teste, a direção pode anular a resposta no próprio painel, preservando a auditoria.

## Questionário e cálculo

São três perguntas em cada uma das cinco áreas:

- Gestão escolar
- Professores
- Infraestrutura
- Merenda escolar
- Secretaria

Escala:

- `1` — Insatisfeito(a)
- `2` — Parcialmente satisfeito(a)
- `3` — Satisfeito(a)
- `0` — Não sei avaliar; contado separadamente e excluído da média

O índice de 0 a 100 é calculado por:

```text
((média - 1) / 2) * 100
```

O índice geral é a média dos cinco índices de área. O painel também mostra a distribuição das três respostas para que a média não esconda insatisfações.

## Controle de duplicidade

O telefone é normalizado no servidor. Por isso, estes formatos são tratados como o mesmo número:

```text
(92) 99999-9999
92999999999
+55 92 99999-9999
```

Uma restrição única no banco usa um fingerprint SHA-256 com salt privado para bloquear duas respostas do mesmo telefone na edição `etelvina-familias-2026`, inclusive se os envios ocorrerem ao mesmo tempo. O fingerprint não permite recuperar o número e permanece após a anonimização para preservar a regra de uma resposta por edição. Uma edição futura poderá aceitar novamente o telefone.

Esse controle e o campo invisível antirrobô evitam repetição e automações simples, mas não comprovam a propriedade do telefone nem substituem limitação por IP. Uma proteção mais forte exigiria Turnstile/rate limit em uma Edge Function, OTP por SMS/WhatsApp ou conferência com um cadastro completo de responsáveis.

## Privacidade

- Nome, telefone e comentário ficam no schema `private`, sem acesso direto pela API.
- O formulário público só pode chamar a função controlada de envio.
- As notas e os identificadores ficam em tabelas separadas.
- Direção e administrador veem o nome para controle e o telefone parcialmente oculto; a coordenação recebe a identificação protegida.
- O resumo incorporado no Portal Gestão usa uma RPC sem nome, telefone, comentário ou autorização de contato.
- Comentários são apresentados sem nome e telefone.
- A análise automatizada recebe somente indicadores quantitativos agregados; nome, telefone,
  comentário, vínculo, autorização de contato, nome da escola e identificadores internos não são enviados ao modelo.
- O comentário bruto permanece somente no painel protegido da gestão autorizada e não é analisado pela IA nesta versão.
  O formulário também orienta a família a não escrever nomes nem dados sensíveis no campo livre.
- A análise por IA é apenas apoio à decisão da gestão e não pode ser usada para decisões automáticas
  contra alunos, familiares ou profissionais.
- O CSV neutraliza conteúdo que poderia ser interpretado como fórmula por programas de planilha.
- Nenhuma chave secreta do Supabase fica no navegador ou no GitHub.
- A versão do aviso de privacidade e o momento da concordância são registrados.
- O envio valida no servidor que a versão do aviso aceita é exatamente a versão exibida; páginas antigas não conseguem registrar respostas sob uma versão nova.
- Dúvidas, correções e solicitações das famílias são direcionadas à secretaria da escola.

O prazo configurado para retenção da identificação é de 180 dias após o encerramento. Um job horário do Supabase Cron remove automaticamente nome, telefone e comentário quando o prazo vence. A edição é arquivada, não pode ser reaberta, e ficam somente as notas anônimas e o fingerprint não reversível necessário à deduplicação. A ação é registrada na auditoria.

## Divulgação

Para impressão, mantenha o QR Code com fundo branco, margem livre e tamanho mínimo de 4 × 4 cm. O link escrito deve acompanhar o código para atender quem não conseguir escaneá-lo.

## Operação do painel

O painel permite:

- filtrar por ano e turno;
- comparar as cinco áreas;
- consultar a distribuição por pergunta;
- ver prioridades e comentários;
- acompanhar respostas por dia;
- exportar CSV com os filtros atuais;
- imprimir ou salvar a apuração em PDF;
- incluir no PDF os gráficos, a leitura estatística, as limitações metodológicas e, quando disponível,
  a análise gerencial produzida por IA;
- copiar o link e baixar o QR Code;
- encerrar ou reabrir a edição com motivo, para direção e administrador;
- anular uma participação incorreta com justificativa, liberando o telefone para um novo envio sem apagar o histórico.

Atualizações, abertura, fechamento, consultas e anulações relevantes ficam registradas na trilha de auditoria do banco.
