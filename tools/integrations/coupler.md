# Coupler.io

Automated data pipeline tool for connecting marketing data sources to spreadsheets, dashboards, and BI tools on a schedule.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Coupler.io REST API |
| MCP | ✓ | Available via Coupler MCP |
| CLI | ✓ | See clis/coupler.js |
| SDK | - | Use API directly |

## Authentication

- **API Token**: Found in Coupler account settings
- Pass as `Authorization: Token {api_token}` header

## Common Agent Operations

### List importers

```bash
GET https://api.coupler.io/v1/importers
Authorization: Token {api_token}
```

### Run an importer on demand

```bash
POST https://api.coupler.io/v1/importers/{importer_id}/actions/run
Authorization: Token {api_token}
```

### Get import run status

```bash
GET https://api.coupler.io/v1/importers/{importer_id}/runs/{run_id}
Authorization: Token {api_token}
```

## Key Use Cases

- Scheduled data pulls from Google Ads, Facebook Ads, or HubSpot into Google Sheets
- Automated reporting without writing ETL code
- Syncing CRM data to a spreadsheet for sales forecasting

## When to Use

- Marketing teams that need automated reporting pipelines to spreadsheets or BI tools
- Teams working across many data sources without a dedicated data engineer

## Relevant Skills

- analytics-tracking
- paid-ads
