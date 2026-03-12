# SavvyCal

Scheduling tool with overlay availability — lets invitees see their own calendar alongside yours when booking, reducing back-and-forth.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | SavvyCal REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/savvycal.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in SavvyCal Settings → Developers
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### List scheduling links

```bash
GET https://savvycal.com/api/scheduling-links
Authorization: Bearer {api_key}
```

### Get scheduled meetings

```bash
GET https://savvycal.com/api/meetings?start_at=2025-11-01&end_at=2025-11-30
Authorization: Bearer {api_key}
```

## Key Differentiator vs. Calendly

**Overlay scheduling**: When invitees open a SavvyCal link, they can overlay their own Google or Outlook calendar to find times that work — without giving you access to their calendar. This dramatically reduces "let me check my calendar" friction.

## When to Use

- Sales and founder-led calls where invitee experience matters
- Teams that want to differentiate their scheduling experience
- Replacing Calendly when the overlay feature is meaningful for your audience

## Relevant Skills

- revops
- cold-email
