# Kit (formerly ConvertKit)

Email platform designed for creators, bloggers, and course sellers — with powerful automation, tagging, and sequence features.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Kit API v4 |
| MCP | - | Not available |
| CLI | ✓ | See clis/kit.js |
| SDK | ✓ | Official Ruby gem, community Node/Python clients |

## Authentication

- **API Key**: Found in Settings → Advanced → API
- Pass as `X-Kit-Api-Key: {api_key}` header (v4 API)

## Common Agent Operations

### List subscribers

```bash
GET https://api.kit.com/v4/subscribers?status=active
X-Kit-Api-Key: {api_key}
```

### Subscribe someone and add tags

```bash
POST https://api.kit.com/v4/subscribers
X-Kit-Api-Key: {api_key}

{
  "email_address": "user@example.com",
  "first_name": "Alex",
  "tags": ["trial-user", "sourced-google"]
}
```

### Add a tag to a subscriber

```bash
POST https://api.kit.com/v4/tags/{tag_id}/subscribers
X-Kit-Api-Key: {api_key}

{"email_address": "user@example.com"}
```

### Trigger a sequence

```bash
POST https://api.kit.com/v4/sequences/{sequence_id}/subscribe
X-Kit-Api-Key: {api_key}

{"email_address": "user@example.com"}
```

## Key Concepts

- **Tags**: Behavioral labels applied to subscribers
- **Segments**: Dynamic audiences based on tag combinations
- **Sequences**: Time-based email drip series
- **Broadcasts**: One-time emails to a segment or all subscribers
- **Forms**: Embeddable opt-in forms connected to automations

## When to Use

- Creators, bloggers, course sellers, and newsletter operators
- Products where email is a primary revenue channel
- Teams that need powerful tagging-based segmentation without CRM complexity

## Relevant Skills

- email-sequence
- content-strategy
- launch-strategy
