# Buffer

Social media scheduling and analytics platform for managing content across LinkedIn, Twitter/X, Instagram, Facebook, and Pinterest.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Buffer API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/buffer.js |
| SDK | - | Use API directly |

## Authentication

- **Access Token**: Found in Buffer Account Settings → Apps → Create App or use OAuth
- Pass as `Authorization: Bearer {access_token}` header

## Common Agent Operations

### Get profile (channel) list

```bash
GET https://api.bufferapp.com/1/profiles.json
Authorization: Bearer {access_token}
```

### Schedule a post

```bash
POST https://api.bufferapp.com/1/updates/create.json
Authorization: Bearer {access_token}

{
  "profile_ids": ["{profile_id}"],
  "text": "We just shipped a new feature that saves 3 hours per week. Here's how it works: {link}",
  "scheduled_at": "2025-11-25T10:00:00Z"
}
```

### Get analytics for a post

```bash
GET https://api.bufferapp.com/1/updates/{update_id}/interactions.json?event=reach
Authorization: Bearer {access_token}
```

### Get pending posts in queue

```bash
GET https://api.bufferapp.com/1/profiles/{profile_id}/updates/pending.json
Authorization: Bearer {access_token}
```

## Key Features

- **Queue management**: See and reorder all scheduled posts across channels
- **Analytics**: Reach, engagement, and follower growth metrics per post
- **Ideas storage**: Save and organize post drafts for later scheduling
- **Team collaboration**: Approval workflows and team drafting

## When to Use

- Managing a content calendar across multiple social channels from one place
- Teams that need a simple, reliable scheduling tool without social management complexity

## Relevant Skills

- social-content
- content-strategy
- launch-strategy
