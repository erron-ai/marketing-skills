# Wistia

Marketing video hosting platform with viewer heatmaps, engagement graphs, and viewer-level analytics — designed for marketing teams, not general file storage.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Wistia Data API |
| MCP | - | Not available |
| CLI | ✓ | See clis/wistia.js |
| SDK | - | Use API directly |

## Authentication

- **API Password**: Found in Account Settings → API Password
- Use Basic auth: `Authorization: Basic {base64(api:api_password)}`

## Common Agent Operations

### List all videos

```bash
GET https://api.wistia.com/v1/medias.json?per_page=25&page=1
Authorization: Basic {base64(api:api_password)}
```

### Get video stats

```bash
GET https://api.wistia.com/v1/stats/medias/{media_hashed_id}.json
Authorization: Basic {base64(api:api_password)}
```

Returns: loads, plays, play_rate, hours_watched, engagement (% of video watched on average).

### Get viewer-level stats for a video

```bash
GET https://api.wistia.com/v1/stats/medias/{media_hashed_id}/visitors.json
Authorization: Basic {base64(api:api_password)}
```

### Upload a video

```bash
POST https://upload.wistia.com/
Authorization: Basic {base64(api:api_password)}

{
  "url": "https://example.com/video.mp4",
  "name": "Product Demo - November 2025",
  "project_id": "{project_id}"
}
```

## Key Features

- **Viewer heatmaps**: See exactly where each viewer watched, skipped, or rewatched
- **Engagement graphs**: Audience retention curve for any video
- **Lead capture**: Collect emails from viewers at a specific timestamp
- **Channels**: Netflix-style video hubs for product content

## When to Use

- Hosting product demo videos where engagement data matters
- Gating video content with email capture
- Tracking which sales demo content viewers watch most

## Relevant Skills

- page-cro
- analytics-tracking
- social-content
