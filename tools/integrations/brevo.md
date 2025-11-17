# Brevo (formerly Sendinblue)

Email and SMS marketing platform popular in Europe with strong GDPR support, transactional email, and marketing automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Brevo API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/brevo.js |
| SDK | ✓ | Node, Python, PHP, Ruby, Go official clients |

## Authentication

- **API Key**: Found in Account Settings → API and Integrations
- Pass as `api-key: {api_key}` header

## Common Agent Operations

### Send a transactional email

```bash
POST https://api.brevo.com/v3/smtp/email
api-key: {api_key}

{
  "sender": {"name": "Your Company", "email": "noreply@yourcompany.com"},
  "to": [{"email": "user@example.com", "name": "Alex"}],
  "subject": "Welcome to erron.ai",
  "htmlContent": "<p>Hi {{params.name}}, welcome!</p>",
  "params": {"name": "Alex"}
}
```

### Create or update a contact

```bash
POST https://api.brevo.com/v3/contacts
api-key: {api_key}

{
  "email": "user@example.com",
  "attributes": {"FIRSTNAME": "Alex", "PLAN": "growth"},
  "listIds": [12],
  "updateEnabled": true
}
```

### Send an SMS

```bash
POST https://api.brevo.com/v3/transactionalSMS/sms
api-key: {api_key}

{
  "sender": "YourBrand",
  "recipient": "+15551234567",
  "content": "Your verification code is 847291. Valid for 10 minutes."
}
```

## When to Use

- European SaaS where GDPR compliance is a primary concern
- Products that need both email and SMS in one platform
- Budget-conscious teams — Brevo has a generous free tier

## Relevant Skills

- email-sequence
- churn-prevention
