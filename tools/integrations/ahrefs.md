# Ahrefs

SEO toolset known for the best backlink index, keyword explorer, and content research. Includes site audit, rank tracker, and competitive analysis.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Ahrefs API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/ahrefs.js |
| SDK | - | Use API directly |

## Authentication

- **API Token**: Found in Ahrefs Account → API
- Pass as `Authorization: Bearer {token}` header

## Common Agent Operations

### Get backlinks for a domain

```bash
GET https://api.ahrefs.com/v3/site-explorer/backlinks?select=url_from,domain_rating_source,anchor,url_to&target=example.com&mode=domain&limit=20&output=json
Authorization: Bearer {token}
```

### Keyword difficulty and search volume

```bash
GET https://api.ahrefs.com/v3/keywords-explorer/overview?select=keyword,difficulty,volume,clicks,cpc&keywords=project+management+software&country=us&output=json
Authorization: Bearer {token}
```

### Get organic traffic estimate for a domain

```bash
GET https://api.ahrefs.com/v3/site-explorer/overview?select=org_traffic,org_keywords,domain_rating&target=example.com&mode=domain&output=json
Authorization: Bearer {token}
```

### Find content gaps (keywords competitor ranks for, you don't)

```bash
GET https://api.ahrefs.com/v3/site-explorer/content-gap?targets=competitor.com&mode=domain&competitors_mode=domain&output=json
Authorization: Bearer {token}
```

## Key Use Cases

- **Link building**: Finding link prospects and analyzing competitor backlink profiles
- **Content gap analysis**: Keywords competitors rank for that you don't yet
- **Content research**: Finding top-performing content in a niche by traffic and links
- **Rank tracking**: Monitoring your position for target keywords

## Rate Limits

- API rows consumed per request — monitor in Ahrefs dashboard
- Standard plan: 500 API rows/month

## Relevant Skills

- seo-audit
- content-strategy
- competitor-alternatives
- programmatic-seo
