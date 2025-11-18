# Meta Ads (Facebook & Instagram)

Social advertising platform for Facebook and Instagram — best for demand generation, visual products, and retargeting.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Meta Marketing API |
| MCP | - | Not available |
| CLI | ✓ | See clis/meta-ads.js |
| SDK | ✓ | Python, PHP official SDKs |

## Authentication

- **Access Token**: Long-lived user or system user token from Meta Business Manager
- **Ad Account ID**: Format `act_{ad_account_id}`

## Common Agent Operations

### Get campaign performance

```bash
GET https://graph.facebook.com/v20.0/act_{ad_account_id}/campaigns?fields=name,status,objective,insights{spend,impressions,clicks,conversions,cpc,cpm}&date_preset=last_30d
Authorization: Bearer {access_token}
```

### Get ad set performance

```bash
GET https://graph.facebook.com/v20.0/act_{ad_account_id}/adsets?fields=name,status,daily_budget,targeting,insights{spend,reach,frequency,cpm}&date_preset=last_7d
Authorization: Bearer {access_token}
```

### Create a campaign

```bash
POST https://graph.facebook.com/v20.0/act_{ad_account_id}/campaigns
Authorization: Bearer {access_token}

{
  "name": "Trial Signups - Nov 2025",
  "objective": "OUTCOME_LEADS",
  "status": "PAUSED",
  "special_ad_categories": []
}
```

### Get creative performance breakdown

```bash
GET https://graph.facebook.com/v20.0/act_{ad_account_id}/ads?fields=name,creative{title,body,image_url},insights{spend,ctr,cpc,cpp}&date_preset=last_7d
Authorization: Bearer {access_token}
```

## Key Concepts

- **Campaign objective**: Determines optimization — leads, conversions, awareness, traffic
- **Ad Set**: Controls audience, budget, placement, and schedule
- **Ad**: The creative — copy, image/video, and CTA
- **Pixel**: Client-side tracking for website conversions
- **CAPI**: Conversions API for server-side event tracking (required for iOS privacy changes)

## Relevant Skills

- paid-ads
- ad-creative
- analytics-tracking
