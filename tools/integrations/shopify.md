# Shopify

E-commerce platform and developer ecosystem — for online stores, product management, order processing, and customer data.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST Admin API and GraphQL Admin API |
| MCP | - | Not available |
| CLI | ✓ | Built-in Shopify CLI |
| SDK | ✓ | Node, Python, Ruby, PHP, Go |

## Authentication

- **Private Apps**: API key + secret for a specific store (admin access)
- **Public Apps**: OAuth 2.0 for multi-store access

## Common Agent Operations

### Get product list

```bash
GET https://{store}.myshopify.com/admin/api/2024-10/products.json?limit=25&status=active
X-Shopify-Access-Token: {access_token}
```

### Get orders

```bash
GET https://{store}.myshopify.com/admin/api/2024-10/orders.json?status=any&limit=50&created_at_min=2025-11-01
X-Shopify-Access-Token: {access_token}
```

### Get customer by email

```bash
GET https://{store}.myshopify.com/admin/api/2024-10/customers/search.json?query=email:alex@example.com
X-Shopify-Access-Token: {access_token}
```

### Get store analytics summary

```bash
GET https://{store}.myshopify.com/admin/api/2024-10/reports.json
X-Shopify-Access-Token: {access_token}
```

## Key Marketing Use Cases

- Syncing customer purchase data to email marketing tools (Klaviyo, Customer.io)
- Building post-purchase email sequences triggered by order events
- Creating audience segments based on purchase history for ad targeting

## Relevant Skills

- email-sequence
- analytics-tracking
- referral-program
