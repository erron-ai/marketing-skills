# Tolt

SaaS affiliate program management platform built for modern SaaS with Stripe and Paddle integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Tolt REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/tolt.js |
| SDK | ✓ | JavaScript SDK for tracking |

## Authentication

- **API Key**: Found in Tolt Dashboard → Settings → API
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### List affiliates

```bash
GET https://api.tolt.io/v1/partners
Authorization: Bearer {api_key}
```

### Get referrals for an affiliate

```bash
GET https://api.tolt.io/v1/referrals?partner_id={partner_id}
Authorization: Bearer {api_key}
```

### Track a conversion manually

```bash
POST https://api.tolt.io/v1/conversions
Authorization: Bearer {api_key}

{
  "click_id": "{tolt_click_id}",
  "customer_id": "cus_stripe_id",
  "amount": 4900
}
```

## JavaScript SDK

```javascript
// Initialize
tolt('init', '{program_id}');

// On user signup — associate referral
tolt('signup', { customer_id: 'user@example.com' });
```

## When to Use

- SaaS teams wanting a polished affiliate portal for partners
- Products needing Stripe or Paddle commission tracking
- Teams that want to offer tiered commission structures

## Relevant Skills

- referral-program
- pricing-strategy
