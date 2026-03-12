# Clay

Data enrichment and outbound automation platform that waterfalls enrichment across 75+ data providers — building the richest possible prospect records with minimal cost.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Clay REST API |
| MCP | ✓ | Available via Clay MCP |
| CLI | ✓ | See clis/clay.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Clay Settings → API
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Enrich a list of leads

```bash
POST https://api.clay.com/v1/enrich
Authorization: Bearer {api_key}

{
  "records": [
    {"email": "alex@acme.com", "company": "Acme Corp"},
    {"email": "morgan@beta.io", "company": "Beta Inc"}
  ],
  "providers": ["clearbit", "apollo", "linkedin"],
  "fallback_order": true
}
```

### Run a table action via webhook

Clay exposes webhooks for triggering table actions programmatically — check your Clay account's webhook settings for the specific URL.

## What Makes Clay Different

**Waterfall enrichment**: Clay tries Provider A first, and if it doesn't have the data, automatically tries Provider B, then C — so you only pay for successful lookups and get the highest possible hit rate.

**AI actions**: Run GPT-4 or Claude prompts on each row — personalize messages, score prospects, summarize company research, all at row-level.

**Credits-based**: Pay only for successful data lookups, not API calls.

## When to Use

- Building highly enriched outbound prospect lists with multiple data sources
- Personalizing cold outreach at scale with AI-generated icebreakers
- Any situation requiring data from multiple enrichment providers without custom code

## Relevant Skills

- cold-email
- revops
- sales-enablement
