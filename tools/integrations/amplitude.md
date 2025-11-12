# Amplitude

Behavioral analytics platform for understanding how users engage with your product and predicting which actions lead to retention.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | HTTP API for tracking, Chart API for querying |
| MCP | - | Not available |
| CLI | ✓ | See clis/amplitude.js |
| SDK | ✓ | JavaScript, iOS, Android, Python, and more |

## Authentication

- **Tracking API**: API key (per project)
- **Chart/Dashboard API**: API key + secret key (Basic auth)

## Common Agent Operations

### Send events (HTTP API)

```bash
POST https://api2.amplitude.com/2/httpapi

{
  "api_key": "{api_key}",
  "events": [{
    "user_id": "user_123",
    "event_type": "trial_started",
    "event_properties": {
      "plan": "growth",
      "source": "pricing_page"
    },
    "user_properties": {
      "plan": "growth",
      "company": "Acme Corp"
    }
  }]
}
```

### Query event data (Chart API)

```bash
GET https://amplitude.com/api/2/events/list
Authorization: Basic {base64(api_key:secret_key)}
```

## JavaScript SDK Basics

```javascript
import * as amplitude from '@amplitude/analytics-browser';

amplitude.init('YOUR_API_KEY');

amplitude.setUserId('user_123');
amplitude.setUserProperties({ plan: 'pro', company_size: '50-200' });

amplitude.track('Feature Activated', {
  feature: 'team_invites',
  invite_count: 3
});
```

## Key Concepts

- **Events** — User interactions to track
- **User properties** — Persistent attributes of a user
- **Cohorts** — Behavioral segments built from event sequences
- **Pathfinder** — Visualizes the most common paths users take through your product
- **Compass** — Identifies leading indicators of retention

## When to Use

- Understanding which features drive long-term retention
- Building cohorts based on behavior for product decisions
- Analyzing conversion paths from signup to activation
- Measuring the impact of onboarding changes

## Relevant Skills

- analytics-tracking
- onboarding-cro
- ab-test-setup
