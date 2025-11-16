# Klaviyo

Email and SMS marketing platform built specifically for e-commerce — with deep Shopify integration and powerful behavioral segmentation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Klaviyo API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/klaviyo.js |
| SDK | ✓ | Python, Node official clients |

## Authentication

- **Private API Key**: Found in Account → Settings → API Keys
- Pass as `Authorization: Klaviyo-API-Key {api_key}` header (v3)

## Common Agent Operations

### Get account metrics

```bash
GET https://a.klaviyo.com/api/metrics/
Authorization: Klaviyo-API-Key {api_key}
revision: 2024-10-15
```

### Add a profile (subscriber)

```bash
POST https://a.klaviyo.com/api/profiles/
Authorization: Klaviyo-API-Key {api_key}
revision: 2024-10-15

{
  "data": {
    "type": "profile",
    "attributes": {
      "email": "customer@example.com",
      "first_name": "Alex",
      "properties": {"total_orders": 3, "favorite_category": "footwear"}
    }
  }
}
```

### Track an event

```bash
POST https://a.klaviyo.com/api/events/
Authorization: Klaviyo-API-Key {api_key}
revision: 2024-10-15

{
  "data": {
    "type": "event",
    "attributes": {
      "metric": {"data": {"type": "metric", "attributes": {"name": "Placed Order"}}},
      "profile": {"data": {"type": "profile", "attributes": {"email": "customer@example.com"}}},
      "properties": {"order_value": 89.99, "items": 2}
    }
  }
}
```

## Key Features

- **Shopify integration**: Deep bi-directional sync with purchase, browse, and cart data
- **Predictive analytics**: Predicted LTV, next purchase date, churn risk per customer
- **SMS**: Integrated SMS alongside email in the same platform
- **Flow builder**: Visual automation builder for post-purchase, browse abandonment, etc.

## When to Use

- E-commerce businesses, especially on Shopify
- Brands that want email and SMS in one platform
- Teams that need behavioral segmentation based on purchase history

## Relevant Skills

- email-sequence
- churn-prevention
- analytics-tracking
