# SendGrid (Twilio SendGrid)

High-volume transactional and marketing email API. Industry-standard for programmatic email delivery at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Web API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/sendgrid.js |
| SDK | ✓ | Node, Python, C#, Go, PHP, Ruby |

## Authentication

- **API Key**: Created in SendGrid Settings → API Keys
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Send a single email

```bash
POST https://api.sendgrid.com/v3/mail/send
Authorization: Bearer {api_key}

{
  "personalizations": [{
    "to": [{"email": "user@example.com"}],
    "dynamic_template_data": {"first_name": "Alex", "product_name": "erron.ai"}
  }],
  "from": {"email": "noreply@yourcompany.com", "name": "Your Company"},
  "template_id": "d-your_template_id"
}
```

### Get email stats

```bash
GET https://api.sendgrid.com/v3/stats?start_date=2025-11-01&end_date=2025-11-30&aggregated_by=day
Authorization: Bearer {api_key}
```

### Add a contact to a list

```bash
PUT https://api.sendgrid.com/v3/marketing/contacts
Authorization: Bearer {api_key}

{
  "list_ids": ["{list_id}"],
  "contacts": [{
    "email": "user@example.com",
    "first_name": "Alex",
    "custom_fields": {"plan": "pro"}
  }]
}
```

## Key Concepts

- **Dynamic Templates**: Handlebars-based templates with personalization data
- **Suppressions**: Automated handling of bounces, unsubscribes, and spam reports
- **IP Warming**: Gradually build sending reputation when moving to a dedicated IP
- **Subuser Management**: Separate sending environments per product or team

## When to Use

- High-volume transactional email (password resets, invoices, notifications)
- Marketing campaigns requiring scale and deliverability tooling
- Teams with engineering resources to manage email infrastructure

## Relevant Skills

- email-sequence
- analytics-tracking
