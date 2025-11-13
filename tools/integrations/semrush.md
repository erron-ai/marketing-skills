# Semrush

All-in-one SEO and competitive research platform — keyword research, competitor analysis, rank tracking, backlink analysis, and site auditing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | SEMrush API for all core data |
| MCP | - | Not available |
| CLI | ✓ | See clis/semrush.js |
| SDK | - | Use API directly |

## Authentication

- **API Key**: Found in Account Settings → API Units
- **Usage**: Pass as `key={api_key}` query parameter

## Common Agent Operations

### Get organic keyword rankings for a domain

```bash
GET https://api.semrush.com/?type=domain_organic&key={api_key}&export_columns=Ph,Po,Pp,Pd,Nq,Cp,Ur,Tr,Tc,Co,Nr,Td&domain=example.com&database=us&display_limit=10
```

### Keyword overview (volume, difficulty, CPC)

```bash
GET https://api.semrush.com/?type=phrase_this&key={api_key}&export_columns=Ph,Nq,Cp,Co,Nr,Td&phrase=project+management+software&database=us
```

### Get competing domains

```bash
GET https://api.semrush.com/?type=domain_organic_organic&key={api_key}&export_columns=Dn,Cr,Np,Or,Ot,Oi,Co&domain=example.com&database=us&display_limit=10
```

### Backlink overview for a domain

```bash
GET https://api.semrush.com/?type=backlinks_overview&key={api_key}&target=example.com&target_type=root_domain&export_columns=ascore,total,domains_num,urls_num,ips_num,ipclassc_num,follows_num,nofollows_num,texts_num,images_num,forms_num,frames_num
```

## Key Use Cases

- **Competitive keyword gap**: Find keywords competitors rank for that you don't
- **Rank tracking**: Monitor keyword positions over time
- **Site audit**: Technical SEO issues across the entire site
- **Content marketing toolkit**: Topic research and content briefs

## Rate Limits

- API units are consumed per request — monitor in the Semrush dashboard
- Rate limit: 10 requests per second

## Relevant Skills

- seo-audit
- content-strategy
- competitor-alternatives
