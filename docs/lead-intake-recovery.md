# Lead intake recovery gate

This is a release checklist, not evidence of a configured or tested production pipeline.

## Choose one independently verified operator destination

- **Resend team notification:** verify the actual account's domain and exact provider-assigned DNS records. Confirm the existing API credential's runtime availability without exposing it. The resend.dev testing sender is restricted to the provider account owner and cannot replace a production sender for prospect replies. An email API message ID is acceptance, not final delivery.
- **Existing HubSpot form:** verify portal/form IDs, permitted fields and the operator's access to submissions. Do not invent IDs or use an unrelated client's CRM.
- **Durable receiver:** provision an operator-approved HTTPS endpoint, persistent storage, access controls and retention. If it requires bearer authentication, set CONTACT_WEBHOOK_TOKEN server-side. Persist before returning {"accepted":true,"receiptId":"persistent-id"}. A trigger/queue acknowledgement without a durable record is insufficient.

No destination is created or enabled by this PR. Do not add a serverless filesystem spool, log personal data, automatically replay uncertain submissions, or copy credentials between integrations.

## Approved pre-release test

Use an owner-controlled test identity only after authorization for the live test:
1. Verify the exact release commit and configured destination.
2. Submit a uniquely tagged test request. Inspect the actual provider-side record and owner notification.
3. If email is used, inspect delivery/bounce evidence independently from API acceptance.
4. Test unavailable and unauthorized destinations: no false success; input retained; generic sanitized logs.
5. Test recovery and partial fan-out without replaying real contacts. Record any ambiguous acceptance before a manual retry to avoid duplicates.
6. Confirm access and deletion/retention for any stored personal details.

The /api/health route checks email configuration/domain state, not end-to-end lead delivery. A verified CRM/webhook can accept leads even when email is degraded. Use destination-side evidence, not a green website or configured environment-variable name, to close the incident.

This branch disables its Vercel Git preview deployment. Merging, deployment, provider configuration, DNS, production secrets and live contact tests are separate authorized release actions.
