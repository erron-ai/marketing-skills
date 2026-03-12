# Instantly

Cold email platform built for scale — manages unlimited sending accounts, automates email warmup, and handles high-volume outbound campaigns.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Instantly API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/instantly.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Instantly Dashboard → Settings → API
- Pass as `X-API-Key: {api_key}` header

## Common Agent Operations

### List campaigns

```bash
GET https://api.instantly.ai/api/v1/campaign/list?api_key={api_key}
```

### Add leads to a campaign

```bash
POST https://api.instantly.ai/api/v1/lead/add
X-API-Key: {api_key}

{
  "campaign_id": "{campaign_id}",
  "skip_if_in_workspace": true,
  "leads": [{
    "email": "alex@acme.com",
    "first_name": "Alex",
    "last_name": "Rivera",
    "company_name": "Acme Corp"
  }]
}
```

### Get campaign analytics

```bash
GET https://api.instantly.ai/api/v1/analytics/campaign/summary?api_key={api_key}&campaign_id={id}&start_date=2025-11-01&end_date=2025-11-30
```

## Key Features

- **Unlimited email accounts**: Connect and rotate across dozens of sending accounts
- **Built-in warmup**: Automated sending network to build reputation for new accounts
- **Unibox**: Unified inbox across all connected accounts
- **AI campaign builder**: Generates email sequences from a product description

## When to Use

- High-volume outbound (1,000+ emails/day)
- Teams using multiple domains and email addresses to maximize deliverability
- Agencies running outbound for multiple clients

## Relevant Skills

- cold-email
- sales-enablement
