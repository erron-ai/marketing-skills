# Typeform

Conversational form builder — presents one question at a time for a more engaging, survey-like experience with higher completion rates.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Typeform API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/typeform.js |
| SDK | - | Use API directly |

## Authentication

- **Personal Access Token**: Found in Typeform Account → Developer Apps
- Pass as `Authorization: Bearer {token}` header

## Common Agent Operations

### Get form responses

```bash
GET https://api.typeform.com/forms/{form_id}/responses?page_size=50
Authorization: Bearer {token}
```

### List forms

```bash
GET https://api.typeform.com/forms?page_size=20
Authorization: Bearer {token}
```

### Get a specific response

```bash
GET https://api.typeform.com/forms/{form_id}/responses?included_response_ids={response_id}
Authorization: Bearer {token}
```

## Webhook Setup

Receive real-time responses via webhook:

```bash
POST https://api.typeform.com/forms/{form_id}/webhooks

{
  "tag": "response_webhook",
  "url": "https://yourserver.com/typeform-webhook",
  "enabled": true
}
```

## When to Use

- Lead capture forms where completion rate matters — Typeform typically outperforms standard forms
- Surveys and research questionnaires for customers
- Onboarding questionnaires to gather personalization data

## Relevant Skills

- form-cro
- page-cro
- analytics-tracking
