# Google Analytics 4 (GA4)

Web analytics platform for tracking user behavior, measuring marketing performance, and attributing conversions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Data API for reporting, Admin API for configuration |
| MCP | ✓ | Available via Google Analytics MCP server |
| CLI | ✓ | See clis/ga4.js |
| SDK | ✓ | gtag.js for browser, measurement protocol for server |

## Authentication

- **Type**: OAuth 2.0 or Service Account
- **Scopes**: `https://www.googleapis.com/auth/analytics.readonly` (read), `https://www.googleapis.com/auth/analytics.edit` (write)
- **Setup**: Create a service account in Google Cloud Console and grant it Viewer or Editor access to your GA4 property

## Common Agent Operations

### Query a report

```bash
POST https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:runReport

{
  "dateRanges": [{"startDate": "30daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "sessionDefaultChannelGroup"}],
  "metrics": [{"name": "sessions"}, {"name": "conversions"}, {"name": "totalRevenue"}]
}
```

### Get real-time active users

```bash
POST https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:runRealtimeReport

{
  "dimensions": [{"name": "unifiedScreenName"}],
  "metrics": [{"name": "activeUsers"}]
}
```

### List conversion events

```bash
GET https://analyticsadmin.googleapis.com/v1beta/properties/{property_id}/conversionEvents
```

### Create a conversion event

```bash
POST https://analyticsadmin.googleapis.com/v1beta/properties/{property_id}/conversionEvents

{
  "eventName": "trial_started"
}
```

## Client-Side Event Tracking

### Track a custom event with gtag.js

```javascript
gtag('event', 'trial_started', {
  plan: 'pro',
  source: 'homepage_cta'
});
```

### Send an event via Measurement Protocol (server-side)

```bash
POST https://www.google-analytics.com/mp/collect?measurement_id={id}&api_secret={secret}

{
  "client_id": "user_abc123",
  "events": [{
    "name": "upgraded",
    "params": {
      "plan_from": "free",
      "plan_to": "pro",
      "value": 49.00,
      "currency": "USD"
    }
  }]
}
```

## Key Dimensions and Metrics

### Dimensions
- `sessionDefaultChannelGroup` — Organic Search, Paid Search, Email, Direct, etc.
- `sessionCampaignName` — UTM campaign name
- `landingPage` — First page of the session
- `deviceCategory` — desktop, mobile, tablet
- `country` — User country

### Metrics
- `sessions` — Total sessions
- `activeUsers` — Active unique users
- `newUsers` — First-time users
- `conversions` — Total conversion events
- `engagementRate` — Engaged sessions / total sessions
- `averageSessionDuration` — Mean session length in seconds

## When to Use

- Tracking website traffic and marketing channel performance
- Measuring conversion events across the funnel
- Attribution analysis for paid campaigns
- Understanding user behavior patterns and drop-off points

## Rate Limits

- Data API: 10 requests per second per property
- Admin API: varies by endpoint (check quota in Google Cloud Console)
- Measurement Protocol: 1M events/day on free tier

## Relevant Skills

- analytics-tracking
- ab-test-setup
- seo-audit
- paid-ads
