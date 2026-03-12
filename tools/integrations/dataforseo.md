# DataForSEO

API-first SEO data provider offering programmatic access to SERP results, keyword data, backlinks, and on-page audits at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API with task-based and live endpoints |
| MCP | - | Not available |
| CLI | ✓ | See clis/dataforseo.js |
| SDK | ✓ | Official Python and PHP clients |

## Authentication

- **Type**: HTTP Basic Auth
- **Credentials**: Login email + API password

## Common Agent Operations

### Get SERP results for a keyword (live)

```bash
POST https://api.dataforseo.com/v3/serp/google/organic/live/advanced
Authorization: Basic {base64(login:password)}

[{
  "keyword": "project management software",
  "language_code": "en",
  "location_code": 2840,
  "device": "desktop"
}]
```

### Get keyword volume data

```bash
POST https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live
Authorization: Basic {base64(login:password)}

[{
  "keywords": ["project management", "task tracker", "team collaboration tool"],
  "language_code": "en",
  "location_code": 2840
}]
```

### Run a backlink analysis

```bash
POST https://api.dataforseo.com/v3/backlinks/summary/live
Authorization: Basic {base64(login:password)}

[{"target": "example.com", "include_subdomains": true}]
```

## Key Use Cases

- Programmatic SERP data at scale for competitive monitoring
- Building keyword research pipelines without manual tooling
- On-demand backlink data for content and SEO scripts
- Ranking data ingestion for custom rank tracking dashboards

## Relevant Skills

- seo-audit
- programmatic-seo
- ai-seo
