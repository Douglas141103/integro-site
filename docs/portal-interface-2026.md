# Interface compartilhada do portal

As 16 páginas de acesso, autenticação, gestão, professor, família e apuração carregam
`assets/portal-ui.css` e `assets/portal-ui.js`. O site institucional e o formulário
público da pesquisa continuam independentes.

## Direção visual

- Fundo claro, tipografia de sistema, divisórias discretas e verde da marca nos destaques.
- Menu lateral recolhível no computador e modal no celular, com navegação por perfil.
- Busca de atalhos com Ctrl/Cmd+K, normalização de acentos e navegação por teclado.
- Ícones de contorno, cartões compactos e campos com foco visível.
- CSS visual limitado a `@media screen`; os elementos novos ficam ocultos na impressão.

Referências consultadas em 07/10/2026 (Manaus):

- https://developers.openai.com/plugins/concepts/ui-guidelines
- https://design-system.service.gov.uk/patterns/navigate-a-service/

A interface é própria do INTEGRO. Não inclui marca OpenAI nem apresenta a busca de
atalhos como se fosse uma conversa com IA.

## Compatibilidade e dados

Os formulários e os scripts de negócio originais são preservados. Atalhos locais
acionam os botões de navegação existentes; não replicam operações financeiras,
autenticação ou consultas. A busca indexa apenas nomes de áreas e links visíveis,
nunca alunos, campos preenchidos ou registros. Controles ocultos são excluídos.
A única preferência persistida é o estado recolhido do menu, no dispositivo.

## Verificação

Execute `npm ci` e `npm test`. Os testes de DOM usam jsdom sem carregar scripts de
autenticação ou fazer chamadas ao banco. Cobrem as 16 páginas, separação de menus
por perfil, visibilidade de controles, busca, delegação de cliques, preservação
dos campos e senha. Eles não substituem testes de transações em sessão autenticada.

Para reverter somente o visual, remova das páginas os dois recursos `portal-ui`
e o atributo `data-portal-ui`, ou reverta o commit da interface.
