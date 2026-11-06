# Engole Engole

Jogo original de cidade com câmera superior, controles por arrasto, WASD e setas. Partidas de 120 segundos: objetos menores aumentam o buraco, e buracos maiores podem engolir adversários, que reaparecem com proteção temporária.

- Solo: um jogador e cinco bots, sem chamadas de sala.
- Salas: de 2 a 8 contas com acesso ao Integro Box, código de convite com 12 caracteres, início pelo anfitrião, sem chat adicional. Convite válido por 30 minutos.
- A cidade é reproduzida pela mesma semente em todos os clientes. O anfitrião arbitra consumo e placar; não há premiação, saldo ou ranking global atribuídos por esse protocolo.
- Supabase mantém somente sala e participantes. Movimentos e estados usam canais privados Realtime Broadcast, com políticas distintas para estado do anfitrião e entrada individual. O estado completo recupera eventos perdidos.
- O anfitrião precisa manter a página aberta; sua saída encerra a sala. Não há migração automática de anfitrião. Uma desconexão exibe erro e permite entrar novamente.
- Instalação via `gate.js`, monitoramento via `usage.js` e catálogo via `catalog.js`.

Aplicar `supabase/migrations/20261105205152_engole_engole_rooms.sql` antes da publicação do frontend. Nenhuma chave secreta é entregue ao navegador. As regras não alteram outros canais ou a configuração pública do Realtime.

Verificação: `node --test tests/engole*.test.mjs tests/dino-interface.test.mjs` cobre determinismo, consumo exclusivo, oito clientes, sincronização, descarte de canais, limite de vagas, autorização, eventos privados e registro de uso. A interface foi conferida em navegador em desktop e largura de 390 px; não foi feita uma sessão de oito contas reais em produção.
