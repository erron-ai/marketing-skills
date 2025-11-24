# AirOps

AI content workflow platform for building repeatable AI-powered processes — primarily used for programmatic SEO content generation at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | AirOps REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/airops.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in AirOps Settings → API Keys
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### Run a workflow (App)

```bash
POST https://api.airops.com/public_api/airops_apps/{app_id}/execute
Authorization: Bearer {api_key}

{
  "inputs": {
    "keyword": "project management for remote teams",
    "company_name": "Your Company",
    "target_length": 1500
  }
}
```

### Check execution status

```bash
GET https://api.airops.com/public_api/airops_apps/executions/{execution_id}
Authorization: Bearer {api_key}
```

## Key Capabilities

- **Flow builder**: Visual pipeline builder for multi-step AI workflows
- **Template library**: Pre-built templates for blog posts, product descriptions, meta tags
- **Batch execution**: Run a workflow across a spreadsheet of rows (e.g., 500 keywords)
- **Publishing integrations**: Publish directly to Webflow, WordPress, or CMS via API

## Common Use Cases

- Generating SEO-optimized blog posts at scale from keyword lists
- Writing product descriptions for large catalogs
- Creating meta titles and descriptions for programmatic pages
- Automating content briefs from SERP analysis

## When to Use

- Growth teams that want to scale content production beyond what manual writers can do
- Products with large keyword opportunities and limited writing resources

## Relevant Skills

- programmatic-seo
- content-strategy
- ai-seo
