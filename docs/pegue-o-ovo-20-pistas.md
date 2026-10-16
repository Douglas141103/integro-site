# Pegue o Ovo — 20 pistas e veículos voadores

Versão do site: `20261016-egg20-rides1`.

A expansão acrescenta Jardim dos Cogumelos, Porto dos Ventos, Deserto Neon, Reino das Auroras, Portal das Galáxias e Estação Integro (pista 20). Cada pista tem cenário, guardião articulado, três ovos, perigo e progressão próprios.

A loja oferece 64 acessórios, incluindo 12 novos, e oito veículos: quatro skates e quatro patinetes. Comprados com integros na base, eles ficam salvos e podem ser equipados ou guardados. O personagem apoia os pés no veículo; o patinete tem guidão e postura de pilotagem. Os bônus são 5%, 7%, 9% ou 12%. Pulo, disparada, obstáculos e limites laterais continuam ativos. Durante o treino o veículo é guardado; nas corridas online a velocidade continua igual para todos (22).

O pulo por toque começa em `pointerdown` e aceita um segundo ou terceiro dedo enquanto o direcional e Disparar estão pressionados. Cada controle mantém seu próprio toque. Um intervalo de 120 ms preserva um toque feito pouco antes de aterrissar. Pausa e perda de foco limpam os comandos.

## Ativação do servidor

Aplicar `supabase/migrations/20261016170000_box_egg_twenty.sql` no projeto Supabase existente. O arquivo é transacional e pode ser executado novamente. Aceita servidores com a expansão original de 12 pistas ou com as atualizações de 13 e 14 pistas. Não altera contas, permissões, propriedade das criaturas nem a versão 4 do salvamento.

A chamada autenticada `box_egg` com `p_action: 'capabilities'` deve retornar:

```json
{"worlds":20,"accessories":64,"abilities":8,"vehicles":8}
```

Publicar os arquivos do site não executa essa migração. Sem a atualização do servidor, as 20 pistas funcionam na aventura solo; as salas ficam limitadas à capacidade informada pelo servidor. Novas criaturas e ovos são mantidos neste aparelho, com uma marca de envio pendente. Após a ativação, o envio retoma se a revisão do perfil não tiver mudado. Se outro aparelho tiver alterado o perfil, o jogo conserva a aventura local e pede uma escolha explícita; a cópia de recuperação permanece separada por conta.

## Verificação

Os testes cobrem corrida e pulo simultâneos, três toques independentes, pausa, loja, compra e troca de veículos, posição dos pés e das mãos, vinte criaturas, obstáculos e limites, migração de salvamentos, conflitos de sincronização, permissões e corrida online até a Estação Integro. A migração é testada em PostgreSQL/PGlite, inclusive reexecução e atualização direta do servidor com 12 pistas.

As geometrias foram inspecionadas por renderização local. A verificação visual em WebGL num celular real continua pendente; a simulação de interface substitui apenas o desenho da GPU.
