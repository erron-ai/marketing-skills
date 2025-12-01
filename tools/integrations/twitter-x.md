# Twitter / X

Social platform with a developer API for scheduling posts, analyzing engagement, monitoring mentions, searching content, and managing social campaigns at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Twitter API v2 |
| MCP | ✓ | Available via Twitter/X MCP server |
| CLI | ✓ | See clis/twitter-x.js |
| SDK | ✓ | `twitter-api-v2` (Node.js), `tweepy` (Python) |

## Authentication

```bash
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
TWITTER_BEARER_TOKEN=your_bearer_token  # For read-only operations
```

Twitter API v2 uses OAuth 1.0a for write operations (posting) and Bearer Token for read-only searches.

## Access Levels

| Tier | Limits | Use case |
|------|--------|----------|
| Free | 1,500 post writes/month | Very limited |
| Basic ($100/mo) | 50K post writes/month | Active scheduling |
| Pro ($5K/mo) | 300K post writes/month | High-volume use |
| Enterprise | Custom | Full access |

## Common Operations

### Post a tweet

```javascript
const { TwitterApi } = require('twitter-api-v2');
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const tweet = await client.v2.tweet('Your tweet text here');
```

### Search recent tweets

```javascript
// Bearer token client for read-only operations
const readClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

const results = await readClient.v2.search('"your product name" OR "your category"', {
  max_results: 100,
  'tweet.fields': ['created_at', 'public_metrics', 'author_id'],
  expansions: ['author_id'],
  sort_order: 'recency'
});
```

### Get tweet metrics

```javascript
const tweet = await readClient.v2.singleTweet(tweetId, {
  'tweet.fields': ['public_metrics', 'created_at']
});
console.log(tweet.data.public_metrics);
// { retweet_count, reply_count, like_count, quote_count, impression_count }
```

### Get user timeline

```javascript
const timeline = await readClient.v2.userTimeline(userId, {
  max_results: 100,
  'tweet.fields': ['public_metrics', 'created_at'],
  exclude: ['retweets', 'replies']
});
```

### Monitor mentions

```javascript
const mentions = await readClient.v2.userMentionTimeline(userId, {
  max_results: 100,
  'tweet.fields': ['public_metrics', 'author_id', 'created_at'],
  start_time: new Date(Date.now() - 86400000).toISOString()  // last 24h
});
```

### Create a thread (multiple tweets)

```javascript
// Post sequentially, each replying to the previous
const first = await client.v2.tweet('1/ Thread opener — main point here...');
const second = await client.v2.reply('2/ Supporting detail...', first.data.id);
const third = await client.v2.reply('3/ Conclusion and CTA...', second.data.id);
```

## Marketing Use Cases

**Brand monitoring**
- Track mentions of your product, competitors, and category keywords
- Alert team when a notable account (high follower count) mentions you
- Monitor sentiment around launch announcements

**Thought leadership distribution**
- Schedule threads and posts aligned with content calendar
- Repurpose blog posts and videos as native X threads
- Engage with replies within 30 minutes of posting for algorithmic boost

**Competitive intelligence**
- Track competitor posts and engagement metrics
- Monitor which topics drive high engagement in your category

**Audience analytics**
- Track follower growth rate over time
- Analyze which post formats (threads, single tweets, polls) perform best
- Identify top-performing content for paid amplification

## Rate Limits

Rate limits vary by endpoint and access tier. Key limits on Basic tier:
- Search recent tweets: 60 requests/15 min
- Post tweet: 50K/month total
- User timeline: 75 requests/15 min

## Related Skills

- `social-content`: Draft X threads and posts aligned with brand voice
- `launch-strategy`: Plan launch day posting sequence for Product Hunt and announcement
- `analytics-tracking`: Track engagement metrics alongside other channel performance
