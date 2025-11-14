# Close CRM

High-velocity sales CRM designed for inside sales teams — built around calling, email sequences, and pipeline reporting without the overhead of Salesforce.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for all CRM objects |
| MCP | - | Not available |
| CLI | ✓ | See clis/close.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Settings → Developer → API Keys
- Pass as Basic auth username with empty password: `Authorization: Basic {base64(api_key:)}`

## Common Agent Operations

### Create a lead

```bash
POST https://api.close.com/api/v1/lead/
Authorization: Basic {base64(api_key:)}

{
  "name": "Acme Corp",
  "contacts": [{
    "name": "Alex Rivera",
    "emails": [{"email": "alex@acme.com", "type": "office"}]
  }]
}
```

### Search leads

```bash
GET https://api.close.com/api/v1/lead/?query=status_id%3Astat_active&_fields=id,display_name,status_label,contacts
Authorization: Basic {base64(api_key:)}
```

### Create an activity (note)

```bash
POST https://api.close.com/api/v1/activity/note/
Authorization: Basic {base64(api_key:)}

{
  "lead_id": "lead_abc123",
  "note": "Discovery call completed. Interested in annual plan. Follow up in 2 weeks."
}
```

### Get pipeline opportunities

```bash
GET https://api.close.com/api/v1/opportunity/?_fields=id,lead_name,value,status_label,date_won,assigned_to
Authorization: Basic {base64(api_key:)}
```

## When to Use

- Startups and SMBs with high-velocity inside sales teams
- Teams doing significant email and phone outreach
- Sales teams that want simplicity over Salesforce complexity

## Relevant Skills

- revops
- cold-email
- sales-enablement
