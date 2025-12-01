# Airtable

Flexible database platform that combines spreadsheet usability with relational database power. Use for content calendars, campaign trackers, editorial databases, marketing asset libraries, and CRM-lite workflows.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v0 |
| MCP | ✓ | Available via Airtable MCP server |
| CLI | ✓ | See clis/airtable.js |
| SDK | ✓ | `airtable` (Node.js) |

## Authentication

```bash
AIRTABLE_API_KEY=patXXXXX   # Personal access token from airtable.com/create/tokens
AIRTABLE_BASE_ID=appXXXXX   # From the API docs URL for your base
```

## Key Concepts

**Base**: A database (collection of tables)
**Table**: A sheet within a base — like a database table with typed columns
**View**: A filtered, sorted, or grouped perspective on a table
**Field**: A column in a table (text, number, date, select, linked record, formula, etc.)
**Record**: A row in a table
**Linked record**: A field that references records in another table (relational)
**Formula field**: Computed value based on other fields

## Common Operations

### List records from a table

```javascript
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID);

const records = await base('Content Calendar').select({
  view: 'This Week',
  fields: ['Title', 'Status', 'Channel', 'Publish Date', 'Assignee']
}).all();

records.forEach(r => console.log(r.id, r.fields));
```

### Filter records

```javascript
const inProgress = await base('Campaigns').select({
  filterByFormula: "AND({Status} = 'In Progress', IS_BEFORE({End Date}, TODAY()))"
}).all();
```

### Create a new record

```javascript
const newRecord = await base('Content Calendar').create({
  'Title': 'Q4 Email Campaign — Product Update',
  'Status': 'Draft',
  'Channel': ['Email'],
  'Publish Date': '2025-12-10',
  'Assignee': ['rec_user_id']
});
```

### Update a record

```javascript
await base('Content Calendar').update(recordId, {
  'Status': 'Published',
  'Published At': new Date().toISOString().split('T')[0]
});
```

### Delete a record

```javascript
await base('Content Calendar').destroy(recordId);
```

### Search across records

```javascript
// Airtable doesn't have native search — use filterByFormula
const results = await base('Contacts').select({
  filterByFormula: `SEARCH("${email}", {Email})`
}).all();
```

### Pagination for large tables

```javascript
const allRecords = [];
await base('Campaigns').select({ pageSize: 100 }).eachPage((records, fetchNextPage) => {
  allRecords.push(...records);
  fetchNextPage();
});
```

## Marketing Use Cases

**Content calendar**
- Columns: Title, Status, Channel, Author, Publish Date, Target Keyword, URL
- Views: "This Week", "Needs Review", "By Channel"
- Automation: trigger notifications when status changes to "Ready to Publish"

**Campaign tracker**
- Columns: Campaign Name, Goal, Budget, Channels, Start/End Date, Owner, Results
- Link to a Contacts table for campaign attribution
- Formula fields for budget remaining and days until launch

**Editorial database**
- Track article ideas with priority, keyword difficulty, and target audience
- Linked records to track which campaigns each piece of content belongs to

**Influencer CRM**
- Track creator name, platform, follower count, engagement rate, campaign history
- Link to campaigns table to see which influencers ran which campaigns

## Rate Limits

| Limit | Value |
|-------|-------|
| API requests | 5 requests/second per base |
| Records per response | 100 (paginate with offset) |
| Max records per base | 125,000 (on Pro plan) |

## Related Skills

- `content-strategy`: Use Airtable as the content calendar backend
- `influencer-marketing`: Manage creator relationships in an Airtable CRM
- `analytics-tracking`: Log campaign results back to Airtable for reporting
