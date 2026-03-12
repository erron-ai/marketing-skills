# Mailchimp

Email marketing platform for newsletters, automated campaigns, and audience management. Strong template editor and reporting.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Mailchimp Marketing API v3 |
| MCP | ✓ | Available via Mailchimp MCP |
| CLI | ✓ | See clis/mailchimp.js |
| SDK | ✓ | Official Python and Node.js clients |

## Authentication

- **API Key**: Found in Account → Extras → API Keys
- Use Basic auth: `Authorization: Basic {base64(anystring:api_key)}`
- **Server prefix**: Included in the API key after the dash — e.g., `us21`

## Common Agent Operations

### Add a subscriber to a list

```bash
POST https://{server}.api.mailchimp.com/3.0/lists/{list_id}/members
Authorization: Basic {base64(anystring:api_key)}

{
  "email_address": "user@example.com",
  "status": "subscribed",
  "merge_fields": {"FNAME": "Alex", "LNAME": "Rivera"}
}
```

### Get list stats

```bash
GET https://{server}.api.mailchimp.com/3.0/lists/{list_id}
Authorization: Basic {base64(anystring:api_key)}
```

### Create and send a campaign

```bash
POST https://{server}.api.mailchimp.com/3.0/campaigns
Authorization: Basic {base64(anystring:api_key)}

{
  "type": "regular",
  "recipients": {"list_id": "{list_id}"},
  "settings": {
    "subject_line": "What we shipped this week",
    "from_name": "erron.ai team",
    "reply_to": "team@erron.ai"
  }
}
```

### Get campaign performance

```bash
GET https://{server}.api.mailchimp.com/3.0/reports/{campaign_id}
Authorization: Basic {base64(anystring:api_key)}
```

## When to Use

- SMB newsletter and marketing email with a good template editor
- Broad segmentation and audience management
- Integrations with e-commerce and CRM tools

## Relevant Skills

- email-sequence
- launch-strategy
- analytics-tracking
