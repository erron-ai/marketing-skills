# Product Hunt

Launch platform and community for discovering new tech products. Use the API to schedule launches, monitor upvotes and comments, track launch rankings, and analyze post performance.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | GraphQL API v2 |
| MCP | - | Not available |
| CLI | ✓ | See clis/producthunt.js |
| SDK | - | Use the GraphQL API directly |

## Authentication

```bash
PRODUCTHUNT_API_KEY=your_api_key         # Developer token from api.producthunt.com
PRODUCTHUNT_API_SECRET=your_api_secret   # From app settings
```

Product Hunt uses OAuth 2.0. For agent automation, use a developer token with the `public` and `private` scopes.

## Key Concepts

**Post**: A product listing on Product Hunt (has upvotes, comments, and a daily ranking)
**Collection**: A curated list of products by topic or theme
**Topic**: A category tag on posts (e.g., "Developer Tools", "Marketing")
**Maker**: A user who built or contributed to the product
**Hunter**: The user who submitted the post to Product Hunt
**Upcoming page**: Pre-launch page to collect subscribers before launch day

## Common Operations

### Fetch today's top posts

```javascript
const query = `
  query {
    posts(order: VOTES, first: 20) {
      edges {
        node {
          id
          name
          tagline
          votesCount
          commentsCount
          url
          createdAt
        }
      }
    }
  }
`;

const response = await fetch('https://api.producthunt.com/v2/api/graphql', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.PRODUCTHUNT_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query })
});
```

### Search posts by topic

```javascript
const query = `
  query {
    posts(topic: "marketing", order: VOTES, first: 10) {
      edges {
        node { id name votesCount tagline url }
      }
    }
  }
`;
```

### Get a specific post by ID

```javascript
const query = `
  query {
    post(id: "123456") {
      name
      votesCount
      commentsCount
      rank
      featuredAt
      topics { edges { node { name } } }
    }
  }
`;
```

### List comments on a post

```javascript
const query = `
  query {
    post(id: "123456") {
      comments(first: 50) {
        edges {
          node { id body createdAt user { name } }
        }
      }
    }
  }
`;
```

### Get post ranking history

Track upvote velocity by polling the post at regular intervals:
```javascript
// Poll every 30 minutes during launch day
const post = await getPost(postId);
const snapshot = {
  timestamp: new Date().toISOString(),
  votes: post.votesCount,
  comments: post.commentsCount,
  rank: post.rank
};
```

## Marketing Use Cases

**Launch day monitoring**
- Track votes, comments, and rank in real time
- Alert team via Slack when rank changes
- Monitor comment sentiment and flag questions for founder response

**Competitive research**
- Find top-ranked posts in your product category
- Analyze post taglines, screenshots, and comments for messaging insights
- Track competitors' launch timing and performance

**Launch planning**
- Research which days see the most engagement (typically Tuesday–Thursday)
- Analyze what topics trend on Product Hunt
- Use the upcoming page to build a subscriber list before launch

## Rate Limits

Product Hunt's API uses rate limiting per token. Avoid polling more than once per minute during normal use; during launch day monitoring, once per 5–10 minutes is appropriate.

## Related Skills

- `launch-strategy`: Coordinate full launch plan including Product Hunt timing
- `social-content`: Draft launch day posts and comment responses
- `analytics-tracking`: Log upvote milestones to your analytics stack
