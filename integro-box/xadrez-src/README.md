# Xadrez · Reinos em Duelo

Jogo 3D com Three.js e regras chess.js. O catálogo carrega o jogo em um iframe somente quando selecionado. Sair remove o iframe, encerrando renderização e worker; a partida usa BoxStorage por conta quando aberta no Integro Box.

Execute `npm ci`, `npm test` e `npm run build` nesta pasta. O build copia `public/` e gera os bundles em `../xadrez/`, servidos pelo GitHub Pages. Não editar os bundles diretamente.

Os testes verificam regras, decisões do computador e as seis animações de captura. Em aparelhos sem WebGL, o jogo oferece um tabuleiro acessível em botões.
