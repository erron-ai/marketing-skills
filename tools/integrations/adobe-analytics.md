# Adobe Analytics

Enterprise-grade digital analytics platform with advanced segmentation, attribution, and data workspaces. Part of Adobe Experience Cloud.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Reporting API 2.0, Data Insertion API |
| MCP | - | Not available |
| CLI | ✓ | See clis/adobe-analytics.js |
| SDK | ✓ | AppMeasurement (JavaScript), Web SDK |

## Authentication

- **Type**: OAuth 2.0 via Adobe Developer Console
- **Scopes**: `openid`, `AdobeAnalytics`
- **Setup**: Create a project in Adobe Developer Console, add Adobe Analytics API, generate credentials

## Common Agent Operations

### Run a report (Reporting API 2.0)

```bash
POST https://analytics.adobe.io/api/{company_id}/reports
Authorization: Bearer {access_token}
x-api-key: {client_id}
x-proxy-global-company-id: {company_id}

{
  "rsid": "{report_suite_id}",
  "globalFilters": [{"type": "dateRange", "dateRange": "2025-11-01/2025-11-30"}],
  "metricContainer": {
    "metrics": [{"id": "metrics/visits"}, {"id": "metrics/orders"}]
  },
  "dimension": "variables/mobiledevicetype"
}
```

### List report suites

```bash
GET https://analytics.adobe.io/api/{company_id}/reportsuites
Authorization: Bearer {access_token}
x-api-key: {client_id}
```

## Key Concepts

- **Report Suite**: The data container — one per site/app environment
- **eVars**: Custom dimensions for tracking campaign and user attributes
- **Events**: Custom success metrics beyond standard traffic metrics
- **Segments**: Reusable filters applied to any report
- **Calculated metrics**: Custom metrics built from combinations of raw data

## When to Use

- Enterprise organizations already in the Adobe Experience Cloud
- Situations requiring advanced attribution modeling and audience segmentation
- Teams needing deep integration with Adobe Target, Campaign, or Audience Manager

## Relevant Skills

- analytics-tracking
- paid-ads
