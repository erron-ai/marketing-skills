# Rewardful

Stripe-native affiliate and referral program management. The simplest way to add an affiliate program to a Stripe-based SaaS.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Rewardful REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/rewardful.js |
| SDK | ✓ | JavaScript snippet for tracking |

## Authentication

- **API Secret**: Found in Rewardful Settings → API
- Use Basic auth: `Authorization: Basic {base64(api_secret:)}`

## Common Agent Operations

### List affiliates

```bash
GET https://api.rewardful.com/v1/affiliates?limit=20
Authorization: Basic {base64(api_secret:)}
```

### Get affiliate performance

```bash
GET https://api.rewardful.com/v1/affiliates/{affiliate_id}/referrals
Authorization: Basic {base64(api_secret:)}
```

### List referrals

```bash
GET https://api.rewardful.com/v1/referrals?state=conversion
Authorization: Basic {base64(api_secret:)}
```

## Client-Side Tracking

```html
<!-- Add before </head> -->
<script async src="https://r.wdfl.co/rw.js" data-rewardful="{rewardful_id}"></script>

<script>
// When a customer signs up, link them to their referral
Rewardful.useReferralCode(referralCode);
</script>
```

## How It Works with Stripe

Rewardful reads your Stripe subscription data directly. When a new Stripe customer was referred by an affiliate, Rewardful automatically tracks commissions on every payment — no custom code needed for commission calculation.

## When to Use

- Stripe-based SaaS that wants an affiliate program without complex setup
- Teams that want revenue-share commissions tied directly to Stripe payments

## Relevant Skills

- referral-program
- pricing-strategy
