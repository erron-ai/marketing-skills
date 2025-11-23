# Outreach

Enterprise sales engagement platform for managing multi-touch outbound sequences, call logging, and pipeline analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Outreach REST API |
| MCP | ✓ | Available via Outreach MCP |
| CLI | ✓ | See clis/outreach.js |
| SDK | - | Use API directly |

## Authentication

- **OAuth 2.0**: Required for API access — register an app in Outreach API Explorer
- **Bearer Token**: Obtained via OAuth flow

## Common Agent Operations

### Create a prospect

```bash
POST https://api.outreach.io/api/v2/prospects
Authorization: Bearer {access_token}

{
  "data": {
    "type": "prospect",
    "attributes": {
      "emails": ["alex@acme.com"],
      "firstName": "Alex",
      "lastName": "Rivera",
      "title": "VP of Marketing",
      "company": "Acme Corp"
    }
  }
}
```

### Add a prospect to a sequence

```bash
POST https://api.outreach.io/api/v2/sequenceStates
Authorization: Bearer {access_token}

{
  "data": {
    "type": "sequenceState",
    "relationships": {
      "prospect": {"data": {"type": "prospect", "id": "{prospect_id}"}},
      "sequence": {"data": {"type": "sequence", "id": "{sequence_id}"}},
      "mailbox": {"data": {"type": "mailbox", "id": "{mailbox_id}"}}
    }
  }
}
```

### Get sequence performance stats

```bash
GET https://api.outreach.io/api/v2/sequences/{sequence_id}?fields[sequence]=openCount,clickCount,replyCount,deliveredCount
Authorization: Bearer {access_token}
```

## When to Use

- Enterprise sales teams running multi-touch, multi-channel outbound
- Organizations with dedicated SDR/BDR teams
- Companies needing detailed sequence analytics and A/B testing

## Relevant Skills

- cold-email
- revops
- sales-enablement
