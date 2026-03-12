# HubSpot

SMB-friendly CRM with built-in marketing, sales, and support tools — including email marketing, forms, sequences, and deal pipeline management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full CRM, Marketing, and CMS APIs |
| MCP | - | Not available |
| CLI | ✓ | Built-in HubSpot CLI for CMS |
| SDK | ✓ | Node.js, Python client libraries |

## Authentication

- **Private App Token**: Recommended — create in HubSpot Settings → Integrations → Private Apps
- **OAuth 2.0**: For apps used by multiple HubSpot accounts

## Common Agent Operations

### Create or update a contact

```bash
POST https://api.hubapi.com/crm/v3/objects/contacts
Authorization: Bearer {private_app_token}

{
  "properties": {
    "email": "contact@example.com",
    "firstname": "Alex",
    "lastname": "Rivera",
    "company": "Acme Corp",
    "lifecyclestage": "lead"
  }
}
```

### Search for contacts

```bash
POST https://api.hubapi.com/crm/v3/objects/contacts/search
Authorization: Bearer {private_app_token}

{
  "filterGroups": [{
    "filters": [{
      "propertyName": "lifecyclestage",
      "operator": "EQ",
      "value": "marketingqualifiedlead"
    }]
  }]
}
```

### Create a deal

```bash
POST https://api.hubapi.com/crm/v3/objects/deals
Authorization: Bearer {private_app_token}

{
  "properties": {
    "dealname": "Acme Corp - Pro Plan",
    "dealstage": "appointmentscheduled",
    "amount": "2400",
    "closedate": "2025-12-31"
  }
}
```

### Update lifecycle stage

```bash
PATCH https://api.hubapi.com/crm/v3/objects/contacts/{contact_id}
Authorization: Bearer {private_app_token}

{
  "properties": {"lifecyclestage": "salesqualifiedlead"}
}
```

## Key Concepts

- **Lifecycle stages**: Subscriber → Lead → MQL → SQL → Opportunity → Customer
- **Pipelines**: Customizable deal stages for your sales process
- **Sequences**: Automated outreach sequences for sales reps
- **Workflows**: Automated actions triggered by contact behavior or properties

## When to Use

- Startups and SMBs that want CRM + email marketing + sales tools in one platform
- Teams that want tight marketing-to-sales alignment in a single system

## Relevant Skills

- revops
- cold-email
- email-sequence
