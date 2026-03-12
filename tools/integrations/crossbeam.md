# Crossbeam (Reveal)

Partner ecosystem intelligence platform that identifies account overlaps between your CRM and your partners' CRMs — without sharing raw data.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Crossbeam REST API |
| MCP | ✓ | Available via Crossbeam MCP |
| CLI | ✓ | See clis/crossbeam.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Crossbeam Settings → API Keys
- Pass as `Authorization: Bearer {api_key}` header

## Common Agent Operations

### List partners

```bash
GET https://api.crossbeam.com/v0.1/organizations
Authorization: Bearer {api_key}
```

### Get account overlaps with a specific partner

```bash
GET https://api.crossbeam.com/v0.1/thread-reports?partner_id={partner_id}
Authorization: Bearer {api_key}
```

### Get overlap summary

```bash
GET https://api.crossbeam.com/v0.1/partner-summaries
Authorization: Bearer {api_key}
```

## How It Works

Crossbeam connects to your CRM and your partners' CRMs, then identifies accounts that appear in both — without either party having to share their full account list. Only the overlap data is shared.

**Use cases:**
- **Warm introductions**: Your partner already has a relationship with a prospect you're targeting
- **Co-selling**: Identify joint customers to pursue expansion opportunities together
- **Tech stack intelligence**: See which prospects use your partners' products (buying signal)

## When to Use

- Companies with active technology or channel partner programs
- Sales teams that want warm introductions rather than cold outreach to target accounts

## Relevant Skills

- sales-enablement
- revops
