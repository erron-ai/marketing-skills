# Google Ads

Search and display advertising platform — the largest PPC network, with access to Google Search, Display Network, YouTube, and Performance Max.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Google Ads API v17+ |
| MCP | ✓ | Available via Google Ads MCP |
| CLI | ✓ | See clis/google-ads.js |
| SDK | ✓ | Python, Java, .NET, Ruby, PHP clients |

## Authentication

- **OAuth 2.0** with a developer token and manager account (MCC)
- Requires: client ID + client secret + refresh token + developer token + customer ID

## Common Agent Operations

### Get campaign performance (GAQL query)

```bash
POST https://googleads.googleapis.com/v17/customers/{customer_id}/googleAds:search
Authorization: Bearer {access_token}
developer-token: {developer_token}

{
  "query": "SELECT campaign.name, metrics.clicks, metrics.impressions, metrics.conversions, metrics.cost_micros FROM campaign WHERE segments.date DURING LAST_30_DAYS ORDER BY metrics.cost_micros DESC LIMIT 10"
}
```

### Get keyword performance

```bash
POST https://googleads.googleapis.com/v17/customers/{customer_id}/googleAds:search

{
  "query": "SELECT ad_group_criterion.keyword.text, metrics.clicks, metrics.average_cpc, metrics.conversions FROM keyword_view WHERE segments.date DURING LAST_30_DAYS"
}
```

### Create a responsive search ad

```bash
POST https://googleads.googleapis.com/v17/customers/{customer_id}/adGroupAds:mutate

{
  "operations": [{
    "create": {
      "adGroup": "customers/{customer_id}/adGroups/{ad_group_id}",
      "ad": {
        "responsiveSearchAd": {
          "headlines": [{"text": "Project Management Software"}, {"text": "Track Team Work Effortlessly"}],
          "descriptions": [{"text": "Used by 12,000+ teams. Start your free trial today."}]
        },
        "finalUrls": ["https://yourproduct.com/lp/project-management"]
      }
    }
  }]
}
```

## Key Concepts

- **GAQL**: Google Ads Query Language — SQL-like syntax for all reporting
- **Customer ID**: The account ID (10-digit number)
- **Micros**: All monetary values in the API are in micros (divide by 1,000,000 for dollars)
- **Smart Bidding**: Target CPA, Target ROAS, Maximize Conversions

## Relevant Skills

- paid-ads
- ad-creative
- analytics-tracking
