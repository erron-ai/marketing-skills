# Google Search Console

Free Google tool that shows how your site performs in organic search — impressions, clicks, rankings, indexing status, and crawl issues.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Search Analytics API, URL Inspection API, Sitemaps API |
| MCP | - | Not available |
| CLI | ✓ | See clis/google-search-console.js |
| SDK | ✓ | Google APIs client libraries |

## Authentication

- **Type**: OAuth 2.0 or Service Account
- **Scope**: `https://www.googleapis.com/auth/webmasters.readonly` (read), `https://www.googleapis.com/auth/webmasters` (write)

## Common Agent Operations

### Get search performance data

```bash
POST https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query

{
  "startDate": "2025-10-01",
  "endDate": "2025-10-31",
  "dimensions": ["query", "page"],
  "rowLimit": 100,
  "startRow": 0
}
```

### Inspect a URL

```bash
POST https://searchconsole.googleapis.com/v1/urlInspection/index:inspect

{
  "inspectionUrl": "https://yoursite.com/blog/post-slug",
  "siteUrl": "https://yoursite.com/"
}
```

### Submit a URL for indexing

```bash
POST https://indexing.googleapis.com/v3/urlNotifications:publish

{
  "url": "https://yoursite.com/new-page",
  "type": "URL_UPDATED"
}
```

### List sitemaps

```bash
GET https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps
```

## Key Use Cases

- **Rank tracking**: Which queries is the site showing for and where is it ranking?
- **Click-through rate optimization**: High impressions, low CTR = title/description to improve
- **Indexing health**: Are the right pages indexed? Are any blocked or erroring?
- **Core Web Vitals**: Performance data aggregated by page group

## Rate Limits

- Search Analytics: 1,200 queries per minute per user
- URL Inspection: 2,000 requests per day per project

## Relevant Skills

- seo-audit
- content-strategy
- programmatic-seo
