# Fundo solidário e preços — 23/10/2026

O Pegue o Ovo destina 30% dos impostos de renda novos ao fundo solidário. Os outros 70% permanecem retirados de circulação. A arrecadação anterior à ativação não é redistribuída retroativamente.

## Ciclos e faixas

O servidor fecha ciclos de seis minutos nos minutos 00, 06, 12, 18, 24, 30, 36, 42, 48 e 54. O cron é `egg-solidarity-six-minutes`. Cada imposto entra uma única vez no cálculo; arredondamentos são compensados pelo percentual sobre o total acumulado.

| Patrimônio de referência | Peso básico | Até por ciclo com 5 min ativos | Até por ciclo sem 5 min | Limite diário ativo / reduzido |
|---|---:|---:|---:|---:|
| Menos de 100 mil | 4 | 500 | 100 | 10.000 / 2.000 |
| 100 mil a menos de 1 milhão | 3 | 300 | 60 | 6.000 / 1.200 |
| 1 a menos de 5 milhões | 2 | 150 | 30 | 3.000 / 600 |
| 5 a menos de 10 milhões | 1 | 50 | 10 | 1.000 / 200 |
| 10 milhões ou mais | 0 | 0 | 0 | 0 |

Com pelo menos 300 segundos ativos no ciclo, o peso é multiplicado por cinco. A divisão usa pesos relativos, respeita os tetos e depende do dinheiro do fundo. O excedente e os resíduos de arredondamento permanecem na reserva. Se o agendador ficar indisponível, os ciclos perdidos recompõem a reserva, sem multiplicar pagamentos retroativos; somente o ciclo atual distribui. O limite diário usa a data de Manaus. Não há promessa de pagamento fixo.

É necessário ter entregue um ovo, ter acesso ao jogo e atividade nas últimas 24 horas. Contas sem essa atividade não recebem. Contas recentes ou inativas no ciclo recebem a parcela reduzida se cumprirem os demais critérios. Tempo de jogo é medido pela evolução do relógio ativo do jogo, limitado ao tempo decorrido no servidor e a 60 segundos por salvamento. Pausa e aba oculta não avançam o relógio ativo. Intervalos que atravessam a fronteira do ciclo são separados.

O patrimônio de referência considera saldo, valor estimado de criaturas/ovos, itens em Integros e melhorias adquiridas, ou quatro horas de produção bruta normal do curral — prevalece o maior valor. Usa-se o maior patrimônio registrado, incluindo a fotografia inicial, para evitar reduzir a faixa gastando ou transferindo bens. Créditos ainda não sincronizados também contam para a elegibilidade. Preços de referência atuais são utilizados mesmo para itens comprados anteriormente; não há cobrança retroativa.

## Crédito e integridade

O cron cria direitos de crédito em um extrato privado, sem editar o save de jogadores em movimento. O próximo salvamento revisionado aplica o crédito; jogadores offline recebem ao carregar o perfil. A interface soma somente o crédito confirmado, preservando posição e demais progressos. O repasse não é tributado como renda dos bichinhos.

As tabelas têm RLS e nenhum acesso direto para anon/authenticated. As funções auxiliares usam SECURITY INVOKER, search_path vazio e permissões revogadas. O dispatcher autenticado existente verifica o usuário. O ciclo e usuário formam uma chave única, impedindo repetição. O fundo garante `reserva + alocado = floor(arrecadado * 0.30)`. Os extratos permanecem para auditoria; participação detalhada fica por sete dias. Clientes antigos precisam atualizar para gravar com economia versão 2.

A validação histórica de toda a origem de moedas pelo servidor continua sendo uma melhoria independente; este lançamento não transforma o jogo inteiro em simulação autoritativa.

## Preços em Integros

- Melhorias: base dobrada e curva por nível elevada de 1,5 para 2,4. Todas custam 499.067, ante 51.225.
- Suprimentos: preço dobrado. Escudo 120; suco 70.
- Decorações pagas: cinco vezes. O cenário inicial continua gratuito.
- Acessórios em Integros: fatores 2, 4, 10 e 20 conforme preço anterior (<1 mil, <10 mil, <100 mil, demais).
- Poderes e boosts: quatro vezes. Boost do curral: mínimo de 18.000 ou 45% da produção adicional bruta prevista em 90 segundos, arredondado para a centena superior. O preço usa renda sem boost e é o mesmo exibido e debitado.
- Veículos comuns: fatores 3, 8 e 15 conforme preço anterior (<10 mil, <100 mil, demais).
- Carro Aurora: 10 milhões; Carro Imperial: 30 milhões; Jatinho Aurora: 80 milhões; Jatinho Imperial: 180 milhões.
- IntGem e itens comprados nessa moeda não foram reajustados. Patins de inverno continuam em 7 IntGem.
- Saldos, itens e cargas já adquiridos foram preservados. Valores de venda dos ovos e alíquotas do imposto não mudaram.

## Verificação

Testes de banco cobrem percentuais, financiamento insuficiente, pesos ativos/reduzidos, faixas, limites diários, patrimônio, tempo ativo, atraso/repetição, crédito em save/load, migração de cliente e isolamento entre usuários. Testes de DOM cobrem extrato, notificações, falha/repetição de confirmação e preços/débitos da loja. A integração com atores usa DOM e Three reais, com GPU substituída; não equivale a teste visual WebGL.
