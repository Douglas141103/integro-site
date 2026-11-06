# Portal do Colaborador

Published route: `/portal-colaborador/index.html`. Uses existing Supabase sign-in, with a server-maintained membership separate from teaching/management roles. André is shareholder 1, Lucilene 2, and Douglas's existing administrative account 3. Lucilene retains her teaching role and sees only her own participation; André and Douglas can reconcile external receipts.

The private service API is callable only by `service_role`. The Edge Function verifies each user JWT through `auth.getUser` and supplies the verified user ID. Webhooks use the existing protected Asaas webhook token and query the current transfer through the provider API before changing its status. `verify_jwt=false` is intentional because user requests and authenticated provider webhooks share the function; unauthenticated requests are rejected in the handler.

Financial rules:
- Begin tracking from the existing cycle starting 2026-10-11, preserving earlier cycles as history in the original finance module. New portal obligations do not reset on cycle rollover.
- Each shareholder receives 20% of recorded receipts. Existing assigned debits and expenses are included, with linked expenses deduplicated.
- An Asaas-linked receipt becomes funded only after the existing verified order is paid and successfully posted. Refund status removes availability.
- Cash needs central-cash delivery confirmation and a second administrator attestation that its corresponding funds have reached the Asaas account. External Pix/card receipts also require this reconciliation, with a bank reference. These are release records, never a second revenue entry.
- Positive manual/internal adjustments increase the calculated balance but do not automatically create withdrawable cash. Withdrawals use only funded participation, net of all assigned debits and reservations. No automatic negative-balance advances.
- Reservations serialize on the school's settings row. The account balance must cover all released shareholder balances plus unsettled reservations. This is intentionally conservative.
- Request IDs are unique per member. A transfer is submitted once. An uncertain response keeps the amount reserved; reconciliation uses provider ID or exact external reference, never a second payment POST.
- Completion is recorded once in `finance_cash_cycle_movements`. If the financial cycle is unavailable, the transfer remains completed and deducted in the portal, and the accounting post can be retried through refresh/webhook.
- The Asaas account's existing withdrawal approvals, fees and limits remain in force. A request can await authorization in Asaas. No approval controls were disabled.

UI includes responsive desktop/mobile navigation, hidden balances, searchable/date-filtered statement, CSV export, transaction details, transfer review, provider receipt links, and administrator cash reconciliation.

Validation: `node --test tests/collaborator-wallet.test.mjs tests/finance-asaas.test.mjs tests/portal-login-recovery.test.mjs`. Tests use an isolated PostgreSQL-compatible fixture and mocked payment API; no real transfer is made. Browser visual QA uses local, clearly synthetic fixtures outside the repository. Live checks cover membership mapping, service-only permissions, dashboard queries, missing-auth rejection and successful webhook registration. The linked Asaas account had zero balance during setup, so no live-money transfer was tested.

Deployment: GitHub Pages through the existing repository main branch; two SQL migrations and the `collaborator-wallet` Edge Function. Private membership setup is operational DML using the verified existing logins, not credentials or new accounts. No secrets are included in this repository.
