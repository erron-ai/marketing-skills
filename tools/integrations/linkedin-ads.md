# LinkedIn Ads

B2B advertising platform with job title, company, seniority, and industry targeting — highest CPCs but most precise B2B audience.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | LinkedIn Marketing API |
| MCP | - | Not available |
| CLI | ✓ | See clis/linkedin-ads.js |
| SDK | - | Use API directly |

## Authentication

- **OAuth 2.0**: Access token from LinkedIn Developer App
- **Scopes needed**: `r_ads`, `r_ads_reporting`, `rw_ads`

## Common Agent Operations

### Get ad account campaign stats

```bash
GET https://api.linkedin.com/rest/adAnalytics?q=analytics&pivot=CAMPAIGN&dateRange.start.day=1&dateRange.start.month=11&dateRange.start.year=2025&dateRange.end.day=30&dateRange.end.month=11&dateRange.end.year=2025&timeGranularity=MONTHLY&campaigns[0]=urn:li:sponsoredCampaign:{campaign_id}&fields=costInLocalCurrency,impressions,clicks,externalWebsiteConversions
Authorization: Bearer {access_token}
LinkedIn-Version: 202408
```

### Get lead gen form responses

```bash
GET https://api.linkedin.com/rest/leadGenerationForms/{form_id}/submissions
Authorization: Bearer {access_token}
LinkedIn-Version: 202408
```

## Key Targeting Options

- Job title (exact and broad)
- Job seniority (manager, director, VP, C-suite)
- Company name (account list upload)
- Company size
- Industry

## Cost Management

LinkedIn CPCs are typically $8–15+. To make LinkedIn profitable:
- Target tight audiences (job title + seniority + company size)
- Use document ads and lead gen forms to lower CPL vs. sending to a landing page
- Only promote high-value content, not direct product pitches, to cold audiences

## Relevant Skills

- paid-ads
- ad-creative
- sales-enablement
