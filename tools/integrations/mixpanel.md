# Mixpanel

Product analytics platform for tracking user behavior, measuring conversion funnels, and understanding retention.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Ingestion API, Query API, Export API |
| MCP | - | Not available |
| CLI | ✓ | See clis/mixpanel.js |
| SDK | ✓ | JavaScript, Python, iOS, Android, and more |

## Authentication

- **Ingestion**: Project token (public, safe to expose in client-side code)
- **Query API**: Service Account credentials (username:secret as Basic auth)
- **Export API**: API secret

## Common Agent Operations

### Track an event (Ingestion API)

```bash
POST https://api.mixpanel.com/track

{
  "event": "trial_started",
  "properties": {
    "token": "{project_token}",
    "distinct_id": "user_123",
    "plan": "pro",
    "signup_source": "google_ads"
  }
}
```

### Update a user profile

```bash
POST https://api.mixpanel.com/engage

{
  "$token": "{project_token}",
  "$distinct_id": "user_123",
  "$set": {
    "$email": "user@example.com",
    "plan": "pro",
    "company_size": "50-200"
  }
}
```

### Query event data (Query API)

```bash
POST https://mixpanel.com/api/2.0/insights

{
  "project_id": 123456,
  "params": {
    "events": [{"event": "trial_started"}],
    "time_range": {
      "from_date": "2025-11-01",
      "to_date": "2025-11-30"
    }
  }
}
```

### Get funnel data

```bash
GET https://mixpanel.com/api/2.0/funnels?funnel_id={funnel_id}&from_date=2025-11-01&to_date=2025-11-30
```

## JavaScript SDK Basics

```javascript
// Initialize
mixpanel.init('YOUR_PROJECT_TOKEN');

// Identify a user
mixpanel.identify('user_123');

// Set profile properties
mixpanel.people.set({
  '$email': 'user@example.com',
  'plan': 'pro'
});

// Track an event
mixpanel.track('Feature Used', {
  feature_name: 'export',
  format: 'csv'
});
```

## Key Concepts

- **Events** — User actions you want to measure (signup, purchase, feature usage)
- **Properties** — Attributes attached to events or user profiles
- **Funnels** — Sequences of events that define a conversion path
- **Cohorts** — Saved user segments based on behavior
- **Retention** — How many users return to perform a specific action over time

## When to Use

- Tracking product feature adoption
- Analyzing where users drop out of conversion funnels
- Cohort retention analysis
- Segmenting users by behavior for targeted campaigns

## Rate Limits

- Ingestion API: No hard limit — batch events for efficiency
- Query API: Rate varies by plan

## Relevant Skills

- analytics-tracking
- ab-test-setup
- onboarding-cro
