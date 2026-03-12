# Supermetrics

Marketing data aggregation platform — pulls data from ad platforms, analytics, and CRMs into Google Sheets, Data Studio, BigQuery, and other destinations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Supermetrics REST API |
| MCP | ✓ | Available via Supermetrics MCP |
| CLI | ✓ | See clis/supermetrics.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Supermetrics account settings
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Run a data query

```bash
POST https://api.supermetrics.com/enterprise/v2/query/data/json
Authorization: Bearer {api_key}

{
  "ds_id": "GA4",
  "ds_accounts": ["{ga4_property_id}"],
  "date_range_type": "last_30_days",
  "fields": ["Sessions", "Transactions", "Revenue"],
  "dimensions": ["Channel"]
}
```

### List available data sources

```bash
GET https://api.supermetrics.com/enterprise/v2/meta/ds
Authorization: Bearer {api_key}
```

## Key Use Cases

- Building a unified marketing dashboard in Google Sheets or Looker Studio
- Automating weekly performance reports that pull from multiple ad platforms
- Sending cross-channel marketing data to BigQuery or a data warehouse

## When to Use

- Marketing teams that need reporting across Google Ads, Meta, LinkedIn, and analytics in one view
- Teams using Google Sheets as their BI tool and needing automated data pulls

## Relevant Skills

- analytics-tracking
- paid-ads
