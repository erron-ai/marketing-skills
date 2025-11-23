# Intercom

Customer messaging platform combining live chat, in-app messaging, product tours, email, and support ticketing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Intercom REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/intercom.js |
| SDK | ✓ | JavaScript, iOS, Android |

## Authentication

- **Access Token**: Found in Intercom Settings → Developers → Your Apps
- Pass as `Authorization: Bearer {access_token}` header

## Common Agent Operations

### Create or update a contact

```bash
POST https://api.intercom.io/contacts
Authorization: Bearer {access_token}

{
  "role": "user",
  "email": "user@example.com",
  "name": "Alex Rivera",
  "custom_attributes": {
    "plan": "growth",
    "trial_started_at": 1735689600
  }
}
```

### Search for contacts

```bash
POST https://api.intercom.io/contacts/search
Authorization: Bearer {access_token}

{
  "query": {
    "operator": "AND",
    "value": [
      {"field": "custom_attributes.plan", "operator": "=", "value": "trial"},
      {"field": "signed_up_at", "operator": ">", "value": 1735689600}
    ]
  }
}
```

### Send a message

```bash
POST https://api.intercom.io/messages
Authorization: Bearer {access_token}

{
  "message_type": "email",
  "subject": "How's your trial going?",
  "body": "Hi {{first_name}}, it's been 3 days since you started your trial. Have any questions?",
  "from": {"type": "admin", "id": "{admin_id}"},
  "to": {"type": "user", "id": "{user_id}"}
}
```

## Client-Side Identification

```javascript
window.intercomSettings = {
  api_base: 'https://api-iam.intercom.io',
  app_id: '{app_id}',
  user_id: 'user_123',
  name: 'Alex Rivera',
  email: 'alex@example.com',
  plan: 'trial'
};
```

## When to Use

- In-app chat and support for product questions
- Behavioral messaging based on in-app actions
- Onboarding tours and product walkthroughs
- Combined support + marketing in one tool

## Relevant Skills

- onboarding-cro
- churn-prevention
- email-sequence
