# ZoomInfo

Enterprise B2B contact and company data platform with buying intent signals, org charts, and direct dial phone numbers.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | ZoomInfo API |
| MCP | ✓ | Available via ZoomInfo MCP |
| CLI | ✓ | See clis/zoominfo.js |
| SDK | - | Use API directly |

## Authentication

- **JWT Token**: Obtain via OAuth 2.0 client credentials grant
- Pass as `Authorization: Bearer {jwt_token}` header

## Common Agent Operations

### Search for contacts

```bash
POST https://api.zoominfo.com/search/contact
Authorization: Bearer {jwt_token}

{
  "rpp": 10,
  "page": 1,
  "outputFields": ["id", "firstName", "lastName", "email", "jobTitle", "companyName"],
  "jobTitle": ["VP of Marketing", "Chief Marketing Officer"],
  "companyIndustry": ["Software"],
  "employeeCount": {"min": 100, "max": 1000}
}
```

### Get a company profile

```bash
POST https://api.zoominfo.com/search/company
Authorization: Bearer {jwt_token}

{
  "rpp": 1,
  "outputFields": ["id", "name", "website", "employeeCount", "revenue", "techUsed"],
  "companyWebsite": "acme.com"
}
```

## Key Features

- **Intent data**: Identify companies actively researching your category based on content consumption signals
- **Org charts**: Map reporting relationships within target companies
- **Direct dials**: Verified direct phone numbers (not just main company lines)
- **Company news**: Trigger alerts on funding rounds, leadership changes, expansions

## When to Use

- Enterprise sales teams targeting large accounts
- Account-based marketing where intent data drives campaign timing
- RevOps teams that need authoritative firmographic enrichment

## Relevant Skills

- revops
- sales-enablement
- paid-ads
