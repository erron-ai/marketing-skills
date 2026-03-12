# TikTok Ads

Video advertising platform for reaching younger demographics and consumer audiences through short-form video creative.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | TikTok Marketing API |
| MCP | - | Not available |
| CLI | ✓ | See clis/tiktok-ads.js |
| SDK | ✓ | Python, Java official SDK |

## Authentication

- **Access Token**: OAuth 2.0 from TikTok for Business Developer Portal
- **Advertiser ID**: Your TikTok Ads account ID

## Common Agent Operations

### Get campaign stats

```bash
GET https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/
Access-Token: {access_token}

?advertiser_id={advertiser_id}&report_type=BASIC&dimensions=["campaign_id"]&metrics=["spend","impressions","clicks","ctr","cpc","conversions"]&start_date=2025-11-01&end_date=2025-11-30&page_size=10
```

### Get creative performance

```bash
GET https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/?advertiser_id={advertiser_id}&report_type=BASIC&dimensions=["ad_id"]&metrics=["spend","video_play_actions","video_watched_2s","ctr","conversions"]&start_date=2025-11-01&end_date=2025-11-30
Access-Token: {access_token}
```

## Key Metrics for TikTok

- **Video Play Actions**: Total number of plays
- **2s Video Views**: Watched at least 2 seconds (signals creative stopped the scroll)
- **6s Video Views**: Strong engagement signal
- **Video Completion Rate**: Percentage who watched to the end

## Creative Best Practices

- Hook in the first 2 seconds — most important element
- Native-feeling content performs better than polished ads
- Use trending sounds when brand-appropriate
- Captions always — many users watch without sound

## When to Use

- Consumer products targeting 18–35 demographics
- Brands with video creative capacity
- Products with a visual or entertaining hook

## Relevant Skills

- paid-ads
- ad-creative
