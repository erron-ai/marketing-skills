# ActiveCampaign

Email marketing automation platform with built-in CRM capabilities — popular for complex nurture automation and sales pipeline management in one tool.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | ActiveCampaign API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/activecampaign.js |
| SDK | ✓ | Official PHP client, community Node/Python |

## Authentication

- **API Key + Account URL**: Found in Settings → Developer
- Pass as `Api-Token: {api_key}` header

## Common Agent Operations

### Create or update a contact

```bash
POST https://{account}.api-us1.com/api/3/contacts
Api-Token: {api_key}

{
  "contact": {
    "email": "user@example.com",
    "firstName": "Alex",
    "lastName": "Rivera",
    "fieldValues": [{"field": "1", "value": "growth"}]
  }
}
```

### Add a tag to a contact

```bash
POST https://{account}.api-us1.com/api/3/contactTags
Api-Token: {api_key}

{
  "contactTag": {
    "contact": "{contact_id}",
    "tag": "{tag_id}"
  }
}
```

### Create a deal (CRM)

```bash
POST https://{account}.api-us1.com/api/3/deals
Api-Token: {api_key}

{
  "deal": {
    "contact": "{contact_id}",
    "title": "Acme Corp - Growth Plan",
    "value": "4800",
    "currency": "usd",
    "stage": "{stage_id}"
  }
}
```

## Key Features

- **Automations**: Visual workflow builder with complex branching and conditions
- **CRM**: Built-in pipeline management for sales-assisted motions
- **Site tracking**: Track website visits and trigger automations from page views
- **Lead scoring**: Score contacts based on email engagement and site behavior

## When to Use

- Teams that want email automation and CRM in one tool without full Salesforce complexity
- Products with a mix of inbound and sales-assisted motion

## Relevant Skills

- email-sequence
- revops
- churn-prevention
