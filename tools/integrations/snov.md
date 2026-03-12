# Snov.io

B2B prospecting platform that combines email finding, verification, and built-in drip campaign sequences for cold outreach.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/snov.js |
| SDK | - | Use API directly |

## Authentication

- **Access Token**: OAuth 2.0 using client_id + client_secret

### Get an access token

```bash
POST https://api.snov.io/v1/oauth/access_token

{
  "grant_type": "client_credentials",
  "client_id": "{client_id}",
  "client_secret": "{client_secret}"
}
```

## Common Agent Operations

### Find emails at a domain

```bash
POST https://api.snov.io/v2/domain-emails-with-info

{
  "access_token": "{token}",
  "domain": "acme.com",
  "type": "all",
  "limit": 10
}
```

### Find a person's email by name

```bash
POST https://api.snov.io/v1/get-emails-from-names

{
  "access_token": "{token}",
  "firstName": "Alex",
  "lastName": "Rivera",
  "domain": "acme.com"
}
```

### Verify an email

```bash
POST https://api.snov.io/v1/get-emails-verification-status

{"access_token": "{token}", "emails": ["alex@acme.com"]}
```

## Key Differentiator vs. Hunter

Snov.io includes built-in drip sequences — you can find, verify, and contact prospects all within one platform, without needing a separate cold email tool.

## When to Use

- Teams doing email finding + outreach in one workflow
- Budget-conscious outbound teams that want finding + sending without multiple subscriptions

## Relevant Skills

- cold-email
- sales-enablement
