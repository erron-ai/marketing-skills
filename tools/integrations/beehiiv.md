# Beehiiv

Newsletter publishing and monetization platform with built-in subscriber management, referral programs, ad networks, and paid subscriptions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Beehiiv API v2 |
| MCP | - | Not available |
| CLI | ✓ | See clis/beehiiv.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Settings → Integrations → API
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Get publication stats

```bash
GET https://api.beehiiv.com/v2/publications/{publication_id}
Authorization: Bearer {api_key}
```

### List subscribers

```bash
GET https://api.beehiiv.com/v2/publications/{publication_id}/subscriptions?status=active&limit=100
Authorization: Bearer {api_key}
```

### Add a subscriber

```bash
POST https://api.beehiiv.com/v2/publications/{publication_id}/subscriptions
Authorization: Bearer {api_key}

{
  "email": "reader@example.com",
  "reactivate_existing": false,
  "send_welcome_email": true,
  "utm_source": "website",
  "utm_medium": "organic"
}
```

### Get post performance

```bash
GET https://api.beehiiv.com/v2/publications/{publication_id}/posts/{post_id}/stats
Authorization: Bearer {api_key}
```

## Key Features

- **Referral program**: Built-in viral referral system for subscriber growth
- **Paid newsletters**: Stripe-powered subscription tiers
- **Ad network**: Monetize with beehiiv's own ad marketplace
- **Boosts**: Pay to get in front of other newsletters' audiences

## When to Use

- Newsletter operators who want monetization tools built in
- Publishers using referral programs as a growth lever
- Creators wanting a modern, growth-focused publishing platform

## Relevant Skills

- content-strategy
- referral-program
- email-sequence
