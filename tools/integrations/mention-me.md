# Mention Me

Enterprise referral marketing platform focused on word-of-mouth at scale — with A/B testing, referral incentive management, and fraud protection.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Mention Me REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/mention-me.js |
| SDK | - | JavaScript tag + API |

## Authentication

- **API Key**: Provided during onboarding
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Register a new customer into the referral program

```bash
POST https://api.mention-me.com/api/referee/v1/entry-point/order
Authorization: Bearer {api_key}

{
  "request": {
    "partnerCode": "{partner_code}",
    "situation": "postpurchase"
  },
  "customer": {
    "email": "customer@example.com",
    "firstname": "Alex",
    "surname": "Rivera",
    "uniqueIdentifier": "order_abc123"
  }
}
```

### Check if someone was referred

```bash
GET https://api.mention-me.com/api/referral/v1/check?email=customer@example.com&partnerCode={partner_code}
Authorization: Bearer {api_key}
```

## Key Features

- **Name-sharing**: Unique mechanism — referrers share by name, not link, for more natural conversations
- **Fraud detection**: Built-in referral fraud prevention
- **A/B testing**: Test incentives, copy, and timing
- **Enterprise support**: Dedicated implementation and success management

## When to Use

- Enterprise consumer brands and large-scale e-commerce
- Teams running referral programs as a serious growth channel with dedicated management

## Relevant Skills

- referral-program
- email-sequence
