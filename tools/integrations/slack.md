# Slack

Team messaging platform used to deliver marketing alerts, automated reports, campaign notifications, and pipeline updates directly to relevant teams and stakeholders.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Web API for messaging, files, channels, users |
| MCP | ✓ | Available via Slack MCP server |
| CLI | ✓ | See clis/slack.js |
| SDK | ✓ | `@slack/web-api` (Node.js), `slack_sdk` (Python) |

## Authentication

```bash
# Bot token — recommended for agent use
SLACK_BOT_TOKEN=xoxb-xxxx  # from api.slack.com/apps → OAuth & Permissions

# Webhook URL — for simple one-way alerts only
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/yyy/zzz
```

Bot token scopes required:
- `chat:write` — post messages
- `channels:read` — list public channels
- `channels:history` — read channel messages
- `files:write` — upload files
- `users:read` — look up user info

## Key Concepts

**Channel**: A group conversation (public or private)
**DM**: Direct message to one or more users
**Thread**: A reply chain within a message
**Block Kit**: Slack's structured UI framework for rich messages (buttons, dropdowns, sections)
**Incoming Webhook**: Simple URL-based message posting without OAuth

## Common Marketing Operations

### Send a simple alert

```javascript
const { WebClient } = require('@slack/web-api');
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

await slack.chat.postMessage({
  channel: '#marketing-alerts',
  text: '🚨 Conversion rate dropped below 2% — check GA4 dashboard'
});
```

### Send a rich Block Kit message

```javascript
await slack.chat.postMessage({
  channel: '#growth-team',
  blocks: [
    {
      type: 'header',
      text: { type: 'plain_text', text: '📊 Weekly Marketing Report' }
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: '*New Signups*\n142 (+18% WoW)' },
        { type: 'mrkdwn', text: '*Trial Conversions*\n23 (16.2%)' },
        { type: 'mrkdwn', text: '*Pipeline Generated*\n$84,000' },
        { type: 'mrkdwn', text: '*Top Channel*\nOrganic Search' }
      ]
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: 'View Full Report' },
          url: 'https://app.example.com/reports/weekly'
        }
      ]
    }
  ]
});
```

### Post in a thread

```javascript
// First post the parent message and get its ts
const parent = await slack.chat.postMessage({
  channel: '#campaigns',
  text: 'Campaign launch checklist starting now...'
});

// Reply in thread
await slack.chat.postMessage({
  channel: '#campaigns',
  thread_ts: parent.ts,
  text: '✅ Email sequence activated'
});
```

### Upload a file (e.g., a report CSV)

```javascript
await slack.files.upload({
  channels: '#marketing-ops',
  filename: 'weekly-report.csv',
  content: csvContent,
  initial_comment: 'Weekly metrics export — attached for review'
});
```

### List all channels

```javascript
const result = await slack.conversations.list({
  exclude_archived: true,
  types: 'public_channel,private_channel',
  limit: 200
});
const channels = result.channels.map(c => ({ id: c.id, name: c.name }));
```

### Find a user by email

```javascript
const result = await slack.users.lookupByEmail({
  email: 'teammate@company.com'
});
const userId = result.user.id;
```

## Marketing Use Cases

**Campaign launch notifications**
- Post to `#campaigns` when a new email sequence activates
- Alert `#growth-team` when an A/B test reaches statistical significance
- Notify `#engineering` when a tracking pixel needs review

**Automated weekly reports**
- Post a Block Kit summary of key metrics every Monday morning
- Include WoW/MoM change and a direct link to the dashboard

**Pipeline alerts**
- Notify `#sales` when a marketing-qualified lead is created
- Alert the AE when a lead from their named account books a demo
- Post a daily digest of new signups above a lead score threshold

**Real-time monitoring**
- Trigger an alert if CAC exceeds a set threshold
- Ping `#on-call` if conversion rate drops more than 20% from prior day

## Rate Limits

| Limit | Value |
|-------|-------|
| `chat.postMessage` | 1 request/second |
| `conversations.list` | 50 requests/minute |
| Max message length | 40,000 characters |
| Block Kit blocks per message | 50 |

## Related Skills

- `analytics-tracking`: Send Slack alerts when metric thresholds are breached
- `ab-test-setup`: Post significance notifications to relevant channels
- `demand-generation`: Report pipeline metrics to `#growth` weekly
