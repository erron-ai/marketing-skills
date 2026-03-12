# Notion

Workspace and knowledge management platform for building content calendars, marketing databases, campaign trackers, and team wikis.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for pages, databases, and blocks |
| MCP | ✓ | Available via Notion MCP server |
| CLI | ✓ | See clis/notion.js |
| SDK | ✓ | `@notionhq/client` (Node.js), community SDKs for Python |

## Authentication

```bash
# Personal integrations (recommended for agent use)
NOTION_API_KEY=secret_xxxx  # from notion.so/my-integrations

# The integration must be shared with the specific pages/databases it needs to access
# In Notion: "Share" → search for your integration name → click Invite
```

## Key Concepts

**Page**: A document with blocks (text, tables, toggles, embeds, etc.)
**Database**: A structured collection of pages with properties (date, select, multi-select, relation, rollup, etc.)
**Block**: The atomic unit of content inside a page — text, heading, image, callout, etc.
**Integration**: A bot with API access to specific pages/databases
**Workspace**: Top-level container for all pages and databases

## Common Marketing Operations

### List all databases in a workspace

```javascript
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const response = await notion.search({
  filter: { property: 'object', value: 'database' }
});
console.log(response.results.map(db => ({ id: db.id, title: db.title[0]?.plain_text })));
```

### Query a content calendar database

```javascript
const response = await notion.databases.query({
  database_id: process.env.NOTION_CONTENT_DB_ID,
  filter: {
    and: [
      { property: 'Status', select: { equals: 'In Progress' } },
      { property: 'Publish Date', date: { on_or_before: new Date().toISOString() } }
    ]
  },
  sorts: [{ property: 'Publish Date', direction: 'ascending' }]
});
```

### Create a new content item

```javascript
const page = await notion.pages.create({
  parent: { database_id: process.env.NOTION_CONTENT_DB_ID },
  properties: {
    Name: { title: [{ text: { content: 'Q4 Email Campaign Brief' } }] },
    Status: { select: { name: 'Draft' } },
    'Publish Date': { date: { start: '2025-12-15' } },
    Channel: { multi_select: [{ name: 'Email' }, { name: 'LinkedIn' }] },
    Assignee: { people: [{ id: 'user-id-here' }] }
  }
});
```

### Update a page property

```javascript
await notion.pages.update({
  page_id: 'page-id-here',
  properties: {
    Status: { select: { name: 'Published' } },
    'Published At': { date: { start: new Date().toISOString() } }
  }
});
```

### Add content blocks to a page

```javascript
await notion.blocks.children.append({
  block_id: 'page-id-here',
  children: [
    {
      object: 'block',
      type: 'heading_2',
      heading_2: { rich_text: [{ text: { content: 'Campaign Overview' } }] }
    },
    {
      object: 'block',
      type: 'paragraph',
      paragraph: { rich_text: [{ text: { content: 'This campaign targets...' } }] }
    }
  ]
});
```

### Search across a workspace

```javascript
const results = await notion.search({
  query: 'content calendar',
  filter: { property: 'object', value: 'page' },
  sort: { direction: 'descending', timestamp: 'last_edited_time' }
});
```

## Marketing Use Cases

**Content calendar management**
- Query upcoming posts by channel, status, and due date
- Create new content briefs directly from agent
- Update status as content moves through workflow

**Campaign tracker**
- Store campaign name, goal, budget, channels, dates, and owner
- Query active campaigns; pull status for reporting
- Log spend and conversions as a campaign property

**Editorial database**
- Track article ideas with keyword, target audience, assigned writer, and stage
- Query articles ready for SEO review
- Create new article briefs with structured properties

**Marketing wiki**
- Store brand voice guidelines, ICP definitions, and positioning
- Create the `.agents/product-marketing-context.md` equivalent inside Notion for team use
- Link databases with relation properties (e.g., Campaign → related Content Items)

## Rate Limits

| Limit | Value |
|-------|-------|
| API requests | 3 requests/second per integration |
| Max block children per request | 100 |
| Max results per database query | 100 (use `start_cursor` for pagination) |
| Page size limit | 2000 blocks |

## Error Handling

```javascript
try {
  const response = await notion.pages.retrieve({ page_id: id });
} catch (error) {
  if (error.code === 'object_not_found') {
    // Page doesn't exist or integration lacks access
  }
  if (error.code === 'rate_limited') {
    // Wait and retry
  }
}
```

## Related Skills

- `content-strategy`: Use Notion databases as the content calendar backend
- `product-marketing-context`: Store context docs as Notion pages for team visibility
- `analytics-tracking`: Pull campaign data and log metrics back to Notion as properties
