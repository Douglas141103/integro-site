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

## Staged automatic withdrawal authorization

`POST /functions/v1/collaborator-wallet/authorize/{school_id}` is a separate **pre-payment** callback. It requires the protected Asaas webhook token in `asaas-access-token`, rejects browser origins, accepts only `TRANSFER` / `PIX`, and fetches the transfer directly from Asaas before comparing ID, exact reference, amount and a present Pix key with the reserved portal withdrawal. It never submits a transfer or records its completion. A missing provider Pix key is refused, rather than guessed from the payee's name.

The service-only `collaborator_authorization_service` additionally locks the school and withdrawal, verifies active membership, the activation cutoff and funded balance including outstanding reservations, and binds at most one provider transfer ID to each withdrawal. Supported authenticated decisions are audited without storing Pix keys or callback secrets. Previously refused transfers stay refused. A refusal leaves the reservation intact until Asaas confirms failure/cancellation through the existing status webhook. Provider/database outages return 503 so Asaas can retry; they never return APPROVED. Completed/failed/old pending withdrawals cannot be automatically approved.

**Deployment is deliberately disabled by default**: no configuration row means REFUSED, and the migration does not create an enabled row. No Asaas security setting or human approval is changed by deploying this code. The successful R$ 2 user test predated this feature and is not evidence of automatic authorization.

Before activation:
1. Provision controlled static outbound infrastructure for **all** callers using this Asaas account/key, including charging and webhook reconciliation. Hosted Supabase Edge Functions have no stable egress IP. Do not whitelist a temporarily observed IP, the website IP, or broad shared cloud ranges. The database IPv4 ingress add-on does not solve outbound IP stability.
2. Route calls through that infrastructure and validate charging, transfer and status queries before enabling Asaas's whitelist.
3. Configure the separate authorization URL and authentication token in Asaas Security; do not use the ordinary transfer-status notification URL. Keep interface/manual operations outside external authorization. Unsupported API bill payments or recharge requests will be refused by this portal callback.
4. Enable the school's `private.collaborator_authorization_settings` row with `enabled_at=now()` only after these checks. Confirm the provider's documented critical-action setting for the allowed IPs, with the account holder completing any required token confirmation.
5. Have the owner initiate one small new transfer and verify the authorization audit, provider completion and one accounting debit. No real transfer is generated by the tests or deployment.

Rollback: retain/re-enable manual critical-action approval at Asaas; set the school's authorization flag false to fail closed. Do not simply disable the validation endpoint while leaving automatic withdrawals enabled at the provider.

References: https://docs.asaas.com/docs/mecanismo-para-validacao-de-saque-via-webhooks and https://docs.asaas.com/docs/whitelist-de-ips ; https://supabase.com/kb/troubleshooting/why-supabase-edge-functions-cannot-provide-static-egress-ips-for-whitelisting-3d78b0 .
