# SimilarWeb

Digital intelligence platform for estimating competitor website traffic, traffic sources, audience demographics, and market sizing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | SimilarWeb API v1 |
| MCP | - | Not available |
| CLI | ✓ | See clis/similarweb.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in SimilarWeb account settings
- Pass as `api_key={api_key}` query parameter

## Common Agent Operations

### Get traffic overview for a domain

```bash
GET https://api.similarweb.com/v1/website/{domain}/total-traffic-and-engagement/visits?start_date=2025-09&end_date=2025-10&main_domain_only=false&granularity=monthly
api_key: {api_key}
```

### Get traffic sources breakdown

```bash
GET https://api.similarweb.com/v1/website/{domain}/traffic-sources/overview?start_date=2025-09&end_date=2025-10&main_domain_only=false
api_key: {api_key}
```

### Get top referring sites

```bash
GET https://api.similarweb.com/v1/website/{domain}/traffic-sources/referrals?start_date=2025-09&end_date=2025-10
api_key: {api_key}
```

### Get similar sites

```bash
GET https://api.similarweb.com/v1/website/{domain}/similar-sites
api_key: {api_key}
```

## Key Use Cases

- Estimating competitor traffic to understand market position
- Identifying which traffic sources drive competitor growth
- Market sizing for a category based on combined traffic
- Identifying high-traffic referral sources to pursue for backlinks

## Note on Data Accuracy

SimilarWeb estimates are based on panel data and modeling — not exact. Best used for directional benchmarking rather than precise analytics.

## Relevant Skills

- competitor-alternatives
- paid-ads
- content-strategy
