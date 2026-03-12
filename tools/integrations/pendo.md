# Pendo

Product analytics platform with in-app guides, feature adoption tracking, and user feedback collection — built for product-led growth.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Pendo Aggregation API |
| MCP | - | Not available |
| CLI | ✓ | See clis/pendo.js |
| SDK | - | JavaScript snippet |

## Authentication

- **Integration Key**: Found in Pendo Settings → Integrations → Integration Keys
- Pass as `x-pendo-integration-key: {key}` header

## Common Agent Operations

### Get feature adoption data

```bash
GET https://app.pendo.io/api/v1/feature?starttime=1730419200000&endtime=1733097600000
x-pendo-integration-key: {key}
```

### Get visitor data

```bash
POST https://app.pendo.io/api/v1/aggregation
x-pendo-integration-key: {key}

{
  "response": {"mimeType": "application/json"},
  "request": {
    "pipeline": [
      {"source": {"visitors": null}},
      {"filter": "attributes.plan == \"trial\""},
      {"limit": 100}
    ]
  }
}
```

### Get page event data

```bash
POST https://app.pendo.io/api/v1/aggregation
x-pendo-integration-key: {key}

{
  "request": {
    "pipeline": [
      {"source": {"pageEvents": {"startTime": 1730419200000}}},
      {"filter": "pageId == \"{page_id}\""},
      {"group": {"group": ["visitorId"], "fields": ["count(numEvents)"]}}
    ]
  }
}
```

## Key Capabilities

- **Feature tagging**: Track clicks on any UI element without code
- **In-app guides**: Tooltips, modals, and onboarding walkthroughs without engineering
- **NPS surveys**: In-product NPS collection with follow-up funnels
- **Product reports**: Which features get used, by which user segments

## When to Use

- Product and growth teams that want to understand feature adoption without engineering
- Companies running product-led growth who need to optimize in-product activation
- Teams that want to add in-app guides and onboarding without custom code

## Relevant Skills

- onboarding-cro
- churn-prevention
- analytics-tracking
