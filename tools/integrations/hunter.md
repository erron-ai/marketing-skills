# Hunter.io

Email finding and verification tool with the largest indexed database of professional email addresses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Hunter API v2 |
| MCP | - | Not available |
| CLI | ✓ | See clis/hunter.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Hunter Dashboard → API
- Pass as query parameter: `?api_key={key}`

## Common Agent Operations

### Find emails at a domain

```bash
GET https://api.hunter.io/v2/domain-search?domain=acme.com&limit=10&api_key={api_key}
```

Returns all publicly indexed email addresses at a domain with confidence scores.

### Find a specific person's email

```bash
GET https://api.hunter.io/v2/email-finder?domain=acme.com&first_name=Alex&last_name=Rivera&api_key={api_key}
```

### Verify an email address

```bash
GET https://api.hunter.io/v2/email-verifier?email=alex@acme.com&api_key={api_key}
```

Returns: deliverable, risky, or undeliverable status.

### Bulk email verification

```bash
POST https://api.hunter.io/v2/bulk-email-verifier
{
  "emails": ["a@example.com", "b@example.com"],
  "api_key": "{api_key}"
}
```

## Rate Limits

- Free plan: 25 requests/month
- Paid plans: 500–50,000+ searches/month depending on plan

## When to Use

- Building contact lists for outbound campaigns
- Verifying email deliverability before a cold campaign
- Finding the right contact at a target account

## Relevant Skills

- cold-email
- sales-enablement
