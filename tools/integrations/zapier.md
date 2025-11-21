# Zapier

No-code workflow automation that connects 6,000+ apps — triggering actions across tools without writing code.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Zapier NLA API, Webhooks |
| MCP | ✓ | Available via Zapier MCP |
| CLI | ✓ | See clis/zapier.js |
| SDK | - | Webhook-based integration |

## Authentication

- **API Key**: Found in Zapier Account Settings → Developer
- **Webhooks**: No auth required — use webhook URLs as event receivers

## Common Agent Operations

### Trigger a webhook Zap

```bash
POST https://hooks.zapier.com/hooks/catch/{hook_id}/{hook_secret}/

{
  "email": "user@example.com",
  "event": "trial_started",
  "plan": "growth",
  "timestamp": "2025-11-21T09:00:00Z"
}
```

### Use Zapier NLA (Natural Language Actions)

Zapier MCP allows agents to trigger Zaps through natural language. The MCP server handles the authentication and action selection.

## Common Use Cases for Marketing Teams

| Trigger | Action |
|---------|--------|
| New Stripe customer | Create HubSpot contact + add to onboarding sequence |
| Form submission | Add to Mailchimp list + notify Slack channel |
| Trial started | Add to Customer.io campaign + create CRM deal |
| Churned subscription | Remove from active user segments + add to win-back list |
| New G2 review | Post to team Slack channel |

## When to Use

- Connecting tools that don't have native integrations
- Automating manual data sync tasks between marketing and sales tools
- Building lightweight automation workflows without engineering resources

## Relevant Skills

- analytics-tracking
- revops
- email-sequence
