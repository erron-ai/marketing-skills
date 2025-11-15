# Resend

Developer-first transactional email API built with React Email support and a clean API experience. MCP server available.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API |
| MCP | ✓ | Available via Resend MCP |
| CLI | ✓ | See clis/resend.js |
| SDK | ✓ | Node, Python, Go, Ruby, PHP |

## Authentication

- **API Key**: Created in Resend Dashboard → API Keys
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Send an email

```bash
POST https://api.resend.com/emails
Authorization: Bearer {api_key}

{
  "from": "Your Company <noreply@yourdomain.com>",
  "to": ["user@example.com"],
  "subject": "Welcome to erron.ai",
  "html": "<p>Hi Alex, welcome aboard!</p>",
  "text": "Hi Alex, welcome aboard!"
}
```

### Send with React Email template (Node.js SDK)

```javascript
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'user@example.com',
  subject: 'Welcome to erron.ai',
  react: WelcomeEmail({ firstName: 'Alex' })
});
```

### Get email delivery status

```bash
GET https://api.resend.com/emails/{email_id}
Authorization: Bearer {api_key}
```

## Key Advantages

- React Email integration for component-based email templates
- Excellent deliverability with clean API
- Simple, predictable pricing
- Great developer experience — easy to test locally

## When to Use

- Developer teams building product notification and transactional email
- Projects using React Email for template development
- Teams wanting a modern, simple email API without legacy overhead

## Relevant Skills

- email-sequence
- onboarding-cro
