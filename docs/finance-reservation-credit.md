# Reserva / pré-matrícula 2027

O pacote de R$ 50 é um recebimento avulso (`servico`), separado da mensalidade. Selecione o aluno cadastrado como `pre_matricula` na frente de caixa e esse pacote. Um recibo confirmado cria o crédito; gerar um QR ou uma cobrança pendente não cria crédito.

Após a ativação do aluno (`matriculado`, `active=true`), a próxima mensalidade recebe R$ 50 de abatimento automaticamente. A quantidade da primeira mensalidade deve ser 1. Outros descontos já informados no caixa são somados ao abatimento, e o recibo identifica a reserva. O registro financeiro dessa mensalidade contém somente o dinheiro recebido naquele momento: R$ 50 de reserva + R$ 150 de mensalidade = R$ 200 recebidos no total. Não há aplicação automática de desconto percentual nesta alteração.

A flag `is_reservation` mantém esse pacote fora da seleção de pacote mensal da gestão escolar. O desconto técnico `is_reservation_credit` não aparece para escolha manual. A identificação usa IDs/flags de cadastro, não nomes ou textos digitados.

## Garantias e conciliação

- Livro privado com origem e uso vinculados a recibos; RLS e revogação de acesso direto. A RPC pública é invoker e chama um helper privado que verifica usuário ativo, papel financeiro e escola.
- Cada aluno tem uma reserva nesta campanha e o crédito é consumido uma única vez, sob lock no banco. O esquema não concede novos acessos a tabelas privadas.
- Asaas e InfinitePay reservam o crédito antes da criação da cobrança externa. Recibos duplicados e tentativas em outra venda não reutilizam o abatimento.
- Dinheiro, cartão externo e Pix direto reservam o crédito ao selecionar a forma de pagamento. Voltar aos itens ou limpar a venda libera a reserva não consumida. Após recarregar a página, o mesmo operador pode conferir e liberar uma venda manual anterior, confirmando que ela não foi recebida.
- Cobranças automáticas pendentes, incertas ou expiradas mantêm o crédito vinculado, pois podem ter confirmação tardia. Não liberar um vínculo de operadora sem conciliar o estado real. Uma rejeição definitiva do Asaas libera o crédito automaticamente.
- Estorno da reserva invalida crédito ainda não utilizado. Estornos após utilização e correções em recibos vinculados exigem conciliação pela direção; recibos não são apagados automaticamente.
- Os fluxos existentes de fechamento de ciclo, confirmação de pagamento e proteção de recibos continuam ativos. A implantação não cria cobranças nem muda recibos históricos.

## Validação e reversão

Testes PGlite executam a migração com o fluxo real de postagem das duas operadoras; testes DOM cobrem pré-matriculados, valor fixo, abatimento automático, desconto combinado, quantidade e recibo. Foram executados 53 testes financeiros relacionados, sem cobranças reais. Prévia do caixa conferida com dados fictícios.

Para interromper novas reservas, desative o pacote marcado `is_reservation` na escola Instituto Integro. Preserve a tabela de créditos, os guards e o desconto técnico para honrar reservas já pagas e conciliar cobranças pendentes. Não reverta apenas o JavaScript enquanto houver créditos em aberto: clientes antigos serão bloqueados ao tentar receber mensalidade sem o abatimento. Uma remoção completa exige primeiro conciliar créditos/recibos e cobranças das operadoras.

## Register in Financeiro

The **Reservas de matrícula** tab lists pre-enrolled students, confirmed reservation credits (including those already used), and students with reservation charges. Search by student/guardian and filter by payment/credit status. Summary totals include all rows, regardless of search; unused credits include those awaiting activation or held by a checkout. Receipts and first-tuition usage remain available after activation.

`finance_reservations_list()` is read-only. Its private definer helper checks the caller's active financial role and scopes every source to their school. The public invoker wrapper grants no private-table access. It returns no documents, tokens, payment payloads, or provider errors. Pending/expired charges do not count as paid; refunded sources and inconsistent settlement need reconciliation. Data refreshes when opening the tab, manually, and once per minute while visible. Failed refreshes hide stale results.

Validation: `node --test tests/finance-reservations-panel.test.mjs tests/finance-reservation-credit.test.mjs tests/finance-reservation-ui.test.mjs tests/financeiro-single-renderer.test.mjs` (24 tests), plus desktop/mobile visual inspection with synthetic data.
