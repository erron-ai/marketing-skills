# Plausible Analytics

Privacy-first, cookieless web analytics that is GDPR-compliant without consent banners. Lightweight script, simple reporting.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Stats API for querying data |
| MCP | - | Not available |
| CLI | ✓ | See clis/plausible.js |
| SDK | - | Script tag embed, no SDK |

## Authentication

- **API key**: Found in Account Settings → API Keys
- **Site ID**: Your domain (e.g., `yoursite.com`)

## Common Agent Operations

### Query site stats

```bash
GET https://plausible.io/api/v1/stats/aggregate?site_id=yoursite.com&period=30d&metrics=visitors,pageviews,bounce_rate,visit_duration
Authorization: Bearer {api_key}
```

### Get traffic sources breakdown

```bash
GET https://plausible.io/api/v1/stats/breakdown?site_id=yoursite.com&property=visit:source&period=30d&metrics=visitors
Authorization: Bearer {api_key}
```

### Get top pages

```bash
GET https://plausible.io/api/v1/stats/breakdown?site_id=yoursite.com&property=event:page&period=30d&metrics=visitors,pageviews
Authorization: Bearer {api_key}
```

### Track a custom event (client-side)

```javascript
// After adding the Plausible script tag
plausible('Trial Started', {props: {plan: 'pro'}});
```

## Script Installation

```html
<script defer data-domain="yoursite.com" src="https://plausible.io/js/script.js"></script>
```

## Key Differences from GA4

- No cookies — no consent banner required for EU visitors
- No personal data collected — fully GDPR, CCPA compliant
- Script is under 1KB — no performance impact
- No sampling — every visit is counted

## When to Use

- Privacy-conscious teams who want simple analytics without consent management
- Sites where adding a cookie consent banner would hurt conversions
- Supplementary analytics alongside GA4 for cross-validation

## Rate Limits

- Stats API: 600 requests per hour

## Relevant Skills

- analytics-tracking
- seo-audit
