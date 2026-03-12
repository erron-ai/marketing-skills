# LemonSqueezy

E-commerce and payments platform built for software businesses. Handles subscription billing, one-time purchases, license keys, affiliate payouts, and tax compliance for digital products.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/lemonsqueezy.js |
| SDK | ✓ | `@lemonsqueezy/lemonsqueezy.js` (Node.js) |

## Authentication

```bash
LEMONSQUEEZY_API_KEY=your_api_key   # from app.lemonsqueezy.com/settings/api
LEMONSQUEEZY_STORE_ID=your_store_id
```

## Key Concepts

**Store**: Your top-level merchant account
**Product**: A digital product (software, course, template, etc.)
**Variant**: A specific SKU within a product (monthly plan, annual plan, lifetime, etc.)
**Order**: A completed purchase
**Subscription**: A recurring billing relationship with a customer
**Affiliate**: A partner who earns commission on referred sales
**Discount**: A coupon or promo code applied at checkout

## Common Operations

### List all orders

```javascript
const { lemonSqueezySetup, listOrders } = require('@lemonsqueezy/lemonsqueezy.js');

lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

const orders = await listOrders({ filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID } });
```

### Get subscription details

```javascript
const { getSubscription } = require('@lemonsqueezy/lemonsqueezy.js');

const sub = await getSubscription({ id: subscriptionId });
console.log({
  status: sub.data.attributes.status,
  renewsAt: sub.data.attributes.renews_at,
  mrr: sub.data.attributes.mrr
});
```

### List all active subscriptions

```javascript
const { listSubscriptions } = require('@lemonsqueezy/lemonsqueezy.js');

const subs = await listSubscriptions({
  filter: { storeId: storeId, status: 'active' }
});
```

### Create a discount code

```javascript
const { createDiscount } = require('@lemonsqueezy/lemonsqueezy.js');

const discount = await createDiscount({
  storeId: storeId,
  name: 'Launch Week 30% Off',
  code: 'LAUNCH30',
  amount: 30,
  amountType: 'percent',
  duration: 'once',
  isLimitedToProducts: true,
  productIds: ['product-id']
});
```

### Get affiliate stats

```javascript
const response = await fetch(
  'https://api.lemonsqueezy.com/v1/affiliates',
  { headers: { Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}` } }
);
const { data } = await response.json();
```

### Cancel a subscription

```javascript
const { cancelSubscription } = require('@lemonsqueezy/lemonsqueezy.js');
await cancelSubscription({ id: subscriptionId });
```

### Webhook events

LemonSqueezy sends webhooks for key billing events. Subscribe at store settings:

| Event | When it fires |
|-------|--------------|
| `order_created` | New purchase completed |
| `subscription_created` | New subscription started |
| `subscription_updated` | Plan change, renewal, payment update |
| `subscription_cancelled` | Customer cancels |
| `subscription_payment_failed` | Payment declined |
| `subscription_expired` | Subscription ends |

## Marketing Use Cases

**Revenue analytics**
- Pull MRR, ARR, churn rate, and new subscriptions daily
- Track lifetime value by product variant
- Monitor trial-to-paid conversion rates

**Promo code campaigns**
- Create time-limited discount codes for launch campaigns
- Track code redemption rates per campaign
- Set usage limits to create urgency

**Affiliate program management**
- Monitor affiliate earnings and top performers
- Create tracking links for influencer partnerships
- Automate affiliate payout reporting

**Churn prevention**
- Identify subscriptions that failed payment (at-risk accounts)
- Trigger email sequences for failed payments before cancellation
- Analyze cancellation timing to find churn patterns

## Related Skills

- `pricing-strategy`: Use LemonSqueezy's variant structure to test pricing tiers
- `referral-program`: LemonSqueezy's affiliate system can power referral programs
- `churn-prevention`: Monitor cancellation webhooks to trigger save campaigns
