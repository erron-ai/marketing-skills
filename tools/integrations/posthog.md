# PostHog

Open-source product analytics with session recording, feature flags, A/B testing, and funnel analysis — all self-hostable.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Event capture, query, and admin APIs |
| MCP | - | Not available |
| CLI | ✓ | Built into PostHog CLI |
| SDK | ✓ | JavaScript, Python, Node, Go, Ruby, and more |

## Authentication

- **Personal API key**: Found in Account Settings → Personal API Keys
- **Project API key**: For client-side tracking (public)

## Common Agent Operations

### Capture an event

```bash
POST https://app.posthog.com/capture/

{
  "api_key": "{project_api_key}",
  "event": "trial_started",
  "distinct_id": "user_123",
  "properties": {
    "plan": "growth",
    "$current_url": "https://yourapp.com/signup"
  }
}
```

### Query events via Insights API

```bash
POST https://app.posthog.com/api/projects/{project_id}/insights/trend/
Authorization: Bearer {personal_api_key}

{
  "events": [{"id": "trial_started", "type": "events"}],
  "date_from": "-30d"
}
```

## JavaScript SDK Basics

```javascript
import posthog from 'posthog-js';

posthog.init('phc_YOUR_KEY', { api_host: 'https://app.posthog.com' });

posthog.identify('user_123', {
  email: 'user@example.com',
  plan: 'growth'
});

posthog.capture('feature_used', {
  feature: 'export',
  file_format: 'csv'
});
```

## Key Capabilities

- **Session recordings** — Watch exact user sessions with clicks, scrolls, and rage clicks
- **Heatmaps** — Aggregated click and scroll maps per page
- **Feature flags** — Roll out features incrementally and target by user properties
- **Experiments** — A/B test with automatic statistical analysis
- **Funnels** — Visualize drop-off at each step of a conversion sequence

## When to Use

- Full product analytics stack without stitching together multiple tools
- Self-hosted analytics for privacy-sensitive products
- Combining analytics with feature flags and A/B testing in one platform

## Relevant Skills

- analytics-tracking
- ab-test-setup
- onboarding-cro
