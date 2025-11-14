# Paddle

SaaS billing platform that acts as the merchant of record — handling payments, global tax compliance (VAT, GST), and subscription management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Paddle API v2 |
| MCP | - | Not available |
| CLI | ✓ | See clis/paddle.js |
| SDK | ✓ | Node, Python, PHP client libraries |

## Authentication

- **API Key**: Found in Paddle Dashboard → Developer Tools → Authentication

## Common Agent Operations

### List subscriptions

```bash
GET https://vendors.paddle.com/api/2.0/subscription/users?vendor_id={vendor_id}&vendor_auth_code={api_key}&state=active
```

### Get transaction history

```bash
POST https://vendors.paddle.com/api/2.0/payment/subscriptions/transactions

vendor_id={vendor_id}&vendor_auth_code={api_key}&subscription_id={id}
```

### Cancel a subscription

```bash
POST https://vendors.paddle.com/api/2.0/subscription/users_cancel

vendor_id={vendor_id}&vendor_auth_code={api_key}&subscription_id={id}
```

## Key Difference from Stripe

Paddle is a **merchant of record** — it handles all global tax collection, remittance, and compliance on your behalf. You don't need to register for VAT/GST in each country. This is the primary reason teams choose Paddle over Stripe for global SaaS.

## When to Use

- Selling to global customers and want automated tax handling
- Teams that want to avoid manually registering for VAT in the EU, GST in Australia, etc.
- SaaS products without a dedicated finance team to handle international tax compliance

## Relevant Skills

- churn-prevention
- pricing-strategy
