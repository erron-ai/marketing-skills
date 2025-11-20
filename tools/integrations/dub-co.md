# Dub.co

Link management and attribution platform — short links with analytics, UTM builders, and conversion tracking across channels.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Dub API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/dub.js |
| SDK | ✓ | TypeScript/JavaScript SDK |

## Authentication

- **API Key**: Found in Dub Dashboard → Settings → API Keys
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Create a short link with UTMs

```bash
POST https://api.dub.co/links
Authorization: Bearer {api_key}

{
  "url": "https://yourproduct.com/landing?utm_source=newsletter&utm_medium=email&utm_campaign=nov-launch",
  "domain": "yourdub.link",
  "key": "nov-launch"
}
```

### Get link click analytics

```bash
GET https://api.dub.co/analytics?linkId={link_id}&interval=30d&groupBy=timeseries
Authorization: Bearer {api_key}
```

### List all links in a workspace

```bash
GET https://api.dub.co/links?workspaceId={workspace_id}&page=1&pageSize=50
Authorization: Bearer {api_key}
```

## Key Features

- **Link analytics**: Clicks by device, country, referrer, and time
- **UTM builder**: Consistent UTM parameter management across a team
- **QR codes**: Auto-generated QR code for every short link
- **Link targeting**: Show different destinations based on device type or country

## When to Use

- Managing campaign URLs across channels with consistent UTM tracking
- Referral program link generation and tracking
- Anywhere you share links externally and want click data

## Relevant Skills

- referral-program
- analytics-tracking
- launch-strategy
