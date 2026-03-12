# Keywords Everywhere

Browser-based keyword research tool that shows volume, CPC, and competition data inline on Google, YouTube, Amazon, and other sites. Credit-based API available.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Credit-based REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/keywords-everywhere.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Keywords Everywhere account settings
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Get keyword volume and metrics

```bash
POST https://api.keywordseverywhere.com/v1/get_keyword_data
Authorization: Bearer {api_key}
Content-Type: application/x-www-form-urlencoded

kw[]=project+management+software&kw[]=team+collaboration&country=us&currency=USD&dataSource=cli
```

Response includes: `vol` (monthly volume), `cpc`, `competition`, `trend` (12-month trend data)

### Check remaining API credits

```bash
GET https://api.keywordseverywhere.com/v1/account
Authorization: Bearer {api_key}
```

## When to Use

- Quick, low-cost keyword volume lookups for content planning
- Checking CPC estimates before running paid search campaigns
- In-browser research while browsing competitor sites and Google SERPs

## Credit Consumption

- 1 credit per keyword per data source
- Credits never expire

## Relevant Skills

- content-strategy
- seo-audit
- paid-ads
