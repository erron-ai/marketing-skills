# Demio

Marketing-focused webinar platform with clean interface, attendee engagement tools, and good registration page customization.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Demio REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/demio.js |
| SDK | - | Use API directly |

## Authentication

- **API Key + Secret**: Found in Demio Account Settings → API
- Pass as `Api-Key: {api_key}` and `Api-Secret: {api_secret}` headers

## Common Agent Operations

### List upcoming events

```bash
GET https://my.demio.com/api/v1/event
Api-Key: {api_key}
Api-Secret: {api_secret}
```

### Register an attendee

```bash
POST https://my.demio.com/api/v1/event/register
Api-Key: {api_key}
Api-Secret: {api_secret}

{
  "id": "{event_id}",
  "name": "Alex Rivera",
  "email": "alex@acme.com",
  "date_id": "{specific_session_id}"
}
```

### Get event attendees and stats

```bash
GET https://my.demio.com/api/v1/event/{event_id}/attendees
Api-Key: {api_key}
Api-Secret: {api_secret}
```

## Key Features

- **Engagement tools**: Polls, Q&A, offers/CTAs, handouts during webinar
- **Recording**: Auto-records and makes available after the event
- **Registration pages**: Customizable without leaving the platform
- **Email reminders**: Automated pre-event and post-event email sequences

## When to Use

- Marketing webinars: demos, workshops, thought leadership sessions
- Product launches with live audience
- Partner co-marketing events

## Relevant Skills

- launch-strategy
- email-sequence
- analytics-tracking
