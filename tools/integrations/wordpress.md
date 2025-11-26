# WordPress

Open-source CMS powering 43% of the web — extensible with plugins for SEO, forms, e-commerce, and analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API |
| MCP | - | Not available |
| CLI | ✓ | Built-in WP-CLI |
| SDK | ✓ | Language-agnostic REST API clients |

## Authentication

- **Application Passwords**: Built-in since WordPress 5.6 — generate in User Profile
- Pass as `Authorization: Basic {base64(username:app_password)}`
- **JWT**: With a plugin like JWT Authentication for WP REST API

## Common Agent Operations

### Get recent posts

```bash
GET https://yoursite.com/wp-json/wp/v2/posts?per_page=10&status=publish&_fields=id,title,link,date,excerpt
Authorization: Basic {base64(username:app_password)}
```

### Create a post

```bash
POST https://yoursite.com/wp-json/wp/v2/posts
Authorization: Basic {base64(username:app_password)}

{
  "title": "New Blog Post Title",
  "content": "<p>Post content in HTML format.</p>",
  "status": "draft",
  "categories": [5],
  "tags": [12, 15],
  "meta": {"_yoast_wpseo_metadesc": "SEO meta description here."}
}
```

### Update a post

```bash
PATCH https://yoursite.com/wp-json/wp/v2/posts/{post_id}
Authorization: Basic {base64(username:app_password)}

{"status": "publish", "meta": {"_yoast_wpseo_title": "Updated SEO Title"}}
```

## WP-CLI Commands

```bash
# List posts
wp post list --status=publish --fields=ID,post_title,post_date

# Generate content in bulk
wp post create --post_title="Title" --post_content="Content" --post_status=draft

# Search and replace across all content
wp search-replace 'old-domain.com' 'new-domain.com'
```

## Relevant Skills

- programmatic-seo
- content-strategy
- seo-audit
