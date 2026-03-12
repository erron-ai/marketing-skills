# Clearbit (HubSpot Breeze)

Company and person data enrichment API — now integrated into HubSpot as HubSpot Breeze. Enriches leads with company information, job titles, and firmographics in real time.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Clearbit enrichment APIs (legacy) |
| MCP | - | Not available |
| CLI | ✓ | See clis/clearbit.js |
| SDK | ✓ | Node, Python, Ruby clients |

## Authentication

- **API Key**: From Clearbit account (legacy) or via HubSpot Breeze
- Use Basic auth: `Authorization: Basic {base64(api_key:)}`

## Common Agent Operations

### Enrich a person by email

```bash
GET https://person.clearbit.com/v2/combined/find?email=alex@acme.com
Authorization: Basic {base64(api_key:)}
```

Returns: name, job title, seniority, company name, company size, industry, LinkedIn URL, avatar, location.

### Enrich a company by domain

```bash
GET https://company.clearbit.com/v2/companies/find?domain=acme.com
Authorization: Basic {base64(api_key:)}
```

Returns: company name, description, employee count, annual revenue, industry, technologies used, social profiles.

### Autocomplete company name to domain

```bash
GET https://autocomplete.clearbit.com/v1/companies/suggest?query=acme
Authorization: Basic {base64(api_key:)}
```

## Key Use Cases

- Enrich inbound form leads with company size and industry for routing
- Fill in missing lead data before sending to CRM
- Score leads based on company firmographics
- Personalize onboarding emails based on job title

## Note

Clearbit was acquired by HubSpot in 2023 and rebranded as HubSpot Breeze. Direct Clearbit API access may require a legacy account.

## Relevant Skills

- revops
- cold-email
- analytics-tracking
