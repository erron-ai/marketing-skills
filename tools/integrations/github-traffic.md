# GitHub Traffic

GitHub's built-in traffic analytics for repositories. Use the API to track stars, forks, clones, referral sources, and visitor counts — essential for developer-tool companies measuring organic developer awareness.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | GitHub REST API v3 (Traffic endpoints) |
| MCP | ✓ | Available via GitHub MCP server |
| CLI | ✓ | See clis/github-traffic.js |
| SDK | ✓ | `@octokit/rest` (Node.js) |

## Authentication

```bash
GITHUB_TOKEN=ghp_xxxx   # Personal access token with repo scope
GITHUB_OWNER=your-org-or-username
GITHUB_REPO=your-repo-name
```

Required token scopes: `repo` (for private repos) or no scope (for public repos with traffic data)

Note: Traffic data requires push access to the repository. Token must belong to a user with write access.

## Key Concepts

**Views**: Unique visitors and total page views for the repository over the last 14 days
**Clones**: Unique cloners and total clone count over the last 14 days
**Referrers**: Top 10 external sites sending traffic to the repository
**Popular paths**: Most viewed paths within the repository (README, docs pages, etc.)
**Stargazers**: Users who have starred the repository
**Forks**: Repository copies (a strong growth signal for developer tools)

## Data Availability

GitHub retains traffic data for only 14 days. Poll at least weekly to avoid gaps.

## Common Operations

### Get repository views (last 14 days)

```javascript
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const views = await octokit.rest.repos.getViews({
  owner: process.env.GITHUB_OWNER,
  repo: process.env.GITHUB_REPO,
  per: 'day'  // 'day' or 'week'
});
console.log(views.data);
// { count: 1420, uniques: 342, views: [{ timestamp, count, uniques }, ...] }
```

### Get repository clones

```javascript
const clones = await octokit.rest.repos.getClones({
  owner: owner,
  repo: repo,
  per: 'day'
});
```

### Get top referrers

```javascript
const referrers = await octokit.rest.repos.getTopReferrers({
  owner: owner,
  repo: repo
});
// Returns top 10 sources: [{ referrer, count, uniques }, ...]
```

### Get popular paths

```javascript
const paths = await octokit.rest.repos.getTopPaths({
  owner: owner,
  repo: repo
});
// Returns top 10 paths: [{ path, title, count, uniques }, ...]
```

### Get star history

```javascript
const stars = await octokit.rest.activity.listStargazersForRepo({
  owner: owner,
  repo: repo,
  headers: { Accept: 'application/vnd.github.star+json' },  // includes timestamp
  per_page: 100
});
```

### Get forks

```javascript
const forks = await octokit.rest.repos.listForks({
  owner: owner,
  repo: repo,
  sort: 'newest',
  per_page: 100
});
```

## Marketing Use Cases

**Developer awareness tracking**
- Track daily unique visitors and views as a leading indicator of developer interest
- Monitor clone counts as an intent signal (clones > views signals strong interest)

**Content attribution**
- Check top referrers after publishing a blog post, tweet, or Product Hunt launch
- Identify which external sites drive the most developer traffic
- Track referral spikes to attribute traffic to specific campaigns

**Star velocity analysis**
- Track star growth rate week over week
- Correlate star spikes with marketing activities (launches, content, press)
- Benchmark against similar repos in the ecosystem

**Community health**
- Fork count as a measure of community engagement
- Track the ratio of clones to views (high ratio = strong conversion)
- Monitor popular paths to understand which docs attract the most attention

## Limitations

- Traffic data is only available for the last 14 days
- Referrer data shows only the top 10 sources
- Star timestamps require the `application/vnd.github.star+json` header
- Clone and view data resets after 14 days — store it if you need historical records

## Related Skills

- `analytics-tracking`: Store GitHub traffic data in your analytics stack for long-term trending
- `launch-strategy`: Use star velocity and traffic spikes to evaluate launch impact
- `seo-audit`: Check which documentation pages get the most organic traffic via GitHub search
