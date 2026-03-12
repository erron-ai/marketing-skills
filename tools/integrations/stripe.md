# Stripe

Payments infrastructure for SaaS — subscription billing, one-time payments, usage-based billing, and revenue analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full REST API |
| MCP | ✓ | Available via Stripe MCP server |
| CLI | ✓ | Built-in Stripe CLI |
| SDK | ✓ | Node, Python, Ruby, Go, PHP, and more |

## Authentication

- **Secret Key**: `sk_live_...` for production, `sk_test_...` for development
- **Webhook Signing Secret**: For verifying webhook payloads

## Common Agent Operations

### List recent customers

```bash
GET https://api.stripe.com/v1/customers?limit=10&expand[]=data.subscriptions
Authorization: Bearer {secret_key}
```

### Retrieve subscription details

```bash
GET https://api.stripe.com/v1/subscriptions/{subscription_id}
Authorization: Bearer {secret_key}
```

### Get monthly revenue (MRR approximation)

```bash
GET https://api.stripe.com/v1/subscriptions?status=active&limit=100
Authorization: Bearer {secret_key}
```

### Create a subscription

```bash
POST https://api.stripe.com/v1/subscriptions
Authorization: Bearer {secret_key}

customer={customer_id}&items[0][price]={price_id}&trial_period_days=14
```

### Cancel a subscription

```bash
DELETE https://api.stripe.com/v1/subscriptions/{subscription_id}
Authorization: Bearer {secret_key}
```

## Key Objects

- **Customer**: Represents a paying user or company
- **Subscription**: Recurring billing relationship with a customer
- **Invoice**: A record of what a customer was charged
- **PaymentIntent**: Tracks a payment through its lifecycle
- **Price**: Defines the cost and billing interval for a product

## Webhooks (Important Events)

| Event | What it means |
|-------|---------------|
| `customer.subscription.created` | New subscriber |
| `customer.subscription.deleted` | Churn event |
| `invoice.payment_succeeded` | Successful renewal |
| `invoice.payment_failed` | Failed payment — trigger dunning |
| `customer.subscription.updated` | Plan change, upgrade, or downgrade |

## Relevant Skills

- churn-prevention
- pricing-strategy
- referral-program
- analytics-tracking
