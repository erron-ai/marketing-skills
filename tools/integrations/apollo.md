# Apollo.io

B2B prospecting database with 275M+ contacts and 73M companies — combines email finding, LinkedIn enrichment, and outbound sequences in one platform.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Apollo REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/apollo.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Apollo Settings → Integrations → API
- Pass as `Content-Type: application/json` with `api_key` in the request body

## Common Agent Operations

### Search for people

```bash
POST https://api.apollo.io/v1/mixed_people/search

{
  "api_key": "{api_key}",
  "q_organization_domains": ["acme.com"],
  "person_seniorities": ["vp", "director"],
  "person_titles": ["Marketing", "Growth"]
}
```

### Enrich a person by email

```bash
POST https://api.apollo.io/v1/people/match

{
  "api_key": "{api_key}",
  "email": "alex@acme.com",
  "reveal_personal_emails": false
}
```

### Enrich a company by domain

```bash
POST https://api.apollo.io/v1/organizations/enrich

{
  "api_key": "{api_key}",
  "domain": "acme.com"
}
```

## Key Features

- **Prospecting database**: Filter by job title, seniority, company size, industry, technology used
- **Sequences**: Built-in email + LinkedIn outreach sequences
- **Chrome extension**: Find contacts from LinkedIn profiles and company websites
- **CRM sync**: Bi-directional sync with Salesforce and HubSpot

## When to Use

- Outbound sales teams building targeted prospect lists
- Marketing teams enriching inbound leads with additional firmographic data
- SDR teams running outbound sequences without a separate tool

## Relevant Skills

- cold-email
- revops
- sales-enablement
