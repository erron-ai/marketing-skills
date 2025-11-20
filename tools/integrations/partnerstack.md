# PartnerStack

Enterprise partner and affiliate program management platform for SaaS — used by companies managing hundreds of partners and multiple program types.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | PartnerStack REST API |
| MCP | - | Not available |
| CLI | ✓ | See clis/partnerstack.js |
| SDK | - | JavaScript for tracking |

## Authentication

- **API Key + Secret**: Found in PartnerStack Settings → Company → API
- Use Basic auth: `Authorization: Basic {base64(api_key:api_secret)}`

## Common Agent Operations

### List partners

```bash
GET https://api.partnerstack.com/api/v2/partnerships?limit=20
Authorization: Basic {base64(api_key:api_secret)}
```

### Get partner performance stats

```bash
GET https://api.partnerstack.com/api/v2/analytics?group_key=partner&start_date=2025-11-01&end_date=2025-11-30
Authorization: Basic {base64(api_key:api_secret)}
```

### Track a conversion

```bash
POST https://api.partnerstack.com/api/v2/transactions
Authorization: Basic {base64(api_key:api_secret)}

{
  "external_key": "txn_abc123",
  "customer_key": "cus_xyz789",
  "amount": 7900,
  "currency": "usd"
}
```

## When to Use

- SaaS companies building a formal partner ecosystem (resellers, agencies, tech partners)
- Teams running multiple partner program types (affiliates + referrals + resellers)
- Companies that want a marketplace presence in the PartnerStack marketplace

## Relevant Skills

- referral-program
- sales-enablement
