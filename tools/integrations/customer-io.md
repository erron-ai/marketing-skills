# Customer.io

Behavior-driven messaging platform for sending triggered emails, SMS, push notifications, and in-app messages based on user actions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Track API (events), App API (broadcasts, campaigns) |
| MCP | - | Not available |
| CLI | ✓ | See clis/customer-io.js |
| SDK | ✓ | Node, Python, Ruby, Go, PHP |

## Authentication

- **Track API**: Site ID + API Key (Basic auth)
- **App API**: Bearer token from Account Settings → API Credentials

## Common Agent Operations

### Identify or update a person

```bash
PUT https://track.customer.io/api/v1/customers/{identifier}
Authorization: Basic {base64(site_id:api_key)}

{
  "email": "user@example.com",
  "plan": "pro",
  "trial_started_at": 1735689600,
  "company_size": "50-200"
}
```

### Track an event

```bash
POST https://track.customer.io/api/v1/customers/{identifier}/events
Authorization: Basic {base64(site_id:api_key)}

{
  "name": "trial_started",
  "data": {
    "plan": "growth",
    "source": "homepage"
  }
}
```

### Send a transactional email

```bash
POST https://api.customer.io/v1/send/email
Authorization: Bearer {app_api_token}

{
  "to": "user@example.com",
  "transactional_message_id": "welcome_email",
  "identifiers": {"email": "user@example.com"},
  "message_data": {"first_name": "Alex"}
}
```

## Key Capabilities

- **Behavior-triggered campaigns**: Send a message when a user does (or doesn't do) something
- **Multi-channel**: Email, SMS, push notifications, in-app, webhooks from one place
- **Segmentation**: Build dynamic segments based on event history and attributes
- **Journey builder**: Visual workflow builder for complex lifecycle sequences

## When to Use

- Complex behavioral lifecycle email (activation, re-engagement, upgrade triggers)
- Multi-channel messaging beyond just email
- Teams that need tight control over trigger conditions and branching logic

## Relevant Skills

- email-sequence
- onboarding-cro
- churn-prevention
