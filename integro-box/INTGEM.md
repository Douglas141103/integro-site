# IntGem

Cadastro público gratuito usa Supabase Auth com confirmação de e-mail. O cadastro do Box fica em `private.box_accounts`; não cria perfis, cargos ou permissões escolares. As contas existentes do Instituto continuam funcionando. Não há assinatura mensal implementada neste projeto.

Pacotes avulsos: 1 / R$ 1,00; 5 / R$ 2,99; 10 / R$ 6,99; 20 / R$ 10,99. Preços conforme solicitação e ajuste autorizado do pacote de 1 gema (duas compras de 5 custam menos que o pacote de 10). Catálogo: 45 cosméticos permanentes, três por jogo, a 4, 7 e 12 IntGem. Todos têm representação durante a partida; Egg e Rush também têm acessórios 3D, Bounce muda a cor da personagem e os jogos clássicos recebem detalhes temáticos.

## Recompensas e conversão

- Um bônus de 1 IntGem por conta/dia depois de 300 segundos ativos, medidos pelo relógio do servidor. Dia local de Manaus. A interface envia pulsos a cada 15 segundos, suspende ao ocultar a página e considera inatividade após 90 segundos sem interação. Abas compartilham um único relógio. Atividade declarada pelo cliente não é uma prova de presença humana.
- Pegue o Ovo: Integros → IntGem; uma conversão por dia/conta após 20 minutos ativos nesse jogo. Reserva global diária de 50 IntGem. Conversão requer base, ausência de ovo carregado, de corrida e de troca pendente.
- Cotação base diária: `ceil(20000 × (1 + min(2, gasto_em_itens_7d / max(25, entrada_de_gemas_7d))) / 1000) × 1000`. Só dias completos no fuso de Manaus entram na janela. Cotação vigente: base multiplicada por `1 + 0.5 × reserva_usada / 50`, arredondada para cima ao próximo milhar. Sem dados, começa em 20.000 Integros por gema. Preço e disponibilidade são reconfirmados na transação.
- Débito no save online e crédito na carteira são atômicos, com revisão e o mesmo bloqueio das trocas de criaturas. O jogo legado ainda calcula os Integros no cliente; a conversão tem limites e tempo verificado, mas não constitui validação completa das partidas no servidor.

## Pagamentos

Edge Function `intgem-pay`: JWT de plataforma desativado porque recebe webhook público; criação e verificação pelo comprador autenticam o usuário explicitamente com `auth.getUser`. O webhook não confia em preço, status ou usuário enviados. Confirma pela API `/payment_check` da InfinitePay, com o handle do estabelecimento e o pedido criado no banco. Compara o campo `amount` em centavos, pois `paid_amount` pode conter juros. Serviço credita uma vez por pedido; identificador de transação é único. RPC de liquidação é exclusiva de `service_role`; navegador não recebe essa credencial.

Fornecedor: `instituto-integro`. Retorno: `/integro-box/intgem.html`. Webhook: `/functions/v1/intgem-pay/webhook`. O checkout oferece cartão e outras formas habilitadas pelo fornecedor; a documentação não oferece parâmetro para restringir somente a cartão. Dados do cartão ficam na InfinitePay.

Em 16/10/2026, o titular confirmou que a conta recebedora é `$instituto-integro`, com Checkout Integrado habilitado. A identificação anterior apontava para outra conta. A API gerou links reais, sem pagamento, para R$ 2,99, R$ 6,99 e R$ 10,99. O valor de R$ 0,99 foi rejeitado com HTTP 422 (`Total price must be greater than 1`); testes de criação com R$ 1,00 e R$ 1,01 foram aceitos. O titular autorizou a alteração do pacote de 1 gema para R$ 1,00, aplicada no catálogo e na criação de pedidos. A criação de checkout no servidor também recusa valores abaixo de R$ 1,00. Nenhum cartão foi cobrado e o crédito decorrente de pagamento real ainda não foi validado.

Referência: https://www.infinitepay.io/checkout-documentacao

Não existe estorno/chargeback automático documentado nessa API. Reversões exigem conciliação administrativa antes de se adicionar um fluxo específico. Não atribuir pagamento ao simples retorno do navegador nem inserir créditos de teste no ambiente real.

## Verificação e publicação

### Vendas no Caixa Integro

A migração `20261016185036_box_intgem_finance.sql` integra os pagamentos confirmados ao caixa de **INSTITUTO INTEGRO** (`da5d33a5-616a-4abc-8f88-78f5ecb85cd4`). O gatilho roda quando o servidor confirma o pagamento e credita as gemas. Cada pedido gera exatamente um recibo `intgem`, vinculado por `intgem_order_id` e `cash_cycle_id`, na data local de confirmação em America/Manaus. Checkout pendente, bônus diário, compra de cosmético e conversão não são receitas.

O ciclo vigente segue a política existente, do dia 11 ao dia 10. Se ainda não existe, é criado aberto, respeitando o guardião de ciclos. Ciclos fechados nunca são reabertos. Um recebimento confirmado em ciclo anterior que não pôde ser escriturado fica pendente de conciliação; não é deslocado silenciosamente para outro período. O recibo integra os totais e a distribuição já existente do caixa, sem criar movimento adicional e sem ser classificado como mensalidade.

O valor registrado é o preço **bruto do pacote**. Não é o líquido depositado em banco; taxas, prazo de liquidação e eventuais estornos precisam de conciliação com o extrato da InfinitePay. O cadastro do jogador identifica o beneficiário, não comprova o nome/documento do titular do cartão. A integração informa isso sem inventar dados fiscais. Recibos automáticos são imutáveis; correções devem preservar o original e usar o procedimento administrativo de conciliação.

Falhas do lançamento não desfazem o crédito de gemas. A fila privada `intgem_finance_posts` guarda a tentativa e o motivo, e o job `intgem-finance-retry` tenta novamente a cada cinco minutos, em lotes de até 100. O vínculo único e o bloqueio do pedido impedem duplicação entre webhook, retorno e novas tentativas. Para monitorar pendências: `select order_id, attempted_at, last_error from private.intgem_finance_posts where entry_id is null order by attempted_at`. A fila e as funções não são acessíveis ao navegador.

`node --test --test-concurrency=2 tests/*.test.mjs` cobre banco PostgreSQL local (PGlite), isolamento, bônus, confirmação de pagamento, repetição, catálogo, conversão e UI em DOM. Testes de cena 3D validam transforms, recursos e materiais em CPU. A validação desta entrega não inclui renderização WebGL em navegador nem pagamento com cartão real. O envio de e-mail de cadastro depende da configuração de Auth/SMTP e dos redirecionamentos permitidos no projeto Supabase.

Bundles: `node integro-box/egg-src/build.mjs` e `node integro-box/rush-src/build.mjs`. Aplicar as migrações `20261016180041_box_intgem_economy.sql` e `20261016184145_box_intgem_one_real.sql`, publicar a função e só então atualizar o frontend. Tabelas privadas com RLS e sem leitura/escrita direta para contas comuns.
