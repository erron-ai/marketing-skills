# Segment

Customer data platform (CDP) that collects events from your website, app, and servers and routes them to any downstream analytics, marketing, or data tool.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | HTTP Tracking API, Config API |
| MCP | - | Not available |
| CLI | ✓ | See clis/segment.js |
| SDK | ✓ | JavaScript, Node, Python, Go, iOS, Android, and more |

## Authentication

- **Write Key**: Per source, used in tracking calls (keep server-side keys secret)
- **Access Token**: For Config API (workspace management)

## Common Agent Operations

### Identify a user

```bash
POST https://api.segment.io/v1/identify
Authorization: Basic {base64(write_key:)}

{
  "userId": "user_123",
  "traits": {
    "email": "user@example.com",
    "plan": "pro",
    "company": "Acme Corp",
    "created_at": "2025-11-01T00:00:00Z"
  }
}
```

### Track an event

```bash
POST https://api.segment.io/v1/track
Authorization: Basic {base64(write_key:)}

{
  "userId": "user_123",
  "event": "Subscription Upgraded",
  "properties": {
    "plan_from": "starter",
    "plan_to": "pro",
    "revenue": 79
  }
}
```

### Page view

```bash
POST https://api.segment.io/v1/page
Authorization: Basic {base64(write_key:)}

{
  "userId": "user_123",
  "name": "Pricing",
  "properties": {
    "url": "https://yourapp.com/pricing"
  }
}
```

## JavaScript SDK Basics

```javascript
analytics.identify('user_123', {
  email: 'user@example.com',
  plan: 'pro'
});

analytics.track('Trial Started', {
  plan: 'pro',
  trial_days: 14
});

analytics.page('Pricing Page');
```

## Key Use Cases

- **Single tracking implementation** that fans out to GA4, Mixpanel, Amplitude, Intercom, customer.io, and others simultaneously
- **Data consistency** — one event definition, deployed everywhere
- **Retroactive destinations** — add a new tool without re-instrumenting tracking

## When to Use

- You use multiple analytics or marketing tools and want consistent event data across all of them
- You want to add new tools in the future without touching tracking code
- You need to route different events to different downstream destinations

## Relevant Skills

- analytics-tracking
- revops
