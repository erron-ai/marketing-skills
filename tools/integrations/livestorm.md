# Livestorm

Video engagement platform for webinars, virtual events, and product demos — with detailed attendance analytics and automation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Livestorm API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/livestorm.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Livestorm Account Settings → API
- Pass as `Authorization: {api_key}` header

## Common Agent Operations

### List events

```bash
GET https://api.livestorm.co/v1/events
Authorization: {api_key}
```

### Register an attendee

```bash
POST https://api.livestorm.co/v1/sessions/{session_id}/people
Authorization: {api_key}

{
  "data": {
    "type": "people",
    "attributes": {
      "email": "attendee@example.com",
      "first_name": "Alex",
      "last_name": "Rivera"
    }
  }
}
```

### Get session attendance report

```bash
GET https://api.livestorm.co/v1/sessions/{session_id}/people?filter[attendance_status]=attended
Authorization: {api_key}
```

## Key Differentiators vs. Demio

- **More event types**: Webinars, on-demand, virtual events, and meeting rooms
- **Better automation**: Zapier and HubSpot integrations are deeper
- **Analytics**: More detailed attendance and engagement analytics per attendee

## When to Use

- Teams running multiple event types (webinars + virtual summits + product demos)
- Organizations needing detailed per-attendee engagement data for follow-up
- Larger events with complex registration workflows

## Relevant Skills

- launch-strategy
- email-sequence
