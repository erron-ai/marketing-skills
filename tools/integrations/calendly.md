# Calendly

Meeting scheduling platform for sales, marketing, and support — embeds booking links directly into outreach and pages.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Calendly API v2 |
| MCP | - | Not available |
| CLI | ✓ | See clis/calendly.js |
| SDK | - | Use API directly |

## Authentication

- **Personal Access Token**: Found in Calendly Profile → Integrations → API and Webhooks

## Common Agent Operations

### Get current user info

```bash
GET https://api.calendly.com/users/me
Authorization: Bearer {token}
```

### List scheduled events

```bash
GET https://api.calendly.com/scheduled_events?user={user_uri}&min_start_time=2025-11-01T00:00:00Z&max_start_time=2025-11-30T23:59:59Z
Authorization: Bearer {token}
```

### Get event details and invitee info

```bash
GET https://api.calendly.com/scheduled_events/{uuid}/invitees
Authorization: Bearer {token}
```

### List available event types

```bash
GET https://api.calendly.com/event_types?user={user_uri}
Authorization: Bearer {token}
```

## Embedding a Scheduling Button

```html
<!-- Inline embed -->
<div class="calendly-inline-widget" data-url="https://calendly.com/yourname/demo" style="min-width:320px;height:700px;"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

## Webhook Events

Register a webhook to receive events when meetings are scheduled or cancelled:
- `invitee.created` — A new meeting is booked
- `invitee.canceled` — A meeting is cancelled

## When to Use

- Inbound demo scheduling from the website
- SDR outbound — embed scheduling link in cold email sequences
- Sales follow-up — share a link after discovery call

## Relevant Skills

- revops
- cold-email
- sales-enablement
