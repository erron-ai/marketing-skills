# Postmark

Transactional email service focused on reliability and deliverability — not bulk marketing. Best deliverability rates in the industry.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/postmark.js |
| SDK | ✓ | Node, Python, Ruby, .NET, PHP, Go |

## Authentication

- **Server API Token**: Found in Postmark server settings
- Pass as `X-Postmark-Server-Token: {token}` header

## Common Agent Operations

### Send an email

```bash
POST https://api.postmarkapp.com/email
X-Postmark-Server-Token: {token}

{
  "From": "noreply@yourdomain.com",
  "To": "user@example.com",
  "Subject": "Your password reset link",
  "TextBody": "Click here to reset: {reset_link}",
  "HtmlBody": "<p>Click <a href='{reset_link}'>here</a> to reset your password.</p>",
  "MessageStream": "outbound"
}
```

### Send with a template

```bash
POST https://api.postmarkapp.com/email/withTemplate
X-Postmark-Server-Token: {token}

{
  "TemplateId": 12345,
  "TemplateModel": {"first_name": "Alex", "action_url": "https://app.yourproduct.com/confirm"},
  "From": "noreply@yourdomain.com",
  "To": "user@example.com"
}
```

### Get delivery stats

```bash
GET https://api.postmarkapp.com/stats/outbound?fromdate=2025-11-01&todate=2025-11-30
X-Postmark-Server-Token: {token}
```

## Key Differentiators

- **Message streams**: Separate transactional and broadcast messages at the infrastructure level
- **Spam score feedback**: See why messages might land in spam
- **Delivery insights**: Detailed per-message delivery timeline

## When to Use

- Critical transactional emails where deliverability matters most (password resets, invoices, confirmations)
- Teams separating transactional from marketing email infrastructure

## Relevant Skills

- email-sequence
- onboarding-cro
