# Webflow

Design-first website builder and CMS with a REST API for managing CMS content programmatically — popular for marketing sites.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Webflow API v2 |
| MCP | - | Not available |
| CLI | ✓ | Built-in Webflow CLI |
| SDK | ✓ | JavaScript/Node SDK |

## Authentication

- **API Token**: Found in Webflow Account Settings → Integrations → API Access
- **OAuth 2.0**: For third-party apps integrating with multiple Webflow sites

## Common Agent Operations

### List CMS items (e.g., blog posts)

```bash
GET https://api.webflow.com/v2/collections/{collection_id}/items
Authorization: Bearer {api_token}
```

### Create a CMS item

```bash
POST https://api.webflow.com/v2/collections/{collection_id}/items/live
Authorization: Bearer {api_token}

{
  "fieldData": {
    "name": "New Blog Post Title",
    "slug": "new-blog-post-title",
    "post-body": "<p>Content in HTML</p>",
    "meta-title": "SEO Title",
    "meta-description": "SEO description"
  }
}
```

### Publish a CMS item

```bash
POST https://api.webflow.com/v2/collections/{collection_id}/items/{item_id}/live
Authorization: Bearer {api_token}
```

### Update an existing item

```bash
PATCH https://api.webflow.com/v2/collections/{collection_id}/items/{item_id}/live
Authorization: Bearer {api_token}

{"fieldData": {"meta-description": "Updated meta description for SEO"}}
```

## Key Marketing Use Cases

- Publishing programmatic SEO pages via API (integration pages, comparison pages)
- Automating CMS updates from a spreadsheet or database
- Managing a marketing site's blog and landing pages from code

## Relevant Skills

- programmatic-seo
- content-strategy
- site-architecture
