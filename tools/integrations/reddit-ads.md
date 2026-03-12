# Reddit Ads

Reddit's advertising platform for reaching niche communities through promoted posts and display ads. Supports subreddit targeting, interest targeting, and keyword targeting for highly specific audiences.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Reddit Ads API v3 |
| MCP | - | Not available |
| CLI | ✓ | See clis/reddit-ads.js |
| SDK | - | Use REST API directly |

## Authentication

```bash
REDDIT_ADS_CLIENT_ID=your_client_id
REDDIT_ADS_CLIENT_SECRET=your_client_secret
REDDIT_ADS_ACCOUNT_ID=your_account_id
```

Reddit Ads uses OAuth 2.0 with the `ads:read` and `ads:edit` scopes.

## Key Concepts

**Campaign**: Top-level container with budget, objective, and schedule
**Ad Group**: Targeting definition within a campaign (subreddit, interest, or keyword targeting)
**Ad**: The creative shown to users — promoted post (link or text) or display
**Subreddit targeting**: Show ads only in specific communities (highest precision)
**Interest targeting**: Reach users based on broader Reddit behavior
**Community targeting**: Target based on specific subreddit communities

## Common Operations

### List all campaigns

```bash
GET https://ads-api.reddit.com/api/v3/accounts/{account_id}/campaigns
Authorization: Bearer {token}
```

```javascript
const response = await fetch(
  `https://ads-api.reddit.com/api/v3/accounts/${accountId}/campaigns`,
  { headers: { Authorization: `Bearer ${token}` } }
);
const { data } = await response.json();
```

### Create a campaign

```javascript
const campaign = {
  name: 'Q4 SaaS Awareness — Developer Communities',
  objective: 'BRAND_AWARENESS',
  status: 'PAUSED',
  dailyBudget: 5000,  // in cents
  totalBudget: 150000,
  startTime: '2025-12-01T00:00:00Z',
  endTime: '2025-12-31T23:59:59Z'
};
```

### Create an ad group with subreddit targeting

```javascript
const adGroup = {
  name: 'Devtools subreddits',
  campaignId: 'campaign-id',
  targeting: {
    subreddits: ['r/devops', 'r/sysadmin', 'r/programming', 'r/webdev']
  },
  bidType: 'CPM',
  bidAmount: 800,  // in cents
  optimizationGoal: 'IMPRESSIONS'
};
```

### Fetch campaign performance

```javascript
const response = await fetch(
  `https://ads-api.reddit.com/api/v3/accounts/${accountId}/reports`,
  {
    method: 'POST',
    body: JSON.stringify({
      entityType: 'CAMPAIGN',
      metrics: ['impressions', 'clicks', 'ctr', 'spend', 'conversions'],
      dateRange: { start: '2025-11-01', end: '2025-11-30' }
    })
  }
);
```

## Marketing Use Cases

**Developer and technical communities**
- Target `r/devops`, `r/sysadmin`, `r/webdev`, `r/programming` for dev tools
- Technical audiences are ad-resistant — use educational content, not hard sells

**Niche B2B audiences**
- Target `r/entrepreneur`, `r/startups`, `r/marketing` for SMB SaaS
- Subreddit targeting is more precise than most paid channels for niche ICPs

**Consumer and DTC brands**
- Target interest-based audiences in lifestyle, fitness, fashion, or gaming subreddits
- Reddit users respond better to native-feeling posts than display banners

**Competitive targeting**
- Target communities where competitor products are discussed
- Monitor which subreddits mention your product category

## Rate Limits

Reddit Ads API rate limits vary by endpoint. General limit: 60 requests/minute per OAuth token.

## Related Skills

- `paid-ads`: Include Reddit in the overall paid media strategy
- `content-strategy`: Reddit requires native, community-first creative — different from other paid channels
- `ad-creative`: Write Reddit ad copy that feels organic to the subreddit culture
