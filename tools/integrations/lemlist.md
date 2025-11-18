# Lemlist

Cold email platform known for advanced personalization — personalized images, video thumbnails, and liquid syntax variables in outreach campaigns.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Lemlist REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/lemlist.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Settings → Integrations → API
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### List all campaigns

```bash
GET https://api.lemlist.com/api/campaigns
Authorization: Bearer {api_key}
```

### Add a lead to a campaign

```bash
POST https://api.lemlist.com/api/campaigns/{campaign_id}/leads/{email}
Authorization: Bearer {api_key}

{
  "firstName": "Alex",
  "lastName": "Rivera",
  "companyName": "Acme Corp",
  "icebreaker": "Love what you're building at Acme"
}
```

### Get campaign stats

```bash
GET https://api.lemlist.com/api/campaigns/{campaign_id}/stats
Authorization: Bearer {api_key}
```

### Mark a lead as done

```bash
DELETE https://api.lemlist.com/api/campaigns/{campaign_id}/leads/{email}
Authorization: Bearer {api_key}
```

## Key Features

- **Personalized images**: Dynamically generated images with prospect's name, company, or LinkedIn photo
- **Liquid syntax**: Advanced variable personalization in subject lines and email body
- **Multichannel**: Email + LinkedIn outreach in the same sequence
- **AI-generated icebreakers**: Auto-personalized opening lines based on LinkedIn profile

## When to Use

- Outbound teams where personalization is a competitive advantage
- Multichannel sequences (email + LinkedIn)
- Teams with creative capacity to produce personalized assets

## Relevant Skills

- cold-email
- sales-enablement
